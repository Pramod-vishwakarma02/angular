import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,TableModule],
  templateUrl:'./dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
amount : number | undefined;
  userPhonenumber: string | null | undefined;
data:any;
constructor(private myservice: Myservice){}



ngOnInit():void{

  this.userPhonenumber= sessionStorage.getItem("number")
  // this.userPhone = JSON.stringify (sessionStorage.getItem("number"));
  // console.log(sessionStorage.getItem('number'))
  // this.walletMoney();
  this.myservice.showMoney(this.userPhonenumber).subscribe({
  next: (data)=>{
    console.log(this.amount);
    this.amount=data.result.amount;
  }
})

}
}
