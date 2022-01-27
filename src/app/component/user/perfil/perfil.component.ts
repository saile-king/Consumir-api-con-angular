import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private user_id:string = ""
  public user:any = [];
  constructor(private url:ActivatedRoute, private api:APIService) { }

  ngOnInit(): void {
    this.url.paramMap.subscribe((res:any)=>{
      this.user_id = res.params.user;
      this.api.ShowUser(this.user_id).subscribe((p:any)=>{
        this.user = p;
      });
    })
  }



}
