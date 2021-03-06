import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../template';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit {

  @Input() customers: ICustomer[];
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
