/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webix-jet/dist/es6/jet.js":
/*!************************************************!*\
  !*** ./node_modules/webix-jet/dist/es6/jet.js ***!
  \************************************************/
/*! exports provided: plugins, errors, JetApp, JetView, HashRouter, StoreRouter, UrlRouter, EmptyRouter, SubRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetApp", function() { return JetApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetView", function() { return JetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouter", function() { return StoreRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyRouter", function() { return EmptyRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRouter", function() { return SubRouter; });
class NavigationBlocked { }

class JetBase {
    constructor(webix) {
        this.webixJet = true;
        this.webix = webix;
        this._events = [];
        this._subs = {};
        this._data = {};
    }
    getRoot() {
        return this._root;
    }
    destructor() {
        this._detachEvents();
        this._destroySubs();
        this._events = this._container = this.app = this._parent = this._root = null;
    }
    setParam(id, value, url) {
        if (this._data[id] !== value) {
            this._data[id] = value;
            this._segment.update(id, value, 0);
            if (url) {
                return this.show(null);
            }
        }
    }
    getParam(id, parent) {
        const value = this._data[id];
        if (typeof value !== "undefined" || !parent) {
            return value;
        }
        const view = this.getParentView();
        if (view) {
            return view.getParam(id, parent);
        }
    }
    getUrl() {
        return this._segment.suburl();
    }
    getUrlString() {
        return this._segment.toString();
    }
    getParentView() {
        return this._parent;
    }
    $$(id) {
        if (typeof id === "string") {
            const root = this.getRoot();
            return root.queryView((obj => (obj.config.id === id || obj.config.localId === id) &&
                (obj.$scope === root.$scope)), "self");
        }
        else {
            return id;
        }
    }
    on(obj, name, code) {
        const id = obj.attachEvent(name, code);
        this._events.push({ obj, id });
        return id;
    }
    contains(view) {
        for (const key in this._subs) {
            const kid = this._subs[key].view;
            if (kid === view || kid.contains(view)) {
                return true;
            }
        }
        return false;
    }
    getSubView(name) {
        const sub = this.getSubViewInfo(name);
        if (sub) {
            return sub.subview.view;
        }
    }
    getSubViewInfo(name) {
        const sub = this._subs[name || "default"];
        if (sub) {
            return { subview: sub, parent: this };
        }
        if (name === "_top") {
            this._subs[name] = { url: "", id: null, popup: true };
            return this.getSubViewInfo(name);
        }
        // when called from a child view, searches for nearest parent with subview
        if (this._parent) {
            return this._parent.getSubViewInfo(name);
        }
        return null;
    }
    _detachEvents() {
        const events = this._events;
        for (let i = events.length - 1; i >= 0; i--) {
            events[i].obj.detachEvent(events[i].id);
        }
    }
    _destroySubs() {
        // destroy sub views
        for (const key in this._subs) {
            const subView = this._subs[key].view;
            // it possible that subview was not loaded with any content yet
            // so check on null
            if (subView) {
                subView.destructor();
            }
        }
        // reset to prevent memory leaks
        this._subs = {};
    }
    _init_url_data() {
        const url = this._segment.current();
        this._data = {};
        this.webix.extend(this._data, url.params, true);
    }
    _getDefaultSub() {
        if (this._subs.default) {
            return this._subs.default;
        }
        for (const key in this._subs) {
            const sub = this._subs[key];
            if (!sub.branch && sub.view && key !== "_top") {
                const child = sub.view._getDefaultSub();
                if (child) {
                    return child;
                }
            }
        }
    }
    _routed_view() {
        const parent = this.getParentView();
        if (!parent) {
            return true;
        }
        const sub = parent._getDefaultSub();
        if (!sub && sub !== this) {
            return false;
        }
        return parent._routed_view();
    }
}

function parse(url) {
    // remove starting /
    if (url[0] === "/") {
        url = url.substr(1);
    }
    // split url by "/"
    const parts = url.split("/");
    const chunks = [];
    // for each page in url
    for (let i = 0; i < parts.length; i++) {
        const test = parts[i];
        const result = {};
        // detect params
        // support old 			some:a=b:c=d
        // and new notation		some?a=b&c=d
        let pos = test.indexOf(":");
        if (pos === -1) {
            pos = test.indexOf("?");
        }
        if (pos !== -1) {
            const params = test.substr(pos + 1).split(/[\:\?\&]/g);
            // create hash of named params
            for (const param of params) {
                const dchunk = param.split("=");
                result[dchunk[0]] = decodeURIComponent(dchunk[1]);
            }
        }
        // store parsed values
        chunks[i] = {
            page: (pos > -1 ? test.substr(0, pos) : test),
            params: result,
            isNew: true
        };
    }
    // return array of page objects
    return chunks;
}
function url2str(stack) {
    const url = [];
    for (const chunk of stack) {
        url.push("/" + chunk.page);
        const params = obj2str(chunk.params);
        if (params) {
            url.push("?" + params);
        }
    }
    return url.join("");
}
function obj2str(obj) {
    const str = [];
    for (const key in obj) {
        if (str.length) {
            str.push("&");
        }
        str.push(key + "=" + encodeURIComponent(obj[key]));
    }
    return str.join("");
}

class Route {
    constructor(route, index) {
        this._next = 1;
        if (typeof route === "string") {
            this.route = {
                url: parse(route),
                path: route
            };
        }
        else {
            this.route = route;
        }
        this.index = index;
    }
    current() {
        return this.route.url[this.index];
    }
    next() {
        return this.route.url[this.index + this._next];
    }
    suburl() {
        return this.route.url.slice(this.index);
    }
    shift() {
        return new Route(this.route, this.index + this._next);
    }
    refresh() {
        const url = this.route.url;
        for (let i = this.index + 1; i < url.length; i++) {
            url[i].isNew = true;
        }
    }
    toString() {
        const str = url2str(this.suburl());
        return str ? str.substr(1) : "";
    }
    _join(path, kids) {
        let url = this.route.url;
        if (path === null) { // change of parameters, route elements are not affected
            return url;
        }
        const old = this.route.url;
        url = old.slice(0, this.index + (kids ? this._next : 0));
        if (path) {
            url = url.concat(parse(path));
            for (let i = 0; i < url.length; i++) {
                if (old[i]) {
                    url[i].view = old[i].view;
                }
                if (old[i] && url[i].page === old[i].page) {
                    url[i].isNew = false;
                }
            }
        }
        return url;
    }
    append(path) {
        const url = this._join(path, true);
        this.route.path = url2str(url);
        this.route.url = url;
        return this.route.path;
    }
    show(path, view, kids) {
        const url = this._join(path, kids);
        return new Promise((res, rej) => {
            const redirect = url2str(url);
            const obj = {
                url,
                redirect,
                confirm: Promise.resolve()
            };
            const app = view ? view.app : null;
            // when creating a new route, it possible that it will not have any content
            // guard is not necessary in such case
            if (app) {
                const result = app.callEvent("app:guard", [obj.redirect, view, obj]);
                if (!result) {
                    rej(new NavigationBlocked());
                    return;
                }
            }
            obj.confirm.catch(err => rej(err)).then(() => {
                if (obj.redirect === null) {
                    rej(new NavigationBlocked());
                    return;
                }
                if (obj.redirect !== redirect) {
                    app.show(obj.redirect);
                    rej(new NavigationBlocked());
                    return;
                }
                this.route.path = redirect;
                this.route.url = url;
                res();
            });
        });
    }
    size(n) {
        this._next = n;
    }
    split() {
        const route = {
            url: this.route.url.slice(this.index + 1),
            path: ""
        };
        if (route.url.length) {
            route.path = url2str(route.url);
        }
        return new Route(route, 0);
    }
    update(name, value, index) {
        const chunk = this.route.url[this.index + (index || 0)];
        if (!chunk) {
            this.route.url.push({ page: "", params: {} });
            return this.update(name, value, index);
        }
        if (name === "") {
            chunk.page = value;
        }
        else {
            chunk.params[name] = value;
        }
        this.route.path = url2str(this.route.url);
    }
}

class JetView extends JetBase {
    constructor(app, config) {
        super(app.webix);
        this.app = app;
        //this.$config = config;
        this._children = [];
    }
    ui(ui, config) {
        config = config || {};
        const container = config.container || ui.container;
        const jetview = this.app.createView(ui);
        this._children.push(jetview);
        jetview.render(container, this._segment, this);
        if (typeof ui !== "object" || (ui instanceof JetBase)) {
            // raw webix UI
            return jetview;
        }
        else {
            return jetview.getRoot();
        }
    }
    show(path, config) {
        config = config || {};
        // convert parameters object to url
        if (typeof path === "object") {
            for (const key in path) {
                this.setParam(key, path[key]);
            }
            path = null;
        }
        else {
            // deligate to app in case of root prefix
            if (path.substr(0, 1) === "/") {
                return this.app.show(path);
            }
            // local path, do nothing
            if (path.indexOf("./") === 0) {
                path = path.substr(2);
            }
            // parent path, call parent view
            if (path.indexOf("../") === 0) {
                const parent = this.getParentView();
                if (parent) {
                    return parent.show(path.substr(3), config);
                }
                else {
                    return this.app.show("/" + path.substr(3));
                }
            }
            const sub = this.getSubViewInfo(config.target);
            if (sub) {
                if (sub.parent !== this) {
                    return sub.parent.show(path, config);
                }
                else if (config.target && config.target !== "default") {
                    return this._renderFrameLock(config.target, sub.subview, path);
                }
            }
            else {
                if (path) {
                    return this.app.show("/" + path);
                }
            }
        }
        return this._show(this._segment, path, this);
    }
    _show(segment, path, view) {
        return segment.show(path, view, true).then(() => {
            this._init_url_data();
            return this._urlChange();
        }).then(() => {
            if (segment.route.linkRouter) {
                this.app.getRouter().set(segment.route.path, { silent: true });
                this.app.callEvent("app:route", [segment.route.path]);
            }
        });
    }
    init(_$view, _$) {
        // stub
    }
    ready(_$view, _$url) {
        // stub
    }
    config() {
        this.app.webix.message("View:Config is not implemented");
    }
    urlChange(_$view, _$url) {
        // stub
    }
    destroy() {
        // stub
    }
    destructor() {
        this.destroy();
        this._destroyKids();
        // destroy actual UI
        this._root.destructor();
        super.destructor();
    }
    use(plugin, config) {
        plugin(this.app, this, config);
    }
    refresh() {
        const url = this.getUrl();
        this.destroy();
        this._destroyKids();
        this._destroySubs();
        this._detachEvents();
        if (this._container.tagName) {
            this._root.destructor();
        }
        this._segment.refresh();
        return this._render(this._segment);
    }
    render(root, url, parent) {
        if (typeof url === "string") {
            url = new Route(url, 0);
        }
        this._segment = url;
        this._parent = parent;
        this._init_url_data();
        root = root || document.body;
        const _container = (typeof root === "string") ? this.webix.toNode(root) : root;
        if (this._container !== _container) {
            this._container = _container;
            return this._render(url);
        }
        else {
            return this._urlChange().then(() => this.getRoot());
        }
    }
    _render(url) {
        const config = this.config();
        if (config.then) {
            return config.then(cfg => this._render_final(cfg, url));
        }
        else {
            return this._render_final(config, url);
        }
    }
    _render_final(config, url) {
        // get previous view in the same slot
        let slot = null;
        let container = null;
        let show = false;
        if (!this._container.tagName) {
            slot = this._container;
            if (slot.popup) {
                container = document.body;
                show = true;
            }
            else {
                container = this.webix.$$(slot.id);
            }
        }
        else {
            container = this._container;
        }
        // view already destroyed
        if (!this.app || !container) {
            return Promise.reject(null);
        }
        let response;
        const current = this._segment.current();
        // using wrapper object, so ui can be changed from app:render event
        const result = { ui: {} };
        this.app.copyConfig(config, result.ui, this._subs);
        this.app.callEvent("app:render", [this, url, result]);
        result.ui.$scope = this;
        /* destroy old HTML attached views before creating new one */
        if (!slot && current.isNew && current.view) {
            current.view.destructor();
        }
        try {
            // special handling for adding inside of multiview - preserve old id
            if (slot && !show) {
                const oldui = container;
                const parent = oldui.getParentView();
                if (parent && parent.name === "multiview" && !result.ui.id) {
                    result.ui.id = oldui.config.id;
                }
            }
            this._root = this.app.webix.ui(result.ui, container);
            const asWin = this._root;
            // check for url added to ignore this.ui calls
            if (show && asWin.setPosition && !asWin.isVisible()) {
                asWin.show();
            }
            // check, if we are replacing some older view
            if (slot) {
                if (slot.view && slot.view !== this && slot.view !== this.app) {
                    slot.view.destructor();
                }
                slot.id = this._root.config.id;
                if (this.getParentView() || !this.app.app)
                    slot.view = this;
                else {
                    // when we have subapp, set whole app as a view
                    // so on destruction, the whole app will be destroyed
                    slot.view = this.app;
                }
            }
            if (current.isNew) {
                current.view = this;
                current.isNew = false;
            }
            response = Promise.resolve(this._init(this._root, url)).then(() => {
                return this._urlChange().then(() => {
                    this._initUrl = null;
                    return this.ready(this._root, url.suburl());
                });
            });
        }
        catch (e) {
            response = Promise.reject(e);
        }
        return response.catch(err => this._initError(this, err));
    }
    _init(view, url) {
        return this.init(view, url.suburl());
    }
    _urlChange() {
        this.app.callEvent("app:urlchange", [this, this._segment]);
        const waits = [];
        for (const key in this._subs) {
            const frame = this._subs[key];
            const wait = this._renderFrameLock(key, frame, null);
            if (wait) {
                waits.push(wait);
            }
        }
        return Promise.all(waits).then(() => {
            return this.urlChange(this._root, this._segment.suburl());
        });
    }
    _renderFrameLock(key, frame, path) {
        // if subview is not occupied by some rendering yet
        if (!frame.lock) {
            // retreive and store rendering end promise
            const lock = this._renderFrame(key, frame, path);
            if (lock) {
                // clear lock after frame rendering
                // as promise.finally is not supported by  Webix lesser than 6.2
                // using a more verbose notation
                frame.lock = lock.then(() => frame.lock = null, () => frame.lock = null);
            }
        }
        // return rendering end promise
        return frame.lock;
    }
    _renderFrame(key, frame, path) {
        //default route
        if (key === "default") {
            if (this._segment.next()) {
                // we have a next segment in url, render it
                return this._createSubView(frame, this._segment.shift());
            }
            else if (frame.view && frame.popup) {
                // there is no next segment, delete the existing sub-view
                frame.view.destructor();
                frame.view = null;
            }
        }
        //if new path provided, set it to the frame
        if (path !== null) {
            frame.url = path;
        }
        // in case of routed sub-view
        if (frame.route) {
            // we have a new path for sub-view
            if (path !== null) {
                return frame.route.show(path, frame.view).then(() => {
                    return this._createSubView(frame, frame.route);
                });
            }
            // do not trigger onChange for isolated sub-views
            if (frame.branch) {
                return;
            }
        }
        let view = frame.view;
        // if view doesn't exists yet, init it
        if (!view && frame.url) {
            if (typeof frame.url === "string") {
                // string, so we have isolated subview url
                frame.route = new Route(frame.url, 0);
                return this._createSubView(frame, frame.route);
            }
            else {
                // object, so we have an embeded subview
                if (typeof frame.url === "function" && !(view instanceof frame.url)) {
                    view = new frame.url(this.app, "");
                }
                if (!view) {
                    view = frame.url;
                }
            }
        }
        // trigger onChange for already existed view
        if (view) {
            return view.render(frame, (frame.route || this._segment), this);
        }
    }
    _initError(view, err) {
        /*
            if view is destroyed, ignore any view related errors
        */
        if (this.app) {
            this.app.error("app:error:initview", [err, view]);
        }
        return true;
    }
    _createSubView(sub, suburl) {
        return this.app.createFromURL(suburl.current()).then(view => {
            return view.render(sub, suburl, this);
        });
    }
    _destroyKids() {
        // destroy child views
        const uis = this._children;
        for (let i = uis.length - 1; i >= 0; i--) {
            if (uis[i] && uis[i].destructor) {
                uis[i].destructor();
            }
        }
        // reset vars for better GC processing
        this._children = [];
    }
}

// wrapper for raw objects and Jet 1.x structs
class JetViewRaw extends JetView {
    constructor(app, config) {
        super(app, config);
        this._ui = config.ui;
    }
    config() {
        return this._ui;
    }
}

class SubRouter {
    constructor(cb, config, app) {
        this.path = "";
        this.app = app;
    }
    set(path, config) {
        this.path = path;
        const a = this.app;
        a.app.getRouter().set(a._segment.append(this.path), { silent: true });
    }
    get() {
        return this.path;
    }
}

let _once = true;
class JetAppBase extends JetBase {
    constructor(config) {
        const webix = (config || {}).webix || window.webix;
        super(webix);
        // init config
        this.config = this.webix.extend({
            name: "App",
            version: "1.0",
            start: "/home"
        }, config, true);
        this.app = this.config.app;
        this.ready = Promise.resolve();
        this._services = {};
        this.webix.extend(this, this.webix.EventSystem);
    }
    getUrl() {
        return this._subSegment.suburl();
    }
    getUrlString() {
        return this._subSegment.toString();
    }
    getService(name) {
        let obj = this._services[name];
        if (typeof obj === "function") {
            obj = this._services[name] = obj(this);
        }
        return obj;
    }
    setService(name, handler) {
        this._services[name] = handler;
    }
    destructor() {
        this.getSubView().destructor();
        super.destructor();
    }
    // copy object and collect extra handlers
    copyConfig(obj, target, config) {
        // raw ui config
        if (obj instanceof JetBase ||
            (typeof obj === "function" && obj.prototype instanceof JetBase)) {
            obj = { $subview: obj };
        }
        // subview placeholder
        if (typeof obj.$subview != "undefined") {
            return this.addSubView(obj, target, config);
        }
        // process sub-properties
        target = target || (obj instanceof Array ? [] : {});
        for (const method in obj) {
            let point = obj[method];
            // view class
            if (typeof point === "function" && point.prototype instanceof JetBase) {
                point = { $subview: point };
            }
            if (point && typeof point === "object" &&
                !(point instanceof this.webix.DataCollection) && !(point instanceof RegExp)) {
                if (point instanceof Date) {
                    target[method] = new Date(point);
                }
                else {
                    const copy = this.copyConfig(point, (point instanceof Array ? [] : {}), config);
                    if (copy !== null) {
                        target[method] = copy;
                    }
                }
            }
            else {
                target[method] = point;
            }
        }
        return target;
    }
    getRouter() {
        return this.$router;
    }
    clickHandler(e, target) {
        if (e) {
            target = target || (e.target || e.srcElement);
            if (target && target.getAttribute) {
                const trigger = target.getAttribute("trigger");
                if (trigger) {
                    this._forView(target, view => view.app.trigger(trigger));
                    e.cancelBubble = true;
                    return e.preventDefault();
                }
                const route = target.getAttribute("route");
                if (route) {
                    this._forView(target, view => view.show(route));
                    e.cancelBubble = true;
                    return e.preventDefault();
                }
            }
        }
        const parent = target.parentNode;
        if (parent) {
            this.clickHandler(e, parent);
        }
    }
    getRoot() {
        return this.getSubView().getRoot();
    }
    refresh() {
        if (!this._subSegment) {
            return Promise.resolve(null);
        }
        return this.getSubView().refresh().then(view => {
            this.callEvent("app:route", [this.getUrl()]);
            return view;
        });
    }
    loadView(url) {
        const views = this.config.views;
        let result = null;
        if (url === "") {
            return Promise.resolve(this._loadError("", new Error("Webix Jet: Empty url segment")));
        }
        try {
            if (views) {
                if (typeof views === "function") {
                    // custom loading strategy
                    result = views(url);
                }
                else {
                    // predefined hash
                    result = views[url];
                }
                if (typeof result === "string") {
                    url = result;
                    result = null;
                }
            }
            if (!result) {
                if (url === "_blank") {
                    result = {};
                }
                else {
                    result = this._loadViewDynamic(url);
                }
            }
        }
        catch (e) {
            result = this._loadError(url, e);
        }
        // custom handler can return view or its promise
        if (!result.then) {
            result = Promise.resolve(result);
        }
        // set error handler
        result = result
            .then(module => module.__esModule ? module.default : module)
            .catch(err => this._loadError(url, err));
        return result;
    }
    _forView(target, handler) {
        const view = this.webix.$$(target);
        if (view) {
            handler(view.$scope);
        }
    }
    _loadViewDynamic(url) {
        return null;
    }
    createFromURL(chunk) {
        let view;
        if (chunk.isNew || !chunk.view) {
            view = this.loadView(chunk.page)
                .then(ui => this.createView(ui, name));
        }
        else {
            view = Promise.resolve(chunk.view);
        }
        return view;
    }
    createView(ui, name) {
        let obj;
        if (typeof ui === "function") {
            if (ui.prototype instanceof JetAppBase) {
                // UI class
                return new ui({ app: this, name, router: SubRouter });
            }
            else if (ui.prototype instanceof JetBase) {
                // UI class
                return new ui(this, { name });
            }
            else {
                // UI factory functions
                ui = ui(this);
            }
        }
        if (ui instanceof JetBase) {
            obj = ui;
        }
        else {
            // UI object
            obj = new JetViewRaw(this, { name, ui });
        }
        return obj;
    }
    // show view path
    show(url) {
        return this.render(this._container, (url || this.config.start));
    }
    // event helpers
    trigger(name, ...rest) {
        this.apply(name, rest);
    }
    apply(name, data) {
        this.callEvent(name, data);
    }
    action(name) {
        return this.webix.bind(function (...rest) {
            this.apply(name, rest);
        }, this);
    }
    on(name, handler) {
        this.attachEvent(name, handler);
    }
    use(plugin, config) {
        plugin(this, null, config);
    }
    error(name, er) {
        this.callEvent(name, er);
        this.callEvent("app:error", er);
        /* tslint:disable */
        if (this.config.debug) {
            for (var i = 0; i < er.length; i++) {
                console.error(er[i]);
                if (er[i] instanceof Error) {
                    let text = er[i].message;
                    if (text.indexOf("Module build failed") === 0) {
                        text = text.replace(/\x1b\[[0-9;]*m/g, "");
                        document.body.innerHTML = `<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>${text}</pre>`;
                    }
                    else {
                        text += "<br><br>Check console for more details";
                        this.webix.message({ type: "error", text: text, expire: -1 });
                    }
                }
            }
            debugger;
        }
        /* tslint:enable */
    }
    // renders top view
    render(root, url, parent) {
        this._container = (typeof root === "string") ?
            this.webix.toNode(root) :
            (root || document.body);
        const firstInit = !this.$router;
        let path = null;
        if (firstInit) {
            if (_once && "tagName" in this._container) {
                this.webix.event(document.body, "click", e => this.clickHandler(e));
                _once = false;
            }
            if (typeof url === "string") {
                url = new Route(url, 0);
            }
            this._subSegment = this._first_start(url);
            this._subSegment.route.linkRouter = true;
        }
        else {
            if (typeof url === "string") {
                path = url;
            }
            else {
                if (this.app) {
                    path = url.split().route.path || this.config.start;
                }
                else {
                    path = url.toString();
                }
            }
        }
        const top = this.getSubView();
        const segment = this._subSegment;
        const ready = segment.show(path, top)
            .then(() => this.createFromURL(segment.current()))
            .then(view => view.render(root, segment))
            .then(base => {
            this.$router.set(segment.route.path, { silent: true });
            this.callEvent("app:route", [this.getUrl()]);
            return base;
        });
        this.ready = this.ready.then(() => ready);
        return ready;
    }
    getSubView() {
        if (this._subSegment) {
            const view = this._subSegment.current().view;
            if (view)
                return view;
        }
        return new JetView(this, {});
    }
    _first_start(route) {
        this._segment = route;
        const cb = (a) => setTimeout(() => {
            this.show(a).catch(e => {
                if (!(e instanceof NavigationBlocked))
                    throw e;
            });
        }, 1);
        this.$router = new (this.config.router)(cb, this.config, this);
        // start animation for top-level app
        if (this._container === document.body && this.config.animation !== false) {
            const node = this._container;
            this.webix.html.addCss(node, "webixappstart");
            setTimeout(() => {
                this.webix.html.removeCss(node, "webixappstart");
                this.webix.html.addCss(node, "webixapp");
            }, 10);
        }
        if (!route) {
            // if no url defined, check router first
            let urlString = this.$router.get();
            if (!urlString) {
                urlString = this.config.start;
                this.$router.set(urlString, { silent: true });
            }
            route = new Route(urlString, 0);
        }
        else if (this.app) {
            route.current().view = this;
            if (route.next()) {
                route.refresh();
                route = route.split();
            }
            else {
                route = new Route(this.config.start, 0);
            }
        }
        return route;
    }
    // error during view resolving
    _loadError(url, err) {
        this.error("app:error:resolve", [err, url]);
        return { template: " " };
    }
    addSubView(obj, target, config) {
        const url = obj.$subview !== true ? obj.$subview : null;
        const name = obj.name || (url ? this.webix.uid() : "default");
        target.id = obj.id || "s" + this.webix.uid();
        const view = config[name] = {
            id: target.id,
            url,
            branch: obj.branch,
            popup: obj.popup
        };
        return view.popup ? null : target;
    }
}

class HashRouter {
    constructor(cb, config) {
        this.config = config || {};
        this._detectPrefix();
        this.cb = cb;
        window.onpopstate = () => this.cb(this.get());
    }
    set(path, config) {
        if (this.config.routes) {
            const compare = path.split("?", 2);
            for (const key in this.config.routes) {
                if (this.config.routes[key] === compare[0]) {
                    path = key + (compare.length > 1 ? "?" + compare[1] : "");
                    break;
                }
            }
        }
        if (this.get() !== path) {
            window.history.pushState(null, null, this.prefix + this.sufix + path);
        }
        if (!config || !config.silent) {
            setTimeout(() => this.cb(path), 1);
        }
    }
    get() {
        let path = this._getRaw().replace(this.prefix, "").replace(this.sufix, "");
        path = (path !== "/" && path !== "#") ? path : "";
        if (this.config.routes) {
            const compare = path.split("?", 2);
            const key = this.config.routes[compare[0]];
            if (key) {
                path = key + (compare.length > 1 ? "?" + compare[1] : "");
            }
        }
        return path;
    }
    _detectPrefix() {
        // use "#!" for backward compatibility
        const sufix = this.config.routerPrefix;
        this.sufix = "#" + ((typeof sufix === "undefined") ? "!" : sufix);
        this.prefix = document.location.href.split("#", 2)[0];
    }
    _getRaw() {
        return document.location.href;
    }
}

let isPatched = false;
function patch(w) {
    if (isPatched || !w) {
        return;
    }
    isPatched = true;
    // custom promise for IE8
    const win = window;
    if (!win.Promise) {
        win.Promise = w.promise;
    }
    const version = w.version.split(".");
    // will be fixed in webix 5.3
    if (version[0] * 10 + version[1] * 1 < 53) {
        w.ui.freeze = function (handler) {
            // disabled because webix jet 5.0 can't handle resize of scrollview correctly
            // w.ui.$freeze = true;
            const res = handler();
            if (res && res.then) {
                res.then(function (some) {
                    w.ui.$freeze = false;
                    w.ui.resize();
                    return some;
                });
            }
            else {
                w.ui.$freeze = false;
                w.ui.resize();
            }
            return res;
        };
    }
    // adding views as classes
    const baseAdd = w.ui.baselayout.prototype.addView;
    const baseRemove = w.ui.baselayout.prototype.removeView;
    const config = {
        addView(view, index) {
            // trigger logic only for widgets inside of jet-view
            // ignore case when addView used with already initialized widget
            if (this.$scope && this.$scope.webixJet && !view.queryView) {
                const jview = this.$scope;
                const subs = {};
                view = jview.app.copyConfig(view, {}, subs);
                baseAdd.apply(this, [view, index]);
                for (const key in subs) {
                    jview._renderFrame(key, subs[key], null).then(() => {
                        jview._subs[key] = subs[key];
                    });
                }
                return view.id;
            }
            else {
                return baseAdd.apply(this, arguments);
            }
        },
        removeView() {
            baseRemove.apply(this, arguments);
            if (this.$scope && this.$scope.webixJet) {
                const subs = this.$scope._subs;
                // check all sub-views, destroy and clean the removed one
                for (const key in subs) {
                    const test = subs[key];
                    if (!w.$$(test.id)) {
                        test.view.destructor();
                        delete subs[key];
                    }
                }
            }
        }
    };
    w.extend(w.ui.layout.prototype, config, true);
    w.extend(w.ui.baselayout.prototype, config, true);
    // wrapper for using Jet Apps as views
    w.protoUI({
        name: "jetapp",
        $init(cfg) {
            this.$app = new this.app(cfg);
            const id = w.uid().toString();
            cfg.body = { id };
            this.$ready.push(function () {
                this.$app.render({ id });
            });
            for (var key in this.$app) {
                var origin = this.$app[key];
                if (typeof origin === "function" && !this[key]) {
                    this[key] = origin.bind(this.$app);
                }
            }
        }
    }, w.ui.proxy);
}

class JetApp extends JetAppBase {
    constructor(config) {
        config.router = config.router || HashRouter;
        super(config);
        patch(this.webix);
    }
    _loadViewDynamic(url) {
        url = url.replace(/\./g, "/");
        return __webpack_require__("./sources/views sync recursive ^\\.\\/.*$")("./" + url);
    }
}

class StoreRouter {
    constructor(cb, config, app) {
        this.storage = config.storage || app.webix.storage.session;
        this.name = (config.storeName || config.id + ":route");
        this.cb = cb;
    }
    set(path, config) {
        this.storage.put(this.name, path);
        if (!config || !config.silent) {
            setTimeout(() => this.cb(path), 1);
        }
    }
    get() {
        return this.storage.get(this.name);
    }
}

class UrlRouter extends HashRouter {
    _detectPrefix() {
        this.prefix = "";
        this.sufix = this.config.routerPrefix || "";
    }
    _getRaw() {
        return document.location.pathname + (document.location.search || "");
    }
}

class EmptyRouter {
    constructor(cb, _$config) {
        this.path = "";
        this.cb = cb;
    }
    set(path, config) {
        this.path = path;
        if (!config || !config.silent) {
            setTimeout(() => this.cb(path), 1);
        }
    }
    get() {
        return this.path;
    }
}

function UnloadGuard(app, view, config) {
    view.on(app, `app:guard`, function (_$url, point, promise) {
        if (point === view || point.contains(view)) {
            const res = config();
            if (res === false) {
                promise.confirm = Promise.reject(new NavigationBlocked());
            }
            else {
                promise.confirm = promise.confirm.then(() => res);
            }
        }
    });
}

//     (c) 2012-2018 Airbnb, Inc.

// var has = require('has');
function has(store, key) {
  return Object.prototype.hasOwnProperty.call(store, key);
}
// var forEach = require('for-each');
function forEach(obj, handler, context) {
  for (var key in obj) {
    if (has(obj, key)) {
      handler.call((context || obj), obj[key], key, obj);
    }
  }
}
// var trim = require('string.prototype.trim');
function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
// var warning = require('warning');
function warn(message) {
  message = 'Warning: ' + message;
  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try { throw new Error(message); } catch (x) {}
}

var replace = String.prototype.replace;
var split = String.prototype.split;

// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimiter = '||||';

var russianPluralGroups = function (n) {
  var end = n % 10;
  if (n !== 11 && end === 1) {
    return 0;
  }
  if (2 <= end && end <= 4 && !(n >= 12 && n <= 14)) {
    return 1;
  }
  return 2;
};

// Mapping from pluralization group plural logic.
var pluralTypes = {
  arabic: function (n) {
    // http://www.arabeyes.org/Plural_Forms
    if (n < 3) { return n; }
    var lastTwo = n % 100;
    if (lastTwo >= 3 && lastTwo <= 10) return 3;
    return lastTwo >= 11 ? 4 : 5;
  },
  bosnian_serbian: russianPluralGroups,
  chinese: function () { return 0; },
  croatian: russianPluralGroups,
  french: function (n) { return n > 1 ? 1 : 0; },
  german: function (n) { return n !== 1 ? 1 : 0; },
  russian: russianPluralGroups,
  lithuanian: function (n) {
    if (n % 10 === 1 && n % 100 !== 11) { return 0; }
    return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
  },
  czech: function (n) {
    if (n === 1) { return 0; }
    return (n >= 2 && n <= 4) ? 1 : 2;
  },
  polish: function (n) {
    if (n === 1) { return 0; }
    var end = n % 10;
    return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; },
  slovenian: function (n) {
    var lastTwo = n % 100;
    if (lastTwo === 1) {
      return 0;
    }
    if (lastTwo === 2) {
      return 1;
    }
    if (lastTwo === 3 || lastTwo === 4) {
      return 2;
    }
    return 3;
  }
};


// Mapping from pluralization group to individual language codes/locales.
// Will look up based on exact match, if not found and it's a locale will parse the locale
// for language code, and if that does not exist will default to 'en'
var pluralTypeToLanguages = {
  arabic: ['ar'],
  bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
  chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
  croatian: ['hr', 'hr-HR'],
  german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
  french: ['fr', 'tl', 'pt-br'],
  russian: ['ru', 'ru-RU'],
  lithuanian: ['lt'],
  czech: ['cs', 'cs-CZ', 'sk'],
  polish: ['pl'],
  icelandic: ['is'],
  slovenian: ['sl-SL']
};

function langToTypeMap(mapping) {
  var ret = {};
  forEach(mapping, function (langs, type) {
    forEach(langs, function (lang) {
      ret[lang] = type;
    });
  });
  return ret;
}

function pluralTypeName(locale) {
  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
  return langToPluralType[locale]
    || langToPluralType[split.call(locale, /-/, 1)[0]]
    || langToPluralType.en;
}

function pluralTypeIndex(locale, count) {
  return pluralTypes[pluralTypeName(locale)](count);
}

function escape(token) {
  return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function constructTokenRegex(opts) {
  var prefix = (opts && opts.prefix) || '%{';
  var suffix = (opts && opts.suffix) || '}';

  if (prefix === delimiter || suffix === delimiter) {
    throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
  }

  return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
}

var dollarRegex = /\$/g;
var dollarBillsYall = '$$';
var defaultTokenRegex = /%\{(.*?)\}/g;

// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale, tokenRegex) {
  if (typeof phrase !== 'string') {
    throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
  }

  if (substitutions == null) {
    return phrase;
  }

  var result = phrase;
  var interpolationRegex = tokenRegex || defaultTokenRegex;

  // allow number as a pluralization shortcut
  var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

  // Select plural form: based on a phrase text that contains `n`
  // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
  // choose the correct plural form. This is only done if `count` is set.
  if (options.smart_count != null && result) {
    var texts = split.call(result, delimiter);
    result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
  }

  // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
  result = replace.call(result, interpolationRegex, function (expression, argument) {
    if (!has(options, argument) || options[argument] == null) { return expression; }
    // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
    return replace.call(options[argument], dollarRegex, dollarBillsYall);
  });

  return result;
}

// ### Polyglot class constructor
function Polyglot(options) {
  var opts = options || {};
  this.phrases = {};
  this.extend(opts.phrases || {});
  this.currentLocale = opts.locale || 'en';
  var allowMissing = opts.allowMissing ? transformPhrase : null;
  this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
  this.warn = opts.warn || warn;
  this.tokenRegex = constructTokenRegex(opts.interpolation);
}

// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
  if (newLocale) this.currentLocale = newLocale;
  return this.currentLocale;
};

// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
  forEach(morePhrases, function (phrase, key) {
    var prefixedKey = prefix ? prefix + '.' + key : key;
    if (typeof phrase === 'object') {
      this.extend(phrase, prefixedKey);
    } else {
      this.phrases[prefixedKey] = phrase;
    }
  }, this);
};

// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
  if (typeof morePhrases === 'string') {
    delete this.phrases[morePhrases];
  } else {
    forEach(morePhrases, function (phrase, key) {
      var prefixedKey = prefix ? prefix + '.' + key : key;
      if (typeof phrase === 'object') {
        this.unset(phrase, prefixedKey);
      } else {
        delete this.phrases[prefixedKey];
      }
    }, this);
  }
};

// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
  this.phrases = {};
};

// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
  this.clear();
  this.extend(newPhrases);
};


// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
  var phrase, result;
  var opts = options == null ? {} : options;
  if (typeof this.phrases[key] === 'string') {
    phrase = this.phrases[key];
  } else if (typeof opts._ === 'string') {
    phrase = opts._;
  } else if (this.onMissingKey) {
    var onMissingKey = this.onMissingKey;
    result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex);
  } else {
    this.warn('Missing translation for key: "' + key + '"');
    result = key;
  }
  if (typeof phrase === 'string') {
    result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex);
  }
  return result;
};


// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
  return has(this.phrases, key);
};

// export transformPhrase
Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
  return transformPhrase(phrase, substitutions, locale);
};

var webixPolyglot = Polyglot;

function Locale(app, _view, config) {
    config = config || {};
    const storage = config.storage;
    let lang = storage ? (storage.get("lang") || "en") : (config.lang || "en");
    function setLangData(name, data, silent) {
        if (data.__esModule) {
            data = data.default;
        }
        const pconfig = { phrases: data };
        if (config.polyglot) {
            app.webix.extend(pconfig, config.polyglot);
        }
        const poly = service.polyglot = new webixPolyglot(pconfig);
        poly.locale(name);
        service._ = app.webix.bind(poly.t, poly);
        lang = name;
        if (storage) {
            storage.put("lang", lang);
        }
        if (config.webix) {
            const locName = config.webix[name];
            if (locName) {
                app.webix.i18n.setLocale(locName);
            }
        }
        if (!silent) {
            return app.refresh();
        }
        return Promise.resolve();
    }
    function getLang() { return lang; }
    function setLang(name, silent) {
        // ignore setLang if loading by path is disabled
        if (config.path === false) {
            return;
        }
        const path = (config.path ? config.path + "/" : "") + name;
        const data = __webpack_require__("./sources/locales sync recursive ^\\.\\/.*$")("./" + path);
        setLangData(name, data, silent);
    }
    const service = {
        getLang, setLang, setLangData, _: null, polyglot: null
    };
    app.setService("locale", service);
    setLang(lang, true);
}

function show(view, config, value) {
    if (config.urls) {
        value = config.urls[value] || value;
    }
    else if (config.param) {
        value = { [config.param]: value };
    }
    view.show(value);
}
function Menu(app, view, config) {
    const frame = view.getSubViewInfo().parent;
    const ui = view.$$(config.id || config);
    let silent = false;
    ui.attachEvent("onchange", function () {
        if (!silent) {
            show(frame, config, this.getValue());
        }
    });
    ui.attachEvent("onafterselect", function () {
        if (!silent) {
            let id = null;
            if (ui.setValue) {
                id = this.getValue();
            }
            else if (ui.getSelectedId) {
                id = ui.getSelectedId();
            }
            show(frame, config, id);
        }
    });
    view.on(app, `app:route`, function () {
        let name = "";
        if (config.param) {
            name = view.getParam(config.param, true);
        }
        else {
            const segment = frame.getUrl()[1];
            if (segment) {
                name = segment.page;
            }
        }
        if (name) {
            silent = true;
            if (ui.setValue && ui.getValue() !== name) {
                ui.setValue(name);
            }
            else if (ui.select && ui.exists(name) && ui.getSelectedId() !== name) {
                ui.select(name);
            }
            silent = false;
        }
    });
}

const baseicons = {
    good: "check",
    error: "warning",
    saving: "refresh fa-spin"
};
const basetext = {
    good: "Ok",
    error: "Error",
    saving: "Connecting..."
};
function Status(app, view, config) {
    let status = "good";
    let count = 0;
    let iserror = false;
    let expireDelay = config.expire;
    if (!expireDelay && expireDelay !== false) {
        expireDelay = 2000;
    }
    const texts = config.texts || basetext;
    const icons = config.icons || baseicons;
    if (typeof config === "string") {
        config = { target: config };
    }
    function refresh(content) {
        const area = view.$$(config.target);
        if (area) {
            if (!content) {
                content = "<div class='status_" +
                    status +
                    "'><span class='webix_icon fa-" +
                    icons[status] + "'></span> " + texts[status] + "</div>";
            }
            area.setHTML(content);
        }
    }
    function success() {
        count--;
        setStatus("good");
    }
    function fail(err) {
        count--;
        setStatus("error", err);
    }
    function start(promise) {
        count++;
        setStatus("saving");
        if (promise && promise.then) {
            promise.then(success, fail);
        }
    }
    function getStatus() {
        return status;
    }
    function hideStatus() {
        if (count === 0) {
            refresh(" ");
        }
    }
    function setStatus(mode, err) {
        if (count < 0) {
            count = 0;
        }
        if (mode === "saving") {
            status = "saving";
            refresh();
        }
        else {
            iserror = (mode === "error");
            if (count === 0) {
                status = iserror ? "error" : "good";
                if (iserror) {
                    app.error("app:error:server", [err.responseText || err]);
                }
                else {
                    if (expireDelay) {
                        setTimeout(hideStatus, expireDelay);
                    }
                }
                refresh();
            }
        }
    }
    function track(data) {
        const dp = app.webix.dp(data);
        if (dp) {
            view.on(dp, "onAfterDataSend", start);
            view.on(dp, "onAfterSaveError", (_id, _obj, response) => fail(response));
            view.on(dp, "onAfterSave", success);
        }
    }
    app.setService("status", {
        getStatus,
        setStatus,
        track
    });
    if (config.remote) {
        view.on(app.webix, "onRemoteCall", start);
    }
    if (config.ajax) {
        view.on(app.webix, "onBeforeAjax", (_mode, _url, _data, _request, _headers, _files, promise) => {
            start(promise);
        });
    }
    if (config.data) {
        track(config.data);
    }
}

function Theme(app, _view, config) {
    config = config || {};
    const storage = config.storage;
    let theme = storage ?
        (storage.get("theme") || "flat-default")
        :
            (config.theme || "flat-default");
    const service = {
        getTheme() { return theme; },
        setTheme(name, silent) {
            const parts = name.split("-");
            const links = document.getElementsByTagName("link");
            for (let i = 0; i < links.length; i++) {
                const lname = links[i].getAttribute("title");
                if (lname) {
                    if (lname === name || lname === parts[0]) {
                        links[i].disabled = false;
                    }
                    else {
                        links[i].disabled = true;
                    }
                }
            }
            app.webix.skin.set(parts[0]);
            // remove old css
            app.webix.html.removeCss(document.body, "theme-" + theme);
            // add new css
            app.webix.html.addCss(document.body, "theme-" + name);
            theme = name;
            if (storage) {
                storage.put("theme", name);
            }
            if (!silent) {
                app.refresh();
            }
        }
    };
    app.setService("theme", service);
    service.setTheme(theme, true);
}

function copyParams(data, url, route) {
    for (let i = 0; i < route.length; i++) {
        data[route[i]] = url[i + 1] ? url[i + 1].page : "";
    }
}
function UrlParam(app, view, config) {
    const route = config.route || config;
    const data = {};
    view.on(app, "app:urlchange", function (subview, segment) {
        if (view === subview) {
            copyParams(data, segment.suburl(), route);
            segment.size(route.length + 1);
        }
    });
    const os = view.setParam;
    const og = view.getParam;
    view.setParam = function (name, value, show) {
        const index = route.indexOf(name);
        if (index >= 0) {
            data[name] = value;
            this._segment.update("", value, index + 1);
            if (show) {
                return view.show(null);
            }
        }
        else {
            return os.call(this, name, value, show);
        }
    };
    view.getParam = function (key, mode) {
        const val = data[key];
        if (typeof val !== "undefined") {
            return val;
        }
        return og.call(this, key, mode);
    };
    copyParams(data, view.getUrl(), route);
}

function User(app, _view, config) {
    config = config || {};
    const login = config.login || "/login";
    const logout = config.logout || "/logout";
    const afterLogin = config.afterLogin || app.config.start;
    const afterLogout = config.afterLogout || "/login";
    const ping = config.ping || 5 * 60 * 1000;
    const model = config.model;
    let user = config.user;
    const service = {
        getUser() {
            return user;
        },
        getStatus(server) {
            if (!server) {
                return user !== null;
            }
            return model.status().catch(() => null).then(data => {
                user = data;
            });
        },
        login(name, pass) {
            return model.login(name, pass).then(data => {
                user = data;
                if (!data) {
                    throw new Error("Access denied");
                }
                app.callEvent("app:user:login", [user]);
                app.show(afterLogin);
            });
        },
        logout() {
            user = null;
            return model.logout().then(res => {
                app.callEvent("app:user:logout", []);
                return res;
            });
        }
    };
    function canNavigate(url, obj) {
        if (url === logout) {
            service.logout();
            obj.redirect = afterLogout;
        }
        else if (url !== login && !service.getStatus()) {
            obj.redirect = login;
        }
    }
    app.setService("user", service);
    app.attachEvent(`app:guard`, function (url, _$root, obj) {
        if (config.public && config.public(url)) {
            return true;
        }
        if (typeof user === "undefined") {
            obj.confirm = service.getStatus(true).then(() => canNavigate(url, obj));
        }
        return canNavigate(url, obj);
    });
    if (ping) {
        setInterval(() => service.getStatus(true), ping);
    }
}

/*
MIT License
Copyright (c) 2019 XB Software
*/
let webix = window.webix;
if (webix) {
    patch(webix);
}
const plugins = {
    UnloadGuard, Locale, Menu, Theme, User, Status, UrlParam
};
const errors = { NavigationBlocked };
const w = window;
if (!w.Promise) {
    w.Promise = w.webix.promise;
}


//# sourceMappingURL=jet.js.map


/***/ }),

/***/ "./node_modules/wwebrequest/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/wwebrequest/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WRequest {
    // by default, request is without promise
    send(req, action, hostname, webserverport) {
        const xhr = new XMLHttpRequest();
        const url = "https://" + hostname + ":" + webserverport + "/utility/" + action; // for development
        // console.log(url);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            const status = xhr.status;
            let jsondata = [];
            // console.log("xhr.readyState = " + xhr.readyState);
            // console.log("xhr.status = " + xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                // console.log("xhr.responseText =\n" + xhr.responseText);
                jsondata = JSON.parse(xhr.responseText);
                // console.log(" --> " + jsondata.error_msg);
                // console.log(" --> " + jsondata.return_code);
            }
        };
        // console.log("xhr.request =\n" + JSON.stringify(req, null, 2));
        xhr.send(JSON.stringify(req));
    }
    sendPromise(req, action, hostname, webserverport) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            // const url2: string = "http://" + window.location.hostname + ":8080/utility/" + action; // for development
            // const url: string = "http://" + window.location.hostname + ":" + window.location.port + "/utility/" + action; // for production
            const url = "http://" + hostname + ":" + webserverport + "/" + action; // for development
            console.log(url);
            // console.log(url2);
            // xhr.open("GET", url, true);
            // alert(actionArray[0]);
            if (action === "getPermission") {
              xhr.open("POST", url, true);
            } else if (action === "getProject") {
              xhr.open("GET", url, true);
            }
            xhr.onload = function () {
                const status = xhr.status;
                let jsondata = [];
                // console.log("xhr.readyState = " + xhr.readyState);
                // console.log("xhr.status = " + xhr.status);
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // console.log("xhr.responseText =\n" + xhr.responseText);
                    jsondata = JSON.parse(xhr.responseText);
                    // console.log(" --> " + jsondata.error_msg);
                    // resolve(jsondata);
                    jsondata.return_code === 0 ? resolve(jsondata) : reject(jsondata);
                }
                else {
                    reject(status);
                }
            };
            console.log("xhr.request =\n" + JSON.stringify(req, null, 2));
            xhr.send(JSON.stringify(req));
        });
    }
    downloadReport(filename, hostname, webserverport) {
        // console.log("export");
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const url = "https://" + hostname + ":" + webserverport + "/public/" + filename; // for development
            // const url: string = "https://" + hostname + ":" + webserverport + "/client/wreport/config/ioreport.json"; // for development
            // console.log(url);
            // console.log(url2);
            xhr.open("GET", url, true);
            xhr.responseType = "blob";
            // alert(actionArray[0]);
            xhr.onload = function () {
                const status = xhr.status;
                let jsondata = [];
                console.log("xhr.readyState = " + xhr.readyState);
                console.log("xhr.status = " + xhr.status);
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // console.log("xhr.responseText =\n" + xhr.responseText);
                    jsondata = xhr.response;
                    // resolve(jsondata);
                    resolve(jsondata);
                }
                else {
                    reject(status);
                }
            };
            // console.log("xhr.request =\n" + JSON.stringify(req, null, 2));
            xhr.send();
        });
    }
}
exports.default = WRequest;


/***/ }),

/***/ "./sources/app.ts":
/*!************************!*\
  !*** ./sources/app.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const webix_jet_1 = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
const wwebrequest_1 = __webpack_require__(/*! wwebrequest */ "./node_modules/wwebrequest/dist/index.js");
const state_1 = __webpack_require__(/*! ./helpers/state */ "./sources/helpers/state.ts");
__webpack_require__(/*! ./styles/app.css */ "./sources/styles/app.css");
exports.request = new wwebrequest_1.default();
exports.webserverport = 8080;
exports.ipAddr = window.location.hostname;
webix.ready(() => {
    const app = new webix_jet_1.JetApp({
        id: "reporting-tool",
        version: "1.0.0",
        start: "/layout"
    });
    // webix.message(PRODUCTION);
    if (false) {}
    app.render();
    app.use(state_1.State, "");
});


/***/ }),

/***/ "./sources/controller/chome.ts":
/*!*************************************!*\
  !*** ./sources/controller/chome.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ../app */ "./sources/app.ts");
const reportController_1 = __webpack_require__(/*! ./reportController */ "./sources/controller/reportController.ts");
let requestData = {};
let generatedOn = "";
let devicelistvalue = "";
let deviceAnalogColumns = [];
let projectName = "";
function getDeviceConfig() {
    requestData = {
        projectName: projectName
    };
    console.log(JSON.stringify(requestData));
    let countNumberingAnalog = 1;
    app_1.request.sendPromise(requestData, "getPermission", "localhost", 3000).then(function (jsondata) {
        console.log("deviceReportInit");
        console.log(JSON.stringify(jsondata));
        let ret = [];
        // console.log("deviceReportInit");
        // console.log(jsondata.data.recordset);
        // console.log(JSON.stringify(jsondata));
        for (const [index, value] of jsondata.data.recordset.entries()) {
            // for(const[index2, value2] of value1.values.entries()) {
            // console.log(value);
            ret.push(value);
            // }
            value.Number = countNumberingAnalog;
            countNumberingAnalog++;
        }
        webix.$$("deviceanalogdata").parse(ret, "json");
    }, function (status) {
        console.log(JSON.stringify(status));
        webix.message({
            text: status.errors.message,
            type: "error",
            expire: -1,
            id: "devicelog"
        });
        console.log(status.errors.message, "error");
    });
}
exports.getDeviceConfig = getDeviceConfig;
function deviceReportUpdateTable() {
    // alert("here");
    // *** 1. GET FIRST REPORT CATEGOTY AND RESET SEARCH FILTER CONDITION ****
    // console.log(deviceIpAddress);
    devicelistvalue = webix.$$("devicelist").getText();
    generatedOn = reportController_1.displayCurrentTime();
    // alert(devicelistvalue);
    // alert((<webix.ui.combo>webix.$$("devicelist")).getValue());
    // alert((<webix.ui.combo>webix.$$("devicelist")).getText());
    webix.$$("devicesearch").setValue("");
    $$("devicesearchfiltercondition").define("template", "<b>Search/Filter Condition</b>: -");
    webix.$$("devicesearchfiltercondition").refresh();
    // alert("blah2");
    // alert(iocategoryid);
    $$("devicetitle").define("template", "<b>Title</b>: " + "List of Permission for Project" + " of <b>" + devicelistvalue + "</b>");
    webix.$$("devicetitle").refresh();
    $$("devicegeneratedtime").define("template", "<b>Generated On</b>: " + generatedOn);
    webix.$$("devicegeneratedtime").refresh();
    // console.log(devicecategoryid);
    // console.log(data.Category[Number(devicecategoryid)-1].Table[0].Column);
    // 3. *** GET SELECTED REPORT CONFIGURED ANALOG AND DIGITAL COLUMNS, AND FINALLY, UPDATE THE TABLE ***
    // const deviceAnalogColumns: any = [];
    // check default numbering in deviceanalogtable is enabled or disable
    deviceAnalogColumns = [
        { id: "Number", header: "No.", hidden: false, sort: "int", adjust: true, adjustBatch: 50, css: { "text-align": "center" } },
        { id: "Username (Individual)", header: "Username (Individual)", hidden: false, sort: "text", adjust: true, adjustBatch: 50 },
        { id: "Fullname (Individual)", header: "Fullname (Individual)", hidden: false, sort: "text", adjust: true, adjustBatch: 50 }
    ];
    // deviceDigitalColumns[deviceDigitalColumns.length-1].fillspace = true;
    // console.log(deviceDigitalColumns);
    webix.$$("deviceanalogdata").clearAll();
    $$("deviceanalogdata").define("columns", deviceAnalogColumns);
    getDeviceConfig();
    webix.$$("deviceanalogdata").refreshColumns();
}
exports.deviceReportUpdateTable = deviceReportUpdateTable;
function getDeviceList() {
    requestData = {};
    app_1.request.sendPromise(requestData, "getProject", "localhost", 3000).then(function (jsondata) {
        const ret = [];
        // console.log("deviceReportInit");
        // console.log(jsondata.data.recordset);
        // console.log(JSON.stringify(jsondata));
        for (const [index, value] of jsondata.data.recordset.entries()) {
            // for(const[index2, value2] of value1.values.entries()) {
            // console.log(value);
            ret.push({ id: value.ProjUserKey, value: value.ProjUserName });
            // }
        }
        if (ret.length > 0) {
            // console.log(devicelist);
            // console.log(devicelist[0].id);
            $$("devicelist").define("options", ret);
            $$("devicelist").define("value", ret[0].id);
            $$("devicelist").define("on", {
                onChange: function (id) {
                    // alert(id);
                    this.define({
                        value: id
                    });
                }
            });
            webix.$$("devicelist").refresh();
            projectName = webix.$$("devicelist").getValue();
            // alert(firstDeviceIpAddress);
            // alert((<webix.ui.combo>webix.$$("devicelist")).getValue());
            // this.$scope.app.show("/layout/ioreport?CategoryID=" + iocategoryid);
            // *** IF DEVICE LIST IS FOUND, GENERATE FIRST REPORT ON THE CATEGORY LIST AUTOMATICALLY ***
            // devicecategoryid = "1";
            deviceReportUpdateTable();
        }
    }, function (status) {
        console.log(JSON.stringify(status));
        webix.message({
            text: status,
            type: "error",
            expire: -1,
            id: "devicelog"
        });
        console.log(status, "error");
    });
}
exports.getDeviceList = getDeviceList;
function deviceReportInit() {
    getDeviceList();
}
exports.deviceReportInit = deviceReportInit;


/***/ }),

/***/ "./sources/controller/reportController.ts":
/*!************************************************!*\
  !*** ./sources/controller/reportController.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ../app */ "./sources/app.ts");
exports.crumbsep = " > ";
const key = "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";
function encodeStr(uncoded) {
    console.log(uncoded);
    uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g, "");
    console.log(uncoded);
    let coded = "";
    let chr;
    for (let i = uncoded.length - 1; i >= 0; i--) {
        chr = uncoded.charCodeAt(i);
        console.log(chr);
        coded += (chr >= 65 && chr <= 90) ?
            key.charAt(chr - 65 + 26 * Math.floor(Math.random() * 2)) :
            String.fromCharCode(chr);
    }
    console.log(coded);
    console.log(encodeURIComponent(coded));
    return encodeURIComponent(coded);
}
exports.encodeStr = encodeStr;
function decodeStr(coded) {
    coded = decodeURIComponent(coded);
    console.log(coded);
    let uncoded = "";
    let chr;
    for (let i = coded.length - 1; i >= 0; i--) {
        chr = coded.charAt(i);
        console.log(chr);
        console.log(String.fromCharCode(65 + key.indexOf(chr) % 26));
        uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ?
            String.fromCharCode(65 + key.indexOf(chr) % 26) :
            chr;
        // console.log(uncoded);
    }
    console.log(uncoded);
    return uncoded;
}
exports.decodeStr = decodeStr;
function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map((key2) => {
        const newKey = newKeys[key2] || key2;
        return { [newKey]: obj[key2] };
    });
    return Object.assign({}, ...keyValues);
}
exports.renameKeys = renameKeys;
function equals(a, b) {
    a = a.toString().toLowerCase();
    return a.indexOf(b) !== -1;
}
exports.equals = equals;
function isNull(obj, key1) {
    return (obj[key1] === null || obj[key1] === undefined || obj[key1] === "null" || obj[key1] === "");
}
exports.isNull = isNull;
function validateNullValue(obj) {
    const objKeys = Object.keys(obj);
    objKeys.forEach((key2) => {
        if (isNull(obj, key2)) {
            // console.log("validate key isNull : " + JSON.stringify(key2, null, " "));
            obj[key2] = "-";
        }
        if (typeof (obj[key2]) === "object") {
            //  console.log("validate key: " + JSON.stringify(key2, null, " "));
            validateNullValue(obj[key2]);
        }
    });
}
exports.validateNullValue = validateNullValue;
function filterSearch(type, text, column) {
    type.filter(function (obj) {
        // alert(obj);
        // console.log(column);
        // return obj.TagName.toLowerCase().indexOf(text)==0;
        for (const [index, value] of column.entries()) {
            // console.log(value3);
            // console.log(obj[value.ColumnName]);
            if (value.Hidden === false && (obj[value.ColumnName])) {
                if (equals(obj[value.ColumnName], text)) {
                    return true;
                }
                if (index + 1 === column.length) {
                    return false;
                }
            }
        }
    }, "", false);
}
exports.filterSearch = filterSearch;
function printButton(printData) {
    // console.log((<webix.ui.template>webix.$$("iocategory")).getValues());
    // console.log((<webix.ui.template>webix.$$("iogeneratedtime")).getValues());
    webix.print(printData, { mode: "landscape", margin: 40, docHeader: "IO List", fit: "data" }); // , fit:"data", trim:true
}
exports.printButton = printButton;
function viewName(idString) {
    console.log("viewName idString:" + idString);
    return webix.$$(idString);
}
exports.viewName = viewName;
function showProgressBar(view, totalRow, currentRow) {
    let percentageProgress = 0;
    const progressViewUi = $$(view);
    percentageProgress = Math.round((currentRow / totalRow) * 100);
    progressViewUi.define("template", "<div class='square-green' style='height:10px;width:" + percentageProgress + "%'></div> </div>");
    progressViewUi.refresh();
}
exports.showProgressBar = showProgressBar;
function showProgressIcon(view) {
    const dataview = webix.extend($$(view), webix.ProgressBar);
    dataview.showProgress({
        position: 0,
        // delay: 500,
        type: "icon",
        icon: "refresh",
        hide: false
    });
}
exports.showProgressIcon = showProgressIcon;
function hideProgressIcon(view) {
    const dataview = webix.extend($$(view), webix.ProgressBar);
    dataview.hideProgress({
        // delay: 500,
        hide: true
    });
}
exports.hideProgressIcon = hideProgressIcon;
function respondDataProcessing1Ori(objects, reportsType) {
    validateNullValue(objects.values);
    switch (reportsType) {
        case "Alarm History Journal (Alarm - Event)":
            objects.values.forEach((objElemnts) => {
                objElemnts.FLAGACK = checkFlagAck(objElemnts.FLAGACK);
            });
            webix.$$("alarmhistoryjournaldata").parse(objects.values, "json");
            break;
    }
}
exports.respondDataProcessing1Ori = respondDataProcessing1Ori;
function printWithOptionsButton(type, orientation, filename, fit) {
    // alert(filename);
    const config = {
        mode: orientation,
        margin: 40,
        docHeader: filename,
        trim: false
    };
    fit === "fit by data" ? config.fit = "data" : config.fit = "page";
    webix.print(type, config);
}
exports.printWithOptionsButton = printWithOptionsButton;
function exportButton(exportData) {
    const config = {
        table: {
            textAlign: "left",
            fontSize: 6
        },
        columns: {
            Description: { width: 280 },
            TagName: { width: 120 },
            Range: { width: 80 },
            RBEWindow: { width: 100 }
        },
        filename: "datatable",
        orientation: "landscape",
        docHeader: "IO List",
        rawValues: false,
        autowidth: false
    };
    webix.toPDF(exportData, config);
}
exports.exportButton = exportButton;
function exportWithOptionsButton(type, format, orientation, deviceExportColumn, selectedcolumns, filename, tableDesc, maxRecordWarning) {
    const ignore = [];
    let count = 1;
    const columns = [];
    columns.No = {
        template: function (obj) {
            // console.log(obj);
            return count++;
        },
        width: 30
    };
    if (format === "pdf" || format === "csv") {
        const selectedcolumnsRes = selectedcolumns.split(",");
        for (const [index, value] of deviceExportColumn.entries()) {
            // console.log(value);
            selectedcolumnsRes.includes(value.id) ? columns[value.id] = true : ignore[value.id] = true;
        }
    }
    if (format === "pdf") {
        // console.log(selectedcolumnsRes);
        // console.log(columns);
        // console.log(ignore);
        // columns.rawValues = false;
        let count2 = 0;
        const config = {
            table: {
                textAlign: "left",
                fontSize: 8
            },
            columns: columns,
            ignore: ignore,
            filename: filename,
            orientation: orientation,
            docHeader: {
                text: tableDesc,
                textAlign: "center",
            },
            // docHeaderImage:{url:"models/Header.JPG", order:0 },
            autowidth: true,
            filter: function (obj) {
                count2++;
                if (count2 <= maxRecordWarning) {
                    return obj;
                }
            }
        };
        // webix.toPDF(type, config);
        // $$("ioexportwin").disable();
        /*const datatableextend: any = webix.extend($$("ioexportwin"), webix.ProgressBar);
        datatableextend.showProgress({
            type:"bottom",
            delay:2000,
            hide:true
        });*/
        webix.toPDF(type, config).then(function (blob) {
            console.log(blob);
            // $$("ioexportwin").enable();
        });
    }
    else if (format === "csv") {
        let count2 = 0;
        webix.csv.delimiter.cols = ",";
        const config = {
            filename: filename,
            columns: columns,
            ignore: ignore,
            filter: function (obj) {
                count2++;
                if (count2 <= maxRecordWarning * 10) { // temporarily set max to 500*100 = 5000
                    return obj;
                }
            }
        };
        // webix.toCSV(type, config);
        webix.toCSV(type, config).then(function (blob) {
            console.log(blob);
        });
    }
    else if (format === "png") {
        // alert(type);
        const config = {
            filename: filename
        };
        webix.toPNG(type, config);
        /*webix.toPNG(type, {
            download:false
         }).then(function(blob: any) {
            webix.html.download(blob, "myfile.png");
         });*/
    }
}
exports.exportWithOptionsButton = exportWithOptionsButton;
function getdocDefinitionPdf(content, exportOrientation) {
    const docDefinitionPdf = {};
    docDefinitionPdf.styles = {
        header: {
            fontSize: 8,
            bold: true
        },
        content: {
            fontSize: 8
        },
        tableTitle: {
            fontSize: 8,
        }
    };
    docDefinitionPdf.pageOrientation = exportOrientation;
    docDefinitionPdf.content = [];
    for (const [index, value] of content.table.entries()) {
        // console.log(index);
        // console.log(JSON.stringify(value.reportdata, null, " "));
        index === 0 ?
            docDefinitionPdf.content.push({ text: value.tabledesc.desc1, style: "tableTitle", alignment: "center" }) :
            docDefinitionPdf.content.push({ text: value.tabledesc.desc1, style: "tableTitle", alignment: "center", pageBreak: "before" });
        docDefinitionPdf.content.push({ text: value.tabledesc.desc2, style: "tableTitle", alignment: "center" });
        docDefinitionPdf.content.push({ text: value.tabledesc.desc3, style: "tableTitle", alignment: "center" });
        docDefinitionPdf.content.push({ text: "" });
        docDefinitionPdf.content.push({
            style: "content",
            table: {
                headerRows: 1,
                body: value.reportdata
            }
        });
    }
    return docDefinitionPdf;
}
exports.getdocDefinitionPdf = getdocDefinitionPdf;
function getdocDefinitionCsv(content) {
    const docDefinitionCsv = [];
    for (const [index, value] of content.table.entries()) {
        // console.log(JSON.stringify(value.reportdata), null, " ");
        docDefinitionCsv.push([value.tabledesc.desc1, value.tabledesc.desc2, value.tabledesc.desc3]);
        for (const [index2, value2] of value.reportdata.entries()) {
            // console.log(value2);
            docDefinitionCsv.push(value2);
        }
    }
    return docDefinitionCsv;
}
exports.getdocDefinitionCsv = getdocDefinitionCsv;
function exportReport(exportwinid, content, exportFormat, exportOrientation) {
    // console.log(JSON.stringify(content, null, " "));
    // console.log(exportFormat);
    // convert the content to pdfmake format
    if (exportFormat === "pdf") {
        const docDefinitionPdf = getdocDefinitionPdf(content, exportOrientation);
        // console.log(JSON.stringify(docDefinitionPdf, null, " "));
        const requestDataPdf = {
            folder: ["public"],
            filename: content.filename,
            docDefinition: docDefinitionPdf
        };
        // showProgressIcon("");
        // alert(JSON.stringify(requestDataPdf).length);
        // after doing benchmark testing, pdfmake unable to process data with size more than 5,000,000 bytes
        showProgressIcon(exportwinid);
        if (JSON.stringify(requestDataPdf).length < 5000000) {
            app_1.request.sendPromise(requestDataPdf, "createPDFFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
                hideProgressIcon(exportwinid);
                console.log(content.filename + ".pdf" + " is successfully created.");
                app_1.request.downloadReport(content.filename + ".pdf", app_1.ipAddr, app_1.webserverport).then(function (jsondata2) {
                    webix.html.download(jsondata2, content.filename + ".pdf");
                    const requestData2 = {
                        filename: [content.filename + ".pdf"],
                        folder: ["public"]
                    };
                    app_1.request.sendPromise(requestData2, "deleteFilesScadaWeb", app_1.ipAddr, app_1.webserverport).then(function (jsondata3) {
                        console.log("CSV/PDF Report are successfully deleted.");
                    }, function (status) {
                        app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to delete CSV/PDF Report. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
                        console.log("Failed to delete CSV/PDF Report. " + status.error_msg);
                    });
                }, function (status) {
                    webix.message("Failed to get " + content.filename + ".pdf. ", "error");
                    console.log("Failed to get " + content.filename + ".pdf. ");
                    // alert('Something went wrong.');
                });
            }, function (status) {
                webix.message({
                    text: "Failed to create " + content.filename + ".pdf. " + status.error_msg,
                    type: "error",
                    expire: -1,
                    id: "socketClose"
                });
                console.log("Failed to create " + content.filename + ".pdf. ");
                // alert('Something went wrong.');
            });
        }
        else {
            webix.alert("Data is too large. Please export using CSV.");
        }
    }
    else {
        // convert the content to csv-stringify format
        const docDefinitionCsv = getdocDefinitionCsv(content);
        const requestDataCsv = {
            folder: ["public"],
            filename: content.filename,
            docDefinition: docDefinitionCsv
        };
        // alert(JSON.stringify(docDefinitionCsv).length);
        // csv-stringify is actually able to handle larger data but the server's body parser limit the request body up to 5mb
        if (JSON.stringify(requestDataCsv).length < 5000000) {
            app_1.request.sendPromise(requestDataCsv, "createCSVFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
                console.log(content.filename + ".csv" + " is successfully created.");
                app_1.request.downloadReport(content.filename + ".csv", app_1.ipAddr, app_1.webserverport).then(function (jsondata2) {
                    webix.html.download(jsondata2, content.filename + ".csv");
                    const requestData2 = {
                        filename: [content.filename + ".csv"],
                        folder: ["public"]
                    };
                    app_1.request.sendPromise(requestData2, "deleteFilesScadaWeb", app_1.ipAddr, app_1.webserverport).then(function (jsondata3) {
                        console.log("CSV/PDF Report are successfully deleted.");
                    }, function (status) {
                        app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to delete CSV/PDF Report. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
                        console.log("Failed to delete CSV/PDF Report. " + status.error_msg);
                    });
                }, function (status) {
                    webix.message("Failed to get " + content.filename + ".csv. ", "error");
                    console.log("Failed to get " + content.filename + ".csv. ");
                    // alert('Something went wrong.');
                });
            }, function (status) {
                webix.message({
                    text: "Failed to create " + content.filename + ".csv. " + status.error_msg,
                    type: "error",
                    expire: -1,
                    id: "socketClose"
                });
                console.log("Failed to create " + content.filename + ".csv. " + status.error_msg);
                // alert('Something went wrong.');
            });
        }
        else {
            webix.alert("Data is too large.");
        }
    }
}
exports.exportReport = exportReport;
function createCsvPdfSendEmail(contentCSV, contentPDF, emailformatcsv, emailformatpdf, form, data) {
    // console.log(JSON.stringify(content, null, " "));
    // convert the content to pdfmake format
    const docDefinitionPdf = getdocDefinitionPdf(contentPDF, "landscape");
    // console.log(JSON.stringify(docDefinitionPdf, null, " "));
    const requestDataPdf = {
        folder: ["public"],
        filename: contentPDF.filename,
        docDefinition: docDefinitionPdf
    };
    // convert the content to csv-stringify format
    const docDefinitionCsv = getdocDefinitionCsv(contentCSV);
    const requestDataCsv = {
        folder: ["public"],
        filename: contentCSV.filename,
        docDefinition: docDefinitionCsv
    };
    const attachedFiles = [];
    // after doing benchmark testing, pdfmake unable to process data with size more than 5,000,000 bytes
    if (JSON.stringify(requestDataPdf).length < 5000000 && JSON.stringify(requestDataCsv).length < 5000000) {
        if (emailformatcsv && emailformatpdf) {
            app_1.request.sendPromise(requestDataCsv, "createCSVFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
                console.log(contentCSV.filename + ".csv" + " is successfully created.");
                webix.message(contentCSV.filename + ".csv" + " is successfully created.", "info");
                attachedFiles.push(contentCSV.filename + ".csv");
                app_1.request.sendPromise(requestDataPdf, "createPDFFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata2) {
                    console.log(contentPDF.filename + ".pdf" + " is successfully created.");
                    webix.message(contentPDF.filename + ".pdf" + " is successfully created.", "info");
                    attachedFiles.push(contentPDF.filename + ".pdf");
                    sendEmail(data, form, attachedFiles);
                }, function (status) {
                    webix.message({
                        text: "Failed to create " + contentPDF.filename + ".pdf. " + status.error_msg,
                        type: "error",
                        expire: -1,
                        id: "socketClose"
                    });
                    console.log("Failed to create " + contentPDF.filename + ".pdf. " + status.error_msg);
                    // alert('Something went wrong.');
                });
            }, function (status) {
                webix.message({
                    text: "Failed to create " + contentCSV.filename + ".csv. " + status.error_msg,
                    type: "error",
                    expire: -1,
                    id: "socketClose"
                });
                console.log("Failed to create " + contentCSV.filename + ".csv. " + status.error_msg);
                // alert('Something went wrong.');
            });
        }
        if (emailformatcsv && !emailformatpdf) {
            app_1.request.sendPromise(requestDataCsv, "createCSVFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
                console.log(contentCSV.filename + ".csv" + " is successfully created.");
                webix.message(contentCSV.filename + ".csv" + " is successfully created.", "info");
                attachedFiles.push(contentCSV.filename + ".csv");
                sendEmail(data, form, attachedFiles);
            }, function (status) {
                webix.message("Failed to create " + contentCSV.filename + ".csv. " + status.error_msg, "error");
                console.log("Failed to create " + contentCSV.filename + ".csv. " + status.error_msg);
                // alert('Something went wrong.');
            });
        }
        if (!emailformatcsv && emailformatpdf) {
            app_1.request.sendPromise(requestDataPdf, "createPDFFile", app_1.ipAddr, app_1.webserverport).then(function (jsondata2) {
                console.log(contentPDF.filename + ".pdf" + " is successfully created.");
                webix.message(contentPDF.filename + ".pdf" + " is successfully created.", "info");
                attachedFiles.push(contentPDF.filename + ".pdf");
                sendEmail(data, form, attachedFiles);
            }, function (status) {
                webix.message("Failed to create " + contentPDF.filename + ".pdf. " + status.error_msg, "error");
                console.log("Failed to create " + contentPDF.filename + ".pdf. " + status.error_msg);
                // alert('Something went wrong.');
            });
        }
    }
    else {
        webix.alert("Data is too large.");
    }
}
exports.createCsvPdfSendEmail = createCsvPdfSendEmail;
function sendEmail(data, form, attachedFiles) {
    // console.log(process.env.SCADA_WEB); // cannot read env var
    // console.log(attachedFiles);
    const recipient = form.getValues().emailrecipient;
    // console.log(recipient);
    const subject = form.getValues().emailsubject;
    // console.log(subject);
    const message = form.getValues().emailmessage;
    // console.log(message);
    const attachment = [];
    for (const [index, value] of attachedFiles.entries()) {
        attachment.push({
            filename: value,
            folder: ["public"]
        });
    }
    // console.log(attachment);
    // console.log(JSON.stringify(attachment, null, " "));
    const requestData = {
        sender: {
            ServerName: data.Sender[0].ServerName,
            EmailAddress: data.Sender[0].EmailAddress,
            Password: window.atob(data.Sender[0].Password) // TODO: temporary encryption using simple base64 encoding. Have to decide on proper encryption for password
        },
        recipient: recipient,
        subject: subject,
        message: message,
        attachment: attachment
    };
    const filesToDelete = [];
    for (const [index, value] of attachedFiles.entries()) {
        filesToDelete.push(value);
    }
    // console.log(JSON.stringify(filesToDelete, null, " "));
    const requestData2 = {
        filename: filesToDelete,
        folder: ["public"]
    };
    console.log("sendEmail");
    app_1.request.sendPromise(requestData, "sendEmail", app_1.ipAddr, app_1.webserverport).then(function (jsondata2) {
        console.log("Email is successfully sent.");
        webix.message("Email is successfully sent.", "info");
        app_1.request.send({ logLevel: "debug", applicationName: "wreport", message: "Email is successfully sent." }, "log", app_1.ipAddr, app_1.webserverport);
        // (<webix.ui.window>webix.$$("deviceemailwin2")).close();
        // form.getTopParentView().close();
        app_1.request.sendPromise(requestData2, "deleteFilesScadaWeb", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
            console.log("CSV/PDF Report are successfully deleted.");
            // webix.message("CSV/PDF Report are successfully deleted.", "info");
        }, function (status) {
            webix.message("Failed to delete CSV/PDF Report. " + status.error_msg, "error");
            app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to delete CSV/PDF Report. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
            console.log("Failed to delete CSV/PDF Report. " + status.error_msg);
        });
        saveEmailRecipient(data, recipient);
    }, function (status) {
        webix.message({
            text: "Failed to send email. " + status.error_msg,
            type: "error",
            expire: -1,
            id: "socketClose"
        });
        app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to send email. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
        console.log("Failed to send email. " + status.error_msg);
        // alert('Something went wrong.');
        app_1.request.sendPromise(requestData2, "deleteFilesScadaWeb", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
            console.log("CSV/PDF Report are successfully deleted.");
            // webix.message("CSV/PDF Report are successfully deleted.", "info");
        }, function (status2) {
            webix.message("Failed to delete CSV/PDF Report. " + status2.error_msg, "info");
            app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to delete CSV/PDF Report. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
            console.log("Failed to delete CSV/PDF Report. " + status2.error_msg);
        });
    });
}
exports.sendEmail = sendEmail;
function saveEmailRecipient(data, recipient) {
    let requestData = [];
    const existedEmail = [];
    for (const [index, value] of data.Recipient.entries()) {
        existedEmail.push(value.EmailAddress);
    }
    for (const [index, value] of recipient.split(",").entries()) {
        if (!existedEmail.includes(value)) {
            data.Recipient.push({
                EmailId: data.Recipient.length + 1,
                FullName: value.substr(0, value.indexOf("@")),
                EmailAddress: value,
                Hidden: 0
            });
        }
    }
    if (data.Recipient.length !== existedEmail.length) {
        requestData = {
            folder: exports.scadaWebDataForReport,
            filename: "emailsetting.json",
            data: data
        };
        app_1.request.sendPromise(requestData, "writeScadaWebData", app_1.ipAddr, app_1.webserverport).then(function (jsondata) {
            reportConfigSync(requestData, "writeScadaWebData");
            console.log("Email is successfully added.");
            webix.message("Email is successfully added.", "info");
        }, function (status) {
            webix.message({
                text: status.error_msg,
                type: "error",
                expire: -1,
                id: "socketClose"
            });
            app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Failed to save email recipient. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
            console.log(status.error_msg, "error");
        });
    }
    // webix.message(msg);
}
exports.saveEmailRecipient = saveEmailRecipient;
function convertTimeStamp(timestamp) {
    // alert(timestamp);
    const d = new Date(timestamp * 1000);
    // alert(d);
    timestamp = webix.Date.dateToStr("%d/%m/%Y %H:%i:%s.%S", false)(new Date());
    // const yyyy: string = d.getFullYear();
    // const mm: string = ("0" + (d.getMonth() + 1)).slice(-2);
    // const dd: string = ("0" + d.getDate()).slice(-2);
    // timestamp = mm + "/" + dd + "/" + yyyy;
    // alert(timestamp);
    return timestamp;
}
exports.convertTimeStamp = convertTimeStamp;
function getTimeDifference(srtime) {
    srtime = typeof srtime !== "undefined" ? srtime : new Date().getTime();
    const now = new Date().getTime();
    if (isNaN(srtime)) {
        return "";
    }
    // console.log(srtime + " " + now);
    let milisecDiff = 0;
    srtime < now ? milisecDiff = now - srtime : milisecDiff = srtime - now;
    const days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));
    const hours = Math.floor((milisecDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milisecDiff % (1000 * 60 * 60)) / (1000 * 60));
    const dateDiff = new Date(milisecDiff);
    return days + "d" + hours + "h" + minutes + "min"; //  + dateDiff.getSeconds() + "sec"
    // return days + "d"+ dateDiff.getHours() + "h" + dateDiff.getMinutes() + "min"; //  + dateDiff.getSeconds() + "sec"
}
exports.getTimeDifference = getTimeDifference;
function convertTimestampToReportFormat(timestamp) {
    // In wldataserver, if we use convert(SrcTime), it will return up to "timestamp_up_to_second.microsecond" i.e. "1524189865.798000", whereas javascript unable to read up to microsecond
    // 1524189865 (up to second)
    // 798000 (microsecond)
    // 798000/1000 = 789 (milisecond)
    // 1524189865798 (up to milisecond)
    // thus, we need to reformat the timestamp return by wldataserver
    // 1551092628.9000 = 25/02/2019 19:03:48.009
    // 1551092626.91000 = 25/02/2019 19:03:46.091
    // console.log(timestamp);
    const timestampArray = timestamp.split("."); // i.e. 1524189865.798000
    const ccyymmddhhmmss = timestampArray[0]; // i.e. 1524189865
    const ccyymmddhhmmssD = new Date(Number(ccyymmddhhmmss) * 1000); // i.e. Fri Apr 20 2018 10:04:25 GMT+0800 (Malaysia Time) -> without milisecond/microsecond (.000000)
    const SSSUUU = Number(timestampArray[1]); // i.e. 798000 -> up to microsecond
    // const SSS: number = Number(SSSUUU)/1000; // i.e.789 -> convert microsecond into miliseconds, 682056 -> 682.056, still working with setMiliseconds()
    const SSS = Math.floor(Number(SSSUUU) / 1000); // i.e.If division/1000 = 682.056, with math.floor, SSS = 682
    const ccyymmddhhmmssSSSD = ccyymmddhhmmssD.setMilliseconds(SSS); // Set milisecond to ccyymmddhhmmssD
    // console.log(SSSUUU);
    // console.log(SSS);
    // console.log(ccyymmddhhmmssD);
    // console.log(Number(timestampArray[0]));
    // console.log(ccyymmddhhmmssD.setMilliseconds(SSS));
    // console.log(new Date(b));
    // console.log(webix.Date.dateToStr("%d/%m/%Y %H:%i:%s.%S", false)(new Date(b)));
    // return webix.Date.dateToStr("%d/%m/%Y %H:%i:%s.%S", false)(new Date(ccyymmddhhmmssSSSD));
    return new Date(ccyymmddhhmmssSSSD);
    // return myDate.toGMTString();
    // return myDate.toLocaleString();
}
exports.convertTimestampToReportFormat = convertTimestampToReportFormat;
function displayCurrentTime() {
    return webix.Date.dateToStr("%d/%m/%Y %H:%i:%s", false)(new Date());
}
exports.displayCurrentTime = displayCurrentTime;
function displayCurrentTimeCCYY_MM_DD() {
    return webix.Date.dateToStr("%Y_%m_%d", false)(new Date());
}
exports.displayCurrentTimeCCYY_MM_DD = displayCurrentTimeCCYY_MM_DD;
function convertTimestampToCCYYMMDDHH(dateStr) {
    const ccyymmdd = webix.Date.strToDate("%Y%m%d00", false)(dateStr);
    return ccyymmdd;
}
exports.convertTimestampToCCYYMMDDHH = convertTimestampToCCYYMMDDHH;
function getDataQualityDesc(dq) {
    let dqDesc = "";
    switch (dq) {
        case 0:
            dqDesc = "Normal";
            break;
        case 1:
            dqDesc = "Manually Set";
            break;
        case 2:
            dqDesc = "Blocked";
            break;
        case 4:
            dqDesc = "Tagged";
            break;
        case 8:
            dqDesc = "Telem Fail";
            break;
        case 16:
            dqDesc = "Test Mode";
            break;
        case 32:
            dqDesc = "Calculation Fail";
            break;
        case 64:
            dqDesc = "Link Fail";
            break;
        case 128:
            dqDesc = "Point Fault";
            break;
        case 256:
            dqDesc = "Alarm Inhibit";
            break;
        case 512:
            dqDesc = "Unreasonable";
            break;
        case 1028:
            dqDesc = "Force To Zero";
            break;
        case 2018:
            dqDesc = "Not Refresh";
            break;
        default:
            dqDesc = "Unknown";
    }
    return dqDesc;
}
exports.getDataQualityDesc = getDataQualityDesc;
function checkFlagAck(flagAck) {
    let flagAckDesc = "";
    switch (flagAck) {
        case 0:
            flagAckDesc = "Unack";
            break;
        case 1:
            flagAckDesc = "Ack";
            break;
    }
    return flagAckDesc;
}
exports.checkFlagAck = checkFlagAck;
function getAlarmType(alarmType) {
    let alarmTypeDesc = "";
    switch (alarmType) {
        case 1:
            alarmTypeDesc = "Alarm";
            break;
        case 2:
            alarmTypeDesc = "Event";
            break;
        case 3:
            alarmTypeDesc = "System Error";
            break;
        case 4:
            alarmTypeDesc = "Application Error";
            break;
        default:
            alarmTypeDesc = "-";
    }
    return alarmTypeDesc;
}
exports.getAlarmType = getAlarmType;
exports.getSideMenuList = function () {
    console.log("here3");
    // console.log(JSON.stringify(jsondata.data, null, " "));
    // const data: any = jsondata.data;
    // console.log(data);
    const menuoptions = [
        { id: "Permission", value: "Permission", icon: "plug", filename: "devicesreport" },
        { id: "Communication", value: "Communication", icon: "sitemap", filename: "commreport" },
        { id: "IO", value: "IO", icon: "microchip", filename: "ioreport" },
        { id: "Alarm History Journal", value: "Alarm History Journal", icon: "bell", filename: "alarmhistoryjournalreport" }
    ];
    // console.log(menuoptions[4]);
    // console.log(data.CustomReport);
    // console.log(menuoptions[4].data);
    webix.$$("sideMenuList").parse(menuoptions, "json");
    // console.log("parse successfull");
    webix.$$("sideMenuList").refresh();
    // console.log("refresh side menu");
};
exports.convertWebixSQLtoRDBMS = function (sql) {
    // console.log(sql);
    // replace all occurances, thus, we use regex
    sql = sql.replace(/"/g, "'");
    return sql;
};
exports.convertSQLtoRTDB = function (sql) {
    // console.log(sql);
    // replace all occurances, thus, we use regex
    sql = sql.replace(/"/g, "'");
    // console.log(sql);
    sql = sql.replace(/=/g, "==");
    // console.log(sql);
    sql = sql.replace(/!==/g, "!=");
    // console.log(sql);
    sql = sql.replace(/LIKE\('%/g, "=='*");
    // console.log(sql);
    sql = sql.replace(/LIKE\(/g, "==");
    // console.log(sql);
    sql = sql.replace(/%'\)/g, "*'");
    // console.log(sql);
    sql = sql.replace(/'\)/g, "'");
    // console.log(sql);
    sql = sql.replace(/IS NULL/g, "==''");
    // console.log(sql);
    sql = sql.replace(/IS NOT NULL/g, "!=''");
    // console.log(sql);
    sql = sql.replace(/NOT /g, "!");
    // console.log(sql);
    sql = sql.replace(/convertChoice|convertTime|convertUser|convertSuffix|\(|\)/gi, function (str) {
        return "";
    });
    // console.log(sql);
    // TODO: how to handle if sqk include SrcTime? because RTDB only accept date in timestamp
    return sql;
};
exports.scadaWebDataForReport = ["wreport", "config"];
exports.scadaWebForReport = ["client", "wreport", "config"];
exports.wreporthostname = window.location.hostname === "localhost" ? "127.0.0.1" : window.location.hostname;
exports.analogFormula = [
    { id: "AVGVALUE", value: "AVGVALUE" },
    { id: "AVGVALUEPOS", value: "AVGVALUEPOS" },
    { id: "CONSUMPTIONVALUE", value: "CONSUMPTIONVALUE" },
    { id: "EXACTHOURREADING", value: "EXACTHOURREADING" },
    { id: "FIRSTREADING", value: "FIRSTREADING" },
    { id: "MAXVALUE", value: "MAXVALUE" },
    { id: "MINVALUE", value: "MINVALUE" },
    { id: "MINVALUEPOS", value: "MINVALUEPOS" },
    { id: "NEGDIFFACCM", value: "NEGDIFFACCM" },
    { id: "POSDIFFACCM", value: "POSDIFFACCM" },
    { id: "TOTALIZER", value: "TOTALIZER" },
    { id: "TOTALVALUE", value: "TOTALVALUE" },
    { id: "VALUETODATE", value: "VALUETODATE" }
];
exports.analogFormulaYearly = [
    { id: "AVGVALUE", value: "AVGVALUE" },
    { id: "CONSUMPTIONVALUE", value: "CONSUMPTIONVALUE" },
    { id: "MAXVALUE", value: "MAXVALUE" },
    { id: "MINVALUE", value: "MINVALUE" },
    { id: "TOTALVALUE", value: "TOTALVALUE" },
    { id: "VALUETODATE", value: "VALUETODATE" }
];
exports.redundantServer = [];
exports.decimalPoint = {};
function validateIPaddress(inputText) {
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (inputText.match(ipformat)) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateIPaddress = validateIPaddress;
function reportConfigSync(requestData, action) {
    console.log("reportConfigSync");
    for (const [index, value] of exports.redundantServer.entries()) {
        app_1.request.sendPromise(requestData, action, value, app_1.webserverport).then(function (jsondata2) {
            webix.message("Sync (" + action + ") at " + value + " successfull. ", "info");
            app_1.request.send({ logLevel: "debug", applicationName: "wreport", message: "Sync (" + action + ") at " + value + " successfull. " }, "log", app_1.ipAddr, app_1.webserverport);
        }, function (status) {
            webix.message({
                text: "Sync at " + value + " failed. " + status.error_msg,
                type: "error",
                expire: -1,
                id: "emaillog"
            });
            app_1.request.send({ logLevel: "error", applicationName: "wreport", message: "Sync (" + action + ") at " + value + " failed. " + status.error_msg }, "log", app_1.ipAddr, app_1.webserverport);
            console.log(status.error_msg, "error");
        });
    }
}
exports.reportConfigSync = reportConfigSync;


/***/ }),

/***/ "./sources/helpers/state.ts":
/*!**********************************!*\
  !*** ./sources/helpers/state.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function State(app) {
    const service = {
        getState() {
            return this.state;
        },
        setState(state) {
            this.state = state;
        },
        state: 0
    };
    app.setService("state", service);
}
exports.State = State;


/***/ }),

/***/ "./sources/locales sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./sources/locales sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "./sources/locales/en.ts",
	"./en.ts": "./sources/locales/en.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/locales sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/locales/en.ts":
/*!*******************************!*\
  !*** ./sources/locales/en.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ "./sources/styles/app.css":
/*!********************************!*\
  !*** ./sources/styles/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./sources/views sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./sources/views sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home": "./sources/views/home.ts",
	"./home.ts": "./sources/views/home.ts",
	"./layout": "./sources/views/layout.ts",
	"./layout.ts": "./sources/views/layout.ts",
	"./sidebar": "./sources/views/sidebar.ts",
	"./sidebar.ts": "./sources/views/sidebar.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/views sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/views/home.ts":
/*!*******************************!*\
  !*** ./sources/views/home.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const webix_jet_1 = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
const chome_1 = __webpack_require__(/*! ../controller/chome */ "./sources/controller/chome.ts");
class DevicesReport extends webix_jet_1.JetView {
    constructor() {
        super(...arguments);
        this.userCredentials = {};
    }
    config() {
        const devicesreport = {
            id: "deviceslayout",
            view: "datalayout",
            // type:"space",
            padding: 5,
            rows: [
            // {
            //     height:45,
            // borderless:true,
            // type:"clean",
            //     cols:[
            //         {id:"devicedesc",view:"template",template:"<b>-</b>",width:150,borderless:true, type:"clean"},
            //         {
            //             rows:[
            //                 {id:"devicetotalanalogpoint",view:"template",width:200,borderless:true, type:"clean",
            //                  template:function() {
            //                         const count: number = 0;
            //                         return "Total Analog Point " + count;
            //                     },
            //                 },
            //                 {id:"devicetotaldigitalpoint",view:"template",width:200,borderless:true, type:"clean",
            //                  template:function() {
            //                         const count: number = 0;
            //                         return "Total Digital Point " + count;
            //                     },
            //                 },
            //             ]
            //         },
            //         {id:"devicesearch", view:"search", height:10, fillspace:true, keyPressTimeout:100, placeholder:"Search from the table"},
            //         {id:"devicefilter", view:"button", type:"icon", icon:"filter", width:30},
            //         {id:"devicesavefilter", view:"button", type:"icon", icon:"save", width:30},
            //         {id:"devicelist", view:"combo", maxWidth:280},
            //         {id:"devicecategory", view:"combo", maxWidth:150},
            //         {id:"devicegenerate", view:"button", type:"iconButton", icon:"file", label:"Generate Report", maxWidth:125},
            //         {id:"deviceprint", view:"button", type:"icon", icon:"print", width:30},
            //         {id:"deviceexport", view:"button", type:"icon", icon:"download", width:30},
            //         {id:"deviceemail", view:"button", type:"icon", icon:"envelope", width:30},
            //     ]
            // },
            // {
            //     cols:[
            //         {
            //             rows:[
            //                 {
            //                     id:"devicetitle",
            //                     view:"template",
            //                     name:"$value",
            //                     template:"<b>Title</b>: #title# #device#",
            //                     adjust:true,
            //                     autowidth:true,
            //                     borderless:true,
            //                     type:"clean"
            //                 },
            //                 {
            //                     id:"devicedatasource",
            //                     view:"template",
            //                     name:"$value",
            //                     template:"<b>Data Source</b>: #datasource#",
            //                     maxWidth:500,
            //                     borderless:true,
            //                     type:"clean"
            //                 },
            //                 {
            //                     id:"devicegeneratedtime",
            //                     view:"template",
            //                     name:"$value",
            //                     template:"<b>Generated On</b>: #generateddate#",
            //                     maxWidth:500,
            //                     borderless:true,
            //                     type:"clean",
            //                     hidden:false
            //                 }
            //             ]
            //         },
            //         {
            //             rows: [
            //                 {
            //                     id:"devicesearchfiltercondition",
            //                     view:"template",
            //                     template:"<b>Search/Filter Condition</b>: -",
            //                     height:46,
            //                     borderless:true,
            //                     type:"clean"
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id:"deviceanalogdata",
            //     view:"datatable",
            //     select:true,
            //     tooltip: true,
            //     resizeColumn:true,
            //     resizeRow:true,
            //     spans: true,
            //     // scheme:{
            //     //     $init:function(obj: any) {
            //     //       // convert date strings to date objects
            //     //       obj["convertTime(SrcTime)"] = webix.Date.strToDate("%d/%m/%Y %H:%i:%s.%S", false)(obj["convertTime(SrcTime)"]);
            //     //   }
            //     // }
            // }
            ],
        };
        return devicesreport;
        // });
    }
    init(view, url) {
        chome_1.deviceReportInit();
    }
}
exports.default = DevicesReport;


/***/ }),

/***/ "./sources/views/layout.ts":
/*!*********************************!*\
  !*** ./sources/views/layout.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const webix_jet_1 = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
class ReportLayout extends webix_jet_1.JetView {
    config() {
        // console.log("here");
        const ui = {
            id: "scrollview",
            view: "scrollview",
            scroll: "xy",
            body: {
                rows: [
                    {
                        id: "toolbar", view: "toolbar", responsive: "toolbar", subMenuPos: "right", layout: "y", elements: [
                            { id: "reportmaintoolbarsidemenuicon", view: "button", type: "icon", icon: "home", align: "left", width: 30, click: "$$('sideMenuList').toggle();" },
                            { id: "menu", view: "menu", data: [
                                    { id: "1", value: "About Us", submenu: ["Our Name", "Our History", "Our Mission"] },
                                    { id: "2", value: "Our Services", submenu: ["Room", "Laundry", "Cendana Mart"] },
                                    { id: "3", value: "Rooms", submenu: ["Daisy", "Caterpilar", "Blossom", "Pine"] },
                                    { id: "4", value: "Contact Us" }
                                ],
                                on: {
                                    onMenuItemClick: function (id) {
                                        webix.message("Click: " + this.getMenuItem(id).value);
                                    }
                                },
                                type: {
                                    subsign: true, height: 50
                                }
                            },
                            // {id:"logo", template:"logo"},
                            { view: "button", type: "iconTop", icon: "mobile", label: "+628134567899", width: 100 },
                            { view: "button", type: "icon", icon: "facebook", width: 80 },
                            { view: "button", type: "icon", icon: "whatsapp", width: 80 },
                            { id: "facebook", view: "button", type: "icon", icon: "home", align: "left", width: 30, click: "$$('sideMenuList').toggle();" },
                            { id: "systemdate", view: "label", label: webix.Date.dateToStr("%D | %d %F %Y %H:%i:%s", false)(new Date()), align: "right" },
                        ]
                    },
                    {
                        cols: [
                            {},
                            {
                                id: "carousel", view: "carousel",
                                scrollSpeed: "800ms",
                                width: 1100, height: 840,
                                // align: "middle",  
                                cols: [
                                    { css: "image", template: img, data: { src: "images/lamreung1.jpg", title: "Image 1" } },
                                    { css: "image", template: img, data: { src: "images/lamreung2.jpg", title: "Image 2" } },
                                    { css: "image", template: img, data: { src: "images/lamreung3.jpg", title: "Image 3" } },
                                    { css: "image", template: img, data: { src: "images/lamreung4.jpg", title: "Image 4" } },
                                    { css: "image", template: img, data: { src: "images/lamreung5.jpg", title: "Image 5" } },
                                    { css: "image", template: img, data: { src: "images/lamreung6.jpg", title: "Image 6" } },
                                    { css: "image", template: img, data: { src: "images/lamreung7.jpg", title: "Image 7" } }
                                ],
                                navigation: {
                                    type: "side",
                                    items: false
                                }
                            },
                            {}
                        ]
                    },
                    {
                        id: "content", view: "text", value: "Our Rooms", height: 1000
                    },
                    {
                        id: "footer", view: "text", value: "footer", height: 400
                    }
                ]
            }
        };
        // set interval to update system time
        setInterval(function () {
            this.$$("systemdate").setValue(webix.Date.dateToStr("%D | %d %F %Y %H:%i:%s", false)(new Date()));
        }, 1000);
        function img(obj) {
            return '<img src="' + obj.src + '" class="content" ondragstart="return false"/>';
        }
        return ui;
    }
}
exports.default = ReportLayout;


/***/ }),

/***/ "./sources/views/sidebar.ts":
/*!**********************************!*\
  !*** ./sources/views/sidebar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const webix_jet_1 = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
class ReportTabView extends webix_jet_1.JetView {
    config() {
        console.log("here2");
        // getSideMenuList();
        const sidebar = {
            rows: [
                {
                    id: "reportmaintoolbar", view: "toolbar", responsive: "reportmaintoolbar", elements: [
                        { id: "reportmaintoolbarsidemenuicon", view: "button", type: "icon", icon: "bars", align: "left", width: 30, click: "$$('sideMenuList').toggle();" },
                        { id: "reportmaintoolbarsystemdate", view: "label", label: webix.Date.dateToStr("%D | %d %F %Y %H:%i:%s", false)(new Date()), align: "right" },
                    ]
                },
                {
                    id: "reportview",
                    cols: [
                        {
                            view: "sidebar",
                            id: "sideMenuList",
                            activeTitle: true,
                            select: true,
                            scroll: true,
                            collapsed: false,
                            multipleOpen: true,
                            collapsedWidth: 41,
                            item: { height: 80 },
                            mouseEventDelay: 10,
                            on: {
                                // there is a login page now, so, we will select report once the login is successfull
                                onAfterLoad: function () {
                                    const firstItemId = this.getFirstId();
                                    //     // alert(firstItemId);
                                    //     // webix.delay(function() {
                                    this.select(firstItemId);
                                    //     // // this.select("General Setting");
                                    //     // // this.select("1");
                                    //     // // this.select("Manage Custom Report");
                                    //     // // this.select("Manage Summary Report");
                                    //     // // this.select("Alarm History Journal");
                                    //     // // this.select("Email Setting");
                                    //     // // this.select("IO");
                                    //     // // this.select("Devices");
                                    //     // // this.select("Communication");
                                    //     // }, this);
                                },
                                onSelectChange: function (id) {
                                    if (this.getItem(id).filename) {
                                        this.$scope.app.show("/layout/" + this.getItem(id).filename);
                                    }
                                    else {
                                        webix.alert("No report is configured in " + this.getItem(id).value);
                                    }
                                }
                            },
                            data: [
                                { id: "home", value: "Home", icon: "plug", filename: "home" },
                                { id: "about-us", value: "About Cendana House", icon: "sitemap", filename: "about-us" },
                                { id: "gallery", value: "Gallery", icon: "microchip", filename: "gallery" },
                                { id: "contact-us", value: "About Us", icon: "bell", filename: "contact-us" }
                            ]
                        },
                        {
                            $subview: true
                        }
                    ]
                }
            ]
        };
        // set interval to update system time
        setInterval(function () {
            this.$$("reportmaintoolbarsystemdate").setValue(webix.Date.dateToStr("%D | %d %F %Y %H:%i:%s", false)(new Date()));
        }, 1000);
        return sidebar;
    }
}
exports.default = ReportTabView;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3d3ZWJyZXF1ZXN0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9jb250cm9sbGVyL2Nob21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZXMvY29udHJvbGxlci9yZXBvcnRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGVscGVycy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3M/ZDdjYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhEQUE4RCxlQUFlO0FBQzdFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxlQUFlO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFDQUFxQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCw4RUFBOEUsMkJBQTJCLGFBQWEsY0FBYyxJQUFJLEtBQUs7QUFDN0k7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHdDQUF3QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxrQ0FBa0MsS0FBSztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQVEsSUFBWSxNQUFNLENBQUM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwQkFBMEIsRUFBRTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxFQUFDO2dDQUN6RCxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBQztnQ0FDbkYsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFDO2dDQUN0RSxFQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxZQUFZLEVBQUM7NkJBQzNFO3lCQUNKO3dCQUNEOzRCQUNJLFFBQVEsRUFBRSxJQUFJO3lCQUNqQjtxQkFDSjtpQkFDSjthQUNKO1NBQ0osQ0FBQztRQUVOLHFDQUFxQztRQUNyQyxXQUFXLENBQUM7WUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUViLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQTNFRCxnQ0EyRUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9hcHAudHNcIik7XG4iLCJjbGFzcyBOYXZpZ2F0aW9uQmxvY2tlZCB7IH1cblxuY2xhc3MgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJpeCkge1xyXG4gICAgICAgIHRoaXMud2ViaXhKZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2ViaXggPSB3ZWJpeDtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jb250YWluZXIgPSB0aGlzLmFwcCA9IHRoaXMuX3BhcmVudCA9IHRoaXMuX3Jvb3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW0oaWQsIHZhbHVlLCB1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKGlkLCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWoobmV3IE5hdmlnYXRpb25CbG9ja2VkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmouY29uZmlybS5jYXRjaChlcnIgPT4gcmVqKGVycikpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaihuZXcgTmF2aWdhdGlvbkJsb2NrZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaihuZXcgTmF2aWdhdGlvbkJsb2NrZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpemUobikge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSBuO1xyXG4gICAgfVxyXG4gICAgc3BsaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCArIDEpLFxyXG4gICAgICAgICAgICBwYXRoOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocm91dGUudXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3V0ZS5wYXRoID0gdXJsMnN0cihyb3V0ZS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHJvdXRlLCAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyAoaW5kZXggfHwgMCldO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwucHVzaCh7IHBhZ2U6IFwiXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjaHVuay5wYWdlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaHVuay5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih0aGlzLnJvdXRlLnVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSmV0VmlldyBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAud2ViaXgpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIC8vdGhpcy4kY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICB1aSh1aSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgfHwgdWkuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGpldHZpZXcgPSB0aGlzLmFwcC5jcmVhdGVWaWV3KHVpKTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGpldHZpZXcpO1xyXG4gICAgICAgIGpldHZpZXcucmVuZGVyKGNvbnRhaW5lciwgdGhpcy5fc2VnbWVudCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSAhPT0gXCJvYmplY3RcIiB8fCAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICAvLyByYXcgd2ViaXggVUlcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldy5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgLy8gY29udmVydCBwYXJhbWV0ZXJzIG9iamVjdCB0byB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbShrZXksIHBhdGhba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxpZ2F0ZSB0byBhcHAgaW4gY2FzZSBvZiByb290IHByZWZpeFxyXG4gICAgICAgICAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2NhbCBwYXRoLCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCBwYXRoLCBjYWxsIHBhcmVudCB2aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2hvdyhwYXRoLnN1YnN0cigzKSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aC5zdWJzdHIoMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8oY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIucGFyZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Yi5wYXJlbnQuc2hvdyhwYXRoLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnLnRhcmdldCAmJiBjb25maWcudGFyZ2V0ICE9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGcmFtZUxvY2soY29uZmlnLnRhcmdldCwgc3ViLnN1YnZpZXcsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93KHRoaXMuX3NlZ21lbnQsIHBhdGgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX3Nob3coc2VnbWVudCwgcGF0aCwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnNob3cocGF0aCwgdmlldywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudC5yb3V0ZS5saW5rUm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5nZXRSb3V0ZXIoKS5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbc2VnbWVudC5yb3V0ZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoXyR2aWV3LCBfJCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIHJlYWR5KF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAud2ViaXgubWVzc2FnZShcIlZpZXc6Q29uZmlnIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxuICAgIHVybENoYW5nZShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgLy8gZGVzdHJveSBhY3R1YWwgVUlcclxuICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcy5hcHAsIHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5yZWZyZXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0aGlzLl9zZWdtZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/IHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDogcm9vdDtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBfY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHRoaXMuZ2V0Um9vdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGhlbihjZmcgPT4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNmZywgdXJsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKSB7XHJcbiAgICAgICAgLy8gZ2V0IHByZXZpb3VzIHZpZXcgaW4gdGhlIHNhbWUgc2xvdFxyXG4gICAgICAgIGxldCBzbG90ID0gbnVsbDtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHNsb3QucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMud2ViaXguJCQoc2xvdC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmlldyBhbHJlYWR5IGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICghdGhpcy5hcHAgfHwgIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgLy8gdXNpbmcgd3JhcHBlciBvYmplY3QsIHNvIHVpIGNhbiBiZSBjaGFuZ2VkIGZyb20gYXBwOnJlbmRlciBldmVudFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdWk6IHt9IH07XHJcbiAgICAgICAgdGhpcy5hcHAuY29weUNvbmZpZyhjb25maWcsIHJlc3VsdC51aSwgdGhpcy5fc3Vicyk7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJlbmRlclwiLCBbdGhpcywgdXJsLCByZXN1bHRdKTtcclxuICAgICAgICByZXN1bHQudWkuJHNjb3BlID0gdGhpcztcclxuICAgICAgICAvKiBkZXN0cm95IG9sZCBIVE1MIGF0dGFjaGVkIHZpZXdzIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lICovXHJcbiAgICAgICAgaWYgKCFzbG90ICYmIGN1cnJlbnQuaXNOZXcgJiYgY3VycmVudC52aWV3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFkZGluZyBpbnNpZGUgb2YgbXVsdGl2aWV3IC0gcHJlc2VydmUgb2xkIGlkXHJcbiAgICAgICAgICAgIGlmIChzbG90ICYmICFzaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGR1aSA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9sZHVpLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5hbWUgPT09IFwibXVsdGl2aWV3XCIgJiYgIXJlc3VsdC51aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51aS5pZCA9IG9sZHVpLmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5hcHAud2ViaXgudWkocmVzdWx0LnVpLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhc1dpbiA9IHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1cmwgYWRkZWQgdG8gaWdub3JlIHRoaXMudWkgY2FsbHNcclxuICAgICAgICAgICAgaWYgKHNob3cgJiYgYXNXaW4uc2V0UG9zaXRpb24gJiYgIWFzV2luLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1dpbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2ssIGlmIHdlIGFyZSByZXBsYWNpbmcgc29tZSBvbGRlciB2aWV3XHJcbiAgICAgICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC52aWV3ICYmIHNsb3QudmlldyAhPT0gdGhpcyAmJiBzbG90LnZpZXcgIT09IHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QuaWQgPSB0aGlzLl9yb290LmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudFZpZXcoKSB8fCAhdGhpcy5hcHAuYXBwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGhhdmUgc3ViYXBwLCBzZXQgd2hvbGUgYXBwIGFzIGEgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG9uIGRlc3RydWN0aW9uLCB0aGUgd2hvbGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcy5hcHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5faW5pdCh0aGlzLl9yb290LCB1cmwpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0VXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSh0aGlzLl9yb290LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY2F0Y2goZXJyID0+IHRoaXMuX2luaXRFcnJvcih0aGlzLCBlcnIpKTtcclxuICAgIH1cclxuICAgIF9pbml0KHZpZXcsIHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQodmlldywgdXJsLnN1YnVybCgpKTtcclxuICAgIH1cclxuICAgIF91cmxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnVybGNoYW5nZVwiLCBbdGhpcywgdGhpcy5fc2VnbWVudF0pO1xyXG4gICAgICAgIGNvbnN0IHdhaXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdCA9IHRoaXMuX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzLnB1c2god2FpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHdhaXRzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlKHRoaXMuX3Jvb3QsIHRoaXMuX3NlZ21lbnQuc3VidXJsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy8gaWYgc3VidmlldyBpcyBub3Qgb2NjdXBpZWQgYnkgc29tZSByZW5kZXJpbmcgeWV0XHJcbiAgICAgICAgaWYgKCFmcmFtZS5sb2NrKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHJlaXZlIGFuZCBzdG9yZSByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobG9jaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgbG9jayBhZnRlciBmcmFtZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIC8vIGFzIHByb21pc2UuZmluYWxseSBpcyBub3Qgc3VwcG9ydGVkIGJ5ICBXZWJpeCBsZXNzZXIgdGhhbiA2LjJcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGEgbW9yZSB2ZXJib3NlIG5vdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sb2NrID0gbG9jay50aGVuKCgpID0+IGZyYW1lLmxvY2sgPSBudWxsLCAoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiBmcmFtZS5sb2NrO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvL2RlZmF1bHQgcm91dGVcclxuICAgICAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VnbWVudC5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXh0IHNlZ21lbnQgaW4gdXJsLCByZW5kZXIgaXRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCB0aGlzLl9zZWdtZW50LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLnZpZXcgJiYgZnJhbWUucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG5leHQgc2VnbWVudCwgZGVsZXRlIHRoZSBleGlzdGluZyBzdWItdmlld1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5ldyBwYXRoIHByb3ZpZGVkLCBzZXQgaXQgdG8gdGhlIGZyYW1lXHJcbiAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnJhbWUudXJsID0gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiByb3V0ZWQgc3ViLXZpZXdcclxuICAgICAgICBpZiAoZnJhbWUucm91dGUpIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5ldyBwYXRoIGZvciBzdWItdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLnJvdXRlLnNob3cocGF0aCwgZnJhbWUudmlldykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBpc29sYXRlZCBzdWItdmlld3NcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmJyYW5jaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gZnJhbWUudmlldztcclxuICAgICAgICAvLyBpZiB2aWV3IGRvZXNuJ3QgZXhpc3RzIHlldCwgaW5pdCBpdFxyXG4gICAgICAgIGlmICghdmlldyAmJiBmcmFtZS51cmwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgc28gd2UgaGF2ZSBpc29sYXRlZCBzdWJ2aWV3IHVybFxyXG4gICAgICAgICAgICAgICAgZnJhbWUucm91dGUgPSBuZXcgUm91dGUoZnJhbWUudXJsLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QsIHNvIHdlIGhhdmUgYW4gZW1iZWRlZCBzdWJ2aWV3XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJmdW5jdGlvblwiICYmICEodmlldyBpbnN0YW5jZW9mIGZyYW1lLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gbmV3IGZyYW1lLnVybCh0aGlzLmFwcCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gZnJhbWUudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRyaWdnZXIgb25DaGFuZ2UgZm9yIGFscmVhZHkgZXhpc3RlZCB2aWV3XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGZyYW1lLCAoZnJhbWUucm91dGUgfHwgdGhpcy5fc2VnbWVudCksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pbml0RXJyb3IodmlldywgZXJyKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgdmlldyBpcyBkZXN0cm95ZWQsIGlnbm9yZSBhbnkgdmlldyByZWxhdGVkIGVycm9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmVycm9yKFwiYXBwOmVycm9yOmluaXR2aWV3XCIsIFtlcnIsIHZpZXddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3ViVmlldyhzdWIsIHN1YnVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5jcmVhdGVGcm9tVVJMKHN1YnVybC5jdXJyZW50KCkpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihzdWIsIHN1YnVybCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveUtpZHMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBjaGlsZCB2aWV3c1xyXG4gICAgICAgIGNvbnN0IHVpcyA9IHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB1aXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHVpc1tpXSAmJiB1aXNbaV0uZGVzdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdWlzW2ldLmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB2YXJzIGZvciBiZXR0ZXIgR0MgcHJvY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn1cblxuLy8gd3JhcHBlciBmb3IgcmF3IG9iamVjdHMgYW5kIEpldCAxLnggc3RydWN0c1xyXG5jbGFzcyBKZXRWaWV3UmF3IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl91aSA9IGNvbmZpZy51aTtcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3ViUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5hcHA7XHJcbiAgICAgICAgYS5hcHAuZ2V0Um91dGVyKCkuc2V0KGEuX3NlZ21lbnQuYXBwZW5kKHRoaXMucGF0aCksIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxubGV0IF9vbmNlID0gdHJ1ZTtcclxuY2xhc3MgSmV0QXBwQmFzZSBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViaXggPSAoY29uZmlnIHx8IHt9KS53ZWJpeCB8fCB3aW5kb3cud2ViaXg7XHJcbiAgICAgICAgc3VwZXIod2ViaXgpO1xyXG4gICAgICAgIC8vIGluaXQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndlYml4LmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIi9ob21lXCJcclxuICAgICAgICB9LCBjb25maWcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5jb25maWcuYXBwO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMsIHRoaXMud2ViaXguRXZlbnRTeXN0ZW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTZXJ2aWNlKG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IG9iaih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2UobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJWaWV3KCkuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIC8vIGNvcHkgb2JqZWN0IGFuZCBjb2xsZWN0IGV4dHJhIGhhbmRsZXJzXHJcbiAgICBjb3B5Q29uZmlnKG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICAvLyByYXcgdWkgY29uZmlnXHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEpldEJhc2UgfHxcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiBvYmoucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAkc3Vidmlldzogb2JqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnZpZXcgcGxhY2Vob2xkZXJcclxuICAgICAgICBpZiAodHlwZW9mIG9iai4kc3VidmlldyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByb2Nlc3Mgc3ViLXByb3BlcnRpZXNcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2QgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG9ialttZXRob2RdO1xyXG4gICAgICAgICAgICAvLyB2aWV3IGNsYXNzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBwb2ludC5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHsgJHN1YnZpZXc6IHBvaW50IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50ICYmIHR5cGVvZiBwb2ludCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgIShwb2ludCBpbnN0YW5jZW9mIHRoaXMud2ViaXguRGF0YUNvbGxlY3Rpb24pICYmICEocG9pbnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBuZXcgRGF0ZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb3B5Q29uZmlnKHBvaW50LCAocG9pbnQgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXRSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmlnZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LmFwcC50cmlnZ2VyKHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5zaG93KHJvdXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrSGFuZGxlcihlLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmspIHtcclxuICAgICAgICBsZXQgdmlldztcclxuICAgICAgICBpZiAoY2h1bmsuaXNOZXcgfHwgIWNodW5rLnZpZXcpIHtcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMubG9hZFZpZXcoY2h1bmsucGFnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHVpID0+IHRoaXMuY3JlYXRlVmlldyh1aSwgbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlldyA9IFByb21pc2UucmVzb2x2ZShjaHVuay52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVWaWV3KHVpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICBpZiAodHlwZW9mIHVpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEFwcEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHsgYXBwOiB0aGlzLCBuYW1lLCByb3V0ZXI6IFN1YlJvdXRlciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh0aGlzLCB7IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBmYWN0b3J5IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgICAgdWkgPSB1aSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVUkgb2JqZWN0XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBKZXRWaWV3UmF3KHRoaXMsIHsgbmFtZSwgdWkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93IHZpZXcgcGF0aFxyXG4gICAgc2hvdyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5fY29udGFpbmVyLCAodXJsIHx8IHRoaXMuY29uZmlnLnN0YXJ0KSk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudCBoZWxwZXJzXHJcbiAgICB0cmlnZ2VyKG5hbWUsIC4uLnJlc3QpIHtcclxuICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJpeC5iaW5kKGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbihuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudChuYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLCBudWxsLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobmFtZSwgZXIpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBlcik7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6ZXJyb3JcIiwgZXIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVyW2ldLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihcIk1vZHVsZSBidWlsZCBmYWlsZWRcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFx4MWJcXFtbMC05O10qbS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZSBzdHlsZT0nZm9udC1zaXplOjE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlYzY4NzM7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOjEwcHg7Jz4ke3RleHR9PC9wcmU+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCI8YnI+PGJyPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYml4Lm1lc3NhZ2UoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IHRleHQsIGV4cGlyZTogLTEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJzIHRvcCB2aWV3XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICAgICAgdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOlxyXG4gICAgICAgICAgICAocm9vdCB8fCBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhdGhpcy4kcm91dGVyO1xyXG4gICAgICAgIGxldCBwYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XHJcbiAgICAgICAgICAgIGlmIChfb25jZSAmJiBcInRhZ05hbWVcIiBpbiB0aGlzLl9jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguZXZlbnQoZG9jdW1lbnQuYm9keSwgXCJjbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aCB8fCB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSkpXHJcbiAgICAgICAgICAgIC50aGVuKHZpZXcgPT4gdmlldy5yZW5kZXIocm9vdCwgc2VnbWVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJhc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LnRoZW4oKCkgPT4gcmVhZHkpO1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuX3N1YlNlZ21lbnQuY3VycmVudCgpLnZpZXc7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSmV0Vmlldyh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBfZmlyc3Rfc3RhcnQocm91dGUpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgY2IgPSAoYSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhhKS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQmxvY2tlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gbmV3ICh0aGlzLmNvbmZpZy5yb3V0ZXIpKGNiLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgYW5pbWF0aW9uIGZvciB0b3AtbGV2ZWwgYXBwXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSAmJiB0aGlzLmNvbmZpZy5hbmltYXRpb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5yZW1vdmVDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwXCIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm8gdXJsIGRlZmluZWQsIGNoZWNrIHJvdXRlciBmaXJzdFxyXG4gICAgICAgICAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy4kcm91dGVyLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIXVybFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdXJsU3RyaW5nID0gdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHVybFN0cmluZywgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodXJsU3RyaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudCgpLnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAocm91dGUubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnNwbGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLmNvbmZpZy5zdGFydCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gZXJyb3IgZHVyaW5nIHZpZXcgcmVzb2x2aW5nXHJcbiAgICBfbG9hZEVycm9yKHVybCwgZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihcImFwcDplcnJvcjpyZXNvbHZlXCIsIFtlcnIsIHVybF0pO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlOiBcIiBcIiB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gb2JqLiRzdWJ2aWV3ICE9PSB0cnVlID8gb2JqLiRzdWJ2aWV3IDogbnVsbDtcclxuICAgICAgICBjb25zdCBuYW1lID0gb2JqLm5hbWUgfHwgKHVybCA/IHRoaXMud2ViaXgudWlkKCkgOiBcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGFyZ2V0LmlkID0gb2JqLmlkIHx8IFwic1wiICsgdGhpcy53ZWJpeC51aWQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29uZmlnW25hbWVdID0ge1xyXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGJyYW5jaDogb2JqLmJyYW5jaCxcclxuICAgICAgICAgICAgcG9wdXA6IG9iai5wb3B1cFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucG9wdXAgPyBudWxsIDogdGFyZ2V0O1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEhhc2hSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2RldGVjdFByZWZpeCgpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMuY2IodGhpcy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlc1trZXldID09PSBjb21wYXJlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXQoKSAhPT0gcGF0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5wcmVmaXggKyB0aGlzLnN1Zml4ICsgcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5fZ2V0UmF3KCkucmVwbGFjZSh0aGlzLnByZWZpeCwgXCJcIikucmVwbGFjZSh0aGlzLnN1Zml4LCBcIlwiKTtcclxuICAgICAgICBwYXRoID0gKHBhdGggIT09IFwiL1wiICYmIHBhdGggIT09IFwiI1wiKSA/IHBhdGggOiBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5yb3V0ZXNbY29tcGFyZVswXV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIC8vIHVzZSBcIiMhXCIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBjb25zdCBzdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeDtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gXCIjXCIgKyAoKHR5cGVvZiBzdWZpeCA9PT0gXCJ1bmRlZmluZWRcIikgPyBcIiFcIiA6IHN1Zml4KTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIsIDIpWzBdO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxuXG5sZXQgaXNQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoKHcpIHtcclxuICAgIGlmIChpc1BhdGNoZWQgfHwgIXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpc1BhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gY3VzdG9tIHByb21pc2UgZm9yIElFOFxyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgaWYgKCF3aW4uUHJvbWlzZSkge1xyXG4gICAgICAgIHdpbi5Qcm9taXNlID0gdy5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyc2lvbiA9IHcudmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAvLyB3aWxsIGJlIGZpeGVkIGluIHdlYml4IDUuM1xyXG4gICAgaWYgKHZlcnNpb25bMF0gKiAxMCArIHZlcnNpb25bMV0gKiAxIDwgNTMpIHtcclxuICAgICAgICB3LnVpLmZyZWV6ZSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJlY2F1c2Ugd2ViaXggamV0IDUuMCBjYW4ndCBoYW5kbGUgcmVzaXplIG9mIHNjcm9sbHZpZXcgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIHcudWkuJGZyZWV6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKHNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gYWRkaW5nIHZpZXdzIGFzIGNsYXNzZXNcclxuICAgIGNvbnN0IGJhc2VBZGQgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLmFkZFZpZXc7XHJcbiAgICBjb25zdCBiYXNlUmVtb3ZlID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5yZW1vdmVWaWV3O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGFkZFZpZXcodmlldywgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBsb2dpYyBvbmx5IGZvciB3aWRnZXRzIGluc2lkZSBvZiBqZXQtdmlld1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZSB3aGVuIGFkZFZpZXcgdXNlZCB3aXRoIGFscmVhZHkgaW5pdGlhbGl6ZWQgd2lkZ2V0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCAmJiAhdmlldy5xdWVyeVZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGp2aWV3ID0gdGhpcy4kc2NvcGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0ganZpZXcuYXBwLmNvcHlDb25maWcodmlldywge30sIHN1YnMpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFkZC5hcHBseSh0aGlzLCBbdmlldywgaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdmlldy5fcmVuZGVyRnJhbWUoa2V5LCBzdWJzW2tleV0sIG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdmlldy5fc3Vic1trZXldID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZUFkZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWV3KCkge1xyXG4gICAgICAgICAgICBiYXNlUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHRoaXMuJHNjb3BlLl9zdWJzO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWxsIHN1Yi12aWV3cywgZGVzdHJveSBhbmQgY2xlYW4gdGhlIHJlbW92ZWQgb25lXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXcuJCQodGVzdC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdy5leHRlbmQody51aS5sYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgdy5leHRlbmQody51aS5iYXNlbGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIC8vIHdyYXBwZXIgZm9yIHVzaW5nIEpldCBBcHBzIGFzIHZpZXdzXHJcbiAgICB3LnByb3RvVUkoe1xyXG4gICAgICAgIG5hbWU6IFwiamV0YXBwXCIsXHJcbiAgICAgICAgJGluaXQoY2ZnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcCA9IG5ldyB0aGlzLmFwcChjZmcpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHcudWlkKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2ZnLmJvZHkgPSB7IGlkIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlYWR5LnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnJlbmRlcih7IGlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGFwcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuJGFwcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3JpZ2luLmJpbmQodGhpcy4kYXBwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcudWkucHJveHkpO1xyXG59XG5cbmNsYXNzIEpldEFwcCBleHRlbmRzIEpldEFwcEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLnJvdXRlciA9IGNvbmZpZy5yb3V0ZXIgfHwgSGFzaFJvdXRlcjtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHBhdGNoKHRoaXMud2ViaXgpO1xyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShcImpldC12aWV3cy9cIiArIHVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3RvcmVSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gY29uZmlnLnN0b3JhZ2UgfHwgYXBwLndlYml4LnN0b3JhZ2Uuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLm5hbWUgPSAoY29uZmlnLnN0b3JlTmFtZSB8fCBjb25maWcuaWQgKyBcIjpyb3V0ZVwiKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnB1dCh0aGlzLm5hbWUsIHBhdGgpO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgVXJsUm91dGVyIGV4dGVuZHMgSGFzaFJvdXRlciB7XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4IHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSArIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggfHwgXCJcIik7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgRW1wdHlSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIF8kY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFVubG9hZEd1YXJkKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpndWFyZGAsIGZ1bmN0aW9uIChfJHVybCwgcG9pbnQsIHByb21pc2UpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHZpZXcgfHwgcG9pbnQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gY29uZmlnKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBQcm9taXNlLnJlamVjdChuZXcgTmF2aWdhdGlvbkJsb2NrZWQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBwcm9taXNlLmNvbmZpcm0udGhlbigoKSA9PiByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuLy8gICAgIChjKSAyMDEyLTIwMTggQWlyYm5iLCBJbmMuXG5cbi8vIHZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbmZ1bmN0aW9uIGhhcyhzdG9yZSwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RvcmUsIGtleSk7XG59XG4vLyB2YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaGFuZGxlciwgY29udGV4dCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcyhvYmosIGtleSkpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCgoY29udGV4dCB8fCBvYmopLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuLy8gdmFyIHRyaW0gPSByZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnRyaW0nKTtcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn1cbi8vIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIG1lc3NhZ2U7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyB9IGNhdGNoICh4KSB7fVxufVxuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG5cbi8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4vLyBUaGUgc3RyaW5nIHRoYXQgc2VwYXJhdGVzIHRoZSBkaWZmZXJlbnQgcGhyYXNlIHBvc3NpYmlsaXRpZXMuXG52YXIgZGVsaW1pdGVyID0gJ3x8fHwnO1xuXG52YXIgcnVzc2lhblBsdXJhbEdyb3VwcyA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBlbmQgPSBuICUgMTA7XG4gIGlmIChuICE9PSAxMSAmJiBlbmQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgIShuID49IDEyICYmIG4gPD0gMTQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDI7XG59O1xuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG52YXIgcGx1cmFsVHlwZXMgPSB7XG4gIGFyYWJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBodHRwOi8vd3d3LmFyYWJleWVzLm9yZy9QbHVyYWxfRm9ybXNcbiAgICBpZiAobiA8IDMpIHsgcmV0dXJuIG47IH1cbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPj0gMyAmJiBsYXN0VHdvIDw9IDEwKSByZXR1cm4gMztcbiAgICByZXR1cm4gbGFzdFR3byA+PSAxMSA/IDQgOiA1O1xuICB9LFxuICBib3NuaWFuX3NlcmJpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGNoaW5lc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gIGNyb2F0aWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBmcmVuY2g6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICBnZXJtYW46IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gIHJ1c3NpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGxpdGh1YW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gJSAxMCA9PT0gMSAmJiBuICUgMTAwICE9PSAxMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gOSAmJiAobiAlIDEwMCA8IDExIHx8IG4gJSAxMDAgPiAxOSkgPyAxIDogMjtcbiAgfSxcbiAgY3plY2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDI7XG4gIH0sXG4gIHBvbGlzaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHZhciBlbmQgPSBuICUgMTA7XG4gICAgcmV0dXJuIDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgfSxcbiAgaWNlbGFuZGljOiBmdW5jdGlvbiAobikgeyByZXR1cm4gKG4gJSAxMCAhPT0gMSB8fCBuICUgMTAwID09PSAxMSkgPyAxIDogMDsgfSxcbiAgc2xvdmVuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA9PT0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDMgfHwgbGFzdFR3byA9PT0gNCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAzO1xuICB9XG59O1xuXG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbGFuZ3VhZ2UgY29kZXMvbG9jYWxlcy5cbi8vIFdpbGwgbG9vayB1cCBiYXNlZCBvbiBleGFjdCBtYXRjaCwgaWYgbm90IGZvdW5kIGFuZCBpdCdzIGEgbG9jYWxlIHdpbGwgcGFyc2UgdGhlIGxvY2FsZVxuLy8gZm9yIGxhbmd1YWdlIGNvZGUsIGFuZCBpZiB0aGF0IGRvZXMgbm90IGV4aXN0IHdpbGwgZGVmYXVsdCB0byAnZW4nXG52YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICBhcmFiaWM6IFsnYXInXSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBbJ2JzLUxhdG4tQkEnLCAnYnMtQ3lybC1CQScsICdzcmwtUlMnLCAnc3ItUlMnXSxcbiAgY2hpbmVzZTogWydpZCcsICdpZC1JRCcsICdqYScsICdrbycsICdrby1LUicsICdsbycsICdtcycsICd0aCcsICd0aC1USCcsICd6aCddLFxuICBjcm9hdGlhbjogWydocicsICdoci1IUiddLFxuICBnZXJtYW46IFsnZmEnLCAnZGEnLCAnZGUnLCAnZW4nLCAnZXMnLCAnZmknLCAnZWwnLCAnaGUnLCAnaGktSU4nLCAnaHUnLCAnaHUtSFUnLCAnaXQnLCAnbmwnLCAnbm8nLCAncHQnLCAnc3YnLCAndHInXSxcbiAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gIHJ1c3NpYW46IFsncnUnLCAncnUtUlUnXSxcbiAgbGl0aHVhbmlhbjogWydsdCddLFxuICBjemVjaDogWydjcycsICdjcy1DWicsICdzayddLFxuICBwb2xpc2g6IFsncGwnXSxcbiAgaWNlbGFuZGljOiBbJ2lzJ10sXG4gIHNsb3ZlbmlhbjogWydzbC1TTCddXG59O1xuXG5mdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3JFYWNoKG1hcHBpbmcsIGZ1bmN0aW9uIChsYW5ncywgdHlwZSkge1xuICAgIGZvckVhY2gobGFuZ3MsIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICByZXRbbGFuZ10gPSB0eXBlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gIHZhciBsYW5nVG9QbHVyYWxUeXBlID0gbGFuZ1RvVHlwZU1hcChwbHVyYWxUeXBlVG9MYW5ndWFnZXMpO1xuICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZVtzcGxpdC5jYWxsKGxvY2FsZSwgLy0vLCAxKVswXV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cykge1xuICB2YXIgcHJlZml4ID0gKG9wdHMgJiYgb3B0cy5wcmVmaXgpIHx8ICcleyc7XG4gIHZhciBzdWZmaXggPSAob3B0cyAmJiBvcHRzLnN1ZmZpeCkgfHwgJ30nO1xuXG4gIGlmIChwcmVmaXggPT09IGRlbGltaXRlciB8fCBzdWZmaXggPT09IGRlbGltaXRlcikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIicgKyBkZWxpbWl0ZXIgKyAnXCIgdG9rZW4gaXMgcmVzZXJ2ZWQgZm9yIHBsdXJhbGl6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGVzY2FwZShwcmVmaXgpICsgJyguKj8pJyArIGVzY2FwZShzdWZmaXgpLCAnZycpO1xufVxuXG52YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG52YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJztcbnZhciBkZWZhdWx0VG9rZW5SZWdleCA9IC8lXFx7KC4qPylcXH0vZztcblxuLy8gIyMjIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSlcbi8vXG4vLyBUYWtlcyBhIHBocmFzZSBzdHJpbmcgYW5kIHRyYW5zZm9ybXMgaXQgYnkgY2hvb3NpbmcgdGhlIGNvcnJlY3Rcbi8vIHBsdXJhbCBmb3JtIGFuZCBpbnRlcnBvbGF0aW5nIGl0LlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJ0hlbGxvLCAle25hbWV9IScsIHtuYW1lOiAnU3Bpa2UnfSk7XG4vLyAgICAgLy8gXCJIZWxsbywgU3Bpa2UhXCJcbi8vXG4vLyBUaGUgY29ycmVjdCBwbHVyYWwgZm9ybSBpcyBzZWxlY3RlZCBpZiBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50XG4vLyBpcyBzZXQuIFlvdSBjYW4gcGFzcyBpbiBhIG51bWJlciBpbnN0ZWFkIG9mIGFuIE9iamVjdCBhcyBgc3Vic3RpdHV0aW9uc2Bcbi8vIGFzIGEgc2hvcnRjdXQgZm9yIGBzbWFydF9jb3VudGAuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMX0sICdlbicpO1xuLy8gICAgIC8vIFwiMSBuZXcgbWVzc2FnZVwiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMn0sICdlbicpO1xuLy8gICAgIC8vIFwiMiBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCA1LCAnZW4nKTtcbi8vICAgICAvLyBcIjUgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyBZb3Ugc2hvdWxkIHBhc3MgaW4gYSB0aGlyZCBhcmd1bWVudCwgdGhlIGxvY2FsZSwgdG8gc3BlY2lmeSB0aGUgY29ycmVjdCBwbHVyYWwgdHlwZS5cbi8vIEl0IGRlZmF1bHRzIHRvIGAnZW4nYCB3aXRoIDIgcGx1cmFsIGZvcm1zLlxuZnVuY3Rpb24gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlLCB0b2tlblJlZ2V4KSB7XG4gIGlmICh0eXBlb2YgcGhyYXNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BvbHlnbG90LnRyYW5zZm9ybVBocmFzZSBleHBlY3RzIGFyZ3VtZW50ICMxIHRvIGJlIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gcGhyYXNlO1xuICB2YXIgaW50ZXJwb2xhdGlvblJlZ2V4ID0gdG9rZW5SZWdleCB8fCBkZWZhdWx0VG9rZW5SZWdleDtcblxuICAvLyBhbGxvdyBudW1iZXIgYXMgYSBwbHVyYWxpemF0aW9uIHNob3J0Y3V0XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHN1YnN0aXR1dGlvbnMgPT09ICdudW1iZXInID8geyBzbWFydF9jb3VudDogc3Vic3RpdHV0aW9ucyB9IDogc3Vic3RpdHV0aW9ucztcblxuICAvLyBTZWxlY3QgcGx1cmFsIGZvcm06IGJhc2VkIG9uIGEgcGhyYXNlIHRleHQgdGhhdCBjb250YWlucyBgbmBcbiAgLy8gcGx1cmFsIGZvcm1zIHNlcGFyYXRlZCBieSBgZGVsaW1pdGVyYCwgYSBgbG9jYWxlYCwgYW5kIGEgYHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRgLFxuICAvLyBjaG9vc2UgdGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0uIFRoaXMgaXMgb25seSBkb25lIGlmIGBjb3VudGAgaXMgc2V0LlxuICBpZiAob3B0aW9ucy5zbWFydF9jb3VudCAhPSBudWxsICYmIHJlc3VsdCkge1xuICAgIHZhciB0ZXh0cyA9IHNwbGl0LmNhbGwocmVzdWx0LCBkZWxpbWl0ZXIpO1xuICAgIHJlc3VsdCA9IHRyaW0odGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSB8fCAnZW4nLCBvcHRpb25zLnNtYXJ0X2NvdW50KV0gfHwgdGV4dHNbMF0pO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGU6IENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2ggaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgcmVzdWx0ID0gcmVwbGFjZS5jYWxsKHJlc3VsdCwgaW50ZXJwb2xhdGlvblJlZ2V4LCBmdW5jdGlvbiAoZXhwcmVzc2lvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAoIWhhcyhvcHRpb25zLCBhcmd1bWVudCkgfHwgb3B0aW9uc1thcmd1bWVudF0gPT0gbnVsbCkgeyByZXR1cm4gZXhwcmVzc2lvbjsgfVxuICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLlxuICAgIHJldHVybiByZXBsYWNlLmNhbGwob3B0aW9uc1thcmd1bWVudF0sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgdGhpcy5leHRlbmQob3B0cy5waHJhc2VzIHx8IHt9KTtcbiAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcbiAgdmFyIGFsbG93TWlzc2luZyA9IG9wdHMuYWxsb3dNaXNzaW5nID8gdHJhbnNmb3JtUGhyYXNlIDogbnVsbDtcbiAgdGhpcy5vbk1pc3NpbmdLZXkgPSB0eXBlb2Ygb3B0cy5vbk1pc3NpbmdLZXkgPT09ICdmdW5jdGlvbicgPyBvcHRzLm9uTWlzc2luZ0tleSA6IGFsbG93TWlzc2luZztcbiAgdGhpcy53YXJuID0gb3B0cy53YXJuIHx8IHdhcm47XG4gIHRoaXMudG9rZW5SZWdleCA9IGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cy5pbnRlcnBvbGF0aW9uKTtcbn1cblxuLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbi8vXG4vLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cblBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHRoaXMuY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5leHRlbmQocGhyYXNlcylcbi8vXG4vLyBVc2UgYGV4dGVuZGAgdG8gdGVsbCBQb2x5Z2xvdCBob3cgdG8gdHJhbnNsYXRlIGEgZ2l2ZW4ga2V5LlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIGtleSBjYW4gYmUgYW55IHN0cmluZy4gIEZlZWwgZnJlZSB0byBjYWxsIGBleHRlbmRgIG11bHRpcGxlIHRpbWVzO1xuLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbi8vIHVudG91Y2hlZC5cbi8vXG4vLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4vLyBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZSBuZXN0ZWQga2V5cyBjb25jYXRlbmF0ZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJuYXZcIjoge1xuLy8gICAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbi8vICAgICAgICAgXCJzaWRlYmFyXCI6IHtcbi8vICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lXCJcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfScsXG4vLyAgICAgLy8gICAnbmF2LnNpZGViYXIud2VsY29tZSc6ICdXZWxjb21lJ1xuLy8gICAgIC8vIH1cbi8vXG4vLyBgZXh0ZW5kYCBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCwgYHByZWZpeGAsIHdoaWNoIGNhbiBiZSB1c2VkXG4vLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3Rcbi8vIG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSwgXCJuYXZcIik7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9J1xuLy8gICAgIC8vIH1cbi8vXG4vLyBUaGlzIGZlYXR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cHBvcnQgbmVzdGVkIHBocmFzZSBvYmplY3RzLlxuUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldID0gcGhyYXNlO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbi8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbi8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4vLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuUG9seWdsb3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkZWxldGUgdGhpcy5waHJhc2VzW21vcmVQaHJhc2VzXTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnVuc2V0KHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4vL1xuLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbi8vIHBlcmZvcm0gYW55IHRyYW5zbGF0aW9uLiBBbHNvIHVzZWQgaW50ZXJuYWxseSBieSBgcmVwbGFjZWAuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbi8vXG4vLyBDb21wbGV0ZWx5IHJlcGxhY2UgdGhlIGV4aXN0aW5nIHBocmFzZXMgd2l0aCBhIG5ldyBzZXQgb2YgcGhyYXNlcy5cbi8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuLy8gY2lyY3Vtc3RhbmNlcywgeW91IG1heSB3YW50IHRvIG1ha2Ugc3VyZSBubyBvbGQgcGhyYXNlcyBhcmUgbHlpbmcgYXJvdW5kLlxuUG9seWdsb3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3UGhyYXNlcykge1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMuZXh0ZW5kKG5ld1BocmFzZXMpO1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QudChrZXksIG9wdGlvbnMpXG4vL1xuLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4vLyBwaHJhc2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbi8vICAgICA9PiBcIkhlbGxvXCJcbi8vXG4vLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4vLyBgcG9seWdsb3QucmVwbGFjZSgpYC5cbi8vXG4vLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbi8vXG4vLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbi8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbi8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuLy8gICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiXG4vLyAgICAgfSk7XG4vLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuLy9cblBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICB2YXIgcGhyYXNlLCByZXN1bHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLl8gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gb3B0cy5fO1xuICB9IGVsc2UgaWYgKHRoaXMub25NaXNzaW5nS2V5KSB7XG4gICAgdmFyIG9uTWlzc2luZ0tleSA9IHRoaXMub25NaXNzaW5nS2V5O1xuICAgIHJlc3VsdCA9IG9uTWlzc2luZ0tleShrZXksIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gZm9yIGtleTogXCInICsga2V5ICsgJ1wiJyk7XG4gICAgcmVzdWx0ID0ga2V5O1xuICB9XG4gIGlmICh0eXBlb2YgcGhyYXNlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbi8vXG4vLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG5Qb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKHRoaXMucGhyYXNlcywga2V5KTtcbn07XG5cbi8vIGV4cG9ydCB0cmFuc2Zvcm1QaHJhc2VcblBvbHlnbG90LnRyYW5zZm9ybVBocmFzZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSkge1xuICByZXR1cm4gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKTtcbn07XG5cbnZhciB3ZWJpeFBvbHlnbG90ID0gUG9seWdsb3Q7XG5cbmZ1bmN0aW9uIExvY2FsZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCBsYW5nID0gc3RvcmFnZSA/IChzdG9yYWdlLmdldChcImxhbmdcIikgfHwgXCJlblwiKSA6IChjb25maWcubGFuZyB8fCBcImVuXCIpO1xyXG4gICAgZnVuY3Rpb24gc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuX19lc01vZHVsZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwY29uZmlnID0geyBwaHJhc2VzOiBkYXRhIH07XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wb2x5Z2xvdCkge1xyXG4gICAgICAgICAgICBhcHAud2ViaXguZXh0ZW5kKHBjb25maWcsIGNvbmZpZy5wb2x5Z2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBzZXJ2aWNlLnBvbHlnbG90ID0gbmV3IHdlYml4UG9seWdsb3QocGNvbmZpZyk7XHJcbiAgICAgICAgcG9seS5sb2NhbGUobmFtZSk7XHJcbiAgICAgICAgc2VydmljZS5fID0gYXBwLndlYml4LmJpbmQocG9seS50LCBwb2x5KTtcclxuICAgICAgICBsYW5nID0gbmFtZTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnB1dChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcud2ViaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jTmFtZSA9IGNvbmZpZy53ZWJpeFtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGxvY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC53ZWJpeC5pMThuLnNldExvY2FsZShsb2NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TGFuZygpIHsgcmV0dXJuIGxhbmc7IH1cclxuICAgIGZ1bmN0aW9uIHNldExhbmcobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHNldExhbmcgaWYgbG9hZGluZyBieSBwYXRoIGlzIGRpc2FibGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAoY29uZmlnLnBhdGggPyBjb25maWcucGF0aCArIFwiL1wiIDogXCJcIikgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiamV0LWxvY2FsZXMvXCIgKyBwYXRoKTtcclxuICAgICAgICBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRMYW5nLCBzZXRMYW5nLCBzZXRMYW5nRGF0YSwgXzogbnVsbCwgcG9seWdsb3Q6IG51bGxcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcImxvY2FsZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNldExhbmcobGFuZywgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gc2hvdyh2aWV3LCBjb25maWcsIHZhbHVlKSB7XHJcbiAgICBpZiAoY29uZmlnLnVybHMpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvbmZpZy51cmxzW3ZhbHVlXSB8fCB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgIHZhbHVlID0geyBbY29uZmlnLnBhcmFtXTogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIHZpZXcuc2hvdyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gTWVudShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3QgZnJhbWUgPSB2aWV3LmdldFN1YlZpZXdJbmZvKCkucGFyZW50O1xyXG4gICAgY29uc3QgdWkgPSB2aWV3LiQkKGNvbmZpZy5pZCB8fCBjb25maWcpO1xyXG4gICAgbGV0IHNpbGVudCA9IGZhbHNlO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCB0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmFmdGVyc2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLmdldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdWkuZ2V0U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6cm91dGVgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICAgICAgbmFtZSA9IHZpZXcuZ2V0UGFyYW0oY29uZmlnLnBhcmFtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmcmFtZS5nZXRVcmwoKVsxXTtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzZWdtZW50LnBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgc2lsZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlICYmIHVpLmdldFZhbHVlKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnNlbGVjdCAmJiB1aS5leGlzdHMobmFtZSkgJiYgdWkuZ2V0U2VsZWN0ZWRJZCgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lsZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuY29uc3QgYmFzZWljb25zID0ge1xyXG4gICAgZ29vZDogXCJjaGVja1wiLFxyXG4gICAgZXJyb3I6IFwid2FybmluZ1wiLFxyXG4gICAgc2F2aW5nOiBcInJlZnJlc2ggZmEtc3BpblwiXHJcbn07XHJcbmNvbnN0IGJhc2V0ZXh0ID0ge1xyXG4gICAgZ29vZDogXCJPa1wiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIixcclxuICAgIHNhdmluZzogXCJDb25uZWN0aW5nLi4uXCJcclxufTtcclxuZnVuY3Rpb24gU3RhdHVzKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJnb29kXCI7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGlzZXJyb3IgPSBmYWxzZTtcclxuICAgIGxldCBleHBpcmVEZWxheSA9IGNvbmZpZy5leHBpcmU7XHJcbiAgICBpZiAoIWV4cGlyZURlbGF5ICYmIGV4cGlyZURlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGV4cGlyZURlbGF5ID0gMjAwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRzID0gY29uZmlnLnRleHRzIHx8IGJhc2V0ZXh0O1xyXG4gICAgY29uc3QgaWNvbnMgPSBjb25maWcuaWNvbnMgfHwgYmFzZWljb25zO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25maWcgPSB7IHRhcmdldDogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gdmlldy4kJChjb25maWcudGFyZ2V0KTtcclxuICAgICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PHNwYW4gY2xhc3M9J3dlYml4X2ljb24gZmEtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zW3N0YXR1c10gKyBcIic+PC9zcGFuPiBcIiArIHRleHRzW3N0YXR1c10gKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZWEuc2V0SFRNTChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZ29vZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnQocHJvbWlzZSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgc2V0U3RhdHVzKFwic2F2aW5nXCIpO1xyXG4gICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oc3VjY2VzcywgZmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZWZyZXNoKFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobW9kZSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInNhdmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFwic2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzZXJyb3IgPSAobW9kZSA9PT0gXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc2Vycm9yID8gXCJlcnJvclwiIDogXCJnb29kXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5lcnJvcihcImFwcDplcnJvcjpzZXJ2ZXJcIiwgW2Vyci5yZXNwb25zZVRleHQgfHwgZXJyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlU3RhdHVzLCBleHBpcmVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhY2soZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRwID0gYXBwLndlYml4LmRwKGRhdGEpO1xyXG4gICAgICAgIGlmIChkcCkge1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJEYXRhU2VuZFwiLCBzdGFydCk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVFcnJvclwiLCAoX2lkLCBfb2JqLCByZXNwb25zZSkgPT4gZmFpbChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlXCIsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdHVzXCIsIHtcclxuICAgICAgICBnZXRTdGF0dXMsXHJcbiAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIHRyYWNrXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcucmVtb3RlKSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25SZW1vdGVDYWxsXCIsIHN0YXJ0KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuYWpheCkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uQmVmb3JlQWpheFwiLCAoX21vZGUsIF91cmwsIF9kYXRhLCBfcmVxdWVzdCwgX2hlYWRlcnMsIF9maWxlcywgcHJvbWlzZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZGF0YSkge1xyXG4gICAgICAgIHRyYWNrKGNvbmZpZy5kYXRhKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBUaGVtZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCB0aGVtZSA9IHN0b3JhZ2UgP1xyXG4gICAgICAgIChzdG9yYWdlLmdldChcInRoZW1lXCIpIHx8IFwiZmxhdC1kZWZhdWx0XCIpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAoY29uZmlnLnRoZW1lIHx8IFwiZmxhdC1kZWZhdWx0XCIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRUaGVtZSgpIHsgcmV0dXJuIHRoZW1lOyB9LFxyXG4gICAgICAgIHNldFRoZW1lKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5hbWUgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZSA9PT0gbmFtZSB8fCBsbmFtZSA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLndlYml4LnNraW4uc2V0KHBhcnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwucmVtb3ZlQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyB0aGVtZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLmFkZENzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoZW1lID0gbmFtZTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwidGhlbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ0aGVtZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNlcnZpY2Uuc2V0VGhlbWUodGhlbWUsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIGNvcHlQYXJhbXMoZGF0YSwgdXJsLCByb3V0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFbcm91dGVbaV1dID0gdXJsW2kgKyAxXSA/IHVybFtpICsgMV0ucGFnZSA6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVXJsUGFyYW0oYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlIHx8IGNvbmZpZztcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHZpZXcub24oYXBwLCBcImFwcDp1cmxjaGFuZ2VcIiwgZnVuY3Rpb24gKHN1YnZpZXcsIHNlZ21lbnQpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gc3Vidmlldykge1xyXG4gICAgICAgICAgICBjb3B5UGFyYW1zKGRhdGEsIHNlZ21lbnQuc3VidXJsKCksIHJvdXRlKTtcclxuICAgICAgICAgICAgc2VnbWVudC5zaXplKHJvdXRlLmxlbmd0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3MgPSB2aWV3LnNldFBhcmFtO1xyXG4gICAgY29uc3Qgb2cgPSB2aWV3LmdldFBhcmFtO1xyXG4gICAgdmlldy5zZXRQYXJhbSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgc2hvdykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm91dGUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKFwiXCIsIHZhbHVlLCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9zLmNhbGwodGhpcywgbmFtZSwgdmFsdWUsIHNob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2aWV3LmdldFBhcmFtID0gZnVuY3Rpb24gKGtleSwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2cuY2FsbCh0aGlzLCBrZXksIG1vZGUpO1xyXG4gICAgfTtcclxuICAgIGNvcHlQYXJhbXMoZGF0YSwgdmlldy5nZXRVcmwoKSwgcm91dGUpO1xyXG59XG5cbmZ1bmN0aW9uIFVzZXIoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBsb2dpbiA9IGNvbmZpZy5sb2dpbiB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgbG9nb3V0ID0gY29uZmlnLmxvZ291dCB8fCBcIi9sb2dvdXRcIjtcclxuICAgIGNvbnN0IGFmdGVyTG9naW4gPSBjb25maWcuYWZ0ZXJMb2dpbiB8fCBhcHAuY29uZmlnLnN0YXJ0O1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dvdXQgPSBjb25maWcuYWZ0ZXJMb2dvdXQgfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IHBpbmcgPSBjb25maWcucGluZyB8fCA1ICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb25maWcubW9kZWw7XHJcbiAgICBsZXQgdXNlciA9IGNvbmZpZy51c2VyO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXR1cyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zdGF0dXMoKS5jYXRjaCgoKSA9PiBudWxsKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW4obmFtZSwgcGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9naW4obmFtZSwgcGFzcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dpblwiLCBbdXNlcl0pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNob3coYWZ0ZXJMb2dpbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dvdXRcIiwgW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGNhbk5hdmlnYXRlKHVybCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gbG9nb3V0KSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1cmwgIT09IGxvZ2luICYmICFzZXJ2aWNlLmdldFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidXNlclwiLCBzZXJ2aWNlKTtcclxuICAgIGFwcC5hdHRhY2hFdmVudChgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKHVybCwgXyRyb290LCBvYmopIHtcclxuICAgICAgICBpZiAoY29uZmlnLnB1YmxpYyAmJiBjb25maWcucHVibGljKHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmouY29uZmlybSA9IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLnRoZW4oKCkgPT4gY2FuTmF2aWdhdGUodXJsLCBvYmopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbk5hdmlnYXRlKHVybCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBpbmcpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKSwgcGluZyk7XHJcbiAgICB9XHJcbn1cblxuLypcclxuTUlUIExpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE5IFhCIFNvZnR3YXJlXHJcbiovXHJcbmxldCB3ZWJpeCA9IHdpbmRvdy53ZWJpeDtcclxuaWYgKHdlYml4KSB7XHJcbiAgICBwYXRjaCh3ZWJpeCk7XHJcbn1cclxuY29uc3QgcGx1Z2lucyA9IHtcclxuICAgIFVubG9hZEd1YXJkLCBMb2NhbGUsIE1lbnUsIFRoZW1lLCBVc2VyLCBTdGF0dXMsIFVybFBhcmFtXHJcbn07XHJcbmNvbnN0IGVycm9ycyA9IHsgTmF2aWdhdGlvbkJsb2NrZWQgfTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBlcnJvcnMsIEpldEFwcCwgSmV0VmlldywgSGFzaFJvdXRlciwgU3RvcmVSb3V0ZXIsIFVybFJvdXRlciwgRW1wdHlSb3V0ZXIsIFN1YlJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amV0LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBXUmVxdWVzdCB7XG4gICAgLy8gYnkgZGVmYXVsdCwgcmVxdWVzdCBpcyB3aXRob3V0IHByb21pc2VcbiAgICBzZW5kKHJlcSwgYWN0aW9uLCBob3N0bmFtZSwgd2Vic2VydmVycG9ydCkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL1wiICsgaG9zdG5hbWUgKyBcIjpcIiArIHdlYnNlcnZlcnBvcnQgKyBcIi91dGlsaXR5L1wiICsgYWN0aW9uOyAvLyBmb3IgZGV2ZWxvcG1lbnRcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICBsZXQganNvbmRhdGEgPSBbXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlYWR5U3RhdGUgPSBcIiArIHhoci5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnN0YXR1cyA9IFwiICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIucmVzcG9uc2VUZXh0ID1cXG5cIiArIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGpzb25kYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLT4gXCIgKyBqc29uZGF0YS5lcnJvcl9tc2cpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tPiBcIiArIGpzb25kYXRhLnJldHVybl9jb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIucmVxdWVzdCA9XFxuXCIgKyBKU09OLnN0cmluZ2lmeShyZXEsIG51bGwsIDIpKTtcbiAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocmVxKSk7XG4gICAgfVxuICAgIHNlbmRQcm9taXNlKHJlcSwgYWN0aW9uLCBob3N0bmFtZSwgd2Vic2VydmVycG9ydCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAvLyBjb25zdCB1cmwyOiBzdHJpbmcgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArIFwiOjgwODAvdXRpbGl0eS9cIiArIGFjdGlvbjsgLy8gZm9yIGRldmVsb3BtZW50XG4gICAgICAgICAgICAvLyBjb25zdCB1cmw6IHN0cmluZyA9IFwiaHR0cDovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgXCI6XCIgKyB3aW5kb3cubG9jYXRpb24ucG9ydCArIFwiL3V0aWxpdHkvXCIgKyBhY3Rpb247IC8vIGZvciBwcm9kdWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3RuYW1lICsgXCI6XCIgKyB3ZWJzZXJ2ZXJwb3J0ICsgXCIvXCIgKyBhY3Rpb247IC8vIGZvciBkZXZlbG9wbWVudFxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybDIpO1xuICAgICAgICAgICAgLy8geGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KGFjdGlvbkFycmF5WzBdKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwiZ2V0UGVybWlzc2lvblwiKSB7XG4gICAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZ2V0UHJvamVjdFwiKSB7XG4gICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgbGV0IGpzb25kYXRhID0gW107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIucmVhZHlTdGF0ZSA9IFwiICsgeGhyLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnN0YXR1cyA9IFwiICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhoci5yZXNwb25zZVRleHQgPVxcblwiICsgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGpzb25kYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0+IFwiICsganNvbmRhdGEuZXJyb3JfbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZShqc29uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGpzb25kYXRhLnJldHVybl9jb2RlID09PSAwID8gcmVzb2x2ZShqc29uZGF0YSkgOiByZWplY3QoanNvbmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieGhyLnJlcXVlc3QgPVxcblwiICsgSlNPTi5zdHJpbmdpZnkocmVxLCBudWxsLCAyKSk7XG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShyZXEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRvd25sb2FkUmVwb3J0KGZpbGVuYW1lLCBob3N0bmFtZSwgd2Vic2VydmVycG9ydCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4cG9ydFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL1wiICsgaG9zdG5hbWUgKyBcIjpcIiArIHdlYnNlcnZlcnBvcnQgKyBcIi9wdWJsaWMvXCIgKyBmaWxlbmFtZTsgLy8gZm9yIGRldmVsb3BtZW50XG4gICAgICAgICAgICAvLyBjb25zdCB1cmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9cIiArIGhvc3RuYW1lICsgXCI6XCIgKyB3ZWJzZXJ2ZXJwb3J0ICsgXCIvY2xpZW50L3dyZXBvcnQvY29uZmlnL2lvcmVwb3J0Lmpzb25cIjsgLy8gZm9yIGRldmVsb3BtZW50XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXJsMik7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICAgICAgLy8gYWxlcnQoYWN0aW9uQXJyYXlbMF0pO1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgIGxldCBqc29uZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieGhyLnJlYWR5U3RhdGUgPSBcIiArIHhoci5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInhoci5zdGF0dXMgPSBcIiArIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIucmVzcG9uc2VUZXh0ID1cXG5cIiArIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBqc29uZGF0YSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZShqc29uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlcXVlc3QgPVxcblwiICsgSlNPTi5zdHJpbmdpZnkocmVxLCBudWxsLCAyKSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBXUmVxdWVzdDtcbiIsImltcG9ydCB7SmV0QXBwfSBmcm9tIFwid2ViaXgtamV0XCI7XG5pbXBvcnQgV1dlYlJlcXVlc3QgZnJvbSBcInd3ZWJyZXF1ZXN0XCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi9oZWxwZXJzL3N0YXRlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmRlY2xhcmUgbGV0IEFQUE5BTUU6IGFueTtcbmRlY2xhcmUgbGV0IFZFUlNJT046IGFueTtcbmRlY2xhcmUgbGV0IFBST0RVQ1RJT046IGJvb2xlYW47XG5cbi8vIERFVkVMT1BNRU5UXG4vLyBleHBvcnQgZGVjbGFyZSBsZXQgUFJPRFVDVElPTjogYm9vbGVhbjtcblxuZXhwb3J0IGxldCBzZXJ2ZXJEYXRhOiBhbnk7XG5leHBvcnQgbGV0IHJlcXVlc3Q6IFdXZWJSZXF1ZXN0PSBuZXcgV1dlYlJlcXVlc3QoKTtcbmV4cG9ydCBsZXQgd2Vic2VydmVycG9ydDogbnVtYmVyID0gODA4MDtcbmV4cG9ydCBjb25zdCBpcEFkZHI6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxud2ViaXgucmVhZHkoKCkgPT4ge1xuICAgIGNvbnN0IGFwcDogSmV0QXBwID0gbmV3IEpldEFwcCh7XG4gICAgICAgIGlkOlx0XHRcdEFQUE5BTUUsXG4gICAgICAgIHZlcnNpb246XHRWRVJTSU9OLFxuICAgICAgICBzdGFydDpcdFx0XCIvbGF5b3V0XCJcbiAgICB9KTtcbiAgICAvLyB3ZWJpeC5tZXNzYWdlKFBST0RVQ1RJT04pO1xuXG4gICAgaWYgKFBST0RVQ1RJT04pICB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB9XG5cbiAgICBhcHAucmVuZGVyKCk7XG4gICAgYXBwLnVzZShTdGF0ZSwgXCJcIik7XG59KTsiLCJpbXBvcnQge2lwQWRkciwgcmVxdWVzdCwgd2Vic2VydmVycG9ydH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQge2NvbnZlcnRTUUx0b1JUREIsIGNvbnZlcnRUaW1lc3RhbXBUb1JlcG9ydEZvcm1hdCwgY3J1bWJzZXAsIGRpc3BsYXlDdXJyZW50VGltZSwgZGlzcGxheUN1cnJlbnRUaW1lQ0NZWV9NTV9ERCwgZmlsdGVyU2VhcmNoLCBoaWRlUHJvZ3Jlc3NJY29uLCBzY2FkYVdlYkRhdGFGb3JSZXBvcnQsIHNob3dQcm9ncmVzc0ljb24sIHZhbGlkYXRlTnVsbFZhbHVlfSBmcm9tIFwiLi9yZXBvcnRDb250cm9sbGVyXCI7XHJcblxyXG5sZXQgcmVxdWVzdERhdGE6IGFueSA9IHt9O1xyXG5sZXQgZ2VuZXJhdGVkT246IHN0cmluZyA9IFwiXCI7XHJcbmxldCBkZXZpY2VsaXN0dmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbmxldCBkZXZpY2VBbmFsb2dDb2x1bW5zOiBhbnkgPSBbXTtcclxubGV0IHByb2plY3ROYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUNvbmZpZygpIHtcclxuICAgIHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XHJcbiAgICBsZXQgY291bnROdW1iZXJpbmdBbmFsb2c6IG51bWJlciA9IDE7XHJcbiAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhLCBcImdldFBlcm1pc3Npb25cIiwgXCJsb2NhbGhvc3RcIiwgMzAwMCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXZpY2VSZXBvcnRJbml0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb25kYXRhKSk7XHJcbiAgICAgICAgbGV0IHJldDogYW55ID0gW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXZpY2VSZXBvcnRJbml0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb25kYXRhLmRhdGEucmVjb3Jkc2V0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uZGF0YSkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YganNvbmRhdGEuZGF0YS5yZWNvcmRzZXQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIC8vIGZvcihjb25zdFtpbmRleDIsIHZhbHVlMl0gb2YgdmFsdWUxLnZhbHVlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB2YWx1ZS5OdW1iZXIgPSBjb3VudE51bWJlcmluZ0FuYWxvZztcclxuICAgICAgICAgICAgY291bnROdW1iZXJpbmdBbmFsb2crKztcclxuICAgICAgICB9XHJcbiAgICAgICAgKDx3ZWJpeC51aS5kYXRhdGFibGU+d2ViaXguJCQoXCJkZXZpY2VhbmFsb2dkYXRhXCIpKS5wYXJzZShyZXQsIFwianNvblwiKTtcclxuICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSk7XHJcbiAgICAgICAgd2ViaXgubWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RhdHVzLmVycm9ycy5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRldmljZWxvZ1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMuZXJyb3JzLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRldmljZVJlcG9ydFVwZGF0ZVRhYmxlKCkge1xyXG4gICAgLy8gYWxlcnQoXCJoZXJlXCIpO1xyXG4gICAgLy8gKioqIDEuIEdFVCBGSVJTVCBSRVBPUlQgQ0FURUdPVFkgQU5EIFJFU0VUIFNFQVJDSCBGSUxURVIgQ09ORElUSU9OICoqKipcclxuICAgIC8vIGNvbnNvbGUubG9nKGRldmljZUlwQWRkcmVzcyk7XHJcbiAgICBkZXZpY2VsaXN0dmFsdWUgPSAoPHdlYml4LnVpLmNvbWJvPndlYml4LiQkKFwiZGV2aWNlbGlzdFwiKSkuZ2V0VGV4dCgpO1xyXG4gICAgZ2VuZXJhdGVkT24gPSBkaXNwbGF5Q3VycmVudFRpbWUoKTtcclxuICAgIC8vIGFsZXJ0KGRldmljZWxpc3R2YWx1ZSk7XHJcbiAgICAvLyBhbGVydCgoPHdlYml4LnVpLmNvbWJvPndlYml4LiQkKFwiZGV2aWNlbGlzdFwiKSkuZ2V0VmFsdWUoKSk7XHJcbiAgICAvLyBhbGVydCgoPHdlYml4LnVpLmNvbWJvPndlYml4LiQkKFwiZGV2aWNlbGlzdFwiKSkuZ2V0VGV4dCgpKTtcclxuICAgICg8d2ViaXgudWkuc2VhcmNoPndlYml4LiQkKFwiZGV2aWNlc2VhcmNoXCIpKS5zZXRWYWx1ZShcIlwiKTtcclxuICAgICQkKFwiZGV2aWNlc2VhcmNoZmlsdGVyY29uZGl0aW9uXCIpLmRlZmluZShcInRlbXBsYXRlXCIsIFwiPGI+U2VhcmNoL0ZpbHRlciBDb25kaXRpb248L2I+OiAtXCIpO1xyXG4gICAgKDx3ZWJpeC51aS50ZW1wbGF0ZT53ZWJpeC4kJChcImRldmljZXNlYXJjaGZpbHRlcmNvbmRpdGlvblwiKSkucmVmcmVzaCgpO1xyXG4gICAgLy8gYWxlcnQoXCJibGFoMlwiKTtcclxuICAgIC8vIGFsZXJ0KGlvY2F0ZWdvcnlpZCk7XHJcblxyXG4gICAgJCQoXCJkZXZpY2V0aXRsZVwiKS5kZWZpbmUoXCJ0ZW1wbGF0ZVwiLCBcIjxiPlRpdGxlPC9iPjogXCIgKyBcIkxpc3Qgb2YgUGVybWlzc2lvbiBmb3IgUHJvamVjdFwiICsgXCIgb2YgPGI+XCIgKyBkZXZpY2VsaXN0dmFsdWUgKyBcIjwvYj5cIik7XHJcbiAgICAoPHdlYml4LnVpLnRlbXBsYXRlPndlYml4LiQkKFwiZGV2aWNldGl0bGVcIikpLnJlZnJlc2goKTtcclxuICAgICQkKFwiZGV2aWNlZ2VuZXJhdGVkdGltZVwiKS5kZWZpbmUoXCJ0ZW1wbGF0ZVwiLCBcIjxiPkdlbmVyYXRlZCBPbjwvYj46IFwiICsgZ2VuZXJhdGVkT24pO1xyXG4gICAgKDx3ZWJpeC51aS50ZW1wbGF0ZT53ZWJpeC4kJChcImRldmljZWdlbmVyYXRlZHRpbWVcIikpLnJlZnJlc2goKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRldmljZWNhdGVnb3J5aWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5DYXRlZ29yeVtOdW1iZXIoZGV2aWNlY2F0ZWdvcnlpZCktMV0uVGFibGVbMF0uQ29sdW1uKTtcclxuXHJcbiAgICAvLyAzLiAqKiogR0VUIFNFTEVDVEVEIFJFUE9SVCBDT05GSUdVUkVEIEFOQUxPRyBBTkQgRElHSVRBTCBDT0xVTU5TLCBBTkQgRklOQUxMWSwgVVBEQVRFIFRIRSBUQUJMRSAqKipcclxuICAgIC8vIGNvbnN0IGRldmljZUFuYWxvZ0NvbHVtbnM6IGFueSA9IFtdO1xyXG4gICAgLy8gY2hlY2sgZGVmYXVsdCBudW1iZXJpbmcgaW4gZGV2aWNlYW5hbG9ndGFibGUgaXMgZW5hYmxlZCBvciBkaXNhYmxlXHJcblxyXG4gICAgZGV2aWNlQW5hbG9nQ29sdW1ucyA9IFtcclxuICAgICAgICB7aWQ6XCJOdW1iZXJcIiwgaGVhZGVyOlwiTm8uXCIsIGhpZGRlbjpmYWxzZSwgc29ydDpcImludFwiLCBhZGp1c3Q6dHJ1ZSwgYWRqdXN0QmF0Y2g6NTAsIGNzczp7XCJ0ZXh0LWFsaWduXCI6XCJjZW50ZXJcIn19LFxyXG4gICAgICAgIHtpZDpcIlVzZXJuYW1lIChJbmRpdmlkdWFsKVwiLCBoZWFkZXI6XCJVc2VybmFtZSAoSW5kaXZpZHVhbClcIiwgaGlkZGVuOmZhbHNlLCBzb3J0OlwidGV4dFwiLCBhZGp1c3Q6dHJ1ZSwgYWRqdXN0QmF0Y2g6NTB9LFxyXG4gICAgICAgIHtpZDpcIkZ1bGxuYW1lIChJbmRpdmlkdWFsKVwiLCBoZWFkZXI6XCJGdWxsbmFtZSAoSW5kaXZpZHVhbClcIiwgaGlkZGVuOmZhbHNlLCBzb3J0OlwidGV4dFwiLCBhZGp1c3Q6dHJ1ZSwgYWRqdXN0QmF0Y2g6NTB9XHJcblxyXG4gICAgXTtcclxuICAgIC8vIGRldmljZURpZ2l0YWxDb2x1bW5zW2RldmljZURpZ2l0YWxDb2x1bW5zLmxlbmd0aC0xXS5maWxsc3BhY2UgPSB0cnVlO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGRldmljZURpZ2l0YWxDb2x1bW5zKTtcclxuXHJcbiAgICAoPHdlYml4LnVpLmRhdGF0YWJsZT53ZWJpeC4kJChcImRldmljZWFuYWxvZ2RhdGFcIikpLmNsZWFyQWxsKCk7XHJcbiAgICAkJChcImRldmljZWFuYWxvZ2RhdGFcIikuZGVmaW5lKFwiY29sdW1uc1wiLCBkZXZpY2VBbmFsb2dDb2x1bW5zKTtcclxuICAgIGdldERldmljZUNvbmZpZygpO1xyXG4gICAgKDx3ZWJpeC51aS5kYXRhdGFibGU+d2ViaXguJCQoXCJkZXZpY2VhbmFsb2dkYXRhXCIpKS5yZWZyZXNoQ29sdW1ucygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlTGlzdCgpIHtcclxuICAgIHJlcXVlc3REYXRhID0ge307XHJcbiAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhLCBcImdldFByb2plY3RcIiwgXCJsb2NhbGhvc3RcIiwgMzAwMCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcmV0OiBhbnkgPSBbXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRldmljZVJlcG9ydEluaXRcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coanNvbmRhdGEuZGF0YS5yZWNvcmRzZXQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb25kYXRhKSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBqc29uZGF0YS5kYXRhLnJlY29yZHNldC5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgLy8gZm9yKGNvbnN0W2luZGV4MiwgdmFsdWUyXSBvZiB2YWx1ZTEudmFsdWVzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goe2lkOnZhbHVlLlByb2pVc2VyS2V5LCB2YWx1ZTp2YWx1ZS5Qcm9qVXNlck5hbWV9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocmV0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGV2aWNlbGlzdCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRldmljZWxpc3RbMF0uaWQpO1xyXG4gICAgICAgICAgICAkJChcImRldmljZWxpc3RcIikuZGVmaW5lKFwib3B0aW9uc1wiLCByZXQpO1xyXG4gICAgICAgICAgICAkJChcImRldmljZWxpc3RcIikuZGVmaW5lKFwidmFsdWVcIiwgcmV0WzBdLmlkKTtcclxuICAgICAgICAgICAgJCQoXCJkZXZpY2VsaXN0XCIpLmRlZmluZShcIm9uXCIsIHtcclxuICAgICAgICAgICAgb25DaGFuZ2U6ZnVuY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTppZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKDx3ZWJpeC51aS5saXN0PndlYml4LiQkKFwiZGV2aWNlbGlzdFwiKSkucmVmcmVzaCgpO1xyXG4gICAgICAgIHByb2plY3ROYW1lID0gKDx3ZWJpeC51aS5jb21ibz53ZWJpeC4kJChcImRldmljZWxpc3RcIikpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgLy8gYWxlcnQoZmlyc3REZXZpY2VJcEFkZHJlc3MpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCg8d2ViaXgudWkuY29tYm8+d2ViaXguJCQoXCJkZXZpY2VsaXN0XCIpKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAvLyB0aGlzLiRzY29wZS5hcHAuc2hvdyhcIi9sYXlvdXQvaW9yZXBvcnQ/Q2F0ZWdvcnlJRD1cIiArIGlvY2F0ZWdvcnlpZCk7XHJcbiAgICAgICAgLy8gKioqIElGIERFVklDRSBMSVNUIElTIEZPVU5ELCBHRU5FUkFURSBGSVJTVCBSRVBPUlQgT04gVEhFIENBVEVHT1JZIExJU1QgQVVUT01BVElDQUxMWSAqKipcclxuICAgICAgICAvLyBkZXZpY2VjYXRlZ29yeWlkID0gXCIxXCI7XHJcbiAgICAgICAgZGV2aWNlUmVwb3J0VXBkYXRlVGFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXR1cykpO1xyXG4gICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJkZXZpY2Vsb2dcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLCBcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXZpY2VSZXBvcnRJbml0KCkge1xyXG4gICAgZ2V0RGV2aWNlTGlzdCgpO1xyXG59XHJcbiIsImltcG9ydCB7aXBBZGRyLCByZXF1ZXN0LCB3ZWJzZXJ2ZXJwb3J0fSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3J1bWJzZXA6IHN0cmluZyA9IFwiID4gXCI7XHJcbmNvbnN0IGtleTogc3RyaW5nID0gXCJTWEdXTFpQRE9LRklWVUhKWVRRQk5NQUNFUnhzd2d6bGRwa29pZnV2amh0eWJxbW5jYXJlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU3RyKHVuY29kZWQ6IHN0cmluZykgeyAvLyBzdGlsbCBub3Qgd29ya2luZyBhcyBleHBlY3RlZFxyXG4gICAgY29uc29sZS5sb2codW5jb2RlZCk7XHJcbiAgICB1bmNvZGVkID0gdW5jb2RlZC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyh1bmNvZGVkKTtcclxuICAgIGxldCBjb2RlZDogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBjaHI6IG51bWJlcjtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IHVuY29kZWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY2hyID0gdW5jb2RlZC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjaHIpO1xyXG4gICAgICBjb2RlZCArPSAoY2hyID49IDY1ICYmIGNociA8PSA5MCkgP1xyXG4gICAgICAgIGtleS5jaGFyQXQoY2hyIC0gNjUgKyAyNipNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMikpIDpcclxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XHJcbiAgICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNvZGVkKTtcclxuICAgIGNvbnNvbGUubG9nKGVuY29kZVVSSUNvbXBvbmVudChjb2RlZCkpO1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChjb2RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTdHIoY29kZWQ6IHN0cmluZykge1xyXG4gICAgY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoY29kZWQpO1xyXG4gICAgY29uc29sZS5sb2coY29kZWQpO1xyXG4gICAgbGV0IHVuY29kZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBsZXQgY2hyOiBzdHJpbmc7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjb2RlZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBjaHIgPSBjb2RlZC5jaGFyQXQoaSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNocik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBrZXkuaW5kZXhPZihjaHIpICUgMjYpKTtcclxuICAgICAgdW5jb2RlZCArPSAoY2hyID49IFwiYVwiICYmIGNociA8PSBcInpcIiB8fCBjaHIgPj0gXCJBXCIgJiYgY2hyIDw9IFwiWlwiKSA/XHJcbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGtleS5pbmRleE9mKGNocikgJSAyNikgOlxyXG4gICAgICAgIGNocjtcclxuICAgICAgLy8gY29uc29sZS5sb2codW5jb2RlZCk7XHJcbiAgICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHVuY29kZWQpO1xyXG4gICAgcmV0dXJuIHVuY29kZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVLZXlzKG9iajogYW55LCBuZXdLZXlzOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleVZhbHVlczogYW55ID0gT2JqZWN0LmtleXMob2JqKS5tYXAoKGtleTI6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdLZXk6IGFueSA9IG5ld0tleXNba2V5Ml0gfHwga2V5MjtcclxuICAgICAgcmV0dXJuIHsgW25ld0tleV06IG9ialtrZXkyXSB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgLi4ua2V5VmFsdWVzKTtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGE6IHN0cmluZyxiOiBzdHJpbmcpIHtcclxuICAgIGEgPSBhLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBhLmluZGV4T2YoYikgIT09IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKG9iajogYW55LCBrZXkxOiBhbnkpIHtcclxuICAgIHJldHVybiAob2JqW2tleTFdID09PSBudWxsIHx8IG9ialtrZXkxXSA9PT0gdW5kZWZpbmVkIHx8IG9ialtrZXkxXSA9PT0gXCJudWxsXCIgfHwgb2JqW2tleTFdID09PSBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTnVsbFZhbHVlKG9iajogYW55KSB7XHJcbiAgICBjb25zdCBvYmpLZXlzOiBhbnkgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgb2JqS2V5cy5mb3JFYWNoKChrZXkyOiBhbnkpID0+IHtcclxuICAgICAgICBpZihpc051bGwob2JqLCBrZXkyKSkge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsaWRhdGUga2V5IGlzTnVsbCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoa2V5MiwgbnVsbCwgXCIgXCIpKTtcclxuICAgICAgICAgICAgb2JqW2tleTJdID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0eXBlb2Yob2JqW2tleTJdKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwidmFsaWRhdGUga2V5OiBcIiArIEpTT04uc3RyaW5naWZ5KGtleTIsIG51bGwsIFwiIFwiKSk7XHJcbiAgICAgICAgICB2YWxpZGF0ZU51bGxWYWx1ZShvYmpba2V5Ml0pO1xyXG4gICAgICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclNlYXJjaCh0eXBlOiBhbnksIHRleHQ6IHN0cmluZywgY29sdW1uOiBhbnkpIHtcclxuICAgIHR5cGUuZmlsdGVyKGZ1bmN0aW9uKG9iajogYW55KSB7IC8vIGhlcmUgaXQgZmlsdGVycyBkYXRhIVxyXG4gICAgICAgIC8vIGFsZXJ0KG9iaik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uKTtcclxuICAgICAgICAvLyByZXR1cm4gb2JqLlRhZ05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpPT0wO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgY29sdW1uLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZTMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpbdmFsdWUuQ29sdW1uTmFtZV0pO1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5IaWRkZW4gPT09IGZhbHNlICYmIChvYmpbdmFsdWUuQ29sdW1uTmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxzKG9ialt2YWx1ZS5Db2x1bW5OYW1lXSwgdGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4KzEgPT09IGNvbHVtbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBcIlwiLCBmYWxzZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJ1dHRvbihwcmludERhdGE6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coKDx3ZWJpeC51aS50ZW1wbGF0ZT53ZWJpeC4kJChcImlvY2F0ZWdvcnlcIikpLmdldFZhbHVlcygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCg8d2ViaXgudWkudGVtcGxhdGU+d2ViaXguJCQoXCJpb2dlbmVyYXRlZHRpbWVcIikpLmdldFZhbHVlcygpKTtcclxuICAgIHdlYml4LnByaW50KHByaW50RGF0YSwge21vZGU6XCJsYW5kc2NhcGVcIiwgbWFyZ2luOjQwLCBkb2NIZWFkZXI6XCJJTyBMaXN0XCIsIGZpdDpcImRhdGFcIn0pOy8vICwgZml0OlwiZGF0YVwiLCB0cmltOnRydWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdOYW1lKGlkU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidmlld05hbWUgaWRTdHJpbmc6XCIgKyBpZFN0cmluZyk7XHJcbiAgICByZXR1cm4gd2ViaXguJCQoaWRTdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2dyZXNzQmFyKHZpZXc6IHN0cmluZywgdG90YWxSb3c6IG51bWJlciwgY3VycmVudFJvdzogbnVtYmVyKSB7XHJcbiAgICBsZXQgcGVyY2VudGFnZVByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NWaWV3VWk6IGFueSA9ICQkKHZpZXcpO1xyXG4gICAgcGVyY2VudGFnZVByb2dyZXNzID0gTWF0aC5yb3VuZCgoY3VycmVudFJvdy90b3RhbFJvdykqMTAwKTtcclxuICAgIHByb2dyZXNzVmlld1VpLmRlZmluZShcInRlbXBsYXRlXCIsIFwiPGRpdiBjbGFzcz0nc3F1YXJlLWdyZWVuJyBzdHlsZT0naGVpZ2h0OjEwcHg7d2lkdGg6XCIgKyBwZXJjZW50YWdlUHJvZ3Jlc3MgKyBcIiUnPjwvZGl2PiA8L2Rpdj5cIik7XHJcbiAgICBwcm9ncmVzc1ZpZXdVaS5yZWZyZXNoKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZ3Jlc3NJY29uKHZpZXc6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YXZpZXc6IGFueSA9IHdlYml4LmV4dGVuZCgkJCh2aWV3KSwgd2ViaXguUHJvZ3Jlc3NCYXIpO1xyXG4gICAgZGF0YXZpZXcuc2hvd1Byb2dyZXNzKHtcclxuICAgICAgICBwb3NpdGlvbjowLFxyXG4gICAgICAgIC8vIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgdHlwZTpcImljb25cIixcclxuICAgICAgICBpY29uOlwicmVmcmVzaFwiLFxyXG4gICAgICAgIGhpZGU6ZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZVByb2dyZXNzSWNvbih2aWV3OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGF2aWV3OiBhbnkgPSB3ZWJpeC5leHRlbmQoJCQodmlldyksIHdlYml4LlByb2dyZXNzQmFyKTtcclxuICAgIGRhdGF2aWV3LmhpZGVQcm9ncmVzcyh7XHJcbiAgICAgICAgLy8gZGVsYXk6IDUwMCxcclxuICAgICAgICBoaWRlOnRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uZERhdGFQcm9jZXNzaW5nMU9yaShvYmplY3RzOiBhbnksIHJlcG9ydHNUeXBlOiBzdHJpbmcpIHtcclxuICAgIHZhbGlkYXRlTnVsbFZhbHVlKG9iamVjdHMudmFsdWVzKTtcclxuXHJcbiAgICBzd2l0Y2ggKHJlcG9ydHNUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkFsYXJtIEhpc3RvcnkgSm91cm5hbCAoQWxhcm0gLSBFdmVudClcIjpcclxuICAgICAgICAgICAgb2JqZWN0cy52YWx1ZXMuZm9yRWFjaCgob2JqRWxlbW50czogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmpFbGVtbnRzLkZMQUdBQ0sgPSBjaGVja0ZsYWdBY2sob2JqRWxlbW50cy5GTEFHQUNLKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICg8d2ViaXgudWkuZGF0YXRhYmxlPndlYml4LiQkKFwiYWxhcm1oaXN0b3J5am91cm5hbGRhdGFcIikpLnBhcnNlKG9iamVjdHMudmFsdWVzLCBcImpzb25cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRXaXRoT3B0aW9uc0J1dHRvbih0eXBlOiBhbnksIG9yaWVudGF0aW9uOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcsIGZpdDogc3RyaW5nKSB7XHJcbiAgICAvLyBhbGVydChmaWxlbmFtZSk7XHJcbiAgICBjb25zdCBjb25maWc6IGFueSA9IHtcclxuICAgICAgICBtb2RlOm9yaWVudGF0aW9uLFxyXG4gICAgICAgIG1hcmdpbjo0MCxcclxuICAgICAgICBkb2NIZWFkZXI6ZmlsZW5hbWUsXHJcbiAgICAgICAgdHJpbTpmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBmaXQgPT09IFwiZml0IGJ5IGRhdGFcIj8gY29uZmlnLmZpdCA9IFwiZGF0YVwiOiBjb25maWcuZml0ID0gXCJwYWdlXCI7XHJcbiAgICB3ZWJpeC5wcmludCh0eXBlLGNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRCdXR0b24oZXhwb3J0RGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBjb25maWc6IGFueSA9IHtcclxuICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjpcImxlZnRcIixcclxuICAgICAgICAgICAgZm9udFNpemU6NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczp7XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOnt3aWR0aDoyODB9LFxyXG4gICAgICAgICAgICBUYWdOYW1lOnt3aWR0aDoxMjB9LFxyXG4gICAgICAgICAgICBSYW5nZTp7d2lkdGg6ODB9LFxyXG4gICAgICAgICAgICBSQkVXaW5kb3c6e3dpZHRoOjEwMH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbGVuYW1lOlwiZGF0YXRhYmxlXCIsXHJcbiAgICAgICAgb3JpZW50YXRpb246XCJsYW5kc2NhcGVcIixcclxuICAgICAgICBkb2NIZWFkZXI6XCJJTyBMaXN0XCIsXHJcbiAgICAgICAgcmF3VmFsdWVzOmZhbHNlLFxyXG4gICAgICAgIGF1dG93aWR0aDpmYWxzZVxyXG4gICAgfTtcclxuICAgIHdlYml4LnRvUERGKGV4cG9ydERhdGEsIGNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRXaXRoT3B0aW9uc0J1dHRvbih0eXBlOiBhbnksIGZvcm1hdDogc3RyaW5nLCBvcmllbnRhdGlvbjogc3RyaW5nLCBkZXZpY2VFeHBvcnRDb2x1bW46IGFueSwgc2VsZWN0ZWRjb2x1bW5zOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcsIHRhYmxlRGVzYzogc3RyaW5nLCBtYXhSZWNvcmRXYXJuaW5nOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGlnbm9yZTogYW55ID0gW107XHJcbiAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBjb25zdCBjb2x1bW5zOiBhbnkgPSBbXTtcclxuICAgIGNvbHVtbnMuTm8gPSB7XHJcbiAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudCsrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6IDMwXHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGZvcm1hdCA9PT0gXCJwZGZcIiB8fCBmb3JtYXQgPT09IFwiY3N2XCIpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZGNvbHVtbnNSZXM6IGFueSA9IHNlbGVjdGVkY29sdW1ucy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBkZXZpY2VFeHBvcnRDb2x1bW4uZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRjb2x1bW5zUmVzLmluY2x1ZGVzKHZhbHVlLmlkKT9jb2x1bW5zW3ZhbHVlLmlkXSA9IHRydWU6aWdub3JlW3ZhbHVlLmlkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGZvcm1hdCA9PT0gXCJwZGZcIikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkY29sdW1uc1Jlcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1ucyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWdub3JlKTtcclxuICAgICAgICAvLyBjb2x1bW5zLnJhd1ZhbHVlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb3VudDI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHRhYmxlOntcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOjhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sdW1uczpjb2x1bW5zLFxyXG4gICAgICAgICAgICBpZ25vcmU6aWdub3JlLFxyXG4gICAgICAgICAgICBmaWxlbmFtZTpmaWxlbmFtZSxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246b3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgIGRvY0hlYWRlcjp7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0YWJsZURlc2MsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOjB4NjYzMzk5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGRvY0hlYWRlckltYWdlOnt1cmw6XCJtb2RlbHMvSGVhZGVyLkpQR1wiLCBvcmRlcjowIH0sXHJcbiAgICAgICAgICAgIGF1dG93aWR0aDp0cnVlLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50MisrO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnQyIDw9IG1heFJlY29yZFdhcm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gd2ViaXgudG9QREYodHlwZSwgY29uZmlnKTtcclxuICAgICAgICAvLyAkJChcImlvZXhwb3J0d2luXCIpLmRpc2FibGUoKTtcclxuICAgICAgICAvKmNvbnN0IGRhdGF0YWJsZWV4dGVuZDogYW55ID0gd2ViaXguZXh0ZW5kKCQkKFwiaW9leHBvcnR3aW5cIiksIHdlYml4LlByb2dyZXNzQmFyKTtcclxuICAgICAgICBkYXRhdGFibGVleHRlbmQuc2hvd1Byb2dyZXNzKHtcclxuICAgICAgICAgICAgdHlwZTpcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICBkZWxheToyMDAwLFxyXG4gICAgICAgICAgICBoaWRlOnRydWVcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIHdlYml4LnRvUERGKHR5cGUsIGNvbmZpZykudGhlbihmdW5jdGlvbihibG9iOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYmxvYik7XHJcbiAgICAgICAgICAgIC8vICQkKFwiaW9leHBvcnR3aW5cIikuZW5hYmxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSBcImNzdlwiKSB7XHJcbiAgICAgICAgbGV0IGNvdW50MjogbnVtYmVyID0gMDtcclxuICAgICAgICB3ZWJpeC5jc3YuZGVsaW1pdGVyLmNvbHMgPSBcIixcIjtcclxuICAgICAgICBjb25zdCBjb25maWc6IGFueSA9IHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6ZmlsZW5hbWUsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6Y29sdW1ucyxcclxuICAgICAgICAgICAgaWdub3JlOmlnbm9yZSxcclxuICAgICAgICAgICAgZmlsdGVyOmZ1bmN0aW9uKG9iajogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDIrKztcclxuICAgICAgICAgICAgICAgIGlmKGNvdW50MiA8PSBtYXhSZWNvcmRXYXJuaW5nKjEwKSB7IC8vIHRlbXBvcmFyaWx5IHNldCBtYXggdG8gNTAwKjEwMCA9IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB3ZWJpeC50b0NTVih0eXBlLCBjb25maWcpO1xyXG4gICAgICAgIHdlYml4LnRvQ1NWKHR5cGUsIGNvbmZpZykudGhlbihmdW5jdGlvbihibG9iOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYmxvYik7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gXCJwbmdcIikge1xyXG4gICAgICAgIC8vIGFsZXJ0KHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogYW55ID0ge1xyXG4gICAgICAgICAgICBmaWxlbmFtZTpmaWxlbmFtZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2ViaXgudG9QTkcodHlwZSwgY29uZmlnKTtcclxuICAgICAgICAvKndlYml4LnRvUE5HKHR5cGUsIHtcclxuICAgICAgICAgICAgZG93bmxvYWQ6ZmFsc2VcclxuICAgICAgICAgfSkudGhlbihmdW5jdGlvbihibG9iOiBhbnkpIHtcclxuICAgICAgICAgICAgd2ViaXguaHRtbC5kb3dubG9hZChibG9iLCBcIm15ZmlsZS5wbmdcIik7XHJcbiAgICAgICAgIH0pOyovXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRkb2NEZWZpbml0aW9uUGRmKGNvbnRlbnQ6IGFueSwgZXhwb3J0T3JpZW50YXRpb246IHN0cmluZykge1xyXG4gICAgY29uc3QgZG9jRGVmaW5pdGlvblBkZjogYW55ID0ge307XHJcbiAgICBkb2NEZWZpbml0aW9uUGRmLnN0eWxlcyA9IHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcbiAgICAgICAgICAgIGJvbGQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYmxlVGl0bGU6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcbiAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jRGVmaW5pdGlvblBkZi5wYWdlT3JpZW50YXRpb24gPSBleHBvcnRPcmllbnRhdGlvbjtcclxuICAgIGRvY0RlZmluaXRpb25QZGYuY29udGVudCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBjb250ZW50LnRhYmxlLmVudHJpZXMoKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZS5yZXBvcnRkYXRhLCBudWxsLCBcIiBcIikpO1xyXG4gICAgICAgIGluZGV4ID09PSAwP1xyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQucHVzaCh7dGV4dDogdmFsdWUudGFibGVkZXNjLmRlc2MxLCBzdHlsZTogXCJ0YWJsZVRpdGxlXCIsIGFsaWdubWVudDogXCJjZW50ZXJcIn0pOlxyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQucHVzaCh7dGV4dDogdmFsdWUudGFibGVkZXNjLmRlc2MxLCBzdHlsZTogXCJ0YWJsZVRpdGxlXCIsIGFsaWdubWVudDogXCJjZW50ZXJcIiwgcGFnZUJyZWFrOiBcImJlZm9yZVwifSk7XHJcbiAgICAgICAgZG9jRGVmaW5pdGlvblBkZi5jb250ZW50LnB1c2goe3RleHQ6IHZhbHVlLnRhYmxlZGVzYy5kZXNjMiwgc3R5bGU6IFwidGFibGVUaXRsZVwiLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCJ9KTtcclxuICAgICAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQucHVzaCh7dGV4dDogdmFsdWUudGFibGVkZXNjLmRlc2MzLCBzdHlsZTogXCJ0YWJsZVRpdGxlXCIsIGFsaWdubWVudDogXCJjZW50ZXJcIn0pO1xyXG4gICAgICAgIGRvY0RlZmluaXRpb25QZGYuY29udGVudC5wdXNoKHt0ZXh0OlwiXCJ9KTtcclxuICAgICAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQucHVzaCh7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGFibGU6IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlclJvd3M6IDEsXHJcbiAgICAgICAgICAgICAgICBib2R5OnZhbHVlLnJlcG9ydGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvY0RlZmluaXRpb25QZGY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRkb2NEZWZpbml0aW9uQ3N2KGNvbnRlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgZG9jRGVmaW5pdGlvbkNzdjogYW55ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGNvbnRlbnQudGFibGUuZW50cmllcygpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWUucmVwb3J0ZGF0YSksIG51bGwsIFwiIFwiKTtcclxuICAgICAgICBkb2NEZWZpbml0aW9uQ3N2LnB1c2goW3ZhbHVlLnRhYmxlZGVzYy5kZXNjMSwgdmFsdWUudGFibGVkZXNjLmRlc2MyLCB2YWx1ZS50YWJsZWRlc2MuZGVzYzNdKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleDIsIHZhbHVlMl0gb2YgdmFsdWUucmVwb3J0ZGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUyKTtcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbkNzdi5wdXNoKHZhbHVlMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvY0RlZmluaXRpb25Dc3Y7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRSZXBvcnQoZXhwb3J0d2luaWQ6IHN0cmluZywgY29udGVudDogYW55LCBleHBvcnRGb3JtYXQ6IHN0cmluZywgZXhwb3J0T3JpZW50YXRpb246IHN0cmluZykge1xyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29udGVudCwgbnVsbCwgXCIgXCIpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV4cG9ydEZvcm1hdCk7XHJcbiAgICAvLyBjb252ZXJ0IHRoZSBjb250ZW50IHRvIHBkZm1ha2UgZm9ybWF0XHJcbiAgICBpZihleHBvcnRGb3JtYXQ9PT1cInBkZlwiKSB7XHJcbiAgICAgICAgY29uc3QgZG9jRGVmaW5pdGlvblBkZjogYW55ID0gZ2V0ZG9jRGVmaW5pdGlvblBkZihjb250ZW50LCBleHBvcnRPcmllbnRhdGlvbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZG9jRGVmaW5pdGlvblBkZiwgbnVsbCwgXCIgXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGFQZGY6IGFueSA9IHtcclxuICAgICAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl0sXHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBjb250ZW50LmZpbGVuYW1lLFxyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uOiBkb2NEZWZpbml0aW9uUGRmXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzaG93UHJvZ3Jlc3NJY29uKFwiXCIpO1xyXG4gICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhUGRmKS5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGFmdGVyIGRvaW5nIGJlbmNobWFyayB0ZXN0aW5nLCBwZGZtYWtlIHVuYWJsZSB0byBwcm9jZXNzIGRhdGEgd2l0aCBzaXplIG1vcmUgdGhhbiA1LDAwMCwwMDAgYnl0ZXNcclxuICAgICAgICBzaG93UHJvZ3Jlc3NJY29uKGV4cG9ydHdpbmlkKTtcclxuICAgICAgICBpZihKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YVBkZikubGVuZ3RoIDwgNTAwMDAwMCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhUGRmLCBcImNyZWF0ZVBERkZpbGVcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0ljb24oZXhwb3J0d2luaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudC5maWxlbmFtZSArIFwiLnBkZlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5kb3dubG9hZFJlcG9ydChjb250ZW50LmZpbGVuYW1lK1wiLnBkZlwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGEyOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5odG1sLmRvd25sb2FkKGpzb25kYXRhMiwgY29udGVudC5maWxlbmFtZSArIFwiLnBkZlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YTI6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IFtjb250ZW50LmZpbGVuYW1lK1wiLnBkZlwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEyLCBcImRlbGV0ZUZpbGVzU2NhZGFXZWJcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMzogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImVycm9yXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnfSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiRmFpbGVkIHRvIGdldCBcIiArIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5wZGYuIFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGdldCBcIiArIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5wZGYuIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArICBjb250ZW50LmZpbGVuYW1lICsgXCIucGRmLiBcIiArIHN0YXR1cy5lcnJvcl9tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic29ja2V0Q2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIucGRmLiBcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdlYml4LmFsZXJ0KFwiRGF0YSBpcyB0b28gbGFyZ2UuIFBsZWFzZSBleHBvcnQgdXNpbmcgQ1NWLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGNvbnRlbnQgdG8gY3N2LXN0cmluZ2lmeSBmb3JtYXRcclxuICAgICAgICBjb25zdCBkb2NEZWZpbml0aW9uQ3N2OiBhbnkgPSBnZXRkb2NEZWZpbml0aW9uQ3N2KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YUNzdjogYW55ID0ge1xyXG4gICAgICAgICAgICBmb2xkZXI6IFtcInB1YmxpY1wiXSxcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGNvbnRlbnQuZmlsZW5hbWUsXHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb246IGRvY0RlZmluaXRpb25Dc3ZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeShkb2NEZWZpbml0aW9uQ3N2KS5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGNzdi1zdHJpbmdpZnkgaXMgYWN0dWFsbHkgYWJsZSB0byBoYW5kbGUgbGFyZ2VyIGRhdGEgYnV0IHRoZSBzZXJ2ZXIncyBib2R5IHBhcnNlciBsaW1pdCB0aGUgcmVxdWVzdCBib2R5IHVwIHRvIDVtYlxyXG4gICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhQ3N2KS5sZW5ndGggPCA1MDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGFDc3YsIFwiY3JlYXRlQ1NWRmlsZVwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudC5maWxlbmFtZSArIFwiLmNzdlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5kb3dubG9hZFJlcG9ydChjb250ZW50LmZpbGVuYW1lK1wiLmNzdlwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGEyOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5odG1sLmRvd25sb2FkKGpzb25kYXRhMiwgY29udGVudC5maWxlbmFtZSArIFwiLmNzdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YTI6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IFtjb250ZW50LmZpbGVuYW1lK1wiLmNzdlwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEyLCBcImRlbGV0ZUZpbGVzU2NhZGFXZWJcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMzogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImVycm9yXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnfSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiRmFpbGVkIHRvIGdldCBcIiArIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5jc3YuIFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGdldCBcIiArIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5jc3YuIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArICBjb250ZW50LmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic29ja2V0Q2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWJpeC5hbGVydChcIkRhdGEgaXMgdG9vIGxhcmdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDc3ZQZGZTZW5kRW1haWwoY29udGVudENTVjogYW55LCBjb250ZW50UERGOiBhbnksIGVtYWlsZm9ybWF0Y3N2OiBhbnksIGVtYWlsZm9ybWF0cGRmOiBhbnksIGZvcm06IGFueSwgZGF0YTogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb250ZW50LCBudWxsLCBcIiBcIikpO1xyXG4gICAgLy8gY29udmVydCB0aGUgY29udGVudCB0byBwZGZtYWtlIGZvcm1hdFxyXG4gICAgY29uc3QgZG9jRGVmaW5pdGlvblBkZjogYW55ID0gZ2V0ZG9jRGVmaW5pdGlvblBkZihjb250ZW50UERGLCBcImxhbmRzY2FwZVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRvY0RlZmluaXRpb25QZGYsIG51bGwsIFwiIFwiKSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdERhdGFQZGY6IGFueSA9IHtcclxuICAgICAgICBmb2xkZXI6IFtcInB1YmxpY1wiXSxcclxuICAgICAgICBmaWxlbmFtZTogY29udGVudFBERi5maWxlbmFtZSxcclxuICAgICAgICBkb2NEZWZpbml0aW9uOiBkb2NEZWZpbml0aW9uUGRmXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnZlcnQgdGhlIGNvbnRlbnQgdG8gY3N2LXN0cmluZ2lmeSBmb3JtYXRcclxuICAgIGNvbnN0IGRvY0RlZmluaXRpb25Dc3Y6IGFueSA9IGdldGRvY0RlZmluaXRpb25Dc3YoY29udGVudENTVik7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdERhdGFDc3Y6IGFueSA9IHtcclxuICAgICAgICBmb2xkZXI6IFtcInB1YmxpY1wiXSxcclxuICAgICAgICBmaWxlbmFtZTogY29udGVudENTVi5maWxlbmFtZSxcclxuICAgICAgICBkb2NEZWZpbml0aW9uOiBkb2NEZWZpbml0aW9uQ3N2XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF0dGFjaGVkRmlsZXM6IGFueSA9IFtdO1xyXG4gICAgLy8gYWZ0ZXIgZG9pbmcgYmVuY2htYXJrIHRlc3RpbmcsIHBkZm1ha2UgdW5hYmxlIHRvIHByb2Nlc3MgZGF0YSB3aXRoIHNpemUgbW9yZSB0aGFuIDUsMDAwLDAwMCBieXRlc1xyXG4gICAgaWYoSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGFQZGYpLmxlbmd0aCA8IDUwMDAwMDAgJiYgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGFDc3YpLmxlbmd0aCA8IDUwMDAwMDApIHtcclxuICAgICAgICBpZihlbWFpbGZvcm1hdGNzdiAmJiBlbWFpbGZvcm1hdHBkZikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhQ3N2LCBcImNyZWF0ZUNTVkZpbGVcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3ZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoY29udGVudENTVi5maWxlbmFtZSArIFwiLmNzdlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIsIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgICAgIGF0dGFjaGVkRmlsZXMucHVzaChjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YVBkZiwgXCJjcmVhdGVQREZGaWxlXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoZWRGaWxlcy5wdXNoKGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEVtYWlsKGRhdGEsIGZvcm0sIGF0dGFjaGVkRmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNvY2tldENsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmLiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgIGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3YuIFwiICsgc3RhdHVzLmVycm9yX21zZyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJzb2NrZXRDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArIGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3YuIFwiICsgc3RhdHVzLmVycm9yX21zZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZW1haWxmb3JtYXRjc3YgJiYgIWVtYWlsZm9ybWF0cGRmKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGFDc3YsIFwiY3JlYXRlQ1NWRmlsZVwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudENTVi5maWxlbmFtZSArIFwiLmNzdlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2XCIgKyBcIiBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoZWRGaWxlcy5wdXNoKGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3ZcIik7XHJcbiAgICAgICAgICAgICAgICBzZW5kRW1haWwoZGF0YSwgZm9ybSwgYXR0YWNoZWRGaWxlcyk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArIGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3YuIFwiICsgc3RhdHVzLmVycm9yX21zZywgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArIGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3YuIFwiICsgc3RhdHVzLmVycm9yX21zZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWVtYWlsZm9ybWF0Y3N2ICYmIGVtYWlsZm9ybWF0cGRmKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGFQZGYsIFwiY3JlYXRlUERGRmlsZVwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGEyOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIsIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgICAgIGF0dGFjaGVkRmlsZXMucHVzaChjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VuZEVtYWlsKGRhdGEsIGZvcm0sIGF0dGFjaGVkRmlsZXMpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmLiBcIiArIHN0YXR1cy5lcnJvcl9tc2csIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmLiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlYml4LmFsZXJ0KFwiRGF0YSBpcyB0b28gbGFyZ2UuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZEVtYWlsKGRhdGE6IGFueSwgZm9ybTogYW55LCBhdHRhY2hlZEZpbGVzOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlNDQURBX1dFQik7IC8vIGNhbm5vdCByZWFkIGVudiB2YXJcclxuICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaGVkRmlsZXMpO1xyXG4gICAgY29uc3QgcmVjaXBpZW50OiBzdHJpbmcgPSBmb3JtLmdldFZhbHVlcygpLmVtYWlscmVjaXBpZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVjaXBpZW50KTtcclxuICAgIGNvbnN0IHN1YmplY3Q6IHN0cmluZyA9IGZvcm0uZ2V0VmFsdWVzKCkuZW1haWxzdWJqZWN0O1xyXG4gICAgLy8gY29uc29sZS5sb2coc3ViamVjdCk7XHJcbiAgICBjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBmb3JtLmdldFZhbHVlcygpLmVtYWlsbWVzc2FnZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgYXR0YWNobWVudDogYW55ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGF0dGFjaGVkRmlsZXMuZW50cmllcygpKSB7XHJcbiAgICAgICBhdHRhY2htZW50LnB1c2goe1xyXG4gICAgICAgICAgIGZpbGVuYW1lOiB2YWx1ZSxcclxuICAgICAgICAgICBmb2xkZXI6IFtcInB1YmxpY1wiXVxyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2htZW50KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGF0dGFjaG1lbnQsIG51bGwsIFwiIFwiKSk7XHJcbiAgICBjb25zdCByZXF1ZXN0RGF0YTogYW55ID0ge1xyXG4gICAgICAgIHNlbmRlcjp7XHJcbiAgICAgICAgICAgIFNlcnZlck5hbWU6IGRhdGEuU2VuZGVyWzBdLlNlcnZlck5hbWUsXHJcbiAgICAgICAgICAgIEVtYWlsQWRkcmVzczogZGF0YS5TZW5kZXJbMF0uRW1haWxBZGRyZXNzLFxyXG4gICAgICAgICAgICBQYXNzd29yZDogd2luZG93LmF0b2IoZGF0YS5TZW5kZXJbMF0uUGFzc3dvcmQpIC8vIFRPRE86IHRlbXBvcmFyeSBlbmNyeXB0aW9uIHVzaW5nIHNpbXBsZSBiYXNlNjQgZW5jb2RpbmcuIEhhdmUgdG8gZGVjaWRlIG9uIHByb3BlciBlbmNyeXB0aW9uIGZvciBwYXNzd29yZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnQsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIGF0dGFjaG1lbnQ6IGF0dGFjaG1lbnRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsZXNUb0RlbGV0ZTogYW55ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGF0dGFjaGVkRmlsZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgZmlsZXNUb0RlbGV0ZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmaWxlc1RvRGVsZXRlLCBudWxsLCBcIiBcIikpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3REYXRhMjogYW55ID0ge1xyXG4gICAgICAgIGZpbGVuYW1lOiBmaWxlc1RvRGVsZXRlLCAvLyBhbHJlYWR5IHdpdGggZXh0ZW5zaW9uIG5hbWVcclxuICAgICAgICBmb2xkZXI6IFtcInB1YmxpY1wiXVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKFwic2VuZEVtYWlsXCIpO1xyXG4gICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YSwgXCJzZW5kRW1haWxcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBpcyBzdWNjZXNzZnVsbHkgc2VudC5cIik7XHJcbiAgICAgICAgd2ViaXgubWVzc2FnZShcIkVtYWlsIGlzIHN1Y2Nlc3NmdWxseSBzZW50LlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJkZWJ1Z1wiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIkVtYWlsIGlzIHN1Y2Nlc3NmdWxseSBzZW50LlwifSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICAvLyAoPHdlYml4LnVpLndpbmRvdz53ZWJpeC4kJChcImRldmljZWVtYWlsd2luMlwiKSkuY2xvc2UoKTtcclxuICAgICAgICAvLyBmb3JtLmdldFRvcFBhcmVudFZpZXcoKS5jbG9zZSgpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEyLCBcImRlbGV0ZUZpbGVzU2NhZGFXZWJcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDU1YvUERGIFJlcG9ydCBhcmUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgICAgICAvLyB3ZWJpeC5tZXNzYWdlKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzLmVycm9yX21zZywgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJlcnJvclwiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzLmVycm9yX21zZ30sIFwibG9nXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlRW1haWxSZWNpcGllbnQoZGF0YSwgcmVjaXBpZW50KTtcclxuICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgd2ViaXgubWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIHNlbmQgZW1haWwuIFwiICsgc3RhdHVzLmVycm9yX21zZyxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICBpZDogXCJzb2NrZXRDbG9zZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJlcnJvclwiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBzZW5kIGVtYWlsLiBcIiArIHN0YXR1cy5lcnJvcl9tc2d9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHNlbmQgZW1haWwuIFwiICsgc3RhdHVzLmVycm9yX21zZyk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEyLCBcImRlbGV0ZUZpbGVzU2NhZGFXZWJcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDU1YvUERGIFJlcG9ydCBhcmUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuXCIpO1xyXG4gICAgICAgICAgICAvLyB3ZWJpeC5tZXNzYWdlKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzMjogYW55KSB7XHJcbiAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1czIuZXJyb3JfbXNnLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZXJyb3JcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1cy5lcnJvcl9tc2d9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzMi5lcnJvcl9tc2cpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRW1haWxSZWNpcGllbnQoZGF0YTogYW55LCByZWNpcGllbnQ6IHN0cmluZykge1xyXG4gICAgbGV0IHJlcXVlc3REYXRhOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IGV4aXN0ZWRFbWFpbDogYW55ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGRhdGEuUmVjaXBpZW50LmVudHJpZXMoKSkge1xyXG4gICAgICAgIGV4aXN0ZWRFbWFpbC5wdXNoKHZhbHVlLkVtYWlsQWRkcmVzcyk7XHJcbiAgICB9XHJcbiAgICBmb3IoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgcmVjaXBpZW50LnNwbGl0KFwiLFwiKS5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZighZXhpc3RlZEVtYWlsLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBkYXRhLlJlY2lwaWVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIEVtYWlsSWQ6IGRhdGEuUmVjaXBpZW50Lmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgICAgICBGdWxsTmFtZTp2YWx1ZS5zdWJzdHIoMCx2YWx1ZS5pbmRleE9mKFwiQFwiKSksXHJcbiAgICAgICAgICAgICAgICBFbWFpbEFkZHJlc3M6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgSGlkZGVuOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGRhdGEuUmVjaXBpZW50Lmxlbmd0aCAhPT0gZXhpc3RlZEVtYWlsLmxlbmd0aCkge1xyXG4gICAgICAgIHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgICBmb2xkZXI6IHNjYWRhV2ViRGF0YUZvclJlcG9ydCxcclxuICAgICAgICAgICAgZmlsZW5hbWU6XCJlbWFpbHNldHRpbmcuanNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhLCBcIndyaXRlU2NhZGFXZWJEYXRhXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIHJlcG9ydENvbmZpZ1N5bmMocmVxdWVzdERhdGEsIFwid3JpdGVTY2FkYVdlYkRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgaXMgc3VjY2Vzc2Z1bGx5IGFkZGVkLlwiKTtcclxuICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkVtYWlsIGlzIHN1Y2Nlc3NmdWxseSBhZGRlZC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdGF0dXMuZXJyb3JfbXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNvY2tldENsb3NlXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZXJyb3JcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJGYWlsZWQgdG8gc2F2ZSBlbWFpbCByZWNpcGllbnQuIFwiICsgc3RhdHVzLmVycm9yX21zZ30sIFwibG9nXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cy5lcnJvcl9tc2csIFwiZXJyb3JcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyB3ZWJpeC5tZXNzYWdlKG1zZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZVN0YW1wKHRpbWVzdGFtcDogYW55KSB7XHJcbiAgICAvLyBhbGVydCh0aW1lc3RhbXApO1xyXG4gICAgY29uc3QgZDogYW55ID0gbmV3IERhdGUodGltZXN0YW1wICogMTAwMCk7XHJcbiAgICAvLyBhbGVydChkKTtcclxuICAgIHRpbWVzdGFtcCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJWQvJW0vJVkgJUg6JWk6JXMuJVNcIiwgZmFsc2UpKG5ldyBEYXRlKCkpO1xyXG4gICAgLy8gY29uc3QgeXl5eTogc3RyaW5nID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgLy8gY29uc3QgbW06IHN0cmluZyA9IChcIjBcIiArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gICAgLy8gY29uc3QgZGQ6IHN0cmluZyA9IChcIjBcIiArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgICAvLyB0aW1lc3RhbXAgPSBtbSArIFwiL1wiICsgZGQgKyBcIi9cIiArIHl5eXk7XHJcbiAgICAvLyBhbGVydCh0aW1lc3RhbXApO1xyXG4gICAgcmV0dXJuIHRpbWVzdGFtcDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVEaWZmZXJlbmNlKHNydGltZTogbnVtYmVyKSB7XHJcbiAgICBzcnRpbWUgPSB0eXBlb2Ygc3J0aW1lICE9PSBcInVuZGVmaW5lZFwiID8gc3J0aW1lIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYoaXNOYU4oc3J0aW1lKSkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coc3J0aW1lICsgXCIgXCIgKyBub3cpO1xyXG4gICAgbGV0IG1pbGlzZWNEaWZmOiBudW1iZXIgPSAwO1xyXG4gICAgc3J0aW1lIDwgbm93ID8gbWlsaXNlY0RpZmYgPSBub3cgLSBzcnRpbWUgOiBtaWxpc2VjRGlmZiA9IHNydGltZSAtIG5vdztcclxuICAgIGNvbnN0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3IobWlsaXNlY0RpZmYgLyAxMDAwIC8gNjAgLyAoNjAgKiAyNCkpO1xyXG4gICAgY29uc3QgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoKG1pbGlzZWNEaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgY29uc3QgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcigobWlsaXNlY0RpZmYgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuXHJcbiAgICBjb25zdCBkYXRlRGlmZjogRGF0ZSA9IG5ldyBEYXRlKG1pbGlzZWNEaWZmKTtcclxuXHJcbiAgICByZXR1cm4gZGF5cyArIFwiZFwiKyBob3VycyArIFwiaFwiICsgbWludXRlcyArIFwibWluXCI7IC8vICArIGRhdGVEaWZmLmdldFNlY29uZHMoKSArIFwic2VjXCJcclxuICAgIC8vIHJldHVybiBkYXlzICsgXCJkXCIrIGRhdGVEaWZmLmdldEhvdXJzKCkgKyBcImhcIiArIGRhdGVEaWZmLmdldE1pbnV0ZXMoKSArIFwibWluXCI7IC8vICArIGRhdGVEaWZmLmdldFNlY29uZHMoKSArIFwic2VjXCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUaW1lc3RhbXBUb1JlcG9ydEZvcm1hdCh0aW1lc3RhbXA6IHN0cmluZykge1xyXG4gICAgLy8gSW4gd2xkYXRhc2VydmVyLCBpZiB3ZSB1c2UgY29udmVydChTcmNUaW1lKSwgaXQgd2lsbCByZXR1cm4gdXAgdG8gXCJ0aW1lc3RhbXBfdXBfdG9fc2Vjb25kLm1pY3Jvc2Vjb25kXCIgaS5lLiBcIjE1MjQxODk4NjUuNzk4MDAwXCIsIHdoZXJlYXMgamF2YXNjcmlwdCB1bmFibGUgdG8gcmVhZCB1cCB0byBtaWNyb3NlY29uZFxyXG4gICAgLy8gMTUyNDE4OTg2NSAodXAgdG8gc2Vjb25kKVxyXG4gICAgLy8gNzk4MDAwIChtaWNyb3NlY29uZClcclxuICAgIC8vIDc5ODAwMC8xMDAwID0gNzg5IChtaWxpc2Vjb25kKVxyXG4gICAgLy8gMTUyNDE4OTg2NTc5OCAodXAgdG8gbWlsaXNlY29uZClcclxuICAgIC8vIHRodXMsIHdlIG5lZWQgdG8gcmVmb3JtYXQgdGhlIHRpbWVzdGFtcCByZXR1cm4gYnkgd2xkYXRhc2VydmVyXHJcbiAgICAvLyAxNTUxMDkyNjI4LjkwMDAgPSAyNS8wMi8yMDE5IDE5OjAzOjQ4LjAwOVxyXG4gICAgLy8gMTU1MTA5MjYyNi45MTAwMCA9IDI1LzAyLzIwMTkgMTk6MDM6NDYuMDkxXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aW1lc3RhbXApO1xyXG4gICAgY29uc3QgdGltZXN0YW1wQXJyYXk6IGFueSA9IHRpbWVzdGFtcC5zcGxpdChcIi5cIik7IC8vIGkuZS4gMTUyNDE4OTg2NS43OTgwMDBcclxuICAgIGNvbnN0IGNjeXltbWRkaGhtbXNzOiBzdHJpbmcgPSB0aW1lc3RhbXBBcnJheVswXTsgLy8gaS5lLiAxNTI0MTg5ODY1XHJcbiAgICBjb25zdCBjY3l5bW1kZGhobW1zc0Q6IERhdGUgPSBuZXcgRGF0ZShOdW1iZXIoY2N5eW1tZGRoaG1tc3MpICogMTAwMCk7IC8vIGkuZS4gRnJpIEFwciAyMCAyMDE4IDEwOjA0OjI1IEdNVCswODAwIChNYWxheXNpYSBUaW1lKSAtPiB3aXRob3V0IG1pbGlzZWNvbmQvbWljcm9zZWNvbmQgKC4wMDAwMDApXHJcbiAgICBjb25zdCBTU1NVVVU6IG51bWJlciA9IE51bWJlcih0aW1lc3RhbXBBcnJheVsxXSk7IC8vIGkuZS4gNzk4MDAwIC0+IHVwIHRvIG1pY3Jvc2Vjb25kXHJcbiAgICAvLyBjb25zdCBTU1M6IG51bWJlciA9IE51bWJlcihTU1NVVVUpLzEwMDA7IC8vIGkuZS43ODkgLT4gY29udmVydCBtaWNyb3NlY29uZCBpbnRvIG1pbGlzZWNvbmRzLCA2ODIwNTYgLT4gNjgyLjA1Niwgc3RpbGwgd29ya2luZyB3aXRoIHNldE1pbGlzZWNvbmRzKClcclxuICAgIGNvbnN0IFNTUzogbnVtYmVyID0gTWF0aC5mbG9vcihOdW1iZXIoU1NTVVVVKS8xMDAwKTsgLy8gaS5lLklmIGRpdmlzaW9uLzEwMDAgPSA2ODIuMDU2LCB3aXRoIG1hdGguZmxvb3IsIFNTUyA9IDY4MlxyXG4gICAgY29uc3QgY2N5eW1tZGRoaG1tc3NTU1NEOiBudW1iZXIgPSBjY3l5bW1kZGhobW1zc0Quc2V0TWlsbGlzZWNvbmRzKFNTUyk7IC8vIFNldCBtaWxpc2Vjb25kIHRvIGNjeXltbWRkaGhtbXNzRFxyXG4gICAgLy8gY29uc29sZS5sb2coU1NTVVVVKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFNTUyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjY3l5bW1kZGhobW1zc0QpO1xyXG4gICAgLy8gY29uc29sZS5sb2coTnVtYmVyKHRpbWVzdGFtcEFycmF5WzBdKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjY3l5bW1kZGhobW1zc0Quc2V0TWlsbGlzZWNvbmRzKFNTUykpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoYikpO1xyXG4gICAgLy8gY29uc29sZS5sb2cod2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZC8lbS8lWSAlSDolaTolcy4lU1wiLCBmYWxzZSkobmV3IERhdGUoYikpKTtcclxuICAgIC8vIHJldHVybiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVkLyVtLyVZICVIOiVpOiVzLiVTXCIsIGZhbHNlKShuZXcgRGF0ZShjY3l5bW1kZGhobW1zc1NTU0QpKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZShjY3l5bW1kZGhobW1zc1NTU0QpO1xyXG4gICAgLy8gcmV0dXJuIG15RGF0ZS50b0dNVFN0cmluZygpO1xyXG4gICAgLy8gcmV0dXJuIG15RGF0ZS50b0xvY2FsZVN0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUaW1lKCkge1xyXG4gICAgcmV0dXJuIHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJWQvJW0vJVkgJUg6JWk6JXNcIiwgZmFsc2UpKG5ldyBEYXRlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUaW1lQ0NZWV9NTV9ERCgpIHtcclxuICAgIHJldHVybiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXyVtXyVkXCIsIGZhbHNlKShuZXcgRGF0ZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUaW1lc3RhbXBUb0NDWVlNTURESEgoZGF0ZVN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjY3l5bW1kZDogc3RyaW5nID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoXCIlWSVtJWQwMFwiLCBmYWxzZSkoZGF0ZVN0cik7XHJcbiAgICByZXR1cm4gY2N5eW1tZGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhUXVhbGl0eURlc2MoZHE6IG51bWJlcikge1xyXG4gICAgbGV0IGRxRGVzYzogc3RyaW5nID0gXCJcIjtcclxuICAgIHN3aXRjaChkcSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJOb3JtYWxcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIk1hbnVhbGx5IFNldFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiQmxvY2tlZFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiVGFnZ2VkXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJUZWxlbSBGYWlsXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiVGVzdCBNb2RlXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiQ2FsY3VsYXRpb24gRmFpbFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDY0OlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIkxpbmsgRmFpbFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEyODpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJQb2ludCBGYXVsdFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI1NjpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJBbGFybSBJbmhpYml0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTEyOlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIlVucmVhc29uYWJsZVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEwMjg6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiRm9yY2UgVG8gWmVyb1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDIwMTg6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiTm90IFJlZnJlc2hcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJVbmtub3duXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHFEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGbGFnQWNrKGZsYWdBY2s6IG51bWJlcikge1xyXG4gICAgbGV0IGZsYWdBY2tEZXNjOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3dpdGNoKGZsYWdBY2spIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGZsYWdBY2tEZXNjID0gXCJVbmFja1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGZsYWdBY2tEZXNjID0gXCJBY2tcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxhZ0Fja0Rlc2M7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGFybVR5cGUoYWxhcm1UeXBlOiBudW1iZXIpIHtcclxuICAgIGxldCBhbGFybVR5cGVEZXNjOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3dpdGNoKGFsYXJtVHlwZSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgYWxhcm1UeXBlRGVzYyA9IFwiQWxhcm1cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBhbGFybVR5cGVEZXNjID0gXCJFdmVudFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGFsYXJtVHlwZURlc2MgPSBcIlN5c3RlbSBFcnJvclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGFsYXJtVHlwZURlc2MgPSBcIkFwcGxpY2F0aW9uIEVycm9yXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGFsYXJtVHlwZURlc2MgPSBcIi1cIjtcclxuICAgIH1cclxuICAgIHJldHVybiBhbGFybVR5cGVEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGdldFNpZGVNZW51TGlzdDogYW55ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlM1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uZGF0YS5kYXRhLCBudWxsLCBcIiBcIikpO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGE6IGFueSA9IGpzb25kYXRhLmRhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc3QgbWVudW9wdGlvbnM6IGFueSA9IFtcclxuICAgICAgICAgICAge2lkOiBcIlBlcm1pc3Npb25cIiwgdmFsdWU6IFwiUGVybWlzc2lvblwiLCBpY29uOlwicGx1Z1wiLCBmaWxlbmFtZTpcImRldmljZXNyZXBvcnRcIn0sXHJcbiAgICAgICAgICAgIHtpZDogXCJDb21tdW5pY2F0aW9uXCIsIHZhbHVlOiBcIkNvbW11bmljYXRpb25cIiwgaWNvbjpcInNpdGVtYXBcIiwgZmlsZW5hbWU6XCJjb21tcmVwb3J0XCJ9LFxyXG4gICAgICAgICAgICB7aWQ6IFwiSU9cIiwgdmFsdWU6XCJJT1wiLCBpY29uOlwibWljcm9jaGlwXCIsIGZpbGVuYW1lOlwiaW9yZXBvcnRcIn0sXHJcbiAgICAgICAgICAgIHtpZDogXCJBbGFybSBIaXN0b3J5IEpvdXJuYWxcIiwgdmFsdWU6XCJBbGFybSBIaXN0b3J5IEpvdXJuYWxcIiwgaWNvbjpcImJlbGxcIiwgZmlsZW5hbWU6XCJhbGFybWhpc3Rvcnlqb3VybmFscmVwb3J0XCJ9XHJcbiAgICAgICAgXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW51b3B0aW9uc1s0XSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5DdXN0b21SZXBvcnQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVvcHRpb25zWzRdLmRhdGEpO1xyXG4gICAgICAgICg8d2ViaXgudWkuc2lkZWJhcj53ZWJpeC4kJChcInNpZGVNZW51TGlzdFwiKSkucGFyc2UobWVudW9wdGlvbnMsIFwianNvblwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBhcnNlIHN1Y2Nlc3NmdWxsXCIpO1xyXG4gICAgICAgICg8d2ViaXgudWkuc2lkZWJhcj53ZWJpeC4kJChcInNpZGVNZW51TGlzdFwiKSkucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVmcmVzaCBzaWRlIG1lbnVcIik7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGNvbnZlcnRXZWJpeFNRTHRvUkRCTVM6IGFueSA9IGZ1bmN0aW9uKHNxbDogc3RyaW5nKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJhbmNlcywgdGh1cywgd2UgdXNlIHJlZ2V4XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvXCIvZywgXCInXCIpO1xyXG4gICAgcmV0dXJuIHNxbDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgY29udmVydFNRTHRvUlREQjogYW55ID0gZnVuY3Rpb24oc3FsOiBzdHJpbmcpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICAvLyByZXBsYWNlIGFsbCBvY2N1cmFuY2VzLCB0aHVzLCB3ZSB1c2UgcmVnZXhcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9cIi9nLCBcIidcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoLz0vZywgXCI9PVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvIT09L2csIFwiIT1cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoL0xJS0VcXCgnJS9nLCBcIj09JypcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoL0xJS0VcXCgvZywgXCI9PVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvJSdcXCkvZywgXCIqJ1wiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvJ1xcKS9nLCBcIidcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoL0lTIE5VTEwvZywgXCI9PScnXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9JUyBOT1QgTlVMTC9nLCBcIiE9JydcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoL05PVCAvZywgXCIhXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9jb252ZXJ0Q2hvaWNlfGNvbnZlcnRUaW1lfGNvbnZlcnRVc2VyfGNvbnZlcnRTdWZmaXh8XFwofFxcKS9naSwgZnVuY3Rpb24oc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIC8vIFRPRE86IGhvdyB0byBoYW5kbGUgaWYgc3FrIGluY2x1ZGUgU3JjVGltZT8gYmVjYXVzZSBSVERCIG9ubHkgYWNjZXB0IGRhdGUgaW4gdGltZXN0YW1wXHJcbiAgICByZXR1cm4gc3FsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjYWRhV2ViRGF0YUZvclJlcG9ydDogYW55ID0gW1wid3JlcG9ydFwiLFwiY29uZmlnXCJdO1xyXG5leHBvcnQgY29uc3Qgc2NhZGFXZWJGb3JSZXBvcnQ6IGFueSA9IFtcImNsaWVudFwiLCBcIndyZXBvcnRcIiwgXCJjb25maWdcIl07XHJcbmV4cG9ydCBjb25zdCB3cmVwb3J0aG9zdG5hbWU6IGFueSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIj8gXCIxMjcuMC4wLjFcIjogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuYWxvZ0Zvcm11bGE6IGFueSA9IFtcclxuICAgIHtpZDogXCJBVkdWQUxVRVwiLCB2YWx1ZTpcIkFWR1ZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIkFWR1ZBTFVFUE9TXCIsIHZhbHVlOlwiQVZHVkFMVUVQT1NcIn0sXHJcbiAgICB7aWQ6IFwiQ09OU1VNUFRJT05WQUxVRVwiLCB2YWx1ZTpcIkNPTlNVTVBUSU9OVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiRVhBQ1RIT1VSUkVBRElOR1wiLCB2YWx1ZTpcIkVYQUNUSE9VUlJFQURJTkdcIn0sXHJcbiAgICB7aWQ6IFwiRklSU1RSRUFESU5HXCIsIHZhbHVlOlwiRklSU1RSRUFESU5HXCJ9LFxyXG4gICAge2lkOiBcIk1BWFZBTFVFXCIsIHZhbHVlOlwiTUFYVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiTUlOVkFMVUVcIiwgdmFsdWU6XCJNSU5WQUxVRVwifSxcclxuICAgIHtpZDogXCJNSU5WQUxVRVBPU1wiLCB2YWx1ZTpcIk1JTlZBTFVFUE9TXCJ9LFxyXG4gICAge2lkOiBcIk5FR0RJRkZBQ0NNXCIsIHZhbHVlOlwiTkVHRElGRkFDQ01cIn0sXHJcbiAgICB7aWQ6IFwiUE9TRElGRkFDQ01cIiwgdmFsdWU6XCJQT1NESUZGQUNDTVwifSxcclxuICAgIHtpZDogXCJUT1RBTElaRVJcIiwgdmFsdWU6XCJUT1RBTElaRVJcIn0sXHJcbiAgICB7aWQ6IFwiVE9UQUxWQUxVRVwiLCB2YWx1ZTpcIlRPVEFMVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiVkFMVUVUT0RBVEVcIiwgdmFsdWU6XCJWQUxVRVRPREFURVwifVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuYWxvZ0Zvcm11bGFZZWFybHk6IGFueSA9IFtcclxuICAgIHtpZDogXCJBVkdWQUxVRVwiLCB2YWx1ZTpcIkFWR1ZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIkNPTlNVTVBUSU9OVkFMVUVcIiwgdmFsdWU6XCJDT05TVU1QVElPTlZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIk1BWFZBTFVFXCIsIHZhbHVlOlwiTUFYVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiTUlOVkFMVUVcIiwgdmFsdWU6XCJNSU5WQUxVRVwifSxcclxuICAgIHtpZDogXCJUT1RBTFZBTFVFXCIsIHZhbHVlOlwiVE9UQUxWQUxVRVwifSxcclxuICAgIHtpZDogXCJWQUxVRVRPREFURVwiLCB2YWx1ZTpcIlZBTFVFVE9EQVRFXCJ9XHJcbl07XHJcblxyXG5leHBvcnQgbGV0IHJlZHVuZGFudFNlcnZlcjogYW55ID0gW107XHJcbmV4cG9ydCBsZXQgZGVjaW1hbFBvaW50OiBhbnkgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlQYWRkcmVzcyhpbnB1dFRleHQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXBmb3JtYXQ6IGFueSA9IC9eKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykkLztcclxuICAgIGlmKGlucHV0VGV4dC5tYXRjaChpcGZvcm1hdCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0Q29uZmlnU3luYyhyZXF1ZXN0RGF0YTogYW55LCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBvcnRDb25maWdTeW5jXCIpO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiByZWR1bmRhbnRTZXJ2ZXIuZW50cmllcygpKSB7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YSwgYWN0aW9uLCB2YWx1ZSwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTI6IGFueSkge1xyXG4gICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiU3luYyAoXCIrIGFjdGlvbiArIFwiKSBhdCBcIiArIHZhbHVlICsgXCIgc3VjY2Vzc2Z1bGwuIFwiLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZGVidWdcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJTeW5jIChcIisgYWN0aW9uICsgXCIpIGF0IFwiICsgdmFsdWUgKyBcIiBzdWNjZXNzZnVsbC4gXCJ9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTeW5jIGF0IFwiICsgdmFsdWUgKyBcIiBmYWlsZWQuIFwiICsgc3RhdHVzLmVycm9yX21zZyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJlbWFpbGxvZ1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImVycm9yXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiU3luYyAoXCIrIGFjdGlvbiArIFwiKSBhdCBcIiArIHZhbHVlICsgXCIgZmFpbGVkLiBcIiArIHN0YXR1cy5lcnJvcl9tc2d9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMuZXJyb3JfbXNnLCBcImVycm9yXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdGF0ZShhcHA6IGFueSkge1xyXG4gICAgY29uc3Qgc2VydmljZTogYW55ID0ge1xyXG4gICAgICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFN0YXRlKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdGU6MFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdGVcIiwgc2VydmljZSk7XHJcbn1cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4udHNcIixcblx0XCIuL2VuLnRzXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4udHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaG9tZVwiOiBcIi4vc291cmNlcy92aWV3cy9ob21lLnRzXCIsXG5cdFwiLi9ob21lLnRzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2hvbWUudHNcIixcblx0XCIuL2xheW91dFwiOiBcIi4vc291cmNlcy92aWV3cy9sYXlvdXQudHNcIixcblx0XCIuL2xheW91dC50c1wiOiBcIi4vc291cmNlcy92aWV3cy9sYXlvdXQudHNcIixcblx0XCIuL3NpZGViYXJcIjogXCIuL3NvdXJjZXMvdmlld3Mvc2lkZWJhci50c1wiLFxuXHRcIi4vc2lkZWJhci50c1wiOiBcIi4vc291cmNlcy92aWV3cy9zaWRlYmFyLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy92aWV3cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQge2lwQWRkcn0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQge2RldmljZVJlcG9ydEluaXR9IGZyb20gXCIuLi9jb250cm9sbGVyL2Nob21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VzUmVwb3J0IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBwdWJsaWMgdXNlckNyZWRlbnRpYWxzOiBhbnkgPSB7fTtcclxuICAgIHB1YmxpYyBjb25maWcoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldmljZXNyZXBvcnQ6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOlwiZGV2aWNlc2xheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgdmlldzpcImRhdGFsYXlvdXRcIixcclxuICAgICAgICAgICAgICAgIC8vIHR5cGU6XCJzcGFjZVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo1LFxyXG4gICAgICAgICAgICAgICAgcm93czpbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6NDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcmxlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZTpcImNsZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbHM6W1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlZGVzY1wiLHZpZXc6XCJ0ZW1wbGF0ZVwiLHRlbXBsYXRlOlwiPGI+LTwvYj5cIix3aWR0aDoxNTAsYm9yZGVybGVzczp0cnVlLCB0eXBlOlwiY2xlYW5cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcm93czpbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtpZDpcImRldmljZXRvdGFsYW5hbG9ncG9pbnRcIix2aWV3OlwidGVtcGxhdGVcIix3aWR0aDoyMDAsYm9yZGVybGVzczp0cnVlLCB0eXBlOlwiY2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRvdGFsIEFuYWxvZyBQb2ludCBcIiArIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge2lkOlwiZGV2aWNldG90YWxkaWdpdGFscG9pbnRcIix2aWV3OlwidGVtcGxhdGVcIix3aWR0aDoyMDAsYm9yZGVybGVzczp0cnVlLCB0eXBlOlwiY2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRvdGFsIERpZ2l0YWwgUG9pbnQgXCIgKyBjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZXNlYXJjaFwiLCB2aWV3Olwic2VhcmNoXCIsIGhlaWdodDoxMCwgZmlsbHNwYWNlOnRydWUsIGtleVByZXNzVGltZW91dDoxMDAsIHBsYWNlaG9sZGVyOlwiU2VhcmNoIGZyb20gdGhlIHRhYmxlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlZmlsdGVyXCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcImZpbHRlclwiLCB3aWR0aDozMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7aWQ6XCJkZXZpY2VzYXZlZmlsdGVyXCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcInNhdmVcIiwgd2lkdGg6MzB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlbGlzdFwiLCB2aWV3OlwiY29tYm9cIiwgbWF4V2lkdGg6MjgwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWNhdGVnb3J5XCIsIHZpZXc6XCJjb21ib1wiLCBtYXhXaWR0aDoxNTB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlZ2VuZXJhdGVcIiwgdmlldzpcImJ1dHRvblwiLCB0eXBlOlwiaWNvbkJ1dHRvblwiLCBpY29uOlwiZmlsZVwiLCBsYWJlbDpcIkdlbmVyYXRlIFJlcG9ydFwiLCBtYXhXaWR0aDoxMjV9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlcHJpbnRcIiwgdmlldzpcImJ1dHRvblwiLCB0eXBlOlwiaWNvblwiLCBpY29uOlwicHJpbnRcIiwgd2lkdGg6MzB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlZXhwb3J0XCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcImRvd25sb2FkXCIsIHdpZHRoOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWVtYWlsXCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcImVudmVsb3BlXCIsIHdpZHRoOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xzOltcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByb3dzOltcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQ6XCJkZXZpY2V0aXRsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmlldzpcInRlbXBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOlwiJHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpcIjxiPlRpdGxlPC9iPjogI3RpdGxlIyAjZGV2aWNlI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYWRqdXN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBhdXRvd2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJjbGVhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkOlwiZGV2aWNlZGF0YXNvdXJjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmlldzpcInRlbXBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOlwiJHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpcIjxiPkRhdGEgU291cmNlPC9iPjogI2RhdGFzb3VyY2UjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDo1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOlwiY2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZDpcImRldmljZWdlbmVyYXRlZHRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXc6XCJ0ZW1wbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIiR2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6XCI8Yj5HZW5lcmF0ZWQgT248L2I+OiAjZ2VuZXJhdGVkZGF0ZSNcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOjUwMCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJjbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOmZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJvd3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQ6XCJkZXZpY2VzZWFyY2hmaWx0ZXJjb25kaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXc6XCJ0ZW1wbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6XCI8Yj5TZWFyY2gvRmlsdGVyIENvbmRpdGlvbjwvYj46IC1cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0NixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJjbGVhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWQ6XCJkZXZpY2VhbmFsb2dkYXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpZXc6XCJkYXRhdGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc2l6ZUNvbHVtbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNpemVSb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3BhbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHNjaGVtZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAkaW5pdDpmdW5jdGlvbihvYmo6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAvLyBjb252ZXJ0IGRhdGUgc3RyaW5ncyB0byBkYXRlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgb2JqW1wiY29udmVydFRpbWUoU3JjVGltZSlcIl0gPSB3ZWJpeC5EYXRlLnN0clRvRGF0ZShcIiVkLyVtLyVZICVIOiVpOiVzLiVTXCIsIGZhbHNlKShvYmpbXCJjb252ZXJ0VGltZShTcmNUaW1lKVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGE6W1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6XCItXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRldmljZTpcIi1cIixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGF0YXNvdXJjZTpcIi1cIixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ2VuZXJhdGVkZGF0ZTogXCItXCJcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VzcmVwb3J0O1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KHZpZXc6IGFueSwgdXJsOiBhbnkpIHtcclxuICAgICAgICAgICAgZGV2aWNlUmVwb3J0SW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi4vdmlld3Mvc2lkZWJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRMYXlvdXQgZXh0ZW5kcyBKZXRWaWV3IHtcbiAgICBwdWJsaWMgY29uZmlnKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgICAgIGNvbnN0IHVpOiBhbnkgPSB7XG4gICAgICAgICAgICBpZDpcInNjcm9sbHZpZXdcIixcbiAgICAgICAgICAgIHZpZXc6XCJzY3JvbGx2aWV3XCIsXG4gICAgICAgICAgICBzY3JvbGw6XCJ4eVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHJvd3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCJ0b29sYmFyXCIsIHZpZXc6IFwidG9vbGJhclwiLCByZXNwb25zaXZlOlwidG9vbGJhclwiLCBzdWJNZW51UG9zOlwicmlnaHRcIiwgbGF5b3V0OlwieVwiLCBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDpcInJlcG9ydG1haW50b29sYmFyc2lkZW1lbnVpY29uXCIsdmlldzogXCJidXR0b25cIiwgdHlwZTogXCJpY29uXCIsIGljb246IFwiaG9tZVwiLCBhbGlnbjpcImxlZnRcIiwgd2lkdGg6MzAsIGNsaWNrOlwiJCQoJ3NpZGVNZW51TGlzdCcpLnRvZ2dsZSgpO1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCJtZW51XCIsIHZpZXc6XCJtZW51XCIsIGRhdGE6W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCIxXCIsIHZhbHVlOlwiQWJvdXQgVXNcIiwgc3VibWVudTpbXCJPdXIgTmFtZVwiLCBcIk91ciBIaXN0b3J5XCIsIFwiT3VyIE1pc3Npb25cIl19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCIyXCIsIHZhbHVlOlwiT3VyIFNlcnZpY2VzXCIsIHN1Ym1lbnU6W1wiUm9vbVwiLCBcIkxhdW5kcnlcIiwgXCJDZW5kYW5hIE1hcnRcIl19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCIzXCIsIHZhbHVlOlwiUm9vbXNcIiwgc3VibWVudTpbXCJEYWlzeVwiLCBcIkNhdGVycGlsYXJcIiwgXCJCbG9zc29tXCIsIFwiUGluZVwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDpcIjRcIiwgdmFsdWU6XCJDb250YWN0IFVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVudUl0ZW1DbGljazpmdW5jdGlvbihpZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiQ2xpY2s6IFwiK3RoaXMuZ2V0TWVudUl0ZW0oaWQpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNpZ246dHJ1ZSwgaGVpZ2h0OjUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2lkOlwibG9nb1wiLCB0ZW1wbGF0ZTpcImxvZ29cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2aWV3OlwiYnV0dG9uXCIsIHR5cGU6XCJpY29uVG9wXCIsIGljb246XCJtb2JpbGVcIiwgbGFiZWw6XCIrNjI4MTM0NTY3ODk5XCIsIHdpZHRoOjEwMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmlldzpcImJ1dHRvblwiLCB0eXBlOlwiaWNvblwiLCBpY29uOlwiZmFjZWJvb2tcIiwgd2lkdGg6ODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcIndoYXRzYXBwXCIsIHdpZHRoOjgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOlwiZmFjZWJvb2tcIix2aWV3OiBcImJ1dHRvblwiLCB0eXBlOiBcImljb25cIiwgaWNvbjogXCJob21lXCIsIGFsaWduOlwibGVmdFwiLCB3aWR0aDozMCwgY2xpY2s6XCIkJCgnc2lkZU1lbnVMaXN0JykudG9nZ2xlKCk7XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDpcInN5c3RlbWRhdGVcIiwgdmlldzpcImxhYmVsXCIsIGxhYmVsOndlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJUQgfCAlZCAlRiAlWSAlSDolaTolc1wiLCBmYWxzZSkobmV3IERhdGUoKSksIGFsaWduOlwicmlnaHRcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwiY2Fyb3VzZWxcIiwgdmlldzpcImNhcm91c2VsXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxTcGVlZDogXCI4MDBtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMTAwLCBoZWlnaHQ6ODQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbjogXCJtaWRkbGVcIiwgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjc3M6XCJpbWFnZVwiLCB0ZW1wbGF0ZTppbWcsIGRhdGE6e3NyYzpcImltYWdlcy9sYW1yZXVuZzEuanBnXCIsIHRpdGxlOiBcIkltYWdlIDFcIn19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NzczpcImltYWdlXCIsIHRlbXBsYXRlOmltZywgZGF0YTp7c3JjOlwiaW1hZ2VzL2xhbXJldW5nMi5qcGdcIiwgdGl0bGU6IFwiSW1hZ2UgMlwifX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3NzOlwiaW1hZ2VcIiwgdGVtcGxhdGU6aW1nLCBkYXRhOntzcmM6XCJpbWFnZXMvbGFtcmV1bmczLmpwZ1wiLCB0aXRsZTogXCJJbWFnZSAzXCJ9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjc3M6XCJpbWFnZVwiLCB0ZW1wbGF0ZTppbWcsIGRhdGE6e3NyYzpcImltYWdlcy9sYW1yZXVuZzQuanBnXCIsIHRpdGxlOiBcIkltYWdlIDRcIn19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NzczpcImltYWdlXCIsIHRlbXBsYXRlOmltZywgZGF0YTp7c3JjOlwiaW1hZ2VzL2xhbXJldW5nNS5qcGdcIiwgdGl0bGU6IFwiSW1hZ2UgNVwifX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3NzOlwiaW1hZ2VcIiwgdGVtcGxhdGU6aW1nLCBkYXRhOntzcmM6XCJpbWFnZXMvbGFtcmV1bmc2LmpwZ1wiLCB0aXRsZTogXCJJbWFnZSA2XCJ9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjc3M6XCJpbWFnZVwiLCB0ZW1wbGF0ZTppbWcsIGRhdGE6e3NyYzpcImltYWdlcy9sYW1yZXVuZzcuanBnXCIsIHRpdGxlOiBcIkltYWdlIDdcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2lkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwiY29udGVudFwiLCB2aWV3OlwidGV4dFwiLCB2YWx1ZTpcIk91ciBSb29tc1wiLCBoZWlnaHQ6MTAwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDpcImZvb3RlclwiLCB2aWV3OlwidGV4dFwiLCB2YWx1ZTpcImZvb3RlclwiLCBoZWlnaHQ6NDAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHNldCBpbnRlcnZhbCB0byB1cGRhdGUgc3lzdGVtIHRpbWVcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiQkKFwic3lzdGVtZGF0ZVwiKS5zZXRWYWx1ZSh3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVEIHwgJWQgJUYgJVkgJUg6JWk6JXNcIiwgZmFsc2UpKG5ldyBEYXRlKCkpKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBmdW5jdGlvbiBpbWcob2JqOmFueSl7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJytvYmouc3JjKydcIiBjbGFzcz1cImNvbnRlbnRcIiBvbmRyYWdzdGFydD1cInJldHVybiBmYWxzZVwiLz4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1aTtcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xuaW1wb3J0IHtnZXRTaWRlTWVudUxpc3R9IGZyb20gXCIuLi9jb250cm9sbGVyL3JlcG9ydENvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0VGFiVmlldyBleHRlbmRzIEpldFZpZXcge1xuICAgIHByaXZhdGUgdXNlcjoge307XG4gICAgcHVibGljIGNvbmZpZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcbiAgICAgICAgLy8gZ2V0U2lkZU1lbnVMaXN0KCk7XG4gICAgICAgIGNvbnN0IHNpZGViYXI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICByb3dzOltcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCJyZXBvcnRtYWludG9vbGJhclwiLCB2aWV3OiBcInRvb2xiYXJcIiwgcmVzcG9uc2l2ZTpcInJlcG9ydG1haW50b29sYmFyXCIsIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOlwicmVwb3J0bWFpbnRvb2xiYXJzaWRlbWVudWljb25cIix2aWV3OiBcImJ1dHRvblwiLCB0eXBlOiBcImljb25cIiwgaWNvbjogXCJiYXJzXCIsIGFsaWduOlwibGVmdFwiLCB3aWR0aDozMCwgY2xpY2s6XCIkJCgnc2lkZU1lbnVMaXN0JykudG9nZ2xlKCk7XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDpcInJlcG9ydG1haW50b29sYmFyc3lzdGVtZGF0ZVwiLCB2aWV3OlwibGFiZWxcIiwgbGFiZWw6d2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlRCB8ICVkICVGICVZICVIOiVpOiVzXCIsIGZhbHNlKShuZXcgRGF0ZSgpKSwgYWxpZ246XCJyaWdodFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVwb3J0dmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sczpbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCJzaWRlTWVudUxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg6IDQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOnsgaGVpZ2h0OjgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRXZlbnREZWxheTogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgbG9naW4gcGFnZSBub3csIHNvLCB3ZSB3aWxsIHNlbGVjdCByZXBvcnQgb25jZSB0aGUgbG9naW4gaXMgc3VjY2Vzc2Z1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWZ0ZXJMb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbUlkOiBudW1iZXIgPSB0aGlzLmdldEZpcnN0SWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBhbGVydChmaXJzdEl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gd2ViaXguZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChmaXJzdEl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJHZW5lcmFsIFNldHRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCIxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIC8vIHRoaXMuc2VsZWN0KFwiTWFuYWdlIEN1c3RvbSBSZXBvcnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJNYW5hZ2UgU3VtbWFyeSBSZXBvcnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJBbGFybSBIaXN0b3J5IEpvdXJuYWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJFbWFpbCBTZXR0aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIC8vIHRoaXMuc2VsZWN0KFwiSU9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJEZXZpY2VzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIC8vIHRoaXMuc2VsZWN0KFwiQ29tbXVuaWNhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdENoYW5nZTogZnVuY3Rpb24oaWQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2V0SXRlbShpZCkuZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuYXBwLnNob3coXCIvbGF5b3V0L1wiICsgdGhpcy5nZXRJdGVtKGlkKS5maWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViaXguYWxlcnQoXCJObyByZXBvcnQgaXMgY29uZmlndXJlZCBpbiBcIiArIHRoaXMuZ2V0SXRlbShpZCkudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiBcImhvbWVcIiwgdmFsdWU6IFwiSG9tZVwiLCBpY29uOlwicGx1Z1wiLCBmaWxlbmFtZTpcImhvbWVcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IFwiYWJvdXQtdXNcIiwgdmFsdWU6IFwiQWJvdXQgQ2VuZGFuYSBIb3VzZVwiLCBpY29uOlwic2l0ZW1hcFwiLCBmaWxlbmFtZTpcImFib3V0LXVzXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiBcImdhbGxlcnlcIiwgdmFsdWU6XCJHYWxsZXJ5XCIsIGljb246XCJtaWNyb2NoaXBcIiwgZmlsZW5hbWU6XCJnYWxsZXJ5XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiBcImNvbnRhY3QtdXNcIiwgdmFsdWU6XCJBYm91dCBVc1wiLCBpY29uOlwiYmVsbFwiLCBmaWxlbmFtZTpcImNvbnRhY3QtdXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3VidmlldzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IGludGVydmFsIHRvIHVwZGF0ZSBzeXN0ZW0gdGltZVxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJCQoXCJyZXBvcnRtYWludG9vbGJhcnN5c3RlbWRhdGVcIikuc2V0VmFsdWUod2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlRCB8ICVkICVGICVZICVIOiVpOiVzXCIsIGZhbHNlKShuZXcgRGF0ZSgpKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9