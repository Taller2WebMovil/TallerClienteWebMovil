import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5216/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuarioByEmail(email:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?email=${email}`);
  }

  getAllUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }
}

