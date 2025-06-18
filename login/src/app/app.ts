import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { CommonModule } from '@angular/common';
import { Myservice } from './myservice';
import { Signupform } from './signupform/signupform';
import { AddMoney } from './add-money/add-money';
import { Payment } from './payment/payment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Loginpage,CommonModule,Signupform,AddMoney,Payment],
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login';
}
