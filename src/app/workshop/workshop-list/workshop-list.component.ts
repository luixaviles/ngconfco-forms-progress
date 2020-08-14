import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopEntry } from '../shared/model/model';
import { WorkshopService } from '../shared/services/workshop.service';

@Component({
  selector: 'ws-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
  displayedColumns: string[] = ['user', 'workshop', 'ticketPrice', 'url', 'action'];
  dataSource: WorkshopEntry[];

  constructor(private workshopService: WorkshopService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.dataSource = this.workshopService.getWorkshopEntries();
  }

  editEntry(entry: WorkshopEntry): void {
    // Redirect /workshop/edit/:id
    this.router.navigate(['/workshop', 'edit', entry.id]);
  }

  deleteEntry(entry: WorkshopEntry): void {

  }
}
