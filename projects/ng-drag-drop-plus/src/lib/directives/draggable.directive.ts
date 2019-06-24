import { Directive, HostBinding, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[draggable]'
})

export class DraggableDirective {

    @Input() dragData: any;
    @Input() dragSource: string;
    constructor(private el: ElementRef) {

    }

    @HostBinding('draggable') draggable = true;

    @HostListener('dragstart', ['$event']) dragStart(event: any) {
        event.dataTransfer.setData('text', JSON.stringify({ dragData: this.dragData, dragSource: this.dragSource }));
    }
}
