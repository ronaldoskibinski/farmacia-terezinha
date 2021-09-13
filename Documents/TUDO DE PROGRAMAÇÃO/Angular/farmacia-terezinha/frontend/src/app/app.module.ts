import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { LoginModule } from './login/login.modules';
import { NewAccountComponent } from './new-account/new-account.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    LoginModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
