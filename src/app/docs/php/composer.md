Download and install composer on MAC
```
curl -sS "https://getcomposer.org/installer" | php
```

Make composer global 
```
mv composer.phar /usr/local/bin/
```

Making alias for composer 
```
vim ~/.bash_profile
```

Entry in `.bash_profile`
```
alias composer="php /usr/local/bin/composer.phar"
```

```
https://www.youtube.com/watch?v=wRq7dxvCR7U
```


VirtualHost configuration 
```
# Virtual Host configuration
<VirtualHost *:80>
ServerName localhost
DocumentRoot “/Applications/XAMPP/xamppfiles/htdocs”
<Directory “/Applications/XAMPP/xamppfiles/htdocs”>
	Options Indexes FollowSymLinks Includes execCGI
	AllowOverride All
	Require all granted
</Directory>
</VirtualHost>

<VirtualHost *:80>
ServerName dev.local
DocumentRoot “/Users/rajkeshwar/RAJ_WORKS/php”
<Directory “/Users/rajkeshwar/RAJ_WORKS/php”>
	Options Indexes FollowSymLinks Includes execCGI
	AllowOverride All
	Require all granted
</Directory>
ErrorLog “logs/dev.local-error_log”
</VirtualHost>
```


https://coolestguidesontheplanet.com/install-apache-mysql-php-and-phpmyadmin-on-macos-high-sierra-10-13/

