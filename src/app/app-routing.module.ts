import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchRepoComponent } from './component/github-search-repo/github-search-repo.component';
import { GithubSearchComponent } from './component/github-search/github-search.component';
// import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  // {path:"home",component: NavbarComponent},
  {path:"findUsers",component:GithubSearchComponent},
  {path:"findRepo", component:GithubSearchRepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
