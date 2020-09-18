import { BasketService } from './../../service/basket.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input('image') image;
  @Input('title') title;
  @Input('teaser') teaser;
  @Input('price') price;
  @Input('stock') stock;
  @Input('id') id;
  @Input('url') url;


  productId = false;
  reverseName = false;
  reverseCity = false;
  participantsData: any;
  result: any;

  search = this.fb.group({
    keyword: ['', Validators.required]
  })
  constructor( public cart: BasketService, private http: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.url);
  }
  async submit() {
    if (this.search.get('keyword').value) {
      this.result = await this.http.getSearchResult(this.search.get('keyword').value).toPromise();
      this.result = this.result.items

    } else {
      this.result = [{ id: 'Ingen resultat' }]
    }
    console.log(this.result);
  }

  sortId() {
    this.productId ? this.result.sort((a, b) => a.id - b.id) : this.result.sort((a, b) => b.id - a.id);
    this.productId = this.productId ? false : true
  }


}
