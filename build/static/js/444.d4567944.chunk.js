'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [444],
  {
    10173: (l, e, a) => {
      a.d(e, { Z: () => c });
      var i = a(66934),
        d = a(89164),
        n = a(697),
        t = a(20890),
        s = a(4349),
        r = a(80184);
      const o = (0, i.ZP)(d.Z)((l) => {
          let { theme: e } = l;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        }),
        c = () =>
          (0, r.jsx)(o, {
            className: 'footer-wrapper',
            children: (0, r.jsxs)(n.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, r.jsx)(n.Z, {
                  children: (0, r.jsxs)(t.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, r.jsx)(s.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, r.jsx)(t.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    60444: (l, e, a) => {
      a.r(e), a.d(e, { default: () => E });
      var i = a(6907),
        d = a(10173),
        n = a(89164),
        t = a(61889),
        s = a(64222),
        r = a(57621),
        o = a(697),
        c = a(94721),
        u = a(19658),
        h = a(47317),
        x = a(94294),
        v = a(13496);
      const b = {
        chart: {
          id: 'basic-bar',
          toolbar: { show: !1 },
          dropShadow: { enabled: !0, top: 0, left: 0, blur: 3, opacity: 0.2 },
          animations: {
            enabled: !0,
            easing: 'easeinout',
            speed: 800,
            animateGradually: { enabled: !0, delay: 150 },
            dynamicAnimation: { enabled: !0, speed: 350 }
          }
        },
        plotOptions: {
          bar: { borderRadius: 4, dataLabels: { position: 'top' } }
        },
        dataLabels: { enabled: !0 },
        xaxis: {
          categories: ['Depo.', 'Withd.', 'AAB.', 'UAB.', 'Bet', 'Win', 'Canc.']
        },
        yaxis: { show: !1 },
        theme: {
          monochrome: {
            enabled: !0,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        },
        markers: { colors: ['#F44336', '#E91E63', '#9C27B0'] }
      };
      var p = a(80184);
      const j = (l) => {
        var e, a, i, d, n, s, r;
        let { data: c, details: u } = l;
        const h =
            null !== (e = -(null === c || void 0 === c ? void 0 : c.deposit)) &&
            void 0 !== e
              ? e
              : 0,
          j =
            null !== (a = null === c || void 0 === c ? void 0 : c.withdraw) &&
            void 0 !== a
              ? a
              : 0,
          Z =
            null !==
              (i =
                null === c || void 0 === c ? void 0 : c['agent.add_balance']) &&
            void 0 !== i
              ? i
              : 0,
          m =
            null !==
              (d = -(null === c || void 0 === c
                ? void 0
                : c['user.add_balance'])) && void 0 !== d
              ? d
              : 0,
          f =
            null !== (n = -(null === c || void 0 === c ? void 0 : c.bet)) &&
            void 0 !== n
              ? n
              : 0,
          g =
            null !== (s = null === c || void 0 === c ? void 0 : c.win) &&
            void 0 !== s
              ? s
              : 0,
          y =
            null !== (r = null === c || void 0 === c ? void 0 : c.cancel) &&
            void 0 !== r
              ? r
              : 0,
          C = b,
          w = [{ data: [h, j, Z, m, f, g, y] }];
        return (0, p.jsx)(p.Fragment, {
          children: (0, p.jsxs)(
            t.ZP,
            {
              item: !0,
              xs: 12,
              children: [
                (0, p.jsx)(o.Z, {
                  p: 2,
                  children: (0, p.jsx)(x.Z, {
                    variant: 'outlined',
                    size: 'small',
                    fullWidth: !0,
                    href: '/management/transactions/'.concat(u.id),
                    children: u.username
                  })
                }),
                (0, p.jsx)(o.Z, {
                  pl: 1,
                  sx: { marginTop: '-30px' },
                  children: (0, p.jsx)(v.Z, {
                    options: C,
                    series: w,
                    type: 'bar',
                    height: 150
                  })
                })
              ]
            },
            u.id
          )
        });
      };
      var Z = a(4349),
        m = a(39709),
        f = a(76633),
        g = a(72791);
      const y = (l) => {
        let { users: e } = l;
        const [a, i] = (0, g.useState)(),
          [d, n] = (0, g.useState)('player'),
          [x, v] = (0, g.useState)(!0),
          [b] = (0, s.of)(),
          y = e.reduce(
            (l, e) => ((l[e.id] = { username: e.username, id: e.id }), l),
            {}
          );
        (0, g.useEffect)(() => {
          0 !== e.length && C(d);
        }, [e]);
        const C = async (l) => {
          let a = [];
          if (
            ('player' === l
              ? (n('agent'),
                (a = e.filter((l) => 'agent' === l.type).map((l) => l.id)))
              : (n('player'),
                (a = e.filter((l) => 'player' === l.type).map((l) => l.id))),
            a.length > 0)
          )
            try {
              const l = await b({ userIds: a.join(',') });
              if ('data' in l) {
                const e = l.data;
                i(e.data);
              }
              v(!0);
            } catch (d) {
              console.error('Error fetching sum balances:', d);
            }
          else v(!1);
        };
        return (0, p.jsx)(p.Fragment, {
          children:
            a &&
            (0, p.jsxs)(r.Z, {
              children: [
                (0, p.jsx)(o.Z, {
                  sx: { padding: 1 },
                  children: (0, p.jsx)(m.Z, {
                    variant: 'outlined',
                    fullWidth: !0,
                    endIcon: (0, p.jsx)(f.Z, {}),
                    onClick: () => C(d),
                    children:
                      'agent' === d
                        ? (0, p.jsx)(Z.Z, { id: 'label.affiliated-agent' })
                        : (0, p.jsx)(Z.Z, { id: 'label.users' })
                  })
                }),
                (0, p.jsx)(c.Z, {}),
                (0, p.jsx)(o.Z, {
                  p: 2,
                  sx: { overflow: 'auto', height: '73vh' },
                  children: (0, p.jsx)(t.ZP, {
                    container: !0,
                    spacing: 0,
                    children: x
                      ? Object.entries(a).map((l) => {
                          let [e, a] = l;
                          return (0, p.jsx)(j, { data: a, details: y[e] }, e);
                        })
                      : (0, p.jsxs)(u.Z, {
                          severity: 'info',
                          children: [
                            (0, p.jsx)(h.Z, { children: 'Warning' }),
                            'Transactions \u2014 ',
                            (0, p.jsx)('strong', {
                              children: 'No Transaction made'
                            })
                          ]
                        })
                  })
                })
              ]
            })
        });
      };
      var C = a(9585),
        w = a(39281),
        W = a(35527),
        k = a(79836),
        A = a(53382),
        I = a(35855),
        S = a(53994),
        q = a(48550),
        T = a(87837);
      const N = (l) => {
        let { data: e } = l;
        const { notify: a } = (0, T.p)(),
          [i, d] = (0, g.useState)({ apiKey: e.apiKey });
        (0, g.useEffect)(() => {
          d({ ...i, apiKey: null === e || void 0 === e ? void 0 : e.apiKey });
        }, [e]);
        const [n, { isLoading: t }] = (0, s.bE)();
        return (0, p.jsx)(p.Fragment, {
          children: (0, p.jsxs)('div', {
            style: { display: 'flex', justifyContent: 'space-between' },
            children: [
              (0, p.jsx)(q.Z, {
                sx: { width: '80%' },
                name: 'apiKey',
                label: 'API KEY',
                required: !0,
                autoComplete: 'off',
                value: (null === i || void 0 === i ? void 0 : i.apiKey) || ''
              }),
              (0, p.jsx)(m.Z, {
                loading: t,
                variant: 'outlined',
                sx: { marginLeft: 2, padding: 1.5 },
                onClick: async () => {
                  try {
                    const { token: l } = await n({}).unwrap();
                    d({ ...i, apiKey: l }),
                      a({ message: 'New API Key has been generated' });
                  } catch (l) {
                    console.log(l);
                  }
                },
                children: (0, p.jsx)(Z.Z, { id: 'label.create' })
              })
            ]
          })
        });
      };
      var U = a(61134);
      const K = (l) => {
          let { data: e } = l;
          const { notify: a } = (0, T.p)(),
            [i, { isLoading: d }] = (0, s.kD)(),
            [n, t] = (0, g.useState)({
              userId: e.userId,
              accountNumber: '',
              callbackUrl: '',
              apiCall: ''
            }),
            r = (l) => {
              const { name: e, value: a } = l.target;
              t({ ...n, [e]: a });
            },
            { setValue: o, reset: u } = (0, U.cI)({ defaultValues: n });
          return (
            (0, g.useEffect)(() => {
              e
                ? (o(
                    'accountNumber',
                    null === e || void 0 === e ? void 0 : e.accountNumber
                  ),
                  o(
                    'callbackUrl',
                    null === e || void 0 === e ? void 0 : e.callbackUrl
                  ),
                  o('apiCall', null === e || void 0 === e ? void 0 : e.apiCall),
                  t({
                    accountNumber:
                      null === e || void 0 === e ? void 0 : e.accountNumber,
                    apiCall: null === e || void 0 === e ? void 0 : e.apiCall,
                    callbackUrl:
                      null === e || void 0 === e ? void 0 : e.callbackUrl,
                    userId: null === e || void 0 === e ? void 0 : e.userId
                  }))
                : u();
            }, [e]),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(C.Z, {
                  title: (0, p.jsx)(Z.Z, { id: 'label.set-api' })
                }),
                (0, p.jsx)(c.Z, {}),
                (0, p.jsx)(w.Z, {
                  children: (0, p.jsx)(k.Z, {
                    sx: { minWidth: 650 },
                    'aria-label': 'simple table',
                    children: (0, p.jsxs)(A.Z, {
                      children: [
                        (0, p.jsx)(I.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, p.jsx)(q.Z, {
                              fullWidth: !0,
                              name: 'accountNumber',
                              label: (0, p.jsx)(Z.Z, {
                                id: 'label.account-number'
                              }),
                              required: !0,
                              helperText: '',
                              onChange: r,
                              value: n.accountNumber
                            })
                          })
                        }),
                        (0, p.jsxs)(I.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: [
                            (0, p.jsx)(S.Z, {
                              align: 'left',
                              children: (0, p.jsx)(q.Z, {
                                fullWidth: !0,
                                name: 'apiCall',
                                label: (0, p.jsx)(Z.Z, {
                                  id: 'label.apicall-setting'
                                }),
                                required: !0,
                                helperText: '',
                                onChange: r,
                                value: n.apiCall
                              })
                            }),
                            (0, p.jsx)(S.Z, {
                              align: 'left',
                              children: (0, p.jsx)(q.Z, {
                                fullWidth: !0,
                                name: 'callbackUrl',
                                label: 'Callback URL',
                                required: !0,
                                helperText: '',
                                onChange: r,
                                value: n.callbackUrl
                              })
                            })
                          ]
                        }),
                        (0, p.jsx)(I.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, p.jsx)(m.Z, {
                              loading: d,
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: async () => {
                                try {
                                  await i({ id: e.userId, body: n }).unwrap(),
                                    a({ message: 'API Details updated' }),
                                    u();
                                } catch (l) {
                                  console.log(l);
                                }
                              },
                              children: (0, p.jsx)(Z.Z, { id: 'label.edit' })
                            })
                          })
                        })
                      ]
                    })
                  })
                })
              ]
            })
          );
        },
        _ = (l) => {
          var e, a, i, d, n, t, s, r;
          const { user: o } = l,
            { balance: u, balanceAsAgent: h } = o;
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(C.Z, {
                title: (0, p.jsx)(Z.Z, { id: 'label.balance-summaries' })
              }),
              (0, p.jsx)(c.Z, {}),
              (0, p.jsx)(w.Z, {
                component: W.Z,
                children: (0, p.jsx)(k.Z, {
                  sx: { minWidth: 650 },
                  'aria-label': 'simple table',
                  children: (0, p.jsxs)(A.Z, {
                    children: [
                      (0, p.jsx)(I.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: (0, p.jsx)(S.Z, {
                          align: 'left',
                          colSpan: 6,
                          children: (0, p.jsx)(q.Z, {
                            type: 'number',
                            fullWidth: !0,
                            label: (0, p.jsx)(Z.Z, { id: 'label.balance' }),
                            helperText: (0, p.jsx)(Z.Z, {
                              id: 'label.current-balance'
                            }),
                            required: !0,
                            autoComplete: 'off',
                            value:
                              null !==
                                (e =
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.balance) && void 0 !== e
                                ? e
                                : 0
                          })
                        })
                      }),
                      (0, p.jsxs)(I.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, { id: 'label.admin' }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.from-admin'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (a =
                                    null === u || void 0 === u
                                      ? void 0
                                      : u['agent.add_balance']) && void 0 !== a
                                  ? a
                                  : 0
                            })
                          }),
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, { id: 'label.agent' }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.from-agent'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (i = -(null === u || void 0 === u
                                    ? void 0
                                    : u['user.add_balance'])) && void 0 !== i
                                  ? i
                                  : 0
                            })
                          }),
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, { id: 'label.user' }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.to-user'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (d = -(null === h || void 0 === h
                                    ? void 0
                                    : h['user.add_balance'])) && void 0 !== d
                                  ? d
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, p.jsxs)(I.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, { id: 'label.win' }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.from-win'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (n =
                                    null === h || void 0 === h
                                      ? void 0
                                      : h.win) && void 0 !== n
                                  ? n
                                  : 0
                            })
                          }),
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, { id: 'label.bet' }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.total-bet'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (t = -(null === h || void 0 === h
                                    ? void 0
                                    : h.bet)) && void 0 !== t
                                  ? t
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, p.jsxs)(I.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, {
                                id: 'label.total-withdraw'
                              }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.player-withdraw'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (s =
                                    null === h || void 0 === h
                                      ? void 0
                                      : h.withdraw) && void 0 !== s
                                  ? s
                                  : 0
                            })
                          }),
                          (0, p.jsx)(S.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, p.jsx)(q.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, p.jsx)(Z.Z, {
                                id: 'label.total-deposit'
                              }),
                              helperText: (0, p.jsx)(Z.Z, {
                                id: 'label.player-deposit'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (r = -(null === h || void 0 === h
                                    ? void 0
                                    : h.deposit)) && void 0 !== r
                                  ? r
                                  : 0
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
        },
        P = (l) => {
          var e, a, i, d, n;
          let { user: t } = l;
          const [u] = (0, s.V_)(),
            [h, x] = (0, g.useState)(null);
          (0, g.useEffect)(() => {
            null !== t &&
              void 0 !== t &&
              t.id &&
              (async function () {
                try {
                  const l = await u(
                    ''.concat(null === t || void 0 === t ? void 0 : t.id)
                  ).unwrap();
                  x(l);
                } catch (l) {
                  console.log(l);
                }
              })();
          }, [t]);
          const { data: v } = h || {};
          return (0, p.jsx)(p.Fragment, {
            children: (0, p.jsx)(o.Z, {
              py: 2,
              pl: 2,
              mb: 3,
              children: (0, p.jsxs)(r.Z, {
                children: [
                  (0, p.jsx)(C.Z, { title: t.name }),
                  (0, p.jsx)(c.Z, {}),
                  (0, p.jsx)(w.Z, {
                    component: W.Z,
                    children: (0, p.jsx)(k.Z, {
                      sx: { minWidth: 650 },
                      'aria-label': 'simple table',
                      children: (0, p.jsxs)(A.Z, {
                        children: [
                          (0, p.jsxs)(I.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, p.jsx)(S.Z, {
                                align: 'left',
                                children: (0, p.jsx)(q.Z, {
                                  fullWidth: !0,
                                  label: (0, p.jsx)(Z.Z, { id: 'label.name' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (e =
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.username) && void 0 !== e
                                      ? e
                                      : ''
                                })
                              }),
                              (0, p.jsx)(S.Z, {
                                align: 'left',
                                children: (0, p.jsx)(q.Z, {
                                  fullWidth: !0,
                                  label: (0, p.jsx)(Z.Z, {
                                    id: 'label.join-time'
                                  }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (a = new Date(
                                        null === v || void 0 === v
                                          ? void 0
                                          : v.createdAt
                                      ).toLocaleString()) && void 0 !== a
                                      ? a
                                      : ''
                                })
                              })
                            ]
                          }),
                          (0, p.jsxs)(I.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, p.jsx)(S.Z, {
                                align: 'left',
                                children: (0, p.jsx)(q.Z, {
                                  fullWidth: !0,
                                  label: (0, p.jsx)(Z.Z, { id: 'label.type' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (i =
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.type) && void 0 !== i
                                      ? i
                                      : ''
                                })
                              }),
                              (0, p.jsx)(S.Z, {
                                align: 'left',
                                children: (0, p.jsx)(q.Z, {
                                  fullWidth: !0,
                                  disabled: !0,
                                  label: (0, p.jsx)(Z.Z, {
                                    id: 'label.parent-agent'
                                  }),
                                  required: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (d =
                                        null === v ||
                                        void 0 === v ||
                                        null === (n = v.parent) ||
                                        void 0 === n
                                          ? void 0
                                          : n.username) && void 0 !== d
                                      ? d
                                      : 'No higher agent'
                                })
                              })
                            ]
                          }),
                          (0, p.jsx)(I.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: (0, p.jsx)(S.Z, {
                              align: 'left',
                              colSpan: 2,
                              children: (0, p.jsx)(N, {
                                data: {
                                  apiKey:
                                    null === v || void 0 === v
                                      ? void 0
                                      : v.apiKey
                                }
                              })
                            })
                          })
                        ]
                      })
                    })
                  }),
                  (0, p.jsx)(_, { user: t }),
                  (0, p.jsx)(K, {
                    data: {
                      userId: null === t || void 0 === t ? void 0 : t.id,
                      accountNumber:
                        null === t || void 0 === t ? void 0 : t.accountNumber,
                      callbackUrl:
                        null === t || void 0 === t ? void 0 : t.callbackUrl,
                      apiCall: null === t || void 0 === t ? void 0 : t.apiCall
                    }
                  })
                ]
              })
            })
          });
        },
        E = () => {
          var l;
          const { data: e } = (0, s.oj)({ refetchOnMountOrArgChange: !0 }),
            a = {
              id: (null === e || void 0 === e ? void 0 : e.userId) || '',
              name: (null === e || void 0 === e ? void 0 : e.name) || '',
              username:
                (null === e || void 0 === e ? void 0 : e.username) || '',
              currency: (null === e || void 0 === e ? void 0 : e.currency) || {
                name: '',
                code: ''
              },
              type: (null === e || void 0 === e ? void 0 : e.type) || '',
              accountNumber:
                (null === e || void 0 === e ? void 0 : e.accountNumber) || '',
              callbackUrl:
                (null === e || void 0 === e ? void 0 : e.callbackUrl) || '',
              apiCall: (null === e || void 0 === e ? void 0 : e.apiCall) || '',
              subAgent: (null === e || void 0 === e ? void 0 : e.subAgent) || 0,
              apiKey: (null === e || void 0 === e ? void 0 : e.apiKey) || '',
              parentAgentId:
                (null === e || void 0 === e ? void 0 : e.parentAgentId) || 0,
              balance: (null === e || void 0 === e ? void 0 : e.balance) || {
                balance: 0,
                win: 0,
                bet: 0,
                deposit: 0,
                withdraw: 0,
                'user.add_balance': 0,
                'agent.add_balance': 0
              },
              balanceAsAgent: (null === e || void 0 === e
                ? void 0
                : e.balanceAsAgent) || {
                balance: 0,
                win: 0,
                bet: 0,
                deposit: 0,
                withdraw: 0,
                'user.add_balance': 0,
                'agent.add_balance': 0
              },
              avatar: '/static/images/avatars/4.jpg',
              jobTitle: (null === e || void 0 === e ? void 0 : e.type) || '',
              coverImg: '/static/images/placeholders/covers/5.jpg'
            };
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(i.ql, {
                children: (0, p.jsx)('title', {
                  children: 'User Details - Management'
                })
              }),
              (0, p.jsx)(n.Z, {
                sx: { mt: 3 },
                maxWidth: 'lg',
                children: (0, p.jsxs)(t.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: [
                    (0, p.jsx)(t.ZP, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: (0, p.jsx)(P, { user: a })
                    }),
                    (0, p.jsx)(t.ZP, {
                      item: !0,
                      xs: 12,
                      md: 5,
                      children: (0, p.jsx)(y, {
                        users:
                          null !==
                            (l =
                              null === e || void 0 === e
                                ? void 0
                                : e.affiliatedAgents) && void 0 !== l
                            ? l
                            : []
                      })
                    })
                  ]
                })
              }),
              (0, p.jsx)(d.Z, {})
            ]
          });
        };
    }
  }
]);
//# sourceMappingURL=444.d4567944.chunk.js.map
