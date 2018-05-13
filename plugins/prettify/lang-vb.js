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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0\u2028\u2029]+/,null,&quot;\t\n\r \u00a0\u2028\u2029&quot;],[&quot;str&quot;,/^(?:[\&quot;\u201C\u201D](?:[^\&quot;\u201C\u201D]|[\&quot;\u201C\u201D]{2})(?:[\&quot;\u201C\u201D]c|$)|[\&quot;\u201C\u201D](?:[^\&quot;\u201C\u201D]|[\&quot;\u201C\u201D]{2})*(?:[\&quot;\u201C\u201D]|$))/i,null,&apos;&quot;\u201c\u201d&apos;],[&quot;com&quot;,/^[\&apos;\u2018\u2019](?:_(?:\r\n?|[^\r]?)|[^\r\n_\u2028\u2029])*/,null,&quot;&apos;\u2018\u2019&quot;]],[[&quot;kwd&quot;,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,
null],[&quot;com&quot;,/^REM\b[^\r\n\u2028\u2029]*/i],[&quot;lit&quot;,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&amp;H[0-9A-F]+|&amp;O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[&quot;pln&quot;,/^(?:(?:[a-z]|_\w)\w*(?:\[[%&amp;@!#]+\])?|\[(?:[a-z]|_\w)\w*\])/i],[&quot;pun&quot;,/^[^\w\t\n\r \&quot;\&apos;\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[&quot;pun&quot;,/^(?:\[|\])/]]),[&quot;vb&quot;,
&quot;vbs&quot;]);
