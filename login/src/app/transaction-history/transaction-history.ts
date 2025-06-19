import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, transactionModel } from '../myservice';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule,FormsModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory {
data: any = null;
  historyModel: transactionModel = new transactionModel();
  userphoneNumber: any;
  constructor(private myservice: Myservice) { }

  seeTransaction(): void {

    this.historyModel.PhoneNumber = this.userphoneNumber;

    console.log('transaction history', this.historyModel)

    this.myservice.Transaction(this.userphoneNumber).subscribe({
      next: (data) => {
        console.log('API raw data', data);
        this.data = data?.result ?? data;
        // alert(data?.response ?? 'Transaction history fetched!');
      },

      error: (err) => {
        console.error('Error fetching transaction history:', err);
        alert('Something went wrong!');
      }
    });
  }

  ngOnInit(): void {

    this.userphoneNumber = sessionStorage.getItem("number");
    this.seeTransaction();
  }

  deletehistoryById(transactionId: any) {
    this.myservice.deletebyid(transactionId).subscribe(data=> {
      this.data=data.result?? null;
      alert('history deleted succesfully');
    })

  }
  
}

