'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [491],
  {
    7590: (e, t, a) => {
      a.d(t, { P: () => Z, n: () => f });
      var o = a(5403),
        r = a(8096),
        n = a(4925),
        l = a(9321),
        s = a(9834),
        i = a(8550),
        c = a(3466),
        d = a(3786),
        u = a(697),
        h = a(3239),
        p = a(7071),
        m = a(2791),
        v = a(1134),
        g = a(184);
      const x = (e) => {
          var t;
          let {
            control: a,
            name: m,
            label: x,
            options: Z,
            isFetching: f,
            errors: b,
            searchTerm: j,
            onSearch: y,
            setSelected: k,
            ...w
          } = e;
          return a
            ? (0, g.jsx)(v.Qr, {
                control: a,
                name: m,
                render: (e) => {
                  var t;
                  let { field: a } = e;
                  return (0, g.jsxs)(r.Z, {
                    fullWidth: !0,
                    children: [
                      (0, g.jsx)(n.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== b && void 0 !== b && b[m] && !a.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: x
                      }),
                      (0, g.jsxs)(l.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: x,
                        value:
                          (null === a || void 0 === a ? void 0 : a.value) || '',
                        error:
                          !(null === b || void 0 === b || !b[m]) && !a.value,
                        ...a,
                        ...w,
                        children: [
                          y &&
                            (0, g.jsx)(s.Z, {
                              children: (0, g.jsx)(i.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, g.jsx)(c.Z, {
                                    position: 'start',
                                    children: (0, g.jsx)(o.Z, {})
                                  })
                                },
                                value: j,
                                onChange: (e) => y(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === Z || void 0 === Z
                            ? void 0
                            : Z.map((e) =>
                                (0, g.jsx)(
                                  d.Z,
                                  {
                                    value: e.value,
                                    onKeyDown: (e) => e.stopPropagation(),
                                    onClick: () => {
                                      return (
                                        (t = e),
                                        void (
                                          null === k ||
                                          void 0 === k ||
                                          k(t)
                                        )
                                      );
                                      var t;
                                    },
                                    children: e.name
                                  },
                                  e.id
                                )
                              ),
                          f &&
                            (0, g.jsx)(u.Z, {
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '12px',
                              marginBottom: '12px',
                              children: (0, g.jsx)(h.Z, {
                                size: 32,
                                disableShrink: !0,
                                thickness: 3
                              })
                            })
                        ]
                      }),
                      (null === b || void 0 === b ? void 0 : b[m]) &&
                        !a.value &&
                        (0, g.jsx)(p.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === b ||
                            void 0 === b ||
                            null === (t = b[m]) ||
                            void 0 === t
                              ? void 0
                              : t.message
                        })
                    ]
                  });
                }
              })
            : (0, g.jsxs)(r.Z, {
                fullWidth: !0,
                children: [
                  (0, g.jsx)(n.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== b && void 0 !== b && b[m]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: x
                  }),
                  (0, g.jsx)(l.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: x,
                    ...w,
                    error: !(null === b || void 0 === b || !b[m]),
                    children:
                      null === Z || void 0 === Z
                        ? void 0
                        : Z.map((e) =>
                            (0, g.jsx)(
                              d.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === b || void 0 === b || !b[m]) &&
                    (0, g.jsx)(p.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === b ||
                        void 0 === b ||
                        null === (t = b[m]) ||
                        void 0 === t
                          ? void 0
                          : t.message
                    })
                ]
              });
        },
        Z = (0, m.memo)(x),
        f = (e) => {
          let { label: t, name: a, errors: o, register: r, ...n } = e;
          return (0, g.jsx)(i.Z, {
            label: t,
            error: !!o[a],
            helperText: o[a] ? o[a].message : '',
            fullWidth: !0,
            ...r(a),
            ...n
          });
        };
    },
    7891: (e, t, a) => {
      a.d(t, { Z: () => p });
      var o = a(3329),
        r = a(9709),
        n = a(4721),
        l = a(9164),
        s = a(4294),
        i = a(5574),
        c = a(5661),
        d = a(493),
        u = a(4349),
        h = a(184);
      const p = function (e) {
        let {
          title: t,
          children: a,
          open: p,
          isLoading: m = !1,
          onClose: v,
          onOk: g,
          ...x
        } = e;
        return (0, h.jsxs)(i.Z, {
          onClose: v,
          open: p,
          ...x,
          children: [
            t && (0, h.jsx)(c.Z, { variant: 'h4', children: t }),
            t && (0, h.jsx)(n.Z, {}),
            (0, h.jsx)(d.Z, { sx: { pt: 0 }, children: a }),
            (0, h.jsx)(n.Z, {}),
            (0, h.jsxs)(l.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, h.jsx)(s.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: v,
                  children: (0, h.jsx)(u.Z, { id: 'label.cancel' })
                }),
                g &&
                  (0, h.jsx)(r.Z, {
                    onClick: g,
                    loading: m,
                    loadingPosition: 'start',
                    startIcon: (0, h.jsx)(o.Z, {}),
                    variant: 'contained',
                    sx: { width: '90px' },
                    type: 'submit',
                    children: (0, h.jsx)(u.Z, { id: 'label.OK' })
                  })
              ]
            })
          ]
        });
      };
    },
    8418: (e, t, a) => {
      a.d(t, { Z: () => i });
      var o = a(6934),
        r = a(697),
        n = a(9164),
        l = a(184);
      const s = (0, o.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        i = (e) => {
          let { children: t } = e;
          return (0, l.jsx)(s, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(n.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    3481: (e, t, a) => {
      a.d(t, { Z: () => x });
      var o = a(1889),
        r = a(890),
        n = a(697),
        l = a(4294),
        s = a(4696),
        i = a(2791),
        c = a(8333),
        d = a(3517),
        u = a(6871),
        h = a(3504),
        p = a(4349),
        m = a(184);
      const v = (e) => {
          let { links: t = [] } = e;
          const a = (0, u.TH)();
          return (0, m.jsx)(d.Z, {
            separator: (0, m.jsx)(c.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map((e, o) =>
              o === t.length - 1
                ? (0, m.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, m.jsx)(p.Z, { id: e.name })
                    },
                    o
                  )
                : (0, m.jsx)(
                    h.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        a.pathname,
                      onClick:
                        (null === e || void 0 === e ? void 0 : e.onClick) &&
                        e.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, m.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, m.jsx)(p.Z, { id: e.name })
                      })
                    },
                    o
                  )
            )
          });
        },
        g = (e) => {
          let {
            headerTitle: t,
            headerSubtitle: a,
            breadcrumbs: i,
            onOpenModal: c
          } = e;
          return (0, m.jsxs)(o.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, m.jsxs)(o.ZP, {
                item: !0,
                children: [
                  (0, m.jsx)(r.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, m.jsx)(p.Z, { id: t })
                  }),
                  (0, m.jsx)(r.Z, { variant: 'subtitle2', children: a }),
                  i &&
                    (0, m.jsx)(n.Z, {
                      marginTop: '8px',
                      children: (0, m.jsx)(v, { links: i })
                    })
                ]
              }),
              c &&
                (0, m.jsx)(o.ZP, {
                  item: !0,
                  children: (0, m.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, m.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: c,
                    children: (0, m.jsx)(p.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        x = (0, i.memo)(g);
    },
    4772: (e, t, a) => {
      a.d(t, { Z: () => y });
      var o = a(4695),
        r = a(6189),
        n = a(184);
      const l = (0, r.Z)(
          (0, n.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
          }),
          'Delete'
        ),
        s = (0, r.Z)(
          (0, n.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
          'Add'
        );
      var i = a(697),
        c = a(3239),
        d = a(890),
        u = a(4294),
        h = a(2791),
        p = a(1134),
        m = a(4349),
        v = a(7590),
        g = a(7891),
        x = a(7945),
        Z = a(7837),
        f = a(2810),
        b = a(8007);
      const j = b
          .Ry()
          .shape({
            name: b.Z_().required('Name is required!'),
            url: b.Z_().required('Url is required!')
          }),
        y = (e) => {
          let {
            open: t,
            isCreate: a = !0,
            vendorData: r,
            slug: b,
            onClose: y
          } = e;
          const k = { key: '', value: '', keys: (0, f.Z)() },
            { message: w, notify: C } = (0, Z.p)(),
            [S] = (0, x.du)(),
            [R, { isLoading: P }] = (0, x.M)(),
            {
              register: z,
              reset: B,
              handleSubmit: I,
              setValue: M,
              formState: { errors: N }
            } = (0, p.cI)({
              resolver: (0, o.X)(j),
              defaultValues: { name: '', url: '' }
            }),
            [F, T] = (0, h.useState)([k]);
          (0, h.useEffect)(() => {
            if (null !== r && void 0 !== r && r.data && !a)
              if (
                (M('name', null === r || void 0 === r ? void 0 : r.data.name),
                M('url', null === r || void 0 === r ? void 0 : r.data.url),
                null !== (null === r || void 0 === r ? void 0 : r.data.keys) &&
                  (null === r || void 0 === r ? void 0 : r.data.keys.length) >
                    0)
              ) {
                const e =
                  null === r || void 0 === r
                    ? void 0
                    : r.data.keys.map((e) => {
                        var t, a;
                        return {
                          key:
                            null !== (t = Object.keys(e)[0]) && void 0 !== t
                              ? t
                              : '',
                          value:
                            null !== (a = e[Object.keys(e)[0]]) && void 0 !== a
                              ? a
                              : '',
                          keys: (0, f.Z)()
                        };
                      });
                T(e);
              } else T([k]);
            else B(), T([k]);
          }, [r]);
          const O = async (e) => {
              try {
                const t = F.filter((e) => '' !== e.key && '' !== e.value),
                  a =
                    null === t || void 0 === t
                      ? void 0
                      : t.map((e) => ({ [''.concat(e.key)]: e.value })),
                  o = await R({
                    url: e.url,
                    name: e.name,
                    keys: a,
                    id: b
                  }).unwrap();
                if (o)
                  return (
                    T(t),
                    C({
                      message:
                        (null === o || void 0 === o ? void 0 : o.message) ||
                        w.UPDATED
                    })
                  );
              } catch (a) {
                var t;
                return C({
                  message:
                    (null === a ||
                    void 0 === a ||
                    null === (t = a.data) ||
                    void 0 === t
                      ? void 0
                      : t.message) || w.ERROR,
                  type: 'error'
                });
              }
            },
            V = (e, t, a) =>
              T((o) =>
                null === o || void 0 === o
                  ? void 0
                  : o.map((o) =>
                      o.keys === t
                        ? 'key' === e
                          ? { ...o, key: a }
                          : { ...o, value: a }
                        : { ...o }
                    )
              ),
            A = (0, h.useMemo)(
              () =>
                (0, n.jsxs)(i.Z, {
                  width: ''.concat(a ? '100%' : '50%'),
                  padding: a ? 0 : 2,
                  paddingBottom: 0,
                  margin: a ? 0 : 2,
                  position: 'relative',
                  bgcolor: ''.concat(P ? 'rgba(230, 224, 224, 0.25)' : null),
                  children: [
                    P &&
                      (0, n.jsx)(i.Z, {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        sx: { transform: 'translate(-50%, -50%)' },
                        children: (0, n.jsx)(c.Z, {})
                      }),
                    (0, n.jsxs)(i.Z, {
                      component: 'form',
                      id: 'form-users',
                      children: [
                        (0, n.jsx)(v.n, {
                          label: (0, n.jsx)(m.Z, { id: 'label.name' }),
                          name: 'name',
                          sx: { my: 1, mt: 2 },
                          errors: N,
                          register: z
                        }),
                        (0, n.jsx)(v.n, {
                          label: (0, n.jsx)(m.Z, { id: 'label.url' }),
                          name: 'url',
                          errors: N,
                          sx: { my: 1 },
                          register: z
                        }),
                        (0, n.jsx)(d.Z, { mb: 2, children: 'Keys:' }),
                        (0, n.jsx)(i.Z, {
                          flex: 1,
                          children:
                            null === F || void 0 === F
                              ? void 0
                              : F.map((e, t) =>
                                  (0, n.jsxs)(
                                    i.Z,
                                    {
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      gap: 1,
                                      children: [
                                        (0, n.jsx)(
                                          v.n,
                                          {
                                            label: 'Key '.concat(t),
                                            name: 'key-'.concat((0, f.Z)()),
                                            errors: N,
                                            register: z,
                                            sx: { paddingBottom: 1, flex: 1 },
                                            value: e.key,
                                            onChange: (t) =>
                                              V('key', e.keys, t.target.value)
                                          },
                                          'Key-'.concat(e.keys)
                                        ),
                                        (0, n.jsx)(
                                          v.n,
                                          {
                                            label: 'Value '.concat(t),
                                            name: 'value-'.concat((0, f.Z)()),
                                            errors: N,
                                            register: z,
                                            sx: { paddingBottom: 1, flex: 2.5 },
                                            value: e.value,
                                            onChange: (t) =>
                                              V('value', e.keys, t.target.value)
                                          },
                                          'value-'.concat(e.keys)
                                        ),
                                        (0, n.jsx)(u.Z, {
                                          onClick: () =>
                                            ((e, t) =>
                                              T(
                                                0 === t
                                                  ? (e) => [...e, { ...k }]
                                                  : (t) =>
                                                      t.filter(
                                                        (t) => t.key !== e
                                                      )
                                              ))(e.key, t),
                                          sx: { paddingBottom: 1 },
                                          children:
                                            t > 0
                                              ? (0, n.jsx)(l, {})
                                              : (0, n.jsx)(s, {})
                                        })
                                      ]
                                    },
                                    t
                                  )
                                )
                        }),
                        !a &&
                          (0, n.jsx)(i.Z, {
                            width: '100%',
                            textAlign: 'right',
                            children: (0, n.jsx)(u.Z, {
                              variant: 'contained',
                              onClick: I(O),
                              children: 'Update'
                            })
                          })
                      ]
                    })
                  ]
                }),
              [F, N, z, a, P]
            );
          return (
            console.log(F),
            (0, n.jsx)(n.Fragment, {
              children: a
                ? (0, n.jsx)(g.Z, {
                    title: 'Create Vendor',
                    open: t,
                    onClose: y,
                    onOk: I(async (e) => {
                      try {
                        const t =
                            null === F || void 0 === F
                              ? void 0
                              : F.map((e) => ({ [''.concat(e.key)]: e.value })),
                          a = await S({
                            url: e.url,
                            name: e.name,
                            keys: t
                          }).unwrap();
                        if (a)
                          return (
                            T([]),
                            B(),
                            null === y || void 0 === y || y(),
                            C({
                              message:
                                (null === a || void 0 === a
                                  ? void 0
                                  : a.message) || w.CREATED
                            })
                          );
                      } catch (a) {
                        var t;
                        return C({
                          message:
                            (null === a ||
                            void 0 === a ||
                            null === (t = a.data) ||
                            void 0 === t
                              ? void 0
                              : t.message) || w.ERROR,
                          type: 'error'
                        });
                      }
                    }),
                    children: A
                  })
                : (0, n.jsx)(i.Z, { children: A })
            })
          );
        };
    },
    3491: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Z });
      var o = a(697),
        r = a(1889),
        n = a(890),
        l = a(9955),
        s = a(2791),
        i = a(6907),
        c = a(3539),
        d = a(3504),
        u = a(8418),
        h = a(3481),
        p = a(7945),
        m = a(7837),
        v = a(4772),
        g = a(184);
      const x = [
        { link: '/dashboards', name: 'title.dashboard' },
        { name: 'title.vendors.management' }
      ];
      function Z() {
        const { notify: e } = (0, m.p)(),
          { data: t, refetch: a } = (0, p.sj)(
            {},
            { refetchOnMountOrArgChange: !0 }
          ),
          [Z] = (0, p.YI)(),
          [f, b] = (0, s.useState)([]);
        (0, s.useEffect)(() => {
          if (t) {
            const e = t.data.filter((e) => !0 === e.canSee);
            b(e);
          }
        }, [t]);
        const j = (0, c.Z)(),
          { visible: y, toggle: k } = (0, m.d)();
        return (0, g.jsxs)(o.Z, {
          children: [
            (0, g.jsx)(i.ql, {
              children: (0, g.jsx)('title', {
                children: j.formatMessage({ id: 'label.vendors' })
              })
            }),
            (0, g.jsx)(u.Z, {
              children: (0, g.jsx)(h.Z, {
                headerTitle: 'label.vendors',
                headerSubtitle: '',
                onOpenModal: () => {
                  k();
                },
                breadcrumbs: x
              })
            }),
            (0, g.jsx)(r.ZP, {
              container: !0,
              columns: { xs: 8, sm: 12, md: 16, lg: 20 },
              padding: 4,
              children:
                null === f || void 0 === f
                  ? void 0
                  : f.map((t, s) =>
                      (0, g.jsx)(
                        r.ZP,
                        {
                          item: !0,
                          xs: 4,
                          sm: 4,
                          md: 4,
                          lg: 4,
                          height: '300px',
                          marginY: 1,
                          padding: 1,
                          children: (0, g.jsx)(o.Z, {
                            children: (0, g.jsxs)('div', {
                              className: 'card',
                              children: [
                                (0, g.jsx)('div', {
                                  className: 'wrapper',
                                  children: (0, g.jsx)('img', {
                                    src: '../../../grey.jpg',
                                    className: 'cover-image'
                                  })
                                }),
                                (0, g.jsx)(n.Z, {
                                  className: 'character',
                                  children: t.name
                                }),
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.canSee) &&
                                  (0, g.jsxs)(o.Z, {
                                    className: 'switch',
                                    children: [
                                      (0, g.jsx)(n.Z, {
                                        color: '#fff',
                                        children: 'Direct Url'
                                      }),
                                      (0, g.jsx)(l.Z, {
                                        checked: !!t.directUrl,
                                        onClick: () =>
                                          (async (t) => {
                                            try {
                                              const o = await Z({
                                                id: t.agentVendorId
                                              }).unwrap();
                                              b((e) =>
                                                e.map((e) =>
                                                  (null === e || void 0 === e
                                                    ? void 0
                                                    : e.id) === t.id
                                                    ? {
                                                        ...e,
                                                        agents: [
                                                          {
                                                            ...e,
                                                            directUrl:
                                                              o.data.directUrl
                                                          }
                                                        ]
                                                      }
                                                    : { ...e }
                                                )
                                              ),
                                                a(),
                                                e({ message: o.message });
                                            } catch (o) {
                                              e({
                                                message: o.data.message,
                                                type: 'error'
                                              });
                                            }
                                          })(t),
                                        color: 'success'
                                      })
                                    ]
                                  }),
                                (0, g.jsx)(n.Z, {
                                  className: 'title',
                                  children: t.name
                                }),
                                (0, g.jsx)(o.Z, {
                                  children: (0, g.jsx)(o.Z, {
                                    paddingBottom: '10px',
                                    className: 'container',
                                    children: (0, g.jsx)(d.rU, {
                                      className: 'button-detail',
                                      to: ''
                                        .concat(t.id, '?name=')
                                        .concat(t.name),
                                      children: 'View Detail'
                                    })
                                  })
                                })
                              ]
                            })
                          })
                        },
                        ''.concat(t.img, '-').concat(s)
                      )
                    )
            }),
            (0, g.jsx)(v.Z, { open: y, onClose: k })
          ]
        });
      }
    },
    4696: (e, t, a) => {
      var o = a(4836);
      t.Z = void 0;
      var r = o(a(5649)),
        n = a(184),
        l = (0, r.default)(
          (0, n.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
          'AddTwoTone'
        );
      t.Z = l;
    },
    8333: (e, t, a) => {
      var o = a(4836);
      t.Z = void 0;
      var r = o(a(5649)),
        n = a(184),
        l = (0, r.default)(
          (0, n.jsx)('path', {
            d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
          }),
          'NavigateNext'
        );
      t.Z = l;
    },
    3329: (e, t, a) => {
      var o = a(4836);
      t.Z = void 0;
      var r = o(a(5649)),
        n = a(184),
        l = (0, r.default)(
          (0, n.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      t.Z = l;
    },
    5403: (e, t, a) => {
      var o = a(4836);
      t.Z = void 0;
      var r = o(a(5649)),
        n = a(184),
        l = (0, r.default)(
          (0, n.jsx)('path', {
            d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
          }),
          'Search'
        );
      t.Z = l;
    },
    3517: (e, t, a) => {
      a.d(t, { Z: () => B });
      var o = a(7462),
        r = a(3366),
        n = a(2791),
        l = (a(8457), a(9278)),
        s = a(4419),
        i = a(995),
        c = a(6934),
        d = a(1402),
        u = a(890),
        h = a(2065),
        p = a(6189),
        m = a(184);
      const v = (0, p.Z)(
        (0, m.jsx)('path', {
          d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
        }),
        'MoreHoriz'
      );
      var g = a(7479);
      const x = ['slots', 'slotProps'],
        Z = (0, c.ZP)(g.Z)((e) => {
          let { theme: t } = e;
          return (0, o.Z)(
            {
              display: 'flex',
              marginLeft: 'calc('.concat(t.spacing(1), ' * 0.5)'),
              marginRight: 'calc('.concat(t.spacing(1), ' * 0.5)')
            },
            'light' === t.palette.mode
              ? {
                  backgroundColor: t.palette.grey[100],
                  color: t.palette.grey[700]
                }
              : {
                  backgroundColor: t.palette.grey[700],
                  color: t.palette.grey[100]
                },
            {
              borderRadius: 2,
              '&:hover, &:focus': (0, o.Z)(
                {},
                'light' === t.palette.mode
                  ? { backgroundColor: t.palette.grey[200] }
                  : { backgroundColor: t.palette.grey[600] }
              ),
              '&:active': (0, o.Z)(
                { boxShadow: t.shadows[0] },
                'light' === t.palette.mode
                  ? { backgroundColor: (0, h._4)(t.palette.grey[200], 0.12) }
                  : { backgroundColor: (0, h._4)(t.palette.grey[600], 0.12) }
              )
            }
          );
        }),
        f = (0, c.ZP)(v)({ width: 24, height: 16 });
      const b = function (e) {
        const { slots: t = {}, slotProps: a = {} } = e,
          n = (0, r.Z)(e, x),
          l = e;
        return (0, m.jsx)('li', {
          children: (0, m.jsx)(
            Z,
            (0, o.Z)({ focusRipple: !0 }, n, {
              ownerState: l,
              children: (0, m.jsx)(
                f,
                (0, o.Z)(
                  { as: t.CollapsedIcon, ownerState: l },
                  a.collapsedIcon
                )
              )
            })
          )
        });
      };
      var j = a(5878),
        y = a(1217);
      function k(e) {
        return (0, y.Z)('MuiBreadcrumbs', e);
      }
      const w = (0, j.Z)('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']),
        C = [
          'children',
          'className',
          'component',
          'slots',
          'slotProps',
          'expandText',
          'itemsAfterCollapse',
          'itemsBeforeCollapse',
          'maxItems',
          'separator'
        ],
        S = (0, c.ZP)(u.Z, {
          name: 'MuiBreadcrumbs',
          slot: 'Root',
          overridesResolver: (e, t) => [{ ['& .'.concat(w.li)]: t.li }, t.root]
        })({}),
        R = (0, c.ZP)('ol', {
          name: 'MuiBreadcrumbs',
          slot: 'Ol',
          overridesResolver: (e, t) => t.ol
        })({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: 0,
          margin: 0,
          listStyle: 'none'
        }),
        P = (0, c.ZP)('li', {
          name: 'MuiBreadcrumbs',
          slot: 'Separator',
          overridesResolver: (e, t) => t.separator
        })({
          display: 'flex',
          userSelect: 'none',
          marginLeft: 8,
          marginRight: 8
        });
      function z(e, t, a, o) {
        return e.reduce(
          (r, n, l) => (
            l < e.length - 1
              ? (r = r.concat(
                  n,
                  (0, m.jsx)(
                    P,
                    {
                      'aria-hidden': !0,
                      className: t,
                      ownerState: o,
                      children: a
                    },
                    'separator-'.concat(l)
                  )
                ))
              : r.push(n),
            r
          ),
          []
        );
      }
      const B = n.forwardRef(function (e, t) {
        const a = (0, d.Z)({ props: e, name: 'MuiBreadcrumbs' }),
          {
            children: c,
            className: u,
            component: h = 'nav',
            slots: p = {},
            slotProps: v = {},
            expandText: g = 'Show path',
            itemsAfterCollapse: x = 1,
            itemsBeforeCollapse: Z = 1,
            maxItems: f = 8,
            separator: j = '/'
          } = a,
          y = (0, r.Z)(a, C),
          [w, P] = n.useState(!1),
          B = (0, o.Z)({}, a, {
            component: h,
            expanded: w,
            expandText: g,
            itemsAfterCollapse: x,
            itemsBeforeCollapse: Z,
            maxItems: f,
            separator: j
          }),
          I = ((e) => {
            const { classes: t } = e;
            return (0, s.Z)(
              {
                root: ['root'],
                li: ['li'],
                ol: ['ol'],
                separator: ['separator']
              },
              k,
              t
            );
          })(B),
          M = (0, i.y)({
            elementType: p.CollapsedIcon,
            externalSlotProps: v.collapsedIcon,
            ownerState: B
          }),
          N = n.useRef(null),
          F = n.Children.toArray(c)
            .filter((e) => n.isValidElement(e))
            .map((e, t) =>
              (0, m.jsx)(
                'li',
                { className: I.li, children: e },
                'child-'.concat(t)
              )
            );
        return (0, m.jsx)(
          S,
          (0, o.Z)(
            {
              ref: t,
              component: h,
              color: 'text.secondary',
              className: (0, l.Z)(I.root, u),
              ownerState: B
            },
            y,
            {
              children: (0, m.jsx)(R, {
                className: I.ol,
                ref: N,
                ownerState: B,
                children: z(
                  w || (f && F.length <= f)
                    ? F
                    : ((e) =>
                        Z + x >= e.length
                          ? e
                          : [
                              ...e.slice(0, Z),
                              (0, m.jsx)(
                                b,
                                {
                                  'aria-label': g,
                                  slots: { CollapsedIcon: p.CollapsedIcon },
                                  slotProps: { collapsedIcon: M },
                                  onClick: () => {
                                    P(!0);
                                    const e = N.current.querySelector(
                                      'a[href],button,[tabindex]'
                                    );
                                    e && e.focus();
                                  }
                                },
                                'ellipsis'
                              ),
                              ...e.slice(e.length - x, e.length)
                            ])(F),
                  I.separator,
                  j,
                  B
                )
              })
            }
          )
        );
      });
    },
    9955: (e, t, a) => {
      a.d(t, { Z: () => k });
      var o = a(3366),
        r = a(7462),
        n = a(2791),
        l = a(9278),
        s = a(4419),
        i = a(2065),
        c = a(4036),
        d = a(7278),
        u = a(1402),
        h = a(6934),
        p = a(5878),
        m = a(1217);
      function v(e) {
        return (0, m.Z)('MuiSwitch', e);
      }
      const g = (0, p.Z)('MuiSwitch', [
        'root',
        'edgeStart',
        'edgeEnd',
        'switchBase',
        'colorPrimary',
        'colorSecondary',
        'sizeSmall',
        'sizeMedium',
        'checked',
        'disabled',
        'input',
        'thumb',
        'track'
      ]);
      var x = a(184);
      const Z = ['className', 'color', 'edge', 'size', 'sx'],
        f = (0, h.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.root,
              a.edge && t['edge'.concat((0, c.Z)(a.edge))],
              t['size'.concat((0, c.Z)(a.size))]
            ];
          }
        })((e) => {
          let { ownerState: t } = e;
          return (0, r.Z)(
            {
              display: 'inline-flex',
              width: 58,
              height: 38,
              overflow: 'hidden',
              padding: 12,
              boxSizing: 'border-box',
              position: 'relative',
              flexShrink: 0,
              zIndex: 0,
              verticalAlign: 'middle',
              '@media print': { colorAdjust: 'exact' }
            },
            'start' === t.edge && { marginLeft: -8 },
            'end' === t.edge && { marginRight: -8 },
            'small' === t.size && {
              width: 40,
              height: 24,
              padding: 7,
              ['& .'.concat(g.thumb)]: { width: 16, height: 16 },
              ['& .'.concat(g.switchBase)]: {
                padding: 4,
                ['&.'.concat(g.checked)]: { transform: 'translateX(16px)' }
              }
            }
          );
        }),
        b = (0, h.ZP)(d.Z, {
          name: 'MuiSwitch',
          slot: 'SwitchBase',
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.switchBase,
              { ['& .'.concat(g.input)]: t.input },
              'default' !== a.color && t['color'.concat((0, c.Z)(a.color))]
            ];
          }
        })(
          (e) => {
            let { theme: t } = e;
            return {
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              color: t.vars
                ? t.vars.palette.Switch.defaultColor
                : ''.concat(
                    'light' === t.palette.mode
                      ? t.palette.common.white
                      : t.palette.grey[300]
                  ),
              transition: t.transitions.create(['left', 'transform'], {
                duration: t.transitions.duration.shortest
              }),
              ['&.'.concat(g.checked)]: { transform: 'translateX(20px)' },
              ['&.'.concat(g.disabled)]: {
                color: t.vars
                  ? t.vars.palette.Switch.defaultDisabledColor
                  : ''.concat(
                      'light' === t.palette.mode
                        ? t.palette.grey[100]
                        : t.palette.grey[600]
                    )
              },
              ['&.'.concat(g.checked, ' + .').concat(g.track)]: {
                opacity: 0.5
              },
              ['&.'.concat(g.disabled, ' + .').concat(g.track)]: {
                opacity: t.vars
                  ? t.vars.opacity.switchTrackDisabled
                  : ''.concat('light' === t.palette.mode ? 0.12 : 0.2)
              },
              ['& .'.concat(g.input)]: { left: '-100%', width: '300%' }
            };
          },
          (e) => {
            let { theme: t, ownerState: a } = e;
            return (0, r.Z)(
              {
                '&:hover': {
                  backgroundColor: t.vars
                    ? 'rgba('
                        .concat(t.vars.palette.action.activeChannel, ' / ')
                        .concat(t.vars.palette.action.hoverOpacity, ')')
                    : (0, i.Fq)(
                        t.palette.action.active,
                        t.palette.action.hoverOpacity
                      ),
                  '@media (hover: none)': { backgroundColor: 'transparent' }
                }
              },
              'default' !== a.color && {
                ['&.'.concat(g.checked)]: {
                  color: (t.vars || t).palette[a.color].main,
                  '&:hover': {
                    backgroundColor: t.vars
                      ? 'rgba('
                          .concat(t.vars.palette[a.color].mainChannel, ' / ')
                          .concat(t.vars.palette.action.hoverOpacity, ')')
                      : (0, i.Fq)(
                          t.palette[a.color].main,
                          t.palette.action.hoverOpacity
                        ),
                    '@media (hover: none)': { backgroundColor: 'transparent' }
                  },
                  ['&.'.concat(g.disabled)]: {
                    color: t.vars
                      ? t.vars.palette.Switch[
                          ''.concat(a.color, 'DisabledColor')
                        ]
                      : ''.concat(
                          'light' === t.palette.mode
                            ? (0, i.$n)(t.palette[a.color].main, 0.62)
                            : (0, i._j)(t.palette[a.color].main, 0.55)
                        )
                  }
                },
                ['&.'.concat(g.checked, ' + .').concat(g.track)]: {
                  backgroundColor: (t.vars || t).palette[a.color].main
                }
              }
            );
          }
        ),
        j = (0, h.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Track',
          overridesResolver: (e, t) => t.track
        })((e) => {
          let { theme: t } = e;
          return {
            height: '100%',
            width: '100%',
            borderRadius: 7,
            zIndex: -1,
            transition: t.transitions.create(['opacity', 'background-color'], {
              duration: t.transitions.duration.shortest
            }),
            backgroundColor: t.vars
              ? t.vars.palette.common.onBackground
              : ''.concat(
                  'light' === t.palette.mode
                    ? t.palette.common.black
                    : t.palette.common.white
                ),
            opacity: t.vars
              ? t.vars.opacity.switchTrack
              : ''.concat('light' === t.palette.mode ? 0.38 : 0.3)
          };
        }),
        y = (0, h.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Thumb',
          overridesResolver: (e, t) => t.thumb
        })((e) => {
          let { theme: t } = e;
          return {
            boxShadow: (t.vars || t).shadows[1],
            backgroundColor: 'currentColor',
            width: 20,
            height: 20,
            borderRadius: '50%'
          };
        }),
        k = n.forwardRef(function (e, t) {
          const a = (0, u.Z)({ props: e, name: 'MuiSwitch' }),
            {
              className: n,
              color: i = 'primary',
              edge: d = !1,
              size: h = 'medium',
              sx: p
            } = a,
            m = (0, o.Z)(a, Z),
            g = (0, r.Z)({}, a, { color: i, edge: d, size: h }),
            k = ((e) => {
              const {
                  classes: t,
                  edge: a,
                  size: o,
                  color: n,
                  checked: l,
                  disabled: i
                } = e,
                d = {
                  root: [
                    'root',
                    a && 'edge'.concat((0, c.Z)(a)),
                    'size'.concat((0, c.Z)(o))
                  ],
                  switchBase: [
                    'switchBase',
                    'color'.concat((0, c.Z)(n)),
                    l && 'checked',
                    i && 'disabled'
                  ],
                  thumb: ['thumb'],
                  track: ['track'],
                  input: ['input']
                },
                u = (0, s.Z)(d, v, t);
              return (0, r.Z)({}, t, u);
            })(g),
            w = (0, x.jsx)(y, { className: k.thumb, ownerState: g });
          return (0,
          x.jsxs)(f, { className: (0, l.Z)(k.root, n), sx: p, ownerState: g, children: [(0, x.jsx)(b, (0, r.Z)({ type: 'checkbox', icon: w, checkedIcon: w, ref: t, ownerState: g }, m, { classes: (0, r.Z)({}, k, { root: k.switchBase }) })), (0, x.jsx)(j, { className: k.track, ownerState: g })] });
        });
    },
    7278: (e, t, a) => {
      a.d(t, { Z: () => b });
      var o = a(3366),
        r = a(7462),
        n = a(2791),
        l = a(9278),
        s = a(4419),
        i = a(4036),
        c = a(6934),
        d = a(8278),
        u = a(2930),
        h = a(7479),
        p = a(5878),
        m = a(1217);
      function v(e) {
        return (0, m.Z)('PrivateSwitchBase', e);
      }
      (0, p.Z)('PrivateSwitchBase', [
        'root',
        'checked',
        'disabled',
        'input',
        'edgeStart',
        'edgeEnd'
      ]);
      var g = a(184);
      const x = [
          'autoFocus',
          'checked',
          'checkedIcon',
          'className',
          'defaultChecked',
          'disabled',
          'disableFocusRipple',
          'edge',
          'icon',
          'id',
          'inputProps',
          'inputRef',
          'name',
          'onBlur',
          'onChange',
          'onFocus',
          'readOnly',
          'required',
          'tabIndex',
          'type',
          'value'
        ],
        Z = (0, c.ZP)(h.Z)((e) => {
          let { ownerState: t } = e;
          return (0, r.Z)(
            { padding: 9, borderRadius: '50%' },
            'start' === t.edge && { marginLeft: 'small' === t.size ? -3 : -12 },
            'end' === t.edge && { marginRight: 'small' === t.size ? -3 : -12 }
          );
        }),
        f = (0, c.ZP)('input', { shouldForwardProp: c.FO })({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1
        }),
        b = n.forwardRef(function (e, t) {
          const {
              autoFocus: a,
              checked: n,
              checkedIcon: c,
              className: h,
              defaultChecked: p,
              disabled: m,
              disableFocusRipple: b = !1,
              edge: j = !1,
              icon: y,
              id: k,
              inputProps: w,
              inputRef: C,
              name: S,
              onBlur: R,
              onChange: P,
              onFocus: z,
              readOnly: B,
              required: I = !1,
              tabIndex: M,
              type: N,
              value: F
            } = e,
            T = (0, o.Z)(e, x),
            [O, V] = (0, d.Z)({
              controlled: n,
              default: Boolean(p),
              name: 'SwitchBase',
              state: 'checked'
            }),
            A = (0, u.Z)();
          let D = m;
          A && 'undefined' === typeof D && (D = A.disabled);
          const E = 'checkbox' === N || 'radio' === N,
            U = (0, r.Z)({}, e, {
              checked: O,
              disabled: D,
              disableFocusRipple: b,
              edge: j
            }),
            q = ((e) => {
              const { classes: t, checked: a, disabled: o, edge: r } = e,
                n = {
                  root: [
                    'root',
                    a && 'checked',
                    o && 'disabled',
                    r && 'edge'.concat((0, i.Z)(r))
                  ],
                  input: ['input']
                };
              return (0, s.Z)(n, v, t);
            })(U);
          return (0, g.jsxs)(
            Z,
            (0, r.Z)(
              {
                component: 'span',
                className: (0, l.Z)(q.root, h),
                centerRipple: !0,
                focusRipple: !b,
                disabled: D,
                tabIndex: null,
                role: void 0,
                onFocus: (e) => {
                  z && z(e), A && A.onFocus && A.onFocus(e);
                },
                onBlur: (e) => {
                  R && R(e), A && A.onBlur && A.onBlur(e);
                },
                ownerState: U,
                ref: t
              },
              T,
              {
                children: [
                  (0, g.jsx)(
                    f,
                    (0, r.Z)(
                      {
                        autoFocus: a,
                        checked: n,
                        defaultChecked: p,
                        className: q.input,
                        disabled: D,
                        id: E ? k : void 0,
                        name: S,
                        onChange: (e) => {
                          if (e.nativeEvent.defaultPrevented) return;
                          const t = e.target.checked;
                          V(t), P && P(e, t);
                        },
                        readOnly: B,
                        ref: C,
                        required: I,
                        ownerState: U,
                        tabIndex: M,
                        type: N
                      },
                      'checkbox' === N && void 0 === F ? {} : { value: F },
                      w
                    )
                  ),
                  O ? c : y
                ]
              }
            )
          );
        });
    },
    2810: (e, t, a) => {
      var o;
      a.d(t, { Z: () => u });
      var r = new Uint8Array(16);
      function n() {
        if (
          !o &&
          !(o =
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
        return o(r);
      }
      const l =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const s = function (e) {
        return 'string' === typeof e && l.test(e);
      };
      for (var i = [], c = 0; c < 256; ++c)
        i.push((c + 256).toString(16).substr(1));
      const d = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = (
            i[e[t + 0]] +
            i[e[t + 1]] +
            i[e[t + 2]] +
            i[e[t + 3]] +
            '-' +
            i[e[t + 4]] +
            i[e[t + 5]] +
            '-' +
            i[e[t + 6]] +
            i[e[t + 7]] +
            '-' +
            i[e[t + 8]] +
            i[e[t + 9]] +
            '-' +
            i[e[t + 10]] +
            i[e[t + 11]] +
            i[e[t + 12]] +
            i[e[t + 13]] +
            i[e[t + 14]] +
            i[e[t + 15]]
          ).toLowerCase();
        if (!s(a)) throw TypeError('Stringified UUID is invalid');
        return a;
      };
      const u = function (e, t, a) {
        var o = (e = e || {}).random || (e.rng || n)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          a = a || 0;
          for (var r = 0; r < 16; ++r) t[a + r] = o[r];
          return t;
        }
        return d(o);
      };
    }
  }
]);
//# sourceMappingURL=491.aaa91276.chunk.js.map
