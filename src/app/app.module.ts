import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { CartComponent } from "./productlist/cart/cart.component";
import { PaymeComponent } from "./productlist/cart/payme/payme.component";
//import { CustomMaterialModule } from "./material.module";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

//import { FlexLayoutModule } from "@angular/flex-layout";
//import { NgxPayPalModule } from 'ngx-paypal';
//import { PaypalComponent } from './productlist/paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    PaymeComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    //FlexLayoutModule,
    FormsModule
    //NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
