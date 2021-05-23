import { AppRoutingModule } from './../app-routing.module';
import { MaterialComponentsModule } from './../material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabContentComponent } from './tab-content/tab-content.component';


@NgModule({
  declarations: [
    HomeComponent,
    TabsComponent,
    TabContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MaterialComponentsModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
