import type { Encryption } from "@/singletons/encryption"
import type { UsersRepository } from "../repositories/users-repository"

type CreateUserServiceParams = {
  data: {
    name: string
    email: string
    password: string
    role: UserRoles
  }
  deps: {
    encryption: Encryption
    usersRepository: UsersRepository
  }
}

// TODO: make lottery based
export async function createUserService({ data, deps }: CreateUserServiceParams) {
  const { usersRepository, encryption } = deps

  const userExists = await usersRepository.findByEmail(data.email)

  if (userExists) {
    // TODO: create error handling
    throw Error('User already exxists')
  }

  const hashedPassword = encryption.hash(data.password)

  const user = await usersRepository.create({
    email: data.email,
    name: data.name,
    password: hashedPassword,
    role: data.role
  })

  const { password, ...userWithoutPassword } = user

  return userWithoutPassword
}
