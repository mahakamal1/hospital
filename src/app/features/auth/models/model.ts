export interface Login{
  userName: string,
  password: string
}
//POST
///register
export interface RegisterPatient{
  userName: string,
  email: string,
  password: string,
  phone: string
}

//POST
//Addworkers
export interface Addworkers{
  userName: string,
  email: string,
  password: string,
  phone: string,
  role: string,
  age: number,
  clinicId: number
}



