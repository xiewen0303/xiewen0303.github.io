(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1219:function(s,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1、查看可用的-redis-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看可用的-redis-版本"}},[s._v("#")]),s._v(" 1、查看可用的 Redis 版本")]),s._v(" "),a("ol",[a("li",[s._v("访问 Redis 镜像库地址： https://hub.docker.com/_/redis?tab=tags。可以通过 Sort by 查看其他版本的 Redis，默认是最新版本 "),a("strong",[s._v("redis:latest")]),s._v("。也可以在下拉列表中找到想要的版本。")]),s._v(" "),a("li",[s._v("使用用 "),a("strong",[s._v("docker search redis")]),s._v(" 命令来查看可用版本：")])]),s._v(" "),a("h3",{attrs:{id:"_2、取最新版的-redis-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、取最新版的-redis-镜像"}},[s._v("#")]),s._v(" 2、取最新版的 Redis 镜像")]),s._v(" "),a("p",[s._v("这里我们拉取官方的最新版本的镜像：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3、查看本地镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看本地镜像"}},[s._v("#")]),s._v(" 3、查看本地镜像")]),s._v(" "),a("p",[s._v("使用以下命令来查看是否已安装了 redis：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4、运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、运行容器"}},[s._v("#")]),s._v(" 4、运行容器")]),s._v(" "),a("p",[s._v("安装完成后，我们可以使用以下命令来运行 redis 容器：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" redis-test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--requirepass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redispwd"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("参数说明：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("-p 6379:6379")]),s._v("：映射容器服务的 6379 端口到宿主机的 6379 端口。外部可以直接通过宿主机ip:6379 访问到 Redis 的服务。")]),s._v(" "),a("li",[s._v("--requirepass：指定密码")])]),s._v(" "),a("h3",{attrs:{id:"_5、安装成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、安装成功"}},[s._v("#")]),s._v(" 5、安装成功")]),s._v(" "),a("p",[s._v("最后我们可以通过 "),a("strong",[s._v("docker ps")]),s._v(" 命令查看容器的运行信息：")]),s._v(" "),a("p",[s._v("接着我们通过 redis-cli 连接测试使用 redis 服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" redis-test /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);