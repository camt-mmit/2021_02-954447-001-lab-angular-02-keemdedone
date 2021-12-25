import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TryOneComponent,
    TryTwoComponent,
    TryThreeComponent,
    DynamicInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
