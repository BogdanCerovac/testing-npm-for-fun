/*
testing-npm-for-fun
(c) Bogdan Cerovac
@license ISC
*/

'use strict';

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    renderData() {
        return `<div class="user">Name: ${this.name}Email: <a href="mailto:${this.email}">${this.email}</a></div>`;
    }

    showDataJSON(){
        return `{"Name" : "${this.name}", "Email" : "${this.email}"}`;
    }

}

module.exports = User;