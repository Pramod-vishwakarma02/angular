import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
amount : number | undefined;
  userPhonenumber: string | null | undefined;
data:any;
constructor(private myservice: Myservice){}

walletMoney(): void{
this.myservice.showMoney(this.userPhonenumber).subscribe({
  next: (data: { result: any; response: any; })=>{
    this.data=data.result
    alert(data.response?? 'data fetch succesfully')
  }
})
}

ngOnInit():void{

  this.userPhonenumber= sessionStorage.getItem("number")
  // this.userPhone = JSON.stringify (sessionStorage.getItem("number"));
  console.log(sessionStorage.getItem('number'))
  this.walletMoney();
}
}
