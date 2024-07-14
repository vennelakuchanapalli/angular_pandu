import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { ProductlistComponent } from '../productlist/productlist.component';
import { UserlistComponent } from '../userlist/userlist.component';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { PipePipe } from '../pipe.pipe';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,PipePipe,CommonModule,UserlistComponent,ProductlistComponent,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



}
