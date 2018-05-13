/*

 Copyright (C) 2013 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;]],[[&quot;com&quot;,/^#!(?:.*)/],[&quot;kwd&quot;,/^\b(?:import|library|part of|part|as|show|hide)\b/i],[&quot;com&quot;,/^\/\/(?:.*)/],[&quot;com&quot;,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[&quot;kwd&quot;,/^\b(?:class|interface)\b/i],[&quot;kwd&quot;,/^\b(?:assert|async|await|break|case|catch|continue|default|do|else|finally|for|if|in|is|new|return|super|switch|sync|this|throw|try|while)\b/i],[&quot;kwd&quot;,/^\b(?:abstract|const|extends|factory|final|get|implements|native|operator|set|static|typedef|var)\b/i],
[&quot;typ&quot;,/^\b(?:bool|double|Dynamic|int|num|Object|String|void)\b/i],[&quot;kwd&quot;,/^\b(?:false|null|true)\b/i],[&quot;str&quot;,/^r?[\&apos;]{3}[\s|\S]*?[^\\][\&apos;]{3}/],[&quot;str&quot;,/^r?[\&quot;]{3}[\s|\S]*?[^\\][\&quot;]{3}/],[&quot;str&quot;,/^r?\&apos;(\&apos;|(?:[^\n\r\f])*?[^\\]\&apos;)/],[&quot;str&quot;,/^r?\&quot;(\&quot;|(?:[^\n\r\f])*?[^\\]\&quot;)/],[&quot;typ&quot;,/^[A-Z]\w*/],[&quot;pln&quot;,/^[a-z_$][a-z0-9_]*/i],[&quot;pun&quot;,/^[~!%^&amp;*+=|?:&lt;&gt;/-]/],[&quot;lit&quot;,/^\b0x[0-9a-f]+/i],[&quot;lit&quot;,/^\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i],[&quot;lit&quot;,
/^\b\.\d+(?:e[+-]?\d+)?/i],[&quot;pun&quot;,/^[(){}\[\],.;]/]]),[&quot;dart&quot;]);
