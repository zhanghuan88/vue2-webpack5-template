module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage', // 用到什么填充什么，按需
                corejs: 3 // 默认是2版本
            },
        ]
    ]
}
