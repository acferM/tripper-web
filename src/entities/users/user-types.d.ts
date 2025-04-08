type UserRoles = 'manager' | 'employee'

type User = {
  id: string 
  name: string 
  email: string 
  password: string 
  role: UserRoles

  // register             
  // cashClosings         
  // preserveTransactions 

  created_at: Date
  updated_at: Date
}
