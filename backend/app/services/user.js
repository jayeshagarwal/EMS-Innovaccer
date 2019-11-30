const path = require("path")
const User = require('../models/user')


module.exports = {
    createUser(request)
    {
        return User.create(request)
    },
    getUser(request)
    {
        return User.findAll({
            limit: 1,
            where: request,
            order: [ [ 'createdAt', 'DESC' ]]
          })
    },
    updateUser(request,id)
    {
        return User.update(request,{where: id})
    }
}