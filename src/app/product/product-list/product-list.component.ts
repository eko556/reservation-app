import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {console.log('エラーが発生しました ' + err);},
      () => {console.log('complete!')}
    );
  }
}
