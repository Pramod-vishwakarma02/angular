import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { Loginpage } from '../loginpage/loginpage';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(private  router: Router){}
  
  @Output() logicEvent = new EventEmitter<string>();
  logout()
  {
    sessionStorage.removeItem('number');
    sessionStorage.removeItem('isloggedin')
    this.router.navigate(['./Loginpage']);
    this.send(false);

  }
  send(val:any){
    this.logicEvent.emit(val);
  }

}
