import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myCal';
  toshow = '0';
  currvalue = "";

  writeToInput(value:string){ 
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
  }
  equals(){
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
  }
  clear(){
    this.toshow = "0";
    this.currvalue = "";
  }
  back(){
    this.currvalue = this.currvalue.slice(0,-1);
    this.toshow = this.currvalue;
    if (this.toshow == '') {this.toshow = '0'} 
  }
  calcValue(solve:any){
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve); 
  }
}
