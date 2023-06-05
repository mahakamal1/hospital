
export interface clinic{
  id:number,
  name:string
}

export interface role{
  id: string,
  name: string,
  normalizedName: string,
  concurrencyStamp: null
}


export interface changePassword{
  oldPassword: string,
  newPassword: string,
  confirmNewPassword: string
}
