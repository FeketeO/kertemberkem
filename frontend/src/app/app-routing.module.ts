import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardensComponent } from './page/gardens/gardens.component';
import { HomeComponent } from './page/home/home.component';
import { PlantsComponent } from './page/plants/plants.component';
import { SampleHortusComponent } from './page/sample-hortus/sample-hortus.component';
import { ShopsComponent } from './page/shops/shops.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'plants',
    component: PlantsComponent
  },
  {
    path: 'sampleHortus',
    component: SampleHortusComponent
  },
  {
    path: 'shops',
    component: ShopsComponent
  },
  {
    path: 'gardens',
    component: GardensComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
