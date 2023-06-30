(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{480:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sermant-framework-faqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-framework-faqs"}},[e._v("#")]),e._v(" Sermant Framework FAQs")]),e._v(" "),t("p",[e._v("This document mainly explains common problems encountered when using the Sermant framework.")]),e._v(" "),t("h2",{attrs:{id:"what-does-the-input-parameter-appname-mean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-does-the-input-parameter-appname-mean"}},[e._v("#")]),e._v(" "),t("strong",[e._v("What does the input parameter “appName” mean")])]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("appName")]),e._v(" represents the name of the host application. Multiple instances can have the same "),t("code",[e._v("appName")]),e._v(" and different "),t("code",[e._v("instanceName")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"what-kind-of-service-governance-plugins-does-sermant-provide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-kind-of-service-governance-plugins-does-sermant-provide"}},[e._v("#")]),e._v(" "),t("strong",[e._v("What kind of service governance plugins does Sermant provide?")])]),e._v(" "),t("ul",[t("li",[e._v("Sermant is extensible. Besides the service governance plugin provided by the framework itself ("),t("RouterLink",{attrs:{to:"/en/document/plugin/flowcontrol.html"}},[e._v("Introduction to FlowControl")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/document/plugin/service-registry.html"}},[e._v("Introduction to Service Registration")]),e._v("), developers can develop plugins including (data collection, link collection, etc.) according to business requirements.")],1)]),e._v(" "),t("h2",{attrs:{id:"how-to-mount-multiple-sermants-simultaneously"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-mount-multiple-sermants-simultaneously"}},[e._v("#")]),e._v(" **How to mount multiple Sermants simultaneously??")]),e._v(" "),t("ul",[t("li",[e._v("If the host application needs to mount multiple Sermants, please follow the following steps to handle other Sermants.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: It is not recommended to mount multiple Sermants unless necessary")])]),e._v(" "),t("h3",{attrs:{id:"step-1-use-the-hade-plugin-to-redirect-the-class-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-use-the-hade-plugin-to-redirect-the-class-path"}},[e._v("#")]),e._v(" Step 1: Use the hade plugin to redirect the class path")]),e._v(" "),t("ul",[t("li",[e._v("Modify the pom.xml files for sermant agentcore core, sermant agentcore implementation, sermant agentcore premain, and sermant common. Use the Shade plugin for class redirection during packaging. Please refer to the following figure for specific modifications (please specify the prefix for path resetting backward based on your project)")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/package.png"}}),e._v(" "),t("h3",{attrs:{id:"step-2-modify-the-premain-class-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-modify-the-premain-class-path"}},[e._v("#")]),e._v(" Step 2: Modify the Premain-Class path")]),e._v(" "),t("ul",[t("li",[e._v("Modify the AgentPremain path in the pom.xml file of the sermant agentcore premain. (Please keep the path prefix consistent with the first step to prevent missing the AgentPremain class)")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/premain-classpath.png"}}),e._v(" "),t("h3",{attrs:{id:"step-3-modify-the-logger-instance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-modify-the-logger-instance"}},[e._v("#")]),e._v(" Step 3: Modify the Logger instance.")]),e._v(" "),t("ul",[t("li",[e._v("Modify the method parameters for obtaining log Logger instances in the AgentPremain class to prevent different Servants from using the same Logger instance")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/sermant-log.png"}}),e._v(" "),t("ul",[t("li",[e._v("After modifying according to the above steps, multiple Sermant launches will not cause conflicts.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Note:")]),e._v(" "),t("ol",[t("li",[e._v("Do not use the - D parameter to modify the configuration information of the Sermant, otherwise all Sermants will be modified simultaneously.")]),e._v(" "),t("li",[e._v("When using dynamic configuration, ensure that the group information of different Sermants is inconsistent, or use different configuration centers. Otherwise, all Sermants will share the same dynamic configuration.")]),e._v(" "),t("li",[e._v("If different Sermants load the same plugin, please redirect the plugin's classpath according to step 1 to prevent conflicts.")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);