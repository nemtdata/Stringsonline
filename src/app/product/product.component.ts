import { BasketService } from './../service/basket.service';
import { HttpService } from 'src/app/service/http.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  price: any;

  productId = this.route.snapshot.params.id;
  type = this.route.snapshot.params.type
  typeTwo = this.route.snapshot.params.typeTwo
  productTypeId = this.route.snapshot.params.typeId;
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, public cart: BasketService) { }

  async ngOnInit(): Promise<void> {
    this.product = await this.http.getProductDetails(this.productId).toPromise();
    this.product = this.product.item;
    this.router.events.subscribe(async res => {
      if (res instanceof NavigationEnd) {
        this.productId = this.route.snapshot.params.id;
        this.product = await this.http.getProductDetails(this.productId).toPromise();
        this.product = this.product.item;
        this.price = this.product.price;
      }
    });
  }
}
