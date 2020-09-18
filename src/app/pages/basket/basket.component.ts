import { HttpService } from 'src/app/service/http.service';
import { BasketService } from 'src/app/service/basket.service';
import { Component, ElementRef, OnInit, Renderer2,  } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  itemsInCart: any;
  products: any;
  product: any = [];
  totalPrice: number | string = 0;
  constructor(private cart: BasketService, private http: HttpService, private renderer: Renderer2, private elem: ElementRef) { }

  async ngOnInit(): Promise<void> {

    this.itemsInCart = await this.cart.get().toPromise();
    this.itemsInCart = this.itemsInCart.cartlines;
    if (this.itemsInCart) {
      for (const itemInCart of this.itemsInCart) {
        this.products = await this.http.getProductDetails(itemInCart.product_id).toPromise();
        this.products = this.products.item
        this.totalPrice = parseFloat(this.totalPrice + this.products.price).toFixed(2);
        this.product.push({
          name: this.products.name,
          image: this.products.image.fullpath,
          price: this.products.price,
          stock: this.products.stock,
          id: itemInCart.id,
          quantity: 1,
        });
      }
    }
  }
  clearCart() {
    this.totalPrice = 0
    console.log(this.totalPrice);
    const elements = this.elem.nativeElement.querySelectorAll('.cartCard');
    for (const iterator of elements) {
      iterator.remove();
      location.reload()
    }
    this.cart.clearCart();
    location.reload()
  }
}
