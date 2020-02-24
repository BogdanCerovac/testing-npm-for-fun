# testing-npm-for-fun
Testing how to publish my own NodeJS package to Node Package registry (NPM) for fun and investigating the e2e process

## Objectives

### Create simple NodeJS package and publish it on NPM
- create a simple NodeJS class that renders name and email as string or as JSON string
- publish it to NPM and reuse it in another local app
- inject malicious code that posts the parameters to a remote server (.../test-npm-for-fun/logs.txt)

### Meta
- package is published under on URL: https://www.npmjs.com/package/testing-npm-for-fun
- it can be tested via RunKit on URL: https://runkit.com/npm/testing-npm-for-fun
- you can use it in your project running: `npm install testing-npm-for-fun`

### Runtime

```
var testingNpmForFun = require("testing-npm-for-fun")
var user = new testingNpmForFun("UserFrom105", "UserFrom105@test.no")
console.log(user.renderData());
```
