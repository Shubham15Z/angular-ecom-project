import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'seller-auth', component: SellerAuthComponent},
  {path: 'seller-home', component: SellerHomeComponent, canActivate: [authGuard]},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
