import { Routes } from '@angular/router';
import { Signupform } from './signupform/signupform';
import { Loginpage } from './loginpage/loginpage';
import { Payment } from './payment/payment';
import { AddMoney } from './add-money/add-money';
import { Dashboard } from './dashboard/dashboard';
import { TransactionHistory } from './transaction-history/transaction-history';
import { Sidebar } from './sidebar/sidebar';

export const routes: Routes = [
    {path:'', redirectTo: 'loginform', pathMatch:'full'},
    {path:'signupform', component:Signupform},
    {path:'loginform', component:Loginpage},
    {path:'paymentform', component:Payment},
    {path:'addmoney', component:AddMoney},
    {path:'dashboard', component:Dashboard},
    {path:'transactionHistory', component:TransactionHistory},
    {path:'sidebar',component:Sidebar}
];

