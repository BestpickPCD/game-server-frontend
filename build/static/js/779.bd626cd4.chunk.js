'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [779],
  {
    1779: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return P;
          }
        });
      var a,
        r = t(1413),
        i = t(4165),
        o = t(5861),
        l = t(9439),
        s = t(2791),
        d = t(6790),
        u = t(4167),
        c = t(5850),
        p = t(7837),
        h = t(4695),
        f = t(4554),
        m = t(8550),
        g = t(1134),
        x = t(4349),
        b = t(7891),
        Z = t(168),
        v = t(8267),
        y = t(890),
        j = t(2763),
        k = t(7888),
        C = t(6934),
        F = t(9164),
        w = t(184),
        R = function (e) {
          var n = e.uploadFile,
            t = void 0 === n ? [] : n,
            a = e.onSetUploadFile,
            i = (0, s.useState)(null),
            o = (0, l.Z)(i, 2),
            d = o[0],
            u = o[1],
            c = (0, s.useCallback)(
              function (e) {
                e.forEach(function (e) {
                  var n = new FileReader();
                  (n.onabort = function () {
                    return console.log('file reading was aborted');
                  }),
                    (n.onerror = function () {
                      return console.log('file reading has failed');
                    }),
                    (n.onload = function () {
                      a([e]);
                    }),
                    (n.onloadend = function () {
                      u(n.result);
                    }),
                    n.readAsDataURL(e);
                });
              },
              [t]
            );
          (0, s.useEffect)(
            function () {
              t.length && 'string' === typeof t[0] && u(t);
            },
            [t]
          );
          var p = (0, v.uI)({ onDrop: c }),
            h = p.getRootProps,
            f = p.getInputProps;
          return (0, w.jsxs)('div', {
            children: [
              (0, w.jsx)(y.Z, {
                variant: 'h4',
                sx: { mb: '8px' },
                children: 'Files'
              }),
              (0, w.jsxs)(
                T,
                (0, r.Z)(
                  (0, r.Z)({}, h({ className: 'dropzone' })),
                  {},
                  {
                    children: [
                      (0, w.jsx)(
                        'input',
                        (0, r.Z)((0, r.Z)({}, f()), {}, { multiple: !1 })
                      ),
                      (0, w.jsx)('p', {
                        children:
                          "Drag 'n' drop some files here, or click to select files"
                      })
                    ]
                  }
                )
              ),
              (0, w.jsx)('aside', {}),
              d &&
                (0, w.jsx)(j.Z, {
                  cols: 3,
                  rowHeight: 200,
                  sx: { margin: '8px 0' },
                  children: (0, w.jsx)(k.Z, {
                    children: (0, w.jsx)('img', {
                      src: d,
                      alt: 'Uploaded Image',
                      height: '300'
                    })
                  })
                })
            ]
          });
        },
        T = (0, C.ZP)(F.Z)(
          a ||
            (a = (0, Z.Z)([
              '\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: #eeeeee;\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n  cursor: pointer;\n  &:focus {\n    border-color: #2196f3;\n  }\n'
            ]))
        ),
        E = t(6727),
        I = E.Ry().shape({
          name: E.Z_().required('Name is required!'),
          link: E.Z_().required('Link is required!'),
          type: E.Z_().required('Type is required!'),
          categoryId: E.Rx()
            .nullable()
            .positive('Category must be positive')
            .min(1)
            .required('Category is required!')
        }),
        q = function (e) {
          var n = e.open,
            t = e.detail,
            a = e.onClose,
            d = e.refetch,
            c = e.hide,
            Z = (0, p.p)(),
            v = Z.notify,
            y = Z.message,
            j = (0, s.useState)([]),
            k = (0, l.Z)(j, 2),
            C = k[0],
            F = k[1],
            T = (0, u.b0)(),
            E = (0, l.Z)(T, 2),
            q = E[0],
            D = E[1].isLoading,
            S = (0, u.Sm)(),
            W = (0, l.Z)(S, 2),
            L = W[0],
            _ = W[1].isLoading,
            A = (0, g.cI)({
              resolver: (0, h.X)(I),
              defaultValues: { name: '', link: '', type: '', categoryId: null }
            }),
            O = A.register,
            H = A.setValue,
            M = A.handleSubmit,
            P = A.reset,
            U = A.formState.errors;
          (0, s.useEffect)(
            function () {
              null !== t && void 0 !== t && t.id
                ? (H('link', t.link),
                  H('categoryId', t.category_id),
                  H('name', t.name),
                  H('type', t.type),
                  F(t.image))
                : (P(), F([]));
            },
            [t]
          );
          var B = (function () {
            var e = (0, o.Z)(
              (0, i.Z)().mark(function e(n) {
                var a, r, o, l, s;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (a = n.name),
                            (r = n.link),
                            (o = n.type),
                            (l = n.categoryId),
                            (s = new FormData()).append('name', a),
                            s.append('link', r),
                            s.append('type', o),
                            s.append('category_id', String(l)),
                            s.append('image', C[0]),
                            null === t || void 0 === t || !t.id)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.next = 11), L({ id: t.id, body: s }).unwrap()
                          );
                        case 11:
                          e.next = 15;
                          break;
                        case 13:
                          return (e.next = 15), q(s).unwrap();
                        case 15:
                          v({
                            message:
                              null !== t && void 0 !== t && t._id
                                ? y.UPDATED
                                : y.CREATED
                          }),
                            d(),
                            c(),
                            P(),
                            (e.next = 24);
                          break;
                        case 21:
                          (e.prev = 21),
                            (e.t0 = e.catch(0)),
                            v({ message: y.ERROR, type: 'error' });
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 21]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return (0, w.jsx)(b.Z, {
            title:
              null !== t && void 0 !== t && t._id
                ? 'Edit '.concat(t.name)
                : 'Add new Game',
            onClose: a,
            open: n,
            onOk: M(B),
            isLoading: D || _,
            children: (0, w.jsxs)(f.Z, {
              component: 'form',
              noValidate: !0,
              autoComplete: 'off',
              id: 'form-games',
              children: [
                (0, w.jsx)(
                  m.Z,
                  (0, r.Z)(
                    {
                      fullWidth: !0,
                      label: 'Game Name',
                      sx: { my: 2 },
                      required: !0,
                      error: !!U.name,
                      helperText: U.name ? U.name.message : '',
                      autoComplete: 'off'
                    },
                    O('name')
                  )
                ),
                (0, w.jsx)(
                  m.Z,
                  (0, r.Z)(
                    {
                      fullWidth: !0,
                      label: 'Link',
                      sx: { my: 2 },
                      required: !0,
                      error: !!U.link,
                      helperText: U.link ? U.link.message : '',
                      autoComplete: 'off'
                    },
                    O('link')
                  )
                ),
                (0, w.jsx)(
                  m.Z,
                  (0, r.Z)(
                    {
                      fullWidth: !0,
                      label: (0, w.jsx)(x.Z, { id: 'label.type' }),
                      sx: { my: 2 },
                      required: !0,
                      error: !!U.type,
                      helperText: U.type ? U.type.message : '',
                      autoComplete: 'off'
                    },
                    O('type')
                  )
                ),
                (0, w.jsx)(
                  m.Z,
                  (0, r.Z)(
                    {
                      fullWidth: !0,
                      label: 'Category',
                      type: 'number',
                      sx: { my: 2 },
                      required: !0,
                      error: !!U.categoryId,
                      helperText: U.categoryId ? U.categoryId.message : '',
                      autoComplete: 'off'
                    },
                    O('categoryId')
                  )
                ),
                (0, w.jsx)(R, { uploadFile: C, onSetUploadFile: F })
              ]
            })
          });
        },
        D = t(5119),
        S = t(8096),
        W = t(4925),
        L = t(8406),
        _ = t(3786),
        A = t(946),
        O = t(8673),
        H = function () {
          return {
            tableBody: function (e) {
              return [
                {
                  align: 'inherit',
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(y.Z, {
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
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(y.Z, {
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
                  children: (0, w.jsx)(w.Fragment, {
                    children: (0, w.jsx)(y.Z, {
                      variant: 'body1',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      noWrap: !0,
                      children:
                        (null === e || void 0 === e ? void 0 : e.updatedAt) &&
                        (0, A.Z)(
                          (0, O.Z)(
                            null === e || void 0 === e ? void 0 : e.updatedAt
                          ),
                          'dd/MM/yyyy HH:mm'
                        )
                    })
                  })
                }
              ];
            },
            tableHeader: [
              { align: 'inherit', title: 'label.name', name: 'name' },
              { align: 'inherit', title: 'label.code' },
              { align: 'right', title: 'label.updated.at' },
              { align: 'right', title: 'label.actions' }
            ],
            tableFilter: function (e) {
              var n = e.status,
                t = e.dateFrom,
                a = e.dateTo;
              return [
                (0, w.jsx)(D.M, {
                  label: (0, w.jsx)(x.Z, { id: 'label.from' }),
                  onChange: t.onChange
                }),
                (0, w.jsx)(D.M, {
                  label: (0, w.jsx)(x.Z, { id: 'label.to' }),
                  onChange: a.onChange
                }),
                (0, w.jsxs)(S.Z, {
                  sx: { m: 1, minWidth: 120 },
                  children: [
                    (0, w.jsx)(W.Z, {
                      id: 'isActive',
                      children: (0, w.jsx)(x.Z, { id: 'label.status' })
                    }),
                    (0, w.jsxs)(L.Z, {
                      labelId: 'isActive',
                      value: n.value,
                      label: (0, w.jsx)(x.Z, { id: 'label.status' }),
                      onChange: function (e) {
                        return n.onChange(e.target.value);
                      },
                      children: [
                        (0, w.jsx)(_.Z, {
                          value: '',
                          children: (0, w.jsx)('em', {
                            children: (0, w.jsx)(x.Z, { id: 'label.default' })
                          })
                        }),
                        (0, w.jsx)(_.Z, {
                          value: 'active',
                          children: (0, w.jsx)(x.Z, { id: 'label.active' })
                        }),
                        (0, w.jsx)(_.Z, {
                          value: 'disable',
                          children: (0, w.jsx)(x.Z, { id: 'label.disable' })
                        })
                      ]
                    })
                  ]
                })
              ];
            }
          };
        },
        M = 'title.currencies-management',
        P = function () {
          var e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: M }
            ],
            n = (0, p.d)(),
            t = n.visible,
            a = n.hide,
            h = n.show,
            f = (0, s.useState)(),
            m = (0, l.Z)(f, 2),
            g = m[0],
            x = m[1],
            b = (0, p.p)(),
            Z = b.notify,
            v = b.message,
            y = (0, s.useState)([]),
            j = (0, l.Z)(y, 2),
            k = j[0],
            C = j[1],
            F = (0, s.useState)({
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
            R = (0, l.Z)(F, 2),
            T = R[0],
            E = R[1],
            I = H(),
            D = I.tableBody,
            S = I.tableHeader,
            W = I.tableFilter,
            L = (0, u.K4)(
              { page: T.page, size: T.size, search: T.search },
              { refetchOnMountOrArgChange: !0 }
            ),
            _ = L.data,
            A = L.isFetching,
            O = L.refetch;
          (0, s.useEffect)(
            function () {
              _ &&
                (null === _ || void 0 === _ ? void 0 : _.length) > 0 &&
                C(function () {
                  var e;
                  return (0,
                  c.TY)(_, null === (e = S[T.sortBy]) || void 0 === e ? void 0 : e.name, T.sortDirection);
                });
            },
            [_, T]
          );
          var P = (0, u.N_)(),
            U = (0, l.Z)(P, 2),
            B = U[0],
            z = U[1].isLoading,
            N = (0, u.GX)(),
            G = (0, l.Z)(N, 2),
            V = G[0],
            X = G[1].isLoading,
            K = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(n) {
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), B(n).unwrap();
                          case 3:
                            Z({ message: v.DELETED }), O(), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              Z({ message: v.ERROR, type: 'error' });
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            Y = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(n) {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), V(n);
                          case 3:
                            (t = e.sent), h(), x(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              Z({ message: v.ERROR, type: 'error' });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(d.Z, {
                title: M,
                data: k,
                tableHeader: S,
                tableBody: D,
                headerTitle: M,
                breadcrumbs: e,
                onOpenModal: function () {
                  h(), x(null);
                },
                isLoading: A || X || z,
                onDelete: K,
                onUpdate: Y,
                pagination: T,
                onPagination: E,
                tableFilter: W({
                  status: {
                    value: T.status,
                    onChange: function (e) {
                      return E((0, r.Z)((0, r.Z)({}, T), {}, { status: e }));
                    }
                  },
                  dateFrom: {
                    value: T.dateFrom,
                    onChange: function (e) {
                      return E(
                        (0, r.Z)(
                          (0, r.Z)({}, T),
                          {},
                          { dateFrom: (0, c.Zd)(e, 'from') }
                        )
                      );
                    }
                  },
                  dateTo: {
                    value: T.dateTo,
                    onChange: function (e) {
                      return E(
                        (0, r.Z)(
                          (0, r.Z)({}, T),
                          {},
                          { dateTo: (0, c.Zd)(e, 'to') }
                        )
                      );
                    }
                  }
                })
              }),
              (0, w.jsx)(q, {
                open: t,
                onClose: a,
                refetch: O,
                hide: a,
                detail: g
              })
            ]
          });
        };
    }
  }
]);
//# sourceMappingURL=779.bd626cd4.chunk.js.map
