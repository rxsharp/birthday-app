# Birthday App
Simple birthday app with Rails, React, and MySQL.

## Installation
 - bundle install
 - yarn install
## MySQL Configuration
Add the following to config/application.yml
```
mysql_pw: "YOUR_MYSQL_PASSWORD"
mysql_user: "YOUR_MYSQL_USERNAME"
```
***
## Serve on development
### Standard
 - rails s
### Dynamic (with live reload)
 - gem install foreman
 - foreman start -f Procfile.dev
