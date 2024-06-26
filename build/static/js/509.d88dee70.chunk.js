'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [509],
  {
    10173: (e, t, n) => {
      n.d(t, { Z: () => h });
      var i = n(66934),
        a = n(89164),
        r = n(697),
        s = n(20890),
        o = n(4349),
        l = n(80184);
      const d = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        margin-top: '.concat(t.spacing(4), ';\n');
        }),
        h = () =>
          (0, l.jsx)(d, {
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
    },
    68418: (e, t, n) => {
      n.d(t, { Z: () => l });
      var i = n(66934),
        a = n(697),
        r = n(89164),
        s = n(80184);
      const o = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        l = (e) => {
          let { children: t } = e;
          return (0, s.jsx)(o, {
            className: 'MuiPageTitle-wrapper',
            children: (0, s.jsx)(r.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    87509: (e, t, n) => {
      n.r(t), n.d(t, { default: () => H });
      var i = n(6907),
        a = n(61889),
        r = n(60220),
        s = n(20890),
        o = n(13967),
        l = n(64222),
        d = n(80184);
      const h = () => {
        const { data: e } = (0, l.oj)({}, { refetchOnMountOrArgChange: !0 }),
          t = (0, o.Z)();
        return (0, d.jsxs)(a.ZP, {
          container: !0,
          alignItems: 'center',
          children: [
            (0, d.jsx)(a.ZP, {
              item: !0,
              children: (0, d.jsx)(r.Z, {
                sx: { mr: 2, width: t.spacing(8), height: t.spacing(8) },
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
      };
      var c = n(68418),
        x = n(89164),
        m = n(10173),
        u = n(697),
        p = n(57621),
        v = n(30168),
        g = n(63366),
        Z = n(87462),
        j = n(72791),
        w = n(59278),
        f = n(52554),
        b = n(94419);
      function C(e) {
        return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || '';
      }
      function y(e) {
        return parseFloat(e);
      }
      var P = n(44402),
        S = n(66934),
        k = n(31402),
        O = n(75878),
        A = n(21217);
      function M(e) {
        return (0, A.ZP)('MuiSkeleton', e);
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
      var R, B, I, N;
      const F = [
        'animation',
        'className',
        'component',
        'height',
        'style',
        'variant',
        'width'
      ];
      let T, W, X, _;
      const q = (0, f.F4)(
          T ||
            (T =
              R ||
              (R = (0, v.Z)([
                '\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n'
              ])))
        ),
        D = (0, f.F4)(
          W ||
            (W =
              B ||
              (B = (0, v.Z)([
                '\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n'
              ])))
        ),
        U = (0, S.ZP)('span', {
          name: 'MuiSkeleton',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.variant],
              !1 !== n.animation && t[n.animation],
              n.hasChildren && t.withChildren,
              n.hasChildren && !n.width && t.fitContent,
              n.hasChildren && !n.height && t.heightAuto
            ];
          }
        })(
          (e) => {
            let { theme: t, ownerState: n } = e;
            const i = C(t.shape.borderRadius) || 'px',
              a = y(t.shape.borderRadius);
            return (0, Z.Z)(
              {
                display: 'block',
                backgroundColor: t.vars
                  ? t.vars.palette.Skeleton.bg
                  : (0, P.Fq)(
                      t.palette.text.primary,
                      'light' === t.palette.mode ? 0.11 : 0.13
                    ),
                height: '1.2em'
              },
              'text' === n.variant && {
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
              'circular' === n.variant && { borderRadius: '50%' },
              'rounded' === n.variant && {
                borderRadius: (t.vars || t).shape.borderRadius
              },
              n.hasChildren && { '& > *': { visibility: 'hidden' } },
              n.hasChildren && !n.width && { maxWidth: 'fit-content' },
              n.hasChildren && !n.height && { height: 'auto' }
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              'pulse' === t.animation &&
              (0, f.iv)(
                X ||
                  (X =
                    I ||
                    (I = (0, v.Z)([
                      '\n      animation: ',
                      ' 2s ease-in-out 0.5s infinite;\n    '
                    ]))),
                q
              )
            );
          },
          (e) => {
            let { ownerState: t, theme: n } = e;
            return (
              'wave' === t.animation &&
              (0, f.iv)(
                _ ||
                  (_ =
                    N ||
                    (N = (0, v.Z)([
                      '\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: ',
                      ' 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ',
                      ",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "
                    ]))),
                D,
                (n.vars || n).palette.action.hover
              )
            );
          }
        ),
        z = j.forwardRef(function (e, t) {
          const n = (0, k.Z)({ props: e, name: 'MuiSkeleton' }),
            {
              animation: i = 'pulse',
              className: a,
              component: r = 'span',
              height: s,
              style: o,
              variant: l = 'text',
              width: h
            } = n,
            c = (0, g.Z)(n, F),
            x = (0, Z.Z)({}, n, {
              animation: i,
              component: r,
              variant: l,
              hasChildren: Boolean(c.children)
            }),
            m = ((e) => {
              const {
                  classes: t,
                  variant: n,
                  animation: i,
                  hasChildren: a,
                  width: r,
                  height: s
                } = e,
                o = {
                  root: [
                    'root',
                    n,
                    i,
                    a && 'withChildren',
                    a && !r && 'fitContent',
                    a && !s && 'heightAuto'
                  ]
                };
              return (0, b.Z)(o, M, t);
            })(x);
          return (0,
          d.jsx)(U, (0, Z.Z)({ as: r, ref: t, className: (0, w.Z)(m.root, a), ownerState: x }, c, { style: (0, Z.Z)({ width: h, height: s }, o) }));
        });
      var E = n(4349);
      const G = () => {
          const { data: e, isFetching: t } = (0, l.oj)(
            {},
            { refetchOnMountOrArgChange: !0 }
          );
          return (0, d.jsxs)(u.Z, {
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsxs)(u.Z, {
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
                                : null === e || void 0 === e
                                ? void 0
                                : e.balance.balance
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsxs)(u.Z, {
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
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.balanceOfChildAgents
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsxs)(u.Z, {
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
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.balanceOfChildUsers
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsx)(u.Z, {
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsx)(u.Z, {
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsxs)(u.Z, {
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
                    children: (0, d.jsxs)(p.Z, {
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
                        (0, d.jsx)(u.Z, {
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
        H = () =>
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(i.ql, {
                children: (0, d.jsx)('title', { children: 'Dashboard' })
              }),
              (0, d.jsx)(c.Z, { children: (0, d.jsx)(h, {}) }),
              (0, d.jsx)(x.Z, {
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
              (0, d.jsx)(m.Z, {})
            ]
          });
    },
    57621: (e, t, n) => {
      n.d(t, { Z: () => g });
      var i = n(87462),
        a = n(63366),
        r = n(72791),
        s = n(59278),
        o = n(94419),
        l = n(66934),
        d = n(31402),
        h = n(35527),
        c = n(75878),
        x = n(21217);
      function m(e) {
        return (0, x.ZP)('MuiCard', e);
      }
      (0, c.Z)('MuiCard', ['root']);
      var u = n(80184);
      const p = ['className', 'raised'],
        v = (0, l.ZP)(h.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: (e, t) => t.root
        })(() => ({ overflow: 'hidden' })),
        g = r.forwardRef(function (e, t) {
          const n = (0, d.Z)({ props: e, name: 'MuiCard' }),
            { className: r, raised: l = !1 } = n,
            h = (0, a.Z)(n, p),
            c = (0, i.Z)({}, n, { raised: l }),
            x = ((e) => {
              const { classes: t } = e;
              return (0, o.Z)({ root: ['root'] }, m, t);
            })(c);
          return (0,
          u.jsx)(v, (0, i.Z)({ className: (0, s.Z)(x.root, r), elevation: l ? 8 : void 0, ref: t, ownerState: c }, h));
        });
    }
  }
]);
//# sourceMappingURL=509.d88dee70.chunk.js.map
