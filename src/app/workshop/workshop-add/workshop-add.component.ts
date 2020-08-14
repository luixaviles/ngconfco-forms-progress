import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkshopEntry } from '../shared/model/model';
import { WorkshopService } from '../shared/services/workshop.service';

@Component({
  selector: 'ws-workshop-add',
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css']
})
export class WorkshopAddComponent implements OnInit, AfterViewInit {
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  entry: WorkshopEntry = {};

  @ViewChild('form') form: FormControl;

  constructor(private workshopService: WorkshopService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(model => console.log('model', model));
  }

  submit(): void {
    // Make sure form is valid
    if(this.form.valid) {
      // Access to the model
      this.workshopService.addWorkshopEntry(this.entry);
      // Redirect to Home page
      this.router.navigate(['/']);
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
