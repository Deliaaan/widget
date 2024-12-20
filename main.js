const {app, BrowserWindow } = require('electron')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    heigth: 600
  })

  window.loadFile('index.html')
}


app.whenReady().then(() =>{
  createWindow()
})