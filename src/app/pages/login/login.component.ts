import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input('breadcrumbs') breadcrumbs;
  loginForm: FormGroup;

  constructor(
    private cookie: CookieService,
    private httpe: HttpService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.httpe.getLogin(this.loginForm.value).subscribe((response: any) => {
      console.log(response.access_token);
      if (response.access_token) {
        this.cookie.set('token', response.access_token, 7);
        this.cookie.set('user_id', response.user_id, 7);
        window.location.href = '/forside';
        return true;
      } else {
        return;
      }
    });
  }
}
