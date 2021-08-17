import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './common/forbidden/forbidden.component';
import { LoginComponent } from './common/login/login.component';
import { GardenCreateComponent } from './page/garden-create/garden-create.component';
import { GardenEditorComponent } from './page/garden-editor/garden-editor.component';
import { GardensComponent } from './page/gardens/gardens.component';
import { HomeComponent } from './page/home/home.component';
import { PlantCreateComponent } from './page/plant-create/plant-create.component';
import { PlantEditorComponent } from './page/plant-editor/plant-editor.component';
import { PlantsComponent } from './page/plants/plants.component';
import { SampleHortusCreateComponent } from './page/sample-hortus-create/sample-hortus-create.component';
import { SampleHortusEditorComponent } from './page/sample-hortus-editor/sample-hortus-editor.component';
import { SampleHortusComponent } from './page/sample-hortus/sample-hortus.component';
import { ShopCreateComponent } from './page/shop-create/shop-create.component';
import { ShopEditorComponent } from './page/shop-editor/shop-editor.component';
import { ShopsComponent } from './page/shops/shops.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UsersComponent } from './page/users/users.component';
import { AuthGuardService } from './service/auth-gard.service';
// import  } from './service/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'plants',
    component: PlantsComponent
  },
  {
    path: 'plants/edit/:id',
    component: PlantEditorComponent
  },
  {
    path: 'plants/create',
    component: PlantCreateComponent
  },
  {
    path: 'sampleHortus',
    component: SampleHortusComponent
  },
  {
    path: 'sampleHortus/edit/:id',
    component: SampleHortusEditorComponent
  },
  {path: 'sampleHortus/create',
    component: SampleHortusCreateComponent
  },
  {
    path: 'shops',
    component: ShopsComponent
  },
  {
    path: 'shops/edit/:id',
    component: ShopEditorComponent
  },
  {
    path: 'shops/create',
    component: ShopCreateComponent
  },
  {
    path: 'gardens',
    component: GardensComponent
  },
  {
    path: 'gardens/create',
    component: GardenCreateComponent
  },
  {
    path: 'gardens/edit/:id',
    component: GardenEditorComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
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
