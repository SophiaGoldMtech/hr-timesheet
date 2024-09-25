import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DepartmentsComponent } from './components/departments/departments.component';

@NgModule({
  declarations: [AppComponent, DepartmentsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
