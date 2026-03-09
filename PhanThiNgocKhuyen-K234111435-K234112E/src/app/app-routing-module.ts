import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'not-found', pathMatch: 'full' },
  { path: 'introduction', component: About, canActivate:[authGuard] },
  { path: "not-found", component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
