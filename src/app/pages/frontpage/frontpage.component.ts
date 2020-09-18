import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent implements OnInit {
  constructor(private https: HttpService) {}

  ngOnInit;
}
