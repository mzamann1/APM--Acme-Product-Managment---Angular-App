import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}
  product: IProduct;
  pageTitle = 'Product Details';

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsById(id).subscribe(p => (this.product = p));
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
