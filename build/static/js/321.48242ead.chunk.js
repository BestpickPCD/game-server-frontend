'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [321],
  {
    321: function (r, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          }
        });
      var i = n(9836),
        a = n(3382),
        t = n(3994),
        o = n(9281),
        s = n(1048),
        l = n(5855),
        d = n(5527),
        c = n(7945),
        h = n(184);
      function u() {
        var r = (0, c.sj)({ vendors: ['evolution'] }),
          e = r.data;
        r.isError, r.error;
        return (0, h.jsx)(o.Z, {
          component: d.Z,
          children: (0, h.jsxs)(i.Z, {
            sx: { minWidth: 650 },
            'aria-label': 'simple table',
            children: [
              (0, h.jsx)(s.Z, {
                children: (0, h.jsxs)(l.Z, {
                  children: [
                    (0, h.jsx)(t.Z, { children: 'Dessert (100g serving)' }),
                    (0, h.jsx)(t.Z, { align: 'right', children: 'Calories' }),
                    (0, h.jsx)(t.Z, { align: 'right', children: 'Fat\xa0(g)' }),
                    (0, h.jsx)(t.Z, {
                      align: 'right',
                      children: 'Carbs\xa0(g)'
                    }),
                    (0, h.jsx)(t.Z, {
                      align: 'right',
                      children: 'Protein\xa0(g)'
                    })
                  ]
                })
              }),
              (0, h.jsx)(a.Z, {
                children:
                  null === e || void 0 === e
                    ? void 0
                    : e.map(function (r) {
                        return (0,
                        h.jsxs)(l.Z, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [(0, h.jsx)(t.Z, { component: 'th', scope: 'row', children: r.id }), (0, h.jsx)(t.Z, { align: 'right', children: r.title }), (0, h.jsx)(t.Z, { align: 'right', children: r.fat }), (0, h.jsx)(t.Z, { align: 'right', children: r.carbs }), (0, h.jsx)(t.Z, { align: 'right', children: r.protein })] }, r.name);
                      })
              })
            ]
          })
        });
      }
    },
    1048: function (r, e, n) {
      n.d(e, {
        Z: function () {
          return v;
        }
      });
      var i = n(7462),
        a = n(3366),
        t = n(2791),
        o = n(8182),
        s = n(4419),
        l = n(829),
        d = n(1402),
        c = n(6934),
        h = n(5878),
        u = n(1217);
      function Z(r) {
        return (0, u.Z)('MuiTableHead', r);
      }
      (0, h.Z)('MuiTableHead', ['root']);
      var g = n(184),
        x = ['className', 'component'],
        j = (0, c.ZP)('thead', {
          name: 'MuiTableHead',
          slot: 'Root',
          overridesResolver: function (r, e) {
            return e.root;
          }
        })({ display: 'table-header-group' }),
        f = { variant: 'head' },
        p = 'thead',
        v = t.forwardRef(function (r, e) {
          var n = (0, d.Z)({ props: r, name: 'MuiTableHead' }),
            t = n.className,
            c = n.component,
            h = void 0 === c ? p : c,
            u = (0, a.Z)(n, x),
            v = (0, i.Z)({}, n, { component: h }),
            m = (function (r) {
              var e = r.classes;
              return (0, s.Z)({ root: ['root'] }, Z, e);
            })(v);
          return (0,
          g.jsx)(l.Z.Provider, { value: f, children: (0, g.jsx)(j, (0, i.Z)({ as: h, className: (0, o.Z)(m.root, t), ref: e, role: h === p ? null : 'rowgroup', ownerState: v }, u)) });
        });
    }
  }
]);
//# sourceMappingURL=321.48242ead.chunk.js.map
