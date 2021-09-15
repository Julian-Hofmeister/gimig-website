import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { FeatureItemComponent } from 'src/app/shared/feature-item/feature-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductPageRoutingModule],
  declarations: [ProductPage, FeatureItemComponent],
})
export class ProductPageModule {}
