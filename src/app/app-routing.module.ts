import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paiModule } from './pai/pai.module';
const routes: Routes = [
  {path: 'pai', loadChildren: () =>paiModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
