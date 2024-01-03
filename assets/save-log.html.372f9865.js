import{_ as l,o as c,c as i,a as e,b as n,w as r,e as s,d as u,r as o}from"./app.98a29f3d.js";const d={},p=e("h1",{id:"log-command-outputs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#log-command-outputs","aria-hidden":"true"},"#"),s(" Log command outputs")],-1),h={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=save-log",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Log command outputs",-1),_=s(" online tutorial"),v=u(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Log command outputs for later analysis</p></div><ul><li><p>By default, this behavior is turned off. To enable it, execute the command below:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ options save-result <span class="token boolean">true</span>
 NAME         BEFORE-VALUE  AFTER-VALUE
----------------------------------------
save-result  <span class="token boolean">false</span>         <span class="token boolean">true</span>
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">3</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the message above is output on the console, then this behavior is enabled successfully.</p></li><li><p>Log file path</p><p>The command execution result will be save in <code>{user.home}/logs/arthas-cache/result.log</code>. Pls. clean it up regularly to save disk space.</p></li></ul><h2 id="use-asynchronous-job-to-log" tabindex="-1"><a class="header-anchor" href="#use-asynchronous-job-to-log" aria-hidden="true">#</a> Use asynchronous job to log</h2>`,3),b=s("Reference: "),f=s("async");function g(k,x){const a=o("ExternalLinkIcon"),t=o("RouterLink");return c(),i("div",null,[p,e("p",null,[e("a",h,[m,_,n(a)])]),v,e("p",null,[b,n(t,{to:"/en/doc/async.html"},{default:r(()=>[f]),_:1})])])}const L=l(d,[["render",g],["__file","save-log.html.vue"]]);export{L as default};