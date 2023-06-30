(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{517:function(e,a,t){"use strict";t.r(a);var r=t(26),n=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sermant-框架常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant-框架常见问题"}},[e._v("#")]),e._v(" Sermant 框架常见问题")]),e._v(" "),a("p",[e._v("本文档主要说明在使用Sermant框架时遇到的常见问题。")]),e._v(" "),a("h2",{attrs:{id:"启动参数appname是什么参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动参数appname是什么参数"}},[e._v("#")]),e._v(" 启动参数appName是什么参数?")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("appName")]),e._v("表示宿主应用的名称，多个实例"),a("code",[e._v("appName")]),e._v("可以相同，"),a("code",[e._v("实例id")]),e._v("不同。")])]),e._v(" "),a("h2",{attrs:{id:"sermant提供哪些方面的服务治理插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant提供哪些方面的服务治理插件"}},[e._v("#")]),e._v(" Sermant提供哪些方面的服务治理插件?")]),e._v(" "),a("ul",[a("li",[e._v("Sermant有着很强的扩展性，除了框架本身提供的服务治理插件("),a("RouterLink",{attrs:{to:"/zh/document/plugin/flowcontrol.html"}},[e._v("限流降级功能介绍")]),e._v("，"),a("RouterLink",{attrs:{to:"/zh/document/plugin/service-registry.html"}},[e._v("服务注册功能介绍")]),e._v("等)之外， 开发者可以根据业务需求去开发插件包括(数据收集，链路等)。")],1)]),e._v(" "),a("h2",{attrs:{id:"如果想同时挂载多个sermant应该怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果想同时挂载多个sermant应该怎么做"}},[e._v("#")]),e._v(" 如果想同时挂载多个Sermant应该怎么做？")]),e._v(" "),a("ul",[a("li",[e._v("如果宿主应用需要挂载多个Sermant时请按照以下步骤处理其他的Sermant。")])]),e._v(" "),a("blockquote",[a("p",[e._v("注：除非必要，否则不建议挂载多个Sermant")])]),e._v(" "),a("h3",{attrs:{id:"步骤一-修改sermant-agentcore-core、sermant-agentcore-implement、sermant-agentcore-premain、sermant-common的pom-xml文件。在打包时使用shade插件进行类重定向。具体修改见下图-路径重定向后的前缀请根据您的项目进行指定-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-修改sermant-agentcore-core、sermant-agentcore-implement、sermant-agentcore-premain、sermant-common的pom-xml文件。在打包时使用shade插件进行类重定向。具体修改见下图-路径重定向后的前缀请根据您的项目进行指定-。"}},[e._v("#")]),e._v(" 步骤一：修改sermant-agentcore-core、sermant-agentcore-implement、sermant-agentcore-premain、sermant-common的pom.xml文件。在打包时使用Shade插件进行类重定向。具体修改见下图（路径重定向后的前缀请根据您的项目进行指定）。")]),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/package.png"}}),e._v(" "),a("h3",{attrs:{id:"步骤二-在sermant-agentcore-premain的pom-xml文件中修改agentpremain路径。-路径前缀请跟第一步保持一致-防止找不到agentpremain类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-在sermant-agentcore-premain的pom-xml文件中修改agentpremain路径。-路径前缀请跟第一步保持一致-防止找不到agentpremain类"}},[e._v("#")]),e._v(" 步骤二：在sermant-agentcore-premain的pom.xml文件中修改AgentPremain路径。（路径前缀请跟第一步保持一致，防止找不到AgentPremain类）")]),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/premain-classpath.png"}}),e._v(" "),a("h3",{attrs:{id:"步骤三-修改sermant获取日志logger实例的方法参数-防止不同sermant使用同一个logger实例。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-修改sermant获取日志logger实例的方法参数-防止不同sermant使用同一个logger实例。"}},[e._v("#")]),e._v(" 步骤三：修改Sermant获取日志Logger实例的方法参数，防止不同Sermant使用同一个Logger实例。")]),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/sermant-log.png"}}),e._v(" "),a("ul",[a("li",[e._v("按照以上步骤修改之后，多个Sermant启动将不会产生冲突。")])]),e._v(" "),a("blockquote",[a("p",[e._v("注："),a("br"),e._v("\n1、不要用-D参数去修改Sermant的配置信息，否则会同时修改所有Sermant。"),a("br"),e._v("\n2、使用动态配置时，保证不同Sermant的group信息不一致，或者使用不一样的配置中心。否则所有Sermant会公用同一个动态配置。"),a("br"),e._v("\n3、如果不同Sermant加载同样的插件时，请按照步骤一的方式将插件的类路径进行重定向，防止冲突。")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);