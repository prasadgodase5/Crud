import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StdserviceService } from 'src/app/stdservice.service';
import{FormControl, FormGroup} from '@angular/forms'

export interface DialogData {
  id:any,
  user:any,
  date:any,
  amount:any,
  status:any
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:StdserviceService) {}

loginform=new FormGroup({
  user:new FormControl('',),
  date:new FormControl ('',),
  amount:new FormControl('',),
  status:new FormControl('',)


})

  Update(){
    this.http.updateData(this.data.id,this.loginform.value).subscribe(res =>{
      // location.reload();
    })
  }

}
