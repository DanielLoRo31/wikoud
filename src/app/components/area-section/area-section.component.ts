import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-section',
  templateUrl: './area-section.component.html',
  styleUrls: ['./area-section.component.scss']
})
export class AreaSectionComponent implements OnInit {

  items = Array(4);

  constructor() { }

  ngOnInit(): void {
  }

}
