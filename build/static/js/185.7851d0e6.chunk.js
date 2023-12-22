'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [185],
  {
    7590: function (e, n, r) {
      r.d(n, {
        P: function () {
          return y;
        },
        n: function () {
          return k;
        }
      });
      var t = r(1413),
        i = r(5987),
        a = r(5403),
        l = r(8096),
        o = r(4925),
        s = r(9321),
        u = r(9834),
        d = r(8550),
        c = r(3466),
        v = r(3786),
        m = r(4554),
        f = r(3239),
        h = r(7071),
        p = r(2791),
        x = r(1134),
        Z = r(184),
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
            r = e.control,
            p = e.name,
            j = e.label,
            y = e.options,
            b = e.isFetching,
            k = e.errors,
            C = e.searchTerm,
            w = e.onSearch,
            S = e.setSelected,
            V = (0, i.Z)(e, g);
          return r
            ? (0, Z.jsx)(x.Qr, {
                control: r,
                name: p,
                render: function (e) {
                  var n,
                    r = e.field;
                  return (0, Z.jsxs)(l.Z, {
                    fullWidth: !0,
                    children: [
                      (0, Z.jsx)(o.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== k && void 0 !== k && k[p] && !r.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, Z.jsxs)(
                        s.Z,
                        (0, t.Z)(
                          (0, t.Z)(
                            (0, t.Z)(
                              {
                                labelId: 'demo-simple-select-label',
                                id: 'demo-simple-select',
                                label: j,
                                value:
                                  (null === r || void 0 === r
                                    ? void 0
                                    : r.value) || '',
                                error:
                                  !(null === k || void 0 === k || !k[p]) &&
                                  !r.value
                              },
                              r
                            ),
                            V
                          ),
                          {},
                          {
                            children: [
                              w &&
                                (0, Z.jsx)(u.Z, {
                                  children: (0, Z.jsx)(d.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, Z.jsx)(c.Z, {
                                        position: 'start',
                                        children: (0, Z.jsx)(a.Z, {})
                                      })
                                    },
                                    value: C,
                                    onChange: function (e) {
                                      return w(e.target.value);
                                    },
                                    onKeyDown: function (e) {
                                      'Escape' !== e.key && e.stopPropagation();
                                    }
                                  })
                                }),
                              null === y || void 0 === y
                                ? void 0
                                : y.map(function (e) {
                                    return (0, Z.jsx)(
                                      v.Z,
                                      {
                                        value: e.value,
                                        onKeyDown: function (e) {
                                          return e.stopPropagation();
                                        },
                                        onClick: function () {
                                          return (
                                            (n = e),
                                            void (
                                              null === S ||
                                              void 0 === S ||
                                              S(n)
                                            )
                                          );
                                          var n;
                                        },
                                        children: e.name
                                      },
                                      e.id
                                    );
                                  }),
                              b &&
                                (0, Z.jsx)(m.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, Z.jsx)(f.Z, {
                                    size: 32,
                                    disableShrink: !0,
                                    thickness: 3
                                  })
                                })
                            ]
                          }
                        )
                      ),
                      (null === k || void 0 === k ? void 0 : k[p]) &&
                        !r.value &&
                        (0, Z.jsx)(h.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === k ||
                            void 0 === k ||
                            null === (n = k[p]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, Z.jsxs)(l.Z, {
                fullWidth: !0,
                children: [
                  (0, Z.jsx)(o.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== k && void 0 !== k && k[p]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, Z.jsx)(
                    s.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        V
                      ),
                      {},
                      {
                        error: !(null === k || void 0 === k || !k[p]),
                        children:
                          null === y || void 0 === y
                            ? void 0
                            : y.map(function (e) {
                                return (0,
                                Z.jsx)(v.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === k || void 0 === k || !k[p]) &&
                    (0, Z.jsx)(h.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === k ||
                        void 0 === k ||
                        null === (n = k[p]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        y = (0, p.memo)(j),
        b = ['label', 'name', 'errors', 'register'],
        k = function (e) {
          var n = e.label,
            r = e.name,
            a = e.errors,
            l = e.register,
            o = (0, i.Z)(e, b);
          return (0, Z.jsx)(
            d.Z,
            (0, t.Z)(
              (0, t.Z)(
                {
                  label: n,
                  error: !!a[r],
                  helperText: a[r] ? a[r].message : '',
                  fullWidth: !0
                },
                l(r)
              ),
              o
            )
          );
        };
    },
    7891: function (e, n, r) {
      var t = r(1413),
        i = r(5987),
        a = r(3329),
        l = r(9709),
        o = r(4721),
        s = r(9164),
        u = r(6151),
        d = r(5574),
        c = r(5661),
        v = r(493),
        m = r(4349),
        f = r(184),
        h = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          r = e.children,
          p = e.open,
          x = e.isLoading,
          Z = void 0 !== x && x,
          g = e.onClose,
          j = e.onOk,
          y = (0, i.Z)(e, h);
        return (0, f.jsxs)(
          d.Z,
          (0, t.Z)(
            (0, t.Z)({ onClose: g, open: p }, y),
            {},
            {
              children: [
                n && (0, f.jsx)(c.Z, { variant: 'h4', children: n }),
                n && (0, f.jsx)(o.Z, {}),
                (0, f.jsx)(v.Z, { sx: { pt: 0 }, children: r }),
                (0, f.jsx)(o.Z, {}),
                (0, f.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                    padding: '12px 0'
                  },
                  children: [
                    (0, f.jsx)(u.Z, {
                      variant: 'outlined',
                      sx: { width: '90px' },
                      onClick: g,
                      children: (0, f.jsx)(m.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, f.jsx)(l.Z, {
                        onClick: j,
                        loading: Z,
                        loadingPosition: 'start',
                        startIcon: (0, f.jsx)(a.Z, {}),
                        variant: 'contained',
                        sx: { width: '90px' },
                        type: 'submit',
                        children: (0, f.jsx)(m.Z, { id: 'label.OK' })
                      })
                  ]
                })
              ]
            }
          )
        );
      };
    },
    7911: function (e, n, r) {
      var t = r(4165),
        i = r(4942),
        a = r(5861),
        l = r(1413),
        o = r(3433),
        s = r(9439),
        u = r(4695),
        d = r(5397),
        c = r(8087),
        v = r(4554),
        m = r(3239),
        f = r(890),
        h = r(6151),
        p = r(2791),
        x = r(1134),
        Z = r(4349),
        g = r(7590),
        j = r(7891),
        y = r(7945),
        b = r(7837),
        k = r(2810),
        C = r(5243),
        w = r(184),
        S = C.Ry().shape({
          name: C.Z_().required('Name is required!'),
          url: C.Z_().required('Url is required!')
        });
      n.Z = function (e) {
        var n = e.open,
          r = e.isCreate,
          C = void 0 === r || r,
          V = e.vendorData,
          F = e.slug,
          O = e.onClose,
          R = { keys: '', value: '', key: (0, k.Z)() },
          z = (0, b.p)(),
          E = z.message,
          P = z.notify,
          A = (0, y.du)(),
          D = (0, s.Z)(A, 1)[0],
          I = (0, y.M)(),
          M = (0, s.Z)(I, 2),
          N = M[0],
          T = M[1].isLoading,
          U = (0, x.cI)({
            resolver: (0, u.X)(S),
            defaultValues: { name: '', url: '' }
          }),
          L = U.register,
          q = U.reset,
          B = U.handleSubmit,
          H = U.setValue,
          K = U.formState.errors,
          W = (0, p.useState)([R]),
          _ = (0, s.Z)(W, 2),
          Q = _[0],
          X = _[1];
        (0, p.useEffect)(
          function () {
            null !== V && void 0 !== V && V.data && !C
              ? (H('name', null === V || void 0 === V ? void 0 : V.data.name),
                H('url', null === V || void 0 === V ? void 0 : V.data.url),
                X(function () {
                  var e, n, r;
                  return (null === V ||
                  void 0 === V ||
                  null === (e = V.data) ||
                  void 0 === e ||
                  null === (n = e.keys) ||
                  void 0 === n
                    ? void 0
                    : n.length) > 0
                    ? null === V ||
                      void 0 === V ||
                      null === (r = V.data.keys) ||
                      void 0 === r
                      ? void 0
                      : r.map(function (e) {
                          return {
                            keys: Object.keys(e)[0],
                            value: Object.values(e)[0],
                            key: (0, k.Z)()
                          };
                        })
                    : [R];
                }))
              : (q(), X([R]));
          },
          [V]
        );
        var $ = (function () {
            var e = (0, a.Z)(
              (0, t.Z)().mark(function e(n) {
                var r, a, l;
                return (0, t.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (r =
                              null === Q || void 0 === Q
                                ? void 0
                                : Q.map(function (e) {
                                    return (0,
                                    i.Z)({}, ''.concat(e.keys), e.value);
                                  })),
                            (e.next = 4),
                            D({ url: n.rul, name: n.name, keys: r }).unwrap()
                          );
                        case 4:
                          if (!(a = e.sent)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            X([]),
                            q(),
                            null === O || void 0 === O || O(),
                            e.abrupt(
                              'return',
                              P({
                                message:
                                  (null === a || void 0 === a
                                    ? void 0
                                    : a.message) || E.CREATED
                              })
                            )
                          );
                        case 10:
                          e.next = 15;
                          break;
                        case 12:
                          return (
                            (e.prev = 12),
                            (e.t0 = e.catch(0)),
                            e.abrupt(
                              'return',
                              P({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (l = e.t0.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.message) || E.ERROR,
                                type: 'error'
                              })
                            )
                          );
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          G = (function () {
            var e = (0, a.Z)(
              (0, t.Z)().mark(function e(n) {
                var r, a, l;
                return (0, t.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (r =
                              null === Q || void 0 === Q
                                ? void 0
                                : Q.map(function (e) {
                                    return (0,
                                    i.Z)({}, ''.concat(e.keys), e.value);
                                  })),
                            (e.next = 4),
                            N({
                              url: n.rul,
                              name: n.name,
                              keys: r,
                              id: F
                            }).unwrap()
                          );
                        case 4:
                          if (!(a = e.sent)) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            P({
                              message:
                                (null === a || void 0 === a
                                  ? void 0
                                  : a.message) || E.UPDATED
                            })
                          );
                        case 7:
                          e.next = 12;
                          break;
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            e.abrupt(
                              'return',
                              P({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (l = e.t0.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.message) || E.ERROR,
                                type: 'error'
                              })
                            )
                          );
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          J = function (e, n, r) {
            return X(function (t) {
              return null === t || void 0 === t
                ? void 0
                : t.map(function (t) {
                    return t.key === n
                      ? 'key' === e
                        ? (0, l.Z)((0, l.Z)({}, t), {}, { keys: r })
                        : (0, l.Z)((0, l.Z)({}, t), {}, { value: r })
                      : (0, l.Z)({}, t);
                  });
            });
          },
          Y = (0, p.useMemo)(
            function () {
              return (
                console.log(),
                (0, w.jsxs)(v.Z, {
                  width: ''.concat(C ? '100%' : '50%'),
                  padding: C ? 0 : 2,
                  paddingBottom: 0,
                  margin: C ? 0 : 2,
                  position: 'relative',
                  bgcolor: ''.concat(T ? 'rgba(230, 224, 224, 0.25)' : null),
                  children: [
                    T &&
                      (0, w.jsx)(v.Z, {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        sx: { transform: 'translate(-50%, -50%)' },
                        children: (0, w.jsx)(m.Z, {})
                      }),
                    (0, w.jsxs)(v.Z, {
                      component: 'form',
                      id: 'form-users',
                      children: [
                        (0, w.jsx)(g.n, {
                          label: (0, w.jsx)(Z.Z, { id: 'label.name' }),
                          name: 'name',
                          sx: { my: 1, mt: 2 },
                          errors: K,
                          register: L
                        }),
                        (0, w.jsx)(g.n, {
                          label: (0, w.jsx)(Z.Z, { id: 'label.url' }),
                          name: 'url',
                          errors: K,
                          sx: { my: 1 },
                          register: L
                        }),
                        (0, w.jsx)(f.Z, { mb: 2, children: 'Keys:' }),
                        (0, w.jsx)(v.Z, {
                          flex: 1,
                          children:
                            null === Q || void 0 === Q
                              ? void 0
                              : Q.map(function (e, n) {
                                  return (0, w.jsxs)(
                                    v.Z,
                                    {
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      gap: 1,
                                      children: [
                                        (0, w.jsx)(
                                          g.n,
                                          {
                                            label: 'Key '.concat(n),
                                            name: 'key-'.concat((0, k.Z)()),
                                            errors: K,
                                            register: L,
                                            sx: { paddingBottom: 1, flex: 1 },
                                            value: e.keys,
                                            onChange: function (n) {
                                              return J(
                                                'key',
                                                e.key,
                                                n.target.value
                                              );
                                            }
                                          },
                                          e.key
                                        ),
                                        (0, w.jsx)(g.n, {
                                          label: 'Value '.concat(n),
                                          name: 'value-'.concat((0, k.Z)()),
                                          errors: K,
                                          register: L,
                                          sx: { paddingBottom: 1, flex: 2.5 },
                                          value: e.value,
                                          onChange: function (n) {
                                            return J(
                                              'value',
                                              e.key,
                                              n.target.value
                                            );
                                          }
                                        }),
                                        (0, w.jsx)(h.Z, {
                                          onClick: function () {
                                            return (function (e, n) {
                                              return X(
                                                0 === n
                                                  ? function (e) {
                                                      return [].concat(
                                                        (0, o.Z)(e),
                                                        [(0, l.Z)({}, R)]
                                                      );
                                                    }
                                                  : function (n) {
                                                      return n.filter(function (
                                                        n
                                                      ) {
                                                        return n.key !== e;
                                                      });
                                                    }
                                              );
                                            })(e.key, n);
                                          },
                                          sx: { paddingBottom: 1 },
                                          children:
                                            n > 0
                                              ? (0, w.jsx)(d.Z, {})
                                              : (0, w.jsx)(c.Z, {})
                                        })
                                      ]
                                    },
                                    e.key
                                  );
                                })
                        }),
                        !C &&
                          (0, w.jsx)(v.Z, {
                            width: '100%',
                            textAlign: 'right',
                            children: (0, w.jsx)(h.Z, {
                              variant: 'contained',
                              onClick: B(G),
                              children: 'Update'
                            })
                          })
                      ]
                    })
                  ]
                })
              );
            },
            [Q, K, L, C, T]
          );
        return (0, w.jsx)(w.Fragment, {
          children: C
            ? (0, w.jsx)(j.Z, {
                title: 'Create Vendor',
                open: n,
                onClose: O,
                onOk: B($),
                children: Y
              })
            : (0, w.jsx)(v.Z, { children: Y })
        });
      };
    },
    1185: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return p;
          }
        });
      var t = r(9439),
        i = r(6871),
        a = r(3504),
        l = r(7945),
        o = r(1889),
        s = r(4554),
        u = r(3239),
        d = r(890),
        c = r(2791),
        v = r(2408),
        m = r(7911),
        f = r(184),
        h = function (e) {
          return e % 4 === 0
            ? 'rgba(255, 255, 255, 0.1)'
            : e % 4 === 1
            ? 'rgba(148, 170, 237, 0.1)'
            : e % 4 === 2
            ? 'rgba(166, 235, 185, 0.1)'
            : e % 4 === 3
            ? 'rgba(224, 234, 139, 0.1)'
            : 'rgba(94, 29, 29, 0.1)';
        };
      function p() {
        var e = (0, i.UO)().slug,
          n = (0, a.lr)(),
          r = (0, t.Z)(n, 1)[0],
          p = (0, c.useState)([]),
          x = (0, t.Z)(p, 2),
          Z = x[0],
          g = x[1],
          j = (0, v.r)(
            { vendors: r.get('name') },
            { skip: !r.get('name'), refetchOnMountOrArgChange: !0 }
          ).data,
          y = (0, l.qt)({ id: e }, { skip: !e, refetchOnMountOrArgChange: !0 }),
          b = y.data,
          k = y.refetch;
        return (
          (0, c.useEffect)(
            function () {
              if (null !== j && void 0 !== j && j.length) {
                var e = j.map(function (e) {
                  return (
                    (n = e.img),
                    new Promise(function (e) {
                      var r = new Image();
                      if (((r.src = n), r.complete)) return e(!0);
                      (r.onload = function () {
                        return e(!0);
                      }),
                        (r.onerror = function () {
                          return e(!1);
                        });
                    })
                  );
                  var n;
                });
                Promise.all(e)
                  .then(function (e) {
                    g(e);
                  })
                  .catch(function (e) {
                    g(e);
                  });
              }
              return function () {
                g([]);
              };
            },
            [j, r]
          ),
          (0, f.jsxs)(f.Fragment, {
            children: [
              b &&
                (0, f.jsx)(m.Z, {
                  isCreate: !1,
                  vendorData: b,
                  refetch: k,
                  slug: Number(e)
                }),
              (0, f.jsx)(o.ZP, {
                container: !0,
                columns: { xs: 8, sm: 12, md: 16, lg: 20 },
                spacing: 2,
                padding: 3,
                children:
                  null === j || void 0 === j
                    ? void 0
                    : j.map(function (e, n) {
                        return (0,
                        f.jsx)(o.ZP, { item: !0, xs: 4, sm: 4, md: 4, lg: 4, position: 'relative', children: (0, f.jsx)(s.Z, { height: '100%', width: '100%', children: (0, f.jsx)('div', { className: 'game-detail', children: (0, f.jsxs)('div', { className: 'card', children: [(0, f.jsx)('img', { src: e.img, alt: '', loading: 'lazy', style: { display: Z[n] ? 'block' : 'none' } }), (0, f.jsx)(s.Z, { display: Z[n] ? 'none' : 'block', width: '100%', height: '100%', children: (0, f.jsxs)(s.Z, { textAlign: 'center', position: 'absolute', top: '50%', left: '50%', width: '100%', zIndex: 100, sx: { transform: 'translate(-50%, -50%)' }, children: [(0, f.jsx)(u.Z, {}), (0, f.jsx)(d.Z, { style: { opacity: 1 }, children: 'Loading...' })] }) }), (0, f.jsx)('div', { className: 'override-circle', children: (0, f.jsx)('div', { className: 'circle', style: { background: h(n) } }) }), (0, f.jsx)('div', { className: 'card-content', children: (0, f.jsx)('span', { className: 'game-title', title: e.name, children: e.name }) })] }) }) }) }, ''.concat(e.url, '-').concat(n));
                      })
              })
            ]
          })
        );
      }
    },
    3329: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var i = t(r(5649)),
        a = r(184),
        l = (0, i.default)(
          (0, a.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = l;
    },
    5403: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var i = t(r(5649)),
        a = r(184),
        l = (0, i.default)(
          (0, a.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      n.Z = l;
    },
    8087: function (e, n, r) {
      var t = r(9201),
        i = r(184);
      n.Z = (0, t.Z)(
        (0, i.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
        'Add'
      );
    },
    5397: function (e, n, r) {
      var t = r(9201),
        i = r(184);
      n.Z = (0, t.Z)(
        (0, i.jsx)('path', {
          d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
        }),
        'Delete'
      );
    },
    2810: function (e, n, r) {
      var t;
      r.d(n, {
        Z: function () {
          return c;
        }
      });
      var i = new Uint8Array(16);
      function a() {
        if (
          !t &&
          !(t =
            ('undefined' !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' !== typeof msCrypto &&
              'function' === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return t(i);
      }
      var l =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (
        var o = function (e) {
            return 'string' === typeof e && l.test(e);
          },
          s = [],
          u = 0;
        u < 256;
        ++u
      )
        s.push((u + 256).toString(16).substr(1));
      var d = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            s[e[n + 0]] +
            s[e[n + 1]] +
            s[e[n + 2]] +
            s[e[n + 3]] +
            '-' +
            s[e[n + 4]] +
            s[e[n + 5]] +
            '-' +
            s[e[n + 6]] +
            s[e[n + 7]] +
            '-' +
            s[e[n + 8]] +
            s[e[n + 9]] +
            '-' +
            s[e[n + 10]] +
            s[e[n + 11]] +
            s[e[n + 12]] +
            s[e[n + 13]] +
            s[e[n + 14]] +
            s[e[n + 15]]
          ).toLowerCase();
        if (!o(r)) throw TypeError('Stringified UUID is invalid');
        return r;
      };
      var c = function (e, n, r) {
        var t = (e = e || {}).random || (e.rng || a)();
        if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), n)) {
          r = r || 0;
          for (var i = 0; i < 16; ++i) n[r + i] = t[i];
          return n;
        }
        return d(t);
      };
    }
  }
]);
//# sourceMappingURL=185.7851d0e6.chunk.js.map
