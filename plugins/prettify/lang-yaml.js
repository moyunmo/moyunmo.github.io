/*

 Copyright (C) 2015 ribrdb @ code.google.com

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pun&quot;,/^[:|&gt;?]+/,null,&quot;:|&gt;?&quot;],[&quot;dec&quot;,/^%(?:YAML|TAG)[^#\r\n]+/,null,&quot;%&quot;],[&quot;typ&quot;,/^[&amp;]\S+/,null,&quot;&amp;&quot;],[&quot;typ&quot;,/^!\S*/,null,&quot;!&quot;],[&quot;str&quot;,/^&quot;(?:[^\\&quot;]|\\.)*(?:&quot;|$)/,null,&apos;&quot;&apos;],[&quot;str&quot;,/^&apos;(?:[^&apos;]|&apos;&apos;)*(?:&apos;|$)/,null,&quot;&apos;&quot;],[&quot;com&quot;,/^#[^\r\n]*/,null,&quot;#&quot;],[&quot;pln&quot;,/^\s+/,null,&quot; \t\r\n&quot;]],[[&quot;dec&quot;,/^(?:---|\.\.\.)(?:[\r\n]|$)/],[&quot;pun&quot;,/^-/],[&quot;kwd&quot;,/^[\w-]+:[ \r\n]/],[&quot;pln&quot;,
/^\w+/]]),[&quot;yaml&quot;,&quot;yml&quot;]);
