import { Component, OnInit } from '@angular/core';
import { WorkshopEntry } from '../shared/model/model';

@Component({
  selector: 'ws-workshop-add',
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css']
})
export class WorkshopAddComponent implements OnInit {
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  entry: WorkshopEntry = {};

  constructor() { }

  ngOnInit(): void {
  }

}
