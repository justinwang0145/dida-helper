import { makeAutoObservable } from "mobx";

export class Store {
  authorizationCode;
  state;

  constructor() {
    makeAutoObservable(this);
  }

  init(authorizationCode, state) {
    this.setAuthorizationCode(authorizationCode);
    this.setState(state);
  }

  setAuthorizationCode(authorizationCode) {
    this.authorizationCode = authorizationCode;
  }

  setState(state) {
    this.state = state;
  }

  print() {
    console.log("Hello World123", this.authorizationCode);
    console.log("Hello World456", this.state);
  }
}

const store = new Store();
export { store };
