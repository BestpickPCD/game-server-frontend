'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [65],
  {
    36065: (n, t, a) => {
      a.r(t), a.d(t, { default: () => I });
      var o = a(72791),
        i = a(61889),
        e = a(697),
        r = a(20890),
        s = a(89164),
        d = a(94294),
        c = a(19538),
        l = a(6907),
        g = a(34775),
        h = a(39709),
        u = a(66934),
        m = a(80184);
      const x = (0, u.ZP)(i.ZP)((n) => {
          let { theme: t } = n;
          return '\n    background: '.concat(t.colors.gradients.black1, ';\n');
        }),
        Z = (0, u.ZP)(e.Z)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        f = (0, u.ZP)(r.Z)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[100], ';\n');
        }),
        p = (0, u.ZP)(r.Z)((n) => {
          let { theme: t } = n;
          return '\n      color: '.concat(t.colors.alpha.white[70], ';\n');
        }),
        I = () => {
          const [n, t] = (0, o.useState)(!1);
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(l.ql, {
                children: (0, m.jsx)('title', { children: 'Status - 500' })
              }),
              (0, m.jsx)(Z, {
                children: (0, m.jsxs)(i.ZP, {
                  container: !0,
                  sx: { height: '100%' },
                  alignItems: 'stretch',
                  spacing: 0,
                  children: [
                    (0, m.jsx)(i.ZP, {
                      xs: 12,
                      md: 6,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      item: !0,
                      children: (0, m.jsx)(s.Z, {
                        maxWidth: 'sm',
                        children: (0, m.jsxs)(e.Z, {
                          textAlign: 'center',
                          children: [
                            (0, m.jsx)('img', {
                              alt: '500',
                              height: 260,
                              src: '/static/images/status/500.svg'
                            }),
                            (0, m.jsx)(r.Z, {
                              variant: 'h2',
                              sx: { my: 2 },
                              children:
                                'There was an error, please try again later'
                            }),
                            (0, m.jsx)(r.Z, {
                              variant: 'h4',
                              color: 'text.secondary',
                              fontWeight: 'normal',
                              sx: { mb: 4 },
                              children:
                                'The server encountered an internal error and was not able to complete your request'
                            }),
                            (0, m.jsx)(h.Z, {
                              onClick: function () {
                                t(!0);
                              },
                              loading: n,
                              variant: 'outlined',
                              color: 'primary',
                              startIcon: (0, m.jsx)(g.Z, {}),
                              children: 'Refresh view'
                            }),
                            (0, m.jsx)(d.Z, {
                              href: '/dashboards',
                              variant: 'contained',
                              sx: { ml: 1 },
                              children: 'Go back'
                            })
                          ]
                        })
                      })
                    }),
                    (0, m.jsx)(c.Z, {
                      mdDown: !0,
                      children: (0, m.jsx)(x, {
                        xs: 12,
                        md: 6,
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        item: !0,
                        children: (0, m.jsx)(s.Z, {
                          maxWidth: 'sm',
                          children: (0, m.jsxs)(e.Z, {
                            textAlign: 'center',
                            children: [
                              (0, m.jsx)(f, {
                                variant: 'h1',
                                sx: { my: 2 },
                                children: 'Admin Dashboard'
                              }),
                              (0, m.jsx)(p, {
                                variant: 'h4',
                                fontWeight: 'normal',
                                sx: { mb: 4 },
                                children:
                                  'High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes.'
                              }),
                              (0, m.jsx)(d.Z, {
                                href: '/dashboards',
                                size: 'large',
                                variant: 'contained',
                                children: 'dashboards'
                              })
                            ]
                          })
                        })
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
    },
    34775: (n, t, a) => {
      var o = a(64836);
      t.Z = void 0;
      var i = o(a(45649)),
        e = a(80184),
        r = (0, i.default)(
          (0, e.jsx)('path', {
            d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
          }),
          'RefreshTwoTone'
        );
      t.Z = r;
    },
    39709: (n, t, a) => {
      a.d(t, { Z: () => v });
      var o = a(63366),
        i = a(87462),
        e = a(72791),
        r = a(14036),
        s = a(67384),
        d = a(94419),
        c = a(66934),
        l = a(31402),
        g = a(94294),
        h = a(13239),
        u = a(21217);
      function m(n) {
        return (0, u.ZP)('MuiLoadingButton', n);
      }
      const x = (0, a(75878).Z)('MuiLoadingButton', [
        'root',
        'loading',
        'loadingIndicator',
        'loadingIndicatorCenter',
        'loadingIndicatorStart',
        'loadingIndicatorEnd',
        'endIconLoadingEnd',
        'startIconLoadingStart'
      ]);
      var Z = a(80184);
      const f = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        p = (0, c.ZP)(g.Z, {
          shouldForwardProp: (n) =>
            ((n) =>
              'ownerState' !== n &&
              'theme' !== n &&
              'sx' !== n &&
              'as' !== n &&
              'classes' !== n)(n) || 'classes' === n,
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: (n, t) => [
            t.root,
            t.startIconLoadingStart && {
              ['& .'.concat(x.startIconLoadingStart)]: t.startIconLoadingStart
            },
            t.endIconLoadingEnd && {
              ['& .'.concat(x.endIconLoadingEnd)]: t.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: t, theme: a } = n;
          return (0, i.Z)(
            {
              ['& .'
                .concat(x.startIconLoadingStart, ', & .')
                .concat(x.endIconLoadingEnd)]: {
                transition: a.transitions.create(['opacity'], {
                  duration: a.transitions.duration.short
                }),
                opacity: 0
              }
            },
            'center' === t.loadingPosition && {
              transition: a.transitions.create(
                ['background-color', 'box-shadow', 'border-color'],
                { duration: a.transitions.duration.short }
              ),
              ['&.'.concat(x.loading)]: { color: 'transparent' }
            },
            'start' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(x.startIconLoadingStart, ', & .')
                  .concat(x.endIconLoadingEnd)]: {
                  transition: a.transitions.create(['opacity'], {
                    duration: a.transitions.duration.short
                  }),
                  opacity: 0,
                  marginRight: -8
                }
              },
            'end' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(x.startIconLoadingStart, ', & .')
                  .concat(x.endIconLoadingEnd)]: {
                  transition: a.transitions.create(['opacity'], {
                    duration: a.transitions.duration.short
                  }),
                  opacity: 0,
                  marginLeft: -8
                }
              }
          );
        }),
        I = (0, c.ZP)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: (n, t) => {
            const { ownerState: a } = n;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, r.Z)(a.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: t, ownerState: a } = n;
          return (0, i.Z)(
            { position: 'absolute', visibility: 'visible', display: 'flex' },
            'start' === a.loadingPosition &&
              ('outlined' === a.variant || 'contained' === a.variant) && {
                left: 'small' === a.size ? 10 : 14
              },
            'start' === a.loadingPosition &&
              'text' === a.variant && { left: 6 },
            'center' === a.loadingPosition && {
              left: '50%',
              transform: 'translate(-50%)',
              color: t.palette.action.disabled
            },
            'end' === a.loadingPosition &&
              ('outlined' === a.variant || 'contained' === a.variant) && {
                right: 'small' === a.size ? 10 : 14
              },
            'end' === a.loadingPosition && 'text' === a.variant && { right: 6 },
            'start' === a.loadingPosition &&
              a.fullWidth && { position: 'relative', left: -10 },
            'end' === a.loadingPosition &&
              a.fullWidth && { position: 'relative', right: -10 }
          );
        }),
        v = e.forwardRef(function (n, t) {
          const a = (0, l.Z)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: c,
              disabled: g = !1,
              id: u,
              loading: x = !1,
              loadingIndicator: v,
              loadingPosition: j = 'center',
              variant: b = 'text'
            } = a,
            P = (0, o.Z)(a, f),
            L = (0, s.Z)(u),
            w =
              null != v
                ? v
                : (0, Z.jsx)(h.Z, {
                    'aria-labelledby': L,
                    color: 'inherit',
                    size: 16
                  }),
            y = (0, i.Z)({}, a, {
              disabled: g,
              loading: x,
              loadingIndicator: w,
              loadingPosition: j,
              variant: b
            }),
            S = ((n) => {
              const { loading: t, loadingPosition: a, classes: o } = n,
                e = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, r.Z)(a))],
                  endIcon: [t && 'endIconLoading'.concat((0, r.Z)(a))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, r.Z)(a))
                  ]
                },
                s = (0, d.Z)(e, m, o);
              return (0, i.Z)({}, o, s);
            })(y);
          return (0,
          Z.jsx)(p, (0, i.Z)({ disabled: g || x, id: L, ref: t }, P, { variant: b, classes: S, ownerState: y, children: 'end' === y.loadingPosition ? (0, Z.jsxs)(e.Fragment, { children: [c, x && (0, Z.jsx)(I, { className: S.loadingIndicator, ownerState: y, children: w })] }) : (0, Z.jsxs)(e.Fragment, { children: [x && (0, Z.jsx)(I, { className: S.loadingIndicator, ownerState: y, children: w }), c] }) }));
        });
    }
  }
]);
//# sourceMappingURL=65.0d63cca3.chunk.js.map
