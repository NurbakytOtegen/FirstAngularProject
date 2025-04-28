import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  _id?: string,
  username: string,
  email: string,
  password: string
}

export interface newUser {
  username: string,
  email: string,
  password: string
}

export interface Login {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3001/api/users'

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.URL}/register`, user)
  }

  login(login: Login): Observable<any> {
    return this.http.post(`${this.URL}/login`, login)
  }

  userList(): Observable<User[]> {
    const token = localStorage.getItem('token')
    return this.http.get<User[]>(this.URL, {
      headers: {Authorization: `Bearer ${token}`}
    })
  }

}
