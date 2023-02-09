import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.listen(8080, () => console.log('Server Up'))

const foods = [
    { name: 'Banana', price: 10 },
    { name: 'Wine', price: 150 },
    { name: 'Hot Dogs', price: 100 },
    { name: 'Hamburguesas', price: 110 },
    { name: 'Beers', price: 75 },
]

app.get('/', (req, res) => {
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
        ...users[indexAleatorio],
        isAdmin: users[indexAleatorio].role == 'admin',
        foods
    })
})

app.get('/otraRuta', (req, res) => {
    res.render('otra', {
        title: 'Página de la otra ruta',
        counter: 6
    })
})