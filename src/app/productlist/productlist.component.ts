import {
  Component,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormControl } from "@angular/forms";

import { Product } from "../product";
import { PRODUCTS } from "../mock-products";
import { SIZES } from "../sizes";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit {
  products = PRODUCTS;
  sizes = SIZES;
  cart: Product[] = [];
  sizeControl = new FormControl("");
  selectedProduct: Product[] = [];
  selectedSize: number = 0;
  total: number = 0;
  listView: boolean = false;
  cartBadge: number = 0;


  selectSize(index, value) {
    this.selectedSize = value;
    this.products[index].selectedSize = this.selectedSize;
    //console.log("SelectedSize", this.products[x])
  }

  clickHandler(productIndex) {
    this.total = 0;
    this.selectedProduct = this.products[productIndex];
    if (this.cart.length > 0) {
      let checking = [];
      for (let i = 0; i < this.cart.length; i++) {
    
        checking.push(this.cart[i].id);
      
      }
      let cartIndex = checking.findIndex(element => element === this.selectedProduct.id);
      if (cartIndex !== -1 {
       
        this.cart[cartIndex].selectedSize = this.selectedProduct.selectedSize;
          this.cart[cartIndex].selectedPrice = this.selectedProduct.selectedPrice;
      } else {
        
          this.cart.push(this.selectedProduct);
      }
    } else {
      
      this.cart.push(this.selectedProduct);
    };
    this.cartBadge = this.cart.length;
    for (let i = 0; i < this.cart.length; i++) {
      console.log("ForLoop", this.cart[i]);
      this.total = this.total + 10;
      console.log("Total", this.total);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
