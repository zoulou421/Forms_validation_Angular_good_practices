import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormControl, FormGroup, UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Academind';
  //form:any= new FormGroup({
     //email: new FormControl<string|null>(null),
    // age: new FormControl<number|null>(null),

    form= new UntypedFormGroup({
     email: new UntypedFormControl(null),
     age: new UntypedFormControl(null),

  });

  onSubmit(){
     if(this.form.value.email){
       console.log(this.form.value.length);
     }
  }
}
