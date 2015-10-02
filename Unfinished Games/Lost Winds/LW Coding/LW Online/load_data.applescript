--'DATA IS USER LOCAL, USE GMOD FOR GLOBAL DATA :)
--BEGIN APPLESCRIPT uid$ p$
--get data value
return do shell script "curl http://www.redrasor.com/gmmmo/data.php -d id=" & uid & " -d p=" & p
--END APPLESCRIPT data$