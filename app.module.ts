import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesshouseComponent } from './businesshouse/businesshouse.component';
import { FormsModule } from '@angular/forms';
import { CreateBusinesshouseComponent } from './create-businesshouse/create-businesshouse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackOnBusinesshouseComponent } from './feedback-on-businesshouse/feedback-on-businesshouse.component';
import { FeedbackOnProductComponent } from './feedback-on-product/feedback-on-product.component'; 



@NgModule({
  declarations: [
    AppComponent,
    BusinesshouseComponent,
    CreateBusinesshouseComponent,
    CreateProductComponent,
    ProductComponent,
    FeedbackComponent,
    FeedbackOnBusinesshouseComponent,
    FeedbackOnProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
