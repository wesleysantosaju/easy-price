import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPrecoComponent } from './cadastrar-preco/cadastrar-preco.component';
import { AddComentarioComponent } from './add-comentario/add-comentario.component';
import { CalcMcombustivelComponent } from './calc-mcombustivel/calc-mcombustivel.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarPrecoComponent},
  { path: 'addcoment', component: AddComentarioComponent },
  { path: 'adicionar-comentario', component: AddComentarioComponent },
  { path: 'melhorcombustivel', component: CalcMcombustivelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
