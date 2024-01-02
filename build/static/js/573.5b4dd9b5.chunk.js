'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [573],
  {
    3573: function (n, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return Hn;
          }
        });
      var a = r(9439),
        s = r(2791),
        t = r(6907),
        i = r(6934),
        o = r(4554),
        l = r(7064),
        c = r(5818),
        d = r(3967),
        x = r(220),
        h = r(890),
        p = r(7639),
        j = r(3400),
        m = r(3974),
        Z = r(4721),
        y = r(6823),
        u = r(3721),
        g = r(493),
        f = r(5021),
        v = r(9900),
        b = r(1943),
        w = r(6268),
        P = r(5382),
        I = r(4739),
        k = r(395),
        C = r(1131),
        S = r(5165),
        T = r(2158),
        D = r(7094),
        M = r(8646),
        z = r(8034),
        W = r(6091),
        H = r(759),
        A = r(3834),
        B = r(184),
        R = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n        @media (min-width: '.concat(
            e.breakpoints.values.md,
            'px) {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n      }\n'
          );
        }),
        V = (0, i.ZP)(l.Z)(function (n) {
          var e = n.theme;
          return '\n        min-width: 36px;\n        color: '.concat(
            e.colors.primary.light,
            ';\n'
          );
        }),
        F = (0, i.ZP)(c.Z)(function (n) {
          var e = n.theme;
          return '\n        &.Mui-expanded {\n          min-height: 48px;\n        }\n\n        .MuiAccordionSummary-content.Mui-expanded {\n          margin: 12px 0;\n        }\n\n        .MuiSvgIcon-root {\n          transition: '
            .concat(
              e.transitions.create(['color']),
              ';\n        }\n\n        &.MuiButtonBase-root {\n\n          margin-bottom: '
            )
            .concat(
              e.spacing(0.5),
              ';\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n\n          &.Mui-expanded,\n          &:hover {\n            background: '
            )
            .concat(
              e.colors.alpha.black[10],
              ';\n\n            .MuiSvgIcon-root {\n              color: '
            )
            .concat(
              e.colors.primary.main,
              ';\n            }\n          }\n        }\n'
            );
        }),
        U = function () {
          var n = (0, d.Z)(),
            e = (0, s.useState)(!1),
            r = (0, a.Z)(e, 2),
            t = r[0],
            i = r[1],
            l = function () {
              i(!t);
            },
            c = (0, s.useState)('section1'),
            U = (0, a.Z)(c, 2),
            Y = U[0],
            N = U[1],
            X = function (n) {
              return function (e, r) {
                N(!!r && n);
              };
            };
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsxs)(R, {
                children: [
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, B.jsx)(x.Z, {
                        variant: 'rounded',
                        sx: { width: 48, height: 48 },
                        alt: 'Zain Baptista',
                        src: '/static/images/avatars/1.jpg'
                      }),
                      (0, B.jsxs)(o.Z, {
                        ml: 1,
                        children: [
                          (0, B.jsx)(h.Z, {
                            variant: 'h4',
                            children: 'Zain Baptista'
                          }),
                          (0, B.jsx)(h.Z, {
                            variant: 'subtitle1',
                            children: (0, b.Z)(
                              (0, w.Z)(new Date(), 8),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsxs)(o.Z, {
                    sx: { display: { xs: 'none', lg: 'flex' } },
                    children: [
                      (0, B.jsx)(p.Z, {
                        placement: 'bottom',
                        title: 'Start a voice call',
                        children: (0, B.jsx)(j.Z, {
                          color: 'primary',
                          children: (0, B.jsx)(P.Z, {})
                        })
                      }),
                      (0, B.jsx)(p.Z, {
                        placement: 'bottom',
                        title: 'Start a video call',
                        children: (0, B.jsx)(j.Z, {
                          color: 'primary',
                          children: (0, B.jsx)(I.Z, {})
                        })
                      }),
                      (0, B.jsx)(p.Z, {
                        placement: 'bottom',
                        title: 'Conversation information',
                        children: (0, B.jsx)(j.Z, {
                          color: 'primary',
                          onClick: l,
                          children: (0, B.jsx)(k.Z, {})
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsx)(m.ZP, {
                sx: { display: { xs: 'none', md: 'flex' } },
                variant: 'temporary',
                anchor: 'rtl' === n.direction ? 'left' : 'right',
                open: t,
                onClose: l,
                elevation: 9,
                children: (0, B.jsxs)(o.Z, {
                  sx: { minWidth: 360 },
                  p: 2,
                  children: [
                    (0, B.jsxs)(o.Z, {
                      sx: { textAlign: 'center' },
                      children: [
                        (0, B.jsx)(x.Z, {
                          sx: {
                            mx: 'auto',
                            my: 2,
                            width: n.spacing(12),
                            height: n.spacing(12)
                          },
                          variant: 'rounded',
                          alt: 'Zain Baptista',
                          src: '/static/images/avatars/1.jpg'
                        }),
                        (0, B.jsx)(h.Z, {
                          variant: 'h4',
                          children: 'Zain Baptista'
                        }),
                        (0, B.jsxs)(h.Z, {
                          variant: 'subtitle2',
                          children: [
                            'Active',
                            ' ',
                            (0, b.Z)((0, w.Z)(new Date(), 7), new Date(), {
                              addSuffix: !0
                            })
                          ]
                        })
                      ]
                    }),
                    (0, B.jsx)(Z.Z, { sx: { my: 3 } }),
                    (0, B.jsxs)(y.Z, {
                      expanded: 'section1' === Y,
                      onChange: X('section1'),
                      children: [
                        (0, B.jsx)(F, {
                          expandIcon: (0, B.jsx)(C.Z, {}),
                          children: (0, B.jsx)(h.Z, {
                            variant: 'h5',
                            children: 'Customize Chat'
                          })
                        }),
                        (0, B.jsx)(u.Z, {
                          sx: { p: 0 },
                          children: (0, B.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(S.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Search in Conversation',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(T.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Change Theme Styling',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(M.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Choose Default Emoji',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    (0, B.jsxs)(y.Z, {
                      expanded: 'section2' === Y,
                      onChange: X('section2'),
                      children: [
                        (0, B.jsx)(F, {
                          expandIcon: (0, B.jsx)(C.Z, {}),
                          children: (0, B.jsx)(h.Z, {
                            variant: 'h5',
                            children: 'Privacy & Support'
                          })
                        }),
                        (0, B.jsx)(u.Z, {
                          sx: { p: 0 },
                          children: (0, B.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(D.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Turn off notifications',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(z.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Ignore all messages',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(W.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'Block user',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(H.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: "Something's Wrong",
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary:
                                      'Report the conversation and provide feedback',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    (0, B.jsxs)(y.Z, {
                      expanded: 'section3' === Y,
                      onChange: X('section3'),
                      children: [
                        (0, B.jsx)(F, {
                          expandIcon: (0, B.jsx)(C.Z, {}),
                          children: (0, B.jsx)(h.Z, {
                            variant: 'h5',
                            children: 'Shared Files'
                          })
                        }),
                        (0, B.jsx)(u.Z, {
                          sx: { p: 0 },
                          children: (0, B.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(A.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'HolidayPictures.zip',
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary: 'You opened in the past year',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(A.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: '2021Screenshot.jpg',
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary: 'You edited this file yesterday',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              }),
                              (0, B.jsxs)(f.ZP, {
                                button: !0,
                                children: [
                                  (0, B.jsx)(V, {
                                    children: (0, B.jsx)(A.Z, {})
                                  }),
                                  (0, B.jsx)(v.Z, {
                                    primary: 'PresentationDeck.pdf',
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary: 'Never opened',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          });
        },
        Y = r(4834),
        N = r(6151),
        X = r(717),
        _ = r(7756),
        q = (0, i.ZP)(Y.ZP)(function (n) {
          var e = n.theme;
          return '\n    font-size: '
            .concat(e.typography.pxToRem(18), ';\n    padding: ')
            .concat(e.spacing(1), ';\n    width: 100%;\n');
        }),
        E = (0, i.ZP)('input')({ display: 'none' }),
        G = function () {
          var n = (0, d.Z)(),
            e = 'Catherine Pike',
            r = '/static/images/avatars/1.jpg';
          return (0, B.jsxs)(o.Z, {
            sx: {
              background: n.colors.alpha.white[50],
              display: 'flex',
              alignItems: 'center',
              p: 2
            },
            children: [
              (0, B.jsxs)(o.Z, {
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                children: [
                  (0, B.jsx)(x.Z, {
                    sx: { display: { xs: 'none', sm: 'flex' }, mr: 1 },
                    alt: e,
                    src: r
                  }),
                  (0, B.jsx)(q, {
                    autoFocus: !0,
                    placeholder: 'Write your message here...',
                    fullWidth: !0
                  })
                ]
              }),
              (0, B.jsxs)(o.Z, {
                children: [
                  (0, B.jsx)(p.Z, {
                    arrow: !0,
                    placement: 'top',
                    title: 'Choose an emoji',
                    children: (0, B.jsx)(j.Z, {
                      sx: { fontSize: n.typography.pxToRem(16) },
                      color: 'primary',
                      children: '\ud83d\ude00'
                    })
                  }),
                  (0, B.jsx)(E, {
                    accept: 'image/*',
                    id: 'messenger-upload-file',
                    type: 'file'
                  }),
                  (0, B.jsx)(p.Z, {
                    arrow: !0,
                    placement: 'top',
                    title: 'Attach a file',
                    children: (0, B.jsx)('label', {
                      htmlFor: 'messenger-upload-file',
                      children: (0, B.jsx)(j.Z, {
                        sx: { mx: 1 },
                        color: 'primary',
                        component: 'span',
                        children: (0, B.jsx)(X.Z, { fontSize: 'small' })
                      })
                    })
                  }),
                  (0, B.jsx)(N.Z, {
                    startIcon: (0, B.jsx)(_.Z, {}),
                    variant: 'contained',
                    children: 'Send'
                  })
                ]
              })
            ]
          });
        },
        K = r(4942),
        O = r(1413),
        $ = r(2065),
        J = r(6278),
        L = r(5523),
        Q = r(9955),
        nn = r(8550),
        en = r(3466),
        rn = r(9124),
        an = r(3896),
        sn = r(653),
        tn = r(9861),
        on = r(1974),
        ln = r(1947),
        cn = r(9394),
        dn = r(6804),
        xn = r(3504),
        hn = (0, i.ZP)(x.Z)(function (n) {
          var e = n.theme;
          return '\n          background-color: '
            .concat(e.colors.success.lighter, ';\n          color: ')
            .concat(e.colors.success.main, ';\n          width: ')
            .concat(e.spacing(8), ';\n          height: ')
            .concat(
              e.spacing(8),
              ';\n          margin-left: auto;\n          margin-right: auto;\n    '
            );
        }),
        pn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n          background-color: '
            .concat(
              (0, $.$n)(e.colors.alpha.black[10], 0.5),
              ';\n          margin: '
            )
            .concat(e.spacing(2), ' 0;\n          border-radius: ')
            .concat(e.general.borderRadius, ';\n          padding: ')
            .concat(e.spacing(2), ';\n    ');
        }),
        jn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n        padding: '.concat(e.spacing(2.5), ';\n  ');
        }),
        mn = (0, i.ZP)(J.Z)(function (n) {
          var e = n.theme;
          return '\n        &.MuiButtonBase-root {\n            margin: '.concat(
            e.spacing(1),
            ' 0;\n        }\n  '
          );
        }),
        Zn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n        .MuiTabs-indicator {\n            min-height: 4px;\n            height: 4px;\n            box-shadow: none;\n            border: 0;\n        }\n\n        .MuiTab-root {\n            &.MuiButtonBase-root {\n                padding: 0;\n                margin-right: '
            .concat(e.spacing(3), ';\n                font-size: ')
            .concat(e.typography.pxToRem(16), ';\n                color: ')
            .concat(
              e.colors.alpha.black[50],
              ';\n\n                .MuiTouchRipple-root {\n                    display: none;\n                }\n            }\n\n            &.Mui-selected:hover,\n            &.Mui-selected {\n                color: '
            )
            .concat(
              e.colors.alpha.black[100],
              ';\n            }\n        }\n  '
            );
        }),
        yn = function () {
          var n = 'Catherine Pike',
            e = '/static/images/avatars/1.jpg',
            r = 'Software Developer',
            t = (0, s.useState)({ invisible: !0 }),
            i = (0, a.Z)(t, 2),
            l = i[0],
            c = i[1],
            d = (0, s.useState)('all'),
            m = (0, a.Z)(d, 2),
            y = m[0],
            u = m[1];
          return (0, B.jsxs)(jn, {
            children: [
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                children: [
                  (0, B.jsx)(x.Z, { alt: n, src: e }),
                  (0, B.jsxs)(o.Z, {
                    sx: { ml: 1.5, flex: 1 },
                    children: [
                      (0, B.jsxs)(o.Z, {
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        children: [
                          (0, B.jsxs)(o.Z, {
                            children: [
                              (0, B.jsx)(h.Z, {
                                variant: 'h5',
                                noWrap: !0,
                                children: n
                              }),
                              (0, B.jsx)(h.Z, {
                                variant: 'subtitle1',
                                noWrap: !0,
                                children: r
                              })
                            ]
                          }),
                          (0, B.jsx)(j.Z, {
                            sx: { p: 1 },
                            size: 'small',
                            color: 'primary',
                            children: (0, B.jsx)(ln.Z, { fontSize: 'small' })
                          })
                        ]
                      }),
                      (0, B.jsx)(L.Z, {
                        control: (0, B.jsx)(Q.Z, {
                          checked: l.invisible,
                          onChange: function (n) {
                            c(
                              (0, O.Z)(
                                (0, O.Z)({}, l),
                                {},
                                (0, K.Z)({}, n.target.name, n.target.checked)
                              )
                            );
                          },
                          name: 'invisible',
                          color: 'primary'
                        }),
                        label: 'Invisible'
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsx)(nn.Z, {
                sx: { mt: 2, mb: 1 },
                size: 'small',
                fullWidth: !0,
                InputProps: {
                  startAdornment: (0, B.jsx)(en.Z, {
                    position: 'start',
                    children: (0, B.jsx)(S.Z, {})
                  })
                }
              }),
              (0, B.jsx)(h.Z, {
                sx: { mb: 1, mt: 2 },
                variant: 'h3',
                children: 'Chats'
              }),
              (0, B.jsx)(Zn, {
                children: (0, B.jsx)(rn.Z, {
                  onChange: function (n, e) {
                    u(e);
                  },
                  value: y,
                  variant: 'scrollable',
                  scrollButtons: 'auto',
                  textColor: 'primary',
                  indicatorColor: 'primary',
                  children: [
                    { value: 'all', label: 'All' },
                    { value: 'unread', label: 'Unread' },
                    { value: 'archived', label: 'Archived' }
                  ].map(function (n) {
                    return (0,
                    B.jsx)(an.Z, { label: n.label, value: n.value }, n.value);
                  })
                })
              }),
              (0, B.jsxs)(o.Z, {
                mt: 2,
                children: [
                  'all' === y &&
                    (0, B.jsxs)(g.Z, {
                      disablePadding: !0,
                      component: 'div',
                      children: [
                        (0, B.jsxs)(mn, {
                          selected: !0,
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/1.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Zain Baptista',
                              secondary:
                                'Hey there, how are you today? Is it ok if I call you?'
                            }),
                            (0, B.jsx)('label', {
                              children: (0, B.jsx)('b', { children: '2' })
                            })
                          ]
                        }),
                        (0, B.jsxs)(mn, {
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/2.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Kierra Herwitz',
                              secondary:
                                'Hi! Did you manage to send me those documents'
                            })
                          ]
                        }),
                        (0, B.jsxs)(mn, {
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/3.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Craig Vaccaro',
                              secondary:
                                "Ola, I still haven't received the program schedule"
                            })
                          ]
                        }),
                        (0, B.jsxs)(mn, {
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/4.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Adison Press',
                              secondary:
                                "I recently did some buying on Amazon and now I'm stuck"
                            }),
                            (0, B.jsx)('label', {
                              children: (0, B.jsx)('b', { children: '8' })
                            })
                          ]
                        })
                      ]
                    }),
                  'unread' === y &&
                    (0, B.jsxs)(g.Z, {
                      disablePadding: !0,
                      component: 'div',
                      children: [
                        (0, B.jsxs)(mn, {
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/1.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Zain Baptista',
                              secondary:
                                'Hey there, how are you today? Is it ok if I call you?'
                            }),
                            (0, B.jsx)('label', {
                              children: (0, B.jsx)('b', { children: '2' })
                            })
                          ]
                        }),
                        (0, B.jsxs)(mn, {
                          children: [
                            (0, B.jsx)(sn.Z, {
                              children: (0, B.jsx)(x.Z, {
                                src: '/static/images/avatars/4.jpg'
                              })
                            }),
                            (0, B.jsx)(v.Z, {
                              sx: { mr: 1 },
                              primaryTypographyProps: {
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: !0
                              },
                              secondaryTypographyProps: {
                                color: 'textSecondary',
                                noWrap: !0
                              },
                              primary: 'Adison Press',
                              secondary:
                                "I recently did some buying on Amazon and now I'm stuck"
                            }),
                            (0, B.jsx)('label', {
                              children: (0, B.jsx)('b', { children: '8' })
                            })
                          ]
                        })
                      ]
                    }),
                  'archived' === y &&
                    (0, B.jsxs)(o.Z, {
                      pb: 3,
                      children: [
                        (0, B.jsx)(Z.Z, { sx: { mb: 3 } }),
                        (0, B.jsx)(hn, { children: (0, B.jsx)(cn.Z, {}) }),
                        (0, B.jsx)(h.Z, {
                          sx: { mt: 2, textAlign: 'center' },
                          variant: 'subtitle2',
                          children: 'Hurray! There are no archived chats!'
                        }),
                        (0, B.jsx)(Z.Z, { sx: { mt: 3 } })
                      ]
                    })
                ]
              }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                pb: 1,
                mt: 4,
                alignItems: 'center',
                children: [
                  (0, B.jsx)(h.Z, {
                    sx: { mr: 1 },
                    variant: 'h3',
                    children: 'Meetings'
                  }),
                  (0, B.jsx)('label', {
                    children: (0, B.jsx)('b', { children: '2' })
                  })
                ]
              }),
              (0, B.jsxs)(pn, {
                children: [
                  (0, B.jsx)(h.Z, {
                    variant: 'h4',
                    children: 'Daily Design Meeting'
                  }),
                  (0, B.jsxs)(o.Z, {
                    py: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    children: [
                      (0, B.jsx)(dn.Z, {}),
                      (0, B.jsxs)(o.Z, {
                        pl: 1,
                        children: [
                          (0, B.jsx)(h.Z, {
                            variant: 'subtitle2',
                            sx: { lineHeight: 1 },
                            color: 'text.primary',
                            children: '10:00 - 11:30'
                          }),
                          (0, B.jsx)(h.Z, {
                            variant: 'subtitle1',
                            children: (0, b.Z)(
                              (0, w.Z)(new Date(), 12),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, B.jsxs)(tn.Z, {
                        children: [
                          (0, B.jsx)(p.Z, {
                            arrow: !0,
                            title: 'View profile for Remy Sharp',
                            children: (0, B.jsx)(x.Z, {
                              sx: { width: 28, height: 28 },
                              component: xn.rU,
                              to: '#',
                              alt: 'Remy Sharp',
                              src: '/static/images/avatars/1.jpg'
                            })
                          }),
                          (0, B.jsx)(p.Z, {
                            arrow: !0,
                            title: 'View profile for Travis Howard',
                            children: (0, B.jsx)(x.Z, {
                              sx: { width: 28, height: 28 },
                              component: xn.rU,
                              to: '#',
                              alt: 'Travis Howard',
                              src: '/static/images/avatars/2.jpg'
                            })
                          }),
                          (0, B.jsx)(p.Z, {
                            arrow: !0,
                            title: 'View profile for Craig Vaccaro',
                            children: (0, B.jsx)(x.Z, {
                              sx: { width: 28, height: 28 },
                              component: xn.rU,
                              to: '#',
                              alt: 'Craig Vaccaro',
                              src: '/static/images/avatars/3.jpg'
                            })
                          })
                        ]
                      }),
                      (0, B.jsx)(N.Z, {
                        variant: 'contained',
                        size: 'small',
                        children: 'Attend'
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsxs)(pn, {
                children: [
                  (0, B.jsx)(h.Z, {
                    variant: 'h4',
                    children: 'Investors Council Meeting'
                  }),
                  (0, B.jsxs)(o.Z, {
                    py: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    children: [
                      (0, B.jsx)(dn.Z, {}),
                      (0, B.jsxs)(o.Z, {
                        pl: 1,
                        children: [
                          (0, B.jsx)(h.Z, {
                            variant: 'subtitle2',
                            sx: { lineHeight: 1 },
                            color: 'text.primary',
                            children: '14:30 - 16:15'
                          }),
                          (0, B.jsx)(h.Z, {
                            variant: 'subtitle1',
                            children: (0, b.Z)(
                              (0, on.Z)(new Date(), 4),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, B.jsxs)(tn.Z, {
                        children: [
                          (0, B.jsx)(p.Z, {
                            arrow: !0,
                            title: 'View profile for Travis Howard',
                            children: (0, B.jsx)(x.Z, {
                              sx: { width: 28, height: 28 },
                              component: xn.rU,
                              to: '#',
                              alt: 'Travis Howard',
                              src: '/static/images/avatars/4.jpg'
                            })
                          }),
                          (0, B.jsx)(p.Z, {
                            arrow: !0,
                            title: 'View profile for Craig Vaccaro',
                            children: (0, B.jsx)(x.Z, {
                              sx: { width: 28, height: 28 },
                              component: xn.rU,
                              to: '#',
                              alt: 'Craig Vaccaro',
                              src: '/static/images/avatars/5.jpg'
                            })
                          })
                        ]
                      }),
                      (0, B.jsx)(N.Z, {
                        variant: 'contained',
                        size: 'small',
                        children: 'Attend'
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        un = r(7621),
        gn = r(946),
        fn = r(6753),
        vn = r(6890),
        bn = (0, i.ZP)(Z.Z)(function (n) {
          var e = n.theme;
          return '\n      .MuiDivider-wrapper {\n        border-radius: '
            .concat(
              e.general.borderRadiusSm,
              ';\n        text-transform: none;\n        background: '
            )
            .concat(e.palette.background.default, ';\n        font-size: ')
            .concat(e.typography.pxToRem(13), ';\n        color: ')
            .concat(e.colors.alpha.black[50], ';\n      }\n');
        }),
        wn = (0, i.ZP)(un.Z)(function (n) {
          var e = n.theme;
          return '\n      background: '
            .concat(e.colors.primary.main, ';\n      color: ')
            .concat(e.palette.primary.contrastText, ';\n      padding: ')
            .concat(e.spacing(2), ';\n      border-radius: ')
            .concat(
              e.general.borderRadiusXl,
              ';\n      border-top-right-radius: '
            )
            .concat(
              e.general.borderRadius,
              ';\n      max-width: 380px;\n      display: inline-flex;\n'
            );
        }),
        Pn = (0, i.ZP)(un.Z)(function (n) {
          var e = n.theme;
          return '\n      background: '
            .concat(e.colors.alpha.black[10], ';\n      color: ')
            .concat(e.colors.alpha.black[100], ';\n      padding: ')
            .concat(e.spacing(2), ';\n      border-radius: ')
            .concat(
              e.general.borderRadiusXl,
              ';\n      border-top-left-radius: '
            )
            .concat(
              e.general.borderRadius,
              ';\n      max-width: 380px;\n      display: inline-flex;\n'
            );
        }),
        In = function () {
          var n = 'Catherine Pike',
            e = '/static/images/avatars/1.jpg';
          return (0, B.jsxs)(o.Z, {
            p: 3,
            children: [
              (0, B.jsx)(bn, {
                children: (0, gn.Z)((0, fn.Z)(new Date(), 3), 'MMMM dd yyyy')
              }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                py: 3,
                children: [
                  (0, B.jsx)(x.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: 'Zain Baptista',
                    src: '/static/images/avatars/2.jpg'
                  }),
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    ml: 2,
                    children: [
                      (0, B.jsx)(Pn, {
                        children:
                          'Hi. Can you send me the missing invoices asap?'
                      }),
                      (0, B.jsxs)(h.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, B.jsx)(vn.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, b.Z)((0, on.Z)(new Date(), 115), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, B.jsx)(wn, {
                        children:
                          "Yes, I'll email them right now. I'll let you know once the remaining invoices are done."
                      }),
                      (0, B.jsxs)(h.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, B.jsx)(vn.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, b.Z)((0, on.Z)(new Date(), 125), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsx)(x.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: n,
                    src: e
                  })
                ]
              }),
              (0, B.jsx)(bn, {
                children: (0, gn.Z)((0, fn.Z)(new Date(), 5), 'MMMM dd yyyy')
              }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, B.jsx)(wn, { children: 'Hey! Are you there?' }),
                      (0, B.jsx)(wn, {
                        sx: { mt: 2 },
                        children: 'Heeeelloooo????'
                      }),
                      (0, B.jsxs)(h.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, B.jsx)(vn.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, b.Z)((0, on.Z)(new Date(), 60), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsx)(x.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: n,
                    src: e
                  })
                ]
              }),
              (0, B.jsx)(bn, { children: 'Today' }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                py: 3,
                children: [
                  (0, B.jsx)(x.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: 'Zain Baptista',
                    src: '/static/images/avatars/2.jpg'
                  }),
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    ml: 2,
                    children: [
                      (0, B.jsx)(Pn, { children: 'Hey there!' }),
                      (0, B.jsx)(Pn, {
                        sx: { mt: 1 },
                        children: 'How are you? Is it ok if I call you?'
                      }),
                      (0, B.jsxs)(h.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, B.jsx)(vn.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, b.Z)((0, w.Z)(new Date(), 6), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsxs)(o.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, B.jsxs)(o.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, B.jsx)(wn, {
                        children:
                          'Hello, I just got my Amazon order shipped and I\u2019m very happy about that.'
                      }),
                      (0, B.jsx)(wn, {
                        sx: { mt: 1 },
                        children: 'Can you confirm?'
                      }),
                      (0, B.jsxs)(h.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, B.jsx)(vn.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, b.Z)((0, w.Z)(new Date(), 8), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, B.jsx)(x.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: n,
                    src: e
                  })
                ]
              })
            ]
          });
        },
        kn = r(4649),
        Cn = r(5839),
        Sn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n       height: calc(100vh - '.concat(
            e.header.height,
            ');\n       display: flex;\n'
          );
        }),
        Tn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n        width: 300px;\n        background: '
            .concat(e.colors.alpha.white[100], ';\n        border-right: ')
            .concat(e.colors.alpha.black[10], ' solid 1px;\n');
        }),
        Dn = (0, i.ZP)(o.Z)(function () {
          return '\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n';
        }),
        Mn = (0, i.ZP)(o.Z)(function (n) {
          var e = n.theme;
          return '\n        background: '
            .concat(e.colors.alpha.white[100], ';\n        border-bottom: ')
            .concat(e.colors.alpha.black[10], ' solid 1px;\n        padding: ')
            .concat(e.spacing(2), ';\n        align-items: center;\n');
        }),
        zn = (0, i.ZP)(j.Z)(function (n) {
          var e = n.theme;
          return '\n  width: '
            .concat(e.spacing(4), ';\n  height: ')
            .concat(e.spacing(4), ';\n  background: ')
            .concat(e.colors.alpha.white[100], ';\n');
        }),
        Wn = (0, i.ZP)(m.ZP)(function () {
          return '\n    width: 340px;\n    flex-shrink: 0;\n\n  & > .MuiPaper-root {\n        width: 340px;\n        z-index: 3;\n  }\n';
        }),
        Hn = function () {
          var n = (0, d.Z)(),
            e = (0, s.useState)(!1),
            r = (0, a.Z)(e, 2),
            i = r[0],
            l = r[1],
            c = function () {
              l(!i);
            };
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(t.ql, {
                children: (0, B.jsx)('title', {
                  children: 'Messenger - Applications'
                })
              }),
              (0, B.jsxs)(Sn, {
                className: 'Mui-FixedWrapper',
                children: [
                  (0, B.jsx)(Wn, {
                    sx: { display: { lg: 'none', xs: 'inline-block' } },
                    variant: 'temporary',
                    anchor: 'rtl' === n.direction ? 'right' : 'left',
                    open: i,
                    onClose: c,
                    children: (0, B.jsx)(Cn.Z, { children: (0, B.jsx)(yn, {}) })
                  }),
                  (0, B.jsx)(Tn, {
                    sx: { display: { xs: 'none', lg: 'inline-block' } },
                    children: (0, B.jsx)(Cn.Z, { children: (0, B.jsx)(yn, {}) })
                  }),
                  (0, B.jsxs)(Dn, {
                    children: [
                      (0, B.jsxs)(Mn, {
                        sx: { display: { xs: 'flex', lg: 'inline-block' } },
                        children: [
                          (0, B.jsx)(zn, {
                            sx: { display: { lg: 'none', xs: 'flex' }, mr: 2 },
                            color: 'primary',
                            onClick: c,
                            size: 'small',
                            children: (0, B.jsx)(kn.Z, {})
                          }),
                          (0, B.jsx)(U, {})
                        ]
                      }),
                      (0, B.jsx)(o.Z, {
                        flex: 1,
                        children: (0, B.jsx)(Cn.Z, {
                          children: (0, B.jsx)(In, {})
                        })
                      }),
                      (0, B.jsx)(Z.Z, {}),
                      (0, B.jsx)(G, {})
                    ]
                  })
                ]
              })
            ]
          });
        };
    }
  }
]);
//# sourceMappingURL=573.5b4dd9b5.chunk.js.map
