import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {
  user = 'vionaosiako'
  private username!:string;

  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  
  UserURL:string = `https://api.github.com/users/${this.user}`
  RepoURL:string = `https://api.github.com/users/${this.user}/repos`
  repoName!: string;
  constructor(private http : HttpClient) {}

  //github user
  getUserData(){
    return this.http.get<any[]>(`${this.apiUrl}${this.username}??access_token=+${this.apiKey}`).toPromise()
    
  }

  getUsername(username:string){
    this.username = username
  }

  getUserRepos(){
    return this.http.get<any[]>(`${this.apiUrl}${this.username}/repos??access_token=+${this.apiKey}`).toPromise();
  }

  getRepos(repositories:string){
    return this.repoName = repositories
  }

  //method to get users
  getUsers():Observable<any>{
      return this.http.get<any>(this.UserURL)
  }
  //method to get repos
  getRepo():Observable<any>{
    return this.http.get<any>(this.RepoURL)}


}