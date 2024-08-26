import { Meta, moduleMetadata } from '@storybook/angular';
import { ProfilePictureUploadComponent } from '../app/profile-picture-upload/profile-picture-upload.component';

export default {
  title: 'Components/Profile Picture Upload',
  component: ProfilePictureUploadComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProfilePictureUploadComponent],
      imports: [],
    }),
  ],
} as Meta;
