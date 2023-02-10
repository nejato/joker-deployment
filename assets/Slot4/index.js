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
  "Slot4.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e78ebyw3FPNphXouymUKPS", "Slot4.Lobby");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var Slot4Cmd_1 = require("./Slot4Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4Lobby = function(_super) {
      __extends(Slot4Lobby, _super);
      function Slot4Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
      }
      Slot4Lobby.prototype.init = function(pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
        this.show();
      };
      Slot4Lobby.prototype.show = function() {
        this.node.active = true;
        this.showAnimation();
      };
      Slot4Lobby.prototype.hide = function() {
        this.node.active = false;
      };
      Slot4Lobby.prototype.showAnimation = function() {
        var self = this;
        for (var i = 0; i < this.rooms.length; i++) {
          var nodeBox = this.rooms[i];
          cc.Tween.stopAllByTarget(nodeBox);
          nodeBox.opacity = 0;
          nodeBox.position = 0 == i ? cc.v3(-200, 0, 0) : 1 == i ? cc.v3(0, -200, 0) : 2 == i ? cc.v3(0, 200, 0) : cc.v3(200, 0, 0);
          cc.tween(nodeBox).to(1, {
            position: cc.v3(0, 0, 0),
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
      };
      Slot4Lobby.prototype.onBtnBack = function() {
        this.mSlotController.isSound && cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot4Lobby.prototype.onBtnTry = function() {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom(null);
        this.mSlotController.isTrial = false;
      };
      Slot4Lobby.prototype.onUpdateJackpot = function(pData) {
        var res = new Slot4Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["tamhung"]["100"].p, .3);
        Tween_1.default.numberTo(this.listPot[1], resJson["tamhung"]["1000"].p, .3);
        Tween_1.default.numberTo(this.listPot[2], resJson["tamhung"]["10000"].p, .3);
      };
      __decorate([ property([ cc.Label ]) ], Slot4Lobby.prototype, "listPot", void 0);
      __decorate([ property([ cc.Node ]) ], Slot4Lobby.prototype, "rooms", void 0);
      Slot4Lobby = __decorate([ ccclass ], Slot4Lobby);
      return Slot4Lobby;
    }(cc.Component);
    exports.default = Slot4Lobby;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot4Cmd": "Slot4Cmd"
  } ],
  "Slot4.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4812c8fHhdGUpAoly1lQpvf", "Slot4.PopupBonus");
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
        _this.lblFactor = null;
        _this.lblHeso = null;
        _this.lblWin = null;
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
          var node = this_1.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["label"] = node.getChildByName("label").getComponent(cc.Label);
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                _this.lblFactor.string = _this.factor + "";
                node["btn_spine"].setAnimation(0, "idle_0", true);
                node["btn_spine"].addAnimation(1, "open_0", false);
                break;

               case 1:
                node["btn_spine"].setAnimation(0, "idle_1", true);
                node["btn_spine"].addAnimation(1, "open_1", false);
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["btn_spine"].setAnimation(0, "idle_2", true);
                node["btn_spine"].addAnimation(1, "open_2", false);
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["btn_spine"].setAnimation(0, "idle_3", true);
                node["btn_spine"].addAnimation(1, "open_3", false);
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["btn_spine"].setAnimation(0, "idle_4", true);
                node["btn_spine"].addAnimation(1, "open_4", false);
                node["label"].node.active = true;
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
        for (var i = 0; i < this.items.childrenCount; i++) _loop_1(i);
      };
      PopupBonus.prototype.showBonus = function(betValue, bonus, controller, onFinished) {
        _super.prototype.show.call(this);
        this.controller = controller;
        this.win = 0;
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["btn_spine"] = node["btn"].getComponentInChildren(sp.Skeleton);
          node["btn_spine"].setAnimation(0, "idle", true);
          node["btn_spine"].addAnimation(1, "appear", false);
          node["is_open"] = false;
        }
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          var btn = node.getChildByName("btn").getComponent(cc.Button);
          btn.node.active = true;
          btn.interactable = true;
          node.getChildByName("label").active = false;
        }
        this.betValue = betValue;
        this.onFinished = onFinished;
        var arrBonus = bonus.split(",");
        this.dataBonus = [];
        for (var i = 0; i < arrBonus.length; i++) this.dataBonus.push(Number(arrBonus[i]));
        this.left = this.dataBonus.length - 1;
        this.factor = 1;
        this.lblLeft.string = "" + this.left;
        this.lblFactor.string = this.factor + "";
        this.heso = this.dataBonus[0];
        this.lblHeso.string = "x" + this.heso;
      };
      PopupBonus.prototype.hidden = function() {
        this.controller.onBtnSoundSumary();
        Tween_1.default.showPopup(this.nodeBoxNotify, this.nodeBoxNotify.parent);
        Tween_1.default.numberTo(this.txtNotify, this.win, .3);
      };
      PopupBonus.prototype.onBtnExit = function() {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function() {
          _this.dismiss();
          _this.onFinished();
        }, 1.5);
      };
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "items", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeBoxNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "txtNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblLeft", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblFactor", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblHeso", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblWin", void 0);
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
  Slot4ChooseLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94b5dmpihNOzLDCDOztSL8j", "Slot4ChooseLine");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4ChooseLine = function(_super) {
      __extends(Slot4ChooseLine, _super);
      function Slot4ChooseLine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.btnClose = null;
        _this.lineParent = null;
        _this.listToggle = [];
        _this.SELECTED = "selected";
        _this.onSelectedChanged = null;
        return _this;
      }
      Slot4ChooseLine.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.lineParent.children[i];
          var toggle = node.getComponent(cc.Toggle);
          this_1.listToggle.push(toggle);
          node[this_1.SELECTED] = true;
          node.on("click", function() {
            node[_this.SELECTED] = !node[_this.SELECTED];
            null != _this.onSelectedChanged && _this.onSelectedChanged(_this.getLineSelected());
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.lineParent.childrenCount; i++) _loop_1(i);
      };
      Slot4ChooseLine.prototype.getLineSelected = function() {
        var lines = new Array();
        for (var i = 0; i < this.listToggle.length; i++) {
          var node = this.listToggle[i].node;
          ("undefined" == typeof node[this.SELECTED] || node[this.SELECTED]) && lines.push(i + 1);
        }
        this.btnClose.interactable = lines.length > 0;
        return lines;
      };
      Slot4ChooseLine.prototype.selectAll = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = true;
          this.listToggle[i].isChecked = true;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot4ChooseLine.prototype.deSelectAll = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = false;
          this.listToggle[i].isChecked = false;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot4ChooseLine.prototype.selectEven = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = i % 2 != 0;
          this.listToggle[i].isChecked = i % 2 !== 0;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot4ChooseLine.prototype.selectOdd = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = i % 2 == 0;
          this.listToggle[i].isChecked = i % 2 == 0;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot4ChooseLine.prototype.show = function(arrLineSelected) {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        for (var i = 0; i < this.listToggle.length; i++) {
          var node = this.listToggle[i];
          this.listToggle[i].isChecked = this.listToggle[i].node[this.SELECTED];
        }
      };
      Slot4ChooseLine.prototype.hide = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
      };
      __decorate([ property(cc.Node) ], Slot4ChooseLine.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Button) ], Slot4ChooseLine.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], Slot4ChooseLine.prototype, "lineParent", void 0);
      Slot4ChooseLine = __decorate([ ccclass ], Slot4ChooseLine);
      return Slot4ChooseLine;
    }(cc.Component);
    exports.default = Slot4ChooseLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ],
  Slot4Cmd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79d3al+39NBj5PS+BBVaVa+", "Slot4Cmd");
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
        Code.SUBCRIBE = 14003;
        Code.UNSUBCRIBE = 14004;
        Code.CHANGE_ROOM = 14005;
        Code.PLAY = 14001;
        Code.UPDATE_RESULT = 14001;
        Code.UPDATE_POT = 14002;
        Code.AUTO = 14006;
        Code.STOP_AUTO = 14006;
        Code.FORCE_STOP_AUTO = 14008;
        Code.DATE_X2 = 14009;
        Code.BIG_WIN = 14010;
        Code.FREE = 14011;
        Code.FREE_DAI_LY = 14012;
        Code.MINIMIZE = 14013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
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
      var ResUpdateJackpotSlots = function(_super) {
        __extends(ResUpdateJackpotSlots, _super);
        function ResUpdateJackpotSlots(data) {
          var _this = _super.call(this, data) || this;
          _this.pots = "";
          _this.pots = _this.getString();
          return _this;
        }
        return ResUpdateJackpotSlots;
      }(Network_InPacket_1.default);
      cmd.ResUpdateJackpotSlots = ResUpdateJackpotSlots;
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
          _this.valueRoom1 = 0;
          _this.valueRoom2 = 0;
          _this.valueRoom3 = 0;
          _this.x21 = 0;
          _this.x22 = 0;
          _this.valueRoom1 = _this.getLong();
          _this.valueRoom2 = _this.getLong();
          _this.valueRoom3 = _this.getLong();
          _this.x21 = _this.getByte();
          _this.x22 = _this.getByte();
          return _this;
        }
        return ReceiveUpdatePot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdatePot = ReceiveUpdatePot;
      var ReceiveResult = function(_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
          var _this = _super.call(this, data) || this;
          _this.ref = 0;
          _this.result = 0;
          _this.matrix = "";
          _this.linesWin = "";
          _this.haiSao = "";
          _this.prize = 0;
          _this.currentMoney = 0;
          _this.isFreeSpin = 0;
          _this.ratio = 0;
          _this.currentNumberFreeSpin = 0;
          _this.ref = _this.getLong();
          _this.result = _this.getByte();
          _this.matrix = _this.getString();
          _this.linesWin = _this.getString();
          _this.haiSao = _this.getString();
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          _this.isFreeSpin = _this.getByte();
          _this.ratio = _this.getByte();
          _this.currentNumberFreeSpin = _this.getByte();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
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
      var ReqSubcribeHallSlot = function(_super) {
        __extends(ReqSubcribeHallSlot, _super);
        function ReqSubcribeHallSlot() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SUBCRIBE_HALL_SLOT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return ReqSubcribeHallSlot;
      }(Network_OutPacket_1.default);
      cmd.ReqSubcribeHallSlot = ReqSubcribeHallSlot;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  Slot4Controller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3db2agi1bNH1bL6pksn5Oje", "Slot4Controller");
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
    var Slot4Cmd_1 = require("./Slot4Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot4ChooseLine_1 = require("./Slot4ChooseLine");
    var Slot4TrialResult_1 = require("./Slot4TrialResult");
    var Slot4_Lobby_1 = require("./Slot4.Lobby");
    var Slot4_PopupBonus_1 = require("./Slot4.PopupBonus");
    var Slot4Tutorial_1 = require("./Slot4Tutorial");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var ItemIconSlot25_1 = require("../../Lobby/LobbyScript/Script/BaseSlot25/ItemIconSlot25");
    var MAX_CYCCLE_SPIN = 20;
    var FAST_CYCCLE_SPIN = 10;
    var ERROR_CYCCLE_SPIN = 50;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4Controller = function(_super) {
      __extends(Slot4Controller, _super);
      function Slot4Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        _this.nodeCoin = null;
        _this.btnLine = null;
        _this.lblFreeSpinCount = null;
        _this.nodeBoxSetting = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.popupBonus = null;
        _this.skeSpin = null;
        _this.nodeDemo = null;
        _this.nodeWinJackpot = null;
        _this.txtWinJackpot = null;
        _this.nodeGamePlay = null;
        _this.mSlotLobby = null;
        _this.jackpotLabel = null;
        _this.moneyLabel = null;
        _this.totalLineLabel = null;
        _this.btnSpin = null;
        _this.toggleFast = null;
        _this.winNormalBg = null;
        _this.bonusNode = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.freespinNode = null;
        _this.winLabel = null;
        _this.freespinCurrent = null;
        _this.lineWinParent = null;
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        _this.chooseLineScript = null;
        _this.popupGuide = null;
        _this.musicLobby = null;
        _this.musicGame = null;
        _this.musicBonus = null;
        _this.soundClick = null;
        _this.soundStartSpin = null;
        _this.soundRepeatSpin = null;
        _this.soundEndSpin = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundFreeSpin = null;
        _this.soundtouchBonus = null;
        _this.soundSmumary = null;
        _this.listActiveItem = [];
        _this.TIME_DELAY_SHOW_LINE = 1;
        _this.dailyFreeSpin = 0;
        _this.betId = 0;
        _this.listBet = [ 100, 1e3, 1e4 ];
        _this.listBetString = [ "100", "1K", "10K" ];
        _this.arrLineSelected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
        _this.isTrial = false;
        _this.isSpining = false;
        _this.mapLine = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 7, 3, 4 ], [ 10, 11, 7, 13, 14 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 7, 8, 4 ], [ 5, 1, 2, 3, 9 ], [ 5, 11, 12, 13, 9 ], [ 10, 11, 7, 3, 4 ], [ 0, 1, 7, 13, 14 ] ];
        _this.isFastCurrent = false;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.iconSFBlurArr100 = [];
        _this.iconSFArr100 = [];
        _this.arrSkeletonIcon100 = [];
        _this.iconSFBlurArr1K = [];
        _this.iconSFArr1K = [];
        _this.arrSkeletonIcon1K = [];
        _this.iconSFBlurArr10K = [];
        _this.iconSFArr10K = [];
        _this.arrSkeletonIcon10K = [];
        _this.arrUIItemIcon = [];
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.isFirst = false;
        _this.isSound = false;
        _this.isMusic = true;
        _this.mutipleJpNode = null;
        _this.audioIdRepeatSpin = 0;
        return _this;
      }
      Slot4Controller.prototype.start = function() {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.isSound = true;
        this.isMusic = true;
        this.totalWinLabel.string = "";
        var musicId = 0;
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.mSlotLobby.onBtnBack();
        }, this);
        this.init();
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot4Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            _this.mSlotLobby.onUpdateJackpot(data);
            break;

           case Slot4Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot4Cmd_1.default.ReceiveUpdatePot(data);
            -1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, .3) : 0 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom1, .3) : 1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom2, .3) : 2 == _this.betId && Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, .3);
            break;

           case Slot4Cmd_1.default.Code.UPDATE_RESULT:
            var res = new Slot4Cmd_1.default.ReceiveResult(data);
            _this.spinResult(res);
            break;

           case Slot4Cmd_1.default.Code.FREE_DAI_LY:
            if (!_this.isTrial) {
              var res = new Slot4Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.dailyFreeSpin = res.freeSpin;
              if (_this.dailyFreeSpin > 0) {
                _this.lblFreeSpinCount.node.parent.active = true;
                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
              } else _this.lblFreeSpinCount.node.parent.active = false;
            }
            break;

           case Slot4Cmd_1.default.Code.DATE_X2:
            var res = new Slot4Cmd_1.default.ReceiveDateX2(data);
            if (false == _this.isFirst) {
              _this.hideGamePlay();
              _this.isFirst = true;
            } else {
              _this.mSlotLobby.node.active = false;
              _this.onJoinRoom(res);
            }
            break;

           case Slot4Cmd_1.default.Code.CHANGE_ROOM:
          }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot4Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, .3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function() {
          App_1.default.instance.showLoading(false);
        });
        this.chooseLineScript.onSelectedChanged = function(lines) {
          _this.arrLineSelected = lines;
          _this.totalLineLabel.string = lines.length.toString();
          Tween_1.default.numberTo(_this.totalBetLabel, lines.length * _this.listBet[_this.betId], .3);
        };
        this.mSlotLobby.init(this);
      };
      Slot4Controller.prototype.initMutipleJPNode = function() {
        var _this = this;
        this.mutipleJpNode || cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          if (null != err1) ; else {
            _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
            _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
            _this.mutipleJpNode.setInfo("ANGRY");
          }
        });
      };
      Slot4Controller.prototype.showAnimations = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var nodeItem = self.arrUIItemIcon[i].nodeBox;
          var indexCol = i % 5;
          nodeItem.opacity = 0;
          nodeItem.position = cc.v3(0, self.distanceReel, 0);
          cc.tween(nodeItem).delay(.1 * indexCol).to(1, {
            position: cc.v3(0, 0, 0),
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
      };
      Slot4Controller.prototype.showGamePlay = function() {
        this.isMusic && cc.audioEngine.playMusic(this.musicGame, true);
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
      };
      Slot4Controller.prototype.hideGamePlay = function() {
        this.isMusic && cc.audioEngine.playMusic(this.musicLobby, true);
        this.nodeGamePlay.active = false;
      };
      Slot4Controller.prototype.init = function() {
        this.totalWinLabel.string = "";
      };
      Slot4Controller.prototype.showCoins = function(prize) {
        var number = prize / 2e4;
        number <= 10 ? number = 10 : number >= 30 && (number = 30);
        App_1.default.instance.showCoins(number, this.totalWinLabel.node, this.nodeCoin);
      };
      Slot4Controller.prototype.onJoinRoom = function(res) {
        void 0 === res && (res = null);
        var betIdTmp = this.betId;
        -1 == betIdTmp && (betIdTmp = 2);
        var totalbet = this.arrLineSelected.length * this.listBet[betIdTmp];
        Tween_1.default.numberTo(this.totalBetLabel, totalbet, .3);
        this.mSlotLobby.hide();
        this.nodeDemo.active = !!this.isTrial;
        this.showGamePlay();
        this.setButtonEnable(true);
        if (null == res) this.freespinCurrent.active = false; else if (res.freeSpin + this.dailyFreeSpin > 0) {
          this.freespinCurrent.active = true;
          this.freespinCurrent.getComponentInChildren(cc.Label).string = res.freeSpin + this.dailyFreeSpin;
        } else this.freespinCurrent.active = false;
      };
      Slot4Controller.prototype.randomIconList = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var index = i;
          var itemId = Math.floor(Math.random() * self.iconSFArr100.length);
          self.arrUIItemIcon[i].init(itemId, index, self);
          self.arrUIItemIcon[i].changeSpineIcon(itemId);
          self.arrUIItemIcon[i].spriteIcon.node.active = false;
          self.arrUIItemIcon[i].spineIcon.node.active = true;
          self.arrUIItemIcon[i].spineIcon.animation = "idle";
          self.arrUIItemIcon[i].spineIcon.loop = true;
        }
      };
      Slot4Controller.prototype.randomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      Slot4Controller.prototype.spinClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isTrial) {
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          var rIdx = Utils_1.default.randomRangeInt(0, Slot4TrialResult_1.default.results.length);
          this.spinResult(Slot4TrialResult_1.default.results[rIdx]);
        } else {
          if (this.dailyFreeSpin > 0) {
            this.dailyFreeSpin--;
            if (this.dailyFreeSpin > 0) {
              this.lblFreeSpinCount.node.parent.active = true;
              this.lblFreeSpinCount.string = this.dailyFreeSpin + "";
            } else this.lblFreeSpinCount.node.parent.active = false;
          } else if (Configs_1.default.Login.Coin < this.listBet[this.betId] * this.arrLineSelected.length) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
          }
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendPlay(this.arrLineSelected.toString()));
        }
      };
      Slot4Controller.prototype.onBtnSoundTouchBonus = function() {
        this.isSound && cc.audioEngine.play(this.soundtouchBonus, false, 1);
      };
      Slot4Controller.prototype.onBtnSoundSumary = function() {
        this.isSound && cc.audioEngine.play(this.soundSmumary, false, 1);
      };
      Slot4Controller.prototype.spinResult = function(res) {
        this.isSpining = true;
        var that = this;
        var successResult = [ 0, 1, 2, 3, 4, 5, 6 ];
        var result = res.result;
        if (-1 === successResult.indexOf(result)) {
          102 === result && App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
          return;
        }
        var matrix = res.matrix.split(",");
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        this.isSound && cc.audioEngine.play(this.soundStartSpin, false, 1);
        this.isSound && (this.audioIdRepeatSpin = cc.audioEngine.play(this.soundRepeatSpin, true, 1));
        for (var i = 0; i < this.arrReel.length; i++) this.beginSpinReel(i);
      };
      Slot4Controller.prototype.spinFinish = function(hasDelay) {
        this.isSpining = false;
        var that = this;
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function() {
          if (that.toggleFast.isChecked) that.spinClick(); else {
            that.setButtonEnable(true);
            that.setButtonFlash(true);
          }
        })));
      };
      Slot4Controller.prototype.showWinEffect = function(prize, currentMoney, result) {
        var _this = this;
        var self = this;
        if (prize > 0) if (5 == result) {
          this.isSound && cc.audioEngine.play(this.soundBonus, false, 1);
          this.bonusNode.active = true;
          var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
          bonusSpine.setAnimation(0, "angrybirds_bonus", false);
          this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
            _this.bonusNode.active = false;
            _this.isMusic && cc.audioEngine.playMusic(_this.musicBonus, true);
            _this.popupBonus.showBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, _this, function() {
              _this.showLineWin(self.dataResult.linesWin.split(","));
              _this.showCoins(prize);
              Tween_1.default.numberTo(_this.winLabel, prize, .3);
              Tween_1.default.numberTo(_this.totalWinLabel, prize, .3);
              Tween_1.default.numberTo(_this.totalBetLabel, _this.arrLineSelected.length * _this.listBet[_this.betId], .3);
              _this.isTrial || Tween_1.default.numberTo(_this.moneyLabel, currentMoney, .3);
              _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
            });
          })));
        } else if (2 == result || 6 == result) {
          this.isSound && cc.audioEngine.play(this.soundBigWin, false, 1);
          this.bigWinNode.active = true;
          var bigwinSpine = this.bigWinNode.getComponentInChildren(sp.Skeleton);
          bigwinSpine.setAnimation(0, "nightclublady_bigwin", false);
          Tween_1.default.numberTo(this.txtWinBigWin, prize, .3);
          this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
            _this.bigWinNode.active = false;
            _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
          })));
          this.showCoins(prize);
          Tween_1.default.numberTo(this.winLabel, prize, .3);
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
        } else if (3 == result || 4 == result) {
          if (this.isSound) var audioIdJackpot = cc.audioEngine.play(this.soundJackpot, false, 1);
          if (this.isSound) var audioIdJackpot = cc.audioEngine.play(this.soundSmumary, false, 1);
          this.jackpotNode.active = true;
          var jackpotSpine = this.jackpotNode.getComponentInChildren(sp.Skeleton);
          jackpotSpine.setAnimation(0, "appear", false);
          jackpotSpine.addAnimation(0, "angrybirds_jackpot", true);
          this.showCoins(prize);
          cc.Tween.stopAllByTarget(this.nodeWinJackpot);
          Tween_1.default.numberTo(this.txtWinJackpot, prize, .3);
          this.nodeWinJackpot.position = cc.v3(0, -360, 0);
          this.nodeWinJackpot.active = true;
          cc.tween(this.nodeWinJackpot).to(1, {
            position: cc.v3(0, 0, 0)
          }).delay(3).to(1, {
            position: cc.v3(0, -360, 0)
          }).start();
          this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
            _this.jackpotNode.active = false;
            _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
            _this.isSound && cc.audioEngine.stop(audioIdJackpot);
          })));
          Tween_1.default.numberTo(this.winLabel, prize, .3);
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
        } else {
          this.isSound && cc.audioEngine.play(this.soundSpinWin, false, 1);
          this.winNormalBg.active = true;
          this.showCoins(prize);
          Tween_1.default.numberTo(this.winLabel, prize, .3);
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
        } else {
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
        }
      };
      Slot4Controller.prototype.beginSpinReel = function(indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleFast.isChecked;
        self.numberSpinReel[indexReel] = 0;
        cc.Tween.stopAllByTarget(self.arrReel[indexReel]);
        cc.tween(self.arrReel[indexReel]).delay(.2 * indexReel).to(.1, {
          position: cc.v3(self.arrReel[indexReel].position.x, 70, 0)
        }, {
          easing: "linear"
        }).call(function() {
          self.loopSpinReel(indexReel);
        }).start();
      };
      Slot4Controller.prototype.loopSpinReel = function(indexReel) {
        var self = this;
        cc.tween(self.arrReel[indexReel]).to(.06, {
          position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0)
        }, {
          easing: "linear"
        }).call(function() {
          self.processLoopSpinReel(indexReel);
        }).start();
      };
      Slot4Controller.prototype.processLoopSpinReel = function(indexReel) {
        var self = this;
        self.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
          var index = indexReel + 5 * i;
          var indexRow = Math.floor(index / 5);
          var itemIdTmp = 0;
          itemIdTmp = 0 == indexRow ? Math.floor(Math.random() * self.iconSFBlurArr100.length) : self.arrUIItemIcon[index - 5].itemId;
          self.arrUIItemIcon[index].changeSpriteBlurByItemId(itemIdTmp);
          if (false == self.arrUIItemIcon[index].spriteIcon.node.active) {
            self.arrUIItemIcon[index].spriteIcon.node.active = true;
            self.arrUIItemIcon[index].spineIcon.node.active = false;
          }
        }
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, 0, 0);
        self.isHaveResultSpin ? false == self.isFastCurrent ? self.numberSpinReel[indexReel] >= MAX_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel) : self.numberSpinReel[indexReel] >= FAST_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel) : self.numberSpinReel[indexReel] >= ERROR_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel);
      };
      Slot4Controller.prototype.endSpinReel = function(indexReel) {
        var _this = this;
        var self = this;
        if (null == self.dataResult) {
          for (var i = 3; i >= 1; i--) {
            var index = indexReel + 5 * i;
            var itemId = Math.floor(Math.random() * self.iconSFArr100.length);
            self.arrUIItemIcon[index].changeSpineIcon(itemId);
            self.arrUIItemIcon[index].spriteIcon.node.active = false;
            self.arrUIItemIcon[index].spineIcon.node.active = true;
            self.arrUIItemIcon[index].spineIcon.setAnimation(0, "idle", true);
          }
          return;
        }
        var matrix = self.dataResult.matrix.split(",");
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
          var index = indexReel + 5 * i;
          self.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
          self.arrUIItemIcon[index].spriteIcon.node.active = false;
          self.arrUIItemIcon[index].spineIcon.node.active = true;
          self.arrUIItemIcon[index].spineIcon.setAnimation(0, "idle", true);
        }
        cc.tween(self.arrReel[indexReel]).to(.3, {
          position: cc.v3(self.arrReel[indexReel].position.x, 0, 0)
        }, {
          easing: "backOut"
        }).call(function() {
          self.isSound && cc.audioEngine.play(self.soundEndSpin, false, 1);
          if (4 == indexReel) {
            cc.audioEngine.stop(_this.audioIdRepeatSpin);
            Configs_1.default.Login.Coin = self.dataResult.currentMoney;
            if (self.dataResult.currentNumberFreeSpin > 0) {
              self.freespinCurrent.active = true;
              self.freespinCurrent.getComponentInChildren(cc.Label).string = self.dataResult.currentNumberFreeSpin;
            } else self.freespinCurrent.active = false;
            if (1 == self.dataResult.isFreeSpin) {
              _this.freespinNode.active = true;
              var freeSpineSpine = _this.freespinNode.getComponentInChildren(sp.Skeleton);
              freeSpineSpine.setAnimation(0, "angrybirds_freespin", false);
              _this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                _this.freespinNode.active = false;
                "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
              })));
            } else self.showWinEffect(self.dataResult.prize, self.dataResult.currentMoney, self.dataResult.result);
          }
        }).start();
      };
      Slot4Controller.prototype.getSpriteFrameIconBlur = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.iconSFBlurArr10K[indexIcon];
        if (0 == this.betId) return self.iconSFBlurArr100[indexIcon];
        if (1 == this.betId) return self.iconSFBlurArr1K[indexIcon];
        if (2 == this.betId) return self.iconSFBlurArr10K[indexIcon];
      };
      Slot4Controller.prototype.getSpriteFrameIcon = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.iconSFArr10K[indexIcon];
        if (0 == this.betId) return self.iconSFArr100[indexIcon];
        if (1 == this.betId) return self.iconSFArr1K[indexIcon];
        if (2 == this.betId) return self.iconSFArr10K[indexIcon];
      };
      Slot4Controller.prototype.getSpineIcon = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.arrSkeletonIcon10K[indexIcon];
        if (0 == this.betId) return self.arrSkeletonIcon100[indexIcon];
        if (1 == this.betId) return self.arrSkeletonIcon1K[indexIcon];
        if (2 == this.betId) return self.arrSkeletonIcon10K[indexIcon];
      };
      Slot4Controller.prototype.hideWinEffect = function() {
        this.winNormalBg.active = false;
        this.winLabel.string = "0";
        this.bonusNode.active = false;
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
      };
      Slot4Controller.prototype.onBtnToggleMusic = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? 1 : 0);
      };
      Slot4Controller.prototype.onBtnToggleSound = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSound = !this.isSound;
      };
      Slot4Controller.prototype.onBtnHistory = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot4Controller.prototype.onBtnHistoryJackpot = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot4Controller.prototype.onBtnHideSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
      };
      Slot4Controller.prototype.onBtnSoundClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
      };
      Slot4Controller.prototype.onBtnSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.toggleMusic.isChecked = this.isMusic;
        this.toggleSound.isChecked = this.isSound;
        Tween_1.default.showPopup(this.nodeBoxSetting, this.nodeBoxSetting.parent);
      };
      Slot4Controller.prototype.showLineWin = function(lines) {
        var _this = this;
        if (0 == lines.length) return;
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var lineNode = this.lineWinParent.children[line - 1];
          lineNode.active = true;
        }
        var that = this;
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          that.hideLineWin(false);
        })));
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          var _loop_1 = function(i) {
            var line = lines[i];
            var lineNode = _this.lineWinParent.children[line - 1];
            _this.lineWinParent.runAction(cc.sequence(cc.delayTime(i * _this.TIME_DELAY_SHOW_LINE), cc.callFunc(function() {
              lineNode.active = true;
            }), cc.delayTime(_this.TIME_DELAY_SHOW_LINE), cc.callFunc(function() {
              lineNode.active = false;
              i == lines.length - 1 && that.spinFinish(false);
            })));
          };
          for (var i = 0; i < lines.length; i++) _loop_1(i);
        })));
      };
      Slot4Controller.prototype.hideLineWin = function(stopAction) {
        stopAction && this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function(element) {
          element.active = false;
        });
      };
      Slot4Controller.prototype.setButtonEnable = function(active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        true == active ? this.skeSpin.setAnimation(0, "spin", true) : this.skeSpin.setAnimation(0, "stop", true);
      };
      Slot4Controller.prototype.setButtonFlash = function(active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
      };
      Slot4Controller.prototype.changeBet = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
      };
      Slot4Controller.prototype.chooseBet = function(event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        this.isTrial = -1 == bet;
        this.betId = -1 == bet ? 2 : bet;
        if (this.betId >= this.listBet.length) {
          this.betId = 0;
          SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        } else SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
      };
      Slot4Controller.prototype.showGuide = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.popupGuide.show(this);
      };
      Slot4Controller.prototype.closeGuide = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.popupGuide.hide();
      };
      Slot4Controller.prototype.showChooseLine = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.chooseLineScript.show(this.arrLineSelected);
      };
      Slot4Controller.prototype.changeSpeed = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isFastCurrent = this.toggleFast.isChecked;
        this.toggleFast.isChecked && !this.isSpining && this.spinClick();
      };
      Slot4Controller.prototype.setAutoSpin = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSpining || this.spinClick();
      };
      Slot4Controller.prototype.actBack = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        cc.audioEngine.stopAll();
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
      };
      __decorate([ property(cc.Button) ], Slot4Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Button) ], Slot4Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "nodeBoxSetting", void 0);
      __decorate([ property(cc.Toggle) ], Slot4Controller.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], Slot4Controller.prototype, "toggleSound", void 0);
      __decorate([ property(Slot4_PopupBonus_1.default) ], Slot4Controller.prototype, "popupBonus", void 0);
      __decorate([ property(sp.Skeleton) ], Slot4Controller.prototype, "skeSpin", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "nodeDemo", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "nodeWinJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "txtWinJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "nodeGamePlay", void 0);
      __decorate([ property(Slot4_Lobby_1.default) ], Slot4Controller.prototype, "mSlotLobby", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "jackpotLabel", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "moneyLabel", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "totalLineLabel", void 0);
      __decorate([ property(cc.Button) ], Slot4Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Toggle) ], Slot4Controller.prototype, "toggleFast", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "winNormalBg", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "bonusNode", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "bigWinNode", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "txtWinBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "jackpotNode", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "freespinNode", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "winLabel", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "freespinCurrent", void 0);
      __decorate([ property(cc.Node) ], Slot4Controller.prototype, "lineWinParent", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "totalWinLabel", void 0);
      __decorate([ property(cc.Label) ], Slot4Controller.prototype, "totalBetLabel", void 0);
      __decorate([ property(Slot4ChooseLine_1.default) ], Slot4Controller.prototype, "chooseLineScript", void 0);
      __decorate([ property(Slot4Tutorial_1.default) ], Slot4Controller.prototype, "popupGuide", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "musicLobby", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "musicGame", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "musicBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundStartSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundRepeatSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundEndSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundFreeSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundtouchBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot4Controller.prototype, "soundSmumary", void 0);
      __decorate([ property([ cc.Node ]) ], Slot4Controller.prototype, "arrReel", void 0);
      __decorate([ property ], Slot4Controller.prototype, "distanceReel", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFBlurArr100", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFArr100", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot4Controller.prototype, "arrSkeletonIcon100", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFBlurArr1K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFArr1K", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot4Controller.prototype, "arrSkeletonIcon1K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFBlurArr10K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Controller.prototype, "iconSFArr10K", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot4Controller.prototype, "arrSkeletonIcon10K", void 0);
      __decorate([ property([ ItemIconSlot25_1.default ]) ], Slot4Controller.prototype, "arrUIItemIcon", void 0);
      Slot4Controller = __decorate([ ccclass ], Slot4Controller);
      return Slot4Controller;
    }(cc.Component);
    exports.default = Slot4Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/BaseSlot25/ItemIconSlot25": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot4.Lobby": "Slot4.Lobby",
    "./Slot4.PopupBonus": "Slot4.PopupBonus",
    "./Slot4ChooseLine": "Slot4ChooseLine",
    "./Slot4Cmd": "Slot4Cmd",
    "./Slot4TrialResult": "Slot4TrialResult",
    "./Slot4Tutorial": "Slot4Tutorial"
  } ],
  Slot4Glory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3204Onk7VJj6SePcUFXsIo", "Slot4Glory");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4Glory = function(_super) {
      __extends(Slot4Glory, _super);
      function Slot4Glory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      Slot4Glory.prototype.show = function() {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      Slot4Glory.prototype.dismiss = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      Slot4Glory.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot4Glory.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot4Glory.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 138,
          p: this.page,
          gn: "TAMHUNG"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
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
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("Type").getComponent(cc.Label).string = itemData["un"];
              item.getChildByName("Prize").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      __decorate([ property(cc.Node) ], Slot4Glory.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Label) ], Slot4Glory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], Slot4Glory.prototype, "itemTemplate", void 0);
      Slot4Glory = __decorate([ ccclass ], Slot4Glory);
      return Slot4Glory;
    }(cc.Component);
    exports.default = Slot4Glory;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  Slot4History: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c2e674Pi1MfpUYyQpJviPO", "Slot4History");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4History = function(_super) {
      __extends(Slot4History, _super);
      function Slot4History() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      Slot4History.prototype.show = function() {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      Slot4History.prototype.dismiss = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      Slot4History.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot4History.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot4History.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 137,
          p: this.page,
          un: Configs_1.default.Login.Nickname,
          gn: "TAMHUNG"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
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
              item.getChildByName("Id").getComponent(cc.Label).string = itemData["rf"];
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("Linebet").getComponent(cc.Label).string = "" === itemData["lb"] ? 0 : itemData["lb"].split(",").length;
              item.getChildByName("Linewin").getComponent(cc.Label).string = "" === itemData["lw"] ? 0 : itemData["lw"].split(",").length;
              item.getChildByName("Prize").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      __decorate([ property(cc.Node) ], Slot4History.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Label) ], Slot4History.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], Slot4History.prototype, "itemTemplate", void 0);
      Slot4History = __decorate([ ccclass ], Slot4History);
      return Slot4History;
    }(cc.Component);
    exports.default = Slot4History;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  Slot4Icon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7d51i8PLtHRr6dBVGfiTV6", "Slot4Icon");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeIcon = null;
        _this.fxJackpot = null;
        _this.fxBonus = null;
        _this.fxFree = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.animation = this.getComponent(cc.Animation);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.setSprite = function(sf) {
        this.nodeIcon.active = true;
        this.fxJackpot.active = false;
        this.fxBonus.active = false;
        this.fxFree.active = false;
        this.nodeIcon.getComponent(cc.Sprite).spriteFrame = sf;
      };
      NewClass.prototype.setSpine = function(id) {
        this.nodeIcon.active = false;
        this.fxJackpot.active = false;
        this.fxBonus.active = false;
        this.fxFree.active = false;
        switch (parseInt(id)) {
         case 0:
          this.fxJackpot.active = true;
          break;

         case 1:
          this.fxBonus.active = true;
          break;

         case 2:
          this.fxFree.active = true;
        }
      };
      NewClass.prototype.scale = function() {
        this.nodeIcon.active && this.animation.play();
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeIcon", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "fxJackpot", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "fxBonus", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "fxFree", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Slot4TrialResult: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37163bhkGBNFY1pxKtu3JxL", "Slot4TrialResult");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TrialResults = function() {
      function TrialResults() {}
      TrialResults.results = [ {
        _pos: 72,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 21,
          12: 1,
          13: 0,
          14: 29,
          15: 53,
          16: 44,
          17: 48,
          18: 44,
          19: 52,
          20: 44,
          21: 48,
          22: 44,
          23: 48,
          24: 44,
          25: 54,
          26: 44,
          27: 52,
          28: 44,
          29: 49,
          30: 44,
          31: 54,
          32: 44,
          33: 52,
          34: 44,
          35: 50,
          36: 44,
          37: 51,
          38: 44,
          39: 54,
          40: 44,
          41: 48,
          42: 44,
          43: 53,
          44: 0,
          45: 5,
          46: 50,
          47: 44,
          48: 52,
          49: 44,
          50: 54,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 5,
          60: 20,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 1,
          66: 244,
          67: 190,
          68: 240,
          69: 0,
          70: 0,
          71: 0
        },
        _length: 72,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826901,
        result: 1,
        matrix: "5,0,4,0,0,6,4,1,6,4,2,3,6,0,5",
        linesWin: "2,4,6",
        haiSao: "",
        prize: 1300,
        currentMoney: 32816880,
        isFreeSpin: 0,
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 72,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 23,
          12: 1,
          13: 0,
          14: 29,
          15: 54,
          16: 44,
          17: 51,
          18: 44,
          19: 53,
          20: 44,
          21: 53,
          22: 44,
          23: 51,
          24: 44,
          25: 50,
          26: 44,
          27: 49,
          28: 44,
          29: 54,
          30: 44,
          31: 51,
          32: 44,
          33: 51,
          34: 44,
          35: 49,
          36: 44,
          37: 54,
          38: 44,
          39: 48,
          40: 44,
          41: 51,
          42: 44,
          43: 51,
          44: 0,
          45: 5,
          46: 49,
          47: 52,
          48: 44,
          49: 50,
          50: 48,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 3,
          60: 32,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 1,
          66: 244,
          67: 178,
          68: 112,
          69: 0,
          70: 0,
          71: 0
        },
        _length: 72,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826903,
        result: 1,
        matrix: "6,3,5,5,3,2,1,6,3,3,1,6,0,3,3",
        linesWin: "14,20",
        haiSao: "",
        prize: 800,
        currentMoney: 32813680,
        isFreeSpin: 0,
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 86,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 24,
          12: 1,
          13: 0,
          14: 29,
          15: 51,
          16: 44,
          17: 48,
          18: 44,
          19: 51,
          20: 44,
          21: 51,
          22: 44,
          23: 52,
          24: 44,
          25: 54,
          26: 44,
          27: 51,
          28: 44,
          29: 48,
          30: 44,
          31: 53,
          32: 44,
          33: 51,
          34: 44,
          35: 51,
          36: 44,
          37: 48,
          38: 44,
          39: 51,
          40: 44,
          41: 52,
          42: 44,
          43: 50,
          44: 0,
          45: 19,
          46: 50,
          47: 44,
          48: 52,
          49: 44,
          50: 53,
          51: 44,
          52: 57,
          53: 44,
          54: 49,
          55: 48,
          56: 44,
          57: 49,
          58: 49,
          59: 44,
          60: 49,
          61: 50,
          62: 44,
          63: 49,
          64: 56,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 0,
          70: 0,
          71: 0,
          72: 0,
          73: 12,
          74: 128,
          75: 0,
          76: 0,
          77: 0,
          78: 0,
          79: 1,
          80: 244,
          81: 183,
          82: 32,
          83: 0,
          84: 0,
          85: 0
        },
        _length: 86,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826904,
        result: 1,
        matrix: "3,0,3,3,4,6,3,0,5,3,3,0,3,4,2",
        linesWin: "2,4,5,9,10,11,12,18",
        haiSao: "",
        prize: 3200,
        currentMoney: 32814880,
        isFreeSpin: 0,
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 80,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 27,
          12: 1,
          13: 0,
          14: 29,
          15: 54,
          16: 44,
          17: 49,
          18: 44,
          19: 53,
          20: 44,
          21: 52,
          22: 44,
          23: 50,
          24: 44,
          25: 53,
          26: 44,
          27: 51,
          28: 44,
          29: 50,
          30: 44,
          31: 54,
          32: 44,
          33: 53,
          34: 44,
          35: 50,
          36: 44,
          37: 53,
          38: 44,
          39: 51,
          40: 44,
          41: 52,
          42: 44,
          43: 49,
          44: 0,
          45: 13,
          46: 52,
          47: 44,
          48: 49,
          49: 51,
          50: 44,
          51: 49,
          52: 55,
          53: 44,
          54: 49,
          55: 56,
          56: 44,
          57: 49,
          58: 57,
          59: 0,
          60: 0,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 3,
          68: 32,
          69: 0,
          70: 0,
          71: 0,
          72: 0,
          73: 1,
          74: 244,
          75: 165,
          76: 240,
          77: 1,
          78: 1,
          79: 1
        },
        _length: 80,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826907,
        result: 1,
        matrix: "6,1,5,4,2,5,3,2,6,5,2,5,3,4,1",
        linesWin: "4,13,17,18,19",
        haiSao: "",
        prize: 800,
        currentMoney: 32810480,
        isFreeSpin: 1,
        ratio: 1,
        currentNumberFreeSpin: 1
      }, {
        _pos: 67,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 28,
          12: 1,
          13: 0,
          14: 29,
          15: 52,
          16: 44,
          17: 54,
          18: 44,
          19: 53,
          20: 44,
          21: 51,
          22: 44,
          23: 53,
          24: 44,
          25: 52,
          26: 44,
          27: 54,
          28: 44,
          29: 49,
          30: 44,
          31: 52,
          32: 44,
          33: 49,
          34: 44,
          35: 54,
          36: 44,
          37: 52,
          38: 44,
          39: 49,
          40: 44,
          41: 51,
          42: 44,
          43: 48,
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
          61: 244,
          62: 165,
          63: 240,
          64: 0,
          65: 0,
          66: 0
        },
        _length: 67,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826908,
        result: 1,
        matrix: "4,6,5,3,5,4,6,1,4,1,6,4,1,3,0",
        linesWin: "",
        haiSao: "",
        prize: 0,
        currentMoney: 32810480,
        isFreeSpin: 0,
        ratio: 0,
        currentNumberFreeSpin: 0
      }, {
        _pos: 89,
        _data: {
          0: 1,
          1: 54,
          2: 177,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 195,
          10: 185,
          11: 29,
          12: 1,
          13: 0,
          14: 29,
          15: 53,
          16: 44,
          17: 52,
          18: 44,
          19: 54,
          20: 44,
          21: 51,
          22: 44,
          23: 51,
          24: 44,
          25: 53,
          26: 44,
          27: 51,
          28: 44,
          29: 51,
          30: 44,
          31: 54,
          32: 44,
          33: 53,
          34: 44,
          35: 51,
          36: 44,
          37: 49,
          38: 44,
          39: 54,
          40: 44,
          41: 51,
          42: 44,
          43: 51,
          44: 0,
          45: 22,
          46: 51,
          47: 44,
          48: 54,
          49: 44,
          50: 55,
          51: 44,
          52: 57,
          53: 44,
          54: 49,
          55: 49,
          56: 44,
          57: 49,
          58: 53,
          59: 44,
          60: 49,
          61: 54,
          62: 44,
          63: 49,
          64: 57,
          65: 44,
          66: 50,
          67: 48,
          68: 0,
          69: 0,
          70: 0,
          71: 0,
          72: 0,
          73: 0,
          74: 0,
          75: 0,
          76: 32,
          77: 208,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 1,
          83: 244,
          84: 190,
          85: 240,
          86: 0,
          87: 0,
          88: 0
        },
        _length: 89,
        _controllerId: 1,
        _cmdId: 14001,
        _error: 0,
        ref: 12826909,
        result: 1,
        matrix: "5,4,6,3,3,5,3,3,6,5,3,1,6,3,3",
        linesWin: "3,6,7,9,11,15,16,19,20",
        haiSao: "",
        prize: 8400,
        currentMoney: 32816880,
        isFreeSpin: 0,
        ratio: 0,
        currentNumberFreeSpin: 0
      } ];
      return TrialResults;
    }();
    exports.default = TrialResults;
    cc._RF.pop();
  }, {} ],
  Slot4Tutorial: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8be1cyApdLjbjiQvXiWFls", "Slot4Tutorial");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4Glory = function(_super) {
      __extends(Slot4Glory, _super);
      function Slot4Glory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.spriteTutorial = null;
        _this.sfTutorialArr = [];
        return _this;
      }
      Slot4Glory.prototype.show = function(controller) {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        -1 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[2] : 0 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[0] : 1 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[1] : this.spriteTutorial.spriteFrame = this.sfTutorialArr[2];
      };
      Slot4Glory.prototype.hide = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
      };
      __decorate([ property(cc.Node) ], Slot4Glory.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Sprite) ], Slot4Glory.prototype, "spriteTutorial", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot4Glory.prototype, "sfTutorialArr", void 0);
      Slot4Glory = __decorate([ ccclass ], Slot4Glory);
      return Slot4Glory;
    }(cc.Component);
    exports.default = Slot4Glory;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ]
}, {}, [ "Slot4.Lobby", "Slot4.PopupBonus", "Slot4ChooseLine", "Slot4Cmd", "Slot4Controller", "Slot4Glory", "Slot4History", "Slot4Icon", "Slot4TrialResult", "Slot4Tutorial" ]);