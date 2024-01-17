'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [602],
  {
    1602: (e, t, n) => {
      n.r(t), n.d(t, { default: () => b });
      var a = n(697),
        r = n(8029),
        s = n(4294),
        i = n(9164),
        o = n(890),
        d = n(7621),
        c = n(8096),
        l = n(3466),
        h = n(4721),
        m = n(6907),
        u = n(5165),
        x = n(6934),
        p = n(184);
      const Z = (0, x.ZP)(a.Z)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        f = (0, x.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        g = (0, x.ZP)(s.Z)((e) => {
          let { theme: t } = e;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        }),
        b = () =>
          (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(m.ql, {
                children: (0, p.jsx)('title', { children: 'Status - 404' })
              }),
              (0, p.jsx)(Z, {
                children: (0, p.jsxs)(i.Z, {
                  maxWidth: 'md',
                  children: [
                    (0, p.jsxs)(a.Z, {
                      textAlign: 'center',
                      children: [
                        (0, p.jsx)('img', {
                          alt: '404',
                          height: 180,
                          src: '/static/images/status/404.svg'
                        }),
                        (0, p.jsx)(o.Z, {
                          variant: 'h2',
                          sx: { my: 2 },
                          children:
                            "The page you were looking for doesn't exist."
                        }),
                        (0, p.jsx)(o.Z, {
                          variant: 'h4',
                          color: 'text.secondary',
                          fontWeight: 'normal',
                          sx: { mb: 4 },
                          children:
                            "It's on us, we moved the content to a different page. The search below should help!"
                        })
                      ]
                    }),
                    (0, p.jsx)(i.Z, {
                      maxWidth: 'sm',
                      children: (0, p.jsxs)(d.Z, {
                        sx: { textAlign: 'center', mt: 3, p: 4 },
                        children: [
                          (0, p.jsx)(c.Z, {
                            variant: 'outlined',
                            fullWidth: !0,
                            children: (0, p.jsx)(f, {
                              type: 'text',
                              placeholder: 'Search terms here...',
                              endAdornment: (0, p.jsx)(l.Z, {
                                position: 'end',
                                children: (0, p.jsx)(g, {
                                  variant: 'contained',
                                  size: 'small',
                                  children: 'Search'
                                })
                              }),
                              startAdornment: (0, p.jsx)(l.Z, {
                                position: 'start',
                                children: (0, p.jsx)(u.Z, {})
                              })
                            })
                          }),
                          (0, p.jsx)(h.Z, { sx: { my: 4 }, children: 'OR' }),
                          (0, p.jsx)(s.Z, {
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
    },
    7621: (e, t, n) => {
      n.d(t, { Z: () => f });
      var a = n(7462),
        r = n(3366),
        s = n(2791),
        i = n(9278),
        o = n(4419),
        d = n(6934),
        c = n(1402),
        l = n(5527),
        h = n(5878),
        m = n(1217);
      function u(e) {
        return (0, m.Z)('MuiCard', e);
      }
      (0, h.Z)('MuiCard', ['root']);
      var x = n(184);
      const p = ['className', 'raised'],
        Z = (0, d.ZP)(l.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: (e, t) => t.root
        })(() => ({ overflow: 'hidden' })),
        f = s.forwardRef(function (e, t) {
          const n = (0, c.Z)({ props: e, name: 'MuiCard' }),
            { className: s, raised: d = !1 } = n,
            l = (0, r.Z)(n, p),
            h = (0, a.Z)({}, n, { raised: d }),
            m = ((e) => {
              const { classes: t } = e;
              return (0, o.Z)({ root: ['root'] }, u, t);
            })(h);
          return (0,
          x.jsx)(Z, (0, a.Z)({ className: (0, i.Z)(m.root, s), elevation: d ? 8 : void 0, ref: t, ownerState: h }, l));
        });
    },
    9164: (e, t, n) => {
      n.d(t, { Z: () => W });
      var a = n(3366),
        r = n(7462),
        s = n(2791),
        i = n(831),
        o = n(1122),
        d = n(1217),
        c = n(4419),
        l = n(6083),
        h = n(3457),
        m = n(5080),
        u = n(184);
      const x = [
          'className',
          'component',
          'disableGutters',
          'fixed',
          'maxWidth',
          'classes'
        ],
        p = (0, m.Z)(),
        Z = (0, h.Z)('div', {
          name: 'MuiContainer',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t['maxWidth'.concat((0, o.Z)(String(n.maxWidth)))],
              n.fixed && t.fixed,
              n.disableGutters && t.disableGutters
            ];
          }
        }),
        f = (e) =>
          (0, l.Z)({ props: e, name: 'MuiContainer', defaultTheme: p });
      var g = n(4036),
        b = n(6934),
        v = n(1402);
      const j = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              createStyledComponent: t = Z,
              useThemeProps: n = f,
              componentName: l = 'MuiContainer'
            } = e,
            h = t(
              (e) => {
                let { theme: t, ownerState: n } = e;
                return (0, r.Z)(
                  {
                    width: '100%',
                    marginLeft: 'auto',
                    boxSizing: 'border-box',
                    marginRight: 'auto',
                    display: 'block'
                  },
                  !n.disableGutters && {
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
                let { theme: t, ownerState: n } = e;
                return (
                  n.fixed &&
                  Object.keys(t.breakpoints.values).reduce((e, n) => {
                    const a = n,
                      r = t.breakpoints.values[a];
                    return (
                      0 !== r &&
                        (e[t.breakpoints.up(a)] = {
                          maxWidth: ''.concat(r).concat(t.breakpoints.unit)
                        }),
                      e
                    );
                  }, {})
                );
              },
              (e) => {
                let { theme: t, ownerState: n } = e;
                return (0, r.Z)(
                  {},
                  'xs' === n.maxWidth && {
                    [t.breakpoints.up('xs')]: {
                      maxWidth: Math.max(t.breakpoints.values.xs, 444)
                    }
                  },
                  n.maxWidth &&
                    'xs' !== n.maxWidth && {
                      [t.breakpoints.up(n.maxWidth)]: {
                        maxWidth: ''
                          .concat(t.breakpoints.values[n.maxWidth])
                          .concat(t.breakpoints.unit)
                      }
                    }
                );
              }
            ),
            m = s.forwardRef(function (e, t) {
              const s = n(e),
                {
                  className: m,
                  component: p = 'div',
                  disableGutters: Z = !1,
                  fixed: f = !1,
                  maxWidth: g = 'lg'
                } = s,
                b = (0, a.Z)(s, x),
                v = (0, r.Z)({}, s, {
                  component: p,
                  disableGutters: Z,
                  fixed: f,
                  maxWidth: g
                }),
                j = ((e, t) => {
                  const {
                      classes: n,
                      fixed: a,
                      disableGutters: r,
                      maxWidth: s
                    } = e,
                    i = {
                      root: [
                        'root',
                        s && 'maxWidth'.concat((0, o.Z)(String(s))),
                        a && 'fixed',
                        r && 'disableGutters'
                      ]
                    };
                  return (0, c.Z)(i, (e) => (0, d.Z)(t, e), n);
                })(v, l);
              return (0,
              u.jsx)(h, (0, r.Z)({ as: p, ownerState: v, className: (0, i.Z)(j.root, m), ref: t }, b));
            });
          return m;
        })({
          createStyledComponent: (0, b.ZP)('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: (e, t) => {
              const { ownerState: n } = e;
              return [
                t.root,
                t['maxWidth'.concat((0, g.Z)(String(n.maxWidth)))],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters
              ];
            }
          }),
          useThemeProps: (e) => (0, v.Z)({ props: e, name: 'MuiContainer' })
        }),
        W = j;
    },
    3457: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = (0, n(4046).ZP)();
    }
  }
]);
//# sourceMappingURL=602.f32906f0.chunk.js.map
