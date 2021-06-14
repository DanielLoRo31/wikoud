import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCustomComponent),
      multi: true,
    },
  ],
})
export class InputCustomComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() img: string;
  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();

  value: string;
  onChange = (_: any) => {};
  onTouch = () => {};
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  onChangeValue($event) {
    this.changeEvent.emit($event);
  }


  /* form control functions */
  writeValue(value: any): void {
    if (value) {
      this.value = value ? (value === 'undefined' || value === 'null' ? '' : value) : '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /* end form control functions */

}
