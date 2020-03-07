<template>
  <div class="container">
        <main>
            <header >
                <div style="width: 75%;margin:0 auto;overflow: hidden;">
                    <div style="margin: 50px 0 0 20px;width: 200px;float: left;"><img style="margin: 0 auto;display: block;" src="../../assets/imgs/psb.jpg" width="100px" height="140px" ></div>
                    <ul class="contact" style="float: left;">
                        <li><span>性&emsp;&emsp;别：</span>&emsp;男</li>
                        <li><span>年&emsp;&emsp;龄：</span>&emsp;26</li>
                        <li><span>工作经验：</span>&emsp;三年</li>
                        <li><span>意向职位：</span>&emsp;中级web前端工程师</li>
                        <li><span>邮&emsp;&emsp;箱：</span>&emsp;872570730@qq.com</li>
                        <li><span>联系电话：</span>&emsp;13580116537</li>
                        <li><span>在职公司：</span>&emsp;广州油菜花信息科技有限公司</li>
                        <li><span>个人博客：</span>&emsp;<a href="https://juejin.im/user/5a90cf12f265da4e9957a343/posts">掘金个人主页</a></li>
                        <!-- <li><span>期望薪资：</span>&emsp;10k-13k</li> -->
                    </ul>
                </div>
            </header>
            <p style="clear: both;"></p>
            <section class="education">
                <h2>教育经历</h2>
                <ul>
                    <li>
                        <div class="edu-placeholder"></div>
                    </li>
                    <li><span class="edu-year">2013 - 2017</span><span class="edu-circle circle"></span><span class="edu-title">本科(全日制)--(计算机专业)</span></li>
                </ul>
            </section>
            <article class="content">
                <article>
                    <section class="skill">
                        <h2>技能</h2>
                        <dl class="skill-item">
                            <dt>JS技能</dt>
                            <dd>熟练 <strong>原生JavaScript</strong>，熟悉<strong>闭包</strong>原理，理解<strong>原型链的继承</strong>机制。了解<strong>DOM</strong> / <strong>BOM</strong>操作，了解浏览器事件模型，了解<strong>前端性能优化</strong></dd>
                            <dd>熟悉<strong>ES6</strong>的Class，Promise，async等常用新特性。</dd>
                            <dd>熟悉<strong>OOP</strong>设计思想，了解js模块化思想</dd>
                        </dl>

                        <dl class="skill-item">
                            <dt>框架/工具</dt>
                            <dd>熟练使用<strong>Vue全家桶</strong>。了解<strong>mvvm</strong>原理。</dd>
                            <dd>掌握基本的<strong>webpack</strong>常用配置。搭建过<strong>vue项目脚手架</strong></dd>
                            <dd>使用过<strong style="color:rgb(148, 146, 146)">React</strong>和<strong style="color:rgb(148, 146, 146)">Taro</strong>开发过小程序。</dd>
                            <dd>使用过<strong>electron</strong>开发桌面应用。</dd>
                            <dd>正在学习<strong style="color:rgb(148, 146, 146)">react native</strong> / <strong style="color:rgb(148, 146, 146)">flutter</strong></dd>
                        </dl>

                        <dl class="skill-item">
                            <dt>CSS技能/其他</dt>
                            <dd>熟练HTML5 / CSS3</dd>
                            <dd>熟悉<strong>移动端适配</strong>，熟悉响应式布局和<strong>Flex</strong>弹性盒布局，了解浏览器渲染机制</dd>
                            <dd>熟练使用<strong>element ui</strong> / <strong>vant</strong> / <strong>cube ui</strong>等</dd>
                            <dd>熟悉<strong>Git</strong>常用命令</dd>
                        </dl>
                        <dl class="skill-item">
                            <dt>其他技能</dt>
                            <dd>良好的英语阅读能力</dd>
                            <dd>能够使用 <strong>Photoshop</strong> 完成简单的图像处理</dd>
                        </dl>
                    </section>
                </article>
                <article>
         
                    <section class="project">
                        <h2>项目经验</h2>
                        <ul>
                            <li>
                                <dl>
                                    <dd>2019.4 - 至今<span>协同开发</span></dd>
                                    <dt><span class="circle"></span>油菜花迎客宝 — 微信小程序 / h5</dt>
                                    <dd>
                                        <span class="key-point">react语法</span>
                                        <span class="key-point">taro框架</span>
                                        <span class="key-point">mobx</span>
                                        <span class="key-point">小程序</span>
                                    <dd>
                                    <ul>
                                        <li>参与技术选型，决定使用taro进行多端统一的开发方式，主要页面用原生小程序，其他则用h5，尽可能减少小程序审核。使用一周时间熟悉react和taro框架，达到极速开发，降低研发成本的效果</li>
                                    </ul>
                                    </dd>
                                </dl>
                            </li>
                          
                            <li>
                                <dl>
                                    <dd>2018.7 - 2019.4<span>协同开发</span></dd>
                                    <dt><span class="circle"></span>油菜花芸苔 — 移动端管理系统(微信公众号)</dt>
                                    <dd><span class="key-point">Vue</span>
                                        <span class="key-point">vue-router</span>
                                        <span class="key-point">vuex</span>
                                        <span class="key-point">vue-cli</span>
                                        <span class="key-point">axios</span>
                                    </dd><dd>
                                        <p>职责：前期参与项目的选型和讨论，后期维护项目、根据需求增加项目功能。</p>
                                        
                                        <ul>
                                            <li><span class="border-line">前端代码异常捕获与上报:</span>
                                                <p style="margin: 0 0 0 15px;">前期使用onerror事件，结合vue.config.errorHandle事件捕获异常，后期转为开源库sentry捕捉异常。</p>
                                            </li>
                                            <li><span class="border-line">使用vw，vh实现移动端适配</span>，兼容市场上绝大部分的设备
                                            </li>
                                            <li><span class="border-line">编写webpack骨架屏预加载插件:</span>(解决了spa首次加载白屏的不良体验)
                                                <p style="margin: 0 0 0 15px;">利用webpack的html插件，编写plugin，在生成模板html时候插入骨架屏代码，完成预加载的效果</p>
                                            </li>
                                            <li><span class="border-line">利用多页面配置，解决单页面应用在微信端不能长按识别二维码问题</span></li>
                                            <li><span class="border-line">封装图片懒加载公共组件：</span>(优化了过早加载图片资源造成的带宽浪费现象)
                                                <p style="margin: 0 0 0 15px;">利用getBoundingClientRect()函数获取img元素的相对位置来达到预加载图片的效果</p>
                                            </li>
                                            <li><span class="border-line">封装图片转base64工具函数：</span>(减少http请求，优化网页加载速度)
                                            </li>
                                            <li><span class="border-line">编写全局api方式调用的toast组件</span>
                                            </li>
                                            <li><span class="border-line">编写倒计时获取验证码通用组件</span></li>
                                        </ul>
                                    </dd>
                                    
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dd>2018.2 - 2018.7<span>协同开发</span></dd>
                                    <dt><span class="circle"></span>油菜花游乐宝场地管理软件 — 桌面端(electron)</dt>
                                    <dd>
                                        <span class="key-point">electron</span>
                                        <span class="key-point">Vue全家桶</span>
                                    <dd>
                                    <ul>
                                        <li><span class="border-line">electron实现通用的打印小票功能:</span>
                                            <p style="margin: 0 0 0 15px;">
                                                （1）使用electron的webview标签进行静默打印。渲染线程和主线程通信获取系统打印机列表，利用canvas画图，转换成base64资源，发送到webview做展示，最后封装成通用组件，给各个组件调用
                                            </p>
                                            <p style="margin: 0 0 0 15px;">
                                                （2）通过控制异步事件队列的出队顺序，解决异步造成的混乱。
                                            </p>
                                        </li>
                                        <li><span class="border-line">编写基于indexdb和websocket的前端数据持久性缓存方案:</span>
                                            <p style="margin: 0 0 0 15px;">通过websocket和后端建立双工通信，突破http单工通讯的缺陷，对后台主动推过来的大量数据，用indexdb进行持久化储存。数据查找，分页的功能由前端来做</p>
                                        </li>
                                        <li><span class="border-line">使用requestAnimationFrame代替setTimeout优化动画，减少浏览器的重绘或回流</span>
                                        </li>
                                        <li><span class="border-line">前端实现图片压缩上传（优化图片上传速度）：</span>
                                            <p style="margin: 0 0 0 15px;">使用canvas对图片资源贴图压缩，将压缩后的图片通过atob进行资源转换，然后上传到cdn。</p>
                                        </li>
                                        <li><span class="border-line">使用vue函数式组件编写公共组件</span>
                                        </li>
                                    </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dd>2016.11 - 2018.2<span>协同开发</span></dd>
                                    <dt><span class="circle"></span>广东移动蜂巢精销 — dsp平台前端开发</dt>
                                    <dd><span class="key-point">JavaScript</span>
                                        <span class="key-point">HTML5</span>
                                        <span class="key-point">CSS3</span>
                                        <span class="key-point">MYSQL</span>
                                    </dd><dd>
                                        <ul>
                                            <li>使用 HTML5、CSS3、bootstrap对用户数据展现模块进行自适应的UI布局开发</li>
                                            <li>使用 原生js实现展现用户信息的瀑布流效果</li>
                                            <li>通过jsonp进行跨域获取资源，用ajax和后台进行通讯</li>
                                            <li>对产品的部分<span style="color: black;">性能优化处理</span>。通过<span style="color: black;">雪碧图，base64格式化图片链接，缓存静态资源</span>等手段，减少大量HTTP请求，提升应用性能，降低服务器压力</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dd>2016.6 - 2017.5<span>独立项目</span></dd>
                                    <dt><span class="circle"></span>基于vue2.0的移动端音乐播放器--单页面应用</dt>
                                    <dd><span class="key-point">vue.js</span>
                                        <span class="key-point">vue-router</span>
                                        <span class="key-point">ES6</span>
                                        <span class="key-point">Node.js</span>
                                        <span class="key-point">webpack</span>
                                    </dd><dd>
                                        <ul>
                                            <li>使用html，css基于vue2.0封装音乐播放列表组件。使用iconfont字体图标对页面ui进行优化处理</li>
                                            <li>依据模块化思想，<span style="color: black;">用原生js封装自适应轮播图组件、编写 JSONP 跨域抓取资源</span>。使用Axios 异步请求数据</li>
                                            <li>使用<span style="color: black;"> webpack</span>对项目用到es6语法，css文件进行转码编译。优化页面性能用到url-loader对图片进行base64编码</li>
                                            <li>使用<span style="color: black;"> Express 和 mysql</span>搭建开发环境，完成简单的用户登录，注册，api接口、路由等基础服务</li>
                                            <li>使用session-cookie中间键对用户信息进行加密操作</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                           <!--  <li>
                                <dl>
                                    <dd>2017.2 - 2017.5<span>独立开发</span></dd>
                                    <dt><span class="circle"></span>响应式个人简历</dt>
                                    <dd><span class="key-point">JavaScript</span>
                                        <span class="key-point">css3</span>
                                        <span class="key-point">html5</span>
                                    </dd><dd>
                                        <ul>
                                            <li>本简历使用 html，css，javascript进行<span style="color: black;">响应式布局</span></li>
                                            <li>使用 rem、em单位进行视图的自适应显示，提高不同设备的用户视觉体验效果</li>
                                            <li>使用 媒体查询进行视图的<span style="color: black;">自适应布局</span></li>

                                        </ul>
                                    </dd>
                                </dl>
                            </li> -->
                        </ul>
                    </section>
                </article>
            </article>

            <section class="education">
                <h2>工作经历</h2>
                <ul>
                    <li>
                        <div class="edu-placeholder"></div>
                    </li>
                    <li><span class="edu-year">2018.2 - 至今</span><span class="edu-circle circle"></span><span class="edu-title">广州油菜花信息科技有限公司</span></li>
                    <li>
                        <div class="edu-placeholder"></div>
                    </li>
                    <li><span class="edu-year">2016.10 - 2018.2</span><span class="edu-circle circle"></span><span class="edu-title">广州丰石信息科技有限公司</span></li>
                </ul>
            </section>
        </main>
        <footer><p>个人自适应简历网页</p></footer>
    </div>

</template>

<script>
export default {

}
</script>

<style>
body {
    font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.8em;
    display: flex;
    justify-content: center;
    width: 700px;
    padding: 0 20px;
}

.container {
    margin-top: 2.66666667em;
    /* 40/15 */
}

.border-line {
    /* border-bottom: 1px solid #d8c9c9; */
    font-weight: 700;
    font-size: 15px;
    /* color: rgb(116, 132, 216);  */
    color: black;
}

h1,
a {
    color: rgb(102, 121, 223);
}

strong {
    color: rgb(102, 121, 223);
    color: black;
    font-weight: 700;
}

ul {
    list-style-type: none;
    padding: 0;
}

dl {
    margin: 0;
}

dl dt {
    font-weight: bold;
    font-size: 1.04em;
}


/* css for header */

header {
    /* display: flex; */
}

h1 {
    margin-bottom: 0;
}

address {
    font-style: normal;
}

.contact li span {
    width: 5.33333333em;
    /* 80/15 */
    text-align: right;
    display: inline-block;
}


/* end header */


/* css for content */

.content {
    /* display: flex; */
    margin-top: 1.33333333em;
}

.content > article > section {
    /* padding: .5em 0; */
}

h2 {
    font-size: 1.33333333em;
    /* 20/15 */
    padding-bottom: .33333333em;
    /* 5/15 */
    border-bottom: 1px solid black;
    /* width: 400px; */
}


/* end content */

.circle {
    width: .53333333em;
    height: .53333333em;
    /* 8/15 */
    margin: 0 .66666667em;
    /* 10/15 */
    background: black;
    border-radius: 100%;
    display: inline-block;
}


/* css for education */

.edu-year {
    width: 8.8em;
    display: inline-block;
}

.edu-content {
    display: inline-block;
    margin-left: 6.7em;
    /* (87+10+4-0.5)/15 */
    padding-left: .9em;
    /* 13.5/15 */
    border-left: .06666667em solid black;
    /* 1/15 */
}

.edu-title {
    font-weight: bold;
    margin-bottom: .2em;
    /* 3/15 */
    display: inline-block;
}

.edu-placeholder {
    height: .625em;
    border-left: 1px solid black;
    margin-left: 9.7em;
    /* (87+10+4-0.5)/15 */
}


/* end education */


/* css for project */

.project dl dt {
    margin-bottom: .2em;
}

.project dl dd {
    margin-left: .26666666em;
    /* 26666666.5/2 */
    padding-left: .9em;
    /* 13.5/15 */
    border-left: .06666667em solid black;
    /* 1px */
}
.project .circle {
    margin-left: 0em;
}
.project dl dd:first-child {
    padding-top: .66666667em;
    /* 10/15 */
}
.project dl dd:first-child span {
    display: inline-block;
    width: 6em;
    background-color: rgb(233,236,251);
    color: rgb(102, 121, 223);
    font-size: .8em;
    text-align: center;
    margin-left: 1em;
    line-height: 1.5em;
    border-radius: .75em;
}
.project dl dd:last-child {
    padding-bottom: .66666667em;
}

.key-point {
    background: rgb(102, 121, 223);
    color: white;
    padding: .13333333em .33333333em;
    /* 2px 5px */
    margin: .33333333em 0 .6em;
    /* 5/15 */
    display: inline-block;
    font-size: .875em;
    /* 14/16 */
}


/* end project */

.award-item:before,
.skill-item dd:before,
.other-item li:before,
.eval-item li:before,
.project dl dd li:before {
    content: "";
    background: url('../../assets/imgs/check.png') no-repeat;
    background-size: .8em .8em;
    /* 12/15 */
    display: inline-block;
    width: .8em;
    height: .8em;
    padding-right: .33333333em;
    /* 5/15 */
}


/* css for skill */

.skill-item dd {
    margin-left: 0;
}

.skill-item dt {
    color: #827979;
    margin: .33333333em 0;
    /* 5/15 */
}

.skill-item {
    margin-bottom: 1em;
    /* 15/15 */
}

.skill-item:last-child {
    margin-bottom: 0;
}


/* end skill */


/* css for footer */

footer {
    text-align: center;
    font-size: .8em;
    margin: 3em 0 2em;
}


/* end footer */


/* css for media */

@media screen and (min-width: 900px) {
    .container {
        width: 900px;
    }
    header {
        justify-content: space-between;
    }
    .title {
        text-align: left;
    }
    .content > article {
        /* width: 27em; */
    }
    .content > article:first-child {
        /* padding-right: 3em; */
    }
    .content > article:last-child {
        /* padding-left: 3em; */
    }
}

@media screen and (max-width: 900px) {
    .container {
        width: 95%;
    }
    .content > article {
        width: 100%;
    }
    header,
    .content {
        flex-wrap: wrap;
        flex-direction: column;
    }
    .title {
        text-align: center;
    }
    header {
        align-items: center;
    }
    .content > article {
        padding: 0;
    }
    address {
        font-size: .94em;
    }
}


/* end media */

</style>