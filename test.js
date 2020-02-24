/**
 * 
 * 
 *  Primitive assert testing
 * 
 * 
 */

const assert = require('assert').strict;

const testerDef = {
    name  : "Tester",
    email : "Tester@Email.com"
};

const User = require('./User');
const tester = new User(testerDef.name, testerDef.email);


const testerJSON_mock = {"Name" : testerDef.name, "ssEmail" : testerDef.email};

try{

    assert.equal(JSON.stringify(JSON.parse(tester.showDataJSON())), JSON.stringify(testerJSON_mock));

    assert.deepStrictEqual (JSON.parse(tester.showDataJSON()), testerJSON_mock);

}catch(err){
    console.error("Tests for " + err.operator +" failed with errors:");
    console.error(err)
    return 1;   
}

console.log("All tests passed OK!");
return 0;

