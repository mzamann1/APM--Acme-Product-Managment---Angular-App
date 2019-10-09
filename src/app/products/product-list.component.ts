import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  private _productService;
  constructor(private productService: ProductService) {}

  pageTitle: string = "Product List";
  imageW: number = 100;
  imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: string;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      p => {
        this.products = p;
        this.filteredProducts = this.products;
      },
      error => (this.errorMessage = <any>error)
    );
    this.filteredProducts = this.products;
    console.log("In OnInit");
  }
  // filtering
  performFilter(filterBy: string): IProduct[] {
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  
  onRatingClicked(message: string) {
    this.pageTitle = "Product List: " + message;
  }
}
