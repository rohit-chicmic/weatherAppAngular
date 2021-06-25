import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'wa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    const token = localStorage.getItem('accessToken');
    // Check whether the token is expired and return
    // true or false
    if (token) {  
      this.router.navigateByUrl('chat');
    }
    
  }
   

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required]

    });
  }

  get f() { return this.form.controls; } // function which will return the control  of the form

  login(){
    if(this.form.valid){
      this.submitted = true;
      console.log(this.form.value);
      this.userService.login(this.form.value).subscribe(res => {
        console.log(res);
        
        localStorage.setItem('tokenData', JSON.stringify(res));
        // localStorage.setItem('data', JSON.stringify(res.user));
        console.log(localStorage.getItem('tokenData'));
        this.router.navigateByUrl('home')
        
      })
      
    }
    else{
      console.log('form is not valid!!');
      
    }
  }

}
