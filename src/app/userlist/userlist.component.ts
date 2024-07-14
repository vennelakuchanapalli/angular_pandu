import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { PipePipe } from '../pipe.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, PipePipe, NavbarComponent, HttpClientModule, FormsModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss',
  providers: [ApiService]
})
export class UserlistComponent {
  constructor(private apiservice: ApiService) { }
  inputValue: any = ""
  userlist: any = []
  tableheader: any = ["id", "username", "email", "first_name", "last_name", "address",
    "city", "state", "zip_code", "country", "phone"]
  ngOnInit() {
    this.apiservice.getUserList().subscribe((res: any) => {
      this.userlist = res.users
    }, (error) => {

    })
  }
}
