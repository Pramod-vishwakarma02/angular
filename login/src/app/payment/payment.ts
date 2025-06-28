import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, SendMoneyModel } from '../myservice';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  amount: number=0;
  data: any;
  SendMoneyModel: SendMoneyModel = new SendMoneyModel();

  userphonenumber: string | undefined;
  userList: any;

  constructor(private myservice: Myservice , public router:Router) { }
  SendMoney(phoneNumber: any) {


    this.SendMoneyModel.senderPhoneNumber = this.userphonenumber?? "";

    
  const payload = {
    senderPhoneNumber: this.userphonenumber,
    recieverPhoneNumber: phoneNumber,
    amount: Number(this.amount)  // Ensure it's a number
  };

  this.myservice.Payment(this.SendMoneyModel).subscribe(data => {
    this.data = data.result ?? null;
    alert(data.response);
    this.router.navigate(["/dashboard"]);
    
    console.log(this.SendMoneyModel);
  });

  }

  getallusers() {
    this.myservice.getusers().subscribe(data=>{
      this.userList = data.result
    })
  }

  ngOnInit(): void {
    this.userphonenumber = sessionStorage.getItem("number") ?? "";
    this.getallusers()
  }



}


