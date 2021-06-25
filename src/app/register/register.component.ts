import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'wa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  // file: File = null;
  imgSrc: any;
  data:any;


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    // private domSanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; } // function which will return the control  of the form

  // public onChange(event: Event): void {
  //   this.file = (event.target as HTMLInputElement).files[0];
  //   this.validateFile();
  // }

  // private validateFile() {
  //   if (this.file && this.file.type.startsWith('image/')) {
  //     this.imgSrc = URL.createObjectURL(this.file);
  //     this.imgSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.imgSrc);
  //   } else {
  //     this.file = null;
  //   }
  // }
  
  register(){
    this.submitted = true;
    
    console.log(this.form.value);
    
    if (this.form.invalid){
      console.log('invalid form');
      return;
      
    }

    this.userService.register(this.form.value).subscribe(res => {
      console.log(res)
       
    });
      
    // // console.log(data);
    
    // this.router.navigate(['../login']);
    
  }
}
