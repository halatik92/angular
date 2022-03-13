
import { Component, OnInit } from '@angular/core';
import { MetadateService } from '../shared/metadate.service';


@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private MetadateService: MetadateService) { }



}
