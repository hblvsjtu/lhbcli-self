#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
  .version('1.0.1', '-v, --version')
  .option('-i, init [name]', '初始化lhbcli-self项目')
  .parse(process.argv);

if (program.init) {
  const spinner = ora('正在从github下载lhbcli-self项目').start();
  download('hblvsjtu/lhbcli-self', program.init, function (err) {
    if(!err){
      // 可以输出一些项目成功的信息
      //console.info(chalk.blueBright('下载成功'));
      spinner.succeed(chalk.greenBright('下载成功'));
    }else{
      // 可以输出一些项目失败的信息
      spinner.fail(chalk.redBright('下载失败'));
    }
  })
}