import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,
    FormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs = [
    { company: 'Softek.in', role: 'Angular Developer', period: 'August 2023 – Present', details: ['Developed reusable Angular components and Single Page Applications.', 'Integrated REST APIs and Firebase services.', 'Implemented responsive user interfaces using Bootstrap.', 'Worked with Git and Agile methodology.', 'Fixed bugs and optimized application performance.'] },
    { company: 'WovVTech (Technocompass Consulting Pvt. Ltd.)', role: 'Associate Software Developer (Angular)', period: 'June 2022 – December 2022', details: ['Worked on WovvRA and WovvOKEN projects.'] },
    { company: 'RhythmFlows Solutions Pvt. Ltd.', role: 'Junior Web Developer', period: 'October 2021 – May 2022', details: ['Worked as a Junior Web Developer.'] }
  ];
}
