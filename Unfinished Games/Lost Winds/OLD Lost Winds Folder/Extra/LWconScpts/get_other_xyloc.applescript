--BEGIN APPLESCRIPT uid$
--get other player's x and y (to place on screen)
return do shell script "curl http://www.redrasor.com/gmmmo/exy.php -d id=" & uid
--END APPLESCRIPT exyloc$