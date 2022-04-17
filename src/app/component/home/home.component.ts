import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { ServiceAPIService } from 'src/app/service/service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!:User;
  constructor(private useServiceApi :ServiceAPIService) { }

  ngOnInit(): void {
    this.useServiceApi.getUsers().subscribe(
      data => {
        this.user = data
      console.log(this.user);
    }
    )
  }
}