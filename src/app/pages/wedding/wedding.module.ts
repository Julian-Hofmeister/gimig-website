import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingPageRoutingModule } from './wedding-routing.module';

import { WeddingPage } from './wedding.page';
import { FeatureItemComponent } from 'src/app/shared/feature-item/feature-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WeddingPageRoutingModule],
  declarations: [WeddingPage, FeatureItemComponent],
})
export class WeddingPageModule {}
