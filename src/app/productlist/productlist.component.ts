import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { PipePipe } from '../pipe.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,PipePipe,NavbarComponent,HttpClientModule,FormsModule,],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
  providers: [ApiService]
 
})
export class ProductlistComponent {
constructor(private apiservice:ApiService){}

inputValue:any = ""
productlist:any=[]
tableheader = [ "id",
"name",
"description",
"price",
"sku",
"category",
"stock_quantity",

"created_at",
"updated_at"]

ngOnInit(){
  this.apiservice.getAllProducts().subscribe((res:any)=>{
this.productlist = res.products
  },(error)=>{})
}
}
