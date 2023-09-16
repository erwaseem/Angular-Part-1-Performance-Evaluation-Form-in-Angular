import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PerformanceService } from '../service/performance.service';
import { EmployeeDropdown } from '../model/EmployeeDropdown';
import { Subscription } from 'rxjs';
import { MasterQuesEntry } from '../model/MasterQuesEntry';
import { MasterPerformanceRating } from '../model/MasterPerformanceRating';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  staffAppraisalForm!: FormGroup;
  employeeDropdown: EmployeeDropdown[] = [];
  masterQuesEntry: MasterQuesEntry[]=[];
  masterRating:MasterPerformanceRating[] = [];
  subscriptions:Subscription[]=[];
  constructor(private performanceService:PerformanceService){}
  ngOnInit(): void {
    this.getEmployeeList();
    this.staffAppraisalForm = new FormGroup({
      id: new FormControl(null),
      empId: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });
    this.getKPIEntryDetails();
  }

  getEmployeeList() {
    debugger;
    let subscription = this.performanceService.getEmployeeDropdownRoleWise().subscribe(data => {
      this.employeeDropdown = data.sort((a, b) => a.fullName.localeCompare(b.fullName));
    })
    this.subscriptions.push(subscription)
  }
  submit()
  {

  }
  getKPIEntryDetails()
  {
    debugger;
     let subscription = this.performanceService.getPIEntryDetails().subscribe((data) => {
    this.masterQuesEntry=data;
  })
  this.subscriptions.push(subscription);
  this.getPerformanceRatings();

  }
  getPerformanceRatings()
  {
    let subscription = this.performanceService.getPerformanceRatings().subscribe((data) => {
      this.masterRating=data;
    });
    this.subscriptions.push(subscription);
  }
}
