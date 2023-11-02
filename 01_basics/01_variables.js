const accountId = 21
let accountEmail = 'sachin@gmail.com';
var accountPassword = '12345'
accountCity = 'Jaipur'
let accountState
// accountId = 2 // now allowed with const

// {} => scope

accountEmail = 'sachin@google.com'
accountPassword = '6789'
accountCity = 'Mumbai'

console.log(accountId);

/**
Prefer not use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);