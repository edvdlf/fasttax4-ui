import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Chat, Stat, Transaction } from './dashboard.model';
import { UntypedFormBuilder } from '@angular/forms';
import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions,  } from './data';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})


export class DashboardHomeComponent {
  sideBarOpen = true;

    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
    term: any;


    constructor(public formBuilder: UntypedFormBuilder) {
    }




}
