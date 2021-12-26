import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { TryOneComponent } from './try-one/try-one.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { TryTwoComponent } from './try-two/try-two.component';

const routes: Routes = [
  {
    path:'try-one',
    component:TryOneComponent,
  },
  {
    path:'try-two',
    component:TryTwoComponent
  },
  {
    path:'try-three',
    component:TryThreeComponent,
  },
  {
    path:'dynamic-input',
    component:DynamicInputComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
