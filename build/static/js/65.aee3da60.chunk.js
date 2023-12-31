'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [65],
  {
    6065: function (n, t, o) {
      o.r(t);
      var i = o(9439),
        a = o(2791),
        r = o(1889),
        e = o(4554),
        d = o(890),
        s = o(9164),
        c = o(6151),
        l = o(9538),
        g = o(6907),
        h = o(4775),
        u = o(9709),
        f = o(6934),
        m = o(184),
        x = (0, f.ZP)(r.ZP)(function (n) {
          var t = n.theme;
          return '\n    background: '.concat(t.colors.gradients.black1, ';\n');
        }),
        v = (0, f.ZP)(e.Z)(function () {
          return '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n';
        }),
        Z = (0, f.ZP)(d.Z)(function (n) {
          var t = n.theme;
          return '\n      color: '.concat(t.colors.alpha.white[100], ';\n');
        }),
        p = (0, f.ZP)(d.Z)(function (n) {
          var t = n.theme;
          return '\n      color: '.concat(t.colors.alpha.white[70], ';\n');
        });
      t.default = function () {
        var n = (0, a.useState)(!1),
          t = (0, i.Z)(n, 2),
          o = t[0],
          f = t[1];
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(g.ql, {
              children: (0, m.jsx)('title', { children: 'Status - 500' })
            }),
            (0, m.jsx)(v, {
              children: (0, m.jsxs)(r.ZP, {
                container: !0,
                sx: { height: '100%' },
                alignItems: 'stretch',
                spacing: 0,
                children: [
                  (0, m.jsx)(r.ZP, {
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
                          (0, m.jsx)(d.Z, {
                            variant: 'h2',
                            sx: { my: 2 },
                            children:
                              'There was an error, please try again later'
                          }),
                          (0, m.jsx)(d.Z, {
                            variant: 'h4',
                            color: 'text.secondary',
                            fontWeight: 'normal',
                            sx: { mb: 4 },
                            children:
                              'The server encountered an internal error and was not able to complete your request'
                          }),
                          (0, m.jsx)(u.Z, {
                            onClick: function () {
                              f(!0);
                            },
                            loading: o,
                            variant: 'outlined',
                            color: 'primary',
                            startIcon: (0, m.jsx)(h.Z, {}),
                            children: 'Refresh view'
                          }),
                          (0, m.jsx)(c.Z, {
                            href: '/dashboards',
                            variant: 'contained',
                            sx: { ml: 1 },
                            children: 'Go back'
                          })
                        ]
                      })
                    })
                  }),
                  (0, m.jsx)(l.Z, {
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
                            (0, m.jsx)(Z, {
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
                            (0, m.jsx)(c.Z, {
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
    4775: function (n, t, o) {
      var i = o(4836);
      t.Z = void 0;
      var a = i(o(5649)),
        r = o(184),
        e = (0, a.default)(
          (0, r.jsx)('path', {
            d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
          }),
          'RefreshTwoTone'
        );
      t.Z = e;
    },
    9709: function (n, t, o) {
      o.d(t, {
        Z: function () {
          return j;
        }
      });
      var i = o(4942),
        a = o(3366),
        r = o(7462),
        e = o(2791),
        d = o(4036),
        s = o(7384),
        c = o(4419),
        l = o(6934),
        g = o(1402),
        h = o(6151),
        u = o(3239),
        f = o(1217);
      function m(n) {
        return (0, f.Z)('MuiLoadingButton', n);
      }
      var x = (0, o(5878).Z)('MuiLoadingButton', [
          'root',
          'loading',
          'loadingIndicator',
          'loadingIndicatorCenter',
          'loadingIndicatorStart',
          'loadingIndicatorEnd',
          'endIconLoadingEnd',
          'startIconLoadingStart'
        ]),
        v = o(184),
        Z = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        p = (0, l.ZP)(h.Z, {
          shouldForwardProp: function (n) {
            return (
              (function (n) {
                return (
                  'ownerState' !== n &&
                  'theme' !== n &&
                  'sx' !== n &&
                  'as' !== n &&
                  'classes' !== n
                );
              })(n) || 'classes' === n
            );
          },
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: function (n, t) {
            return [
              t.root,
              t.startIconLoadingStart &&
                (0, i.Z)(
                  {},
                  '& .'.concat(x.startIconLoadingStart),
                  t.startIconLoadingStart
                ),
              t.endIconLoadingEnd &&
                (0, i.Z)(
                  {},
                  '& .'.concat(x.endIconLoadingEnd),
                  t.endIconLoadingEnd
                )
            ];
          }
        })(function (n) {
          var t = n.ownerState,
            o = n.theme;
          return (0,
          r.Z)((0, i.Z)({}, '& .'.concat(x.startIconLoadingStart, ', & .').concat(x.endIconLoadingEnd), { transition: o.transitions.create(['opacity'], { duration: o.transitions.duration.short }), opacity: 0 }), 'center' === t.loadingPosition && (0, i.Z)({ transition: o.transitions.create(['background-color', 'box-shadow', 'border-color'], { duration: o.transitions.duration.short }) }, '&.'.concat(x.loading), { color: 'transparent' }), 'start' === t.loadingPosition && t.fullWidth && (0, i.Z)({}, '& .'.concat(x.startIconLoadingStart, ', & .').concat(x.endIconLoadingEnd), { transition: o.transitions.create(['opacity'], { duration: o.transitions.duration.short }), opacity: 0, marginRight: -8 }), 'end' === t.loadingPosition && t.fullWidth && (0, i.Z)({}, '& .'.concat(x.startIconLoadingStart, ', & .').concat(x.endIconLoadingEnd), { transition: o.transitions.create(['opacity'], { duration: o.transitions.duration.short }), opacity: 0, marginLeft: -8 }));
        }),
        I = (0, l.ZP)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: function (n, t) {
            var o = n.ownerState;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, d.Z)(o.loadingPosition))]
            ];
          }
        })(function (n) {
          var t = n.theme,
            o = n.ownerState;
          return (0,
          r.Z)({ position: 'absolute', visibility: 'visible', display: 'flex' }, 'start' === o.loadingPosition && ('outlined' === o.variant || 'contained' === o.variant) && { left: 'small' === o.size ? 10 : 14 }, 'start' === o.loadingPosition && 'text' === o.variant && { left: 6 }, 'center' === o.loadingPosition && { left: '50%', transform: 'translate(-50%)', color: t.palette.action.disabled }, 'end' === o.loadingPosition && ('outlined' === o.variant || 'contained' === o.variant) && { right: 'small' === o.size ? 10 : 14 }, 'end' === o.loadingPosition && 'text' === o.variant && { right: 6 }, 'start' === o.loadingPosition && o.fullWidth && { position: 'relative', left: -10 }, 'end' === o.loadingPosition && o.fullWidth && { position: 'relative', right: -10 });
        }),
        j = e.forwardRef(function (n, t) {
          var o = (0, g.Z)({ props: n, name: 'MuiLoadingButton' }),
            i = o.children,
            l = o.disabled,
            h = void 0 !== l && l,
            f = o.id,
            x = o.loading,
            j = void 0 !== x && x,
            b = o.loadingIndicator,
            P = o.loadingPosition,
            L = void 0 === P ? 'center' : P,
            w = o.variant,
            y = void 0 === w ? 'text' : w,
            S = (0, a.Z)(o, Z),
            k = (0, s.Z)(f),
            E =
              null != b
                ? b
                : (0, v.jsx)(u.Z, {
                    'aria-labelledby': k,
                    color: 'inherit',
                    size: 16
                  }),
            R = (0, r.Z)({}, o, {
              disabled: h,
              loading: j,
              loadingIndicator: E,
              loadingPosition: L,
              variant: y
            }),
            W = (function (n) {
              var t = n.loading,
                o = n.loadingPosition,
                i = n.classes,
                a = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, d.Z)(o))],
                  endIcon: [t && 'endIconLoading'.concat((0, d.Z)(o))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, d.Z)(o))
                  ]
                },
                e = (0, c.Z)(a, m, i);
              return (0, r.Z)({}, i, e);
            })(R);
          return (0,
          v.jsx)(p, (0, r.Z)({ disabled: h || j, id: k, ref: t }, S, { variant: y, classes: W, ownerState: R, children: 'end' === R.loadingPosition ? (0, v.jsxs)(e.Fragment, { children: [i, j && (0, v.jsx)(I, { className: W.loadingIndicator, ownerState: R, children: E })] }) : (0, v.jsxs)(e.Fragment, { children: [j && (0, v.jsx)(I, { className: W.loadingIndicator, ownerState: R, children: E }), i] }) }));
        });
    }
  }
]);
//# sourceMappingURL=65.aee3da60.chunk.js.map
