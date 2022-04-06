import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinesshouseComponent } from './businesshouse/businesshouse.component';
import { CreateBusinesshouseComponent } from './create-businesshouse/create-businesshouse.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackOnBusinesshouseComponent}from './feedback-on-businesshouse/feedback-on-businesshouse.component';
import { FeedbackOnProductComponent}from './feedback-on-product/feedback-on-product.component';

const routes: Routes = [
  {path:"businesshouse",component:BusinesshouseComponent},
  {path:"create-businesshouse",component:CreateBusinesshouseComponent},
  {path:"product",component:ProductComponent},
  {path:"create-product",component:CreateProductComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"feedback-on-businesshouse",component:FeedbackOnBusinesshouseComponent},
  {path:"feedback-on-product",component:FeedbackOnProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
