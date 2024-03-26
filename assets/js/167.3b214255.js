(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1335:function(t,e,l){"use strict";l.r(e);var a=l(3),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql慢查询优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql慢查询优化"}},[t._v("#")]),t._v(" MySQL慢查询优化")]),t._v(" "),e("h2",{attrs:{id:"explain-使用介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explain-使用介绍"}},[t._v("#")]),t._v(" explain 使用介绍")]),t._v(" "),e("p",[t._v("通过 explain，可以查看 sql 语句的执行情况（比如查询的表，使用的索引以及 mysql 在表中找到所需行的方式等） 用 explain 查询 mysql 查询计划的输出参数有:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("列名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("执行编号，标识 select 所属的行。如果在语句中没子查询或关联查询，只有唯一的 select，每行都将显示 1。否则，内层的 select 语句一般会顺序编号，对应于其在原始语句中的位置")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("select_type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示本行是简单或复杂 select。如果查询有任何复杂的子查询，则最外层标记为 PRIMARY（DERIVED、UNION、UNION RESUlT）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("table")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("访问引用哪个表（引用某个查询，如 “derived3”）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据访问 / 读取操作类型（ALL、index、range、ref、eq_ref、const/system、NULL）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("possible_keys")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("揭示哪一些索引可能有利于高效的查找")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示 mysql 决定采用哪个索引来优化查询")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("key_len")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示 mysql 在索引里使用的字节数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ref")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示了之前的表在 key 列记录的索引中查找值所用的列或常量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为了找到所需的行而需要读取的行数，估算值，不精确。通过把所有 rows 列值相乘，可粗略估算整个查询会检查的行数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Extra")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("额外信息，如 using index、filesort 等")])])])]),t._v(" "),e("p",[t._v("需要注意的是我们重点关注 type 即可！！！")]),t._v(" "),e("p",[t._v("type 显示的是访问类型，是较为重要的一个指标，结果值从好到坏依次是： system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL ，一般来说，得保证查询至少达到 range 级别，最好能达到 ref。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("All")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最坏的情况，全表扫描")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("和全表扫描一样。只是扫描表的时候按照索引次序进行而不是行。主要优点就是避免了排序，但是开销仍然非常大。如在 Extra 列看到 Using index，说明正在使用覆盖索引，只扫描索引的数据，它比按索引次序全表扫描的开销要小很多")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("range")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("范围扫描，一个有限制的索引扫描。key 列显示使用了哪个索引。当使用 =、 <>、>、>=、<、<=、IS NULL、<=>、BETWEEN 或者 IN 操作符，用常量比较关键字列时，可以使用 range")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ref")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("一种索引访问，它返回所有匹配某个单个值的行。此类索引访问只有当使用非唯一性索引或唯一性索引非唯一性前缀时才会发生。这个类型跟 eq_ref 不同的是，它用在关联操作只使用了索引的最左前缀，或者索引不是 UNIQUE 和 PRIMARY KEY。ref 可以用于使用 = 或 <=> 操作符的带索引的列。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eq_ref")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最多只返回一条符合条件的记录。使用唯一性索引或主键查找时会发生 （高效）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("const")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当确定最多只会有一行匹配的时候，MySQL 优化器会在查询前读取它而且只读取一次，因此非常快。当主键放入 where 子句时，mysql 把这个查询转为一个常量（高效）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("system")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("这是 const 连接类型的一种特例，表仅有一行满足条件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Null")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("意味说 mysql 能在优化阶段分解查询语句，在执行阶段甚至用不到访问表或索引（高效）")])])])]),t._v(" "),e("p",[t._v("参考")]),t._v(" "),e("p",[t._v("不会看 Explain执行计划，劝你简历别写熟悉 SQL优化：https://juejin.cn/post/6844904163969630221\nhttps://juejin.cn/post/7190595503640281145")])])}),[],!1,null,null,null);e.default=i.exports}}]);