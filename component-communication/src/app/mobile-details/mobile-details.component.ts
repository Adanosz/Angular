import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }
  @Input() name: string;
  @Input() phones: string;
}