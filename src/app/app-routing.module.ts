import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
 {path:'add', loadChildren: ()=> import('./new-item/new-item.module').then( m => m.NewItemModule) },
  {path: ':medium', component: MediaItemListComponent},
  {path:'', redirectTo: 'all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
