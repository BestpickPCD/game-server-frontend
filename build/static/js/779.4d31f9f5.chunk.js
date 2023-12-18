'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [779],
  {
    173: function (e, n, t) {
      var r = t(6934),
        i = t(9164),
        a = t(4554),
        o = t(890),
        l = t(4349),
        s = t(184),
        d = (0, r.ZP)(i.Z)(function (e) {
          var n = e.theme;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function () {
        return (0, s.jsx)(d, {
          className: 'footer-wrapper',
          children: (0, s.jsxs)(a.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, s.jsx)(a.Z, {
                children: (0, s.jsxs)(o.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, s.jsx)(l.Z, { id: 'footer.admin' })]
                })
              }),
              (0, s.jsx)(o.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    7891: function (e, n, t) {
      var r = t(1413),
        i = t(5987),
        a = t(3329),
        o = t(9709),
        l = t(4721),
        s = t(9164),
        d = t(6151),
        c = t(5574),
        u = t(5661),
        h = t(493),
        x = t(4349),
        p = t(184),
        Z = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          g = e.open,
          f = e.isLoading,
          m = void 0 !== f && f,
          j = e.onClose,
          v = e.onOk,
          b = (0, i.Z)(e, Z);
        return (0, p.jsxs)(
          c.Z,
          (0, r.Z)(
            (0, r.Z)({ onClose: j, open: g }, b),
            {},
            {
              children: [
                n && (0, p.jsx)(u.Z, { variant: 'h4', children: n }),
                n && (0, p.jsx)(l.Z, {}),
                (0, p.jsx)(h.Z, { sx: { pt: 0 }, children: t }),
                (0, p.jsx)(l.Z, {}),
                (0, p.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, p.jsx)(d.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: j,
                      children: (0, p.jsx)(x.Z, { id: 'label.cancel' })
                    }),
                    v &&
                      (0, p.jsx)(o.Z, {
                        onClick: v,
                        loading: m,
                        loadingPosition: 'start',
                        startIcon: (0, p.jsx)(a.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, p.jsx)(x.Z, { id: 'label.OK' })
                      })
                  ]
                })
              ]
            }
          )
        );
      };
    },
    8418: function (e, n, t) {
      var r = t(6934),
        i = t(4554),
        a = t(9164),
        o = t(184),
        l = (0, r.ZP)(i.Z)(function (e) {
          var n = e.theme;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function (e) {
        var n = e.children;
        return (0, o.jsx)(l, {
          className: 'MuiPageTitle-wrapper',
          children: (0, o.jsx)(a.Z, { maxWidth: 'lg', children: n })
        });
      };
    },
    3481: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        }
      });
      var r = t(1889),
        i = t(890),
        a = t(4554),
        o = t(6151),
        l = t(4696),
        s = t(2791),
        d = t(8333),
        c = t(3517),
        u = t(6871),
        h = t(3504),
        x = t(4349),
        p = t(184),
        Z = function (e) {
          var n = e.links,
            t = void 0 === n ? [] : n,
            r = (0, u.TH)();
          return (0, p.jsx)(c.Z, {
            separator: (0, p.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (e, n) {
              return n === t.length - 1
                ? (0, p.jsx)(
                    i.Z,
                    {
                      color: 'inherit',
                      children: (0, p.jsx)(x.Z, { id: e.name })
                    },
                    n
                  )
                : (0, p.jsx)(
                    h.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        r.pathname,
                      onClick:
                        (null === e || void 0 === e ? void 0 : e.onClick) &&
                        e.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, p.jsx)(i.Z, {
                        color: 'inherit',
                        children: (0, p.jsx)(x.Z, { id: e.name })
                      })
                    },
                    n
                  );
            })
          });
        },
        g = function (e) {
          var n = e.headerTitle,
            t = e.headerSubtitle,
            s = e.breadcrumbs,
            d = e.onOpenModal;
          return (0, p.jsxs)(r.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, p.jsxs)(r.ZP, {
                item: !0,
                children: [
                  (0, p.jsx)(i.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, p.jsx)(x.Z, { id: n })
                  }),
                  (0, p.jsx)(i.Z, { variant: 'subtitle2', children: t }),
                  s &&
                    (0, p.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, p.jsx)(Z, { links: s })
                    })
                ]
              }),
              d &&
                (0, p.jsx)(r.ZP, {
                  item: !0,
                  children: (0, p.jsx)(o.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, p.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, p.jsx)(x.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        f = (0, s.memo)(g);
    },
    6790: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return re;
        }
      });
      var r,
        i = t(9164),
        a = t(1889),
        o = t(2791),
        l = t(6907),
        s = t(3539),
        d = t(173),
        c = t(8418),
        u = t(3481),
        h = t(1413),
        x = t(3433),
        p = t(9439),
        Z = t(168),
        g = t(8036),
        f = t(1675),
        m = t(5403),
        j = t(1686),
        v = t(9709),
        b = t(6934),
        y = t(3967),
        k = t(7639),
        C = t(890),
        w = t(6151),
        P = t(3400),
        I = t(7621),
        T = t(4554),
        S = t(4721),
        F = t(8550),
        O = t(9281),
        D = t(9836),
        L = t(1048),
        B = t(5855),
        E = t(3994),
        R = t(4454),
        z = t(720),
        W = t(3382),
        q = t(3239),
        M = t(3033),
        H = t(7837),
        A = t(1715),
        U = t(493),
        _ = t(5021),
        N = t(9900),
        G = t(4934),
        V = t(184),
        Y = (0, b.ZP)(w.Z)(function (e) {
          var n = e.theme;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        K = function () {
          var e = (0, H.d)(),
            n = e.toggle,
            t = e.visible,
            r = (0, o.useRef)(null);
          return (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsxs)(T.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, V.jsxs)(T.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, V.jsx)(C.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, V.jsx)(Y, {
                        sx: { ml: 1 },
                        startIcon: (0, V.jsx)(g.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, V.jsx)(P.Z, {
                    color: 'primary',
                    onClick: n,
                    ref: r,
                    sx: { ml: 2, p: 1 },
                    children: (0, V.jsx)(G.Z, {})
                  })
                ]
              }),
              (0, V.jsx)(A.Z, {
                keepMounted: !0,
                anchorEl: r.current,
                open: t,
                onClose: n,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, V.jsxs)(U.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, V.jsx)(_.ZP, {
                      button: !0,
                      children: (0, V.jsx)(N.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, V.jsx)(_.ZP, {
                      button: !0,
                      children: (0, V.jsx)(N.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        X = t(2810),
        J = t(4732),
        Q = t(4349),
        $ = (0, b.ZP)(v.Z)(
          r ||
            (r = (0, Z.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        ee = function (e) {
          var n = e.data,
            t = e.tableHeader,
            r = e.isLoading,
            a = e.pagination,
            l = e.totalItems,
            s = void 0 === l ? 0 : l,
            d = e.tableFilter,
            c = e.extraOptions,
            u = e.tableBody,
            Z = e.onDelete,
            v = e.onUpdate,
            b = e.onPagination,
            A = (0, y.Z)(),
            U = (0, H.d)(),
            _ = U.visible,
            N = U.show,
            G = U.hide,
            Y = (0, o.useState)(''),
            ee = (0, p.Z)(Y, 2),
            ne = ee[0],
            te = ee[1],
            re = (0, o.useState)([]),
            ie = (0, p.Z)(re, 2),
            ae = ie[0],
            oe = ie[1],
            le = (0, o.useState)(''),
            se = (0, p.Z)(le, 2),
            de = se[0],
            ce = se[1],
            ue = (0, J.Z)(de, 500);
          (0, o.useEffect)(
            function () {
              b((0, h.Z)((0, h.Z)({}, a), {}, { search: ue }));
            },
            [ue]
          );
          var he = ae.length > 0 && ae.length < n.length,
            xe = ae.length === n.length,
            pe = function (e) {
              N(), te(e);
            },
            Ze = function (e) {
              Z(e), G();
            },
            ge = (0, o.useMemo)(
              function () {
                return Z || v || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [Z, v, t]
            ),
            fe = function (e) {
              var n = e.item,
                t = e.hide,
                r = (e.onDelete, e.handleShow),
                a = e.rowId,
                o = e.visible,
                l = e.theme,
                s = e.isLoading;
              return (0, V.jsx)(k.Z, {
                title: (0, V.jsxs)(i.Z, {
                  children: [
                    (0, V.jsx)(C.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, V.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, V.jsx)(w.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, V.jsx)($, {
                          onClick: function () {
                            return Ze(n.id);
                          },
                          loading: s,
                          loadingPosition: 'start',
                          startIcon: (0, V.jsx)(j.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: n.id === a && o && !s,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, V.jsx)(P.Z, {
                  sx: {
                    '&:hover': { background: l.colors.error.lighter },
                    color: l.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return r(n.id);
                  },
                  children: (0, V.jsx)(g.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, V.jsxs)(I.Z, {
            children: [
              (null === ae || void 0 === ae ? void 0 : ae.length) > 0 &&
                (0, V.jsx)(T.Z, { flex: 1, p: 2, children: (0, V.jsx)(K, {}) }),
              (0, V.jsx)(S.Z, {}),
              (0, V.jsxs)(I.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, V.jsxs)(T.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, V.jsx)(F.Z, {
                        label: (0, V.jsx)(Q.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (e) {
                          return ce(e.target.value.trim());
                        }
                      }),
                      (0, V.jsx)(P.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, V.jsx)(m.Z, {})
                      })
                    ]
                  }),
                  (0, V.jsx)(T.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, n) {
                            return (0, V.jsx)(T.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, V.jsx)(O.Z, {
                children: (0, V.jsxs)(D.Z, {
                  children: [
                    (0, V.jsx)(L.Z, {
                      children: (0, V.jsxs)(B.Z, {
                        children: [
                          (0, V.jsx)(E.Z, {
                            padding: 'checkbox',
                            children: (0, V.jsx)(R.Z, {
                              color: 'primary',
                              checked: xe,
                              indeterminate: he,
                              onChange: function (e) {
                                oe(
                                  e.target.checked
                                    ? n.map(function (e) {
                                        return e.id;
                                      })
                                    : []
                                );
                              }
                            })
                          }),
                          ge.map(function (e, n) {
                            return (0, V.jsx)(
                              E.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, e.tableProps),
                                {},
                                {
                                  align: e.align,
                                  children: e.name
                                    ? (0, V.jsx)(z.Z, {
                                        active: a.sortBy === n,
                                        direction:
                                          a.sortBy === n
                                            ? a.sortDirection
                                            : 'asc',
                                        onClick: function () {
                                          return (function (e) {
                                            var n = (0, h.Z)(
                                              (0, h.Z)({}, a),
                                              {},
                                              {
                                                sortBy: e,
                                                sortDirection:
                                                  a.sortBy === e &&
                                                  'asc' === a.sortDirection
                                                    ? 'desc'
                                                    : 'asc'
                                              }
                                            );
                                            b(n);
                                          })(n);
                                        },
                                        children: (0, V.jsx)(Q.Z, {
                                          id: e.title
                                        })
                                      })
                                    : (0, V.jsx)(Q.Z, {
                                        id: e.title.toLowerCase()
                                      })
                                }
                              ),
                              (0, X.Z)()
                            );
                          })
                        ]
                      })
                    }),
                    (0, V.jsxs)(W.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = ae.includes(e.id);
                          return (0, V.jsxs)(
                            B.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                (0, V.jsx)(
                                  E.Z,
                                  {
                                    padding: 'checkbox',
                                    children: (0, V.jsx)(R.Z, {
                                      color: 'primary',
                                      checked: t,
                                      onChange: function (n) {
                                        return (
                                          (t = e.id),
                                          void (ae.includes(t)
                                            ? oe(function (e) {
                                                return e.filter(function (e) {
                                                  return e !== t;
                                                });
                                              })
                                            : oe(function (e) {
                                                return [].concat((0, x.Z)(e), [
                                                  t
                                                ]);
                                              }))
                                        );
                                        var t;
                                      },
                                      value: t
                                    })
                                  },
                                  (0, X.Z)()
                                ),
                                null === (n = u(e)) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return (0,
                                      V.jsx)(E.Z, { align: e.align, sx: (0, h.Z)({}, e.tableProps), children: e.children }, (0, X.Z)());
                                    }),
                                (v || Z) &&
                                  (0, V.jsxs)(
                                    E.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.map(function (e) {
                                              return (0,
                                              V.jsx)(k.Z, { title: '', arrow: !0, children: e });
                                            }),
                                        v &&
                                          (0, V.jsx)(k.Z, {
                                            title: (0, V.jsx)(Q.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, V.jsx)(P.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    A.colors.primary.lighter
                                                },
                                                color: A.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return v(e.id);
                                              },
                                              children: (0, V.jsx)(f.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        Z &&
                                          fe({
                                            item: e,
                                            rowId: ne,
                                            visible: _,
                                            theme: A,
                                            isLoading: r,
                                            handleShow: pe,
                                            onDelete: Z,
                                            hide: G
                                          })
                                      ]
                                    },
                                    (0, X.Z)()
                                  )
                              ]
                            },
                            (0, X.Z)()
                          );
                        }),
                        r &&
                          (0, V.jsx)(B.Z, {
                            children: (0, V.jsx)(E.Z, {
                              children: (0, V.jsx)(T.Z, {
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
                                children: (0, V.jsx)(q.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, V.jsx)(T.Z, {
                p: 2,
                children: (0, V.jsx)(M.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: function (e, n) {
                    b((0, h.Z)((0, h.Z)({}, a), {}, { page: n }));
                  },
                  onRowsPerPageChange: function (e) {
                    b(
                      (0, h.Z)(
                        (0, h.Z)({}, a),
                        {},
                        { size: Number(e.target.value) }
                      )
                    );
                  },
                  page: a.page,
                  rowsPerPage: a.size,
                  rowsPerPageOptions: [5, 10, 25, 30],
                  showLastButton: !0,
                  showFirstButton: !0
                })
              })
            ]
          });
        },
        ne = (0, o.memo)(ee),
        te = function (e) {
          var n = e.title,
            t = e.data,
            r = void 0 === t ? [] : t,
            o = e.tableHeader,
            h = void 0 === o ? [{ align: 'inherit', title: 'Title' }] : o,
            x = e.headerTitle,
            p = void 0 === x ? '' : x,
            Z = e.headerSubtitle,
            g = void 0 === Z ? '' : Z,
            f = e.isLoading,
            m = void 0 !== f && f,
            j = e.breadcrumbs,
            v = e.pagination,
            b = e.tableFilter,
            y = e.totalItems,
            k = e.extraOptions,
            C = e.onOpenModal,
            w = e.tableBody,
            P = e.onDelete,
            I = e.onUpdate,
            T = e.onPagination,
            S = (0, s.Z)();
          return (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(l.ql, {
                children: (0, V.jsx)('title', {
                  children: S.formatMessage({ id: n })
                })
              }),
              (0, V.jsx)(c.Z, {
                children: (0, V.jsx)(u.Z, {
                  headerTitle: p,
                  headerSubtitle: g,
                  onOpenModal: C,
                  breadcrumbs: j
                })
              }),
              (0, V.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, V.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, V.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, V.jsx)(ne, {
                      data: r,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: w,
                      isLoading: m,
                      onDelete: P,
                      onUpdate: I,
                      onPagination: T,
                      pagination: v,
                      tableFilter: b,
                      extraOptions: k
                    })
                  })
                })
              }),
              (0, V.jsx)(d.Z, {})
            ]
          });
        },
        re = (0, o.memo)(te);
    },
    1779: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return H;
          }
        });
      var r,
        i = t(1413),
        a = t(4165),
        o = t(5861),
        l = t(9439),
        s = t(2791),
        d = t(6790),
        c = t(4167),
        u = t(5850),
        h = t(7837),
        x = t(4695),
        p = t(4554),
        Z = t(8550),
        g = t(1134),
        f = t(4349),
        m = t(7891),
        j = t(168),
        v = t(8267),
        b = t(890),
        y = t(2763),
        k = t(7888),
        C = t(6934),
        w = t(9164),
        P = t(184),
        I = function (e) {
          var n = e.uploadFile,
            t = void 0 === n ? [] : n,
            r = e.onSetUploadFile,
            a = (0, s.useState)(null),
            o = (0, l.Z)(a, 2),
            d = o[0],
            c = o[1],
            u = (0, s.useCallback)(
              function (e) {
                e.forEach(function (e) {
                  var n = new FileReader();
                  (n.onabort = function () {
                    return console.log('file reading was aborted');
                  }),
                    (n.onerror = function () {
                      return console.log('file reading has failed');
                    }),
                    (n.onload = function () {
                      r([e]);
                    }),
                    (n.onloadend = function () {
                      c(n.result);
                    }),
                    n.readAsDataURL(e);
                });
              },
              [t]
            );
          (0, s.useEffect)(
            function () {
              t.length && 'string' === typeof t[0] && c(t);
            },
            [t]
          );
          var h = (0, v.uI)({ onDrop: u }),
            x = h.getRootProps,
            p = h.getInputProps;
          return (0, P.jsxs)('div', {
            children: [
              (0, P.jsx)(b.Z, {
                variant: 'h4',
                sx: { mb: '8px' },
                children: 'Files'
              }),
              (0, P.jsxs)(
                T,
                (0, i.Z)(
                  (0, i.Z)({}, x({ className: 'dropzone' })),
                  {},
                  {
                    children: [
                      (0, P.jsx)(
                        'input',
                        (0, i.Z)((0, i.Z)({}, p()), {}, { multiple: !1 })
                      ),
                      (0, P.jsx)('p', {
                        children:
                          "Drag 'n' drop some files here, or click to select files"
                      })
                    ]
                  }
                )
              ),
              (0, P.jsx)('aside', {}),
              d &&
                (0, P.jsx)(y.Z, {
                  cols: 3,
                  rowHeight: 200,
                  sx: { margin: '8px 0' },
                  children: (0, P.jsx)(k.Z, {
                    children: (0, P.jsx)('img', {
                      src: d,
                      alt: 'Uploaded Image',
                      height: '300'
                    })
                  })
                })
            ]
          });
        },
        T = (0, C.ZP)(w.Z)(
          r ||
            (r = (0, j.Z)([
              '\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: #eeeeee;\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n  cursor: pointer;\n  &:focus {\n    border-color: #2196f3;\n  }\n'
            ]))
        ),
        S = t(5243),
        F = S.Ry().shape({
          name: S.Z_().required('Name is required!'),
          link: S.Z_().required('Link is required!'),
          type: S.Z_().required('Type is required!'),
          categoryId: S.Rx()
            .nullable()
            .positive('Category must be positive')
            .min(1)
            .required('Category is required!')
        }),
        O = function (e) {
          var n = e.open,
            t = e.detail,
            r = e.onClose,
            d = e.refetch,
            u = e.hide,
            j = (0, h.p)(),
            v = j.notify,
            b = j.message,
            y = (0, s.useState)([]),
            k = (0, l.Z)(y, 2),
            C = k[0],
            w = k[1],
            T = (0, c.b0)(),
            S = (0, l.Z)(T, 2),
            O = S[0],
            D = S[1].isLoading,
            L = (0, c.Sm)(),
            B = (0, l.Z)(L, 2),
            E = B[0],
            R = B[1].isLoading,
            z = (0, g.cI)({
              resolver: (0, x.X)(F),
              defaultValues: { name: '', link: '', type: '', categoryId: null }
            }),
            W = z.register,
            q = z.setValue,
            M = z.handleSubmit,
            H = z.reset,
            A = z.formState.errors;
          (0, s.useEffect)(
            function () {
              null !== t && void 0 !== t && t.id
                ? (q('link', t.link),
                  q('categoryId', t.category_id),
                  q('name', t.name),
                  q('type', t.type),
                  w(t.image))
                : (H(), w([]));
            },
            [t]
          );
          var U = (function () {
            var e = (0, o.Z)(
              (0, a.Z)().mark(function e(n) {
                var r, i, o, l, s;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (r = n.name),
                            (i = n.link),
                            (o = n.type),
                            (l = n.categoryId),
                            (s = new FormData()).append('name', r),
                            s.append('link', i),
                            s.append('type', o),
                            s.append('category_id', String(l)),
                            s.append('image', C[0]),
                            null === t || void 0 === t || !t.id)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.next = 11), E({ id: t.id, body: s }).unwrap()
                          );
                        case 11:
                          e.next = 15;
                          break;
                        case 13:
                          return (e.next = 15), O(s).unwrap();
                        case 15:
                          v({
                            message:
                              null !== t && void 0 !== t && t._id
                                ? b.UPDATED
                                : b.CREATED
                          }),
                            d(),
                            u(),
                            H(),
                            (e.next = 24);
                          break;
                        case 21:
                          (e.prev = 21),
                            (e.t0 = e.catch(0)),
                            v({ message: b.ERROR, type: 'error' });
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 21]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (0, P.jsx)(m.Z, {
            title:
              null !== t && void 0 !== t && t._id
                ? 'Edit '.concat(t.name)
                : 'Add new Game',
            onClose: r,
            open: n,
            onOk: M(U),
            isLoading: D || R,
            children: (0, P.jsxs)(p.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, P.jsx)(
                  Z.Z,
                  (0, i.Z)(
                    {
                      fullWidth: !0,
                      label: 'Game Name',
                      sx: { my: 2 },
                      required: !0,
                      error: !!A.name,
                      helperText: A.name ? A.name.message : '',
                      autoComplete: 'off'
                    },
                    W('name')
                  )
                ),
                (0, P.jsx)(
                  Z.Z,
                  (0, i.Z)(
                    {
                      fullWidth: !0,
                      label: 'Link',
                      sx: { my: 2 },
                      required: !0,
                      error: !!A.link,
                      helperText: A.link ? A.link.message : '',
                      autoComplete: 'off'
                    },
                    W('link')
                  )
                ),
                (0, P.jsx)(
                  Z.Z,
                  (0, i.Z)(
                    {
                      fullWidth: !0,
                      label: (0, P.jsx)(f.Z, { id: 'label.type' }),
                      sx: { my: 2 },
                      required: !0,
                      error: !!A.type,
                      helperText: A.type ? A.type.message : '',
                      autoComplete: 'off'
                    },
                    W('type')
                  )
                ),
                (0, P.jsx)(
                  Z.Z,
                  (0, i.Z)(
                    {
                      fullWidth: !0,
                      label: 'Category',
                      type: 'number',
                      sx: { my: 2 },
                      required: !0,
                      error: !!A.categoryId,
                      helperText: A.categoryId ? A.categoryId.message : '',
                      autoComplete: 'off'
                    },
                    W('categoryId')
                  )
                ),
                (0, P.jsx)(I, { uploadFile: C, onSetUploadFile: w })
              ]
            })
          });
        },
        D = t(5119),
        L = t(8096),
        B = t(4925),
        E = t(9321),
        R = t(3786),
        z = t(946),
        W = t(8673),
        q = function () {
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(b.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.name
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(b.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.code
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(b.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, z.Z)(
                          (0, W.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.code' },
              { align: 'right', title: 'label.updated.at' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var n = e.status,
                t = e.dateFrom,
                r = e.dateTo;
              return [
                (0, P.jsx)(D.M, {
                  label: (0, P.jsx)(f.Z, { id: 'label.from' }),
                  onChange: t.onChange
                }),
                (0, P.jsx)(D.M, {
                  label: (0, P.jsx)(f.Z, { id: 'label.to' }),
                  onChange: r.onChange
                }),
                (0, P.jsxs)(L.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, P.jsx)(B.Z, {
                      id: 'isActive',
                      children: (0, P.jsx)(f.Z, { id: 'label.status' })
                    }),
                    (0, P.jsxs)(E.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, P.jsx)(f.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, P.jsx)(R.Z, {
                          value: '',
                          children: (0, P.jsx)('em', {
                            children: (0, P.jsx)(f.Z, { id: 'label.default' })
                          })
                        }),
                        (0, P.jsx)(R.Z, {
                          value: 'active',
                          children: (0, P.jsx)(f.Z, { id: 'label.active' })
                        }),
                        (0, P.jsx)(R.Z, {
                          value: 'disable',
                          children: (0, P.jsx)(f.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            }
          };
        },
        M = 'title.currencies-management',
        H = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: M }
            ],
            n = (0, h.d)(),
            t = n.visible,
            r = n.hide,
            x = n.show,
            p = (0, s.useState)(),
            Z = (0, l.Z)(p, 2),
            g = Z[0],
            f = Z[1],
            m = (0, h.p)(),
            j = m.notify,
            v = m.message,
            b = (0, s.useState)([]),
            y = (0, l.Z)(b, 2),
            k = y[0],
            C = y[1],
            w = (0, s.useState)({
              page: 0,
              size: 10,
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              status: '',
              dateFrom: '',
              dateTo: ''
            }),
            I = (0, l.Z)(w, 2),
            T = I[0],
            S = I[1],
            F = q(),
            D = F.tableBody,
            L = F.tableHeader,
            B = F.tableFilter,
            E = (0, c.K4)(
              { page: T.page, size: T.size, search: T.search },
              { refetchOnMountOrArgChange: !0 }
            ),
            R = E.data,
            z = E.isFetching,
            W = E.refetch;
          (0, s.useEffect)(
            function () {
              R &&
                (null === R || void 0 === R ? void 0 : R.length) > 0 &&
                C(function () {
                  var e;
                  return (0,
                  u.TY)(R, null === (e = L[T.sortBy]) || void 0 === e ? void 0 : e.name, T.sortDirection);
                });
            },
            [R, T]
          );
          var H = (0, c.N_)(),
            A = (0, l.Z)(H, 2),
            U = A[0],
            _ = A[1].isLoading,
            N = (0, c.GX)(),
            G = (0, l.Z)(N, 2),
            V = G[0],
            Y = G[1].isLoading,
            K = (function () {
              var e = (0, o.Z)(
                (0, a.Z)().mark(function e(n) {
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), U(n).unwrap();
                          case 3:
                            j({ message: v.DELETED }), W(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              j({ message: v.ERROR, type: 'error' });
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
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            X = (function () {
              var e = (0, o.Z)(
                (0, a.Z)().mark(function e(n) {
                  var t;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), V(n);
                          case 3:
                            (t = e.sent), x(), f(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              j({ message: v.ERROR, type: 'error' });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(d.Z, {
                title: M,
                data: k,
                tableHeader: L,
                tableBody: D,
                headerTitle: M,
                breadcrumbs: e,
                onOpenModal: function () {
                  x(), f(null);
                },
                isLoading: z || Y || _,
                onDelete: K,
                onUpdate: X,
                pagination: T,
                onPagination: S,
                tableFilter: B({
                  status: {
                    value: T.status,
                    onChange: function (e) {
                      return S((0, i.Z)((0, i.Z)({}, T), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: T.dateFrom,
                    onChange: function (e) {
                      return S(
                        (0, i.Z)(
                          (0, i.Z)({}, T),
                          {},
                          { dateFrom: (0, u.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: T.dateTo,
                    onChange: function (e) {
                      return S(
                        (0, i.Z)(
                          (0, i.Z)({}, T),
                          {},
                          { dateTo: (0, u.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, P.jsx)(O, {
                open: t,
                onClose: r,
                refetch: W,
                hide: r,
                detail: g
              })
            ]
          });
        };
    },
    4732: function (e, n, t) {
      var r = t(9439),
        i = t(2791);
      n.Z = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          t = (0, i.useState)(e),
          a = (0, r.Z)(t, 2),
          o = a[0],
          l = a[1];
        return (
          (0, i.useEffect)(
            function () {
              var t = setTimeout(function () {
                l(e);
              }, n);
              return function () {
                clearTimeout(t);
              };
            },
            [e, n]
          ),
          o
        );
      };
    },
    5850: function (e, n, t) {
      t.d(n, {
        TY: function () {
          return o;
        },
        Zd: function () {
          return l;
        }
      });
      var r = t(3433),
        i = t(2426),
        a = t.n(i),
        o = function (e, n, t) {
          return (0, r.Z)(e).sort(function (e, r) {
            return 'string' === typeof e[n] && 'string' === typeof r[n]
              ? 'asc' === t
                ? e[n].localeCompare(r[n])
                : r[n].localeCompare(e[n])
              : 'number' === typeof e[n] && 'number' === typeof r[n]
              ? 'asc' === t
                ? e[n] - r[n]
                : r[n] - e[n]
              : 0;
          });
        },
        l = function (e, n) {
          return 'to' === n
            ? a()(e).endOf('day').utc().toISOString()
            : a()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=779.4d31f9f5.chunk.js.map
