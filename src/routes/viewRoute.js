import express from 'express'

const router = express.Router()

const foods = [
    { name: 'Banana', price: 10 },
    { name: 'Wine', price: 150 },
    { name: 'Hot Dogs', price: 100 },
    { name: 'Hamburguesas', price: 110 },
    { name: 'Beers', price: 75 },
]

router.get('/', (req, res) => {
    const users = [
        { nombre: 'Alex', apellido: 'Marin', edad: 45, correo: 'alexmarinmendez@gmail.com', role: 'user' },
        { nombre: 'Pablo', apellido: 'Volpe', edad: 15, correo: 'pablovolpe@gmail.com', role: 'admin' },
        { nombre: 'Victor', apellido: 'Hernandez', edad: 29, correo: 'vhernandez@gmail.com', role: 'user' },
        { nombre: 'Emanuel', apellido: 'Cargino', edad: 85, correo: 'emanuelcargino@gmail.com', role: 'user' },
        { nombre: 'Evelin', apellido: 'Capaijira', edad: 18, correo: 'evelin@gmail.com', role: 'user' },
    ]
    const indexAleatorio = Math.floor(Math.random() * 5)
    // users[indexAleatorio].title = `Datos del usuario ${indexAleatorio}`
    res.render('actividad2', {
        title: 'Datos del usuario',
        style: 'ejemplo.css',
        ...users[indexAleatorio],
        isAdmin: users[indexAleatorio].role == 'admin',
        foods
    })
})

export default router