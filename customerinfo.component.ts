import { Component, } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent {
  constructor(private fb: FormBuilder) { }
  myForm = this.fb.group({
    companyName: ['', 
    [Validators.required, 
    Validators.minLength(4),
    Validators.maxLength(40)]],

    email: ['',
     [Validators.required, 
      Validators.email]],

    phone: ['', [Validators.required,
    Validators.maxLength(10)]],

    macType:['',[Validators.required]],
    amount:['',[Validators.required]],

    machinetype: this.fb.group({

    }),
    machines: this.fb.array([]),

  });


  get companyName() {
    return this.myForm.get('companyName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get phone() {
    return this.myForm.get('phone');
  }

  get macType() {
    return this.myForm.get('macType');
  }

  get amount() {
    return this.myForm.get('amount');
  }

  get machinesForms() {
    return this.myForm.get('machines') as FormArray;
  }

  addMachine() {
    this.machinesForms.push(
      this.fb.group({
        machinetype: [''],
        amount: ['']
      })
    )
  }

  removeMachine(index: number) {
    this.machinesForms.removeAt(index);
  }
  preview: string = '';
  save() {
    if (this.myForm.valid) {
      alert("Successfully Ordered")
      this.myForm.reset();
    }
    else {
      alert("Please fill the form correctly")
    }
    this.preview = JSON.stringify(this.myForm.value);
  }


}



