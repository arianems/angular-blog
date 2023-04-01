import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent implements OnInit {

  //#region bound data
  @Input() coverPhoto: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() id:string="0";
  //#endregion

  constructor() {}

  ngOnInit(): void {

  }
}
