'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [645],
  {
    8409: function (e, n, t) {
      t.d(n, {
        R: function () {
          return x;
        }
      });
      var r = t(7762),
        i = t(3433),
        a = t(1413),
        s = t(9439),
        l = t(5987),
        o = t(2791),
        d = t(7590),
        u = t(1827),
        c = t(4732),
        m = t(184),
        f = ['control', 'name', 'parent', 'label', 'errors'],
        h = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        x = function (e) {
          var n = e.control,
            t = e.name,
            x = e.parent,
            p = e.label,
            v = void 0 === p ? 'Agents' : p,
            Z = e.errors,
            g = (0, l.Z)(e, f),
            j = (0, o.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            b = (0, s.Z)(j, 2),
            y = b[0],
            I = b[1],
            C = (0, o.useState)(''),
            w = (0, s.Z)(C, 2),
            P = w[0],
            S = w[1],
            A = (0, c.Z)(P, 500),
            k = (0, o.useState)([]),
            R = (0, s.Z)(k, 2),
            F = R[0],
            T = R[1],
            W = (0, o.useState)({ id: '', name: '', value: '' }),
            q = (0, s.Z)(W, 2),
            E = q[0],
            M = q[1];
          (0, o.useEffect)(
            function () {
              S(A),
                I(function (e) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { search: A });
                });
            },
            [A]
          );
          var O = (0, u.aN)(
              { size: y.size, page: y.page, search: y.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            z = O.data,
            D = O.isFetching;
          function L(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (z.data.page + 1) * z.data.size < z.data.totalItems
            )
              return I(function (e) {
                return (0, a.Z)((0, a.Z)({}, e), {}, { page: y.page + 1 });
              });
          }
          (0, o.useEffect)(
            function () {
              I({ search: A || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                T([]);
            },
            [A, x]
          ),
            (0, o.useEffect)(
              function () {
                return T(
                  x
                    ? function (e) {
                        var n,
                          t = []
                            .concat(
                              (0, i.Z)(e),
                              (0, i.Z)(
                                h(
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
                          t.unshift(
                            (function (e) {
                              return { id: e.id, name: e.name, value: e.value };
                            })(x)
                          ),
                          t
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, i.Z)(e),
                          (0, i.Z)(
                            h(null === z || void 0 === z ? void 0 : z.data.data)
                          )
                        );
                      }
                );
              },
              [z, x]
            ),
            (0, o.useEffect)(
              function () {
                null !== E &&
                  void 0 !== E &&
                  E.id &&
                  T(function (e) {
                    var n = e.slice();
                    return n.unshift(E), n;
                  });
              },
              [E, z]
            );
          var U = (0, o.useMemo)(
            function () {
              var e,
                n = [],
                t = new Set(),
                i = (0, r.Z)(F);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  var a = e.value;
                  t.has(a.id) || (t.add(a.id), n.push(a));
                }
              } catch (s) {
                i.e(s);
              } finally {
                i.f();
              }
              return n;
            },
            [F]
          );
          return (0, m.jsx)(
            d.P,
            (0, a.Z)(
              {
                onScroll: L,
                name: t,
                label: v,
                options: U,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: L },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: D,
                onSearch: S,
                searchTerm: P,
                errors: Z,
                setSelected: M
              },
              g
            )
          );
        };
    },
    7590: function (e, n, t) {
      t.d(n, {
        P: function () {
          return b;
        },
        n: function () {
          return I;
        }
      });
      var r = t(1413),
        i = t(5987),
        a = t(5403),
        s = t(8096),
        l = t(4925),
        o = t(9321),
        d = t(9834),
        u = t(8550),
        c = t(3466),
        m = t(3786),
        f = t(4554),
        h = t(3239),
        x = t(7071),
        p = t(2791),
        v = t(1134),
        Z = t(184),
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
          var n,
            t = e.control,
            p = e.name,
            j = e.label,
            b = e.options,
            y = e.isFetching,
            I = e.errors,
            C = e.searchTerm,
            w = e.onSearch,
            P = e.setSelected,
            S = (0, i.Z)(e, g);
          return t
            ? (0, Z.jsx)(v.Qr, {
                control: t,
                name: p,
                render: function (e) {
                  var n,
                    t = e.field;
                  return (0, Z.jsxs)(s.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== I && void 0 !== I && I[p] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, Z.jsxs)(
                        o.Z,
                        (0, r.Z)(
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: j,
                                value:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.value) || '',
                                error:
                                  !(null === I || void 0 === I || !I[p]) &&
                                  !t.value
                              },
                              t
                            ),
                            S
                          ),
                          {},
                          {
                            children: [
                              w &&
                                (0, Z.jsx)(d.Z, {
                                  children: (0, Z.jsx)(u.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, Z.jsx)(c.Z, {
                                        position: 'start',
                                        children: (0, Z.jsx)(a.Z, {})
                                      })
                                    },
                                    value: C,
                                    onChange: function (e) {
                                      return w(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
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
                                              null === P ||
                                              void 0 === P ||
                                              P(n)
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
                                (0, Z.jsx)(f.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, Z.jsx)(h.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === I || void 0 === I ? void 0 : I[p]) &&
                        !t.value &&
                        (0, Z.jsx)(x.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === I ||
                            void 0 === I ||
                            null === (n = I[p]) ||
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
                  (0, Z.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== I && void 0 !== I && I[p]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, Z.jsx)(
                    o.Z,
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        S
                      ),
                      {},
                      {
                        error: !(null === I || void 0 === I || !I[p]),
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                Z.jsx)(m.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === I || void 0 === I || !I[p]) &&
                    (0, Z.jsx)(x.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === I ||
                        void 0 === I ||
                        null === (n = I[p]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        b = (0, p.memo)(j),
        y = ['label', 'name', 'errors', 'register'],
        I = function (e) {
          var n = e.label,
            t = e.name,
            a = e.errors,
            s = e.register,
            l = (0, i.Z)(e, y);
          return (0, Z.jsx)(
            u.Z,
            (0, r.Z)(
              (0, r.Z)(
                {
                  label: n,
                  error: !!a[t],
                  helperText: a[t] ? a[t].message : '',
                  fullWidth: !0
                },
                s(t)
              ),
              l
            )
          );
        };
    },
    7891: function (e, n, t) {
      var r = t(1413),
        i = t(5987),
        a = t(3329),
        s = t(9709),
        l = t(4721),
        o = t(9164),
        d = t(6151),
        u = t(5574),
        c = t(5661),
        m = t(493),
        f = t(4349),
        h = t(184),
        x = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          p = e.open,
          v = e.isLoading,
          Z = void 0 !== v && v,
          g = e.onClose,
          j = e.onOk,
          b = (0, i.Z)(e, x);
        return (0, h.jsxs)(
          u.Z,
          (0, r.Z)(
            (0, r.Z)({ onClose: g, open: p }, b),
            {},
            {
              children: [
                n && (0, h.jsx)(c.Z, { variant: 'h4', children: n }),
                n && (0, h.jsx)(l.Z, {}),
                (0, h.jsx)(m.Z, { sx: { pt: 0 }, children: t }),
                (0, h.jsx)(l.Z, {}),
                (0, h.jsxs)(o.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, h.jsx)(d.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: g,
                      children: (0, h.jsx)(f.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, h.jsx)(s.Z, {
                        onClick: j,
                        loading: Z,
                        loadingPosition: 'start',
                        startIcon: (0, h.jsx)(a.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, h.jsx)(f.Z, { id: 'label.OK' })
                      })
                  ]
                })
              ]
            }
          )
        );
      };
    },
    9419: function (e, n, t) {
      var r = t(1413),
        i = t(4165),
        a = t(5861),
        s = t(9439),
        l = t(4695),
        o = t(9709),
        d = t(4554),
        u = t(1889),
        c = t(8550),
        m = t(2791),
        f = t(1134),
        h = t(4349),
        x = t(6871),
        p = t(7590),
        v = t(8409),
        Z = t(1927),
        g = t(5674),
        j = t(7837),
        b = t(5243),
        y = t(184),
        I = b.Ry().shape({
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
      n.Z = function (e) {
        var n = e.isUserRegister,
          t = void 0 !== n && n,
          b = e.isAgentRegister,
          C = void 0 !== b && b,
          w = e.isSubmit,
          P = void 0 !== w && w,
          S = e.setIsSubmit,
          A = e.refetch,
          k = e.onClose,
          R = (0, Z.l4)(),
          F = (0, s.Z)(R, 2),
          T = F[0],
          W = F[1].isLoading,
          q = (0, j.p)(),
          E = q.notify,
          M = q.message,
          O = (0, x.s0)(),
          z = (0, f.cI)({
            resolver: (0, l.X)(I),
            defaultValues: {
              name: '',
              rate: t ? null : 0,
              email: '',
              username: '',
              parentAgentId: t ? null : '',
              type: t ? 'player' : 'agent',
              roleId: t ? 2 : 0,
              password: '',
              confirmPassword: ''
            }
          }),
          D = z.register,
          L = z.handleSubmit,
          U = z.reset,
          B = z.control,
          V = z.setValue,
          _ = z.formState.errors;
        (0, m.useEffect)(
          function () {
            P && (L(K)(), P && S());
          },
          [P]
        );
        var H = (0, g.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
          N = (0, m.useMemo)(
            function () {
              var e;
              return null === H ||
                void 0 === H ||
                null === (e = H.data) ||
                void 0 === e
                ? void 0
                : e.map(function (e) {
                    return { id: e.id, name: e.name, value: e.id };
                  });
            },
            [H]
          ),
          K = (function () {
            var e = (0, a.Z)(
              (0, i.Z)().mark(function e(n) {
                var r;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), T(n).unwrap();
                        case 3:
                          (r = e.sent) &&
                            'CREATED' === r.message &&
                            (U(),
                            E({ message: 'Registered Successfully' }),
                            t || C ? (A(), k()) : O('/login')),
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
                            E({
                              message: 'Duplicated username or email',
                              type: 'error'
                            })
                          );
                        case 11:
                          return e.abrupt(
                            'return',
                            E({ message: M.ERROR, type: 'error' })
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
          onSubmit: L(K),
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
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: 'Name',
                          autoFocus: !0,
                          error: !!_.name,
                          helperText: _.name ? _.name.message : ''
                        },
                        D('name')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return V('name', e.target.value.trim());
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
                        xs: t ? 12 : 8,
                        children: (0, y.jsx)(v.R, {
                          control: B,
                          name: 'parentAgentId',
                          errors: _
                        })
                      }),
                      !t &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(
                            c.Z,
                            (0, r.Z)(
                              (0, r.Z)(
                                {
                                  required: !0,
                                  fullWidth: !0,
                                  label: 'Rate',
                                  autoFocus: !0,
                                  error: !!_.rate,
                                  helperText: _.rate ? _.rate.message : ''
                                },
                                D('rate')
                              ),
                              {},
                              {
                                onBlur: function (e) {
                                  return V(
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
                        xs: t ? 12 : 8,
                        children: (0, y.jsx)(
                          c.Z,
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Email',
                                type: 'email',
                                error: !!_.email,
                                helperText: _.email ? _.email.message : ''
                              },
                              D('email')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return V('email', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      !t &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(p.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: N,
                            errors: _,
                            control: B
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
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: (0, y.jsx)(h.Z, { id: 'label.username' }),
                          sx: { my: 1 },
                          error: !!_.username,
                          helperText: _.username ? _.username.message : ''
                        },
                        D('username')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return V('username', e.target.value.trim());
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
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Password',
                                type: 'password',
                                error: !!_.password,
                                helperText: _.password ? _.password.message : ''
                              },
                              D('password')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return V('password', e.target.value.trim());
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
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Confirm Password',
                                type: 'password',
                                error: !!_.confirmPassword,
                                helperText: _.confirmPassword
                                  ? _.confirmPassword.message
                                  : ''
                              },
                              D('confirmPassword')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return V(
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
            !t &&
              !C &&
              (0, y.jsx)(o.Z, {
                type: 'submit',
                fullWidth: !0,
                variant: 'contained',
                sx: { mt: 3, mb: 2 },
                loading: W,
                children: 'Sign Up'
              })
          ]
        });
      };
    },
    645: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return le;
          }
        });
      var r = t(1413),
        i = t(4165),
        a = t(5861),
        s = t(9439),
        l = t(5574),
        o = t(4554),
        d = t(2791),
        u = t(1134),
        c = t(5048),
        m = t(6790),
        f = t(1827),
        h = t(5850),
        x = t(7837),
        p = t(4695),
        v = t(7590),
        Z = t(8409),
        g = t(7891),
        j = t(9419),
        b = t(4167),
        y = t(5674),
        I = t(5243),
        C = t(4349),
        w = t(184),
        P = I.Ry().shape({
          name: I.Z_().required('Name is required!'),
          roleId: I.Rx().required('Role is required!'),
          rate: I.Rx().required('Rate is required!'),
          currencyId: I.Rx().required('Currency is required!'),
          username: I.Z_().required('Username is required!'),
          parentAgentId: I.Z_().nullable()
        }),
        S = function (e) {
          var n,
            t,
            r,
            l = e.open,
            c = e.detail,
            m = e.onClose,
            h = e.refetch,
            I = e.hide,
            S = (0, x.p)(),
            A = S.notify,
            k = S.message,
            R = (0, d.useState)(!1),
            F = (0, s.Z)(R, 2),
            T = F[0],
            W = F[1],
            q = (0, f.h6)(),
            E = (0, s.Z)(q, 2),
            M = E[0],
            O = E[1].isLoading,
            z = (0, y.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== c && void 0 !== c && c.id)
              }
            ).data,
            D = (0, b.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== c && void 0 !== c && c.id)
              }
            ).data,
            L = (0, u.cI)({
              resolver: (0, p.X)(P),
              defaultValues: {
                name: '',
                roleId: 0,
                username: '',
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            U = L.register,
            B = L.setValue,
            V = L.reset,
            _ = L.handleSubmit,
            H = L.control,
            N = L.formState.errors;
          (0, d.useEffect)(
            function () {
              null !== c && void 0 !== c && c.id
                ? (B('name', c.name),
                  B('username', c.username),
                  B(
                    'rate',
                    Number(null === c || void 0 === c ? void 0 : c.rate)
                  ),
                  B('roleId', c.roleId),
                  B('currencyId', c.currencyId),
                  B(
                    'parentAgentId',
                    null === c || void 0 === c ? void 0 : c.parentAgentId
                  ))
                : V();
            },
            [c]
          );
          var K = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === c || void 0 === c || !c.id)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 4),
                              M({
                                id: c.id,
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
                            A({ message: k.UPDATED });
                          case 5:
                            h(), I(), V(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              A({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (t = e.t0.data) ||
                                  void 0 === t
                                    ? void 0
                                    : t.message) || k.ERROR,
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
            Y = (0, d.useMemo)(
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
            X = (0, d.useMemo)(
              function () {
                return null === D || void 0 === D
                  ? void 0
                  : D.map(function (e) {
                      return { id: e.id, name: e.name, value: e.id };
                    });
              },
              [D]
            );
          return (0, w.jsx)(g.Z, {
            title:
              null !== c && void 0 !== c && c.id
                ? 'Edit '.concat(c.name)
                : 'Add Agent',
            onClose: m,
            open: l,
            isLoading: O,
            onOk:
              null !== c && void 0 !== c && c.id
                ? _(K)
                : function () {
                    return W(!0);
                  },
            children:
              null !== c && void 0 !== c && c.id
                ? (0, w.jsx)(o.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, w.jsxs)('div', {
                      className: 'block',
                      children: [
                        (0, w.jsx)(v.n, {
                          label: (0, w.jsx)(C.Z, { id: 'label.username' }),
                          name: 'username',
                          sx: { my: 2 },
                          errors: N,
                          register: U,
                          disabled: !(null === c || void 0 === c || !c.id)
                        }),
                        (0, w.jsx)(v.n, {
                          label: (0, w.jsx)(C.Z, { id: 'label.name' }),
                          name: 'name',
                          errors: N,
                          register: U
                        }),
                        (0, w.jsx)(o.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: (0, w.jsx)(v.n, {
                            label: (0, w.jsx)(C.Z, { id: 'label.rate' }),
                            name: 'rate',
                            errors: N,
                            register: U
                          })
                        }),
                        (0, w.jsxs)(o.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: [
                            (0, w.jsx)(v.P, {
                              label: 'Role',
                              name: 'roleId',
                              control: H,
                              options: Y
                            }),
                            (0, w.jsx)(v.P, {
                              label: 'Currency',
                              name: 'currencyId',
                              control: H,
                              options: X
                            })
                          ]
                        }),
                        (0, w.jsx)(Z.R, {
                          control: H,
                          name: 'parentAgentId',
                          parent: {
                            id:
                              null === c ||
                              void 0 === c ||
                              null === (n = c.parent) ||
                              void 0 === n
                                ? void 0
                                : n.id,
                            name:
                              null === c ||
                              void 0 === c ||
                              null === (t = c.parent) ||
                              void 0 === t
                                ? void 0
                                : t.name,
                            value:
                              null === c ||
                              void 0 === c ||
                              null === (r = c.parent) ||
                              void 0 === r
                                ? void 0
                                : r.id
                          }
                        })
                      ]
                    })
                  })
                : (0, w.jsx)(j.Z, {
                    isSubmit: T,
                    setIsSubmit: function () {
                      return W(!1);
                    },
                    refetch: h,
                    onClose: m,
                    isAgentRegister: !0
                  })
          });
        },
        A = (0, d.memo)(S),
        k = t(8901),
        R = t(890),
        F = t(6151),
        T = t(8096),
        W = t(4925),
        q = t(9321),
        E = t(3786),
        M = t(5119),
        O = t(946),
        z = t(8673),
        D = t(3504),
        L = function () {
          var e = (0, x.d)(),
            n = e.visible,
            t = e.toggle,
            r = (0, x.d)(),
            i = (0, d.useState)(),
            a = (0, s.Z)(i, 2),
            l = a[0],
            u = a[1],
            c = (0, d.useState)(),
            m = (0, s.Z)(c, 2),
            f = m[0],
            h = m[1],
            p = (0, d.useState)(''),
            v = (0, s.Z)(p, 2),
            Z = v[0],
            g = v[1],
            j = (0, d.useState)({ id: '', ids: [] }),
            b = (0, s.Z)(j, 2),
            y = b[0],
            I = b[1],
            P = (0, D.lr)(),
            S = (0, s.Z)(P, 2),
            A = (S[0], S[1]);
          (0, d.useEffect)(function () {
            var e = localStorage.getItem('user');
            e && h(JSON.parse(e));
          }, []);
          var L = function (e, n) {
              g(n), u(e), t();
            },
            U = function (e) {
              I(e), r.toggle();
            };
          return {
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              {
                align: 'inherit',
                title: 'label.parent.name',
                name: 'agentParentName'
              },
              { align: 'inherit', title: 'label.affiliated.agent', name: '' },
              { align: 'inherit', title: 'label.rate', name: 'rate' },
              { align: 'right', title: 'label.balance', name: 'balance' },
              { align: 'right', title: 'label.loggedin', name: 'updatedAt' },
              {
                align: 'center',
                title: 'title.managements',
                name: 'management'
              },
              { align: 'right', title: 'label.actions' }
            ],
            visible: n,
            user: l,
            dialogType: Z,
            parentAgentIds: y,
            affiliatedAgentModal: r,
            tableBody: function (e) {
              var n, t;
              return [
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(R.Z, {
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
                    children: (0, w.jsx)(R.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        null !==
                          (n =
                            null === e ||
                            void 0 === e ||
                            null === (t = e.parent) ||
                            void 0 === t
                              ? void 0
                              : t.name) && void 0 !== n
                          ? n
                          : '-'
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, w.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    children: [
                      (0, w.jsx)(F.Z, {
                        variant: 'outlined',
                        onClick: function () {
                          return U({ ids: e.parentAgentIds, id: e.id });
                        },
                        children: (0, w.jsx)(R.Z, {
                          whiteSpace: 'nowrap',
                          fontWeight: 600,
                          children: 'Top'
                        })
                      }),
                      (0, w.jsx)(F.Z, {
                        variant: 'outlined',
                        color: 'success',
                        onClick: function () {
                          return (
                            (n = null === e || void 0 === e ? void 0 : e.id),
                            void A({ parentId: n })
                          );
                          var n;
                        },
                        children: (0, w.jsx)(R.Z, {
                          whiteSpace: 'nowrap',
                          fontWeight: 600,
                          children: 'Lower Part'
                        })
                      })
                    ]
                  })
                },
                {
                  align: 'left',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsxs)(R.Z, {
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
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(F.Z, {
                      variant: 'outlined',
                      startIcon: (0, w.jsx)(k.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(R.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.loggedIn) &&
                        (0, O.Z)(
                          (0, z.Z)(
                            null === e || void 0 === e ? void 0 : e.loggedIn
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, w.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    children: [
                      (0, w.jsx)(F.Z, {
                        variant: 'outlined',
                        startIcon: (0, w.jsx)(k.Z, {}),
                        onClick: function () {
                          return L(e, 'transaction');
                        },
                        disabled:
                          (null === f || void 0 === f ? void 0 : f.level) +
                            1 !==
                          e.level,
                        children: 'Payment'
                      }),
                      (0, w.jsx)(F.Z, {
                        variant: 'outlined',
                        color: 'success',
                        startIcon: (0, w.jsx)(k.Z, {}),
                        onClick: function () {
                          return L(e, 'vendor');
                        },
                        disabled:
                          (null === f || void 0 === f ? void 0 : f.level) +
                            1 !==
                          e.level,
                        children: 'Vendors'
                      })
                    ]
                  })
                }
              ];
            },
            tableFilter: function (e) {
              var n = e.status,
                t = e.dateFrom,
                r = e.dateTo;
              return [
                (0, w.jsx)(M.M, {
                  label: (0, w.jsx)(C.Z, { id: 'label.from' }),
                  onChange: t.onChange
                }),
                (0, w.jsx)(M.M, {
                  label: (0, w.jsx)(C.Z, { id: 'label.to' }),
                  onChange: r.onChange
                }),
                (0, w.jsxs)(T.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, w.jsx)(W.Z, {
                      id: 'isActive',
                      children: (0, w.jsx)(C.Z, { id: 'label.status' })
                    }),
                    (0, w.jsxs)(q.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, w.jsx)(C.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, w.jsx)(E.Z, {
                          value: '',
                          children: (0, w.jsx)(C.Z, { id: 'label.default' })
                        }),
                        (0, w.jsx)(E.Z, {
                          value: 'active',
                          children: (0, w.jsx)(C.Z, { id: 'label.active' })
                        }),
                        (0, w.jsx)(E.Z, {
                          value: 'disable',
                          children: (0, w.jsx)(C.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            toggle: t,
            onAffiliatedAgents: U
          };
        },
        U = t(4942),
        B = t(9709),
        V = t(1889),
        _ = t(8550),
        H = t(2302);
      function N(e) {
        var n = e.user,
          t = e.onUpdateToReset,
          l = (0, d.useState)({
            userId: '',
            amount: 0,
            type: 'user.add_balance',
            note: '',
            token: ''
          }),
          u = (0, s.Z)(l, 2),
          c = u[0],
          m = u[1],
          f = (0, x.p)(),
          h = f.notify,
          p = f.message;
        (0, d.useEffect)(
          function () {
            (c.userId = null === n || void 0 === n ? void 0 : n.id),
              m(function (e) {
                return (0, r.Z)((0, r.Z)({}, e), {}, { status: 'success' });
              });
          },
          [n]
        );
        var v = (0, H.Dx)({}),
          Z = (0, s.Z)(v, 2),
          g = Z[0],
          j = Z[1].isLoading,
          b = (function () {
            var e = (0, a.Z)(
              (0, i.Z)().mark(function e() {
                var a;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            g(
                              (0, r.Z)(
                                (0, r.Z)({}, c),
                                {},
                                { currencyId: n.currencyId }
                              )
                            ).unwrap()
                          );
                        case 3:
                          e.sent && t(!0), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            h({
                              message:
                                (null === e.t0 ||
                                void 0 === e.t0 ||
                                null === (a = e.t0.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.message) || p.ERROR,
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
        return (0, w.jsxs)(V.ZP, {
          container: !0,
          spacing: 2,
          children: [
            (0, w.jsx)(V.ZP, {
              item: !0,
              xs: 12,
              children: (0, w.jsx)(R.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, w.jsx)(C.Z, { id: 'title.add-transaction' })
              })
            }),
            (0, w.jsxs)(o.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              paddingLeft: '18px',
              gap: '12px',
              marginTop: '8px',
              children: [
                (0, w.jsx)(_.Z, {
                  label: 'Insert the amount here',
                  variant: 'outlined',
                  fullWidth: !0,
                  onInput: function (e) {
                    return (
                      (n = Number(e.target.value)),
                      (t = 'amount'),
                      void m(function (e) {
                        return (0,
                        r.Z)((0, r.Z)({}, e), {}, (0, U.Z)({}, ''.concat(t), n));
                      })
                    );
                    var n, t;
                  }
                }),
                (0, w.jsx)(B.Z, {
                  loading: j,
                  onClick: b,
                  size: 'large',
                  variant: 'contained',
                  sx: { width: 120 },
                  children: (0, w.jsxs)(o.Z, {
                    children: [
                      (0, w.jsx)('span', { children: '+ \xa0' }),
                      (0, w.jsx)('span', { children: 'Add' })
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      var K = t(8029),
        Y = t(1918),
        X = t(7945),
        J = { PaperProps: { style: { maxHeight: 224, width: 350 } } };
      function Q(e) {
        var n = e.user,
          t = e.onUpdateToReset,
          l = (0, d.useState)({
            userId: '',
            amount: 0,
            type: 'user.add_balance',
            note: '',
            token: ''
          }),
          u = (0, s.Z)(l, 2),
          c = u[0],
          m = u[1];
        (0, d.useEffect)(
          function () {
            (c.userId = null === n || void 0 === n ? void 0 : n.id),
              m(function (e) {
                return (0, r.Z)((0, r.Z)({}, e), {}, { status: 'success' });
              });
          },
          [n]
        );
        var f = (0, X.sj)({ agentId: n.id }),
          h = f.data,
          x = f.refetch;
        (0, d.useEffect)(
          function () {
            if (h) {
              g(h.data);
              var e = h.data.filter(function (e) {
                return null !== e.selectedVendors;
              });
              console.log(e), I(e);
            }
          },
          [h]
        );
        var p = (0, d.useState)([]),
          v = (0, s.Z)(p, 2),
          Z = v[0],
          g = v[1],
          j = (0, d.useState)([]),
          b = (0, s.Z)(j, 2),
          y = b[0],
          I = b[1],
          P = (0, X.is)(),
          S = (0, s.Z)(P, 1)[0],
          A = (function () {
            var e = (0, a.Z)(
              (0, i.Z)().mark(function e() {
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          S({ agentId: n.id, selectedVendors: y }).unwrap()
                        );
                      case 2:
                        e.sent.message && (x(), t(!0));
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
        return (0, w.jsxs)(V.ZP, {
          container: !0,
          spacing: 2,
          padding: 2,
          children: [
            (0, w.jsx)(V.ZP, {
              item: !0,
              xs: 12,
              children: (0, w.jsx)(R.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, w.jsx)(C.Z, { id: 'title.add-vendor' })
              })
            }),
            (0, w.jsx)(o.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100vh',
              children: (0, w.jsxs)(T.Z, {
                sx: { m: 1 },
                children: [
                  (0, w.jsx)(W.Z, {
                    id: 'demo-multiple-chip-label',
                    children: 'Available Vendors'
                  }),
                  (0, w.jsx)(q.Z, {
                    sx: { width: '100%' },
                    labelId: 'demo-multiple-chip-label',
                    id: 'demo-multiple-chip',
                    multiple: !0,
                    value: y,
                    onChange: function (e) {
                      var n = e.target.value;
                      I(n);
                    },
                    input: (0, w.jsx)(K.Z, {
                      id: 'select-multiple-chip',
                      label: 'Available Vendors'
                    }),
                    renderValue: function (e) {
                      return (0, w.jsx)(o.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: e.map(function (e) {
                          return (0, w.jsx)(Y.Z, { label: e.name }, e.id);
                        })
                      });
                    },
                    MenuProps: J,
                    children: Z.map(function (e) {
                      return (0,
                      w.jsx)(E.Z, { value: e, children: e.name }, e.id);
                    })
                  })
                ]
              })
            }),
            (0, w.jsx)(B.Z, {
              onClick: A,
              size: 'large',
              variant: 'contained',
              sx: { width: '100%' },
              children: (0, w.jsxs)(o.Z, {
                children: [
                  (0, w.jsx)('span', { children: '+ \xa0' }),
                  (0, w.jsx)('span', { children: 'Add' })
                ]
              })
            })
          ]
        });
      }
      var $ = t(4721),
        G = t(493),
        ee = t(5021),
        ne = t(7639),
        te = t(6871),
        re = t(7395),
        ie = function (e) {
          var n = e.data,
            t = e.open,
            r = e.onClose,
            i = (0, te.s0)(),
            a = (0, d.useState)({}),
            l = (0, s.Z)(a, 2),
            u = l[0],
            c = l[1],
            m = function () {
              c({});
            },
            f = (0, d.useMemo)(
              function () {
                return (0, w.jsxs)('div', {
                  style: { height: '450px', overflow: 'auto' },
                  children: [
                    (0, w.jsxs)(o.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, w.jsxs)(re.Z, {
                          color: 'success',
                          children: ['Agents of ', u.name]
                        }),
                        (0, w.jsx)(F.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Correction'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          onClick: function () {
                            i('/management/agents?parentId='.concat(u.id)),
                              c({});
                          },
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'SubList'
                        }),
                        (0, w.jsx)(F.Z, {
                          onClick: function () {
                            return i('/management/transactions/'.concat(u.id));
                          },
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Payment details'
                        }),
                        (0, w.jsx)(F.Z, {
                          onClick: function () {
                            return i(
                              '/management/transactions/'.concat(
                                u.id,
                                '?type=charging'
                              )
                            );
                          },
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Charging history'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Daily profit statistics'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Statistics by game'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Pot distribution statistics'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Maximum bet amount limit'
                        }),
                        (0, w.jsx)(F.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Maximum winning amount limited'
                        })
                      ]
                    }),
                    (0, w.jsx)($.Z, {}),
                    (0, w.jsxs)(o.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, w.jsx)(re.Z, {
                          color: 'success',
                          children: 'Developer'
                        }),
                        (0, w.jsx)(F.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'API error log'
                        })
                      ]
                    }),
                    (0, w.jsx)($.Z, {}),
                    (0, w.jsxs)(o.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, w.jsx)(re.Z, {
                          color: 'success',
                          children: 'User'
                        }),
                        (0, w.jsx)(F.Z, {
                          onClick: function () {
                            return i(
                              '/management/users?parentId='.concat(u.id)
                            );
                          },
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'User List'
                        }),
                        (0, w.jsx)(F.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Payment details'
                        })
                      ]
                    })
                  ]
                });
              },
              [u]
            );
          return (0, w.jsx)(g.Z, {
            title: 'AffiliatedAgentModal',
            open: t,
            onClose: function () {
              r(), m();
            },
            children: (0, w.jsx)(G.Z, {
              children: n.map(function (e, n) {
                return (0, w.jsx)(
                  ee.ZP,
                  {
                    sx: { my: 2 },
                    children: (0, w.jsx)(ne.Z, {
                      onClose: m,
                      open:
                        (null === u || void 0 === u ? void 0 : u.id) === e.id,
                      disableFocusListener: !0,
                      disableHoverListener: !0,
                      disableTouchListener: !0,
                      title: f,
                      placement: 'right',
                      children: (0, w.jsxs)(o.Z, {
                        onClick: function () {
                          c(e);
                        },
                        children: [
                          (0, w.jsx)(R.Z, { mb: 1, children: e.name }),
                          (0, w.jsxs)(re.Z, {
                            color: 'success',
                            children: ['@', e.username]
                          })
                        ]
                      })
                    })
                  },
                  n
                );
              })
            })
          });
        },
        ae = 'title.agents-management',
        se = function (e, n) {
          return null === e || void 0 === e ? void 0 : e.includes(n);
        },
        le = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: ae }
            ],
            n = (0, x.d)(),
            t = n.visible,
            p = n.hide,
            v = n.show,
            Z = (0, u.cI)().reset,
            g = (0, x.p)(),
            j = g.notify,
            b = g.message,
            y = L(),
            I = y.tableHeader,
            C = y.visible,
            P = y.user,
            S = y.dialogType,
            k = y.affiliatedAgentModal,
            R = y.parentAgentIds,
            F = y.tableBody,
            T = y.tableFilter,
            W = y.toggle,
            q = (0, d.useState)([]),
            E = (0, s.Z)(q, 2),
            M = E[0],
            O = E[1],
            z = (0, d.useState)(),
            U = (0, s.Z)(z, 2),
            B = U[0],
            V = U[1],
            _ = (0, d.useState)([]),
            H = (0, s.Z)(_, 2),
            K = H[0],
            Y = H[1],
            X = (0, d.useState)({
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
            J = (0, s.Z)(X, 2),
            $ = J[0],
            G = J[1],
            ee = (0, D.lr)(),
            ne = (0, s.Z)(ee, 1)[0],
            te = (0, c.v9)(function (e) {
              return e.common;
            }).permissions,
            re = (0, f.kC)(),
            le = (0, s.Z)(re, 1)[0],
            oe = (0, f.Lp)(),
            de = (0, s.Z)(oe, 2),
            ue = de[0],
            ce = de[1].isLoading,
            me = (0, f.aN)(
              {
                id: 1,
                page: $.page,
                size: $.size,
                search: $.search,
                dateFrom: $.dateFrom,
                dateTo: $.dateTo
              },
              { refetchOnMountOrArgChange: !0, skip: !se(te, 'get') }
            ),
            fe = me.data,
            he = me.isFetching,
            xe = me.refetch,
            pe = function (e) {
              !0 === e && (j({ message: b.UPDATED }), W(), p(), xe(), Z());
            };
          (0, d.useEffect)(
            function () {
              if (fe) {
                var e = ne.get('parentId');
                if (e) {
                  var n = fe.data.data.filter(function (n) {
                    return n.parentAgentId === e;
                  });
                  O(function () {
                    var e;
                    return (0,
                    h.TY)(n, null === (e = I[$.sortBy]) || void 0 === e ? void 0 : e.name, $.sortDirection);
                  });
                } else
                  O(function () {
                    var e;
                    return (0,
                    h.TY)(fe.data.data, null === (e = I[$.sortBy]) || void 0 === e ? void 0 : e.name, $.sortDirection);
                  });
              }
            },
            [fe, $, ne]
          ),
            (0, d.useEffect)(
              function () {
                null !== R && void 0 !== R && R.ids.length && M.length
                  ? Y(function () {
                      return M.filter(function (e) {
                        return R.ids.some(function (n) {
                          return e.id === n || e.id === R.id;
                        });
                      });
                    })
                  : Y([]);
              },
              [R, M]
            );
          var ve = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), ue({ id: n }).unwrap()
                            );
                          case 3:
                            j({ message: b.DELETED }), xe(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              j({
                                message: e.t0.data.message || b.ERROR,
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
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), le({ id: n }).unwrap()
                            );
                          case 3:
                            (t = e.sent), v(), V(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              j({ message: b.ERROR, type: 'error' });
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
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(m.Z, {
                title: ae,
                data: M,
                totalItems:
                  null === fe || void 0 === fe ? void 0 : fe.data.totalItems,
                tableHeader: I,
                tableBody: F,
                headerTitle: ae,
                breadcrumbs: e,
                onOpenModal:
                  se(te, 'create') &&
                  function () {
                    v(), V(null);
                  },
                isLoading: he || ce,
                onDelete: se(te, 'delete') && ve,
                onUpdate: se(te, 'update') && Ze,
                pagination: $,
                onPagination: G,
                tableFilter: T({
                  status: {
                    value: $.status,
                    onChange: function (e) {
                      return G((0, r.Z)((0, r.Z)({}, $), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: $.dateFrom,
                    onChange: function (e) {
                      return G(
                        (0, r.Z)(
                          (0, r.Z)({}, $),
                          {},
                          { dateFrom: (0, h.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: $.dateTo,
                    onChange: function (e) {
                      return G(
                        (0, r.Z)(
                          (0, r.Z)({}, $),
                          {},
                          { dateTo: (0, h.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, w.jsx)(A, {
                open: t,
                detail: B,
                onClose: p,
                refetch: xe,
                hide: p
              }),
              (0, w.jsx)(l.Z, {
                open: C,
                onClose: W,
                children: (0, w.jsx)(o.Z, {
                  component: 'form',
                  padding: 2,
                  children:
                    'transaction' === S
                      ? (0, w.jsx)(N, { user: P, onUpdateToReset: pe })
                      : (0, w.jsx)(Q, { user: P, onUpdateToReset: pe })
                })
              }),
              (0, w.jsx)(ie, { onClose: k.toggle, open: k.visible, data: K })
            ]
          });
        };
    },
    8901: function (e, n, t) {
      var r = t(4836);
      n.Z = void 0;
      var i = r(t(5649)),
        a = t(184),
        s = (0, i.default)(
          (0, a.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z'
          }),
          'PaidOutlined'
        );
      n.Z = s;
    },
    3329: function (e, n, t) {
      var r = t(4836);
      n.Z = void 0;
      var i = r(t(5649)),
        a = t(184),
        s = (0, i.default)(
          (0, a.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = s;
    }
  }
]);
//# sourceMappingURL=645.7e843716.chunk.js.map
