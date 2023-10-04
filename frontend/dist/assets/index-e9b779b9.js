function wP(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var El =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ab = { exports: {} },
  Oc = {},
  Rb = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  CP = Symbol.for("react.portal"),
  kP = Symbol.for("react.fragment"),
  _P = Symbol.for("react.strict_mode"),
  PP = Symbol.for("react.profiler"),
  TP = Symbol.for("react.provider"),
  EP = Symbol.for("react.context"),
  jP = Symbol.for("react.forward_ref"),
  AP = Symbol.for("react.suspense"),
  RP = Symbol.for("react.memo"),
  IP = Symbol.for("react.lazy"),
  kg = Symbol.iterator;
function $P(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kg && e[kg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ib = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $b = Object.assign,
  Mb = {};
function ya(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mb),
    (this.updater = n || Ib);
}
ya.prototype.isReactComponent = {};
ya.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ya.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ob() {}
Ob.prototype = ya.prototype;
function nm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mb),
    (this.updater = n || Ib);
}
var rm = (nm.prototype = new Ob());
rm.constructor = nm;
$b(rm, ya.prototype);
rm.isPureReactComponent = !0;
var _g = Array.isArray,
  Nb = Object.prototype.hasOwnProperty,
  om = { current: null },
  Db = { key: !0, ref: !0, __self: !0, __source: !0 };
function zb(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nb.call(t, r) && !Db.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: nl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: om.current,
  };
}
function MP(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function im(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function OP(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pg = /\/+/g;
function Zd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? OP("" + e.key)
    : t.toString(36);
}
function du(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case CP:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Zd(a, 0) : r),
      _g(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pg, "$&/") + "/"),
          du(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (im(o) &&
            (o = MP(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pg, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), _g(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Zd(i, s);
      a += du(i, t, n, l, o);
    }
  else if (((l = $P(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Zd(i, s++)), (a += du(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function jl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    du(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function NP(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var jt = { current: null },
  fu = { transition: null },
  DP = {
    ReactCurrentDispatcher: jt,
    ReactCurrentBatchConfig: fu,
    ReactCurrentOwner: om,
  };
re.Children = {
  map: jl,
  forEach: function (e, t, n) {
    jl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!im(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
re.Component = ya;
re.Fragment = kP;
re.Profiler = PP;
re.PureComponent = nm;
re.StrictMode = _P;
re.Suspense = AP;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DP;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $b({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = om.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Nb.call(t, l) &&
        !Db.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: nl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: EP,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: TP, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = zb;
re.createFactory = function (e) {
  var t = zb.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: jP, render: e };
};
re.isValidElement = im;
re.lazy = function (e) {
  return { $$typeof: IP, _payload: { _status: -1, _result: e }, _init: NP };
};
re.memo = function (e, t) {
  return { $$typeof: RP, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = fu.transition;
  fu.transition = {};
  try {
    e();
  } finally {
    fu.transition = t;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
  return jt.current.useCallback(e, t);
};
re.useContext = function (e) {
  return jt.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return jt.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return jt.current.useEffect(e, t);
};
re.useId = function () {
  return jt.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return jt.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return jt.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return jt.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return jt.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return jt.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return jt.current.useRef(e);
};
re.useState = function (e) {
  return jt.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return jt.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return jt.current.useTransition();
};
re.version = "18.2.0";
Rb.exports = re;
var m = Rb.exports;
const Zr = tm(m),
  mp = wP({ __proto__: null, default: Zr }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zP = m,
  FP = Symbol.for("react.element"),
  LP = Symbol.for("react.fragment"),
  BP = Object.prototype.hasOwnProperty,
  VP = zP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  WP = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fb(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) BP.call(t, r) && !WP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: FP,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: VP.current,
  };
}
Oc.Fragment = LP;
Oc.jsx = Fb;
Oc.jsxs = Fb;
Ab.exports = Oc;
var p = Ab.exports,
  vp = {},
  Lb = { exports: {} },
  Zt = {},
  Bb = { exports: {} },
  Vb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, B) {
    var D = $.length;
    $.push(B);
    e: for (; 0 < D; ) {
      var F = (D - 1) >>> 1,
        Z = $[F];
      if (0 < o(Z, B)) ($[F] = B), ($[D] = Z), (D = F);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var B = $[0],
      D = $.pop();
    if (D !== B) {
      $[0] = D;
      e: for (var F = 0, Z = $.length, G = Z >>> 1; F < G; ) {
        var ne = 2 * (F + 1) - 1,
          ce = $[ne],
          ie = ne + 1,
          Se = $[ie];
        if (0 > o(ce, D))
          ie < Z && 0 > o(Se, ce)
            ? (($[F] = Se), ($[ie] = D), (F = ie))
            : (($[F] = ce), ($[ne] = D), (F = ne));
        else if (ie < Z && 0 > o(Se, D)) ($[F] = Se), ($[ie] = D), (F = ie);
        else break e;
      }
    }
    return B;
  }
  function o($, B) {
    var D = $.sortIndex - B.sortIndex;
    return D !== 0 ? D : $.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    x = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b($) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= $)
        r(u), (B.sortIndex = B.expirationTime), t(l, B);
      else break;
      B = n(u);
    }
  }
  function C($) {
    if (((g = !1), b($), !x))
      if (n(l) !== null) (x = !0), te(k);
      else {
        var B = n(u);
        B !== null && O(C, B.startTime - $);
      }
  }
  function k($, B) {
    (x = !1), g && ((g = !1), y(j), (j = -1)), (h = !0);
    var D = f;
    try {
      for (
        b(B), d = n(l);
        d !== null && (!(d.expirationTime > B) || ($ && !M()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Z = F(d.expirationTime <= B);
          (B = e.unstable_now()),
            typeof Z == "function" ? (d.callback = Z) : d === n(l) && r(l),
            b(B);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var G = !0;
      else {
        var ne = n(u);
        ne !== null && O(C, ne.startTime - B), (G = !1);
      }
      return G;
    } finally {
      (d = null), (f = D), (h = !1);
    }
  }
  var T = !1,
    _ = null,
    j = -1,
    I = 5,
    A = -1;
  function M() {
    return !(e.unstable_now() - A < I);
  }
  function K() {
    if (_ !== null) {
      var $ = e.unstable_now();
      A = $;
      var B = !0;
      try {
        B = _(!0, $);
      } finally {
        B ? U() : ((T = !1), (_ = null));
      }
    } else T = !1;
  }
  var U;
  if (typeof v == "function")
    U = function () {
      v(K);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      Q = X.port2;
    (X.port1.onmessage = K),
      (U = function () {
        Q.postMessage(null);
      });
  } else
    U = function () {
      S(K, 0);
    };
  function te($) {
    (_ = $), T || ((T = !0), U());
  }
  function O($, B) {
    j = S(function () {
      $(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), te(k));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = f;
      }
      var D = f;
      f = B;
      try {
        return $();
      } finally {
        f = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, B) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var D = f;
      f = $;
      try {
        return B();
      } finally {
        f = D;
      }
    }),
    (e.unstable_scheduleCallback = function ($, B, D) {
      var F = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? F + D : F))
          : (D = F),
        $)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = D + Z),
        ($ = {
          id: c++,
          callback: B,
          priorityLevel: $,
          startTime: D,
          expirationTime: Z,
          sortIndex: -1,
        }),
        D > F
          ? (($.sortIndex = D),
            t(u, $),
            n(l) === null &&
              $ === n(u) &&
              (g ? (y(j), (j = -1)) : (g = !0), O(C, D - F)))
          : (($.sortIndex = Z), t(l, $), x || h || ((x = !0), te(k))),
        $
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function ($) {
      var B = f;
      return function () {
        var D = f;
        f = B;
        try {
          return $.apply(this, arguments);
        } finally {
          f = D;
        }
      };
    });
})(Vb);
Bb.exports = Vb;
var UP = Bb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wb = m,
  Yt = UP;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ub = new Set(),
  Ss = {};
function qo(e, t) {
  Ji(e, t), Ji(e + "Capture", t);
}
function Ji(e, t) {
  for (Ss[e] = t, e = 0; e < t.length; e++) Ub.add(t[e]);
}
var yr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gp = Object.prototype.hasOwnProperty,
  HP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tg = {},
  Eg = {};
function GP(e) {
  return gp.call(Eg, e)
    ? !0
    : gp.call(Tg, e)
    ? !1
    : HP.test(e)
    ? (Eg[e] = !0)
    : ((Tg[e] = !0), !1);
}
function KP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qP(e, t, n, r) {
  if (t === null || typeof t > "u" || KP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function At(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new At(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ft[t] = new At(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ft[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ft[e] = new At(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ft[e] = new At(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ft[e] = new At(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ft[e] = new At(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ft[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var am = /[\-:]([a-z])/g;
function sm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(am, sm);
    ft[t] = new At(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(am, sm);
    ft[t] = new At(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(am, sm);
  ft[t] = new At(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ft[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new At(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ft[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lm(e, t, n, r) {
  var o = ft.hasOwnProperty(t) ? ft[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qP(t, n, o, r) && (n = null),
    r || o === null
      ? GP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _r = Wb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Al = Symbol.for("react.element"),
  hi = Symbol.for("react.portal"),
  mi = Symbol.for("react.fragment"),
  um = Symbol.for("react.strict_mode"),
  yp = Symbol.for("react.profiler"),
  Hb = Symbol.for("react.provider"),
  Gb = Symbol.for("react.context"),
  cm = Symbol.for("react.forward_ref"),
  xp = Symbol.for("react.suspense"),
  bp = Symbol.for("react.suspense_list"),
  dm = Symbol.for("react.memo"),
  $r = Symbol.for("react.lazy"),
  Kb = Symbol.for("react.offscreen"),
  jg = Symbol.iterator;
function ja(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jg && e[jg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fe = Object.assign,
  Jd;
function Ua(e) {
  if (Jd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jd = (t && t[1]) || "";
    }
  return (
    `
` +
    Jd +
    e
  );
}
var ef = !1;
function tf(e, t) {
  if (!e || ef) return "";
  ef = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (ef = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ua(e) : "";
}
function YP(e) {
  switch (e.tag) {
    case 5:
      return Ua(e.type);
    case 16:
      return Ua("Lazy");
    case 13:
      return Ua("Suspense");
    case 19:
      return Ua("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tf(e.type, !1)), e;
    case 11:
      return (e = tf(e.type.render, !1)), e;
    case 1:
      return (e = tf(e.type, !0)), e;
    default:
      return "";
  }
}
function Sp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mi:
      return "Fragment";
    case hi:
      return "Portal";
    case yp:
      return "Profiler";
    case um:
      return "StrictMode";
    case xp:
      return "Suspense";
    case bp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gb:
        return (e.displayName || "Context") + ".Consumer";
      case Hb:
        return (e._context.displayName || "Context") + ".Provider";
      case cm:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case dm:
        return (
          (t = e.displayName || null), t !== null ? t : Sp(e.type) || "Memo"
        );
      case $r:
        (t = e._payload), (e = e._init);
        try {
          return Sp(e(t));
        } catch {}
    }
  return null;
}
function XP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Sp(t);
    case 8:
      return t === um ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function QP(e) {
  var t = qb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Rl(e) {
  e._valueTracker || (e._valueTracker = QP(e));
}
function Yb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wp(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ag(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xb(e, t) {
  (t = t.checked), t != null && lm(e, "checked", t, !1);
}
function Cp(e, t) {
  Xb(e, t);
  var n = Jr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kp(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kp(e, t.type, Jr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kp(e, t, n) {
  (t !== "number" || Vu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ha = Array.isArray;
function Di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _p(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ig(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ha(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jr(n) };
}
function Qb(e, t) {
  var n = Jr(t.value),
    r = Jr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $g(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Il,
  Jb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Il = Il || document.createElement("div"),
          Il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Il.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ws(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var es = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ZP = ["Webkit", "ms", "Moz", "O"];
Object.keys(es).forEach(function (e) {
  ZP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (es[t] = es[e]);
  });
});
function e1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (es.hasOwnProperty(e) && es[e])
    ? ("" + t).trim()
    : t + "px";
}
function t1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = e1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var JP = Fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Tp(e, t) {
  if (t) {
    if (JP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ep(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jp = null;
function fm(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ap = null,
  zi = null,
  Fi = null;
function Mg(e) {
  if ((e = il(e))) {
    if (typeof Ap != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Lc(t)), Ap(e.stateNode, e.type, t));
  }
}
function n1(e) {
  zi ? (Fi ? Fi.push(e) : (Fi = [e])) : (zi = e);
}
function r1() {
  if (zi) {
    var e = zi,
      t = Fi;
    if (((Fi = zi = null), Mg(e), t)) for (e = 0; e < t.length; e++) Mg(t[e]);
  }
}
function o1(e, t) {
  return e(t);
}
function i1() {}
var nf = !1;
function a1(e, t, n) {
  if (nf) return e(t, n);
  nf = !0;
  try {
    return o1(e, t, n);
  } finally {
    (nf = !1), (zi !== null || Fi !== null) && (i1(), r1());
  }
}
function Cs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Lc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Rp = !1;
if (yr)
  try {
    var Aa = {};
    Object.defineProperty(Aa, "passive", {
      get: function () {
        Rp = !0;
      },
    }),
      window.addEventListener("test", Aa, Aa),
      window.removeEventListener("test", Aa, Aa);
  } catch {
    Rp = !1;
  }
function eT(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ts = !1,
  Wu = null,
  Uu = !1,
  Ip = null,
  tT = {
    onError: function (e) {
      (ts = !0), (Wu = e);
    },
  };
function nT(e, t, n, r, o, i, a, s, l) {
  (ts = !1), (Wu = null), eT.apply(tT, arguments);
}
function rT(e, t, n, r, o, i, a, s, l) {
  if ((nT.apply(this, arguments), ts)) {
    if (ts) {
      var u = Wu;
      (ts = !1), (Wu = null);
    } else throw Error(N(198));
    Uu || ((Uu = !0), (Ip = u));
  }
}
function Yo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function s1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Og(e) {
  if (Yo(e) !== e) throw Error(N(188));
}
function oT(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yo(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Og(o), e;
        if (i === r) return Og(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function l1(e) {
  return (e = oT(e)), e !== null ? u1(e) : null;
}
function u1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = u1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var c1 = Yt.unstable_scheduleCallback,
  Ng = Yt.unstable_cancelCallback,
  iT = Yt.unstable_shouldYield,
  aT = Yt.unstable_requestPaint,
  Ge = Yt.unstable_now,
  sT = Yt.unstable_getCurrentPriorityLevel,
  pm = Yt.unstable_ImmediatePriority,
  d1 = Yt.unstable_UserBlockingPriority,
  Hu = Yt.unstable_NormalPriority,
  lT = Yt.unstable_LowPriority,
  f1 = Yt.unstable_IdlePriority,
  Nc = null,
  Kn = null;
function uT(e) {
  if (Kn && typeof Kn.onCommitFiberRoot == "function")
    try {
      Kn.onCommitFiberRoot(Nc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var En = Math.clz32 ? Math.clz32 : fT,
  cT = Math.log,
  dT = Math.LN2;
function fT(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cT(e) / dT) | 0)) | 0;
}
var $l = 64,
  Ml = 4194304;
function Ga(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Ga(s)) : ((i &= a), i !== 0 && (r = Ga(i)));
  } else (a = n & ~o), a !== 0 ? (r = Ga(a)) : i !== 0 && (r = Ga(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - En(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function pT(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hT(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - En(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = pT(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function $p(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function p1() {
  var e = $l;
  return ($l <<= 1), !($l & 4194240) && ($l = 64), e;
}
function rf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - En(t)),
    (e[t] = n);
}
function mT(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - En(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function hm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - En(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ye = 0;
function h1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var m1,
  mm,
  v1,
  g1,
  y1,
  Mp = !1,
  Ol = [],
  Vr = null,
  Wr = null,
  Ur = null,
  ks = new Map(),
  _s = new Map(),
  Nr = [],
  vT =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Dg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vr = null;
      break;
    case "dragenter":
    case "dragleave":
      Wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ur = null;
      break;
    case "pointerover":
    case "pointerout":
      ks.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Ra(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = il(t)), t !== null && mm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gT(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Vr = Ra(Vr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Wr = Ra(Wr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ur = Ra(Ur, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ks.set(i, Ra(ks.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), _s.set(i, Ra(_s.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function x1(e) {
  var t = ko(e.target);
  if (t !== null) {
    var n = Yo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = s1(n)), t !== null)) {
          (e.blockedOn = t),
            y1(e.priority, function () {
              v1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function pu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Op(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jp = r), n.target.dispatchEvent(r), (jp = null);
    } else return (t = il(n)), t !== null && mm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zg(e, t, n) {
  pu(e) && n.delete(t);
}
function yT() {
  (Mp = !1),
    Vr !== null && pu(Vr) && (Vr = null),
    Wr !== null && pu(Wr) && (Wr = null),
    Ur !== null && pu(Ur) && (Ur = null),
    ks.forEach(zg),
    _s.forEach(zg);
}
function Ia(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mp ||
      ((Mp = !0),
      Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, yT)));
}
function Ps(e) {
  function t(o) {
    return Ia(o, e);
  }
  if (0 < Ol.length) {
    Ia(Ol[0], e);
    for (var n = 1; n < Ol.length; n++) {
      var r = Ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vr !== null && Ia(Vr, e),
      Wr !== null && Ia(Wr, e),
      Ur !== null && Ia(Ur, e),
      ks.forEach(t),
      _s.forEach(t),
      n = 0;
    n < Nr.length;
    n++
  )
    (r = Nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nr.length && ((n = Nr[0]), n.blockedOn === null); )
    x1(n), n.blockedOn === null && Nr.shift();
}
var Li = _r.ReactCurrentBatchConfig,
  Ku = !0;
function xT(e, t, n, r) {
  var o = ye,
    i = Li.transition;
  Li.transition = null;
  try {
    (ye = 1), vm(e, t, n, r);
  } finally {
    (ye = o), (Li.transition = i);
  }
}
function bT(e, t, n, r) {
  var o = ye,
    i = Li.transition;
  Li.transition = null;
  try {
    (ye = 4), vm(e, t, n, r);
  } finally {
    (ye = o), (Li.transition = i);
  }
}
function vm(e, t, n, r) {
  if (Ku) {
    var o = Op(e, t, n, r);
    if (o === null) hf(e, t, r, qu, n), Dg(e, r);
    else if (gT(o, e, t, n, r)) r.stopPropagation();
    else if ((Dg(e, r), t & 4 && -1 < vT.indexOf(e))) {
      for (; o !== null; ) {
        var i = il(o);
        if (
          (i !== null && m1(i),
          (i = Op(e, t, n, r)),
          i === null && hf(e, t, r, qu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hf(e, t, r, null, n);
  }
}
var qu = null;
function Op(e, t, n, r) {
  if (((qu = null), (e = fm(r)), (e = ko(e)), e !== null))
    if (((t = Yo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = s1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qu = e), null;
}
function b1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sT()) {
        case pm:
          return 1;
        case d1:
          return 4;
        case Hu:
        case lT:
          return 16;
        case f1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fr = null,
  gm = null,
  hu = null;
function S1() {
  if (hu) return hu;
  var e,
    t = gm,
    n = t.length,
    r,
    o = "value" in Fr ? Fr.value : Fr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (hu = o.slice(e, 1 < r ? 1 - r : void 0));
}
function mu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nl() {
  return !0;
}
function Fg() {
  return !1;
}
function Jt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nl
        : Fg),
      (this.isPropagationStopped = Fg),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var xa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ym = Jt(xa),
  ol = Fe({}, xa, { view: 0, detail: 0 }),
  ST = Jt(ol),
  of,
  af,
  $a,
  Dc = Fe({}, ol, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $a &&
            ($a && e.type === "mousemove"
              ? ((of = e.screenX - $a.screenX), (af = e.screenY - $a.screenY))
              : (af = of = 0),
            ($a = e)),
          of);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : af;
    },
  }),
  Lg = Jt(Dc),
  wT = Fe({}, Dc, { dataTransfer: 0 }),
  CT = Jt(wT),
  kT = Fe({}, ol, { relatedTarget: 0 }),
  sf = Jt(kT),
  _T = Fe({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  PT = Jt(_T),
  TT = Fe({}, xa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ET = Jt(TT),
  jT = Fe({}, xa, { data: 0 }),
  Bg = Jt(jT),
  AT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  RT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  IT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $T(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = IT[e]) ? !!t[e] : !1;
}
function xm() {
  return $T;
}
var MT = Fe({}, ol, {
    key: function (e) {
      if (e.key) {
        var t = AT[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? RT[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xm,
    charCode: function (e) {
      return e.type === "keypress" ? mu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  OT = Jt(MT),
  NT = Fe({}, Dc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vg = Jt(NT),
  DT = Fe({}, ol, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xm,
  }),
  zT = Jt(DT),
  FT = Fe({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  LT = Jt(FT),
  BT = Fe({}, Dc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  VT = Jt(BT),
  WT = [9, 13, 27, 32],
  bm = yr && "CompositionEvent" in window,
  ns = null;
yr && "documentMode" in document && (ns = document.documentMode);
var UT = yr && "TextEvent" in window && !ns,
  w1 = yr && (!bm || (ns && 8 < ns && 11 >= ns)),
  Wg = String.fromCharCode(32),
  Ug = !1;
function C1(e, t) {
  switch (e) {
    case "keyup":
      return WT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function k1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vi = !1;
function HT(e, t) {
  switch (e) {
    case "compositionend":
      return k1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ug = !0), Wg);
    case "textInput":
      return (e = t.data), e === Wg && Ug ? null : e;
    default:
      return null;
  }
}
function GT(e, t) {
  if (vi)
    return e === "compositionend" || (!bm && C1(e, t))
      ? ((e = S1()), (hu = gm = Fr = null), (vi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return w1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var KT = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!KT[e.type] : t === "textarea";
}
function _1(e, t, n, r) {
  n1(r),
    (t = Yu(t, "onChange")),
    0 < t.length &&
      ((n = new ym("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var rs = null,
  Ts = null;
function qT(e) {
  N1(e, 0);
}
function zc(e) {
  var t = xi(e);
  if (Yb(t)) return e;
}
function YT(e, t) {
  if (e === "change") return t;
}
var P1 = !1;
if (yr) {
  var lf;
  if (yr) {
    var uf = "oninput" in document;
    if (!uf) {
      var Gg = document.createElement("div");
      Gg.setAttribute("oninput", "return;"),
        (uf = typeof Gg.oninput == "function");
    }
    lf = uf;
  } else lf = !1;
  P1 = lf && (!document.documentMode || 9 < document.documentMode);
}
function Kg() {
  rs && (rs.detachEvent("onpropertychange", T1), (Ts = rs = null));
}
function T1(e) {
  if (e.propertyName === "value" && zc(Ts)) {
    var t = [];
    _1(t, Ts, e, fm(e)), a1(qT, t);
  }
}
function XT(e, t, n) {
  e === "focusin"
    ? (Kg(), (rs = t), (Ts = n), rs.attachEvent("onpropertychange", T1))
    : e === "focusout" && Kg();
}
function QT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zc(Ts);
}
function ZT(e, t) {
  if (e === "click") return zc(t);
}
function JT(e, t) {
  if (e === "input" || e === "change") return zc(t);
}
function eE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rn = typeof Object.is == "function" ? Object.is : eE;
function Es(e, t) {
  if (Rn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gp.call(t, o) || !Rn(e[o], t[o])) return !1;
  }
  return !0;
}
function qg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yg(e, t) {
  var n = qg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qg(n);
  }
}
function E1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? E1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function j1() {
  for (var e = window, t = Vu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vu(e.document);
  }
  return t;
}
function Sm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function tE(e) {
  var t = j1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    E1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Yg(n, i));
        var a = Yg(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nE = yr && "documentMode" in document && 11 >= document.documentMode,
  gi = null,
  Np = null,
  os = null,
  Dp = !1;
function Xg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Dp ||
    gi == null ||
    gi !== Vu(r) ||
    ((r = gi),
    "selectionStart" in r && Sm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (os && Es(os, r)) ||
      ((os = r),
      (r = Yu(Np, "onSelect")),
      0 < r.length &&
        ((t = new ym("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gi))));
}
function Dl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var yi = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionend: Dl("Transition", "TransitionEnd"),
  },
  cf = {},
  A1 = {};
yr &&
  ((A1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete yi.animationend.animation,
    delete yi.animationiteration.animation,
    delete yi.animationstart.animation),
  "TransitionEvent" in window || delete yi.transitionend.transition);
function Fc(e) {
  if (cf[e]) return cf[e];
  if (!yi[e]) return e;
  var t = yi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in A1) return (cf[e] = t[n]);
  return e;
}
var R1 = Fc("animationend"),
  I1 = Fc("animationiteration"),
  $1 = Fc("animationstart"),
  M1 = Fc("transitionend"),
  O1 = new Map(),
  Qg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function oo(e, t) {
  O1.set(e, t), qo(t, [e]);
}
for (var df = 0; df < Qg.length; df++) {
  var ff = Qg[df],
    rE = ff.toLowerCase(),
    oE = ff[0].toUpperCase() + ff.slice(1);
  oo(rE, "on" + oE);
}
oo(R1, "onAnimationEnd");
oo(I1, "onAnimationIteration");
oo($1, "onAnimationStart");
oo("dblclick", "onDoubleClick");
oo("focusin", "onFocus");
oo("focusout", "onBlur");
oo(M1, "onTransitionEnd");
Ji("onMouseEnter", ["mouseout", "mouseover"]);
Ji("onMouseLeave", ["mouseout", "mouseover"]);
Ji("onPointerEnter", ["pointerout", "pointerover"]);
Ji("onPointerLeave", ["pointerout", "pointerover"]);
qo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ka =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  iE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));
function Zg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rT(r, t, void 0, e), (e.currentTarget = null);
}
function N1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          Zg(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Zg(o, s, u), (i = l);
        }
    }
  }
  if (Uu) throw ((e = Ip), (Uu = !1), (Ip = null), e);
}
function Pe(e, t) {
  var n = t[Vp];
  n === void 0 && (n = t[Vp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (D1(t, e, 2, !1), n.add(r));
}
function pf(e, t, n) {
  var r = 0;
  t && (r |= 4), D1(n, e, r, t);
}
var zl = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[zl]) {
    (e[zl] = !0),
      Ub.forEach(function (n) {
        n !== "selectionchange" && (iE.has(n) || pf(n, !1, e), pf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zl] || ((t[zl] = !0), pf("selectionchange", !1, t));
  }
}
function D1(e, t, n, r) {
  switch (b1(t)) {
    case 1:
      var o = xT;
      break;
    case 4:
      o = bT;
      break;
    default:
      o = vm;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rp ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function hf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = ko(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  a1(function () {
    var u = i,
      c = fm(n),
      d = [];
    e: {
      var f = O1.get(e);
      if (f !== void 0) {
        var h = ym,
          x = e;
        switch (e) {
          case "keypress":
            if (mu(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = OT;
            break;
          case "focusin":
            (x = "focus"), (h = sf);
            break;
          case "focusout":
            (x = "blur"), (h = sf);
            break;
          case "beforeblur":
          case "afterblur":
            h = sf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Lg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = CT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = zT;
            break;
          case R1:
          case I1:
          case $1:
            h = PT;
            break;
          case M1:
            h = LT;
            break;
          case "scroll":
            h = ST;
            break;
          case "wheel":
            h = VT;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = ET;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Vg;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          y = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var C = b.stateNode;
          if (
            (b.tag === 5 &&
              C !== null &&
              ((b = C),
              y !== null && ((C = Cs(v, y)), C != null && g.push(As(v, C, b)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((f = new h(f, x, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== jp &&
            (x = n.relatedTarget || n.fromElement) &&
            (ko(x) || x[xr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((x = n.relatedTarget || n.toElement),
              (h = u),
              (x = x ? ko(x) : null),
              x !== null &&
                ((S = Yo(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((g = Lg),
            (C = "onMouseLeave"),
            (y = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Vg),
              (C = "onPointerLeave"),
              (y = "onPointerEnter"),
              (v = "pointer")),
            (S = h == null ? f : xi(h)),
            (b = x == null ? f : xi(x)),
            (f = new g(C, v + "leave", h, n, c)),
            (f.target = S),
            (f.relatedTarget = b),
            (C = null),
            ko(c) === u &&
              ((g = new g(y, v + "enter", x, n, c)),
              (g.target = b),
              (g.relatedTarget = S),
              (C = g)),
            (S = C),
            h && x)
          )
            t: {
              for (g = h, y = x, v = 0, b = g; b; b = si(b)) v++;
              for (b = 0, C = y; C; C = si(C)) b++;
              for (; 0 < v - b; ) (g = si(g)), v--;
              for (; 0 < b - v; ) (y = si(y)), b--;
              for (; v--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = si(g)), (y = si(y));
              }
              g = null;
            }
          else g = null;
          h !== null && Jg(d, f, h, g, !1),
            x !== null && S !== null && Jg(d, S, x, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? xi(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var k = YT;
        else if (Hg(f))
          if (P1) k = JT;
          else {
            k = QT;
            var T = XT;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = ZT);
        if (k && (k = k(e, u))) {
          _1(d, k, n, c);
          break e;
        }
        T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            kp(f, "number", f.value);
      }
      switch (((T = u ? xi(u) : window), e)) {
        case "focusin":
          (Hg(T) || T.contentEditable === "true") &&
            ((gi = T), (Np = u), (os = null));
          break;
        case "focusout":
          os = Np = gi = null;
          break;
        case "mousedown":
          Dp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Dp = !1), Xg(d, n, c);
          break;
        case "selectionchange":
          if (nE) break;
        case "keydown":
        case "keyup":
          Xg(d, n, c);
      }
      var _;
      if (bm)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        vi
          ? C1(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (w1 &&
          n.locale !== "ko" &&
          (vi || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && vi && (_ = S1())
            : ((Fr = c),
              (gm = "value" in Fr ? Fr.value : Fr.textContent),
              (vi = !0))),
        (T = Yu(u, j)),
        0 < T.length &&
          ((j = new Bg(j, e, null, n, c)),
          d.push({ event: j, listeners: T }),
          _ ? (j.data = _) : ((_ = k1(n)), _ !== null && (j.data = _)))),
        (_ = UT ? HT(e, n) : GT(e, n)) &&
          ((u = Yu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Bg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    N1(d, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Cs(e, n)),
      i != null && r.unshift(As(e, i, o)),
      (i = Cs(e, t)),
      i != null && r.push(As(e, i, o))),
      (e = e.return);
  }
  return r;
}
function si(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jg(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Cs(n, i)), l != null && a.unshift(As(n, l, s)))
        : o || ((l = Cs(n, i)), l != null && a.push(As(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var aE = /\r\n?/g,
  sE = /\u0000|\uFFFD/g;
function e0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      aE,
      `
`
    )
    .replace(sE, "");
}
function Fl(e, t, n) {
  if (((t = e0(t)), e0(e) !== t && n)) throw Error(N(425));
}
function Xu() {}
var zp = null,
  Fp = null;
function Lp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bp = typeof setTimeout == "function" ? setTimeout : void 0,
  lE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  t0 = typeof Promise == "function" ? Promise : void 0,
  uE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof t0 < "u"
      ? function (e) {
          return t0.resolve(null).then(e).catch(cE);
        }
      : Bp;
function cE(e) {
  setTimeout(function () {
    throw e;
  });
}
function mf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ps(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ps(t);
}
function Hr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function n0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ba = Math.random().toString(36).slice(2),
  Vn = "__reactFiber$" + ba,
  Rs = "__reactProps$" + ba,
  xr = "__reactContainer$" + ba,
  Vp = "__reactEvents$" + ba,
  dE = "__reactListeners$" + ba,
  fE = "__reactHandles$" + ba;
function ko(e) {
  var t = e[Vn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xr] || n[Vn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = n0(e); e !== null; ) {
          if ((n = e[Vn])) return n;
          e = n0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function il(e) {
  return (
    (e = e[Vn] || e[xr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Lc(e) {
  return e[Rs] || null;
}
var Wp = [],
  bi = -1;
function io(e) {
  return { current: e };
}
function je(e) {
  0 > bi || ((e.current = Wp[bi]), (Wp[bi] = null), bi--);
}
function ke(e, t) {
  bi++, (Wp[bi] = e.current), (e.current = t);
}
var eo = {},
  bt = io(eo),
  Ot = io(!1),
  Fo = eo;
function ea(e, t) {
  var n = e.type.contextTypes;
  if (!n) return eo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Nt(e) {
  return (e = e.childContextTypes), e != null;
}
function Qu() {
  je(Ot), je(bt);
}
function r0(e, t, n) {
  if (bt.current !== eo) throw Error(N(168));
  ke(bt, t), ke(Ot, n);
}
function z1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, XP(e) || "Unknown", o));
  return Fe({}, n, r);
}
function Zu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || eo),
    (Fo = bt.current),
    ke(bt, e),
    ke(Ot, Ot.current),
    !0
  );
}
function o0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = z1(e, t, Fo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      je(Ot),
      je(bt),
      ke(bt, e))
    : je(Ot),
    ke(Ot, n);
}
var ir = null,
  Bc = !1,
  vf = !1;
function F1(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function pE(e) {
  (Bc = !0), F1(e);
}
function ao() {
  if (!vf && ir !== null) {
    vf = !0;
    var e = 0,
      t = ye;
    try {
      var n = ir;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ir = null), (Bc = !1);
    } catch (o) {
      throw (ir !== null && (ir = ir.slice(e + 1)), c1(pm, ao), o);
    } finally {
      (ye = t), (vf = !1);
    }
  }
  return null;
}
var Si = [],
  wi = 0,
  Ju = null,
  ec = 0,
  cn = [],
  dn = 0,
  Lo = null,
  lr = 1,
  ur = "";
function yo(e, t) {
  (Si[wi++] = ec), (Si[wi++] = Ju), (Ju = e), (ec = t);
}
function L1(e, t, n) {
  (cn[dn++] = lr), (cn[dn++] = ur), (cn[dn++] = Lo), (Lo = e);
  var r = lr;
  e = ur;
  var o = 32 - En(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - En(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (lr = (1 << (32 - En(t) + o)) | (n << o) | r),
      (ur = i + e);
  } else (lr = (1 << i) | (n << o) | r), (ur = e);
}
function wm(e) {
  e.return !== null && (yo(e, 1), L1(e, 1, 0));
}
function Cm(e) {
  for (; e === Ju; )
    (Ju = Si[--wi]), (Si[wi] = null), (ec = Si[--wi]), (Si[wi] = null);
  for (; e === Lo; )
    (Lo = cn[--dn]),
      (cn[dn] = null),
      (ur = cn[--dn]),
      (cn[dn] = null),
      (lr = cn[--dn]),
      (cn[dn] = null);
}
var Gt = null,
  Ht = null,
  $e = !1,
  _n = null;
function B1(e, t) {
  var n = fn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function i0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Gt = e), (Ht = Hr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Ht = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lo !== null ? { id: lr, overflow: ur } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = fn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Gt = e),
            (Ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Up(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hp(e) {
  if ($e) {
    var t = Ht;
    if (t) {
      var n = t;
      if (!i0(e, t)) {
        if (Up(e)) throw Error(N(418));
        t = Hr(n.nextSibling);
        var r = Gt;
        t && i0(e, t)
          ? B1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e));
      }
    } else {
      if (Up(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e);
    }
  }
}
function a0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function Ll(e) {
  if (e !== Gt) return !1;
  if (!$e) return a0(e), ($e = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Lp(e.type, e.memoizedProps))),
    t && (t = Ht))
  ) {
    if (Up(e)) throw (V1(), Error(N(418)));
    for (; t; ) B1(e, t), (t = Hr(t.nextSibling));
  }
  if ((a0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ht = Hr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ht = null;
    }
  } else Ht = Gt ? Hr(e.stateNode.nextSibling) : null;
  return !0;
}
function V1() {
  for (var e = Ht; e; ) e = Hr(e.nextSibling);
}
function ta() {
  (Ht = Gt = null), ($e = !1);
}
function km(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
var hE = _r.ReactCurrentBatchConfig;
function Cn(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var tc = io(null),
  nc = null,
  Ci = null,
  _m = null;
function Pm() {
  _m = Ci = nc = null;
}
function Tm(e) {
  var t = tc.current;
  je(tc), (e._currentValue = t);
}
function Gp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bi(e, t) {
  (nc = e),
    (_m = Ci = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function mn(e) {
  var t = e._currentValue;
  if (_m !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ci === null)) {
      if (nc === null) throw Error(N(308));
      (Ci = e), (nc.dependencies = { lanes: 0, firstContext: e });
    } else Ci = Ci.next = e;
  return t;
}
var _o = null;
function Em(e) {
  _o === null ? (_o = [e]) : _o.push(e);
}
function W1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Em(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    br(e, r)
  );
}
function br(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mr = !1;
function jm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function U1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), de & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      br(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Em(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    br(e, n)
  );
}
function vu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hm(e, n);
  }
}
function s0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function rc(e, t, n, r) {
  var o = e.updateQueue;
  Mr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            g = s;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(h, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (f = typeof x == "function" ? x.call(h, d, f) : x),
                f == null)
              )
                break e;
              d = Fe({}, d, f);
              break e;
            case 2:
              Mr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Vo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function l0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var H1 = new Wb.Component().refs;
function Kp(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      o = qr(e),
      i = pr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Gr(e, i, o)),
      t !== null && (jn(t, e, o, r), vu(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      o = qr(e),
      i = pr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Gr(e, i, o)),
      t !== null && (jn(t, e, o, r), vu(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Tt(),
      r = qr(e),
      o = pr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Gr(e, o, r)),
      t !== null && (jn(t, e, r, n), vu(t, e, r));
  },
};
function u0(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Es(n, r) || !Es(o, i)
      : !0
  );
}
function G1(e, t, n) {
  var r = !1,
    o = eo,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mn(i))
      : ((o = Nt(t) ? Fo : bt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ea(e, o) : eo)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function c0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vc.enqueueReplaceState(t, t.state, null);
}
function qp(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = H1), jm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mn(i))
    : ((i = Nt(t) ? Fo : bt.current), (o.context = ea(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Kp(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vc.enqueueReplaceState(o, o.state, null),
      rc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ma(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === H1 && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Bl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function d0(e) {
  var t = e._init;
  return t(e._payload);
}
function K1(e) {
  function t(y, v) {
    if (e) {
      var b = y.deletions;
      b === null ? ((y.deletions = [v]), (y.flags |= 16)) : b.push(v);
    }
  }
  function n(y, v) {
    if (!e) return null;
    for (; v !== null; ) t(y, v), (v = v.sibling);
    return null;
  }
  function r(y, v) {
    for (y = new Map(); v !== null; )
      v.key !== null ? y.set(v.key, v) : y.set(v.index, v), (v = v.sibling);
    return y;
  }
  function o(y, v) {
    return (y = Yr(y, v)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, v, b) {
    return (
      (y.index = b),
      e
        ? ((b = y.alternate),
          b !== null
            ? ((b = b.index), b < v ? ((y.flags |= 2), v) : b)
            : ((y.flags |= 2), v))
        : ((y.flags |= 1048576), v)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, v, b, C) {
    return v === null || v.tag !== 6
      ? ((v = Cf(b, y.mode, C)), (v.return = y), v)
      : ((v = o(v, b)), (v.return = y), v);
  }
  function l(y, v, b, C) {
    var k = b.type;
    return k === mi
      ? c(y, v, b.props.children, C, b.key)
      : v !== null &&
        (v.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === $r &&
            d0(k) === v.type))
      ? ((C = o(v, b.props)), (C.ref = Ma(y, v, b)), (C.return = y), C)
      : ((C = wu(b.type, b.key, b.props, null, y.mode, C)),
        (C.ref = Ma(y, v, b)),
        (C.return = y),
        C);
  }
  function u(y, v, b, C) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== b.containerInfo ||
      v.stateNode.implementation !== b.implementation
      ? ((v = kf(b, y.mode, C)), (v.return = y), v)
      : ((v = o(v, b.children || [])), (v.return = y), v);
  }
  function c(y, v, b, C, k) {
    return v === null || v.tag !== 7
      ? ((v = Ao(b, y.mode, C, k)), (v.return = y), v)
      : ((v = o(v, b)), (v.return = y), v);
  }
  function d(y, v, b) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Cf("" + v, y.mode, b)), (v.return = y), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Al:
          return (
            (b = wu(v.type, v.key, v.props, null, y.mode, b)),
            (b.ref = Ma(y, null, v)),
            (b.return = y),
            b
          );
        case hi:
          return (v = kf(v, y.mode, b)), (v.return = y), v;
        case $r:
          var C = v._init;
          return d(y, C(v._payload), b);
      }
      if (Ha(v) || ja(v))
        return (v = Ao(v, y.mode, b, null)), (v.return = y), v;
      Bl(y, v);
    }
    return null;
  }
  function f(y, v, b, C) {
    var k = v !== null ? v.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return k !== null ? null : s(y, v, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Al:
          return b.key === k ? l(y, v, b, C) : null;
        case hi:
          return b.key === k ? u(y, v, b, C) : null;
        case $r:
          return (k = b._init), f(y, v, k(b._payload), C);
      }
      if (Ha(b) || ja(b)) return k !== null ? null : c(y, v, b, C, null);
      Bl(y, b);
    }
    return null;
  }
  function h(y, v, b, C, k) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (y = y.get(b) || null), s(v, y, "" + C, k);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Al:
          return (y = y.get(C.key === null ? b : C.key) || null), l(v, y, C, k);
        case hi:
          return (y = y.get(C.key === null ? b : C.key) || null), u(v, y, C, k);
        case $r:
          var T = C._init;
          return h(y, v, b, T(C._payload), k);
      }
      if (Ha(C) || ja(C)) return (y = y.get(b) || null), c(v, y, C, k, null);
      Bl(v, C);
    }
    return null;
  }
  function x(y, v, b, C) {
    for (
      var k = null, T = null, _ = v, j = (v = 0), I = null;
      _ !== null && j < b.length;
      j++
    ) {
      _.index > j ? ((I = _), (_ = null)) : (I = _.sibling);
      var A = f(y, _, b[j], C);
      if (A === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && A.alternate === null && t(y, _),
        (v = i(A, v, j)),
        T === null ? (k = A) : (T.sibling = A),
        (T = A),
        (_ = I);
    }
    if (j === b.length) return n(y, _), $e && yo(y, j), k;
    if (_ === null) {
      for (; j < b.length; j++)
        (_ = d(y, b[j], C)),
          _ !== null &&
            ((v = i(_, v, j)), T === null ? (k = _) : (T.sibling = _), (T = _));
      return $e && yo(y, j), k;
    }
    for (_ = r(y, _); j < b.length; j++)
      (I = h(_, y, j, b[j], C)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? j : I.key),
          (v = i(I, v, j)),
          T === null ? (k = I) : (T.sibling = I),
          (T = I));
    return (
      e &&
        _.forEach(function (M) {
          return t(y, M);
        }),
      $e && yo(y, j),
      k
    );
  }
  function g(y, v, b, C) {
    var k = ja(b);
    if (typeof k != "function") throw Error(N(150));
    if (((b = k.call(b)), b == null)) throw Error(N(151));
    for (
      var T = (k = null), _ = v, j = (v = 0), I = null, A = b.next();
      _ !== null && !A.done;
      j++, A = b.next()
    ) {
      _.index > j ? ((I = _), (_ = null)) : (I = _.sibling);
      var M = f(y, _, A.value, C);
      if (M === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && M.alternate === null && t(y, _),
        (v = i(M, v, j)),
        T === null ? (k = M) : (T.sibling = M),
        (T = M),
        (_ = I);
    }
    if (A.done) return n(y, _), $e && yo(y, j), k;
    if (_ === null) {
      for (; !A.done; j++, A = b.next())
        (A = d(y, A.value, C)),
          A !== null &&
            ((v = i(A, v, j)), T === null ? (k = A) : (T.sibling = A), (T = A));
      return $e && yo(y, j), k;
    }
    for (_ = r(y, _); !A.done; j++, A = b.next())
      (A = h(_, y, j, A.value, C)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? j : A.key),
          (v = i(A, v, j)),
          T === null ? (k = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        _.forEach(function (K) {
          return t(y, K);
        }),
      $e && yo(y, j),
      k
    );
  }
  function S(y, v, b, C) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === mi &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case Al:
          e: {
            for (var k = b.key, T = v; T !== null; ) {
              if (T.key === k) {
                if (((k = b.type), k === mi)) {
                  if (T.tag === 7) {
                    n(y, T.sibling),
                      (v = o(T, b.props.children)),
                      (v.return = y),
                      (y = v);
                    break e;
                  }
                } else if (
                  T.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === $r &&
                    d0(k) === T.type)
                ) {
                  n(y, T.sibling),
                    (v = o(T, b.props)),
                    (v.ref = Ma(y, T, b)),
                    (v.return = y),
                    (y = v);
                  break e;
                }
                n(y, T);
                break;
              } else t(y, T);
              T = T.sibling;
            }
            b.type === mi
              ? ((v = Ao(b.props.children, y.mode, C, b.key)),
                (v.return = y),
                (y = v))
              : ((C = wu(b.type, b.key, b.props, null, y.mode, C)),
                (C.ref = Ma(y, v, b)),
                (C.return = y),
                (y = C));
          }
          return a(y);
        case hi:
          e: {
            for (T = b.key; v !== null; ) {
              if (v.key === T)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === b.containerInfo &&
                  v.stateNode.implementation === b.implementation
                ) {
                  n(y, v.sibling),
                    (v = o(v, b.children || [])),
                    (v.return = y),
                    (y = v);
                  break e;
                } else {
                  n(y, v);
                  break;
                }
              else t(y, v);
              v = v.sibling;
            }
            (v = kf(b, y.mode, C)), (v.return = y), (y = v);
          }
          return a(y);
        case $r:
          return (T = b._init), S(y, v, T(b._payload), C);
      }
      if (Ha(b)) return x(y, v, b, C);
      if (ja(b)) return g(y, v, b, C);
      Bl(y, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        v !== null && v.tag === 6
          ? (n(y, v.sibling), (v = o(v, b)), (v.return = y), (y = v))
          : (n(y, v), (v = Cf(b, y.mode, C)), (v.return = y), (y = v)),
        a(y))
      : n(y, v);
  }
  return S;
}
var na = K1(!0),
  q1 = K1(!1),
  al = {},
  qn = io(al),
  Is = io(al),
  $s = io(al);
function Po(e) {
  if (e === al) throw Error(N(174));
  return e;
}
function Am(e, t) {
  switch ((ke($s, t), ke(Is, e), ke(qn, al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pp(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pp(t, e));
  }
  je(qn), ke(qn, t);
}
function ra() {
  je(qn), je(Is), je($s);
}
function Y1(e) {
  Po($s.current);
  var t = Po(qn.current),
    n = Pp(t, e.type);
  t !== n && (ke(Is, e), ke(qn, n));
}
function Rm(e) {
  Is.current === e && (je(qn), je(Is));
}
var Ne = io(0);
function oc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var gf = [];
function Im() {
  for (var e = 0; e < gf.length; e++)
    gf[e]._workInProgressVersionPrimary = null;
  gf.length = 0;
}
var gu = _r.ReactCurrentDispatcher,
  yf = _r.ReactCurrentBatchConfig,
  Bo = 0,
  ze = null,
  Je = null,
  it = null,
  ic = !1,
  is = !1,
  Ms = 0,
  mE = 0;
function ht() {
  throw Error(N(321));
}
function $m(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rn(e[n], t[n])) return !1;
  return !0;
}
function Mm(e, t, n, r, o, i) {
  if (
    ((Bo = i),
    (ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gu.current = e === null || e.memoizedState === null ? xE : bE),
    (e = n(r, o)),
    is)
  ) {
    i = 0;
    do {
      if (((is = !1), (Ms = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (it = Je = null),
        (t.updateQueue = null),
        (gu.current = SE),
        (e = n(r, o));
    } while (is);
  }
  if (
    ((gu.current = ac),
    (t = Je !== null && Je.next !== null),
    (Bo = 0),
    (it = Je = ze = null),
    (ic = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Om() {
  var e = Ms !== 0;
  return (Ms = 0), e;
}
function Dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return it === null ? (ze.memoizedState = it = e) : (it = it.next = e), it;
}
function vn() {
  if (Je === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Je.next;
  var t = it === null ? ze.memoizedState : it.next;
  if (t !== null) (it = t), (Je = e);
  else {
    if (e === null) throw Error(N(310));
    (Je = e),
      (e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null,
      }),
      it === null ? (ze.memoizedState = it = e) : (it = it.next = e);
  }
  return it;
}
function Os(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xf(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Je,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Bo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (ze.lanes |= c),
          (Vo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Rn(r, t.memoizedState) || (Mt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ze.lanes |= i), (Vo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bf(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Rn(i, t.memoizedState) || (Mt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function X1() {}
function Q1(e, t) {
  var n = ze,
    r = vn(),
    o = t(),
    i = !Rn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Mt = !0)),
    (r = r.queue),
    Nm(eS.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ns(9, J1.bind(null, n, r, o, t), void 0, null),
      at === null)
    )
      throw Error(N(349));
    Bo & 30 || Z1(n, t, o);
  }
  return o;
}
function Z1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function J1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tS(t) && nS(e);
}
function eS(e, t, n) {
  return n(function () {
    tS(t) && nS(e);
  });
}
function tS(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rn(e, n);
  } catch {
    return !0;
  }
}
function nS(e) {
  var t = br(e, 1);
  t !== null && jn(t, e, 1, -1);
}
function f0(e) {
  var t = Dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Os,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yE.bind(null, ze, e)),
    [t.memoizedState, e]
  );
}
function Ns(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rS() {
  return vn().memoizedState;
}
function yu(e, t, n, r) {
  var o = Dn();
  (ze.flags |= e),
    (o.memoizedState = Ns(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wc(e, t, n, r) {
  var o = vn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Je !== null) {
    var a = Je.memoizedState;
    if (((i = a.destroy), r !== null && $m(r, a.deps))) {
      o.memoizedState = Ns(t, n, i, r);
      return;
    }
  }
  (ze.flags |= e), (o.memoizedState = Ns(1 | t, n, i, r));
}
function p0(e, t) {
  return yu(8390656, 8, e, t);
}
function Nm(e, t) {
  return Wc(2048, 8, e, t);
}
function oS(e, t) {
  return Wc(4, 2, e, t);
}
function iS(e, t) {
  return Wc(4, 4, e, t);
}
function aS(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sS(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wc(4, 4, aS.bind(null, t, e), n)
  );
}
function Dm() {}
function lS(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $m(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uS(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $m(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cS(e, t, n) {
  return Bo & 21
    ? (Rn(n, t) || ((n = p1()), (ze.lanes |= n), (Vo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function vE(e, t) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yf.transition;
  yf.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = n), (yf.transition = r);
  }
}
function dS() {
  return vn().memoizedState;
}
function gE(e, t, n) {
  var r = qr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fS(e))
  )
    pS(t, n);
  else if (((n = W1(e, t, n, r)), n !== null)) {
    var o = Tt();
    jn(n, e, r, o), hS(n, t, r);
  }
}
function yE(e, t, n) {
  var r = qr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fS(e)) pS(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Rn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Em(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = W1(e, t, o, r)),
      n !== null && ((o = Tt()), jn(n, e, r, o), hS(n, t, r));
  }
}
function fS(e) {
  var t = e.alternate;
  return e === ze || (t !== null && t === ze);
}
function pS(e, t) {
  is = ic = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hm(e, n);
  }
}
var ac = {
    readContext: mn,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useInsertionEffect: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useSyncExternalStore: ht,
    useId: ht,
    unstable_isNewReconciler: !1,
  },
  xE = {
    readContext: mn,
    useCallback: function (e, t) {
      return (Dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mn,
    useEffect: p0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        yu(4194308, 4, aS.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return yu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gE.bind(null, ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: f0,
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      return (Dn().memoizedState = e);
    },
    useTransition: function () {
      var e = f0(!1),
        t = e[0];
      return (e = vE.bind(null, e[1])), (Dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ze,
        o = Dn();
      if ($e) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), at === null)) throw Error(N(349));
        Bo & 30 || Z1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        p0(eS.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ns(9, J1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dn(),
        t = at.identifierPrefix;
      if ($e) {
        var n = ur,
          r = lr;
        (n = (r & ~(1 << (32 - En(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ms++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bE = {
    readContext: mn,
    useCallback: lS,
    useContext: mn,
    useEffect: Nm,
    useImperativeHandle: sS,
    useInsertionEffect: oS,
    useLayoutEffect: iS,
    useMemo: uS,
    useReducer: xf,
    useRef: rS,
    useState: function () {
      return xf(Os);
    },
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      var t = vn();
      return cS(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = xf(Os)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: X1,
    useSyncExternalStore: Q1,
    useId: dS,
    unstable_isNewReconciler: !1,
  },
  SE = {
    readContext: mn,
    useCallback: lS,
    useContext: mn,
    useEffect: Nm,
    useImperativeHandle: sS,
    useInsertionEffect: oS,
    useLayoutEffect: iS,
    useMemo: uS,
    useReducer: bf,
    useRef: rS,
    useState: function () {
      return bf(Os);
    },
    useDebugValue: Dm,
    useDeferredValue: function (e) {
      var t = vn();
      return Je === null ? (t.memoizedState = e) : cS(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = bf(Os)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: X1,
    useSyncExternalStore: Q1,
    useId: dS,
    unstable_isNewReconciler: !1,
  };
function oa(e, t) {
  try {
    var n = "",
      r = t;
    do (n += YP(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Sf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wE = typeof WeakMap == "function" ? WeakMap : Map;
function mS(e, t, n) {
  (n = pr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      lc || ((lc = !0), (ih = r)), Yp(e, t);
    }),
    n
  );
}
function vS(e, t, n) {
  (n = pr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Yp(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Yp(e, t),
          typeof r != "function" &&
            (Kr === null ? (Kr = new Set([this])) : Kr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function h0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = NE.bind(null, e, t, n)), t.then(e, e));
}
function m0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function v0(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pr(-1, 1)), (t.tag = 2), Gr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var CE = _r.ReactCurrentOwner,
  Mt = !1;
function kt(e, t, n, r) {
  t.child = e === null ? q1(t, null, n, r) : na(t, e.child, n, r);
}
function g0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Bi(t, o),
    (r = Mm(e, t, n, r, i, o)),
    (n = Om()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Sr(e, t, o))
      : ($e && n && wm(t), (t.flags |= 1), kt(e, t, r, o), t.child)
  );
}
function y0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gS(e, t, i, r, o))
      : ((e = wu(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Es), n(a, r) && e.ref === t.ref)
    )
      return Sr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gS(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Es(i, r) && e.ref === t.ref)
      if (((Mt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Mt = !0);
      else return (t.lanes = e.lanes), Sr(e, t, o);
  }
  return Xp(e, t, n, r, o);
}
function yS(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(_i, Wt),
        (Wt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ke(_i, Wt),
          (Wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ke(_i, Wt),
        (Wt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ke(_i, Wt),
      (Wt |= r);
  return kt(e, t, o, n), t.child;
}
function xS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xp(e, t, n, r, o) {
  var i = Nt(n) ? Fo : bt.current;
  return (
    (i = ea(t, i)),
    Bi(t, o),
    (n = Mm(e, t, n, r, i, o)),
    (r = Om()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Sr(e, t, o))
      : ($e && r && wm(t), (t.flags |= 1), kt(e, t, n, o), t.child)
  );
}
function x0(e, t, n, r, o) {
  if (Nt(n)) {
    var i = !0;
    Zu(t);
  } else i = !1;
  if ((Bi(t, o), t.stateNode === null))
    xu(e, t), G1(t, n, r), qp(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mn(u))
      : ((u = Nt(n) ? Fo : bt.current), (u = ea(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && c0(t, a, r, u)),
      (Mr = !1);
    var f = t.memoizedState;
    (a.state = f),
      rc(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Ot.current || Mr
        ? (typeof c == "function" && (Kp(t, n, c, r), (l = t.memoizedState)),
          (s = Mr || u0(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      U1(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Cn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mn(l))
        : ((l = Nt(n) ? Fo : bt.current), (l = ea(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && c0(t, a, r, l)),
      (Mr = !1),
      (f = t.memoizedState),
      (a.state = f),
      rc(t, r, a, o);
    var x = t.memoizedState;
    s !== d || f !== x || Ot.current || Mr
      ? (typeof h == "function" && (Kp(t, n, h, r), (x = t.memoizedState)),
        (u = Mr || u0(t, n, u, r, f, x, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, x, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, x, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (a.props = r),
        (a.state = x),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qp(e, t, n, r, i, o);
}
function Qp(e, t, n, r, o, i) {
  xS(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && o0(t, n, !1), Sr(e, t, i);
  (r = t.stateNode), (CE.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = na(t, e.child, null, i)), (t.child = na(t, null, s, i)))
      : kt(e, t, s, i),
    (t.memoizedState = r.state),
    o && o0(t, n, !0),
    t.child
  );
}
function bS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? r0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && r0(e, t.context, !1),
    Am(e, t.containerInfo);
}
function b0(e, t, n, r, o) {
  return ta(), km(o), (t.flags |= 256), kt(e, t, n, r), t.child;
}
var Zp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function SS(e, t, n) {
  var r = t.pendingProps,
    o = Ne.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ke(Ne, o & 1),
    e === null)
  )
    return (
      Hp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Gc(a, r, 0, null)),
              (e = Ao(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Jp(n)),
              (t.memoizedState = Zp),
              e)
            : zm(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return kE(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Yr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Yr(s, i)) : ((i = Ao(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Jp(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zp),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Yr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zm(e, t) {
  return (
    (t = Gc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vl(e, t, n, r) {
  return (
    r !== null && km(r),
    na(t, e.child, null, n),
    (e = zm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kE(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sf(Error(N(422)))), Vl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Gc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ao(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && na(t, e.child, null, a),
        (t.child.memoizedState = Jp(a)),
        (t.memoizedState = Zp),
        i);
  if (!(t.mode & 1)) return Vl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(N(419))), (r = Sf(i, r, void 0)), Vl(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Mt || s)) {
    if (((r = at), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), br(e, o), jn(r, e, o, -1));
    }
    return Um(), (r = Sf(Error(N(421)))), Vl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = DE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ht = Hr(o.nextSibling)),
      (Gt = t),
      ($e = !0),
      (_n = null),
      e !== null &&
        ((cn[dn++] = lr),
        (cn[dn++] = ur),
        (cn[dn++] = Lo),
        (lr = e.id),
        (ur = e.overflow),
        (Lo = t)),
      (t = zm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function S0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gp(e.return, t, n);
}
function wf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function wS(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((kt(e, t, r.children, n), (r = Ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && S0(e, n, t);
        else if (e.tag === 19) S0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ke(Ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && oc(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && oc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        wf(t, !0, n, null, i);
        break;
      case "together":
        wf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Sr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _E(e, t, n) {
  switch (t.tag) {
    case 3:
      bS(t), ta();
      break;
    case 5:
      Y1(t);
      break;
    case 1:
      Nt(t.type) && Zu(t);
      break;
    case 4:
      Am(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ke(tc, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(Ne, Ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? SS(e, t, n)
          : (ke(Ne, Ne.current & 1),
            (e = Sr(e, t, n)),
            e !== null ? e.sibling : null);
      ke(Ne, Ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wS(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ke(Ne, Ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yS(e, t, n);
  }
  return Sr(e, t, n);
}
var CS, eh, kS, _S;
CS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
eh = function () {};
kS = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Po(qn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = wp(e, o)), (r = wp(e, r)), (i = []);
        break;
      case "select":
        (o = Fe({}, o, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = _p(e, o)), (r = _p(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xu);
    }
    Tp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ss.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ss.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Pe("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_S = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Oa(e, t) {
  if (!$e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function PE(e, t, n) {
  var r = t.pendingProps;
  switch ((Cm(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return mt(t), null;
    case 1:
      return Nt(t.type) && Qu(), mt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ra(),
        je(Ot),
        je(bt),
        Im(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _n !== null && (lh(_n), (_n = null)))),
        eh(e, t),
        mt(t),
        null
      );
    case 5:
      Rm(t);
      var o = Po($s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kS(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return mt(t), null;
        }
        if (((e = Po(qn.current)), Ll(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Vn] = t), (r[Rs] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ka.length; o++) Pe(Ka[o], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              Ag(r, i), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              Ig(r, i), Pe("invalid", r);
          }
          Tp(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fl(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fl(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ss.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              Rl(r), Rg(r, i, !0);
              break;
            case "textarea":
              Rl(r), $g(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zb(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Vn] = t),
            (e[Rs] = r),
            CS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ep(n, r)), n)) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ka.length; o++) Pe(Ka[o], e);
                o = r;
                break;
              case "source":
                Pe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), (o = r);
                break;
              case "details":
                Pe("toggle", e), (o = r);
                break;
              case "input":
                Ag(e, r), (o = wp(e, r)), Pe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Fe({}, r, { value: void 0 })),
                  Pe("invalid", e);
                break;
              case "textarea":
                Ig(e, r), (o = _p(e, r)), Pe("invalid", e);
                break;
              default:
                o = r;
            }
            Tp(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? t1(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Jb(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ws(e, l)
                    : typeof l == "number" && ws(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ss.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Pe("scroll", e)
                      : l != null && lm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Rl(e), Rg(e, r, !1);
                break;
              case "textarea":
                Rl(e), $g(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Di(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Di(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Xu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return mt(t), null;
    case 6:
      if (e && t.stateNode != null) _S(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Po($s.current)), Po(qn.current), Ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vn] = t),
            (i = r.nodeValue !== n) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vn] = t),
            (t.stateNode = r);
      }
      return mt(t), null;
    case 13:
      if (
        (je(Ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($e && Ht !== null && t.mode & 1 && !(t.flags & 128))
          V1(), ta(), (t.flags |= 98560), (i = !1);
        else if (((i = Ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[Vn] = t;
          } else
            ta(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          mt(t), (i = !1);
        } else _n !== null && (lh(_n), (_n = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ne.current & 1 ? et === 0 && (et = 3) : Um())),
          t.updateQueue !== null && (t.flags |= 4),
          mt(t),
          null);
    case 4:
      return (
        ra(), eh(e, t), e === null && js(t.stateNode.containerInfo), mt(t), null
      );
    case 10:
      return Tm(t.type._context), mt(t), null;
    case 17:
      return Nt(t.type) && Qu(), mt(t), null;
    case 19:
      if ((je(Ne), (i = t.memoizedState), i === null)) return mt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Oa(i, !1);
        else {
          if (et !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = oc(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Oa(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ke(Ne, (Ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ge() > ia &&
            ((t.flags |= 128), (r = !0), Oa(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oc(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Oa(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !$e)
            )
              return mt(t), null;
          } else
            2 * Ge() - i.renderingStartTime > ia &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Oa(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ge()),
          (t.sibling = null),
          (n = Ne.current),
          ke(Ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (mt(t), null);
    case 22:
    case 23:
      return (
        Wm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Wt & 1073741824 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : mt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function TE(e, t) {
  switch ((Cm(t), t.tag)) {
    case 1:
      return (
        Nt(t.type) && Qu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ra(),
        je(Ot),
        je(bt),
        Im(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Rm(t), null;
    case 13:
      if (
        (je(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        ta();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return je(Ne), null;
    case 4:
      return ra(), null;
    case 10:
      return Tm(t.type._context), null;
    case 22:
    case 23:
      return Wm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1,
  yt = !1,
  EE = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function ki(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Be(e, t, r);
      }
    else n.current = null;
}
function th(e, t, n) {
  try {
    n();
  } catch (r) {
    Be(e, t, r);
  }
}
var w0 = !1;
function jE(e, t) {
  if (((zp = Ku), (e = j1()), Sm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fp = { focusedElem: e, selectionRange: n }, Ku = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    S = x.memoizedState,
                    y = t.stateNode,
                    v = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Cn(t.type, g),
                      S
                    );
                  y.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (C) {
          Be(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (x = w0), (w0 = !1), x;
}
function as(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && th(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Uc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function PS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), PS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vn], delete t[Rs], delete t[Vp], delete t[dE], delete t[fE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function TS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function C0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || TS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rh(e, t, n), e = e.sibling; e !== null; ) rh(e, t, n), (e = e.sibling);
}
function oh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oh(e, t, n), e = e.sibling; e !== null; ) oh(e, t, n), (e = e.sibling);
}
var ut = null,
  kn = !1;
function Tr(e, t, n) {
  for (n = n.child; n !== null; ) ES(e, t, n), (n = n.sibling);
}
function ES(e, t, n) {
  if (Kn && typeof Kn.onCommitFiberUnmount == "function")
    try {
      Kn.onCommitFiberUnmount(Nc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      yt || ki(n, t);
    case 6:
      var r = ut,
        o = kn;
      (ut = null),
        Tr(e, t, n),
        (ut = r),
        (kn = o),
        ut !== null &&
          (kn
            ? ((e = ut),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ut.removeChild(n.stateNode));
      break;
    case 18:
      ut !== null &&
        (kn
          ? ((e = ut),
            (n = n.stateNode),
            e.nodeType === 8
              ? mf(e.parentNode, n)
              : e.nodeType === 1 && mf(e, n),
            Ps(e))
          : mf(ut, n.stateNode));
      break;
    case 4:
      (r = ut),
        (o = kn),
        (ut = n.stateNode.containerInfo),
        (kn = !0),
        Tr(e, t, n),
        (ut = r),
        (kn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && th(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Tr(e, t, n);
      break;
    case 1:
      if (
        !yt &&
        (ki(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Be(n, t, s);
        }
      Tr(e, t, n);
      break;
    case 21:
      Tr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((yt = (r = yt) || n.memoizedState !== null), Tr(e, t, n), (yt = r))
        : Tr(e, t, n);
      break;
    default:
      Tr(e, t, n);
  }
}
function k0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new EE()),
      t.forEach(function (r) {
        var o = zE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ut = s.stateNode), (kn = !1);
              break e;
            case 3:
              (ut = s.stateNode.containerInfo), (kn = !0);
              break e;
            case 4:
              (ut = s.stateNode.containerInfo), (kn = !0);
              break e;
          }
          s = s.return;
        }
        if (ut === null) throw Error(N(160));
        ES(i, a, o), (ut = null), (kn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Be(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jS(t, e), (t = t.sibling);
}
function jS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Sn(t, e), Mn(e), r & 4)) {
        try {
          as(3, e, e.return), Uc(3, e);
        } catch (g) {
          Be(e, e.return, g);
        }
        try {
          as(5, e, e.return);
        } catch (g) {
          Be(e, e.return, g);
        }
      }
      break;
    case 1:
      Sn(t, e), Mn(e), r & 512 && n !== null && ki(n, n.return);
      break;
    case 5:
      if (
        (Sn(t, e),
        Mn(e),
        r & 512 && n !== null && ki(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ws(o, "");
        } catch (g) {
          Be(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Xb(o, i),
              Ep(s, a);
            var u = Ep(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? t1(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Jb(o, d)
                : c === "children"
                ? ws(o, d)
                : lm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Cp(o, i);
                break;
              case "textarea":
                Qb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Di(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Di(o, !!i.multiple, i.defaultValue, !0)
                      : Di(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Rs] = i;
          } catch (g) {
            Be(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Sn(t, e), Mn(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Be(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Sn(t, e), Mn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ps(t.containerInfo);
        } catch (g) {
          Be(e, e.return, g);
        }
      break;
    case 4:
      Sn(t, e), Mn(e);
      break;
    case 13:
      Sn(t, e),
        Mn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Bm = Ge())),
        r & 4 && k0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((yt = (u = yt) || c), Sn(t, e), (yt = u)) : Sn(t, e),
        Mn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (W = e, c = e.child; c !== null; ) {
            for (d = W = c; W !== null; ) {
              switch (((f = W), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  as(4, f, f.return);
                  break;
                case 1:
                  ki(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      Be(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ki(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    P0(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (W = h)) : P0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = e1("display", a)));
              } catch (g) {
                Be(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Be(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Sn(t, e), Mn(e), r & 4 && k0(e);
      break;
    case 21:
      break;
    default:
      Sn(t, e), Mn(e);
  }
}
function Mn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (TS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ws(o, ""), (r.flags &= -33));
          var i = C0(e);
          oh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = C0(e);
          rh(e, s, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      Be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function AE(e, t, n) {
  (W = e), AS(e);
}
function AS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Wl;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || yt;
        s = Wl;
        var u = yt;
        if (((Wl = a), (yt = l) && !u))
          for (W = o; W !== null; )
            (a = W),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? T0(o)
                : l !== null
                ? ((l.return = a), (W = l))
                : T0(o);
        for (; i !== null; ) (W = i), AS(i), (i = i.sibling);
        (W = o), (Wl = s), (yt = u);
      }
      _0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (W = i)) : _0(e);
  }
}
function _0(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || Uc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Cn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && l0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                l0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ps(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        yt || (t.flags & 512 && nh(t));
      } catch (f) {
        Be(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function P0(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function T0(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uc(4, t);
          } catch (l) {
            Be(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Be(t, o, l);
            }
          }
          var i = t.return;
          try {
            nh(t);
          } catch (l) {
            Be(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            nh(t);
          } catch (l) {
            Be(t, a, l);
          }
      }
    } catch (l) {
      Be(t, t.return, l);
    }
    if (t === e) {
      W = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (W = s);
      break;
    }
    W = t.return;
  }
}
var RE = Math.ceil,
  sc = _r.ReactCurrentDispatcher,
  Fm = _r.ReactCurrentOwner,
  pn = _r.ReactCurrentBatchConfig,
  de = 0,
  at = null,
  Xe = null,
  dt = 0,
  Wt = 0,
  _i = io(0),
  et = 0,
  Ds = null,
  Vo = 0,
  Hc = 0,
  Lm = 0,
  ss = null,
  It = null,
  Bm = 0,
  ia = 1 / 0,
  or = null,
  lc = !1,
  ih = null,
  Kr = null,
  Ul = !1,
  Lr = null,
  uc = 0,
  ls = 0,
  ah = null,
  bu = -1,
  Su = 0;
function Tt() {
  return de & 6 ? Ge() : bu !== -1 ? bu : (bu = Ge());
}
function qr(e) {
  return e.mode & 1
    ? de & 2 && dt !== 0
      ? dt & -dt
      : hE.transition !== null
      ? (Su === 0 && (Su = p1()), Su)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : b1(e.type))),
        e)
    : 1;
}
function jn(e, t, n, r) {
  if (50 < ls) throw ((ls = 0), (ah = null), Error(N(185)));
  rl(e, n, r),
    (!(de & 2) || e !== at) &&
      (e === at && (!(de & 2) && (Hc |= n), et === 4 && Dr(e, dt)),
      Dt(e, r),
      n === 1 && de === 0 && !(t.mode & 1) && ((ia = Ge() + 500), Bc && ao()));
}
function Dt(e, t) {
  var n = e.callbackNode;
  hT(e, t);
  var r = Gu(e, e === at ? dt : 0);
  if (r === 0)
    n !== null && Ng(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ng(n), t === 1))
      e.tag === 0 ? pE(E0.bind(null, e)) : F1(E0.bind(null, e)),
        uE(function () {
          !(de & 6) && ao();
        }),
        (n = null);
    else {
      switch (h1(r)) {
        case 1:
          n = pm;
          break;
        case 4:
          n = d1;
          break;
        case 16:
          n = Hu;
          break;
        case 536870912:
          n = f1;
          break;
        default:
          n = Hu;
      }
      n = zS(n, RS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function RS(e, t) {
  if (((bu = -1), (Su = 0), de & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Vi() && e.callbackNode !== n) return null;
  var r = Gu(e, e === at ? dt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cc(e, r);
  else {
    t = r;
    var o = de;
    de |= 2;
    var i = $S();
    (at !== e || dt !== t) && ((or = null), (ia = Ge() + 500), jo(e, t));
    do
      try {
        ME();
        break;
      } catch (s) {
        IS(e, s);
      }
    while (1);
    Pm(),
      (sc.current = i),
      (de = o),
      Xe !== null ? (t = 0) : ((at = null), (dt = 0), (t = et));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = $p(e)), o !== 0 && ((r = o), (t = sh(e, o)))), t === 1)
    )
      throw ((n = Ds), jo(e, 0), Dr(e, r), Dt(e, Ge()), n);
    if (t === 6) Dr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !IE(o) &&
          ((t = cc(e, r)),
          t === 2 && ((i = $p(e)), i !== 0 && ((r = i), (t = sh(e, i)))),
          t === 1))
      )
        throw ((n = Ds), jo(e, 0), Dr(e, r), Dt(e, Ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          xo(e, It, or);
          break;
        case 3:
          if (
            (Dr(e, r), (r & 130023424) === r && ((t = Bm + 500 - Ge()), 10 < t))
          ) {
            if (Gu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Tt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Bp(xo.bind(null, e, It, or), t);
            break;
          }
          xo(e, It, or);
          break;
        case 4:
          if ((Dr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - En(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * RE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bp(xo.bind(null, e, It, or), r);
            break;
          }
          xo(e, It, or);
          break;
        case 5:
          xo(e, It, or);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Dt(e, Ge()), e.callbackNode === n ? RS.bind(null, e) : null;
}
function sh(e, t) {
  var n = ss;
  return (
    e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256),
    (e = cc(e, t)),
    e !== 2 && ((t = It), (It = n), t !== null && lh(t)),
    e
  );
}
function lh(e) {
  It === null ? (It = e) : It.push.apply(It, e);
}
function IE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Rn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Dr(e, t) {
  for (
    t &= ~Lm,
      t &= ~Hc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - En(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function E0(e) {
  if (de & 6) throw Error(N(327));
  Vi();
  var t = Gu(e, 0);
  if (!(t & 1)) return Dt(e, Ge()), null;
  var n = cc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $p(e);
    r !== 0 && ((t = r), (n = sh(e, r)));
  }
  if (n === 1) throw ((n = Ds), jo(e, 0), Dr(e, t), Dt(e, Ge()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xo(e, It, or),
    Dt(e, Ge()),
    null
  );
}
function Vm(e, t) {
  var n = de;
  de |= 1;
  try {
    return e(t);
  } finally {
    (de = n), de === 0 && ((ia = Ge() + 500), Bc && ao());
  }
}
function Wo(e) {
  Lr !== null && Lr.tag === 0 && !(de & 6) && Vi();
  var t = de;
  de |= 1;
  var n = pn.transition,
    r = ye;
  try {
    if (((pn.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = r), (pn.transition = n), (de = t), !(de & 6) && ao();
  }
}
function Wm() {
  (Wt = _i.current), je(_i);
}
function jo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lE(n)), Xe !== null))
    for (n = Xe.return; n !== null; ) {
      var r = n;
      switch ((Cm(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qu();
          break;
        case 3:
          ra(), je(Ot), je(bt), Im();
          break;
        case 5:
          Rm(r);
          break;
        case 4:
          ra();
          break;
        case 13:
          je(Ne);
          break;
        case 19:
          je(Ne);
          break;
        case 10:
          Tm(r.type._context);
          break;
        case 22:
        case 23:
          Wm();
      }
      n = n.return;
    }
  if (
    ((at = e),
    (Xe = e = Yr(e.current, null)),
    (dt = Wt = t),
    (et = 0),
    (Ds = null),
    (Lm = Hc = Vo = 0),
    (It = ss = null),
    _o !== null)
  ) {
    for (t = 0; t < _o.length; t++)
      if (((n = _o[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    _o = null;
  }
  return e;
}
function IS(e, t) {
  do {
    var n = Xe;
    try {
      if ((Pm(), (gu.current = ac), ic)) {
        for (var r = ze.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ic = !1;
      }
      if (
        ((Bo = 0),
        (it = Je = ze = null),
        (is = !1),
        (Ms = 0),
        (Fm.current = null),
        n === null || n.return === null)
      ) {
        (et = 1), (Ds = t), (Xe = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = dt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = m0(a);
          if (h !== null) {
            (h.flags &= -257),
              v0(h, a, s, i, t),
              h.mode & 1 && h0(i, u, t),
              (t = h),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              h0(i, u, t), Um();
              break e;
            }
            l = Error(N(426));
          }
        } else if ($e && s.mode & 1) {
          var S = m0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              v0(S, a, s, i, t),
              km(oa(l, s));
            break e;
          }
        }
        (i = l = oa(l, s)),
          et !== 4 && (et = 2),
          ss === null ? (ss = [i]) : ss.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = mS(i, l, t);
              s0(i, y);
              break e;
            case 1:
              s = l;
              var v = i.type,
                b = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (Kr === null || !Kr.has(b))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = vS(i, s, t);
                s0(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      OS(n);
    } catch (k) {
      (t = k), Xe === n && n !== null && (Xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $S() {
  var e = sc.current;
  return (sc.current = ac), e === null ? ac : e;
}
function Um() {
  (et === 0 || et === 3 || et === 2) && (et = 4),
    at === null || (!(Vo & 268435455) && !(Hc & 268435455)) || Dr(at, dt);
}
function cc(e, t) {
  var n = de;
  de |= 2;
  var r = $S();
  (at !== e || dt !== t) && ((or = null), jo(e, t));
  do
    try {
      $E();
      break;
    } catch (o) {
      IS(e, o);
    }
  while (1);
  if ((Pm(), (de = n), (sc.current = r), Xe !== null)) throw Error(N(261));
  return (at = null), (dt = 0), et;
}
function $E() {
  for (; Xe !== null; ) MS(Xe);
}
function ME() {
  for (; Xe !== null && !iT(); ) MS(Xe);
}
function MS(e) {
  var t = DS(e.alternate, e, Wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? OS(e) : (Xe = t),
    (Fm.current = null);
}
function OS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = TE(n, t)), n !== null)) {
        (n.flags &= 32767), (Xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (et = 6), (Xe = null);
        return;
      }
    } else if (((n = PE(n, t, Wt)), n !== null)) {
      Xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Xe = t;
      return;
    }
    Xe = t = e;
  } while (t !== null);
  et === 0 && (et = 5);
}
function xo(e, t, n) {
  var r = ye,
    o = pn.transition;
  try {
    (pn.transition = null), (ye = 1), OE(e, t, n, r);
  } finally {
    (pn.transition = o), (ye = r);
  }
  return null;
}
function OE(e, t, n, r) {
  do Vi();
  while (Lr !== null);
  if (de & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (mT(e, i),
    e === at && ((Xe = at = null), (dt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ul ||
      ((Ul = !0),
      zS(Hu, function () {
        return Vi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pn.transition), (pn.transition = null);
    var a = ye;
    ye = 1;
    var s = de;
    (de |= 4),
      (Fm.current = null),
      jE(e, n),
      jS(n, e),
      tE(Fp),
      (Ku = !!zp),
      (Fp = zp = null),
      (e.current = n),
      AE(n),
      aT(),
      (de = s),
      (ye = a),
      (pn.transition = i);
  } else e.current = n;
  if (
    (Ul && ((Ul = !1), (Lr = e), (uc = o)),
    (i = e.pendingLanes),
    i === 0 && (Kr = null),
    uT(n.stateNode),
    Dt(e, Ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (lc) throw ((lc = !1), (e = ih), (ih = null), e);
  return (
    uc & 1 && e.tag !== 0 && Vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === ah ? ls++ : ((ls = 0), (ah = e))) : (ls = 0),
    ao(),
    null
  );
}
function Vi() {
  if (Lr !== null) {
    var e = h1(uc),
      t = pn.transition,
      n = ye;
    try {
      if (((pn.transition = null), (ye = 16 > e ? 16 : e), Lr === null))
        var r = !1;
      else {
        if (((e = Lr), (Lr = null), (uc = 0), de & 6)) throw Error(N(331));
        var o = de;
        for (de |= 4, W = e.current; W !== null; ) {
          var i = W,
            a = i.child;
          if (W.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (W = u; W !== null; ) {
                  var c = W;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (W = d);
                  else
                    for (; W !== null; ) {
                      c = W;
                      var f = c.sibling,
                        h = c.return;
                      if ((PS(c), c === u)) {
                        W = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (W = f);
                        break;
                      }
                      W = h;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (W = a);
          else
            e: for (; W !== null; ) {
              if (((i = W), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (W = y);
                break e;
              }
              W = i.return;
            }
        }
        var v = e.current;
        for (W = v; W !== null; ) {
          a = W;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (W = b);
          else
            e: for (a = v; W !== null; ) {
              if (((s = W), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uc(9, s);
                  }
                } catch (k) {
                  Be(s, s.return, k);
                }
              if (s === a) {
                W = null;
                break e;
              }
              var C = s.sibling;
              if (C !== null) {
                (C.return = s.return), (W = C);
                break e;
              }
              W = s.return;
            }
        }
        if (
          ((de = o), ao(), Kn && typeof Kn.onPostCommitFiberRoot == "function")
        )
          try {
            Kn.onPostCommitFiberRoot(Nc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ye = n), (pn.transition = t);
    }
  }
  return !1;
}
function j0(e, t, n) {
  (t = oa(n, t)),
    (t = mS(e, t, 1)),
    (e = Gr(e, t, 1)),
    (t = Tt()),
    e !== null && (rl(e, 1, t), Dt(e, t));
}
function Be(e, t, n) {
  if (e.tag === 3) j0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        j0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kr === null || !Kr.has(r)))
        ) {
          (e = oa(n, e)),
            (e = vS(t, e, 1)),
            (t = Gr(t, e, 1)),
            (e = Tt()),
            t !== null && (rl(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function NE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    at === e &&
      (dt & n) === n &&
      (et === 4 || (et === 3 && (dt & 130023424) === dt && 500 > Ge() - Bm)
        ? jo(e, 0)
        : (Lm |= n)),
    Dt(e, t);
}
function NS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ml), (Ml <<= 1), !(Ml & 130023424) && (Ml = 4194304))
      : (t = 1));
  var n = Tt();
  (e = br(e, t)), e !== null && (rl(e, t, n), Dt(e, n));
}
function DE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), NS(e, n);
}
function zE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), NS(e, n);
}
var DS;
DS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ot.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Mt = !1), _E(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else (Mt = !1), $e && t.flags & 1048576 && L1(t, ec, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xu(e, t), (e = t.pendingProps);
      var o = ea(t, bt.current);
      Bi(t, n), (o = Mm(null, t, r, e, o, n));
      var i = Om();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Nt(r) ? ((i = !0), Zu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            jm(t),
            (o.updater = Vc),
            (t.stateNode = o),
            (o._reactInternals = t),
            qp(t, r, e, n),
            (t = Qp(null, t, r, !0, i, n)))
          : ((t.tag = 0), $e && i && wm(t), kt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xu(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = LE(r)),
          (e = Cn(r, e)),
          o)
        ) {
          case 0:
            t = Xp(null, t, r, e, n);
            break e;
          case 1:
            t = x0(null, t, r, e, n);
            break e;
          case 11:
            t = g0(null, t, r, e, n);
            break e;
          case 14:
            t = y0(null, t, r, Cn(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Cn(r, o)),
        Xp(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Cn(r, o)),
        x0(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bS(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          U1(e, t),
          rc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = oa(Error(N(423)), t)), (t = b0(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = oa(Error(N(424)), t)), (t = b0(e, t, r, n, o));
            break e;
          } else
            for (
              Ht = Hr(t.stateNode.containerInfo.firstChild),
                Gt = t,
                $e = !0,
                _n = null,
                n = q1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ta(), r === o)) {
            t = Sr(e, t, n);
            break e;
          }
          kt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Y1(t),
        e === null && Hp(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Lp(r, o) ? (a = null) : i !== null && Lp(r, i) && (t.flags |= 32),
        xS(e, t),
        kt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Hp(t), null;
    case 13:
      return SS(e, t, n);
    case 4:
      return (
        Am(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = na(t, null, r, n)) : kt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Cn(r, o)),
        g0(e, t, r, o, n)
      );
    case 7:
      return kt(e, t, t.pendingProps, n), t.child;
    case 8:
      return kt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return kt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ke(tc, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Rn(i.value, a)) {
            if (i.children === o.children && !Ot.current) {
              t = Sr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = pr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Gp(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(N(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Gp(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        kt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Bi(t, n),
        (o = mn(o)),
        (r = r(o)),
        (t.flags |= 1),
        kt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Cn(r, t.pendingProps)),
        (o = Cn(r.type, o)),
        y0(e, t, r, o, n)
      );
    case 15:
      return gS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Cn(r, o)),
        xu(e, t),
        (t.tag = 1),
        Nt(r) ? ((e = !0), Zu(t)) : (e = !1),
        Bi(t, n),
        G1(t, r, o),
        qp(t, r, o, n),
        Qp(null, t, r, !0, e, n)
      );
    case 19:
      return wS(e, t, n);
    case 22:
      return yS(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function zS(e, t) {
  return c1(e, t);
}
function FE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function fn(e, t, n, r) {
  return new FE(e, t, n, r);
}
function Hm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function LE(e) {
  if (typeof e == "function") return Hm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === cm)) return 11;
    if (e === dm) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = fn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function wu(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Hm(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case mi:
        return Ao(n.children, o, i, t);
      case um:
        (a = 8), (o |= 8);
        break;
      case yp:
        return (
          (e = fn(12, n, t, o | 2)), (e.elementType = yp), (e.lanes = i), e
        );
      case xp:
        return (e = fn(13, n, t, o)), (e.elementType = xp), (e.lanes = i), e;
      case bp:
        return (e = fn(19, n, t, o)), (e.elementType = bp), (e.lanes = i), e;
      case Kb:
        return Gc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hb:
              a = 10;
              break e;
            case Gb:
              a = 9;
              break e;
            case cm:
              a = 11;
              break e;
            case dm:
              a = 14;
              break e;
            case $r:
              (a = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = fn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ao(e, t, n, r) {
  return (e = fn(7, e, r, t)), (e.lanes = n), e;
}
function Gc(e, t, n, r) {
  return (
    (e = fn(22, e, r, t)),
    (e.elementType = Kb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cf(e, t, n) {
  return (e = fn(6, e, null, t)), (e.lanes = n), e;
}
function kf(e, t, n) {
  return (
    (t = fn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function BE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = rf(0)),
    (this.expirationTimes = rf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gm(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new BE(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = fn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jm(i),
    e
  );
}
function VE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function FS(e) {
  if (!e) return eo;
  e = e._reactInternals;
  e: {
    if (Yo(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Nt(n)) return z1(e, n, t);
  }
  return t;
}
function LS(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Gm(n, r, !0, e, o, i, a, s, l)),
    (e.context = FS(null)),
    (n = e.current),
    (r = Tt()),
    (o = qr(n)),
    (i = pr(r, o)),
    (i.callback = t ?? null),
    Gr(n, i, o),
    (e.current.lanes = o),
    rl(e, o, r),
    Dt(e, r),
    e
  );
}
function Kc(e, t, n, r) {
  var o = t.current,
    i = Tt(),
    a = qr(o);
  return (
    (n = FS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gr(o, t, a)),
    e !== null && (jn(e, o, a, i), vu(e, o, a)),
    a
  );
}
function dc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function A0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Km(e, t) {
  A0(e, t), (e = e.alternate) && A0(e, t);
}
function WE() {
  return null;
}
var BS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qm(e) {
  this._internalRoot = e;
}
qc.prototype.render = qm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Kc(e, t, null, null);
};
qc.prototype.unmount = qm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wo(function () {
      Kc(null, e, null, null);
    }),
      (t[xr] = null);
  }
};
function qc(e) {
  this._internalRoot = e;
}
qc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = g1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nr.length && t !== 0 && t < Nr[n].priority; n++);
    Nr.splice(n, 0, e), n === 0 && x1(e);
  }
};
function Ym(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function R0() {}
function UE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = dc(a);
        i.call(u);
      };
    }
    var a = LS(t, r, e, 0, null, !1, !1, "", R0);
    return (
      (e._reactRootContainer = a),
      (e[xr] = a.current),
      js(e.nodeType === 8 ? e.parentNode : e),
      Wo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = dc(l);
      s.call(u);
    };
  }
  var l = Gm(e, 0, !1, null, null, !1, !1, "", R0);
  return (
    (e._reactRootContainer = l),
    (e[xr] = l.current),
    js(e.nodeType === 8 ? e.parentNode : e),
    Wo(function () {
      Kc(t, l, n, r);
    }),
    l
  );
}
function Xc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = dc(a);
        s.call(l);
      };
    }
    Kc(t, a, e, o);
  } else a = UE(n, t, e, o, r);
  return dc(a);
}
m1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ga(t.pendingLanes);
        n !== 0 &&
          (hm(t, n | 1), Dt(t, Ge()), !(de & 6) && ((ia = Ge() + 500), ao()));
      }
      break;
    case 13:
      Wo(function () {
        var r = br(e, 1);
        if (r !== null) {
          var o = Tt();
          jn(r, e, 1, o);
        }
      }),
        Km(e, 1);
  }
};
mm = function (e) {
  if (e.tag === 13) {
    var t = br(e, 134217728);
    if (t !== null) {
      var n = Tt();
      jn(t, e, 134217728, n);
    }
    Km(e, 134217728);
  }
};
v1 = function (e) {
  if (e.tag === 13) {
    var t = qr(e),
      n = br(e, t);
    if (n !== null) {
      var r = Tt();
      jn(n, e, t, r);
    }
    Km(e, t);
  }
};
g1 = function () {
  return ye;
};
y1 = function (e, t) {
  var n = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = n;
  }
};
Ap = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cp(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Lc(r);
            if (!o) throw Error(N(90));
            Yb(r), Cp(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qb(e, n);
      break;
    case "select":
      (t = n.value), t != null && Di(e, !!n.multiple, t, !1);
  }
};
o1 = Vm;
i1 = Wo;
var HE = { usingClientEntryPoint: !1, Events: [il, xi, Lc, n1, r1, Vm] },
  Na = {
    findFiberByHostInstance: ko,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  GE = {
    bundleType: Na.bundleType,
    version: Na.version,
    rendererPackageName: Na.rendererPackageName,
    rendererConfig: Na.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _r.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = l1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Na.findFiberByHostInstance || WE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hl.isDisabled && Hl.supportsFiber)
    try {
      (Nc = Hl.inject(GE)), (Kn = Hl);
    } catch {}
}
Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HE;
Zt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ym(t)) throw Error(N(200));
  return VE(e, t, null, n);
};
Zt.createRoot = function (e, t) {
  if (!Ym(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = BS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gm(e, 1, !1, null, null, n, !1, r, o)),
    (e[xr] = t.current),
    js(e.nodeType === 8 ? e.parentNode : e),
    new qm(t)
  );
};
Zt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = l1(t)), (e = e === null ? null : e.stateNode), e;
};
Zt.flushSync = function (e) {
  return Wo(e);
};
Zt.hydrate = function (e, t, n) {
  if (!Yc(t)) throw Error(N(200));
  return Xc(null, e, t, !0, n);
};
Zt.hydrateRoot = function (e, t, n) {
  if (!Ym(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = BS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = LS(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[xr] = t.current),
    js(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qc(t);
};
Zt.render = function (e, t, n) {
  if (!Yc(t)) throw Error(N(200));
  return Xc(null, e, t, !1, n);
};
Zt.unmountComponentAtNode = function (e) {
  if (!Yc(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Wo(function () {
        Xc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xr] = null);
        });
      }),
      !0)
    : !1;
};
Zt.unstable_batchedUpdates = Vm;
Zt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yc(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Xc(e, t, n, !1, r);
};
Zt.version = "18.2.0-next-9e3b772b8-20220608";
function VS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VS);
    } catch (e) {
      console.error(e);
    }
}
VS(), (Lb.exports = Zt);
var Xm = Lb.exports,
  I0 = Xm;
(vp.createRoot = I0.createRoot), (vp.hydrateRoot = I0.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zs() {
  return (
    (zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zs.apply(this, arguments)
  );
}
var Br;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Br || (Br = {}));
const $0 = "popstate";
function KE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return uh(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : WS(o);
  }
  return YE(t, n, null, e);
}
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Qm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qE() {
  return Math.random().toString(36).substr(2, 8);
}
function M0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uh(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    zs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sa(t) : t,
      { state: n, key: (t && t.key) || r || qE() }
    )
  );
}
function WS(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sa(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function YE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Br.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(zs({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = Br.Pop;
    let S = c(),
      y = S == null ? null : S - u;
    (u = S), l && l({ action: s, location: g.location, delta: y });
  }
  function f(S, y) {
    s = Br.Push;
    let v = uh(g.location, S, y);
    n && n(v, S), (u = c() + 1);
    let b = M0(v, u),
      C = g.createHref(v);
    try {
      a.pushState(b, "", C);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(C);
    }
    i && l && l({ action: s, location: g.location, delta: 1 });
  }
  function h(S, y) {
    s = Br.Replace;
    let v = uh(g.location, S, y);
    n && n(v, S), (u = c());
    let b = M0(v, u),
      C = g.createHref(v);
    a.replaceState(b, "", C),
      i && l && l({ action: s, location: g.location, delta: 0 });
  }
  function x(S) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof S == "string" ? S : WS(S);
    return (
      tt(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, y)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener($0, d),
        (l = S),
        () => {
          o.removeEventListener($0, d), (l = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: x,
    encodeLocation(S) {
      let y = x(S);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: h,
    go(S) {
      return a.go(S);
    },
  };
  return g;
}
var O0;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(O0 || (O0 = {}));
function XE(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Sa(t) : t,
    o = GS(r.pathname || "/", n);
  if (o == null) return null;
  let i = US(e);
  QE(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = aj(i[s], uj(o));
  return a;
}
function US(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (tt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Ro([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (tt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      US(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: oj(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of HS(i.path)) o(i, a, l);
    }),
    t
  );
}
function HS(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = HS(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function QE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ij(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ZE = /^:\w+$/,
  JE = 3,
  ej = 2,
  tj = 1,
  nj = 10,
  rj = -2,
  N0 = (e) => e === "*";
function oj(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(N0) && (r += rj),
    t && (r += ej),
    n
      .filter((o) => !N0(o))
      .reduce((o, i) => o + (ZE.test(i) ? JE : i === "" ? tj : nj), r)
  );
}
function ij(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function aj(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = sj(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Ro([o, c.pathname]),
      pathnameBase: mj(Ro([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Ro([o, c.pathnameBase]));
  }
  return i;
}
function sj(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = lj(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = s[d] || "";
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = cj(s[d] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function lj(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function uj(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Qm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cj(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Qm(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function GS(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function dj(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Sa(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fj(n, t)) : t,
    search: vj(r),
    hash: gj(o),
  };
}
function fj(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _f(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function pj(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function hj(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Sa(e))
    : ((o = zs({}, e)),
      tt(
        !o.pathname || !o.pathname.includes("?"),
        _f("?", "pathname", "search", o)
      ),
      tt(
        !o.pathname || !o.pathname.includes("#"),
        _f("#", "pathname", "hash", o)
      ),
      tt(!o.search || !o.search.includes("#"), _f("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = dj(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Ro = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  gj = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function yj(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const KS = ["post", "put", "patch", "delete"];
new Set(KS);
const xj = ["get", ...KS];
new Set(xj);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fc() {
  return (
    (fc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fc.apply(this, arguments)
  );
}
const Zm = m.createContext(null),
  bj = m.createContext(null),
  Qc = m.createContext(null),
  Zc = m.createContext(null),
  wa = m.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qS = m.createContext(null);
function Jc() {
  return m.useContext(Zc) != null;
}
function sl() {
  return Jc() || tt(!1), m.useContext(Zc).location;
}
function YS(e) {
  m.useContext(Qc).static || m.useLayoutEffect(e);
}
function ed() {
  let { isDataRoute: e } = m.useContext(wa);
  return e ? $j() : Sj();
}
function Sj() {
  Jc() || tt(!1);
  let e = m.useContext(Zm),
    { basename: t, navigator: n } = m.useContext(Qc),
    { matches: r } = m.useContext(wa),
    { pathname: o } = sl(),
    i = JSON.stringify(pj(r).map((l) => l.pathnameBase)),
    a = m.useRef(!1);
  return (
    YS(() => {
      a.current = !0;
    }),
    m.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = hj(l, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Ro([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
function wj(e, t) {
  return Cj(e, t);
}
function Cj(e, t, n) {
  Jc() || tt(!1);
  let { navigator: r } = m.useContext(Qc),
    { matches: o } = m.useContext(wa),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let l = sl(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? Sa(t) : t;
    s === "/" || ((c = g.pathname) != null && c.startsWith(s)) || tt(!1),
      (u = g);
  } else u = l;
  let d = u.pathname || "/",
    f = s === "/" ? d : d.slice(s.length) || "/",
    h = XE(e, { pathname: f }),
    x = Ej(
      h &&
        h.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, a, g.params),
            pathname: Ro([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : Ro([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && x
    ? m.createElement(
        Zc.Provider,
        {
          value: {
            location: fc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Br.Pop,
          },
        },
        x
      )
    : x;
}
function kj() {
  let e = Ij(),
    t = yj(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return m.createElement(
    m.Fragment,
    null,
    m.createElement("h2", null, "Unexpected Application Error!"),
    m.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? m.createElement("pre", { style: o }, n) : null,
    i
  );
}
const _j = m.createElement(kj, null);
class Pj extends m.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? m.createElement(
          wa.Provider,
          { value: this.props.routeContext },
          m.createElement(qS.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Tj(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = m.useContext(Zm);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(wa.Provider, { value: t }, r)
  );
}
function Ej(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let s = i.findIndex(
      (l) => l.route.id && (a == null ? void 0 : a[l.route.id])
    );
    s >= 0 || tt(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, l, u) => {
    let c = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || _j);
    let f = t.concat(i.slice(0, u + 1)),
      h = () => {
        let x;
        return (
          c
            ? (x = d)
            : l.route.Component
            ? (x = m.createElement(l.route.Component, null))
            : l.route.element
            ? (x = l.route.element)
            : (x = s),
          m.createElement(Tj, {
            match: l,
            routeContext: { outlet: s, matches: f, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? m.createElement(Pj, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: h(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var ch;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(ch || (ch = {}));
var Fs;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Fs || (Fs = {}));
function jj(e) {
  let t = m.useContext(Zm);
  return t || tt(!1), t;
}
function Aj(e) {
  let t = m.useContext(bj);
  return t || tt(!1), t;
}
function Rj(e) {
  let t = m.useContext(wa);
  return t || tt(!1), t;
}
function XS(e) {
  let t = Rj(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || tt(!1), n.route.id;
}
function Ij() {
  var e;
  let t = m.useContext(qS),
    n = Aj(Fs.UseRouteError),
    r = XS(Fs.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function $j() {
  let { router: e } = jj(ch.UseNavigateStable),
    t = XS(Fs.UseNavigateStable),
    n = m.useRef(!1);
  return (
    YS(() => {
      n.current = !0;
    }),
    m.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, fc({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Cu(e) {
  tt(!1);
}
function Mj(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Br.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Jc() && tt(!1);
  let s = t.replace(/^\/*/, "/"),
    l = m.useMemo(() => ({ basename: s, navigator: i, static: a }), [s, i, a]);
  typeof r == "string" && (r = Sa(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: h = "default",
    } = r,
    x = m.useMemo(() => {
      let g = GS(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: f, key: h },
            navigationType: o,
          };
    }, [s, u, c, d, f, h, o]);
  return x == null
    ? null
    : m.createElement(
        Qc.Provider,
        { value: l },
        m.createElement(Zc.Provider, { children: n, value: x })
      );
}
function Oj(e) {
  let { children: t, location: n } = e;
  return wj(dh(t), n);
}
var D0;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(D0 || (D0 = {}));
new Promise(() => {});
function dh(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    m.Children.forEach(e, (r, o) => {
      if (!m.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === m.Fragment) {
        n.push.apply(n, dh(r.props.children, i));
        return;
      }
      r.type !== Cu && tt(!1), !r.props.index || !r.props.children || tt(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = dh(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Nj = "startTransition",
  z0 = mp[Nj];
function Dj(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = m.useRef();
  i.current == null && (i.current = KE({ window: o, v5Compat: !0 }));
  let a = i.current,
    [s, l] = m.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = m.useCallback(
      (d) => {
        u && z0 ? z0(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    m.useLayoutEffect(() => a.listen(c), [a, c]),
    m.createElement(Mj, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
    })
  );
}
var F0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(F0 || (F0 = {}));
var L0;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(L0 || (L0 = {}));
function zj(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Fj(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Lj = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Fj(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = zj(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  vt = "-ms-",
  pc = "-moz-",
  he = "-webkit-",
  QS = "comm",
  Jm = "rule",
  ev = "decl",
  Bj = "@import",
  ZS = "@keyframes",
  Vj = "@layer",
  Wj = Math.abs,
  td = String.fromCharCode,
  Uj = Object.assign;
function Hj(e, t) {
  return ct(e, 0) ^ 45
    ? (((((((t << 2) ^ ct(e, 0)) << 2) ^ ct(e, 1)) << 2) ^ ct(e, 2)) << 2) ^
        ct(e, 3)
    : 0;
}
function JS(e) {
  return e.trim();
}
function Gj(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, n) {
  return e.replace(t, n);
}
function fh(e, t) {
  return e.indexOf(t);
}
function ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ls(e, t, n) {
  return e.slice(t, n);
}
function Ln(e) {
  return e.length;
}
function tv(e) {
  return e.length;
}
function Gl(e, t) {
  return t.push(e), e;
}
function Kj(e, t) {
  return e.map(t).join("");
}
var nd = 1,
  aa = 1,
  ew = 0,
  Lt = 0,
  Ye = 0,
  Ca = "";
function rd(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: nd,
    column: aa,
    length: a,
    return: "",
  };
}
function Da(e, t) {
  return Uj(rd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qj() {
  return Ye;
}
function Yj() {
  return (
    (Ye = Lt > 0 ? ct(Ca, --Lt) : 0), aa--, Ye === 10 && ((aa = 1), nd--), Ye
  );
}
function Kt() {
  return (
    (Ye = Lt < ew ? ct(Ca, Lt++) : 0), aa++, Ye === 10 && ((aa = 1), nd++), Ye
  );
}
function Yn() {
  return ct(Ca, Lt);
}
function ku() {
  return Lt;
}
function ll(e, t) {
  return Ls(Ca, e, t);
}
function Bs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function tw(e) {
  return (nd = aa = 1), (ew = Ln((Ca = e))), (Lt = 0), [];
}
function nw(e) {
  return (Ca = ""), e;
}
function _u(e) {
  return JS(ll(Lt - 1, ph(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xj(e) {
  for (; (Ye = Yn()) && Ye < 33; ) Kt();
  return Bs(e) > 2 || Bs(Ye) > 3 ? "" : " ";
}
function Qj(e, t) {
  for (
    ;
    --t &&
    Kt() &&
    !(Ye < 48 || Ye > 102 || (Ye > 57 && Ye < 65) || (Ye > 70 && Ye < 97));

  );
  return ll(e, ku() + (t < 6 && Yn() == 32 && Kt() == 32));
}
function ph(e) {
  for (; Kt(); )
    switch (Ye) {
      case e:
        return Lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ph(Ye);
        break;
      case 40:
        e === 41 && ph(e);
        break;
      case 92:
        Kt();
        break;
    }
  return Lt;
}
function Zj(e, t) {
  for (; Kt() && e + Ye !== 47 + 10; )
    if (e + Ye === 42 + 42 && Yn() === 47) break;
  return "/*" + ll(t, Lt - 1) + "*" + td(e === 47 ? e : Kt());
}
function Jj(e) {
  for (; !Bs(Yn()); ) Kt();
  return ll(e, Lt);
}
function e5(e) {
  return nw(Pu("", null, null, null, [""], (e = tw(e)), 0, [0], e));
}
function Pu(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      x = 0,
      g = 1,
      S = 1,
      y = 1,
      v = 0,
      b = "",
      C = o,
      k = i,
      T = r,
      _ = b;
    S;

  )
    switch (((x = v), (v = Kt()))) {
      case 40:
        if (x != 108 && ct(_, d - 1) == 58) {
          fh((_ += me(_u(v), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += _u(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Xj(x);
        break;
      case 92:
        _ += Qj(ku() - 1, 7);
        continue;
      case 47:
        switch (Yn()) {
          case 42:
          case 47:
            Gl(t5(Zj(Kt(), ku()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = Ln(_) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            y == -1 && (_ = me(_, /\f/g, "")),
              h > 0 &&
                Ln(_) - d &&
                Gl(
                  h > 32
                    ? V0(_ + ";", r, n, d - 1)
                    : V0(me(_, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (Gl((T = B0(_, t, n, u, c, o, s, b, (C = []), (k = []), d)), i),
              v === 123)
            )
              if (c === 0) Pu(_, t, T, T, C, i, d, s, k);
              else
                switch (f === 99 && ct(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pu(
                      e,
                      T,
                      T,
                      r && Gl(B0(e, T, T, 0, 0, o, s, b, o, (C = []), d), k),
                      o,
                      k,
                      d,
                      s,
                      r ? C : k
                    );
                    break;
                  default:
                    Pu(_, T, T, T, [""], k, 0, s, k);
                }
        }
        (u = c = h = 0), (g = y = 1), (b = _ = ""), (d = a);
        break;
      case 58:
        (d = 1 + Ln(_)), (h = x);
      default:
        if (g < 1) {
          if (v == 123) --g;
          else if (v == 125 && g++ == 0 && Yj() == 125) continue;
        }
        switch (((_ += td(v)), v * g)) {
          case 38:
            y = c > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Ln(_) - 1) * y), (y = 1);
            break;
          case 64:
            Yn() === 45 && (_ += _u(Kt())),
              (f = Yn()),
              (c = d = Ln((b = _ += Jj(ku())))),
              v++;
            break;
          case 45:
            x === 45 && Ln(_) == 2 && (g = 0);
        }
    }
  return i;
}
function B0(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = tv(f), x = 0, g = 0, S = 0;
    x < r;
    ++x
  )
    for (var y = 0, v = Ls(e, d + 1, (d = Wj((g = a[x])))), b = e; y < h; ++y)
      (b = JS(g > 0 ? f[y] + " " + v : me(v, /&\f/g, f[y]))) && (l[S++] = b);
  return rd(e, t, n, o === 0 ? Jm : s, l, u, c);
}
function t5(e, t, n) {
  return rd(e, t, n, QS, td(qj()), Ls(e, 2, -2), 0);
}
function V0(e, t, n, r) {
  return rd(e, t, n, ev, Ls(e, 0, r), Ls(e, r + 1, -1), r);
}
function Wi(e, t) {
  for (var n = "", r = tv(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function n5(e, t, n, r) {
  switch (e.type) {
    case Vj:
      if (e.children.length) break;
    case Bj:
    case ev:
      return (e.return = e.return || e.value);
    case QS:
      return "";
    case ZS:
      return (e.return = e.value + "{" + Wi(e.children, r) + "}");
    case Jm:
      e.value = e.props.join(",");
  }
  return Ln((n = Wi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function r5(e) {
  var t = tv(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function o5(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var W0 = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function rw(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var i5 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Yn()), o === 38 && i === 12 && (n[r] = 1), !Bs(i);

    )
      Kt();
    return ll(t, Lt);
  },
  a5 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Bs(o)) {
        case 0:
          o === 38 && Yn() === 12 && (n[r] = 1), (t[r] += i5(Lt - 1, n, r));
          break;
        case 2:
          t[r] += _u(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Yn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += td(o);
      }
    while ((o = Kt()));
    return t;
  },
  s5 = function (t, n) {
    return nw(a5(tw(t), n));
  },
  U0 = new WeakMap(),
  l5 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !U0.get(r)) &&
        !o
      ) {
        U0.set(t, !0);
        for (
          var i = [], a = s5(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  u5 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function ow(e, t) {
  switch (Hj(e, t)) {
    case 5103:
      return he + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + pc + e + vt + e + e;
    case 6828:
    case 4268:
      return he + e + vt + e + e;
    case 6165:
      return he + e + vt + "flex-" + e + e;
    case 5187:
      return (
        he + e + me(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + vt + "flex-$1$2") + e
      );
    case 5443:
      return he + e + vt + "flex-item-" + me(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        he +
        e +
        vt +
        "flex-line-pack" +
        me(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return he + e + vt + me(e, "shrink", "negative") + e;
    case 5292:
      return he + e + vt + me(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        he +
        "box-" +
        me(e, "-grow", "") +
        he +
        e +
        vt +
        me(e, "grow", "positive") +
        e
      );
    case 4554:
      return he + me(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return (
        me(
          me(me(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return (
        me(
          me(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + vt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        he +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, he + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ln(e) - 1 - t > 6)
        switch (ct(e, t + 1)) {
          case 109:
            if (ct(e, t + 4) !== 45) break;
          case 102:
            return (
              me(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  he +
                  "$2-$3$1" +
                  pc +
                  (ct(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fh(e, "stretch")
              ? ow(me(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ct(e, t + 1) !== 115) break;
    case 6444:
      switch (ct(e, Ln(e) - 3 - (~fh(e, "!important") && 10))) {
        case 107:
          return me(e, ":", ":" + he) + e;
        case 101:
          return (
            me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                he +
                (ct(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                he +
                "$2$3$1" +
                vt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ct(e, t + 11)) {
        case 114:
          return he + e + vt + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + vt + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + vt + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + vt + e + e;
  }
  return e;
}
var c5 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ev:
          t.return = ow(t.value, t.length);
          break;
        case ZS:
          return Wi([Da(t, { value: me(t.value, "@", "@" + he) })], o);
        case Jm:
          if (t.length)
            return Kj(t.props, function (i) {
              switch (Gj(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wi(
                    [Da(t, { props: [me(i, /:(read-\w+)/, ":" + pc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Wi(
                    [
                      Da(t, {
                        props: [me(i, /:(plac\w+)/, ":" + he + "input-$1")],
                      }),
                      Da(t, { props: [me(i, /:(plac\w+)/, ":" + pc + "$1")] }),
                      Da(t, { props: [me(i, /:(plac\w+)/, vt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  d5 = [c5],
  f5 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || d5,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), y = 1;
            y < S.length;
            y++
          )
            i[S[y]] = !0;
          s.push(g);
        }
      );
    var l,
      u = [l5, u5];
    {
      var c,
        d = [
          n5,
          o5(function (g) {
            c.insert(g);
          }),
        ],
        f = r5(u.concat(o, d)),
        h = function (S) {
          return Wi(e5(S), f);
        };
      l = function (S, y, v, b) {
        (c = v),
          h(S ? S + "{" + y.styles + "}" : y.styles),
          b && (x.inserted[y.name] = !0);
      };
    }
    var x = {
      key: n,
      sheet: new Lj({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return x.sheet.hydrate(s), x;
  };
function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
var iw = { exports: {} },
  xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var st = typeof Symbol == "function" && Symbol.for,
  nv = st ? Symbol.for("react.element") : 60103,
  rv = st ? Symbol.for("react.portal") : 60106,
  od = st ? Symbol.for("react.fragment") : 60107,
  id = st ? Symbol.for("react.strict_mode") : 60108,
  ad = st ? Symbol.for("react.profiler") : 60114,
  sd = st ? Symbol.for("react.provider") : 60109,
  ld = st ? Symbol.for("react.context") : 60110,
  ov = st ? Symbol.for("react.async_mode") : 60111,
  ud = st ? Symbol.for("react.concurrent_mode") : 60111,
  cd = st ? Symbol.for("react.forward_ref") : 60112,
  dd = st ? Symbol.for("react.suspense") : 60113,
  p5 = st ? Symbol.for("react.suspense_list") : 60120,
  fd = st ? Symbol.for("react.memo") : 60115,
  pd = st ? Symbol.for("react.lazy") : 60116,
  h5 = st ? Symbol.for("react.block") : 60121,
  m5 = st ? Symbol.for("react.fundamental") : 60117,
  v5 = st ? Symbol.for("react.responder") : 60118,
  g5 = st ? Symbol.for("react.scope") : 60119;
function en(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nv:
        switch (((e = e.type), e)) {
          case ov:
          case ud:
          case od:
          case ad:
          case id:
          case dd:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ld:
              case cd:
              case pd:
              case fd:
              case sd:
                return e;
              default:
                return t;
            }
        }
      case rv:
        return t;
    }
  }
}
function aw(e) {
  return en(e) === ud;
}
xe.AsyncMode = ov;
xe.ConcurrentMode = ud;
xe.ContextConsumer = ld;
xe.ContextProvider = sd;
xe.Element = nv;
xe.ForwardRef = cd;
xe.Fragment = od;
xe.Lazy = pd;
xe.Memo = fd;
xe.Portal = rv;
xe.Profiler = ad;
xe.StrictMode = id;
xe.Suspense = dd;
xe.isAsyncMode = function (e) {
  return aw(e) || en(e) === ov;
};
xe.isConcurrentMode = aw;
xe.isContextConsumer = function (e) {
  return en(e) === ld;
};
xe.isContextProvider = function (e) {
  return en(e) === sd;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === nv;
};
xe.isForwardRef = function (e) {
  return en(e) === cd;
};
xe.isFragment = function (e) {
  return en(e) === od;
};
xe.isLazy = function (e) {
  return en(e) === pd;
};
xe.isMemo = function (e) {
  return en(e) === fd;
};
xe.isPortal = function (e) {
  return en(e) === rv;
};
xe.isProfiler = function (e) {
  return en(e) === ad;
};
xe.isStrictMode = function (e) {
  return en(e) === id;
};
xe.isSuspense = function (e) {
  return en(e) === dd;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === od ||
    e === ud ||
    e === ad ||
    e === id ||
    e === dd ||
    e === p5 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === pd ||
        e.$$typeof === fd ||
        e.$$typeof === sd ||
        e.$$typeof === ld ||
        e.$$typeof === cd ||
        e.$$typeof === m5 ||
        e.$$typeof === v5 ||
        e.$$typeof === g5 ||
        e.$$typeof === h5))
  );
};
xe.typeOf = en;
iw.exports = xe;
var y5 = iw.exports,
  sw = y5,
  x5 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  b5 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  lw = {};
lw[sw.ForwardRef] = x5;
lw[sw.Memo] = b5;
var S5 = !0;
function w5(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var uw = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || S5 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  cw = function (t, n, r) {
    uw(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function C5(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var k5 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  _5 = /[A-Z]|^ms/g,
  P5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  dw = function (t) {
    return t.charCodeAt(1) === 45;
  },
  H0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Pf = rw(function (e) {
    return dw(e) ? e : e.replace(_5, "-$&").toLowerCase();
  }),
  G0 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(P5, function (r, o, i) {
            return (Bn = { name: o, styles: i, next: Bn }), o;
          });
    }
    return k5[t] !== 1 && !dw(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Vs(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Bn = { name: n.name, styles: n.styles, next: Bn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Bn = { name: r.name, styles: r.styles, next: Bn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return T5(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Bn,
          a = n(e);
        return (Bn = i), Vs(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function T5(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Vs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : H0(a) && (r += Pf(i) + ":" + G0(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          H0(a[s]) && (r += Pf(i) + ":" + G0(i, a[s]) + ";");
      else {
        var l = Vs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Pf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var K0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Bn,
  iv = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Bn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Vs(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += Vs(r, n, t[s])), o && (i += a[s]);
    K0.lastIndex = 0;
    for (var l = "", u; (u = K0.exec(i)) !== null; ) l += "-" + u[1];
    var c = C5(i) + l;
    return { name: c, styles: i, next: Bn };
  },
  E5 = function (t) {
    return t();
  },
  fw = mp["useInsertionEffect"] ? mp["useInsertionEffect"] : !1,
  j5 = fw || E5,
  q0 = fw || m.useLayoutEffect,
  pw = m.createContext(typeof HTMLElement < "u" ? f5({ key: "css" }) : null);
pw.Provider;
var hw = function (t) {
    return m.forwardRef(function (n, r) {
      var o = m.useContext(pw);
      return t(n, o, r);
    });
  },
  Ws = m.createContext({}),
  A5 = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return Uo({}, t, n);
  },
  R5 = W0(function (e) {
    return W0(function (t) {
      return A5(e, t);
    });
  }),
  I5 = function (t) {
    var n = m.useContext(Ws);
    return (
      t.theme !== n && (n = R5(n)(t.theme)),
      m.createElement(Ws.Provider, { value: n }, t.children)
    );
  },
  hd = hw(function (e, t) {
    var n = e.styles,
      r = iv([n], void 0, m.useContext(Ws)),
      o = m.useRef();
    return (
      q0(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      q0(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && cw(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function $5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return iv(t);
}
var M5 = function () {
    var t = $5.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  mw = String.raw,
  vw = mw`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  O5 = () => p.jsx(hd, { styles: vw }),
  N5 = ({ scope: e = "" }) =>
    p.jsx(hd, {
      styles: mw`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${vw}
    `,
    });
function D5(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ue(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = m.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = m.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? D5(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [z5, F5] = Ue({ strict: !1, name: "PortalManagerContext" });
function gw(e) {
  const { children: t, zIndex: n } = e;
  return p.jsx(z5, { value: { zIndex: n }, children: t });
}
gw.displayName = "PortalManager";
var sa =
    globalThis != null && globalThis.document ? m.useLayoutEffect : m.useEffect,
  [yw, L5] = Ue({ strict: !1, name: "PortalContext" }),
  av = "chakra-portal",
  B5 = ".chakra-portal",
  V5 = (e) =>
    p.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  W5 = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = m.useState(null),
      i = m.useRef(null),
      [, a] = m.useState({});
    m.useEffect(() => a({}), []);
    const s = L5(),
      l = F5();
    sa(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = av),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? p.jsx(V5, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? Xm.createPortal(p.jsx(yw, { value: i.current, children: u }), i.current)
      : p.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  U5 = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = m.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = av), l;
      }, [o]),
      [, s] = m.useState({});
    return (
      sa(() => s({}), []),
      sa(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? Xm.createPortal(p.jsx(yw, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function ul(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? p.jsx(U5, { containerRef: n, ...r }) : p.jsx(W5, { ...r });
}
ul.className = av;
ul.selector = B5;
ul.displayName = "Portal";
function xw() {
  const e = m.useContext(Ws);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var sv = m.createContext({});
sv.displayName = "ColorModeContext";
function lv() {
  const e = m.useContext(sv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Kl = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function H5(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const o = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          o == null || o();
      },
      setClassName(r) {
        document.body.classList.add(r ? Kl.dark : Kl.light),
          document.body.classList.remove(r ? Kl.light : Kl.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(r) {
        var o;
        return ((o = n.query().matches) != null ? o : r === "dark")
          ? "dark"
          : "light";
      },
      addListener(r) {
        const o = n.query(),
          i = (a) => {
            r(a.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const r = document.createElement("style");
        return (
          r.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var G5 = "chakra-ui-color-mode";
function K5(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var q5 = K5(G5),
  Y0 = () => {};
function X0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function bw(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = q5,
    } = e,
    s = o === "dark" ? "dark" : "light",
    [l, u] = m.useState(() => X0(a, s)),
    [c, d] = m.useState(() => X0(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: x,
      addListener: g,
    } = m.useMemo(() => H5({ preventTransition: i }), [i]),
    S = o === "system" && !l ? c : l,
    y = m.useCallback(
      (C) => {
        const k = C === "system" ? f() : C;
        u(k), h(k === "dark"), x(k), a.set(k);
      },
      [a, f, h, x]
    );
  sa(() => {
    o === "system" && d(f());
  }, []),
    m.useEffect(() => {
      const C = a.get();
      if (C) {
        y(C);
        return;
      }
      if (o === "system") {
        y("system");
        return;
      }
      y(s);
    }, [a, s, o, y]);
  const v = m.useCallback(() => {
    y(S === "dark" ? "light" : "dark");
  }, [S, y]);
  m.useEffect(() => {
    if (r) return g(y);
  }, [r, g, y]);
  const b = m.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Y0 : v,
      setColorMode: t ? Y0 : y,
      forced: t !== void 0,
    }),
    [S, v, y, t]
  );
  return p.jsx(sv.Provider, { value: b, children: n });
}
bw.displayName = "ColorModeProvider";
function Sw() {
  const e = lv(),
    t = xw();
  return { ...e, theme: t };
}
var ee = (...e) => e.filter(Boolean).join(" ");
function An(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Tn(e, ...t) {
  return Y5(e) ? e(...t) : e;
}
var Y5 = (e) => typeof e == "function",
  Hn = (e) => (e ? "" : void 0),
  Ui = (e) => (e ? !0 : void 0);
function Ie(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function X5(...e) {
  return function (n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var hc = { exports: {} };
hc.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    h = "[object Function]",
    x = "[object GeneratorFunction]",
    g = "[object Map]",
    S = "[object Number]",
    y = "[object Null]",
    v = "[object Object]",
    b = "[object Proxy]",
    C = "[object RegExp]",
    k = "[object Set]",
    T = "[object String]",
    _ = "[object Undefined]",
    j = "[object WeakMap]",
    I = "[object ArrayBuffer]",
    A = "[object DataView]",
    M = "[object Float32Array]",
    K = "[object Float64Array]",
    U = "[object Int8Array]",
    X = "[object Int16Array]",
    Q = "[object Int32Array]",
    te = "[object Uint8Array]",
    O = "[object Uint8ClampedArray]",
    $ = "[object Uint16Array]",
    B = "[object Uint32Array]",
    D = /[\\^$.*+?()[\]{}|]/g,
    F = /^\[object .+?Constructor\]$/,
    Z = /^(?:0|[1-9]\d*)$/,
    G = {};
  (G[M] = G[K] = G[U] = G[X] = G[Q] = G[te] = G[O] = G[$] = G[B] = !0),
    (G[s] =
      G[l] =
      G[I] =
      G[c] =
      G[A] =
      G[d] =
      G[f] =
      G[h] =
      G[g] =
      G[S] =
      G[v] =
      G[C] =
      G[k] =
      G[T] =
      G[j] =
        !1);
  var ne = typeof El == "object" && El && El.Object === Object && El,
    ce = typeof self == "object" && self && self.Object === Object && self,
    ie = ne || ce || Function("return this")(),
    Se = t && !t.nodeType && t,
    we = Se && !0 && e && !e.nodeType && e,
    Ze = we && we.exports === Se,
    rt = Ze && ne.process,
    He = (function () {
      try {
        var w = we && we.require && we.require("util").types;
        return w || (rt && rt.binding && rt.binding("util"));
      } catch {}
    })(),
    tn = He && He.isTypedArray;
  function nn(w, P, R) {
    switch (R.length) {
      case 0:
        return w.call(P);
      case 1:
        return w.call(P, R[0]);
      case 2:
        return w.call(P, R[0], R[1]);
      case 3:
        return w.call(P, R[0], R[1], R[2]);
    }
    return w.apply(P, R);
  }
  function ot(w, P) {
    for (var R = -1, V = Array(w); ++R < w; ) V[R] = P(R);
    return V;
  }
  function ei(w) {
    return function (P) {
      return w(P);
    };
  }
  function co(w, P) {
    return w == null ? void 0 : w[P];
  }
  function fo(w, P) {
    return function (R) {
      return w(P(R));
    };
  }
  var ti = Array.prototype,
    ni = Function.prototype,
    St = Object.prototype,
    bn = ie["__core-js_shared__"],
    rn = ni.toString,
    wt = St.hasOwnProperty,
    tr = (function () {
      var w = /[^.]+$/.exec((bn && bn.keys && bn.keys.IE_PROTO) || "");
      return w ? "Symbol(src)_1." + w : "";
    })(),
    po = St.toString,
    ri = rn.call(Object),
    oi = RegExp(
      "^" +
        rn
          .call(wt)
          .replace(D, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    z = Ze ? ie.Buffer : void 0,
    ae = ie.Symbol,
    Oe = ie.Uint8Array,
    pt = z ? z.allocUnsafe : void 0,
    $n = fo(Object.getPrototypeOf, Object),
    Pr = Object.create,
    wl = St.propertyIsEnumerable,
    x2 = ti.splice,
    ho = ae ? ae.toStringTag : void 0,
    Cl = (function () {
      try {
        var w = Ud(Object, "defineProperty");
        return w({}, "", {}), w;
      } catch {}
    })(),
    b2 = z ? z.isBuffer : void 0,
    fg = Math.max,
    S2 = Date.now,
    pg = Ud(ie, "Map"),
    Pa = Ud(Object, "create"),
    w2 = (function () {
      function w() {}
      return function (P) {
        if (!vo(P)) return {};
        if (Pr) return Pr(P);
        w.prototype = P;
        var R = new w();
        return (w.prototype = void 0), R;
      };
    })();
  function mo(w) {
    var P = -1,
      R = w == null ? 0 : w.length;
    for (this.clear(); ++P < R; ) {
      var V = w[P];
      this.set(V[0], V[1]);
    }
  }
  function C2() {
    (this.__data__ = Pa ? Pa(null) : {}), (this.size = 0);
  }
  function k2(w) {
    var P = this.has(w) && delete this.__data__[w];
    return (this.size -= P ? 1 : 0), P;
  }
  function _2(w) {
    var P = this.__data__;
    if (Pa) {
      var R = P[w];
      return R === r ? void 0 : R;
    }
    return wt.call(P, w) ? P[w] : void 0;
  }
  function P2(w) {
    var P = this.__data__;
    return Pa ? P[w] !== void 0 : wt.call(P, w);
  }
  function T2(w, P) {
    var R = this.__data__;
    return (
      (this.size += this.has(w) ? 0 : 1),
      (R[w] = Pa && P === void 0 ? r : P),
      this
    );
  }
  (mo.prototype.clear = C2),
    (mo.prototype.delete = k2),
    (mo.prototype.get = _2),
    (mo.prototype.has = P2),
    (mo.prototype.set = T2);
  function nr(w) {
    var P = -1,
      R = w == null ? 0 : w.length;
    for (this.clear(); ++P < R; ) {
      var V = w[P];
      this.set(V[0], V[1]);
    }
  }
  function E2() {
    (this.__data__ = []), (this.size = 0);
  }
  function j2(w) {
    var P = this.__data__,
      R = kl(P, w);
    if (R < 0) return !1;
    var V = P.length - 1;
    return R == V ? P.pop() : x2.call(P, R, 1), --this.size, !0;
  }
  function A2(w) {
    var P = this.__data__,
      R = kl(P, w);
    return R < 0 ? void 0 : P[R][1];
  }
  function R2(w) {
    return kl(this.__data__, w) > -1;
  }
  function I2(w, P) {
    var R = this.__data__,
      V = kl(R, w);
    return V < 0 ? (++this.size, R.push([w, P])) : (R[V][1] = P), this;
  }
  (nr.prototype.clear = E2),
    (nr.prototype.delete = j2),
    (nr.prototype.get = A2),
    (nr.prototype.has = R2),
    (nr.prototype.set = I2);
  function ii(w) {
    var P = -1,
      R = w == null ? 0 : w.length;
    for (this.clear(); ++P < R; ) {
      var V = w[P];
      this.set(V[0], V[1]);
    }
  }
  function $2() {
    (this.size = 0),
      (this.__data__ = {
        hash: new mo(),
        map: new (pg || nr)(),
        string: new mo(),
      });
  }
  function M2(w) {
    var P = Pl(this, w).delete(w);
    return (this.size -= P ? 1 : 0), P;
  }
  function O2(w) {
    return Pl(this, w).get(w);
  }
  function N2(w) {
    return Pl(this, w).has(w);
  }
  function D2(w, P) {
    var R = Pl(this, w),
      V = R.size;
    return R.set(w, P), (this.size += R.size == V ? 0 : 1), this;
  }
  (ii.prototype.clear = $2),
    (ii.prototype.delete = M2),
    (ii.prototype.get = O2),
    (ii.prototype.has = N2),
    (ii.prototype.set = D2);
  function ai(w) {
    var P = (this.__data__ = new nr(w));
    this.size = P.size;
  }
  function z2() {
    (this.__data__ = new nr()), (this.size = 0);
  }
  function F2(w) {
    var P = this.__data__,
      R = P.delete(w);
    return (this.size = P.size), R;
  }
  function L2(w) {
    return this.__data__.get(w);
  }
  function B2(w) {
    return this.__data__.has(w);
  }
  function V2(w, P) {
    var R = this.__data__;
    if (R instanceof nr) {
      var V = R.__data__;
      if (!pg || V.length < n - 1)
        return V.push([w, P]), (this.size = ++R.size), this;
      R = this.__data__ = new ii(V);
    }
    return R.set(w, P), (this.size = R.size), this;
  }
  (ai.prototype.clear = z2),
    (ai.prototype.delete = F2),
    (ai.prototype.get = L2),
    (ai.prototype.has = B2),
    (ai.prototype.set = V2);
  function W2(w, P) {
    var R = Kd(w),
      V = !R && Gd(w),
      se = !R && !V && yg(w),
      Ce = !R && !V && !se && bg(w),
      Ae = R || V || se || Ce,
      oe = Ae ? ot(w.length, String) : [],
      Re = oe.length;
    for (var on in w)
      (P || wt.call(w, on)) &&
        !(
          Ae &&
          (on == "length" ||
            (se && (on == "offset" || on == "parent")) ||
            (Ce &&
              (on == "buffer" || on == "byteLength" || on == "byteOffset")) ||
            vg(on, Re))
        ) &&
        oe.push(on);
    return oe;
  }
  function Vd(w, P, R) {
    ((R !== void 0 && !Tl(w[P], R)) || (R === void 0 && !(P in w))) &&
      Wd(w, P, R);
  }
  function U2(w, P, R) {
    var V = w[P];
    (!(wt.call(w, P) && Tl(V, R)) || (R === void 0 && !(P in w))) &&
      Wd(w, P, R);
  }
  function kl(w, P) {
    for (var R = w.length; R--; ) if (Tl(w[R][0], P)) return R;
    return -1;
  }
  function Wd(w, P, R) {
    P == "__proto__" && Cl
      ? Cl(w, P, { configurable: !0, enumerable: !0, value: R, writable: !0 })
      : (w[P] = R);
  }
  var H2 = oP();
  function _l(w) {
    return w == null
      ? w === void 0
        ? _
        : y
      : ho && ho in Object(w)
      ? iP(w)
      : dP(w);
  }
  function hg(w) {
    return Ta(w) && _l(w) == s;
  }
  function G2(w) {
    if (!vo(w) || uP(w)) return !1;
    var P = Yd(w) ? oi : F;
    return P.test(mP(w));
  }
  function K2(w) {
    return Ta(w) && xg(w.length) && !!G[_l(w)];
  }
  function q2(w) {
    if (!vo(w)) return cP(w);
    var P = gg(w),
      R = [];
    for (var V in w) (V == "constructor" && (P || !wt.call(w, V))) || R.push(V);
    return R;
  }
  function mg(w, P, R, V, se) {
    w !== P &&
      H2(
        P,
        function (Ce, Ae) {
          if ((se || (se = new ai()), vo(Ce))) Y2(w, P, Ae, R, mg, V, se);
          else {
            var oe = V ? V(Hd(w, Ae), Ce, Ae + "", w, P, se) : void 0;
            oe === void 0 && (oe = Ce), Vd(w, Ae, oe);
          }
        },
        Sg
      );
  }
  function Y2(w, P, R, V, se, Ce, Ae) {
    var oe = Hd(w, R),
      Re = Hd(P, R),
      on = Ae.get(Re);
    if (on) {
      Vd(w, R, on);
      return;
    }
    var Vt = Ce ? Ce(oe, Re, R + "", w, P, Ae) : void 0,
      Ea = Vt === void 0;
    if (Ea) {
      var Xd = Kd(Re),
        Qd = !Xd && yg(Re),
        Cg = !Xd && !Qd && bg(Re);
      (Vt = Re),
        Xd || Qd || Cg
          ? Kd(oe)
            ? (Vt = oe)
            : vP(oe)
            ? (Vt = tP(oe))
            : Qd
            ? ((Ea = !1), (Vt = Z2(Re, !0)))
            : Cg
            ? ((Ea = !1), (Vt = eP(Re, !0)))
            : (Vt = [])
          : gP(Re) || Gd(Re)
          ? ((Vt = oe),
            Gd(oe) ? (Vt = yP(oe)) : (!vo(oe) || Yd(oe)) && (Vt = aP(Re)))
          : (Ea = !1);
    }
    Ea && (Ae.set(Re, Vt), se(Vt, Re, V, Ce, Ae), Ae.delete(Re)), Vd(w, R, Vt);
  }
  function X2(w, P) {
    return pP(fP(w, P, wg), w + "");
  }
  var Q2 = Cl
    ? function (w, P) {
        return Cl(w, "toString", {
          configurable: !0,
          enumerable: !1,
          value: bP(P),
          writable: !0,
        });
      }
    : wg;
  function Z2(w, P) {
    if (P) return w.slice();
    var R = w.length,
      V = pt ? pt(R) : new w.constructor(R);
    return w.copy(V), V;
  }
  function J2(w) {
    var P = new w.constructor(w.byteLength);
    return new Oe(P).set(new Oe(w)), P;
  }
  function eP(w, P) {
    var R = P ? J2(w.buffer) : w.buffer;
    return new w.constructor(R, w.byteOffset, w.length);
  }
  function tP(w, P) {
    var R = -1,
      V = w.length;
    for (P || (P = Array(V)); ++R < V; ) P[R] = w[R];
    return P;
  }
  function nP(w, P, R, V) {
    var se = !R;
    R || (R = {});
    for (var Ce = -1, Ae = P.length; ++Ce < Ae; ) {
      var oe = P[Ce],
        Re = V ? V(R[oe], w[oe], oe, R, w) : void 0;
      Re === void 0 && (Re = w[oe]), se ? Wd(R, oe, Re) : U2(R, oe, Re);
    }
    return R;
  }
  function rP(w) {
    return X2(function (P, R) {
      var V = -1,
        se = R.length,
        Ce = se > 1 ? R[se - 1] : void 0,
        Ae = se > 2 ? R[2] : void 0;
      for (
        Ce = w.length > 3 && typeof Ce == "function" ? (se--, Ce) : void 0,
          Ae && sP(R[0], R[1], Ae) && ((Ce = se < 3 ? void 0 : Ce), (se = 1)),
          P = Object(P);
        ++V < se;

      ) {
        var oe = R[V];
        oe && w(P, oe, V, Ce);
      }
      return P;
    });
  }
  function oP(w) {
    return function (P, R, V) {
      for (var se = -1, Ce = Object(P), Ae = V(P), oe = Ae.length; oe--; ) {
        var Re = Ae[w ? oe : ++se];
        if (R(Ce[Re], Re, Ce) === !1) break;
      }
      return P;
    };
  }
  function Pl(w, P) {
    var R = w.__data__;
    return lP(P) ? R[typeof P == "string" ? "string" : "hash"] : R.map;
  }
  function Ud(w, P) {
    var R = co(w, P);
    return G2(R) ? R : void 0;
  }
  function iP(w) {
    var P = wt.call(w, ho),
      R = w[ho];
    try {
      w[ho] = void 0;
      var V = !0;
    } catch {}
    var se = po.call(w);
    return V && (P ? (w[ho] = R) : delete w[ho]), se;
  }
  function aP(w) {
    return typeof w.constructor == "function" && !gg(w) ? w2($n(w)) : {};
  }
  function vg(w, P) {
    var R = typeof w;
    return (
      (P = P ?? a),
      !!P &&
        (R == "number" || (R != "symbol" && Z.test(w))) &&
        w > -1 &&
        w % 1 == 0 &&
        w < P
    );
  }
  function sP(w, P, R) {
    if (!vo(R)) return !1;
    var V = typeof P;
    return (V == "number" ? qd(R) && vg(P, R.length) : V == "string" && P in R)
      ? Tl(R[P], w)
      : !1;
  }
  function lP(w) {
    var P = typeof w;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean"
      ? w !== "__proto__"
      : w === null;
  }
  function uP(w) {
    return !!tr && tr in w;
  }
  function gg(w) {
    var P = w && w.constructor,
      R = (typeof P == "function" && P.prototype) || St;
    return w === R;
  }
  function cP(w) {
    var P = [];
    if (w != null) for (var R in Object(w)) P.push(R);
    return P;
  }
  function dP(w) {
    return po.call(w);
  }
  function fP(w, P, R) {
    return (
      (P = fg(P === void 0 ? w.length - 1 : P, 0)),
      function () {
        for (
          var V = arguments, se = -1, Ce = fg(V.length - P, 0), Ae = Array(Ce);
          ++se < Ce;

        )
          Ae[se] = V[P + se];
        se = -1;
        for (var oe = Array(P + 1); ++se < P; ) oe[se] = V[se];
        return (oe[P] = R(Ae)), nn(w, this, oe);
      }
    );
  }
  function Hd(w, P) {
    if (!(P === "constructor" && typeof w[P] == "function") && P != "__proto__")
      return w[P];
  }
  var pP = hP(Q2);
  function hP(w) {
    var P = 0,
      R = 0;
    return function () {
      var V = S2(),
        se = i - (V - R);
      if (((R = V), se > 0)) {
        if (++P >= o) return arguments[0];
      } else P = 0;
      return w.apply(void 0, arguments);
    };
  }
  function mP(w) {
    if (w != null) {
      try {
        return rn.call(w);
      } catch {}
      try {
        return w + "";
      } catch {}
    }
    return "";
  }
  function Tl(w, P) {
    return w === P || (w !== w && P !== P);
  }
  var Gd = hg(
      (function () {
        return arguments;
      })()
    )
      ? hg
      : function (w) {
          return Ta(w) && wt.call(w, "callee") && !wl.call(w, "callee");
        },
    Kd = Array.isArray;
  function qd(w) {
    return w != null && xg(w.length) && !Yd(w);
  }
  function vP(w) {
    return Ta(w) && qd(w);
  }
  var yg = b2 || SP;
  function Yd(w) {
    if (!vo(w)) return !1;
    var P = _l(w);
    return P == h || P == x || P == u || P == b;
  }
  function xg(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function vo(w) {
    var P = typeof w;
    return w != null && (P == "object" || P == "function");
  }
  function Ta(w) {
    return w != null && typeof w == "object";
  }
  function gP(w) {
    if (!Ta(w) || _l(w) != v) return !1;
    var P = $n(w);
    if (P === null) return !0;
    var R = wt.call(P, "constructor") && P.constructor;
    return typeof R == "function" && R instanceof R && rn.call(R) == ri;
  }
  var bg = tn ? ei(tn) : K2;
  function yP(w) {
    return nP(w, Sg(w));
  }
  function Sg(w) {
    return qd(w) ? W2(w, !0) : q2(w);
  }
  var xP = rP(function (w, P, R, V) {
    mg(w, P, R, V);
  });
  function bP(w) {
    return function () {
      return w;
    };
  }
  function wg(w) {
    return w;
  }
  function SP() {
    return !1;
  }
  e.exports = xP;
})(hc, hc.exports);
var Q5 = hc.exports;
const Gn = tm(Q5);
var Z5 = (e) => /!(important)?$/.test(e),
  Q0 = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  J5 = (e, t) => (n) => {
    const r = String(t),
      o = Z5(r),
      i = Q0(r),
      a = e ? `${e}.${i}` : i;
    let s = An(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = Q0(s)), o ? `${s} !important` : s;
  };
function uv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = J5(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var ql =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function an(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = uv({ scale: e, transform: t })), r;
  };
}
var eA =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function tA(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: eA(t),
    transform: n ? uv({ scale: n, compose: r }) : r,
  };
}
var ww = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function nA() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...ww,
  ].join(" ");
}
function rA() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...ww,
  ].join(" ");
}
var oA = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  iA = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function aA(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var sA = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  hh = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  lA = new Set(Object.values(hh)),
  mh = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  uA = (e) => e.trim();
function cA(e, t) {
  if (e == null || mh.has(e)) return e;
  if (!(vh(e) || mh.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(uA).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in hh ? hh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (lA.has(f)) return f;
    const h = f.indexOf(" "),
      [x, g] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      S = vh(g) ? g : g && g.split(" "),
      y = `colors.${x}`,
      v = y in t.__cssMap ? t.__cssMap[y].varRef : x;
    return S ? [v, ...(Array.isArray(S) ? S : [S])].join(" ") : v;
  });
  return `${s}(${d.join(", ")})`;
}
var vh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  dA = (e, t) => cA(e, t ?? {});
function fA(e) {
  return /^var\(--.+\)$/.test(e);
}
var pA = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  On = (e) => (t) => `${e}(${t})`,
  fe = {
    filter(e) {
      return e !== "auto" ? e : oA;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : iA;
    },
    ring(e) {
      return aA(fe.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? nA() : e === "auto-gpu" ? rA() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = pA(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (fA(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: dA,
    blur: On("blur"),
    opacity: On("opacity"),
    brightness: On("brightness"),
    contrast: On("contrast"),
    dropShadow: On("drop-shadow"),
    grayscale: On("grayscale"),
    hueRotate: On("hue-rotate"),
    invert: On("invert"),
    saturate: On("saturate"),
    sepia: On("sepia"),
    bgImage(e) {
      return e == null || vh(e) || mh.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = sA[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  E = {
    borderWidths: an("borderWidths"),
    borderStyles: an("borderStyles"),
    colors: an("colors"),
    borders: an("borders"),
    gradients: an("gradients", fe.gradient),
    radii: an("radii", fe.px),
    space: an("space", ql(fe.vh, fe.px)),
    spaceT: an("space", ql(fe.vh, fe.px)),
    degreeT(e) {
      return { property: e, transform: fe.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: uv({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: an("sizes", ql(fe.vh, fe.px)),
    sizesT: an("sizes", ql(fe.vh, fe.fraction)),
    shadows: an("shadows"),
    logical: tA,
    blur: an("blur", fe.blur),
  },
  Tu = {
    background: E.colors("background"),
    backgroundColor: E.colors("backgroundColor"),
    backgroundImage: E.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: fe.bgClip },
    bgSize: E.prop("backgroundSize"),
    bgPosition: E.prop("backgroundPosition"),
    bg: E.colors("background"),
    bgColor: E.colors("backgroundColor"),
    bgPos: E.prop("backgroundPosition"),
    bgRepeat: E.prop("backgroundRepeat"),
    bgAttachment: E.prop("backgroundAttachment"),
    bgGradient: E.gradients("backgroundImage"),
    bgClip: { transform: fe.bgClip },
  };
Object.assign(Tu, { bgImage: Tu.backgroundImage, bgImg: Tu.backgroundImage });
var pe = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(pe, {
  rounded: pe.borderRadius,
  roundedTop: pe.borderTopRadius,
  roundedTopLeft: pe.borderTopLeftRadius,
  roundedTopRight: pe.borderTopRightRadius,
  roundedTopStart: pe.borderStartStartRadius,
  roundedTopEnd: pe.borderStartEndRadius,
  roundedBottom: pe.borderBottomRadius,
  roundedBottomLeft: pe.borderBottomLeftRadius,
  roundedBottomRight: pe.borderBottomRightRadius,
  roundedBottomStart: pe.borderEndStartRadius,
  roundedBottomEnd: pe.borderEndEndRadius,
  roundedLeft: pe.borderLeftRadius,
  roundedRight: pe.borderRightRadius,
  roundedStart: pe.borderInlineStartRadius,
  roundedEnd: pe.borderInlineEndRadius,
  borderStart: pe.borderInlineStart,
  borderEnd: pe.borderInlineEnd,
  borderTopStartRadius: pe.borderStartStartRadius,
  borderTopEndRadius: pe.borderStartEndRadius,
  borderBottomStartRadius: pe.borderEndStartRadius,
  borderBottomEndRadius: pe.borderEndEndRadius,
  borderStartRadius: pe.borderInlineStartRadius,
  borderEndRadius: pe.borderInlineEndRadius,
  borderStartWidth: pe.borderInlineStartWidth,
  borderEndWidth: pe.borderInlineEndWidth,
  borderStartColor: pe.borderInlineStartColor,
  borderEndColor: pe.borderInlineEndColor,
  borderStartStyle: pe.borderInlineStartStyle,
  borderEndStyle: pe.borderInlineEndStyle,
});
var hA = {
    color: E.colors("color"),
    textColor: E.colors("color"),
    fill: E.colors("fill"),
    stroke: E.colors("stroke"),
  },
  gh = {
    boxShadow: E.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: E.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: E.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(gh, { shadow: gh.boxShadow });
var mA = {
    filter: { transform: fe.filter },
    blur: E.blur("--chakra-blur"),
    brightness: E.propT("--chakra-brightness", fe.brightness),
    contrast: E.propT("--chakra-contrast", fe.contrast),
    hueRotate: E.degreeT("--chakra-hue-rotate"),
    invert: E.propT("--chakra-invert", fe.invert),
    saturate: E.propT("--chakra-saturate", fe.saturate),
    dropShadow: E.propT("--chakra-drop-shadow", fe.dropShadow),
    backdropFilter: { transform: fe.backdropFilter },
    backdropBlur: E.blur("--chakra-backdrop-blur"),
    backdropBrightness: E.propT("--chakra-backdrop-brightness", fe.brightness),
    backdropContrast: E.propT("--chakra-backdrop-contrast", fe.contrast),
    backdropHueRotate: E.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: E.propT("--chakra-backdrop-invert", fe.invert),
    backdropSaturate: E.propT("--chakra-backdrop-saturate", fe.saturate),
  },
  mc = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: fe.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: E.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: E.space("gap"),
    rowGap: E.space("rowGap"),
    columnGap: E.space("columnGap"),
  };
Object.assign(mc, { flexDir: mc.flexDirection });
var Cw = {
    gridGap: E.space("gridGap"),
    gridColumnGap: E.space("gridColumnGap"),
    gridRowGap: E.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  vA = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: fe.outline },
    outlineOffset: !0,
    outlineColor: E.colors("outlineColor"),
  },
  ln = {
    width: E.sizesT("width"),
    inlineSize: E.sizesT("inlineSize"),
    height: E.sizes("height"),
    blockSize: E.sizes("blockSize"),
    boxSize: E.sizes(["width", "height"]),
    minWidth: E.sizes("minWidth"),
    minInlineSize: E.sizes("minInlineSize"),
    minHeight: E.sizes("minHeight"),
    minBlockSize: E.sizes("minBlockSize"),
    maxWidth: E.sizes("maxWidth"),
    maxInlineSize: E.sizes("maxInlineSize"),
    maxHeight: E.sizes("maxHeight"),
    maxBlockSize: E.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: E.propT("float", fe.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(ln, {
  w: ln.width,
  h: ln.height,
  minW: ln.minWidth,
  maxW: ln.maxWidth,
  minH: ln.minHeight,
  maxH: ln.maxHeight,
  overscroll: ln.overscrollBehavior,
  overscrollX: ln.overscrollBehaviorX,
  overscrollY: ln.overscrollBehaviorY,
});
var gA = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage"),
};
function yA(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var xA = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  bA = xA(yA),
  SA = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  wA = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  Tf = (e, t, n) => {
    const r = {},
      o = bA(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  CA = {
    srOnly: {
      transform(e) {
        return e === !0 ? SA : e === "focusable" ? wA : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => Tf(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => Tf(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => Tf(t, e, n) },
  },
  us = {
    position: !0,
    pos: E.prop("position"),
    zIndex: E.prop("zIndex", "zIndices"),
    inset: E.spaceT("inset"),
    insetX: E.spaceT(["left", "right"]),
    insetInline: E.spaceT("insetInline"),
    insetY: E.spaceT(["top", "bottom"]),
    insetBlock: E.spaceT("insetBlock"),
    top: E.spaceT("top"),
    insetBlockStart: E.spaceT("insetBlockStart"),
    bottom: E.spaceT("bottom"),
    insetBlockEnd: E.spaceT("insetBlockEnd"),
    left: E.spaceT("left"),
    insetInlineStart: E.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: E.spaceT("right"),
    insetInlineEnd: E.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(us, {
  insetStart: us.insetInlineStart,
  insetEnd: us.insetInlineEnd,
});
var kA = {
    ring: { transform: fe.ring },
    ringColor: E.colors("--chakra-ring-color"),
    ringOffset: E.prop("--chakra-ring-offset-width"),
    ringOffsetColor: E.colors("--chakra-ring-offset-color"),
    ringInset: E.prop("--chakra-ring-inset"),
  },
  Te = {
    margin: E.spaceT("margin"),
    marginTop: E.spaceT("marginTop"),
    marginBlockStart: E.spaceT("marginBlockStart"),
    marginRight: E.spaceT("marginRight"),
    marginInlineEnd: E.spaceT("marginInlineEnd"),
    marginBottom: E.spaceT("marginBottom"),
    marginBlockEnd: E.spaceT("marginBlockEnd"),
    marginLeft: E.spaceT("marginLeft"),
    marginInlineStart: E.spaceT("marginInlineStart"),
    marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: E.spaceT("marginInline"),
    marginY: E.spaceT(["marginTop", "marginBottom"]),
    marginBlock: E.spaceT("marginBlock"),
    padding: E.space("padding"),
    paddingTop: E.space("paddingTop"),
    paddingBlockStart: E.space("paddingBlockStart"),
    paddingRight: E.space("paddingRight"),
    paddingBottom: E.space("paddingBottom"),
    paddingBlockEnd: E.space("paddingBlockEnd"),
    paddingLeft: E.space("paddingLeft"),
    paddingInlineStart: E.space("paddingInlineStart"),
    paddingInlineEnd: E.space("paddingInlineEnd"),
    paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: E.space("paddingInline"),
    paddingY: E.space(["paddingTop", "paddingBottom"]),
    paddingBlock: E.space("paddingBlock"),
  };
Object.assign(Te, {
  m: Te.margin,
  mt: Te.marginTop,
  mr: Te.marginRight,
  me: Te.marginInlineEnd,
  marginEnd: Te.marginInlineEnd,
  mb: Te.marginBottom,
  ml: Te.marginLeft,
  ms: Te.marginInlineStart,
  marginStart: Te.marginInlineStart,
  mx: Te.marginX,
  my: Te.marginY,
  p: Te.padding,
  pt: Te.paddingTop,
  py: Te.paddingY,
  px: Te.paddingX,
  pb: Te.paddingBottom,
  pl: Te.paddingLeft,
  ps: Te.paddingInlineStart,
  paddingStart: Te.paddingInlineStart,
  pr: Te.paddingRight,
  pe: Te.paddingInlineEnd,
  paddingEnd: Te.paddingInlineEnd,
});
var _A = {
    textDecorationColor: E.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: E.shadows("textShadow"),
  },
  PA = {
    clipPath: !0,
    transform: E.propT("transform", fe.transform),
    transformOrigin: !0,
    translateX: E.spaceT("--chakra-translate-x"),
    translateY: E.spaceT("--chakra-translate-y"),
    skewX: E.degreeT("--chakra-skew-x"),
    skewY: E.degreeT("--chakra-skew-y"),
    scaleX: E.prop("--chakra-scale-x"),
    scaleY: E.prop("--chakra-scale-y"),
    scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: E.degreeT("--chakra-rotate"),
  },
  TA = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: E.prop("transitionDuration", "transition.duration"),
    transitionProperty: E.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: E.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  EA = {
    fontFamily: E.prop("fontFamily", "fonts"),
    fontSize: E.prop("fontSize", "fontSizes", fe.px),
    fontWeight: E.prop("fontWeight", "fontWeights"),
    lineHeight: E.prop("lineHeight", "lineHeights"),
    letterSpacing: E.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  jA = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: E.spaceT("scrollMargin"),
    scrollMarginTop: E.spaceT("scrollMarginTop"),
    scrollMarginBottom: E.spaceT("scrollMarginBottom"),
    scrollMarginLeft: E.spaceT("scrollMarginLeft"),
    scrollMarginRight: E.spaceT("scrollMarginRight"),
    scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: E.spaceT("scrollPadding"),
    scrollPaddingTop: E.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: E.spaceT("scrollPaddingRight"),
    scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function kw(e) {
  return An(e) && e.reference ? e.reference : String(e);
}
var md = (e, ...t) => t.map(kw).join(` ${e} `).replace(/calc/g, ""),
  Z0 = (...e) => `calc(${md("+", ...e)})`,
  J0 = (...e) => `calc(${md("-", ...e)})`,
  yh = (...e) => `calc(${md("*", ...e)})`,
  ey = (...e) => `calc(${md("/", ...e)})`,
  ty = (e) => {
    const t = kw(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : yh(t, -1);
  },
  wo = Object.assign(
    (e) => ({
      add: (...t) => wo(Z0(e, ...t)),
      subtract: (...t) => wo(J0(e, ...t)),
      multiply: (...t) => wo(yh(e, ...t)),
      divide: (...t) => wo(ey(e, ...t)),
      negate: () => wo(ty(e)),
      toString: () => e.toString(),
    }),
    { add: Z0, subtract: J0, multiply: yh, divide: ey, negate: ty }
  );
function AA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function RA(e) {
  const t = AA(e.toString());
  return $A(IA(t));
}
function IA(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function $A(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function MA(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function OA(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function NA(e, t = "") {
  return RA(`--${MA(e, t)}`);
}
function Y(e, t, n) {
  const r = NA(e, n);
  return { variable: r, reference: OA(r, t) };
}
function DA(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = Y(`${e}-${o}`, i);
      continue;
    }
    n[r] = Y(`${e}-${r}`);
  }
  return n;
}
function zA(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function FA(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function xh(e) {
  if (e == null) return e;
  const { unitless: t } = FA(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var _w = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  cv = (e) => Object.fromEntries(Object.entries(e).sort(_w));
function ny(e) {
  const t = cv(e);
  return Object.assign(Object.values(t), t);
}
function LA(e) {
  const t = Object.keys(cv(e));
  return new Set(t);
}
function ry(e) {
  var t;
  if (!e) return e;
  e = (t = xh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number"
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function qa(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${xh(e)})`),
    t && n.push("and", `(max-width: ${xh(t)})`),
    n.join(" ")
  );
}
function BA(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = ny(e),
    r = Object.entries(e)
      .sort(_w)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? ry(d) : void 0),
          {
            _minW: ry(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: qa(null, d),
            minWQuery: qa(s),
            minMaxQuery: qa(s, d),
          }
        );
      }),
    o = LA(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: cv(e),
    asArray: ny(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [null, ...n.map((a) => qa(a)).slice(1)],
    toArrayValue(a) {
      if (!An(a)) throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; zA(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var lt = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Er = (e) => Pw((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  rr = (e) => Pw((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  Pw = (e, ...t) => t.map(e).join(", "),
  vd = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Er(lt.hover),
    _peerHover: rr(lt.hover),
    _groupFocus: Er(lt.focus),
    _peerFocus: rr(lt.focus),
    _groupFocusVisible: Er(lt.focusVisible),
    _peerFocusVisible: rr(lt.focusVisible),
    _groupActive: Er(lt.active),
    _peerActive: rr(lt.active),
    _groupDisabled: Er(lt.disabled),
    _peerDisabled: rr(lt.disabled),
    _groupInvalid: Er(lt.invalid),
    _peerInvalid: rr(lt.invalid),
    _groupChecked: Er(lt.checked),
    _peerChecked: rr(lt.checked),
    _groupFocusWithin: Er(lt.focusWithin),
    _peerFocusWithin: rr(lt.focusWithin),
    _peerPlaceholderShown: rr(lt.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  Tw = Object.keys(vd);
function oy(e, t) {
  return Y(String(e).replace(/\./g, "-"), void 0, t);
}
function VA(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = oy(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [h, ...x] = f,
          g = `${h}.-${x.join(".")}`,
          S = wo.negate(s),
          y = wo.negate(u);
        r[g] = { value: S, var: l, varRef: y };
      }
      (n[l] = s), (r[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const x = [String(o).split(".")[0], f].join(".");
        if (!e[x]) return f;
        const { reference: S } = oy(x, t == null ? void 0 : t.cssVarPrefix);
        return S;
      },
      d = An(s) ? s : { default: s };
    (n = Gn(
      n,
      Object.entries(d).reduce((f, [h, x]) => {
        var g, S;
        if (!x) return f;
        const y = c(`${x}`);
        if (h === "default") return (f[l] = y), f;
        const v = (S = (g = vd) == null ? void 0 : g[h]) != null ? S : h;
        return (f[v] = { [l]: y }), f;
      }, {})
    )),
      (r[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function WA(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function UA(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function HA(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function iy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (HA(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          h = [...s, f];
        if (r != null && r(a, h)) return t(a, s);
        u[f] = i(d, h);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var GA = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function KA(e) {
  return UA(e, GA);
}
function qA(e) {
  return e.semanticTokens;
}
function YA(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var XA = (e) => Tw.includes(e) || e === "default";
function QA({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    iy(e, (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
    }),
    iy(
      t,
      (r, o) => {
        r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(XA) }
    ),
    n
  );
}
function ZA(e) {
  var t;
  const n = YA(e),
    r = KA(n),
    o = qA(n),
    i = QA({ tokens: r, semanticTokens: o }),
    a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = VA(i, { cssVarPrefix: a });
  return (
    Object.assign(n, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: BA(n.breakpoints),
    }),
    n
  );
}
var dv = Gn(
    {},
    Tu,
    pe,
    hA,
    mc,
    ln,
    mA,
    kA,
    vA,
    Cw,
    CA,
    us,
    gh,
    Te,
    jA,
    EA,
    _A,
    PA,
    gA,
    TA
  ),
  JA = Object.assign({}, Te, ln, mc, Cw, us),
  eR = Object.keys(JA),
  tR = [...Object.keys(dv), ...Tw],
  nR = { ...dv, ...vd },
  rR = (e) => e in nR,
  oR = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = Tn(e[a], t);
      if (s == null) continue;
      if (((s = An(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function iR(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function aR(e) {
  return /^var\(--.+\)$/.test(e);
}
var sR = (e, t) => e.startsWith("--") && typeof t == "string" && !aR(t),
  lR = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = iR(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function uR(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = Tn(i, r),
        d = oR(c)(r);
      let f = {};
      for (let h in d) {
        const x = d[h];
        let g = Tn(x, r);
        h in n && (h = n[h]), sR(h, g) && (g = lR(r, g));
        let S = t[h];
        if ((S === !0 && (S = { property: h }), An(g))) {
          (f[h] = (s = f[h]) != null ? s : {}), (f[h] = Gn({}, f[h], o(g, !0)));
          continue;
        }
        let y =
          (u =
            (l = S == null ? void 0 : S.transform) == null
              ? void 0
              : l.call(S, g, r, c)) != null
            ? u
            : g;
        y = S != null && S.processResult ? o(y, !0) : y;
        const v = Tn(S == null ? void 0 : S.property, r);
        if (!a && S != null && S.static) {
          const b = Tn(S.static, r);
          f = Gn({}, f, b);
        }
        if (v && Array.isArray(v)) {
          for (const b of v) f[b] = y;
          continue;
        }
        if (v) {
          v === "&" && An(y) ? (f = Gn({}, f, y)) : (f[v] = y);
          continue;
        }
        if (An(y)) {
          f = Gn({}, f, y);
          continue;
        }
        f[h] = y;
      }
      return f;
    };
  return o;
}
var Ew = (e) => (t) => uR({ theme: t, pseudos: vd, configs: dv })(e);
function _e(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function cR(e, t) {
  if (Array.isArray(e)) return e;
  if (An(e)) return t(e);
  if (e != null) return [e];
}
function dR(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function fR(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = cR(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      h = !!r.parts;
    for (let x = 0; x < d; x++) {
      const g = t.details[x],
        S = t.details[dR(c, x)],
        y = qa(g.minW, S == null ? void 0 : S._minW),
        v = Tn((s = r[o]) == null ? void 0 : s[c[x]], a);
      if (v) {
        if (h) {
          (l = r.parts) == null ||
            l.forEach((b) => {
              Gn(u, { [b]: f ? v[b] : { [y]: v[b] } });
            });
          continue;
        }
        if (!h) {
          f ? Gn(u, v) : (u[y] = v);
          continue;
        }
        u[y] = v;
      }
    }
    return u;
  };
}
function pR(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = fR(i);
    return Gn(
      {},
      Tn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Qe(e) {
  return WA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var hR = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  mR = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  vR = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  gR = { property: hR, easing: mR, duration: vR },
  yR = gR,
  xR = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  bR = xR,
  SR = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  wR = SR,
  CR = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  kR = CR,
  _R = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  PR = _R,
  TR = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  ER = TR,
  jR = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  AR = jR,
  RR = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  IR = RR,
  $R = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  jw = $R,
  Aw = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  MR = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  OR = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  NR = { ...Aw, ...MR, container: OR },
  Rw = NR,
  DR = {
    breakpoints: kR,
    zIndices: bR,
    radii: ER,
    blur: IR,
    colors: PR,
    ...jw,
    sizes: Rw,
    shadows: AR,
    space: Aw,
    borders: wR,
    transition: yR,
  },
  { defineMultiStyleConfig: zR, definePartsStyle: Ya } = _e([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  ar = Y("stepper-indicator-size"),
  Pi = Y("stepper-icon-size"),
  Ti = Y("stepper-title-font-size"),
  Xa = Y("stepper-description-font-size"),
  za = Y("stepper-accent-color"),
  FR = Ya(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [za.variable]: `colors.${e}.500`,
      _dark: { [za.variable]: `colors.${e}.200` },
    },
    title: { fontSize: Ti.reference, fontWeight: "medium" },
    description: { fontSize: Xa.reference, color: "chakra-subtle-text" },
    number: { fontSize: Ti.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: Pi.reference, height: Pi.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: ar.reference,
      height: ar.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: za.reference,
      },
      "&[data-status=complete]": {
        bg: za.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: za.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${ar.reference} - 8px)`,
        top: `calc(${ar.reference} + 4px)`,
        insetStart: `calc(${ar.reference} / 2 - 1px)`,
      },
    },
  })),
  LR = zR({
    baseStyle: FR,
    sizes: {
      xs: Ya({
        stepper: {
          [ar.variable]: "sizes.4",
          [Pi.variable]: "sizes.3",
          [Ti.variable]: "fontSizes.xs",
          [Xa.variable]: "fontSizes.xs",
        },
      }),
      sm: Ya({
        stepper: {
          [ar.variable]: "sizes.6",
          [Pi.variable]: "sizes.4",
          [Ti.variable]: "fontSizes.sm",
          [Xa.variable]: "fontSizes.xs",
        },
      }),
      md: Ya({
        stepper: {
          [ar.variable]: "sizes.8",
          [Pi.variable]: "sizes.5",
          [Ti.variable]: "fontSizes.md",
          [Xa.variable]: "fontSizes.sm",
        },
      }),
      lg: Ya({
        stepper: {
          [ar.variable]: "sizes.10",
          [Pi.variable]: "sizes.6",
          [Ti.variable]: "fontSizes.lg",
          [Xa.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function ge(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return ge(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return ge(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const h = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: h, selector: `.${h}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var BR = ge("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  VR = ge("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  WR = ge("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  UR = ge("breadcrumb").parts("link", "item", "container").extend("separator");
ge("button").parts();
var HR = ge("checkbox").parts("control", "icon", "container").extend("label");
ge("progress").parts("track", "filledTrack").extend("label");
var GR = ge("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  KR = ge("editable").parts("preview", "input", "textarea"),
  qR = ge("form").parts("container", "requiredIndicator", "helperText"),
  YR = ge("formError").parts("text", "icon"),
  XR = ge("input").parts("addon", "field", "element", "group"),
  QR = ge("list").parts("container", "item", "icon"),
  ZR = ge("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  JR = ge("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  eI = ge("numberinput").parts("root", "field", "stepperGroup", "stepper");
ge("pininput").parts("field");
var tI = ge("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  nI = ge("progress").parts("label", "filledTrack", "track"),
  rI = ge("radio").parts("container", "control", "label"),
  oI = ge("select").parts("field", "icon"),
  iI = ge("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  aI = ge("stat").parts("container", "label", "helpText", "number", "icon"),
  sI = ge("switch").parts("container", "track", "thumb"),
  lI = ge("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  uI = ge("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  cI = ge("tag").parts("container", "label", "closeButton"),
  dI = ge("card").parts("container", "header", "body", "footer");
function To(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class fI extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Qa = fI;
function fv(e) {
  if (typeof e != "string") throw new Qa(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = bI.test(e) ? mI(e) : e;
  const n = vI.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(Us(s, 2), 16)),
      parseInt(Us(a[3] || "f", 2), 16) / 255,
    ];
  }
  const r = gI.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const o = yI.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const i = xI.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (To(0, 100, s) !== s) throw new Qa(e);
    if (To(0, 100, l) !== l) throw new Qa(e);
    return [...SI(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Qa(e);
}
function pI(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const ay = (e) => parseInt(e.replace(/_/g, ""), 36),
  hI =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = ay(t.substring(0, 3)),
          r = ay(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return (e[n] = `${o}${r}`), e;
      }, {});
function mI(e) {
  const t = e.toLowerCase().trim(),
    n = hI[pI(t)];
  if (!n) throw new Qa(e);
  return `#${n}`;
}
const Us = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  vI = new RegExp(`^#${Us("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  gI = new RegExp(`^#${Us("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  yI = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Us(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  xI =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  bI = /^[a-z]+$/i,
  sy = (e) => Math.round(e * 255),
  SI = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(sy);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = r - i / 2,
      d = s + c,
      f = l + c,
      h = u + c;
    return [d, f, h].map(sy);
  };
function wI(e, t, n, r) {
  return `rgba(${To(0, 255, e).toFixed()}, ${To(0, 255, t).toFixed()}, ${To(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(To(0, 1, r).toFixed(3))})`;
}
function CI(e, t) {
  const [n, r, o, i] = fv(e);
  return wI(n, r, o, i - t);
}
function kI(e) {
  const [t, n, r, o] = fv(e);
  let i = (a) => {
    const s = To(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function _I(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var PI = (e) => Object.keys(e).length === 0,
  Pt = (e, t, n) => {
    const r = _I(e, `colors.${t}`, t);
    try {
      return kI(r), r;
    } catch {
      return n ?? "#000000";
    }
  },
  TI = (e) => {
    const [t, n, r] = fv(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  EI = (e) => (t) => {
    const n = Pt(t, e);
    return TI(n) < 128 ? "dark" : "light";
  },
  jI = (e) => (t) => EI(e)(t) === "dark",
  la = (e, t) => (n) => {
    const r = Pt(n, e);
    return CI(r, 1 - t);
  };
function ly(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var AI = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function RI(e) {
  const t = AI();
  return !e || PI(e)
    ? t
    : e.string && e.colors
    ? $I(e.string, e.colors)
    : e.string && !e.colors
    ? II(e.string)
    : e.colors && !e.string
    ? MI(e.colors)
    : t;
}
function II(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function $I(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function MI(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function q(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function pv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function Iw(e) {
  return An(e) && e.reference ? e.reference : String(e);
}
var gd = (e, ...t) => t.map(Iw).join(` ${e} `).replace(/calc/g, ""),
  uy = (...e) => `calc(${gd("+", ...e)})`,
  cy = (...e) => `calc(${gd("-", ...e)})`,
  bh = (...e) => `calc(${gd("*", ...e)})`,
  dy = (...e) => `calc(${gd("/", ...e)})`,
  fy = (e) => {
    const t = Iw(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : bh(t, -1);
  },
  sr = Object.assign(
    (e) => ({
      add: (...t) => sr(uy(e, ...t)),
      subtract: (...t) => sr(cy(e, ...t)),
      multiply: (...t) => sr(bh(e, ...t)),
      divide: (...t) => sr(dy(e, ...t)),
      negate: () => sr(fy(e)),
      toString: () => e.toString(),
    }),
    { add: uy, subtract: cy, multiply: bh, divide: dy, negate: fy }
  );
function OI(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function NI(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function $w(e) {
  const t = NI(e.toString());
  return t.includes("\\.") ? e : OI(e) ? t.replace(".", "\\.") : e;
}
function DI(e, t = "") {
  return [t, $w(e)].filter(Boolean).join("-");
}
function zI(e, t) {
  return `var(${$w(e)}${t ? `, ${t}` : ""})`;
}
function FI(e, t = "") {
  return `--${DI(e, t)}`;
}
function nt(e, t) {
  const n = FI(e, t == null ? void 0 : t.prefix);
  return { variable: n, reference: zI(n, LI(t == null ? void 0 : t.fallback)) };
}
function LI(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: BI, definePartsStyle: Eu } = _e(sI.keys),
  cs = nt("switch-track-width"),
  Io = nt("switch-track-height"),
  Ef = nt("switch-track-diff"),
  VI = sr.subtract(cs, Io),
  Sh = nt("switch-thumb-x"),
  Fa = nt("switch-bg"),
  WI = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [cs.reference],
      height: [Io.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [Fa.variable]: "colors.gray.300",
      _dark: { [Fa.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [Fa.variable]: `colors.${t}.500`,
        _dark: { [Fa.variable]: `colors.${t}.200` },
      },
      bg: Fa.reference,
    };
  },
  UI = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Io.reference],
    height: [Io.reference],
    _checked: { transform: `translateX(${Sh.reference})` },
  },
  HI = Eu((e) => ({
    container: {
      [Ef.variable]: VI,
      [Sh.variable]: Ef.reference,
      _rtl: { [Sh.variable]: sr(Ef).negate().toString() },
    },
    track: WI(e),
    thumb: UI,
  })),
  GI = {
    sm: Eu({
      container: { [cs.variable]: "1.375rem", [Io.variable]: "sizes.3" },
    }),
    md: Eu({
      container: { [cs.variable]: "1.875rem", [Io.variable]: "sizes.4" },
    }),
    lg: Eu({
      container: { [cs.variable]: "2.875rem", [Io.variable]: "sizes.6" },
    }),
  },
  KI = BI({
    baseStyle: HI,
    sizes: GI,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: qI, definePartsStyle: Hi } = _e(lI.keys),
  YI = Hi({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  vc = { "&[data-is-numeric=true]": { textAlign: "end" } },
  XI = Hi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: q("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: q(`${t}.100`, `${t}.700`)(e),
        ...vc,
      },
      td: {
        borderBottom: "1px",
        borderColor: q(`${t}.100`, `${t}.700`)(e),
        ...vc,
      },
      caption: { color: q("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  QI = Hi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: q("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: q(`${t}.100`, `${t}.700`)(e),
        ...vc,
      },
      td: {
        borderBottom: "1px",
        borderColor: q(`${t}.100`, `${t}.700`)(e),
        ...vc,
      },
      caption: { color: q("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: q(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: q(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  ZI = { simple: XI, striped: QI, unstyled: {} },
  JI = {
    sm: Hi({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Hi({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Hi({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  e$ = qI({
    baseStyle: YI,
    variants: ZI,
    sizes: JI,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  $t = Y("tabs-color"),
  Pn = Y("tabs-bg"),
  Yl = Y("tabs-border-color"),
  { defineMultiStyleConfig: t$, definePartsStyle: Xn } = _e(uI.keys),
  n$ = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  r$ = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  o$ = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  i$ = { p: 4 },
  a$ = Xn((e) => ({ root: n$(e), tab: r$(e), tablist: o$(e), tabpanel: i$ })),
  s$ = {
    sm: Xn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: Xn({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: Xn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  l$ = Xn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      o = r ? "borderStart" : "borderBottom",
      i = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [$t.variable]: `colors.${t}.600`,
          _dark: { [$t.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Pn.variable]: "colors.gray.200",
          _dark: { [Pn.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: $t.reference,
        bg: Pn.reference,
      },
    };
  }),
  u$ = Xn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [Yl.variable]: "transparent",
        _selected: {
          [$t.variable]: `colors.${t}.600`,
          [Yl.variable]: "colors.white",
          _dark: {
            [$t.variable]: `colors.${t}.300`,
            [Yl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: Yl.reference,
        },
        color: $t.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  c$ = Xn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Pn.variable]: "colors.gray.50",
        _dark: { [Pn.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Pn.variable]: "colors.white",
          [$t.variable]: `colors.${t}.600`,
          _dark: {
            [Pn.variable]: "colors.gray.800",
            [$t.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: $t.reference,
        bg: Pn.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  d$ = Xn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: Pt(n, `${t}.700`), bg: Pt(n, `${t}.100`) },
      },
    };
  }),
  f$ = Xn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [$t.variable]: "colors.gray.600",
        _dark: { [$t.variable]: "inherit" },
        _selected: {
          [$t.variable]: "colors.white",
          [Pn.variable]: `colors.${t}.600`,
          _dark: {
            [$t.variable]: "colors.gray.800",
            [Pn.variable]: `colors.${t}.300`,
          },
        },
        color: $t.reference,
        bg: Pn.reference,
      },
    };
  }),
  p$ = Xn({}),
  h$ = {
    line: l$,
    enclosed: u$,
    "enclosed-colored": c$,
    "soft-rounded": d$,
    "solid-rounded": f$,
    unstyled: p$,
  },
  m$ = t$({
    baseStyle: a$,
    sizes: s$,
    variants: h$,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  Ke = DA("badge", ["bg", "color", "shadow"]),
  v$ = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Ke.bg.reference,
    color: Ke.color.reference,
    boxShadow: Ke.shadow.reference,
  },
  g$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = la(`${t}.500`, 0.6)(n);
    return {
      [Ke.bg.variable]: `colors.${t}.500`,
      [Ke.color.variable]: "colors.white",
      _dark: {
        [Ke.bg.variable]: r,
        [Ke.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  y$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = la(`${t}.200`, 0.16)(n);
    return {
      [Ke.bg.variable]: `colors.${t}.100`,
      [Ke.color.variable]: `colors.${t}.800`,
      _dark: { [Ke.bg.variable]: r, [Ke.color.variable]: `colors.${t}.200` },
    };
  },
  x$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = la(`${t}.200`, 0.8)(n);
    return {
      [Ke.color.variable]: `colors.${t}.500`,
      _dark: { [Ke.color.variable]: r },
      [Ke.shadow.variable]: `inset 0 0 0px 1px ${Ke.color.reference}`,
    };
  },
  b$ = { solid: g$, subtle: y$, outline: x$ },
  ds = {
    baseStyle: v$,
    variants: b$,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: S$, definePartsStyle: $o } = _e(cI.keys),
  py = Y("tag-bg"),
  hy = Y("tag-color"),
  jf = Y("tag-shadow"),
  ju = Y("tag-min-height"),
  Au = Y("tag-min-width"),
  Ru = Y("tag-font-size"),
  Iu = Y("tag-padding-inline"),
  w$ = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [hy.variable]: Ke.color.reference,
    [py.variable]: Ke.bg.reference,
    [jf.variable]: Ke.shadow.reference,
    color: hy.reference,
    bg: py.reference,
    boxShadow: jf.reference,
    borderRadius: "md",
    minH: ju.reference,
    minW: Au.reference,
    fontSize: Ru.reference,
    px: Iu.reference,
    _focusVisible: { [jf.variable]: "shadows.outline" },
  },
  C$ = { lineHeight: 1.2, overflow: "visible" },
  k$ = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  _$ = $o({ container: w$, label: C$, closeButton: k$ }),
  P$ = {
    sm: $o({
      container: {
        [ju.variable]: "sizes.5",
        [Au.variable]: "sizes.5",
        [Ru.variable]: "fontSizes.xs",
        [Iu.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: $o({
      container: {
        [ju.variable]: "sizes.6",
        [Au.variable]: "sizes.6",
        [Ru.variable]: "fontSizes.sm",
        [Iu.variable]: "space.2",
      },
    }),
    lg: $o({
      container: {
        [ju.variable]: "sizes.8",
        [Au.variable]: "sizes.8",
        [Ru.variable]: "fontSizes.md",
        [Iu.variable]: "space.3",
      },
    }),
  },
  T$ = {
    subtle: $o((e) => {
      var t;
      return { container: (t = ds.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: $o((e) => {
      var t;
      return { container: (t = ds.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: $o((e) => {
      var t;
      return { container: (t = ds.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  E$ = S$({
    variants: T$,
    baseStyle: _$,
    sizes: P$,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: cr, defineMultiStyleConfig: j$ } = _e(XR.keys),
  Ei = Y("input-height"),
  ji = Y("input-font-size"),
  Ai = Y("input-padding"),
  Ri = Y("input-border-radius"),
  A$ = cr({
    addon: {
      height: Ei.reference,
      fontSize: ji.reference,
      px: Ai.reference,
      borderRadius: Ri.reference,
    },
    field: {
      width: "100%",
      height: Ei.reference,
      fontSize: ji.reference,
      px: Ai.reference,
      borderRadius: Ri.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  jr = {
    lg: {
      [ji.variable]: "fontSizes.lg",
      [Ai.variable]: "space.4",
      [Ri.variable]: "radii.md",
      [Ei.variable]: "sizes.12",
    },
    md: {
      [ji.variable]: "fontSizes.md",
      [Ai.variable]: "space.4",
      [Ri.variable]: "radii.md",
      [Ei.variable]: "sizes.10",
    },
    sm: {
      [ji.variable]: "fontSizes.sm",
      [Ai.variable]: "space.3",
      [Ri.variable]: "radii.sm",
      [Ei.variable]: "sizes.8",
    },
    xs: {
      [ji.variable]: "fontSizes.xs",
      [Ai.variable]: "space.2",
      [Ri.variable]: "radii.sm",
      [Ei.variable]: "sizes.6",
    },
  },
  R$ = {
    lg: cr({ field: jr.lg, group: jr.lg }),
    md: cr({ field: jr.md, group: jr.md }),
    sm: cr({ field: jr.sm, group: jr.sm }),
    xs: cr({ field: jr.xs, group: jr.xs }),
  };
function hv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || q("blue.500", "blue.300")(e),
    errorBorderColor: n || q("red.500", "red.300")(e),
  };
}
var I$ = cr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = hv(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: q("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Pt(t, r), boxShadow: `0 0 0 1px ${Pt(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: Pt(t, n),
          boxShadow: `0 0 0 1px ${Pt(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: q("inherit", "whiteAlpha.50")(e),
        bg: q("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  $$ = cr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = hv(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: q("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: q("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Pt(t, r) },
        _focusVisible: { bg: "transparent", borderColor: Pt(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: q("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  M$ = cr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = hv(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: Pt(t, r),
          boxShadow: `0px 1px 0px 0px ${Pt(t, r)}`,
        },
        _focusVisible: {
          borderColor: Pt(t, n),
          boxShadow: `0px 1px 0px 0px ${Pt(t, n)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  O$ = cr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  N$ = { outline: I$, filled: $$, flushed: M$, unstyled: O$ },
  ve = j$({
    baseStyle: A$,
    sizes: R$,
    variants: N$,
    defaultProps: { size: "md", variant: "outline" },
  }),
  my,
  D$ = {
    ...((my = ve.baseStyle) == null ? void 0 : my.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  vy,
  gy,
  z$ = {
    outline: (e) => {
      var t, n;
      return (n = (t = ve.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = ve.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = ve.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? n
        : {};
    },
    unstyled:
      (gy = (vy = ve.variants) == null ? void 0 : vy.unstyled.field) != null
        ? gy
        : {},
  },
  yy,
  xy,
  by,
  Sy,
  wy,
  Cy,
  ky,
  _y,
  F$ = {
    xs: (xy = (yy = ve.sizes) == null ? void 0 : yy.xs.field) != null ? xy : {},
    sm: (Sy = (by = ve.sizes) == null ? void 0 : by.sm.field) != null ? Sy : {},
    md: (Cy = (wy = ve.sizes) == null ? void 0 : wy.md.field) != null ? Cy : {},
    lg: (_y = (ky = ve.sizes) == null ? void 0 : ky.lg.field) != null ? _y : {},
  },
  L$ = {
    baseStyle: D$,
    sizes: F$,
    variants: z$,
    defaultProps: { size: "md", variant: "outline" },
  },
  Xl = nt("tooltip-bg"),
  Af = nt("tooltip-fg"),
  B$ = nt("popper-arrow-bg"),
  V$ = {
    bg: Xl.reference,
    color: Af.reference,
    [Xl.variable]: "colors.gray.700",
    [Af.variable]: "colors.whiteAlpha.900",
    _dark: {
      [Xl.variable]: "colors.gray.300",
      [Af.variable]: "colors.gray.900",
    },
    [B$.variable]: Xl.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  W$ = { baseStyle: V$ },
  { defineMultiStyleConfig: U$, definePartsStyle: Za } = _e(nI.keys),
  H$ = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = q(ly(), ly("1rem", "rgba(0,0,0,0.1)"))(e),
      a = q(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Pt(n, a)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: s } : { bgColor: a }) };
  },
  G$ = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  K$ = (e) => ({ bg: q("gray.100", "whiteAlpha.300")(e) }),
  q$ = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...H$(e),
  }),
  Y$ = Za((e) => ({ label: G$, filledTrack: q$(e), track: K$(e) })),
  X$ = {
    xs: Za({ track: { h: "1" } }),
    sm: Za({ track: { h: "2" } }),
    md: Za({ track: { h: "3" } }),
    lg: Za({ track: { h: "4" } }),
  },
  Q$ = U$({
    sizes: X$,
    baseStyle: Y$,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Z$ = (e) => typeof e == "function";
function Et(e, ...t) {
  return Z$(e) ? e(...t) : e;
}
var { definePartsStyle: $u, defineMultiStyleConfig: J$ } = _e(HR.keys),
  fs = Y("checkbox-size"),
  eM = (e) => {
    const { colorScheme: t } = e;
    return {
      w: fs.reference,
      h: fs.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: q(`${t}.500`, `${t}.200`)(e),
        borderColor: q(`${t}.500`, `${t}.200`)(e),
        color: q("white", "gray.900")(e),
        _hover: {
          bg: q(`${t}.600`, `${t}.300`)(e),
          borderColor: q(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: q("gray.200", "transparent")(e),
          bg: q("gray.200", "whiteAlpha.300")(e),
          color: q("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: q(`${t}.500`, `${t}.200`)(e),
        borderColor: q(`${t}.500`, `${t}.200`)(e),
        color: q("white", "gray.900")(e),
      },
      _disabled: {
        bg: q("gray.100", "whiteAlpha.100")(e),
        borderColor: q("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: q("red.500", "red.300")(e) },
    };
  },
  tM = { _disabled: { cursor: "not-allowed" } },
  nM = { userSelect: "none", _disabled: { opacity: 0.4 } },
  rM = { transitionProperty: "transform", transitionDuration: "normal" },
  oM = $u((e) => ({ icon: rM, container: tM, control: Et(eM, e), label: nM })),
  iM = {
    sm: $u({
      control: { [fs.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: $u({
      control: { [fs.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: $u({
      control: { [fs.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  gc = J$({
    baseStyle: oM,
    sizes: iM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: aM, definePartsStyle: Mu } = _e(rI.keys),
  sM = (e) => {
    var t;
    const n = (t = Et(gc.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: "full",
      _checked: {
        ...(n == null ? void 0 : n._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  lM = Mu((e) => {
    var t, n, r, o;
    return {
      label: (n = (t = gc).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (o = (r = gc).baseStyle) == null ? void 0 : o.call(r, e).container,
      control: sM(e),
    };
  }),
  uM = {
    md: Mu({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Mu({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Mu({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  cM = aM({
    baseStyle: lM,
    sizes: uM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: dM, definePartsStyle: fM } = _e(oI.keys),
  Ql = Y("select-bg"),
  Py,
  pM = {
    ...((Py = ve.baseStyle) == null ? void 0 : Py.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: Ql.reference,
    [Ql.variable]: "colors.white",
    _dark: { [Ql.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: Ql.reference },
  },
  hM = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  mM = fM({ field: pM, icon: hM }),
  Zl = { paddingInlineEnd: "8" },
  Ty,
  Ey,
  jy,
  Ay,
  Ry,
  Iy,
  $y,
  My,
  vM = {
    lg: {
      ...((Ty = ve.sizes) == null ? void 0 : Ty.lg),
      field: { ...((Ey = ve.sizes) == null ? void 0 : Ey.lg.field), ...Zl },
    },
    md: {
      ...((jy = ve.sizes) == null ? void 0 : jy.md),
      field: { ...((Ay = ve.sizes) == null ? void 0 : Ay.md.field), ...Zl },
    },
    sm: {
      ...((Ry = ve.sizes) == null ? void 0 : Ry.sm),
      field: { ...((Iy = ve.sizes) == null ? void 0 : Iy.sm.field), ...Zl },
    },
    xs: {
      ...(($y = ve.sizes) == null ? void 0 : $y.xs),
      field: { ...((My = ve.sizes) == null ? void 0 : My.xs.field), ...Zl },
      icon: { insetEnd: "1" },
    },
  },
  gM = dM({
    baseStyle: mM,
    sizes: vM,
    variants: ve.variants,
    defaultProps: ve.defaultProps,
  }),
  Rf = Y("skeleton-start-color"),
  If = Y("skeleton-end-color"),
  yM = {
    [Rf.variable]: "colors.gray.100",
    [If.variable]: "colors.gray.400",
    _dark: {
      [Rf.variable]: "colors.gray.800",
      [If.variable]: "colors.gray.600",
    },
    background: Rf.reference,
    borderColor: If.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  xM = { baseStyle: yM },
  $f = Y("skip-link-bg"),
  bM = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [$f.variable]: "colors.white",
      _dark: { [$f.variable]: "colors.gray.700" },
      bg: $f.reference,
    },
  },
  SM = { baseStyle: bM },
  { defineMultiStyleConfig: wM, definePartsStyle: yd } = _e(iI.keys),
  Hs = Y("slider-thumb-size"),
  Gs = Y("slider-track-size"),
  zr = Y("slider-bg"),
  CM = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...pv({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  kM = (e) => ({
    ...pv({
      orientation: e.orientation,
      horizontal: { h: Gs.reference },
      vertical: { w: Gs.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [zr.variable]: "colors.gray.200",
    _dark: { [zr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [zr.variable]: "colors.gray.300",
      _dark: { [zr.variable]: "colors.whiteAlpha.300" },
    },
    bg: zr.reference,
  }),
  _M = (e) => {
    const { orientation: t } = e;
    return {
      ...pv({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: Hs.reference,
      h: Hs.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  PM = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [zr.variable]: `colors.${t}.500`,
      _dark: { [zr.variable]: `colors.${t}.200` },
      bg: zr.reference,
    };
  },
  TM = yd((e) => ({
    container: CM(e),
    track: kM(e),
    thumb: _M(e),
    filledTrack: PM(e),
  })),
  EM = yd({
    container: { [Hs.variable]: "sizes.4", [Gs.variable]: "sizes.1" },
  }),
  jM = yd({
    container: { [Hs.variable]: "sizes.3.5", [Gs.variable]: "sizes.1" },
  }),
  AM = yd({
    container: { [Hs.variable]: "sizes.2.5", [Gs.variable]: "sizes.0.5" },
  }),
  RM = { lg: EM, md: jM, sm: AM },
  IM = wM({
    baseStyle: TM,
    sizes: RM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Co = nt("spinner-size"),
  $M = { width: [Co.reference], height: [Co.reference] },
  MM = {
    xs: { [Co.variable]: "sizes.3" },
    sm: { [Co.variable]: "sizes.4" },
    md: { [Co.variable]: "sizes.6" },
    lg: { [Co.variable]: "sizes.8" },
    xl: { [Co.variable]: "sizes.12" },
  },
  OM = { baseStyle: $M, sizes: MM, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: NM, definePartsStyle: Mw } = _e(aI.keys),
  DM = { fontWeight: "medium" },
  zM = { opacity: 0.8, marginBottom: "2" },
  FM = { verticalAlign: "baseline", fontWeight: "semibold" },
  LM = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  BM = Mw({ container: {}, label: DM, helpText: zM, number: FM, icon: LM }),
  VM = {
    md: Mw({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  WM = NM({ baseStyle: BM, sizes: VM, defaultProps: { size: "md" } }),
  Mf = Y("kbd-bg"),
  UM = {
    [Mf.variable]: "colors.gray.100",
    _dark: { [Mf.variable]: "colors.whiteAlpha.100" },
    bg: Mf.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  HM = { baseStyle: UM },
  GM = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  KM = { baseStyle: GM },
  { defineMultiStyleConfig: qM, definePartsStyle: YM } = _e(QR.keys),
  XM = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  QM = YM({ icon: XM }),
  ZM = qM({ baseStyle: QM }),
  { defineMultiStyleConfig: JM, definePartsStyle: eO } = _e(ZR.keys),
  Fn = Y("menu-bg"),
  Of = Y("menu-shadow"),
  tO = {
    [Fn.variable]: "#fff",
    [Of.variable]: "shadows.sm",
    _dark: {
      [Fn.variable]: "colors.gray.700",
      [Of.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: Fn.reference,
    boxShadow: Of.reference,
  },
  nO = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [Fn.variable]: "colors.gray.100",
      _dark: { [Fn.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Fn.variable]: "colors.gray.200",
      _dark: { [Fn.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [Fn.variable]: "colors.gray.100",
      _dark: { [Fn.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: Fn.reference,
  },
  rO = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  oO = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  iO = { opacity: 0.6 },
  aO = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  sO = { transitionProperty: "common", transitionDuration: "normal" },
  lO = eO({
    button: sO,
    list: tO,
    item: nO,
    groupTitle: rO,
    icon: oO,
    command: iO,
    divider: aO,
  }),
  uO = JM({ baseStyle: lO }),
  { defineMultiStyleConfig: cO, definePartsStyle: wh } = _e(JR.keys),
  Nf = Y("modal-bg"),
  Df = Y("modal-shadow"),
  dO = { bg: "blackAlpha.600", zIndex: "modal" },
  fO = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  pO = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Nf.variable]: "colors.white",
      [Df.variable]: "shadows.lg",
      _dark: {
        [Nf.variable]: "colors.gray.700",
        [Df.variable]: "shadows.dark-lg",
      },
      bg: Nf.reference,
      boxShadow: Df.reference,
    };
  },
  hO = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  mO = { position: "absolute", top: "2", insetEnd: "3" },
  vO = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  gO = { px: "6", py: "4" },
  yO = wh((e) => ({
    overlay: dO,
    dialogContainer: Et(fO, e),
    dialog: Et(pO, e),
    header: hO,
    closeButton: mO,
    body: Et(vO, e),
    footer: gO,
  }));
function wn(e) {
  return wh(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var xO = {
    xs: wn("xs"),
    sm: wn("sm"),
    md: wn("md"),
    lg: wn("lg"),
    xl: wn("xl"),
    "2xl": wn("2xl"),
    "3xl": wn("3xl"),
    "4xl": wn("4xl"),
    "5xl": wn("5xl"),
    "6xl": wn("6xl"),
    full: wn("full"),
  },
  bO = cO({ baseStyle: yO, sizes: xO, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: SO, definePartsStyle: Ow } = _e(eI.keys),
  mv = nt("number-input-stepper-width"),
  Nw = nt("number-input-input-padding"),
  wO = sr(mv).add("0.5rem").toString(),
  zf = nt("number-input-bg"),
  Ff = nt("number-input-color"),
  Lf = nt("number-input-border-color"),
  CO = { [mv.variable]: "sizes.6", [Nw.variable]: wO },
  kO = (e) => {
    var t, n;
    return (n = (t = Et(ve.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  _O = { width: mv.reference },
  PO = {
    borderStart: "1px solid",
    borderStartColor: Lf.reference,
    color: Ff.reference,
    bg: zf.reference,
    [Ff.variable]: "colors.chakra-body-text",
    [Lf.variable]: "colors.chakra-border-color",
    _dark: {
      [Ff.variable]: "colors.whiteAlpha.800",
      [Lf.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [zf.variable]: "colors.gray.200",
      _dark: { [zf.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  TO = Ow((e) => {
    var t;
    return {
      root: CO,
      field: (t = Et(kO, e)) != null ? t : {},
      stepperGroup: _O,
      stepper: PO,
    };
  });
function Jl(e) {
  var t, n, r;
  const o = (t = ve.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md",
    s = jw.fontSizes[a];
  return Ow({
    field: { ...o.field, paddingInlineEnd: Nw.reference, verticalAlign: "top" },
    stepper: {
      fontSize: sr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var EO = { xs: Jl("xs"), sm: Jl("sm"), md: Jl("md"), lg: Jl("lg") },
  jO = SO({
    baseStyle: TO,
    sizes: EO,
    variants: ve.variants,
    defaultProps: ve.defaultProps,
  }),
  Oy,
  AO = {
    ...((Oy = ve.baseStyle) == null ? void 0 : Oy.field),
    textAlign: "center",
  },
  RO = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Ny,
  Dy,
  IO = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = Et((t = ve.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = Et((t = ve.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = Et((t = ve.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (Dy = (Ny = ve.variants) == null ? void 0 : Ny.unstyled.field) != null
        ? Dy
        : {},
  },
  $O = {
    baseStyle: AO,
    sizes: RO,
    variants: IO,
    defaultProps: ve.defaultProps,
  },
  { defineMultiStyleConfig: MO, definePartsStyle: OO } = _e(tI.keys),
  eu = nt("popper-bg"),
  NO = nt("popper-arrow-bg"),
  zy = nt("popper-arrow-shadow-color"),
  DO = { zIndex: 10 },
  zO = {
    [eu.variable]: "colors.white",
    bg: eu.reference,
    [NO.variable]: eu.reference,
    [zy.variable]: "colors.gray.200",
    _dark: {
      [eu.variable]: "colors.gray.700",
      [zy.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  FO = { px: 3, py: 2, borderBottomWidth: "1px" },
  LO = { px: 3, py: 2 },
  BO = { px: 3, py: 2, borderTopWidth: "1px" },
  VO = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  WO = OO({
    popper: DO,
    content: zO,
    header: FO,
    body: LO,
    footer: BO,
    closeButton: VO,
  }),
  UO = MO({ baseStyle: WO }),
  { definePartsStyle: Ch, defineMultiStyleConfig: HO } = _e(GR.keys),
  Bf = Y("drawer-bg"),
  Vf = Y("drawer-box-shadow");
function li(e) {
  return Ch(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var GO = { bg: "blackAlpha.600", zIndex: "overlay" },
  KO = { display: "flex", zIndex: "modal", justifyContent: "center" },
  qO = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Bf.variable]: "colors.white",
      [Vf.variable]: "shadows.lg",
      _dark: {
        [Bf.variable]: "colors.gray.700",
        [Vf.variable]: "shadows.dark-lg",
      },
      bg: Bf.reference,
      boxShadow: Vf.reference,
    };
  },
  YO = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  XO = { position: "absolute", top: "2", insetEnd: "3" },
  QO = { px: "6", py: "2", flex: "1", overflow: "auto" },
  ZO = { px: "6", py: "4" },
  JO = Ch((e) => ({
    overlay: GO,
    dialogContainer: KO,
    dialog: Et(qO, e),
    header: YO,
    closeButton: XO,
    body: QO,
    footer: ZO,
  })),
  eN = {
    xs: li("xs"),
    sm: li("md"),
    md: li("lg"),
    lg: li("2xl"),
    xl: li("4xl"),
    full: li("full"),
  },
  tN = HO({ baseStyle: JO, sizes: eN, defaultProps: { size: "xs" } }),
  { definePartsStyle: nN, defineMultiStyleConfig: rN } = _e(KR.keys),
  oN = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  iN = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  aN = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  sN = nN({ preview: oN, input: iN, textarea: aN }),
  lN = rN({ baseStyle: sN }),
  { definePartsStyle: uN, defineMultiStyleConfig: cN } = _e(qR.keys),
  Gi = Y("form-control-color"),
  dN = {
    marginStart: "1",
    [Gi.variable]: "colors.red.500",
    _dark: { [Gi.variable]: "colors.red.300" },
    color: Gi.reference,
  },
  fN = {
    mt: "2",
    [Gi.variable]: "colors.gray.600",
    _dark: { [Gi.variable]: "colors.whiteAlpha.600" },
    color: Gi.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  pN = uN({
    container: { width: "100%", position: "relative" },
    requiredIndicator: dN,
    helperText: fN,
  }),
  hN = cN({ baseStyle: pN }),
  { definePartsStyle: mN, defineMultiStyleConfig: vN } = _e(YR.keys),
  Ki = Y("form-error-color"),
  gN = {
    [Ki.variable]: "colors.red.500",
    _dark: { [Ki.variable]: "colors.red.300" },
    color: Ki.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  yN = {
    marginEnd: "0.5em",
    [Ki.variable]: "colors.red.500",
    _dark: { [Ki.variable]: "colors.red.300" },
    color: Ki.reference,
  },
  xN = mN({ text: gN, icon: yN }),
  bN = vN({ baseStyle: xN }),
  SN = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  wN = { baseStyle: SN },
  CN = { fontFamily: "heading", fontWeight: "bold" },
  kN = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  _N = { baseStyle: CN, sizes: kN, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: PN, definePartsStyle: TN } = _e(UR.keys),
  Wf = Y("breadcrumb-link-decor"),
  EN = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Wf.reference,
    [Wf.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Wf.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  jN = TN({ link: EN }),
  AN = PN({ baseStyle: jN }),
  RN = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  Dw = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: q("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: q("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: q("gray.200", "whiteAlpha.300")(e) },
      };
    const r = la(`${t}.200`, 0.12)(n),
      o = la(`${t}.200`, 0.24)(n);
    return {
      color: q(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: q(`${t}.50`, r)(e) },
      _active: { bg: q(`${t}.100`, o)(e) },
    };
  },
  IN = (e) => {
    const { colorScheme: t } = e,
      n = q("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...Et(Dw, e),
    };
  },
  $N = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  MN = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === "gray") {
      const l = q("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: q("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: q("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: q("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: o = "white",
        hoverBg: i = `${n}.600`,
        activeBg: a = `${n}.700`,
      } = (t = $N[n]) != null ? t : {},
      s = q(r, `${n}.200`)(e);
    return {
      bg: s,
      color: q(o, "gray.800")(e),
      _hover: { bg: q(i, `${n}.300`)(e), _disabled: { bg: s } },
      _active: { bg: q(a, `${n}.400`)(e) },
    };
  },
  ON = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: q(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: q(`${t}.700`, `${t}.500`)(e) },
    };
  },
  NN = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  DN = { ghost: Dw, outline: IN, solid: MN, link: ON, unstyled: NN },
  zN = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  FN = {
    baseStyle: RN,
    variants: DN,
    sizes: zN,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Mo, defineMultiStyleConfig: LN } = _e(dI.keys),
  yc = Y("card-bg"),
  hr = Y("card-padding"),
  zw = Y("card-shadow"),
  Ou = Y("card-radius"),
  Fw = Y("card-border-width", "0"),
  Lw = Y("card-border-color"),
  BN = Mo({
    container: {
      [yc.variable]: "colors.chakra-body-bg",
      backgroundColor: yc.reference,
      boxShadow: zw.reference,
      borderRadius: Ou.reference,
      color: "chakra-body-text",
      borderWidth: Fw.reference,
      borderColor: Lw.reference,
    },
    body: { padding: hr.reference, flex: "1 1 0%" },
    header: { padding: hr.reference },
    footer: { padding: hr.reference },
  }),
  VN = {
    sm: Mo({
      container: { [Ou.variable]: "radii.base", [hr.variable]: "space.3" },
    }),
    md: Mo({
      container: { [Ou.variable]: "radii.md", [hr.variable]: "space.5" },
    }),
    lg: Mo({
      container: { [Ou.variable]: "radii.xl", [hr.variable]: "space.7" },
    }),
  },
  WN = {
    elevated: Mo({
      container: {
        [zw.variable]: "shadows.base",
        _dark: { [yc.variable]: "colors.gray.700" },
      },
    }),
    outline: Mo({
      container: {
        [Fw.variable]: "1px",
        [Lw.variable]: "colors.chakra-border-color",
      },
    }),
    filled: Mo({ container: { [yc.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [hr.variable]: 0 },
      header: { [hr.variable]: 0 },
      footer: { [hr.variable]: 0 },
    },
  },
  UN = LN({
    baseStyle: BN,
    variants: WN,
    sizes: VN,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  ps = nt("close-button-size"),
  La = nt("close-button-bg"),
  HN = {
    w: [ps.reference],
    h: [ps.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [La.variable]: "colors.blackAlpha.100",
      _dark: { [La.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [La.variable]: "colors.blackAlpha.200",
      _dark: { [La.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: La.reference,
  },
  GN = {
    lg: { [ps.variable]: "sizes.10", fontSize: "md" },
    md: { [ps.variable]: "sizes.8", fontSize: "xs" },
    sm: { [ps.variable]: "sizes.6", fontSize: "2xs" },
  },
  KN = { baseStyle: HN, sizes: GN, defaultProps: { size: "md" } },
  { variants: qN, defaultProps: YN } = ds,
  XN = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Ke.bg.reference,
    color: Ke.color.reference,
    boxShadow: Ke.shadow.reference,
  },
  QN = { baseStyle: XN, variants: qN, defaultProps: YN },
  ZN = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  JN = { baseStyle: ZN },
  eD = { opacity: 0.6, borderColor: "inherit" },
  tD = { borderStyle: "solid" },
  nD = { borderStyle: "dashed" },
  rD = { solid: tD, dashed: nD },
  oD = { baseStyle: eD, variants: rD, defaultProps: { variant: "solid" } },
  { definePartsStyle: iD, defineMultiStyleConfig: aD } = _e(BR.keys),
  sD = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  lD = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  uD = { pt: "2", px: "4", pb: "5" },
  cD = { fontSize: "1.25em" },
  dD = iD({ container: sD, button: lD, panel: uD, icon: cD }),
  fD = aD({ baseStyle: dD }),
  { definePartsStyle: cl, defineMultiStyleConfig: pD } = _e(VR.keys),
  qt = Y("alert-fg"),
  wr = Y("alert-bg"),
  hD = cl({
    container: { bg: wr.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: qt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: qt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function vv(e) {
  const { theme: t, colorScheme: n } = e,
    r = la(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var mD = cl((e) => {
    const { colorScheme: t } = e,
      n = vv(e);
    return {
      container: {
        [qt.variable]: `colors.${t}.500`,
        [wr.variable]: n.light,
        _dark: { [qt.variable]: `colors.${t}.200`, [wr.variable]: n.dark },
      },
    };
  }),
  vD = cl((e) => {
    const { colorScheme: t } = e,
      n = vv(e);
    return {
      container: {
        [qt.variable]: `colors.${t}.500`,
        [wr.variable]: n.light,
        _dark: { [qt.variable]: `colors.${t}.200`, [wr.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: qt.reference,
      },
    };
  }),
  gD = cl((e) => {
    const { colorScheme: t } = e,
      n = vv(e);
    return {
      container: {
        [qt.variable]: `colors.${t}.500`,
        [wr.variable]: n.light,
        _dark: { [qt.variable]: `colors.${t}.200`, [wr.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: qt.reference,
      },
    };
  }),
  yD = cl((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [qt.variable]: "colors.white",
        [wr.variable]: `colors.${t}.500`,
        _dark: {
          [qt.variable]: "colors.gray.900",
          [wr.variable]: `colors.${t}.200`,
        },
        color: qt.reference,
      },
    };
  }),
  xD = { subtle: mD, "left-accent": vD, "top-accent": gD, solid: yD },
  bD = pD({
    baseStyle: hD,
    variants: xD,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: Bw, defineMultiStyleConfig: SD } = _e(WR.keys),
  qi = Y("avatar-border-color"),
  hs = Y("avatar-bg"),
  Ks = Y("avatar-font-size"),
  ua = Y("avatar-size"),
  wD = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: qi.reference,
    [qi.variable]: "white",
    _dark: { [qi.variable]: "colors.gray.800" },
  },
  CD = {
    bg: hs.reference,
    fontSize: Ks.reference,
    width: ua.reference,
    height: ua.reference,
    lineHeight: "1",
    [hs.variable]: "colors.gray.200",
    _dark: { [hs.variable]: "colors.whiteAlpha.400" },
  },
  kD = (e) => {
    const { name: t, theme: n } = e,
      r = t ? RI({ string: t }) : "colors.gray.400",
      o = jI(r)(n);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: hs.reference,
        fontSize: Ks.reference,
        color: i,
        borderColor: qi.reference,
        verticalAlign: "top",
        width: ua.reference,
        height: ua.reference,
        "&:not([data-loaded])": { [hs.variable]: r },
        [qi.variable]: "colors.white",
        _dark: { [qi.variable]: "colors.gray.800" },
      }
    );
  },
  _D = { fontSize: Ks.reference, lineHeight: "1" },
  PD = Bw((e) => ({
    badge: Et(wD, e),
    excessLabel: Et(CD, e),
    container: Et(kD, e),
    label: _D,
  }));
function Ar(e) {
  const t = e !== "100%" ? Rw[e] : void 0;
  return Bw({
    container: {
      [ua.variable]: t ?? e,
      [Ks.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [ua.variable]: t ?? e,
      [Ks.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var TD = {
    "2xs": Ar(4),
    xs: Ar(6),
    sm: Ar(8),
    md: Ar(12),
    lg: Ar(16),
    xl: Ar(24),
    "2xl": Ar(32),
    full: Ar("100%"),
  },
  ED = SD({ baseStyle: PD, sizes: TD, defaultProps: { size: "md" } }),
  jD = {
    Accordion: fD,
    Alert: bD,
    Avatar: ED,
    Badge: ds,
    Breadcrumb: AN,
    Button: FN,
    Checkbox: gc,
    CloseButton: KN,
    Code: QN,
    Container: JN,
    Divider: oD,
    Drawer: tN,
    Editable: lN,
    Form: hN,
    FormError: bN,
    FormLabel: wN,
    Heading: _N,
    Input: ve,
    Kbd: HM,
    Link: KM,
    List: ZM,
    Menu: uO,
    Modal: bO,
    NumberInput: jO,
    PinInput: $O,
    Popover: UO,
    Progress: Q$,
    Radio: cM,
    Select: gM,
    Skeleton: xM,
    SkipLink: SM,
    Slider: IM,
    Spinner: OM,
    Stat: WM,
    Switch: KI,
    Table: e$,
    Tabs: m$,
    Tag: E$,
    Textarea: L$,
    Tooltip: W$,
    Card: UN,
    Stepper: LR,
  },
  AD = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  RD = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  ID = "ltr",
  $D = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  MD = {
    semanticTokens: AD,
    direction: ID,
    ...DR,
    components: jD,
    styles: RD,
    config: $D,
  };
function OD() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var ND = OD();
function DD(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function zD(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var FD = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  Vw = FD(zD);
function Ww(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var Uw = (e) => Ww(e, (t) => t != null);
function LD(e) {
  return typeof e == "function";
}
function Hw(e, ...t) {
  return LD(e) ? e(...t) : e;
}
function BD(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var VD = typeof Element < "u",
  WD = typeof Map == "function",
  UD = typeof Set == "function",
  HD = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Nu(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Nu(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (WD && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Nu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (UD && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (HD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (VD && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Nu(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var GD = function (t, n) {
  try {
    return Nu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const KD = tm(GD);
function Gw(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = Sw(),
    s = e ? Vw(i, `components.${e}`) : void 0,
    l = r || s,
    u = Gn(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      Uw(DD(o, ["children"]))
    ),
    c = m.useRef({});
  if (l) {
    const f = pR(l)(u);
    KD(c.current, f) || (c.current = f);
  }
  return c.current;
}
function In(e, t = {}) {
  return Gw(e, t);
}
function xn(e, t = {}) {
  return Gw(e, t);
}
var qD = new Set([
    ...tR,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  YD = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function XD(e) {
  return YD.has(e) || !qD.has(e);
}
function QD(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
function Kw(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var ZD =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  JD = rw(function (e) {
    return (
      ZD.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  e3 = JD,
  t3 = function (t) {
    return t !== "theme";
  },
  Fy = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? e3 : t3;
  },
  Ly = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  n3 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      uw(n, r, o),
      j5(function () {
        return cw(n, r, o);
      }),
      null
    );
  },
  r3 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = Ly(t, n, r),
      l = s || Fy(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var x = hw(function (g, S, y) {
        var v = (u && g.as) || o,
          b = "",
          C = [],
          k = g;
        if (g.theme == null) {
          k = {};
          for (var T in g) k[T] = g[T];
          k.theme = m.useContext(Ws);
        }
        typeof g.className == "string"
          ? (b = w5(S.registered, C, g.className))
          : g.className != null && (b = g.className + " ");
        var _ = iv(d.concat(C), S.registered, k);
        (b += S.key + "-" + _.name), a !== void 0 && (b += " " + a);
        var j = u && s === void 0 ? Fy(v) : l,
          I = {};
        for (var A in g) (u && A === "as") || (j(A) && (I[A] = g[A]));
        return (
          (I.className = b),
          (I.ref = y),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(n3, {
              cache: S,
              serialized: _,
              isStringTag: typeof v == "string",
            }),
            m.createElement(v, I)
          )
        );
      });
      return (
        (x.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = o),
        (x.__emotion_styles = d),
        (x.__emotion_forwardProp = s),
        Object.defineProperty(x, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (x.withComponent = function (g, S) {
          return e(g, Uo({}, n, S, { shouldForwardProp: Ly(x, S, !0) })).apply(
            void 0,
            d
          );
        }),
        x
      );
    };
  },
  o3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  xc = r3.bind();
o3.forEach(function (e) {
  xc[e] = xc(e);
});
var By,
  i3 = (By = xc.default) != null ? By : xc,
  a3 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = Ww(a, (d, f) => rR(f)),
        l = Hw(e, t),
        u = QD({}, o, l, Uw(s), i),
        c = Ew(u)(t.theme);
      return r ? [c, r] : c;
    };
function Uf(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = XD);
  const o = a3({ baseStyle: n }),
    i = i3(e, r)(o);
  return Zr.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = lv();
    return Zr.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function s3() {
  const e = new Map();
  return new Proxy(Uf, {
    apply(t, n, r) {
      return Uf(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, Uf(n)), e.get(n);
    },
  });
}
var L = s3();
function H(e) {
  return m.forwardRef(e);
}
function l3(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = m.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = m.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function u3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = m.useMemo(() => ZA(n), [n]);
  return p.jsxs(I5, { theme: o, children: [p.jsx(c3, { root: t }), r] });
}
function c3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return p.jsx(hd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
l3({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function d3() {
  const { colorMode: e } = lv();
  return p.jsx(hd, {
    styles: (t) => {
      const n = Vw(t, "styles.global"),
        r = Hw(n, { theme: t, colorMode: e });
      return r ? Ew(r)(t) : void 0;
    },
  });
}
var qw = m.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
qw.displayName = "EnvironmentContext";
function Yw(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = m.useRef(null),
    i = m.useMemo(
      () =>
        n || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    a = !r || !n;
  return p.jsxs(qw.Provider, {
    value: i,
    children: [
      t,
      a && p.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
Yw.displayName = "EnvironmentProvider";
var f3 = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = p.jsx(Yw, { environment: s, disabled: u, children: t });
    return p.jsx(u3, {
      theme: a,
      cssVarsRoot: l,
      children: p.jsxs(bw, {
        colorModeManager: n,
        options: a.config,
        children: [
          i ? p.jsx(N5, { scope: o }) : p.jsx(O5, {}),
          !c && p.jsx(d3, {}),
          r ? p.jsx(gw, { zIndex: r, children: d }) : d,
        ],
      }),
    });
  },
  p3 = (e, t) => e.find((n) => n.id === t);
function Vy(e, t) {
  const n = Xw(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function Xw(e, t) {
  for (const [n, r] of Object.entries(e)) if (p3(r, t)) return n;
}
function h3(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function m3(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a,
  };
}
function _t(e, t = []) {
  const n = m.useRef(e);
  return (
    m.useEffect(() => {
      n.current = e;
    }),
    m.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function v3(e, t) {
  const n = _t(e);
  m.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function ca(e, t) {
  const n = m.useRef(!1),
    r = m.useRef(!1);
  m.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    m.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const Qw = m.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  xd = m.createContext({}),
  dl = m.createContext(null),
  bd = typeof document < "u",
  bc = bd ? m.useLayoutEffect : m.useEffect,
  Zw = m.createContext({ strict: !1 });
function g3(e, t, n, r) {
  const { visualElement: o } = m.useContext(xd),
    i = m.useContext(Zw),
    a = m.useContext(dl),
    s = m.useContext(Qw).reducedMotion,
    l = m.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  return (
    m.useInsertionEffect(() => {
      u && u.update(n, a);
    }),
    bc(() => {
      u && u.render();
    }),
    m.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? bc : m.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Ii(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function y3(e, t, n) {
  return m.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ii(n) && (n.current = r));
    },
    [t]
  );
}
function qs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Sd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const gv = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  yv = ["initial", ...gv];
function wd(e) {
  return Sd(e.animate) || yv.some((t) => qs(e[t]));
}
function Jw(e) {
  return !!(wd(e) || e.variants);
}
function x3(e, t) {
  if (wd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || qs(n) ? n : void 0,
      animate: qs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function b3(e) {
  const { initial: t, animate: n } = x3(e, m.useContext(xd));
  return m.useMemo(() => ({ initial: t, animate: n }), [Wy(t), Wy(n)]);
}
function Wy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Uy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ys = {};
for (const e in Uy) Ys[e] = { isEnabled: (t) => Uy[e].some((n) => !!t[n]) };
function S3(e) {
  for (const t in e) Ys[t] = { ...Ys[t], ...e[t] };
}
const xv = m.createContext({}),
  eC = m.createContext({}),
  w3 = Symbol.for("motionComponentSymbol");
function C3({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && S3(e);
  function i(s, l) {
    let u;
    const c = { ...m.useContext(Qw), ...s, layoutId: k3(s) },
      { isStatic: d } = c,
      f = b3(s),
      h = r(s, d);
    if (!d && bd) {
      f.visualElement = g3(o, h, c, t);
      const x = m.useContext(eC),
        g = m.useContext(Zw).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, g, e, x));
    }
    return m.createElement(
      xd.Provider,
      { value: f },
      u && f.visualElement
        ? m.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, s, y3(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const a = m.forwardRef(i);
  return (a[w3] = o), a;
}
function k3({ layoutId: e }) {
  const t = m.useContext(xv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function _3(e) {
  function t(r, o = {}) {
    return C3(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const P3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function bv(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(P3.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Sc = {};
function T3(e) {
  Object.assign(Sc, e);
}
const fl = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Xo = new Set(fl);
function tC(e, { layout: t, layoutId: n }) {
  return (
    Xo.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Sc[e] || e === "opacity"))
  );
}
const Bt = (e) => !!(e && e.getVelocity),
  E3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  j3 = fl.length;
function A3(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let a = 0; a < j3; a++) {
    const s = fl[a];
    if (e[s] !== void 0) {
      const l = E3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const nC = (e) => (t) => typeof t == "string" && t.startsWith(e),
  rC = nC("--"),
  kh = nC("var(--"),
  R3 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  I3 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  to = (e, t, n) => Math.min(Math.max(n, e), t),
  Qo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ms = { ...Qo, transform: (e) => to(0, 1, e) },
  tu = { ...Qo, default: 1 },
  vs = (e) => Math.round(e * 1e5) / 1e5,
  Cd = /(-)?([\d]*\.?[\d])+/g,
  oC =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  $3 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function pl(e) {
  return typeof e == "string";
}
const hl = (e) => ({
    test: (t) => pl(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rr = hl("deg"),
  Qn = hl("%"),
  J = hl("px"),
  M3 = hl("vh"),
  O3 = hl("vw"),
  Hy = {
    ...Qn,
    parse: (e) => Qn.parse(e) / 100,
    transform: (e) => Qn.transform(e * 100),
  },
  Gy = { ...Qo, transform: Math.round },
  iC = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    radius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    size: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    rotate: Rr,
    rotateX: Rr,
    rotateY: Rr,
    rotateZ: Rr,
    scale: tu,
    scaleX: tu,
    scaleY: tu,
    scaleZ: tu,
    skew: Rr,
    skewX: Rr,
    skewY: Rr,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: ms,
    originX: Hy,
    originY: Hy,
    originZ: J,
    zIndex: Gy,
    fillOpacity: ms,
    strokeOpacity: ms,
    numOctaves: Gy,
  };
function Sv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (rC(d)) {
      i[d] = f;
      continue;
    }
    const h = iC[d],
      x = I3(f, h);
    if (Xo.has(d)) {
      if (((l = !0), (a[d] = x), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = x)) : (o[d] = x);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = A3(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const wv = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function aC(e, t, n) {
  for (const r in t) !Bt(t[r]) && !tC(r, n) && (e[r] = t[r]);
}
function N3({ transformTemplate: e }, t, n) {
  return m.useMemo(() => {
    const r = wv();
    return (
      Sv(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function D3(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    aC(o, r, e),
    Object.assign(o, N3(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function z3(e, t, n) {
  const r = {},
    o = D3(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const F3 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function wc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    F3.has(e)
  );
}
let sC = (e) => !wc(e);
function L3(e) {
  e && (sC = (t) => (t.startsWith("on") ? !wc(t) : e(t)));
}
try {
  L3(require("@emotion/is-prop-valid").default);
} catch {}
function B3(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((sC(o) ||
        (n === !0 && wc(o)) ||
        (!t && !wc(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Ky(e, t, n) {
  return typeof e == "string" ? e : J.transform(t + n * e);
}
function V3(e, t, n) {
  const r = Ky(t, e.x, e.width),
    o = Ky(n, e.y, e.height);
  return `${r} ${o}`;
}
const W3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  U3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function H3(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? W3 : U3;
  e[i.offset] = J.transform(-r);
  const a = J.transform(t),
    s = J.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Cv(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Sv(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: x, dimensions: g } = e;
  h.transform && (g && (x.transform = h.transform), delete h.transform),
    g &&
      (o !== void 0 || i !== void 0 || x.transform) &&
      (x.transformOrigin = V3(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    a !== void 0 && H3(h, a, s, l, !1);
}
const lC = () => ({ ...wv(), attrs: {} }),
  kv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function G3(e, t, n, r) {
  const o = m.useMemo(() => {
    const i = lC();
    return (
      Cv(i, t, { enableHardwareAcceleration: !1 }, kv(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    aC(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function K3(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (bv(n) ? G3 : z3)(r, i, a, n),
      c = { ...B3(r, typeof n == "string", e), ...l, ref: o },
      { children: d } = r,
      f = m.useMemo(() => (Bt(d) ? d.get() : d), [d]);
    return m.createElement(n, { ...c, children: f });
  };
}
const _v = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function uC(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const cC = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function dC(e, t, n, r) {
  uC(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(cC.has(o) ? o : _v(o), t.attrs[o]);
}
function Pv(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Bt(n[o]) || (t.style && Bt(t.style[o])) || tC(o, e)) && (r[o] = n[o]);
  return r;
}
function fC(e, t) {
  const n = Pv(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o =
        fl.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Tv(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function pC(e) {
  const t = m.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Cc = (e) => Array.isArray(e),
  q3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Y3 = (e) => (Cc(e) ? e[e.length - 1] || 0 : e);
function Du(e) {
  const t = Bt(e) ? e.get() : e;
  return q3(t) ? t.toValue() : t;
}
function X3(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const a = { latestValues: Q3(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const hC = (e) => (t, n) => {
  const r = m.useContext(xd),
    o = m.useContext(dl),
    i = () => X3(e, t, r, o);
  return n ? i() : pC(i);
};
function Q3(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Du(i[f]);
  let { initial: a, animate: s } = e;
  const l = wd(e),
    u = Jw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !Sd(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const x = Tv(e, h);
        if (!x) return;
        const { transitionEnd: g, transition: S, ...y } = x;
        for (const v in y) {
          let b = y[v];
          if (Array.isArray(b)) {
            const C = c ? b.length - 1 : 0;
            b = b[C];
          }
          b !== null && (o[v] = b);
        }
        for (const v in g) o[v] = g[v];
      }),
    o
  );
}
const Z3 = {
    useVisualState: hC({
      scrapeMotionValuesFromProps: fC,
      createRenderState: lC,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Cv(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          kv(t.tagName),
          e.transformTemplate
        ),
          dC(t, n);
      },
    }),
  },
  J3 = {
    useVisualState: hC({
      scrapeMotionValuesFromProps: Pv,
      createRenderState: wv,
    }),
  };
function ez(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(bv(e) ? Z3 : J3),
    preloadedFeatures: n,
    useRender: K3(t),
    createVisualElement: r,
    Component: e,
  };
}
function dr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const mC = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function kd(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const tz = (e) => (t) => mC(t) && e(t, kd(t));
function mr(e, t, n, r) {
  return dr(e, t, tz(n), r);
}
const nz = (e, t) => (n) => t(e(n)),
  Xr = (...e) => e.reduce(nz);
function vC(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const qy = vC("dragHorizontal"),
  Yy = vC("dragVertical");
function gC(e) {
  let t = !1;
  if (e === "y") t = Yy();
  else if (e === "x") t = qy();
  else {
    const n = qy(),
      r = Yy();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function yC() {
  const e = gC(!0);
  return e ? (e(), !1) : !0;
}
class so {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
const We = (e) => e;
function rz(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return (
          u && a.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const nu = ["prepare", "read", "update", "preRender", "render", "postRender"],
  oz = 40;
function iz(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = nu.reduce((d, f) => ((d[f] = rz(() => (n = !0))), d), {}),
    a = (d) => i[d].process(o),
    s = (d) => {
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, oz), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        nu.forEach(a),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(s);
    };
  return {
    schedule: nu.reduce((d, f) => {
      const h = i[f];
      return (d[f] = (x, g = !1, S = !1) => (n || l(), h.schedule(x, g, S))), d;
    }, {}),
    cancel: (d) => nu.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const {
  schedule: Me,
  cancel: Cr,
  state: gt,
  steps: Hf,
} = iz(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0);
function Xy(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.type === "touch" || yC()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && Me.update(() => s[r](i, a));
    };
  return mr(e.current, n, o, { passive: !e.getProps()[r] });
}
class az extends so {
  mount() {
    this.unmount = Xr(Xy(this.node, !0), Xy(this.node, !1));
  }
  unmount() {}
}
class sz extends so {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Xr(
      dr(this.node.current, "focus", () => this.onFocus()),
      dr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const xC = (e, t) => (t ? (e === t ? !0 : xC(e, t.parentElement)) : !1);
function Gf(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, kd(n));
}
class lz extends so {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = We),
      (this.removeEndListeners = We),
      (this.removeAccessibleListeners = We),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = mr(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Me.update(() => {
                xC(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = mr(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Xr(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Gf("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Me.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = dr(this.node.current, "keyup", a)),
              Gf("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = dr(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Gf("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = dr(this.node.current, "blur", r);
        this.removeAccessibleListeners = Xr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Me.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !yC()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Me.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = mr(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = dr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Xr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const _h = new WeakMap(),
  Kf = new WeakMap(),
  uz = (e) => {
    const t = _h.get(e.target);
    t && t(e);
  },
  cz = (e) => {
    e.forEach(uz);
  };
function dz({ root: e, ...t }) {
  const n = e || document;
  Kf.has(n) || Kf.set(n, {});
  const r = Kf.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(cz, { root: e, ...t })), r[o];
}
function fz(e, t, n) {
  const r = dz(t);
  return (
    _h.set(e, n),
    r.observe(e),
    () => {
      _h.delete(e), r.unobserve(e);
    }
  );
}
const pz = { some: 0, all: 1 };
class hz extends so {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : pz[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return fz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(mz(t, n)) && this.startObserver();
  }
  unmount() {}
}
function mz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const vz = {
  inView: { Feature: hz },
  tap: { Feature: lz },
  focus: { Feature: sz },
  hover: { Feature: az },
};
function bC(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function gz(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function yz(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function _d(e, t, n) {
  const r = e.getProps();
  return Tv(r, t, n !== void 0 ? n : r.custom, gz(e), yz(e));
}
const xz = "framerAppearId",
  bz = "data-" + _v(xz);
let Sz = We,
  Ev = We;
const Qr = (e) => e * 1e3,
  vr = (e) => e / 1e3,
  wz = { current: !1 },
  SC = (e) => Array.isArray(e) && typeof e[0] == "number";
function wC(e) {
  return !!(
    !e ||
    (typeof e == "string" && CC[e]) ||
    SC(e) ||
    (Array.isArray(e) && e.every(wC))
  );
}
const Ja = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  CC = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ja([0, 0.65, 0.55, 1]),
    circOut: Ja([0.55, 0, 1, 0.45]),
    backIn: Ja([0.31, 0.01, 0.66, -0.59]),
    backOut: Ja([0.33, 1.53, 0.69, 0.99]),
  };
function kC(e) {
  if (e) return SC(e) ? Ja(e) : Array.isArray(e) ? e.map(kC) : CC[e];
}
function Cz(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = kC(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function kz(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const _C = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  _z = 1e-7,
  Pz = 12;
function Tz(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = _C(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > _z && ++s < Pz);
  return a;
}
function ml(e, t, n, r) {
  if (e === t && n === r) return We;
  const o = (i) => Tz(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : _C(o(i), t, r));
}
const Ez = ml(0.42, 0, 1, 1),
  jz = ml(0, 0, 0.58, 1),
  PC = ml(0.42, 0, 0.58, 1),
  Az = (e) => Array.isArray(e) && typeof e[0] != "number",
  TC = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  EC = (e) => (t) => 1 - e(1 - t),
  jC = (e) => 1 - Math.sin(Math.acos(e)),
  jv = EC(jC),
  Rz = TC(jv),
  AC = ml(0.33, 1.53, 0.69, 0.99),
  Av = EC(AC),
  Iz = TC(Av),
  $z = (e) =>
    (e *= 2) < 1 ? 0.5 * Av(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Mz = {
    linear: We,
    easeIn: Ez,
    easeInOut: PC,
    easeOut: jz,
    circIn: jC,
    circInOut: Rz,
    circOut: jv,
    backIn: Av,
    backInOut: Iz,
    backOut: AC,
    anticipate: $z,
  },
  Qy = (e) => {
    if (Array.isArray(e)) {
      Ev(e.length === 4);
      const [t, n, r, o] = e;
      return ml(t, n, r, o);
    } else if (typeof e == "string") return Mz[e];
    return e;
  },
  Rv = (e, t) => (n) =>
    !!(
      (pl(n) && $3.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  RC = (e, t, n) => (r) => {
    if (!pl(r)) return r;
    const [o, i, a, s] = r.match(Cd);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  Oz = (e) => to(0, 255, e),
  qf = { ...Qo, transform: (e) => Math.round(Oz(e)) },
  Eo = {
    test: Rv("rgb", "red"),
    parse: RC("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      qf.transform(e) +
      ", " +
      qf.transform(t) +
      ", " +
      qf.transform(n) +
      ", " +
      vs(ms.transform(r)) +
      ")",
  };
function Nz(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Ph = { test: Rv("#"), parse: Nz, transform: Eo.transform },
  $i = {
    test: Rv("hsl", "hue"),
    parse: RC("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Qn.transform(vs(t)) +
      ", " +
      Qn.transform(vs(n)) +
      ", " +
      vs(ms.transform(r)) +
      ")",
  },
  Ct = {
    test: (e) => Eo.test(e) || Ph.test(e) || $i.test(e),
    parse: (e) =>
      Eo.test(e) ? Eo.parse(e) : $i.test(e) ? $i.parse(e) : Ph.parse(e),
    transform: (e) =>
      pl(e) ? e : e.hasOwnProperty("red") ? Eo.transform(e) : $i.transform(e),
  },
  De = (e, t, n) => -n * e + n * t + e;
function Yf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Dz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = Yf(l, s, e + 1 / 3)), (i = Yf(l, s, e)), (a = Yf(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const Xf = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  zz = [Ph, Eo, $i],
  Fz = (e) => zz.find((t) => t.test(e));
function Zy(e) {
  const t = Fz(e);
  let n = t.parse(e);
  return t === $i && (n = Dz(n)), n;
}
const IC = (e, t) => {
  const n = Zy(e),
    r = Zy(t),
    o = { ...n };
  return (i) => (
    (o.red = Xf(n.red, r.red, i)),
    (o.green = Xf(n.green, r.green, i)),
    (o.blue = Xf(n.blue, r.blue, i)),
    (o.alpha = De(n.alpha, r.alpha, i)),
    Eo.transform(o)
  );
};
function Lz(e) {
  var t, n;
  return (
    isNaN(e) &&
    pl(e) &&
    (((t = e.match(Cd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(oC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const $C = { regex: R3, countKey: "Vars", token: "${v}", parse: We },
  MC = { regex: oC, countKey: "Colors", token: "${c}", parse: Ct.parse },
  OC = { regex: Cd, countKey: "Numbers", token: "${n}", parse: Qo.parse };
function Qf(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function kc(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Qf(n, $C), Qf(n, MC), Qf(n, OC), n;
}
function NC(e) {
  return kc(e).values;
}
function DC(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = kc(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (s = s.replace($C.token, a[l]))
        : l < r + n
        ? (s = s.replace(MC.token, Ct.transform(a[l])))
        : (s = s.replace(OC.token, vs(a[l])));
    return s;
  };
}
const Bz = (e) => (typeof e == "number" ? 0 : e);
function Vz(e) {
  const t = NC(e);
  return DC(e)(t.map(Bz));
}
const no = {
    test: Lz,
    parse: NC,
    createTransformer: DC,
    getAnimatableNone: Vz,
  },
  zC = (e, t) => (n) => `${n > 0 ? t : e}`;
function FC(e, t) {
  return typeof e == "number"
    ? (n) => De(e, t, n)
    : Ct.test(e)
    ? IC(e, t)
    : e.startsWith("var(")
    ? zC(e, t)
    : BC(e, t);
}
const LC = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => FC(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  Wz = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = FC(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  BC = (e, t) => {
    const n = no.createTransformer(t),
      r = kc(e),
      o = kc(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? Xr(LC(r.values, o.values), n)
      : zC(e, t);
  },
  Xs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Jy = (e, t) => (n) => De(e, t, n);
function Uz(e) {
  return typeof e == "number"
    ? Jy
    : typeof e == "string"
    ? Ct.test(e)
      ? IC
      : BC
    : Array.isArray(e)
    ? LC
    : typeof e == "object"
    ? Wz
    : Jy;
}
function Hz(e, t, n) {
  const r = [],
    o = n || Uz(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || We : t;
      s = Xr(l, s);
    }
    r.push(s);
  }
  return r;
}
function VC(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Ev(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Hz(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Xs(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(to(e[0], e[i - 1], u)) : l;
}
function Gz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Xs(0, t, r);
    e.push(De(n, 1, o));
  }
}
function Kz(e) {
  const t = [0];
  return Gz(t, e.length - 1), t;
}
function qz(e, t) {
  return e.map((n) => n * t);
}
function Yz(e, t) {
  return e.map(() => t || PC).splice(0, e.length - 1);
}
function _c({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = Az(r) ? r.map(Qy) : Qy(r),
    i = { done: !1, value: t[0] },
    a = qz(n && n.length === t.length ? n : Kz(t), e),
    s = VC(a, t, { ease: Array.isArray(o) ? o : Yz(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function WC(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Xz = 5;
function UC(e, t, n) {
  const r = Math.max(t - Xz, 0);
  return WC(n - e(r), t - r);
}
const Zf = 0.001,
  Qz = 0.01,
  ex = 10,
  Zz = 0.05,
  Jz = 1;
function eF({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  Sz(e <= Qr(ex));
  let a = 1 - t;
  (a = to(Zz, Jz, a)),
    (e = to(Qz, ex, vr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            h = Th(u, a),
            x = Math.exp(-d);
          return Zf - (f / h) * x;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            g = Th(Math.pow(u, 2), a);
          return ((-o(u) + Zf > 0 ? -1 : 1) * ((f - h) * x)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Zf + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = nF(o, i, s);
  if (((e = Qr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const tF = 12;
function nF(e, t, n) {
  let r = n;
  for (let o = 1; o < tF; o++) r = r - e(r) / t(r);
  return r;
}
function Th(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const rF = ["duration", "bounce"],
  oF = ["stiffness", "damping", "mass"];
function tx(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function iF(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!tx(e, oF) && tx(e, rF)) {
    const n = eF(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function HC({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = iF(r),
    h = c ? -vr(c) : 0,
    x = l / (2 * Math.sqrt(s * u)),
    g = i - o,
    S = vr(Math.sqrt(s / u)),
    y = Math.abs(g) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let v;
  if (x < 1) {
    const b = Th(S, x);
    v = (C) => {
      const k = Math.exp(-x * S * C);
      return (
        i - k * (((h + x * S * g) / b) * Math.sin(b * C) + g * Math.cos(b * C))
      );
    };
  } else if (x === 1) v = (b) => i - Math.exp(-S * b) * (g + (h + S * g) * b);
  else {
    const b = S * Math.sqrt(x * x - 1);
    v = (C) => {
      const k = Math.exp(-x * S * C),
        T = Math.min(b * C, 300);
      return (
        i - (k * ((h + x * S * g) * Math.sinh(T) + b * g * Math.cosh(T))) / b
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (b) => {
      const C = v(b);
      if (f) a.done = b >= d;
      else {
        let k = h;
        b !== 0 && (x < 1 ? (k = UC(v, b, C)) : (k = 0));
        const T = Math.abs(k) <= n,
          _ = Math.abs(i - C) <= t;
        a.done = T && _;
      }
      return (a.value = a.done ? i : C), a;
    },
  };
}
function nx({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (j) => (s !== void 0 && j < s) || (l !== void 0 && j > l),
    x = (j) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - j) < Math.abs(l - j)
        ? s
        : l;
  let g = n * t;
  const S = d + g,
    y = a === void 0 ? S : a(S);
  y !== S && (g = y - d);
  const v = (j) => -g * Math.exp(-j / r),
    b = (j) => y + v(j),
    C = (j) => {
      const I = v(j),
        A = b(j);
      (f.done = Math.abs(I) <= u), (f.value = f.done ? y : A);
    };
  let k, T;
  const _ = (j) => {
    h(f.value) &&
      ((k = j),
      (T = HC({
        keyframes: [f.value, x(f.value)],
        velocity: UC(b, j, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let I = !1;
        return (
          !T && k === void 0 && ((I = !0), C(j), _(j)),
          k !== void 0 && j > k ? T.next(j - k) : (!I && C(j), f)
        );
      },
    }
  );
}
const aF = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Me.update(t, !0),
      stop: () => Cr(t),
      now: () => (gt.isProcessing ? gt.timestamp : performance.now()),
    };
  },
  rx = 2e4;
function ox(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < rx; ) (t += n), (r = e.next(t));
  return t >= rx ? 1 / 0 : t;
}
const sF = { decay: nx, inertia: nx, tween: _c, keyframes: _c, spring: HC };
function Pc({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = aF,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    x = !1,
    g,
    S;
  const y = () => {
    S = new Promise((F) => {
      g = F;
    });
  };
  y();
  let v;
  const b = sF[o] || _c;
  let C;
  b !== _c &&
    typeof r[0] != "number" &&
    ((C = VC([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const k = b({ ...f, keyframes: r });
  let T;
  s === "mirror" &&
    (T = b({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let _ = "idle",
    j = null,
    I = null,
    A = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = ox(k));
  const { calculatedDuration: M } = k;
  let K = 1 / 0,
    U = 1 / 0;
  M !== null && ((K = M + a), (U = K * (i + 1) - a));
  let X = 0;
  const Q = (F) => {
      if (I === null) return;
      h > 0 && (I = Math.min(I, F)),
        h < 0 && (I = Math.min(F - U / h, I)),
        j !== null ? (X = j) : (X = Math.round(F - I) * h);
      const Z = X - t * (h >= 0 ? 1 : -1),
        G = h >= 0 ? Z < 0 : Z > U;
      (X = Math.max(Z, 0)), _ === "finished" && j === null && (X = U);
      let ne = X,
        ce = k;
      if (i) {
        const Ze = X / K;
        let rt = Math.floor(Ze),
          He = Ze % 1;
        !He && Ze >= 1 && (He = 1),
          He === 1 && rt--,
          (rt = Math.min(rt, i + 1));
        const tn = !!(rt % 2);
        tn &&
          (s === "reverse"
            ? ((He = 1 - He), a && (He -= a / K))
            : s === "mirror" && (ce = T));
        let nn = to(0, 1, He);
        X > U && (nn = s === "reverse" && tn ? 1 : 0), (ne = nn * K);
      }
      const ie = G ? { done: !1, value: r[0] } : ce.next(ne);
      C && (ie.value = C(ie.value));
      let { done: Se } = ie;
      !G && M !== null && (Se = h >= 0 ? X >= U : X <= 0);
      const we = j === null && (_ === "finished" || (_ === "running" && Se));
      return d && d(ie.value), we && $(), ie;
    },
    te = () => {
      v && v.stop(), (v = void 0);
    },
    O = () => {
      (_ = "idle"), te(), g(), y(), (I = A = null);
    },
    $ = () => {
      (_ = "finished"), c && c(), te(), g();
    },
    B = () => {
      if (x) return;
      v || (v = n(Q));
      const F = v.now();
      l && l(),
        j !== null ? (I = F - j) : (!I || _ === "finished") && (I = F),
        _ === "finished" && y(),
        (A = I),
        (j = null),
        (_ = "running"),
        v.start();
    };
  e && B();
  const D = {
    then(F, Z) {
      return S.then(F, Z);
    },
    get time() {
      return vr(X);
    },
    set time(F) {
      (F = Qr(F)),
        (X = F),
        j !== null || !v || h === 0 ? (j = F) : (I = v.now() - F / h);
    },
    get duration() {
      const F = k.calculatedDuration === null ? ox(k) : k.calculatedDuration;
      return vr(F);
    },
    get speed() {
      return h;
    },
    set speed(F) {
      F === h || !v || ((h = F), (D.time = vr(X)));
    },
    get state() {
      return _;
    },
    play: B,
    pause: () => {
      (_ = "paused"), (j = X);
    },
    stop: () => {
      (x = !0), _ !== "idle" && ((_ = "idle"), u && u(), O());
    },
    cancel: () => {
      A !== null && Q(A), O();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (F) => ((I = 0), Q(F)),
  };
  return D;
}
function lF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const uF = lF(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  cF = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  ru = 10,
  dF = 2e4,
  fF = (e, t) => t.type === "spring" || e === "backgroundColor" || !wC(t.ease);
function pF(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      uF() &&
      cF.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((v) => {
      s = v;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: h } = o;
  if (fF(t, o)) {
    const v = Pc({ ...o, repeat: 0, delay: 0 });
    let b = { done: !1, value: c[0] };
    const C = [];
    let k = 0;
    for (; !b.done && k < dF; ) (b = v.sample(k)), C.push(b.value), (k += ru);
    (h = void 0), (c = C), (d = k - ru), (f = "linear");
  }
  const x = Cz(e.owner.current, t, c, { ...o, duration: d, ease: f, times: h }),
    g = () => x.cancel(),
    S = () => {
      Me.update(g), s(), u();
    };
  return (
    (x.onfinish = () => {
      e.set(kz(c, o)), r && r(), S();
    }),
    {
      then(v, b) {
        return l.then(v, b);
      },
      attachTimeline(v) {
        return (x.timeline = v), (x.onfinish = null), We;
      },
      get time() {
        return vr(x.currentTime || 0);
      },
      set time(v) {
        x.currentTime = Qr(v);
      },
      get speed() {
        return x.playbackRate;
      },
      set speed(v) {
        x.playbackRate = v;
      },
      get duration() {
        return vr(d);
      },
      play: () => {
        a || (x.play(), Cr(g));
      },
      pause: () => x.pause(),
      stop: () => {
        if (((a = !0), x.playState === "idle")) return;
        const { currentTime: v } = x;
        if (v) {
          const b = Pc({ ...o, autoplay: !1 });
          e.setWithVelocity(b.sample(v - ru).value, b.sample(v).value, ru);
        }
        S();
      },
      complete: () => x.finish(),
      cancel: S,
    }
  );
}
function hF({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: We,
      pause: We,
      stop: We,
      then: (i) => (i(), Promise.resolve()),
      cancel: We,
      complete: We,
    }
  );
  return t
    ? Pc({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const mF = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  vF = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  gF = { type: "keyframes", duration: 0.8 },
  yF = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  xF = (e, { keyframes: t }) =>
    t.length > 2
      ? gF
      : Xo.has(e)
      ? e.startsWith("scale")
        ? vF(t[1])
        : mF
      : yF,
  Eh = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (no.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  bF = new Set(["brightness", "contrast", "saturate", "opacity"]);
function SF(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Cd) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = bF.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const wF = /([a-z-]*)\(.*?\)/g,
  jh = {
    ...no,
    getAnimatableNone: (e) => {
      const t = e.match(wF);
      return t ? t.map(SF).join(" ") : e;
    },
  },
  CF = {
    ...iC,
    color: Ct,
    backgroundColor: Ct,
    outlineColor: Ct,
    fill: Ct,
    stroke: Ct,
    borderColor: Ct,
    borderTopColor: Ct,
    borderRightColor: Ct,
    borderBottomColor: Ct,
    borderLeftColor: Ct,
    filter: jh,
    WebkitFilter: jh,
  },
  Iv = (e) => CF[e];
function GC(e, t) {
  let n = Iv(e);
  return (
    n !== jh && (n = no), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const KC = (e) => /^0[^.\s]+$/.test(e);
function kF(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || KC(e);
}
function _F(e, t, n, r) {
  const o = Eh(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      kF(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = GC(t, s);
    }
  return i;
}
function PF({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function qC(e, t) {
  return e[t] || e.default || e;
}
const $v =
  (e, t, n, r = {}) =>
  (o) => {
    const i = qC(r, e) || {},
      a = i.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - Qr(a);
    const l = _F(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      d = Eh(e, u),
      f = Eh(e, c);
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -s,
      onUpdate: (x) => {
        t.set(x), i.onUpdate && i.onUpdate(x);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (PF(i) || (h = { ...h, ...xF(e, h) }),
      h.duration && (h.duration = Qr(h.duration)),
      h.repeatDelay && (h.repeatDelay = Qr(h.repeatDelay)),
      !d || !f || wz.current || i.type === !1)
    )
      return hF(h);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const x = pF(t, e, h);
      if (x) return x;
    }
    return Pc(h);
  };
function Tc(e) {
  return !!(Bt(e) && e.add);
}
const TF = (e) => /^\-?\d*\.?\d+$/.test(e);
function Mv(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ov(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Nv {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mv(this.subscriptions, t), () => Ov(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const EF = (e) => !isNaN(parseFloat(e));
class jF {
  constructor(t, n = {}) {
    (this.version = "10.15.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: a } = gt;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          Me.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Me.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = EF(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Nv());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? WC(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function da(e, t) {
  return new jF(e, t);
}
const YC = (e) => (t) => t.test(e),
  AF = { test: (e) => e === "auto", parse: (e) => e },
  XC = [Qo, J, Qn, Rr, O3, M3, AF],
  Ba = (e) => XC.find(YC(e)),
  RF = [...XC, Ct, no],
  IF = (e) => RF.find(YC(e));
function $F(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, da(n));
}
function MF(e, t) {
  const n = _d(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = Y3(i[a]);
    $F(e, a, s);
  }
}
function OF(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (TF(c) || KC(c))
            ? (c = parseFloat(c))
            : !IF(c) && no.test(u) && (c = GC(l, u)),
          e.addValue(l, da(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function NF(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function DF(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = NF(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function zF({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function QC(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d];
    if (!f || h === void 0 || (c && zF(c, d))) continue;
    const x = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const S = e.getProps()[bz];
      S && (x.elapsed = window.HandoffAppearAnimations(S, d, f, Me));
    }
    f.start($v(d, f, h, e.shouldReduceMotion && Xo.has(d) ? { type: !1 } : x));
    const g = f.animation;
    Tc(l) && (l.add(d), g.then(() => l.remove(d))), u.push(g);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && MF(e, a);
      }),
    u
  );
}
function Ah(e, t, n = {}) {
  const r = _d(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(QC(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return FF(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function FF(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(LF)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Ah(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function LF(e, t) {
  return e.sortNodePosition(t);
}
function BF(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ah(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Ah(e, t, n);
  else {
    const o = typeof t == "function" ? _d(e, t, n.custom) : t;
    r = Promise.all(QC(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const VF = [...gv].reverse(),
  WF = gv.length;
function UF(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => BF(e, n, r)));
}
function HF(e) {
  let t = UF(e);
  const n = KF();
  let r = !0;
  const o = (l, u) => {
    const c = _d(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let x = {},
      g = 1 / 0;
    for (let y = 0; y < WF; y++) {
      const v = VF[y],
        b = n[v],
        C = c[v] !== void 0 ? c[v] : d[v],
        k = qs(C),
        T = v === u ? b.isActive : null;
      T === !1 && (g = y);
      let _ = C === d[v] && C !== c[v] && k;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (b.protectedKeys = { ...x }),
        (!b.isActive && T === null) ||
          (!C && !b.prevProp) ||
          Sd(C) ||
          typeof C == "boolean")
      )
        continue;
      const j = GF(b.prevProp, C);
      let I = j || (v === u && b.isActive && !_ && k) || (y > g && k);
      const A = Array.isArray(C) ? C : [C];
      let M = A.reduce(o, {});
      T === !1 && (M = {});
      const { prevResolvedValues: K = {} } = b,
        U = { ...K, ...M },
        X = (Q) => {
          (I = !0), h.delete(Q), (b.needsAnimating[Q] = !0);
        };
      for (const Q in U) {
        const te = M[Q],
          O = K[Q];
        x.hasOwnProperty(Q) ||
          (te !== O
            ? Cc(te) && Cc(O)
              ? !bC(te, O) || j
                ? X(Q)
                : (b.protectedKeys[Q] = !0)
              : te !== void 0
              ? X(Q)
              : h.add(Q)
            : te !== void 0 && h.has(Q)
            ? X(Q)
            : (b.protectedKeys[Q] = !0));
      }
      (b.prevProp = C),
        (b.prevResolvedValues = M),
        b.isActive && (x = { ...x, ...M }),
        r && e.blockInitialAnimation && (I = !1),
        I &&
          !_ &&
          f.push(
            ...A.map((Q) => ({ animation: Q, options: { type: v, ...l } }))
          );
    }
    if (h.size) {
      const y = {};
      h.forEach((v) => {
        const b = e.getBaseTarget(v);
        b !== void 0 && (y[v] = b);
      }),
        f.push({ animation: y });
    }
    let S = !!f.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      (r = !1),
      S ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var x;
        return (x = h.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function GF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !bC(t, e) : !1;
}
function go(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function KF() {
  return {
    animate: go(!0),
    whileInView: go(),
    whileHover: go(),
    whileTap: go(),
    whileDrag: go(),
    whileFocus: go(),
    exit: go(),
  };
}
class qF extends so {
  constructor(t) {
    super(t), t.animationState || (t.animationState = HF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Sd(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let YF = 0;
class XF extends so {
  constructor() {
    super(...arguments), (this.id = YF++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const QF = { animation: { Feature: qF }, exit: { Feature: XF } },
  ix = (e, t) => Math.abs(e - t);
function ZF(e, t) {
  const n = ix(e.x, t.x),
    r = ix(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ZC {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = ep(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = ZF(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: h } = gt;
        this.history.push({ ...f, timestamp: h });
        const { onStart: x, onMove: g } = this.handlers;
        c ||
          (x && x(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Jf(c, this.transformPagePoint)),
          Me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = ep(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Jf(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, h), f && f(u, h);
      }),
      !mC(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = kd(t),
      i = Jf(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = gt;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, ep(i, this.history)),
      (this.removeListeners = Xr(
        mr(window, "pointermove", this.handlePointerMove),
        mr(window, "pointerup", this.handlePointerUp),
        mr(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Cr(this.updatePoint);
  }
}
function Jf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ax(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ep({ point: e }, t) {
  return {
    point: e,
    delta: ax(e, JC(t)),
    offset: ax(e, JF(t)),
    velocity: eL(t, 0.1),
  };
}
function JF(e) {
  return e[0];
}
function JC(e) {
  return e[e.length - 1];
}
function eL(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = JC(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Qr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = vr(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Xt(e) {
  return e.max - e.min;
}
function Rh(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function sx(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = De(t.min, t.max, e.origin)),
    (e.scale = Xt(n) / Xt(t)),
    (Rh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = De(n.min, n.max, e.origin) - e.originPoint),
    (Rh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function gs(e, t, n, r) {
  sx(e.x, t.x, n.x, r ? r.originX : void 0),
    sx(e.y, t.y, n.y, r ? r.originY : void 0);
}
function lx(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Xt(t));
}
function tL(e, t, n) {
  lx(e.x, t.x, n.x), lx(e.y, t.y, n.y);
}
function ux(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Xt(t));
}
function ys(e, t, n) {
  ux(e.x, t.x, n.x), ux(e.y, t.y, n.y);
}
function nL(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? De(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? De(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cx(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function rL(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: cx(e.x, n, o), y: cx(e.y, t, r) };
}
function dx(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function oL(e, t) {
  return { x: dx(e.x, t.x), y: dx(e.y, t.y) };
}
function iL(e, t) {
  let n = 0.5;
  const r = Xt(e),
    o = Xt(t);
  return (
    o > r
      ? (n = Xs(t.min, t.max - r, e.min))
      : r > o && (n = Xs(e.min, e.max - o, t.min)),
    to(0, 1, n)
  );
}
function aL(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ih = 0.35;
function sL(e = Ih) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ih),
    { x: fx(e, "left", "right"), y: fx(e, "top", "bottom") }
  );
}
function fx(e, t, n) {
  return { min: px(e, t), max: px(e, n) };
}
function px(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const hx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mi = () => ({ x: hx(), y: hx() }),
  mx = () => ({ min: 0, max: 0 }),
  qe = () => ({ x: mx(), y: mx() });
function zn(e) {
  return [e("x"), e("y")];
}
function ek({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function lL({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function uL(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function tp(e) {
  return e === void 0 || e === 1;
}
function $h({ scale: e, scaleX: t, scaleY: n }) {
  return !tp(e) || !tp(t) || !tp(n);
}
function bo(e) {
  return $h(e) || tk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function tk(e) {
  return vx(e.x) || vx(e.y);
}
function vx(e) {
  return e && e !== "0%";
}
function Ec(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function gx(e, t, n, r, o) {
  return o !== void 0 && (e = Ec(e, o, r)), Ec(e, n, r) + t;
}
function Mh(e, t = 0, n = 1, r, o) {
  (e.min = gx(e.min, t, n, r, o)), (e.max = gx(e.max, t, n, r, o));
}
function nk(e, { x: t, y: n }) {
  Mh(e.x, t.translate, t.scale, t.originPoint),
    Mh(e.y, n.translate, n.scale, n.originPoint);
}
function cL(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Oi(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), nk(e, a)),
      r && bo(i.latestValues) && Oi(e, i.latestValues));
  }
  (t.x = yx(t.x)), (t.y = yx(t.y));
}
function yx(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Or(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function xx(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = De(e.min, e.max, i);
  Mh(e, t[n], t[r], a, t.scale);
}
const dL = ["x", "scaleX", "originX"],
  fL = ["y", "scaleY", "originY"];
function Oi(e, t) {
  xx(e.x, t, dL), xx(e.y, t, fL);
}
function rk(e, t) {
  return ek(uL(e.getBoundingClientRect(), t));
}
function pL(e, t, n) {
  const r = rk(e, n),
    { scroll: o } = t;
  return o && (Or(r.x, o.offset.x), Or(r.y, o.offset.y)), r;
}
const hL = new WeakMap();
class mL {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = qe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(kd(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = gC(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          zn((x) => {
            let g = this.getAxisMotionValue(x).get() || 0;
            if (Qn.test(g)) {
              const { projection: S } = this.visualElement;
              if (S && S.layout) {
                const y = S.layout.layoutBox[x];
                y && (g = Xt(y) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[x] = g;
          }),
          f && Me.update(() => f(l, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: x } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = vL(x)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, x),
          this.updateAxis("y", u.point, x),
          this.visualElement.render(),
          h && h(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new ZC(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Me.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ou(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = nL(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && Ii(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = rL(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = sL(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        zn((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = aL(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ii(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = pL(r, o.root, this.visualElement.getTransformPagePoint());
    let a = oL(o.layout.layoutBox, i);
    if (n) {
      const s = n(lL(a));
      (this.hasMutatedConstraints = !!s), s && (a = ek(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = zn((c) => {
        if (!ou(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start($v(t, r, 0, n));
  }
  stopAnimation() {
    zn((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    zn((n) => {
      const { drag: r } = this.getProps();
      if (!ou(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - De(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ii(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    zn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = iL({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      zn((a) => {
        if (!ou(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(De(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hL.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = mr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Ii(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = dr(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (zn((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Ih,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function ou(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vL(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class gL extends so {
  constructor(t) {
    super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new mL(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const bx = (e) => (t, n) => {
  e && Me.update(() => e(t, n));
};
class yL extends so {
  constructor() {
    super(...arguments), (this.removePointerDownListener = We);
  }
  onPointerDown(t) {
    this.session = new ZC(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: bx(t),
      onStart: bx(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Me.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ok() {
  const e = m.useContext(dl);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = m.useId();
  return m.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function xL() {
  return bL(m.useContext(dl));
}
function bL(e) {
  return e === null ? !0 : e.isPresent;
}
const zu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sx(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Va = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (J.test(e)) e = parseFloat(e);
        else return e;
      const n = Sx(e, t.target.x),
        r = Sx(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  SL = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = no.parse(e);
      if (o.length > 5) return r;
      const i = no.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = De(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class wL extends Zr.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    T3(CL),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (zu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              Me.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ik(e) {
  const [t, n] = ok(),
    r = m.useContext(xv);
  return Zr.createElement(wL, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: m.useContext(eC),
    isPresent: t,
    safeToRemove: n,
  });
}
const CL = {
    borderRadius: {
      ...Va,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Va,
    borderTopRightRadius: Va,
    borderBottomLeftRadius: Va,
    borderBottomRightRadius: Va,
    boxShadow: SL,
  },
  ak = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  kL = ak.length,
  wx = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Cx = (e) => typeof e == "number" || J.test(e);
function _L(e, t, n, r, o, i) {
  o
    ? ((e.opacity = De(0, n.opacity !== void 0 ? n.opacity : 1, PL(r))),
      (e.opacityExit = De(t.opacity !== void 0 ? t.opacity : 1, 0, TL(r))))
    : i &&
      (e.opacity = De(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < kL; a++) {
    const s = `border${ak[a]}Radius`;
    let l = kx(t, s),
      u = kx(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Cx(l) === Cx(u)
        ? ((e[s] = Math.max(De(wx(l), wx(u), r), 0)),
          (Qn.test(u) || Qn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = De(t.rotate || 0, n.rotate || 0, r));
}
function kx(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const PL = sk(0, 0.5, jv),
  TL = sk(0.5, 0.95, We);
function sk(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xs(e, t, r)));
}
function _x(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function sn(e, t) {
  _x(e.x, t.x), _x(e.y, t.y);
}
function Px(e, t, n, r, o) {
  return (
    (e -= t), (e = Ec(e, 1 / n, r)), o !== void 0 && (e = Ec(e, 1 / o, r)), e
  );
}
function EL(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (Qn.test(t) &&
      ((t = parseFloat(t)), (t = De(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = De(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = Px(e.min, t, n, s, o)),
    (e.max = Px(e.max, t, n, s, o));
}
function Tx(e, t, [n, r, o], i, a) {
  EL(e, t[n], t[r], t[o], t.scale, i, a);
}
const jL = ["x", "scaleX", "originX"],
  AL = ["y", "scaleY", "originY"];
function Ex(e, t, n, r) {
  Tx(e.x, t, jL, n ? n.x : void 0, r ? r.x : void 0),
    Tx(e.y, t, AL, n ? n.y : void 0, r ? r.y : void 0);
}
function jx(e) {
  return e.translate === 0 && e.scale === 1;
}
function lk(e) {
  return jx(e.x) && jx(e.y);
}
function RL(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function uk(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Ax(e) {
  return Xt(e.x) / Xt(e.y);
}
class IL {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mv(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Ov(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Rx(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const $L = (e, t) => e.depth - t.depth;
class ML {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Mv(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Ov(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort($L),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function OL(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Cr(r), e(i - t));
    };
  return Me.read(r, !0), () => Cr(r);
}
function NL(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function DL(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function zL(e, t, n) {
  const r = Bt(e) ? e : da(e);
  return r.start($v("", r, t, n)), r.animation;
}
const Ix = ["", "X", "Y", "Z"],
  $x = 1e3;
let FL = 0;
const So = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function ck({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = FL++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (So.totalNodes =
            So.resolvedTargetDeltas =
            So.recalculatedProjection =
              0),
            this.nodes.forEach(VL),
            this.nodes.forEach(KL),
            this.nodes.forEach(qL),
            this.nodes.forEach(WL),
            NL(So);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ML());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Nv()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = DL(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = OL(f, 250)),
            zu.hasAnimatedSinceResize &&
              ((zu.hasAnimatedSinceResize = !1), this.nodes.forEach(Ox));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || JL,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: y } =
                  c.getProps(),
                v = !this.targetLayout || !uk(this.targetLayout, x) || h,
                b = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                b ||
                (f && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, b);
                const C = { ...qC(g, "layout"), onPlay: S, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || Ox(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Cr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(YL),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mx);
        return;
      }
      this.isUpdating || this.nodes.forEach(HL),
        (this.isUpdating = !1),
        this.nodes.forEach(GL),
        this.nodes.forEach(LL),
        this.nodes.forEach(BL),
        this.clearAllSnapshots();
      const s = performance.now();
      (gt.delta = to(0, 1e3 / 60, s - gt.timestamp)),
        (gt.timestamp = s),
        (gt.isProcessing = !0),
        Hf.update.process(gt),
        Hf.preRender.process(gt),
        Hf.render.process(gt),
        (gt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(UL), this.sharedNodes.forEach(XL);
    }
    scheduleUpdateProjection() {
      Me.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = qe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !lk(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || bo(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        e4(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return qe();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Or(s.x, l.offset.x), Or(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = qe();
      sn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            sn(s, a);
            const { scroll: f } = this.root;
            f && (Or(s.x, -f.offset.x), Or(s.y, -f.offset.y));
          }
          Or(s.x, c.offset.x), Or(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = qe();
      sn(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Oi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bo(c.latestValues) && Oi(l, c.latestValues);
      }
      return bo(this.latestValues) && Oi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = qe();
      sn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !bo(u.latestValues)) continue;
        $h(u.latestValues) && u.updateSnapshot();
        const c = qe(),
          d = u.measurePageBox();
        sn(c, d),
          Ex(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bo(this.latestValues) && Ex(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== gt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = gt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = qe()),
              (this.relativeTargetOrigin = qe()),
              ys(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              sn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = qe()), (this.targetWithTransforms = qe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                tL(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : sn(this.target, this.layout.layoutBox),
                nk(this.target, this.targetDelta))
              : sn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = qe()),
                (this.relativeTargetOrigin = qe()),
                ys(this.relativeTargetOrigin, this.target, h.target),
                sn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          So.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          $h(this.parent.latestValues) ||
          tk(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === gt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      sn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      cL(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: x } = s;
      if (!x) {
        this.projectionTransform &&
          ((this.projectionDelta = Mi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Mi()),
        (this.projectionDeltaWithTransform = Mi()));
      const g = this.projectionTransform;
      gs(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.projectionTransform = Rx(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        So.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Mi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = qe(),
        h = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        g = h !== x,
        S = this.getStack(),
        y = !S || S.members.length <= 1,
        v = !!(g && !y && this.options.crossfade === !0 && !this.path.some(ZL));
      this.animationProgress = 0;
      let b;
      (this.mixTargetDelta = (C) => {
        const k = C / 1e3;
        Nx(d.x, a.x, k),
          Nx(d.y, a.y, k),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ys(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            QL(this.relativeTarget, this.relativeTargetOrigin, f, k),
            b && RL(this.relativeTarget, b) && (this.isProjectionDirty = !1),
            b || (b = qe()),
            sn(b, this.relativeTarget)),
          g &&
            ((this.animationValues = c), _L(c, u, this.latestValues, k, v, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Cr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Me.update(() => {
          (zu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zL(0, $x, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta($x),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          dk(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || qe();
          const d = Xt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = Xt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        sn(s, l),
          Oi(s, c),
          gs(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new IL()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < Ix.length; c++) {
        const d = "rotate" + Ix[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Du(a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Du(a.pointerEvents) || "")),
          this.hasProjected &&
            !bo(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Rx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: x } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const g in Sc) {
        if (f[g] === void 0) continue;
        const { correct: S, applyTo: y } = Sc[g],
          v = u.transform === "none" ? f[g] : S(f[g], d);
        if (y) {
          const b = y.length;
          for (let C = 0; C < b; C++) u[y[C]] = v;
        } else u[g] = v;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Du(a.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Mx),
        this.root.sharedNodes.clear();
    }
  };
}
function LL(e) {
  e.updateLayout();
}
function BL(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? zn((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = Xt(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : dk(i, n.layoutBox, r) &&
        zn((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = Xt(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = Mi();
    gs(s, r, n.layoutBox);
    const l = Mi();
    a ? gs(l, e.applyTransform(o, !0), n.measuredBox) : gs(l, r, n.layoutBox);
    const u = !lk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const x = qe();
          ys(x, n.layoutBox, f.layoutBox);
          const g = qe();
          ys(g, r, h.layoutBox),
            uk(x, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function VL(e) {
  So.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function WL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function UL(e) {
  e.clearSnapshot();
}
function Mx(e) {
  e.clearMeasurements();
}
function HL(e) {
  e.isLayoutDirty = !1;
}
function GL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ox(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function KL(e) {
  e.resolveTargetDelta();
}
function qL(e) {
  e.calcProjection();
}
function YL(e) {
  e.resetRotation();
}
function XL(e) {
  e.removeLeadSnapshot();
}
function Nx(e, t, n) {
  (e.translate = De(t.translate, 0, n)),
    (e.scale = De(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Dx(e, t, n, r) {
  (e.min = De(t.min, n.min, r)), (e.max = De(t.max, n.max, r));
}
function QL(e, t, n, r) {
  Dx(e.x, t.x, n.x, r), Dx(e.y, t.y, n.y, r);
}
function ZL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const JL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zx = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Fx = zx("applewebkit/") && !zx("chrome/") ? Math.round : We;
function Lx(e) {
  (e.min = Fx(e.min)), (e.max = Fx(e.max));
}
function e4(e) {
  Lx(e.x), Lx(e.y);
}
function dk(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Rh(Ax(t), Ax(n), 0.2))
  );
}
const t4 = ck({
    attachResizeListener: (e, t) => dr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  np = { current: void 0 },
  fk = ck({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!np.current) {
        const e = new t4({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (np.current = e);
      }
      return np.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  n4 = {
    pan: { Feature: yL },
    drag: { Feature: gL, ProjectionNode: fk, MeasureLayout: ik },
  },
  r4 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function o4(e) {
  const t = r4.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Oh(e, t, n = 1) {
  const [r, o] = o4(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : kh(o) ? Oh(o, t, n + 1) : o;
}
function i4(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!kh(i)) return;
      const a = Oh(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!kh(i)) continue;
    const a = Oh(i, r);
    a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const a4 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  pk = (e) => a4.has(e),
  s4 = (e) => Object.keys(e).some(pk),
  Bx = (e) => e === Qo || e === J,
  Vx = (e, t) => parseFloat(e.split(", ")[t]),
  Wx =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return Vx(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? Vx(i[1], e) : 0;
      }
    },
  l4 = new Set(["x", "y", "z"]),
  u4 = fl.filter((e) => !l4.has(e));
function c4(e) {
  const t = [];
  return (
    u4.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const fa = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Wx(4, 13),
  y: Wx(5, 14),
};
fa.translateX = fa.x;
fa.translateY = fa.y;
const d4 = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = fa[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = fa[u](l, i));
      }),
      e
    );
  },
  f4 = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(pk);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = Ba(c);
        const f = t[l];
        let h;
        if (Cc(f)) {
          const x = f.length,
            g = f[0] === null ? 1 : 0;
          (c = f[g]), (d = Ba(c));
          for (let S = g; S < x && f[S] !== null; S++)
            h ? Ev(Ba(f[S]) === h) : (h = Ba(f[S]));
        } else h = Ba(f);
        if (d !== h)
          if (Bx(d) && Bx(h)) {
            const x = u.get();
            typeof x == "string" && u.set(parseFloat(x)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === J && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = c4(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = d4(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        bd && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function p4(e, t, n, r) {
  return s4(t) ? f4(e, t, n, r) : { target: t, transitionEnd: r };
}
const h4 = (e, t, n, r) => {
    const o = i4(e, t, r);
    return (t = o.target), (r = o.transitionEnd), p4(e, t, n, r);
  },
  Nh = { current: null },
  hk = { current: !1 };
function m4() {
  if (((hk.current = !0), !!bd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Nh.current = e.matches);
      e.addListener(t), t();
    } else Nh.current = !1;
}
function v4(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (Bt(i)) e.addValue(o, i), Tc(r) && r.add(o);
    else if (Bt(a)) e.addValue(o, da(i, { owner: e })), Tc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, da(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Ux = new WeakMap(),
  mk = Object.keys(Ys),
  g4 = mk.length,
  Hx = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  y4 = yv.length;
class x4 {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Me.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = wd(n)),
      (this.isVariantNode = Jw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Tc(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Ux.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      hk.current || m4(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Nh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ux.delete(this.current),
      this.projection && this.projection.unmount(),
      Cr(this.notifyUpdate),
      Cr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Xo.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Me.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < g4; l++) {
      const u = mk[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Ys[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (s = h));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Ii(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : qe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Hx.length; r++) {
      const o = Hx[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = v4(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < y4; r++) {
      const o = yv[r],
        i = this.props[o];
      (qs(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = da(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = Tv(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Nv()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class vk extends x4 {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let a = DF(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i)) {
      OF(this, r, a);
      const s = h4(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function b4(e) {
  return window.getComputedStyle(e);
}
class S4 extends vk {
  readValueFromInstance(t, n) {
    if (Xo.has(n)) {
      const r = Iv(n);
      return (r && r.default) || 0;
    } else {
      const r = b4(t),
        o = (rC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return rk(t, n);
  }
  build(t, n, r, o) {
    Sv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Pv(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    uC(t, n, r, o);
  }
}
class w4 extends vk {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Xo.has(n)) {
      const r = Iv(n);
      return (r && r.default) || 0;
    }
    return (n = cC.has(n) ? n : _v(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return qe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return fC(t, n);
  }
  build(t, n, r, o) {
    Cv(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    dC(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = kv(t.tagName)), super.mount(t);
  }
}
const C4 = (e, t) =>
    bv(e)
      ? new w4(t, { enableHardwareAcceleration: !1 })
      : new S4(t, { enableHardwareAcceleration: !0 }),
  k4 = { layout: { ProjectionNode: fk, MeasureLayout: ik } },
  _4 = { ...QF, ...vz, ...n4, ...k4 },
  Zo = _3((e, t) => ez(e, t, _4, C4));
function gk() {
  const e = m.useRef(!1);
  return (
    bc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function P4() {
  const e = gk(),
    [t, n] = m.useState(0),
    r = m.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [m.useCallback(() => Me.postRender(r), [r]), t];
}
class T4 extends m.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function E4({ children: e, isPresent: t }) {
  const n = m.useId(),
    r = m.useRef(null),
    o = m.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    m.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !r.current || !i || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    m.createElement(
      T4,
      { isPresent: t, childRef: r, sizeRef: o },
      m.cloneElement(e, { ref: r })
    )
  );
}
const rp = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = pC(j4),
    l = m.useId(),
    u = m.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    m.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    m.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = m.createElement(E4, { isPresent: n }, e)),
    m.createElement(dl.Provider, { value: u }, e)
  );
};
function j4() {
  return new Map();
}
function A4(e) {
  return m.useEffect(() => () => e(), []);
}
const pi = (e) => e.key || "";
function R4(e, t) {
  e.forEach((n) => {
    const r = pi(n);
    t.set(r, n);
  });
}
function I4(e) {
  const t = [];
  return (
    m.Children.forEach(e, (n) => {
      m.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const vl = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = m.useContext(xv).forceRender || P4()[0],
    l = gk(),
    u = I4(e);
  let c = u;
  const d = m.useRef(new Map()).current,
    f = m.useRef(c),
    h = m.useRef(new Map()).current,
    x = m.useRef(!0);
  if (
    (bc(() => {
      (x.current = !1), R4(u, h), (f.current = c);
    }),
    A4(() => {
      (x.current = !0), h.clear(), d.clear();
    }),
    x.current)
  )
    return m.createElement(
      m.Fragment,
      null,
      c.map((v) =>
        m.createElement(
          rp,
          {
            key: pi(v),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          v
        )
      )
    );
  c = [...c];
  const g = f.current.map(pi),
    S = u.map(pi),
    y = g.length;
  for (let v = 0; v < y; v++) {
    const b = g[v];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((v, b) => {
      if (S.indexOf(b) !== -1) return;
      const C = h.get(b);
      if (!C) return;
      const k = g.indexOf(b);
      let T = v;
      if (!T) {
        const _ = () => {
          h.delete(b), d.delete(b);
          const j = f.current.findIndex((I) => I.key === b);
          if ((f.current.splice(j, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            s(), r && r();
          }
        };
        (T = m.createElement(
          rp,
          {
            key: pi(C),
            isPresent: !1,
            onExitComplete: _,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          C
        )),
          d.set(b, T);
      }
      c.splice(k, 0, T);
    }),
    (c = c.map((v) => {
      const b = v.key;
      return d.has(b)
        ? v
        : m.createElement(
            rp,
            { key: pi(v), isPresent: !0, presenceAffectsLayout: i, mode: a },
            v
          );
    })),
    m.createElement(
      m.Fragment,
      null,
      d.size ? c : c.map((v) => m.cloneElement(v))
    )
  );
};
var $4 = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  yk = m.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = $4,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = m.useState(s),
      h = xL();
    ca(() => {
      h || r == null || r();
    }, [h]),
      ca(() => {
        f(s);
      }, [s]);
    const x = () => f(null),
      g = () => f(s),
      S = () => {
        h && o();
      };
    m.useEffect(() => {
      h && i && o();
    }, [h, i, o]),
      v3(S, d);
    const y = m.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      v = m.useMemo(() => h3(a), [a]);
    return p.jsx(Zo.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: x,
      onHoverEnd: g,
      custom: { position: a },
      style: v,
      children: p.jsx(L.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: y,
        children: Tn(n, { id: t, onClose: S }),
      }),
    });
  });
yk.displayName = "ToastComponent";
function M4(e, t) {
  var n;
  const r = e ?? "bottom",
    i = {
      "top-start": { ltr: "top-left", rtl: "top-right" },
      "top-end": { ltr: "top-right", rtl: "top-left" },
      "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
      "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" },
    }[r];
  return (n = i == null ? void 0 : i[t]) != null ? n : r;
}
var Gx = {
    path: p.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        p.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        p.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        p.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  lo = H((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = ee("chakra-icon", s),
      d = In("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      x = r ?? Gx.viewBox;
    if (n && typeof n != "string") return p.jsx(L.svg, { as: n, ...h, ...u });
    const g = a ?? Gx.path;
    return p.jsx(L.svg, {
      verticalAlign: "middle",
      viewBox: x,
      ...h,
      ...u,
      children: g,
    });
  });
lo.displayName = "Icon";
function O4(e) {
  return p.jsx(lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: p.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function N4(e) {
  return p.jsx(lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: p.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Kx(e) {
  return p.jsx(lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: p.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var D4 = M5({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Dv = H((e, t) => {
    const n = In("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = Qe(e),
      u = ee("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${D4} ${i} linear infinite`,
        ...n,
      };
    return p.jsx(L.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && p.jsx(L.span, { srOnly: !0, children: r }),
    });
  });
Dv.displayName = "Spinner";
var [z4, zv] = Ue({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [F4, Fv] = Ue({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  xk = {
    info: { icon: N4, colorScheme: "blue" },
    warning: { icon: Kx, colorScheme: "orange" },
    success: { icon: O4, colorScheme: "green" },
    error: { icon: Kx, colorScheme: "red" },
    loading: { icon: Dv, colorScheme: "blue" },
  };
function L4(e) {
  return xk[e].colorScheme;
}
function B4(e) {
  return xk[e].icon;
}
var bk = H(function (t, n) {
  const r = Fv(),
    { status: o } = zv(),
    i = { display: "inline", ...r.description };
  return p.jsx(L.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: ee("chakra-alert__desc", t.className),
    __css: i,
  });
});
bk.displayName = "AlertDescription";
function Sk(e) {
  const { status: t } = zv(),
    n = B4(t),
    r = Fv(),
    o = t === "loading" ? r.spinner : r.icon;
  return p.jsx(L.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: ee("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || p.jsx(n, { h: "100%", w: "100%" }),
  });
}
Sk.displayName = "AlertIcon";
var wk = H(function (t, n) {
  const r = Fv(),
    { status: o } = zv();
  return p.jsx(L.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: ee("chakra-alert__title", t.className),
    __css: r.title,
  });
});
wk.displayName = "AlertTitle";
var Ck = H(function (t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Qe(t),
    s = (r = t.colorScheme) != null ? r : L4(o),
    l = xn("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return p.jsx(z4, {
    value: { status: o },
    children: p.jsx(F4, {
      value: l,
      children: p.jsx(L.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: n,
        ...a,
        className: ee("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
Ck.displayName = "Alert";
function V4(e) {
  return p.jsx(lo, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: p.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var Lv = H(function (t, n) {
  const r = In("CloseButton", t),
    { children: o, isDisabled: i, __css: a, ...s } = Qe(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return p.jsx(L.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...a },
    ...s,
    children: o || p.jsx(V4, { width: "1em", height: "1em" }),
  });
});
Lv.displayName = "CloseButton";
var W4 = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Wn = U4(W4);
function U4(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = H4(o, i),
        { position: s, id: l } = a;
      return (
        r((u) => {
          var c, d;
          const h = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: h };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((a) => {
          const s = { ...a },
            { position: l, index: u } = Vy(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: kk(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const a = Xw(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!Vy(Wn.getState(), o).position,
  };
}
var qx = 0;
function H4(e, t = {}) {
  var n, r;
  qx += 1;
  const o = (n = t.id) != null ? n : qx,
    i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Wn.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var G4 = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return p.jsxs(Ck, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      p.jsx(Sk, { children: u }),
      p.jsxs(L.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && p.jsx(wk, { id: c == null ? void 0 : c.title, children: o }),
          s &&
            p.jsx(bk, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: s,
            }),
        ],
      }),
      i &&
        p.jsx(Lv, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function kk(e = {}) {
  const { render: t, toastComponent: n = G4 } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : p.jsx(n, { ...o, ...e });
}
function K4(e, t) {
  const n = (o) => {
      var i;
      return {
        ...t,
        ...o,
        position: M4(
          (i = o == null ? void 0 : o.position) != null
            ? i
            : t == null
            ? void 0
            : t.position,
          e
        ),
      };
    },
    r = (o) => {
      const i = n(o),
        a = kk(i);
      return Wn.notify(a, i);
    };
  return (
    (r.update = (o, i) => {
      Wn.update(o, n(i));
    }),
    (r.promise = (o, i) => {
      const a = r({ ...i.loading, status: "loading", duration: null });
      o.then((s) =>
        r.update(a, { status: "success", duration: 5e3, ...Tn(i.success, s) })
      ).catch((s) =>
        r.update(a, { status: "error", duration: 5e3, ...Tn(i.error, s) })
      );
    }),
    (r.closeAll = Wn.closeAll),
    (r.close = Wn.close),
    (r.isActive = Wn.isActive),
    r
  );
}
var [q4, Y4] = Ue({ name: "ToastOptionsContext", strict: !1 }),
  X4 = (e) => {
    const t = m.useSyncExternalStore(Wn.subscribe, Wn.getState, Wn.getState),
      { motionVariants: n, component: r = yk, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return p.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": "Notifications",
            id: `chakra-toast-manager-${s}`,
            style: m3(s),
            children: p.jsx(vl, {
              initial: !1,
              children: l.map((u) =>
                p.jsx(r, { motionVariants: n, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return p.jsx(ul, { ...o, children: a });
  };
function Jo(e) {
  const { theme: t } = Sw(),
    n = Y4();
  return m.useMemo(() => K4(t.direction, { ...n, ...e }), [e, t.direction, n]);
}
var Q4 = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return p.jsxs(f3, {
        theme: r,
        ...i,
        children: [
          p.jsx(q4, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          p.jsx(X4, { ...o }),
        ],
      });
    },
  Z4 = Q4(MD),
  J4 = Object.defineProperty,
  eB = (e, t, n) =>
    t in e
      ? J4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Le = (e, t, n) => (eB(e, typeof t != "symbol" ? t + "" : t, n), n);
function Yx(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (
      r & Node.DOCUMENT_POSITION_FOLLOWING ||
      r & Node.DOCUMENT_POSITION_CONTAINED_BY
    )
      return -1;
    if (
      r & Node.DOCUMENT_POSITION_PRECEDING ||
      r & Node.DOCUMENT_POSITION_CONTAINS
    )
      return 1;
    if (
      r & Node.DOCUMENT_POSITION_DISCONNECTED ||
      r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    )
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var tB = (e) =>
  typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Xx(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function Qx(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Dh = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  jc = (e) => e,
  nB = class {
    constructor() {
      Le(this, "descendants", new Map()),
        Le(this, "register", (e) => {
          if (e != null)
            return tB(e)
              ? this.registerNode(e)
              : (t) => {
                  this.registerNode(t, e);
                };
        }),
        Le(this, "unregister", (e) => {
          this.descendants.delete(e);
          const t = Yx(Array.from(this.descendants.keys()));
          this.assignIndex(t);
        }),
        Le(this, "destroy", () => {
          this.descendants.clear();
        }),
        Le(this, "assignIndex", (e) => {
          this.descendants.forEach((t) => {
            const n = e.indexOf(t.node);
            (t.index = n), (t.node.dataset.index = t.index.toString());
          });
        }),
        Le(this, "count", () => this.descendants.size),
        Le(this, "enabledCount", () => this.enabledValues().length),
        Le(this, "values", () =>
          Array.from(this.descendants.values()).sort(
            (t, n) => t.index - n.index
          )
        ),
        Le(this, "enabledValues", () =>
          this.values().filter((e) => !e.disabled)
        ),
        Le(this, "item", (e) => {
          if (this.count() !== 0) return this.values()[e];
        }),
        Le(this, "enabledItem", (e) => {
          if (this.enabledCount() !== 0) return this.enabledValues()[e];
        }),
        Le(this, "first", () => this.item(0)),
        Le(this, "firstEnabled", () => this.enabledItem(0)),
        Le(this, "last", () => this.item(this.descendants.size - 1)),
        Le(this, "lastEnabled", () => {
          const e = this.enabledValues().length - 1;
          return this.enabledItem(e);
        }),
        Le(this, "indexOf", (e) => {
          var t, n;
          return e &&
            (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) !=
              null
            ? n
            : -1;
        }),
        Le(this, "enabledIndexOf", (e) =>
          e == null
            ? -1
            : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
        ),
        Le(this, "next", (e, t = !0) => {
          const n = Xx(e, this.count(), t);
          return this.item(n);
        }),
        Le(this, "nextEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = Xx(r, this.enabledCount(), t);
          return this.enabledItem(o);
        }),
        Le(this, "prev", (e, t = !0) => {
          const n = Qx(e, this.count() - 1, t);
          return this.item(n);
        }),
        Le(this, "prevEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = Qx(r, this.enabledCount() - 1, t);
          return this.enabledItem(o);
        }),
        Le(this, "registerNode", (e, t) => {
          if (!e || this.descendants.has(e)) return;
          const n = Array.from(this.descendants.keys()).concat(e),
            r = Yx(n);
          t != null && t.disabled && (t.disabled = !!t.disabled);
          const o = { node: e, index: -1, ...t };
          this.descendants.set(e, o), this.assignIndex(r);
        });
    }
  };
function rB(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function xt(...e) {
  return (t) => {
    e.forEach((n) => {
      rB(n, t);
    });
  };
}
function oB(...e) {
  return m.useMemo(() => xt(...e), e);
}
function iB() {
  const e = m.useRef(new nB());
  return Dh(() => () => e.current.destroy()), e.current;
}
var [aB, _k] = Ue({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider",
});
function sB(e) {
  const t = _k(),
    [n, r] = m.useState(-1),
    o = m.useRef(null);
  Dh(
    () => () => {
      o.current && t.unregister(o.current);
    },
    []
  ),
    Dh(() => {
      if (!o.current) return;
      const a = Number(o.current.dataset.index);
      n != a && !Number.isNaN(a) && r(a);
    });
  const i = jc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: xt(i, o),
  };
}
function Pk() {
  return [jc(aB), () => jc(_k()), () => iB(), (o) => sB(o)];
}
function lB(e) {
  const {
      value: t,
      defaultValue: n,
      onChange: r,
      shouldUpdate: o = (f, h) => f !== h,
    } = e,
    i = _t(r),
    a = _t(o),
    [s, l] = m.useState(n),
    u = t !== void 0,
    c = u ? t : s,
    d = _t(
      (f) => {
        const x = typeof f == "function" ? f(c) : f;
        a(c, x) && (u || l(x), i(x));
      },
      [u, i, c, a]
    );
  return [c, d];
}
var Zx = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Oo = {
    enter: { duration: 0.2, ease: Zx.easeOut },
    exit: { duration: 0.1, ease: Zx.easeIn },
  },
  No = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  uB = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 1,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : No.enter(Oo.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 0,
        transition:
          (r = e == null ? void 0 : e.exit) != null ? r : No.exit(Oo.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      };
    },
  },
  Tk = { initial: "exit", animate: "enter", exit: "exit", variants: uB },
  cB = m.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: a,
        transitionEnd: s,
        delay: l,
        ...u
      } = t,
      c = o || r ? "enter" : "exit",
      d = r ? o && r : !0,
      f = { transition: a, transitionEnd: s, delay: l };
    return p.jsx(vl, {
      custom: f,
      children:
        d &&
        p.jsx(Zo.div, {
          ref: n,
          className: ee("chakra-fade", i),
          custom: f,
          ...Tk,
          animate: c,
          ...u,
        }),
    });
  });
cB.displayName = "Fade";
var dB = {
    exit: ({
      reverse: e,
      initialScale: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : No.exit(Oo.exit, o),
      };
    },
    enter: ({ transitionEnd: e, transition: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        scale: 1,
        transition:
          (r = t == null ? void 0 : t.enter) != null
            ? r
            : No.enter(Oo.enter, n),
        transitionEnd: e == null ? void 0 : e.enter,
      };
    },
  },
  Ek = { initial: "exit", animate: "enter", exit: "exit", variants: dB },
  fB = m.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        initialScale: a = 0.95,
        className: s,
        transition: l,
        transitionEnd: u,
        delay: c,
        ...d
      } = t,
      f = r ? o && r : !0,
      h = o || r ? "enter" : "exit",
      x = {
        initialScale: a,
        reverse: i,
        transition: l,
        transitionEnd: u,
        delay: c,
      };
    return p.jsx(vl, {
      custom: x,
      children:
        f &&
        p.jsx(Zo.div, {
          ref: n,
          className: ee("chakra-offset-slide", s),
          ...Ek,
          animate: h,
          custom: x,
          ...d,
        }),
    });
  });
fB.displayName = "ScaleFade";
var pB = {
    initial: ({
      offsetX: e,
      offsetY: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        x: e,
        y: t,
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : No.exit(Oo.exit, o),
        transitionEnd: r == null ? void 0 : r.exit,
      };
    },
    enter: ({ transition: e, transitionEnd: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : No.enter(Oo.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({
      offsetY: e,
      offsetX: t,
      transition: n,
      transitionEnd: r,
      reverse: o,
      delay: i,
    }) => {
      var a;
      const s = { x: t, y: e };
      return {
        opacity: 0,
        transition:
          (a = n == null ? void 0 : n.exit) != null ? a : No.exit(Oo.exit, i),
        ...(o
          ? { ...s, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...s, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  zh = { initial: "initial", animate: "enter", exit: "exit", variants: pB },
  hB = m.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        className: a,
        offsetX: s = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: d,
        ...f
      } = t,
      h = r ? o && r : !0,
      x = o || r ? "enter" : "exit",
      g = {
        offsetX: s,
        offsetY: l,
        reverse: i,
        transition: u,
        transitionEnd: c,
        delay: d,
      };
    return p.jsx(vl, {
      custom: g,
      children:
        h &&
        p.jsx(Zo.div, {
          ref: n,
          className: ee("chakra-offset-slide", a),
          custom: g,
          ...zh,
          animate: x,
          ...f,
        }),
    });
  });
hB.displayName = "SlideFade";
var [mB, vB] = Ue({
  name: "AvatarStylesContext",
  hookName: "useAvatarStyles",
  providerName: "<Avatar/>",
});
function gB(e) {
  var t;
  const n = e.split(" "),
    r = (t = n[0]) != null ? t : "",
    o = n.length > 1 ? n[n.length - 1] : "";
  return r && o ? `${r.charAt(0)}${o.charAt(0)}` : r.charAt(0);
}
function jk(e) {
  const { name: t, getInitials: n, ...r } = e,
    o = vB();
  return p.jsx(L.div, {
    role: "img",
    "aria-label": t,
    ...r,
    __css: o.label,
    children: t ? (n == null ? void 0 : n(t)) : null,
  });
}
jk.displayName = "AvatarName";
var Ak = (e) =>
    p.jsxs(L.svg, {
      viewBox: "0 0 128 128",
      color: "#fff",
      width: "100%",
      height: "100%",
      className: "chakra-avatar__svg",
      ...e,
      children: [
        p.jsx("path", {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z",
        }),
        p.jsx("path", {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24",
        }),
      ],
    }),
  Fh = H(function (t, n) {
    const { htmlWidth: r, htmlHeight: o, alt: i, ...a } = t;
    return p.jsx("img", { width: r, height: o, ref: n, alt: i, ...a });
  });
Fh.displayName = "NativeImage";
function Rk(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = m.useState("pending");
  m.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = m.useRef(),
    f = m.useCallback(() => {
      if (!n) return;
      h();
      const x = new Image();
      (x.src = n),
        a && (x.crossOrigin = a),
        r && (x.srcset = r),
        s && (x.sizes = s),
        t && (x.loading = t),
        (x.onload = (g) => {
          h(), c("loaded"), o == null || o(g);
        }),
        (x.onerror = (g) => {
          h(), c("failed"), i == null || i(g);
        }),
        (d.current = x);
    }, [n, a, r, s, o, i, t]),
    h = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    sa(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            h();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var yB = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function xB(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var Ik = H(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: h,
      ...x
    } = t,
    g = r !== void 0 || o !== void 0,
    S = u != null || c || !g,
    y = Rk({ ...t, crossOrigin: d, ignoreFallback: S }),
    v = yB(y, f),
    b = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(S ? x : xB(x, ["onError", "onLoad"])),
    };
  return v
    ? o ||
        p.jsx(L.img, {
          as: Fh,
          className: "chakra-image__placeholder",
          src: r,
          ...b,
        })
    : p.jsx(L.img, {
        as: Fh,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: h,
        className: "chakra-image",
        ...b,
      });
});
Ik.displayName = "Image";
function $k(e) {
  const {
      src: t,
      srcSet: n,
      onError: r,
      onLoad: o,
      getInitials: i,
      name: a,
      borderRadius: s,
      loading: l,
      iconLabel: u,
      icon: c = p.jsx(Ak, {}),
      ignoreFallback: d,
      referrerPolicy: f,
      crossOrigin: h,
    } = e,
    g =
      Rk({ src: t, onError: r, crossOrigin: h, ignoreFallback: d }) ===
      "loaded";
  return !t || !g
    ? a
      ? p.jsx(jk, {
          className: "chakra-avatar__initials",
          getInitials: i,
          name: a,
        })
      : m.cloneElement(c, { role: "img", "aria-label": u })
    : p.jsx(L.img, {
        src: t,
        srcSet: n,
        alt: a,
        onLoad: o,
        referrerPolicy: f,
        crossOrigin: h ?? void 0,
        className: "chakra-avatar__img",
        loading: l,
        __css: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: s,
        },
      });
}
$k.displayName = "AvatarImage";
var bB = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "medium",
    position: "relative",
    flexShrink: 0,
  },
  Mk = H((e, t) => {
    const n = xn("Avatar", e),
      [r, o] = m.useState(!1),
      {
        src: i,
        srcSet: a,
        name: s,
        showBorder: l,
        borderRadius: u = "full",
        onError: c,
        onLoad: d,
        getInitials: f = gB,
        icon: h = p.jsx(Ak, {}),
        iconLabel: x = " avatar",
        loading: g,
        children: S,
        borderColor: y,
        ignoreFallback: v,
        crossOrigin: b,
        referrerPolicy: C,
        ...k
      } = Qe(e),
      T = {
        borderRadius: u,
        borderWidth: l ? "2px" : void 0,
        ...bB,
        ...n.container,
      };
    return (
      y && (T.borderColor = y),
      p.jsx(L.span, {
        ref: t,
        ...k,
        className: ee("chakra-avatar", e.className),
        "data-loaded": Hn(r),
        __css: T,
        children: p.jsxs(mB, {
          value: n,
          children: [
            p.jsx($k, {
              src: i,
              srcSet: a,
              loading: g,
              onLoad: Ie(d, () => {
                o(!0);
              }),
              onError: c,
              getInitials: f,
              name: s,
              borderRadius: u,
              icon: h,
              iconLabel: x,
              ignoreFallback: v,
              crossOrigin: b,
              referrerPolicy: C,
            }),
            S,
          ],
        }),
      })
    );
  });
Mk.displayName = "Avatar";
function Pd(e) {
  return m.Children.toArray(e).filter((t) => m.isValidElement(t));
}
var [Q7, SB] = Ue({ strict: !1, name: "ButtonGroupContext" });
function wB(e) {
  const [t, n] = m.useState(!e);
  return {
    ref: m.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function Lh(e) {
  const { children: t, className: n, ...r } = e,
    o = m.isValidElement(t)
      ? m.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = ee("chakra-button__icon", n);
  return p.jsx(L.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
Lh.displayName = "ButtonIcon";
function Bh(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = p.jsx(Dv, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = ee("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = m.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, r]
    );
  return p.jsx(L.div, { className: l, ...s, __css: c, children: o });
}
Bh.displayName = "ButtonSpinner";
var Ee = H((e, t) => {
  const n = SB(),
    r = In("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: h,
      spinnerPlacement: x = "start",
      className: g,
      as: S,
      ...y
    } = Qe(e),
    v = m.useMemo(() => {
      const T = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: T }),
      };
    }, [r, n]),
    { ref: b, type: C } = wB(S),
    k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return p.jsxs(L.button, {
    ref: oB(t, b),
    as: S,
    type: f ?? C,
    "data-active": Hn(a),
    "data-loading": Hn(i),
    __css: v,
    className: ee("chakra-button", g),
    ...y,
    disabled: o || i,
    children: [
      i &&
        x === "start" &&
        p.jsx(Bh, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: h,
        }),
      i
        ? c || p.jsx(L.span, { opacity: 0, children: p.jsx(Jx, { ...k }) })
        : p.jsx(Jx, { ...k }),
      i &&
        x === "end" &&
        p.jsx(Bh, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: h,
        }),
    ],
  });
});
Ee.displayName = "Button";
function Jx(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return p.jsxs(p.Fragment, {
    children: [
      t && p.jsx(Lh, { marginEnd: o, children: t }),
      r,
      n && p.jsx(Lh, { marginStart: o, children: n }),
    ],
  });
}
var [CB, Ok] = Ue({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [kB, Td] = Ue({ strict: !1, name: "FormControlContext" });
function _B(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = m.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, h] = m.useState(!1),
    [x, g] = m.useState(!1),
    [S, y] = m.useState(!1),
    v = m.useCallback(
      (_ = {}, j = null) => ({
        id: d,
        ..._,
        ref: xt(j, (I) => {
          I && g(!0);
        }),
      }),
      [d]
    ),
    b = m.useCallback(
      (_ = {}, j = null) => ({
        ..._,
        ref: j,
        "data-focus": Hn(S),
        "data-disabled": Hn(o),
        "data-invalid": Hn(r),
        "data-readonly": Hn(i),
        id: _.id !== void 0 ? _.id : u,
        htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l,
      }),
      [l, o, S, r, i, u]
    ),
    C = m.useCallback(
      (_ = {}, j = null) => ({
        id: c,
        ..._,
        ref: xt(j, (I) => {
          I && h(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    k = m.useCallback(
      (_ = {}, j = null) => ({ ..._, ...a, ref: j, role: "group" }),
      [a]
    ),
    T = m.useCallback(
      (_ = {}, j = null) => ({
        ..._,
        ref: j,
        role: "presentation",
        "aria-hidden": !0,
        children: _.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => y(!0),
    onBlur: () => y(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: x,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: v,
    getErrorMessageProps: C,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: T,
  };
}
var le = H(function (t, n) {
  const r = xn("Form", t),
    o = Qe(t),
    { getRootProps: i, htmlProps: a, ...s } = _B(o),
    l = ee("chakra-form-control", t.className);
  return p.jsx(kB, {
    value: s,
    children: p.jsx(CB, {
      value: r,
      children: p.jsx(L.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
le.displayName = "FormControl";
var PB = H(function (t, n) {
  const r = Td(),
    o = Ok(),
    i = ee("chakra-form__helper-text", t.className);
  return p.jsx(L.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
PB.displayName = "FormHelperText";
var ue = H(function (t, n) {
  var r;
  const o = In("FormLabel", t),
    i = Qe(t),
    {
      className: a,
      children: s,
      requiredIndicator: l = p.jsx(Nk, {}),
      optionalIndicator: u = null,
      ...c
    } = i,
    d = Td(),
    f =
      (r = d == null ? void 0 : d.getLabelProps(c, n)) != null
        ? r
        : { ref: n, ...c };
  return p.jsxs(L.label, {
    ...f,
    className: ee("chakra-form__label", i.className),
    __css: { display: "block", textAlign: "start", ...o },
    children: [s, d != null && d.isRequired ? l : u],
  });
});
ue.displayName = "FormLabel";
var Nk = H(function (t, n) {
  const r = Td(),
    o = Ok();
  if (!(r != null && r.isRequired)) return null;
  const i = ee("chakra-form__required-indicator", t.className);
  return p.jsx(L.span, {
    ...(r == null ? void 0 : r.getRequiredIndicatorProps(t, n)),
    __css: o.requiredIndicator,
    className: i,
  });
});
Nk.displayName = "RequiredIndicator";
function Bv(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = Dk(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Ui(n),
    "aria-required": Ui(o),
    "aria-readonly": Ui(r),
  };
}
function Dk(e) {
  var t, n, r;
  const o = Td(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: h,
      onBlur: x,
      ...g
    } = e,
    S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      S.push(o.feedbackId),
    o != null && o.hasHelpText && S.push(o.helpTextId),
    {
      ...g,
      "aria-describedby": S.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: Ie(o == null ? void 0 : o.onFocus, h),
      onBlur: Ie(o == null ? void 0 : o.onBlur, x),
    }
  );
}
function TB(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function zk(e, t) {
  let n = TB(e);
  const r = 10 ** (t ?? 10);
  return (n = Math.round(n * r) / r), t ? n.toFixed(t) : n.toString();
}
function eb(e) {
  if (!Number.isFinite(e)) return 0;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), (n += 1);
  return n;
}
function EB(e, t, n) {
  return e == null
    ? e
    : (n < t && console.warn("clamp: max cannot be less than min"),
      Math.min(Math.max(e, t), n));
}
function jB(e = {}) {
  const {
      onChange: t,
      precision: n,
      defaultValue: r,
      value: o,
      step: i = 1,
      min: a = Number.MIN_SAFE_INTEGER,
      max: s = Number.MAX_SAFE_INTEGER,
      keepWithinRange: l = !0,
    } = e,
    u = _t(t),
    [c, d] = m.useState(() => {
      var A;
      return r == null ? "" : (A = op(r, i, n)) != null ? A : "";
    }),
    f = typeof o < "u",
    h = f ? o : c,
    x = Fk(Ir(h), i),
    g = n ?? x,
    S = m.useCallback(
      (A) => {
        A !== h && (f || d(A.toString()), u == null || u(A.toString(), Ir(A)));
      },
      [u, f, h]
    ),
    y = m.useCallback(
      (A) => {
        let M = A;
        return l && (M = EB(M, a, s)), zk(M, g);
      },
      [g, l, s, a]
    ),
    v = m.useCallback(
      (A = i) => {
        let M;
        h === "" ? (M = Ir(A)) : (M = Ir(h) + A), (M = y(M)), S(M);
      },
      [y, i, S, h]
    ),
    b = m.useCallback(
      (A = i) => {
        let M;
        h === "" ? (M = Ir(-A)) : (M = Ir(h) - A), (M = y(M)), S(M);
      },
      [y, i, S, h]
    ),
    C = m.useCallback(() => {
      var A;
      let M;
      r == null ? (M = "") : (M = (A = op(r, i, n)) != null ? A : a), S(M);
    }, [r, n, i, S, a]),
    k = m.useCallback(
      (A) => {
        var M;
        const K = (M = op(A, i, g)) != null ? M : a;
        S(K);
      },
      [g, i, S, a]
    ),
    T = Ir(h);
  return {
    isOutOfRange: T > s || T < a,
    isAtMax: T === s,
    isAtMin: T === a,
    precision: g,
    value: h,
    valueAsNumber: T,
    update: S,
    reset: C,
    increment: v,
    decrement: b,
    clamp: y,
    cast: k,
    setValue: d,
  };
}
function Ir(e) {
  return parseFloat(e.toString().replace(/[^\w.-]+/g, ""));
}
function Fk(e, t) {
  return Math.max(eb(t), eb(e));
}
function op(e, t, n) {
  const r = Ir(e);
  if (Number.isNaN(r)) return;
  const o = Fk(r, t);
  return zk(r, n ?? o);
}
function Lk(e, t, n, r) {
  const o = _t(n);
  return (
    m.useEffect(() => {
      const i = typeof e == "function" ? e() : e ?? document;
      if (!(!n || !i))
        return (
          i.addEventListener(t, o, r),
          () => {
            i.removeEventListener(t, o, r);
          }
        );
    }, [t, e, r, o, n]),
    () => {
      const i = typeof e == "function" ? e() : e ?? document;
      i == null || i.removeEventListener(t, o, r);
    }
  );
}
function AB(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Vh = "data-focus-lock",
  Bk = "data-focus-lock-disabled",
  RB = "data-no-focus-lock",
  IB = "data-autofocus-inside",
  $B = "data-no-autofocus";
function MB(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function OB(e, t) {
  var n = m.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Vk(e, t) {
  return OB(t || null, function (n) {
    return e.forEach(function (r) {
      return MB(r, n);
    });
  });
}
var ip = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  Un = function () {
    return (
      (Un =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Un.apply(this, arguments)
    );
  };
function Wk(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function NB(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Uk(e) {
  return e;
}
function Hk(e, t) {
  t === void 0 && (t = Uk);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (s) {
              return s !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var a = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (a = n);
        }
        var l = function () {
            var c = a;
            (a = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              a.push(c), u();
            },
            filter: function (c) {
              return (a = a.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function Vv(e, t) {
  return t === void 0 && (t = Uk), Hk(e, t);
}
function Gk(e) {
  e === void 0 && (e = {});
  var t = Hk(null);
  return (t.options = Un({ async: !0, ssr: !1 }, e)), t;
}
var Kk = function (e) {
  var t = e.sideCar,
    n = Wk(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return m.createElement(r, Un({}, n));
};
Kk.isSideCarExport = !0;
function DB(e, t) {
  return e.useMedium(t), Kk;
}
var qk = Vv({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  Yk = Vv(),
  zB = Vv(),
  FB = Gk({ async: !0 }),
  LB = [],
  Wv = m.forwardRef(function (t, n) {
    var r,
      o = m.useState(),
      i = o[0],
      a = o[1],
      s = m.useRef(),
      l = m.useRef(!1),
      u = m.useRef(null),
      c = t.children,
      d = t.disabled,
      f = t.noFocusGuards,
      h = t.persistentFocus,
      x = t.crossFrame,
      g = t.autoFocus;
    t.allowTextSelection;
    var S = t.group,
      y = t.className,
      v = t.whiteList,
      b = t.hasPositiveIndices,
      C = t.shards,
      k = C === void 0 ? LB : C,
      T = t.as,
      _ = T === void 0 ? "div" : T,
      j = t.lockProps,
      I = j === void 0 ? {} : j,
      A = t.sideCar,
      M = t.returnFocus,
      K = t.focusOptions,
      U = t.onActivation,
      X = t.onDeactivation,
      Q = m.useState({}),
      te = Q[0],
      O = m.useCallback(
        function () {
          (u.current = u.current || (document && document.activeElement)),
            s.current && U && U(s.current),
            (l.current = !0);
        },
        [U]
      ),
      $ = m.useCallback(
        function () {
          (l.current = !1), X && X(s.current);
        },
        [X]
      );
    m.useEffect(function () {
      d || (u.current = null);
    }, []);
    var B = m.useCallback(
        function (Se) {
          var we = u.current;
          if (we && we.focus) {
            var Ze = typeof M == "function" ? M(we) : M;
            if (Ze) {
              var rt = typeof Ze == "object" ? Ze : void 0;
              (u.current = null),
                Se
                  ? Promise.resolve().then(function () {
                      return we.focus(rt);
                    })
                  : we.focus(rt);
            }
          }
        },
        [M]
      ),
      D = m.useCallback(function (Se) {
        l.current && qk.useMedium(Se);
      }, []),
      F = Yk.useMedium,
      Z = m.useCallback(function (Se) {
        s.current !== Se && ((s.current = Se), a(Se));
      }, []),
      G = Uo(((r = {}), (r[Bk] = d && "disabled"), (r[Vh] = S), r), I),
      ne = f !== !0,
      ce = ne && f !== "tail",
      ie = Vk([n, Z]);
    return m.createElement(
      m.Fragment,
      null,
      ne && [
        m.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: d ? -1 : 0,
          style: ip,
        }),
        b
          ? m.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: d ? -1 : 1,
              style: ip,
            })
          : null,
      ],
      !d &&
        m.createElement(A, {
          id: te,
          sideCar: FB,
          observed: i,
          disabled: d,
          persistentFocus: h,
          crossFrame: x,
          autoFocus: g,
          whiteList: v,
          shards: k,
          onActivation: O,
          onDeactivation: $,
          returnFocus: B,
          focusOptions: K,
        }),
      m.createElement(
        _,
        Uo({ ref: ie }, G, { className: y, onBlur: F, onFocus: D }),
        c
      ),
      ce &&
        m.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: d ? -1 : 0,
          style: ip,
        })
    );
  });
Wv.propTypes = {};
Wv.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
const Xk = Wv;
function Wh(e, t) {
  return (
    (Wh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Wh(e, t)
  );
}
function BB(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Wh(e, t);
}
function Qs(e) {
  "@babel/helpers - typeof";
  return (
    (Qs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qs(e)
  );
}
function VB(e, t) {
  if (Qs(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Qs(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WB(e) {
  var t = VB(e, "string");
  return Qs(t) === "symbol" ? t : String(t);
}
function UB(e, t, n) {
  return (
    (t = WB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function HB(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    var i = [],
      a;
    function s() {
      (a = e(
        i.map(function (u) {
          return u.props;
        })
      )),
        t(a);
    }
    var l = (function (u) {
      BB(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return a;
      };
      var d = c.prototype;
      return (
        (d.componentDidMount = function () {
          i.push(this), s();
        }),
        (d.componentDidUpdate = function () {
          s();
        }),
        (d.componentWillUnmount = function () {
          var h = i.indexOf(this);
          i.splice(h, 1), s();
        }),
        (d.render = function () {
          return Zr.createElement(o, this.props);
        }),
        c
      );
    })(m.PureComponent);
    return UB(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var er = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Ac = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  Qk = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  GB = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  Zk = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  Jk = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  KB = function (e, t) {
    return !e || Jk(e) || (!GB(e) && t(Zk(e)));
  },
  e_ = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = KB(t, e_.bind(void 0, e));
    return e.set(t, r), r;
  },
  qB = function (e, t) {
    return e && !Jk(e) ? (QB(e) ? t(Zk(e)) : !1) : !0;
  },
  t_ = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = qB(t, t_.bind(void 0, e));
    return e.set(t, r), r;
  },
  n_ = function (e) {
    return e.dataset;
  },
  YB = function (e) {
    return e.tagName === "BUTTON";
  },
  r_ = function (e) {
    return e.tagName === "INPUT";
  },
  o_ = function (e) {
    return r_(e) && e.type === "radio";
  },
  XB = function (e) {
    return !((r_(e) || YB(e)) && (e.type === "hidden" || e.disabled));
  },
  QB = function (e) {
    var t = e.getAttribute($B);
    return ![!0, "true", ""].includes(t);
  },
  Uv = function (e) {
    var t;
    return !!(e && !((t = n_(e)) === null || t === void 0) && t.focusGuard);
  },
  Rc = function (e) {
    return !Uv(e);
  },
  ZB = function (e) {
    return !!e;
  },
  JB = function (e, t) {
    var n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  i_ = function (e, t, n) {
    return er(e)
      .map(function (r, o) {
        return {
          node: r,
          index: o,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(JB);
  },
  e6 = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  Hv = e6.join(","),
  t6 = "".concat(Hv, ", [data-focus-guard]"),
  a_ = function (e, t) {
    return er((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? t6 : Hv) ? [r] : [], a_(r));
    }, []);
  },
  n6 = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? Ed([e.contentDocument.body], t)
      : [e];
  },
  Ed = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = a_(r, t),
        a = (o = []).concat.apply(
          o,
          i.map(function (s) {
            return n6(s, t);
          })
        );
      return n.concat(
        a,
        r.parentNode
          ? er(r.parentNode.querySelectorAll(Hv)).filter(function (s) {
              return s === r;
            })
          : []
      );
    }, []);
  },
  r6 = function (e) {
    var t = e.querySelectorAll("[".concat(IB, "]"));
    return er(t)
      .map(function (n) {
        return Ed([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  Gv = function (e, t) {
    return er(e)
      .filter(function (n) {
        return e_(t, n);
      })
      .filter(function (n) {
        return XB(n);
      });
  },
  tb = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      er(e).filter(function (n) {
        return t_(t, n);
      })
    );
  },
  Uh = function (e, t, n) {
    return i_(Gv(Ed(e, n), t), !0, n);
  },
  nb = function (e, t) {
    return i_(Gv(Ed(e), t), !1);
  },
  o6 = function (e, t) {
    return Gv(r6(e), t);
  },
  Yi = function (e, t) {
    return e.shadowRoot
      ? Yi(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : er(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var o =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return o ? Yi(o, t) : !1;
          }
          return Yi(n, t);
        });
  },
  i6 = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (a, s) {
      return !t.has(s);
    });
  },
  s_ = function (e) {
    return e.parentNode ? s_(e.parentNode) : e;
  },
  Kv = function (e) {
    var t = Ac(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute(Vh);
      return (
        n.push.apply(
          n,
          o
            ? i6(
                er(
                  s_(r).querySelectorAll(
                    "["
                      .concat(Vh, '="')
                      .concat(o, '"]:not([')
                      .concat(Bk, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  a6 = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  Zs = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? Zs(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          a6(function () {
            return t.contentWindow.document;
          })
        ? Zs(t.contentWindow.document)
        : t;
    }
  },
  s6 = function (e, t) {
    return e === t;
  },
  l6 = function (e, t) {
    return !!er(e.querySelectorAll("iframe")).some(function (n) {
      return s6(n, t);
    });
  },
  l_ = function (e, t) {
    return (
      t === void 0 && (t = Zs(Qk(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : Kv(e).some(function (n) {
            return Yi(n, t) || l6(n, t);
          })
    );
  },
  u6 = function (e) {
    e === void 0 && (e = document);
    var t = Zs(e);
    return t
      ? er(e.querySelectorAll("[".concat(RB, "]"))).some(function (n) {
          return Yi(n, t);
        })
      : !1;
  },
  c6 = function (e, t) {
    return (
      t
        .filter(o_)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  qv = function (e, t) {
    return o_(e) && e.name ? c6(e, t) : e;
  },
  d6 = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(qv(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  rb = function (e) {
    return e[0] && e.length > 1 ? qv(e[0], e) : e[0];
  },
  ob = function (e, t) {
    return e.length > 1 ? e.indexOf(qv(e[t], e)) : t;
  },
  u_ = "NEW_FOCUS",
  f6 = function (e, t, n, r) {
    var o = e.length,
      i = e[0],
      a = e[o - 1],
      s = Uv(n);
    if (!(n && e.indexOf(n) >= 0)) {
      var l = n !== void 0 ? t.indexOf(n) : -1,
        u = r ? t.indexOf(r) : l,
        c = r ? e.indexOf(r) : -1,
        d = l - u,
        f = t.indexOf(i),
        h = t.indexOf(a),
        x = d6(t),
        g = n !== void 0 ? x.indexOf(n) : -1,
        S = g - (r ? x.indexOf(r) : l),
        y = ob(e, 0),
        v = ob(e, o - 1);
      if (l === -1 || c === -1) return u_;
      if (!d && c >= 0) return c;
      if (l <= f && s && Math.abs(d) > 1) return v;
      if (l >= h && s && Math.abs(d) > 1) return y;
      if (d && Math.abs(S) > 1) return c;
      if (l <= f) return v;
      if (l > h) return y;
      if (d) return Math.abs(d) > 1 ? c : (o + c + d) % o;
    }
  },
  p6 = function (e) {
    return function (t) {
      var n,
        r = (n = n_(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  h6 = function (e, t, n) {
    var r = e.map(function (i) {
        var a = i.node;
        return a;
      }),
      o = tb(r.filter(p6(n)));
    return o && o.length ? rb(o) : rb(tb(t));
  },
  Hh = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Hh(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  ap = function (e, t) {
    for (var n = Hh(e), r = Hh(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  c_ = function (e, t, n) {
    var r = Ac(e),
      o = Ac(t),
      i = r[0],
      a = !1;
    return (
      o.filter(Boolean).forEach(function (s) {
        (a = ap(a || s, s) || a),
          n.filter(Boolean).forEach(function (l) {
            var u = ap(i, l);
            u && (!a || Yi(u, a) ? (a = u) : (a = ap(u, a)));
          });
      }),
      a
    );
  },
  m6 = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(o6(r, t));
    }, []);
  },
  v6 = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(ZB)
    );
  },
  g6 = function (e, t) {
    var n = Zs(Ac(e).length > 0 ? document : Qk(e).ownerDocument),
      r = Kv(e).filter(Rc),
      o = c_(n || e, e, r),
      i = new Map(),
      a = nb(r, i),
      s = Uh(r, i).filter(function (h) {
        var x = h.node;
        return Rc(x);
      });
    if (!(!s[0] && ((s = a), !s[0]))) {
      var l = nb([o], i).map(function (h) {
          var x = h.node;
          return x;
        }),
        u = v6(l, s),
        c = u.map(function (h) {
          var x = h.node;
          return x;
        }),
        d = f6(c, l, n, t);
      if (d === u_) {
        var f = h6(a, c, m6(r, i));
        if (f) return { node: f };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return d === void 0 ? d : u[d];
    }
  },
  y6 = function (e) {
    var t = Kv(e).filter(Rc),
      n = c_(e, e, t),
      r = new Map(),
      o = Uh([n], r, !0),
      i = Uh(t, r)
        .filter(function (a) {
          var s = a.node;
          return Rc(s);
        })
        .map(function (a) {
          var s = a.node;
          return s;
        });
    return o.map(function (a) {
      var s = a.node,
        l = a.index;
      return { node: s, index: l, lockItem: i.indexOf(s) >= 0, guard: Uv(s) };
    });
  },
  x6 = function (e, t) {
    "focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  },
  sp = 0,
  lp = !1,
  d_ = function (e, t, n) {
    n === void 0 && (n = {});
    var r = g6(e, t);
    if (!lp && r) {
      if (sp > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (lp = !0),
          setTimeout(function () {
            lp = !1;
          }, 1);
        return;
      }
      sp++, x6(r.node, n.focusOptions), sp--;
    }
  };
function Yv(e) {
  setTimeout(e, 1);
}
var b6 = function () {
    return document && document.activeElement === document.body;
  },
  S6 = function () {
    return b6() || u6();
  },
  Xi = null,
  Ni = null,
  Qi = null,
  Js = !1,
  w6 = function () {
    return !0;
  },
  C6 = function (t) {
    return (Xi.whiteList || w6)(t);
  },
  k6 = function (t, n) {
    Qi = { observerNode: t, portaledElement: n };
  },
  _6 = function (t) {
    return Qi && Qi.portaledElement === t;
  };
function ib(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var a = r[i];
    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var P6 = function (t) {
    return t && "current" in t ? t.current : t;
  },
  T6 = function (t) {
    return t ? !!Js : Js === "meanwhile";
  },
  E6 = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  j6 = function (t, n) {
    return n.some(function (r) {
      return E6(t, r, r);
    });
  },
  Ic = function () {
    var t = !1;
    if (Xi) {
      var n = Xi,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        a = n.shards,
        s = n.crossFrame,
        l = n.focusOptions,
        u = r || (Qi && Qi.portaledElement),
        c = document && document.activeElement;
      if (u) {
        var d = [u].concat(a.map(P6).filter(Boolean));
        if (
          ((!c || C6(c)) &&
            (o || T6(s) || !S6() || (!Ni && i)) &&
            (u &&
              !(l_(d) || (c && j6(c, d)) || _6(c)) &&
              (document && !Ni && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = d_(d, Ni, { focusOptions: l })), (Qi = {}))),
            (Js = !1),
            (Ni = document && document.activeElement)),
          document)
        ) {
          var f = document && document.activeElement,
            h = y6(d),
            x = h
              .map(function (g) {
                var S = g.node;
                return S;
              })
              .indexOf(f);
          x > -1 &&
            (h
              .filter(function (g) {
                var S = g.guard,
                  y = g.node;
                return S && y.dataset.focusAutoGuard;
              })
              .forEach(function (g) {
                var S = g.node;
                return S.removeAttribute("tabIndex");
              }),
            ib(x, h.length, 1, h),
            ib(x, -1, -1, h));
        }
      }
    }
    return t;
  },
  f_ = function (t) {
    Ic() && t && (t.stopPropagation(), t.preventDefault());
  },
  Xv = function () {
    return Yv(Ic);
  },
  A6 = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || k6(r, n);
  },
  R6 = function () {
    return null;
  },
  p_ = function () {
    (Js = "just"),
      Yv(function () {
        Js = "meanwhile";
      });
  },
  I6 = function () {
    document.addEventListener("focusin", f_),
      document.addEventListener("focusout", Xv),
      window.addEventListener("blur", p_);
  },
  $6 = function () {
    document.removeEventListener("focusin", f_),
      document.removeEventListener("focusout", Xv),
      window.removeEventListener("blur", p_);
  };
function M6(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
function O6(e) {
  var t = e.slice(-1)[0];
  t && !Xi && I6();
  var n = Xi,
    r = n && t && t.id === n.id;
  (Xi = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Ni = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        Ic(),
        Yv(Ic))
      : ($6(), (Ni = null));
}
qk.assignSyncMedium(A6);
Yk.assignMedium(Xv);
zB.assignMedium(function (e) {
  return e({ moveFocusInside: d_, focusInside: l_ });
});
const N6 = HB(M6, O6)(R6);
var h_ = m.forwardRef(function (t, n) {
    return m.createElement(Xk, Uo({ sideCar: N6, ref: n }, t));
  }),
  m_ = Xk.propTypes || {};
m_.sideCar;
AB(m_, ["sideCar"]);
h_.propTypes = {};
const ab = h_;
function v_(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function g_(e) {
  var t;
  if (!v_(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function D6(e) {
  var t, n;
  return (n = (t = y_(e)) == null ? void 0 : t.defaultView) != null
    ? n
    : window;
}
function y_(e) {
  return v_(e) ? e.ownerDocument : document;
}
function z6(e) {
  return y_(e).activeElement;
}
var x_ = (e) => e.hasAttribute("tabindex"),
  F6 = (e) => x_(e) && e.tabIndex === -1;
function L6(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function b_(e) {
  return e.parentElement && b_(e.parentElement) ? !0 : e.hidden;
}
function B6(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function S_(e) {
  if (!g_(e) || b_(e) || L6(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : B6(e) ? !0 : x_(e);
}
function V6(e) {
  return e ? g_(e) && S_(e) && !F6(e) : !1;
}
var W6 = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  U6 = W6.join(),
  H6 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function G6(e) {
  const t = Array.from(e.querySelectorAll(U6));
  return t.unshift(e), t.filter((n) => S_(n) && H6(n));
}
var sb,
  K6 = (sb = ab.default) != null ? sb : ab,
  w_ = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: a,
        autoFocus: s,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = m.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            G6(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var x;
              (x = r.current) == null || x.focus();
            });
      }, [t, r]),
      d = m.useCallback(() => {
        var h;
        (h = n == null ? void 0 : n.current) == null || h.focus();
      }, [n]),
      f = o && !n;
    return p.jsx(K6, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    });
  };
w_.displayName = "FocusLock";
var q6 = ND ? m.useLayoutEffect : m.useEffect;
function lb(e, t = []) {
  const n = m.useRef(e);
  return (
    q6(() => {
      n.current = e;
    }),
    m.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function Y6(e, t) {
  const n = m.useId();
  return m.useMemo(() => e || [t, n].filter(Boolean).join("-"), [e, t, n]);
}
function X6(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function Qv(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = lb(n),
    a = lb(t),
    [s, l] = m.useState(e.defaultIsOpen || !1),
    [u, c] = X6(r, s),
    d = Y6(o, "disclosure"),
    f = m.useCallback(() => {
      u || l(!1), a == null || a();
    }, [u, a]),
    h = m.useCallback(() => {
      u || l(!0), i == null || i();
    }, [u, i]),
    x = m.useCallback(() => {
      (c ? f : h)();
    }, [c, h, f]);
  return {
    isOpen: !!c,
    onOpen: h,
    onClose: f,
    onToggle: x,
    isControlled: u,
    getButtonProps: (g = {}) => ({
      ...g,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: BD(g.onClick, x),
    }),
    getDisclosureProps: (g = {}) => ({ ...g, hidden: !c, id: d }),
  };
}
var [Q6, Z6] = Ue({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  }),
  Ho = H(function (t, n) {
    const r = xn("Input", t),
      { children: o, className: i, ...a } = Qe(t),
      s = ee("chakra-input__group", i),
      l = {},
      u = Pd(o),
      c = r.field;
    u.forEach((f) => {
      var h, x;
      r &&
        (c &&
          f.type.id === "InputLeftElement" &&
          (l.paddingStart = (h = c.height) != null ? h : c.h),
        c &&
          f.type.id === "InputRightElement" &&
          (l.paddingEnd = (x = c.height) != null ? x : c.h),
        f.type.id === "InputRightAddon" && (l.borderEndRadius = 0),
        f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0));
    });
    const d = u.map((f) => {
      var h, x;
      const g = Kw({
        size: ((h = f.props) == null ? void 0 : h.size) || t.size,
        variant: ((x = f.props) == null ? void 0 : x.variant) || t.variant,
      });
      return f.type.id !== "Input"
        ? m.cloneElement(f, g)
        : m.cloneElement(f, Object.assign(g, l, f.props));
    });
    return p.jsx(L.div, {
      className: s,
      ref: n,
      __css: {
        width: "100%",
        display: "flex",
        position: "relative",
        isolation: "isolate",
        ...r.group,
      },
      "data-group": !0,
      ...a,
      children: p.jsx(Q6, { value: r, children: d }),
    });
  });
Ho.displayName = "InputGroup";
var J6 = L("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      zIndex: 2,
    },
  }),
  jd = H(function (t, n) {
    var r, o;
    const { placement: i = "left", ...a } = t,
      s = Z6(),
      l = s.field,
      c = {
        [i === "left" ? "insetStart" : "insetEnd"]: "0",
        width:
          (r = l == null ? void 0 : l.height) != null
            ? r
            : l == null
            ? void 0
            : l.h,
        height:
          (o = l == null ? void 0 : l.height) != null
            ? o
            : l == null
            ? void 0
            : l.h,
        fontSize: l == null ? void 0 : l.fontSize,
        ...s.element,
      };
    return p.jsx(J6, { ref: n, __css: c, ...a });
  });
jd.id = "InputElement";
jd.displayName = "InputElement";
var C_ = H(function (t, n) {
  const { className: r, ...o } = t,
    i = ee("chakra-input__left-element", r);
  return p.jsx(jd, { ref: n, placement: "left", className: i, ...o });
});
C_.id = "InputLeftElement";
C_.displayName = "InputLeftElement";
var ro = H(function (t, n) {
  const { className: r, ...o } = t,
    i = ee("chakra-input__right-element", r);
  return p.jsx(jd, { ref: n, placement: "right", className: i, ...o });
});
ro.id = "InputRightElement";
ro.displayName = "InputRightElement";
var be = H(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = xn("Input", o),
    a = Qe(o),
    s = Bv(a),
    l = ee("chakra-input", t.className);
  return p.jsx(L.input, {
    size: r,
    ...s,
    __css: i.field,
    ref: n,
    className: l,
  });
});
be.displayName = "Input";
be.id = "Input";
var k_ = H(function (t, n) {
  const r = In("Link", t),
    { className: o, isExternal: i, ...a } = Qe(t);
  return p.jsx(L.a, {
    target: i ? "_blank" : void 0,
    rel: i ? "noopener" : void 0,
    ref: n,
    className: ee("chakra-link", o),
    ...a,
    __css: r,
  });
});
k_.displayName = "Link";
var [eV, __] = Ue({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  ka = H(function (t, n) {
    const r = xn("List", t),
      {
        children: o,
        styleType: i = "none",
        stylePosition: a,
        spacing: s,
        ...l
      } = Qe(t),
      u = Pd(o),
      d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
    return p.jsx(eV, {
      value: r,
      children: p.jsx(L.ul, {
        ref: n,
        listStyleType: i,
        listStylePosition: a,
        role: "list",
        __css: { ...r.container, ...d },
        ...l,
        children: u,
      }),
    });
  });
ka.displayName = "List";
var tV = H((e, t) => {
  const { as: n, ...r } = e;
  return p.jsx(ka, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...r,
  });
});
tV.displayName = "OrderedList";
var P_ = H(function (t, n) {
  const { as: r, ...o } = t;
  return p.jsx(ka, {
    ref: n,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...o,
  });
});
P_.displayName = "UnorderedList";
var gr = H(function (t, n) {
  const r = __();
  return p.jsx(L.li, { ref: n, ...t, __css: r.item });
});
gr.displayName = "ListItem";
var nV = H(function (t, n) {
  const r = __();
  return p.jsx(lo, { ref: n, role: "presentation", ...t, __css: r.icon });
});
nV.displayName = "ListIcon";
function rV(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : An(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
var pa = H(function (t, n) {
  const r = In("Text", t),
    { className: o, align: i, decoration: a, casing: s, ...l } = Qe(t),
    u = Kw({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return p.jsx(L.p, {
    ref: n,
    className: ee("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
pa.displayName = "Text";
var T_ = (e) =>
  p.jsx(L.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
T_.displayName = "StackItem";
function oV(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": rV(n, (o) => r[o]) };
}
var E_ = H((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    h = n ? "row" : r ?? "column",
    x = m.useMemo(() => oV({ spacing: a, direction: h }), [a, h]),
    g = !!u,
    S = !d && !g,
    y = m.useMemo(() => {
      const b = Pd(l);
      return S
        ? b
        : b.map((C, k) => {
            const T = typeof C.key < "u" ? C.key : k,
              _ = k + 1 === b.length,
              I = d ? p.jsx(T_, { children: C }, T) : C;
            if (!g) return I;
            const A = m.cloneElement(u, { __css: x }),
              M = _ ? null : A;
            return p.jsxs(m.Fragment, { children: [I, M] }, T);
          });
    }, [u, x, g, S, d, l]),
    v = ee("chakra-stack", c);
  return p.jsx(L.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: h,
    flexWrap: s,
    gap: g ? void 0 : a,
    className: v,
    ...f,
    children: y,
  });
});
E_.displayName = "Stack";
var fr = H((e, t) =>
  p.jsx(E_, { align: "center", ...e, direction: "column", ref: t })
);
fr.displayName = "VStack";
var Ve = L("div");
Ve.displayName = "Box";
var j_ = H(function (t, n) {
  const { size: r, centerContent: o = !0, ...i } = t,
    a = o
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return p.jsx(Ve, {
    ref: n,
    boxSize: r,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
j_.displayName = "Square";
var iV = H(function (t, n) {
  const { size: r, ...o } = t;
  return p.jsx(j_, { size: r, ref: n, borderRadius: "9999px", ...o });
});
iV.displayName = "Circle";
var Zv = H(function (t, n) {
  const { className: r, centerContent: o, ...i } = Qe(t),
    a = In("Container", t);
  return p.jsx(L.div, {
    ref: n,
    className: ee("chakra-container", r),
    ...i,
    __css: {
      ...a,
      ...(o && {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    },
  });
});
Zv.displayName = "Container";
var A_ = H(function (t, n) {
  const {
      borderLeftWidth: r,
      borderBottomWidth: o,
      borderTopWidth: i,
      borderRightWidth: a,
      borderWidth: s,
      borderStyle: l,
      borderColor: u,
      ...c
    } = In("Divider", t),
    { className: d, orientation: f = "horizontal", __css: h, ...x } = Qe(t),
    g = {
      vertical: { borderLeftWidth: r || a || s || "1px", height: "100%" },
      horizontal: { borderBottomWidth: o || i || s || "1px", width: "100%" },
    };
  return p.jsx(L.hr, {
    ref: n,
    "aria-orientation": f,
    ...x,
    __css: { ...c, border: "0", borderColor: u, borderStyle: l, ...g[f], ...h },
    className: ee("chakra-divider", d),
  });
});
A_.displayName = "Divider";
function aV(e) {
  const { key: t } = e;
  return t.length === 1 || (t.length > 1 && /[^a-zA-Z0-9]/.test(t));
}
function sV(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e,
    [r, o] = m.useState([]),
    i = m.useRef(),
    a = () => {
      i.current && (clearTimeout(i.current), (i.current = null));
    },
    s = () => {
      a(),
        (i.current = setTimeout(() => {
          o([]), (i.current = null);
        }, t));
    };
  m.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (aV(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()),
          o(d),
          u(d.join("")),
          s();
      }
    };
  }
  return l;
}
function lV(e, t, n, r) {
  if (t == null) return r;
  if (!r) return e.find((a) => n(a).toLowerCase().startsWith(t.toLowerCase()));
  const o = e.filter((i) => n(i).toLowerCase().startsWith(t.toLowerCase()));
  if (o.length > 0) {
    let i;
    return o.includes(r)
      ? ((i = o.indexOf(r) + 1), i === o.length && (i = 0), o[i])
      : ((i = e.indexOf(o[0])), e[i]);
  }
  return r;
}
function uV() {
  const e = m.useRef(new Map()),
    t = e.current,
    n = m.useCallback((o, i, a, s) => {
      e.current.set(a, { type: i, el: o, options: s }),
        o.addEventListener(i, a, s);
    }, []),
    r = m.useCallback((o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    }, []);
  return (
    m.useEffect(
      () => () => {
        t.forEach((o, i) => {
          r(o.el, o.type, i, o.options);
        });
      },
      [r, t]
    ),
    { add: n, remove: r }
  );
}
function up(e) {
  const t = e.target,
    { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function R_(e = {}) {
  const {
      ref: t,
      isDisabled: n,
      isFocusable: r,
      clickOnEnter: o = !0,
      clickOnSpace: i = !0,
      onMouseDown: a,
      onMouseUp: s,
      onClick: l,
      onKeyDown: u,
      onKeyUp: c,
      tabIndex: d,
      onMouseOver: f,
      onMouseLeave: h,
      ...x
    } = e,
    [g, S] = m.useState(!0),
    [y, v] = m.useState(!1),
    b = uV(),
    C = (O) => {
      O && O.tagName !== "BUTTON" && S(!1);
    },
    k = g ? d : d || 0,
    T = n && !r,
    _ = m.useCallback(
      (O) => {
        if (n) {
          O.stopPropagation(), O.preventDefault();
          return;
        }
        O.currentTarget.focus(), l == null || l(O);
      },
      [n, l]
    ),
    j = m.useCallback(
      (O) => {
        y &&
          up(O) &&
          (O.preventDefault(),
          O.stopPropagation(),
          v(!1),
          b.remove(document, "keyup", j, !1));
      },
      [y, b]
    ),
    I = m.useCallback(
      (O) => {
        if (
          (u == null || u(O),
          n || O.defaultPrevented || O.metaKey || !up(O.nativeEvent) || g)
        )
          return;
        const $ = o && O.key === "Enter";
        i && O.key === " " && (O.preventDefault(), v(!0)),
          $ && (O.preventDefault(), O.currentTarget.click()),
          b.add(document, "keyup", j, !1);
      },
      [n, g, u, o, i, b, j]
    ),
    A = m.useCallback(
      (O) => {
        if (
          (c == null || c(O),
          n || O.defaultPrevented || O.metaKey || !up(O.nativeEvent) || g)
        )
          return;
        i &&
          O.key === " " &&
          (O.preventDefault(), v(!1), O.currentTarget.click());
      },
      [i, g, n, c]
    ),
    M = m.useCallback(
      (O) => {
        O.button === 0 && (v(!1), b.remove(document, "mouseup", M, !1));
      },
      [b]
    ),
    K = m.useCallback(
      (O) => {
        if (O.button !== 0) return;
        if (n) {
          O.stopPropagation(), O.preventDefault();
          return;
        }
        g || v(!0),
          O.currentTarget.focus({ preventScroll: !0 }),
          b.add(document, "mouseup", M, !1),
          a == null || a(O);
      },
      [n, g, a, b, M]
    ),
    U = m.useCallback(
      (O) => {
        O.button === 0 && (g || v(!1), s == null || s(O));
      },
      [s, g]
    ),
    X = m.useCallback(
      (O) => {
        if (n) {
          O.preventDefault();
          return;
        }
        f == null || f(O);
      },
      [n, f]
    ),
    Q = m.useCallback(
      (O) => {
        y && (O.preventDefault(), v(!1)), h == null || h(O);
      },
      [y, h]
    ),
    te = xt(t, C);
  return g
    ? {
        ...x,
        ref: te,
        type: "button",
        "aria-disabled": T ? void 0 : n,
        disabled: T,
        onClick: _,
        onMouseDown: a,
        onMouseUp: s,
        onKeyUp: c,
        onKeyDown: u,
        onMouseOver: f,
        onMouseLeave: h,
      }
    : {
        ...x,
        ref: te,
        role: "button",
        "data-active": Hn(y),
        "aria-disabled": n ? "true" : void 0,
        tabIndex: T ? void 0 : k,
        onClick: _,
        onMouseDown: K,
        onMouseUp: U,
        onKeyUp: A,
        onKeyDown: I,
        onMouseOver: X,
        onMouseLeave: Q,
      };
}
function cV(e) {
  const t = e.current;
  if (!t) return !1;
  const n = z6(t);
  return !n || t.contains(n) ? !1 : !!V6(n);
}
function dV(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t,
    i = n && !r;
  ca(() => {
    if (!i || cV(e)) return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return (
        (s = requestAnimationFrame(() => {
          a.focus({ preventScroll: !0 });
        })),
        () => {
          cancelAnimationFrame(s);
        }
      );
  }, [i, e, o]);
}
var ui = (e, t) => ({ var: e, varRef: t ? `var(${e}, ${t})` : `var(${e})` }),
  Ut = {
    arrowShadowColor: ui("--popper-arrow-shadow-color"),
    arrowSize: ui("--popper-arrow-size", "8px"),
    arrowSizeHalf: ui("--popper-arrow-size-half"),
    arrowBg: ui("--popper-arrow-bg"),
    transformOrigin: ui("--popper-transform-origin"),
    arrowOffset: ui("--popper-arrow-offset"),
  };
function fV(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var pV = {
    top: "bottom center",
    "top-start": "bottom left",
    "top-end": "bottom right",
    bottom: "top center",
    "bottom-start": "top left",
    "bottom-end": "top right",
    left: "right center",
    "left-start": "right top",
    "left-end": "right bottom",
    right: "left center",
    "right-start": "left top",
    "right-end": "left bottom",
  },
  hV = (e) => pV[e],
  ub = { scroll: !0, resize: !0 };
function mV(e) {
  let t;
  return (
    typeof e == "object"
      ? (t = { enabled: !0, options: { ...ub, ...e } })
      : (t = { enabled: e, options: ub }),
    t
  );
}
var vV = {
    name: "matchWidth",
    enabled: !0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state: e }) => {
      e.styles.popper.width = `${e.rects.reference.width}px`;
    },
    effect:
      ({ state: e }) =>
      () => {
        const t = e.elements.reference;
        e.elements.popper.style.width = `${t.offsetWidth}px`;
      },
  },
  gV = {
    name: "transformOrigin",
    enabled: !0,
    phase: "write",
    fn: ({ state: e }) => {
      cb(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        cb(e);
      },
  },
  cb = (e) => {
    e.elements.popper.style.setProperty(
      Ut.transformOrigin.var,
      hV(e.placement)
    );
  },
  yV = {
    name: "positionArrow",
    enabled: !0,
    phase: "afterWrite",
    fn: ({ state: e }) => {
      xV(e);
    },
  },
  xV = (e) => {
    var t;
    if (!e.placement) return;
    const n = bV(e.placement);
    if ((t = e.elements) != null && t.arrow && n) {
      Object.assign(e.elements.arrow.style, {
        [n.property]: n.value,
        width: Ut.arrowSize.varRef,
        height: Ut.arrowSize.varRef,
        zIndex: -1,
      });
      const r = {
        [Ut.arrowSizeHalf.var]: `calc(${Ut.arrowSize.varRef} / 2 - 1px)`,
        [Ut.arrowOffset.var]: `calc(${Ut.arrowSizeHalf.varRef} * -1)`,
      };
      for (const o in r) e.elements.arrow.style.setProperty(o, r[o]);
    }
  },
  bV = (e) => {
    if (e.startsWith("top"))
      return { property: "bottom", value: Ut.arrowOffset.varRef };
    if (e.startsWith("bottom"))
      return { property: "top", value: Ut.arrowOffset.varRef };
    if (e.startsWith("left"))
      return { property: "right", value: Ut.arrowOffset.varRef };
    if (e.startsWith("right"))
      return { property: "left", value: Ut.arrowOffset.varRef };
  },
  SV = {
    name: "innerArrow",
    enabled: !0,
    phase: "main",
    requires: ["arrow"],
    fn: ({ state: e }) => {
      db(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        db(e);
      },
  },
  db = (e) => {
    if (!e.elements.arrow) return;
    const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
    if (!t) return;
    const n = fV(e.placement);
    n && t.style.setProperty("--popper-arrow-default-shadow", n),
      Object.assign(t.style, {
        transform: "rotate(45deg)",
        background: Ut.arrowBg.varRef,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit",
        boxShadow:
          "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
      });
  },
  wV = {
    "start-start": { ltr: "left-start", rtl: "right-start" },
    "start-end": { ltr: "left-end", rtl: "right-end" },
    "end-start": { ltr: "right-start", rtl: "left-start" },
    "end-end": { ltr: "right-end", rtl: "left-end" },
    start: { ltr: "left", rtl: "right" },
    end: { ltr: "right", rtl: "left" },
  },
  CV = {
    "auto-start": "auto-end",
    "auto-end": "auto-start",
    "top-start": "top-end",
    "top-end": "top-start",
    "bottom-start": "bottom-end",
    "bottom-end": "bottom-start",
  };
function kV(e, t = "ltr") {
  var n, r;
  const o = ((n = wV[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = CV[e]) != null ? r : o;
}
var zt = "top",
  gn = "bottom",
  yn = "right",
  Ft = "left",
  Jv = "auto",
  gl = [zt, gn, yn, Ft],
  ha = "start",
  el = "end",
  _V = "clippingParents",
  I_ = "viewport",
  Wa = "popper",
  PV = "reference",
  fb = gl.reduce(function (e, t) {
    return e.concat([t + "-" + ha, t + "-" + el]);
  }, []),
  $_ = [].concat(gl, [Jv]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ha, t + "-" + el]);
  }, []),
  TV = "beforeRead",
  EV = "read",
  jV = "afterRead",
  AV = "beforeMain",
  RV = "main",
  IV = "afterMain",
  $V = "beforeWrite",
  MV = "write",
  OV = "afterWrite",
  NV = [TV, EV, jV, AV, RV, IV, $V, MV, OV];
function Jn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Go(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function hn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function eg(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function DV(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !hn(i) ||
      !Jn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function zV(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !hn(o) ||
          !Jn(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const FV = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: DV,
  effect: zV,
  requires: ["computeStyles"],
};
function Zn(e) {
  return e.split("-")[0];
}
var Do = Math.max,
  $c = Math.min,
  ma = Math.round;
function Gh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function M_() {
  return !/^((?!chrome|android).)*safari/i.test(Gh());
}
function va(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    hn(e) &&
    ((o = (e.offsetWidth > 0 && ma(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ma(r.height) / e.offsetHeight) || 1));
  var a = Go(e) ? Qt(e) : window,
    s = a.visualViewport,
    l = !M_() && n,
    u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (l && s ? s.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function tg(e) {
  var t = va(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function O_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && eg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kr(e) {
  return Qt(e).getComputedStyle(e);
}
function LV(e) {
  return ["table", "td", "th"].indexOf(Jn(e)) >= 0;
}
function uo(e) {
  return ((Go(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Ad(e) {
  return Jn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (eg(e) ? e.host : null) || uo(e);
}
function pb(e) {
  return !hn(e) || kr(e).position === "fixed" ? null : e.offsetParent;
}
function BV(e) {
  var t = /firefox/i.test(Gh()),
    n = /Trident/i.test(Gh());
  if (n && hn(e)) {
    var r = kr(e);
    if (r.position === "fixed") return null;
  }
  var o = Ad(e);
  for (eg(o) && (o = o.host); hn(o) && ["html", "body"].indexOf(Jn(o)) < 0; ) {
    var i = kr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function yl(e) {
  for (var t = Qt(e), n = pb(e); n && LV(n) && kr(n).position === "static"; )
    n = pb(n);
  return n &&
    (Jn(n) === "html" || (Jn(n) === "body" && kr(n).position === "static"))
    ? t
    : n || BV(e) || t;
}
function ng(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xs(e, t, n) {
  return Do(e, $c(t, n));
}
function VV(e, t, n) {
  var r = xs(e, t, n);
  return r > n ? n : r;
}
function N_() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function D_(e) {
  return Object.assign({}, N_(), e);
}
function z_(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var WV = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    D_(typeof t != "number" ? t : z_(t, gl))
  );
};
function UV(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = Zn(n.placement),
    l = ng(s),
    u = [Ft, yn].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = WV(o.padding, n),
      f = tg(i),
      h = l === "y" ? zt : Ft,
      x = l === "y" ? gn : yn,
      g =
        n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
      S = a[l] - n.rects.reference[l],
      y = yl(i),
      v = y ? (l === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      b = g / 2 - S / 2,
      C = d[h],
      k = v - f[c] - d[x],
      T = v / 2 - f[c] / 2 + b,
      _ = xs(C, T, k),
      j = l;
    n.modifiersData[r] = ((t = {}), (t[j] = _), (t.centerOffset = _ - T), t);
  }
}
function HV(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (O_(t.elements.popper, o) && (t.elements.arrow = o)));
}
const GV = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: UV,
  effect: HV,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ga(e) {
  return e.split("-")[1];
}
var KV = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function qV(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: ma(n * o) / o || 0, y: ma(r * o) / o || 0 };
}
function hb(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    h = f === void 0 ? 0 : f,
    x = a.y,
    g = x === void 0 ? 0 : x,
    S = typeof c == "function" ? c({ x: h, y: g }) : { x: h, y: g };
  (h = S.x), (g = S.y);
  var y = a.hasOwnProperty("x"),
    v = a.hasOwnProperty("y"),
    b = Ft,
    C = zt,
    k = window;
  if (u) {
    var T = yl(n),
      _ = "clientHeight",
      j = "clientWidth";
    if (
      (T === Qt(n) &&
        ((T = uo(n)),
        kr(T).position !== "static" &&
          s === "absolute" &&
          ((_ = "scrollHeight"), (j = "scrollWidth"))),
      (T = T),
      o === zt || ((o === Ft || o === yn) && i === el))
    ) {
      C = gn;
      var I = d && T === k && k.visualViewport ? k.visualViewport.height : T[_];
      (g -= I - r.height), (g *= l ? 1 : -1);
    }
    if (o === Ft || ((o === zt || o === gn) && i === el)) {
      b = yn;
      var A = d && T === k && k.visualViewport ? k.visualViewport.width : T[j];
      (h -= A - r.width), (h *= l ? 1 : -1);
    }
  }
  var M = Object.assign({ position: s }, u && KV),
    K = c === !0 ? qV({ x: h, y: g }, Qt(n)) : { x: h, y: g };
  if (((h = K.x), (g = K.y), l)) {
    var U;
    return Object.assign(
      {},
      M,
      ((U = {}),
      (U[C] = v ? "0" : ""),
      (U[b] = y ? "0" : ""),
      (U.transform =
        (k.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + g + "px)"
          : "translate3d(" + h + "px, " + g + "px, 0)"),
      U)
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}),
    (t[C] = v ? g + "px" : ""),
    (t[b] = y ? h + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function YV(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s,
    u = {
      placement: Zn(t.placement),
      variation: ga(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      hb(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        hb(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const XV = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: YV,
  data: {},
};
var iu = { passive: !0 };
function QV(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = Qt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, iu);
      }),
    s && l.addEventListener("resize", n.update, iu),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, iu);
        }),
        s && l.removeEventListener("resize", n.update, iu);
    }
  );
}
const ZV = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: QV,
  data: {},
};
var JV = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Fu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return JV[t];
  });
}
var e8 = { start: "end", end: "start" };
function mb(e) {
  return e.replace(/start|end/g, function (t) {
    return e8[t];
  });
}
function rg(e) {
  var t = Qt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function og(e) {
  return va(uo(e)).left + rg(e).scrollLeft;
}
function t8(e, t) {
  var n = Qt(e),
    r = uo(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = M_();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + og(e), y: l };
}
function n8(e) {
  var t,
    n = uo(e),
    r = rg(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Do(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Do(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + og(e),
    l = -r.scrollTop;
  return (
    kr(o || n).direction === "rtl" &&
      (s += Do(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function ig(e) {
  var t = kr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function F_(e) {
  return ["html", "body", "#document"].indexOf(Jn(e)) >= 0
    ? e.ownerDocument.body
    : hn(e) && ig(e)
    ? e
    : F_(Ad(e));
}
function bs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = F_(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Qt(r),
    a = o ? [i].concat(i.visualViewport || [], ig(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(bs(Ad(a)));
}
function Kh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function r8(e, t) {
  var n = va(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function vb(e, t, n) {
  return t === I_ ? Kh(t8(e, n)) : Go(t) ? r8(t, n) : Kh(n8(uo(e)));
}
function o8(e) {
  var t = bs(Ad(e)),
    n = ["absolute", "fixed"].indexOf(kr(e).position) >= 0,
    r = n && hn(e) ? yl(e) : e;
  return Go(r)
    ? t.filter(function (o) {
        return Go(o) && O_(o, r) && Jn(o) !== "body";
      })
    : [];
}
function i8(e, t, n, r) {
  var o = t === "clippingParents" ? o8(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (l, u) {
      var c = vb(e, u, r);
      return (
        (l.top = Do(c.top, l.top)),
        (l.right = $c(c.right, l.right)),
        (l.bottom = $c(c.bottom, l.bottom)),
        (l.left = Do(c.left, l.left)),
        l
      );
    }, vb(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function L_(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Zn(r) : null,
    i = r ? ga(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case zt:
      l = { x: a, y: t.y - n.height };
      break;
    case gn:
      l = { x: a, y: t.y + t.height };
      break;
    case yn:
      l = { x: t.x + t.width, y: s };
      break;
    case Ft:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? ng(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ha:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case el:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function tl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    l = s === void 0 ? _V : s,
    u = n.rootBoundary,
    c = u === void 0 ? I_ : u,
    d = n.elementContext,
    f = d === void 0 ? Wa : d,
    h = n.altBoundary,
    x = h === void 0 ? !1 : h,
    g = n.padding,
    S = g === void 0 ? 0 : g,
    y = D_(typeof S != "number" ? S : z_(S, gl)),
    v = f === Wa ? PV : Wa,
    b = e.rects.popper,
    C = e.elements[x ? v : f],
    k = i8(Go(C) ? C : C.contextElement || uo(e.elements.popper), l, c, a),
    T = va(e.elements.reference),
    _ = L_({ reference: T, element: b, strategy: "absolute", placement: o }),
    j = Kh(Object.assign({}, b, _)),
    I = f === Wa ? j : T,
    A = {
      top: k.top - I.top + y.top,
      bottom: I.bottom - k.bottom + y.bottom,
      left: k.left - I.left + y.left,
      right: I.right - k.right + y.right,
    },
    M = e.modifiersData.offset;
  if (f === Wa && M) {
    var K = M[o];
    Object.keys(A).forEach(function (U) {
      var X = [yn, gn].indexOf(U) >= 0 ? 1 : -1,
        Q = [zt, gn].indexOf(U) >= 0 ? "y" : "x";
      A[U] += K[Q] * X;
    });
  }
  return A;
}
function a8(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? $_ : l,
    c = ga(r),
    d = c
      ? s
        ? fb
        : fb.filter(function (x) {
            return ga(x) === c;
          })
      : gl,
    f = d.filter(function (x) {
      return u.indexOf(x) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (x, g) {
    return (
      (x[g] = tl(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        Zn(g)
      ]),
      x
    );
  }, {});
  return Object.keys(h).sort(function (x, g) {
    return h[x] - h[g];
  });
}
function s8(e) {
  if (Zn(e) === Jv) return [];
  var t = Fu(e);
  return [mb(e), t, mb(t)];
}
function l8(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        h = n.flipVariations,
        x = h === void 0 ? !0 : h,
        g = n.allowedAutoPlacements,
        S = t.options.placement,
        y = Zn(S),
        v = y === S,
        b = l || (v || !x ? [Fu(S)] : s8(S)),
        C = [S].concat(b).reduce(function (ne, ce) {
          return ne.concat(
            Zn(ce) === Jv
              ? a8(t, {
                  placement: ce,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: x,
                  allowedAutoPlacements: g,
                })
              : ce
          );
        }, []),
        k = t.rects.reference,
        T = t.rects.popper,
        _ = new Map(),
        j = !0,
        I = C[0],
        A = 0;
      A < C.length;
      A++
    ) {
      var M = C[A],
        K = Zn(M),
        U = ga(M) === ha,
        X = [zt, gn].indexOf(K) >= 0,
        Q = X ? "width" : "height",
        te = tl(t, {
          placement: M,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        O = X ? (U ? yn : Ft) : U ? gn : zt;
      k[Q] > T[Q] && (O = Fu(O));
      var $ = Fu(O),
        B = [];
      if (
        (i && B.push(te[K] <= 0),
        s && B.push(te[O] <= 0, te[$] <= 0),
        B.every(function (ne) {
          return ne;
        }))
      ) {
        (I = M), (j = !1);
        break;
      }
      _.set(M, B);
    }
    if (j)
      for (
        var D = x ? 3 : 1,
          F = function (ce) {
            var ie = C.find(function (Se) {
              var we = _.get(Se);
              if (we)
                return we.slice(0, ce).every(function (Ze) {
                  return Ze;
                });
            });
            if (ie) return (I = ie), "break";
          },
          Z = D;
        Z > 0;
        Z--
      ) {
        var G = F(Z);
        if (G === "break") break;
      }
    t.placement !== I &&
      ((t.modifiersData[r]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const u8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: l8,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function gb(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function yb(e) {
  return [zt, yn, gn, Ft].some(function (t) {
    return e[t] >= 0;
  });
}
function c8(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = tl(t, { elementContext: "reference" }),
    s = tl(t, { altBoundary: !0 }),
    l = gb(a, r),
    u = gb(s, o, i),
    c = yb(l),
    d = yb(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const d8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: c8,
};
function f8(e, t, n) {
  var r = Zn(e),
    o = [Ft, zt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [Ft, yn].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function p8(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = $_.reduce(function (c, d) {
      return (c[d] = f8(d, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const h8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: p8,
};
function m8(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = L_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const v8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: m8,
  data: {},
};
function g8(e) {
  return e === "x" ? "y" : "x";
}
function y8(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    h = f === void 0 ? !0 : f,
    x = n.tetherOffset,
    g = x === void 0 ? 0 : x,
    S = tl(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    y = Zn(t.placement),
    v = ga(t.placement),
    b = !v,
    C = ng(y),
    k = g8(C),
    T = t.modifiersData.popperOffsets,
    _ = t.rects.reference,
    j = t.rects.popper,
    I =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    A =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    K = { x: 0, y: 0 };
  if (T) {
    if (i) {
      var U,
        X = C === "y" ? zt : Ft,
        Q = C === "y" ? gn : yn,
        te = C === "y" ? "height" : "width",
        O = T[C],
        $ = O + S[X],
        B = O - S[Q],
        D = h ? -j[te] / 2 : 0,
        F = v === ha ? _[te] : j[te],
        Z = v === ha ? -j[te] : -_[te],
        G = t.elements.arrow,
        ne = h && G ? tg(G) : { width: 0, height: 0 },
        ce = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : N_(),
        ie = ce[X],
        Se = ce[Q],
        we = xs(0, _[te], ne[te]),
        Ze = b
          ? _[te] / 2 - D - we - ie - A.mainAxis
          : F - we - ie - A.mainAxis,
        rt = b
          ? -_[te] / 2 + D + we + Se + A.mainAxis
          : Z + we + Se + A.mainAxis,
        He = t.elements.arrow && yl(t.elements.arrow),
        tn = He ? (C === "y" ? He.clientTop || 0 : He.clientLeft || 0) : 0,
        nn = (U = M == null ? void 0 : M[C]) != null ? U : 0,
        ot = O + Ze - nn - tn,
        ei = O + rt - nn,
        co = xs(h ? $c($, ot) : $, O, h ? Do(B, ei) : B);
      (T[C] = co), (K[C] = co - O);
    }
    if (s) {
      var fo,
        ti = C === "x" ? zt : Ft,
        ni = C === "x" ? gn : yn,
        St = T[k],
        bn = k === "y" ? "height" : "width",
        rn = St + S[ti],
        wt = St - S[ni],
        tr = [zt, Ft].indexOf(y) !== -1,
        po = (fo = M == null ? void 0 : M[k]) != null ? fo : 0,
        ri = tr ? rn : St - _[bn] - j[bn] - po + A.altAxis,
        oi = tr ? St + _[bn] + j[bn] - po - A.altAxis : wt,
        z = h && tr ? VV(ri, St, oi) : xs(h ? ri : rn, St, h ? oi : wt);
      (T[k] = z), (K[k] = z - St);
    }
    t.modifiersData[r] = K;
  }
}
const x8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: y8,
  requiresIfExists: ["offset"],
};
function b8(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function S8(e) {
  return e === Qt(e) || !hn(e) ? rg(e) : b8(e);
}
function w8(e) {
  var t = e.getBoundingClientRect(),
    n = ma(t.width) / e.offsetWidth || 1,
    r = ma(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function C8(e, t, n) {
  n === void 0 && (n = !1);
  var r = hn(t),
    o = hn(t) && w8(t),
    i = uo(t),
    a = va(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Jn(t) !== "body" || ig(i)) && (s = S8(t)),
      hn(t)
        ? ((l = va(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = og(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function k8(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function _8(e) {
  var t = k8(e);
  return NV.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function P8(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function T8(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var xb = { placement: "bottom", modifiers: [], strategy: "absolute" };
function bb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function E8(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? xb : o;
  return function (s, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xb, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: c,
        setOptions: function (y) {
          var v = typeof y == "function" ? y(c.options) : y;
          g(),
            (c.options = Object.assign({}, i, c.options, v)),
            (c.scrollParents = {
              reference: Go(s)
                ? bs(s)
                : s.contextElement
                ? bs(s.contextElement)
                : [],
              popper: bs(l),
            });
          var b = _8(T8([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = b.filter(function (C) {
              return C.enabled;
            })),
            x(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var y = c.elements,
              v = y.reference,
              b = y.popper;
            if (bb(v, b)) {
              (c.rects = {
                reference: C8(v, yl(b), c.options.strategy === "fixed"),
                popper: tg(b),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (A) {
                  return (c.modifiersData[A.name] = Object.assign({}, A.data));
                });
              for (var C = 0; C < c.orderedModifiers.length; C++) {
                if (c.reset === !0) {
                  (c.reset = !1), (C = -1);
                  continue;
                }
                var k = c.orderedModifiers[C],
                  T = k.fn,
                  _ = k.options,
                  j = _ === void 0 ? {} : _,
                  I = k.name;
                typeof T == "function" &&
                  (c = T({ state: c, options: j, name: I, instance: h }) || c);
              }
            }
          }
        },
        update: P8(function () {
          return new Promise(function (S) {
            h.forceUpdate(), S(c);
          });
        }),
        destroy: function () {
          g(), (f = !0);
        },
      };
    if (!bb(s, l)) return h;
    h.setOptions(u).then(function (S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function x() {
      c.orderedModifiers.forEach(function (S) {
        var y = S.name,
          v = S.options,
          b = v === void 0 ? {} : v,
          C = S.effect;
        if (typeof C == "function") {
          var k = C({ state: c, name: y, instance: h, options: b }),
            T = function () {};
          d.push(k || T);
        }
      });
    }
    function g() {
      d.forEach(function (S) {
        return S();
      }),
        (d = []);
    }
    return h;
  };
}
var j8 = [ZV, v8, XV, FV, h8, u8, x8, GV, d8],
  A8 = E8({ defaultModifiers: j8 });
function R8(e = {}) {
  const {
      enabled: t = !0,
      modifiers: n,
      placement: r = "bottom",
      strategy: o = "absolute",
      arrowPadding: i = 8,
      eventListeners: a = !0,
      offset: s,
      gutter: l = 8,
      flip: u = !0,
      boundary: c = "clippingParents",
      preventOverflow: d = !0,
      matchWidth: f,
      direction: h = "ltr",
    } = e,
    x = m.useRef(null),
    g = m.useRef(null),
    S = m.useRef(null),
    y = kV(r, h),
    v = m.useRef(() => {}),
    b = m.useCallback(() => {
      var A;
      !t ||
        !x.current ||
        !g.current ||
        ((A = v.current) == null || A.call(v),
        (S.current = A8(x.current, g.current, {
          placement: y,
          modifiers: [
            SV,
            yV,
            gV,
            { ...vV, enabled: !!f },
            { name: "eventListeners", ...mV(a) },
            { name: "arrow", options: { padding: i } },
            { name: "offset", options: { offset: s ?? [0, l] } },
            { name: "flip", enabled: !!u, options: { padding: 8 } },
            { name: "preventOverflow", enabled: !!d, options: { boundary: c } },
            ...(n ?? []),
          ],
          strategy: o,
        })),
        S.current.forceUpdate(),
        (v.current = S.current.destroy));
    }, [y, t, n, f, a, i, s, l, u, d, c, o]);
  m.useEffect(
    () => () => {
      var A;
      !x.current &&
        !g.current &&
        ((A = S.current) == null || A.destroy(), (S.current = null));
    },
    []
  );
  const C = m.useCallback(
      (A) => {
        (x.current = A), b();
      },
      [b]
    ),
    k = m.useCallback((A = {}, M = null) => ({ ...A, ref: xt(C, M) }), [C]),
    T = m.useCallback(
      (A) => {
        (g.current = A), b();
      },
      [b]
    ),
    _ = m.useCallback(
      (A = {}, M = null) => ({
        ...A,
        ref: xt(T, M),
        style: {
          ...A.style,
          position: o,
          minWidth: f ? void 0 : "max-content",
          inset: "0 auto auto 0",
        },
      }),
      [o, T, f]
    ),
    j = m.useCallback((A = {}, M = null) => {
      const { size: K, shadowColor: U, bg: X, style: Q, ...te } = A;
      return { ...te, ref: M, "data-popper-arrow": "", style: I8(A) };
    }, []),
    I = m.useCallback(
      (A = {}, M = null) => ({ ...A, ref: M, "data-popper-arrow-inner": "" }),
      []
    );
  return {
    update() {
      var A;
      (A = S.current) == null || A.update();
    },
    forceUpdate() {
      var A;
      (A = S.current) == null || A.forceUpdate();
    },
    transformOrigin: Ut.transformOrigin.varRef,
    referenceRef: C,
    popperRef: T,
    getPopperProps: _,
    getArrowProps: j,
    getArrowInnerProps: I,
    getReferenceProps: k,
  };
}
function I8(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e,
    i = { ...o, position: "absolute" };
  return (
    t && (i["--popper-arrow-size"] = t),
    n && (i["--popper-arrow-shadow-color"] = n),
    r && (i["--popper-arrow-bg"] = r),
    i
  );
}
function $8(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = _t(n),
    a = _t(t),
    [s, l] = m.useState(e.defaultIsOpen || !1),
    u = r !== void 0 ? r : s,
    c = r !== void 0,
    d = m.useId(),
    f = o ?? `disclosure-${d}`,
    h = m.useCallback(() => {
      c || l(!1), a == null || a();
    }, [c, a]),
    x = m.useCallback(() => {
      c || l(!0), i == null || i();
    }, [c, i]),
    g = m.useCallback(() => {
      u ? h() : x();
    }, [u, x, h]);
  function S(v = {}) {
    return {
      ...v,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var C;
        (C = v.onClick) == null || C.call(v, b), g();
      },
    };
  }
  function y(v = {}) {
    return { ...v, hidden: !u, id: f };
  }
  return {
    isOpen: u,
    onOpen: x,
    onClose: h,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: y,
  };
}
function M8(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e,
    o = _t(n),
    a = m.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }).current;
  m.useEffect(() => {
    if (!r) return;
    const s = (d) => {
        cp(d, t) && (a.isPointerDown = !0);
      },
      l = (d) => {
        if (a.ignoreEmulatedMouseEvents) {
          a.ignoreEmulatedMouseEvents = !1;
          return;
        }
        a.isPointerDown && n && cp(d, t) && ((a.isPointerDown = !1), o(d));
      },
      u = (d) => {
        (a.ignoreEmulatedMouseEvents = !0),
          n && a.isPointerDown && cp(d, t) && ((a.isPointerDown = !1), o(d));
      },
      c = B_(t.current);
    return (
      c.addEventListener("mousedown", s, !0),
      c.addEventListener("mouseup", l, !0),
      c.addEventListener("touchstart", s, !0),
      c.addEventListener("touchend", u, !0),
      () => {
        c.removeEventListener("mousedown", s, !0),
          c.removeEventListener("mouseup", l, !0),
          c.removeEventListener("touchstart", s, !0),
          c.removeEventListener("touchend", u, !0);
      }
    );
  }, [n, t, o, a, r]);
}
function cp(e, t) {
  var n;
  const r = e.target;
  return r && !B_(r).contains(r)
    ? !1
    : !((n = t.current) != null && n.contains(r));
}
function B_(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function O8(e) {
  const { isOpen: t, ref: n } = e,
    [r, o] = m.useState(t),
    [i, a] = m.useState(!1);
  return (
    m.useEffect(() => {
      i || (o(t), a(!0));
    }, [t, i, r]),
    Lk(
      () => n.current,
      "animationend",
      () => {
        o(t);
      }
    ),
    {
      present: !(t ? !1 : !r),
      onComplete() {
        var l;
        const u = D6(n.current),
          c = new u.CustomEvent("animationend", { bubbles: !0 });
        (l = n.current) == null || l.dispatchEvent(c);
      },
    }
  );
}
function V_(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || (o === "keepMounted" && t));
}
var [N8, D8, z8, F8] = Pk(),
  [L8, xl] = Ue({ strict: !1, name: "MenuContext" });
function B8(e, ...t) {
  const n = m.useId(),
    r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function W_(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Sb(e) {
  return W_(e).activeElement === e;
}
function V8(e = {}) {
  const {
      id: t,
      closeOnSelect: n = !0,
      closeOnBlur: r = !0,
      initialFocusRef: o,
      autoSelect: i = !0,
      isLazy: a,
      isOpen: s,
      defaultIsOpen: l,
      onClose: u,
      onOpen: c,
      placement: d = "bottom-start",
      lazyBehavior: f = "unmount",
      direction: h,
      computePositionOnMount: x = !1,
      ...g
    } = e,
    S = m.useRef(null),
    y = m.useRef(null),
    v = z8(),
    b = m.useCallback(() => {
      requestAnimationFrame(() => {
        var G;
        (G = S.current) == null || G.focus({ preventScroll: !1 });
      });
    }, []),
    C = m.useCallback(() => {
      const G = setTimeout(() => {
        var ne;
        if (o) (ne = o.current) == null || ne.focus();
        else {
          const ce = v.firstEnabled();
          ce && U(ce.index);
        }
      });
      $.current.add(G);
    }, [v, o]),
    k = m.useCallback(() => {
      const G = setTimeout(() => {
        const ne = v.lastEnabled();
        ne && U(ne.index);
      });
      $.current.add(G);
    }, [v]),
    T = m.useCallback(() => {
      c == null || c(), i ? C() : b();
    }, [i, C, b, c]),
    {
      isOpen: _,
      onOpen: j,
      onClose: I,
      onToggle: A,
    } = $8({ isOpen: s, defaultIsOpen: l, onClose: u, onOpen: T });
  M8({
    enabled: _ && r,
    ref: S,
    handler: (G) => {
      var ne;
      ((ne = y.current) != null && ne.contains(G.target)) || I();
    },
  });
  const M = R8({ ...g, enabled: _ || x, placement: d, direction: h }),
    [K, U] = m.useState(-1);
  ca(() => {
    _ || U(-1);
  }, [_]),
    dV(S, { focusRef: y, visible: _, shouldFocus: !0 });
  const X = O8({ isOpen: _, ref: S }),
    [Q, te] = B8(t, "menu-button", "menu-list"),
    O = m.useCallback(() => {
      j(), b();
    }, [j, b]),
    $ = m.useRef(new Set([]));
  Y8(() => {
    $.current.forEach((G) => clearTimeout(G)), $.current.clear();
  });
  const B = m.useCallback(() => {
      j(), C();
    }, [C, j]),
    D = m.useCallback(() => {
      j(), k();
    }, [j, k]),
    F = m.useCallback(() => {
      var G, ne;
      const ce = W_(S.current),
        ie = (G = S.current) == null ? void 0 : G.contains(ce.activeElement);
      if (!(_ && !ie)) return;
      const we = (ne = v.item(K)) == null ? void 0 : ne.node;
      we == null || we.focus();
    }, [_, K, v]),
    Z = m.useRef(null);
  return {
    openAndFocusMenu: O,
    openAndFocusFirstItem: B,
    openAndFocusLastItem: D,
    onTransitionEnd: F,
    unstable__animationState: X,
    descendants: v,
    popper: M,
    buttonId: Q,
    menuId: te,
    forceUpdate: M.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: A,
    onOpen: j,
    onClose: I,
    menuRef: S,
    buttonRef: y,
    focusedIndex: K,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: U,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: Z,
  };
}
function W8(e = {}, t = null) {
  const n = xl(),
    {
      onToggle: r,
      popper: o,
      openAndFocusFirstItem: i,
      openAndFocusLastItem: a,
    } = n,
    s = m.useCallback(
      (l) => {
        const u = l.key,
          d = { Enter: i, ArrowDown: i, ArrowUp: a }[u];
        d && (l.preventDefault(), l.stopPropagation(), d(l));
      },
      [i, a]
    );
  return {
    ...e,
    ref: xt(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": Hn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Ie(e.onClick, r),
    onKeyDown: Ie(e.onKeyDown, s),
  };
}
function qh(e) {
  var t;
  return (
    K8(e) &&
    !!(
      (t = e == null ? void 0 : e.getAttribute("role")) != null &&
      t.startsWith("menuitem")
    )
  );
}
function U8(e = {}, t = null) {
  const n = xl();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
      focusedIndex: r,
      setFocusedIndex: o,
      menuRef: i,
      isOpen: a,
      onClose: s,
      menuId: l,
      isLazy: u,
      lazyBehavior: c,
      unstable__animationState: d,
    } = n,
    f = D8(),
    h = sV({ preventDefault: (y) => y.key !== " " && qh(y.target) }),
    x = m.useCallback(
      (y) => {
        if (!y.currentTarget.contains(y.target)) return;
        const v = y.key,
          C = {
            Tab: (T) => T.preventDefault(),
            Escape: s,
            ArrowDown: () => {
              const T = f.nextEnabled(r);
              T && o(T.index);
            },
            ArrowUp: () => {
              const T = f.prevEnabled(r);
              T && o(T.index);
            },
          }[v];
        if (C) {
          y.preventDefault(), C(y);
          return;
        }
        const k = h((T) => {
          const _ = lV(
            f.values(),
            T,
            (j) => {
              var I, A;
              return (A =
                (I = j == null ? void 0 : j.node) == null
                  ? void 0
                  : I.textContent) != null
                ? A
                : "";
            },
            f.item(r)
          );
          if (_) {
            const j = f.indexOf(_.node);
            o(j);
          }
        });
        qh(y.target) && k(y);
      },
      [f, r, h, s, o]
    ),
    g = m.useRef(!1);
  a && (g.current = !0);
  const S = V_({
    wasSelected: g.current,
    enabled: u,
    mode: c,
    isSelected: d.present,
  });
  return {
    ...e,
    ref: xt(i, t),
    children: S ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: { ...e.style, transformOrigin: "var(--popper-transform-origin)" },
    "aria-orientation": "vertical",
    onKeyDown: Ie(e.onKeyDown, x),
  };
}
function H8(e = {}) {
  const { popper: t, isOpen: n } = xl();
  return t.getPopperProps({
    ...e,
    style: { visibility: n ? "visible" : "hidden", ...e.style },
  });
}
function G8(e = {}, t = null) {
  const {
      onMouseEnter: n,
      onMouseMove: r,
      onMouseLeave: o,
      onClick: i,
      onFocus: a,
      isDisabled: s,
      isFocusable: l,
      closeOnSelect: u,
      type: c,
      ...d
    } = e,
    f = xl(),
    {
      setFocusedIndex: h,
      focusedIndex: x,
      closeOnSelect: g,
      onClose: S,
      menuRef: y,
      isOpen: v,
      menuId: b,
      rafId: C,
    } = f,
    k = m.useRef(null),
    T = `${b}-menuitem-${m.useId()}`,
    { index: _, register: j } = F8({ disabled: s && !l }),
    I = m.useCallback(
      (O) => {
        n == null || n(O), !s && h(_);
      },
      [h, _, s, n]
    ),
    A = m.useCallback(
      (O) => {
        r == null || r(O), k.current && !Sb(k.current) && I(O);
      },
      [I, r]
    ),
    M = m.useCallback(
      (O) => {
        o == null || o(O), !s && h(-1);
      },
      [h, s, o]
    ),
    K = m.useCallback(
      (O) => {
        i == null || i(O), qh(O.currentTarget) && (u ?? g) && S();
      },
      [S, i, g, u]
    ),
    U = m.useCallback(
      (O) => {
        a == null || a(O), h(_);
      },
      [h, a, _]
    ),
    X = _ === x,
    Q = s && !l;
  ca(() => {
    v &&
      (X && !Q && k.current
        ? (C.current && cancelAnimationFrame(C.current),
          (C.current = requestAnimationFrame(() => {
            var O;
            (O = k.current) == null || O.focus(), (C.current = null);
          })))
        : y.current &&
          !Sb(y.current) &&
          y.current.focus({ preventScroll: !0 }));
  }, [X, Q, y, v]);
  const te = R_({
    onClick: K,
    onFocus: U,
    onMouseEnter: I,
    onMouseMove: A,
    onMouseLeave: M,
    ref: xt(j, k, t),
    isDisabled: s,
    isFocusable: l,
  });
  return {
    ...d,
    ...te,
    type: c ?? te.type,
    id: T,
    role: "menuitem",
    tabIndex: X ? 0 : -1,
  };
}
function K8(e) {
  var t;
  if (!q8(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function q8(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function Y8(e, t = []) {
  return m.useEffect(() => () => e(), t);
}
var [X8, bl] = Ue({
    name: "MenuStylesContext",
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `,
  }),
  ag = (e) => {
    const { children: t } = e,
      n = xn("Menu", e),
      r = Qe(e),
      { direction: o } = xw(),
      { descendants: i, ...a } = V8({ ...r, direction: o }),
      s = m.useMemo(() => a, [a]),
      { isOpen: l, onClose: u, forceUpdate: c } = s;
    return p.jsx(N8, {
      value: i,
      children: p.jsx(L8, {
        value: s,
        children: p.jsx(X8, {
          value: n,
          children: Tn(t, { isOpen: l, onClose: u, forceUpdate: c }),
        }),
      }),
    });
  };
ag.displayName = "Menu";
var U_ = H((e, t) => {
  const n = bl();
  return p.jsx(L.span, {
    ref: t,
    ...e,
    __css: n.command,
    className: "chakra-menu__command",
  });
});
U_.displayName = "MenuCommand";
var Q8 = H((e, t) => {
    const { type: n, ...r } = e,
      o = bl(),
      i = r.as || n ? n ?? void 0 : "button",
      a = m.useMemo(
        () => ({
          textDecoration: "none",
          color: "inherit",
          userSelect: "none",
          display: "flex",
          width: "100%",
          alignItems: "center",
          textAlign: "start",
          flex: "0 0 auto",
          outline: 0,
          ...o.item,
        }),
        [o.item]
      );
    return p.jsx(L.button, { ref: t, type: i, ...r, __css: a });
  }),
  H_ = (e) => {
    const { className: t, children: n, ...r } = e,
      o = bl(),
      i = m.Children.only(n),
      a = m.isValidElement(i)
        ? m.cloneElement(i, {
            focusable: "false",
            "aria-hidden": !0,
            className: ee("chakra-menu__icon", i.props.className),
          })
        : null,
      s = ee("chakra-menu__icon-wrapper", t);
    return p.jsx(L.span, { className: s, ...r, __css: o.icon, children: a });
  };
H_.displayName = "MenuIcon";
var Zi = H((e, t) => {
  const {
      icon: n,
      iconSpacing: r = "0.75rem",
      command: o,
      commandSpacing: i = "0.75rem",
      children: a,
      ...s
    } = e,
    l = G8(s, t),
    c =
      n || o
        ? p.jsx("span", {
            style: { pointerEvents: "none", flex: 1 },
            children: a,
          })
        : a;
  return p.jsxs(Q8, {
    ...l,
    className: ee("chakra-menu__menuitem", l.className),
    children: [
      n && p.jsx(H_, { fontSize: "0.8em", marginEnd: r, children: n }),
      c,
      o && p.jsx(U_, { marginStart: i, children: o }),
    ],
  });
});
Zi.displayName = "MenuItem";
var Z8 = {
    enter: {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      transitionEnd: { visibility: "hidden" },
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.1, easings: "easeOut" },
    },
  },
  J8 = L(Zo.div),
  sg = H(function (t, n) {
    var r, o;
    const { rootProps: i, motionProps: a, ...s } = t,
      { isOpen: l, onTransitionEnd: u, unstable__animationState: c } = xl(),
      d = U8(s, n),
      f = H8(i),
      h = bl();
    return p.jsx(L.div, {
      ...f,
      __css: {
        zIndex:
          (o = t.zIndex) != null ? o : (r = h.list) == null ? void 0 : r.zIndex,
      },
      children: p.jsx(J8, {
        variants: Z8,
        initial: !1,
        animate: l ? "enter" : "exit",
        __css: { outline: 0, ...h.list },
        ...a,
        className: ee("chakra-menu__menu-list", d.className),
        ...d,
        onUpdate: u,
        onAnimationComplete: X5(c.onComplete, d.onAnimationComplete),
      }),
    });
  });
sg.displayName = "MenuList";
var e9 = H((e, t) => {
    const n = bl();
    return p.jsx(L.button, {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button,
      },
    });
  }),
  lg = H((e, t) => {
    const { children: n, as: r, ...o } = e,
      i = W8(o, t),
      a = r || e9;
    return p.jsx(a, {
      ...i,
      className: ee("chakra-menu__menu-button", e.className),
      children: p.jsx(L.span, {
        __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
        children: e.children,
      }),
    });
  });
lg.displayName = "MenuButton";
var t9 = {
    slideInBottom: { ...zh, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...zh, custom: { offsetX: 16, reverse: !0 } },
    scale: { ...Ek, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  n9 = L(Zo.section),
  r9 = (e) => t9[e || "none"],
  G_ = m.forwardRef((e, t) => {
    const { preset: n, motionProps: r = r9(n), ...o } = e;
    return p.jsx(n9, { ref: t, ...r, ...o });
  });
G_.displayName = "ModalTransition";
var o9 = Object.defineProperty,
  i9 = (e, t, n) =>
    t in e
      ? o9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  a9 = (e, t, n) => (i9(e, typeof t != "symbol" ? t + "" : t, n), n),
  s9 = class {
    constructor() {
      a9(this, "modals"), (this.modals = new Map());
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size;
    }
    remove(e) {
      this.modals.delete(e);
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1;
    }
  },
  Yh = new s9();
function K_(e, t) {
  const [n, r] = m.useState(0);
  return (
    m.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = Yh.add(o);
          r(i);
        }
        return () => {
          Yh.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
var l9 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ci = new WeakMap(),
  au = new WeakMap(),
  su = {},
  dp = 0,
  q_ = function (e) {
    return e && (e.host || q_(e.parentNode));
  },
  u9 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = q_(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  c9 = function (e, t, n, r) {
    var o = u9(t, Array.isArray(e) ? e : [e]);
    su[n] || (su[n] = new WeakMap());
    var i = su[n],
      a = [],
      s = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || s.has(d) || (s.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (s.has(f)) c(f);
          else {
            var h = f.getAttribute(r),
              x = h !== null && h !== "false",
              g = (ci.get(f) || 0) + 1,
              S = (i.get(f) || 0) + 1;
            ci.set(f, g),
              i.set(f, S),
              a.push(f),
              g === 1 && x && au.set(f, !0),
              S === 1 && f.setAttribute(n, "true"),
              x || f.setAttribute(r, "true");
          }
        });
    };
    return (
      c(t),
      s.clear(),
      dp++,
      function () {
        a.forEach(function (d) {
          var f = ci.get(d) - 1,
            h = i.get(d) - 1;
          ci.set(d, f),
            i.set(d, h),
            f || (au.has(d) || d.removeAttribute(r), au.delete(d)),
            h || d.removeAttribute(n);
        }),
          dp--,
          dp ||
            ((ci = new WeakMap()),
            (ci = new WeakMap()),
            (au = new WeakMap()),
            (su = {}));
      }
    );
  },
  d9 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || l9(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        c9(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function f9(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: a = !0,
      onOverlayClick: s,
      onEsc: l,
    } = e,
    u = m.useRef(null),
    c = m.useRef(null),
    [d, f, h] = h9(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  p9(u, t && a);
  const x = K_(u, t),
    g = m.useRef(null),
    S = m.useCallback((I) => {
      g.current = I.target;
    }, []),
    y = m.useCallback(
      (I) => {
        I.key === "Escape" &&
          (I.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [v, b] = m.useState(!1),
    [C, k] = m.useState(!1),
    T = m.useCallback(
      (I = {}, A = null) => ({
        role: "dialog",
        ...I,
        ref: xt(A, u),
        id: d,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": v ? f : void 0,
        "aria-describedby": C ? h : void 0,
        onClick: Ie(I.onClick, (M) => M.stopPropagation()),
      }),
      [h, C, d, f, v]
    ),
    _ = m.useCallback(
      (I) => {
        I.stopPropagation(),
          g.current === I.target &&
            Yh.isTopModal(u.current) &&
            (o && (n == null || n()), s == null || s());
      },
      [n, o, s]
    ),
    j = m.useCallback(
      (I = {}, A = null) => ({
        ...I,
        ref: xt(A, c),
        onClick: Ie(I.onClick, _),
        onKeyDown: Ie(I.onKeyDown, y),
        onMouseDown: Ie(I.onMouseDown, S),
      }),
      [y, S, _]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: h,
    setBodyMounted: k,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: T,
    getDialogContainerProps: j,
    index: x,
  };
}
function p9(e, t) {
  const n = e.current;
  m.useEffect(() => {
    if (!(!e.current || !t)) return d9(e.current);
  }, [t, e, n]);
}
function h9(e, ...t) {
  const n = m.useId(),
    r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [m9, _a] = Ue({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [v9, Ko] = Ue({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  Rd = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
        onCloseComplete: x,
      } = t,
      g = xn("Modal", t),
      y = {
        ...f9(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
      };
    return p.jsx(v9, {
      value: y,
      children: p.jsx(m9, {
        value: g,
        children: p.jsx(vl, {
          onExitComplete: x,
          children: y.isOpen && p.jsx(ul, { ...n, children: r }),
        }),
      }),
    });
  };
Rd.displayName = "Modal";
var Lu = "right-scroll-bar-position",
  Bu = "width-before-scroll-bar",
  g9 = "with-scroll-bars-hidden",
  y9 = "--removed-body-scroll-bar-size",
  Y_ = Gk(),
  fp = function () {},
  Id = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: fp,
        onWheelCapture: fp,
        onTouchMoveCapture: fp,
      }),
      o = r[0],
      i = r[1],
      a = e.forwardProps,
      s = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      x = e.inert,
      g = e.allowPinchZoom,
      S = e.as,
      y = S === void 0 ? "div" : S,
      v = e.gapMode,
      b = Wk(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      k = Vk([n, t]),
      T = Un(Un({}, b), o);
    return m.createElement(
      m.Fragment,
      null,
      c &&
        m.createElement(C, {
          sideCar: Y_,
          removeScrollBar: u,
          shards: d,
          noIsolation: h,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: v,
        }),
      a
        ? m.cloneElement(m.Children.only(s), Un(Un({}, T), { ref: k }))
        : m.createElement(y, Un({}, T, { className: l, ref: k }), s)
    );
  });
Id.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Id.classNames = { fullWidth: Bu, zeroRight: Lu };
var wb,
  x9 = function () {
    if (wb) return wb;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function b9() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = x9();
  return t && e.setAttribute("nonce", t), e;
}
function S9(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function w9(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var C9 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = b9()) && (S9(t, n), w9(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  k9 = function () {
    var e = C9();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  X_ = function () {
    var e = k9(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  _9 = { left: 0, top: 0, right: 0, gap: 0 },
  pp = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  P9 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [pp(n), pp(r), pp(o)];
  },
  T9 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return _9;
    var t = P9(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  E9 = X_(),
  j9 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          g9,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Lu,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Bu,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Lu, " .")
        .concat(
          Lu,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Bu, " .")
        .concat(
          Bu,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(y9, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  A9 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = m.useMemo(
        function () {
          return T9(o);
        },
        [o]
      );
    return m.createElement(E9, { styles: j9(i, !t, o, n ? "" : "!important") });
  },
  Xh = !1;
if (typeof window < "u")
  try {
    var lu = Object.defineProperty({}, "passive", {
      get: function () {
        return (Xh = !0), !0;
      },
    });
    window.addEventListener("test", lu, lu),
      window.removeEventListener("test", lu, lu);
  } catch {
    Xh = !1;
  }
var di = Xh ? { passive: !1 } : !1,
  R9 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Q_ = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !R9(e) && n[t] === "visible")
    );
  },
  I9 = function (e) {
    return Q_(e, "overflowY");
  },
  $9 = function (e) {
    return Q_(e, "overflowX");
  },
  Cb = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Z_(e, r);
      if (o) {
        var i = J_(e, r),
          a = i[1],
          s = i[2];
        if (a > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  M9 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  O9 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Z_ = function (e, t) {
    return e === "v" ? I9(t) : $9(t);
  },
  J_ = function (e, t) {
    return e === "v" ? M9(t) : O9(t);
  },
  N9 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  D9 = function (e, t, n, r, o) {
    var i = N9(e, window.getComputedStyle(t).direction),
      a = i * r,
      s = n.target,
      l = t.contains(s),
      u = !1,
      c = a > 0,
      d = 0,
      f = 0;
    do {
      var h = J_(e, s),
        x = h[0],
        g = h[1],
        S = h[2],
        y = g - S - i * x;
      (x || y) && Z_(e, s) && ((d += y), (f += x)), (s = s.parentNode);
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return (
      ((c && ((o && d === 0) || (!o && a > d))) ||
        (!c && ((o && f === 0) || (!o && -a > f)))) &&
        (u = !0),
      u
    );
  },
  uu = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  kb = function (e) {
    return [e.deltaX, e.deltaY];
  },
  _b = function (e) {
    return e && "current" in e ? e.current : e;
  },
  z9 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  F9 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  L9 = 0,
  fi = [];
function B9(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState(L9++)[0],
    i = m.useState(X_)[0],
    a = m.useRef(e);
  m.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = NB([e.lockRef.current], (e.shards || []).map(_b), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = m.useCallback(function (g, S) {
      if ("touches" in g && g.touches.length === 2)
        return !a.current.allowPinchZoom;
      var y = uu(g),
        v = n.current,
        b = "deltaX" in g ? g.deltaX : v[0] - y[0],
        C = "deltaY" in g ? g.deltaY : v[1] - y[1],
        k,
        T = g.target,
        _ = Math.abs(b) > Math.abs(C) ? "h" : "v";
      if ("touches" in g && _ === "h" && T.type === "range") return !1;
      var j = Cb(_, T);
      if (!j) return !0;
      if ((j ? (k = _) : ((k = _ === "v" ? "h" : "v"), (j = Cb(_, T))), !j))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (b || C) && (r.current = k), !k)
      )
        return !0;
      var I = r.current || k;
      return D9(I, S, g, I === "h" ? b : C, !0);
    }, []),
    l = m.useCallback(function (g) {
      var S = g;
      if (!(!fi.length || fi[fi.length - 1] !== i)) {
        var y = "deltaY" in S ? kb(S) : uu(S),
          v = t.current.filter(function (k) {
            return k.name === S.type && k.target === S.target && z9(k.delta, y);
          })[0];
        if (v && v.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!v) {
          var b = (a.current.shards || [])
              .map(_b)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(S.target);
              }),
            C = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
          C && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = m.useCallback(function (g, S, y, v) {
      var b = { name: g, delta: S, target: y, should: v };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== b;
          });
        }, 1);
    }, []),
    c = m.useCallback(function (g) {
      (n.current = uu(g)), (r.current = void 0);
    }, []),
    d = m.useCallback(function (g) {
      u(g.type, kb(g), g.target, s(g, e.lockRef.current));
    }, []),
    f = m.useCallback(function (g) {
      u(g.type, uu(g), g.target, s(g, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      fi.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, di),
      document.addEventListener("touchmove", l, di),
      document.addEventListener("touchstart", c, di),
      function () {
        (fi = fi.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener("wheel", l, di),
          document.removeEventListener("touchmove", l, di),
          document.removeEventListener("touchstart", c, di);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(i, { styles: F9(o) }) : null,
    h ? m.createElement(A9, { gapMode: e.gapMode }) : null
  );
}
const V9 = DB(Y_, B9);
var e2 = m.forwardRef(function (e, t) {
  return m.createElement(Id, Un({}, e, { ref: t, sideCar: V9 }));
});
e2.classNames = Id.classNames;
const W9 = e2;
function U9(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: a,
      finalFocusRef: s,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: d,
    } = Ko(),
    [f, h] = ok();
  m.useEffect(() => {
    !f && h && setTimeout(h);
  }, [f, h]);
  const x = K_(r, d);
  return p.jsx(w_, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: s,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: p.jsx(W9, {
      removeScrollBar: !u,
      allowPinchZoom: a,
      enabled: x === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
var $d = H((e, t) => {
  const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e,
    { getDialogProps: s, getDialogContainerProps: l } = Ko(),
    u = s(a, t),
    c = l(o),
    d = ee("chakra-modal__content", n),
    f = _a(),
    h = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog,
    },
    x = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer,
    },
    { motionPreset: g } = Ko();
  return p.jsx(U9, {
    children: p.jsx(L.div, {
      ...c,
      className: "chakra-modal__content-container",
      tabIndex: -1,
      __css: x,
      children: p.jsx(G_, {
        preset: g,
        motionProps: i,
        className: d,
        ...u,
        __css: h,
        children: r,
      }),
    }),
  });
});
$d.displayName = "ModalContent";
var ug = H((e, t) => {
  const { className: n, ...r } = e,
    o = ee("chakra-modal__footer", n),
    a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ..._a().footer,
    };
  return p.jsx(L.footer, { ref: t, ...r, __css: a, className: o });
});
ug.displayName = "ModalFooter";
var Md = H((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = Ko();
  m.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ee("chakra-modal__header", n),
    l = { flex: 0, ..._a().header };
  return p.jsx(L.header, { ref: t, className: a, id: o, ...r, __css: l });
});
Md.displayName = "ModalHeader";
var H9 = L(Zo.div),
  Od = H((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      a = ee("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ..._a().overlay,
      },
      { motionPreset: u } = Ko(),
      d = o || (u === "none" ? {} : Tk);
    return p.jsx(H9, { ...d, __css: l, ref: t, className: a, ...i });
  });
Od.displayName = "ModalOverlay";
var Nd = H((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = Ko();
  m.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ee("chakra-modal__body", n),
    s = _a();
  return p.jsx(L.div, { ref: t, className: a, id: o, ...r, __css: s.body });
});
Nd.displayName = "ModalBody";
var Dd = H((e, t) => {
  const { onClick: n, className: r, ...o } = e,
    { onClose: i } = Ko(),
    a = ee("chakra-modal__close-btn", r),
    s = _a();
  return p.jsx(Lv, {
    ref: t,
    __css: s.closeButton,
    className: a,
    onClick: Ie(n, (l) => {
      l.stopPropagation(), i();
    }),
    ...o,
  });
});
Dd.displayName = "ModalCloseButton";
var G9 = (e) =>
    p.jsx(lo, {
      viewBox: "0 0 24 24",
      ...e,
      children: p.jsx("path", {
        fill: "currentColor",
        d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",
      }),
    }),
  K9 = (e) =>
    p.jsx(lo, {
      viewBox: "0 0 24 24",
      ...e,
      children: p.jsx("path", {
        fill: "currentColor",
        d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",
      }),
    });
function Pb(e, t, n, r) {
  m.useEffect(() => {
    var o;
    if (!e.current || !r) return;
    const i = (o = e.current.ownerDocument.defaultView) != null ? o : window,
      a = Array.isArray(t) ? t : [t],
      s = new i.MutationObserver((l) => {
        for (const u of l)
          u.type === "attributes" &&
            u.attributeName &&
            a.includes(u.attributeName) &&
            n(u);
      });
    return (
      s.observe(e.current, { attributes: !0, attributeFilter: a }),
      () => s.disconnect()
    );
  });
}
function q9(e, t) {
  const n = _t(e);
  m.useEffect(() => {
    let r = null;
    const o = () => n();
    return (
      t !== null && (r = window.setInterval(o, t)),
      () => {
        r && window.clearInterval(r);
      }
    );
  }, [t, n]);
}
var Y9 = 50,
  Tb = 300;
function X9(e, t) {
  const [n, r] = m.useState(!1),
    [o, i] = m.useState(null),
    [a, s] = m.useState(!0),
    l = m.useRef(null),
    u = () => clearTimeout(l.current);
  q9(
    () => {
      o === "increment" && e(), o === "decrement" && t();
    },
    n ? Y9 : null
  );
  const c = m.useCallback(() => {
      a && e(),
        (l.current = setTimeout(() => {
          s(!1), r(!0), i("increment");
        }, Tb));
    }, [e, a]),
    d = m.useCallback(() => {
      a && t(),
        (l.current = setTimeout(() => {
          s(!1), r(!0), i("decrement");
        }, Tb));
    }, [t, a]),
    f = m.useCallback(() => {
      s(!0), r(!1), u();
    }, []);
  return (
    m.useEffect(() => () => u(), []), { up: c, down: d, stop: f, isSpinning: n }
  );
}
var Q9 = /^[Ee0-9+\-.]$/;
function Z9(e) {
  return Q9.test(e);
}
function J9(e, t) {
  if (e.key == null) return !0;
  const n = e.ctrlKey || e.altKey || e.metaKey;
  return !(e.key.length === 1) || n ? !0 : t(e.key);
}
function e7(e = {}) {
  const {
      focusInputOnChange: t = !0,
      clampValueOnBlur: n = !0,
      keepWithinRange: r = !0,
      min: o = Number.MIN_SAFE_INTEGER,
      max: i = Number.MAX_SAFE_INTEGER,
      step: a = 1,
      isReadOnly: s,
      isDisabled: l,
      isRequired: u,
      isInvalid: c,
      pattern: d = "[0-9]*(.[0-9]+)?",
      inputMode: f = "decimal",
      allowMouseWheel: h,
      id: x,
      onChange: g,
      precision: S,
      name: y,
      "aria-describedby": v,
      "aria-label": b,
      "aria-labelledby": C,
      onFocus: k,
      onBlur: T,
      onInvalid: _,
      getAriaValueText: j,
      isValidCharacter: I,
      format: A,
      parse: M,
      ...K
    } = e,
    U = _t(k),
    X = _t(T),
    Q = _t(_),
    te = _t(I ?? Z9),
    O = _t(j),
    $ = jB(e),
    { update: B, increment: D, decrement: F } = $,
    [Z, G] = m.useState(!1),
    ne = !(s || l),
    ce = m.useRef(null),
    ie = m.useRef(null),
    Se = m.useRef(null),
    we = m.useRef(null),
    Ze = m.useCallback((z) => z.split("").filter(te).join(""), [te]),
    rt = m.useCallback(
      (z) => {
        var ae;
        return (ae = M == null ? void 0 : M(z)) != null ? ae : z;
      },
      [M]
    ),
    He = m.useCallback(
      (z) => {
        var ae;
        return ((ae = A == null ? void 0 : A(z)) != null ? ae : z).toString();
      },
      [A]
    );
  ca(() => {
    ($.valueAsNumber > i || $.valueAsNumber < o) &&
      (Q == null || Q("rangeOverflow", He($.value), $.valueAsNumber));
  }, [$.valueAsNumber, $.value, He, Q]),
    sa(() => {
      if (!ce.current) return;
      if (ce.current.value != $.value) {
        const ae = rt(ce.current.value);
        $.setValue(Ze(ae));
      }
    }, [rt, Ze]);
  const tn = m.useCallback(
      (z = a) => {
        ne && D(z);
      },
      [D, ne, a]
    ),
    nn = m.useCallback(
      (z = a) => {
        ne && F(z);
      },
      [F, ne, a]
    ),
    ot = X9(tn, nn);
  Pb(Se, "disabled", ot.stop, ot.isSpinning),
    Pb(we, "disabled", ot.stop, ot.isSpinning);
  const ei = m.useCallback(
      (z) => {
        if (z.nativeEvent.isComposing) return;
        const Oe = rt(z.currentTarget.value);
        B(Ze(Oe)),
          (ie.current = {
            start: z.currentTarget.selectionStart,
            end: z.currentTarget.selectionEnd,
          });
      },
      [B, Ze, rt]
    ),
    co = m.useCallback(
      (z) => {
        var ae, Oe, pt;
        U == null || U(z),
          ie.current &&
            ((z.target.selectionStart =
              (Oe = ie.current.start) != null
                ? Oe
                : (ae = z.currentTarget.value) == null
                ? void 0
                : ae.length),
            (z.currentTarget.selectionEnd =
              (pt = ie.current.end) != null
                ? pt
                : z.currentTarget.selectionStart));
      },
      [U]
    ),
    fo = m.useCallback(
      (z) => {
        if (z.nativeEvent.isComposing) return;
        J9(z, te) || z.preventDefault();
        const ae = ti(z) * a,
          Oe = z.key,
          $n = {
            ArrowUp: () => tn(ae),
            ArrowDown: () => nn(ae),
            Home: () => B(o),
            End: () => B(i),
          }[Oe];
        $n && (z.preventDefault(), $n(z));
      },
      [te, a, tn, nn, B, o, i]
    ),
    ti = (z) => {
      let ae = 1;
      return (
        (z.metaKey || z.ctrlKey) && (ae = 0.1), z.shiftKey && (ae = 10), ae
      );
    },
    ni = m.useMemo(() => {
      const z = O == null ? void 0 : O($.value);
      if (z != null) return z;
      const ae = $.value.toString();
      return ae || void 0;
    }, [$.value, O]),
    St = m.useCallback(() => {
      let z = $.value;
      if ($.value === "") return;
      /^[eE]/.test($.value.toString())
        ? $.setValue("")
        : ($.valueAsNumber < o && (z = o),
          $.valueAsNumber > i && (z = i),
          $.cast(z));
    }, [$, i, o]),
    bn = m.useCallback(() => {
      G(!1), n && St();
    }, [n, G, St]),
    rn = m.useCallback(() => {
      t &&
        requestAnimationFrame(() => {
          var z;
          (z = ce.current) == null || z.focus();
        });
    }, [t]),
    wt = m.useCallback(
      (z) => {
        z.preventDefault(), ot.up(), rn();
      },
      [rn, ot]
    ),
    tr = m.useCallback(
      (z) => {
        z.preventDefault(), ot.down(), rn();
      },
      [rn, ot]
    );
  Lk(
    () => ce.current,
    "wheel",
    (z) => {
      var ae, Oe;
      const $n =
        ((Oe = (ae = ce.current) == null ? void 0 : ae.ownerDocument) != null
          ? Oe
          : document
        ).activeElement === ce.current;
      if (!h || !$n) return;
      z.preventDefault();
      const Pr = ti(z) * a,
        wl = Math.sign(z.deltaY);
      wl === -1 ? tn(Pr) : wl === 1 && nn(Pr);
    },
    { passive: !1 }
  );
  const po = m.useCallback(
      (z = {}, ae = null) => {
        const Oe = l || (r && $.isAtMax);
        return {
          ...z,
          ref: xt(ae, Se),
          role: "button",
          tabIndex: -1,
          onPointerDown: Ie(z.onPointerDown, (pt) => {
            pt.button !== 0 || Oe || wt(pt);
          }),
          onPointerLeave: Ie(z.onPointerLeave, ot.stop),
          onPointerUp: Ie(z.onPointerUp, ot.stop),
          disabled: Oe,
          "aria-disabled": Ui(Oe),
        };
      },
      [$.isAtMax, r, wt, ot.stop, l]
    ),
    ri = m.useCallback(
      (z = {}, ae = null) => {
        const Oe = l || (r && $.isAtMin);
        return {
          ...z,
          ref: xt(ae, we),
          role: "button",
          tabIndex: -1,
          onPointerDown: Ie(z.onPointerDown, (pt) => {
            pt.button !== 0 || Oe || tr(pt);
          }),
          onPointerLeave: Ie(z.onPointerLeave, ot.stop),
          onPointerUp: Ie(z.onPointerUp, ot.stop),
          disabled: Oe,
          "aria-disabled": Ui(Oe),
        };
      },
      [$.isAtMin, r, tr, ot.stop, l]
    ),
    oi = m.useCallback(
      (z = {}, ae = null) => {
        var Oe, pt, $n, Pr;
        return {
          name: y,
          inputMode: f,
          type: "text",
          pattern: d,
          "aria-labelledby": C,
          "aria-label": b,
          "aria-describedby": v,
          id: x,
          disabled: l,
          ...z,
          readOnly: (Oe = z.readOnly) != null ? Oe : s,
          "aria-readonly": (pt = z.readOnly) != null ? pt : s,
          "aria-required": ($n = z.required) != null ? $n : u,
          required: (Pr = z.required) != null ? Pr : u,
          ref: xt(ce, ae),
          value: He($.value),
          role: "spinbutton",
          "aria-valuemin": o,
          "aria-valuemax": i,
          "aria-valuenow": Number.isNaN($.valueAsNumber)
            ? void 0
            : $.valueAsNumber,
          "aria-invalid": Ui(c ?? $.isOutOfRange),
          "aria-valuetext": ni,
          autoComplete: "off",
          autoCorrect: "off",
          onChange: Ie(z.onChange, ei),
          onKeyDown: Ie(z.onKeyDown, fo),
          onFocus: Ie(z.onFocus, co, () => G(!0)),
          onBlur: Ie(z.onBlur, X, bn),
        };
      },
      [
        y,
        f,
        d,
        C,
        b,
        He,
        v,
        x,
        l,
        u,
        s,
        c,
        $.value,
        $.valueAsNumber,
        $.isOutOfRange,
        o,
        i,
        ni,
        ei,
        fo,
        co,
        X,
        bn,
      ]
    );
  return {
    value: He($.value),
    valueAsNumber: $.valueAsNumber,
    isFocused: Z,
    isDisabled: l,
    isReadOnly: s,
    getIncrementButtonProps: po,
    getDecrementButtonProps: ri,
    getInputProps: oi,
    htmlProps: K,
  };
}
var [t7, zd] = Ue({
    name: "NumberInputStylesContext",
    errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `,
  }),
  [n7, cg] = Ue({
    name: "NumberInputContext",
    errorMessage:
      "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />",
  }),
  t2 = H(function (t, n) {
    const r = xn("NumberInput", t),
      o = Qe(t),
      i = Dk(o),
      { htmlProps: a, ...s } = e7(i),
      l = m.useMemo(() => s, [s]);
    return p.jsx(n7, {
      value: l,
      children: p.jsx(t7, {
        value: r,
        children: p.jsx(L.div, {
          ...a,
          ref: n,
          className: ee("chakra-numberinput", t.className),
          __css: { position: "relative", zIndex: 0, ...r.root },
        }),
      }),
    });
  });
t2.displayName = "NumberInput";
var r7 = H(function (t, n) {
  const r = zd();
  return p.jsx(L.div, {
    "aria-hidden": !0,
    ref: n,
    ...t,
    __css: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      insetEnd: "0px",
      margin: "1px",
      height: "calc(100% - 2px)",
      zIndex: 1,
      ...r.stepperGroup,
    },
  });
});
r7.displayName = "NumberInputStepper";
var n2 = H(function (t, n) {
  const { getInputProps: r } = cg(),
    o = r(t, n),
    i = zd();
  return p.jsx(L.input, {
    ...o,
    className: ee("chakra-numberinput__field", t.className),
    __css: { width: "100%", ...i.field },
  });
});
n2.displayName = "NumberInputField";
var r2 = L("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      transitionProperty: "common",
      transitionDuration: "normal",
      userSelect: "none",
      cursor: "pointer",
      lineHeight: "normal",
    },
  }),
  o7 = H(function (t, n) {
    var r;
    const o = zd(),
      { getDecrementButtonProps: i } = cg(),
      a = i(t, n);
    return p.jsx(r2, {
      ...a,
      __css: o.stepper,
      children: (r = t.children) != null ? r : p.jsx(G9, {}),
    });
  });
o7.displayName = "NumberDecrementStepper";
var i7 = H(function (t, n) {
  var r;
  const { getIncrementButtonProps: o } = cg(),
    i = o(t, n),
    a = zd();
  return p.jsx(r2, {
    ...i,
    __css: a.stepper,
    children: (r = t.children) != null ? r : p.jsx(K9, {}),
  });
});
i7.displayName = "NumberIncrementStepper";
var o2 = H(function (t, n) {
  const { children: r, placeholder: o, className: i, ...a } = t;
  return p.jsxs(L.select, {
    ...a,
    ref: n,
    className: ee("chakra-select", i),
    children: [o && p.jsx("option", { value: "", children: o }), r],
  });
});
o2.displayName = "SelectField";
function a7(e, t) {
  const n = {},
    r = {};
  for (const [o, i] of Object.entries(e))
    t.includes(o) ? (n[o] = i) : (r[o] = i);
  return [n, r];
}
var zo = H((e, t) => {
  var n;
  const r = xn("Select", e),
    {
      rootProps: o,
      placeholder: i,
      icon: a,
      color: s,
      height: l,
      h: u,
      minH: c,
      minHeight: d,
      iconColor: f,
      iconSize: h,
      ...x
    } = Qe(e),
    [g, S] = a7(x, eR),
    y = Bv(S),
    v = {
      width: "100%",
      height: "fit-content",
      position: "relative",
      color: s,
    },
    b = {
      paddingEnd: "2rem",
      ...r.field,
      _focus: {
        zIndex: "unset",
        ...((n = r.field) == null ? void 0 : n._focus),
      },
    };
  return p.jsxs(L.div, {
    className: "chakra-select__wrapper",
    __css: v,
    ...g,
    ...o,
    children: [
      p.jsx(o2, {
        ref: t,
        height: u ?? l,
        minH: c ?? d,
        placeholder: i,
        ...y,
        __css: b,
        children: e.children,
      }),
      p.jsx(i2, {
        "data-disabled": Hn(y.disabled),
        ...((f || s) && { color: f || s }),
        __css: r.icon,
        ...(h && { fontSize: h }),
        children: a,
      }),
    ],
  });
});
zo.displayName = "Select";
var s7 = (e) =>
    p.jsx("svg", {
      viewBox: "0 0 24 24",
      ...e,
      children: p.jsx("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
    }),
  l7 = L("div", {
    baseStyle: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }),
  i2 = (e) => {
    const { children: t = p.jsx(s7, {}), ...n } = e,
      r = m.cloneElement(t, {
        role: "presentation",
        className: "chakra-select__icon",
        focusable: !1,
        "aria-hidden": !0,
        style: { width: "1em", height: "1em", color: "currentColor" },
      });
    return p.jsx(l7, {
      ...n,
      className: "chakra-select__icon-wrapper",
      children: m.isValidElement(t) ? r : null,
    });
  };
i2.displayName = "SelectIcon";
var [u7, Sl] = Ue({
    name: "TableStylesContext",
    errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `,
  }),
  dg = H((e, t) => {
    const n = xn("Table", e),
      { className: r, layout: o, ...i } = Qe(e);
    return p.jsx(u7, {
      value: n,
      children: p.jsx(L.table, {
        ref: t,
        __css: { tableLayout: o, ...n.table },
        className: ee("chakra-table", r),
        ...i,
      }),
    });
  });
dg.displayName = "Table";
var a2 = H((e, t) => {
    const n = Sl();
    return p.jsx(L.thead, { ...e, ref: t, __css: n.thead });
  }),
  Mc = H((e, t) => {
    const n = Sl();
    return p.jsx(L.tr, { ...e, ref: t, __css: n.tr });
  }),
  s2 = H((e, t) => {
    const n = Sl();
    return p.jsx(L.tbody, { ...e, ref: t, __css: n.tbody });
  }),
  Rt = H(({ isNumeric: e, ...t }, n) => {
    const r = Sl();
    return p.jsx(L.td, { ...t, ref: n, __css: r.td, "data-is-numeric": e });
  }),
  un = H(({ isNumeric: e, ...t }, n) => {
    const r = Sl();
    return p.jsx(L.th, { ...t, ref: n, __css: r.th, "data-is-numeric": e });
  }),
  [c7, d7, f7, p7] = Pk();
function h7(e) {
  var t;
  const {
      defaultIndex: n,
      onChange: r,
      index: o,
      isManual: i,
      isLazy: a,
      lazyBehavior: s = "unmount",
      orientation: l = "horizontal",
      direction: u = "ltr",
      ...c
    } = e,
    [d, f] = m.useState(n ?? 0),
    [h, x] = lB({ defaultValue: n ?? 0, value: o, onChange: r });
  m.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const g = f7(),
    S = m.useId();
  return {
    id: `tabs-${(t = e.id) != null ? t : S}`,
    selectedIndex: h,
    focusedIndex: d,
    setSelectedIndex: x,
    setFocusedIndex: f,
    isManual: i,
    isLazy: a,
    lazyBehavior: s,
    orientation: l,
    descendants: g,
    direction: u,
    htmlProps: c,
  };
}
var [m7, Fd] = Ue({
  name: "TabsContext",
  errorMessage:
    "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />",
});
function v7(e) {
  const { focusedIndex: t, orientation: n, direction: r } = Fd(),
    o = d7(),
    i = m.useCallback(
      (a) => {
        const s = () => {
            var v;
            const b = o.nextEnabled(t);
            b && ((v = b.node) == null || v.focus());
          },
          l = () => {
            var v;
            const b = o.prevEnabled(t);
            b && ((v = b.node) == null || v.focus());
          },
          u = () => {
            var v;
            const b = o.firstEnabled();
            b && ((v = b.node) == null || v.focus());
          },
          c = () => {
            var v;
            const b = o.lastEnabled();
            b && ((v = b.node) == null || v.focus());
          },
          d = n === "horizontal",
          f = n === "vertical",
          h = a.key,
          x = r === "ltr" ? "ArrowLeft" : "ArrowRight",
          g = r === "ltr" ? "ArrowRight" : "ArrowLeft",
          y = {
            [x]: () => d && l(),
            [g]: () => d && s(),
            ArrowDown: () => f && s(),
            ArrowUp: () => f && l(),
            Home: u,
            End: c,
          }[h];
        y && (a.preventDefault(), y(a));
      },
      [o, t, n, r]
    );
  return {
    ...e,
    role: "tablist",
    "aria-orientation": n,
    onKeyDown: Ie(e.onKeyDown, i),
  };
}
function g7(e) {
  const { isDisabled: t = !1, isFocusable: n = !1, ...r } = e,
    {
      setSelectedIndex: o,
      isManual: i,
      id: a,
      setFocusedIndex: s,
      selectedIndex: l,
    } = Fd(),
    { index: u, register: c } = p7({ disabled: t && !n }),
    d = u === l,
    f = () => {
      o(u);
    },
    h = () => {
      s(u), !i && !(t && n) && o(u);
    },
    x = R_({
      ...r,
      ref: xt(c, e.ref),
      isDisabled: t,
      isFocusable: n,
      onClick: Ie(e.onClick, f),
    }),
    g = "button";
  return {
    ...x,
    id: l2(a, u),
    role: "tab",
    tabIndex: d ? 0 : -1,
    type: g,
    "aria-selected": d,
    "aria-controls": u2(a, u),
    onFocus: t ? void 0 : Ie(e.onFocus, h),
  };
}
var [y7, x7] = Ue({});
function b7(e) {
  const t = Fd(),
    { id: n, selectedIndex: r } = t,
    i = Pd(e.children).map((a, s) =>
      m.createElement(
        y7,
        {
          key: s,
          value: {
            isSelected: s === r,
            id: u2(n, s),
            tabId: l2(n, s),
            selectedIndex: r,
          },
        },
        a
      )
    );
  return { ...e, children: i };
}
function S7(e) {
  const { children: t, ...n } = e,
    { isLazy: r, lazyBehavior: o } = Fd(),
    { isSelected: i, id: a, tabId: s } = x7(),
    l = m.useRef(!1);
  i && (l.current = !0);
  const u = V_({ wasSelected: l.current, isSelected: i, enabled: r, mode: o });
  return {
    tabIndex: 0,
    ...n,
    children: u ? t : null,
    role: "tabpanel",
    "aria-labelledby": s,
    hidden: !i,
    id: a,
  };
}
function l2(e, t) {
  return `${e}--tab-${t}`;
}
function u2(e, t) {
  return `${e}--tabpanel-${t}`;
}
var [w7, Ld] = Ue({
    name: "TabsStylesContext",
    errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `,
  }),
  c2 = H(function (t, n) {
    const r = xn("Tabs", t),
      { children: o, className: i, ...a } = Qe(t),
      { htmlProps: s, descendants: l, ...u } = h7(a),
      c = m.useMemo(() => u, [u]),
      { isFitted: d, ...f } = s;
    return p.jsx(c7, {
      value: l,
      children: p.jsx(m7, {
        value: c,
        children: p.jsx(w7, {
          value: r,
          children: p.jsx(L.div, {
            className: ee("chakra-tabs", i),
            ref: n,
            ...f,
            __css: r.root,
            children: o,
          }),
        }),
      }),
    });
  });
c2.displayName = "Tabs";
var d2 = H(function (t, n) {
  const r = v7({ ...t, ref: n }),
    i = { display: "flex", ...Ld().tablist };
  return p.jsx(L.div, {
    ...r,
    className: ee("chakra-tabs__tablist", t.className),
    __css: i,
  });
});
d2.displayName = "TabList";
var Qh = H(function (t, n) {
  const r = S7({ ...t, ref: n }),
    o = Ld();
  return p.jsx(L.div, {
    outline: "0",
    ...r,
    className: ee("chakra-tabs__tab-panel", t.className),
    __css: o.tabpanel,
  });
});
Qh.displayName = "TabPanel";
var f2 = H(function (t, n) {
  const r = b7(t),
    o = Ld();
  return p.jsx(L.div, {
    ...r,
    width: "100%",
    ref: n,
    className: ee("chakra-tabs__tab-panels", t.className),
    __css: o.tabpanels,
  });
});
f2.displayName = "TabPanels";
var Zh = H(function (t, n) {
  const r = Ld(),
    o = g7({ ...t, ref: n }),
    i = {
      outline: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...r.tab,
    };
  return p.jsx(L.button, {
    ...o,
    className: ee("chakra-tabs__tab", t.className),
    __css: i,
  });
});
Zh.displayName = "Tab";
function C7(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var k7 = ["h", "minH", "height", "minHeight"],
  p2 = H((e, t) => {
    const n = In("Textarea", e),
      { className: r, rows: o, ...i } = Qe(e),
      a = Bv(i),
      s = o ? C7(n, k7) : n;
    return p.jsx(L.textarea, {
      ref: t,
      rows: o,
      ...a,
      className: ee("chakra-textarea", r),
      __css: s,
    });
  });
p2.displayName = "Textarea";
const _7 = () => {
    const [e, t] = m.useState(!1),
      [n, r] = m.useState({ email: "", Id_no: "", password: "" }),
      [o, i] = m.useState(!1),
      a = Jo(),
      s = ed();
    let l, u;
    const c = (h) => {
        (l = h.target.name), (u = h.target.value), r({ ...n, [l]: u });
      },
      d = () => t(!e),
      f = async () => {
        if ((i(!0), !n.email || !n.password || !n.Id_no)) {
          a({
            title: "please fill all fields",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          }),
            i(!1);
          return;
        }
        const { Id_no: h, email: x, password: g } = n,
          S = await fetch(
            "https://attendence-app-nbtf.onrender.com/signin/student",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ Id_no: h, email: x, password: g }),
            }
          ),
          y = await S.json();
        S.status === 400 || !y
          ? a({
              title: "OOPS...  An error Occured",
              description: y.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (a({
              title: "Congratulations",
              description: y.message,
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            s("/mainpage", { state: { data: y } })),
          i(!1);
      };
    return p.jsx(p.Fragment, {
      children: p.jsxs(fr, {
        spacing: "5px",
        color: "black",
        children: [
          p.jsxs(le, {
            id: "Id No",
            isRequired: !0,
            children: [
              p.jsx(ue, { children: "Id no" }),
              p.jsx(be, {
                type: "number",
                placeholder: "enter your ID No",
                onChange: c,
                value: n.Id_no,
                name: "Id_no",
              }),
            ],
          }),
          p.jsxs(le, {
            id: "email",
            isRequired: !0,
            children: [
              p.jsx(ue, { children: "email" }),
              p.jsx(be, {
                placeholder: "Enter your email",
                onChange: c,
                value: n.email,
                name: "email",
              }),
            ],
          }),
          p.jsxs(le, {
            id: "password",
            isRequired: !0,
            children: [
              p.jsx(ue, { children: "Password" }),
              p.jsxs(Ho, {
                children: [
                  p.jsx(be, {
                    type: e ? "text" : "password",
                    placeholder: "enter your password",
                    onChange: c,
                    value: n.password,
                    name: "password",
                  }),
                  p.jsx(ro, {
                    width: "4.5rem",
                    children: p.jsx(Ee, {
                      h: "1.75rem",
                      size: "5m",
                      bg: "white",
                      onClick: d,
                      children: e ? "hide" : "show",
                    }),
                  }),
                ],
              }),
            ],
          }),
          p.jsx(Ee, {
            colorScheme: "green",
            width: "100%",
            style: { marginTop: 15 },
            onClick: f,
            isLoading: o,
            children: "Login",
          }),
        ],
      }),
    });
  },
  P7 = () => {
    const e = ed(),
      t = Jo();
    m.useState();
    const [n, r] = m.useState(!1),
      [o, i] = m.useState(!1),
      [a, s] = m.useState(""),
      [l, u] = m.useState(""),
      [c, d] = m.useState(""),
      f = () => i(!o),
      h = async (x) => {
        if ((x.preventDefault(), r(!0), !c || !a || !l)) {
          t({
            title: "please fill all fields",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          }),
            r(!1);
          return;
        }
        const g = await fetch(
            "https://attendence-app-nbtf.onrender.com/signin/teacher",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ UID: c, email: a, password: l }),
            }
          ),
          S = await g.json();
        g.status === 400 || !S
          ? t({
              title: "OOPS !!",
              description: S.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (t({
              title: "Congratulations",
              description: S.message,
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            e("/mainpage", { state: { data: S } }),
            localStorage.setItem("user", S.name)),
          r(!1);
      };
    return p.jsxs(fr, {
      spacing: "5px",
      color: "black",
      children: [
        p.jsxs(le, {
          id: "UID",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "UID" }),
            p.jsx(be, {
              type: "number",
              placeholder: "Enter your UID",
              onChange: (x) => d(x.target.value),
            }),
          ],
        }),
        p.jsxs(le, {
          id: "email",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Email" }),
            p.jsx(be, {
              placeholder: "Enter your email",
              onChange: (x) => s(x.target.value),
            }),
          ],
        }),
        p.jsxs(le, {
          id: "password",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Password" }),
            p.jsxs(Ho, {
              children: [
                p.jsx(be, {
                  type: o ? "text" : "password",
                  placeholder: "enter your password",
                  onChange: (x) => u(x.target.value),
                }),
                p.jsx(ro, {
                  width: "4.5rem",
                  children: p.jsx(Ee, {
                    h: "1.75rem",
                    size: "5m",
                    bg: "white",
                    onClick: f,
                    children: o ? "hide" : "show",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsx(Ee, {
          colorScheme: "green",
          width: "100%",
          style: { marginTop: 15 },
          onClick: h,
          isLoading: n,
          children: "Login",
        }),
      ],
    });
  },
  T7 = () => {
    const [e, t] = m.useState(!1),
      [n, r] = m.useState(),
      [o, i] = m.useState(""),
      [a, s] = m.useState({
        UID: "",
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      }),
      [l, u] = m.useState(!1),
      c = Jo();
    let d, f;
    const h = (y) => {
        (d = y.target.name), (f = y.target.value), s({ ...a, [d]: f });
      },
      x = () => t(!e),
      g = (y) => {
        if ((u(!0), y === void 0)) {
          c({
            title: "please select an image",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          });
          return;
        }
        if (
          y.type === "image/jpg" ||
          y.type === "image/png" ||
          y.type === "image/jpeg"
        ) {
          const v = new FormData();
          v.append("file", y),
            v.append("upload_preset", "chat-app"),
            v.append("cloud_name", "priyam3801h"),
            fetch("https://api.cloudinary.com/v1_1/priyam3801h/image/upload/", {
              method: "post",
              body: v,
            })
              .then((b) => b.json())
              .then((b) => {
                r(b.url.toString()), i(b.public_id.toString()), u(!1);
              })
              .catch((b) => {
                console.log("error", b.message), u(!1);
              });
        } else {
          c({
            title: "please select an image",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          }),
            u(!1);
          return;
        }
      },
      S = async (y) => {
        y.preventDefault();
        const {
          UID: v,
          name: b,
          email: C,
          password: k,
          confirmpassword: T,
        } = a;
        u(!0);
        const _ = await fetch(
            "https://attendence-app-nbtf.onrender.com/teachers",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                UID: v,
                name: b,
                email: C,
                password: k,
                profilePic: n,
                confirmpassword: T,
                cloudinary: o,
              }),
            }
          ),
          j = await _.json();
        !j || _.status === 400
          ? (c({
              title: "Error occured",
              description: j.message,
              status: "warning",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            u(!1))
          : (c({
              title: "registration successfull",
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            u(!1));
      };
    return p.jsxs(fr, {
      spacing: "5px",
      color: "black",
      children: [
        p.jsxs(le, {
          id: "UID",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "UID" }),
            p.jsx(be, {
              placeholder: "Enter your UID number",
              onChange: h,
              name: "UID",
              value: a.UID,
              type: "number",
            }),
          ],
        }),
        p.jsxs(le, {
          id: "firstname",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "name" }),
            p.jsx(be, {
              placeholder: "Enter your name",
              onChange: h,
              name: "name",
              value: a.name,
            }),
          ],
        }),
        p.jsxs(le, {
          id: "email",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Email" }),
            p.jsx(be, {
              placeholder: "Enter your email",
              onChange: h,
              value: a.email,
              name: "email",
            }),
          ],
        }),
        p.jsxs(le, {
          id: "password",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Password" }),
            p.jsxs(Ho, {
              children: [
                p.jsx(be, {
                  type: e ? "text" : "password",
                  placeholder: "enter your password",
                  onChange: h,
                  name: "password",
                  value: a.password,
                }),
                p.jsx(ro, {
                  width: "4.5rem",
                  children: p.jsx(Ee, {
                    h: "1.75rem",
                    size: "5m",
                    bg: "white",
                    onClick: x,
                    children: e ? "hide" : "show",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "cpassword",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Confirm Password" }),
            p.jsxs(Ho, {
              children: [
                p.jsx(be, {
                  type: e ? "text" : "password",
                  placeholder: "confirm your password",
                  onChange: h,
                  name: "confirmpassword",
                  value: a.confirmpassword,
                }),
                p.jsx(ro, {
                  width: "4.5rem",
                  children: p.jsx(Ee, {
                    h: "1.75rem",
                    size: "5m",
                    bg: "white",
                    onClick: x,
                    children: e ? "hide" : "show",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "pic",
          children: [
            p.jsx(ue, { children: "Upload your picture" }),
            p.jsx(be, {
              type: "file",
              p: 1.5,
              accept: "image/*",
              onChange: (y) => g(y.target.files[0]),
              name: "profilePic",
            }),
          ],
        }),
        p.jsx(Ee, {
          colorScheme: "green",
          width: "100%",
          style: { marginTop: 15 },
          onClick: S,
          isLoading: l,
          children: "Sign Up",
        }),
      ],
    });
  },
  E7 = () => {
    const [e, t] = m.useState(!0),
      [n, r] = m.useState("Not Registered"),
      [o, i] = m.useState(""),
      a = () => {
        t(!e), r("Already Registered");
      },
      s = () => {
        i("");
      },
      l = () => {
        i("none");
      };
    return p.jsx("div", {
      children: p.jsxs(Zv, {
        maxW: "xl",
        centerContent: !0,
        children: [
          p.jsx(Ve, {
            d: "flex",
            justifyContent: "center",
            p: 3,
            bg: "white",
            w: "100%",
            m: "40px 0px 15px 0px",
            borderRadius: "1g",
            borderWidth: "1px",
            children: p.jsx(pa, {
              fontSize: "4xl",
              textAlign: "center",
              children: "ATTENDENCE APP",
            }),
          }),
          p.jsxs(Ve, {
            bg: "white",
            w: "100%",
            p: 4,
            borderRadius: "lg",
            borderWidth: "1px",
            children: [
              p.jsxs(c2, {
                variant: "soft-rounded",
                colorScheme: "green",
                children: [
                  p.jsxs(d2, {
                    children: [
                      p.jsxs(Zh, {
                        width: "50%",
                        onClick: s,
                        children: [" ", "Teacher", " "],
                      }),
                      p.jsxs(Zh, {
                        width: "50%",
                        onClick: l,
                        children: [" ", "Student", " "],
                      }),
                    ],
                  }),
                  p.jsxs(f2, {
                    children: [
                      p.jsx(Qh, {
                        children: e ? p.jsx(P7, {}) : p.jsx(T7, {}),
                      }),
                      p.jsx(Qh, { children: p.jsx(_7, {}) }),
                    ],
                  }),
                ],
              }),
              p.jsxs(pa, {
                align: "center",
                style: { display: o },
                children: [
                  " ",
                  n,
                  " ? ",
                  p.jsx(k_, { onClick: a, children: " Click here " }),
                  " ",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
var Eb = {
    path: p.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        p.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        p.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        p.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  h2 = H((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = ee("chakra-icon", s),
      d = In("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      x = r ?? Eb.viewBox;
    if (n && typeof n != "string") return p.jsx(L.svg, { as: n, ...h, ...u });
    const g = a ?? Eb.path;
    return p.jsx(L.svg, {
      verticalAlign: "middle",
      viewBox: x,
      ...h,
      ...u,
      children: g,
    });
  });
h2.displayName = "Icon";
function Bd(e) {
  const {
      viewBox: t = "0 0 24 24",
      d: n,
      displayName: r,
      defaultProps: o = {},
    } = e,
    i = m.Children.toArray(e.path),
    a = H((s, l) =>
      p.jsx(h2, {
        ref: l,
        viewBox: t,
        ...o,
        ...s,
        children: i.length ? i : p.jsx("path", { fill: "currentColor", d: n }),
      })
    );
  return (a.displayName = r), a;
}
var Nn = Bd({
    displayName: "EditIcon",
    path: p.jsxs("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      children: [
        p.jsx("path", {
          d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        }),
        p.jsx("path", {
          d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
        }),
      ],
    }),
  }),
  Jh = Bd({
    displayName: "DeleteIcon",
    path: p.jsx("g", {
      fill: "currentColor",
      children: p.jsx("path", {
        d: "M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z",
      }),
    }),
  }),
  m2 = Bd({
    displayName: "ChevronDownIcon",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
  }),
  em = Bd({
    d: "M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",
    displayName: "AddIcon",
  });
const j7 = () => {
    const { isOpen: e, onOpen: t, onClose: n } = Qv(),
      r = () => {
        if (navigator.onLine) return n();
      };
    return (
      m.useEffect(() => {
        t(), r();
      }),
      p.jsx("div", {
        children: p.jsx(Ve, {
          children: p.jsxs(Rd, {
            isOpen: e,
            onClose: n,
            isCentered: !0,
            children: [
              p.jsx(Od, {
                bg: "blackAlpha.300",
                backdropFilter: "blur(10px) hue-rotate(90deg)",
              }),
              p.jsxs($d, {
                children: [
                  p.jsx(Md, { textAlign: "center", children: "NO INTERNET" }),
                  p.jsx(Dd, {}),
                  p.jsx(Nd, {
                    fontSize: "20px",
                    textAlign: "center",
                    children: "Kindly check your internet first and try again",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  A7 = () => {
    const [e, t] = m.useState(""),
      [n, r] = m.useState([]),
      o = Jo(),
      i = sl(),
      a = async () => {
        const u = await fetch(
            "https://attendence-app-nbtf.onrender.com/postnotice",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ notice: e }),
            }
          ),
          c = await u.json();
        u.status === 400 || !c
          ? o({
              title: "OOPS",
              description: c.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (o({
              title: "Notice Uploaded Successfully",
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            t(""));
      },
      s = async () => {
        const c = await (
          await fetch("https://attendence-app-nbtf.onrender.com/getnotice", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
        ).json();
        r(c.data);
      },
      l = async (u) => {
        const c = await fetch(
            "https://attendence-app-nbtf.onrender.com/deleteNotice",
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: u }),
            }
          ),
          d = await c.json();
        !d || c.status === 400
          ? o({
              title: "OOPS !!!",
              description: d.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : o({
              title: "Congratulations",
              description: d.message,
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            });
      };
    return (
      m.useEffect(() => {
        if (!navigator.onLine) return p.jsx(j7, {});
        s();
      }),
      p.jsxs("div", {
        children: [
          i.state.data.type === "teacher"
            ? p.jsxs("div", {
                className: "inputBox",
                children: [
                  p.jsx("p", {
                    children: p.jsx(p2, {
                      minH: { base: "7vh", lg: "10px" },
                      maxH: "5vw",
                      variant: "flushed",
                      placeholder: "Enter New Notice Here",
                      width: "70vw",
                      textAlign: "center",
                      value: e,
                      onChange: (u) => t(u.target.value),
                    }),
                  }),
                  p.jsx(em, {
                    boxSize: 10,
                    border: "1px solid white",
                    color: "grey",
                    cursor: "pointer",
                    borderRadius: "5px",
                    padding: "5px",
                    onClick: a,
                  }),
                ],
              })
            : p.jsx("h1", {
                style: {
                  textAlign: "center",
                  fontSize: "48px",
                  marginBottom: "-50px",
                },
                children: "ALL NOTICES",
              }),
          p.jsx("div", {
            className: "shownotice",
            children: p.jsx(Ve, {
              width: "80vw",
              bg: "white",
              alignItems: "center",
              minH: "40vh",
              borderRadius: "10px",
              boxShadow: "1px 1px 8px grey",
              maxH: "max-content",
              children: p.jsx("ul", {
                children: n
                  .slice(0)
                  .reverse()
                  .map((u) =>
                    p.jsxs(
                      "div",
                      {
                        children: [
                          p.jsxs("li", {
                            style: {
                              fontWeight: "500",
                              fontSize: "20px",
                              width: "70vw",
                              textAlign: "center",
                              marginLeft: "20px",
                            },
                            children: [
                              u.notice,
                              p.jsxs("div", {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                },
                                children: [
                                  p.jsx("span", {
                                    style: { color: "grey" },
                                    children: u.date,
                                  }),
                                  p.jsx("span", {
                                    style: { color: "grey" },
                                    children: u.Time,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsx("span", {
                            children:
                              i.state.data.type === "teacher"
                                ? p.jsx(Jh, {
                                    color: "red",
                                    float: "right",
                                    fontSize: { base: "25px", lg: "30px" },
                                    mt: "-60px",
                                    mr: { base: "2px", lg: "20px" },
                                    cursor: "pointer",
                                    onClick: () => {
                                      l({ id: u._id });
                                    },
                                  })
                                : "",
                          }),
                          p.jsx("hr", {}),
                        ],
                      },
                      u._id
                    )
                  ),
              }),
            }),
          }),
        ],
      })
    );
  };
const R7 = (e) => {
    const [t, n] = m.useState([]),
      [r, o] = m.useState([]),
      i = r.filter(
        (f, h, x) => x.findLastIndex((g) => g.rollno === f.rollno) === h
      );
    let a = new Date(),
      s = a.getDate() + "" + (a.getMonth() + 1) + a.getFullYear();
    const l = async () => {
      const h = await (
        await fetch(
          `https://attendence-app-nbtf.onrender.com/getstudents?class=${e.class}&year=${e.year}&div=${e.div}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        )
      ).json();
      n(h.data);
    };
    m.useEffect(() => {
      l();
    }, []);
    const u = ({ name: f, roll_no: h, Attendence: x }) => {
        o([...r, { name: f, rollno: h, attendenceStatus: x }]);
      },
      c = async () => {
        (await (
          await fetch(
            `https://attendence-app-nbtf.onrender.com/postAttendence?day=${e.day}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                clas: t[0].Class,
                Div: t[0].div,
                Year: t[0].year,
                Time: e.time,
                Teacher: e.teacher,
                Subject: e.subject,
                StudentData: i,
                id: e.id,
                year: e.year,
                div: e.div,
                updatedDay: s,
              }),
            }
          )
        ).json())
          ? (alert("Attendence taken successfully"), window.location.reload(!1))
          : alert("An Error Occurred...");
      },
      d = (f, h) => {
        (document.getElementsByClassName("buttons")[h].style.background =
          "white"),
          (document.getElementsByClassName(`button-${f}`)[
            h
          ].style.background = `${f}`);
      };
    return p.jsxs("div", {
      children: [
        p.jsx(ka, {}),
        p.jsxs(P_, {
          className: "classUl",
          children: [
            p.jsx(gr, {
              listStyleType: "none",
              padding: { base: "10px 10px", md: "10px 40px", lg: "10px 60px" },
              fontSize: { base: "15px", md: "20px", lg: "24px" },
              ml: { base: "-20px" },
              children: p.jsxs("b", { children: ["Lecture Time : ", e.time] }),
            }),
            p.jsx(gr, {
              listStyleType: "none",
              padding: { base: "10px 10px", md: "10px 40px", lg: "10px 60px" },
              fontSize: { base: "15px", md: "20px", lg: "24px" },
              children: p.jsxs("b", { children: ["Teacher : ", e.teacher] }),
            }),
            p.jsx(gr, {
              listStyleType: "none",
              padding: { base: "10px 10px", md: "10px 40px", lg: "10px 60px" },
              fontSize: { base: "15px", md: "20px", lg: "24px" },
              children: p.jsxs("b", { children: ["Subject : ", e.subject] }),
            }),
          ],
        }),
        p.jsx("div", {
          className: "data",
          children: t.map((f, h) =>
            p.jsx(
              "div",
              {
                children: p.jsxs(Ve, {
                  d: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                  bg: "#0E2954",
                  maxWidth: { base: "170px", lg: "max-content" },
                  minW: { lg: "200px" },
                  m: "40px 0px 15px 0px",
                  borderRadius: "10px",
                  borderWidth: "1px",
                  children: [
                    p.jsx(pa, {
                      fontSize: { base: "12px", lg: "24px" },
                      color: "whiteAlpha.900",
                      textAlign: "center",
                      mb: "10px",
                      children: p.jsx("b", { children: f.Roll_no }),
                    }),
                    p.jsx(Ik, {
                      borderRadius: "full",
                      width: { base: "60%" },
                      margin: "auto",
                      boxSize: "130px",
                      src: f.profilePic,
                      alt: "Dan Abramov",
                    }),
                    p.jsx(pa, {
                      fontSize: { base: "12px", lg: "18px" },
                      textAlign: "center",
                      color: "whiteAlpha.900",
                      m: "10px",
                      children: p.jsx("b", { children: f.name }),
                    }),
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        bottom: "0",
                      },
                      children: [
                        p.jsx("div", {
                          className: "buttons button-red",
                          value: "A",
                          id: "red",
                          onClick: () => {
                            u({
                              name: f.name,
                              roll_no: f.Roll_no,
                              Attendence: "Absent",
                            }),
                              d("red", h);
                          },
                          children: "A",
                        }),
                        p.jsx("div", {
                          className: "button-green buttons",
                          value: "P",
                          id: "green",
                          onClick: () => {
                            u({
                              name: f.name,
                              roll_no: f.Roll_no,
                              Attendence: "Present",
                            }),
                              d("green", h);
                          },
                          children: "P",
                        }),
                        p.jsx("div", {
                          className: "button-yellow buttons",
                          value: "L",
                          id: "yellow",
                          onClick: () => {
                            u({
                              name: f.name,
                              roll_no: f.Roll_no,
                              Attendence: "Late",
                            }),
                              d("yellow", h);
                          },
                          children: "L",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              h
            )
          ),
        }),
        i.length == t.length
          ? p.jsx("div", {
              style: { display: "flex" },
              children: p.jsx("button", {
                style: {
                  background: "green",
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "white",
                  margin: "0px auto",
                  width: "50vw",
                  fontSize: "20px",
                },
                onClick: c,
                children: "Submit",
              }),
            })
          : "",
      ],
    });
  },
  I7 = (e) => {
    const [t, n] = m.useState([]),
      r = [
        "monday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
    var o = new Date();
    let i = o.getDate() + "-" + (o.getMonth() + 1) + "-" + o.getFullYear(),
      a = r[o.getDay()].toUpperCase();
    (async () => {
      if (e.data.type === "student") {
        const x = await (
          await fetch(
            `https://attendence-app-nbtf.onrender.com/getTT?day=${a.toLowerCase()}&Class=${
              e.data.Class
            }&year=${e.data.year}&div=${e.data.div}`,
            {
              method: "GET",
              crossDomain: !0,
              headers: { "Content-Type": "application/json" },
            }
          )
        ).json();
        n(x.Timetable);
      } else {
        const g = (
          await (
            await fetch(
              `https://attendence-app-nbtf.onrender.com/teacher?day=${a.toLowerCase()}`,
              { method: "GET", headers: { "Content-Type": "appliction/json" } }
            )
          ).json()
        ).flatMap((S) =>
          S.Timetable.filter((y) => {
            if (y.teacher === e.data.name.split(" ")[0])
              return (y.class = S.Class), (y.div = S.div), (y.year = S.year), y;
          })
        );
        n(g);
      }
    })();
    const [l, u] = m.useState(!1),
      [c, d] = m.useState({
        time: "",
        teachername: "",
        subject: "",
        classroom: "",
        date: "",
        attendence: "",
        class: "",
        year: "",
        div: "",
        id: "",
        day: "",
      }),
      f = () =>
        p.jsx(p.Fragment, {
          children: p.jsx(R7, {
            time: c.time,
            teacher: c.teachername,
            subject: c.subject,
            date: c.date,
            id: c.id,
            class: c.class,
            div: c.div,
            year: c.year,
            day: a.toLowerCase(),
          }),
        });
    return p.jsx(p.Fragment, {
      children: l
        ? f()
        : p.jsx("div", {
            children: p.jsxs(dg, {
              cellSpacing: "5px",
              width: "90vw",
              textAlign: "center",
              children: [
                p.jsx(a2, {
                  children: p.jsxs(Mc, {
                    alignItems: "center",
                    maxWidth: { base: "250px" },
                    children: [
                      p.jsx(un, {
                        fontSize: { base: "13px", lg: "25px" },
                        padding: "3px",
                        textAlign: "center",
                        children: "TIME",
                      }),
                      p.jsx(un, {
                        fontSize: { base: "13px", lg: "25px" },
                        textAlign: "center",
                        padding: "3px",
                        children: "TEACHER",
                      }),
                      p.jsx(un, {
                        fontSize: { base: "13px", lg: "25px" },
                        padding: "3px",
                        textAlign: "center",
                        children: "SUBJECT",
                      }),
                      e.data.type === "teacher"
                        ? p.jsxs(p.Fragment, {
                            children: [
                              p.jsx(un, {
                                fontSize: { base: "13px", lg: "25px" },
                                maxWidth: "100px",
                                textAlign: "center",
                                padding: "3px",
                                children: "CLASS",
                              }),
                              p.jsx(un, {
                                fontSize: { base: "10px", lg: "25px" },
                                textAlign: "center",
                                padding: 0,
                                maxWidth: "70px",
                                children: "DIV",
                              }),
                            ],
                          })
                        : "",
                      p.jsx(un, {
                        fontSize: { base: "12px", lg: "25px" },
                        textAlign: "center",
                        padding: "5vh 0",
                        maxWidth: "70px",
                        children: "ROOM",
                      }),
                      p.jsxs(un, {
                        fontSize: { base: "10px", md: "20", lg: "25px" },
                        padding: "5px",
                        axWidth: "10px",
                        children: [
                          "Day :",
                          window.innerWidth < 500 ? a.slice(0, 3) : a,
                        ],
                      }),
                    ],
                  }),
                }),
                p.jsx(s2, {
                  children: t.map((h, x) =>
                    p.jsxs(
                      Mc,
                      {
                        maxWidth: { base: "450px" },
                        children: [
                          p.jsx(Rt, {
                            padding: { base: "10px 0px", lg: "10px 2vw" },
                            fontSize: { base: "13px", lg: "25px" },
                            letterSpacing: { lg: "3px" },
                            textAlign: "center",
                            children: h.time,
                          }),
                          p.jsx(Rt, {
                            padding: { base: "10px 0px", lg: "10px 2vw" },
                            fontSize: { base: "13px", lg: "25px" },
                            textAlign: "center",
                            children: h.teacher,
                          }),
                          p.jsx(Rt, {
                            padding: { base: "10px 0px", lg: "10px 2vw" },
                            fontSize: { base: "13px", lg: "25px" },
                            textAlign: "center",
                            children: h.subject,
                          }),
                          e.data.type === "teacher"
                            ? p.jsxs(p.Fragment, {
                                children: [
                                  p.jsx(Rt, {
                                    padding: {
                                      base: "10px 0px",
                                      lg: "10px 2vw",
                                    },
                                    fontSize: { base: "13px", lg: "25px" },
                                    textAlign: "center",
                                    children: h.year + h.class,
                                  }),
                                  p.jsx(Rt, {
                                    padding: {
                                      base: "10px 0px",
                                      lg: "10px 2vw",
                                    },
                                    fontSize: { base: "13px", lg: "25px" },
                                    textAlign: "center",
                                    children: h.div,
                                  }),
                                ],
                              })
                            : "",
                          p.jsx(Rt, {
                            padding: { base: "0px -24px", lg: "10px 2vw" },
                            fontSize: { base: "13px", lg: "25px" },
                            textAlign: "center",
                            children: h.room,
                          }),
                          p.jsxs(Rt, {
                            children: [
                              h.teacher != "--" &&
                              h.teacher != "Break" &&
                              h.status === "taken"
                                ? p.jsx(Ee, {
                                    marginLeft: {
                                      base: "-25px",
                                      lg: "0",
                                      md: "0",
                                    },
                                    display: "flex",
                                    flexWrap: "wrap",
                                    disabled: !0,
                                    color: "white",
                                    background: "red",
                                    borderRadius: "10px",
                                    padding: { base: "2px 0px", lg: "10px" },
                                    fontSize: { base: "12px", lg: "20px" },
                                    width: {
                                      base: "5vw",
                                      lg: "max-content",
                                      md: "max-content",
                                    },
                                    children:
                                      window.innerWidth > 500
                                        ? "Take attendence"
                                        : "AT",
                                  })
                                : "",
                              h.teacher != "--" &&
                              h.teacher != "Break" &&
                              h.status != "taken" &&
                              e.data.type == "teacher"
                                ? p.jsx(Ee, {
                                    marginLeft: {
                                      base: "-25px",
                                      lg: "0",
                                      md: "0",
                                    },
                                    maxW: {
                                      base: "10px",
                                      lg: "max-content",
                                      md: "max-content",
                                    },
                                    color: "white",
                                    background: "green",
                                    borderRadius: "10px",
                                    padding: { base: "2px", lg: "10px" },
                                    fontSize: { base: "12px", lg: "20px" },
                                    onClick: () => {
                                      u(!0),
                                        d({
                                          time: h.time,
                                          teachername: h.teacher,
                                          subject: h.subject,
                                          date: i,
                                          class: h.class,
                                          div: h.div,
                                          year: h.year,
                                          id: h._id,
                                        });
                                    },
                                    children:
                                      window.innerWidth > 500
                                        ? "Take attendence"
                                        : "TA",
                                  })
                                : "",
                            ],
                          }),
                        ],
                      },
                      x
                    )
                  ),
                }),
              ],
            }),
          }),
    });
  };
const $7 = () => {
    const [e, t] = m.useState(!1),
      [n, r] = m.useState(""),
      [o, i] = m.useState(""),
      [a, s] = m.useState({
        name: "",
        Roll_no: "",
        Id_no: "",
        clas: "",
        div: "",
        year: "",
        email: "",
        password: "",
        confirmpassword: "",
      }),
      l = (g) => {
        const { name: S, value: y } = g.target;
        s({ ...a, [S]: y });
      },
      u = Jo(),
      [c, d] = m.useState(!1),
      f = () => d(!c),
      h = (g) => {
        if ((t(!0), g === void 0)) {
          u({
            title: "please select an image",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          });
          return;
        }
        if (
          g.type === "image/jpg" ||
          g.type === "image/png" ||
          g.type === "image/jpeg"
        ) {
          const S = new FormData();
          S.append("file", g),
            S.append("upload_preset", "chat-app"),
            S.append("cloud_name", "priyam3801h"),
            fetch("https://api.cloudinary.com/v1_1/priyam3801h/image/upload", {
              method: "post",
              body: S,
            })
              .then((y) => y.json())
              .then((y) => {
                r(y.url.toString()), i(y.public_id.toString()), t(!1);
              })
              .catch((y) => {
                u({
                  title: "error",
                  description: y.message,
                  status: "error",
                  duration: 5e3,
                  isClosable: !0,
                  position: "top",
                }),
                  t(!1);
              });
        } else {
          u({
            title: "please select an image",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          }),
            t(!1);
          return;
        }
      },
      x = async (g) => {
        g.preventDefault(), t(!0);
        const {
            name: S,
            Roll_no: y,
            Id_no: v,
            clas: b,
            div: C,
            year: k,
            email: T,
            password: _,
            confirmpassword: j,
          } = a,
          I = await fetch("https://attendence-app-nbtf.onrender.com/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: S,
              Roll_no: y,
              Id_no: v,
              clas: b,
              div: C,
              year: k,
              email: T,
              password: _,
              profilePic: n,
              confirmpassword: j,
              cloudinary: o,
            }),
          }),
          A = await I.json();
        !A || I.status === 400
          ? (u({
              title: "Error occured",
              description: A.message,
              status: "warning",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            t(!1))
          : (u({
              title: "registration successfull",
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            t(!1));
      };
    return p.jsxs(fr, {
      spacing: "5px",
      color: "black",
      onSubmit: reset(),
      children: [
        p.jsxs(le, {
          id: "ID_no",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Id no" }),
            p.jsx(t2, {
              min: 1e5,
              max: 999999,
              children: p.jsx(n2, {
                placeholder: "Enter your UID number",
                onChange: l,
                name: "Id_no",
                value: a.Id_no,
              }),
            }),
          ],
        }),
        p.jsxs(le, {
          id: "Roll_No",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Roll no" }),
            p.jsx(be, {
              placeholder: "Enter your Roll number",
              onChange: l,
              name: "Roll_no",
              value: a.Roll_no,
              type: "number",
            }),
          ],
        }),
        p.jsxs(le, {
          id: "name",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "name" }),
            p.jsx(be, {
              placeholder: "Enter your name",
              onChange: l,
              name: "name",
              value: a.name,
            }),
          ],
        }),
        p.jsxs(le, {
          id: "class",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "class" }),
            p.jsxs(zo, {
              placeholder: "Select Class",
              onChange: l,
              name: "clas",
              children: [
                p.jsx("option", { value: "bscit", children: "Bsc.IT" }),
                p.jsx("option", { value: "B.com", children: "B.com" }),
                p.jsx("option", { value: "BAF", children: "BAF" }),
                p.jsx("option", { value: "BBI", children: "BBI" }),
                p.jsx("option", { value: "BMS", children: "BMS" }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "div",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Div" }),
            p.jsx(be, {
              placeholder: "Enter your division",
              onChange: l,
              name: "div",
              value: a.div.toUpperCase(),
            }),
          ],
        }),
        p.jsxs(le, {
          id: "name",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Year" }),
            p.jsxs(zo, {
              name: "year",
              onChange: l,
              placeholder: "Choose your Year",
              children: [
                p.jsx("option", { value: "fy", children: "FY" }),
                p.jsx("option", { value: "sy", children: "SY" }),
                p.jsx("option", { value: "ty", children: "TY" }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "email",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Email" }),
            p.jsx(be, {
              placeholder: "Enter your email",
              onChange: l,
              value: a.email,
              name: "email",
            }),
          ],
        }),
        p.jsxs(le, {
          id: "password",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Password" }),
            p.jsxs(Ho, {
              children: [
                p.jsx(be, {
                  type: c ? "text" : "password",
                  placeholder: "enter your password",
                  onChange: l,
                  name: "password",
                  value: a.password,
                }),
                p.jsx(ro, {
                  width: "4.5rem",
                  children: p.jsx(Ee, {
                    h: "1.75rem",
                    size: "5m",
                    bg: "white",
                    onClick: f,
                    children: c ? "hide" : "show",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "cpassword",
          isRequired: !0,
          children: [
            p.jsx(ue, { children: "Confirm Password" }),
            p.jsxs(Ho, {
              children: [
                p.jsx(be, {
                  type: c ? "text" : "password",
                  placeholder: "confirm your password",
                  onChange: l,
                  name: "confirmpassword",
                  value: a.confirmpassword,
                }),
                p.jsx(ro, {
                  width: "4.5rem",
                  children: p.jsx(Ee, {
                    h: "1.75rem",
                    size: "5m",
                    bg: "white",
                    onClick: f,
                    children: c ? "hide" : "show",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsxs(le, {
          id: "pic",
          children: [
            p.jsx(ue, { children: "Upload your Profile Pic" }),
            p.jsx(be, {
              type: "file",
              p: 1.5,
              accept: "image/*",
              onChange: (g) => h(g.target.files[0]),
              name: "profilePic",
            }),
          ],
        }),
        p.jsx(Ee, {
          type: "submit",
          colorScheme: "green",
          width: "100%",
          style: { marginTop: 15 },
          onClick: x,
          isLoading: e,
          children: "Add Student",
        }),
      ],
    });
  },
  M7 = () => {
    const [e, t] = m.useState({ clas: "", div: "", year: "" }),
      n = Jo(),
      [r, o] = m.useState(!1),
      [i, a] = m.useState(""),
      [s, l] = m.useState(""),
      [u, c] = m.useState(),
      [d, f] = m.useState(!1),
      [h, x] = m.useState(),
      [g, S] = m.useState([]),
      { isOpen: y, onOpen: v, onClose: b } = Qv(),
      C = (M) => {
        const { name: K, value: U } = M.target;
        t({ ...e, [K]: U });
      },
      k = [
        "monday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
    var T = new Date();
    let _ = T.getDate() + "" + (T.getMonth() + 1) + T.getFullYear(),
      j = k[T.getDay()].toUpperCase();
    const I = async () => {
        const K = await (
          await fetch(
            `https://attendence-app-nbtf.onrender.com/getTT?day=${j.toLowerCase()}&Class=${
              e.clas
            }&year=${e.year}&div=${e.div}`,
            { method: "GET", headers: { "Content-Type": "application/json" } }
          )
        ).json();
        x(K), S(K.Timetable);
      },
      A = async (M) => {
        const K = await fetch(
            "https://attendence-app-nbtf.onrender.com/updateTT",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                data: h,
                currentdata: u,
                field: i,
                fieldData: s,
                date: _,
              }),
            }
          ),
          U = await K.json();
        K.status === 200 &&
          (f(!0),
          n({
            title: "Successfull",
            description: U.message,
            status: "success",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          })),
          f(!1),
          b();
      };
    return (
      m.useEffect(() => {
        r === !0 && I();
      }),
      p.jsxs(p.Fragment, {
        children: [
          p.jsxs("div", {
            style: {
              display: "flex",
              width: "90vw",
              justifyContent: "space-around",
            },
            children: [
              p.jsxs(le, {
                isRequired: !0,
                children: [
                  p.jsx(ue, { children: "Class" }),
                  p.jsxs(zo, {
                    placeholder: "Select Class",
                    onChange: C,
                    name: "clas",
                    children: [
                      p.jsx("option", { value: "bscit", children: "Bsc.IT" }),
                      p.jsx("option", { value: "B.com", children: "B.com" }),
                      p.jsx("option", { value: "BAF", children: "BAF" }),
                      p.jsx("option", { value: "BBI", children: "BBI" }),
                      p.jsx("option", { value: "BMS", children: "BMS" }),
                    ],
                  }),
                ],
              }),
              p.jsxs(le, {
                isRequired: !0,
                children: [
                  p.jsx(ue, { children: "year" }),
                  p.jsxs(zo, {
                    placeholder: "Select Year",
                    onChange: C,
                    name: "year",
                    children: [
                      p.jsx("option", { value: "fy", children: "FY" }),
                      p.jsx("option", { value: "sy", children: "SY" }),
                      p.jsx("option", { value: "ty", children: "TY" }),
                    ],
                  }),
                ],
              }),
              p.jsxs(le, {
                id: "div",
                isRequired: !0,
                children: [
                  p.jsx(ue, { children: "Div" }),
                  p.jsx(be, {
                    placeholder: "Enter division",
                    onChange: C,
                    name: "div",
                    value: e.div.toUpperCase(),
                  }),
                ],
              }),
            ],
          }),
          p.jsx("div", {
            style: {
              display: "flex",
              width: "90vw",
              justifyContent: "space-around",
            },
            children: p.jsx(Ee, {
              position: "absolute",
              top: 170,
              colorScheme: "green",
              width: "max-content",
              style: { marginTop: 15 },
              onClick: () => {
                o(!0);
              },
              isLoading: d,
              children: "Get Timetable",
            }),
          }),
          h !== void 0
            ? p.jsx(Ve, {
                marginLeft: { base: "0px", lg: "-50px" },
                style: {
                  position: "absolute",
                  top: 270,
                  width: "95vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: p.jsx(Ve, {
                  pt: "10px",
                  width: "95%",
                  minH: "10vh",
                  height: "max-content",
                  bgColor: "white",
                  borderRadius: "10px",
                  boxShadow: "1px 1px 10px grey",
                  children: p.jsx(Ve, {
                    children: p.jsxs(dg, {
                      children: [
                        p.jsx(a2, {
                          children: p.jsxs(Mc, {
                            children: [
                              p.jsx(un, {
                                fontSize: { base: "12px", md: "20", lg: "30" },
                                padding: {
                                  base: "4px",
                                  md: "0px 2vh",
                                  lg: "0px 2vh",
                                },
                                textAlign: "center",
                                children: "TIME",
                              }),
                              p.jsx(un, {
                                fontSize: { base: "12px", md: "20", lg: "30" },
                                padding: {
                                  base: "4px",
                                  md: "0px 2vh",
                                  lg: "0px 2vh",
                                },
                                textAlign: "center",
                                children: "TEACHER",
                              }),
                              p.jsx(un, {
                                fontSize: { base: "12px", md: "20", lg: "30" },
                                padding: {
                                  base: "4px",
                                  md: "0px 2vh",
                                  lg: "0px 2vh",
                                },
                                textAlign: "center",
                                children: "SUBJECT",
                              }),
                              p.jsx(un, {
                                fontSize: { base: "12px", md: "20", lg: "30" },
                                padding: {
                                  base: "4px",
                                  md: "0px 2vh",
                                  lg: "0px 2vh",
                                },
                                textAlign: "center",
                                children: "ROOM",
                              }),
                              p.jsxs(un, {
                                fontSize: { base: "12px", md: "20", lg: "30" },
                                padding: {
                                  base: "4px",
                                  md: "0px 2vh",
                                  lg: "0px 2vh",
                                },
                                textAlign: "center",
                                children: [
                                  "Day :",
                                  " ",
                                  window.innerWidth < 500 ? j.slice(0, 3) : j,
                                ],
                              }),
                            ],
                          }),
                        }),
                        p.jsx(s2, {
                          children: g.map((M, K) =>
                            p.jsxs(
                              Mc,
                              {
                                children: [
                                  p.jsxs(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "2px 4px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    children: [
                                      p.jsx(Nn, {
                                        boxSize: { base: 6, lg: 8 },
                                        className: "editProfile",
                                        style: { marginBottom: "-5px" },
                                        onClick: () => {
                                          v(), c(M);
                                        },
                                      }),
                                      M.time,
                                    ],
                                  }),
                                  p.jsx(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "10px 0px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    children: M.teacher,
                                  }),
                                  p.jsx(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "10px 0px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    children: M.subject,
                                  }),
                                  p.jsx(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "10px 0px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    display: { base: "none", lg: "none" },
                                    mt: "20px",
                                    children:
                                      M.teacher === "Break"
                                        ? "Break"
                                        : M.teacher === "--"
                                        ? "--"
                                        : h.year + h.Class,
                                  }),
                                  p.jsx(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "10px 0px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    display: { base: "none", lg: "none" },
                                    children:
                                      M.teacher === "Break"
                                        ? "Break"
                                        : M.teacher === "--"
                                        ? "--"
                                        : h.div,
                                  }),
                                  p.jsx(Rt, {
                                    fontSize: {
                                      base: "12px",
                                      md: "20",
                                      lg: "30",
                                    },
                                    padding: {
                                      base: "10px 0px",
                                      md: "0px 2vh",
                                      lg: "0px 2vh",
                                    },
                                    textAlign: "center",
                                    children: M.room,
                                  }),
                                  p.jsxs(Rt, {
                                    textAlign: "center",
                                    children: [
                                      M.teacher != "--" &&
                                      M.teacher != "Break" &&
                                      M.status === "taken"
                                        ? p.jsx(Ee, {
                                            disabled: !0,
                                            color: "white",
                                            background: "red",
                                            borderRadius: "10px",
                                            padding: "10px",
                                            fontSize: {
                                              base: "15px",
                                              lg: "20px",
                                            },
                                            children:
                                              window.innerWidth > 500
                                                ? "Attendence taken"
                                                : "AT",
                                          })
                                        : "",
                                      M.teacher != "--" &&
                                        M.teacher != "Break" &&
                                        M.status != "taken" &&
                                        p.jsx(Ee, {
                                          color: "white",
                                          background: "green",
                                          borderRadius: "10px",
                                          padding: "10px",
                                          fontSize: {
                                            base: "15px",
                                            lg: "20px",
                                          },
                                          children:
                                            window.innerWidth > 500
                                              ? "Take attendence"
                                              : "TA",
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              K
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : "",
          p.jsxs(Rd, {
            isOpen: y,
            onClose: b,
            children: [
              p.jsx(Od, {}),
              p.jsxs($d, {
                children: [
                  p.jsx(Md, { children: "Modal Title" }),
                  p.jsx(Dd, {}),
                  p.jsxs(Nd, {
                    children: [
                      p.jsxs(le, {
                        children: [
                          p.jsx(ue, { children: "Choose Field" }),
                          p.jsxs(zo, {
                            placeholder: "Select Field",
                            name: "field",
                            onChange: (M) => a(M.target.value),
                            children: [
                              p.jsx("option", {
                                value: "teacher",
                                children: "Teacher",
                              }),
                              p.jsx("option", {
                                value: "subject",
                                children: "Subject",
                              }),
                              p.jsx("option", {
                                value: "room",
                                children: "Room",
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.jsxs(le, {
                        children: [
                          p.jsx(ue, { children: "Enter Value" }),
                          p.jsx(be, {
                            placeholder: "enter value to be updated",
                            name: "fielData",
                            value: s,
                            onChange: (M) => l(M.target.value),
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs(ug, {
                    children: [
                      p.jsx(Ee, {
                        colorScheme: "red",
                        mr: 3,
                        onClick: b,
                        children: "Close",
                      }),
                      p.jsx(Ee, {
                        colorScheme: "green",
                        onClick: A,
                        isLoading: d,
                        children: "Update",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  v2 = () => {
    const [e, t] = m.useState("profile"),
      [n, r] = m.useState(),
      [o, i] = m.useState(),
      [a, s] = m.useState(),
      [l, u] = m.useState(),
      c = Zr.useRef(null),
      d = ed(),
      f = sl(),
      {
        name: h,
        Class: x,
        email: g,
        year: S,
        div: y,
        type: v,
        UID: b,
      } = f.state.data,
      { isOpen: C, onOpen: k, onClose: T } = Qv(),
      [_, j] = m.useState(!1),
      [I, A] = m.useState(""),
      [M, K] = m.useState("");
    m.useState(!1);
    const U = Jo(),
      X = () => {
        d("/");
      },
      Q = async (D) => {
        if ((j(!0), D === void 0)) {
          U({
            title: "please select an image",
            status: "warning",
            duration: 5e3,
            isClosable: !0,
            position: "top",
          });
          return;
        }
        if (
          D.type === "image/jpg" ||
          D.type === "image/png" ||
          D.type === "image/jpeg"
        ) {
          const F = new FormData();
          F.append("file", D),
            F.append("upload_preset", "chat-app"),
            F.append("cloud_name", "priyam3801h"),
            console.log(F),
            await fetch(
              "https://api.cloudinary.com/v1_1/priyam3801h/image/upload",
              { method: "post", body: F }
            )
              .then((Z) => (console.log(F), Z.json()))
              .then((Z) => {
                console.log(Z),
                  A(Z.url.toString()),
                  K(Z.public_id.toString()),
                  j(!1);
              })
              .catch((Z) => {
                U({
                  title: "error",
                  description: Z.message,
                  status: "error",
                  duration: 5e3,
                  isClosable: !0,
                  position: "top",
                }),
                  j(!1);
              });
          return;
        }
      },
      te = async () => {
        const D = await fetch(
            `https://attendence-app-nbtf.onrender.com/updateProfilePic?type=${v}&Id_no=${
              v == "student" ? f.state.data.Id_no : b
            }`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ profilePic: I, cloudinary: M }),
            }
          ),
          F = await D.json();
        D.status === 400
          ? U({
              title: "OOPS !!",
              description: F.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : U({
              title: "Data updated successfully",
              description: F.message,
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
          j(!1);
      },
      O = async (D) => {
        D.preventDefault();
        const F = await fetch(
          `https://attendence-app-nbtf.onrender.com/deletestudent?Id_no=${o}`,
          { method: "POST", headers: { "Content-Type": "application/json" } }
        );
        !(await F.json()) || F.status === 400
          ? U({
              title: D.message,
              description: "Kindly try again",
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (U({
              title: "Data Updated Successfully",
              description: D.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            j(!1));
      },
      $ = async (D) => {
        D.preventDefault();
        const F = await fetch(
          `https://attendence-app-nbtf.onrender.com/updatestudent?Id_no=${o}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [a]: l }),
          }
        );
        !(await F.json()) || F.status === 400
          ? U({
              title: D.message,
              description: "Kindly try again",
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (U({
              title: "Data Updated Successfully",
              description: D.message,
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            j(!1));
      },
      B = async (D) => {
        D.preventDefault();
        const F = await fetch(
          `https://attendence-app-nbtf.onrender.com/editProfile?type=${v}&Id_no=${
            v == "student" ? f.state.data.Id_no : b
          }`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [n]: l }),
          }
        );
        !(await F.json()) || F.status === 400
          ? U({
              title: D.message,
              description: "Kindly try again",
              status: "error",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            })
          : (U({
              title: "Data Updated Successfully",
              description: D.message,
              status: "success",
              duration: 5e3,
              isClosable: !0,
              position: "top",
            }),
            j(!1));
      };
    return p.jsx(p.Fragment, {
      children:
        e === "profile"
          ? p.jsxs(Ve, {
              className: "body",
              display: { base: "flex" },
              flexDirection: { base: "column", md: "row", lg: "row" },
              padding: "15vh 0px",
              children: [
                p.jsxs(Ve, {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  children: [
                    p.jsx(Ve, {
                      className: "profilePic",
                      marginTop: { base: "-90px", md: "0", lg: "0" },
                      children: p.jsx("img", {
                        className: "image",
                        src: f.state.data.profilePic,
                      }),
                    }),
                    p.jsx(Ve, {
                      display: "flex",
                      alignItems: "center",
                      children: p.jsx("button", {
                        className: "changePic",
                        onClick: () => {
                          k(), r("pic");
                        },
                        children: "Change Profile Pic",
                      }),
                    }),
                  ],
                }),
                p.jsxs(Ve, {
                  className: "data",
                  display: "flex",
                  flexDirection: { base: "column", md: "row", lg: "row" },
                  mt: { base: "-100px", md: "0px", lg: "0px" },
                  children: [
                    p.jsx(ka, {
                      fontSize: { base: "20px", md: "24px", lg: "32px" },
                      width: { base: "90vw" },
                      children:
                        v === "student"
                          ? p.jsxs(p.Fragment, {
                              children: [
                                p.jsxs(gr, {
                                  color: "blackAlpha.800",
                                  children: [
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("name");
                                      },
                                    }),
                                    "Name :",
                                    h,
                                  ],
                                }),
                                p.jsxs(gr, {
                                  children: [
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("Class");
                                      },
                                    }),
                                    "Class : ",
                                    x,
                                  ],
                                }),
                                p.jsxs(gr, {
                                  children: [
                                    " ",
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("email");
                                      },
                                    }),
                                    "Email : ",
                                    g,
                                  ],
                                }),
                                p.jsxs("li", {
                                  children: [
                                    " ",
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("year");
                                      },
                                    }),
                                    "Year : ",
                                    S,
                                  ],
                                }),
                                p.jsxs("li", {
                                  children: [
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("div");
                                      },
                                    }),
                                    "Div : ",
                                    y,
                                  ],
                                }),
                              ],
                            })
                          : p.jsxs(p.Fragment, {
                              children: [
                                p.jsxs("li", {
                                  children: [
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("name");
                                      },
                                    }),
                                    "Name : ",
                                    h,
                                  ],
                                }),
                                p.jsxs("li", {
                                  children: [
                                    p.jsx(Nn, {
                                      className: "editProfile",
                                      onClick: () => {
                                        k(), r("email");
                                      },
                                    }),
                                    "Email : ",
                                    g,
                                  ],
                                }),
                              ],
                            }),
                    }),
                    p.jsx(A_, {}),
                    v === "teacher" && window.innerWidth > 500
                      ? p.jsxs(Ve, {
                          className: "btns",
                          children: [
                            p.jsxs("button", {
                              className: "btn-style",
                              onClick: function () {
                                k(), r("add");
                              },
                              ref: c,
                              children: [
                                p.jsx(em, {
                                  className: "icons",
                                  fontSize: { base: "2xl" },
                                }),
                                "Add Student",
                              ],
                            }),
                            p.jsxs("button", {
                              className: "btn-style",
                              onClick: function () {
                                k(), r("update");
                              },
                              children: [
                                p.jsx(Nn, { className: "icons" }),
                                "Update Student",
                              ],
                            }),
                            p.jsxs("button", {
                              className: "btn-style",
                              onClick: function () {
                                k(), r("delete");
                              },
                              children: [
                                p.jsx(Jh, { className: "icons" }),
                                "Delete Student",
                              ],
                            }),
                          ],
                        })
                      : window.innerWidth < 500 && v === "teacher"
                      ? p.jsxs(ag, {
                          children: [
                            p.jsx(lg, {
                              as: Ee,
                              rightIcon: p.jsx(m2, {}),
                              children: "Student Control",
                            }),
                            p.jsxs(sg, {
                              children: [
                                p.jsx(Zi, {
                                  icon: p.jsx(em, {}),
                                  onClick: () => {
                                    k(), r("add");
                                  },
                                  children: "Add Student",
                                }),
                                p.jsx(Zi, {
                                  icon: p.jsx(Nn, {}),
                                  onClick: () => {
                                    k(), r("update");
                                  },
                                  children: "Update Student",
                                }),
                                p.jsx(Zi, {
                                  icon: p.jsx(Jh, {}),
                                  onClick: () => {
                                    k(), r("delete");
                                  },
                                  children: "Delete Student",
                                }),
                              ],
                            }),
                          ],
                        })
                      : "",
                    v === "teacher"
                      ? p.jsx("button", {
                          className: "Update-btn",
                          onClick: () => t("updateTT"),
                          children: "Update Timetable",
                        })
                      : "",
                    p.jsx("button", {
                      className: "logout-btn",
                      onClick: X,
                      children: "LOGOUT",
                    }),
                  ],
                }),
                p.jsx("div", {
                  children: p.jsxs(Rd, {
                    onClose: T,
                    finalFocusRef: c,
                    isOpen: C,
                    scrollBehavior: "inside",
                    children: [
                      p.jsx(Od, {}),
                      p.jsxs($d, {
                        children: [
                          p.jsx(Md, {
                            children:
                              n == "add"
                                ? "Add Student"
                                : n == "update"
                                ? "Update Student"
                                : n === "delete"
                                ? "Delete Student"
                                : n,
                          }),
                          p.jsx(Dd, {}),
                          p.jsx(Nd, {
                            children:
                              n == "add"
                                ? p.jsx($7, {})
                                : n == "update"
                                ? p.jsxs(fr, {
                                    spacing: "5px",
                                    color: "black",
                                    children: [
                                      p.jsxs(le, {
                                        id: "ID_no",
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, { children: "Id no" }),
                                          p.jsx(be, {
                                            placeholder:
                                              "Enter Id_no of the student",
                                            onChange: (D) => i(D.target.value),
                                            name: "Id_no",
                                            value: o,
                                          }),
                                        ],
                                      }),
                                      p.jsxs(le, {
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, {
                                            children:
                                              "Choose the field to update",
                                          }),
                                          p.jsxs(zo, {
                                            onChange: (D) => s(D.target.value),
                                            children: [
                                              p.jsx("option", {
                                                value: "name",
                                                children: "Name",
                                              }),
                                              p.jsx("option", {
                                                value: "Roll_no",
                                                children: "Roll no",
                                              }),
                                              p.jsx("option", {
                                                value: "Id_no",
                                                children: "Id no",
                                              }),
                                              p.jsx("option", {
                                                value: "email",
                                                children: "Email",
                                              }),
                                              p.jsx("option", {
                                                value: "Class",
                                                children: "Class",
                                              }),
                                              p.jsx("option", {
                                                value: "div",
                                                children: "Div",
                                              }),
                                              p.jsx("option", {
                                                value: "year",
                                                children: "Year",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      p.jsxs(le, {
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, { children: "New Value" }),
                                          p.jsx(be, {
                                            placeholder: "Enter the new value",
                                            name: "newValue",
                                            value: l,
                                            onChange: (D) => u(D.target.value),
                                          }),
                                        ],
                                      }),
                                      p.jsx(Ee, {
                                        colorScheme: "yellow",
                                        width: "100%",
                                        style: { marginTop: 15 },
                                        onClick: $,
                                        isLoading: _,
                                        children: "Update Student",
                                      }),
                                    ],
                                  })
                                : n == "delete"
                                ? p.jsxs(fr, {
                                    spacing: "5px",
                                    color: "black",
                                    children: [
                                      p.jsxs(le, {
                                        id: "ID_no",
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, { children: "Id no" }),
                                          p.jsx(be, {
                                            placeholder:
                                              "Enter Id_no of the student",
                                            onChange: (D) => i(D.target.value),
                                            name: "Id_no",
                                          }),
                                        ],
                                      }),
                                      p.jsx(Ee, {
                                        colorScheme: "red",
                                        width: "100%",
                                        style: { marginTop: 15 },
                                        onClick: O,
                                        isLoading: _,
                                        children: "Delete Student Permanently",
                                      }),
                                    ],
                                  })
                                : n == "pic"
                                ? p.jsxs(fr, {
                                    children: [
                                      p.jsxs(le, {
                                        id: "set image",
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, { children: n }),
                                          p.jsx(be, {
                                            type: "file",
                                            p: 1.5,
                                            accept: "image/*",
                                            onChange: (D) => {
                                              Q(D.target.files[0]);
                                            },
                                            name: "profilePic",
                                          }),
                                        ],
                                      }),
                                      p.jsxs(Ee, {
                                        colorScheme: "green",
                                        width: "100%",
                                        style: { marginTop: 15 },
                                        onClick: te,
                                        isLoading: _,
                                        children: ["Update ", n],
                                      }),
                                    ],
                                  })
                                : p.jsxs(fr, {
                                    children: [
                                      p.jsxs(le, {
                                        id: "ID_no",
                                        isRequired: !0,
                                        children: [
                                          p.jsx(ue, { children: n }),
                                          p.jsx(be, {
                                            placeholder: `Enter new value of ${n}`,
                                            onChange: (D) => u(D.target.value),
                                            name: n,
                                          }),
                                        ],
                                      }),
                                      p.jsxs(Ee, {
                                        colorScheme: "green",
                                        width: "100%",
                                        style: { marginTop: 15 },
                                        onClick: B,
                                        isLoading: _,
                                        children: ["Update ", n],
                                      }),
                                    ],
                                  }),
                          }),
                          p.jsx(ug, {
                            display: "flex",
                            alignItems: "center",
                            children: p.jsx(Ee, {
                              display: "flex",
                              alignItems: "center",
                              colorScheme: "red",
                              mr: 3,
                              onClick: T,
                              children: "Close",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : p.jsx(M7, {}),
    });
  };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var g2 = N7,
  jb = D7,
  O7 = Object.prototype.toString,
  cu = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function N7(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, o = r.decode || z7, i = 0; i < e.length; ) {
    var a = e.indexOf("=", i);
    if (a === -1) break;
    var s = e.indexOf(";", i);
    if (s === -1) s = e.length;
    else if (s < a) {
      i = e.lastIndexOf(";", a - 1) + 1;
      continue;
    }
    var l = e.slice(i, a).trim();
    if (n[l] === void 0) {
      var u = e.slice(a + 1, s).trim();
      u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), (n[l] = B7(u, o));
    }
    i = s + 1;
  }
  return n;
}
function D7(e, t, n) {
  var r = n || {},
    o = r.encode || F7;
  if (typeof o != "function") throw new TypeError("option encode is invalid");
  if (!cu.test(e)) throw new TypeError("argument name is invalid");
  var i = o(t);
  if (i && !cu.test(i)) throw new TypeError("argument val is invalid");
  var a = e + "=" + i;
  if (r.maxAge != null) {
    var s = r.maxAge - 0;
    if (isNaN(s) || !isFinite(s))
      throw new TypeError("option maxAge is invalid");
    a += "; Max-Age=" + Math.floor(s);
  }
  if (r.domain) {
    if (!cu.test(r.domain)) throw new TypeError("option domain is invalid");
    a += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!cu.test(r.path)) throw new TypeError("option path is invalid");
    a += "; Path=" + r.path;
  }
  if (r.expires) {
    var l = r.expires;
    if (!L7(l) || isNaN(l.valueOf()))
      throw new TypeError("option expires is invalid");
    a += "; Expires=" + l.toUTCString();
  }
  if (
    (r.httpOnly && (a += "; HttpOnly"),
    r.secure && (a += "; Secure"),
    r.priority)
  ) {
    var u =
      typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
    switch (u) {
      case "low":
        a += "; Priority=Low";
        break;
      case "medium":
        a += "; Priority=Medium";
        break;
      case "high":
        a += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (r.sameSite) {
    var c =
      typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (c) {
      case !0:
        a += "; SameSite=Strict";
        break;
      case "lax":
        a += "; SameSite=Lax";
        break;
      case "strict":
        a += "; SameSite=Strict";
        break;
      case "none":
        a += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return a;
}
function z7(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function F7(e) {
  return encodeURIComponent(e);
}
function L7(e) {
  return O7.call(e) === "[object Date]" || e instanceof Date;
}
function B7(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function V7() {
  return typeof document == "object" && typeof document.cookie == "string";
}
function W7(e) {
  return typeof e == "string"
    ? g2(e)
    : typeof e == "object" && e !== null
    ? e
    : {};
}
function hp(e, t = {}) {
  const n = U7(e);
  if (!t.doNotParse)
    try {
      return JSON.parse(n);
    } catch {}
  return e;
}
function U7(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e;
}
class y2 {
  constructor(t, n = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const o = this.cookies;
        (this.cookies = g2(document.cookie)), this._checkChanges(o);
      });
    const r = typeof document > "u" ? "" : document.cookie;
    (this.cookies = W7(t || r)),
      (this.defaultSetOptions = n),
      (this.HAS_DOCUMENT_COOKIE = V7());
  }
  _emitChange(t) {
    for (let n = 0; n < this.changeListeners.length; ++n)
      this.changeListeners[n](t);
  }
  _checkChanges(t) {
    new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach((r) => {
      t[r] !== this.cookies[r] &&
        this._emitChange({ name: r, value: hp(t[r]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(t, n = {}) {
    return n.doNotUpdate || this.update(), hp(this.cookies[t], n);
  }
  getAll(t = {}) {
    t.doNotUpdate || this.update();
    const n = {};
    for (let r in this.cookies) n[r] = hp(this.cookies[r], t);
    return n;
  }
  set(t, n, r) {
    r
      ? (r = Object.assign(Object.assign({}, this.defaultSetOptions), r))
      : (r = this.defaultSetOptions);
    const o = typeof n == "string" ? n : JSON.stringify(n);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [t]: o })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = jb(t, o, r)),
      this._emitChange({ name: t, value: n, options: r });
  }
  remove(t, n) {
    const r = (n = Object.assign(Object.assign({}, n), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[t],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = jb(t, "", r)),
      this._emitChange({ name: t, value: void 0, options: n });
  }
  addChangeListener(t) {
    this.changeListeners.push(t),
      this.changeListeners.length === 1 &&
        (typeof window == "object" && "cookieStore" in window
          ? window.cookieStore.addEventListener("change", this.update)
          : this._startPolling());
  }
  removeChangeListener(t) {
    const n = this.changeListeners.indexOf(t);
    n >= 0 && this.changeListeners.splice(n, 1),
      this.changeListeners.length === 0 &&
        (typeof window == "object" && "cookieStore" in window
          ? window.cookieStore.removeEventListener("change", this.update)
          : this._stopPolling());
  }
}
const H7 = m.createContext(new y2()),
  { Provider: G7, Consumer: Z7 } = H7;
class K7 extends m.Component {
  constructor(t) {
    super(t),
      t.cookies
        ? (this.cookies = t.cookies)
        : (this.cookies = new y2(void 0, t.defaultSetOptions));
  }
  render() {
    return m.createElement(G7, { value: this.cookies }, this.props.children);
  }
}
const q7 = () => {
  m.useState([]);
  const e = sl();
  ed();
  const [t, n] = m.useState("home"),
    r = () =>
      t === "home"
        ? p.jsx(I7, { data: e.state.data })
        : t === "notice"
        ? p.jsx(A7, {})
        : p.jsx(v2, {});
  return p.jsx(p.Fragment, {
    children: p.jsxs(Ve, {
      style: { overflow: "hidden" },
      children: [
        p.jsxs(Ve, {
          width: "100vw",
          bg: "#FF8C00",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2vw",
          children: [
            p.jsx(Ve, {
              display: { base: "inline-block", md: "none", lg: "none" },
              children: p.jsxs(ag, {
                children: [
                  p.jsx(lg, {
                    as: Ee,
                    rightIcon: p.jsx(m2, {}),
                    variant: "ghost",
                    textTransform: "uppercase",
                    children: t,
                  }),
                  p.jsxs(sg, {
                    fontSize: "15px",
                    children: [
                      p.jsx(Zi, { onClick: () => n("home"), children: "Home" }),
                      p.jsx(Zi, {
                        onClick: () => n("notice"),
                        children: "Notice",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            p.jsx(Ve, {
              display: { base: "none", md: "inline", lg: "inline" },
              width: "20%",
              fontSize: "24px",
              children: p.jsxs(ka, {
                display: "flex",
                justifyContent: "space-between",
                children: [
                  p.jsx(gr, {
                    onClick: () => n("home"),
                    cursor: "pointer",
                    children: "Home",
                  }),
                  p.jsx(gr, {
                    onClick: () => n("notice"),
                    cursor: "pointer",
                    children: "Notice",
                  }),
                ],
              }),
            }),
            p.jsx(Ve, {
              fontSize: { base: "18px", md: "25px", lg: "32px" },
              children: p.jsx(pa, { children: "Attendence App" }),
            }),
            p.jsx(Ve, {
              children: p.jsx(Mk, {
                name: e.state.data.name,
                src: e.state.data.profilePic,
                size: "md",
                onClick: () => n("profile"),
                cursor: "pointer",
              }),
            }),
          ],
        }),
        p.jsx(Zv, {
          display: "flex",
          flexWrap: "wrap",
          maxW: { base: "97vw", lg: "95vw" },
          height: "max-content",
          background: "white",
          boxShadow: "5px 5px 10px gray",
          gap: { base: "0px", lg: "5vw" },
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "10px",
          marginTop: "5vh",
          paddingInline: { base: "0", lg: "7vh" },
          children: r(),
        }),
      ],
    }),
  });
};
const Y7 = () =>
  p.jsx(Dj, {
    children: p.jsxs(Oj, {
      children: [
        p.jsx(Cu, { exact: !0, path: "/", Component: E7 }),
        p.jsx(Cu, { path: "/mainpage", Component: q7 }),
        p.jsx(Cu, { path: "/mainpage/profile", Component: v2 }),
      ],
    }),
  });
vp.createRoot(document.getElementById("root")).render(
  p.jsx(Zr.StrictMode, {
    children: p.jsx(Z4, { children: p.jsx(K7, { children: p.jsx(Y7, {}) }) }),
  })
);
