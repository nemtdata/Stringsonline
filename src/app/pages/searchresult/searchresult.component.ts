import { HttpService } from 'src/app/service/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {
  search: any;
  id: any;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // Her sket det at søgordet fra Søgfeld, det bliver tjekket her om det passer sammen med noget fra api.
  async ngOnInit(): Promise<void> {
    this.search = await this.http
      .getSearchResult(this.route.snapshot.params.keyword)
      .toPromise();
    this.search = this.search.items;
    console.log(this.search);

    this.router.events.subscribe(async (res) => {
      if (res instanceof NavigationEnd) {
        this.search = await this.http
          .getSearchResult(this.route.snapshot.params.keyword)
          .toPromise();
        this.search = this.search.items;
      }
    });
  }
}
