const {app, BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    icon: path.join(__dirname, 'icon.png'),
    resizable: false
  });
  win.setMenuBarVisibility(false);
  win.setTitle('DEU');
  win.loadFile('src/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());