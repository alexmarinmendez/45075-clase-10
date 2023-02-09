import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewRouter from './routes/viewRoute.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.listen(8080, () => console.log('Server Up'))

app.use('/', viewRouter)

app.get('/otraRuta', (req, res) => {
    res.render('otra', {
        title: 'Página de la otra ruta',
        counter: 6
    })
})