import { Content, Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  template: ``
})


export class DynamicInputComponent implements OnInit {

  sections = [{ inputs:[{value:0,}] }];

  ngOnInit(): void {
    return;
  }

  addInput(section:any): void{
    section.inputs.push({value:0});
  }

  addSection(): void{
    this.sections.push({ inputs:[{value:0,}] });
  }

  onChange(section:any,index:number,value:number): void {
    section.inputs[index].value = value;
  }

  deleteInput(section:any,index:number): void {
    section.inputs.splice(index,1);
  }

  deleteSection(index:number): void{
    this.sections.splice(index,1)
  }

  getResult(section:any): string{
    let total = 0;
    section.inputs.forEach((num:any) => total += num.value , 0);
    return total.toString();
  }

 /*

  getResult(): string{
    let total = 0;
    this.inputs.forEach((num) => total += num.value);
    return total.toString();
  }

  addInput(): void{
    this.inputs.push({value:0});
  }

  deleteInput(index:number): void {
    this.inputs.splice(index,1);
  }

  addSection(): void{
    this.sections.push({section:this.inputs});
    console.log(this.sections);
  }

  deleteSection(index:number): void{
    this.sections.splice(index,1)
  }

*/

}
