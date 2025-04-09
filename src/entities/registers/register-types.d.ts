type Register = {
  id: String
  value: Float
  // cashClosings CashClosing[]
  lottery?: Lottery
  operator: User
  created_at: Date
  updated_at: Date
}

type RegisterWithoutOperatorPassword = Omit<Register, 'operator'> & {
  operator: Omit<User, 'password'>
}
