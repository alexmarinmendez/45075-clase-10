import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.listen(8080, () => console.log('Server Up'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Página princial',
        nombre: 'Piqué'
    })
})

app.get('/otraRuta', (req, res) => {
    res.render('otra', {
        title: 'Página de la otra ruta',
        counter: 6
    })
})