import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-one',
  templateUrl: './try-one.component.html',
  styleUrls: ['./try-one.component.scss']
})
export class TryOneComponent implements OnInit {
  items =[0,0];

  ngOnInit(): void {
    return;
  }

  onChange(index:number,value:number): void {
  this.items[index] = value;
  this.items = [...this.items]; // สร้าง array ใหม่โดยอาศัยตัวเดิมซึ่ง ... คือการอ้างอิง array ใน items ทุก index ออกมา
  console.debug(this.items);
  }


}
