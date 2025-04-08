export interface UsersRepository {
  findByEmail: (email: string) => Promise<User | null>
  create: (userData: CreateUserDTO) => Promise<User> 
}
