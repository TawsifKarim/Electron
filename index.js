/**
 * Created by tawsif on 1/18/17.
 */
const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', ()=>{
  let win = new BrowserWindow({
      width: 1024,
      height: 676
  });

  win.loadURL(`file://${__dirname}/index.html`);

});
