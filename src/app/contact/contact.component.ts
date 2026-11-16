import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase/compat/app';
import 'firebase/compat/database';
@Component({
  selector: 'app-contact',
  imports: [CommonModule , FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
sending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private ngZone: NgZone) {}

name: any;
email: any;
mobile: any;
subject: any;
message: any;

pushKey: any;






sendDetails() {

  console.log("Send Details Function Called");

  this.name = (document.getElementById('name') as HTMLInputElement).value.trim();
  this.email = (document.getElementById('email') as HTMLInputElement).value.trim();
  this.mobile = (document.getElementById('mobile') as HTMLInputElement).value.trim();
  this.subject = (document.getElementById('subject') as HTMLInputElement).value.trim();
  this.message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

  // Reset alerts
  this.successMessage = '';
  this.errorMessage = '';

  // Current Date (dd/MM/yyyy)
  const today = new Date();

  const date =
    ('0' + today.getDate()).slice(-2) + '/' +
    ('0' + (today.getMonth() + 1)).slice(-2) + '/' +
    today.getFullYear();

  // Validation
  if (!this.name || !this.email || !this.mobile || !this.subject || !this.message) {

    this.errorMessage = 'Please complete all required fields before submitting your enquiry.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {

    this.errorMessage = 'Please enter a valid email address.';
    return;
  }

  if (!/^[0-9+\-\s()]{7,20}$/.test(this.mobile)) {

    this.errorMessage = 'Please enter a valid mobile number.';
    return;
  }

  this.createPushKey();

  console.log("Firebase Push Key:", this.pushKey);

  firebase.default.database().ref("Enquiry/")
    .child(this.pushKey)
    .set({

      name: this.name,
      email: this.email,
      mobile: this.mobile,
      subject: this.subject,
      message: this.message,
      date: date

    })
    .then(() => {

      console.log("Firebase Data Saved Successfully");

      this.successMessage =
        'Thank you for contacting us! Your enquiry has been submitted successfully.';

      // Clear form fields
      (document.getElementById('name') as HTMLInputElement).value = '';
      (document.getElementById('email') as HTMLInputElement).value = '';
      (document.getElementById('mobile') as HTMLInputElement).value = '';
      (document.getElementById('subject') as HTMLInputElement).value = '';
      (document.getElementById('message') as HTMLTextAreaElement).value = '';

    })
    .catch((error: any) => {

      console.error("Firebase Error:", error);

      this.errorMessage =
        'Sorry, we could not submit your enquiry at this time. Please check your internet connection and try again.';

    });
}

createPushKey() {
  this.ngZone.run(() => {
    this.pushKey = firebase.default.database().ref().push().key!;
    console.log("Generated Push Key:", this.pushKey);
  });
}


 
}
