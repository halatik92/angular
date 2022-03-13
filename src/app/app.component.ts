import { Component } from '@angular/core';
import { MatDialog} from '@angular/material'
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MetadateService } from './shared/metadate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  countOpen: number = 0

 constructor(public dialog: MatDialog, private MetadateService: MetadateService) {}

 openDialog() {
   this.countOpen += 1;
   this.dialog.open(DialogExampleComponent);
 }
}
