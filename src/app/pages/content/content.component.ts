import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { seedData } from 'src/app/data/seedData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  coverPhoto:string="";
  contentTitle:string="";
  contentDescription:string="";

  private id : string | null = '0';

  constructor(private route : ActivatedRoute) {

  }

  ngOnInit(): void {

    //retrieving the id from the route
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
    })

    this.setValuesToComponent(this.id!);

  }

  setValuesToComponent(id:string) : void {
    var result = seedData.find(value => value.id == id);
    if (result != null) {
      this.coverPhoto = result.photo;
      this.contentDescription = result.description;
      this.contentTitle = result.title;
    }
  }


}
