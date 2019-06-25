import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgDragDropPlusService {

  public onDragSub = new Subject<any>();
  public onDropSub = new Subject<any>();
  constructor() { }
}

export class DraggedEvent {
  event = {};
  data: any;
  source = '';
  destination = '';
  constructor(init?: Partial<DraggedEvent>) {
    Object.assign(this, init);
  }
}
