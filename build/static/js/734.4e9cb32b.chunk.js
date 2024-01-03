'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [734],
  {
    173: function (e, n, t) {
      var i = t(6934),
        r = t(9164),
        a = t(4554),
        o = t(890),
        l = t(4349),
        s = t(184),
        d = (0, i.ZP)(r.Z)(function (e) {
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
    7590: function (e, n, t) {
      t.d(n, {
        P: function () {
          return b;
        },
        n: function () {
          return w;
        }
      });
      var i = t(1413),
        r = t(5987),
        a = t(5403),
        o = t(8096),
        l = t(4925),
        s = t(9321),
        d = t(9834),
        c = t(8550),
        u = t(3466),
        h = t(3786),
        p = t(4554),
        x = t(3239),
        m = t(7071),
        v = t(2791),
        f = t(1134),
        Z = t(184),
        g = [
          'control',
          'name',
          'label',
          'options',
          'isFetching',
          'errors',
          'searchTerm',
          'onSearch',
          'setSelected'
        ],
        j = function (e) {
          var n,
            t = e.control,
            v = e.name,
            j = e.label,
            b = e.options,
            y = e.isFetching,
            w = e.errors,
            k = e.searchTerm,
            C = e.onSearch,
            D = e.setSelected,
            S = (0, r.Z)(e, g);
          return t
            ? (0, Z.jsx)(f.Qr, {
                control: t,
                name: v,
                render: function (e) {
                  var n,
                    t = e.field;
                  return (0, Z.jsxs)(o.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== w && void 0 !== w && w[v] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, Z.jsxs)(
                        s.Z,
                        (0, i.Z)(
                          (0, i.Z)(
                            (0, i.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: j,
                                value:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.value) || '',
                                error:
                                  !(null === w || void 0 === w || !w[v]) &&
                                  !t.value
                              },
                              t
                            ),
                            S
                          ),
                          {},
                          {
                            children: [
                              C &&
                                (0, Z.jsx)(d.Z, {
                                  children: (0, Z.jsx)(c.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, Z.jsx)(u.Z, {
                                        position: 'start',
                                        children: (0, Z.jsx)(a.Z, {})
                                      })
                                    },
                                    value: k,
                                    onChange: function (e) {
                                      return C(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
                                    return (0, Z.jsx)(
                                      h.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (n = e),
                                            void (
                                              null === D ||
                                              void 0 === D ||
                                              D(n)
                                            )
                                          );
                                          var n;
                                        },
                                        children: e.name
                                      },
                                      e.id
                                    );
                                  }),
                              y &&
                                (0, Z.jsx)(p.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, Z.jsx)(x.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === w || void 0 === w ? void 0 : w[v]) &&
                        !t.value &&
                        (0, Z.jsx)(m.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === w ||
                            void 0 === w ||
                            null === (n = w[v]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, Z.jsxs)(o.Z, {
                fullWidth: !0,
                children: [
                  (0, Z.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== w && void 0 !== w && w[v]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, Z.jsx)(
                    s.Z,
                    (0, i.Z)(
                      (0, i.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        S
                      ),
                      {},
                      {
                        error: !(null === w || void 0 === w || !w[v]),
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                Z.jsx)(h.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === w || void 0 === w || !w[v]) &&
                    (0, Z.jsx)(m.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === w ||
                        void 0 === w ||
                        null === (n = w[v]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        b = (0, v.memo)(j),
        y = ['label', 'name', 'errors', 'register'],
        w = function (e) {
          var n = e.label,
            t = e.name,
            a = e.errors,
            o = e.register,
            l = (0, r.Z)(e, y);
          return (0, Z.jsx)(
            c.Z,
            (0, i.Z)(
              (0, i.Z)(
                {
                  label: n,
                  error: !!a[t],
                  helperText: a[t] ? a[t].message : '',
                  fullWidth: !0
                },
                o(t)
              ),
              l
            )
          );
        };
    },
    7891: function (e, n, t) {
      var i = t(1413),
        r = t(5987),
        a = t(3329),
        o = t(9709),
        l = t(4721),
        s = t(9164),
        d = t(6151),
        c = t(5574),
        u = t(5661),
        h = t(493),
        p = t(4349),
        x = t(184),
        m = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          v = e.open,
          f = e.isLoading,
          Z = void 0 !== f && f,
          g = e.onClose,
          j = e.onOk,
          b = (0, r.Z)(e, m);
        return (0, x.jsxs)(
          c.Z,
          (0, i.Z)(
            (0, i.Z)({ onClose: g, open: v }, b),
            {},
            {
              children: [
                n && (0, x.jsx)(u.Z, { variant: 'h4', children: n }),
                n && (0, x.jsx)(l.Z, {}),
                (0, x.jsx)(h.Z, { sx: { pt: 0 }, children: t }),
                (0, x.jsx)(l.Z, {}),
                (0, x.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, x.jsx)(d.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: g,
                      children: (0, x.jsx)(p.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, x.jsx)(o.Z, {
                        onClick: j,
                        loading: Z,
                        loadingPosition: 'start',
                        startIcon: (0, x.jsx)(a.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, x.jsx)(p.Z, { id: 'label.OK' })
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
        d = t(8333),
        c = t(3517),
        u = t(6871),
        h = t(3504),
        p = t(4349),
        x = t(184),
        m = function (e) {
          var n = e.links,
            t = void 0 === n ? [] : n,
            i = (0, u.TH)();
          return (0, x.jsx)(c.Z, {
            separator: (0, x.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (e, n) {
              return n === t.length - 1
                ? (0, x.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(p.Z, { id: e.name })
                    },
                    n
                  )
                : (0, x.jsx)(
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
                      children: (0, x.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, x.jsx)(p.Z, { id: e.name })
                      })
                    },
                    n
                  );
            })
          });
        },
        v = function (e) {
          var n = e.headerTitle,
            t = e.headerSubtitle,
            s = e.breadcrumbs,
            d = e.onOpenModal;
          return (0, x.jsxs)(i.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, x.jsxs)(i.ZP, {
                item: !0,
                children: [
                  (0, x.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, x.jsx)(p.Z, { id: n })
                  }),
                  (0, x.jsx)(r.Z, { variant: 'subtitle2', children: t }),
                  s &&
                    (0, x.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(m, { links: s })
                    })
                ]
              }),
              d &&
                (0, x.jsx)(i.ZP, {
                  item: !0,
                  children: (0, x.jsx)(o.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, x.jsx)(p.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        f = (0, s.memo)(v);
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
        d = t(173),
        c = t(8418),
        u = t(3481),
        h = t(1413),
        p = t(3433),
        x = t(9439),
        m = t(168),
        v = t(8036),
        f = t(1675),
        Z = t(5403),
        g = t(1686),
        j = t(9709),
        b = t(6934),
        y = t(3967),
        w = t(7639),
        k = t(890),
        C = t(6151),
        D = t(3400),
        S = t(7621),
        T = t(4554),
        P = t(4721),
        N = t(8550),
        O = t(9281),
        I = t(9836),
        F = t(1048),
        B = t(5855),
        z = t(3994),
        U = t(4454),
        L = t(720),
        M = t(3382),
        E = t(3239),
        H = t(3033),
        A = t(7837),
        R = t(1715),
        W = t(493),
        Y = t(5021),
        $ = t(9900),
        V = t(4934),
        _ = t(184),
        q = (0, b.ZP)(C.Z)(function (e) {
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
          var e = (0, A.d)(),
            n = e.toggle,
            t = e.visible,
            i = (0, o.useRef)(null);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(T.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, _.jsxs)(T.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, _.jsx)(k.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, _.jsx)(q, {
                        sx: { ml: 1 },
                        startIcon: (0, _.jsx)(v.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, _.jsx)(D.Z, {
                    color: 'primary',
                    onClick: n,
                    ref: i,
                    sx: { ml: 2, p: 1 },
                    children: (0, _.jsx)(V.Z, {})
                  })
                ]
              }),
              (0, _.jsx)(R.Z, {
                keepMounted: !0,
                anchorEl: i.current,
                open: t,
                onClose: n,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, _.jsxs)(W.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, _.jsx)(Y.ZP, {
                      button: !0,
                      children: (0, _.jsx)($.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, _.jsx)(Y.ZP, {
                      button: !0,
                      children: (0, _.jsx)($.Z, {
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
        X = t(4732),
        G = t(4349),
        J = (0, b.ZP)(j.Z)(
          i ||
            (i = (0, m.Z)([
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
            d = e.tableFilter,
            c = e.extraOptions,
            u = e.isShowBulkActions,
            m = e.tableBody,
            j = e.onDelete,
            b = e.onUpdate,
            R = e.onPagination,
            W = (0, y.Z)(),
            Y = (0, A.d)(),
            $ = Y.visible,
            V = Y.show,
            q = Y.hide,
            ee = (0, o.useState)(''),
            ne = (0, x.Z)(ee, 2),
            te = ne[0],
            ie = ne[1],
            re = (0, o.useState)([]),
            ae = (0, x.Z)(re, 2),
            oe = ae[0],
            le = ae[1],
            se = (0, o.useState)(''),
            de = (0, x.Z)(se, 2),
            ce = de[0],
            ue = de[1],
            he = (0, X.Z)(ce, 500);
          (0, o.useEffect)(
            function () {
              R((0, h.Z)((0, h.Z)({}, a), {}, { search: he }));
            },
            [he]
          );
          var pe = oe.length > 0 && oe.length < n.length,
            xe = oe.length === n.length,
            me = function (e) {
              V(), ie(e);
            },
            ve = function (e) {
              j(e), q();
            },
            fe = (0, o.useMemo)(
              function () {
                return j || b || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [j, b, t]
            ),
            Ze = function (e) {
              var n = e.item,
                t = e.hide,
                i = (e.onDelete, e.handleShow),
                a = e.rowId,
                o = e.visible,
                l = e.theme,
                s = e.isLoading;
              return (0, _.jsx)(w.Z, {
                title: (0, _.jsxs)(r.Z, {
                  children: [
                    (0, _.jsx)(k.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, _.jsxs)(r.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, _.jsx)(C.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, _.jsx)(J, {
                          onClick: function () {
                            return ve(n.id);
                          },
                          loading: s,
                          loadingPosition: 'start',
                          startIcon: (0, _.jsx)(g.Z, {}),
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
                children: (0, _.jsx)(D.Z, {
                  sx: {
                    '&:hover': { background: l.colors.error.lighter },
                    color: l.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return i(n.id);
                  },
                  children: (0, _.jsx)(v.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, _.jsxs)(S.Z, {
            children: [
              u &&
                (null === oe || void 0 === oe ? void 0 : oe.length) > 0 &&
                (0, _.jsx)(T.Z, { flex: 1, p: 2, children: (0, _.jsx)(K, {}) }),
              (0, _.jsx)(P.Z, {}),
              (0, _.jsxs)(S.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, _.jsxs)(T.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, _.jsx)(N.Z, {
                        label: (0, _.jsx)(G.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (e) {
                          return ue(e.target.value.trim());
                        }
                      }),
                      (0, _.jsx)(D.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, _.jsx)(Z.Z, {})
                      })
                    ]
                  }),
                  (0, _.jsx)(T.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, n) {
                            return (0, _.jsx)(T.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, _.jsx)(O.Z, {
                children: (0, _.jsxs)(I.Z, {
                  children: [
                    (0, _.jsx)(F.Z, {
                      children: (0, _.jsxs)(B.Z, {
                        children: [
                          u &&
                            (0, _.jsx)(z.Z, {
                              padding: 'checkbox',
                              children: (0, _.jsx)(U.Z, {
                                color: 'primary',
                                checked: xe,
                                indeterminate: pe,
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
                            return (0, _.jsx)(
                              z.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, e.tableProps),
                                {},
                                {
                                  align: e.align,
                                  children: e.name
                                    ? (0, _.jsx)(L.Z, {
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
                                            R(n);
                                          })(n);
                                        },
                                        children: (0, _.jsx)(G.Z, {
                                          id: e.title
                                        })
                                      })
                                    : (0, _.jsx)(G.Z, {
                                        id: e.title.toLowerCase()
                                      })
                                }
                              ),
                              (0, Q.Z)()
                            );
                          })
                        ]
                      })
                    }),
                    (0, _.jsxs)(M.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = oe.includes(e.id);
                          return (0, _.jsxs)(
                            B.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                u &&
                                  (0, _.jsx)(
                                    z.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, _.jsx)(U.Z, {
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
                                                    (0, p.Z)(e),
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
                                null === (n = m(e)) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return (0,
                                      _.jsx)(z.Z, { align: e.align, sx: (0, h.Z)({}, e.tableProps), children: e.children }, (0, Q.Z)());
                                    }),
                                (b || j) &&
                                  (0, _.jsxs)(
                                    z.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.map(function (e) {
                                              return (0,
                                              _.jsx)(w.Z, { title: '', arrow: !0, children: e });
                                            }),
                                        b &&
                                          (0, _.jsx)(w.Z, {
                                            title: (0, _.jsx)(G.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, _.jsx)(D.Z, {
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
                                                return b(e.id);
                                              },
                                              children: (0, _.jsx)(f.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        j &&
                                          Ze({
                                            item: e,
                                            rowId: te,
                                            visible: $,
                                            theme: W,
                                            isLoading: i,
                                            handleShow: me,
                                            onDelete: j,
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
                        i &&
                          (0, _.jsx)(B.Z, {
                            children: (0, _.jsx)(z.Z, {
                              children: (0, _.jsx)(T.Z, {
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
                                children: (0, _.jsx)(E.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, _.jsx)(T.Z, {
                p: 2,
                children: (0, _.jsx)(H.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: function (e, n) {
                    R((0, h.Z)((0, h.Z)({}, a), {}, { page: n }));
                  },
                  onRowsPerPageChange: function (e) {
                    R(
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
            p = e.headerTitle,
            x = void 0 === p ? '' : p,
            m = e.headerSubtitle,
            v = void 0 === m ? '' : m,
            f = e.isLoading,
            Z = void 0 !== f && f,
            g = e.breadcrumbs,
            j = e.pagination,
            b = e.tableFilter,
            y = e.totalItems,
            w = e.extraOptions,
            k = e.isShowBulkActions,
            C = void 0 === k || k,
            D = e.onOpenModal,
            S = e.tableBody,
            T = e.onDelete,
            P = e.onUpdate,
            N = e.onPagination,
            O = (0, s.Z)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(l.ql, {
                children: (0, _.jsx)('title', {
                  children: O.formatMessage({ id: n })
                })
              }),
              (0, _.jsx)(c.Z, {
                children: (0, _.jsx)(u.Z, {
                  headerTitle: x,
                  headerSubtitle: v,
                  onOpenModal: D,
                  breadcrumbs: g
                })
              }),
              (0, _.jsx)(r.Z, {
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
                    children: (0, _.jsx)(ne, {
                      data: i,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: S,
                      isLoading: Z,
                      onDelete: T,
                      onUpdate: P,
                      onPagination: N,
                      pagination: j,
                      tableFilter: b,
                      extraOptions: w,
                      isShowBulkActions: C
                    })
                  })
                })
              }),
              (0, _.jsx)(d.Z, {})
            ]
          });
        },
        ie = (0, o.memo)(te);
    },
    5734: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return M;
          }
        });
      var i = t(1413),
        r = t(4165),
        a = t(5861),
        o = t(9439),
        l = t(2791),
        s = t(5048),
        d = t(6790),
        c = t(5674),
        u = t(5850),
        h = t(7837),
        p = t(4942),
        x = t(3433),
        m = t(4695),
        v = t(4554),
        f = t(1889),
        Z = t(7621),
        g = t(4454),
        j = t(1134),
        b = t(4349),
        y = t(7590),
        w = t(7891),
        k = t(5243),
        C = t(184),
        D = k.Ry().shape({ name: k.Z_().required('Name is required!') }),
        S = function (e) {
          var n,
            t,
            s,
            d = e.open,
            u = e.onClose,
            k = e.refetch,
            S = e.hide,
            T = (0, h.p)(),
            P = T.notify,
            N = T.message,
            O = (0, c._i)(),
            I = (0, o.Z)(O, 2),
            F = I[0],
            B = I[1].isLoading,
            z = (0, c.Z6)(),
            U = (0, o.Z)(z, 2),
            L = U[0],
            M = U[1].isLoading,
            E = (0, l.useState)(),
            H = (0, o.Z)(E, 2),
            A = H[0],
            R = H[1],
            W = (0, c.js)({}).data,
            Y = (0, c.fl)(
              { id: d.id },
              { refetchOnMountOrArgChange: !0, skip: !d.open && !d.id }
            ),
            $ = Y.data,
            V = Y.refetch,
            _ = Y.isSuccess,
            q = Y.isFetching;
          (0, l.useEffect)(
            function () {
              if (null !== W && void 0 !== W && W.data && d.open) {
                var e;
                if (d.id)
                  if (
                    null !== $ &&
                    void 0 !== $ &&
                    null !== (e = $.data) &&
                    void 0 !== e &&
                    e.permissions
                  ) {
                    var n,
                      t,
                      r = new Set(
                        Object.keys(
                          null === W || void 0 === W ? void 0 : W.data
                        )
                      ),
                      a = new Set(
                        Object.keys(
                          null === $ ||
                            void 0 === $ ||
                            null === (n = $.data) ||
                            void 0 === n
                            ? void 0
                            : n.permissions
                        )
                      ),
                      o =
                        null === (t = (0, x.Z)(r)) || void 0 === t
                          ? void 0
                          : t.filter(function (e) {
                              return !(null !== a && void 0 !== a && a.has(e));
                            }),
                      l =
                        null === o || void 0 === o
                          ? void 0
                          : o.reduce(function (e, n) {
                              return (0,
                              i.Z)((0, i.Z)({}, e), {}, (0, p.Z)({}, n, []));
                            }, {});
                    return R(function () {
                      var e;
                      return (0,
                      i.Z)((0, i.Z)({}, null === $ || void 0 === $ || null === (e = $.data) || void 0 === e ? void 0 : e.permissions), l);
                    });
                  }
                var s = Object.keys(
                    null === W || void 0 === W ? void 0 : W.data
                  ),
                  c =
                    null === s || void 0 === s
                      ? void 0
                      : s.reduce(function (e, n) {
                          return (0,
                          i.Z)((0, i.Z)({}, e), {}, (0, p.Z)({}, n, []));
                        }, {});
                return R(c);
              }
            },
            [$, W, d]
          );
          var K = (0, j.cI)({
              resolver: (0, m.X)(D),
              defaultValues: { name: '' }
            }),
            Q = K.register,
            X = K.setValue,
            G = K.reset,
            J = K.handleSubmit,
            ee = K.formState.errors,
            ne = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t, i;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === $ ||
                                void 0 === $ ||
                                null === (t = $.data) ||
                                void 0 === t ||
                                !t.id ||
                                !d.id)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 4),
                              F({
                                name: n.name,
                                permissions: A,
                                id:
                                  null === $ ||
                                  void 0 === $ ||
                                  null === (i = $.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i.id
                              }).unwrap()
                            );
                          case 4:
                            P({ message: N.UPDATED }), (e.next = 9);
                            break;
                          case 7:
                            return (
                              (e.next = 9),
                              L({ name: n.name, permissions: A }).unwrap()
                            );
                          case 9:
                            k(), V(), S(), G(), (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              P({ message: N.ERROR, type: 'error' });
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          (0, l.useEffect)(
            function () {
              var e;
              X(
                'name',
                (null === $ ||
                void 0 === $ ||
                null === (e = $.data) ||
                void 0 === e
                  ? void 0
                  : e.name) || ''
              );
            },
            [$]
          );
          return (0, C.jsx)(w.Z, {
            title:
              null !== $ &&
              void 0 !== $ &&
              null !== (n = $.data) &&
              void 0 !== n &&
              n.id
                ? 'Edit '.concat(
                    null === $ ||
                      void 0 === $ ||
                      null === (t = $.data) ||
                      void 0 === t
                      ? void 0
                      : t.name
                  )
                : 'Add Roles',
            onClose: u,
            open: d.open && !q && _,
            isLoading: B || M,
            onOk: J(ne),
            children: (0, C.jsxs)(v.Z, {
              component: 'form',
              id: 'form-users',
              children: [
                (0, C.jsx)('div', {
                  className: 'block',
                  children: (0, C.jsx)(y.n, {
                    label: (0, C.jsx)(b.Z, { id: 'label.name' }),
                    name: 'name',
                    sx: { my: 2 },
                    errors: ee,
                    register: Q
                  })
                }),
                (0, C.jsx)(f.ZP, {
                  container: !0,
                  columns: 2,
                  sx: { gridTemplateColumns: '1fr 1fr' },
                  display: 'grid',
                  gap: '8px',
                  children:
                    (null === W || void 0 === W ? void 0 : W.data) &&
                    A &&
                    (null === Object ||
                    void 0 === Object ||
                    null ===
                      (s = Object.keys(
                        null === W || void 0 === W ? void 0 : W.data
                      )) ||
                    void 0 === s
                      ? void 0
                      : s.map(function (e) {
                          var n;
                          return (0, C.jsxs)('div', {
                            children: [
                              e.slice(0, 1).toUpperCase() + e.slice(1),
                              (0, C.jsx)(Z.Z, {
                                sx: { padding: 1, margin: '4px 0 4px 0' },
                                children: (0, C.jsx)(f.ZP, {
                                  container: !0,
                                  justifyContent: 'space-between',
                                  children:
                                    null === W ||
                                    void 0 === W ||
                                    null === (n = W.data[e]) ||
                                    void 0 === n
                                      ? void 0
                                      : n.map(function (n, t) {
                                          var r;
                                          return (0, C.jsxs)(
                                            v.Z,
                                            {
                                              width: '100px',
                                              children: [
                                                (0, C.jsx)(g.Z, {
                                                  onChange: function () {
                                                    var t;
                                                    return (function (e, n, t) {
                                                      R(function (r) {
                                                        return e
                                                          ? (0, i.Z)(
                                                              (0, i.Z)({}, r),
                                                              {},
                                                              (0, p.Z)(
                                                                {},
                                                                n,
                                                                r[n].filter(
                                                                  function (e) {
                                                                    return (
                                                                      e !== t
                                                                    );
                                                                  }
                                                                )
                                                              )
                                                            )
                                                          : (0, i.Z)(
                                                              (0, i.Z)({}, r),
                                                              {},
                                                              (0, p.Z)(
                                                                {},
                                                                n,
                                                                [].concat(
                                                                  (0, x.Z)(
                                                                    r[n]
                                                                  ),
                                                                  [t]
                                                                )
                                                              )
                                                            );
                                                      });
                                                    })(
                                                      Boolean(
                                                        null === (t = A[e]) ||
                                                          void 0 === t
                                                          ? void 0
                                                          : t.includes(n)
                                                      ),
                                                      e,
                                                      n
                                                    );
                                                  },
                                                  checked: Boolean(
                                                    null === (r = A[e]) ||
                                                      void 0 === r
                                                      ? void 0
                                                      : r.includes(n)
                                                  )
                                                }),
                                                n.slice(0, 1).toUpperCase() +
                                                  n.slice(1)
                                              ]
                                            },
                                            t
                                          );
                                        })
                                })
                              })
                            ]
                          });
                        }))
                })
              ]
            })
          });
        },
        T = (0, l.memo)(S),
        P = t(890),
        N = t(6043),
        O = t(6151),
        I = t(946),
        F = t(8673),
        B = function () {
          var e = (0, h.d)(),
            n = e.visible;
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, C.jsx)(P.Z, {
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.name
                  })
                },
                {
                  align: 'left',
                  children: (0, C.jsx)(v.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexWrap: 'wrap',
                    children: Object.keys(e.permissions).map(function (n) {
                      return (0,
                      C.jsx)(N.Z, { badgeContent: e.permissions[n].length || 0, color: 'primary', children: (0, C.jsx)(O.Z, { variant: 'outlined', color: 'primary', sx: { padding: '4px 8px', cursor: 'default' }, children: n }) });
                    })
                  }),
                  tableProps: { width: '60%' }
                },
                {
                  align: 'right',
                  children: (0, C.jsx)(P.Z, {
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                      (0, I.Z)(
                        (0, F.Z)(
                          null === e || void 0 === e ? void 0 : e.updatedAt
                        ),
                        'dd/MM/yyyy HH:mm'
                      )
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              {
                align: 'left',
                title: 'label.permissions',
                name: 'permissions',
                tableProps: { width: '60%' }
              },
              { align: 'right', title: 'label.updated.at', name: 'updatedAt' },
              { align: 'right', title: 'label.actions' }
            ],
            toggle: e.toggle,
            visible: n
          };
        },
        z = 'title.agents-management',
        U = function (e, n) {
          return null === e || void 0 === e ? void 0 : e.includes(n);
        },
        L = [{ link: '/dashboards', name: 'title.dashboard' }, { name: z }],
        M = function () {
          var e = (0, h.p)(),
            n = e.notify,
            t = e.message,
            p = B(),
            x = p.tableBody,
            m = p.tableHeader,
            v = (0, l.useState)([]),
            f = (0, o.Z)(v, 2),
            Z = f[0],
            g = f[1],
            j = (0, l.useState)({ id: 0, open: !1 }),
            b = (0, o.Z)(j, 2),
            y = b[0],
            w = b[1],
            k = (0, l.useState)({ sortBy: -1, page: 0, size: 10 }),
            D = (0, o.Z)(k, 2),
            S = D[0],
            P = D[1],
            N = (0, s.v9)(function (e) {
              return e.common;
            }).permissions,
            O = (0, c.D)(),
            I = (0, o.Z)(O, 2),
            F = I[0],
            M = I[1].isLoading,
            E = (0, c.ev)(
              {},
              { refetchOnMountOrArgChange: !0, skip: !U(N, 'get') }
            ),
            H = E.data,
            A = E.isFetching,
            R = E.refetch;
          (0, l.useEffect)(
            function () {
              H &&
                g(function () {
                  var e;
                  return (0,
                  u.TY)(H.data, null === (e = m[S.sortBy]) || void 0 === e ? void 0 : e.name, S.sortDirection);
                });
            },
            [H, S]
          );
          var W = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(i) {
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              F({ id: Number(i) }).unwrap()
                            );
                          case 3:
                            n({ message: t.DELETED }), R(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              n({ message: t.ERROR, type: 'error' });
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
            Y = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e(n) {
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          w({ id: n, open: !0 });
                        case 1:
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
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(d.Z, {
                title: z,
                data: Z,
                totalItems: null === H || void 0 === H ? void 0 : H.data.length,
                tableHeader: m,
                tableBody: x,
                headerTitle: z,
                breadcrumbs: L,
                onOpenModal:
                  U(N, 'create') &&
                  function () {
                    w({ id: 0, open: !0 });
                  },
                isLoading: A || M,
                onDelete: U(N, 'delete') && W,
                onUpdate: U(N, 'update') && Y,
                pagination: S,
                onPagination: P
              }),
              (0, C.jsx)(T, {
                open: y,
                onClose: function () {
                  return w(function (e) {
                    return (0, i.Z)((0, i.Z)({}, e), {}, { open: !1 });
                  });
                },
                refetch: R,
                hide: function () {
                  return w(function (e) {
                    return (0, i.Z)((0, i.Z)({}, e), {}, { open: !1 });
                  });
                }
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
    8673: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        }
      });
      Math.pow(10, 8);
      var i = 6e4,
        r = 36e5,
        a = t(4522),
        o = t(9297);
      function l(e, n) {
        (0, a.Z)(1, arguments);
        var t = n || {},
          l = null == t.additionalDigits ? 2 : (0, o.Z)(t.additionalDigits);
        if (2 !== l && 1 !== l && 0 !== l)
          throw new RangeError('additionalDigits must be 0, 1 or 2');
        if (
          'string' !== typeof e &&
          '[object String]' !== Object.prototype.toString.call(e)
        )
          return new Date(NaN);
        var v,
          f = (function (e) {
            var n,
              t = {},
              i = e.split(s.dateTimeDelimiter);
            if (i.length > 2) return t;
            /:/.test(i[0])
              ? (n = i[0])
              : ((t.date = i[0]),
                (n = i[1]),
                s.timeZoneDelimiter.test(t.date) &&
                  ((t.date = e.split(s.timeZoneDelimiter)[0]),
                  (n = e.substr(t.date.length, e.length))));
            if (n) {
              var r = s.timezone.exec(n);
              r
                ? ((t.time = n.replace(r[1], '')), (t.timezone = r[1]))
                : (t.time = n);
            }
            return t;
          })(e);
        if (f.date) {
          var Z = (function (e, n) {
            var t = new RegExp(
                '^(?:(\\d{4}|[+-]\\d{' +
                  (4 + n) +
                  '})|(\\d{2}|[+-]\\d{' +
                  (2 + n) +
                  '})$)'
              ),
              i = e.match(t);
            if (!i) return { year: NaN, restDateString: '' };
            var r = i[1] ? parseInt(i[1]) : null,
              a = i[2] ? parseInt(i[2]) : null;
            return {
              year: null === a ? r : 100 * a,
              restDateString: e.slice((i[1] || i[2]).length)
            };
          })(f.date, l);
          v = (function (e, n) {
            if (null === n) return new Date(NaN);
            var t = e.match(d);
            if (!t) return new Date(NaN);
            var i = !!t[4],
              r = h(t[1]),
              a = h(t[2]) - 1,
              o = h(t[3]),
              l = h(t[4]),
              s = h(t[5]) - 1;
            if (i)
              return (function (e, n, t) {
                return n >= 1 && n <= 53 && t >= 0 && t <= 6;
              })(0, l, s)
                ? (function (e, n, t) {
                    var i = new Date(0);
                    i.setUTCFullYear(e, 0, 4);
                    var r = i.getUTCDay() || 7,
                      a = 7 * (n - 1) + t + 1 - r;
                    return i.setUTCDate(i.getUTCDate() + a), i;
                  })(n, l, s)
                : new Date(NaN);
            var c = new Date(0);
            return (function (e, n, t) {
              return (
                n >= 0 && n <= 11 && t >= 1 && t <= (x[n] || (m(e) ? 29 : 28))
              );
            })(n, a, o) &&
              (function (e, n) {
                return n >= 1 && n <= (m(e) ? 366 : 365);
              })(n, r)
              ? (c.setUTCFullYear(n, a, Math.max(r, o)), c)
              : new Date(NaN);
          })(Z.restDateString, Z.year);
        }
        if (!v || isNaN(v.getTime())) return new Date(NaN);
        var g,
          j = v.getTime(),
          b = 0;
        if (
          f.time &&
          ((b = (function (e) {
            var n = e.match(c);
            if (!n) return NaN;
            var t = p(n[1]),
              a = p(n[2]),
              o = p(n[3]);
            if (
              !(function (e, n, t) {
                if (24 === e) return 0 === n && 0 === t;
                return t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
              })(t, a, o)
            )
              return NaN;
            return t * r + a * i + 1e3 * o;
          })(f.time)),
          isNaN(b))
        )
          return new Date(NaN);
        if (!f.timezone) {
          var y = new Date(j + b),
            w = new Date(0);
          return (
            w.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()),
            w.setHours(
              y.getUTCHours(),
              y.getUTCMinutes(),
              y.getUTCSeconds(),
              y.getUTCMilliseconds()
            ),
            w
          );
        }
        return (
          (g = (function (e) {
            if ('Z' === e) return 0;
            var n = e.match(u);
            if (!n) return 0;
            var t = '+' === n[1] ? -1 : 1,
              a = parseInt(n[2]),
              o = (n[3] && parseInt(n[3])) || 0;
            if (
              !(function (e, n) {
                return n >= 0 && n <= 59;
              })(0, o)
            )
              return NaN;
            return t * (a * r + o * i);
          })(f.timezone)),
          isNaN(g) ? new Date(NaN) : new Date(j + b + g)
        );
      }
      var s = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        },
        d = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        c =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        u = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function h(e) {
        return e ? parseInt(e) : 1;
      }
      function p(e) {
        return (e && parseFloat(e.replace(',', '.'))) || 0;
      }
      var x = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function m(e) {
        return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
      }
    }
  }
]);
//# sourceMappingURL=734.4e9cb32b.chunk.js.map
