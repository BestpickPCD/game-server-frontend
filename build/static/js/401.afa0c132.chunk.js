'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [401],
  {
    58409: (e, r, s) => {
      s.d(r, { R: () => d });
      var t = s(72791),
        a = s(67590),
        n = s(11827),
        l = s(64732),
        i = s(80184);
      const o = (e) =>
          (e || []).map((e) => ({ id: e.id, name: e.name, value: e.id })),
        d = (e) => {
          let {
            control: r,
            name: s,
            parent: d,
            label: c = 'Agents',
            errors: m,
            ...u
          } = e;
          const [h, p] = (0, t.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            [x, g] = (0, t.useState)(''),
            v = (0, l.Z)(x, 500),
            [Z, f] = (0, t.useState)([]),
            [j, b] = (0, t.useState)({ id: '', name: '', value: '' });
          (0, t.useEffect)(() => {
            g(v), p((e) => ({ ...e, search: v }));
          }, [v]);
          const { data: S, isFetching: P } = (0, n.aN)(
            { size: h.size, page: h.page, search: h.search, id: 1 },
            { refetchOnMountOrArgChange: !0 }
          );
          function y(e) {
            const r = e.target;
            if (
              r.scrollHeight === r.scrollTop + r.clientHeight &&
              (S.data.page + 1) * S.data.size < S.data.totalItems
            )
              return p((e) => ({ ...e, page: h.page + 1 }));
          }
          (0, t.useEffect)(() => {
            p({ search: v || '', id: 1, totalItems: 0, page: 0, size: 20 }),
              f([]);
          }, [v, d]),
            (0, t.useEffect)(
              () =>
                f(
                  d
                    ? (e) => {
                        var r;
                        const s = [
                          ...e,
                          ...o(
                            null === S ||
                              void 0 === S ||
                              null === (r = S.data) ||
                              void 0 === r
                              ? void 0
                              : r.data
                          )
                        ].slice();
                        return (
                          s.unshift(
                            ((e) => ({
                              id: e.id,
                              name: e.name,
                              value: e.value
                            }))(d)
                          ),
                          s
                        );
                      }
                    : (e) => [
                        ...e,
                        ...o(null === S || void 0 === S ? void 0 : S.data.data)
                      ]
                ),
              [S, d]
            ),
            (0, t.useEffect)(() => {
              null !== j &&
                void 0 !== j &&
                j.id &&
                f((e) => {
                  const r = e.slice();
                  return r.unshift(j), r;
                });
            }, [j, S]);
          const w = (0, t.useMemo)(() => {
            const e = [],
              r = new Set();
            for (const s of Z) r.has(s.id) || (r.add(s.id), e.push(s));
            return e;
          }, [Z]);
          return (0, i.jsx)(a.P, {
            onScroll: y,
            name: s,
            label: c,
            options: w,
            control: r,
            MenuProps: {
              className: 'infinity-select',
              autoFocus: !1,
              PaperProps: { onScroll: y },
              style: { maxHeight: 500, padding: 0 }
            },
            isFetching: P,
            onSearch: g,
            searchTerm: x,
            errors: m,
            setSelected: b,
            ...u
          });
        };
    },
    67590: (e, r, s) => {
      s.d(r, { P: () => Z, n: () => f });
      var t = s(5403),
        a = s(68096),
        n = s(94925),
        l = s(99321),
        i = s(79834),
        o = s(48550),
        d = s(63466),
        c = s(23786),
        m = s(697),
        u = s(13239),
        h = s(47071),
        p = s(72791),
        x = s(61134),
        g = s(80184);
      const v = (e) => {
          var r;
          let {
            control: s,
            name: p,
            label: v,
            options: Z,
            isFetching: f,
            errors: j,
            searchTerm: b,
            onSearch: S,
            setSelected: P,
            ...y
          } = e;
          return s
            ? (0, g.jsx)(x.Qr, {
                control: s,
                name: p,
                render: (e) => {
                  var r;
                  let { field: s } = e;
                  return (0, g.jsxs)(a.Z, {
                    fullWidth: !0,
                    children: [
                      (0, g.jsx)(n.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== j && void 0 !== j && j[p] && !s.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: v
                      }),
                      (0, g.jsxs)(l.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: v,
                        value:
                          (null === s || void 0 === s ? void 0 : s.value) || '',
                        error:
                          !(null === j || void 0 === j || !j[p]) && !s.value,
                        ...s,
                        ...y,
                        children: [
                          S &&
                            (0, g.jsx)(i.Z, {
                              children: (0, g.jsx)(o.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, g.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, g.jsx)(t.Z, {})
                                  })
                                },
                                value: b,
                                onChange: (e) => S(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === Z || void 0 === Z
                            ? void 0
                            : Z.map((e) =>
                                (0, g.jsx)(
                                  c.Z,
                                  {
                                    value: e.value,
                                    onKeyDown: (e) => e.stopPropagation(),
                                    onClick: () => {
                                      return (
                                        (r = e),
                                        void (
                                          null === P ||
                                          void 0 === P ||
                                          P(r)
                                        )
                                      );
                                      var r;
                                    },
                                    children: e.name
                                  },
                                  e.id
                                )
                              ),
                          f &&
                            (0, g.jsx)(m.Z, {
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '12px',
                              marginBottom: '12px',
                              children: (0, g.jsx)(u.Z, {
                                size: 32,
                                disableShrink: !0,
                                thickness: 3
                              })
                            })
                        ]
                      }),
                      (null === j || void 0 === j ? void 0 : j[p]) &&
                        !s.value &&
                        (0, g.jsx)(h.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === j ||
                            void 0 === j ||
                            null === (r = j[p]) ||
                            void 0 === r
                              ? void 0
                              : r.message
                        })
                    ]
                  });
                }
              })
            : (0, g.jsxs)(a.Z, {
                fullWidth: !0,
                children: [
                  (0, g.jsx)(n.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== j && void 0 !== j && j[p]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: v
                  }),
                  (0, g.jsx)(l.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: v,
                    ...y,
                    error: !(null === j || void 0 === j || !j[p]),
                    children:
                      null === Z || void 0 === Z
                        ? void 0
                        : Z.map((e) =>
                            (0, g.jsx)(
                              c.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === j || void 0 === j || !j[p]) &&
                    (0, g.jsx)(h.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === j ||
                        void 0 === j ||
                        null === (r = j[p]) ||
                        void 0 === r
                          ? void 0
                          : r.message
                    })
                ]
              });
        },
        Z = (0, p.memo)(v),
        f = (e) => {
          let { label: r, name: s, errors: t, register: a, ...n } = e;
          return (0, g.jsx)(o.Z, {
            label: r,
            error: !!t[s],
            helperText: t[s] ? t[s].message : '',
            fullWidth: !0,
            ...a(s),
            ...n
          });
        };
    },
    58645: (e, r, s) => {
      s.d(r, { Z: () => f });
      var t = s(697),
        a = s(89164),
        n = s(61889),
        l = s(87462),
        i = s(72791),
        o = s(31402),
        d = s(6199),
        c = s(80184);
      const m = (e, r) =>
          (0, l.Z)(
            {
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              boxSizing: 'border-box',
              WebkitTextSizeAdjust: '100%'
            },
            r && !e.vars && { colorScheme: e.palette.mode }
          ),
        u = (e) =>
          (0, l.Z)(
            { color: (e.vars || e).palette.text.primary },
            e.typography.body1,
            {
              backgroundColor: (e.vars || e).palette.background.default,
              '@media print': {
                backgroundColor: (e.vars || e).palette.common.white
              }
            }
          );
      const h = function (e) {
        const r = (0, o.Z)({ props: e, name: 'MuiCssBaseline' }),
          { children: s, enableColorScheme: t = !1 } = r;
        return (0, c.jsxs)(i.Fragment, {
          children: [
            (0, c.jsx)(d.Z, {
              styles: (e) =>
                (function (e) {
                  let r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  var s;
                  const t = {};
                  r &&
                    e.colorSchemes &&
                    Object.entries(e.colorSchemes).forEach((r) => {
                      let [s, a] = r;
                      var n;
                      t[e.getColorSchemeSelector(s).replace(/\s*&/, '')] = {
                        colorScheme: null == (n = a.palette) ? void 0 : n.mode
                      };
                    });
                  let a = (0, l.Z)(
                    {
                      html: m(e, r),
                      '*, *::before, *::after': { boxSizing: 'inherit' },
                      'strong, b': { fontWeight: e.typography.fontWeightBold },
                      body: (0, l.Z)({ margin: 0 }, u(e), {
                        '&::backdrop': {
                          backgroundColor: (e.vars || e).palette.background
                            .default
                        }
                      })
                    },
                    t
                  );
                  const n =
                    null == (s = e.components) || null == (s = s.MuiCssBaseline)
                      ? void 0
                      : s.styleOverrides;
                  return n && (a = [a, n]), a;
                })(e, t)
            }),
            s
          ]
        });
      };
      var p = s(35527),
        x = s(66934),
        g = s(6907),
        v = s(16871);
      const Z = (0, x.ZP)(t.Z)(
          () =>
            '\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n'
        ),
        f = (e) => {
          let { children: r } = e;
          const s = (0, v.TH)();
          return (0, c.jsxs)(Z, {
            children: [
              (0, c.jsx)(g.ql, {
                children: (0, c.jsx)('title', {
                  children: '/register' === s.pathname ? 'Sign Up' : 'Sign In'
                })
              }),
              (0, c.jsx)(a.Z, {
                component: 'main',
                maxWidth: 'lg',
                children: (0, c.jsx)(t.Z, {
                  children: (0, c.jsxs)(n.ZP, {
                    container: !0,
                    children: [
                      (0, c.jsx)(h, {}),
                      (0, c.jsx)(n.ZP, {
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
                      (0, c.jsx)(n.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        md: 5,
                        component: p.Z,
                        elevation: 6,
                        square: !0,
                        children: (0, c.jsx)(t.Z, {
                          sx: {
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center'
                          },
                          children: r
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
    99419: (e, r, s) => {
      s.d(r, { Z: () => j });
      var t = s(44695),
        a = s(39709),
        n = s(697),
        l = s(61889),
        i = s(48550),
        o = s(72791),
        d = s(61134),
        c = s(4349),
        m = s(16871),
        u = s(67590),
        h = s(58409),
        p = s(61927),
        x = s(25674),
        g = s(87837),
        v = s(8007),
        Z = s(80184);
      const f = v.Ry().shape({
          username: v
            .Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          name: v
            .Z_()
            .matches(/[a-zA-Z]/, 'Name can only contain letters.')
            .required('First name is required'),
          type: v.Z_().nullable(),
          rate: v.Rx().positive().moreThan(0, 'Rate is required').nullable(),
          roleId: v.Rx().positive().moreThan(0, 'Role is required').nullable(),
          parentAgentId: v.Z_().required('Parent Agent is required'),
          email: v
            .Z_()
            .email('Invalid email format')
            .required('First name is required'),
          password: v
            .Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required'),
          confirmPassword: v
            .Z_()
            .oneOf([v.iH('password'), null], 'Passwords must match')
            .required('Password is required')
        }),
        j = (e) => {
          let {
            isUserRegister: r = !1,
            isAgentRegister: s = !1,
            isSubmit: v = !1,
            setIsSubmit: j,
            refetch: b,
            onClose: S
          } = e;
          const [P, { isLoading: y }] = (0, p.l4)(),
            { notify: w, message: q } = (0, g.p)(),
            C = (0, m.s0)(),
            {
              register: k,
              handleSubmit: F,
              reset: T,
              control: I,
              setValue: A,
              formState: { errors: z }
            } = (0, d.cI)({
              resolver: (0, t.X)(f),
              defaultValues: {
                name: '',
                rate: r ? null : 0,
                email: '',
                username: '',
                parentAgentId: r ? null : '',
                type: r ? 'player' : 'agent',
                roleId: r ? 2 : 0,
                password: '',
                confirmPassword: ''
              }
            });
          (0, o.useEffect)(() => {
            v && (F(E)(), v && j());
          }, [v]);
          const { data: R } = (0, x.ev)({}, { refetchOnMountOrArgChange: !0 }),
            W = (0, o.useMemo)(() => {
              var e;
              return null === R ||
                void 0 === R ||
                null === (e = R.data) ||
                void 0 === e
                ? void 0
                : e.map((e) => ({ id: e.id, name: e.name, value: e.id }));
            }, [R]),
            E = async (e) => {
              try {
                const t = await P(e).unwrap();
                t &&
                  'CREATED' === t.message &&
                  (T(),
                  w({ message: 'Registered Successfully' }),
                  r || s ? (b(), S()) : C('/login'));
              } catch (t) {
                return 'DUPLICATE' === t.data.message
                  ? w({
                      message: 'Duplicated username or email',
                      type: 'error'
                    })
                  : w({ message: q.ERROR, type: 'error' });
              }
            };
          return (0, Z.jsxs)(n.Z, {
            component: 'form',
            noValidate: !0,
            onSubmit: F(E),
            sx: { mt: 1 },
            children: [
              (0, Z.jsxs)(l.ZP, {
                container: !0,
                rowSpacing: 1,
                columnSpacing: { xs: 1, sm: 2, md: 3 },
                children: [
                  (0, Z.jsx)(l.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, Z.jsx)(i.Z, {
                      required: !0,
                      fullWidth: !0,
                      label: 'Name',
                      autoFocus: !0,
                      error: !!z.name,
                      helperText: z.name ? z.name.message : '',
                      ...k('name'),
                      onBlur: (e) => A('name', e.target.value.trim())
                    })
                  }),
                  (0, Z.jsx)(l.ZP, {
                    item: !0,
                    xs: 12,
                    marginY: 1,
                    children: (0, Z.jsxs)(l.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      rowSpacing: 2,
                      children: [
                        (0, Z.jsx)(l.ZP, {
                          item: !0,
                          xs: r ? 12 : 8,
                          children: (0, Z.jsx)(h.R, {
                            control: I,
                            name: 'parentAgentId',
                            errors: z
                          })
                        }),
                        !r &&
                          (0, Z.jsx)(l.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, Z.jsx)(i.Z, {
                              required: !0,
                              fullWidth: !0,
                              label: 'Rate',
                              autoFocus: !0,
                              error: !!z.rate,
                              helperText: z.rate ? z.rate.message : '',
                              ...k('rate'),
                              onBlur: (e) =>
                                A('rate', parseFloat(e.target.value.trim()))
                            })
                          })
                      ]
                    })
                  }),
                  (0, Z.jsx)(l.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, Z.jsxs)(l.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      rowSpacing: 2,
                      children: [
                        (0, Z.jsx)(l.ZP, {
                          item: !0,
                          xs: r ? 12 : 8,
                          children: (0, Z.jsx)(i.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Email',
                            type: 'email',
                            error: !!z.email,
                            helperText: z.email ? z.email.message : '',
                            ...k('email'),
                            onBlur: (e) => A('email', e.target.value.trim())
                          })
                        }),
                        !r &&
                          (0, Z.jsx)(l.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, Z.jsx)(u.P, {
                              label: 'Role',
                              name: 'roleId',
                              options: W,
                              errors: z,
                              control: I
                            })
                          })
                      ]
                    })
                  }),
                  (0, Z.jsx)(l.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, Z.jsx)(i.Z, {
                      required: !0,
                      fullWidth: !0,
                      label: (0, Z.jsx)(c.Z, { id: 'label.username' }),
                      sx: { my: 1 },
                      error: !!z.username,
                      helperText: z.username ? z.username.message : '',
                      ...k('username'),
                      onBlur: (e) => A('username', e.target.value.trim())
                    })
                  }),
                  (0, Z.jsx)(l.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, Z.jsxs)(l.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      children: [
                        (0, Z.jsx)(l.ZP, {
                          item: !0,
                          xs: 6,
                          children: (0, Z.jsx)(i.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Password',
                            type: 'password',
                            error: !!z.password,
                            helperText: z.password ? z.password.message : '',
                            ...k('password'),
                            onBlur: (e) => A('password', e.target.value.trim())
                          })
                        }),
                        (0, Z.jsx)(l.ZP, {
                          item: !0,
                          xs: 6,
                          children: (0, Z.jsx)(i.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Confirm Password',
                            type: 'password',
                            error: !!z.confirmPassword,
                            helperText: z.confirmPassword
                              ? z.confirmPassword.message
                              : '',
                            ...k('confirmPassword'),
                            onBlur: (e) =>
                              A('confirmPassword', e.target.value.trim())
                          })
                        })
                      ]
                    })
                  })
                ]
              }),
              !r &&
                !s &&
                (0, Z.jsx)(a.Z, {
                  type: 'submit',
                  fullWidth: !0,
                  variant: 'contained',
                  sx: { mt: 3, mb: 2 },
                  loading: y,
                  children: 'Sign Up'
                })
            ]
          });
        };
    },
    1401: (e, r, s) => {
      s.r(r), s.d(r, { default: () => d });
      var t = s(697),
        a = s(20890),
        n = s(58645),
        l = s(43504),
        i = s(99419),
        o = s(80184);
      const d = () =>
        (0, o.jsxs)(n.Z, {
          children: [
            (0, o.jsxs)(t.Z, {
              children: [
                (0, o.jsx)(a.Z, {
                  component: 'h1',
                  variant: 'h5',
                  width: '100%',
                  textAlign: 'center',
                  children: 'Sign Up'
                }),
                (0, o.jsx)(i.Z, {})
              ]
            }),
            (0, o.jsx)(t.Z, {
              width: '100%',
              textAlign: 'right',
              children: (0, o.jsx)(l.rU, {
                to: '/login',
                children: 'Already have account? Sign in'
              })
            })
          ]
        });
    },
    64732: (e, r, s) => {
      s.d(r, { Z: () => a });
      var t = s(72791);
      const a = function (e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [s, a] = (0, t.useState)(e);
        return (
          (0, t.useEffect)(() => {
            const s = setTimeout(() => {
              a(e);
            }, r);
            return () => {
              clearTimeout(s);
            };
          }, [e, r]),
          s
        );
      };
    },
    5403: (e, r, s) => {
      var t = s(64836);
      r.Z = void 0;
      var a = t(s(45649)),
        n = s(80184),
        l = (0, a.default)(
          (0, n.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      r.Z = l;
    }
  }
]);
//# sourceMappingURL=401.afa0c132.chunk.js.map
