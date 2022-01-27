import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private obj:any = [];
  private tamaño:any = 5;
  private url:string = "https://api.github.com/search/users?q=";
  constructor(private http : HttpClient) { }


  getUsers(name: string){
    return this.http.get(`${this.url}"${name}"`).pipe(map((o:any)=>{
      this.obj = o.items.slice(0, 10)
      return this.obj;
    }));
  }

  ShowUser(username:string){
    return this.http.get(`https://api.github.com/users/${username}`);
  }

}
