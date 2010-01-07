#/bin/sh

staticmatic build .
cp site/*.html ~/public_html/
cp site/images/* ~/public_html/images/
cp site/javascripts/* ~/public_html/javascripts/
cp site/stylesheets/* ~/public_html/stylesheets/
