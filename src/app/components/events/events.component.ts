import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('.fancybox').fancybox();
  }
}
