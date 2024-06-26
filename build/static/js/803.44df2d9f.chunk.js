'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [803],
  {
    36803: (e, t, r) => {
      r.r(t), r.d(t, { default: () => P });
      var n = r(72791),
        a = r(697),
        o = r(20890),
        i = r(28029),
        s = r(94294),
        c = r(89164),
        l = r(68096),
        d = r(63466),
        u = r(47071),
        h = r(94721),
        p = r(97639),
        f = r(13400),
        x = r(6907),
        m = r(79141),
        j = r(66934),
        v = r(42093),
        Z = r(74668),
        g = r(21880),
        b = r(36688),
        y = r(80184);
      const w = (0, j.ZP)(a.Z)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        W = (0, j.ZP)(o.Z)((e) => {
          let { theme: t } = e;
          return '\n  font-size: '.concat(t.typography.pxToRem(75), ';\n');
        }),
        k = (0, j.ZP)(o.Z)((e) => {
          let { theme: t } = e;
          return '\n  color: '.concat(t.colors.alpha.black[50], ';\n');
        }),
        M = (0, j.ZP)(i.Z)((e) => {
          let { theme: t } = e;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        O = (0, j.ZP)(s.Z)((e) => {
          let { theme: t } = e;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        }),
        P = () => {
          const e = () => {
              const e = +new Date('2023') - +new Date();
              let t = {};
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
            [t, r] = (0, n.useState)(e());
          (0, n.useEffect)(() => {
            setTimeout(() => {
              r(e());
            }, 1e3);
          });
          const i = [];
          return (
            Object.keys(t).forEach((e) => {
              t[e] &&
                i.push(
                  (0, y.jsxs)(a.Z, {
                    textAlign: 'center',
                    px: 3,
                    children: [
                      (0, y.jsx)(W, { variant: 'h1', children: t[e] }),
                      (0, y.jsx)(k, { variant: 'h3', children: e })
                    ]
                  })
                );
            }),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(x.ql, {
                  children: (0, y.jsx)('title', {
                    children: 'Status - Coming Soon'
                  })
                }),
                (0, y.jsx)(w, {
                  children: (0, y.jsxs)(c.Z, {
                    maxWidth: 'md',
                    children: [
                      (0, y.jsx)(m.Z, {}),
                      (0, y.jsxs)(a.Z, {
                        textAlign: 'center',
                        mb: 3,
                        children: [
                          (0, y.jsxs)(c.Z, {
                            maxWidth: 'xs',
                            children: [
                              (0, y.jsx)(o.Z, {
                                variant: 'h1',
                                sx: { mt: 4, mb: 2 },
                                children: 'Coming Soon'
                              }),
                              (0, y.jsx)(o.Z, {
                                variant: 'h3',
                                color: 'text.secondary',
                                fontWeight: 'normal',
                                sx: { mb: 4 },
                                children:
                                  "We're working on implementing the last features before our launch!"
                              })
                            ]
                          }),
                          (0, y.jsx)('img', {
                            alt: 'Coming Soon',
                            height: 200,
                            src: '/static/images/status/coming-soon.svg'
                          })
                        ]
                      }),
                      (0, y.jsx)(a.Z, {
                        display: 'flex',
                        justifyContent: 'center',
                        children: i.length
                          ? i
                          : (0, y.jsx)(y.Fragment, { children: "Time's up!" })
                      }),
                      (0, y.jsx)(c.Z, {
                        maxWidth: 'sm',
                        children: (0, y.jsxs)(a.Z, {
                          sx: { textAlign: 'center', p: 4 },
                          children: [
                            (0, y.jsxs)(l.Z, {
                              variant: 'outlined',
                              fullWidth: !0,
                              children: [
                                (0, y.jsx)(M, {
                                  type: 'text',
                                  placeholder:
                                    'Enter your email address here...',
                                  endAdornment: (0, y.jsx)(d.Z, {
                                    position: 'end',
                                    children: (0, y.jsx)(O, {
                                      variant: 'contained',
                                      size: 'small',
                                      children: 'Notify Me'
                                    })
                                  }),
                                  startAdornment: (0, y.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, y.jsx)(b.Z, {})
                                  })
                                }),
                                (0, y.jsx)(u.Z, {
                                  children:
                                    "We'll email you once our website is launched!"
                                })
                              ]
                            }),
                            (0, y.jsx)(h.Z, { sx: { my: 4 } }),
                            (0, y.jsxs)(a.Z, {
                              sx: { textAlign: 'center' },
                              children: [
                                (0, y.jsx)(p.Z, {
                                  arrow: !0,
                                  placement: 'top',
                                  title: 'Facebook',
                                  children: (0, y.jsx)(f.Z, {
                                    color: 'primary',
                                    children: (0, y.jsx)(v.Z, {})
                                  })
                                }),
                                (0, y.jsx)(p.Z, {
                                  arrow: !0,
                                  placement: 'top',
                                  title: 'Twitter',
                                  children: (0, y.jsx)(f.Z, {
                                    color: 'primary',
                                    children: (0, y.jsx)(Z.Z, {})
                                  })
                                }),
                                (0, y.jsx)(p.Z, {
                                  arrow: !0,
                                  placement: 'top',
                                  title: 'Instagram',
                                  children: (0, y.jsx)(f.Z, {
                                    color: 'primary',
                                    children: (0, y.jsx)(g.Z, {})
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
    42093: (e, t, r) => {
      var n = r(64836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, o, s)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(72791));
      var a = n(r(45649)),
        o = r(80184);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z'
        }),
        'Facebook'
      );
      t.Z = s;
    },
    21880: (e, t, r) => {
      var n = r(64836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, o, s)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(72791));
      var a = n(r(45649)),
        o = r(80184);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
        }),
        'Instagram'
      );
      t.Z = s;
    },
    36688: (e, t, r) => {
      var n = r(64836);
      t.Z = void 0;
      var a = n(r(45649)),
        o = r(80184),
        i = (0, a.default)(
          [
            (0, o.jsx)(
              'path',
              { d: 'M20 6H4l8 4.99zM4 8v10h16V8l-8 5z', opacity: '.3' },
              '0'
            ),
            (0, o.jsx)(
              'path',
              {
                d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z'
              },
              '1'
            )
          ],
          'MailTwoTone'
        );
      t.Z = i;
    },
    74668: (e, t, r) => {
      var n = r(64836);
      t.Z = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, o, s)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(72791));
      var a = n(r(45649)),
        o = r(80184);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var s = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'
        }),
        'Twitter'
      );
      t.Z = s;
    },
    89164: (e, t, r) => {
      r.d(t, { Z: () => y });
      var n = r(63366),
        a = r(87462),
        o = r(72791),
        i = r(30831),
        s = r(31122),
        c = r(21217),
        l = r(94419),
        d = r(86083),
        u = r(93457),
        h = r(85080),
        p = r(80184);
      const f = [
          'className',
          'component',
          'disableGutters',
          'fixed',
          'maxWidth',
          'classes'
        ],
        x = (0, h.Z)(),
        m = (0, u.Z)('div', {
          name: 'MuiContainer',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              t['maxWidth'.concat((0, s.Z)(String(r.maxWidth)))],
              r.fixed && t.fixed,
              r.disableGutters && t.disableGutters
            ];
          }
        }),
        j = (e) =>
          (0, d.Z)({ props: e, name: 'MuiContainer', defaultTheme: x });
      var v = r(14036),
        Z = r(66934),
        g = r(31402);
      const b = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              createStyledComponent: t = m,
              useThemeProps: r = j,
              componentName: d = 'MuiContainer'
            } = e,
            u = t(
              (e) => {
                let { theme: t, ownerState: r } = e;
                return (0, a.Z)(
                  {
                    width: '100%',
                    marginLeft: 'auto',
                    boxSizing: 'border-box',
                    marginRight: 'auto',
                    display: 'block'
                  },
                  !r.disableGutters && {
                    paddingLeft: t.spacing(2),
                    paddingRight: t.spacing(2),
                    [t.breakpoints.up('sm')]: {
                      paddingLeft: t.spacing(3),
                      paddingRight: t.spacing(3)
                    }
                  }
                );
              },
              (e) => {
                let { theme: t, ownerState: r } = e;
                return (
                  r.fixed &&
                  Object.keys(t.breakpoints.values).reduce((e, r) => {
                    const n = r,
                      a = t.breakpoints.values[n];
                    return (
                      0 !== a &&
                        (e[t.breakpoints.up(n)] = {
                          maxWidth: ''.concat(a).concat(t.breakpoints.unit)
                        }),
                      e
                    );
                  }, {})
                );
              },
              (e) => {
                let { theme: t, ownerState: r } = e;
                return (0, a.Z)(
                  {},
                  'xs' === r.maxWidth && {
                    [t.breakpoints.up('xs')]: {
                      maxWidth: Math.max(t.breakpoints.values.xs, 444)
                    }
                  },
                  r.maxWidth &&
                    'xs' !== r.maxWidth && {
                      [t.breakpoints.up(r.maxWidth)]: {
                        maxWidth: ''
                          .concat(t.breakpoints.values[r.maxWidth])
                          .concat(t.breakpoints.unit)
                      }
                    }
                );
              }
            ),
            h = o.forwardRef(function (e, t) {
              const o = r(e),
                {
                  className: h,
                  component: x = 'div',
                  disableGutters: m = !1,
                  fixed: j = !1,
                  maxWidth: v = 'lg'
                } = o,
                Z = (0, n.Z)(o, f),
                g = (0, a.Z)({}, o, {
                  component: x,
                  disableGutters: m,
                  fixed: j,
                  maxWidth: v
                }),
                b = ((e, t) => {
                  const {
                      classes: r,
                      fixed: n,
                      disableGutters: a,
                      maxWidth: o
                    } = e,
                    i = {
                      root: [
                        'root',
                        o && 'maxWidth'.concat((0, s.Z)(String(o))),
                        n && 'fixed',
                        a && 'disableGutters'
                      ]
                    };
                  return (0, l.Z)(i, (e) => (0, c.ZP)(t, e), r);
                })(g, d);
              return (0,
              p.jsx)(u, (0, a.Z)({ as: x, ownerState: g, className: (0, i.Z)(b.root, h), ref: t }, Z));
            });
          return h;
        })({
          createStyledComponent: (0, Z.ZP)('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: (e, t) => {
              const { ownerState: r } = e;
              return [
                t.root,
                t['maxWidth'.concat((0, v.Z)(String(r.maxWidth)))],
                r.fixed && t.fixed,
                r.disableGutters && t.disableGutters
              ];
            }
          }),
          useThemeProps: (e) => (0, g.Z)({ props: e, name: 'MuiContainer' })
        }),
        y = b;
    },
    93457: (e, t, r) => {
      r.d(t, { Z: () => n });
      const n = (0, r(44046).ZP)();
    }
  }
]);
//# sourceMappingURL=803.44df2d9f.chunk.js.map
