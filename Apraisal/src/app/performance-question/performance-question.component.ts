import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MasterQuesEntry } from '../model/MasterQuesEntry';
import { PerformanceService } from '../service/performance.service';

@Component({
  selector: 'app-performance-question',
  templateUrl: './performance-question.component.html',
  styleUrls: ['./performance-question.component.scss']
})
export class PerformanceQuestionComponent implements OnInit {
 kpiEntryForm!: FormGroup;
  displayedColumns: string[] = ['index', 'name', 'description', 'action'];
  dataSource!: MatTableDataSource<MasterQuesEntry>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  subscriptions: Subscription[] = [];
  constructor(private performanceService:PerformanceService){}
  ngOnInit(): void {
    this.kpiEntryForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
    this.getKPIEntryDetails();
  }
  getKPIEntryDetails() {
    debugger;
    let subscription = this.performanceService.getPIEntryDetails().subscribe((data) => {
    
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.subscriptions.push(subscription);
  }
  submit()
  {
    debugger;
    let kpiEntry = this.performanceService.getDefaultMasterPIEntry();
    kpiEntry.id =this.kpiEntryForm.get('id')?.value;
    kpiEntry.name = this.kpiEntryForm.get('name')?.value;
    kpiEntry.description = this.kpiEntryForm.get('description')?.value;
    if (kpiEntry.id == 0)
    {
      let subscription = this.performanceService.savePIEntryDetail(kpiEntry).subscribe(data => {
        //this.notificationService.open(data as string, 3000, Status.Success);
        this.reset();
        this.getKPIEntryDetails();
      });
      this.subscriptions.push(subscription);
    }
  }
  reset(): void
  {
    
  }
  editKPIEntry(id:number)
  {

  }
  deleteKPIEntry(id :number)
  {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
