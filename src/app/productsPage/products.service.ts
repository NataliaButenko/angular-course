import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { HttpConnector } from '../shared/httpConector';
import { AbstractService } from '../shared/abstract.service';
import { Product } from '../shared/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends AbstractService {
  public productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpConnector) {
    super();
  }

  public getData(): Observable<any> {
    return this.http.request({ method: 'GET', urlPath: 'all-products' }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }

  public getProducts(): void {
    this.getData().subscribe((data) => {
      this.productsSubject.next(data);
    });
  }

  public updateProduct(productID: number, body: any): Observable<any> {
    return this.http.request({ method: 'PUT', urlPath: `products/${productID}`, body }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }

  public deleteProduct(productID: number): Observable<any> {
    return this.http.request({ method: 'DELETE', urlPath: `products/${productID}` }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }

  public createProduct(body: any): Observable<any> {
    return this.http.request({ method: 'POST', urlPath: 'products', body }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }
}
