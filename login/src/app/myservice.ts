import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginpage } from './loginpage/loginpage';
import { Signupform } from './signupform/signupform';
import { Dashboard } from './dashboard/dashboard';

@Injectable({
  providedIn: 'root'
})
export class Myservice {
  

  constructor(private http: HttpClient) { }
  url='https://skytm-api.azurewebsites.net/'
  getdatabylogin(data:loginModel):Observable<any>{
    return this.http.post<any>(this.url+ '/api/Auth/login',data)
  }

  getDataBySignup(data:Signupform):Observable<any>{
    return this.http.post<any>(this.url+'/api/Auth/signup',data)
  }

  Payment(data:SendMoneyModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Transactions/pay',data)
  }

  AddMoney(data:AddmoneyModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Wallet/add',data)
  }
  Transaction(data:transactionModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Transactions/history',data)
  }
  deletebyid(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/Transactions/DeleteTransectionById?tid='+id)
  }

  showMoney(data:any):Observable<any>{
    return this.http.get<any>(this.url+'/api/Users/balance?phoneNumber='+data)
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
  
  isAdmin: true | undefined
}

export class SendMoneyModel{
  senderPhoneNumber: string | undefined;
  recieverPhoneNumber: string | undefined;
  amount: number | undefined;

}

export class AddmoneyModel{
  PhoneNumber: string | undefined;
  amount: number | undefined;
}

export class transactionModel{
PhoneNumber:string | undefined;

}