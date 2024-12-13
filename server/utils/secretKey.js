import crypto from 'crypto';

// Generate a random secret key
const generateSecretKey = ()=> {
    return crypto.randomBytes(32).toString('hex');
};

const secretKey = "d5d021b7b89f3fb567b02507e7fbdf9fb8052341722859890aaf78606521fa46";

// console.log(secretKey)
 export default secretKey;