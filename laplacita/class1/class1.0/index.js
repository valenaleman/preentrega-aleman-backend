const _ = require("lodash");
const fs = require('fs');
const crypto = require('crypto');
const data = require('data');
const http = require('http');

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

        this.writeUsersToFile(existingUsers);
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

    writeUsersToFile(users){
        fs.writeFileSync(this.filename, JSON.stringify(users, null, 2));
    }

    validateUser(username,password){
        const users = this.readUserFromFile();
        
        const user = users.find((u) => u.username === username);

        if (!user) {
            return 'Error: Usuario no encontrado'; // Usuario no existe
          }      
        
        if (this.verifyPassword(password, user.password)) {
          return 'Logueado'; // Contraseña correcta
        } else {
          return 'Error: Contraseña incorrecta'; // Contraseña incorrecta
        }
        
    }

}

const userManager = new UserManager();
userManager.createUser({
  nombre: 'John',
  apellido: 'Doe',
  username: 'johndoe',
  password: 'micontraseña123',
});

console.log(userManager.validateUser('Productos', 'Precio'));

const precioActualizado = data();

const ultimosPrecios = data('Precio máximo 7600', 'Precio mínimo 690');

if (ultimosPrecios.isValid()) {
    
    const diferenciaPrecio = precioActualizado.diff(ultimosPrecios, 'En esta sección mostrare los precios actualizados');
  
    console.log(`Hay una diferencia de precios entre el más caro y el más baráto el cual es la siguiente cantidad: ${diferenciaPrecio}`);
  } else {
    console.log('Estos son los precios.');
  }

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta es una página de una venta de pañales\n');
  });
  
  const PORT = 8080;
  server.listen(PORT, () => {
    console.log(`En esta página se mostraran la lista de precios ${PORT}`);
  });