import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardStepperComponent } from '../wizard-stepper/wizard-stepper.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('table') private table: MatTable<any>;
  dialogRef: MatDialogRef<WizardStepperComponent>;
  machines = [];
  displayedColumns = ['fabnum', 'name', 'contact', 'desc'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openStepper() {
    this.dialogRef = this.dialog.open(WizardStepperComponent, {
      disableClose: true});

    this.dialogRef.afterClosed().subscribe(result => {
          console.log(result);
    });
  }
}
