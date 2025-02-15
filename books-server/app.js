const express = require("express")
const res = require("express/lib/response")
const rotaLivro = require("./rotas/livro")
const rotaFavoritos = require("./rotas/favoritos")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavoritos)
const port = 8000


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
