import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.listen(8080, () => console.log('Server Up'))

app.get('/', (req, res) => {
    const users = [
        { nombre: 'Alex', apellido: 'Marin', edad: 45, correo: 'alexmarinmendez@gmail.com' },
        { nombre: 'Pablo', apellido: 'Volpe', edad: 15, correo: 'pablovolpe@gmail.com' },
        { nombre: 'Victor', apellido: 'Hernandez', edad: 29, correo: 'vhernandez@gmail.com' },
        { nombre: 'Emanuel', apellido: 'Cargino', edad: 85, correo: 'emanuelcargino@gmail.com' },
        { nombre: 'Evelin', apellido: 'Capaijira', edad: 18, correo: 'evelin@gmail.com' },
    ]
    const indexAleatorio = Math.floor(Math.random() * 5)
    // users[indexAleatorio].title = `Datos del usuario ${indexAleatorio}`
    res.render('actividad', {
        title: 'Datos del usuario',
        ...users[indexAleatorio]
    })
})

app.get('/otraRuta', (req, res) => {
    res.render('otra', {
        title: 'Página de la otra ruta',
        counter: 6
    })
})