const { remote, ipcRenderer } = require('electron')

document.getElementById('menu-btn').addEventListener('click', (event) => {
  ipcRenderer.send('display-app-menu', {
    x: event.x,
    y: event.y
  })
})

document.getElementById('minimize-btn').addEventListener('click', () => {
  remote.getCurrentWindow().minimize()
})

document.getElementById('max-unmax-btn').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow()
  if(currentWindow.isMaximized()) {
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
})

document.getElementById('close-btn').addEventListener('click', () => {
  remote.app.quit()
})