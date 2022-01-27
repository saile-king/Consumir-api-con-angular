import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { UsersGithubComponent } from './users-github/users-github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    UsersGithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
