import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { PipePipe } from '../pipe.pipe';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from '../userlist/userlist.component';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-dashbaoard',
  standalone: true,
  imports: [RouterOutlet,PipePipe,CommonModule,NavbarComponent,UserlistComponent,ProductlistComponent],
  templateUrl: './dashbaoard.component.html',
  styleUrl: './dashbaoard.component.scss'
})
export class DashbaoardComponent {
  isshowinfo= false;
  heading = 'Standalone Angular Application';
  text='Welcome to the application!! Get started.. '
  date = new Date()
  show(){
    this.isshowinfo=true;
  }
}
