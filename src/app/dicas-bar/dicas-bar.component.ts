import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalcMcombustivelComponent } from '../calc-mcombustivel/calc-mcombustivel.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dicas-bar',
  templateUrl: './dicas-bar.component.html',
  styleUrls: ['./dicas-bar.component.scss']
})
export class DicasBarComponent {
  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogExit: MatDialogRef<CalcMcombustivelComponent>){}

  openDialog(){
    this.dialog.open(InfoComponent);
  }

  closeModal(){
    this.dialogExit.close();
  }
  openDialogCalc() {
    this.dialog.open(CalcMcombustivelComponent);
  }


}
