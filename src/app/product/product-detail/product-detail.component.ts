import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      // this.product = this.productService.getProductById(params.get('productId')!);
      const productObservable = this.productService.getProductById(params.get('productId')!);
      productObservable.subscribe(
        (data) => {
          this.product = data;
        },
        (err) => {}
      )
    });
  }
}
