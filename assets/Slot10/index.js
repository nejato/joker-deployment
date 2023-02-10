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
  "Slot10.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71e68/EEIpCDblM9G2vp4Op", "Slot10.Cmd");
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
        Code.SUBCRIBE = 3003;
        Code.UNSUBCRIBE = 3004;
        Code.CHANGE_ROOM = 3005;
        Code.PLAY = 3001;
        Code.UPDATE_POT = 3002;
        Code.AUTO = 3006;
        Code.FORCE_STOP_AUTO = 3008;
        Code.DATE_X2 = 3009;
        Code.BIG_WIN = 3010;
        Code.FREE = 3011;
        Code.FREE_DAI_LY = 3012;
        Code.MINIMIZE = 3013;
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
          return _this;
        }
        return ReceivePlay;
      }(Network_InPacket_1.default);
      cmd.ReceivePlay = ReceivePlay;
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
  "Slot10.Item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41c11FnMNRHvYCSHM08npo0", "Slot10.Item");
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
    var Slot10ItemSlot = function(_super) {
      __extends(Slot10ItemSlot, _super);
      function Slot10ItemSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.itemAtlast = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
      }
      Slot10ItemSlot.prototype.onLoad = function() {
        this.spriteIcon = cc.find("Box/sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/ske", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
      };
      Slot10ItemSlot.prototype.init = function(itemId, index, gamePlayManager) {
        itemId = parseInt(itemId);
        this.gamePlayManager = gamePlayManager;
        this.itemId = itemId;
        this.index = index;
        this.spriteIcon.node.active = true;
        this.spineIcon.node.scale = .65;
        this.spriteIcon.node.setContentSize(cc.size(.67 * this.spriteIcon.node.width, .67 * this.spriteIcon.node.height));
        this.spineIcon.node.active = false;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
      };
      Slot10ItemSlot.prototype.changeSpriteBlurByItemId = function(itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1) + "_blur");
        this.spriteIcon.node.setContentSize(cc.size(.67 * this.spriteIcon.node.width, .67 * this.spriteIcon.node.height));
      };
      Slot10ItemSlot.prototype.changeSpriteRealByItemId = function(itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
        this.spriteIcon.node.setContentSize(cc.size(.67 * this.spriteIcon.node.width, .67 * this.spriteIcon.node.height));
      };
      Slot10ItemSlot.prototype.changeSpineIcon = function(itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
        this.spriteIcon.node.active = true;
        this.spriteIcon.node.setContentSize(cc.size(.67 * this.spriteIcon.node.width, .67 * this.spriteIcon.node.height));
        if (0 != itemId && 2 != itemId) this.spineIcon.node.active = false; else {
          itemId = parseInt(itemId);
          switch (itemId) {
           case 0:
            this.animName = "jackpot";
            break;

           case 2:
            this.animName = "bonus";
          }
        }
      };
      Slot10ItemSlot.prototype.checkShowSpriteOrSpine = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (0 != this.itemId && 2 != this.itemId) {
          this.spineIcon.node.active = false;
          this.spriteIcon.node.active = true;
          this.spriteIcon.node.color = cc.Color.WHITE;
        } else {
          this.spineIcon.node.active = true;
          this.spriteIcon.node.active = false;
          this.spineIcon.setAnimation(0, this.animName, true);
          this.spineIcon.node.color = cc.Color.WHITE;
        }
        cc.tween(this.node).delay(.9).call(function() {
          _this.spineIcon.node.color = cc.Color.GRAY;
          _this.spriteIcon.node.color = cc.Color.GRAY;
          _this.spriteIcon.node.active = true;
          _this.spineIcon.node.active = false;
        }).start();
      };
      __decorate([ property(cc.Sprite) ], Slot10ItemSlot.prototype, "spriteIcon", void 0);
      __decorate([ property(sp.Skeleton) ], Slot10ItemSlot.prototype, "spineIcon", void 0);
      __decorate([ property(cc.Node) ], Slot10ItemSlot.prototype, "nodeBox", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Slot10ItemSlot.prototype, "itemAtlast", void 0);
      Slot10ItemSlot = __decorate([ ccclass ], Slot10ItemSlot);
      return Slot10ItemSlot;
    }(cc.Component);
    exports.default = Slot10ItemSlot;
    cc._RF.pop();
  }, {} ],
  "Slot10.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "868b0KfGnlMuaIuzX7DlHVR", "Slot10.Lobby");
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
    var Slot10_Cmd_1 = require("./Slot10.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot10Lobby = function(_super) {
      __extends(Slot10Lobby, _super);
      function Slot10Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
      }
      Slot10Lobby.prototype.init = function(pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
      };
      Slot10Lobby.prototype.showAnimation = function() {
        var self = this;
        for (var i = 0; i < this.rooms.length; i++) {
          var nodeBox = this.rooms[i];
          cc.Tween.stopAllByTarget(nodeBox);
          nodeBox.opacity = 0;
          nodeBox.position = 0 == i ? cc.v2(-200, 0) : 1 == i ? cc.v2(0, -200) : 2 == i ? cc.v2(0, 200) : cc.v2(200, 0);
          cc.tween(nodeBox).to(1, {
            position: cc.v2(0, 0),
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
      };
      Slot10Lobby.prototype.onBtnBack = function() {
        1 == this.mSlotController.soundSlotState && cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot10Lobby.prototype.onBtnTry = function() {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 0;
        this.mSlotController.mIsTrial = false;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot10Lobby.prototype.onBtn100 = function() {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 0;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot10Lobby.prototype.onBtn5k = function() {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 1;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot10Lobby.prototype.omBtn10k = function() {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 2;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot10Lobby.prototype.onUpdateJackpot = function(pData) {
        var res = new Slot10_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["maybach"]["100"].p, .3);
        Tween_1.default.numberTo(this.listPot[1], resJson["maybach"]["1000"].p, .3);
        Tween_1.default.numberTo(this.listPot[2], resJson["maybach"]["10000"].p, .3);
      };
      __decorate([ property([ cc.Label ]) ], Slot10Lobby.prototype, "listPot", void 0);
      __decorate([ property([ cc.Node ]) ], Slot10Lobby.prototype, "rooms", void 0);
      Slot10Lobby = __decorate([ ccclass ], Slot10Lobby);
      return Slot10Lobby;
    }(cc.Component);
    exports.default = Slot10Lobby;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot10.Cmd": "Slot10.Cmd"
  } ],
  "Slot10.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e2d2mVjHFH2YJBTVjzn6v0", "Slot10.PopupBonus");
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
        _this.sfGangTayActive = null;
        _this.sfGangTayDisActive = null;
        _this.sfGangTayNormal = null;
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
          node["label"] = node.getChildByName("label").children[0].getComponent(cc.Label);
          node["icon"] = node.getChildByName("icon");
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                node["btn"].node.active = false;
                node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayDisActive;
                node["label"].node.parent.active = true;
                node["label"].string = "0";
                break;

               case 1:
                node["btn"].node.active = false;
                node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                node["label"].node.parent.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["btn"].node.active = false;
                node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                node["label"].node.parent.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["btn"].node.active = false;
                node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                node["label"].node.parent.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["btn"].node.active = false;
                node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                node["label"].node.parent.active = true;
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
        Tween_1.default.numberTo(this.lblWin, this.win, .3);
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["icon"] = node.getChildByName("icon");
          node["icon"].getComponent(cc.Sprite).spriteFrame = this.sfGangTayNormal;
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
        this.heso = this.dataBonus[0];
        this.lblHeso.string = this.heso + "";
      };
      PopupBonus.prototype.hidden = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.dismiss();
          _this.onFinished();
        }, 1.5);
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
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblHeso", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblWin", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupBonus.prototype, "sfGangTayActive", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupBonus.prototype, "sfGangTayDisActive", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupBonus.prototype, "sfGangTayNormal", void 0);
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
  "Slot10.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b5b7n7WftPxL1viWZM+ge0", "Slot10.PopupGuide");
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
        this.btnPrev.active = true;
      };
      PopupGuide.prototype.actNext = function() {
        this.page < this.pageView.getPages().length - 1 && this.page++;
        this.page == this.pageView.getPages().length - 1 && (this.btnNext.active = false);
        this.btnPrev.active = true;
        this.pageView.scrollToPage(this.page, .2);
      };
      PopupGuide.prototype.actPrev = function() {
        this.page > 0 && this.page--;
        0 == this.page && (this.btnPrev.active = false);
        this.btnNext.active = true;
        this.pageView.scrollToPage(this.page, .2);
      };
      PopupGuide.prototype.dismiss = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        _super.prototype.dismiss.call(this);
      };
      PopupGuide.prototype.canPlaySound = function() {
        if (null == this.soundClick) return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
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
  "Slot10.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75ff4JXTt1AgL6qh35h9ncd", "Slot10.PopupHistory");
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
          gn: "MAYBACH"
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
  "Slot10.PopupJackpotHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92713TxNLFKcKTH6lxHY93v", "Slot10.PopupJackpotHistory");
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
          gn: "MAYBACH"
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
              item.getChildByName("Type").getComponent(cc.Label).string = 3 == itemData["rs"] ? "\u101b\u1010\u1014\u102c\u1000\u102d\u102f\u1021\u1014\u102d\u102f\u1004\u103a\u101b" : "\u1000\u103c\u102e\u1038\u1019\u102c\u1038\u1010\u1032\u1037\u1021\u1014\u102d\u102f\u1004\u103a\u101b";
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
  "Slot10.PopupSelectLine": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e99edWAbtKqYccS3xCA2Zt", "Slot10.PopupSelectLine");
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
    exports.PopupSelectLine = PopupSelectLine;
    exports.default = PopupSelectLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot10.Slot10Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e126eHphY9EqbzZPztrrrv5", "Slot10.Slot10Controller");
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
    var Slot10_Cmd_1 = require("./Slot10.Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot10_PopupSelectLine_1 = require("./Slot10.PopupSelectLine");
    var Slot10_PopupBonus_1 = require("./Slot10.PopupBonus");
    var Slot10_TrialResults_1 = require("./Slot10.TrialResults");
    var Slot10_Lobby_1 = require("./Slot10.Lobby");
    var Slot10_Item_1 = require("./Slot10.Item");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var Slot10_Item_2 = require("./Slot10.Item");
    var TYPE_WIN;
    (function(TYPE_WIN) {
      TYPE_WIN[TYPE_WIN["MISS"] = 0] = "MISS";
      TYPE_WIN[TYPE_WIN["WIN"] = 1] = "WIN";
      TYPE_WIN[TYPE_WIN["BIGWIN"] = 2] = "BIGWIN";
      TYPE_WIN[TYPE_WIN["JACKPOT"] = 3] = "JACKPOT";
      TYPE_WIN[TYPE_WIN["SUPERWIN"] = 4] = "SUPERWIN";
      TYPE_WIN[TYPE_WIN["BONUS"] = 5] = "BONUS";
    })(TYPE_WIN || (TYPE_WIN = {}));
    var MAX_CYCCLE_SPIN = 20;
    var FAST_CYCCLE_SPIN = 10;
    var ERROR_CYCCLE_SPIN = 50;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot10Controller = function(_super) {
      __extends(Slot10Controller, _super);
      function Slot10Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mSlotLobby = null;
        _this.nodeCoin = null;
        _this.mHeightItem = 180;
        _this.mWidthItem = 180;
        _this.reels = null;
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
        _this.toggleSound = null;
        _this.togglgeMusic = null;
        _this.toggleBoost = null;
        _this.btnSpin = null;
        _this.btnBack = null;
        _this.btnPlayTry = null;
        _this.btnPlayReal = null;
        _this.btnLine = null;
        _this.toast = null;
        _this.panelSetting = null;
        _this.effectWinCash = null;
        _this.effectBigWin = null;
        _this.effectJackpot = null;
        _this.effectBonus = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
        _this.soundEndSpin = null;
        _this.soundBg = null;
        _this.soundBgBonus = null;
        _this.dailyFreeSpin = 0;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = .3;
        _this.betIdx = -1;
        _this.listBet = [ 100, 1e3, 1e4 ];
        _this.listBetLabel = [ "100", "1.000", "10.000" ];
        _this.arrLineSelect = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];
        _this.isSpined = true;
        _this.wildItemId = 2;
        _this.mapLine = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 1, 2, 3, 9 ], [ 5, 11, 12, 13, 9 ], [ 0, 1, 7, 13, 14 ], [ 10, 11, 7, 3, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 0, 6, 7, 8, 4 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 2, 8, 4 ], [ 10, 6, 12, 8, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 12, 3, 4 ], [ 10, 11, 2, 13, 14 ], [ 0, 11, 12, 13, 4 ], [ 10, 1, 2, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 5, 11, 2, 13, 9 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ] ];
        _this.lastSpinRes = null;
        _this.columnsWild = [];
        _this.mIsTrial = false;
        _this.isFastCurrent = false;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.iconSpriteFrameBlurArr = [];
        _this.iconSpriteFrameArr = [];
        _this.arrUIItemIcon = [];
        _this.arrRealItem = [];
        _this.arrSkeletonIcon = [];
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mutipleJpNode = null;
        return _this;
      }
      Slot10Controller.prototype.start = function() {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.soundInit();
        this.randomIconList();
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.mSlotLobby.onBtnBack();
        }, this);
        this.iconWildColumns.zIndex = 3;
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot10_Cmd_1.default.Code.FREE_DAI_LY:
            if (_this.mIsTrial) _this.lblFreeSpinCount.node.parent.active = false; else {
              var res_1 = new Slot10_Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.dailyFreeSpin = res_1.freeSpin;
              if (_this.dailyFreeSpin > 0) {
                _this.lblFreeSpinCount.node.parent.active = true;
                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
              } else _this.lblFreeSpinCount.node.parent.active = false;
            }
            break;

           case Slot10_Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot10_Cmd_1.default.ReceiveUpdatePot(data);
            Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, .3);
            break;

           case Slot10_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            _this.mSlotLobby.onUpdateJackpot(data);
            break;

           case Slot10_Cmd_1.default.Code.PLAY:
            var res_2 = new Slot10_Cmd_1.default.ReceivePlay(data);
            _this.onSpinResult(res_2);
          }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot10_Cmd_1.default.ReqSubcribeHallSlot());
        this.stopShowLinesWin();
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.panelSetting.active = false;
        this.popupSelectLine.onSelectedChanged = function(lines) {
          _this.arrLineSelect = lines;
          _this.lblLine.string = _this.arrLineSelect.length.toString();
          Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        };
        this.lblTotalBet.string = (this.arrLineSelect.length * this.listBet[this.betIdx]).toString();
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          Tween_1.default.numberTo(_this.lblCoin, Configs_1.default.Login.Coin, .3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function() {
          App_1.default.instance.showLoading(false);
        });
        this.mSlotLobby.init(this);
        this.mSlotLobby.node.active = true;
        this.btnPlayReal.node.active = false;
        this.btnPlayTry.node.active = true;
      };
      Slot10Controller.prototype.initMutipleJPNode = function() {
        var _this = this;
        this.mutipleJpNode || cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          if (null != err1) ; else {
            _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
            _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
            _this.mutipleJpNode.setInfo("THETHAO");
          }
        });
      };
      Slot10Controller.prototype.onBtnSoundTouchBonus = function() {};
      Slot10Controller.prototype.onBtnSoundSumary = function() {};
      Slot10Controller.prototype.getSpriteFrameIconBlur = function(indexIcon) {
        var self = this;
        return self.iconSpriteFrameBlurArr[indexIcon];
      };
      Slot10Controller.prototype.getSpriteFrameIcon = function(indexIcon) {
        var self = this;
        return self.iconSpriteFrameArr[indexIcon];
      };
      Slot10Controller.prototype.getSpineIcon = function(indexIcon) {
        var self = this;
        return self.arrSkeletonIcon[indexIcon];
      };
      Slot10Controller.prototype.randomIconList = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var index = i;
          var itemId = Math.floor(Math.random() * self.iconSpriteFrameArr.length);
          self.arrUIItemIcon[i].init(itemId, index, self);
          this.arrUIItemIcon[index].changeSpineIcon(itemId);
        }
      };
      Slot10Controller.prototype.onJoinRoom = function() {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = this.arrLineSelect.length * this.listBet[this.betIdx];
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, .3);
      };
      Slot10Controller.prototype.showToast = function(msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
          _this.toast.active = false;
        })));
      };
      Slot10Controller.prototype.moneyToK = function(money) {
        return money.toString();
      };
      Slot10Controller.prototype.setEnabledAllButtons = function(enabled) {
        this.btnSpin.interactable = enabled;
        this.btnSpin.node.children[0].active = enabled;
        this.btnBack.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = enabled;
        this.btnPlayReal.interactable = enabled;
      };
      Slot10Controller.prototype.stopAllEffects = function() {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
      };
      Slot10Controller.prototype.stopShowLinesWin = function() {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) this.linesWin.children[i].active = false;
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) this.iconWildColumns.children[i].active = false;
        this.stopAllItemEffect();
      };
      Slot10Controller.prototype.stopAllItemEffect = function() {
        for (var i = 0; i < this.reels.childrenCount; i++) for (var i_1 = 0; i_1 < this.reels.childrenCount; i_1++) {
          var children = this.reels.children[i_1].children;
          for (var j = 0; j < children.length; j++) {
            cc.Tween.stopAllByTarget(children[j]);
            children[j].scale = 1;
          }
        }
      };
      Slot10Controller.prototype.spin = function() {
        if (!this.isSpined) return;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundSpin, false, 1);
        this.changeAllItemToDark(false);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.isSpined = false;
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          var rIdx = Utils_1.default.randomRangeInt(0, Slot10_TrialResults_1.default.results.length);
          this.onSpinResult(Slot10_TrialResults_1.default.results[rIdx]);
        } else {
          if (this.dailyFreeSpin > 0) {
            this.dailyFreeSpin--;
            if (this.dailyFreeSpin > 0) {
              this.lblFreeSpinCount.node.parent.active = true;
              this.lblFreeSpinCount.string = this.dailyFreeSpin + "";
            } else this.lblFreeSpinCount.node.parent.active = false;
          } else if (Configs_1.default.Login.Coin < this.listBet[this.betIdx] * this.arrLineSelect.length) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
          }
          this.isSpined = false;
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          var data = new Slot10_Cmd_1.default.SendPlay(this.arrLineSelect.toString());
          SlotNetworkClient_1.default.getInstance().send(data);
        }
      };
      Slot10Controller.prototype.stopSpin = function() {};
      Slot10Controller.prototype.showLineWins = function() {
        var _this = this;
        this.isSpined = true;
        Tween_1.default.numberTo(this.lblWinNow, this.lastSpinRes.prize, .3);
        var isTrail = this.mIsTrial;
        isTrail || BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
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
        var rolls = this.reels.children;
        var actions = [];
        for (var i = 0; i < linesWinChildren.length; i++) linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
        if (this.lastSpinRes.prize > 0) {
          this.changeAllItemToDark(true);
          this.linesWin.zIndex = 2;
          this.reels.zIndex = 1;
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
                _this.reels.zIndex = 2;
                line.active = true;
                var mLine = _this.mapLine[lineIdx];
                var countItemWin = 0;
                var fisrtItemId = matrix[mLine[0]];
                for (var j = 0; j < mLine.length; j++) {
                  var itemId = matrix[mLine[j]];
                  if (!(fisrtItemId == itemId || parseInt(itemId) == _this.wildItemId || _this.columnsWild.indexOf(j) >= 0)) break;
                  countItemWin++;
                }
                var arrItem = _this.getItemWinInLine(lineIdx);
                var arrIdOfItem = [];
                var idWin = -1;
                arrItem.forEach(function(item) {
                  arrIdOfItem.push(item.itemId);
                });
                arrItem.forEach(function(item) {
                  idWin = _this.getItemIdWinInLine(arrIdOfItem);
                  if (item.itemId == idWin) {
                    cc.Tween.stopAllByTarget(item.node);
                    cc.tween(item.node).repeatForever(cc.tween().to(.2, {
                      scale: item.node.scale + .1
                    }).to(.2, {
                      scale: item.node.scale
                    })).start();
                    item.checkShowSpriteOrSpine();
                  }
                });
              }));
              actions.push(cc.delayTime(1));
              actions.push(cc.callFunc(function() {
                line.active = false;
                _this.stopAllItemEffect();
              }));
              actions.push(cc.delayTime(.1));
            };
            for (var i = 0; i < linesWin.length; i++) _loop_1(i);
          }
        }
        0 == actions.length && actions.push(cc.callFunc(function() {}));
        actions.push(cc.callFunc(function() {
          _this.changeAllItemToDark(false);
          (_this.toggleBoost.isChecked || _this.toggleAuto.isChecked) && _this.spin();
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
      };
      Slot10Controller.prototype.showCoins = function(prize) {
        var number = prize / 2e4;
        number <= 10 ? number = 10 : number >= 30 && (number = 30);
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
      };
      Slot10Controller.prototype.showWinCash = function(cash) {
        var _this = this;
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
      Slot10Controller.prototype.showEffectBigWin = function(cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          _this.effectBigWin.active = false;
          null != cb && cb();
        })));
      };
      Slot10Controller.prototype.showEffectJackpot = function(cash, cb) {
        var _this = this;
        void 0 === cb && (cb = null);
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(6), cc.callFunc(function() {
          _this.effectJackpot.active = false;
          null != cb && cb();
        })));
      };
      Slot10Controller.prototype.showEffectBonus = function(cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
          _this.effectBonus.active = false;
          null != cb && cb();
        })));
      };
      Slot10Controller.prototype.actClick = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundEndSpin, false, 1);
      };
      Slot10Controller.prototype.beginSpinReel = function(indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleBoost.isChecked;
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
      Slot10Controller.prototype.loopSpinReel = function(indexReel) {
        var _this = this;
        cc.tween(this.arrReel[indexReel]).to(.06, {
          position: cc.v3(this.arrReel[indexReel].position.x, -this.distanceReel, 0)
        }, {
          easing: "linear"
        }).call(function() {
          _this.processLoopSpinReel(indexReel);
        }).start();
      };
      Slot10Controller.prototype.processLoopSpinReel = function(indexReel) {
        this.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
          var index = indexReel + 5 * i;
          var indexRow = Math.floor(index / 5);
          var itemIdTmp = 0;
          itemIdTmp = 0 == indexRow ? Math.floor(Math.random() * this.iconSpriteFrameBlurArr.length) : this.arrUIItemIcon[index - 5].itemId;
          var item = this.arrUIItemIcon[index];
          item.changeSpriteBlurByItemId(itemIdTmp);
        }
        this.arrReel[indexReel].position = cc.v3(this.arrReel[indexReel].position.x, 0, 0);
        this.isHaveResultSpin ? false == this.isFastCurrent ? this.numberSpinReel[indexReel] >= MAX_CYCCLE_SPIN ? this.endSpinReel(indexReel) : this.loopSpinReel(indexReel) : this.numberSpinReel[indexReel] >= FAST_CYCCLE_SPIN ? this.endSpinReel(indexReel) : this.loopSpinReel(indexReel) : this.numberSpinReel[indexReel] >= ERROR_CYCCLE_SPIN ? this.endSpinReel(indexReel) : this.loopSpinReel(indexReel);
      };
      Slot10Controller.prototype.showWildBig = function() {
        var self = this;
        if (self.iconWildColumns.children.length <= 0) return;
        if (null == self.dataResult) return;
        var slotDatas = self.dataResult.matrix.split(",");
        var isWild = false;
        for (var i = 0; i < slotDatas.length; i++) if (slotDatas[i] == self.wildItemId) {
          false == isWild && (isWild = true);
          var indexRow = Math.floor(i % 5);
          self.iconWildColumns.children[indexRow].scale = 0;
          cc.Tween.stopAllByTarget(self.iconWildColumns.children[indexRow]);
          cc.tween(self.iconWildColumns.children[indexRow]).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          self.iconWildColumns.children[indexRow].active = true;
          self.iconWildColumns.children[indexRow].getComponent("sp.Skeleton").setAnimation(0, "animation", false);
        }
      };
      Slot10Controller.prototype.endSpinReel = function(indexReel) {
        var _this = this;
        if (null == this.dataResult) {
          for (var i = 3; i >= 1; i--) {
            var index = indexReel + 5 * i;
            var itemId = Math.floor(Math.random() * this.iconSpriteFrameArr.length);
            this.arrUIItemIcon[index].changeSpineIcon(itemId);
          }
          return;
        }
        var matrix = this.dataResult.matrix.split(",");
        var roll = this.reels.children[indexReel];
        this.arrReel[indexReel].position = cc.v3(this.arrReel[indexReel].position.x, this.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
          var index = indexReel + 5 * i;
          this.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
        }
        cc.tween(this.arrReel[indexReel]).to(.3, {
          position: cc.v3(this.arrReel[indexReel].position.x, 0, 0)
        }, {
          easing: "backOut"
        }).call(function() {
          1 == _this.soundSlotState && cc.audioEngine.play(_this.soundEndSpin, false, 1);
          4 == indexReel && _this.spined();
        }).start();
      };
      Slot10Controller.prototype.spined = function() {
        var _this = this;
        this.lastSpinRes.freeSpin && (this.lblFreeSpinCount.string = this.lastSpinRes.freeSpin.toString());
        var successResult = [ 0, 1, 3, 5, 6 ];
        switch (this.lastSpinRes.result) {
         case TYPE_WIN.MISS:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundSpinMis, false, 1);
          this.showLineWins();
          break;

         case TYPE_WIN.WIN:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundSpinWin, false, 1);
          this.showLineWins();
          break;

         case TYPE_WIN.BIGWIN:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundBigWin, false, 1);
          this.showEffectBigWin(this.lastSpinRes.prize, function() {
            _this.showLineWins();
          });
          break;

         case TYPE_WIN.JACKPOT:
         case TYPE_WIN.SUPERWIN:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundJackpot, false, 1);
          this.showEffectJackpot(this.lastSpinRes.prize, function() {
            _this.showLineWins();
          });
          break;

         case 6:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundBigWin, false, 1);
          this.showEffectBigWin(this.lastSpinRes.prize, function() {
            _this.showLineWins();
          });
          break;

         case TYPE_WIN.BONUS:
          1 == this.soundSlotState && cc.audioEngine.play(this.soundBonus, false, 1);
          this.showEffectBonus(function() {
            1 == _this.musicSlotState && (_this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBgBonus, true));
            _this.popupBonus.showBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.dataResult.haiSao, _this, function() {
              _this.showLineWins();
            });
          });
        }
      };
      Slot10Controller.prototype.onSpinResult = function(res) {
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
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        var isTrail = this.mIsTrial;
        if (!isTrail && !this.lastSpinRes.isFree) {
          var curMoney = Configs_1.default.Login.Coin - this.arrLineSelect.length * this.listBet[this.betIdx];
          Tween_1.default.numberTo(this.lblCoin, curMoney, .3);
          Configs_1.default.Login.Coin = res.currentMoney;
        }
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        for (var i = 0; i < this.arrReel.length; i++) this.beginSpinReel(i);
        return;
        var matrix;
        var timeScale;
        var _loop_2;
        var this_1;
        var i_2;
      };
      Slot10Controller.prototype.actBack = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendUnSubcribe(this.betIdx));
        this.mSlotLobby.node.active = true;
      };
      Slot10Controller.prototype.actHidden = function() {
        this.showToast(App_1.default.instance.getTextLang("txt_function_in_development"));
      };
      Slot10Controller.prototype.actBetUp = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx < this.listBet.length - 1) {
          this.dailyFreeSpin = 0;
          this.lblFreeSpinCount.node.parent.active = false;
          SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot10Controller.prototype.actBetDown = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx > 0) {
          this.dailyFreeSpin = 0;
          this.lblFreeSpinCount.node.parent.active = false;
          SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot10Controller.prototype.actLine = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        this.popupSelectLine.show();
      };
      Slot10Controller.prototype.actSetting = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.panelSetting.active = !this.panelSetting.active;
      };
      Slot10Controller.prototype.toggleTrialOnCheck = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.mIsTrial = !this.mIsTrial;
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.btnPlayReal.node.active = true;
          this.btnPlayTry.node.active = false;
          this.lblLine.string = "25";
          this.lblBet.string = "100";
          Tween_1.default.numberTo(this.lblTotalBet, 2500, .3, function(n) {
            return _this.moneyToK(n);
          });
        } else {
          this.btnPlayReal.node.active = false;
          this.btnPlayTry.node.active = true;
          this.lblLine.string = this.arrLineSelect.length.toString();
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot10Controller.prototype.toggleAutoOnCheck = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (this.toggleAuto.isChecked && isTrail) {
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
      Slot10Controller.prototype.toggleBoostOnCheck = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (this.toggleBoost.isChecked && isTrail) {
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
      Slot10Controller.prototype.soundInit = function() {
        var musicSave = cc.sys.localStorage.getItem("music_Slot_7");
        if (null != musicSave) this.musicSlotState = parseInt(musicSave); else {
          this.musicSlotState = 1;
          cc.sys.localStorage.setItem("music_Slot_7", "1");
        }
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_7");
        if (null != soundSave) this.soundSlotState = parseInt(soundSave); else {
          this.soundSlotState = 1;
          cc.sys.localStorage.setItem("sound_Slot_7", "1");
        }
        0 == this.musicSlotState;
        0 == this.soundSlotState;
        1 == this.musicSlotState && (this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true));
      };
      Slot10Controller.prototype.settingMusic = function() {
        if (this.togglgeMusic.isChecked) {
          this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
          this.musicSlotState = 1;
        } else {
          cc.audioEngine.stop(this.remoteMusicBackground);
          this.musicSlotState = 0;
        }
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        cc.sys.localStorage.setItem("music_Slot_7", "" + this.musicSlotState);
      };
      Slot10Controller.prototype.settingSound = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.toggleSound.isChecked ? this.soundSlotState = 1 : this.soundSlotState = 0;
        cc.sys.localStorage.setItem("music_Slot_7", "" + this.soundSlotState);
      };
      Slot10Controller.prototype.changeAllItemToDark = function(state) {
        for (var i = 0; i < this.reels.childrenCount; i++) {
          var col = this.reels.children[i];
          for (var j = 0; j < col.childrenCount; j++) {
            var item = col.children[j];
            var sprite = item.getComponentInChildren(cc.Sprite);
            var spine = item.getComponentInChildren(sp.Skeleton);
            spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            spine.node.active = false;
            sprite.node.active = true;
          }
        }
      };
      Slot10Controller.prototype.getItemWinInLine = function(lineId) {
        var lineArr = this.mapLine[lineId];
        var arrItem = [];
        this.arrRealItem = [];
        for (var i = 0; i < 15; i++) this.arrRealItem.push(this.arrUIItemIcon[i + 5]);
        for (var i = 0; i < lineArr.length; i++) arrItem.push(this.arrRealItem[lineArr[i]]);
        return arrItem;
      };
      Slot10Controller.prototype.getItemIdWinInLine = function(arrId) {
        var count = 0;
        var idWin = -1;
        arrId.forEach(function(id) {
          var size = arrId.filter(function(x) {
            return x == id && 1 != x;
          }).length;
          if (size >= count) {
            count = size;
            idWin = id;
          }
        });
        return idWin;
      };
      __decorate([ property(Slot10_Lobby_1.default) ], Slot10Controller.prototype, "mSlotLobby", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Integer) ], Slot10Controller.prototype, "mHeightItem", void 0);
      __decorate([ property(cc.Integer) ], Slot10Controller.prototype, "mWidthItem", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "reels", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "linesWin", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "iconWildColumns", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblBet", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblLine", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblTotalBet", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblWinNow", void 0);
      __decorate([ property(cc.Label) ], Slot10Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Toggle) ], Slot10Controller.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Toggle) ], Slot10Controller.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Toggle) ], Slot10Controller.prototype, "togglgeMusic", void 0);
      __decorate([ property(cc.Toggle) ], Slot10Controller.prototype, "toggleBoost", void 0);
      __decorate([ property(cc.Button) ], Slot10Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], Slot10Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Button) ], Slot10Controller.prototype, "btnPlayTry", void 0);
      __decorate([ property(cc.Button) ], Slot10Controller.prototype, "btnPlayReal", void 0);
      __decorate([ property(cc.Button) ], Slot10Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "toast", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "panelSetting", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "effectWinCash", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "effectBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "effectJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot10Controller.prototype, "effectBonus", void 0);
      __decorate([ property(Slot10_PopupSelectLine_1.default) ], Slot10Controller.prototype, "popupSelectLine", void 0);
      __decorate([ property(Slot10_PopupBonus_1.default) ], Slot10Controller.prototype, "popupBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundSpinMis", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundEndSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundBg", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot10Controller.prototype, "soundBgBonus", void 0);
      __decorate([ property([ cc.Node ]) ], Slot10Controller.prototype, "arrReel", void 0);
      __decorate([ property ], Slot10Controller.prototype, "distanceReel", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot10Controller.prototype, "iconSpriteFrameBlurArr", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot10Controller.prototype, "iconSpriteFrameArr", void 0);
      __decorate([ property([ Slot10_Item_2.default ]) ], Slot10Controller.prototype, "arrUIItemIcon", void 0);
      __decorate([ property([ Slot10_Item_2.default ]) ], Slot10Controller.prototype, "arrRealItem", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot10Controller.prototype, "arrSkeletonIcon", void 0);
      Slot10Controller = __decorate([ ccclass ], Slot10Controller);
      return Slot10Controller;
    }(cc.Component);
    exports.default = Slot10Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot10.Cmd": "Slot10.Cmd",
    "./Slot10.Item": "Slot10.Item",
    "./Slot10.Lobby": "Slot10.Lobby",
    "./Slot10.PopupBonus": "Slot10.PopupBonus",
    "./Slot10.PopupSelectLine": "Slot10.PopupSelectLine",
    "./Slot10.TrialResults": "Slot10.TrialResults"
  } ],
  "Slot10.TrialResults": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "958e8oLh2pOlJvbSMaWDixF", "Slot10.TrialResults");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot10;
    (function(Slot10) {
      var TrialResults = function() {
        function TrialResults() {}
        TrialResults.results = [ {
          _pos: 111,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 158,
            12: 5,
            13: 0,
            14: 29,
            15: 51,
            16: 44,
            17: 50,
            18: 44,
            19: 49,
            20: 44,
            21: 50,
            22: 44,
            23: 51,
            24: 44,
            25: 51,
            26: 44,
            27: 52,
            28: 44,
            29: 48,
            30: 44,
            31: 51,
            32: 44,
            33: 50,
            34: 44,
            35: 50,
            36: 44,
            37: 53,
            38: 44,
            39: 50,
            40: 44,
            41: 53,
            42: 44,
            43: 48,
            44: 0,
            45: 21,
            46: 53,
            47: 44,
            48: 54,
            49: 44,
            50: 49,
            51: 50,
            52: 44,
            53: 49,
            54: 52,
            55: 44,
            56: 49,
            57: 56,
            58: 44,
            59: 50,
            60: 49,
            61: 44,
            62: 50,
            63: 50,
            64: 44,
            65: 50,
            66: 53,
            67: 0,
            68: 21,
            69: 56,
            70: 44,
            71: 50,
            72: 44,
            73: 49,
            74: 44,
            75: 52,
            76: 44,
            77: 49,
            78: 44,
            79: 49,
            80: 44,
            81: 49,
            82: 44,
            83: 50,
            84: 44,
            85: 49,
            86: 44,
            87: 49,
            88: 44,
            89: 49,
            90: 0,
            91: 0,
            92: 0,
            93: 0,
            94: 0,
            95: 0,
            96: 239,
            97: 116,
            98: 0,
            99: 0,
            100: 0,
            101: 0,
            102: 1,
            103: 9,
            104: 252,
            105: 241
          },
          _length: 106,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904926,
          result: 5,
          matrix: "3,2,1,2,3,3,4,0,3,2,2,5,2,5,0",
          linesWin: "5,6,12,14,18,21,22,25",
          haiSao: "8,2,1,4,1,1,1,2,1,1,1",
          prize: 61300,
          currentMoney: 17431793,
          isFree: false,
          itemsWild: ""
        }, {
          _pos: 114,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 159,
            12: 5,
            13: 0,
            14: 29,
            15: 55,
            16: 44,
            17: 50,
            18: 44,
            19: 50,
            20: 44,
            21: 50,
            22: 44,
            23: 56,
            24: 44,
            25: 55,
            26: 44,
            27: 54,
            28: 44,
            29: 56,
            30: 44,
            31: 56,
            32: 44,
            33: 50,
            34: 44,
            35: 50,
            36: 44,
            37: 51,
            38: 44,
            39: 56,
            40: 44,
            41: 53,
            42: 44,
            43: 50,
            44: 0,
            45: 22,
            46: 50,
            47: 44,
            48: 52,
            49: 44,
            50: 53,
            51: 44,
            52: 54,
            53: 44,
            54: 49,
            55: 50,
            56: 44,
            57: 49,
            58: 57,
            59: 44,
            60: 50,
            61: 49,
            62: 44,
            63: 50,
            64: 50,
            65: 44,
            66: 50,
            67: 53,
            68: 0,
            69: 23,
            70: 56,
            71: 44,
            72: 49,
            73: 44,
            74: 48,
            75: 44,
            76: 49,
            77: 44,
            78: 49,
            79: 44,
            80: 50,
            81: 44,
            82: 49,
            83: 44,
            84: 49,
            85: 44,
            86: 49,
            87: 44,
            88: 49,
            89: 44,
            90: 49,
            91: 44,
            92: 49,
            93: 0,
            94: 0,
            95: 0,
            96: 0,
            97: 0,
            98: 1,
            99: 138,
            100: 136,
            101: 0,
            102: 0,
            103: 0,
            104: 0,
            105: 1,
            106: 11,
            107: 125,
            108: 181
          },
          _length: 109,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904927,
          result: 5,
          matrix: "7,2,2,2,8,7,6,8,8,2,2,3,8,5,2",
          linesWin: "2,4,5,6,12,19,21,22,25",
          haiSao: "8,1,0,1,1,2,1,1,1,1,1,1",
          prize: 101e3,
          currentMoney: 17530293,
          isFree: false,
          itemsWild: ""
        }, {
          _pos: 116,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 160,
            12: 5,
            13: 0,
            14: 29,
            15: 52,
            16: 44,
            17: 50,
            18: 44,
            19: 50,
            20: 44,
            21: 50,
            22: 44,
            23: 53,
            24: 44,
            25: 50,
            26: 44,
            27: 52,
            28: 44,
            29: 55,
            30: 44,
            31: 52,
            32: 44,
            33: 51,
            34: 44,
            35: 51,
            36: 44,
            37: 52,
            38: 44,
            39: 52,
            40: 44,
            41: 54,
            42: 44,
            43: 51,
            44: 0,
            45: 26,
            46: 50,
            47: 44,
            48: 53,
            49: 44,
            50: 54,
            51: 44,
            52: 49,
            53: 50,
            54: 44,
            55: 49,
            56: 52,
            57: 44,
            58: 49,
            59: 53,
            60: 44,
            61: 49,
            62: 55,
            63: 44,
            64: 50,
            65: 48,
            66: 44,
            67: 50,
            68: 49,
            69: 44,
            70: 50,
            71: 50,
            72: 0,
            73: 21,
            74: 52,
            75: 44,
            76: 50,
            77: 44,
            78: 49,
            79: 44,
            80: 49,
            81: 44,
            82: 49,
            83: 44,
            84: 49,
            85: 44,
            86: 49,
            87: 44,
            88: 50,
            89: 44,
            90: 49,
            91: 44,
            92: 49,
            93: 44,
            94: 49,
            95: 0,
            96: 0,
            97: 0,
            98: 0,
            99: 0,
            100: 0,
            101: 116,
            102: 104,
            103: 0,
            104: 0,
            105: 0,
            106: 0,
            107: 1,
            108: 11,
            109: 232,
            110: 89
          },
          _length: 111,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904928,
          result: 5,
          matrix: "4,2,2,2,5,2,4,7,4,3,3,4,4,6,3",
          linesWin: "2,5,6,12,14,15,17,20,21,22",
          haiSao: "4,2,1,1,1,1,1,2,1,1,1",
          prize: 29800,
          currentMoney: 17557593,
          isFree: false,
          itemsWild: ""
        }, {
          _pos: 95,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 161,
            12: 3,
            13: 0,
            14: 29,
            15: 53,
            16: 44,
            17: 48,
            18: 44,
            19: 48,
            20: 44,
            21: 48,
            22: 44,
            23: 55,
            24: 44,
            25: 48,
            26: 44,
            27: 51,
            28: 44,
            29: 52,
            30: 44,
            31: 48,
            32: 44,
            33: 48,
            34: 44,
            35: 53,
            36: 44,
            37: 52,
            38: 44,
            39: 51,
            40: 44,
            41: 55,
            42: 44,
            43: 56,
            44: 0,
            45: 26,
            46: 49,
            47: 44,
            48: 50,
            49: 44,
            50: 54,
            51: 44,
            52: 49,
            53: 48,
            54: 44,
            55: 49,
            56: 49,
            57: 44,
            58: 49,
            59: 54,
            60: 44,
            61: 49,
            62: 55,
            63: 44,
            64: 50,
            65: 49,
            66: 44,
            67: 50,
            68: 50,
            69: 44,
            70: 50,
            71: 51,
            72: 0,
            73: 0,
            74: 0,
            75: 0,
            76: 0,
            77: 0,
            78: 0,
            79: 9,
            80: 67,
            81: 169,
            82: 0,
            83: 0,
            84: 0,
            85: 0,
            86: 1,
            87: 21,
            88: 34,
            89: 62
          },
          _length: 90,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904929,
          result: 3,
          matrix: "5,0,0,0,7,0,3,4,0,0,5,4,3,7,8",
          linesWin: "1,2,6,10,11,16,17,21,22,23",
          haiSao: "",
          prize: 607145,
          currentMoney: 18162238,
          isFree: false,
          itemsWild: ""
        }, {
          _pos: 95,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 161,
            12: 3,
            13: 0,
            14: 29,
            15: 53,
            16: 44,
            17: 48,
            18: 44,
            19: 48,
            20: 44,
            21: 48,
            22: 44,
            23: 55,
            24: 44,
            25: 48,
            26: 44,
            27: 51,
            28: 44,
            29: 52,
            30: 44,
            31: 48,
            32: 44,
            33: 48,
            34: 44,
            35: 53,
            36: 44,
            37: 52,
            38: 44,
            39: 51,
            40: 44,
            41: 55,
            42: 44,
            43: 56,
            44: 0,
            45: 26,
            46: 49,
            47: 44,
            48: 50,
            49: 44,
            50: 54,
            51: 44,
            52: 49,
            53: 48,
            54: 44,
            55: 49,
            56: 49,
            57: 44,
            58: 49,
            59: 54,
            60: 44,
            61: 49,
            62: 55,
            63: 44,
            64: 50,
            65: 49,
            66: 44,
            67: 50,
            68: 50,
            69: 44,
            70: 50,
            71: 51,
            72: 0,
            73: 0,
            74: 0,
            75: 0,
            76: 0,
            77: 0,
            78: 0,
            79: 9,
            80: 67,
            81: 169,
            82: 0,
            83: 0,
            84: 0,
            85: 0,
            86: 1,
            87: 21,
            88: 34,
            89: 62
          },
          _length: 90,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904929,
          result: 3,
          matrix: "5,0,0,0,7,0,3,4,0,0,5,4,3,7,8",
          linesWin: "1,2,6,10,11,16,17,21,22,23",
          haiSao: "",
          prize: 607145,
          currentMoney: 18162238,
          isFree: false,
          itemsWild: ""
        }, {
          _pos: 88,
          _data: {
            0: 1,
            1: 11,
            2: 185,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 120,
            10: 158,
            11: 163,
            12: 3,
            13: 0,
            14: 29,
            15: 50,
            16: 44,
            17: 48,
            18: 44,
            19: 54,
            20: 44,
            21: 51,
            22: 44,
            23: 53,
            24: 44,
            25: 48,
            26: 44,
            27: 51,
            28: 44,
            29: 48,
            30: 44,
            31: 56,
            32: 44,
            33: 48,
            34: 44,
            35: 52,
            36: 44,
            37: 56,
            38: 44,
            39: 53,
            40: 44,
            41: 48,
            42: 44,
            43: 52,
            44: 0,
            45: 19,
            46: 49,
            47: 44,
            48: 54,
            49: 44,
            50: 55,
            51: 44,
            52: 56,
            53: 44,
            54: 49,
            55: 48,
            56: 44,
            57: 49,
            58: 49,
            59: 44,
            60: 50,
            61: 50,
            62: 44,
            63: 50,
            64: 51,
            65: 0,
            66: 0,
            67: 0,
            68: 0,
            69: 0,
            70: 0,
            71: 0,
            72: 7,
            73: 252,
            74: 235,
            75: 0,
            76: 0,
            77: 0,
            78: 0,
            79: 1,
            80: 38,
            81: 33,
            82: 181
          },
          _length: 83,
          _controllerId: 1,
          _cmdId: 3001,
          _error: 0,
          ref: 7904931,
          result: 3,
          matrix: "2,0,6,3,5,0,3,0,8,0,4,8,5,0,4",
          linesWin: "1,6,7,8,10,11,22,23",
          haiSao: "",
          prize: 523499,
          currentMoney: 19276213,
          isFree: false,
          itemsWild: ""
        } ];
        return TrialResults;
      }();
      Slot10.TrialResults = TrialResults;
    })(Slot10 || (Slot10 = {}));
    exports.default = Slot10.TrialResults;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Slot10.Cmd", "Slot10.Item", "Slot10.Lobby", "Slot10.PopupBonus", "Slot10.PopupGuide", "Slot10.PopupHistory", "Slot10.PopupJackpotHistory", "Slot10.PopupSelectLine", "Slot10.Slot10Controller", "Slot10.TrialResults" ]);