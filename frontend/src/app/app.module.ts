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
import { SamplesComponent } from './pages/samples/samples.component';

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
    SamplesComponent
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
