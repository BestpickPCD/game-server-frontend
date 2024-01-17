'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [573],
  {
    3573: (e, n, r) => {
      r.r(n), r.d(n, { default: () => De });
      var a = r(2791),
        s = r(6907),
        t = r(6934),
        i = r(697),
        l = r(7064),
        o = r(4970),
        c = r(3967),
        d = r(220),
        x = r(890),
        h = r(7639),
        p = r(3400),
        j = r(3974),
        m = r(4721),
        Z = r(1473),
        y = r(3721),
        g = r(493),
        u = r(5021),
        f = r(9900),
        v = r(1943),
        b = r(6268),
        w = r(5382),
        P = r(4739),
        I = r(395),
        k = r(1131),
        C = r(5165),
        S = r(2158),
        T = r(7094),
        D = r(8646),
        M = r(8034),
        z = r(6091),
        W = r(759),
        H = r(3834),
        A = r(184);
      const B = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n        @media (min-width: '.concat(
            n.breakpoints.values.md,
            'px) {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n      }\n'
          );
        }),
        R = (0, t.ZP)(l.Z)((e) => {
          let { theme: n } = e;
          return '\n        min-width: 36px;\n        color: '.concat(
            n.colors.primary.light,
            ';\n'
          );
        }),
        V = (0, t.ZP)(o.Z)((e) => {
          let { theme: n } = e;
          return '\n        &.Mui-expanded {\n          min-height: 48px;\n        }\n\n        .MuiAccordionSummary-content.Mui-expanded {\n          margin: 12px 0;\n        }\n\n        .MuiSvgIcon-root {\n          transition: '
            .concat(
              n.transitions.create(['color']),
              ';\n        }\n\n        &.MuiButtonBase-root {\n\n          margin-bottom: '
            )
            .concat(
              n.spacing(0.5),
              ';\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n\n          &.Mui-expanded,\n          &:hover {\n            background: '
            )
            .concat(
              n.colors.alpha.black[10],
              ';\n\n            .MuiSvgIcon-root {\n              color: '
            )
            .concat(
              n.colors.primary.main,
              ';\n            }\n          }\n        }\n'
            );
        }),
        F = () => {
          const e = (0, c.Z)(),
            [n, r] = (0, a.useState)(!1),
            s = () => {
              r(!n);
            },
            [t, l] = (0, a.useState)('section1'),
            o = (e) => (n, r) => {
              l(!!r && e);
            };
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsxs)(B, {
                children: [
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, A.jsx)(d.Z, {
                        variant: 'rounded',
                        sx: { width: 48, height: 48 },
                        alt: 'Zain Baptista',
                        src: '/static/images/avatars/1.jpg'
                      }),
                      (0, A.jsxs)(i.Z, {
                        ml: 1,
                        children: [
                          (0, A.jsx)(x.Z, {
                            variant: 'h4',
                            children: 'Zain Baptista'
                          }),
                          (0, A.jsx)(x.Z, {
                            variant: 'subtitle1',
                            children: (0, v.Z)(
                              (0, b.Z)(new Date(), 8),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsxs)(i.Z, {
                    sx: { display: { xs: 'none', lg: 'flex' } },
                    children: [
                      (0, A.jsx)(h.Z, {
                        placement: 'bottom',
                        title: 'Start a voice call',
                        children: (0, A.jsx)(p.Z, {
                          color: 'primary',
                          children: (0, A.jsx)(w.Z, {})
                        })
                      }),
                      (0, A.jsx)(h.Z, {
                        placement: 'bottom',
                        title: 'Start a video call',
                        children: (0, A.jsx)(p.Z, {
                          color: 'primary',
                          children: (0, A.jsx)(P.Z, {})
                        })
                      }),
                      (0, A.jsx)(h.Z, {
                        placement: 'bottom',
                        title: 'Conversation information',
                        children: (0, A.jsx)(p.Z, {
                          color: 'primary',
                          onClick: s,
                          children: (0, A.jsx)(I.Z, {})
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, A.jsx)(j.ZP, {
                sx: { display: { xs: 'none', md: 'flex' } },
                variant: 'temporary',
                anchor: 'rtl' === e.direction ? 'left' : 'right',
                open: n,
                onClose: s,
                elevation: 9,
                children: (0, A.jsxs)(i.Z, {
                  sx: { minWidth: 360 },
                  p: 2,
                  children: [
                    (0, A.jsxs)(i.Z, {
                      sx: { textAlign: 'center' },
                      children: [
                        (0, A.jsx)(d.Z, {
                          sx: {
                            mx: 'auto',
                            my: 2,
                            width: e.spacing(12),
                            height: e.spacing(12)
                          },
                          variant: 'rounded',
                          alt: 'Zain Baptista',
                          src: '/static/images/avatars/1.jpg'
                        }),
                        (0, A.jsx)(x.Z, {
                          variant: 'h4',
                          children: 'Zain Baptista'
                        }),
                        (0, A.jsxs)(x.Z, {
                          variant: 'subtitle2',
                          children: [
                            'Active',
                            ' ',
                            (0, v.Z)((0, b.Z)(new Date(), 7), new Date(), {
                              addSuffix: !0
                            })
                          ]
                        })
                      ]
                    }),
                    (0, A.jsx)(m.Z, { sx: { my: 3 } }),
                    (0, A.jsxs)(Z.Z, {
                      expanded: 'section1' === t,
                      onChange: o('section1'),
                      children: [
                        (0, A.jsx)(V, {
                          expandIcon: (0, A.jsx)(k.Z, {}),
                          children: (0, A.jsx)(x.Z, {
                            variant: 'h5',
                            children: 'Customize Chat'
                          })
                        }),
                        (0, A.jsx)(y.Z, {
                          sx: { p: 0 },
                          children: (0, A.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(C.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'Search in Conversation',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(S.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'Change Theme Styling',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(D.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
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
                    (0, A.jsxs)(Z.Z, {
                      expanded: 'section2' === t,
                      onChange: o('section2'),
                      children: [
                        (0, A.jsx)(V, {
                          expandIcon: (0, A.jsx)(k.Z, {}),
                          children: (0, A.jsx)(x.Z, {
                            variant: 'h5',
                            children: 'Privacy & Support'
                          })
                        }),
                        (0, A.jsx)(y.Z, {
                          sx: { p: 0 },
                          children: (0, A.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(T.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'Turn off notifications',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(M.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'Ignore all messages',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(z.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'Block user',
                                    primaryTypographyProps: { variant: 'h5' }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(W.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
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
                    (0, A.jsxs)(Z.Z, {
                      expanded: 'section3' === t,
                      onChange: o('section3'),
                      children: [
                        (0, A.jsx)(V, {
                          expandIcon: (0, A.jsx)(k.Z, {}),
                          children: (0, A.jsx)(x.Z, {
                            variant: 'h5',
                            children: 'Shared Files'
                          })
                        }),
                        (0, A.jsx)(y.Z, {
                          sx: { p: 0 },
                          children: (0, A.jsxs)(g.Z, {
                            component: 'nav',
                            children: [
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(H.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: 'HolidayPictures.zip',
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary: 'You opened in the past year',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(H.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
                                    primary: '2021Screenshot.jpg',
                                    primaryTypographyProps: { variant: 'h5' },
                                    secondary: 'You edited this file yesterday',
                                    secondaryTypographyProps: {
                                      variant: 'subtitle1'
                                    }
                                  })
                                ]
                              }),
                              (0, A.jsxs)(u.ZP, {
                                button: !0,
                                children: [
                                  (0, A.jsx)(R, {
                                    children: (0, A.jsx)(H.Z, {})
                                  }),
                                  (0, A.jsx)(f.Z, {
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
        };
      var U = r(5818),
        Y = r(4294),
        N = r(717),
        X = r(7756);
      const _ = (0, t.ZP)(U.ZP)((e) => {
          let { theme: n } = e;
          return '\n    font-size: '
            .concat(n.typography.pxToRem(18), ';\n    padding: ')
            .concat(n.spacing(1), ';\n    width: 100%;\n');
        }),
        q = (0, t.ZP)('input')({ display: 'none' }),
        E = () => {
          const e = (0, c.Z)(),
            n = 'Catherine Pike',
            r = '/static/images/avatars/1.jpg';
          return (0, A.jsxs)(i.Z, {
            sx: {
              background: e.colors.alpha.white[50],
              display: 'flex',
              alignItems: 'center',
              p: 2
            },
            children: [
              (0, A.jsxs)(i.Z, {
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                children: [
                  (0, A.jsx)(d.Z, {
                    sx: { display: { xs: 'none', sm: 'flex' }, mr: 1 },
                    alt: n,
                    src: r
                  }),
                  (0, A.jsx)(_, {
                    autoFocus: !0,
                    placeholder: 'Write your message here...',
                    fullWidth: !0
                  })
                ]
              }),
              (0, A.jsxs)(i.Z, {
                children: [
                  (0, A.jsx)(h.Z, {
                    arrow: !0,
                    placement: 'top',
                    title: 'Choose an emoji',
                    children: (0, A.jsx)(p.Z, {
                      sx: { fontSize: e.typography.pxToRem(16) },
                      color: 'primary',
                      children: '\ud83d\ude00'
                    })
                  }),
                  (0, A.jsx)(q, {
                    accept: 'image/*',
                    id: 'messenger-upload-file',
                    type: 'file'
                  }),
                  (0, A.jsx)(h.Z, {
                    arrow: !0,
                    placement: 'top',
                    title: 'Attach a file',
                    children: (0, A.jsx)('label', {
                      htmlFor: 'messenger-upload-file',
                      children: (0, A.jsx)(p.Z, {
                        sx: { mx: 1 },
                        color: 'primary',
                        component: 'span',
                        children: (0, A.jsx)(N.Z, { fontSize: 'small' })
                      })
                    })
                  }),
                  (0, A.jsx)(Y.Z, {
                    startIcon: (0, A.jsx)(X.Z, {}),
                    variant: 'contained',
                    children: 'Send'
                  })
                ]
              })
            ]
          });
        };
      var G = r(2065),
        K = r(6278),
        O = r(5523),
        $ = r(9955),
        J = r(8550),
        L = r(3466),
        Q = r(9124),
        ee = r(3896),
        ne = r(653),
        re = r(9861),
        ae = r(1974),
        se = r(1947),
        te = r(9394),
        ie = r(6804),
        le = r(3504);
      const oe = (0, t.ZP)(d.Z)((e) => {
          let { theme: n } = e;
          return '\n          background-color: '
            .concat(n.colors.success.lighter, ';\n          color: ')
            .concat(n.colors.success.main, ';\n          width: ')
            .concat(n.spacing(8), ';\n          height: ')
            .concat(
              n.spacing(8),
              ';\n          margin-left: auto;\n          margin-right: auto;\n    '
            );
        }),
        ce = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n          background-color: '
            .concat(
              (0, G.$n)(n.colors.alpha.black[10], 0.5),
              ';\n          margin: '
            )
            .concat(n.spacing(2), ' 0;\n          border-radius: ')
            .concat(n.general.borderRadius, ';\n          padding: ')
            .concat(n.spacing(2), ';\n    ');
        }),
        de = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n        padding: '.concat(n.spacing(2.5), ';\n  ');
        }),
        xe = (0, t.ZP)(K.Z)((e) => {
          let { theme: n } = e;
          return '\n        &.MuiButtonBase-root {\n            margin: '.concat(
            n.spacing(1),
            ' 0;\n        }\n  '
          );
        }),
        he = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n        .MuiTabs-indicator {\n            min-height: 4px;\n            height: 4px;\n            box-shadow: none;\n            border: 0;\n        }\n\n        .MuiTab-root {\n            &.MuiButtonBase-root {\n                padding: 0;\n                margin-right: '
            .concat(n.spacing(3), ';\n                font-size: ')
            .concat(n.typography.pxToRem(16), ';\n                color: ')
            .concat(
              n.colors.alpha.black[50],
              ';\n\n                .MuiTouchRipple-root {\n                    display: none;\n                }\n            }\n\n            &.Mui-selected:hover,\n            &.Mui-selected {\n                color: '
            )
            .concat(
              n.colors.alpha.black[100],
              ';\n            }\n        }\n  '
            );
        }),
        pe = () => {
          const e = 'Catherine Pike',
            n = '/static/images/avatars/1.jpg',
            r = 'Software Developer',
            [s, t] = (0, a.useState)({ invisible: !0 }),
            [l, o] = (0, a.useState)('all');
          return (0, A.jsxs)(de, {
            children: [
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                children: [
                  (0, A.jsx)(d.Z, { alt: e, src: n }),
                  (0, A.jsxs)(i.Z, {
                    sx: { ml: 1.5, flex: 1 },
                    children: [
                      (0, A.jsxs)(i.Z, {
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        children: [
                          (0, A.jsxs)(i.Z, {
                            children: [
                              (0, A.jsx)(x.Z, {
                                variant: 'h5',
                                noWrap: !0,
                                children: e
                              }),
                              (0, A.jsx)(x.Z, {
                                variant: 'subtitle1',
                                noWrap: !0,
                                children: r
                              })
                            ]
                          }),
                          (0, A.jsx)(p.Z, {
                            sx: { p: 1 },
                            size: 'small',
                            color: 'primary',
                            children: (0, A.jsx)(se.Z, { fontSize: 'small' })
                          })
                        ]
                      }),
                      (0, A.jsx)(O.Z, {
                        control: (0, A.jsx)($.Z, {
                          checked: s.invisible,
                          onChange: (e) => {
                            t({ ...s, [e.target.name]: e.target.checked });
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
              (0, A.jsx)(J.Z, {
                sx: { mt: 2, mb: 1 },
                size: 'small',
                fullWidth: !0,
                InputProps: {
                  startAdornment: (0, A.jsx)(L.Z, {
                    position: 'start',
                    children: (0, A.jsx)(C.Z, {})
                  })
                }
              }),
              (0, A.jsx)(x.Z, {
                sx: { mb: 1, mt: 2 },
                variant: 'h3',
                children: 'Chats'
              }),
              (0, A.jsx)(he, {
                children: (0, A.jsx)(Q.Z, {
                  onChange: (e, n) => {
                    o(n);
                  },
                  value: l,
                  variant: 'scrollable',
                  scrollButtons: 'auto',
                  textColor: 'primary',
                  indicatorColor: 'primary',
                  children: [
                    { value: 'all', label: 'All' },
                    { value: 'unread', label: 'Unread' },
                    { value: 'archived', label: 'Archived' }
                  ].map((e) =>
                    (0, A.jsx)(
                      ee.Z,
                      { label: e.label, value: e.value },
                      e.value
                    )
                  )
                })
              }),
              (0, A.jsxs)(i.Z, {
                mt: 2,
                children: [
                  'all' === l &&
                    (0, A.jsxs)(g.Z, {
                      disablePadding: !0,
                      component: 'div',
                      children: [
                        (0, A.jsxs)(xe, {
                          selected: !0,
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/1.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                            (0, A.jsx)('label', {
                              children: (0, A.jsx)('b', { children: '2' })
                            })
                          ]
                        }),
                        (0, A.jsxs)(xe, {
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/2.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                        (0, A.jsxs)(xe, {
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/3.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                        (0, A.jsxs)(xe, {
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/4.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                            (0, A.jsx)('label', {
                              children: (0, A.jsx)('b', { children: '8' })
                            })
                          ]
                        })
                      ]
                    }),
                  'unread' === l &&
                    (0, A.jsxs)(g.Z, {
                      disablePadding: !0,
                      component: 'div',
                      children: [
                        (0, A.jsxs)(xe, {
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/1.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                            (0, A.jsx)('label', {
                              children: (0, A.jsx)('b', { children: '2' })
                            })
                          ]
                        }),
                        (0, A.jsxs)(xe, {
                          children: [
                            (0, A.jsx)(ne.Z, {
                              children: (0, A.jsx)(d.Z, {
                                src: '/static/images/avatars/4.jpg'
                              })
                            }),
                            (0, A.jsx)(f.Z, {
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
                            (0, A.jsx)('label', {
                              children: (0, A.jsx)('b', { children: '8' })
                            })
                          ]
                        })
                      ]
                    }),
                  'archived' === l &&
                    (0, A.jsxs)(i.Z, {
                      pb: 3,
                      children: [
                        (0, A.jsx)(m.Z, { sx: { mb: 3 } }),
                        (0, A.jsx)(oe, { children: (0, A.jsx)(te.Z, {}) }),
                        (0, A.jsx)(x.Z, {
                          sx: { mt: 2, textAlign: 'center' },
                          variant: 'subtitle2',
                          children: 'Hurray! There are no archived chats!'
                        }),
                        (0, A.jsx)(m.Z, { sx: { mt: 3 } })
                      ]
                    })
                ]
              }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                pb: 1,
                mt: 4,
                alignItems: 'center',
                children: [
                  (0, A.jsx)(x.Z, {
                    sx: { mr: 1 },
                    variant: 'h3',
                    children: 'Meetings'
                  }),
                  (0, A.jsx)('label', {
                    children: (0, A.jsx)('b', { children: '2' })
                  })
                ]
              }),
              (0, A.jsxs)(ce, {
                children: [
                  (0, A.jsx)(x.Z, {
                    variant: 'h4',
                    children: 'Daily Design Meeting'
                  }),
                  (0, A.jsxs)(i.Z, {
                    py: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    children: [
                      (0, A.jsx)(ie.Z, {}),
                      (0, A.jsxs)(i.Z, {
                        pl: 1,
                        children: [
                          (0, A.jsx)(x.Z, {
                            variant: 'subtitle2',
                            sx: { lineHeight: 1 },
                            color: 'text.primary',
                            children: '10:00 - 11:30'
                          }),
                          (0, A.jsx)(x.Z, {
                            variant: 'subtitle1',
                            children: (0, v.Z)(
                              (0, b.Z)(new Date(), 12),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, A.jsxs)(re.Z, {
                        children: [
                          (0, A.jsx)(h.Z, {
                            arrow: !0,
                            title: 'View profile for Remy Sharp',
                            children: (0, A.jsx)(d.Z, {
                              sx: { width: 28, height: 28 },
                              component: le.rU,
                              to: '#',
                              alt: 'Remy Sharp',
                              src: '/static/images/avatars/1.jpg'
                            })
                          }),
                          (0, A.jsx)(h.Z, {
                            arrow: !0,
                            title: 'View profile for Travis Howard',
                            children: (0, A.jsx)(d.Z, {
                              sx: { width: 28, height: 28 },
                              component: le.rU,
                              to: '#',
                              alt: 'Travis Howard',
                              src: '/static/images/avatars/2.jpg'
                            })
                          }),
                          (0, A.jsx)(h.Z, {
                            arrow: !0,
                            title: 'View profile for Craig Vaccaro',
                            children: (0, A.jsx)(d.Z, {
                              sx: { width: 28, height: 28 },
                              component: le.rU,
                              to: '#',
                              alt: 'Craig Vaccaro',
                              src: '/static/images/avatars/3.jpg'
                            })
                          })
                        ]
                      }),
                      (0, A.jsx)(Y.Z, {
                        variant: 'contained',
                        size: 'small',
                        children: 'Attend'
                      })
                    ]
                  })
                ]
              }),
              (0, A.jsxs)(ce, {
                children: [
                  (0, A.jsx)(x.Z, {
                    variant: 'h4',
                    children: 'Investors Council Meeting'
                  }),
                  (0, A.jsxs)(i.Z, {
                    py: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    children: [
                      (0, A.jsx)(ie.Z, {}),
                      (0, A.jsxs)(i.Z, {
                        pl: 1,
                        children: [
                          (0, A.jsx)(x.Z, {
                            variant: 'subtitle2',
                            sx: { lineHeight: 1 },
                            color: 'text.primary',
                            children: '14:30 - 16:15'
                          }),
                          (0, A.jsx)(x.Z, {
                            variant: 'subtitle1',
                            children: (0, v.Z)(
                              (0, ae.Z)(new Date(), 4),
                              new Date(),
                              { addSuffix: !0 }
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, A.jsxs)(re.Z, {
                        children: [
                          (0, A.jsx)(h.Z, {
                            arrow: !0,
                            title: 'View profile for Travis Howard',
                            children: (0, A.jsx)(d.Z, {
                              sx: { width: 28, height: 28 },
                              component: le.rU,
                              to: '#',
                              alt: 'Travis Howard',
                              src: '/static/images/avatars/4.jpg'
                            })
                          }),
                          (0, A.jsx)(h.Z, {
                            arrow: !0,
                            title: 'View profile for Craig Vaccaro',
                            children: (0, A.jsx)(d.Z, {
                              sx: { width: 28, height: 28 },
                              component: le.rU,
                              to: '#',
                              alt: 'Craig Vaccaro',
                              src: '/static/images/avatars/5.jpg'
                            })
                          })
                        ]
                      }),
                      (0, A.jsx)(Y.Z, {
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
        };
      var je = r(7621),
        me = r(946),
        Ze = r(6753),
        ye = r(6890);
      const ge = (0, t.ZP)(m.Z)((e) => {
          let { theme: n } = e;
          return '\n      .MuiDivider-wrapper {\n        border-radius: '
            .concat(
              n.general.borderRadiusSm,
              ';\n        text-transform: none;\n        background: '
            )
            .concat(n.palette.background.default, ';\n        font-size: ')
            .concat(n.typography.pxToRem(13), ';\n        color: ')
            .concat(n.colors.alpha.black[50], ';\n      }\n');
        }),
        ue = (0, t.ZP)(je.Z)((e) => {
          let { theme: n } = e;
          return '\n      background: '
            .concat(n.colors.primary.main, ';\n      color: ')
            .concat(n.palette.primary.contrastText, ';\n      padding: ')
            .concat(n.spacing(2), ';\n      border-radius: ')
            .concat(
              n.general.borderRadiusXl,
              ';\n      border-top-right-radius: '
            )
            .concat(
              n.general.borderRadius,
              ';\n      max-width: 380px;\n      display: inline-flex;\n'
            );
        }),
        fe = (0, t.ZP)(je.Z)((e) => {
          let { theme: n } = e;
          return '\n      background: '
            .concat(n.colors.alpha.black[10], ';\n      color: ')
            .concat(n.colors.alpha.black[100], ';\n      padding: ')
            .concat(n.spacing(2), ';\n      border-radius: ')
            .concat(
              n.general.borderRadiusXl,
              ';\n      border-top-left-radius: '
            )
            .concat(
              n.general.borderRadius,
              ';\n      max-width: 380px;\n      display: inline-flex;\n'
            );
        }),
        ve = () => {
          const e = 'Catherine Pike',
            n = '/static/images/avatars/1.jpg';
          return (0, A.jsxs)(i.Z, {
            p: 3,
            children: [
              (0, A.jsx)(ge, {
                children: (0, me.Z)((0, Ze.Z)(new Date(), 3), 'MMMM dd yyyy')
              }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                py: 3,
                children: [
                  (0, A.jsx)(d.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: 'Zain Baptista',
                    src: '/static/images/avatars/2.jpg'
                  }),
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    ml: 2,
                    children: [
                      (0, A.jsx)(fe, {
                        children:
                          'Hi. Can you send me the missing invoices asap?'
                      }),
                      (0, A.jsxs)(x.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, A.jsx)(ye.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, v.Z)((0, ae.Z)(new Date(), 115), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, A.jsx)(ue, {
                        children:
                          "Yes, I'll email them right now. I'll let you know once the remaining invoices are done."
                      }),
                      (0, A.jsxs)(x.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, A.jsx)(ye.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, v.Z)((0, ae.Z)(new Date(), 125), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsx)(d.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: e,
                    src: n
                  })
                ]
              }),
              (0, A.jsx)(ge, {
                children: (0, me.Z)((0, Ze.Z)(new Date(), 5), 'MMMM dd yyyy')
              }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, A.jsx)(ue, { children: 'Hey! Are you there?' }),
                      (0, A.jsx)(ue, {
                        sx: { mt: 2 },
                        children: 'Heeeelloooo????'
                      }),
                      (0, A.jsxs)(x.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, A.jsx)(ye.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, v.Z)((0, ae.Z)(new Date(), 60), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsx)(d.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: e,
                    src: n
                  })
                ]
              }),
              (0, A.jsx)(ge, { children: 'Today' }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                py: 3,
                children: [
                  (0, A.jsx)(d.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: 'Zain Baptista',
                    src: '/static/images/avatars/2.jpg'
                  }),
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    ml: 2,
                    children: [
                      (0, A.jsx)(fe, { children: 'Hey there!' }),
                      (0, A.jsx)(fe, {
                        sx: { mt: 1 },
                        children: 'How are you? Is it ok if I call you?'
                      }),
                      (0, A.jsxs)(x.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, A.jsx)(ye.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, v.Z)((0, b.Z)(new Date(), 6), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, A.jsxs)(i.Z, {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                py: 3,
                children: [
                  (0, A.jsxs)(i.Z, {
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    mr: 2,
                    children: [
                      (0, A.jsx)(ue, {
                        children:
                          'Hello, I just got my Amazon order shipped and I\u2019m very happy about that.'
                      }),
                      (0, A.jsx)(ue, {
                        sx: { mt: 1 },
                        children: 'Can you confirm?'
                      }),
                      (0, A.jsxs)(x.Z, {
                        variant: 'subtitle1',
                        sx: { pt: 1, display: 'flex', alignItems: 'center' },
                        children: [
                          (0, A.jsx)(ye.Z, {
                            sx: { mr: 0.5 },
                            fontSize: 'small'
                          }),
                          (0, v.Z)((0, b.Z)(new Date(), 8), new Date(), {
                            addSuffix: !0
                          })
                        ]
                      })
                    ]
                  }),
                  (0, A.jsx)(d.Z, {
                    variant: 'rounded',
                    sx: { width: 50, height: 50 },
                    alt: e,
                    src: n
                  })
                ]
              })
            ]
          });
        };
      var be = r(4649),
        we = r(5839);
      const Pe = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n       height: calc(100vh - '.concat(
            n.header.height,
            ');\n       display: flex;\n'
          );
        }),
        Ie = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n        width: 300px;\n        background: '
            .concat(n.colors.alpha.white[100], ';\n        border-right: ')
            .concat(n.colors.alpha.black[10], ' solid 1px;\n');
        }),
        ke = (0, t.ZP)(i.Z)(
          () =>
            '\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n'
        ),
        Ce = (0, t.ZP)(i.Z)((e) => {
          let { theme: n } = e;
          return '\n        background: '
            .concat(n.colors.alpha.white[100], ';\n        border-bottom: ')
            .concat(n.colors.alpha.black[10], ' solid 1px;\n        padding: ')
            .concat(n.spacing(2), ';\n        align-items: center;\n');
        }),
        Se = (0, t.ZP)(p.Z)((e) => {
          let { theme: n } = e;
          return '\n  width: '
            .concat(n.spacing(4), ';\n  height: ')
            .concat(n.spacing(4), ';\n  background: ')
            .concat(n.colors.alpha.white[100], ';\n');
        }),
        Te = (0, t.ZP)(j.ZP)(
          () =>
            '\n    width: 340px;\n    flex-shrink: 0;\n\n  & > .MuiPaper-root {\n        width: 340px;\n        z-index: 3;\n  }\n'
        ),
        De = () => {
          const e = (0, c.Z)(),
            [n, r] = (0, a.useState)(!1),
            t = () => {
              r(!n);
            };
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(s.ql, {
                children: (0, A.jsx)('title', {
                  children: 'Messenger - Applications'
                })
              }),
              (0, A.jsxs)(Pe, {
                className: 'Mui-FixedWrapper',
                children: [
                  (0, A.jsx)(Te, {
                    sx: { display: { lg: 'none', xs: 'inline-block' } },
                    variant: 'temporary',
                    anchor: 'rtl' === e.direction ? 'right' : 'left',
                    open: n,
                    onClose: t,
                    children: (0, A.jsx)(we.Z, { children: (0, A.jsx)(pe, {}) })
                  }),
                  (0, A.jsx)(Ie, {
                    sx: { display: { xs: 'none', lg: 'inline-block' } },
                    children: (0, A.jsx)(we.Z, { children: (0, A.jsx)(pe, {}) })
                  }),
                  (0, A.jsxs)(ke, {
                    children: [
                      (0, A.jsxs)(Ce, {
                        sx: { display: { xs: 'flex', lg: 'inline-block' } },
                        children: [
                          (0, A.jsx)(Se, {
                            sx: { display: { lg: 'none', xs: 'flex' }, mr: 2 },
                            color: 'primary',
                            onClick: t,
                            size: 'small',
                            children: (0, A.jsx)(be.Z, {})
                          }),
                          (0, A.jsx)(F, {})
                        ]
                      }),
                      (0, A.jsx)(i.Z, {
                        flex: 1,
                        children: (0, A.jsx)(we.Z, {
                          children: (0, A.jsx)(ve, {})
                        })
                      }),
                      (0, A.jsx)(m.Z, {}),
                      (0, A.jsx)(E, {})
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
//# sourceMappingURL=573.0a60928d.chunk.js.map
