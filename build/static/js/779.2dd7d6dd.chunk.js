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
        S = t(4554),
        T = t(4721),
        F = t(8550),
        O = t(9281),
        B = t(9836),
        D = t(1048),
        L = t(5855),
        E = t(3994),
        R = t(4454),
        z = t(720),
        A = t(3382),
        W = t(3239),
        q = t(3033),
        M = t(7837),
        H = t(1715),
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
          var e = (0, M.d)(),
            n = e.toggle,
            t = e.visible,
            r = (0, o.useRef)(null);
          return (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsxs)(S.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, V.jsxs)(S.Z, {
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
              (0, V.jsx)(H.Z, {
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
            u = e.isShowBulkActions,
            Z = e.tableBody,
            v = e.onDelete,
            b = e.onUpdate,
            H = e.onPagination,
            U = (0, y.Z)(),
            _ = (0, M.d)(),
            N = _.visible,
            G = _.show,
            Y = _.hide,
            ee = (0, o.useState)(''),
            ne = (0, p.Z)(ee, 2),
            te = ne[0],
            re = ne[1],
            ie = (0, o.useState)([]),
            ae = (0, p.Z)(ie, 2),
            oe = ae[0],
            le = ae[1],
            se = (0, o.useState)(''),
            de = (0, p.Z)(se, 2),
            ce = de[0],
            ue = de[1],
            he = (0, J.Z)(ce, 500);
          (0, o.useEffect)(
            function () {
              H((0, h.Z)((0, h.Z)({}, a), {}, { search: he }));
            },
            [he]
          );
          var xe = oe.length > 0 && oe.length < n.length,
            pe = oe.length === n.length,
            Ze = function (e) {
              G(), re(e);
            },
            ge = function (e) {
              v(e), Y();
            },
            fe = (0, o.useMemo)(
              function () {
                return v || b || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [v, b, t]
            ),
            me = function (e) {
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
                            return ge(n.id);
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
              u &&
                (null === oe || void 0 === oe ? void 0 : oe.length) > 0 &&
                (0, V.jsx)(S.Z, { flex: 1, p: 2, children: (0, V.jsx)(K, {}) }),
              (0, V.jsx)(T.Z, {}),
              (0, V.jsxs)(I.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, V.jsxs)(S.Z, {
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
                          return ue(e.target.value.trim());
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
                  (0, V.jsx)(S.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, n) {
                            return (0, V.jsx)(S.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, V.jsx)(O.Z, {
                children: (0, V.jsxs)(B.Z, {
                  children: [
                    (0, V.jsx)(D.Z, {
                      children: (0, V.jsxs)(L.Z, {
                        children: [
                          u &&
                            (0, V.jsx)(E.Z, {
                              padding: 'checkbox',
                              children: (0, V.jsx)(R.Z, {
                                color: 'primary',
                                checked: pe,
                                indeterminate: xe,
                                onChange: function (e) {
                                  le(
                                    e.target.checked
                                      ? n.map(function (e) {
                                          return e.id;
                                        })
                                      : []
                                  );
                                }
                              })
                            }),
                          fe.map(function (e, n) {
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
                                            H(n);
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
                    (0, V.jsxs)(A.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = oe.includes(e.id);
                          return (0, V.jsxs)(
                            L.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                u &&
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
                                            void (oe.includes(t)
                                              ? le(function (e) {
                                                  return e.filter(function (e) {
                                                    return e !== t;
                                                  });
                                                })
                                              : le(function (e) {
                                                  return [].concat(
                                                    (0, x.Z)(e),
                                                    [t]
                                                  );
                                                }))
                                          );
                                          var t;
                                        },
                                        value: t
                                      })
                                    },
                                    (0, X.Z)()
                                  ),
                                null === (n = Z(e)) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return (0,
                                      V.jsx)(E.Z, { align: e.align, sx: (0, h.Z)({}, e.tableProps), children: e.children }, (0, X.Z)());
                                    }),
                                (b || v) &&
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
                                        b &&
                                          (0, V.jsx)(k.Z, {
                                            title: (0, V.jsx)(Q.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, V.jsx)(P.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    U.colors.primary.lighter
                                                },
                                                color: U.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return b(e.id);
                                              },
                                              children: (0, V.jsx)(f.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        v &&
                                          me({
                                            item: e,
                                            rowId: te,
                                            visible: N,
                                            theme: U,
                                            isLoading: r,
                                            handleShow: Ze,
                                            onDelete: v,
                                            hide: Y
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
                          (0, V.jsx)(L.Z, {
                            children: (0, V.jsx)(E.Z, {
                              children: (0, V.jsx)(S.Z, {
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
                                children: (0, V.jsx)(W.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, V.jsx)(S.Z, {
                p: 2,
                children: (0, V.jsx)(q.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: function (e, n) {
                    H((0, h.Z)((0, h.Z)({}, a), {}, { page: n }));
                  },
                  onRowsPerPageChange: function (e) {
                    H(
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
            C = e.isShowBulkActions,
            w = void 0 === C || C,
            P = e.onOpenModal,
            I = e.tableBody,
            S = e.onDelete,
            T = e.onUpdate,
            F = e.onPagination,
            O = (0, s.Z)();
          return (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(l.ql, {
                children: (0, V.jsx)('title', {
                  children: O.formatMessage({ id: n })
                })
              }),
              (0, V.jsx)(c.Z, {
                children: (0, V.jsx)(u.Z, {
                  headerTitle: p,
                  headerSubtitle: g,
                  onOpenModal: P,
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
                      tableBody: I,
                      isLoading: m,
                      onDelete: S,
                      onUpdate: T,
                      onPagination: F,
                      pagination: v,
                      tableFilter: b,
                      extraOptions: k,
                      isShowBulkActions: w
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
            return M;
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
                S,
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
        S = (0, C.ZP)(w.Z)(
          r ||
            (r = (0, j.Z)([
              '\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: #eeeeee;\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n  cursor: pointer;\n  &:focus {\n    border-color: #2196f3;\n  }\n'
            ]))
        ),
        T = t(5243),
        F = T.Ry().shape({
          name: T.Z_().required('Name is required!'),
          link: T.Z_().required('Link is required!'),
          type: T.Z_().required('Type is required!'),
          categoryId: T.Rx()
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
            S = (0, c.b0)(),
            T = (0, l.Z)(S, 2),
            O = T[0],
            B = T[1].isLoading,
            D = (0, c.Sm)(),
            L = (0, l.Z)(D, 2),
            E = L[0],
            R = L[1].isLoading,
            z = (0, g.cI)({
              resolver: (0, x.X)(F),
              defaultValues: { name: '', link: '', type: '', categoryId: null }
            }),
            A = z.register,
            W = z.setValue,
            q = z.handleSubmit,
            M = z.reset,
            H = z.formState.errors;
          (0, s.useEffect)(
            function () {
              null !== t && void 0 !== t && t.id
                ? (W('link', t.link),
                  W('categoryId', t.category_id),
                  W('name', t.name),
                  W('type', t.type),
                  w(t.image))
                : (M(), w([]));
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
                            M(),
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
            onOk: q(U),
            isLoading: B || R,
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
                      error: !!H.name,
                      helperText: H.name ? H.name.message : '',
                      autoComplete: 'off'
                    },
                    A('name')
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
                      error: !!H.link,
                      helperText: H.link ? H.link.message : '',
                      autoComplete: 'off'
                    },
                    A('link')
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
                      error: !!H.type,
                      helperText: H.type ? H.type.message : '',
                      autoComplete: 'off'
                    },
                    A('type')
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
                      error: !!H.categoryId,
                      helperText: H.categoryId ? H.categoryId.message : '',
                      autoComplete: 'off'
                    },
                    A('categoryId')
                  )
                ),
                (0, P.jsx)(I, { uploadFile: C, onSetUploadFile: w })
              ]
            })
          });
        },
        B = t(5119),
        D = t(8096),
        L = t(4925),
        E = t(9321),
        R = t(3786),
        z = t(946),
        A = t(8673),
        W = function () {
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
                          (0, A.Z)(
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
                (0, P.jsx)(B.M, {
                  label: (0, P.jsx)(f.Z, { id: 'label.from' }),
                  onChange: t.onChange
                }),
                (0, P.jsx)(B.M, {
                  label: (0, P.jsx)(f.Z, { id: 'label.to' }),
                  onChange: r.onChange
                }),
                (0, P.jsxs)(D.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, P.jsx)(L.Z, {
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
        q = 'title.currencies-management',
        M = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: q }
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
            S = I[0],
            T = I[1],
            F = W(),
            B = F.tableBody,
            D = F.tableHeader,
            L = F.tableFilter,
            E = (0, c.K4)(
              { page: S.page, size: S.size, search: S.search },
              { refetchOnMountOrArgChange: !0 }
            ),
            R = E.data,
            z = E.isFetching,
            A = E.refetch;
          (0, s.useEffect)(
            function () {
              R &&
                (null === R || void 0 === R ? void 0 : R.length) > 0 &&
                C(function () {
                  var e;
                  return (0,
                  u.TY)(R, null === (e = D[S.sortBy]) || void 0 === e ? void 0 : e.name, S.sortDirection);
                });
            },
            [R, S]
          );
          var M = (0, c.N_)(),
            H = (0, l.Z)(M, 2),
            U = H[0],
            _ = H[1].isLoading,
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
                            j({ message: v.DELETED }), A(), (e.next = 10);
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
                title: q,
                data: k,
                tableHeader: D,
                tableBody: B,
                headerTitle: q,
                breadcrumbs: e,
                onOpenModal: function () {
                  x(), f(null);
                },
                isLoading: z || Y || _,
                onDelete: K,
                onUpdate: X,
                pagination: S,
                onPagination: T,
                tableFilter: L({
                  status: {
                    value: S.status,
                    onChange: function (e) {
                      return T((0, i.Z)((0, i.Z)({}, S), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: S.dateFrom,
                    onChange: function (e) {
                      return T(
                        (0, i.Z)(
                          (0, i.Z)({}, S),
                          {},
                          { dateFrom: (0, u.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: S.dateTo,
                    onChange: function (e) {
                      return T(
                        (0, i.Z)(
                          (0, i.Z)({}, S),
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
                refetch: A,
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
//# sourceMappingURL=779.2dd7d6dd.chunk.js.map
