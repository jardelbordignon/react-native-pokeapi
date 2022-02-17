export interface CreateUserDTO {
  name: string
  email: string
  avatarUrl: string
}

export interface IUser extends CreateUserDTO {
  id: number
}
