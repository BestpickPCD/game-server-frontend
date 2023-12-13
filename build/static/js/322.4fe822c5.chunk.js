'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [322],
  {
    173: function (n, e, r) {
      var t = r(6934),
        a = r(9164),
        c = r(4554),
        i = r(890),
        o = r(4349),
        s = r(184),
        l = (0, t.ZP)(a.Z)(function (n) {
          var e = n.theme;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function () {
        return (0, s.jsx)(l, {
          className: 'footer-wrapper',
          children: (0, s.jsxs)(c.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, s.jsx)(c.Z, {
                children: (0, s.jsxs)(i.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, s.jsx)(o.Z, { id: 'footer.admin' })]
                })
              }),
              (0, s.jsx)(i.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    8418: function (n, e, r) {
      var t = r(6934),
        a = r(4554),
        c = r(9164),
        i = r(184),
        o = (0, t.ZP)(a.Z)(function (n) {
          var e = n.theme;
          return '\n        padding: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function (n) {
        var e = n.children;
        return (0, i.jsx)(o, {
          className: 'MuiPageTitle-wrapper',
          children: (0, i.jsx)(c.Z, { maxWidth: 'lg', children: e })
        });
      };
    },
    5322: function (n, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return b;
          }
        });
      var t = r(6907),
        a = r(1889),
        c = r(220),
        i = r(890),
        o = r(3967),
        s = r(4222),
        l = r(184),
        d = function () {
          var n = (0, s.oj)({}, { refetchOnMountOrArgChange: !0 }).data,
            e = (0, o.Z)();
          return (0, l.jsxs)(a.ZP, {
            container: !0,
            alignItems: 'center',
            children: [
              (0, l.jsx)(a.ZP, {
                item: !0,
                children: (0, l.jsx)(c.Z, {
                  sx: { mr: 2, width: e.spacing(8), height: e.spacing(8) },
                  variant: 'rounded',
                  alt: null === n || void 0 === n ? void 0 : n.name,
                  src: '/static/images/avatars/1.jpg'
                })
              }),
              (0, l.jsxs)(a.ZP, {
                item: !0,
                children: [
                  (0, l.jsxs)(i.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: [
                      'Welcome, ',
                      null === n || void 0 === n ? void 0 : n.name
                    ]
                  }),
                  (0, l.jsx)(i.Z, {
                    variant: 'subtitle2',
                    children: null === n || void 0 === n ? void 0 : n.type
                  })
                ]
              })
            ]
          });
        },
        h = r(8418),
        u = r(9164),
        x = r(173),
        p = r(6934),
        Z = r(653),
        g = r(2065),
        m = r(7621),
        v = r(4554),
        j = r(4349),
        f =
          ((0, p.ZP)(c.Z)(function (n) {
            var e = n.theme;
            return '\n      background-color: '
              .concat(e.colors.success.main, ';\n      color: ')
              .concat(e.palette.success.contrastText, ';\n      width: ')
              .concat(e.spacing(8), ';\n      height: ')
              .concat(e.spacing(8), ';\n      box-shadow: ')
              .concat(e.colors.shadows.success, ';\n');
          }),
          (0, p.ZP)(Z.Z)(function (n) {
            var e = n.theme;
            return '\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: '
              .concat(e.spacing(1), ';\n  padding: ')
              .concat(
                e.spacing(0.5),
                ';\n  border-radius: 60px;\n  background: '
              )
              .concat(
                'dark' === e.palette.mode
                  ? e.colors.alpha.trueWhite[30]
                  : (0, g.Fq)(e.colors.alpha.black[100], 0.07),
                ';\n\n  img {\n    background: '
              )
              .concat(e.colors.alpha.trueWhite[100], ';\n    padding: ')
              .concat(
                e.spacing(0.5),
                ';\n    display: block;\n    border-radius: inherit;\n    height: '
              )
              .concat(e.spacing(4.5), ';\n    width: ')
              .concat(e.spacing(4.5), ';\n  }\n');
          }),
          function () {
            var n = (0, o.Z)(),
              e = (0, s.oj)({ refetchOnMountOrArgChange: !0 }).data;
            n.colors.alpha.trueWhite[100],
              n.colors.alpha.trueWhite[100],
              n.colors.alpha.black[70],
              n.colors.alpha.black[50],
              n.colors.alpha.trueWhite[100],
              n.palette.mode;
            return (0, l.jsx)(m.Z, {
              children: (0, l.jsx)(a.ZP, {
                spacing: 0,
                container: !0,
                children: (0, l.jsx)(a.ZP, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, l.jsxs)(v.Z, {
                    p: 4,
                    children: [
                      (0, l.jsx)(i.Z, {
                        sx: { pb: 3 },
                        variant: 'h4',
                        children: (0, l.jsx)(j.Z, {
                          id: 'label.account-balance'
                        })
                      }),
                      (0, l.jsxs)(v.Z, {
                        children: [
                          (0, l.jsxs)(i.Z, {
                            variant: 'h1',
                            gutterBottom: !0,
                            children: [
                              null === e || void 0 === e
                                ? void 0
                                : e.balance.balance,
                              ' ',
                              null === e || void 0 === e
                                ? void 0
                                : e.currency.code
                            ]
                          }),
                          (0, l.jsxs)(i.Z, {
                            variant: 'h4',
                            fontWeight: 'normal',
                            color: 'text.secondary',
                            children: [
                              null === e || void 0 === e
                                ? void 0
                                : e.balance.balance,
                              ' ',
                              null === e || void 0 === e
                                ? void 0
                                : e.currency.code
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            });
          }),
        b = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(t.ql, {
                children: (0, l.jsx)('title', { children: 'Dashboard' })
              }),
              (0, l.jsx)(h.Z, { children: (0, l.jsx)(d, {}) }),
              (0, l.jsx)(u.Z, {
                maxWidth: 'lg',
                children: (0, l.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 4,
                  children: (0, l.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, l.jsx)(f, {})
                  })
                })
              }),
              (0, l.jsx)(x.Z, {})
            ]
          });
        };
    },
    7621: function (n, e, r) {
      r.d(e, {
        Z: function () {
          return m;
        }
      });
      var t = r(7462),
        a = r(3366),
        c = r(2791),
        i = r(8182),
        o = r(4419),
        s = r(6934),
        l = r(1402),
        d = r(5527),
        h = r(5878),
        u = r(1217);
      function x(n) {
        return (0, u.Z)('MuiCard', n);
      }
      (0, h.Z)('MuiCard', ['root']);
      var p = r(184),
        Z = ['className', 'raised'],
        g = (0, s.ZP)(d.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (n, e) {
            return e.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        m = c.forwardRef(function (n, e) {
          var r = (0, l.Z)({ props: n, name: 'MuiCard' }),
            c = r.className,
            s = r.raised,
            d = void 0 !== s && s,
            h = (0, a.Z)(r, Z),
            u = (0, t.Z)({}, r, { raised: d }),
            m = (function (n) {
              var e = n.classes;
              return (0, o.Z)({ root: ['root'] }, x, e);
            })(u);
          return (0,
          p.jsx)(g, (0, t.Z)({ className: (0, i.Z)(m.root, c), elevation: d ? 8 : void 0, ref: e, ownerState: u }, h));
        });
    }
  }
]);
//# sourceMappingURL=322.4fe822c5.chunk.js.map
