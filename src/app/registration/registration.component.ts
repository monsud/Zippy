import { PasswordValidators } from './password.validator';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  isChecked1: boolean = false;
  isChecked2: boolean = false;
  selectedMonth: string = moment().format("month");
  Country: any = ['Italy', 'Spain', 'France', 'Germany', 'Portugal'];
  Questions: any = ['What is you favorite soccer team', 'What is you best friend name', 'What is your mother maiden name'];

  Date: any = {};

  getDays() {
    var totMonthDays = moment().month(this.selectedMonth).daysInMonth();
    var days = [];
    for(var i = 0; i < totMonthDays+1; i++){
      days.push(i)
    }
    days.splice(0, 1);
    this.Date.day = days;
    return days;
  }

  getMonths(){
    var myMonth = moment().month() + 1;
    var limitMonth = 13;
    var months = [];
    for(var i = myMonth; i < limitMonth; i++){
      months.push(i.toString());
    }
    return months;
  }

  getYears(){
    var myYear = moment().get('year');
    var limitYear = parseInt(myYear.toString(), 10) - 70;
    var years = [];
    for(var i = myYear; i > limitYear; i--){
      years.push(i.toString());
    }
    return years;
  }

  changeValue(checkBox:boolean){
    checkBox=!checkBox;
  }

  onSelectedMonth(month: string){
    this.selectedMonth = moment(month, 'M').format('MMMM');
    this.getDays();
  }

  constructor() { }

  ngOnInit(): void {
    this.Date = {
      day: this.getDays(),
      month: this.getMonths(),
      year: this.getYears()
    }
  }

}
