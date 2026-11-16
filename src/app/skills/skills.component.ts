import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [ CommonModule,
    FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills = [
  { name: 'Angular', category: 'Frontend Framework', icon: 'bi bi-code-slash' },
  { name: 'TypeScript', category: 'Programming Language', icon: 'bi bi-braces' },
  { name: 'JavaScript', category: 'Programming Language', icon: 'bi bi-filetype-js' },
  { name: 'HTML5 & CSS3', category: 'Web Technologies', icon: 'bi bi-filetype-html' },
  { name: 'Bootstrap', category: 'CSS Framework', icon: 'bi bi-bootstrap' },
  { name: 'Firebase', category: 'Backend Services', icon: 'bi bi-fire' },
  { name: 'REST API', category: 'API Integration', icon: 'bi bi-cloud-arrow-down' },
  { name: 'RxJS', category: 'Reactive Programming', icon: 'bi bi-arrow-repeat' },
  { name: 'MySQL', category: 'Database', icon: 'bi bi-database' },
  { name: 'Git & GitHub', category: 'Version Control', icon: 'bi bi-github' },
  { name: 'JSON & XML', category: 'Data Formats', icon: 'bi bi-filetype-json' },
  { name: 'VS Code', category: 'Development Tool', icon: 'bi bi-code-square' }
];

}
