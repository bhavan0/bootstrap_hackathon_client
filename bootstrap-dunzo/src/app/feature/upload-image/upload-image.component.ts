import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  form: FormGroup;
  error: string;
  userId = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  selectedFile: any;

  productsInfoAfterUpload = [];
  totalPrice: any;
  uploadedImage = false;


  // Save the Data into the DB
  dataToPersist: any;
  constructor(private formBuilder: FormBuilder,
    private uploadService: ImageService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      billImage: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      document.getElementsByClassName('custom-file-label')[0].innerHTML = file.name;
      this.form.get('billImage').setValue(file);
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFile = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('billImage').value);

    this.uploadService.upload(this.selectedFile).subscribe((data) => {
      this.dataToPersist = data;
      this.productsInfoAfterUpload = [];
      this.totalPrice = 0;
      for (const ob of Object.entries(data.products)) {
        this.productsInfoAfterUpload.push(ob[0] + ' - ' + ob[1]);
      }
      this.totalPrice = data.totalPrice;
      this.uploadedImage = true;
      console.log('data submitted');
      console.log(data);
    }
    );
  }

  save() {
    this.uploadService.saveData(this.dataToPersist).subscribe(x => {
      alert('Bill Uploaded Successfully');
      this.router.navigate(['./']);
    });
  }

}
