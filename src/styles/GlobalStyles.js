import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    /* 主色调 - 专业深蓝 */
    --color-primary-50: #f0f7ff;
    --color-primary-100: #e0f0ff;
    --color-primary-200: #b9ddff;
    --color-primary-300: #7cc3ff;
    --color-primary-400: #36a7ff;
    --color-primary-500: #0088ff;    /* 主要品牌色 */
    --color-primary-600: #006ee6;
    --color-primary-700: #0057b3;
    --color-primary-800: #004080;
    --color-primary-900: #002952;

    /* 辅助色调 */
    --color-secondary-500: #2c5282;  /* 深蓝，用于重要文字 */
    --color-accent-500: #00b7ff;     /* 亮蓝，用于强调 */
    
    /* 功能色 */
    --color-success: #00c853;
    --color-warning: #ffd600;
    --color-error: #ff1744;
    --color-info: #00b0ff;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 按钮样式 */
  .btn-primary {
    background-color: var(--color-primary-500);
    &:hover {
      background-color: var(--color-primary-600);
    }
  }

  /* 链接样式 */
  a {
    color: var(--color-primary-500);
    &:hover {
      color: var(--color-primary-600);
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles