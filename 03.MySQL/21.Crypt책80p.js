const crypto = require('crypto');

//SHA: Secure Hash Algorithm 해시를 생성합니다.
let shasum = crypto.createHash('sha256');       //2가지] sha256_렝스64, sha512(더복잡)_렝스128
shasum.update('crypto_hash');               //주로 패스워드 (암호화할 평문)
let output = shasum.digest('base64');      //2가지] hex(16진수), base64(대소문자+숫자+기호)렝스88

console.log('crypto_hash', output);
console.log(output.length);