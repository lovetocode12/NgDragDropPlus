import { Component } from '@angular/core';
import { NgDragDropPlusService, DraggedEvent } from 'ng-drag-drop-plus';
// import { NgDragDropPlusService, DraggedEvent } from 'projects/ng-drag-drop-plus/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDragDropPlus';
  Available = 'Available';
  Selected = 'Selected';
  courses = [
    {
      name: 'Angular'
    },
    {
      name: 'Node js'
    },
    {
      name: 'Sql Server'
    },
    {
      name: 'Docker'
    },
  ];

  selectedCourses = [];

  constructor(private ngDragDropPlusService: NgDragDropPlusService) {
    this.ngDragDropPlusService.onDropSub.subscribe((event) => this.dropCourse(event));
  }


  dropCourse(event: DraggedEvent) {
    const { data, source, destination } = event;
    if (source === this.Available && destination === this.Selected) {
      const index = this.courses.findIndex(c => c.name === data.name);
      if (index !== -1) {
        const course = this.courses.splice(index, 1);
        this.selectedCourses.push(course[0]);
      }
    } else if (source === this.Selected && destination === this.Available) {
      const index = this.selectedCourses.findIndex(c => c.name === data.name);
      if (index !== -1) {
        const course = this.selectedCourses.splice(index, 1);
        this.courses.push(course[0]);
      }
    }
  }
}


