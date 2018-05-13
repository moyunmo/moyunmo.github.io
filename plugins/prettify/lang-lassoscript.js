/*

 Copyright (C) 2013 Eric Knibbe

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
PR.registerLangHandler(PR.createSimpleLexer([[&quot;pln&quot;,/^[\t\n\r \xA0]+/,null,&quot;\t\n\r \u00a0&quot;],[&quot;str&quot;,/^\&apos;(?:[^\&apos;\\]|\\[\s\S])*(?:\&apos;|$)/,null,&quot;&apos;&quot;],[&quot;str&quot;,/^\&quot;(?:[^\&quot;\\]|\\[\s\S])*(?:\&quot;|$)/,null,&apos;&quot;&apos;],[&quot;str&quot;,/^\`[^\`]*(?:\`|$)/,null,&quot;`&quot;],[&quot;lit&quot;,/^0x[\da-f]+|\d+/i,null,&quot;0123456789&quot;],[&quot;atn&quot;,/^#\d+|[#$][a-z_][\w.]*|#![ \S]+lasso9\b/i,null,&quot;#$&quot;]],[[&quot;tag&quot;,/^[[\]]|<\?(?:lasso(?:script)?|=)|\?>|noprocess\b|no_square_brackets\b/i],[&quot;com&quot;,/^\/\/[^\r\n]*|\/\*[\s\S]*?\*\//],
[&quot;atn&quot;,/^-(?!infinity)[a-z_][\w.]*|\.\s*&apos;[a-z_][\w.]*&apos;/i],[&quot;lit&quot;,/^\d*\.\d+(?:e[-+]?\d+)?|infinity\b|NaN\b/i],[&quot;atv&quot;,/^::\s*[a-z_][\w.]*/i],[&quot;lit&quot;,/^(?:true|false|none|minimal|full|all|void|and|or|not|bw|nbw|ew|new|cn|ncn|lt|lte|gt|gte|eq|neq|rx|nrx|ft)\b/i],[&quot;kwd&quot;,/^(?:error_code|error_msg|error_pop|error_push|error_reset|cache|database_names|database_schemanames|database_tablenames|define_tag|define_type|email_batch|encode_set|html_comment|handle|handle_error|header|if|inline|iterate|ljax_target|link|link_currentaction|link_currentgroup|link_currentrecord|link_detail|link_firstgroup|link_firstrecord|link_lastgroup|link_lastrecord|link_nextgroup|link_nextrecord|link_prevgroup|link_prevrecord|log|loop|namespace_using|output_none|portal|private|protect|records|referer|referrer|repeating|resultset|rows|search_args|search_arguments|select|sort_args|sort_arguments|thread_atomic|value_list|while|abort|case|else|if_empty|if_false|if_null|if_true|loop_abort|loop_continue|loop_count|params|params_up|return|return_value|run_children|soap_definetag|soap_lastrequest|soap_lastresponse|tag_name|ascending|average|by|define|descending|do|equals|frozen|group|handle_failure|import|in|into|join|let|match|max|min|on|order|parent|protected|provide|public|require|returnhome|skip|split_thread|sum|take|thread|to|trait|type|where|with|yield|yieldhome)\b/i],
[&quot;typ&quot;,/^(?:array|date|decimal|duration|integer|map|pair|string|tag|xml|null|boolean|bytes|keyword|list|locale|queue|set|stack|staticarray|local|var|variable|global|data|self|inherited|currentcapture|givenblock)\b|^\.\.?/i],[&quot;pln&quot;,/^[a-z_][\w.]*(?:=\s*(?=\())?/i],[&quot;pun&quot;,/^:=|[-+*\/%=&lt;&gt;&amp;|!?\\]/]]),[&quot;lasso&quot;,&quot;ls&quot;,&quot;lassoscript&quot;]);
</\?(?:lasso(?:script)?|=)|\?>