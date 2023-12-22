'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [432],
  {
    1371: function (n, t, a) {
      a.d(t, {
        L: function () {
          return i;
        },
        s: function () {
          return e;
        }
      });
      var e = [
          'win',
          'bet',
          'cancel',
          'deposit',
          'withdraw',
          'user.add_balance',
          'agent.add_balance'
        ],
        i = ['success', 'pending', 'cancelled', 'failed'];
    },
    8694: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return B;
          }
        });
      var e = a(3433),
        i = a(1413),
        r = a(9439),
        o = a(2791),
        d = a(6871),
        l = a(3504),
        s = a(6790),
        c = a(2302),
        u = a(5850),
        g = a(890),
        h = a(8096),
        Z = a(4925),
        m = a(9321),
        p = a(3786),
        v = a(9164),
        b = a(6151),
        x = a(5119),
        f = a(946),
        y = a(8673),
        j = a(4349),
        I = a(7395),
        w = a(1371),
        L = a(184),
        S = function (n) {
          var t = {
            approved: { text: 'Approved', color: 'success' },
            pending: { text: 'Pending', color: 'warning' },
            'agent.add_balance': {
              text: 'Agent Add Balance',
              color: 'primary'
            },
            'user.add_balance': { text: 'User Add Balance', color: 'info' }
          };
          if (isNaN(Number(n)) && t[n]) {
            var a = t[n],
              e = a.text,
              i = a.color;
            return (0, L.jsx)(I.Z, { color: i, children: e });
          }
          return Number(n) > 0
            ? (0, L.jsx)(I.Z, { color: 'success', children: String(n) })
            : (0, L.jsx)(I.Z, { color: 'error', children: String(n) });
        },
        P = function () {
          var n = !1,
            t = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (t = !0),
            'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
              (n = !0);
          return {
            tableBody: function (n) {
              return [
                {
                  align: 'inherit',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.username
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.agentUsername
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(String(n.amount))
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(n.type)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(n.status)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, L.jsx)(L.Fragment, {
                    children: (0, L.jsx)(g.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === n || void 0 === n ? void 0 : n.createdAt) &&
                        (0, f.Z)(
                          (0, y.Z)(
                            null === n || void 0 === n ? void 0 : n.createdAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.username', name: 'username' },
              {
                align: 'left',
                title: 'label.agent.username',
                name: 'agentUsername'
              },
              { align: 'right', title: 'label.amount', name: 'amount' },
              { align: 'right', title: 'label.type', name: 'type' },
              { align: 'right', title: 'label.status', name: 'status' },
              { align: 'right', title: 'label.created.at', name: 'createdAt' }
            ],
            tableFilter: function (a) {
              var i = a.type,
                r = a.status,
                o = a.dateFrom,
                d = a.dateTo;
              return [
                (0, L.jsx)(x.M, {
                  label: (0, L.jsx)(j.Z, { id: 'label.from' }),
                  onChange: o.onChange
                }),
                (0, L.jsx)(x.M, {
                  label: (0, L.jsx)(j.Z, { id: 'label.to' }),
                  onChange: d.onChange
                }),
                (0, L.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, L.jsx)(Z.Z, {
                      id: 'Type',
                      children: (0, L.jsx)(j.Z, { id: 'label.type' })
                    }),
                    (0, L.jsxs)(m.Z, {
                      labelId: 'Type',
                      value: i.value,
                      label: (0, L.jsx)(j.Z, { id: 'label.type' }),
                      onChange: function (n) {
                        i.onChange((0, e.Z)(n.target.value));
                      },
                      multiple: !0,
                      children: [
                        (0, L.jsx)(p.Z, {
                          value: '',
                          children: (0, L.jsx)('em', { children: 'Default' })
                        }),
                        w.s.map(function (n) {
                          return (0,
                          L.jsx)(p.Z, { value: n, children: ''.concat(n.slice(0, 1).toUpperCase()).concat(n.slice(1)) }, n);
                        })
                      ]
                    })
                  ]
                }),
                (0, L.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, L.jsx)(Z.Z, {
                      id: 'status',
                      children: (0, L.jsx)(j.Z, { id: 'label.status' })
                    }),
                    (0, L.jsxs)(m.Z, {
                      labelId: 'status',
                      value: r.value,
                      label: (0, L.jsx)(j.Z, { id: 'label.status' }),
                      onChange: function (n) {
                        return r.onChange(n.target.value);
                      },
                      children: [
                        (0, L.jsx)(p.Z, {
                          value: '',
                          children: (0, L.jsx)('em', { children: 'Default' })
                        }),
                        (0, L.jsx)(
                          p.Z,
                          { value: 'approved', children: 'Approved' },
                          1
                        ),
                        (0, L.jsx)(
                          p.Z,
                          { value: 'pending', children: 'Pending' },
                          2
                        )
                      ]
                    })
                  ]
                }),
                (0, L.jsx)(L.Fragment, {
                  children:
                    n && !1 === t
                      ? (0, L.jsx)(v.Z, {
                          children: (0, L.jsx)(b.Z, {
                            href: '?type=agent.add_balance',
                            variant: 'outlined',
                            children: (0, L.jsx)(j.Z, {
                              id: 'label.See-request'
                            })
                          })
                        })
                      : t && !0 === n
                      ? (0, L.jsx)(v.Z, {
                          children: (0, L.jsx)(b.Z, {
                            href: '?type=',
                            variant: 'outlined',
                            color: 'secondary',
                            children: (0, L.jsx)(j.Z, { id: 'label.See-all' })
                          })
                        })
                      : null
                })
              ];
            }
          };
        },
        F = 'title.transactions-management',
        C = [{ link: '/dashboards', name: 'title.dashboard' }, { name: F }],
        B = function () {
          var n,
            t = (0, d.UO)(),
            a = t.slug,
            g = t.type;
          n =
            'betting-history' === g
              ? 'bet,win,cancel'
              : 'recharge-history' === g
              ? 'agent.add_balance,user.add_balance,deposit,withdraw'
              : '';
          var h = (0, l.lr)(),
            Z = (0, r.Z)(h, 1)[0],
            m = P(),
            p = m.tableBody,
            v = m.tableHeader,
            b = m.tableFilter,
            x = (0, o.useState)([]),
            f = (0, r.Z)(x, 2),
            y = f[0],
            j = f[1],
            I = (0, o.useState)({
              page: 0,
              size: 10,
              status: '',
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: [n],
              dateFrom: '',
              dateTo: ''
            }),
            w = (0, r.Z)(I, 2),
            S = w[0],
            B = w[1],
            _ = (0, c.kn)((0, i.Z)({ id: a }, S), {
              refetchOnMountOrArgChange: !0
            }),
            W = _.data,
            A = _.isFetching;
          return (
            (0, o.useEffect)(function () {
              'agent.add_balance' ===
                new URLSearchParams(window.location.search).get('type') &&
                B(
                  (0, i.Z)(
                    (0, i.Z)({}, S),
                    {},
                    { type: (0, e.Z)(S.type), status: 'pending' }
                  )
                ),
                'charging' === Z.get('type') &&
                  B(
                    (0, i.Z)(
                      (0, i.Z)({}, S),
                      {},
                      {
                        type: [].concat((0, e.Z)(S.type), [
                          'agent.add_balance',
                          'user.add_balance'
                        ])
                      }
                    )
                  );
            }, []),
            (0, o.useEffect)(
              function () {
                W &&
                  j(function () {
                    var n;
                    return (0,
                    u.TY)(W.data.data, null === (n = v[S.sortBy]) || void 0 === n ? void 0 : n.name, S.sortDirection);
                  });
              },
              [W, S.sortBy, S.sortDirection]
            ),
            (0, L.jsx)(L.Fragment, {
              children: (0, L.jsx)(s.Z, {
                title: F,
                data: y,
                totalItems:
                  null === W || void 0 === W ? void 0 : W.data.totalItems,
                tableHeader: v,
                tableBody: p,
                headerTitle: F,
                breadcrumbs: C,
                isLoading: A,
                pagination: S,
                onPagination: B,
                tableFilter: b({
                  dateFrom: {
                    value: S.dateFrom,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, S),
                          {},
                          { dateFrom: (0, u.Zd)(n, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: S.dateTo,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, S),
                          {},
                          { dateTo: (0, u.Zd)(n, 'to') }
                        )
                      );
                    }
                  },
                  type: {
                    value: S.type,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, S),
                          {},
                          { type: Array.from(new Set(n)) }
                        )
                      );
                    }
                  },
                  status: {
                    value: S.status,
                    onChange: function (n) {
                      return B((0, i.Z)((0, i.Z)({}, S), {}, { status: n }));
                    }
                  }
                })
              })
            })
          );
        };
    },
    9709: function (n, t, a) {
      a.d(t, {
        Z: function () {
          return y;
        }
      });
      var e = a(4942),
        i = a(3366),
        r = a(7462),
        o = a(2791),
        d = a(4036),
        l = a(7384),
        s = a(4419),
        c = a(6934),
        u = a(1402),
        g = a(6151),
        h = a(3239),
        Z = a(1217);
      function m(n) {
        return (0, Z.Z)('MuiLoadingButton', n);
      }
      var p = (0, a(5878).Z)('MuiLoadingButton', [
          'root',
          'loading',
          'loadingIndicator',
          'loadingIndicatorCenter',
          'loadingIndicatorStart',
          'loadingIndicatorEnd',
          'endIconLoadingEnd',
          'startIconLoadingStart'
        ]),
        v = a(184),
        b = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        x = (0, c.ZP)(g.Z, {
          shouldForwardProp: function (n) {
            return (
              (function (n) {
                return (
                  'ownerState' !== n &&
                  'theme' !== n &&
                  'sx' !== n &&
                  'as' !== n &&
                  'classes' !== n
                );
              })(n) || 'classes' === n
            );
          },
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: function (n, t) {
            return [
              t.root,
              t.startIconLoadingStart &&
                (0, e.Z)(
                  {},
                  '& .'.concat(p.startIconLoadingStart),
                  t.startIconLoadingStart
                ),
              t.endIconLoadingEnd &&
                (0, e.Z)(
                  {},
                  '& .'.concat(p.endIconLoadingEnd),
                  t.endIconLoadingEnd
                )
            ];
          }
        })(function (n) {
          var t = n.ownerState,
            a = n.theme;
          return (0,
          r.Z)((0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0 }), 'center' === t.loadingPosition && (0, e.Z)({ transition: a.transitions.create(['background-color', 'box-shadow', 'border-color'], { duration: a.transitions.duration.short }) }, '&.'.concat(p.loading), { color: 'transparent' }), 'start' === t.loadingPosition && t.fullWidth && (0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0, marginRight: -8 }), 'end' === t.loadingPosition && t.fullWidth && (0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0, marginLeft: -8 }));
        }),
        f = (0, c.ZP)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: function (n, t) {
            var a = n.ownerState;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, d.Z)(a.loadingPosition))]
            ];
          }
        })(function (n) {
          var t = n.theme,
            a = n.ownerState;
          return (0,
          r.Z)({ position: 'absolute', visibility: 'visible', display: 'flex' }, 'start' === a.loadingPosition && ('outlined' === a.variant || 'contained' === a.variant) && { left: 'small' === a.size ? 10 : 14 }, 'start' === a.loadingPosition && 'text' === a.variant && { left: 6 }, 'center' === a.loadingPosition && { left: '50%', transform: 'translate(-50%)', color: t.palette.action.disabled }, 'end' === a.loadingPosition && ('outlined' === a.variant || 'contained' === a.variant) && { right: 'small' === a.size ? 10 : 14 }, 'end' === a.loadingPosition && 'text' === a.variant && { right: 6 }, 'start' === a.loadingPosition && a.fullWidth && { position: 'relative', left: -10 }, 'end' === a.loadingPosition && a.fullWidth && { position: 'relative', right: -10 });
        }),
        y = o.forwardRef(function (n, t) {
          var a = (0, u.Z)({ props: n, name: 'MuiLoadingButton' }),
            e = a.children,
            c = a.disabled,
            g = void 0 !== c && c,
            Z = a.id,
            p = a.loading,
            y = void 0 !== p && p,
            j = a.loadingIndicator,
            I = a.loadingPosition,
            w = void 0 === I ? 'center' : I,
            L = a.variant,
            S = void 0 === L ? 'text' : L,
            P = (0, i.Z)(a, b),
            F = (0, l.Z)(Z),
            C =
              null != j
                ? j
                : (0, v.jsx)(h.Z, {
                    'aria-labelledby': F,
                    color: 'inherit',
                    size: 16
                  }),
            B = (0, r.Z)({}, a, {
              disabled: g,
              loading: y,
              loadingIndicator: C,
              loadingPosition: w,
              variant: S
            }),
            _ = (function (n) {
              var t = n.loading,
                a = n.loadingPosition,
                e = n.classes,
                i = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, d.Z)(a))],
                  endIcon: [t && 'endIconLoading'.concat((0, d.Z)(a))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, d.Z)(a))
                  ]
                },
                o = (0, s.Z)(i, m, e);
              return (0, r.Z)({}, e, o);
            })(B);
          return (0,
          v.jsx)(x, (0, r.Z)({ disabled: g || y, id: F, ref: t }, P, { variant: S, classes: _, ownerState: B, children: 'end' === B.loadingPosition ? (0, v.jsxs)(o.Fragment, { children: [e, y && (0, v.jsx)(f, { className: _.loadingIndicator, ownerState: B, children: C })] }) : (0, v.jsxs)(o.Fragment, { children: [y && (0, v.jsx)(f, { className: _.loadingIndicator, ownerState: B, children: C }), e] }) }));
        });
    }
  }
]);
//# sourceMappingURL=432.8cff5c4b.chunk.js.map
