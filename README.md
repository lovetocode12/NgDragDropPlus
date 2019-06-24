# NgDragDropPlus

![Work In Progress](/images/giphy.gif)

Table of contents:
* [Installation](#installation)
* [How it works](#howitworks)
* [Usage](#usage)
* [License](#license)


## <a name="installation"></a>Installation
```
npm i ng-drag-drop-plus --save
```
## <a name="howitworks"></a>How it works

Include the ng-calendar-plus module in your application at any place. The recommended way is to add forRoot initialization in the main app module.

```
import { NgDragDropPlusModule } from 'ng-drag-drop-plus';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgDragDropPlusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```

## <a name="usage"></a>Usage
```
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

```
example use directives like below html
```
<div droppable class="container">
  <h2>Available Courses</h2>
  <ul *ngFor="let course of courses">
    <li draggable [dragData]="course" [dragSource]="Available" class="course-item">
      {{course.name}}
    </li>
  </ul>
</div>
<div droppable class="container">
  <h2>Dropped Courses</h2>
  <ul *ngFor="let course of selectedCourses">
    <li draggable [dragData]="course" [dragSource]="Selected" class="course-item">
      {{course.name}}
    </li>
  </ul>
</div>
```
# Events Available 

## Subscribe to drop event
```
constructor(private ngDragDropPlusService: NgDragDropPlusService) {
    this.ngDragDropPlusService.onDragSub.subscribe((event) => this.dropCourse(event));
  }

```

## <a name="license">License
Licensed under MIT

