/*

 Copyright (C) 2010 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;str&quot;,/^(?:&quot;(?:(?:&quot;&quot;(?:&quot;&quot;?(?!&quot;)|[^\\&quot;]|\\.)*&quot;{0,3})|(?:[^&quot;\r\n\\]|\\.)*&quot;?))/,null,&apos;&quot;&apos;],[&quot;lit&quot;,/^`(?:[^\r\n\\`]|\\.)*`?/,null,&quot;`&quot;],[&quot;pun&quot;,/^[!#%&amp;()*+,\-:;<=>?@\[\\\]^{|}~]+/,null,&quot;!#%&amp;()*+,-:;<=>?@[\\]^{|}~&quot;]],[[&quot;str&quot;,/^&apos;(?:[^\r\n\\&apos;]|\\(?:&apos;|[^\r\n&apos;]+))&apos;/],[&quot;lit&quot;,/^&apos;[a-zA-Z_$][\w$]*(?![&apos;$\w])/],[&quot;kwd&quot;,/^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
[&quot;lit&quot;,/^(?:true|false|null|this)\b/],[&quot;lit&quot;,/^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],[&quot;typ&quot;,/^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],[&quot;pln&quot;,/^[$a-zA-Z_][\w$]*/],[&quot;com&quot;,/^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],[&quot;pun&quot;,/^(?:\.+|\/)/]]),[&quot;scala&quot;]);
</=></=>