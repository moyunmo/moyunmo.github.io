/*

 Copyright (C) 2011 Zimin A.V.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;str&quot;,/^(?:\&apos;(?:[^\\\&apos;\r\n]|\\.)*\&apos;|\&quot;(?:[^\\\&quot;\r\n]|\\.)*(?:\&quot;|$))/,null,&apos;&quot;&apos;],[&quot;com&quot;,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,&quot;#&quot;],[&quot;pln&quot;,/^\s+/,null,&quot; \r\n\t\u00a0&quot;]],[[&quot;str&quot;,/^@\&quot;(?:[^\&quot;]|\&quot;\&quot;)*(?:\&quot;|$)/,null],[&quot;str&quot;,/^<#(?:[^#>])*(?:#&gt;|$)/,null],[&quot;str&quot;,/^<(?:(?:(?:\.\.\ )*|\="" ?)(?:[\w-]+(?:\="" [\w-]+)+)?[\w-]+\.h|[a-z]\w*)="">/,null],[&quot;com&quot;,/^\/\/[^\r\n]*/,
null],[&quot;com&quot;,/^\/\*[\s\S]*?(?:\*\/|$)/,null],[&quot;kwd&quot;,/^(?:abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield)\b/,
null],[&quot;typ&quot;,/^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\b/,null],[&quot;lit&quot;,/^@[a-z_$][a-z_$@0-9]*/i,null],[&quot;typ&quot;,/^@[A-Z]+[a-z][A-Za-z_$@0-9]*/,null],[&quot;pln&quot;,/^&apos;?[A-Za-z_$][a-z_$@0-9]*/i,null],[&quot;lit&quot;,/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,&quot;0123456789&quot;],[&quot;pun&quot;,/^.[^\s\w\.$@\&apos;\&quot;\`\/\#]*/,null]]),[&quot;n&quot;,&quot;nemerle&quot;]);
</(?:(?:(?:\.\.\></#(?:[^#>