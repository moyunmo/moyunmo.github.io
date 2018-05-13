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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[ \t\r\n\f]+/,null,&quot; \t\r\n\f&quot;]],[[&quot;str&quot;,/^\&quot;(?:[^\n\r\f\\\&quot;]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\&quot;/,null],[&quot;str&quot;,/^\&apos;(?:[^\n\r\f\\\&apos;]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\&apos;/,null],[&quot;lang-css-str&quot;,/^url\(([^\)\&quot;\&apos;]+)\)/i],[&quot;kwd&quot;,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],[&quot;lang-css-kw&quot;,/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[&quot;com&quot;,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
[&quot;com&quot;,/^(?:\x3c!--|--\x3e)/],[&quot;lit&quot;,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[&quot;lit&quot;,/^#(?:[0-9a-f]{3}){1,2}\b/i],[&quot;pln&quot;,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[&quot;pun&quot;,/^[^\s\w\&apos;\&quot;]+/]]),[&quot;css&quot;]);PR.registerLangHandler(PR.createSimpleLexer([],[[&quot;kwd&quot;,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),[&quot;css-kw&quot;]);PR.registerLangHandler(PR.createSimpleLexer([],[[&quot;str&quot;,/^[^\)\&quot;\&apos;]+/]]),[&quot;css-str&quot;]);
