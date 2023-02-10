window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "Slot3x3.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fedewLD5tJuK+YssJ4x/DR", "Slot3x3.Cmd");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cmd = void 0;
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SCRIBE = 7003;
        Code.UNSCRIBE = 7004;
        Code.CHANGE_ROOM = 7005;
        Code.SPIN = 7001;
        Code.UPDATE_JACKPOT = 7002;
        return Code;
      }();
      cmd.Code = Code;
      var SendScribe = function(_super) {
        __extends(SendScribe, _super);
        function SendScribe(betIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE);
          _this.packHeader();
          _this.putByte(betIdx);
          _this.updateSize();
          return _this;
        }
        return SendScribe;
      }(Network_OutPacket_1.default);
      cmd.SendScribe = SendScribe;
      var SendUnScribe = function(_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe(betIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE);
          _this.packHeader();
          _this.putByte(betIdx);
          _this.updateSize();
          return _this;
        }
        return SendUnScribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribe = SendUnScribe;
      var SendChangeRoom = function(_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(oldBetIdx, newBetIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHANGE_ROOM);
          _this.packHeader();
          _this.putByte(oldBetIdx);
          _this.putByte(newBetIdx);
          _this.updateSize();
          return _this;
        }
        return SendChangeRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChangeRoom = SendChangeRoom;
      var SendSpin = function(_super) {
        __extends(SendSpin, _super);
        function SendSpin(betValue, betLines) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SPIN);
          _this.packHeader();
          _this.putInt(betValue);
          _this.putString(betLines);
          _this.updateSize();
          return _this;
        }
        return SendSpin;
      }(Network_OutPacket_1.default);
      cmd.SendSpin = SendSpin;
      var ReceiveUpdateJackpot = function(_super) {
        __extends(ReceiveUpdateJackpot, _super);
        function ReceiveUpdateJackpot(data) {
          var _this = _super.call(this, data) || this;
          _this.value = 0;
          _this.x2 = 0;
          _this.value = _this.getLong();
          _this.x2 = _this.getByte();
          return _this;
        }
        return ReceiveUpdateJackpot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateJackpot = ReceiveUpdateJackpot;
      var ReceiveSpin = function(_super) {
        __extends(ReceiveSpin, _super);
        function ReceiveSpin(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.matrix = "";
          _this.linesWin = "";
          _this.prize = 0;
          _this.currentMoney = 0;
          _this.result = _this.getByte();
          _this.matrix = _this.getString();
          _this.linesWin = _this.getString();
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveSpin;
      }(Network_InPacket_1.default);
      cmd.ReceiveSpin = ReceiveSpin;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "Slot3x3.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ed9es2x7dPjowc9D1zGIrY", "Slot3x3.PopupHistory");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Http_1 = require("../../Loading/src/Http");
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupHistory = function(_super) {
      __extends(PopupHistory, _super);
      function PopupHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("Slot3x3");
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupHistory.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupHistory.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHistory.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHistory.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 134,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page,
          un: Configs_1.default.Login.Nickname
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 7; i++) {
                var item = cc.instantiate(_this.itemTemplate);
                item.parent = _this.itemTemplate.parent;
                _this.items.push(item);
              }
              _this.itemTemplate.destroy();
              _this.itemTemplate = null;
            }
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
              var item = _this.items[i_1];
              if (i_1 < res["results"].length) {
                var itemData = res["results"][i_1];
                item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                item.getChildByName("Session").getComponent(cc.Label).string = itemData["rf"];
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                item.getChildByName("LineBet").getComponent(cc.Label).string = "" == itemData["lb"] ? 0 : itemData["lb"].split(",").length;
                item.getChildByName("LineWin").getComponent(cc.Label).string = "" == itemData["lb"] ? 0 : itemData["lw"].split(",").length;
                item.getChildByName("Result").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                item.active = true;
              } else item.active = false;
            }
          }
        });
      };
      __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHistory.prototype, "itemTemplate", void 0);
      PopupHistory = __decorate([ ccclass ], PopupHistory);
      return PopupHistory;
    }(Dialog_1.default);
    exports.default = PopupHistory;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Slot3x3.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b0a7bB/KFOIYD7clUi6Y2b", "Slot3x3.PopupHonors");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Http_1 = require("../../Loading/src/Http");
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupHonors = function(_super) {
      __extends(PopupHonors, _super);
      function PopupHonors() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHonors.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("Slot3x3");
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupHonors.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupHonors.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupHonors.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHonors.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHonors.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 135,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 7; i++) {
                var item = cc.instantiate(_this.itemTemplate);
                item.parent = _this.itemTemplate.parent;
                _this.items.push(item);
              }
              _this.itemTemplate.destroy();
              _this.itemTemplate = null;
            }
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
              var item = _this.items[i_1];
              if (i_1 < res["results"].length) {
                var itemData = res["results"][i_1];
                item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                item.active = true;
              } else item.active = false;
            }
          }
        });
      };
      __decorate([ property(cc.Label) ], PopupHonors.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
      PopupHonors = __decorate([ ccclass ], PopupHonors);
      return PopupHonors;
    }(Dialog_1.default);
    exports.default = PopupHonors;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Slot3x3.PopupSelectLine": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91e6cYmfSdJsK5BlQ9QfNHq", "Slot3x3.PopupSelectLine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupSelectLine = function(_super) {
      __extends(PopupSelectLine, _super);
      function PopupSelectLine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.buttonsLine = null;
        _this.btnClose = null;
        _this.onSelectedChanged = null;
        _this.SELECTED = "selected";
        return _this;
      }
      PopupSelectLine.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.buttonsLine.children[i];
          node[this_1.SELECTED] = true;
          node.on("click", function() {
            node[_this.SELECTED] = !node[_this.SELECTED];
            node.opacity = node[_this.SELECTED] ? 255 : 80;
            null != _this.onSelectedChanged && _this.onSelectedChanged(_this.getSelectedLines());
            _this.btnClose.interactable = _this.getSelectedLines().length > 0;
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) _loop_1(i);
      };
      PopupSelectLine.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("Slot3x3");
      };
      PopupSelectLine.prototype.actSelectAll = function() {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = true;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actSelectEven = function() {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 != 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actSelectOdd = function() {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 == 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actDeselectAll = function() {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = false;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = false;
      };
      PopupSelectLine.prototype.getSelectedLines = function() {
        var lines = new Array();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          ("undefined" == typeof node[this.SELECTED] || node[this.SELECTED]) && lines.push(i + 1);
        }
        return lines;
      };
      PopupSelectLine.prototype.dismiss = function() {
        this.getSelectedLines().length > 0 && _super.prototype.dismiss.call(this);
      };
      __decorate([ property(cc.Node) ], PopupSelectLine.prototype, "buttonsLine", void 0);
      __decorate([ property(cc.Button) ], PopupSelectLine.prototype, "btnClose", void 0);
      PopupSelectLine = __decorate([ ccclass ], PopupSelectLine);
      return PopupSelectLine;
    }(Dialog_1.default);
    exports.default = PopupSelectLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot3x3.Slot3x3Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80078ySa8dLVq8BknsW4brd", "Slot3x3.Slot3x3Controller");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ButtonBet = void 0;
    var Slot3x3_Cmd_1 = require("./Slot3x3.Cmd");
    var Slot3x3_PopupSelectLine_1 = require("./Slot3x3.PopupSelectLine");
    var Configs_1 = require("../../Loading/src/Configs");
    var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Language_LanguageManager_1 = require("../../Lobby/LobbyScript/Script/common/Language.LanguageManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButtonBet = function() {
      function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this._isActive = false;
      }
      ButtonBet.prototype.setActive = function(isActive) {
        this._isActive = isActive;
        this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.interactable = !isActive;
      };
      __decorate([ property(cc.Button) ], ButtonBet.prototype, "button", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfNormal", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfActive", void 0);
      ButtonBet = __decorate([ ccclass("Slot3x3.ButtonBet") ], ButtonBet);
      return ButtonBet;
    }();
    exports.ButtonBet = ButtonBet;
    var Slot3x3Controller = function(_super) {
      __extends(Slot3x3Controller, _super);
      function Slot3x3Controller() {
        var _this_1 = null !== _super && _super.apply(this, arguments) || this;
        _this_1.sprFrameItems = [];
        _this_1.sprFrameItemsBlur = [];
        _this_1.itemTemplate = null;
        _this_1.buttonBets = [];
        _this_1.columns = null;
        _this_1.linesWin = null;
        _this_1.btnSpin = null;
        _this_1.btnLine = null;
        _this_1.btnClose = null;
        _this_1.btnAuto = null;
        _this_1.sfAuto0 = null;
        _this_1.sfAuto0en = null;
        _this_1.sfAuto1 = null;
        _this_1.sfAuto1en = null;
        _this_1.btnBoost = null;
        _this_1.sfBoost0 = null;
        _this_1.sfBoost0en = null;
        _this_1.sfBoost1 = null;
        _this_1.sfBoost1en = null;
        _this_1.lblJackpot = null;
        _this_1.lblWinCash = null;
        _this_1.lblToast = null;
        _this_1.effectJackpot = null;
        _this_1.effectBigWin = null;
        _this_1.popupSelectLine = null;
        _this_1.popups = [];
        _this_1.rollStartItemCount = 15;
        _this_1.rollAddItemCount = 10;
        _this_1.spinDuration = 1.2;
        _this_1.addSpinDuration = .3;
        _this_1.itemHeight = 0;
        _this_1.betIdx = 0;
        _this_1.listBet = [ 10, 100, 1e3 ];
        _this_1.arrLineSelect = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
        _this_1.isSpined = true;
        _this_1.isBoost = false;
        _this_1.isAuto = false;
        _this_1.isCanChangeBet = true;
        _this_1.lastSpinRes = null;
        return _this_1;
      }
      Slot3x3Controller.prototype.start = function() {
        var _this_1 = this;
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var column = this.columns.children[i];
          var count = this.rollStartItemCount + i * this.rollAddItemCount;
          for (var j = 0; j < count; j++) {
            var item = cc.instantiate(this.itemTemplate);
            item.parent = column;
            item.children[0].getComponent(cc.Sprite).spriteFrame = j >= 3 ? this.sprFrameItemsBlur[Utils_1.default.randomRangeInt(0, this.sprFrameItemsBlur.length)] : this.sprFrameItems[Utils_1.default.randomRangeInt(0, this.sprFrameItems.length)];
          }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        var _loop_1 = function(i) {
          btn = this_1.buttonBets[i];
          btn.setActive(i == this_1.betIdx);
          btn.button.node.on("click", function() {
            App_1.default.instance.showBgMiniGame("Slot3x3");
            if (!_this_1.isCanChangeBet) {
              _this_1.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
              return;
            }
            var oldIdx = _this_1.betIdx;
            _this_1.betIdx = i;
            for (var i_1 = 0; i_1 < _this_1.buttonBets.length; i_1++) _this_1.buttonBets[i_1].setActive(i_1 == _this_1.betIdx);
            _this_1.isCanChangeBet = false;
            _this_1.scheduleOnce(function() {
              _this_1.isCanChangeBet = true;
            }, 1);
            MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendChangeRoom(oldIdx, _this_1.betIdx));
          });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) _loop_1(i);
        this.btnAuto.node.on("click", function() {
          _this_1.isAuto = !_this_1.isAuto;
          App_1.default.instance.showBgMiniGame("Slot3x3");
          if (_this_1.isAuto) {
            _this_1.isSpined && _this_1.actSpin();
            _this_1.btnBoost.interactable = false;
            _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = "vi" == Language_LanguageManager_1.default.instance.languageCode ? _this_1.sfAuto1 : _this_1.sfAuto1en;
          } else {
            _this_1.btnBoost.interactable = true;
            _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = "vi" == Language_LanguageManager_1.default.instance.languageCode ? _this_1.sfAuto0 : _this_1.sfAuto0en;
            _this_1.isSpined && _this_1.setEnabledAllButtons(true);
          }
        });
        this.btnBoost.node.on("click", function() {
          _this_1.isBoost = !_this_1.isBoost;
          App_1.default.instance.showBgMiniGame("Slot3x3");
          if (_this_1.isBoost) {
            _this_1.isSpined && _this_1.actSpin();
            _this_1.btnAuto.interactable = false;
            _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = "vi" == Language_LanguageManager_1.default.instance.languageCode ? _this_1.sfBoost1 : _this_1.sfBoost1en;
          } else {
            _this_1.btnAuto.interactable = true;
            _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = "vi" == Language_LanguageManager_1.default.instance.languageCode ? _this_1.sfBoost0 : _this_1.sfBoost0en;
            _this_1.isSpined && _this_1.setEnabledAllButtons(true);
          }
        });
        this.popupSelectLine.onSelectedChanged = function(lines) {
          _this_1.arrLineSelect = lines;
        };
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function() {
          if (!_this_1.node.active) return;
          _this_1.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function() {
          if (!_this_1.node.active) return;
          _this_1.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function(data) {
          if (!_this_1.node.active) return;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot3x3_Cmd_1.default.Code.UPDATE_JACKPOT:
            var res = new Slot3x3_Cmd_1.default.ReceiveUpdateJackpot(data);
            Tween_1.default.numberTo(_this_1.lblJackpot, res.value, .3);
            break;

           case Slot3x3_Cmd_1.default.Code.SPIN:
            var res = new Slot3x3_Cmd_1.default.ReceiveSpin(data);
            _this_1.onSpinResult(res);
          }
        }, this);
      };
      Slot3x3Controller.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        App_1.default.instance.showBgMiniGame("Slot3x3");
        _super.prototype.show.call(this);
        this.lblToast.node.parent.active = false;
        this.lblWinCash.parent.active = false;
        for (var i = 0; i < this.linesWin.childrenCount; i++) this.linesWin.children[i].active = false;
        this.isSpined = true;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].setActive(i == this.betIdx);
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendScribe(this.betIdx));
      };
      Slot3x3Controller.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        App_1.default.instance.hideGameMini("Slot3x3");
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendUnScribe(this.betIdx));
      };
      Slot3x3Controller.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      Slot3x3Controller.prototype.actSpin = function(even) {
        void 0 === even && (even = null);
        if (!this.isSpined) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        null != even && App_1.default.instance.showBgMiniGame("Slot3x3");
        this.isSpined = false;
        this.stopAllEffects();
        this.stopShowLinesWin();
        this.setEnabledAllButtons(false);
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].button.interactable = false;
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendSpin(this.listBet[this.betIdx], this.arrLineSelect.toString()));
      };
      Slot3x3Controller.prototype.setEnabledAllButtons = function(isEnabled) {
        this.btnSpin.interactable = isEnabled;
        this.btnClose.interactable = isEnabled;
        this.btnLine.interactable = isEnabled;
      };
      Slot3x3Controller.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      Slot3x3Controller.prototype.onSpinResult = function(res) {
        var _this_1 = this;
        var _this = this;
        var resultSuccess = [ 0, 1, 2, 3, 4, 5, 6 ];
        if (resultSuccess.indexOf(res.result) < 0) {
          this.scheduleOnce(function() {
            this.isSpined = true;
          }, 1);
          this.setEnabledAllButtons(true);
          for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].button.interactable = true;
          this.isAuto = false;
          this.btnAuto.interactable = true;
          this.btnAuto.getComponent(cc.Sprite).spriteFrame = this.sfAuto0;
          this.isBoost = false;
          this.btnBoost.interactable = true;
          this.btnBoost.getComponent(cc.Sprite).spriteFrame = this.sfBoost0;
          switch (res.result) {
           case 102:
            this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
            break;

           default:
            this.showToast(App_1.default.instance.getTextLang("txt_unknown_error1"));
          }
          return;
        }
        Configs_1.default.Login.Coin -= this.listBet[this.betIdx] * this.arrLineSelect.length;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        Configs_1.default.Login.Coin = res.currentMoney;
        this.lastSpinRes = res;
        var matrix = res.matrix.split(",");
        var timeScale = this.isBoost ? .5 : 1;
        var _loop_2 = function(i_2) {
          var roll = this_2.columns.children[i_2];
          var step1Pos = .3 * this_2.itemHeight;
          var step2Pos = -this_2.itemHeight * roll.childrenCount + 3 * this_2.itemHeight - .3 * this_2.itemHeight;
          var step3Pos = -this_2.itemHeight * roll.childrenCount + 3 * this_2.itemHeight;
          roll.runAction(cc.sequence(cc.delayTime(.2 * i_2 * timeScale), cc.moveTo(.2 * timeScale, cc.v2(roll.getPosition().x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_2.spinDuration + this_2.addSpinDuration * i_2) * timeScale, cc.v2(roll.getPosition().x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.moveTo(.2 * timeScale, cc.v2(roll.getPosition().x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function() {
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
            i_2 === _this_1.columns.childrenCount - 1 && _this.spined();
          })));
          roll.runAction(cc.sequence(cc.delayTime((.7 + .2 * i_2) * timeScale), cc.callFunc(function() {
            var children = roll.children;
            children[2].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[i_2])];
            children[1].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[3 + i_2])];
            children[0].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[6 + i_2])];
            children[children.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[i_2])];
            children[children.length - 2].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[3 + i_2])];
            children[children.length - 3].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[6 + i_2])];
          })));
        };
        var this_2 = this;
        for (var i_2 = 0; i_2 < this.columns.childrenCount; i_2++) _loop_2(i_2);
      };
      Slot3x3Controller.prototype.spined = function() {
        var _this_1 = this;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        this.isSpined = true;
        this.isAuto || this.isBoost || this.setEnabledAllButtons(true);
        switch (this.lastSpinRes.result) {
         case 0:
         case 1:
          this.showLineWins();
          break;

         case 2:
          this.showEffectBigWin(this.lastSpinRes.prize, function() {
            return _this_1.showLineWins();
          });
          break;

         case 3:
         case 4:
          this.showEffectJackpot(this.lastSpinRes.prize, function() {
            return _this_1.showLineWins();
          });
          break;

         case 6:
          this.showEffectBigWin(this.lastSpinRes.prize, function() {
            return _this_1.showLineWins();
          });
        }
      };
      Slot3x3Controller.prototype.showEffectBigWin = function(cash, cb) {
        var _this_1 = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          _this_1.effectBigWin.active = false;
          null != cb && cb();
        })));
      };
      Slot3x3Controller.prototype.showEffectJackpot = function(cash, cb) {
        var _this_1 = this;
        void 0 === cb && (cb = null);
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          _this_1.effectJackpot.active = false;
          null != cb && cb();
        })));
      };
      Slot3x3Controller.prototype.showWinCash = function(coin) {
        var parent = this.lblWinCash.parent;
        var label = this.lblWinCash.getComponent(cc.Label);
        parent.stopAllActions();
        parent.active = true;
        label.string = "0";
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
          Tween_1.default.numberTo(label, coin, .5);
        }), cc.delayTime(1.5), cc.fadeOut(.3), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      Slot3x3Controller.prototype.stopAllEffects = function() {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
      };
      Slot3x3Controller.prototype.stopShowLinesWin = function() {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) this.linesWin.children[i].active = false;
        this.stopAllItemEffect();
      };
      Slot3x3Controller.prototype.stopAllItemEffect = function() {
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var children = this.columns.children[i].children;
          children[0].stopAllActions();
          children[1].stopAllActions();
          children[2].stopAllActions();
          children[0].runAction(cc.scaleTo(.1, 1));
          children[1].runAction(cc.scaleTo(.1, 1));
          children[2].runAction(cc.scaleTo(.1, 1));
        }
      };
      Slot3x3Controller.prototype.showLineWins = function() {
        var _this_1 = this;
        this.linesWin.stopAllActions();
        var linesWin = this.lastSpinRes.linesWin.split(",");
        var linesWinChildren = this.linesWin.children;
        for (var i = 0; i < linesWinChildren.length; i++) linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
        var actions = [];
        if (this.lastSpinRes.prize > 0) {
          this.showWinCash(this.lastSpinRes.prize);
          actions.push(cc.delayTime(1.5));
          actions.push(cc.callFunc(function() {
            for (var i = 0; i < linesWinChildren.length; i++) linesWinChildren[i].active = false;
          }));
        }
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          _this_1.isSpined = true;
          if (_this_1.isBoost || _this_1.isAuto) _this_1.actSpin(); else {
            _this_1.setEnabledAllButtons(true);
            for (var i = 0; i < _this_1.buttonBets.length; i++) _this_1.buttonBets[i].button.interactable = true;
          }
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
      };
      __decorate([ property([ cc.SpriteFrame ]) ], Slot3x3Controller.prototype, "sprFrameItems", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot3x3Controller.prototype, "sprFrameItemsBlur", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "itemTemplate", void 0);
      __decorate([ property([ ButtonBet ]) ], Slot3x3Controller.prototype, "buttonBets", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "columns", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "linesWin", void 0);
      __decorate([ property(cc.Button) ], Slot3x3Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], Slot3x3Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Button) ], Slot3x3Controller.prototype, "btnClose", void 0);
      __decorate([ property(cc.Button) ], Slot3x3Controller.prototype, "btnAuto", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfAuto0", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfAuto0en", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfAuto1", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfAuto1en", void 0);
      __decorate([ property(cc.Button) ], Slot3x3Controller.prototype, "btnBoost", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfBoost0", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfBoost0en", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfBoost1", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot3x3Controller.prototype, "sfBoost1en", void 0);
      __decorate([ property(cc.Label) ], Slot3x3Controller.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "lblWinCash", void 0);
      __decorate([ property(cc.Label) ], Slot3x3Controller.prototype, "lblToast", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "effectJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot3x3Controller.prototype, "effectBigWin", void 0);
      __decorate([ property(Slot3x3_PopupSelectLine_1.default) ], Slot3x3Controller.prototype, "popupSelectLine", void 0);
      __decorate([ property([ cc.Node ]) ], Slot3x3Controller.prototype, "popups", void 0);
      Slot3x3Controller = __decorate([ ccclass ], Slot3x3Controller);
      return Slot3x3Controller;
    }(MiniGame_1.default);
    exports.default = Slot3x3Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/MiniGame": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Language.LanguageManager": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./Slot3x3.Cmd": "Slot3x3.Cmd",
    "./Slot3x3.PopupSelectLine": "Slot3x3.PopupSelectLine"
  } ]
}, {}, [ "Slot3x3.Cmd", "Slot3x3.PopupHistory", "Slot3x3.PopupHonors", "Slot3x3.PopupSelectLine", "Slot3x3.Slot3x3Controller" ]);