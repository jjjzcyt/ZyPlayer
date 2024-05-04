/**
 * 自定义代码片段
 */
const Snippet = [
  {
    label: 'ifelse',
    insertText: `if (\${1:condition}) {
  \t$0
} else {
  \t
}
    `,
    detail: '普通if-else',
    documentation: `if (condition) {

} else {

}`,
  },
  {
    label: 'for',
    insertText: `for (let \${1:i} = 0; \${1:i} < \${2:array}.length; \${1:i}++) {
  let \${3:data} = \${2:array}[\${1:i}];
  \$0
}`,
    detail: '普通 for 循环',
    documentation: `for (let i = 0; i < array.length; i++) {
  let data = array[i];

}`,
  },
  {
    label: 'forof',
    insertText: `for (let data of \${1:array}) {
  \$0
}`,
    detail: 'for-of(遍历数组推荐)',
    documentation: `for (let data of array) {

}`,
  },
  {
    label: 'forin',
    insertText: `for (let key in \${1:object}) {
  let data = \${1:object}[key];
  \$0
}`,
    detail: 'for-in(遍历对象推荐)',
    documentation: `for (let key in object) {
  let data = object[key];

}`,
  },
  {
    label: '$js',
    insertText: `\\$js.toString(()=>{
    $0
})`,
    detail: '$js工具',
    documentation: `$js.toString(()=>{

})`,
  },
  {
    label: 'list.map',
    insertText: `list.map((item,index)=>{
  $1
})`,
    detail: 'list.map',
    documentation: `list.map((item,index)=>{

    })`,
  },
  {
    label: 'd.pushit',
    insertText: `d.push({
  title: "$1",
  desc:"",
  img:"",
  url:"$2"
})`,
    detail: '海阔d.push',
    documentation: `d.push({
  title: '',
  desc:'',
  img:'',
  url:''
})`,
  },

];

/**
 * 自定义函数
 */
const Function = [
  {
    label: 'getProxyUrl',
    insertText: 'getProxyUrl()+\'&url=\'',
    detail: '获取本地代理链接',
    documentation: 'getProxyUrl()',
  },
  {
    label: 'gzip',
    insertText: 'gzip($0)',
    detail: 'gzip压缩',
    documentation: 'gzip(string)',
  },
  {
    label: 'ungzip',
    insertText: 'ungzip($0)',
    detail: 'ungzip 解压',
    documentation: `ungzip(base64)`,
  },
  {
    label: 'uint8ArrayToBase64',
    insertText: 'uint8ArrayToBase64($0)',
    detail: 'uint8数组转Base64',
    documentation: `uint8ArrayToBase64(uint8Array)`,
  },
  {
    label: 'Utf8ArrayToStr',
    insertText: 'Utf8ArrayToStr($0)',
    detail: 'Utf8数组转字符串',
    documentation: `Utf8ArrayToStr(array)`,
  },
  {
    label: 'rsa.encode',
    insertText: 'RSA.encode($1,"$2",null)',
    detail: 'rsa加密',
    documentation: `RSA.encode(data, key, option)`,
  },
  {
    label: 'rsa.decode',
    insertText: 'RSA.decode($1,"$2",null)',
    detail: 'rsa解密',
    documentation: `RSA.decode(data, key, option)`,
  },
  {
    label: 'fixAdM3u8',
    insertText: 'fixAdM3u8($1,$2,$3)',
    detail: '根据正则处理原始m3u8里的广告ts片段，自动修复相对链接',
    documentation: `fixAdM3u8(m3u8_text, m3u8_url, ad_remove)`,
  },
  {
    label: 'fixAdM3u8Ai',
    insertText: 'fixAdM3u8Ai($1)',
    detail: '智能对比去除广告。支持嵌套m3u8。只需要传入播放地址',
    documentation: `fixAdM3u8Ai(m3u8_url)`,
  },
  {
    label: 'stringify',
    insertText: 'stringify($1)',
    detail: 'js对象转json文本',
    documentation: `stringify(object)\nJSON.stringify的简写`,
  },
  {
    label: 'urlencode',
    insertText: 'urlencode(${1:input})',
    detail: 'url编码',
    documentation: 'urlencode(string)',
  },
  {
    label: 'encodeStr',
    insertText: 'encodeStr($1,$2)',
    detail: '字符串指定编码',
    documentation: 'encodeStr(input,encoding="gbk")',
  },
  {
    label: 'decodeStr',
    insertText: 'decodeStr($1,$2)',
    detail: '字符串指定解码',
    documentation: 'decodeStr(input,encoding="gbk")',
  },
  {
    label: 'jinja2',
    insertText: 'cheerio.jinja2($1,{fl:fl})',
    detail: 'jinja2模板渲染',
    documentation: 'cheerio.jinja2(url,{fl:fl)',
  },
  {
    label: 'base64Encode',
    insertText: 'base64Encode($1)',
    detail: 'base64编码',
    documentation: 'base64Encode(string)',
  },
  {
    label: 'base64Decode',
    insertText: 'base64Decode($1)',
    detail: 'base64解码',
    documentation: 'base64Decode(string)',
  },
  {
    label: 'md5',
    insertText: 'md5($0)',
    detail: 'md5加密',
    documentation: 'md5(string)',
  },
  {
    label: 'log',
    insertText: 'log($0)',
    detail: '打印日志(文本)',
    documentation: 'log(string)',
  },
  {
    label: 'print',
    insertText: 'print($0)',
    detail: '打印日志(文本)',
    documentation: 'print(string)',
  },
  {
    label: 'urljoin',
    insertText: 'urljoin($1,$2)',
    detail: '路径拼接 urljoin(from,to)',
    documentation: 'urljoin(from,to)',
  },
  {
    label: 'urljoin2',
    insertText: 'urljoin2($1,$2)',
    detail: '路径拼接 urljoin2(from,to)',
    documentation: 'urljoin2(from,to)',
  },
  {
    label: 'pdfa',
    insertText: 'pdfa($1,$2)',
    detail: '提取列表',
    documentation: '例子:pdfa(item,"body&&a")',
  },
  {
    label: 'pdfh',
    insertText: 'pdfh($1,$2)',
    detail: '提取文本',
    documentation: '例子:pd(item,"a&&Text")',
  },
  {
    label: 'pd',
    insertText: 'pd($1,$2,$3)',
    detail: '提取链接或者图片地址',
    documentation: '例子:pd(item,"a&&href","http://xx.com/api")',
  },
  {
    label: 'getQuery',
    insertText: 'getQuery($1)',
    detail: '链接的query转为字典(url)',
    documentation: 'getQuery(url)',
  },
  {
    label: 'setItem',
    insertText: 'setItem($1,$2)',
    detail: '存在数据库配置表里, key字段对应值value,没有就新增,有就更新,调用此方法会清除key对应的内存缓存',
    documentation: 'setItem(k,v)',
  },
  {
    label: 'getItem',
    insertText: 'getItem($1,$2)',
    detail: '获取数据库配置表对应的key字段的value，没有这个key就返回value默认传参.需要有缓存,第一次获取后会存在内存里',
    documentation: 'getItem(k,v)',
  },
  {
    label: 'clearItem',
    insertText: 'clearItem($1)',
    detail: '删除数据库key对应的一条数据,并清除此key对应的内存缓存',
    documentation: 'clearItem(k)',
  },
  {
    label: 'buildUrl',
    insertText: 'buildUrl($1,$2)',
    detail: 'get参数编译链接,类似python params字典自动拼接',
    documentation: 'buildUrl(url,obj)',
  },
  {
    label: '$require',
    insertText: '\\$require("$1")',
    detail: 'eval执行一段远程js链接',
    documentation: '$require(url)',
  },
  {
    label: 'getCode',
    insertText: 'getCode($1)',
    detail: '带一次宝塔验证的源码获取',
    documentation: 'getCode(url)',
  },
  {
    label: 'getHtml',
    insertText: 'getHtml($1)',
    detail: '源rule专用的请求方法,自动注入cookie',
    documentation: 'getHtml(url)',
  },
  {
    label: 'req',
    insertText: 'req($1,{})',
    detail: '构造网页请求-原始',
    documentation: 'req(url,object)',
  },
  {
    label: 'request',
    insertText: 'request($1,{})',
    detail: '构造网页请求-封装',
    documentation: 'request(url,object)',
  },
  {
    label: 'post',
    insertText: 'post($1,{})',
    detail: 'post请求-封装',
    documentation: 'post(url,object)',
  },
  {
    label: 'dealJson',
    insertText: 'dealJson($1)',
    detail: '处理返回的json数据',
    documentation: 'dealJson(json)',
  },
  {
    label: 'getHome',
    insertText: 'getHome($1)',
    detail: '获取链接的host',
    documentation: 'getHome(url)',
  },
];

/**
 * 自定义关键词
 */
const Keyword = [
  {
    label: 'setResult',
    insertText: 'setResult(d)',
    detail: '海阔写法设置一级或搜索列表数据',
    documentation: 'setResult(d)',
  },
  {
    label: 'setResult2',
    insertText: 'setResult2(d)',
    detail: '设置cms的完整json数据为drpy的一级、搜索列表数据',
    documentation: 'setResult2(d)',
  },
  {
    label: 'setHomeResult',
    insertText: 'setHomeResult(d)',
    detail: '同海阔，跟setResult的区别在于数据格式为{list:[]}',
    documentation: 'setHomeResult(d)',
  },

  {
    label: 'Referer',
    insertText: 'Referer',
    detail: 'headers里的属性-访问来源',
    documentation: 'headers里的属性之一',
  },
  {
    label: 'User-Agent',
    insertText: 'User-Agent',
    detail: 'headers里的属性-请求头',
    documentation: 'headers里的属性之一',
  },
  {
    label: 'MOBILE_UA',
    insertText: 'MOBILE_UA',
    detail: '应用注入的手机UA',
    documentation: 'Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36',
  },
  {
    label: 'PC_UA',
    insertText: 'PC_UA',
    detail: '应用注入的电脑UA',
    documentation: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
  },
  {
    label: 'headers',
    insertText: 'headers:{ \'User-Agent\': PC_UA, \'Referer\': \'\', \'content-type\': \'application/x-www-form-urlencoded\', \'Cookie\': \'\'}',
    detail: '常用headers参数',
    documentation: 'headers:{ \'User-Agent\': PC_UA, \'Referer\': \'\', \'content-type\': \'application/x-www-form-urlencoded\', \'Cookie\': \'\'}',
  },
];

/**
 * 自定义变量
 */
const Variable = [
  {
    label: 'rule_fetch_params',
    insertText: 'rule_fetch_params',
    detail: 'rule_fetch_params',
    documentation: 'rule_fetch_params',
  },
  {
    label: 'fetch_params',
    insertText: 'fetch_params',
    detail: 'fetch_params',
    documentation: 'fetch_params',
  },
  {
    label: 'rule',
    insertText: 'rule',
    detail: '源本身的对象',
    documentation: '可以对顶层源对象的属性进行操作',
  },
  {
    label: 'MY_URL',
    insertText: 'MY_URL',
    detail: '获取当前网络请求地址',
    documentation: '',
  },
  {
    label: 'UA',
    insertText: 'UA',
    detail: '最简ua',
    documentation: 'Mozilla/5.0',

  },
  {
    label: 'UC_UA',
    insertText: 'UC_UA',
    detail: 'uc浏览器的ua',
    documentation: 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36',
  },
  {
    label: 'IOS_UA',
    insertText: 'IOS_UA',
    detail: '苹果设备的ua',
    documentation: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  }];

const createDependencyProposals = (range: object, monaco: any) => {
  let suggestions = [];
  // 代码片段
  let suggestions_27 = Snippet.map((it) => {
    Object.assign(it, {
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: range,
    });
    suggestions.push(it);
    return it;
  });
  // 函数
  let suggestions_1 = Function.map((it) => {
    Object.assign(it, {
      kind: monaco.languages.CompletionItemKind.Function,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: range,
    });
    suggestions.push(it);
    return it;
  });
  // 关键词
  let suggestions_17 = Keyword.map((it) => {
    Object.assign(it, {
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.None,
      range: range,
    });
    suggestions.push(it);
    return it;
  });

  // 变量
  let suggestions_4 = Variable.map((it) => {
    Object.assign(it, {
      kind: monaco.languages.CompletionItemKind.Variable,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.None,
      range: range,
    });
    suggestions.push(it);
    return it;
  });
  return suggestions;
};

export { createDependencyProposals };
