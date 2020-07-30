const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 1020,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    // 本地调试
    win.loadURL('http://localhost:3000');
    // 生产环境打包
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, '../build/index.html'),
    //     protocol: 'file',
    //     // slashes: true,
    // }));

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

// 监听 greetToMain 事件
ipcMain.on('greetToMain', (event, arg) => {
    console.log('来自渲染进程问候', arg);
    // 回复渲染进程
    event.reply('greetToRenderer', { greet: 'hello render '});
});