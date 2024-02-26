import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = 'https://localhost:7126/api/';

  constructor(private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'Users'/*, this.getHttpOptions()*/);
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'Users/' + username /*, this.getHttpOptions()*/);
  }
/*
  getHttpOptions() {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + user.token
      })
    }
  }*/
}
