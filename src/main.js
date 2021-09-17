const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true,       // 为了解决require 识别问题
      contextIsolation: false,
      preload: path.join(__dirname, './preload.js')
    }
  })

  mainWindow.loadFile('./src/index.html')
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('second-window',()=>{
  const newWindow = new BrowserWindow({
    width:500,
    height:400,
    nodeIntegration: true,
    contextIsolation: false,
  })
  newWindow.loadFile('./src/windows/second.html');

  newWindow.on('close',()=>{
    // 防止内存泄露
    newWindow.destroy();
  })
})