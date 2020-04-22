import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ccard',
  templateUrl: './ccard.component.html',
  styleUrls: ['./ccard.component.css']
})
export class CCardComponent implements OnInit {
  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;

  constructor() { }

  ngOnInit(): void {
  }

}
