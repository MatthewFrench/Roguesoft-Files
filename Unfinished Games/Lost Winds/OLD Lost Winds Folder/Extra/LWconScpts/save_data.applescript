--'DATA IS USER LOCAL, USE GMOD FOR GLOBAL DATA :)
--BEGIN APPLESCRIPT uid$ p$ v$
--set data value
return do shell script "curl http://www.redrasor.com/gmmmo/saveDTA.php -d id=" & uid & " -d p=" & p & " -d v=" & v
--END APPLESCRIPT success$