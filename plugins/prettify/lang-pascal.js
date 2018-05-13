/*

 Copyright (C) 2013 Peter Kofler

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;str&quot;,/^(?:\&apos;(?:[^\\\&apos;\r\n]|\\.)*(?:\&apos;|$))/,null,&quot;&apos;&quot;],[&quot;pln&quot;,/^\s+/,null,&quot; \r\n\t\u00a0&quot;]],[[&quot;com&quot;,/^\(\*[\s\S]*?(?:\*\)|$)|^\{[\s\S]*?(?:\}|$)/,null],[&quot;kwd&quot;,/^(?:ABSOLUTE|AND|ARRAY|ASM|ASSEMBLER|BEGIN|CASE|CONST|CONSTRUCTOR|DESTRUCTOR|DIV|DO|DOWNTO|ELSE|END|EXTERNAL|FOR|FORWARD|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INLINE|INTERFACE|INTERRUPT|LABEL|MOD|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|RECORD|REPEAT|SET|SHL|SHR|THEN|TO|TYPE|UNIT|UNTIL|USES|VAR|VIRTUAL|WHILE|WITH|XOR)\b/i,
null],[&quot;lit&quot;,/^(?:true|false|self|nil)/i,null],[&quot;pln&quot;,/^[a-z][a-z0-9]*/i,null],[&quot;lit&quot;,/^(?:\$[a-f0-9]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?)/i,null,&quot;0123456789&quot;],[&quot;pun&quot;,/^.[^\s\w\.$@\&apos;\/]*/,null]]),[&quot;pascal&quot;]);
