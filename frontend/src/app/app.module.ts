import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { PlantsComponent } from './page/plants/plants.component';
import { GardensComponent } from './page/gardens/gardens.component';
import { ShopsComponent } from './page/shops/shops.component';
import { SampleHortusComponent } from './page/sample-hortus/sample-hortus.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { PlantEditorComponent } from './page/plant-editor/plant-editor.component';
import { PlantCreateComponent } from './page/plant-create/plant-create.component';
import { SampleHortusEditorComponent } from './page/sample-hortus-editor/sample-hortus-editor.component';
import { SampleHortusCreateComponent } from './page/sample-hortus-create/sample-hortus-create.component';
import { GardenEditorComponent } from './page/garden-editor/garden-editor.component';
import { GardenCreateComponent } from './page/garden-create/garden-create.component';
import { ShopEditorComponent } from './page/shop-editor/shop-editor.component';
import { ShopCreateComponent } from './page/shop-create/shop-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    HomeComponent,
    UsersComponent,
    PlantsComponent,
    GardensComponent,
    ShopsComponent,
    SampleHortusComponent,
    DataTableComponent,
    PlantEditorComponent,
    PlantCreateComponent,
    SampleHortusEditorComponent,
    SampleHortusCreateComponent,
    GardenEditorComponent,
    GardenCreateComponent,
    ShopEditorComponent,
    ShopCreateComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
