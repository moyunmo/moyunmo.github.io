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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;str&quot;,/^(?:&quot;(?:[^\\&quot;\r\n]|\\.)*(?:&quot;|$))/,null,&apos;&quot;&apos;],[&quot;pln&quot;,/^\s+/,null,&quot; \r\n\t\u00a0&quot;]],[[&quot;com&quot;,/^REM[^\r\n]*/,null],[&quot;kwd&quot;,/^\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\b/,null],[&quot;pln&quot;,/^[A-Z][A-Z0-9]?(?:\$|%)?/i,null],[&quot;lit&quot;,/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?/i,
null,&quot;0123456789&quot;],[&quot;pun&quot;,/^.[^\s\w\.$%&quot;]*/,null]]),[&quot;basic&quot;,&quot;cbm&quot;]);
