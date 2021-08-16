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
import { RoleGuardService } from './service/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
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
    component: PlantsComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1
    }
  },
  {
    path: 'plants/edit/:id',
    component: PlantEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
  },
  {
    path: 'plants/create',
    component: PlantCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
  },
  {
    path: 'sampleHortus',
    component: SampleHortusComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1
    }
  },
  {
    path: 'sampleHortus/edit/:id',
    component: SampleHortusEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
  },
  {path: 'sampleHortus/create',
    component: SampleHortusCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
  },
  {
    path: 'shops',
    component: ShopsComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1
    }
  },
  {
    path: 'shops/edit/:id',
    component: ShopEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2
    }
  },
  {
    path: 'shops/create',
    component: ShopCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2
    }
  },
  {
    path: 'gardens',
    component: GardensComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1
    }
  },
  {
    path: 'gardens/create',
    component: GardenCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2
    }
  },
  {
    path: 'gardens/edit/:id',
    component: GardenEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2
    }
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3
    }
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
