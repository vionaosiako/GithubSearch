import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {
  user = 'vionaosiako'
  
  UserURL:string = `https://api.github.com/users/${this.user}`
  RepoURL:string = `https://api.github.com/users/${this.user}/repos`
  constructor(private http : HttpClient) {}

  //method to get users
  getUsers():Observable<any>{
      return this.http.get<any>(this.UserURL)
  }
  //method to get repos
  getRepo():Observable<any>{
    return this.http.get<any>(this.RepoURL)
}


}
