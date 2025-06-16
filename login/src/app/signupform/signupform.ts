import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-signupform',
  imports: [CommonModule,FormsModule],
  templateUrl:'./signupform.html',
  styleUrl:'./signupform.css'
})
export class Signupform {
  title='angularProject';
  signupModel: any;


  constructor(private myservice: Myservice){}

  data: any;
  

  onsignupSubmit(form: Signupform){
    alert('success!! :-)\n\n' + JSON.stringify(this.signupModel))
    this.myservice.getDataBySignup(this.signupModel).subscribe(data=>{
      this.data=data.result
      alert(data.response);
      sessionStorage.setItem("number",this.data.phoneNumber)
      

    })
  }


}
