import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';

import { Shopping } from './shopping/shopping';
import { Cart } from './cart/cart';
import { Revenue } from './revenue/revenue';
import { VIP } from './vip/vip';

import { authGuard } from './auth-guard';

const routes: Routes = [

  { path: '', redirectTo: 'shopping', pathMatch: 'full' },

  { path: 'shopping', component: Shopping, canActivate:[authGuard] },

  { path: 'cart', component: Cart, canActivate:[authGuard] },

  { path: 'revenue', component: Revenue, canActivate:[authGuard] },

  { path: 'vip', component: VIP, canActivate:[authGuard] },

  { path: '**', component: PageNotFound }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
