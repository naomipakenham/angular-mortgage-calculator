import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['../app.component.css']
})
export class GraphComponent implements OnInit{
  @Input() graphData;

  type = 'LineChart';
     columnNames = ["Time", "Mortgage remaining", "Compound Interest"];
     options = {
        hAxis: {
           title: 'Time'
        },
        vAxis:{
           title: 'Money'
        },
     };
     width = 750;
     height = 400;
     ngOnInit() {}
}
