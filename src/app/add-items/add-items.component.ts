import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  public profileForm: FormGroup|any;
  public cities:any
  public validationMsgs = {
    'emailAddress': [{ type: 'email', message: 'Enter a valid email' }]
  }

  constructor(private formBuilder: FormBuilder,
    private service:AppService,
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/cities').subscribe((data) => {
      this.cities=data
  });


    this.profileForm = this.formBuilder.group({
      profile: this.formBuilder.array([this.createEmailFormGroup()])
    });
  }

  public addEmailFormGroup() {
    const profile = this.profileForm.get('profile') as FormArray
    console.log(profile)
    profile.push(this.createEmailFormGroup())
  }

  public removeOrClearEmail(i: number) {
    const profile = this.profileForm.get('profile') as FormArray
    if (profile.length > 1) {
      profile.removeAt(i)
    } else {
      profile.reset()
    }
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
          contactNo:new FormControl(''),
          city:new FormControl(''),
        })
  }
  submit(){
    localStorage.setItem('data',JSON.stringify(this.profileForm.value.profile))
    this.service.mode='list'
    console.log(this.profileForm.value)
  }

  // profileForm:FormGroup | any
  // arrayItems:any=[];
  // // arrayItems= [{
  // //   firstName: '',
  // //     lastName: '',
  // //     contactNo:'',
  // //     city:''
  // // }];
  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   // this.profileForm = new FormGroup({
  //   //   firstName: new FormControl(''),
  //   //   lastName: new FormControl(''),
  //   //   contactNo:new FormControl(''),
  //   //   city:new FormControl(''),
  //   // });
  //   this.profileForm = this.formBuilder.group({
  //     form: this.formBuilder.array([this.createFormGroup()])
  //   });
  //   this.addFormGroup()
  // }
  // public addFormGroup() {
  //   console.log(this.profileForm)
  //   const emails = this.profileForm.get('firstName') as FormArray
  //   this.arrayItems.push(this.createFormGroup())
  // }
  // private createFormGroup(): FormGroup {
  //   return new FormGroup({
  //     firstName: new FormControl(''),
  //     // lastName: new FormControl(''),
  //     // contactNo:new FormControl(''),
  //     // city:new FormControl(''),
  //   })
  // }

}
