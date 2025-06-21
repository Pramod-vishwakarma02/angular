import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { CommonModule } from '@angular/common';
import { Myservice, transactionModel } from './myservice';
import { Signupform } from './signupform/signupform';
import { Payment } from './payment/payment';
import { AddMoney } from './add-money/add-money';
import { TransactionHistory } from './transaction-history/transaction-history';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Loginpage,CommonModule,Signupform,Payment,AddMoney,Dashboard,TransactionHistory],
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login';
}
