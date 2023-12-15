'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [798],
  {
    173: function (e, r, n) {
      var t = n(6934),
        s = n(9164),
        i = n(4554),
        a = n(890),
        o = n(4349),
        c = n(184),
        l = (0, t.ZP)(s.Z)(function (e) {
          var r = e.theme;
          return '\n        margin-top: '.concat(r.spacing(4), ';\n');
        });
      r.Z = function () {
        return (0, c.jsx)(l, {
          className: 'footer-wrapper',
          children: (0, c.jsxs)(i.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, c.jsx)(i.Z, {
                children: (0, c.jsxs)(a.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, c.jsx)(o.Z, { id: 'footer.admin' })]
                })
              }),
              (0, c.jsx)(a.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    8418: function (e, r, n) {
      var t = n(6934),
        s = n(4554),
        i = n(9164),
        a = n(184),
        o = (0, t.ZP)(s.Z)(function (e) {
          var r = e.theme;
          return '\n        padding: '.concat(r.spacing(4), ';\n');
        });
      r.Z = function (e) {
        var r = e.children;
        return (0, a.jsx)(o, {
          className: 'MuiPageTitle-wrapper',
          children: (0, a.jsx)(i.Z, { maxWidth: 'lg', children: r })
        });
      };
    },
    1798: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return Ze;
          }
        });
      var t = n(9439),
        s = n(2791),
        i = n(6907),
        a = n(890),
        o = n(184),
        c = function () {
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(a.Z, {
                variant: 'h3',
                component: 'h3',
                gutterBottom: !0,
                children: 'User Settings'
              }),
              (0, o.jsxs)(a.Z, {
                variant: 'subtitle2',
                children: [
                  'Catherine Pike',
                  ', this could be your user settings panel.'
                ]
              })
            ]
          });
        },
        l = n(8418),
        d = n(9124),
        h = n(9164),
        x = n(1889),
        p = n(3896),
        Z = n(173),
        u = n(6934),
        m = n(7621),
        j = n(4554),
        g = n(6151),
        y = n(4721),
        v = n(7462),
        b = n(3366),
        f = n(8182),
        P = n(4419),
        w = n(1402),
        T = n(5878),
        C = n(1217);
      function k(e) {
        return (0, C.Z)('MuiCardContent', e);
      }
      (0, T.Z)('MuiCardContent', ['root']);
      var M = ['className', 'component'],
        A = (0, u.ZP)('div', {
          name: 'MuiCardContent',
          slot: 'Root',
          overridesResolver: function (e, r) {
            return r.root;
          }
        })(function () {
          return { padding: 16, '&:last-child': { paddingBottom: 24 } };
        }),
        H = s.forwardRef(function (e, r) {
          var n = (0, w.Z)({ props: e, name: 'MuiCardContent' }),
            t = n.className,
            s = n.component,
            i = void 0 === s ? 'div' : s,
            a = (0, b.Z)(n, M),
            c = (0, v.Z)({}, n, { component: i }),
            l = (function (e) {
              var r = e.classes;
              return (0, P.Z)({ root: ['root'] }, k, r);
            })(c);
          return (0,
          o.jsx)(A, (0, v.Z)({ as: i, className: (0, f.Z)(l.root, t), ownerState: c, ref: r }, a));
        }),
        S = n(1675),
        R = n(9906),
        B = function () {
          return (0, o.jsxs)(x.ZP, {
            container: !0,
            spacing: 3,
            children: [
              (0, o.jsx)(x.ZP, {
                item: !0,
                xs: 12,
                children: (0, o.jsxs)(m.Z, {
                  children: [
                    (0, o.jsxs)(j.Z, {
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      children: [
                        (0, o.jsxs)(j.Z, {
                          children: [
                            (0, o.jsx)(a.Z, {
                              variant: 'h4',
                              gutterBottom: !0,
                              children: 'Personal Details'
                            }),
                            (0, o.jsx)(a.Z, {
                              variant: 'subtitle2',
                              children:
                                'Manage informations related to your personal details'
                            })
                          ]
                        }),
                        (0, o.jsx)(g.Z, {
                          variant: 'text',
                          startIcon: (0, o.jsx)(S.Z, {}),
                          children: 'Edit'
                        })
                      ]
                    }),
                    (0, o.jsx)(y.Z, {}),
                    (0, o.jsx)(H, {
                      sx: { p: 4 },
                      children: (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: (0, o.jsxs)(x.ZP, {
                          container: !0,
                          spacing: 0,
                          children: [
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Name:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)('span', {
                                color: 'black',
                                children: (0, o.jsx)('b', {
                                  children: 'Craig Donin'
                                })
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Date of birth:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)('span', {
                                color: 'black',
                                children: (0, o.jsx)('b', {
                                  children: '15 March 1977'
                                })
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Address:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)(j.Z, {
                                sx: { maxWidth: { xs: 'auto', sm: 300 } },
                                children: (0, o.jsx)('span', {
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
              (0, o.jsx)(x.ZP, {
                item: !0,
                xs: 12,
                children: (0, o.jsxs)(m.Z, {
                  children: [
                    (0, o.jsxs)(j.Z, {
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      children: [
                        (0, o.jsxs)(j.Z, {
                          children: [
                            (0, o.jsx)(a.Z, {
                              variant: 'h4',
                              gutterBottom: !0,
                              children: 'Account Settings'
                            }),
                            (0, o.jsx)(a.Z, {
                              variant: 'subtitle2',
                              children: 'Manage details related to your account'
                            })
                          ]
                        }),
                        (0, o.jsx)(g.Z, {
                          variant: 'text',
                          startIcon: (0, o.jsx)(S.Z, {}),
                          children: 'Edit'
                        })
                      ]
                    }),
                    (0, o.jsx)(y.Z, {}),
                    (0, o.jsx)(H, {
                      sx: { p: 4 },
                      children: (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: (0, o.jsxs)(x.ZP, {
                          container: !0,
                          spacing: 0,
                          children: [
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Language:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)('span', {
                                color: 'black',
                                children: (0, o.jsx)('b', {
                                  children: 'English (US)'
                                })
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Timezone:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)('span', {
                                color: 'black',
                                children: (0, o.jsx)('b', {
                                  children: 'GMT +2'
                                })
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Account status:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsxs)('label', {
                                color: 'success',
                                children: [
                                  (0, o.jsx)(R.Z, { fontSize: 'small' }),
                                  (0, o.jsx)('b', { children: 'Active' })
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
              (0, o.jsx)(x.ZP, {
                item: !0,
                xs: 12,
                children: (0, o.jsxs)(m.Z, {
                  children: [
                    (0, o.jsxs)(j.Z, {
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      children: [
                        (0, o.jsxs)(j.Z, {
                          children: [
                            (0, o.jsx)(a.Z, {
                              variant: 'h4',
                              gutterBottom: !0,
                              children: 'Email Addresses'
                            }),
                            (0, o.jsx)(a.Z, {
                              variant: 'subtitle2',
                              children:
                                'Manage details related to your associated email addresses'
                            })
                          ]
                        }),
                        (0, o.jsx)(g.Z, {
                          variant: 'text',
                          startIcon: (0, o.jsx)(S.Z, {}),
                          children: 'Edit'
                        })
                      ]
                    }),
                    (0, o.jsx)(y.Z, {}),
                    (0, o.jsx)(H, {
                      sx: { p: 4 },
                      children: (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: (0, o.jsxs)(x.ZP, {
                          container: !0,
                          spacing: 0,
                          children: [
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Email ID:'
                              })
                            }),
                            (0, o.jsxs)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: [
                                (0, o.jsx)('span', {
                                  color: 'black',
                                  children: (0, o.jsx)('b', {
                                    children: 'example@demo.com'
                                  })
                                }),
                                (0, o.jsx)(j.Z, {
                                  pl: 1,
                                  component: 'span',
                                  children: (0, o.jsx)('label', {
                                    color: 'success',
                                    children: 'Primary'
                                  })
                                })
                              ]
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              md: 3,
                              textAlign: { sm: 'right' },
                              children: (0, o.jsx)(j.Z, {
                                pr: 3,
                                pb: 2,
                                children: 'Email ID:'
                              })
                            }),
                            (0, o.jsx)(x.ZP, {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              md: 9,
                              children: (0, o.jsx)('span', {
                                color: 'black',
                                children: (0, o.jsx)('b', {
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
        },
        N = n(4942),
        z = n(1413),
        D = n(493),
        I = n(5021),
        E = n(9900),
        L = n(9891),
        W = function () {
          var e = (0, s.useState)({
              checkedA: !0,
              checkedB: !1,
              checkedC: !0,
              checkedD: !1
            }),
            r = (0, t.Z)(e, 2),
            n = r[0],
            i = r[1],
            c = function (e) {
              i(
                (0, z.Z)(
                  (0, z.Z)({}, n),
                  {},
                  (0, N.Z)({}, e.target.name, e.target.checked)
                )
              );
            };
          return (0, o.jsxs)(x.ZP, {
            container: !0,
            spacing: 3,
            children: [
              (0, o.jsxs)(x.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(j.Z, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(a.Z, { variant: 'h3', children: 'Account' }),
                      (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children:
                          'Choose what notifications you want to receive'
                      })
                    ]
                  }),
                  (0, o.jsx)(m.Z, {
                    children: (0, o.jsxs)(D.Z, {
                      children: [
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(L.Z, {
                              color: 'primary',
                              checked: n.checkedA,
                              onChange: c,
                              name: 'checkedA'
                            })
                          ]
                        }),
                        (0, o.jsx)(y.Z, { component: 'li' }),
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(L.Z, {
                              color: 'primary',
                              checked: n.checkedB,
                              onChange: c,
                              name: 'checkedB'
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, o.jsxs)(x.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(j.Z, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(a.Z, { variant: 'h3', children: 'Orders' }),
                      (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children:
                          'Receive email notifications related to your orders activity'
                      })
                    ]
                  }),
                  (0, o.jsx)(m.Z, {
                    children: (0, o.jsxs)(D.Z, {
                      children: [
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(L.Z, {
                              color: 'primary',
                              checked: n.checkedC,
                              onChange: c,
                              name: 'checkedC'
                            })
                          ]
                        }),
                        (0, o.jsx)(y.Z, { component: 'li' }),
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(L.Z, {
                              color: 'primary',
                              checked: n.checkedD,
                              onChange: c,
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
        },
        F = n(220),
        U = n(3967),
        G = n(653),
        V = n(9585),
        _ = n(9281),
        O = n(9836),
        Y = n(1048),
        K = n(5855),
        q = n(3994),
        Q = n(3382),
        X = n(7639),
        J = n(3400),
        $ = n(8178),
        ee = n(8036),
        re = n(6753),
        ne = n(1974),
        te = n(9297),
        se = n(9040),
        ie = n(4522);
      function ae(e, r) {
        return (
          (0, ie.Z)(2, arguments),
          (function (e, r) {
            (0, ie.Z)(2, arguments);
            var n = 7 * (0, te.Z)(r);
            return (0, se.Z)(e, n);
          })(e, -(0, te.Z)(r))
        );
      }
      var oe = n(946),
        ce = n(4349),
        le = (0, u.ZP)(g.Z)(function (e) {
          var r = e.theme;
          return '\n     background: '
            .concat(r.colors.error.main, ';\n     color: ')
            .concat(
              r.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(r.colors.error.dark, ';\n     }\n    ');
        }),
        de = (0, u.ZP)(F.Z)(function (e) {
          var r = e.theme;
          return '\n    background: '
            .concat(r.colors.success.light, ';\n    width: ')
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        }),
        he = (0, u.ZP)(F.Z)(function (e) {
          var r = e.theme;
          return '\n    width: '
            .concat(r.spacing(5), ';\n    height: ')
            .concat(r.spacing(5), ';\n');
        }),
        xe = function () {
          var e = (0, U.Z)(),
            r = (0, s.useState)(2),
            n = (0, t.Z)(r, 2),
            i = n[0],
            c = n[1],
            l = (0, s.useState)(10),
            d = (0, t.Z)(l, 2),
            h = d[0],
            p = d[1],
            Z = [
              {
                id: 1,
                browser: ' Safari/537.36',
                ipaddress: '3.70.73.142',
                location: 'United States',
                date: (0, re.Z)(new Date(), 2).getTime()
              },
              {
                id: 2,
                browser: 'Chrome/36.0.1985.67',
                ipaddress: '138.13.136.179',
                location: 'China',
                date: (0, re.Z)(new Date(), 6).getTime()
              },
              {
                id: 3,
                browser: 'Googlebot/2.1',
                ipaddress: '119.229.170.253',
                location: 'China',
                date: (0, ne.Z)(new Date(), 15).getTime()
              },
              {
                id: 4,
                browser: 'AppleWebKit/535.1',
                ipaddress: '206.8.99.49',
                location: 'Philippines',
                date: (0, re.Z)(new Date(), 4).getTime()
              },
              {
                id: 5,
                browser: 'Mozilla/5.0',
                ipaddress: '235.40.59.85',
                location: 'China',
                date: ae(new Date(), 3).getTime()
              }
            ];
          return (0, o.jsxs)(x.ZP, {
            container: !0,
            spacing: 3,
            children: [
              (0, o.jsxs)(x.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(j.Z, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(a.Z, {
                        variant: 'h3',
                        children: 'Social Accounts'
                      }),
                      (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: 'Manage connected social accounts options'
                      })
                    ]
                  }),
                  (0, o.jsx)(m.Z, {
                    children: (0, o.jsx)(D.Z, {
                      children: (0, o.jsxs)(I.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(G.Z, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(he, {
                              src: '/static/images/logo/google.svg'
                            })
                          }),
                          (0, o.jsx)(E.Z, {
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
                          (0, o.jsx)(g.Z, {
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
              (0, o.jsx)(x.ZP, {
                item: !0,
                xs: 12,
                children: (0, o.jsx)(m.Z, {
                  children: (0, o.jsxs)(D.Z, {
                    children: [
                      (0, o.jsxs)(I.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(G.Z, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(de, {
                              children: (0, o.jsx)(R.Z, {})
                            })
                          }),
                          (0, o.jsx)(E.Z, {
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
                          (0, o.jsx)(le, {
                            size: 'large',
                            variant: 'contained',
                            children: 'Revoke access'
                          })
                        ]
                      }),
                      (0, o.jsx)(y.Z, { component: 'li' }),
                      (0, o.jsxs)(I.ZP, {
                        sx: { p: 3 },
                        children: [
                          (0, o.jsx)(G.Z, {
                            sx: { pr: 2 },
                            children: (0, o.jsx)(de, {
                              children: (0, o.jsx)(R.Z, {})
                            })
                          }),
                          (0, o.jsx)(E.Z, {
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
                          (0, o.jsx)(le, {
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
              (0, o.jsxs)(x.ZP, {
                item: !0,
                xs: 12,
                children: [
                  (0, o.jsxs)(j.Z, {
                    pb: 2,
                    children: [
                      (0, o.jsx)(a.Z, { variant: 'h3', children: 'Security' }),
                      (0, o.jsx)(a.Z, {
                        variant: 'subtitle2',
                        children: 'Change your security preferences below'
                      })
                    ]
                  }),
                  (0, o.jsx)(m.Z, {
                    children: (0, o.jsxs)(D.Z, {
                      children: [
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(g.Z, {
                              size: 'large',
                              variant: 'outlined',
                              children: 'Change password'
                            })
                          ]
                        }),
                        (0, o.jsx)(y.Z, { component: 'li' }),
                        (0, o.jsxs)(I.ZP, {
                          sx: { p: 3 },
                          children: [
                            (0, o.jsx)(E.Z, {
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
                            (0, o.jsx)(L.Z, { color: 'primary' })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, o.jsx)(x.ZP, {
                item: !0,
                xs: 12,
                children: (0, o.jsxs)(m.Z, {
                  children: [
                    (0, o.jsx)(V.Z, {
                      subheaderTypographyProps: {},
                      titleTypographyProps: {},
                      title: 'Access Logs',
                      subheader: 'Recent sign in activity logs'
                    }),
                    (0, o.jsx)(y.Z, {}),
                    (0, o.jsx)(_.Z, {
                      children: (0, o.jsxs)(O.Z, {
                        children: [
                          (0, o.jsx)(Y.Z, {
                            children: (0, o.jsxs)(K.Z, {
                              children: [
                                (0, o.jsx)(q.Z, { children: 'Browser' }),
                                (0, o.jsx)(q.Z, { children: 'IP Address' }),
                                (0, o.jsx)(q.Z, { children: 'Location' }),
                                (0, o.jsx)(q.Z, { children: 'Date/Time' }),
                                (0, o.jsx)(q.Z, {
                                  align: 'right',
                                  children: (0, o.jsx)(ce.Z, {
                                    id: 'label.actions'
                                  })
                                })
                              ]
                            })
                          }),
                          (0, o.jsx)(Q.Z, {
                            children: Z.map(function (r) {
                              return (0,
                              o.jsxs)(K.Z, { hover: !0, children: [(0, o.jsx)(q.Z, { children: r.browser }), (0, o.jsx)(q.Z, { children: r.ipaddress }), (0, o.jsx)(q.Z, { children: r.location }), (0, o.jsx)(q.Z, { children: (0, oe.Z)(r.date, 'dd MMMM, yyyy - h:mm:ss a') }), (0, o.jsx)(q.Z, { align: 'right', children: (0, o.jsx)(X.Z, { placement: 'top', title: 'Delete', arrow: !0, children: (0, o.jsx)(J.Z, { sx: { '&:hover': { background: e.colors.error.lighter }, color: e.palette.error.main }, color: 'inherit', size: 'small', children: (0, o.jsx)(ee.Z, { fontSize: 'small' }) }) }) })] }, r.id);
                            })
                          })
                        ]
                      })
                    }),
                    (0, o.jsx)(j.Z, {
                      p: 2,
                      children: (0, o.jsx)($.Z, {
                        component: 'div',
                        count: 100,
                        page: i,
                        onPageChange: function (e, r) {
                          c(r);
                        },
                        rowsPerPage: h,
                        onRowsPerPageChange: function (e) {
                          p(parseInt(e.target.value, 10)), c(0);
                        }
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        pe = (0, u.ZP)(d.Z)(function () {
          return '\n    .MuiTabs-scrollableX {\n      overflow-x: auto !important;\n    }\n';
        }),
        Ze = function () {
          var e = (0, s.useState)('edit_profile'),
            r = (0, t.Z)(e, 2),
            n = r[0],
            a = r[1];
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(i.ql, {
                children: (0, o.jsx)('title', {
                  children: 'User Settings - Applications'
                })
              }),
              (0, o.jsx)(l.Z, { children: (0, o.jsx)(c, {}) }),
              (0, o.jsx)(h.Z, {
                maxWidth: 'lg',
                children: (0, o.jsxs)(x.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: [
                    (0, o.jsx)(x.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, o.jsx)(pe, {
                        onChange: function (e, r) {
                          a(r);
                        },
                        value: n,
                        variant: 'scrollable',
                        scrollButtons: 'auto',
                        textColor: 'primary',
                        indicatorColor: 'primary',
                        children: [
                          { value: 'edit_profile', label: 'Edit Profile' },
                          { value: 'notifications', label: 'Notifications' },
                          { value: 'security', label: 'Passwords/Security' }
                        ].map(function (e) {
                          return (0,
                          o.jsx)(p.Z, { label: e.label, value: e.value }, e.value);
                        })
                      })
                    }),
                    (0, o.jsxs)(x.ZP, {
                      item: !0,
                      xs: 12,
                      children: [
                        'edit_profile' === n && (0, o.jsx)(B, {}),
                        'notifications' === n && (0, o.jsx)(W, {}),
                        'security' === n && (0, o.jsx)(xe, {})
                      ]
                    })
                  ]
                })
              }),
              (0, o.jsx)(Z.Z, {})
            ]
          });
        };
    },
    8036: function (e, r, n) {
      var t = n(4836);
      r.Z = void 0;
      var s = t(n(5649)),
        i = n(184),
        a = (0, s.default)(
          [
            (0, i.jsx)('path', { d: 'M8 9h8v10H8z', opacity: '.3' }, '0'),
            (0, i.jsx)(
              'path',
              {
                d: 'm15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z'
              },
              '1'
            )
          ],
          'DeleteTwoTone'
        );
      r.Z = a;
    },
    9906: function (e, r, n) {
      var t = n(4836);
      r.Z = void 0;
      var s = t(n(5649)),
        i = n(184),
        a = (0, s.default)(
          (0, i.jsx)('path', {
            d: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
          }),
          'DoneTwoTone'
        );
      r.Z = a;
    },
    1675: function (e, r, n) {
      var t = n(4836);
      r.Z = void 0;
      var s = t(n(5649)),
        i = n(184),
        a = (0, s.default)(
          [
            (0, i.jsx)(
              'path',
              { d: 'M5 18.08V19h.92l9.06-9.06-.92-.92z', opacity: '.3' },
              '0'
            ),
            (0, i.jsx)(
              'path',
              {
                d: 'M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z'
              },
              '1'
            )
          ],
          'EditTwoTone'
        );
      r.Z = a;
    },
    9585: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return f;
        }
      });
      var t = n(4942),
        s = n(3366),
        i = n(7462),
        a = n(2791),
        o = n(8182),
        c = n(4419),
        l = n(890),
        d = n(1402),
        h = n(6934),
        x = n(5878),
        p = n(1217);
      function Z(e) {
        return (0, p.Z)('MuiCardHeader', e);
      }
      var u = (0, x.Z)('MuiCardHeader', [
          'root',
          'avatar',
          'action',
          'content',
          'title',
          'subheader'
        ]),
        m = n(184),
        j = [
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
        g = (0, h.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Root',
          overridesResolver: function (e, r) {
            var n;
            return (0, i.Z)(
              ((n = {}),
              (0, t.Z)(n, '& .'.concat(u.title), r.title),
              (0, t.Z)(n, '& .'.concat(u.subheader), r.subheader),
              n),
              r.root
            );
          }
        })({ display: 'flex', alignItems: 'center', padding: 16 }),
        y = (0, h.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Avatar',
          overridesResolver: function (e, r) {
            return r.avatar;
          }
        })({ display: 'flex', flex: '0 0 auto', marginRight: 16 }),
        v = (0, h.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Action',
          overridesResolver: function (e, r) {
            return r.action;
          }
        })({
          flex: '0 0 auto',
          alignSelf: 'flex-start',
          marginTop: -4,
          marginRight: -8,
          marginBottom: -4
        }),
        b = (0, h.ZP)('div', {
          name: 'MuiCardHeader',
          slot: 'Content',
          overridesResolver: function (e, r) {
            return r.content;
          }
        })({ flex: '1 1 auto' }),
        f = a.forwardRef(function (e, r) {
          var n = (0, d.Z)({ props: e, name: 'MuiCardHeader' }),
            t = n.action,
            a = n.avatar,
            h = n.className,
            x = n.component,
            p = void 0 === x ? 'div' : x,
            u = n.disableTypography,
            f = void 0 !== u && u,
            P = n.subheader,
            w = n.subheaderTypographyProps,
            T = n.title,
            C = n.titleTypographyProps,
            k = (0, s.Z)(n, j),
            M = (0, i.Z)({}, n, { component: p, disableTypography: f }),
            A = (function (e) {
              var r = e.classes;
              return (0, c.Z)(
                {
                  root: ['root'],
                  avatar: ['avatar'],
                  action: ['action'],
                  content: ['content'],
                  title: ['title'],
                  subheader: ['subheader']
                },
                Z,
                r
              );
            })(M),
            H = T;
          null == H ||
            H.type === l.Z ||
            f ||
            (H = (0, m.jsx)(
              l.Z,
              (0, i.Z)(
                {
                  variant: a ? 'body2' : 'h5',
                  className: A.title,
                  component: 'span',
                  display: 'block'
                },
                C,
                { children: H }
              )
            ));
          var S = P;
          return (
            null == S ||
              S.type === l.Z ||
              f ||
              (S = (0, m.jsx)(
                l.Z,
                (0, i.Z)(
                  {
                    variant: a ? 'body2' : 'body1',
                    className: A.subheader,
                    color: 'text.secondary',
                    component: 'span',
                    display: 'block'
                  },
                  w,
                  { children: S }
                )
              )),
            (0, m.jsxs)(
              g,
              (0, i.Z)(
                {
                  className: (0, o.Z)(A.root, h),
                  as: p,
                  ref: r,
                  ownerState: M
                },
                k,
                {
                  children: [
                    a &&
                      (0, m.jsx)(y, {
                        className: A.avatar,
                        ownerState: M,
                        children: a
                      }),
                    (0, m.jsxs)(b, {
                      className: A.content,
                      ownerState: M,
                      children: [H, S]
                    }),
                    t &&
                      (0, m.jsx)(v, {
                        className: A.action,
                        ownerState: M,
                        children: t
                      })
                  ]
                }
              )
            )
          );
        });
    },
    1048: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return y;
        }
      });
      var t = n(7462),
        s = n(3366),
        i = n(2791),
        a = n(8182),
        o = n(4419),
        c = n(829),
        l = n(1402),
        d = n(6934),
        h = n(5878),
        x = n(1217);
      function p(e) {
        return (0, x.Z)('MuiTableHead', e);
      }
      (0, h.Z)('MuiTableHead', ['root']);
      var Z = n(184),
        u = ['className', 'component'],
        m = (0, d.ZP)('thead', {
          name: 'MuiTableHead',
          slot: 'Root',
          overridesResolver: function (e, r) {
            return r.root;
          }
        })({ display: 'table-header-group' }),
        j = { variant: 'head' },
        g = 'thead',
        y = i.forwardRef(function (e, r) {
          var n = (0, l.Z)({ props: e, name: 'MuiTableHead' }),
            i = n.className,
            d = n.component,
            h = void 0 === d ? g : d,
            x = (0, s.Z)(n, u),
            y = (0, t.Z)({}, n, { component: h }),
            v = (function (e) {
              var r = e.classes;
              return (0, o.Z)({ root: ['root'] }, p, r);
            })(y);
          return (0,
          Z.jsx)(c.Z.Provider, { value: j, children: (0, Z.jsx)(m, (0, t.Z)({ as: h, className: (0, a.Z)(v.root, i), ref: r, role: h === g ? null : 'rowgroup', ownerState: y }, x)) });
        });
    }
  }
]);
//# sourceMappingURL=798.94b23e92.chunk.js.map
