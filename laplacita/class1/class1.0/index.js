const _ = require("lodash");
const fs = require('fs');
const crypto = require('crypto');

function generateRandomPrice(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPrices = [];
const NumberOfRandomPrice = 7600;

for (let i = 0; i < NumberOfRandomPrice; i++) {
    const randomPrice = generateRandomPrice(1, 690);
    randomPrices.push(randomPrice);
}

const countByNumber = _.countBy(randomPrices);

console.log('Resultados:');

for (let number in countByNumber) {

    console.log(`Número ${number}: ${countByNumber[number]} veces.`);
}

class UserManager {
    constructor(){
        this.filename = "Usuarios.json";
    }

    createUser(user){
        const hashedPassword = this.hashPassword(user.password);
        const newUser = {
            nombre: user.name,
            apellido: user.apellido,
            username: user.username,
            password: user.password,
        }

        const existingUsers = this.readUsersFromFile();

        existingUsers.push(newUser);

        this.writeUserToFile(existingUsers);
    }

    hashPassword(password){
        const hash = crypto.createHash('Valen03').update(password).digest('hex');
        return hash;
    }

    readUserFromFile(){
        try {
            const data = fs.readFileSync(this.filename, 'utf-8');
            return data;
        }catch(error){
            return[];
        }
    }

    writeUserToFile(users){
        fs.writeFileSync(this.filename, JSON.stringify(users, null, 2));
    }
}