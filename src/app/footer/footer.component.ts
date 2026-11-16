import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
readonly year = new Date().getFullYear(); 

 constructor(private router: Router) {
  }

  ngOnInit(): void {
    // Add header initialization logic here if required.
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
