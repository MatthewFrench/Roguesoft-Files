--BEGIN APPLESCRIPT uid$
--get xyloc
return do shell script "curl http://www.redrasor.com/gmmmo/xy.php -d id=" & uid
--END APPLESCRIPT xyloc$