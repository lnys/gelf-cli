gelf-cli
=============
gelf-cli - Graylog2 client library for Node.js. Pro - because of code-quality. GELF - The Graylog Extended Log Format.

## Installation
```npm install -g gelf-cli``` (**ALL** node.js versions are supported :)

## Examples
```
gelf-cli send -l emergency hello,world!
gelf-cli send -l alert hello,world!
gelf-cli send -l critical hello,world!
gelf-cli send -l error hello,world!
gelf-cli send -l warning hello,world!
gelf-cli send -l notice hello,world!
gelf-cli send -l info hello,world!
gelf-cli send -l debug hello,world!
```


#### Contributors

- [Ail2vu](https://github.com/lnys)

## License
The MIT License (MIT)

Copyright (c) 2013-2018 Ail2vu
