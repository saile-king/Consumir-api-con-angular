import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './component/user/perfil/perfil.component';
import { UsersGithubComponent } from './users-github/users-github.component';

const routes: Routes = [
  { path: '', component: UsersGithubComponent },
  { path: 'user/:user', component: PerfilComponent },
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
