import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadphoto = await uploadPhoto();
    const createuser = await createUser();

    return {
      photo: uploadphoto,
      user: createuser,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
