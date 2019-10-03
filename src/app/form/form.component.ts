import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { faTimes, faSlidersH } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.css']
})
export class FormComponent implements OnInit {
  @Input() sliders: any;
  @Input() onSlidersChange: void;
  @Input() onIconClicked;
  sliderValues: any;
  icon = faTimes;

  //@Output() slidersValueChange = new EventEmitter<string>();

  constructor() {
  }

  onClick() {
    const wasOpen = this.icon === faTimes;
    this.icon = wasOpen ? faSlidersH : faTimes;
    this.onIconClicked();
  }

  ngOnInit() {  }
}
