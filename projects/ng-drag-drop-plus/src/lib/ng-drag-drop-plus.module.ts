import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgDragDropPlusService } from './services/ng-drag-drop-plus.service';
import { DraggableDirective } from './directives/draggable.directive';
import { DroppableDirective } from './directives/droppable.directive';

@NgModule({
  declarations: [DraggableDirective, DroppableDirective],
  imports: [
  ],
  exports: [DraggableDirective, DroppableDirective]
})
export class NgDragDropPlusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgDragDropPlusModule,
      providers: [NgDragDropPlusService]
    }
  }
}
