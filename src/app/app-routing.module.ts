import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevotionalComponent } from './pages/devotional/devotional.component';
import { UserpageComponent } from './pages/userpage/userpage.component';


const routes: Routes = [
  { path: 'devotional', component: DevotionalComponent },
  { path: 'user', component: UserpageComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
