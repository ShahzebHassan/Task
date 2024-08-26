import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'profile-picture-upload',
  templateUrl: './profile-picture-upload.component.html',
  styleUrls: ['./profile-picture-upload.component.scss'],
})
export class ProfilePictureUploadComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  transform: ImageTransform = {};
  showCropper = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  fileChangeEvent(event: any): void {
    if (!this.isBrowser) return;
    this.imageChangedEvent = event;
    this.showCropper = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (!this.isBrowser) return;
    this.croppedImage = event.objectUrl;
    console.log(event);
  }

  imageLoaded() {
    if (!this.isBrowser) return;
    this.showCropper = true;
  }

  loadImageFailed() {
    alert('Failed to load image. Please try a different image.');
  }

  confirmCrop() {
    this.showCropper = false;
  }

  cancelCrop() {
    this.showCropper = false;
    this.imageChangedEvent = null;
  }

  handleFileDrop(event: DragEvent): void {
    if (!this.isBrowser) return;
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.imageChangedEvent = { target: { files: [file] } };
      this.showCropper = true;
    }
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
