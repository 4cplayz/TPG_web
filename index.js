import express from "express"

const app = express() // Remove 'new' keyword

app.get('/', (req, res) => { // Add 'req' parameter
  res.sendFile("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public/index.html")
})

app.get('/information', (req, res) => { // Add 'req' parameter
  res.sendFile("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public/information.html")
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})

