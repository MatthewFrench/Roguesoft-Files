--BEGIN APPLESCRIPT xyloc$ fetch
--parce xyloc
set ditd to text item delimiters
set text item delimiters to ":"
set ti to text items of xyloc
set foo to item fetch of ti
return foo
--END APPLESCRIPT