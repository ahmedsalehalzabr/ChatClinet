import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'clinet';
  users: any;
constructor(private http: HttpClient){

}
ngOnInit(): void {
  this.http.get('https://localhost:7126/api/Users').subscribe({
    next: response => this.users = response,
    error: error => console.log(error),
    complete: () => console.log('completed')
  })
}

}