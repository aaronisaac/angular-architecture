import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() title: string = "Leyenda";
  @Input() progress: number = 50;

  @Output() changedValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onChnage(newValue: number) {

    if(newValue >= 0) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changedValue.emit(this.progress);
  }

  public changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress += value;
    this.txtProgress.nativeElement.focus();
    this.changedValue.emit(this.progress);
  }

}
