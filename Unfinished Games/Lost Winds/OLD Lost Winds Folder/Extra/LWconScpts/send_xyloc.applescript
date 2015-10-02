--'loc$ is meant to be the card number
--BEGIN APPLESCRIPT uid$ x y loc$
--send x and y
return do shell script "curl http://www.redrasor.com/gmmmo/sxy.php -d id=" & uid & " -d x=" & x & " -d y=" & y & " -d loc=" & loc
--END APPLESCRIPT