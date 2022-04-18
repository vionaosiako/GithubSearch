import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/class/repo';
import { ServiceAPIService } from 'src/app/service/service-api.service';

@Component({
  selector: 'app-github-search-repo',
  templateUrl: './github-search-repo.component.html',
  styleUrls: ['./github-search-repo.component.css']
})
export class GithubSearchRepoComponent implements OnInit {
  username:string= "";
  repos!:any;
  
  constructor(private useServiceApi :ServiceAPIService) { }

  ngOnInit(): void {

    this.useServiceApi.getRepo().subscribe(
      data => {
        this.repos = data
      console.log(this.repos);
    }
    )
  }

}
