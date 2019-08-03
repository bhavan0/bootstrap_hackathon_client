import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  form: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  selectedFile: any;
  constructor(private formBuilder: FormBuilder,
    private uploadService: ImageService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      billImage: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {  
  
      const file = event.target.files[0];
      this.form.get('billImage').setValue(file);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFile = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('billImage').value);
<<<<<<< HEAD
    this.uploadService.upload(formData.get('file'), this.userId).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
=======

    this.uploadService.upload(this.selectedFile).subscribe((data) => {
      console.log('data submitted');
      console.log(data);
    }
>>>>>>> 9e681a18729165e28c84e890d65a46f3ed8d7f41
    );
  }
    
}
