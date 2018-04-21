import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-course',
  template:`
        {{ text | summary:20}}
  `
})
export class CourseComponent {
 
  text=`hello their what are you doing`;
}


//we can supply parameter in piples
//we can add many parameter as per requirment by comma separate