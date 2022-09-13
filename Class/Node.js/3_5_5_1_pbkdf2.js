const cryto = require('crypto');

cryto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64)
})