import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';

const routes: Routes = [
  { path: 'introduction', component: About },
  { path: "not-found", component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
