'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [967],
  {
    173: function (e, n, t) {
      var i = t(6934),
        r = t(9164),
        a = t(4554),
        o = t(890),
        l = t(4349),
        s = t(184),
        c = (0, i.ZP)(r.Z)(function (e) {
          var n = e.theme;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function () {
        return (0, s.jsx)(c, {
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
      var i = t(1413),
        r = t(5987),
        a = t(3329),
        o = t(9709),
        l = t(4721),
        s = t(9164),
        c = t(6151),
        d = t(5574),
        u = t(5661),
        h = t(493),
        x = t(4349),
        p = t(184),
        Z = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          m = e.open,
          f = e.isLoading,
          v = void 0 !== f && f,
          g = e.onClose,
          j = e.onOk,
          b = (0, r.Z)(e, Z);
        return (0, p.jsxs)(
          d.Z,
          (0, i.Z)(
            (0, i.Z)({ onClose: g, open: m }, b),
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
                    (0, p.jsx)(c.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: g,
                      children: (0, p.jsx)(x.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, p.jsx)(o.Z, {
                        onClick: j,
                        loading: v,
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
      var i = t(6934),
        r = t(4554),
        a = t(9164),
        o = t(184),
        l = (0, i.ZP)(r.Z)(function (e) {
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
      var i = t(1889),
        r = t(890),
        a = t(4554),
        o = t(6151),
        l = t(4696),
        s = t(2791),
        c = t(8333),
        d = t(3517),
        u = t(6871),
        h = t(3504),
        x = t(4349),
        p = t(184),
        Z = function (e) {
          var n = e.links,
            t = void 0 === n ? [] : n,
            i = (0, u.TH)();
          return (0, p.jsx)(d.Z, {
            separator: (0, p.jsx)(c.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (e, n) {
              return n === t.length - 1
                ? (0, p.jsx)(
                    r.Z,
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
                        children: (0, p.jsx)(x.Z, { id: e.name })
                      })
                    },
                    n
                  );
            })
          });
        },
        m = function (e) {
          var n = e.headerTitle,
            t = e.headerSubtitle,
            s = e.breadcrumbs,
            c = e.onOpenModal;
          return (0, p.jsxs)(i.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, p.jsxs)(i.ZP, {
                item: !0,
                children: [
                  (0, p.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, p.jsx)(x.Z, { id: n })
                  }),
                  (0, p.jsx)(r.Z, { variant: 'subtitle2', children: t }),
                  s &&
                    (0, p.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, p.jsx)(Z, { links: s })
                    })
                ]
              }),
              c &&
                (0, p.jsx)(i.ZP, {
                  item: !0,
                  children: (0, p.jsx)(o.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, p.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: c,
                    children: (0, p.jsx)(x.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        f = (0, s.memo)(m);
    },
    6790: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ie;
        }
      });
      var i,
        r = t(9164),
        a = t(1889),
        o = t(2791),
        l = t(6907),
        s = t(3539),
        c = t(173),
        d = t(8418),
        u = t(3481),
        h = t(1413),
        x = t(3433),
        p = t(9439),
        Z = t(168),
        m = t(8036),
        f = t(1675),
        v = t(5403),
        g = t(1686),
        j = t(9709),
        b = t(6934),
        y = t(3967),
        k = t(7639),
        w = t(890),
        C = t(6151),
        T = t(3400),
        P = t(7621),
        I = t(4554),
        S = t(4721),
        O = t(8550),
        R = t(9281),
        D = t(9836),
        B = t(1048),
        L = t(5855),
        E = t(3994),
        z = t(4454),
        F = t(720),
        W = t(3382),
        M = t(3239),
        A = t(3033),
        H = t(7837),
        q = t(1715),
        N = t(493),
        U = t(5021),
        V = t(9900),
        _ = t(4934),
        G = t(184),
        Y = (0, b.ZP)(C.Z)(function (e) {
          var n = e.theme;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        J = function () {
          var e = (0, H.d)(),
            n = e.toggle,
            t = e.visible,
            i = (0, o.useRef)(null);
          return (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsxs)(I.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, G.jsxs)(I.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, G.jsx)(w.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, G.jsx)(Y, {
                        sx: { ml: 1 },
                        startIcon: (0, G.jsx)(m.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, G.jsx)(T.Z, {
                    color: 'primary',
                    onClick: n,
                    ref: i,
                    sx: { ml: 2, p: 1 },
                    children: (0, G.jsx)(_.Z, {})
                  })
                ]
              }),
              (0, G.jsx)(q.Z, {
                keepMounted: !0,
                anchorEl: i.current,
                open: t,
                onClose: n,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, G.jsxs)(N.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, G.jsx)(U.ZP, {
                      button: !0,
                      children: (0, G.jsx)(V.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, G.jsx)(U.ZP, {
                      button: !0,
                      children: (0, G.jsx)(V.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        K = t(2810),
        X = t(4732),
        Q = t(4349),
        $ = (0, b.ZP)(j.Z)(
          i ||
            (i = (0, Z.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        ee = function (e) {
          var n = e.data,
            t = e.tableHeader,
            i = e.isLoading,
            a = e.pagination,
            l = e.totalItems,
            s = void 0 === l ? 0 : l,
            c = e.tableFilter,
            d = e.extraOptions,
            u = e.tableBody,
            Z = e.onDelete,
            j = e.onUpdate,
            b = e.onPagination,
            q = (0, y.Z)(),
            N = (0, H.d)(),
            U = N.visible,
            V = N.show,
            _ = N.hide,
            Y = (0, o.useState)(''),
            ee = (0, p.Z)(Y, 2),
            ne = ee[0],
            te = ee[1],
            ie = (0, o.useState)([]),
            re = (0, p.Z)(ie, 2),
            ae = re[0],
            oe = re[1],
            le = (0, o.useState)(''),
            se = (0, p.Z)(le, 2),
            ce = se[0],
            de = se[1],
            ue = (0, X.Z)(ce, 500);
          (0, o.useEffect)(
            function () {
              b((0, h.Z)((0, h.Z)({}, a), {}, { search: ue }));
            },
            [ue]
          );
          var he = ae.length > 0 && ae.length < n.length,
            xe = ae.length === n.length,
            pe = function (e) {
              V(), te(e);
            },
            Ze = function (e) {
              Z(e), _();
            },
            me = (0, o.useMemo)(
              function () {
                return Z || j || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [Z, j, t]
            ),
            fe = function (e) {
              var n = e.item,
                t = e.hide,
                i = (e.onDelete, e.handleShow),
                a = e.rowId,
                o = e.visible,
                l = e.theme,
                s = e.isLoading;
              return (0, G.jsx)(k.Z, {
                title: (0, G.jsxs)(r.Z, {
                  children: [
                    (0, G.jsx)(w.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, G.jsxs)(r.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, G.jsx)(C.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, G.jsx)($, {
                          onClick: function () {
                            return Ze(n.id);
                          },
                          loading: s,
                          loadingPosition: 'start',
                          startIcon: (0, G.jsx)(g.Z, {}),
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
                children: (0, G.jsx)(T.Z, {
                  sx: {
                    '&:hover': { background: l.colors.error.lighter },
                    color: l.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return i(n.id);
                  },
                  children: (0, G.jsx)(m.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, G.jsxs)(P.Z, {
            children: [
              (null === ae || void 0 === ae ? void 0 : ae.length) > 0 &&
                (0, G.jsx)(I.Z, { flex: 1, p: 2, children: (0, G.jsx)(J, {}) }),
              (0, G.jsx)(S.Z, {}),
              (0, G.jsxs)(P.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, G.jsxs)(I.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, G.jsx)(O.Z, {
                        label: (0, G.jsx)(Q.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (e) {
                          return de(e.target.value.trim());
                        }
                      }),
                      (0, G.jsx)(T.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, G.jsx)(v.Z, {})
                      })
                    ]
                  }),
                  (0, G.jsx)(I.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === c || void 0 === c
                        ? void 0
                        : c.map(function (e, n) {
                            return (0, G.jsx)(I.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, G.jsx)(R.Z, {
                children: (0, G.jsxs)(D.Z, {
                  children: [
                    (0, G.jsx)(B.Z, {
                      children: (0, G.jsxs)(L.Z, {
                        children: [
                          (0, G.jsx)(E.Z, {
                            padding: 'checkbox',
                            children: (0, G.jsx)(z.Z, {
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
                          me.map(function (e, n) {
                            return (0, G.jsx)(
                              E.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, e.tableProps),
                                {},
                                {
                                  align: e.align,
                                  children: e.name
                                    ? (0, G.jsx)(F.Z, {
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
                                        children: (0, G.jsx)(Q.Z, {
                                          id: e.title
                                        })
                                      })
                                    : (0, G.jsx)(Q.Z, {
                                        id: e.title.toLowerCase()
                                      })
                                }
                              ),
                              (0, K.Z)()
                            );
                          })
                        ]
                      })
                    }),
                    (0, G.jsxs)(W.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = ae.includes(e.id);
                          return (0, G.jsxs)(
                            L.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                (0, G.jsx)(
                                  E.Z,
                                  {
                                    padding: 'checkbox',
                                    children: (0, G.jsx)(z.Z, {
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
                                  (0, K.Z)()
                                ),
                                null === (n = u(e)) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return (0,
                                      G.jsx)(E.Z, { align: e.align, sx: (0, h.Z)({}, e.tableProps), children: e.children }, (0, K.Z)());
                                    }),
                                (j || Z) &&
                                  (0, G.jsxs)(
                                    E.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map(function (e) {
                                              return (0,
                                              G.jsx)(k.Z, { title: '', arrow: !0, children: e });
                                            }),
                                        j &&
                                          (0, G.jsx)(k.Z, {
                                            title: (0, G.jsx)(Q.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, G.jsx)(T.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    q.colors.primary.lighter
                                                },
                                                color: q.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return j(e.id);
                                              },
                                              children: (0, G.jsx)(f.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        Z &&
                                          fe({
                                            item: e,
                                            rowId: ne,
                                            visible: U,
                                            theme: q,
                                            isLoading: i,
                                            handleShow: pe,
                                            onDelete: Z,
                                            hide: _
                                          })
                                      ]
                                    },
                                    (0, K.Z)()
                                  )
                              ]
                            },
                            (0, K.Z)()
                          );
                        }),
                        i &&
                          (0, G.jsx)(L.Z, {
                            children: (0, G.jsx)(E.Z, {
                              children: (0, G.jsx)(I.Z, {
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
                                children: (0, G.jsx)(M.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, G.jsx)(I.Z, {
                p: 2,
                children: (0, G.jsx)(A.Z, {
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
            i = void 0 === t ? [] : t,
            o = e.tableHeader,
            h = void 0 === o ? [{ align: 'inherit', title: 'Title' }] : o,
            x = e.headerTitle,
            p = void 0 === x ? '' : x,
            Z = e.headerSubtitle,
            m = void 0 === Z ? '' : Z,
            f = e.isLoading,
            v = void 0 !== f && f,
            g = e.breadcrumbs,
            j = e.pagination,
            b = e.tableFilter,
            y = e.totalItems,
            k = e.extraOptions,
            w = e.onOpenModal,
            C = e.tableBody,
            T = e.onDelete,
            P = e.onUpdate,
            I = e.onPagination,
            S = (0, s.Z)();
          return (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(l.ql, {
                children: (0, G.jsx)('title', {
                  children: S.formatMessage({ id: n })
                })
              }),
              (0, G.jsx)(d.Z, {
                children: (0, G.jsx)(u.Z, {
                  headerTitle: p,
                  headerSubtitle: m,
                  onOpenModal: w,
                  breadcrumbs: g
                })
              }),
              (0, G.jsx)(r.Z, {
                maxWidth: 'lg',
                children: (0, G.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, G.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, G.jsx)(ne, {
                      data: i,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: C,
                      isLoading: v,
                      onDelete: T,
                      onUpdate: P,
                      onPagination: I,
                      pagination: j,
                      tableFilter: b,
                      extraOptions: k
                    })
                  })
                })
              }),
              (0, G.jsx)(c.Z, {})
            ]
          });
        },
        ie = (0, o.memo)(te);
    },
    6967: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          }
        });
      var i = t(4942),
        r = t(4165),
        a = t(5861),
        o = t(1413),
        l = t(9439),
        s = t(9709),
        c = t(5574),
        d = t(4554),
        u = t(1889),
        h = t(890),
        x = t(8550),
        p = t(2791),
        Z = t(5048),
        m = t(1134),
        f = t(6790),
        v = t(2302),
        g = t(5850),
        j = t(7837),
        b = t(4695),
        y = t(9321),
        k = t(3786),
        w = t(7891),
        C = t(7945),
        T = t(5243),
        P = t(184),
        I = T.Ry().shape({
          limitType: T.Z_().required('limitType is required!'),
          limitTypeId: T.Z_().required('limitTypeId is required!'),
          limit: T.Rx()
            .nullable()
            .positive('limit must be positive')
            .required('limit is required!')
        }),
        S = function (e) {
          var n = e.open,
            t = e.detail,
            i = e.onClose,
            s = e.refetch,
            c = e.hide,
            u = (0, j.p)(),
            h = u.notify,
            Z = u.message,
            f = (0, v.CQ)(),
            g = (0, l.Z)(f, 2),
            T = g[0],
            S = g[1].isLoading,
            O = (0, v.U4)(),
            R = (0, l.Z)(O, 2),
            D = R[0],
            B = R[1].isLoading,
            L = (0, m.cI)({
              resolver: (0, b.X)(I),
              defaultValues: { limitType: '', limitTypeId: '', limit: 0 }
            }),
            E = L.register,
            z = L.setValue,
            F = L.handleSubmit,
            W = L.reset,
            M = L.formState.errors;
          (0, p.useEffect)(
            function () {
              null !== t && void 0 !== t && t.id
                ? (z('limitType', t.limitType),
                  z('limitTypeId', t.limitTypeId),
                  z('limit', t.limit))
                : W();
            },
            [t]
          );
          var A = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === t || void 0 === t || !t.id)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 4),
                              D({
                                id: null === t || void 0 === t ? void 0 : t.id,
                                body: n
                              }).unwrap()
                            );
                          case 4:
                            e.next = 8;
                            break;
                          case 6:
                            return (e.next = 8), T(n).unwrap();
                          case 8:
                            h({
                              message:
                                null !== t && void 0 !== t && t._id
                                  ? Z.UPDATED
                                  : Z.CREATED
                            }),
                              s(),
                              c(),
                              W(),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(0)),
                              h({ message: Z.ERROR, type: 'error' });
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 14]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            H = (0, p.useState)(''),
            q = (0, l.Z)(H, 2),
            N = q[0],
            U = q[1],
            V = (0, p.useState)(''),
            _ = (0, l.Z)(V, 2),
            G = _[0],
            Y = _[1],
            J = (0, p.useState)([]),
            K = (0, l.Z)(J, 2),
            X = K[0],
            Q = K[1],
            $ = (0, C.WK)(),
            ee = (0, l.Z)($, 1)[0],
            ne = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t, i;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('vendor' !== n) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 3), ee({});
                        case 3:
                          if (
                            ((e.t1 = i = e.sent.data),
                            (e.t0 = null !== e.t1),
                            !e.t0)
                          ) {
                            e.next = 7;
                            break;
                          }
                          e.t0 = void 0 !== i;
                        case 7:
                          if (!e.t0) {
                            e.next = 11;
                            break;
                          }
                          (e.t2 = i), (e.next = 12);
                          break;
                        case 11:
                          e.t2 = [];
                        case 12:
                          (t = e.t2), (e.next = 16);
                          break;
                        case 15:
                          t =
                            'type' === n
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
                              : [{ id: '', name: 'Please Select a Type' }];
                        case 16:
                          Q(t);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, P.jsx)(w.Z, {
            title:
              null !== t && void 0 !== t && t._id
                ? 'Edit '.concat(t.name)
                : 'Add new Game',
            onClose: i,
            open: n,
            onOk: F(A),
            isLoading: S || B,
            children: (0, P.jsxs)(d.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, P.jsx)(d.Z, {
                  sx: { my: 2 },
                  children: (0, P.jsxs)(
                    y.Z,
                    (0, o.Z)(
                      (0, o.Z)(
                        {
                          fullWidth: !0,
                          name: 'limitType',
                          value: N,
                          required: !0
                        },
                        E('limitType')
                      ),
                      {},
                      {
                        error: !!M.limitType,
                        label: 'Type',
                        onChange: function (e) {
                          var n = e.target.value;
                          U(n), ne(n);
                        },
                        children: [
                          (0, P.jsx)(k.Z, { value: 'all', children: 'All' }),
                          (0, P.jsx)(k.Z, {
                            selected: !0,
                            value: 'game',
                            children: 'Game'
                          }),
                          (0, P.jsx)(k.Z, { value: 'type', children: 'Type' }),
                          (0, P.jsx)(k.Z, {
                            value: 'vendor',
                            children: 'Vendor'
                          })
                        ]
                      }
                    )
                  )
                }),
                (0, P.jsx)(d.Z, {
                  sx: { my: 2 },
                  children: (0, P.jsx)(
                    y.Z,
                    (0, o.Z)(
                      (0, o.Z)(
                        {
                          fullWidth: !0,
                          name: 'limitTypeId',
                          value: G,
                          required: !0
                        },
                        E('limitTypeId')
                      ),
                      {},
                      {
                        error: !!M.limitTypeId,
                        label: 'Name(id)',
                        onChange: function (e) {
                          var n = e.target.value;
                          Y(n);
                        },
                        children: X.map(function (e) {
                          return (0,
                          P.jsx)(k.Z, { selected: 3 == e.id, value: e.id, children: e.name }, e.id);
                        })
                      }
                    )
                  )
                }),
                (0, P.jsx)(
                  x.Z,
                  (0, o.Z)(
                    {
                      type: 'number',
                      fullWidth: !0,
                      label: 'limit',
                      sx: { my: 2 },
                      required: !0,
                      error: !!M.limit,
                      helperText: M.limit ? M.limit.message : '',
                      autoComplete: 'off'
                    },
                    E('limit')
                  )
                )
              ]
            })
          });
        },
        O = t(8096),
        R = t(4925),
        D = t(4349),
        B = function () {
          var e = (0, j.d)(),
            n = e.visible,
            t = e.toggle,
            i = (0, p.useState)(),
            r = (0, l.Z)(i, 2),
            a = r[0];
          r[1];
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(h.Z, {
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
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(h.Z, {
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
                  children: (0, P.jsx)(P.Fragment, {
                    children: (0, P.jsx)(h.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.limit
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.type', name: 'type' },
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.limit', name: 'limit' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var n = e.type;
              return [
                (0, P.jsxs)(O.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, P.jsx)(R.Z, {
                      id: 'isActive',
                      children: (0, P.jsx)(D.Z, { id: 'label.type' })
                    }),
                    (0, P.jsxs)(y.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: 'Type',
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, P.jsx)(k.Z, {
                          value: '',
                          children: (0, P.jsx)('em', {
                            children: (0, P.jsx)(D.Z, { id: 'label.default' })
                          })
                        }),
                        (0, P.jsx)(k.Z, {
                          value: 'all',
                          children: (0, P.jsx)(D.Z, { id: 'label.all' })
                        }),
                        (0, P.jsx)(k.Z, {
                          value: 'vendor',
                          children: (0, P.jsx)(D.Z, { id: 'label.vendor' })
                        }),
                        (0, P.jsx)(k.Z, {
                          value: 'game',
                          children: (0, P.jsx)(D.Z, { id: 'label.game' })
                        }),
                        (0, P.jsx)(k.Z, {
                          value: 'type',
                          children: (0, P.jsx)(D.Z, { id: 'label.type' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            user: a,
            toggle: t,
            visible: n
          };
        },
        L = 'title.bet-set',
        E = function () {
          var e,
            n,
            t = [{ link: '/dashboards', name: 'title.dashboard' }, { name: L }],
            b = (0, j.d)(),
            y = b.visible,
            k = b.hide,
            w = b.show,
            C = (0, m.cI)().reset,
            T = (0, j.p)(),
            I = T.notify,
            O = T.message,
            R = B(),
            E = R.tableBody,
            z = R.tableHeader,
            F = R.tableFilter,
            W = R.visible,
            M = R.toggle,
            A = R.user,
            H = (0, p.useState)([]),
            q = (0, l.Z)(H, 2),
            N = q[0],
            U = q[1],
            V = (0, p.useState)(),
            _ = (0, l.Z)(V, 2),
            G = _[0],
            Y = _[1],
            J = (0, p.useState)({
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
            K = (0, l.Z)(J, 2),
            X = K[0],
            Q = K[1],
            $ = (0, Z.v9)(function (e) {
              return e.common;
            }).permissions,
            ee = (0, v.HJ)(),
            ne = (0, l.Z)(ee, 1)[0],
            te = (0, v.Rw)(),
            ie = (0, l.Z)(te, 2),
            re = ie[0],
            ae = ie[1].isLoading,
            oe = (0, v.Dx)({}),
            le = (0, l.Z)(oe, 2),
            se = le[0],
            ce = le[1].isLoading,
            de = (0, v.XG)({
              refetchOnMountOrArgChange: !0,
              skip:
                ((e = $),
                (n = 'get'),
                !(null === e || void 0 === e ? void 0 : e.includes(n)))
            }),
            ue = de.data,
            he = de.isFetching,
            xe = de.refetch,
            pe = (0, p.useState)({
              receiverUsername: '',
              amount: 0,
              type: 'add',
              note: ''
            }),
            Ze = (0, l.Z)(pe, 2),
            me = Ze[0],
            fe = Ze[1];
          (0, p.useEffect)(
            function () {
              (me.receiverUsername =
                null === A || void 0 === A ? void 0 : A.username),
                fe(function (e) {
                  return (0, o.Z)((0, o.Z)({}, e), {}, { status: 'success' });
                });
            },
            [A]
          ),
            (0, p.useEffect)(
              function () {
                ue &&
                  U(function () {
                    var e;
                    return (0,
                    g.TY)(ue.data, null === (e = z[X.sortBy]) || void 0 === e ? void 0 : e.name, X.sortDirection);
                  });
              },
              [ue, X]
            );
          var ve = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              re({ id: Number(n) }).unwrap()
                            );
                          case 3:
                            I({ message: O.DELETED }), xe(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              I({ message: O.ERROR, type: 'error' });
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
            ge = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              ne({ id: Number(n) }).unwrap()
                            );
                          case 3:
                            (t = e.sent), w(), Y(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              I({ message: O.ERROR, type: 'error' });
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
            })(),
            je = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e() {
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), se(me).unwrap();
                          case 3:
                            e.sent &&
                              (M(), I({ message: O.UPDATED }), xe(), k(), C()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              I({ message: O.ERROR, type: 'error' });
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
            })();
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(f.Z, {
                title: L,
                data: N,
                totalItems:
                  null === ue || void 0 === ue ? void 0 : ue.data.totalItems,
                tableHeader: z,
                tableBody: E,
                headerTitle: L,
                breadcrumbs: t,
                onOpenModal: function () {
                  w(), Y(null);
                },
                isLoading: he || ae,
                onDelete: ve,
                onUpdate: ge,
                pagination: X,
                onPagination: Q,
                tableFilter: F({
                  type: {
                    value: X.type,
                    onChange: function (e) {
                      return Q((0, o.Z)((0, o.Z)({}, X), {}, { type: e }));
                    }
                  }
                })
              }),
              (0, P.jsx)(S, {
                open: y,
                detail: G,
                onClose: k,
                refetch: xe,
                hide: k
              }),
              (0, P.jsx)(c.Z, {
                open: W,
                onClose: M,
                children: (0, P.jsx)(d.Z, {
                  component: 'form',
                  padding: 2,
                  children: (0, P.jsxs)(u.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, P.jsx)(u.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, P.jsx)(h.Z, {
                          gutterBottom: !0,
                          variant: 'h5',
                          component: 'div',
                          children: (0, P.jsx)(D.Z, {
                            id: 'title.add-transaction'
                          })
                        })
                      }),
                      (0, P.jsxs)(d.Z, {
                        justifyContent: 'center',
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '18px',
                        gap: '12px',
                        marginTop: '8px',
                        children: [
                          (0, P.jsx)(x.Z, {
                            label: 'Insert the amount here',
                            variant: 'outlined',
                            fullWidth: !0,
                            onInput: function (e) {
                              return (
                                (n = e.target.value),
                                (t = 'amount'),
                                void fe(function (e) {
                                  return (0,
                                  o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, ''.concat(t), n));
                                })
                              );
                              var n, t;
                            }
                          }),
                          (0, P.jsx)(s.Z, {
                            loading: ce,
                            onClick: je,
                            size: 'large',
                            variant: 'contained',
                            sx: { width: 120 },
                            children: (0, P.jsxs)(d.Z, {
                              children: [
                                (0, P.jsx)('span', { children: '+ \xa0' }),
                                (0, P.jsx)('span', { children: 'Add' })
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
    4732: function (e, n, t) {
      var i = t(9439),
        r = t(2791);
      n.Z = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          t = (0, r.useState)(e),
          a = (0, i.Z)(t, 2),
          o = a[0],
          l = a[1];
        return (
          (0, r.useEffect)(
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
      var i = t(3433),
        r = t(2426),
        a = t.n(r),
        o = function (e, n, t) {
          return (0, i.Z)(e).sort(function (e, i) {
            return 'string' === typeof e[n] && 'string' === typeof i[n]
              ? 'asc' === t
                ? e[n].localeCompare(i[n])
                : i[n].localeCompare(e[n])
              : 'number' === typeof e[n] && 'number' === typeof i[n]
              ? 'asc' === t
                ? e[n] - i[n]
                : i[n] - e[n]
              : 0;
          });
        },
        l = function (e, n) {
          return 'to' === n
            ? a()(e).endOf('day').utc().toISOString()
            : a()(e).startOf('day').utc().toISOString();
        };
    },
    3329: function (e, n, t) {
      var i = t(4836);
      n.Z = void 0;
      var r = i(t(5649)),
        a = t(184),
        o = (0, r.default)(
          (0, a.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = o;
    },
    7621: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        }
      });
      var i = t(7462),
        r = t(3366),
        a = t(2791),
        o = t(8182),
        l = t(4419),
        s = t(6934),
        c = t(1402),
        d = t(5527),
        u = t(5878),
        h = t(1217);
      function x(e) {
        return (0, h.Z)('MuiCard', e);
      }
      (0, u.Z)('MuiCard', ['root']);
      var p = t(184),
        Z = ['className', 'raised'],
        m = (0, s.ZP)(d.Z, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function (e, n) {
            return n.root;
          }
        })(function () {
          return { overflow: 'hidden' };
        }),
        f = a.forwardRef(function (e, n) {
          var t = (0, c.Z)({ props: e, name: 'MuiCard' }),
            a = t.className,
            s = t.raised,
            d = void 0 !== s && s,
            u = (0, r.Z)(t, Z),
            h = (0, i.Z)({}, t, { raised: d }),
            f = (function (e) {
              var n = e.classes;
              return (0, l.Z)({ root: ['root'] }, x, n);
            })(h);
          return (0,
          p.jsx)(m, (0, i.Z)({ className: (0, o.Z)(f.root, a), elevation: d ? 8 : void 0, ref: n, ownerState: h }, u));
        });
    }
  }
]);
//# sourceMappingURL=967.8d768bfd.chunk.js.map
