import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

interface User {
  username: string;
  password: string;
}
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  result: any;
  userSubject = new BehaviorSubject<any>(this.cookie.get('token'));
  reverseId = false;
  participantsData: any;

  search = this.FormBuilder.group({
    keyword: ['', Validators.required],
  });
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private FormBuilder: FormBuilder,
    private https: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.participantsData = await this.https.getData().toPromise();
  }
  submit() {
    this.router.navigateByUrl('/søg/' + this.search.get('keyword').value);
  }
  public get isOnline(): boolean {
    if (this.userSubject.value) return true;
    if (!this.userSubject.value) return false;
  }

  login(body) {
    return this.http.post<User>('https://api.mediehuset.net/token', body).pipe(
      map((user: any) => {
        this.cookie.set('token', user.access_token);
        this.userSubject.next(user);
      })
    );
  }
  logout() {
    this.cookie.delete('token');
    this.userSubject.next(null);
  }
}
