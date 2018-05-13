/*

 Copyright (C) 2015 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[ \n\r\t\v\f\0]+/,null,&quot; \n\r\t\v\f\x00&quot;],[&quot;str&quot;,/^&quot;(?:[^&quot;\\]|(?:\\.)|(?:\\\((?:[^&quot;\\)]|\\.)*\)))*&quot;/,null,&apos;&quot;&apos;]],[[&quot;lit&quot;,/^(?:(?:0x[\da-fA-F][\da-fA-F_]*\.[\da-fA-F][\da-fA-F_]*[pP]?)|(?:\d[\d_]*\.\d[\d_]*[eE]?))[+-]?\d[\d_]*/,null],[&quot;lit&quot;,/^-?(?:(?:0(?:(?:b[01][01_]*)|(?:o[0-7][0-7_]*)|(?:x[\da-fA-F][\da-fA-F_]*)))|(?:\d[\d_]*))/,null],[&quot;lit&quot;,/^(?:true|false|nil)\b/,null],[&quot;kwd&quot;,/^\b(?:__COLUMN__|__FILE__|__FUNCTION__|__LINE__|#available|#else|#elseif|#endif|#if|#line|arch|arm|arm64|associativity|as|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|dynamicType|else|enum|extension|fallthrough|final|for|func|get|guard|import|indirect|infix|init|inout|internal|i386|if|in|iOS|iOSApplicationExtension|is|lazy|left|let|mutating|none|nonmutating|operator|optional|OSX|OSXApplicationExtension|override|postfix|precedence|prefix|private|protocol|Protocol|public|required|rethrows|return|right|safe|self|set|static|struct|subscript|super|switch|throw|try|Type|typealias|unowned|unsafe|var|weak|watchOS|while|willSet|x86_64)\b/,
null],[&quot;com&quot;,/^\/\/.*?[\n\r]/,null],[&quot;com&quot;,/^\/\*[\s\S]*?(?:\*\/|$)/,null],[&quot;pun&quot;,/^&lt;<=|<=|<<|>&gt;=|&gt;=|&gt;&gt;|===|==|\.\.\.|&amp;&amp;=|\.\.<|!==|!=|&=|~=|~|\(|\)|\[|\]|{|}|@|#|;|\.|,|:|\|\|=|\?\?|\|\||&&|&\*|&\+|&-|&=|\+=|-=|\ =|\*="|\^=|%=|\|=|-">|`|==|\+\+|--|\/|\+|!|\*|%|<|>|&amp;|\||\^|\?|=|-|_/,null],[&quot;typ&quot;,/^\b(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null]]),[&quot;swift&quot;]);
</|></|!==|!=|&=|~=|~|\(|\)|\[|\]|{|}|@|#|;|\.|,|:|\|\|=|\?\?|\|\||&&|&\*|&\+|&-|&=|\+=|-=|\></=|<=|<<|>