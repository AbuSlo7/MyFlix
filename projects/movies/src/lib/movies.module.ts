import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
