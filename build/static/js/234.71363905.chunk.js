'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [234],
  {
    9234: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return B;
          }
        });
      var a = r(9439),
        n = r(1413),
        o = r(2791),
        i = r(2065),
        c = r(4554),
        l = r(9836),
        s = r(3382),
        d = r(3994),
        u = r(9281),
        h = r(1048),
        m = r(8178),
        p = r(5855),
        Z = r(720),
        b = r(4663),
        g = r(890),
        v = r(5527),
        f = r(4454),
        x = r(3400),
        w = r(7639),
        k = r(5523),
        j = r(9891),
        S = r(7247),
        y = r(1903),
        P = {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: -1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px'
        },
        C = r(184);
      function z(e, t, r, a, n) {
        return { name: e, calories: t, fat: r, carbs: a, protein: n };
      }
      var M = [
        z('Cupcake', 305, 3.7, 67, 4.3),
        z('Donut', 452, 25, 51, 4.9),
        z('Eclair', 262, 16, 24, 6),
        z('Frozen yoghurt', 159, 6, 24, 4),
        z('Gingerbread', 356, 16, 49, 3.9),
        z('Honeycomb', 408, 3.2, 87, 6.5),
        z('Ice cream sandwich', 237, 9, 37, 4.3),
        z('Jelly Bean', 375, 0, 94, 0),
        z('KitKat', 518, 26, 65, 7),
        z('Lollipop', 392, 0.2, 98, 0),
        z('Marshmallow', 318, 0, 81, 2),
        z('Nougat', 360, 19, 9, 37),
        z('Oreo', 437, 18, 63, 4)
      ];
      function R(e, t, r) {
        return t[r] < e[r] ? -1 : t[r] > e[r] ? 1 : 0;
      }
      var q = [
        {
          id: 'name',
          numeric: !1,
          disablePadding: !0,
          label: 'Dessert\xa0(100g serving)'
        },
        { id: 'calories', numeric: !0, disablePadding: !1, label: 'Calories' },
        { id: 'fat', numeric: !0, disablePadding: !1, label: 'Fat\xa0(g)' },
        { id: 'carbs', numeric: !0, disablePadding: !1, label: 'Carbs\xa0(g)' },
        {
          id: 'protein',
          numeric: !0,
          disablePadding: !1,
          label: 'Protein\xa0(g)'
        }
      ];
      function F(e) {
        var t = e.onSelectAllClick,
          r = e.order,
          a = e.orderBy,
          n = e.numSelected,
          o = e.rowCount,
          i = e.onRequestSort;
        return (0, C.jsx)(h.Z, {
          children: (0, C.jsxs)(p.Z, {
            children: [
              (0, C.jsx)(d.Z, {
                padding: 'checkbox',
                children: (0, C.jsx)(f.Z, {
                  color: 'primary',
                  indeterminate: n > 0 && n < o,
                  checked: o > 0 && n === o,
                  onChange: t,
                  inputProps: { 'aria-label': 'select all desserts' }
                })
              }),
              q.map(function (e) {
                return (0, C.jsx)(
                  d.Z,
                  {
                    align: e.numeric ? 'right' : 'left',
                    padding: e.disablePadding ? 'none' : 'normal',
                    children: (0, C.jsxs)(Z.Z, {
                      onClick:
                        ((t = e.id),
                        function (e) {
                          i(e, t);
                        }),
                      children: [
                        e.label,
                        a === e.id
                          ? (0, C.jsx)(c.Z, {
                              component: 'span',
                              sx: P,
                              children:
                                'desc' === r
                                  ? 'sorted descending'
                                  : 'sorted ascending'
                            })
                          : null
                      ]
                    })
                  },
                  e.id
                );
                var t;
              })
            ]
          })
        });
      }
      function N(e) {
        var t = e.numSelected;
        return (0, C.jsxs)(b.Z, {
          sx: (0, n.Z)(
            { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
            t > 0 && {
              bgcolor: function (e) {
                return (0, i.Fq)(
                  e.palette.primary.main,
                  e.palette.action.activatedOpacity
                );
              }
            }
          ),
          children: [
            t > 0
              ? (0, C.jsxs)(g.Z, {
                  sx: { flex: '1 1 100%' },
                  color: 'inherit',
                  variant: 'subtitle1',
                  component: 'div',
                  children: [t, ' selected']
                })
              : (0, C.jsx)(g.Z, {
                  sx: { flex: '1 1 100%' },
                  variant: 'h6',
                  id: 'tableTitle',
                  component: 'div',
                  children: 'Nutrition'
                }),
            t > 0
              ? (0, C.jsx)(w.Z, {
                  title: 'Delete',
                  children: (0, C.jsx)(x.Z, { children: (0, C.jsx)(S.Z, {}) })
                })
              : (0, C.jsx)(w.Z, {
                  title: 'Filter list',
                  children: (0, C.jsx)(x.Z, { children: (0, C.jsx)(y.Z, {}) })
                })
          ]
        });
      }
      function B() {
        var e = o.useState('asc'),
          t = (0, a.Z)(e, 2),
          r = t[0],
          n = t[1],
          i = o.useState('calories'),
          h = (0, a.Z)(i, 2),
          Z = h[0],
          b = h[1],
          g = o.useState([]),
          x = (0, a.Z)(g, 2),
          w = x[0],
          S = x[1],
          y = o.useState(0),
          P = (0, a.Z)(y, 2),
          z = P[0],
          q = P[1],
          B = o.useState(!1),
          L = (0, a.Z)(B, 2),
          D = L[0],
          T = L[1],
          O = o.useState(5),
          H = (0, a.Z)(O, 2),
          I = H[0],
          A = H[1],
          E = z > 0 ? Math.max(0, (1 + z) * I - M.length) : 0,
          V = o.useMemo(
            function () {
              return (function (e, t) {
                var r = e.map(function (e, t) {
                  return [e, t];
                });
                return (
                  r.sort(function (e, r) {
                    var a = t(e[0], r[0]);
                    return 0 !== a ? a : e[1] - r[1];
                  }),
                  r.map(function (e) {
                    return e[0];
                  })
                );
              })(
                M,
                (function (e, t) {
                  return 'desc' === e
                    ? function (e, r) {
                        return R(e, r, t);
                      }
                    : function (e, r) {
                        return -R(e, r, t);
                      };
                })(r, Z)
              ).slice(z * I, z * I + I);
            },
            [r, Z, z, I]
          );
        return (0, C.jsxs)(c.Z, {
          sx: { width: '100%' },
          children: [
            (0, C.jsxs)(v.Z, {
              sx: { width: '100%', mb: 2 },
              children: [
                (0, C.jsx)(N, { numSelected: w.length }),
                (0, C.jsx)(u.Z, {
                  children: (0, C.jsxs)(l.Z, {
                    sx: { minWidth: 750 },
                    'aria-labelledby': 'tableTitle',
                    size: D ? 'small' : 'medium',
                    children: [
                      (0, C.jsx)(F, {
                        numSelected: w.length,
                        order: r,
                        orderBy: Z,
                        onSelectAllClick: function (e) {
                          if (e.target.checked) {
                            var t = M.map(function (e) {
                              return e.name;
                            });
                            S(t);
                          } else S([]);
                        },
                        onRequestSort: function (e, t) {
                          n(Z === t && 'asc' === r ? 'desc' : 'asc'), b(t);
                        },
                        rowCount: M.length
                      }),
                      (0, C.jsxs)(s.Z, {
                        children: [
                          V.map(function (e, t) {
                            var r,
                              a = ((r = e.name), -1 !== w.indexOf(r)),
                              n = 'enhanced-table-checkbox-'.concat(t);
                            return (0, C.jsxs)(
                              p.Z,
                              {
                                hover: !0,
                                onClick: function (t) {
                                  return (function (e, t) {
                                    var r = w.indexOf(t),
                                      a = [];
                                    -1 === r
                                      ? (a = a.concat(w, t))
                                      : 0 === r
                                      ? (a = a.concat(w.slice(1)))
                                      : r === w.length - 1
                                      ? (a = a.concat(w.slice(0, -1)))
                                      : r > 0 &&
                                        (a = a.concat(
                                          w.slice(0, r),
                                          w.slice(r + 1)
                                        )),
                                      S(a);
                                  })(0, e.name);
                                },
                                role: 'checkbox',
                                'aria-checked': a,
                                tabIndex: -1,
                                selected: a,
                                sx: { cursor: 'pointer' },
                                children: [
                                  (0, C.jsx)(d.Z, {
                                    padding: 'checkbox',
                                    children: (0, C.jsx)(f.Z, {
                                      color: 'primary',
                                      checked: a,
                                      inputProps: { 'aria-labelledby': n }
                                    })
                                  }),
                                  (0, C.jsx)(d.Z, {
                                    component: 'th',
                                    id: n,
                                    scope: 'row',
                                    padding: 'none',
                                    children: e.name
                                  }),
                                  (0, C.jsx)(d.Z, {
                                    align: 'right',
                                    children: e.calories
                                  }),
                                  (0, C.jsx)(d.Z, {
                                    align: 'right',
                                    children: e.fat
                                  }),
                                  (0, C.jsx)(d.Z, {
                                    align: 'right',
                                    children: e.carbs
                                  }),
                                  (0, C.jsx)(d.Z, {
                                    align: 'right',
                                    children: e.protein
                                  })
                                ]
                              },
                              e.name
                            );
                          }),
                          E > 0 &&
                            (0, C.jsx)(p.Z, {
                              style: { height: (D ? 33 : 53) * E },
                              children: (0, C.jsx)(d.Z, { colSpan: 6 })
                            })
                        ]
                      })
                    ]
                  })
                }),
                (0, C.jsx)(m.Z, {
                  rowsPerPageOptions: [5, 10, 25],
                  component: 'div',
                  count: M.length,
                  rowsPerPage: I,
                  page: z,
                  onPageChange: function (e, t) {
                    q(t);
                  },
                  onRowsPerPageChange: function (e) {
                    A(parseInt(e.target.value, 10)), q(0);
                  }
                })
              ]
            }),
            (0, C.jsx)(k.Z, {
              control: (0, C.jsx)(j.Z, {
                checked: D,
                onChange: function (e) {
                  T(e.target.checked);
                }
              }),
              label: 'Dense padding'
            })
          ]
        });
      }
    },
    7247: function (e, t, r) {
      var a = r(4836);
      t.Z = void 0;
      var n = a(r(5649)),
        o = r(184),
        i = (0, n.default)(
          (0, o.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
          }),
          'Delete'
        );
      t.Z = i;
    },
    1903: function (e, t, r) {
      var a = r(4836);
      t.Z = void 0;
      var n = a(r(5649)),
        o = r(184),
        i = (0, n.default)(
          (0, o.jsx)('path', {
            d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z'
          }),
          'FilterList'
        );
      t.Z = i;
    },
    5523: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return j;
        }
      });
      var a = r(4942),
        n = r(3366),
        o = r(7462),
        i = r(2791),
        c = r(8182),
        l = r(4419),
        s = r(2930),
        d = r(890),
        u = r(4036),
        h = r(6934),
        m = r(1402),
        p = r(5878),
        Z = r(1217);
      function b(e) {
        return (0, Z.Z)('MuiFormControlLabel', e);
      }
      var g = (0, p.Z)('MuiFormControlLabel', [
          'root',
          'labelPlacementStart',
          'labelPlacementTop',
          'labelPlacementBottom',
          'disabled',
          'label',
          'error',
          'required',
          'asterisk'
        ]),
        v = r(6147),
        f = r(184),
        x = [
          'checked',
          'className',
          'componentsProps',
          'control',
          'disabled',
          'disableTypography',
          'inputRef',
          'label',
          'labelPlacement',
          'name',
          'onChange',
          'required',
          'slotProps',
          'value'
        ],
        w = (0, h.ZP)('label', {
          name: 'MuiFormControlLabel',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var r = e.ownerState;
            return [
              (0, a.Z)({}, '& .'.concat(g.label), t.label),
              t.root,
              t['labelPlacement'.concat((0, u.Z)(r.labelPlacement))]
            ];
          }
        })(function (e) {
          var t = e.theme,
            r = e.ownerState;
          return (0,
          o.Z)((0, a.Z)({ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', verticalAlign: 'middle', WebkitTapHighlightColor: 'transparent', marginLeft: -11, marginRight: 16 }, '&.'.concat(g.disabled), { cursor: 'default' }), 'start' === r.labelPlacement && { flexDirection: 'row-reverse', marginLeft: 16, marginRight: -11 }, 'top' === r.labelPlacement && { flexDirection: 'column-reverse', marginLeft: 16 }, 'bottom' === r.labelPlacement && { flexDirection: 'column', marginLeft: 16 }, (0, a.Z)({}, '& .'.concat(g.label), (0, a.Z)({}, '&.'.concat(g.disabled), { color: (t.vars || t).palette.text.disabled })));
        }),
        k = (0, h.ZP)('span', {
          name: 'MuiFormControlLabel',
          slot: 'Asterisk',
          overridesResolver: function (e, t) {
            return t.asterisk;
          }
        })(function (e) {
          var t = e.theme;
          return (0,
          a.Z)({}, '&.'.concat(g.error), { color: (t.vars || t).palette.error.main });
        }),
        j = i.forwardRef(function (e, t) {
          var r,
            a,
            h = (0, m.Z)({ props: e, name: 'MuiFormControlLabel' }),
            p = h.className,
            Z = h.componentsProps,
            g = void 0 === Z ? {} : Z,
            j = h.control,
            S = h.disabled,
            y = h.disableTypography,
            P = h.label,
            C = h.labelPlacement,
            z = void 0 === C ? 'end' : C,
            M = h.required,
            R = h.slotProps,
            q = void 0 === R ? {} : R,
            F = (0, n.Z)(h, x),
            N = (0, s.Z)(),
            B =
              null != (r = null != S ? S : j.props.disabled)
                ? r
                : null == N
                ? void 0
                : N.disabled,
            L = null != M ? M : j.props.required,
            D = { disabled: B, required: L };
          ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(
            function (e) {
              'undefined' === typeof j.props[e] &&
                'undefined' !== typeof h[e] &&
                (D[e] = h[e]);
            }
          );
          var T = (0, v.Z)({ props: h, muiFormControl: N, states: ['error'] }),
            O = (0, o.Z)({}, h, {
              disabled: B,
              labelPlacement: z,
              required: L,
              error: T.error
            }),
            H = (function (e) {
              var t = e.classes,
                r = e.disabled,
                a = e.labelPlacement,
                n = e.error,
                o = e.required,
                i = {
                  root: [
                    'root',
                    r && 'disabled',
                    'labelPlacement'.concat((0, u.Z)(a)),
                    n && 'error',
                    o && 'required'
                  ],
                  label: ['label', r && 'disabled'],
                  asterisk: ['asterisk', n && 'error']
                };
              return (0, l.Z)(i, b, t);
            })(O),
            I = null != (a = q.typography) ? a : g.typography,
            A = P;
          return (
            null == A ||
              A.type === d.Z ||
              y ||
              (A = (0, f.jsx)(
                d.Z,
                (0, o.Z)({ component: 'span' }, I, {
                  className: (0, c.Z)(
                    H.label,
                    null == I ? void 0 : I.className
                  ),
                  children: A
                })
              )),
            (0, f.jsxs)(
              w,
              (0, o.Z)(
                { className: (0, c.Z)(H.root, p), ownerState: O, ref: t },
                F,
                {
                  children: [
                    i.cloneElement(j, D),
                    A,
                    L &&
                      (0, f.jsxs)(k, {
                        ownerState: O,
                        'aria-hidden': !0,
                        className: H.asterisk,
                        children: ['\u2009', '*']
                      })
                  ]
                }
              )
            )
          );
        });
    },
    9891: function (e, t, r) {
      var a = r(4942),
        n = r(3366),
        o = r(7462),
        i = r(2791),
        c = r(8182),
        l = r(4419),
        s = r(2065),
        d = r(4036),
        u = r(7278),
        h = r(1402),
        m = r(6934),
        p = r(3785),
        Z = r(184),
        b = ['className', 'color', 'edge', 'size', 'sx'],
        g = (0, m.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var r = e.ownerState;
            return [
              t.root,
              r.edge && t['edge'.concat((0, d.Z)(r.edge))],
              t['size'.concat((0, d.Z)(r.size))]
            ];
          }
        })(function (e) {
          var t,
            r = e.ownerState;
          return (0,
          o.Z)({ display: 'inline-flex', width: 58, height: 38, overflow: 'hidden', padding: 12, boxSizing: 'border-box', position: 'relative', flexShrink: 0, zIndex: 0, verticalAlign: 'middle', '@media print': { colorAdjust: 'exact' } }, 'start' === r.edge && { marginLeft: -8 }, 'end' === r.edge && { marginRight: -8 }, 'small' === r.size && ((t = { width: 40, height: 24, padding: 7 }), (0, a.Z)(t, '& .'.concat(p.Z.thumb), { width: 16, height: 16 }), (0, a.Z)(t, '& .'.concat(p.Z.switchBase), (0, a.Z)({ padding: 4 }, '&.'.concat(p.Z.checked), { transform: 'translateX(16px)' })), t));
        }),
        v = (0, m.ZP)(u.Z, {
          name: 'MuiSwitch',
          slot: 'SwitchBase',
          overridesResolver: function (e, t) {
            var r = e.ownerState;
            return [
              t.switchBase,
              (0, a.Z)({}, '& .'.concat(p.Z.input), t.input),
              'default' !== r.color && t['color'.concat((0, d.Z)(r.color))]
            ];
          }
        })(
          function (e) {
            var t,
              r = e.theme;
            return (
              (t = {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                color: r.vars
                  ? r.vars.palette.Switch.defaultColor
                  : ''.concat(
                      'light' === r.palette.mode
                        ? r.palette.common.white
                        : r.palette.grey[300]
                    ),
                transition: r.transitions.create(['left', 'transform'], {
                  duration: r.transitions.duration.shortest
                })
              }),
              (0, a.Z)(t, '&.'.concat(p.Z.checked), {
                transform: 'translateX(20px)'
              }),
              (0, a.Z)(t, '&.'.concat(p.Z.disabled), {
                color: r.vars
                  ? r.vars.palette.Switch.defaultDisabledColor
                  : ''.concat(
                      'light' === r.palette.mode
                        ? r.palette.grey[100]
                        : r.palette.grey[600]
                    )
              }),
              (0, a.Z)(t, '&.'.concat(p.Z.checked, ' + .').concat(p.Z.track), {
                opacity: 0.5
              }),
              (0, a.Z)(t, '&.'.concat(p.Z.disabled, ' + .').concat(p.Z.track), {
                opacity: r.vars
                  ? r.vars.opacity.switchTrackDisabled
                  : ''.concat('light' === r.palette.mode ? 0.12 : 0.2)
              }),
              (0, a.Z)(t, '& .'.concat(p.Z.input), {
                left: '-100%',
                width: '300%'
              }),
              t
            );
          },
          function (e) {
            var t,
              r = e.theme,
              n = e.ownerState;
            return (0, o.Z)(
              {
                '&:hover': {
                  backgroundColor: r.vars
                    ? 'rgba('
                        .concat(r.vars.palette.action.activeChannel, ' / ')
                        .concat(r.vars.palette.action.hoverOpacity, ')')
                    : (0, s.Fq)(
                        r.palette.action.active,
                        r.palette.action.hoverOpacity
                      ),
                  '@media (hover: none)': { backgroundColor: 'transparent' }
                }
              },
              'default' !== n.color &&
                ((t = {}),
                (0, a.Z)(
                  t,
                  '&.'.concat(p.Z.checked),
                  (0, a.Z)(
                    {
                      color: (r.vars || r).palette[n.color].main,
                      '&:hover': {
                        backgroundColor: r.vars
                          ? 'rgba('
                              .concat(
                                r.vars.palette[n.color].mainChannel,
                                ' / '
                              )
                              .concat(r.vars.palette.action.hoverOpacity, ')')
                          : (0, s.Fq)(
                              r.palette[n.color].main,
                              r.palette.action.hoverOpacity
                            ),
                        '@media (hover: none)': {
                          backgroundColor: 'transparent'
                        }
                      }
                    },
                    '&.'.concat(p.Z.disabled),
                    {
                      color: r.vars
                        ? r.vars.palette.Switch[
                            ''.concat(n.color, 'DisabledColor')
                          ]
                        : ''.concat(
                            'light' === r.palette.mode
                              ? (0, s.$n)(r.palette[n.color].main, 0.62)
                              : (0, s._j)(r.palette[n.color].main, 0.55)
                          )
                    }
                  )
                ),
                (0, a.Z)(
                  t,
                  '&.'.concat(p.Z.checked, ' + .').concat(p.Z.track),
                  { backgroundColor: (r.vars || r).palette[n.color].main }
                ),
                t)
            );
          }
        ),
        f = (0, m.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Track',
          overridesResolver: function (e, t) {
            return t.track;
          }
        })(function (e) {
          var t = e.theme;
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
        x = (0, m.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Thumb',
          overridesResolver: function (e, t) {
            return t.thumb;
          }
        })(function (e) {
          var t = e.theme;
          return {
            boxShadow: (t.vars || t).shadows[1],
            backgroundColor: 'currentColor',
            width: 20,
            height: 20,
            borderRadius: '50%'
          };
        }),
        w = i.forwardRef(function (e, t) {
          var r = (0, h.Z)({ props: e, name: 'MuiSwitch' }),
            a = r.className,
            i = r.color,
            s = void 0 === i ? 'primary' : i,
            u = r.edge,
            m = void 0 !== u && u,
            w = r.size,
            k = void 0 === w ? 'medium' : w,
            j = r.sx,
            S = (0, n.Z)(r, b),
            y = (0, o.Z)({}, r, { color: s, edge: m, size: k }),
            P = (function (e) {
              var t = e.classes,
                r = e.edge,
                a = e.size,
                n = e.color,
                i = e.checked,
                c = e.disabled,
                s = {
                  root: [
                    'root',
                    r && 'edge'.concat((0, d.Z)(r)),
                    'size'.concat((0, d.Z)(a))
                  ],
                  switchBase: [
                    'switchBase',
                    'color'.concat((0, d.Z)(n)),
                    i && 'checked',
                    c && 'disabled'
                  ],
                  thumb: ['thumb'],
                  track: ['track'],
                  input: ['input']
                },
                u = (0, l.Z)(s, p.H, t);
              return (0, o.Z)({}, t, u);
            })(y),
            C = (0, Z.jsx)(x, { className: P.thumb, ownerState: y });
          return (0,
          Z.jsxs)(g, { className: (0, c.Z)(P.root, a), sx: j, ownerState: y, children: [(0, Z.jsx)(v, (0, o.Z)({ type: 'checkbox', icon: C, checkedIcon: C, ref: t, ownerState: y }, S, { classes: (0, o.Z)({}, P, { root: P.switchBase }) })), (0, Z.jsx)(f, { className: P.track, ownerState: y })] });
        });
      t.Z = w;
    },
    3785: function (e, t, r) {
      r.d(t, {
        H: function () {
          return o;
        }
      });
      var a = r(5878),
        n = r(1217);
      function o(e) {
        return (0, n.Z)('MuiSwitch', e);
      }
      var i = (0, a.Z)('MuiSwitch', [
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
      t.Z = i;
    }
  }
]);
//# sourceMappingURL=234.71363905.chunk.js.map
