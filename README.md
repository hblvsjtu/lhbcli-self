# lhbcli-self

            
## 作者：冰红茶  
## 参考书籍：
    
------    
    
自制脚手架试验，在npm上传指令代码后，后面如果需要更改模板，直接更新github里面的代码便可，下载到本地的模板会跟github上的代码同步，去享受乐趣^_ ^

## 目录
## [一、前期准备](#1)
### [1.1 注册npm账号](#1.1)
### [1.2 Github新建代码仓库](#1.2)
## [二、脚手架创建过程](#2)
### [2.1 下载Github仓库](#2.1)
### [2.2 创建脚本指令](#2.2) 
### [2.3 npm init](#2.3)
### [2.4 上传代码](#2.4) 
## [三、注意事项](#3)
### [3.1 版本号](#3.1)

        
------      
        
<h2 id='1'>一、前期准备</h2>
<h3 id='1.1'>1.1 注册npm账号</h3>  
        
#### 1) 登录npm官网
> - [npm传送门](https://www.npmjs.com/signupe)
                
<h3 id='1.2'>1.2 Github新建代码仓库</h3>
            
#### 1) Github新建代码仓库
> - 这个直接创建就好了，后面需要用到仓库的地址，如下图所示
        ![Github新建代码仓库](https://github.com/hblvsjtu/lhbcli-self/blob/master/picture/%E5%9B%BE1-1.png?raw=true)
        
<h2 id='2'>二、脚手架创建过程</h2>
<h3 id='2.1'>2.1 下载Github仓库</h3>  
        
#### 1) 下载仓库压缩包
> - 如上图地址处下方有下载压缩包的按钮，直接下载即可
#### 2) 使用Github本地客户端下载
> - 下一个客户端进行版本管理也可以
                
<h3 id='2.2'>2.2 创建脚本指令</h3> 
                
> - 新建文件夹命名为"bin"
> - 在bin文件夹中创建index.js文件，作为脚本指令
> - 实例
                
                // index.js
                const program = require('commander'); // 用于命令行提供指令
                const download = require('download-git-repo'); // 提供github代码仓库的下载功能
                const chalk = require('chalk'); // 命令行高亮
                const ora = require('ora'); // 运行时图标

                program
                  .version('1.0.0', '-v, --version')
                  .option('-i, init [name]', '初始化lhbcli-self项目')
                  .parse(process.argv);

                if (program.init) {
                  const spinner = ora('正在从github下载lhbcli-self项目').start();
                  download('hblvsjtu/lhbcli-self', program.init, function (err) {
                    if(!err){
                      spinner.succeed(chalk.greenBright('下载成功'));
                    }else{
                      // 可以输出一些项目失败的信息
                      spinner.fail(chalk.redBright('下载失败'));
                    }
                  })
                }

                                
<h3 id='2.3'>2.3 npm init</h3> 
                
#### 1) 使用npm初始化项目
#### 2) 添加字段
> - 在package.json文件中添加bin字段和key字段
> - key字段就就会作为后来执行指令前缀
> - bin字段就会作为脚本指令的地址
> - 
                
                {
                  "name": "lhb-cli",
                  "version": "1.0.0",
                  "description": "cli-by-myself",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "bin": {
                    "lhb": "./bin/index.js"
                  },
                  "keywords": [
                    "lhb"
                  ],
                  "author": "lvhongbin",
                  "license": "MIT",
                  "dependencies": {
                  }
                }

                                
<h3 id='2.4'>2.4 上传代码</h3> 
                
#### 1) 上传代码到Github代码仓库
#### 2) 上传代码到npm代码仓库
> - npm login 它会要求你输入你的账号名和秘密和邮箱
> - npm public 上传代码
            
        
<h2 id='3'>三、注意事项</h2>
<h3 id='3.1'>3.1 版本号</h3>  
        
#### 1) 版本号无法覆盖
> - 在npm上传代码时，每一次的版本号必须比上一次的高，具体修改的方法在package.json文件那里的version字段




