import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../_services/index';

/**
 * The alert component passes alert messages to the template whenever a message is
 * received from the alert service. It does this by subscribing to the alert service's
 * geteMessage() method which returns an Observable.
 */
@Component({
  selector: 'freki-alert',
  // The alert component template contains the html for displaying alert messages at the top of the page.
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
