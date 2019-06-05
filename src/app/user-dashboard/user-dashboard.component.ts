import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.messageService.add({severity: 'success', summary: 'Welcome', detail: 'Successfully logged in'});
  }
}
