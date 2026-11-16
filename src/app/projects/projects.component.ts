import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,
    FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 projects = [
    { name: 'BusinessForSale', url: 'https://www.businessforsale.in/', description: 'Business listing platform for buying and selling businesses.' },
    { name: 'Wholesaler', url: 'https://wholesaler.in/', description: 'B2B wholesale marketplace and product portal.' },
    { name: 'Recycler India', url: 'https://recycler.co.in/', description: 'Web platform for recycling-related businesses and services.' },
    { name: 'Incoox', url: 'https://www.incoox.com/', description: 'Business web application and online platform.' },
    { name: 'RentNsale', url: 'https://www.rentnsale.com/', description: 'Online rental and sale listing platform.' },
    { name: 'TalentPool', url: 'https://www.talentpool.in/', description: 'Recruitment platform for candidates and recruiters.' },
    { name: 'HRComply', url: 'https://www.hrcomply.com/', description: 'HR and compliance-focused web application.' },
    { name: 'Import & Export', url: 'https://www.importandexport.in/', description: 'Business portal for import and export services.' },
    { name: 'Learn & Earn', url: 'https://learnandearn.in/', description: 'Online learning and opportunity platform.' }
  ];
}
