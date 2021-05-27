import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { createPopper, Instance as Popper } from '@popperjs/core';
import { ArrowModifier } from '@popperjs/core/lib/modifiers/arrow';
import { OffsetModifier } from '@popperjs/core/lib/modifiers/offset';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip')
  public tooltipContent!: TooltipComponent;

  @Input()
  public showCaret = false;

  private popper!: Popper;

  constructor(
    private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tooltipContent.showCaret = this.showCaret;
    this.changeDetector.detectChanges();

    const arrowModifier: Partial<ArrowModifier> = {
      name: 'arrow',
      enabled: this.showCaret,
      options: {
        element: this.tooltipContent.arrow?.nativeElement
      }
    };
    const offsetModifier: Partial<OffsetModifier> = {
      name: 'offset',
      enabled: this.showCaret,
      options: {
        offset: [0, 8],
      },
    };

    this.popper = createPopper(
      this.elementRef.nativeElement,
      this.tooltipContent.tooltipContainer.nativeElement,
      {
        modifiers: [
          arrowModifier,
          offsetModifier,
        ],
        placement: 'bottom'
      }
    );
  }
}
