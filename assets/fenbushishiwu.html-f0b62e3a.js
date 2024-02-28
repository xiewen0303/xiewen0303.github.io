const l=JSON.parse('{"key":"v-b459eaaa","path":"/blogs/seata/fenbushishiwu.html","title":"分布式事务","lang":"en-US","frontmatter":{"title":"分布式事务","date":"2022/12/15","tags":["分布式事务","seata"],"categories":["分布式事务","seata"]},"headers":[{"level":2,"title":"1.1.本地事务","slug":"_1-1-本地事务","link":"#_1-1-本地事务","children":[]},{"level":2,"title":"1.2.分布式事务","slug":"_1-2-分布式事务","link":"#_1-2-分布式事务","children":[]},{"level":2,"title":"1.3.演示分布式事务问题","slug":"_1-3-演示分布式事务问题","link":"#_1-3-演示分布式事务问题","children":[]},{"level":2,"title":"2.1.CAP定理","slug":"_2-1-cap定理","link":"#_2-1-cap定理","children":[{"level":3,"title":"2.1.1.一致性","slug":"_2-1-1-一致性","link":"#_2-1-1-一致性","children":[]},{"level":3,"title":"2.1.2.可用性","slug":"_2-1-2-可用性","link":"#_2-1-2-可用性","children":[]},{"level":3,"title":"2.1.3.分区容错","slug":"_2-1-3-分区容错","link":"#_2-1-3-分区容错","children":[]},{"level":3,"title":"2.1.4.矛盾","slug":"_2-1-4-矛盾","link":"#_2-1-4-矛盾","children":[]}]},{"level":2,"title":"2.2.BASE理论","slug":"_2-2-base理论","link":"#_2-2-base理论","children":[]},{"level":2,"title":"2.3.解决分布式事务的思路","slug":"_2-3-解决分布式事务的思路","link":"#_2-3-解决分布式事务的思路","children":[]},{"level":2,"title":"3.1.Seata的架构","slug":"_3-1-seata的架构","link":"#_3-1-seata的架构","children":[]},{"level":2,"title":"3.2.部署TC服务","slug":"_3-2-部署tc服务","link":"#_3-2-部署tc服务","children":[]},{"level":2,"title":"3.3.微服务集成Seata","slug":"_3-3-微服务集成seata","link":"#_3-3-微服务集成seata","children":[{"level":3,"title":"3.3.1.引入依赖","slug":"_3-3-1-引入依赖","link":"#_3-3-1-引入依赖","children":[]},{"level":3,"title":"3.3.2.配置TC地址","slug":"_3-3-2-配置tc地址","link":"#_3-3-2-配置tc地址","children":[]},{"level":3,"title":"3.3.3.其它服务","slug":"_3-3-3-其它服务","link":"#_3-3-3-其它服务","children":[]}]},{"level":2,"title":"4.1.XA模式","slug":"_4-1-xa模式","link":"#_4-1-xa模式","children":[{"level":3,"title":"4.1.1.两阶段提交","slug":"_4-1-1-两阶段提交","link":"#_4-1-1-两阶段提交","children":[]},{"level":3,"title":"4.1.2.Seata的XA模型","slug":"_4-1-2-seata的xa模型","link":"#_4-1-2-seata的xa模型","children":[]},{"level":3,"title":"4.1.3.优缺点","slug":"_4-1-3-优缺点","link":"#_4-1-3-优缺点","children":[]},{"level":3,"title":"4.1.4.实现XA模式","slug":"_4-1-4-实现xa模式","link":"#_4-1-4-实现xa模式","children":[]}]},{"level":2,"title":"4.2.AT模式","slug":"_4-2-at模式","link":"#_4-2-at模式","children":[{"level":3,"title":"4.2.1.Seata的AT模型","slug":"_4-2-1-seata的at模型","link":"#_4-2-1-seata的at模型","children":[]},{"level":3,"title":"4.2.2.流程梳理","slug":"_4-2-2-流程梳理","link":"#_4-2-2-流程梳理","children":[]},{"level":3,"title":"4.2.3.AT与XA的区别","slug":"_4-2-3-at与xa的区别","link":"#_4-2-3-at与xa的区别","children":[]},{"level":3,"title":"4.2.4.脏写问题","slug":"_4-2-4-脏写问题","link":"#_4-2-4-脏写问题","children":[]},{"level":3,"title":"4.2.5.优缺点","slug":"_4-2-5-优缺点","link":"#_4-2-5-优缺点","children":[]},{"level":3,"title":"4.2.6.实现AT模式","slug":"_4-2-6-实现at模式","link":"#_4-2-6-实现at模式","children":[]}]},{"level":2,"title":"4.3.TCC模式","slug":"_4-3-tcc模式","link":"#_4-3-tcc模式","children":[{"level":3,"title":"4.3.1.流程分析","slug":"_4-3-1-流程分析","link":"#_4-3-1-流程分析","children":[]},{"level":3,"title":"4.3.2.Seata的TCC模型","slug":"_4-3-2-seata的tcc模型","link":"#_4-3-2-seata的tcc模型","children":[]},{"level":3,"title":"4.3.3.优缺点","slug":"_4-3-3-优缺点","link":"#_4-3-3-优缺点","children":[]},{"level":3,"title":"4.3.4.事务悬挂和空回滚","slug":"_4-3-4-事务悬挂和空回滚","link":"#_4-3-4-事务悬挂和空回滚","children":[]},{"level":3,"title":"4.3.5.实现TCC模式","slug":"_4-3-5-实现tcc模式","link":"#_4-3-5-实现tcc模式","children":[]}]},{"level":2,"title":"4.4.SAGA模式","slug":"_4-4-saga模式","link":"#_4-4-saga模式","children":[{"level":3,"title":"4.4.1.原理","slug":"_4-4-1-原理","link":"#_4-4-1-原理","children":[]},{"level":3,"title":"4.4.2.优缺点","slug":"_4-4-2-优缺点","link":"#_4-4-2-优缺点","children":[]}]},{"level":2,"title":"4.5.四种模式对比","slug":"_4-5-四种模式对比","link":"#_4-5-四种模式对比","children":[]},{"level":2,"title":"5.1.高可用架构模型","slug":"_5-1-高可用架构模型","link":"#_5-1-高可用架构模型","children":[]},{"level":2,"title":"5.2.实现高可用","slug":"_5-2-实现高可用","link":"#_5-2-实现高可用","children":[]}],"git":{},"filePathRelative":"blogs/seata/分布式事务.md"}');export{l as data};