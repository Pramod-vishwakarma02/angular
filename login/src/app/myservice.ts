import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginpage } from './loginpage/loginpage';
import { Signupform } from './signupform/signupform';
import { AddMoney } from './add-money/add-money';

@Injectable({
  providedIn: 'root'
})
export class Myservice {
  static getDataBySignup: any;

  constructor(private http: HttpClient) { }
  url='https://skytm-api.azurewebsites.net/'
  getdatabylogin(data:loginModel):Observable<any>{
    return this.http.post<any>(this.url+ '/api/Auth/login',data)
  }

  getDataBySignup(data:Signupform):Observable<any>{
    return this.http.post<any>(this.url+'/api/Auth/signup',data)
  }

  AddMoney(data:AddMoneyModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Wallet/add',data)
  }

  SendMoney(data:PaymentModel):Observable<any>{
    return this.http.post<any>(this.url+'/api/Transactions/pay',data)
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
  
  isAdmin: true | undefined;
}

export class AddMoneyModel{
  PhoneNumber: string | undefined;
  amount: number | undefined;
}

export class PaymentModel{
  senderPhoneNumber: string | undefined;
  recieverPhoneNumber: string | undefined;
  amount: number | undefined;
}