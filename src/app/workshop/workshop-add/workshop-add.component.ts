import { Component, OnInit } from '@angular/core';
import { WorkshopEntry } from '../shared/model/model';

@Component({
  selector: 'ws-workshop-add',
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css']
})
export class WorkshopAddComponent implements OnInit {

  entry: WorkshopEntry = {};

  constructor() { }

  ngOnInit(): void {
  }

}
