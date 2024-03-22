'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [687],
  {
    10173: (e, n, t) => {
      t.d(n, { Z: () => c });
      var a = t(66934),
        r = t(89164),
        i = t(697),
        l = t(20890),
        o = t(4349),
        s = t(80184);
      const d = (0, a.ZP)(r.Z)((e) => {
          let { theme: n } = e;
          return '\n        margin-top: '.concat(n.spacing(4), ';\n');
        }),
        c = () =>
          (0, s.jsx)(d, {
            className: 'footer-wrapper',
            children: (0, s.jsxs)(i.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, s.jsx)(i.Z, {
                  children: (0, s.jsxs)(l.Z, {
                    variant: 'subtitle1',
                    children: ['\xa9', (0, s.jsx)(o.Z, { id: 'footer.admin' })]
                  })
                }),
                (0, s.jsx)(l.Z, {
                  sx: { pt: { xs: 2, md: 0 } },
                  variant: 'subtitle1',
                  children: 'Crafted by BestPick Technology'
                })
              ]
            })
          });
    },
    58409: (e, n, t) => {
      t.d(n, { R: () => d });
      var a = t(72791),
        r = t(67590),
        i = t(11827),
        l = t(64732),
        o = t(80184);
      const s = (e) =>
          (e || []).map((e) => ({ id: e.id, name: e.name, value: e.id })),
        d = (e) => {
          let {
            control: n,
            name: t,
            parent: d,
            label: c = 'Agents',
            errors: u,
            ...h
          } = e;
          const [p, x] = (0, a.useState)({
              size: 20,
              page: 0,
              search: '',
              totalItems: 0,
              id: 1
            }),
            [m, g] = (0, a.useState)(''),
            j = (0, l.Z)(m, 500),
            [v, Z] = (0, a.useState)([]),
            [b, y] = (0, a.useState)({ id: '', name: '', value: '' });
          (0, a.useEffect)(() => {
            g(j), x((e) => ({ ...e, search: j }));
          }, [j]);
          const { data: f, isFetching: k } = (0, i.aN)(
            { size: p.size, page: p.page, search: p.search, id: 1 },
            { refetchOnMountOrArgChange: !0 }
          );
          function w(e) {
            const n = e.target;
            if (
              n.scrollHeight === n.scrollTop + n.clientHeight &&
              (f.data.page + 1) * f.data.size < f.data.totalItems
            )
              return x((e) => ({ ...e, page: p.page + 1 }));
          }
          (0, a.useEffect)(() => {
            x({ search: j || '', id: 1, totalItems: 0, page: 0, size: 20 }),
              Z([]);
          }, [j, d]),
            (0, a.useEffect)(
              () =>
                Z(
                  d
                    ? (e) => {
                        var n;
                        const t = [
                          ...e,
                          ...s(
                            null === f ||
                              void 0 === f ||
                              null === (n = f.data) ||
                              void 0 === n
                              ? void 0
                              : n.data
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
                        ...s(null === f || void 0 === f ? void 0 : f.data.data)
                      ]
                ),
              [f, d]
            ),
            (0, a.useEffect)(() => {
              null !== b &&
                void 0 !== b &&
                b.id &&
                Z((e) => {
                  const n = e.slice();
                  return n.unshift(b), n;
                });
            }, [b, f]);
          const C = (0, a.useMemo)(() => {
            const e = [],
              n = new Set();
            for (const t of v) n.has(t.id) || (n.add(t.id), e.push(t));
            return e;
          }, [v]);
          return (0, o.jsx)(r.P, {
            onScroll: w,
            name: t,
            label: c,
            options: C,
            control: n,
            MenuProps: {
              className: 'infinity-select',
              autoFocus: !1,
              PaperProps: { onScroll: w },
              style: { maxHeight: 500, padding: 0 }
            },
            isFetching: k,
            onSearch: g,
            searchTerm: m,
            errors: u,
            setSelected: y,
            ...h
          });
        };
    },
    17395: (e, n, t) => {
      t.d(n, { Z: () => l });
      var a = t(66934),
        r = t(80184);
      const i = (0, a.ZP)('span')((e) => {
          let { theme: n } = e;
          return '\n      background-color: '
            .concat(n.colors.alpha.black[5], ';\n      padding: ')
            .concat(n.spacing(0.5, 1), ';\n      font-size: ')
            .concat(n.typography.pxToRem(13), ';\n      border-radius: ')
            .concat(
              n.general.borderRadius,
              ';\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: '
            )
            .concat(
              n.spacing(3),
              ';\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: '
            )
            .concat(n.colors.primary.lighter, ';\n          color: ')
            .concat(
              n.palette.primary.main,
              '\n        }\n\n        &-black {\n          background-color: '
            )
            .concat(n.colors.alpha.black[100], ';\n          color: ')
            .concat(
              n.colors.alpha.white[100],
              ';\n        }\n        \n        &-secondary {\n          background-color: '
            )
            .concat(n.colors.secondary.lighter, ';\n          color: ')
            .concat(
              n.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          background-color: '
            )
            .concat(n.colors.success.lighter, ';\n          color: ')
            .concat(
              n.palette.success.main,
              '\n        }\n        \n        &-warning {\n          background-color: '
            )
            .concat(n.colors.warning.lighter, ';\n          color: ')
            .concat(
              n.palette.warning.main,
              '\n        }\n              \n        &-error {\n          background-color: '
            )
            .concat(n.colors.error.lighter, ';\n          color: ')
            .concat(
              n.palette.error.main,
              '\n        }\n        \n        &-info {\n          background-color: '
            )
            .concat(n.colors.info.lighter, ';\n          color: ')
            .concat(n.palette.info.main, '\n        }\n      }\n');
        }),
        l = (e) => {
          let { color: n = 'secondary', children: t, ...a } = e;
          return (0, r.jsx)(i, {
            className: 'MuiLabel-' + n,
            ...a,
            children: t
          });
        };
    },
    67590: (e, n, t) => {
      t.d(n, { P: () => v, n: () => Z });
      var a = t(5403),
        r = t(68096),
        i = t(94925),
        l = t(99321),
        o = t(79834),
        s = t(48550),
        d = t(63466),
        c = t(23786),
        u = t(697),
        h = t(13239),
        p = t(47071),
        x = t(72791),
        m = t(61134),
        g = t(80184);
      const j = (e) => {
          var n;
          let {
            control: t,
            name: x,
            label: j,
            options: v,
            isFetching: Z,
            errors: b,
            searchTerm: y,
            onSearch: f,
            setSelected: k,
            ...w
          } = e;
          return t
            ? (0, g.jsx)(m.Qr, {
                control: t,
                name: x,
                render: (e) => {
                  var n;
                  let { field: t } = e;
                  return (0, g.jsxs)(r.Z, {
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
                        children: j
                      }),
                      (0, g.jsxs)(l.Z, {
                        labelId: 'demo-simple-select-label',
                        id: 'demo-simple-select',
                        label: j,
                        value:
                          (null === t || void 0 === t ? void 0 : t.value) || '',
                        error:
                          !(null === b || void 0 === b || !b[x]) && !t.value,
                        ...t,
                        ...w,
                        children: [
                          f &&
                            (0, g.jsx)(o.Z, {
                              children: (0, g.jsx)(s.Z, {
                                size: 'small',
                                autoFocus: !0,
                                placeholder: 'Type to search...',
                                fullWidth: !0,
                                InputProps: {
                                  startAdornment: (0, g.jsx)(d.Z, {
                                    position: 'start',
                                    children: (0, g.jsx)(a.Z, {})
                                  })
                                },
                                value: y,
                                onChange: (e) => f(e.target.value),
                                onKeyDown: (e) => {
                                  'Escape' !== e.key && e.stopPropagation();
                                }
                              })
                            }),
                          null === v || void 0 === v
                            ? void 0
                            : v.map((e) =>
                                (0, g.jsx)(
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
                          Z &&
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
                      (null === b || void 0 === b ? void 0 : b[x]) &&
                        !t.value &&
                        (0, g.jsx)(p.Z, {
                          sx: { color: '#FF1943' },
                          children:
                            null === b ||
                            void 0 === b ||
                            null === (n = b[x]) ||
                            void 0 === n
                              ? void 0
                              : n.message
                        })
                    ]
                  });
                }
              })
            : (0, g.jsxs)(r.Z, {
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
                    children: j
                  }),
                  (0, g.jsx)(l.Z, {
                    labelId: 'demo-simple-select-label',
                    id: 'demo-simple-select',
                    label: j,
                    ...w,
                    error: !(null === b || void 0 === b || !b[x]),
                    children:
                      null === v || void 0 === v
                        ? void 0
                        : v.map((e) =>
                            (0, g.jsx)(
                              c.Z,
                              { value: e.value, children: e.name },
                              e.id
                            )
                          )
                  }),
                  !(null === b || void 0 === b || !b[x]) &&
                    (0, g.jsx)(p.Z, {
                      sx: { color: '#FF1943' },
                      children:
                        null === b ||
                        void 0 === b ||
                        null === (n = b[x]) ||
                        void 0 === n
                          ? void 0
                          : n.message
                    })
                ]
              });
        },
        v = (0, x.memo)(j),
        Z = (e) => {
          let { label: n, name: t, errors: a, register: r, ...i } = e;
          return (0, g.jsx)(s.Z, {
            label: n,
            error: !!a[t],
            helperText: a[t] ? a[t].message : '',
            fullWidth: !0,
            ...r(t),
            ...i
          });
        };
    },
    57891: (e, n, t) => {
      t.d(n, { Z: () => p });
      var a = t(53329),
        r = t(39709),
        i = t(94721),
        l = t(89164),
        o = t(94294),
        s = t(5574),
        d = t(65661),
        c = t(90493),
        u = t(4349),
        h = t(80184);
      const p = function (e) {
        let {
          title: n,
          children: t,
          open: p,
          isLoading: x = !1,
          onClose: m,
          onOk: g,
          ...j
        } = e;
        return (0, h.jsxs)(s.Z, {
          onClose: m,
          open: p,
          ...j,
          children: [
            n && (0, h.jsx)(d.Z, { variant: 'h4', children: n }),
            n && (0, h.jsx)(i.Z, {}),
            (0, h.jsx)(c.Z, { sx: { pt: 0 }, children: t }),
            (0, h.jsx)(i.Z, {}),
            (0, h.jsxs)(l.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, h.jsx)(o.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: m,
                  children: (0, h.jsx)(u.Z, { id: 'label.cancel' })
                }),
                g &&
                  (0, h.jsx)(r.Z, {
                    onClick: g,
                    loading: x,
                    loadingPosition: 'start',
                    startIcon: (0, h.jsx)(a.Z, {}),
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
    68418: (e, n, t) => {
      t.d(n, { Z: () => s });
      var a = t(66934),
        r = t(697),
        i = t(89164),
        l = t(80184);
      const o = (0, a.ZP)(r.Z)((e) => {
          let { theme: n } = e;
          return '\n        padding: '.concat(n.spacing(4), ';\n');
        }),
        s = (e) => {
          let { children: n } = e;
          return (0, l.jsx)(o, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(i.Z, { maxWidth: 'lg', children: n })
          });
        };
    },
    23481: (e, n, t) => {
      t.d(n, { Z: () => j });
      var a = t(61889),
        r = t(20890),
        i = t(697),
        l = t(94294),
        o = t(74696),
        s = t(72791),
        d = t(98333),
        c = t(93517),
        u = t(16871),
        h = t(43504),
        p = t(4349),
        x = t(80184);
      const m = (e) => {
          let { links: n = [] } = e;
          const t = (0, u.TH)();
          return (0, x.jsx)(c.Z, {
            separator: (0, x.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: n.map((e, a) =>
              a === n.length - 1
                ? (0, x.jsx)(
                    r.Z,
                    {
                      color: 'inherit',
                      children: (0, x.jsx)(p.Z, { id: e.name })
                    },
                    a
                  )
                : (0, x.jsx)(
                    h.rU,
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
                      children: (0, x.jsx)(r.Z, {
                        color: 'inherit',
                        children: (0, x.jsx)(p.Z, { id: e.name })
                      })
                    },
                    a
                  )
            )
          });
        },
        g = (e) => {
          let {
            headerTitle: n,
            headerSubtitle: t,
            breadcrumbs: s,
            onOpenModal: d
          } = e;
          return (0, x.jsxs)(a.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, x.jsxs)(a.ZP, {
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
                    (0, x.jsx)(i.Z, {
                      marginTop: '8px',
                      children: (0, x.jsx)(m, { links: s })
                    })
                ]
              }),
              d &&
                (0, x.jsx)(a.ZP, {
                  item: !0,
                  children: (0, x.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, x.jsx)(o.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, x.jsx)(p.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        j = (0, s.memo)(g);
    },
    96790: (e, n, t) => {
      t.d(n, { Z: () => ee });
      var a = t(89164),
        r = t(61889),
        i = t(72791),
        l = t(6907),
        o = t(93539),
        s = t(10173),
        d = t(68418),
        c = t(23481),
        u = t(30168),
        h = t(68036),
        p = t(31675),
        x = t(5403),
        m = t(21686),
        g = t(39709),
        j = t(66934),
        v = t(13967),
        Z = t(97639),
        b = t(20890),
        y = t(94294),
        f = t(13400),
        k = t(57621),
        w = t(697),
        C = t(94721),
        S = t(48550),
        P = t(39281),
        I = t(79836),
        F = t(91048),
        T = t(35855),
        O = t(53994),
        B = t(94454),
        z = t(80720),
        A = t(53382),
        W = t(13239),
        D = t(63033),
        M = t(87837),
        R = t(71715),
        E = t(90493),
        L = t(15021),
        N = t(49900),
        H = t(74934),
        q = t(80184);
      const U = (0, j.ZP)(y.Z)((e) => {
          let { theme: n } = e;
          return '\n     background: '
            .concat(n.colors.error.main, ';\n     color: ')
            .concat(
              n.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(n.colors.error.dark, ';\n     }\n    ');
        }),
        _ = () => {
          const { toggle: e, visible: n } = (0, M.d)(),
            t = (0, i.useRef)(null);
          return (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsxs)(w.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, q.jsxs)(w.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, q.jsx)(b.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, q.jsx)(U, {
                        sx: { ml: 1 },
                        startIcon: (0, q.jsx)(h.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, q.jsx)(f.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: t,
                    sx: { ml: 2, p: 1 },
                    children: (0, q.jsx)(H.Z, {})
                  })
                ]
              }),
              (0, q.jsx)(R.Z, {
                keepMounted: !0,
                anchorEl: t.current,
                open: n,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, q.jsxs)(E.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, q.jsx)(L.ZP, {
                      button: !0,
                      children: (0, q.jsx)(N.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, q.jsx)(L.ZP, {
                      button: !0,
                      children: (0, q.jsx)(N.Z, {
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
        J = t(92810),
        V = t(64732),
        Y = t(4349);
      const Q = (0, j.ZP)(g.Z)(
          K ||
            (K = (0, u.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        X = (e) => {
          let {
            data: n,
            tableHeader: t,
            isLoading: r,
            pagination: l,
            totalItems: o = 0,
            tableFilter: s,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: u,
            onDelete: g,
            onUpdate: j,
            onPagination: R
          } = e;
          const E = (0, v.Z)(),
            { visible: L, show: N, hide: H } = (0, M.d)(),
            [U, K] = (0, i.useState)(''),
            [X, G] = (0, i.useState)([]),
            [$, ee] = (0, i.useState)(''),
            ne = (0, V.Z)($, 500);
          (0, i.useEffect)(() => {
            R({ ...l, search: ne });
          }, [ne]);
          const te = X.length > 0 && X.length < n.length,
            ae = X.length === n.length,
            re = (e) => {
              N(), K(e);
            },
            ie = (e) => {
              g(e), H();
            },
            le = (0, i.useMemo)(
              () => (g || j || '' !== t[t.length - 1].name || t.pop(), t),
              [g, j, t]
            ),
            oe = (e) => {
              let {
                item: n,
                hide: t,
                onDelete: r,
                handleShow: i,
                rowId: l,
                visible: o,
                theme: s,
                isLoading: d
              } = e;
              return (0, q.jsx)(Z.Z, {
                title: (0, q.jsxs)(a.Z, {
                  children: [
                    (0, q.jsx)(b.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, q.jsxs)(a.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, q.jsx)(y.Z, {
                          variant: 'outlined',
                          onClick: t,
                          children: 'No'
                        }),
                        (0, q.jsx)(Q, {
                          onClick: () => ie(n.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, q.jsx)(m.Z, {}),
                          variant: 'contained',
                          sx: { width: '80px' },
                          children: 'Yes'
                        })
                      ]
                    })
                  ]
                }),
                arrow: !0,
                open: n.id === l && o && !d,
                disableFocusListener: !0,
                disableHoverListener: !0,
                disableTouchListener: !0,
                PopperProps: { disablePortal: !0 },
                children: (0, q.jsx)(f.Z, {
                  sx: {
                    '&:hover': { background: s.colors.error.lighter },
                    color: s.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => i(n.id),
                  children: (0, q.jsx)(h.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, q.jsxs)(k.Z, {
            children: [
              c &&
                (null === X || void 0 === X ? void 0 : X.length) > 0 &&
                (0, q.jsx)(w.Z, { flex: 1, p: 2, children: (0, q.jsx)(_, {}) }),
              (0, q.jsx)(C.Z, {}),
              (0, q.jsxs)(k.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, q.jsxs)(w.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, q.jsx)(S.Z, {
                        label: (0, q.jsx)(Y.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, q.jsx)(f.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, q.jsx)(x.Z, {})
                      })
                    ]
                  }),
                  (0, q.jsx)(w.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === s || void 0 === s
                        ? void 0
                        : s.map((e, n) => (0, q.jsx)(w.Z, { children: e }, n))
                  })
                ]
              }),
              (0, q.jsx)(P.Z, {
                children: (0, q.jsxs)(I.Z, {
                  children: [
                    (0, q.jsx)(F.Z, {
                      children: (0, q.jsxs)(T.Z, {
                        children: [
                          c &&
                            (0, q.jsx)(O.Z, {
                              padding: 'checkbox',
                              children: (0, q.jsx)(B.Z, {
                                color: 'primary',
                                checked: ae,
                                indeterminate: te,
                                onChange: (e) => {
                                  G(e.target.checked ? n.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, n) =>
                            (0, q.jsx)(
                              O.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, q.jsx)(z.Z, {
                                      active: l.sortBy === n,
                                      direction:
                                        l.sortBy === n
                                          ? l.sortDirection
                                          : 'asc',
                                      onClick: () =>
                                        ((e) => {
                                          const n = {
                                            ...l,
                                            sortBy: e,
                                            sortDirection:
                                              l.sortBy === e &&
                                              'asc' === l.sortDirection
                                                ? 'desc'
                                                : 'asc'
                                          };
                                          R(n);
                                        })(n),
                                      children: (0, q.jsx)(Y.Z, { id: e.title })
                                    })
                                  : (0, q.jsx)(Y.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, J.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, q.jsxs)(A.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !n || n.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        n.map((e) => {
                          var n;
                          const t = X.includes(e.id);
                          return (0, q.jsxs)(
                            T.Z,
                            {
                              hover: !0,
                              selected: t,
                              children: [
                                c &&
                                  (0, q.jsx)(
                                    O.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, q.jsx)(B.Z, {
                                        color: 'primary',
                                        checked: t,
                                        onChange: (n) => {
                                          return (
                                            (t = e.id),
                                            void (X.includes(t)
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
                                    (0, J.Z)()
                                  ),
                                null === (n = u(e)) || void 0 === n
                                  ? void 0
                                  : n.map((e) =>
                                      (0, q.jsx)(
                                        O.Z,
                                        {
                                          align: e.align,
                                          sx: { ...e.tableProps },
                                          children: e.children
                                        },
                                        (0, J.Z)()
                                      )
                                    ),
                                (j || g) &&
                                  (0, q.jsxs)(
                                    O.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, q.jsx)(Z.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        j &&
                                          (0, q.jsx)(Z.Z, {
                                            title: (0, q.jsx)(Y.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, q.jsx)(f.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    E.colors.primary.lighter
                                                },
                                                color: E.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => j(e.id),
                                              children: (0, q.jsx)(p.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        g &&
                                          oe({
                                            item: e,
                                            rowId: U,
                                            visible: L,
                                            theme: E,
                                            isLoading: r,
                                            handleShow: re,
                                            onDelete: g,
                                            hide: H
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
                        r &&
                          (0, q.jsx)(T.Z, {
                            children: (0, q.jsx)(O.Z, {
                              children: (0, q.jsx)(w.Z, {
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
              (0, q.jsx)(w.Z, {
                p: 2,
                children: (0, q.jsx)(D.Z, {
                  component: 'div',
                  count: o,
                  onPageChange: (e, n) => {
                    R({ ...l, page: n });
                  },
                  onRowsPerPageChange: (e) => {
                    R({ ...l, size: Number(e.target.value) });
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
        G = (0, i.memo)(X),
        $ = (e) => {
          let {
            title: n,
            data: t = [],
            tableHeader: i = [{ align: 'inherit', title: 'Title' }],
            headerTitle: u = '',
            headerSubtitle: h = '',
            isLoading: p = !1,
            breadcrumbs: x,
            pagination: m,
            tableFilter: g,
            totalItems: j,
            extraOptions: v,
            isShowBulkActions: Z = !0,
            onOpenModal: b,
            tableBody: y,
            onDelete: f,
            onUpdate: k,
            onPagination: w
          } = e;
          const C = (0, o.Z)();
          return (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(l.ql, {
                children: (0, q.jsx)('title', {
                  children: C.formatMessage({ id: n })
                })
              }),
              (0, q.jsx)(d.Z, {
                children: (0, q.jsx)(c.Z, {
                  headerTitle: u,
                  headerSubtitle: h,
                  onOpenModal: b,
                  breadcrumbs: x
                })
              }),
              (0, q.jsx)(a.Z, {
                maxWidth: 'lg',
                children: (0, q.jsx)(r.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, q.jsx)(r.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, q.jsx)(G, {
                      data: t,
                      totalItems: j,
                      tableHeader: i,
                      tableBody: y,
                      isLoading: p,
                      onDelete: f,
                      onUpdate: k,
                      onPagination: w,
                      pagination: m,
                      tableFilter: g,
                      extraOptions: v,
                      isShowBulkActions: Z
                    })
                  })
                })
              }),
              (0, q.jsx)(s.Z, {})
            ]
          });
        },
        ee = (0, i.memo)($);
    },
    71371: (e, n, t) => {
      t.d(n, { s: () => a });
      const a = [
        'win',
        'bet',
        'cancel',
        'deposit',
        'withdraw',
        'user.add_balance',
        'agent.add_balance'
      ];
    },
    72687: (e, n, t) => {
      t.r(n), t.d(n, { default: () => U });
      var a = t(72791),
        r = t(96790),
        i = t(32302),
        l = t(25850),
        o = t(87837),
        s = t(44695),
        d = t(697),
        c = t(61134),
        u = t(4349),
        h = t(67590),
        p = t(58409),
        x = t(57891),
        m = t(71371),
        g = t(14167),
        j = t(8007),
        v = t(80184);
      const Z = m.s
          .map((e) => ({
            id: e,
            value: e,
            name: ''.concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
          }))
          .filter((e) => e.id.includes('agent.add_balance')),
        b = j.Ry().shape({
          userId: j.Z_().required('Users is required!'),
          currencyId: j
            .Rx()
            .moreThan(0, 'Currency is required!')
            .typeError('Currency is required!')
            .required('Currency is required!'),
          amount: j
            .Rx()
            .moreThan(0, 'Amount must be greater than 0')
            .typeError('Amount must be a number')
            .required('Amount is required!'),
          token: j.Z_(),
          note: j.Z_(),
          type: j.Z_().required('Type is required!')
        }),
        y = (e) => {
          let { open: n, detail: t, onClose: r, refetch: l } = e;
          const { notify: m, message: j } = (0, o.p)(),
            { data: y } = (0, g.K4)(
              {},
              { refetchOnMountOrArgChange: !0, skip: !n }
            ),
            {
              register: f,
              setValue: k,
              reset: w,
              handleSubmit: C,
              clearErrors: S,
              control: P,
              formState: { errors: I }
            } = (0, c.cI)({
              resolver: (0, s.X)(b),
              defaultValues: {
                userId: '',
                amount: 0,
                currencyId: 0,
                token: '',
                note: '',
                type: ''
              }
            }),
            [F] = (0, i.Dx)();
          (0, a.useEffect)(() => {
            if (null === t || void 0 === t || !t.id) return w();
            k('userId', null === t || void 0 === t ? void 0 : t.userId),
              k(
                'amount',
                Number(null === t || void 0 === t ? void 0 : t.amount)
              ),
              k(
                'currencyId',
                Number(null === t || void 0 === t ? void 0 : t.currencyId)
              ),
              k('token', null === t || void 0 === t ? void 0 : t.token),
              k('note', null === t || void 0 === t ? void 0 : t.note),
              k('type', null === t || void 0 === t ? void 0 : t.type);
          }, [t]);
          const T = (0, a.useMemo)(
            () =>
              null === y || void 0 === y
                ? void 0
                : y.map((e) => ({
                    id: String(e.id),
                    name: String(e.name),
                    value: String(e.id)
                  })),
            [y]
          );
          return (0, v.jsx)(x.Z, {
            title:
              null !== t && void 0 !== t && t.id ? 'View' : 'Add Transaction',
            onClose: () => {
              r(), S();
            },
            open: n,
            onOk:
              !(null !== t && void 0 !== t && t.id) &&
              C(async (e) => {
                try {
                  (await F(e).unwrap()) &&
                    (m({ message: j.CREATED }), w(), r(), l());
                } catch (n) {
                  m({ message: n.data.message, type: 'error' });
                }
              }),
            fullWidth: !0,
            children: (0, v.jsx)(d.Z, {
              component: 'form',
              id: 'form-transaction',
              children: (0, v.jsxs)('div', {
                className: 'block',
                children: [
                  (0, v.jsx)(d.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, v.jsx)(p.R, {
                      name: 'userId',
                      control: P,
                      label: 'User',
                      ...((null === t || void 0 === t ? void 0 : t.id) && {
                        parent: {
                          id: null === t || void 0 === t ? void 0 : t.userId,
                          name:
                            null === t || void 0 === t ? void 0 : t.username,
                          value: null === t || void 0 === t ? void 0 : t.userId
                        }
                      }),
                      readOnly: !(null === t || void 0 === t || !t.id),
                      errors: I
                    })
                  }),
                  (0, v.jsxs)(d.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: [
                      (0, v.jsx)(h.n, {
                        name: 'amount',
                        label: 'Amount',
                        errors: I,
                        register: f,
                        type: 'number',
                        InputProps: {
                          readOnly: !(null === t || void 0 === t || !t.id)
                        }
                      }),
                      (0, v.jsx)(h.P, {
                        label: 'Currency',
                        name: 'currencyId',
                        control: P,
                        options: T,
                        readOnly: !(null === t || void 0 === t || !t.id),
                        errors: I
                      })
                    ]
                  }),
                  (0, v.jsx)(d.Z, {
                    display: 'flex',
                    gap: '1rem',
                    sx: { my: 2 },
                    children: (0, v.jsx)(h.P, {
                      name: 'type',
                      label: (0, v.jsx)(u.Z, { id: 'label.type' }),
                      control: P,
                      options: Z,
                      readOnly: !(null === t || void 0 === t || !t.id),
                      errors: I
                    })
                  }),
                  (0, v.jsx)(h.n, {
                    multiline: !0,
                    rows: 2,
                    name: 'token',
                    errors: I,
                    register: f,
                    label: 'Token',
                    InputProps: {
                      readOnly: !(null === t || void 0 === t || !t.id)
                    }
                  }),
                  (0, v.jsx)(h.n, {
                    sx: { my: 2 },
                    multiline: !0,
                    rows: 2,
                    name: 'note',
                    errors: I,
                    register: f,
                    label: 'Note',
                    InputProps: {
                      readOnly: !(null === t || void 0 === t || !t.id)
                    }
                  })
                ]
              })
            })
          });
        },
        f = (0, a.memo)(y);
      var k = t(20890),
        w = t(68096),
        C = t(94925),
        S = t(99321),
        P = t(23786),
        I = t(94294),
        F = t(66934),
        T = t(50533),
        O = t(82970),
        B = t(80946),
        z = t(98673),
        A = t(16871),
        W = (t(17395), t(39709)),
        D = t(61889),
        M = t(36314),
        R = t(48605),
        E = t(48550);
      const L = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: 4,
          p: 2,
          borderRadius: 1
        },
        N = (e) => {
          let n = !1;
          const { role: t } = JSON.parse(localStorage.getItem('user'));
          'admin' === t.name && (n = !0);
          const { notify: r } = (0, o.p)(),
            { id: l, status: s, method: c, callbackId: u } = e,
            [h] = (0, i.NK)(),
            [p, x] = (0, a.useState)(!1),
            [m, g] = (0, a.useState)(s),
            [j, Z] = (0, a.useState)(!1),
            [b, y] = (0, a.useState)({
              username: '',
              amount: 0,
              transaction: {}
            });
          (0, a.useEffect)(() => {
            g(s), 'seamless' === c && Z(!0);
          }, []);
          const [f] = (0, i.zq)(),
            [k, w] = (0, a.useState)(!1),
            C = () => {
              w(!1);
            };
          return (0, v.jsx)(v.Fragment, {
            children:
              n && 'pending' === m
                ? (0, v.jsxs)(D.ZP, {
                    container: !0,
                    children: [
                      (0, v.jsx)(D.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, v.jsx)(W.Z, {
                          loading: p,
                          variant: 'contained',
                          color: 'success',
                          onClick: () =>
                            (async () => {
                              x(!0);
                              const { data: e } = await h({
                                id: l,
                                body: { action: 'approved' }
                              }).unwrap();
                              null !== e &&
                                void 0 !== e &&
                                e.action &&
                                (g(
                                  null === e || void 0 === e ? void 0 : e.action
                                ),
                                x(!1),
                                r({
                                  message: 'Remaining Balance: '
                                    .concat(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.balance,
                                      ' | Status: '
                                    )
                                    .concat(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.action
                                    )
                                }));
                            })(),
                          children: 'Approve'
                        })
                      }),
                      (0, v.jsx)(D.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, v.jsx)(W.Z, {
                          loading: p,
                          variant: 'outlined',
                          color: 'error',
                          onClick: () =>
                            (async () => {
                              x(!0);
                              const { data: e } = await h({
                                id: l,
                                body: { action: 'rejected' }
                              }).unwrap();
                              null !== e &&
                                void 0 !== e &&
                                e.action &&
                                (g(
                                  null === e || void 0 === e ? void 0 : e.action
                                ),
                                x(!1),
                                r({
                                  message: 'Remaining Balance: '
                                    .concat(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.balance,
                                      ' | Status: '
                                    )
                                    .concat(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.action
                                    )
                                }));
                            })(),
                          children: 'Reject'
                        })
                      })
                    ]
                  })
                : 'pending' === m
                ? (0, v.jsx)(D.ZP, {
                    container: !0,
                    children: (0, v.jsx)(D.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, v.jsx)(W.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'secondary',
                        children: 'Pending'
                      })
                    })
                  })
                : 'rejected' === m
                ? (0, v.jsx)(D.ZP, {
                    container: !0,
                    children: (0, v.jsx)(D.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, v.jsx)(W.Z, {
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'error',
                        children: 'Rejected'
                      })
                    })
                  })
                : (0, v.jsxs)(M.Z, {
                    spacing: { xs: 1, sm: 2 },
                    direction: 'row',
                    flexWrap: 'wrap',
                    children: [
                      (0, v.jsx)(W.Z, {
                        sx: { flex: 1 },
                        fullWidth: !0,
                        variant: 'outlined',
                        color: 'success',
                        children: 'Approved'
                      }),
                      j &&
                        (0, v.jsx)(W.Z, {
                          sx: { flex: 1 },
                          fullWidth: !0,
                          variant: 'outlined',
                          color: 'info',
                          onClick: async () => {
                            const e = await f({ id: u });
                            if ('data' in e) {
                              const { data: n } = e.data;
                              y(n);
                            }
                            w(!0);
                          },
                          children: 'Details'
                        }),
                      (0, v.jsx)(R.Z, {
                        open: k,
                        onClose: C,
                        'aria-labelledby': 'modal-modal-title',
                        'aria-describedby': 'modal-modal-description',
                        children: (0, v.jsxs)(d.Z, {
                          sx: L,
                          children: [
                            (0, v.jsx)(E.Z, {
                              label: 'Username',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: b.username
                            }),
                            (0, v.jsx)(E.Z, {
                              label: 'Amount',
                              variant: 'outlined',
                              fullWidth: !0,
                              value: b.amount
                            }),
                            (0, v.jsxs)('div', {
                              children: [
                                (0, v.jsx)('p', { children: 'JSON Data:' }),
                                (0, v.jsx)('pre', {
                                  children: JSON.stringify(
                                    b.transaction,
                                    null,
                                    2
                                  )
                                })
                              ]
                            }),
                            (0, v.jsx)(I.Z, {
                              fullWidth: !0,
                              variant: 'outlined',
                              onClick: C,
                              children: 'Close'
                            })
                          ]
                        })
                      })
                    ]
                  })
          });
        },
        H = () => {
          let e = !1,
            n = !1;
          'agent.add_balance' ===
            new URLSearchParams(window.location.search).get('type') && (n = !0);
          const { role: t } = JSON.parse(localStorage.getItem('user'));
          'admin' === t.name && (e = !0);
          (0, A.s0)();
          return {
            tableBody: (e) => [
              {
                align: 'inherit',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(k.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.username
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(k.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.amount
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(k.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: ''
                      .concat(e.type.slice(0, 1).toUpperCase())
                      .concat(e.type.slice(1))
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(k.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.method
                  })
                })
              },
              {
                align: 'right',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(k.Z, {
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                      (0, B.Z)(
                        (0, z.Z)(
                          null === e || void 0 === e ? void 0 : e.updatedAt
                        ),
                        'dd/MM/yyyy HH:mm'
                      )
                  })
                })
              },
              {
                align: 'center',
                children: (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(N, {
                    id: null === e || void 0 === e ? void 0 : e.id,
                    status: null === e || void 0 === e ? void 0 : e.status,
                    method: null === e || void 0 === e ? void 0 : e.method,
                    callbackId:
                      null === e || void 0 === e ? void 0 : e.callbackId
                  })
                })
              }
            ],
            tableHeader: [
              { align: 'inherit', title: 'label.username', name: 'username' },
              { align: 'right', title: 'label.amount', name: 'amount' },
              { align: 'right', title: 'label.type', name: 'type' },
              { align: 'right', title: 'label.method', name: 'method' },
              { align: 'right', title: 'label.updated.at', name: 'updatedAt' },
              { align: 'center', title: 'label.status', name: 'updatedAt' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: (t) => {
              let { type: a, dateFrom: r, dateTo: i } = t;
              return [
                (0, v.jsx)(O.M, {
                  label: (0, v.jsx)(u.Z, { id: 'label.from' }),
                  onChange: r.onChange
                }),
                (0, v.jsx)(O.M, {
                  label: (0, v.jsx)(u.Z, { id: 'label.to' }),
                  onChange: i.onChange
                }),
                (0, v.jsxs)(w.Z, {
                  sx: { maxWidth: 140, width: 140 },
                  children: [
                    (0, v.jsx)(C.Z, {
                      id: 'Type',
                      children: (0, v.jsx)(u.Z, { id: 'label.type' })
                    }),
                    (0, v.jsxs)(S.Z, {
                      labelId: 'Type',
                      value: a.value,
                      label: (0, v.jsx)(u.Z, { id: 'label.type' }),
                      onChange: (e) => a.onChange(e.target.value),
                      children: [
                        (0, v.jsx)(P.Z, {
                          value: '',
                          children: (0, v.jsx)('em', { children: 'Default' })
                        }),
                        m.s.map((e) =>
                          (0, v.jsx)(
                            P.Z,
                            {
                              value: e,
                              children: ''
                                .concat(e.slice(0, 1).toUpperCase())
                                .concat(e.slice(1))
                            },
                            e
                          )
                        )
                      ]
                    })
                  ]
                }),
                (0, v.jsx)(v.Fragment, {
                  children:
                    e && !1 === n
                      ? (0, v.jsx)(I.Z, {
                          href: '?type=agent.add_balance',
                          variant: 'outlined',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, v.jsx)(u.Z, { id: 'label.See-request' })
                        })
                      : n && !0 === e
                      ? (0, v.jsx)(I.Z, {
                          href: '?type=',
                          variant: 'outlined',
                          color: 'secondary',
                          sx: { whiteSpace: 'nowrap', height: '53.13px' },
                          children: (0, v.jsx)(u.Z, { id: 'label.See-all' })
                        })
                      : null
                })
              ];
            }
          };
        },
        q =
          ((0, F.ZP)(T.Z)((e) => {
            let { theme: n } = e;
            return '\n  color: '.concat(
              n.colors.info.dark,
              ';\n  cursor: pointer;\n'
            );
          }),
          'title.transactions-management'),
        U = () => {
          const e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: q }
            ],
            { visible: n, hide: t, show: s } = (0, o.d)(),
            { notify: d, message: c } = (0, o.p)(),
            { tableBody: u, tableHeader: h, tableFilter: p } = H(),
            [x, m] = (0, a.useState)([]),
            [g, j] = (0, a.useState)(),
            [Z, b] = (0, a.useState)({
              page: 0,
              size: 10,
              status: '',
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              type: '',
              dateFrom: '',
              dateTo: ''
            }),
            [y] = (0, i.wv)(),
            {
              data: k,
              isFetching: w,
              refetch: C
            } = (0, i.ez)(
              {
                page: Z.page,
                size: Z.size,
                search: Z.search,
                dateFrom: Z.dateFrom,
                dateTo: Z.dateTo,
                status: Z.status,
                type: Z.type
              },
              { refetchOnMountOrArgChange: !0, pollingInterval: 5e3 }
            );
          (0, a.useEffect)(() => {
            const e = new URLSearchParams(window.location.search).get('type');
            'agent.add_balance' === e &&
              b({ ...Z, type: e, status: 'pending' });
          }, []),
            (0, a.useEffect)(() => {
              k &&
                m(() => {
                  var e;
                  return (0, l.TY)(
                    k.data.data,
                    null === (e = h[Z.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    Z.sortDirection
                  );
                });
            }, [k, Z.sortBy, Z.sortDirection]);
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(r.Z, {
                title: q,
                data: x,
                totalItems:
                  null === k || void 0 === k ? void 0 : k.data.totalItems,
                tableHeader: h,
                tableBody: u,
                headerTitle: q,
                breadcrumbs: e,
                onOpenModal: () => {
                  s(), j(null);
                },
                isLoading: w,
                onUpdate: async (e) => {
                  try {
                    const n = await y({ id: e }).unwrap();
                    s(), j(n.data);
                  } catch (n) {
                    d({ message: c.ERROR, type: 'error' });
                  }
                },
                pagination: Z,
                onPagination: b,
                tableFilter: p({
                  type: {
                    value: Z.type,
                    onChange: (e) => b({ ...Z, type: e })
                  },
                  dateFrom: {
                    value: Z.dateFrom,
                    onChange: (e) => b({ ...Z, dateFrom: (0, l.Zd)(e, 'from') })
                  },
                  dateTo: {
                    value: Z.dateTo,
                    onChange: (e) => b({ ...Z, dateTo: (0, l.Zd)(e, 'to') })
                  }
                }),
                isShowBulkActions: !1
              }),
              (0, v.jsx)(f, { open: n, detail: g, onClose: t, refetch: C })
            ]
          });
        };
    },
    64732: (e, n, t) => {
      t.d(n, { Z: () => r });
      var a = t(72791);
      const r = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [t, r] = (0, a.useState)(e);
        return (
          (0, a.useEffect)(() => {
            const t = setTimeout(() => {
              r(e);
            }, n);
            return () => {
              clearTimeout(t);
            };
          }, [e, n]),
          t
        );
      };
    },
    25850: (e, n, t) => {
      t.d(n, { TY: () => i, Zd: () => l });
      var a = t(72426),
        r = t.n(a);
      const i = (e, n, t) =>
          [...e].sort((e, a) =>
            'string' === typeof e[n] && 'string' === typeof a[n]
              ? 'asc' === t
                ? e[n].localeCompare(a[n])
                : a[n].localeCompare(e[n])
              : 'number' === typeof e[n] && 'number' === typeof a[n]
              ? 'asc' === t
                ? e[n] - a[n]
                : a[n] - e[n]
              : 0
          ),
        l = (e, n) => {
          if ('to' === n) {
            return r()(e).endOf('day').utc().toISOString();
          }
          return r()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=687.ff394b5a.chunk.js.map
