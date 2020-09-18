import { HttpService } from 'src/app/service/http.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  headers = new HttpHeaders().set(
    'Authorization',
    `Bearer ${this.cookie.get('token')}`
  );

  cartSubject = new Subject<any>();
  constructor(private http: HttpService, private cookie: CookieService) {}

  get() {
    const headers = this.headers;
    return this.http.getCart({ headers });
  }
  async deleteItem(id, e) {
    e.currentTarget.parentNode.parentNode.classList.add('deleted');
    console.log(await this.http.deleteItemFromCart(id).toPromise());
    this.cartSubject.next('cart changed');
  }

  async addToCart(id) {
    const headers = this.headers;
    const body = {
      product_id: id,
      quantity: 1,
    };
    let cart = <any>await this.http.getCart({ headers }).toPromise();
    cart = cart.cartlines;
    if (!cart) {
      await this.http.postCart(body, { headers }).toPromise();
      return;
    }
    const check = cart.some((e) => e.product_id === id);
    if (check) {
      for (const iterator of cart) {
        if (iterator.product_id === id) {
          const body = await {
            product_id: id,
            field: 'quantity',
            value: +iterator.quantity + 1,
          };
          await this.http.patchCart(body, { headers }).toPromise();
          this.cartSubject.next('cart changed');
        }
      }
    } else {
      await this.http.postCart(body, { headers }).toPromise();
      this.cartSubject.next('cart changed');
    }
  }
  async clearCart() {
    await this.http.deleteCart().toPromise();
  }
}
