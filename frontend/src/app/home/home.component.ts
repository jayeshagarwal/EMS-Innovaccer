import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { HomeService } from '../services/home.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router, private homeService: HomeService) { }

  ngOnInit() {

  }
  checkIn()
  {
    this.router.navigate(['/checkIn']);
  }

  checkOut()
  {
    this.router.navigate(['/checkOut']);
  }
}