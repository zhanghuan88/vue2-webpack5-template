module.exports = {
  "env": {
    "browser": true,
    "es2022": true
  },
  "globals": {
    "process": true,
    "require": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    //两个空格缩进
    "indent": ["error", 2,{ "SwitchCase": 1 }],
    //强制数组元素间出现换行
    "array-element-newline": ["error", {"multiline": true}],
    //在数组开括号后和闭括号前强制换行
    "array-bracket-newline": 2,
    // 数组的 map、filter、sort 等方法，回调函数必须有返回值
    "array-callback-return": 2,
    // 禁止函数 if ... else if ... else 的复杂度超过 20
    "complexity": 2,
    // this 的别名规则，只允许 self 或 that
    "consistent-this": [
      2,
      "self",
      "that"
    ],
    // switch 语句必须包含 default
    "default-case": 2,
    // 必须使用 === 和 !== ，和 null 对比时除外
    "eqeqeq": [
      2,
      "always",
      {
        "null": "ignore"
      }
    ],
    // 禁止 alert，提醒开发者，上线时要去掉
    "no-alert": 2,
    // 禁止使用 console，提醒开发者，上线时要去掉
    "no-console": 1,
    // 禁止 debugger 语句，提醒开发者，上线时要去掉
    "no-debugger": 1,
    // 禁止对变量使用 delete 关键字，删除对象的属性不受限制
    "no-delete-var": 2,
    // 禁止使用 eval
    "no-eval": 2,

    // 禁止使用 var，必须用 let 或 const
    "no-var": 2,
    // 禁止注释中出现TODO 或FIXME，
    "no-warning-comments": 1,
    // 禁止直接对 NaN 进行判断，必须使用 isNaN
    "use-isnan": 2,
    // typeof 判断条件只能是 "undefined", "object", "boolean", "number", "string", "function" 或 "symbol"
    "valid-typeof": 2,
    // 代码风格
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-dangle": [2, "never"],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": [2, {
      "before": true,
      "after": true
    }],
    "linebreak-style": 0,
    "multiline-ternary": [2, "always-multiline"],
    "no-multiple-empty-lines": [2, {
      "max": 1
    }],
    "no-unneeded-ternary": [2, {
      "defaultAssignment": false
    }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": [2, "always"],
    "switch-colon-spacing": [2, {
      "after": true,
      "before": false
    }],
    // ES6
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    "vue/html-indent": [2, 2],
    "vue/max-attributes-per-line": 0,
    "vue/require-default-prop": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/attributes-order": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
    "vue/multi-word-component-names": 0,
    "vue/script-indent": [2, 2, {
      "switchCase": 1
    }]
  }
}
