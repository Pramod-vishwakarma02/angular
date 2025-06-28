import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, signupModel } from '../myservice';


@Component({
  selector: 'app-signupform',
  imports: [CommonModule, FormsModule],
  templateUrl: './signupform.html',
  styleUrl: './signupform.css'
})
export class Signupform {
  title = 'angularProject';
  SignupModel: any;

  constructor(private myservice: Myservice) { }

  // SignupModel: any ={};
  data: any;

  signupModel: signupModel = new signupModel();




  onSubmit() {
    alert('success!! :-) \n\n' + JSON.stringify(this.signupModel))


     this.myservice.getDataBySignup(this.signupModel).subscribe(data=>{
      this.data = data?.result?? null;
      console.log(data);
      alert("signup successfull!!"+ data.response);
     })
    }

}



