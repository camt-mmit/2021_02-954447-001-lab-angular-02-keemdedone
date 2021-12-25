import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements OnInit {

  inputs =[{value:0}];
  sections = [{}];


  ngOnInit(): void {
    return;
  }

  onChange(index:number,value:number): void {
    this.inputs[index].value = value;
  }

  addInput(): void{
    this.inputs.push({value:0});
  }

  deleteInput(index:number): void {
    this.inputs.splice(index,1);
  }

  getResult(): string{
    let total = 0;
    this.inputs.forEach((num) => total += num.value);
    return total.toString();
  }

  addSection(): void{
    this.sections.push({});
  }

  deleteSection(index:number): void{
    this.sections.splice(index,1)
  }
}
