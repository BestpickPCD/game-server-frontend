'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [190],
  {
    2190: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return f;
          }
        });
      var n = t(4165),
        i = t(5861),
        r = t(9164),
        o = t(7621),
        d = t(6934),
        u = t(7189),
        s = t(6871),
        c = t(2302),
        l = t(184),
        h = [
          { field: 'username', headerName: 'Username', width: 200 },
          { field: 'type', headerName: 'type', width: 200 },
          { field: 'agentUsername', headerName: 'Agent Username', width: 200 },
          { field: 'status', headerName: 'status', width: 200 },
          { field: 'amount', headerName: 'amount', width: 200, type: 'number' }
        ],
        p = [],
        m = (function () {
          var e = (0, i.Z)(
            (0, n.Z)().mark(function e(a) {
              var t;
              return (0, n.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (t = a.data), (p = t);
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })();
      function f() {
        var e,
          a = (0, s.UO)(),
          t = a.slug,
          n = a.type;
        e =
          'betting-history' === n
            ? 'bet,win,cancel'
            : 'recharge-history' === n
            ? 'agent.add_balance,user.add_balance,deposit,withdraw'
            : '';
        var i = (0, c.kn)({ id: t, type: '?type='.concat(e) }).data;
        return (
          i && m(i),
          (0, l.jsx)(r.Z, {
            sx: { marginTop: 4 },
            children: (0, l.jsx)(o.Z, {
              children: (0, l.jsx)(w, {
                rows: p,
                columns: h,
                initialState: {
                  pagination: { paginationModel: { page: 0, pageSize: 5 } }
                },
                pageSizeOptions: [5, 10],
                checkboxSelection: !0
              })
            })
          })
        );
      }
      var w = (0, d.ZP)(u._$)(function (e) {
        e.theme;
        return {
          '.MuiDataGrid-columnHeaderTitleContainer': {
            '&:active, &:focus, &:focus-within, &:focus-visible': {
              border: 'none !important',
              outline: 'none !important'
            }
          },
          '.MuiDataGrid-columnHeader': { outline: 'none !important' },
          '.MuiDataGrid-virtualScroller': { minHeight: '50px' }
        };
      });
    }
  }
]);
//# sourceMappingURL=190.bfa33276.chunk.js.map
