(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1195:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"oom分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oom分类"}},[t._v("#")]),t._v(" OOM分类")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("java.lang.OutOfMemoryError: Java heap space")]),t._v(" "),a("p",[t._v("Java 堆溢出原因： 无法在 Java 堆中分配对象 应用程序保存了无法被GC回收的对象。 应用程序过度使用 finalizer。")])]),t._v(" "),a("li",[a("p",[t._v("java.lang.OutOfMemoryError: unable to create new native thread")]),t._v(" "),a("p",[t._v("排查代码，确定是否显示使用死循环创建线程，或者隐式调用第三方接口创建线程")])]),t._v(" "),a("li",[a("p",[t._v("java.lang.OutOfMemoryError: Metaspace")]),t._v(" "),a("p",[t._v("方法区溢出：检查JVM元空间设置参数是否过小，检查对应代码,是否使用CGLib生成了大量的代理类")])]),t._v(" "),a("li",[a("p",[t._v("java.lang.OutOfMemoryError: Direct buffer memory")]),t._v(" "),a("p",[t._v("本机直接内存溢出：检查JVM参数-Xmx，-XX:MaxDirectMemorySize 是否合理。")])]),t._v(" "),a("li",[a("p",[t._v("java.lang.OutOfMemoryError: GC overhead limit exceeded")]),t._v(" "),a("p",[t._v("Sun 官方对此的定义：超过98%的时间用来做GC并且回收了不到2%的堆内存时会抛出此异常。")]),t._v(" "),a("p",[t._v("一般都是堆太小导致的：检查JVM参数-Xmx -Xms是否合理 dump内存，检查是否存在内存泄露，如果没有，加大内存。")])])]),t._v(" "),a("h2",{attrs:{id:"cpu过高排查流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu过高排查流程"}},[t._v("#")]),t._v(" CPU过高排查流程")]),t._v(" "),a("ol",[a("li",[t._v("利用 top 命令可以查出占用 CPU 最高的进程pid，如果pid为 9876")]),t._v(" "),a("li",[t._v("然后查看该进程下占用最高的线程id【top -Hp 9876】")]),t._v(" "),a("li",[t._v("假设占用率最高的线程 ID 为6900，将其转换为 16 进制形式（因为 java native 线程以 16 进制形式输出）【printf '%x\\n' 6900】")]),t._v(" "),a("li",[t._v("利用jstack打印出 java 线程调用栈信息 【jstack 9876 | grep '0x1af4' -A 50 --color】，这样就可以更好的定位问题")])]),t._v(" "),a("h2",{attrs:{id:"内存占用过高排查流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存占用过高排查流程"}},[t._v("#")]),t._v(" 内存占用过高排查流程")]),t._v(" "),a("ol",[a("li",[t._v("查找进程id：【top -d 2 -c】")]),t._v(" "),a("li",[t._v("查看 JVM 堆内存分配情况：jmap -head pid")]),t._v(" "),a("li",[t._v("查看占用内存比较多的对象：jamp -histo pid | head -n 100")]),t._v(" "),a("li",[t._v("查看占用内存比较多的存活对象：jmap -histo:live pid | head -n 100")])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("下面是对常见的 "),a("code",[t._v("java.lang.OutOfMemoryError: Java heap space")]),t._v(" 排查：")]),t._v(" "),a("h3",{attrs:{id:"使用-ps-命令查看进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ps-命令查看进程"}},[t._v("#")]),t._v(" 使用 ps 命令查看进程")]),t._v(" "),a("p",[t._v("ps -aux|grep java命令查看一下你的java进程，就可以找到你的java进程的进程id。")]),t._v(" "),a("h3",{attrs:{id:"使用-top-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-top-命令"}},[t._v("#")]),t._v(" 使用 top 命令")]),t._v(" "),a("p",[t._v("top命令显示的结果列表中，会看到%MEM这一列，这里可以看到你的进程可能对内存的使用率特别高。以查看正在运行的进程和系统负载信息，包括cpu负载、内存使用、各个进程所占系统资源等。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(504),alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"使用-jmap-命令查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jmap-命令查看"}},[t._v("#")]),t._v(" 使用 jmap 命令查看")]),t._v(" "),a("ul",[a("li",[t._v("./jmap -heap PID 打印堆总结")]),t._v(" "),a("li",[t._v("./jmap -dump:file=/data/logs/jmap/auto.dump PID，dump内存分析日志")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@test bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./jmap -dump:file=/data/logs/jmap/auto.dump 13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(": Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" socket file: target process not responding or HotSpot VM not loaded\nThe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" option can be used when the target process is not responding\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@test bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./jmap -F -dump:file=/data/logs/jmap/auto.dump 13")]),t._v("\nAttaching to process ID "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(", please wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nError attaching to process: sun.jvm.hotspot.debugger.DebuggerException: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nsun.jvm.hotspot.debugger.DebuggerException: sun.jvm.hotspot.debugger.DebuggerException: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LinuxDebuggerLocalWorkerThread")]),t._v(".execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:163"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:278"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.attachDebugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:671"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.setupDebuggerLinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:611"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.setupDebugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:337"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:304"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:140"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.Tool.start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tool.java:185"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.Tool.execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tool.java:118"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.HeapDumper.main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HeapDumper.java:83"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.NativeMethodAccessorImpl.invoke0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Native Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.NativeMethodAccessorImpl.invoke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NativeMethodAccessorImpl.java:62"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.DelegatingMethodAccessorImpl.invoke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DelegatingMethodAccessorImpl.java:43"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at java.lang.reflect.Method.invoke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Method.java:498"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.tools.jmap.JMap.runTool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JMap.java:201"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.tools.jmap.JMap.main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JMap.java:130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCaused by: sun.jvm.hotspot.debugger.DebuggerException: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.attach0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Native Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.access"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:62"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1AttachTask")]),t._v(".doit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:269"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LinuxDebuggerLocalWorkerThread")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("p",[t._v("参考")]),t._v(" "),a("p",[t._v("常见OOM异常分析：https://blog.csdn.net/u012260238/article/details/110308147")]),t._v(" "),a("p",[t._v("Java性能分析神器-JProfiler详解：https://blog.csdn.net/u013613428/article/details/53926825")]),t._v(" "),a("p",[t._v("如果在线上遇到了OOM，该如何解决？https://blog.csdn.net/Park33/article/details/126379445")]),t._v(" "),a("p",[t._v("内存溢出的原因及解决方式：https://blog.51cto.com/u_16213603/7622457")]),t._v(" "),a("p",[t._v("Java多线程异常及解决方案，如何合理控制线程数：https://refblogs.com/article/577")])])}),[],!1,null,null,null);a.default=e.exports},504:function(t,a,s){t.exports=s.p+"assets/img/785859-20200313211136187-1482421735.0acc42d5.png"}}]);