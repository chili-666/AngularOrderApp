import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"] //,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  cartControl = new FormControl("");
  showMyCart: boolean = true;
  setShowTankYou: boolean = false;
  checkoutForm;

  @Input() cart: [];
  @Input() total: number;

  deleteProduct(x) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == x.currentTarget.value) {
        this.total = 0;

        this.cart.splice(i, 1);
        for (let i = 0; i < this.cart.length; i++) {
          this.total = this.total + this.cart[i].selectedPrice;
        }
      }
    }
  }

  paidForHandler(isPaidFor: boolean) {
    this.setShowThankYou = isPaidFor;
  }

  ngOnInit() {}
}
