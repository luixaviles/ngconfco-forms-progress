import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ws-workshop-edit',
  templateUrl: './workshop-edit.component.html',
  styleUrls: ['./workshop-edit.component.css']
})
export class WorkshopEditComponent implements OnInit {
  // Form Model
  form: FormGroup = new FormGroup({
    user: new FormControl(''),
    workshop: new FormControl(''),
    ticketPrice: new FormControl(''),
    url: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
