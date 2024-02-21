import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from '../_service/account.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit {
  @Output() cancelRegister = new EventEmitter();
 // @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  model: any = {};

  constructor(private accountService: AccountService , private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next:() => {
      this.cancel();
    }, 
    error: error =>  this.toastr.error(error.error),
  })}

  cancel() {
    this.cancelRegister.emit(false);
  }

} 