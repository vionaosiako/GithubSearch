import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { ServiceAPIService } from 'src/app/service/service-api.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user!:User;
  repos!: any;
  userProfile! : any;
  username:string='';
  constructor(private useServiceApi :ServiceAPIService) { }

  searchUser(){
    this.useServiceApi.getUsername(this.username)
    this.useServiceApi.getUserData().then( (user: any)=>{
      this.userProfile=user;
    })

    this.getUserRepositories();
  }

  getUserRepositories(){
    this.useServiceApi.getUsername(this.username);
    this.useServiceApi.getUserRepos().then( (repos: any)=> {
      this.repos = repos;
    })
  }

  ngOnInit(): void {

    this.searchUser();
    this.getUserRepositories();
    // this.useServiceApi.getUsers().subscribe(
    //   data => {
    //     this.user = data
    //}
    //)
    
  }

}