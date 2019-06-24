import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgDragDropPlusService {

  public onDragSub = new Subject<any>();
  constructor() { }
}

export class DraggedEvent {
  event = {};
  data = {};
  source = '';
  constructor(init?: Partial<DraggedEvent>) {
    Object.assign(this, init);
  }
}
