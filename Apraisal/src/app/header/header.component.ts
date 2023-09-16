import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public totalItem : number = 0;
  public searchTerm !: string;
  search(event:any){
  
  }
}
