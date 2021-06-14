import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})
export class TechnologyItemComponent implements OnInit {
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
