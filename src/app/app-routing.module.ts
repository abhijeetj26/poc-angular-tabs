import { HomeComponent } from './components/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/tabs/1", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'tabs/:id', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
