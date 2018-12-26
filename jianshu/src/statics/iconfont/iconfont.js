import {createGlobalStyle } from 'styled-components'


export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1545828192007'); /* IE9*/
    src: url('./iconfont.eot?t=1545828192007#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1545828192007') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1545828192007#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\\e60b"; }

.icon-spin:before { content: "\\e851"; }

.icon-Aa:before { content: "\\e636"; }

.icon-biji:before { content: "\\e62d"; }
`;