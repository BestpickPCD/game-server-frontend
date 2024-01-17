'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [734],
  {
    173: (e, t, n) => {
      n.d(t, { Z: () => c });
      var i = n(6934),
        r = n(9164),
        a = n(697),
        l = n(890),
        s = n(4349),
        o = n(184);
      const d = (0, i.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n        margin-top: '.concat(t.spacing(4), ';\n');
        }),
        c = () =>
          (0, o.jsx)(d, {
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
    },
    7590: (e, t, n) => {
      n.d(t, { P: () => Z, n: () => j });
      var i = n(5403),
        r = n(8096),
        a = n(4925),
        l = n(9321),
        s = n(9834),
        o = n(8550),
        d = n(3466),
        c = n(3786),
        u = n(697),
        h = n(3239),
        p = n(7071),
        x = n(2791),
        m = n(1134),
        v = n(184);
      const g = (e) => {
          var t;
          let {
            control: n,
            name: x,
            label: g,
            options: Z,
            isFetching: j,
            errors: f,
            searchTerm: b,
            onSearch: y,
            setSelected: w,
            ...C
          } = e;
          return n
            ? (0, v.jsx)(m.Qr, {
                control: n,
                name: x,
                render: (e) => {
                  var t;
                  let { field: n } = e;
                  return (0, v.jsxs)(r.Z, {
                    fullWidth: !0,
                    children: [
                      (0, v.jsx)(a.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== f && void 0 !== f && f[x] && !n.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: g
                      }),
                      (0, v.jsxs)(l.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: g,
                        value:
                          (null === n || void 0 === n ? void 0 : n.value) || '',
                        error:
                          !(null === f || void 0 === f || !f[x]) && !n.value,
                        ...n,
                        ...C,
                        children: [
                          y &&
                            (0, v.jsx)(s.Z, {
                              children: (0, v.jsx)(o.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, v.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, v.jsx)(i.Z, {})
                                  })
                                },
                                value: b,
                                onChange: (e) => y(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === Z || void 0 === Z
                            ? void 0
                            : Z.map((e) =>
                                (0, v.jsx)(
                                  c.Z,
                                  {
                                    value: e.value,
                                    onKeyDown: (e) => e.stopPropagation(),
                                    onClick: () => {
                                      return (
                                        (t = e),
                                        void (
                                          null === w ||
                                          void 0 === w ||
                                          w(t)
                                        )
                                      );
                                      var t;
                                    },
                                    children: e.name
                                  },
                                  e.id
                                )
                              ),
                          j &&
                            (0, v.jsx)(u.Z, {
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '12px',
                              marginBottom: '12px',
                              children: (0, v.jsx)(h.Z, {
                                size: 32,
                                disableShrink: !0,
                                thickness: 3
                              })
                            })
                        ]
                      }),
                      (null === f || void 0 === f ? void 0 : f[x]) &&
                        !n.value &&
                        (0, v.jsx)(p.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === f ||
                            void 0 === f ||
                            null === (t = f[x]) ||
                            void 0 === t
                              ? void 0
                              : t.message
                        })
                    ]
                  });
                }
              })
            : (0, v.jsxs)(r.Z, {
                fullWidth: !0,
                children: [
                  (0, v.jsx)(a.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== f && void 0 !== f && f[x]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: g
                  }),
                  (0, v.jsx)(l.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: g,
                    ...C,
                    error: !(null === f || void 0 === f || !f[x]),
                    children:
                      null === Z || void 0 === Z
                        ? void 0
                        : Z.map((e) =>
                            (0, v.jsx)(
                              c.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === f || void 0 === f || !f[x]) &&
                    (0, v.jsx)(p.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === f ||
                        void 0 === f ||
                        null === (t = f[x]) ||
                        void 0 === t
                          ? void 0
                          : t.message
                    })
                ]
              });
        },
        Z = (0, x.memo)(g),
        j = (e) => {
          let { label: t, name: n, errors: i, register: r, ...a } = e;
          return (0, v.jsx)(o.Z, {
            label: t,
            error: !!i[n],
            helperText: i[n] ? i[n].message : '',
            fullWidth: !0,
            ...r(n),
            ...a
          });
        };
    },
    7891: (e, t, n) => {
      n.d(t, { Z: () => p });
      var i = n(3329),
        r = n(9709),
        a = n(4721),
        l = n(9164),
        s = n(4294),
        o = n(5574),
        d = n(5661),
        c = n(493),
        u = n(4349),
        h = n(184);
      const p = function (e) {
        let {
          title: t,
          children: n,
          open: p,
          isLoading: x = !1,
          onClose: m,
          onOk: v,
          ...g
        } = e;
        return (0, h.jsxs)(o.Z, {
          onClose: m,
          open: p,
          ...g,
          children: [
            t && (0, h.jsx)(d.Z, { variant: 'h4', children: t }),
            t && (0, h.jsx)(a.Z, {}),
            (0, h.jsx)(c.Z, { sx: { pt: 0 }, children: n }),
            (0, h.jsx)(a.Z, {}),
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
                  onClick: m,
                  children: (0, h.jsx)(u.Z, { id: 'label.cancel' })
                }),
                v &&
                  (0, h.jsx)(r.Z, {
                    onClick: v,
                    loading: x,
                    loadingPosition: 'start',
                    startIcon: (0, h.jsx)(i.Z, {}),
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
    8418: (e, t, n) => {
      n.d(t, { Z: () => o });
      var i = n(6934),
        r = n(697),
        a = n(9164),
        l = n(184);
      const s = (0, i.ZP)(r.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        o = (e) => {
          let { children: t } = e;
          return (0, l.jsx)(s, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(a.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    3481: (e, t, n) => {
      n.d(t, { Z: () => g });
      var i = n(1889),
        r = n(890),
        a = n(697),
        l = n(4294),
        s = n(4696),
        o = n(2791),
        d = n(8333),
        c = n(3517),
        u = n(6871),
        h = n(3504),
        p = n(4349),
        x = n(184);
      const m = (e) => {
          let { links: t = [] } = e;
          const n = (0, u.TH)();
          return (0, x.jsx)(c.Z, {
            separator: (0, x.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map((e, i) =>
              i === t.length - 1
                ? (0, x.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(p.Z, { id: e.name })
                    },
                    i
                  )
                : (0, x.jsx)(
                    h.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        n.pathname,
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
                    i
                  )
            )
          });
        },
        v = (e) => {
          let {
            headerTitle: t,
            headerSubtitle: n,
            breadcrumbs: o,
            onOpenModal: d
          } = e;
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
                    children: (0, x.jsx)(p.Z, { id: t })
                  }),
                  (0, x.jsx)(r.Z, { variant: 'subtitle2', children: n }),
                  o &&
                    (0, x.jsx)(a.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(m, { links: o })
                    })
                ]
              }),
              d &&
                (0, x.jsx)(i.ZP, {
                  item: !0,
                  children: (0, x.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, x.jsx)(p.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        g = (0, o.memo)(v);
    },
    6790: (e, t, n) => {
      n.d(t, { Z: () => ee });
      var i = n(9164),
        r = n(1889),
        a = n(2791),
        l = n(6907),
        s = n(3539),
        o = n(173),
        d = n(8418),
        c = n(3481),
        u = n(168),
        h = n(8036),
        p = n(1675),
        x = n(5403),
        m = n(1686),
        v = n(9709),
        g = n(6934),
        Z = n(3967),
        j = n(7639),
        f = n(890),
        b = n(4294),
        y = n(3400),
        w = n(7621),
        C = n(697),
        k = n(4721),
        D = n(8550),
        P = n(9281),
        T = n(9836),
        S = n(1048),
        N = n(5855),
        I = n(3994),
        O = n(4454),
        B = n(720),
        F = n(3382),
        z = n(3239),
        U = n(3033),
        M = n(7837),
        L = n(1715),
        E = n(493),
        H = n(5021),
        A = n(9900),
        R = n(4934),
        W = n(184);
      const Y = (0, g.ZP)(b.Z)((e) => {
          let { theme: t } = e;
          return '\n     background: '
            .concat(t.colors.error.main, ';\n     color: ')
            .concat(
              t.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(t.colors.error.dark, ';\n     }\n    ');
        }),
        $ = () => {
          const { toggle: e, visible: t } = (0, M.d)(),
            n = (0, a.useRef)(null);
          return (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsxs)(C.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, W.jsxs)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, W.jsx)(f.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, W.jsx)(Y, {
                        sx: { ml: 1 },
                        startIcon: (0, W.jsx)(h.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, W.jsx)(y.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: n,
                    sx: { ml: 2, p: 1 },
                    children: (0, W.jsx)(R.Z, {})
                  })
                ]
              }),
              (0, W.jsx)(L.Z, {
                keepMounted: !0,
                anchorEl: n.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, W.jsxs)(E.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, W.jsx)(H.ZP, {
                      button: !0,
                      children: (0, W.jsx)(A.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, W.jsx)(H.ZP, {
                      button: !0,
                      children: (0, W.jsx)(A.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
      var V,
        _ = n(2810),
        q = n(4732),
        K = n(4349);
      const Q = (0, g.ZP)(v.Z)(
          V ||
            (V = (0, u.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        X = (e) => {
          let {
            data: t,
            tableHeader: n,
            isLoading: r,
            pagination: l,
            totalItems: s = 0,
            tableFilter: o,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: u,
            onDelete: v,
            onUpdate: g,
            onPagination: L
          } = e;
          const E = (0, Z.Z)(),
            { visible: H, show: A, hide: R } = (0, M.d)(),
            [Y, V] = (0, a.useState)(''),
            [X, G] = (0, a.useState)([]),
            [J, ee] = (0, a.useState)(''),
            te = (0, q.Z)(J, 500);
          (0, a.useEffect)(() => {
            L({ ...l, search: te });
          }, [te]);
          const ne = X.length > 0 && X.length < t.length,
            ie = X.length === t.length,
            re = (e) => {
              A(), V(e);
            },
            ae = (e) => {
              v(e), R();
            },
            le = (0, a.useMemo)(
              () => (v || g || '' !== n[n.length - 1].name || n.pop(), n),
              [v, g, n]
            ),
            se = (e) => {
              let {
                item: t,
                hide: n,
                onDelete: r,
                handleShow: a,
                rowId: l,
                visible: s,
                theme: o,
                isLoading: d
              } = e;
              return (0, W.jsx)(j.Z, {
                title: (0, W.jsxs)(i.Z, {
                  children: [
                    (0, W.jsx)(f.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, W.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, W.jsx)(b.Z, {
                          variant: 'outlined',
                          onClick: n,
                          children: 'No'
                        }),
                        (0, W.jsx)(Q, {
                          onClick: () => ae(t.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, W.jsx)(m.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: t.id === l && s && !d,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, W.jsx)(y.Z, {
                  sx: {
                    '&:hover': { background: o.colors.error.lighter },
                    color: o.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => a(t.id),
                  children: (0, W.jsx)(h.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, W.jsxs)(w.Z, {
            children: [
              c &&
                (null === X || void 0 === X ? void 0 : X.length) > 0 &&
                (0, W.jsx)(C.Z, { flex: 1, p: 2, children: (0, W.jsx)($, {}) }),
              (0, W.jsx)(k.Z, {}),
              (0, W.jsxs)(w.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, W.jsxs)(C.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, W.jsx)(D.Z, {
                        label: (0, W.jsx)(K.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, W.jsx)(y.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, W.jsx)(x.Z, {})
                      })
                    ]
                  }),
                  (0, W.jsx)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map((e, t) => (0, W.jsx)(C.Z, { children: e }, t))
                  })
                ]
              }),
              (0, W.jsx)(P.Z, {
                children: (0, W.jsxs)(T.Z, {
                  children: [
                    (0, W.jsx)(S.Z, {
                      children: (0, W.jsxs)(N.Z, {
                        children: [
                          c &&
                            (0, W.jsx)(I.Z, {
                              padding: 'checkbox',
                              children: (0, W.jsx)(O.Z, {
                                color: 'primary',
                                checked: ie,
                                indeterminate: ne,
                                onChange: (e) => {
                                  G(e.target.checked ? t.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, t) =>
                            (0, W.jsx)(
                              I.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, W.jsx)(B.Z, {
                                      active: l.sortBy === t,
                                      direction:
                                        l.sortBy === t
                                          ? l.sortDirection
                                          : 'asc',
                                      onClick: () =>
                                        ((e) => {
                                          const t = {
                                            ...l,
                                            sortBy: e,
                                            sortDirection:
                                              l.sortBy === e &&
                                              'asc' === l.sortDirection
                                                ? 'desc'
                                                : 'asc'
                                          };
                                          L(t);
                                        })(t),
                                      children: (0, W.jsx)(K.Z, { id: e.title })
                                    })
                                  : (0, W.jsx)(K.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, _.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, W.jsxs)(F.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !t || t.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        t.map((e) => {
                          var t;
                          const n = X.includes(e.id);
                          return (0, W.jsxs)(
                            N.Z,
                            {
                              hover: !0,
                              selected: n,
                              children: [
                                c &&
                                  (0, W.jsx)(
                                    I.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, W.jsx)(O.Z, {
                                        color: 'primary',
                                        checked: n,
                                        onChange: (t) => {
                                          return (
                                            (n = e.id),
                                            void (X.includes(n)
                                              ? G((e) =>
                                                  e.filter((e) => e !== n)
                                                )
                                              : G((e) => [...e, n]))
                                          );
                                          var n;
                                        },
                                        value: n
                                      })
                                    },
                                    (0, _.Z)()
                                  ),
                                null === (t = u(e)) || void 0 === t
                                  ? void 0
                                  : t.map((e) =>
                                      (0, W.jsx)(
                                        I.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, _.Z)()
                                      )
                                    ),
                                (g || v) &&
                                  (0, W.jsxs)(
                                    I.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, W.jsx)(j.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        g &&
                                          (0, W.jsx)(j.Z, {
                                            title: (0, W.jsx)(K.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, W.jsx)(y.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    E.colors.primary.lighter
                                                },
                                                color: E.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => g(e.id),
                                              children: (0, W.jsx)(p.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        v &&
                                          se({
                                            item: e,
                                            rowId: Y,
                                            visible: H,
                                            theme: E,
                                            isLoading: r,
                                            handleShow: re,
                                            onDelete: v,
                                            hide: R
                                          })
                                      ]
                                    },
                                    (0, _.Z)()
                                  )
                              ]
                            },
                            (0, _.Z)()
                          );
                        }),
                        r &&
                          (0, W.jsx)(N.Z, {
                            children: (0, W.jsx)(I.Z, {
                              children: (0, W.jsx)(C.Z, {
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
                                children: (0, W.jsx)(z.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, W.jsx)(C.Z, {
                p: 2,
                children: (0, W.jsx)(U.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: (e, t) => {
                    L({ ...l, page: t });
                  },
                  onRowsPerPageChange: (e) => {
                    L({ ...l, size: Number(e.target.value) });
                  },
                  page: l.page,
                  rowsPerPage: l.size,
                  rowsPerPageOptions: [5, 10, 25, 30],
                  showLastButton: !0,
                  showFirstButton: !0
                })
              })
            ]
          });
        },
        G = (0, a.memo)(X),
        J = (e) => {
          let {
            title: t,
            data: n = [],
            tableHeader: a = [{ align: 'inherit', title: 'Title' }],
            headerTitle: u = '',
            headerSubtitle: h = '',
            isLoading: p = !1,
            breadcrumbs: x,
            pagination: m,
            tableFilter: v,
            totalItems: g,
            extraOptions: Z,
            isShowBulkActions: j = !0,
            onOpenModal: f,
            tableBody: b,
            onDelete: y,
            onUpdate: w,
            onPagination: C
          } = e;
          const k = (0, s.Z)();
          return (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(l.ql, {
                children: (0, W.jsx)('title', {
                  children: k.formatMessage({ id: t })
                })
              }),
              (0, W.jsx)(d.Z, {
                children: (0, W.jsx)(c.Z, {
                  headerTitle: u,
                  headerSubtitle: h,
                  onOpenModal: f,
                  breadcrumbs: x
                })
              }),
              (0, W.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, W.jsx)(r.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, W.jsx)(r.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, W.jsx)(G, {
                      data: n,
                      totalItems: g,
                      tableHeader: a,
                      tableBody: b,
                      isLoading: p,
                      onDelete: y,
                      onUpdate: w,
                      onPagination: C,
                      pagination: m,
                      tableFilter: v,
                      extraOptions: Z,
                      isShowBulkActions: j
                    })
                  })
                })
              }),
              (0, W.jsx)(o.Z, {})
            ]
          });
        },
        ee = (0, a.memo)(J);
    },
    5734: (e, t, n) => {
      n.r(t), n.d(t, { default: () => O });
      var i = n(2791),
        r = n(5048),
        a = n(6790),
        l = n(5674),
        s = n(5850),
        o = n(7837),
        d = n(4695),
        c = n(697),
        u = n(1889),
        h = n(7621),
        p = n(4454),
        x = n(1134),
        m = n(4349),
        v = n(7590),
        g = n(7891),
        Z = n(8007),
        j = n(184);
      const f = Z.Ry().shape({ name: Z.Z_().required('Name is required!') }),
        b = (e) => {
          var t, n, r;
          let { open: a, onClose: s, refetch: Z, hide: b } = e;
          const { notify: y, message: w } = (0, o.p)(),
            [C, { isLoading: k }] = (0, l._i)(),
            [D, { isLoading: P }] = (0, l.Z6)(),
            [T, S] = (0, i.useState)(),
            { data: N } = (0, l.js)({}),
            {
              data: I,
              refetch: O,
              isSuccess: B,
              isFetching: F
            } = (0, l.fl)(
              { id: a.id },
              { refetchOnMountOrArgChange: !0, skip: !a.open && !a.id }
            );
          (0, i.useEffect)(() => {
            if (null !== N && void 0 !== N && N.data && a.open) {
              var e;
              if (a.id)
                if (
                  null !== I &&
                  void 0 !== I &&
                  null !== (e = I.data) &&
                  void 0 !== e &&
                  e.permissions
                ) {
                  var t, n;
                  const e = new Set(
                      Object.keys(null === N || void 0 === N ? void 0 : N.data)
                    ),
                    i = new Set(
                      Object.keys(
                        null === I ||
                          void 0 === I ||
                          null === (t = I.data) ||
                          void 0 === t
                          ? void 0
                          : t.permissions
                      )
                    ),
                    r =
                      null === (n = [...e]) || void 0 === n
                        ? void 0
                        : n.filter(
                            (e) => !(null !== i && void 0 !== i && i.has(e))
                          ),
                    a =
                      null === r || void 0 === r
                        ? void 0
                        : r.reduce((e, t) => ({ ...e, [t]: [] }), {});
                  return S(() => {
                    var e;
                    return {
                      ...(null === I ||
                      void 0 === I ||
                      null === (e = I.data) ||
                      void 0 === e
                        ? void 0
                        : e.permissions),
                      ...a
                    };
                  });
                }
              const i = Object.keys(
                  null === N || void 0 === N ? void 0 : N.data
                ),
                r =
                  null === i || void 0 === i
                    ? void 0
                    : i.reduce((e, t) => ({ ...e, [t]: [] }), {});
              return S(r);
            }
          }, [I, N, a]);
          const {
            register: z,
            setValue: U,
            reset: M,
            handleSubmit: L,
            formState: { errors: E }
          } = (0, x.cI)({ resolver: (0, d.X)(f), defaultValues: { name: '' } });
          (0, i.useEffect)(() => {
            var e;
            U(
              'name',
              (null === I ||
              void 0 === I ||
              null === (e = I.data) ||
              void 0 === e
                ? void 0
                : e.name) || ''
            );
          }, [I]);
          return (0, j.jsx)(g.Z, {
            title:
              null !== I &&
              void 0 !== I &&
              null !== (t = I.data) &&
              void 0 !== t &&
              t.id
                ? 'Edit '.concat(
                    null === I ||
                      void 0 === I ||
                      null === (n = I.data) ||
                      void 0 === n
                      ? void 0
                      : n.name
                  )
                : 'Add Roles',
            onClose: s,
            open: a.open && !F && B,
            isLoading: k || P,
            onOk: L(async (e) => {
              try {
                var t, n;
                if (
                  null !== I &&
                  void 0 !== I &&
                  null !== (t = I.data) &&
                  void 0 !== t &&
                  t.id &&
                  a.id
                )
                  await C({
                    name: e.name,
                    permissions: T,
                    id:
                      null === I ||
                      void 0 === I ||
                      null === (n = I.data) ||
                      void 0 === n
                        ? void 0
                        : n.id
                  }).unwrap(),
                    y({ message: w.UPDATED });
                else await D({ name: e.name, permissions: T }).unwrap();
                Z(), O(), b(), M();
              } catch (i) {
                y({ message: w.ERROR, type: 'error' });
              }
            }),
            children: (0, j.jsxs)(c.Z, {
              component: 'form',
              id: 'form-users',
              children: [
                (0, j.jsx)('div', {
                  className: 'block',
                  children: (0, j.jsx)(v.n, {
                    label: (0, j.jsx)(m.Z, { id: 'label.name' }),
                    name: 'name',
                    sx: { my: 2 },
                    errors: E,
                    register: z
                  })
                }),
                (0, j.jsx)(u.ZP, {
                  container: !0,
                  columns: 2,
                  sx: { gridTemplateColumns: '1fr 1fr' },
                  display: 'grid',
                  gap: '8px',
                  children:
                    (null === N || void 0 === N ? void 0 : N.data) &&
                    T &&
                    (null === Object ||
                    void 0 === Object ||
                    null ===
                      (r = Object.keys(
                        null === N || void 0 === N ? void 0 : N.data
                      )) ||
                    void 0 === r
                      ? void 0
                      : r.map((e) => {
                          var t;
                          return (0, j.jsxs)('div', {
                            children: [
                              e.slice(0, 1).toUpperCase() + e.slice(1),
                              (0, j.jsx)(h.Z, {
                                sx: { padding: 1, margin: '4px 0 4px 0' },
                                children: (0, j.jsx)(u.ZP, {
                                  container: !0,
                                  justifyContent: 'space-between',
                                  children:
                                    null === N ||
                                    void 0 === N ||
                                    null === (t = N.data[e]) ||
                                    void 0 === t
                                      ? void 0
                                      : t.map((t, n) => {
                                          var i;
                                          return (0, j.jsxs)(
                                            c.Z,
                                            {
                                              width: '100px',
                                              children: [
                                                (0, j.jsx)(p.Z, {
                                                  onChange: () => {
                                                    var n;
                                                    return ((e, t, n) => {
                                                      S((i) =>
                                                        e
                                                          ? {
                                                              ...i,
                                                              [t]: i[t].filter(
                                                                (e) => e !== n
                                                              )
                                                            }
                                                          : {
                                                              ...i,
                                                              [t]: [...i[t], n]
                                                            }
                                                      );
                                                    })(
                                                      Boolean(
                                                        null === (n = T[e]) ||
                                                          void 0 === n
                                                          ? void 0
                                                          : n.includes(t)
                                                      ),
                                                      e,
                                                      t
                                                    );
                                                  },
                                                  checked: Boolean(
                                                    null === (i = T[e]) ||
                                                      void 0 === i
                                                      ? void 0
                                                      : i.includes(t)
                                                  )
                                                }),
                                                t.slice(0, 1).toUpperCase() +
                                                  t.slice(1)
                                              ]
                                            },
                                            n
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
        y = (0, i.memo)(b);
      var w = n(890),
        C = n(8121),
        k = n(4294),
        D = n(946),
        P = n(8673);
      const T = () => {
          const { visible: e, toggle: t } = (0, o.d)();
          return {
            tableBody: (e) => [
              {
                align: 'inherit',
                children: (0, j.jsx)(w.Z, {
                  color: 'text.primary',
                  noWrap: !0,
                  children: e.name
                })
              },
              {
                align: 'left',
                children: (0, j.jsx)(c.Z, {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  children: Object.keys(e.permissions).map((t) =>
                    (0, j.jsx)(C.Z, {
                      badgeContent: e.permissions[t].length || 0,
                      color: 'primary',
                      children: (0, j.jsx)(k.Z, {
                        variant: 'outlined',
                        color: 'primary',
                        sx: { padding: '4px 8px', cursor: 'default' },
                        children: t
                      })
                    })
                  )
                }),
                tableProps: { width: '60%' }
              },
              {
                align: 'right',
                children: (0, j.jsx)(w.Z, {
                  color: 'text.primary',
                  noWrap: !0,
                  children:
                    (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                    (0, D.Z)(
                      (0, P.Z)(
                        null === e || void 0 === e ? void 0 : e.updatedAt
                      ),
                      'dd/MM/yyyy HH:mm'
                    )
                })
              }
            ],
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
            toggle: t,
            visible: e
          };
        },
        S = 'title.agents-management',
        N = (e, t) => (null === e || void 0 === e ? void 0 : e.includes(t)),
        I = [{ link: '/dashboards', name: 'title.dashboard' }, { name: S }],
        O = () => {
          const { notify: e, message: t } = (0, o.p)(),
            { tableBody: n, tableHeader: d } = T(),
            [c, u] = (0, i.useState)([]),
            [h, p] = (0, i.useState)({ id: 0, open: !1 }),
            [x, m] = (0, i.useState)({ sortBy: -1, page: 0, size: 10 }),
            { permissions: v } = (0, r.v9)((e) => e.common),
            [g, { isLoading: Z }] = (0, l.D)(),
            {
              data: f,
              isFetching: b,
              refetch: w
            } = (0, l.ev)(
              {},
              { refetchOnMountOrArgChange: !0, skip: !N(v, 'get') }
            );
          (0, i.useEffect)(() => {
            f &&
              u(() => {
                var e;
                return (0, s.TY)(
                  f.data,
                  null === (e = d[x.sortBy]) || void 0 === e ? void 0 : e.name,
                  x.sortDirection
                );
              });
          }, [f, x]);
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(a.Z, {
                title: S,
                data: c,
                totalItems: null === f || void 0 === f ? void 0 : f.data.length,
                tableHeader: d,
                tableBody: n,
                headerTitle: S,
                breadcrumbs: I,
                onOpenModal:
                  N(v, 'create') &&
                  (() => {
                    p({ id: 0, open: !0 });
                  }),
                isLoading: b || Z,
                onDelete:
                  N(v, 'delete') &&
                  (async (n) => {
                    try {
                      await g({ id: Number(n) }).unwrap(),
                        e({ message: t.DELETED }),
                        w();
                    } catch (i) {
                      e({ message: t.ERROR, type: 'error' });
                    }
                  }),
                onUpdate:
                  N(v, 'update') &&
                  (async (e) => {
                    p({ id: e, open: !0 });
                  }),
                pagination: x,
                onPagination: m
              }),
              (0, j.jsx)(y, {
                open: h,
                onClose: () => p((e) => ({ ...e, open: !1 })),
                refetch: w,
                hide: () => p((e) => ({ ...e, open: !1 }))
              })
            ]
          });
        };
    },
    4732: (e, t, n) => {
      n.d(t, { Z: () => r });
      var i = n(2791);
      const r = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [n, r] = (0, i.useState)(e);
        return (
          (0, i.useEffect)(() => {
            const n = setTimeout(() => {
              r(e);
            }, t);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          n
        );
      };
    },
    5850: (e, t, n) => {
      n.d(t, { TY: () => a, Zd: () => l });
      var i = n(2426),
        r = n.n(i);
      const a = (e, t, n) =>
          [...e].sort((e, i) =>
            'string' === typeof e[t] && 'string' === typeof i[t]
              ? 'asc' === n
                ? e[t].localeCompare(i[t])
                : i[t].localeCompare(e[t])
              : 'number' === typeof e[t] && 'number' === typeof i[t]
              ? 'asc' === n
                ? e[t] - i[t]
                : i[t] - e[t]
              : 0
          ),
        l = (e, t) => {
          if ('to' === t) {
            return r()(e).endOf('day').utc().toISOString();
          }
          return r()(e).startOf('day').utc().toISOString();
        };
    },
    3329: (e, t, n) => {
      var i = n(4836);
      t.Z = void 0;
      var r = i(n(5649)),
        a = n(184),
        l = (0, r.default)(
          (0, a.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      t.Z = l;
    },
    8673: (e, t, n) => {
      n.d(t, { Z: () => s });
      Math.pow(10, 8);
      var i = 6e4,
        r = 36e5,
        a = n(4522),
        l = n(9297);
      function s(e, t) {
        (0, a.Z)(1, arguments);
        var n = t || {},
          s = null == n.additionalDigits ? 2 : (0, l.Z)(n.additionalDigits);
        if (2 !== s && 1 !== s && 0 !== s)
          throw new RangeError('additionalDigits must be 0, 1 or 2');
        if (
          'string' !== typeof e &&
          '[object String]' !== Object.prototype.toString.call(e)
        )
          return new Date(NaN);
        var v,
          g = (function (e) {
            var t,
              n = {},
              i = e.split(o.dateTimeDelimiter);
            if (i.length > 2) return n;
            /:/.test(i[0])
              ? (t = i[0])
              : ((n.date = i[0]),
                (t = i[1]),
                o.timeZoneDelimiter.test(n.date) &&
                  ((n.date = e.split(o.timeZoneDelimiter)[0]),
                  (t = e.substr(n.date.length, e.length))));
            if (t) {
              var r = o.timezone.exec(t);
              r
                ? ((n.time = t.replace(r[1], '')), (n.timezone = r[1]))
                : (n.time = t);
            }
            return n;
          })(e);
        if (g.date) {
          var Z = (function (e, t) {
            var n = new RegExp(
                '^(?:(\\d{4}|[+-]\\d{' +
                  (4 + t) +
                  '})|(\\d{2}|[+-]\\d{' +
                  (2 + t) +
                  '})$)'
              ),
              i = e.match(n);
            if (!i) return { year: NaN, restDateString: '' };
            var r = i[1] ? parseInt(i[1]) : null,
              a = i[2] ? parseInt(i[2]) : null;
            return {
              year: null === a ? r : 100 * a,
              restDateString: e.slice((i[1] || i[2]).length)
            };
          })(g.date, s);
          v = (function (e, t) {
            if (null === t) return new Date(NaN);
            var n = e.match(d);
            if (!n) return new Date(NaN);
            var i = !!n[4],
              r = h(n[1]),
              a = h(n[2]) - 1,
              l = h(n[3]),
              s = h(n[4]),
              o = h(n[5]) - 1;
            if (i)
              return (function (e, t, n) {
                return t >= 1 && t <= 53 && n >= 0 && n <= 6;
              })(0, s, o)
                ? (function (e, t, n) {
                    var i = new Date(0);
                    i.setUTCFullYear(e, 0, 4);
                    var r = i.getUTCDay() || 7,
                      a = 7 * (t - 1) + n + 1 - r;
                    return i.setUTCDate(i.getUTCDate() + a), i;
                  })(t, s, o)
                : new Date(NaN);
            var c = new Date(0);
            return (function (e, t, n) {
              return (
                t >= 0 && t <= 11 && n >= 1 && n <= (x[t] || (m(e) ? 29 : 28))
              );
            })(t, a, l) &&
              (function (e, t) {
                return t >= 1 && t <= (m(e) ? 366 : 365);
              })(t, r)
              ? (c.setUTCFullYear(t, a, Math.max(r, l)), c)
              : new Date(NaN);
          })(Z.restDateString, Z.year);
        }
        if (!v || isNaN(v.getTime())) return new Date(NaN);
        var j,
          f = v.getTime(),
          b = 0;
        if (
          g.time &&
          ((b = (function (e) {
            var t = e.match(c);
            if (!t) return NaN;
            var n = p(t[1]),
              a = p(t[2]),
              l = p(t[3]);
            if (
              !(function (e, t, n) {
                if (24 === e) return 0 === t && 0 === n;
                return n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
              })(n, a, l)
            )
              return NaN;
            return n * r + a * i + 1e3 * l;
          })(g.time)),
          isNaN(b))
        )
          return new Date(NaN);
        if (!g.timezone) {
          var y = new Date(f + b),
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
          (j = (function (e) {
            if ('Z' === e) return 0;
            var t = e.match(u);
            if (!t) return 0;
            var n = '+' === t[1] ? -1 : 1,
              a = parseInt(t[2]),
              l = (t[3] && parseInt(t[3])) || 0;
            if (
              !(function (e, t) {
                return t >= 0 && t <= 59;
              })(0, l)
            )
              return NaN;
            return n * (a * r + l * i);
          })(g.timezone)),
          isNaN(j) ? new Date(NaN) : new Date(f + b + j)
        );
      }
      var o = {
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
//# sourceMappingURL=734.59c19212.chunk.js.map
