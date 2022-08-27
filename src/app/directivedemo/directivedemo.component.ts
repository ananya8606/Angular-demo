import { Component, OnInit } from '@angular/core';
import { item } from './switch';
import { User } from '../user';
@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {
  show: boolean = true;  
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One';  
  users: User[] = [ 
    { 
       "userId": 1, 
       "userName": 'User1' 
    }, 
    { 
       "userId": 2, 
       "userName": 'User2' 
    }, ];
  constructor() { }

  ngOnInit(): void {
  }

}
