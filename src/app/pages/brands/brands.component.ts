import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  brands: any;

  brandsId = this.route.snapshot.params.id;
  type = this.route.snapshot.params.type;
  typeTwo = this.route.snapshot.params.typeTwo;
  productTypeId = this.route.snapshot.params.typeId;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.brands = await this.http.getBrands().toPromise();
    this.brands = this.brands.item;
    console.log(this.brands);

    this.router.events.subscribe(async (res) => {
      if (res instanceof NavigationEnd) {
        this.brandsId = this.route.snapshot.params.id;
        this.brands = await this.http
          .getProductDetails(this.brandsId)
          .toPromise();

        this.brands = this.brands.item;
      }
    });
  }
}
