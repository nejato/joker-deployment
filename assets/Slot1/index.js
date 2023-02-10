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
  "Slot1.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4eaffRLSRIjqGSu+H4038X", "Slot1.Cmd");
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
        Code.SUBCRIBE = 2003;
        Code.UNSUBCRIBE = 2004;
        Code.CHANGE_ROOM = 2005;
        Code.PLAY = 2001;
        Code.UPDATE_RESULT = 2001;
        Code.UPDATE_POT = 2002;
        Code.AUTO = 2006;
        Code.STOP_AUTO = 2006;
        Code.FORCE_STOP_AUTO = 2008;
        Code.DATE_X2 = 2009;
        Code.BIG_WIN = 2010;
        Code.FREE = 2011;
        Code.FREE_DAI_LY = 2012;
        Code.MINIMIZE = 2013;
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
      var SendPlay = function(_super) {
        __extends(SendPlay, _super);
        function SendPlay(betValue, lines) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.PLAY);
          _this.packHeader();
          _this.putInt(betValue);
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
          _this.valueRoom4 = 0;
          _this.x21 = 0;
          _this.x22 = 0;
          _this.valueRoom1 = _this.getLong();
          _this.valueRoom2 = _this.getLong();
          _this.valueRoom3 = _this.getLong();
          _this.valueRoom4 = _this.getLong();
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
          _this.ref = _this.getLong();
          _this.result = _this.getByte();
          _this.matrix = _this.getString();
          _this.linesWin = _this.getString();
          _this.haiSao = _this.getString();
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
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
  "Slot1.ItemSlot": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb5a8TeZuBJkZnRG70lpwdr", "Slot1.ItemSlot");
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
    var Slot1ItemSlot = function(_super) {
      __extends(Slot1ItemSlot, _super);
      function Slot1ItemSlot() {
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
      Slot1ItemSlot.prototype.onLoad = function() {
        this.spriteIcon = cc.find("Box/sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/spine", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
      };
      Slot1ItemSlot.prototype.init = function(itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        this.spineIcon.node.scale = .65;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.5, this.spriteIcon.node.height / 1.5));
        self.spineIcon.node.active = false;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
      };
      Slot1ItemSlot.prototype.changeSpriteBlurByItemId = function(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("blur_" + itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.4, this.spriteIcon.node.height / 1.4));
      };
      Slot1ItemSlot.prototype.changeSpriteRealByItemId = function(itemId) {
        var self = this;
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.4, this.spriteIcon.node.height / 1.4));
      };
      Slot1ItemSlot.prototype.changeSpineIcon = function(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.4, this.spriteIcon.node.height / 1.4));
        if (itemId > 2) this.spineIcon.node.active = false; else {
          itemId = parseInt(itemId);
          switch (itemId) {
           case 0:
            this.animName = "jackport icon2";
            this.spriteIcon.node.y = 10;
            break;

           case 1:
            this.animName = "wwild";
            break;

           case 2:
            this.animName = "bounus3";
          }
        }
      };
      Slot1ItemSlot.prototype.checkShowSpriteOrSpine = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 2) {
          this.spineIcon.node.active = false;
          this.spriteIcon.node.active = true;
          this.spriteIcon.node.color = cc.Color.WHITE;
          cc.tween(this.spriteIcon.node).to(.25, {
            scale: .9
          }, {
            easing: cc.easing.sineOut
          }).to(.25, {
            scale: .8
          }, {
            easing: cc.easing.sineOut
          }).delay(.4).call(function() {
            _this.spriteIcon.node.color = cc.Color.GRAY;
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
      __decorate([ property(cc.Sprite) ], Slot1ItemSlot.prototype, "spriteIcon", void 0);
      __decorate([ property(sp.Skeleton) ], Slot1ItemSlot.prototype, "spineIcon", void 0);
      __decorate([ property(cc.Node) ], Slot1ItemSlot.prototype, "nodeBox", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Slot1ItemSlot.prototype, "itemAtlast", void 0);
      Slot1ItemSlot = __decorate([ ccclass ], Slot1ItemSlot);
      return Slot1ItemSlot;
    }(cc.Component);
    exports.default = Slot1ItemSlot;
    cc._RF.pop();
  }, {} ],
  "Slot1.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b3fbf24/lNQJPbFfV4QPi8", "Slot1.Lobby");
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
    var Slot1_Cmd_1 = require("./Slot1.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot1Lobby = function(_super) {
      __extends(Slot1Lobby, _super);
      function Slot1Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
      }
      Slot1Lobby.prototype.start = function() {};
      Slot1Lobby.prototype.init = function(pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.mSlotController.isMusic && cc.audioEngine.playMusic(this.mSlotController.musicLobby, true);
        this.show();
      };
      Slot1Lobby.prototype.show = function() {
        this.node.active = true;
        this.showAnimation();
      };
      Slot1Lobby.prototype.hide = function() {
        this.node.active = false;
      };
      Slot1Lobby.prototype.showAnimation = function() {
        this.mSlotController.isSound && cc.audioEngine.play(this.mSlotController.soundStartSpin, false, 1);
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
      Slot1Lobby.prototype.onBtnBack = function() {
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot1Lobby.prototype.onBtn100 = function() {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot1Lobby.prototype.onBtn5k = function() {
        this.mSlotController.betId = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot1Lobby.prototype.omBtn10k = function() {
        this.mSlotController.betId = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
      };
      Slot1Lobby.prototype.onUpdateJackpot = function(pData) {
        var res = new Slot1_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["audition"]["100"].p, .3);
        Tween_1.default.numberTo(this.listPot[1], resJson["audition"]["1000"].p, .3);
        Tween_1.default.numberTo(this.listPot[2], resJson["audition"]["10000"].p, .3);
      };
      __decorate([ property([ cc.Label ]) ], Slot1Lobby.prototype, "listPot", void 0);
      __decorate([ property([ cc.Node ]) ], Slot1Lobby.prototype, "rooms", void 0);
      Slot1Lobby = __decorate([ ccclass ], Slot1Lobby);
      return Slot1Lobby;
    }(cc.Component);
    exports.default = Slot1Lobby;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot1.Cmd": "Slot1.Cmd"
  } ],
  "Slot1.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b33afE9ObFA3aGH1L/Nfmpf", "Slot1.PopupBonus");
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
    var arr_animation = [ "baoliendang", "binhtiendon", "kinhchieuyeu", "quatbatieu", "thap", "vongcankhon" ];
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
          node["ske"] = node.getChildByName("ske").getComponent(sp.Skeleton);
          node["ske"].node.active = true;
          node["ske"].animation = arr_animation[Math.floor(Math.random() * arr_animation.length)];
          node["ske"].loop = true;
          node["btn"].node.active = true;
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            console.log("click:" + value + " : " + node["is_open"]);
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                node["ske"].node.active = false;
                node["btn"].node.active = false;
                break;

               case 1:
                node["ske"].node.active = false;
                node["btn"].node.active = false;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["ske"].node.active = false;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["ske"].node.active = false;
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["ske"].node.active = false;
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
        Tween_1.default.numberTo(this.lblWin, this.win, .3);
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["label"] = node.getChildByName("label").getComponent(cc.Label);
          node["ske"] = node.getChildByName("ske").getComponent(sp.Skeleton);
          node["ske"].node.active = true;
          node["ske"].animation = arr_animation[Math.floor(Math.random() * arr_animation.length)];
          node["ske"].loop = true;
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
        this.lblLeft.string = "" + this.left;
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
  "Slot1.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "812783YWhZDhZoyNS1qc2Qn", "Slot1.PopupGuide");
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
        _this.pages = [];
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
      }
      PopupGuide.prototype.start = function() {};
      PopupGuide.prototype.show = function() {
        _super.prototype.show.call(this);
        this.page = 0;
        this.reloadData();
      };
      PopupGuide.prototype.actNext = function() {
        this.page < this.pages.length - 1 && this.page++;
        this.reloadData();
      };
      PopupGuide.prototype.actPrev = function() {
        this.page > 0 && this.page--;
        this.reloadData();
      };
      PopupGuide.prototype.reloadData = function() {
        for (var i = 0; i < this.pages.length; i++) this.pages[i].active = i == this.page;
      };
      PopupGuide.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
      };
      PopupGuide.prototype.canPlaySound = function() {
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        this.soundSlotState = null != soundSave ? parseInt(soundSave) : 1;
        return 1 == this.soundSlotState;
      };
      __decorate([ property([ cc.Node ]) ], PopupGuide.prototype, "pages", void 0);
      PopupGuide = __decorate([ ccclass ], PopupGuide);
      return PopupGuide;
    }(Dialog_1.default);
    exports.PopupGuide = PopupGuide;
    exports.default = PopupGuide;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot1.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd3cbRPk69DB660IfIuXdmn", "Slot1.PopupHistory");
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
          gn: "Audition"
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
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
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
  "Slot1.PopupJackpotHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2c0a8t7flBOZ3eZBo74fy/", "Slot1.PopupJackpotHistory");
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
          gn: "AUDITION"
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
              item.getChildByName("Type").getComponent(cc.Label).string = 3 == itemData["rs"] ? "Jackpot" : "Big win";
              item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
              item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      PopupJackpotHistory.prototype.canPlaySound = function() {
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
  "Slot1.PopupSelectLine": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad8628yd4BFt4+9o8RkusFb", "Slot1.PopupSelectLine");
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
        _this.arrLine = null;
        _this.soundClick = null;
        _this.soundSlotState = null;
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
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = true;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actSelectEven = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 != 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actSelectOdd = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
          var node = this.buttonsLine.children[i];
          node[this.SELECTED] = i % 2 == 0;
          node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
      };
      PopupSelectLine.prototype.actDeselectAll = function() {
        this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
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
        if (this.getSelectedLines().length > 0) {
          var arrLineSelected = this.getSelectedLines();
          for (var index = 0; index < 20; index++) this.arrLine.children[index].color = cc.Color.GRAY;
          for (var index = 0; index < arrLineSelected.length; index++) this.arrLine.children[arrLineSelected[index] - 1].color = cc.Color.WHITE;
          this.canPlaySound() && cc.audioEngine.play(this.soundClick, false, 1);
          _super.prototype.dismiss.call(this);
        }
      };
      PopupSelectLine.prototype.canPlaySound = function() {
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        this.soundSlotState = null != soundSave ? parseInt(soundSave) : 1;
        return 1 == this.soundSlotState;
      };
      __decorate([ property(cc.Node) ], PopupSelectLine.prototype, "buttonsLine", void 0);
      __decorate([ property(cc.Button) ], PopupSelectLine.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], PopupSelectLine.prototype, "arrLine", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], PopupSelectLine.prototype, "soundClick", void 0);
      PopupSelectLine = __decorate([ ccclass ], PopupSelectLine);
      return PopupSelectLine;
    }(Dialog_1.default);
    exports.PopupSelectLine = PopupSelectLine;
    exports.default = PopupSelectLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot1.Slot1Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9268bpr8WZEjacHAyjippnm", "Slot1.Slot1Controller");
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
    var Slot1_Cmd_1 = require("./Slot1.Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot1_PopupSelectLine_1 = require("./Slot1.PopupSelectLine");
    var Slot1_PopupBonus_1 = require("./Slot1.PopupBonus");
    var Slot1_TrialResults_1 = require("./Slot1.TrialResults");
    var Slot1_Lobby_1 = require("./Slot1.Lobby");
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
    var ANIM_ICON = [ "Jackpot", "wildmonkey", "bonus", "batgioi", "satang", "quadao", "vongkimco" ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot1Controller = function(_super) {
      __extends(Slot1Controller, _super);
      function Slot1Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        _this.btnPlayTry = null;
        _this.btnPlayReal = null;
        _this.btnLine = null;
        _this.popupBonus = null;
        _this.chooseLineScript = null;
        _this.nodeBoxSetting = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.spriteSpin = null;
        _this.sfSpinStart = null;
        _this.sfSpinStop = null;
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
        _this.lblFreeSpinCount = null;
        _this.lblBet = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.bonusNode = null;
        _this.iconWildColumns = null;
        _this.lineWinParent = null;
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        _this.musicLobby = null;
        _this.musicBonus = null;
        _this.soundClick = null;
        _this.soundStartSpin = null;
        _this.soundRepeatSpin = null;
        _this.soundEndSpin = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundtouchBonus = null;
        _this.soundSmumary = null;
        _this.dailyFreeSpin = 0;
        _this.listActiveItem = [];
        _this.columnsWild = [];
        _this.TIME_DELAY_SHOW_LINE = 1;
        _this.wildItemId = 1;
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
        _this.arrSkeletonIcon100 = [];
        _this.arrUIItemIcon = [];
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.isFirst = false;
        _this.isSound = false;
        _this.isMusic = true;
        _this.offMusic = null;
        _this.offSound = null;
        _this.audioIdRepeatSpin = 0;
        return _this;
      }
      Slot1Controller.prototype.start = function() {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.offMusic = this.toggleMusic.node.getChildByName("off");
        this.offSound = this.toggleSound.node.getChildByName("off");
        this.isSound = true;
        this.isMusic = true;
        this.totalWinLabel.string = "";
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.mSlotLobby.onBtnBack();
        }, this);
        this.init();
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot1_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            _this.mSlotLobby.onUpdateJackpot(data);
            break;

           case Slot1_Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot1_Cmd_1.default.ReceiveUpdatePot(data);
            -1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, .3) : 0 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom1, .3) : 1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom2, .3) : 2 == _this.betId && Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom4, .3);
            break;

           case Slot1_Cmd_1.default.Code.UPDATE_RESULT:
            var res = new Slot1_Cmd_1.default.ReceiveResult(data);
            _this.spinResult(res);
            break;

           case Slot1_Cmd_1.default.Code.FREE_DAI_LY:
            if (!_this.isTrial) {
              var res = new Slot1_Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.dailyFreeSpin = res.freeSpin;
              if (_this.dailyFreeSpin > 0) {
                _this.lblFreeSpinCount.node.parent.active = true;
                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
              } else _this.lblFreeSpinCount.node.parent.active = false;
            }
            break;

           case Slot1_Cmd_1.default.Code.DATE_X2:
            var res = new Slot1_Cmd_1.default.ReceiveDateX2(data);
            if (false == _this.isFirst) {
              _this.hideGamePlay();
              _this.isFirst = true;
            } else {
              _this.mSlotLobby.node.active = false;
              _this.onJoinRoom(res);
            }
            break;

           case Slot1_Cmd_1.default.Code.CHANGE_ROOM:
          }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot1_Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, .3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function() {
          App_1.default.instance.showLoading(false);
        });
        this.chooseLineScript.onSelectedChanged = function(lines) {
          _this.arrLineSelected = lines;
          _this.totalLineLabel.string = lines.length.toString();
          _this.totalBetLabel.string = Utils_1.default.formatNumberMin(lines.length * _this.listBet[_this.betId]);
        };
        this.mSlotLobby.init(this);
      };
      Slot1Controller.prototype.showAnimations = function() {
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
      Slot1Controller.prototype.showGamePlay = function() {
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
      };
      Slot1Controller.prototype.hideGamePlay = function() {
        this.nodeGamePlay.active = false;
      };
      Slot1Controller.prototype.init = function() {
        this.totalWinLabel.string = "";
      };
      Slot1Controller.prototype.onJoinRoom = function(res) {
        void 0 === res && (res = null);
        this.lblBet.string = this.listBetString[this.betId];
        var betIdTmp = this.betId;
        -1 == betIdTmp && (betIdTmp = 2);
        var totalbet = this.arrLineSelected.length * this.listBet[betIdTmp];
        this.totalBetLabel.string = Utils_1.default.formatNumberMin(totalbet);
        this.mSlotLobby.hide();
        this.nodeDemo.active = !!this.isTrial;
        this.showGamePlay();
        this.setButtonEnable(true);
      };
      Slot1Controller.prototype.randomIconList = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var index = i;
          var itemId = Math.floor(Math.random() * self.arrSkeletonIcon100.length);
          self.arrUIItemIcon[i].init(itemId, index, self);
          self.arrUIItemIcon[i].changeSpineIcon(itemId);
          self.arrUIItemIcon[i].spriteIcon.node.active = false;
          self.arrUIItemIcon[i].spineIcon.node.active = true;
          self.arrUIItemIcon[i].spineIcon.animation = ANIM_ICON[itemId];
          self.arrUIItemIcon[i].spineIcon.loop = true;
        }
      };
      Slot1Controller.prototype.randomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      Slot1Controller.prototype.spinClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) this.iconWildColumns.children[i].active = false;
        if (this.isTrial) {
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          var rIdx = Utils_1.default.randomRangeInt(0, Slot1_TrialResults_1.default.results.length);
          this.spinResult(Slot1_TrialResults_1.default.results[rIdx]);
        } else {
          if (this.dailyFreeSpin > 0) {
            this.dailyFreeSpin--;
            if (this.dailyFreeSpin > 0) {
              this.lblFreeSpinCount.node.parent.active = true;
              this.lblFreeSpinCount.string = this.dailyFreeSpin + "";
            } else this.lblFreeSpinCount.node.parent.active = false;
          } else if (Configs_1.default.Login.Coin < this.listBet[this.betId] * this.arrLineSelected.length) {
            App_1.default.instance.alertDialog.showMsg("\u1019\u101c\u102f\u1036\u101c\u1031\u102c\u1000\u103a\u1010\u1032\u1037\u1015\u102d\u102f\u1000\u103a\u1006\u1036");
            return;
          }
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendPlay(this.listBet[this.betId], this.arrLineSelected.toString()));
        }
      };
      Slot1Controller.prototype.spinResult = function(res) {
        this.isSpining = true;
        var that = this;
        var successResult = [ 0, 1, 2, 3, 5, 6 ];
        var result = res.result;
        if (-1 === successResult.indexOf(result)) {
          102 === result && App_1.default.instance.alertDialog.showMsg("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101c\u1000\u103a\u1000\u103b\u1014\u103a \u1019\u101c\u102f\u1036\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104b");
          return;
        }
        var matrix = res.matrix.split(",");
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        this.columnsWild.length = 0;
        this.isSound && cc.audioEngine.play(this.soundStartSpin, false, 1);
        this.isSound && (this.audioIdRepeatSpin = cc.audioEngine.play(this.soundRepeatSpin, true, 1));
        for (var i = 0; i < this.arrReel.length; i++) this.beginSpinReel(i);
      };
      Slot1Controller.prototype.spinFinish = function(hasDelay) {
        this.isSpining = false;
        var that = this;
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function() {
          if (that.toggleFast.isChecked) that.spinClick(); else {
            that.setButtonEnable(true);
            that.setButtonFlash(true);
          }
        })));
      };
      Slot1Controller.prototype.showWinEffect = function(prize, currentMoney, result) {
        var _this = this;
        var self = this;
        if (prize > 0) if (5 == result) {
          this.isMusic && cc.audioEngine.playMusic(this.musicBonus, true);
          this.bonusNode.active = true;
          var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
          bonusSpine.animation = "bonus";
          bonusSpine.loop = false;
          this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
            _this.bonusNode.active = false;
            _this.popupBonus.showBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, _this, function() {
              _this.showLineWin(self.dataResult.linesWin.split(","));
              Tween_1.default.numberTo(_this.totalWinLabel, prize, .3);
              _this.isTrial || Tween_1.default.numberTo(_this.moneyLabel, currentMoney, .3);
              _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
            });
          })));
        } else if (2 == result || 6 == result) {
          this.isSound && cc.audioEngine.play(this.soundBigWin, false, 1);
          this.bigWinNode.active = true;
          var bigwinSpine = this.bigWinNode.getComponentInChildren(sp.Skeleton);
          bigwinSpine.animation = "Bigwin";
          bigwinSpine.loop = false;
          Tween_1.default.numberTo(this.txtWinBigWin, prize, .3);
          this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
            _this.bigWinNode.active = false;
            _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
          })));
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
        } else if (3 == result) {
          if (this.isSound) var audioIdJackpot = cc.audioEngine.play(this.soundJackpot, false, 1);
          this.jackpotNode.active = true;
          var jackpotSpine = this.jackpotNode.getComponentInChildren(sp.Skeleton);
          jackpotSpine.animation = "Jackpot";
          jackpotSpine.loop = false;
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
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
        } else {
          this.isSound && cc.audioEngine.play(this.soundSpinWin, false, 1);
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
        } else {
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
        }
      };
      Slot1Controller.prototype.beginSpinReel = function(indexReel) {
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
      Slot1Controller.prototype.loopSpinReel = function(indexReel) {
        var self = this;
        cc.tween(self.arrReel[indexReel]).to(.06, {
          position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0)
        }, {
          easing: "linear"
        }).call(function() {
          self.processLoopSpinReel(indexReel);
        }).start();
      };
      Slot1Controller.prototype.processLoopSpinReel = function(indexReel) {
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
      Slot1Controller.prototype.endSpinReel = function(indexReel) {
        var _this = this;
        var self = this;
        if (null == self.dataResult) {
          for (var i = 3; i >= 1; i--) {
            var index = indexReel + 5 * i;
            var itemId = Math.floor(Math.random() * self.arrSkeletonIcon100.length);
            self.arrUIItemIcon[index].changeSpineIcon(itemId);
            self.arrUIItemIcon[index].spriteIcon.node.active = false;
            self.arrUIItemIcon[index].spineIcon.node.active = true;
            self.arrUIItemIcon[index].spineIcon.animation = ANIM_ICON[itemId];
            self.arrUIItemIcon[index].spineIcon.loop = true;
          }
          return;
        }
        var matrix = self.dataResult.matrix.split(",");
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
          var index = indexReel + 5 * i;
          var id = matrix[index - 5];
          self.arrUIItemIcon[index].changeSpineIcon(id);
          self.arrUIItemIcon[index].spriteIcon.node.active = false;
          self.arrUIItemIcon[index].spineIcon.node.active = true;
          self.arrUIItemIcon[index].spineIcon.animation = ANIM_ICON[id];
          self.arrUIItemIcon[index].spineIcon.loop = true;
        }
        cc.tween(self.arrReel[indexReel]).to(.3, {
          position: cc.v3(self.arrReel[indexReel].position.x, 0, 0)
        }, {
          easing: "backOut"
        }).call(function() {
          self.isSound && cc.audioEngine.play(self.soundEndSpin, false, 1);
          if (4 == indexReel) {
            cc.audioEngine.stop(_this.audioIdRepeatSpin);
            for (var i = 0; i < 5; i++) {
              var itemId = Math.floor(Math.random() * self.arrSkeletonIcon100.length);
              self.arrUIItemIcon[i].changeSpineIcon(itemId);
              self.arrUIItemIcon[i].spriteIcon.node.active = false;
              self.arrUIItemIcon[i].spineIcon.node.active = true;
              self.arrUIItemIcon[i].spineIcon.animation = ANIM_ICON[itemId];
              self.arrUIItemIcon[i].spineIcon.loop = true;
            }
            for (var i = 20; i < 25; i++) {
              var itemId = Math.floor(Math.random() * self.arrSkeletonIcon100.length);
              self.arrUIItemIcon[i].changeSpineIcon(itemId);
              self.arrUIItemIcon[i].spriteIcon.node.active = false;
              self.arrUIItemIcon[i].spineIcon.node.active = true;
              self.arrUIItemIcon[i].spineIcon.animation = ANIM_ICON[itemId];
              self.arrUIItemIcon[i].spineIcon.loop = true;
            }
            Configs_1.default.Login.Coin = self.dataResult.currentMoney;
            self.showWinEffect(self.dataResult.prize, self.dataResult.currentMoney, self.dataResult.result);
          }
        }).start();
      };
      Slot1Controller.prototype.onBtnSoundTouchBonus = function() {
        this.isSound && cc.audioEngine.play(this.soundtouchBonus, false, 1);
      };
      Slot1Controller.prototype.onBtnSoundSumary = function() {
        this.isSound && cc.audioEngine.play(this.soundSmumary, false, 1);
      };
      Slot1Controller.prototype.getSpriteFrameIconBlur = function(itemId) {
        var indexIcon = itemId;
        var self = this;
        return self.iconSFBlurArr100[indexIcon];
      };
      Slot1Controller.prototype.getSpriteFrameIcon = function(indexIcon) {
        var self = this;
        return null;
      };
      Slot1Controller.prototype.getSpineIcon = function(itemId) {
        var indexIcon = itemId;
        var self = this;
        return self.arrSkeletonIcon100[indexIcon];
      };
      Slot1Controller.prototype.hideWinEffect = function() {
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
      };
      Slot1Controller.prototype.onBtnToggleMusic = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? 1 : 0);
        this.offMusic.position = this.isMusic ? cc.v3(30, 0, 0) : cc.v3(-20, 0, 0);
      };
      Slot1Controller.prototype.onBtnToggleSound = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSound = !this.isSound;
        this.offSound.position = this.isSound ? cc.v3(30, 0, 0) : cc.v3(-20, 0, 0);
      };
      Slot1Controller.prototype.onBtnHistory = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot1Controller.prototype.onBtnHistoryJackpot = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot1Controller.prototype.onBtnHideSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
      };
      Slot1Controller.prototype.onBtnSoundClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
      };
      Slot1Controller.prototype.onBtnSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.offMusic.position = this.isMusic ? cc.v3(30, 0, 0) : cc.v3(-20, 0, 0);
        this.offSound.position = this.isSound ? cc.v3(30, 0, 0) : cc.v3(-20, 0, 0);
        Tween_1.default.showPopup(this.nodeBoxSetting, this.nodeBoxSetting.parent);
      };
      Slot1Controller.prototype.showLineWin = function(lines) {
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
      Slot1Controller.prototype.hideLineWin = function(stopAction) {
        stopAction && this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function(element) {
          element.active = false;
        });
      };
      Slot1Controller.prototype.setButtonEnable = function(active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        this.btnPlayTry.interactable = active;
        this.btnPlayReal.interactable = active;
        this.spriteSpin.spriteFrame = true == active ? this.sfSpinStart : this.sfSpinStop;
      };
      Slot1Controller.prototype.setButtonFlash = function(active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
      };
      Slot1Controller.prototype.changeBet = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
      };
      Slot1Controller.prototype.chooseBet = function(event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        this.isTrial = -1 == bet;
        this.betId = -1 == bet ? 2 : bet;
        if (this.betId >= this.listBet.length) {
          this.betId = 0;
          SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        } else {
          SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
          this.onJoinRoom();
        }
      };
      Slot1Controller.prototype.showChooseLine = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.chooseLineScript.show();
      };
      Slot1Controller.prototype.changeSpeed = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isFastCurrent = this.toggleFast.isChecked;
        this.toggleFast.isChecked && !this.isSpining && this.spinClick();
      };
      Slot1Controller.prototype.setAutoSpin = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSpining || this.spinClick();
      };
      Slot1Controller.prototype.actBack = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
      };
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "btnPlayTry", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "btnPlayReal", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "btnLine", void 0);
      __decorate([ property(Slot1_PopupBonus_1.default) ], Slot1Controller.prototype, "popupBonus", void 0);
      __decorate([ property(Slot1_PopupSelectLine_1.default) ], Slot1Controller.prototype, "chooseLineScript", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "nodeBoxSetting", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Sprite) ], Slot1Controller.prototype, "spriteSpin", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot1Controller.prototype, "sfSpinStart", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot1Controller.prototype, "sfSpinStop", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "nodeDemo", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "nodeWinJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "txtWinJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "nodeGamePlay", void 0);
      __decorate([ property(Slot1_Lobby_1.default) ], Slot1Controller.prototype, "mSlotLobby", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "jackpotLabel", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "moneyLabel", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "totalLineLabel", void 0);
      __decorate([ property(cc.Button) ], Slot1Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Toggle) ], Slot1Controller.prototype, "toggleFast", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "lblBet", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "bigWinNode", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "txtWinBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "jackpotNode", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "bonusNode", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "iconWildColumns", void 0);
      __decorate([ property(cc.Node) ], Slot1Controller.prototype, "lineWinParent", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "totalWinLabel", void 0);
      __decorate([ property(cc.Label) ], Slot1Controller.prototype, "totalBetLabel", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "musicLobby", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "musicBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundStartSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundRepeatSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundEndSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundtouchBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot1Controller.prototype, "soundSmumary", void 0);
      __decorate([ property([ cc.Node ]) ], Slot1Controller.prototype, "arrReel", void 0);
      __decorate([ property(cc.Float) ], Slot1Controller.prototype, "distanceReel", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot1Controller.prototype, "iconSFBlurArr100", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot1Controller.prototype, "arrSkeletonIcon100", void 0);
      __decorate([ property([ ItemIconSlot25_1.default ]) ], Slot1Controller.prototype, "arrUIItemIcon", void 0);
      Slot1Controller = __decorate([ ccclass ], Slot1Controller);
      return Slot1Controller;
    }(cc.Component);
    exports.default = Slot1Controller;
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
    "./Slot1.Cmd": "Slot1.Cmd",
    "./Slot1.Lobby": "Slot1.Lobby",
    "./Slot1.PopupBonus": "Slot1.PopupBonus",
    "./Slot1.PopupSelectLine": "Slot1.PopupSelectLine",
    "./Slot1.TrialResults": "Slot1.TrialResults"
  } ],
  "Slot1.TrialResults": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b7baHxUJdMFalDmU6sMgIT", "Slot1.TrialResults");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TrialResults = void 0;
    var TrialResults = function() {
      function TrialResults() {}
      TrialResults.results = [ {
        _pos: 93,
        _data: {
          0: 1,
          1: 7,
          2: 209,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 110,
          10: 66,
          11: 136,
          12: 3,
          13: 0,
          14: 29,
          15: 52,
          16: 44,
          17: 54,
          18: 44,
          19: 51,
          20: 44,
          21: 51,
          22: 44,
          23: 54,
          24: 44,
          25: 49,
          26: 44,
          27: 52,
          28: 44,
          29: 54,
          30: 44,
          31: 49,
          32: 44,
          33: 52,
          34: 44,
          35: 48,
          36: 44,
          37: 48,
          38: 44,
          39: 48,
          40: 44,
          41: 48,
          42: 44,
          43: 48,
          44: 0,
          45: 29,
          46: 49,
          47: 44,
          48: 51,
          49: 44,
          50: 52,
          51: 44,
          52: 53,
          53: 44,
          54: 55,
          55: 44,
          56: 57,
          57: 44,
          58: 49,
          59: 49,
          60: 44,
          61: 49,
          62: 50,
          63: 44,
          64: 49,
          65: 53,
          66: 44,
          67: 49,
          68: 54,
          69: 44,
          70: 49,
          71: 55,
          72: 44,
          73: 49,
          74: 56,
          75: 0,
          76: 0,
          77: 0,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 14,
          83: 227,
          84: 205,
          85: 0,
          86: 0,
          87: 0,
          88: 0,
          89: 0,
          90: 174,
          91: 242,
          92: 86
        },
        _length: 93,
        _controllerId: 1,
        _cmdId: 2001,
        _error: 0,
        ref: 7225992,
        result: 3,
        matrix: "4,6,3,3,6,1,4,6,1,4,0,0,0,0,0",
        linesWin: "1,3,4,5,7,9,11,12,15,16,17,18",
        haiSao: "",
        prize: 975821,
        currentMoney: 11465302
      }, {
        _pos: 80,
        _data: {
          0: 1,
          1: 7,
          2: 209,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 110,
          10: 66,
          11: 137,
          12: 3,
          13: 0,
          14: 29,
          15: 53,
          16: 44,
          17: 53,
          18: 44,
          19: 51,
          20: 44,
          21: 54,
          22: 44,
          23: 52,
          24: 44,
          25: 54,
          26: 44,
          27: 48,
          28: 44,
          29: 53,
          30: 44,
          31: 50,
          32: 44,
          33: 48,
          34: 44,
          35: 48,
          36: 44,
          37: 48,
          38: 44,
          39: 48,
          40: 44,
          41: 48,
          42: 44,
          43: 48,
          44: 0,
          45: 16,
          46: 51,
          47: 44,
          48: 53,
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
          61: 55,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 7,
          70: 206,
          71: 244,
          72: 0,
          73: 0,
          74: 0,
          75: 0,
          76: 0,
          77: 182,
          78: 185,
          79: 122
        },
        _length: 80,
        _controllerId: 1,
        _cmdId: 2001,
        _error: 0,
        ref: 7225993,
        result: 3,
        matrix: "5,5,3,6,4,6,0,5,2,0,0,0,0,0,0",
        linesWin: "3,5,7,9,11,15,17",
        haiSao: "",
        prize: 511732,
        currentMoney: 11975034
      }, {
        _pos: 80,
        _data: {
          0: 1,
          1: 7,
          2: 209,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 110,
          10: 66,
          11: 138,
          12: 3,
          13: 0,
          14: 29,
          15: 48,
          16: 44,
          17: 54,
          18: 44,
          19: 54,
          20: 44,
          21: 52,
          22: 44,
          23: 51,
          24: 44,
          25: 54,
          26: 44,
          27: 53,
          28: 44,
          29: 53,
          30: 44,
          31: 52,
          32: 44,
          33: 54,
          34: 44,
          35: 48,
          36: 44,
          37: 48,
          38: 44,
          39: 48,
          40: 44,
          41: 48,
          42: 44,
          43: 48,
          44: 0,
          45: 16,
          46: 51,
          47: 44,
          48: 55,
          49: 44,
          50: 56,
          51: 44,
          52: 57,
          53: 44,
          54: 49,
          55: 55,
          56: 44,
          57: 49,
          58: 56,
          59: 44,
          60: 50,
          61: 48,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 7,
          70: 186,
          71: 98,
          72: 0,
          73: 0,
          74: 0,
          75: 0,
          76: 0,
          77: 190,
          78: 108,
          79: 12
        },
        _length: 80,
        _controllerId: 1,
        _cmdId: 2001,
        _error: 0,
        ref: 7225994,
        result: 3,
        matrix: "0,6,6,4,3,6,5,5,4,6,0,0,0,0,0",
        linesWin: "3,7,8,9,17,18,20",
        haiSao: "",
        prize: 506466,
        currentMoney: 12479500
      } ];
      return TrialResults;
    }();
    exports.TrialResults = TrialResults;
    exports.default = TrialResults;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Slot1.Cmd", "Slot1.ItemSlot", "Slot1.Lobby", "Slot1.PopupBonus", "Slot1.PopupGuide", "Slot1.PopupHistory", "Slot1.PopupJackpotHistory", "Slot1.PopupSelectLine", "Slot1.Slot1Controller", "Slot1.TrialResults" ]);