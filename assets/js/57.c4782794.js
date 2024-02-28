(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1256:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[a._v("#")]),a._v(" 基本介绍")]),a._v(" "),s("ul",[s("li",[a._v("什么是链路追踪")])]),a._v(" "),s("p",[a._v("随着微服务分布式系统变得日趋复杂，越来越多的组件开始走向分布式化，如分布式服务、分布式数据库、分布式缓存等，使得后台服务构成了一种复杂的分布式网络。在服务能力提升的同时，复杂的网络结构也使问题定位更加困难。在一个请求在经过诸多服务过程中，出现了某一个调用失败的情况，查询具体的异常由哪一个服务引起的就变得十分抓狂，问题定位和处理效率是也会非常低。")]),a._v(" "),s("p",[a._v("分布式链路追踪就是将一次分布式请求还原成调用链路，将一次分布式请求的调用情况集中展示，比如各个服务节点上的耗时、请求具体到达哪台机器上、每个服务节点的请求状态等等。")]),a._v(" "),s("ul",[s("li",[a._v("为什么要使用链路追踪")])]),a._v(" "),s("p",[a._v("链路追踪为分布式应用的开发者提供了完整的调用链路还原、调用请求量统计、链路拓扑、应用依赖分析等工具，可以帮助开发者快速分析和诊断分布式应用架构下的性能瓶颈，提高微服务时代下的开发诊断效率。")]),a._v(" "),s("ul",[s("li",[a._v("skywalking 链路追踪")])]),a._v(" "),s("p",[s("code",[a._v("SkyWalking")]),a._v("是一个可观测性分析平台（Observability Analysis Platform 简称OAP）和应用性能管理系统（Application Performance Management 简称 APM）。")]),a._v(" "),s("p",[a._v("提供分布式链路追踪，服务网格（Service Mesh）遥测分析，度量（Metric）聚合和可视化一体化解决方案。")]),a._v(" "),s("p",[a._v("SkyWalking 特点")]),a._v(" "),s("ul",[s("li",[a._v("多语言自动探针，java，.Net Code ,Node.Js")]),a._v(" "),s("li",[a._v("多监控手段，语言探针和Service Mesh")]),a._v(" "),s("li",[a._v("轻量高效，不需要额外搭建大数据平台")]),a._v(" "),s("li",[a._v("模块化架构，UI ，存储《集群管理多种机制可选")]),a._v(" "),s("li",[a._v("支持警告")]),a._v(" "),s("li",[a._v("优秀的可视化效果。")])]),a._v(" "),s("p",[a._v("下面是"),s("code",[a._v("SkyWalking")]),a._v("的架构图：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(988),alt:"skywalking"}})]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("下载地址：https://archive.apache.org/dist/skywalking/ or http://skywalking.apache.org/downloads")]),a._v(" "),s("h3",{attrs:{id:"windows平台安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows平台安装"}},[a._v("#")]),a._v(" Windows平台安装")]),a._v(" "),s("p",[a._v("可以从下载地址下载"),s("code",[a._v("apache-skywalking-apm-$version.tar.gz")]),a._v("包。")]),a._v(" "),s("p",[a._v("Windows下载解压后（.tar.gz），直接点击"),s("code",[a._v("bin/startup.bat")]),a._v("就可以了，这个时候实际上是启动了两个项目，一个收集器，一个web页面。")]),a._v(" "),s("h3",{attrs:{id:"linux平台安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux平台安装"}},[a._v("#")]),a._v(" Linux平台安装")]),a._v(" "),s("p",[a._v("下载")]),a._v(" "),s("p",[a._v("如果数据是存储在elasticsearch，需要下载对应的版本，否则启动报错")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://archive.apache.org/dist/skywalking/8.7.0/apache-skywalking-apm-es7-8.7.0.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" apache-skywalking-apm-es7-8.7.0.tar.gz\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("修改配置")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" apache-skywalking-apm-bin-es7/config\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" application.yml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("修改存储类型")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("SW_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("elasticsearch7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("修改elasticsearch配置")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("elasticsearch7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("clusterNodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("SW_STORAGE_ES_CLUSTER_NODES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#es7机器地址")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#略，其他配置不用动")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("SW_ES_USER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"es账号"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果es开启认证，需要填账号密码，否则不动即可")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("SW_ES_PASSWORD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"es密码"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果es开启认证，需要填账号密码，否则不动不动即可")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("code",[a._v("skywalking")]),a._v("提供了一个可视化的监控平台，安装好之后，在浏览器中输入("),s("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8080 (opens new window)"),s("OutboundLink")],1),a._v(")就可以访问了。")]),a._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("p",[a._v("复制安装包目录中的agent到java程序所在的机器上，启动脚本增加如下配置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-javaagent:本地目录别配错了/skywalking-agent.jar -Dskywalking.agent.service_name=服务名 -Dskywalking.collector.backend_service=上边安装的服务器ip:11800 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("例如")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -javaagent:/data/apache-skywalking-apm-bin-es7/agent/skywalking-agent.jar -Dskywalking.agent.namespace=dev -Dskywalking.agent.service_name=service-gateway -Dskywalking.collector.backend_service=127.0.0.1:11800 -Dspring.profiles.active=dev -jar /demo.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("参考资料：")]),a._v(" "),s("p",[a._v("[1]. https://blog.csdn.net/chengqwertyuiop/article/details/125065633")]),a._v(" "),s("p",[a._v("[2]. http://doc.ruoyi.vip/ruoyi-cloud/cloud/skywalking.html")])])}),[],!1,null,null,null);s.default=n.exports},988:function(a,s,t){a.exports=t.p+"assets/img/cf05a5a5_1151004.1a119475.png"}}]);