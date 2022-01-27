import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url : string = "https://api.github.com/search/users?q=";
  constructor(private http : HttpClient) { }

  getUser(name : string){
      return this.http.get(this.url+name)
  }
}
