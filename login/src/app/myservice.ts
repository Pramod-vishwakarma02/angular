import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginpage } from './loginpage/loginpage';
import { Signupform } from './signupform/signupform';

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

