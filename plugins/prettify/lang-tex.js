/*

 Copyright (C) 2011 Martin S.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;com&quot;,/^%[^\r\n]*/,null,&quot;%&quot;]],[[&quot;kwd&quot;,/^\\[a-zA-Z@]+/],[&quot;kwd&quot;,/^\\./],[&quot;typ&quot;,/^[$&amp;]/],[&quot;lit&quot;,/[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],[&quot;pun&quot;,/^[{}()\[\]=]+/]]),[&quot;latex&quot;,&quot;tex&quot;]);
