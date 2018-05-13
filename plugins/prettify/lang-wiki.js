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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t \xA0a-gi-z0-9]+/,null,&quot;\t \u00a0abcdefgijklmnopqrstuvwxyz0123456789&quot;],[&quot;pun&quot;,/^[=*~\^\[\]]+/,null,&quot;=*~^[]&quot;]],[[&quot;lang-wiki.meta&quot;,/(?:^^|\r\n?|\n)(#[a-z]+)\b/],[&quot;lit&quot;,/^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/],[&quot;lang-&quot;,/^\{\{\{([\s\S]+?)\}\}\}/],[&quot;lang-&quot;,/^`([^\r\n`]+)`/],[&quot;str&quot;,/^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],[&quot;pln&quot;,/^(?:\r\n|[\s\S])[^#=*~^A-Zh\{`\[\r\n]*/]]),[&quot;wiki&quot;]);
PR.registerLangHandler(PR.createSimpleLexer([[&quot;kwd&quot;,/^#[a-z]+/i,null,&quot;#&quot;]],[]),[&quot;wiki.meta&quot;]);
