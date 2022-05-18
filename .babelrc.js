module.exports = {
  // TODO: 根据https://github.com/worldzhao/blog/issues/5
  // 作者认为可以只引入helpers，不引入polyfill，而节约体积。
  // 但个人觉得，要么两个都不使用，要么两个都使用，
  // 尽量一致，降低业务方接入难度，当然在文档说清楚如何使用也OK。
  // 所以这里给plugin-transform-runtime配置了polyfill。
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    // process.env.BABEL_ENV 指定环境获取配置，该配置会与顶级配置合并。
    esm: {
      presets: [
        [
          '@babel/preset-env',
          //关闭模块转换；
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            // 使用ESM形式引入helper函数。
            useESModules: true,
            corejs: {
              version: 3,
              proposals: true,
            },
          },
        ],
      ],
    },
  },
};
