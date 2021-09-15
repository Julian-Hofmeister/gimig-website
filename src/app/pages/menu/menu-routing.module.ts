import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'gastro',
        loadChildren: () =>
          import('../gastro/gastro.module').then((m) => m.GastroPageModule),
      },
      {
        path: 'wedding',
        loadChildren: () =>
          import('../wedding/wedding.module').then((m) => m.WeddingPageModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductPageModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../about-us/about-us.module').then(
            (m) => m.AboutUsPageModule
          ),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('../reviews/reviews.module').then((m) => m.ReviewsPageModule),
      },
      {
        path: 'impressum',
        loadChildren: () =>
          import('../impressum/impressum.module').then(
            (m) => m.ImpressumPageModule
          ),
      },
      {
        path: 'datenschutz',
        loadChildren: () =>
          import('../datenschutz/datenschutz.module').then(
            (m) => m.DatenschutzPageModule
          ),
      },
      {
        path: '',

        redirectTo: '/menu/reviews',
      },
    ],
  },
  {
    path: '',

    redirectTo: '/menu/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
