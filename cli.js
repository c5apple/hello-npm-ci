#!/usr/bin/env node

const packageJson = require('./package.json');
console.log(`my-cli v${packageJson.version} is running!`);

const { spawn } = require('child_process');

// npx http-server コマンドを実行
const serverProcess = spawn('npx', ['http-server'], {
  stdio: 'inherit'  // 標準入力/出力/エラーを親プロセス（つまりコンソール）と共有
});

// サーバープロセスが終了したときの処理
serverProcess.on('close', (code) => {
  console.log(`http-server stopped with exit code ${code}`);
});
