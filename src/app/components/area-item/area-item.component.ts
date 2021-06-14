import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-item',
  templateUrl: './area-item.component.html',
  styleUrls: ['./area-item.component.scss']
})
export class AreaItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
