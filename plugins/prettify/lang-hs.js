/*

 Copyright (C) 2009 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\x0B\x0C\r ]+/,null,&quot;\t\n\x0B\f\r &quot;],[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\\n\x0C\r]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;],[&quot;str&quot;,/^\&apos;(?:[^\&apos;\\\n\x0C\r]|\\[^&amp;])\&apos;?/,null,&quot;&apos;&quot;],[&quot;lit&quot;,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,&quot;0123456789&quot;]],[[&quot;com&quot;,/^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],[&quot;kwd&quot;,/^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\&apos;]|$)/,
null],[&quot;pln&quot;,/^(?:[A-Z][\w\&apos;]*\.)*[a-zA-Z][\w\&apos;]*/],[&quot;pun&quot;,/^[^\t\n\x0B\x0C\r a-zA-Z0-9\&apos;\&quot;]+/]]),[&quot;hs&quot;]);
