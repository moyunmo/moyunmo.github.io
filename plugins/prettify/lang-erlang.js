/*

 Copyright (C) 2013 Andrew Allen

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\x0B\x0C\r ]+/,null,&quot;\t\n\x0B\f\r &quot;],[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\\n\x0C\r]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;],[&quot;lit&quot;,/^[a-z][a-zA-Z0-9_]*/],[&quot;lit&quot;,/^\&apos;(?:[^\&apos;\\\n\x0C\r]|\\[^&amp;])+\&apos;?/,null,&quot;&apos;&quot;],[&quot;lit&quot;,/^\?[^ \t\n({]+/,null,&quot;?&quot;],[&quot;lit&quot;,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,&quot;0123456789&quot;]],[[&quot;com&quot;,/^%[^\n]*/],[&quot;kwd&quot;,/^(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\b/],
[&quot;kwd&quot;,/^-[a-z_]+/],[&quot;typ&quot;,/^[A-Z_][a-zA-Z0-9_]*/],[&quot;pun&quot;,/^[.,;]/]]),[&quot;erlang&quot;,&quot;erl&quot;]);
