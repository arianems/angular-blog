import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  @Input() coverPhoto:string="";
  @Input() cardtTitle:string="";
  @Input() cardDescription:string="";

  ngOnInit(): void {

  }

}
