(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{491:function(t,e,a){"use strict";a.r(e);var n=a(26),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"service-visibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-visibility"}},[t._v("#")]),t._v(" Service visibility")]),t._v(" "),e("p",[t._v("This article describes how to use "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-visibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Visibility Plugin"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"terminology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Term")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Contract information")]),t._v(" "),e("td",[t._v("External interface information provided by the service, including the class of the interface, request path, method name, parameter list, and return type")])]),t._v(" "),e("tr",[e("td",[t._v("Blood relationship information")]),t._v(" "),e("td",[t._v("Call relationship information between services, including IP and port information of service providers and service consumers")])])])]),t._v(" "),e("h2",{attrs:{id:"function-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-introduction"}},[t._v("#")]),t._v(" Function introduction")]),t._v(" "),e("p",[t._v("The service visibility plug-in can collect the contract information and blood relationship of Spring Cloud and Dubbo applications. Without modifying the code, you can view the interface information provided by all services and the call relationship information between services through backend.")]),t._v(" "),e("p",[t._v("This plug-in completes the collection of interface information of service registration and provider information during service subscription based on the service registration, service subscription and other functions of Spring Cloud and Dubbo applications, so as to facilitate the unified management of users.")]),t._v(" "),e("h2",{attrs:{id:"parameter-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[t._v("#")]),t._v(" Parameter configuration")]),t._v(" "),e("h3",{attrs:{id:"sermant-agent-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent-configuration"}},[t._v("#")]),t._v(" Sermant-agent configuration")]),t._v(" "),e("p",[t._v("The service visibility plug-in needs to configure ("),e("code",[t._v("agent.service.visibility.enable=true")]),t._v("), configure the service metadata ("),e("code",[t._v("service.meta.*")]),t._v(") in the Sermant-agent. For details, refer to the "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#sermant-agent-parameter-configuration"}},[t._v("Sermant-agent User Manual")])],1),t._v(" "),e("ul",[e("li",[t._v("agent.service.visibility.enable: Choose the enable status for visibility service.")]),t._v(" "),e("li",[t._v("service.meta.*: Service metadata information. For example: group name, version number, region, etc. The service visibility plug-in collects metadata information for page display.")])]),t._v(" "),e("h3",{attrs:{id:"plug-in-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-configuration"}},[t._v("#")]),t._v(" Plug-in configuration")]),t._v(" "),e("p",[t._v("The service visibility plug-in needs to enable the collection switch. The configuration file of the plug-in can be found in the "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/service-visibility/config/config.yaml")]),t._v(". The configuration is as follows:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visibility.config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startFlag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Service visibility collection switch. Control whether to collect and report indicators. If it is true, the plug-in will report data collection. If it is false, the plug-in will not report data collection.")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Parameter key")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default value")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("visibility.config.startFlag")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Service visibility collection switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),e("h2",{attrs:{id:"supported-versions-and-restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-restrictions"}},[t._v("#")]),t._v(" Supported versions and restrictions")]),t._v(" "),e("p",[t._v("Framework support:")]),t._v(" "),e("ul",[e("li",[t._v("SpringBoot 1.5.10. Release and above")]),t._v(" "),e("li",[t._v("Dubbo 2.6.x-2.7.x")])]),t._v(" "),e("h2",{attrs:{id:"operation-and-result-verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-verification"}},[t._v("#")]),t._v(" Operation and result verification")]),t._v(" "),e("p",[t._v("The following will demonstrate how to use the service visibility plug-in.")]),t._v(" "),e("h3",{attrs:{id:"preparations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[t._v("#")]),t._v(" Preparations")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v("/compile Sermant package")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-integration-tests/dubbo-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" dubbo-test source code")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" zookeeper and start the application")])]),t._v(" "),e("h3",{attrs:{id:"step-1-modify-the-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-modify-the-configuration"}},[t._v("#")]),t._v(" Step 1: Modify the configuration")]),t._v(" "),e("ul",[e("li",[t._v("Modify the Sermant-agent configuration")])]),t._v(" "),e("p",[t._v("Find the configuration file in the "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/config/config.properties")]),t._v(". The modified configuration items are as follows:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.visibility.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true # Enable status for visibility service.")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Modify service visibility plug-in configuration")])]),t._v(" "),e("p",[t._v("Find the configuration file of the plugin in the "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/service-visibility/config/config. yaml")]),t._v(". The modified configuration items are as follows:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visibility.config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startFlag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Service visibility collection switch. If it is true, data collection and reporting will be performed.")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-2-compile-and-package-the-dubbo-test-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-compile-and-package-the-dubbo-test-application"}},[t._v("#")]),t._v(" Step 2: compile and package the dubbo-test application")]),t._v(" "),e("p",[t._v("Execute the following command to package the subprojects dubbo-2-6-integration-consumer and dubbo-2-6-integration-provider in the dubbo-test project:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mvn clean package\n")])])]),e("p",[t._v("You can get the dubbo-integration-consumer.jar package in the "),e("code",[t._v("target")]),t._v(" folder in the dubbo-2-6-integration-consumer project and the dubbo-integration-provider.jar package in the dubbo-2-6-integration-provider project .")]),t._v(" "),e("h3",{attrs:{id:"step-3-start-the-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-the-application"}},[t._v("#")]),t._v(" Step 3: Start the application")]),t._v(" "),e("ul",[e("li",[t._v("Refer to the following command to start the backend application.")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/server/sermant/sermant-backend-x.x.x.jar\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-backend-x.x.x.jar\n")])])]),e("ul",[e("li",[t._v("Refer to the following command to start the dubbo-2-6-integration-consumer application.")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("consumer "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v("  dubbo-integration-consumer.jar\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("consumer "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v("  dubbo-integration-consumer.jar\n")])])]),e("ul",[e("li",[t._v("Refer to the following command to start the dubbo-2-6-integration-provider application.")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("provider "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-integration-provider.jar\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("provider "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-integration-provider.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("illustrate")]),t._v(":\nWhere path needs to be replaced with the actual installation path of Sermant.\nx.x.x represents a Sermant version number.")])]),t._v(" "),e("h3",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),e("p",[t._v("Visit the blood relationship information display page "),e("code",[t._v("http://127.0.0.1:8900/#/consanguinity")]),t._v(" Or contract information display page "),e("code",[t._v("http://127.0.0.1:8900/#/contract")]),t._v(", if the page successfully displays the collection information, the plug-in will take effect.")]),t._v(" "),e("p",[t._v("The display effect is shown below:")]),t._v(" "),e("ul",[e("li",[t._v("Rendering of contract information display")])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/visibility-contarct.png"}}),t._v(" "),e("ul",[e("li",[t._v("Rendering of blood relationship information display")])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/visibility-consanguinity.png"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);