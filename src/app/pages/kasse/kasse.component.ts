import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kasse',
  templateUrl: './kasse.component.html',
  styleUrls: ['./kasse.component.scss'],
})
export class KasseComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpService,
    private router: Router
  ) {}
  order = this.formbuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    address: ['', Validators.required],
    zipcode: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', Validators.required],
    number: ['', Validators.required],
  });
  ngOnInit(): void {}
  onSubmit() {
    const body = {
      firstname: this.order.get('firstname').value,
      lastname: this.order.get('lastname').value,
      address: this.order.get('street').value,
      zipcode: this.order.get('zipcode').value,
      city: this.order.get('city').value,
      email: this.order.get('email').value,
    };
    console.log(body);
    this.http.postOrder(body).subscribe((res: any) => {
      this.router.navigateByUrl(`/bekræftelse/${res.order_id}`);
      console.log(res.order_id);
    });
  }
}
