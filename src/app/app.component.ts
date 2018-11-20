import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Swapi';
  people: any[];
  
  constructor(private DataService: DataService) { }
  
  ngOnInit()
  {
    console.log(this.DataService.getCustomer().subscribe(data => this.people = data));
    this.DataService.getCustomer().subscribe(data => this.people = data);
    console.log(this.people);
    console.log(this.DataService);
  }
}