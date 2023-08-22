import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPrecoComponent } from './cadastrar-preco/cadastrar-preco.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarPrecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
