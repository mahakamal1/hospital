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

export interface currentReservation{
  reservationid: number,
  name: string,
  status: string
}
