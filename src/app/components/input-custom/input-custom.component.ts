import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
