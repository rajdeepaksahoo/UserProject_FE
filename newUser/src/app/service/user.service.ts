import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userId:String

  private url="http://backend:8084/user"
  id: number;
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>(`${this.url}/all`)
  }

  getOneUser(userId:String):Observable<UserEntity>{
    return this.http.get<UserEntity>(`${this.url}/search/${userId}`)
  }

  deleteUser(userId:String){
    return this.http.delete(`${this.url}/delete/${userId}`)
  }
  updateUser(user:UserEntity ){
    return this.http.put(`${this.url}/updateuser`,user)
  }
  addUser(user:UserEntity){
    return this.http.post(`${this.url}/adduser`,user)
  }
}
