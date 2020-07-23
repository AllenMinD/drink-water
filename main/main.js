const { app, BrowserWindow } = require('electron');
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