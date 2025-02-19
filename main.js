const {app = express(), BrowserWindow } = require('electron')
const express = require('express')
const dotenv = require('dotenv');

dotenv.config()

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    heigth: 600
  })

  window.loadFile('index.html')
}


app.whenReady().then(() =>{
  createWindow()

  // Conection to spotifyAPI
  const expressApp = express()
  const port = 5000

  var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
  var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

expressApp.get('/auth/login', (req, res) => {
  // Implement login logic here
});

expressApp.get('/auth/callback', (req, res) => {
  // Implement callback logic here
});

expressApp.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`)
})

})
