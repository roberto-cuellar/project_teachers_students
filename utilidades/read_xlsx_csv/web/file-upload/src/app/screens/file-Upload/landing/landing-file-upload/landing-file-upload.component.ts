import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';

@Component({
  selector: 'app-landing-file-upload',
  templateUrl: './landing-file-upload.component.html',
  styleUrls: ['./landing-file-upload.component.css']
})
export class LandingFileUploadComponent implements OnInit {

  // Variables
  public shortLink: string = ''; 
  public isLoading: boolean = false;
  public file: File = null;


  constructor(
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.file = event.target.files[0];
  }

  onUpload(){
    this.isLoading = !this.isLoading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.isLoading = false; // Flag variable 
          }
      }
    );
    
  }


}
