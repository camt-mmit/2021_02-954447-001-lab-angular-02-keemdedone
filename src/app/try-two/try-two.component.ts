import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-two',
  templateUrl: './try-two.component.html',
  styleUrls: ['./try-two.component.scss']
})
export class TryTwoComponent implements OnInit {

  items =[{value:0},{value:0}];

  ngOnInit(): void {
    return;
  }

  onChange(index:number,value:number): void {
  this.items[index].value = value;
  }

}
