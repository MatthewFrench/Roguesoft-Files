--BEGIN APPLESCRIPT exyloc$ fetch xy
--parce exyloc

set pid to ((fetch - 1) * 2) + xy
set ditd to text item delimiters
set text item delimiters to ":"
set ti to text items of exyloc
set foo to item pid of ti
return foo as number
--END APPLESCRIPT loc