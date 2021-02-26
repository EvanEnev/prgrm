const { app, BrowserWindow } = require('electron')

require('update-electron-app')({
  repo: 'EvanEnev/program.ly',
  updateInterval: '5 minutes',
})

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true
  })
  win.maximize()
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
