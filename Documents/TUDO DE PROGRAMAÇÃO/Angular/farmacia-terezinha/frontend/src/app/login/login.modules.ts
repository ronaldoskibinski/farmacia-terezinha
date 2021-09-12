import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from "./login.component";

@NgModule ({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: []
})

export class LoginModule {}