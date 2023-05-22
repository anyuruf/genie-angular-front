import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppLayoutComponent } from "../components/app-layout/app-layout.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        AppLayoutComponent,
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
    ],
    bootstrap: [
        AppLayoutComponent
    ]
})

export class AppLayoutModule{}