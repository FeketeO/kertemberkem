import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  serverError = '';

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.auth.login(this.user).subscribe(
      user => {
        if (user) {
          this.router.navigate(['/']);
        }
      }
    );
  }
  setPassword(): void {
    this.userService.update({_id: '3', password: 'test'})
      .subscribe( resp => console.log(resp) );
  }

  }

