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
  "Slot11.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8680v3KVhGyrV+dZ+U9Xz5", "Slot11.Cmd");
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
      var Code = function() {
        function Code() {}
        Code.SUBCRIBE = 16003;
        Code.UNSUBCRIBE = 16004;
        Code.CHANGE_ROOM = 16005;
        Code.PLAY = 16001;
        Code.UPDATE_POT = 16002;
        Code.AUTO = 16006;
        Code.FORCE_STOP_AUTO = 16008;
        Code.DATE_X2 = 16009;
        Code.BIG_WIN = 16010;
        Code.FREE = 16011;
        Code.FREE_DAI_LY = 16012;
        Code.MINIMIZE = 16013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        return Code;
      }();
      cmd.Code = Code;
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
  "Slot11.Item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71b5fgwHuVJHIayhEzHDG+l", "Slot11.Item");
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
    var Slot11ItemSlot = function(_super) {
      __extends(Slot11ItemSlot, _super);
      function Slot11ItemSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.itemAtlast = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
      }
      Slot11ItemSlot.prototype.start = function() {};
      Slot11ItemSlot.prototype.init = function(itemId, index) {
        this.spriteIcon = this.node.getComponentInChildren(cc.Sprite);
        this.spineIcon = this.node.getComponentInChildren(sp.Skeleton);
        var self = this;
        self.itemId = itemId;
        self.spriteIcon.node.active = true;
        this.changeSpineIcon(itemId);
        if (index > 2) {
          this.spineIcon.node.active = false;
          this.spriteIcon.node.active = false;
        }
      };
      Slot11ItemSlot.prototype.changeSpriteBlurByItemId = function(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId + "_blur");
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width, 1.3 * this.spriteIcon.node.height));
      };
      Slot11ItemSlot.prototype.changeSpriteRealByItemId = function(itemId) {
        var self = this;
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        this.spineIcon.node.active = false;
      };
      Slot11ItemSlot.prototype.changeSpineIcon = function(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        if (itemId > 3) this.spineIcon.node.active = false; else {
          itemId = parseInt(itemId);
          switch (itemId) {
           case 0:
            this.animName = "scatter";
            this.spineIcon.node.setPosition(cc.v2(-8.7, -4.6));
            break;

           case 1:
            this.animName = "bonus";
            this.spineIcon.node.setPosition(cc.v2(1.6, 8.7));
            break;

           case 2:
            this.animName = "wild";
            this.spineIcon.node.setPosition(cc.v2(-.45, 4.5));
            break;

           case 3:
            this.animName = "jackpot";
            this.spineIcon.node.setPosition(cc.v2(-9.711, 24));
          }
          this.spineIcon.setAnimation(0, this.animName, true);
          this.spineIcon.node.active = true;
          this.spriteIcon.node.active = false;
        }
      };
      Slot11ItemSlot.prototype.checkShowSpriteOrSpine = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 3) {
          this.spineIcon.node.active = false;
          this.spriteIcon.node.active = true;
          this.spriteIcon.node.color = cc.Color.WHITE;
          cc.tween(this.spriteIcon.node).repeatForever(cc.tween().sequence(cc.tween().to(.25, {
            scale: this.spriteIcon.node.scale + .1
          }, {
            easing: cc.easing.sineOut
          }), cc.tween().to(.25, {
            scale: this.spriteIcon.node.scale
          }, {
            easing: cc.easing.sineOut
          }))).start();
          cc.tween(this.spriteIcon.node).delay(.95).call(function() {
            _this.spriteIcon.node.color = cc.Color.GRAY;
            cc.Tween.stopAllByTarget(_this.spriteIcon.node);
            _this.spriteIcon.node.scale = 1;
          }).start();
        } else {
          this.spineIcon.node.active = true;
          this.spriteIcon.node.active = false;
          this.spineIcon.setAnimation(0, this.animName, true);
          this.spineIcon.node.color = cc.Color.WHITE;
          cc.tween(this.spineIcon.node).delay(.9).call(function() {
            _this.spineIcon.node.color = cc.Color.GRAY;
            _this.spriteIcon.node.active = true;
            _this.spineIcon.node.active = false;
          }).start();
        }
      };
      __decorate([ property(cc.Sprite) ], Slot11ItemSlot.prototype, "spriteIcon", void 0);
      __decorate([ property(sp.Skeleton) ], Slot11ItemSlot.prototype, "spineIcon", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Slot11ItemSlot.prototype, "itemAtlast", void 0);
      Slot11ItemSlot = __decorate([ ccclass ], Slot11ItemSlot);
      return Slot11ItemSlot;
    }(cc.Component);
    exports.default = Slot11ItemSlot;
    cc._RF.pop();
  }, {} ],
  "Slot11.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b516dKgl6tFWbenab3JZqAh", "Slot11.Lobby");
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
    var Slot11_Cmd_1 = require("./Slot11.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot11Lobby = function(_super) {
      __extends(Slot11Lobby, _super);
      function Slot11Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.mSlotController = null;
        return _this;
      }
      Slot11Lobby.prototype.init = function(pSlot11Controller) {
        this.mSlotController = pSlot11Controller;
        this.node.zIndex = 2;
      };
      Slot11Lobby.prototype.onBtnBack = function() {
        1 == this.mSlotController.soundSlotState && cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot11Lobby.prototype.onBtn100 = function() {
        this.mSlotController.betIdx = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot11Lobby.prototype.onBtn5k = function() {
        this.mSlotController.betIdx = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot11Lobby.prototype.omBtn10k = function() {
        this.mSlotController.betIdx = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot11Lobby.prototype.onUpdateJackpot = function(pData) {
        var res = new Slot11_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["benley"]["100"].p, 3);
        Tween_1.default.numberTo(this.listPot[1], resJson["benley"]["1000"].p, 3);
        Tween_1.default.numberTo(this.listPot[2], resJson["benley"]["10000"].p, 3);
      };
      __decorate([ property([ cc.Label ]) ], Slot11Lobby.prototype, "listPot", void 0);
      Slot11Lobby = __decorate([ ccclass ], Slot11Lobby);
      return Slot11Lobby;
    }(cc.Component);
    exports.default = Slot11Lobby;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot11.Cmd": "Slot11.Cmd"
  } ],
  "Slot11.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a231iAio1APLc50xrjRaEa", "Slot11.PopupBonus");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupBonus = function(_super) {
      __extends(PopupBonus, _super);
      function PopupBonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeGame1 = null;
        _this.nodeGame2 = null;
        _this.nodeNotify = null;
        _this.items = null;
        _this.itemSpecial = null;
        _this.nodeBoxNotify = null;
        _this.txtNotify = null;
        _this.lblLeft = null;
        _this.lblFactor = null;
        _this.lblHeso = null;
        _this.lblWin = null;
        _this.itemTemplate = null;
        _this.itemContainer = null;
        _this.sprItemBg = [];
        _this.sprItemBg2 = [];
        _this.factor = 1;
        _this.left = 0;
        _this.betValue = 0;
        _this.onFinished = null;
        _this.onSpecialFinished = null;
        _this.dataBonus = [];
        _this.dataSpecial = -1;
        _this.heso = 0;
        _this.win = 0;
        _this.listFactor = [];
        _this.controller = null;
        _this.isChooseFactor = false;
        return _this;
      }
      PopupBonus.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["label"] = node.getChildByName("label").getComponent(cc.Label);
          node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
          node["btn"].node.active = true;
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                node["ske"].spriteFrame = _this.sprItemBg[1];
                break;

               case 1:
                node["ske"].spriteFrame = _this.sprItemBg[0];
                node["lbShadow"].active = true;
                node["btn"].node.active = false;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["ske"].spriteFrame = _this.sprItemBg[0];
                node["lbShadow"].active = true;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["ske"].spriteFrame = _this.sprItemBg[0];
                node["lbShadow"].active = true;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["ske"].spriteFrame = _this.sprItemBg[0];
                node["lbShadow"].active = true;
                node["label"].node.active = true;
                node["label"].string = "0";
                _this.win += 20 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, .3);
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
              }
              _this.left--;
              _this.lblLeft.string = "\u1021\u101c\u103e\u100a\u1037\u103a: " + _this.left;
              _this.left <= 0 && _this.showResult();
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.childrenCount; i++) _loop_1(i);
      };
      PopupBonus.prototype.initItem = function() {
        if (this.items.childrenCount < 15) for (var i = 0; i < 14; i++) {
          var item = cc.instantiate(this.itemTemplate);
          item.parent = this.itemContainer;
        }
      };
      PopupBonus.prototype.showBonus = function(betValue, bonus, controller, onFinished, numberIcon) {
        this.node.active = true;
        this.nodeGame2.active = true;
        this.nodeGame2.scale = 1;
        this.nodeGame2.opacity = 255;
        this.nodeGame1.active = false;
        this.nodeBoxNotify.active = false;
        this.isChooseFactor = false;
        this.initItem();
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, .3);
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["label"] = node.getChildByName("label").getComponent(cc.Label);
          node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
          node["ske"].spriteFrame = this.sprItemBg[2];
          node["lbShadow"] = node.getChildByName("shadow_win");
          node["lbShadow"].active = false;
          node["btn"].node.active = true;
          node["label"].node.active = false;
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
        this.lblLeft.string = "\u1021\u101c\u103e\u100a\u1037\u103a: " + this.left;
        this.heso = this.dataBonus[0];
        this.lblHeso.string = "\u1000\u102d\u1014\u103a\u1038\u1002\u100f\u1014\u103a\u1038:x" + this.heso;
        switch (numberIcon) {
         case 3:
          this.listFactor = [ 1, 2, 3 ];
          break;

         case 4:
          this.listFactor = [ 2, 3, 4 ];
          break;

         case 5:
          this.listFactor = [ 3, 4, 5 ];
        }
        this.listFactor.sort(function() {
          return Math.random() - .5;
        });
        for (var i = 0; i < this.itemSpecial.childrenCount; i++) {
          var itemSpec = this.itemSpecial.children[i];
          itemSpec["is_open"] = false;
          itemSpec.scale = 1;
          itemSpec["sprFactor"] = itemSpec.getChildByName("sprFactor").getComponent(cc.Sprite);
          itemSpec["bg"] = itemSpec.getChildByName("ske").getComponent(cc.Sprite);
          itemSpec["bg"].spriteFrame = this.sprItemBg2[0];
          itemSpec["sprFactor"].node.active = false;
          itemSpec["sprFactor"].node.color = cc.Color.WHITE;
        }
        cc.tween(this.node).set({
          y: cc.winSize.height
        }).to(.5, {
          y: 0
        }, {
          easing: cc.easing.sineIn
        }).start();
      };
      PopupBonus.prototype.onClickFactor = function(even, data) {
        var _this = this;
        var btn = even.target;
        var itemParent = btn.parent;
        if (this.isChooseFactor) return;
        this.isChooseFactor = true;
        var cb1 = function() {
          itemParent["is_open"] = true;
          itemParent["sprFactor"].spriteFrame = _this.sprItemBg2[_this.heso];
          itemParent["bg"].spriteFrame = _this.sprItemBg2[6];
          itemParent["sprFactor"].node.active = true;
          for (var i = 0; i < 3; i++) if (_this.heso == _this.listFactor[i]) {
            _this.listFactor.splice(i, 1);
            break;
          }
        };
        this.effOpenGift(itemParent, cb1, 1.2);
        this.scheduleOnce(function() {
          var count = 0;
          var _loop_2 = function(i) {
            var itemSpec = _this.itemSpecial.children[i];
            if (!itemSpec["is_open"]) {
              var cb = function() {
                itemSpec["bg"].spriteFrame = _this.sprItemBg2[6];
                itemSpec["sprFactor"].spriteFrame = _this.sprItemBg2[_this.listFactor[count]];
                itemSpec["sprFactor"].node.active = true;
                itemSpec["sprFactor"].node.color = cc.Color.GRAY;
                count++;
              };
              _this.effOpenGift(itemSpec, cb);
            }
          };
          for (var i = 0; i < _this.itemSpecial.childrenCount; i++) _loop_2(i);
        }, 1);
        this.scheduleOnce(function() {
          cc.tween(_this.nodeGame2).to(.3, {
            scale: .8,
            opacity: 150
          }, {
            easing: cc.easing.backIn
          }).call(function() {
            _this.nodeGame2.active = false;
            _this.nodeGame1.active = true;
          }).start();
        }, 4);
      };
      PopupBonus.prototype.effOpenGift = function(item, cb, scale) {
        void 0 === scale && (scale = 1);
        cc.tween(item).to(.5, {
          scale: .9
        }).to(.5, {
          scale: scale
        }, {
          easing: cc.easing.backOut
        }).start();
        cc.tween(item).delay(.65).call(function() {
          cb();
        }).start();
      };
      PopupBonus.prototype.showResult = function() {
        var _this = this;
        var lbWin = this.nodeBoxNotify.getChildByName("lbResult").getComponent(cc.Label);
        lbWin.string = this.heso + " x " + Utils_1.default.formatNumber(this.win) + " = " + Utils_1.default.formatNumber(this.win * this.heso);
        this.nodeBoxNotify.active = true;
        cc.tween(this.nodeBoxNotify).set({
          scale: .8,
          opacity: 150
        }).to(.3, {
          scale: 1,
          opacity: 255
        }, {
          easing: cc.easing.backOut
        }).delay(3).call(function() {
          _this.hidden();
        }).start();
      };
      PopupBonus.prototype.hidden = function() {
        var _this = this;
        cc.tween(this.node).to(.3, {
          y: cc.winSize.height
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.node.active = false;
          _this.onFinished();
        }).start();
      };
      PopupBonus.prototype.onBtnExit = function() {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function() {
          _this.onFinished();
        }, 1.5);
      };
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeGame1", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeGame2", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeNotify", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "items", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "itemSpecial", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeBoxNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "txtNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblLeft", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblFactor", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblHeso", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblWin", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "itemContainer", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupBonus.prototype, "sprItemBg", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupBonus.prototype, "sprItemBg2", void 0);
      PopupBonus = __decorate([ ccclass ], PopupBonus);
      return PopupBonus;
    }(cc.Component);
    exports.PopupBonus = PopupBonus;
    exports.default = PopupBonus;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Slot11.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c67295LtrhLEIKgSY9BzJ5Q", "Slot11.PopupGuide");
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
  "Slot11.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2aa1MDcBBHCoL4hq85ZBaH", "Slot11.PopupHistory");
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
          gn: "BIKINI"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 8; i++) {
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
  "Slot11.PopupJackpotHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a16bQ6bU5Fb5pohe99MRyb", "Slot11.PopupJackpotHistory");
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
          gn: "BIKINI"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 8; i++) {
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
              item.getChildByName("Type").getComponent(cc.Label).string = 3 == itemData["rs"] ? "\u101b\u1010\u1014\u102c\u1019\u103b\u102c\u1038\u1021\u1014\u102d\u102f\u1004\u103a\u101b" : "\u1000\u103c\u102e\u1038\u1019\u102c\u1038\u1010\u1032\u1037\u1021\u1014\u102d\u102f\u1004\u103a\u101b";
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
  "Slot11.PopupSelectLine": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b45c7U5f9dMCYD8yrGhpR+8", "Slot11.PopupSelectLine");
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
  "Slot11.Slot11Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aad0rE74xJoLKq04SaGFaH", "Slot11.Slot11Controller");
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
    var Slot11_Cmd_1 = require("./Slot11.Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot11_PopupSelectLine_1 = require("./Slot11.PopupSelectLine");
    var Slot11_PopupBonus_1 = require("./Slot11.PopupBonus");
    var Slot11_TrialResults_1 = require("./Slot11.TrialResults");
    var Slot11_Lobby_1 = require("./Slot11.Lobby");
    var Slot11_Item_1 = require("./Slot11.Item");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var BundleControl_1 = require("../../Loading/src/BundleControl");
    var Slot11_PopupGuide_1 = require("./Slot11.PopupGuide");
    var Slot11_PopupJackpotHistory_1 = require("./Slot11.PopupJackpotHistory");
    var Slot11_PopupHistory_1 = require("./Slot11.PopupHistory");
    var TYPE_WIN;
    (function(TYPE_WIN) {
      TYPE_WIN[TYPE_WIN["MISS"] = 0] = "MISS";
      TYPE_WIN[TYPE_WIN["WIN"] = 1] = "WIN";
      TYPE_WIN[TYPE_WIN["BIGWIN"] = 2] = "BIGWIN";
      TYPE_WIN[TYPE_WIN["JACKPOT"] = 3] = "JACKPOT";
      TYPE_WIN[TYPE_WIN["SUPERWIN"] = 4] = "SUPERWIN";
      TYPE_WIN[TYPE_WIN["BONUS"] = 5] = "BONUS";
    })(TYPE_WIN || (TYPE_WIN = {}));
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot11Controller = function(_super) {
      __extends(Slot11Controller, _super);
      function Slot11Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.popupContainer = null;
        _this.mSlotLobby = null;
        _this.preItem = null;
        _this.mHeightItem = 170;
        _this.mWidthItem = 170;
        _this.skeSpin = null;
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
        _this.particleJackpt = null;
        _this.particleBonus = null;
        _this.particleBigWin = null;
        _this.particleEffFree = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
        _this.soundReelStop = null;
        _this.soundBg = null;
        _this.currentNumberFreeSpin = 0;
        _this.daiLyFreeSpin = 0;
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
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
        _this.popupGuide = null;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mIsTrial = false;
        _this.effectSound_Spin = 0;
        _this.mutipleJpNode = null;
        return _this;
      }
      Slot11Controller.prototype.start = function() {
        var _this = this;
        this.soundInit();
        this.currentNumberFreeSpin = 0;
        for (var i = 0; i < this.reels.childrenCount; i++) {
          var reel = this.reels.children[i];
          var count = this.rollStartItemCount + i * this.rollAddItemCount;
          for (var j = 0; j < count; j++) {
            var itemNode = cc.instantiate(this.preItem);
            itemNode.height = this.mHeightItem;
            itemNode.width = this.mWidthItem;
            var item = itemNode.getComponent(Slot11_Item_1.default);
            itemNode.parent = reel;
            var id = Utils_1.default.randomRangeInt(0, 10);
            item.init(id, j);
          }
        }
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.mSlotLobby.onBtnBack();
        }, this);
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot11_Cmd_1.default.Code.FREE_DAI_LY:
            if (!_this.mIsTrial) {
              var res_1 = new Slot11_Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.daiLyFreeSpin = res_1.freeSpin;
            }
            break;

           case Slot11_Cmd_1.default.Code.DATE_X2:
            var res_2 = new Slot11_Cmd_1.default.ReceiveDateX2(data);
            _this.currentNumberFreeSpin = res_2.freeSpin + _this.daiLyFreeSpin;
            if (_this.currentNumberFreeSpin > 0) {
              _this.lblFreeSpinCount.node.parent.active = true;
              _this.lblFreeSpinCount.string = _this.currentNumberFreeSpin + "";
            } else _this.lblFreeSpinCount.node.parent.active = false;
            break;

           case Slot11_Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot11_Cmd_1.default.ReceiveUpdatePot(data);
            Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, .3);
            break;

           case Slot11_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            _this.mSlotLobby.onUpdateJackpot(data);
            break;

           case Slot11_Cmd_1.default.Code.PLAY:
            var res_3 = new Slot11_Cmd_1.default.ReceivePlay(data);
            _this.onSpinResult(res_3);
          }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot11_Cmd_1.default.ReqSubcribeHallSlot());
        this.stopShowLinesWin();
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.panelSetting.active = false;
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
      Slot11Controller.prototype.initMutipleJPNode = function() {
        var _this = this;
        this.mutipleJpNode || cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          if (null != err1) ; else {
            _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
            _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
            _this.mutipleJpNode.setInfo("BITCOIN");
          }
        });
      };
      Slot11Controller.prototype.showCoins = function(prize) {
        var number = prize / 2e4;
        number <= 10 ? number = 10 : number >= 30 && (number = 30);
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
      };
      Slot11Controller.prototype.onJoinRoom = function() {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = this.arrLineSelect.length * this.listBet[this.betIdx];
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, .3);
        this.skeSpin.animation = "xoay";
        this.skeSpin.loop = true;
      };
      Slot11Controller.prototype.showToast = function(msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
          _this.toast.active = false;
        })));
      };
      Slot11Controller.prototype.moneyToK = function(money) {
        return money.toString();
      };
      Slot11Controller.prototype.setEnabledAllButtons = function(enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = enabled;
        this.btnPlayReal.interactable = enabled;
        this.btnSpin.getComponentInChildren(cc.Sprite).node.active = !enabled;
      };
      Slot11Controller.prototype.stopAllEffects = function() {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
      };
      Slot11Controller.prototype.stopShowLinesWin = function() {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) this.linesWin.children[i].active = false;
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) this.iconWildColumns.children[i].active = false;
        this.stopAllItemEffect();
      };
      Slot11Controller.prototype.stopAllItemEffect = function() {
        for (var i = 0; i < this.reels.childrenCount; i++) for (var i_1 = 0; i_1 < this.reels.childrenCount; i_1++) {
          var children = this.reels.children[i_1].children;
          for (var j = 0; j < children.length; j++) {
            cc.Tween.stopAllByTarget(children[j]);
            children[j].scale = .67;
          }
        }
      };
      Slot11Controller.prototype.spin = function() {
        if (!this.isSpined) return;
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.isSpined = false;
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          this.btnSpin.node.getComponentInChildren(cc.Sprite).node.active = true;
          var rIdx = Utils_1.default.randomRangeInt(0, Slot11_TrialResults_1.default.results.length);
          this.onSpinResult(Slot11_TrialResults_1.default.results[rIdx]);
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
          this.changeAllItemToDark(false);
          this.stopAllEffects();
          this.stopShowLinesWin();
          this.setEnabledAllButtons(false);
          this.btnSpin.node.getComponentInChildren(cc.Sprite).node.active = true;
          SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
      };
      Slot11Controller.prototype.stopSpin = function() {
        for (var i = 0; i < this.reels.childrenCount; i++) {
          var roll = this.reels.children[i];
          roll.stopAllActions();
          roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
      };
      Slot11Controller.prototype.showLineWins = function() {
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
          this.linesWin.setSiblingIndex(1);
          this.reels.parent.setSiblingIndex(0);
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
                _this.linesWin.setSiblingIndex(0);
                _this.reels.parent.setSiblingIndex(1);
                line.active = true;
                var mLine = _this.mapLine[lineIdx];
                var countItemWin = 0;
                var fisrtItemId = parseInt(matrix[mLine[0]]);
                for (var j = 0; j < mLine.length; j++) {
                  var itemId = parseInt(matrix[mLine[j]]);
                  if (!(fisrtItemId == itemId || itemId == _this.wildItemId && fisrtItemId > 3 || _this.columnsWild.indexOf(j) >= 0)) break;
                  countItemWin++;
                }
                for (var j = 0; j < countItemWin; j++) {
                  var itemRow = parseInt((mLine[j] / 5).toString());
                  var item = rolls[j].children[2 - itemRow].getComponent(Slot11_Item_1.default);
                  item.node.stopAllActions();
                  item.checkShowSpriteOrSpine();
                }
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
      Slot11Controller.prototype.showWinCash = function(cash) {
        var _this = this;
        this.effectWinCash.stopAllActions();
        this.effectWinCash.active = true;
        var label = this.effectWinCash.getComponentInChildren(cc.Label);
        label.string = "0";
        this.effectWinCash.opacity = 0;
        this.showCoins(cash);
        this.effectWinCash.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
          Tween_1.default.numberTo(label, cash, .5);
        }), cc.delayTime(1.5), cc.fadeOut(.3), cc.callFunc(function() {
          _this.effectWinCash.active = false;
        })));
      };
      Slot11Controller.prototype.showEffectBigWin = function(cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "thanglon", true);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        var partical = this.effectBigWin.getComponentInChildren(cc.ParticleSystem);
        partical.node.active = true;
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function() {
          partical.resetSystem();
          _this.effectBigWin.active = false;
          null != cb && cb();
        })));
      };
      Slot11Controller.prototype.showEffectFreeSpin = function(cb) {
        var _this = this;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        this.effectFreeSpin.getComponentInChildren(sp.Skeleton).setAnimation(0, "freespin", true);
        this.particleEffFree.node.active = true;
        this.effectFreeSpin.runAction(cc.sequence(cc.delayTime(1), cc.delayTime(3), cc.callFunc(function() {
          _this.particleEffFree.resetSystem();
          _this.particleEffFree.node.active = false;
          _this.effectFreeSpin.active = false;
          null != cb && cb();
        })));
      };
      Slot11Controller.prototype.showEffectJackpot = function(cash, cb) {
        var _this = this;
        void 0 === cb && (cb = null);
        var animName = [ "animation7" ];
        var index = parseInt(Math.random() + "");
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, animName[index], false);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
          _this.particleJackpt.resetSystem();
        }), cc.callFunc(function() {
          label.string = "";
          label.node.active = true;
          Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(5), cc.callFunc(function() {
          _this.effectJackpot.active = false;
          null != cb && cb();
        })));
      };
      Slot11Controller.prototype.showEffectBonus = function(cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "bounus", true);
        this.particleBonus.node.active = true;
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
          _this.particleBonus.resetSystem();
          _this.particleBonus.node.active = false;
          _this.effectBonus.active = false;
          null != cb && cb();
        })));
      };
      Slot11Controller.prototype.onSpinResult = function(res) {
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
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            break;

           default:
            this.showToast(App_1.default.instance.getTextLang("txt_unknown_error1"));
          }
          return;
        }
        this.changeAllItemToDark(false);
        this.currentNumberFreeSpin = res.currentNumberFreeSpin;
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        var isTrail = this.mIsTrial;
        isTrail || this.lastSpinRes.isFree || (Configs_1.default.Login.Coin = res.currentMoney);
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? .5 : 1;
        1 == this.soundSlotState && (this.effectSound_Spin = cc.audioEngine.play(this.soundSpin, false, 1));
        var _loop_2 = function(i) {
          var roll = this_1.reels.children[i];
          var step1Pos = .3 * this_1.mHeightItem;
          var step2Pos = -this_1.mHeightItem * roll.childrenCount + 3 * this_1.mHeightItem - .3 * this_1.mHeightItem;
          var step3Pos = -this_1.mHeightItem * roll.childrenCount + 3 * this_1.mHeightItem;
          roll.runAction(cc.sequence(cc.delayTime(.2 * i * timeScale), cc.moveTo(.2 * timeScale, cc.v2(roll.position.x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_1.spinDuration + this_1.addSpinDuration * i) * timeScale, cc.v2(roll.position.x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.callFunc(function() {
            if (1 == _this.soundSlotState) {
              cc.audioEngine.play(_this.soundReelStop, false, 1);
              4 == i && cc.audioEngine.stop(_this.effectSound_Spin);
            }
          }), cc.moveTo(.2 * timeScale, cc.v2(roll.position.x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function() {
            roll.setPosition(cc.v2(roll.position.x, 0));
            if (4 == i) {
              for (var j = 0; j < matrix.length; j++) if (parseInt(matrix[j]) == _this.wildItemId) {
                var c = j % 5;
                -1 == _this.columnsWild.indexOf(c) && _this.columnsWild.push(c);
              }
              for (var j = 0; j < _this.columnsWild.length; j++) {
                var c = _this.columnsWild[j];
                _this.iconWildColumns.children[c].active = true;
                var children = _this.reels.children[c].children;
                children[2].getComponent(Slot11_Item_1.default).changeSpineIcon(_this.wildItemId);
                children[1].getComponent(Slot11_Item_1.default).changeSpineIcon(_this.wildItemId);
                children[0].getComponent(Slot11_Item_1.default).changeSpineIcon(_this.wildItemId);
              }
              _this.columnsWild.length > 0 ? roll.runAction(cc.sequence(cc.delayTime(2.6), cc.callFunc(function() {
                for (var i_2 = 0; i_2 < _this.iconWildColumns.childrenCount; i_2++) _this.iconWildColumns.children[i_2].active = false;
              }), cc.delayTime(.1), cc.callFunc(function() {
                _this.spined();
              }))) : _this.spined();
            }
          })));
          TW(roll).delay(.2 * i * timeScale + .4 * timeScale).call(function() {
            for (var m = 0; m < roll.childrenCount; m++) {
              var item = roll.children[m].getComponent(Slot11_Item_1.default);
              item.changeSpriteBlurByItemId(item.itemId);
            }
          }).start();
          TW(roll).delay((.47 + .2 * i) * timeScale).call(function() {
            var listItemNode = roll.children;
            listItemNode[2].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[i]));
            listItemNode[1].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[5 + i]));
            listItemNode[0].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[10 + i]));
            listItemNode[listItemNode.length - 1].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[i]));
            listItemNode[listItemNode.length - 2].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[5 + i]));
            listItemNode[listItemNode.length - 3].getComponent(Slot11_Item_1.default).changeSpineIcon(parseInt(matrix[10 + i]));
            for (var m = 0; m < roll.childrenCount; m++) {
              var item = roll.children[m].getComponent(Slot11_Item_1.default);
              item.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
            }
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.reels.childrenCount; i++) _loop_2(i);
      };
      Slot11Controller.prototype.spined = function() {
        var _this = this;
        this.skeSpin.animation = "xoay";
        this.currentNumberFreeSpin = this.lastSpinRes.currentNumberFreeSpin;
        if (this.lastSpinRes.currentNumberFreeSpin > 0) {
          this.lblFreeSpinCount.node.parent.active = true;
          this.lblFreeSpinCount.string = this.currentNumberFreeSpin + "";
        } else this.lblFreeSpinCount.node.parent.active = false;
        if (1 == this.lastSpinRes.freeSpin) this.showEffectFreeSpin(function() {
          _this.showLineWins();
        }); else {
          var successResult = [ 0, 1, 3, 5, 6 ];
          switch (this.lastSpinRes.result) {
           case TYPE_WIN.MISS:
            1 == this.soundSlotState && cc.audioEngine.play(this.soundSpinMis, false, 1);
            this.showLineWins();
            break;

           case TYPE_WIN.WIN:
            1 == this.soundSlotState && (this.lastSpinRes.prize > 0 ? cc.audioEngine.play(this.soundSpinWin, false, 1) : cc.audioEngine.play(this.soundSpinMis, false, 1));
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
              var linesWin = _this.lastSpinRes.linesWin.split(",");
              linesWin = Utils_1.default.removeDups(linesWin);
              for (var i = 0; i < linesWin.length; i++) if ("0" == linesWin[i]) {
                linesWin.splice(i, 1);
                i--;
              }
              var matrix = _this.lastSpinRes.matrix.split(",");
              var countItem = 0;
              for (var i = 0; i < linesWin.length; i++) {
                var countItemBonus = 0;
                var lineIdx = parseInt(linesWin[i]) - 1;
                var mLine = _this.mapLine[lineIdx];
                for (var j = 0; j < mLine.length; j++) {
                  var itemId = matrix[mLine[j]];
                  if ("1" != itemId) {
                    countItemBonus > countItem && (countItem = countItemBonus);
                    break;
                  }
                  countItemBonus++;
                }
              }
              _this.actShowBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, function() {
                _this.showLineWins();
              }, countItem);
            });
          }
        }
      };
      Slot11Controller.prototype.onBtnSoundTouchBonus = function() {};
      Slot11Controller.prototype.onBtnSoundSumary = function() {};
      Slot11Controller.prototype.actBack = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendUnSubcribe(this.betIdx));
        this.mSlotLobby.node.active = true;
      };
      Slot11Controller.prototype.actChangeRoom = function() {
        if (!this.isSpined) return;
        this.actBack();
      };
      Slot11Controller.prototype.actHidden = function() {
        this.showToast(App_1.default.instance.getTextLang("txt_function_in_development"));
      };
      Slot11Controller.prototype.actBetUp = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx < this.listBet.length - 1) {
          this.daiLyFreeSpin = 0;
          this.lblFreeSpinCount.node.parent.active = false;
          SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot11Controller.prototype.actBetDown = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        if (this.betIdx > 0) {
          this.daiLyFreeSpin = 0;
          this.lblFreeSpinCount.node.parent.active = false;
          SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
          this.lblBet.string = this.listBetLabel[this.betIdx];
          Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], .3, function(n) {
            return _this.moneyToK(n);
          });
        }
      };
      Slot11Controller.prototype.actLine = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        var isTrail = this.mIsTrial;
        if (isTrail) {
          this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        this.popupSelectLine.show();
      };
      Slot11Controller.prototype.actSetting = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.panelSetting.active = !this.panelSetting.active;
      };
      Slot11Controller.prototype.toggleTrialOnCheck = function() {
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
      Slot11Controller.prototype.toggleAutoOnCheck = function() {
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
      Slot11Controller.prototype.toggleBoostOnCheck = function() {
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
      Slot11Controller.prototype.soundInit = function() {
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
      Slot11Controller.prototype.settingMusic = function() {
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
      Slot11Controller.prototype.settingSound = function() {
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        this.toggleSound.isChecked ? this.soundSlotState = 1 : this.soundSlotState = 0;
        cc.sys.localStorage.setItem("music_Slot_7", "" + this.soundSlotState);
      };
      Slot11Controller.prototype.changeAllItemToDark = function(state) {
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
            if (!state) {
              cc.Tween.stopAllByTarget(sprite.node);
              sprite.node.scale = 1;
              cc.Tween.stopAllByTarget(spine.node);
            }
          }
        }
      };
      Slot11Controller.prototype.actSelectline = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.mIsTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupSelectLine ? BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupSelectLine", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupSelectLine = cc.instantiate(prefab).getComponent(Slot11_PopupSelectLine_1.default);
          _this.popupSelectLine.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupSelectLine.show();
          _this.popupSelectLine.onSelectedChanged = function(lines) {
            _this.arrLineSelect = lines;
            _this.lblLine.string = _this.arrLineSelect.length.toString();
            Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], .3, function(n) {
              return _this.moneyToK(n);
            });
          };
        }) : this.popupSelectLine.show();
      };
      Slot11Controller.prototype.actGuide = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.mIsTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupGuide ? BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupGuide", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupGuide = cc.instantiate(prefab).getComponent(Slot11_PopupGuide_1.default);
          _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupGuide.show();
        }) : this.popupGuide.show();
      };
      Slot11Controller.prototype.actHonor = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.mIsTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupHonor ? BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupJackpotHistory", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHonor = cc.instantiate(prefab).getComponent(Slot11_PopupJackpotHistory_1.default);
          _this.popupHonor.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupHonor.show();
        }) : this.popupHonor.show();
      };
      Slot11Controller.prototype.actHistory = function() {
        var _this = this;
        1 == this.soundSlotState && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.mIsTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupHistory ? BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupHistory", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHistory = cc.instantiate(prefab).getComponent(Slot11_PopupHistory_1.default);
          _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupHistory.show();
        }) : this.popupHistory.show();
      };
      Slot11Controller.prototype.actShowBonus = function(isTrial, dataHaiSao, cb, numberIcon) {
        var _this = this;
        null == this.popupBonus ? BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupBonus", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupBonus = cc.instantiate(prefab).getComponent(Slot11_PopupBonus_1.default);
          _this.popupBonus.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb, numberIcon);
        }) : this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb, numberIcon);
      };
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "popupContainer", void 0);
      __decorate([ property(Slot11_Lobby_1.default) ], Slot11Controller.prototype, "mSlotLobby", void 0);
      __decorate([ property(cc.Prefab) ], Slot11Controller.prototype, "preItem", void 0);
      __decorate([ property(cc.Integer) ], Slot11Controller.prototype, "mHeightItem", void 0);
      __decorate([ property(cc.Integer) ], Slot11Controller.prototype, "mWidthItem", void 0);
      __decorate([ property(sp.Skeleton) ], Slot11Controller.prototype, "skeSpin", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "reels", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "linesWin", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "iconWildColumns", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblBet", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblLine", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblTotalBet", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblWinNow", void 0);
      __decorate([ property(cc.Label) ], Slot11Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Toggle) ], Slot11Controller.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Toggle) ], Slot11Controller.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Toggle) ], Slot11Controller.prototype, "togglgeMusic", void 0);
      __decorate([ property(cc.Toggle) ], Slot11Controller.prototype, "toggleBoost", void 0);
      __decorate([ property(cc.Button) ], Slot11Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], Slot11Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Button) ], Slot11Controller.prototype, "btnPlayTry", void 0);
      __decorate([ property(cc.Button) ], Slot11Controller.prototype, "btnPlayReal", void 0);
      __decorate([ property(cc.Button) ], Slot11Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "toast", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "panelSetting", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "effectWinCash", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "effectBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "effectJackpot", void 0);
      __decorate([ property(cc.ParticleSystem) ], Slot11Controller.prototype, "particleJackpt", void 0);
      __decorate([ property(cc.ParticleSystem) ], Slot11Controller.prototype, "particleBonus", void 0);
      __decorate([ property(cc.ParticleSystem) ], Slot11Controller.prototype, "particleBigWin", void 0);
      __decorate([ property(cc.ParticleSystem) ], Slot11Controller.prototype, "particleEffFree", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "effectBonus", void 0);
      __decorate([ property(cc.Node) ], Slot11Controller.prototype, "effectFreeSpin", void 0);
      __decorate([ property(Slot11_PopupSelectLine_1.default) ], Slot11Controller.prototype, "popupSelectLine", void 0);
      __decorate([ property(Slot11_PopupBonus_1.default) ], Slot11Controller.prototype, "popupBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundSpinMis", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundReelStop", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot11Controller.prototype, "soundBg", void 0);
      Slot11Controller = __decorate([ ccclass ], Slot11Controller);
      return Slot11Controller;
    }(cc.Component);
    exports.default = Slot11Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/BundleControl": void 0,
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot11.Cmd": "Slot11.Cmd",
    "./Slot11.Item": "Slot11.Item",
    "./Slot11.Lobby": "Slot11.Lobby",
    "./Slot11.PopupBonus": "Slot11.PopupBonus",
    "./Slot11.PopupGuide": "Slot11.PopupGuide",
    "./Slot11.PopupHistory": "Slot11.PopupHistory",
    "./Slot11.PopupJackpotHistory": "Slot11.PopupJackpotHistory",
    "./Slot11.PopupSelectLine": "Slot11.PopupSelectLine",
    "./Slot11.TrialResults": "Slot11.TrialResults"
  } ],
  "Slot11.TrialResults": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e749GfY01Lp7x1AF0mLm0/", "Slot11.TrialResults");
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
}, {}, [ "Slot11.Cmd", "Slot11.Item", "Slot11.Lobby", "Slot11.PopupBonus", "Slot11.PopupGuide", "Slot11.PopupHistory", "Slot11.PopupJackpotHistory", "Slot11.PopupSelectLine", "Slot11.Slot11Controller", "Slot11.TrialResults" ]);