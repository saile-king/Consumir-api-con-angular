import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {

  name!: string;
  urlImagen!: string;

  constructor(private githubService : GithubService) { }

  ngOnInit(): void {
  }

  search(){
    this.githubService.getUser(this.name).subscribe((data:any) => {
      this.urlImagen = data.items[0].avatar_url
    })
  }

}
