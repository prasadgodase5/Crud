import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Componants/navbar/navbar.component';
import { ADDComponent } from './Componants/add/add.component';
import { UpdateComponent } from './Componants/update/update.component';

const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
