'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [579],
  {
    58645: (e, o, t) => {
      t.d(o, { Z: () => v });
      var r = t(697),
        n = t(89164),
        a = t(61889),
        s = t(87462),
        l = t(72791),
        c = t(31402),
        i = t(6199),
        d = t(80184);
      const u = (e, o) =>
          (0, s.Z)(
            {
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              boxSizing: 'border-box',
              WebkitTextSizeAdjust: '100%'
            },
            o && !e.vars && { colorScheme: e.palette.mode }
          ),
        m = (e) =>
          (0, s.Z)(
            { color: (e.vars || e).palette.text.primary },
            e.typography.body1,
            {
              backgroundColor: (e.vars || e).palette.background.default,
              '@media print': {
                backgroundColor: (e.vars || e).palette.common.white
              }
            }
          );
      const p = function (e) {
        const o = (0, c.Z)({ props: e, name: 'MuiCssBaseline' }),
          { children: t, enableColorScheme: r = !1 } = o;
        return (0, d.jsxs)(l.Fragment, {
          children: [
            (0, d.jsx)(i.Z, {
              styles: (e) =>
                (function (e) {
                  let o =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  var t;
                  const r = {};
                  o &&
                    e.colorSchemes &&
                    Object.entries(e.colorSchemes).forEach((o) => {
                      let [t, n] = o;
                      var a;
                      r[e.getColorSchemeSelector(t).replace(/\s*&/, '')] = {
                        colorScheme: null == (a = n.palette) ? void 0 : a.mode
                      };
                    });
                  let n = (0, s.Z)(
                    {
                      html: u(e, o),
                      '*, *::before, *::after': { boxSizing: 'inherit' },
                      'strong, b': { fontWeight: e.typography.fontWeightBold },
                      body: (0, s.Z)({ margin: 0 }, m(e), {
                        '&::backdrop': {
                          backgroundColor: (e.vars || e).palette.background
                            .default
                        }
                      })
                    },
                    r
                  );
                  const a =
                    null == (t = e.components) || null == (t = t.MuiCssBaseline)
                      ? void 0
                      : t.styleOverrides;
                  return a && (n = [n, a]), n;
                })(e, r)
            }),
            t
          ]
        });
      };
      var h = t(35527),
        b = t(66934),
        g = t(6907),
        f = t(16871);
      const Z = (0, b.ZP)(r.Z)(
          () =>
            '\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n'
        ),
        v = (e) => {
          let { children: o } = e;
          const t = (0, f.TH)();
          return (0, d.jsxs)(Z, {
            children: [
              (0, d.jsx)(g.ql, {
                children: (0, d.jsx)('title', {
                  children: '/register' === t.pathname ? 'Sign Up' : 'Sign In'
                })
              }),
              (0, d.jsx)(n.Z, {
                component: 'main',
                maxWidth: 'lg',
                children: (0, d.jsx)(r.Z, {
                  children: (0, d.jsxs)(a.ZP, {
                    container: !0,
                    children: [
                      (0, d.jsx)(p, {}),
                      (0, d.jsx)(a.ZP, {
                        item: !0,
                        xs: !1,
                        sm: 4,
                        md: 7,
                        sx: {
                          backgroundImage:
                            'url(https://source.unsplash.com/random)',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: (e) =>
                            'light' === e.palette.mode
                              ? e.palette.grey[50]
                              : e.palette.grey[900],
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '80vh'
                        }
                      }),
                      (0, d.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        md: 5,
                        component: h.Z,
                        elevation: 6,
                        square: !0,
                        children: (0, d.jsx)(r.Z, {
                          sx: {
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center'
                          },
                          children: o
                        })
                      })
                    ]
                  })
                })
              })
            ]
          });
        };
    },
    5579: (e, o, t) => {
      t.r(o), t.d(o, { default: () => y });
      var r = t(44695),
        n = t(39709),
        a = t(20890),
        s = t(697),
        l = t(48550),
        c = t(85523),
        i = t(94454),
        d = t(61889),
        u = t(61134),
        m = t(16871),
        p = t(43504),
        h = t(61927),
        b = t(87837),
        g = t(8007),
        f = t(58645),
        Z = t(4349),
        v = t(72791),
        x = t(80184);
      const k = g.Ry().shape({
          username: g
            .Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          password: g
            .Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required')
        }),
        y = () => {
          const e = (0, m.s0)();
          (0, v.useEffect)(() => {
            localStorage.getItem('tokens') && e('/dashboards');
          }, [e]);
          const [o, { isLoading: t }] = (0, h.YA)(),
            { notify: g, message: y } = (0, b.p)(),
            {
              register: S,
              handleSubmit: P,
              reset: j,
              formState: { errors: w }
            } = (0, u.cI)({
              resolver: (0, r.X)(k),
              defaultValues: { username: '', password: '' }
            });
          return (0, x.jsx)(f.Z, {
            children: (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(a.Z, {
                  component: 'h1',
                  variant: 'h5',
                  children: 'Sign In'
                }),
                (0, x.jsxs)(s.Z, {
                  component: 'form',
                  noValidate: !0,
                  onSubmit: P(async (t) => {
                    try {
                      const r = await o(t).unwrap();
                      if ('SUCCESS' === r.message) {
                        j(),
                          g({ message: 'Login Successfully' }),
                          e('/dashboards');
                        const { tokens: o, ...t } = r.data;
                        localStorage.setItem(
                          'tokens',
                          JSON.stringify({ token: o })
                        ),
                          localStorage.setItem('user', JSON.stringify(t));
                      }
                    } catch (r) {
                      return 'NOT_FOUND' === r.data.message
                        ? g({
                            message: 'Username or password is not correct',
                            type: 'error'
                          })
                        : g({ message: y.ERROR, type: 'error' });
                    }
                  }),
                  sx: { mt: 1 },
                  children: [
                    (0, x.jsx)(l.Z, {
                      margin: 'normal',
                      required: !0,
                      fullWidth: !0,
                      label: (0, x.jsx)(Z.Z, { id: 'label.username' }),
                      autoFocus: !0,
                      sx: { my: 2 },
                      error: !!w.username,
                      helperText: w.username ? w.username.message : '',
                      ...S('username')
                    }),
                    (0, x.jsx)(l.Z, {
                      required: !0,
                      fullWidth: !0,
                      label: 'Password',
                      type: 'password',
                      error: !!w.password,
                      helperText: w.password ? w.password.message : '',
                      ...S('password')
                    }),
                    (0, x.jsx)(c.Z, {
                      control: (0, x.jsx)(i.Z, {
                        value: 'remember',
                        color: 'primary'
                      }),
                      label: 'Remember me'
                    }),
                    (0, x.jsx)(n.Z, {
                      type: 'submit',
                      fullWidth: !0,
                      variant: 'contained',
                      sx: { mt: 3, mb: 2 },
                      loading: t,
                      children: 'Sign In'
                    }),
                    (0, x.jsxs)(d.ZP, {
                      container: !0,
                      children: [
                        (0, x.jsx)(d.ZP, {
                          item: !0,
                          xs: !0,
                          children: (0, x.jsx)(p.rU, {
                            to: '/',
                            children: 'Forgot password?'
                          })
                        }),
                        (0, x.jsx)(d.ZP, {
                          item: !0,
                          xs: !0,
                          children: (0, x.jsxs)(p.rU, {
                            to: '/register',
                            children: [
                              (0, x.jsx)('span', {
                                children: "Don't have an account? "
                              }),
                              (0, x.jsx)('span', { children: 'Sign Up' })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          });
        };
    },
    94454: (e, o, t) => {
      t.d(o, { Z: () => C });
      var r = t(63366),
        n = t(87462),
        a = t(72791),
        s = t(59278),
        l = t(94419),
        c = t(44402),
        i = t(97278),
        d = t(76189),
        u = t(80184);
      const m = (0, d.Z)(
          (0, u.jsx)('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
          }),
          'CheckBoxOutlineBlank'
        ),
        p = (0, d.Z)(
          (0, u.jsx)('path', {
            d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
          }),
          'CheckBox'
        ),
        h = (0, d.Z)(
          (0, u.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
          }),
          'IndeterminateCheckBox'
        );
      var b = t(14036),
        g = t(31402),
        f = t(66934),
        Z = t(75878),
        v = t(21217);
      function x(e) {
        return (0, v.ZP)('MuiCheckbox', e);
      }
      const k = (0, Z.Z)('MuiCheckbox', [
          'root',
          'checked',
          'disabled',
          'indeterminate',
          'colorPrimary',
          'colorSecondary',
          'sizeSmall',
          'sizeMedium'
        ]),
        y = [
          'checkedIcon',
          'color',
          'icon',
          'indeterminate',
          'indeterminateIcon',
          'inputProps',
          'size',
          'className'
        ],
        S = (0, f.ZP)(i.Z, {
          shouldForwardProp: (e) => (0, f.FO)(e) || 'classes' === e,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: t } = e;
            return [
              o.root,
              t.indeterminate && o.indeterminate,
              o['size'.concat((0, b.Z)(t.size))],
              'default' !== t.color && o['color'.concat((0, b.Z)(t.color))]
            ];
          }
        })((e) => {
          let { theme: o, ownerState: t } = e;
          return (0, n.Z)(
            { color: (o.vars || o).palette.text.secondary },
            !t.disableRipple && {
              '&:hover': {
                backgroundColor: o.vars
                  ? 'rgba('
                      .concat(
                        'default' === t.color
                          ? o.vars.palette.action.activeChannel
                          : o.vars.palette[t.color].mainChannel,
                        ' / '
                      )
                      .concat(o.vars.palette.action.hoverOpacity, ')')
                  : (0, c.Fq)(
                      'default' === t.color
                        ? o.palette.action.active
                        : o.palette[t.color].main,
                      o.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' }
              }
            },
            'default' !== t.color && {
              ['&.'.concat(k.checked, ', &.').concat(k.indeterminate)]: {
                color: (o.vars || o).palette[t.color].main
              },
              ['&.'.concat(k.disabled)]: {
                color: (o.vars || o).palette.action.disabled
              }
            }
          );
        }),
        P = (0, u.jsx)(p, {}),
        j = (0, u.jsx)(m, {}),
        w = (0, u.jsx)(h, {}),
        C = a.forwardRef(function (e, o) {
          var t, c;
          const i = (0, g.Z)({ props: e, name: 'MuiCheckbox' }),
            {
              checkedIcon: d = P,
              color: m = 'primary',
              icon: p = j,
              indeterminate: h = !1,
              indeterminateIcon: f = w,
              inputProps: Z,
              size: v = 'medium',
              className: k
            } = i,
            C = (0, r.Z)(i, y),
            R = h ? f : p,
            F = h ? f : d,
            z = (0, n.Z)({}, i, { color: m, indeterminate: h, size: v }),
            I = ((e) => {
              const { classes: o, indeterminate: t, color: r, size: a } = e,
                s = {
                  root: [
                    'root',
                    t && 'indeterminate',
                    'color'.concat((0, b.Z)(r)),
                    'size'.concat((0, b.Z)(a))
                  ]
                },
                c = (0, l.Z)(s, x, o);
              return (0, n.Z)({}, o, c);
            })(z);
          return (0,
          u.jsx)(S, (0, n.Z)({ type: 'checkbox', inputProps: (0, n.Z)({ 'data-indeterminate': h }, Z), icon: a.cloneElement(R, { fontSize: null != (t = R.props.fontSize) ? t : v }), checkedIcon: a.cloneElement(F, { fontSize: null != (c = F.props.fontSize) ? c : v }), ownerState: z, ref: o, className: (0, s.Z)(I.root, k) }, C, { classes: I }));
        });
    },
    85523: (e, o, t) => {
      t.d(o, { Z: () => S });
      var r = t(63366),
        n = t(87462),
        a = t(72791),
        s = t(59278),
        l = t(94419),
        c = t(52930),
        i = t(36314),
        d = t(20890),
        u = t(14036),
        m = t(66934),
        p = t(31402),
        h = t(75878),
        b = t(21217);
      function g(e) {
        return (0, b.ZP)('MuiFormControlLabel', e);
      }
      const f = (0, h.Z)('MuiFormControlLabel', [
        'root',
        'labelPlacementStart',
        'labelPlacementTop',
        'labelPlacementBottom',
        'disabled',
        'label',
        'error',
        'required',
        'asterisk'
      ]);
      var Z = t(76147),
        v = t(80184);
      const x = [
          'checked',
          'className',
          'componentsProps',
          'control',
          'disabled',
          'disableTypography',
          'inputRef',
          'label',
          'labelPlacement',
          'name',
          'onChange',
          'required',
          'slotProps',
          'value'
        ],
        k = (0, m.ZP)('label', {
          name: 'MuiFormControlLabel',
          slot: 'Root',
          overridesResolver: (e, o) => {
            const { ownerState: t } = e;
            return [
              { ['& .'.concat(f.label)]: o.label },
              o.root,
              o['labelPlacement'.concat((0, u.Z)(t.labelPlacement))]
            ];
          }
        })((e) => {
          let { theme: o, ownerState: t } = e;
          return (0, n.Z)(
            {
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              verticalAlign: 'middle',
              WebkitTapHighlightColor: 'transparent',
              marginLeft: -11,
              marginRight: 16,
              ['&.'.concat(f.disabled)]: { cursor: 'default' }
            },
            'start' === t.labelPlacement && {
              flexDirection: 'row-reverse',
              marginLeft: 16,
              marginRight: -11
            },
            'top' === t.labelPlacement && {
              flexDirection: 'column-reverse',
              marginLeft: 16
            },
            'bottom' === t.labelPlacement && {
              flexDirection: 'column',
              marginLeft: 16
            },
            {
              ['& .'.concat(f.label)]: {
                ['&.'.concat(f.disabled)]: {
                  color: (o.vars || o).palette.text.disabled
                }
              }
            }
          );
        }),
        y = (0, m.ZP)('span', {
          name: 'MuiFormControlLabel',
          slot: 'Asterisk',
          overridesResolver: (e, o) => o.asterisk
        })((e) => {
          let { theme: o } = e;
          return {
            ['&.'.concat(f.error)]: { color: (o.vars || o).palette.error.main }
          };
        }),
        S = a.forwardRef(function (e, o) {
          var t, m;
          const h = (0, p.Z)({ props: e, name: 'MuiFormControlLabel' }),
            {
              className: b,
              componentsProps: f = {},
              control: S,
              disabled: P,
              disableTypography: j,
              label: w,
              labelPlacement: C = 'end',
              required: R,
              slotProps: F = {}
            } = h,
            z = (0, r.Z)(h, x),
            I = (0, c.Z)(),
            N =
              null != (t = null != P ? P : S.props.disabled)
                ? t
                : null == I
                ? void 0
                : I.disabled,
            M = null != R ? R : S.props.required,
            q = { disabled: N, required: M };
          ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((e) => {
            'undefined' === typeof S.props[e] &&
              'undefined' !== typeof h[e] &&
              (q[e] = h[e]);
          });
          const B = (0, Z.Z)({
              props: h,
              muiFormControl: I,
              states: ['error']
            }),
            O = (0, n.Z)({}, h, {
              disabled: N,
              labelPlacement: C,
              required: M,
              error: B.error
            }),
            L = ((e) => {
              const {
                  classes: o,
                  disabled: t,
                  labelPlacement: r,
                  error: n,
                  required: a
                } = e,
                s = {
                  root: [
                    'root',
                    t && 'disabled',
                    'labelPlacement'.concat((0, u.Z)(r)),
                    n && 'error',
                    a && 'required'
                  ],
                  label: ['label', t && 'disabled'],
                  asterisk: ['asterisk', n && 'error']
                };
              return (0, l.Z)(s, g, o);
            })(O),
            T = null != (m = F.typography) ? m : f.typography;
          let E = w;
          return (
            null == E ||
              E.type === d.Z ||
              j ||
              (E = (0, v.jsx)(
                d.Z,
                (0, n.Z)({ component: 'span' }, T, {
                  className: (0, s.Z)(
                    L.label,
                    null == T ? void 0 : T.className
                  ),
                  children: E
                })
              )),
            (0, v.jsxs)(
              k,
              (0, n.Z)(
                { className: (0, s.Z)(L.root, b), ownerState: O, ref: o },
                z,
                {
                  children: [
                    a.cloneElement(S, q),
                    M
                      ? (0, v.jsxs)(i.Z, {
                          display: 'block',
                          children: [
                            E,
                            (0, v.jsxs)(y, {
                              ownerState: O,
                              'aria-hidden': !0,
                              className: L.asterisk,
                              children: ['\u2009', '*']
                            })
                          ]
                        })
                      : E
                  ]
                }
              )
            )
          );
        });
    },
    36314: (e, o, t) => {
      t.d(o, { Z: () => w });
      var r = t(63366),
        n = t(87462),
        a = t(72791),
        s = t(30831),
        l = t(82466),
        c = t(94419),
        i = t(21217),
        d = t(93457),
        u = t(86083),
        m = t(78519),
        p = t(85080),
        h = t(51184),
        b = t(45682),
        g = t(80184);
      const f = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
          'className',
          'useFlexGap'
        ],
        Z = (0, p.Z)(),
        v = (0, d.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: (e, o) => o.root
        });
      function x(e) {
        return (0, u.Z)({ props: e, name: 'MuiStack', defaultTheme: Z });
      }
      function k(e, o) {
        const t = a.Children.toArray(e).filter(Boolean);
        return t.reduce(
          (e, r, n) => (
            e.push(r),
            n < t.length - 1 &&
              e.push(a.cloneElement(o, { key: 'separator-'.concat(n) })),
            e
          ),
          []
        );
      }
      const y = (e) => {
        let { ownerState: o, theme: t } = e,
          r = (0, n.Z)(
            { display: 'flex', flexDirection: 'column' },
            (0, h.k9)(
              { theme: t },
              (0, h.P$)({
                values: o.direction,
                breakpoints: t.breakpoints.values
              }),
              (e) => ({ flexDirection: e })
            )
          );
        if (o.spacing) {
          const e = (0, b.hB)(t),
            n = Object.keys(t.breakpoints.values).reduce(
              (e, t) => (
                (('object' === typeof o.spacing && null != o.spacing[t]) ||
                  ('object' === typeof o.direction &&
                    null != o.direction[t])) &&
                  (e[t] = !0),
                e
              ),
              {}
            ),
            a = (0, h.P$)({ values: o.direction, base: n }),
            s = (0, h.P$)({ values: o.spacing, base: n });
          'object' === typeof a &&
            Object.keys(a).forEach((e, o, t) => {
              if (!a[e]) {
                const r = o > 0 ? a[t[o - 1]] : 'column';
                a[e] = r;
              }
            });
          const c = (t, r) => {
            return o.useFlexGap
              ? { gap: (0, b.NA)(e, t) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    ['margin'.concat(
                      ((n = r ? a[r] : o.direction),
                      {
                        row: 'Left',
                        'row-reverse': 'Right',
                        column: 'Top',
                        'column-reverse': 'Bottom'
                      }[n])
                    )]: (0, b.NA)(e, t)
                  }
                };
            var n;
          };
          r = (0, l.Z)(r, (0, h.k9)({ theme: t }, s, c));
        }
        return (r = (0, h.dt)(t.breakpoints, r)), r;
      };
      var S = t(66934),
        P = t(31402);
      const j = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              createStyledComponent: o = v,
              useThemeProps: t = x,
              componentName: l = 'MuiStack'
            } = e,
            d = o(y),
            u = a.forwardRef(function (e, o) {
              const a = t(e),
                u = (0, m.Z)(a),
                {
                  component: p = 'div',
                  direction: h = 'column',
                  spacing: b = 0,
                  divider: Z,
                  children: v,
                  className: x,
                  useFlexGap: y = !1
                } = u,
                S = (0, r.Z)(u, f),
                P = { direction: h, spacing: b, useFlexGap: y },
                j = (0, c.Z)({ root: ['root'] }, (e) => (0, i.ZP)(l, e), {});
              return (0,
              g.jsx)(d, (0, n.Z)({ as: p, ownerState: P, ref: o, className: (0, s.Z)(j.root, x) }, S, { children: Z ? k(v, Z) : v }));
            });
          return u;
        })({
          createStyledComponent: (0, S.ZP)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: (e, o) => o.root
          }),
          useThemeProps: (e) => (0, P.Z)({ props: e, name: 'MuiStack' })
        }),
        w = j;
    },
    97278: (e, o, t) => {
      t.d(o, { Z: () => x });
      var r = t(63366),
        n = t(87462),
        a = t(72791),
        s = t(59278),
        l = t(94419),
        c = t(14036),
        i = t(66934),
        d = t(98278),
        u = t(52930),
        m = t(95080),
        p = t(75878),
        h = t(21217);
      function b(e) {
        return (0, h.ZP)('PrivateSwitchBase', e);
      }
      (0, p.Z)('PrivateSwitchBase', [
        'root',
        'checked',
        'disabled',
        'input',
        'edgeStart',
        'edgeEnd'
      ]);
      var g = t(80184);
      const f = [
          'autoFocus',
          'checked',
          'checkedIcon',
          'className',
          'defaultChecked',
          'disabled',
          'disableFocusRipple',
          'edge',
          'icon',
          'id',
          'inputProps',
          'inputRef',
          'name',
          'onBlur',
          'onChange',
          'onFocus',
          'readOnly',
          'required',
          'tabIndex',
          'type',
          'value'
        ],
        Z = (0, i.ZP)(m.Z)((e) => {
          let { ownerState: o } = e;
          return (0, n.Z)(
            { padding: 9, borderRadius: '50%' },
            'start' === o.edge && { marginLeft: 'small' === o.size ? -3 : -12 },
            'end' === o.edge && { marginRight: 'small' === o.size ? -3 : -12 }
          );
        }),
        v = (0, i.ZP)('input', { shouldForwardProp: i.FO })({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1
        }),
        x = a.forwardRef(function (e, o) {
          const {
              autoFocus: t,
              checked: a,
              checkedIcon: i,
              className: m,
              defaultChecked: p,
              disabled: h,
              disableFocusRipple: x = !1,
              edge: k = !1,
              icon: y,
              id: S,
              inputProps: P,
              inputRef: j,
              name: w,
              onBlur: C,
              onChange: R,
              onFocus: F,
              readOnly: z,
              required: I = !1,
              tabIndex: N,
              type: M,
              value: q
            } = e,
            B = (0, r.Z)(e, f),
            [O, L] = (0, d.Z)({
              controlled: a,
              default: Boolean(p),
              name: 'SwitchBase',
              state: 'checked'
            }),
            T = (0, u.Z)();
          let E = h;
          T && 'undefined' === typeof E && (E = T.disabled);
          const U = 'checkbox' === M || 'radio' === M,
            W = (0, n.Z)({}, e, {
              checked: O,
              disabled: E,
              disableFocusRipple: x,
              edge: k
            }),
            A = ((e) => {
              const { classes: o, checked: t, disabled: r, edge: n } = e,
                a = {
                  root: [
                    'root',
                    t && 'checked',
                    r && 'disabled',
                    n && 'edge'.concat((0, c.Z)(n))
                  ],
                  input: ['input']
                };
              return (0, l.Z)(a, b, o);
            })(W);
          return (0, g.jsxs)(
            Z,
            (0, n.Z)(
              {
                component: 'span',
                className: (0, s.Z)(A.root, m),
                centerRipple: !0,
                focusRipple: !x,
                disabled: E,
                tabIndex: null,
                role: void 0,
                onFocus: (e) => {
                  F && F(e), T && T.onFocus && T.onFocus(e);
                },
                onBlur: (e) => {
                  C && C(e), T && T.onBlur && T.onBlur(e);
                },
                ownerState: W,
                ref: o
              },
              B,
              {
                children: [
                  (0, g.jsx)(
                    v,
                    (0, n.Z)(
                      {
                        autoFocus: t,
                        checked: a,
                        defaultChecked: p,
                        className: A.input,
                        disabled: E,
                        id: U ? S : void 0,
                        name: w,
                        onChange: (e) => {
                          if (e.nativeEvent.defaultPrevented) return;
                          const o = e.target.checked;
                          L(o), R && R(e, o);
                        },
                        readOnly: z,
                        ref: j,
                        required: I,
                        ownerState: W,
                        tabIndex: N,
                        type: M
                      },
                      'checkbox' === M && void 0 === q ? {} : { value: q },
                      P
                    )
                  ),
                  O ? i : y
                ]
              }
            )
          );
        });
    }
  }
]);
//# sourceMappingURL=579.9dcaf89d.chunk.js.map
