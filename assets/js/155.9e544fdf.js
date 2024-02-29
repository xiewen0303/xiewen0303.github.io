(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1321:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mybatis-plus-使用-join-联表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-使用-join-联表查询"}},[s._v("#")]),s._v(" MyBatis-Plus 使用 Join 联表查询")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("众所周知，Mybatis Plus 封装的 mapper 不支持 join，如果需要支持就必须自己去实现。但是对于大部分的业务场景来说，都需要多表 join，要不然就没必要采用关系型数据库了。")]),s._v(" "),a("p",[s._v("那么有没有一种不通过硬 SQL 的形式，通过框架提供 join 能力呢？答案是，可以有，今天专门拉出来再说一下，确实能提高不少的开发效率！")]),s._v(" "),a("h3",{attrs:{id:"仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库地址"}},[s._v("#")]),s._v(" 仓库地址")]),s._v(" "),a("p",[s._v("https://gitee.com/best_handsome/mybatis-plus-join")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Maven")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.github.yulichang"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mybatis-plus-join-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.4.4"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Gradle")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("implementation 'com.github.yulichang:mybatis-plus-join-boot-starter:1.4.4'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("或者 clone 代码到本地执行 mvn install，再引入以上依赖。")]),s._v(" "),a("p",[s._v("注意：mybatis plus version >= 3.4.0。")]),s._v(" "),a("h3",{attrs:{id:"使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("ul",[a("li",[s._v("mapper继承MPJBaseMapper (必选)")]),s._v(" "),a("li",[s._v("service继承MPJBaseService (可选)")]),s._v(" "),a("li",[s._v("serviceImpl继承MPJBaseServiceImpl (可选)")])]),s._v(" "),a("h3",{attrs:{id:"sql准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql准备"}},[s._v("#")]),s._v(" SQL准备")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"核心类mpjlambdawrapper和mpjquerywrapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类mpjlambdawrapper和mpjquerywrapper"}},[s._v("#")]),s._v(" 核心类MPJLambdaWrapper和MPJQueryWrapper")]),s._v(" "),a("h4",{attrs:{id:"mpjlambdawrapper用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpjlambdawrapper用法"}},[s._v("#")]),s._v(" MPJLambdaWrapper用法")]),s._v(" "),a("p",[s._v("简单的三表查询")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserMapper")]),s._v(" userMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("testJoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//和Mybatis plus一致，MPJLambdaWrapper的泛型必须是主表的泛型，并且要用主表的Mapper来调用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MPJLambdaWrapper")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MPJLambdaWrapper")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查询user表全部字段")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查询user_address tel 字段")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectAs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUserAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//别名 t.address AS userAddress")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AreaDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProvince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AreaDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("leftJoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUserId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("leftJoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AreaDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AreaDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAreaId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("like")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddressDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//连表查询 返回自定义ResultType")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectJoinList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//分页查询 （需要启用 mybatis plus 分页插件）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" listPage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectJoinPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("对应sql")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  \n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" userAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("city \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" t \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" user_address t1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" area t2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("area_id \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ? \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" ? \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("说明:")]),s._v(" "),a("ul",[a("li",[s._v("UserDTO.class 查询结果返回类(resultType)")]),s._v(" "),a("li",[s._v("selectAll() 查询指定实体类的全部字段")]),s._v(" "),a("li",[s._v("select() 查询指定的字段,支持可变参数,同一个select只能查询相同表的字段")]),s._v(" "),a("li",[s._v("selectAs() 字段别名查询,用于数据库字段与业务实体类属性名不一致时使用")]),s._v(" "),a("li",[s._v("leftJoin() 参数说明；第一个参数: 参与连表的实体类class 第二个参数: 连表的ON字段,这个属性必须是第一个参数实体类的属性 第三个参数: 参与连表的ON的另一个实体类属性")]),s._v(" "),a("li",[s._v("默认主表别名是t,其他的表别名以先后调用的顺序使用t1,t2,t3....")]),s._v(" "),a("li",[s._v("条件查询,可以查询主表以及参与连接的所有表的字段,全部调用mp原生的方法,正常使用没有sql注入风险")])]),s._v(" "),a("p",[s._v("MPJLambdaWrapper 还有很多其他的功能")]),s._v(" "),a("ul",[a("li",[s._v("简单的SQL函数使用："),a("code",[s._v("https://gitee.com/best_handsome/mybatis-plus-join/wikis/selectFunc()?sort_id=4082479")])]),s._v(" "),a("li",[s._v("ON语句多条件支持："),a("code",[s._v("https://gitee.com/best_handsome/mybatis-plus-join/wikis/leftJoin?sort_id=3496671")])])]),s._v(" "),a("p",[s._v("等效于ResultMap")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<resultMap id="xxxxxxxx" type="com.github.yulichang.join.dto.UserDTO">\n    <result property="id" column="id"/>\n    <result property="name" column="name"/>\n    \x3c!--其他属性省略--\x3e\n    <collection property="addressList" javaType="java.util.List"\n                ofType="com.github.yulichang.join.entity.UserAddressDO">\n        <id property="id" column="mpj_id"/>\n        <result property="address" column="address"/>\n        <result property="userId" column="user_id"/>\n        \x3c!--其他属性省略--\x3e\n    </collection>\n</resultMap>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("MPJLambdaWrapper其他功能")]),s._v(" "),a("ul",[a("li",[s._v("一对一，一对多使用：https://ylctmh.com/pages/core/lambda/select/selectCollection.html")]),s._v(" "),a("li",[s._v("简单的SQL函数使用：https://ylctmh.com/pages/core/lambda/select/selectFunc.html")]),s._v(" "),a("li",[s._v("ON语句多条件支持：https://ylctmh.com/pages/core/lambda/join/leftJoin.html")])]),s._v(" "),a("h3",{attrs:{id:"string形式用法-mpjquerywrapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string形式用法-mpjquerywrapper"}},[s._v("#")]),s._v(" String形式用法（MPJQueryWrapper）")]),s._v(" "),a("h4",{attrs:{id:"简单的连表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的连表查询"}},[s._v("#")]),s._v(" 简单的连表查询")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('class test {\n    @Resource\n    private UserMapper userMapper;\n\n    void testJoin() {\n        MPJQueryWrapper wrapper = new MPJQueryWrapper<UserDO>()\n                .selectAll(UserDO.class)\n                .select("addr.tel", "addr.address", "a.province")\n                .leftJoin("user_address addr on t.id = addr.user_id")\n                .rightJoin("area a on addr.area_id = a.id")\n                .like("addr.tel", "1")\n                .le("a.province", "1");\n\n        //列表查询\n        List<UserDTO> list = userMapper.selectJoinList(UserDTO.class, wrapper);\n\n        //分页查询 （需要启用 mybatis plus 分页插件）\n        Page<UserDTO> listPage = userMapper.selectJoinPage(new Page<>(1, 10), UserDTO.class, wrapper);\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("对应sql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT \n    t.id,\n    t.name,\n    t.sex,\n    t.head_img,\n    addr.tel,\n    addr.address,\n    a.province\nFROM \n    user t\n    LEFT JOIN user_address addr on t.id = addr.user_id\n    RIGHT JOIN area a on addr.area_id = a.id\nWHERE (\n    addr.tel LIKE ?\n    AND a.province <= ?)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("说明:")]),s._v(" "),a("ul",[a("li",[s._v("UserDTO.class 查询结果类(resultType)")]),s._v(" "),a("li",[s._v('selectAll(UserDO.class) 查询主表全部字段(主表实体类)默认主表别名 "t"')]),s._v(" "),a("li",[s._v("select() mp的select策略是覆盖,以最后一次为准,这里的策略是追加,可以一直select 主表字段可以用lambda,会自动添加表别名,主表别名默认是 t ,非主表字段必须带别名查询")]),s._v(" "),a("li",[s._v("leftJoin() rightJoin() innerJoin() 传sql片段 格式 (表 + 别名 + 关联条件)")]),s._v(" "),a("li",[s._v("条件查询,可以查询主表以及参与连接的所有表的字段,全部调用mp原生的方法,正常使用没有sql注入风险")])]),s._v(" "),a("h4",{attrs:{id:"还可以这么操作-但不建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#还可以这么操作-但不建议"}},[s._v("#")]),s._v(" 还可以这么操作,但不建议")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('class test {\n    @Resource\n    private UserMapper userMapper;\n\n    void testJoin() {\n        List<UserDTO> list = userMapper.selectJoinList(UserDTO.class,\n                new MPJQueryWrapper<UserDO>()\n                        .selectAll(UserDO.class)\n                        .select("addr.tel", "addr.address")\n                        //行列转换\n                        .select("CASE t.sex WHEN \'男\' THEN \'1\' ELSE \'0\' END AS sex")\n                        //求和函数\n                        .select("sum(a.province) AS province")\n                        //自定义数据集\n                        .leftJoin("(select * from user_address) addr on t.id = addr.user_id")\n                        .rightJoin("area a on addr.area_id = a.id")\n                        .like("addr.tel", "1")\n                        .le("a.province", "1")\n                        .orderByDesc("addr.id"));\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("对应sql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT \n    t.id,\n    t.name,\n    t.sex,\n    t.head_img,\n    addr.tel,\n    addr.address,\n    CASE t.sex WHEN '男' THEN '1' ELSE '0' END AS sex,\n    sum(a.province) AS province\nFROM \n    user t\n    LEFT JOIN (select * from user_address) addr on t.id = addr.user_id\n    RIGHT JOIN area a on addr.area_id = a.id\nWHERE (\n    addr.tel LIKE ?\n    AND a.province <= ?)\nORDER BY\n    addr.id DESC\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("这样，我们就能和使用 Mybatis Plus 一样进行表关联操作了！")]),s._v(" "),a("blockquote",[a("p",[s._v("获取本文代码可访问")]),s._v(" "),a("p",[s._v("https://github.com/Daneliya/springboot_chowder/tree/main/springboot_mybatis_plus_join")])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[s._v("[1]. 公众号-Java基基-MyBatis-Plus 还手写 Join 联表查询？一个依赖轻松搞定，真香！")])])}),[],!1,null,null,null);a.default=e.exports}}]);