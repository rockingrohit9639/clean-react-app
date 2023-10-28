import faker from 'faker'
import { type Authentication, type IAuthentication } from '@/domain/usecases'
import { mockAccountModel } from './MockAccount'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): Authentication.Model =>
  mockAccountModel()

export class AuthenticationSpy implements IAuthentication {
  account = mockAuthenticationModel()
  params: Authentication.Params
  callsCount = 0

  async auth (params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
