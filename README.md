# ionic2-threejs-back-end
The back-end for Ionic2-threejs based on Node js
copy the files into a server

install Nodejs v6.9.4  [https://nodejs.org/](https://nodejs.org/) (if you don't have)
install MongoDB v3.4.1 [https://www.mongodb.com](https://www.mongodb.com/download-center?jmp=nav#community) (if you don't have)

install packed forever globally (if you don't have)

```
$ npm install forever -g OR $ sudo npm install forever -g
```
to starts mongod as a daemon run command

```bash
mongod --fork --logpath /var/log/mongodb.log
```
then

```bash
npm install
```
to start Nodejs server run command

```bash
npm run start
```
to stop Nodejs server run command

```bash
npm run stop
```