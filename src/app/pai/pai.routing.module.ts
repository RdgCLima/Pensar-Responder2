import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaiComponent } from "./pai.component";
import { Filho1Component } from "./filho1/filho1.component";
import { Filho2Component } from "./filho2/filho2.component";

const paiRoutes = [
    {path: 'pai', component:PaiComponent, children :[
    {path: 'filho1',component:Filho1Component},
    {path: 'filho2', component: Filho2Component}]}
];

@NgModule({
imports:[RouterModule.forChild(paiRoutes)],
exports: [RouterModule]
})
export class paiRoutingModule{}
