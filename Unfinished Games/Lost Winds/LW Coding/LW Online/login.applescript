--BEGIN APPLESCRIPT pass$ user$
--login
return do shell script "curl http://redrasor.com/gmmmo/login.php -d usr=" & user & " -d pass=" & pass
--END APPLESCRIPT uid$