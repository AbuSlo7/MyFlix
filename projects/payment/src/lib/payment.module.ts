import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }
