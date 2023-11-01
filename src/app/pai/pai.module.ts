import { NgModule } from "@angular/core";
import { PaiComponent } from "./pai.component";
import { CommonModule } from "@angular/common";
import { Filho1Component } from './filho1/filho1.component';
import { Filho2Component } from './filho2/filho2.component';
import { paiRoutingModule } from "./pai.routing.module";
@NgModule({
    imports:[
        CommonModule,
        paiRoutingModule
    ],
    declarations: [PaiComponent, 
        Filho1Component, 
        Filho2Component],
})
export class paiModule{}
