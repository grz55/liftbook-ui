import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent implements OnInit{

  exerciseForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    pictureUrl: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.exerciseForm = this.fb.group({
      name: ['', Validators.required],
      pictureUrl: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addExercise() {
    const formValue = this.exerciseForm.value;
    this.http.post('http://localhost:8080/exercises', formValue)
      .subscribe(
        (response) => {
          console.log('Exercise added successfully:', response);
        },
        (error) => {
          console.error('Error adding exercise:', error);
        }
      );
  }

}
