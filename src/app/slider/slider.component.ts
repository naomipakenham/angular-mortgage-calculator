import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['../app.component.css']
})
export class SliderComponent implements OnInit {
  @Input() title: string;
  @Input() sliderValue: any;
  value: string;
  timeout: any = null;

  @Output() valueChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.value = this.sliderValue.min;
  }

  onValueChange(newValue){
    this.value = newValue;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.valueChange.emit(newValue), 500);
  }

  getTitle() {
    var re = /value/gi;
    var value = this.value || this.sliderValue.min;
    return this.sliderValue.title.replace(re, value);
  }
}
