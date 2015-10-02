--BEGIN APPLESCRIPT uid$
--logout
return do shell script "curl http://www.redrasor.com/gmmmo/logout.php -d id=" & uid
--END APPLESCRIPT success$