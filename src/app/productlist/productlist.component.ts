import {
  Component,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormControl } from "@angular/forms";

import { Product } from "../product";
import { PRODUCTS } from "../mock-products";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit {
  products = PRODUCTS;
  cart: Product[] = [];
  sizeControl = new FormControl("");
  selectedProduct: Product[] = [];
  selectedSize: number = 0;
  selectedPrice: number = 0;
  total: number = 0;

  selectSize(x, i) {
    //console.log('Products', this.products)
    //console.log("X und i", x, i);
    //console.log('Das bedeutet: ', this.products[x])
    this.selectedSize = this.products[x].size[i];
    this.selectedPrice = this.products[x].price[i];
    this.products[x].selectedPrice = this.selectedPrice;
    this.products[x].selectedSize = this.selectedSize;
    //console.log("SelectedSize", this.products[x])
  }

  clickHandler(x) {
    this.total = 0;
    this.selectedProduct = this.products[x];
    console.log("SelectedProducT", this.selectedProduct);
    if (this.cart.length > 0) {
      let checking = [];
      for (let i = 0; i < this.cart.length; i++) {
        console.log("for checking", this.cart[i].id);
        checking.push(this.cart[i].id);
        console.log("Check", checking);
      }
      let cartIndex = checking.findIndex(element => element === this.selectedProduct.id);
      if (cartIndex !== -1 {
        console.log("schon drin");
        this.cart[cartIndex].selectedSize = this.selectedProduct.selectedSize;
          this.cart[cartIndex].selectedPrice = this.selectedProduct.selectedPrice;
      } else {
        console.log("Push obwohl was drin");
          this.cart.push(this.selectedProduct);
      }
    } else {
      console.log("Empty push");
      this.cart.push(this.selectedProduct);
    };
    
    for (let i = 0; i < this.cart.length; i++) {
      console.log("ForLoop", this.cart[i]);
      this.total = this.total + this.cart[i].selectedPrice;
      console.log("Total", this.total);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
// Add button to cart component - on click put product in cart
// Add onchange to drop down - set size and price in product from product component for product.id
// add button "x" to cart - delete seleced product.id from cart
// pass cart to paypal-component
//get css/scss from material into index.html. Use classes from material.
