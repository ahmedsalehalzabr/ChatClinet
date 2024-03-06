import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = 'https://localhost:7126/api/';
  members:Member[] = [];

  constructor(private http: HttpClient) { }

  getMembers(){
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'Users'/*, this.getHttpOptions()*/).pipe(
      map(members => {
        this.members = members;
        return members;
      })
    )
  }

  
 // getMember(username: string){
  //  return this.http.get<Member>(this.baseUrl + 'Users/' + username /*, this.getHttpOptions()*/);
 // }
  //عمل حيلة يكون التحميل مره واحدة من api
  getMember(username: string){
    const member = this.members.find(x => x.username === username);
    if (member) return of(member);
    return this.http.get<Member>(this.baseUrl + 'Users/' + username /*, this.getHttpOptions()*/);
  }


 // updateMember(member:Member) {
  //  return this.http.put(this.baseUrl + 'Users', member);
 // }
   //عمل حيلة يكون التحميل مره واحدة من api

   updateMember(member:Member) {
    return this.http.put(this.baseUrl + 'Users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = {...this.members[index], ...member}
      })
    )
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
