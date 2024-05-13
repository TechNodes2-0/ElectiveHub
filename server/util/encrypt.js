const crypto = require('crypto');

module.exports.generateKeyPair = ()=>{
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });
    return { publicKey, privateKey };
}

// create signatur using private key
module.exports.createSignature = (data, privateKey)=>{
    return crypto
            .createSign('RSA-SHA256')
            .update(data)
            .sign(privateKey, 'hex');
}

//verify signature using public key
module.exports.verifySignature = (data, signature, publicKey)=>{
    return crypto
            .createVerify('RSA-SHA256')
            .update(data)
            .verify(publicKey, signature, 'hex');
}


