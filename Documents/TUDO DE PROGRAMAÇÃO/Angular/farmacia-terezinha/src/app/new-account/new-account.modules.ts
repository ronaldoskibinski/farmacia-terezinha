import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from '../app-routing.module';

import { NewAccountComponent } from "./new-account.component";

@NgModule ({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [],
    declarations: [NewAccountComponent],
    providers: []
})

export class LoginModule {}