'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [917],
  {
    1917: (e, a, n) => {
      n.r(a), n.d(a, { default: () => V });
      var t = n(9709),
        i = n(5574),
        l = n(697),
        r = n(890),
        d = n(8550),
        s = n(2791),
        o = n(1134),
        c = n(5048),
        u = n(6790),
        m = n(2302),
        h = n(4222),
        g = n(5850),
        v = n(7837),
        x = n(4695),
        b = n(1889),
        j = n(6314),
        p = n(5523),
        Z = n(9955),
        y = n(4349),
        f = n(7590),
        I = n(8409),
        A = n(7891),
        C = n(9419),
        F = n(5674),
        w = n(4167),
        R = n(8007),
        k = n(184);
      const E = R.Ry().shape({
          name: R.Z_().required('Last name is required!'),
          email: R.Z_().required('Email is required!'),
          roleId: R.Rx(),
          currencyId: R.Rx().required('Currency is required!'),
          isActive: R.O7(),
          username: R.Z_().required('Username is required!'),
          parentAgentId: R.Z_().nullable()
        }),
        O = (e) => {
          let { open: a, detail: n, onClose: t, refetch: i, hide: r } = e;
          const { notify: d, message: c } = (0, v.p)(),
            [u, m] = (0, s.useState)(!1),
            [g, { isLoading: R }] = (0, h.kD)(),
            { data: O } = (0, F.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== n && void 0 !== n && n.id)
              }
            ),
            { data: D } = (0, w.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== n && void 0 !== n && n.id)
              }
            ),
            {
              register: P,
              setValue: S,
              reset: T,
              handleSubmit: M,
              control: B,
              formState: { errors: W }
            } = (0, o.cI)({
              resolver: (0, x.X)(E),
              defaultValues: {
                name: '',
                email: '',
                roleId: 2,
                username: '',
                isActive: !1,
                currencyId: 0,
                parentAgentId: ''
              }
            });
          (0, s.useEffect)(() => {
            var e, a;
            null !== n && void 0 !== n && n.id
              ? (S('name', n.name),
                S('username', n.username),
                S('email', n.email),
                S('isActive', n.isActive),
                S(
                  'roleId',
                  null === n ||
                    void 0 === n ||
                    null === (e = n.role) ||
                    void 0 === e
                    ? void 0
                    : e.id
                ),
                S(
                  'currencyId',
                  null === n ||
                    void 0 === n ||
                    null === (a = n.currency) ||
                    void 0 === a
                    ? void 0
                    : a.id
                ),
                S(
                  'parentAgentId',
                  null === n || void 0 === n ? void 0 : n.parentAgentId
                ))
              : T();
          }, [n]);
          (0, s.useMemo)(() => {
            var e;
            return null === O ||
              void 0 === O ||
              null === (e = O.data) ||
              void 0 === e
              ? void 0
              : e.map((e) => ({ id: e.id, name: e.name, value: e.id }));
          }, [O]);
          const _ = (0, s.useMemo)(
            () =>
              null === D || void 0 === D
                ? void 0
                : D.map((e) => ({ id: e.id, name: e.name, value: e.id })),
            [D]
          );
          return (0, k.jsx)(A.Z, {
            title:
              null !== n && void 0 !== n && n.id
                ? 'Edit '.concat(n.name)
                : 'Add User',
            onClose: t,
            open: a,
            isLoading: R,
            onOk:
              null !== n && void 0 !== n && n.id
                ? M(async (e) => {
                    try {
                      null !== n &&
                        void 0 !== n &&
                        n.id &&
                        (await g({
                          id: n.id,
                          body: {
                            name: e.name,
                            email: e.email,
                            roleId: e.roleId,
                            isActive: e.isActive,
                            currencyId: e.currencyId,
                            parentAgentId: e.parentAgentId
                          }
                        }).unwrap(),
                        d({ message: c.UPDATED })),
                        i(),
                        r(),
                        T();
                    } catch (a) {
                      d({ message: c.ERROR, type: 'error' });
                    }
                  })
                : () => m(!0),
            children:
              null !== n && void 0 !== n && n.id
                ? (0, k.jsx)(l.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, k.jsx)('div', {
                      className: 'block',
                      children: (0, k.jsxs)(b.ZP, {
                        container: !0,
                        spacing: 2,
                        mt: 1,
                        children: [
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 8,
                            children: (0, k.jsx)(f.n, {
                              label: (0, k.jsx)(y.Z, { id: 'label.username' }),
                              name: 'username',
                              errors: W,
                              register: P,
                              disabled: !(null === n || void 0 === n || !n.id)
                            })
                          }),
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, k.jsx)(j.Z, {
                              spacing: 2,
                              justifyContent: 'center',
                              alignItems: 'center',
                              children: (0, k.jsx)(p.Z, {
                                label: 'Active',
                                control: (0, k.jsx)(Z.Z, {
                                  name: 'isActive',
                                  defaultChecked: !(
                                    null === n ||
                                    void 0 === n ||
                                    !n.isActive
                                  ),
                                  onChange: (e) => {
                                    const a = e.target.checked;
                                    S('isActive', a);
                                  }
                                })
                              })
                            })
                          }),
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, k.jsx)(f.n, {
                              label: (0, k.jsx)(y.Z, { id: 'label.name' }),
                              name: 'name',
                              errors: W,
                              register: P
                            })
                          }),
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, k.jsx)(f.n, {
                              label: 'Email',
                              name: 'email',
                              errors: W,
                              register: P
                            })
                          }),
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, k.jsx)(I.R, {
                              control: B,
                              name: 'parentAgentId',
                              errors: W
                            })
                          }),
                          (0, k.jsx)(b.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, k.jsx)(l.Z, {
                              display: 'flex',
                              gap: '1rem',
                              children: (0, k.jsx)(f.P, {
                                label: 'Currency',
                                name: 'currencyId',
                                control: B,
                                options: _
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                : (0, k.jsx)(C.Z, {
                    isUserRegister: !0,
                    isSubmit: u,
                    setIsSubmit: () => m(!1),
                    refetch: i,
                    onClose: t
                  })
          });
        },
        D = (0, s.memo)(O);
      var P = n(2970),
        S = n(4294),
        T = n(8121),
        M = n(8096),
        B = n(4925),
        W = n(9321),
        _ = n(3786),
        q = n(946),
        L = n(8673),
        U = n(8901);
      const z = () => {
        const { visible: e, toggle: a } = (0, v.d)(),
          [n, t] = (0, s.useState)(),
          i = (e) =>
            Math.abs(
              Object.keys(null === e || void 0 === e ? void 0 : e.balances)
                .filter(
                  (e) =>
                    'deposit' === e ||
                    'withdraw' === e ||
                    'user.add_balance' === e
                )
                .reduce((a, n) => a + -1 * e.balances[n], 0)
            );
        return {
          tableBody: (e) => {
            var n, l, d, s, o, c, u, m;
            return [
              {
                align: 'inherit',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(r.Z, {
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
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(r.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.agentName
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(S.Z, {
                    variant: 'outlined',
                    startIcon: (0, k.jsx)(U.Z, {}),
                    href: 'transactions/'.concat(e.id),
                    children: e.balance
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(S.Z, {
                    variant: 'outlined',
                    startIcon: (0, k.jsx)(U.Z, {}),
                    href: 'transactions/'.concat(e.id, '/betting-history'),
                    children:
                      null !==
                        (n =
                          (null !==
                            (l =
                              null === e ||
                              void 0 === e ||
                              null === (d = e.balances) ||
                              void 0 === d
                                ? void 0
                                : d.win) && void 0 !== l
                            ? l
                            : 0) +
                          (null !==
                            (s =
                              null === e ||
                              void 0 === e ||
                              null === (o = e.balances) ||
                              void 0 === o
                                ? void 0
                                : o.bet) && void 0 !== s
                            ? s
                            : 0) +
                          (null !==
                            (c =
                              null === e ||
                              void 0 === e ||
                              null === (u = e.balances) ||
                              void 0 === u
                                ? void 0
                                : u.cancel) && void 0 !== c
                            ? c
                            : 0)) && void 0 !== n
                        ? n
                        : 0
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(S.Z, {
                    variant: 'outlined',
                    startIcon: (0, k.jsx)(U.Z, {}),
                    href: 'transactions/'.concat(e.id, '/recharge-history'),
                    children:
                      (null === e || void 0 === e ? void 0 : e.balances) && i(e)
                  })
                })
              },
              {
                align: 'right',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(T.Z, {
                    badgeContent:
                      null !== e && void 0 !== e && e.isActive
                        ? 'Active'
                        : 'Locked',
                    color:
                      null !== e && void 0 !== e && e.isActive
                        ? 'success'
                        : 'secondary',
                    sx: { padding: 1 },
                    children: (0, k.jsx)(r.Z, {
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
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(r.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      (null === e || void 0 === e ? void 0 : e.loggedIn) &&
                      (0, q.Z)(
                        (0, L.Z)(
                          null === e || void 0 === e ? void 0 : e.loggedIn
                        ),
                        'dd/MM/yyyy HH:mm'
                      )
                  })
                })
              },
              {
                align: 'center',
                children: (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(S.Z, {
                    disabled:
                      (null ===
                        (m = JSON.parse(localStorage.getItem('user'))) ||
                      void 0 === m
                        ? void 0
                        : m.id) != e.agentId,
                    variant: 'outlined',
                    startIcon: (0, k.jsx)(U.Z, {}),
                    onClick: () =>
                      ((e) => {
                        t(e), a();
                      })(e),
                    children: 'Payment'
                  })
                })
              }
            ];
          },
          tableHeader: [
            { align: 'inherit', title: 'label.name', name: 'name' },
            { align: 'inherit', title: 'label.affiliated-agent', name: 'name' },
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
            { align: 'right', title: 'label.loggedin', name: 'updatedAt' },
            { align: 'center', title: 'title.managements', name: 'management' },
            { align: 'right', title: 'label.actions' }
          ],
          tableFilter: (e) => {
            let { status: a, dateFrom: n, dateTo: t } = e;
            return [
              (0, k.jsx)(P.M, {
                label: (0, k.jsx)(y.Z, { id: 'label.from' }),
                onChange: n.onChange
              }),
              (0, k.jsx)(P.M, {
                label: (0, k.jsx)(y.Z, { id: 'label.to' }),
                onChange: t.onChange
              }),
              (0, k.jsxs)(M.Z, {
                sx: { m: 1, minWidth: 120 },
                children: [
                  (0, k.jsx)(B.Z, {
                    id: 'isActive',
                    children: (0, k.jsx)(y.Z, { id: 'label.status' })
                  }),
                  (0, k.jsxs)(W.Z, {
                    labelId: 'isActive',
                    value: a.value,
                    label: (0, k.jsx)(y.Z, { id: 'label.status' }),
                    onChange: (e) => a.onChange(e.target.value),
                    children: [
                      (0, k.jsx)(_.Z, {
                        value: '',
                        children: (0, k.jsx)('em', {
                          children: (0, k.jsx)(y.Z, { id: 'label.default' })
                        })
                      }),
                      (0, k.jsx)(_.Z, {
                        value: 'active',
                        children: (0, k.jsx)(y.Z, { id: 'label.active' })
                      }),
                      (0, k.jsx)(_.Z, {
                        value: 'disable',
                        children: (0, k.jsx)(y.Z, { id: 'label.disable' })
                      })
                    ]
                  })
                ]
              })
            ];
          },
          visible: e,
          toggle: a,
          user: n
        };
      };
      var H = n(3504);
      const N = 'title.users-management',
        V = () => {
          const e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: N }
            ],
            [a] = (0, H.lr)(),
            { visible: n, hide: x, show: b } = (0, v.d)(),
            { notify: j, message: p } = (0, v.p)(),
            { reset: Z } = (0, o.cI)(),
            {
              tableBody: y,
              tableHeader: f,
              tableFilter: I,
              visible: A,
              toggle: C,
              user: F
            } = z(),
            [w, R] = (0, s.useState)({
              userId: '',
              amount: 0,
              type: 'user.add_balance',
              note: '',
              status: 'pending'
            }),
            [E, O] = (0, s.useState)([]),
            [P, S] = (0, s.useState)(),
            [T, M] = (0, s.useState)({
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
            [B] = (0, h.V_)(),
            [W, { isLoading: _ }] = (0, h.I1)(),
            [q, { isLoading: L }] = (0, m.Dx)(),
            { permissions: U } = (0, c.v9)((e) => e.common),
            {
              data: V,
              isFetching: Y,
              refetch: J
            } = (0, h.zQ)(
              {
                page: T.page,
                size: T.size,
                search: T.search,
                dateFrom: T.dateFrom,
                dateTo: T.dateTo
              },
              { refetchOnMountOrArgChange: !0 }
            );
          (0, s.useEffect)(() => {
            if (V) {
              const e = a.get('parentId');
              if (e) {
                const a = V.data.data.filter((a) => a.agentId === e);
                O(() => {
                  var e;
                  return (0, g.TY)(
                    a,
                    null === (e = f[T.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    T.sortDirection
                  );
                });
              } else
                O(() => {
                  var e;
                  return (0, g.TY)(
                    V.data.data,
                    null === (e = f[T.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    T.sortDirection
                  );
                });
            }
          }, [V, T.sortBy, T.sortDirection, a]),
            (0, s.useEffect)(() => {
              F &&
                R((e) => ({
                  ...e,
                  userId: null === F || void 0 === F ? void 0 : F.id,
                  amount: Number(e.amount)
                }));
            }, [F]);
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(u.Z, {
                title: N,
                data: E,
                totalItems:
                  null === V || void 0 === V ? void 0 : V.data.totalItems,
                tableHeader: f,
                tableBody: y,
                headerTitle: N,
                breadcrumbs: e,
                isLoading: Y || _,
                onDelete: async (e) => {
                  try {
                    await W(e).unwrap(), j({ message: p.DELETED }), J();
                  } catch (n) {
                    var a;
                    j({
                      message:
                        (null === n ||
                        void 0 === n ||
                        null === (a = n.data) ||
                        void 0 === a
                          ? void 0
                          : a.message) || p.ERROR,
                      type: 'error'
                    });
                  }
                },
                onUpdate: async (e) => {
                  try {
                    const a = await B(e).unwrap();
                    b(), S(a.data);
                  } catch (a) {
                    j({ message: p.ERROR, type: 'error' });
                  }
                },
                pagination: T,
                onPagination: M,
                onOpenModal:
                  ((K = U),
                  (Q = 'create'),
                  (null === K || void 0 === K ? void 0 : K.includes(Q)) &&
                    (() => {
                      b(), S(null);
                    })),
                tableFilter: I({
                  status: {
                    value: T.status,
                    onChange: (e) => M({ ...T, status: e })
                  },
                  dateFrom: {
                    value: T.dateFrom,
                    onChange: (e) => M({ ...T, dateFrom: (0, g.Zd)(e, 'from') })
                  },
                  dateTo: {
                    value: T.dateTo,
                    onChange: (e) => M({ ...T, dateTo: (0, g.Zd)(e, 'to') })
                  }
                })
              }),
              (0, k.jsx)(D, {
                open: n,
                detail: P,
                onClose: x,
                refetch: J,
                hide: x
              }),
              (0, k.jsx)(i.Z, {
                open: A,
                onClose: C,
                children: (0, k.jsxs)(l.Z, {
                  component: 'form',
                  padding: 2,
                  width: '400px',
                  children: [
                    (0, k.jsx)(r.Z, {
                      gutterBottom: !0,
                      variant: 'h5',
                      component: 'div',
                      children: 'Add transaction'
                    }),
                    (0, k.jsxs)(l.Z, {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: 2,
                      pt: 2,
                      children: [
                        (0, k.jsx)(d.Z, {
                          label: 'Insert the amount here',
                          variant: 'outlined',
                          fullWidth: !0,
                          onInput: (e) => {
                            return (
                              (a = Number(e.target.value)),
                              (n = 'amount'),
                              void R((e) => ({ ...e, [''.concat(n)]: a }))
                            );
                            var a, n;
                          }
                        }),
                        (0, k.jsx)(t.Z, {
                          loading: L,
                          onClick: async () => {
                            try {
                              (await q(w).unwrap()) &&
                                (C(), j({ message: p.UPDATED }), J(), x(), Z());
                            } catch (a) {
                              var e;
                              j({
                                message:
                                  (null === a ||
                                  void 0 === a ||
                                  null === (e = a.data) ||
                                  void 0 === e
                                    ? void 0
                                    : e.message) || p.ERROR,
                                type: 'error'
                              });
                            }
                          },
                          size: 'large',
                          variant: 'contained',
                          children: (0, k.jsx)(r.Z, {
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
          var K, Q;
        };
    }
  }
]);
//# sourceMappingURL=917.8a5c7db1.chunk.js.map
