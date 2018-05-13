/*

 Copyright (C) 2014 Paulo Moura

 Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\\n\x0C\r]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;],[&quot;lit&quot;,/^[a-z][a-zA-Z0-9_]*/],[&quot;lit&quot;,/^\&apos;(?:[^\&apos;\\\n\x0C\r]|\\[^&amp;])+\&apos;?/,null,&quot;&apos;&quot;],[&quot;lit&quot;,/^(?:0&apos;.|0b[0-1]+|0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,&quot;0123456789&quot;]],[[&quot;com&quot;,/^%[^\r\n]*/,null,&quot;%&quot;],[&quot;com&quot;,/^\/\*[\s\S]*?\*\//],[&quot;kwd&quot;,/^\s*:-\s(c(a(lls|tegory)|oinductive)|p(ublic|r(ot(ocol|ected)|ivate))|e(l(if|se)|n(coding|sure_loaded)|xport)|i(f|n(clude|itialization|fo))|alias|d(ynamic|iscontiguous)|m(eta_(non_terminal|predicate)|od(e|ule)|ultifile)|reexport|s(et_(logtalk|prolog)_flag|ynchronized)|o(bject|p)|use(s|_module))/],
[&quot;kwd&quot;,/^\s*:-\s(e(lse|nd(if|_(category|object|protocol)))|built_in|dynamic|synchronized|threaded)/],[&quot;typ&quot;,/^[A-Z_][a-zA-Z0-9_]*/],[&quot;pun&quot;,/^[.,;{}:^&lt;&gt;=\\/+*?#!-]/]]),[&quot;logtalk&quot;,&quot;lgt&quot;]);
