'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [322],
  {
    173: function (n, e, t) {
      var i = t(6934),
        a = t(9164),
        r = t(4554),
        s = t(890),
        o = t(4349),
        l = t(184),
        d = (0, i.ZP)(a.Z)(function (n) {
          var e = n.theme;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function () {
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
    8418: function (n, e, t) {
      var i = t(6934),
        a = t(4554),
        r = t(9164),
        s = t(184),
        o = (0, i.ZP)(a.Z)(function (n) {
          var e = n.theme;
          return '\n        padding: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function (n) {
        var e = n.children;
        return (0, s.jsx)(o, {
          className: 'MuiPageTitle-wrapper',
          children: (0, s.jsx)(r.Z, { maxWidth: 'lg', children: e })
        });
      };
    },
    5322: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return f;
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
          var n = (0, l.oj)({}, { refetchOnMountOrArgChange: !0 }).data,
            e = (0, o.Z)();
          return (0, d.jsxs)(a.ZP, {
            container: !0,
            alignItems: 'center',
            children: [
              (0, d.jsx)(a.ZP, {
                item: !0,
                children: (0, d.jsx)(r.Z, {
                  sx: { mr: 2, width: e.spacing(8), height: e.spacing(8) },
                  variant: 'rounded',
                  alt: null === n || void 0 === n ? void 0 : n.name,
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
                      null === n || void 0 === n ? void 0 : n.name
                    ]
                  }),
                  (0, d.jsx)(s.Z, {
                    variant: 'subtitle2',
                    children: null === n || void 0 === n ? void 0 : n.type
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
        p = t(7047),
        Z = t(4349),
        g = function () {
          var n = (0, l.oj)({}, { refetchOnMountOrArgChange: !0 }),
            e = n.data,
            t = n.isFetching;
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
                          children: (0, d.jsx)(Z.Z, {
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
                                ? (0, d.jsx)(p.Z, {
                                    animation: 'wave',
                                    height: 44,
                                    width: 100
                                  })
                                : null === e || void 0 === e
                                ? void 0
                                : e.balance.balance
                            }),
                            t
                              ? (0, d.jsx)(p.Z, {
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
                          children: (0, d.jsx)(Z.Z, {
                            id: 'title.sub.agent.current.total.holding.amount'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            t
                              ? (0, d.jsx)(p.Z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.balanceOfChildAgents
                                }),
                            t
                              ? (0, d.jsx)(p.Z, {
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
                          children: (0, d.jsx)(Z.Z, {
                            id: 'title.current.total.amount.held.by.sub.users'
                          })
                        }),
                        (0, d.jsxs)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: [
                            t
                              ? (0, d.jsx)(p.Z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.balanceOfChildUsers
                                }),
                            t
                              ? (0, d.jsx)(p.Z, {
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
                          children: (0, d.jsx)(Z.Z, {
                            id: 'title.total.number.of.subagents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(p.Z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.totalSubAgent
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
                          children: (0, d.jsx)(Z.Z, {
                            id: 'title.number.of.distribution.sub.agents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(p.Z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.distributionSubAgent
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
                          children: (0, d.jsx)(Z.Z, {
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
                              ? (0, d.jsx)(p.Z, {
                                  animation: 'wave',
                                  height: 44,
                                  width: 100
                                })
                              : (0, d.jsx)(s.Z, {
                                  variant: 'h1',
                                  gutterBottom: !0,
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.operationSubAgent
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
                          children: (0, d.jsx)(Z.Z, {
                            id: 'title.number.of.parallel.sub.agents'
                          })
                        }),
                        (0, d.jsx)(m.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          children: t
                            ? (0, d.jsx)(p.Z, {
                                animation: 'wave',
                                height: 44,
                                width: 100
                              })
                            : (0, d.jsx)(s.Z, {
                                variant: 'h1',
                                gutterBottom: !0,
                                children:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.parallelSubAgent
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
        f = function () {
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
                    children: (0, d.jsx)(g, {})
                  })
                })
              }),
              (0, d.jsx)(x.Z, {})
            ]
          });
        };
    },
    7621: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
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
      function x(n) {
        return (0, u.Z)('MuiCard', n);
      }
      (0, c.Z)('MuiCard', ['root']);
      var m = t(184),
        v = ['className', 'raised'],
        p = (0, l.ZP)(h.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (n, e) {
            return e.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        Z = r.forwardRef(function (n, e) {
          var t = (0, d.Z)({ props: n, name: 'MuiCard' }),
            r = t.className,
            l = t.raised,
            h = void 0 !== l && l,
            c = (0, a.Z)(t, v),
            u = (0, i.Z)({}, t, { raised: h }),
            Z = (function (n) {
              var e = n.classes;
              return (0, o.Z)({ root: ['root'] }, x, e);
            })(u);
          return (0,
          m.jsx)(p, (0, i.Z)({ className: (0, s.Z)(Z.root, r), elevation: h ? 8 : void 0, ref: e, ownerState: u }, c));
        });
    },
    7047: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return R;
        }
      });
      var i = t(168),
        a = t(3366),
        r = t(7462),
        s = t(2791),
        o = t(8182),
        l = t(2554),
        d = t(4419);
      function h(n) {
        return String(n).match(/[\d.\-+]*\s*(.*)/)[1] || '';
      }
      function c(n) {
        return parseFloat(n);
      }
      var u = t(2065),
        x = t(6934),
        m = t(1402),
        v = t(5878),
        p = t(1217);
      function Z(n) {
        return (0, p.Z)('MuiSkeleton', n);
      }
      (0, v.Z)('MuiSkeleton', [
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
      var g,
        f,
        j,
        w,
        b,
        C,
        y,
        S,
        P = t(184),
        k = [
          'animation',
          'className',
          'component',
          'height',
          'style',
          'variant',
          'width'
        ],
        O = (0, l.F4)(
          b ||
            (b =
              g ||
              (g = (0, i.Z)([
                '\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n'
              ])))
        ),
        A = (0, l.F4)(
          C ||
            (C =
              f ||
              (f = (0, i.Z)([
                '\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n'
              ])))
        ),
        M = (0, x.ZP)('span', {
          name: 'MuiSkeleton',
          slot: 'Root',
          overridesResolver: function (n, e) {
            var t = n.ownerState;
            return [
              e.root,
              e[t.variant],
              !1 !== t.animation && e[t.animation],
              t.hasChildren && e.withChildren,
              t.hasChildren && !t.width && e.fitContent,
              t.hasChildren && !t.height && e.heightAuto
            ];
          }
        })(
          function (n) {
            var e = n.theme,
              t = n.ownerState,
              i = h(e.shape.borderRadius) || 'px',
              a = c(e.shape.borderRadius);
            return (0, r.Z)(
              {
                display: 'block',
                backgroundColor: e.vars
                  ? e.vars.palette.Skeleton.bg
                  : (0, u.Fq)(
                      e.palette.text.primary,
                      'light' === e.palette.mode ? 0.11 : 0.13
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
                borderRadius: (e.vars || e).shape.borderRadius
              },
              t.hasChildren && { '& > *': { visibility: 'hidden' } },
              t.hasChildren && !t.width && { maxWidth: 'fit-content' },
              t.hasChildren && !t.height && { height: 'auto' }
            );
          },
          function (n) {
            return (
              'pulse' === n.ownerState.animation &&
              (0, l.iv)(
                y ||
                  (y =
                    j ||
                    (j = (0, i.Z)([
                      '\n      animation: ',
                      ' 1.5s ease-in-out 0.5s infinite;\n    '
                    ]))),
                O
              )
            );
          },
          function (n) {
            var e = n.ownerState,
              t = n.theme;
            return (
              'wave' === e.animation &&
              (0, l.iv)(
                S ||
                  (S =
                    w ||
                    (w = (0, i.Z)([
                      '\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: ',
                      ' 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ',
                      ",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "
                    ]))),
                A,
                (t.vars || t).palette.action.hover
              )
            );
          }
        ),
        R = s.forwardRef(function (n, e) {
          var t = (0, m.Z)({ props: n, name: 'MuiSkeleton' }),
            i = t.animation,
            s = void 0 === i ? 'pulse' : i,
            l = t.className,
            h = t.component,
            c = void 0 === h ? 'span' : h,
            u = t.height,
            x = t.style,
            v = t.variant,
            p = void 0 === v ? 'text' : v,
            g = t.width,
            f = (0, a.Z)(t, k),
            j = (0, r.Z)({}, t, {
              animation: s,
              component: c,
              variant: p,
              hasChildren: Boolean(f.children)
            }),
            w = (function (n) {
              var e = n.classes,
                t = n.variant,
                i = n.animation,
                a = n.hasChildren,
                r = n.width,
                s = n.height,
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
              return (0, d.Z)(o, Z, e);
            })(j);
          return (0,
          P.jsx)(M, (0, r.Z)({ as: c, ref: e, className: (0, o.Z)(w.root, l), ownerState: j }, f, { style: (0, r.Z)({ width: g, height: u }, x) }));
        });
    }
  }
]);
//# sourceMappingURL=322.51c83669.chunk.js.map
