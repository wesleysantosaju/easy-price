import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CadastrarPrecoComponent } from '../cadastrar-preco/cadastrar-preco.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(CadastrarPrecoComponent);
  }
}

