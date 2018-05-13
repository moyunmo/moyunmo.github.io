/*

 Copyright (C) 2012 Jeffrey B. Arnold

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;],[&quot;str&quot;,/^\&apos;(?:[^\&apos;\\]|\\[\s\S])*(?:\&apos;|$)/,null,&quot;&apos;&quot;]],[[&quot;com&quot;,/^#.*/],[&quot;kwd&quot;,/^(?:if|else|for|while|repeat|in|next|break|return|switch|function)(?![A-Za-z0-9_.])/],[&quot;lit&quot;,/^0[xX][a-fA-F0-9]+([pP][0-9]+)?[Li]?/],[&quot;lit&quot;,/^[+-]?([0-9]+(\.[0-9]+)?|\.[0-9]+)([eE][+-]?[0-9]+)?[Li]?/],[&quot;lit&quot;,/^(?:NULL|NA(?:_(?:integer|real|complex|character)_)?|Inf|TRUE|FALSE|NaN|\.\.(?:\.|[0-9]+))(?![A-Za-z0-9_.])/],
[&quot;pun&quot;,/^(?:&lt;<?-|->&gt;?|-|==|<=|>=|<|>|&amp;&amp;?|!=|\|\|?|\*|\+|\^|\/|!|%.*?%|=|~|\$|@|:{1,3}|[\[\](){};,?])/],[&quot;pln&quot;,/^(?:[A-Za-z]+[A-Za-z0-9_.]*|\.[a-zA-Z_][0-9a-zA-Z\._]*)(?![A-Za-z0-9_.])/],[&quot;str&quot;,/^`.+`/]]),[&quot;r&quot;,&quot;s&quot;,&quot;R&quot;,&quot;S&quot;,&quot;Splus&quot;]);
</|></=|>