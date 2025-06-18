import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-money',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css'
})
export class AddMoney {
AddMoney(amount:any): void{
  if(amount==null || amount==undefined || amount<=0){
    console.error('invalid amount');
      return;

  }
  console.log('Added money:',amount);

}
}
