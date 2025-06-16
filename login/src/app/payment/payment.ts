import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [CommonModule,FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  amount='';
  SendMoney(amount: any){
    console.log('SendMoney :', amount);
  }

}
