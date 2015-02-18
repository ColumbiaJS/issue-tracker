## Issue Tracker

## TOC  <a name="toc"></a>

<!-- MarkdownTOC depth=0 -->

- [After Building](#after-building)
- [MEAN SCAFFOLD](#mean-scaffold)
  - [(MONGODB, EXPRESS, ANGULAR, NODE)](#mongodb-express-angular-node)
- [APPLICATION CORE](#application-core)
  - [Application Core Components](#application-core-components)
- [Express](#express)
  - [Express Middleware extracted out into separate packages in Express 4](#express-middleware-extracted-out-into-separate-packages-in-express-4)
- [Grunt Packages](#grunt-packages)
- [MONGODB](#mongodb)
  - [Importing Data into Mongo](#importing-data-into-mongo)
- [AUTH](#auth)
  - [Currently Leviathan apps use cookie-based authentication](#currently-leviathan-apps-use-cookie-based-authentication)
  - [Experimenting with Token-Based Authentication, see:](#experimenting-with-token-based-authentication-see)
  - [Implementation in Express](#implementation-in-express)
  - [More on Claims-based identity](#more-on-claims-based-identity)
  - [We also need to figure out how auth will be handled for sockets with socket.io or WebSockets and the token-based approach seems to be the one used by Firebase.  An article specific to socket.io token-based auth from the same author as above.  Socket.io has a global authorization callback and there is an npm package integrating jwt (JSON Web Tokens) with it: socketio-jwt](#we-also-need-to-figure-out-how-auth-will-be-handled-for-sockets-with-socketio-or-websockets-and-the-token-based-approach-seems-to-be-the-one-used-by-firebase--an-article-specific-to-socketio-token-based-auth-from-the-same-author-as-above--socketio-has-a-global-authorization-callback-and-there-is-an-npm-package-integrating-jwt-json-web-tokens-with-it-socketio-jwt)
- [GRUNT](#grunt)
  - [grunt-express-server and custom wait task](#grunt-express-server-and-custom-wait-task)
  - [Implemented](#implemented)
  - [Roadmap](#roadmap)
  - [Possible npm packages:](#possible-npm-packages)
- [AUTHORIZATION](#authorization)
  - [★ Login with OAuth 2.0](#★-login-with-oauth-20)
  - [★ Login with OAuth 1.0](#★-login-with-oauth-10)
  - [★ Login with Email and Password](#★-login-with-email-and-password)
  - [★ Signup](#★-signup)
  - [★ Logout](#★-logout)
- [Obtaining OAuth Keys](#obtaining-oauth-keys)
- [Deploying to Heroku](#deploying-to-heroku)
- [DEVELOPMENT PROCESS](#development-process)
  - [Semantic Versioning](#semantic-versioning)
  - [RELEASING NEW VERSIONS:](#releasing-new-versions)
  - [TESTING](#testing)
- [Versioning and releases](#versioning-and-releases)

<!-- /MarkdownTOC -->


#### After Building

After running yo columbia-angular:deploy to build this app you should see:
Your app should now be live. To view it run
  cd dist && heroku open
After app modification run:
  grunt build
Then deploy with:
  grunt buildcontrol:heroku

Use grunt build and grunt buildcontrol:heroku to deploy this app again.


MEAN SCAFFOLD
---------------------------------------------------
#### (MONGODB, EXPRESS, ANGULAR, NODE)

## APPLICATION CORE

The client-side architecture is modular and built to encourage best practices.  In this regard, it is focused on three areas in particular:

(1) angularjs-specific styles and best practices
(2) DRY, SOLID, scalable, reusable and well-structured code
(3) modularity

### Application Core Components
The 'app.core' module houses functionality core to almost any large-scale angular application, including auth and user functionality, logging, navigation (@wip should use ui-router), and search.

Core functionality that does not typically need to be called upon by other parts of the system exists within the core but is not exposed to the rest of the application directly (although of course it can be used in the main application, since angular modules do not create separate namespaces).

Core functionality that other parts of the system will frequently want to make use of is contained within the common module, which exposes a public api for accessing useful core services, including:

  * logger (for logging and notification)

## Express

### Express Middleware extracted out into separate packages in Express 4

| Express 3.0     | Express 4.0 Name | Desc  |
| --------------- | -------------    | ----- |
| bodyParser      | body-parser      |  |
| compress        | compression      |  |
| cookieSession   | cookie-session   |  |
| logger          | morgan           | logging |
| cookieParser    | cookie-parser    |  |
| session         | express-session  |  |
| favicon         | static-favicon   |  |
| response-time   | response-time    |  |
| error-handler   | errorhandler     |  |
| method-override | method-override  |  |
| timeout         | connect-timeout  |  |
| vhost           | vhost            |  |
| csrf            | csurf            |  |


## Grunt Packages

| Plugin            | Description                                  |
| ----------------- | ---------------------------------------------|
| contrib-jshint    | Validate files using jshint                  |
| contrib-uglify    | Minify JS files using UglifyJS               |
| contrib-watch     | Run tasks whenever watched files are changed |
| contrib-clean     | Clean up files and folders                   |
| contrib-copy      | Copy files and folders                       |
| contrib-concat    | Combine files into a single file             |
| contrib-cssmin    | Compress CSS files                           |
| contrib-less      | Compile LESS files to CSS                    |
| contrib-imagemin  | Minify PNG, JPG, and GIFs                    |
| contrib-compass   | Compile SASS to CSS using Compass            |
| contrib-htmlmin   | Minify HTML files                            |


## MONGODB

### Importing Data into Mongo

Importing data into Mongo using JSON makes it really easy.  Just make sure you wrap the collection in an array, as in:

```javascript
[
  {
    "firstName": "Lev",
    "lastName": "Brie",
    "email": "lev@leviathante.ch"
  },
  {
    "firstName": "James",
    "lastName": "Buchanan",
    "email": "james@leviathante.ch"
  }
]
```

`$ mongoimport --db databaseName --collection collectionName --jsonArray jsonFile.js`

To remove:

```zsh
$ mongo
$ use databaseName
$ db.collectionName.remove()
```

To drop database: `$ db.dropDatabase()`

## AUTH

It is strongly recommended that anyone wishing to work with the authentication and authorization strategies at Leviathan read through [the entire guide to Passport.js](http://passportjs.org/guide/) and become as comfortable as they possibly can with token-based authentication strategies, OAuth 2.0 (Facebook, LinkedIn, Github, etc.), and openId (the authorization strategy that Google uses internally and that powers Firefox's federated login).

### Currently Leviathan apps use cookie-based authentication

Currently Leviathan apps use cookie-based authentication to authenticate the user on every request - currently this is actually only every request requiring authentication, as every route implements its own custom authorization logic for access to resources, while the client-side app has its own service for verifying identity when needed.  This has several issues which I won't get into here, not least of which is the need to extract these disparate auth actions into a single piece of middleware to be used on every request.

### Experimenting with Token-Based Authentication, see:

* https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
* http://en.wikipedia.org/wiki/Claims-based_identity

This looks promising and like the future, but I still need to work out all of the mechanisms involved to make sure that this provides both a comprehensive and a customer-friendly solution - at first blush, it seems as if a token-based auth scheme should enable a better user experience in terms of authenticating and getting authorized, since claims-based auth can be used to authenticate against multiple applications (i.e. single sign-on) and should also therefore be capable of persisting when the application is closed as long as the browser is opened (and perhaps even beyond that as well), but there was some discussion of the closing of the current tab causing a sign-off, which would obviously not be desirable.

### Implementation in Express

Express.js uses the npm packages express-jwt and jsonwebtoken to implement the JSON Web Token standard, enabling it to serve as a Security token service (STS) for the application, although passport allows us to use other [OAuth] providers for this service as well (Google, Github, Facebook, etc.), which is preferable in terms of security:

> [To better understand the concept of security token service, consider the analogy of a night club with a doorman. The doorman wants to prevent under-age patrons from entry. To facilitate this he requests a patron to present a driver's license, health insurance card or other identification (the token) that has been issued by a trusted third party (the security token service) such as the provincial or state vehicle license department, health department or insurance company. The nightclub is thus alleviated of the responsibility of determining the patron's age. It only has to trust the issuing authority (and of course make its own judgment of the authenticity of the token presented). With these two steps completed the nightclub has successfully authenticated the patron with regard to the claim that he or she is of legal drinking age.](http://en.wikipedia.org/wiki/Claims-based_identity)

### More on Claims-based identity

> Claims-based identity has the potential to simplify authentication logic for individual software applications, because those applications don't have to provide mechanisms for account creation, password creation, reset, and so on. Furthermore, claims-based identity enables applications to know certain things about the user, without having to interrogate the user to determine those facts. The facts, or claims, are transported in an "envelope" called a secure token.

> Claims-based identity can greatly simplify the authentication process for the user because he or she doesn't have to sign in multiple times to multiple applications. A single sign in creates the token which is then used to authenticate against multiple applications, or web sites. In addition, because certain facts (claims) are packaged with the token, the user does not have to tell each individual application those facts repeatedly - for instance, by answering similar questions or completing similar forms.

> The name "claims-based identity" can be confusing at first because it seems like a misnomer. Attaching the concept of claims to the concept of identity appears to be combining authentication (determination of identity) with authorization (what the identified subject may and may not do). However a closer examination reveals that this is not the case. Claims are not what the subject can and cannot do. They are what the subject is or is not. It is up to the application receiving the incoming claim to map the is/is not claims to the may/may not rules of the application. In traditional systems there is often confusion about the differences and similarities between what a user is/is not and what the user may/may not do. Claims-based identity makes that distinction clear.

[See Claims-Based Identity](http://en.wikipedia.org/wiki/Claims-based_identity)

### We also need to figure out how auth will be handled for sockets with socket.io or WebSockets and the token-based approach seems to be the one used by Firebase.  [An article specific to socket.io token-based auth from the same author as above](https://auth0.com/blog/2014/01/15/auth-with-socket-io/).  Socket.io has a global authorization callback and there is an npm package integrating jwt (JSON Web Tokens) with it: [socketio-jwt](https://github.com/auth0/socketio-jwt)

## GRUNT

### grunt-express-server and custom wait task

In order to ensure that the express server has time to reload on grunt watches where files change, a custom grunt wait task is registered with a set timeout so that the server has time to reload (without this, it fails to livereload in the browser).

### Implemented

### Roadmap
* auth with passport
* look into jwt (jsonwebtoken - npm jsonwebtoken, express-jwt, socketio-jwt, etc.)


### Possible npm packages:
* grunt-bower-install
* gm
* connect-mongo
* assetmanager
* async
* dependable
* consolidate
* forever
* nodemailer
* view-helpers
* helmet
* glob
* load-grunt-tasks
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* connect-mongo
* compression
* errorhandler
* [express-jwt](https://github.com/auth0/express-jwt)
* [socket.io](https://github.com/Automattic/socket.io)
* [socketio-jwt](https://github.com/auth0/socketio-jwt)
* [composable-middleware](https://github.com/randymized/composable-middleware)
* [grunt-google-cdn](https://github.com/btford/grunt-google-cdn)
* [grunt-newer](https://github.com/tschaub/grunt-newer)
* [grunt-ngmin](https://github.com/btford/grunt-ngmin)
* grunt-svgmin
* grunt-rev
* grunt-usemin[https://github.com/yeoman/grunt-usemin]
* grunt-node-inspector
* grunt-nodemon
* grunt-angular-templater
* grunt-dom-munger
* [grunt-injector](https://github.com/klei/grunt-injector)
* grunt-mocha-test
* grunt-contrib-sass
* jit-grunt
* open
* grunt-open
* supertest
* should
* [grunt-sassdoc](https://github.com/SassDoc/grunt-sassdoc)


## AUTHORIZATION

The authorization strategy is token-based, relying on *Token-Based Authentication* with
[JSON Web Tokens](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/), and handled by the [satellizer module](https://github.com/sahat/satellizer/).

Authentication is carried out inside the core under the auth directory. Similarly, on the server side, there is an auth directory in which most of the necessary server-side functionality is implemented, although some of the functionality is handled in the api/user directory, since it is specific to the user.

Additional info can be found here:
##### [★ Login with OAuth 2.0](https://github.com/sahat/satellizer/wiki/Login-with-OAuth-2.0)
##### [★ Login with OAuth 1.0](https://github.com/sahat/satellizer/wiki/Login-with-OAuth-1.0)
##### [★ Login with Email and Password](https://github.com/sahat/satellizer/wiki/Login-with-Email-and-Password)
##### [★ Signup](https://github.com/sahat/satellizer/wiki/Signup)
##### [★ Logout](https://github.com/sahat/satellizer/wiki/Logout)

## Obtaining OAuth Keys

<img src="http://images.google.com/intl/en_ALL/images/srpr/logo6w.png" width="150">
- Visit [Google Cloud Console](https://cloud.google.com/console/project)
- Click **CREATE PROJECT** button
- Enter *Project Name*, then click **CREATE**
- Then select *APIs & auth* from the sidebar and click on *Credentials* tab
- Click **CREATE NEW CLIENT ID** button
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: *http://localhost:3000*
 - **Authorized redirect URI**: *http://localhost:3000*

**:exclamation: Note:** Make sure you have turned on **Contacts API** and
**Google+ API** in the *APIs* tab.

**:exclamation: Note:** You must also specify the Product Name on the consent screen for the app in teh developer's console.  If you didn't do so when creating it, or didn't provide the proper callback url, you might have to create a new client id.

<hr>

<img src="http://www.doit.ba/img/facebook.jpg" width="150">
- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **Apps > Create a New App** in the navigation bar
- Enter *Display Name*, then choose a category, then click **Create app**
- Click on *Settings* on the sidebar, then click **+ Add Platform**
- Select **Website**
- Enter *http://localhost:3000* for *Site URL*

<hr>

<img src="http://indonesia-royal.com/wp-content/uploads/2014/06/twitter-bird-square-logo.jpg" height="70">
- Sign in at [https://dev.twitter.com](https://dev.twitter.com/)
- From the profile picture dropdown menu select **My Applications**
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: *http://127.0.0.1:3000*
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**


## Deploying to Heroku

```$ heroku create```
```$ git push heroku master```
```$ heroku ps:scale web=1```
```$ heroku open```

Create a Procfile with ```web: node server.js```
Set the config vars for heroku with ```$ heroku config:set ENV_VAR=env_var_value```
(this should include everything in .env -> APP_SECRET, TOKEN_SECRET, MONGOLAB_URI, etc.)

## DEVELOPMENT PROCESS

### Semantic Versioning

This project uses semantic versioning.  For a very good explanation of semver syntax and semantics, see [the node-semver npm module's github page](https://github.com/npm/node-semver). Also see the full semver spec at [http://semver.org/](http://semver.org/)

* commit messages: cf. [Git Commit Guidelines](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md) based on teh longer [AngularJS Git Commit Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

### RELEASING NEW VERSIONS:

Releasing new versions consists of:

1. bump the version in your `package.json` file.
2. stage the package.json file's change.
3. commit that change with a message like "release 0.6.22".
4. create a new git tag for the release.
5. push the changes out to github.
6. also push the new tag out to github.
7. create a .zip release on github.
8. publish the new version to npm.

use [grunt-release](https://github.com/geddski/grunt-release) to automate these steps

### TESTING

grunt tasks are defined for client-side, server-side, and end-to-end tests.

Server-side tests rely on supertest, mocha, should, and chai. Will most likely use sinon and sinon-chai soon as well.

## Versioning and releases

Use: ```$ grunt bump:releaseType``` to create new releases with changelogs.
Release type should be one of patch, minor, major, or prerelease

This project uses semantic versioning and github for releases.  Releases can be created automatically using the grunt bump task, which will create a conventional changelog as well as a release.  For more, see:

[grunt-release](https://github.com/geddski/grunt-release)
[github on creating releases](https://help.github.com/articles/creating-releases/)
[grunt-conventional-changelog](https://github.com/btford/grunt-conventional-changelog)
[commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)
[node-semver](https://github.com/npm/node-semver)
