/*

 Copyright (C) 2015 Chris Morgan

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
PR.registerLangHandler(PR.createSimpleLexer([],[[&quot;pln&quot;,/^[\t\n\r \xA0]+/],[&quot;com&quot;,/^\/\/.*/],[&quot;com&quot;,/^\/\*[\s\S]*?(?:\*\/|$)/],[&quot;str&quot;,/^b&quot;(?:[^\\]|\\(?:.|x[\da-fA-F]{2}))*?&quot;/],[&quot;str&quot;,/^&quot;(?:[^\\]|\\(?:.|x[\da-fA-F]{2}|u\{\[\da-fA-F]{1,6}\}))*?&quot;/],[&quot;str&quot;,/^b?r(#*)\&quot;[\s\S]*?\&quot;\1/],[&quot;str&quot;,/^b&apos;([^\\]|\\(.|x[\da-fA-F]{2}))&apos;/],[&quot;str&quot;,/^&apos;([^\\]|\\(.|x[\da-fA-F]{2}|u\{[\da-fA-F]{1,6}\}))&apos;/],[&quot;tag&quot;,/^&apos;\w+?\b/],[&quot;kwd&quot;,/^(?:match|if|else|as|break|box|continue|extern|fn|for|in|if|impl|let|loop|pub|return|super|unsafe|where|while|use|mod|trait|struct|enum|type|move|mut|ref|static|const|crate)\b/],
[&quot;kwd&quot;,/^(?:alignof|become|do|offsetof|priv|pure|sizeof|typeof|unsized|yield|abstract|virtual|final|override|macro)\b/],[&quot;typ&quot;,/^(?:[iu](8|16|32|64|size)|char|bool|f32|f64|str|Self)\b/],[&quot;typ&quot;,/^(?:Copy|Send|Sized|Sync|Drop|Fn|FnMut|FnOnce|Box|ToOwned|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator|Option|Some|None|Result|Ok|Err|SliceConcatExt|String|ToString|Vec)\b/],[&quot;lit&quot;,/^(self|true|false|null)\b/],
[&quot;lit&quot;,/^\d[0-9_]*(?:[iu](?:size|8|16|32|64))?/],[&quot;lit&quot;,/^0x[a-fA-F0-9_]+(?:[iu](?:size|8|16|32|64))?/],[&quot;lit&quot;,/^0o[0-7_]+(?:[iu](?:size|8|16|32|64))?/],[&quot;lit&quot;,/^0b[01_]+(?:[iu](?:size|8|16|32|64))?/],[&quot;lit&quot;,/^\d[0-9_]*\.(?![^\s\d.])/],[&quot;lit&quot;,/^\d[0-9_]*(?:\.\d[0-9_]*)(?:[eE][+-]?[0-9_]+)?(?:f32|f64)?/],[&quot;lit&quot;,/^\d[0-9_]*(?:\.\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)(?:f32|f64)?/],[&quot;lit&quot;,/^\d[0-9_]*(?:\.\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)?(?:f32|f64)/],
[&quot;atn&quot;,/^[a-z_]\w*!/i],[&quot;pln&quot;,/^[a-z_]\w*/i],[&quot;atv&quot;,/^#!?\[[\s\S]*?\]/],[&quot;pun&quot;,/^[+\-/*=^&amp;|!&lt;&gt;%[\](){}?:.,;]/],[&quot;pln&quot;,/./]]),[&quot;rust&quot;]);
