import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { CartComponent } from "./cart/cart.component";
import { PaymeComponent } from "./payme/payme.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule, MatGridList } from "@angular/material/grid-list";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    PaymeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatBadgeModule,
    //FlexLayoutModule,
    FormsModule
    //NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
