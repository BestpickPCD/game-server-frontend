'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [815],
  {
    8409: function (e, n, r) {
      r.d(n, {
        R: function () {
          return h;
        }
      });
      var t = r(7762),
        a = r(3433),
        o = r(1413),
        i = r(9439),
        l = r(5987),
        c = r(2791),
        s = r(7590),
        d = r(1827),
        u = r(4732),
        p = r(184),
        m = ['control', 'name', 'parent', 'label', 'errors'],
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
            g = void 0 === f ? 'Agents' : f,
            x = e.errors,
            Z = (0, l.Z)(e, m),
            b = (0, c.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            y = (0, i.Z)(b, 2),
            j = y[0],
            k = y[1],
            S = (0, c.useState)(''),
            w = (0, i.Z)(S, 2),
            C = w[0],
            F = w[1],
            P = (0, u.Z)(C, 500),
            I = (0, c.useState)([]),
            T = (0, i.Z)(I, 2),
            R = T[0],
            A = T[1],
            O = (0, c.useState)({ id: '', name: '', value: '' }),
            W = (0, i.Z)(O, 2),
            E = W[0],
            M = W[1];
          (0, c.useEffect)(
            function () {
              F(P),
                k(function (e) {
                  return (0, o.Z)((0, o.Z)({}, e), {}, { search: P });
                });
            },
            [P]
          );
          var N = (0, d.aN)(
              { size: j.size, page: j.page, search: j.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            z = N.data,
            D = N.isFetching;
          function q(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (z.data.page + 1) * z.data.size < z.data.totalItems
            )
              return k(function (e) {
                return (0, o.Z)((0, o.Z)({}, e), {}, { page: j.page + 1 });
              });
          }
          (0, c.useEffect)(
            function () {
              k({ search: P || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                A([]);
            },
            [P, h]
          ),
            (0, c.useEffect)(
              function () {
                return A(
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
            (0, c.useEffect)(
              function () {
                null !== E &&
                  void 0 !== E &&
                  E.id &&
                  A(function (e) {
                    var n = e.slice();
                    return n.unshift(E), n;
                  });
              },
              [E, z]
            );
          var B = (0, c.useMemo)(
            function () {
              var e,
                n = [],
                r = new Set(),
                a = (0, t.Z)(R);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var o = e.value;
                  r.has(o.id) || (r.add(o.id), n.push(o));
                }
              } catch (i) {
                a.e(i);
              } finally {
                a.f();
              }
              return n;
            },
            [R]
          );
          return (0, p.jsx)(
            s.P,
            (0, o.Z)(
              {
                onScroll: q,
                name: r,
                label: g,
                options: B,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: q },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: D,
                onSearch: F,
                searchTerm: C,
                errors: x,
                setSelected: M
              },
              Z
            )
          );
        };
    },
    7590: function (e, n, r) {
      r.d(n, {
        P: function () {
          return y;
        },
        n: function () {
          return k;
        }
      });
      var t = r(1413),
        a = r(5987),
        o = r(5403),
        i = r(8096),
        l = r(4925),
        c = r(8406),
        s = r(9834),
        d = r(8550),
        u = r(3466),
        p = r(3786),
        m = r(4554),
        v = r(3239),
        h = r(7071),
        f = r(2791),
        g = r(1134),
        x = r(184),
        Z = [
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
            y = e.options,
            j = e.isFetching,
            k = e.errors,
            S = e.searchTerm,
            w = e.onSearch,
            C = e.setSelected,
            F = (0, a.Z)(e, Z);
          return r
            ? (0, x.jsx)(g.Qr, {
                control: r,
                name: f,
                render: function (e) {
                  var n,
                    r = e.field;
                  return (0, x.jsxs)(i.Z, {
                    fullWidth: !0,
                    children: [
                      (0, x.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== k && void 0 !== k && k[f] && !r.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: b
                      }),
                      (0, x.jsxs)(
                        c.Z,
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
                                  !(null === k || void 0 === k || !k[f]) &&
                                  !r.value
                              },
                              r
                            ),
                            F
                          ),
                          {},
                          {
                            children: [
                              w &&
                                (0, x.jsx)(s.Z, {
                                  children: (0, x.jsx)(d.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, x.jsx)(u.Z, {
                                        position: 'start',
                                        children: (0, x.jsx)(o.Z, {})
                                      })
                                    },
                                    value: S,
                                    onChange: function (e) {
                                      return w(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === y || void 0 === y
                                ? void 0
                                : y.map(function (e) {
                                    return (0, x.jsx)(
                                      p.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (n = e),
                                            void (
                                              null === C ||
                                              void 0 === C ||
                                              C(n)
                                            )
                                          );
                                          var n;
                                        },
                                        children: e.name
                                      },
                                      e.id
                                    );
                                  }),
                              j &&
                                (0, x.jsx)(m.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, x.jsx)(v.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === k || void 0 === k ? void 0 : k[f]) &&
                        !r.value &&
                        (0, x.jsx)(h.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === k ||
                            void 0 === k ||
                            null === (n = k[f]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, x.jsxs)(i.Z, {
                fullWidth: !0,
                children: [
                  (0, x.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== k && void 0 !== k && k[f]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: b
                  }),
                  (0, x.jsx)(
                    c.Z,
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
                        error: !(null === k || void 0 === k || !k[f]),
                        children:
                          null === y || void 0 === y
                            ? void 0
                            : y.map(function (e) {
                                return (0,
                                x.jsx)(p.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === k || void 0 === k || !k[f]) &&
                    (0, x.jsx)(h.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === k ||
                        void 0 === k ||
                        null === (n = k[f]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        y = (0, f.memo)(b),
        j = ['label', 'name', 'errors', 'register'],
        k = function (e) {
          var n = e.label,
            r = e.name,
            o = e.errors,
            i = e.register,
            l = (0, a.Z)(e, j);
          return (0, x.jsx)(
            d.Z,
            (0, t.Z)(
              (0, t.Z)(
                {
                  label: n,
                  error: !!o[r],
                  helperText: o[r] ? o[r].message : '',
                  fullWidth: !0
                },
                i(r)
              ),
              l
            )
          );
        };
    },
    6815: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return V;
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
        v = r(1134),
        h = r(4349),
        f = r(7590),
        g = r(8409),
        x = r(7891),
        Z = [
          'win',
          'bet',
          'cancel',
          'deposit',
          'withdraw',
          'user.add_balance',
          'agent.add_balance'
        ],
        b = r(4167),
        y = r(6727),
        j = r(184),
        k = Z.map(function (e) {
          return {
            id: e,
            value: e,
            name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
          };
        }),
        S =
          (['success', 'pending', 'cancelled', 'failed'].map(function (e) {
            return {
              id: e,
              value: e,
              name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
            };
          }),
          y.Ry().shape({
            userId: y.Z_().required('Users is required!'),
            currencyId: y
              .Rx()
              .moreThan(0, 'Currency is required!')
              .typeError('Currency is required!')
              .required('Currency is required!'),
            amount: y
              .Rx()
              .moreThan(0, 'Amount must be greater than 0')
              .typeError('Amount must be a number')
              .required('Amount is required!'),
            token: y.Z_(),
            note: y.Z_(),
            type: y.Z_().required('Type is required!')
          })),
        w = function (e) {
          var n = e.open,
            r = e.detail,
            c = e.onClose,
            d = e.refetch,
            Z = (0, u.p)(),
            y = Z.notify,
            w = Z.message,
            C = (0, b.K4)({}, { refetchOnMountOrArgChange: !0, skip: !n }).data,
            F = (0, v.cI)({
              resolver: (0, p.X)(S),
              defaultValues: {
                userId: '',
                amount: 0,
                currencyId: 0,
                token: '',
                note: '',
                type: ''
              }
            }),
            P = F.register,
            I = F.setValue,
            T = F.reset,
            R = F.handleSubmit,
            A = F.clearErrors,
            O = F.control,
            W = F.formState.errors,
            E = (0, s.Dx)(),
            M = (0, i.Z)(E, 1)[0];
          (0, l.useEffect)(
            function () {
              if (null === r || void 0 === r || !r.id) return T();
              I('userId', null === r || void 0 === r ? void 0 : r.userId),
                I(
                  'amount',
                  Number(null === r || void 0 === r ? void 0 : r.amount)
                ),
                I(
                  'currencyId',
                  Number(null === r || void 0 === r ? void 0 : r.currencyId)
                ),
                I('token', null === r || void 0 === r ? void 0 : r.token),
                I('note', null === r || void 0 === r ? void 0 : r.note),
                I('type', null === r || void 0 === r ? void 0 : r.type);
            },
            [r]
          );
          var N = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e(n) {
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), M(n).unwrap();
                          case 3:
                            e.sent &&
                              (y({ message: w.CREATED }), T(), c(), d()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              y({ message: e.t0.data.message, type: 'error' });
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
            z = (0, l.useMemo)(
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
              c(), A();
            },
            open: n,
            onOk: !(null !== r && void 0 !== r && r.id) && R(N),
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
                          { name: 'userId', control: O, label: 'User' },
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
                          errors: W
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
                        errors: W,
                        register: P,
                        type: 'number',
                        InputProps: {
                          readOnly: !(null === r || void 0 === r || !r.id)
                        }
                      }),
                      (0, j.jsx)(f.P, {
                        label: 'Currency',
                        name: 'currencyId',
                        control: O,
                        options: z,
                        readOnly: !(null === r || void 0 === r || !r.id),
                        errors: W
                      })
                    ]
                  }),
                  (0, j.jsx)(m.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, j.jsx)(f.P, {
                      name: 'type',
                      label: (0, j.jsx)(h.Z, { id: 'label.type' }),
                      control: O,
                      options: k,
                      readOnly: !(null === r || void 0 === r || !r.id),
                      errors: W
                    })
                  }),
                  (0, j.jsx)(f.n, {
                    multiline: !0,
                    rows: 2,
                    name: 'token',
                    errors: W,
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
                    errors: W,
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
        C = (0, l.memo)(w),
        F = r(5119),
        P = r(890),
        I = r(8096),
        T = r(4925),
        R = r(8406),
        A = r(3786),
        O = r(9164),
        W = r(6151),
        E = r(6934),
        M = r(533),
        N = r(946),
        z = r(8673),
        D =
          ((0, E.ZP)('span')(function (e) {
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
          }),
          r(6871)),
        q = r(9709),
        B = r(1889),
        _ = r(6314),
        U = r(3590),
        H = r(8550),
        L = {
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
        G = function (e) {
          var n = !1;
          'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
            (n = !0);
          var r = (0, u.p)().notify,
            o = e.id,
            c = e.status,
            d = e.method,
            p = e.callbackId,
            v = (0, s.NK)(),
            h = (0, i.Z)(v, 1)[0],
            f = (0, l.useState)(!1),
            g = (0, i.Z)(f, 2),
            x = g[0],
            Z = g[1],
            b = (0, l.useState)(c),
            y = (0, i.Z)(b, 2),
            k = y[0],
            S = y[1],
            w = (0, l.useState)(!1),
            C = (0, i.Z)(w, 2),
            F = C[0],
            P = C[1],
            I = (0, l.useState)({ username: '', amount: 0, transaction: {} }),
            T = (0, i.Z)(I, 2),
            R = T[0],
            A = T[1];
          (0, l.useEffect)(function () {
            S(c), 'seamless' === d && P(!0);
          }, []);
          var O = (0, s.zq)(),
            E = (0, i.Z)(O, 1)[0],
            M = (0, l.useState)(!1),
            N = (0, i.Z)(M, 2),
            z = N[0],
            D = N[1],
            G = (function () {
              var e = (0, a.Z)(
                (0, t.Z)().mark(function e() {
                  var n, r;
                  return (0, t.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), E({ id: p });
                        case 2:
                          'data' in (n = e.sent) && ((r = n.data.data), A(r)),
                            D(!0);
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
            J = function () {
              D(!1);
            },
            K = (function () {
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
                            h({ id: o, body: { action: 'approved' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (S(
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
            V = (function () {
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
                            h({ id: o, body: { action: 'rejected' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (S(
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
                ? (0, j.jsxs)(B.ZP, {
                    container: !0,
                    children: [
                      (0, j.jsx)(B.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, j.jsx)(q.Z, {
                          loading: x,
                          variant: 'contained',
                          color: 'success',
                          onClick: function () {
                            return K();
                          },
                          children: 'Approve'
                        })
                      }),
                      (0, j.jsx)(B.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, j.jsx)(q.Z, {
                          loading: x,
                          variant: 'outlined',
                          color: 'error',
                          onClick: function () {
                            return V();
                          },
                          children: 'Reject'
                        })
                      })
                    ]
                  })
                : 'pending' === k
                ? (0, j.jsx)(B.ZP, {
                    container: !0,
                    children: (0, j.jsx)(B.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, j.jsx)(q.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'secondary',
                        children: 'Pending'
                      })
                    })
                  })
                : 'rejected' === k
                ? (0, j.jsx)(B.ZP, {
                    container: !0,
                    children: (0, j.jsx)(B.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, j.jsx)(q.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'error',
                        children: 'Rejected'
                      })
                    })
                  })
                : (0, j.jsxs)(_.Z, {
                    spacing: { xs: 1, sm: 2 },
                    direction: 'row',
                    flexWrap: 'wrap',
                    children: [
                      (0, j.jsx)(q.Z, {
                        sx: { flex: 1 },
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'success',
                        children: 'Approved'
                      }),
                      F &&
                        (0, j.jsx)(q.Z, {
                          sx: { flex: 1 },
                          fullWidth: !0,
                          variant: 'outlined',
                          color: 'info',
                          onClick: G,
                          children: 'Details'
                        }),
                      (0, j.jsx)(U.Z, {
                        open: z,
                        onClose: J,
                        'aria-labelledby': 'modal-modal-title',
                        'aria-describedby': 'modal-modal-description',
                        children: (0, j.jsxs)(m.Z, {
                          sx: L,
                          children: [
                            (0, j.jsx)(H.Z, {
                              label: 'Username',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: R.username
                            }),
                            (0, j.jsx)(H.Z, {
                              label: 'Amount',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: R.amount
                            }),
                            (0, j.jsxs)('div', {
                              children: [
                                (0, j.jsx)('p', { children: 'JSON Data:' }),
                                (0, j.jsx)('pre', {
                                  children: JSON.stringify(
                                    R.transaction,
                                    null,
                                    2
                                  )
                                })
                              ]
                            }),
                            (0, j.jsx)(W.Z, {
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: J,
                              children: 'Close'
                            })
                          ]
                        })
                      })
                    ]
                  })
          });
        },
        J = function () {
          var e = !1,
            n = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (n = !0),
            'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
              (e = !0);
          (0, D.s0)();
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(P.Z, {
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
                    children: (0, j.jsx)(P.Z, {
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
                    children: (0, j.jsx)(P.Z, {
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
                    children: (0, j.jsx)(P.Z, {
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
                    children: (0, j.jsx)(P.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, N.Z)(
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
                  children: (0, j.jsx)(j.Fragment, {
                    children: (0, j.jsx)(G, {
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
                (0, j.jsx)(F.M, {
                  label: (0, j.jsx)(h.Z, { id: 'label.from' }),
                  onChange: a.onChange
                }),
                (0, j.jsx)(F.M, {
                  label: (0, j.jsx)(h.Z, { id: 'label.to' }),
                  onChange: o.onChange
                }),
                (0, j.jsxs)(I.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, j.jsx)(T.Z, {
                      id: 'Type',
                      children: (0, j.jsx)(h.Z, { id: 'label.type' })
                    }),
                    (0, j.jsxs)(R.Z, {
                      labelId: 'Type',
                      value: t.value,
                      label: (0, j.jsx)(h.Z, { id: 'label.type' }),
                      onChange: function (e) {
                        return t.onChange(e.target.value);
                      },
                      children: [
                        (0, j.jsx)(A.Z, {
                          value: '',
                          children: (0, j.jsx)('em', { children: 'Default' })
                        }),
                        Z.map(function (e) {
                          return (0,
                          j.jsx)(A.Z, { value: e, children: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1)) }, e);
                        })
                      ]
                    })
                  ]
                }),
                (0, j.jsx)(j.Fragment, {
                  children:
                    e && !1 === n
                      ? (0, j.jsx)(O.Z, {
                          children: (0, j.jsx)(W.Z, {
                            href: '?type=agent.add_balance',
                            variant: 'outlined',
                            children: (0, j.jsx)(h.Z, {
                              id: 'label.See-request'
                            })
                          })
                        })
                      : n && !0 === e
                      ? (0, j.jsx)(O.Z, {
                          children: (0, j.jsx)(W.Z, {
                            href: '?type=',
                            variant: 'outlined',
                            color: 'secondary',
                            children: (0, j.jsx)(h.Z, { id: 'label.See-all' })
                          })
                        })
                      : null
                })
              ];
            }
          };
        },
        K =
          ((0, E.ZP)(M.Z)(function (e) {
            var n = e.theme;
            return '\n  color: '.concat(
              n.colors.info.dark,
              ';\n  cursor: pointer;\n'
            );
          }),
          'title.transactions-management'),
        V = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: K }
            ],
            n = (0, u.d)(),
            r = n.visible,
            p = n.hide,
            m = n.show,
            v = (0, u.p)(),
            h = v.notify,
            f = v.message,
            g = J(),
            x = g.tableBody,
            Z = g.tableHeader,
            b = g.tableFilter,
            y = (0, l.useState)([]),
            k = (0, i.Z)(y, 2),
            S = k[0],
            w = k[1],
            F = (0, l.useState)(),
            P = (0, i.Z)(F, 2),
            I = P[0],
            T = P[1],
            R = (0, l.useState)({
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
            A = (0, i.Z)(R, 2),
            O = A[0],
            W = A[1],
            E = (0, s.wv)(),
            M = (0, i.Z)(E, 1)[0],
            N = (0, s.ez)(
              {
                page: O.page,
                size: O.size,
                search: O.search,
                dateFrom: O.dateFrom,
                dateTo: O.dateTo,
                status: O.status,
                type: O.type
              },
              { refetchOnMountOrArgChange: !0 }
            ),
            z = N.data,
            D = N.isFetching,
            q = N.refetch;
          (0, l.useEffect)(function () {
            var e = new URLSearchParams(window.location.search).get('type');
            'agent.add_balance' === e &&
              W((0, o.Z)((0, o.Z)({}, O), {}, { type: e, status: 'pending' }));
          }, []),
            (0, l.useEffect)(
              function () {
                z &&
                  w(function () {
                    var e;
                    return (0,
                    d.TY)(z.data.data, null === (e = Z[O.sortBy]) || void 0 === e ? void 0 : e.name, O.sortDirection);
                  });
              },
              [z, O.sortBy, O.sortDirection]
            );
          var B = (function () {
            var e = (0, a.Z)(
              (0, t.Z)().mark(function e(n) {
                var r;
                return (0, t.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), M({ id: n }).unwrap()
                          );
                        case 3:
                          (r = e.sent), m(), T(r.data), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            h({ message: f.ERROR, type: 'error' });
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
                title: K,
                data: S,
                totalItems:
                  null === z || void 0 === z ? void 0 : z.data.totalItems,
                tableHeader: Z,
                tableBody: x,
                headerTitle: K,
                breadcrumbs: e,
                onOpenModal: function () {
                  m(), T(null);
                },
                isLoading: D,
                onUpdate: B,
                pagination: O,
                onPagination: W,
                tableFilter: b({
                  type: {
                    value: O.type,
                    onChange: function (e) {
                      return W((0, o.Z)((0, o.Z)({}, O), {}, { type: e }));
                    }
                  },
                  dateFrom: {
                    value: O.dateFrom,
                    onChange: function (e) {
                      return W(
                        (0, o.Z)(
                          (0, o.Z)({}, O),
                          {},
                          { dateFrom: (0, d.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: O.dateTo,
                    onChange: function (e) {
                      return W(
                        (0, o.Z)(
                          (0, o.Z)({}, O),
                          {},
                          { dateTo: (0, d.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, j.jsx)(C, { open: r, detail: I, onClose: p, refetch: q })
            ]
          });
        };
    },
    6314: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return F;
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
        v = r(5080),
        h = r(1184),
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
        Z = (0, v.Z)(),
        b = (0, u.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        });
      function y(e) {
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
            s = (0, h.P$)({ values: n.direction, base: l }),
            d = (0, h.P$)({ values: n.spacing, base: l });
          'object' === typeof s &&
            Object.keys(s).forEach(function (e, n, r) {
              if (!s[e]) {
                var t = n > 0 ? s[r[n - 1]] : 'column';
                s[e] = t;
              }
            });
          a = (0, c.Z)(
            a,
            (0, h.k9)({ theme: r }, d, function (e, r) {
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
        return (a = (0, h.dt)(r.breakpoints, a));
      };
      var S = r(6934),
        w = r(1402),
        C = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.createStyledComponent,
            r = void 0 === n ? b : n,
            t = e.useThemeProps,
            c = void 0 === t ? y : t,
            u = e.componentName,
            p = void 0 === u ? 'MuiStack' : u,
            v = r(k),
            h = i.forwardRef(function (e, n) {
              var r = c(e),
                t = (0, m.Z)(r),
                i = t.component,
                u = void 0 === i ? 'div' : i,
                h = t.direction,
                f = void 0 === h ? 'column' : h,
                Z = t.spacing,
                b = void 0 === Z ? 0 : Z,
                y = t.divider,
                k = t.children,
                S = t.className,
                w = t.useFlexGap,
                C = void 0 !== w && w,
                F = (0, a.Z)(t, x),
                P = { direction: f, spacing: b, useFlexGap: C },
                I = (0, s.Z)(
                  { root: ['root'] },
                  function (e) {
                    return (0, d.Z)(p, e);
                  },
                  {}
                );
              return (0,
              g.jsx)(v, (0, o.Z)({ as: u, ownerState: P, ref: n, className: (0, l.Z)(I.root, S) }, F, { children: y ? j(k, y) : k }));
            });
          return h;
        })({
          createStyledComponent: (0, S.ZP)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: function (e, n) {
              return n.root;
            }
          }),
          useThemeProps: function (e) {
            return (0, w.Z)({ props: e, name: 'MuiStack' });
          }
        }),
        F = C;
    }
  }
]);
//# sourceMappingURL=815.dc3ceff3.chunk.js.map
