import { localApi } from './api'

import { CreateUserDTO, IUser } from 'src/interfaces/user'

class UserService {
  public findAll(): Promise<IUser[]> {
    return localApi.get('/users')
  }

  public findOne(id: number): Promise<IUser> {
    return localApi.get(`/users/${id}`)
  }

  public create(data: CreateUserDTO): Promise<IUser> {
    return localApi.post('/users/', data)
  }

  public update(user: IUser): Promise<IUser> {
    return localApi.put('/users/', user)
  }

  public delete(id: number): Promise<void> {
    return localApi.delete(`/users/${id}`)
  }
}

export const userService = new UserService()
