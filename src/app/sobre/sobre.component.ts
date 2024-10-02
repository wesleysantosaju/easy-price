import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  constructor(private formBuilder: FormBuilder,
    public dialog:  MatDialogRef<SobreComponent>){}

    closeModal(){
      this.dialog.close();
    }
}

