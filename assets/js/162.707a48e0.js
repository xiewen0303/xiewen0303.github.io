(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1332:function(i,l,t){"use strict";t.r(l);var n=t(3),v=Object(n.a)({},(function(){var i=this,l=i._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("blockquote",[l("p",[i._v("ACID，是指在可靠数据库管理系统（DBMS）中，事务(transaction)所应该具有的四个特性：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）.这是可靠数据库所应具备的几个特性.所以ACID就是这四大特性的缩写。")])]),i._v(" "),l("ol",[l("li",[i._v("原子性（Atomicity）\n"),l("ul",[l("li",[i._v("原子性意味着数据库中的事务执行是作为原子。即不可再分，整个语句要么执行，要么不执行。\n在SQL SERVER中，每一个单独的语句都可以看作是默认包含在一个事务之中，每一个语句本身具有原子性，要么全部执行，这么全部不执行，不会有中间状态。")]),i._v(" "),l("li",[i._v("例如：银行转账功能，从A账户减去100，在B账户增加100，如果这两个语句不能保证原子性的话，比如从A账户减去100后，服务器断电，而在B账户中却没有增加100.虽然这种情况会让银行很开心，但作为开发人员的你可不希望这种结果.而默认事务中，即使出错了也不会整个事务进行回滚。而是失败的语句抛出异常，而正确的语句成功执行。这样会破坏原子性。所以SQL SERVER给予了一些选项来保证事务的原子性。")])])]),i._v(" "),l("li",[i._v("一致性(Consistency)\n"),l("ul",[l("li",[i._v("一致性即在事务开始之前和事务结束以后，数据库的完整性约束没有被破坏。")]),i._v(" "),l("li",[i._v("一致性体现在两个层面：")]),i._v(" "),l("li",[l("ol",[l("li",[i._v("数据库机制层面\n数据库层面的一致性是，在一个事务执行之前和之后，数据会符合你设置的约束（唯一约束，外键约束,Check约束等)和触发器设置.这一点是由SQL SERVER进行保证的。")])])]),i._v(" "),l("li",[l("ol",{attrs:{start:"2"}},[l("li",[i._v("业务层面\n对于业务层面来说,一致性是保持业务的一致性.这个业务一致性需要由开发人员进行保证.很多业务方面的一致性可以通过转移到数据库机制层面进行保证.比如，产品只有两个型号，则可以转移到使用CHECK约束使某一列必须只能存这两个型号。")])])])])]),i._v(" "),l("li",[i._v("隔离性（Isolation）\n"),l("ul",[l("li",[i._v("隔离性。事务的执行是互不干扰的，一个事务不可能看到其他事务运行时，中间某一时刻的数据。")]),i._v(" "),l("li",[i._v("在Windows中，如果多个进程对同一个文件进行修改是不允许的，Windows通过这种方式来保证不同进程的隔离性，而SQL Server中，通过SQL SERVER对数据库文件进行管理，从而可以让多个进程可以同时访问数据库:SQL Server利用加锁和阻塞来保证事务之间不同等级的隔离性。")]),i._v(" "),l("li",[i._v("一般情况下，完全的隔离性是不现实的，完全的隔离性要求数据库同一时间只执行一条事务，这样的性能可想而知.想要理解SQL Server中对于隔离性的保障，首先要了解事务之间是如何干扰的。")]),i._v(" "),l("li",[i._v("事务之间的互相影响的情况分为几种，分别为：脏读(Dirty Read)，不可重复读，幻读。")])])]),i._v(" "),l("li",[i._v("持久性（Durability)\n"),l("ul",[l("li",[i._v("持久性，意味着在事务完成以后，该事务所对数据库所作的更改便持久的保存在数据库之中，并不会被回滚。即使出现了任何事故比如断电等，事务一旦提交，则持久化保存在数据库中。")])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);