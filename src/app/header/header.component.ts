import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // Add header initialization logic here if required.
  }

closeMenu() {
  const navbar = document.getElementById('mainNav');

  if (navbar && navbar.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    bsCollapse.hide();
  }
}
  home() {
  this.router.navigate(['/']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

about() {
  this.router.navigate(['/about']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

skills() {
  this.router.navigate(['/skills']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

experience() {
  this.router.navigate(['/experience']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

projects() {
  this.router.navigate(['/projects']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

education() {
  this.router.navigate(['/education']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

contact() {
  this.router.navigate(['/contact']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
}
