import { Component, ViewChild } from '@angular/core';
import { NgxCookieBannerComponent } from 'ngx-cookie-banner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stringonline';

  @ViewChild('cookie', { static: true })
  banner: NgxCookieBannerComponent;

  private _cookieSub: Subscription;

  ngAfterViewInit() {
    this._cookieSub = this.banner.isSeen.subscribe();
  }

  ngOnDestroy() {
    this._cookieSub.unsubscribe();
  }

}
