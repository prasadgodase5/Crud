import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StdserviceService } from 'src/app/stdservice.service';
import { ADDComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
names:any

  constructor(public dialog: MatDialog, private http:StdserviceService) {
    
  }
  
  openDialog() {
    this.dialog.open(ADDComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
  updatedialog(data1:any) {
    this.dialog.open(UpdateComponent, {
      data: {
        id:data1.id,
        user:data1.user,
        date:data1.date,
        amount:data1.amount,
        status:data1.status


      },
    });
  }

  demoDialog() {
    this.dialog.open(DemoComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

ngOnInit(): void {
  this.GetData();
  
}

  GetData(){
this.http.Getdata().subscribe(res =>{
  this.names=res;
})
  }

  DeleteData(id:any){
    this.http.DeleteData(id).subscribe(res =>{
      this.GetData();
    })
  }

}
