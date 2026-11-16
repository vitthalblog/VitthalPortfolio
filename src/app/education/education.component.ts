import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
education = [
    { degree: 'Master of Computer Applications (MCA)', institute: 'S.R.T.M.U. Nanded', year: '2018', score: '72.99%' },
    { degree: 'Bachelor of Computer Science (BCS)', institute: 'Yeshwant College', year: '2015', score: '61.52%' },
    { degree: 'Higher Secondary Certificate (HSC)', institute: 'M.P. College', year: '2012', score: '50.33%' },
    { degree: 'Secondary School Certificate (SSC)', institute: 'S.R.T.V. Ahmedpur', year: '2010', score: '67.40%' }
  ];
}
