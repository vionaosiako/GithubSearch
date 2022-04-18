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
    this.useServiceApi.getUserName(this.username)
    this.useServiceApi.getUserData().then( (user: any)=>{
      this.userProfile=user;
    })
  }

  ngOnInit(): void {

    this.searchUser();
    // this.useServiceApi.getUsers().subscribe(
    //   data => {
    //     this.user = data
    //}
    //)
    
  }

}