import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  [x: string]: any;
  products: Observable < any > ;
  brands: any;
  userSubject = new Subject();

  configUrl = 'https://api.mediehuset.net/stringsonline/';
  configUrlProduct = 'https://api.mediehuset.net/stringsonline/products/';

  constructor(private http: HttpClient, private cookie: CookieService) {}
//  5 veje hvordan et api arbejder.
// GET betyder den hender data,det er en kun læs function.
// POST betyder den opretter ny data på server.
// PUT  betyder at den udkifter en allerede eksisterende data.
// PATCH betyder at den at den opdatere en allerede eksisterende data indhold.
// DELETE betyder den sletter data fra server.
  getData() {
    return this.http.get(this.configUrl);}
  getSingleData(id) {
    return this.http.get(this.configUrlProduct + '/' + id);}
  getProduct(id) {
    return this.http.get( `https://api.mediehuset.net/stringsonline/productgroups/${id}`);}
  // Den henter produktdetals efter id
  getProductDetails(id) {
    return this.http.get( `https://api.mediehuset.net/stringsonline/products/${id}` );}
  // Den henter alle brands
  getBrands() {
    return this.http.get(`https://api.mediehuset.net/stringsonline/brands`);}
  // Den henter login oplysning/
  getLogin(loginInfo) {
    return this.http.post(`https://api.mediehuset.net/token`, loginInfo);}

  // Den henter søgresulat fra api.
  getSearchResult(keyword: string) {
    return this.http.get( `https://api.mediehuset.net/stringsonline/search/${keyword}` );}

  // Den sender var man har local i inkøbskurv til api
  postCart(body: object, header) {
    return this.http.post(  `https://api.mediehuset.net/stringsonline/cart`,body, header );}

  //  updatere Indkøbskurv
  patchCart(body: object, header) {
    return this.http.patch( `https://api.mediehuset.net/stringsonline/cart`, body,header ); }

  // den henter inkøbskurv fra api
  getCart(header) {
        return this.http.get( `https://api.mediehuset.net/stringsonline/cart`, header ); }

 // den sender et køb til api
  postOrder(body) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.cookie.get('token')}` );
        return this.http.post(`https://api.mediehuset.net/stringsonline/orders`, body, {headers}); }

  //  Det sletter en enkelt var i inkøbskurv
  deleteItemFromCart(id) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.cookie.get('token')}` );
        return this.http.delete( `https://api.mediehuset.net/stringsonline/cart/${id}`, { headers }); }

  // Det sletter hele kurv på engang.
  deleteCart() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.cookie.get('token')}`);
         return this.http.delete(`https://api.mediehuset.net/stringsonline/cart`, { headers }); }}
