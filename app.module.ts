import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesshouseComponent } from './businesshouse/businesshouse.component';
import { FormsModule } from '@angular/forms';
import { CreateBusinesshouseComponent } from './create-businesshouse/create-businesshouse.component';
import { SortBusinesshouseComponent } from './sort-businesshouse/sort-businesshouse.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module'; 



@NgModule({
  declarations: [
    AppComponent,
    BusinesshouseComponent,
    CreateBusinesshouseComponent,
    SortBusinesshouseComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LoginModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
