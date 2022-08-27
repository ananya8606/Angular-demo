import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  price : number = 20000; 
  presentDate = new Date(); 
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43; 
  decimalNum3: number = 0.8178; 
  jsonData = { id: 'one', name: { username: 'user1' }} 
  num:string="{minimumIntegerDigits}.{minimumFractionDigits} - {maximumFractionDigits}"
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 
  timeChange = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new 
    Date().toString()), 1000); 
 }); 
  constructor() { }

  ngOnInit(): void {
  }

}
