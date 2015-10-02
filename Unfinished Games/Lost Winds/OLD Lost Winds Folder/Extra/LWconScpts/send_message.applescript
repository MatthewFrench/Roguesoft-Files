--BEGIN APPLESCRIPT uid$ m$
--send message
set ditd to text item delimiters
set text item delimiters to " "
set textItems to text items of m
set text item delimiters to "\\ "
if (class of m is string) then
	set m to textItems as string
else -- if (class of TheString is Unicode text) then
	set m to textItems as Unicode text
end if
set text item delimiters to ditd

return do shell script "curl http://redrasor.com/gmmmo/talk.php -d id=" & uid & " -d m=" & m
--END APPLESCRIPT success$