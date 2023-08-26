import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPrecoComponent } from './cadastrar-preco/cadastrar-preco.component';
import { AddComentarioComponent } from './add-comentario/add-comentario.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarPrecoComponent},
  { path: 'addcoment', component: AddComentarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
