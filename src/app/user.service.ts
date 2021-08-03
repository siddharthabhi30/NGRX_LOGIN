import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './store/models/user.model';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_URL = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }

  getUser(user:IUser) {
    console.log('service is getting called')
    return this.http.get<IUser>(this.USER_URL+`/${user.id}`).pipe(
      delay(2000)
    )
      
  }
}
