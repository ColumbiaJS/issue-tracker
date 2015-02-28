<a name="0.1.0"></a>
## 0.1.0 (2015-02-28)


#### Bug Fixes

* **Gruntfile:** add missing require statements at top ([30ec9806](http://github.com/default/issue-tracker/commit/30ec9806e674e12ed5ae10a5996209ccdc7c01a1))
* **Gruntfile.js:** add jit mapping for grunt-build-control to get it working ([4709df6e](http://github.com/default/issue-tracker/commit/4709df6e9f55437ce0802ec98b051e9f655a382f))
* **Issue.js:** wrong api url, this model needs to be refactored now that DataService has mostly ([2bcd8e65](http://github.com/default/issue-tracker/commit/2bcd8e654ccebe53b54fcfd3c431312e56fe9836))
* **cu-content-wrapper:**
  * refactor and simplify content wrapper so it doesn't contain angular material col ([c0c5d5a5](http://github.com/default/issue-tracker/commit/c0c5d5a5bb43111a68657fba2428d209f0f7a695))
  * remove ng-material layout div - needs to be used by each partial ([eebb6c30](http://github.com/default/issue-tracker/commit/eebb6c309264f66b11c71df3bd68f9b11a823db1))
* **index.js:** fix server issues index with proper Router ([013243da](http://github.com/default/issue-tracker/commit/013243daf767b41091013e0f30f7dd581bf493a3))


#### Features

* **CurrentIssue:** service for sharing data about current issue and its edit state ([07e14f98](http://github.com/default/issue-tracker/commit/07e14f986c47a52fad5912b35f060dd19a56daa5))
* **DataService:** create DataService for handling calls to the api ([6765eca4](http://github.com/default/issue-tracker/commit/6765eca459c41f4f55e193f5d58facd53bc09614))
* **IssueDetail:** display and manage issue detail views ([4d778bc2](http://github.com/default/issue-tracker/commit/4d778bc23469ef77a7d5c10fb7e271c00fac86d7))
* **IssueForm:** form can display, update, and create issues ([b72b3793](http://github.com/default/issue-tracker/commit/b72b379348a98a264efb7674d4c17114d199da4b))
* **IssueList:** master-detail issue list view with $mdSidenav ([cf8e30e4](http://github.com/default/issue-tracker/commit/cf8e30e42192af3f08607006872560a7078d978a))
* **MainCtrl:** add controller for handling main content using material content and sidenav ([3c0be33a](http://github.com/default/issue-tracker/commit/3c0be33ae39d31a73097e31e35f8ccb21ac0fc32))
* **SidenavCtrl.js:** add SidenavCtrl for handling conditional material sidenav menu ([2b10feb1](http://github.com/default/issue-tracker/commit/2b10feb1fda116791d1c086e70e14f2d29b6d84a))
* **bower:** new dependencies for new app functionality: ([6e85e918](http://github.com/default/issue-tracker/commit/6e85e9180f8aa9fa401ba9aa52e1bcb913ccdfc4))
* **config.js:** add MainCtrl to core config view ([a4780872](http://github.com/default/issue-tracker/commit/a478087206b91c637cbf0b37de4af0836cbb5e97))
* **cu-content-wrapper.directive.js:** provide content-wrapper directive for wrapping entire main content area ([73758ba2](http://github.com/default/issue-tracker/commit/73758ba295cc30b3a3524eb607d50f921dce1bc1))
* **cu-content-wrapper.html:** view for main content-wrapper ([8380a5e6](http://github.com/default/issue-tracker/commit/8380a5e646b6d986f3eea1eecee3020709053c7d))
* **cu-footer.directive.js:** add footer directive to app ([7137d7a0](http://github.com/default/issue-tracker/commit/7137d7a0c90c8d49994d63df1ef58cb55211703a))
* **expanding-search:** add expanding search component ([64dcb18a](http://github.com/default/issue-tracker/commit/64dcb18a7865287cdab9ff3c8ec63df89f01a04e))
* **filterSelect:** add filterSelect directive to enable ui.bootstrap select to work properly ([208b8037](http://github.com/default/issue-tracker/commit/208b803732892ec337449249e72aee3ab61b8593))
* **index.html:** replace ui-view with new cu-content-wrapper and replace footer with cu-footer, a ([1a3cde10](http://github.com/default/issue-tracker/commit/1a3cde10a420c8d27d5035fd91e37fd53e5c0e0a))
* **issue-form:** wrap up issue-form template and controller in simple directive ([cdb18704](http://github.com/default/issue-tracker/commit/cdb1870467d84fc8793214891efcaa1adb4ff39d))
* **issue-list:** fix up and add basic features for issue-list ([d649c24a](http://github.com/default/issue-tracker/commit/d649c24aa2f6fa49bf2af73d76d3a061cd488597))
* **issue.config:** complete routing for issues ([99b49f38](http://github.com/default/issue-tracker/commit/99b49f38e939ae0d25f2bdce32cc64ef8dba4a4b))
* **issue.model:** new issue schema fields, new static and pre-save hook ([abe7e209](http://github.com/default/issue-tracker/commit/abe7e209c4c6ca9ecb2dc3588c135eeee8c4ca25))
* **issues:**
  * add first implementation of client-side code for issues, currently list view ([18a2f25a](http://github.com/default/issue-tracker/commit/18a2f25a2df340d5d668d2f0065f85fcbe81c679))
  * add api for handling issues ([7694dc21](http://github.com/default/issue-tracker/commit/7694dc21566333956abde66c53ef21f2546be2bc))
* **issues.controller:** flesh out issues api ([498be4b8](http://github.com/default/issue-tracker/commit/498be4b82a66f066412b2bd1f63c12c997bfecaa))
* **md-button:** make add button on issue-list white, move to right, use vars on material_overrid ([859c8a01](http://github.com/default/issue-tracker/commit/859c8a011d7ebebe549de0556b3cb3cb35589598))
* **mongoose.js:** register issues with mongoose, seed issues to db on startup ([4e3135cb](http://github.com/default/issue-tracker/commit/4e3135cb677048f0f504a477805c05fdb0a1bdff))
* **nav:** add issues to nav menu, uncomment lv-nav-menu ([991dcc5b](http://github.com/default/issue-tracker/commit/991dcc5b2e158a549af473f2c84f56b263322573))
* **routes.js:** add routing for issues api ([0d19e65e](http://github.com/default/issue-tracker/commit/0d19e65e556769d6bc6e41562c83948dd76cb0c7))

