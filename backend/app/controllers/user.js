const path = require("path")
const userService = require('../services/user');
const apiError = require(path.resolve("app/utils/api-errors"));
const { _success, _error } = require(path.resolve("app/utils/response_handler"));
var nodemailer = require('nodemailer');
const constants = require(path.resolve("app/config/constant"));


function mail(user, message, title)
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: constants.mailId,
               pass: constants.pass
           }
        });
       const mailOptions = {
        from: constants.mailId, // sender address
        to: user, // list of receivers
        subject: title, // Subject line
        html: message
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
        });
}

module.exports = {
    users: async (req, res) => 
    {
        try
        {
            visitor = {
                visitorName: req.body.visitorName,
                visitorEmail: req.body.visitorEmail, 
                visitorMobileNumber: req.body.visitorMobileNumber,
                hostName: req.body.hostName,
                hostEmail: req.body.hostEmail, 
                hostMobileNumber: req.body.hostMobileNumber,
                address: req.body.address
            }
            var checkInDate = new Date().toUTCString();
            visitor.checkIn = new Date(checkInDate).toISOString();

            let newUser = await userService.createUser(visitor);
            var checkIn = new Date(newUser.checkIn);
            newUser.dataValues.checkIn = checkIn.toString();
            res.send(_success(newUser));

            message = "<ul>"+
                "<li>"+ "Name: " + newUser.visitorName+"</li>"+
                "<li>"+ "Email: " + newUser.visitorEmail+"</li>"+
                "<li>"+ "Mobile Number: " + newUser.visitorMobileNumber+"</li>"+
                "<li>"+ "Check-In Time: " + newUser.checkIn+"</li>"+
            "</ul>";
            title = "Your meeting is scheduled with "+ newUser.visitorName+"!"; 
            mail(newUser.hostEmail, message, title);
        
            const client = require('twilio')(constants.accountSid, constants.authToken);
            toHost = "Visitor's Details\n";
            toHost+="Name: "+newUser.visitorName+"\n";
            toHost+="Email: "+newUser.visitorEmail+"\n";
            toHost+="Mobile Number: "+newUser.visitorMobileNumber+"\n";
            toHost+="Check-In Time: "+newUser.checkIn+"\n";

            client.messages
                .create({
                    body: toHost,
                    from: '+18437514241',
                    to: '+91'+newUser.hostMobileNumber
                })
                .then(message => console.log(message.sid));
        }
        catch (error)
        {
            res.send(_error(error));
        }
    },
    checkOut: async (req, res) => 
    {
        try
        {
            response = {
                visitorMobileNumber: req.body.visitorMobileNumber,
                checkOut: null
            }
            var userDetails = await userService.getUser(response);

            var date = new Date();
            var checkOutDate = date.toUTCString();
            var checkOutTime = {
                checkOut: new Date(checkOutDate).toISOString()
            }
            userId = {
                id: userDetails[0].id
            }
            checkInTime  = {
                checkIn: userDetails[0].checkIn.toString()
            }
            var userStatus = await userService.updateUser(checkOutTime,userId);
            res.send(_success(userStatus));

            message = "<ul>"+
                "<li>"+ "Name: " + userDetails[0].visitorName+"</li>"+
                "<li>"+ "Mobile Number: " + userDetails[0].visitorMobileNumber+"</li>"+
                "<li>"+ "Check-In Time: " + checkInTime.checkIn+"</li>"+
                "<li>"+ "Check-Out Time: " + date+"</li>"+
                "<li>"+ "Host Name: " + userDetails[0].hostName+"</li>"+
                "<li>"+ "Address Visited: " + userDetails[0].address+"</li>"+
            "</ul>"// plain text body
            title = "Thanks for visiting!!";
            mail(userDetails[0].visitorEmail, message, title);
        }
        catch (error)
        {
            res.send(_error(error));
        }
    },   
}