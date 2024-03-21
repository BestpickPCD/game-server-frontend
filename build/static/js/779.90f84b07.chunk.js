'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [779],
  {
    10173: (e, t, n) => {
      n.d(t, { Z: () => c });
      var i = n(66934),
        a = n(89164),
        r = n(697),
        l = n(20890),
        s = n(4349),
        o = n(80184);
      const d = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        margin-top: '.concat(t.spacing(4), ';\n');
        }),
        c = () =>
          (0, o.jsx)(d, {
            className: 'footer-wrapper',
            children: (0, o.jsxs)(r.Z, {
              pb: 4,
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              justifyContent: 'space-between',
              children: [
                (0, o.jsx)(r.Z, {
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
    57891: (e, t, n) => {
      n.d(t, { Z: () => p });
      var i = n(53329),
        a = n(39709),
        r = n(94721),
        l = n(89164),
        s = n(94294),
        o = n(5574),
        d = n(65661),
        c = n(90493),
        h = n(4349),
        x = n(80184);
      const p = function (e) {
        let {
          title: t,
          children: n,
          open: p,
          isLoading: u = !1,
          onClose: g,
          onOk: m,
          ...j
        } = e;
        return (0, x.jsxs)(o.Z, {
          onClose: g,
          open: p,
          ...j,
          children: [
            t && (0, x.jsx)(d.Z, { variant: 'h4', children: t }),
            t && (0, x.jsx)(r.Z, {}),
            (0, x.jsx)(c.Z, { sx: { pt: 0 }, children: n }),
            (0, x.jsx)(r.Z, {}),
            (0, x.jsxs)(l.Z, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                padding: '12px 0'
              },
              children: [
                (0, x.jsx)(s.Z, {
                  variant: 'outlined',
                  sx: { width: '90px' },
                  onClick: g,
                  children: (0, x.jsx)(h.Z, { id: 'label.cancel' })
                }),
                m &&
                  (0, x.jsx)(a.Z, {
                    onClick: m,
                    loading: u,
                    loadingPosition: 'start',
                    startIcon: (0, x.jsx)(i.Z, {}),
                    variant: 'contained',
                    sx: { width: '90px' },
                    type: 'submit',
                    children: (0, x.jsx)(h.Z, { id: 'label.OK' })
                  })
              ]
            })
          ]
        });
      };
    },
    68418: (e, t, n) => {
      n.d(t, { Z: () => o });
      var i = n(66934),
        a = n(697),
        r = n(89164),
        l = n(80184);
      const s = (0, i.ZP)(a.Z)((e) => {
          let { theme: t } = e;
          return '\n        padding: '.concat(t.spacing(4), ';\n');
        }),
        o = (e) => {
          let { children: t } = e;
          return (0, l.jsx)(s, {
            className: 'MuiPageTitle-wrapper',
            children: (0, l.jsx)(r.Z, { maxWidth: 'lg', children: t })
          });
        };
    },
    23481: (e, t, n) => {
      n.d(t, { Z: () => j });
      var i = n(61889),
        a = n(20890),
        r = n(697),
        l = n(94294),
        s = n(74696),
        o = n(72791),
        d = n(98333),
        c = n(93517),
        h = n(16871),
        x = n(43504),
        p = n(4349),
        u = n(80184);
      const g = (e) => {
          let { links: t = [] } = e;
          const n = (0, h.TH)();
          return (0, u.jsx)(c.Z, {
            separator: (0, u.jsx)(d.Z, { fontSize: 'small' }),
            'aria-label': 'breadcrumb',
            children: t.map((e, i) =>
              i === t.length - 1
                ? (0, u.jsx)(
                    a.Z,
                    {
                      color: 'inherit',
                      children: (0, u.jsx)(p.Z, { id: e.name })
                    },
                    i
                  )
                : (0, u.jsx)(
                    x.rU,
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
                      children: (0, u.jsx)(a.Z, {
                        color: 'inherit',
                        children: (0, u.jsx)(p.Z, { id: e.name })
                      })
                    },
                    i
                  )
            )
          });
        },
        m = (e) => {
          let {
            headerTitle: t,
            headerSubtitle: n,
            breadcrumbs: o,
            onOpenModal: d
          } = e;
          return (0, u.jsxs)(i.ZP, {
            container: !0,
            justifyContent: 'space-between',
            alignItems: 'center',
            children: [
              (0, u.jsxs)(i.ZP, {
                item: !0,
                children: [
                  (0, u.jsx)(a.Z, {
                    variant: 'h3',
                    component: 'h3',
                    gutterBottom: !0,
                    children: (0, u.jsx)(p.Z, { id: t })
                  }),
                  (0, u.jsx)(a.Z, { variant: 'subtitle2', children: n }),
                  o &&
                    (0, u.jsx)(r.Z, {
                      marginTop: '8px',
                      children: (0, u.jsx)(g, { links: o })
                    })
                ]
              }),
              d &&
                (0, u.jsx)(i.ZP, {
                  item: !0,
                  children: (0, u.jsx)(l.Z, {
                    sx: { mt: { xs: 2, md: 0 } },
                    variant: 'contained',
                    startIcon: (0, u.jsx)(s.Z, { fontSize: 'small' }),
                    onClick: d,
                    children: (0, u.jsx)(p.Z, { id: 'label.create' })
                  })
                })
            ]
          });
        },
        j = (0, o.memo)(m);
    },
    96790: (e, t, n) => {
      n.d(t, { Z: () => ee });
      var i = n(89164),
        a = n(61889),
        r = n(72791),
        l = n(6907),
        s = n(93539),
        o = n(10173),
        d = n(68418),
        c = n(23481),
        h = n(30168),
        x = n(68036),
        p = n(31675),
        u = n(5403),
        g = n(21686),
        m = n(39709),
        j = n(66934),
        Z = n(13967),
        b = n(97639),
        y = n(20890),
        f = n(94294),
        v = n(13400),
        k = n(57621),
        C = n(697),
        w = n(94721),
        P = n(48550),
        I = n(39281),
        S = n(79836),
        T = n(91048),
        F = n(35855),
        B = n(53994),
        D = n(94454),
        O = n(80720),
        L = n(53382),
        E = n(13239),
        R = n(63033),
        z = n(87837),
        A = n(71715),
        W = n(90493),
        q = n(15021),
        M = n(49900),
        H = n(74934),
        U = n(80184);
      const _ = (0, j.ZP)(f.Z)((e) => {
          let { theme: t } = e;
          return '\n     background: '
            .concat(t.colors.error.main, ';\n     color: ')
            .concat(
              t.palette.error.contrastText,
              ';\n\n     &:hover {\n        background: '
            )
            .concat(t.colors.error.dark, ';\n     }\n    ');
        }),
        N = () => {
          const { toggle: e, visible: t } = (0, z.d)(),
            n = (0, r.useRef)(null);
          return (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsxs)(C.Z, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, U.jsxs)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, U.jsx)(y.Z, {
                        variant: 'h5',
                        color: 'text.secondary',
                        children: 'Bulk actions:'
                      }),
                      (0, U.jsx)(_, {
                        sx: { ml: 1 },
                        startIcon: (0, U.jsx)(x.Z, {}),
                        variant: 'contained',
                        children: 'Delete'
                      })
                    ]
                  }),
                  (0, U.jsx)(v.Z, {
                    color: 'primary',
                    onClick: e,
                    ref: n,
                    sx: { ml: 2, p: 1 },
                    children: (0, U.jsx)(H.Z, {})
                  })
                ]
              }),
              (0, U.jsx)(A.Z, {
                keepMounted: !0,
                anchorEl: n.current,
                open: t,
                onClose: e,
                anchorOrigin: { vertical: 'center', horizontal: 'center' },
                transformOrigin: { vertical: 'center', horizontal: 'center' },
                children: (0, U.jsxs)(W.Z, {
                  sx: { p: 1 },
                  component: 'nav',
                  children: [
                    (0, U.jsx)(q.ZP, {
                      button: !0,
                      children: (0, U.jsx)(M.Z, {
                        primary: 'Bulk delete selected'
                      })
                    }),
                    (0, U.jsx)(q.ZP, {
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
      var G,
        V = n(92810),
        Y = n(64732),
        K = n(4349);
      const X = (0, j.ZP)(m.Z)(
          G ||
            (G = (0, h.Z)([
              '\n  background: #5569ff !important;\n  color: white !important;\n'
            ]))
        ),
        J = (e) => {
          let {
            data: t,
            tableHeader: n,
            isLoading: a,
            pagination: l,
            totalItems: s = 0,
            tableFilter: o,
            extraOptions: d,
            isShowBulkActions: c,
            tableBody: h,
            onDelete: m,
            onUpdate: j,
            onPagination: A
          } = e;
          const W = (0, Z.Z)(),
            { visible: q, show: M, hide: H } = (0, z.d)(),
            [_, G] = (0, r.useState)(''),
            [J, Q] = (0, r.useState)([]),
            [$, ee] = (0, r.useState)(''),
            te = (0, Y.Z)($, 500);
          (0, r.useEffect)(() => {
            A({ ...l, search: te });
          }, [te]);
          const ne = J.length > 0 && J.length < t.length,
            ie = J.length === t.length,
            ae = (e) => {
              M(), G(e);
            },
            re = (e) => {
              m(e), H();
            },
            le = (0, r.useMemo)(
              () => (m || j || '' !== n[n.length - 1].name || n.pop(), n),
              [m, j, n]
            ),
            se = (e) => {
              let {
                item: t,
                hide: n,
                onDelete: a,
                handleShow: r,
                rowId: l,
                visible: s,
                theme: o,
                isLoading: d
              } = e;
              return (0, U.jsx)(b.Z, {
                title: (0, U.jsxs)(i.Z, {
                  children: [
                    (0, U.jsx)(y.Z, {
                      variant: 'h5',
                      sx: { marginTop: '4px', width: '100%' },
                      children: 'Are you sure want to delete?'
                    }),
                    (0, U.jsxs)(i.Z, {
                      sx: {
                        display: 'flex',
                        gap: '12px',
                        padding: '12px 0 8px'
                      },
                      children: [
                        (0, U.jsx)(f.Z, {
                          variant: 'outlined',
                          onClick: n,
                          children: 'No'
                        }),
                        (0, U.jsx)(X, {
                          onClick: () => re(t.id),
                          loading: d,
                          loadingPosition: 'start',
                          startIcon: (0, U.jsx)(g.Z, {}),
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
                children: (0, U.jsx)(v.Z, {
                  sx: {
                    '&:hover': { background: o.colors.error.lighter },
                    color: o.palette.error.main
                  },
                  color: 'inherit',
                  size: 'small',
                  onClick: () => r(t.id),
                  children: (0, U.jsx)(x.Z, { fontSize: 'small' })
                })
              });
            };
          return (0, U.jsxs)(k.Z, {
            children: [
              c &&
                (null === J || void 0 === J ? void 0 : J.length) > 0 &&
                (0, U.jsx)(C.Z, { flex: 1, p: 2, children: (0, U.jsx)(N, {}) }),
              (0, U.jsx)(w.Z, {}),
              (0, U.jsxs)(k.Z, {
                sx: {
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                },
                children: [
                  (0, U.jsxs)(C.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      width: 'max-content'
                    },
                    children: [
                      (0, U.jsx)(P.Z, {
                        label: (0, U.jsx)(K.Z, { id: 'label.search' }),
                        variant: 'outlined',
                        onChange: (e) => ee(e.target.value.trim())
                      }),
                      (0, U.jsx)(v.Z, {
                        type: 'button',
                        sx: {
                          p: '10px',
                          position: 'absolute',
                          right: 0,
                          ':hover': { background: 'unset' }
                        },
                        'aria-label': 'search',
                        children: (0, U.jsx)(u.Z, {})
                      })
                    ]
                  }),
                  (0, U.jsx)(C.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map((e, t) => (0, U.jsx)(C.Z, { children: e }, t))
                  })
                ]
              }),
              (0, U.jsx)(I.Z, {
                children: (0, U.jsxs)(S.Z, {
                  children: [
                    (0, U.jsx)(T.Z, {
                      children: (0, U.jsxs)(F.Z, {
                        children: [
                          c &&
                            (0, U.jsx)(B.Z, {
                              padding: 'checkbox',
                              children: (0, U.jsx)(D.Z, {
                                color: 'primary',
                                checked: ie,
                                indeterminate: ne,
                                onChange: (e) => {
                                  Q(e.target.checked ? t.map((e) => e.id) : []);
                                }
                              })
                            }),
                          le.map((e, t) =>
                            (0, U.jsx)(
                              B.Z,
                              {
                                ...e.tableProps,
                                align: e.align,
                                children: e.name
                                  ? (0, U.jsx)(O.Z, {
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
                                          A(t);
                                        })(t),
                                      children: (0, U.jsx)(K.Z, { id: e.title })
                                    })
                                  : (0, U.jsx)(K.Z, {
                                      id: e.title.toLowerCase()
                                    })
                              },
                              (0, V.Z)()
                            )
                          )
                        ]
                      })
                    }),
                    (0, U.jsxs)(L.Z, {
                      sx: {
                        position: 'relative',
                        minHeight: '100px',
                        height: !t || t.length >= 0 ? '100px' : 'unset'
                      },
                      children: [
                        t.map((e) => {
                          var t;
                          const n = J.includes(e.id);
                          return (0, U.jsxs)(
                            F.Z,
                            {
                              hover: !0,
                              selected: n,
                              children: [
                                c &&
                                  (0, U.jsx)(
                                    B.Z,
                                    {
                                      padding: 'checkbox',
                                      children: (0, U.jsx)(D.Z, {
                                        color: 'primary',
                                        checked: n,
                                        onChange: (t) => {
                                          return (
                                            (n = e.id),
                                            void (J.includes(n)
                                              ? Q((e) =>
                                                  e.filter((e) => e !== n)
                                                )
                                              : Q((e) => [...e, n]))
                                          );
                                          var n;
                                        },
                                        value: n
                                      })
                                    },
                                    (0, V.Z)()
                                  ),
                                null === (t = h(e)) || void 0 === t
                                  ? void 0
                                  : t.map((e) =>
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
                                (j || m) &&
                                  (0, U.jsxs)(
                                    B.Z,
                                    {
                                      align: 'right',
                                      children: [
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.map((e) =>
                                              (0, U.jsx)(b.Z, {
                                                title: '',
                                                arrow: !0,
                                                children: e
                                              })
                                            ),
                                        j &&
                                          (0, U.jsx)(b.Z, {
                                            title: (0, U.jsx)(K.Z, {
                                              id: 'label.view.edit'
                                            }),
                                            arrow: !0,
                                            children: (0, U.jsx)(v.Z, {
                                              sx: {
                                                '&:hover': {
                                                  background:
                                                    W.colors.primary.lighter
                                                },
                                                color: W.palette.primary.main
                                              },
                                              color: 'inherit',
                                              size: 'small',
                                              onClick: () => j(e.id),
                                              children: (0, U.jsx)(p.Z, {
                                                fontSize: 'small'
                                              })
                                            })
                                          }),
                                        m &&
                                          se({
                                            item: e,
                                            rowId: _,
                                            visible: q,
                                            theme: W,
                                            isLoading: a,
                                            handleShow: ae,
                                            onDelete: m,
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
                        a &&
                          (0, U.jsx)(F.Z, {
                            children: (0, U.jsx)(B.Z, {
                              children: (0, U.jsx)(C.Z, {
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
                                children: (0, U.jsx)(E.Z, {})
                              })
                            })
                          })
                      ]
                    })
                  ]
                })
              }),
              (0, U.jsx)(C.Z, {
                p: 2,
                children: (0, U.jsx)(R.Z, {
                  component: 'div',
                  count: s,
                  onPageChange: (e, t) => {
                    A({ ...l, page: t });
                  },
                  onRowsPerPageChange: (e) => {
                    A({ ...l, size: Number(e.target.value) });
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
        Q = (0, r.memo)(J),
        $ = (e) => {
          let {
            title: t,
            data: n = [],
            tableHeader: r = [{ align: 'inherit', title: 'Title' }],
            headerTitle: h = '',
            headerSubtitle: x = '',
            isLoading: p = !1,
            breadcrumbs: u,
            pagination: g,
            tableFilter: m,
            totalItems: j,
            extraOptions: Z,
            isShowBulkActions: b = !0,
            onOpenModal: y,
            tableBody: f,
            onDelete: v,
            onUpdate: k,
            onPagination: C
          } = e;
          const w = (0, s.Z)();
          return (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(l.ql, {
                children: (0, U.jsx)('title', {
                  children: w.formatMessage({ id: t })
                })
              }),
              (0, U.jsx)(d.Z, {
                children: (0, U.jsx)(c.Z, {
                  headerTitle: h,
                  headerSubtitle: x,
                  onOpenModal: y,
                  breadcrumbs: u
                })
              }),
              (0, U.jsx)(i.Z, {
                maxWidth: 'lg',
                children: (0, U.jsx)(a.ZP, {
                  container: !0,
                  direction: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  spacing: 3,
                  children: (0, U.jsx)(a.ZP, {
                    item: !0,
                    xs: 12,
                    children: (0, U.jsx)(Q, {
                      data: n,
                      totalItems: j,
                      tableHeader: r,
                      tableBody: f,
                      isLoading: p,
                      onDelete: v,
                      onUpdate: k,
                      onPagination: C,
                      pagination: g,
                      tableFilter: m,
                      extraOptions: Z,
                      isShowBulkActions: b
                    })
                  })
                })
              }),
              (0, U.jsx)(o.Z, {})
            ]
          });
        },
        ee = (0, r.memo)($);
    },
    51779: (e, t, n) => {
      n.r(t), n.d(t, { default: () => z });
      var i,
        a = n(72791),
        r = n(96790),
        l = n(14167),
        s = n(25850),
        o = n(87837),
        d = n(44695),
        c = n(697),
        h = n(48550),
        x = n(61134),
        p = n(4349),
        u = n(57891),
        g = n(30168),
        m = n(18267),
        j = n(20890),
        Z = n(42763),
        b = n(27888),
        y = n(66934),
        f = n(89164),
        v = n(80184);
      const k = (e) => {
          let { uploadFile: t = [], onSetUploadFile: n } = e;
          const [i, r] = (0, a.useState)(null),
            l = (0, a.useCallback)(
              (e) => {
                e.forEach((e) => {
                  const t = new FileReader();
                  (t.onabort = () => console.log('file reading was aborted')),
                    (t.onerror = () => console.log('file reading has failed')),
                    (t.onload = () => {
                      n([e]);
                    }),
                    (t.onloadend = () => {
                      r(t.result);
                    }),
                    t.readAsDataURL(e);
                });
              },
              [t]
            );
          (0, a.useEffect)(() => {
            t.length && 'string' === typeof t[0] && r(t);
          }, [t]);
          const { getRootProps: s, getInputProps: o } = (0, m.uI)({
            onDrop: l
          });
          return (0, v.jsxs)('div', {
            children: [
              (0, v.jsx)(j.Z, {
                variant: 'h4',
                sx: { mb: '8px' },
                children: 'Files'
              }),
              (0, v.jsxs)(C, {
                ...s({ className: 'dropzone' }),
                children: [
                  (0, v.jsx)('input', { ...o(), multiple: !1 }),
                  (0, v.jsx)('p', {
                    children:
                      "Drag 'n' drop some files here, or click to select files"
                  })
                ]
              }),
              (0, v.jsx)('aside', {}),
              i &&
                (0, v.jsx)(Z.Z, {
                  cols: 3,
                  rowHeight: 200,
                  sx: { margin: '8px 0' },
                  children: (0, v.jsx)(b.Z, {
                    children: (0, v.jsx)('img', {
                      src: i,
                      alt: 'Uploaded Image',
                      height: '300'
                    })
                  })
                })
            ]
          });
        },
        C = (0, y.ZP)(f.Z)(
          i ||
            (i = (0, g.Z)([
              '\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: #eeeeee;\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n  cursor: pointer;\n  &:focus {\n    border-color: #2196f3;\n  }\n'
            ]))
        );
      var w = n(8007);
      const P = w.Ry().shape({
          name: w.Z_().required('Name is required!'),
          link: w.Z_().required('Link is required!'),
          type: w.Z_().required('Type is required!'),
          categoryId: w
            .Rx()
            .nullable()
            .positive('Category must be positive')
            .min(1)
            .required('Category is required!')
        }),
        I = (e) => {
          let { open: t, detail: n, onClose: i, refetch: r, hide: s } = e;
          const { notify: g, message: m } = (0, o.p)(),
            [j, Z] = (0, a.useState)([]),
            [b, { isLoading: y }] = (0, l.b0)(),
            [f, { isLoading: C }] = (0, l.Sm)(),
            {
              register: w,
              setValue: I,
              handleSubmit: S,
              reset: T,
              formState: { errors: F }
            } = (0, x.cI)({
              resolver: (0, d.X)(P),
              defaultValues: { name: '', link: '', type: '', categoryId: null }
            });
          (0, a.useEffect)(() => {
            null !== n && void 0 !== n && n.id
              ? (I('link', n.link),
                I('categoryId', n.category_id),
                I('name', n.name),
                I('type', n.type),
                Z(n.image))
              : (T(), Z([]));
          }, [n]);
          return (0, v.jsx)(u.Z, {
            title:
              null !== n && void 0 !== n && n._id
                ? 'Edit '.concat(n.name)
                : 'Add new Game',
            onClose: i,
            open: t,
            onOk: S(async (e) => {
              try {
                const { name: t, link: i, type: a, categoryId: l } = e,
                  o = new FormData();
                o.append('name', t),
                  o.append('link', i),
                  o.append('type', a),
                  o.append('category_id', String(l)),
                  o.append('image', j[0]),
                  null !== n && void 0 !== n && n.id
                    ? await f({ id: n.id, body: o }).unwrap()
                    : await b(o).unwrap(),
                  g({
                    message:
                      null !== n && void 0 !== n && n._id
                        ? m.UPDATED
                        : m.CREATED
                  }),
                  r(),
                  s(),
                  T();
              } catch (t) {
                g({ message: m.ERROR, type: 'error' });
              }
            }),
            isLoading: y || C,
            children: (0, v.jsxs)(c.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, v.jsx)(h.Z, {
                  fullWidth: !0,
                  label: 'Game Name',
                  sx: { my: 2 },
                  required: !0,
                  error: !!F.name,
                  helperText: F.name ? F.name.message : '',
                  autoComplete: 'off',
                  ...w('name')
                }),
                (0, v.jsx)(h.Z, {
                  fullWidth: !0,
                  label: 'Link',
                  sx: { my: 2 },
                  required: !0,
                  error: !!F.link,
                  helperText: F.link ? F.link.message : '',
                  autoComplete: 'off',
                  ...w('link')
                }),
                (0, v.jsx)(h.Z, {
                  fullWidth: !0,
                  label: (0, v.jsx)(p.Z, { id: 'label.type' }),
                  sx: { my: 2 },
                  required: !0,
                  error: !!F.type,
                  helperText: F.type ? F.type.message : '',
                  autoComplete: 'off',
                  ...w('type')
                }),
                (0, v.jsx)(h.Z, {
                  fullWidth: !0,
                  label: 'Category',
                  type: 'number',
                  sx: { my: 2 },
                  required: !0,
                  error: !!F.categoryId,
                  helperText: F.categoryId ? F.categoryId.message : '',
                  autoComplete: 'off',
                  ...w('categoryId')
                }),
                (0, v.jsx)(k, { uploadFile: j, onSetUploadFile: Z })
              ]
            })
          });
        };
      var S = n(82970),
        T = n(68096),
        F = n(94925),
        B = n(99321),
        D = n(23786),
        O = n(80946),
        L = n(98673);
      const E = () => ({
          tableBody: (e) => [
            {
              align: 'inherit',
              children: (0, v.jsx)(v.Fragment, {
                children: (0, v.jsx)(j.Z, {
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
              children: (0, v.jsx)(v.Fragment, {
                children: (0, v.jsx)(j.Z, {
                  variant: 'body1',
                  fontWeight: 'bold',
                  color: 'text.primary',
                  noWrap: !0,
                  children: e.code
                })
              })
            },
            {
              align: 'right',
              children: (0, v.jsx)(v.Fragment, {
                children: (0, v.jsx)(j.Z, {
                  variant: 'body1',
                  fontWeight: 'bold',
                  color: 'text.primary',
                  noWrap: !0,
                  children:
                    (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                    (0, O.Z)(
                      (0, L.Z)(
                        null === e || void 0 === e ? void 0 : e.updatedAt
                      ),
                      'dd/MM/yyyy HH:mm'
                    )
                })
              })
            }
          ],
          tableHeader: [
            { align: 'inherit', title: 'label.name', name: 'name' },
            { align: 'inherit', title: 'label.code' },
            { align: 'right', title: 'label.updated.at' },
            { align: 'right', title: 'label.actions' }
          ],
          tableFilter: (e) => {
            let { status: t, dateFrom: n, dateTo: i } = e;
            return [
              (0, v.jsx)(S.M, {
                label: (0, v.jsx)(p.Z, { id: 'label.from' }),
                onChange: n.onChange
              }),
              (0, v.jsx)(S.M, {
                label: (0, v.jsx)(p.Z, { id: 'label.to' }),
                onChange: i.onChange
              }),
              (0, v.jsxs)(T.Z, {
                sx: { m: 1, minWidth: 120 },
                children: [
                  (0, v.jsx)(F.Z, {
                    id: 'isActive',
                    children: (0, v.jsx)(p.Z, { id: 'label.status' })
                  }),
                  (0, v.jsxs)(B.Z, {
                    labelId: 'isActive',
                    value: t.value,
                    label: (0, v.jsx)(p.Z, { id: 'label.status' }),
                    onChange: (e) => t.onChange(e.target.value),
                    children: [
                      (0, v.jsx)(D.Z, {
                        value: '',
                        children: (0, v.jsx)('em', {
                          children: (0, v.jsx)(p.Z, { id: 'label.default' })
                        })
                      }),
                      (0, v.jsx)(D.Z, {
                        value: 'active',
                        children: (0, v.jsx)(p.Z, { id: 'label.active' })
                      }),
                      (0, v.jsx)(D.Z, {
                        value: 'disable',
                        children: (0, v.jsx)(p.Z, { id: 'label.disable' })
                      })
                    ]
                  })
                ]
              })
            ];
          }
        }),
        R = 'title.currencies-management',
        z = () => {
          const e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: R }
            ],
            { visible: t, hide: n, show: i } = (0, o.d)(),
            [d, c] = (0, a.useState)(),
            { notify: h, message: x } = (0, o.p)(),
            [p, u] = (0, a.useState)([]),
            [g, m] = (0, a.useState)({
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
            { tableBody: j, tableHeader: Z, tableFilter: b } = E(),
            {
              data: y,
              isFetching: f,
              refetch: k
            } = (0, l.K4)(
              { page: g.page, size: g.size, search: g.search },
              { refetchOnMountOrArgChange: !0 }
            );
          (0, a.useEffect)(() => {
            y &&
              (null === y || void 0 === y ? void 0 : y.length) > 0 &&
              u(() => {
                var e;
                return (0, s.TY)(
                  y,
                  null === (e = Z[g.sortBy]) || void 0 === e ? void 0 : e.name,
                  g.sortDirection
                );
              });
          }, [y, g]);
          const [C, { isLoading: w }] = (0, l.N_)(),
            [P, { isLoading: S }] = (0, l.GX)();
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(r.Z, {
                title: R,
                data: p,
                tableHeader: Z,
                tableBody: j,
                headerTitle: R,
                breadcrumbs: e,
                onOpenModal: () => {
                  i(), c(null);
                },
                isLoading: f || S || w,
                onDelete: async (e) => {
                  try {
                    await C(e).unwrap(), h({ message: x.DELETED }), k();
                  } catch (t) {
                    h({ message: x.ERROR, type: 'error' });
                  }
                },
                onUpdate: async (e) => {
                  try {
                    const t = await P(e);
                    i(), c(t.data);
                  } catch (t) {
                    h({ message: x.ERROR, type: 'error' });
                  }
                },
                pagination: g,
                onPagination: m,
                tableFilter: b({
                  status: {
                    value: g.status,
                    onChange: (e) => m({ ...g, status: e })
                  },
                  dateFrom: {
                    value: g.dateFrom,
                    onChange: (e) => m({ ...g, dateFrom: (0, s.Zd)(e, 'from') })
                  },
                  dateTo: {
                    value: g.dateTo,
                    onChange: (e) => m({ ...g, dateTo: (0, s.Zd)(e, 'to') })
                  }
                })
              }),
              (0, v.jsx)(I, {
                open: t,
                onClose: n,
                refetch: k,
                hide: n,
                detail: d
              })
            ]
          });
        };
    },
    64732: (e, t, n) => {
      n.d(t, { Z: () => a });
      var i = n(72791);
      const a = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        const [n, a] = (0, i.useState)(e);
        return (
          (0, i.useEffect)(() => {
            const n = setTimeout(() => {
              a(e);
            }, t);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          n
        );
      };
    },
    25850: (e, t, n) => {
      n.d(t, { TY: () => r, Zd: () => l });
      var i = n(72426),
        a = n.n(i);
      const r = (e, t, n) =>
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
            return a()(e).endOf('day').utc().toISOString();
          }
          return a()(e).startOf('day').utc().toISOString();
        };
    }
  }
]);
//# sourceMappingURL=779.90f84b07.chunk.js.map
