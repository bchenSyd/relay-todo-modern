# re-compile
```
$ find . -name __generated__  -print
./js/components/__generated__
./js/mutations/__generated__
./js/__generated__

find . -name __generated__  -print | xargs rm -rf
or
find . -name __generated__ -exec rm -rf {} \;
```
make sure watchman.exe is killed from explorer
```
The latest alpha build is available here:
http://bit.ly/watchmanwinalpha
D:\__work\relay\packages\relay-compiler\codegen\RelayCodegenWatcher.js
const watchman = require('fb-watchman');

class PromiseClient {
  _client: any;

  constructor() {
    this._client = new watchman.Client();
  }

```


# source 
  ```
  RelayNetwork.js 

  function create(fetch, subscribe) {
    function requestStream(operation, variables, cacheConfig, _ref) {
          fetch(operation, variables, cacheConfig).then(function (payload) {
              try {
                  relayPayload = normalizePayload(operation, variables, payload);
              } catch (err) {
                  onError && onError(err);
                  return;
              }
              _onNext && _onNext(relayPayload);
  }



  function normalizeRelayPayload(selector, payload, errors) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };

    var source = new (require('./RelayInMemoryRecordSource'))();
    source.set(ROOT_ID, require('./RelayModernRecord').create(ROOT_ID, ROOT_TYPE));
    var fieldPayloads = require('./RelayResponseNormalizer').normalize(source, selector, payload, options);  // traverse
    return {
      errors: errors,
      fieldPayloads: fieldPayloads,
      source: source
    };
  }

  // webpack:///./~/relay-runtime/lib/RelayResponseNormalizer.js
  RelayResponseNormalizer.prototype._traverseSelections = function _traverseSelections(selections, record, data) {
      var _this = this;

      selections.forEach(function (selection) {
        if (selection.kind === SCALAR_FIELD || selection.kind === LINKED_FIELD) {
          _this._normalizeField(selection, record, data);
        } else if (selection.kind === CONDITION) {
          var conditionValue = _this._getVariableValue(selection.condition);
          if (conditionValue === selection.passingValue) {
            _this._traverseSelections(selection.selections, record, data);
          }
        } else if (selection.kind === INLINE_FRAGMENT) {
          var typeName = require('./RelayModernRecord').getType(record);
          if (typeName === selection.type) {
            _this._traverseSelections(selection.selections, record, data);
          }
        } else if (selection.kind === LINKED_HANDLE || selection.kind === SCALAR_HANDLE) {
          var args = selection.args ? getArgumentValues(selection.args, _this._variables) : {};

          var fieldKey = require('./formatStorageKey')(selection.name, args);
          var handleKey = require('./getRelayHandleKey')(selection.handle, selection.key, selection.name);
          if (selection.filters) {
            var filterValues = require('./RelayStoreUtils').getHandleFilterValues(selection.args || [], selection.filters, _this._variables);
            handleKey = require('./formatStorageKey')(handleKey, filterValues);
          }
          _this._handleFieldPayloads.push({
            args: args,
            dataID: require('./RelayModernRecord').getDataID(record),
            fieldKey: fieldKey,
            handle: selection.handle,
            handleKey: handleKey
          });
        } else {
          require('fbjs/lib/invariant')(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s`.', selection.kind);
        }
      });
    };
  ```

  #viewerHandler
  ```
  D:\relay\packages\relay-runtime\handlers\viewer\RelayViewerHandler.js
    // viewer: synthesize a record at the canonical viewer id, copy its fields
    // from the server record, and delete the server record link to speed up GC.
    const clientViewer =
      store.get(VIEWER_ID) || store.create(VIEWER_ID, VIEWER_TYPE);
    clientViewer.copyFieldsFrom(serverViewer);
    record.setValue(null, payload.fieldKey);
    //getRelayHandleKey.js    { return '__' + fieldName + '_' + handleName; }
    record.setLinkedRecord(clientViewer, payload.handleKey);
    /* result:
      {
        client:root:{
          __id:'client:root
          __typename:'__Root'
          viewer: null // record.setValue(null, payload.fieldKey); server record is deleted;
          __viewer_viewer: {__ref:'client:root:viewer'}
        }
        client:root:viewer  {
          __id:'client:root:viewer'
          __typename:'Viewer
          user:{
            __ref:'User:me'
          }
        }
      }
    */
  ```

# watchman
  get latest windows build [here](https://github.com/facebook/watchman/issues/475 )
  or click [here directly](https://ci.appveyor.com/api/buildjobs/kcl3jeagtytirksa/artifacts/watchman.zip)

  Extract the zip file and make sure that watchman.exe is located in your PATH.
  The watchman.pdb file is provided to facilitate debugging.

  ```
 $ watchman
  {
      "error": "invalid command (expected an array with some elements!)",
      "version": "4.9.0",
      "cli_validated": true
  }
  ```

# flow
how does flow work? what is the flow syntax transpiler?  -- answer is babel
can't work without babel
```
$ npm ls babel-preset-flow
D:\learn-relay\relay-modern
`-- babel-preset-react@6.24.1
  `-- babel-preset-flow@6.23.0

```

# deplay to azure
## server
```
admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ mkdir azure

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ mkdir azure/data

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ yarn run babel -- server.js  --out-file azure/index.js --source-maps
yarn run v0.16.0
$ "D:\__work\learn-relay\relay-modern\node_modules\.bin\babel" server.js --out-file azure/index.js --source-maps
Done in 1.09s.

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ yarn run babel -- ./data  --out-dir azure/data  --source-maps  --copy-files
yarn run v0.16.0
$ "D:\__work\learn-relay\relay-modern\node_modules\.bin\babel" ./data --out-dir azure/data --source-maps --copy-files
data\database.js -> azure\data\database.js
data\schema.js -> azure\data\schema.js
data\unibetIds.js -> azure\data\unibetIds.js
Done in 1.52s.

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ yarn run babel -- scripts/updateSchema.js   --out-dir azure --source-maps
yarn run v0.16.0
$ "D:\__work\learn-relay\relay-modern\node_modules\.bin\babel" scripts/updateSchema.js --out-dir azure --source-maps
scripts/updateSchema.js -> azure\scripts\updateSchema.js
Done in 1.09s.

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ cd azure/

admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern/azure (master)
$ node index.js
```
## client 
```
admin@bchen-PC MINGW64 /d/__work/learn-relay/relay-modern (master)
$ mkdir azure/public
$ cp public/*    azure/pulic

```

## deploy
1. specify node engine
```
 "engines": {
    "node": "6.10.0"
  }
```
2. check your `package.json` and see if all `dependencies` are necessary for production
3. start deployment
```
$ azue login
$azure config list
$ azure mode asm ( arm: resource manager ; asm: service management )
$ azure site create --git relay-modern
  info:    Executing command site create
  + Getting sites
  + Getting locations
  help:    Location:
    1) South Central US


azure   https://bambora@relay-modern.scm.azurewebsites.net/relay-modern.git (fetch)
azure   https://bambora@relay-modern.scm.azurewebsites.net/relay-modern.git (push)
```
4. log
```
remote: Copying file: 'js\mutations\ChangeTodoStatusMutation.js'
remote: Copying file: 'js\mutations\MarkAllTodosMutation.js'
remote: Copying file: 'js\mutations\RemoveCompletedTodosMutation.js'
remote: Omitting next output lines...
remote: Using start-up script azure/index.js from package.json.
remote: Generated web.config.
remote: Node.js versions available on the platform are: 0.6.20, ... 8.0.0.
remote: Selected node.js version 6.10.0. Use package.json file to choose a different version.
remote: Selected npm version 3.10.10
remote: Updating iisnode.yml at D:\home\site\wwwroot\azure\iisnode.yml
remote: ....................................................................................................
remote: D:\home\site\wwwroot
remote: +-- babel-core@6.24.1
remote: | +-- babel-code-frame@6.22.0
remote: | | +-- chalk@1.1.3
remote: | | | +-- ansi-styles@2.2.1
remote: | | | +-- escape-string-regexp@1.0.5
```
