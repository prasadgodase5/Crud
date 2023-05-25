import { Component, Inject,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StdserviceService } from 'src/app/stdservice.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ADDComponent implements OnInit {

  loginform:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:StdserviceService) {

    this.loginform=new FormGroup({
      user: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),

    })

  }

 ngOnInit(): void {
 }

postData(){
  this.http.PostData(this.loginform.value).subscribe(res =>{
   this.loginform.reset();
  location.reload()
  })
}

}
