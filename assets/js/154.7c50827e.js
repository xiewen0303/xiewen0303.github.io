(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1319:function(n,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"springboot炖cache-caffeine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot炖cache-caffeine"}},[n._v("#")]),n._v(" springboot炖cache-caffeine")]),n._v(" "),s("h3",{attrs:{id:"_1-先睹为快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-先睹为快"}},[n._v("#")]),n._v(" 1. 先睹为快")]),n._v(" "),s("h3",{attrs:{id:"_2-实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理"}},[n._v("#")]),n._v(" 2. 实现原理")]),n._v(" "),s("h4",{attrs:{id:"_2-1-新建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-新建项目"}},[n._v("#")]),n._v(" 2.1 新建项目")]),n._v(" "),s("h4",{attrs:{id:"_2-2-创建maven目录结构-以及pom-xml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-创建maven目录结构-以及pom-xml文件"}},[n._v("#")]),n._v(" 2.2 创建maven目录结构，以及pom.xml文件")]),n._v(" "),s("h4",{attrs:{id:"_2-3-pom-xml文件中加入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-pom-xml文件中加入依赖"}},[n._v("#")]),n._v(" 2.3 pom.xml文件中加入依赖")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>2.0.5.RELEASE</version>\n    <relativePath/>\n</parent>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("h4",{attrs:{id:"_2-4-pom-xml文件中加入springboot-starter依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-pom-xml文件中加入springboot-starter依赖"}},[n._v("#")]),n._v(" 2.4 pom.xml文件中加入springboot-starter依赖")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-cache</artifactId>\n    </dependency>\n\n    <dependency>\n        <groupId>com.github.ben-manes.caffeine</groupId>\n        <artifactId>caffeine</artifactId>\n        <version>2.6.0</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n    </dependency>\n</dependencies>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br")])]),s("h4",{attrs:{id:"_2-5-pom-xml文件中加入maven-springboot打包插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-pom-xml文件中加入maven-springboot打包插件"}},[n._v("#")]),n._v(" 2.5 pom.xml文件中加入maven-springboot打包插件")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("h4",{attrs:{id:"_2-6-开发启动类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-开发启动类"}},[n._v("#")]),n._v(" 2.6 开发启动类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cache.annotation.EnableCaching;\n\n@EnableCaching\n@SpringBootApplication\npublic class Application {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("h4",{attrs:{id:"_2-7-开发用户实体类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-开发用户实体类"}},[n._v("#")]),n._v(" 2.7 开发用户实体类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("import lombok.AllArgsConstructor;\nimport lombok.Data;\n\n@Data\n@AllArgsConstructor\npublic class User {\n\n    private Integer id;\n    private String uname;\n    private String pwd;\n    private Integer age;\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("h4",{attrs:{id:"_2-8-开发用户服务层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-开发用户服务层"}},[n._v("#")]),n._v(" 2.8 开发用户服务层")]),n._v(" "),s("p",[n._v("主要基于Spring缓存注解@Cacheable、@CacheEvict、@CachePut的方式使用")]),n._v(" "),s("p",[n._v("@Cacheable ：改注解修饰的方法，若不存在缓存，则执行方法并将结果写入缓存；若存在缓存，则不执行方法，直接返回缓存结果。\n@CachePut ：执行方法，更新缓存；该注解下的方法始终会被执行。\n@CacheEvict ：删除缓存\n@Caching 将多个缓存组合在一个方法上（该注解可以允许一个方法同时设置多个注解）\n@CacheConfig 在类级别设置一些缓存相关的共同配置（与其它缓存配合使用）")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('import com.oven.vo.User;\nimport org.springframework.cache.annotation.CacheEvict;\nimport org.springframework.cache.annotation.Cacheable;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class UserService {\n\n    @CacheEvict(value = "FIVE", key = "#id")\n    public void delete(Integer id) {\n        System.out.println("删除key为[" + id + "]的缓存");\n    }\n\n    @Cacheable(value = "FIVE", key = "#id", sync = true)\n    public User getById(Integer id) {\n        System.out.println("操作数据库，进行通过ID查询，ID: " + id);\n        return new User(id, "admin", "123", 18);\n    }\n\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br")])]),s("h4",{attrs:{id:"_2-9-开发用户控制层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-开发用户控制层"}},[n._v("#")]),n._v(" 2.9 开发用户控制层")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('import com.oven.service.UserService;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport javax.annotation.Resource;\n\n@RestController\npublic class UserController {\n\n    @Resource\n    private UserService userService;\n\n    @RequestMapping("/getById")\n    public Object getById(Integer id) {\n        return userService.getById(id);\n    }\n\n    @RequestMapping("/delete")\n    public Object delete(Integer id) {\n        userService.delete(id);\n        return "删除成功！";\n    }\n\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br")])]),s("h4",{attrs:{id:"_2-10-开发缓存枚举类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-开发缓存枚举类"}},[n._v("#")]),n._v(" 2.10 开发缓存枚举类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public enum CacheType {\n\n    TEN(10),\n\n    FIVE(5);\n\n    private final int expires;\n\n    CacheType(int expires) {\n        this.expires = expires;\n    }\n\n    public int getExpires() {\n        return expires;\n    }\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("h4",{attrs:{id:"_2-11-开发caffeine缓存配置类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-开发caffeine缓存配置类"}},[n._v("#")]),n._v(" 2.11 开发caffeine缓存配置类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("import com.github.benmanes.caffeine.cache.Caffeine;\nimport org.springframework.cache.CacheManager;\nimport org.springframework.cache.caffeine.CaffeineCache;\nimport org.springframework.cache.support.SimpleCacheManager;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.TimeUnit;\n\n@Configuration\npublic class CaffeineConfig {\n\n    @Bean\n    public CacheManager cacheManager() {\n        SimpleCacheManager cacheManager = new SimpleCacheManager();\n        List<CaffeineCache> caffeineCaches = new ArrayList<>();\n        for (CacheType cacheType : CacheType.values()) {\n            caffeineCaches.add(new CaffeineCache(cacheType.name(),\n                    Caffeine.newBuilder()\n                            .expireAfterWrite(cacheType.getExpires(), TimeUnit.SECONDS)\n                            .build()));\n        }\n        cacheManager.setCaches(caffeineCaches);\n        return cacheManager;\n    }\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br")])]),s("h4",{attrs:{id:"_2-12-编译打包运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-编译打包运行"}},[n._v("#")]),n._v(" 2.12 编译打包运行")]),n._v(" "),s("h3",{attrs:{id:"_3-应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-应用场景"}},[n._v("#")]),n._v(" 3. 应用场景")]),n._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),s("p",[n._v("https://blog.csdn.net/zhxdick/article/details/105733209")]),n._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/crazymakercircle/article/details/113751575",target:"_blank",rel:"noopener noreferrer"}},[n._v("(64条消息) Caffeine （史上最全）_40岁资深老架构师尼恩的博客-CSDN博客"),s("OutboundLink")],1)]),n._v(" "),s("p",[n._v("https://blog.csdn.net/CSDN_WYL2016/article/details/128258565")]),n._v(" "),s("p",[n._v("https://blog.csdn.net/Listening_Wind/article/details/110085228")]),n._v(" "),s("p",[n._v("多级缓存优化")]),n._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/liuzewei2015/article/details/99706438",target:"_blank",rel:"noopener noreferrer"}},[n._v("(64条消息) 项目理解（七）多级缓存优化性能_多级缓存事务性_lzw2019sun的博客-CSDN博客"),s("OutboundLink")],1)]),n._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/864d0bd80115",target:"_blank",rel:"noopener noreferrer"}},[n._v("数据量很大，分页查询很慢，怎么优化？ - 简书 (jianshu.com)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);