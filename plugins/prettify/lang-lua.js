/*

 Copyright (C) 2008 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;str&quot;,/^(?:\&quot;(?:[^\&quot;\\]|\\[\s\S])*(?:\&quot;|$)|\&apos;(?:[^\&apos;\\]|\\[\s\S])*(?:\&apos;|$))/,null,&quot;\&quot;&apos;&quot;]],[[&quot;com&quot;,/^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],[&quot;str&quot;,/^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],[&quot;kwd&quot;,/^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,null],[&quot;lit&quot;,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
[&quot;pln&quot;,/^[a-z_]\w*/i],[&quot;pun&quot;,/^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\&quot;\&apos;\-\+=]*/]]),[&quot;lua&quot;]);
