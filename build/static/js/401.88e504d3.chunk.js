'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [401],
  {
    8409: function (e, r, n) {
      n.d(r, {
        R: function () {
          return p;
        }
      });
      var t = n(7762),
        a = n(3433),
        i = n(1413),
        s = n(9439),
        l = n(5987),
        o = n(2791),
        u = n(7590),
        c = n(1827),
        d = n(4732),
        m = n(184),
        h = ['control', 'name', 'parent', 'label', 'errors'],
        f = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        p = function (e) {
          var r = e.control,
            n = e.name,
            p = e.parent,
            x = e.label,
            Z = void 0 === x ? 'Agents' : x,
            v = e.errors,
            g = (0, l.Z)(e, h),
            j = (0, o.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            b = (0, s.Z)(j, 2),
            P = b[0],
            w = b[1],
            S = (0, o.useState)(''),
            y = (0, s.Z)(S, 2),
            q = y[0],
            T = y[1],
            F = (0, d.Z)(q, 500),
            I = (0, o.useState)([]),
            A = (0, s.Z)(I, 2),
            R = A[0],
            k = A[1],
            C = (0, o.useState)({ id: '', name: '', value: '' }),
            z = (0, s.Z)(C, 2),
            W = z[0],
            E = z[1];
          (0, o.useEffect)(
            function () {
              T(F),
                w(function (e) {
                  return (0, i.Z)((0, i.Z)({}, e), {}, { search: F });
                });
            },
            [F]
          );
          var _ = (0, c.aN)(
              { size: P.size, page: P.page, search: P.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            U = _.data,
            B = _.isFetching;
          function D(e) {
            var r = e.target;
            if (
              r.scrollHeight === r.scrollTop + r.clientHeight &&
              (U.data.page + 1) * U.data.size < U.data.totalItems
            )
              return w(function (e) {
                return (0, i.Z)((0, i.Z)({}, e), {}, { page: P.page + 1 });
              });
          }
          (0, o.useEffect)(
            function () {
              w({ search: F || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                k([]);
            },
            [F, p]
          ),
            (0, o.useEffect)(
              function () {
                return k(
                  p
                    ? function (e) {
                        var r,
                          n = []
                            .concat(
                              (0, a.Z)(e),
                              (0, a.Z)(
                                f(
                                  null === U ||
                                    void 0 === U ||
                                    null === (r = U.data) ||
                                    void 0 === r
                                    ? void 0
                                    : r.data
                                )
                              )
                            )
                            .slice();
                        return (
                          n.unshift(
                            (function (e) {
                              return { id: e.id, name: e.name, value: e.value };
                            })(p)
                          ),
                          n
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, a.Z)(e),
                          (0, a.Z)(
                            f(null === U || void 0 === U ? void 0 : U.data.data)
                          )
                        );
                      }
                );
              },
              [U, p]
            ),
            (0, o.useEffect)(
              function () {
                null !== W &&
                  void 0 !== W &&
                  W.id &&
                  k(function (e) {
                    var r = e.slice();
                    return r.unshift(W), r;
                  });
              },
              [W, U]
            );
          var M = (0, o.useMemo)(
            function () {
              var e,
                r = [],
                n = new Set(),
                a = (0, t.Z)(R);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var i = e.value;
                  n.has(i.id) || (n.add(i.id), r.push(i));
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
              return r;
            },
            [R]
          );
          return (0, m.jsx)(
            u.P,
            (0, i.Z)(
              {
                onScroll: D,
                name: n,
                label: Z,
                options: M,
                control: r,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: D },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: B,
                onSearch: T,
                searchTerm: q,
                errors: v,
                setSelected: E
              },
              g
            )
          );
        };
    },
    7590: function (e, r, n) {
      n.d(r, {
        P: function () {
          return b;
        },
        n: function () {
          return w;
        }
      });
      var t = n(1413),
        a = n(5987),
        i = n(5403),
        s = n(8096),
        l = n(4925),
        o = n(9321),
        u = n(9834),
        c = n(8550),
        d = n(3466),
        m = n(3786),
        h = n(4554),
        f = n(3239),
        p = n(7071),
        x = n(2791),
        Z = n(1134),
        v = n(184),
        g = [
          'control',
          'name',
          'label',
          'options',
          'isFetching',
          'errors',
          'searchTerm',
          'onSearch',
          'setSelected'
        ],
        j = function (e) {
          var r,
            n = e.control,
            x = e.name,
            j = e.label,
            b = e.options,
            P = e.isFetching,
            w = e.errors,
            S = e.searchTerm,
            y = e.onSearch,
            q = e.setSelected,
            T = (0, a.Z)(e, g);
          return n
            ? (0, v.jsx)(Z.Qr, {
                control: n,
                name: x,
                render: function (e) {
                  var r,
                    n = e.field;
                  return (0, v.jsxs)(s.Z, {
                    fullWidth: !0,
                    children: [
                      (0, v.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== w && void 0 !== w && w[x] && !n.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, v.jsxs)(
                        o.Z,
                        (0, t.Z)(
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: j,
                                value:
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.value) || '',
                                error:
                                  !(null === w || void 0 === w || !w[x]) &&
                                  !n.value
                              },
                              n
                            ),
                            T
                          ),
                          {},
                          {
                            children: [
                              y &&
                                (0, v.jsx)(u.Z, {
                                  children: (0, v.jsx)(c.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, v.jsx)(d.Z, {
                                        position: 'start',
                                        children: (0, v.jsx)(i.Z, {})
                                      })
                                    },
                                    value: S,
                                    onChange: function (e) {
                                      return y(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
                                    return (0, v.jsx)(
                                      m.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (r = e),
                                            void (
                                              null === q ||
                                              void 0 === q ||
                                              q(r)
                                            )
                                          );
                                          var r;
                                        },
                                        children: e.name
                                      },
                                      e.id
                                    );
                                  }),
                              P &&
                                (0, v.jsx)(h.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, v.jsx)(f.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === w || void 0 === w ? void 0 : w[x]) &&
                        !n.value &&
                        (0, v.jsx)(p.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === w ||
                            void 0 === w ||
                            null === (r = w[x]) ||
                            void 0 === r
                              ? void 0
                              : r.message
                        })
                    ]
                  });
                }
              })
            : (0, v.jsxs)(s.Z, {
                fullWidth: !0,
                children: [
                  (0, v.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== w && void 0 !== w && w[x]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, v.jsx)(
                    o.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        T
                      ),
                      {},
                      {
                        error: !(null === w || void 0 === w || !w[x]),
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                v.jsx)(m.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === w || void 0 === w || !w[x]) &&
                    (0, v.jsx)(p.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === w ||
                        void 0 === w ||
                        null === (r = w[x]) ||
                        void 0 === r
                          ? void 0
                          : r.message
                    })
                ]
              });
        },
        b = (0, x.memo)(j),
        P = ['label', 'name', 'errors', 'register'],
        w = function (e) {
          var r = e.label,
            n = e.name,
            i = e.errors,
            s = e.register,
            l = (0, a.Z)(e, P);
          return (0, v.jsx)(
            c.Z,
            (0, t.Z)(
              (0, t.Z)(
                {
                  label: r,
                  error: !!i[n],
                  helperText: i[n] ? i[n].message : '',
                  fullWidth: !0
                },
                s(n)
              ),
              l
            )
          );
        };
    },
    5756: function (e, r, n) {
      var t = n(4554),
        a = n(9164),
        i = n(1889),
        s = n(4708),
        l = n(5527),
        o = n(6934),
        u = n(6907),
        c = n(6871),
        d = n(184),
        m = (0, o.ZP)(t.Z)(function () {
          return '\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n';
        });
      r.Z = function (e) {
        var r = e.children,
          n = (0, c.TH)();
        return (0, d.jsxs)(m, {
          children: [
            (0, d.jsx)(u.ql, {
              children: (0, d.jsx)('title', {
                children: '/register' === n.pathname ? 'Sign Up' : 'Sign In'
              })
            }),
            (0, d.jsx)(a.Z, {
              component: 'main',
              maxWidth: 'lg',
              children: (0, d.jsx)(t.Z, {
                children: (0, d.jsxs)(i.ZP, {
                  container: !0,
                  children: [
                    (0, d.jsx)(s.ZP, {}),
                    (0, d.jsx)(i.ZP, {
                      item: !0,
                      xs: !1,
                      sm: 4,
                      md: 7,
                      sx: {
                        backgroundImage:
                          'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: function (e) {
                          return 'light' === e.palette.mode
                            ? e.palette.grey[50]
                            : e.palette.grey[900];
                        },
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '80vh'
                      }
                    }),
                    (0, d.jsx)(i.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 8,
                      md: 5,
                      component: l.Z,
                      elevation: 6,
                      square: !0,
                      children: (0, d.jsx)(t.Z, {
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
    9419: function (e, r, n) {
      var t = n(1413),
        a = n(4165),
        i = n(5861),
        s = n(9439),
        l = n(4695),
        o = n(9709),
        u = n(4554),
        c = n(1889),
        d = n(8550),
        m = n(2791),
        h = n(1134),
        f = n(4349),
        p = n(6871),
        x = n(7590),
        Z = n(8409),
        v = n(1927),
        g = n(5674),
        j = n(7837),
        b = n(5243),
        P = n(184),
        w = b.Ry().shape({
          username: b
            .Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          name: b
            .Z_()
            .matches(/[a-zA-Z]/, 'Name can only contain letters.')
            .required('First name is required'),
          type: b.Z_().nullable(),
          rate: b.Rx().positive().moreThan(0, 'Rate is required').nullable(),
          roleId: b.Rx().positive().moreThan(0, 'Role is required').nullable(),
          parentAgentId: b.Z_().required('Parent Agent is required'),
          email: b
            .Z_()
            .email('Invalid email format')
            .required('First name is required'),
          password: b
            .Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required'),
          confirmPassword: b
            .Z_()
            .oneOf([b.iH('password'), null], 'Passwords must match')
            .required('Password is required')
        });
      r.Z = function (e) {
        var r = e.isUserRegister,
          n = void 0 !== r && r,
          b = e.isAgentRegister,
          S = void 0 !== b && b,
          y = e.isSubmit,
          q = void 0 !== y && y,
          T = e.setIsSubmit,
          F = e.refetch,
          I = e.onClose,
          A = (0, v.l4)(),
          R = (0, s.Z)(A, 2),
          k = R[0],
          C = R[1].isLoading,
          z = (0, j.p)(),
          W = z.notify,
          E = z.message,
          _ = (0, p.s0)(),
          U = (0, h.cI)({
            resolver: (0, l.X)(w),
            defaultValues: {
              name: '',
              rate: n ? null : 0,
              email: '',
              username: '',
              parentAgentId: n ? null : '',
              type: n ? 'player' : 'agent',
              roleId: n ? 2 : 0,
              password: '',
              confirmPassword: ''
            }
          }),
          B = U.register,
          D = U.handleSubmit,
          M = U.reset,
          O = U.control,
          H = U.setValue,
          N = U.formState.errors;
        (0, m.useEffect)(
          function () {
            q && (D(K)(), q && T());
          },
          [q]
        );
        var L = (0, g.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
          V = (0, m.useMemo)(
            function () {
              var e;
              return null === L ||
                void 0 === L ||
                null === (e = L.data) ||
                void 0 === e
                ? void 0
                : e.map(function (e) {
                    return { id: e.id, name: e.name, value: e.id };
                  });
            },
            [L]
          ),
          K = (function () {
            var e = (0, i.Z)(
              (0, a.Z)().mark(function e(r) {
                var t;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), k(r).unwrap();
                        case 3:
                          (t = e.sent) &&
                            'CREATED' === t.message &&
                            (M(),
                            W({ message: 'Registered Successfully' }),
                            n || S ? (F(), I()) : _('/login')),
                            (e.next = 12);
                          break;
                        case 7:
                          if (
                            ((e.prev = 7),
                            (e.t0 = e.catch(0)),
                            'DUPLICATE' !== e.t0.data.message)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            W({
                              message: 'Duplicated username or email',
                              type: 'error'
                            })
                          );
                        case 11:
                          return e.abrupt(
                            'return',
                            W({ message: E.ERROR, type: 'error' })
                          );
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })();
        return (0, P.jsxs)(u.Z, {
          component: 'form',
          noValidate: !0,
          onSubmit: D(K),
          sx: { mt: 1 },
          children: [
            (0, P.jsxs)(c.ZP, {
              container: !0,
              rowSpacing: 1,
              columnSpacing: { xs: 1, sm: 2, md: 3 },
              children: [
                (0, P.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, P.jsx)(
                    d.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: 'Name',
                          autoFocus: !0,
                          error: !!N.name,
                          helperText: N.name ? N.name.message : ''
                        },
                        B('name')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return H('name', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, P.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  marginY: 1,
                  children: (0, P.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, P.jsx)(c.ZP, {
                        item: !0,
                        xs: n ? 12 : 8,
                        children: (0, P.jsx)(Z.R, {
                          control: O,
                          name: 'parentAgentId',
                          errors: N
                        })
                      }),
                      !n &&
                        (0, P.jsx)(c.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, P.jsx)(
                            d.Z,
                            (0, t.Z)(
                              (0, t.Z)(
                                {
                                  required: !0,
                                  fullWidth: !0,
                                  label: 'Rate',
                                  autoFocus: !0,
                                  error: !!N.rate,
                                  helperText: N.rate ? N.rate.message : ''
                                },
                                B('rate')
                              ),
                              {},
                              {
                                onBlur: function (e) {
                                  return H(
                                    'rate',
                                    parseFloat(e.target.value.trim())
                                  );
                                }
                              }
                            )
                          )
                        })
                    ]
                  })
                }),
                (0, P.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, P.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, P.jsx)(c.ZP, {
                        item: !0,
                        xs: n ? 12 : 8,
                        children: (0, P.jsx)(
                          d.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Email',
                                type: 'email',
                                error: !!N.email,
                                helperText: N.email ? N.email.message : ''
                              },
                              B('email')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return H('email', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      !n &&
                        (0, P.jsx)(c.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, P.jsx)(x.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: V,
                            errors: N,
                            control: O
                          })
                        })
                    ]
                  })
                }),
                (0, P.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, P.jsx)(
                    d.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: (0, P.jsx)(f.Z, { id: 'label.username' }),
                          sx: { my: 1 },
                          error: !!N.username,
                          helperText: N.username ? N.username.message : ''
                        },
                        B('username')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return H('username', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, P.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, P.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    children: [
                      (0, P.jsx)(c.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, P.jsx)(
                          d.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Password',
                                type: 'password',
                                error: !!N.password,
                                helperText: N.password ? N.password.message : ''
                              },
                              B('password')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return H('password', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      (0, P.jsx)(c.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, P.jsx)(
                          d.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Confirm Password',
                                type: 'password',
                                error: !!N.confirmPassword,
                                helperText: N.confirmPassword
                                  ? N.confirmPassword.message
                                  : ''
                              },
                              B('confirmPassword')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return H(
                                  'confirmPassword',
                                  e.target.value.trim()
                                );
                              }
                            }
                          )
                        )
                      })
                    ]
                  })
                })
              ]
            }),
            !n &&
              !S &&
              (0, P.jsx)(o.Z, {
                type: 'submit',
                fullWidth: !0,
                variant: 'contained',
                sx: { mt: 3, mb: 2 },
                loading: C,
                children: 'Sign Up'
              })
          ]
        });
      };
    },
    1401: function (e, r, n) {
      n.r(r);
      var t = n(4554),
        a = n(890),
        i = n(5756),
        s = n(3504),
        l = n(9419),
        o = n(184);
      r.default = function () {
        return (0, o.jsxs)(i.Z, {
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
                (0, o.jsx)(l.Z, {})
              ]
            }),
            (0, o.jsx)(t.Z, {
              width: '100%',
              textAlign: 'right',
              children: (0, o.jsx)(s.rU, {
                to: '/login',
                children: 'Already have account? Sign in'
              })
            })
          ]
        });
      };
    },
    4732: function (e, r, n) {
      var t = n(9439),
        a = n(2791);
      r.Z = function (e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          n = (0, a.useState)(e),
          i = (0, t.Z)(n, 2),
          s = i[0],
          l = i[1];
        return (
          (0, a.useEffect)(
            function () {
              var n = setTimeout(function () {
                l(e);
              }, r);
              return function () {
                clearTimeout(n);
              };
            },
            [e, r]
          ),
          s
        );
      };
    },
    5403: function (e, r, n) {
      var t = n(4836);
      r.Z = void 0;
      var a = t(n(5649)),
        i = n(184),
        s = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      r.Z = s;
    }
  }
]);
//# sourceMappingURL=401.88e504d3.chunk.js.map
