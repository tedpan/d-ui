/*
为什么需要使用单独文件管理样式？
如在组件引入less文件，业务方需要接入less-loader。
如果在组件引入css文件，则开发体验较差。
因此分离出index.ts来import less文件，和css.ts来import css文件，
让用户自行接入需要使用的样式文件。
*/
import './index.less';