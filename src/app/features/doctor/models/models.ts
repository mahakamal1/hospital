

export interface getById{
  clinic: {id: number,name: string},
  lazyLoader: {},
  id: number,
  age: number,
  name: string,
  description: string | null,
  specialization: string | null,
  about: string | null,
  clinicId: number
}


export interface updateObject{
  id: number,
  age: number,
  name: string,
  description: string,
  specialization: string,
  about: string,
  clinicId: number
}


export interface addPlan{
  date: string,
  from: string,
  to: string,
  doctorId: number
}

export interface getDoctorPlans{
    id: number,
    date: string,
    from: string,
    to: string,
    doctorId: number,
    doctor: getById,
    patients: []
}


export interface patientPlan{
  id: number,
  age: number,
  name: string,
  email: string,
  phone: string
}

export interface getCurrentPlanPatient{
  name:string,
  status: string
}
