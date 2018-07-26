you can do `query{ viewer{user{ totalCount}}}` if you are not using varialbes
```js
{
  viewer {
    user {
      todos(first: 2) {
        edges {
          node {
            id
            text
            completed
            details
          }
        }
      }
      totalCount
      completedCount
    }
  }
}



query myQuery($n: Int) {
  viewer {
    user {
      todos(first: $n) {
        edges {
          node {
            id
            status
            details
          }
        }
      }
      totalCount
      completedCount
    }
  }
}
```

## esm emulate export default

```js
// WRONG
// exports.default = events;

// CORRECT
module.exports = events;
```
# redis
see redis docs [here](./redis.md)


# flow [ignore]
>  https://github.com/facebook/flow/issues/869#issuecomment-192548460

`yarn add -D flow-bin &&yarn flow --help`
Ignoring everything in node_modules is problematic, because we look in there to a) ensure you've actually installed your dependencies and b) find Flow types for packages which might have included them.

# debug mocha
1. package chain: `source-map-support` required; installed via `babel-register` which is included via `babel-cli`
```
boche1@UNISYDWS065 MINGW64 /d/relay-todo-modern (master)
$ npm ls source-map-support
D:\relay-todo-modern
`-- babel-cli@6.24.1
  `-- babel-register@6.24.1
    `-- source-map-support@0.4.14
```

2. npm script
`"debug": "mocha --compilers js:babel-register --source-maps  --recursive \"js/**/*.spec.js\" --require test/setup.js --debug-brk --inspect"`

3. in `ES6` domain, `babel-register` call `source-map-support.install()` which is the key. this was revealled by [graphql-tools\test.ts](https://github.com/bochen2014/graphql-tools/blob/develop/src/test/tests.ts#L1); 
In typescript world, similarly, we have `ts-node/register` which does the same
[ts-node/register](https://github.com/bochen2014/graphql-tools/blob/develop/package.json#L23);

[source code](https://github.com/babel/babel/blob/7.0/packages/babel-cli/src/_babel-node.js#L9)
```
//babel-cli/_babel-node.js line 9
import register from "babel-register";  // this will call source-map-support.install()
```

note that [this line](https://github.com/babel/babel/blob/7.0/packages/babel-cli/src/_babel-node.js#L40) is not called;
it is only called when you run `babel-node` command (which we are not in `debug-mocha`;
```
register({
  extensions: program.extensions,
  ignore: program.ignore,
  only: program.only,
  plugins: program.plugins,
  presets: program.presets,
});
```



# source 
```js
  //RelayNetwork.js 

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
  ```js
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

# flow
how does flow work? what is the flow syntax transpiler?-- answer is babel
can't work without babel
```js
$ npm ls babel-preset-flow
`-- babel-preset-react@6.24.1
  `-- babel-preset-flow@6.23.0

```

#subscription
>https://github.com/facebook/relay/issues/1655#issuecomment-306178478