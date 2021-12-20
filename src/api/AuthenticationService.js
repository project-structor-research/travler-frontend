import axios from 'axios';

class AuthenticationService {
  // body에 username과 password를 넣고 POST /authenticate
  executeJwtAuthenticationService(username, password) {
    return axios.post('/authenticate', {
        username,
        password
    })
  }

  executeHelloService() {
    console.log("===executeHelloService===")
    return axios.get('/hello');        
  }

  // 로그인에 성공하면 username을 authenticatedUser로 localStorage에 저장
  // JwtToken을 생성해 setupAxiosInterceptors에 넣기
  registerSuccessfulLoginForJwt(username, token) {
    console.log("===registerSuccessfulLoginForJwt===")
    localStorage.setItem('token', token);
    localStorage.setItem('authenticatedUser', username);
    this.setupAxiosInterceptors();
  }

  // 앞에 Bearer를 추가해서 Token을 생성
  createJWTToken(token) {
    return 'Bearer ' + token
  }

  // token이 있다면 header에 Bearer + token 담아서 보냄
  // 이후의 모든 Request의 Header에는 Token이 담겨져서 전달됨
  setupAxiosInterceptors() {
    axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    error => {
        Promise.reject(error)
    });
  }

  logout() {
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("token");
  }

  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    console.log("===UserloggedInCheck===");
    console.log(token);

    if (token != "undefined") {
        return true;
    }    
    return false;
  }

  getLoggedInUserName() {
    //let user = sessionStorage.getItem('authenticatedUser')
    let user = localStorage.getItem('authenticatedUser');
    if(user===null) return '';
    return user;
  }
}

export default new AuthenticationService()