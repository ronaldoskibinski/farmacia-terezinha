import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from "./login.component";

@NgModule ({
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatCardModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: []
})

export class LoginModule {}