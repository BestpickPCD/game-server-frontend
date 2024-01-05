'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [432],
  {
    1371: function (n, t, a) {
      a.d(t, {
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
      ];
    },
    8694: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          }
        });
      var e = a(3433),
        i = a(1413),
        o = a(9439),
        r = a(2791),
        d = a(6871),
        l = a(3504),
        s = a(6790),
        c = a(2302),
        g = a(5850),
        u = a(890),
        h = a(8096),
        Z = a(4925),
        m = a(9321),
        p = a(3786),
        v = a(6151),
        x = a(5119),
        b = a(946),
        f = a(8673),
        y = a(4349),
        j = a(7395),
        I = a(1371),
        w = a(184),
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
            return (0, w.jsx)(j.Z, { color: i, children: e });
          }
          return Number(n) > 0
            ? (0, w.jsx)(j.Z, { color: 'success', children: String(n) })
            : (0, w.jsx)(j.Z, { color: 'error', children: String(n) });
        },
        L = function () {
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
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.username
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.agentUsername
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(String(n.amount))
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(n.type)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: S(n.status)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === n || void 0 === n ? void 0 : n.createdAt) &&
                        (0, b.Z)(
                          (0, f.Z)(
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
                o = a.status,
                r = a.dateFrom,
                d = a.dateTo;
              return [
                (0, w.jsx)(x.M, {
                  label: (0, w.jsx)(y.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, w.jsx)(x.M, {
                  label: (0, w.jsx)(y.Z, { id: 'label.to' }),
                  onChange: d.onChange
                }),
                (0, w.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, w.jsx)(Z.Z, {
                      id: 'Type',
                      children: (0, w.jsx)(y.Z, { id: 'label.type' })
                    }),
                    (0, w.jsxs)(m.Z, {
                      labelId: 'Type',
                      value: i.value,
                      label: (0, w.jsx)(y.Z, { id: 'label.type' }),
                      onChange: function (n) {
                        i.onChange((0, e.Z)(n.target.value));
                      },
                      multiple: !0,
                      children: [
                        (0, w.jsx)(p.Z, {
                          value: '',
                          children: (0, w.jsx)('em', { children: 'Default' })
                        }),
                        I.s.map(function (n) {
                          return (0,
                          w.jsx)(p.Z, { value: n, children: ''.concat(n.slice(0, 1).toUpperCase()).concat(n.slice(1)) }, n);
                        })
                      ]
                    })
                  ]
                }),
                (0, w.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, w.jsx)(Z.Z, {
                      id: 'status',
                      children: (0, w.jsx)(y.Z, { id: 'label.status' })
                    }),
                    (0, w.jsxs)(m.Z, {
                      labelId: 'status',
                      value: o.value,
                      label: (0, w.jsx)(y.Z, { id: 'label.status' }),
                      onChange: function (n) {
                        return o.onChange(n.target.value);
                      },
                      children: [
                        (0, w.jsx)(p.Z, {
                          value: '',
                          children: (0, w.jsx)('em', { children: 'Default' })
                        }),
                        (0, w.jsx)(
                          p.Z,
                          { value: 'approved', children: 'Approved' },
                          1
                        ),
                        (0, w.jsx)(
                          p.Z,
                          { value: 'pending', children: 'Pending' },
                          2
                        )
                      ]
                    })
                  ]
                }),
                (0, w.jsx)(w.Fragment, {
                  children:
                    n && !1 === t
                      ? (0, w.jsx)(v.Z, {
                          href: '?type=agent.add_balance',
                          variant: 'outlined',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, w.jsx)(y.Z, { id: 'label.See-request' })
                        })
                      : t && !0 === n
                      ? (0, w.jsx)(v.Z, {
                          href: '?type=',
                          variant: 'outlined',
                          color: 'secondary',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, w.jsx)(y.Z, { id: 'label.See-all' })
                        })
                      : null
                })
              ];
            }
          };
        },
        P = 'title.transactions-management',
        F = [{ link: '/dashboards', name: 'title.dashboard' }, { name: P }],
        C = function () {
          var n,
            t = (0, d.UO)(),
            a = t.slug,
            u = t.type;
          n =
            'betting-history' === u
              ? 'bet,win,cancel'
              : 'recharge-history' === u
              ? 'agent.add_balance,user.add_balance,deposit,withdraw'
              : '';
          var h = (0, l.lr)(),
            Z = (0, o.Z)(h, 1)[0],
            m = L(),
            p = m.tableBody,
            v = m.tableHeader,
            x = m.tableFilter,
            b = (0, r.useState)([]),
            f = (0, o.Z)(b, 2),
            y = f[0],
            j = f[1],
            I = (0, r.useState)({
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
            S = (0, o.Z)(I, 2),
            C = S[0],
            B = S[1],
            _ = (0, c.kn)((0, i.Z)({ id: a }, C), {
              refetchOnMountOrArgChange: !0
            }),
            W = _.data,
            A = _.isFetching;
          return (
            (0, r.useEffect)(function () {
              'agent.add_balance' ===
                new URLSearchParams(window.location.search).get('type') &&
                B(
                  (0, i.Z)(
                    (0, i.Z)({}, C),
                    {},
                    { type: (0, e.Z)(C.type), status: 'pending' }
                  )
                ),
                'charging' === Z.get('type') &&
                  B(
                    (0, i.Z)(
                      (0, i.Z)({}, C),
                      {},
                      {
                        type: [].concat((0, e.Z)(C.type), [
                          'agent.add_balance',
                          'user.add_balance'
                        ])
                      }
                    )
                  );
            }, []),
            (0, r.useEffect)(
              function () {
                W &&
                  j(function () {
                    var n;
                    return (0,
                    g.TY)(W.data.data, null === (n = v[C.sortBy]) || void 0 === n ? void 0 : n.name, C.sortDirection);
                  });
              },
              [W, C.sortBy, C.sortDirection]
            ),
            (0, w.jsx)(w.Fragment, {
              children: (0, w.jsx)(s.Z, {
                title: P,
                data: y,
                totalItems:
                  null === W || void 0 === W ? void 0 : W.data.totalItems,
                tableHeader: v,
                tableBody: p,
                headerTitle: P,
                breadcrumbs: F,
                isLoading: A,
                pagination: C,
                onPagination: B,
                isShowBulkActions: !1,
                tableFilter: x({
                  dateFrom: {
                    value: C.dateFrom,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, C),
                          {},
                          { dateFrom: (0, g.Zd)(n, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: C.dateTo,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, C),
                          {},
                          { dateTo: (0, g.Zd)(n, 'to') }
                        )
                      );
                    }
                  },
                  type: {
                    value: C.type,
                    onChange: function (n) {
                      return B(
                        (0, i.Z)(
                          (0, i.Z)({}, C),
                          {},
                          { type: Array.from(new Set(n)) }
                        )
                      );
                    }
                  },
                  status: {
                    value: C.status,
                    onChange: function (n) {
                      return B((0, i.Z)((0, i.Z)({}, C), {}, { status: n }));
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
        o = a(7462),
        r = a(2791),
        d = a(4036),
        l = a(7384),
        s = a(4419),
        c = a(6934),
        g = a(1402),
        u = a(6151),
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
        x = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        b = (0, c.ZP)(u.Z, {
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
          o.Z)((0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0 }), 'center' === t.loadingPosition && (0, e.Z)({ transition: a.transitions.create(['background-color', 'box-shadow', 'border-color'], { duration: a.transitions.duration.short }) }, '&.'.concat(p.loading), { color: 'transparent' }), 'start' === t.loadingPosition && t.fullWidth && (0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0, marginRight: -8 }), 'end' === t.loadingPosition && t.fullWidth && (0, e.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }), opacity: 0, marginLeft: -8 }));
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
          o.Z)({ position: 'absolute', visibility: 'visible', display: 'flex' }, 'start' === a.loadingPosition && ('outlined' === a.variant || 'contained' === a.variant) && { left: 'small' === a.size ? 10 : 14 }, 'start' === a.loadingPosition && 'text' === a.variant && { left: 6 }, 'center' === a.loadingPosition && { left: '50%', transform: 'translate(-50%)', color: t.palette.action.disabled }, 'end' === a.loadingPosition && ('outlined' === a.variant || 'contained' === a.variant) && { right: 'small' === a.size ? 10 : 14 }, 'end' === a.loadingPosition && 'text' === a.variant && { right: 6 }, 'start' === a.loadingPosition && a.fullWidth && { position: 'relative', left: -10 }, 'end' === a.loadingPosition && a.fullWidth && { position: 'relative', right: -10 });
        }),
        y = r.forwardRef(function (n, t) {
          var a = (0, g.Z)({ props: n, name: 'MuiLoadingButton' }),
            e = a.children,
            c = a.disabled,
            u = void 0 !== c && c,
            Z = a.id,
            p = a.loading,
            y = void 0 !== p && p,
            j = a.loadingIndicator,
            I = a.loadingPosition,
            w = void 0 === I ? 'center' : I,
            S = a.variant,
            L = void 0 === S ? 'text' : S,
            P = (0, i.Z)(a, x),
            F = (0, l.Z)(Z),
            C =
              null != j
                ? j
                : (0, v.jsx)(h.Z, {
                    'aria-labelledby': F,
                    color: 'inherit',
                    size: 16
                  }),
            B = (0, o.Z)({}, a, {
              disabled: u,
              loading: y,
              loadingIndicator: C,
              loadingPosition: w,
              variant: L
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
                r = (0, s.Z)(i, m, e);
              return (0, o.Z)({}, e, r);
            })(B);
          return (0,
          v.jsx)(b, (0, o.Z)({ disabled: u || y, id: F, ref: t }, P, { variant: L, classes: _, ownerState: B, children: 'end' === B.loadingPosition ? (0, v.jsxs)(r.Fragment, { children: [e, y && (0, v.jsx)(f, { className: _.loadingIndicator, ownerState: B, children: C })] }) : (0, v.jsxs)(r.Fragment, { children: [y && (0, v.jsx)(f, { className: _.loadingIndicator, ownerState: B, children: C }), e] }) }));
        });
    }
  }
]);
//# sourceMappingURL=432.9ca439ab.chunk.js.map
