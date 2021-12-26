import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-three',
  templateUrl: './try-three.component.html',
  styleUrls: ['./try-three.component.scss']
})
export class TryThreeComponent implements OnInit {

  items =[{value:0}];

  ngOnInit(): void {
    return;
  }

  add() : void{
    this.items.push({ value:0});
  }

  delete(index:number) : void {
    this.items.splice(index,1);
  }

  onChange(index:number,value:number): void {
    this.items[index].value = value;
    }

  getResult(): string{
    return this.items.map((item) => item.value).join('-');
  }
}
