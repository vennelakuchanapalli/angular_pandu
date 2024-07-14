import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) {

  }
  getUserList() {
    return this.httpclient.get("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/getAllUsers.php")
  }
  getAllProducts() {
    return this.httpclient.get("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/products/getAll.php")
  }

}
