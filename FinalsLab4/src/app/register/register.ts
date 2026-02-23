import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule,
    MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatSliderModule, MatCardModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  submitted = false;
  userName = '';

  formdata = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    skill: new FormControl(5)
  });

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.submitted = true;
      this.userName = data.userName;
      console.log("Form Submitted", data);
    }
  }
}
