import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, transactionModel } from '../myservice';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule,FormsModule, TableModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory {
  data1: any = null;
  data: any = null;
  data2: any = null;
  transactionModel: transactionModel = new transactionModel();
  userphoneNumber: any;
  
  constructor(private myservice: Myservice) { }

  seeTransaction(): void {

    this.transactionModel.PhoneNumber = this.userphoneNumber;

    console.log('transaction history', this.transactionModel)

    this.myservice.Transaction(this.userphoneNumber).subscribe({
      next: (data) => {
        console.log('API raw data', data);
        this.data1 = data?.result ?? data;
        // alert(data?.response ?? 'Transaction history fetched!');
      },

      error: (err) => {
        // console.error('Error fetching transaction history:', err);
        alert('Something went wrong!');
      }
    });
  }

  ngOnInit(): void {

    // this.userphoneNumber = sessionStorage.getItem("number");
    // this.seeTransaction();


    this.userphoneNumber = sessionStorage.getItem("number");
    if (this.userphoneNumber) {
      this.seeTransaction(); 
    } else {
      alert('Phone number not found.');
    }
  }



  deletehistoryById(tid: any) {
    this.myservice.deletebyid(tid).subscribe(data => {
      this.data = data.result;
      this.seeTransaction();
      alert('transaction history deleted successfully!!');
    })


  }



  deleteAll(): void {
    // console.log("Deleting history for number:", phoneNumber);
    this.myservice.deleteAll(this.userphoneNumber).subscribe(data2 => {
      this.data2 = data2;
      this.seeTransaction();
      alert(data2.response ?? 'transaction history deleted successfully');
    }
      
    )
  }

  
}