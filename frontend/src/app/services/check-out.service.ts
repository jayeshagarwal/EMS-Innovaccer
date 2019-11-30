import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CheckOutService {
  private userUrl = 'http://localhost:4002/api/checkOut/';
  constructor(private http: HttpClient) { }

  updateUser(user) {
    return this.http.post(this.userUrl, user, httpOptions);
  }
}
