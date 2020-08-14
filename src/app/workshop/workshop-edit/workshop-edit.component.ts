import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { WorkshopService } from '../shared/services/workshop.service';

@Component({
  selector: 'ws-workshop-edit',
  templateUrl: './workshop-edit.component.html',
  styleUrls: ['./workshop-edit.component.css']
})
export class WorkshopEditComponent implements OnInit {
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
  // Form Model
  form: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required),
    workshop: new FormControl('', [Validators.required, Validators.minLength(5)]),
    ticketPrice: new FormControl('', Validators.required),
    url: new FormControl('', [Validators.required, Validators.pattern(this.urlPattern)]),
  });

  formStatus$: Observable<string>;
  entryId: number;

  constructor(private route: ActivatedRoute,
              private workshopService: WorkshopService,
              private router: Router) { }

  ngOnInit(): void {
    // get the ID from the URL
    const id = this.route.snapshot.paramMap.get('id');
    this.entryId = +id;
    // get the Object
    const entry = this.workshopService.getWorkshopEntry(+id);
    // Load the Object into the Form
    // this.form.setValue(entry); // Error!
    this.form.patchValue(entry);

    // this.form.valueChanges.subscribe(model => console.log('model', model));
    // this.form.get('user').valueChanges.subscribe(user => console.log('user', user));

    // VALID/INVALID
    // this.form.statusChanges.subscribe(status => console.log('status', status));

    this.formStatus$ = this.form.statusChanges.pipe(
      distinctUntilChanged((a, b) => a === b),
      tap(value => console.log(value)),
      map(status => status.toLowerCase())
    );

  }

  get workshop() {
    return this.form.get('workshop');
  }

  submit() {
    // Validate the form
    if(this.form.valid) {
      const entry = this.form.value; // Doesn't ID!!!
      entry.id = this.entryId;
      this.workshopService.editWorkshopEntry(entry);
      // redirect
      this.router.navigate(['/']);
    }
  }

}
