import express, { json } from 'express' // require -> commonJS
import { corsMiddlewares } from './middlewares/cors.js'
import { moviesRouter } from './routes/movies.js'



// como leer un json es ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

// como leer un json en ESModules (recomendado) por ahora



// EN EL FUTURO 2025: el import de json sera asi:
// import movies from './movies.json' with { type: 'json' }

const app = express()
app.use(json())
app.use(corsMiddlewares())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
