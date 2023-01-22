import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

  export class ApiComponent implements OnInit {
    entries = [];
  
    constructor(private entryService: MyDataService) {}
  
    ngOnInit(): void {
      this.entryService.getEntries().subscribe((entries) => (this.entries = entries));
    }
  
    
}
