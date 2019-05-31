webpackJsonp([1],{38:function(n,t,e){e(84);var r=e(23)(e(40),e(96),"data-v-b76f4cbc",null);n.exports=r.exports},40:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(24),o=e.n(r),i=e(45),s=e.n(i),u=e(44),a=e.n(u),l=e(93),c=e.n(l),p=e(92),d=e.n(p),g=e(81);e.n(g);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:d.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 同学你好,这里是\n* 东南大学\n* 计算机科学与工程学院、\n* 软件学院、人工智能学院。\n*/\n\n/*\n* 一起来看看你的学长学姐们\n* 是怎么做推送的吧～\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了,我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n  overflow: hidden;\n}\nbody{\n  background: rgb(0,43,54);\n}\n.background{\n  z-index:-1;\n  position:fixed;\n  left:0;\n  top:0;\n  height:100vh; width:100vh;\n  background: rgb(0,43,54);\n}\n/* 调整一下代码框的位置 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 代码高亮才不容易出错 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 太高了 */\n.styleEditor {\n  height: 20vh;\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-30deg) translateZ(0px) ;\n}\n\n/* 接下来,正文就要登场了 */\n.resumeEditor{\n  position: fixed;\n  top: 21%; left: 0; right: 0;\n  padding: .5em;  \n  margin: 20px;\n  height: 72vh;\n  border: 1px solid;\n  background: #FCFFDB; color: #222;\n  overflow: auto;\n  border-radius: 8px;\n}\n/* 一起来看看我们的学院介绍吧！ */\n\n\n","\n/* 这个介绍好像差点什么\n * 对了,这是 Markdown 格式的,我需要变成对 萌新们 更友好的格式\n * 简单,用开源工具翻译成 HTML 就行了\n */\n",'\n/* 格式还需要优化 */\n.resumeEditor{\n  padding: 20px 4vw;\n}\n\n/* 标题太大了 */\n.resumeEditor h1{\n  font-size:24px;\n}\n\n/* 副标题也太大了 */\n.resumeEditor h2{\n  display: inline-block;\n  margin: 1em 0 .5em;\n  font-size: 20px;\n  color: #007419;\n}\n\n/* 文本小一些显得精致 */\n.resumeEditor p{\n  font-size: 15px;\n  margin-bottom: 0.5em;\n}\n\n.resumeEditor p strong{\n  color:#003174;\n}\n\n/* 图片也需要圆角和阴影 */\n.resumeEditor img {\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n  margin-top: 10px;\n}\n\n.resumeEditor li{\n  font-size: 15px;\n}\n\n.resumeEditor li strong{\n  color:#003174;\n}\n\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n/* 好了，认真看一下学院介绍吧！*/\n\n.styleEditor {\n  opacity:0;\n}\n.resumeEditor {\n  top:0;\n  height:95vh;\n}\n\n\n\n'],currentMarkdown:"",fullMarkdown:'\n\n# 东南大学计算机科学与工程学院、软件学院、人工智能学院\n\n## 计算机科学与工程学院简介\n\n\n学院起源于1960年建立的\n“解算装置及技术”专业,\n曾自主研制我国第一台数字积分机,\n填补了国内空白,\n并成功地应用于国防现代化和工业自动化领域,\n取得了开创性成果。\n现有\n**“计算机科学与技术”**\n和\n**“软件工程”**\n两个一级学科博士点,\n其中 “计算机应用技术”\n二级学科博士点为**国家重点学科**。\n在ESI学科排名中,\n计算机学科已进入**全球前1‰**\n(截止目前,列全球第22位,国内第二位)。\n计算机科学与技术一级学科为\n**“双一流”国家重点建设学科**,\n软件工程一级学科于2018年\n进入**江苏省优势学科**立项建设范围。\n近五年来,获国家教学成果一等奖、\n江苏省教学成果一等奖、\n省优秀教学成果二等奖、\n中国学位与研究生教育学会二等奖、\n全国高等学校计算机实践教学一等奖各1项。\n![计算机学院本科教学与人才培养](https://static.myseu.cn/2019-xueyuantuisong/计算机学院本科教学与人才培养.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">计算机学院本科教学与人才培养</p>\n“计算机教学实验中心”是\n国家及江苏省教学实验示范中心建设点,\n“数据库原理共享课”为国家级精品课程。\n![东南大学计算机科学与技术一级学科博士学位授权点](https://static.myseu.cn/2019-xueyuantuisong/东南大学计算机科学与技术一级学科博士学位授权点.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">计算机科学与技术一级学科博士学位授权点</p>\n![东南大学计算机科学与技术一级学科博士后流动站](https://static.myseu.cn/2019-xueyuantuisong/东南大学计算机科学与技术一级学科博士后流动站.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">计算机科学与技术一级学科博士后流动站</p>\n\n## 软件学院简介\n学院成立于2001年12月,\n是首批成立的**“国家示范性软件学院”**\n依托“软件工程”和“计算机科学与技术”\n两个一级学科开展办学,其中,\n“软件工程”学科是在“计算机软件与理论”\n江苏省**重点学科**基础上发展形成的。\n该学科于1986年获硕士学位授予权,\n2003年获博士学位授予权,\n2006年成为江苏省重点学科,\n2012年成为江苏省一级学科重点学科。\n学院始终以**现代工程教育**的理念为指引\n建立创新人才培养模式,\n并成为学校**工程教育教学改革**的先行者。\n![国家示范性软件学院](https://static.myseu.cn/2019-xueyuantuisong/国家示范性软件学院.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">国家示范性软件学院</p>\n\n## 人工智能学院简介\n学院以计算机科学与工程学院为基础,\n以学校相关专业为依托发展而来,成立于2018年,\n是国家**首批申报并设立**“人工智能”专业的学院之一。\n2018年秋季依托计算机科学与工程学院\n招收了第一届人工智能专业本科生。\n学院在**人工智能基础理论**和\n**应用研究**方面具有深厚的研究基础,\n主要研究方向包括**机器学习**、\n**知识表示与推理**、\n**计算机视觉**、\n**自然语言处理**、\n**多智能体**、**图像处理**、**科学可视化**等。\n学院集中了计算机科学与技术、\n控制科学与工程、\n信息与通信工程等\n多个国家**“双一流”**学科所在学院的\n优势科研团队和科研资源,将在学科地位、\n科研水平、\n教学质量、\n人才培养等方面建设国内外\n具有**明显特色**和**较高学术水平**的人工智能专业。\n![人工智能学院、人工智能研究院](https://static.myseu.cn/2019-xueyuantuisong/人工智能学院、人工智能研究院.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">人工智能学院、人工智能研究院</p>\n![江苏省人工智能学会副理事长单位](https://static.myseu.cn/2019-xueyuantuisong/江苏省人工智能学会副理事长单位.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">江苏省人工智能学会副理事长单位</p>\n\n## 师资队伍\n学院现有专任教师93人,\n拥有一支**结构合理、充满朝气、\n以中青年教师为主的**高水平师资队伍。\n其中,\n\n* 中国工程院院士 **1** 人\n* 博士生导师 **22** 人\n* 新世纪“百千万人才工程”国家级人选 **1** 人\n* 长江学者特聘教授 **1** 人\n* 青年长江特聘教授 **1** 人\n* 获国家自然科学基金优秀青年科学基金 **2** 人\n* 教育部跨世纪人才 **2** 人\n* 教育部新世纪优秀人才 **6** 人\n* 教育部优秀青年教师 **2** 人\n* 江苏省“333人才工程”培养对象 **6** 人\n* 江苏省“六大人才高峰” **10** 人\n* 江苏省“青蓝工程”培养对象 **8** 人\n* 江苏省教育系统先进工作者 **1** 人\n* 江苏省“双创人才” **1** 人\n* 江苏省“双创博士”资助对象 **3** 人\n* “长江学者和创新团队发展计划”创新团队 **1** 个\n\n![学院师资队伍](https://static.myseu.cn/2019-xueyuantuisong/计算机学院师资队伍.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">学院师资队伍</p>\n\n## 国际交流\n\n学院坚持走国际化办学的强院道路,\n积极拓宽国际视野、增强国际理念、加强国际交流、深化国际合作,\n在高层次国际交流、与国际知名大学合作办学等方面实现了重要突破。\n\n![承办第15届亚太人工智能国际会议](https://static.myseu.cn/2019-xueyuantuisong/承办第15届亚太人工智能国际会议.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">承办第15届亚太人工智能国际会议</p>\n![承办第22届CSCWD国际会议](https://static.myseu.cn/2019-xueyuantuisong/承办第22届CSCWD国际会议.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">承办第22届CSCWD国际会议</p>\n\n近年来,教学计划中逐步增加外教、全英文、双语授课课程,\n为学生创造国际化的学习环境,为培养适应国际合作与竞争背景的优秀人才提供了有力保障。\n2011年,开始与澳大利亚Monash大学联合培养软件工程硕士,\n邀请了来自美国、德国、荷兰和加拿大等国家的知名学者来学院讲学,\n接待了来自美国 Carnegie Mellon大学、Temple大学、肯特州立大学、\n爱沙尼亚塔尔图大学、德国乌尔姆大学、澳大利亚Monash大学、\n法国巴黎高科、英国女王大学代表团来访,并洽谈了合作事宜。\n与美国普渡大学、爱尔兰阿斯隆理工学院、\n爱尔兰考德大学、日本早稻田大学、澳大利亚昆士兰大学、\n比利时 GROUP-T大学、爱尔兰 Ericsson公司等签署了合作协议联合培养学生,\n每年均有一定比例的学生到上述大学和企业进行研究和实习,\n培养了一批具有国际竞争能力的精英型计算机、软件人才。\n\n\n\n## 学生活动\n\n学院重视学生全面发展,通过打造学生自我成长、\n开拓创新的实践平台持续推动第二课堂的建设。\n在院团委的指导下,学院共设有学生会、\n青年志愿者协会、科学技术协会、\n新媒体工作室等四大学生组织,\n同学们可根据兴趣、能力需求选择加入其中,\n参与到组织策划多项内涵丰富的活动中,\n如“南京地质博物馆微笑讲解团”志愿活动,\n迎新晚会等。在充分发挥学生的主观能动性的同时锻炼学生的沟通、\n执行、抗压等多项素质。同时,学院重视打造专业特色学生组织建设,\n学生组织作为学生实践开拓与能力提升的重要载体,\n持续产出学生自主设计、精心开发的项目成果,\n并多次获校级、省级以及国家、国际级别的各大奖项。\n每年超过二十余场极具专业特色、饱含实践意义的活动,\n培养学生对科研的浓厚兴趣的同时极大地丰富着同学们的课余生活,\n指引同学们在专业与自我发展方面不断进步与成长。\n\n![获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌](https://static.myseu.cn/2019-xueyuantuisong/获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌</p>\n![获全国高校云计算应用创新大赛一等奖](https://static.myseu.cn/2019-xueyuantuisong/获全国高校云计算应用创新大赛一等奖.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">获全国高校云计算应用创新大赛一等奖</p>\n![院运会](https://static.myseu.cn/2019-xueyuantuisong/tp1.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">院运会</p>\n![中山陵志愿者活动](https://static.myseu.cn/2019-xueyuantuisong/tp2.png)\n<p style="text-align:center;font-weight:bold;font-size:14px;">中山陵志愿者活动</p>\n![“我爱东大”校史校情知识竞赛](https://static.myseu.cn/2019-xueyuantuisong/tp4.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">“我爱东大”校史校情知识竞赛</p>\n![环九龙湖自行车赛](https://static.myseu.cn/2019-xueyuantuisong/tp3.jpg)\n<p style="text-align:center;font-weight:bold;font-size:14px;">环九龙湖自行车赛</p>\n'}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return this.interval=0,n.next=5,this.progressivelyShowResume();case 5:return this.interval=20,n.next=8,this.progressivelyShowStyle(1);case 8:return n.next=10,this.showHtml();case 10:return n.next=12,this.progressivelyShowStyle(2);case 12:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=a()(s.a.mark(function t(){var r,u,a,l,c,p=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:u=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){p.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length;n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),e()}else t()}()})}}}},41:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(85),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},42:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(86),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(39),o=e(38),i=e.n(o);document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,t){},82:function(n,t){},83:function(n,t){},84:function(n,t){},92:function(n,t,e){e(83);var r=e(23)(e(41),e(95),"data-v-2df95543",null);n.exports=r.exports},93:function(n,t,e){e(82);var r=e(23)(e(42),e(94),"data-v-2ca90776",null);n.exports=r.exports},94:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"background"}),n._v(" "),e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[43]);
//# sourceMappingURL=app.af9916a209f0a000fdf9.js.map