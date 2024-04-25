import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const token = formData.username + ':' + formData.password;

      this.http.post<any>('/login', { token }).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
