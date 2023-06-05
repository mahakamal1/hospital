export interface changePassword{
  oldPassword: string,
  newPassword: string,
  confirmNewPassword: string
}


export interface nurse{
  id: number,
  age: number,
  name: string,
  clinicId: number,
  clinic: {
    id: number,
    name: string
  }
}
