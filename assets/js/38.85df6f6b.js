(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1148:function(e,t,a){e.exports=a.p+"assets/img/image-20240225235820334.f9420e9d.png"},1149:function(e,t,a){e.exports=a.p+"assets/img/image-20240225235908325.52aed093.png"},1150:function(e,t,a){e.exports=a.p+"assets/img/image-20240226000018181.2413e7ff.png"},1151:function(e,t,a){e.exports=a.p+"assets/img/image-20240226000055749.897298a0.png"},1291:function(e,t,a){"use strict";a.r(t);var r=a(3),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"模型路径互通配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型路径互通配置"}},[e._v("#")]),e._v(" 模型路径互通配置")]),e._v(" "),t("p",[e._v("在启动ComfyUI前，如果你有存储于Automatic1111 WebUI项目中的模型文件，则无需额外搬运至ComfyUI的文件夹内，只需通过如下步骤简单配置即可实现模型文件的“互通”：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("拷贝WebUI根目录的路径（即包含webui_user.bat文件的路径）：")]),e._v(" "),t("p",[t("img",{attrs:{src:a(1148),alt:"image-20240225235820334"}})])]),e._v(" "),t("li",[t("p",[e._v("用记事本打开ComfyUI根目录下的extra_model_path.yaml.example文件，将路径粘贴至如下位置：")]),e._v(" "),t("p",[t("img",{attrs:{src:a(1149),alt:"image-20240225235908325"}})]),e._v(" "),t("p",[t("img",{attrs:{src:a(1150),alt:"image-20240226000018181"}})]),e._v(" "),t("p",[t("img",{attrs:{src:a(1151),alt:"image-20240226000055749"}})])]),e._v(" "),t("li",[t("p",[e._v("保存文件，并将文件重命名，去除.example的后缀，使文件名变为如下图所示：")])]),e._v(" "),t("li",[t("p",[e._v("正常启动ComfyUI。")])])]),e._v(" "),t("h2",{attrs:{id:"提高生成速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提高生成速度"}},[e._v("#")]),e._v(" 提高生成速度")]),e._v(" "),t("p",[e._v("Make sure you use the regular loaders/Load Checkpoint node to load checkpoints. It will auto pick the right settings depending on your GPU.")]),e._v(" "),t("p",[e._v("请确保使用常规加载程序/加载检查点节点来加载检查点。它会根据您的 GPU 自动选择正确的设置。")]),e._v(" "),t("p",[e._v("You can set this command line setting to disable the upcasting to fp32 in some cross attention operations which will increase your speed. Note that this will very likely give you black images on SD2.x models. If you use xformers or pytorch attention this option does not do anything.")]),e._v(" "),t("p",[e._v("您可以设置此命令行设置，以在某些交叉注意力操作中禁用向上转换到 fp32，这将提高您的速度。请注意，这很可能会在 SD2.x 型号上为您提供黑色图像。如果使用 xformers 或 pytorch attention，则此选项不会执行任何操作。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--dont-upcast-attention\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"显示高质量的预览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示高质量的预览"}},[e._v("#")]),e._v(" 显示高质量的预览")]),e._v(" "),t("p",[e._v("Use to enable previews."),t("code",[e._v("--preview-method auto")])]),e._v(" "),t("p",[e._v("用于启用预览。"),t("code",[e._v("--preview-method auto")])]),e._v(" "),t("p",[e._v("The default installation includes a fast latent preview method that's low-resolution. To enable higher-quality previews with "),t("a",{attrs:{href:"https://github.com/madebyollin/taesd",target:"_blank",rel:"noopener noreferrer"}},[e._v("TAESD"),t("OutboundLink")],1),e._v(", download the "),t("a",{attrs:{href:"https://github.com/madebyollin/taesd/raw/main/taesd_decoder.pth",target:"_blank",rel:"noopener noreferrer"}},[e._v("taesd_decoder.pth"),t("OutboundLink")],1),e._v(" (for SD1.x and SD2.x) and "),t("a",{attrs:{href:"https://github.com/madebyollin/taesd/raw/main/taesdxl_decoder.pth",target:"_blank",rel:"noopener noreferrer"}},[e._v("taesdxl_decoder.pth"),t("OutboundLink")],1),e._v(" (for SDXL) models and place them in the "),t("code",[e._v("models/vae_approx")]),e._v(" folder. Once they're installed, restart ComfyUI to enable high-quality previews.")]),e._v(" "),t("p",[e._v("默认安装包括低分辨率的快速潜伏预览方法。要使用 "),t("a",{attrs:{href:"https://github.com/madebyollin/taesd",target:"_blank",rel:"noopener noreferrer"}},[e._v("TAESD"),t("OutboundLink")],1),e._v(" 启用更高质量的预览，请下载 taesd_decoder.pth（适用于 SD1.x 和 SD2.x）和 "),t("a",{attrs:{href:"https://github.com/madebyollin/taesd/raw/main/taesd_decoder.pth",target:"_blank",rel:"noopener noreferrer"}},[e._v("taesdxl_decoder.pth"),t("OutboundLink")],1),e._v("（适用于 SDXL）模型，并将其放在文件夹中。安装完成后，重新启动 ComfyUI 以启用高质量的预览。"),t("code",[e._v("models/vae_approx")])]),e._v(" "),t("h2",{attrs:{id:"整合包下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整合包下载"}},[e._v("#")]),e._v(" 整合包下载")]),e._v(" "),t("h3",{attrs:{id:"铁锅炖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#铁锅炖"}},[e._v("#")]),e._v(" 铁锅炖")]),e._v(" "),t("p",[e._v("由@"),t("a",{attrs:{href:"https://space.bilibili.com/35723238",target:"_blank",rel:"noopener noreferrer"}},[e._v("只剩一瓶辣椒酱"),t("OutboundLink")],1),e._v(" 老师制作的 ComfyUI"),t("strong",[e._v("铁锅炖启动器及整合包")])]),e._v(" "),t("p",[e._v("视频地址："),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1mz4y1K7Jw/",target:"_blank",rel:"noopener noreferrer"}},[e._v("国内首个COMFYUI启动器铁锅炖来辣！支持COMFYUI更新/配置/一键优化/中英切换等"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("启动器手册：https://shimo.im/docs/B1AwdxZewWhjwe3m")]),e._v(" "),t("p",[e._v("无限圣杯手册(含满血整合包)：https://shimo.im/docs/Ee32m0w80rfLp4A2")]),e._v(" "),t("p",[e._v("AIGODLIKE社区(支持COMFYUI图像解析)：https://www.aigodlike.com")])])}),[],!1,null,null,null);t.default=o.exports}}]);