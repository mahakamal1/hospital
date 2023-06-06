export interface getClinicdoctor{
  clinic: {
    id: number,
    name: string
  },
  id: number,
  age: number,
  name: string,
  description: string,
  specialization: string,
  about: string,
  clinicId: number
}

export interface Reserve{
  planId: number,
  patientId: number
}
