import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../products';
import { products } from '../../products';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: any = products;
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // this.product = products[+params.get('productId')!];
      this.product = this.productService.getProductById(+params.get('productId')!);
    });
  }
}
