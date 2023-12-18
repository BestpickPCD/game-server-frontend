'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [917],
  {
    9419: function (e, n, r) {
      var t = r(1413),
        a = r(4165),
        i = r(5861),
        s = r(9439),
        l = r(4695),
        o = r(9709),
        d = r(4554),
        u = r(1889),
        c = r(8550),
        m = r(2791),
        h = r(1134),
        v = r(4349),
        g = r(6871),
        x = r(7590),
        p = r(8409),
        Z = r(1927),
        f = r(5674),
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
          A = e.isSubmit,
          P = void 0 !== A && A,
          C = e.setIsSubmit,
          R = e.refetch,
          k = e.onClose,
          q = (0, Z.l4)(),
          S = (0, s.Z)(q, 2),
          F = S[0],
          T = S[1].isLoading,
          E = (0, b.p)(),
          O = E.notify,
          _ = E.message,
          W = (0, g.s0)(),
          B = (0, h.cI)({
            resolver: (0, l.X)(w),
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
          D = B.register,
          M = B.handleSubmit,
          U = B.reset,
          L = B.control,
          z = B.setValue,
          H = B.formState.errors;
        (0, m.useEffect)(
          function () {
            P && (M(X)(), P && C());
          },
          [P]
        );
        var N = (0, f.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
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
          X = (function () {
            var e = (0, i.Z)(
              (0, a.Z)().mark(function e(n) {
                var t;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), F(n).unwrap();
                        case 3:
                          (t = e.sent) &&
                            'CREATED' === t.message &&
                            (U(),
                            O({ message: 'Registered Successfully' }),
                            r || I ? (R(), k()) : W('/login')),
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
                            O({ message: _.ERROR, type: 'error' })
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
          onSubmit: M(X),
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
                          error: !!H.name,
                          helperText: H.name ? H.name.message : ''
                        },
                        D('name')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return z('name', e.target.value.trim());
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
                        children: (0, y.jsx)(p.R, {
                          control: L,
                          name: 'parentAgentId',
                          errors: H
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
                                  error: !!H.rate,
                                  helperText: H.rate ? H.rate.message : ''
                                },
                                D('rate')
                              ),
                              {},
                              {
                                onBlur: function (e) {
                                  return z(
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
                                error: !!H.email,
                                helperText: H.email ? H.email.message : ''
                              },
                              D('email')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return z('email', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      !r &&
                        (0, y.jsx)(u.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(x.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: V,
                            errors: H,
                            control: L
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
                          error: !!H.username,
                          helperText: H.username ? H.username.message : ''
                        },
                        D('username')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return z('username', e.target.value.trim());
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
                                error: !!H.password,
                                helperText: H.password ? H.password.message : ''
                              },
                              D('password')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return z('password', e.target.value.trim());
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
                                error: !!H.confirmPassword,
                                helperText: H.confirmPassword
                                  ? H.confirmPassword.message
                                  : ''
                              },
                              D('confirmPassword')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return z(
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
                loading: T,
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
            return K;
          }
        });
      var t = r(4942),
        a = r(4165),
        i = r(5861),
        s = r(1413),
        l = r(9439),
        o = r(2791),
        d = r(6790),
        u = r(4222),
        c = r(7837),
        m = r(1134),
        h = r(4695),
        v = r(4554),
        g = r(1889),
        x = r(6314),
        p = r(5523),
        Z = r(9955),
        f = r(4349),
        b = r(7590),
        j = r(8409),
        y = r(7891),
        w = r(9419),
        I = r(5674),
        A = r(4167),
        P = r(5243),
        C = r(184),
        R = P.Ry().shape({
          name: P.Z_().required('Last name is required!'),
          email: P.Z_().required('Email is required!'),
          roleId: P.Rx(),
          currencyId: P.Rx().required('Currency is required!'),
          isActive: P.O7(),
          username: P.Z_().required('Username is required!'),
          parentAgentId: P.Z_().nullable()
        }),
        k = function (e) {
          var n = e.open,
            r = e.detail,
            t = e.onClose,
            s = e.refetch,
            d = e.hide,
            P = (0, c.p)(),
            k = P.notify,
            q = P.message,
            S = (0, o.useState)(!1),
            F = (0, l.Z)(S, 2),
            T = F[0],
            E = F[1],
            O = (0, u.kD)(),
            _ = (0, l.Z)(O, 2),
            W = _[0],
            B = _[1].isLoading,
            D = (0, I.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== r && void 0 !== r && r.id)
              }
            ).data,
            M = (0, A.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== r && void 0 !== r && r.id)
              }
            ).data,
            U = (0, m.cI)({
              resolver: (0, h.X)(R),
              defaultValues: {
                name: '',
                email: '',
                roleId: 2,
                username: '',
                isActive: !1,
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            L = U.register,
            z = U.setValue,
            H = U.reset,
            N = U.handleSubmit,
            V = U.control,
            X = U.formState.errors;
          (0, o.useEffect)(
            function () {
              var e, n;
              null !== r && void 0 !== r && r.id
                ? (z('name', r.name),
                  z('username', r.username),
                  z('email', r.email),
                  z('isActive', r.isActive),
                  z(
                    'roleId',
                    null === r ||
                      void 0 === r ||
                      null === (e = r.role) ||
                      void 0 === e
                      ? void 0
                      : e.id
                  ),
                  z(
                    'currencyId',
                    null === r ||
                      void 0 === r ||
                      null === (n = r.currency) ||
                      void 0 === n
                      ? void 0
                      : n.id
                  ),
                  z(
                    'parentAgentId',
                    null === r || void 0 === r ? void 0 : r.parentAgentId
                  ))
                : H();
            },
            [r]
          );
          var Y = (function () {
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
                              W({
                                id: r.id,
                                body: {
                                  name: n.name,
                                  email: n.email,
                                  roleId: n.roleId,
                                  isActive: n.isActive,
                                  currencyId: n.currencyId,
                                  parentAgentId: n.parentAgentId
                                }
                              }).unwrap()
                            );
                          case 4:
                            k({ message: q.UPDATED });
                          case 5:
                            s(), d(), H(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              k({ message: q.ERROR, type: 'error' });
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
            J =
              ((0, o.useMemo)(
                function () {
                  var e;
                  return null === D ||
                    void 0 === D ||
                    null === (e = D.data) ||
                    void 0 === e
                    ? void 0
                    : e.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [D]
              ),
              (0, o.useMemo)(
                function () {
                  return null === M || void 0 === M
                    ? void 0
                    : M.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [M]
              ));
          return (0, C.jsx)(y.Z, {
            title:
              null !== r && void 0 !== r && r.id
                ? 'Edit '.concat(r.name)
                : 'Add User',
            onClose: t,
            open: n,
            isLoading: B,
            onOk:
              null !== r && void 0 !== r && r.id
                ? N(Y)
                : function () {
                    return E(!0);
                  },
            children:
              null !== r && void 0 !== r && r.id
                ? (0, C.jsx)(v.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, C.jsx)('div', {
                      className: 'block',
                      children: (0, C.jsxs)(g.ZP, {
                        container: !0,
                        spacing: 2,
                        mt: 1,
                        children: [
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 8,
                            children: (0, C.jsx)(b.n, {
                              label: (0, C.jsx)(f.Z, { id: 'label.username' }),
                              name: 'username',
                              errors: X,
                              register: L,
                              disabled: !(null === r || void 0 === r || !r.id)
                            })
                          }),
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, C.jsx)(x.Z, {
                              spacing: 2,
                              justifyContent: 'center',
                              alignItems: 'center',
                              children: (0, C.jsx)(p.Z, {
                                label: 'Active',
                                control: (0, C.jsx)(Z.Z, {
                                  name: 'isActive',
                                  defaultChecked: !(
                                    null === r ||
                                    void 0 === r ||
                                    !r.isActive
                                  ),
                                  onChange: function (e) {
                                    var n = e.target.checked;
                                    z('isActive', n);
                                  }
                                })
                              })
                            })
                          }),
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, C.jsx)(b.n, {
                              label: (0, C.jsx)(f.Z, { id: 'label.name' }),
                              name: 'name',
                              errors: X,
                              register: L
                            })
                          }),
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, C.jsx)(b.n, {
                              label: 'Email',
                              name: 'email',
                              errors: X,
                              register: L
                            })
                          }),
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, C.jsx)(j.R, {
                              control: V,
                              name: 'parentAgentId',
                              errors: X
                            })
                          }),
                          (0, C.jsx)(g.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, C.jsx)(v.Z, {
                              display: 'flex',
                              gap: '1rem',
                              children: (0, C.jsx)(b.P, {
                                label: 'Currency',
                                name: 'currencyId',
                                control: V,
                                options: J
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                : (0, C.jsx)(w.Z, {
                    isUserRegister: !0,
                    isSubmit: T,
                    setIsSubmit: function () {
                      return E(!1);
                    },
                    refetch: s,
                    onClose: t
                  })
          });
        },
        q = (0, o.memo)(k),
        S = r(5119),
        F = r(890),
        T = r(6151),
        E = r(6043),
        O = r(8096),
        _ = r(4925),
        W = r(9321),
        B = r(3786),
        D = r(946),
        M = r(8673),
        U = r(8901),
        L = function () {
          var e = (0, c.d)(),
            n = e.visible,
            r = e.toggle,
            t = (0, o.useState)(),
            a = (0, l.Z)(t, 2),
            i = a[0],
            s = a[1],
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
              var n, t, a, i, l, o, u, c;
              return [
                {
                  align: 'inherit',
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(F.Z, {
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
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(T.Z, {
                      variant: 'outlined',
                      startIcon: (0, C.jsx)(U.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(T.Z, {
                      variant: 'outlined',
                      startIcon: (0, C.jsx)(U.Z, {}),
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
                                null === (l = e.balances) ||
                                void 0 === l
                                  ? void 0
                                  : l.bet) && void 0 !== i
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
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(T.Z, {
                      variant: 'outlined',
                      startIcon: (0, C.jsx)(U.Z, {}),
                      href: 'transactions/'.concat(e.id, '/recharge-history'),
                      children:
                        (null === e || void 0 === e ? void 0 : e.balances) &&
                        d(e)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(E.Z, {
                      badgeContent:
                        null !== e && void 0 !== e && e.isActive
                          ? 'Active'
                          : 'Locked',
                      color:
                        null !== e && void 0 !== e && e.isActive
                          ? 'success'
                          : 'secondary',
                      sx: { padding: 1 },
                      children: (0, C.jsx)(F.Z, {
                        variant: 'body1',
                        fontWeight: 'bold',
                        color: 'text.primary',
                        noWrap: !0,
                        children: e.username
                      })
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(F.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, D.Z)(
                          (0, M.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsx)(T.Z, {
                      disabled:
                        (null ===
                          (c = JSON.parse(localStorage.getItem('user'))) ||
                        void 0 === c
                          ? void 0
                          : c.id) != e.agentId,
                      variant: 'outlined',
                      startIcon: (0, C.jsx)(U.Z, {}),
                      onClick: function () {
                        return (function (e) {
                          s(e), r();
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
                (0, C.jsx)(S.M, {
                  label: (0, C.jsx)(f.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, C.jsx)(S.M, {
                  label: (0, C.jsx)(f.Z, { id: 'label.to' }),
                  onChange: t.onChange
                }),
                (0, C.jsxs)(O.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, C.jsx)(_.Z, {
                      id: 'isActive',
                      children: (0, C.jsx)(f.Z, { id: 'label.status' })
                    }),
                    (0, C.jsxs)(W.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, C.jsx)(f.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, C.jsx)(B.Z, {
                          value: '',
                          children: (0, C.jsx)('em', {
                            children: (0, C.jsx)(f.Z, { id: 'label.default' })
                          })
                        }),
                        (0, C.jsx)(B.Z, {
                          value: 'active',
                          children: (0, C.jsx)(f.Z, { id: 'label.active' })
                        }),
                        (0, C.jsx)(B.Z, {
                          value: 'disable',
                          children: (0, C.jsx)(f.Z, { id: 'label.disable' })
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
        z = r(5850),
        H = r(5574),
        N = r(8550),
        V = r(2302),
        X = r(9709),
        Y = r(5048),
        J = 'title.users-management',
        K = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: J }
            ],
            n = (0, c.d)(),
            r = n.visible,
            h = n.hide,
            g = n.show,
            x = (0, c.p)(),
            p = x.notify,
            Z = x.message,
            f = (0, m.cI)().reset,
            b = L(),
            j = b.tableBody,
            y = b.tableHeader,
            w = b.tableFilter,
            I = b.visible,
            A = b.toggle,
            P = b.user,
            R = (0, o.useState)({
              userId: '',
              amount: 0,
              type: 'user.add_balance',
              note: '',
              status: 'pending'
            }),
            k = (0, l.Z)(R, 2),
            S = k[0],
            T = k[1],
            E = (0, o.useState)([]),
            O = (0, l.Z)(E, 2),
            _ = O[0],
            W = O[1],
            B = (0, o.useState)(),
            D = (0, l.Z)(B, 2),
            M = D[0],
            U = D[1],
            K = (0, o.useState)({
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
            Q = (0, l.Z)(K, 2),
            $ = Q[0],
            G = Q[1],
            ee = (0, u.V_)(),
            ne = (0, l.Z)(ee, 1)[0],
            re = (0, u.I1)(),
            te = (0, l.Z)(re, 2),
            ae = te[0],
            ie = te[1].isLoading,
            se = (0, V.Dx)(),
            le = (0, l.Z)(se, 2),
            oe = le[0],
            de = le[1].isLoading,
            ue = (0, Y.v9)(function (e) {
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
                W(function () {
                  var e;
                  return (0,
                  z.TY)(me.data.data, null === (e = y[$.sortBy]) || void 0 === e ? void 0 : e.name, $.sortDirection);
                });
            },
            [me, $.sortBy, $.sortDirection]
          ),
            (0, o.useEffect)(
              function () {
                P &&
                  T(function (e) {
                    return (0,
                    s.Z)((0, s.Z)({}, e), {}, { userId: null === P || void 0 === P ? void 0 : P.id, amount: Number(e.amount) });
                  });
              },
              [P]
            );
          var ge,
            xe,
            pe = (function () {
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
                            p({ message: Z.DELETED }), ve(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              p({
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
                            (r = e.sent), g(), U(r.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              p({ message: Z.ERROR, type: 'error' });
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
            fe = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e() {
                  var n;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), oe(S).unwrap();
                          case 3:
                            e.sent &&
                              (A(), p({ message: Z.UPDATED }), ve(), h(), f()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              p({
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
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(d.Z, {
                title: J,
                data: _,
                totalItems:
                  null === me || void 0 === me ? void 0 : me.data.totalItems,
                tableHeader: y,
                tableBody: j,
                headerTitle: J,
                breadcrumbs: e,
                isLoading: he || ie,
                onDelete: pe,
                onUpdate: Ze,
                pagination: $,
                onPagination: G,
                onOpenModal:
                  ((ge = ue),
                  (xe = 'create'),
                  (null === ge || void 0 === ge ? void 0 : ge.includes(xe)) &&
                    function () {
                      g(), U(null);
                    }),
                tableFilter: w({
                  status: {
                    value: $.status,
                    onChange: function (e) {
                      return G((0, s.Z)((0, s.Z)({}, $), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: $.dateFrom,
                    onChange: function (e) {
                      return G(
                        (0, s.Z)(
                          (0, s.Z)({}, $),
                          {},
                          { dateFrom: (0, z.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: $.dateTo,
                    onChange: function (e) {
                      return G(
                        (0, s.Z)(
                          (0, s.Z)({}, $),
                          {},
                          { dateTo: (0, z.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, C.jsx)(q, {
                open: r,
                detail: M,
                onClose: h,
                refetch: ve,
                hide: h
              }),
              (0, C.jsx)(H.Z, {
                open: I,
                onClose: A,
                children: (0, C.jsxs)(v.Z, {
                  component: 'form',
                  padding: 2,
                  width: '400px',
                  children: [
                    (0, C.jsx)(F.Z, {
                      gutterBottom: !0,
                      variant: 'h5',
                      component: 'div',
                      children: 'Add transaction'
                    }),
                    (0, C.jsxs)(v.Z, {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: 2,
                      pt: 2,
                      children: [
                        (0, C.jsx)(N.Z, {
                          label: 'Insert the amount here',
                          variant: 'outlined',
                          fullWidth: !0,
                          onInput: function (e) {
                            return (
                              (n = Number(e.target.value)),
                              (r = 'amount'),
                              void T(function (e) {
                                return (0,
                                s.Z)((0, s.Z)({}, e), {}, (0, t.Z)({}, ''.concat(r), n));
                              })
                            );
                            var n, r;
                          }
                        }),
                        (0, C.jsx)(X.Z, {
                          loading: de,
                          onClick: fe,
                          size: 'large',
                          variant: 'contained',
                          children: (0, C.jsx)(F.Z, {
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
    }
  }
]);
//# sourceMappingURL=917.cd65ad78.chunk.js.map
