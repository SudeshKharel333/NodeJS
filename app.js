const express = require('express')// express package express vnni variable ma rakhya
const app = express()//storing it in variable app

app.get('/', (req, res) => {
    res.send("hello world")
})
app.listen(4000, function () {
    console.log("nodejs project has started at port 3000")
})
// "/about" ma gayepaxi yo dekhauni 
app.get('/about', (req, res) => {
    res.send("about page")
})
//  "/" ma gayepaxi console ma yo dekhauni
// app.get('/', (req, res) => {
//     console.log(req)
// })
app.get('/contact', (req, res) => {
    res.send("contact page is here")
})