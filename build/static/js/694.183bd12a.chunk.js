'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [694],
  {
    10173: (e, n, t) => {
      t.d(n, { Z: () => d });
      var a = t(66934),
        r = t(89164),
        i = t(697),
        l = t(20890),
        o = t(4349),
        s = t(80184);
      const c = (0, a.ZP)(r.Z)((e) => {
          let { theme: n } = e;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        }),
        d = () =>
          (0, s.jsx)(c, {
            className: 'footer-wrapper',
            children: (0, s.jsxs)(i.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, s.jsx)(i.Z, {
                  children: (0, s.jsxs)(l.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, s.jsx)(o.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, s.jsx)(l.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    17395: (e, n, t) => {
      t.d(n, { Z: () => l });
      var a = t(66934),
        r = t(80184);
      const i = (0, a.ZP)('span')((e) => {
          let { theme: n } = e;
          return '\n      background-color: '
            .concat(n.colors.alpha.black[5], ';\n      padding: ')
            .concat(n.spacing(0.5, 1), ';\n      font-size: ')
            .concat(n.typography.pxToRem(13), ';\n      border-radius: ')
            .concat(
              n.general.borderRadius,
              ';\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: '
            )
            .concat(
              n.spacing(3),
              ';\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: '
            )
            .concat(n.colors.primary.lighter, ';\n          color: ')
            .concat(
              n.palette.primary.main,
              '\n        }\n\n        &-black {\n          background-color: '
            )
            .concat(n.colors.alpha.black[100], ';\n          color: ')
            .concat(
              n.colors.alpha.white[100],
              ';\n        }\n        \n        &-secondary {\n          background-color: '
            )
            .concat(n.colors.secondary.lighter, ';\n          color: ')
            .concat(
              n.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          background-color: '
            )
            .concat(n.colors.success.lighter, ';\n          color: ')
            .concat(
              n.palette.success.main,
              '\n        }\n        \n        &-warning {\n          background-color: '
            )
            .concat(n.colors.warning.lighter, ';\n          color: ')
            .concat(
              n.palette.warning.main,
              '\n        }\n              \n        &-error {\n          background-color: '
            )
            .concat(n.colors.error.lighter, ';\n          color: ')
            .concat(
              n.palette.error.main,
              '\n        }\n        \n        &-info {\n          background-color: '
            )
            .concat(n.colors.info.lighter, ';\n          color: ')
            .concat(n.palette.info.main, '\n        }\n      }\n');
        }),
        l = (e) => {
          let { color: n = 'secondary', children: t, ...a } = e;
          return (0, r.jsx)(i, {
            className: 'MuiLabel-' + n,
            ...a,
            children: t
          });
        };
    },
    68418: (e, n, t) => {
      t.d(n, { Z: () => s });
      var a = t(66934),
        r = t(697),
        i = t(89164),
        l = t(80184);
      const o = (0, a.ZP)(r.Z)((e) => {
          let { theme: n } = e;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        }),
        s = (e) => {
          let { children: n } = e;
          return (0, l.jsx)(o, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(i.Z, { maxWidth: 'lg', children: n })
          });
        };
    },
    23481: (e, n, t) => {
      t.d(n, { Z: () => j });
      var a = t(61889),
        r = t(20890),
        i = t(697),
        l = t(94294),
        o = t(74696),
        s = t(72791),
        c = t(98333),
        d = t(93517),
        h = t(16871),
        x = t(43504),
        g = t(4349),
        p = t(80184);
      const u = (e) => {
          let { links: n = [] } = e;
          const t = (0, h.TH)();
          return (0, p.jsx)(d.Z, {
            separator: (0, p.jsx)(c.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: n.map((e, a) =>
              a === n.length - 1
                ? (0, p.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, p.jsx)(g.Z, { id: e.name })
                    },
                    a
                  )
                : (0, p.jsx)(
                    x.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        t.pathname,
                      onClick:
                        (null === e || void 0 === e ? void 0 : e.onClick) &&
                        e.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, p.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, p.jsx)(g.Z, { id: e.name })
                      })
                    },
                    a
                  )
            )
          });
        },
        m = (e) => {
          let {
            headerTitle: n,
            headerSubtitle: t,
            breadcrumbs: s,
            onOpenModal: c
          } = e;
          return (0, p.jsxs)(a.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, p.jsxs)(a.ZP, {
                item: !0,
                children: [
                  (0, p.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, p.jsx)(g.Z, { id: n })
                  }),
                  (0, p.jsx)(r.Z, { variant: 'subtitle2', children: t }),
                  s &&
                    (0, p.jsx)(i.Z, {
                      marginTop: '8px',
                      children: (0, p.jsx)(u, { links: s })
                    })
                ]
              }),
              c &&
                (0, p.jsx)(a.ZP, {
                  item: !0,
                  children: (0, p.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, p.jsx)(o.Z, { fontSize: 'small' }),
                    onClick: c,
                    children: (0, p.jsx)(g.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        j = (0, s.memo)(m);
    },
    96790: (e, n, t) => {
      t.d(n, { Z: () => ee });
      var a = t(89164),
        r = t(61889),
        i = t(72791),
        l = t(6907),
        o = t(93539),
        s = t(10173),
        c = t(68418),
        d = t(23481),
        h = t(30168),
        x = t(68036),
        g = t(31675),
        p = t(5403),
        u = t(21686),
        m = t(39709),
        j = t(66934),
        Z = t(13967),
        b = t(97639),
        y = t(20890),
        v = t(94294),
        f = t(13400),
        w = t(57621),
        k = t(697),
        C = t(94721),
        P = t(48550),
        S = t(39281),
        B = t(79836),
        I = t(91048),
        F = t(35855),
        T = t(53994),
        O = t(94454),
        A = t(80720),
        D = t(53382),
        L = t(13239),
        M = t(63033),
        z = t(87837),
        _ = t(71715),
        H = t(90493),
        U = t(15021),
        W = t(49900),
        N = t(74934),
        R = t(80184);
      const E = (0, j.ZP)(v.Z)((e) => {
          let { theme: n } = e;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        Y = () => {
          const { toggle: e, visible: n } = (0, z.d)(),
            t = (0, i.useRef)(null);
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(k.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, R.jsxs)(k.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, R.jsx)(y.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, R.jsx)(E, {
                        sx: { ml: 1 },
                        startIcon: (0, R.jsx)(x.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, R.jsx)(f.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: t,
                    sx: { ml: 2, p: 1 },
                    children: (0, R.jsx)(N.Z, {})
                  })
                ]
              }),
              (0, R.jsx)(_.Z, {
                keepMounted: !0,
                anchorEl: t.current,
                open: n,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, R.jsxs)(H.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, R.jsx)(U.ZP, {
                      button: !0,
                      children: (0, R.jsx)(W.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, R.jsx)(U.ZP, {
                      button: !0,
                      children: (0, R.jsx)(W.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
      var q,
        J = t(92810),
        G = t(64732),
        K = t(4349);
      const Q = (0, j.ZP)(m.Z)(
          q ||
            (q = (0, h.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        V = (e) => {
          let {
            data: n,
            tableHeader: t,
            isLoading: r,
            pagination: l,
            totalItems: o = 0,
            tableFilter: s,
            extraOptions: c,
            isShowBulkActions: d,
            tableBody: h,
            onDelete: m,
            onUpdate: j,
            onPagination: _
          } = e;
          const H = (0, Z.Z)(),
            { visible: U, show: W, hide: N } = (0, z.d)(),
            [E, q] = (0, i.useState)(''),
            [V, X] = (0, i.useState)([]),
            [$, ee] = (0, i.useState)(''),
            ne = (0, G.Z)($, 500);
          (0, i.useEffect)(() => {
            _({ ...l, search: ne });
          }, [ne]);
          const te = V.length > 0 && V.length < n.length,
            ae = V.length === n.length,
            re = (e) => {
              W(), q(e);
            },
            ie = (e) => {
              m(e), N();
            },
            le = (0, i.useMemo)(
              () => (m || j || '' !== t[t.length - 1].name || t.pop(), t),
              [m, j, t]
            ),
            oe = (e) => {
              let {
                item: n,
                hide: t,
                onDelete: r,
                handleShow: i,
                rowId: l,
                visible: o,
                theme: s,
                isLoading: c
              } = e;
              return (0, R.jsx)(b.Z, {
                title: (0, R.jsxs)(a.Z, {
                  children: [
                    (0, R.jsx)(y.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, R.jsxs)(a.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, R.jsx)(v.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, R.jsx)(Q, {
                          onClick: () => ie(n.id),
                          loading: c,
                          loadingPosition: 'start',
                          startIcon: (0, R.jsx)(u.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: n.id === l && o && !c,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, R.jsx)(f.Z, {
                  sx: {
                    '&:hover': { background: s.colors.error.lighter },
                    color: s.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => i(n.id),
                  children: (0, R.jsx)(x.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, R.jsxs)(w.Z, {
            children: [
              d &&
                (null === V || void 0 === V ? void 0 : V.length) > 0 &&
                (0, R.jsx)(k.Z, { flex: 1, p: 2, children: (0, R.jsx)(Y, {}) }),
              (0, R.jsx)(C.Z, {}),
              (0, R.jsxs)(w.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, R.jsxs)(k.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, R.jsx)(P.Z, {
                        label: (0, R.jsx)(K.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, R.jsx)(f.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, R.jsx)(p.Z, {})
                      })
                    ]
                  }),
                  (0, R.jsx)(k.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === s || void 0 === s
                        ? void 0
                        : s.map((e, n) => (0, R.jsx)(k.Z, { children: e }, n))
                  })
                ]
              }),
              (0, R.jsx)(S.Z, {
                children: (0, R.jsxs)(B.Z, {
                  children: [
                    (0, R.jsx)(I.Z, {
                      children: (0, R.jsxs)(F.Z, {
                        children: [
                          d &&
                            (0, R.jsx)(T.Z, {
                              padding: 'checkbox',
                              children: (0, R.jsx)(O.Z, {
                                color: 'primary',
                                checked: ae,
                                indeterminate: te,
                                onChange: (e) => {
                                  X(e.target.checked ? n.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, n) =>
                            (0, R.jsx)(
                              T.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, R.jsx)(A.Z, {
                                      active: l.sortBy === n,
                                      direction:
                                        l.sortBy === n
                                          ? l.sortDirection
                                          : 'asc',
                                      onClick: () =>
                                        ((e) => {
                                          const n = {
                                            ...l,
                                            sortBy: e,
                                            sortDirection:
                                              l.sortBy === e &&
                                              'asc' === l.sortDirection
                                                ? 'desc'
                                                : 'asc'
                                          };
                                          _(n);
                                        })(n),
                                      children: (0, R.jsx)(K.Z, { id: e.title })
                                    })
                                  : (0, R.jsx)(K.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, J.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, R.jsxs)(D.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map((e) => {
                          var n;
                          const t = V.includes(e.id);
                          return (0, R.jsxs)(
                            F.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                d &&
                                  (0, R.jsx)(
                                    T.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, R.jsx)(O.Z, {
                                        color: 'primary',
                                        checked: t,
                                        onChange: (n) => {
                                          return (
                                            (t = e.id),
                                            void (V.includes(t)
                                              ? X((e) =>
                                                  e.filter((e) => e !== t)
                                                )
                                              : X((e) => [...e, t]))
                                          );
                                          var t;
                                        },
                                        value: t
                                      })
                                    },
                                    (0, J.Z)()
                                  ),
                                null === (n = h(e)) || void 0 === n
                                  ? void 0
                                  : n.map((e) =>
                                      (0, R.jsx)(
                                        T.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, J.Z)()
                                      )
                                    ),
                                (j || m) &&
                                  (0, R.jsxs)(
                                    T.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.map((e) =>
                                              (0, R.jsx)(b.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        j &&
                                          (0, R.jsx)(b.Z, {
                                            title: (0, R.jsx)(K.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, R.jsx)(f.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    H.colors.primary.lighter
                                                },
                                                color: H.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => j(e.id),
                                              children: (0, R.jsx)(g.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        m &&
                                          oe({
                                            item: e,
                                            rowId: E,
                                            visible: U,
                                            theme: H,
                                            isLoading: r,
                                            handleShow: re,
                                            onDelete: m,
                                            hide: N
                                          })
                                      ]
                                    },
                                    (0, J.Z)()
                                  )
                              ]
                            },
                            (0, J.Z)()
                          );
                        }),
                        r &&
                          (0, R.jsx)(F.Z, {
                            children: (0, R.jsx)(T.Z, {
                              children: (0, R.jsx)(k.Z, {
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                sx: {
                                  transform: 'translate(-50%, -50%)',
                                  background: 'rgba(255, 255, 255, 0.5)',
                                  zIndex: 100
                                },
                                children: (0, R.jsx)(L.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, R.jsx)(k.Z, {
                p: 2,
                children: (0, R.jsx)(M.Z, {
                  component: 'div',
                  count: o,
                  onPageChange: (e, n) => {
                    _({ ...l, page: n });
                  },
                  onRowsPerPageChange: (e) => {
                    _({ ...l, size: Number(e.target.value) });
                  },
                  page: l.page,
                  rowsPerPage: l.size,
                  rowsPerPageOptions: [5, 10, 25, 30],
                  showLastButton: !0,
                  showFirstButton: !0
                })
              })
            ]
          });
        },
        X = (0, i.memo)(V),
        $ = (e) => {
          let {
            title: n,
            data: t = [],
            tableHeader: i = [{ align: 'inherit', title: 'Title' }],
            headerTitle: h = '',
            headerSubtitle: x = '',
            isLoading: g = !1,
            breadcrumbs: p,
            pagination: u,
            tableFilter: m,
            totalItems: j,
            extraOptions: Z,
            isShowBulkActions: b = !0,
            onOpenModal: y,
            tableBody: v,
            onDelete: f,
            onUpdate: w,
            onPagination: k
          } = e;
          const C = (0, o.Z)();
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(l.ql, {
                children: (0, R.jsx)('title', {
                  children: C.formatMessage({ id: n })
                })
              }),
              (0, R.jsx)(c.Z, {
                children: (0, R.jsx)(d.Z, {
                  headerTitle: h,
                  headerSubtitle: x,
                  onOpenModal: y,
                  breadcrumbs: p
                })
              }),
              (0, R.jsx)(a.Z, {
                maxWidth: 'lg',
                children: (0, R.jsx)(r.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, R.jsx)(r.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, R.jsx)(X, {
                      data: t,
                      totalItems: j,
                      tableHeader: i,
                      tableBody: v,
                      isLoading: g,
                      onDelete: f,
                      onUpdate: w,
                      onPagination: k,
                      pagination: u,
                      tableFilter: m,
                      extraOptions: Z,
                      isShowBulkActions: b
                    })
                  })
                })
              }),
              (0, R.jsx)(s.Z, {})
            ]
          });
        },
        ee = (0, i.memo)($);
    },
    71371: (e, n, t) => {
      t.d(n, { s: () => a });
      const a = [
        'win',
        'bet',
        'cancel',
        'deposit',
        'withdraw',
        'user.add_balance',
        'agent.add_balance'
      ];
    },
    98694: (e, n, t) => {
      t.r(n), t.d(n, { default: () => P });
      var a = t(72791),
        r = t(16871),
        i = t(43504),
        l = t(96790),
        o = t(32302),
        s = t(25850),
        c = t(20890),
        d = t(68096),
        h = t(94925),
        x = t(99321),
        g = t(23786),
        p = t(94294),
        u = t(82970),
        m = t(80946),
        j = t(98673),
        Z = t(4349),
        b = t(17395),
        y = t(71371),
        v = t(80184);
      const f = (e) => {
          const n = {
            approved: { text: 'Approved', color: 'success' },
            pending: { text: 'Pending', color: 'warning' },
            'agent.add_balance': {
              text: 'Agent Add Balance',
              color: 'primary'
            },
            'user.add_balance': { text: 'User Add Balance', color: 'info' }
          };
          if (isNaN(Number(e)) && n[e]) {
            const { text: t, color: a } = n[e];
            return (0, v.jsx)(b.Z, { color: a, children: t });
          }
          return Number(e) > 0
            ? (0, v.jsx)(b.Z, { color: 'success', children: String(e) })
            : (0, v.jsx)(b.Z, { color: 'error', children: String(e) });
        },
        w = () => {
          let e = !1,
            n = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (n = !0);
          const { role: t } = JSON.parse(localStorage.getItem('user'));
          'admin' === t.name && (e = !0);
          return {
            tableBody: (e) => [
              {
                align: 'inherit',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.username
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.agentUsername
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: f(String(e.amount))
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: f(e.type)
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: f(e.status)
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(c.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      (null === e || void 0 === e ? void 0 : e.createdAt) &&
                      (0, m.Z)(
                        (0, j.Z)(
                          null === e || void 0 === e ? void 0 : e.createdAt
                        ),
                        'dd/MM/yyyy HH:mm'
                      )
                  })
                })
              }
            ],
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
            tableFilter: (t) => {
              let { type: a, status: r, dateFrom: i, dateTo: l } = t;
              return [
                (0, v.jsx)(u.M, {
                  label: (0, v.jsx)(Z.Z, { id: 'label.from' }),
                  onChange: i.onChange
                }),
                (0, v.jsx)(u.M, {
                  label: (0, v.jsx)(Z.Z, { id: 'label.to' }),
                  onChange: l.onChange
                }),
                (0, v.jsxs)(d.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, v.jsx)(h.Z, {
                      id: 'Type',
                      children: (0, v.jsx)(Z.Z, { id: 'label.type' })
                    }),
                    (0, v.jsxs)(x.Z, {
                      labelId: 'Type',
                      value: a.value,
                      label: (0, v.jsx)(Z.Z, { id: 'label.type' }),
                      onChange: (e) => {
                        a.onChange([...e.target.value]);
                      },
                      multiple: !0,
                      children: [
                        (0, v.jsx)(g.Z, {
                          value: '',
                          children: (0, v.jsx)('em', { children: 'Default' })
                        }),
                        y.s.map((e) =>
                          (0, v.jsx)(
                            g.Z,
                            {
                              value: e,
                              children: ''
                                .concat(e.slice(0, 1).toUpperCase())
                                .concat(e.slice(1))
                            },
                            e
                          )
                        )
                      ]
                    })
                  ]
                }),
                (0, v.jsxs)(d.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, v.jsx)(h.Z, {
                      id: 'status',
                      children: (0, v.jsx)(Z.Z, { id: 'label.status' })
                    }),
                    (0, v.jsxs)(x.Z, {
                      labelId: 'status',
                      value: r.value,
                      label: (0, v.jsx)(Z.Z, { id: 'label.status' }),
                      onChange: (e) => r.onChange(e.target.value),
                      children: [
                        (0, v.jsx)(g.Z, {
                          value: '',
                          children: (0, v.jsx)('em', { children: 'Default' })
                        }),
                        (0, v.jsx)(
                          g.Z,
                          { value: 'approved', children: 'Approved' },
                          1
                        ),
                        (0, v.jsx)(
                          g.Z,
                          { value: 'pending', children: 'Pending' },
                          2
                        )
                      ]
                    })
                  ]
                }),
                (0, v.jsx)(v.Fragment, {
                  children:
                    e && !1 === n
                      ? (0, v.jsx)(p.Z, {
                          href: '?type=agent.add_balance',
                          variant: 'outlined',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, v.jsx)(Z.Z, { id: 'label.See-request' })
                        })
                      : n && !0 === e
                      ? (0, v.jsx)(p.Z, {
                          href: '?type=',
                          variant: 'outlined',
                          color: 'secondary',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, v.jsx)(Z.Z, { id: 'label.See-all' })
                        })
                      : null
                })
              ];
            }
          };
        },
        k = 'title.transactions-management',
        C = [{ link: '/dashboards', name: 'title.dashboard' }, { name: k }],
        P = () => {
          const { slug: e, type: n } = (0, r.UO)();
          let t;
          t =
            'betting-history' === n
              ? 'bet,win,cancel'
              : 'recharge-history' === n
              ? 'agent.add_balance,user.add_balance,deposit,withdraw'
              : '';
          const [c] = (0, i.lr)(),
            { tableBody: d, tableHeader: h, tableFilter: x } = w(),
            [g, p] = (0, a.useState)([]),
            [u, m] = (0, a.useState)({
              page: 0,
              size: 10,
              status: '',
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: [t],
              dateFrom: '',
              dateTo: ''
            }),
            { data: j, isFetching: Z } = (0, o.kn)(
              { id: e, ...u },
              { refetchOnMountOrArgChange: !0 }
            );
          return (
            (0, a.useEffect)(() => {
              'agent.add_balance' ===
                new URLSearchParams(window.location.search).get('type') &&
                m({ ...u, type: [...u.type], status: 'pending' }),
                'charging' === c.get('type') &&
                  m({
                    ...u,
                    type: [...u.type, 'agent.add_balance', 'user.add_balance']
                  });
            }, []),
            (0, a.useEffect)(() => {
              j &&
                p(() => {
                  var e;
                  return (0, s.TY)(
                    j.data.data,
                    null === (e = h[u.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    u.sortDirection
                  );
                });
            }, [j, u.sortBy, u.sortDirection]),
            (0, v.jsx)(v.Fragment, {
              children: (0, v.jsx)(l.Z, {
                title: k,
                data: g,
                totalItems:
                  null === j || void 0 === j ? void 0 : j.data.totalItems,
                tableHeader: h,
                tableBody: d,
                headerTitle: k,
                breadcrumbs: C,
                isLoading: Z,
                pagination: u,
                onPagination: m,
                isShowBulkActions: !1,
                tableFilter: x({
                  dateFrom: {
                    value: u.dateFrom,
                    onChange: (e) => m({ ...u, dateFrom: (0, s.Zd)(e, 'from') })
                  },
                  dateTo: {
                    value: u.dateTo,
                    onChange: (e) => m({ ...u, dateTo: (0, s.Zd)(e, 'to') })
                  },
                  type: {
                    value: u.type,
                    onChange: (e) => m({ ...u, type: Array.from(new Set(e)) })
                  },
                  status: {
                    value: u.status,
                    onChange: (e) => m({ ...u, status: e })
                  }
                })
              })
            })
          );
        };
    },
    64732: (e, n, t) => {
      t.d(n, { Z: () => r });
      var a = t(72791);
      const r = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [t, r] = (0, a.useState)(e);
        return (
          (0, a.useEffect)(() => {
            const t = setTimeout(() => {
              r(e);
            }, n);
            return () => {
              clearTimeout(t);
            };
          }, [e, n]),
          t
        );
      };
    },
    25850: (e, n, t) => {
      t.d(n, { TY: () => i, Zd: () => l });
      var a = t(72426),
        r = t.n(a);
      const i = (e, n, t) =>
          [...e].sort((e, a) =>
            'string' === typeof e[n] && 'string' === typeof a[n]
              ? 'asc' === t
                ? e[n].localeCompare(a[n])
                : a[n].localeCompare(e[n])
              : 'number' === typeof e[n] && 'number' === typeof a[n]
              ? 'asc' === t
                ? e[n] - a[n]
                : a[n] - e[n]
              : 0
          ),
        l = (e, n) => {
          if ('to' === n) {
            return r()(e).endOf('day').utc().toISOString();
          }
          return r()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=694.183bd12a.chunk.js.map
