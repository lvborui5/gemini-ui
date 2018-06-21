'use strict';
/**
 * 用于构建项目图标文件索引
 */
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');

var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8'); // 读取源文件
var nodes = postcss.parse(fontFile).nodes; // 解析源文件中的节点
var classList = []; // 目标文件的内容

nodes.forEach((node) => { // 遍历节点
  var selector = node.selector || ''; // 节点的选择器
  var reg = new RegExp(/\.g-icon-([^:]+):before/); // 指定选择器的正则
  var arr = selector.match(reg); // 指定选择器

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {}); // 输出目标文件
