import { TestBed } from '@angular/core/testing';

import { newUser, UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { httpResource } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Register new User', () => {
    const newUser: newUser = {
      username: 'testuser',
      email: 'test@gmail.com',
      password: 'qwerty'
    }

    service.register(newUser).subscribe(response => {
      console.log('Res to register:', response)
      debugger
      expect(response).toEqual(newUser)
    })

    const req = httpMock.expectOne('http://localhost:3001/api/users/register')
    expect(req.request.method).toBe('POST')
    req.flush(newUser)
  })
  
});
