'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [991],
  {
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
        g = r(1927),
        Z = r(5674),
        b = r(7837),
        j = r(5243),
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
          R = void 0 !== P && P,
          k = e.setIsSubmit,
          S = e.refetch,
          C = e.onClose,
          A = (0, g.l4)(),
          T = (0, s.Z)(A, 2),
          q = T[0],
          F = T[1].isLoading,
          E = (0, b.p)(),
          M = E.notify,
          O = E.message,
          W = (0, h.s0)(),
          B = (0, p.cI)({
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
          N = B.register,
          D = B.handleSubmit,
          _ = B.reset,
          z = B.control,
          U = B.setValue,
          V = B.formState.errors;
        (0, m.useEffect)(
          function () {
            R && (D(G)(), R && k());
          },
          [R]
        );
        var L = (0, Z.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
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
                          return (e.prev = 0), (e.next = 3), q(n).unwrap();
                        case 3:
                          (t = e.sent) &&
                            'CREATED' === t.message &&
                            (_(),
                            M({ message: 'Registered Successfully' }),
                            r || I ? (S(), C()) : W('/login')),
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
                            M({
                              message: 'Duplicated username or email',
                              type: 'error'
                            })
                          );
                        case 11:
                          return e.abrupt(
                            'return',
                            M({ message: O.ERROR, type: 'error' })
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
          onSubmit: D(G),
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
                          control: z,
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
                            control: z
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
              !I &&
              (0, y.jsx)(l.Z, {
                type: 'submit',
                fullWidth: !0,
                variant: 'contained',
                sx: { mt: 3, mb: 2 },
                loading: F,
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
        g = r(8409),
        Z = r(7891),
        b = r(9419),
        j = r(4167),
        y = r(5674),
        w = r(5243),
        I = r(4349),
        P = r(184),
        R = w
          .Ry()
          .shape({
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
            S = k.notify,
            C = k.message,
            A = (0, d.useState)(!1),
            T = (0, s.Z)(A, 2),
            q = T[0],
            F = T[1],
            E = (0, p.h6)(),
            M = (0, s.Z)(E, 2),
            O = M[0],
            W = M[1].isLoading,
            B = (0, y.ev)(
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
            D = (0, c.cI)({
              resolver: (0, f.X)(R),
              defaultValues: {
                name: '',
                roleId: 0,
                username: '',
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            _ = D.register,
            z = D.setValue,
            U = D.reset,
            V = D.handleSubmit,
            L = D.control,
            H = D.formState.errors;
          (0, d.useEffect)(
            function () {
              null !== u && void 0 !== u && u.id
                ? (z('name', u.name),
                  z('username', u.username),
                  z(
                    'rate',
                    Number(null === u || void 0 === u ? void 0 : u.rate)
                  ),
                  z('roleId', u.roleId),
                  z('currencyId', u.currencyId),
                  z(
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
                              O({
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
                            S({ message: C.UPDATED });
                          case 5:
                            v(), w(), U(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              S({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (r = e.t0.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.message) || C.ERROR,
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
                return null === B ||
                  void 0 === B ||
                  null === (e = B.data) ||
                  void 0 === e
                  ? void 0
                  : e.map(function (e) {
                      return { id: e.id, name: e.name, value: e.id };
                    });
              },
              [B]
            ),
            X = (0, d.useMemo)(
              function () {
                return null === N || void 0 === N
                  ? void 0
                  : N.map(function (e) {
                      return { id: e.id, name: e.name, value: e.id };
                    });
              },
              [N]
            );
          return (0, P.jsx)(Z.Z, {
            title:
              null !== u && void 0 !== u && u.id
                ? 'Edit '.concat(u.name)
                : 'Add Agent',
            onClose: m,
            open: o,
            isLoading: W,
            onOk:
              null !== u && void 0 !== u && u.id
                ? V(G)
                : function () {
                    return F(!0);
                  },
            children:
              null !== u && void 0 !== u && u.id
                ? (0, P.jsx)(l.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, P.jsxs)('div', {
                      className: 'block',
                      children: [
                        (0, P.jsx)(x.n, {
                          label: (0, P.jsx)(I.Z, { id: 'label.username' }),
                          name: 'username',
                          sx: { my: 2 },
                          errors: H,
                          register: _,
                          disabled: !(null === u || void 0 === u || !u.id)
                        }),
                        (0, P.jsx)(x.n, {
                          label: (0, P.jsx)(I.Z, { id: 'label.name' }),
                          name: 'name',
                          errors: H,
                          register: _
                        }),
                        (0, P.jsx)(l.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: (0, P.jsx)(x.n, {
                            label: (0, P.jsx)(I.Z, { id: 'label.rate' }),
                            name: 'rate',
                            errors: H,
                            register: _
                          })
                        }),
                        (0, P.jsxs)(l.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: [
                            (0, P.jsx)(x.P, {
                              label: 'Role',
                              name: 'roleId',
                              control: L,
                              options: $
                            }),
                            (0, P.jsx)(x.P, {
                              label: 'Currency',
                              name: 'currencyId',
                              control: L,
                              options: X
                            })
                          ]
                        }),
                        (0, P.jsx)(g.R, {
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
                : (0, P.jsx)(b.Z, {
                    isSubmit: q,
                    setIsSubmit: function () {
                      return F(!1);
                    },
                    refetch: v,
                    onClose: m,
                    isAgentRegister: !0
                  })
          });
        },
        S = (0, d.memo)(k),
        C = r(5119),
        A = r(890),
        T = r(6151),
        q = r(6314),
        F = r(8096),
        E = r(4925),
        M = r(9321),
        O = r(3786),
        W = r(946),
        B = r(8673),
        N = r(8901),
        D = function () {
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
          var g = function (e, n) {
            x(n), o(e), r();
          };
          return {
            tableBody: function (e) {
              var n, r;
              return [
                {
                  align: 'inherit',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(A.Z, {
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
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(A.Z, {
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
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsxs)(A.Z, {
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
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(T.Z, {
                      variant: 'outlined',
                      startIcon: (0, P.jsx)(N.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(A.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.loggedIn) &&
                        (0, W.Z)(
                          (0, B.Z)(
                            null === e || void 0 === e ? void 0 : e.loggedIn
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsxs)(q.Z, {
                      spacing: { xs: 1, sm: 2 },
                      direction: 'row',
                      useFlexGap: !0,
                      flexWrap: 'wrap',
                      children: [
                        (0, P.jsx)(T.Z, {
                          variant: 'outlined',
                          startIcon: (0, P.jsx)(N.Z, {}),
                          onClick: function () {
                            return g(e, 'transaction');
                          },
                          disabled:
                            (null === c || void 0 === c ? void 0 : c.level) +
                              1 !==
                            e.level,
                          children: 'Payment'
                        }),
                        (0, P.jsx)(T.Z, {
                          variant: 'outlined',
                          color: 'success',
                          startIcon: (0, P.jsx)(N.Z, {}),
                          onClick: function () {
                            return g(e, 'vendor');
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
              { align: 'right', title: 'label.loggedin', name: 'updatedAt' },
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
                (0, P.jsx)(C.M, {
                  label: (0, P.jsx)(I.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, P.jsx)(C.M, {
                  label: (0, P.jsx)(I.Z, { id: 'label.to' }),
                  onChange: t.onChange
                }),
                (0, P.jsxs)(F.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, P.jsx)(E.Z, {
                      id: 'isActive',
                      children: (0, P.jsx)(I.Z, { id: 'label.status' })
                    }),
                    (0, P.jsxs)(M.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, P.jsx)(I.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, P.jsx)(O.Z, {
                          value: '',
                          children: (0, P.jsx)(I.Z, { id: 'label.default' })
                        }),
                        (0, P.jsx)(O.Z, {
                          value: 'active',
                          children: (0, P.jsx)(I.Z, { id: 'label.active' })
                        }),
                        (0, P.jsx)(O.Z, {
                          value: 'disable',
                          children: (0, P.jsx)(I.Z, { id: 'label.disable' })
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
        _ = r(4942),
        z = r(9709),
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
          g = (0, s.Z)(x, 2),
          Z = g[0],
          b = g[1].isLoading,
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
                            Z(
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
        return (0, P.jsxs)(U.ZP, {
          container: !0,
          spacing: 2,
          children: [
            (0, P.jsx)(U.ZP, {
              item: !0,
              xs: 12,
              children: (0, P.jsx)(A.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, P.jsx)(I.Z, { id: 'title.add-transaction' })
              })
            }),
            (0, P.jsxs)(l.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              paddingLeft: '18px',
              gap: '12px',
              marginTop: '8px',
              children: [
                (0, P.jsx)(V.Z, {
                  label: 'Insert the amount here',
                  variant: 'outlined',
                  fullWidth: !0,
                  onInput: function (e) {
                    return (
                      (n = Number(e.target.value)),
                      (r = 'amount'),
                      void m(function (e) {
                        return (0,
                        t.Z)((0, t.Z)({}, e), {}, (0, _.Z)({}, ''.concat(r), n));
                      })
                    );
                    var n, r;
                  }
                }),
                (0, P.jsx)(z.Z, {
                  loading: b,
                  onClick: j,
                  size: 'large',
                  variant: 'contained',
                  sx: { width: 120 },
                  children: (0, P.jsxs)(l.Z, {
                    children: [
                      (0, P.jsx)('span', { children: '+ \xa0' }),
                      (0, P.jsx)('span', { children: 'Add' })
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      var G = r(8029),
        $ = r(1918),
        X = r(7945),
        Y = { PaperProps: { style: { maxHeight: 224, width: 350 } } };
      function J(e) {
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
        var p = (0, X.sj)({ agentId: n.id }),
          v = p.data,
          h = p.refetch;
        (0, d.useEffect)(
          function () {
            if (v) {
              Z(v);
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
          g = x[0],
          Z = x[1],
          b = (0, d.useState)([]),
          j = (0, s.Z)(b, 2),
          y = j[0],
          w = j[1],
          R = (0, X.is)(),
          k = (0, s.Z)(R, 1)[0],
          S = (function () {
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
        return (0, P.jsxs)(U.ZP, {
          container: !0,
          spacing: 2,
          padding: 2,
          children: [
            (0, P.jsx)(U.ZP, {
              item: !0,
              xs: 12,
              children: (0, P.jsx)(A.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, P.jsx)(I.Z, { id: 'title.add-vendor' })
              })
            }),
            (0, P.jsx)(l.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100vh',
              children: (0, P.jsxs)(F.Z, {
                sx: { m: 1 },
                children: [
                  (0, P.jsx)(E.Z, {
                    id: 'demo-multiple-chip-label',
                    children: 'Available Vendors'
                  }),
                  (0, P.jsx)(M.Z, {
                    sx: { width: '100%' },
                    labelId: 'demo-multiple-chip-label',
                    id: 'demo-multiple-chip',
                    multiple: !0,
                    value: y,
                    onChange: function (e) {
                      var n = e.target.value;
                      w(n);
                    },
                    input: (0, P.jsx)(G.Z, {
                      id: 'select-multiple-chip',
                      label: 'Available Vendors'
                    }),
                    renderValue: function (e) {
                      return (0, P.jsx)(l.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: e.map(function (e) {
                          return (0, P.jsx)($.Z, { label: e.name }, e.id);
                        })
                      });
                    },
                    MenuProps: Y,
                    children: g.map(function (e) {
                      return (0,
                      P.jsx)(O.Z, { value: e, children: e.name }, e.id);
                    })
                  })
                ]
              })
            }),
            (0, P.jsx)(z.Z, {
              onClick: S,
              size: 'large',
              variant: 'contained',
              sx: { width: '100%' },
              children: (0, P.jsxs)(l.Z, {
                children: [
                  (0, P.jsx)('span', { children: '+ \xa0' }),
                  (0, P.jsx)('span', { children: 'Add' })
                ]
              })
            })
          ]
        });
      }
      var K = 'title.agents-management',
        Q = function (e, n) {
          return null === e || void 0 === e ? void 0 : e.includes(n);
        },
        ee = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: K }
            ],
            n = (0, h.d)(),
            r = n.visible,
            f = n.hide,
            x = n.show,
            g = (0, c.cI)().reset,
            Z = (0, h.p)(),
            b = Z.notify,
            j = Z.message,
            y = D(),
            w = y.tableBody,
            I = y.tableHeader,
            R = y.tableFilter,
            k = y.visible,
            C = y.toggle,
            A = y.user,
            T = y.dialogType,
            q = (0, d.useState)([]),
            F = (0, s.Z)(q, 2),
            E = F[0],
            M = F[1],
            O = (0, d.useState)(),
            W = (0, s.Z)(O, 2),
            B = W[0],
            N = W[1],
            _ = (0, d.useState)({
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
            z = (0, s.Z)(_, 2),
            U = z[0],
            V = z[1],
            L = (0, u.v9)(function (e) {
              return e.common;
            }).permissions,
            G = (0, p.kC)(),
            $ = (0, s.Z)(G, 1)[0],
            X = (0, p.Lp)(),
            Y = (0, s.Z)(X, 2),
            ee = Y[0],
            ne = Y[1].isLoading,
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
              !0 === e && (b({ message: j.UPDATED }), C(), f(), ie(), g());
            };
          (0, d.useEffect)(
            function () {
              te &&
                M(function () {
                  var e;
                  return (0,
                  v.TY)(te.data.data, null === (e = I[U.sortBy]) || void 0 === e ? void 0 : e.name, U.sortDirection);
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
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(m.Z, {
                title: K,
                data: E,
                totalItems:
                  null === te || void 0 === te ? void 0 : te.data.totalItems,
                tableHeader: I,
                tableBody: w,
                headerTitle: K,
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
                tableFilter: R({
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
              (0, P.jsx)(S, {
                open: r,
                detail: B,
                onClose: f,
                refetch: ie,
                hide: f
              }),
              (0, P.jsx)(o.Z, {
                open: k,
                onClose: C,
                children: (0, P.jsx)(l.Z, {
                  component: 'form',
                  padding: 2,
                  children:
                    'transaction' === T
                      ? (0, P.jsx)(H, { user: A, onUpdateToReset: se })
                      : (0, P.jsx)(J, { user: A, onUpdateToReset: se })
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
    3329: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var a = t(r(5649)),
        i = r(184),
        s = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
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
        g = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
          'className',
          'useFlexGap'
        ],
        Z = (0, v.Z)(),
        b = (0, c.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        });
      function j(e) {
        return (0, m.Z)({ props: e, name: 'MuiStack', defaultTheme: Z });
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
      var I = r(6934),
        P = r(1402),
        R = (function () {
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
                Z = t.spacing,
                b = void 0 === Z ? 0 : Z,
                j = t.divider,
                w = t.children,
                I = t.className,
                P = t.useFlexGap,
                R = void 0 !== P && P,
                k = (0, a.Z)(t, g),
                S = { direction: f, spacing: b, useFlexGap: R },
                C = (0, d.Z)(
                  { root: ['root'] },
                  function (e) {
                    return (0, u.Z)(m, e);
                  },
                  {}
                );
              return (0,
              x.jsx)(v, (0, i.Z)({ as: c, ownerState: S, ref: n, className: (0, o.Z)(C.root, I) }, k, { children: j ? y(w, j) : w }));
            });
          return h;
        })({
          createStyledComponent: (0, I.ZP)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: function (e, n) {
              return n.root;
            }
          }),
          useThemeProps: function (e) {
            return (0, P.Z)({ props: e, name: 'MuiStack' });
          }
        }),
        k = R;
    }
  }
]);
//# sourceMappingURL=991.f62d26aa.chunk.js.map
