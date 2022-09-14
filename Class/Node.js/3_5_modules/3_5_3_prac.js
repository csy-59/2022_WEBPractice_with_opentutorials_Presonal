const url = repuire('url');

const {URL} = url;

console.log('WHATWG 방식 >>>>>>>>>>>>>>>');
const myURL = new URL('https://www.youtube.com/watch?v=LbK_6vaDLUM&list=RDLbK_6vaDLUM&start_radio=1');
console.log(myURL);
console.log(url.format(myURL));

console.log('Node 방식 >>>>>>>>>>>>>>>');
const parseURL = url.parse('https://www.youtube.com/watch?v=LbK_6vaDLUM&list=RDLbK_6vaDLUM&start_radio=1');
console.log(parseURL);
console.log(url.format(parseURL));