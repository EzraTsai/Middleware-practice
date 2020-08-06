// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    const requestTime = new Date()
    const responseTime = 1000
    const duration = responseTime - requestTime.getUTCMilliseconds()
    console.log('Request Time:', requestTime, '|', req.method, 'from', req.url, '| total time:', duration, 'ms')
    next()
})

app.get('/', (req, res) => {
    res.send('列出全部 Todo')
    const responseTime = new Date()
    console.log('Response Time 1:', responseTime)
})

app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')
    const responseTime = new Date()
    console.log('Response Time 2:', responseTime)
})

app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
    const responseTime = new Date()
    console.log('Response Time 3:', responseTime)
})

app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
    const responseTime = new Date()
    console.log('Response Time 4:', responseTime)
})

app.use((req, res, next) => {

})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})