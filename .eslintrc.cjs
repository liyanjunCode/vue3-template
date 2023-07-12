module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'plugin:vue/vue3-essential'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // 'prettier/prettier': 'error',
        // 关闭文件名需驼峰两单词校验
        'vue/multi-word-component-names': 0,

        // 必须使用三等运算符
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // 可以使用const声明变量的情况下，必须使用const
        'prefer-const': 'error',

        // 强制开启使用字符串模板
        'prefer-template': 'error',

        // 模板字符串大括号内部前后不允许有空格
        'template-curly-spacing': ['error', 'never'],

        // 中括号形式的属性访问符两侧不得使用空格
        'computed-property-spacing': ['error', 'never'],

        // 数组的中括号前后禁止有空格
        'array-bracket-spacing': ['error', 'never'],

        // 对象内的值前面必须有空格
        'comma-spacing': ['error', { before: false, after: true }],

        // 括号内的参数不允许空格
        'space-in-parens': ['error'],

        // 大括号两侧必须有空格
        'object-curly-spacing': ['error', 'always'],

        // 无连接符的key不需要使用引号
        'quote-props': ['error', 'as-needed'],

        // key冒号后面必须有空格
        'key-spacing': ['error'],

        // 运算符两侧必须增加空格
        'space-infix-ops': ['error'],

        // 文件结尾必须有空行
        'eol-last': ['error', 'always'],

        // 关键字前后必须有空格
        'space-before-blocks': ['error', 'always'],

        // 关闭：禁止使用自闭和变迁
        'vue/html-self-closing': ['off'],

        // 每行最大属性的数量：3，超过后应换行
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 3
                },
                multiline: {
                    max: 3
                }
            }
        ],

        // 'no-unused-vars'

        // vue中html缩进
        'vue/html-indent': ['error', 4],

        // vue中js缩进
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ],

        // 关闭：组件属性使用连字符
        'vue/attribute-hyphenation': ['off'],

        // 关闭：标签内有内容，应另起一行
        'vue/singleline-html-element-content-newline': ['off'],
        'vue/multiline-html-element-content-newline': ['off'],

        // 绝对路径的import应放在头部
        'import/first': 'error',
        'import/imports-first': 'off',

        // import语句后应该有一个空行
        'import/newline-after-import': ['error', { count: 1 }],

        // 每行最大字符数150
        'max-len': [
            'error',
            {
                code: 150
            }
        ],

        // 禁止使用var
        'no-var': 'error',

        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // 统一使用单引号
        quotes: ['error', 'single'],

        // 禁止使用多余的空格
        'no-trailing-spaces': ['error', { ignoreComments: true }],

        // 使用new创造的对象必须赋值给一个变量
        'no-new': 0,

        // 允许windows开发环境
        'linebreak-style': [0, 'error', 'windows'],

        // 关闭：对函数入参赋值时报错
        'no-param-reassign': ['off'],

        // 关闭：函数一定要有返回值
        'consistent-return': ['off'],

        // TODO:尽在开发环境使用debugger
        // 'no-debugger': 'error',

        // 允许使用++运算符
        'no-plusplus': ['off'],

        // 函数只有一个参数时，参数名省略括号
        'arrow-parens': ['error', 'as-needed'],

        // 允许if中使用return后，else条件继续存在
        'no-else-return': ['off'],

        // 不适用分号
        semi: ['error', 'never'],

        // 分号可使用在每行的行首
        'semi-style': ['error', 'first'],

        // 禁止制表符
        'no-tabs': 0,

        // 禁止最后一行的逗号
        'comma-dangle': ['error', 'never'],

        // 对程序状态没有影响的未使用表达式进行报错
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true
            }
        ],

        // 函数名称或function关键字与开始参数之间需要有空格
        'space-before-function-paren': ['error', 'always'],

        // 禁止使用一个关键词声明变量，n个变量需要时用n个关键词声明
        'one-var': ['error', 'never'],

        // 在注释符后面要有空格
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['-', '+']
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ],

        // 允许使用带下划线的变量名
        'no-underscore-dangle': ['off'],

        // 允许使用console
        'no-console': ['off'],

        // 允许使用复杂的条件运算符
        'no-mixed-operators': ['off'],

        // 关闭全局require的报错
        'global-require': ['off'],

        // 允许使用未命名的函数
        'func-names': ['off'],

        // 允许在同一行使用链式调用
        'newline-per-chained-call': ['off'],
        indent: 'off'
    }
}
