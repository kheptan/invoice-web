import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'drivers', 
    loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule),
    data:{preload: true}
  },
  { 
    path: 'client', 
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    data:{preload: true}
  },
  { 
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule), 
    data:{preload: true}
  },
  { 
    path: 'seller', 
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule), 
    data:{preload: true}
  },
  { 
    path: 'invoice', 
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule), 
    data:{preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true, 
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
