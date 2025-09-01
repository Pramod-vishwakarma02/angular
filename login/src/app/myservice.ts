import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Loginpage } from './loginpage/loginpage';
// import { Signupform } from './signupform/signupform';
// import { Dashboard } from './dashboard/dashboard';

@Injectable({
  providedIn: 'root'
})
export class Myservice {
  SendMoney(phoneNumber: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http: HttpClient) { }
  url='https://localhost:7220/swagger/index.html'
  
  getdatabylogin(data:loginModel):Observable<any>{
    return this.http.post<any>(this.url+ '/api/Auth/login',data)
  }

  getDataBySignup(data:signupModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Auth/Register',data)
  }

  Payment(data:SendMoneyModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Transaction/PayMoney',data,
      {
      headers: { 'Content-Type': 'application/json' }
    }
    )
  }

  AddMoney(data:AddmoneyModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Wallet/add',data)
  }
  Transaction(data:transactionModel):Observable<any>{
    return this.http.get<any>(this.url+'/api/Transaction/history?phoneNumber=' +data)
  }
  deletebyid(tid: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/Transaction/DeleteTransactionById?tid='+tid)
  }

  showMoney(data:any):Observable<any>{
    return this.http.get<any>(this.url+'/api/User/balance?phoneNumber='+data)
  }

  getusers(): Observable<any> {
    return this.http.get<any>(`${this.url}/api/User/all?phoneNumber=`)
  }

  deleteAll(phoneNumber: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/Transaction/DeleteAllHistory?phoneNumber='+phoneNumber)
  }



}
export class loginModel
{
  phoneNumber: string | undefined;
  password: string | undefined;
}

export class signupModel{
  username: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  gender: string | undefined;
  password: string | undefined;
}

export class SendMoneyModel{
  senderPhoneNumber!: string;
  recieverPhoneNumber!: string;
  amount: number | undefined;

}

export class AddmoneyModel{
  phoneNumber: string | undefined | null;
  amount: number | undefined;
}

export class transactionModel{
PhoneNumber:string | undefined;

}

export class deleteaAllModel{
phoneNumber: string | undefined;

}

export class deleteByIdModel{
  tid: number | undefined;
}

export class showmoney{
  phoneNumber: number | undefined;
  
}
