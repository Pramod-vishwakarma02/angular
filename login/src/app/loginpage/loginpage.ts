import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from '../myservice';

@Component({
  selector: 'app-loginpage',
  imports: [CommonModule,FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
  loginModel: any={};

  submitted = false;
  data: any;
  myservice: any;

  onSubmit(){
    alert('success!! :-)\n\n' +JSON.stringify(this.loginModel))
  }

  constructor(private router: Router, ){}
  
  onLoginSubmit(form:loginModel){
    this.myservice.login(form).subscribe((data: { result: any; response: any; })=>{
      this.data=data.result
      alert(data.response);
      sessionStorage.setItem("number",this.data.phoneNumber)
    })
  }

}
