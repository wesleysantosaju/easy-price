import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  constructor(public dialog:  MatDialogRef<InfoComponent>){}

  closeModal(){
    this.dialog.close();
  }

}
