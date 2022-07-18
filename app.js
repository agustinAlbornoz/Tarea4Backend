const express = require("express");
const router = require('./src/routes/routes')


const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(express.static(__dirname +"/public"))

app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});
