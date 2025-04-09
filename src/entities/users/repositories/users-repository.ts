export interface UsersRepository {
  findById: (id: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
  create: (userData: CreateUserDTO) => Promise<User>
}
