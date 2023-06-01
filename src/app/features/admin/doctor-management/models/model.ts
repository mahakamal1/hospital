export interface Addworkers{
  userName: string,
  name:string,
  email: string,
  password: string,
  phone: string,
  role: string,
  age: number,
  clinicId: number
}

export interface Doctor{
  id: number,
  age: number,
  name: string,
  description: string,
  specialization: string,
  about: string,
  clinicId: number,
  clinic: {
    id: number,
    name: string
  }
}


export interface getById{
  id: number,
  age: number,
  name: string,
  description: string,
  specialization: string,
  about: string,
  clinicId: number,
  clinic: {
    id: number,
    name: string
  }
}
