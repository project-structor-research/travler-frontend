class LoginSecurity {

  isLogin() {
    if(sessionStorage.getItem("user")) {
      return true;
    }
    else {
      return false;
    }
  }
}

export default new LoginSecurity();