'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [444],
  {
    173: function (e, l, a) {
      var n = a(6934),
        i = a(9164),
        t = a(4554),
        d = a(890),
        r = a(4349),
        s = a(184),
        o = (0, n.ZP)(i.Z)(function (e) {
          var l = e.theme;
          return '\n        margin-top: '.concat(l.spacing(4), ';\n');
        });
      l.Z = function () {
        return (0, s.jsx)(o, {
          className: 'footer-wrapper',
          children: (0, s.jsxs)(t.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, s.jsx)(t.Z, {
                children: (0, s.jsxs)(d.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, s.jsx)(r.Z, { id: 'footer.admin' })]
                })
              }),
              (0, s.jsx)(d.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    444: function (e, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return O;
          }
        });
      var n = a(6907),
        i = a(173),
        t = a(9164),
        d = a(1889),
        r = a(4222),
        s = a(4165),
        o = a(5861),
        u = a(9439),
        c = a(7621),
        x = a(4554),
        h = a(4721),
        v = a(9658),
        p = a(7317),
        b = a(6151),
        Z = a(3496),
        f = {
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
            categories: [
              'Depo.',
              'Withd.',
              'AAB.',
              'UAB.',
              'Bet',
              'Win',
              'Canc.'
            ]
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
        },
        j = a(184),
        m = function (e) {
          var l,
            a,
            n,
            i,
            t,
            r,
            s,
            o = e.data,
            u = e.details,
            c =
              null !==
                (l = -(null === o || void 0 === o ? void 0 : o.deposit)) &&
              void 0 !== l
                ? l
                : 0,
            h =
              null !== (a = null === o || void 0 === o ? void 0 : o.withdraw) &&
              void 0 !== a
                ? a
                : 0,
            v =
              null !==
                (n =
                  null === o || void 0 === o
                    ? void 0
                    : o['agent.add_balance']) && void 0 !== n
                ? n
                : 0,
            p =
              null !==
                (i = -(null === o || void 0 === o
                  ? void 0
                  : o['user.add_balance'])) && void 0 !== i
                ? i
                : 0,
            m =
              null !== (t = -(null === o || void 0 === o ? void 0 : o.bet)) &&
              void 0 !== t
                ? t
                : 0,
            g =
              null !== (r = null === o || void 0 === o ? void 0 : o.win) &&
              void 0 !== r
                ? r
                : 0,
            y =
              null !== (s = null === o || void 0 === o ? void 0 : o.cancel) &&
              void 0 !== s
                ? s
                : 0,
            w = f,
            C = [{ data: [c, h, v, p, m, g, y] }];
          return (0, j.jsx)(j.Fragment, {
            children: (0, j.jsxs)(
              d.ZP,
              {
                item: !0,
                xs: 12,
                children: [
                  (0, j.jsx)(x.Z, {
                    p: 2,
                    children: (0, j.jsx)(b.Z, {
                      variant: 'outlined',
                      size: 'small',
                      fullWidth: !0,
                      href: '/management/transactions/'.concat(u.id),
                      children: u.username
                    })
                  }),
                  (0, j.jsx)(x.Z, {
                    pl: 1,
                    sx: { marginTop: '-30px' },
                    children: (0, j.jsx)(Z.Z, {
                      options: w,
                      series: C,
                      type: 'bar',
                      height: 150
                    })
                  })
                ]
              },
              u.id
            )
          });
        },
        g = a(4349),
        y = a(9709),
        w = a(6633),
        C = a(2791),
        k = function (e) {
          var l = e.users,
            a = (0, C.useState)(),
            n = (0, u.Z)(a, 2),
            i = n[0],
            t = n[1],
            b = (0, C.useState)('player'),
            Z = (0, u.Z)(b, 2),
            f = Z[0],
            k = Z[1],
            W = (0, C.useState)(!0),
            A = (0, u.Z)(W, 2),
            I = A[0],
            S = A[1],
            q = (0, r.of)(),
            T = (0, u.Z)(q, 1)[0],
            N = l.reduce(function (e, l) {
              return (e[l.id] = { username: l.username, id: l.id }), e;
            }, {});
          (0, C.useEffect)(
            function () {
              0 !== l.length && U(f);
            },
            [l]
          );
          var U = (function () {
            var e = (0, o.Z)(
              (0, s.Z)().mark(function e(a) {
                var n, i, d;
                return (0, s.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = []),
                            'player' === a
                              ? (k('agent'),
                                (n = l
                                  .filter(function (e) {
                                    return 'agent' === e.type;
                                  })
                                  .map(function (e) {
                                    return e.id;
                                  })))
                              : (k('player'),
                                (n = l
                                  .filter(function (e) {
                                    return 'player' === e.type;
                                  })
                                  .map(function (e) {
                                    return e.id;
                                  }))),
                            !(n.length > 0))
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            T({ userIds: n.join(',') })
                          );
                        case 6:
                          'data' in (i = e.sent) && ((d = i.data), t(d.data)),
                            S(!0),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(3)),
                            console.error('Error fetching sum balances:', e.t0);
                        case 14:
                          e.next = 17;
                          break;
                        case 16:
                          S(!1);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (l) {
              return e.apply(this, arguments);
            };
          })();
          return (0, j.jsx)(j.Fragment, {
            children:
              i &&
              (0, j.jsxs)(c.Z, {
                children: [
                  (0, j.jsx)(x.Z, {
                    sx: { padding: 1 },
                    children: (0, j.jsx)(y.Z, {
                      variant: 'outlined',
                      fullWidth: !0,
                      endIcon: (0, j.jsx)(w.Z, {}),
                      onClick: function () {
                        return U(f);
                      },
                      children:
                        'agent' === f
                          ? (0, j.jsx)(g.Z, { id: 'label.affiliated-agent' })
                          : (0, j.jsx)(g.Z, { id: 'label.users' })
                    })
                  }),
                  (0, j.jsx)(h.Z, {}),
                  (0, j.jsx)(x.Z, {
                    p: 2,
                    sx: { overflow: 'auto', height: '73vh' },
                    children: (0, j.jsx)(d.ZP, {
                      container: !0,
                      spacing: 0,
                      children: I
                        ? Object.entries(i).map(function (e) {
                            var l = (0, u.Z)(e, 2),
                              a = l[0],
                              n = l[1];
                            return (0, j.jsx)(m, { data: n, details: N[a] }, a);
                          })
                        : (0, j.jsxs)(v.Z, {
                            severity: 'info',
                            children: [
                              (0, j.jsx)(p.Z, { children: 'Warning' }),
                              'Transactions \u2014 ',
                              (0, j.jsx)('strong', {
                                children: 'No Transaction made'
                              })
                            ]
                          })
                    })
                  })
                ]
              })
          });
        },
        W = a(9585),
        A = a(9281),
        I = a(5527),
        S = a(9836),
        q = a(3382),
        T = a(5855),
        N = a(3994),
        U = a(8550),
        K = a(1413),
        _ = a(7837),
        P = function (e) {
          var l = e.data,
            a = (0, _.p)().notify,
            n = (0, C.useState)({ apiKey: l.apiKey }),
            i = (0, u.Z)(n, 2),
            t = i[0],
            d = i[1];
          (0, C.useEffect)(
            function () {
              d(
                (0, K.Z)(
                  (0, K.Z)({}, t),
                  {},
                  { apiKey: null === l || void 0 === l ? void 0 : l.apiKey }
                )
              );
            },
            [l]
          );
          var c = (0, r.bE)(),
            x = (0, u.Z)(c, 2),
            h = x[0],
            v = x[1].isLoading,
            p = (function () {
              var e = (0, o.Z)(
                (0, s.Z)().mark(function e() {
                  var l, n;
                  return (0, s.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), h({}).unwrap();
                          case 3:
                            (l = e.sent),
                              (n = l.token),
                              d((0, K.Z)((0, K.Z)({}, t), {}, { apiKey: n })),
                              a({ message: 'New API Key has been generated' }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, j.jsx)(j.Fragment, {
            children: (0, j.jsxs)('div', {
              style: { display: 'flex', justifyContent: 'space-between' },
              children: [
                (0, j.jsx)(U.Z, {
                  sx: { width: '80%' },
                  name: 'apiKey',
                  label: 'API KEY',
                  required: !0,
                  autoComplete: 'off',
                  value: (null === t || void 0 === t ? void 0 : t.apiKey) || ''
                }),
                (0, j.jsx)(y.Z, {
                  loading: v,
                  variant: 'outlined',
                  sx: { marginLeft: 2, padding: 1.5 },
                  onClick: p,
                  children: (0, j.jsx)(g.Z, { id: 'label.create' })
                })
              ]
            })
          });
        },
        E = a(4942),
        F = a(1134),
        L = function (e) {
          var l = e.data,
            a = (0, _.p)().notify,
            n = (0, r.kD)(),
            i = (0, u.Z)(n, 2),
            t = i[0],
            d = i[1].isLoading,
            c = (function () {
              var e = (0, o.Z)(
                (0, s.Z)().mark(function e() {
                  return (0, s.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              t({ id: l.userId, body: p }).unwrap()
                            );
                          case 3:
                            a({ message: 'API Details updated' }),
                              w(),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
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
            })(),
            x = (0, C.useState)({
              userId: l.userId,
              accountNumber: '',
              callbackUrl: '',
              apiCall: ''
            }),
            v = (0, u.Z)(x, 2),
            p = v[0],
            b = v[1],
            Z = function (e) {
              var l = e.target,
                a = l.name,
                n = l.value;
              b((0, K.Z)((0, K.Z)({}, p), {}, (0, E.Z)({}, a, n)));
            },
            f = (0, F.cI)({ defaultValues: p }),
            m = f.setValue,
            w = f.reset;
          return (
            (0, C.useEffect)(
              function () {
                l
                  ? (m(
                      'accountNumber',
                      null === l || void 0 === l ? void 0 : l.accountNumber
                    ),
                    m(
                      'callbackUrl',
                      null === l || void 0 === l ? void 0 : l.callbackUrl
                    ),
                    m(
                      'apiCall',
                      null === l || void 0 === l ? void 0 : l.apiCall
                    ),
                    b({
                      accountNumber:
                        null === l || void 0 === l ? void 0 : l.accountNumber,
                      apiCall: null === l || void 0 === l ? void 0 : l.apiCall,
                      callbackUrl:
                        null === l || void 0 === l ? void 0 : l.callbackUrl,
                      userId: null === l || void 0 === l ? void 0 : l.userId
                    }))
                  : w();
              },
              [l]
            ),
            (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(W.Z, {
                  title: (0, j.jsx)(g.Z, { id: 'label.set-api' })
                }),
                (0, j.jsx)(h.Z, {}),
                (0, j.jsx)(A.Z, {
                  children: (0, j.jsx)(S.Z, {
                    sx: { minWidth: 650 },
                    'aria-label': 'simple table',
                    children: (0, j.jsxs)(q.Z, {
                      children: [
                        (0, j.jsx)(T.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, j.jsx)(U.Z, {
                              fullWidth: !0,
                              name: 'accountNumber',
                              label: (0, j.jsx)(g.Z, {
                                id: 'label.account-number'
                              }),
                              required: !0,
                              helperText: '',
                              onChange: Z,
                              value: p.accountNumber
                            })
                          })
                        }),
                        (0, j.jsxs)(T.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: [
                            (0, j.jsx)(N.Z, {
                              align: 'left',
                              children: (0, j.jsx)(U.Z, {
                                fullWidth: !0,
                                name: 'apiCall',
                                label: (0, j.jsx)(g.Z, {
                                  id: 'label.apicall-setting'
                                }),
                                required: !0,
                                helperText: '',
                                onChange: Z,
                                value: p.apiCall
                              })
                            }),
                            (0, j.jsx)(N.Z, {
                              align: 'left',
                              children: (0, j.jsx)(U.Z, {
                                fullWidth: !0,
                                name: 'callbackUrl',
                                label: 'Callback URL',
                                required: !0,
                                helperText: '',
                                onChange: Z,
                                value: p.callbackUrl
                              })
                            })
                          ]
                        }),
                        (0, j.jsx)(T.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, j.jsx)(y.Z, {
                              loading: d,
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: c,
                              children: (0, j.jsx)(g.Z, { id: 'label.edit' })
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
        B = function (e) {
          var l,
            a,
            n,
            i,
            t,
            d,
            r,
            s,
            o = e.user,
            u = o.balance,
            c = o.balanceAsAgent;
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(W.Z, {
                title: (0, j.jsx)(g.Z, { id: 'label.balance-summaries' })
              }),
              (0, j.jsx)(h.Z, {}),
              (0, j.jsx)(A.Z, {
                component: I.Z,
                children: (0, j.jsx)(S.Z, {
                  sx: { minWidth: 650 },
                  'aria-label': 'simple table',
                  children: (0, j.jsxs)(q.Z, {
                    children: [
                      (0, j.jsx)(T.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: (0, j.jsx)(N.Z, {
                          align: 'left',
                          colSpan: 6,
                          children: (0, j.jsx)(U.Z, {
                            type: 'number',
                            fullWidth: !0,
                            label: (0, j.jsx)(g.Z, { id: 'label.balance' }),
                            helperText: (0, j.jsx)(g.Z, {
                              id: 'label.current-balance'
                            }),
                            required: !0,
                            autoComplete: 'off',
                            value:
                              null !==
                                (l =
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.balance) && void 0 !== l
                                ? l
                                : 0
                          })
                        })
                      }),
                      (0, j.jsxs)(T.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, { id: 'label.admin' }),
                              helperText: (0, j.jsx)(g.Z, {
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
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, { id: 'label.agent' }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.from-agent'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (n = -(null === u || void 0 === u
                                    ? void 0
                                    : u['user.add_balance'])) && void 0 !== n
                                  ? n
                                  : 0
                            })
                          }),
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, { id: 'label.user' }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.to-user'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (i = -(null === c || void 0 === c
                                    ? void 0
                                    : c['user.add_balance'])) && void 0 !== i
                                  ? i
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, j.jsxs)(T.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, { id: 'label.win' }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.from-win'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (t =
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.win) && void 0 !== t
                                  ? t
                                  : 0
                            })
                          }),
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, { id: 'label.bet' }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.total-bet'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (d = -(null === c || void 0 === c
                                    ? void 0
                                    : c.bet)) && void 0 !== d
                                  ? d
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, j.jsxs)(T.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, {
                                id: 'label.total-withdraw'
                              }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.player-withdraw'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (r =
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.withdraw) && void 0 !== r
                                  ? r
                                  : 0
                            })
                          }),
                          (0, j.jsx)(N.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, j.jsx)(U.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, j.jsx)(g.Z, {
                                id: 'label.total-deposit'
                              }),
                              helperText: (0, j.jsx)(g.Z, {
                                id: 'label.player-deposit'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (s = -(null === c || void 0 === c
                                    ? void 0
                                    : c.deposit)) && void 0 !== s
                                  ? s
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
        D = function (e) {
          var l,
            a,
            n,
            i,
            t,
            d = e.user,
            v = (0, r.V_)(),
            p = (0, u.Z)(v, 1)[0],
            b = (0, C.useState)(null),
            Z = (0, u.Z)(b, 2),
            f = Z[0],
            m = Z[1];
          (0, C.useEffect)(
            function () {
              function e() {
                return (e = (0, o.Z)(
                  (0, s.Z)().mark(function e() {
                    var l;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                p(
                                  ''.concat(
                                    null === d || void 0 === d ? void 0 : d.id
                                  )
                                ).unwrap()
                              );
                            case 3:
                              (l = e.sent), m(l), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
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
                )).apply(this, arguments);
              }
              null !== d &&
                void 0 !== d &&
                d.id &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [d]
          );
          var y = (f || {}).data;
          return (0, j.jsx)(j.Fragment, {
            children: (0, j.jsx)(x.Z, {
              py: 2,
              pl: 2,
              mb: 3,
              children: (0, j.jsxs)(c.Z, {
                children: [
                  (0, j.jsx)(W.Z, { title: d.name }),
                  (0, j.jsx)(h.Z, {}),
                  (0, j.jsx)(A.Z, {
                    component: I.Z,
                    children: (0, j.jsx)(S.Z, {
                      sx: { minWidth: 650 },
                      'aria-label': 'simple table',
                      children: (0, j.jsxs)(q.Z, {
                        children: [
                          (0, j.jsxs)(T.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, j.jsx)(N.Z, {
                                align: 'left',
                                children: (0, j.jsx)(U.Z, {
                                  fullWidth: !0,
                                  label: (0, j.jsx)(g.Z, { id: 'label.name' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (l =
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.username) && void 0 !== l
                                      ? l
                                      : ''
                                })
                              }),
                              (0, j.jsx)(N.Z, {
                                align: 'left',
                                children: (0, j.jsx)(U.Z, {
                                  fullWidth: !0,
                                  label: (0, j.jsx)(g.Z, {
                                    id: 'label.join-time'
                                  }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (a = new Date(
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.createdAt
                                      ).toLocaleString()) && void 0 !== a
                                      ? a
                                      : ''
                                })
                              })
                            ]
                          }),
                          (0, j.jsxs)(T.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, j.jsx)(N.Z, {
                                align: 'left',
                                children: (0, j.jsx)(U.Z, {
                                  fullWidth: !0,
                                  label: (0, j.jsx)(g.Z, { id: 'label.type' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (n =
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.type) && void 0 !== n
                                      ? n
                                      : ''
                                })
                              }),
                              (0, j.jsx)(N.Z, {
                                align: 'left',
                                children: (0, j.jsx)(U.Z, {
                                  fullWidth: !0,
                                  disabled: !0,
                                  label: (0, j.jsx)(g.Z, {
                                    id: 'label.parent-agent'
                                  }),
                                  required: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (i =
                                        null === y ||
                                        void 0 === y ||
                                        null === (t = y.parent) ||
                                        void 0 === t
                                          ? void 0
                                          : t.username) && void 0 !== i
                                      ? i
                                      : 'No higher agent'
                                })
                              })
                            ]
                          }),
                          (0, j.jsx)(T.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: (0, j.jsx)(N.Z, {
                              align: 'left',
                              colSpan: 2,
                              children: (0, j.jsx)(P, {
                                data: {
                                  apiKey:
                                    null === y || void 0 === y
                                      ? void 0
                                      : y.apiKey
                                }
                              })
                            })
                          })
                        ]
                      })
                    })
                  }),
                  (0, j.jsx)(B, { user: d }),
                  (0, j.jsx)(L, {
                    data: {
                      userId: null === d || void 0 === d ? void 0 : d.id,
                      accountNumber:
                        null === d || void 0 === d ? void 0 : d.accountNumber,
                      callbackUrl:
                        null === d || void 0 === d ? void 0 : d.callbackUrl,
                      apiCall: null === d || void 0 === d ? void 0 : d.apiCall
                    }
                  })
                ]
              })
            })
          });
        },
        O = function () {
          var e,
            l = (0, r.oj)({ refetchOnMountOrArgChange: !0 }).data,
            a = {
              id: (null === l || void 0 === l ? void 0 : l.userId) || '',
              name: (null === l || void 0 === l ? void 0 : l.name) || '',
              username:
                (null === l || void 0 === l ? void 0 : l.username) || '',
              currency: (null === l || void 0 === l ? void 0 : l.currency) || {
                name: '',
                code: ''
              },
              type: (null === l || void 0 === l ? void 0 : l.type) || '',
              accountNumber:
                (null === l || void 0 === l ? void 0 : l.accountNumber) || '',
              callbackUrl:
                (null === l || void 0 === l ? void 0 : l.callbackUrl) || '',
              apiCall: (null === l || void 0 === l ? void 0 : l.apiCall) || '',
              subAgent: (null === l || void 0 === l ? void 0 : l.subAgent) || 0,
              apiKey: (null === l || void 0 === l ? void 0 : l.apiKey) || '',
              parentAgentId:
                (null === l || void 0 === l ? void 0 : l.parentAgentId) || 0,
              balance: (null === l || void 0 === l ? void 0 : l.balance) || {
                balance: 0,
                win: 0,
                bet: 0,
                deposit: 0,
                withdraw: 0,
                'user.add_balance': 0,
                'agent.add_balance': 0
              },
              balanceAsAgent: (null === l || void 0 === l
                ? void 0
                : l.balanceAsAgent) || {
                balance: 0,
                win: 0,
                bet: 0,
                deposit: 0,
                withdraw: 0,
                'user.add_balance': 0,
                'agent.add_balance': 0
              },
              avatar: '/static/images/avatars/4.jpg',
              jobTitle: (null === l || void 0 === l ? void 0 : l.type) || '',
              coverImg: '/static/images/placeholders/covers/5.jpg'
            };
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(n.ql, {
                children: (0, j.jsx)('title', {
                  children: 'User Details - Management'
                })
              }),
              (0, j.jsx)(t.Z, {
                sx: { mt: 3 },
                maxWidth: 'lg',
                children: (0, j.jsxs)(d.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: [
                    (0, j.jsx)(d.ZP, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: (0, j.jsx)(D, { user: a })
                    }),
                    (0, j.jsx)(d.ZP, {
                      item: !0,
                      xs: 12,
                      md: 5,
                      children: (0, j.jsx)(k, {
                        users:
                          null !==
                            (e =
                              null === l || void 0 === l
                                ? void 0
                                : l.affiliatedAgents) && void 0 !== e
                            ? e
                            : []
                      })
                    })
                  ]
                })
              }),
              (0, j.jsx)(i.Z, {})
            ]
          });
        };
    }
  }
]);
//# sourceMappingURL=444.9847d40f.chunk.js.map
