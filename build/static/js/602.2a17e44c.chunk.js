'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [602],
  {
    1602: function (e, t, n) {
      n.r(t);
      var r = n(4554),
        i = n(7196),
        a = n(6151),
        o = n(9164),
        s = n(890),
        d = n(7621),
        c = n(8096),
        u = n(3466),
        l = n(4721),
        h = n(6907),
        m = n(5165),
        x = n(6934),
        f = n(184),
        p = (0, x.ZP)(r.Z)(function () {
          return '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n';
        }),
        v = (0, x.ZP)(i.Z)(function (e) {
          var t = e.theme;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        Z = (0, x.ZP)(a.Z)(function (e) {
          var t = e.theme;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        });
      t.default = function () {
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(h.ql, {
              children: (0, f.jsx)('title', { children: 'Status - 404' })
            }),
            (0, f.jsx)(p, {
              children: (0, f.jsxs)(o.Z, {
                maxWidth: 'md',
                children: [
                  (0, f.jsxs)(r.Z, {
                    textAlign: 'center',
                    children: [
                      (0, f.jsx)('img', {
                        alt: '404',
                        height: 180,
                        src: '/static/images/status/404.svg'
                      }),
                      (0, f.jsx)(s.Z, {
                        variant: 'h2',
                        sx: { my: 2 },
                        children: "The page you were looking for doesn't exist."
                      }),
                      (0, f.jsx)(s.Z, {
                        variant: 'h4',
                        color: 'text.secondary',
                        fontWeight: 'normal',
                        sx: { mb: 4 },
                        children:
                          "It's on us, we moved the content to a different page. The search below should help!"
                      })
                    ]
                  }),
                  (0, f.jsx)(o.Z, {
                    maxWidth: 'sm',
                    children: (0, f.jsxs)(d.Z, {
                      sx: { textAlign: 'center', mt: 3, p: 4 },
                      children: [
                        (0, f.jsx)(c.Z, {
                          variant: 'outlined',
                          fullWidth: !0,
                          children: (0, f.jsx)(v, {
                            type: 'text',
                            placeholder: 'Search terms here...',
                            endAdornment: (0, f.jsx)(u.Z, {
                              position: 'end',
                              children: (0, f.jsx)(Z, {
                                variant: 'contained',
                                size: 'small',
                                children: 'Search'
                              })
                            }),
                            startAdornment: (0, f.jsx)(u.Z, {
                              position: 'start',
                              children: (0, f.jsx)(m.Z, {})
                            })
                          })
                        }),
                        (0, f.jsx)(l.Z, { sx: { my: 4 }, children: 'OR' }),
                        (0, f.jsx)(a.Z, {
                          href: '/dashboards',
                          variant: 'outlined',
                          children: 'Go to homepage'
                        })
                      ]
                    })
                  })
                ]
              })
            })
          ]
        });
      };
    },
    7621: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        }
      });
      var r = n(7462),
        i = n(3366),
        a = n(2791),
        o = n(8182),
        s = n(4419),
        d = n(6934),
        c = n(1402),
        u = n(5527),
        l = n(5878),
        h = n(1217);
      function m(e) {
        return (0, h.Z)('MuiCard', e);
      }
      (0, l.Z)('MuiCard', ['root']);
      var x = n(184),
        f = ['className', 'raised'],
        p = (0, d.ZP)(u.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (e, t) {
            return t.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        v = a.forwardRef(function (e, t) {
          var n = (0, c.Z)({ props: e, name: 'MuiCard' }),
            a = n.className,
            d = n.raised,
            u = void 0 !== d && d,
            l = (0, i.Z)(n, f),
            h = (0, r.Z)({}, n, { raised: u }),
            v = (function (e) {
              var t = e.classes;
              return (0, s.Z)({ root: ['root'] }, m, t);
            })(h);
          return (0,
          x.jsx)(p, (0, r.Z)({ className: (0, o.Z)(v.root, a), elevation: u ? 8 : void 0, ref: t, ownerState: h }, l));
        });
    },
    9164: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        }
      });
      var r = n(4942),
        i = n(3366),
        a = n(7462),
        o = n(2791),
        s = n(8182),
        d = n(1122),
        c = n(1217),
        u = n(4419),
        l = n(6083),
        h = n(3457),
        m = n(5080),
        x = n(184),
        f = [
          'className',
          'component',
          'disableGutters',
          'fixed',
          'maxWidth',
          'classes'
        ],
        p = (0, m.Z)(),
        v = (0, h.Z)('div', {
          name: 'MuiContainer',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t['maxWidth'.concat((0, d.Z)(String(n.maxWidth)))],
              n.fixed && t.fixed,
              n.disableGutters && t.disableGutters
            ];
          }
        }),
        Z = function (e) {
          return (0, l.Z)({ props: e, name: 'MuiContainer', defaultTheme: p });
        };
      var g = n(4036),
        b = n(6934),
        j = n(1402),
        W = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.createStyledComponent,
            n = void 0 === t ? v : t,
            l = e.useThemeProps,
            h = void 0 === l ? Z : l,
            m = e.componentName,
            p = void 0 === m ? 'MuiContainer' : m,
            g = n(
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, a.Z)(
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
                      i = t.breakpoints.values[r];
                    return (
                      0 !== i &&
                        (e[t.breakpoints.up(r)] = {
                          maxWidth: ''.concat(i).concat(t.breakpoints.unit)
                        }),
                      e
                    );
                  }, {})
                );
              },
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, a.Z)(
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
            b = o.forwardRef(function (e, t) {
              var n = h(e),
                r = n.className,
                o = n.component,
                l = void 0 === o ? 'div' : o,
                m = n.disableGutters,
                v = void 0 !== m && m,
                Z = n.fixed,
                b = void 0 !== Z && Z,
                j = n.maxWidth,
                W = void 0 === j ? 'lg' : j,
                k = (0, i.Z)(n, f),
                w = (0, a.Z)({}, n, {
                  component: l,
                  disableGutters: v,
                  fixed: b,
                  maxWidth: W
                }),
                S = (function (e, t) {
                  var n = e.classes,
                    r = e.fixed,
                    i = e.disableGutters,
                    a = e.maxWidth,
                    o = {
                      root: [
                        'root',
                        a && 'maxWidth'.concat((0, d.Z)(String(a))),
                        r && 'fixed',
                        i && 'disableGutters'
                      ]
                    };
                  return (0, u.Z)(
                    o,
                    function (e) {
                      return (0, c.Z)(t, e);
                    },
                    n
                  );
                })(w, p);
              return (0,
              x.jsx)(g, (0, a.Z)({ as: l, ownerState: w, className: (0, s.Z)(S.root, r), ref: t }, k));
            });
          return b;
        })({
          createStyledComponent: (0, b.ZP)('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: function (e, t) {
              var n = e.ownerState;
              return [
                t.root,
                t['maxWidth'.concat((0, g.Z)(String(n.maxWidth)))],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters
              ];
            }
          }),
          useThemeProps: function (e) {
            return (0, j.Z)({ props: e, name: 'MuiContainer' });
          }
        }),
        k = W;
    },
    3457: function (e, t, n) {
      var r = (0, n(4046).ZP)();
      t.Z = r;
    }
  }
]);
//# sourceMappingURL=602.2a17e44c.chunk.js.map
