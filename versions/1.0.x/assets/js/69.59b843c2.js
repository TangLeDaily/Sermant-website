(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{516:function(a,t,s){"use strict";s.r(t);var n=s(26),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"插件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件配置"}},[a._v("#")]),a._v(" 插件配置")]),a._v(" "),t("p",[a._v("本文档主要介绍如何在插件中定义配置项，并在插件中使用该配置项，本文仅针对静态配置，如需使用动态配置项，可参考"),t("RouterLink",{attrs:{to:"/zh/document/developer-guide/dynamic-config-func.html"}},[a._v("动态配置")]),a._v("。")],1),a._v(" "),t("h2",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[a._v("#")]),a._v(" 功能介绍")]),a._v(" "),t("p",[a._v("插件配置可以让插件开发者通过配置文件来指定一些插件部署时可变的量，提高插件开发的灵活性，可在不同部署环境下对这些可变量配置不同的值来适配不同的环境。")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("注意")]),a._v("：\n如果在服务运行过程中修改配置文件，需要重启服务之后才能获取修改后的配置内容。")])]),a._v(" "),t("h2",{attrs:{id:"开发示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发示例"}},[a._v("#")]),a._v(" 开发示例")]),a._v(" "),t("p",[a._v("本开发示例基于"),t("RouterLink",{attrs:{to:"/zh/document/developer-guide/"}},[a._v("创建首个插件")]),a._v("文档中创建的工程。")],1),a._v(" "),t("p",[a._v("在"),t("code",[a._v("template\\config")]),a._v("目录下的"),t("code",[a._v("config.yaml")]),a._v("文件中添加以下内容：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable-dynamic-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 127.0.0.1\n")])])]),t("p",[a._v("在工程"),t("code",[a._v("template\\template-plugin")]),a._v("模块下定义一个插件配置类，其需要继承"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/plugin/config/PluginConfig.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("PluginConfig"),t("OutboundLink")],1),a._v("插件配置接口，并通过"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/config/common/ConfigTypeKey.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigTypeKey"),t("OutboundLink")],1),a._v("修饰类，指定该配置类可读取配置项的前缀，通过"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/config/common/ConfigFieldKey.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigFieldKey"),t("OutboundLink")],1),a._v("修饰类中的变量（如果不修饰，则读取名称和该变量名相同的配置项），指定该变量对应的配置项的名称。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigTypeKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"template.config"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TemplateConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PluginConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigFieldKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"enable-dynamic-config"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" enableDynamicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEnableDynamicConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" enableDynamicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setEnableDynamicConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" enableDynamicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("enableDynamicConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" enableDynamicConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getHost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setHost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("host "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在针对"),t("code",[a._v("main")]),a._v("方法的拦截器的"),t("code",[a._v("before")]),a._v("方法中通过"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/plugin/config/PluginConfigManager.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("com.huaweicloud.sermant.core.plugin.config.PluginConfigManager"),t("OutboundLink")],1),a._v("获取配置实例，并输出配置内容。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecuteContext")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("before")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecuteContext")]),a._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TemplateConfig")]),a._v(" templateConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PluginConfigManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPluginConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TemplateConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("templateConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEnableDynamicConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("templateConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getHost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Good morning!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("最后不要忘记添加插件配置的"),t("strong",[a._v("SPI")]),a._v("配置文件：")]),a._v(" "),t("ul",[t("li",[a._v("在工程"),t("code",[a._v("template\\template-plugin")]),a._v("模块下的"),t("code",[a._v("src\\main\\resources\\META-INF\\services")]),a._v("目录中添加"),t("code",[a._v("com.huaweicloud.sermant.core.plugin.config.PluginConfig")]),a._v("配置文件。")]),a._v(" "),t("li",[a._v("在"),t("code",[a._v("com.huaweicloud.sermant.core.plugin.config.PluginConfig")]),a._v("文件中键入"),t("code",[a._v("com.huaweicloud.sermant.template.TemplateConfig")]),a._v("。")])]),a._v(" "),t("p",[a._v("开发完成后，可参照创建首个插件时的打包构建流程，在工程根目录下执行 "),t("code",[a._v("mvn package")]),a._v("，执行完成后在根目录执行 "),t("code",[a._v("cd agent/")]),a._v("，并在其中携带Sermant运行测试应用，执行如下命令 "),t("code",[a._v("java -javaagent:sermant-agent.jar -jar Application.jar")]),a._v("。控制台输出如下所示：")]),a._v(" "),t("div",{staticClass:"language-log extra-class"},[t("pre",{pre:!0,attrs:{class:"language-log"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token level info keyword"}},[a._v("INFO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Loading core library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token level info keyword"}},[a._v("INFO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Building argument map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token level info keyword"}},[a._v("INFO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Loading sermant agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token level info keyword"}},[a._v("INFO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Load sermant done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token ip-address constant"}},[a._v("127.0.0.1")]),a._v("\nGood morning"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nGood afternoon"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nGood night"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),t("p",[a._v("可以看出我们在插件中，已经获取到我们在配置文件中的配置信息。")]),a._v(" "),t("h2",{attrs:{id:"api-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-配置"}},[a._v("#")]),a._v(" API&配置")]),a._v(" "),t("h3",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),t("h4",{attrs:{id:"获取配置实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取配置实例"}},[a._v("#")]),a._v(" 获取配置实例")]),a._v(" "),t("p",[a._v("获取配置实例，用于在插件使用过程中获取在"),t("em",[a._v("yaml")]),a._v("文件中配置的内容。配置实例会在框架进行初始化的时候创建，插件可直接获取使用。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ${plugin config class}为插件配置的Class")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PluginConfigManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPluginConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("plugin config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("插件配置现在支持的数据类型包括：")]),a._v(" "),t("ul",[t("li",[a._v("布尔、数值类的基础类型及包装类型")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable-dynamic-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("rate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.11")]),a._v("\n")])])]),t("ul",[t("li",[a._v("字符串类型")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 127.0.0.1\n")])])]),t("ul",[t("li",[a._v("枚举类型")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" UP\n")])])]),t("ul",[t("li",[a._v("复杂对象类型")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("teacher")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 王老师\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("48")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 小李\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n")])])]),t("ul",[t("li",[a._v("上述类型构成的数组")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("arrayValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" January\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" February\n")])])]),t("ul",[t("li",[a._v("前四种类型构成的"),t("em",[a._v("List")])])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("listValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" NewYork\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 127.0.0.1\n")])])]),t("ul",[t("li",[a._v("前四种类型构成的"),t("em",[a._v("Map")])])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mapValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 小李\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n")])])]),t("blockquote",[t("p",[t("strong",[a._v("注意")]),a._v("：")]),a._v(" "),t("ul",[t("li",[a._v("配置生效的优先级为：启动参数 > 环境变量 > 系统变量(-D参数) > "),t("em",[a._v("yaml")]),a._v("文件配置。")]),a._v(" "),t("li",[a._v("配置类的字段名一般为小驼峰命名，可用"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/config/common/ConfigFieldKey.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigFieldKey"),t("OutboundLink")],1),a._v("注解修饰为中划线风格定义别名。需注意：\n"),t("ul",[t("li",[a._v("添加注解后，在"),t("em",[a._v("yaml")]),a._v("中使用中划线或小驼峰皆可解析。")]),a._v(" "),t("li",[a._v("对于数组、List和Map中涉及的复杂对象，不支持"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/config/common/ConfigFieldKey.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("ConfigFieldKey"),t("OutboundLink")],1),a._v("修正属性名。")])])]),a._v(" "),t("li",[t("strong",[a._v("插件配置类")]),a._v("的字符串属性和复杂类型属性内部的字符串属性支持通过"),t("code",[a._v("${}")]),a._v("获取在启动参数、环境变量或者系统变量(-D参数)中设置的属性值。数组、List和Map中的字符串不支持通过"),t("code",[a._v("${}")]),a._v("获取属性值。")]),a._v(" "),t("li",[a._v("若插件配置类的属性未在"),t("em",[a._v("yaml")]),a._v("配置文件中定义，将按照配置生效的优先级来获取属性值。获取属性值时，需注意：\n"),t("ul",[t("li",[a._v("只支持基本数据类型、数组、map、list、set，不支持复杂对象。")]),a._v(" "),t("li",[a._v("数组、list、set需配置为"),t("code",[a._v("yaml")]),a._v("字符串格式，例如：LIST_NAME=[elem1,elem2]。")]),a._v(" "),t("li",[a._v("map需配置为"),t("code",[a._v("yaml")]),a._v("字符串格式，例如：MAP_NAME={key1: value1, key2: value2}。")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);