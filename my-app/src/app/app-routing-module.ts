import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { ListcustomerService } from './listcustomer-service/listcustomer-service';
import { ListcustomerHTTPService } from './listcustomer-httpservice/listcustomer-httpservice';
import { Forms } from './forms/forms';
import { FormsReactive } from './forms-reactive/forms-reactive';
import { PagenotFound } from './pagenot-found/pagenot-found';
import { Ex50Delete } from './exercise50/ex50-delete/ex50-delete';
import { Ex50Edit } from './exercise50/ex50-edit/ex50-edit';
import { Ex50Details } from './exercise50/ex50-details/ex50-details';
import { Ex50New } from './exercise50/ex50-new/ex50-new';
import { BookNew } from './book-new/book-new';
import { Books } from './books/books';
import { BookUpdate } from './book-update/book-update';
import { BookDelete } from './book-delete/book-delete';
import { Fashion } from './classes/ifashion';
import { Exercise50 } from './exercise50/exercise50/exercise50';
import { BookDetails } from './book-details/book-details';
import { FakeProduct } from './fake-product/fake-product';
import { FakeProductEx27 } from './fake-product-ex27/fake-product-ex27';

const routes: Routes = [
  { path: "introduction", component: About },
  { path: "product1", component: Listproduct1 },
  { path: "product2", component: Listproduct2 },
  { path: "product3", component: Listproduct3 },
  { path: "list-customer", component: Listcustomer },
  { path: "list-customer/:id", component: Customerdetail },
  { path: "list-customer-service", component: ListcustomerService },
  { path: "list-customer-service/:id", component: Customerdetail },
  { path: "list-customer-http-service", component: ListcustomerHTTPService },
  { path: "list-customer-http-service/:id", component: Customerdetail },
  { path:"forms",component:Forms},
  { path: "reactive-forms", component: FormsReactive },
  {path:"exercise26",component:FakeProduct},
  { path:"exercise27",component:FakeProductEx27},
  {path:"exercise39",component:Books},
  {path:"exercise41",component:BookDetails},
  {path:"exercise41/:id",component:BookDetails},
  {path:"exercise43",component:BookNew},
  {path:"exercise45",component:BookUpdate},
  {path:"exercise45/:id",component:BookUpdate},
  {path:"exercise47",component:BookDelete},
  {path:"exercise53",component:Fashion},
  { path:"exercise50",component: Exercise50 },
  { path:"exercise50-new",component: Ex50New },
  { path:"exercise50-details",component: Ex50Details },
  { path:"exercise50-details/:id",component: Ex50Details },
  { path:"exercise50-edit",component: Ex50Edit },
  { path:"exercise50-edit/:id",component: Ex50Edit },
  { path:"exercise50-delete",component: Ex50Delete },
  { path:"exercise50-delete/:id",component: Ex50Delete },
  { path: "not-found", component: PagenotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
