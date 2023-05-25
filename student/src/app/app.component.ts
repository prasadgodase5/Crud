import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { StdserviceService } from './stdservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';
  studentLogin!:FormGroup
 data:any

constructor(private fb:FormBuilder,private sc:StdserviceService){

}
ngOnInit()
{



}


}
