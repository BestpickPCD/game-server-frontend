'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [967],
  {
    10173: (e, t, i) => {
      i.d(t, { Z: () => c });
      var n = i(66934),
        r = i(89164),
        a = i(697),
        l = i(20890),
        s = i(4349),
        o = i(80184);
      const d = (0, n.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n        margin-top: '.concat(t.spacing(4), ';\n');
        }),
        c = () =>
          (0, o.jsx)(d, {
            className: 'footer-wrapper',
            children: (0, o.jsxs)(a.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, o.jsx)(a.Z, {
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
    57891: (e, t, i) => {
      i.d(t, { Z: () => m });
      var n = i(53329),
        r = i(39709),
        a = i(94721),
        l = i(89164),
        s = i(94294),
        o = i(5574),
        d = i(65661),
        c = i(90493),
        h = i(4349),
        x = i(80184);
      const m = function (e) {
        let {
          title: t,
          children: i,
          open: m,
          isLoading: p = !1,
          onClose: u,
          onOk: Z,
          ...g
        } = e;
        return (0, x.jsxs)(o.Z, {
          onClose: u,
          open: m,
          ...g,
          children: [
            t && (0, x.jsx)(d.Z, { variant: 'h4', children: t }),
            t && (0, x.jsx)(a.Z, {}),
            (0, x.jsx)(c.Z, { sx: { pt: 0 }, children: i }),
            (0, x.jsx)(a.Z, {}),
            (0, x.jsxs)(l.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, x.jsx)(s.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: u,
                  children: (0, x.jsx)(h.Z, { id: 'label.cancel' })
                }),
                Z &&
                  (0, x.jsx)(r.Z, {
                    onClick: Z,
                    loading: p,
                    loadingPosition: 'start',
                    startIcon: (0, x.jsx)(n.Z, {}),
                    variant: 'contained',
                    sx: { width: '90px' },
                    type: 'submit',
                    children: (0, x.jsx)(h.Z, { id: 'label.OK' })
                  })
              ]
            })
          ]
        });
      };
    },
    68418: (e, t, i) => {
      i.d(t, { Z: () => o });
      var n = i(66934),
        r = i(697),
        a = i(89164),
        l = i(80184);
      const s = (0, n.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        o = (e) => {
          let { children: t } = e;
          return (0, l.jsx)(s, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(a.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    23481: (e, t, i) => {
      i.d(t, { Z: () => g });
      var n = i(61889),
        r = i(20890),
        a = i(697),
        l = i(94294),
        s = i(74696),
        o = i(72791),
        d = i(98333),
        c = i(93517),
        h = i(16871),
        x = i(43504),
        m = i(4349),
        p = i(80184);
      const u = (e) => {
          let { links: t = [] } = e;
          const i = (0, h.TH)();
          return (0, p.jsx)(c.Z, {
            separator: (0, p.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map((e, n) =>
              n === t.length - 1
                ? (0, p.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, p.jsx)(m.Z, { id: e.name })
                    },
                    n
                  )
                : (0, p.jsx)(
                    x.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        i.pathname,
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
                        children: (0, p.jsx)(m.Z, { id: e.name })
                      })
                    },
                    n
                  )
            )
          });
        },
        Z = (e) => {
          let {
            headerTitle: t,
            headerSubtitle: i,
            breadcrumbs: o,
            onOpenModal: d
          } = e;
          return (0, p.jsxs)(n.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, p.jsxs)(n.ZP, {
                item: !0,
                children: [
                  (0, p.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, p.jsx)(m.Z, { id: t })
                  }),
                  (0, p.jsx)(r.Z, { variant: 'subtitle2', children: i }),
                  o &&
                    (0, p.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, p.jsx)(u, { links: o })
                    })
                ]
              }),
              d &&
                (0, p.jsx)(n.ZP, {
                  item: !0,
                  children: (0, p.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, p.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, p.jsx)(m.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        g = (0, o.memo)(Z);
    },
    96790: (e, t, i) => {
      i.d(t, { Z: () => ee });
      var n = i(89164),
        r = i(61889),
        a = i(72791),
        l = i(6907),
        s = i(93539),
        o = i(10173),
        d = i(68418),
        c = i(23481),
        h = i(30168),
        x = i(68036),
        m = i(31675),
        p = i(5403),
        u = i(21686),
        Z = i(39709),
        g = i(66934),
        j = i(13967),
        v = i(97639),
        b = i(20890),
        y = i(94294),
        f = i(13400),
        w = i(57621),
        C = i(697),
        k = i(94721),
        T = i(48550),
        P = i(39281),
        I = i(79836),
        S = i(91048),
        B = i(35855),
        O = i(53994),
        R = i(94454),
        D = i(80720),
        L = i(53382),
        E = i(13239),
        z = i(63033),
        F = i(87837),
        A = i(71715),
        W = i(90493),
        M = i(15021),
        H = i(49900),
        q = i(74934),
        N = i(80184);
      const U = (0, g.ZP)(y.Z)((e) => {
          let { theme: t } = e;
          return '\n     background: '
            .concat(t.colors.error.main, ';\n     color: ')
            .concat(
              t.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(t.colors.error.dark, ';\n     }\n    ');
        }),
        V = () => {
          const { toggle: e, visible: t } = (0, F.d)(),
            i = (0, a.useRef)(null);
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsxs)(C.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, N.jsxs)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, N.jsx)(b.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, N.jsx)(U, {
                        sx: { ml: 1 },
                        startIcon: (0, N.jsx)(x.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, N.jsx)(f.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: i,
                    sx: { ml: 2, p: 1 },
                    children: (0, N.jsx)(q.Z, {})
                  })
                ]
              }),
              (0, N.jsx)(A.Z, {
                keepMounted: !0,
                anchorEl: i.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, N.jsxs)(W.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, N.jsx)(M.ZP, {
                      button: !0,
                      children: (0, N.jsx)(H.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, N.jsx)(M.ZP, {
                      button: !0,
                      children: (0, N.jsx)(H.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
      var _,
        G = i(92810),
        Y = i(64732),
        J = i(4349);
      const K = (0, g.ZP)(Z.Z)(
          _ ||
            (_ = (0, h.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        X = (e) => {
          let {
            data: t,
            tableHeader: i,
            isLoading: r,
            pagination: l,
            totalItems: s = 0,
            tableFilter: o,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: h,
            onDelete: Z,
            onUpdate: g,
            onPagination: A
          } = e;
          const W = (0, j.Z)(),
            { visible: M, show: H, hide: q } = (0, F.d)(),
            [U, _] = (0, a.useState)(''),
            [X, Q] = (0, a.useState)([]),
            [$, ee] = (0, a.useState)(''),
            te = (0, Y.Z)($, 500);
          (0, a.useEffect)(() => {
            A({ ...l, search: te });
          }, [te]);
          const ie = X.length > 0 && X.length < t.length,
            ne = X.length === t.length,
            re = (e) => {
              H(), _(e);
            },
            ae = (e) => {
              Z(e), q();
            },
            le = (0, a.useMemo)(
              () => (Z || g || '' !== i[i.length - 1].name || i.pop(), i),
              [Z, g, i]
            ),
            se = (e) => {
              let {
                item: t,
                hide: i,
                onDelete: r,
                handleShow: a,
                rowId: l,
                visible: s,
                theme: o,
                isLoading: d
              } = e;
              return (0, N.jsx)(v.Z, {
                title: (0, N.jsxs)(n.Z, {
                  children: [
                    (0, N.jsx)(b.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, N.jsxs)(n.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, N.jsx)(y.Z, {
                          variant: 'outlined',
                          onClick: i,
                          children: 'No'
                        }),
                        (0, N.jsx)(K, {
                          onClick: () => ae(t.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, N.jsx)(u.Z, {}),
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
                children: (0, N.jsx)(f.Z, {
                  sx: {
                    '&:hover': { background: o.colors.error.lighter },
                    color: o.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => a(t.id),
                  children: (0, N.jsx)(x.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, N.jsxs)(w.Z, {
            children: [
              c &&
                (null === X || void 0 === X ? void 0 : X.length) > 0 &&
                (0, N.jsx)(C.Z, { flex: 1, p: 2, children: (0, N.jsx)(V, {}) }),
              (0, N.jsx)(k.Z, {}),
              (0, N.jsxs)(w.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, N.jsxs)(C.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, N.jsx)(T.Z, {
                        label: (0, N.jsx)(J.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, N.jsx)(f.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, N.jsx)(p.Z, {})
                      })
                    ]
                  }),
                  (0, N.jsx)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map((e, t) => (0, N.jsx)(C.Z, { children: e }, t))
                  })
                ]
              }),
              (0, N.jsx)(P.Z, {
                children: (0, N.jsxs)(I.Z, {
                  children: [
                    (0, N.jsx)(S.Z, {
                      children: (0, N.jsxs)(B.Z, {
                        children: [
                          c &&
                            (0, N.jsx)(O.Z, {
                              padding: 'checkbox',
                              children: (0, N.jsx)(R.Z, {
                                color: 'primary',
                                checked: ne,
                                indeterminate: ie,
                                onChange: (e) => {
                                  Q(e.target.checked ? t.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, t) =>
                            (0, N.jsx)(
                              O.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, N.jsx)(D.Z, {
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
                                          A(t);
                                        })(t),
                                      children: (0, N.jsx)(J.Z, { id: e.title })
                                    })
                                  : (0, N.jsx)(J.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, G.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, N.jsxs)(L.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !t || t.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        t.map((e) => {
                          var t;
                          const i = X.includes(e.id);
                          return (0, N.jsxs)(
                            B.Z,
                            {
                              hover: !0,
                              selected: i,
                              children: [
                                c &&
                                  (0, N.jsx)(
                                    O.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, N.jsx)(R.Z, {
                                        color: 'primary',
                                        checked: i,
                                        onChange: (t) => {
                                          return (
                                            (i = e.id),
                                            void (X.includes(i)
                                              ? Q((e) =>
                                                  e.filter((e) => e !== i)
                                                )
                                              : Q((e) => [...e, i]))
                                          );
                                          var i;
                                        },
                                        value: i
                                      })
                                    },
                                    (0, G.Z)()
                                  ),
                                null === (t = h(e)) || void 0 === t
                                  ? void 0
                                  : t.map((e) =>
                                      (0, N.jsx)(
                                        O.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, G.Z)()
                                      )
                                    ),
                                (g || Z) &&
                                  (0, N.jsxs)(
                                    O.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, N.jsx)(v.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        g &&
                                          (0, N.jsx)(v.Z, {
                                            title: (0, N.jsx)(J.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, N.jsx)(f.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    W.colors.primary.lighter
                                                },
                                                color: W.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => g(e.id),
                                              children: (0, N.jsx)(m.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        Z &&
                                          se({
                                            item: e,
                                            rowId: U,
                                            visible: M,
                                            theme: W,
                                            isLoading: r,
                                            handleShow: re,
                                            onDelete: Z,
                                            hide: q
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
                        r &&
                          (0, N.jsx)(B.Z, {
                            children: (0, N.jsx)(O.Z, {
                              children: (0, N.jsx)(C.Z, {
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
                                children: (0, N.jsx)(E.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, N.jsx)(C.Z, {
                p: 2,
                children: (0, N.jsx)(z.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: (e, t) => {
                    A({ ...l, page: t });
                  },
                  onRowsPerPageChange: (e) => {
                    A({ ...l, size: Number(e.target.value) });
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
        Q = (0, a.memo)(X),
        $ = (e) => {
          let {
            title: t,
            data: i = [],
            tableHeader: a = [{ align: 'inherit', title: 'Title' }],
            headerTitle: h = '',
            headerSubtitle: x = '',
            isLoading: m = !1,
            breadcrumbs: p,
            pagination: u,
            tableFilter: Z,
            totalItems: g,
            extraOptions: j,
            isShowBulkActions: v = !0,
            onOpenModal: b,
            tableBody: y,
            onDelete: f,
            onUpdate: w,
            onPagination: C
          } = e;
          const k = (0, s.Z)();
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(l.ql, {
                children: (0, N.jsx)('title', {
                  children: k.formatMessage({ id: t })
                })
              }),
              (0, N.jsx)(d.Z, {
                children: (0, N.jsx)(c.Z, {
                  headerTitle: h,
                  headerSubtitle: x,
                  onOpenModal: b,
                  breadcrumbs: p
                })
              }),
              (0, N.jsx)(n.Z, {
                maxWidth: 'lg',
                children: (0, N.jsx)(r.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, N.jsx)(r.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, N.jsx)(Q, {
                      data: i,
                      totalItems: g,
                      tableHeader: a,
                      tableBody: y,
                      isLoading: m,
                      onDelete: f,
                      onUpdate: w,
                      onPagination: C,
                      pagination: u,
                      tableFilter: Z,
                      extraOptions: j,
                      isShowBulkActions: v
                    })
                  })
                })
              }),
              (0, N.jsx)(o.Z, {})
            ]
          });
        },
        ee = (0, a.memo)($);
    },
    76967: (e, t, i) => {
      i.r(t), i.d(t, { default: () => B });
      var n = i(39709),
        r = i(5574),
        a = i(697),
        l = i(61889),
        s = i(20890),
        o = i(48550),
        d = i(72791),
        c = i(95048),
        h = i(61134),
        x = i(96790),
        m = i(32302),
        p = i(25850),
        u = i(87837),
        Z = i(44695),
        g = i(99321),
        j = i(23786),
        v = i(57891),
        b = i(17945),
        y = i(8007),
        f = i(80184);
      const w = y
          .Ry()
          .shape({
            limitType: y.Z_().required('limitType is required!'),
            limitTypeId: y.Z_().required('limitTypeId is required!'),
            limit: y
              .Rx()
              .nullable()
              .positive('limit must be positive')
              .required('limit is required!')
          }),
        C = (e) => {
          let { open: t, detail: i, onClose: n, refetch: r, hide: l } = e;
          const { notify: s, message: c } = (0, u.p)(),
            [x, { isLoading: p }] = (0, m.CQ)(),
            [y, { isLoading: C }] = (0, m.U4)(),
            {
              register: k,
              setValue: T,
              handleSubmit: P,
              reset: I,
              formState: { errors: S }
            } = (0, h.cI)({
              resolver: (0, Z.X)(w),
              defaultValues: { limitType: '', limitTypeId: '', limit: 0 }
            });
          (0, d.useEffect)(() => {
            null !== i && void 0 !== i && i.id
              ? (T('limitType', i.limitType),
                T('limitTypeId', i.limitTypeId),
                T('limit', i.limit))
              : I();
          }, [i]);
          const [B, O] = (0, d.useState)(''),
            [R, D] = (0, d.useState)(''),
            [L, E] = (0, d.useState)([]),
            [z] = (0, b.WK)();
          return (0, f.jsx)(v.Z, {
            title:
              null !== i && void 0 !== i && i._id
                ? 'Edit '.concat(i.name)
                : 'Add new Game',
            onClose: n,
            open: t,
            onOk: P(async (e) => {
              try {
                null !== i && void 0 !== i && i.id
                  ? await y({
                      id: null === i || void 0 === i ? void 0 : i.id,
                      body: e
                    }).unwrap()
                  : await x(e).unwrap(),
                  s({
                    message:
                      null !== i && void 0 !== i && i._id
                        ? c.UPDATED
                        : c.CREATED
                  }),
                  r(),
                  l(),
                  I();
              } catch (t) {
                s({ message: c.ERROR, type: 'error' });
              }
            }),
            isLoading: p || C,
            children: (0, f.jsxs)(a.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, f.jsx)(a.Z, {
                  sx: { my: 2 },
                  children: (0, f.jsxs)(g.Z, {
                    fullWidth: !0,
                    name: 'limitType',
                    value: B,
                    required: !0,
                    ...k('limitType'),
                    error: !!S.limitType,
                    label: 'Type',
                    onChange: (e) => {
                      const t = e.target.value;
                      O(t),
                        (async (e) => {
                          let t;
                          var i;
                          (t =
                            'vendor' === e
                              ? null !== (i = (await z({})).data) &&
                                void 0 !== i
                                ? i
                                : []
                              : 'type' === e
                              ? [
                                  { id: 'baccarat', name: '' },
                                  { id: 'dragontiger', name: 'Dragon Tiger' },
                                  { id: 'topcard', name: 'Topcard' },
                                  { id: 'blackjack', name: 'Black Jack' },
                                  {
                                    id: 'americanroulette',
                                    name: 'American Roulette'
                                  },
                                  { id: 'roulette', name: 'Roulette' }
                                ]
                              : [{ id: '', name: 'Please Select a Type' }]),
                            E(t);
                        })(t);
                    },
                    children: [
                      (0, f.jsx)(j.Z, { value: 'all', children: 'All' }),
                      (0, f.jsx)(j.Z, {
                        selected: !0,
                        value: 'game',
                        children: 'Game'
                      }),
                      (0, f.jsx)(j.Z, { value: 'type', children: 'Type' }),
                      (0, f.jsx)(j.Z, { value: 'vendor', children: 'Vendor' })
                    ]
                  })
                }),
                (0, f.jsx)(a.Z, {
                  sx: { my: 2 },
                  children: (0, f.jsx)(g.Z, {
                    fullWidth: !0,
                    name: 'limitTypeId',
                    value: R,
                    required: !0,
                    ...k('limitTypeId'),
                    error: !!S.limitTypeId,
                    label: 'Name(id)',
                    onChange: (e) => {
                      const t = e.target.value;
                      D(t);
                    },
                    children: L.map((e) =>
                      (0, f.jsx)(
                        j.Z,
                        { selected: 3 == e.id, value: e.id, children: e.name },
                        e.id
                      )
                    )
                  })
                }),
                (0, f.jsx)(o.Z, {
                  type: 'number',
                  fullWidth: !0,
                  label: 'limit',
                  sx: { my: 2 },
                  required: !0,
                  error: !!S.limit,
                  helperText: S.limit ? S.limit.message : '',
                  autoComplete: 'off',
                  ...k('limit')
                })
              ]
            })
          });
        };
      var k = i(68096),
        T = i(94925),
        P = i(4349);
      const I = () => {
          const { visible: e, toggle: t } = (0, u.d)(),
            [i, n] = (0, d.useState)();
          return {
            tableBody: (e) => [
              {
                align: 'inherit',
                children: (0, f.jsx)(f.Fragment, {
                  children: (0, f.jsx)(s.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.limitType
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, f.jsx)(f.Fragment, {
                  children: (0, f.jsx)(s.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.limitTypeId
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, f.jsx)(f.Fragment, {
                  children: (0, f.jsx)(s.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.limit
                  })
                })
              }
            ],
            tableHeader: [
              { align: 'inherit', title: 'label.type', name: 'type' },
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.limit', name: 'limit' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: (e) => {
              let { type: t } = e;
              return [
                (0, f.jsxs)(k.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, f.jsx)(T.Z, {
                      id: 'isActive',
                      children: (0, f.jsx)(P.Z, { id: 'label.type' })
                    }),
                    (0, f.jsxs)(g.Z, {
                      labelId: 'isActive',
                      value: t.value,
                      label: 'Type',
                      onChange: (e) => t.onChange(e.target.value),
                      children: [
                        (0, f.jsx)(j.Z, {
                          value: '',
                          children: (0, f.jsx)('em', {
                            children: (0, f.jsx)(P.Z, { id: 'label.default' })
                          })
                        }),
                        (0, f.jsx)(j.Z, {
                          value: 'all',
                          children: (0, f.jsx)(P.Z, { id: 'label.all' })
                        }),
                        (0, f.jsx)(j.Z, {
                          value: 'vendor',
                          children: (0, f.jsx)(P.Z, { id: 'label.vendor' })
                        }),
                        (0, f.jsx)(j.Z, {
                          value: 'game',
                          children: (0, f.jsx)(P.Z, { id: 'label.game' })
                        }),
                        (0, f.jsx)(j.Z, {
                          value: 'type',
                          children: (0, f.jsx)(P.Z, { id: 'label.type' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            user: i,
            toggle: t,
            visible: e
          };
        },
        S = 'title.bet-set',
        B = () => {
          const e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: S }
            ],
            { visible: t, hide: i, show: Z } = (0, u.d)(),
            { reset: g } = (0, h.cI)(),
            { notify: j, message: v } = (0, u.p)(),
            {
              tableBody: b,
              tableHeader: y,
              tableFilter: w,
              visible: k,
              toggle: T,
              user: B
            } = I(),
            [O, R] = (0, d.useState)([]),
            [D, L] = (0, d.useState)(),
            [E, z] = (0, d.useState)({
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
            { permissions: F } = (0, c.v9)((e) => e.common),
            [A] = (0, m.HJ)(),
            [W, { isLoading: M }] = (0, m.Rw)(),
            [H, { isLoading: q }] = (0, m.Dx)({}),
            {
              data: N,
              isFetching: U,
              refetch: V
            } = (0, m.XG)({
              refetchOnMountOrArgChange: !0,
              skip:
                ((_ = F),
                (G = 'get'),
                !(null === _ || void 0 === _ ? void 0 : _.includes(G)))
            });
          var _, G;
          const [Y, J] = (0, d.useState)({
            receiverUsername: '',
            amount: 0,
            type: 'add',
            note: ''
          });
          (0, d.useEffect)(() => {
            (Y.receiverUsername =
              null === B || void 0 === B ? void 0 : B.username),
              J((e) => ({ ...e, status: 'success' }));
          }, [B]),
            (0, d.useEffect)(() => {
              N &&
                R(() => {
                  var e;
                  return (0, p.TY)(
                    N.data,
                    null === (e = y[E.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    E.sortDirection
                  );
                });
            }, [N, E]);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(x.Z, {
                title: S,
                data: O,
                totalItems:
                  null === N || void 0 === N ? void 0 : N.data.totalItems,
                tableHeader: y,
                tableBody: b,
                headerTitle: S,
                breadcrumbs: e,
                onOpenModal: () => {
                  Z(), L(null);
                },
                isLoading: U || M,
                onDelete: async (e) => {
                  try {
                    await W({ id: Number(e) }).unwrap(),
                      j({ message: v.DELETED }),
                      V();
                  } catch (t) {
                    j({ message: v.ERROR, type: 'error' });
                  }
                },
                onUpdate: async (e) => {
                  try {
                    const t = await A({ id: Number(e) }).unwrap();
                    Z(), L(t.data);
                  } catch (t) {
                    j({ message: v.ERROR, type: 'error' });
                  }
                },
                pagination: E,
                onPagination: z,
                tableFilter: w({
                  type: { value: E.type, onChange: (e) => z({ ...E, type: e }) }
                })
              }),
              (0, f.jsx)(C, {
                open: t,
                detail: D,
                onClose: i,
                refetch: V,
                hide: i
              }),
              (0, f.jsx)(r.Z, {
                open: k,
                onClose: T,
                children: (0, f.jsx)(a.Z, {
                  component: 'form',
                  padding: 2,
                  children: (0, f.jsxs)(l.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, f.jsx)(l.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, f.jsx)(s.Z, {
                          gutterBottom: !0,
                          variant: 'h5',
                          component: 'div',
                          children: (0, f.jsx)(P.Z, {
                            id: 'title.add-transaction'
                          })
                        })
                      }),
                      (0, f.jsxs)(a.Z, {
                        justifyContent: 'center',
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '18px',
                        gap: '12px',
                        marginTop: '8px',
                        children: [
                          (0, f.jsx)(o.Z, {
                            label: 'Insert the amount here',
                            variant: 'outlined',
                            fullWidth: !0,
                            onInput: (e) => {
                              return (
                                (t = e.target.value),
                                (i = 'amount'),
                                void J((e) => ({ ...e, [''.concat(i)]: t }))
                              );
                              var t, i;
                            }
                          }),
                          (0, f.jsx)(n.Z, {
                            loading: q,
                            onClick: async () => {
                              try {
                                (await H(Y).unwrap()) &&
                                  (T(),
                                  j({ message: v.UPDATED }),
                                  V(),
                                  i(),
                                  g());
                              } catch (e) {
                                j({ message: v.ERROR, type: 'error' });
                              }
                            },
                            size: 'large',
                            variant: 'contained',
                            sx: { width: 120 },
                            children: (0, f.jsxs)(a.Z, {
                              children: [
                                (0, f.jsx)('span', { children: '+ \xa0' }),
                                (0, f.jsx)('span', { children: 'Add' })
                              ]
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
        };
    },
    64732: (e, t, i) => {
      i.d(t, { Z: () => r });
      var n = i(72791);
      const r = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [i, r] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            const i = setTimeout(() => {
              r(e);
            }, t);
            return () => {
              clearTimeout(i);
            };
          }, [e, t]),
          i
        );
      };
    },
    25850: (e, t, i) => {
      i.d(t, { TY: () => a, Zd: () => l });
      var n = i(72426),
        r = i.n(n);
      const a = (e, t, i) =>
          [...e].sort((e, n) =>
            'string' === typeof e[t] && 'string' === typeof n[t]
              ? 'asc' === i
                ? e[t].localeCompare(n[t])
                : n[t].localeCompare(e[t])
              : 'number' === typeof e[t] && 'number' === typeof n[t]
              ? 'asc' === i
                ? e[t] - n[t]
                : n[t] - e[t]
              : 0
          ),
        l = (e, t) => {
          if ('to' === t) {
            return r()(e).endOf('day').utc().toISOString();
          }
          return r()(e).startOf('day').utc().toISOString();
        };
    },
    53329: (e, t, i) => {
      var n = i(64836);
      t.Z = void 0;
      var r = n(i(45649)),
        a = i(80184),
        l = (0, r.default)(
          (0, a.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      t.Z = l;
    },
    57621: (e, t, i) => {
      i.d(t, { Z: () => g });
      var n = i(87462),
        r = i(63366),
        a = i(72791),
        l = i(59278),
        s = i(94419),
        o = i(66934),
        d = i(31402),
        c = i(35527),
        h = i(75878),
        x = i(21217);
      function m(e) {
        return (0, x.Z)('MuiCard', e);
      }
      (0, h.Z)('MuiCard', ['root']);
      var p = i(80184);
      const u = ['className', 'raised'],
        Z = (0, o.ZP)(c.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: (e, t) => t.root
        })(() => ({ overflow: 'hidden' })),
        g = a.forwardRef(function (e, t) {
          const i = (0, d.Z)({ props: e, name: 'MuiCard' }),
            { className: a, raised: o = !1 } = i,
            c = (0, r.Z)(i, u),
            h = (0, n.Z)({}, i, { raised: o }),
            x = ((e) => {
              const { classes: t } = e;
              return (0, s.Z)({ root: ['root'] }, m, t);
            })(h);
          return (0,
          p.jsx)(Z, (0, n.Z)({ className: (0, l.Z)(x.root, a), elevation: o ? 8 : void 0, ref: t, ownerState: h }, c));
        });
    }
  }
]);
//# sourceMappingURL=967.827b50ae.chunk.js.map
