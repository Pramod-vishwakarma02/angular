import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { CommonModule } from '@angular/common';
import { Myservice } from './myservice';
import { Signupform } from './signupform/signupform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Loginpage,CommonModule,Signupform],
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login';
}
