import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-home/Home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AboutComponent } from './page-about/About.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
 
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },//,canActivate: [OutsideService] 
  { path: 'About', component: AboutComponent },
  { path: '404', component: PageNotFoundComponent }
 ,{ path: '**', redirectTo: '/Home' }
]; 


@NgModule({
  imports: [  RouterModule.forRoot( routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}