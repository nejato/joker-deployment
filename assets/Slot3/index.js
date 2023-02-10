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
  "Slot3.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d479atiaRFGep+OiO/49Gts", "Slot3.Cmd");
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
    var ccclass = cc._decorator.ccclass;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SUBCRIBE = 12003;
        Code.UNSUBCRIBE = 12004;
        Code.CHANGE_ROOM = 12005;
        Code.PLAY = 12001;
        Code.UPDATE_POT = 12002;
        Code.AUTO = 12006;
        Code.FORCE_STOP_AUTO = 12008;
        Code.DATE_X2 = 12009;
        Code.BIG_WIN = 12010;
        Code.FREE = 12011;
        Code.FREE_DAI_LY = 12012;
        Code.MINIMIZE = 12013;
        return Code;
      }();
      cmd.Code = Code;
      var ReceiveFreeDaiLy = function(_super) {
        __extends(ReceiveFreeDaiLy, _super);
        function ReceiveFreeDaiLy(data) {
          var _this = _super.call(this, data) || this;
          _this.freeSpin = 0;
          _this.freeSpin = _this.getByte();
          return _this;
        }
        return ReceiveFreeDaiLy;
      }(Network_InPacket_1.default);
      cmd.ReceiveFreeDaiLy = ReceiveFreeDaiLy;
      var SendSubcribe = function(_super) {
        __extends(SendSubcribe, _super);
        function SendSubcribe(roomId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SUBCRIBE);
          _this.packHeader();
          _this.putByte(roomId);
          _this.updateSize();
          return _this;
        }
        return SendSubcribe;
      }(Network_OutPacket_1.default);
      cmd.SendSubcribe = SendSubcribe;
      var SendUnSubcribe = function(_super) {
        __extends(SendUnSubcribe, _super);
        function SendUnSubcribe(roomId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSUBCRIBE);
          _this.packHeader();
          _this.putByte(roomId);
          _this.updateSize();
          return _this;
        }
        return SendUnSubcribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnSubcribe = SendUnSubcribe;
      var SendPlay = function(_super) {
        __extends(SendPlay, _super);
        function SendPlay(lines) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.PLAY);
          _this.packHeader();
          _this.putString(lines);
          _this.updateSize();
          return _this;
        }
        return SendPlay;
      }(Network_OutPacket_1.default);
      cmd.SendPlay = SendPlay;
      var ReceiveDateX2 = function(_super) {
        __extends(ReceiveDateX2, _super);
        function ReceiveDateX2(data) {
          var _this = _super.call(this, data) || this;
          _this.ngayX2 = "";
          _this.remain = 0;
          _this.currentMoney = 0;
          _this.freeSpin = 0;
          _this.lines = "";
          _this.currentRoom = 0;
          _this.ngayX2 = _this.getString();
          _this.remain = _this.getByte();
          _this.currentMoney = _this.getLong();
          _this.freeSpin = _this.getByte();
          _this.lines = _this.getString();
          _this.currentRoom = _this.getByte();
          return _this;
        }
        return ReceiveDateX2;
      }(Network_InPacket_1.default);
      cmd.ReceiveDateX2 = ReceiveDateX2;
      var SendChangeRoom = function(_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(roomLeavedId, roomJoinedId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHANGE_ROOM);
          _this.packHeader();
          _this.putByte(roomLeavedId);
          _this.putByte(roomJoinedId);
          _this.updateSize();
          return _this;
        }
        return SendChangeRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChangeRoom = SendChangeRoom;
      var ReceiveUpdatePot = function(_super) {
        __extends(ReceiveUpdatePot, _super);
        function ReceiveUpdatePot(data) {
          var _this = _super.call(this, data) || this;
          _this.jackpot = 0;
          _this.x2 = 0;
          _this.jackpot = _this.getLong();
          _this.x2 = _this.getByte();
          return _this;
        }
        return ReceiveUpdatePot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdatePot = ReceiveUpdatePot;
      var ReceivePlay = function(_super) {
        __extends(ReceivePlay, _super);
        function ReceivePlay(data) {
          var _this = _super.call(this, data) || this;
          _this.ref = 0;
          _this.result = 0;
          _this.matrix = "";
          _this.linesWin = "";
          _this.haiSao = "";
          _this.prize = 0;
          _this.currentMoney = 0;
          _this.freeSpin = 0;
          _this.isFree = false;
          _this.itemsWild = "";
          _this.ratio = 0;
          _this.currentNumberFreeSpin = 0;
          _this.ref = _this.getLong();
          _this.result = _this.getByte();
          _this.matrix = _this.getString();
          _this.linesWin = _this.getString();
          _this.haiSao = _this.getString();
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          _this.freeSpin = _this.getByte();
          _this.isFree = _this.getBool();
          _this.itemsWild = _this.getString();
          _this.ratio = _this.getByte();
          _this.currentNumberFreeSpin = _this.getByte();
          return _this;
        }
        return ReceivePlay;
      }(Network_InPacket_1.default);
      cmd.ReceivePlay = ReceivePlay;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "Slot3.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c03a6e2Bl9MPLhXSQ+P8I4x", "Slot3.PopupBonus");
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
    exports.PopupBonus = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupBonus = function(_super) {
      __extends(PopupBonus, _super);
      function PopupBonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.items = null;
        _this.nodeBoxNotify = null;
        _this.txtNotify = null;
        _this.lblLeft = null;
        _this.lblHeso = null;
        _this.lblWin = null;
        _this.listItem = [];
        _this.factor = 1;
        _this.left = 0;
        _this.betValue = 0;
        _this.onFinished = null;
        _this.onSpecialFinished = null;
        _this.dataBonus = [];
        _this.dataSpecial = -1;
        _this.heso = 0;
        _this.win = 0;
        _this.controller = null;
        return _this;
      }
      PopupBonus.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.listItem[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["label"] = node.getChildByName("label").getComponent(cc.Label);
          node["shadow"] = node.getChildByName("shadow");
          node["icon"] = node.getChildByName("icon");
          node["factor"] = node.getChildByName("factor");
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                node["btn"].node.active = false;
                node["factor"].active = true;
                break;

               case 1:
                node["btn"].node.active = false;
                node["icon"].active = true;
                node["label"].node.active = true;
                node["shadow"].active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["btn"].node.active = false;
                node["icon"].active = true;
                node["label"].node.active = true;
                node["shadow"].active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["btn"].node.active = false;
                node["icon"].active = true;
                node["label"].node.active = true;
                node["shadow"].active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["btn"].node.active = false;
                node["icon"].active = true;
                node["label"].node.active = true;
                node["shadow"].active = true;
                node["label"].string = "0";
                _this.win += 20 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, .3);
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
              }
              _this.left--;
              _this.lblLeft.string = "" + _this.left;
              _this.left <= 0 && _this.hidden();
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.listItem.length; i++) _loop_1(i);
      };
      PopupBonus.prototype.showBonus = function(betValue, bonus, controller, onFinished) {
        this.node.active = true;
        cc.tween(this.node).set({
          y: cc.winSize.height
        }).to(.5, {
          y: 0
        }, {
          easing: cc.easing.sineIn
        }).start();
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, .3);
        for (var i = 0; i < this.listItem.length; i++) {
          var node = this.listItem[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["icon"] = node.getChildByName("icon");
          node["factor"] = node.getChildByName("factor");
          node["icon"].active = false;
          node["factor"].active = false;
          node["is_open"] = false;
        }
        for (var i = 0; i < this.listItem.length; i++) {
          var node = this.listItem[i];
          var btn = node.getChildByName("btn").getComponent(cc.Button);
          btn.node.active = true;
          btn.interactable = true;
          node.getChildByName("label").active = false;
          node.getChildByName("shadow").active = false;
        }
        this.betValue = betValue;
        this.onFinished = onFinished;
        var arrBonus = bonus.split(",");
        this.dataBonus = [];
        for (var i = 0; i < arrBonus.length; i++) this.dataBonus.push(Number(arrBonus[i]));
        this.left = this.dataBonus.length - 1;
        this.factor = 1;
        this.lblLeft.string = "" + this.left;
        this.heso = this.dataBonus[0];
        this.lblHeso.string = this.heso + "";
      };
      PopupBonus.prototype.hidden = function() {
        this.controller.onBtnSoundSumary();
        Tween_1.default.showPopup(this.nodeBoxNotify, this.nodeBoxNotify.parent);
        Tween_1.default.numberTo(this.txtNotify, this.win, .3);
      };
      PopupBonus.prototype.onClickAutoOpen = function() {
        var randomList = [];
        for (var i = 0; i < this.listItem.length; i++) randomList.push(i);
        randomList.sort(function() {
          return Math.random() - .5;
        });
        var _loop_2 = function(i) {
          var node = this_2.listItem[randomList[i]];
          this_2.left > 0 && cc.tween(node).delay(.1 * i).call(function() {
            node.getChildByName("btn").emit("click");
          }).start();
        };
        var this_2 = this;
        for (var i = 0; i < this.listItem.length; i++) _loop_2(i);
      };
      PopupBonus.prototype.onBtnExit = function() {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function() {
          cc.tween(_this.node).to(.5, {
            y: cc.winSize.height
          }, {
            easing: cc.easing.backIn
          }).call(function() {
            _this.node.active = false;
          }).start();
          _this.onFinished();
        }, 1.5);
      };
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "items", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeBoxNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "txtNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblLeft", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblHeso", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblWin", void 0);
      __decorate([ property([ cc.Node ]) ], PopupBonus.prototype, "listItem", void 0);
      PopupBonus = __decorate([ ccclass ], PopupBonus);
      return PopupBonus;
    }(Dialog_1.default);
    exports.PopupBonus = PopupBonus;
    exports.default = PopupBonus;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ],
  "Slot3.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d500udDI5AHo8iwKnnRW+R", "Slot3.PopupGuide");
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
    exports.PopupGuide = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupGuide = function(_super) {
      __extends(PopupGuide, _super);
      function PopupGuide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this.btnNext = null;
        _this.btnPrev = null;
        _this.soundClick = null;
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
      }
      PopupGuide.prototype.start = function() {};
      PopupGuide.prototype.show = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.show.call(this);
        this.page = this.pageView.getCurrentPageIndex();
      };
      PopupGuide.prototype.actNext = function() {
        this.page < this.pageView.getPages().length - 1 && this.page++;
        this.pageView.scrollToPage(this.page, .2);
      };
      PopupGuide.prototype.actPrev = function() {
        this.page > 0 && this.page--;
        this.pageView.scrollToPage(this.page, .2);
      };
      PopupGuide.prototype.dismiss = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.dismiss.call(this);
      };
      PopupGuide.prototype.canPlaySound = function() {
        if (null == this.soundClick) return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_3");
        this.soundSlotState = null != soundSave ? parseInt(soundSave) : 1;
        return 1 == this.soundSlotState;
      };
      __decorate([ property(cc.PageView) ], PopupGuide.prototype, "pageView", void 0);
      __decorate([ property(cc.Node) ], PopupGuide.prototype, "btnNext", void 0);
      __decorate([ property(cc.Node) ], PopupGuide.prototype, "btnPrev", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], PopupGuide.prototype, "soundClick", void 0);
      PopupGuide = __decorate([ ccclass ], PopupGuide);
      return PopupGuide;
    }(Dialog_1.default);
    exports.PopupGuide = PopupGuide;
    exports.default = PopupGuide;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot3.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29463Em8L9Ac4RYNPTQ3th1", "Slot3.PopupHistory");
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
    var Configs_1 = require("../../Loading/src/Configs");
    var Http_1 = require("../../Loading/src/Http");
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
        _this.soundClick = null;
        _this.soundSlotState = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHistory.prototype.show = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupHistory.prototype.dismiss = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
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
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHistory.prototype.actPrevPage = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
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
          c: 137,
          p: this.page,
          un: Configs_1.default.Login.Nickname,
          gn: "Spartan"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 10; i++) {
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
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 255 : 0;
              item.getChildByName("Session").getComponent(cc.Label).string = itemData["rf"];
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("LineBet").getComponent(cc.Label).string = "" === itemData["lb"] ? 0 : itemData["lb"].split(",").length;
              item.getChildByName("LineWin").getComponent(cc.Label).string = "" === itemData["lw"] ? 0 : itemData["lw"].split(",").length;
              item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      PopupHistory.prototype.canPlaySound = function() {
        if (null == this.soundClick) return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        this.soundSlotState = null != soundSave ? parseInt(soundSave) : 1;
        return 1 == this.soundSlotState;
      };
      __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHistory.prototype, "itemTemplate", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], PopupHistory.prototype, "soundClick", void 0);
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
  "Slot3.PopupJackpotHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "beb9cpRIw1Ld6W1Djf3NXhW", "Slot3.PopupJackpotHistory");
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
    exports.PopupJackpotHistory = void 0;
    var Configs_1 = require("../../Loading/src/Configs");
    var Http_1 = require("../../Loading/src/Http");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupJackpotHistory = function(_super) {
      __extends(PopupJackpotHistory, _super);
      function PopupJackpotHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.soundClick = null;
        _this.soundSlotState = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupJackpotHistory.prototype.show = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupJackpotHistory.prototype.dismiss = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupJackpotHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupJackpotHistory.prototype.actNextPage = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupJackpotHistory.prototype.actPrevPage = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupJackpotHistory.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 138,
          p: this.page,
          gn: "Spartan"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 10; i++) {
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
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 255 : 0;
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("Type").getComponent(cc.Label).string = 3 == itemData["rs"] ? "Jackpot" : "Big win";
              item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
              item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      PopupJackpotHistory.prototype.canPlaySound = function() {
        if (null == this.soundClick) return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        this.soundSlotState = null != soundSave ? parseInt(soundSave) : 1;
        return 1 == this.soundSlotState;
      };
      __decorate([ property(cc.Label) ], PopupJackpotHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupJackpotHistory.prototype, "itemTemplate", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], PopupJackpotHistory.prototype, "soundClick", void 0);
      PopupJackpotHistory = __decorate([ ccclass ], PopupJackpotHistory);
      return PopupJackpotHistory;
    }(Dialog_1.default);
    exports.PopupJackpotHistory = PopupJackpotHistory;
    exports.default = PopupJackpotHistory;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Slot3.PopupSelectLine": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c2c527KvpLq4jyUbajqGto", "Slot3.PopupSelectLine");
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
    exports.PopupSelectLine = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupSelectLine = function(_super) {
      __extends(PopupSelectLine, _super);
      function PopupSelectLine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.buttonsLine = null;
        _this.btnClose = null;
        _this.atlasPopup = null;
        _this.listBtn = [];
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
      PopupSelectLine.prototype.onClickOptionLine = function(even, data) {};
      PopupSelectLine.prototype.resetSpriteButton = function() {
        var listSpriteName = [ "btn_bochon", "btn_chonchan", "btn_chonle", "btn_tatca" ];
        for (var i = 0; i < this.listBtn.length; i++) this.listBtn[i].node.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame(listSpriteName[i]);
      };
      PopupSelectLine.prototype.actSelectAll = function(even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = true;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_tatca_on");
      };
      PopupSelectLine.prototype.actSelectEven = function(even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 != 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_chonchan_on");
      };
      PopupSelectLine.prototype.actSelectOdd = function(even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 == 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_chonle_on");
      };
      PopupSelectLine.prototype.actDeselectAll = function(even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = false;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = false;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_bochon_on");
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
      __decorate([ property(cc.SpriteAtlas) ], PopupSelectLine.prototype, "atlasPopup", void 0);
      __decorate([ property([ cc.Button ]) ], PopupSelectLine.prototype, "listBtn", void 0);
      PopupSelectLine = __decorate([ ccclass ], PopupSelectLine);
      return PopupSelectLine;
    }(Dialog_1.default);
    exports.PopupSelectLine = PopupSelectLine;
    exports.default = PopupSelectLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot3.Slot3Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c646aVL1dHuaVCHSCUXWn1", "Slot3.Slot3Controller");
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
    var Slot3_Cmd_1 = require("./Slot3.Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot3_PopupSelectLine_1 = require("./Slot3.PopupSelectLine");
    var Slot3_PopupBonus_1 = require("./Slot3.PopupBonus");
    var Slot3_TrialResults_1 = require("./Slot3.TrialResults");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var BundleControl_1 = require("../../Loading/src/BundleControl");
    var Slot3_PopupGuide_1 = require("./Slot3.PopupGuide");
    var Slot3_PopupHistory_1 = require("./Slot3.PopupHistory");
    var Slot3_PopupJackpotHistory_1 = require("./Slot3.PopupJackpotHistory");
    var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot3Controller = function(_super) {
      __extends(Slot3Controller, _super);
      function Slot3Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.toggleMusic = null;
        _this.sprFrameItems = [];
        _this.sprFrameItemsBlur = [];
        _this.columns = null;
        _this.itemTemplate = null;
        _this.linesWin = null;
        _this.iconWildColumns = null;
        _this.lblJackpot = null;
        _this.lblBet = null;
        _this.lblLine = null;
        _this.lblTotalBet = null;
        _this.lblCoin = null;
        _this.lblWinNow = null;
        _this.lblFreeSpinCount = null;
        _this.toggleAuto = null;
        _this.toggleBoost = null;
        _this.toggleTrial = null;
        _this.btnSpin = null;
        _this.btnBack = null;
        _this.btnBetUp = null;
        _this.btnBetDown = null;
        _this.btnLine = null;
        _this.toast = null;
        _this.effectWinCash = null;
        _this.effectBigWin = null;
        _this.effectJackpot = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupGuide = null;
        _this.popupJackpotHistory = null;
        _this.popupHistory = null;
        _this.popupBonus = null;
        _this.soundBg = null;
        _this.soundBgBonus = null;
        _this.soundClick = null;
        _this.soundBonusFail = null;
        _this.soundFreeSpin = null;
        _this.soundGoldEarn = null;
        _this.soundJackpot = null;
        _this.soundSpinResult = null;
        _this.soundSpinSpinning = null;
        _this.spineIcon = null;
        _this.spineIconList = [];
        _this.daiLyFreeSpin = 0;
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = .3;
        _this.itemHeight = 0;
        _this.betIdx = 0;
        _this.listBet = [ 100, 1e3, 1e4 ];
        _this.listBetLabel = [ "100", "1.000", "10.000" ];
        _this.arrLineSelect = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];
        _this.isSpined = true;
        _this.wildItemId = 2;
        _this.mapLine = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 1, 2, 3, 9 ], [ 5, 11, 12, 13, 9 ], [ 0, 1, 7, 13, 14 ], [ 10, 11, 7, 3, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 0, 6, 7, 8, 4 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 2, 8, 4 ], [ 10, 6, 12, 8, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 12, 3, 4 ], [ 10, 11, 2, 13, 14 ], [ 0, 11, 12, 13, 4 ], [ 10, 1, 2, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 5, 11, 2, 13, 9 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ] ];
        _this.lastSpinRes = null;
        _this.columnsWild = [];
        _this.currentNumberFreeSpin = 0;
        _this.mutipleJpNode = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        return _this;
      }
      Slot3Controller.prototype.start = function() {
        var _this = this;
        this.daiLyFreeSpin = 0;
        var musicSave = cc.sys.localStorage.getItem("music_Slot_3");
        if (null != musicSave) this.musicSlotState = parseInt(musicSave); else {
          this.musicSlotState = 1;
          cc.sys.localStorage.setItem("music_Slot_3", "1");
        }
        var soundSave = cc.sys.localStorage.getItem("music_Slot_3");
        if (null != soundSave) this.soundSlotState = parseInt(soundSave); else {
          this.soundSlotState = 1;
          cc.sys.localStorage.setItem("music_Slot_3", "1");
        }
        0 == this.musicSlotState ? this.toggleMusic.isChecked = true : this.toggleMusic.isChecked = false;
        if (1 == this.musicSlotState) {
          var musicId = this.randomBetween(0, 4);
          this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
        }
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var column = this.columns.children[i];
          var count = this.rollStartItemCount + i * this.rollAddItemCount;
          for (var j = 0; j < count; j++) {
            var item = cc.instantiate(this.itemTemplate);
            item.getComponentInChildren(sp.Skeleton).node.active = false;
            item.parent = column;
            j >= 3 ? this.setItemSprite(item.children[0].getComponent(cc.Sprite), this.sprFrameItemsBlur[Utils_1.default.randomRangeInt(0, this.sprFrameItemsBlur.length)]) : this.setItemSprite(item.children[0].getComponent(cc.Sprite), this.sprFrameItems[Utils_1.default.randomRangeInt(0, this.sprFrameItems.length)]);
          }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.actBack();
        }, this);
        SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendSubcribe(this.betIdx));
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Lobby_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            var res = new Lobby_Cmd_1.default.ResUpdateJackpotSlots(data);
            var resJson = JSON.parse(res.pots);
            break;

           case Slot3_Cmd_1.default.Code.FREE_DAI_LY:
            if (!_this.toggleTrial.isChecked) {
              var res = new Slot3_Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.daiLyFreeSpin = res.freeSpin;
            }
            break;

           case Slot3_Cmd_1.default.Code.DATE_X2:
            var res = new Slot3_Cmd_1.default.ReceiveDateX2(data);
            _this.currentNumberFreeSpin = res.freeSpin + _this.daiLyFreeSpin;
            if (res.freeSpin > 0) {
              _this.lblFreeSpinCount.node.parent.active = true;
              _this.lblFreeSpinCount.string = res.freeSpin.toString();
            } else _this.lblFreeSpinCount.node.parent.active = false;
            break;

           case Slot3_Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot3_Cmd_1.default.ReceiveUpdatePot(data);
            Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, .3);
            break;

           case Slot3_Cmd_1.default.Code.PLAY:
            var res = new Slot3_Cmd_1.default.ReceivePlay(data);
            _this.onSpinResult(res);
          }
        }, this);
        this.stopShowLinesWin();
        this.changeItemToDark(false);
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.lblTotalBet.string = Utils_1.default.formatMoney(this.arrLineSelect.length * this.listBet[this.betIdx]);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          Tween_1.default.numberTo(_this.lblCoin, Configs_1.default.Login.Coin, .3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("\u0110ang k\u1ebft n\u1ed1i t\u1edbi server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function() {
          App_1.default.instance.showLoading(false);
        });
      };
      Slot3Controller.prototype.initMutipleJPNode = function() {
        var _this = this;
        this.mutipleJpNode || cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          if (null != err1) ; else {
            _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
            _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
            _this.mutipleJpNode.setInfo("THANTAI");
          }
        });
      };
      Slot3Controller.prototype.showToast = function(msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
          _this.toast.active = false;
        })));
      };
      Slot3Controller.prototype.moneyToK = function(money) {
        return Utils_1.default.formatMoney(money);
      };
      Slot3Controller.prototype.setEnabledAllButtons = function(enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        this.btnBetUp.interactable = enabled;
        this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.toggleTrial.interactable = enabled;
      };
      Slot3Controller.prototype.stopAllEffects = function() {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
      };
      Slot3Controller.prototype.stopShowLinesWin = function() {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) this.linesWin.children[i].active = false;
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) this.iconWildColumns.children[i].active = false;
        this.stopAllItemEffect();
      };
      Slot3Controller.prototype.stopAllItemEffect = function() {
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var col = this.columns.children[i];
          for (var j = 0; j < col.childrenCount; j++) {
            var item = col.children[j];
            item.stopAllActions();
            item.scale = 1;
          }
        }
      };
      Slot3Controller.prototype.spin = function() {
        if (!this.isSpined) return;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundSpinSpinning, false, 1);
        if (this.toggleTrial.isChecked) {
          this.isSpined = false;
          this.changeItemToDark(false);
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          var rIdx = Utils_1.default.randomRangeInt(0, Slot3_TrialResults_1.default.results.length);
          this.onSpinResult(Slot3_TrialResults_1.default.results[rIdx]);
        } else {
          if (this.currentNumberFreeSpin <= 0) {
            if (Configs_1.default.Login.Coin < this.listBet[this.betIdx] * this.arrLineSelect.length) {
              App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
              return;
            }
            var curMoney = Configs_1.default.Login.Coin - this.arrLineSelect.length * this.listBet[this.betIdx];
            Tween_1.default.numberTo(this.lblCoin, curMoney, .3);
          } else {
            this.currentNumberFreeSpin--;
            this.lblFreeSpinCount.string = this.currentNumberFreeSpin + "";
            if (this.currentNumberFreeSpin <= 0) {
              this.currentNumberFreeSpin = 0;
              this.lblFreeSpinCount.node.parent.active = false;
            }
          }
          this.isSpined = false;
          this.changeItemToDark(false);
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
      };
      Slot3Controller.prototype.stopSpin = function() {
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var roll = this.columns.children[i];
          roll.stopAllActions();
          roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
      };
      Slot3Controller.prototype.showLineWins = function() {
        var _this = this;
        this.isSpined = true;
        this.linesWin.zIndex = 2;
        this.columns.zIndex = 1;
        Tween_1.default.numberTo(this.lblWinNow, this.lastSpinRes.prize, .3);
        this.toggleTrial.isChecked || BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        this.toggleAuto.isChecked || this.toggleBoost.isChecked || this.setEnabledAllButtons(true);
        this.linesWin.stopAllActions();
        var linesWin = this.lastSpinRes.linesWin.split(",");
        linesWin = Utils_1.default.removeDups(linesWin);
        for (var i = 0; i < linesWin.length; i++) if ("0" == linesWin[i]) {
          linesWin.splice(i, 1);
          i--;
        }
        var matrix = this.lastSpinRes.matrix.split(",");
        var linesWinChildren = this.linesWin.children;
        var rolls = this.columns.children;
        var actions = [];
        for (var i = 0; i < linesWinChildren.length; i++) linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
        if (this.lastSpinRes.prize > 0) {
          this.changeItemToDark(true);
          this.showWinCash(this.lastSpinRes.prize);
          actions.push(cc.delayTime(1.5));
          actions.push(cc.callFunc(function() {
            for (var i = 0; i < linesWinChildren.length; i++) linesWinChildren[i].active = false;
          }));
          actions.push(cc.delayTime(.3));
          if (!this.toggleBoost.isChecked) {
            var _loop_1 = function(i) {
              var lineIdx = parseInt(linesWin[i]) - 1;
              var line = linesWinChildren[lineIdx];
              actions.push(cc.callFunc(function() {
                _this.linesWin.zIndex = 1;
                _this.columns.zIndex = 2;
                line.active = true;
                var mLine = _this.mapLine[lineIdx];
                var countItemWin = 0;
                var fisrtItemId = matrix[mLine[0]];
                for (var j = 0; j < mLine.length; j++) {
                  var itemId = matrix[mLine[j]];
                  if (!(fisrtItemId == itemId || parseInt(itemId) == _this.wildItemId || _this.columnsWild.indexOf(j) >= 0)) break;
                  countItemWin++;
                }
                for (var j = 0; j < countItemWin; j++) {
                  var itemRow = parseInt((mLine[j] / 5).toString());
                  var item = rolls[j].children[2 - itemRow];
                  item.stopAllActions();
                  item.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.2, 1))));
                  _this.setDarkItem(item, false);
                }
              }));
              actions.push(cc.delayTime(1));
              actions.push(cc.callFunc(function() {
                line.active = false;
                _this.changeItemToDark(true);
                _this.stopAllItemEffect();
              }));
              actions.push(cc.delayTime(.1));
            };
            for (var i = 0; i < linesWin.length; i++) _loop_1(i);
          }
        }
        0 == actions.length && actions.push(cc.callFunc(function() {}));
        actions.push(cc.callFunc(function() {
          _this.changeItemToDark(false);
          (_this.toggleBoost.isChecked || _this.toggleAuto.isChecked) && _this.spin();
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
      };
      Slot3Controller.prototype.showCoins = function(prize) {
        var number = prize / 2e4;
        number <= 10 ? number = 10 : number >= 30 && (number = 30);
        App_1.default.instance.showCoins(number, this.effectWinCash, this.nodeCoin);
      };
      Slot3Controller.prototype.showWinCash = function(cash) {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundGoldEarn, false, 1);
        this.showCoins(cash);
        this.effectWinCash.stopAllActions();
        this.effectWinCash.active = true;
        var label = this.effectWinCash.getComponentInChildren(cc.Label);
        label.string = "0";
        this.effectWinCash.opacity = 0;
        this.effectWinCash.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
          Tween_1.default.numberTo(label, cash, .5);
        }), cc.delayTime(1.5), cc.fadeOut(.3), cc.callFunc(function() {
          _this.effectWinCash.active = false;
        })));
      };
      Slot3Controller.prototype.showEffectFreeSpin = function(cb) {
        var _this = this;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        var spine = this.effectFreeSpin.getComponentInChildren(sp.Skeleton);
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          _this.effectFreeSpin.active = false;
          null != cb && cb();
        });
      };
      Slot3Controller.prototype.showEffectBigWin = function(cash, cb) {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundGoldEarn, false, 1);
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "thang sieu lon2", true);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          _this.effectBigWin.active = false;
          null != cb && cb();
        })));
      };
      Slot3Controller.prototype.showEffectJackpot = function(cash, cb) {
        var _this = this;
        void 0 === cb && (cb = null);
        1 == this.soundSlotState && cc.audioEngine.play(this.soundJackpot, false, 1);
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", true);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          _this.effectJackpot.active = false;
          null != cb && cb();
        })));
      };
      Slot3Controller.prototype.showEffectBonus = function(cb) {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundSpinResult, false, 1);
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        cc.tween(this.effectBonus).call(function() {
          _this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", true);
        }).delay(3).call(function() {
          _this.effectBonus.active = false;
          null != cb && cb();
        }).start();
      };
      Slot3Controller.prototype.onSpinResult = function(res) {
        var _this = this;
        this.stopSpin();
        var successResult = [ 0, 1, 2, 3, 4, 5, 6 ];
        if (-1 === successResult.indexOf(res.result)) {
          this.isSpined = true;
          this.toggleAuto.isChecked = false;
          this.toggleAuto.interactable = true;
          this.toggleBoost.isChecked = false;
          this.toggleBoost.interactable = true;
          this.setEnabledAllButtons(true);
          switch (res.result) {
           case 102:
            this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
            break;

           default:
            this.showToast(App_1.default.instance.getTextLang("txt_unknown_error1"));
          }
          return;
        }
        this.currentNumberFreeSpin = res.currentNumberFreeSpin;
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        this.toggleTrial.isChecked || (Configs_1.default.Login.Coin = res.currentMoney);
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? .5 : 1;
        var _loop_2 = function(i) {
          var roll = this_1.columns.children[i];
          var step1Pos = .3 * this_1.itemHeight;
          var step2Pos = -this_1.itemHeight * roll.childrenCount + 3 * this_1.itemHeight - .3 * this_1.itemHeight;
          var step3Pos = -this_1.itemHeight * roll.childrenCount + 3 * this_1.itemHeight;
          TW(roll).delay(.2 * i * timeScale).to(.2 * timeScale, {
            x: roll.position.x,
            y: step1Pos
          }, {
            easing: cc.easing.quadOut
          }).to(this_1.spinDuration + this_1.addSpinDuration * i, {
            x: roll.position.x,
            y: step2Pos
          }, {
            easing: cc.easing.quadInOut
          }).to(.2 * timeScale, {
            x: roll.x,
            y: step3Pos
          }, {
            easing: cc.easing.quadIn
          }).call(function() {
            roll.setPosition(cc.v2(roll.position.x, 0));
            if (4 == i) {
              for (var j = 0; j < matrix.length; j++) if (parseInt(matrix[j]) == _this.wildItemId) {
                var c = j % 5;
                -1 == _this.columnsWild.indexOf(c) && _this.columnsWild.push(c);
              }
              for (var j = 0; j < _this.columnsWild.length; j++) {
                var c = _this.columnsWild[j];
                var children = _this.columns.children[c].children;
                for (var i_1 = 0; i_1 < 3; i_1++) {
                  var itemAnimIcon = children[i_1].getComponentInChildren(sp.Skeleton);
                  itemAnimIcon.node.active = false;
                  itemAnimIcon.skeletonData = _this.spineIconList[0];
                  itemAnimIcon.setAnimation(0, "Jackpot", true);
                  itemAnimIcon.node.y = -0;
                  _this.setItemSprite(children[i_1].getComponentInChildren(cc.Sprite), _this.sprFrameItems[2]);
                  children[i_1]["id"] = 3;
                  children[i_1]["animationName"] = "Jackpot";
                }
                _this.iconWildColumns.children[c].active = true;
                _this.iconWildColumns.children[c].getComponent(sp.Skeleton).animation = "wild dai";
                _this.iconWildColumns.children[c].getComponent(sp.Skeleton).loop = false;
                1 == _this.soundSlotState && cc.audioEngine.play(_this.soundSpinResult, false, 1);
              }
              _this.columnsWild.length > 0 ? roll.runAction(cc.sequence(cc.delayTime(2.6), cc.callFunc(function() {
                for (var i_2 = 0; i_2 < _this.iconWildColumns.childrenCount; i_2++) _this.iconWildColumns.children[i_2].active = false;
              }), cc.delayTime(.1), cc.callFunc(function() {
                _this.spined();
              }))) : _this.spined();
            }
          }).start();
          TW(roll).delay((.47 + .2 * i) * timeScale).call(function() {
            var children = roll.children;
            _this.setItemSprite(children[2].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[i])]);
            _this.setItemSprite(children[1].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[5 + i])]);
            _this.setItemSprite(children[0].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[10 + i])]);
            var item1 = children[children.length - 1];
            var item2 = children[children.length - 2];
            var item3 = children[children.length - 3];
            item1["id"] = parseInt(matrix[i]);
            item2["id"] = parseInt(matrix[5 + i]);
            item3["id"] = parseInt(matrix[10 + i]);
            _this.setItemSprite(item1.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[i])]);
            _this.setItemSprite(item2.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[5 + i])]);
            _this.setItemSprite(item3.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[10 + i])]);
            _this.checkIconSpine(children[2], parseInt(matrix[i]));
            _this.checkIconSpine(children[1], parseInt(matrix[5 + i]));
            _this.checkIconSpine(children[0], parseInt(matrix[10 + i]));
            _this.checkIconSpine(item3, parseInt(matrix[10 + i]));
            _this.checkIconSpine(item2, parseInt(matrix[5 + i]));
            _this.checkIconSpine(item1, parseInt(matrix[i]));
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.columns.childrenCount; i++) _loop_2(i);
      };
      Slot3Controller.prototype.checkIconSpine = function(item, idSprite) {
        idSprite += 1;
        var spine = item.getComponentInChildren(sp.Skeleton);
        spine.skeletonData = this.spineIcon;
        var sprite = item.getComponentInChildren(cc.Sprite);
        spine.node.y = -0;
        spine.node.scale = 1;
        var animName = "";
        switch (idSprite) {
         case 1:
          spine.skeletonData = this.spineIconList[2];
          spine.node.scale = 1;
          animName = "Scatter2";
          break;

         case 2:
          spine.node.scale = 1;
          animName = "bonus";
          break;

         case 3:
          spine.skeletonData = this.spineIconList[0];
          animName = "animation";
          spine.node.y = -0;
          break;

         case 4:
          spine.skeletonData = this.spineIconList[1];
          spine.node.scale = 1;
          animName = "animation";
          spine.node.y = -0;
          break;

         default:
          spine.node.active = false;
          sprite.node.active = true;
        }
        item["animationName"] = "" != animName ? animName : null;
      };
      Slot3Controller.prototype.setItemSprite = function(spr, frame) {
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        spr.node.setContentSize(cc.size(spr.node.width / 1.2, spr.node.height / 1.2));
      };
      Slot3Controller.prototype.spined = function() {
        var _this = this;
        this.currentNumberFreeSpin = this.lastSpinRes.currentNumberFreeSpin;
        if (this.lastSpinRes.currentNumberFreeSpin > 0) {
          this.lblFreeSpinCount.node.parent.active = true;
          this.lblFreeSpinCount.string = this.currentNumberFreeSpin.toString();
        } else this.lblFreeSpinCount.node.parent.active = false;
        if (1 == this.lastSpinRes.freeSpin) this.showEffectFreeSpin(function() {
          _this.showLineWins();
        }); else {
          var successResult = [ 0, 1, 3, 4, 5, 6 ];
          switch (this.lastSpinRes.result) {
           case 0:
           case 1:
            this.showLineWins();
            break;

           case 2:
            this.showEffectBigWin(this.lastSpinRes.prize, function() {
              _this.showLineWins();
            });
            break;

           case 3:
           case 4:
            this.showEffectJackpot(this.lastSpinRes.prize, function() {
              _this.showLineWins();
            });
            break;

           case 6:
            this.showEffectBigWin(this.lastSpinRes.prize, function() {
              _this.showLineWins();
            });
            break;

           case 5:
            this.showEffectBonus(function() {
              1 == _this.soundSlotState && (_this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBgBonus, true));
              _this.actPopupBonus(function() {
                1 == _this.soundSlotState && (_this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBg, true));
                _this.showLineWins();
              });
            });
          }
        }
      };
      Slot3Controller.prototype.onBtnSoundSumary = function() {};
      Slot3Controller.prototype.onBtnSoundTouchBonus = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
      };
      Slot3Controller.prototype.actBack = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendUnSubcribe(this.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot3Controller.prototype.actHidden = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.showToast(App_1.default.instance.getTextLang("txt_function_in_development"));
      };
      Slot3Controller.prototype.actBetUp = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx < this.listBet.length - 1) {
          SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot3Controller.prototype.actBetDown = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx > 0) {
          SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot3Controller.prototype.randomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      Slot3Controller.prototype.settingMusic = function() {
        if (this.toggleMusic.isChecked) {
          cc.audioEngine.stop(this.remoteMusicBackground);
          this.musicSlotState = 0;
          this.soundSlotState = 0;
        } else {
          var musicId = this.randomBetween(0, 4);
          this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
          this.musicSlotState = 1;
          this.soundSlotState = 1;
        }
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        cc.sys.localStorage.setItem("music_Slot_3", "" + this.musicSlotState);
        cc.sys.localStorage.setItem("sound_Slot_3", "" + this.soundSlotState);
      };
      Slot3Controller.prototype.actPopupBonus = function(cb) {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (null == this.popupBonus) BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupBonus", function(finish, total) {
          App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1") + parseInt(finish / total * 100) + "%");
        }, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupBonus = cc.instantiate(prefab).getComponent("Slot3.PopupBonus");
          _this.popupBonus.node.active = true;
          _this.popupBonus.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupBonus.showBonus(_this.toggleTrial.isChecked ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, _this, cb);
        }); else {
          this.popupBonus.node.active = true;
          this.popupBonus.showBonus(this.toggleTrial.isChecked ? 100 : this.listBet[this.betIdx], this.lastSpinRes.haiSao, this, cb);
        }
      };
      Slot3Controller.prototype.actLine = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupSelectLine ? BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupSelectLine", function(finish, total) {
          App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1") + parseInt(finish / total * 100) + "%");
        }, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupSelectLine = cc.instantiate(prefab).getComponent("Slot3.PopupSelectLine");
          _this.popupSelectLine.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupSelectLine.onSelectedChanged = function(lines) {
            _this.arrLineSelect = lines;
            _this.lblLine.string = _this.arrLineSelect.length.toString();
            _this.lblTotalBet.string = Utils_1.default.formatMoney(_this.arrLineSelect.length * _this.listBet[_this.betIdx]);
          };
          _this.popupSelectLine.show();
        }) : this.popupSelectLine.show();
      };
      Slot3Controller.prototype.actGuide = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupGuide ? BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupGuide", function(finish, total) {
          App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1") + parseInt(finish / total * 100) + "%");
        }, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupGuide = cc.instantiate(prefab).getComponent("Slot3.PopupGuide");
          _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupGuide.show();
        }) : this.popupGuide.show();
      };
      Slot3Controller.prototype.actHistoryJackpot = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupJackpotHistory ? BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupJackpotHistory", function(finish, total) {
          App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1") + parseInt(finish / total * 100) + "%");
        }, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupJackpotHistory = cc.instantiate(prefab).getComponent("Slot3.PopupJackpotHistory");
          _this.popupJackpotHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupJackpotHistory.show();
        }) : this.popupJackpotHistory.show();
      };
      Slot3Controller.prototype.actHistory = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.toggleTrial.isChecked) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupHistory ? BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupHistory", function(finish, total) {
          App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1") + parseInt(finish / total * 100) + "%");
        }, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHistory = cc.instantiate(prefab).getComponent("Slot3.PopupHistory");
          _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupHistory.show();
        }) : this.popupHistory.show();
      };
      Slot3Controller.prototype.toggleTrialOnCheck = function() {
        if (this.toggleTrial.isChecked) {
          this.lblLine.string = "25";
          this.lblBet.string = "100";
          this.lblTotalBet.string = Utils_1.default.formatMoney(25e4);
        } else {
          this.lblLine.string = this.arrLineSelect.length.toString();
          this.lblBet.string = this.listBetLabel[this.betIdx];
          this.lblTotalBet.string = Utils_1.default.formatMoney(this.arrLineSelect.length * this.listBet[this.betIdx]);
        }
      };
      Slot3Controller.prototype.toggleAutoOnCheck = function() {
        if (this.toggleAuto.isChecked && this.toggleTrial.isChecked) {
          this.toggleAuto.isChecked = false;
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.toggleAuto.isChecked) {
          this.spin();
          this.toggleBoost.interactable = false;
        } else {
          this.toggleBoost.interactable = true;
          this.isSpined && this.setEnabledAllButtons(true);
        }
      };
      Slot3Controller.prototype.toggleBoostOnCheck = function() {
        if (this.toggleBoost.isChecked && this.toggleTrial.isChecked) {
          this.toggleBoost.isChecked = false;
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.toggleBoost.isChecked) {
          this.spin();
          this.toggleAuto.interactable = false;
        } else {
          this.toggleAuto.interactable = true;
          this.isSpined && this.setEnabledAllButtons(true);
        }
      };
      Slot3Controller.prototype.changeItemToDark = function(state) {
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var col = this.columns.children[i];
          for (var j = 0; j < col.childrenCount; j++) {
            var item = col.children[j];
            var sprite = item.getComponentInChildren(cc.Sprite);
            var spine = item.getComponentInChildren(sp.Skeleton);
            sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            if (state) {
              sprite.node.active = true;
              spine.node.active = false;
            }
          }
        }
      };
      Slot3Controller.prototype.setDarkItem = function(item, state) {
        var spine = item.getComponentInChildren(sp.Skeleton);
        var sprite = item.getComponentInChildren(cc.Sprite);
        sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        if (state) {
          sprite.node.active = true;
          spine.node.active = false;
        } else if (item["id"] && item["id"] < 5 && item["animationName"] && "" != item["animationName"]) {
          sprite.node.active = false;
          spine.node.active = true;
          spine.setAnimation(0, item["animationName"], true);
        } else {
          sprite.node.active = true;
          spine.node.active = false;
        }
      };
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Toggle) ], Slot3Controller.prototype, "toggleMusic", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot3Controller.prototype, "sprFrameItems", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot3Controller.prototype, "sprFrameItemsBlur", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "columns", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "linesWin", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "iconWildColumns", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblBet", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblLine", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblTotalBet", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblWinNow", void 0);
      __decorate([ property(cc.Label) ], Slot3Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Toggle) ], Slot3Controller.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Toggle) ], Slot3Controller.prototype, "toggleBoost", void 0);
      __decorate([ property(cc.Toggle) ], Slot3Controller.prototype, "toggleTrial", void 0);
      __decorate([ property(cc.Button) ], Slot3Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], Slot3Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Button) ], Slot3Controller.prototype, "btnBetUp", void 0);
      __decorate([ property(cc.Button) ], Slot3Controller.prototype, "btnBetDown", void 0);
      __decorate([ property(cc.Button) ], Slot3Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "toast", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "effectWinCash", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "effectBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "effectJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "effectBonus", void 0);
      __decorate([ property(cc.Node) ], Slot3Controller.prototype, "effectFreeSpin", void 0);
      __decorate([ property(Slot3_PopupSelectLine_1.default) ], Slot3Controller.prototype, "popupSelectLine", void 0);
      __decorate([ property(Slot3_PopupGuide_1.default) ], Slot3Controller.prototype, "popupGuide", void 0);
      __decorate([ property(Slot3_PopupJackpotHistory_1.default) ], Slot3Controller.prototype, "popupJackpotHistory", void 0);
      __decorate([ property(Slot3_PopupHistory_1.default) ], Slot3Controller.prototype, "popupHistory", void 0);
      __decorate([ property(Slot3_PopupBonus_1.default) ], Slot3Controller.prototype, "popupBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundBg", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundBgBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundBonusFail", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundFreeSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundGoldEarn", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundSpinResult", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot3Controller.prototype, "soundSpinSpinning", void 0);
      __decorate([ property({
        type: sp.SkeletonData
      }) ], Slot3Controller.prototype, "spineIcon", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot3Controller.prototype, "spineIconList", void 0);
      Slot3Controller = __decorate([ ccclass ], Slot3Controller);
      return Slot3Controller;
    }(cc.Component);
    exports.default = Slot3Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/BundleControl": void 0,
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Lobby.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot3.Cmd": "Slot3.Cmd",
    "./Slot3.PopupBonus": "Slot3.PopupBonus",
    "./Slot3.PopupGuide": "Slot3.PopupGuide",
    "./Slot3.PopupHistory": "Slot3.PopupHistory",
    "./Slot3.PopupJackpotHistory": "Slot3.PopupJackpotHistory",
    "./Slot3.PopupSelectLine": "Slot3.PopupSelectLine",
    "./Slot3.TrialResults": "Slot3.TrialResults"
  } ],
  "Slot3.TrialResults": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b09bfp1tZlNmLmv29UDiWfY", "Slot3.TrialResults");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TrialResults = function() {
      function TrialResults() {}
      TrialResults.results = [ {
        _pos: 102,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 164,
          12: 3,
          13: 0,
          14: 32,
          15: 51,
          16: 44,
          17: 53,
          18: 44,
          19: 54,
          20: 44,
          21: 53,
          22: 44,
          23: 49,
          24: 48,
          25: 44,
          26: 51,
          27: 44,
          28: 51,
          29: 44,
          30: 53,
          31: 44,
          32: 51,
          33: 44,
          34: 51,
          35: 44,
          36: 55,
          37: 44,
          38: 51,
          39: 44,
          40: 51,
          41: 44,
          42: 49,
          43: 48,
          44: 44,
          45: 49,
          46: 48,
          47: 0,
          48: 29,
          49: 49,
          50: 44,
          51: 53,
          52: 44,
          53: 55,
          54: 44,
          55: 49,
          56: 48,
          57: 44,
          58: 49,
          59: 50,
          60: 44,
          61: 49,
          62: 52,
          63: 44,
          64: 49,
          65: 54,
          66: 44,
          67: 49,
          68: 55,
          69: 44,
          70: 50,
          71: 48,
          72: 44,
          73: 50,
          74: 51,
          75: 44,
          76: 50,
          77: 52,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 0,
          83: 0,
          84: 0,
          85: 9,
          86: 9,
          87: 125,
          88: 0,
          89: 0,
          90: 0,
          91: 0,
          92: 0,
          93: 136,
          94: 221,
          95: 154,
          96: 0,
          97: 0,
          98: 0,
          99: 0,
          100: 0,
          101: 0
        },
        _length: 102,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984420,
        result: 3,
        matrix: "3,5,6,5,10,3,3,5,3,3,7,3,3,10,10",
        linesWin: "1,5,7,10,12,14,16,17,20,23,24",
        haiSao: "",
        prize: 592253,
        currentMoney: 8969626,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 99,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 175,
          12: 5,
          13: 0,
          14: 31,
          15: 49,
          16: 44,
          17: 52,
          18: 44,
          19: 49,
          20: 44,
          21: 52,
          22: 44,
          23: 55,
          24: 44,
          25: 53,
          26: 44,
          27: 49,
          28: 44,
          29: 53,
          30: 44,
          31: 49,
          32: 44,
          33: 57,
          34: 44,
          35: 49,
          36: 48,
          37: 44,
          38: 49,
          39: 48,
          40: 44,
          41: 49,
          42: 44,
          43: 52,
          44: 44,
          45: 57,
          46: 0,
          47: 4,
          48: 53,
          49: 44,
          50: 49,
          51: 52,
          52: 0,
          53: 23,
          54: 52,
          55: 44,
          56: 50,
          57: 44,
          58: 49,
          59: 44,
          60: 49,
          61: 44,
          62: 49,
          63: 44,
          64: 49,
          65: 44,
          66: 49,
          67: 44,
          68: 48,
          69: 44,
          70: 49,
          71: 44,
          72: 49,
          73: 44,
          74: 50,
          75: 44,
          76: 49,
          77: 0,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 0,
          83: 96,
          84: 224,
          85: 0,
          86: 0,
          87: 0,
          88: 0,
          89: 1,
          90: 5,
          91: 66,
          92: 201,
          93: 0,
          94: 0,
          95: 0,
          96: 0,
          97: 0,
          98: 0
        },
        _length: 99,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984431,
        result: 5,
        matrix: "1,4,1,4,7,5,1,5,1,9,10,10,1,4,9",
        linesWin: "5,14",
        haiSao: "4,2,1,1,1,1,1,0,1,1,2,1",
        prize: 24800,
        currentMoney: 17121993,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 86,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 165,
          12: 3,
          13: 0,
          14: 30,
          15: 53,
          16: 44,
          17: 51,
          18: 44,
          19: 51,
          20: 44,
          21: 51,
          22: 44,
          23: 52,
          24: 44,
          25: 51,
          26: 44,
          27: 53,
          28: 44,
          29: 56,
          30: 44,
          31: 55,
          32: 44,
          33: 51,
          34: 44,
          35: 49,
          36: 48,
          37: 44,
          38: 49,
          39: 44,
          40: 51,
          41: 44,
          42: 52,
          43: 44,
          44: 52,
          45: 0,
          46: 15,
          47: 53,
          48: 44,
          49: 54,
          50: 44,
          51: 49,
          52: 49,
          53: 44,
          54: 49,
          55: 50,
          56: 44,
          57: 49,
          58: 52,
          59: 44,
          60: 50,
          61: 50,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 7,
          70: 189,
          71: 212,
          72: 0,
          73: 0,
          74: 0,
          75: 0,
          76: 0,
          77: 144,
          78: 145,
          79: 170,
          80: 0,
          81: 0,
          82: 0,
          83: 0,
          84: 0,
          85: 0
        },
        _length: 86,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984421,
        result: 3,
        matrix: "5,3,3,3,4,3,5,8,7,3,10,1,3,4,4",
        linesWin: "5,6,11,12,14,22",
        haiSao: "",
        prize: 507348,
        currentMoney: 9474474,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 84,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 166,
          12: 3,
          13: 0,
          14: 29,
          15: 51,
          16: 44,
          17: 55,
          18: 44,
          19: 51,
          20: 44,
          21: 53,
          22: 44,
          23: 51,
          24: 44,
          25: 57,
          26: 44,
          27: 51,
          28: 44,
          29: 51,
          30: 44,
          31: 51,
          32: 44,
          33: 52,
          34: 44,
          35: 52,
          36: 44,
          37: 52,
          38: 44,
          39: 56,
          40: 44,
          41: 52,
          42: 44,
          43: 53,
          44: 0,
          45: 14,
          46: 51,
          47: 44,
          48: 53,
          49: 44,
          50: 57,
          51: 44,
          52: 49,
          53: 50,
          54: 44,
          55: 49,
          56: 52,
          57: 44,
          58: 49,
          59: 57,
          60: 0,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 7,
          68: 175,
          69: 63,
          70: 0,
          71: 0,
          72: 0,
          73: 0,
          74: 0,
          75: 152,
          76: 55,
          77: 37,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 0,
          83: 0
        },
        _length: 84,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984422,
        result: 3,
        matrix: "3,7,3,5,3,9,3,3,3,4,4,4,8,4,5",
        linesWin: "3,5,9,12,14,19",
        haiSao: "",
        prize: 503615,
        currentMoney: 9975589,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 76,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 168,
          12: 1,
          13: 0,
          14: 30,
          15: 48,
          16: 44,
          17: 55,
          18: 44,
          19: 48,
          20: 44,
          21: 56,
          22: 44,
          23: 52,
          24: 44,
          25: 48,
          26: 44,
          27: 48,
          28: 44,
          29: 52,
          30: 44,
          31: 51,
          32: 44,
          33: 54,
          34: 44,
          35: 57,
          36: 44,
          37: 53,
          38: 44,
          39: 51,
          40: 44,
          41: 52,
          42: 44,
          43: 49,
          44: 48,
          45: 0,
          46: 5,
          47: 49,
          48: 52,
          49: 44,
          50: 49,
          51: 54,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 0,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 1,
          67: 4,
          68: 158,
          69: 85,
          70: 1,
          71: 0,
          72: 0,
          73: 0,
          74: 2,
          75: 2
        },
        _length: 76,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984424,
        result: 1,
        matrix: "0,7,0,8,4,0,0,4,3,6,9,5,3,4,10",
        linesWin: "14,16",
        haiSao: "",
        prize: 0,
        currentMoney: 17079893,
        freeSpin: 1,
        isFree: false,
        itemsWild: "",
        ratio: 2,
        currentNumberFreeSpin: 2
      }, {
        _pos: 71,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 169,
          12: 1,
          13: 0,
          14: 30,
          15: 52,
          16: 44,
          17: 53,
          18: 44,
          19: 54,
          20: 44,
          21: 52,
          22: 44,
          23: 49,
          24: 44,
          25: 52,
          26: 44,
          27: 49,
          28: 48,
          29: 44,
          30: 53,
          31: 44,
          32: 56,
          33: 44,
          34: 53,
          35: 44,
          36: 52,
          37: 44,
          38: 51,
          39: 44,
          40: 53,
          41: 44,
          42: 52,
          43: 44,
          44: 55,
          45: 0,
          46: 0,
          47: 0,
          48: 0,
          49: 0,
          50: 0,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 0,
          61: 1,
          62: 4,
          63: 158,
          64: 85,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 0,
          70: 1
        },
        _length: 71,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984425,
        result: 1,
        matrix: "4,5,6,4,1,4,10,5,8,5,4,3,5,4,7",
        linesWin: "",
        haiSao: "",
        prize: 0,
        currentMoney: 17079893,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 1
      }, {
        _pos: 71,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 170,
          12: 1,
          13: 0,
          14: 30,
          15: 49,
          16: 44,
          17: 54,
          18: 44,
          19: 49,
          20: 48,
          21: 44,
          22: 55,
          23: 44,
          24: 53,
          25: 44,
          26: 56,
          27: 44,
          28: 53,
          29: 44,
          30: 57,
          31: 44,
          32: 51,
          33: 44,
          34: 51,
          35: 44,
          36: 56,
          37: 44,
          38: 55,
          39: 44,
          40: 52,
          41: 44,
          42: 54,
          43: 44,
          44: 52,
          45: 0,
          46: 0,
          47: 0,
          48: 0,
          49: 0,
          50: 0,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 0,
          61: 1,
          62: 4,
          63: 158,
          64: 85,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 0,
          70: 0
        },
        _length: 71,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984426,
        result: 1,
        matrix: "1,6,10,7,5,8,5,9,3,3,8,7,4,6,4",
        linesWin: "",
        haiSao: "",
        prize: 0,
        currentMoney: 17079893,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 74,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 171,
          12: 1,
          13: 0,
          14: 31,
          15: 49,
          16: 44,
          17: 48,
          18: 44,
          19: 48,
          20: 44,
          21: 56,
          22: 44,
          23: 49,
          24: 48,
          25: 44,
          26: 49,
          27: 48,
          28: 44,
          29: 54,
          30: 44,
          31: 52,
          32: 44,
          33: 52,
          34: 44,
          35: 51,
          36: 44,
          37: 48,
          38: 44,
          39: 52,
          40: 44,
          41: 56,
          42: 44,
          43: 51,
          44: 44,
          45: 57,
          46: 0,
          47: 2,
          48: 50,
          49: 49,
          50: 0,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 0,
          61: 0,
          62: 0,
          63: 0,
          64: 1,
          65: 4,
          66: 148,
          67: 145,
          68: 1,
          69: 0,
          70: 0,
          71: 0,
          72: 1,
          73: 1
        },
        _length: 74,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984427,
        result: 1,
        matrix: "1,0,0,8,10,10,6,4,4,3,0,4,8,3,9",
        linesWin: "21",
        haiSao: "",
        prize: 0,
        currentMoney: 17077393,
        freeSpin: 1,
        isFree: false,
        itemsWild: "",
        ratio: 1,
        currentNumberFreeSpin: 1
      }, {
        _pos: 70,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 172,
          12: 1,
          13: 0,
          14: 29,
          15: 54,
          16: 44,
          17: 53,
          18: 44,
          19: 49,
          20: 44,
          21: 53,
          22: 44,
          23: 56,
          24: 44,
          25: 49,
          26: 44,
          27: 55,
          28: 44,
          29: 51,
          30: 44,
          31: 52,
          32: 44,
          33: 54,
          34: 44,
          35: 57,
          36: 44,
          37: 53,
          38: 44,
          39: 51,
          40: 44,
          41: 52,
          42: 44,
          43: 49,
          44: 0,
          45: 0,
          46: 0,
          47: 0,
          48: 0,
          49: 0,
          50: 0,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 1,
          61: 4,
          62: 148,
          63: 145,
          64: 0,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 0
        },
        _length: 70,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984428,
        result: 1,
        matrix: "6,5,1,5,8,1,7,3,4,6,9,5,3,4,1",
        linesWin: "",
        haiSao: "",
        prize: 0,
        currentMoney: 17077393,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 102,
        _data: {
          0: 1,
          1: 15,
          2: 161,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 213,
          10: 98,
          11: 174,
          12: 5,
          13: 0,
          14: 30,
          15: 51,
          16: 44,
          17: 49,
          18: 44,
          19: 53,
          20: 44,
          21: 49,
          22: 44,
          23: 53,
          24: 44,
          25: 53,
          26: 44,
          27: 53,
          28: 44,
          29: 51,
          30: 44,
          31: 49,
          32: 48,
          33: 44,
          34: 53,
          35: 44,
          36: 49,
          37: 44,
          38: 54,
          39: 44,
          40: 49,
          41: 44,
          42: 55,
          43: 44,
          44: 57,
          45: 0,
          46: 10,
          47: 49,
          48: 44,
          49: 49,
          50: 54,
          51: 44,
          52: 49,
          53: 55,
          54: 44,
          55: 50,
          56: 53,
          57: 0,
          58: 21,
          59: 50,
          60: 44,
          61: 49,
          62: 44,
          63: 49,
          64: 44,
          65: 49,
          66: 44,
          67: 49,
          68: 44,
          69: 49,
          70: 44,
          71: 49,
          72: 44,
          73: 50,
          74: 44,
          75: 49,
          76: 44,
          77: 49,
          78: 44,
          79: 49,
          80: 0,
          81: 0,
          82: 0,
          83: 0,
          84: 0,
          85: 0,
          86: 41,
          87: 104,
          88: 0,
          89: 0,
          90: 0,
          91: 0,
          92: 1,
          93: 4,
          94: 235,
          95: 173,
          96: 0,
          97: 0,
          98: 0,
          99: 0,
          100: 0,
          101: 0
        },
        _length: 102,
        _controllerId: 1,
        _cmdId: 4001,
        _error: 0,
        ref: 13984430,
        result: 5,
        matrix: "3,1,5,1,5,5,5,3,10,5,1,6,1,7,9",
        linesWin: "1,16,17,25",
        haiSao: "2,1,1,1,1,1,1,2,1,1,1",
        prize: 10600,
        currentMoney: 17099693,
        freeSpin: 0,
        isFree: false,
        itemsWild: "",
        ratio: 0,
        currentNumberFreeSpin: 0
      } ];
      return TrialResults;
    }();
    exports.default = TrialResults;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Slot3.Cmd", "Slot3.PopupBonus", "Slot3.PopupGuide", "Slot3.PopupHistory", "Slot3.PopupJackpotHistory", "Slot3.PopupSelectLine", "Slot3.Slot3Controller", "Slot3.TrialResults" ]);