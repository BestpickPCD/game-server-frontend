'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [185],
  {
    67590: (e, n, l) => {
      l.d(n, { P: () => j, n: () => y });
      var a = l(5403),
        r = l(68096),
        s = l(94925),
        t = l(99321),
        i = l(79834),
        o = l(48550),
        d = l(63466),
        c = l(23786),
        u = l(697),
        v = l(13239),
        m = l(47071),
        h = l(72791),
        x = l(61134),
        p = l(80184);
      const g = (e) => {
          var n;
          let {
            control: l,
            name: h,
            label: g,
            options: j,
            isFetching: y,
            errors: f,
            searchTerm: Z,
            onSearch: b,
            setSelected: k,
            ...C
          } = e;
          return l
            ? (0, p.jsx)(x.Qr, {
                control: l,
                name: h,
                render: (e) => {
                  var n;
                  let { field: l } = e;
                  return (0, p.jsxs)(r.Z, {
                    fullWidth: !0,
                    children: [
                      (0, p.jsx)(s.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== f && void 0 !== f && f[h] && !l.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: g
                      }),
                      (0, p.jsxs)(t.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: g,
                        value:
                          (null === l || void 0 === l ? void 0 : l.value) || '',
                        error:
                          !(null === f || void 0 === f || !f[h]) && !l.value,
                        ...l,
                        ...C,
                        children: [
                          b &&
                            (0, p.jsx)(i.Z, {
                              children: (0, p.jsx)(o.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, p.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, p.jsx)(a.Z, {})
                                  })
                                },
                                value: Z,
                                onChange: (e) => b(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === j || void 0 === j
                            ? void 0
                            : j.map((e) =>
                                (0, p.jsx)(
                                  c.Z,
                                  {
                                    value: e.value,
                                    onKeyDown: (e) => e.stopPropagation(),
                                    onClick: () => {
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
                                )
                              ),
                          y &&
                            (0, p.jsx)(u.Z, {
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '12px',
                              marginBottom: '12px',
                              children: (0, p.jsx)(v.Z, {
                                size: 32,
                                disableShrink: !0,
                                thickness: 3
                              })
                            })
                        ]
                      }),
                      (null === f || void 0 === f ? void 0 : f[h]) &&
                        !l.value &&
                        (0, p.jsx)(m.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === f ||
                            void 0 === f ||
                            null === (n = f[h]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, p.jsxs)(r.Z, {
                fullWidth: !0,
                children: [
                  (0, p.jsx)(s.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== f && void 0 !== f && f[h]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: g
                  }),
                  (0, p.jsx)(t.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: g,
                    ...C,
                    error: !(null === f || void 0 === f || !f[h]),
                    children:
                      null === j || void 0 === j
                        ? void 0
                        : j.map((e) =>
                            (0, p.jsx)(
                              c.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === f || void 0 === f || !f[h]) &&
                    (0, p.jsx)(m.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === f ||
                        void 0 === f ||
                        null === (n = f[h]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        j = (0, h.memo)(g),
        y = (e) => {
          let { label: n, name: l, errors: a, register: r, ...s } = e;
          return (0, p.jsx)(o.Z, {
            label: n,
            error: !!a[l],
            helperText: a[l] ? a[l].message : '',
            fullWidth: !0,
            ...r(l),
            ...s
          });
        };
    },
    57891: (e, n, l) => {
      l.d(n, { Z: () => m });
      var a = l(53329),
        r = l(39709),
        s = l(94721),
        t = l(89164),
        i = l(94294),
        o = l(5574),
        d = l(65661),
        c = l(90493),
        u = l(4349),
        v = l(80184);
      const m = function (e) {
        let {
          title: n,
          children: l,
          open: m,
          isLoading: h = !1,
          onClose: x,
          onOk: p,
          ...g
        } = e;
        return (0, v.jsxs)(o.Z, {
          onClose: x,
          open: m,
          ...g,
          children: [
            n && (0, v.jsx)(d.Z, { variant: 'h4', children: n }),
            n && (0, v.jsx)(s.Z, {}),
            (0, v.jsx)(c.Z, { sx: { pt: 0 }, children: l }),
            (0, v.jsx)(s.Z, {}),
            (0, v.jsxs)(t.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, v.jsx)(i.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: x,
                  children: (0, v.jsx)(u.Z, { id: 'label.cancel' })
                }),
                p &&
                  (0, v.jsx)(r.Z, {
                    onClick: p,
                    loading: h,
                    loadingPosition: 'start',
                    startIcon: (0, v.jsx)(a.Z, {}),
                    variant: 'contained',
                    sx: { width: '90px' },
                    type: 'submit',
                    children: (0, v.jsx)(u.Z, { id: 'label.OK' })
                  })
              ]
            })
          ]
        });
      };
    },
    74772: (e, n, l) => {
      l.d(n, { Z: () => b });
      var a = l(44695),
        r = l(76189),
        s = l(80184);
      const t = (0, r.Z)(
          (0, s.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
          }),
          'Delete'
        ),
        i = (0, r.Z)(
          (0, s.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
          'Add'
        );
      var o = l(697),
        d = l(13239),
        c = l(20890),
        u = l(94294),
        v = l(72791),
        m = l(61134),
        h = l(4349),
        x = l(67590),
        p = l(57891),
        g = l(17945),
        j = l(87837),
        y = l(92810),
        f = l(8007);
      const Z = f.Ry().shape({
          name: f.Z_().required('Name is required!'),
          url: f.Z_().required('Url is required!')
        }),
        b = (e) => {
          let {
            open: n,
            isCreate: l = !0,
            vendorData: r,
            slug: f,
            onClose: b
          } = e;
          const k = { key: '', value: '', keys: (0, y.Z)() },
            { message: C, notify: w } = (0, j.p)(),
            [S] = (0, g.du)(),
            [V, { isLoading: R }] = (0, g.M)(),
            {
              register: z,
              reset: F,
              handleSubmit: O,
              setValue: E,
              formState: { errors: P }
            } = (0, m.cI)({
              resolver: (0, a.X)(Z),
              defaultValues: { name: '', url: '' }
            }),
            [A, D] = (0, v.useState)([k]);
          (0, v.useEffect)(() => {
            if (null !== r && void 0 !== r && r.data && !l)
              if (
                (E('name', null === r || void 0 === r ? void 0 : r.data.name),
                E('url', null === r || void 0 === r ? void 0 : r.data.url),
                null !== (null === r || void 0 === r ? void 0 : r.data.keys) &&
                  (null === r || void 0 === r ? void 0 : r.data.keys.length) >
                    0)
              ) {
                const e =
                  null === r || void 0 === r
                    ? void 0
                    : r.data.keys.map((e) => {
                        var n, l;
                        return {
                          key:
                            null !== (n = Object.keys(e)[0]) && void 0 !== n
                              ? n
                              : '',
                          value:
                            null !== (l = e[Object.keys(e)[0]]) && void 0 !== l
                              ? l
                              : '',
                          keys: (0, y.Z)()
                        };
                      });
                D(e);
              } else D([k]);
            else F(), D([k]);
          }, [r]);
          const I = async (e) => {
              try {
                const n = A.filter((e) => '' !== e.key && '' !== e.value),
                  l =
                    null === n || void 0 === n
                      ? void 0
                      : n.map((e) => ({ [''.concat(e.key)]: e.value })),
                  a = await V({
                    url: e.url,
                    name: e.name,
                    keys: l,
                    id: f
                  }).unwrap();
                if (a)
                  return (
                    D(n),
                    w({
                      message:
                        (null === a || void 0 === a ? void 0 : a.message) ||
                        C.UPDATED
                    })
                  );
              } catch (l) {
                var n;
                return w({
                  message:
                    (null === l ||
                    void 0 === l ||
                    null === (n = l.data) ||
                    void 0 === n
                      ? void 0
                      : n.message) || C.ERROR,
                  type: 'error'
                });
              }
            },
            M = (e, n, l) =>
              D((a) =>
                null === a || void 0 === a
                  ? void 0
                  : a.map((a) =>
                      a.keys === n
                        ? 'key' === e
                          ? { ...a, key: l }
                          : { ...a, value: l }
                        : { ...a }
                    )
              ),
            N = (0, v.useMemo)(
              () =>
                (0, s.jsxs)(o.Z, {
                  width: ''.concat(l ? '100%' : '50%'),
                  padding: l ? 0 : 2,
                  paddingBottom: 0,
                  margin: l ? 0 : 2,
                  position: 'relative',
                  bgcolor: ''.concat(R ? 'rgba(230, 224, 224, 0.25)' : null),
                  children: [
                    R &&
                      (0, s.jsx)(o.Z, {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        sx: { transform: 'translate(-50%, -50%)' },
                        children: (0, s.jsx)(d.Z, {})
                      }),
                    (0, s.jsxs)(o.Z, {
                      component: 'form',
                      id: 'form-users',
                      children: [
                        (0, s.jsx)(x.n, {
                          label: (0, s.jsx)(h.Z, { id: 'label.name' }),
                          name: 'name',
                          sx: { my: 1, mt: 2 },
                          errors: P,
                          register: z
                        }),
                        (0, s.jsx)(x.n, {
                          label: (0, s.jsx)(h.Z, { id: 'label.url' }),
                          name: 'url',
                          errors: P,
                          sx: { my: 1 },
                          register: z
                        }),
                        (0, s.jsx)(c.Z, { mb: 2, children: 'Keys:' }),
                        (0, s.jsx)(o.Z, {
                          flex: 1,
                          children:
                            null === A || void 0 === A
                              ? void 0
                              : A.map((e, n) =>
                                  (0, s.jsxs)(
                                    o.Z,
                                    {
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      gap: 1,
                                      children: [
                                        (0, s.jsx)(
                                          x.n,
                                          {
                                            label: 'Key '.concat(n),
                                            name: 'key-'.concat((0, y.Z)()),
                                            errors: P,
                                            register: z,
                                            sx: { paddingBottom: 1, flex: 1 },
                                            value: e.key,
                                            onChange: (n) =>
                                              M('key', e.keys, n.target.value)
                                          },
                                          'Key-'.concat(e.keys)
                                        ),
                                        (0, s.jsx)(
                                          x.n,
                                          {
                                            label: 'Value '.concat(n),
                                            name: 'value-'.concat((0, y.Z)()),
                                            errors: P,
                                            register: z,
                                            sx: { paddingBottom: 1, flex: 2.5 },
                                            value: e.value,
                                            onChange: (n) =>
                                              M('value', e.keys, n.target.value)
                                          },
                                          'value-'.concat(e.keys)
                                        ),
                                        (0, s.jsx)(u.Z, {
                                          onClick: () =>
                                            ((e, n) =>
                                              D(
                                                0 === n
                                                  ? (e) => [...e, { ...k }]
                                                  : (n) =>
                                                      n.filter(
                                                        (n) => n.key !== e
                                                      )
                                              ))(e.key, n),
                                          sx: { paddingBottom: 1 },
                                          children:
                                            n > 0
                                              ? (0, s.jsx)(t, {})
                                              : (0, s.jsx)(i, {})
                                        })
                                      ]
                                    },
                                    n
                                  )
                                )
                        }),
                        !l &&
                          (0, s.jsx)(o.Z, {
                            width: '100%',
                            textAlign: 'right',
                            children: (0, s.jsx)(u.Z, {
                              variant: 'contained',
                              onClick: O(I),
                              children: 'Update'
                            })
                          })
                      ]
                    })
                  ]
                }),
              [A, P, z, l, R]
            );
          return (
            console.log(A),
            (0, s.jsx)(s.Fragment, {
              children: l
                ? (0, s.jsx)(p.Z, {
                    title: 'Create Vendor',
                    open: n,
                    onClose: b,
                    onOk: O(async (e) => {
                      try {
                        const n =
                            null === A || void 0 === A
                              ? void 0
                              : A.map((e) => ({ [''.concat(e.key)]: e.value })),
                          l = await S({
                            url: e.url,
                            name: e.name,
                            keys: n
                          }).unwrap();
                        if (l)
                          return (
                            D([]),
                            F(),
                            null === b || void 0 === b || b(),
                            w({
                              message:
                                (null === l || void 0 === l
                                  ? void 0
                                  : l.message) || C.CREATED
                            })
                          );
                      } catch (l) {
                        var n;
                        return w({
                          message:
                            (null === l ||
                            void 0 === l ||
                            null === (n = l.data) ||
                            void 0 === n
                              ? void 0
                              : n.message) || C.ERROR,
                          type: 'error'
                        });
                      }
                    }),
                    children: N
                  })
                : (0, s.jsx)(o.Z, { children: N })
            })
          );
        };
    },
    91185: (e, n, l) => {
      l.r(n), l.d(n, { default: () => x });
      var a = l(16871),
        r = l(43504),
        s = l(17945),
        t = l(61889),
        i = l(697),
        o = l(13239),
        d = l(20890),
        c = l(72791),
        u = l(12408),
        v = l(74772),
        m = l(80184);
      const h = (e) =>
        e % 4 === 0
          ? 'rgba(255, 255, 255, 0.1)'
          : e % 4 === 1
          ? 'rgba(148, 170, 237, 0.1)'
          : e % 4 === 2
          ? 'rgba(166, 235, 185, 0.1)'
          : e % 4 === 3
          ? 'rgba(224, 234, 139, 0.1)'
          : 'rgba(94, 29, 29, 0.1)';
      function x() {
        const { slug: e } = (0, a.UO)(),
          [n] = (0, r.lr)(),
          [l, x] = (0, c.useState)([]),
          { data: p } = (0, u.rt)(
            { vendors: n.get('name') },
            { skip: !n.get('name'), refetchOnMountOrArgChange: !0 }
          ),
          { data: g, refetch: j } = (0, s.qt)(
            { id: e },
            { skip: !e, refetchOnMountOrArgChange: !0 }
          );
        return (
          (0, c.useEffect)(() => {
            if (null !== p && void 0 !== p && p.length) {
              const e = (e) =>
                  new Promise((n) => {
                    const l = new Image();
                    if (((l.src = e), l.complete)) return n(!0);
                    (l.onload = function () {
                      return n(!0);
                    }),
                      (l.onerror = function () {
                        return n(!1);
                      });
                  }),
                n = p.map((n) => e(n.img));
              Promise.all(n)
                .then((e) => {
                  x(e);
                })
                .catch((e) => {
                  x(e);
                });
            }
            return () => {
              x([]);
            };
          }, [p, n]),
          (0, m.jsxs)(m.Fragment, {
            children: [
              g &&
                (0, m.jsx)(v.Z, {
                  isCreate: !1,
                  vendorData: g,
                  refetch: j,
                  slug: Number(e)
                }),
              (0, m.jsx)(t.ZP, {
                container: !0,
                columns: { xs: 8, sm: 12, md: 16, lg: 20 },
                spacing: 2,
                padding: 3,
                children:
                  null === p || void 0 === p
                    ? void 0
                    : p.map((e, n) =>
                        (0, m.jsx)(
                          t.ZP,
                          {
                            item: !0,
                            xs: 4,
                            sm: 4,
                            md: 4,
                            lg: 4,
                            position: 'relative',
                            children: (0, m.jsx)(i.Z, {
                              height: '100%',
                              width: '100%',
                              children: (0, m.jsx)('div', {
                                className: 'game-detail',
                                children: (0, m.jsxs)('div', {
                                  className: 'card',
                                  children: [
                                    (0, m.jsx)('img', {
                                      src: e.img,
                                      alt: '',
                                      loading: 'lazy',
                                      style: {
                                        display: l[n] ? 'block' : 'none'
                                      }
                                    }),
                                    (0, m.jsx)(i.Z, {
                                      display: l[n] ? 'none' : 'block',
                                      width: '100%',
                                      height: '100%',
                                      children: (0, m.jsxs)(i.Z, {
                                        textAlign: 'center',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100%',
                                        zIndex: 100,
                                        sx: {
                                          transform: 'translate(-50%, -50%)'
                                        },
                                        children: [
                                          (0, m.jsx)(o.Z, {}),
                                          (0, m.jsx)(d.Z, {
                                            style: { opacity: 1 },
                                            children: 'Loading...'
                                          })
                                        ]
                                      })
                                    }),
                                    (0, m.jsx)('div', {
                                      className: 'override-circle',
                                      children: (0, m.jsx)('div', {
                                        className: 'circle',
                                        style: { background: h(n) }
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
                              })
                            })
                          },
                          ''.concat(e.url, '-').concat(n)
                        )
                      )
              })
            ]
          })
        );
      }
    },
    53329: (e, n, l) => {
      var a = l(64836);
      n.Z = void 0;
      var r = a(l(45649)),
        s = l(80184),
        t = (0, r.default)(
          (0, s.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      n.Z = t;
    },
    5403: (e, n, l) => {
      var a = l(64836);
      n.Z = void 0;
      var r = a(l(45649)),
        s = l(80184),
        t = (0, r.default)(
          (0, s.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      n.Z = t;
    },
    92810: (e, n, l) => {
      var a;
      l.d(n, { Z: () => u });
      var r = new Uint8Array(16);
      function s() {
        if (
          !a &&
          !(a =
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
        return a(r);
      }
      const t =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const i = function (e) {
        return 'string' === typeof e && t.test(e);
      };
      for (var o = [], d = 0; d < 256; ++d)
        o.push((d + 256).toString(16).substr(1));
      const c = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          l = (
            o[e[n + 0]] +
            o[e[n + 1]] +
            o[e[n + 2]] +
            o[e[n + 3]] +
            '-' +
            o[e[n + 4]] +
            o[e[n + 5]] +
            '-' +
            o[e[n + 6]] +
            o[e[n + 7]] +
            '-' +
            o[e[n + 8]] +
            o[e[n + 9]] +
            '-' +
            o[e[n + 10]] +
            o[e[n + 11]] +
            o[e[n + 12]] +
            o[e[n + 13]] +
            o[e[n + 14]] +
            o[e[n + 15]]
          ).toLowerCase();
        if (!i(l)) throw TypeError('Stringified UUID is invalid');
        return l;
      };
      const u = function (e, n, l) {
        var a = (e = e || {}).random || (e.rng || s)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), n)) {
          l = l || 0;
          for (var r = 0; r < 16; ++r) n[l + r] = a[r];
          return n;
        }
        return c(a);
      };
    }
  }
]);
//# sourceMappingURL=185.c90a1dab.chunk.js.map
