import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ptb2 } from './ptb2/ptb2';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Customer } from './customer/customer';
import { Exercise18 } from './exercise18/exercise18';
import { About } from './about/about';
import { PagenotFound } from './pagenot-found/pagenot-found';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { ListcustomerService } from './listcustomer-service/listcustomer-service';
import { ListcustomerHTTPService } from './listcustomer-httpservice/listcustomer-httpservice';
import { Contact } from './contact/contact';
import { Exercise50 } from './exercise50/exercise50/exercise50';
import { Ex50New } from './exercise50/ex50-new/ex50-new';
import { Ex50Details } from './exercise50/ex50-details/ex50-details';
import { Ex50Edit } from './exercise50/ex50-edit/ex50-edit';
import { Ex50Delete } from './exercise50/ex50-delete/ex50-delete';
import { Books } from './books/books';
import { BookNew } from './book-new/book-new';
import { BookUpdate } from './book-update/book-update';
import { BookDelete } from './book-delete/book-delete';
import { Forms } from './forms/forms';
import { FormsReactive } from './forms-reactive/forms-reactive';
import { BookDetails } from './book-details/book-details';
import { FakeProduct } from './fake-product/fake-product';
import { FakeProductEx27 } from './fake-product-ex27/fake-product-ex27';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Fashion } from './fashion/fashion';
import { FashionDetails } from './fashion-details/fashion-details';
import { Login } from './login/login';
import { Menu } from './menu/menu';

@NgModule({
  declarations: [
    App,
    Ptb2,
    Mybinding,
    Ptb1,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Listproduct3,
    Customer,
    Exercise18,
    About,
    PagenotFound,
    Listcustomer,
    Customerdetail,
    ListcustomerService,
    ListcustomerHTTPService,
    Contact,
    Exercise50,
    Ex50New,
    Ex50Details,
    Ex50Delete,
    Ex50Edit,
    Books,
    BookNew,
    BookUpdate,
    BookDelete,
    Forms,
    FormsReactive,
    BookDetails,
    FakeProduct,
    FakeProductEx27,
    Fashion,
    FashionDetails,
    Login,
    Menu
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
