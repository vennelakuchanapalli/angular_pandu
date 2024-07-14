import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DashbaoardComponent } from './dashbaoard/dashbaoard.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:"",component:NavbarComponent},
    {path:'app',component:DashbaoardComponent },
    {path:'home',component:DashbaoardComponent},
    {path:'productlist',component:ProductlistComponent},
    {path:'userlist',component:UserlistComponent},
    {path: '**',component:AppComponent}

];
