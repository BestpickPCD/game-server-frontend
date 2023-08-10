let davidjs = new (function () {
  this.data = {};
  this.set = function (val, name = 'data') {
    this.data[name] = val;
  };
  this.get = function (name = 'data', clear = false) {
    const x = this.data[name];
    if (clear) {
      this.data[name] = null;
    }
    return x;
  };
  this.test = function () {
    return 'ABC';
  };
  this.get_users = function (d) {
    let rt = null;
    if (d && typeof d == 'object' && d.data) {
      if (d.data.data) {
        rt = d.data.data.data;
      }
    }
    return rt;
  };
  this.int = function (num, revert = false) {
    let val = parseInt(num);
    if (!val) {
      val = 0;
    }
    if (revert) {
      val = 1 - (val ? 1 : 0);
    }
    return val;
  };
})();
export default davidjs;
