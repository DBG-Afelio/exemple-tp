import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';
import { Module1Component } from './module1.component';

const routes: Route[] = [
  {path:'route1', pathMatch:'full', component:Route1Component},
  {path:'route2', pathMatch:'full', component:Route2Component},
]

@NgModule({
  declarations: [
    Module1Component,
    Route1Component,
    Route2Component
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    Module1Component
  ]
})
export class Module1Module { }
