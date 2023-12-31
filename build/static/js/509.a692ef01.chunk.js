'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [509],
  {
    173: function (e, n, t) {
      var i = t(6934),
        a = t(9164),
        r = t(4554),
        s = t(890),
        o = t(4349),
        l = t(184),
        d = (0, i.ZP)(a.Z)(function (e) {
          var n = e.theme;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function () {
        return (0, l.jsx)(d, {
          className: 'footer-wrapper',
          children: (0, l.jsxs)(r.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, l.jsx)(r.Z, {
                children: (0, l.jsxs)(s.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, l.jsx)(o.Z, { id: 'footer.admin' })]
                })
              }),
              (0, l.jsx)(s.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    8418: function (e, n, t) {
      var i = t(6934),
        a = t(4554),
        r = t(9164),
        s = t(184),
        o = (0, i.ZP)(a.Z)(function (e) {
          var n = e.theme;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(o, {
          className: 'MuiPageTitle-wrapper',
          children: (0, s.jsx)(r.Z, { maxWidth: 'lg', children: n })
        });
      };
    },
    7509: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return H;
          }
        });
      var i = t(6907),
        a = t(1889),
        r = t(220),
        s = t(890),
        o = t(3967),
        l = t(4222),
        d = t(184),
        h = function () {
          var e = (0, l.oj)({}, { refetchOnMountOrArgChange: !0 }).data,
            n = (0, o.Z)();
          return (0, d.jsxs)(a.ZP, {
            container: !0,
            alignItems: 'center',
            children: [
              (0, d.jsx)(a.ZP, {
                item: !0,
                children: (0, d.jsx)(r.Z, {
                  sx: { mr: 2, width: n.spacing(8), height: n.spacing(8) },
                  variant: 'rounded',
                  alt: null === e || void 0 === e ? void 0 : e.name,
                  src: '/static/images/avatars/1.jpg'
                })
              }),
              (0, d.jsxs)(a.ZP, {
                item: !0,
                children: [
                  (0, d.jsxs)(s.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: [
                      'Welcome, ',
                      null === e || void 0 === e ? void 0 : e.name
                    ]
                  }),
                  (0, d.jsx)(s.Z, {
                    variant: 'subtitle2',
                    children: null === e || void 0 === e ? void 0 : e.type
                  })
                ]
              })
            ]
          });
        },
        c = t(8418),
        u = t(9164),
        x = t(173),
        m = t(4554),
        v = t(7621),
        p = t(168),
        g = t(3366),
        f = t(7462),
        Z = t(2791),
        j = t(8182),
        w = t(2554),
        b = t(4419);
      function C(e) {
        return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || '';
      }
      function y(e) {
        return parseFloat(e);
      }
      var S = t(2065),
        P = t(6934),
        k = t(1402),
        O = t(5878),
        A = t(1217);
      function M(e) {
        return (0, A.Z)('MuiSkeleton', e);
      }
      (0, O.Z)('MuiSkeleton', [
        'root',
        'text',
        'rectangular',
        'rounded',
        'circular',
        'pulse',
        'wave',
        'withChildren',
        'fitContent',
        'heightAuto'
      ]);
      var R,
        B,
        I,
        N,
        F,
        T,
        W,
        X,
        _ = [
          'animation',
          'className',
          'component',
          'height',
          'style',
          'variant',
          'width'
        ],
        q = (0, w.F4)(
          F ||
            (F =
              R ||
              (R = (0, p.Z)([
                '\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n'
              ])))
        ),
        D = (0, w.F4)(
          T ||
            (T =
              B ||
              (B = (0, p.Z)([
                '\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n'
              ])))
        ),
        U = (0, P.ZP)('span', {
          name: 'MuiSkeleton',
          slot: 'Root',
          overridesResolver: function (e, n) {
            var t = e.ownerState;
            return [
              n.root,
              n[t.variant],
              !1 !== t.animation && n[t.animation],
              t.hasChildren && n.withChildren,
              t.hasChildren && !t.width && n.fitContent,
              t.hasChildren && !t.height && n.heightAuto
            ];
          }
        })(
          function (e) {
            var n = e.theme,
              t = e.ownerState,
              i = C(n.shape.borderRadius) || 'px',
              a = y(n.shape.borderRadius);
            return (0, f.Z)(
              {
                display: 'block',
                backgroundColor: n.vars
                  ? n.vars.palette.Skeleton.bg
                  : (0, S.Fq)(
                      n.palette.text.primary,
                      'light' === n.palette.mode ? 0.11 : 0.13
                    ),
                height: '1.2em'
              },
              'text' === t.variant && {
                marginTop: 0,
                marginBottom: 0,
                height: 'auto',
                transformOrigin: '0 55%',
                transform: 'scale(1, 0.60)',
                borderRadius: ''
                  .concat(a)
                  .concat(i, '/')
                  .concat(Math.round((a / 0.6) * 10) / 10)
                  .concat(i),
                '&:empty:before': { content: '"\\00a0"' }
              },
              'circular' === t.variant && { borderRadius: '50%' },
              'rounded' === t.variant && {
                borderRadius: (n.vars || n).shape.borderRadius
              },
              t.hasChildren && { '& > *': { visibility: 'hidden' } },
              t.hasChildren && !t.width && { maxWidth: 'fit-content' },
              t.hasChildren && !t.height && { height: 'auto' }
            );
          },
          function (e) {
            return (
              'pulse' === e.ownerState.animation &&
              (0, w.iv)(
                W ||
                  (W =
                    I ||
                    (I = (0, p.Z)([
                      '\n      animation: ',
                      ' 1.5s ease-in-out 0.5s infinite;\n    '
                    ]))),
                q
              )
            );
          },
          function (e) {
            var n = e.ownerState,
              t = e.theme;
            return (
              'wave' === n.animation &&
              (0, w.iv)(
                X ||
                  (X =
                    N ||
                    (N = (0, p.Z)([
                      '\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: ',
                      ' 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ',
                      ",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "
                    ]))),
                D,
                (t.vars || t).palette.action.hover
              )
            );
          }
        ),
        z = Z.forwardRef(function (e, n) {
          var t = (0, k.Z)({ props: e, name: 'MuiSkeleton' }),
            i = t.animation,
            a = void 0 === i ? 'pulse' : i,
            r = t.className,
            s = t.component,
            o = void 0 === s ? 'span' : s,
            l = t.height,
            h = t.style,
            c = t.variant,
            u = void 0 === c ? 'text' : c,
            x = t.width,
            m = (0, g.Z)(t, _),
            v = (0, f.Z)({}, t, {
              animation: a,
              component: o,
              variant: u,
              hasChildren: Boolean(m.children)
            }),
            p = (function (e) {
              var n = e.classes,
                t = e.variant,
                i = e.animation,
                a = e.hasChildren,
                r = e.width,
                s = e.height,
                o = {
                  root: [
                    'root',
                    t,
                    i,
                    a && 'withChildren',
                    a && !r && 'fitContent',
                    a && !s && 'heightAuto'
                  ]
                };
              return (0, b.Z)(o, M, n);
            })(v);
          return (0,
          d.jsx)(U, (0, f.Z)({ as: o, ref: n, className: (0, j.Z)(p.root, r), ownerState: v }, m, { style: (0, f.Z)({ width: x, height: l }, h) }));
        }),
        E = t(4349),
        G = function () {
          var e = (0, l.oj)({}, { refetchOnMountOrArgChange: !0 }),
            n = e.data,
            t = e.isFetching;
          return (0, d.jsxs)(m.Z, {
            children: [
              (0, d.jsxs)(a.ZP, {
                container: !0,
                columns: { xs: 4, sm: 8, md: 12, lg: 16 },
                pt: 4,
                pb: 2,
                spacing: 2,
                children: [
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.current.holding.amount'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            (0, d.jsx)(s.Z, {
                              variant: 'h1',
                              gutterBottom: !0,
                              children: t
                                ? (0, d.jsx)(z, {
                                    animation: 'wave',
                                    height: 44,
                                    width: 100
                                  })
                                : null === n || void 0 === n
                                ? void 0
                                : n.balance.balance
                            }),
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 40
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h5',
                                  children: 'POT'
                                })
                          ]
                        })
                      ]
                    })
                  }),
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.sub.agent.current.total.holding.amount'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.balanceOfChildAgents
                                }),
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 40
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h5',
                                  children: 'POT'
                                })
                          ]
                        })
                      ]
                    })
                  }),
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.current.total.amount.held.by.sub.users'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.balanceOfChildUsers
                                }),
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 40
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h5',
                                  children: 'POT'
                                })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, d.jsxs)(a.ZP, {
                container: !0,
                columns: { xs: 4, sm: 8, md: 12, lg: 16 },
                spacing: 2,
                children: [
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.total.number.of.subagents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.totalSubAgent
                              })
                        })
                      ]
                    })
                  }),
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.number.of.distribution.sub.agents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.distributionSubAgent
                              })
                        })
                      ]
                    })
                  }),
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.number.of.operations.sub.agents'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            ' ',
                            t
                              ? (0, d.jsx)(z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.operationSubAgent
                                })
                          ]
                        })
                      ]
                    })
                  }),
                  (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    children: (0, d.jsxs)(v.Z, {
                      sx: { p: 2 },
                      children: [
                        (0, d.jsx)(s.Z, {
                          variant: 'h5',
                          width: '90%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          pb: 1,
                          children: (0, d.jsx)(E.Z, {
                            id: 'title.number.of.parallel.sub.agents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.parallelSubAgent
                              })
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          });
        },
        H = function () {
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(i.ql, {
                children: (0, d.jsx)('title', { children: 'Dashboard' })
              }),
              (0, d.jsx)(c.Z, { children: (0, d.jsx)(h, {}) }),
              (0, d.jsx)(u.Z, {
                maxWidth: 'xl',
                children: (0, d.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 4,
                  children: (0, d.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, d.jsx)(G, {})
                  })
                })
              }),
              (0, d.jsx)(x.Z, {})
            ]
          });
        };
    },
    7621: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        }
      });
      var i = t(7462),
        a = t(3366),
        r = t(2791),
        s = t(8182),
        o = t(4419),
        l = t(6934),
        d = t(1402),
        h = t(5527),
        c = t(5878),
        u = t(1217);
      function x(e) {
        return (0, u.Z)('MuiCard', e);
      }
      (0, c.Z)('MuiCard', ['root']);
      var m = t(184),
        v = ['className', 'raised'],
        p = (0, l.ZP)(h.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        g = r.forwardRef(function (e, n) {
          var t = (0, d.Z)({ props: e, name: 'MuiCard' }),
            r = t.className,
            l = t.raised,
            h = void 0 !== l && l,
            c = (0, a.Z)(t, v),
            u = (0, i.Z)({}, t, { raised: h }),
            g = (function (e) {
              var n = e.classes;
              return (0, o.Z)({ root: ['root'] }, x, n);
            })(u);
          return (0,
          m.jsx)(p, (0, i.Z)({ className: (0, s.Z)(g.root, r), elevation: h ? 8 : void 0, ref: n, ownerState: u }, c));
        });
    }
  }
]);
//# sourceMappingURL=509.a692ef01.chunk.js.map
