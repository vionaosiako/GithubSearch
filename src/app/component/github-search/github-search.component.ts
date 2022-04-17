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
  constructor(private useServiceApi :ServiceAPIService) { }

  ngOnInit(): void {
    this.useServiceApi.getUsers().subscribe(
      data => {
        this.user = data
    }
    )
    
  }

}
