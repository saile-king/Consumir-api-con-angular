import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-users-github',
  templateUrl: './users-github.component.html',
})
export class UsersGithubComponent implements OnInit {
  users:any = []
  name: string = "";
  constructor(public api:APIService) {

  }

  ngOnInit(): void {

  }

  searchUser(){
    this.limpiar();
    this.api.getUsers(this.name).subscribe((a:any)=>{
      this.users = a;
      console.log(a)
    });
  }

  limpiar(){
    this.users = []
  }

}
