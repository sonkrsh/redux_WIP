"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWrapper = exports.HYDRATE = void 0;
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var router_1 = require("next/router");
/**
 * Quick note on Next.js return types:
 *
 * Page.getInitialProps https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 * as-is
 *
 * App.getInitialProps: AppInitialProps https://nextjs.org/docs/advanced-features/custom-app
 * {pageProps: any}
 *
 * getStaticProps https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * {props: any}
 *
 * getServerSideProps https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * {props: any}
 */
exports.HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
var getIsServer = function () { return typeof window === 'undefined'; };
var getDeserializedState = function (initialState, _a) {
    var _b = _a === void 0 ? {} : _a, deserializeState = _b.deserializeState;
    return deserializeState ? deserializeState(initialState) : initialState;
};
var getSerializedState = function (state, _a) {
    var _b = _a === void 0 ? {} : _a, serializeState = _b.serializeState;
    return serializeState ? serializeState(state) : state;
};
var sharedClientStore;
var initStore = function (_a) {
    var _b, _c, _d;
    var makeStore = _a.makeStore, _e = _a.context, context = _e === void 0 ? {} : _e;
    var createStore = function () { return makeStore(context); };
    if (getIsServer()) {
        var req = ((_b = context) === null || _b === void 0 ? void 0 : _b.req) || ((_d = (_c = context) === null || _c === void 0 ? void 0 : _c.ctx) === null || _d === void 0 ? void 0 : _d.req);
        if (req) {
            // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
            // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
            if (!req.__nextReduxWrapperStore) {
                req.__nextReduxWrapperStore = createStore(); // Used in GIP/GSSP
            }
            return req.__nextReduxWrapperStore;
        }
        return createStore();
    }
    // Memoize the store if we're on the client
    if (!sharedClientStore) {
        sharedClientStore = createStore();
    }
    return sharedClientStore;
};
var createWrapper = function (makeStore, config) {
    if (config === void 0) { config = {}; }
    var makeProps = function (_a) {
        var callback = _a.callback, context = _a.context, _b = _a.addStoreToContext, addStoreToContext = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var store, nextCallback, initialProps, _c, state;
            var _d;
            var _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        store = initStore({ context: context, makeStore: makeStore });
                        if (config.debug) {
                            console.log("1. getProps created store with state", store.getState());
                        }
                        // Legacy stuff - put store in context
                        if (addStoreToContext) {
                            if (context.ctx) {
                                context.ctx.store = store;
                            }
                            else {
                                context.store = store;
                            }
                        }
                        nextCallback = callback && callback(store);
                        _c = nextCallback;
                        if (!_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, nextCallback(context)];
                    case 1:
                        _c = (_h.sent());
                        _h.label = 2;
                    case 2:
                        initialProps = (_c) || {};
                        if (config.debug) {
                            console.log("3. getProps after dispatches has store state", store.getState());
                        }
                        state = store.getState();
                        if ((_e = state === null || state === void 0 ? void 0 : state.route) === null || _e === void 0 ? void 0 : _e.route) {
                            state = (_d = {}, _d[(_f = state === null || state === void 0 ? void 0 : state.route) === null || _f === void 0 ? void 0 : _f.route] = state[(_g = state === null || state === void 0 ? void 0 : state.route) === null || _g === void 0 ? void 0 : _g.route], _d);
                        }
                        return [2 /*return*/, {
                                initialProps: initialProps,
                                initialState: getIsServer() ? getSerializedState(state, config) : state,
                            }];
                }
            });
        });
    };
    var getInitialPageProps = function (callback) {
        return function (context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // context is store ??? avoid double-wrapping
                        if ('getState' in context) {
                            return [2 /*return*/, callback && callback(context)];
                        }
                        return [4 /*yield*/, makeProps({ callback: callback, context: context, addStoreToContext: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
    };
    var getInitialAppProps = function (callback) {
        return function (context) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, initialProps, initialState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context, addStoreToContext: true })];
                    case 1:
                        _a = _b.sent(), initialProps = _a.initialProps, initialState = _a.initialState;
                        return [2 /*return*/, __assign(__assign({}, initialProps), { initialState: initialState })];
                }
            });
        }); };
    };
    var getStaticProps = function (callback) {
        return function (context) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, initialProps, initialState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context })];
                    case 1:
                        _a = _b.sent(), initialProps = _a.initialProps, initialState = _a.initialState;
                        return [2 /*return*/, __assign(__assign({}, initialProps), { props: __assign(__assign({}, initialProps.props), { initialState: initialState }) })];
                }
            });
        }); };
    };
    var getServerSideProps = function (callback) {
        return function (context) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getStaticProps(callback)(context)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
    }; // just not to repeat myself
    var hydrate = function (store, state) {
        if (!state) {
            return;
        }
        store.dispatch({
            type: exports.HYDRATE,
            payload: getDeserializedState(state, config),
        });
    };
    var hydrateOrchestrator = function (store, giapState, gspState, gsspState, gippState) {
        var _a;
        if (gspState) {
            // If GSP has run, then gspState will _not_ contain the data from GIP (if it exists), because GSP is run at build time,
            // and GIP runs at request time. So we have to hydrate the GIP data first, and then do another hydrate on the gspState.
            hydrate(store, giapState);
            hydrate(store, gspState);
        }
        else if (gsspState || gippState || giapState) {
            // If GSSP has run, then gsspState _will_ contain the data from GIP (if there is a GIP) and the GSSP data combined
            // (see https://github.com/kirill-konshin/next-redux-wrapper/pull/499#discussion_r1014500941).
            // If there is no GSP or GSSP for this page, but there is a GIP on page level (not _app), then we use the gippState.
            // If there is no GSP or GSSP and no GIP on page level for this page, but there is a GIP on _app level, then we use the giapState.
            hydrate(store, (_a = gsspState !== null && gsspState !== void 0 ? gsspState : gippState) !== null && _a !== void 0 ? _a : giapState);
        }
    };
    var useHybridHydrate = function (store, giapState, gspState, gsspState, gippState) {
        var events = (0, router_1.useRouter)().events;
        var shouldHydrate = (0, react_1.useRef)(true);
        // We should only hydrate when the router has changed routes
        (0, react_1.useEffect)(function () {
            var handleStart = function () {
                shouldHydrate.current = true;
            };
            events === null || events === void 0 ? void 0 : events.on('routeChangeStart', handleStart);
            return function () {
                events === null || events === void 0 ? void 0 : events.off('routeChangeStart', handleStart);
            };
        }, [events]);
        // useMemo so that when we navigate client side, we always synchronously hydrate the state before the new page
        // components are mounted. This means we hydrate while the previous page components are still mounted.
        // You might think that might cause issues because the selectors on the previous page (still mounted) will suddenly
        // contain other data, and maybe even nested properties, causing null reference exceptions.
        // But that's not the case.
        // Hydrating in useMemo will not trigger a rerender of the still mounted page component. So if your selectors do have
        // some initial state values causing them to rerun after hydration, and you're accessing deeply nested values inside your
        // components, you still wouldn't get errors, because there's no rerender.
        // Instead, React will render the new page components straight away, which will have selectors with the correct data.
        (0, react_1.useMemo)(function () {
            if (shouldHydrate.current) {
                hydrateOrchestrator(store, giapState, gspState, gsspState, gippState);
                shouldHydrate.current = false;
            }
        }, [store, giapState, gspState, gsspState, gippState]);
    };
    // giapState stands for getInitialAppProps state
    var useWrappedStore = function (incomingProps, displayName) {
        var _a, _b, _c, _d, _e, _f;
        if (displayName === void 0) { displayName = 'useWrappedStore'; }
        // createWrapper adds WrapperProps to incomingProps, they are not present in P so type needs to be coerced here
        var _g = incomingProps, giapState = _g.initialState, initialProps = _g.initialProps, props = __rest(_g, ["initialState", "initialProps"]);
        // getStaticProps state
        var gspState = (props === null || props === void 0 ? void 0 : props.__N_SSG) ? (_a = props === null || props === void 0 ? void 0 : props.pageProps) === null || _a === void 0 ? void 0 : _a.initialState : null;
        // getServerSideProps state
        var gsspState = (props === null || props === void 0 ? void 0 : props.__N_SSP) ? (_b = props === null || props === void 0 ? void 0 : props.pageProps) === null || _b === void 0 ? void 0 : _b.initialState : null;
        // getInitialPageProps state
        var gippState = !gspState && !gsspState ? (_d = (_c = props === null || props === void 0 ? void 0 : props.pageProps) === null || _c === void 0 ? void 0 : _c.initialState) !== null && _d !== void 0 ? _d : null : null;
        if (config.debug) {
            console.log('4.', displayName, 'created new store with', {
                giapState: giapState,
                gspState: gspState,
                gsspState: gsspState,
                gippState: gippState,
            });
        }
        var store = (0, react_1.useMemo)(function () { return initStore({ makeStore: makeStore }); }, []);
        useHybridHydrate(store, giapState, gspState, gsspState, gippState);
        var resultProps = props;
        // order is important! Next.js overwrites props from pages/_app with getStaticProps from page
        // @see https://github.com/zeit/next.js/issues/11648
        if (initialProps && initialProps.pageProps) {
            resultProps.pageProps = __assign(__assign({}, initialProps.pageProps), props.pageProps);
        }
        // just some cleanup to prevent passing it as props, we need to clone props to safely delete initialState
        if ((_e = props === null || props === void 0 ? void 0 : props.pageProps) === null || _e === void 0 ? void 0 : _e.initialState) {
            resultProps = __assign(__assign({}, props), { pageProps: __assign({}, props.pageProps) });
            delete resultProps.pageProps.initialState;
        }
        // unwrap getInitialPageProps
        if ((_f = resultProps === null || resultProps === void 0 ? void 0 : resultProps.pageProps) === null || _f === void 0 ? void 0 : _f.initialProps) {
            resultProps.pageProps = __assign(__assign({}, resultProps.pageProps), resultProps.pageProps.initialProps);
            delete resultProps.pageProps.initialProps;
        }
        return { store: store, props: __assign(__assign({}, initialProps), resultProps) };
    };
    var withRedux = function (Component) {
        console.warn('/!\\ You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore().');
        //TODO Check if pages/_app was wrapped so there's no need to wrap a page itself
        var WrappedComponent = function (props) {
            var _a = useWrappedStore(props, WrappedComponent.displayName), store = _a.store, combinedProps = _a.props;
            return (react_1.default.createElement(react_redux_1.Provider, { store: store },
                react_1.default.createElement(Component, __assign({}, combinedProps))));
        };
        WrappedComponent.displayName = "withRedux(".concat(Component.displayName || Component.name || 'Component', ")");
        if ('getInitialProps' in Component) {
            WrappedComponent.getInitialProps = Component.getInitialProps;
        }
        return WrappedComponent;
    };
    return {
        getServerSideProps: getServerSideProps,
        getStaticProps: getStaticProps,
        getInitialAppProps: getInitialAppProps,
        getInitialPageProps: getInitialPageProps,
        withRedux: withRedux,
        useWrappedStore: useWrappedStore,
    };
};
exports.createWrapper = createWrapper;
// Legacy
// eslint-disable-next-line import/no-anonymous-default-export
exports.default = (function (makeStore, config) {
    if (config === void 0) { config = {}; }
    console.warn('/!\\ You are using legacy implementation. Please update your code: use createWrapper() and wrapper.withRedux().');
    return (0, exports.createWrapper)(makeStore, config).withRedux;
});
//# sourceMappingURL=index.js.map