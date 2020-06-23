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
const sidebar_1 = __webpack_require__(/*! ../views/sidebar */ "./sources/views/sidebar.ts");
class ReportLayout extends webix_jet_1.JetView {
    constructor() {
        super(...arguments);
        this.userCredentials = {};
    }
    config() {
        console.log("here");
        const ui = {
            id: "layout",
            padding: 10,
            margin: 10,
            rows: [
                {
                    cols: [
                        sidebar_1.default
                    ]
                }
            ]
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3d3ZWJyZXF1ZXN0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9jb250cm9sbGVyL2Nob21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZXMvY29udHJvbGxlci9yZXBvcnRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGVscGVycy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3M/ZDdjYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhEQUE4RCxlQUFlO0FBQzdFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxlQUFlO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFDQUFxQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCw4RUFBOEUsMkJBQTJCLGFBQWEsY0FBYyxJQUFJLEtBQUs7QUFDN0k7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHdDQUF3QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxrQ0FBa0MsS0FBSztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQVEsSUFBWSxNQUFNLENBQUM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwQkFBMEIsRUFBRTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LE1BQU0sRUFBRSxRQUFRLEVBQUMsWUFBWSxFQUFDOzZCQUMzRTt5QkFDSjt3QkFDRDs0QkFDSSxRQUFRLEVBQUUsSUFBSTt5QkFDakI7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKLENBQUM7UUFFTixxQ0FBcUM7UUFDckMsV0FBVyxDQUFDO1lBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFYixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUEzRUQsZ0NBMkVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZXMvYXBwLnRzXCIpO1xuIiwiY2xhc3MgTmF2aWdhdGlvbkJsb2NrZWQgeyB9XG5cbmNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UGFyYW0oaWQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZGF0YVtpZF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFBhcmFtKGlkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFyZW50VmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJCQoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QucXVlcnlWaWV3KChvYmogPT4gKG9iai5jb25maWcuaWQgPT09IGlkIHx8IG9iai5jb25maWcubG9jYWxJZCA9PT0gaWQpICYmXHJcbiAgICAgICAgICAgICAgICAob2JqLiRzY29wZSA9PT0gcm9vdC4kc2NvcGUpKSwgXCJzZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKG9iaiwgbmFtZSwgY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gb2JqLmF0dGFjaEV2ZW50KG5hbWUsIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHsgb2JqLCBpZCB9KTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb250YWlucyh2aWV3KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBraWQgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgaWYgKGtpZCA9PT0gdmlldyB8fCBraWQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViLnN1YnZpZXcudmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3SW5mbyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1tuYW1lIHx8IFwiZGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1YnZpZXc6IHN1YiwgcGFyZW50OiB0aGlzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzW25hbWVdID0geyB1cmw6IFwiXCIsIGlkOiBudWxsLCBwb3B1cDogdHJ1ZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBhIGNoaWxkIHZpZXcsIHNlYXJjaGVzIGZvciBuZWFyZXN0IHBhcmVudCB3aXRoIHN1YnZpZXdcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX2RldGFjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ub2JqLmRldGFjaEV2ZW50KGV2ZW50c1tpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lTdWJzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgc3ViIHZpZXdzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJWaWV3ID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIC8vIGl0IHBvc3NpYmxlIHRoYXQgc3VidmlldyB3YXMgbm90IGxvYWRlZCB3aXRoIGFueSBjb250ZW50IHlldFxyXG4gICAgICAgICAgICAvLyBzbyBjaGVjayBvbiBudWxsXHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJWaWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgIH1cclxuICAgIF9pbml0X3VybF9kYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLl9kYXRhLCB1cmwucGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuICAgIF9nZXREZWZhdWx0U3ViKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViLmJyYW5jaCAmJiBzdWIudmlldyAmJiBrZXkgIT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHN1Yi52aWV3Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcm91dGVkX3ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YiA9IHBhcmVudC5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgIGlmICghc3ViICYmIHN1YiAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQuX3JvdXRlZF92aWV3KCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gcGFyc2UodXJsKSB7XHJcbiAgICAvLyByZW1vdmUgc3RhcnRpbmcgL1xyXG4gICAgaWYgKHVybFswXSA9PT0gXCIvXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BsaXQgdXJsIGJ5IFwiL1wiXHJcbiAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIC8vIGZvciBlYWNoIHBhZ2UgaW4gdXJsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIC8vIGRldGVjdCBwYXJhbXNcclxuICAgICAgICAvLyBzdXBwb3J0IG9sZCBcdFx0XHRzb21lOmE9YjpjPWRcclxuICAgICAgICAvLyBhbmQgbmV3IG5vdGF0aW9uXHRcdHNvbWU/YT1iJmM9ZFxyXG4gICAgICAgIGxldCBwb3MgPSB0ZXN0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRlc3QuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRlc3Quc3Vic3RyKHBvcyArIDEpLnNwbGl0KC9bXFw6XFw/XFwmXS9nKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGhhc2ggb2YgbmFtZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkY2h1bmsgPSBwYXJhbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZGNodW5rWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChkY2h1bmtbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN0b3JlIHBhcnNlZCB2YWx1ZXNcclxuICAgICAgICBjaHVua3NbaV0gPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IChwb3MgPiAtMSA/IHRlc3Quc3Vic3RyKDAsIHBvcykgOiB0ZXN0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGlzTmV3OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBwYWdlIG9iamVjdHNcclxuICAgIHJldHVybiBjaHVua3M7XHJcbn1cclxuZnVuY3Rpb24gdXJsMnN0cihzdGFjaykge1xyXG4gICAgY29uc3QgdXJsID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIHN0YWNrKSB7XHJcbiAgICAgICAgdXJsLnB1c2goXCIvXCIgKyBjaHVuay5wYWdlKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmoyc3RyKGNodW5rLnBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICB1cmwucHVzaChcIj9cIiArIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybC5qb2luKFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIG9iajJzdHIob2JqKSB7XHJcbiAgICBjb25zdCBzdHIgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKFwiJlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcclxufVxuXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnNlKHJvdXRlKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJvdXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIHRoaXMuX25leHRdO1xyXG4gICAgfVxyXG4gICAgc3VidXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUodGhpcy5yb3V0ZSwgdGhpcy5pbmRleCArIHRoaXMuX25leHQpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSB1cmwyc3RyKHRoaXMuc3VidXJsKCkpO1xyXG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3Vic3RyKDEpIDogXCJcIjtcclxuICAgIH1cclxuICAgIF9qb2luKHBhdGgsIGtpZHMpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IG51bGwpIHsgLy8gY2hhbmdlIG9mIHBhcmFtZXRlcnMsIHJvdXRlIGVsZW1lbnRzIGFyZSBub3QgYWZmZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgdXJsID0gb2xkLnNsaWNlKDAsIHRoaXMuaW5kZXggKyAoa2lkcyA/IHRoaXMuX25leHQgOiAwKSk7XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChwYXJzZShwYXRoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLnZpZXcgPSBvbGRbaV0udmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0gJiYgdXJsW2ldLnBhZ2UgPT09IG9sZFtpXS5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGFwcGVuZChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aDtcclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgdmlldywga2lkcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwga2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB2aWV3ID8gdmlldy5hcHAgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIGEgbmV3IHJvdXRlLCBpdCBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgbm90IGhhdmUgYW55IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZ3VhcmQgaXMgbm90IG5lY2Vzc2FyeSBpbiBzdWNoIGNhc2VcclxuICAgICAgICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBwLmNhbGxFdmVudChcImFwcDpndWFyZFwiLCBbb2JqLnJlZGlyZWN0LCB2aWV3LCBvYmpdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKG5ldyBOYXZpZ2F0aW9uQmxvY2tlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goZXJyID0+IHJlaihlcnIpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWoobmV3IE5hdmlnYXRpb25CbG9ja2VkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgIT09IHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNob3cob2JqLnJlZGlyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWoobmV3IE5hdmlnYXRpb25CbG9ja2VkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpKS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoc3ViLCBzdWJ1cmwsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lLaWRzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgY2hpbGQgdmlld3NcclxuICAgICAgICBjb25zdCB1aXMgPSB0aGlzLl9jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gdWlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1aXNbaV0gJiYgdWlzW2ldLmRlc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHVpc1tpXS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdmFycyBmb3IgYmV0dGVyIEdDIHByb2Nlc3NpbmdcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8vIHdyYXBwZXIgZm9yIHJhdyBvYmplY3RzIGFuZCBKZXQgMS54IHN0cnVjdHNcclxuY2xhc3MgSmV0Vmlld1JhdyBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fdWkgPSBjb25maWcudWk7XHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN1YlJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYXBwO1xyXG4gICAgICAgIGEuYXBwLmdldFJvdXRlcigpLnNldChhLl9zZWdtZW50LmFwcGVuZCh0aGlzLnBhdGgpLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmxldCBfb25jZSA9IHRydWU7XHJcbmNsYXNzIEpldEFwcEJhc2UgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHdlYml4ID0gKGNvbmZpZyB8fCB7fSkud2ViaXggfHwgd2luZG93LndlYml4O1xyXG4gICAgICAgIHN1cGVyKHdlYml4KTtcclxuICAgICAgICAvLyBpbml0IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy53ZWJpeC5leHRlbmQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxyXG4gICAgICAgICAgICBzdGFydDogXCIvaG9tZVwiXHJcbiAgICAgICAgfSwgY29uZmlnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuY29uZmlnLmFwcDtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLCB0aGlzLndlYml4LkV2ZW50U3lzdGVtKTtcclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV0gPSBvYmoodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViVmlldygpLmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb3B5IG9iamVjdCBhbmQgY29sbGVjdCBleHRyYSBoYW5kbGVyc1xyXG4gICAgY29weUNvbmZpZyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gcmF3IHVpIGNvbmZpZ1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBKZXRCYXNlIHx8XHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgJHN1YnZpZXc6IG9iaiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ2aWV3IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmouJHN1YnZpZXcgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcm9jZXNzIHN1Yi1wcm9wZXJ0aWVzXHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIG9iaikge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgLy8gdmlldyBjbGFzc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgJiYgcG9pbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7ICRzdWJ2aWV3OiBwb2ludCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludCAmJiB0eXBlb2YgcG9pbnQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgICEocG9pbnQgaW5zdGFuY2VvZiB0aGlzLndlYml4LkRhdGFDb2xsZWN0aW9uKSAmJiAhKHBvaW50IGluc3RhbmNlb2YgUmVnRXhwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gbmV3IERhdGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29weUNvbmZpZyhwb2ludCwgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZ2V0Um91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5hcHAudHJpZ2dlcih0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuc2hvdyhyb3V0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIoZSwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5nZXRSb290KCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkucmVmcmVzaCgpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZFZpZXcodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmNvbmZpZy52aWV3cztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAodXJsID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZEVycm9yKFwiXCIsIG5ldyBFcnJvcihcIldlYml4IEpldDogRW1wdHkgdXJsIHNlZ21lbnRcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZpZXdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpZXdzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbG9hZGluZyBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVkZWZpbmVkIGhhc2hcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3c1t1cmxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZFZpZXdEeW5hbWljKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZEVycm9yKHVybCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGVyIGNhbiByZXR1cm4gdmlldyBvciBpdHMgcHJvbWlzZVxyXG4gICAgICAgIGlmICghcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuX19lc01vZHVsZSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuX2xvYWRFcnJvcih1cmwsIGVycikpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZm9yVmlldyh0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy53ZWJpeC4kJCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIodmlldy4kc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGcm9tVVJMKGNodW5rKSB7XHJcbiAgICAgICAgbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKGNodW5rLmlzTmV3IHx8ICFjaHVuay52aWV3KSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLmxvYWRWaWV3KGNodW5rLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1aSA9PiB0aGlzLmNyZWF0ZVZpZXcodWksIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBQcm9taXNlLnJlc29sdmUoY2h1bmsudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVmlldyh1aSwgbmFtZSkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRBcHBCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh7IGFwcDogdGhpcywgbmFtZSwgcm91dGVyOiBTdWJSb3V0ZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkodGhpcywgeyBuYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgZmFjdG9yeSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgICAgIHVpID0gdWkodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICBvYmogPSB1aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFVJIG9iamVjdFxyXG4gICAgICAgICAgICBvYmogPSBuZXcgSmV0Vmlld1Jhdyh0aGlzLCB7IG5hbWUsIHVpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvdyB2aWV3IHBhdGhcclxuICAgIHNob3codXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuX2NvbnRhaW5lciwgKHVybCB8fCB0aGlzLmNvbmZpZy5zdGFydCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZXZlbnQgaGVscGVyc1xyXG4gICAgdHJpZ2dlcihuYW1lLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgIH1cclxuICAgIGFwcGx5KG5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGFjdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViaXguYmluZChmdW5jdGlvbiAoLi4ucmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcywgbnVsbCwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIGVycm9yKG5hbWUsIGVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZXIpO1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOmVycm9yXCIsIGVyKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcltpXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlcltpXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YoXCJNb2R1bGUgYnVpbGQgZmFpbGVkXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xceDFiXFxbWzAtOTtdKm0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmUgc3R5bGU9J2ZvbnQtc2l6ZToxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ODczOyBjb2xvcjogIzAwMDsgcGFkZGluZzoxMHB4Oyc+JHt0ZXh0fTwvcHJlPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiPGJyPjxicj5DaGVjayBjb25zb2xlIGZvciBtb3JlIGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5tZXNzYWdlKHsgdHlwZTogXCJlcnJvclwiLCB0ZXh0OiB0ZXh0LCBleHBpcmU6IC0xIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVycyB0b3Agdmlld1xyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDpcclxuICAgICAgICAgICAgKHJvb3QgfHwgZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXRoaXMuJHJvdXRlcjtcclxuICAgICAgICBsZXQgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xyXG4gICAgICAgICAgICBpZiAoX29uY2UgJiYgXCJ0YWdOYW1lXCIgaW4gdGhpcy5fY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmV2ZW50KGRvY3VtZW50LmJvZHksIFwiY2xpY2tcIiwgZSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgICAgICAgICBfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50ID0gdGhpcy5fZmlyc3Rfc3RhcnQodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudC5yb3V0ZS5saW5rUm91dGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC5zcGxpdCgpLnJvdXRlLnBhdGggfHwgdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdWJWaWV3KCk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3N1YlNlZ21lbnQ7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBzZWdtZW50LnNob3cocGF0aCwgdG9wKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmNyZWF0ZUZyb21VUkwoc2VnbWVudC5jdXJyZW50KCkpKVxyXG4gICAgICAgICAgICAudGhlbih2aWV3ID0+IHZpZXcucmVuZGVyKHJvb3QsIHNlZ21lbnQpKVxyXG4gICAgICAgICAgICAudGhlbihiYXNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS50aGVuKCgpID0+IHJlYWR5KTtcclxuICAgICAgICByZXR1cm4gcmVhZHk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9zdWJTZWdtZW50LmN1cnJlbnQoKS52aWV3O1xyXG4gICAgICAgICAgICBpZiAodmlldylcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpldFZpZXcodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgX2ZpcnN0X3N0YXJ0KHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNiID0gKGEpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coYSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkJsb2NrZWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IChwYXRoICE9PSBcIi9cIiAmJiBwYXRoICE9PSBcIiNcIikgPyBwYXRoIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcucm91dGVzW2NvbXBhcmVbMF1dO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICAvLyB1c2UgXCIjIVwiIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgY29uc3Qgc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IFwiI1wiICsgKCh0eXBlb2Ygc3VmaXggPT09IFwidW5kZWZpbmVkXCIpID8gXCIhXCIgOiBzdWZpeCk7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiLCAyKVswXTtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbn1cblxubGV0IGlzUGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaCh3KSB7XHJcbiAgICBpZiAoaXNQYXRjaGVkIHx8ICF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXNQYXRjaGVkID0gdHJ1ZTtcclxuICAgIC8vIGN1c3RvbSBwcm9taXNlIGZvciBJRThcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGlmICghd2luLlByb21pc2UpIHtcclxuICAgICAgICB3aW4uUHJvbWlzZSA9IHcucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcnNpb24gPSB3LnZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gd2lsbCBiZSBmaXhlZCBpbiB3ZWJpeCA1LjNcclxuICAgIGlmICh2ZXJzaW9uWzBdICogMTAgKyB2ZXJzaW9uWzFdICogMSA8IDUzKSB7XHJcbiAgICAgICAgdy51aS5mcmVlemUgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZCBiZWNhdXNlIHdlYml4IGpldCA1LjAgY2FuJ3QgaGFuZGxlIHJlc2l6ZSBvZiBzY3JvbGx2aWV3IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyB3LnVpLiRmcmVlemUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChzb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB2aWV3cyBhcyBjbGFzc2VzXHJcbiAgICBjb25zdCBiYXNlQWRkID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5hZGRWaWV3O1xyXG4gICAgY29uc3QgYmFzZVJlbW92ZSA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUucmVtb3ZlVmlldztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBhZGRWaWV3KHZpZXcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbG9naWMgb25seSBmb3Igd2lkZ2V0cyBpbnNpZGUgb2YgamV0LXZpZXdcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2Ugd2hlbiBhZGRWaWV3IHVzZWQgd2l0aCBhbHJlYWR5IGluaXRpYWxpemVkIHdpZGdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQgJiYgIXZpZXcucXVlcnlWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqdmlldyA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGp2aWV3LmFwcC5jb3B5Q29uZmlnKHZpZXcsIHt9LCBzdWJzKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBZGQuYXBwbHkodGhpcywgW3ZpZXcsIGluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganZpZXcuX3JlbmRlckZyYW1lKGtleSwgc3Vic1trZXldLCBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganZpZXcuX3N1YnNba2V5XSA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VBZGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlldygpIHtcclxuICAgICAgICAgICAgYmFzZVJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB0aGlzLiRzY29wZS5fc3VicztcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCBzdWItdmlld3MsIGRlc3Ryb3kgYW5kIGNsZWFuIHRoZSByZW1vdmVkIG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3LiQkKHRlc3QuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHcuZXh0ZW5kKHcudWkubGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIHcuZXh0ZW5kKHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAvLyB3cmFwcGVyIGZvciB1c2luZyBKZXQgQXBwcyBhcyB2aWV3c1xyXG4gICAgdy5wcm90b1VJKHtcclxuICAgICAgICBuYW1lOiBcImpldGFwcFwiLFxyXG4gICAgICAgICRpbml0KGNmZykge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAgPSBuZXcgdGhpcy5hcHAoY2ZnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3LnVpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNmZy5ib2R5ID0geyBpZCB9O1xyXG4gICAgICAgICAgICB0aGlzLiRyZWFkeS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5yZW5kZXIoeyBpZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRhcHApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLiRhcHBba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbi5iaW5kKHRoaXMuJGFwcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnVpLnByb3h5KTtcclxufVxuXG5jbGFzcyBKZXRBcHAgZXh0ZW5kcyBKZXRBcHBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5yb3V0ZXIgPSBjb25maWcucm91dGVyIHx8IEhhc2hSb3V0ZXI7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBwYXRjaCh0aGlzLndlYml4KTtcclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJqZXQtdmlld3MvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN0b3JlUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlIHx8IGFwcC53ZWJpeC5zdG9yYWdlLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbmZpZy5zdG9yZU5hbWUgfHwgY29uZmlnLmlkICsgXCI6cm91dGVcIik7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5wdXQodGhpcy5uYW1lLCBwYXRoKTtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFVybFJvdXRlciBleHRlbmRzIEhhc2hSb3V0ZXIge1xyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgKyAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoIHx8IFwiXCIpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QobmV3IE5hdmlnYXRpb25CbG9ja2VkKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gcHJvbWlzZS5jb25maXJtLnRoZW4oKCkgPT4gcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbi8vICAgICAoYykgMjAxMi0yMDE4IEFpcmJuYiwgSW5jLlxuXG4vLyB2YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5mdW5jdGlvbiBoYXMoc3RvcmUsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0b3JlLCBrZXkpO1xufVxuLy8gdmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMob2JqLCBrZXkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoKGNvbnRleHQgfHwgb2JqKSwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbi8vIHZhciB0cmltID0gcmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS50cmltJyk7XG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59XG4vLyB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBtZXNzYWdlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRyeSB7IHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgfSBjYXRjaCAoeCkge31cbn1cblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuXG4vLyAjIyMjIFBsdXJhbGl6YXRpb24gbWV0aG9kc1xuLy8gVGhlIHN0cmluZyB0aGF0IHNlcGFyYXRlcyB0aGUgZGlmZmVyZW50IHBocmFzZSBwb3NzaWJpbGl0aWVzLlxudmFyIGRlbGltaXRlciA9ICd8fHx8JztcblxudmFyIHJ1c3NpYW5QbHVyYWxHcm91cHMgPSBmdW5jdGlvbiAobikge1xuICB2YXIgZW5kID0gbiAlIDEwO1xuICBpZiAobiAhPT0gMTEgJiYgZW5kID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmICEobiA+PSAxMiAmJiBuIDw9IDE0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAyO1xufTtcblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgcGx1cmFsIGxvZ2ljLlxudmFyIHBsdXJhbFR5cGVzID0ge1xuICBhcmFiaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gaHR0cDovL3d3dy5hcmFiZXllcy5vcmcvUGx1cmFsX0Zvcm1zXG4gICAgaWYgKG4gPCAzKSB7IHJldHVybiBuOyB9XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID49IDMgJiYgbGFzdFR3byA8PSAxMCkgcmV0dXJuIDM7XG4gICAgcmV0dXJuIGxhc3RUd28gPj0gMTEgPyA0IDogNTtcbiAgfSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBjaGluZXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICBjcm9hdGlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgZnJlbmNoOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiA+IDEgPyAxIDogMDsgfSxcbiAgZ2VybWFuOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiAhPT0gMSA/IDEgOiAwOyB9LFxuICBydXNzaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBsaXRodWFuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuICUgMTAgPT09IDEgJiYgbiAlIDEwMCAhPT0gMTEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiYgKG4gJSAxMDAgPCAxMSB8fCBuICUgMTAwID4gMTkpID8gMSA6IDI7XG4gIH0sXG4gIGN6ZWNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIChuID49IDIgJiYgbiA8PSA0KSA/IDEgOiAyO1xuICB9LFxuICBwb2xpc2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICB2YXIgZW5kID0gbiAlIDEwO1xuICAgIHJldHVybiAyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gIH0sXG4gIGljZWxhbmRpYzogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChuICUgMTAgIT09IDEgfHwgbiAlIDEwMCA9PT0gMTEpID8gMSA6IDA7IH0sXG4gIHNsb3ZlbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAzIHx8IGxhc3RUd28gPT09IDQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gMztcbiAgfVxufTtcblxuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCB0byBpbmRpdmlkdWFsIGxhbmd1YWdlIGNvZGVzL2xvY2FsZXMuXG4vLyBXaWxsIGxvb2sgdXAgYmFzZWQgb24gZXhhY3QgbWF0Y2gsIGlmIG5vdCBmb3VuZCBhbmQgaXQncyBhIGxvY2FsZSB3aWxsIHBhcnNlIHRoZSBsb2NhbGVcbi8vIGZvciBsYW5ndWFnZSBjb2RlLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBleGlzdCB3aWxsIGRlZmF1bHQgdG8gJ2VuJ1xudmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgYXJhYmljOiBbJ2FyJ10sXG4gIGJvc25pYW5fc2VyYmlhbjogWydicy1MYXRuLUJBJywgJ2JzLUN5cmwtQkEnLCAnc3JsLVJTJywgJ3NyLVJTJ10sXG4gIGNoaW5lc2U6IFsnaWQnLCAnaWQtSUQnLCAnamEnLCAna28nLCAna28tS1InLCAnbG8nLCAnbXMnLCAndGgnLCAndGgtVEgnLCAnemgnXSxcbiAgY3JvYXRpYW46IFsnaHInLCAnaHItSFInXSxcbiAgZ2VybWFuOiBbJ2ZhJywgJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2hpLUlOJywgJ2h1JywgJ2h1LUhVJywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2JywgJ3RyJ10sXG4gIGZyZW5jaDogWydmcicsICd0bCcsICdwdC1iciddLFxuICBydXNzaWFuOiBbJ3J1JywgJ3J1LVJVJ10sXG4gIGxpdGh1YW5pYW46IFsnbHQnXSxcbiAgY3plY2g6IFsnY3MnLCAnY3MtQ1onLCAnc2snXSxcbiAgcG9saXNoOiBbJ3BsJ10sXG4gIGljZWxhbmRpYzogWydpcyddLFxuICBzbG92ZW5pYW46IFsnc2wtU0wnXVxufTtcblxuZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yRWFjaChtYXBwaW5nLCBmdW5jdGlvbiAobGFuZ3MsIHR5cGUpIHtcbiAgICBmb3JFYWNoKGxhbmdzLCBmdW5jdGlvbiAobGFuZykge1xuICAgICAgcmV0W2xhbmddID0gdHlwZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVOYW1lKGxvY2FsZSkge1xuICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGVbc3BsaXQuY2FsbChsb2NhbGUsIC8tLywgMSlbMF1dXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZS5lbjtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgcmV0dXJuIHBsdXJhbFR5cGVzW3BsdXJhbFR5cGVOYW1lKGxvY2FsZSldKGNvdW50KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMpIHtcbiAgdmFyIHByZWZpeCA9IChvcHRzICYmIG9wdHMucHJlZml4KSB8fCAnJXsnO1xuICB2YXIgc3VmZml4ID0gKG9wdHMgJiYgb3B0cy5zdWZmaXgpIHx8ICd9JztcblxuICBpZiAocHJlZml4ID09PSBkZWxpbWl0ZXIgfHwgc3VmZml4ID09PSBkZWxpbWl0ZXIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCInICsgZGVsaW1pdGVyICsgJ1wiIHRva2VuIGlzIHJlc2VydmVkIGZvciBwbHVyYWxpemF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGUocHJlZml4KSArICcoLio/KScgKyBlc2NhcGUoc3VmZml4KSwgJ2cnKTtcbn1cblxudmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xudmFyIGRvbGxhckJpbGxzWWFsbCA9ICckJCc7XG52YXIgZGVmYXVsdFRva2VuUmVnZXggPSAvJVxceyguKj8pXFx9L2c7XG5cbi8vICMjIyB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpXG4vL1xuLy8gVGFrZXMgYSBwaHJhc2Ugc3RyaW5nIGFuZCB0cmFuc2Zvcm1zIGl0IGJ5IGNob29zaW5nIHRoZSBjb3JyZWN0XG4vLyBwbHVyYWwgZm9ybSBhbmQgaW50ZXJwb2xhdGluZyBpdC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCdIZWxsbywgJXtuYW1lfSEnLCB7bmFtZTogJ1NwaWtlJ30pO1xuLy8gICAgIC8vIFwiSGVsbG8sIFNwaWtlIVwiXG4vL1xuLy8gVGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0gaXMgc2VsZWN0ZWQgaWYgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudFxuLy8gaXMgc2V0LiBZb3UgY2FuIHBhc3MgaW4gYSBudW1iZXIgaW5zdGVhZCBvZiBhbiBPYmplY3QgYXMgYHN1YnN0aXR1dGlvbnNgXG4vLyBhcyBhIHNob3J0Y3V0IGZvciBgc21hcnRfY291bnRgLlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDF9LCAnZW4nKTtcbi8vICAgICAvLyBcIjEgbmV3IG1lc3NhZ2VcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDJ9LCAnZW4nKTtcbi8vICAgICAvLyBcIjIgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywgNSwgJ2VuJyk7XG4vLyAgICAgLy8gXCI1IG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gWW91IHNob3VsZCBwYXNzIGluIGEgdGhpcmQgYXJndW1lbnQsIHRoZSBsb2NhbGUsIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3QgcGx1cmFsIHR5cGUuXG4vLyBJdCBkZWZhdWx0cyB0byBgJ2VuJ2Agd2l0aCAyIHBsdXJhbCBmb3Jtcy5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSwgdG9rZW5SZWdleCkge1xuICBpZiAodHlwZW9mIHBocmFzZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgZXhwZWN0cyBhcmd1bWVudCAjMSB0byBiZSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChzdWJzdGl0dXRpb25zID09IG51bGwpIHtcbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBocmFzZTtcbiAgdmFyIGludGVycG9sYXRpb25SZWdleCA9IHRva2VuUmVnZXggfHwgZGVmYXVsdFRva2VuUmVnZXg7XG5cbiAgLy8gYWxsb3cgbnVtYmVyIGFzIGEgcGx1cmFsaXphdGlvbiBzaG9ydGN1dFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzdWJzdGl0dXRpb25zID09PSAnbnVtYmVyJyA/IHsgc21hcnRfY291bnQ6IHN1YnN0aXR1dGlvbnMgfSA6IHN1YnN0aXR1dGlvbnM7XG5cbiAgLy8gU2VsZWN0IHBsdXJhbCBmb3JtOiBiYXNlZCBvbiBhIHBocmFzZSB0ZXh0IHRoYXQgY29udGFpbnMgYG5gXG4gIC8vIHBsdXJhbCBmb3JtcyBzZXBhcmF0ZWQgYnkgYGRlbGltaXRlcmAsIGEgYGxvY2FsZWAsIGFuZCBhIGBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50YCxcbiAgLy8gY2hvb3NlIHRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtLiBUaGlzIGlzIG9ubHkgZG9uZSBpZiBgY291bnRgIGlzIHNldC5cbiAgaWYgKG9wdGlvbnMuc21hcnRfY291bnQgIT0gbnVsbCAmJiByZXN1bHQpIHtcbiAgICB2YXIgdGV4dHMgPSBzcGxpdC5jYWxsKHJlc3VsdCwgZGVsaW1pdGVyKTtcbiAgICByZXN1bHQgPSB0cmltKHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUgfHwgJ2VuJywgb3B0aW9ucy5zbWFydF9jb3VudCldIHx8IHRleHRzWzBdKTtcbiAgfVxuXG4gIC8vIEludGVycG9sYXRlOiBDcmVhdGVzIGEgYFJlZ0V4cGAgb2JqZWN0IGZvciBlYWNoIGludGVycG9sYXRpb24gcGxhY2Vob2xkZXIuXG4gIHJlc3VsdCA9IHJlcGxhY2UuY2FsbChyZXN1bHQsIGludGVycG9sYXRpb25SZWdleCwgZnVuY3Rpb24gKGV4cHJlc3Npb24sIGFyZ3VtZW50KSB7XG4gICAgaWYgKCFoYXMob3B0aW9ucywgYXJndW1lbnQpIHx8IG9wdGlvbnNbYXJndW1lbnRdID09IG51bGwpIHsgcmV0dXJuIGV4cHJlc3Npb247IH1cbiAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZCByZWdleCByZXBsYWNlIHRva2Vucy5cbiAgICByZXR1cm4gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJndW1lbnRdLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBQb2x5Z2xvdChvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5waHJhc2VzID0ge307XG4gIHRoaXMuZXh0ZW5kKG9wdHMucGhyYXNlcyB8fCB7fSk7XG4gIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gIHZhciBhbGxvd01pc3NpbmcgPSBvcHRzLmFsbG93TWlzc2luZyA/IHRyYW5zZm9ybVBocmFzZSA6IG51bGw7XG4gIHRoaXMub25NaXNzaW5nS2V5ID0gdHlwZW9mIG9wdHMub25NaXNzaW5nS2V5ID09PSAnZnVuY3Rpb24nID8gb3B0cy5vbk1pc3NpbmdLZXkgOiBhbGxvd01pc3Npbmc7XG4gIHRoaXMud2FybiA9IG9wdHMud2FybiB8fCB3YXJuO1xuICB0aGlzLnRva2VuUmVnZXggPSBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMuaW50ZXJwb2xhdGlvbik7XG59XG5cbi8vICMjIyBwb2x5Z2xvdC5sb2NhbGUoW2xvY2FsZV0pXG4vL1xuLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG5Qb2x5Z2xvdC5wcm90b3R5cGUubG9jYWxlID0gZnVuY3Rpb24gKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4vL1xuLy8gVXNlIGBleHRlbmRgIHRvIHRlbGwgUG9seWdsb3QgaG93IHRvIHRyYW5zbGF0ZSBhIGdpdmVuIGtleS5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbi8vIGl0IHdpbGwgb3ZlcnJpZGUgYW55IHBocmFzZXMgd2l0aCB0aGUgc2FtZSBrZXksIGJ1dCBsZWF2ZSBleGlzdGluZyBwaHJhc2VzXG4vLyB1bnRvdWNoZWQuXG4vL1xuLy8gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBwYXNzIG5lc3RlZCBwaHJhc2Ugb2JqZWN0cywgd2hpY2ggZ2V0IGZsYXR0ZW5lZFxuLy8gaW50byBhbiBvYmplY3Qgd2l0aCB0aGUgbmVzdGVkIGtleXMgY29uY2F0ZW5hdGVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwibmF2XCI6IHtcbi8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCIsXG4vLyAgICAgICAgIFwic2lkZWJhclwiOiB7XG4vLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nLFxuLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbi8vICAgICAvLyB9XG4vL1xuLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuLy8gdG8gcHJlZml4IGV2ZXJ5IGtleSBpbiB0aGUgcGhyYXNlcyBvYmplY3Qgd2l0aCBzb21lIHN0cmluZywgdXNpbmcgZG90XG4vLyBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0sIFwibmF2XCIpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbi8vICAgICAvLyB9XG4vL1xuLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cblBvbHlnbG90LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XSA9IHBocmFzZTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4vLyBVc2UgYHVuc2V0YCB0byBzZWxlY3RpdmVseSByZW1vdmUga2V5cyBmcm9tIGEgcG9seWdsb3QgaW5zdGFuY2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4vLyAgICAgcG9seWdsb3QudW5zZXQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuLy8gdGhlIGtleXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1bnNldC5cblBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbW9yZVBocmFzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuY2xlYXIoKVxuLy9cbi8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbi8vIHVwIG1lbW9yeSBpZiB5b3UgaGF2ZSBsb3RzIG9mIHBocmFzZXMgYnV0IG5vIGxvbmdlciBuZWVkIHRvXG4vLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5yZXBsYWNlKHBocmFzZXMpXG4vL1xuLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4vLyBOb3JtYWxseSwganVzdCB1c2UgYGV4dGVuZGAgdG8gYWRkIG1vcmUgcGhyYXNlcywgYnV0IHVuZGVyIGNlcnRhaW5cbi8vIGNpcmN1bXN0YW5jZXMsIHlvdSBtYXkgd2FudCB0byBtYWtlIHN1cmUgbm8gb2xkIHBocmFzZXMgYXJlIGx5aW5nIGFyb3VuZC5cblBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuLy9cbi8vIFRoZSBtb3N0LXVzZWQgbWV0aG9kLiBQcm92aWRlIGEga2V5LCBhbmQgYHRgIHdpbGwgcmV0dXJuIHRoZVxuLy8gcGhyYXNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9cIik7XG4vLyAgICAgPT4gXCJIZWxsb1wiXG4vL1xuLy8gVGhlIHBocmFzZSB2YWx1ZSBpcyBwcm92aWRlZCBmaXJzdCBieSBhIGNhbGwgdG8gYHBvbHlnbG90LmV4dGVuZCgpYCBvclxuLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4vL1xuLy8gUGFzcyBpbiBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBwZXJmb3JtIGludGVycG9sYXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbi8vICAgICA9PiBcIkhlbGxvLCBTcGlrZVwiXG4vL1xuLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4vLyBVc2UgdGhlIHNwZWNpYWwgb3B0aW9uIGtleSBcIl9cIiB0byBzcGVjaWZ5IGEgZGVmYXVsdC5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4vLyAgICAgICBfOiBcIkkgbGlrZSB0byB3cml0ZSBpbiAle2xhbmd1YWdlfS5cIixcbi8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuLy8gICAgIH0pO1xuLy8gICAgID0+IFwiSSBsaWtlIHRvIHdyaXRlIGluIEphdmFTY3JpcHQuXCJcbi8vXG5Qb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHBocmFzZSwgcmVzdWx0O1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgPT0gbnVsbCA/IHt9IDogb3B0aW9ucztcbiAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSB0aGlzLnBocmFzZXNba2V5XTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5fID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IG9wdHMuXztcbiAgfSBlbHNlIGlmICh0aGlzLm9uTWlzc2luZ0tleSkge1xuICAgIHZhciBvbk1pc3NpbmdLZXkgPSB0aGlzLm9uTWlzc2luZ0tleTtcbiAgICByZXN1bHQgPSBvbk1pc3NpbmdLZXkoa2V5LCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfVxuICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LmhhcyhrZXkpXG4vL1xuLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuUG9seWdsb3QucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGhhcyh0aGlzLnBocmFzZXMsIGtleSk7XG59O1xuXG4vLyBleHBvcnQgdHJhbnNmb3JtUGhyYXNlXG5Qb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm0ocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSk7XG59O1xuXG52YXIgd2ViaXhQb2x5Z2xvdCA9IFBvbHlnbG90O1xuXG5mdW5jdGlvbiBMb2NhbGUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgbGFuZyA9IHN0b3JhZ2UgPyAoc3RvcmFnZS5nZXQoXCJsYW5nXCIpIHx8IFwiZW5cIikgOiAoY29uZmlnLmxhbmcgfHwgXCJlblwiKTtcclxuICAgIGZ1bmN0aW9uIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCkge1xyXG4gICAgICAgIGlmIChkYXRhLl9fZXNNb2R1bGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGNvbmZpZyA9IHsgcGhyYXNlczogZGF0YSB9O1xyXG4gICAgICAgIGlmIChjb25maWcucG9seWdsb3QpIHtcclxuICAgICAgICAgICAgYXBwLndlYml4LmV4dGVuZChwY29uZmlnLCBjb25maWcucG9seWdsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2x5ID0gc2VydmljZS5wb2x5Z2xvdCA9IG5ldyB3ZWJpeFBvbHlnbG90KHBjb25maWcpO1xyXG4gICAgICAgIHBvbHkubG9jYWxlKG5hbWUpO1xyXG4gICAgICAgIHNlcnZpY2UuXyA9IGFwcC53ZWJpeC5iaW5kKHBvbHkudCwgcG9seSk7XHJcbiAgICAgICAgbGFuZyA9IG5hbWU7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLndlYml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY05hbWUgPSBjb25maWcud2ViaXhbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChsb2NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAud2ViaXguaTE4bi5zZXRMb2NhbGUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExhbmcoKSB7IHJldHVybiBsYW5nOyB9XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBzZXRMYW5nIGlmIGxvYWRpbmcgYnkgcGF0aCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmIChjb25maWcucGF0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoID0gKGNvbmZpZy5wYXRoID8gY29uZmlnLnBhdGggKyBcIi9cIiA6IFwiXCIpICsgbmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcImpldC1sb2NhbGVzL1wiICsgcGF0aCk7XHJcbiAgICAgICAgc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0TGFuZywgc2V0TGFuZywgc2V0TGFuZ0RhdGEsIF86IG51bGwsIHBvbHlnbG90OiBudWxsXHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJsb2NhbGVcIiwgc2VydmljZSk7XHJcbiAgICBzZXRMYW5nKGxhbmcsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIHNob3codmlldywgY29uZmlnLCB2YWx1ZSkge1xyXG4gICAgaWYgKGNvbmZpZy51cmxzKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb25maWcudXJsc1t2YWx1ZV0gfHwgdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICB2YWx1ZSA9IHsgW2NvbmZpZy5wYXJhbV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICB2aWV3LnNob3codmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIE1lbnUoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IGZyYW1lID0gdmlldy5nZXRTdWJWaWV3SW5mbygpLnBhcmVudDtcclxuICAgIGNvbnN0IHVpID0gdmlldy4kJChjb25maWcuaWQgfHwgY29uZmlnKTtcclxuICAgIGxldCBzaWxlbnQgPSBmYWxzZTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgdGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25hZnRlcnNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5nZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHVpLmdldFNlbGVjdGVkSWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOnJvdXRlYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB2aWV3LmdldFBhcmFtKGNvbmZpZy5wYXJhbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZnJhbWUuZ2V0VXJsKClbMV07XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gc2VnbWVudC5wYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHNpbGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSAmJiB1aS5nZXRWYWx1ZSgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5zZWxlY3QgJiYgdWkuZXhpc3RzKG5hbWUpICYmIHVpLmdldFNlbGVjdGVkSWQoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2VsZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpbGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbmNvbnN0IGJhc2VpY29ucyA9IHtcclxuICAgIGdvb2Q6IFwiY2hlY2tcIixcclxuICAgIGVycm9yOiBcIndhcm5pbmdcIixcclxuICAgIHNhdmluZzogXCJyZWZyZXNoIGZhLXNwaW5cIlxyXG59O1xyXG5jb25zdCBiYXNldGV4dCA9IHtcclxuICAgIGdvb2Q6IFwiT2tcIixcclxuICAgIGVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBzYXZpbmc6IFwiQ29ubmVjdGluZy4uLlwiXHJcbn07XHJcbmZ1bmN0aW9uIFN0YXR1cyhhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgbGV0IHN0YXR1cyA9IFwiZ29vZFwiO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBpc2Vycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXhwaXJlRGVsYXkgPSBjb25maWcuZXhwaXJlO1xyXG4gICAgaWYgKCFleHBpcmVEZWxheSAmJiBleHBpcmVEZWxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBleHBpcmVEZWxheSA9IDIwMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0cyA9IGNvbmZpZy50ZXh0cyB8fCBiYXNldGV4dDtcclxuICAgIGNvbnN0IGljb25zID0gY29uZmlnLmljb25zIHx8IGJhc2VpY29ucztcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uZmlnID0geyB0YXJnZXQ6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHZpZXcuJCQoY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGFyZWEpIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInPjxzcGFuIGNsYXNzPSd3ZWJpeF9pY29uIGZhLVwiICtcclxuICAgICAgICAgICAgICAgICAgICBpY29uc1tzdGF0dXNdICsgXCInPjwvc3Bhbj4gXCIgKyB0ZXh0c1tzdGF0dXNdICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhLnNldEhUTUwoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImdvb2RcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KHByb21pc2UpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHNldFN0YXR1cyhcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcclxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGZhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGlkZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVmcmVzaChcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG1vZGUsIGVycikge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzYXZpbmdcIikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBcInNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc2Vycm9yID0gKG1vZGUgPT09IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gaXNlcnJvciA/IFwiZXJyb3JcIiA6IFwiZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuZXJyb3IoXCJhcHA6ZXJyb3I6c2VydmVyXCIsIFtlcnIucmVzcG9uc2VUZXh0IHx8IGVycl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZURlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZVN0YXR1cywgZXhwaXJlRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkcCA9IGFwcC53ZWJpeC5kcChkYXRhKTtcclxuICAgICAgICBpZiAoZHApIHtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyRGF0YVNlbmRcIiwgc3RhcnQpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlRXJyb3JcIiwgKF9pZCwgX29iaiwgcmVzcG9uc2UpID0+IGZhaWwocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZVwiLCBzdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXR1c1wiLCB7XHJcbiAgICAgICAgZ2V0U3RhdHVzLFxyXG4gICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICB0cmFja1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLnJlbW90ZSkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uUmVtb3RlQ2FsbFwiLCBzdGFydCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmFqYXgpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvbkJlZm9yZUFqYXhcIiwgKF9tb2RlLCBfdXJsLCBfZGF0YSwgX3JlcXVlc3QsIF9oZWFkZXJzLCBfZmlsZXMsIHByb21pc2UpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgICB0cmFjayhjb25maWcuZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVGhlbWUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgdGhlbWUgPSBzdG9yYWdlID9cclxuICAgICAgICAoc3RvcmFnZS5nZXQoXCJ0aGVtZVwiKSB8fCBcImZsYXQtZGVmYXVsdFwiKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgKGNvbmZpZy50aGVtZSB8fCBcImZsYXQtZGVmYXVsdFwiKTtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VGhlbWUoKSB7IHJldHVybiB0aGVtZTsgfSxcclxuICAgICAgICBzZXRUaGVtZShuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxuYW1lID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG5hbWUgPT09IG5hbWUgfHwgbG5hbWUgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5za2luLnNldChwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLnJlbW92ZUNzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgdGhlbWUpO1xyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5hZGRDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGVtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnB1dChcInRoZW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidGhlbWVcIiwgc2VydmljZSk7XHJcbiAgICBzZXJ2aWNlLnNldFRoZW1lKHRoZW1lLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBjb3B5UGFyYW1zKGRhdGEsIHVybCwgcm91dGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYXRhW3JvdXRlW2ldXSA9IHVybFtpICsgMV0gPyB1cmxbaSArIDFdLnBhZ2UgOiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFVybFBhcmFtKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZSB8fCBjb25maWc7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICB2aWV3Lm9uKGFwcCwgXCJhcHA6dXJsY2hhbmdlXCIsIGZ1bmN0aW9uIChzdWJ2aWV3LCBzZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHN1YnZpZXcpIHtcclxuICAgICAgICAgICAgY29weVBhcmFtcyhkYXRhLCBzZWdtZW50LnN1YnVybCgpLCByb3V0ZSk7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuc2l6ZShyb3V0ZS5sZW5ndGggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9zID0gdmlldy5zZXRQYXJhbTtcclxuICAgIGNvbnN0IG9nID0gdmlldy5nZXRQYXJhbTtcclxuICAgIHZpZXcuc2V0UGFyYW0gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHNob3cpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJvdXRlLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShcIlwiLCB2YWx1ZSwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlLCBzaG93KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmlldy5nZXRQYXJhbSA9IGZ1bmN0aW9uIChrZXksIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcywga2V5LCBtb2RlKTtcclxuICAgIH07XHJcbiAgICBjb3B5UGFyYW1zKGRhdGEsIHZpZXcuZ2V0VXJsKCksIHJvdXRlKTtcclxufVxuXG5mdW5jdGlvbiBVc2VyKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgbG9naW4gPSBjb25maWcubG9naW4gfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IGxvZ291dCA9IGNvbmZpZy5sb2dvdXQgfHwgXCIvbG9nb3V0XCI7XHJcbiAgICBjb25zdCBhZnRlckxvZ2luID0gY29uZmlnLmFmdGVyTG9naW4gfHwgYXBwLmNvbmZpZy5zdGFydDtcclxuICAgIGNvbnN0IGFmdGVyTG9nb3V0ID0gY29uZmlnLmFmdGVyTG9nb3V0IHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBwaW5nID0gY29uZmlnLnBpbmcgfHwgNSAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IG1vZGVsID0gY29uZmlnLm1vZGVsO1xyXG4gICAgbGV0IHVzZXIgPSBjb25maWcudXNlcjtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0dXMoc2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwuc3RhdHVzKCkuY2F0Y2goKCkgPT4gbnVsbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKG5hbWUsIHBhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ2luKG5hbWUsIHBhc3MpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9naW5cIiwgW3VzZXJdKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zaG93KGFmdGVyTG9naW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9nb3V0XCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikge1xyXG4gICAgICAgIGlmICh1cmwgPT09IGxvZ291dCkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBhZnRlckxvZ291dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXJsICE9PSBsb2dpbiAmJiAhc2VydmljZS5nZXRTdGF0dXMoKSkge1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBsb2dpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInVzZXJcIiwgc2VydmljZSk7XHJcbiAgICBhcHAuYXR0YWNoRXZlbnQoYGFwcDpndWFyZGAsIGZ1bmN0aW9uICh1cmwsIF8kcm9vdCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wdWJsaWMgJiYgY29uZmlnLnB1YmxpYyh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0gPSBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKS50aGVuKCgpID0+IGNhbk5hdmlnYXRlKHVybCwgb2JqKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwaW5nKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2VydmljZS5nZXRTdGF0dXModHJ1ZSksIHBpbmcpO1xyXG4gICAgfVxyXG59XG5cbi8qXHJcbk1JVCBMaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxOSBYQiBTb2Z0d2FyZVxyXG4qL1xyXG5sZXQgd2ViaXggPSB3aW5kb3cud2ViaXg7XHJcbmlmICh3ZWJpeCkge1xyXG4gICAgcGF0Y2god2ViaXgpO1xyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSB7XHJcbiAgICBVbmxvYWRHdWFyZCwgTG9jYWxlLCBNZW51LCBUaGVtZSwgVXNlciwgU3RhdHVzLCBVcmxQYXJhbVxyXG59O1xyXG5jb25zdCBlcnJvcnMgPSB7IE5hdmlnYXRpb25CbG9ja2VkIH07XHJcbmNvbnN0IHcgPSB3aW5kb3c7XHJcbmlmICghdy5Qcm9taXNlKSB7XHJcbiAgICB3LlByb21pc2UgPSB3LndlYml4LnByb21pc2U7XHJcbn1cblxuZXhwb3J0IHsgcGx1Z2lucywgZXJyb3JzLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgV1JlcXVlc3Qge1xuICAgIC8vIGJ5IGRlZmF1bHQsIHJlcXVlc3QgaXMgd2l0aG91dCBwcm9taXNlXG4gICAgc2VuZChyZXEsIGFjdGlvbiwgaG9zdG5hbWUsIHdlYnNlcnZlcnBvcnQpIHtcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9cIiArIGhvc3RuYW1lICsgXCI6XCIgKyB3ZWJzZXJ2ZXJwb3J0ICsgXCIvdXRpbGl0eS9cIiArIGFjdGlvbjsgLy8gZm9yIGRldmVsb3BtZW50XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgbGV0IGpzb25kYXRhID0gW107XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhoci5yZWFkeVN0YXRlID0gXCIgKyB4aHIucmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhoci5zdGF0dXMgPSBcIiArIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlc3BvbnNlVGV4dCA9XFxuXCIgKyB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBqc29uZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0+IFwiICsganNvbmRhdGEuZXJyb3JfbXNnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLT4gXCIgKyBqc29uZGF0YS5yZXR1cm5fY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlcXVlc3QgPVxcblwiICsgSlNPTi5zdHJpbmdpZnkocmVxLCBudWxsLCAyKSk7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHJlcSkpO1xuICAgIH1cbiAgICBzZW5kUHJvbWlzZShyZXEsIGFjdGlvbiwgaG9zdG5hbWUsIHdlYnNlcnZlcnBvcnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgLy8gY29uc3QgdXJsMjogc3RyaW5nID0gXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyBcIjo4MDgwL3V0aWxpdHkvXCIgKyBhY3Rpb247IC8vIGZvciBkZXZlbG9wbWVudFxuICAgICAgICAgICAgLy8gY29uc3QgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArIFwiOlwiICsgd2luZG93LmxvY2F0aW9uLnBvcnQgKyBcIi91dGlsaXR5L1wiICsgYWN0aW9uOyAvLyBmb3IgcHJvZHVjdGlvblxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0bmFtZSArIFwiOlwiICsgd2Vic2VydmVycG9ydCArIFwiL1wiICsgYWN0aW9uOyAvLyBmb3IgZGV2ZWxvcG1lbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwyKTtcbiAgICAgICAgICAgIC8vIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBhbGVydChhY3Rpb25BcnJheVswXSk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImdldFBlcm1pc3Npb25cIikge1xuICAgICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcImdldFByb2plY3RcIikge1xuICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgIGxldCBqc29uZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlYWR5U3RhdGUgPSBcIiArIHhoci5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhoci5zdGF0dXMgPSBcIiArIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIucmVzcG9uc2VUZXh0ID1cXG5cIiArIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBqc29uZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tPiBcIiArIGpzb25kYXRhLmVycm9yX21zZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoanNvbmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBqc29uZGF0YS5yZXR1cm5fY29kZSA9PT0gMCA/IHJlc29sdmUoanNvbmRhdGEpIDogcmVqZWN0KGpzb25kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInhoci5yZXF1ZXN0ID1cXG5cIiArIEpTT04uc3RyaW5naWZ5KHJlcSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocmVxKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb3dubG9hZFJlcG9ydChmaWxlbmFtZSwgaG9zdG5hbWUsIHdlYnNlcnZlcnBvcnQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHBvcnRcIik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9cIiArIGhvc3RuYW1lICsgXCI6XCIgKyB3ZWJzZXJ2ZXJwb3J0ICsgXCIvcHVibGljL1wiICsgZmlsZW5hbWU7IC8vIGZvciBkZXZlbG9wbWVudFxuICAgICAgICAgICAgLy8gY29uc3QgdXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vXCIgKyBob3N0bmFtZSArIFwiOlwiICsgd2Vic2VydmVycG9ydCArIFwiL2NsaWVudC93cmVwb3J0L2NvbmZpZy9pb3JlcG9ydC5qc29uXCI7IC8vIGZvciBkZXZlbG9wbWVudFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybDIpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICAgICAgICAgIC8vIGFsZXJ0KGFjdGlvbkFycmF5WzBdKTtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICBsZXQganNvbmRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInhoci5yZWFkeVN0YXRlID0gXCIgKyB4aHIucmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4aHIuc3RhdHVzID0gXCIgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieGhyLnJlc3BvbnNlVGV4dCA9XFxuXCIgKyB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAganNvbmRhdGEgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoanNvbmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhoci5yZXF1ZXN0ID1cXG5cIiArIEpTT04uc3RyaW5naWZ5KHJlcSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gV1JlcXVlc3Q7XG4iLCJpbXBvcnQge0pldEFwcH0gZnJvbSBcIndlYml4LWpldFwiO1xuaW1wb3J0IFdXZWJSZXF1ZXN0IGZyb20gXCJ3d2VicmVxdWVzdFwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4vaGVscGVycy9zdGF0ZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5kZWNsYXJlIGxldCBBUFBOQU1FOiBhbnk7XG5kZWNsYXJlIGxldCBWRVJTSU9OOiBhbnk7XG5kZWNsYXJlIGxldCBQUk9EVUNUSU9OOiBib29sZWFuO1xuXG4vLyBERVZFTE9QTUVOVFxuLy8gZXhwb3J0IGRlY2xhcmUgbGV0IFBST0RVQ1RJT046IGJvb2xlYW47XG5cbmV4cG9ydCBsZXQgc2VydmVyRGF0YTogYW55O1xuZXhwb3J0IGxldCByZXF1ZXN0OiBXV2ViUmVxdWVzdD0gbmV3IFdXZWJSZXF1ZXN0KCk7XG5leHBvcnQgbGV0IHdlYnNlcnZlcnBvcnQ6IG51bWJlciA9IDgwODA7XG5leHBvcnQgY29uc3QgaXBBZGRyOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG5cbndlYml4LnJlYWR5KCgpID0+IHtcbiAgICBjb25zdCBhcHA6IEpldEFwcCA9IG5ldyBKZXRBcHAoe1xuICAgICAgICBpZDpcdFx0XHRBUFBOQU1FLFxuICAgICAgICB2ZXJzaW9uOlx0VkVSU0lPTixcbiAgICAgICAgc3RhcnQ6XHRcdFwiL2xheW91dFwiXG4gICAgfSk7XG4gICAgLy8gd2ViaXgubWVzc2FnZShQUk9EVUNUSU9OKTtcblxuICAgIGlmIChQUk9EVUNUSU9OKSAge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudDogTW91c2VFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgfVxuXG4gICAgYXBwLnJlbmRlcigpO1xuICAgIGFwcC51c2UoU3RhdGUsIFwiXCIpO1xufSk7IiwiaW1wb3J0IHtpcEFkZHIsIHJlcXVlc3QsIHdlYnNlcnZlcnBvcnR9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IHtjb252ZXJ0U1FMdG9SVERCLCBjb252ZXJ0VGltZXN0YW1wVG9SZXBvcnRGb3JtYXQsIGNydW1ic2VwLCBkaXNwbGF5Q3VycmVudFRpbWUsIGRpc3BsYXlDdXJyZW50VGltZUNDWVlfTU1fREQsIGZpbHRlclNlYXJjaCwgaGlkZVByb2dyZXNzSWNvbiwgc2NhZGFXZWJEYXRhRm9yUmVwb3J0LCBzaG93UHJvZ3Jlc3NJY29uLCB2YWxpZGF0ZU51bGxWYWx1ZX0gZnJvbSBcIi4vcmVwb3J0Q29udHJvbGxlclwiO1xyXG5cclxubGV0IHJlcXVlc3REYXRhOiBhbnkgPSB7fTtcclxubGV0IGdlbmVyYXRlZE9uOiBzdHJpbmcgPSBcIlwiO1xyXG5sZXQgZGV2aWNlbGlzdHZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG5sZXQgZGV2aWNlQW5hbG9nQ29sdW1uczogYW55ID0gW107XHJcbmxldCBwcm9qZWN0TmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VDb25maWcoKSB7XHJcbiAgICByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWVcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xyXG4gICAgbGV0IGNvdW50TnVtYmVyaW5nQW5hbG9nOiBudW1iZXIgPSAxO1xyXG4gICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YSwgXCJnZXRQZXJtaXNzaW9uXCIsIFwibG9jYWxob3N0XCIsIDMwMDApLnRoZW4oZnVuY3Rpb24oanNvbmRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGV2aWNlUmVwb3J0SW5pdFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uZGF0YSkpO1xyXG4gICAgICAgIGxldCByZXQ6IGFueSA9IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGV2aWNlUmVwb3J0SW5pdFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uZGF0YS5kYXRhLnJlY29yZHNldCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbmRhdGEpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGpzb25kYXRhLmRhdGEucmVjb3Jkc2V0LmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAvLyBmb3IoY29uc3RbaW5kZXgyLCB2YWx1ZTJdIG9mIHZhbHVlMS52YWx1ZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdmFsdWUuTnVtYmVyID0gY291bnROdW1iZXJpbmdBbmFsb2c7XHJcbiAgICAgICAgICAgIGNvdW50TnVtYmVyaW5nQW5hbG9nKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICg8d2ViaXgudWkuZGF0YXRhYmxlPndlYml4LiQkKFwiZGV2aWNlYW5hbG9nZGF0YVwiKSkucGFyc2UocmV0LCBcImpzb25cIik7XHJcbiAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXR1cykpO1xyXG4gICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0YXR1cy5lcnJvcnMubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJkZXZpY2Vsb2dcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLmVycm9ycy5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXZpY2VSZXBvcnRVcGRhdGVUYWJsZSgpIHtcclxuICAgIC8vIGFsZXJ0KFwiaGVyZVwiKTtcclxuICAgIC8vICoqKiAxLiBHRVQgRklSU1QgUkVQT1JUIENBVEVHT1RZIEFORCBSRVNFVCBTRUFSQ0ggRklMVEVSIENPTkRJVElPTiAqKioqXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VJcEFkZHJlc3MpO1xyXG4gICAgZGV2aWNlbGlzdHZhbHVlID0gKDx3ZWJpeC51aS5jb21ibz53ZWJpeC4kJChcImRldmljZWxpc3RcIikpLmdldFRleHQoKTtcclxuICAgIGdlbmVyYXRlZE9uID0gZGlzcGxheUN1cnJlbnRUaW1lKCk7XHJcbiAgICAvLyBhbGVydChkZXZpY2VsaXN0dmFsdWUpO1xyXG4gICAgLy8gYWxlcnQoKDx3ZWJpeC51aS5jb21ibz53ZWJpeC4kJChcImRldmljZWxpc3RcIikpLmdldFZhbHVlKCkpO1xyXG4gICAgLy8gYWxlcnQoKDx3ZWJpeC51aS5jb21ibz53ZWJpeC4kJChcImRldmljZWxpc3RcIikpLmdldFRleHQoKSk7XHJcbiAgICAoPHdlYml4LnVpLnNlYXJjaD53ZWJpeC4kJChcImRldmljZXNlYXJjaFwiKSkuc2V0VmFsdWUoXCJcIik7XHJcbiAgICAkJChcImRldmljZXNlYXJjaGZpbHRlcmNvbmRpdGlvblwiKS5kZWZpbmUoXCJ0ZW1wbGF0ZVwiLCBcIjxiPlNlYXJjaC9GaWx0ZXIgQ29uZGl0aW9uPC9iPjogLVwiKTtcclxuICAgICg8d2ViaXgudWkudGVtcGxhdGU+d2ViaXguJCQoXCJkZXZpY2VzZWFyY2hmaWx0ZXJjb25kaXRpb25cIikpLnJlZnJlc2goKTtcclxuICAgIC8vIGFsZXJ0KFwiYmxhaDJcIik7XHJcbiAgICAvLyBhbGVydChpb2NhdGVnb3J5aWQpO1xyXG5cclxuICAgICQkKFwiZGV2aWNldGl0bGVcIikuZGVmaW5lKFwidGVtcGxhdGVcIiwgXCI8Yj5UaXRsZTwvYj46IFwiICsgXCJMaXN0IG9mIFBlcm1pc3Npb24gZm9yIFByb2plY3RcIiArIFwiIG9mIDxiPlwiICsgZGV2aWNlbGlzdHZhbHVlICsgXCI8L2I+XCIpO1xyXG4gICAgKDx3ZWJpeC51aS50ZW1wbGF0ZT53ZWJpeC4kJChcImRldmljZXRpdGxlXCIpKS5yZWZyZXNoKCk7XHJcbiAgICAkJChcImRldmljZWdlbmVyYXRlZHRpbWVcIikuZGVmaW5lKFwidGVtcGxhdGVcIiwgXCI8Yj5HZW5lcmF0ZWQgT248L2I+OiBcIiArIGdlbmVyYXRlZE9uKTtcclxuICAgICg8d2ViaXgudWkudGVtcGxhdGU+d2ViaXguJCQoXCJkZXZpY2VnZW5lcmF0ZWR0aW1lXCIpKS5yZWZyZXNoKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VjYXRlZ29yeWlkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuQ2F0ZWdvcnlbTnVtYmVyKGRldmljZWNhdGVnb3J5aWQpLTFdLlRhYmxlWzBdLkNvbHVtbik7XHJcblxyXG4gICAgLy8gMy4gKioqIEdFVCBTRUxFQ1RFRCBSRVBPUlQgQ09ORklHVVJFRCBBTkFMT0cgQU5EIERJR0lUQUwgQ09MVU1OUywgQU5EIEZJTkFMTFksIFVQREFURSBUSEUgVEFCTEUgKioqXHJcbiAgICAvLyBjb25zdCBkZXZpY2VBbmFsb2dDb2x1bW5zOiBhbnkgPSBbXTtcclxuICAgIC8vIGNoZWNrIGRlZmF1bHQgbnVtYmVyaW5nIGluIGRldmljZWFuYWxvZ3RhYmxlIGlzIGVuYWJsZWQgb3IgZGlzYWJsZVxyXG5cclxuICAgIGRldmljZUFuYWxvZ0NvbHVtbnMgPSBbXHJcbiAgICAgICAge2lkOlwiTnVtYmVyXCIsIGhlYWRlcjpcIk5vLlwiLCBoaWRkZW46ZmFsc2UsIHNvcnQ6XCJpbnRcIiwgYWRqdXN0OnRydWUsIGFkanVzdEJhdGNoOjUwLCBjc3M6e1widGV4dC1hbGlnblwiOlwiY2VudGVyXCJ9fSxcclxuICAgICAgICB7aWQ6XCJVc2VybmFtZSAoSW5kaXZpZHVhbClcIiwgaGVhZGVyOlwiVXNlcm5hbWUgKEluZGl2aWR1YWwpXCIsIGhpZGRlbjpmYWxzZSwgc29ydDpcInRleHRcIiwgYWRqdXN0OnRydWUsIGFkanVzdEJhdGNoOjUwfSxcclxuICAgICAgICB7aWQ6XCJGdWxsbmFtZSAoSW5kaXZpZHVhbClcIiwgaGVhZGVyOlwiRnVsbG5hbWUgKEluZGl2aWR1YWwpXCIsIGhpZGRlbjpmYWxzZSwgc29ydDpcInRleHRcIiwgYWRqdXN0OnRydWUsIGFkanVzdEJhdGNoOjUwfVxyXG5cclxuICAgIF07XHJcbiAgICAvLyBkZXZpY2VEaWdpdGFsQ29sdW1uc1tkZXZpY2VEaWdpdGFsQ29sdW1ucy5sZW5ndGgtMV0uZmlsbHNwYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VEaWdpdGFsQ29sdW1ucyk7XHJcblxyXG4gICAgKDx3ZWJpeC51aS5kYXRhdGFibGU+d2ViaXguJCQoXCJkZXZpY2VhbmFsb2dkYXRhXCIpKS5jbGVhckFsbCgpO1xyXG4gICAgJCQoXCJkZXZpY2VhbmFsb2dkYXRhXCIpLmRlZmluZShcImNvbHVtbnNcIiwgZGV2aWNlQW5hbG9nQ29sdW1ucyk7XHJcbiAgICBnZXREZXZpY2VDb25maWcoKTtcclxuICAgICg8d2ViaXgudWkuZGF0YXRhYmxlPndlYml4LiQkKFwiZGV2aWNlYW5hbG9nZGF0YVwiKSkucmVmcmVzaENvbHVtbnMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUxpc3QoKSB7XHJcbiAgICByZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YSwgXCJnZXRQcm9qZWN0XCIsIFwibG9jYWxob3N0XCIsIDMwMDApLnRoZW4oZnVuY3Rpb24oanNvbmRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJldDogYW55ID0gW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXZpY2VSZXBvcnRJbml0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb25kYXRhLmRhdGEucmVjb3Jkc2V0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uZGF0YSkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YganNvbmRhdGEuZGF0YS5yZWNvcmRzZXQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIC8vIGZvcihjb25zdFtpbmRleDIsIHZhbHVlMl0gb2YgdmFsdWUxLnZhbHVlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtpZDp2YWx1ZS5Qcm9qVXNlcktleSwgdmFsdWU6dmFsdWUuUHJvalVzZXJOYW1lfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHJldC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRldmljZWxpc3QpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VsaXN0WzBdLmlkKTtcclxuICAgICAgICAgICAgJCQoXCJkZXZpY2VsaXN0XCIpLmRlZmluZShcIm9wdGlvbnNcIiwgcmV0KTtcclxuICAgICAgICAgICAgJCQoXCJkZXZpY2VsaXN0XCIpLmRlZmluZShcInZhbHVlXCIsIHJldFswXS5pZCk7XHJcbiAgICAgICAgICAgICQkKFwiZGV2aWNlbGlzdFwiKS5kZWZpbmUoXCJvblwiLCB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOmZ1bmN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6aWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICg8d2ViaXgudWkubGlzdD53ZWJpeC4kJChcImRldmljZWxpc3RcIikpLnJlZnJlc2goKTtcclxuICAgICAgICBwcm9qZWN0TmFtZSA9ICg8d2ViaXgudWkuY29tYm8+d2ViaXguJCQoXCJkZXZpY2VsaXN0XCIpKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIC8vIGFsZXJ0KGZpcnN0RGV2aWNlSXBBZGRyZXNzKTtcclxuICAgICAgICAvLyBhbGVydCgoPHdlYml4LnVpLmNvbWJvPndlYml4LiQkKFwiZGV2aWNlbGlzdFwiKSkuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgLy8gdGhpcy4kc2NvcGUuYXBwLnNob3coXCIvbGF5b3V0L2lvcmVwb3J0P0NhdGVnb3J5SUQ9XCIgKyBpb2NhdGVnb3J5aWQpO1xyXG4gICAgICAgIC8vICoqKiBJRiBERVZJQ0UgTElTVCBJUyBGT1VORCwgR0VORVJBVEUgRklSU1QgUkVQT1JUIE9OIFRIRSBDQVRFR09SWSBMSVNUIEFVVE9NQVRJQ0FMTFkgKioqXHJcbiAgICAgICAgLy8gZGV2aWNlY2F0ZWdvcnlpZCA9IFwiMVwiO1xyXG4gICAgICAgIGRldmljZVJlcG9ydFVwZGF0ZVRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGF0dXMpKTtcclxuICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGV2aWNlbG9nXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cywgXCJlcnJvclwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGV2aWNlUmVwb3J0SW5pdCgpIHtcclxuICAgIGdldERldmljZUxpc3QoKTtcclxufVxyXG4iLCJpbXBvcnQge2lwQWRkciwgcmVxdWVzdCwgd2Vic2VydmVycG9ydH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNydW1ic2VwOiBzdHJpbmcgPSBcIiA+IFwiO1xyXG5jb25zdCBrZXk6IHN0cmluZyA9IFwiU1hHV0xaUERPS0ZJVlVISllUUUJOTUFDRVJ4c3dnemxkcGtvaWZ1dmpodHlicW1uY2FyZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVN0cih1bmNvZGVkOiBzdHJpbmcpIHsgLy8gc3RpbGwgbm90IHdvcmtpbmcgYXMgZXhwZWN0ZWRcclxuICAgIGNvbnNvbGUubG9nKHVuY29kZWQpO1xyXG4gICAgdW5jb2RlZCA9IHVuY29kZWQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2codW5jb2RlZCk7XHJcbiAgICBsZXQgY29kZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBsZXQgY2hyOiBudW1iZXI7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB1bmNvZGVkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNociA9IHVuY29kZWQuY2hhckNvZGVBdChpKTtcclxuICAgICAgY29uc29sZS5sb2coY2hyKTtcclxuICAgICAgY29kZWQgKz0gKGNociA+PSA2NSAmJiBjaHIgPD0gOTApID9cclxuICAgICAgICBrZXkuY2hhckF0KGNociAtIDY1ICsgMjYqTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpKSA6XHJcbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xyXG4gICAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjb2RlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmNvZGVVUklDb21wb25lbnQoY29kZWQpKTtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoY29kZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyKGNvZGVkOiBzdHJpbmcpIHtcclxuICAgIGNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvZGVkKTtcclxuICAgIGNvbnNvbGUubG9nKGNvZGVkKTtcclxuICAgIGxldCB1bmNvZGVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgbGV0IGNocjogc3RyaW5nO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29kZWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY2hyID0gY29kZWQuY2hhckF0KGkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjaHIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsga2V5LmluZGV4T2YoY2hyKSAlIDI2KSk7XHJcbiAgICAgIHVuY29kZWQgKz0gKGNociA+PSBcImFcIiAmJiBjaHIgPD0gXCJ6XCIgfHwgY2hyID49IFwiQVwiICYmIGNociA8PSBcIlpcIikgP1xyXG4gICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBrZXkuaW5kZXhPZihjaHIpICUgMjYpIDpcclxuICAgICAgICBjaHI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVuY29kZWQpO1xyXG4gICAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh1bmNvZGVkKTtcclxuICAgIHJldHVybiB1bmNvZGVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lS2V5cyhvYmo6IGFueSwgbmV3S2V5czogYW55KSB7XHJcbiAgICBjb25zdCBrZXlWYWx1ZXM6IGFueSA9IE9iamVjdC5rZXlzKG9iaikubWFwKChrZXkyOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgbmV3S2V5OiBhbnkgPSBuZXdLZXlzW2tleTJdIHx8IGtleTI7XHJcbiAgICAgIHJldHVybiB7IFtuZXdLZXldOiBvYmpba2V5Ml0gfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIC4uLmtleVZhbHVlcyk7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhOiBzdHJpbmcsYjogc3RyaW5nKSB7XHJcbiAgICBhID0gYS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYS5pbmRleE9mKGIpICE9PSAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChvYmo6IGFueSwga2V5MTogYW55KSB7XHJcbiAgICByZXR1cm4gKG9ialtrZXkxXSA9PT0gbnVsbCB8fCBvYmpba2V5MV0gPT09IHVuZGVmaW5lZCB8fCBvYmpba2V5MV0gPT09IFwibnVsbFwiIHx8IG9ialtrZXkxXSA9PT0gXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU51bGxWYWx1ZShvYmo6IGFueSkge1xyXG4gICAgY29uc3Qgb2JqS2V5czogYW55ID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgIG9iaktleXMuZm9yRWFjaCgoa2V5MjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYoaXNOdWxsKG9iaiwga2V5MikpIHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGtleSBpc051bGwgOiBcIiArIEpTT04uc3RyaW5naWZ5KGtleTIsIG51bGwsIFwiIFwiKSk7XHJcbiAgICAgICAgICAgIG9ialtrZXkyXSA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodHlwZW9mKG9ialtrZXkyXSkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGtleTogXCIgKyBKU09OLnN0cmluZ2lmeShrZXkyLCBudWxsLCBcIiBcIikpO1xyXG4gICAgICAgICAgdmFsaWRhdGVOdWxsVmFsdWUob2JqW2tleTJdKTtcclxuICAgICAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTZWFyY2godHlwZTogYW55LCB0ZXh0OiBzdHJpbmcsIGNvbHVtbjogYW55KSB7XHJcbiAgICB0eXBlLmZpbHRlcihmdW5jdGlvbihvYmo6IGFueSkgeyAvLyBoZXJlIGl0IGZpbHRlcnMgZGF0YSFcclxuICAgICAgICAvLyBhbGVydChvYmopO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbik7XHJcbiAgICAgICAgLy8gcmV0dXJuIG9iai5UYWdOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KT09MDtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGNvbHVtbi5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqW3ZhbHVlLkNvbHVtbk5hbWVdKTtcclxuICAgICAgICAgICAgaWYodmFsdWUuSGlkZGVuID09PSBmYWxzZSAmJiAob2JqW3ZhbHVlLkNvbHVtbk5hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFscyhvYmpbdmFsdWUuQ29sdW1uTmFtZV0sIHRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCsxID09PSBjb2x1bW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgXCJcIiwgZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCdXR0b24ocHJpbnREYXRhOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCg8d2ViaXgudWkudGVtcGxhdGU+d2ViaXguJCQoXCJpb2NhdGVnb3J5XCIpKS5nZXRWYWx1ZXMoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygoPHdlYml4LnVpLnRlbXBsYXRlPndlYml4LiQkKFwiaW9nZW5lcmF0ZWR0aW1lXCIpKS5nZXRWYWx1ZXMoKSk7XHJcbiAgICB3ZWJpeC5wcmludChwcmludERhdGEsIHttb2RlOlwibGFuZHNjYXBlXCIsIG1hcmdpbjo0MCwgZG9jSGVhZGVyOlwiSU8gTGlzdFwiLCBmaXQ6XCJkYXRhXCJ9KTsvLyAsIGZpdDpcImRhdGFcIiwgdHJpbTp0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3TmFtZShpZFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInZpZXdOYW1lIGlkU3RyaW5nOlwiICsgaWRTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHdlYml4LiQkKGlkU3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9ncmVzc0Jhcih2aWV3OiBzdHJpbmcsIHRvdGFsUm93OiBudW1iZXIsIGN1cnJlbnRSb3c6IG51bWJlcikge1xyXG4gICAgbGV0IHBlcmNlbnRhZ2VQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0IHByb2dyZXNzVmlld1VpOiBhbnkgPSAkJCh2aWV3KTtcclxuICAgIHBlcmNlbnRhZ2VQcm9ncmVzcyA9IE1hdGgucm91bmQoKGN1cnJlbnRSb3cvdG90YWxSb3cpKjEwMCk7XHJcbiAgICBwcm9ncmVzc1ZpZXdVaS5kZWZpbmUoXCJ0ZW1wbGF0ZVwiLCBcIjxkaXYgY2xhc3M9J3NxdWFyZS1ncmVlbicgc3R5bGU9J2hlaWdodDoxMHB4O3dpZHRoOlwiICsgcGVyY2VudGFnZVByb2dyZXNzICsgXCIlJz48L2Rpdj4gPC9kaXY+XCIpO1xyXG4gICAgcHJvZ3Jlc3NWaWV3VWkucmVmcmVzaCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2dyZXNzSWNvbih2aWV3OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGF2aWV3OiBhbnkgPSB3ZWJpeC5leHRlbmQoJCQodmlldyksIHdlYml4LlByb2dyZXNzQmFyKTtcclxuICAgIGRhdGF2aWV3LnNob3dQcm9ncmVzcyh7XHJcbiAgICAgICAgcG9zaXRpb246MCxcclxuICAgICAgICAvLyBkZWxheTogNTAwLFxyXG4gICAgICAgIHR5cGU6XCJpY29uXCIsXHJcbiAgICAgICAgaWNvbjpcInJlZnJlc2hcIixcclxuICAgICAgICBoaWRlOmZhbHNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQcm9ncmVzc0ljb24odmlldzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRhdmlldzogYW55ID0gd2ViaXguZXh0ZW5kKCQkKHZpZXcpLCB3ZWJpeC5Qcm9ncmVzc0Jhcik7XHJcbiAgICBkYXRhdmlldy5oaWRlUHJvZ3Jlc3Moe1xyXG4gICAgICAgIC8vIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgaGlkZTp0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbmREYXRhUHJvY2Vzc2luZzFPcmkob2JqZWN0czogYW55LCByZXBvcnRzVHlwZTogc3RyaW5nKSB7XHJcbiAgICB2YWxpZGF0ZU51bGxWYWx1ZShvYmplY3RzLnZhbHVlcyk7XHJcblxyXG4gICAgc3dpdGNoIChyZXBvcnRzVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBbGFybSBIaXN0b3J5IEpvdXJuYWwgKEFsYXJtIC0gRXZlbnQpXCI6XHJcbiAgICAgICAgICAgIG9iamVjdHMudmFsdWVzLmZvckVhY2goKG9iakVsZW1udHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqRWxlbW50cy5GTEFHQUNLID0gY2hlY2tGbGFnQWNrKG9iakVsZW1udHMuRkxBR0FDSyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAoPHdlYml4LnVpLmRhdGF0YWJsZT53ZWJpeC4kJChcImFsYXJtaGlzdG9yeWpvdXJuYWxkYXRhXCIpKS5wYXJzZShvYmplY3RzLnZhbHVlcywgXCJqc29uXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50V2l0aE9wdGlvbnNCdXR0b24odHlwZTogYW55LCBvcmllbnRhdGlvbjogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nLCBmaXQ6IHN0cmluZykge1xyXG4gICAgLy8gYWxlcnQoZmlsZW5hbWUpO1xyXG4gICAgY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgbW9kZTpvcmllbnRhdGlvbixcclxuICAgICAgICBtYXJnaW46NDAsXHJcbiAgICAgICAgZG9jSGVhZGVyOmZpbGVuYW1lLFxyXG4gICAgICAgIHRyaW06ZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgZml0ID09PSBcImZpdCBieSBkYXRhXCI/IGNvbmZpZy5maXQgPSBcImRhdGFcIjogY29uZmlnLmZpdCA9IFwicGFnZVwiO1xyXG4gICAgd2ViaXgucHJpbnQodHlwZSxjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0QnV0dG9uKGV4cG9ydERhdGE6IGFueSkge1xyXG4gICAgY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgdGFibGU6e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6e1xyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjp7d2lkdGg6MjgwfSxcclxuICAgICAgICAgICAgVGFnTmFtZTp7d2lkdGg6MTIwfSxcclxuICAgICAgICAgICAgUmFuZ2U6e3dpZHRoOjgwfSxcclxuICAgICAgICAgICAgUkJFV2luZG93Ont3aWR0aDoxMDB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWxlbmFtZTpcImRhdGF0YWJsZVwiLFxyXG4gICAgICAgIG9yaWVudGF0aW9uOlwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgZG9jSGVhZGVyOlwiSU8gTGlzdFwiLFxyXG4gICAgICAgIHJhd1ZhbHVlczpmYWxzZSxcclxuICAgICAgICBhdXRvd2lkdGg6ZmFsc2VcclxuICAgIH07XHJcbiAgICB3ZWJpeC50b1BERihleHBvcnREYXRhLCBjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0V2l0aE9wdGlvbnNCdXR0b24odHlwZTogYW55LCBmb3JtYXQ6IHN0cmluZywgb3JpZW50YXRpb246IHN0cmluZywgZGV2aWNlRXhwb3J0Q29sdW1uOiBhbnksIHNlbGVjdGVkY29sdW1uczogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nLCB0YWJsZURlc2M6IHN0cmluZywgbWF4UmVjb3JkV2FybmluZzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpZ25vcmU6IGFueSA9IFtdO1xyXG4gICAgbGV0IGNvdW50OiBudW1iZXIgPSAxO1xyXG4gICAgY29uc3QgY29sdW1uczogYW55ID0gW107XHJcbiAgICBjb2x1bW5zLk5vID0ge1xyXG4gICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihvYmo6IGFueSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQrKztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAzMFxyXG4gICAgfTtcclxuXHJcbiAgICBpZihmb3JtYXQgPT09IFwicGRmXCIgfHwgZm9ybWF0ID09PSBcImNzdlwiKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRjb2x1bW5zUmVzOiBhbnkgPSBzZWxlY3RlZGNvbHVtbnMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgZGV2aWNlRXhwb3J0Q29sdW1uLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkY29sdW1uc1Jlcy5pbmNsdWRlcyh2YWx1ZS5pZCk/Y29sdW1uc1t2YWx1ZS5pZF0gPSB0cnVlOmlnbm9yZVt2YWx1ZS5pZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihmb3JtYXQgPT09IFwicGRmXCIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZGNvbHVtbnNSZXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlnbm9yZSk7XHJcbiAgICAgICAgLy8gY29sdW1ucy5yYXdWYWx1ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY291bnQyOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogYW55ID0ge1xyXG4gICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTo4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbHVtbnM6Y29sdW1ucyxcclxuICAgICAgICAgICAgaWdub3JlOmlnbm9yZSxcclxuICAgICAgICAgICAgZmlsZW5hbWU6ZmlsZW5hbWUsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOm9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICBkb2NIZWFkZXI6e1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdGFibGVEZXNjLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjoweDY2MzM5OVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBkb2NIZWFkZXJJbWFnZTp7dXJsOlwibW9kZWxzL0hlYWRlci5KUEdcIiwgb3JkZXI6MCB9LFxyXG4gICAgICAgICAgICBhdXRvd2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgZmlsdGVyOmZ1bmN0aW9uKG9iajogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDIrKztcclxuICAgICAgICAgICAgICAgIGlmKGNvdW50MiA8PSBtYXhSZWNvcmRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHdlYml4LnRvUERGKHR5cGUsIGNvbmZpZyk7XHJcbiAgICAgICAgLy8gJCQoXCJpb2V4cG9ydHdpblwiKS5kaXNhYmxlKCk7XHJcbiAgICAgICAgLypjb25zdCBkYXRhdGFibGVleHRlbmQ6IGFueSA9IHdlYml4LmV4dGVuZCgkJChcImlvZXhwb3J0d2luXCIpLCB3ZWJpeC5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgZGF0YXRhYmxlZXh0ZW5kLnNob3dQcm9ncmVzcyh7XHJcbiAgICAgICAgICAgIHR5cGU6XCJib3R0b21cIixcclxuICAgICAgICAgICAgZGVsYXk6MjAwMCxcclxuICAgICAgICAgICAgaGlkZTp0cnVlXHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICB3ZWJpeC50b1BERih0eXBlLCBjb25maWcpLnRoZW4oZnVuY3Rpb24oYmxvYjogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2IpO1xyXG4gICAgICAgICAgICAvLyAkJChcImlvZXhwb3J0d2luXCIpLmVuYWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gXCJjc3ZcIikge1xyXG4gICAgICAgIGxldCBjb3VudDI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgd2ViaXguY3N2LmRlbGltaXRlci5jb2xzID0gXCIsXCI7XHJcbiAgICAgICAgY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOmZpbGVuYW1lLFxyXG4gICAgICAgICAgICBjb2x1bW5zOmNvbHVtbnMsXHJcbiAgICAgICAgICAgIGlnbm9yZTppZ25vcmUsXHJcbiAgICAgICAgICAgIGZpbHRlcjpmdW5jdGlvbihvYmo6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQyKys7XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudDIgPD0gbWF4UmVjb3JkV2FybmluZyoxMCkgeyAvLyB0ZW1wb3JhcmlseSBzZXQgbWF4IHRvIDUwMCoxMDAgPSA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gd2ViaXgudG9DU1YodHlwZSwgY29uZmlnKTtcclxuICAgICAgICB3ZWJpeC50b0NTVih0eXBlLCBjb25maWcpLnRoZW4oZnVuY3Rpb24oYmxvYjogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2IpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09IFwicG5nXCIpIHtcclxuICAgICAgICAvLyBhbGVydCh0eXBlKTtcclxuICAgICAgICBjb25zdCBjb25maWc6IGFueSA9IHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6ZmlsZW5hbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYml4LnRvUE5HKHR5cGUsIGNvbmZpZyk7XHJcbiAgICAgICAgLyp3ZWJpeC50b1BORyh0eXBlLCB7XHJcbiAgICAgICAgICAgIGRvd25sb2FkOmZhbHNlXHJcbiAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oYmxvYjogYW55KSB7XHJcbiAgICAgICAgICAgIHdlYml4Lmh0bWwuZG93bmxvYWQoYmxvYiwgXCJteWZpbGUucG5nXCIpO1xyXG4gICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0ZG9jRGVmaW5pdGlvblBkZihjb250ZW50OiBhbnksIGV4cG9ydE9yaWVudGF0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRvY0RlZmluaXRpb25QZGY6IGFueSA9IHt9O1xyXG4gICAgZG9jRGVmaW5pdGlvblBkZi5zdHlsZXMgPSB7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgICAgICAgICBib2xkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWJsZVRpdGxlOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgfVxyXG4gICAgfTtcclxuICAgIGRvY0RlZmluaXRpb25QZGYucGFnZU9yaWVudGF0aW9uID0gZXhwb3J0T3JpZW50YXRpb247XHJcbiAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQgPSBbXTtcclxuICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgY29udGVudC50YWJsZS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWUucmVwb3J0ZGF0YSwgbnVsbCwgXCIgXCIpKTtcclxuICAgICAgICBpbmRleCA9PT0gMD9cclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvblBkZi5jb250ZW50LnB1c2goe3RleHQ6IHZhbHVlLnRhYmxlZGVzYy5kZXNjMSwgc3R5bGU6IFwidGFibGVUaXRsZVwiLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCJ9KTpcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvblBkZi5jb250ZW50LnB1c2goe3RleHQ6IHZhbHVlLnRhYmxlZGVzYy5kZXNjMSwgc3R5bGU6IFwidGFibGVUaXRsZVwiLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIHBhZ2VCcmVhazogXCJiZWZvcmVcIn0pO1xyXG4gICAgICAgIGRvY0RlZmluaXRpb25QZGYuY29udGVudC5wdXNoKHt0ZXh0OiB2YWx1ZS50YWJsZWRlc2MuZGVzYzIsIHN0eWxlOiBcInRhYmxlVGl0bGVcIiwgYWxpZ25tZW50OiBcImNlbnRlclwifSk7XHJcbiAgICAgICAgZG9jRGVmaW5pdGlvblBkZi5jb250ZW50LnB1c2goe3RleHQ6IHZhbHVlLnRhYmxlZGVzYy5kZXNjMywgc3R5bGU6IFwidGFibGVUaXRsZVwiLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCJ9KTtcclxuICAgICAgICBkb2NEZWZpbml0aW9uUGRmLmNvbnRlbnQucHVzaCh7dGV4dDpcIlwifSk7XHJcbiAgICAgICAgZG9jRGVmaW5pdGlvblBkZi5jb250ZW50LnB1c2goe1xyXG4gICAgICAgICAgICBzdHlsZTogXCJjb250ZW50XCIsXHJcbiAgICAgICAgICAgIHRhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJSb3dzOiAxLFxyXG4gICAgICAgICAgICAgICAgYm9keTp2YWx1ZS5yZXBvcnRkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkb2NEZWZpbml0aW9uUGRmO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0ZG9jRGVmaW5pdGlvbkNzdihjb250ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGRvY0RlZmluaXRpb25Dc3Y6IGFueSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBjb250ZW50LnRhYmxlLmVudHJpZXMoKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlLnJlcG9ydGRhdGEpLCBudWxsLCBcIiBcIik7XHJcbiAgICAgICAgZG9jRGVmaW5pdGlvbkNzdi5wdXNoKFt2YWx1ZS50YWJsZWRlc2MuZGVzYzEsIHZhbHVlLnRhYmxlZGVzYy5kZXNjMiwgdmFsdWUudGFibGVkZXNjLmRlc2MzXSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgyLCB2YWx1ZTJdIG9mIHZhbHVlLnJlcG9ydGRhdGEuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlMik7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb25Dc3YucHVzaCh2YWx1ZTIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkb2NEZWZpbml0aW9uQ3N2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0UmVwb3J0KGV4cG9ydHdpbmlkOiBzdHJpbmcsIGNvbnRlbnQ6IGFueSwgZXhwb3J0Rm9ybWF0OiBzdHJpbmcsIGV4cG9ydE9yaWVudGF0aW9uOiBzdHJpbmcpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbnRlbnQsIG51bGwsIFwiIFwiKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhleHBvcnRGb3JtYXQpO1xyXG4gICAgLy8gY29udmVydCB0aGUgY29udGVudCB0byBwZGZtYWtlIGZvcm1hdFxyXG4gICAgaWYoZXhwb3J0Rm9ybWF0PT09XCJwZGZcIikge1xyXG4gICAgICAgIGNvbnN0IGRvY0RlZmluaXRpb25QZGY6IGFueSA9IGdldGRvY0RlZmluaXRpb25QZGYoY29udGVudCwgZXhwb3J0T3JpZW50YXRpb24pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRvY0RlZmluaXRpb25QZGYsIG51bGwsIFwiIFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhUGRmOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGZvbGRlcjogW1wicHVibGljXCJdLFxyXG4gICAgICAgICAgICBmaWxlbmFtZTogY29udGVudC5maWxlbmFtZSxcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbjogZG9jRGVmaW5pdGlvblBkZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc2hvd1Byb2dyZXNzSWNvbihcIlwiKTtcclxuICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YVBkZikubGVuZ3RoKTtcclxuICAgICAgICAvLyBhZnRlciBkb2luZyBiZW5jaG1hcmsgdGVzdGluZywgcGRmbWFrZSB1bmFibGUgdG8gcHJvY2VzcyBkYXRhIHdpdGggc2l6ZSBtb3JlIHRoYW4gNSwwMDAsMDAwIGJ5dGVzXHJcbiAgICAgICAgc2hvd1Byb2dyZXNzSWNvbihleHBvcnR3aW5pZCk7XHJcbiAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGFQZGYpLmxlbmd0aCA8IDUwMDAwMDApIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YVBkZiwgXCJjcmVhdGVQREZGaWxlXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NJY29uKGV4cG9ydHdpbmlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5wZGZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuZG93bmxvYWRSZXBvcnQoY29udGVudC5maWxlbmFtZStcIi5wZGZcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXguaHRtbC5kb3dubG9hZChqc29uZGF0YTIsIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5wZGZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEyOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBbY29udGVudC5maWxlbmFtZStcIi5wZGZcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcjogW1wicHVibGljXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhMiwgXCJkZWxldGVGaWxlc1NjYWRhV2ViXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNTVi9QREYgUmVwb3J0IGFyZSBzdWNjZXNzZnVsbHkgZGVsZXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJlcnJvclwiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzLmVycm9yX21zZ30sIFwibG9nXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkZhaWxlZCB0byBnZXQgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIucGRmLiBcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBnZXQgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIucGRmLiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyAgY29udGVudC5maWxlbmFtZSArIFwiLnBkZi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInNvY2tldENsb3NlXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudC5maWxlbmFtZSArIFwiLnBkZi4gXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWJpeC5hbGVydChcIkRhdGEgaXMgdG9vIGxhcmdlLiBQbGVhc2UgZXhwb3J0IHVzaW5nIENTVi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBjb250ZW50IHRvIGNzdi1zdHJpbmdpZnkgZm9ybWF0XHJcbiAgICAgICAgY29uc3QgZG9jRGVmaW5pdGlvbkNzdjogYW55ID0gZ2V0ZG9jRGVmaW5pdGlvbkNzdihjb250ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGFDc3Y6IGFueSA9IHtcclxuICAgICAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl0sXHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBjb250ZW50LmZpbGVuYW1lLFxyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uOiBkb2NEZWZpbml0aW9uQ3N2XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZG9jRGVmaW5pdGlvbkNzdikubGVuZ3RoKTtcclxuICAgICAgICAvLyBjc3Ytc3RyaW5naWZ5IGlzIGFjdHVhbGx5IGFibGUgdG8gaGFuZGxlIGxhcmdlciBkYXRhIGJ1dCB0aGUgc2VydmVyJ3MgYm9keSBwYXJzZXIgbGltaXQgdGhlIHJlcXVlc3QgYm9keSB1cCB0byA1bWJcclxuICAgICAgICBpZihKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YUNzdikubGVuZ3RoIDwgNTAwMDAwMCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhQ3N2LCBcImNyZWF0ZUNTVkZpbGVcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5jc3ZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuZG93bmxvYWRSZXBvcnQoY29udGVudC5maWxlbmFtZStcIi5jc3ZcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXguaHRtbC5kb3dubG9hZChqc29uZGF0YTIsIGNvbnRlbnQuZmlsZW5hbWUgKyBcIi5jc3ZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEyOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBbY29udGVudC5maWxlbmFtZStcIi5jc3ZcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcjogW1wicHVibGljXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhMiwgXCJkZWxldGVGaWxlc1NjYWRhV2ViXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNTVi9QREYgUmVwb3J0IGFyZSBzdWNjZXNzZnVsbHkgZGVsZXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJlcnJvclwiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzLmVycm9yX21zZ30sIFwibG9nXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkZhaWxlZCB0byBnZXQgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIuY3N2LiBcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBnZXQgXCIgKyBjb250ZW50LmZpbGVuYW1lICsgXCIuY3N2LiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyAgY29udGVudC5maWxlbmFtZSArIFwiLmNzdi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInNvY2tldENsb3NlXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudC5maWxlbmFtZSArIFwiLmNzdi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2ViaXguYWxlcnQoXCJEYXRhIGlzIHRvbyBsYXJnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3N2UGRmU2VuZEVtYWlsKGNvbnRlbnRDU1Y6IGFueSwgY29udGVudFBERjogYW55LCBlbWFpbGZvcm1hdGNzdjogYW55LCBlbWFpbGZvcm1hdHBkZjogYW55LCBmb3JtOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29udGVudCwgbnVsbCwgXCIgXCIpKTtcclxuICAgIC8vIGNvbnZlcnQgdGhlIGNvbnRlbnQgdG8gcGRmbWFrZSBmb3JtYXRcclxuICAgIGNvbnN0IGRvY0RlZmluaXRpb25QZGY6IGFueSA9IGdldGRvY0RlZmluaXRpb25QZGYoY29udGVudFBERiwgXCJsYW5kc2NhcGVcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkb2NEZWZpbml0aW9uUGRmLCBudWxsLCBcIiBcIikpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3REYXRhUGRmOiBhbnkgPSB7XHJcbiAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl0sXHJcbiAgICAgICAgZmlsZW5hbWU6IGNvbnRlbnRQREYuZmlsZW5hbWUsXHJcbiAgICAgICAgZG9jRGVmaW5pdGlvbjogZG9jRGVmaW5pdGlvblBkZlxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IHRoZSBjb250ZW50IHRvIGNzdi1zdHJpbmdpZnkgZm9ybWF0XHJcbiAgICBjb25zdCBkb2NEZWZpbml0aW9uQ3N2OiBhbnkgPSBnZXRkb2NEZWZpbml0aW9uQ3N2KGNvbnRlbnRDU1YpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3REYXRhQ3N2OiBhbnkgPSB7XHJcbiAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl0sXHJcbiAgICAgICAgZmlsZW5hbWU6IGNvbnRlbnRDU1YuZmlsZW5hbWUsXHJcbiAgICAgICAgZG9jRGVmaW5pdGlvbjogZG9jRGVmaW5pdGlvbkNzdlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhdHRhY2hlZEZpbGVzOiBhbnkgPSBbXTtcclxuICAgIC8vIGFmdGVyIGRvaW5nIGJlbmNobWFyayB0ZXN0aW5nLCBwZGZtYWtlIHVuYWJsZSB0byBwcm9jZXNzIGRhdGEgd2l0aCBzaXplIG1vcmUgdGhhbiA1LDAwMCwwMDAgYnl0ZXNcclxuICAgIGlmKEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhUGRmKS5sZW5ndGggPCA1MDAwMDAwICYmIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhQ3N2KS5sZW5ndGggPCA1MDAwMDAwKSB7XHJcbiAgICAgICAgaWYoZW1haWxmb3JtYXRjc3YgJiYgZW1haWxmb3JtYXRwZGYpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YUNzdiwgXCJjcmVhdGVDU1ZGaWxlXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2XCIgKyBcIiBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3ZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2hlZEZpbGVzLnB1c2goY29udGVudENTVi5maWxlbmFtZSArIFwiLmNzdlwiKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGFQZGYsIFwiY3JlYXRlUERGRmlsZVwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGEyOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmXCIgKyBcIiBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmXCIgKyBcIiBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaGVkRmlsZXMucHVzaChjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRFbWFpbChkYXRhLCBmb3JtLCBhdHRhY2hlZEZpbGVzKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArIGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGYuIFwiICsgc3RhdHVzLmVycm9yX21zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzb2NrZXRDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIGNyZWF0ZSBcIiArICBjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZTogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic29ja2V0Q2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGVtYWlsZm9ybWF0Y3N2ICYmICFlbWFpbGZvcm1hdHBkZikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhQ3N2LCBcImNyZWF0ZUNTVkZpbGVcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRDU1YuZmlsZW5hbWUgKyBcIi5jc3ZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoY29udGVudENTVi5maWxlbmFtZSArIFwiLmNzdlwiICsgXCIgaXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIsIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgICAgIGF0dGFjaGVkRmlsZXMucHVzaChjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VuZEVtYWlsKGRhdGEsIGZvcm0sIGF0dGFjaGVkRmlsZXMpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2csIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgXCIgKyBjb250ZW50Q1NWLmZpbGVuYW1lICsgXCIuY3N2LiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFlbWFpbGZvcm1hdGNzdiAmJiBlbWFpbGZvcm1hdHBkZikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhUGRmLCBcImNyZWF0ZVBERkZpbGVcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KS50aGVuKGZ1bmN0aW9uKGpzb25kYXRhMjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50UERGLmZpbGVuYW1lICsgXCIucGRmXCIgKyBcIiBpcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKGNvbnRlbnRQREYuZmlsZW5hbWUgKyBcIi5wZGZcIiArIFwiIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2hlZEZpbGVzLnB1c2goY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZlwiKTtcclxuICAgICAgICAgICAgICAgIHNlbmRFbWFpbChkYXRhLCBmb3JtLCBhdHRhY2hlZEZpbGVzKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY3JlYXRlIFwiICsgY29udGVudFBERi5maWxlbmFtZSArIFwiLnBkZi4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3ZWJpeC5hbGVydChcIkRhdGEgaXMgdG9vIGxhcmdlLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRFbWFpbChkYXRhOiBhbnksIGZvcm06IGFueSwgYXR0YWNoZWRGaWxlczogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5TQ0FEQV9XRUIpOyAvLyBjYW5ub3QgcmVhZCBlbnYgdmFyXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2hlZEZpbGVzKTtcclxuICAgIGNvbnN0IHJlY2lwaWVudDogc3RyaW5nID0gZm9ybS5nZXRWYWx1ZXMoKS5lbWFpbHJlY2lwaWVudDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlY2lwaWVudCk7XHJcbiAgICBjb25zdCBzdWJqZWN0OiBzdHJpbmcgPSBmb3JtLmdldFZhbHVlcygpLmVtYWlsc3ViamVjdDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN1YmplY3QpO1xyXG4gICAgY29uc3QgbWVzc2FnZTogc3RyaW5nID0gZm9ybS5nZXRWYWx1ZXMoKS5lbWFpbG1lc3NhZ2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIGNvbnN0IGF0dGFjaG1lbnQ6IGFueSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBhdHRhY2hlZEZpbGVzLmVudHJpZXMoKSkge1xyXG4gICAgICAgYXR0YWNobWVudC5wdXNoKHtcclxuICAgICAgICAgICBmaWxlbmFtZTogdmFsdWUsXHJcbiAgICAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl1cclxuICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coYXR0YWNobWVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhdHRhY2htZW50LCBudWxsLCBcIiBcIikpO1xyXG4gICAgY29uc3QgcmVxdWVzdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzZW5kZXI6e1xyXG4gICAgICAgICAgICBTZXJ2ZXJOYW1lOiBkYXRhLlNlbmRlclswXS5TZXJ2ZXJOYW1lLFxyXG4gICAgICAgICAgICBFbWFpbEFkZHJlc3M6IGRhdGEuU2VuZGVyWzBdLkVtYWlsQWRkcmVzcyxcclxuICAgICAgICAgICAgUGFzc3dvcmQ6IHdpbmRvdy5hdG9iKGRhdGEuU2VuZGVyWzBdLlBhc3N3b3JkKSAvLyBUT0RPOiB0ZW1wb3JhcnkgZW5jcnlwdGlvbiB1c2luZyBzaW1wbGUgYmFzZTY0IGVuY29kaW5nLiBIYXZlIHRvIGRlY2lkZSBvbiBwcm9wZXIgZW5jcnlwdGlvbiBmb3IgcGFzc3dvcmRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50LFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBhdHRhY2htZW50OiBhdHRhY2htZW50XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVzVG9EZWxldGU6IGFueSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBhdHRhY2hlZEZpbGVzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGZpbGVzVG9EZWxldGUucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZmlsZXNUb0RlbGV0ZSwgbnVsbCwgXCIgXCIpKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0RGF0YTI6IGFueSA9IHtcclxuICAgICAgICBmaWxlbmFtZTogZmlsZXNUb0RlbGV0ZSwgLy8gYWxyZWFkeSB3aXRoIGV4dGVuc2lvbiBuYW1lXHJcbiAgICAgICAgZm9sZGVyOiBbXCJwdWJsaWNcIl1cclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbmRFbWFpbFwiKTtcclxuICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEsIFwic2VuZEVtYWlsXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgaXMgc3VjY2Vzc2Z1bGx5IHNlbnQuXCIpO1xyXG4gICAgICAgIHdlYml4Lm1lc3NhZ2UoXCJFbWFpbCBpcyBzdWNjZXNzZnVsbHkgc2VudC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZGVidWdcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJFbWFpbCBpcyBzdWNjZXNzZnVsbHkgc2VudC5cIn0sIFwibG9nXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCk7XHJcbiAgICAgICAgLy8gKDx3ZWJpeC51aS53aW5kb3c+d2ViaXguJCQoXCJkZXZpY2VlbWFpbHdpbjJcIikpLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gZm9ybS5nZXRUb3BQYXJlbnRWaWV3KCkuY2xvc2UoKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhMiwgXCJkZWxldGVGaWxlc1NjYWRhV2ViXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiKTtcclxuICAgICAgICAgICAgLy8gd2ViaXgubWVzc2FnZShcIkNTVi9QREYgUmVwb3J0IGFyZSBzdWNjZXNzZnVsbHkgZGVsZXRlZC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czogYW55KSB7XHJcbiAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1cy5lcnJvcl9tc2csIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZXJyb3JcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1cy5lcnJvcl9tc2d9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBkZWxldGUgQ1NWL1BERiBSZXBvcnQuIFwiICsgc3RhdHVzLmVycm9yX21zZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZUVtYWlsUmVjaXBpZW50KGRhdGEsIHJlY2lwaWVudCk7XHJcbiAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgIHdlYml4Lm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkZhaWxlZCB0byBzZW5kIGVtYWlsLiBcIiArIHN0YXR1cy5lcnJvcl9tc2csXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgZXhwaXJlOiAtMSxcclxuICAgICAgICAgICAgaWQ6IFwic29ja2V0Q2xvc2VcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCh7bG9nTGV2ZWw6IFwiZXJyb3JcIiwgYXBwbGljYXRpb25OYW1lOiBcIndyZXBvcnRcIiwgbWVzc2FnZTogXCJGYWlsZWQgdG8gc2VuZCBlbWFpbC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnfSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBzZW5kIGVtYWlsLiBcIiArIHN0YXR1cy5lcnJvcl9tc2cpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmRQcm9taXNlKHJlcXVlc3REYXRhMiwgXCJkZWxldGVGaWxlc1NjYWRhV2ViXCIsIGlwQWRkciwgd2Vic2VydmVycG9ydCkudGhlbihmdW5jdGlvbihqc29uZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1NWL1BERiBSZXBvcnQgYXJlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiKTtcclxuICAgICAgICAgICAgLy8gd2ViaXgubWVzc2FnZShcIkNTVi9QREYgUmVwb3J0IGFyZSBzdWNjZXNzZnVsbHkgZGVsZXRlZC5cIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHN0YXR1czI6IGFueSkge1xyXG4gICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMyLmVycm9yX21zZywgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImVycm9yXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBDU1YvUERGIFJlcG9ydC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnfSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gZGVsZXRlIENTVi9QREYgUmVwb3J0LiBcIiArIHN0YXR1czIuZXJyb3JfbXNnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVtYWlsUmVjaXBpZW50KGRhdGE6IGFueSwgcmVjaXBpZW50OiBzdHJpbmcpIHtcclxuICAgIGxldCByZXF1ZXN0RGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCBleGlzdGVkRW1haWw6IGFueSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBkYXRhLlJlY2lwaWVudC5lbnRyaWVzKCkpIHtcclxuICAgICAgICBleGlzdGVkRW1haWwucHVzaCh2YWx1ZS5FbWFpbEFkZHJlc3MpO1xyXG4gICAgfVxyXG4gICAgZm9yKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIHJlY2lwaWVudC5zcGxpdChcIixcIikuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYoIWV4aXN0ZWRFbWFpbC5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZGF0YS5SZWNpcGllbnQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBFbWFpbElkOiBkYXRhLlJlY2lwaWVudC5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICAgICAgRnVsbE5hbWU6dmFsdWUuc3Vic3RyKDAsdmFsdWUuaW5kZXhPZihcIkBcIikpLFxyXG4gICAgICAgICAgICAgICAgRW1haWxBZGRyZXNzOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIEhpZGRlbjogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihkYXRhLlJlY2lwaWVudC5sZW5ndGggIT09IGV4aXN0ZWRFbWFpbC5sZW5ndGgpIHtcclxuICAgICAgICByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgICAgZm9sZGVyOiBzY2FkYVdlYkRhdGFGb3JSZXBvcnQsXHJcbiAgICAgICAgICAgIGZpbGVuYW1lOlwiZW1haWxzZXR0aW5nLmpzb25cIixcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kUHJvbWlzZShyZXF1ZXN0RGF0YSwgXCJ3cml0ZVNjYWRhV2ViRGF0YVwiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICByZXBvcnRDb25maWdTeW5jKHJlcXVlc3REYXRhLCBcIndyaXRlU2NhZGFXZWJEYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIGlzIHN1Y2Nlc3NmdWxseSBhZGRlZC5cIik7XHJcbiAgICAgICAgICAgIHdlYml4Lm1lc3NhZ2UoXCJFbWFpbCBpcyBzdWNjZXNzZnVsbHkgYWRkZWQuXCIsIFwiaW5mb1wiKTtcclxuICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RhdHVzLmVycm9yX21zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzb2NrZXRDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImVycm9yXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHNhdmUgZW1haWwgcmVjaXBpZW50LiBcIiArIHN0YXR1cy5lcnJvcl9tc2d9LCBcImxvZ1wiLCBpcEFkZHIsIHdlYnNlcnZlcnBvcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMuZXJyb3JfbXNnLCBcImVycm9yXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gd2ViaXgubWVzc2FnZShtc2cpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRpbWVTdGFtcCh0aW1lc3RhbXA6IGFueSkge1xyXG4gICAgLy8gYWxlcnQodGltZXN0YW1wKTtcclxuICAgIGNvbnN0IGQ6IGFueSA9IG5ldyBEYXRlKHRpbWVzdGFtcCAqIDEwMDApO1xyXG4gICAgLy8gYWxlcnQoZCk7XHJcbiAgICB0aW1lc3RhbXAgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVkLyVtLyVZICVIOiVpOiVzLiVTXCIsIGZhbHNlKShuZXcgRGF0ZSgpKTtcclxuICAgIC8vIGNvbnN0IHl5eXk6IHN0cmluZyA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIC8vIGNvbnN0IG1tOiBzdHJpbmcgPSAoXCIwXCIgKyAoZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICAgIC8vIGNvbnN0IGRkOiBzdHJpbmcgPSAoXCIwXCIgKyBkLmdldERhdGUoKSkuc2xpY2UoLTIpO1xyXG4gICAgLy8gdGltZXN0YW1wID0gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xyXG4gICAgLy8gYWxlcnQodGltZXN0YW1wKTtcclxuICAgIHJldHVybiB0aW1lc3RhbXA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lRGlmZmVyZW5jZShzcnRpbWU6IG51bWJlcikge1xyXG4gICAgc3J0aW1lID0gdHlwZW9mIHNydGltZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHNydGltZSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3Qgbm93OiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmKGlzTmFOKHNydGltZSkpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHNydGltZSArIFwiIFwiICsgbm93KTtcclxuICAgIGxldCBtaWxpc2VjRGlmZjogbnVtYmVyID0gMDtcclxuICAgIHNydGltZSA8IG5vdyA/IG1pbGlzZWNEaWZmID0gbm93IC0gc3J0aW1lIDogbWlsaXNlY0RpZmYgPSBzcnRpbWUgLSBub3c7XHJcbiAgICBjb25zdCBkYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKG1pbGlzZWNEaWZmIC8gMTAwMCAvIDYwIC8gKDYwICogMjQpKTtcclxuICAgIGNvbnN0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKChtaWxpc2VjRGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgIGNvbnN0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoKG1pbGlzZWNEaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZURpZmY6IERhdGUgPSBuZXcgRGF0ZShtaWxpc2VjRGlmZik7XHJcblxyXG4gICAgcmV0dXJuIGRheXMgKyBcImRcIisgaG91cnMgKyBcImhcIiArIG1pbnV0ZXMgKyBcIm1pblwiOyAvLyAgKyBkYXRlRGlmZi5nZXRTZWNvbmRzKCkgKyBcInNlY1wiXHJcbiAgICAvLyByZXR1cm4gZGF5cyArIFwiZFwiKyBkYXRlRGlmZi5nZXRIb3VycygpICsgXCJoXCIgKyBkYXRlRGlmZi5nZXRNaW51dGVzKCkgKyBcIm1pblwiOyAvLyAgKyBkYXRlRGlmZi5nZXRTZWNvbmRzKCkgKyBcInNlY1wiXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9SZXBvcnRGb3JtYXQodGltZXN0YW1wOiBzdHJpbmcpIHtcclxuICAgIC8vIEluIHdsZGF0YXNlcnZlciwgaWYgd2UgdXNlIGNvbnZlcnQoU3JjVGltZSksIGl0IHdpbGwgcmV0dXJuIHVwIHRvIFwidGltZXN0YW1wX3VwX3RvX3NlY29uZC5taWNyb3NlY29uZFwiIGkuZS4gXCIxNTI0MTg5ODY1Ljc5ODAwMFwiLCB3aGVyZWFzIGphdmFzY3JpcHQgdW5hYmxlIHRvIHJlYWQgdXAgdG8gbWljcm9zZWNvbmRcclxuICAgIC8vIDE1MjQxODk4NjUgKHVwIHRvIHNlY29uZClcclxuICAgIC8vIDc5ODAwMCAobWljcm9zZWNvbmQpXHJcbiAgICAvLyA3OTgwMDAvMTAwMCA9IDc4OSAobWlsaXNlY29uZClcclxuICAgIC8vIDE1MjQxODk4NjU3OTggKHVwIHRvIG1pbGlzZWNvbmQpXHJcbiAgICAvLyB0aHVzLCB3ZSBuZWVkIHRvIHJlZm9ybWF0IHRoZSB0aW1lc3RhbXAgcmV0dXJuIGJ5IHdsZGF0YXNlcnZlclxyXG4gICAgLy8gMTU1MTA5MjYyOC45MDAwID0gMjUvMDIvMjAxOSAxOTowMzo0OC4wMDlcclxuICAgIC8vIDE1NTEwOTI2MjYuOTEwMDAgPSAyNS8wMi8yMDE5IDE5OjAzOjQ2LjA5MVxyXG4gICAgLy8gY29uc29sZS5sb2codGltZXN0YW1wKTtcclxuICAgIGNvbnN0IHRpbWVzdGFtcEFycmF5OiBhbnkgPSB0aW1lc3RhbXAuc3BsaXQoXCIuXCIpOyAvLyBpLmUuIDE1MjQxODk4NjUuNzk4MDAwXHJcbiAgICBjb25zdCBjY3l5bW1kZGhobW1zczogc3RyaW5nID0gdGltZXN0YW1wQXJyYXlbMF07IC8vIGkuZS4gMTUyNDE4OTg2NVxyXG4gICAgY29uc3QgY2N5eW1tZGRoaG1tc3NEOiBEYXRlID0gbmV3IERhdGUoTnVtYmVyKGNjeXltbWRkaGhtbXNzKSAqIDEwMDApOyAvLyBpLmUuIEZyaSBBcHIgMjAgMjAxOCAxMDowNDoyNSBHTVQrMDgwMCAoTWFsYXlzaWEgVGltZSkgLT4gd2l0aG91dCBtaWxpc2Vjb25kL21pY3Jvc2Vjb25kICguMDAwMDAwKVxyXG4gICAgY29uc3QgU1NTVVVVOiBudW1iZXIgPSBOdW1iZXIodGltZXN0YW1wQXJyYXlbMV0pOyAvLyBpLmUuIDc5ODAwMCAtPiB1cCB0byBtaWNyb3NlY29uZFxyXG4gICAgLy8gY29uc3QgU1NTOiBudW1iZXIgPSBOdW1iZXIoU1NTVVVVKS8xMDAwOyAvLyBpLmUuNzg5IC0+IGNvbnZlcnQgbWljcm9zZWNvbmQgaW50byBtaWxpc2Vjb25kcywgNjgyMDU2IC0+IDY4Mi4wNTYsIHN0aWxsIHdvcmtpbmcgd2l0aCBzZXRNaWxpc2Vjb25kcygpXHJcbiAgICBjb25zdCBTU1M6IG51bWJlciA9IE1hdGguZmxvb3IoTnVtYmVyKFNTU1VVVSkvMTAwMCk7IC8vIGkuZS5JZiBkaXZpc2lvbi8xMDAwID0gNjgyLjA1Niwgd2l0aCBtYXRoLmZsb29yLCBTU1MgPSA2ODJcclxuICAgIGNvbnN0IGNjeXltbWRkaGhtbXNzU1NTRDogbnVtYmVyID0gY2N5eW1tZGRoaG1tc3NELnNldE1pbGxpc2Vjb25kcyhTU1MpOyAvLyBTZXQgbWlsaXNlY29uZCB0byBjY3l5bW1kZGhobW1zc0RcclxuICAgIC8vIGNvbnNvbGUubG9nKFNTU1VVVSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhTU1MpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2N5eW1tZGRoaG1tc3NEKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKE51bWJlcih0aW1lc3RhbXBBcnJheVswXSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2N5eW1tZGRoaG1tc3NELnNldE1pbGxpc2Vjb25kcyhTU1MpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKGIpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJWQvJW0vJVkgJUg6JWk6JXMuJVNcIiwgZmFsc2UpKG5ldyBEYXRlKGIpKSk7XHJcbiAgICAvLyByZXR1cm4gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZC8lbS8lWSAlSDolaTolcy4lU1wiLCBmYWxzZSkobmV3IERhdGUoY2N5eW1tZGRoaG1tc3NTU1NEKSk7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoY2N5eW1tZGRoaG1tc3NTU1NEKTtcclxuICAgIC8vIHJldHVybiBteURhdGUudG9HTVRTdHJpbmcoKTtcclxuICAgIC8vIHJldHVybiBteURhdGUudG9Mb2NhbGVTdHJpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50VGltZSgpIHtcclxuICAgIHJldHVybiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVkLyVtLyVZICVIOiVpOiVzXCIsIGZhbHNlKShuZXcgRGF0ZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50VGltZUNDWVlfTU1fREQoKSB7XHJcbiAgICByZXR1cm4gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWV8lbV8lZFwiLCBmYWxzZSkobmV3IERhdGUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9DQ1lZTU1EREhIKGRhdGVTdHI6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2N5eW1tZGQ6IHN0cmluZyA9IHdlYml4LkRhdGUuc3RyVG9EYXRlKFwiJVklbSVkMDBcIiwgZmFsc2UpKGRhdGVTdHIpO1xyXG4gICAgcmV0dXJuIGNjeXltbWRkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVF1YWxpdHlEZXNjKGRxOiBudW1iZXIpIHtcclxuICAgIGxldCBkcURlc2M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzd2l0Y2goZHEpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiTm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJNYW51YWxseSBTZXRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIkJsb2NrZWRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIlRhZ2dlZFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiVGVsZW0gRmFpbFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIlRlc3QgTW9kZVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIkNhbGN1bGF0aW9uIEZhaWxcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJMaW5rIEZhaWxcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMjg6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiUG9pbnQgRmF1bHRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyNTY6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiQWxhcm0gSW5oaWJpdFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDUxMjpcclxuICAgICAgICAgICAgZHFEZXNjID0gXCJVbnJlYXNvbmFibGVcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMDI4OlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIkZvcmNlIFRvIFplcm9cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyMDE4OlxyXG4gICAgICAgICAgICBkcURlc2MgPSBcIk5vdCBSZWZyZXNoXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGRxRGVzYyA9IFwiVW5rbm93blwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRxRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRmxhZ0FjayhmbGFnQWNrOiBudW1iZXIpIHtcclxuICAgIGxldCBmbGFnQWNrRGVzYzogc3RyaW5nID0gXCJcIjtcclxuICAgIHN3aXRjaChmbGFnQWNrKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBmbGFnQWNrRGVzYyA9IFwiVW5hY2tcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBmbGFnQWNrRGVzYyA9IFwiQWNrXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZsYWdBY2tEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxhcm1UeXBlKGFsYXJtVHlwZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgYWxhcm1UeXBlRGVzYzogc3RyaW5nID0gXCJcIjtcclxuICAgIHN3aXRjaChhbGFybVR5cGUpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGFsYXJtVHlwZURlc2MgPSBcIkFsYXJtXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgYWxhcm1UeXBlRGVzYyA9IFwiRXZlbnRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBhbGFybVR5cGVEZXNjID0gXCJTeXN0ZW0gRXJyb3JcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBhbGFybVR5cGVEZXNjID0gXCJBcHBsaWNhdGlvbiBFcnJvclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBhbGFybVR5cGVEZXNjID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxhcm1UeXBlRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGxldCBnZXRTaWRlTWVudUxpc3Q6IGFueSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZTNcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbmRhdGEuZGF0YSwgbnVsbCwgXCIgXCIpKTtcclxuICAgICAgICAvLyBjb25zdCBkYXRhOiBhbnkgPSBqc29uZGF0YS5kYXRhO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVvcHRpb25zOiBhbnkgPSBbXHJcbiAgICAgICAgICAgIHtpZDogXCJQZXJtaXNzaW9uXCIsIHZhbHVlOiBcIlBlcm1pc3Npb25cIiwgaWNvbjpcInBsdWdcIiwgZmlsZW5hbWU6XCJkZXZpY2VzcmVwb3J0XCJ9LFxyXG4gICAgICAgICAgICB7aWQ6IFwiQ29tbXVuaWNhdGlvblwiLCB2YWx1ZTogXCJDb21tdW5pY2F0aW9uXCIsIGljb246XCJzaXRlbWFwXCIsIGZpbGVuYW1lOlwiY29tbXJlcG9ydFwifSxcclxuICAgICAgICAgICAge2lkOiBcIklPXCIsIHZhbHVlOlwiSU9cIiwgaWNvbjpcIm1pY3JvY2hpcFwiLCBmaWxlbmFtZTpcImlvcmVwb3J0XCJ9LFxyXG4gICAgICAgICAgICB7aWQ6IFwiQWxhcm0gSGlzdG9yeSBKb3VybmFsXCIsIHZhbHVlOlwiQWxhcm0gSGlzdG9yeSBKb3VybmFsXCIsIGljb246XCJiZWxsXCIsIGZpbGVuYW1lOlwiYWxhcm1oaXN0b3J5am91cm5hbHJlcG9ydFwifVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVudW9wdGlvbnNbNF0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuQ3VzdG9tUmVwb3J0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW51b3B0aW9uc1s0XS5kYXRhKTtcclxuICAgICAgICAoPHdlYml4LnVpLnNpZGViYXI+d2ViaXguJCQoXCJzaWRlTWVudUxpc3RcIikpLnBhcnNlKG1lbnVvcHRpb25zLCBcImpzb25cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXJzZSBzdWNjZXNzZnVsbFwiKTtcclxuICAgICAgICAoPHdlYml4LnVpLnNpZGViYXI+d2ViaXguJCQoXCJzaWRlTWVudUxpc3RcIikpLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZnJlc2ggc2lkZSBtZW51XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBjb252ZXJ0V2ViaXhTUUx0b1JEQk1TOiBhbnkgPSBmdW5jdGlvbihzcWw6IHN0cmluZykge1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIC8vIHJlcGxhY2UgYWxsIG9jY3VyYW5jZXMsIHRodXMsIHdlIHVzZSByZWdleFxyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcclxuICAgIHJldHVybiBzcWw7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGNvbnZlcnRTUUx0b1JUREI6IGFueSA9IGZ1bmN0aW9uKHNxbDogc3RyaW5nKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJhbmNlcywgdGh1cywgd2UgdXNlIHJlZ2V4XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvXCIvZywgXCInXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC89L2csIFwiPT1cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoLyE9PS9nLCBcIiE9XCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9MSUtFXFwoJyUvZywgXCI9PScqXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9MSUtFXFwoL2csIFwiPT1cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoLyUnXFwpL2csIFwiKidcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xyXG4gICAgc3FsID0gc3FsLnJlcGxhY2UoLydcXCkvZywgXCInXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9JUyBOVUxML2csIFwiPT0nJ1wiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvSVMgTk9UIE5VTEwvZywgXCIhPScnXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3FsKTtcclxuICAgIHNxbCA9IHNxbC5yZXBsYWNlKC9OT1QgL2csIFwiIVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICBzcWwgPSBzcWwucmVwbGFjZSgvY29udmVydENob2ljZXxjb252ZXJ0VGltZXxjb252ZXJ0VXNlcnxjb252ZXJ0U3VmZml4fFxcKHxcXCkvZ2ksIGZ1bmN0aW9uKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNxbCk7XHJcbiAgICAvLyBUT0RPOiBob3cgdG8gaGFuZGxlIGlmIHNxayBpbmNsdWRlIFNyY1RpbWU/IGJlY2F1c2UgUlREQiBvbmx5IGFjY2VwdCBkYXRlIGluIHRpbWVzdGFtcFxyXG4gICAgcmV0dXJuIHNxbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2FkYVdlYkRhdGFGb3JSZXBvcnQ6IGFueSA9IFtcIndyZXBvcnRcIixcImNvbmZpZ1wiXTtcclxuZXhwb3J0IGNvbnN0IHNjYWRhV2ViRm9yUmVwb3J0OiBhbnkgPSBbXCJjbGllbnRcIiwgXCJ3cmVwb3J0XCIsIFwiY29uZmlnXCJdO1xyXG5leHBvcnQgY29uc3Qgd3JlcG9ydGhvc3RuYW1lOiBhbnkgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCI/IFwiMTI3LjAuMC4xXCI6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbmFsb2dGb3JtdWxhOiBhbnkgPSBbXHJcbiAgICB7aWQ6IFwiQVZHVkFMVUVcIiwgdmFsdWU6XCJBVkdWQUxVRVwifSxcclxuICAgIHtpZDogXCJBVkdWQUxVRVBPU1wiLCB2YWx1ZTpcIkFWR1ZBTFVFUE9TXCJ9LFxyXG4gICAge2lkOiBcIkNPTlNVTVBUSU9OVkFMVUVcIiwgdmFsdWU6XCJDT05TVU1QVElPTlZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIkVYQUNUSE9VUlJFQURJTkdcIiwgdmFsdWU6XCJFWEFDVEhPVVJSRUFESU5HXCJ9LFxyXG4gICAge2lkOiBcIkZJUlNUUkVBRElOR1wiLCB2YWx1ZTpcIkZJUlNUUkVBRElOR1wifSxcclxuICAgIHtpZDogXCJNQVhWQUxVRVwiLCB2YWx1ZTpcIk1BWFZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIk1JTlZBTFVFXCIsIHZhbHVlOlwiTUlOVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiTUlOVkFMVUVQT1NcIiwgdmFsdWU6XCJNSU5WQUxVRVBPU1wifSxcclxuICAgIHtpZDogXCJORUdESUZGQUNDTVwiLCB2YWx1ZTpcIk5FR0RJRkZBQ0NNXCJ9LFxyXG4gICAge2lkOiBcIlBPU0RJRkZBQ0NNXCIsIHZhbHVlOlwiUE9TRElGRkFDQ01cIn0sXHJcbiAgICB7aWQ6IFwiVE9UQUxJWkVSXCIsIHZhbHVlOlwiVE9UQUxJWkVSXCJ9LFxyXG4gICAge2lkOiBcIlRPVEFMVkFMVUVcIiwgdmFsdWU6XCJUT1RBTFZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIlZBTFVFVE9EQVRFXCIsIHZhbHVlOlwiVkFMVUVUT0RBVEVcIn1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbmFsb2dGb3JtdWxhWWVhcmx5OiBhbnkgPSBbXHJcbiAgICB7aWQ6IFwiQVZHVkFMVUVcIiwgdmFsdWU6XCJBVkdWQUxVRVwifSxcclxuICAgIHtpZDogXCJDT05TVU1QVElPTlZBTFVFXCIsIHZhbHVlOlwiQ09OU1VNUFRJT05WQUxVRVwifSxcclxuICAgIHtpZDogXCJNQVhWQUxVRVwiLCB2YWx1ZTpcIk1BWFZBTFVFXCJ9LFxyXG4gICAge2lkOiBcIk1JTlZBTFVFXCIsIHZhbHVlOlwiTUlOVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiVE9UQUxWQUxVRVwiLCB2YWx1ZTpcIlRPVEFMVkFMVUVcIn0sXHJcbiAgICB7aWQ6IFwiVkFMVUVUT0RBVEVcIiwgdmFsdWU6XCJWQUxVRVRPREFURVwifVxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCByZWR1bmRhbnRTZXJ2ZXI6IGFueSA9IFtdO1xyXG5leHBvcnQgbGV0IGRlY2ltYWxQb2ludDogYW55ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJUGFkZHJlc3MoaW5wdXRUZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGlwZm9ybWF0OiBhbnkgPSAvXigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJC87XHJcbiAgICBpZihpbnB1dFRleHQubWF0Y2goaXBmb3JtYXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydENvbmZpZ1N5bmMocmVxdWVzdERhdGE6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVwb3J0Q29uZmlnU3luY1wiKTtcclxuICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgcmVkdW5kYW50U2VydmVyLmVudHJpZXMoKSkge1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZFByb21pc2UocmVxdWVzdERhdGEsIGFjdGlvbiwgdmFsdWUsIHdlYnNlcnZlcnBvcnQpLnRoZW4oZnVuY3Rpb24oanNvbmRhdGEyOiBhbnkpIHtcclxuICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIlN5bmMgKFwiKyBhY3Rpb24gKyBcIikgYXQgXCIgKyB2YWx1ZSArIFwiIHN1Y2Nlc3NmdWxsLiBcIiwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoe2xvZ0xldmVsOiBcImRlYnVnXCIsIGFwcGxpY2F0aW9uTmFtZTogXCJ3cmVwb3J0XCIsIG1lc3NhZ2U6IFwiU3luYyAoXCIrIGFjdGlvbiArIFwiKSBhdCBcIiArIHZhbHVlICsgXCIgc3VjY2Vzc2Z1bGwuIFwifSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICB9LCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xyXG4gICAgICAgICAgICB3ZWJpeC5tZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU3luYyBhdCBcIiArIHZhbHVlICsgXCIgZmFpbGVkLiBcIiArIHN0YXR1cy5lcnJvcl9tc2csXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICBleHBpcmU6IC0xLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1haWxsb2dcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHtsb2dMZXZlbDogXCJlcnJvclwiLCBhcHBsaWNhdGlvbk5hbWU6IFwid3JlcG9ydFwiLCBtZXNzYWdlOiBcIlN5bmMgKFwiKyBhY3Rpb24gKyBcIikgYXQgXCIgKyB2YWx1ZSArIFwiIGZhaWxlZC4gXCIgKyBzdGF0dXMuZXJyb3JfbXNnfSwgXCJsb2dcIiwgaXBBZGRyLCB3ZWJzZXJ2ZXJwb3J0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLmVycm9yX21zZywgXCJlcnJvclwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gU3RhdGUoYXBwOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlcnZpY2U6IGFueSA9IHtcclxuICAgICAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlOjBcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXRlXCIsIHNlcnZpY2UpO1xyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lblwiOiBcIi4vc291cmNlcy9sb2NhbGVzL2VuLnRzXCIsXG5cdFwiLi9lbi50c1wiOiBcIi4vc291cmNlcy9sb2NhbGVzL2VuLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2hvbWVcIjogXCIuL3NvdXJjZXMvdmlld3MvaG9tZS50c1wiLFxuXHRcIi4vaG9tZS50c1wiOiBcIi4vc291cmNlcy92aWV3cy9ob21lLnRzXCIsXG5cdFwiLi9sYXlvdXRcIjogXCIuL3NvdXJjZXMvdmlld3MvbGF5b3V0LnRzXCIsXG5cdFwiLi9sYXlvdXQudHNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGF5b3V0LnRzXCIsXG5cdFwiLi9zaWRlYmFyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3NpZGViYXIudHNcIixcblx0XCIuL3NpZGViYXIudHNcIjogXCIuL3NvdXJjZXMvdmlld3Mvc2lkZWJhci50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvdmlld3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQge0pldFZpZXd9IGZyb20gXCJ3ZWJpeC1qZXRcIjtcclxuaW1wb3J0IHtpcEFkZHJ9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IHtkZXZpY2VSZXBvcnRJbml0fSBmcm9tIFwiLi4vY29udHJvbGxlci9jaG9tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlc1JlcG9ydCBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgcHVibGljIHVzZXJDcmVkZW50aWFsczogYW55ID0ge307XHJcbiAgICBwdWJsaWMgY29uZmlnKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXZpY2VzcmVwb3J0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDpcImRldmljZXNsYXlvdXRcIixcclxuICAgICAgICAgICAgICAgIHZpZXc6XCJkYXRhbGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAvLyB0eXBlOlwic3BhY2VcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NSxcclxuICAgICAgICAgICAgICAgIHJvd3M6W1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OjQ1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJsZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGU6XCJjbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xzOltcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWRlc2NcIix2aWV3OlwidGVtcGxhdGVcIix0ZW1wbGF0ZTpcIjxiPi08L2I+XCIsd2lkdGg6MTUwLGJvcmRlcmxlc3M6dHJ1ZSwgdHlwZTpcImNsZWFuXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJvd3M6W1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7aWQ6XCJkZXZpY2V0b3RhbGFuYWxvZ3BvaW50XCIsdmlldzpcInRlbXBsYXRlXCIsd2lkdGg6MjAwLGJvcmRlcmxlc3M6dHJ1ZSwgdHlwZTpcImNsZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUb3RhbCBBbmFsb2cgUG9pbnQgXCIgKyBjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtpZDpcImRldmljZXRvdGFsZGlnaXRhbHBvaW50XCIsdmlldzpcInRlbXBsYXRlXCIsd2lkdGg6MjAwLGJvcmRlcmxlc3M6dHJ1ZSwgdHlwZTpcImNsZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUb3RhbCBEaWdpdGFsIFBvaW50IFwiICsgY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7aWQ6XCJkZXZpY2VzZWFyY2hcIiwgdmlldzpcInNlYXJjaFwiLCBoZWlnaHQ6MTAsIGZpbGxzcGFjZTp0cnVlLCBrZXlQcmVzc1RpbWVvdXQ6MTAwLCBwbGFjZWhvbGRlcjpcIlNlYXJjaCBmcm9tIHRoZSB0YWJsZVwifSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWZpbHRlclwiLCB2aWV3OlwiYnV0dG9uXCIsIHR5cGU6XCJpY29uXCIsIGljb246XCJmaWx0ZXJcIiwgd2lkdGg6MzB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge2lkOlwiZGV2aWNlc2F2ZWZpbHRlclwiLCB2aWV3OlwiYnV0dG9uXCIsIHR5cGU6XCJpY29uXCIsIGljb246XCJzYXZlXCIsIHdpZHRoOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWxpc3RcIiwgdmlldzpcImNvbWJvXCIsIG1heFdpZHRoOjI4MH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7aWQ6XCJkZXZpY2VjYXRlZ29yeVwiLCB2aWV3OlwiY29tYm9cIiwgbWF4V2lkdGg6MTUwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWdlbmVyYXRlXCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25CdXR0b25cIiwgaWNvbjpcImZpbGVcIiwgbGFiZWw6XCJHZW5lcmF0ZSBSZXBvcnRcIiwgbWF4V2lkdGg6MTI1fSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZXByaW50XCIsIHZpZXc6XCJidXR0b25cIiwgdHlwZTpcImljb25cIiwgaWNvbjpcInByaW50XCIsIHdpZHRoOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtpZDpcImRldmljZWV4cG9ydFwiLCB2aWV3OlwiYnV0dG9uXCIsIHR5cGU6XCJpY29uXCIsIGljb246XCJkb3dubG9hZFwiLCB3aWR0aDozMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7aWQ6XCJkZXZpY2VlbWFpbFwiLCB2aWV3OlwiYnV0dG9uXCIsIHR5cGU6XCJpY29uXCIsIGljb246XCJlbnZlbG9wZVwiLCB3aWR0aDozMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29sczpbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcm93czpbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkOlwiZGV2aWNldGl0bGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXc6XCJ0ZW1wbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIiR2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6XCI8Yj5UaXRsZTwvYj46ICN0aXRsZSMgI2RldmljZSNcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFkanVzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYXV0b3dpZHRoOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOlwiY2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZDpcImRldmljZWRhdGFzb3VyY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpZXc6XCJ0ZW1wbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIiR2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6XCI8Yj5EYXRhIFNvdXJjZTwvYj46ICNkYXRhc291cmNlI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6NTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVybGVzczp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImNsZWFuXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQ6XCJkZXZpY2VnZW5lcmF0ZWR0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB2aWV3OlwidGVtcGxhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCIkdmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOlwiPGI+R2VuZXJhdGVkIE9uPC9iPjogI2dlbmVyYXRlZGRhdGUjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDo1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOlwiY2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByb3dzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlkOlwiZGV2aWNlc2VhcmNoZmlsdGVyY29uZGl0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB2aWV3OlwidGVtcGxhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOlwiPGI+U2VhcmNoL0ZpbHRlciBDb25kaXRpb248L2I+OiAtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDYsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOlwiY2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlkOlwiZGV2aWNlYW5hbG9nZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWV3OlwiZGF0YXRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNpemVDb2x1bW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzaXplUm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNwYW5zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBzY2hlbWU6e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgJGluaXQ6ZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgLy8gY29udmVydCBkYXRlIHN0cmluZ3MgdG8gZGF0ZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgIG9ialtcImNvbnZlcnRUaW1lKFNyY1RpbWUpXCJdID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoXCIlZC8lbS8lWSAlSDolaTolcy4lU1wiLCBmYWxzZSkob2JqW1wiY29udmVydFRpbWUoU3JjVGltZSlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhOltcclxuICAgICAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRpdGxlOlwiLVwiLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkZXZpY2U6XCItXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRhdGFzb3VyY2U6XCItXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGdlbmVyYXRlZGRhdGU6IFwiLVwiXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZGV2aWNlc3JlcG9ydDtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCh2aWV3OiBhbnksIHVybDogYW55KSB7XHJcbiAgICAgICAgICAgIGRldmljZVJlcG9ydEluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4uL3ZpZXdzL3NpZGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0TGF5b3V0IGV4dGVuZHMgSmV0VmlldyB7XG4gICAgcHVibGljIHVzZXJDcmVkZW50aWFsczogYW55ID0ge307XG4gICAgcHJpdmF0ZSBsb2FkaW5nUGFnZTE6IGFueTtcbiAgICBwcml2YXRlIGxvZ2luV2luZG93MTogYW55O1xuICAgIHB1YmxpYyBjb25maWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICAgICAgY29uc3QgdWk6IGFueSA9IHtcbiAgICAgICAgICAgIGlkOlwibGF5b3V0XCIsXG4gICAgICAgICAgICBwYWRkaW5nOjEwLFxuICAgICAgICAgICAgbWFyZ2luOjEwLFxuICAgICAgICAgICAgcm93czpbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb2xzOltcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XG5pbXBvcnQge2dldFNpZGVNZW51TGlzdH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvcmVwb3J0Q29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRUYWJWaWV3IGV4dGVuZHMgSmV0VmlldyB7XG4gICAgcHJpdmF0ZSB1c2VyOiB7fTtcbiAgICBwdWJsaWMgY29uZmlnKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUyXCIpO1xuICAgICAgICAvLyBnZXRTaWRlTWVudUxpc3QoKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcjogYW55ID0ge1xuICAgICAgICAgICAgICAgIHJvd3M6W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDpcInJlcG9ydG1haW50b29sYmFyXCIsIHZpZXc6IFwidG9vbGJhclwiLCByZXNwb25zaXZlOlwicmVwb3J0bWFpbnRvb2xiYXJcIiwgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCJyZXBvcnRtYWludG9vbGJhcnNpZGVtZW51aWNvblwiLHZpZXc6IFwiYnV0dG9uXCIsIHR5cGU6IFwiaWNvblwiLCBpY29uOiBcImJhcnNcIiwgYWxpZ246XCJsZWZ0XCIsIHdpZHRoOjMwLCBjbGljazpcIiQkKCdzaWRlTWVudUxpc3QnKS50b2dnbGUoKTtcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOlwicmVwb3J0bWFpbnRvb2xiYXJzeXN0ZW1kYXRlXCIsIHZpZXc6XCJsYWJlbFwiLCBsYWJlbDp3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVEIHwgJWQgJUYgJVkgJUg6JWk6JXNcIiwgZmFsc2UpKG5ldyBEYXRlKCkpLCBhbGlnbjpcInJpZ2h0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJyZXBvcnR2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcInNpZGVNZW51TGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT3Blbjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWRXaWR0aDogNDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06eyBoZWlnaHQ6ODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFdmVudERlbGF5OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBsb2dpbiBwYWdlIG5vdywgc28sIHdlIHdpbGwgc2VsZWN0IHJlcG9ydCBvbmNlIHRoZSBsb2dpbiBpcyBzdWNjZXNzZnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZnRlckxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJdGVtSWQ6IG51bWJlciA9IHRoaXMuZ2V0Rmlyc3RJZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGFsZXJ0KGZpcnN0SXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB3ZWJpeC5kZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGZpcnN0SXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIkdlbmVyYWwgU2V0dGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIjFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJNYW5hZ2UgQ3VzdG9tIFJlcG9ydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIk1hbmFnZSBTdW1tYXJ5IFJlcG9ydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIkFsYXJtIEhpc3RvcnkgSm91cm5hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIkVtYWlsIFNldHRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJJT1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvLyB0aGlzLnNlbGVjdChcIkRldmljZXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLy8gdGhpcy5zZWxlY3QoXCJDb21tdW5pY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbihpZDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5nZXRJdGVtKGlkKS5maWxlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5hcHAuc2hvdyhcIi9sYXlvdXQvXCIgKyB0aGlzLmdldEl0ZW0oaWQpLmZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJpeC5hbGVydChcIk5vIHJlcG9ydCBpcyBjb25maWd1cmVkIGluIFwiICsgdGhpcy5nZXRJdGVtKGlkKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IFwiaG9tZVwiLCB2YWx1ZTogXCJIb21lXCIsIGljb246XCJwbHVnXCIsIGZpbGVuYW1lOlwiaG9tZVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogXCJhYm91dC11c1wiLCB2YWx1ZTogXCJBYm91dCBDZW5kYW5hIEhvdXNlXCIsIGljb246XCJzaXRlbWFwXCIsIGZpbGVuYW1lOlwiYWJvdXQtdXNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IFwiZ2FsbGVyeVwiLCB2YWx1ZTpcIkdhbGxlcnlcIiwgaWNvbjpcIm1pY3JvY2hpcFwiLCBmaWxlbmFtZTpcImdhbGxlcnlcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IFwiY29udGFjdC11c1wiLCB2YWx1ZTpcIkFib3V0IFVzXCIsIGljb246XCJiZWxsXCIsIGZpbGVuYW1lOlwiY29udGFjdC11c1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdWJ2aWV3OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJ2YWwgdG8gdXBkYXRlIHN5c3RlbSB0aW1lXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kJChcInJlcG9ydG1haW50b29sYmFyc3lzdGVtZGF0ZVwiKS5zZXRWYWx1ZSh3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVEIHwgJWQgJUYgJVkgJUg6JWk6JXNcIiwgZmFsc2UpKG5ldyBEYXRlKCkpKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=