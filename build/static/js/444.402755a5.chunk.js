'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [444],
  {
    173: function (l, e, a) {
      var i = a(6934),
        n = a(9164),
        t = a(4554),
        d = a(890),
        r = a(4349),
        s = a(184),
        o = (0, i.ZP)(n.Z)(function (l) {
          var e = l.theme;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function () {
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
    444: function (l, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return L;
          }
        });
      var i = a(6907),
        n = a(173),
        t = a(9164),
        d = a(1889),
        r = a(4222),
        s = a(7621),
        o = a(9585),
        u = a(4721),
        c = a(4554),
        v = a(890),
        x = a(6151),
        h = a(3496),
        p = {
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
        b = a(184),
        Z = function (l) {
          var e,
            a,
            i,
            n,
            t,
            r,
            s,
            o,
            u,
            Z,
            j,
            f,
            m,
            g,
            y = l.data,
            C =
              null !==
                (e = -(null === y ||
                void 0 === y ||
                null === (a = y.allSums) ||
                void 0 === a
                  ? void 0
                  : a.deposit)) && void 0 !== e
                ? e
                : 0,
            w =
              null !==
                (i =
                  null === y ||
                  void 0 === y ||
                  null === (n = y.allSums) ||
                  void 0 === n
                    ? void 0
                    : n.withdraw) && void 0 !== i
                ? i
                : 0,
            k =
              null !==
                (t =
                  null === y ||
                  void 0 === y ||
                  null === (r = y.allSums) ||
                  void 0 === r
                    ? void 0
                    : r['agent.add_balance']) && void 0 !== t
                ? t
                : 0,
            S =
              null !==
                (s = -(null === y ||
                void 0 === y ||
                null === (o = y.allSums) ||
                void 0 === o
                  ? void 0
                  : o['user.add_balance'])) && void 0 !== s
                ? s
                : 0,
            A =
              null !==
                (u = -(null === y ||
                void 0 === y ||
                null === (Z = y.allSums) ||
                void 0 === Z
                  ? void 0
                  : Z.bet)) && void 0 !== u
                ? u
                : 0,
            W =
              null !==
                (j =
                  null === y ||
                  void 0 === y ||
                  null === (f = y.allSums) ||
                  void 0 === f
                    ? void 0
                    : f.win) && void 0 !== j
                ? j
                : 0,
            I =
              null !==
                (m =
                  null === y ||
                  void 0 === y ||
                  null === (g = y.allSums) ||
                  void 0 === g
                    ? void 0
                    : g.cancel) && void 0 !== m
                ? m
                : 0,
            q = p,
            T = [{ data: [C, w, k, S, A, W, I] }];
          return (0, b.jsx)(
            d.ZP,
            {
              item: !0,
              xs: 12,
              children: (0, b.jsxs)(c.Z, {
                p: 1,
                display: 'flex',
                alignItems: 'flex-start',
                children: [
                  (0, b.jsxs)(c.Z, {
                    pl: 2,
                    children: [
                      (0, b.jsx)(v.Z, {
                        gutterBottom: !0,
                        variant: 'subtitle2',
                        children: y.username
                      }),
                      (0, b.jsx)(v.Z, {
                        variant: 'h4',
                        gutterBottom: !0,
                        children: y.username
                      }),
                      (0, b.jsx)(x.Z, {
                        variant: 'outlined',
                        size: 'small',
                        children: y.username
                      })
                    ]
                  }),
                  (0, b.jsx)(c.Z, {
                    pl: 1,
                    sx: { marginTop: '-30px' },
                    children: (0, b.jsx)(h.Z, {
                      options: q,
                      series: T,
                      type: 'bar',
                      height: 150
                    })
                  })
                ]
              })
            },
            y.username
          );
        },
        j = a(4349),
        f = function (l) {
          var e = l.users;
          return (0, b.jsxs)(s.Z, {
            children: [
              (0, b.jsx)(o.Z, {
                title: (0, b.jsx)(j.Z, { id: 'label.affiliated-agent' })
              }),
              (0, b.jsx)(u.Z, {}),
              (0, b.jsx)(c.Z, {
                p: 2,
                sx: { overflow: 'auto', height: '73vh' },
                children: (0, b.jsx)(d.ZP, {
                  container: !0,
                  spacing: 0,
                  children: e
                    .filter(function (l) {
                      return null === l || void 0 === l ? void 0 : l.allSums;
                    })
                    .map(function (l) {
                      return Object.keys(
                        null === l || void 0 === l ? void 0 : l.allSums
                      ).length > 0
                        ? (0, b.jsx)(
                            Z,
                            { data: l },
                            null === l || void 0 === l ? void 0 : l.id
                          )
                        : (0, b.jsx)(b.Fragment, {});
                    })
                })
              })
            ]
          });
        },
        m = a(4165),
        g = a(5861),
        y = a(9439),
        C = a(9281),
        w = a(5527),
        k = a(9836),
        S = a(3382),
        A = a(5855),
        W = a(3994),
        I = a(8550),
        q = a(2791),
        T = a(1413),
        N = a(9709),
        U = a(7837),
        K = function (l) {
          var e = l.data,
            a = (0, U.p)().notify,
            i = (0, q.useState)({ apiKey: e.apiKey }),
            n = (0, y.Z)(i, 2),
            t = n[0],
            d = n[1];
          (0, q.useEffect)(
            function () {
              d(
                (0, T.Z)(
                  (0, T.Z)({}, t),
                  {},
                  { apiKey: null === e || void 0 === e ? void 0 : e.apiKey }
                )
              );
            },
            [e]
          );
          var s = (0, r.bE)(),
            o = (0, y.Z)(s, 2),
            u = o[0],
            c = o[1].isLoading,
            v = (function () {
              var l = (0, g.Z)(
                (0, m.Z)().mark(function l() {
                  var e, i;
                  return (0, m.Z)().wrap(
                    function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            return (l.prev = 0), (l.next = 3), u({}).unwrap();
                          case 3:
                            (e = l.sent),
                              (i = e.token),
                              d((0, T.Z)((0, T.Z)({}, t), {}, { apiKey: i })),
                              a({ message: 'New API Key has been generated' }),
                              (l.next = 12);
                            break;
                          case 9:
                            (l.prev = 9),
                              (l.t0 = l.catch(0)),
                              console.log(l.t0);
                          case 12:
                          case 'end':
                            return l.stop();
                        }
                    },
                    l,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return l.apply(this, arguments);
              };
            })();
          return (0, b.jsx)(b.Fragment, {
            children: (0, b.jsxs)('div', {
              style: { display: 'flex', justifyContent: 'space-between' },
              children: [
                (0, b.jsx)(I.Z, {
                  sx: { width: '80%' },
                  name: 'apiKey',
                  label: 'API KEY',
                  required: !0,
                  autoComplete: 'off',
                  value: (null === t || void 0 === t ? void 0 : t.apiKey) || ''
                }),
                (0, b.jsx)(N.Z, {
                  loading: c,
                  variant: 'outlined',
                  sx: { marginLeft: 2, padding: 1.5 },
                  onClick: v,
                  children: (0, b.jsx)(j.Z, { id: 'label.create' })
                })
              ]
            })
          });
        },
        P = a(4942),
        _ = a(1134),
        B = function (l) {
          var e = l.data,
            a = (0, U.p)().notify,
            i = (0, r.kD)(),
            n = (0, y.Z)(i, 2),
            t = n[0],
            d = n[1].isLoading,
            s = (function () {
              var l = (0, g.Z)(
                (0, m.Z)().mark(function l() {
                  return (0, m.Z)().wrap(
                    function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            return (
                              (l.prev = 0),
                              (l.next = 3),
                              t({ id: e.userId, body: x }).unwrap()
                            );
                          case 3:
                            a({ message: 'API Details updated' }),
                              w(),
                              (l.next = 10);
                            break;
                          case 7:
                            (l.prev = 7),
                              (l.t0 = l.catch(0)),
                              console.log(l.t0);
                          case 10:
                          case 'end':
                            return l.stop();
                        }
                    },
                    l,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return l.apply(this, arguments);
              };
            })(),
            c = (0, q.useState)({
              userId: e.userId,
              accountNumber: '',
              callbackUrl: '',
              apiCall: ''
            }),
            v = (0, y.Z)(c, 2),
            x = v[0],
            h = v[1],
            p = function (l) {
              var e = l.target,
                a = e.name,
                i = e.value;
              h((0, T.Z)((0, T.Z)({}, x), {}, (0, P.Z)({}, a, i)));
            },
            Z = (0, _.cI)({ defaultValues: x }),
            f = Z.setValue,
            w = Z.reset;
          return (
            (0, q.useEffect)(
              function () {
                e
                  ? (f(
                      'accountNumber',
                      null === e || void 0 === e ? void 0 : e.accountNumber
                    ),
                    f(
                      'callbackUrl',
                      null === e || void 0 === e ? void 0 : e.callbackUrl
                    ),
                    f(
                      'apiCall',
                      null === e || void 0 === e ? void 0 : e.apiCall
                    ),
                    h({
                      accountNumber:
                        null === e || void 0 === e ? void 0 : e.accountNumber,
                      apiCall: null === e || void 0 === e ? void 0 : e.apiCall,
                      callbackUrl:
                        null === e || void 0 === e ? void 0 : e.callbackUrl,
                      userId: null === e || void 0 === e ? void 0 : e.userId
                    }))
                  : w();
              },
              [e]
            ),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(o.Z, {
                  title: (0, b.jsx)(j.Z, { id: 'label.set-api' })
                }),
                (0, b.jsx)(u.Z, {}),
                (0, b.jsx)(C.Z, {
                  children: (0, b.jsx)(k.Z, {
                    sx: { minWidth: 650 },
                    'aria-label': 'simple table',
                    children: (0, b.jsxs)(S.Z, {
                      children: [
                        (0, b.jsx)(A.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, b.jsx)(I.Z, {
                              fullWidth: !0,
                              name: 'accountNumber',
                              label: (0, b.jsx)(j.Z, {
                                id: 'label.account-number'
                              }),
                              required: !0,
                              helperText: '',
                              onChange: p,
                              value: x.accountNumber
                            })
                          })
                        }),
                        (0, b.jsxs)(A.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: [
                            (0, b.jsx)(W.Z, {
                              align: 'left',
                              children: (0, b.jsx)(I.Z, {
                                fullWidth: !0,
                                name: 'apiCall',
                                label: (0, b.jsx)(j.Z, {
                                  id: 'label.apicall-setting'
                                }),
                                required: !0,
                                helperText: '',
                                onChange: p,
                                value: x.apiCall
                              })
                            }),
                            (0, b.jsx)(W.Z, {
                              align: 'left',
                              children: (0, b.jsx)(I.Z, {
                                fullWidth: !0,
                                name: 'callbackUrl',
                                label: 'Callback URL',
                                required: !0,
                                helperText: '',
                                onChange: p,
                                value: x.callbackUrl
                              })
                            })
                          ]
                        }),
                        (0, b.jsx)(A.Z, {
                          sx: {
                            '&:last-child td, &:last-child th': { border: 0 }
                          },
                          children: (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, b.jsx)(N.Z, {
                              loading: d,
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: s,
                              children: (0, b.jsx)(j.Z, { id: 'label.edit' })
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
        E = function (l) {
          var e,
            a,
            i,
            n,
            t,
            d,
            r,
            s,
            c = l.user,
            v = c.balance,
            x = c.balanceAsAgent;
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(o.Z, {
                title: (0, b.jsx)(j.Z, { id: 'label.balance-summaries' })
              }),
              (0, b.jsx)(u.Z, {}),
              (0, b.jsx)(C.Z, {
                component: w.Z,
                children: (0, b.jsx)(k.Z, {
                  sx: { minWidth: 650 },
                  'aria-label': 'simple table',
                  children: (0, b.jsxs)(S.Z, {
                    children: [
                      (0, b.jsx)(A.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: (0, b.jsx)(W.Z, {
                          align: 'left',
                          colSpan: 6,
                          children: (0, b.jsx)(I.Z, {
                            type: 'number',
                            fullWidth: !0,
                            label: (0, b.jsx)(j.Z, { id: 'label.balance' }),
                            helperText: (0, b.jsx)(j.Z, {
                              id: 'label.current-balance'
                            }),
                            required: !0,
                            autoComplete: 'off',
                            value:
                              null !==
                                (e =
                                  null === v || void 0 === v
                                    ? void 0
                                    : v.balance) && void 0 !== e
                                ? e
                                : 0
                          })
                        })
                      }),
                      (0, b.jsxs)(A.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, { id: 'label.admin' }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.from-admin'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (a =
                                    null === v || void 0 === v
                                      ? void 0
                                      : v['agent.add_balance']) && void 0 !== a
                                  ? a
                                  : 0
                            })
                          }),
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, { id: 'label.agent' }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.from-agent'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (i = -(null === v || void 0 === v
                                    ? void 0
                                    : v['user.add_balance'])) && void 0 !== i
                                  ? i
                                  : 0
                            })
                          }),
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 2,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, { id: 'label.user' }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.to-user'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (n = -(null === x || void 0 === x
                                    ? void 0
                                    : x['user.add_balance'])) && void 0 !== n
                                  ? n
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, b.jsxs)(A.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, { id: 'label.win' }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.from-win'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (t =
                                    null === x || void 0 === x
                                      ? void 0
                                      : x.win) && void 0 !== t
                                  ? t
                                  : 0
                            })
                          }),
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, { id: 'label.bet' }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.total-bet'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (d = -(null === x || void 0 === x
                                    ? void 0
                                    : x.bet)) && void 0 !== d
                                  ? d
                                  : 0
                            })
                          })
                        ]
                      }),
                      (0, b.jsxs)(A.Z, {
                        sx: {
                          '&:last-child td, &:last-child th': { border: 0 }
                        },
                        children: [
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, {
                                id: 'label.total-withdraw'
                              }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.player-withdraw'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (r =
                                    null === x || void 0 === x
                                      ? void 0
                                      : x.withdraw) && void 0 !== r
                                  ? r
                                  : 0
                            })
                          }),
                          (0, b.jsx)(W.Z, {
                            align: 'left',
                            colSpan: 3,
                            children: (0, b.jsx)(I.Z, {
                              type: 'number',
                              fullWidth: !0,
                              label: (0, b.jsx)(j.Z, {
                                id: 'label.total-deposit'
                              }),
                              helperText: (0, b.jsx)(j.Z, {
                                id: 'label.player-deposit'
                              }),
                              required: !0,
                              autoComplete: 'off',
                              value:
                                null !==
                                  (s = -(null === x || void 0 === x
                                    ? void 0
                                    : x.deposit)) && void 0 !== s
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
        F = function (l) {
          var e,
            a,
            i,
            n,
            t,
            d,
            v = l.user,
            x = (0, r.V_)(),
            h = (0, y.Z)(x, 1)[0],
            p = (0, q.useState)(null),
            Z = (0, y.Z)(p, 2),
            f = Z[0],
            T = Z[1];
          (0, q.useEffect)(
            function () {
              function l() {
                return (l = (0, g.Z)(
                  (0, m.Z)().mark(function l() {
                    var e;
                    return (0, m.Z)().wrap(
                      function (l) {
                        for (;;)
                          switch ((l.prev = l.next)) {
                            case 0:
                              return (
                                (l.prev = 0),
                                (l.next = 3),
                                h(
                                  ''.concat(
                                    null === v || void 0 === v ? void 0 : v.id
                                  )
                                ).unwrap()
                              );
                            case 3:
                              (e = l.sent), T(e), (l.next = 10);
                              break;
                            case 7:
                              (l.prev = 7),
                                (l.t0 = l.catch(0)),
                                console.log(l.t0);
                            case 10:
                            case 'end':
                              return l.stop();
                          }
                      },
                      l,
                      null,
                      [[0, 7]]
                    );
                  })
                )).apply(this, arguments);
              }
              null !== v &&
                void 0 !== v &&
                v.id &&
                (function () {
                  l.apply(this, arguments);
                })();
            },
            [v]
          );
          var N = (f || {}).data;
          return (0, b.jsx)(b.Fragment, {
            children: (0, b.jsx)(c.Z, {
              py: 2,
              pl: 2,
              mb: 3,
              children: (0, b.jsxs)(s.Z, {
                children: [
                  (0, b.jsx)(o.Z, { title: v.name }),
                  (0, b.jsx)(u.Z, {}),
                  (0, b.jsx)(C.Z, {
                    component: w.Z,
                    children: (0, b.jsx)(k.Z, {
                      sx: { minWidth: 650 },
                      'aria-label': 'simple table',
                      children: (0, b.jsxs)(S.Z, {
                        children: [
                          (0, b.jsxs)(A.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, b.jsx)(W.Z, {
                                align: 'left',
                                children: (0, b.jsx)(I.Z, {
                                  fullWidth: !0,
                                  label: (0, b.jsx)(j.Z, { id: 'label.name' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (e =
                                        null === v || void 0 === v
                                          ? void 0
                                          : v.username) && void 0 !== e
                                      ? e
                                      : ''
                                })
                              }),
                              (0, b.jsx)(W.Z, {
                                align: 'left',
                                children: (0, b.jsx)(I.Z, {
                                  fullWidth: !0,
                                  label: (0, b.jsx)(j.Z, {
                                    id: 'label.join-time'
                                  }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (a = new Date(
                                        null === N || void 0 === N
                                          ? void 0
                                          : N.createdAt
                                      ).toLocaleString()) && void 0 !== a
                                      ? a
                                      : ''
                                })
                              })
                            ]
                          }),
                          (0, b.jsxs)(A.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: [
                              (0, b.jsx)(W.Z, {
                                align: 'left',
                                children: (0, b.jsx)(I.Z, {
                                  fullWidth: !0,
                                  label: (0, b.jsx)(j.Z, { id: 'label.type' }),
                                  required: !0,
                                  disabled: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (i =
                                        null === v || void 0 === v
                                          ? void 0
                                          : v.type) && void 0 !== i
                                      ? i
                                      : ''
                                })
                              }),
                              (0, b.jsx)(W.Z, {
                                align: 'left',
                                children: (0, b.jsx)(I.Z, {
                                  fullWidth: !0,
                                  disabled: !0,
                                  label: (0, b.jsx)(j.Z, {
                                    id: 'label.parent-agent'
                                  }),
                                  required: !0,
                                  autoComplete: 'off',
                                  value:
                                    null !==
                                      (n =
                                        null === N ||
                                        void 0 === N ||
                                        null === (t = N.Agents) ||
                                        void 0 === t ||
                                        null === (d = t.parentAgent) ||
                                        void 0 === d
                                          ? void 0
                                          : d.username) && void 0 !== n
                                      ? n
                                      : 'No higher agent'
                                })
                              })
                            ]
                          }),
                          (0, b.jsx)(A.Z, {
                            sx: {
                              '&:last-child td, &:last-child th': { border: 0 }
                            },
                            children: (0, b.jsx)(W.Z, {
                              align: 'left',
                              colSpan: 2,
                              children: (0, b.jsx)(K, {
                                data: {
                                  apiKey:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.apiKey
                                }
                              })
                            })
                          })
                        ]
                      })
                    })
                  }),
                  (0, b.jsx)(E, { user: v }),
                  (0, b.jsx)(B, {
                    data: {
                      userId: null === v || void 0 === v ? void 0 : v.id,
                      accountNumber:
                        null === v || void 0 === v ? void 0 : v.accountNumber,
                      callbackUrl:
                        null === v || void 0 === v ? void 0 : v.callbackUrl,
                      apiCall: null === v || void 0 === v ? void 0 : v.apiCall
                    }
                  })
                ]
              })
            })
          });
        },
        L = function () {
          var l,
            e = (0, r.oj)({ refetchOnMountOrArgChange: !0 }).data,
            a = {
              id: null === e || void 0 === e ? void 0 : e.userId,
              name: null === e || void 0 === e ? void 0 : e.name,
              username: null === e || void 0 === e ? void 0 : e.username,
              currency: null === e || void 0 === e ? void 0 : e.currency,
              type: null === e || void 0 === e ? void 0 : e.type,
              accountNumber:
                null === e || void 0 === e ? void 0 : e.accountNumber,
              callbackUrl: null === e || void 0 === e ? void 0 : e.callbackUrl,
              apiCall: null === e || void 0 === e ? void 0 : e.apiCall,
              apiKey: null === e || void 0 === e ? void 0 : e.apiKey,
              subAgent: null === e || void 0 === e ? void 0 : e.subAgent,
              parentAgentId:
                null === e || void 0 === e ? void 0 : e.parentAgentId,
              balance: null === e || void 0 === e ? void 0 : e.balance,
              balanceAsAgent:
                null === e || void 0 === e ? void 0 : e.balanceAsAgent,
              avatar: '/static/images/avatars/4.jpg',
              jobTitle: null === e || void 0 === e ? void 0 : e.type,
              coverImg: '/static/images/placeholders/covers/5.jpg'
            };
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(i.ql, {
                children: (0, b.jsx)('title', {
                  children: 'User Details - Management'
                })
              }),
              (0, b.jsx)(t.Z, {
                sx: { mt: 3 },
                maxWidth: 'lg',
                children: (0, b.jsxs)(d.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: [
                    (0, b.jsx)(d.ZP, {
                      item: !0,
                      xs: 12,
                      md: 7,
                      children: (0, b.jsx)(F, { user: a })
                    }),
                    (0, b.jsx)(d.ZP, {
                      item: !0,
                      xs: 12,
                      md: 5,
                      children: (0, b.jsx)(f, {
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
              (0, b.jsx)(n.Z, {})
            ]
          });
        };
    }
  }
]);
//# sourceMappingURL=444.402755a5.chunk.js.map