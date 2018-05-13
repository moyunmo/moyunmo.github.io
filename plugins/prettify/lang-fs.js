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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;com&quot;,/^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\&apos;]*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,null,&quot;#&quot;],[&quot;str&quot;,/^(?:\&quot;(?:[^\&quot;\\]|\\[\s\S])*(?:\&quot;|$)|\&apos;(?:[^\&apos;\\]|\\[\s\S])(?:\&apos;|$))/,null,&quot;\&quot;&apos;&quot;]],[[&quot;com&quot;,/^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],[&quot;kwd&quot;,/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
[&quot;lit&quot;,/^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[&quot;pln&quot;,/^(?:[a-z_][\w&apos;]*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],[&quot;pun&quot;,/^[^\t\n\r \xA0\&quot;\&apos;\w]+/]]),[&quot;fs&quot;,&quot;ml&quot;]);
