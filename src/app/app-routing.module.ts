import { NgModule } from '@angular/core';
//import { AppComponent } from './app.component'
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'createKitten', component: CreateKittenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
