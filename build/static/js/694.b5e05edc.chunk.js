'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [694],
  {
    173: function (n, e, t) {
      var a = t(6934),
        r = t(9164),
        i = t(4554),
        o = t(890),
        l = t(4349),
        c = t(184),
        s = (0, a.ZP)(r.Z)(function (n) {
          var e = n.theme;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function () {
        return (0, c.jsx)(s, {
          className: 'footer-wrapper',
          children: (0, c.jsxs)(i.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, c.jsx)(i.Z, {
                children: (0, c.jsxs)(o.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, c.jsx)(l.Z, { id: 'footer.admin' })]
                })
              }),
              (0, c.jsx)(o.Z, {
                sx: { pt: { xs: 2, md: 0 } },
                variant: 'subtitle1',
                children: 'Crafted by BestPick Technology'
              })
            ]
          })
        });
      };
    },
    7395: function (n, e, t) {
      var a = t(1413),
        r = t(5987),
        i = t(6934),
        o = t(184),
        l = ['color', 'children'],
        c = (0, i.ZP)('span')(function (n) {
          var e = n.theme;
          return '\n      background-color: '
            .concat(e.colors.alpha.black[5], ';\n      padding: ')
            .concat(e.spacing(0.5, 1), ';\n      font-size: ')
            .concat(e.typography.pxToRem(13), ';\n      border-radius: ')
            .concat(
              e.general.borderRadius,
              ';\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: '
            )
            .concat(
              e.spacing(3),
              ';\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: '
            )
            .concat(e.colors.primary.lighter, ';\n          color: ')
            .concat(
              e.palette.primary.main,
              '\n        }\n\n        &-black {\n          background-color: '
            )
            .concat(e.colors.alpha.black[100], ';\n          color: ')
            .concat(
              e.colors.alpha.white[100],
              ';\n        }\n        \n        &-secondary {\n          background-color: '
            )
            .concat(e.colors.secondary.lighter, ';\n          color: ')
            .concat(
              e.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          background-color: '
            )
            .concat(e.colors.success.lighter, ';\n          color: ')
            .concat(
              e.palette.success.main,
              '\n        }\n        \n        &-warning {\n          background-color: '
            )
            .concat(e.colors.warning.lighter, ';\n          color: ')
            .concat(
              e.palette.warning.main,
              '\n        }\n              \n        &-error {\n          background-color: '
            )
            .concat(e.colors.error.lighter, ';\n          color: ')
            .concat(
              e.palette.error.main,
              '\n        }\n        \n        &-info {\n          background-color: '
            )
            .concat(e.colors.info.lighter, ';\n          color: ')
            .concat(e.palette.info.main, '\n        }\n      }\n');
        });
      e.Z = function (n) {
        var e = n.color,
          t = void 0 === e ? 'secondary' : e,
          i = n.children,
          s = (0, r.Z)(n, l);
        return (0, o.jsx)(
          c,
          (0, a.Z)(
            (0, a.Z)({ className: 'MuiLabel-' + t }, s),
            {},
            { children: i }
          )
        );
      };
    },
    8418: function (n, e, t) {
      var a = t(6934),
        r = t(4554),
        i = t(9164),
        o = t(184),
        l = (0, a.ZP)(r.Z)(function (n) {
          var e = n.theme;
          return '\n        padding: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function (n) {
        var e = n.children;
        return (0, o.jsx)(l, {
          className: 'MuiPageTitle-wrapper',
          children: (0, o.jsx)(i.Z, { maxWidth: 'lg', children: e })
        });
      };
    },
    3481: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        }
      });
      var a = t(1889),
        r = t(890),
        i = t(4554),
        o = t(6151),
        l = t(4696),
        c = t(2791),
        s = t(8333),
        d = t(3517),
        u = t(6871),
        h = t(3504),
        g = t(4349),
        x = t(184),
        Z = function (n) {
          var e = n.links,
            t = void 0 === e ? [] : e,
            a = (0, u.TH)();
          return (0, x.jsx)(d.Z, {
            separator: (0, x.jsx)(s.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (n, e) {
              return e === t.length - 1
                ? (0, x.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(g.Z, { id: n.name })
                    },
                    e
                  )
                : (0, x.jsx)(
                    h.rU,
                    {
                      to:
                        (null === n || void 0 === n ? void 0 : n.link) ||
                        a.pathname,
                      onClick:
                        (null === n || void 0 === n ? void 0 : n.onClick) &&
                        n.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, x.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, x.jsx)(g.Z, { id: n.name })
                      })
                    },
                    e
                  );
            })
          });
        },
        p = function (n) {
          var e = n.headerTitle,
            t = n.headerSubtitle,
            c = n.breadcrumbs,
            s = n.onOpenModal;
          return (0, x.jsxs)(a.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, x.jsxs)(a.ZP, {
                item: !0,
                children: [
                  (0, x.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, x.jsx)(g.Z, { id: e })
                  }),
                  (0, x.jsx)(r.Z, { variant: 'subtitle2', children: t }),
                  c &&
                    (0, x.jsx)(i.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(Z, { links: c })
                    })
                ]
              }),
              s &&
                (0, x.jsx)(a.ZP, {
                  item: !0,
                  children: (0, x.jsx)(o.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: s,
                    children: (0, x.jsx)(g.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        m = (0, c.memo)(p);
    },
    6790: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return an;
        }
      });
      var a,
        r = t(9164),
        i = t(1889),
        o = t(2791),
        l = t(6907),
        c = t(3539),
        s = t(173),
        d = t(8418),
        u = t(3481),
        h = t(1413),
        g = t(3433),
        x = t(9439),
        Z = t(168),
        p = t(8036),
        m = t(1675),
        f = t(5403),
        j = t(1686),
        v = t(9709),
        b = t(6934),
        y = t(3967),
        w = t(7639),
        I = t(890),
        P = t(6151),
        k = t(3400),
        S = t(7621),
        C = t(4554),
        L = t(4721),
        B = t(8550),
        F = t(9281),
        T = t(9836),
        M = t(1048),
        O = t(5855),
        z = t(3994),
        D = t(4454),
        W = t(720),
        E = t(3382),
        A = t(3239),
        N = t(3033),
        H = t(7837),
        R = t(1715),
        U = t(493),
        _ = t(5021),
        Y = t(9900),
        q = t(4934),
        J = t(184),
        G = (0, b.ZP)(P.Z)(function (n) {
          var e = n.theme;
          return '\n     background: '
            .concat(e.colors.error.main, ';\n     color: ')
            .concat(
              e.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(e.colors.error.dark, ';\n     }\n    ');
        }),
        K = function () {
          var n = (0, H.d)(),
            e = n.toggle,
            t = n.visible,
            a = (0, o.useRef)(null);
          return (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsxs)(C.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, J.jsxs)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, J.jsx)(I.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, J.jsx)(G, {
                        sx: { ml: 1 },
                        startIcon: (0, J.jsx)(p.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, J.jsx)(k.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: a,
                    sx: { ml: 2, p: 1 },
                    children: (0, J.jsx)(q.Z, {})
                  })
                ]
              }),
              (0, J.jsx)(R.Z, {
                keepMounted: !0,
                anchorEl: a.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, J.jsxs)(U.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, J.jsx)(_.ZP, {
                      button: !0,
                      children: (0, J.jsx)(Y.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, J.jsx)(_.ZP, {
                      button: !0,
                      children: (0, J.jsx)(Y.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        Q = t(2810),
        V = t(4732),
        X = t(4349),
        $ = (0, b.ZP)(v.Z)(
          a ||
            (a = (0, Z.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        nn = function (n) {
          var e = n.data,
            t = n.tableHeader,
            a = n.isLoading,
            i = n.pagination,
            l = n.totalItems,
            c = void 0 === l ? 0 : l,
            s = n.tableFilter,
            d = n.extraOptions,
            u = n.tableBody,
            Z = n.onDelete,
            v = n.onUpdate,
            b = n.onPagination,
            R = (0, y.Z)(),
            U = (0, H.d)(),
            _ = U.visible,
            Y = U.show,
            q = U.hide,
            G = (0, o.useState)(''),
            nn = (0, x.Z)(G, 2),
            en = nn[0],
            tn = nn[1],
            an = (0, o.useState)([]),
            rn = (0, x.Z)(an, 2),
            on = rn[0],
            ln = rn[1],
            cn = (0, o.useState)(''),
            sn = (0, x.Z)(cn, 2),
            dn = sn[0],
            un = sn[1],
            hn = (0, V.Z)(dn, 500);
          (0, o.useEffect)(
            function () {
              b((0, h.Z)((0, h.Z)({}, i), {}, { search: hn }));
            },
            [hn]
          );
          var gn = on.length > 0 && on.length < e.length,
            xn = on.length === e.length,
            Zn = function (n) {
              Y(), tn(n);
            },
            pn = function (n) {
              Z(n), q();
            },
            mn = (0, o.useMemo)(
              function () {
                return Z || v || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [Z, v, t]
            ),
            fn = function (n) {
              var e = n.item,
                t = n.hide,
                a = (n.onDelete, n.handleShow),
                i = n.rowId,
                o = n.visible,
                l = n.theme,
                c = n.isLoading;
              return (0, J.jsx)(w.Z, {
                title: (0, J.jsxs)(r.Z, {
                  children: [
                    (0, J.jsx)(I.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, J.jsxs)(r.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, J.jsx)(P.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, J.jsx)($, {
                          onClick: function () {
                            return pn(e.id);
                          },
                          loading: c,
                          loadingPosition: 'start',
                          startIcon: (0, J.jsx)(j.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: e.id === i && o && !c,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, J.jsx)(k.Z, {
                  sx: {
                    '&:hover': { background: l.colors.error.lighter },
                    color: l.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return a(e.id);
                  },
                  children: (0, J.jsx)(p.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, J.jsxs)(S.Z, {
            children: [
              (null === on || void 0 === on ? void 0 : on.length) > 0 &&
                (0, J.jsx)(C.Z, { flex: 1, p: 2, children: (0, J.jsx)(K, {}) }),
              (0, J.jsx)(L.Z, {}),
              (0, J.jsxs)(S.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, J.jsxs)(C.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, J.jsx)(B.Z, {
                        label: (0, J.jsx)(X.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (n) {
                          return un(n.target.value.trim());
                        }
                      }),
                      (0, J.jsx)(k.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, J.jsx)(f.Z, {})
                      })
                    ]
                  }),
                  (0, J.jsx)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === s || void 0 === s
                        ? void 0
                        : s.map(function (n, e) {
                            return (0, J.jsx)(C.Z, { children: n }, e);
                          })
                  })
                ]
              }),
              (0, J.jsx)(F.Z, {
                children: (0, J.jsxs)(T.Z, {
                  children: [
                    (0, J.jsx)(M.Z, {
                      children: (0, J.jsxs)(O.Z, {
                        children: [
                          (0, J.jsx)(z.Z, {
                            padding: 'checkbox',
                            children: (0, J.jsx)(D.Z, {
                              color: 'primary',
                              checked: xn,
                              indeterminate: gn,
                              onChange: function (n) {
                                ln(
                                  n.target.checked
                                    ? e.map(function (n) {
                                        return n.id;
                                      })
                                    : []
                                );
                              }
                            })
                          }),
                          mn.map(function (n, e) {
                            return (0, J.jsx)(
                              z.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, n.tableProps),
                                {},
                                {
                                  align: n.align,
                                  children: n.name
                                    ? (0, J.jsx)(W.Z, {
                                        active: i.sortBy === e,
                                        direction:
                                          i.sortBy === e
                                            ? i.sortDirection
                                            : 'asc',
                                        onClick: function () {
                                          return (function (n) {
                                            var e = (0, h.Z)(
                                              (0, h.Z)({}, i),
                                              {},
                                              {
                                                sortBy: n,
                                                sortDirection:
                                                  i.sortBy === n &&
                                                  'asc' === i.sortDirection
                                                    ? 'desc'
                                                    : 'asc'
                                              }
                                            );
                                            b(e);
                                          })(e);
                                        },
                                        children: (0, J.jsx)(X.Z, {
                                          id: n.title
                                        })
                                      })
                                    : (0, J.jsx)(X.Z, {
                                        id: n.title.toLowerCase()
                                      })
                                }
                              ),
                              (0, Q.Z)()
                            );
                          })
                        ]
                      })
                    }),
                    (0, J.jsxs)(E.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !e || e.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        e.map(function (n) {
                          var e,
                            t = on.includes(n.id);
                          return (0, J.jsxs)(
                            O.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                (0, J.jsx)(
                                  z.Z,
                                  {
                                    padding: 'checkbox',
                                    children: (0, J.jsx)(D.Z, {
                                      color: 'primary',
                                      checked: t,
                                      onChange: function (e) {
                                        return (
                                          (t = n.id),
                                          void (on.includes(t)
                                            ? ln(function (n) {
                                                return n.filter(function (n) {
                                                  return n !== t;
                                                });
                                              })
                                            : ln(function (n) {
                                                return [].concat((0, g.Z)(n), [
                                                  t
                                                ]);
                                              }))
                                        );
                                        var t;
                                      },
                                      value: t
                                    })
                                  },
                                  (0, Q.Z)()
                                ),
                                null === (e = u(n)) || void 0 === e
                                  ? void 0
                                  : e.map(function (n) {
                                      return (0,
                                      J.jsx)(z.Z, { align: n.align, sx: (0, h.Z)({}, n.tableProps), children: n.children }, (0, Q.Z)());
                                    }),
                                (v || Z) &&
                                  (0, J.jsxs)(
                                    z.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map(function (n) {
                                              return (0,
                                              J.jsx)(w.Z, { title: '', arrow: !0, children: n });
                                            }),
                                        v &&
                                          (0, J.jsx)(w.Z, {
                                            title: (0, J.jsx)(X.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, J.jsx)(k.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    R.colors.primary.lighter
                                                },
                                                color: R.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return v(n.id);
                                              },
                                              children: (0, J.jsx)(m.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        Z &&
                                          fn({
                                            item: n,
                                            rowId: en,
                                            visible: _,
                                            theme: R,
                                            isLoading: a,
                                            handleShow: Zn,
                                            onDelete: Z,
                                            hide: q
                                          })
                                      ]
                                    },
                                    (0, Q.Z)()
                                  )
                              ]
                            },
                            (0, Q.Z)()
                          );
                        }),
                        a &&
                          (0, J.jsx)(O.Z, {
                            children: (0, J.jsx)(z.Z, {
                              children: (0, J.jsx)(C.Z, {
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
                                children: (0, J.jsx)(A.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, J.jsx)(C.Z, {
                p: 2,
                children: (0, J.jsx)(N.Z, {
                  component: 'div',
                  count: c,
                  onPageChange: function (n, e) {
                    b((0, h.Z)((0, h.Z)({}, i), {}, { page: e }));
                  },
                  onRowsPerPageChange: function (n) {
                    b(
                      (0, h.Z)(
                        (0, h.Z)({}, i),
                        {},
                        { size: Number(n.target.value) }
                      )
                    );
                  },
                  page: i.page,
                  rowsPerPage: i.size,
                  rowsPerPageOptions: [5, 10, 25, 30],
                  showLastButton: !0,
                  showFirstButton: !0
                })
              })
            ]
          });
        },
        en = (0, o.memo)(nn),
        tn = function (n) {
          var e = n.title,
            t = n.data,
            a = void 0 === t ? [] : t,
            o = n.tableHeader,
            h = void 0 === o ? [{ align: 'inherit', title: 'Title' }] : o,
            g = n.headerTitle,
            x = void 0 === g ? '' : g,
            Z = n.headerSubtitle,
            p = void 0 === Z ? '' : Z,
            m = n.isLoading,
            f = void 0 !== m && m,
            j = n.breadcrumbs,
            v = n.pagination,
            b = n.tableFilter,
            y = n.totalItems,
            w = n.extraOptions,
            I = n.onOpenModal,
            P = n.tableBody,
            k = n.onDelete,
            S = n.onUpdate,
            C = n.onPagination,
            L = (0, c.Z)();
          return (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsx)(l.ql, {
                children: (0, J.jsx)('title', {
                  children: L.formatMessage({ id: e })
                })
              }),
              (0, J.jsx)(d.Z, {
                children: (0, J.jsx)(u.Z, {
                  headerTitle: x,
                  headerSubtitle: p,
                  onOpenModal: I,
                  breadcrumbs: j
                })
              }),
              (0, J.jsx)(r.Z, {
                maxWidth: 'lg',
                children: (0, J.jsx)(i.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, J.jsx)(i.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, J.jsx)(en, {
                      data: a,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: P,
                      isLoading: f,
                      onDelete: k,
                      onUpdate: S,
                      onPagination: C,
                      pagination: v,
                      tableFilter: b,
                      extraOptions: w
                    })
                  })
                })
              }),
              (0, J.jsx)(s.Z, {})
            ]
          });
        },
        an = (0, o.memo)(tn);
    },
    1371: function (n, e, t) {
      t.d(e, {
        L: function () {
          return r;
        },
        s: function () {
          return a;
        }
      });
      var a = [
          'win',
          'bet',
          'cancel',
          'deposit',
          'withdraw',
          'user.add_balance',
          'agent.add_balance'
        ],
        r = ['success', 'pending', 'cancelled', 'failed'];
    },
    8694: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return C;
          }
        });
      var a = t(3433),
        r = t(1413),
        i = t(9439),
        o = t(2791),
        l = t(6871),
        c = t(6790),
        s = t(2302),
        d = t(5850),
        u = t(890),
        h = t(8096),
        g = t(4925),
        x = t(9321),
        Z = t(3786),
        p = t(9164),
        m = t(6151),
        f = t(5119),
        j = t(946),
        v = t(8673),
        b = t(4349),
        y = t(7395),
        w = t(1371),
        I = t(184),
        P = function (n) {
          var e = {
            approved: { text: 'Approved', color: 'success' },
            pending: { text: 'Pending', color: 'warning' },
            'agent.add_balance': {
              text: 'Agent Add Balance',
              color: 'primary'
            },
            'user.add_balance': { text: 'User Add Balance', color: 'info' }
          };
          if (isNaN(Number(n)) && e[n]) {
            var t = e[n],
              a = t.text,
              r = t.color;
            return (0, I.jsx)(y.Z, { color: r, children: a });
          }
          return Number(n) > 0
            ? (0, I.jsx)(y.Z, { color: 'success', children: String(n) })
            : (0, I.jsx)(y.Z, { color: 'error', children: String(n) });
        },
        k = function () {
          var n = !1,
            e = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (e = !0),
            'admin' === JSON.parse(localStorage.getItem('user')).role.name &&
              (n = !0);
          return {
            tableBody: function (n) {
              return [
                {
                  align: 'inherit',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.username
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: n.agentUsername
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: P(String(n.amount))
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: P(n.type)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children: P(n.status)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(u.Z, {
                      variant: 'body1',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === n || void 0 === n ? void 0 : n.createdAt) &&
                        (0, j.Z)(
                          (0, v.Z)(
                            null === n || void 0 === n ? void 0 : n.createdAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                }
              ];
            },
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
            tableFilter: function (t) {
              var r = t.type,
                i = t.status,
                o = t.dateFrom,
                l = t.dateTo;
              return [
                (0, I.jsx)(f.M, {
                  label: (0, I.jsx)(b.Z, { id: 'label.from' }),
                  onChange: o.onChange
                }),
                (0, I.jsx)(f.M, {
                  label: (0, I.jsx)(b.Z, { id: 'label.to' }),
                  onChange: l.onChange
                }),
                (0, I.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, I.jsx)(g.Z, {
                      id: 'Type',
                      children: (0, I.jsx)(b.Z, { id: 'label.type' })
                    }),
                    (0, I.jsxs)(x.Z, {
                      labelId: 'Type',
                      value: r.value,
                      label: (0, I.jsx)(b.Z, { id: 'label.type' }),
                      onChange: function (n) {
                        r.onChange((0, a.Z)(n.target.value));
                      },
                      multiple: !0,
                      children: [
                        (0, I.jsx)(Z.Z, {
                          value: '',
                          children: (0, I.jsx)('em', { children: 'Default' })
                        }),
                        w.s.map(function (n) {
                          return (0,
                          I.jsx)(Z.Z, { value: n, children: ''.concat(n.slice(0, 1).toUpperCase()).concat(n.slice(1)) }, n);
                        })
                      ]
                    })
                  ]
                }),
                (0, I.jsxs)(h.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, I.jsx)(g.Z, {
                      id: 'status',
                      children: (0, I.jsx)(b.Z, { id: 'label.status' })
                    }),
                    (0, I.jsxs)(x.Z, {
                      labelId: 'status',
                      value: i.value,
                      label: (0, I.jsx)(b.Z, { id: 'label.status' }),
                      onChange: function (n) {
                        return i.onChange(n.target.value);
                      },
                      children: [
                        (0, I.jsx)(Z.Z, {
                          value: '',
                          children: (0, I.jsx)('em', { children: 'Default' })
                        }),
                        (0, I.jsx)(
                          Z.Z,
                          { value: 'approved', children: 'Approved' },
                          1
                        ),
                        (0, I.jsx)(
                          Z.Z,
                          { value: 'pending', children: 'Pending' },
                          2
                        )
                      ]
                    })
                  ]
                }),
                (0, I.jsx)(I.Fragment, {
                  children:
                    n && !1 === e
                      ? (0, I.jsx)(p.Z, {
                          children: (0, I.jsx)(m.Z, {
                            href: '?type=agent.add_balance',
                            variant: 'outlined',
                            children: (0, I.jsx)(b.Z, {
                              id: 'label.See-request'
                            })
                          })
                        })
                      : e && !0 === n
                      ? (0, I.jsx)(p.Z, {
                          children: (0, I.jsx)(m.Z, {
                            href: '?type=',
                            variant: 'outlined',
                            color: 'secondary',
                            children: (0, I.jsx)(b.Z, { id: 'label.See-all' })
                          })
                        })
                      : null
                })
              ];
            }
          };
        },
        S = 'title.transactions-management',
        C = function () {
          var n,
            e = (0, l.UO)(),
            t = e.slug,
            u = e.type;
          n =
            'betting-history' === u
              ? 'bet,win,cancel'
              : 'recharge-history' === u
              ? 'agent.add_balance,user.add_balance,deposit,withdraw'
              : '';
          var h = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: S }
            ],
            g = k(),
            x = g.tableBody,
            Z = g.tableHeader,
            p = g.tableFilter,
            m = (0, o.useState)([]),
            f = (0, i.Z)(m, 2),
            j = f[0],
            v = f[1],
            b = (0, o.useState)({
              page: 0,
              size: 10,
              status: '',
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: [],
              dateFrom: '',
              dateTo: ''
            }),
            y = (0, i.Z)(b, 2),
            w = y[0],
            P = y[1],
            C = (0, s.kn)((0, r.Z)({ id: t, type: '?type='.concat(n) }, w), {
              refetchOnMountOrArgChange: !0
            }),
            L = C.data,
            B = C.isFetching;
          return (
            (0, o.useEffect)(function () {
              'agent.add_balance' ===
                new URLSearchParams(window.location.search).get('type') &&
                P(
                  (0, r.Z)(
                    (0, r.Z)({}, w),
                    {},
                    { type: (0, a.Z)(w.type), status: 'pending' }
                  )
                );
            }, []),
            (0, o.useEffect)(
              function () {
                L &&
                  v(function () {
                    var n;
                    return (0,
                    d.TY)(L.data.data, null === (n = Z[w.sortBy]) || void 0 === n ? void 0 : n.name, w.sortDirection);
                  });
              },
              [L, w.sortBy, w.sortDirection]
            ),
            (0, I.jsx)(I.Fragment, {
              children: (0, I.jsx)(c.Z, {
                title: S,
                data: j,
                totalItems:
                  null === L || void 0 === L ? void 0 : L.data.totalItems,
                tableHeader: Z,
                tableBody: x,
                headerTitle: S,
                breadcrumbs: h,
                isLoading: B,
                pagination: w,
                onPagination: P,
                tableFilter: p({
                  dateFrom: {
                    value: w.dateFrom,
                    onChange: function (n) {
                      return P(
                        (0, r.Z)(
                          (0, r.Z)({}, w),
                          {},
                          { dateFrom: (0, d.Zd)(n, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: w.dateTo,
                    onChange: function (n) {
                      return P(
                        (0, r.Z)(
                          (0, r.Z)({}, w),
                          {},
                          { dateTo: (0, d.Zd)(n, 'to') }
                        )
                      );
                    }
                  },
                  type: {
                    value: w.type,
                    onChange: function (n) {
                      return P(
                        (0, r.Z)(
                          (0, r.Z)({}, w),
                          {},
                          { type: Array.from(new Set(n)) }
                        )
                      );
                    }
                  },
                  status: {
                    value: w.status,
                    onChange: function (n) {
                      return P((0, r.Z)((0, r.Z)({}, w), {}, { status: n }));
                    }
                  }
                })
              })
            })
          );
        };
    },
    4732: function (n, e, t) {
      var a = t(9439),
        r = t(2791);
      e.Z = function (n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          t = (0, r.useState)(n),
          i = (0, a.Z)(t, 2),
          o = i[0],
          l = i[1];
        return (
          (0, r.useEffect)(
            function () {
              var t = setTimeout(function () {
                l(n);
              }, e);
              return function () {
                clearTimeout(t);
              };
            },
            [n, e]
          ),
          o
        );
      };
    },
    5850: function (n, e, t) {
      t.d(e, {
        TY: function () {
          return o;
        },
        Zd: function () {
          return l;
        }
      });
      var a = t(3433),
        r = t(2426),
        i = t.n(r),
        o = function (n, e, t) {
          return (0, a.Z)(n).sort(function (n, a) {
            return 'string' === typeof n[e] && 'string' === typeof a[e]
              ? 'asc' === t
                ? n[e].localeCompare(a[e])
                : a[e].localeCompare(n[e])
              : 'number' === typeof n[e] && 'number' === typeof a[e]
              ? 'asc' === t
                ? n[e] - a[e]
                : a[e] - n[e]
              : 0;
          });
        },
        l = function (n, e) {
          return 'to' === e
            ? i()(n).endOf('day').utc().toISOString()
            : i()(n).startOf('day').utc().toISOString();
        };
    },
    9709: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return b;
        }
      });
      var a = t(4942),
        r = t(3366),
        i = t(7462),
        o = t(2791),
        l = t(4036),
        c = t(7384),
        s = t(4419),
        d = t(6934),
        u = t(1402),
        h = t(6151),
        g = t(3239),
        x = t(1217);
      function Z(n) {
        return (0, x.Z)('MuiLoadingButton', n);
      }
      var p = (0, t(5878).Z)('MuiLoadingButton', [
          'root',
          'loading',
          'loadingIndicator',
          'loadingIndicatorCenter',
          'loadingIndicatorStart',
          'loadingIndicatorEnd',
          'endIconLoadingEnd',
          'startIconLoadingStart'
        ]),
        m = t(184),
        f = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        j = (0, d.ZP)(h.Z, {
          shouldForwardProp: function (n) {
            return (
              (function (n) {
                return (
                  'ownerState' !== n &&
                  'theme' !== n &&
                  'sx' !== n &&
                  'as' !== n &&
                  'classes' !== n
                );
              })(n) || 'classes' === n
            );
          },
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: function (n, e) {
            return [
              e.root,
              e.startIconLoadingStart &&
                (0, a.Z)(
                  {},
                  '& .'.concat(p.startIconLoadingStart),
                  e.startIconLoadingStart
                ),
              e.endIconLoadingEnd &&
                (0, a.Z)(
                  {},
                  '& .'.concat(p.endIconLoadingEnd),
                  e.endIconLoadingEnd
                )
            ];
          }
        })(function (n) {
          var e = n.ownerState,
            t = n.theme;
          return (0,
          i.Z)((0, a.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: t.transitions.create(['opacity'], { duration: t.transitions.duration.short }), opacity: 0 }), 'center' === e.loadingPosition && (0, a.Z)({ transition: t.transitions.create(['background-color', 'box-shadow', 'border-color'], { duration: t.transitions.duration.short }) }, '&.'.concat(p.loading), { color: 'transparent' }), 'start' === e.loadingPosition && e.fullWidth && (0, a.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: t.transitions.create(['opacity'], { duration: t.transitions.duration.short }), opacity: 0, marginRight: -8 }), 'end' === e.loadingPosition && e.fullWidth && (0, a.Z)({}, '& .'.concat(p.startIconLoadingStart, ', & .').concat(p.endIconLoadingEnd), { transition: t.transitions.create(['opacity'], { duration: t.transitions.duration.short }), opacity: 0, marginLeft: -8 }));
        }),
        v = (0, d.ZP)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: function (n, e) {
            var t = n.ownerState;
            return [
              e.loadingIndicator,
              e['loadingIndicator'.concat((0, l.Z)(t.loadingPosition))]
            ];
          }
        })(function (n) {
          var e = n.theme,
            t = n.ownerState;
          return (0,
          i.Z)({ position: 'absolute', visibility: 'visible', display: 'flex' }, 'start' === t.loadingPosition && ('outlined' === t.variant || 'contained' === t.variant) && { left: 'small' === t.size ? 10 : 14 }, 'start' === t.loadingPosition && 'text' === t.variant && { left: 6 }, 'center' === t.loadingPosition && { left: '50%', transform: 'translate(-50%)', color: e.palette.action.disabled }, 'end' === t.loadingPosition && ('outlined' === t.variant || 'contained' === t.variant) && { right: 'small' === t.size ? 10 : 14 }, 'end' === t.loadingPosition && 'text' === t.variant && { right: 6 }, 'start' === t.loadingPosition && t.fullWidth && { position: 'relative', left: -10 }, 'end' === t.loadingPosition && t.fullWidth && { position: 'relative', right: -10 });
        }),
        b = o.forwardRef(function (n, e) {
          var t = (0, u.Z)({ props: n, name: 'MuiLoadingButton' }),
            a = t.children,
            d = t.disabled,
            h = void 0 !== d && d,
            x = t.id,
            p = t.loading,
            b = void 0 !== p && p,
            y = t.loadingIndicator,
            w = t.loadingPosition,
            I = void 0 === w ? 'center' : w,
            P = t.variant,
            k = void 0 === P ? 'text' : P,
            S = (0, r.Z)(t, f),
            C = (0, c.Z)(x),
            L =
              null != y
                ? y
                : (0, m.jsx)(g.Z, {
                    'aria-labelledby': C,
                    color: 'inherit',
                    size: 16
                  }),
            B = (0, i.Z)({}, t, {
              disabled: h,
              loading: b,
              loadingIndicator: L,
              loadingPosition: I,
              variant: k
            }),
            F = (function (n) {
              var e = n.loading,
                t = n.loadingPosition,
                a = n.classes,
                r = {
                  root: ['root', e && 'loading'],
                  startIcon: [e && 'startIconLoading'.concat((0, l.Z)(t))],
                  endIcon: [e && 'endIconLoading'.concat((0, l.Z)(t))],
                  loadingIndicator: [
                    'loadingIndicator',
                    e && 'loadingIndicator'.concat((0, l.Z)(t))
                  ]
                },
                o = (0, s.Z)(r, Z, a);
              return (0, i.Z)({}, a, o);
            })(B);
          return (0,
          m.jsx)(j, (0, i.Z)({ disabled: h || b, id: C, ref: e }, S, { variant: k, classes: F, ownerState: B, children: 'end' === B.loadingPosition ? (0, m.jsxs)(o.Fragment, { children: [a, b && (0, m.jsx)(v, { className: F.loadingIndicator, ownerState: B, children: L })] }) : (0, m.jsxs)(o.Fragment, { children: [b && (0, m.jsx)(v, { className: F.loadingIndicator, ownerState: B, children: L }), a] }) }));
        });
    }
  }
]);
//# sourceMappingURL=694.b5e05edc.chunk.js.map
