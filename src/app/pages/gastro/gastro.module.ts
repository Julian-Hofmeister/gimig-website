import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastroPageRoutingModule } from './gastro-routing.module';

import { GastroPage } from './gastro.page';
import { FeatureItemComponent } from 'src/app/shared/feature-item/feature-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GastroPageRoutingModule],
  declarations: [GastroPage, FeatureItemComponent],
})
export class GastroPageModule {}
