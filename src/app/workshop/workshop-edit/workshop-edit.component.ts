import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkshopService } from '../shared/services/workshop.service';

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

  constructor(private route: ActivatedRoute,
              private workshopService: WorkshopService) { }

  ngOnInit(): void {
    // get the ID from the URL
    const id = this.route.snapshot.paramMap.get('id');
    // get the Object
    const entry = this.workshopService.getWorkshopEntry(+id);
    // Load the Object into the Form
    // this.form.setValue(entry); // Error!
    this.form.patchValue(entry);
  }

}
