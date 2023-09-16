import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterQuesEntry } from '../model/MasterQuesEntry';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { EmployeeDropdown } from '../model/EmployeeDropdown';
import { MasterPerformanceRating } from '../model/MasterPerformanceRating';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) { }
  getDefaultMasterPIEntry(): MasterQuesEntry {
    let piDetail: MasterQuesEntry = {
      id: 0,
      name: "name",
      description: "description",
    }
    return piDetail;
  }
  getPIEntryDetails() {
    return this.http.get<MasterQuesEntry[]>(`${environment.apiUrl}/Performance/getData`);
  }
  savePIEntryDetail(piDetail: MasterQuesEntry): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Performance/PostData`, piDetail);
  }
  getEmployeeDropdownRoleWise()
  {
   
    return this.http.get<EmployeeDropdown[]>(`${environment.apiUrl}/Performance/getFullName`);   
      
  }
  getPerformanceRatings() {
    return this.http.get<MasterPerformanceRating[]>(`${environment.apiUrl}/Performance/getPerformanceRating`);
  }
}
