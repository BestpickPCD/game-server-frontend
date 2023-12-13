'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [917],
  {
    8409: function (e, n, r) {
      r.d(n, {
        R: function () {
          return p;
        }
      });
      var t = r(7762),
        a = r(3433),
        i = r(1413),
        l = r(9439),
        s = r(5987),
        o = r(2791),
        d = r(7590),
        u = r(1827),
        c = r(4732),
        m = r(184),
        h = ['control', 'name', 'parent', 'label', 'errors'],
        v = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        p = function (e) {
          var n = e.control,
            r = e.name,
            p = e.parent,
            f = e.label,
            g = void 0 === f ? 'Agents' : f,
            Z = e.errors,
            x = (0, s.Z)(e, h),
            b = (0, o.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            j = (0, l.Z)(b, 2),
            y = j[0],
            w = j[1],
            I = (0, o.useState)(''),
            P = (0, l.Z)(I, 2),
            S = P[0],
            F = P[1],
            A = (0, c.Z)(S, 500),
            C = (0, o.useState)([]),
            R = (0, l.Z)(C, 2),
            k = R[0],
            T = R[1],
            q = (0, o.useState)({ id: '', name: '', value: '' }),
            E = (0, l.Z)(q, 2),
            O = E[0],
            W = E[1];
          (0, o.useEffect)(
            function () {
              F(A),
                w(function (e) {
                  return (0, i.Z)((0, i.Z)({}, e), {}, { search: A });
                });
            },
            [A]
          );
          var z = (0, u.aN)(
              { size: y.size, page: y.page, search: y.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            D = z.data,
            M = z.isFetching;
          function _(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (D.data.page + 1) * D.data.size < D.data.totalItems
            )
              return w(function (e) {
                return (0, i.Z)((0, i.Z)({}, e), {}, { page: y.page + 1 });
              });
          }
          (0, o.useEffect)(
            function () {
              w({ search: A || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                T([]);
            },
            [A, p]
          ),
            (0, o.useEffect)(
              function () {
                return T(
                  p
                    ? function (e) {
                        var n,
                          r = []
                            .concat(
                              (0, a.Z)(e),
                              (0, a.Z)(
                                v(
                                  null === D ||
                                    void 0 === D ||
                                    null === (n = D.data) ||
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
                            })(p)
                          ),
                          r
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, a.Z)(e),
                          (0, a.Z)(
                            v(null === D || void 0 === D ? void 0 : D.data.data)
                          )
                        );
                      }
                );
              },
              [D, p]
            ),
            (0, o.useEffect)(
              function () {
                null !== O &&
                  void 0 !== O &&
                  O.id &&
                  T(function (e) {
                    var n = e.slice();
                    return n.unshift(O), n;
                  });
              },
              [O, D]
            );
          var B = (0, o.useMemo)(
            function () {
              var e,
                n = [],
                r = new Set(),
                a = (0, t.Z)(k);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var i = e.value;
                  r.has(i.id) || (r.add(i.id), n.push(i));
                }
              } catch (l) {
                a.e(l);
              } finally {
                a.f();
              }
              return n;
            },
            [k]
          );
          return (0, m.jsx)(
            d.P,
            (0, i.Z)(
              {
                onScroll: _,
                name: r,
                label: g,
                options: B,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: _ },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: M,
                onSearch: F,
                searchTerm: S,
                errors: Z,
                setSelected: W
              },
              x
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
        l = r(8096),
        s = r(4925),
        o = r(8406),
        d = r(9834),
        u = r(8550),
        c = r(3466),
        m = r(3786),
        h = r(4554),
        v = r(3239),
        p = r(7071),
        f = r(2791),
        g = r(1134),
        Z = r(184),
        x = [
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
            I = e.searchTerm,
            P = e.onSearch,
            S = e.setSelected,
            F = (0, a.Z)(e, x);
          return r
            ? (0, Z.jsx)(g.Qr, {
                control: r,
                name: f,
                render: function (e) {
                  var n,
                    r = e.field;
                  return (0, Z.jsxs)(l.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(s.Z, {
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
                        o.Z,
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
                            F
                          ),
                          {},
                          {
                            children: [
                              P &&
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
                                    value: I,
                                    onChange: function (e) {
                                      return P(e.target.value);
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
                                (0, Z.jsx)(h.Z, {
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
                        (0, Z.jsx)(p.Z, {
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
            : (0, Z.jsxs)(l.Z, {
                fullWidth: !0,
                children: [
                  (0, Z.jsx)(s.Z, {
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
                    o.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: b
                        },
                        F
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
                    (0, Z.jsx)(p.Z, {
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
            l = e.register,
            s = (0, a.Z)(e, y);
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
                l(r)
              ),
              s
            )
          );
        };
    },
    9419: function (e, n, r) {
      var t = r(1413),
        a = r(4165),
        i = r(5861),
        l = r(9439),
        s = r(4695),
        o = r(9709),
        d = r(4554),
        u = r(1889),
        c = r(8550),
        m = r(2791),
        h = r(1134),
        v = r(4349),
        p = r(6871),
        f = r(7590),
        g = r(8409),
        Z = r(1927),
        x = r(5674),
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
          I = void 0 !== j && j,
          P = e.isSubmit,
          S = void 0 !== P && P,
          F = e.setIsSubmit,
          A = e.refetch,
          C = e.onClose,
          R = (0, Z.l4)(),
          k = (0, l.Z)(R, 2),
          T = k[0],
          q = k[1].isLoading,
          E = (0, b.p)(),
          O = E.notify,
          W = E.message,
          z = (0, p.s0)(),
          D = (0, h.cI)({
            resolver: (0, s.X)(w),
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
          M = D.register,
          _ = D.handleSubmit,
          B = D.reset,
          U = D.control,
          H = D.setValue,
          L = D.formState.errors;
        (0, m.useEffect)(
          function () {
            S && (_(K)(), S && F());
          },
          [S]
        );
        var N = (0, x.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
          V = (0, m.useMemo)(
            function () {
              var e;
              return null === N ||
                void 0 === N ||
                null === (e = N.data) ||
                void 0 === e
                ? void 0
                : e.map(function (e) {
                    return { id: e.id, name: e.name, value: e.id };
                  });
            },
            [N]
          ),
          K = (function () {
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
                            (B(),
                            O({ message: 'Registered Successfully' }),
                            r || I ? (A(), C()) : z('/login')),
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
                            O({
                              message: 'Duplicated username or email',
                              type: 'error'
                            })
                          );
                        case 11:
                          return e.abrupt(
                            'return',
                            O({ message: W.ERROR, type: 'error' })
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
          onSubmit: _(K),
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
                          error: !!L.name,
                          helperText: L.name ? L.name.message : ''
                        },
                        M('name')
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
                        children: (0, y.jsx)(g.R, {
                          control: U,
                          name: 'parentAgentId',
                          errors: L
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
                                  error: !!L.rate,
                                  helperText: L.rate ? L.rate.message : ''
                                },
                                M('rate')
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
                                error: !!L.email,
                                helperText: L.email ? L.email.message : ''
                              },
                              M('email')
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
                      !r &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(f.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: V,
                            errors: L,
                            control: U
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
                          error: !!L.username,
                          helperText: L.username ? L.username.message : ''
                        },
                        M('username')
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
                                error: !!L.password,
                                helperText: L.password ? L.password.message : ''
                              },
                              M('password')
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
                                error: !!L.confirmPassword,
                                helperText: L.confirmPassword
                                  ? L.confirmPassword.message
                                  : ''
                              },
                              M('confirmPassword')
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
            !r &&
              !I &&
              (0, y.jsx)(o.Z, {
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
    1917: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return N;
          }
        });
      var t = r(4942),
        a = r(4165),
        i = r(5861),
        l = r(1413),
        s = r(9439),
        o = r(2791),
        d = r(6790),
        u = r(4222),
        c = r(7837),
        m = r(1134),
        h = r(4695),
        v = r(4554),
        p = r(4349),
        f = r(7590),
        g = r(8409),
        Z = r(7891),
        x = r(9419),
        b = r(5674),
        j = r(4167),
        y = r(6727),
        w = r(184),
        I = y
          .Ry()
          .shape({
            name: y.Z_().required('Last name is required!'),
            email: y.Z_().required('Email is required!'),
            roleId: y.Rx(),
            currencyId: y.Rx().required('Currency is required!'),
            username: y.Z_().required('Username is required!'),
            parentAgentId: y.Z_().nullable()
          }),
        P = function (e) {
          var n = e.open,
            r = e.detail,
            t = e.onClose,
            l = e.refetch,
            d = e.hide,
            y = (0, c.p)(),
            P = y.notify,
            S = y.message,
            F = (0, o.useState)(!1),
            A = (0, s.Z)(F, 2),
            C = A[0],
            R = A[1],
            k = (0, u.kD)(),
            T = (0, s.Z)(k, 2),
            q = T[0],
            E = T[1].isLoading,
            O = (0, b.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== r && void 0 !== r && r.id)
              }
            ).data,
            W = (0, j.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== r && void 0 !== r && r.id)
              }
            ).data,
            z = (0, m.cI)({
              resolver: (0, h.X)(I),
              defaultValues: {
                name: '',
                email: '',
                roleId: 2,
                username: '',
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            D = z.register,
            M = z.setValue,
            _ = z.reset,
            B = z.handleSubmit,
            U = z.control,
            H = z.formState.errors;
          (0, o.useEffect)(
            function () {
              var e, n;
              null !== r && void 0 !== r && r.id
                ? (M('name', r.name),
                  M('username', r.username),
                  M('email', r.email),
                  M(
                    'roleId',
                    null === r ||
                      void 0 === r ||
                      null === (e = r.role) ||
                      void 0 === e
                      ? void 0
                      : e.id
                  ),
                  M(
                    'currencyId',
                    null === r ||
                      void 0 === r ||
                      null === (n = r.currency) ||
                      void 0 === n
                      ? void 0
                      : n.id
                  ),
                  M(
                    'parentAgentId',
                    null === r || void 0 === r ? void 0 : r.parentAgentId
                  ))
                : _();
            },
            [r]
          );
          var L = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === r || void 0 === r || !r.id)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 4),
                              q({
                                id: r.id,
                                body: {
                                  name: n.name,
                                  email: n.email,
                                  roleId: n.roleId,
                                  currencyId: n.currencyId,
                                  parentAgentId: n.parentAgentId
                                }
                              }).unwrap()
                            );
                          case 4:
                            P({ message: S.UPDATED });
                          case 5:
                            l(), d(), _(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              P({ message: S.ERROR, type: 'error' });
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
            N =
              ((0, o.useMemo)(
                function () {
                  var e;
                  return null === O ||
                    void 0 === O ||
                    null === (e = O.data) ||
                    void 0 === e
                    ? void 0
                    : e.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [O]
              ),
              (0, o.useMemo)(
                function () {
                  return null === W || void 0 === W
                    ? void 0
                    : W.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [W]
              ));
          return (0, w.jsx)(Z.Z, {
            title:
              null !== r && void 0 !== r && r.id
                ? 'Edit '.concat(r.name)
                : 'Add User',
            onClose: t,
            open: n,
            isLoading: E,
            onOk:
              null !== r && void 0 !== r && r.id
                ? B(L)
                : function () {
                    return R(!0);
                  },
            children:
              null !== r && void 0 !== r && r.id
                ? (0, w.jsx)(v.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, w.jsxs)('div', {
                      className: 'block',
                      children: [
                        (0, w.jsx)(f.n, {
                          label: (0, w.jsx)(p.Z, { id: 'label.username' }),
                          name: 'username',
                          errors: H,
                          sx: { my: 1 },
                          register: D,
                          disabled: !(null === r || void 0 === r || !r.id)
                        }),
                        (0, w.jsx)(f.n, {
                          label: (0, w.jsx)(p.Z, { id: 'label.name' }),
                          name: 'name',
                          sx: { mt: 1 },
                          errors: H,
                          register: D
                        }),
                        (0, w.jsx)(f.n, {
                          label: 'Email',
                          name: 'email',
                          sx: { my: 2 },
                          errors: H,
                          register: D
                        }),
                        (0, w.jsx)(g.R, {
                          control: U,
                          name: 'parentAgentId',
                          errors: H
                        }),
                        (0, w.jsx)(v.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: (0, w.jsx)(f.P, {
                            label: 'Currency',
                            name: 'currencyId',
                            control: U,
                            options: N
                          })
                        })
                      ]
                    })
                  })
                : (0, w.jsx)(x.Z, {
                    isUserRegister: !0,
                    isSubmit: C,
                    setIsSubmit: function () {
                      return R(!1);
                    },
                    refetch: l,
                    onClose: t
                  })
          });
        },
        S = (0, o.memo)(P),
        F = r(5119),
        A = r(890),
        C = r(6151),
        R = r(8096),
        k = r(4925),
        T = r(8406),
        q = r(3786),
        E = r(946),
        O = r(8673),
        W = r(8901),
        z = function () {
          var e = (0, c.d)(),
            n = e.visible,
            r = e.toggle,
            t = (0, o.useState)(),
            a = (0, s.Z)(t, 2),
            i = a[0],
            l = a[1],
            d = function (e) {
              return Math.abs(
                Object.keys(null === e || void 0 === e ? void 0 : e.balances)
                  .filter(function (e) {
                    return (
                      'deposit' === e ||
                      'withdraw' === e ||
                      'user.add_balance' === e
                    );
                  })
                  .reduce(function (n, r) {
                    return n + -1 * e.balances[r];
                  }, 0)
              );
            };
          return {
            tableBody: function (e) {
              var n, t, a, i, s, o, u, c;
              return [
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(A.Z, {
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
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(C.Z, {
                      variant: 'outlined',
                      startIcon: (0, w.jsx)(W.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(C.Z, {
                      variant: 'outlined',
                      startIcon: (0, w.jsx)(W.Z, {}),
                      href: 'transactions/'.concat(e.id, '/betting-history'),
                      children:
                        null !==
                          (n =
                            (null !==
                              (t =
                                null === e ||
                                void 0 === e ||
                                null === (a = e.balances) ||
                                void 0 === a
                                  ? void 0
                                  : a.win) && void 0 !== t
                              ? t
                              : 0) +
                            (null !==
                              (i =
                                null === e ||
                                void 0 === e ||
                                null === (s = e.balances) ||
                                void 0 === s
                                  ? void 0
                                  : s.bet) && void 0 !== i
                              ? i
                              : 0) +
                            (null !==
                              (o =
                                null === e ||
                                void 0 === e ||
                                null === (u = e.balances) ||
                                void 0 === u
                                  ? void 0
                                  : u.cancel) && void 0 !== o
                              ? o
                              : 0)) && void 0 !== n
                          ? n
                          : 0
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(C.Z, {
                      variant: 'outlined',
                      startIcon: (0, w.jsx)(W.Z, {}),
                      href: 'transactions/'.concat(e.id, '/recharge-history'),
                      children:
                        (null === e || void 0 === e ? void 0 : e.balances) &&
                        d(e)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(A.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.username
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(A.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, E.Z)(
                          (0, O.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(C.Z, {
                      disabled:
                        (null ===
                          (c = JSON.parse(localStorage.getItem('user'))) ||
                        void 0 === c
                          ? void 0
                          : c.id) != e.agentId,
                      variant: 'outlined',
                      startIcon: (0, w.jsx)(W.Z, {}),
                      onClick: function () {
                        return (function (e) {
                          l(e), r();
                        })(e);
                      },
                      children: 'Payment'
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.balance', name: 'balance' },
              {
                align: 'inherit',
                title: 'label.betting',
                name: 'totalBettingAmount'
              },
              {
                align: 'inherit',
                title: 'label.recharge',
                name: 'totalBettingAmount'
              },
              { align: 'right', title: 'label.username', name: 'username' },
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
                (0, w.jsx)(F.M, {
                  label: (0, w.jsx)(p.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, w.jsx)(F.M, {
                  label: (0, w.jsx)(p.Z, { id: 'label.to' }),
                  onChange: t.onChange
                }),
                (0, w.jsxs)(R.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, w.jsx)(k.Z, {
                      id: 'isActive',
                      children: (0, w.jsx)(p.Z, { id: 'label.status' })
                    }),
                    (0, w.jsxs)(T.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, w.jsx)(p.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, w.jsx)(q.Z, {
                          value: '',
                          children: (0, w.jsx)('em', {
                            children: (0, w.jsx)(p.Z, { id: 'label.default' })
                          })
                        }),
                        (0, w.jsx)(q.Z, {
                          value: 'active',
                          children: (0, w.jsx)(p.Z, { id: 'label.active' })
                        }),
                        (0, w.jsx)(q.Z, {
                          value: 'disable',
                          children: (0, w.jsx)(p.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            visible: n,
            toggle: r,
            user: i
          };
        },
        D = r(5850),
        M = r(5574),
        _ = r(8550),
        B = r(2302),
        U = r(9709),
        H = r(5048),
        L = 'title.users-management',
        N = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: L }
            ],
            n = (0, c.d)(),
            r = n.visible,
            h = n.hide,
            p = n.show,
            f = (0, c.p)(),
            g = f.notify,
            Z = f.message,
            x = (0, m.cI)().reset,
            b = z(),
            j = b.tableBody,
            y = b.tableHeader,
            I = b.tableFilter,
            P = b.visible,
            F = b.toggle,
            C = b.user,
            R = (0, o.useState)({
              userId: '',
              amount: 0,
              type: 'user.add_balance',
              note: '',
              status: 'pending'
            }),
            k = (0, s.Z)(R, 2),
            T = k[0],
            q = k[1],
            E = (0, o.useState)([]),
            O = (0, s.Z)(E, 2),
            W = O[0],
            N = O[1],
            V = (0, o.useState)(),
            K = (0, s.Z)(V, 2),
            Q = K[0],
            X = K[1],
            Y = (0, o.useState)({
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
            J = (0, s.Z)(Y, 2),
            $ = J[0],
            G = J[1],
            ee = (0, u.V_)(),
            ne = (0, s.Z)(ee, 1)[0],
            re = (0, u.I1)(),
            te = (0, s.Z)(re, 2),
            ae = te[0],
            ie = te[1].isLoading,
            le = (0, B.Dx)(),
            se = (0, s.Z)(le, 2),
            oe = se[0],
            de = se[1].isLoading,
            ue = (0, H.v9)(function (e) {
              return e.common;
            }).permissions,
            ce = (0, u.zQ)(
              {
                page: $.page,
                size: $.size,
                search: $.search,
                dateFrom: $.dateFrom,
                dateTo: $.dateTo
              },
              { refetchOnMountOrArgChange: !0 }
            ),
            me = ce.data,
            he = ce.isFetching,
            ve = ce.refetch;
          (0, o.useEffect)(
            function () {
              me &&
                N(function () {
                  var e;
                  return (0,
                  D.TY)(me.data.data, null === (e = y[$.sortBy]) || void 0 === e ? void 0 : e.name, $.sortDirection);
                });
            },
            [me, $.sortBy, $.sortDirection]
          ),
            (0, o.useEffect)(
              function () {
                C &&
                  q(function (e) {
                    return (0,
                    l.Z)((0, l.Z)({}, e), {}, { userId: null === C || void 0 === C ? void 0 : C.id, amount: Number(e.amount) });
                  });
              },
              [C]
            );
          var pe,
            fe,
            ge = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  var r;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ae(n).unwrap();
                          case 3:
                            g({ message: Z.DELETED }), ve(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              g({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (r = e.t0.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.message) || Z.ERROR,
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
            Ze = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(n) {
                  var r;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ne(n).unwrap();
                          case 3:
                            (r = e.sent), p(), X(r.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              g({ message: Z.ERROR, type: 'error' });
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
            })(),
            xe = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e() {
                  var n;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), oe(T).unwrap();
                          case 3:
                            e.sent &&
                              (F(), g({ message: Z.UPDATED }), ve(), h(), x()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              g({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (n = e.t0.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.message) || Z.ERROR,
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
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(d.Z, {
                title: L,
                data: W,
                totalItems:
                  null === me || void 0 === me ? void 0 : me.data.totalItems,
                tableHeader: y,
                tableBody: j,
                headerTitle: L,
                breadcrumbs: e,
                isLoading: he || ie,
                onDelete: ge,
                onUpdate: Ze,
                pagination: $,
                onPagination: G,
                onOpenModal:
                  ((pe = ue),
                  (fe = 'create'),
                  (null === pe || void 0 === pe ? void 0 : pe.includes(fe)) &&
                    function () {
                      p(), X(null);
                    }),
                tableFilter: I({
                  status: {
                    value: $.status,
                    onChange: function (e) {
                      return G((0, l.Z)((0, l.Z)({}, $), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: $.dateFrom,
                    onChange: function (e) {
                      return G(
                        (0, l.Z)(
                          (0, l.Z)({}, $),
                          {},
                          { dateFrom: (0, D.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: $.dateTo,
                    onChange: function (e) {
                      return G(
                        (0, l.Z)(
                          (0, l.Z)({}, $),
                          {},
                          { dateTo: (0, D.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, w.jsx)(S, {
                open: r,
                detail: Q,
                onClose: h,
                refetch: ve,
                hide: h
              }),
              (0, w.jsx)(M.Z, {
                open: P,
                onClose: F,
                children: (0, w.jsxs)(v.Z, {
                  component: 'form',
                  padding: 2,
                  width: '400px',
                  children: [
                    (0, w.jsx)(A.Z, {
                      gutterBottom: !0,
                      variant: 'h5',
                      component: 'div',
                      children: 'Add transaction'
                    }),
                    (0, w.jsxs)(v.Z, {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: 2,
                      pt: 2,
                      children: [
                        (0, w.jsx)(_.Z, {
                          label: 'Insert the amount here',
                          variant: 'outlined',
                          fullWidth: !0,
                          onInput: function (e) {
                            return (
                              (n = Number(e.target.value)),
                              (r = 'amount'),
                              void q(function (e) {
                                return (0,
                                l.Z)((0, l.Z)({}, e), {}, (0, t.Z)({}, ''.concat(r), n));
                              })
                            );
                            var n, r;
                          }
                        }),
                        (0, w.jsx)(U.Z, {
                          loading: de,
                          onClick: xe,
                          size: 'large',
                          variant: 'contained',
                          children: (0, w.jsx)(A.Z, {
                            whiteSpace: 'nowrap',
                            children: '+ Add'
                          })
                        })
                      ]
                    })
                  ]
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
        l = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z'
          }),
          'PaidOutlined'
        );
      n.Z = l;
    }
  }
]);
//# sourceMappingURL=917.45e1547e.chunk.js.map