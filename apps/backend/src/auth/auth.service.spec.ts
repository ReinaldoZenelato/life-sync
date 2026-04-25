import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('should register and return an auth payload', async () => {
    await expect(
      service.register({
        name: 'Reinaldo Z',
        email: 'rz@example.com',
        password: 'password123',
      }),
    ).resolves.toEqual({
      accessToken: 'jwt-placeholder-token',
      name: 'Reinaldo Z',
      email: 'rz@example.com',
    });
  });

  it('should login and return an auth payload', async () => {
    await expect(
      service.login({
        email: 'rz@example.com',
        password: 'password123',
      }),
    ).resolves.toEqual({
      accessToken: 'jwt-placeholder-token',
      name: 'RZ Developer',
      email: 'rz@example.com',
    });
  });
});
