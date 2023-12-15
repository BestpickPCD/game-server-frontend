'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [856],
  {
    8409: function (e, n, r) {
      r.d(n, {
        R: function () {
          return h;
        }
      });
      var t = r(7762),
        a = r(3433),
        i = r(1413),
        s = r(9439),
        o = r(5987),
        l = r(2791),
        d = r(7590),
        u = r(1827),
        c = r(4732),
        m = r(184),
        p = ['control', 'name', 'parent', 'label', 'errors'],
        v = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        h = function (e) {
          var n = e.control,
            r = e.name,
            h = e.parent,
            f = e.label,
            x = void 0 === f ? 'Agents' : f,
            Z = e.errors,
            g = (0, o.Z)(e, p),
            b = (0, l.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            j = (0, s.Z)(b, 2),
            y = j[0],
            w = j[1],
            P = (0, l.useState)(''),
            I = (0, s.Z)(P, 2),
            S = I[0],
            k = I[1],
            R = (0, c.Z)(S, 500),
            F = (0, l.useState)([]),
            C = (0, s.Z)(F, 2),
            A = C[0],
            T = C[1],
            q = (0, l.useState)({ id: '', name: '', value: '' }),
            E = (0, s.Z)(q, 2),
            W = E[0],
            M = E[1];
          (0, l.useEffect)(
            function () {
              k(R),
                w(function (e) {
                  return (0, i.Z)((0, i.Z)({}, e), {}, { search: R });
                });
            },
            [R]
          );
          var O = (0, u.aN)(
              { size: y.size, page: y.page, search: y.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            z = O.data,
            N = O.isFetching;
          function B(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (z.data.page + 1) * z.data.size < z.data.totalItems
            )
              return w(function (e) {
                return (0, i.Z)((0, i.Z)({}, e), {}, { page: y.page + 1 });
              });
          }
          (0, l.useEffect)(
            function () {
              w({ search: R || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                T([]);
            },
            [R, h]
          ),
            (0, l.useEffect)(
              function () {
                return T(
                  h
                    ? function (e) {
                        var n,
                          r = []
                            .concat(
                              (0, a.Z)(e),
                              (0, a.Z)(
                                v(
                                  null === z ||
                                    void 0 === z ||
                                    null === (n = z.data) ||
                                    void 0 === n
                                    ? void 0
                                    : n.data
                                )
                              )
                            )
                            .slice();
                        return (
                          r.unshift(
                            (function (e) {
                              return { id: e.id, name: e.name, value: e.value };
                            })(h)
                          ),
                          r
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, a.Z)(e),
                          (0, a.Z)(
                            v(null === z || void 0 === z ? void 0 : z.data.data)
                          )
                        );
                      }
                );
              },
              [z, h]
            ),
            (0, l.useEffect)(
              function () {
                null !== W &&
                  void 0 !== W &&
                  W.id &&
                  T(function (e) {
                    var n = e.slice();
                    return n.unshift(W), n;
                  });
              },
              [W, z]
            );
          var D = (0, l.useMemo)(
            function () {
              var e,
                n = [],
                r = new Set(),
                a = (0, t.Z)(A);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var i = e.value;
                  r.has(i.id) || (r.add(i.id), n.push(i));
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
              return n;
            },
            [A]
          );
          return (0, m.jsx)(
            d.P,
            (0, i.Z)(
              {
                onScroll: B,
                name: r,
                label: x,
                options: D,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: B },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: N,
                onSearch: k,
                searchTerm: S,
                errors: Z,
                setSelected: M
              },
              g
            )
          );
        };
    },
    7590: function (e, n, r) {
      r.d(n, {
        P: function () {
          return j;
        },
        n: function () {
          return w;
        }
      });
      var t = r(1413),
        a = r(5987),
        i = r(5403),
        s = r(8096),
        o = r(4925),
        l = r(8406),
        d = r(9834),
        u = r(8550),
        c = r(3466),
        m = r(3786),
        p = r(4554),
        v = r(3239),
        h = r(7071),
        f = r(2791),
        x = r(1134),
        Z = r(184),
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
        b = function (e) {
          var n,
            r = e.control,
            f = e.name,
            b = e.label,
            j = e.options,
            y = e.isFetching,
            w = e.errors,
            P = e.searchTerm,
            I = e.onSearch,
            S = e.setSelected,
            k = (0, a.Z)(e, g);
          return r
            ? (0, Z.jsx)(x.Qr, {
                control: r,
                name: f,
                render: function (e) {
                  var n,
                    r = e.field;
                  return (0, Z.jsxs)(s.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(o.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== w && void 0 !== w && w[f] && !r.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: b
                      }),
                      (0, Z.jsxs)(
                        l.Z,
                        (0, t.Z)(
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: b,
                                value:
                                  (null === r || void 0 === r
                                    ? void 0
                                    : r.value) || '',
                                error:
                                  !(null === w || void 0 === w || !w[f]) &&
                                  !r.value
                              },
                              r
                            ),
                            k
                          ),
                          {},
                          {
                            children: [
                              I &&
                                (0, Z.jsx)(d.Z, {
                                  children: (0, Z.jsx)(u.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, Z.jsx)(c.Z, {
                                        position: 'start',
                                        children: (0, Z.jsx)(i.Z, {})
                                      })
                                    },
                                    value: P,
                                    onChange: function (e) {
                                      return I(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === j || void 0 === j
                                ? void 0
                                : j.map(function (e) {
                                    return (0, Z.jsx)(
                                      m.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (n = e),
                                            void (
                                              null === S ||
                                              void 0 === S ||
                                              S(n)
                                            )
                                          );
                                          var n;
                                        },
                                        children: e.name
                                      },
                                      e.id
                                    );
                                  }),
                              y &&
                                (0, Z.jsx)(p.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, Z.jsx)(v.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === w || void 0 === w ? void 0 : w[f]) &&
                        !r.value &&
                        (0, Z.jsx)(h.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === w ||
                            void 0 === w ||
                            null === (n = w[f]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, Z.jsxs)(s.Z, {
                fullWidth: !0,
                children: [
                  (0, Z.jsx)(o.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== w && void 0 !== w && w[f]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: b
                  }),
                  (0, Z.jsx)(
                    l.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: b
                        },
                        k
                      ),
                      {},
                      {
                        error: !(null === w || void 0 === w || !w[f]),
                        children:
                          null === j || void 0 === j
                            ? void 0
                            : j.map(function (e) {
                                return (0,
                                Z.jsx)(m.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === w || void 0 === w || !w[f]) &&
                    (0, Z.jsx)(h.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === w ||
                        void 0 === w ||
                        null === (n = w[f]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        j = (0, f.memo)(b),
        y = ['label', 'name', 'errors', 'register'],
        w = function (e) {
          var n = e.label,
            r = e.name,
            i = e.errors,
            s = e.register,
            o = (0, a.Z)(e, y);
          return (0, Z.jsx)(
            u.Z,
            (0, t.Z)(
              (0, t.Z)(
                {
                  label: n,
                  error: !!i[r],
                  helperText: i[r] ? i[r].message : '',
                  fullWidth: !0
                },
                s(r)
              ),
              o
            )
          );
        };
    },
    9419: function (e, n, r) {
      var t = r(1413),
        a = r(4165),
        i = r(5861),
        s = r(9439),
        o = r(4695),
        l = r(9709),
        d = r(4554),
        u = r(1889),
        c = r(8550),
        m = r(2791),
        p = r(1134),
        v = r(4349),
        h = r(6871),
        f = r(7590),
        x = r(8409),
        Z = r(1927),
        g = r(5674),
        b = r(7837),
        j = r(6727),
        y = r(184),
        w = j.Ry().shape({
          username: j
            .Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          name: j
            .Z_()
            .matches(/[a-zA-Z]/, 'Name can only contain letters.')
            .required('First name is required'),
          type: j.Z_().nullable(),
          rate: j.Rx().positive().moreThan(0, 'Rate is required').nullable(),
          roleId: j.Rx().positive().moreThan(0, 'Role is required').nullable(),
          parentAgentId: j.Z_().required('Parent Agent is required'),
          email: j
            .Z_()
            .email('Invalid email format')
            .required('First name is required'),
          password: j
            .Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required'),
          confirmPassword: j
            .Z_()
            .oneOf([j.iH('password'), null], 'Passwords must match')
            .required('Password is required')
        });
      n.Z = function (e) {
        var n = e.isUserRegister,
          r = void 0 !== n && n,
          j = e.isAgentRegister,
          P = void 0 !== j && j,
          I = e.isSubmit,
          S = void 0 !== I && I,
          k = e.setIsSubmit,
          R = e.refetch,
          F = e.onClose,
          C = (0, Z.l4)(),
          A = (0, s.Z)(C, 2),
          T = A[0],
          q = A[1].isLoading,
          E = (0, b.p)(),
          W = E.notify,
          M = E.message,
          O = (0, h.s0)(),
          z = (0, p.cI)({
            resolver: (0, o.X)(w),
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
          }),
          N = z.register,
          B = z.handleSubmit,
          D = z.reset,
          _ = z.control,
          U = z.setValue,
          V = z.formState.errors;
        (0, m.useEffect)(
          function () {
            S && (B(G)(), S && k());
          },
          [S]
        );
        var L = (0, g.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
          H = (0, m.useMemo)(
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
          G = (function () {
            var e = (0, i.Z)(
              (0, a.Z)().mark(function e(n) {
                var t;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), T(n).unwrap();
                        case 3:
                          (t = e.sent) &&
                            'CREATED' === t.message &&
                            (D(),
                            W({ message: 'Registered Successfully' }),
                            r || P ? (R(), F()) : O('/login')),
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
                            W({ message: M.ERROR, type: 'error' })
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
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
        return (0, y.jsxs)(d.Z, {
          component: 'form',
          noValidate: !0,
          onSubmit: B(G),
          sx: { mt: 1 },
          children: [
            (0, y.jsxs)(u.ZP, {
              container: !0,
              rowSpacing: 1,
              columnSpacing: { xs: 1, sm: 2, md: 3 },
              children: [
                (0, y.jsx)(u.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsx)(
                    c.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: 'Name',
                          autoFocus: !0,
                          error: !!V.name,
                          helperText: V.name ? V.name.message : ''
                        },
                        N('name')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return U('name', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, y.jsx)(u.ZP, {
                  item: !0,
                  xs: 12,
                  marginY: 1,
                  children: (0, y.jsxs)(u.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, y.jsx)(u.ZP, {
                        item: !0,
                        xs: r ? 12 : 8,
                        children: (0, y.jsx)(x.R, {
                          control: _,
                          name: 'parentAgentId',
                          errors: V
                        })
                      }),
                      !r &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(
                            c.Z,
                            (0, t.Z)(
                              (0, t.Z)(
                                {
                                  required: !0,
                                  fullWidth: !0,
                                  label: 'Rate',
                                  autoFocus: !0,
                                  error: !!V.rate,
                                  helperText: V.rate ? V.rate.message : ''
                                },
                                N('rate')
                              ),
                              {},
                              {
                                onBlur: function (e) {
                                  return U(
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
                (0, y.jsx)(u.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsxs)(u.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, y.jsx)(u.ZP, {
                        item: !0,
                        xs: r ? 12 : 8,
                        children: (0, y.jsx)(
                          c.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Email',
                                type: 'email',
                                error: !!V.email,
                                helperText: V.email ? V.email.message : ''
                              },
                              N('email')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U('email', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      !r &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(f.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: H,
                            errors: V,
                            control: _
                          })
                        })
                    ]
                  })
                }),
                (0, y.jsx)(u.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsx)(
                    c.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: (0, y.jsx)(v.Z, { id: 'label.username' }),
                          sx: { my: 1 },
                          error: !!V.username,
                          helperText: V.username ? V.username.message : ''
                        },
                        N('username')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return U('username', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, y.jsx)(u.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsxs)(u.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    children: [
                      (0, y.jsx)(u.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, y.jsx)(
                          c.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Password',
                                type: 'password',
                                error: !!V.password,
                                helperText: V.password ? V.password.message : ''
                              },
                              N('password')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U('password', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      (0, y.jsx)(u.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, y.jsx)(
                          c.Z,
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Confirm Password',
                                type: 'password',
                                error: !!V.confirmPassword,
                                helperText: V.confirmPassword
                                  ? V.confirmPassword.message
                                  : ''
                              },
                              N('confirmPassword')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U(
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
            !r &&
              !P &&
              (0, y.jsx)(l.Z, {
                type: 'submit',
                fullWidth: !0,
                variant: 'contained',
                sx: { mt: 3, mb: 2 },
                loading: q,
                children: 'Sign Up'
              })
          ]
        });
      };
    },
    6856: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return ee;
          }
        });
      var t = r(1413),
        a = r(4165),
        i = r(5861),
        s = r(9439),
        o = r(5574),
        l = r(4554),
        d = r(2791),
        u = r(5048),
        c = r(1134),
        m = r(6790),
        p = r(1827),
        v = r(5850),
        h = r(7837),
        f = r(4695),
        x = r(7590),
        Z = r(8409),
        g = r(7891),
        b = r(9419),
        j = r(4167),
        y = r(5674),
        w = r(6727),
        P = r(4349),
        I = r(184),
        S = w.Ry().shape({
          name: w.Z_().required('Name is required!'),
          roleId: w.Rx().required('Role is required!'),
          rate: w.Rx().required('Rate is required!'),
          currencyId: w.Rx().required('Currency is required!'),
          username: w.Z_().required('Username is required!'),
          parentAgentId: w.Z_().nullable()
        }),
        k = function (e) {
          var n,
            r,
            t,
            o = e.open,
            u = e.detail,
            m = e.onClose,
            v = e.refetch,
            w = e.hide,
            k = (0, h.p)(),
            R = k.notify,
            F = k.message,
            C = (0, d.useState)(!1),
            A = (0, s.Z)(C, 2),
            T = A[0],
            q = A[1],
            E = (0, p.h6)(),
            W = (0, s.Z)(E, 2),
            M = W[0],
            O = W[1].isLoading,
            z = (0, y.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== u && void 0 !== u && u.id)
              }
            ).data,
            N = (0, j.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== u && void 0 !== u && u.id)
              }
            ).data,
            B = (0, c.cI)({
              resolver: (0, f.X)(S),
              defaultValues: {
                name: '',
                roleId: 0,
                username: '',
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            D = B.register,
            _ = B.setValue,
            U = B.reset,
            V = B.handleSubmit,
            L = B.control,
            H = B.formState.errors;
          (0, d.useEffect)(
            function () {
              null !== u && void 0 !== u && u.id
                ? (_('name', u.name),
                  _('username', u.username),
                  _(
                    'rate',
                    Number(null === u || void 0 === u ? void 0 : u.rate)
                  ),
                  _('roleId', u.roleId),
                  _('currencyId', u.currencyId),
                  _(
                    'parentAgentId',
                    null === u || void 0 === u ? void 0 : u.parentAgentId
                  ))
                : U();
            },
            [u]
          );
          var G = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  var r;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === u || void 0 === u || !u.id)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 4),
                              M({
                                id: u.id,
                                body: {
                                  name: n.name,
                                  roleId: n.roleId,
                                  rate: Number(n.rate),
                                  currencyId: n.currencyId,
                                  parentAgentId: n.parentAgentId
                                }
                              }).unwrap()
                            );
                          case 4:
                            R({ message: F.UPDATED });
                          case 5:
                            v(), w(), U(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              R({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (r = e.t0.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.message) || F.ERROR,
                                type: 'error'
                              });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            $ = (0, d.useMemo)(
              function () {
                var e;
                return null === z ||
                  void 0 === z ||
                  null === (e = z.data) ||
                  void 0 === e
                  ? void 0
                  : e.map(function (e) {
                      return { id: e.id, name: e.name, value: e.id };
                    });
              },
              [z]
            ),
            K = (0, d.useMemo)(
              function () {
                return null === N || void 0 === N
                  ? void 0
                  : N.map(function (e) {
                      return { id: e.id, name: e.name, value: e.id };
                    });
              },
              [N]
            );
          return (0, I.jsx)(g.Z, {
            title:
              null !== u && void 0 !== u && u.id
                ? 'Edit '.concat(u.name)
                : 'Add Agent',
            onClose: m,
            open: o,
            isLoading: O,
            onOk:
              null !== u && void 0 !== u && u.id
                ? V(G)
                : function () {
                    return q(!0);
                  },
            children:
              null !== u && void 0 !== u && u.id
                ? (0, I.jsx)(l.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, I.jsxs)('div', {
                      className: 'block',
                      children: [
                        (0, I.jsx)(x.n, {
                          label: (0, I.jsx)(P.Z, { id: 'label.username' }),
                          name: 'username',
                          sx: { my: 2 },
                          errors: H,
                          register: D,
                          disabled: !(null === u || void 0 === u || !u.id)
                        }),
                        (0, I.jsx)(x.n, {
                          label: (0, I.jsx)(P.Z, { id: 'label.name' }),
                          name: 'name',
                          errors: H,
                          register: D
                        }),
                        (0, I.jsx)(l.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: (0, I.jsx)(x.n, {
                            label: (0, I.jsx)(P.Z, { id: 'label.rate' }),
                            name: 'rate',
                            errors: H,
                            register: D
                          })
                        }),
                        (0, I.jsxs)(l.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: [
                            (0, I.jsx)(x.P, {
                              label: 'Role',
                              name: 'roleId',
                              control: L,
                              options: $
                            }),
                            (0, I.jsx)(x.P, {
                              label: 'Currency',
                              name: 'currencyId',
                              control: L,
                              options: K
                            })
                          ]
                        }),
                        (0, I.jsx)(Z.R, {
                          control: L,
                          name: 'parentAgentId',
                          parent: {
                            id:
                              null === u ||
                              void 0 === u ||
                              null === (n = u.parent) ||
                              void 0 === n
                                ? void 0
                                : n.id,
                            name:
                              null === u ||
                              void 0 === u ||
                              null === (r = u.parent) ||
                              void 0 === r
                                ? void 0
                                : r.name,
                            value:
                              null === u ||
                              void 0 === u ||
                              null === (t = u.parent) ||
                              void 0 === t
                                ? void 0
                                : t.id
                          }
                        })
                      ]
                    })
                  })
                : (0, I.jsx)(b.Z, {
                    isSubmit: T,
                    setIsSubmit: function () {
                      return q(!1);
                    },
                    refetch: v,
                    onClose: m,
                    isAgentRegister: !0
                  })
          });
        },
        R = (0, d.memo)(k),
        F = r(5119),
        C = r(890),
        A = r(6151),
        T = r(6314),
        q = r(8096),
        E = r(4925),
        W = r(8406),
        M = r(3786),
        O = r(946),
        z = r(8673),
        N = r(8901),
        B = function () {
          var e = (0, h.d)(),
            n = e.visible,
            r = e.toggle,
            t = (0, d.useState)(),
            a = (0, s.Z)(t, 2),
            i = a[0],
            o = a[1],
            l = (0, d.useState)(),
            u = (0, s.Z)(l, 2),
            c = u[0],
            m = u[1],
            p = (0, d.useState)(''),
            v = (0, s.Z)(p, 2),
            f = v[0],
            x = v[1];
          (0, d.useEffect)(function () {
            var e = localStorage.getItem('user');
            e && m(JSON.parse(e));
          }, []);
          var Z = function (e, n) {
            x(n), o(e), r();
          };
          return {
            tableBody: function (e) {
              var n, r;
              return [
                {
                  align: 'inherit',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(C.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.name
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(C.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        null !==
                          (n =
                            null === e ||
                            void 0 === e ||
                            null === (r = e.parent) ||
                            void 0 === r
                              ? void 0
                              : r.name) && void 0 !== n
                          ? n
                          : '-'
                    })
                  })
                },
                {
                  align: 'left',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsxs)(C.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: [parseFloat(e.rate).toFixed(2), '%']
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(A.Z, {
                      variant: 'outlined',
                      startIcon: (0, I.jsx)(N.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(C.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, O.Z)(
                          (0, z.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsxs)(T.Z, {
                      spacing: { xs: 1, sm: 2 },
                      direction: 'row',
                      useFlexGap: !0,
                      flexWrap: 'wrap',
                      children: [
                        (0, I.jsx)(A.Z, {
                          variant: 'outlined',
                          startIcon: (0, I.jsx)(N.Z, {}),
                          onClick: function () {
                            return Z(e, 'transaction');
                          },
                          disabled:
                            (null === c || void 0 === c ? void 0 : c.level) +
                              1 !==
                              e.level &&
                            (null === c || void 0 === c ? void 0 : c.id) !==
                              e.id,
                          children: 'Payment'
                        }),
                        (0, I.jsx)(A.Z, {
                          variant: 'outlined',
                          color: 'success',
                          startIcon: (0, I.jsx)(N.Z, {}),
                          onClick: function () {
                            return Z(e, 'vendor');
                          },
                          disabled:
                            (null === c || void 0 === c ? void 0 : c.level) +
                              1 !==
                            e.level,
                          children: 'Vendors'
                        })
                      ]
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              {
                align: 'inherit',
                title: 'label.parent.name',
                name: 'agentParentName'
              },
              { align: 'inherit', title: 'label.rate', name: 'rate' },
              { align: 'right', title: 'label.balance', name: 'balance' },
              { align: 'right', title: 'label.updated.at', name: 'updatedAt' },
              {
                align: 'center',
                title: 'title.managements',
                name: 'management'
              },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var n = e.status,
                r = e.dateFrom,
                t = e.dateTo;
              return [
                (0, I.jsx)(F.M, {
                  label: (0, I.jsx)(P.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, I.jsx)(F.M, {
                  label: (0, I.jsx)(P.Z, { id: 'label.to' }),
                  onChange: t.onChange
                }),
                (0, I.jsxs)(q.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, I.jsx)(E.Z, {
                      id: 'isActive',
                      children: (0, I.jsx)(P.Z, { id: 'label.status' })
                    }),
                    (0, I.jsxs)(W.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, I.jsx)(P.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, I.jsx)(M.Z, {
                          value: '',
                          children: (0, I.jsx)(P.Z, { id: 'label.default' })
                        }),
                        (0, I.jsx)(M.Z, {
                          value: 'active',
                          children: (0, I.jsx)(P.Z, { id: 'label.active' })
                        }),
                        (0, I.jsx)(M.Z, {
                          value: 'disable',
                          children: (0, I.jsx)(P.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            user: i,
            toggle: r,
            visible: n,
            dialogType: f
          };
        },
        D = r(4942),
        _ = r(9709),
        U = r(1889),
        V = r(8550),
        L = r(2302);
      function H(e) {
        var n = e.user,
          r = e.onUpdateToReset,
          o = (0, d.useState)({
            userId: '',
            amount: 0,
            type: 'user.add_balance',
            note: '',
            token: ''
          }),
          u = (0, s.Z)(o, 2),
          c = u[0],
          m = u[1],
          p = (0, h.p)(),
          v = p.notify,
          f = p.message;
        (0, d.useEffect)(
          function () {
            (c.userId = null === n || void 0 === n ? void 0 : n.id),
              m(function (e) {
                return (0, t.Z)((0, t.Z)({}, e), {}, { status: 'success' });
              });
          },
          [n]
        );
        var x = (0, L.Dx)({}),
          Z = (0, s.Z)(x, 2),
          g = Z[0],
          b = Z[1].isLoading,
          j = (function () {
            var e = (0, i.Z)(
              (0, a.Z)().mark(function e() {
                var i;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            g(
                              (0, t.Z)(
                                (0, t.Z)({}, c),
                                {},
                                { currencyId: n.currencyId }
                              )
                            ).unwrap()
                          );
                        case 3:
                          e.sent && r(!0), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            v({
                              message:
                                (null === e.t0 ||
                                void 0 === e.t0 ||
                                null === (i = e.t0.data) ||
                                void 0 === i
                                  ? void 0
                                  : i.message) || f.ERROR,
                              type: 'error'
                            });
                        case 10:
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
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, I.jsxs)(U.ZP, {
          container: !0,
          spacing: 2,
          children: [
            (0, I.jsx)(U.ZP, {
              item: !0,
              xs: 12,
              children: (0, I.jsx)(C.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, I.jsx)(P.Z, { id: 'title.add-transaction' })
              })
            }),
            (0, I.jsxs)(l.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              paddingLeft: '18px',
              gap: '12px',
              marginTop: '8px',
              children: [
                (0, I.jsx)(V.Z, {
                  label: 'Insert the amount here',
                  variant: 'outlined',
                  fullWidth: !0,
                  onInput: function (e) {
                    return (
                      (n = Number(e.target.value)),
                      (r = 'amount'),
                      void m(function (e) {
                        return (0,
                        t.Z)((0, t.Z)({}, e), {}, (0, D.Z)({}, ''.concat(r), n));
                      })
                    );
                    var n, r;
                  }
                }),
                (0, I.jsx)(_.Z, {
                  loading: b,
                  onClick: j,
                  size: 'large',
                  variant: 'contained',
                  sx: { width: 120 },
                  children: (0, I.jsxs)(l.Z, {
                    children: [
                      (0, I.jsx)('span', { children: '+ \xa0' }),
                      (0, I.jsx)('span', { children: 'Add' })
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      var G = r(7196),
        $ = r(1918),
        K = r(7945),
        X = { PaperProps: { style: { maxHeight: 224, width: 350 } } };
      function Y(e) {
        var n = e.user,
          r = e.onUpdateToReset,
          o = (0, d.useState)({
            userId: '',
            amount: 0,
            type: 'user.add_balance',
            note: '',
            token: ''
          }),
          u = (0, s.Z)(o, 2),
          c = u[0],
          m = u[1];
        (0, d.useEffect)(
          function () {
            (c.userId = null === n || void 0 === n ? void 0 : n.id),
              m(function (e) {
                return (0, t.Z)((0, t.Z)({}, e), {}, { status: 'success' });
              });
          },
          [n]
        );
        var p = (0, K.sj)({ agentId: n.id }),
          v = p.data,
          h = p.refetch;
        (0, d.useEffect)(
          function () {
            if (v) {
              g(v);
              var e = v.filter(function (e) {
                return e.canSee;
              });
              w(e);
            }
          },
          [v]
        );
        var f = (0, d.useState)([]),
          x = (0, s.Z)(f, 2),
          Z = x[0],
          g = x[1],
          b = (0, d.useState)([]),
          j = (0, s.Z)(b, 2),
          y = j[0],
          w = j[1],
          S = (0, K.is)(),
          k = (0, s.Z)(S, 1)[0],
          R = (function () {
            var e = (0, i.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          k({ agentId: n.id, selectedVendors: y }).unwrap()
                        );
                      case 2:
                        e.sent.message && (h(), r(!0));
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, I.jsxs)(U.ZP, {
          container: !0,
          spacing: 2,
          padding: 2,
          children: [
            (0, I.jsx)(U.ZP, {
              item: !0,
              xs: 12,
              children: (0, I.jsx)(C.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, I.jsx)(P.Z, { id: 'title.add-vendor' })
              })
            }),
            (0, I.jsx)(l.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100vh',
              children: (0, I.jsxs)(q.Z, {
                sx: { m: 1 },
                children: [
                  (0, I.jsx)(E.Z, {
                    id: 'demo-multiple-chip-label',
                    children: 'Available Vendors'
                  }),
                  (0, I.jsx)(W.Z, {
                    sx: { width: '100%' },
                    labelId: 'demo-multiple-chip-label',
                    id: 'demo-multiple-chip',
                    multiple: !0,
                    value: y,
                    onChange: function (e) {
                      var n = e.target.value;
                      w(n);
                    },
                    input: (0, I.jsx)(G.Z, {
                      id: 'select-multiple-chip',
                      label: 'Available Vendors'
                    }),
                    renderValue: function (e) {
                      return (0, I.jsx)(l.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: e.map(function (e) {
                          return (0, I.jsx)($.Z, { label: e.name }, e.id);
                        })
                      });
                    },
                    MenuProps: X,
                    children: Z.map(function (e) {
                      return (0,
                      I.jsx)(M.Z, { value: e, children: e.name }, e.id);
                    })
                  })
                ]
              })
            }),
            (0, I.jsx)(_.Z, {
              onClick: R,
              size: 'large',
              variant: 'contained',
              sx: { width: '100%' },
              children: (0, I.jsxs)(l.Z, {
                children: [
                  (0, I.jsx)('span', { children: '+ \xa0' }),
                  (0, I.jsx)('span', { children: 'Add' })
                ]
              })
            })
          ]
        });
      }
      var J = 'title.agents-management',
        Q = function (e, n) {
          return null === e || void 0 === e ? void 0 : e.includes(n);
        },
        ee = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: J }
            ],
            n = (0, h.d)(),
            r = n.visible,
            f = n.hide,
            x = n.show,
            Z = (0, c.cI)().reset,
            g = (0, h.p)(),
            b = g.notify,
            j = g.message,
            y = B(),
            w = y.tableBody,
            P = y.tableHeader,
            S = y.tableFilter,
            k = y.visible,
            F = y.toggle,
            C = y.user,
            A = y.dialogType,
            T = (0, d.useState)([]),
            q = (0, s.Z)(T, 2),
            E = q[0],
            W = q[1],
            M = (0, d.useState)(),
            O = (0, s.Z)(M, 2),
            z = O[0],
            N = O[1],
            D = (0, d.useState)({
              page: 0,
              size: 10,
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              status: '',
              dateFrom: '',
              dateTo: ''
            }),
            _ = (0, s.Z)(D, 2),
            U = _[0],
            V = _[1],
            L = (0, u.v9)(function (e) {
              return e.common;
            }).permissions,
            G = (0, p.kC)(),
            $ = (0, s.Z)(G, 1)[0],
            K = (0, p.Lp)(),
            X = (0, s.Z)(K, 2),
            ee = X[0],
            ne = X[1].isLoading,
            re = (0, p.aN)(
              {
                id: 1,
                page: U.page,
                size: U.size,
                search: U.search,
                dateFrom: U.dateFrom,
                dateTo: U.dateTo
              },
              { refetchOnMountOrArgChange: !0, skip: !Q(L, 'get') }
            ),
            te = re.data,
            ae = re.isFetching,
            ie = re.refetch,
            se = function (e) {
              !0 === e && (b({ message: j.UPDATED }), F(), f(), ie(), Z());
            };
          (0, d.useEffect)(
            function () {
              te &&
                W(function () {
                  var e;
                  return (0,
                  v.TY)(te.data.data, null === (e = P[U.sortBy]) || void 0 === e ? void 0 : e.name, U.sortDirection);
                });
            },
            [te, U]
          );
          var oe = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), ee({ id: n }).unwrap()
                            );
                          case 3:
                            b({ message: j.DELETED }), ie(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              b({
                                message: e.t0.data.message || j.ERROR,
                                type: 'error'
                              });
                          case 10:
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
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            le = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  var r;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), $({ id: n }).unwrap()
                            );
                          case 3:
                            (r = e.sent), x(), N(r.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              b({ message: j.ERROR, type: 'error' });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, I.jsxs)(I.Fragment, {
            children: [
              (0, I.jsx)(m.Z, {
                title: J,
                data: E,
                totalItems:
                  null === te || void 0 === te ? void 0 : te.data.totalItems,
                tableHeader: P,
                tableBody: w,
                headerTitle: J,
                breadcrumbs: e,
                onOpenModal:
                  Q(L, 'create') &&
                  function () {
                    x(), N(null);
                  },
                isLoading: ae || ne,
                onDelete: Q(L, 'delete') && oe,
                onUpdate: Q(L, 'update') && le,
                pagination: U,
                onPagination: V,
                tableFilter: S({
                  status: {
                    value: U.status,
                    onChange: function (e) {
                      return V((0, t.Z)((0, t.Z)({}, U), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: U.dateFrom,
                    onChange: function (e) {
                      return V(
                        (0, t.Z)(
                          (0, t.Z)({}, U),
                          {},
                          { dateFrom: (0, v.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: U.dateTo,
                    onChange: function (e) {
                      return V(
                        (0, t.Z)(
                          (0, t.Z)({}, U),
                          {},
                          { dateTo: (0, v.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, I.jsx)(R, {
                open: r,
                detail: z,
                onClose: f,
                refetch: ie,
                hide: f
              }),
              (0, I.jsx)(o.Z, {
                open: k,
                onClose: F,
                children: (0, I.jsx)(l.Z, {
                  component: 'form',
                  padding: 2,
                  children:
                    'transaction' === A
                      ? (0, I.jsx)(H, { user: C, onUpdateToReset: se })
                      : (0, I.jsx)(Y, { user: C, onUpdateToReset: se })
                })
              })
            ]
          });
        };
    },
    8901: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var a = t(r(5649)),
        i = r(184),
        s = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z'
          }),
          'PaidOutlined'
        );
      n.Z = s;
    },
    6314: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return k;
        }
      });
      var t = r(4942),
        a = r(3366),
        i = r(7462),
        s = r(2791),
        o = r(8182),
        l = r(2466),
        d = r(4419),
        u = r(1217),
        c = r(3457),
        m = r(6083),
        p = r(8519),
        v = r(5080),
        h = r(1184),
        f = r(5682),
        x = r(184),
        Z = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
          'className',
          'useFlexGap'
        ],
        g = (0, v.Z)(),
        b = (0, c.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        });
      function j(e) {
        return (0, m.Z)({ props: e, name: 'MuiStack', defaultTheme: g });
      }
      function y(e, n) {
        var r = s.Children.toArray(e).filter(Boolean);
        return r.reduce(function (e, t, a) {
          return (
            e.push(t),
            a < r.length - 1 &&
              e.push(s.cloneElement(n, { key: 'separator-'.concat(a) })),
            e
          );
        }, []);
      }
      var w = function (e) {
        var n = e.ownerState,
          r = e.theme,
          a = (0, i.Z)(
            { display: 'flex', flexDirection: 'column' },
            (0, h.k9)(
              { theme: r },
              (0, h.P$)({
                values: n.direction,
                breakpoints: r.breakpoints.values
              }),
              function (e) {
                return { flexDirection: e };
              }
            )
          );
        if (n.spacing) {
          var s = (0, f.hB)(r),
            o = Object.keys(r.breakpoints.values).reduce(function (e, r) {
              return (
                (('object' === typeof n.spacing && null != n.spacing[r]) ||
                  ('object' === typeof n.direction &&
                    null != n.direction[r])) &&
                  (e[r] = !0),
                e
              );
            }, {}),
            d = (0, h.P$)({ values: n.direction, base: o }),
            u = (0, h.P$)({ values: n.spacing, base: o });
          'object' === typeof d &&
            Object.keys(d).forEach(function (e, n, r) {
              if (!d[e]) {
                var t = n > 0 ? d[r[n - 1]] : 'column';
                d[e] = t;
              }
            });
          a = (0, l.Z)(
            a,
            (0, h.k9)({ theme: r }, u, function (e, r) {
              return n.useFlexGap
                ? { gap: (0, f.NA)(s, e) }
                : {
                    '& > :not(style) ~ :not(style)': (0, t.Z)(
                      { margin: 0 },
                      'margin'.concat(
                        ((a = r ? d[r] : n.direction),
                        {
                          row: 'Left',
                          'row-reverse': 'Right',
                          column: 'Top',
                          'column-reverse': 'Bottom'
                        }[a])
                      ),
                      (0, f.NA)(s, e)
                    )
                  };
              var a;
            })
          );
        }
        return (a = (0, h.dt)(r.breakpoints, a));
      };
      var P = r(6934),
        I = r(1402),
        S = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.createStyledComponent,
            r = void 0 === n ? b : n,
            t = e.useThemeProps,
            l = void 0 === t ? j : t,
            c = e.componentName,
            m = void 0 === c ? 'MuiStack' : c,
            v = r(w),
            h = s.forwardRef(function (e, n) {
              var r = l(e),
                t = (0, p.Z)(r),
                s = t.component,
                c = void 0 === s ? 'div' : s,
                h = t.direction,
                f = void 0 === h ? 'column' : h,
                g = t.spacing,
                b = void 0 === g ? 0 : g,
                j = t.divider,
                w = t.children,
                P = t.className,
                I = t.useFlexGap,
                S = void 0 !== I && I,
                k = (0, a.Z)(t, Z),
                R = { direction: f, spacing: b, useFlexGap: S },
                F = (0, d.Z)(
                  { root: ['root'] },
                  function (e) {
                    return (0, u.Z)(m, e);
                  },
                  {}
                );
              return (0,
              x.jsx)(v, (0, i.Z)({ as: c, ownerState: R, ref: n, className: (0, o.Z)(F.root, P) }, k, { children: j ? y(w, j) : w }));
            });
          return h;
        })({
          createStyledComponent: (0, P.ZP)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: function (e, n) {
              return n.root;
            }
          }),
          useThemeProps: function (e) {
            return (0, I.Z)({ props: e, name: 'MuiStack' });
          }
        }),
        k = S;
    }
  }
]);
//# sourceMappingURL=856.f64eb129.chunk.js.map
