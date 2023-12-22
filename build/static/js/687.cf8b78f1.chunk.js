'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [687],
  {
    8409: function (e, n, t) {
      t.d(n, {
        R: function () {
          return h;
        }
      });
      var r = t(7762),
        a = t(3433),
        i = t(1413),
        o = t(9439),
        l = t(5987),
        s = t(2791),
        d = t(7590),
        c = t(1827),
        u = t(4732),
        p = t(184),
        v = ['control', 'name', 'parent', 'label', 'errors'],
        m = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        h = function (e) {
          var n = e.control,
            t = e.name,
            h = e.parent,
            f = e.label,
            x = void 0 === f ? 'Agents' : f,
            Z = e.errors,
            g = (0, l.Z)(e, v),
            y = (0, s.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            j = (0, o.Z)(y, 2),
            b = j[0],
            k = j[1],
            S = (0, s.useState)(''),
            w = (0, o.Z)(S, 2),
            C = w[0],
            F = w[1],
            I = (0, u.Z)(C, 500),
            P = (0, s.useState)([]),
            T = (0, o.Z)(P, 2),
            O = T[0],
            R = T[1],
            A = (0, s.useState)({ id: '', name: '', value: '' }),
            W = (0, o.Z)(A, 2),
            E = W[0],
            M = W[1];
          (0, s.useEffect)(
            function () {
              F(I),
                k(function (e) {
                  return (0, i.Z)((0, i.Z)({}, e), {}, { search: I });
                });
            },
            [I]
          );
          var N = (0, c.aN)(
              { size: b.size, page: b.page, search: b.search, id: 1 },
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
                return (0, i.Z)((0, i.Z)({}, e), {}, { page: b.page + 1 });
              });
          }
          (0, s.useEffect)(
            function () {
              k({ search: I || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                R([]);
            },
            [I, h]
          ),
            (0, s.useEffect)(
              function () {
                return R(
                  h
                    ? function (e) {
                        var n,
                          t = []
                            .concat(
                              (0, a.Z)(e),
                              (0, a.Z)(
                                m(
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
                            })(h)
                          ),
                          t
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, a.Z)(e),
                          (0, a.Z)(
                            m(null === z || void 0 === z ? void 0 : z.data.data)
                          )
                        );
                      }
                );
              },
              [z, h]
            ),
            (0, s.useEffect)(
              function () {
                null !== E &&
                  void 0 !== E &&
                  E.id &&
                  R(function (e) {
                    var n = e.slice();
                    return n.unshift(E), n;
                  });
              },
              [E, z]
            );
          var B = (0, s.useMemo)(
            function () {
              var e,
                n = [],
                t = new Set(),
                a = (0, r.Z)(O);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var i = e.value;
                  t.has(i.id) || (t.add(i.id), n.push(i));
                }
              } catch (o) {
                a.e(o);
              } finally {
                a.f();
              }
              return n;
            },
            [O]
          );
          return (0, p.jsx)(
            d.P,
            (0, i.Z)(
              {
                onScroll: q,
                name: t,
                label: x,
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
          return j;
        },
        n: function () {
          return k;
        }
      });
      var r = t(1413),
        a = t(5987),
        i = t(5403),
        o = t(8096),
        l = t(4925),
        s = t(9321),
        d = t(9834),
        c = t(8550),
        u = t(3466),
        p = t(3786),
        v = t(4554),
        m = t(3239),
        h = t(7071),
        f = t(2791),
        x = t(1134),
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
        y = function (e) {
          var n,
            t = e.control,
            f = e.name,
            y = e.label,
            j = e.options,
            b = e.isFetching,
            k = e.errors,
            S = e.searchTerm,
            w = e.onSearch,
            C = e.setSelected,
            F = (0, a.Z)(e, g);
          return t
            ? (0, Z.jsx)(x.Qr, {
                control: t,
                name: f,
                render: function (e) {
                  var n,
                    t = e.field;
                  return (0, Z.jsxs)(o.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== k && void 0 !== k && k[f] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: y
                      }),
                      (0, Z.jsxs)(
                        s.Z,
                        (0, r.Z)(
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: y,
                                value:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.value) || '',
                                error:
                                  !(null === k || void 0 === k || !k[f]) &&
                                  !t.value
                              },
                              t
                            ),
                            F
                          ),
                          {},
                          {
                            children: [
                              w &&
                                (0, Z.jsx)(d.Z, {
                                  children: (0, Z.jsx)(c.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, Z.jsx)(u.Z, {
                                        position: 'start',
                                        children: (0, Z.jsx)(i.Z, {})
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
                              null === j || void 0 === j
                                ? void 0
                                : j.map(function (e) {
                                    return (0, Z.jsx)(
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
                              b &&
                                (0, Z.jsx)(v.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, Z.jsx)(m.Z, {
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
                        !t.value &&
                        (0, Z.jsx)(h.Z, {
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
            : (0, Z.jsxs)(o.Z, {
                fullWidth: !0,
                children: [
                  (0, Z.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== k && void 0 !== k && k[f]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: y
                  }),
                  (0, Z.jsx)(
                    s.Z,
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: y
                        },
                        F
                      ),
                      {},
                      {
                        error: !(null === k || void 0 === k || !k[f]),
                        children:
                          null === j || void 0 === j
                            ? void 0
                            : j.map(function (e) {
                                return (0,
                                Z.jsx)(p.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === k || void 0 === k || !k[f]) &&
                    (0, Z.jsx)(h.Z, {
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
        j = (0, f.memo)(y),
        b = ['label', 'name', 'errors', 'register'],
        k = function (e) {
          var n = e.label,
            t = e.name,
            i = e.errors,
            o = e.register,
            l = (0, a.Z)(e, b);
          return (0, Z.jsx)(
            c.Z,
            (0, r.Z)(
              (0, r.Z)(
                {
                  label: n,
                  error: !!i[t],
                  helperText: i[t] ? i[t].message : '',
                  fullWidth: !0
                },
                o(t)
              ),
              l
            )
          );
        };
    },
    7891: function (e, n, t) {
      var r = t(1413),
        a = t(5987),
        i = t(3329),
        o = t(9709),
        l = t(4721),
        s = t(9164),
        d = t(6151),
        c = t(5574),
        u = t(5661),
        p = t(493),
        v = t(4349),
        m = t(184),
        h = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          f = e.open,
          x = e.isLoading,
          Z = void 0 !== x && x,
          g = e.onClose,
          y = e.onOk,
          j = (0, a.Z)(e, h);
        return (0, m.jsxs)(
          c.Z,
          (0, r.Z)(
            (0, r.Z)({ onClose: g, open: f }, j),
            {},
            {
              children: [
                n && (0, m.jsx)(u.Z, { variant: 'h4', children: n }),
                n && (0, m.jsx)(l.Z, {}),
                (0, m.jsx)(p.Z, { sx: { pt: 0 }, children: t }),
                (0, m.jsx)(l.Z, {}),
                (0, m.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, m.jsx)(d.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: g,
                      children: (0, m.jsx)(v.Z, { id: 'label.cancel' })
                    }),
                    y &&
                      (0, m.jsx)(o.Z, {
                        onClick: y,
                        loading: Z,
                        loadingPosition: 'start',
                        startIcon: (0, m.jsx)(i.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, m.jsx)(v.Z, { id: 'label.OK' })
                      })
                  ]
                })
              ]
            }
          )
        );
      };
    },
    1371: function (e, n, t) {
      t.d(n, {
        L: function () {
          return a;
        },
        s: function () {
          return r;
        }
      });
      var r = [
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
    2687: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return J;
          }
        });
      var r = t(4165),
        a = t(5861),
        i = t(1413),
        o = t(9439),
        l = t(2791),
        s = t(6790),
        d = t(2302),
        c = t(5850),
        u = t(7837),
        p = t(4695),
        v = t(4554),
        m = t(1134),
        h = t(4349),
        f = t(7590),
        x = t(8409),
        Z = t(7891),
        g = t(1371),
        y = t(4167),
        j = t(5243),
        b = t(184),
        k = g.s.map(function (e) {
          return {
            id: e,
            value: e,
            name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
          };
        }),
        S =
          (g.L.map(function (e) {
            return {
              id: e,
              value: e,
              name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
            };
          }),
          j
            .Ry()
            .shape({
              userId: j.Z_().required('Users is required!'),
              currencyId: j
                .Rx()
                .moreThan(0, 'Currency is required!')
                .typeError('Currency is required!')
                .required('Currency is required!'),
              amount: j
                .Rx()
                .moreThan(0, 'Amount must be greater than 0')
                .typeError('Amount must be a number')
                .required('Amount is required!'),
              token: j.Z_(),
              note: j.Z_(),
              type: j.Z_().required('Type is required!')
            })),
        w = function (e) {
          var n = e.open,
            t = e.detail,
            s = e.onClose,
            c = e.refetch,
            g = (0, u.p)(),
            j = g.notify,
            w = g.message,
            C = (0, y.K4)({}, { refetchOnMountOrArgChange: !0, skip: !n }).data,
            F = (0, m.cI)({
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
            I = F.register,
            P = F.setValue,
            T = F.reset,
            O = F.handleSubmit,
            R = F.clearErrors,
            A = F.control,
            W = F.formState.errors,
            E = (0, d.Dx)(),
            M = (0, o.Z)(E, 1)[0];
          (0, l.useEffect)(
            function () {
              if (null === t || void 0 === t || !t.id) return T();
              P('userId', null === t || void 0 === t ? void 0 : t.userId),
                P(
                  'amount',
                  Number(null === t || void 0 === t ? void 0 : t.amount)
                ),
                P(
                  'currencyId',
                  Number(null === t || void 0 === t ? void 0 : t.currencyId)
                ),
                P('token', null === t || void 0 === t ? void 0 : t.token),
                P('note', null === t || void 0 === t ? void 0 : t.note),
                P('type', null === t || void 0 === t ? void 0 : t.type);
            },
            [t]
          );
          var N = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), M(n).unwrap();
                          case 3:
                            e.sent &&
                              (j({ message: w.CREATED }), T(), s(), c()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              j({ message: e.t0.data.message, type: 'error' });
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
          return (0, b.jsx)(Z.Z, {
            title:
              null !== t && void 0 !== t && t.id ? 'View' : 'Add Transaction',
            onClose: function () {
              s(), R();
            },
            open: n,
            onOk: !(null !== t && void 0 !== t && t.id) && O(N),
            fullWidth: !0,
            children: (0, b.jsx)(v.Z, {
              component: 'form',
              id: 'form-transaction',
              children: (0, b.jsxs)('div', {
                className: 'block',
                children: [
                  (0, b.jsx)(v.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, b.jsx)(
                      x.R,
                      (0, i.Z)(
                        (0, i.Z)(
                          { name: 'userId', control: A, label: 'User' },
                          (null === t || void 0 === t ? void 0 : t.id) && {
                            parent: {
                              id:
                                null === t || void 0 === t ? void 0 : t.userId,
                              name:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.username,
                              value:
                                null === t || void 0 === t ? void 0 : t.userId
                            }
                          }
                        ),
                        {},
                        {
                          readOnly: !(null === t || void 0 === t || !t.id),
                          errors: W
                        }
                      )
                    )
                  }),
                  (0, b.jsxs)(v.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: [
                      (0, b.jsx)(f.n, {
                        name: 'amount',
                        label: 'Amount',
                        errors: W,
                        register: I,
                        type: 'number',
                        InputProps: {
                          readOnly: !(null === t || void 0 === t || !t.id)
                        }
                      }),
                      (0, b.jsx)(f.P, {
                        label: 'Currency',
                        name: 'currencyId',
                        control: A,
                        options: z,
                        readOnly: !(null === t || void 0 === t || !t.id),
                        errors: W
                      })
                    ]
                  }),
                  (0, b.jsx)(v.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, b.jsx)(f.P, {
                      name: 'type',
                      label: (0, b.jsx)(h.Z, { id: 'label.type' }),
                      control: A,
                      options: k,
                      readOnly: !(null === t || void 0 === t || !t.id),
                      errors: W
                    })
                  }),
                  (0, b.jsx)(f.n, {
                    multiline: !0,
                    rows: 2,
                    name: 'token',
                    errors: W,
                    register: I,
                    label: 'Token',
                    InputProps: {
                      readOnly: !(null === t || void 0 === t || !t.id)
                    }
                  }),
                  (0, b.jsx)(f.n, {
                    sx: { my: 2 },
                    multiline: !0,
                    rows: 2,
                    name: 'note',
                    errors: W,
                    register: I,
                    label: 'Note',
                    InputProps: {
                      readOnly: !(null === t || void 0 === t || !t.id)
                    }
                  })
                ]
              })
            })
          });
        },
        C = (0, l.memo)(w),
        F = t(890),
        I = t(8096),
        P = t(4925),
        T = t(9321),
        O = t(3786),
        R = t(9164),
        A = t(6151),
        W = t(6934),
        E = t(533),
        M = t(5119),
        N = t(946),
        z = t(8673),
        D = t(6871),
        q = (t(7395), t(9709)),
        B = t(1889),
        _ = t(6314),
        H = t(3590),
        U = t(8550),
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
        K = function (e) {
          var n = !1;
          'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
            (n = !0);
          var t = (0, u.p)().notify,
            i = e.id,
            s = e.status,
            c = e.method,
            p = e.callbackId,
            m = (0, d.NK)(),
            h = (0, o.Z)(m, 1)[0],
            f = (0, l.useState)(!1),
            x = (0, o.Z)(f, 2),
            Z = x[0],
            g = x[1],
            y = (0, l.useState)(s),
            j = (0, o.Z)(y, 2),
            k = j[0],
            S = j[1],
            w = (0, l.useState)(!1),
            C = (0, o.Z)(w, 2),
            F = C[0],
            I = C[1],
            P = (0, l.useState)({ username: '', amount: 0, transaction: {} }),
            T = (0, o.Z)(P, 2),
            O = T[0],
            R = T[1];
          (0, l.useEffect)(function () {
            S(s), 'seamless' === c && I(!0);
          }, []);
          var W = (0, d.zq)(),
            E = (0, o.Z)(W, 1)[0],
            M = (0, l.useState)(!1),
            N = (0, o.Z)(M, 2),
            z = N[0],
            D = N[1],
            K = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e() {
                  var n, t;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), E({ id: p });
                        case 2:
                          'data' in (n = e.sent) && ((t = n.data.data), R(t)),
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
            V = function () {
              D(!1);
            },
            G = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e() {
                  var n, a;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            g(!0),
                            (e.next = 3),
                            h({ id: i, body: { action: 'approved' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (S(
                                null === a || void 0 === a ? void 0 : a.action
                              ),
                              g(!1),
                              t({
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
            J = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e() {
                  var n, a;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            g(!0),
                            (e.next = 3),
                            h({ id: i, body: { action: 'rejected' } }).unwrap()
                          );
                        case 3:
                          (n = e.sent),
                            null !== (a = n.data) &&
                              void 0 !== a &&
                              a.action &&
                              (S(
                                null === a || void 0 === a ? void 0 : a.action
                              ),
                              g(!1),
                              t({
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
          return (0, b.jsx)(b.Fragment, {
            children:
              n && 'pending' === k
                ? (0, b.jsxs)(B.ZP, {
                    container: !0,
                    children: [
                      (0, b.jsx)(B.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, b.jsx)(q.Z, {
                          loading: Z,
                          variant: 'contained',
                          color: 'success',
                          onClick: function () {
                            return G();
                          },
                          children: 'Approve'
                        })
                      }),
                      (0, b.jsx)(B.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, b.jsx)(q.Z, {
                          loading: Z,
                          variant: 'outlined',
                          color: 'error',
                          onClick: function () {
                            return J();
                          },
                          children: 'Reject'
                        })
                      })
                    ]
                  })
                : 'pending' === k
                ? (0, b.jsx)(B.ZP, {
                    container: !0,
                    children: (0, b.jsx)(B.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, b.jsx)(q.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'secondary',
                        children: 'Pending'
                      })
                    })
                  })
                : 'rejected' === k
                ? (0, b.jsx)(B.ZP, {
                    container: !0,
                    children: (0, b.jsx)(B.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, b.jsx)(q.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'error',
                        children: 'Rejected'
                      })
                    })
                  })
                : (0, b.jsxs)(_.Z, {
                    spacing: { xs: 1, sm: 2 },
                    direction: 'row',
                    flexWrap: 'wrap',
                    children: [
                      (0, b.jsx)(q.Z, {
                        sx: { flex: 1 },
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'success',
                        children: 'Approved'
                      }),
                      F &&
                        (0, b.jsx)(q.Z, {
                          sx: { flex: 1 },
                          fullWidth: !0,
                          variant: 'outlined',
                          color: 'info',
                          onClick: K,
                          children: 'Details'
                        }),
                      (0, b.jsx)(H.Z, {
                        open: z,
                        onClose: V,
                        'aria-labelledby': 'modal-modal-title',
                        'aria-describedby': 'modal-modal-description',
                        children: (0, b.jsxs)(v.Z, {
                          sx: L,
                          children: [
                            (0, b.jsx)(U.Z, {
                              label: 'Username',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: O.username
                            }),
                            (0, b.jsx)(U.Z, {
                              label: 'Amount',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: O.amount
                            }),
                            (0, b.jsxs)('div', {
                              children: [
                                (0, b.jsx)('p', { children: 'JSON Data:' }),
                                (0, b.jsx)('pre', {
                                  children: JSON.stringify(
                                    O.transaction,
                                    null,
                                    2
                                  )
                                })
                              ]
                            }),
                            (0, b.jsx)(A.Z, {
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: V,
                              children: 'Close'
                            })
                          ]
                        })
                      })
                    ]
                  })
          });
        },
        V = function () {
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
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(F.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.username
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(F.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.amount
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(F.Z, {
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
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(F.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.method
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(F.Z, {
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
                  children: (0, b.jsx)(b.Fragment, {
                    children: (0, b.jsx)(K, {
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
            tableFilter: function (t) {
              var r = t.type,
                a = t.dateFrom,
                i = t.dateTo;
              return [
                (0, b.jsx)(M.M, {
                  label: (0, b.jsx)(h.Z, { id: 'label.from' }),
                  onChange: a.onChange
                }),
                (0, b.jsx)(M.M, {
                  label: (0, b.jsx)(h.Z, { id: 'label.to' }),
                  onChange: i.onChange
                }),
                (0, b.jsxs)(I.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, b.jsx)(P.Z, {
                      id: 'Type',
                      children: (0, b.jsx)(h.Z, { id: 'label.type' })
                    }),
                    (0, b.jsxs)(T.Z, {
                      labelId: 'Type',
                      value: r.value,
                      label: (0, b.jsx)(h.Z, { id: 'label.type' }),
                      onChange: function (e) {
                        return r.onChange(e.target.value);
                      },
                      children: [
                        (0, b.jsx)(O.Z, {
                          value: '',
                          children: (0, b.jsx)('em', { children: 'Default' })
                        }),
                        g.s.map(function (e) {
                          return (0,
                          b.jsx)(O.Z, { value: e, children: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1)) }, e);
                        })
                      ]
                    })
                  ]
                }),
                (0, b.jsx)(b.Fragment, {
                  children:
                    e && !1 === n
                      ? (0, b.jsx)(R.Z, {
                          children: (0, b.jsx)(A.Z, {
                            href: '?type=agent.add_balance',
                            variant: 'outlined',
                            children: (0, b.jsx)(h.Z, {
                              id: 'label.See-request'
                            })
                          })
                        })
                      : n && !0 === e
                      ? (0, b.jsx)(R.Z, {
                          children: (0, b.jsx)(A.Z, {
                            href: '?type=',
                            variant: 'outlined',
                            color: 'secondary',
                            children: (0, b.jsx)(h.Z, { id: 'label.See-all' })
                          })
                        })
                      : null
                })
              ];
            }
          };
        },
        G =
          ((0, W.ZP)(E.Z)(function (e) {
            var n = e.theme;
            return '\n  color: '.concat(
              n.colors.info.dark,
              ';\n  cursor: pointer;\n'
            );
          }),
          'title.transactions-management'),
        J = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: G }
            ],
            n = (0, u.d)(),
            t = n.visible,
            p = n.hide,
            v = n.show,
            m = (0, u.p)(),
            h = m.notify,
            f = m.message,
            x = V(),
            Z = x.tableBody,
            g = x.tableHeader,
            y = x.tableFilter,
            j = (0, l.useState)([]),
            k = (0, o.Z)(j, 2),
            S = k[0],
            w = k[1],
            F = (0, l.useState)(),
            I = (0, o.Z)(F, 2),
            P = I[0],
            T = I[1],
            O = (0, l.useState)({
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
            R = (0, o.Z)(O, 2),
            A = R[0],
            W = R[1],
            E = (0, d.wv)(),
            M = (0, o.Z)(E, 1)[0],
            N = (0, d.ez)(
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
            z = N.data,
            D = N.isFetching,
            q = N.refetch;
          (0, l.useEffect)(function () {
            var e = new URLSearchParams(window.location.search).get('type');
            'agent.add_balance' === e &&
              W((0, i.Z)((0, i.Z)({}, A), {}, { type: e, status: 'pending' }));
          }, []),
            (0, l.useEffect)(
              function () {
                z &&
                  w(function () {
                    var e;
                    return (0,
                    c.TY)(z.data.data, null === (e = g[A.sortBy]) || void 0 === e ? void 0 : e.name, A.sortDirection);
                  });
              },
              [z, A.sortBy, A.sortDirection]
            );
          var B = (function () {
            var e = (0, a.Z)(
              (0, r.Z)().mark(function e(n) {
                var t;
                return (0, r.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), M({ id: n }).unwrap()
                          );
                        case 3:
                          (t = e.sent), v(), T(t.data), (e.next = 11);
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
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(s.Z, {
                title: G,
                data: S,
                totalItems:
                  null === z || void 0 === z ? void 0 : z.data.totalItems,
                tableHeader: g,
                tableBody: Z,
                headerTitle: G,
                breadcrumbs: e,
                onOpenModal: function () {
                  v(), T(null);
                },
                isLoading: D,
                onUpdate: B,
                pagination: A,
                onPagination: W,
                tableFilter: y({
                  type: {
                    value: A.type,
                    onChange: function (e) {
                      return W((0, i.Z)((0, i.Z)({}, A), {}, { type: e }));
                    }
                  },
                  dateFrom: {
                    value: A.dateFrom,
                    onChange: function (e) {
                      return W(
                        (0, i.Z)(
                          (0, i.Z)({}, A),
                          {},
                          { dateFrom: (0, c.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: A.dateTo,
                    onChange: function (e) {
                      return W(
                        (0, i.Z)(
                          (0, i.Z)({}, A),
                          {},
                          { dateTo: (0, c.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, b.jsx)(C, { open: t, detail: P, onClose: p, refetch: q })
            ]
          });
        };
    },
    3329: function (e, n, t) {
      var r = t(4836);
      n.Z = void 0;
      var a = r(t(5649)),
        i = t(184),
        o = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = o;
    },
    6314: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return F;
        }
      });
      var r = t(4942),
        a = t(3366),
        i = t(7462),
        o = t(2791),
        l = t(8182),
        s = t(2466),
        d = t(4419),
        c = t(1217),
        u = t(3457),
        p = t(6083),
        v = t(8519),
        m = t(5080),
        h = t(1184),
        f = t(5682),
        x = t(184),
        Z = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
          'className',
          'useFlexGap'
        ],
        g = (0, m.Z)(),
        y = (0, u.Z)('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        });
      function j(e) {
        return (0, p.Z)({ props: e, name: 'MuiStack', defaultTheme: g });
      }
      function b(e, n) {
        var t = o.Children.toArray(e).filter(Boolean);
        return t.reduce(function (e, r, a) {
          return (
            e.push(r),
            a < t.length - 1 &&
              e.push(o.cloneElement(n, { key: 'separator-'.concat(a) })),
            e
          );
        }, []);
      }
      var k = function (e) {
        var n = e.ownerState,
          t = e.theme,
          a = (0, i.Z)(
            { display: 'flex', flexDirection: 'column' },
            (0, h.k9)(
              { theme: t },
              (0, h.P$)({
                values: n.direction,
                breakpoints: t.breakpoints.values
              }),
              function (e) {
                return { flexDirection: e };
              }
            )
          );
        if (n.spacing) {
          var o = (0, f.hB)(t),
            l = Object.keys(t.breakpoints.values).reduce(function (e, t) {
              return (
                (('object' === typeof n.spacing && null != n.spacing[t]) ||
                  ('object' === typeof n.direction &&
                    null != n.direction[t])) &&
                  (e[t] = !0),
                e
              );
            }, {}),
            d = (0, h.P$)({ values: n.direction, base: l }),
            c = (0, h.P$)({ values: n.spacing, base: l });
          'object' === typeof d &&
            Object.keys(d).forEach(function (e, n, t) {
              if (!d[e]) {
                var r = n > 0 ? d[t[n - 1]] : 'column';
                d[e] = r;
              }
            });
          a = (0, s.Z)(
            a,
            (0, h.k9)({ theme: t }, c, function (e, t) {
              return n.useFlexGap
                ? { gap: (0, f.NA)(o, e) }
                : {
                    '& > :not(style) ~ :not(style)': (0, r.Z)(
                      { margin: 0 },
                      'margin'.concat(
                        ((a = t ? d[t] : n.direction),
                        {
                          row: 'Left',
                          'row-reverse': 'Right',
                          column: 'Top',
                          'column-reverse': 'Bottom'
                        }[a])
                      ),
                      (0, f.NA)(o, e)
                    )
                  };
              var a;
            })
          );
        }
        return (a = (0, h.dt)(t.breakpoints, a));
      };
      var S = t(6934),
        w = t(1402),
        C = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.createStyledComponent,
            t = void 0 === n ? y : n,
            r = e.useThemeProps,
            s = void 0 === r ? j : r,
            u = e.componentName,
            p = void 0 === u ? 'MuiStack' : u,
            m = t(k),
            h = o.forwardRef(function (e, n) {
              var t = s(e),
                r = (0, v.Z)(t),
                o = r.component,
                u = void 0 === o ? 'div' : o,
                h = r.direction,
                f = void 0 === h ? 'column' : h,
                g = r.spacing,
                y = void 0 === g ? 0 : g,
                j = r.divider,
                k = r.children,
                S = r.className,
                w = r.useFlexGap,
                C = void 0 !== w && w,
                F = (0, a.Z)(r, Z),
                I = { direction: f, spacing: y, useFlexGap: C },
                P = (0, d.Z)(
                  { root: ['root'] },
                  function (e) {
                    return (0, c.Z)(p, e);
                  },
                  {}
                );
              return (0,
              x.jsx)(m, (0, i.Z)({ as: u, ownerState: I, ref: n, className: (0, l.Z)(P.root, S) }, F, { children: j ? b(k, j) : k }));
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
//# sourceMappingURL=687.cf8b78f1.chunk.js.map
