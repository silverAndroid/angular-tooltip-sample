import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent implements OnInit {
  @ViewChild('container', { static: true })
  public tooltipContainer!: ElementRef<HTMLElement>;

  @ViewChild('caret')
  public arrow?: ElementRef<HTMLElement>;

  public showCaret = false;

  constructor() {}

  ngOnInit(): void {}
}
