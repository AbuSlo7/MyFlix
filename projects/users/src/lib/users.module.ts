import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
