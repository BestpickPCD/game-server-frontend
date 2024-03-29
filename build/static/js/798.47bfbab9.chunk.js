'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [798],
  {
    10173: (e, r, s) => {
      s.d(r, { Z: () => d });
      var t = s(66934),
        n = s(89164),
        a = s(697),
        i = s(20890),
        o = s(4349),
        c = s(80184);
      const l = (0, t.ZP)(n.Z)((e) => {
          let { theme: r } = e;
          return '\n        margin-top: '.concat(r.spacing(4), ';\n');
        }),
        d = () =>
          (0, c.jsx)(l, {
            className: 'footer-wrapper',
            children: (0, c.jsxs)(a.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, c.jsx)(a.Z, {
                  children: (0, c.jsxs)(i.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, c.jsx)(o.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, c.jsx)(i.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    68418: (e, r, s) => {
      s.d(r, { Z: () => c });
      var t = s(66934),
        n = s(697),
        a = s(89164),
        i = s(80184);
      const o = (0, t.ZP)(n.Z)((e) => {
          let { theme: r } = e;
          return '\n        padding: '.concat(r.spacing(4), ';\n');
        }),
        c = (e) => {
          let { children: r } = e;
          return (0, i.jsx)(o, {
            className: 'MuiPageTitle-wrapper',
            children: (0, i.jsx)(a.Z, { maxWidth: 'lg', children: r })
          });
        };
    },
    81798: (e, r, s) => {
      s.r(r), s.d(r, { default: () => he });
      var t = s(72791),
        n = s(6907),
        a = s(20890),
        i = s(80184);
      const o = () =>
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.Z, {
              variant: 'h3',
              component: 'h3',
              gutterBottom: !0,
              children: 'User Settings'
            }),
            (0, i.jsxs)(a.Z, {
              variant: 'subtitle2',
              children: [
                'Catherine Pike',
                ', this could be your user settings panel.'
              ]
            })
          ]
        });
      var c = s(68418),
        l = s(39124),
        d = s(89164),
        h = s(61889),
        x = s(43896),
        p = s(10173),
        Z = s(66934),
        j = s(57621),
        m = s(697),
        g = s(94294),
        u = s(94721),
        y = s(87462),
        v = s(63366),
        b = s(59278),
        P = s(94419),
        f = s(31402),
        w = s(75878),
        T = s(21217);
      function C(e) {
        return (0, T.ZP)('MuiCardContent', e);
      }
      (0, w.Z)('MuiCardContent', ['root']);
      const k = ['className', 'component'],
        M = (0, Z.ZP)('div', {
          name: 'MuiCardContent',
          slot: 'Root',
          overridesResolver: (e, r) => r.root
        })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
        A = t.forwardRef(function (e, r) {
          const s = (0, f.Z)({ props: e, name: 'MuiCardContent' }),
            { className: t, component: n = 'div' } = s,
            a = (0, v.Z)(s, k),
            o = (0, y.Z)({}, s, { component: n }),
            c = ((e) => {
              const { classes: r } = e;
              return (0, P.Z)({ root: ['root'] }, C, r);
            })(o);
          return (0,
          i.jsx)(M, (0, y.Z)({ as: n, className: (0, b.Z)(c.root, t), ownerState: o, ref: r }, a));
        });
      var S = s(31675),
        H = s(69906);
      const B = () =>
        (0, i.jsxs)(h.ZP, {
          container: !0,
          spacing: 3,
          children: [
            (0, i.jsx)(h.ZP, {
              item: !0,
              xs: 12,
              children: (0, i.jsxs)(j.Z, {
                children: [
                  (0, i.jsxs)(m.Z, {
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, i.jsxs)(m.Z, {
                        children: [
                          (0, i.jsx)(a.Z, {
                            variant: 'h4',
                            gutterBottom: !0,
                            children: 'Personal Details'
                          }),
                          (0, i.jsx)(a.Z, {
                            variant: 'subtitle2',
                            children:
                              'Manage informations related to your personal details'
                          })
                        ]
                      }),
                      (0, i.jsx)(g.Z, {
                        variant: 'text',
                        startIcon: (0, i.jsx)(S.Z, {}),
                        children: 'Edit'
                      })
                    ]
                  }),
                  (0, i.jsx)(u.Z, {}),
                  (0, i.jsx)(A, {
                    sx: { p: 4 },
                    children: (0, i.jsx)(a.Z, {
                      variant: 'subtitle2',
                      children: (0, i.jsxs)(h.ZP, {
                        container: !0,
                        spacing: 0,
                        children: [
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Name:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)('span', {
                              color: 'black',
                              children: (0, i.jsx)('b', {
                                children: 'Craig Donin'
                              })
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Date of birth:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)('span', {
                              color: 'black',
                              children: (0, i.jsx)('b', {
                                children: '15 March 1977'
                              })
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Address:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)(m.Z, {
                              sx: { maxWidth: { xs: 'auto', sm: 300 } },
                              children: (0, i.jsx)('span', {
                                color: 'black',
                                children:
                                  '1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California, 93262'
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                ]
              })
            }),
            (0, i.jsx)(h.ZP, {
              item: !0,
              xs: 12,
              children: (0, i.jsxs)(j.Z, {
                children: [
                  (0, i.jsxs)(m.Z, {
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, i.jsxs)(m.Z, {
                        children: [
                          (0, i.jsx)(a.Z, {
                            variant: 'h4',
                            gutterBottom: !0,
                            children: 'Account Settings'
                          }),
                          (0, i.jsx)(a.Z, {
                            variant: 'subtitle2',
                            children: 'Manage details related to your account'
                          })
                        ]
                      }),
                      (0, i.jsx)(g.Z, {
                        variant: 'text',
                        startIcon: (0, i.jsx)(S.Z, {}),
                        children: 'Edit'
                      })
                    ]
                  }),
                  (0, i.jsx)(u.Z, {}),
                  (0, i.jsx)(A, {
                    sx: { p: 4 },
                    children: (0, i.jsx)(a.Z, {
                      variant: 'subtitle2',
                      children: (0, i.jsxs)(h.ZP, {
                        container: !0,
                        spacing: 0,
                        children: [
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Language:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)('span', {
                              color: 'black',
                              children: (0, i.jsx)('b', {
                                children: 'English (US)'
                              })
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Timezone:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)('span', {
                              color: 'black',
                              children: (0, i.jsx)('b', { children: 'GMT +2' })
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Account status:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsxs)('label', {
                              color: 'success',
                              children: [
                                (0, i.jsx)(H.Z, { fontSize: 'small' }),
                                (0, i.jsx)('b', { children: 'Active' })
                              ]
                            })
                          })
                        ]
                      })
                    })
                  })
                ]
              })
            }),
            (0, i.jsx)(h.ZP, {
              item: !0,
              xs: 12,
              children: (0, i.jsxs)(j.Z, {
                children: [
                  (0, i.jsxs)(m.Z, {
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, i.jsxs)(m.Z, {
                        children: [
                          (0, i.jsx)(a.Z, {
                            variant: 'h4',
                            gutterBottom: !0,
                            children: 'Email Addresses'
                          }),
                          (0, i.jsx)(a.Z, {
                            variant: 'subtitle2',
                            children:
                              'Manage details related to your associated email addresses'
                          })
                        ]
                      }),
                      (0, i.jsx)(g.Z, {
                        variant: 'text',
                        startIcon: (0, i.jsx)(S.Z, {}),
                        children: 'Edit'
                      })
                    ]
                  }),
                  (0, i.jsx)(u.Z, {}),
                  (0, i.jsx)(A, {
                    sx: { p: 4 },
                    children: (0, i.jsx)(a.Z, {
                      variant: 'subtitle2',
                      children: (0, i.jsxs)(h.ZP, {
                        container: !0,
                        spacing: 0,
                        children: [
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Email ID:'
                            })
                          }),
                          (0, i.jsxs)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: [
                              (0, i.jsx)('span', {
                                color: 'black',
                                children: (0, i.jsx)('b', {
                                  children: 'example@demo.com'
                                })
                              }),
                              (0, i.jsx)(m.Z, {
                                pl: 1,
                                component: 'span',
                                children: (0, i.jsx)('label', {
                                  color: 'success',
                                  children: 'Primary'
                                })
                              })
                            ]
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            textAlign: { sm: 'right' },
                            children: (0, i.jsx)(m.Z, {
                              pr: 3,
                              pb: 2,
                              children: 'Email ID:'
                            })
                          }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            sm: 8,
                            md: 9,
                            children: (0, i.jsx)('span', {
                              color: 'black',
                              children: (0, i.jsx)('b', {
                                children: 'demo@example.com'
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                ]
              })
            })
          ]
        });
      var R = s(90493),
        z = s(15021),
        N = s(49900),
        D = s(9955);
      const I = () => {
        const [e, r] = (0, t.useState)({
            checkedA: !0,
            checkedB: !1,
            checkedC: !0,
            checkedD: !1
          }),
          s = (s) => {
            r({ ...e, [s.target.name]: s.target.checked });
          };
        return (0, i.jsxs)(h.ZP, {
          container: !0,
          spacing: 3,
          children: [
            (0, i.jsxs)(h.ZP, {
              item: !0,
              xs: 12,
              children: [
                (0, i.jsxs)(m.Z, {
                  pb: 2,
                  children: [
                    (0, i.jsx)(a.Z, { variant: 'h3', children: 'Account' }),
                    (0, i.jsx)(a.Z, {
                      variant: 'subtitle2',
                      children: 'Choose what notifications you want to receive'
                    })
                  ]
                }),
                (0, i.jsx)(j.Z, {
                  children: (0, i.jsxs)(R.Z, {
                    children: [
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Widthdraw Activity',
                            secondary:
                              'Receive an email when a widthdrawal is made'
                          }),
                          (0, i.jsx)(D.Z, {
                            color: 'primary',
                            checked: e.checkedA,
                            onChange: s,
                            name: 'checkedA'
                          })
                        ]
                      }),
                      (0, i.jsx)(u.Z, { component: 'li' }),
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Weekly Report',
                            secondary:
                              'Receive account status weekly report in your inbox'
                          }),
                          (0, i.jsx)(D.Z, {
                            color: 'primary',
                            checked: e.checkedB,
                            onChange: s,
                            name: 'checkedB'
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            }),
            (0, i.jsxs)(h.ZP, {
              item: !0,
              xs: 12,
              children: [
                (0, i.jsxs)(m.Z, {
                  pb: 2,
                  children: [
                    (0, i.jsx)(a.Z, { variant: 'h3', children: 'Orders' }),
                    (0, i.jsx)(a.Z, {
                      variant: 'subtitle2',
                      children:
                        'Receive email notifications related to your orders activity'
                    })
                  ]
                }),
                (0, i.jsx)(j.Z, {
                  children: (0, i.jsxs)(R.Z, {
                    children: [
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Failed Payment',
                            secondary: 'Get a message when a payment fails'
                          }),
                          (0, i.jsx)(D.Z, {
                            color: 'primary',
                            checked: e.checkedC,
                            onChange: s,
                            name: 'checkedC'
                          })
                        ]
                      }),
                      (0, i.jsx)(u.Z, { component: 'li' }),
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Order Status Update',
                            secondary:
                              'Whenever an order is updated, get a notification on your phone'
                          }),
                          (0, i.jsx)(D.Z, {
                            color: 'primary',
                            checked: e.checkedD,
                            onChange: s,
                            name: 'checkedD'
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        });
      };
      var E = s(60220),
        L = s(13967),
        W = s(20653),
        F = s(9585),
        U = s(39281),
        G = s(79836),
        V = s(91048),
        _ = s(35855),
        O = s(53994),
        Y = s(53382),
        K = s(97639),
        q = s(13400),
        Q = s(63033),
        X = s(68036),
        J = s(76753),
        $ = s(41974),
        ee = s(29297),
        re = s(39040),
        se = s(4522);
      function te(e, r) {
        return (
          (0, se.Z)(2, arguments),
          (function (e, r) {
            (0, se.Z)(2, arguments);
            var s = 7 * (0, ee.Z)(r);
            return (0, re.Z)(e, s);
          })(e, -(0, ee.Z)(r))
        );
      }
      var ne = s(80946),
        ae = s(4349);
      const ie = (0, Z.ZP)(g.Z)((e) => {
          let { theme: r } = e;
          return '\n     background: '
            .concat(r.colors.error.main, ';\n     color: ')
            .concat(
              r.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(r.colors.error.dark, ';\n     }\n    ');
        }),
        oe = (0, Z.ZP)(E.Z)((e) => {
          let { theme: r } = e;
          return '\n    background: '
            .concat(r.colors.success.light, ';\n    width: ')
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        }),
        ce = (0, Z.ZP)(E.Z)((e) => {
          let { theme: r } = e;
          return '\n    width: '
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        }),
        le = () => {
          const e = (0, L.Z)(),
            [r, s] = (0, t.useState)(2),
            [n, o] = (0, t.useState)(10),
            c = [
              {
                id: 1,
                browser: ' Safari/537.36',
                ipaddress: '3.70.73.142',
                location: 'United States',
                date: (0, J.Z)(new Date(), 2).getTime()
              },
              {
                id: 2,
                browser: 'Chrome/36.0.1985.67',
                ipaddress: '138.13.136.179',
                location: 'China',
                date: (0, J.Z)(new Date(), 6).getTime()
              },
              {
                id: 3,
                browser: 'Googlebot/2.1',
                ipaddress: '119.229.170.253',
                location: 'China',
                date: (0, $.Z)(new Date(), 15).getTime()
              },
              {
                id: 4,
                browser: 'AppleWebKit/535.1',
                ipaddress: '206.8.99.49',
                location: 'Philippines',
                date: (0, J.Z)(new Date(), 4).getTime()
              },
              {
                id: 5,
                browser: 'Mozilla/5.0',
                ipaddress: '235.40.59.85',
                location: 'China',
                date: te(new Date(), 3).getTime()
              }
            ];
          return (0, i.jsxs)(h.ZP, {
            container: !0,
            spacing: 3,
            children: [
              (0, i.jsxs)(h.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, i.jsxs)(m.Z, {
                    pb: 2,
                    children: [
                      (0, i.jsx)(a.Z, {
                        variant: 'h3',
                        children: 'Social Accounts'
                      }),
                      (0, i.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: 'Manage connected social accounts options'
                      })
                    ]
                  }),
                  (0, i.jsx)(j.Z, {
                    children: (0, i.jsx)(R.Z, {
                      children: (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(W.Z, {
                            sx: { pr: 2 },
                            children: (0, i.jsx)(ce, {
                              src: '/static/images/logo/google.svg'
                            })
                          }),
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Google',
                            secondary:
                              'A Google account hasn\u2019t been yet added to your account'
                          }),
                          (0, i.jsx)(g.Z, {
                            color: 'secondary',
                            size: 'large',
                            variant: 'contained',
                            children: 'Connect'
                          })
                        ]
                      })
                    })
                  })
                ]
              }),
              (0, i.jsx)(h.ZP, {
                item: !0,
                xs: 12,
                children: (0, i.jsx)(j.Z, {
                  children: (0, i.jsxs)(R.Z, {
                    children: [
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(W.Z, {
                            sx: { pr: 2 },
                            children: (0, i.jsx)(oe, {
                              children: (0, i.jsx)(H.Z, {})
                            })
                          }),
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Facebook',
                            secondary:
                              'Your Facebook account has been successfully connected'
                          }),
                          (0, i.jsx)(ie, {
                            size: 'large',
                            variant: 'contained',
                            children: 'Revoke access'
                          })
                        ]
                      }),
                      (0, i.jsx)(u.Z, { component: 'li' }),
                      (0, i.jsxs)(z.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, i.jsx)(W.Z, {
                            sx: { pr: 2 },
                            children: (0, i.jsx)(oe, {
                              children: (0, i.jsx)(H.Z, {})
                            })
                          }),
                          (0, i.jsx)(N.Z, {
                            primaryTypographyProps: {
                              variant: 'h5',
                              gutterBottom: !0
                            },
                            secondaryTypographyProps: {
                              variant: 'subtitle2',
                              lineHeight: 1
                            },
                            primary: 'Twitter',
                            secondary:
                              'Your Twitter account was last syncronized 6 days ago'
                          }),
                          (0, i.jsx)(ie, {
                            size: 'large',
                            variant: 'contained',
                            children: 'Revoke access'
                          })
                        ]
                      })
                    ]
                  })
                })
              }),
              (0, i.jsxs)(h.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, i.jsxs)(m.Z, {
                    pb: 2,
                    children: [
                      (0, i.jsx)(a.Z, { variant: 'h3', children: 'Security' }),
                      (0, i.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: 'Change your security preferences below'
                      })
                    ]
                  }),
                  (0, i.jsx)(j.Z, {
                    children: (0, i.jsxs)(R.Z, {
                      children: [
                        (0, i.jsxs)(z.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, i.jsx)(N.Z, {
                              primaryTypographyProps: {
                                variant: 'h5',
                                gutterBottom: !0
                              },
                              secondaryTypographyProps: {
                                variant: 'subtitle2',
                                lineHeight: 1
                              },
                              primary: 'Change Password',
                              secondary: 'You can change your password here'
                            }),
                            (0, i.jsx)(g.Z, {
                              size: 'large',
                              variant: 'outlined',
                              children: 'Change password'
                            })
                          ]
                        }),
                        (0, i.jsx)(u.Z, { component: 'li' }),
                        (0, i.jsxs)(z.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, i.jsx)(N.Z, {
                              primaryTypographyProps: {
                                variant: 'h5',
                                gutterBottom: !0
                              },
                              secondaryTypographyProps: {
                                variant: 'subtitle2',
                                lineHeight: 1
                              },
                              primary: 'Two-Factor Authentication',
                              secondary:
                                'Enable PIN verification for all sign in attempts'
                            }),
                            (0, i.jsx)(D.Z, { color: 'primary' })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, i.jsx)(h.ZP, {
                item: !0,
                xs: 12,
                children: (0, i.jsxs)(j.Z, {
                  children: [
                    (0, i.jsx)(F.Z, {
                      subheaderTypographyProps: {},
                      titleTypographyProps: {},
                      title: 'Access Logs',
                      subheader: 'Recent sign in activity logs'
                    }),
                    (0, i.jsx)(u.Z, {}),
                    (0, i.jsx)(U.Z, {
                      children: (0, i.jsxs)(G.Z, {
                        children: [
                          (0, i.jsx)(V.Z, {
                            children: (0, i.jsxs)(_.Z, {
                              children: [
                                (0, i.jsx)(O.Z, { children: 'Browser' }),
                                (0, i.jsx)(O.Z, { children: 'IP Address' }),
                                (0, i.jsx)(O.Z, { children: 'Location' }),
                                (0, i.jsx)(O.Z, { children: 'Date/Time' }),
                                (0, i.jsx)(O.Z, {
                                  align: 'right',
                                  children: (0, i.jsx)(ae.Z, {
                                    id: 'label.actions'
                                  })
                                })
                              ]
                            })
                          }),
                          (0, i.jsx)(Y.Z, {
                            children: c.map((r) =>
                              (0, i.jsxs)(
                                _.Z,
                                {
                                  hover: !0,
                                  children: [
                                    (0, i.jsx)(O.Z, { children: r.browser }),
                                    (0, i.jsx)(O.Z, { children: r.ipaddress }),
                                    (0, i.jsx)(O.Z, { children: r.location }),
                                    (0, i.jsx)(O.Z, {
                                      children: (0, ne.Z)(
                                        r.date,
                                        'dd MMMM, yyyy - h:mm:ss a'
                                      )
                                    }),
                                    (0, i.jsx)(O.Z, {
                                      align: 'right',
                                      children: (0, i.jsx)(K.Z, {
                                        placement: 'top',
                                        title: 'Delete',
                                        arrow: !0,
                                        children: (0, i.jsx)(q.Z, {
                                          sx: {
                                            '&:hover': {
                                              background: e.colors.error.lighter
                                            },
                                            color: e.palette.error.main
                                          },
                                          color: 'inherit',
                                          size: 'small',
                                          children: (0, i.jsx)(X.Z, {
                                            fontSize: 'small'
                                          })
                                        })
                                      })
                                    })
                                  ]
                                },
                                r.id
                              )
                            )
                          })
                        ]
                      })
                    }),
                    (0, i.jsx)(m.Z, {
                      p: 2,
                      children: (0, i.jsx)(Q.Z, {
                        component: 'div',
                        count: 100,
                        page: r,
                        onPageChange: (e, r) => {
                          s(r);
                        },
                        rowsPerPage: n,
                        onRowsPerPageChange: (e) => {
                          o(parseInt(e.target.value, 10)), s(0);
                        }
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        de = (0, Z.ZP)(l.Z)(
          () =>
            '\n    .MuiTabs-scrollableX {\n      overflow-x: auto !important;\n    }\n'
        ),
        he = () => {
          const [e, r] = (0, t.useState)('edit_profile');
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.ql, {
                children: (0, i.jsx)('title', {
                  children: 'User Settings - Applications'
                })
              }),
              (0, i.jsx)(c.Z, { children: (0, i.jsx)(o, {}) }),
              (0, i.jsx)(d.Z, {
                maxWidth: 'lg',
                children: (0, i.jsxs)(h.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: [
                    (0, i.jsx)(h.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, i.jsx)(de, {
                        onChange: (e, s) => {
                          r(s);
                        },
                        value: e,
                        variant: 'scrollable',
                        scrollButtons: 'auto',
                        textColor: 'primary',
                        indicatorColor: 'primary',
                        children: [
                          { value: 'edit_profile', label: 'Edit Profile' },
                          { value: 'notifications', label: 'Notifications' },
                          { value: 'security', label: 'Passwords/Security' }
                        ].map((e) =>
                          (0, i.jsx)(
                            x.Z,
                            { label: e.label, value: e.value },
                            e.value
                          )
                        )
                      })
                    }),
                    (0, i.jsxs)(h.ZP, {
                      item: !0,
                      xs: 12,
                      children: [
                        'edit_profile' === e && (0, i.jsx)(B, {}),
                        'notifications' === e && (0, i.jsx)(I, {}),
                        'security' === e && (0, i.jsx)(le, {})
                      ]
                    })
                  ]
                })
              }),
              (0, i.jsx)(p.Z, {})
            ]
          });
        };
    },
    68036: (e, r, s) => {
      var t = s(64836);
      r.Z = void 0;
      var n = t(s(45649)),
        a = s(80184),
        i = (0, n.default)(
          [
            (0, a.jsx)('path', { d: 'M8 9h8v10H8z', opacity: '.3' }, '0'),
            (0, a.jsx)(
              'path',
              {
                d: 'm15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z'
              },
              '1'
            )
          ],
          'DeleteTwoTone'
        );
      r.Z = i;
    },
    69906: (e, r, s) => {
      var t = s(64836);
      r.Z = void 0;
      var n = t(s(45649)),
        a = s(80184),
        i = (0, n.default)(
          (0, a.jsx)('path', {
            d: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
          }),
          'DoneTwoTone'
        );
      r.Z = i;
    },
    31675: (e, r, s) => {
      var t = s(64836);
      r.Z = void 0;
      var n = t(s(45649)),
        a = s(80184),
        i = (0, n.default)(
          [
            (0, a.jsx)(
              'path',
              { d: 'M5 18.08V19h.92l9.06-9.06-.92-.92z', opacity: '.3' },
              '0'
            ),
            (0, a.jsx)(
              'path',
              {
                d: 'M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z'
              },
              '1'
            )
          ],
          'EditTwoTone'
        );
      r.Z = i;
    },
    9585: (e, r, s) => {
      s.d(r, { Z: () => b });
      var t = s(63366),
        n = s(87462),
        a = s(72791),
        i = s(59278),
        o = s(94419),
        c = s(20890),
        l = s(31402),
        d = s(66934),
        h = s(75878),
        x = s(21217);
      function p(e) {
        return (0, x.ZP)('MuiCardHeader', e);
      }
      const Z = (0, h.Z)('MuiCardHeader', [
        'root',
        'avatar',
        'action',
        'content',
        'title',
        'subheader'
      ]);
      var j = s(80184);
      const m = [
          'action',
          'avatar',
          'className',
          'component',
          'disableTypography',
          'subheader',
          'subheaderTypographyProps',
          'title',
          'titleTypographyProps'
        ],
        g = (0, d.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Root',
          overridesResolver: (e, r) =>
            (0, n.Z)(
              {
                ['& .'.concat(Z.title)]: r.title,
                ['& .'.concat(Z.subheader)]: r.subheader
              },
              r.root
            )
        })({ display: 'flex', alignItems: 'center', padding: 16 }),
        u = (0, d.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Avatar',
          overridesResolver: (e, r) => r.avatar
        })({ display: 'flex', flex: '0 0 auto', marginRight: 16 }),
        y = (0, d.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Action',
          overridesResolver: (e, r) => r.action
        })({
          flex: '0 0 auto',
          alignSelf: 'flex-start',
          marginTop: -4,
          marginRight: -8,
          marginBottom: -4
        }),
        v = (0, d.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Content',
          overridesResolver: (e, r) => r.content
        })({ flex: '1 1 auto' }),
        b = a.forwardRef(function (e, r) {
          const s = (0, l.Z)({ props: e, name: 'MuiCardHeader' }),
            {
              action: a,
              avatar: d,
              className: h,
              component: x = 'div',
              disableTypography: Z = !1,
              subheader: b,
              subheaderTypographyProps: P,
              title: f,
              titleTypographyProps: w
            } = s,
            T = (0, t.Z)(s, m),
            C = (0, n.Z)({}, s, { component: x, disableTypography: Z }),
            k = ((e) => {
              const { classes: r } = e;
              return (0, o.Z)(
                {
                  root: ['root'],
                  avatar: ['avatar'],
                  action: ['action'],
                  content: ['content'],
                  title: ['title'],
                  subheader: ['subheader']
                },
                p,
                r
              );
            })(C);
          let M = f;
          null == M ||
            M.type === c.Z ||
            Z ||
            (M = (0, j.jsx)(
              c.Z,
              (0, n.Z)(
                {
                  variant: d ? 'body2' : 'h5',
                  className: k.title,
                  component: 'span',
                  display: 'block'
                },
                w,
                { children: M }
              )
            ));
          let A = b;
          return (
            null == A ||
              A.type === c.Z ||
              Z ||
              (A = (0, j.jsx)(
                c.Z,
                (0, n.Z)(
                  {
                    variant: d ? 'body2' : 'body1',
                    className: k.subheader,
                    color: 'text.secondary',
                    component: 'span',
                    display: 'block'
                  },
                  P,
                  { children: A }
                )
              )),
            (0, j.jsxs)(
              g,
              (0, n.Z)(
                {
                  className: (0, i.Z)(k.root, h),
                  as: x,
                  ref: r,
                  ownerState: C
                },
                T,
                {
                  children: [
                    d &&
                      (0, j.jsx)(u, {
                        className: k.avatar,
                        ownerState: C,
                        children: d
                      }),
                    (0, j.jsxs)(v, {
                      className: k.content,
                      ownerState: C,
                      children: [M, A]
                    }),
                    a &&
                      (0, j.jsx)(y, {
                        className: k.action,
                        ownerState: C,
                        children: a
                      })
                  ]
                }
              )
            )
          );
        });
    }
  }
]);
//# sourceMappingURL=798.47bfbab9.chunk.js.map
