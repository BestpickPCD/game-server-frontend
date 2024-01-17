'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [79],
  {
    173: (e, t, n) => {
      n.d(t, { Z: () => c });
      var i = n(6934),
        a = n(9164),
        r = n(697),
        l = n(890),
        s = n(4349),
        o = n(184);
      const d = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        margin-top: '.concat(t.spacing(4), ';\n');
        }),
        c = () =>
          (0, o.jsx)(d, {
            className: 'footer-wrapper',
            children: (0, o.jsxs)(r.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, o.jsx)(r.Z, {
                  children: (0, o.jsxs)(l.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, o.jsx)(s.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, o.jsx)(l.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    8418: (e, t, n) => {
      n.d(t, { Z: () => o });
      var i = n(6934),
        a = n(697),
        r = n(9164),
        l = n(184);
      const s = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        o = (e) => {
          let { children: t } = e;
          return (0, l.jsx)(s, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(r.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    3481: (e, t, n) => {
      n.d(t, { Z: () => Z });
      var i = n(1889),
        a = n(890),
        r = n(697),
        l = n(4294),
        s = n(4696),
        o = n(2791),
        d = n(8333),
        c = n(3517),
        h = n(6871),
        x = n(3504),
        m = n(4349),
        g = n(184);
      const p = (e) => {
          let { links: t = [] } = e;
          const n = (0, h.TH)();
          return (0, g.jsx)(c.Z, {
            separator: (0, g.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map((e, i) =>
              i === t.length - 1
                ? (0, g.jsx)(
                    a.Z,
                    {
                      color: 'inherit',
                      children: (0, g.jsx)(m.Z, { id: e.name })
                    },
                    i
                  )
                : (0, g.jsx)(
                    x.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        n.pathname,
                      onClick:
                        (null === e || void 0 === e ? void 0 : e.onClick) &&
                        e.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, g.jsx)(a.Z, {
                        color: 'inherit',
                        children: (0, g.jsx)(m.Z, { id: e.name })
                      })
                    },
                    i
                  )
            )
          });
        },
        j = (e) => {
          let {
            headerTitle: t,
            headerSubtitle: n,
            breadcrumbs: o,
            onOpenModal: d
          } = e;
          return (0, g.jsxs)(i.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, g.jsxs)(i.ZP, {
                item: !0,
                children: [
                  (0, g.jsx)(a.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, g.jsx)(m.Z, { id: t })
                  }),
                  (0, g.jsx)(a.Z, { variant: 'subtitle2', children: n }),
                  o &&
                    (0, g.jsx)(r.Z, {
                      marginTop: '8px',
                      children: (0, g.jsx)(p, { links: o })
                    })
                ]
              }),
              d &&
                (0, g.jsx)(i.ZP, {
                  item: !0,
                  children: (0, g.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, g.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, g.jsx)(m.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        Z = (0, o.memo)(j);
    },
    6790: (e, t, n) => {
      n.d(t, { Z: () => ee });
      var i = n(9164),
        a = n(1889),
        r = n(2791),
        l = n(6907),
        s = n(3539),
        o = n(173),
        d = n(8418),
        c = n(3481),
        h = n(168),
        x = n(8036),
        m = n(1675),
        g = n(5403),
        p = n(1686),
        j = n(9709),
        Z = n(6934),
        u = n(3967),
        b = n(7639),
        v = n(890),
        y = n(4294),
        f = n(3400),
        w = n(7621),
        k = n(697),
        C = n(4721),
        P = n(8550),
        T = n(9281),
        I = n(9836),
        B = n(1048),
        F = n(5855),
        S = n(3994),
        A = n(4454),
        O = n(720),
        z = n(3382),
        D = n(3239),
        M = n(3033),
        H = n(7837),
        L = n(1715),
        W = n(493),
        N = n(5021),
        U = n(9900),
        E = n(4934),
        _ = n(184);
      const Y = (0, Z.ZP)(y.Z)((e) => {
          let { theme: t } = e;
          return '\n     background: '
            .concat(t.colors.error.main, ';\n     color: ')
            .concat(
              t.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(t.colors.error.dark, ';\n     }\n    ');
        }),
        R = () => {
          const { toggle: e, visible: t } = (0, H.d)(),
            n = (0, r.useRef)(null);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(k.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, _.jsxs)(k.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, _.jsx)(v.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, _.jsx)(Y, {
                        sx: { ml: 1 },
                        startIcon: (0, _.jsx)(x.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, _.jsx)(f.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: n,
                    sx: { ml: 2, p: 1 },
                    children: (0, _.jsx)(E.Z, {})
                  })
                ]
              }),
              (0, _.jsx)(L.Z, {
                keepMounted: !0,
                anchorEl: n.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, _.jsxs)(W.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, _.jsx)(N.ZP, {
                      button: !0,
                      children: (0, _.jsx)(U.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, _.jsx)(N.ZP, {
                      button: !0,
                      children: (0, _.jsx)(U.Z, {
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
        G = n(2810),
        J = n(4732),
        K = n(4349);
      const Q = (0, Z.ZP)(j.Z)(
          q ||
            (q = (0, h.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        V = (e) => {
          let {
            data: t,
            tableHeader: n,
            isLoading: a,
            pagination: l,
            totalItems: s = 0,
            tableFilter: o,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: h,
            onDelete: j,
            onUpdate: Z,
            onPagination: L
          } = e;
          const W = (0, u.Z)(),
            { visible: N, show: U, hide: E } = (0, H.d)(),
            [Y, q] = (0, r.useState)(''),
            [V, X] = (0, r.useState)([]),
            [$, ee] = (0, r.useState)(''),
            te = (0, J.Z)($, 500);
          (0, r.useEffect)(() => {
            L({ ...l, search: te });
          }, [te]);
          const ne = V.length > 0 && V.length < t.length,
            ie = V.length === t.length,
            ae = (e) => {
              U(), q(e);
            },
            re = (e) => {
              j(e), E();
            },
            le = (0, r.useMemo)(
              () => (j || Z || '' !== n[n.length - 1].name || n.pop(), n),
              [j, Z, n]
            ),
            se = (e) => {
              let {
                item: t,
                hide: n,
                onDelete: a,
                handleShow: r,
                rowId: l,
                visible: s,
                theme: o,
                isLoading: d
              } = e;
              return (0, _.jsx)(b.Z, {
                title: (0, _.jsxs)(i.Z, {
                  children: [
                    (0, _.jsx)(v.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, _.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, _.jsx)(y.Z, {
                          variant: 'outlined',
                          onClick: n,
                          children: 'No'
                        }),
                        (0, _.jsx)(Q, {
                          onClick: () => re(t.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, _.jsx)(p.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: t.id === l && s && !d,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, _.jsx)(f.Z, {
                  sx: {
                    '&:hover': { background: o.colors.error.lighter },
                    color: o.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => r(t.id),
                  children: (0, _.jsx)(x.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, _.jsxs)(w.Z, {
            children: [
              c &&
                (null === V || void 0 === V ? void 0 : V.length) > 0 &&
                (0, _.jsx)(k.Z, { flex: 1, p: 2, children: (0, _.jsx)(R, {}) }),
              (0, _.jsx)(C.Z, {}),
              (0, _.jsxs)(w.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, _.jsxs)(k.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, _.jsx)(P.Z, {
                        label: (0, _.jsx)(K.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, _.jsx)(f.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, _.jsx)(g.Z, {})
                      })
                    ]
                  }),
                  (0, _.jsx)(k.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map((e, t) => (0, _.jsx)(k.Z, { children: e }, t))
                  })
                ]
              }),
              (0, _.jsx)(T.Z, {
                children: (0, _.jsxs)(I.Z, {
                  children: [
                    (0, _.jsx)(B.Z, {
                      children: (0, _.jsxs)(F.Z, {
                        children: [
                          c &&
                            (0, _.jsx)(S.Z, {
                              padding: 'checkbox',
                              children: (0, _.jsx)(A.Z, {
                                color: 'primary',
                                checked: ie,
                                indeterminate: ne,
                                onChange: (e) => {
                                  X(e.target.checked ? t.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, t) =>
                            (0, _.jsx)(
                              S.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, _.jsx)(O.Z, {
                                      active: l.sortBy === t,
                                      direction:
                                        l.sortBy === t
                                          ? l.sortDirection
                                          : 'asc',
                                      onClick: () =>
                                        ((e) => {
                                          const t = {
                                            ...l,
                                            sortBy: e,
                                            sortDirection:
                                              l.sortBy === e &&
                                              'asc' === l.sortDirection
                                                ? 'desc'
                                                : 'asc'
                                          };
                                          L(t);
                                        })(t),
                                      children: (0, _.jsx)(K.Z, { id: e.title })
                                    })
                                  : (0, _.jsx)(K.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, G.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, _.jsxs)(z.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !t || t.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        t.map((e) => {
                          var t;
                          const n = V.includes(e.id);
                          return (0, _.jsxs)(
                            F.Z,
                            {
                              hover: !0,
                              selected: n,
                              children: [
                                c &&
                                  (0, _.jsx)(
                                    S.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, _.jsx)(A.Z, {
                                        color: 'primary',
                                        checked: n,
                                        onChange: (t) => {
                                          return (
                                            (n = e.id),
                                            void (V.includes(n)
                                              ? X((e) =>
                                                  e.filter((e) => e !== n)
                                                )
                                              : X((e) => [...e, n]))
                                          );
                                          var n;
                                        },
                                        value: n
                                      })
                                    },
                                    (0, G.Z)()
                                  ),
                                null === (t = h(e)) || void 0 === t
                                  ? void 0
                                  : t.map((e) =>
                                      (0, _.jsx)(
                                        S.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, G.Z)()
                                      )
                                    ),
                                (Z || j) &&
                                  (0, _.jsxs)(
                                    S.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, _.jsx)(b.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        Z &&
                                          (0, _.jsx)(b.Z, {
                                            title: (0, _.jsx)(K.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, _.jsx)(f.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    W.colors.primary.lighter
                                                },
                                                color: W.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => Z(e.id),
                                              children: (0, _.jsx)(m.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        j &&
                                          se({
                                            item: e,
                                            rowId: Y,
                                            visible: N,
                                            theme: W,
                                            isLoading: a,
                                            handleShow: ae,
                                            onDelete: j,
                                            hide: E
                                          })
                                      ]
                                    },
                                    (0, G.Z)()
                                  )
                              ]
                            },
                            (0, G.Z)()
                          );
                        }),
                        a &&
                          (0, _.jsx)(F.Z, {
                            children: (0, _.jsx)(S.Z, {
                              children: (0, _.jsx)(k.Z, {
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
                                children: (0, _.jsx)(D.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, _.jsx)(k.Z, {
                p: 2,
                children: (0, _.jsx)(M.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: (e, t) => {
                    L({ ...l, page: t });
                  },
                  onRowsPerPageChange: (e) => {
                    L({ ...l, size: Number(e.target.value) });
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
        X = (0, r.memo)(V),
        $ = (e) => {
          let {
            title: t,
            data: n = [],
            tableHeader: r = [{ align: 'inherit', title: 'Title' }],
            headerTitle: h = '',
            headerSubtitle: x = '',
            isLoading: m = !1,
            breadcrumbs: g,
            pagination: p,
            tableFilter: j,
            totalItems: Z,
            extraOptions: u,
            isShowBulkActions: b = !0,
            onOpenModal: v,
            tableBody: y,
            onDelete: f,
            onUpdate: w,
            onPagination: k
          } = e;
          const C = (0, s.Z)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(l.ql, {
                children: (0, _.jsx)('title', {
                  children: C.formatMessage({ id: t })
                })
              }),
              (0, _.jsx)(d.Z, {
                children: (0, _.jsx)(c.Z, {
                  headerTitle: h,
                  headerSubtitle: x,
                  onOpenModal: v,
                  breadcrumbs: g
                })
              }),
              (0, _.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, _.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, _.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, _.jsx)(X, {
                      data: n,
                      totalItems: Z,
                      tableHeader: r,
                      tableBody: y,
                      isLoading: m,
                      onDelete: f,
                      onUpdate: w,
                      onPagination: k,
                      pagination: p,
                      tableFilter: j,
                      extraOptions: u,
                      isShowBulkActions: b
                    })
                  })
                })
              }),
              (0, _.jsx)(o.Z, {})
            ]
          });
        },
        ee = (0, r.memo)($);
    },
    1371: (e, t, n) => {
      n.d(t, { s: () => i });
      const i = [
        'win',
        'bet',
        'cancel',
        'deposit',
        'withdraw',
        'user.add_balance',
        'agent.add_balance'
      ];
    },
    4079: (e, t, n) => {
      n.r(t), n.d(t, { default: () => D });
      var i = n(2791),
        a = n(6790),
        r = n(2408),
        l = n(5850),
        s = n(7837),
        o = n(1131),
        d = n(697),
        c = n(6314),
        h = n(890),
        x = n(1918),
        m = n(1473),
        g = n(4970),
        p = n(3721),
        j = n(9281),
        Z = n(9836),
        u = n(1048),
        b = n(5855),
        v = n(3994),
        y = n(3382),
        f = n(8096),
        w = n(4925),
        k = n(9321),
        C = n(3786),
        P = n(5527),
        T = n(2970),
        I = n(2426),
        B = n.n(I),
        F = n(4349),
        S = n(1371),
        A = n(184);
      const O = () => ({
          tableBody: (e) => [
            {
              align: 'left',
              children: (0, A.jsx)(A.Fragment, {
                children: (0, A.jsxs)(d.Z, {
                  children: [
                    (0, A.jsx)(c.Z, {
                      direction: { xs: 'column', sm: 'row' },
                      spacing: { xs: 1 },
                      children: (0, A.jsx)(h.Z, {
                        variant: 'body1',
                        color: 'text.primary',
                        children: e.details.gameName
                      })
                    }),
                    (0, A.jsx)(c.Z, {
                      direction: { xs: 'column', sm: 'row' },
                      spacing: { xs: 1 },
                      children: e.details.gameType.map((e) =>
                        (0, A.jsx)(x.Z, { label: e, variant: 'outlined' }, e)
                      )
                    })
                  ]
                })
              })
            },
            {
              align: 'right',
              children: (0, A.jsx)(A.Fragment, {
                children: (0, A.jsx)(h.Z, {
                  variant: 'body1',
                  color: 'text.primary',
                  noWrap: !0,
                  children:
                    e.betAmount >= 0 ? e.betAmount : -1 * Number(e.betAmount)
                })
              })
            },
            {
              align: 'right',
              children: (0, A.jsx)(A.Fragment, {
                children: (0, A.jsx)(h.Z, {
                  variant: 'body1',
                  color: 'text.primary',
                  noWrap: !0,
                  children: e.totalAmount
                })
              })
            },
            {
              align: 'right',
              children: (0, A.jsx)(A.Fragment, {
                children: (0, A.jsxs)(m.Z, {
                  children: [
                    (0, A.jsx)(g.Z, {
                      expandIcon: (0, A.jsx)(o.Z, {}),
                      children: (0, A.jsx)(F.Z, { id: 'label.transactions' })
                    }),
                    (0, A.jsx)(p.Z, {
                      children: (0, A.jsx)(j.Z, {
                        component: P.Z,
                        children: (0, A.jsxs)(Z.Z, {
                          sx: { minWidth: 650 },
                          'aria-label': 'simple table',
                          children: [
                            (0, A.jsx)(u.Z, {
                              children: (0, A.jsxs)(b.Z, {
                                children: [
                                  (0, A.jsx)(v.Z, {
                                    align: 'left',
                                    children: 'Username'
                                  }),
                                  (0, A.jsx)(v.Z, {
                                    align: 'right',
                                    children: 'Type'
                                  }),
                                  (0, A.jsx)(v.Z, {
                                    align: 'right',
                                    children: 'Amount'
                                  }),
                                  (0, A.jsx)(v.Z, {
                                    align: 'right',
                                    children: 'At'
                                  })
                                ]
                              })
                            }),
                            e.transactions.map((e) =>
                              (0, A.jsxs)(
                                y.Z,
                                {
                                  children: [
                                    (0, A.jsx)(v.Z, {
                                      component: 'th',
                                      scope: 'row',
                                      children: e.username
                                    }),
                                    (0, A.jsx)(v.Z, {
                                      align: 'right',
                                      children: e.type
                                    }),
                                    (0, A.jsx)(v.Z, {
                                      align: 'right',
                                      children: e.amount
                                    }),
                                    (0, A.jsx)(v.Z, {
                                      align: 'right',
                                      children: B()(
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.createdAt
                                      ).format('dd/MM/yyyy HH:mm')
                                    })
                                  ]
                                },
                                e.id
                              )
                            )
                          ]
                        })
                      })
                    })
                  ]
                })
              })
            }
          ],
          tableHeader: [
            { align: 'right', title: 'label.games', name: 'details' },
            { align: 'right', title: 'label.bet.amount', name: 'betAmount' },
            { align: 'right', title: 'label.total.amount', name: 'betAmount' },
            { align: 'right', title: 'label.details', name: 'details' },
            { align: 'right', title: 'label.actions' }
          ],
          tableFilter: (e) => {
            let { type: t, dateFrom: n, dateTo: i } = e;
            return [
              (0, A.jsx)(
                T.M,
                {
                  label: (0, A.jsx)(F.Z, { id: 'label.from' }),
                  onChange: n.onChange
                },
                'label.from'
              ),
              (0, A.jsx)(
                T.M,
                {
                  label: (0, A.jsx)(F.Z, { id: 'label.to' }),
                  onChange: i.onChange
                },
                'label.to'
              ),
              (0, A.jsxs)(
                f.Z,
                {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, A.jsx)(w.Z, {
                      id: 'Type',
                      children: (0, A.jsx)(F.Z, { id: 'label.type' })
                    }),
                    (0, A.jsxs)(k.Z, {
                      labelId: 'Type',
                      value: t.value,
                      label: (0, A.jsx)(F.Z, { id: 'label.type' }),
                      onChange: (e) => t.onChange(e.target.value),
                      children: [
                        (0, A.jsx)(C.Z, {
                          value: '',
                          children: (0, A.jsx)('em', { children: 'Default' })
                        }),
                        S.s.map((e) =>
                          (0, A.jsx)(
                            C.Z,
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
                },
                'label.type'
              )
            ];
          }
        }),
        z = 'title.betting-history',
        D = () => {
          const { tableBody: e, tableHeader: t, tableFilter: n } = O(),
            { visible: o, hide: d, show: c } = (0, s.d)(),
            [h, x] = (0, i.useState)([]),
            [m, g] = (0, i.useState)({
              page: 0,
              size: 10,
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: '',
              dateFrom: '',
              dateTo: ''
            }),
            {
              data: p,
              isFetching: j,
              refetch: Z
            } = (0, r.lo)(
              {
                id: 1,
                page: m.page,
                size: m.size,
                search: m.search,
                dateFrom: m.dateFrom,
                dateTo: m.dateTo,
                type: m.type
              },
              { refetchOnMountOrArgChange: !0 }
            );
          (0, i.useEffect)(() => {
            p &&
              x(() => {
                var e;
                return (0, l.TY)(
                  p.data.data,
                  (null === (e = t[m.sortBy]) || void 0 === e
                    ? void 0
                    : e.name) || '',
                  m.sortDirection
                );
              });
          }, [p, m.sortBy, m.sortDirection]);
          return (0, A.jsx)(A.Fragment, {
            children: (0, A.jsx)(a.Z, {
              data: h,
              totalItems:
                null === p || void 0 === p ? void 0 : p.data.totalItems,
              tableHeader: t,
              tableBody: e,
              breadcrumbs: [],
              isLoading: j,
              pagination: m,
              onPagination: g,
              tableFilter: n({
                type: { value: m.type, onChange: (e) => g({ ...m, type: e }) },
                dateFrom: {
                  value: m.dateFrom,
                  onChange: (e) => g({ ...m, dateFrom: (0, l.Zd)(e, 'from') })
                },
                dateTo: {
                  value: m.dateTo,
                  onChange: (e) => g({ ...m, dateTo: (0, l.Zd)(e, 'to') })
                }
              }),
              title: z,
              headerTitle: z
            })
          });
        };
    },
    4732: (e, t, n) => {
      n.d(t, { Z: () => a });
      var i = n(2791);
      const a = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [n, a] = (0, i.useState)(e);
        return (
          (0, i.useEffect)(() => {
            const n = setTimeout(() => {
              a(e);
            }, t);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          n
        );
      };
    },
    5850: (e, t, n) => {
      n.d(t, { TY: () => r, Zd: () => l });
      var i = n(2426),
        a = n.n(i);
      const r = (e, t, n) =>
          [...e].sort((e, i) =>
            'string' === typeof e[t] && 'string' === typeof i[t]
              ? 'asc' === n
                ? e[t].localeCompare(i[t])
                : i[t].localeCompare(e[t])
              : 'number' === typeof e[t] && 'number' === typeof i[t]
              ? 'asc' === n
                ? e[t] - i[t]
                : i[t] - e[t]
              : 0
          ),
        l = (e, t) => {
          if ('to' === t) {
            return a()(e).endOf('day').utc().toISOString();
          }
          return a()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=79.ac159810.chunk.js.map
