import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName:any; 
   formdata:any;
   userAge:any;
   ngOnInit() { 
      this.formdata = new FormGroup({ 
         userName: new FormControl("Tutorialspoint"),
         userAge: new FormControl("12")
      }); 
   } 
   onClickSub(data:any) {this.userName = data.userName;
    this.userAge=data.userAge;
    console.log("Textbox name is: "+data.userName);
    console.log("Textbox age is: "+data.userAgee);
   }
  onClickSubmit(result:any) {
    console.log("You have entered username: " + result.username); 
    console.log("You have entered age: " + result.userage); 
 }

}
