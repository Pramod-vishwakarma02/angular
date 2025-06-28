import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Myservice } from '../myservice';

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

  

  constructor(private router: Router, public myService:Myservice ){}
  
  onLoginSubmit(){
    this.myService.getdatabylogin(this.loginModel).subscribe((data: { result: any; response: any; })=>{
      this.data=data.result
      console.log(data)
      alert(data.response);
      sessionStorage.setItem('number',data.result.phoneNumber);
      this.router.navigate(['/dashboard']);
    })
  }

  gotosignup(){
    this.router.navigate(['/signupPage']);
  }

  

}
