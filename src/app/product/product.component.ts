import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, ProductDetailComponent, RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
