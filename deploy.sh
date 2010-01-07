#/bin/sh

staticmatic build .
rsync -rc site/ ~/public_html/
