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
        a = r(5987),
        i = r(5403),
        l = r(8096),
        o = r(4925),
        s = r(8406),
        u = r(9834),
        c = r(8550),
        d = r(3466),
        v = r(3786),
        m = r(4554),
        f = r(3239),
        h = r(7071),
        p = r(2791),
        x = r(1134),
        g = r(184),
        Z = [
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
            N = (0, a.Z)(e, Z);
          return r
            ? (0, g.jsx)(x.Qr, {
                control: r,
                name: p,
                render: function (e) {
                  var n,
                    r = e.field;
                  return (0, g.jsxs)(l.Z, {
                    fullWidth: !0,
                    children: [
                      (0, g.jsx)(o.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== k && void 0 !== k && k[p] && !r.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: j
                      }),
                      (0, g.jsxs)(
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
                            N
                          ),
                          {},
                          {
                            children: [
                              w &&
                                (0, g.jsx)(u.Z, {
                                  children: (0, g.jsx)(c.Z, {
                                    size: 'small',
                                    autoFocus: !0,
                                    placeholder: 'Type to search...',
                                    fullWidth: !0,
                                    InputProps: {
                                      startAdornment: (0, g.jsx)(d.Z, {
                                        position: 'start',
                                        children: (0, g.jsx)(i.Z, {})
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
                                    return (0, g.jsx)(
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
                                (0, g.jsx)(m.Z, {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '12px',
                                  marginBottom: '12px',
                                  children: (0, g.jsx)(f.Z, {
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
                        (0, g.jsx)(h.Z, {
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
            : (0, g.jsxs)(l.Z, {
                fullWidth: !0,
                children: [
                  (0, g.jsx)(o.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== k && void 0 !== k && k[p]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: j
                  }),
                  (0, g.jsx)(
                    s.Z,
                    (0, t.Z)(
                      (0, t.Z)(
                        {
                          labelId: 'demo-simple-select-label',
                          id: 'demo-simple-select',
                          label: j
                        },
                        N
                      ),
                      {},
                      {
                        error: !(null === k || void 0 === k || !k[p]),
                        children:
                          null === y || void 0 === y
                            ? void 0
                            : y.map(function (e) {
                                return (0,
                                g.jsx)(v.Z, { value: e.value, children: e.name }, e.id);
                              })
                      }
                    )
                  ),
                  !(null === k || void 0 === k || !k[p]) &&
                    (0, g.jsx)(h.Z, {
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
            i = e.errors,
            l = e.register,
            o = (0, a.Z)(e, b);
          return (0, g.jsx)(
            c.Z,
            (0, t.Z)(
              (0, t.Z)(
                {
                  label: n,
                  error: !!i[r],
                  helperText: i[r] ? i[r].message : '',
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
        a = r(5987),
        i = r(3329),
        l = r(9709),
        o = r(4721),
        s = r(9164),
        u = r(6151),
        c = r(5574),
        d = r(5661),
        v = r(493),
        m = r(4349),
        f = r(184),
        h = ['title', 'children', 'open', 'isLoading', 'onClose', 'onOk'];
      n.Z = function (e) {
        var n = e.title,
          r = e.children,
          p = e.open,
          x = e.isLoading,
          g = void 0 !== x && x,
          Z = e.onClose,
          j = e.onOk,
          y = (0, a.Z)(e, h);
        return (0, f.jsxs)(
          c.Z,
          (0, t.Z)(
            (0, t.Z)({ onClose: Z, open: p }, y),
            {},
            {
              children: [
                n && (0, f.jsx)(d.Z, { variant: 'h4', children: n }),
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
                      onClick: Z,
                      children: (0, f.jsx)(m.Z, { id: 'label.cancel' })
                    }),
                    j &&
                      (0, f.jsx)(l.Z, {
                        onClick: j,
                        loading: g,
                        loadingPosition: 'start',
                        startIcon: (0, f.jsx)(i.Z, {}),
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
        a = r(4942),
        i = r(5861),
        l = r(1413),
        o = r(3433),
        s = r(9439),
        u = r(4695),
        c = r(5397),
        d = r(8087),
        v = r(4554),
        m = r(3239),
        f = r(890),
        h = r(6151),
        p = r(2791),
        x = r(1134),
        g = r(4349),
        Z = r(7590),
        j = r(7891),
        y = r(7945),
        b = r(7837),
        k = r(2810),
        C = r(6727),
        w = r(184),
        S = C.Ry().shape({
          name: C.Z_().required('Name is required!'),
          url: C.Z_().required('Url is required!')
        });
      n.Z = function (e) {
        var n = e.open,
          r = e.isCreate,
          C = void 0 === r || r,
          N = e.vendorData,
          R = e.slug,
          V = e.onClose,
          F = { keys: '', value: '', key: (0, k.Z)() },
          O = (0, b.p)(),
          z = O.message,
          E = O.notify,
          A = (0, y.du)(),
          P = (0, s.Z)(A, 1)[0],
          D = (0, y.M)(),
          M = (0, s.Z)(D, 2),
          T = M[0],
          I = M[1].isLoading,
          U = (0, x.cI)({
            resolver: (0, u.X)(S),
            defaultValues: { name: '', url: '' }
          }),
          H = U.register,
          L = U.reset,
          q = U.handleSubmit,
          B = U.setValue,
          K = U.formState.errors,
          W = (0, p.useState)([F]),
          _ = (0, s.Z)(W, 2),
          Q = _[0],
          X = _[1];
        (0, p.useEffect)(
          function () {
            null !== N && void 0 !== N && N.data && !C
              ? (B('name', null === N || void 0 === N ? void 0 : N.data.name),
                B('url', null === N || void 0 === N ? void 0 : N.data.url),
                X(function () {
                  var e, n, r;
                  return (null === N ||
                  void 0 === N ||
                  null === (e = N.data) ||
                  void 0 === e ||
                  null === (n = e.keys) ||
                  void 0 === n
                    ? void 0
                    : n.length) > 0
                    ? null === N ||
                      void 0 === N ||
                      null === (r = N.data.keys) ||
                      void 0 === r
                      ? void 0
                      : r.map(function (e) {
                          return {
                            keys: Object.keys(e)[0],
                            value: Object.values(e)[0],
                            key: (0, k.Z)()
                          };
                        })
                    : [F];
                }))
              : (L(), X([F]));
          },
          [N]
        );
        var $ = (function () {
            var e = (0, i.Z)(
              (0, t.Z)().mark(function e(n) {
                var r, i, l;
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
                                    a.Z)({}, ''.concat(e.keys), e.value);
                                  })),
                            (e.next = 4),
                            P({ url: n.rul, name: n.name, keys: r }).unwrap()
                          );
                        case 4:
                          if (!(i = e.sent)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            X([]),
                            L(),
                            null === V || void 0 === V || V(),
                            e.abrupt(
                              'return',
                              E({
                                message:
                                  (null === i || void 0 === i
                                    ? void 0
                                    : i.message) || z.CREATED
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
                              E({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (l = e.t0.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.message) || z.ERROR,
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
            var e = (0, i.Z)(
              (0, t.Z)().mark(function e(n) {
                var r, i, l;
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
                                    a.Z)({}, ''.concat(e.keys), e.value);
                                  })),
                            (e.next = 4),
                            T({
                              url: n.rul,
                              name: n.name,
                              keys: r,
                              id: R
                            }).unwrap()
                          );
                        case 4:
                          if (!(i = e.sent)) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            E({
                              message:
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.message) || z.UPDATED
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
                              E({
                                message:
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null === (l = e.t0.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.message) || z.ERROR,
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
                console.log(Q),
                (0, w.jsxs)(v.Z, {
                  width: ''.concat(C ? '100%' : '50%'),
                  padding: C ? 0 : 2,
                  paddingBottom: 0,
                  margin: C ? 0 : 2,
                  position: 'relative',
                  bgcolor: ''.concat(I ? 'rgba(230, 224, 224, 0.25)' : null),
                  children: [
                    I &&
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
                        (0, w.jsx)(Z.n, {
                          label: (0, w.jsx)(g.Z, { id: 'label.name' }),
                          name: 'name',
                          sx: { my: 1, mt: 2 },
                          errors: K,
                          register: H
                        }),
                        (0, w.jsx)(Z.n, {
                          label: (0, w.jsx)(g.Z, { id: 'label.url' }),
                          name: 'url',
                          errors: K,
                          sx: { my: 1 },
                          register: H
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
                                          Z.n,
                                          {
                                            label: 'Key '.concat(n),
                                            name: 'key-'.concat((0, k.Z)()),
                                            errors: K,
                                            register: H,
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
                                        (0, w.jsx)(Z.n, {
                                          label: 'Value '.concat(n),
                                          name: 'value-'.concat((0, k.Z)()),
                                          errors: K,
                                          register: H,
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
                                                        [(0, l.Z)({}, F)]
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
                                              ? (0, w.jsx)(c.Z, {})
                                              : (0, w.jsx)(d.Z, {})
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
                              onClick: q(G),
                              children: 'Update'
                            })
                          })
                      ]
                    })
                  ]
                })
              );
            },
            [Q, K, H, C, I]
          );
        return (0, w.jsx)(w.Fragment, {
          children: C
            ? (0, w.jsx)(j.Z, {
                title: 'Create Vendor',
                open: n,
                onClose: V,
                onOk: q($),
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
            return h;
          }
        });
      var t = r(9439),
        a = r(6871),
        i = r(3504),
        l = r(7945),
        o = r(1889),
        s = r(4554),
        u = r(3239),
        c = r(7911),
        d = r(2408),
        v = r(2791),
        m = r(184),
        f = function (e) {
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
      function h() {
        var e = (0, a.UO)().slug,
          n = (0, v.useRef)([]),
          r = (0, i.lr)(),
          h = (0, t.Z)(r, 1)[0],
          p = (0, v.useState)([]),
          x = (0, t.Z)(p, 2),
          g = x[0],
          Z = x[1],
          j = (0, d.r)(
            { vendors: h.get('name') },
            { skip: !h.get('name'), refetchOnMountOrArgChange: !0 }
          ).data,
          y = (0, l.qt)({ id: e }, { skip: !e, refetchOnMountOrArgChange: !0 }),
          b = y.data,
          k = y.refetch;
        return (
          (0, v.useEffect)(
            function () {
              null !== j &&
                void 0 !== j &&
                j.length &&
                Z(
                  Array.from({ length: j.length }).map(function () {
                    return !1;
                  })
                );
            },
            [j]
          ),
          (0, v.useEffect)(
            function () {
              if (j && n && n.current && n.current.length) {
                var e = n.current.map(function (e) {
                  return (function (e) {
                    return new Promise(function (n) {
                      return e.complete && 0 !== e.naturalHeight
                        ? n(!0)
                        : n(!1);
                    });
                  })(e);
                });
                Promise.all(e).then(function (e) {
                  Z(e);
                });
              }
            },
            [j, n]
          ),
          (0, m.jsxs)(m.Fragment, {
            children: [
              b &&
                (0, m.jsx)(c.Z, {
                  isCreate: !1,
                  vendorData: b,
                  refetch: k,
                  slug: Number(e)
                }),
              (0, m.jsx)(o.ZP, {
                container: !0,
                columns: { xs: 8, sm: 12, md: 16, lg: 20 },
                spacing: 2,
                padding: 3,
                children:
                  null === j || void 0 === j
                    ? void 0
                    : j.map(function (e, r) {
                        return (0, m.jsx)(o.ZP, {
                          item: !0,
                          xs: 4,
                          sm: 4,
                          md: 4,
                          lg: 4,
                          position: 'relative',
                          children: (0, m.jsxs)(s.Z, {
                            height: '100%',
                            width: '100%',
                            children: [
                              (0, m.jsx)('div', {
                                className: 'game-detail',
                                style: {
                                  display: ''.concat(g[r] ? 'block' : 'none')
                                },
                                children: (0, m.jsxs)('div', {
                                  className: 'card',
                                  children: [
                                    (0, m.jsx)('img', {
                                      src: e.img,
                                      alt: '',
                                      loading: 'lazy',
                                      ref: function (e) {
                                        return (n.current[r] = e);
                                      }
                                    }),
                                    (0, m.jsx)('div', {
                                      className: 'override-circle',
                                      children: (0, m.jsx)('div', {
                                        className: 'circle',
                                        style: { background: f(r) }
                                      })
                                    }),
                                    (0, m.jsx)('div', {
                                      className: 'card-content',
                                      children: (0, m.jsx)('span', {
                                        className: 'game-title',
                                        title: e.name,
                                        children: e.name
                                      })
                                    })
                                  ]
                                })
                              }),
                              (0, m.jsxs)('div', {
                                className: 'game-detail',
                                style: {
                                  position: 'relative',
                                  display: ''.concat(g[r] ? 'none' : 'block')
                                },
                                children: [
                                  (0, m.jsxs)(s.Z, {
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    sx: { transform: 'translate(-50%, -50%)' },
                                    display: 'block',
                                    textAlign: 'center',
                                    children: [
                                      (0, m.jsx)(u.Z, {}),
                                      (0, m.jsx)('p', {
                                        children: 'Loading...'
                                      })
                                    ]
                                  }),
                                  (0, m.jsxs)('div', {
                                    className: 'card',
                                    children: [
                                      (0, m.jsx)('div', {
                                        className: 'override-circle',
                                        children: (0, m.jsx)('div', {
                                          className: 'circle',
                                          style: { background: f(r) }
                                        })
                                      }),
                                      (0, m.jsx)('div', {
                                        className: 'card-content',
                                        children: (0, m.jsx)('span', {
                                          className: 'game-title',
                                          title: e.name,
                                          children: e.name
                                        })
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        });
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
      var a = t(r(5649)),
        i = r(184),
        l = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = l;
    },
    5403: function (e, n, r) {
      var t = r(4836);
      n.Z = void 0;
      var a = t(r(5649)),
        i = r(184),
        l = (0, a.default)(
          (0, i.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      n.Z = l;
    },
    8087: function (e, n, r) {
      var t = r(9201),
        a = r(184);
      n.Z = (0, t.Z)(
        (0, a.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
        'Add'
      );
    },
    5397: function (e, n, r) {
      var t = r(9201),
        a = r(184);
      n.Z = (0, t.Z)(
        (0, a.jsx)('path', {
          d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
        }),
        'Delete'
      );
    },
    2810: function (e, n, r) {
      var t;
      r.d(n, {
        Z: function () {
          return d;
        }
      });
      var a = new Uint8Array(16);
      function i() {
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
        return t(a);
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
      var c = function (e) {
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
      var d = function (e, n, r) {
        var t = (e = e || {}).random || (e.rng || i)();
        if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), n)) {
          r = r || 0;
          for (var a = 0; a < 16; ++a) n[r + a] = t[a];
          return n;
        }
        return c(t);
      };
    }
  }
]);
//# sourceMappingURL=185.e692a16f.chunk.js.map
