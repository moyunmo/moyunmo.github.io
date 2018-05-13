/*

 Copyright (C) 2012 Pyrios

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;opn&quot;,/^\{+/,null,&quot;{&quot;],[&quot;clo&quot;,/^\}+/,null,&quot;}&quot;],[&quot;com&quot;,/^#[^\r\n]*/,null,&quot;#&quot;],[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;]],[[&quot;kwd&quot;,/^(?:after|append|apply|array|break|case|catch|continue|error|eval|exec|exit|expr|for|foreach|if|incr|info|proc|return|set|switch|trace|uplevel|upvar|while)\b/,null],[&quot;lit&quot;,/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],
[&quot;lit&quot;,/^\&apos;(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[&quot;pln&quot;,/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[&quot;pun&quot;,/^[^\w\t\n\r \xA0()\&quot;\\\&apos;;]+/]]),[&quot;tcl&quot;]);
