import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { getMaxListeners } from "cluster";

declare var paypal;

@Component({
  selector: "app-payme",
  templateUrl: "./payme.component.html",
  styleUrls: ["./payme.component.scss"]
})
export class PaymeComponent implements OnInit {
  @ViewChild("paypal", { static: true }) paypalElement: ElementRef;
  @Input() total: number;
  @Input() cart: [];
  paypalItem: [];

  //payCart: [];

  @Output() isPaidFor: EventEmitter<boolean> = new EventEmitter();

  paidFor = false;

  constructor() {}

  cartInConsole() {
    console.log("PayPalTotal", this.total);
  }

  declareItem() {
    let paypalItem = [];
    for (let i =0 ; i< this.cart.length; i++) {
        let currency = "EUR";
        let quantity = this.cart[i].selectedSize;
        let name = this.cart[i].name;
        let amount = this.cart[i].selectedPrice.toString();
        console.log("DeclareFunction rennt", this.cart[i]);
        //let pushItem = {"quantity": quantity};  
        let singleItem =  {
          name: name,
          unit_amount: {
            currency_code: "EUR",
            value: amount;
          },
          quantity: "1"
        };
        paypalItem.push(singleItem);

       console.log("Declare", paypalItem)
       console.log("Single", singleItem) 
        
      }
     this.paypalItem = singleItem;
     console.log("StackOverFlow", this.paypalItem )
  };

  sendMail() {
           this.http.post("./sendmail.php", "luis.waesler@gmail.com").subscribe();
   }
  
   ngOnInit() {
    console.log("PayPalCart", this.paypalItem);
    this.declareItem();
    paypal
    .Buttons({
      createOrder: (data, actions) => {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: this.total,
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: this.total
                  }
                }
              },
              items: [
                this.paypalItem
              ]
            }
          ]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert("Transaction completed by " + details.payer.name.given_name);
          this.sendMail();
        });
      }
    })
    .render(this.paypalElement.nativeElement);
      
}
