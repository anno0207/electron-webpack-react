// const { contextBridge, ipcRenderer } = require('electron')
const path = require('path')

// contextBridge.exposeInMainWorld('electron', {
//   startDrag: (fileName) => {
//     ipcRenderer.send('ondragstart', path.join(process.cwd(), fileName))
//   }
// })
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

function handleKeyPress(event) {
  // 你可以把处理按键按下事件的代码放在这里。
  document.getElementById("last-keypress").innerText = event.key;
  // console.log不起作用
  // console.log(`你按下了 ${event.key}`);
}
window.addEventListener('keyup', handleKeyPress, true);