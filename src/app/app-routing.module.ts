import { BrandsComponent } from './pages/brands/brands.component';
import { OrderComponent } from './pages/order/order.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { BasketComponent } from './pages/basket/basket.component';
import { KasseComponent } from './pages/kasse/kasse.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './pages/error/error.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { HandelComponent } from './pages/handel/handel.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: FrontpageComponent },
  { path: 'handel', component: HandelComponent },
  { path: 'login', component: LoginComponent },

   { path: 'produkter/:type/:typeTwo/:id', component: ProductsComponent },
   { path: 'produkt/:type/:typeTwo/:typeId/:id', component: ProductComponent },
   { path: 'brands/id', component: BrandsComponent },
   { path: 'kasse', component: KasseComponent},
   { path: 'Indkøbskurv', component: BasketComponent},
   { path: 'søg/:keyword', component: SearchresultComponent},
   { path: 'søg', component: SearchresultComponent },
   { path: 'bekræftelse', component: OrderComponent},
   { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
