import { Component } from '@angular/core';

import { PipePipe } from './pipe.pipe';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PipePipe,CommonModule,UserlistComponent,ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pandu';
  
}
