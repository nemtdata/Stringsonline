import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  {

  products: any;
  brands: any
  constructor(public http: HttpService) { }



  async ngOnInit(): Promise<void> {
    this.products = await this.http.getData().toPromise();
    this.products = this.products.productgroups.items



    this.brands = await this.http.getBrands().toPromise();
    this.brands = this.brands.items
    console.log("hey");


  }




}
