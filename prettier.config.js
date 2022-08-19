module.exports = {
  // 一行最多80字符
  printWith: 80,
  // 使用4个空格缩进
  tabWidth: 4,
  // 不适用 tab 缩进， 而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false,
  // 末尾使用逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameline: false,
  // 箭头函数， 只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的@prettier
  requirePragma: false,
  // 不需要自动在文件开头输入@prettier
  insertPragma: false,
  // 使用默认的折行表标准
  proseWrap: 'preserve',
  // 根据显示样式决定html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfline: 'auto' 
}