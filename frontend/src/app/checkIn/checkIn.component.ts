import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CheckInService } from '../services/checkIn.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-checkIn',
  templateUrl: './checkIn.component.html',
  styleUrls: ['./checkIn.component.css']
})

export class CheckInComponent implements OnInit {
  user = {
    visitorEmail: '',
    visitorName: '',
    visitorMobileNumber: '',
    hostEmail: '',
    hostName: '',
    hostMobileNumber: '',
    address:''
  }
  constructor(private router:Router, private checkInService: CheckInService, private toastr: ToastrService) { 

  }

  ngOnInit() {

  }
  createUser()
  {
    this.checkInService.createUser(this.user).subscribe(
      (res) => {
        console.log(res);
        if(res["success"]===true)
        {
          console.log("success");
          this.router.navigate(['/home']);
        }
        else
        {
          console.log("error");
          this.errorsmsg();
        }
      }
    )
  }
  errorsmsg(){  
    this.toastr.error("Please check the form details");  
  }
}