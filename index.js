import express from "express"
import path from "path" // Add this import for better path handling

const app = express()

// Serve static files from the public directory
app.use(express.static("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public"))

app.get('/', (req, res) => {
  res.sendFile("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public/index.html")
})

app.get('/information', (req, res) => {
  res.sendFile("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public/information.html")
})

// Make sure your 404.html file is in the correct location
// Either move it to the public directory or use the correct path

// This should be the LAST route
app.use((req, res, next) => {
  res.status(404).sendFile("C:/Users/tommy/OneDrive/Documents/Prog/WebSite/Web Developpement/TPG_web/public/404.html")
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})