'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [649],
  {
    173: function (n, e, t) {
      var r = t(6934),
        i = t(9164),
        o = t(4554),
        a = t(890),
        c = t(4349),
        l = t(184),
        s = (0, r.ZP)(i.Z)(function (n) {
          var e = n.theme;
          return '\n        margin-top: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function () {
        return (0, l.jsx)(s, {
          className: 'footer-wrapper',
          children: (0, l.jsxs)(o.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, l.jsx)(o.Z, {
                children: (0, l.jsxs)(a.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, l.jsx)(c.Z, { id: 'footer.admin' })]
                })
              }),
              (0, l.jsx)(a.Z, {
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
      var r = t(1413),
        i = t(5987),
        o = t(6934),
        a = t(184),
        c = ['color', 'children'],
        l = (0, o.ZP)('span')(function (n) {
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
          o = n.children,
          s = (0, i.Z)(n, c);
        return (0, a.jsx)(
          l,
          (0, r.Z)(
            (0, r.Z)({ className: 'MuiLabel-' + t }, s),
            {},
            { children: o }
          )
        );
      };
    },
    8418: function (n, e, t) {
      var r = t(6934),
        i = t(4554),
        o = t(9164),
        a = t(184),
        c = (0, r.ZP)(i.Z)(function (n) {
          var e = n.theme;
          return '\n        padding: '.concat(e.spacing(4), ';\n');
        });
      e.Z = function (n) {
        var e = n.children;
        return (0, a.jsx)(c, {
          className: 'MuiPageTitle-wrapper',
          children: (0, a.jsx)(o.Z, { maxWidth: 'lg', children: e })
        });
      };
    },
    3481: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        }
      });
      var r = t(1889),
        i = t(890),
        o = t(4554),
        a = t(6151),
        c = t(4696),
        l = t(2791),
        s = t(8333),
        d = t(3517),
        u = t(6871),
        h = t(3504),
        x = t(4349),
        p = t(184),
        Z = function (n) {
          var e = n.links,
            t = void 0 === e ? [] : e,
            r = (0, u.TH)();
          return (0, p.jsx)(d.Z, {
            separator: (0, p.jsx)(s.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (n, e) {
              return e === t.length - 1
                ? (0, p.jsx)(
                    i.Z,
                    {
                      color: 'inherit',
                      children: (0, p.jsx)(x.Z, { id: n.name })
                    },
                    e
                  )
                : (0, p.jsx)(
                    h.rU,
                    {
                      to:
                        (null === n || void 0 === n ? void 0 : n.link) ||
                        r.pathname,
                      onClick:
                        (null === n || void 0 === n ? void 0 : n.onClick) &&
                        n.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, p.jsx)(i.Z, {
                        color: 'inherit',
                        children: (0, p.jsx)(x.Z, { id: n.name })
                      })
                    },
                    e
                  );
            })
          });
        },
        g = function (n) {
          var e = n.headerTitle,
            t = n.headerSubtitle,
            l = n.breadcrumbs,
            s = n.onOpenModal;
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
                    children: (0, p.jsx)(x.Z, { id: e })
                  }),
                  (0, p.jsx)(i.Z, { variant: 'subtitle2', children: t }),
                  l &&
                    (0, p.jsx)(o.Z, {
                      marginTop: '8px',
                      children: (0, p.jsx)(Z, { links: l })
                    })
                ]
              }),
              s &&
                (0, p.jsx)(r.ZP, {
                  item: !0,
                  children: (0, p.jsx)(a.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, p.jsx)(c.Z, { fontSize: 'small' }),
                    onClick: s,
                    children: (0, p.jsx)(x.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        m = (0, l.memo)(g);
    },
    6790: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return rn;
        }
      });
      var r,
        i = t(9164),
        o = t(1889),
        a = t(2791),
        c = t(6907),
        l = t(3539),
        s = t(173),
        d = t(8418),
        u = t(3481),
        h = t(1413),
        x = t(3433),
        p = t(9439),
        Z = t(168),
        g = t(8036),
        m = t(1675),
        f = t(5403),
        j = t(1686),
        b = t(9709),
        v = t(6934),
        y = t(3967),
        k = t(7639),
        w = t(890),
        P = t(6151),
        C = t(3400),
        S = t(7621),
        I = t(4554),
        B = t(4721),
        T = t(8550),
        O = t(9281),
        z = t(9836),
        L = t(1048),
        D = t(5855),
        M = t(3994),
        F = t(4454),
        H = t(720),
        A = t(3382),
        N = t(3239),
        R = t(3033),
        U = t(7837),
        E = t(1715),
        W = t(493),
        Y = t(5021),
        _ = t(9900),
        q = t(4934),
        G = t(184),
        J = (0, v.ZP)(P.Z)(function (n) {
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
          var n = (0, U.d)(),
            e = n.toggle,
            t = n.visible,
            r = (0, a.useRef)(null);
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
                      (0, G.jsx)(J, {
                        sx: { ml: 1 },
                        startIcon: (0, G.jsx)(g.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, G.jsx)(C.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: r,
                    sx: { ml: 2, p: 1 },
                    children: (0, G.jsx)(q.Z, {})
                  })
                ]
              }),
              (0, G.jsx)(E.Z, {
                keepMounted: !0,
                anchorEl: r.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, G.jsxs)(W.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, G.jsx)(Y.ZP, {
                      button: !0,
                      children: (0, G.jsx)(_.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, G.jsx)(Y.ZP, {
                      button: !0,
                      children: (0, G.jsx)(_.Z, {
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
        $ = (0, v.ZP)(b.Z)(
          r ||
            (r = (0, Z.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        nn = function (n) {
          var e = n.data,
            t = n.tableHeader,
            r = n.isLoading,
            o = n.pagination,
            c = n.totalItems,
            l = void 0 === c ? 0 : c,
            s = n.tableFilter,
            d = n.extraOptions,
            u = n.isShowBulkActions,
            Z = n.tableBody,
            b = n.onDelete,
            v = n.onUpdate,
            E = n.onPagination,
            W = (0, y.Z)(),
            Y = (0, U.d)(),
            _ = Y.visible,
            q = Y.show,
            J = Y.hide,
            nn = (0, a.useState)(''),
            en = (0, p.Z)(nn, 2),
            tn = en[0],
            rn = en[1],
            on = (0, a.useState)([]),
            an = (0, p.Z)(on, 2),
            cn = an[0],
            ln = an[1],
            sn = (0, a.useState)(''),
            dn = (0, p.Z)(sn, 2),
            un = dn[0],
            hn = dn[1],
            xn = (0, V.Z)(un, 500);
          (0, a.useEffect)(
            function () {
              E((0, h.Z)((0, h.Z)({}, o), {}, { search: xn }));
            },
            [xn]
          );
          var pn = cn.length > 0 && cn.length < e.length,
            Zn = cn.length === e.length,
            gn = function (n) {
              q(), rn(n);
            },
            mn = function (n) {
              b(n), J();
            },
            fn = (0, a.useMemo)(
              function () {
                return b || v || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [b, v, t]
            ),
            jn = function (n) {
              var e = n.item,
                t = n.hide,
                r = (n.onDelete, n.handleShow),
                o = n.rowId,
                a = n.visible,
                c = n.theme,
                l = n.isLoading;
              return (0, G.jsx)(k.Z, {
                title: (0, G.jsxs)(i.Z, {
                  children: [
                    (0, G.jsx)(w.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, G.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, G.jsx)(P.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, G.jsx)($, {
                          onClick: function () {
                            return mn(e.id);
                          },
                          loading: l,
                          loadingPosition: 'start',
                          startIcon: (0, G.jsx)(j.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: e.id === o && a && !l,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, G.jsx)(C.Z, {
                  sx: {
                    '&:hover': { background: c.colors.error.lighter },
                    color: c.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return r(e.id);
                  },
                  children: (0, G.jsx)(g.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, G.jsxs)(S.Z, {
            children: [
              u &&
                (null === cn || void 0 === cn ? void 0 : cn.length) > 0 &&
                (0, G.jsx)(I.Z, { flex: 1, p: 2, children: (0, G.jsx)(K, {}) }),
              (0, G.jsx)(B.Z, {}),
              (0, G.jsxs)(S.Z, {
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
                      (0, G.jsx)(T.Z, {
                        label: (0, G.jsx)(X.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (n) {
                          return hn(n.target.value.trim());
                        }
                      }),
                      (0, G.jsx)(C.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, G.jsx)(f.Z, {})
                      })
                    ]
                  }),
                  (0, G.jsx)(I.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === s || void 0 === s
                        ? void 0
                        : s.map(function (n, e) {
                            return (0, G.jsx)(I.Z, { children: n }, e);
                          })
                  })
                ]
              }),
              (0, G.jsx)(O.Z, {
                children: (0, G.jsxs)(z.Z, {
                  children: [
                    (0, G.jsx)(L.Z, {
                      children: (0, G.jsxs)(D.Z, {
                        children: [
                          u &&
                            (0, G.jsx)(M.Z, {
                              padding: 'checkbox',
                              children: (0, G.jsx)(F.Z, {
                                color: 'primary',
                                checked: Zn,
                                indeterminate: pn,
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
                          fn.map(function (n, e) {
                            return (0, G.jsx)(
                              M.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, n.tableProps),
                                {},
                                {
                                  align: n.align,
                                  children: n.name
                                    ? (0, G.jsx)(H.Z, {
                                        active: o.sortBy === e,
                                        direction:
                                          o.sortBy === e
                                            ? o.sortDirection
                                            : 'asc',
                                        onClick: function () {
                                          return (function (n) {
                                            var e = (0, h.Z)(
                                              (0, h.Z)({}, o),
                                              {},
                                              {
                                                sortBy: n,
                                                sortDirection:
                                                  o.sortBy === n &&
                                                  'asc' === o.sortDirection
                                                    ? 'desc'
                                                    : 'asc'
                                              }
                                            );
                                            E(e);
                                          })(e);
                                        },
                                        children: (0, G.jsx)(X.Z, {
                                          id: n.title
                                        })
                                      })
                                    : (0, G.jsx)(X.Z, {
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
                    (0, G.jsxs)(A.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !e || e.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        e.map(function (n) {
                          var e,
                            t = cn.includes(n.id);
                          return (0, G.jsxs)(
                            D.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                u &&
                                  (0, G.jsx)(
                                    M.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, G.jsx)(F.Z, {
                                        color: 'primary',
                                        checked: t,
                                        onChange: function (e) {
                                          return (
                                            (t = n.id),
                                            void (cn.includes(t)
                                              ? ln(function (n) {
                                                  return n.filter(function (n) {
                                                    return n !== t;
                                                  });
                                                })
                                              : ln(function (n) {
                                                  return [].concat(
                                                    (0, x.Z)(n),
                                                    [t]
                                                  );
                                                }))
                                          );
                                          var t;
                                        },
                                        value: t
                                      })
                                    },
                                    (0, Q.Z)()
                                  ),
                                null === (e = Z(n)) || void 0 === e
                                  ? void 0
                                  : e.map(function (n) {
                                      return (0,
                                      G.jsx)(M.Z, { align: n.align, sx: (0, h.Z)({}, n.tableProps), children: n.children }, (0, Q.Z)());
                                    }),
                                (v || b) &&
                                  (0, G.jsxs)(
                                    M.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map(function (n) {
                                              return (0,
                                              G.jsx)(k.Z, { title: '', arrow: !0, children: n });
                                            }),
                                        v &&
                                          (0, G.jsx)(k.Z, {
                                            title: (0, G.jsx)(X.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, G.jsx)(C.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    W.colors.primary.lighter
                                                },
                                                color: W.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return v(n.id);
                                              },
                                              children: (0, G.jsx)(m.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        b &&
                                          jn({
                                            item: n,
                                            rowId: tn,
                                            visible: _,
                                            theme: W,
                                            isLoading: r,
                                            handleShow: gn,
                                            onDelete: b,
                                            hide: J
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
                        r &&
                          (0, G.jsx)(D.Z, {
                            children: (0, G.jsx)(M.Z, {
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
                                children: (0, G.jsx)(N.Z, {})
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
                children: (0, G.jsx)(R.Z, {
                  component: 'div',
                  count: l,
                  onPageChange: function (n, e) {
                    E((0, h.Z)((0, h.Z)({}, o), {}, { page: e }));
                  },
                  onRowsPerPageChange: function (n) {
                    E(
                      (0, h.Z)(
                        (0, h.Z)({}, o),
                        {},
                        { size: Number(n.target.value) }
                      )
                    );
                  },
                  page: o.page,
                  rowsPerPage: o.size,
                  rowsPerPageOptions: [5, 10, 25, 30],
                  showLastButton: !0,
                  showFirstButton: !0
                })
              })
            ]
          });
        },
        en = (0, a.memo)(nn),
        tn = function (n) {
          var e = n.title,
            t = n.data,
            r = void 0 === t ? [] : t,
            a = n.tableHeader,
            h = void 0 === a ? [{ align: 'inherit', title: 'Title' }] : a,
            x = n.headerTitle,
            p = void 0 === x ? '' : x,
            Z = n.headerSubtitle,
            g = void 0 === Z ? '' : Z,
            m = n.isLoading,
            f = void 0 !== m && m,
            j = n.breadcrumbs,
            b = n.pagination,
            v = n.tableFilter,
            y = n.totalItems,
            k = n.extraOptions,
            w = n.isShowBulkActions,
            P = void 0 === w || w,
            C = n.onOpenModal,
            S = n.tableBody,
            I = n.onDelete,
            B = n.onUpdate,
            T = n.onPagination,
            O = (0, l.Z)();
          return (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(c.ql, {
                children: (0, G.jsx)('title', {
                  children: O.formatMessage({ id: e })
                })
              }),
              (0, G.jsx)(d.Z, {
                children: (0, G.jsx)(u.Z, {
                  headerTitle: p,
                  headerSubtitle: g,
                  onOpenModal: C,
                  breadcrumbs: j
                })
              }),
              (0, G.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, G.jsx)(o.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, G.jsx)(o.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, G.jsx)(en, {
                      data: r,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: S,
                      isLoading: f,
                      onDelete: I,
                      onUpdate: B,
                      onPagination: T,
                      pagination: b,
                      tableFilter: v,
                      extraOptions: k,
                      isShowBulkActions: P
                    })
                  })
                })
              }),
              (0, G.jsx)(s.Z, {})
            ]
          });
        },
        rn = (0, a.memo)(tn);
    },
    4732: function (n, e, t) {
      var r = t(9439),
        i = t(2791);
      e.Z = function (n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          t = (0, i.useState)(n),
          o = (0, r.Z)(t, 2),
          a = o[0],
          c = o[1];
        return (
          (0, i.useEffect)(
            function () {
              var t = setTimeout(function () {
                c(n);
              }, e);
              return function () {
                clearTimeout(t);
              };
            },
            [n, e]
          ),
          a
        );
      };
    },
    5850: function (n, e, t) {
      t.d(e, {
        TY: function () {
          return a;
        },
        Zd: function () {
          return c;
        }
      });
      var r = t(3433),
        i = t(2426),
        o = t.n(i),
        a = function (n, e, t) {
          return (0, r.Z)(n).sort(function (n, r) {
            return 'string' === typeof n[e] && 'string' === typeof r[e]
              ? 'asc' === t
                ? n[e].localeCompare(r[e])
                : r[e].localeCompare(n[e])
              : 'number' === typeof n[e] && 'number' === typeof r[e]
              ? 'asc' === t
                ? n[e] - r[e]
                : r[e] - n[e]
              : 0;
          });
        },
        c = function (n, e) {
          return 'to' === e
            ? o()(n).endOf('day').utc().toISOString()
            : o()(n).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=649.77db4bc6.chunk.js.map
