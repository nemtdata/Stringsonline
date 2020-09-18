import { BasketService } from 'src/app/service/basket.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basketcard',
  templateUrl: './basketcard.component.html',
  styleUrls: ['./basketcard.component.scss'],
})
export class BasketcardComponent implements OnInit {
  @Input('image') image;
  @Input('title') title;
  @Input('quantity') quantity;
  @Input('price') price;
  @Input('stock') stock;
  @Input('id') id;
  constructor(public cart: BasketService) {}

  ngOnInit(): void {}
}
