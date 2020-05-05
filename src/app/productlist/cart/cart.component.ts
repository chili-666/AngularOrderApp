import {
  Component,
  OnInit,
  Input//,
  //ChangeDetectionStrategy
} from "@angular/core";
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

  //console.log("TotalCart", this.total)

  deleteProduct(x) {
    for (let g = 0; g < this.cart.length; g++) {
      if (this.cart[g].id == x.currentTarget.value) {
        this.total = 0;

        this.cart.splice(g, 1);
        for (let i = 0; i < this.cart.length; i++) {
          this.total = this.total + this.cart[i].selectedPrice;
        }
      }
    }
  }

  paidForHandler(isPaidFor: boolean) {
    console.log("Das ist bezahlt!");
    this.setShowThankYou = isPaidFor;
  };

  constructor(
    private formBuilder : FormBuilder;
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: '',
      phone: ''
    })
   
  }

  


  ngOnInit() {
    // payCart = this.cart;
    // payTotal = this.total;
  }
  //console.log("Einkaufskorb", this.cart)
}
