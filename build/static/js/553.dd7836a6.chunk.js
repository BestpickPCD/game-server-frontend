'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [553],
  {
    7395: function (e, n, r) {
      var t = r(1413),
        a = r(5987),
        o = r(6934),
        i = r(184),
        l = ['color', 'children'],
        c = (0, o.ZP)('span')(function (e) {
          var n = e.theme;
          return '\n      background-color: '
            .concat(n.colors.alpha.black[5], ';\n      padding: ')
            .concat(n.spacing(0.5, 1), ';\n      font-size: ')
            .concat(n.typography.pxToRem(13), ';\n      border-radius: ')
            .concat(
              n.general.borderRadius,
              ';\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: '
            )
            .concat(
              n.spacing(3),
              ';\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: '
            )
            .concat(n.colors.primary.lighter, ';\n          color: ')
            .concat(
              n.palette.primary.main,
              '\n        }\n\n        &-black {\n          background-color: '
            )
            .concat(n.colors.alpha.black[100], ';\n          color: ')
            .concat(
              n.colors.alpha.white[100],
              ';\n        }\n        \n        &-secondary {\n          background-color: '
            )
            .concat(n.colors.secondary.lighter, ';\n          color: ')
            .concat(
              n.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          background-color: '
            )
            .concat(n.colors.success.lighter, ';\n          color: ')
            .concat(
              n.palette.success.main,
              '\n        }\n        \n        &-warning {\n          background-color: '
            )
            .concat(n.colors.warning.lighter, ';\n          color: ')
            .concat(
              n.palette.warning.main,
              '\n        }\n              \n        &-error {\n          background-color: '
            )
            .concat(n.colors.error.lighter, ';\n          color: ')
            .concat(
              n.palette.error.main,
              '\n        }\n        \n        &-info {\n          background-color: '
            )
            .concat(n.colors.info.lighter, ';\n          color: ')
            .concat(n.palette.info.main, '\n        }\n      }\n');
        });
      n.Z = function (e) {
        var n = e.color,
          r = void 0 === n ? 'secondary' : n,
          o = e.children,
          s = (0, a.Z)(e, l);
        return (0, i.jsx)(
          c,
          (0, t.Z)(
            (0, t.Z)({ className: 'MuiLabel-' + r }, s),
            {},
            { children: o }
          )
        );
      };
    },
    1371: function (e, n, r) {
      r.d(n, {
        L: function () {
          return a;
        },
        s: function () {
          return t;
        }
      });
      var t = [
          'win',
          'bet',
          'cancel',
          'deposit',
          'withdraw',
          'user.add_balance',
          'agent.add_balance'
        ],
        a = ['success', 'pending', 'cancelled', 'failed'];
    },
    2687: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return $;
          }
        });
      var t = r(4165),
        a = r(5861),
        o = r(1413),
        i = r(9439),
        l = r(2791),
        c = r(6790),
        s = r(2302),
        d = r(5850),
        u = r(7837),
        p = r(4695),
        m = r(4554),
        h = r(1134),
        v = r(4349),
        f = r(7590),
        g = r(8409),
        x = r(7891),
        Z = r(1371),
        y = r(4167),
        b = r(5243),
        j = r(184),
        k = Z.s.map(function (e) {
          return {
            id: e,
            value: e,
            name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
          };
        }),
        w =
          (Z.L.map(function (e) {
            return {
              id: e,
              value: e,
              name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
            };
          }),
          b
            .Ry()
            .shape({
              userId: b.Z_().required('Users is required!'),
              currencyId: b
                .Rx()
                .moreThan(0, 'Currency is required!')
                .typeError('Currency is required!')
                .required('Currency is required!'),
              amount: b
                .Rx()
                .moreThan(0, 'Amount must be greater than 0')
                .typeError('Amount must be a number')
                .required('Amount is required!'),
              token: b.Z_(),
              note: b.Z_(),
              type: b.Z_().required('Type is required!')
            })),
        S = function (e) {
          var n = e.open,
            r = e.detail,
            c = e.onClose,
            d = e.refetch,
            Z = (0, u.p)(),
            b = Z.notify,
            S = Z.message,
            C = (0, y.K4)({}, { refetchOnMountOrArgChange: !0, skip: !n }).data,
            I = (0, h.cI)({
              resolver: (0, p.X)(w),
              defaultValues: {
                userId: '',
                amount: 0,
                currencyId: 0,
                token: '',
                note: '',
                type: ''
              }
            }),
            P = I.register,
            F = I.setValue,
            R = I.reset,
            T = I.handleSubmit,
            O = I.clearErrors,
            A = I.control,
            M = I.formState.errors,
            N = (0, s.Dx)(),
            W = (0, i.Z)(N, 1)[0];
          (0, l.useEffect)(
            function () {
              if (null === r || void 0 === r || !r.id) return R();
              F('userId', null === r || void 0 === r ? void 0 : r.userId),
                F(
                  'amount',
                  Number(null === r || void 0 === r ? void 0 : r.amount)
                ),
                F(
                  'currencyId',
                  Number(null === r || void 0 === r ? void 0 : r.currencyId)
                ),
                F('token', null === r || void 0 === r ? void 0 : r.token),
                F('note', null === r || void 0 === r ? void 0 : r.note),
                F('type', null === r || void 0 === r ? void 0 : r.type);
            },
            [r]
          );
          var q = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e(n) {
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), W(n).unwrap();
                          case 3:
                            e.sent &&
                              (b({ message: S.CREATED }), R(), c(), d()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              b({ message: e.t0.data.message, type: 'error' });
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
            E = (0, l.useMemo)(
              function () {
                return null === C || void 0 === C
                  ? void 0
                  : C.map(function (e) {
                      return {
                        id: String(e.id),
                        name: String(e.name),
                        value: String(e.id)
                      };
                    });
              },
              [C]
            );
          return (0, j.jsx)(x.Z, {
            title:
              null !== r && void 0 !== r && r.id ? 'View' : 'Add Transaction',
            onClose: function () {
              c(), O();
            },
            open: n,
            onOk: !(null !== r && void 0 !== r && r.id) && T(q),
            fullWidth: !0,
            children: (0, j.jsx)(m.Z, {
              component: 'form',
              id: 'form-transaction',
              children: (0, j.jsxs)('div', {
                className: 'block',
                children: [
                  (0, j.jsx)(m.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, j.jsx)(
                      g.R,
                      (0, o.Z)(
                        (0, o.Z)(
                          { name: 'userId', control: A, label: 'User' },
                          (null === r || void 0 === r ? void 0 : r.id) && {
                            parent: {
                              id:
                                null === r || void 0 === r ? void 0 : r.userId,
                              name:
                                null === r || void 0 === r
                                  ? void 0
                                  : r.username,
                              value:
                                null === r || void 0 === r ? void 0 : r.userId
                            }
                          }
                        ),
                        {},
                        {
                          readOnly: !(null === r || void 0 === r || !r.id),
                          errors: M
                        }
                      )
                    )
                  }),
                  (0, j.jsxs)(m.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: [
                      (0, j.jsx)(f.n, {
                        name: 'amount',
                        label: 'Amount',
                        errors: M,
                        register: P,
                        type: 'number',
                        InputProps: {
                          readOnly: !(null === r || void 0 === r || !r.id)
                        }
                      }),
                      (0, j.jsx)(f.P, {
                        label: 'Currency',
                        name: 'currencyId',
                        control: A,
                        options: E,
                        readOnly: !(null === r || void 0 === r || !r.id),
                        errors: M
                      })
                    ]
                  }),
                  (0, j.jsx)(m.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, j.jsx)(f.P, {
                      name: 'type',
                      label: (0, j.jsx)(v.Z, { id: 'label.type' }),
                      control: A,
                      options: k,
                      readOnly: !(null === r || void 0 === r || !r.id),
                      errors: M
                    })
                  }),
                  (0, j.jsx)(f.n, {
                    multiline: !0,
                    rows: 2,
                    name: 'token',
                    errors: M,
                    register: P,
                    label: 'Token',
                    InputProps: {
                      readOnly: !(null === r || void 0 === r || !r.id)
                    }
                  }),
                  (0, j.jsx)(f.n, {
                    sx: { my: 2 },
                    multiline: !0,
                    rows: 2,
                    name: 'note',
                    errors: M,
                    register: P,
                    label: 'Note',
                    InputProps: {
                      readOnly: !(null === r || void 0 === r || !r.id)
                    }
                  })
                ]
              })
            })
          });
        },
        C = (0, l.memo)(S),
        I = r(890),
        P = r(8096),
        F = r(4925),
        R = r(9321),
        T = r(3786),
        O = r(9164),
        A = r(6151),
        M = r(6934),
        N = r(533),
        W = r(5119),
        q = r(946),
        E = r(8673),
        B = r(6871),
        D = (r(7395), r(9709)),
        _ = r(1889),
        U = r(6314),
        z = r(3590),
        L = r(8550),
        H = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: 4,
          p: 2,
          borderRadius: 1
        },
        V = function (e) {
          var n = !1;
          'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
            (n = !0);
          var r = (0, u.p)().notify,
            o = e.id,
            c = e.status,
            d = e.method,
            p = e.callbackId,
            h = (0, s.NK)(),
            v = (0, i.Z)(h, 1)[0],
            f = (0, l.useState)(!1),
            g = (0, i.Z)(f, 2),
            x = g[0],
            Z = g[1],
            y = (0, l.useState)(c),
            b = (0, i.Z)(y, 2),
            k = b[0],
            w = b[1],
            S = (0, l.useState)(!1),
            C = (0, i.Z)(S, 2),
            I = C[0],
            P = C[1],
            F = (0, l.useState)({ username: '', amount: 0, transaction: {} }),
            R = (0, i.Z)(F, 2),
            T = R[0],
            O = R[1];
          (0, l.useEffect)(function () {
            w(c), 'seamless' === d && P(!0);
          }, []);
          var M = (0, s.zq)(),
            N = (0, i.Z)(M, 1)[0],
            W = (0, l.useState)(!1),
            q = (0, i.Z)(W, 2),
            E = q[0],
            B = q[1],
            V = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e() {
                  var n, r;
                  return (0, t.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), N({ id: p });
                        case 2:
                          'data' in (n = e.sent) && ((r = n.data.data), O(r)),
                            B(!0);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            G = function () {
              B(!1);
            },
            J = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e() {
                  var n, a;
                  return (0, t.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Z(!0),
                            (e.next = 3),
                            v({ id: o, body: { action: 'approved' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (w(
                                null === a || void 0 === a ? void 0 : a.action
                              ),
                              Z(!1),
                              r({
                                message: 'Remaining Balance: '
                                  .concat(
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.balance,
                                    ' | Status: '
                                  )
                                  .concat(
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.action
                                  )
                              }));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            $ = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e() {
                  var n, a;
                  return (0, t.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Z(!0),
                            (e.next = 3),
                            v({ id: o, body: { action: 'rejected' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (w(
                                null === a || void 0 === a ? void 0 : a.action
                              ),
                              Z(!1),
                              r({
                                message: 'Remaining Balance: '
                                  .concat(
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.balance,
                                    ' | Status: '
                                  )
                                  .concat(
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.action
                                  )
                              }));
                        case 6:
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
          return (0, j.jsx)(j.Fragment, {
            children:
              n && 'pending' === k
                ? (0, j.jsxs)(_.ZP, {
                    container: !0,
                    children: [
                      (0, j.jsx)(_.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, j.jsx)(D.Z, {
                          loading: x,
                          variant: 'contained',
                          color: 'success',
                          onClick: function () {
                            return J();
                          },
                          children: 'Approve'
                        })
                      }),
                      (0, j.jsx)(_.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, j.jsx)(D.Z, {
                          loading: x,
                          variant: 'outlined',
                          color: 'error',
                          onClick: function () {
                            return $();
                          },
                          children: 'Reject'
                        })
                      })
                    ]
                  })
                : 'pending' === k
                ? (0, j.jsx)(_.ZP, {
                    container: !0,
                    children: (0, j.jsx)(_.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, j.jsx)(D.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'secondary',
                        children: 'Pending'
                      })
                    })
                  })
                : 'rejected' === k
                ? (0, j.jsx)(_.ZP, {
                    container: !0,
                    children: (0, j.jsx)(_.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, j.jsx)(D.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'error',
                        children: 'Rejected'
                      })
                    })
                  })
                : (0, j.jsxs)(U.Z, {
                    spacing: { xs: 1, sm: 2 },
                    direction: 'row',
                    flexWrap: 'wrap',
                    children: [
                      (0, j.jsx)(D.Z, {
                        sx: { flex: 1 },
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'success',
                        children: 'Approved'
                      }),
                      I &&
                        (0, j.jsx)(D.Z, {
                          sx: { flex: 1 },
                          fullWidth: !0,
                          variant: 'outlined',
                          color: 'info',
                          onClick: V,
                          children: 'Details'
                        }),
                      (0, j.jsx)(z.Z, {
                        open: E,
                        onClose: G,
                        'aria-labelledby': 'modal-modal-title',
                        'aria-describedby': 'modal-modal-description',
                        children: (0, j.jsxs)(m.Z, {
                          sx: H,
                          children: [
                            (0, j.jsx)(L.Z, {
                              label: 'Username',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: T.username
                            }),
                            (0, j.jsx)(L.Z, {
                              label: 'Amount',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: T.amount
                            }),
                            (0, j.jsxs)('div', {
                              children: [
                                (0, j.jsx)('p', { children: 'JSON Data:' }),
                                (0, j.jsx)('pre', {
                                  children: JSON.stringify(
                                    T.transaction,
                                    null,
                                    2
                                  )
                                })
                              ]
                            }),
                            (0, j.jsx)(A.Z, {
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: G,
                              children: 'Close'
                            })
                          ]
                        })
                      })
                    ]
                  })
          });
        },
        G = function () {
          var e = !1,
            n = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (n = !0),
            'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
              (e = !0);
          (0, B.s0)();
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(I.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.username
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(I.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.amount
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(I.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: ''
                        .concat(e.type.slice(0, 1).toUpperCase())
                        .concat(e.type.slice(1))
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(I.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.method
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(I.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, q.Z)(
                          (0, E.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(V, {
                      id: null === e || void 0 === e ? void 0 : e.id,
                      status: null === e || void 0 === e ? void 0 : e.status,
                      method: null === e || void 0 === e ? void 0 : e.method,
                      callbackId:
                        null === e || void 0 === e ? void 0 : e.callbackId
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.username', name: 'username' },
              { align: 'right', title: 'label.amount', name: 'amount' },
              { align: 'right', title: 'label.type', name: 'type' },
              { align: 'right', title: 'label.method', name: 'method' },
              { align: 'right', title: 'label.updated.at', name: 'updatedAt' },
              { align: 'center', title: 'label.status', name: 'updatedAt' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (r) {
              var t = r.type,
                a = r.dateFrom,
                o = r.dateTo;
              return [
                (0, j.jsx)(W.M, {
                  label: (0, j.jsx)(v.Z, { id: 'label.from' }),
                  onChange: a.onChange
                }),
                (0, j.jsx)(W.M, {
                  label: (0, j.jsx)(v.Z, { id: 'label.to' }),
                  onChange: o.onChange
                }),
                (0, j.jsxs)(P.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, j.jsx)(F.Z, {
                      id: 'Type',
                      children: (0, j.jsx)(v.Z, { id: 'label.type' })
                    }),
                    (0, j.jsxs)(R.Z, {
                      labelId: 'Type',
                      value: t.value,
                      label: (0, j.jsx)(v.Z, { id: 'label.type' }),
                      onChange: function (e) {
                        return t.onChange(e.target.value);
                      },
                      children: [
                        (0, j.jsx)(T.Z, {
                          value: '',
                          children: (0, j.jsx)('em', { children: 'Default' })
                        }),
                        Z.s.map(function (e) {
                          return (0,
                          j.jsx)(T.Z, { value: e, children: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1)) }, e);
                        })
                      ]
                    })
                  ]
                }),
                (0, j.jsx)(j.Fragment, {
                  children:
                    e && !1 === n
                      ? (0, j.jsx)(O.Z, {
                          children: (0, j.jsx)(A.Z, {
                            href: '?type=agent.add_balance',
                            variant: 'outlined',
                            children: (0, j.jsx)(v.Z, {
                              id: 'label.See-request'
                            })
                          })
                        })
                      : n && !0 === e
                      ? (0, j.jsx)(O.Z, {
                          children: (0, j.jsx)(A.Z, {
                            href: '?type=',
                            variant: 'outlined',
                            color: 'secondary',
                            children: (0, j.jsx)(v.Z, { id: 'label.See-all' })
                          })
                        })
                      : null
                })
              ];
            }
          };
        },
        J =
          ((0, M.ZP)(N.Z)(function (e) {
            var n = e.theme;
            return '\n  color: '.concat(
              n.colors.info.dark,
              ';\n  cursor: pointer;\n'
            );
          }),
          'title.transactions-management'),
        $ = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: J }
            ],
            n = (0, u.d)(),
            r = n.visible,
            p = n.hide,
            m = n.show,
            h = (0, u.p)(),
            v = h.notify,
            f = h.message,
            g = G(),
            x = g.tableBody,
            Z = g.tableHeader,
            y = g.tableFilter,
            b = (0, l.useState)([]),
            k = (0, i.Z)(b, 2),
            w = k[0],
            S = k[1],
            I = (0, l.useState)(),
            P = (0, i.Z)(I, 2),
            F = P[0],
            R = P[1],
            T = (0, l.useState)({
              page: 0,
              size: 10,
              status: '',
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: '',
              dateFrom: '',
              dateTo: ''
            }),
            O = (0, i.Z)(T, 2),
            A = O[0],
            M = O[1],
            N = (0, s.wv)(),
            W = (0, i.Z)(N, 1)[0],
            q = (0, s.ez)(
              {
                page: A.page,
                size: A.size,
                search: A.search,
                dateFrom: A.dateFrom,
                dateTo: A.dateTo,
                status: A.status,
                type: A.type
              },
              { refetchOnMountOrArgChange: !0 }
            ),
            E = q.data,
            B = q.isFetching,
            D = q.refetch;
          (0, l.useEffect)(function () {
            var e = new URLSearchParams(window.location.search).get('type');
            'agent.add_balance' === e &&
              M((0, o.Z)((0, o.Z)({}, A), {}, { type: e, status: 'pending' }));
          }, []),
            (0, l.useEffect)(
              function () {
                E &&
                  S(function () {
                    var e;
                    return (0,
                    d.TY)(E.data.data, null === (e = Z[A.sortBy]) || void 0 === e ? void 0 : e.name, A.sortDirection);
                  });
              },
              [E, A.sortBy, A.sortDirection]
            );
          var _ = (function () {
            var e = (0, a.Z)(
              (0, t.Z)().mark(function e(n) {
                var r;
                return (0, t.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), W({ id: n }).unwrap()
                          );
                        case 3:
                          (r = e.sent), m(), R(r.data), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            v({ message: f.ERROR, type: 'error' });
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
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(c.Z, {
                title: J,
                data: w,
                totalItems:
                  null === E || void 0 === E ? void 0 : E.data.totalItems,
                tableHeader: Z,
                tableBody: x,
                headerTitle: J,
                breadcrumbs: e,
                onOpenModal: function () {
                  m(), R(null);
                },
                isLoading: B,
                onUpdate: _,
                pagination: A,
                onPagination: M,
                tableFilter: y({
                  type: {
                    value: A.type,
                    onChange: function (e) {
                      return M((0, o.Z)((0, o.Z)({}, A), {}, { type: e }));
                    }
                  },
                  dateFrom: {
                    value: A.dateFrom,
                    onChange: function (e) {
                      return M(
                        (0, o.Z)(
                          (0, o.Z)({}, A),
                          {},
                          { dateFrom: (0, d.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: A.dateTo,
                    onChange: function (e) {
                      return M(
                        (0, o.Z)(
                          (0, o.Z)({}, A),
                          {},
                          { dateTo: (0, d.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, j.jsx)(C, { open: r, detail: F, onClose: p, refetch: D })
            ]
          });
        };
    },
    3329: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var a = t(r(5649)),
        o = r(184),
        i = (0, a.default)(
          (0, o.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = i;
    },
    6314: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return I;
        }
      });
      var t = r(4942),
        a = r(3366),
        o = r(7462),
        i = r(2791),
        l = r(8182),
        c = r(2466),
        s = r(4419),
        d = r(1217),
        u = r(3457),
        p = r(6083),
        m = r(8519),
        h = r(5080),
        v = r(1184),
        f = r(5682),
        g = r(184),
        x = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
          'className',
          'useFlexGap'
        ],
        Z = (0, h.Z)(),
        y = (0, u.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        });
      function b(e) {
        return (0, p.Z)({ props: e, name: 'MuiStack', defaultTheme: Z });
      }
      function j(e, n) {
        var r = i.Children.toArray(e).filter(Boolean);
        return r.reduce(function (e, t, a) {
          return (
            e.push(t),
            a < r.length - 1 &&
              e.push(i.cloneElement(n, { key: 'separator-'.concat(a) })),
            e
          );
        }, []);
      }
      var k = function (e) {
        var n = e.ownerState,
          r = e.theme,
          a = (0, o.Z)(
            { display: 'flex', flexDirection: 'column' },
            (0, v.k9)(
              { theme: r },
              (0, v.P$)({
                values: n.direction,
                breakpoints: r.breakpoints.values
              }),
              function (e) {
                return { flexDirection: e };
              }
            )
          );
        if (n.spacing) {
          var i = (0, f.hB)(r),
            l = Object.keys(r.breakpoints.values).reduce(function (e, r) {
              return (
                (('object' === typeof n.spacing && null != n.spacing[r]) ||
                  ('object' === typeof n.direction &&
                    null != n.direction[r])) &&
                  (e[r] = !0),
                e
              );
            }, {}),
            s = (0, v.P$)({ values: n.direction, base: l }),
            d = (0, v.P$)({ values: n.spacing, base: l });
          'object' === typeof s &&
            Object.keys(s).forEach(function (e, n, r) {
              if (!s[e]) {
                var t = n > 0 ? s[r[n - 1]] : 'column';
                s[e] = t;
              }
            });
          a = (0, c.Z)(
            a,
            (0, v.k9)({ theme: r }, d, function (e, r) {
              return n.useFlexGap
                ? { gap: (0, f.NA)(i, e) }
                : {
                    '& > :not(style) ~ :not(style)': (0, t.Z)(
                      { margin: 0 },
                      'margin'.concat(
                        ((a = r ? s[r] : n.direction),
                        {
                          row: 'Left',
                          'row-reverse': 'Right',
                          column: 'Top',
                          'column-reverse': 'Bottom'
                        }[a])
                      ),
                      (0, f.NA)(i, e)
                    )
                  };
              var a;
            })
          );
        }
        return (a = (0, v.dt)(r.breakpoints, a));
      };
      var w = r(6934),
        S = r(1402),
        C = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.createStyledComponent,
            r = void 0 === n ? y : n,
            t = e.useThemeProps,
            c = void 0 === t ? b : t,
            u = e.componentName,
            p = void 0 === u ? 'MuiStack' : u,
            h = r(k),
            v = i.forwardRef(function (e, n) {
              var r = c(e),
                t = (0, m.Z)(r),
                i = t.component,
                u = void 0 === i ? 'div' : i,
                v = t.direction,
                f = void 0 === v ? 'column' : v,
                Z = t.spacing,
                y = void 0 === Z ? 0 : Z,
                b = t.divider,
                k = t.children,
                w = t.className,
                S = t.useFlexGap,
                C = void 0 !== S && S,
                I = (0, a.Z)(t, x),
                P = { direction: f, spacing: y, useFlexGap: C },
                F = (0, s.Z)(
                  { root: ['root'] },
                  function (e) {
                    return (0, d.Z)(p, e);
                  },
                  {}
                );
              return (0,
              g.jsx)(h, (0, o.Z)({ as: u, ownerState: P, ref: n, className: (0, l.Z)(F.root, w) }, I, { children: b ? j(k, b) : k }));
            });
          return v;
        })({
          createStyledComponent: (0, w.ZP)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: function (e, n) {
              return n.root;
            }
          }),
          useThemeProps: function (e) {
            return (0, S.Z)({ props: e, name: 'MuiStack' });
          }
        }),
        I = C;
    }
  }
]);
//# sourceMappingURL=553.dd7836a6.chunk.js.map
