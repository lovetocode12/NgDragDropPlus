import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { NgDragDropPlusService, DraggedEvent } from '../services/ng-drag-drop-plus.service';
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[droppable]'
})
export class DroppableDirective {

    @Input() dragDestination: string;

    constructor(private el: ElementRef, private dragDropPlusService: NgDragDropPlusService) {
    }

    @HostListener('dragover', ['$event']) ondragover(event: Event) {
        event.preventDefault();
    }

    @HostListener('drop', ['$event']) ondrag(event) {
        const obj = JSON.parse(event.dataTransfer.getData('text'));
        const dragEvent = new DraggedEvent({
            event,
            data: obj.dragData,
            source: obj.dragSource,
            destination: this.dragDestination
        })
        this.dragDropPlusService.onDropSub.next(dragEvent);
    }
}