import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CheckOutService } from '../services/check-out.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})

export class CheckOutComponent implements OnInit {
  user = {
    visitorMobileNumber: '',
  }
  constructor(private router:Router, private checkOutService: CheckOutService, private toastr: ToastrService) { 

  }

  ngOnInit() {

  }
  updateUser()
  {
    this.checkOutService.updateUser(this.user).subscribe(
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
    this.toastr.error("You have already been check out from all your meetings.");  
  }
}