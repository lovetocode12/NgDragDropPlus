import { Component } from '@angular/core';
import { NgDragDropPlusService } from 'ng-drag-drop-plus';
// import { NgDragDropPlusService } from 'projects/ng-drag-drop-plus/src/public-api';

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
    this.ngDragDropPlusService.onDragSub.subscribe((event) => this.dropCourse(event));
  }


  dropCourse(event) {
    const { data, source } = event;
    if (source === this.Available) {
      const index = this.courses.findIndex(c => c.name === data.name);
      if (index !== -1) {
        const course = this.courses.splice(index, 1);
        this.selectedCourses.push(course[0]);
      }
    } else {
      const index = this.selectedCourses.findIndex(c => c.name === data.name);
      if (index !== -1) {
        const course = this.selectedCourses.splice(index, 1);
        this.courses.push(course[0]);
      }
    }
  }
}


