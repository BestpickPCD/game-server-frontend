'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [803],
  {
    6803: function (e, t, n) {
      n.r(t);
      var r = n(9439),
        a = n(2791),
        i = n(4554),
        o = n(890),
        s = n(8029),
        c = n(6151),
        u = n(9164),
        l = n(8096),
        d = n(3466),
        f = n(7071),
        h = n(4721),
        p = n(7639),
        x = n(3400),
        m = n(6907),
        v = n(9141),
        Z = n(6934),
        j = n(2093),
        g = n(4668),
        b = n(1880),
        y = n(6688),
        w = n(184),
        W = (0, Z.ZP)(i.Z)(function () {
          return '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n';
        }),
        k = (0, Z.ZP)(o.Z)(function (e) {
          var t = e.theme;
          return '\n  font-size: '.concat(t.typography.pxToRem(75), ';\n');
        }),
        M = (0, Z.ZP)(o.Z)(function (e) {
          var t = e.theme;
          return '\n  color: '.concat(t.colors.alpha.black[50], ';\n');
        }),
        O = (0, Z.ZP)(s.Z)(function (e) {
          var t = e.theme;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        P = (0, Z.ZP)(c.Z)(function (e) {
          var t = e.theme;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        });
      t.default = function () {
        var e = function () {
            var e = +new Date('2023') - +new Date(),
              t = {};
            return (
              e > 0 &&
                (t = {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 1e3 / 60) % 60),
                  seconds: Math.floor((e / 1e3) % 60)
                }),
              t
            );
          },
          t = (0, a.useState)(e()),
          n = (0, r.Z)(t, 2),
          s = n[0],
          c = n[1];
        (0, a.useEffect)(function () {
          setTimeout(function () {
            c(e());
          }, 1e3);
        });
        var Z = [];
        return (
          Object.keys(s).forEach(function (e) {
            s[e] &&
              Z.push(
                (0, w.jsxs)(i.Z, {
                  textAlign: 'center',
                  px: 3,
                  children: [
                    (0, w.jsx)(k, { variant: 'h1', children: s[e] }),
                    (0, w.jsx)(M, { variant: 'h3', children: e })
                  ]
                })
              );
          }),
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(m.ql, {
                children: (0, w.jsx)('title', {
                  children: 'Status - Coming Soon'
                })
              }),
              (0, w.jsx)(W, {
                children: (0, w.jsxs)(u.Z, {
                  maxWidth: 'md',
                  children: [
                    (0, w.jsx)(v.Z, {}),
                    (0, w.jsxs)(i.Z, {
                      textAlign: 'center',
                      mb: 3,
                      children: [
                        (0, w.jsxs)(u.Z, {
                          maxWidth: 'xs',
                          children: [
                            (0, w.jsx)(o.Z, {
                              variant: 'h1',
                              sx: { mt: 4, mb: 2 },
                              children: 'Coming Soon'
                            }),
                            (0, w.jsx)(o.Z, {
                              variant: 'h3',
                              color: 'text.secondary',
                              fontWeight: 'normal',
                              sx: { mb: 4 },
                              children:
                                "We're working on implementing the last features before our launch!"
                            })
                          ]
                        }),
                        (0, w.jsx)('img', {
                          alt: 'Coming Soon',
                          height: 200,
                          src: '/static/images/status/coming-soon.svg'
                        })
                      ]
                    }),
                    (0, w.jsx)(i.Z, {
                      display: 'flex',
                      justifyContent: 'center',
                      children: Z.length
                        ? Z
                        : (0, w.jsx)(w.Fragment, { children: "Time's up!" })
                    }),
                    (0, w.jsx)(u.Z, {
                      maxWidth: 'sm',
                      children: (0, w.jsxs)(i.Z, {
                        sx: { textAlign: 'center', p: 4 },
                        children: [
                          (0, w.jsxs)(l.Z, {
                            variant: 'outlined',
                            fullWidth: !0,
                            children: [
                              (0, w.jsx)(O, {
                                type: 'text',
                                placeholder: 'Enter your email address here...',
                                endAdornment: (0, w.jsx)(d.Z, {
                                  position: 'end',
                                  children: (0, w.jsx)(P, {
                                    variant: 'contained',
                                    size: 'small',
                                    children: 'Notify Me'
                                  })
                                }),
                                startAdornment: (0, w.jsx)(d.Z, {
                                  position: 'start',
                                  children: (0, w.jsx)(y.Z, {})
                                })
                              }),
                              (0, w.jsx)(f.Z, {
                                children:
                                  "We'll email you once our website is launched!"
                              })
                            ]
                          }),
                          (0, w.jsx)(h.Z, { sx: { my: 4 } }),
                          (0, w.jsxs)(i.Z, {
                            sx: { textAlign: 'center' },
                            children: [
                              (0, w.jsx)(p.Z, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Facebook',
                                children: (0, w.jsx)(x.Z, {
                                  color: 'primary',
                                  children: (0, w.jsx)(j.Z, {})
                                })
                              }),
                              (0, w.jsx)(p.Z, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Twitter',
                                children: (0, w.jsx)(x.Z, {
                                  color: 'primary',
                                  children: (0, w.jsx)(g.Z, {})
                                })
                              }),
                              (0, w.jsx)(p.Z, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Instagram',
                                children: (0, w.jsx)(x.Z, {
                                  color: 'primary',
                                  children: (0, w.jsx)(b.Z, {})
                                })
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            ]
          })
        );
      };
    },
    2093: function (e, t, n) {
      var r = n(4836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, i, s)
              : (r[i] = e[i]);
          }
        (r.default = e), n && n.set(e, r);
      })(n(2791));
      var a = r(n(5649)),
        i = n(184);
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, i.jsx)('path', {
          d: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z'
        }),
        'Facebook'
      );
      t.Z = s;
    },
    1880: function (e, t, n) {
      var r = n(4836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, i, s)
              : (r[i] = e[i]);
          }
        (r.default = e), n && n.set(e, r);
      })(n(2791));
      var a = r(n(5649)),
        i = n(184);
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, i.jsx)('path', {
          d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
        }),
        'Instagram'
      );
      t.Z = s;
    },
    6688: function (e, t, n) {
      var r = n(4836);
      t.Z = void 0;
      var a = r(n(5649)),
        i = n(184),
        o = (0, a.default)(
          [
            (0, i.jsx)(
              'path',
              { d: 'M20 6H4l8 4.99zM4 8v10h16V8l-8 5z', opacity: '.3' },
              '0'
            ),
            (0, i.jsx)(
              'path',
              {
                d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z'
              },
              '1'
            )
          ],
          'MailTwoTone'
        );
      t.Z = o;
    },
    4668: function (e, t, n) {
      var r = n(4836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, i, s)
              : (r[i] = e[i]);
          }
        (r.default = e), n && n.set(e, r);
      })(n(2791));
      var a = r(n(5649)),
        i = n(184);
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, i.jsx)('path', {
          d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'
        }),
        'Twitter'
      );
      t.Z = s;
    },
    9164: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        }
      });
      var r = n(4942),
        a = n(3366),
        i = n(7462),
        o = n(2791),
        s = n(8182),
        c = n(1122),
        u = n(1217),
        l = n(4419),
        d = n(6083),
        f = n(3457),
        h = n(5080),
        p = n(184),
        x = [
          'className',
          'component',
          'disableGutters',
          'fixed',
          'maxWidth',
          'classes'
        ],
        m = (0, h.Z)(),
        v = (0, f.Z)('div', {
          name: 'MuiContainer',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t['maxWidth'.concat((0, c.Z)(String(n.maxWidth)))],
              n.fixed && t.fixed,
              n.disableGutters && t.disableGutters
            ];
          }
        }),
        Z = function (e) {
          return (0, d.Z)({ props: e, name: 'MuiContainer', defaultTheme: m });
        };
      var j = n(4036),
        g = n(6934),
        b = n(1402),
        y = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.createStyledComponent,
            n = void 0 === t ? v : t,
            d = e.useThemeProps,
            f = void 0 === d ? Z : d,
            h = e.componentName,
            m = void 0 === h ? 'MuiContainer' : h,
            j = n(
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, i.Z)(
                  {
                    width: '100%',
                    marginLeft: 'auto',
                    boxSizing: 'border-box',
                    marginRight: 'auto',
                    display: 'block'
                  },
                  !n.disableGutters &&
                    (0, r.Z)(
                      { paddingLeft: t.spacing(2), paddingRight: t.spacing(2) },
                      t.breakpoints.up('sm'),
                      { paddingLeft: t.spacing(3), paddingRight: t.spacing(3) }
                    )
                );
              },
              function (e) {
                var t = e.theme;
                return (
                  e.ownerState.fixed &&
                  Object.keys(t.breakpoints.values).reduce(function (e, n) {
                    var r = n,
                      a = t.breakpoints.values[r];
                    return (
                      0 !== a &&
                        (e[t.breakpoints.up(r)] = {
                          maxWidth: ''.concat(a).concat(t.breakpoints.unit)
                        }),
                      e
                    );
                  }, {})
                );
              },
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, i.Z)(
                  {},
                  'xs' === n.maxWidth &&
                    (0, r.Z)({}, t.breakpoints.up('xs'), {
                      maxWidth: Math.max(t.breakpoints.values.xs, 444)
                    }),
                  n.maxWidth &&
                    'xs' !== n.maxWidth &&
                    (0, r.Z)({}, t.breakpoints.up(n.maxWidth), {
                      maxWidth: ''
                        .concat(t.breakpoints.values[n.maxWidth])
                        .concat(t.breakpoints.unit)
                    })
                );
              }
            ),
            g = o.forwardRef(function (e, t) {
              var n = f(e),
                r = n.className,
                o = n.component,
                d = void 0 === o ? 'div' : o,
                h = n.disableGutters,
                v = void 0 !== h && h,
                Z = n.fixed,
                g = void 0 !== Z && Z,
                b = n.maxWidth,
                y = void 0 === b ? 'lg' : b,
                w = (0, a.Z)(n, x),
                W = (0, i.Z)({}, n, {
                  component: d,
                  disableGutters: v,
                  fixed: g,
                  maxWidth: y
                }),
                k = (function (e, t) {
                  var n = e.classes,
                    r = e.fixed,
                    a = e.disableGutters,
                    i = e.maxWidth,
                    o = {
                      root: [
                        'root',
                        i && 'maxWidth'.concat((0, c.Z)(String(i))),
                        r && 'fixed',
                        a && 'disableGutters'
                      ]
                    };
                  return (0, l.Z)(
                    o,
                    function (e) {
                      return (0, u.Z)(t, e);
                    },
                    n
                  );
                })(W, m);
              return (0,
              p.jsx)(j, (0, i.Z)({ as: d, ownerState: W, className: (0, s.Z)(k.root, r), ref: t }, w));
            });
          return g;
        })({
          createStyledComponent: (0, g.ZP)('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: function (e, t) {
              var n = e.ownerState;
              return [
                t.root,
                t['maxWidth'.concat((0, j.Z)(String(n.maxWidth)))],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters
              ];
            }
          }),
          useThemeProps: function (e) {
            return (0, b.Z)({ props: e, name: 'MuiContainer' });
          }
        }),
        w = y;
    },
    3457: function (e, t, n) {
      var r = (0, n(4046).ZP)();
      t.Z = r;
    }
  }
]);
//# sourceMappingURL=803.644dd2aa.chunk.js.map
