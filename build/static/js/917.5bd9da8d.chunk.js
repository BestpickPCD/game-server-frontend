'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [917],
  {
    173: function (e, n, t) {
      var r = t(6934),
        i = t(9164),
        a = t(4554),
        l = t(890),
        s = t(4349),
        o = t(184),
        d = (0, r.ZP)(i.Z)(function (e) {
          var n = e.theme;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function () {
        return (0, o.jsx)(d, {
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
      };
    },
    8409: function (e, n, t) {
      t.d(n, {
        R: function () {
          return Z;
        }
      });
      var r = t(7762),
        i = t(3433),
        a = t(1413),
        l = t(9439),
        s = t(5987),
        o = t(2791),
        d = t(7590),
        c = t(1827),
        u = t(4732),
        m = t(184),
        h = ['control', 'name', 'parent', 'label', 'errors'],
        x = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        Z = function (e) {
          var n = e.control,
            t = e.name,
            Z = e.parent,
            p = e.label,
            v = void 0 === p ? 'Agents' : p,
            g = e.errors,
            f = (0, s.Z)(e, h),
            j = (0, o.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            b = (0, l.Z)(j, 2),
            y = b[0],
            w = b[1],
            P = (0, o.useState)(''),
            I = (0, l.Z)(P, 2),
            k = I[0],
            C = I[1],
            S = (0, u.Z)(k, 500),
            A = (0, o.useState)([]),
            F = (0, l.Z)(A, 2),
            T = F[0],
            O = F[1],
            R = (0, o.useState)({ id: '', name: '', value: '' }),
            B = (0, l.Z)(R, 2),
            q = B[0],
            E = B[1];
          (0, o.useEffect)(
            function () {
              C(S),
                w(function (e) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { search: S });
                });
            },
            [S]
          );
          var D = (0, c.aN)(
              { size: y.size, page: y.page, search: y.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            z = D.data,
            W = D.isFetching;
          function M(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (z.data.page + 1) * z.data.size < z.data.totalItems
            )
              return w(function (e) {
                return (0, a.Z)((0, a.Z)({}, e), {}, { page: y.page + 1 });
              });
          }
          (0, o.useEffect)(
            function () {
              w({ search: S || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                O([]);
            },
            [S, Z]
          ),
            (0, o.useEffect)(
              function () {
                return O(
                  Z
                    ? function (e) {
                        var n,
                          t = []
                            .concat(
                              (0, i.Z)(e),
                              (0, i.Z)(
                                x(
                                  null === z ||
                                    void 0 === z ||
                                    null === (n = z.data) ||
                                    void 0 === n
                                    ? void 0
                                    : n.data
                                )
                              )
                            )
                            .slice();
                        return (
                          t.unshift(
                            (function (e) {
                              return { id: e.id, name: e.name, value: e.value };
                            })(Z)
                          ),
                          t
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, i.Z)(e),
                          (0, i.Z)(
                            x(null === z || void 0 === z ? void 0 : z.data.data)
                          )
                        );
                      }
                );
              },
              [z, Z]
            ),
            (0, o.useEffect)(
              function () {
                null !== q &&
                  void 0 !== q &&
                  q.id &&
                  O(function (e) {
                    var n = e.slice();
                    return n.unshift(q), n;
                  });
              },
              [q, z]
            );
          var L = (0, o.useMemo)(
            function () {
              var e,
                n = [],
                t = new Set(),
                i = (0, r.Z)(T);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  var a = e.value;
                  t.has(a.id) || (t.add(a.id), n.push(a));
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
              return n;
            },
            [T]
          );
          return (0, m.jsx)(
            d.P,
            (0, a.Z)(
              {
                onScroll: M,
                name: t,
                label: v,
                options: L,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: M },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: W,
                onSearch: C,
                searchTerm: k,
                errors: g,
                setSelected: E
              },
              f
            )
          );
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
      var r = t(1413),
        i = t(5987),
        a = t(5403),
        l = t(8096),
        s = t(4925),
        o = t(9321),
        d = t(9834),
        c = t(8550),
        u = t(3466),
        m = t(3786),
        h = t(4554),
        x = t(3239),
        Z = t(7071),
        p = t(2791),
        v = t(1134),
        g = t(184),
        f = [
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
            p = e.name,
            j = e.label,
            b = e.options,
            y = e.isFetching,
            w = e.errors,
            P = e.searchTerm,
            I = e.onSearch,
            k = e.setSelected,
            C = (0, i.Z)(e, f);
          return t
            ? (0, g.jsx)(v.Qr, {
                control: t,
                name: p,
                render: function (e) {
                  var n,
                    t = e.field;
                  return (0, g.jsxs)(l.Z, {
                    fullWidth: !0,
                    children: [
                      (0, g.jsx)(s.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== w && void 0 !== w && w[p] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, g.jsxs)(
                        o.Z,
                        (0, r.Z)(
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: j,
                                value:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.value) || '',
                                error:
                                  !(null === w || void 0 === w || !w[p]) &&
                                  !t.value
                              },
                              t
                            ),
                            C
                          ),
                          {},
                          {
                            children: [
                              I &&
                                (0, g.jsx)(d.Z, {
                                  children: (0, g.jsx)(c.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, g.jsx)(u.Z, {
                                        position: 'start',
                                        children: (0, g.jsx)(a.Z, {})
                                      })
                                    },
                                    value: P,
                                    onChange: function (e) {
                                      return I(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
                                    return (0, g.jsx)(
                                      m.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (n = e),
                                            void (
                                              null === k ||
                                              void 0 === k ||
                                              k(n)
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
                                (0, g.jsx)(h.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, g.jsx)(x.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === w || void 0 === w ? void 0 : w[p]) &&
                        !t.value &&
                        (0, g.jsx)(Z.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === w ||
                            void 0 === w ||
                            null === (n = w[p]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, g.jsxs)(l.Z, {
                fullWidth: !0,
                children: [
                  (0, g.jsx)(s.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== w && void 0 !== w && w[p]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, g.jsx)(
                    o.Z,
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        C
                      ),
                      {},
                      {
                        error: !(null === w || void 0 === w || !w[p]),
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                g.jsx)(m.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === w || void 0 === w || !w[p]) &&
                    (0, g.jsx)(Z.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === w ||
                        void 0 === w ||
                        null === (n = w[p]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        b = (0, p.memo)(j),
        y = ['label', 'name', 'errors', 'register'],
        w = function (e) {
          var n = e.label,
            t = e.name,
            a = e.errors,
            l = e.register,
            s = (0, i.Z)(e, y);
          return (0, g.jsx)(
            c.Z,
            (0, r.Z)(
              (0, r.Z)(
                {
                  label: n,
                  error: !!a[t],
                  helperText: a[t] ? a[t].message : '',
                  fullWidth: !0
                },
                l(t)
              ),
              s
            )
          );
        };
    },
    7891: function (e, n, t) {
      var r = t(1413),
        i = t(5987),
        a = t(3329),
        l = t(9709),
        s = t(4721),
        o = t(9164),
        d = t(6151),
        c = t(5574),
        u = t(5661),
        m = t(493),
        h = t(4349),
        x = t(184),
        Z = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          p = e.open,
          v = e.isLoading,
          g = void 0 !== v && v,
          f = e.onClose,
          j = e.onOk,
          b = (0, i.Z)(e, Z);
        return (0, x.jsxs)(
          c.Z,
          (0, r.Z)(
            (0, r.Z)({ onClose: f, open: p }, b),
            {},
            {
              children: [
                n && (0, x.jsx)(u.Z, { variant: 'h4', children: n }),
                n && (0, x.jsx)(s.Z, {}),
                (0, x.jsx)(m.Z, { sx: { pt: 0 }, children: t }),
                (0, x.jsx)(s.Z, {}),
                (0, x.jsxs)(o.Z, {
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
                      onClick: f,
                      children: (0, x.jsx)(h.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, x.jsx)(l.Z, {
                        onClick: j,
                        loading: g,
                        loadingPosition: 'start',
                        startIcon: (0, x.jsx)(a.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, x.jsx)(h.Z, { id: 'label.OK' })
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
        l = t(184),
        s = (0, r.ZP)(i.Z)(function (e) {
          var n = e.theme;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(s, {
          className: 'MuiPageTitle-wrapper',
          children: (0, l.jsx)(a.Z, { maxWidth: 'lg', children: n })
        });
      };
    },
    3481: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        }
      });
      var r = t(1889),
        i = t(890),
        a = t(4554),
        l = t(6151),
        s = t(4696),
        o = t(2791),
        d = t(8333),
        c = t(3517),
        u = t(6871),
        m = t(3504),
        h = t(4349),
        x = t(184),
        Z = function (e) {
          var n = e.links,
            t = void 0 === n ? [] : n,
            r = (0, u.TH)();
          return (0, x.jsx)(c.Z, {
            separator: (0, x.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (e, n) {
              return n === t.length - 1
                ? (0, x.jsx)(
                    i.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(h.Z, { id: e.name })
                    },
                    n
                  )
                : (0, x.jsx)(
                    m.rU,
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
                      children: (0, x.jsx)(i.Z, {
                        color: 'inherit',
                        children: (0, x.jsx)(h.Z, { id: e.name })
                      })
                    },
                    n
                  );
            })
          });
        },
        p = function (e) {
          var n = e.headerTitle,
            t = e.headerSubtitle,
            o = e.breadcrumbs,
            d = e.onOpenModal;
          return (0, x.jsxs)(r.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, x.jsxs)(r.ZP, {
                item: !0,
                children: [
                  (0, x.jsx)(i.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, x.jsx)(h.Z, { id: n })
                  }),
                  (0, x.jsx)(i.Z, { variant: 'subtitle2', children: t }),
                  o &&
                    (0, x.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(Z, { links: o })
                    })
                ]
              }),
              d &&
                (0, x.jsx)(r.ZP, {
                  item: !0,
                  children: (0, x.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, x.jsx)(h.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        v = (0, o.memo)(p);
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
        l = t(2791),
        s = t(6907),
        o = t(3539),
        d = t(173),
        c = t(8418),
        u = t(3481),
        m = t(1413),
        h = t(3433),
        x = t(9439),
        Z = t(168),
        p = t(8036),
        v = t(1675),
        g = t(5403),
        f = t(1686),
        j = t(9709),
        b = t(6934),
        y = t(3967),
        w = t(7639),
        P = t(890),
        I = t(6151),
        k = t(3400),
        C = t(7621),
        S = t(4554),
        A = t(4721),
        F = t(8550),
        T = t(9281),
        O = t(9836),
        R = t(1048),
        B = t(5855),
        q = t(3994),
        E = t(4454),
        D = t(720),
        z = t(3382),
        W = t(3239),
        M = t(3033),
        L = t(7837),
        _ = t(1715),
        U = t(493),
        H = t(5021),
        N = t(9900),
        V = t(4934),
        Y = t(184),
        K = (0, b.ZP)(I.Z)(function (e) {
          var n = e.theme;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        Q = function () {
          var e = (0, L.d)(),
            n = e.toggle,
            t = e.visible,
            r = (0, l.useRef)(null);
          return (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(S.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, Y.jsxs)(S.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, Y.jsx)(P.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, Y.jsx)(K, {
                        sx: { ml: 1 },
                        startIcon: (0, Y.jsx)(p.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, Y.jsx)(k.Z, {
                    color: 'primary',
                    onClick: n,
                    ref: r,
                    sx: { ml: 2, p: 1 },
                    children: (0, Y.jsx)(V.Z, {})
                  })
                ]
              }),
              (0, Y.jsx)(_.Z, {
                keepMounted: !0,
                anchorEl: r.current,
                open: t,
                onClose: n,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, Y.jsxs)(U.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, Y.jsx)(H.ZP, {
                      button: !0,
                      children: (0, Y.jsx)(N.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, Y.jsx)(H.ZP, {
                      button: !0,
                      children: (0, Y.jsx)(N.Z, {
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
        $ = t(4349),
        G = (0, b.ZP)(j.Z)(
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
            s = e.totalItems,
            o = void 0 === s ? 0 : s,
            d = e.tableFilter,
            c = e.extraOptions,
            u = e.tableBody,
            Z = e.onDelete,
            j = e.onUpdate,
            b = e.onPagination,
            _ = (0, y.Z)(),
            U = (0, L.d)(),
            H = U.visible,
            N = U.show,
            V = U.hide,
            K = (0, l.useState)(''),
            ee = (0, x.Z)(K, 2),
            ne = ee[0],
            te = ee[1],
            re = (0, l.useState)([]),
            ie = (0, x.Z)(re, 2),
            ae = ie[0],
            le = ie[1],
            se = (0, l.useState)(''),
            oe = (0, x.Z)(se, 2),
            de = oe[0],
            ce = oe[1],
            ue = (0, J.Z)(de, 500);
          (0, l.useEffect)(
            function () {
              b((0, m.Z)((0, m.Z)({}, a), {}, { search: ue }));
            },
            [ue]
          );
          var me = ae.length > 0 && ae.length < n.length,
            he = ae.length === n.length,
            xe = function (e) {
              N(), te(e);
            },
            Ze = function (e) {
              Z(e), V();
            },
            pe = (0, l.useMemo)(
              function () {
                return Z || j || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [Z, j, t]
            ),
            ve = function (e) {
              var n = e.item,
                t = e.hide,
                r = (e.onDelete, e.handleShow),
                a = e.rowId,
                l = e.visible,
                s = e.theme,
                o = e.isLoading;
              return (0, Y.jsx)(w.Z, {
                title: (0, Y.jsxs)(i.Z, {
                  children: [
                    (0, Y.jsx)(P.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, Y.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, Y.jsx)(I.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, Y.jsx)(G, {
                          onClick: function () {
                            return Ze(n.id);
                          },
                          loading: o,
                          loadingPosition: 'start',
                          startIcon: (0, Y.jsx)(f.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: n.id === a && l && !o,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, Y.jsx)(k.Z, {
                  sx: {
                    '&:hover': { background: s.colors.error.lighter },
                    color: s.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return r(n.id);
                  },
                  children: (0, Y.jsx)(p.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, Y.jsxs)(C.Z, {
            children: [
              (null === ae || void 0 === ae ? void 0 : ae.length) > 0 &&
                (0, Y.jsx)(S.Z, { flex: 1, p: 2, children: (0, Y.jsx)(Q, {}) }),
              (0, Y.jsx)(A.Z, {}),
              (0, Y.jsxs)(C.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, Y.jsxs)(S.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, Y.jsx)(F.Z, {
                        label: (0, Y.jsx)($.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (e) {
                          return ce(e.target.value.trim());
                        }
                      }),
                      (0, Y.jsx)(k.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, Y.jsx)(g.Z, {})
                      })
                    ]
                  }),
                  (0, Y.jsx)(S.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, n) {
                            return (0, Y.jsx)(S.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, Y.jsx)(T.Z, {
                children: (0, Y.jsxs)(O.Z, {
                  children: [
                    (0, Y.jsx)(R.Z, {
                      children: (0, Y.jsxs)(B.Z, {
                        children: [
                          (0, Y.jsx)(q.Z, {
                            padding: 'checkbox',
                            children: (0, Y.jsx)(E.Z, {
                              color: 'primary',
                              checked: he,
                              indeterminate: me,
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
                          pe.map(function (e, n) {
                            return (0, Y.jsx)(
                              q.Z,
                              (0, m.Z)(
                                (0, m.Z)({}, e.tableProps),
                                {},
                                {
                                  align: e.align,
                                  children: e.name
                                    ? (0, Y.jsx)(D.Z, {
                                        active: a.sortBy === n,
                                        direction:
                                          a.sortBy === n
                                            ? a.sortDirection
                                            : 'asc',
                                        onClick: function () {
                                          return (function (e) {
                                            var n = (0, m.Z)(
                                              (0, m.Z)({}, a),
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
                                        children: (0, Y.jsx)($.Z, {
                                          id: e.title
                                        })
                                      })
                                    : (0, Y.jsx)($.Z, {
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
                    (0, Y.jsxs)(z.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = ae.includes(e.id);
                          return (0, Y.jsxs)(
                            B.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                (0, Y.jsx)(
                                  q.Z,
                                  {
                                    padding: 'checkbox',
                                    children: (0, Y.jsx)(E.Z, {
                                      color: 'primary',
                                      checked: t,
                                      onChange: function (n) {
                                        return (
                                          (t = e.id),
                                          void (ae.includes(t)
                                            ? le(function (e) {
                                                return e.filter(function (e) {
                                                  return e !== t;
                                                });
                                              })
                                            : le(function (e) {
                                                return [].concat((0, h.Z)(e), [
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
                                      Y.jsx)(q.Z, { align: e.align, sx: (0, m.Z)({}, e.tableProps), children: e.children }, (0, X.Z)());
                                    }),
                                (j || Z) &&
                                  (0, Y.jsxs)(
                                    q.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.map(function (e) {
                                              return (0,
                                              Y.jsx)(w.Z, { title: '', arrow: !0, children: e });
                                            }),
                                        j &&
                                          (0, Y.jsx)(w.Z, {
                                            title: (0, Y.jsx)($.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, Y.jsx)(k.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    _.colors.primary.lighter
                                                },
                                                color: _.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: function () {
                                                return j(e.id);
                                              },
                                              children: (0, Y.jsx)(v.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        Z &&
                                          ve({
                                            item: e,
                                            rowId: ne,
                                            visible: H,
                                            theme: _,
                                            isLoading: r,
                                            handleShow: xe,
                                            onDelete: Z,
                                            hide: V
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
                          (0, Y.jsx)(B.Z, {
                            children: (0, Y.jsx)(q.Z, {
                              children: (0, Y.jsx)(S.Z, {
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
                                children: (0, Y.jsx)(W.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, Y.jsx)(S.Z, {
                p: 2,
                children: (0, Y.jsx)(M.Z, {
                  component: 'div',
                  count: o,
                  onPageChange: function (e, n) {
                    b((0, m.Z)((0, m.Z)({}, a), {}, { page: n }));
                  },
                  onRowsPerPageChange: function (e) {
                    b(
                      (0, m.Z)(
                        (0, m.Z)({}, a),
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
        ne = (0, l.memo)(ee),
        te = function (e) {
          var n = e.title,
            t = e.data,
            r = void 0 === t ? [] : t,
            l = e.tableHeader,
            m = void 0 === l ? [{ align: 'inherit', title: 'Title' }] : l,
            h = e.headerTitle,
            x = void 0 === h ? '' : h,
            Z = e.headerSubtitle,
            p = void 0 === Z ? '' : Z,
            v = e.isLoading,
            g = void 0 !== v && v,
            f = e.breadcrumbs,
            j = e.pagination,
            b = e.tableFilter,
            y = e.totalItems,
            w = e.extraOptions,
            P = e.onOpenModal,
            I = e.tableBody,
            k = e.onDelete,
            C = e.onUpdate,
            S = e.onPagination,
            A = (0, o.Z)();
          return (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(s.ql, {
                children: (0, Y.jsx)('title', {
                  children: A.formatMessage({ id: n })
                })
              }),
              (0, Y.jsx)(c.Z, {
                children: (0, Y.jsx)(u.Z, {
                  headerTitle: x,
                  headerSubtitle: p,
                  onOpenModal: P,
                  breadcrumbs: f
                })
              }),
              (0, Y.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, Y.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, Y.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, Y.jsx)(ne, {
                      data: r,
                      totalItems: y,
                      tableHeader: m,
                      tableBody: I,
                      isLoading: g,
                      onDelete: k,
                      onUpdate: C,
                      onPagination: S,
                      pagination: j,
                      tableFilter: b,
                      extraOptions: w
                    })
                  })
                })
              }),
              (0, Y.jsx)(d.Z, {})
            ]
          });
        },
        re = (0, l.memo)(te);
    },
    9419: function (e, n, t) {
      var r = t(1413),
        i = t(4165),
        a = t(5861),
        l = t(9439),
        s = t(4695),
        o = t(9709),
        d = t(4554),
        c = t(1889),
        u = t(8550),
        m = t(2791),
        h = t(1134),
        x = t(4349),
        Z = t(6871),
        p = t(7590),
        v = t(8409),
        g = t(1927),
        f = t(5674),
        j = t(7837),
        b = t(5243),
        y = t(184),
        w = b.Ry().shape({
          username: b
            .Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          name: b
            .Z_()
            .matches(/[a-zA-Z]/, 'Name can only contain letters.')
            .required('First name is required'),
          type: b.Z_().nullable(),
          rate: b.Rx().positive().moreThan(0, 'Rate is required').nullable(),
          roleId: b.Rx().positive().moreThan(0, 'Role is required').nullable(),
          parentAgentId: b.Z_().required('Parent Agent is required'),
          email: b
            .Z_()
            .email('Invalid email format')
            .required('First name is required'),
          password: b
            .Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required'),
          confirmPassword: b
            .Z_()
            .oneOf([b.iH('password'), null], 'Passwords must match')
            .required('Password is required')
        });
      n.Z = function (e) {
        var n = e.isUserRegister,
          t = void 0 !== n && n,
          b = e.isAgentRegister,
          P = void 0 !== b && b,
          I = e.isSubmit,
          k = void 0 !== I && I,
          C = e.setIsSubmit,
          S = e.refetch,
          A = e.onClose,
          F = (0, g.l4)(),
          T = (0, l.Z)(F, 2),
          O = T[0],
          R = T[1].isLoading,
          B = (0, j.p)(),
          q = B.notify,
          E = B.message,
          D = (0, Z.s0)(),
          z = (0, h.cI)({
            resolver: (0, s.X)(w),
            defaultValues: {
              name: '',
              rate: t ? null : 0,
              email: '',
              username: '',
              parentAgentId: t ? null : '',
              type: t ? 'player' : 'agent',
              roleId: t ? 2 : 0,
              password: '',
              confirmPassword: ''
            }
          }),
          W = z.register,
          M = z.handleSubmit,
          L = z.reset,
          _ = z.control,
          U = z.setValue,
          H = z.formState.errors;
        (0, m.useEffect)(
          function () {
            k && (M(Y)(), k && C());
          },
          [k]
        );
        var N = (0, f.ev)({}, { refetchOnMountOrArgChange: !0 }).data,
          V = (0, m.useMemo)(
            function () {
              var e;
              return null === N ||
                void 0 === N ||
                null === (e = N.data) ||
                void 0 === e
                ? void 0
                : e.map(function (e) {
                    return { id: e.id, name: e.name, value: e.id };
                  });
            },
            [N]
          ),
          Y = (function () {
            var e = (0, a.Z)(
              (0, i.Z)().mark(function e(n) {
                var r;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), O(n).unwrap();
                        case 3:
                          (r = e.sent) &&
                            'CREATED' === r.message &&
                            (L(),
                            q({ message: 'Registered Successfully' }),
                            t || P ? (S(), A()) : D('/login')),
                            (e.next = 12);
                          break;
                        case 7:
                          if (
                            ((e.prev = 7),
                            (e.t0 = e.catch(0)),
                            'DUPLICATE' !== e.t0.data.message)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            q({
                              message: 'Duplicated username or email',
                              type: 'error'
                            })
                          );
                        case 11:
                          return e.abrupt(
                            'return',
                            q({ message: E.ERROR, type: 'error' })
                          );
                        case 12:
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
          })();
        return (0, y.jsxs)(d.Z, {
          component: 'form',
          noValidate: !0,
          onSubmit: M(Y),
          sx: { mt: 1 },
          children: [
            (0, y.jsxs)(c.ZP, {
              container: !0,
              rowSpacing: 1,
              columnSpacing: { xs: 1, sm: 2, md: 3 },
              children: [
                (0, y.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsx)(
                    u.Z,
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: 'Name',
                          autoFocus: !0,
                          error: !!H.name,
                          helperText: H.name ? H.name.message : ''
                        },
                        W('name')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return U('name', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, y.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  marginY: 1,
                  children: (0, y.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, y.jsx)(c.ZP, {
                        item: !0,
                        xs: t ? 12 : 8,
                        children: (0, y.jsx)(v.R, {
                          control: _,
                          name: 'parentAgentId',
                          errors: H
                        })
                      }),
                      !t &&
                        (0, y.jsx)(c.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(
                            u.Z,
                            (0, r.Z)(
                              (0, r.Z)(
                                {
                                  required: !0,
                                  fullWidth: !0,
                                  label: 'Rate',
                                  autoFocus: !0,
                                  error: !!H.rate,
                                  helperText: H.rate ? H.rate.message : ''
                                },
                                W('rate')
                              ),
                              {},
                              {
                                onBlur: function (e) {
                                  return U(
                                    'rate',
                                    parseFloat(e.target.value.trim())
                                  );
                                }
                              }
                            )
                          )
                        })
                    ]
                  })
                }),
                (0, y.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    rowSpacing: 2,
                    children: [
                      (0, y.jsx)(c.ZP, {
                        item: !0,
                        xs: t ? 12 : 8,
                        children: (0, y.jsx)(
                          u.Z,
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Email',
                                type: 'email',
                                error: !!H.email,
                                helperText: H.email ? H.email.message : ''
                              },
                              W('email')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U('email', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      !t &&
                        (0, y.jsx)(c.ZP, {
                          item: !0,
                          xs: 4,
                          children: (0, y.jsx)(p.P, {
                            label: 'Role',
                            name: 'roleId',
                            options: V,
                            errors: H,
                            control: _
                          })
                        })
                    ]
                  })
                }),
                (0, y.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsx)(
                    u.Z,
                    (0, r.Z)(
                      (0, r.Z)(
                        {
                          required: !0,
                          fullWidth: !0,
                          label: (0, y.jsx)(x.Z, { id: 'label.username' }),
                          sx: { my: 1 },
                          error: !!H.username,
                          helperText: H.username ? H.username.message : ''
                        },
                        W('username')
                      ),
                      {},
                      {
                        onBlur: function (e) {
                          return U('username', e.target.value.trim());
                        }
                      }
                    )
                  )
                }),
                (0, y.jsx)(c.ZP, {
                  item: !0,
                  xs: 12,
                  children: (0, y.jsxs)(c.ZP, {
                    container: !0,
                    columnSpacing: { xs: 1 },
                    children: [
                      (0, y.jsx)(c.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, y.jsx)(
                          u.Z,
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Password',
                                type: 'password',
                                error: !!H.password,
                                helperText: H.password ? H.password.message : ''
                              },
                              W('password')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U('password', e.target.value.trim());
                              }
                            }
                          )
                        )
                      }),
                      (0, y.jsx)(c.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, y.jsx)(
                          u.Z,
                          (0, r.Z)(
                            (0, r.Z)(
                              {
                                required: !0,
                                fullWidth: !0,
                                label: 'Confirm Password',
                                type: 'password',
                                error: !!H.confirmPassword,
                                helperText: H.confirmPassword
                                  ? H.confirmPassword.message
                                  : ''
                              },
                              W('confirmPassword')
                            ),
                            {},
                            {
                              onBlur: function (e) {
                                return U(
                                  'confirmPassword',
                                  e.target.value.trim()
                                );
                              }
                            }
                          )
                        )
                      })
                    ]
                  })
                })
              ]
            }),
            !t &&
              !P &&
              (0, y.jsx)(o.Z, {
                type: 'submit',
                fullWidth: !0,
                variant: 'contained',
                sx: { mt: 3, mb: 2 },
                loading: R,
                children: 'Sign Up'
              })
          ]
        });
      };
    },
    1917: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return J;
          }
        });
      var r = t(4942),
        i = t(4165),
        a = t(5861),
        l = t(1413),
        s = t(9439),
        o = t(9709),
        d = t(5574),
        c = t(4554),
        u = t(890),
        m = t(8550),
        h = t(2791),
        x = t(1134),
        Z = t(5048),
        p = t(6790),
        v = t(2302),
        g = t(4222),
        f = t(5850),
        j = t(7837),
        b = t(4695),
        y = t(1889),
        w = t(6314),
        P = t(5523),
        I = t(9955),
        k = t(4349),
        C = t(7590),
        S = t(8409),
        A = t(7891),
        F = t(9419),
        T = t(5674),
        O = t(4167),
        R = t(5243),
        B = t(184),
        q = R.Ry().shape({
          name: R.Z_().required('Last name is required!'),
          email: R.Z_().required('Email is required!'),
          roleId: R.Rx(),
          currencyId: R.Rx().required('Currency is required!'),
          isActive: R.O7(),
          username: R.Z_().required('Username is required!'),
          parentAgentId: R.Z_().nullable()
        }),
        E = function (e) {
          var n = e.open,
            t = e.detail,
            r = e.onClose,
            l = e.refetch,
            o = e.hide,
            d = (0, j.p)(),
            u = d.notify,
            m = d.message,
            Z = (0, h.useState)(!1),
            p = (0, s.Z)(Z, 2),
            v = p[0],
            f = p[1],
            R = (0, g.kD)(),
            E = (0, s.Z)(R, 2),
            D = E[0],
            z = E[1].isLoading,
            W = (0, T.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== t && void 0 !== t && t.id)
              }
            ).data,
            M = (0, O.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== t && void 0 !== t && t.id)
              }
            ).data,
            L = (0, x.cI)({
              resolver: (0, b.X)(q),
              defaultValues: {
                name: '',
                email: '',
                roleId: 2,
                username: '',
                isActive: !1,
                currencyId: 0,
                parentAgentId: ''
              }
            }),
            _ = L.register,
            U = L.setValue,
            H = L.reset,
            N = L.handleSubmit,
            V = L.control,
            Y = L.formState.errors;
          (0, h.useEffect)(
            function () {
              var e, n;
              null !== t && void 0 !== t && t.id
                ? (U('name', t.name),
                  U('username', t.username),
                  U('email', t.email),
                  U('isActive', t.isActive),
                  U(
                    'roleId',
                    null === t ||
                      void 0 === t ||
                      null === (e = t.role) ||
                      void 0 === e
                      ? void 0
                      : e.id
                  ),
                  U(
                    'currencyId',
                    null === t ||
                      void 0 === t ||
                      null === (n = t.currency) ||
                      void 0 === n
                      ? void 0
                      : n.id
                  ),
                  U(
                    'parentAgentId',
                    null === t || void 0 === t ? void 0 : t.parentAgentId
                  ))
                : H();
            },
            [t]
          );
          var K = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === t || void 0 === t || !t.id)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 4),
                              D({
                                id: t.id,
                                body: {
                                  name: n.name,
                                  email: n.email,
                                  roleId: n.roleId,
                                  isActive: n.isActive,
                                  currencyId: n.currencyId,
                                  parentAgentId: n.parentAgentId
                                }
                              }).unwrap()
                            );
                          case 4:
                            u({ message: m.UPDATED });
                          case 5:
                            l(), o(), H(), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              u({ message: m.ERROR, type: 'error' });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            Q =
              ((0, h.useMemo)(
                function () {
                  var e;
                  return null === W ||
                    void 0 === W ||
                    null === (e = W.data) ||
                    void 0 === e
                    ? void 0
                    : e.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [W]
              ),
              (0, h.useMemo)(
                function () {
                  return null === M || void 0 === M
                    ? void 0
                    : M.map(function (e) {
                        return { id: e.id, name: e.name, value: e.id };
                      });
                },
                [M]
              ));
          return (0, B.jsx)(A.Z, {
            title:
              null !== t && void 0 !== t && t.id
                ? 'Edit '.concat(t.name)
                : 'Add User',
            onClose: r,
            open: n,
            isLoading: z,
            onOk:
              null !== t && void 0 !== t && t.id
                ? N(K)
                : function () {
                    return f(!0);
                  },
            children:
              null !== t && void 0 !== t && t.id
                ? (0, B.jsx)(c.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, B.jsx)('div', {
                      className: 'block',
                      children: (0, B.jsxs)(y.ZP, {
                        container: !0,
                        spacing: 2,
                        mt: 1,
                        children: [
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 8,
                            children: (0, B.jsx)(C.n, {
                              label: (0, B.jsx)(k.Z, { id: 'label.username' }),
                              name: 'username',
                              errors: Y,
                              register: _,
                              disabled: !(null === t || void 0 === t || !t.id)
                            })
                          }),
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, B.jsx)(w.Z, {
                              spacing: 2,
                              justifyContent: 'center',
                              alignItems: 'center',
                              children: (0, B.jsx)(P.Z, {
                                label: 'Active',
                                control: (0, B.jsx)(I.Z, {
                                  name: 'isActive',
                                  defaultChecked: !(
                                    null === t ||
                                    void 0 === t ||
                                    !t.isActive
                                  ),
                                  onChange: function (e) {
                                    var n = e.target.checked;
                                    U('isActive', n);
                                  }
                                })
                              })
                            })
                          }),
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, B.jsx)(C.n, {
                              label: (0, B.jsx)(k.Z, { id: 'label.name' }),
                              name: 'name',
                              errors: Y,
                              register: _
                            })
                          }),
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, B.jsx)(C.n, {
                              label: 'Email',
                              name: 'email',
                              errors: Y,
                              register: _
                            })
                          }),
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, B.jsx)(S.R, {
                              control: V,
                              name: 'parentAgentId',
                              errors: Y
                            })
                          }),
                          (0, B.jsx)(y.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, B.jsx)(c.Z, {
                              display: 'flex',
                              gap: '1rem',
                              children: (0, B.jsx)(C.P, {
                                label: 'Currency',
                                name: 'currencyId',
                                control: V,
                                options: Q
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                : (0, B.jsx)(F.Z, {
                    isUserRegister: !0,
                    isSubmit: v,
                    setIsSubmit: function () {
                      return f(!1);
                    },
                    refetch: l,
                    onClose: r
                  })
          });
        },
        D = (0, h.memo)(E),
        z = t(5119),
        W = t(6151),
        M = t(6043),
        L = t(8096),
        _ = t(4925),
        U = t(9321),
        H = t(3786),
        N = t(946),
        V = t(8673),
        Y = t(8901),
        K = function () {
          var e = (0, j.d)(),
            n = e.visible,
            t = e.toggle,
            r = (0, h.useState)(),
            i = (0, s.Z)(r, 2),
            a = i[0],
            l = i[1],
            o = function (e) {
              return Math.abs(
                Object.keys(null === e || void 0 === e ? void 0 : e.balances)
                  .filter(function (e) {
                    return (
                      'deposit' === e ||
                      'withdraw' === e ||
                      'user.add_balance' === e
                    );
                  })
                  .reduce(function (n, t) {
                    return n + -1 * e.balances[t];
                  }, 0)
              );
            };
          return {
            tableBody: function (e) {
              var n, r, i, a, s, d, c, m;
              return [
                {
                  align: 'inherit',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(u.Z, {
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
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(u.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children: e.agentName
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(W.Z, {
                      variant: 'outlined',
                      startIcon: (0, B.jsx)(Y.Z, {}),
                      href: 'transactions/'.concat(e.id),
                      children: e.balance
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(W.Z, {
                      variant: 'outlined',
                      startIcon: (0, B.jsx)(Y.Z, {}),
                      href: 'transactions/'.concat(e.id, '/betting-history'),
                      children:
                        null !==
                          (n =
                            (null !==
                              (r =
                                null === e ||
                                void 0 === e ||
                                null === (i = e.balances) ||
                                void 0 === i
                                  ? void 0
                                  : i.win) && void 0 !== r
                              ? r
                              : 0) +
                            (null !==
                              (a =
                                null === e ||
                                void 0 === e ||
                                null === (s = e.balances) ||
                                void 0 === s
                                  ? void 0
                                  : s.bet) && void 0 !== a
                              ? a
                              : 0) +
                            (null !==
                              (d =
                                null === e ||
                                void 0 === e ||
                                null === (c = e.balances) ||
                                void 0 === c
                                  ? void 0
                                  : c.cancel) && void 0 !== d
                              ? d
                              : 0)) && void 0 !== n
                          ? n
                          : 0
                    })
                  })
                },
                {
                  align: 'inherit',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(W.Z, {
                      variant: 'outlined',
                      startIcon: (0, B.jsx)(Y.Z, {}),
                      href: 'transactions/'.concat(e.id, '/recharge-history'),
                      children:
                        (null === e || void 0 === e ? void 0 : e.balances) &&
                        o(e)
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(M.Z, {
                      badgeContent:
                        null !== e && void 0 !== e && e.isActive
                          ? 'Active'
                          : 'Locked',
                      color:
                        null !== e && void 0 !== e && e.isActive
                          ? 'success'
                          : 'secondary',
                      sx: { padding: 1 },
                      children: (0, B.jsx)(u.Z, {
                        variant: 'body1',
                        fontWeight: 'bold',
                        color: 'text.primary',
                        noWrap: !0,
                        children: e.username
                      })
                    })
                  })
                },
                {
                  align: 'right',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(u.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.loggedIn) &&
                        (0, N.Z)(
                          (0, V.Z)(
                            null === e || void 0 === e ? void 0 : e.loggedIn
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                },
                {
                  align: 'center',
                  children: (0, B.jsx)(B.Fragment, {
                    children: (0, B.jsx)(W.Z, {
                      disabled:
                        (null ===
                          (m = JSON.parse(localStorage.getItem('user'))) ||
                        void 0 === m
                          ? void 0
                          : m.id) != e.agentId,
                      variant: 'outlined',
                      startIcon: (0, B.jsx)(Y.Z, {}),
                      onClick: function () {
                        return (function (e) {
                          l(e), t();
                        })(e);
                      },
                      children: 'Payment'
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              {
                align: 'inherit',
                title: 'label.affiliated-agent',
                name: 'name'
              },
              { align: 'inherit', title: 'label.balance', name: 'balance' },
              {
                align: 'inherit',
                title: 'label.betting',
                name: 'totalBettingAmount'
              },
              {
                align: 'inherit',
                title: 'label.recharge',
                name: 'totalBettingAmount'
              },
              { align: 'right', title: 'label.username', name: 'username' },
              { align: 'right', title: 'label.loggedin', name: 'updatedAt' },
              {
                align: 'center',
                title: 'title.managements',
                name: 'management'
              },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var n = e.status,
                t = e.dateFrom,
                r = e.dateTo;
              return [
                (0, B.jsx)(z.M, {
                  label: (0, B.jsx)(k.Z, { id: 'label.from' }),
                  onChange: t.onChange
                }),
                (0, B.jsx)(z.M, {
                  label: (0, B.jsx)(k.Z, { id: 'label.to' }),
                  onChange: r.onChange
                }),
                (0, B.jsxs)(L.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, B.jsx)(_.Z, {
                      id: 'isActive',
                      children: (0, B.jsx)(k.Z, { id: 'label.status' })
                    }),
                    (0, B.jsxs)(U.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, B.jsx)(k.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, B.jsx)(H.Z, {
                          value: '',
                          children: (0, B.jsx)('em', {
                            children: (0, B.jsx)(k.Z, { id: 'label.default' })
                          })
                        }),
                        (0, B.jsx)(H.Z, {
                          value: 'active',
                          children: (0, B.jsx)(k.Z, { id: 'label.active' })
                        }),
                        (0, B.jsx)(H.Z, {
                          value: 'disable',
                          children: (0, B.jsx)(k.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            },
            visible: n,
            toggle: t,
            user: a
          };
        },
        Q = t(3504),
        X = 'title.users-management',
        J = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: X }
            ],
            n = (0, Q.lr)(),
            t = (0, s.Z)(n, 1)[0],
            b = (0, j.d)(),
            y = b.visible,
            w = b.hide,
            P = b.show,
            I = (0, j.p)(),
            k = I.notify,
            C = I.message,
            S = (0, x.cI)().reset,
            A = K(),
            F = A.tableBody,
            T = A.tableHeader,
            O = A.tableFilter,
            R = A.visible,
            q = A.toggle,
            E = A.user,
            z = (0, h.useState)({
              userId: '',
              amount: 0,
              type: 'user.add_balance',
              note: '',
              status: 'pending'
            }),
            W = (0, s.Z)(z, 2),
            M = W[0],
            L = W[1],
            _ = (0, h.useState)([]),
            U = (0, s.Z)(_, 2),
            H = U[0],
            N = U[1],
            V = (0, h.useState)(),
            Y = (0, s.Z)(V, 2),
            J = Y[0],
            $ = Y[1],
            G = (0, h.useState)({
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
            ee = (0, s.Z)(G, 2),
            ne = ee[0],
            te = ee[1],
            re = (0, g.V_)(),
            ie = (0, s.Z)(re, 1)[0],
            ae = (0, g.I1)(),
            le = (0, s.Z)(ae, 2),
            se = le[0],
            oe = le[1].isLoading,
            de = (0, v.Dx)(),
            ce = (0, s.Z)(de, 2),
            ue = ce[0],
            me = ce[1].isLoading,
            he = (0, Z.v9)(function (e) {
              return e.common;
            }).permissions,
            xe = (0, g.zQ)(
              {
                page: ne.page,
                size: ne.size,
                search: ne.search,
                dateFrom: ne.dateFrom,
                dateTo: ne.dateTo
              },
              { refetchOnMountOrArgChange: !0 }
            ),
            Ze = xe.data,
            pe = xe.isFetching,
            ve = xe.refetch;
          (0, h.useEffect)(
            function () {
              if (Ze) {
                var e = t.get('parentId');
                if (e) {
                  var n = Ze.data.data.filter(function (n) {
                    return n.agentId === e;
                  });
                  N(function () {
                    var e;
                    return (0,
                    f.TY)(n, null === (e = T[ne.sortBy]) || void 0 === e ? void 0 : e.name, ne.sortDirection);
                  });
                } else
                  N(function () {
                    var e;
                    return (0,
                    f.TY)(Ze.data.data, null === (e = T[ne.sortBy]) || void 0 === e ? void 0 : e.name, ne.sortDirection);
                  });
              }
            },
            [Ze, ne.sortBy, ne.sortDirection, t]
          ),
            (0, h.useEffect)(
              function () {
                E &&
                  L(function (e) {
                    return (0,
                    l.Z)((0, l.Z)({}, e), {}, { userId: null === E || void 0 === E ? void 0 : E.id, amount: Number(e.amount) });
                  });
              },
              [E]
            );
          var ge,
            fe,
            je = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), se(n).unwrap();
                          case 3:
                            k({ message: C.DELETED }), ve(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              k({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (t = e.t0.data) ||
                                  void 0 === t
                                    ? void 0
                                    : t.message) || C.ERROR,
                                type: 'error'
                              });
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
            be = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e(n) {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ie(n).unwrap();
                          case 3:
                            (t = e.sent), P(), $(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              k({ message: C.ERROR, type: 'error' });
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
            ye = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e() {
                  var n;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ue(M).unwrap();
                          case 3:
                            e.sent &&
                              (q(), k({ message: C.UPDATED }), ve(), w(), S()),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              k({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (n = e.t0.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.message) || C.ERROR,
                                type: 'error'
                              });
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
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(p.Z, {
                title: X,
                data: H,
                totalItems:
                  null === Ze || void 0 === Ze ? void 0 : Ze.data.totalItems,
                tableHeader: T,
                tableBody: F,
                headerTitle: X,
                breadcrumbs: e,
                isLoading: pe || oe,
                onDelete: je,
                onUpdate: be,
                pagination: ne,
                onPagination: te,
                onOpenModal:
                  ((ge = he),
                  (fe = 'create'),
                  (null === ge || void 0 === ge ? void 0 : ge.includes(fe)) &&
                    function () {
                      P(), $(null);
                    }),
                tableFilter: O({
                  status: {
                    value: ne.status,
                    onChange: function (e) {
                      return te((0, l.Z)((0, l.Z)({}, ne), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: ne.dateFrom,
                    onChange: function (e) {
                      return te(
                        (0, l.Z)(
                          (0, l.Z)({}, ne),
                          {},
                          { dateFrom: (0, f.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: ne.dateTo,
                    onChange: function (e) {
                      return te(
                        (0, l.Z)(
                          (0, l.Z)({}, ne),
                          {},
                          { dateTo: (0, f.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, B.jsx)(D, {
                open: y,
                detail: J,
                onClose: w,
                refetch: ve,
                hide: w
              }),
              (0, B.jsx)(d.Z, {
                open: R,
                onClose: q,
                children: (0, B.jsxs)(c.Z, {
                  component: 'form',
                  padding: 2,
                  width: '400px',
                  children: [
                    (0, B.jsx)(u.Z, {
                      gutterBottom: !0,
                      variant: 'h5',
                      component: 'div',
                      children: 'Add transaction'
                    }),
                    (0, B.jsxs)(c.Z, {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: 2,
                      pt: 2,
                      children: [
                        (0, B.jsx)(m.Z, {
                          label: 'Insert the amount here',
                          variant: 'outlined',
                          fullWidth: !0,
                          onInput: function (e) {
                            return (
                              (n = Number(e.target.value)),
                              (t = 'amount'),
                              void L(function (e) {
                                return (0,
                                l.Z)((0, l.Z)({}, e), {}, (0, r.Z)({}, ''.concat(t), n));
                              })
                            );
                            var n, t;
                          }
                        }),
                        (0, B.jsx)(o.Z, {
                          loading: me,
                          onClick: ye,
                          size: 'large',
                          variant: 'contained',
                          children: (0, B.jsx)(u.Z, {
                            whiteSpace: 'nowrap',
                            children: '+ Add'
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
          l = a[0],
          s = a[1];
        return (
          (0, i.useEffect)(
            function () {
              var t = setTimeout(function () {
                s(e);
              }, n);
              return function () {
                clearTimeout(t);
              };
            },
            [e, n]
          ),
          l
        );
      };
    },
    5850: function (e, n, t) {
      t.d(n, {
        TY: function () {
          return l;
        },
        Zd: function () {
          return s;
        }
      });
      var r = t(3433),
        i = t(2426),
        a = t.n(i),
        l = function (e, n, t) {
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
        s = function (e, n) {
          return 'to' === n
            ? a()(e).endOf('day').utc().toISOString()
            : a()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=917.5bd9da8d.chunk.js.map
