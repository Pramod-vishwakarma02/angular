// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,FormsModule,TableModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(private router: Router){}

@Output() logicEvent = new EventEmitter<string>();
logout()
{
  sessionStorage.clear(); // or sessionStorage.removeItem('isloggedin');
    this.router.navigate(['/loginpage']);
}

send(val:any){
  this.logicEvent.emit(val);
}


}
