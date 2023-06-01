//GET
//api/Nurse
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

