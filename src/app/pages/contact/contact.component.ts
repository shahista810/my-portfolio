import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports:[FormsModule,NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      this.submitted = true;
      contactForm.reset();
    }
  }
}
