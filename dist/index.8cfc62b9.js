// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2mNKm":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
parcelHelpers.export(exports, "app", ()=>app);
var _localbase = require("localbase");
var _localbaseDefault = parcelHelpers.interopDefault(_localbase);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _transactionsListJs = require("./TransactionsList.js");
var _transactionsListJsDefault = parcelHelpers.interopDefault(_transactionsListJs);
class App {
    dataBase;
    addBtn;
    categoryInput;
    transactionValueInput;
    date = (0, _dateJsDefault.default).date;
    constructor(){
        this.dataBase = new (0, _localbaseDefault.default)("Wydatki");
        this.addBtn = document.querySelector(".add");
        this.categoryInput = document.querySelector(".catagory");
        this.transactionValueInput = document.querySelector(".value");
        this.dateInput = document.querySelector(".date");
        this.addListeners();
    }
    addListeners() {
        this.addBtn.addEventListener("click", ()=>this.createExpanse());
    }
    clearInputs() {
        this.categoryInput.value = "";
        this.transactionValueInput.value = "";
        this.dateInput.value = "";
    }
    createExpanse() {
        console.log(this.date.dateEdited);
        if (this.validateInputs()) {
            const expance = new Expense(this.transactionValueInput.value, this.categoryInput.value, this.date.dateEdited);
            this.dataBase.collection("expances").add(expance);
            this.clearInputs();
        } else {
            console.log("puste");
            return;
        }
    }
    validateInputs() {
        return this.transactionValueInput.value !== "" && this.categoryInput.value !== "" ? true : false;
    }
}
class Expense {
    constructor(value, category, date){
        this.value = value;
        this.category = category;
        this.date = date;
    }
}
const app = new App();

},{"localbase":"bnEjv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./date.js":"cV0sV","./TransactionsList.js":"eyEMS"}],"bnEjv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _localbase = require("./localbase/localbase");
var _localbaseDefault = parcelHelpers.interopDefault(_localbase);
exports.default = (0, _localbaseDefault.default);

},{"./localbase/localbase":"cXx96","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXx96":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import api methods
var _collection = require("./api/selectors/collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
var _doc = require("./api/selectors/doc");
var _docDefault = parcelHelpers.interopDefault(_doc);
var _orderBy = require("./api/filters/orderBy");
var _orderByDefault = parcelHelpers.interopDefault(_orderBy);
var _limit = require("./api/filters/limit");
var _limitDefault = parcelHelpers.interopDefault(_limit);
var _get = require("./api/actions/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _add = require("./api/actions/add");
var _addDefault = parcelHelpers.interopDefault(_add);
var _update = require("./api/actions/update");
var _updateDefault = parcelHelpers.interopDefault(_update);
var _set = require("./api/actions/set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _delete = require("./api/actions/delete");
var _deleteDefault = parcelHelpers.interopDefault(_delete);
"use strict";
class Localbase {
    constructor(dbName){
        // properties
        this.dbName = dbName;
        this.lf = {} // where we store our localForage instances
        ;
        this.collectionName = null;
        this.orderByProperty = null;
        this.orderByDirection = null;
        this.limitBy = null;
        this.docSelectionCriteria = null;
        // queues
        this.deleteCollectionQueue = {
            queue: [],
            running: false
        };
        // config
        this.config = {
            debug: true
        };
        // user errors - e.g. wrong type or no value passed to a method
        this.userErrors = [];
        // api - selectors
        this.collection = (0, _collectionDefault.default).bind(this);
        this.doc = (0, _docDefault.default).bind(this);
        // api - filters
        this.orderBy = (0, _orderByDefault.default).bind(this);
        this.limit = (0, _limitDefault.default).bind(this);
        // api - actions
        this.get = (0, _getDefault.default).bind(this);
        this.add = (0, _addDefault.default).bind(this);
        this.update = (0, _updateDefault.default).bind(this);
        this.set = (0, _setDefault.default).bind(this);
        this.delete = (0, _deleteDefault.default).bind(this);
    }
}
exports.default = Localbase;

},{"./api/selectors/collection":"fkXq0","./api/selectors/doc":"qK0XA","./api/filters/orderBy":"bL1Q6","./api/filters/limit":"17Q3M","./api/actions/get":"5kIkC","./api/actions/add":"higtE","./api/actions/update":"hi54k","./api/actions/set":"3UsTb","./api/actions/delete":"7VDu9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkXq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _localforage = require("localforage");
var _localforageDefault = parcelHelpers.interopDefault(_localforage);
function collection(collectionName) {
    if (!collectionName) {
        this.userErrors.push("No collection name specified in collection() method.");
        return this;
    } else if (typeof collectionName !== "string") {
        this.userErrors.push("Collection name in collection() method must be a string and not an object, number or boolean.");
        return this;
    } else {
        this.collectionName = collectionName;
        let dbName = this.dbName;
        // if we've not created a localForage instance 
        // for this collection, create one
        if (!(collectionName in this.lf)) this.lf[collectionName] = (0, _localforageDefault.default).createInstance({
            driver: (0, _localforageDefault.default).INDEXEDDB,
            name: dbName,
            storeName: collectionName
        });
        return this;
    }
}
exports.default = collection;

},{"localforage":"cTE28","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTE28":[function(require,module,exports) {
var global = arguments[3];
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ (function(f) {
    var g;
    module.exports = f();
})(function() {
    var define, module1, exports;
    return (function e1(t, n1, r) {
        function s(o, u) {
            if (!n1[o]) {
                if (!t[o]) {
                    var a = undefined;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n1[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e1, t, n1, r);
            }
            return n1[o].exports;
        }
        var i = undefined;
        for(var o1 = 0; o1 < r.length; o1++)s(r[o1]);
        return s;
    })({
        1: [
            function(_dereq_, module, exports) {
                (function(global1) {
                    "use strict";
                    var Mutation = global1.MutationObserver || global1.WebKitMutationObserver;
                    var scheduleDrain;
                    if (Mutation) {
                        var called = 0;
                        var observer = new Mutation(nextTick);
                        var element = global1.document.createTextNode("");
                        observer.observe(element, {
                            characterData: true
                        });
                        scheduleDrain = function() {
                            element.data = called = ++called % 2;
                        };
                    } else if (!global1.setImmediate && typeof global1.MessageChannel !== "undefined") {
                        var channel = new global1.MessageChannel();
                        channel.port1.onmessage = nextTick;
                        scheduleDrain = function() {
                            channel.port2.postMessage(0);
                        };
                    } else if ("document" in global1 && "onreadystatechange" in global1.document.createElement("script")) scheduleDrain = function() {
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var scriptEl = global1.document.createElement("script");
                        scriptEl.onreadystatechange = function() {
                            nextTick();
                            scriptEl.onreadystatechange = null;
                            scriptEl.parentNode.removeChild(scriptEl);
                            scriptEl = null;
                        };
                        global1.document.documentElement.appendChild(scriptEl);
                    };
                    else scheduleDrain = function() {
                        setTimeout(nextTick, 0);
                    };
                    var draining;
                    var queue = [];
                    //named nextTick for less confusing stack traces
                    function nextTick() {
                        draining = true;
                        var i, oldQueue;
                        var len = queue.length;
                        while(len){
                            oldQueue = queue;
                            queue = [];
                            i = -1;
                            while(++i < len)oldQueue[i]();
                            len = queue.length;
                        }
                        draining = false;
                    }
                    module.exports = immediate;
                    function immediate(task) {
                        if (queue.push(task) === 1 && !draining) scheduleDrain();
                    }
                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            },
            {}
        ],
        2: [
            function(_dereq_, module, exports) {
                "use strict";
                var immediate = _dereq_(1);
                /* istanbul ignore next */ function INTERNAL() {}
                var handlers = {};
                var REJECTED = [
                    "REJECTED"
                ];
                var FULFILLED = [
                    "FULFILLED"
                ];
                var PENDING = [
                    "PENDING"
                ];
                module.exports = Promise;
                function Promise(resolver) {
                    if (typeof resolver !== "function") throw new TypeError("resolver must be a function");
                    this.state = PENDING;
                    this.queue = [];
                    this.outcome = void 0;
                    if (resolver !== INTERNAL) safelyResolveThenable(this, resolver);
                }
                Promise.prototype["catch"] = function(onRejected) {
                    return this.then(null, onRejected);
                };
                Promise.prototype.then = function(onFulfilled, onRejected) {
                    if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) return this;
                    var promise = new this.constructor(INTERNAL);
                    if (this.state !== PENDING) {
                        var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                        unwrap(promise, resolver, this.outcome);
                    } else this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                    return promise;
                };
                function QueueItem(promise, onFulfilled, onRejected) {
                    this.promise = promise;
                    if (typeof onFulfilled === "function") {
                        this.onFulfilled = onFulfilled;
                        this.callFulfilled = this.otherCallFulfilled;
                    }
                    if (typeof onRejected === "function") {
                        this.onRejected = onRejected;
                        this.callRejected = this.otherCallRejected;
                    }
                }
                QueueItem.prototype.callFulfilled = function(value) {
                    handlers.resolve(this.promise, value);
                };
                QueueItem.prototype.otherCallFulfilled = function(value) {
                    unwrap(this.promise, this.onFulfilled, value);
                };
                QueueItem.prototype.callRejected = function(value) {
                    handlers.reject(this.promise, value);
                };
                QueueItem.prototype.otherCallRejected = function(value) {
                    unwrap(this.promise, this.onRejected, value);
                };
                function unwrap(promise, func, value) {
                    immediate(function() {
                        var returnValue;
                        try {
                            returnValue = func(value);
                        } catch (e) {
                            return handlers.reject(promise, e);
                        }
                        if (returnValue === promise) handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
                        else handlers.resolve(promise, returnValue);
                    });
                }
                handlers.resolve = function(self, value) {
                    var result = tryCatch(getThen, value);
                    if (result.status === "error") return handlers.reject(self, result.value);
                    var thenable = result.value;
                    if (thenable) safelyResolveThenable(self, thenable);
                    else {
                        self.state = FULFILLED;
                        self.outcome = value;
                        var i = -1;
                        var len = self.queue.length;
                        while(++i < len)self.queue[i].callFulfilled(value);
                    }
                    return self;
                };
                handlers.reject = function(self, error) {
                    self.state = REJECTED;
                    self.outcome = error;
                    var i = -1;
                    var len = self.queue.length;
                    while(++i < len)self.queue[i].callRejected(error);
                    return self;
                };
                function getThen(obj) {
                    // Make sure we only access the accessor once as required by the spec
                    var then = obj && obj.then;
                    if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") return function appyThen() {
                        then.apply(obj, arguments);
                    };
                }
                function safelyResolveThenable(self, thenable) {
                    // Either fulfill, reject or reject with error
                    var called = false;
                    function onError(value) {
                        if (called) return;
                        called = true;
                        handlers.reject(self, value);
                    }
                    function onSuccess(value) {
                        if (called) return;
                        called = true;
                        handlers.resolve(self, value);
                    }
                    function tryToUnwrap() {
                        thenable(onSuccess, onError);
                    }
                    var result = tryCatch(tryToUnwrap);
                    if (result.status === "error") onError(result.value);
                }
                function tryCatch(func, value) {
                    var out = {};
                    try {
                        out.value = func(value);
                        out.status = "success";
                    } catch (e) {
                        out.status = "error";
                        out.value = e;
                    }
                    return out;
                }
                Promise.resolve = resolve;
                function resolve(value) {
                    if (value instanceof this) return value;
                    return handlers.resolve(new this(INTERNAL), value);
                }
                Promise.reject = reject;
                function reject(reason) {
                    var promise = new this(INTERNAL);
                    return handlers.reject(promise, reason);
                }
                Promise.all = all;
                function all(iterable) {
                    var self = this;
                    if (Object.prototype.toString.call(iterable) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var len = iterable.length;
                    var called = false;
                    if (!len) return this.resolve([]);
                    var values = new Array(len);
                    var resolved = 0;
                    var i1 = -1;
                    var promise = new this(INTERNAL);
                    while(++i1 < len)allResolver(iterable[i1], i1);
                    return promise;
                    function allResolver(value, i) {
                        self.resolve(value).then(resolveFromAll, function(error) {
                            if (!called) {
                                called = true;
                                handlers.reject(promise, error);
                            }
                        });
                        function resolveFromAll(outValue) {
                            values[i] = outValue;
                            if (++resolved === len && !called) {
                                called = true;
                                handlers.resolve(promise, values);
                            }
                        }
                    }
                }
                Promise.race = race;
                function race(iterable) {
                    var self = this;
                    if (Object.prototype.toString.call(iterable) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var len = iterable.length;
                    var called = false;
                    if (!len) return this.resolve([]);
                    var i = -1;
                    var promise = new this(INTERNAL);
                    while(++i < len)resolver(iterable[i]);
                    return promise;
                    function resolver(value) {
                        self.resolve(value).then(function(response) {
                            if (!called) {
                                called = true;
                                handlers.resolve(promise, response);
                            }
                        }, function(error) {
                            if (!called) {
                                called = true;
                                handlers.reject(promise, error);
                            }
                        });
                    }
                }
            },
            {
                "1": 1
            }
        ],
        3: [
            function(_dereq_, module, exports) {
                (function(global2) {
                    "use strict";
                    if (typeof global2.Promise !== "function") global2.Promise = _dereq_(2);
                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            },
            {
                "2": 2
            }
        ],
        4: [
            function(_dereq_, module, exports) {
                "use strict";
                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function getIDB() {
                    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */ try {
                        if (typeof indexedDB !== "undefined") return indexedDB;
                        if (typeof webkitIndexedDB !== "undefined") return webkitIndexedDB;
                        if (typeof mozIndexedDB !== "undefined") return mozIndexedDB;
                        if (typeof OIndexedDB !== "undefined") return OIndexedDB;
                        if (typeof msIndexedDB !== "undefined") return msIndexedDB;
                    } catch (e) {
                        return;
                    }
                }
                var idb1 = getIDB();
                function isIndexedDBValid() {
                    try {
                        // Initialize IndexedDB; fall back to vendor-prefixed versions
                        // if needed.
                        if (!idb1 || !idb1.open) return false;
                        // We mimic PouchDB here;
                        //
                        // We test for openDatabase because IE Mobile identifies itself
                        // as Safari. Oh the lulz...
                        var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
                        var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
                        // Safari <10.1 does not meet our requirements for IDB support
                        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                        // Safari 10.1 shipped with fetch, we can use that to detect it.
                        // Note: this creates issues with `window.fetch` polyfills and
                        // overrides; see:
                        // https://github.com/localForage/localForage/issues/856
                        return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && // some outdated implementations of IDB that appear on Samsung
                        // and HTC Android devices <4.4 are missing IDBKeyRange
                        // See: https://github.com/mozilla/localForage/issues/128
                        // See: https://github.com/mozilla/localForage/issues/272
                        typeof IDBKeyRange !== "undefined";
                    } catch (e) {
                        return false;
                    }
                }
                // Abstracts constructing a Blob object, so it also works in older
                // browsers that don't support the native Blob constructor. (i.e.
                // old QtWebKit versions, at least).
                // Abstracts constructing a Blob object, so it also works in older
                // browsers that don't support the native Blob constructor. (i.e.
                // old QtWebKit versions, at least).
                function createBlob(parts, properties) {
                    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */ parts = parts || [];
                    properties = properties || {};
                    try {
                        return new Blob(parts, properties);
                    } catch (e) {
                        if (e.name !== "TypeError") throw e;
                        var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
                        var builder = new Builder();
                        for(var i = 0; i < parts.length; i += 1)builder.append(parts[i]);
                        return builder.getBlob(properties.type);
                    }
                }
                // This is CommonJS because lie is an external dependency, so Rollup
                // can just ignore it.
                if (typeof Promise === "undefined") // In the "nopromises" build this will just throw if you don't have
                // a global promise object, but it would throw anyway later.
                _dereq_(3);
                var Promise$1 = Promise;
                function executeCallback(promise, callback) {
                    if (callback) promise.then(function(result) {
                        callback(null, result);
                    }, function(error) {
                        callback(error);
                    });
                }
                function executeTwoCallbacks(promise, callback, errorCallback) {
                    if (typeof callback === "function") promise.then(callback);
                    if (typeof errorCallback === "function") promise["catch"](errorCallback);
                }
                function normalizeKey(key) {
                    // Cast the key to a string, as that's all we can set as a key.
                    if (typeof key !== "string") {
                        console.warn(key + " used as a key, but it is not a string.");
                        key = String(key);
                    }
                    return key;
                }
                function getCallback() {
                    if (arguments.length && typeof arguments[arguments.length - 1] === "function") return arguments[arguments.length - 1];
                }
                // Some code originally from async_storage.js in
                // [Gaia](https://github.com/mozilla-b2g/gaia).
                var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
                var supportsBlobs = void 0;
                var dbContexts = {};
                var toString = Object.prototype.toString;
                // Transaction Modes
                var READ_ONLY = "readonly";
                var READ_WRITE = "readwrite";
                // Transform a binary string to an array buffer, because otherwise
                // weird stuff happens when you try to work with the binary string directly.
                // It is known.
                // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                // encode-decode-image-with-base64-breaks-image (2013-04-21)
                function _binStringToArrayBuffer(bin) {
                    var length = bin.length;
                    var buf = new ArrayBuffer(length);
                    var arr = new Uint8Array(buf);
                    for(var i = 0; i < length; i++)arr[i] = bin.charCodeAt(i);
                    return buf;
                }
                //
                // Blobs are not supported in all versions of IndexedDB, notably
                // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                //
                // Various other blob bugs exist in Chrome v37-42 (inclusive).
                // Detecting them is expensive and confusing to users, and Chrome 37-42
                // is at very low usage worldwide, so we do a hacky userAgent check instead.
                //
                // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                //
                // Code borrowed from PouchDB. See:
                // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                //
                function _checkBlobSupportWithoutCaching(idb) {
                    return new Promise$1(function(resolve) {
                        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                        var blob = createBlob([
                            ""
                        ]);
                        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
                        txn.onabort = function(e) {
                            // If the transaction aborts now its due to not being able to
                            // write to the database, likely due to the disk being full
                            e.preventDefault();
                            e.stopPropagation();
                            resolve(false);
                        };
                        txn.oncomplete = function() {
                            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                            var matchedEdge = navigator.userAgent.match(/Edge\//);
                            // MS Edge pretends to be Chrome 42:
                            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                        };
                    })["catch"](function() {
                        return false; // error, so assume unsupported
                    });
                }
                function _checkBlobSupport(idb) {
                    if (typeof supportsBlobs === "boolean") return Promise$1.resolve(supportsBlobs);
                    return _checkBlobSupportWithoutCaching(idb).then(function(value) {
                        supportsBlobs = value;
                        return supportsBlobs;
                    });
                }
                function _deferReadiness(dbInfo) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Create a deferred object representing the current database operation.
                    var deferredOperation = {};
                    deferredOperation.promise = new Promise$1(function(resolve, reject) {
                        deferredOperation.resolve = resolve;
                        deferredOperation.reject = reject;
                    });
                    // Enqueue the deferred operation.
                    dbContext.deferredOperations.push(deferredOperation);
                    // Chain its promise to the database readiness.
                    if (!dbContext.dbReady) dbContext.dbReady = deferredOperation.promise;
                    else dbContext.dbReady = dbContext.dbReady.then(function() {
                        return deferredOperation.promise;
                    });
                }
                function _advanceReadiness(dbInfo) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Dequeue a deferred operation.
                    var deferredOperation = dbContext.deferredOperations.pop();
                    // Resolve its promise (which is part of the database readiness
                    // chain of promises).
                    if (deferredOperation) {
                        deferredOperation.resolve();
                        return deferredOperation.promise;
                    }
                }
                function _rejectReadiness(dbInfo, err) {
                    var dbContext = dbContexts[dbInfo.name];
                    // Dequeue a deferred operation.
                    var deferredOperation = dbContext.deferredOperations.pop();
                    // Reject its promise (which is part of the database readiness
                    // chain of promises).
                    if (deferredOperation) {
                        deferredOperation.reject(err);
                        return deferredOperation.promise;
                    }
                }
                function _getConnection(dbInfo, upgradeNeeded) {
                    return new Promise$1(function(resolve, reject) {
                        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
                        if (dbInfo.db) {
                            if (upgradeNeeded) {
                                _deferReadiness(dbInfo);
                                dbInfo.db.close();
                            } else return resolve(dbInfo.db);
                        }
                        var dbArgs = [
                            dbInfo.name
                        ];
                        if (upgradeNeeded) dbArgs.push(dbInfo.version);
                        var openreq = idb1.open.apply(idb1, dbArgs);
                        if (upgradeNeeded) openreq.onupgradeneeded = function(e) {
                            var db = openreq.result;
                            try {
                                db.createObjectStore(dbInfo.storeName);
                                if (e.oldVersion <= 1) // Added when support for blob shims was added
                                db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                            } catch (ex) {
                                if (ex.name === "ConstraintError") console.warn('The database "' + dbInfo.name + '"' + " has been upgraded from version " + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                                else throw ex;
                            }
                        };
                        openreq.onerror = function(e) {
                            e.preventDefault();
                            reject(openreq.error);
                        };
                        openreq.onsuccess = function() {
                            var db = openreq.result;
                            db.onversionchange = function(e) {
                                // Triggered when the database is modified (e.g. adding an objectStore) or
                                // deleted (even when initiated by other sessions in different tabs).
                                // Closing the connection here prevents those operations from being blocked.
                                // If the database is accessed again later by this instance, the connection
                                // will be reopened or the database recreated as needed.
                                e.target.close();
                            };
                            resolve(db);
                            _advanceReadiness(dbInfo);
                        };
                    });
                }
                function _getOriginalConnection(dbInfo) {
                    return _getConnection(dbInfo, false);
                }
                function _getUpgradedConnection(dbInfo) {
                    return _getConnection(dbInfo, true);
                }
                function _isUpgradeNeeded(dbInfo, defaultVersion) {
                    if (!dbInfo.db) return true;
                    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
                    var isDowngrade = dbInfo.version < dbInfo.db.version;
                    var isUpgrade = dbInfo.version > dbInfo.db.version;
                    if (isDowngrade) {
                        // If the version is not the default one
                        // then warn for impossible downgrade.
                        if (dbInfo.version !== defaultVersion) console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + " to version " + dbInfo.version + ".");
                        // Align the versions to prevent errors.
                        dbInfo.version = dbInfo.db.version;
                    }
                    if (isUpgrade || isNewStore) {
                        // If the store is new then increment the version (if needed).
                        // This will trigger an "upgradeneeded" event which is required
                        // for creating a store.
                        if (isNewStore) {
                            var incVersion = dbInfo.db.version + 1;
                            if (incVersion > dbInfo.version) dbInfo.version = incVersion;
                        }
                        return true;
                    }
                    return false;
                }
                // encode a blob for indexeddb engines that don't support blobs
                function _encodeBlob(blob) {
                    return new Promise$1(function(resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = reject;
                        reader.onloadend = function(e) {
                            var base64 = btoa(e.target.result || "");
                            resolve({
                                __local_forage_encoded_blob: true,
                                data: base64,
                                type: blob.type
                            });
                        };
                        reader.readAsBinaryString(blob);
                    });
                }
                // decode an encoded blob
                function _decodeBlob(encodedBlob) {
                    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
                    return createBlob([
                        arrayBuff
                    ], {
                        type: encodedBlob.type
                    });
                }
                // is this one of our fancy encoded blobs?
                function _isEncodedBlob(value) {
                    return value && value.__local_forage_encoded_blob;
                }
                // Specialize the default `ready()` function by making it dependent
                // on the current database operations. Thus, the driver will be actually
                // ready when it's been initialized (default) *and* there are no pending
                // operations on the database (initiated by some other instances).
                function _fullyReady(callback) {
                    var self = this;
                    var promise = self._initReady().then(function() {
                        var dbContext = dbContexts[self._dbInfo.name];
                        if (dbContext && dbContext.dbReady) return dbContext.dbReady;
                    });
                    executeTwoCallbacks(promise, callback, callback);
                    return promise;
                }
                // Try to establish a new db connection to replace the
                // current one which is broken (i.e. experiencing
                // InvalidStateError while creating a transaction).
                function _tryReconnect(dbInfo) {
                    _deferReadiness(dbInfo);
                    var dbContext = dbContexts[dbInfo.name];
                    var forages = dbContext.forages;
                    for(var i2 = 0; i2 < forages.length; i2++){
                        var forage = forages[i2];
                        if (forage._dbInfo.db) {
                            forage._dbInfo.db.close();
                            forage._dbInfo.db = null;
                        }
                    }
                    dbInfo.db = null;
                    return _getOriginalConnection(dbInfo).then(function(db) {
                        dbInfo.db = db;
                        if (_isUpgradeNeeded(dbInfo)) // Reopen the database for upgrading.
                        return _getUpgradedConnection(dbInfo);
                        return db;
                    }).then(function(db) {
                        // store the latest db reference
                        // in case the db was upgraded
                        dbInfo.db = dbContext.db = db;
                        for(var i = 0; i < forages.length; i++)forages[i]._dbInfo.db = db;
                    })["catch"](function(err) {
                        _rejectReadiness(dbInfo, err);
                        throw err;
                    });
                }
                // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                // so we have to do it with callbacks
                function createTransaction(dbInfo, mode, callback, retries) {
                    if (retries === undefined) retries = 1;
                    try {
                        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                        callback(null, tx);
                    } catch (err) {
                        if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) return Promise$1.resolve().then(function() {
                            if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                                // increase the db version, to create the new ObjectStore
                                if (dbInfo.db) dbInfo.version = dbInfo.db.version + 1;
                                // Reopen the database for upgrading.
                                return _getUpgradedConnection(dbInfo);
                            }
                        }).then(function() {
                            return _tryReconnect(dbInfo).then(function() {
                                createTransaction(dbInfo, mode, callback, retries - 1);
                            });
                        })["catch"](callback);
                        callback(err);
                    }
                }
                function createDbContext() {
                    return {
                        // Running localForages sharing a database.
                        forages: [],
                        // Shared database.
                        db: null,
                        // Database readiness (promise).
                        dbReady: null,
                        // Deferred operations on the database.
                        deferredOperations: []
                    };
                }
                // Open the IndexedDB database (automatically creates one if one didn't
                // previously exist), using any options set in the config.
                function _initStorage(options) {
                    var self = this;
                    var dbInfo = {
                        db: null
                    };
                    if (options) for(var i in options)dbInfo[i] = options[i];
                    // Get the current context of the database;
                    var dbContext = dbContexts[dbInfo.name];
                    // ...or create a new context.
                    if (!dbContext) {
                        dbContext = createDbContext();
                        // Register the new context in the global container.
                        dbContexts[dbInfo.name] = dbContext;
                    }
                    // Register itself as a running localForage in the current context.
                    dbContext.forages.push(self);
                    // Replace the default `ready()` function with the specialized one.
                    if (!self._initReady) {
                        self._initReady = self.ready;
                        self.ready = _fullyReady;
                    }
                    // Create an array of initialization states of the related localForages.
                    var initPromises = [];
                    function ignoreErrors() {
                        // Don't handle errors here,
                        // just makes sure related localForages aren't pending.
                        return Promise$1.resolve();
                    }
                    for(var j = 0; j < dbContext.forages.length; j++){
                        var forage = dbContext.forages[j];
                        if (forage !== self) // Don't wait for itself...
                        initPromises.push(forage._initReady()["catch"](ignoreErrors));
                    }
                    // Take a snapshot of the related localForages.
                    var forages = dbContext.forages.slice(0);
                    // Initialize the connection process only when
                    // all the related localForages aren't pending.
                    return Promise$1.all(initPromises).then(function() {
                        dbInfo.db = dbContext.db;
                        // Get the connection or open a new one without upgrade.
                        return _getOriginalConnection(dbInfo);
                    }).then(function(db) {
                        dbInfo.db = db;
                        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) // Reopen the database for upgrading.
                        return _getUpgradedConnection(dbInfo);
                        return db;
                    }).then(function(db) {
                        dbInfo.db = dbContext.db = db;
                        self._dbInfo = dbInfo;
                        // Share the final connection amongst related localForages.
                        for(var k = 0; k < forages.length; k++){
                            var forage = forages[k];
                            if (forage !== self) {
                                // Self is already up-to-date.
                                forage._dbInfo.db = dbInfo.db;
                                forage._dbInfo.version = dbInfo.version;
                            }
                        }
                    });
                }
                function getItem(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.get(key);
                                    req.onsuccess = function() {
                                        var value = req.result;
                                        if (value === undefined) value = null;
                                        if (_isEncodedBlob(value)) value = _decodeBlob(value);
                                        resolve(value);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Iterate over all items stored in database.
                function iterate(iterator, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.openCursor();
                                    var iterationNumber = 1;
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (cursor) {
                                            var value = cursor.value;
                                            if (_isEncodedBlob(value)) value = _decodeBlob(value);
                                            var result = iterator(value, cursor.key, iterationNumber++);
                                            // when the iterator callback returns any
                                            // (non-`undefined`) value, then we stop
                                            // the iteration immediately
                                            if (result !== void 0) resolve(result);
                                            else cursor["continue"]();
                                        } else resolve();
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function setItem(key, value1, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        var dbInfo;
                        self.ready().then(function() {
                            dbInfo = self._dbInfo;
                            if (toString.call(value1) === "[object Blob]") return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                                if (blobSupport) return value1;
                                return _encodeBlob(value1);
                            });
                            return value1;
                        }).then(function(value) {
                            createTransaction(self._dbInfo, READ_WRITE, function(err1, transaction) {
                                if (err1) return reject(err1);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    // The reason we don't _save_ null is because IE 10 does
                                    // not support saving the `null` type in IndexedDB. How
                                    // ironic, given the bug below!
                                    // See: https://github.com/mozilla/localForage/issues/161
                                    if (value === null) value = undefined;
                                    var req = store.put(value, key);
                                    transaction.oncomplete = function() {
                                        // Cast to undefined so the value passed to
                                        // callback/promise is the same as what one would get out
                                        // of `getItem()` later. This leads to some weirdness
                                        // (setItem('foo', undefined) will return `null`), but
                                        // it's not my fault localStorage is our baseline and that
                                        // it's weird.
                                        if (value === undefined) value = null;
                                        resolve(value);
                                    };
                                    transaction.onabort = transaction.onerror = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function removeItem(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_WRITE, function(err2, transaction) {
                                if (err2) return reject(err2);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    // We use a Grunt task to make this safe for IE and some
                                    // versions of Android (including those used by Cordova).
                                    // Normally IE won't like `.delete()` and will insist on
                                    // using `['delete']()`, but we have a build step that
                                    // fixes this for us now.
                                    var req = store["delete"](key);
                                    transaction.oncomplete = function() {
                                        resolve();
                                    };
                                    transaction.onerror = function() {
                                        reject(req.error);
                                    };
                                    // The request will be also be aborted if we've exceeded our storage
                                    // space.
                                    transaction.onabort = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function clear(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_WRITE, function(err3, transaction) {
                                if (err3) return reject(err3);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.clear();
                                    transaction.oncomplete = function() {
                                        resolve();
                                    };
                                    transaction.onabort = transaction.onerror = function() {
                                        var err = req.error ? req.error : req.transaction.error;
                                        reject(err);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function length1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.count();
                                    req.onsuccess = function() {
                                        resolve(req.result);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function key1(n, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        if (n < 0) {
                            resolve(null);
                            return;
                        }
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var advanced = false;
                                    var req = store.openKeyCursor();
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (!cursor) {
                                            // this means there weren't enough keys
                                            resolve(null);
                                            return;
                                        }
                                        if (n === 0) // We have the first key, return it if that's what they
                                        // wanted.
                                        resolve(cursor.key);
                                        else if (!advanced) {
                                            // Otherwise, ask the cursor to skip ahead n
                                            // records.
                                            advanced = true;
                                            cursor.advance(n);
                                        } else // When we get here, we've got the nth key.
                                        resolve(cursor.key);
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                if (err) return reject(err);
                                try {
                                    var store = transaction.objectStore(self._dbInfo.storeName);
                                    var req = store.openKeyCursor();
                                    var keys = [];
                                    req.onsuccess = function() {
                                        var cursor = req.result;
                                        if (!cursor) {
                                            resolve(keys);
                                            return;
                                        }
                                        keys.push(cursor.key);
                                        cursor["continue"]();
                                    };
                                    req.onerror = function() {
                                        reject(req.error);
                                    };
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function dropInstance(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    var currentConfig = this.config();
                    options = typeof options !== "function" && options || {};
                    if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject("Invalid arguments");
                    else {
                        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;
                        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            dbContext.db = db;
                            for(var i = 0; i < forages.length; i++)forages[i]._dbInfo.db = db;
                            return db;
                        });
                        if (!options.storeName) promise = dbPromise.then(function(db1) {
                            _deferReadiness(options);
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db1.close();
                            for(var i3 = 0; i3 < forages.length; i3++){
                                var forage = forages[i3];
                                forage._dbInfo.db = null;
                            }
                            var dropDBPromise = new Promise$1(function(resolve, reject) {
                                var req = idb1.deleteDatabase(options.name);
                                req.onerror = function() {
                                    var db = req.result;
                                    if (db) db.close();
                                    reject(req.error);
                                };
                                req.onblocked = function() {
                                    // Closing all open connections in onversionchange handler should prevent this situation, but if
                                    // we do get here, it just means the request remains pending - eventually it will succeed or error
                                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                                };
                                req.onsuccess = function() {
                                    var db = req.result;
                                    if (db) db.close();
                                    resolve(db);
                                };
                            });
                            return dropDBPromise.then(function(db) {
                                dbContext.db = db;
                                for(var i = 0; i < forages.length; i++){
                                    var _forage = forages[i];
                                    _advanceReadiness(_forage._dbInfo);
                                }
                            })["catch"](function(err) {
                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                throw err;
                            });
                        });
                        else promise = dbPromise.then(function(db2) {
                            if (!db2.objectStoreNames.contains(options.storeName)) return;
                            var newVersion = db2.version + 1;
                            _deferReadiness(options);
                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db2.close();
                            for(var i = 0; i < forages.length; i++){
                                var forage = forages[i];
                                forage._dbInfo.db = null;
                                forage._dbInfo.version = newVersion;
                            }
                            var dropObjectPromise = new Promise$1(function(resolve, reject) {
                                var req = idb1.open(options.name, newVersion);
                                req.onerror = function(err) {
                                    var db = req.result;
                                    db.close();
                                    reject(err);
                                };
                                req.onupgradeneeded = function() {
                                    var db = req.result;
                                    db.deleteObjectStore(options.storeName);
                                };
                                req.onsuccess = function() {
                                    var db = req.result;
                                    db.close();
                                    resolve(db);
                                };
                            });
                            return dropObjectPromise.then(function(db) {
                                dbContext.db = db;
                                for(var j = 0; j < forages.length; j++){
                                    var _forage2 = forages[j];
                                    _forage2._dbInfo.db = db;
                                    _advanceReadiness(_forage2._dbInfo);
                                }
                            })["catch"](function(err) {
                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                throw err;
                            });
                        });
                    }
                    executeCallback(promise, callback);
                    return promise;
                }
                var asyncStorage = {
                    _driver: "asyncStorage",
                    _initStorage: _initStorage,
                    _support: isIndexedDBValid(),
                    iterate: iterate,
                    getItem: getItem,
                    setItem: setItem,
                    removeItem: removeItem,
                    clear: clear,
                    length: length1,
                    key: key1,
                    keys: keys1,
                    dropInstance: dropInstance
                };
                function isWebSQLValid() {
                    return typeof openDatabase === "function";
                }
                // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                // it to Base64, so this is how we store it to prevent very strange errors with less
                // verbose ways of binary <-> string data storage.
                var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var BLOB_TYPE_PREFIX = "~~local_forage_type~";
                var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
                var SERIALIZED_MARKER = "__lfsc__:";
                var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
                // OMG the serializations!
                var TYPE_ARRAYBUFFER = "arbf";
                var TYPE_BLOB = "blob";
                var TYPE_INT8ARRAY = "si08";
                var TYPE_UINT8ARRAY = "ui08";
                var TYPE_UINT8CLAMPEDARRAY = "uic8";
                var TYPE_INT16ARRAY = "si16";
                var TYPE_INT32ARRAY = "si32";
                var TYPE_UINT16ARRAY = "ur16";
                var TYPE_UINT32ARRAY = "ui32";
                var TYPE_FLOAT32ARRAY = "fl32";
                var TYPE_FLOAT64ARRAY = "fl64";
                var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
                var toString$1 = Object.prototype.toString;
                function stringToBuffer(serializedString) {
                    // Fill the string into a ArrayBuffer.
                    var bufferLength = serializedString.length * 0.75;
                    var len = serializedString.length;
                    var i;
                    var p = 0;
                    var encoded1, encoded2, encoded3, encoded4;
                    if (serializedString[serializedString.length - 1] === "=") {
                        bufferLength--;
                        if (serializedString[serializedString.length - 2] === "=") bufferLength--;
                    }
                    var buffer = new ArrayBuffer(bufferLength);
                    var bytes = new Uint8Array(buffer);
                    for(i = 0; i < len; i += 4){
                        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
                        /*jslint bitwise: true */ bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                    }
                    return buffer;
                }
                // Converts a buffer to a string to store, serialized, in the backend
                // storage library.
                function bufferToString(buffer) {
                    // base64-arraybuffer
                    var bytes = new Uint8Array(buffer);
                    var base64String = "";
                    var i;
                    for(i = 0; i < bytes.length; i += 3){
                        /*jslint bitwise: true */ base64String += BASE_CHARS[bytes[i] >> 2];
                        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                        base64String += BASE_CHARS[bytes[i + 2] & 63];
                    }
                    if (bytes.length % 3 === 2) base64String = base64String.substring(0, base64String.length - 1) + "=";
                    else if (bytes.length % 3 === 1) base64String = base64String.substring(0, base64String.length - 2) + "==";
                    return base64String;
                }
                // Serialize a value, afterwards executing a callback (which usually
                // instructs the `setItem()` callback/promise to be executed). This is how
                // we store binary data with localStorage.
                function serialize(value, callback) {
                    var valueType = "";
                    if (value) valueType = toString$1.call(value);
                    // Cannot use `value instanceof ArrayBuffer` or such here, as these
                    // checks fail when running the tests using casper.js...
                    //
                    // TODO: See why those tests fail and use a better solution.
                    if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
                        // Convert binary arrays to a string and prefix the string with
                        // a special marker.
                        var buffer;
                        var marker = SERIALIZED_MARKER;
                        if (value instanceof ArrayBuffer) {
                            buffer = value;
                            marker += TYPE_ARRAYBUFFER;
                        } else {
                            buffer = value.buffer;
                            if (valueType === "[object Int8Array]") marker += TYPE_INT8ARRAY;
                            else if (valueType === "[object Uint8Array]") marker += TYPE_UINT8ARRAY;
                            else if (valueType === "[object Uint8ClampedArray]") marker += TYPE_UINT8CLAMPEDARRAY;
                            else if (valueType === "[object Int16Array]") marker += TYPE_INT16ARRAY;
                            else if (valueType === "[object Uint16Array]") marker += TYPE_UINT16ARRAY;
                            else if (valueType === "[object Int32Array]") marker += TYPE_INT32ARRAY;
                            else if (valueType === "[object Uint32Array]") marker += TYPE_UINT32ARRAY;
                            else if (valueType === "[object Float32Array]") marker += TYPE_FLOAT32ARRAY;
                            else if (valueType === "[object Float64Array]") marker += TYPE_FLOAT64ARRAY;
                            else callback(new Error("Failed to get type for BinaryArray"));
                        }
                        callback(marker + bufferToString(buffer));
                    } else if (valueType === "[object Blob]") {
                        // Conver the blob to a binaryArray and then to a string.
                        var fileReader = new FileReader();
                        fileReader.onload = function() {
                            // Backwards-compatible prefix for the blob type.
                            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
                            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                        };
                        fileReader.readAsArrayBuffer(value);
                    } else try {
                        callback(JSON.stringify(value));
                    } catch (e) {
                        console.error("Couldn't convert value into a JSON string: ", value);
                        callback(null, e);
                    }
                }
                // Deserialize data we've inserted into a value column/field. We place
                // special markers into our strings to mark them as encoded; this isn't
                // as nice as a meta field, but it's the only sane thing we can do whilst
                // keeping localStorage support intact.
                //
                // Oftentimes this will just deserialize JSON content, but if we have a
                // special marker (SERIALIZED_MARKER, defined above), we will extract
                // some kind of arraybuffer/binary data/typed array out of the string.
                function deserialize(value) {
                    // If we haven't marked this string as being specially serialized (i.e.
                    // something other than serialized JSON), we can just return it and be
                    // done with it.
                    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) return JSON.parse(value);
                    // The following code deals with deserializing some kind of Blob or
                    // TypedArray. First we separate out the type of data we're dealing
                    // with from the data itself.
                    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
                    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
                    var blobType;
                    // Backwards-compatible blob type serialization strategy.
                    // DBs created with older versions of localForage will simply not have the blob type.
                    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                        blobType = matcher[1];
                        serializedString = serializedString.substring(matcher[0].length);
                    }
                    var buffer = stringToBuffer(serializedString);
                    // Return the right type based on the code/type set during
                    // serialization.
                    switch(type){
                        case TYPE_ARRAYBUFFER:
                            return buffer;
                        case TYPE_BLOB:
                            return createBlob([
                                buffer
                            ], {
                                type: blobType
                            });
                        case TYPE_INT8ARRAY:
                            return new Int8Array(buffer);
                        case TYPE_UINT8ARRAY:
                            return new Uint8Array(buffer);
                        case TYPE_UINT8CLAMPEDARRAY:
                            return new Uint8ClampedArray(buffer);
                        case TYPE_INT16ARRAY:
                            return new Int16Array(buffer);
                        case TYPE_UINT16ARRAY:
                            return new Uint16Array(buffer);
                        case TYPE_INT32ARRAY:
                            return new Int32Array(buffer);
                        case TYPE_UINT32ARRAY:
                            return new Uint32Array(buffer);
                        case TYPE_FLOAT32ARRAY:
                            return new Float32Array(buffer);
                        case TYPE_FLOAT64ARRAY:
                            return new Float64Array(buffer);
                        default:
                            throw new Error("Unkown type: " + type);
                    }
                }
                var localforageSerializer = {
                    serialize: serialize,
                    deserialize: deserialize,
                    stringToBuffer: stringToBuffer,
                    bufferToString: bufferToString
                };
                /*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */ function createDbTable(t, dbInfo, callback, errorCallback) {
                    t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " " + "(id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
                }
                // Open the WebSQL database (automatically creates one if one didn't
                // previously exist), using any options set in the config.
                function _initStorage$1(options) {
                    var self = this;
                    var dbInfo = {
                        db: null
                    };
                    if (options) for(var i in options)dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
                    var dbInfoPromise = new Promise$1(function(resolve, reject) {
                        // Open the database; the openDatabase API will automatically
                        // create it for us if it doesn't exist.
                        try {
                            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                        } catch (e) {
                            return reject(e);
                        }
                        // Create our key/value table if it doesn't exist.
                        dbInfo.db.transaction(function(t) {
                            createDbTable(t, dbInfo, function() {
                                self._dbInfo = dbInfo;
                                resolve();
                            }, function(t, error) {
                                reject(error);
                            });
                        }, reject);
                    });
                    dbInfo.serializer = localforageSerializer;
                    return dbInfoPromise;
                }
                function tryExecuteSql(t1, dbInfo, sqlStatement, args, callback, errorCallback) {
                    t1.executeSql(sqlStatement, args, callback, function(t2, error) {
                        if (error.code === error.SYNTAX_ERR) t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [
                            dbInfo.storeName
                        ], function(t, results) {
                            if (!results.rows.length) // if the table is missing (was deleted)
                            // re-create it table and retry
                            createDbTable(t, dbInfo, function() {
                                t.executeSql(sqlStatement, args, callback, errorCallback);
                            }, errorCallback);
                            else errorCallback(t, error);
                        }, errorCallback);
                        else errorCallback(t2, error);
                    }, errorCallback);
                }
                function getItem$1(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [
                                    key
                                ], function(t, results) {
                                    var result = results.rows.length ? results.rows.item(0).value : null;
                                    // Check to see if this is serialized content we need to
                                    // unpack.
                                    if (result) result = dbInfo.serializer.deserialize(result);
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function iterate$1(iterator, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t, results) {
                                    var rows = results.rows;
                                    var length = rows.length;
                                    for(var i = 0; i < length; i++){
                                        var item = rows.item(i);
                                        var result = item.value;
                                        // Check to see if this is serialized content
                                        // we need to unpack.
                                        if (result) result = dbInfo.serializer.deserialize(result);
                                        result = iterator(result, item.key, i + 1);
                                        // void(0) prevents problems with redefinition
                                        // of `undefined`.
                                        if (result !== void 0) {
                                            resolve(result);
                                            return;
                                        }
                                    }
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function _setItem(key, value2, callback, retriesLeft) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            // The localStorage API doesn't return undefined values in an
                            // "expected" way, so undefined is always cast to null in all
                            // drivers. See: https://github.com/mozilla/localForage/pull/42
                            if (value2 === undefined) value2 = null;
                            // Save the original value to pass to the callback.
                            var originalValue = value2;
                            var dbInfo = self._dbInfo;
                            dbInfo.serializer.serialize(value2, function(value, error1) {
                                if (error1) reject(error1);
                                else dbInfo.db.transaction(function(t) {
                                    tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " " + "(key, value) VALUES (?, ?)", [
                                        key,
                                        value
                                    ], function() {
                                        resolve(originalValue);
                                    }, function(t, error) {
                                        reject(error);
                                    });
                                }, function(sqlError) {
                                    // The transaction failed; check
                                    // to see if it's a quota error.
                                    if (sqlError.code === sqlError.QUOTA_ERR) {
                                        // We reject the callback outright for now, but
                                        // it's worth trying to re-run the transaction.
                                        // Even if the user accepts the prompt to use
                                        // more storage on Safari, this error will
                                        // be called.
                                        //
                                        // Try to re-run the transaction.
                                        if (retriesLeft > 0) {
                                            resolve(_setItem.apply(self, [
                                                key,
                                                originalValue,
                                                callback,
                                                retriesLeft - 1
                                            ]));
                                            return;
                                        }
                                        reject(sqlError);
                                    }
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function setItem$1(key, value, callback) {
                    return _setItem.apply(this, [
                        key,
                        value,
                        callback,
                        1
                    ]);
                }
                function removeItem$1(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [
                                    key
                                ], function() {
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Deletes every item in the table.
                // TODO: Find out if this resets the AUTO_INCREMENT number.
                function clear$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                                    resolve();
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Does a simple `COUNT(key)` to get the number of items stored in
                // localForage.
                function length$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                // Ahhh, SQL makes this one soooooo easy.
                                tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t, results) {
                                    var result = results.rows.item(0).c;
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Return the key located at key index X; essentially gets the key from a
                // `WHERE id = ?`. This is the most efficient way I can think to implement
                // this rarely-used (in my experience) part of the API, but it can seem
                // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                // the ID of each key will change every time it's updated. Perhaps a stored
                // procedure for the `setItem()` SQL would solve this problem?
                // TODO: Don't change ID on `setItem()`.
                function key$1(n, callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [
                                    n + 1
                                ], function(t, results) {
                                    var result = results.rows.length ? results.rows.item(0).key : null;
                                    resolve(result);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys$1(callback) {
                    var self = this;
                    var promise = new Promise$1(function(resolve, reject) {
                        self.ready().then(function() {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function(t) {
                                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t, results) {
                                    var keys = [];
                                    for(var i = 0; i < results.rows.length; i++)keys.push(results.rows.item(i).key);
                                    resolve(keys);
                                }, function(t, error) {
                                    reject(error);
                                });
                            });
                        })["catch"](reject);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // https://www.w3.org/TR/webdatabase/#databases
                // > There is no way to enumerate or delete the databases available for an origin from this API.
                function getAllStoreNames(db) {
                    return new Promise$1(function(resolve, reject) {
                        db.transaction(function(t) {
                            t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t, results) {
                                var storeNames = [];
                                for(var i = 0; i < results.rows.length; i++)storeNames.push(results.rows.item(i).name);
                                resolve({
                                    db: db,
                                    storeNames: storeNames
                                });
                            }, function(t, error) {
                                reject(error);
                            });
                        }, function(sqlError) {
                            reject(sqlError);
                        });
                    });
                }
                function dropInstance$1(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    var currentConfig = this.config();
                    options = typeof options !== "function" && options || {};
                    if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject("Invalid arguments");
                    else promise = new Promise$1(function(resolve) {
                        var db;
                        if (options.name === currentConfig.name) // use the db reference of the current instance
                        db = self._dbInfo.db;
                        else db = openDatabase(options.name, "", "", 0);
                        if (!options.storeName) // drop all database tables
                        resolve(getAllStoreNames(db));
                        else resolve({
                            db: db,
                            storeNames: [
                                options.storeName
                            ]
                        });
                    }).then(function(operationInfo) {
                        return new Promise$1(function(resolve1, reject1) {
                            operationInfo.db.transaction(function(t) {
                                function dropTable(storeName) {
                                    return new Promise$1(function(resolve, reject) {
                                        t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                                            resolve();
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    });
                                }
                                var operations = [];
                                for(var i = 0, len = operationInfo.storeNames.length; i < len; i++)operations.push(dropTable(operationInfo.storeNames[i]));
                                Promise$1.all(operations).then(function() {
                                    resolve1();
                                })["catch"](function(e) {
                                    reject1(e);
                                });
                            }, function(sqlError) {
                                reject1(sqlError);
                            });
                        });
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                var webSQLStorage = {
                    _driver: "webSQLStorage",
                    _initStorage: _initStorage$1,
                    _support: isWebSQLValid(),
                    iterate: iterate$1,
                    getItem: getItem$1,
                    setItem: setItem$1,
                    removeItem: removeItem$1,
                    clear: clear$1,
                    length: length$1,
                    key: key$1,
                    keys: keys$1,
                    dropInstance: dropInstance$1
                };
                function isLocalStorageValid() {
                    try {
                        return typeof localStorage !== "undefined" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
                        !!localStorage.setItem;
                    } catch (e) {
                        return false;
                    }
                }
                function _getKeyPrefix(options, defaultConfig) {
                    var keyPrefix = options.name + "/";
                    if (options.storeName !== defaultConfig.storeName) keyPrefix += options.storeName + "/";
                    return keyPrefix;
                }
                // Check if localStorage throws when saving an item
                function checkIfLocalStorageThrows() {
                    var localStorageTestKey = "_localforage_support_test";
                    try {
                        localStorage.setItem(localStorageTestKey, true);
                        localStorage.removeItem(localStorageTestKey);
                        return false;
                    } catch (e) {
                        return true;
                    }
                }
                // Check if localStorage is usable and allows to save an item
                // This method checks if localStorage is usable in Safari Private Browsing
                // mode, or in any other case where the available quota for localStorage
                // is 0 and there wasn't any saved items yet.
                function _isLocalStorageUsable() {
                    return !checkIfLocalStorageThrows() || localStorage.length > 0;
                }
                // Config the localStorage backend, using options set in the config.
                function _initStorage$2(options) {
                    var self = this;
                    var dbInfo = {};
                    if (options) for(var i in options)dbInfo[i] = options[i];
                    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);
                    if (!_isLocalStorageUsable()) return Promise$1.reject();
                    self._dbInfo = dbInfo;
                    dbInfo.serializer = localforageSerializer;
                    return Promise$1.resolve();
                }
                // Remove all keys from the datastore, effectively destroying all data in
                // the app's key/value store!
                function clear$2(callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var keyPrefix = self._dbInfo.keyPrefix;
                        for(var i = localStorage.length - 1; i >= 0; i--){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) === 0) localStorage.removeItem(key);
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Retrieve an item from the store. Unlike the original async_storage
                // library in Gaia, we don't modify return values at all. If a key's value
                // is `undefined`, we pass that value to the callback function.
                function getItem$2(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var result = localStorage.getItem(dbInfo.keyPrefix + key);
                        // If a result was found, parse it from the serialized
                        // string into a JS object. If result isn't truthy, the key
                        // is likely undefined and we'll pass it straight to the
                        // callback.
                        if (result) result = dbInfo.serializer.deserialize(result);
                        return result;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Iterate over all items in the store.
                function iterate$2(iterator, callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var keyPrefix = dbInfo.keyPrefix;
                        var keyPrefixLength = keyPrefix.length;
                        var length = localStorage.length;
                        // We use a dedicated iterator instead of the `i` variable below
                        // so other keys we fetch in localStorage aren't counted in
                        // the `iterationNumber` argument passed to the `iterate()`
                        // callback.
                        //
                        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                        var iterationNumber = 1;
                        for(var i = 0; i < length; i++){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) !== 0) continue;
                            var value = localStorage.getItem(key);
                            // If a result was found, parse it from the serialized
                            // string into a JS object. If result isn't truthy, the
                            // key is likely undefined and we'll pass it straight
                            // to the iterator.
                            if (value) value = dbInfo.serializer.deserialize(value);
                            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);
                            if (value !== void 0) return value;
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Same as localStorage's key() method, except takes a callback.
                function key$2(n, callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var result;
                        try {
                            result = localStorage.key(n);
                        } catch (error) {
                            result = null;
                        }
                        // Remove the prefix from the key, if a key is found.
                        if (result) result = result.substring(dbInfo.keyPrefix.length);
                        return result;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function keys$2(callback) {
                    var self = this;
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        var length = localStorage.length;
                        var keys = [];
                        for(var i = 0; i < length; i++){
                            var itemKey = localStorage.key(i);
                            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                        }
                        return keys;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Supply the number of keys in the datastore to the callback function.
                function length$2(callback) {
                    var self = this;
                    var promise = self.keys().then(function(keys) {
                        return keys.length;
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Remove an item from the store, nice and simple.
                function removeItem$2(key, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        var dbInfo = self._dbInfo;
                        localStorage.removeItem(dbInfo.keyPrefix + key);
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                // Set a key's value and run an optional callback once the value is set.
                // Unlike Gaia's implementation, the callback function is passed the value,
                // in case you want to operate on that value only after you're sure it
                // saved, or something like that.
                function setItem$2(key, value3, callback) {
                    var self = this;
                    key = normalizeKey(key);
                    var promise = self.ready().then(function() {
                        // Convert undefined values to null.
                        // https://github.com/mozilla/localForage/pull/42
                        if (value3 === undefined) value3 = null;
                        // Save the original value to pass to the callback.
                        var originalValue = value3;
                        return new Promise$1(function(resolve, reject) {
                            var dbInfo = self._dbInfo;
                            dbInfo.serializer.serialize(value3, function(value, error) {
                                if (error) reject(error);
                                else try {
                                    localStorage.setItem(dbInfo.keyPrefix + key, value);
                                    resolve(originalValue);
                                } catch (e) {
                                    // localStorage capacity exceeded.
                                    // TODO: Make this a specific error/event.
                                    if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") reject(e);
                                    reject(e);
                                }
                            });
                        });
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                function dropInstance$2(options, callback) {
                    callback = getCallback.apply(this, arguments);
                    options = typeof options !== "function" && options || {};
                    if (!options.name) {
                        var currentConfig = this.config();
                        options.name = options.name || currentConfig.name;
                        options.storeName = options.storeName || currentConfig.storeName;
                    }
                    var self = this;
                    var promise;
                    if (!options.name) promise = Promise$1.reject("Invalid arguments");
                    else promise = new Promise$1(function(resolve) {
                        if (!options.storeName) resolve(options.name + "/");
                        else resolve(_getKeyPrefix(options, self._defaultConfig));
                    }).then(function(keyPrefix) {
                        for(var i = localStorage.length - 1; i >= 0; i--){
                            var key = localStorage.key(i);
                            if (key.indexOf(keyPrefix) === 0) localStorage.removeItem(key);
                        }
                    });
                    executeCallback(promise, callback);
                    return promise;
                }
                var localStorageWrapper = {
                    _driver: "localStorageWrapper",
                    _initStorage: _initStorage$2,
                    _support: isLocalStorageValid(),
                    iterate: iterate$2,
                    getItem: getItem$2,
                    setItem: setItem$2,
                    removeItem: removeItem$2,
                    clear: clear$2,
                    length: length$2,
                    key: key$2,
                    keys: keys$2,
                    dropInstance: dropInstance$2
                };
                var sameValue = function sameValue(x, y) {
                    return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
                };
                var includes = function includes(array, searchElement) {
                    var len = array.length;
                    var i = 0;
                    while(i < len){
                        if (sameValue(array[i], searchElement)) return true;
                        i++;
                    }
                    return false;
                };
                var isArray = Array.isArray || function(arg) {
                    return Object.prototype.toString.call(arg) === "[object Array]";
                };
                // Drivers are stored here when `defineDriver()` is called.
                // They are shared across all instances of localForage.
                var DefinedDrivers = {};
                var DriverSupport = {};
                var DefaultDrivers = {
                    INDEXEDDB: asyncStorage,
                    WEBSQL: webSQLStorage,
                    LOCALSTORAGE: localStorageWrapper
                };
                var DefaultDriverOrder = [
                    DefaultDrivers.INDEXEDDB._driver,
                    DefaultDrivers.WEBSQL._driver,
                    DefaultDrivers.LOCALSTORAGE._driver
                ];
                var OptionalDriverMethods = [
                    "dropInstance"
                ];
                var LibraryMethods = [
                    "clear",
                    "getItem",
                    "iterate",
                    "key",
                    "keys",
                    "length",
                    "removeItem",
                    "setItem"
                ].concat(OptionalDriverMethods);
                var DefaultConfig = {
                    description: "",
                    driver: DefaultDriverOrder.slice(),
                    name: "localforage",
                    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                    // we can use without a prompt.
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1.0
                };
                function callWhenReady(localForageInstance, libraryMethod) {
                    localForageInstance[libraryMethod] = function() {
                        var _args = arguments;
                        return localForageInstance.ready().then(function() {
                            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                        });
                    };
                }
                function extend() {
                    for(var i = 1; i < arguments.length; i++){
                        var arg = arguments[i];
                        if (arg) {
                            for(var _key in arg)if (arg.hasOwnProperty(_key)) {
                                if (isArray(arg[_key])) arguments[0][_key] = arg[_key].slice();
                                else arguments[0][_key] = arg[_key];
                            }
                        }
                    }
                    return arguments[0];
                }
                var LocalForage1 = function() {
                    function LocalForage(options) {
                        _classCallCheck(this, LocalForage);
                        for(var driverTypeKey in DefaultDrivers)if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                            var driver = DefaultDrivers[driverTypeKey];
                            var driverName = driver._driver;
                            this[driverTypeKey] = driverName;
                            if (!DefinedDrivers[driverName]) // we don't need to wait for the promise,
                            // since the default drivers can be defined
                            // in a blocking manner
                            this.defineDriver(driver);
                        }
                        this._defaultConfig = extend({}, DefaultConfig);
                        this._config = extend({}, this._defaultConfig, options);
                        this._driverSet = null;
                        this._initDriver = null;
                        this._ready = false;
                        this._dbInfo = null;
                        this._wrapLibraryMethodsWithReady();
                        this.setDriver(this._config.driver)["catch"](function() {});
                    }
                    // Set any config values for localForage; can be called anytime before
                    // the first API call (e.g. `getItem`, `setItem`).
                    // We loop through options so we don't overwrite existing config
                    // values.
                    LocalForage.prototype.config = function config(options) {
                        // If the options argument is an object, we use it to set values.
                        // Otherwise, we return either a specified config value or all
                        // config values.
                        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                            // If localforage is ready and fully initialized, we can't set
                            // any new configuration values. Instead, we return an error.
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for(var i in options){
                                if (i === "storeName") options[i] = options[i].replace(/\W/g, "_");
                                if (i === "version" && typeof options[i] !== "number") return new Error("Database version must be a number.");
                                this._config[i] = options[i];
                            }
                            // after all config options are set and
                            // the driver option is used, try setting it
                            if ("driver" in options && options.driver) return this.setDriver(this._config.driver);
                            return true;
                        } else if (typeof options === "string") return this._config[options];
                        else return this._config;
                    };
                    // Used to define a custom driver, shared across all instances of
                    // localForage.
                    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                        var promise1 = new Promise$1(function(resolve, reject) {
                            try {
                                var driverName = driverObject._driver;
                                var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                // A driver name should be defined and not overlap with the
                                // library-defined, default drivers.
                                if (!driverObject._driver) {
                                    reject(complianceError);
                                    return;
                                }
                                var driverMethods = LibraryMethods.concat("_initStorage");
                                for(var i = 0, len = driverMethods.length; i < len; i++){
                                    var driverMethodName = driverMethods[i];
                                    // when the property is there,
                                    // it should be a method even when optional
                                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                                        reject(complianceError);
                                        return;
                                    }
                                }
                                var configureMissingMethods = function configureMissingMethods() {
                                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                                        return function() {
                                            var error = new Error("Method " + methodName + " is not implemented by the current driver");
                                            var promise = Promise$1.reject(error);
                                            executeCallback(promise, arguments[arguments.length - 1]);
                                            return promise;
                                        };
                                    };
                                    for(var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++){
                                        var optionalDriverMethod = OptionalDriverMethods[_i];
                                        if (!driverObject[optionalDriverMethod]) driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                                    }
                                };
                                configureMissingMethods();
                                var setDriverSupport = function setDriverSupport(support) {
                                    if (DefinedDrivers[driverName]) console.info("Redefining LocalForage driver: " + driverName);
                                    DefinedDrivers[driverName] = driverObject;
                                    DriverSupport[driverName] = support;
                                    // don't use a then, so that we can define
                                    // drivers that have simple _support methods
                                    // in a blocking manner
                                    resolve();
                                };
                                if ("_support" in driverObject) {
                                    if (driverObject._support && typeof driverObject._support === "function") driverObject._support().then(setDriverSupport, reject);
                                    else setDriverSupport(!!driverObject._support);
                                } else setDriverSupport(true);
                            } catch (e) {
                                reject(e);
                            }
                        });
                        executeTwoCallbacks(promise1, callback, errorCallback);
                        return promise1;
                    };
                    LocalForage.prototype.driver = function driver() {
                        return this._driver || null;
                    };
                    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
                        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                        return getDriverPromise;
                    };
                    LocalForage.prototype.getSerializer = function getSerializer(callback) {
                        var serializerPromise = Promise$1.resolve(localforageSerializer);
                        executeTwoCallbacks(serializerPromise, callback);
                        return serializerPromise;
                    };
                    LocalForage.prototype.ready = function ready(callback) {
                        var self = this;
                        var promise = self._driverSet.then(function() {
                            if (self._ready === null) self._ready = self._initDriver();
                            return self._ready;
                        });
                        executeTwoCallbacks(promise, callback, callback);
                        return promise;
                    };
                    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                        var self = this;
                        if (!isArray(drivers)) drivers = [
                            drivers
                        ];
                        var supportedDrivers1 = this._getSupportedDrivers(drivers);
                        function setDriverToConfig() {
                            self._config.driver = self.driver();
                        }
                        function extendSelfWithDriver(driver) {
                            self._extend(driver);
                            setDriverToConfig();
                            self._ready = self._initStorage(self._config);
                            return self._ready;
                        }
                        function initDriver(supportedDrivers) {
                            return function() {
                                var currentDriverIndex = 0;
                                function driverPromiseLoop() {
                                    while(currentDriverIndex < supportedDrivers.length){
                                        var driverName = supportedDrivers[currentDriverIndex];
                                        currentDriverIndex++;
                                        self._dbInfo = null;
                                        self._ready = null;
                                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                                    }
                                    setDriverToConfig();
                                    var error = new Error("No available storage method found.");
                                    self._driverSet = Promise$1.reject(error);
                                    return self._driverSet;
                                }
                                return driverPromiseLoop();
                            };
                        }
                        // There might be a driver initialization in progress
                        // so wait for it to finish in order to avoid a possible
                        // race condition to set _dbInfo
                        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                            return Promise$1.resolve();
                        }) : Promise$1.resolve();
                        this._driverSet = oldDriverSetDone.then(function() {
                            var driverName = supportedDrivers1[0];
                            self._dbInfo = null;
                            self._ready = null;
                            return self.getDriver(driverName).then(function(driver) {
                                self._driver = driver._driver;
                                setDriverToConfig();
                                self._wrapLibraryMethodsWithReady();
                                self._initDriver = initDriver(supportedDrivers1);
                            });
                        })["catch"](function() {
                            setDriverToConfig();
                            var error = new Error("No available storage method found.");
                            self._driverSet = Promise$1.reject(error);
                            return self._driverSet;
                        });
                        executeTwoCallbacks(this._driverSet, callback, errorCallback);
                        return this._driverSet;
                    };
                    LocalForage.prototype.supports = function supports(driverName) {
                        return !!DriverSupport[driverName];
                    };
                    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                        extend(this, libraryMethodsAndProperties);
                    };
                    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                        var supportedDrivers = [];
                        for(var i = 0, len = drivers.length; i < len; i++){
                            var driverName = drivers[i];
                            if (this.supports(driverName)) supportedDrivers.push(driverName);
                        }
                        return supportedDrivers;
                    };
                    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                        // Add a stub for each driver API method that delays the call to the
                        // corresponding driver method until localForage is ready. These stubs
                        // will be replaced by the driver methods as soon as the driver is
                        // loaded, so there is no performance impact.
                        for(var i = 0, len = LibraryMethods.length; i < len; i++)callWhenReady(this, LibraryMethods[i]);
                    };
                    LocalForage.prototype.createInstance = function createInstance(options) {
                        return new LocalForage(options);
                    };
                    return LocalForage;
                }();
                // The actual localForage object that we expose as a module or via a
                // global. It's extended by pulling in one of our other libraries.
                var localforage_js = new LocalForage1();
                module.exports = localforage_js;
            },
            {
                "3": 3
            }
        ]
    }, {}, [
        4
    ])(4);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"qK0XA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function doc(docSelectionCriteria) {
    if (!docSelectionCriteria) this.userErrors.push("No document criteria specified in doc() method. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }");
    else if (typeof docSelectionCriteria !== "string" && typeof docSelectionCriteria !== "object") this.userErrors.push("Document criteria specified in doc() method must not be a number or boolean. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }");
    else this.docSelectionCriteria = docSelectionCriteria;
    return this;
}
exports.default = doc;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bL1Q6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function orderBy(property, direction) {
    if (!property) this.userErrors.push("No field name specified in orderBy() method. Use a string e.g. 'name'");
    else if (typeof property !== "string") this.userErrors.push("First parameter in orderBy() method must be a string (a field name) e.g. 'name'");
    else this.orderByProperty = property;
    if (direction) {
        if (direction !== "asc" && direction !== "desc") this.userErrors.push("Second parameter in orderBy() method must be a string set to 'asc' or 'desc'.");
        else this.orderByDirection = direction;
    }
    return this;
}
exports.default = orderBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17Q3M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function limit(limitBy) {
    if (!limitBy) this.userErrors.push("No integer specified in limit() method.");
    else if (!Number.isInteger(limitBy)) this.userErrors.push("Limit parameter in limit() method must be an integer (e.g. 3) and not a float, boolean, string or object.");
    else this.limitBy = limitBy;
    return this;
}
exports.default = limit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5kIkC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSubset = require("../../utils/isSubset");
var _isSubsetDefault = parcelHelpers.interopDefault(_isSubset);
var _logger = require("../../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _reset = require("../../api-utils/reset");
var _resetDefault = parcelHelpers.interopDefault(_reset);
var _selectionLevel = require("../../api-utils/selectionLevel");
var _selectionLevelDefault = parcelHelpers.interopDefault(_selectionLevel);
var _showUserErrors = require("../../api-utils/showUserErrors");
var _showUserErrorsDefault = parcelHelpers.interopDefault(_showUserErrors);
function get(options = {
    keys: false
}) {
    // get collection
    this.getCollection = ()=>{
        let collectionName = this.collectionName;
        let orderByProperty = this.orderByProperty;
        let orderByDirection = this.orderByDirection;
        let limitBy = this.limitBy;
        let collection = [];
        return this.lf[collectionName].iterate((value, key)=>{
            let collectionItem = {};
            if (!options.keys) collectionItem = value;
            else collectionItem = {
                key: key,
                data: value
            };
            collection.push(collectionItem);
        }).then(()=>{
            let logMessage = `Got "${collectionName}" collection`;
            // orderBy
            if (orderByProperty) {
                logMessage += `, ordered by "${orderByProperty}"`;
                if (!options.keys) collection.sort((a, b)=>{
                    return a[orderByProperty].toString().localeCompare(b[orderByProperty].toString());
                });
                else collection.sort((a, b)=>{
                    return a.data[orderByProperty].toString().localeCompare(b.data[orderByProperty].toString());
                });
            }
            if (orderByDirection == "desc") {
                logMessage += ` (descending)`;
                collection.reverse();
            }
            // limit
            if (limitBy) {
                logMessage += `, limited to ${limitBy}`;
                collection = collection.splice(0, limitBy);
            }
            logMessage += `:`;
            (0, _loggerDefault.default).log.call(this, logMessage, collection);
            (0, _resetDefault.default).call(this);
            return collection;
        });
    };
    // get document
    this.getDocument = ()=>{
        let collectionName = this.collectionName;
        let docSelectionCriteria = this.docSelectionCriteria;
        let collection = [];
        let document = {};
        // get document by criteria
        this.getDocumentByCriteria = ()=>{
            return this.lf[collectionName].iterate((value, key)=>{
                if ((0, _isSubsetDefault.default)(value, docSelectionCriteria)) collection.push(value);
            }).then(()=>{
                if (!collection.length) (0, _loggerDefault.default).error.call(this, `Could not find Document in "${collectionName}" collection with criteria: ${JSON.stringify(docSelectionCriteria)}`);
                else {
                    document = collection[0];
                    (0, _loggerDefault.default).log.call(this, `Got Document with ${JSON.stringify(docSelectionCriteria)}:`, document);
                    (0, _resetDefault.default).call(this);
                    return document;
                }
            });
        };
        // get document by key
        this.getDocumentByKey = ()=>{
            return this.lf[collectionName].getItem(docSelectionCriteria).then((value)=>{
                document = value;
                if (document) (0, _loggerDefault.default).log.call(this, `Got Document with key ${JSON.stringify(docSelectionCriteria)}:`, document);
                else (0, _loggerDefault.default).error.call(this, `Could not find Document in "${collectionName}" collection with Key: ${JSON.stringify(docSelectionCriteria)}`);
                (0, _resetDefault.default).call(this);
                return document;
            }).catch((err)=>{
                (0, _loggerDefault.default).error.call(this, `Could not find Document in "${collectionName}" collection with Key: ${JSON.stringify(docSelectionCriteria)}`);
                (0, _resetDefault.default).call(this);
            });
        };
        if (typeof docSelectionCriteria == "object") return this.getDocumentByCriteria();
        else return this.getDocumentByKey();
    };
    // check for user errors
    if (!(typeof options == "object" && options instanceof Array == false)) this.userErrors.push('Data passed to .get() must be an object. Not an array, string, number or boolean. The object must contain a "keys" property set to true or false, e.g. { keys: true }');
    else {
        if (!options.hasOwnProperty("keys")) this.userErrors.push('Object passed to get() method must contain a "keys" property set to boolean true or false, e.g. { keys: true }');
        else if (typeof options.keys !== "boolean") this.userErrors.push('Property "keys" passed into get() method must be assigned a boolean value (true or false). Not a string or integer.');
    }
    if (!this.userErrors.length) {
        let currentSelectionLevel = (0, _selectionLevelDefault.default).call(this);
        if (currentSelectionLevel == "collection") return this.getCollection();
        else if (currentSelectionLevel == "doc") return this.getDocument();
    } else {
        (0, _showUserErrorsDefault.default).call(this);
        return null;
    }
}
exports.default = get;

},{"../../utils/isSubset":"ir65S","../../utils/logger":"ghrll","../../api-utils/reset":"3C40q","../../api-utils/selectionLevel":"c40LP","../../api-utils/showUserErrors":"1Acg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ir65S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSubset(superObj, subObj) {
    return Object.keys(subObj).every((ele)=>{
        if (typeof subObj[ele] == "object") return isSubset(superObj[ele], subObj[ele]);
        return subObj[ele] === superObj[ele];
    });
}
exports.default = isSubset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghrll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let logger = {
    baseStyle: `
    padding: 2px 5px;
    background-color: #124F5C;
    border-radius: 4px;
    color: white; 
  `,
    colors: {
        log: "#124F5C",
        error: "#ed2939",
        warn: "#f39c12"
    },
    log (message, secondary) {
        if (this.config.debug) {
            let style = logger.baseStyle + `background-color: ${logger.colors.log}`;
            if (secondary) console.log("%clocalbase", style, message, secondary);
            else console.log("%clocalbase", style, message);
        }
    },
    error (message, secondary) {
        if (this.config.debug) {
            let style = logger.baseStyle + `background-color: ${logger.colors.error}`;
            console.error("%clocalbase", style, message);
        }
    },
    warn (message, secondary) {
        if (this.config.debug) {
            let style = logger.baseStyle + `background-color: ${logger.colors.warn}`;
            console.warn("%clocalbase", style, message);
        }
    }
};
exports.default = logger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3C40q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reset() {
    this.collectionName = null;
    this.orderByProperty = null;
    this.orderByDirection = null;
    this.limitBy = null;
    this.docSelectionCriteria = null;
    this.userErrors = [];
}
exports.default = reset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c40LP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function selectionLevel() {
    let level;
    if (!this.collectionName && !this.docSelectionCriteria) level = "db";
    else if (this.collectionName && !this.docSelectionCriteria) level = "collection";
    else if (this.collectionName && this.docSelectionCriteria) level = "doc";
    return level;
}
exports.default = selectionLevel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Acg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logger = require("../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _reset = require("./reset");
var _resetDefault = parcelHelpers.interopDefault(_reset);
function showUserErrors() {
    for(let i = 0; i < this.userErrors.length; i++)(0, _loggerDefault.default).error.call(this, this.userErrors[i]);
    (0, _resetDefault.default).call(this);
}
exports.default = showUserErrors;

},{"../utils/logger":"ghrll","./reset":"3C40q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"higtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _success = require("../../api-utils/success");
var _successDefault = parcelHelpers.interopDefault(_success);
var _error = require("../../api-utils/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
var _showUserErrors = require("../../api-utils/showUserErrors");
var _showUserErrorsDefault = parcelHelpers.interopDefault(_showUserErrors);
let UUID = require("ordered-uuid");
function add(data, keyProvided) {
    // check for user errors
    if (!data) this.userErrors.push('No data specified in add() method. You must use an object, e.g { id: 1, name: "Bill", age: 47 }');
    else if (!(typeof data == "object" && data instanceof Array == false)) this.userErrors.push("Data passed to .add() must be an object. Not an array, string, number or boolean.");
    // no user errors, do the add
    if (!this.userErrors.length) {
        let collectionName = this.collectionName;
        return new Promise((resolve, reject)=>{
            let key = null;
            // if no key provided, generate random, ordered key
            if (!keyProvided) key = UUID.generate();
            else key = keyProvided;
            return this.lf[collectionName].setItem(key, data).then(()=>{
                resolve((0, _successDefault.default).call(this, `Document added to "${collectionName}" collection.`, {
                    key,
                    data
                }));
            }).catch((err)=>{
                reject((0, _errorDefault.default).call(this, `Could not add Document to ${collectionName} collection.`));
            });
        });
    } else (0, _showUserErrorsDefault.default).call(this);
}
exports.default = add;

},{"../../api-utils/success":"eOUus","../../api-utils/error":"bAnhD","../../api-utils/showUserErrors":"1Acg5","ordered-uuid":"6WeCF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOUus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logger = require("../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _reset = require("../api-utils/reset");
var _resetDefault = parcelHelpers.interopDefault(_reset);
function success(message, data) {
    (0, _resetDefault.default).call(this);
    (0, _loggerDefault.default).log.call(this, message, data);
    return {
        success: true,
        message: message,
        data: data
    };
}
exports.default = success;

},{"../utils/logger":"ghrll","../api-utils/reset":"3C40q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAnhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logger = require("../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _reset = require("../api-utils/reset");
var _resetDefault = parcelHelpers.interopDefault(_reset);
function error(message) {
    (0, _resetDefault.default).call(this);
    (0, _loggerDefault.default).error.call(this, message);
    return `Error: ${message}`;
}
exports.default = error;

},{"../utils/logger":"ghrll","../api-utils/reset":"3C40q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WeCF":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
var uuid = require("uuid");
module.exports = {
    generate: function() {
        var unordered = uuid.v1();
        return unordered.substr(14, 4) + unordered.substr(9, 4) + unordered.substr(0, 8) + unordered.substr(19, 4) + unordered.substr(24, unordered.length);
    },
    toBinary16: function(orderedUuid) {
        return new Buffer(orderedUuid, "hex");
    },
    fromBinary16: function(binaryOrderedUuid) {
        return binaryOrderedUuid.toString("hex");
    }
};

},{"buffer":"fCgem","uuid":"2YH3o"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 0x100))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength5 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength7 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 0xFF0000) + (uint8[i2 + 1] << 8 & 0xFF00) + (uint8[i2 + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"2YH3o":[function(require,module,exports) {
var v1 = require("./v1");
var v4 = require("./v4");
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

},{"./v1":"1UaLK","./v4":"nZnAg"}],"1UaLK":[function(require,module,exports) {
var rng = require("./lib/rng");
var bytesToUuid = require("./lib/bytesToUuid");
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf ? buf : bytesToUuid(b);
}
module.exports = v1;

},{"./lib/rng":"575ZK","./lib/bytesToUuid":"hFTr1"}],"575ZK":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
    };
} else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
        for(var i = 0, r; i < 16; i++){
            if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
            rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return rnds;
    };
}

},{}],"hFTr1":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex[i] = (i + 0x100).toString(16).substr(1);
function bytesToUuid(buf, offset) {
    var i1 = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return [
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        "-",
        bth[buf[i1++]],
        bth[buf[i1++]],
        "-",
        bth[buf[i1++]],
        bth[buf[i1++]],
        "-",
        bth[buf[i1++]],
        bth[buf[i1++]],
        "-",
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]]
    ].join("");
}
module.exports = bytesToUuid;

},{}],"nZnAg":[function(require,module,exports) {
var rng = require("./lib/rng");
var bytesToUuid = require("./lib/bytesToUuid");
function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) for(var ii = 0; ii < 16; ++ii)buf[i + ii] = rnds[ii];
    return buf || bytesToUuid(rnds);
}
module.exports = v4;

},{"./lib/rng":"575ZK","./lib/bytesToUuid":"hFTr1"}],"hi54k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logger = require("../../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _isSubset = require("../../utils/isSubset");
var _isSubsetDefault = parcelHelpers.interopDefault(_isSubset);
var _updateObject = require("../../utils/updateObject");
var _updateObjectDefault = parcelHelpers.interopDefault(_updateObject);
var _success = require("../../api-utils/success");
var _successDefault = parcelHelpers.interopDefault(_success);
var _error = require("../../api-utils/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
var _showUserErrors = require("../../api-utils/showUserErrors");
var _showUserErrorsDefault = parcelHelpers.interopDefault(_showUserErrors);
function update(docUpdates) {
    let collectionName = this.collectionName;
    let docSelectionCriteria = this.docSelectionCriteria;
    return new Promise((resolve, reject)=>{
        // update document by criteria
        this.updateDocumentByCriteria = ()=>{
            let docsToUpdate = [];
            this.lf[collectionName].iterate((value, key)=>{
                if ((0, _isSubsetDefault.default)(value, docSelectionCriteria)) {
                    let newDocument = (0, _updateObjectDefault.default)(value, docUpdates);
                    docsToUpdate.push({
                        key,
                        newDocument
                    });
                }
            }).then(()=>{
                if (!docsToUpdate.length) reject((0, _errorDefault.default).call(this, `No Documents found in ${collectionName} Collection with criteria ${JSON.stringify(docSelectionCriteria)}.`));
                if (docsToUpdate.length > 1) (0, _loggerDefault.default).warn.call(this, `Multiple documents (${docsToUpdate.length}) with ${JSON.stringify(docSelectionCriteria)} found for updating.`);
            }).then(()=>{
                docsToUpdate.forEach((docToUpdate, index)=>{
                    this.lf[collectionName].setItem(docToUpdate.key, docToUpdate.newDocument).then((value)=>{
                        if (index === docsToUpdate.length - 1) resolve((0, _successDefault.default).call(this, `${docsToUpdate.length} Document${docsToUpdate.length > 1 ? "s" : ""} in "${collectionName}" collection with ${JSON.stringify(docSelectionCriteria)} updated.`, docUpdates));
                    }).catch((err)=>{
                        reject((0, _errorDefault.default).call(this, `Could not update ${docsToUpdate.length} Documents in ${collectionName} Collection.`));
                    });
                });
            });
        };
        // update document by key
        this.updateDocumentByKey = ()=>{
            let newDocument = {};
            this.lf[collectionName].getItem(docSelectionCriteria).then((value)=>{
                newDocument = (0, _updateObjectDefault.default)(value, docUpdates);
                this.lf[collectionName].setItem(docSelectionCriteria, newDocument);
                resolve((0, _successDefault.default).call(this, `Document in "${collectionName}" collection with key ${JSON.stringify(docSelectionCriteria)} updated.`, newDocument));
            }).catch((err)=>{
                reject((0, _errorDefault.default).call(this, `No Document found in "${collectionName}" collection with key ${JSON.stringify(docSelectionCriteria)}`));
            });
        };
        // check for user errors
        if (!docUpdates) this.userErrors.push('No update object provided to update() method. Use an object e.g. { name: "William" }');
        else if (!(typeof docUpdates == "object" && docUpdates instanceof Array == false)) this.userErrors.push("Data passed to .update() must be an object. Not an array, string, number or boolean.");
        if (!this.userErrors.length) {
            if (typeof docSelectionCriteria == "object") this.updateDocumentByCriteria();
            else this.updateDocumentByKey();
        } else (0, _showUserErrorsDefault.default).call(this);
    });
}
exports.default = update;

},{"../../utils/logger":"ghrll","../../utils/isSubset":"ir65S","../../utils/updateObject":"4e2pu","../../api-utils/success":"eOUus","../../api-utils/error":"bAnhD","../../api-utils/showUserErrors":"1Acg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4e2pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateObject(obj /*, …*/ ) {
    for(var i = 1; i < arguments.length; i++)for(var prop in arguments[i]){
        var val = arguments[i][prop];
        // if (typeof val == "object") // this also applies to arrays or null!
        //   updateObject(obj[prop], val);
        // else
        //    obj[prop] = val;
        obj[prop] = val;
    }
    return obj;
}
exports.default = updateObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UsTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logger = require("../../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _isSubset = require("../../utils/isSubset");
var _isSubsetDefault = parcelHelpers.interopDefault(_isSubset);
var _success = require("../../api-utils/success");
var _successDefault = parcelHelpers.interopDefault(_success);
var _error = require("../../api-utils/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
var _showUserErrors = require("../../api-utils/showUserErrors");
var _showUserErrorsDefault = parcelHelpers.interopDefault(_showUserErrors);
var _selectionLevel = require("../../api-utils/selectionLevel");
var _selectionLevelDefault = parcelHelpers.interopDefault(_selectionLevel);
function set(newDocument, options = {
    keys: false
}) {
    let collectionName = this.collectionName;
    let docSelectionCriteria = this.docSelectionCriteria;
    let currentSelectionLevel = (0, _selectionLevelDefault.default).call(this);
    return new Promise((resolve, reject)=>{
        // set collection
        this.setCollection = ()=>{
            this.lf[collectionName].clear().then(()=>{
                if (!options.keys) {
                    newDocument.forEach((doc)=>{
                        this.add(doc);
                    });
                    resolve((0, _successDefault.default).call(this, `Collection "${collectionName}" set with ${newDocument.length} Documents.`, newDocument));
                } else {
                    console.log("keys provided");
                    // check that every document in array has a _key property
                    let docsWithoutKey = 0;
                    newDocument.forEach((doc)=>{
                        if (!doc.hasOwnProperty("_key")) docsWithoutKey++;
                    });
                    if (docsWithoutKey) reject((0, _errorDefault.default).call(this, `Documents provided to .set() in an array must each have a _key property set to a string.`));
                    else {
                        newDocument.forEach((doc)=>{
                            let key = doc._key;
                            delete doc._key;
                            this.add(doc, key);
                        });
                        resolve((0, _successDefault.default).call(this, `Collection "${collectionName}" set with ${newDocument.length} Documents.`, newDocument));
                    }
                }
            }).catch((err)=>{
                reject((0, _errorDefault.default).call(this, `Could not set ${collectionName} Collection with data ${JSON.stringify(newDocument)}.`));
            });
        };
        // set document
        this.setDocument = ()=>{
            // set document by criteria
            this.setDocumentByCriteria = ()=>{
                let docsToSet = [];
                this.lf[collectionName].iterate((value, key)=>{
                    if ((0, _isSubsetDefault.default)(value, docSelectionCriteria)) docsToSet.push({
                        key,
                        newDocument
                    });
                }).then(()=>{
                    if (!docsToSet.length) reject((0, _errorDefault.default).call(this, `No Documents found in ${collectionName} Collection with criteria ${JSON.stringify(docSelectionCriteria)}.`));
                    if (docsToSet.length > 1) (0, _loggerDefault.default).warn.call(this, `Multiple documents (${docsToSet.length}) with ${JSON.stringify(docSelectionCriteria)} found for setting.`);
                }).then(()=>{
                    docsToSet.forEach((docToSet, index)=>{
                        this.lf[collectionName].setItem(docToSet.key, docToSet.newDocument).then((value)=>{
                            if (index === docsToSet.length - 1) resolve((0, _successDefault.default).call(this, `${docsToSet.length} Document${docsToSet.length > 1 ? "s" : ""} in "${collectionName}" collection with ${JSON.stringify(docSelectionCriteria)} was set.`, newDocument));
                        }).catch((err)=>{
                            reject((0, _errorDefault.default).call(this, `Could not set ${docsToSet.length} Documents in ${collectionName} Collection.`));
                        });
                    });
                });
            };
            // set document by key
            this.setDocumentByKey = ()=>{
                this.lf[collectionName].setItem(docSelectionCriteria, newDocument).then((value)=>{
                    resolve((0, _successDefault.default).call(this, `Document in "${collectionName}" collection with key ${JSON.stringify(docSelectionCriteria)} was set.`, newDocument));
                }).catch((err)=>{
                    reject((0, _errorDefault.default).call(this, `Document in "${collectionName}" collection with key ${JSON.stringify(docSelectionCriteria)} could not be set.`));
                });
            };
            if (typeof docSelectionCriteria == "object") return this.setDocumentByCriteria();
            else return this.setDocumentByKey();
        };
        // check for user errors
        if (!newDocument) this.userErrors.push('No new Document object provided to set() method. Use an object e.g. { id: 1, name: "Bill", age: 47 }');
        else if (currentSelectionLevel === "doc") {
            if (!(typeof newDocument == "object" && newDocument instanceof Array == false)) this.userErrors.push("Data passed to .set() must be an object. Not an array, string, number or boolean.");
        } else if (currentSelectionLevel === "collection") {
            if (!(typeof newDocument == "object" && newDocument instanceof Array == true)) this.userErrors.push("Data passed to .set() must be an array of objects. Not an object, string, number or boolean.");
        }
        if (!this.userErrors.length) {
            if (currentSelectionLevel == "collection") return this.setCollection();
            else if (currentSelectionLevel == "doc") return this.setDocument();
        } else (0, _showUserErrorsDefault.default).call(this);
    });
}
exports.default = set;

},{"../../utils/logger":"ghrll","../../utils/isSubset":"ir65S","../../api-utils/success":"eOUus","../../api-utils/error":"bAnhD","../../api-utils/showUserErrors":"1Acg5","../../api-utils/selectionLevel":"c40LP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VDu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSubset = require("../../utils/isSubset");
var _isSubsetDefault = parcelHelpers.interopDefault(_isSubset);
var _logger = require("../../utils/logger");
var _loggerDefault = parcelHelpers.interopDefault(_logger);
var _selectionLevel = require("../../api-utils/selectionLevel");
var _selectionLevelDefault = parcelHelpers.interopDefault(_selectionLevel);
var _success = require("../../api-utils/success");
var _successDefault = parcelHelpers.interopDefault(_success);
var _error = require("../../api-utils/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
var _showUserErrors = require("../../api-utils/showUserErrors");
var _showUserErrorsDefault = parcelHelpers.interopDefault(_showUserErrors);
function deleteIt() {
    return new Promise((resolve, reject)=>{
        // delete database
        this.deleteDatabase = ()=>{
            let dbName = this.dbName;
            indexedDB.deleteDatabase(dbName);
            resolve((0, _successDefault.default).call(this, `Database "${dbName}" deleted.`, {
                database: dbName
            }));
        };
        // delete collection
        this.deleteCollection = ()=>{
            let dbName = this.dbName;
            let collectionName1 = this.collectionName;
            // we can only delete one collection at a time, which is why we need a queue
            this.addToDeleteCollectionQueue = (collectionName)=>{
                this.deleteCollectionQueue.queue.push(collectionName);
                this.runDeleteCollectionQueue();
            };
            this.runDeleteCollectionQueue = ()=>{
                if (this.deleteCollectionQueue.running == false) {
                    this.deleteCollectionQueue.running = true;
                    this.deleteNextCollectionFromQueue();
                }
            };
            this.deleteNextCollectionFromQueue = ()=>{
                if (this.deleteCollectionQueue.queue.length) {
                    let collectionToDelete = this.deleteCollectionQueue.queue[0];
                    this.deleteCollectionQueue.queue.shift();
                    this.lf[collectionToDelete].dropInstance({
                        name: dbName,
                        storeName: collectionToDelete
                    }).then(()=>{
                        this.deleteNextCollectionFromQueue();
                        resolve((0, _successDefault.default).call(this, `Collection "${collectionToDelete}" deleted.`, {
                            collection: collectionToDelete
                        }));
                    }).catch((error)=>{
                        reject(error.call(this, `Collection "${collectionToDelete}" could not be deleted.`));
                    });
                } else this.deleteCollectionQueue.running = false;
            };
            this.addToDeleteCollectionQueue(collectionName1);
        };
        // delete document
        this.deleteDocument = ()=>{
            let collectionName = this.collectionName;
            let docSelectionCriteria = this.docSelectionCriteria;
            // delete document by criteria
            this.deleteDocumentByCriteria = ()=>{
                let keysForDeletion = [];
                this.lf[collectionName].iterate((value, key)=>{
                    if ((0, _isSubsetDefault.default)(value, docSelectionCriteria)) keysForDeletion.push(key);
                }).then(()=>{
                    if (!keysForDeletion.length) reject((0, _errorDefault.default).call(this, `No Documents found in "${collectionName}" Collection with criteria ${JSON.stringify(docSelectionCriteria)}. No documents deleted.`));
                    if (keysForDeletion.length > 1) (0, _loggerDefault.default).warn.call(this, `Multiple documents (${keysForDeletion.length}) with ${JSON.stringify(docSelectionCriteria)} found.`);
                }).then(()=>{
                    keysForDeletion.forEach((key, index)=>{
                        this.lf[collectionName].removeItem(key).then(()=>{
                            if (index === keysForDeletion.length - 1) resolve((0, _successDefault.default).call(this, `${keysForDeletion.length} Document${keysForDeletion.length > 1 ? "s" : ""} with ${JSON.stringify(docSelectionCriteria)} deleted.`, {
                                keys: keysForDeletion
                            }));
                        }).catch((err)=>{
                            reject((0, _errorDefault.default).call(this, `Could not delete ${keysForDeletion.length} Documents in ${collectionName} Collection.`));
                        });
                    });
                });
            };
            // delete document by key
            this.deleteDocumentByKey = ()=>{
                this.lf[collectionName].getItem(docSelectionCriteria).then((value)=>{
                    if (value) this.lf[collectionName].removeItem(docSelectionCriteria).then(()=>{
                        resolve((0, _successDefault.default).call(this, `Document with key ${JSON.stringify(docSelectionCriteria)} deleted.`, {
                            key: docSelectionCriteria
                        }));
                    }).catch(function(err) {
                        reject((0, _errorDefault.default).call(this, `No Document found in "${collectionName}" Collection with key ${JSON.stringify(docSelectionCriteria)}. No document was deleted.`));
                    });
                    else reject((0, _errorDefault.default).call(this, `No Document found in "${collectionName}" Collection with key ${JSON.stringify(docSelectionCriteria)}. No document was deleted.`));
                });
            };
            if (typeof docSelectionCriteria == "object") return this.deleteDocumentByCriteria();
            else return this.deleteDocumentByKey();
        };
        if (!this.userErrors.length) {
            let currentSelectionLevel = (0, _selectionLevelDefault.default).call(this);
            if (currentSelectionLevel == "db") return this.deleteDatabase();
            else if (currentSelectionLevel == "collection") return this.deleteCollection();
            else if (currentSelectionLevel == "doc") return this.deleteDocument();
        } else (0, _showUserErrorsDefault.default).call(this);
    });
}
exports.default = deleteIt;

},{"../../utils/isSubset":"ir65S","../../utils/logger":"ghrll","../../api-utils/selectionLevel":"c40LP","../../api-utils/success":"eOUus","../../api-utils/error":"bAnhD","../../api-utils/showUserErrors":"1Acg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cV0sV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class DateValue {
    date = new Date();
    dateEdited;
    dateInput = document.querySelector(".date");
    constructor(){
        this.editDate();
        this.dateInput.addEventListener("change", ()=>this.setCostumeDate());
    }
    editDate() {
        this.dateEdited = [
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            this.date.getDate(), 
        ];
    }
    setCostumeDate() {
        this.dateEdited = this.dateInput.value.split("-");
        const costumeDate = this.dateEdited.map((el)=>parseInt(el, 10));
        this.dateEdited = costumeDate;
    }
}
const date = new DateValue();
exports.default = {
    date
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyEMS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _localbase = require("localbase");
var _localbaseDefault = parcelHelpers.interopDefault(_localbase);
var _scriptJs = require("./script.js");
var _scriptJsDefault = parcelHelpers.interopDefault(_scriptJs);
class TransactionsList {
    dataBase = new (0, _localbaseDefault.default)("Wydatki");
    transactions;
    last;
    constructor(){
        this.last = document.querySelector(".last");
        this.last.addEventListener("click", ()=>this.getData());
    }
    getData() {
        this.dataBase.collection("expances").get().then((transactions)=>{
            this.transactions = transactions;
            console.log(this.transactions);
        // x.map((el) =>
        //   console.log(
        //     `Kwota : ${el.value} Categoria: ${el.category} Data: ${el.date[0]}/${el.date[1]}/${el.date[2]} `
        //   )
        // );
        });
    }
}
exports.default = transactionsList = new TransactionsList();

},{"localbase":"bnEjv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./script.js":"6rimH"}]},["2mNKm","6rimH"], "6rimH", "parcelRequire605b")

//# sourceMappingURL=index.8cfc62b9.js.map
