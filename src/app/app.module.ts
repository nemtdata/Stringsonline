import { BrandsComponent } from './pages/brands/brands.component';
import { BasketcardComponent } from './pages/basket/basketcard/basketcard.component';
import { SidemenuComponent } from './partiels/sidemenu/sidemenu.component';
import { FooterComponent } from './partiels/footer/footer.component';
import { NavComponent } from './partiels/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HandelComponent } from './pages/handel/handel.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { LoginComponent } from './pages/login/login.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { ProductcardComponent } from './products/productcard/productcard.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './pages/basket/basket.component';
import { KasseComponent } from './pages/kasse/kasse.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { OrderComponent } from './pages/order/order.component';
import { NgxCookieBannerModule } from 'ngx-cookie-banner';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ErrorComponent,
    NavComponent,
    FooterComponent,
    HandelComponent,
    ThanksComponent,
    LoginComponent,
    SidemenuComponent,
    BreadcrumbComponent,
    ProductcardComponent,
    ProductsComponent,
    ProductComponent,
    BasketComponent,
    KasseComponent,

    BasketcardComponent,
    SearchresultComponent,
    OrderComponent,
    BrandsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxCookieBannerModule.


    forRoot({
      cookieName: 'StringOnline',
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
