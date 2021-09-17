const { ipcRenderer } = require('electron') 
const btn = document.querySelector('#btn');

window.onload = () => {
  btn.onclick = () => {
    console.log('scr加载成功')
    ipcRenderer.send('second-window')
  }
}
