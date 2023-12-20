'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [635],
  {
    173: function (e, n, t) {
      var i = t(6934),
        r = t(9164),
        o = t(4554),
        a = t(890),
        l = t(4349),
        s = t(184),
        c = (0, i.ZP)(r.Z)(function (e) {
          var n = e.theme;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function () {
        return (0, s.jsx)(c, {
          className: 'footer-wrapper',
          children: (0, s.jsxs)(o.Z, {
            pb: 4,
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'space-between',
            children: [
              (0, s.jsx)(o.Z, {
                children: (0, s.jsxs)(a.Z, {
                  variant: 'subtitle1',
                  children: ['\xa9', (0, s.jsx)(l.Z, { id: 'footer.admin' })]
                })
              }),
              (0, s.jsx)(a.Z, {
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
          return p;
        }
      });
      var i = t(7762),
        r = t(3433),
        o = t(1413),
        a = t(9439),
        l = t(5987),
        s = t(2791),
        c = t(7590),
        d = t(1827),
        u = t(4732),
        h = t(184),
        x = ['control', 'name', 'parent', 'label', 'errors'],
        Z = function (e) {
          return (e || []).map(function (e) {
            return { id: e.id, name: e.name, value: e.id };
          });
        },
        p = function (e) {
          var n = e.control,
            t = e.name,
            p = e.parent,
            f = e.label,
            m = void 0 === f ? 'Agents' : f,
            v = e.errors,
            j = (0, l.Z)(e, x),
            g = (0, s.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            b = (0, a.Z)(g, 2),
            y = b[0],
            k = b[1],
            C = (0, s.useState)(''),
            P = (0, a.Z)(C, 2),
            w = P[0],
            S = P[1],
            I = (0, u.Z)(w, 500),
            F = (0, s.useState)([]),
            T = (0, a.Z)(F, 2),
            z = T[0],
            O = T[1],
            B = (0, s.useState)({ id: '', name: '', value: '' }),
            D = (0, a.Z)(B, 2),
            L = D[0],
            M = D[1];
          (0, s.useEffect)(
            function () {
              S(I),
                k(function (e) {
                  return (0, o.Z)((0, o.Z)({}, e), {}, { search: I });
                });
            },
            [I]
          );
          var H = (0, d.aN)(
              { size: y.size, page: y.page, search: y.search, id: 1 },
              { refetchOnMountOrArgChange: !0 }
            ),
            E = H.data,
            W = H.isFetching;
          function N(e) {
            var n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (E.data.page + 1) * E.data.size < E.data.totalItems
            )
              return k(function (e) {
                return (0, o.Z)((0, o.Z)({}, e), {}, { page: y.page + 1 });
              });
          }
          (0, s.useEffect)(
            function () {
              k({ search: I || '', id: 1, totalItems: 0, page: 0, size: 20 }),
                O([]);
            },
            [I, p]
          ),
            (0, s.useEffect)(
              function () {
                return O(
                  p
                    ? function (e) {
                        var n,
                          t = []
                            .concat(
                              (0, r.Z)(e),
                              (0, r.Z)(
                                Z(
                                  null === E ||
                                    void 0 === E ||
                                    null === (n = E.data) ||
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
                            })(p)
                          ),
                          t
                        );
                      }
                    : function (e) {
                        return [].concat(
                          (0, r.Z)(e),
                          (0, r.Z)(
                            Z(null === E || void 0 === E ? void 0 : E.data.data)
                          )
                        );
                      }
                );
              },
              [E, p]
            ),
            (0, s.useEffect)(
              function () {
                null !== L &&
                  void 0 !== L &&
                  L.id &&
                  O(function (e) {
                    var n = e.slice();
                    return n.unshift(L), n;
                  });
              },
              [L, E]
            );
          var A = (0, s.useMemo)(
            function () {
              var e,
                n = [],
                t = new Set(),
                r = (0, i.Z)(z);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var o = e.value;
                  t.has(o.id) || (t.add(o.id), n.push(o));
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
              return n;
            },
            [z]
          );
          return (0, h.jsx)(
            c.P,
            (0, o.Z)(
              {
                onScroll: N,
                name: t,
                label: m,
                options: A,
                control: n,
                MenuProps: {
                  className: 'infinity-select',
                  autoFocus: !1,
                  PaperProps: { onScroll: N },
                  style: { maxHeight: 500, padding: 0 }
                },
                isFetching: W,
                onSearch: S,
                searchTerm: w,
                errors: v,
                setSelected: M
              },
              j
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
          return k;
        }
      });
      var i = t(1413),
        r = t(5987),
        o = t(5403),
        a = t(8096),
        l = t(4925),
        s = t(9321),
        c = t(9834),
        d = t(8550),
        u = t(3466),
        h = t(3786),
        x = t(4554),
        Z = t(3239),
        p = t(7071),
        f = t(2791),
        m = t(1134),
        v = t(184),
        j = [
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
        g = function (e) {
          var n,
            t = e.control,
            f = e.name,
            g = e.label,
            b = e.options,
            y = e.isFetching,
            k = e.errors,
            C = e.searchTerm,
            P = e.onSearch,
            w = e.setSelected,
            S = (0, r.Z)(e, j);
          return t
            ? (0, v.jsx)(m.Qr, {
                control: t,
                name: f,
                render: function (e) {
                  var n,
                    t = e.field;
                  return (0, v.jsxs)(a.Z, {
                    fullWidth: !0,
                    children: [
                      (0, v.jsx)(l.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== k && void 0 !== k && k[f] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: g
                      }),
                      (0, v.jsxs)(
                        s.Z,
                        (0, i.Z)(
                          (0, i.Z)(
                            (0, i.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: g,
                                value:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.value) || '',
                                error:
                                  !(null === k || void 0 === k || !k[f]) &&
                                  !t.value
                              },
                              t
                            ),
                            S
                          ),
                          {},
                          {
                            children: [
                              P &&
                                (0, v.jsx)(c.Z, {
                                  children: (0, v.jsx)(d.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, v.jsx)(u.Z, {
                                        position: 'start',
                                        children: (0, v.jsx)(o.Z, {})
                                      })
                                    },
                                    value: C,
                                    onChange: function (e) {
                                      return P(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
                                    return (0, v.jsx)(
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
                                              null === w ||
                                              void 0 === w ||
                                              w(n)
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
                                (0, v.jsx)(x.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, v.jsx)(Z.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === k || void 0 === k ? void 0 : k[f]) &&
                        !t.value &&
                        (0, v.jsx)(p.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === k ||
                            void 0 === k ||
                            null === (n = k[f]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, v.jsxs)(a.Z, {
                fullWidth: !0,
                children: [
                  (0, v.jsx)(l.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== k && void 0 !== k && k[f]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: g
                  }),
                  (0, v.jsx)(
                    s.Z,
                    (0, i.Z)(
                      (0, i.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: g
                        },
                        S
                      ),
                      {},
                      {
                        error: !(null === k || void 0 === k || !k[f]),
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                v.jsx)(h.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === k || void 0 === k || !k[f]) &&
                    (0, v.jsx)(p.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === k ||
                        void 0 === k ||
                        null === (n = k[f]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        b = (0, f.memo)(g),
        y = ['label', 'name', 'errors', 'register'],
        k = function (e) {
          var n = e.label,
            t = e.name,
            o = e.errors,
            a = e.register,
            l = (0, r.Z)(e, y);
          return (0, v.jsx)(
            d.Z,
            (0, i.Z)(
              (0, i.Z)(
                {
                  label: n,
                  error: !!o[t],
                  helperText: o[t] ? o[t].message : '',
                  fullWidth: !0
                },
                a(t)
              ),
              l
            )
          );
        };
    },
    7891: function (e, n, t) {
      var i = t(1413),
        r = t(5987),
        o = t(3329),
        a = t(9709),
        l = t(4721),
        s = t(9164),
        c = t(6151),
        d = t(5574),
        u = t(5661),
        h = t(493),
        x = t(4349),
        Z = t(184),
        p = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          t = e.children,
          f = e.open,
          m = e.isLoading,
          v = void 0 !== m && m,
          j = e.onClose,
          g = e.onOk,
          b = (0, r.Z)(e, p);
        return (0, Z.jsxs)(
          d.Z,
          (0, i.Z)(
            (0, i.Z)({ onClose: j, open: f }, b),
            {},
            {
              children: [
                n && (0, Z.jsx)(u.Z, { variant: 'h4', children: n }),
                n && (0, Z.jsx)(l.Z, {}),
                (0, Z.jsx)(h.Z, { sx: { pt: 0 }, children: t }),
                (0, Z.jsx)(l.Z, {}),
                (0, Z.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, Z.jsx)(c.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: j,
                      children: (0, Z.jsx)(x.Z, { id: 'label.cancel' })
                    }),
                    g &&
                      (0, Z.jsx)(a.Z, {
                        onClick: g,
                        loading: v,
                        loadingPosition: 'start',
                        startIcon: (0, Z.jsx)(o.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, Z.jsx)(x.Z, { id: 'label.OK' })
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
        o = t(9164),
        a = t(184),
        l = (0, i.ZP)(r.Z)(function (e) {
          var n = e.theme;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        });
      n.Z = function (e) {
        var n = e.children;
        return (0, a.jsx)(l, {
          className: 'MuiPageTitle-wrapper',
          children: (0, a.jsx)(o.Z, { maxWidth: 'lg', children: n })
        });
      };
    },
    3481: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        }
      });
      var i = t(1889),
        r = t(890),
        o = t(4554),
        a = t(6151),
        l = t(4696),
        s = t(2791),
        c = t(8333),
        d = t(3517),
        u = t(6871),
        h = t(3504),
        x = t(4349),
        Z = t(184),
        p = function (e) {
          var n = e.links,
            t = void 0 === n ? [] : n,
            i = (0, u.TH)();
          return (0, Z.jsx)(d.Z, {
            separator: (0, Z.jsx)(c.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map(function (e, n) {
              return n === t.length - 1
                ? (0, Z.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, Z.jsx)(x.Z, { id: e.name })
                    },
                    n
                  )
                : (0, Z.jsx)(
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
                      children: (0, Z.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, Z.jsx)(x.Z, { id: e.name })
                      })
                    },
                    n
                  );
            })
          });
        },
        f = function (e) {
          var n = e.headerTitle,
            t = e.headerSubtitle,
            s = e.breadcrumbs,
            c = e.onOpenModal;
          return (0, Z.jsxs)(i.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, Z.jsxs)(i.ZP, {
                item: !0,
                children: [
                  (0, Z.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, Z.jsx)(x.Z, { id: n })
                  }),
                  (0, Z.jsx)(r.Z, { variant: 'subtitle2', children: t }),
                  s &&
                    (0, Z.jsx)(o.Z, {
                      marginTop: '8px',
                      children: (0, Z.jsx)(p, { links: s })
                    })
                ]
              }),
              c &&
                (0, Z.jsx)(i.ZP, {
                  item: !0,
                  children: (0, Z.jsx)(a.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, Z.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: c,
                    children: (0, Z.jsx)(x.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        m = (0, s.memo)(f);
    },
    6790: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ie;
        }
      });
      var i,
        r = t(9164),
        o = t(1889),
        a = t(2791),
        l = t(6907),
        s = t(3539),
        c = t(173),
        d = t(8418),
        u = t(3481),
        h = t(1413),
        x = t(3433),
        Z = t(9439),
        p = t(168),
        f = t(8036),
        m = t(1675),
        v = t(5403),
        j = t(1686),
        g = t(9709),
        b = t(6934),
        y = t(3967),
        k = t(7639),
        C = t(890),
        P = t(6151),
        w = t(3400),
        S = t(7621),
        I = t(4554),
        F = t(4721),
        T = t(8550),
        z = t(9281),
        O = t(9836),
        B = t(1048),
        D = t(5855),
        L = t(3994),
        M = t(4454),
        H = t(720),
        E = t(3382),
        W = t(3239),
        N = t(3033),
        A = t(7837),
        U = t(1715),
        K = t(493),
        R = t(5021),
        Y = t(9900),
        _ = t(4934),
        q = t(184),
        Q = (0, b.ZP)(P.Z)(function (e) {
          var n = e.theme;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        G = function () {
          var e = (0, A.d)(),
            n = e.toggle,
            t = e.visible,
            i = (0, a.useRef)(null);
          return (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsxs)(I.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, q.jsxs)(I.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, q.jsx)(C.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, q.jsx)(Q, {
                        sx: { ml: 1 },
                        startIcon: (0, q.jsx)(f.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, q.jsx)(w.Z, {
                    color: 'primary',
                    onClick: n,
                    ref: i,
                    sx: { ml: 2, p: 1 },
                    children: (0, q.jsx)(_.Z, {})
                  })
                ]
              }),
              (0, q.jsx)(U.Z, {
                keepMounted: !0,
                anchorEl: i.current,
                open: t,
                onClose: n,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, q.jsxs)(K.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, q.jsx)(R.ZP, {
                      button: !0,
                      children: (0, q.jsx)(Y.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, q.jsx)(R.ZP, {
                      button: !0,
                      children: (0, q.jsx)(Y.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        },
        J = t(2810),
        V = t(4732),
        X = t(4349),
        $ = (0, b.ZP)(g.Z)(
          i ||
            (i = (0, p.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        ee = function (e) {
          var n = e.data,
            t = e.tableHeader,
            i = e.isLoading,
            o = e.pagination,
            l = e.totalItems,
            s = void 0 === l ? 0 : l,
            c = e.tableFilter,
            d = e.extraOptions,
            u = e.tableBody,
            p = e.onDelete,
            g = e.onUpdate,
            b = e.onPagination,
            U = (0, y.Z)(),
            K = (0, A.d)(),
            R = K.visible,
            Y = K.show,
            _ = K.hide,
            Q = (0, a.useState)(''),
            ee = (0, Z.Z)(Q, 2),
            ne = ee[0],
            te = ee[1],
            ie = (0, a.useState)([]),
            re = (0, Z.Z)(ie, 2),
            oe = re[0],
            ae = re[1],
            le = (0, a.useState)(''),
            se = (0, Z.Z)(le, 2),
            ce = se[0],
            de = se[1],
            ue = (0, V.Z)(ce, 500);
          (0, a.useEffect)(
            function () {
              b((0, h.Z)((0, h.Z)({}, o), {}, { search: ue }));
            },
            [ue]
          );
          var he = oe.length > 0 && oe.length < n.length,
            xe = oe.length === n.length,
            Ze = function (e) {
              Y(), te(e);
            },
            pe = function (e) {
              p(e), _();
            },
            fe = (0, a.useMemo)(
              function () {
                return p || g || '' !== t[t.length - 1].name || t.pop(), t;
              },
              [p, g, t]
            ),
            me = function (e) {
              var n = e.item,
                t = e.hide,
                i = (e.onDelete, e.handleShow),
                o = e.rowId,
                a = e.visible,
                l = e.theme,
                s = e.isLoading;
              return (0, q.jsx)(k.Z, {
                title: (0, q.jsxs)(r.Z, {
                  children: [
                    (0, q.jsx)(C.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, q.jsxs)(r.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, q.jsx)(P.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, q.jsx)($, {
                          onClick: function () {
                            return pe(n.id);
                          },
                          loading: s,
                          loadingPosition: 'start',
                          startIcon: (0, q.jsx)(j.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: n.id === o && a && !s,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, q.jsx)(w.Z, {
                  sx: {
                    '&:hover': { background: l.colors.error.lighter },
                    color: l.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: function () {
                    return i(n.id);
                  },
                  children: (0, q.jsx)(f.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, q.jsxs)(S.Z, {
            children: [
              (null === oe || void 0 === oe ? void 0 : oe.length) > 0 &&
                (0, q.jsx)(I.Z, { flex: 1, p: 2, children: (0, q.jsx)(G, {}) }),
              (0, q.jsx)(F.Z, {}),
              (0, q.jsxs)(S.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, q.jsxs)(I.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, q.jsx)(T.Z, {
                        label: (0, q.jsx)(X.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: function (e) {
                          return de(e.target.value.trim());
                        }
                      }),
                      (0, q.jsx)(w.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, q.jsx)(v.Z, {})
                      })
                    ]
                  }),
                  (0, q.jsx)(I.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === c || void 0 === c
                        ? void 0
                        : c.map(function (e, n) {
                            return (0, q.jsx)(I.Z, { children: e }, n);
                          })
                  })
                ]
              }),
              (0, q.jsx)(z.Z, {
                children: (0, q.jsxs)(O.Z, {
                  children: [
                    (0, q.jsx)(B.Z, {
                      children: (0, q.jsxs)(D.Z, {
                        children: [
                          (0, q.jsx)(L.Z, {
                            padding: 'checkbox',
                            children: (0, q.jsx)(M.Z, {
                              color: 'primary',
                              checked: xe,
                              indeterminate: he,
                              onChange: function (e) {
                                ae(
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
                            return (0, q.jsx)(
                              L.Z,
                              (0, h.Z)(
                                (0, h.Z)({}, e.tableProps),
                                {},
                                {
                                  align: e.align,
                                  children: e.name
                                    ? (0, q.jsx)(H.Z, {
                                        active: o.sortBy === n,
                                        direction:
                                          o.sortBy === n
                                            ? o.sortDirection
                                            : 'asc',
                                        onClick: function () {
                                          return (function (e) {
                                            var n = (0, h.Z)(
                                              (0, h.Z)({}, o),
                                              {},
                                              {
                                                sortBy: e,
                                                sortDirection:
                                                  o.sortBy === e &&
                                                  'asc' === o.sortDirection
                                                    ? 'desc'
                                                    : 'asc'
                                              }
                                            );
                                            b(n);
                                          })(n);
                                        },
                                        children: (0, q.jsx)(X.Z, {
                                          id: e.title
                                        })
                                      })
                                    : (0, q.jsx)(X.Z, {
                                        id: e.title.toLowerCase()
                                      })
                                }
                              ),
                              (0, J.Z)()
                            );
                          })
                        ]
                      })
                    }),
                    (0, q.jsxs)(E.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map(function (e) {
                          var n,
                            t = oe.includes(e.id);
                          return (0, q.jsxs)(
                            D.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                (0, q.jsx)(
                                  L.Z,
                                  {
                                    padding: 'checkbox',
                                    children: (0, q.jsx)(M.Z, {
                                      color: 'primary',
                                      checked: t,
                                      onChange: function (n) {
                                        return (
                                          (t = e.id),
                                          void (oe.includes(t)
                                            ? ae(function (e) {
                                                return e.filter(function (e) {
                                                  return e !== t;
                                                });
                                              })
                                            : ae(function (e) {
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
                                  (0, J.Z)()
                                ),
                                null === (n = u(e)) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return (0,
                                      q.jsx)(L.Z, { align: e.align, sx: (0, h.Z)({}, e.tableProps), children: e.children }, (0, J.Z)());
                                    }),
                                (g || p) &&
                                  (0, q.jsxs)(
                                    L.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map(function (e) {
                                              return (0,
                                              q.jsx)(k.Z, { title: '', arrow: !0, children: e });
                                            }),
                                        g &&
                                          (0, q.jsx)(k.Z, {
                                            title: (0, q.jsx)(X.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, q.jsx)(w.Z, {
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
                                                return g(e.id);
                                              },
                                              children: (0, q.jsx)(m.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        p &&
                                          me({
                                            item: e,
                                            rowId: ne,
                                            visible: R,
                                            theme: U,
                                            isLoading: i,
                                            handleShow: Ze,
                                            onDelete: p,
                                            hide: _
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
                        i &&
                          (0, q.jsx)(D.Z, {
                            children: (0, q.jsx)(L.Z, {
                              children: (0, q.jsx)(I.Z, {
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
                                children: (0, q.jsx)(W.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, q.jsx)(I.Z, {
                p: 2,
                children: (0, q.jsx)(N.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: function (e, n) {
                    b((0, h.Z)((0, h.Z)({}, o), {}, { page: n }));
                  },
                  onRowsPerPageChange: function (e) {
                    b(
                      (0, h.Z)(
                        (0, h.Z)({}, o),
                        {},
                        { size: Number(e.target.value) }
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
        ne = (0, a.memo)(ee),
        te = function (e) {
          var n = e.title,
            t = e.data,
            i = void 0 === t ? [] : t,
            a = e.tableHeader,
            h = void 0 === a ? [{ align: 'inherit', title: 'Title' }] : a,
            x = e.headerTitle,
            Z = void 0 === x ? '' : x,
            p = e.headerSubtitle,
            f = void 0 === p ? '' : p,
            m = e.isLoading,
            v = void 0 !== m && m,
            j = e.breadcrumbs,
            g = e.pagination,
            b = e.tableFilter,
            y = e.totalItems,
            k = e.extraOptions,
            C = e.onOpenModal,
            P = e.tableBody,
            w = e.onDelete,
            S = e.onUpdate,
            I = e.onPagination,
            F = (0, s.Z)();
          return (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(l.ql, {
                children: (0, q.jsx)('title', {
                  children: F.formatMessage({ id: n })
                })
              }),
              (0, q.jsx)(d.Z, {
                children: (0, q.jsx)(u.Z, {
                  headerTitle: Z,
                  headerSubtitle: f,
                  onOpenModal: C,
                  breadcrumbs: j
                })
              }),
              (0, q.jsx)(r.Z, {
                maxWidth: 'lg',
                children: (0, q.jsx)(o.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, q.jsx)(o.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, q.jsx)(ne, {
                      data: i,
                      totalItems: y,
                      tableHeader: h,
                      tableBody: P,
                      isLoading: v,
                      onDelete: w,
                      onUpdate: S,
                      onPagination: I,
                      pagination: g,
                      tableFilter: b,
                      extraOptions: k
                    })
                  })
                })
              }),
              (0, q.jsx)(c.Z, {})
            ]
          });
        },
        ie = (0, a.memo)(te);
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
          o = (0, i.Z)(t, 2),
          a = o[0],
          l = o[1];
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
          a
        );
      };
    },
    5850: function (e, n, t) {
      t.d(n, {
        TY: function () {
          return a;
        },
        Zd: function () {
          return l;
        }
      });
      var i = t(3433),
        r = t(2426),
        o = t.n(r),
        a = function (e, n, t) {
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
            ? o()(e).endOf('day').utc().toISOString()
            : o()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=635.6317f55d.chunk.js.map
