import { Routes } from '@angular/router';
import { Signupform } from './signupform/signupform';
import { Loginpage } from './loginpage/loginpage';
import { Payment } from './payment/payment';
import { AddMoney } from './add-money/add-money';
import { Dashboard } from './dashboard/dashboard';
import { TransactionHistory } from './transaction-history/transaction-history';
import { Sidebar } from './sidebar/sidebar';
import { signupModel } from './myservice';


export const routes: Routes = [
    { path: '', redirectTo: 'loginform', pathMatch: 'full'},
    { path: 'signupform', component: Signupform },
    { path: 'loginpage', component: Loginpage },
    { path: 'paymentMoney', component: Payment }, // Changed to 'payment' for consistency
    { path: 'AddMoney', component: AddMoney }, // Changed to 'add-money' for consistency
    { path: 'dashboard', component: Dashboard },
    { path: 'history', component: TransactionHistory }, // Changed to 'transaction-history' for consistency
    { path: 'sidebar', component: Sidebar },
    { path: 'loginform', component: Loginpage },
    { path: 'signupPage', component: Signupform },
];
