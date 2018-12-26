import {createGlobalStyle } from 'styled-components'


export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1545794956874'); /* IE9*/
  src: url('iconfont.eot?t=1545794956874#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1545794956874') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1545794956874#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\e60b"; }

.icon-Aa:before { content: "\e636"; }

.icon-biji:before { content: "\e62d"; }
`;