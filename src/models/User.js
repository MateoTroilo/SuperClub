const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const user = {
    direccionDeArchivo: path.resolve(__dirname, "../data/user.json"),
    obtenerUsuarios: function() {
        return JSON.parse(fs.readFileSync(this.direccionDeArchivo,"utf-8"));
    },
    generarId: function ()  {
        let users = this.obtenerUsuarios()
        let ids = users.map((x) => x.id);
        let idMax = users.length == 0 ? 0 : Math.max(...ids);
        return idMax + 1;
    },
    addUser: function (user) {
        let users = this.obtenerUsuarios()
        let userConId = { id: this.generarId(), ...user , password:bcrypt.hashSync(user.password, 10)};
        users.push(userConId);
        fs.writeFileSync(this.direccionDeArchivo, JSON.stringify(users, null, "   ")); //que quede uno abajo del otro
    },

    findByEmail: function (email){
        let users = this.obtenerUsuarios()
        return users.find(user => user.email == email)
    }

}



module.exports = user;