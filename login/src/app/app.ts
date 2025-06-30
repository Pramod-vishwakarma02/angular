import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Loginpage } from './loginpage/loginpage';
import { CommonModule } from '@angular/common';
import { Myservice, transactionModel } from './myservice';
// import { Signupform } from './signupform/signupform';
// import { Payment } from './payment/payment';
// import { AddMoney } from './add-money/add-money';
// import { TransactionHistory } from './transaction-history/transaction-history';
// import { Dashboard } from './dashboard/dashboard';
import { Sidebar } from './sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { Loginpage } from './loginpage/loginpage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,Sidebar,Loginpage],
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login';
  isloggedin=false;

  
  ngOnInit(): void{
    this.isloggedin=Boolean(sessionStorage.getItem("isloggedin"))
  }

  received(event:any){
    this.isloggedin=event;
  }
  
}
