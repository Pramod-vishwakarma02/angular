import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddmoneyModel, Myservice } from '../myservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css'
})
export class AddMoney {
  amount = '';
  data: any;
  userPhonenumber: string | undefined | null;

  constructor(private myservice: Myservice , public router: Router) { }

  AddMoney(Amount: any): void {
  if(Amount==null || Amount==undefined || Amount<=0){
    console.log('invalid amount');
    return;
  }
  console.log('Added money: ', Amount);

  const model = new AddmoneyModel();
  model.amount = Amount;
  model.phoneNumber = sessionStorage.getItem("number");


  this.myservice.AddMoney(model).subscribe(data=>{
    this.data = data.result?? null;
    alert(data.response?? 'operation completed!');
    this.router.navigate(["/dashboard"]);


  })

}

ngOnInit(): void{
  const userPhonenumber = sessionStorage.getItem("number");
}
}
