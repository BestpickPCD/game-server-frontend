'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [126],
  {
    10173: (e, r, t) => {
      t.d(r, { Z: () => c });
      var n = t(66934),
        s = t(89164),
        i = t(697),
        a = t(20890),
        l = t(4349),
        o = t(80184);
      const d = (0, n.ZP)(s.Z)((e) => {
          let { theme: r } = e;
          return '\n        margin-top: '.concat(r.spacing(4), ';\n');
        }),
        c = () =>
          (0, o.jsx)(d, {
            className: 'footer-wrapper',
            children: (0, o.jsxs)(i.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, o.jsx)(i.Z, {
                  children: (0, o.jsxs)(a.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, o.jsx)(l.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, o.jsx)(a.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    58409: (e, r, t) => {
      t.d(r, { R: () => d });
      var n = t(72791),
        s = t(67590),
        i = t(11827),
        a = t(64732),
        l = t(80184);
      const o = (e) =>
          (e || []).map((e) => ({ id: e.id, name: e.name, value: e.id })),
        d = (e) => {
          let {
            control: r,
            name: t,
            parent: d,
            label: c = 'Agents',
            errors: h,
            ...m
          } = e;
          const [u, x] = (0, n.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            [p, g] = (0, n.useState)(''),
            Z = (0, a.Z)(p, 500),
            [j, v] = (0, n.useState)([]),
            [b, f] = (0, n.useState)({ id: '', name: '', value: '' });
          (0, n.useEffect)(() => {
            g(Z), x((e) => ({ ...e, search: Z }));
          }, [Z]);
          const { data: P, isFetching: y } = (0, i.aN)(
            { size: u.size, page: u.page, search: u.search, id: 1 },
            { refetchOnMountOrArgChange: !0 }
          );
          function w(e) {
            const r = e.target;
            if (
              r.scrollHeight === r.scrollTop + r.clientHeight &&
              (P.data.page + 1) * P.data.size < P.data.totalItems
            )
              return x((e) => ({ ...e, page: u.page + 1 }));
          }
          (0, n.useEffect)(() => {
            x({ search: Z || '', id: 1, totalItems: 0, page: 0, size: 20 }),
              v([]);
          }, [Z, d]),
            (0, n.useEffect)(
              () =>
                v(
                  d
                    ? (e) => {
                        var r;
                        const t = [
                          ...e,
                          ...o(
                            null === P ||
                              void 0 === P ||
                              null === (r = P.data) ||
                              void 0 === r
                              ? void 0
                              : r.data
                          )
                        ].slice();
                        return (
                          t.unshift(
                            ((e) => ({
                              id: e.id,
                              name: e.name,
                              value: e.value
                            }))(d)
                          ),
                          t
                        );
                      }
                    : (e) => [
                        ...e,
                        ...o(null === P || void 0 === P ? void 0 : P.data.data)
                      ]
                ),
              [P, d]
            ),
            (0, n.useEffect)(() => {
              null !== b &&
                void 0 !== b &&
                b.id &&
                v((e) => {
                  const r = e.slice();
                  return r.unshift(b), r;
                });
            }, [b, P]);
          const k = (0, n.useMemo)(() => {
            const e = [],
              r = new Set();
            for (const t of j) r.has(t.id) || (r.add(t.id), e.push(t));
            return e;
          }, [j]);
          return (0, l.jsx)(s.P, {
            onScroll: w,
            name: t,
            label: c,
            options: k,
            control: r,
            MenuProps: {
              className: 'infinity-select',
              autoFocus: !1,
              PaperProps: { onScroll: w },
              style: { maxHeight: 500, padding: 0 }
            },
            isFetching: y,
            onSearch: g,
            searchTerm: p,
            errors: h,
            setSelected: f,
            ...m
          });
        };
    },
    67590: (e, r, t) => {
      t.d(r, { P: () => j, n: () => v });
      var n = t(5403),
        s = t(68096),
        i = t(94925),
        a = t(99321),
        l = t(79834),
        o = t(48550),
        d = t(63466),
        c = t(23786),
        h = t(697),
        m = t(13239),
        u = t(47071),
        x = t(72791),
        p = t(61134),
        g = t(80184);
      const Z = (e) => {
          var r;
          let {
            control: t,
            name: x,
            label: Z,
            options: j,
            isFetching: v,
            errors: b,
            searchTerm: f,
            onSearch: P,
            setSelected: y,
            ...w
          } = e;
          return t
            ? (0, g.jsx)(p.Qr, {
                control: t,
                name: x,
                render: (e) => {
                  var r;
                  let { field: t } = e;
                  return (0, g.jsxs)(s.Z, {
                    fullWidth: !0,
                    children: [
                      (0, g.jsx)(i.Z, {
                        id: 'demo-simple-select-label',
                        sx: {
                          color:
                            null !== b && void 0 !== b && b[x] && !t.value
                              ? '#FF1943'
                              : 'inherit'
                        },
                        children: Z
                      }),
                      (0, g.jsxs)(a.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: Z,
                        value:
                          (null === t || void 0 === t ? void 0 : t.value) || '',
                        error:
                          !(null === b || void 0 === b || !b[x]) && !t.value,
                        ...t,
                        ...w,
                        children: [
                          P &&
                            (0, g.jsx)(l.Z, {
                              children: (0, g.jsx)(o.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, g.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, g.jsx)(n.Z, {})
                                  })
                                },
                                value: f,
                                onChange: (e) => P(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === j || void 0 === j
                            ? void 0
                            : j.map((e) =>
                                (0, g.jsx)(
                                  c.Z,
                                  {
                                    value: e.value,
                                    onKeyDown: (e) => e.stopPropagation(),
                                    onClick: () => {
                                      return (
                                        (r = e),
                                        void (
                                          null === y ||
                                          void 0 === y ||
                                          y(r)
                                        )
                                      );
                                      var r;
                                    },
                                    children: e.name
                                  },
                                  e.id
                                )
                              ),
                          v &&
                            (0, g.jsx)(h.Z, {
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '12px',
                              marginBottom: '12px',
                              children: (0, g.jsx)(m.Z, {
                                size: 32,
                                disableShrink: !0,
                                thickness: 3
                              })
                            })
                        ]
                      }),
                      (null === b || void 0 === b ? void 0 : b[x]) &&
                        !t.value &&
                        (0, g.jsx)(u.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === b ||
                            void 0 === b ||
                            null === (r = b[x]) ||
                            void 0 === r
                              ? void 0
                              : r.message
                        })
                    ]
                  });
                }
              })
            : (0, g.jsxs)(s.Z, {
                fullWidth: !0,
                children: [
                  (0, g.jsx)(i.Z, {
                    id: 'demo-simple-select-label',
                    sx: {
                      color:
                        null !== b && void 0 !== b && b[x]
                          ? '#FF1943'
                          : 'inherit'
                    },
                    children: Z
                  }),
                  (0, g.jsx)(a.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: Z,
                    ...w,
                    error: !(null === b || void 0 === b || !b[x]),
                    children:
                      null === j || void 0 === j
                        ? void 0
                        : j.map((e) =>
                            (0, g.jsx)(
                              c.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === b || void 0 === b || !b[x]) &&
                    (0, g.jsx)(u.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === b ||
                        void 0 === b ||
                        null === (r = b[x]) ||
                        void 0 === r
                          ? void 0
                          : r.message
                    })
                ]
              });
        },
        j = (0, x.memo)(Z),
        v = (e) => {
          let { label: r, name: t, errors: n, register: s, ...i } = e;
          return (0, g.jsx)(o.Z, {
            label: r,
            error: !!n[t],
            helperText: n[t] ? n[t].message : '',
            fullWidth: !0,
            ...s(t),
            ...i
          });
        };
    },
    57891: (e, r, t) => {
      t.d(r, { Z: () => u });
      var n = t(53329),
        s = t(39709),
        i = t(94721),
        a = t(89164),
        l = t(94294),
        o = t(5574),
        d = t(65661),
        c = t(90493),
        h = t(4349),
        m = t(80184);
      const u = function (e) {
        let {
          title: r,
          children: t,
          open: u,
          isLoading: x = !1,
          onClose: p,
          onOk: g,
          ...Z
        } = e;
        return (0, m.jsxs)(o.Z, {
          onClose: p,
          open: u,
          ...Z,
          children: [
            r && (0, m.jsx)(d.Z, { variant: 'h4', children: r }),
            r && (0, m.jsx)(i.Z, {}),
            (0, m.jsx)(c.Z, { sx: { pt: 0 }, children: t }),
            (0, m.jsx)(i.Z, {}),
            (0, m.jsxs)(a.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, m.jsx)(l.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: p,
                  children: (0, m.jsx)(h.Z, { id: 'label.cancel' })
                }),
                g &&
                  (0, m.jsx)(s.Z, {
                    onClick: g,
                    loading: x,
                    loadingPosition: 'start',
                    startIcon: (0, m.jsx)(n.Z, {}),
                    variant: 'contained',
                    sx: { width: '90px' },
                    type: 'submit',
                    children: (0, m.jsx)(h.Z, { id: 'label.OK' })
                  })
              ]
            })
          ]
        });
      };
    },
    68418: (e, r, t) => {
      t.d(r, { Z: () => o });
      var n = t(66934),
        s = t(697),
        i = t(89164),
        a = t(80184);
      const l = (0, n.ZP)(s.Z)((e) => {
          let { theme: r } = e;
          return '\n        padding: '.concat(r.spacing(4), ';\n');
        }),
        o = (e) => {
          let { children: r } = e;
          return (0, a.jsx)(l, {
            className: 'MuiPageTitle-wrapper',
            children: (0, a.jsx)(i.Z, { maxWidth: 'lg', children: r })
          });
        };
    },
    23481: (e, r, t) => {
      t.d(r, { Z: () => Z });
      var n = t(61889),
        s = t(20890),
        i = t(697),
        a = t(94294),
        l = t(74696),
        o = t(72791),
        d = t(98333),
        c = t(93517),
        h = t(16871),
        m = t(43504),
        u = t(4349),
        x = t(80184);
      const p = (e) => {
          let { links: r = [] } = e;
          const t = (0, h.TH)();
          return (0, x.jsx)(c.Z, {
            separator: (0, x.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: r.map((e, n) =>
              n === r.length - 1
                ? (0, x.jsx)(
                    s.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(u.Z, { id: e.name })
                    },
                    n
                  )
                : (0, x.jsx)(
                    m.rU,
                    {
                      to:
                        (null === e || void 0 === e ? void 0 : e.link) ||
                        t.pathname,
                      onClick:
                        (null === e || void 0 === e ? void 0 : e.onClick) &&
                        e.onClick,
                      style: {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      },
                      children: (0, x.jsx)(s.Z, {
                        color: 'inherit',
                        children: (0, x.jsx)(u.Z, { id: e.name })
                      })
                    },
                    n
                  )
            )
          });
        },
        g = (e) => {
          let {
            headerTitle: r,
            headerSubtitle: t,
            breadcrumbs: o,
            onOpenModal: d
          } = e;
          return (0, x.jsxs)(n.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, x.jsxs)(n.ZP, {
                item: !0,
                children: [
                  (0, x.jsx)(s.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, x.jsx)(u.Z, { id: r })
                  }),
                  (0, x.jsx)(s.Z, { variant: 'subtitle2', children: t }),
                  o &&
                    (0, x.jsx)(i.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(p, { links: o })
                    })
                ]
              }),
              d &&
                (0, x.jsx)(n.ZP, {
                  item: !0,
                  children: (0, x.jsx)(a.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(l.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, x.jsx)(u.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        Z = (0, o.memo)(g);
    },
    96790: (e, r, t) => {
      t.d(r, { Z: () => ee });
      var n = t(89164),
        s = t(61889),
        i = t(72791),
        a = t(6907),
        l = t(93539),
        o = t(10173),
        d = t(68418),
        c = t(23481),
        h = t(30168),
        m = t(68036),
        u = t(31675),
        x = t(5403),
        p = t(21686),
        g = t(39709),
        Z = t(66934),
        j = t(13967),
        v = t(97639),
        b = t(20890),
        f = t(94294),
        P = t(13400),
        y = t(57621),
        w = t(697),
        k = t(94721),
        S = t(48550),
        C = t(39281),
        I = t(79836),
        T = t(91048),
        F = t(35855),
        B = t(53994),
        q = t(94454),
        z = t(80720),
        O = t(53382),
        A = t(13239),
        R = t(63033),
        D = t(87837),
        W = t(71715),
        E = t(90493),
        L = t(15021),
        M = t(49900),
        H = t(74934),
        U = t(80184);
      const _ = (0, Z.ZP)(f.Z)((e) => {
          let { theme: r } = e;
          return '\n     background: '
            .concat(r.colors.error.main, ';\n     color: ')
            .concat(
              r.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(r.colors.error.dark, ';\n     }\n    ');
        }),
        N = () => {
          const { toggle: e, visible: r } = (0, D.d)(),
            t = (0, i.useRef)(null);
          return (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsxs)(w.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, U.jsxs)(w.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, U.jsx)(b.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, U.jsx)(_, {
                        sx: { ml: 1 },
                        startIcon: (0, U.jsx)(m.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, U.jsx)(P.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: t,
                    sx: { ml: 2, p: 1 },
                    children: (0, U.jsx)(H.Z, {})
                  })
                ]
              }),
              (0, U.jsx)(W.Z, {
                keepMounted: !0,
                anchorEl: t.current,
                open: r,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, U.jsxs)(E.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, U.jsx)(L.ZP, {
                      button: !0,
                      children: (0, U.jsx)(M.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, U.jsx)(L.ZP, {
                      button: !0,
                      children: (0, U.jsx)(M.Z, {
                        primary: 'Bulk edit selected'
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
      var K,
        V = t(92810),
        Y = t(64732),
        Q = t(4349);
      const X = (0, Z.ZP)(g.Z)(
          K ||
            (K = (0, h.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        $ = (e) => {
          let {
            data: r,
            tableHeader: t,
            isLoading: s,
            pagination: a,
            totalItems: l = 0,
            tableFilter: o,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: h,
            onDelete: g,
            onUpdate: Z,
            onPagination: W
          } = e;
          const E = (0, j.Z)(),
            { visible: L, show: M, hide: H } = (0, D.d)(),
            [_, K] = (0, i.useState)(''),
            [$, G] = (0, i.useState)([]),
            [J, ee] = (0, i.useState)(''),
            re = (0, Y.Z)(J, 500);
          (0, i.useEffect)(() => {
            W({ ...a, search: re });
          }, [re]);
          const te = $.length > 0 && $.length < r.length,
            ne = $.length === r.length,
            se = (e) => {
              M(), K(e);
            },
            ie = (e) => {
              g(e), H();
            },
            ae = (0, i.useMemo)(
              () => (g || Z || '' !== t[t.length - 1].name || t.pop(), t),
              [g, Z, t]
            ),
            le = (e) => {
              let {
                item: r,
                hide: t,
                onDelete: s,
                handleShow: i,
                rowId: a,
                visible: l,
                theme: o,
                isLoading: d
              } = e;
              return (0, U.jsx)(v.Z, {
                title: (0, U.jsxs)(n.Z, {
                  children: [
                    (0, U.jsx)(b.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, U.jsxs)(n.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, U.jsx)(f.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, U.jsx)(X, {
                          onClick: () => ie(r.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, U.jsx)(p.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: r.id === a && l && !d,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, U.jsx)(P.Z, {
                  sx: {
                    '&:hover': { background: o.colors.error.lighter },
                    color: o.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => i(r.id),
                  children: (0, U.jsx)(m.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, U.jsxs)(y.Z, {
            children: [
              c &&
                (null === $ || void 0 === $ ? void 0 : $.length) > 0 &&
                (0, U.jsx)(w.Z, { flex: 1, p: 2, children: (0, U.jsx)(N, {}) }),
              (0, U.jsx)(k.Z, {}),
              (0, U.jsxs)(y.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, U.jsxs)(w.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, U.jsx)(S.Z, {
                        label: (0, U.jsx)(Q.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, U.jsx)(P.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, U.jsx)(x.Z, {})
                      })
                    ]
                  }),
                  (0, U.jsx)(w.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map((e, r) => (0, U.jsx)(w.Z, { children: e }, r))
                  })
                ]
              }),
              (0, U.jsx)(C.Z, {
                children: (0, U.jsxs)(I.Z, {
                  children: [
                    (0, U.jsx)(T.Z, {
                      children: (0, U.jsxs)(F.Z, {
                        children: [
                          c &&
                            (0, U.jsx)(B.Z, {
                              padding: 'checkbox',
                              children: (0, U.jsx)(q.Z, {
                                color: 'primary',
                                checked: ne,
                                indeterminate: te,
                                onChange: (e) => {
                                  G(e.target.checked ? r.map((e) => e.id) : []);
                                }
                              })
                            }),
                          ae.map((e, r) =>
                            (0, U.jsx)(
                              B.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, U.jsx)(z.Z, {
                                      active: a.sortBy === r,
                                      direction:
                                        a.sortBy === r
                                          ? a.sortDirection
                                          : 'asc',
                                      onClick: () =>
                                        ((e) => {
                                          const r = {
                                            ...a,
                                            sortBy: e,
                                            sortDirection:
                                              a.sortBy === e &&
                                              'asc' === a.sortDirection
                                                ? 'desc'
                                                : 'asc'
                                          };
                                          W(r);
                                        })(r),
                                      children: (0, U.jsx)(Q.Z, { id: e.title })
                                    })
                                  : (0, U.jsx)(Q.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, V.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, U.jsxs)(O.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !r || r.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        r.map((e) => {
                          var r;
                          const t = $.includes(e.id);
                          return (0, U.jsxs)(
                            F.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                c &&
                                  (0, U.jsx)(
                                    B.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, U.jsx)(q.Z, {
                                        color: 'primary',
                                        checked: t,
                                        onChange: (r) => {
                                          return (
                                            (t = e.id),
                                            void ($.includes(t)
                                              ? G((e) =>
                                                  e.filter((e) => e !== t)
                                                )
                                              : G((e) => [...e, t]))
                                          );
                                          var t;
                                        },
                                        value: t
                                      })
                                    },
                                    (0, V.Z)()
                                  ),
                                null === (r = h(e)) || void 0 === r
                                  ? void 0
                                  : r.map((e) =>
                                      (0, U.jsx)(
                                        B.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, V.Z)()
                                      )
                                    ),
                                (Z || g) &&
                                  (0, U.jsxs)(
                                    B.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, U.jsx)(v.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        Z &&
                                          (0, U.jsx)(v.Z, {
                                            title: (0, U.jsx)(Q.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, U.jsx)(P.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    E.colors.primary.lighter
                                                },
                                                color: E.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => Z(e.id),
                                              children: (0, U.jsx)(u.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        g &&
                                          le({
                                            item: e,
                                            rowId: _,
                                            visible: L,
                                            theme: E,
                                            isLoading: s,
                                            handleShow: se,
                                            onDelete: g,
                                            hide: H
                                          })
                                      ]
                                    },
                                    (0, V.Z)()
                                  )
                              ]
                            },
                            (0, V.Z)()
                          );
                        }),
                        s &&
                          (0, U.jsx)(F.Z, {
                            children: (0, U.jsx)(B.Z, {
                              children: (0, U.jsx)(w.Z, {
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
                                children: (0, U.jsx)(A.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, U.jsx)(w.Z, {
                p: 2,
                children: (0, U.jsx)(R.Z, {
                  component: 'div',
                  count: l,
                  onPageChange: (e, r) => {
                    W({ ...a, page: r });
                  },
                  onRowsPerPageChange: (e) => {
                    W({ ...a, size: Number(e.target.value) });
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
        G = (0, i.memo)($),
        J = (e) => {
          let {
            title: r,
            data: t = [],
            tableHeader: i = [{ align: 'inherit', title: 'Title' }],
            headerTitle: h = '',
            headerSubtitle: m = '',
            isLoading: u = !1,
            breadcrumbs: x,
            pagination: p,
            tableFilter: g,
            totalItems: Z,
            extraOptions: j,
            isShowBulkActions: v = !0,
            onOpenModal: b,
            tableBody: f,
            onDelete: P,
            onUpdate: y,
            onPagination: w
          } = e;
          const k = (0, l.Z)();
          return (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(a.ql, {
                children: (0, U.jsx)('title', {
                  children: k.formatMessage({ id: r })
                })
              }),
              (0, U.jsx)(d.Z, {
                children: (0, U.jsx)(c.Z, {
                  headerTitle: h,
                  headerSubtitle: m,
                  onOpenModal: b,
                  breadcrumbs: x
                })
              }),
              (0, U.jsx)(n.Z, {
                maxWidth: 'lg',
                children: (0, U.jsx)(s.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, U.jsx)(s.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, U.jsx)(G, {
                      data: t,
                      totalItems: Z,
                      tableHeader: i,
                      tableBody: f,
                      isLoading: u,
                      onDelete: P,
                      onUpdate: y,
                      onPagination: w,
                      pagination: p,
                      tableFilter: g,
                      extraOptions: j,
                      isShowBulkActions: v
                    })
                  })
                })
              }),
              (0, U.jsx)(o.Z, {})
            ]
          });
        },
        ee = (0, i.memo)(J);
    },
    99419: (e, r, t) => {
      t.d(r, { Z: () => b });
      var n = t(44695),
        s = t(39709),
        i = t(697),
        a = t(61889),
        l = t(48550),
        o = t(72791),
        d = t(61134),
        c = t(4349),
        h = t(16871),
        m = t(67590),
        u = t(58409),
        x = t(61927),
        p = t(25674),
        g = t(87837),
        Z = t(8007),
        j = t(80184);
      const v = Z.Ry().shape({
          username: Z.Z_()
            .trim('Username no space')
            .matches(/[a-zA-Z]/, 'Username can only contain letters.')
            .required('Username is required'),
          name: Z.Z_()
            .matches(/[a-zA-Z]/, 'Name can only contain letters.')
            .required('First name is required'),
          type: Z.Z_().nullable(),
          rate: Z.Rx().positive().moreThan(0, 'Rate is required').nullable(),
          roleId: Z.Rx().positive().moreThan(0, 'Role is required').nullable(),
          parentAgentId: Z.Z_().required('Parent Agent is required'),
          email: Z.Z_()
            .email('Invalid email format')
            .required('First name is required'),
          password: Z.Z_()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
              'Password contains characters, numbers and at least one special character'
            )
            .required('Password is required'),
          confirmPassword: Z.Z_()
            .oneOf([Z.iH('password'), null], 'Passwords must match')
            .required('Password is required')
        }),
        b = (e) => {
          let {
            isUserRegister: r = !1,
            isAgentRegister: t = !1,
            isSubmit: Z = !1,
            setIsSubmit: b,
            refetch: f,
            onClose: P
          } = e;
          const [y, { isLoading: w }] = (0, x.l4)(),
            { notify: k, message: S } = (0, g.p)(),
            C = (0, h.s0)(),
            {
              register: I,
              handleSubmit: T,
              reset: F,
              control: B,
              setValue: q,
              formState: { errors: z }
            } = (0, d.cI)({
              resolver: (0, n.X)(v),
              defaultValues: {
                name: '',
                rate: r ? null : 0,
                email: '',
                username: '',
                parentAgentId: r ? null : '',
                type: r ? 'player' : 'agent',
                roleId: r ? 2 : 0,
                password: '',
                confirmPassword: ''
              }
            });
          (0, o.useEffect)(() => {
            Z && (T(R)(), Z && b());
          }, [Z]);
          const { data: O } = (0, p.ev)({}, { refetchOnMountOrArgChange: !0 }),
            A = (0, o.useMemo)(() => {
              var e;
              return null === O ||
                void 0 === O ||
                null === (e = O.data) ||
                void 0 === e
                ? void 0
                : e.map((e) => ({ id: e.id, name: e.name, value: e.id }));
            }, [O]),
            R = async (e) => {
              try {
                const n = await y(e).unwrap();
                n &&
                  'CREATED' === n.message &&
                  (F(),
                  k({ message: 'Registered Successfully' }),
                  r || t ? (f(), P()) : C('/login'));
              } catch (n) {
                return 'DUPLICATE' === n.data.message
                  ? k({
                      message: 'Duplicated username or email',
                      type: 'error'
                    })
                  : k({ message: S.ERROR, type: 'error' });
              }
            };
          return (0, j.jsxs)(i.Z, {
            component: 'form',
            noValidate: !0,
            onSubmit: T(R),
            sx: { mt: 1 },
            children: [
              (0, j.jsxs)(a.ZP, {
                container: !0,
                rowSpacing: 1,
                columnSpacing: { xs: 1, sm: 2, md: 3 },
                children: [
                  (0, j.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, j.jsx)(l.Z, {
                      required: !0,
                      fullWidth: !0,
                      label: 'Name',
                      autoFocus: !0,
                      error: !!z.name,
                      helperText: z.name ? z.name.message : '',
                      ...I('name'),
                      onBlur: (e) => q('name', e.target.value.trim())
                    })
                  }),
                  (0, j.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    marginY: 1,
                    children: (0, j.jsxs)(a.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      rowSpacing: 2,
                      children: [
                        (0, j.jsx)(a.ZP, {
                          item: !0,
                          xs: r ? 12 : 8,
                          children: (0, j.jsx)(u.R, {
                            control: B,
                            name: 'parentAgentId',
                            errors: z
                          })
                        }),
                        !r &&
                          (0, j.jsx)(a.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, j.jsx)(l.Z, {
                              required: !0,
                              fullWidth: !0,
                              label: 'Rate',
                              autoFocus: !0,
                              error: !!z.rate,
                              helperText: z.rate ? z.rate.message : '',
                              ...I('rate'),
                              onBlur: (e) =>
                                q('rate', parseFloat(e.target.value.trim()))
                            })
                          })
                      ]
                    })
                  }),
                  (0, j.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, j.jsxs)(a.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      rowSpacing: 2,
                      children: [
                        (0, j.jsx)(a.ZP, {
                          item: !0,
                          xs: r ? 12 : 8,
                          children: (0, j.jsx)(l.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Email',
                            type: 'email',
                            error: !!z.email,
                            helperText: z.email ? z.email.message : '',
                            ...I('email'),
                            onBlur: (e) => q('email', e.target.value.trim())
                          })
                        }),
                        !r &&
                          (0, j.jsx)(a.ZP, {
                            item: !0,
                            xs: 4,
                            children: (0, j.jsx)(m.P, {
                              label: 'Role',
                              name: 'roleId',
                              options: A,
                              errors: z,
                              control: B
                            })
                          })
                      ]
                    })
                  }),
                  (0, j.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, j.jsx)(l.Z, {
                      required: !0,
                      fullWidth: !0,
                      label: (0, j.jsx)(c.Z, { id: 'label.username' }),
                      sx: { my: 1 },
                      error: !!z.username,
                      helperText: z.username ? z.username.message : '',
                      ...I('username'),
                      onBlur: (e) => q('username', e.target.value.trim())
                    })
                  }),
                  (0, j.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, j.jsxs)(a.ZP, {
                      container: !0,
                      columnSpacing: { xs: 1 },
                      children: [
                        (0, j.jsx)(a.ZP, {
                          item: !0,
                          xs: 6,
                          children: (0, j.jsx)(l.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Password',
                            type: 'password',
                            error: !!z.password,
                            helperText: z.password ? z.password.message : '',
                            ...I('password'),
                            onBlur: (e) => q('password', e.target.value.trim())
                          })
                        }),
                        (0, j.jsx)(a.ZP, {
                          item: !0,
                          xs: 6,
                          children: (0, j.jsx)(l.Z, {
                            required: !0,
                            fullWidth: !0,
                            label: 'Confirm Password',
                            type: 'password',
                            error: !!z.confirmPassword,
                            helperText: z.confirmPassword
                              ? z.confirmPassword.message
                              : '',
                            ...I('confirmPassword'),
                            onBlur: (e) =>
                              q('confirmPassword', e.target.value.trim())
                          })
                        })
                      ]
                    })
                  })
                ]
              }),
              !r &&
                !t &&
                (0, j.jsx)(s.Z, {
                  type: 'submit',
                  fullWidth: !0,
                  variant: 'contained',
                  sx: { mt: 3, mb: 2 },
                  loading: w,
                  children: 'Sign Up'
                })
            ]
          });
        };
    },
    64732: (e, r, t) => {
      t.d(r, { Z: () => s });
      var n = t(72791);
      const s = function (e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [t, s] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            const t = setTimeout(() => {
              s(e);
            }, r);
            return () => {
              clearTimeout(t);
            };
          }, [e, r]),
          t
        );
      };
    },
    25850: (e, r, t) => {
      t.d(r, { TY: () => i, Zd: () => a });
      var n = t(72426),
        s = t.n(n);
      const i = (e, r, t) =>
          [...e].sort((e, n) =>
            'string' === typeof e[r] && 'string' === typeof n[r]
              ? 'asc' === t
                ? e[r].localeCompare(n[r])
                : n[r].localeCompare(e[r])
              : 'number' === typeof e[r] && 'number' === typeof n[r]
              ? 'asc' === t
                ? e[r] - n[r]
                : n[r] - e[r]
              : 0
          ),
        a = (e, r) => {
          if ('to' === r) {
            return s()(e).endOf('day').utc().toISOString();
          }
          return s()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=126.25e38d44.chunk.js.map
