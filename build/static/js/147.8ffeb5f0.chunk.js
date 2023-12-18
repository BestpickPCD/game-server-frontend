'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [147],
  {
    6967: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          }
        });
      var r = n(4942),
        i = n(4165),
        a = n(5861),
        l = n(1413),
        s = n(9439),
        o = n(9709),
        d = n(5574),
        u = n(4554),
        c = n(1889),
        m = n(890),
        p = n(8550),
        h = n(2791),
        v = n(5048),
        f = n(1134),
        Z = n(6790),
        x = n(2302),
        g = n(5850),
        y = n(7837),
        b = n(4695),
        j = n(8406),
        T = n(3786),
        k = n(7891),
        w = n(7945),
        C = n(6727),
        R = n(184),
        I = C.Ry().shape({
          limitType: C.Z_().required('limitType is required!'),
          limitTypeId: C.Z_().required('limitTypeId is required!'),
          limit: C.Rx()
            .nullable()
            .positive('limit must be positive')
            .required('limit is required!')
        }),
        E = function (e) {
          var t = e.open,
            n = e.detail,
            r = e.onClose,
            o = e.refetch,
            d = e.hide,
            c = (0, y.p)(),
            m = c.notify,
            v = c.message,
            Z = (0, x.CQ)(),
            g = (0, s.Z)(Z, 2),
            C = g[0],
            E = g[1].isLoading,
            D = (0, x.U4)(),
            S = (0, s.Z)(D, 2),
            W = S[0],
            A = S[1].isLoading,
            q = (0, f.cI)({
              resolver: (0, b.X)(I),
              defaultValues: { limitType: '', limitTypeId: '', limit: 0 }
            }),
            F = q.register,
            L = q.setValue,
            O = q.handleSubmit,
            P = q.reset,
            B = q.formState.errors;
          (0, h.useEffect)(
            function () {
              null !== n && void 0 !== n && n.id
                ? (L('limitType', n.limitType),
                  L('limitTypeId', n.limitTypeId),
                  L('limit', n.limit))
                : P();
            },
            [n]
          );
          var M = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === n || void 0 === n || !n.id)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 4),
                              W({
                                id: null === n || void 0 === n ? void 0 : n.id,
                                body: t
                              }).unwrap()
                            );
                          case 4:
                            e.next = 8;
                            break;
                          case 6:
                            return (e.next = 8), C(t).unwrap();
                          case 8:
                            m({
                              message:
                                null !== n && void 0 !== n && n._id
                                  ? v.UPDATED
                                  : v.CREATED
                            }),
                              o(),
                              d(),
                              P(),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(0)),
                              m({ message: v.ERROR, type: 'error' });
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            N = (0, h.useState)(''),
            U = (0, s.Z)(N, 2),
            _ = U[0],
            H = U[1],
            V = (0, h.useState)(''),
            G = (0, s.Z)(V, 2),
            z = G[0],
            J = G[1],
            X = (0, h.useState)([]),
            K = (0, s.Z)(X, 2),
            Q = K[0],
            Y = K[1],
            $ = (0, w.WK)(),
            ee = (0, s.Z)($, 1)[0],
            te = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n, r;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('vendor' !== t) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 3), ee({});
                        case 3:
                          if (
                            ((e.t1 = r = e.sent.data),
                            (e.t0 = null !== e.t1),
                            !e.t0)
                          ) {
                            e.next = 7;
                            break;
                          }
                          e.t0 = void 0 !== r;
                        case 7:
                          if (!e.t0) {
                            e.next = 11;
                            break;
                          }
                          (e.t2 = r), (e.next = 12);
                          break;
                        case 11:
                          e.t2 = [];
                        case 12:
                          (n = e.t2), (e.next = 16);
                          break;
                        case 15:
                          n =
                            'type' === t
                              ? [
                                  { id: 'baccarat', name: '' },
                                  { id: 'dragontiger', name: 'Dragon Tiger' },
                                  { id: 'topcard', name: 'Topcard' },
                                  { id: 'blackjack', name: 'Black Jack' },
                                  {
                                    id: 'americanroulette',
                                    name: 'American Roulette'
                                  },
                                  { id: 'roulette', name: 'Roulette' }
                                ]
                              : [{ id: '', name: 'Please Select a Type' }];
                        case 16:
                          Y(n);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, R.jsx)(k.Z, {
            title:
              null !== n && void 0 !== n && n._id
                ? 'Edit '.concat(n.name)
                : 'Add new Game',
            onClose: r,
            open: t,
            onOk: O(M),
            isLoading: E || A,
            children: (0, R.jsxs)(u.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, R.jsx)(u.Z, {
                  sx: { my: 2 },
                  children: (0, R.jsxs)(
                    j.Z,
                    (0, l.Z)(
                      (0, l.Z)(
                        {
                          fullWidth: !0,
                          name: 'limitType',
                          value: _,
                          required: !0
                        },
                        F('limitType')
                      ),
                      {},
                      {
                        error: !!B.limitType,
                        label: 'Type',
                        onChange: function (e) {
                          var t = e.target.value;
                          H(t), te(t);
                        },
                        children: [
                          (0, R.jsx)(T.Z, { value: 'all', children: 'All' }),
                          (0, R.jsx)(T.Z, {
                            selected: !0,
                            value: 'game',
                            children: 'Game'
                          }),
                          (0, R.jsx)(T.Z, { value: 'type', children: 'Type' }),
                          (0, R.jsx)(T.Z, {
                            value: 'vendor',
                            children: 'Vendor'
                          })
                        ]
                      }
                    )
                  )
                }),
                (0, R.jsx)(u.Z, {
                  sx: { my: 2 },
                  children: (0, R.jsx)(
                    j.Z,
                    (0, l.Z)(
                      (0, l.Z)(
                        {
                          fullWidth: !0,
                          name: 'limitTypeId',
                          value: z,
                          required: !0
                        },
                        F('limitTypeId')
                      ),
                      {},
                      {
                        error: !!B.limitTypeId,
                        label: 'Name(id)',
                        onChange: function (e) {
                          var t = e.target.value;
                          J(t);
                        },
                        children: Q.map(function (e) {
                          return (0,
                          R.jsx)(T.Z, { selected: 3 == e.id, value: e.id, children: e.name }, e.id);
                        })
                      }
                    )
                  )
                }),
                (0, R.jsx)(
                  p.Z,
                  (0, l.Z)(
                    {
                      type: 'number',
                      fullWidth: !0,
                      label: 'limit',
                      sx: { my: 2 },
                      required: !0,
                      error: !!B.limit,
                      helperText: B.limit ? B.limit.message : '',
                      autoComplete: 'off'
                    },
                    F('limit')
                  )
                )
              ]
            })
          });
        },
        D = n(8096),
        S = n(4925),
        W = n(4349),
        A = function () {
          var e = (0, y.d)(),
            t = e.visible,
            n = e.toggle,
            r = (0, h.useState)(),
            i = (0, s.Z)(r, 2),
            a = i[0];
          i[1];
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, R.jsx)(R.Fragment, {
                    children: (0, R.jsx)(m.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.limitType
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, R.jsx)(R.Fragment, {
                    children: (0, R.jsx)(m.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.limitTypeId
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, R.jsx)(R.Fragment, {
                    children: (0, R.jsx)(m.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.limit
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.type', name: 'type' },
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.limit', name: 'limit' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var t = e.type;
              return [
                (0, R.jsxs)(D.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, R.jsx)(S.Z, {
                      id: 'isActive',
                      children: (0, R.jsx)(W.Z, { id: 'label.type' })
                    }),
                    (0, R.jsxs)(j.Z, {
                      labelId: 'isActive',
                      value: t.value,
                      label: 'Type',
                      onChange: function (e) {
                        return t.onChange(e.target.value);
                      },
                      children: [
                        (0, R.jsx)(T.Z, {
                          value: '',
                          children: (0, R.jsx)('em', {
                            children: (0, R.jsx)(W.Z, { id: 'label.default' })
                          })
                        }),
                        (0, R.jsx)(T.Z, {
                          value: 'all',
                          children: (0, R.jsx)(W.Z, { id: 'label.all' })
                        }),
                        (0, R.jsx)(T.Z, {
                          value: 'vendor',
                          children: (0, R.jsx)(W.Z, { id: 'label.vendor' })
                        }),
                        (0, R.jsx)(T.Z, {
                          value: 'game',
                          children: (0, R.jsx)(W.Z, { id: 'label.game' })
                        }),
                        (0, R.jsx)(T.Z, {
                          value: 'type',
                          children: (0, R.jsx)(W.Z, { id: 'label.type' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            user: a,
            toggle: n,
            visible: t
          };
        },
        q = 'title.bet-set',
        F = function () {
          var e,
            t,
            n = [{ link: '/dashboards', name: 'title.dashboard' }, { name: q }],
            b = (0, y.d)(),
            j = b.visible,
            T = b.hide,
            k = b.show,
            w = (0, f.cI)().reset,
            C = (0, y.p)(),
            I = C.notify,
            D = C.message,
            S = A(),
            F = S.tableBody,
            L = S.tableHeader,
            O = S.tableFilter,
            P = S.visible,
            B = S.toggle,
            M = S.user,
            N = (0, h.useState)([]),
            U = (0, s.Z)(N, 2),
            _ = U[0],
            H = U[1],
            V = (0, h.useState)(),
            G = (0, s.Z)(V, 2),
            z = G[0],
            J = G[1],
            X = (0, h.useState)({
              page: 0,
              size: 10,
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: '',
              dateFrom: '',
              dateTo: ''
            }),
            K = (0, s.Z)(X, 2),
            Q = K[0],
            Y = K[1],
            $ = (0, v.v9)(function (e) {
              return e.common;
            }).permissions,
            ee = (0, x.HJ)(),
            te = (0, s.Z)(ee, 1)[0],
            ne = (0, x.Rw)(),
            re = (0, s.Z)(ne, 2),
            ie = re[0],
            ae = re[1].isLoading,
            le = (0, x.Dx)({}),
            se = (0, s.Z)(le, 2),
            oe = se[0],
            de = se[1].isLoading,
            ue = (0, x.XG)({
              refetchOnMountOrArgChange: !0,
              skip:
                ((e = $),
                (t = 'get'),
                !(null === e || void 0 === e ? void 0 : e.includes(t)))
            }),
            ce = ue.data,
            me = ue.isFetching,
            pe = ue.refetch,
            he = (0, h.useState)({
              receiverUsername: '',
              amount: 0,
              type: 'add',
              note: ''
            }),
            ve = (0, s.Z)(he, 2),
            fe = ve[0],
            Ze = ve[1];
          (0, h.useEffect)(
            function () {
              (fe.receiverUsername =
                null === M || void 0 === M ? void 0 : M.username),
                Ze(function (e) {
                  return (0, l.Z)((0, l.Z)({}, e), {}, { status: 'success' });
                });
            },
            [M]
          ),
            (0, h.useEffect)(
              function () {
                ce &&
                  H(function () {
                    var e;
                    return (0,
                    g.TY)(ce.data, null === (e = L[Q.sortBy]) || void 0 === e ? void 0 : e.name, Q.sortDirection);
                  });
              },
              [ce, Q]
            );
          var xe = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              ie({ id: Number(t) }).unwrap()
                            );
                          case 3:
                            I({ message: D.DELETED }), pe(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              I({ message: D.ERROR, type: 'error' });
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
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ge = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(t) {
                  var n;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              te({ id: Number(t) }).unwrap()
                            );
                          case 3:
                            (n = e.sent), k(), J(n.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              I({ message: D.ERROR, type: 'error' });
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
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ye = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e() {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), oe(fe).unwrap();
                          case 3:
                            e.sent &&
                              (B(), I({ message: D.UPDATED }), pe(), T(), w()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              I({ message: D.ERROR, type: 'error' });
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
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(Z.Z, {
                title: q,
                data: _,
                totalItems:
                  null === ce || void 0 === ce ? void 0 : ce.data.totalItems,
                tableHeader: L,
                tableBody: F,
                headerTitle: q,
                breadcrumbs: n,
                onOpenModal: function () {
                  k(), J(null);
                },
                isLoading: me || ae,
                onDelete: xe,
                onUpdate: ge,
                pagination: Q,
                onPagination: Y,
                tableFilter: O({
                  type: {
                    value: Q.type,
                    onChange: function (e) {
                      return Y((0, l.Z)((0, l.Z)({}, Q), {}, { type: e }));
                    }
                  }
                })
              }),
              (0, R.jsx)(E, {
                open: j,
                detail: z,
                onClose: T,
                refetch: pe,
                hide: T
              }),
              (0, R.jsx)(d.Z, {
                open: P,
                onClose: B,
                children: (0, R.jsx)(u.Z, {
                  component: 'form',
                  padding: 2,
                  children: (0, R.jsxs)(c.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, R.jsx)(c.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, R.jsx)(m.Z, {
                          gutterBottom: !0,
                          variant: 'h5',
                          component: 'div',
                          children: (0, R.jsx)(W.Z, {
                            id: 'title.add-transaction'
                          })
                        })
                      }),
                      (0, R.jsxs)(u.Z, {
                        justifyContent: 'center',
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '18px',
                        gap: '12px',
                        marginTop: '8px',
                        children: [
                          (0, R.jsx)(p.Z, {
                            label: 'Insert the amount here',
                            variant: 'outlined',
                            fullWidth: !0,
                            onInput: function (e) {
                              return (
                                (t = e.target.value),
                                (n = 'amount'),
                                void Ze(function (e) {
                                  return (0,
                                  l.Z)((0, l.Z)({}, e), {}, (0, r.Z)({}, ''.concat(n), t));
                                })
                              );
                              var t, n;
                            }
                          }),
                          (0, R.jsx)(o.Z, {
                            loading: de,
                            onClick: ye,
                            size: 'large',
                            variant: 'contained',
                            sx: { width: 120 },
                            children: (0, R.jsxs)(u.Z, {
                              children: [
                                (0, R.jsx)('span', { children: '+ \xa0' }),
                                (0, R.jsx)('span', { children: 'Add' })
                              ]
                            })
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            ]
          });
        };
    },
    7621: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        }
      });
      var r = n(7462),
        i = n(3366),
        a = n(2791),
        l = n(8182),
        s = n(4419),
        o = n(6934),
        d = n(1402),
        u = n(5527),
        c = n(5878),
        m = n(1217);
      function p(e) {
        return (0, m.Z)('MuiCard', e);
      }
      (0, c.Z)('MuiCard', ['root']);
      var h = n(184),
        v = ['className', 'raised'],
        f = (0, o.ZP)(u.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (e, t) {
            return t.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        Z = a.forwardRef(function (e, t) {
          var n = (0, d.Z)({ props: e, name: 'MuiCard' }),
            a = n.className,
            o = n.raised,
            u = void 0 !== o && o,
            c = (0, i.Z)(n, v),
            m = (0, r.Z)({}, n, { raised: u }),
            Z = (function (e) {
              var t = e.classes;
              return (0, s.Z)({ root: ['root'] }, p, t);
            })(m);
          return (0,
          h.jsx)(f, (0, r.Z)({ className: (0, l.Z)(Z.root, a), elevation: u ? 8 : void 0, ref: t, ownerState: m }, c));
        });
    }
  }
]);
//# sourceMappingURL=147.8ffeb5f0.chunk.js.map