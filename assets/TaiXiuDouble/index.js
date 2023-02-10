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
  "TaiXiuDouble.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fab78Wrn1BQo1sU67+m3Wp", "TaiXiuDouble.Controller");
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
    var VersionConfig_1 = require("../../../Loading/src/VersionConfig");
    var MiniGame_1 = require("../../../Lobby/LobbyScript/MiniGame");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
    var TaiXiuMini_TaiXiuMiniController_1 = require("../TaiXiu1/TaiXiuMini.TaiXiuMiniController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TaiXiuDoubleController = function(_super) {
      __extends(TaiXiuDoubleController, _super);
      function TaiXiuDoubleController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.taiXiu1Node = null;
        _this.btnSwitch = null;
        _this.taiXiu1 = null;
        _this.isShowTX1 = true;
        return _this;
      }
      TaiXiuDoubleController_1 = TaiXiuDoubleController;
      TaiXiuDoubleController.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.taiXiu1 = this.taiXiu1Node.getComponent(TaiXiuMini_TaiXiuMiniController_1.default);
        TaiXiuDoubleController_1.instance = this;
        VersionConfig_1.default.CPName;
      };
      TaiXiuDoubleController.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      TaiXiuDoubleController.prototype.start = function() {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addOnClose(function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
      };
      TaiXiuDoubleController.prototype.show = function() {
        var _this = this;
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.isShowTX1 = true;
        switch (VersionConfig_1.default.CPName) {
         case VersionConfig_1.default.CP_NAME_HT68:
         case VersionConfig_1.default.CP_NAME_F69:
         case VersionConfig_1.default.CP_NAME_R99_2:
         case VersionConfig_1.default.CP_NAME_MARBLES99:
         case VersionConfig_1.default.CP_NAME_SIN99:
         case VersionConfig_1.default.CP_NAME_ZINGVIP:
          break;

         default:
          TX2NetworkClient_1.default.getInstance().checkConnect(function() {
            _this.checkShow();
          });
        }
        MiniGameNetworkClient_1.default.getInstance().checkConnect(function() {
          _this.taiXiu1.show();
          _this.checkShow();
        });
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.checkShow();
      };
      TaiXiuDoubleController.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(true);
        this.taiXiu1.dismiss();
        App_1.default.instance.hideGameMini("TaiXiu");
      };
      TaiXiuDoubleController.prototype.checkShow = function() {
        if (this.isShowTX1) {
          this.taiXiu1.gamePlay.scale = 1;
          this.taiXiu1.gamePlay.position = cc.Vec3.ZERO;
          this.taiXiu1.nodePanelChat.active = true;
          this.taiXiu1.node.setSiblingIndex(1);
        } else {
          this.taiXiu1.gamePlay.scale = .5;
          this.taiXiu1.gamePlay.position = cc.v3(-405, 234, 0);
          this.taiXiu1.nodePanelChat.active = false;
          this.taiXiu1.layoutBet.active = false;
        }
      };
      TaiXiuDoubleController.prototype.actSwitch = function() {
        this.isShowTX1 = !this.isShowTX1;
        this.checkShow();
      };
      var TaiXiuDoubleController_1;
      TaiXiuDoubleController.instance = null;
      __decorate([ property(cc.Node) ], TaiXiuDoubleController.prototype, "taiXiu1Node", void 0);
      __decorate([ property(cc.Node) ], TaiXiuDoubleController.prototype, "btnSwitch", void 0);
      TaiXiuDoubleController = TaiXiuDoubleController_1 = __decorate([ ccclass ], TaiXiuDoubleController);
      return TaiXiuDoubleController;
    }(MiniGame_1.default);
    exports.default = TaiXiuDoubleController;
    cc._RF.pop();
  }, {
    "../../../Loading/src/VersionConfig": void 0,
    "../../../Lobby/LobbyScript/MiniGame": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient": void 0,
    "../TaiXiu1/TaiXiuMini.TaiXiuMiniController": "TaiXiuMini.TaiXiuMiniController"
  } ],
  "TaiXiuMini.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b758bL62fNHzoW+pRYt1pdx", "TaiXiuMini.Cmd");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SCRIBE = 2e3;
        Code.UNSCRIBE = 2001;
        Code.BET = 2110;
        Code.HISTORIES = 2116;
        Code.GAME_INFO = 2111;
        Code.UPDATE_TIME = 2112;
        Code.DICES_RESULT = 2113;
        Code.RESULT = 2114;
        Code.NEW_GAME = 2115;
        Code.REFUND = 2200;
        Code.JACKPOT = 2199;
        Code.LOG_CHAT = 18003;
        Code.SEND_CHAT = 18e3;
        Code.SCRIBE_CHAT = 18001;
        Code.UNSCRIBE_CHAT = 18002;
        return Code;
      }();
      cmd.Code = Code;
      var SendScribe = function(_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE);
          _this.packHeader();
          _this.putShort(Configs_1.default.GameId.TaiXiu);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendScribe;
      }(Network_OutPacket_1.default);
      cmd.SendScribe = SendScribe;
      var SendUnScribe = function(_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE);
          _this.packHeader();
          _this.putShort(Configs_1.default.GameId.TaiXiu);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendUnScribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribe = SendUnScribe;
      var SendScribeChat = function(_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE_CHAT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendScribeChat;
      }(Network_OutPacket_1.default);
      cmd.SendScribeChat = SendScribeChat;
      var SendUnScribeChat = function(_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE_CHAT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendUnScribeChat;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribeChat = SendUnScribeChat;
      var SendChat = function(_super) {
        __extends(SendChat, _super);
        function SendChat(message) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SEND_CHAT);
          _this.packHeader();
          _this.putString(message);
          _this.updateSize();
          return _this;
        }
        return SendChat;
      }(Network_OutPacket_1.default);
      cmd.SendChat = SendChat;
      var SendBet = function(_super) {
        __extends(SendBet, _super);
        function SendBet(referenceId, betValue, door, remainTime) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BET);
          _this.packHeader();
          _this.putInt(1);
          _this.putLong(referenceId);
          _this.putLong(betValue);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.putShort(door);
          _this.putShort(remainTime);
          _this.updateSize();
          return _this;
        }
        return SendBet;
      }(Network_OutPacket_1.default);
      cmd.SendBet = SendBet;
      var ReceiveGameInfo = function(_super) {
        __extends(ReceiveGameInfo, _super);
        function ReceiveGameInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.gameId = 0;
          _this.moneyType = 0;
          _this.referenceId = 0;
          _this.remainTime = 0;
          _this.bettingState = false;
          _this.potTai = 0;
          _this.potXiu = 0;
          _this.betTai = 0;
          _this.betXiu = 0;
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.remainTimeRutLoc = 0;
          _this.jpTai = 0;
          _this.jpXiu = 0;
          _this.gameId = _this.getShort();
          _this.moneyType = _this.getShort();
          _this.referenceId = _this.getLong();
          _this.remainTime = _this.getShort();
          _this.bettingState = _this.getBool();
          _this.potTai = _this.getLong();
          _this.potXiu = _this.getLong();
          _this.betTai = _this.getLong();
          _this.betXiu = _this.getLong();
          _this.dice1 = _this.getShort();
          _this.dice2 = _this.getShort();
          _this.dice3 = _this.getShort();
          _this.remainTimeRutLoc = _this.getShort();
          _this.jpTai = _this.getLong();
          _this.jpXiu = _this.getLong();
          return _this;
        }
        return ReceiveGameInfo;
      }(Network_InPacket_1.default);
      cmd.ReceiveGameInfo = ReceiveGameInfo;
      var ReceiveUpdateTime = function(_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
          var _this = _super.call(this, data) || this;
          _this.remainTime = 0;
          _this.bettingState = false;
          _this.potTai = 0;
          _this.potXiu = 0;
          _this.numBetTai = 0;
          _this.numBetXiu = 0;
          _this.remainTime = _this.getShort();
          _this.bettingState = _this.getBool();
          _this.potTai = _this.getLong();
          _this.potXiu = _this.getLong();
          _this.numBetTai = _this.getShort();
          _this.numBetXiu = _this.getShort();
          return _this;
        }
        return ReceiveUpdateTime;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateTime = ReceiveUpdateTime;
      var ReceiveDicesResult = function(_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.result = _this.getShort();
          _this.dice1 = _this.getShort();
          _this.dice2 = _this.getShort();
          _this.dice3 = _this.getShort();
          return _this;
        }
        return ReceiveDicesResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveDicesResult = ReceiveDicesResult;
      var ReceiveResult = function(_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
          var _this = _super.call(this, data) || this;
          _this.moneyType = 1;
          _this.totalMoney = 0;
          _this.currentMoney = 0;
          _this.moneyType = _this.getShort();
          _this.totalMoney = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
      var ReceiveRefund = function(_super) {
        __extends(ReceiveRefund, _super);
        function ReceiveRefund(data) {
          var _this = _super.call(this, data) || this;
          _this.moneyRefund = 0;
          _this.moneyRefund = _this.getLong();
          return _this;
        }
        return ReceiveRefund;
      }(Network_InPacket_1.default);
      cmd.ReceiveRefund = ReceiveRefund;
      var ReceiveNewGame = function(_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
          var _this = _super.call(this, data) || this;
          _this.referenceId = 0;
          _this.remainTimeRutLoc = 0;
          _this.jpTai = 0;
          _this.jpXiu = 0;
          _this.referenceId = _this.getLong();
          _this.remainTimeRutLoc = _this.getShort();
          _this.jpTai = _this.getLong();
          _this.jpXiu = _this.getLong();
          return _this;
        }
        return ReceiveNewGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveNewGame = ReceiveNewGame;
      var ReceiveHistories = function(_super) {
        __extends(ReceiveHistories, _super);
        function ReceiveHistories(data) {
          var _this = _super.call(this, data) || this;
          _this.data = "";
          _this.data = _this.getString();
          return _this;
        }
        return ReceiveHistories;
      }(Network_InPacket_1.default);
      cmd.ReceiveHistories = ReceiveHistories;
      var ReceiveBet = function(_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.currentMoney = 0;
          _this.result = _this.getError();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveBet;
      }(Network_InPacket_1.default);
      cmd.ReceiveBet = ReceiveBet;
      var ReceiveJackpotWin = function(_super) {
        __extends(ReceiveJackpotWin, _super);
        function ReceiveJackpotWin(data) {
          var _this = _super.call(this, data) || this;
          _this.jackpot = 0;
          _this.nickname = "";
          _this.idSession = 0;
          _this.idSession = _this.getLong();
          _this.jackpot = _this.getLong();
          _this.nickname = _this.getString();
          return _this;
        }
        return ReceiveJackpotWin;
      }(Network_InPacket_1.default);
      cmd.ReceiveJackpotWin = ReceiveJackpotWin;
      var ReceiveLogChat = function(_super) {
        __extends(ReceiveLogChat, _super);
        function ReceiveLogChat(data) {
          var _this = _super.call(this, data) || this;
          _this.message = "";
          _this.minVipPoint = 0;
          _this.timeBan = 0;
          _this.userType = 0;
          _this.message = _this.getString();
          _this.minVipPoint = _this.getByte();
          _this.timeBan = _this.getLong();
          _this.userType = _this.getByte();
          return _this;
        }
        return ReceiveLogChat;
      }(Network_InPacket_1.default);
      cmd.ReceiveLogChat = ReceiveLogChat;
      var ReceiveSendChat = function(_super) {
        __extends(ReceiveSendChat, _super);
        function ReceiveSendChat(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.nickname = "";
          _this.message = "";
          _this.error = _this.getError();
          _this.nickname = _this.getString();
          _this.message = _this.getString();
          return _this;
        }
        return ReceiveSendChat;
      }(Network_InPacket_1.default);
      cmd.ReceiveSendChat = ReceiveSendChat;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "TaiXiuMini.PanelChat": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23cbfa2B/ZCQJ2RCPuC+7ry", "TaiXiuMini.PanelChat");
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
    var TaiXiuMini_Cmd_1 = require("./TaiXiuMini.Cmd");
    var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
    var Configs_1 = require("../../../Loading/src/Configs");
    var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PanelChat = function(_super) {
        __extends(PanelChat, _super);
        function PanelChat() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.itemChatTemplate = null;
          _this.scrMessage = null;
          _this.edbMessage = null;
          return _this;
        }
        PanelChat.prototype.start = function() {
          var _this = this;
          this.itemChatTemplate.active = false;
          this.edbMessage.node.on("editing-return", function() {
            _this.sendChat();
          });
        };
        PanelChat.prototype.show = function(isShow) {
          this.node.active = isShow;
          isShow ? MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendScribeChat()) : MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendUnScribeChat());
        };
        PanelChat.prototype.addMessage = function(nickname, message) {
          var item = null;
          for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
            var node = this.scrMessage.content.children[i];
            if (!node.active) {
              item = node;
              break;
            }
          }
          null == item && (item = this.scrMessage.content.childrenCount >= 50 ? this.scrMessage.content.children[0] : cc.instantiate(this.itemChatTemplate));
          var zIndex = 0;
          for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
            var node = this.scrMessage.content.children[i];
            node != item && (node.zIndex = zIndex++);
          }
          item.parent = this.scrMessage.content;
          var lblNickname = item.getChildByName("lblNickname").getComponent(cc.Label);
          lblNickname.string = nickname + ":";
          lblNickname.node.color = nickname == Configs_1.default.Login.Nickname ? cc.Color.WHITE.fromHEX("#3bff49") : cc.Color.WHITE.fromHEX("#f7da38");
          item.getComponent(cc.Label).string = nickname + ": " + message;
          item.active = true;
          item.zIndex = zIndex++;
          this.scrollToBottom();
        };
        PanelChat.prototype.sendChat = function() {
          var msg = this.edbMessage.string.trim();
          if (0 == msg.length) return;
          this.edbMessage.string = "";
          TaiXiuMini_TaiXiuMiniController_1.default.instance.sendChat(msg);
        };
        PanelChat.prototype.scrollToBottom = function() {
          this.scrMessage.scrollToBottom(.2);
        };
        __decorate([ property(cc.Node) ], PanelChat.prototype, "itemChatTemplate", void 0);
        __decorate([ property(cc.ScrollView) ], PanelChat.prototype, "scrMessage", void 0);
        __decorate([ property(cc.EditBox) ], PanelChat.prototype, "edbMessage", void 0);
        PanelChat = __decorate([ ccclass ], PanelChat);
        return PanelChat;
      }(cc.Component);
      taixiumini.PanelChat = PanelChat;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PanelChat;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "./TaiXiuMini.Cmd": "TaiXiuMini.Cmd",
    "./TaiXiuMini.TaiXiuMiniController": "TaiXiuMini.TaiXiuMiniController"
  } ],
  "TaiXiuMini.PopupDetailHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21f0d1UG0BOWpn2bpe9+oRh", "TaiXiuMini.PopupDetailHistory");
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
    var Http_1 = require("../../../Loading/src/Http");
    var Configs_1 = require("../../../Loading/src/Configs");
    var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupDetailHistory = function(_super) {
      __extends(PopupDetailHistory, _super);
      function PopupDetailHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblResult = null;
        _this.lblPage = null;
        _this.lblTotalBetTai = null;
        _this.lblTotalBetXiu = null;
        _this.lblTotalRefundTai = null;
        _this.lblTotalRefundXiu = null;
        _this.sfDices = [];
        _this.sfTai = null;
        _this.sfXiu = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprResult = null;
        _this.sprResult_Tai = null;
        _this.sprResult_Xiu = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.inited = false;
        _this.session = 0;
        _this.page = 1;
        _this.totalPage = 1;
        _this.historiesTai = [];
        _this.historiesXiu = [];
        _this.totalBetTai = 0;
        _this.totalRefundTai = 0;
        _this.totalBetXiu = 0;
        _this.totalRefundXiu = 0;
        return _this;
      }
      PopupDetailHistory.prototype.showDetail = function(session) {
        this.session = session;
        this.show();
      };
      PopupDetailHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.lblSession.string = "\u1000\u1005\u102c\u1038\u1001\u103b\u102d\u1014\u103a: #" + this.session;
        this.lblResult.string = "";
        if (this.inited) {
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
          return;
        }
        this.itemTemplate.active = false;
        for (var i = 0; i < 9; i++) {
          var node = cc.instantiate(this.itemTemplate);
          node.parent = this.itemTemplate.parent;
          node.active = false;
          this.items.push(node);
        }
        this.inited = true;
      };
      PopupDetailHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.loadData();
      };
      PopupDetailHistory.prototype.loadData = function() {
        var _this = this;
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.lblSession.string = "\u1000\u1005\u102c\u1038\u1001\u103b\u102d\u1014\u103a: #" + this.session;
        this.lblResult.string = "";
        this.totalBetTai = 0;
        this.totalBetXiu = 0;
        this.totalRefundTai = 0;
        this.totalRefundXiu = 0;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 102,
          rid: this.session,
          mt: Configs_1.default.App.MONEY_TYPE
        }, function(err, res) {
          if (null != err) return;
          _this.historiesTai = [];
          _this.historiesXiu = [];
          App_1.default.instance.showLoading(false);
          if (res.success && null !== res["resultTX"]) {
            for (var i = 0; i < res["transactions"].length; i++) {
              var itemData = res["transactions"][i];
              if (1 === itemData["betSide"]) {
                _this.historiesTai.push(itemData);
                _this.totalBetTai += itemData["betValue"];
                _this.totalRefundTai += itemData["refund"];
              } else {
                _this.historiesXiu.push(itemData);
                _this.totalBetXiu += itemData["betValue"];
                _this.totalRefundXiu += itemData["refund"];
              }
            }
            for (var i = 0; i < _this.items.length; i++) _this.items[i].active = false;
            _this.page = 1;
            _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
            _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
            _this.lblPage.string = _this.page + "/" + _this.totalPage;
            _this.lblSession.string = "\u1000\u1005\u102c\u1038\u1001\u103b\u102d\u1014\u103a: #" + res["resultTX"]["referenceId"];
            _this.lblResult.string = 1 == res["resultTX"]["result"] ? " - \u1021\u1000\u103c\u102e\u1038 " + (res["resultTX"]["dice1"] + res["resultTX"]["dice2"] + res["resultTX"]["dice3"]) + "(" + res["resultTX"]["dice1"] + "-" + res["resultTX"]["dice2"] + "-" + res["resultTX"]["dice3"] + ")" : " - \u1021\u101e\u1031\u1038 " + (res["resultTX"]["dice1"] + res["resultTX"]["dice2"] + res["resultTX"]["dice3"]) + "(" + res["resultTX"]["dice1"] + "-" + res["resultTX"]["dice2"] + "-" + res["resultTX"]["dice3"] + ")";
            _this.lblTotalBetTai.string = Utils_1.default.formatNumber(_this.totalBetTai) + " / " + Utils_1.default.formatNumber(_this.totalRefundTai);
            _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(_this.totalBetXiu) + " / " + Utils_1.default.formatNumber(_this.totalRefundXiu);
            _this.sprDice1.spriteFrame = _this.sfDices[res["resultTX"]["dice1"]];
            _this.sprDice1.node.active = true;
            _this.sprDice2.spriteFrame = _this.sfDices[res["resultTX"]["dice2"]];
            _this.sprDice2.node.active = true;
            _this.sprDice3.spriteFrame = _this.sfDices[res["resultTX"]["dice3"]];
            _this.sprDice3.node.active = true;
            if (1 == res["resultTX"]["result"]) {
              cc.Tween.stopAllByTarget(_this.sprResult_Tai);
              cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
              _this.sprResult_Tai.scale = .6;
              _this.sprResult_Xiu.scale = .6;
              cc.tween(_this.sprResult_Tai).repeatForever(cc.tween().sequence(cc.tween().to(.3, {
                scale: .7
              }), cc.tween().to(.3, {
                scale: .6
              }), cc.tween().to(.3, {
                scale: .5
              }), cc.tween().to(.3, {
                scale: .6
              }))).start();
            } else {
              cc.Tween.stopAllByTarget(_this.sprResult_Tai);
              cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
              _this.sprResult_Tai.scale = .6;
              _this.sprResult_Xiu.scale = .6;
              cc.tween(_this.sprResult_Xiu).repeatForever(cc.tween().sequence(cc.tween().to(.3, {
                scale: .7
              }), cc.tween().to(.3, {
                scale: .6
              }), cc.tween().to(.3, {
                scale: .5
              }), cc.tween().to(.3, {
                scale: .6
              }))).start();
            }
            _this.loadDataPage();
          }
        });
      };
      PopupDetailHistory.prototype.loadDataPage = function() {
        for (var i = 0; i < this.items.length; i++) {
          var idx = (this.page - 1) * this.items.length + i;
          var item = this.items[i];
          item.active = true;
          if (idx < this.historiesTai.length) {
            var itemData = this.historiesTai[idx];
            item.getChildByName("Time").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
            item.getChildByName("Account").getComponent(cc.Label).string = itemData["username"];
            item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
            item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
            item.getChildByName("Jackpot").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["jpAmount"]);
          } else {
            item.getChildByName("Time").getComponent(cc.Label).string = "";
            item.getChildByName("Account").getComponent(cc.Label).string = "";
            item.getChildByName("Refund").getComponent(cc.Label).string = "";
            item.getChildByName("Bet").getComponent(cc.Label).string = "";
            item.getChildByName("Jackpot").getComponent(cc.Label).string = "";
          }
          if (idx < this.historiesXiu.length) {
            var itemData = this.historiesXiu[idx];
            item.getChildByName("Time2").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
            item.getChildByName("Account2").getComponent(cc.Label).string = itemData["username"];
            item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
            item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
            item.getChildByName("Jackpot2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["jpAmount"]);
          } else {
            item.getChildByName("Time2").getComponent(cc.Label).string = "";
            item.getChildByName("Account2").getComponent(cc.Label).string = "";
            item.getChildByName("Refund2").getComponent(cc.Label).string = "";
            item.getChildByName("Bet2").getComponent(cc.Label).string = "";
            item.getChildByName("Jackpot2").getComponent(cc.Label).string = "";
          }
        }
        this.lblPage.string = this.page + "/" + this.totalPage;
      };
      PopupDetailHistory.prototype.actNextPage = function() {
        this.page++;
        this.page > this.totalPage && (this.page = this.totalPage);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actPrevPage = function() {
        this.page--;
        this.page < 1 && (this.page = 1);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actNextSession = function() {
        this.session++;
        if (this.session > TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length - 1].session) {
          this.session = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length - 1].session;
          return;
        }
        this.loadData();
      };
      PopupDetailHistory.prototype.actPrevSession = function() {
        this.session--;
        this.loadData();
      };
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblResult", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundXiu", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupDetailHistory.prototype, "sfDices", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfTai", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfXiu", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice1", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice2", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice3", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprResult", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "sprResult_Tai", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "sprResult_Xiu", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "itemTemplate", void 0);
      PopupDetailHistory = __decorate([ ccclass ], PopupDetailHistory);
      return PopupDetailHistory;
    }(Dialog_1.default);
    exports.default = PopupDetailHistory;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./TaiXiuMini.TaiXiuMiniController": "TaiXiuMini.TaiXiuMiniController"
  } ],
  "TaiXiuMini.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "321ecIaHMtPuqAY23OxAZx1", "TaiXiuMini.PopupHistory");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PopupHistory = function(_super) {
        __extends(PopupHistory, _super);
        function PopupHistory() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.lblPage = null;
          _this.prefab = null;
          _this.scroll = null;
          _this.page = 1;
          _this.maxPage = 1;
          _this.items = new Array();
          _this.historyData = [];
          _this.totalPageLoaded = 0;
          return _this;
        }
        PopupHistory.prototype.onLoad = function() {};
        PopupHistory.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiu");
          this.historyData = [];
          this.totalPageLoaded = 0;
          cc.tween(this.node).to(.5, {
            y: 0
          }, {
            easing: cc.easing.cubicOut
          }).start();
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        };
        PopupHistory.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          cc.tween(this.node).to(.5, {
            y: -100
          }, {
            easing: cc.easing.sineOut
          }).start();
          this.scroll.content.removeAllChildren();
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
        PopupHistory.prototype.loadData = function(isReloadScr) {
          var _this = this;
          void 0 === isReloadScr && (isReloadScr = true);
          App_1.default.instance.showLoading(true);
          Http_1.default.get(Configs_1.default.App.API, {
            c: 100,
            p: this.page,
            un: Configs_1.default.Login.Nickname,
            mt: Configs_1.default.App.MONEY_TYPE,
            txType: 1
          }, function(err, res) {
            App_1.default.instance.showLoading(false);
            if (null != err) return;
            if (!res["success"]) return;
            _this.totalPageLoaded++;
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            _this.loadHistory(res["transactions"]);
          });
        };
        PopupHistory.prototype.loadHistory = function(datahistory) {
          this.scroll.content.removeAllChildren();
          for (var i = 0; i < datahistory.length; i++) {
            var node = cc.instantiate(this.prefab);
            node.parent = this.scroll.content;
            this.setItemData(node, datahistory[i]);
          }
        };
        PopupHistory.prototype.setItemData = function(item, itemData) {
          var index = itemData["index"];
          item.getChildByName("bg").opacity = index % 2 == 0 ? 255 : 0;
          item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["referenceId"];
          item.getChildByName("lblTime").getComponent(cc.Label).string = itemData["timestamp"].replace(" ", "\n");
          item.getChildByName("lblBetDoor").getComponent(cc.Label).string = 1 == itemData["betSide"] ? "\u1021\u1000\u103c\u102e\u1038" : "\u1021\u101e\u1031\u1038";
          item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["resultPhien"];
          item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
          item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalRefund"]);
          item.getChildByName("lblJackpot").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalJp"]);
          item.getChildByName("lblRefund").getComponent(cc.Label).node.color = itemData["totalRefund"] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
          item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalPrize"]);
          item.getChildByName("lblWin").getComponent(cc.Label).node.color = itemData["totalPrize"] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
          item.active = true;
        };
        PopupHistory.prototype.onScrollEvent = function(scrollview, eventType, customEventData) {
          if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM && this.page < this.maxPage) {
            this.page++;
            this.loadData(false);
          }
        };
        __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
        __decorate([ property(cc.Node) ], PopupHistory.prototype, "prefab", void 0);
        __decorate([ property(cc.ScrollView) ], PopupHistory.prototype, "scroll", void 0);
        PopupHistory = __decorate([ ccclass ], PopupHistory);
        return PopupHistory;
      }(Dialog_1.default);
      taixiumini.PopupHistory = PopupHistory;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PopupHistory;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65ed7s2AEZFp4FEqaIOgiUM", "TaiXiuMini.PopupHonors");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var ScrollViewControl_1 = require("../../../Lobby/LobbyScript/Script/common/ScrollViewControl");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PopupHonors = function(_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.itemTemplate = null;
          _this.sprRank = [];
          _this.items = new Array();
          _this.scrView = null;
          _this.dataList = [];
          return _this;
        }
        PopupHonors.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiu");
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
          null != this.itemTemplate && (this.itemTemplate.active = false);
        };
        PopupHonors.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        };
        PopupHonors.prototype._onShowed = function() {
          _super.prototype._onShowed.call(this);
          this.loadData();
        };
        PopupHonors.prototype.loadData = function() {
          var _this = this;
          App_1.default.instance.showLoading(true);
          Http_1.default.get(Configs_1.default.App.API, {
            c: 101,
            mt: Configs_1.default.App.MONEY_TYPE,
            txType: 1
          }, function(err, res) {
            App_1.default.instance.showLoading(false);
            if (null != err) return;
            if (res["success"]) {
              _this.dataList = res["topTX"].slice();
              var cb = function(item, itemData) {
                item.getChildByName("bg").opacity = item["itemID"] % 2 == 0 ? 255 : 0;
                item.getChildByName("lblRank").getComponent(cc.Label).string = (item["itemID"] + 1).toString();
                item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
                if (item["itemID"] < 3) {
                  item.getChildByName("ic_rank").active = true;
                  item.getChildByName("lblRank").active = false;
                  item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = _this.sprRank[itemData["index"]];
                } else {
                  item.getChildByName("ic_rank").active = false;
                  item.getChildByName("lblRank").active = true;
                }
                item.active = true;
              };
              _this.scrView.setDataList(cb, _this.dataList);
            }
          });
        };
        __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
        __decorate([ property([ cc.SpriteFrame ]) ], PopupHonors.prototype, "sprRank", void 0);
        __decorate([ property(ScrollViewControl_1.default) ], PopupHonors.prototype, "scrView", void 0);
        PopupHonors = __decorate([ ccclass ], PopupHonors);
        return PopupHonors;
      }(Dialog_1.default);
      taixiumini.PopupHonors = PopupHonors;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PopupHonors;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/ScrollViewControl": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini.PopupSoiCau": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62d139IuXBFBaudwuNL1Dq5", "TaiXiuMini.PopupSoiCau");
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
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PopupSoiCau = function(_super) {
        __extends(PopupSoiCau, _super);
        function PopupSoiCau() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.lineTemplate = null;
          _this.iconTaiTemplate = null;
          _this.iconXiuTemplate = null;
          _this.iconXX1Template = null;
          _this.iconXX2Template = null;
          _this.iconXX3Template = null;
          _this.iconNumberTaiTemplate = null;
          _this.iconNumberXiuTemplate = null;
          _this.page1 = null;
          _this.lblLastSession = null;
          _this.xx1Draw = null;
          _this.xx2Draw = null;
          _this.xx3Draw = null;
          _this.xx123Draw = null;
          _this.page2 = null;
          _this.lblTai1 = null;
          _this.lblTai2 = null;
          _this.lblXiu1 = null;
          _this.lblXiu2 = null;
          _this.contentDraw = null;
          return _this;
        }
        PopupSoiCau.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiu");
          this.page1.active = false;
          this.page2.active = false;
          this.lineTemplate.parent.active = false;
        };
        PopupSoiCau.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          this.page1.active = false;
          this.page2.active = false;
        };
        PopupSoiCau.prototype._onShowed = function() {
          _super.prototype._onShowed.call(this);
          this.drawPage1();
          this.page1.active = true;
          this.page2.active = false;
        };
        PopupSoiCau.prototype.toggleXX1 = function(target) {
          this.xx1Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.toggleXX2 = function(target) {
          this.xx2Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.toggleXX3 = function(target) {
          this.xx3Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.togglePage = function() {
          this.page1.active = !this.page1.active;
          this.page2.active = !this.page1.active;
          this.page1.active ? this.drawPage1() : this.drawPage2();
        };
        PopupSoiCau.prototype.drawPage1 = function() {
          var data = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.slice();
          data.length > 21 && data.splice(0, data.length - 21);
          var last = data[data.length - 1];
          var lastDices = last.dices;
          var lastScore = lastDices[0] + lastDices[1] + lastDices[2];
          this.lblLastSession.string = "\u1014\u1031\u102c\u1000\u103a\u1006\u102f\u1036\u1038\u1010\u103d\u1031\u1037\u1006\u102f\u1036\u1019\u103e\u102f: (#" + last.session + ")  " + (lastScore >= 11 ? "\u1021\u1000\u103c\u102e\u1038" : "\u1021\u101e\u1031\u1038") + "  " + lastScore + "(" + lastDices[0] + "-" + lastDices[1] + "-" + lastDices[2] + ")";
          var endPosX = 337.215;
          var startPosY = -274.135;
          var startPosY123 = -13.907;
          this.xx1Draw.removeAllChildren();
          this.xx2Draw.removeAllChildren();
          this.xx3Draw.removeAllChildren();
          this.xx123Draw.removeAllChildren();
          var _i = 0;
          var spacingX = 31.83;
          var spacingY = 31;
          for (var i = data.length - 1; i >= 0; i--) {
            var dices = data[i].dices;
            var score = dices[0] + dices[1] + dices[2];
            var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
            var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
            var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
            var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + spacingY / 3 * (score - 3));
            var iconXX1 = cc.instantiate(this.iconXX1Template);
            iconXX1.parent = this.xx1Draw;
            iconXX1.setPosition(startPosXX1);
            var iconXX2 = cc.instantiate(this.iconXX2Template);
            iconXX2.parent = this.xx2Draw;
            iconXX2.setPosition(startPosXX2);
            var iconXX3 = cc.instantiate(this.iconXX3Template);
            iconXX3.parent = this.xx3Draw;
            iconXX3.setPosition(startPosXX3);
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.xx123Draw;
            iconXX123.setPosition(startPosXX123);
            if (_i > 0) {
              dices = data[i + 1].dices;
              score = dices[0] + dices[1] + dices[2];
              var endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
              var endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
              var endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
              var endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + spacingY / 3 * (score - 3));
              var line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx1Draw;
              line.width = Utils_1.default.v2Distance(startPosXX1, endPosXX1);
              line.setPosition(startPosXX1);
              line.angle = Utils_1.default.v2Degrees(startPosXX1, endPosXX1);
              line.color = cc.Color.BLACK.fromHEX("#c7452b");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx2Draw;
              line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
              line.setPosition(startPosXX2);
              line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
              line.color = cc.Color.BLACK.fromHEX("#9fd100");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx3Draw;
              line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
              line.setPosition(startPosXX3);
              line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
              line.color = cc.Color.BLACK.fromHEX("#3980d8");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx123Draw;
              line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
              line.setPosition(startPosXX123);
              line.angle = Utils_1.default.v2Degrees(startPosXX123, endPosXX123);
              line.color = cc.Color.BLACK.fromHEX("#fdfdfb");
              line.zIndex = -1;
            }
            _i++;
          }
        };
        PopupSoiCau.prototype.drawPage2 = function() {
          var startPosX = -295.979;
          var startPosY = 113.257;
          var spacingX = 32.5;
          var spacingY = 32;
          this.contentDraw.removeAllChildren();
          var data = [];
          var curData = [];
          var count = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length;
          var countTai = 0;
          var countXiu = 0;
          if (count > 1) {
            var dices = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[0].dices;
            var score = dices[0] + dices[1] + dices[2];
            var isTai = score >= 11;
            var maxItem = 5;
            for (var i = 0; i < count; i++) {
              dices = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[i].dices;
              score = dices[0] + dices[1] + dices[2];
              var _isTai = score >= 11;
              if (_isTai !== isTai) {
                curData.length > maxItem && curData.splice(0, curData.length - maxItem);
                data.push(curData);
                isTai ? countTai += curData.length : countXiu += curData.length;
                isTai = _isTai;
                curData = [];
                curData.push(score);
              } else curData.push(score);
              if (i === count - 1) {
                curData.length > maxItem && curData.splice(0, curData.length - maxItem);
                data.push(curData);
                isTai ? countTai += curData.length : countXiu += curData.length;
              }
            }
          }
          data.length > 20 && data.splice(0, data.length - 20);
          this.lblTai1.string = countTai + "";
          this.lblXiu1.string = countXiu + "";
          for (var i_1 = 0; i_1 < data.length; i_1++) for (var j = 0; j < data[i_1].length; j++) {
            var score_1 = data[i_1][j];
            var icon = null;
            icon = score_1 >= 11 ? cc.instantiate(this.iconNumberTaiTemplate) : cc.instantiate(this.iconNumberXiuTemplate);
            icon.parent = this.contentDraw;
            icon.setPosition(cc.v2(startPosX + spacingX * i_1, startPosY - spacingY * j));
            icon.children[0].getComponent(cc.Label).string = "" + score_1;
          }
          startPosX = -295.979;
          startPosY = -127.113;
          var column = 0;
          var row = 0;
          var countTai = 0;
          var countXiu = 0;
          var data = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.slice();
          data.length > 100 && data.splice(0, data.length - 100);
          for (var i = 0; i < data.length; i++) {
            var score = data[i].dices[0] + data[i].dices[1] + data[i].dices[2];
            score >= 11 ? countTai++ : countXiu++;
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.contentDraw;
            iconXX123.setPosition(startPosX + spacingX * column, startPosY - spacingY * row - 2);
            row++;
            if (row >= 5) {
              row = 0;
              column++;
            }
          }
          this.lblTai2.string = countTai + "";
          this.lblXiu2.string = countXiu + "";
        };
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "lineTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconTaiTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXiuTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX1Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX2Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX3Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconNumberTaiTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconNumberXiuTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblLastSession", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx1Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx2Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx3Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx123Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page2", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai2", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu2", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "contentDraw", void 0);
        PopupSoiCau = __decorate([ ccclass ], PopupSoiCau);
        return PopupSoiCau;
      }(Dialog_1.default);
      taixiumini.PopupSoiCau = PopupSoiCau;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PopupSoiCau;
    cc._RF.pop();
  }, {
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./TaiXiuMini.TaiXiuMiniController": "TaiXiuMini.TaiXiuMiniController"
  } ],
  "TaiXiuMini.PopupThanhDu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4cbaZlzz5C24Im4AdHMjCb", "TaiXiuMini.PopupThanhDu");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PopupThanhDu = function(_super) {
        __extends(PopupThanhDu, _super);
        function PopupThanhDu() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.sprTabNormal = null;
          _this.sprTabActive = null;
          _this.tabs = null;
          _this.childTabs = null;
          _this.itemTemplate = null;
          _this.lblDate = null;
          _this.selectedTab = 0;
          _this.selectedChildTab = 0;
          _this.date = new Date();
          _this.items = new Array();
          return _this;
        }
        PopupThanhDu.prototype.start = function() {
          var _this = this;
          var _loop_1 = function(i) {
            var tab = this_1.tabs.children[i];
            tab.on("click", function() {
              _this.selectedTab = i;
              _this.selectedChildTab = 0;
              _this.date = new Date();
              _this.updateTabSpriteFrame();
              _this.loadData();
            });
          };
          var this_1 = this;
          for (var i = 0; i < this.tabs.childrenCount; i++) _loop_1(i);
          var _loop_2 = function(i) {
            var tab = this_2.childTabs.children[i];
            tab.on("click", function() {
              _this.selectedChildTab = i;
              _this.updateTabSpriteFrame();
              _this.loadData();
            });
          };
          var this_2 = this;
          for (var i = 0; i < this.childTabs.childrenCount; i++) _loop_2(i);
        };
        PopupThanhDu.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        };
        PopupThanhDu.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiu");
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
          null != this.itemTemplate && (this.itemTemplate.active = false);
        };
        PopupThanhDu.prototype._onShowed = function() {
          _super.prototype._onShowed.call(this);
          this.selectedTab = 0;
          this.selectedChildTab = 0;
          this.updateTabSpriteFrame();
          this.loadData();
        };
        PopupThanhDu.prototype.actNext = function() {
          0 === this.selectedTab ? this.date.setDate(this.date.getDate() + 1) : this.date.setMonth(this.date.getMonth() + 1);
          this.loadData();
        };
        PopupThanhDu.prototype.actPrev = function() {
          0 === this.selectedTab ? this.date.setDate(this.date.getDate() - 1) : this.date.setMonth(this.date.getMonth() - 1);
          this.loadData();
        };
        PopupThanhDu.prototype.updateTabSpriteFrame = function() {
          for (var i = 0; i < this.tabs.childrenCount; i++) {
            var tab = this.tabs.children[i];
            tab.getComponent(cc.Sprite).spriteFrame = this.selectedTab == i ? this.sprTabActive : this.sprTabNormal;
          }
          for (var i = 0; i < this.childTabs.childrenCount; i++) {
            var tab = this.childTabs.children[i];
            tab.getComponent(cc.Sprite).spriteFrame = this.selectedChildTab == i ? this.sprTabActive : this.sprTabNormal;
          }
        };
        PopupThanhDu.prototype.loadData = function() {
          var _this = this;
          App_1.default.instance.showLoading(true);
          var typeTop = 0 === this.selectedChildTab ? 1 : 0;
          var date = 0 === this.selectedTab ? Utils_1.default.dateToYYYYMMdd(this.date) : Utils_1.default.dateToYYYYMM(this.date);
          this.lblDate.string = date;
          var params = 0 === this.selectedTab ? {
            c: 103,
            date: date,
            type: typeTop,
            txType: 1
          } : {
            c: 103,
            month: date,
            type: typeTop,
            txType: 1
          };
          Http_1.default.get(Configs_1.default.App.API, params, function(err, res) {
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
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
              var item = _this.items[i_1];
              if (i_1 < res["results"].length) {
                var itemData = res["results"][i_1];
                item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                item.getChildByName("no").getComponent(cc.Label).string = (i_1 + 1).toString();
                item.getChildByName("account").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("count").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["number"]);
                item.getChildByName("winlose").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalMoney"]);
                item.getChildByName("session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
                item.getChildByName("award").getComponent(cc.Label).string = itemData["prize"];
                item.active = true;
              } else item.active = false;
            }
          });
        };
        __decorate([ property(cc.SpriteFrame) ], PopupThanhDu.prototype, "sprTabNormal", void 0);
        __decorate([ property(cc.SpriteFrame) ], PopupThanhDu.prototype, "sprTabActive", void 0);
        __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "tabs", void 0);
        __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "childTabs", void 0);
        __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "itemTemplate", void 0);
        __decorate([ property(cc.Label) ], PopupThanhDu.prototype, "lblDate", void 0);
        PopupThanhDu = __decorate([ ccclass ], PopupThanhDu);
        return PopupThanhDu;
      }(Dialog_1.default);
      taixiumini.PopupThanhDu = PopupThanhDu;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PopupThanhDu;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini.TaiXiuMiniController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61a68KC+wNE6ptrR7XUb9CZ", "TaiXiuMini.TaiXiuMiniController");
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
    exports.SoundManager = void 0;
    var Configs_1 = require("../../../Loading/src/Configs");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var SPUtils_1 = require("../../../Lobby/LobbyScript/Script/common/SPUtils");
    var Tween_1 = require("../../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var TaiXiuDouble_Controller_1 = require("../src/TaiXiuDouble.Controller");
    var TaiXiuMini_Cmd_1 = require("./TaiXiuMini.Cmd");
    var TaiXiuMini_PanelChat_1 = require("./TaiXiuMini.PanelChat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BetDoor;
    (function(BetDoor) {
      BetDoor[BetDoor["None"] = 0] = "None";
      BetDoor[BetDoor["Tai"] = 1] = "Tai";
      BetDoor[BetDoor["Xiu"] = 2] = "Xiu";
    })(BetDoor || (BetDoor = {}));
    var audio_clip;
    (function(audio_clip) {
      audio_clip[audio_clip["WIN"] = 0] = "WIN";
      audio_clip[audio_clip["DICE"] = 1] = "DICE";
      audio_clip[audio_clip["CLOCK"] = 2] = "CLOCK";
    })(audio_clip || (audio_clip = {}));
    var SoundManager = function() {
      function SoundManager() {
        this.nodeSelf = null;
        this.taixiuView = null;
        this.effSound = null;
        this.listAudio = [];
      }
      SoundManager.prototype.playAudioEffect = function(indexAudio) {
        if (this.taixiuView.active && SPUtils_1.default.getSoundVolumn() > 0) {
          this.effSound.clip = this.listAudio[indexAudio];
          this.effSound.play();
        }
      };
      __decorate([ property(cc.Node) ], SoundManager.prototype, "nodeSelf", void 0);
      __decorate([ property(cc.Node) ], SoundManager.prototype, "taixiuView", void 0);
      __decorate([ property(cc.AudioSource) ], SoundManager.prototype, "effSound", void 0);
      __decorate([ property([ cc.AudioClip ]) ], SoundManager.prototype, "listAudio", void 0);
      SoundManager = __decorate([ ccclass("TaiXiuMini.TaiXiuMiniController.SoundManager") ], SoundManager);
      return SoundManager;
    }();
    exports.SoundManager = SoundManager;
    var TaiXiuMiniController = function(_super) {
      __extends(TaiXiuMiniController, _super);
      function TaiXiuMiniController() {
        var _this_1 = null !== _super && _super.apply(this, arguments) || this;
        _this_1.scrollChat = null;
        _this_1.chatNhanh = null;
        _this_1.contentChatNhanh = null;
        _this_1.bgSpine = null;
        _this_1.bgSpinez = null;
        _this_1.gamePlay = null;
        _this_1.sprDices = new Array();
        _this_1.sprFrameTai = null;
        _this_1.sprFrameXiu = null;
        _this_1.sprFrameBtnNan = null;
        _this_1.sprFrameBtnNan2 = null;
        _this_1.lblSession = null;
        _this_1.lblRemainTime = null;
        _this_1.lblRemainTime2 = null;
        _this_1.lblScore = null;
        _this_1.lblUserTai = null;
        _this_1.lblUserXiu = null;
        _this_1.lblTotalBetTai = null;
        _this_1.lblTotalBetXiu = null;
        _this_1.lblBetTai = null;
        _this_1.lblBetXiu = null;
        _this_1.lblbtnbettai = null;
        _this_1.lblbtnbetxiu = null;
        _this_1.lblBetedTai = null;
        _this_1.lblBetedXiu = null;
        _this_1.dice1 = null;
        _this_1.dice2 = null;
        _this_1.dice3 = null;
        _this_1.bowl = null;
        _this_1.tai = null;
        _this_1.xiu = null;
        _this_1.btnHistories = null;
        _this_1.nodePanelChat = null;
        _this_1.layoutBet = null;
        _this_1.layoutBet1 = null;
        _this_1.buttonsBet1 = new Array();
        _this_1.lblToast = null;
        _this_1.lblWinCash = null;
        _this_1.btnNan = null;
        _this_1.popupContainer = null;
        _this_1.animJP = null;
        _this_1.lbJackPot = null;
        _this_1.lbJackPotTai = null;
        _this_1.lbJackPotXiu = null;
        _this_1.fontTime = [];
        _this_1.soundManager = null;
        _this_1.popups = [];
        _this_1.popupsPr = [];
        _this_1.isBetting = false;
        _this_1.remainTime = 0;
        _this_1.canBet = true;
        _this_1.betedTai = 0;
        _this_1.betedXiu = 0;
        _this_1.referenceId = 0;
        _this_1.betingValue = -1;
        _this_1.betingDoor = BetDoor.None;
        _this_1.isOpenBowl = false;
        _this_1.lastWinCash = 0;
        _this_1.lastScore = 0;
        _this_1.isNan = false;
        _this_1.histories = [];
        _this_1.isCanChat = true;
        _this_1.panelChat = null;
        _this_1.maxBetValue = 999999999;
        _this_1.listBets = [ 1e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 5e7 ];
        _this_1.bowlStartPos = cc.v2(-255.042, 63.604);
        _this_1.currentBtnBet = null;
        _this_1.arrTimeoutDice = [];
        _this_1.popupHonor = null;
        _this_1.popupHistory = null;
        _this_1.popupGuide = null;
        _this_1.popupThanhDu = null;
        _this_1.popupSoiCau = null;
        _this_1.popupDetailSession = null;
        _this_1.sessionId = 0;
        _this_1.jackpotData = null;
        _this_1.resultData = null;
        return _this_1;
      }
      TaiXiuMiniController_1 = TaiXiuMiniController;
      TaiXiuMiniController.prototype.onLoad = function() {
        TaiXiuMiniController_1.instance = this;
        this.layoutBet.y = 28;
        var self = this;
        var _loop_1 = function() {
          var node = this_1.contentChatNhanh.children[i];
          node.on("click", function() {
            self.sendChat(node.children[0].getComponent(cc.Label).string);
            self.scrollChat.active = true;
            self.chatNhanh.active = false;
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) _loop_1();
      };
      TaiXiuMiniController.prototype.toggleChatNhanh = function() {
        if (false == this.chatNhanh.active) {
          this.chatNhanh.active = true;
          this.scrollChat.active = false;
        } else {
          this.chatNhanh.active = false;
          this.scrollChat.active = true;
        }
      };
      TaiXiuMiniController.prototype.onDisable = function() {
        for (var i = 0; i < this.arrTimeoutDice.length; i++) clearTimeout(this.arrTimeoutDice[i]);
        this.arrTimeoutDice = [];
      };
      TaiXiuMiniController.prototype.getAnimationDiceStart = function(dice) {
        var anim = "";
        1 == dice ? anim = "#1 WHITE_F1" : 2 == dice ? anim = "#1 WHITE_F2" : 3 == dice ? anim = "#1 WHITE_F3" : 4 == dice ? anim = "#1 WHITE_F4" : 5 == dice ? anim = "#1 WHITE_F5" : 6 == dice && (anim = "#1 WHITE_F6");
        return anim;
      };
      TaiXiuMiniController.prototype.getAnimationDiceEnd = function(dice) {
        var anim = "";
        1 == dice ? anim = "#1 END_F1" : 2 == dice ? anim = "#1 END_F2" : 3 == dice ? anim = "#1 END_F3" : 4 == dice ? anim = "#1 END_F4" : 5 == dice ? anim = "#1 END_F5" : 6 == dice && (anim = "#1 END_F6");
        return anim;
      };
      TaiXiuMiniController.prototype.onFocusInEditor = function() {};
      TaiXiuMiniController.prototype.setupTimeRunInBg = function() {
        var _this_1 = this;
        cc.game.on(cc.game.EVENT_SHOW, function() {
          if (_this_1.node.active) {
            null == _this_1.arrTimeoutDice && (_this_1.arrTimeoutDice = []);
            for (var i = 0; i < _this_1.arrTimeoutDice.length; i++) clearTimeout(_this_1.arrTimeoutDice[i]);
            var parent = _this_1.lblToast.node.parent;
            parent.stopAllActions();
            parent.active = false;
            parent.opacity = 0;
            _this_1.arrTimeoutDice = [];
          }
        });
      };
      TaiXiuMiniController.prototype.start = function() {
        var _this_1 = this;
        this.setupTimeRunInBg();
        MiniGameNetworkClient_1.default.getInstance().addListener(function(data) {
          if (!_this_1.node.active) return;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case TaiXiuMini_Cmd_1.default.Code.GAME_INFO:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveGameInfo(data);
            _this_1.stopWin();
            _this_1.bowl.active = false;
            if (res.bettingState) {
              _this_1.isBetting = true;
              _this_1.dice1.node.active = false;
              _this_1.dice2.node.active = false;
              _this_1.dice3.node.active = false;
              _this_1.lblRemainTime.node.active = true;
              _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
              _this_1.lblRemainTime2.node.parent.active = false;
              _this_1.lblRemainTime2.node.active = false;
              _this_1.lblScore.node.parent.active = false;
              _this_1.lblScore.node.active = false;
            } else {
              _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
              _this_1.isBetting = false;
              _this_1.dice1.node.active = true;
              _this_1.dice1.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice1), false);
              _this_1.dice2.node.active = true;
              _this_1.dice2.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice2), false);
              _this_1.dice3.node.active = true;
              _this_1.dice3.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice3), false);
              _this_1.lblRemainTime.node.active = false;
              _this_1.lblRemainTime2.node.parent.active = true;
              _this_1.lblRemainTime2.node.active = true;
              _this_1.lblRemainTime2.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.showResult();
            }
            if (res.bettingState) {
              Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, .3);
              Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, .3);
            } else {
              14 == res.remainTime && _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_refund"));
              var chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
              _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(chipEnd);
              _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(chipEnd);
            }
            Tween_1.default.numberTo(_this_1.lbJackPotTai, 10 * (res.jpTai + res.jpXiu), 1);
            Tween_1.default.numberTo(_this_1.lbJackPotXiu, res.jpXiu, 1);
            _this_1.betedTai = res.betTai;
            _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
            _this_1.betedXiu = res.betXiu;
            _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
            _this_1.referenceId = res.referenceId;
            _this_1.lblSession.string = "#" + res.referenceId;
            _this_1.sessionId = res.referenceId;
            _this_1.remainTime = res.remainTime;
            break;

           case TaiXiuMini_Cmd_1.default.Code.UPDATE_TIME:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveUpdateTime(data);
            if (res.bettingState) {
              60 == res.remainTime && _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_new_session"));
              _this_1.isBetting = true;
              _this_1.lblRemainTime.node.active = true;
              _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
              _this_1.lblRemainTime2.node.parent.active = false;
              _this_1.lblRemainTime2.node.active = false;
              _this_1.lblScore.node.parent.active = false;
              _this_1.lblScore.node.active = false;
            } else {
              res.remainTime > 15 ? res.remainTime -= 15 : res.remainTime = 0;
              _this_1.isBetting = false;
              _this_1.lblRemainTime2.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.lblbtnbetxiu.active = true;
              _this_1.lblbtnbettai.active = true;
              _this_1.lblBetTai.string = "";
              _this_1.lblBetXiu.string = "";
              if (res.remainTime < 5 && _this_1.isNan && !_this_1.isOpenBowl) {
                _this_1.bowl.active = false;
                _this_1.showResult();
                _this_1.showWinCash();
                _this_1.isOpenBowl = true;
              }
            }
            if (res.bettingState) {
              Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, .3);
              Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, .3);
            } else {
              14 == res.remainTime && _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_refund"));
              var chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
              _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(chipEnd);
              _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(chipEnd);
            }
            _this_1.lblUserTai.string = +Utils_1.default.formatNumber(res.numBetTai) + "";
            _this_1.lblUserXiu.string = +Utils_1.default.formatNumber(res.numBetXiu) + "";
            break;

           case TaiXiuMini_Cmd_1.default.Code.DICES_RESULT:
            _this_1.lblRemainTime.node.active = true;
            _this_1.lblRemainTime2.node.parent.active = false;
            _this_1.arrTimeoutDice.push(setTimeout(function() {
              var self = _this_1;
              var res = new TaiXiuMini_Cmd_1.default.ReceiveDicesResult(data);
              _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
              _this_1.lblRemainTime.node.active = false;
              _this_1.arrTimeoutDice.push(setTimeout(function() {
                self.dice1.node.active = true;
                self.dice1.setAnimation(0, self.getAnimationDiceStart(res.dice1), false);
              }, 0 * Math.random()));
              _this_1.arrTimeoutDice.push(setTimeout(function() {
                self.dice2.node.active = true;
                self.dice2.setAnimation(0, self.getAnimationDiceStart(res.dice2), false);
              }, 0 * Math.random()));
              _this_1.arrTimeoutDice.push(setTimeout(function() {
                self.dice3.node.active = true;
                self.dice3.setAnimation(0, self.getAnimationDiceStart(res.dice3), false);
              }, 0 * Math.random()));
              _this_1.arrTimeoutDice.push(setTimeout(function() {
                if (self.isNan) {
                  self.bowl.setPosition(self.bowlStartPos);
                  self.bowl.active = true;
                }
              }, 1400));
              _this_1.dice3.setCompleteListener(function() {
                if (!_this_1.isNan) {
                  _this_1.lblRemainTime2.node.parent.active = true;
                  _this_1.lblRemainTime2.node.active = true;
                  _this_1.showResult();
                  null != _this_1.jackpotData && _this_1.handleJackpotWin(_this_1.jackpotData);
                }
              });
              _this_1.histories.length >= 100 && _this_1.histories.slice(0, 1);
              _this_1.histories.push({
                session: _this_1.referenceId,
                dices: [ res.dice1, res.dice2, res.dice3 ]
              });
              _this_1.arrTimeoutDice.push(setTimeout(function() {
                _this_1.node && _this_1.soundManager.playAudioEffect(audio_clip.DICE);
              }, 500));
            }, 2e3));
            break;

           case TaiXiuMini_Cmd_1.default.Code.REFUND:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveRefund(data);
            var refund = res.moneyRefund;
            _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_refund1"));
            break;

           case TaiXiuMini_Cmd_1.default.Code.RESULT:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveResult(data);
            _this_1.resultData = res;
            null == _this_1.jackpotData && _this_1.handleResult();
            break;

           case TaiXiuMini_Cmd_1.default.Code.NEW_GAME:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveNewGame(data);
            Utils_1.default.Log("NEW GAME TX:", res);
            _this_1.dice1.node.active = false;
            _this_1.dice2.node.active = false;
            _this_1.dice3.node.active = false;
            for (var i = 0; i < _this_1.arrTimeoutDice.length; i++) clearTimeout(_this_1.arrTimeoutDice[i]);
            _this_1.arrTimeoutDice = [];
            _this_1.lblTotalBetTai.string = "0";
            _this_1.lblTotalBetXiu.string = "0";
            _this_1.lblBetedTai.string = "0";
            _this_1.lblBetedXiu.string = "0";
            _this_1.lblUserTai.string = "0";
            _this_1.lblUserXiu.string = "0";
            _this_1.referenceId = res.referenceId;
            _this_1.lblSession.string = "#" + res.referenceId;
            _this_1.sessionId = res.referenceId;
            _this_1.betingValue = -1;
            _this_1.betingDoor = BetDoor.None;
            _this_1.betedTai = 0;
            _this_1.betedXiu = 0;
            _this_1.isOpenBowl = false;
            _this_1.lastWinCash = 0;
            _this_1.jackpotData = null;
            _this_1.resultData = null;
            Tween_1.default.numberTo(_this_1.lbJackPotTai, 10 * (res["jpTai"] + res["jpXiu"]), 1);
            Tween_1.default.numberTo(_this_1.lbJackPotXiu, res["jpXiu"], 1);
            _this_1.stopWin();
            break;

           case TaiXiuMini_Cmd_1.default.Code.HISTORIES:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveHistories(data);
            var his = res.data.split(",");
            for (var i = 0; i < his.length; i++) _this_1.histories.push({
              session: _this_1.referenceId - his.length / 3 + parseInt("" + (i + 1) / 3) + (_this_1.isBetting ? 0 : 1),
              dices: [ parseInt(his[i]), parseInt(his[++i]), parseInt(his[++i]) ]
            });
            _this_1.updateBtnHistories();
            break;

           case TaiXiuMini_Cmd_1.default.Code.LOG_CHAT:
           case TaiXiuMini_Cmd_1.default.Code.SCRIBE_CHAT:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveLogChat(data);
            var msgs = JSON.parse(res.message);
            for (var i = 0; i < msgs.length; i++) _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
            _this_1.panelChat.scrollToBottom();
            break;

           case TaiXiuMini_Cmd_1.default.Code.SEND_CHAT:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveSendChat(data);
            switch (res.error) {
             case 0:
              _this_1.panelChat.addMessage(res.nickname, res.message);
              break;

             case 2:
              _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error"));
              break;

             case 3:
              _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error1"));
              break;

             case 4:
              _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error2"));
              break;

             default:
              _this_1.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error3"));
            }
            break;

           case TaiXiuMini_Cmd_1.default.Code.BET:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveBet(data);
            switch (res.result) {
             case 0:
              switch (_this_1.betingDoor) {
               case BetDoor.Tai:
                _this_1.betedTai += _this_1.betingValue;
                _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                break;

               case BetDoor.Xiu:
                _this_1.betedXiu += _this_1.betingValue;
                _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
              }
              Configs_1.default.Login.Coin = res.currentMoney;
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
              _this_1.betingValue = -1;
              _this_1.showToast(App_1.default.instance.getTextLang("txt_bet_success"));
              break;

             case 2:
              _this_1.betingValue = -1;
              _this_1.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
              break;

             case 3:
              _this_1.betingValue = -1;
              _this_1.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
              break;

             case 4:
              _this_1.betingValue = -1;
              _this_1.showToast(App_1.default.instance.getTextLang("txt_bet_error7"));
              break;

             default:
              _this_1.betingValue = -1;
              _this_1.showToast(App_1.default.instance.getTextLang("txt_bet_error2"));
            }
            break;

           case TaiXiuMini_Cmd_1.default.Code.JACKPOT:
            var res = new TaiXiuMini_Cmd_1.default.ReceiveJackpotWin(data);
            Utils_1.default.Log("JACKPOT WIN:", JSON.stringify(res));
            _this_1.jackpotData = res;
          }
        }, this);
        var _loop_2 = function(i) {
          var btn = this_2.buttonsBet1[i];
          0 == i && (this_2.currentBtnBet = btn.node);
          var value = this_2.listBets[i];
          var strValue = value + "";
          value >= 1e6 ? strValue = value / 1e6 + "M" : value >= 1e3 && (strValue = value / 1e3 + "K");
          btn.node.on("click", function() {
            App_1.default.instance.showBgMiniGame("TaiXiu");
            if (_this_1.betingDoor === BetDoor.None) return;
            null != _this_1.currentBtnBet && (_this_1.currentBtnBet.color = cc.Color.WHITE);
            _this_1.currentBtnBet = btn.node;
            _this_1.currentBtnBet.color = new cc.Color().fromHEX("#FFBE34");
            var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
            var number = Utils_1.default.stringToInt(lblBet.string) + value;
            number > _this_1.maxBetValue && (number = _this_1.maxBetValue);
            lblBet.string = Utils_1.default.formatNumber(number);
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.buttonsBet1.length; i++) _loop_2(i);
        this.bowl.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var pos = _this_1.bowl.position;
          pos.x += event.getDeltaX();
          pos.y += event.getDeltaY();
          _this_1.bowl.position = pos;
          var distance = Utils_1.default.v2Distance(new cc.Vec2(pos.x, pos.y), _this_1.bowlStartPos);
          if (Math.abs(distance) > 400) {
            _this_1.bowl.active = false;
            _this_1.isOpenBowl = true;
            _this_1.showResult();
            _this_1.showWinCash();
          }
        }, this);
      };
      TaiXiuMiniController.prototype.show = function() {
        App_1.default.instance.showGameMini("TaiXiu");
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(.5, {
          y: -363
        }, {
          easing: cc.easing.sineOut
        }).start();
        this.lblToast.node.parent.active = false;
        this.lblWinCash.node.active = false;
        this.bowl.active = false;
        this.dice1.node.active = false;
        this.dice2.node.active = false;
        this.dice3.node.active = false;
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendScribe());
        this.showChat();
      };
      TaiXiuMiniController.prototype.showChat = function() {
        this.panelChat = this.nodePanelChat.getComponent(TaiXiuMini_PanelChat_1.default);
        this.panelChat.show(true);
      };
      TaiXiuMiniController.prototype.dismiss = function() {
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        if (null != this.panelChat) {
          this.panelChat.show(false);
          MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendUnScribe());
        }
      };
      TaiXiuMiniController.prototype.actClose = function() {
        TaiXiuDouble_Controller_1.default.instance.dismiss();
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = true;
      };
      TaiXiuMiniController.prototype.actChat = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.panelChat.show(!this.panelChat.node.active);
      };
      TaiXiuMiniController.prototype.actBetTai = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (!this.isBetting) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
          return;
        }
        if (this.betingValue >= 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        if (this.betedXiu > 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error4"));
          return;
        }
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = false;
        this.betingDoor = BetDoor.Tai;
        this.lblBetTai.string = "0";
        this.lblBetXiu.string = "";
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(.5, {
          y: -363
        }, {
          easing: cc.easing.sineOut
        }).start();
        this.layoutBet1.active = true;
      };
      TaiXiuMiniController.prototype.actBetXiu = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (!this.isBetting) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
          return;
        }
        if (this.betingValue >= 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        if (this.betedTai > 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error4"));
          return;
        }
        this.lblbtnbetxiu.active = false;
        this.lblbtnbettai.active = true;
        this.betingDoor = BetDoor.Xiu;
        this.lblBetXiu.string = "0";
        this.lblBetTai.string = "";
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(.5, {
          y: -363
        }, {
          easing: cc.easing.sineOut
        }).start();
        this.layoutBet1.active = true;
      };
      TaiXiuMiniController.prototype.actOtherNumber = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.layoutBet1.active = false;
      };
      TaiXiuMiniController.prototype.actAgree = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingValue >= 0 || !this.canBet) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        this.betingValue = Utils_1.default.stringToInt(lblBet.string);
        this.betingDoor = this.betingDoor;
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendBet(this.referenceId, this.betingValue, this.betingDoor == BetDoor.Tai ? 1 : 0, this.remainTime));
        lblBet.string = "0";
        this.canBet = false;
        this.scheduleOnce(function() {
          this.canBet = true;
        }, 1);
      };
      TaiXiuMiniController.prototype.actCancel = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.lblBetXiu.string = "";
        this.lblBetTai.string = "";
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = true;
        this.betingDoor = BetDoor.None;
        this.layoutBet.active = false;
        this.layoutBet.y = 28;
      };
      TaiXiuMiniController.prototype.actBtnGapDoi = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string) + Configs_1.default.Login.Coin;
        number > this.maxBetValue && (number = this.maxBetValue);
        lblBet.string = Utils_1.default.formatNumber(number);
      };
      TaiXiuMiniController.prototype.actBtnDelete = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = "" + Utils_1.default.stringToInt(lblBet.string);
        number = number.substring(0, number.length - 1);
        number = Utils_1.default.formatNumber(Utils_1.default.stringToInt(number));
        lblBet.string = number;
      };
      TaiXiuMiniController.prototype.actBtn000 = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string + "000");
        number > this.maxBetValue && (number = this.maxBetValue);
        lblBet.string = Utils_1.default.formatNumber(number);
      };
      TaiXiuMiniController.prototype.actNan = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.isNan = !this.isNan;
        this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan ? this.sprFrameBtnNan2 : this.sprFrameBtnNan;
      };
      TaiXiuMiniController.prototype.actPopupHonor = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupHonor) {
          this.popupHonor = cc.instantiate(this.popupsPr[0]).getComponent("TaiXiuMini.PopupHonors");
          this.popupHonor.node.parent = this.popupContainer;
          this.popupHonor.show();
          this.popups.push(this.popupHonor.node);
          App_1.default.instance.showLoading(false);
        } else this.popupHonor.show();
      };
      TaiXiuMiniController.prototype.actPopupHistory = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupHistory) {
          this.popupHistory = cc.instantiate(this.popupsPr[1]).getComponent("TaiXiuMini.PopupHistory");
          this.popupHistory.node.parent = this.popupContainer;
          this.popupHistory.show();
          this.popups.push(this.popupHistory.node);
          App_1.default.instance.showLoading(false);
        } else this.popupHistory.show();
      };
      TaiXiuMiniController.prototype.actPopupGuide = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupGuide) {
          this.popupGuide = cc.instantiate(this.popupsPr[4]).getComponent("Dialog");
          this.popupGuide.node.parent = this.popupContainer;
          this.popupGuide.show();
          this.popups.push(this.popupGuide.node);
          App_1.default.instance.showLoading(false);
        } else this.popupGuide.show();
      };
      TaiXiuMiniController.prototype.actPopupSoiCau = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupSoiCau) {
          this.popupSoiCau = cc.instantiate(this.popupsPr[3]).getComponent("TaiXiuMini.PopupSoiCau");
          this.popupSoiCau.node.parent = this.popupContainer;
          this.popupSoiCau.show();
          this.popups.push(this.popupSoiCau.node);
          App_1.default.instance.showLoading(false);
        } else this.popupSoiCau.show();
      };
      TaiXiuMiniController.prototype.actPopupThanhDu = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupThanhDu) {
          this.popupThanhDu = cc.instantiate(this.popupsPr[5]).getComponent("TaiXiuMini.PopupThanhDu");
          this.popupThanhDu.node.parent = this.popupContainer;
          this.popupThanhDu.show();
          this.popups.push(this.popupThanhDu.node);
          App_1.default.instance.showLoading(false);
        } else this.popupThanhDu.show();
      };
      TaiXiuMiniController.prototype.actPopupHistorySession = function() {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (null == this.popupDetailSession) {
          this.popupDetailSession = cc.instantiate(this.popupsPr[2]).getComponent("TaiXiuMini.PopupDetailHistory");
          this.popupDetailSession.node.parent = this.popupContainer;
          this.popupDetailSession.showDetail(this.sessionId - 1);
          this.popups.push(this.popupDetailSession.node);
          App_1.default.instance.showLoading(false);
        } else this.popupDetailSession.showDetail(this.sessionId - 1);
      };
      TaiXiuMiniController.prototype.showResult = function() {
        this.lblScore.node.parent.active = true;
        this.lblScore.node.active = true;
        this.lblScore.string = "" + this.lastScore;
        this.lastScore >= 11 ? this.bgSpine.node.active = true : this.bgSpinez.node.active = true;
        this.updateBtnHistories();
        for (var i = 0; i < this.arrTimeoutDice.length; i++) clearTimeout(this.arrTimeoutDice[i]);
        this.arrTimeoutDice = [];
      };
      TaiXiuMiniController.prototype.stopWin = function() {
        this.bgSpine.node.active = false;
        this.bgSpinez.node.active = false;
        this.bgSpine.node.parent.getChildByName("text").active = true;
      };
      TaiXiuMiniController.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      TaiXiuMiniController.prototype.showWinCash = function() {
        var _this_1 = this;
        if (this.lastWinCash <= 0) return;
        this.soundManager.playAudioEffect(audio_clip.WIN);
        this.lblWinCash.node.stopAllActions();
        this.lblWinCash.node.active = true;
        this.lblWinCash.node.scale = 0;
        Tween_1.default.numberTo(this.lblWinCash, this.lastWinCash, .5, function(n) {
          return "+" + Utils_1.default.formatNumber(n);
        });
        this.lblWinCash.node.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.callFunc(function() {
          _this_1.lblWinCash.node.active = false;
        })));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
      };
      TaiXiuMiniController.prototype.updateBtnHistories = function() {
        var _this_1 = this;
        var histories = this.histories.slice();
        histories.length > this.btnHistories.childrenCount && histories.splice(0, histories.length - this.btnHistories.childrenCount);
        var idx = histories.length - 1;
        var _loop_3 = function() {
          if (idx >= 0) {
            var _idx_1 = idx;
            score = histories[idx]["dices"][0] + histories[idx]["dices"][1] + histories[idx]["dices"][2];
            this_3.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame = score >= 11 ? this_3.sprFrameTai : this_3.sprFrameXiu;
            this_3.btnHistories.children[i].off("click");
            this_3.btnHistories.children[i].on("click", function(e, b) {
              _this_1.popupDetailSession.showDetail(histories[_idx_1]["session"]);
            });
            this_3.btnHistories.children[i].active = true;
          } else this_3.btnHistories.children[i].active = false;
          idx--;
        };
        var this_3 = this, score;
        for (var i = this.btnHistories.childrenCount - 1; i >= 0; i--) _loop_3();
      };
      TaiXiuMiniController.prototype.sendChat = function(message) {
        var _this = this;
        if (!_this.isCanChat) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        _this.isCanChat = false;
        this.scheduleOnce(function() {
          _this.isCanChat = true;
        }, 1);
        var req = new TaiXiuMini_Cmd_1.default.SendChat(unescape(encodeURIComponent(message)));
        MiniGameNetworkClient_1.default.getInstance().send(req);
      };
      TaiXiuMiniController.prototype.handleJackpotWin = function(res) {
        var _this_1 = this;
        this.animJP.node.active = true;
        this.lbJackPot.string = "0";
        Tween_1.default.numberTo(this.lbJackPot, res["jackpot"], 3);
        this.scheduleOnce(function() {
          _this_1.animJP.node.active = false;
          _this_1.bowl.active = false;
          null != _this_1.resultData && _this_1.handleResult();
        }, 4);
      };
      TaiXiuMiniController.prototype.handleResult = function() {
        Configs_1.default.Login.Coin = this.resultData.currentMoney;
        this.lastWinCash = this.resultData.totalMoney;
        this.bowl.active || this.resultData.totalMoney > 0 && this.showWinCash();
      };
      var TaiXiuMiniController_1;
      TaiXiuMiniController.instance = null;
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "scrollChat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "chatNhanh", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "contentChatNhanh", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "bgSpine", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "bgSpinez", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "gamePlay", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TaiXiuMiniController.prototype, "sprDices", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMiniController.prototype, "sprFrameTai", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMiniController.prototype, "sprFrameXiu", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMiniController.prototype, "sprFrameBtnNan", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMiniController.prototype, "sprFrameBtnNan2", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblRemainTime", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblRemainTime2", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblScore", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblUserTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblUserXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblBetXiu", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "lblbtnbettai", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "lblbtnbetxiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblBetedTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblBetedXiu", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "dice1", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "dice2", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "dice3", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "bowl", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "tai", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "xiu", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "btnHistories", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "nodePanelChat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "layoutBet", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "layoutBet1", void 0);
      __decorate([ property([ cc.Button ]) ], TaiXiuMiniController.prototype, "buttonsBet1", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblToast", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lblWinCash", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "btnNan", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMiniController.prototype, "popupContainer", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuMiniController.prototype, "animJP", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lbJackPot", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lbJackPotTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMiniController.prototype, "lbJackPotXiu", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], TaiXiuMiniController.prototype, "fontTime", void 0);
      __decorate([ property(SoundManager) ], TaiXiuMiniController.prototype, "soundManager", void 0);
      __decorate([ property([ cc.Node ]) ], TaiXiuMiniController.prototype, "popups", void 0);
      __decorate([ property([ cc.Prefab ]) ], TaiXiuMiniController.prototype, "popupsPr", void 0);
      TaiXiuMiniController = TaiXiuMiniController_1 = __decorate([ ccclass ], TaiXiuMiniController);
      return TaiXiuMiniController;
    }(cc.Component);
    exports.default = TaiXiuMiniController;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../src/TaiXiuDouble.Controller": "TaiXiuDouble.Controller",
    "./TaiXiuMini.Cmd": "TaiXiuMini.Cmd",
    "./TaiXiuMini.PanelChat": "TaiXiuMini.PanelChat"
  } ],
  "TaiXiuMini2.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15481BPXlVMxovmT7uRFVfv", "TaiXiuMini2.Cmd");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SCRIBE = 2e3;
        Code.UNSCRIBE = 2001;
        Code.BET = 2110;
        Code.HISTORIES = 2116;
        Code.GAME_INFO = 2111;
        Code.UPDATE_TIME = 2112;
        Code.DICES_RESULT = 2113;
        Code.RESULT = 2114;
        Code.NEW_GAME = 2115;
        Code.LOG_CHAT = 18003;
        Code.SEND_CHAT = 18e3;
        Code.SCRIBE_CHAT = 18001;
        Code.UNSCRIBE_CHAT = 18002;
        return Code;
      }();
      cmd.Code = Code;
      var SendScribe = function(_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE);
          _this.packHeader();
          _this.putShort(Configs_1.default.GameId.TaiXiu);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendScribe;
      }(Network_OutPacket_1.default);
      cmd.SendScribe = SendScribe;
      var SendUnScribe = function(_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE);
          _this.packHeader();
          _this.putShort(Configs_1.default.GameId.TaiXiu);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendUnScribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribe = SendUnScribe;
      var SendScribeChat = function(_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE_CHAT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendScribeChat;
      }(Network_OutPacket_1.default);
      cmd.SendScribeChat = SendScribeChat;
      var SendUnScribeChat = function(_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE_CHAT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendUnScribeChat;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribeChat = SendUnScribeChat;
      var SendChat = function(_super) {
        __extends(SendChat, _super);
        function SendChat(message) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SEND_CHAT);
          _this.packHeader();
          _this.putString(message);
          _this.updateSize();
          return _this;
        }
        return SendChat;
      }(Network_OutPacket_1.default);
      cmd.SendChat = SendChat;
      var SendBet = function(_super) {
        __extends(SendBet, _super);
        function SendBet(referenceId, betValue, door, remainTime) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BET);
          _this.packHeader();
          _this.putInt(1);
          _this.putLong(referenceId);
          _this.putLong(betValue);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.putShort(door);
          _this.putShort(remainTime);
          _this.updateSize();
          return _this;
        }
        return SendBet;
      }(Network_OutPacket_1.default);
      cmd.SendBet = SendBet;
      var ReceiveGameInfo = function(_super) {
        __extends(ReceiveGameInfo, _super);
        function ReceiveGameInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.gameId = 0;
          _this.moneyType = 0;
          _this.referenceId = 0;
          _this.remainTime = 0;
          _this.bettingState = false;
          _this.potTai = 0;
          _this.potXiu = 0;
          _this.betTai = 0;
          _this.betXiu = 0;
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.remainTimeRutLoc = 0;
          _this.gameId = _this.getShort();
          _this.moneyType = _this.getShort();
          _this.referenceId = _this.getLong();
          _this.remainTime = _this.getShort();
          _this.bettingState = _this.getBool();
          _this.potTai = _this.getLong();
          _this.potXiu = _this.getLong();
          _this.betTai = _this.getLong();
          _this.betXiu = _this.getLong();
          _this.dice1 = _this.getShort();
          _this.dice2 = _this.getShort();
          _this.dice3 = _this.getShort();
          _this.remainTimeRutLoc = _this.getShort();
          return _this;
        }
        return ReceiveGameInfo;
      }(Network_InPacket_1.default);
      cmd.ReceiveGameInfo = ReceiveGameInfo;
      var ReceiveUpdateTime = function(_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
          var _this = _super.call(this, data) || this;
          _this.remainTime = 0;
          _this.bettingState = false;
          _this.potTai = 0;
          _this.potXiu = 0;
          _this.numBetTai = 0;
          _this.numBetXiu = 0;
          _this.remainTime = _this.getShort();
          _this.bettingState = _this.getBool();
          _this.potTai = _this.getLong();
          _this.potXiu = _this.getLong();
          _this.numBetTai = _this.getShort();
          _this.numBetXiu = _this.getShort();
          return _this;
        }
        return ReceiveUpdateTime;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateTime = ReceiveUpdateTime;
      var ReceiveDicesResult = function(_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.result = _this.getShort();
          _this.dice1 = _this.getShort();
          _this.dice2 = _this.getShort();
          _this.dice3 = _this.getShort();
          return _this;
        }
        return ReceiveDicesResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveDicesResult = ReceiveDicesResult;
      var ReceiveResult = function(_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
          var _this = _super.call(this, data) || this;
          _this.moneyType = 1;
          _this.totalMoney = 0;
          _this.currentMoney = 0;
          _this.moneyType = _this.getShort();
          _this.totalMoney = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
      var ReceiveNewGame = function(_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
          var _this = _super.call(this, data) || this;
          _this.referenceId = 0;
          _this.remainTimeRutLoc = 0;
          _this.referenceId = _this.getLong();
          _this.remainTimeRutLoc = _this.getShort();
          return _this;
        }
        return ReceiveNewGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveNewGame = ReceiveNewGame;
      var ReceiveHistories = function(_super) {
        __extends(ReceiveHistories, _super);
        function ReceiveHistories(data) {
          var _this = _super.call(this, data) || this;
          _this.data = "";
          _this.data = _this.getString();
          return _this;
        }
        return ReceiveHistories;
      }(Network_InPacket_1.default);
      cmd.ReceiveHistories = ReceiveHistories;
      var ReceiveBet = function(_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.currentMoney = 0;
          _this.result = _this.getError();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveBet;
      }(Network_InPacket_1.default);
      cmd.ReceiveBet = ReceiveBet;
      var ReceiveLogChat = function(_super) {
        __extends(ReceiveLogChat, _super);
        function ReceiveLogChat(data) {
          var _this = _super.call(this, data) || this;
          _this.message = "";
          _this.minVipPoint = 0;
          _this.timeBan = 0;
          _this.userType = 0;
          _this.message = _this.getString();
          _this.minVipPoint = _this.getByte();
          _this.timeBan = _this.getLong();
          _this.userType = _this.getByte();
          return _this;
        }
        return ReceiveLogChat;
      }(Network_InPacket_1.default);
      cmd.ReceiveLogChat = ReceiveLogChat;
      var ReceiveSendChat = function(_super) {
        __extends(ReceiveSendChat, _super);
        function ReceiveSendChat(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.nickname = "";
          _this.message = "";
          _this.error = _this.getError();
          _this.nickname = _this.getString();
          _this.message = _this.getString();
          return _this;
        }
        return ReceiveSendChat;
      }(Network_InPacket_1.default);
      cmd.ReceiveSendChat = ReceiveSendChat;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "TaiXiuMini2.PanelChat": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2dbf49rsjtAV4iXpLmxTexl", "TaiXiuMini2.PanelChat");
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
    var TaiXiuMini2_Cmd_1 = require("./TaiXiuMini2.Cmd");
    var TaiXiuMini2_TaiXiuMiniController_1 = require("./TaiXiuMini2.TaiXiuMiniController");
    var Configs_1 = require("../../../Loading/src/Configs");
    var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var taixiumini;
    (function(taixiumini) {
      var PanelChat = function(_super) {
        __extends(PanelChat, _super);
        function PanelChat() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.itemChatTemplate = null;
          _this.scrMessage = null;
          _this.edbMessage = null;
          return _this;
        }
        PanelChat.prototype.start = function() {
          this.itemChatTemplate.active = false;
        };
        PanelChat.prototype.show = function(isShow) {
          this.node.active = isShow;
          if (isShow) {
            for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
              var node = this.scrMessage.content.children[i];
              node.active = false;
            }
            TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendScribeChat());
          } else TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendUnScribeChat());
        };
        PanelChat.prototype.addMessage = function(nickname, message) {
          var item = null;
          for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
            var node = this.scrMessage.content.children[i];
            if (!node.active) {
              item = node;
              break;
            }
          }
          null == item && (item = this.scrMessage.content.childrenCount >= 50 ? this.scrMessage.content.children[0] : cc.instantiate(this.itemChatTemplate));
          var zIndex = 0;
          for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
            var node = this.scrMessage.content.children[i];
            node != item && (node.zIndex = zIndex++);
          }
          item.parent = this.scrMessage.content;
          var lblNickname = item.getChildByName("lblNickname").getComponent(cc.Label);
          lblNickname.string = nickname;
          lblNickname.node.color = nickname == Configs_1.default.Login.Nickname ? cc.Color.WHITE.fromHEX("#3DFF00") : cc.Color.WHITE.fromHEX("#FFC200");
          item.getChildByName("lblMessage").getComponent(cc.Label).string = message;
          item.active = true;
          item.zIndex = zIndex++;
          this.scrollToBottom();
        };
        PanelChat.prototype.sendChat = function() {
          var msg = this.edbMessage.string.trim();
          if (0 == msg.length) return;
          this.edbMessage.string = "";
          TaiXiuMini2_TaiXiuMiniController_1.default.instance.sendChat(msg);
        };
        PanelChat.prototype.scrollToBottom = function() {
          this.scrMessage.scrollToBottom(.2);
        };
        __decorate([ property(cc.Node) ], PanelChat.prototype, "itemChatTemplate", void 0);
        __decorate([ property(cc.ScrollView) ], PanelChat.prototype, "scrMessage", void 0);
        __decorate([ property(cc.EditBox) ], PanelChat.prototype, "edbMessage", void 0);
        PanelChat = __decorate([ ccclass ], PanelChat);
        return PanelChat;
      }(cc.Component);
      taixiumini.PanelChat = PanelChat;
    })(taixiumini || (taixiumini = {}));
    exports.default = taixiumini.PanelChat;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient": void 0,
    "./TaiXiuMini2.Cmd": "TaiXiuMini2.Cmd",
    "./TaiXiuMini2.TaiXiuMiniController": "TaiXiuMini2.TaiXiuMiniController"
  } ],
  "TaiXiuMini2.PopupDetailHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e29dgiQ7ZGjp1rL7zReuq9", "TaiXiuMini2.PopupDetailHistory");
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
    var Http_1 = require("../../../Loading/src/Http");
    var Configs_1 = require("../../../Loading/src/Configs");
    var TaiXiuMini2_TaiXiuMiniController_1 = require("./TaiXiuMini2.TaiXiuMiniController");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupDetailHistory = function(_super) {
      __extends(PopupDetailHistory, _super);
      function PopupDetailHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblPage = null;
        _this.lblTotalBetTai = null;
        _this.lblTotalBetXiu = null;
        _this.lblTotalRefundTai = null;
        _this.lblTotalRefundXiu = null;
        _this.sfDices = [];
        _this.sfTai = null;
        _this.sfXiu = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprResult = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.inited = false;
        _this.session = 0;
        _this.page = 1;
        _this.totalPage = 1;
        _this.historiesTai = [];
        _this.historiesXiu = [];
        return _this;
      }
      PopupDetailHistory.prototype.showDetail = function(session) {
        this.session = session;
        this.show();
      };
      PopupDetailHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.sprResult.node.active = false;
        this.lblSession.string = "Phi\xean: #" + this.session;
        this.lblTime.string = "";
        if (this.inited) {
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
          return;
        }
        this.itemTemplate.active = false;
        for (var i = 0; i < 10; i++) {
          var node = cc.instantiate(this.itemTemplate);
          node.parent = this.itemTemplate.parent;
          node.active = false;
          this.items.push(node);
        }
        this.inited = true;
      };
      PopupDetailHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.loadData();
      };
      PopupDetailHistory.prototype.loadData = function() {
        var _this = this;
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.sprResult.node.active = false;
        this.lblSession.string = "Phi\xean: #" + this.session;
        this.lblTime.string = "";
        Http_1.default.get(Configs_1.default.App.API, {
          c: 102,
          rid: this.session,
          mt: Configs_1.default.App.MONEY_TYPE
        }, function(err, res) {
          if (null != err) return;
          _this.historiesTai = [];
          _this.historiesXiu = [];
          if (res.success && null !== res["resultTX"]) {
            for (var i = 0; i < res["transactions"].length; i++) {
              var itemData = res["transactions"][i];
              1 === itemData["betSide"] ? _this.historiesTai.push(itemData) : _this.historiesXiu.push(itemData);
            }
            for (var i = 0; i < _this.items.length; i++) _this.items[i].active = false;
            _this.page = 1;
            _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
            _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
            _this.lblPage.string = _this.page + "/" + _this.totalPage;
            _this.lblSession.string = "Phi\xean: #" + res["resultTX"]["referenceId"];
            _this.lblTime.string = res["resultTX"]["timestamp"];
            _this.lblTotalBetTai.string = Utils_1.default.formatNumber(res["resultTX"]["totalTai"]);
            _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(res["resultTX"]["totalXiu"]);
            _this.lblTotalRefundTai.string = Utils_1.default.formatNumber(res["resultTX"]["totalRefundTai"]);
            _this.lblTotalRefundXiu.string = Utils_1.default.formatNumber(res["resultTX"]["totalRefundXiu"]);
            _this.sprDice1.spriteFrame = _this.sfDices[res["resultTX"]["dice1"]];
            _this.sprDice1.node.active = true;
            _this.sprDice2.spriteFrame = _this.sfDices[res["resultTX"]["dice2"]];
            _this.sprDice2.node.active = true;
            _this.sprDice3.spriteFrame = _this.sfDices[res["resultTX"]["dice3"]];
            _this.sprDice3.node.active = true;
            _this.sprResult.spriteFrame = 1 == res["resultTX"]["result"] ? _this.sfTai : _this.sfXiu;
            _this.sprResult.node.active = true;
            _this.loadDataPage();
          }
        });
      };
      PopupDetailHistory.prototype.loadDataPage = function() {
        for (var i = 0; i < this.items.length; i++) {
          var idx = (this.page - 1) * this.items.length + i;
          var item = this.items[i];
          item.active = true;
          if (idx < this.historiesTai.length) {
            var itemData = this.historiesTai[idx];
            item.getChildByName("Time").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
            item.getChildByName("Account").getComponent(cc.Label).string = itemData["username"];
            item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
            item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
          } else {
            item.getChildByName("Time").getComponent(cc.Label).string = "";
            item.getChildByName("Account").getComponent(cc.Label).string = "";
            item.getChildByName("Refund").getComponent(cc.Label).string = "";
            item.getChildByName("Bet").getComponent(cc.Label).string = "";
          }
          if (idx < this.historiesXiu.length) {
            var itemData = this.historiesXiu[idx];
            item.getChildByName("Time2").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
            item.getChildByName("Account2").getComponent(cc.Label).string = itemData["username"];
            item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
            item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
          } else {
            item.getChildByName("Time2").getComponent(cc.Label).string = "";
            item.getChildByName("Account2").getComponent(cc.Label).string = "";
            item.getChildByName("Refund2").getComponent(cc.Label).string = "";
            item.getChildByName("Bet2").getComponent(cc.Label).string = "";
          }
        }
        this.lblPage.string = this.page + "/" + this.totalPage;
      };
      PopupDetailHistory.prototype.actNextPage = function() {
        this.page++;
        this.page > this.totalPage && (this.page = this.totalPage);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actPrevPage = function() {
        this.page--;
        this.page < 1 && (this.page = 1);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actNextSession = function() {
        this.session++;
        if (this.session > TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.length - 1].session) {
          this.session = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.length - 1].session;
          return;
        }
        this.loadData();
      };
      PopupDetailHistory.prototype.actPrevSession = function() {
        this.session--;
        this.loadData();
      };
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTime", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundXiu", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupDetailHistory.prototype, "sfDices", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfTai", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfXiu", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice1", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice2", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice3", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprResult", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "itemTemplate", void 0);
      PopupDetailHistory = __decorate([ ccclass ], PopupDetailHistory);
      return PopupDetailHistory;
    }(Dialog_1.default);
    exports.default = PopupDetailHistory;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./TaiXiuMini2.TaiXiuMiniController": "TaiXiuMini2.TaiXiuMiniController"
  } ],
  "TaiXiuMini2.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dad8aTYnTlHFpu8kgLw9Fkb", "TaiXiuMini2.PopupHistory");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
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
          c: 100,
          p: this.page,
          un: Configs_1.default.Login.Nickname,
          mt: Configs_1.default.App.MONEY_TYPE,
          txType: 2
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
            if (i_1 < res["transactions"].length) {
              var itemData = res["transactions"][i_1];
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
              item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["referenceId"];
              item.getChildByName("lblTime").getComponent(cc.Label).string = itemData["timestamp"];
              item.getChildByName("lblBetDoor").getComponent(cc.Label).string = 1 == itemData["betSide"] ? "T\xc0I" : "X\u1ec8U";
              item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["resultPhien"];
              item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
              item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalRefund"]);
              item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalPrize"]);
              item.active = true;
            } else item.active = false;
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
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini2.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbb25PX7c9FToAGUmzyutp3", "TaiXiuMini2.PopupHonors");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupHonors = function(_super) {
      __extends(PopupHonors, _super);
      function PopupHonors() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemTemplate = null;
        _this.items = new Array();
        return _this;
      }
      PopupHonors.prototype.show = function() {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupHonors.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupHonors.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.loadData();
      };
      PopupHonors.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 101,
          mt: Configs_1.default.App.MONEY_TYPE,
          txType: 2
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 10; i++) {
                var item = cc.instantiate(_this.itemTemplate);
                item.parent = _this.itemTemplate.parent;
                _this.items.push(item);
              }
              _this.itemTemplate.destroy();
              _this.itemTemplate = null;
            }
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
              var item = _this.items[i_1];
              if (i_1 < res["topTX"].length) {
                var itemData = res["topTX"][i_1];
                item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                item.getChildByName("lblRank").getComponent(cc.Label).string = (i_1 + 1).toString();
                item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
                item.active = true;
              } else item.active = false;
            }
          }
        });
      };
      __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
      PopupHonors = __decorate([ ccclass ], PopupHonors);
      return PopupHonors;
    }(Dialog_1.default);
    exports.default = PopupHonors;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini2.PopupSoiCau": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02f69S0t8JEFJkwkAFp8HGD", "TaiXiuMini2.PopupSoiCau");
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
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuMini2_TaiXiuMiniController_1 = require("./TaiXiuMini2.TaiXiuMiniController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupSoiCau = function(_super) {
      __extends(PopupSoiCau, _super);
      function PopupSoiCau() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lineTemplate = null;
        _this.iconTaiTemplate = null;
        _this.iconXiuTemplate = null;
        _this.iconXX1Template = null;
        _this.iconXX2Template = null;
        _this.iconXX3Template = null;
        _this.iconNumberTemplate = null;
        _this.page1 = null;
        _this.lblLastSession = null;
        _this.xx1Draw = null;
        _this.xx2Draw = null;
        _this.xx3Draw = null;
        _this.xx123Draw = null;
        _this.page2 = null;
        _this.lblTai1 = null;
        _this.lblTai2 = null;
        _this.lblXiu1 = null;
        _this.lblXiu2 = null;
        _this.contentDraw = null;
        return _this;
      }
      PopupSoiCau.prototype.show = function() {
        _super.prototype.show.call(this);
        this.page1.active = false;
        this.page2.active = false;
        this.lineTemplate.parent.active = false;
      };
      PopupSoiCau.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        this.page1.active = false;
        this.page2.active = false;
      };
      PopupSoiCau.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.drawPage1();
        this.page1.active = true;
        this.page2.active = false;
      };
      PopupSoiCau.prototype.toggleXX1 = function(target) {
        this.xx1Draw.active = target.isChecked;
      };
      PopupSoiCau.prototype.toggleXX2 = function(target) {
        this.xx2Draw.active = target.isChecked;
      };
      PopupSoiCau.prototype.toggleXX3 = function(target) {
        this.xx3Draw.active = target.isChecked;
      };
      PopupSoiCau.prototype.togglePage = function() {
        this.page1.active = !this.page1.active;
        this.page2.active = !this.page1.active;
        this.page1.active ? this.drawPage1() : this.drawPage2();
      };
      PopupSoiCau.prototype.drawPage1 = function() {
        var data = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.slice();
        data.length > 22 && data.splice(0, data.length - 22);
        var last = data[data.length - 1];
        var lastDices = last.dices;
        var lastScore = lastDices[0] + lastDices[1] + lastDices[2];
        this.lblLastSession.string = "Phi\xean g\u1ea7n nh\u1ea5t: (#" + last.session + ")  " + (lastScore >= 11 ? "T\xc0I" : "X\u1ec8U") + "  " + lastScore + "(" + lastDices[0] + "-" + lastDices[1] + "-" + lastDices[2] + ")";
        var endPosX = 311;
        var startPosY = -195.822;
        var startPosY123 = -4.234;
        this.xx1Draw.removeAllChildren();
        this.xx2Draw.removeAllChildren();
        this.xx3Draw.removeAllChildren();
        this.xx123Draw.removeAllChildren();
        var _i = 0;
        var spacingX = 28.3;
        var spacingY = 30.2;
        for (var i = data.length - 1; i >= 0; i--) {
          var dices = data[i].dices;
          var score = dices[0] + dices[1] + dices[2];
          var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
          var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
          var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
          var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + spacingY / 3 * (score - 3));
          var iconXX1 = cc.instantiate(this.iconXX1Template);
          iconXX1.parent = this.xx1Draw;
          iconXX1.setPosition(startPosXX1);
          var iconXX2 = cc.instantiate(this.iconXX2Template);
          iconXX2.parent = this.xx2Draw;
          iconXX2.setPosition(startPosXX2);
          var iconXX3 = cc.instantiate(this.iconXX3Template);
          iconXX3.parent = this.xx3Draw;
          iconXX3.setPosition(startPosXX3);
          var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
          iconXX123.parent = this.xx123Draw;
          iconXX123.setPosition(startPosXX123);
          if (_i > 0) {
            dices = data[i + 1].dices;
            score = dices[0] + dices[1] + dices[2];
            var endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
            var endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
            var endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
            var endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + spacingY / 3 * (score - 3));
            var line = cc.instantiate(this.lineTemplate);
            line.parent = this.xx1Draw;
            line.width = Utils_1.default.v2Distance(startPosXX1, endPosXX1);
            line.setPosition(startPosXX1);
            line.angle = Utils_1.default.v2Degrees(startPosXX1, endPosXX1);
            line.color = cc.Color.BLACK.fromHEX("#ff1800");
            line.zIndex = 0;
            line = cc.instantiate(this.lineTemplate);
            line.parent = this.xx2Draw;
            line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
            line.setPosition(startPosXX2);
            line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
            line.color = cc.Color.BLACK.fromHEX("#ffea00");
            line.zIndex = 0;
            line = cc.instantiate(this.lineTemplate);
            line.parent = this.xx3Draw;
            line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
            line.setPosition(startPosXX3);
            line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
            line.color = cc.Color.BLACK.fromHEX("#35e100");
            line.zIndex = 0;
            line = cc.instantiate(this.lineTemplate);
            line.parent = this.xx123Draw;
            line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
            line.setPosition(startPosXX123);
            line.angle = Utils_1.default.v2Degrees(startPosXX123, endPosXX123);
            line.color = cc.Color.BLACK.fromHEX("#ffea00");
            line.zIndex = -1;
          }
          _i++;
        }
      };
      PopupSoiCau.prototype.drawPage2 = function() {
        var startPosX = -283.773;
        var startPosY = 132.93;
        var spacingX = 28.3;
        var spacingY = 30.2;
        this.contentDraw.removeAllChildren();
        var data = [];
        var curData = [];
        var count = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.length;
        var countTai = 0;
        var countXiu = 0;
        if (count > 1) {
          var dices = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[0].dices;
          var score = dices[0] + dices[1] + dices[2];
          var isTai = score >= 11;
          var maxItem = 5;
          for (var i = 0; i < count; i++) {
            dices = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[i].dices;
            score = dices[0] + dices[1] + dices[2];
            var _isTai = score >= 11;
            if (_isTai !== isTai) {
              curData.length > maxItem && curData.splice(0, curData.length - maxItem);
              data.push(curData);
              isTai ? countTai += curData.length : countXiu += curData.length;
              isTai = _isTai;
              curData = [];
              curData.push(score);
            } else curData.push(score);
            if (i === count - 1) {
              curData.length > maxItem && curData.splice(0, curData.length - maxItem);
              data.push(curData);
              isTai ? countTai += curData.length : countXiu += curData.length;
            }
          }
        }
        data.length > 21 && data.splice(0, data.length - 21);
        this.lblTai1.string = "T\xc0I: " + countTai;
        this.lblXiu1.string = "X\u1ec8U: " + countXiu;
        for (var i_1 = 0; i_1 < data.length; i_1++) for (var j = 0; j < data[i_1].length; j++) {
          var score_1 = data[i_1][j];
          var icon = cc.instantiate(this.iconNumberTemplate);
          icon.parent = this.contentDraw;
          icon.setPosition(startPosX + spacingX * i_1, startPosY - spacingY * j);
          icon.color = cc.Color.BLACK.fromHEX(score_1 >= 11 ? "#4192ff" : "#FFFFFF");
          icon.getComponent(cc.Label).string = "" + score_1;
        }
        startPosX = -281.793;
        startPosY = -58.447;
        var column = 0;
        var row = 0;
        var countTai = 0;
        var countXiu = 0;
        var data = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.slice();
        data.length > 105 && data.splice(0, data.length - 105);
        for (var i = 0; i < data.length; i++) {
          var score = data[i].dices[0] + data[i].dices[1] + data[i].dices[2];
          score >= 11 ? countTai++ : countXiu++;
          var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
          iconXX123.parent = this.contentDraw;
          iconXX123.setPosition(startPosX + spacingX * column, startPosY - spacingY * row);
          row++;
          if (row >= 5) {
            row = 0;
            column++;
          }
        }
        this.lblTai2.string = "T\xc0I: " + countTai;
        this.lblXiu2.string = "X\u1ec8U: " + countXiu;
      };
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "lineTemplate", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconTaiTemplate", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXiuTemplate", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX1Template", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX2Template", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX3Template", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconNumberTemplate", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page1", void 0);
      __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblLastSession", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx1Draw", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx2Draw", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx3Draw", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx123Draw", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page2", void 0);
      __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai1", void 0);
      __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai2", void 0);
      __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu1", void 0);
      __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu2", void 0);
      __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "contentDraw", void 0);
      PopupSoiCau = __decorate([ ccclass ], PopupSoiCau);
      return PopupSoiCau;
    }(Dialog_1.default);
    exports.default = PopupSoiCau;
    cc._RF.pop();
  }, {
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./TaiXiuMini2.TaiXiuMiniController": "TaiXiuMini2.TaiXiuMiniController"
  } ],
  "TaiXiuMini2.PopupThanhDu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7237dIxfDJG+4vMYmu8zlaF", "TaiXiuMini2.PopupThanhDu");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var Http_1 = require("../../../Loading/src/Http");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupThanhDu = function(_super) {
      __extends(PopupThanhDu, _super);
      function PopupThanhDu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprTabNormal = null;
        _this.sprTabActive = null;
        _this.tabs = null;
        _this.childTabs = null;
        _this.itemTemplate = null;
        _this.lblDate = null;
        _this.selectedTab = 0;
        _this.selectedChildTab = 0;
        _this.date = new Date();
        _this.items = new Array();
        return _this;
      }
      PopupThanhDu.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var tab = this_1.tabs.children[i];
          tab.on("click", function() {
            _this.selectedTab = i;
            _this.selectedChildTab = 0;
            _this.date = new Date();
            _this.updateTabSpriteFrame();
            _this.loadData();
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.childrenCount; i++) _loop_1(i);
        var _loop_2 = function(i) {
          var tab = this_2.childTabs.children[i];
          tab.on("click", function() {
            _this.selectedChildTab = i;
            _this.updateTabSpriteFrame();
            _this.loadData();
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.childTabs.childrenCount; i++) _loop_2(i);
      };
      PopupThanhDu.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupThanhDu.prototype.show = function() {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupThanhDu.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.selectedTab = 0;
        this.selectedChildTab = 0;
        this.updateTabSpriteFrame();
        this.loadData();
      };
      PopupThanhDu.prototype.actNext = function() {
        0 === this.selectedTab ? this.date.setDate(this.date.getDate() + 1) : this.date.setMonth(this.date.getMonth() + 1);
        this.loadData();
      };
      PopupThanhDu.prototype.actPrev = function() {
        0 === this.selectedTab ? this.date.setDate(this.date.getDate() - 1) : this.date.setMonth(this.date.getMonth() - 1);
        this.loadData();
      };
      PopupThanhDu.prototype.updateTabSpriteFrame = function() {
        for (var i = 0; i < this.tabs.childrenCount; i++) {
          var tab = this.tabs.children[i];
          tab.getComponent(cc.Sprite).spriteFrame = this.selectedTab == i ? this.sprTabActive : this.sprTabNormal;
        }
        for (var i = 0; i < this.childTabs.childrenCount; i++) {
          var tab = this.childTabs.children[i];
          tab.getComponent(cc.Sprite).spriteFrame = this.selectedChildTab == i ? this.sprTabActive : this.sprTabNormal;
        }
      };
      PopupThanhDu.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        var typeTop = 0 === this.selectedChildTab ? 1 : 0;
        var date = 0 === this.selectedTab ? Utils_1.default.dateToYYYYMMdd(this.date) : Utils_1.default.dateToYYYYMM(this.date);
        this.lblDate.string = date;
        var params = 0 === this.selectedTab ? {
          c: 103,
          date: date,
          type: typeTop,
          txType: 2
        } : {
          c: 103,
          month: date,
          type: typeTop,
          txType: 2
        };
        Http_1.default.get(Configs_1.default.App.API, params, function(err, res) {
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
          for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
            var item = _this.items[i_1];
            if (i_1 < res["results"].length) {
              var itemData = res["results"][i_1];
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
              item.getChildByName("no").getComponent(cc.Label).string = (i_1 + 1).toString();
              item.getChildByName("account").getComponent(cc.Label).string = itemData["username"];
              item.getChildByName("count").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["number"]);
              item.getChildByName("winlose").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalMoney"]);
              item.getChildByName("session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
              item.getChildByName("award").getComponent(cc.Label).string = itemData["prize"];
              item.active = true;
            } else item.active = false;
          }
        });
      };
      __decorate([ property(cc.SpriteFrame) ], PopupThanhDu.prototype, "sprTabNormal", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupThanhDu.prototype, "sprTabActive", void 0);
      __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "tabs", void 0);
      __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "childTabs", void 0);
      __decorate([ property(cc.Node) ], PopupThanhDu.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Label) ], PopupThanhDu.prototype, "lblDate", void 0);
      PopupThanhDu = __decorate([ ccclass ], PopupThanhDu);
      return PopupThanhDu;
    }(Dialog_1.default);
    exports.default = PopupThanhDu;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Loading/src/Http": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "TaiXiuMini2.TaiXiuMiniController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0dc40VE7JKT7mWcHioh0nF", "TaiXiuMini2.TaiXiuMiniController");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
    var TaiXiuDouble_Controller_1 = require("../src/TaiXiuDouble.Controller");
    var TaiXiuMini2_Cmd_1 = require("./TaiXiuMini2.Cmd");
    var TaiXiuMini2_PanelChat_1 = require("./TaiXiuMini2.PanelChat");
    var TaiXiuMini2_PopupDetailHistory_1 = require("./TaiXiuMini2.PopupDetailHistory");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BetDoor;
    (function(BetDoor) {
      BetDoor[BetDoor["None"] = 0] = "None";
      BetDoor[BetDoor["Tai"] = 1] = "Tai";
      BetDoor[BetDoor["Xiu"] = 2] = "Xiu";
    })(BetDoor || (BetDoor = {}));
    var TaiXiuMini2Controller = function(_super) {
      __extends(TaiXiuMini2Controller, _super);
      function TaiXiuMini2Controller() {
        var _this_1 = null !== _super && _super.apply(this, arguments) || this;
        _this_1.gamePlay = null;
        _this_1.sprDices = new Array();
        _this_1.sprFrameTai = null;
        _this_1.sprFrameXiu = null;
        _this_1.sprFrameBtnNan = null;
        _this_1.sprFrameBtnNan2 = null;
        _this_1.lblSession = null;
        _this_1.lblRemainTime = null;
        _this_1.lblRemainTime2 = null;
        _this_1.lblScore = null;
        _this_1.lblUserTai = null;
        _this_1.lblUserXiu = null;
        _this_1.lblTotalBetTai = null;
        _this_1.lblTotalBetXiu = null;
        _this_1.lblBetTai = null;
        _this_1.lblBetXiu = null;
        _this_1.lblBetedTai = null;
        _this_1.lblBetedXiu = null;
        _this_1.dice1 = null;
        _this_1.dice2 = null;
        _this_1.dice3 = null;
        _this_1.diceAnim = null;
        _this_1.bowl = null;
        _this_1.tai = null;
        _this_1.xiu = null;
        _this_1.btnHistories = null;
        _this_1.nodePanelChat = null;
        _this_1.layoutBet = null;
        _this_1.layoutBet1 = null;
        _this_1.layoutBet2 = null;
        _this_1.buttonsBet1 = new Array();
        _this_1.buttonsBet2 = new Array();
        _this_1.lblToast = null;
        _this_1.lblWinCash = null;
        _this_1.btnNan = null;
        _this_1.popupDetailHistory = null;
        _this_1.popups = [];
        _this_1.isBetting = false;
        _this_1.remainTime = 0;
        _this_1.canBet = true;
        _this_1.betedTai = 0;
        _this_1.betedXiu = 0;
        _this_1.referenceId = 0;
        _this_1.betingValue = -1;
        _this_1.betingDoor = BetDoor.None;
        _this_1.isOpenBowl = false;
        _this_1.lastWinCash = 0;
        _this_1.lastScore = 0;
        _this_1.isNan = false;
        _this_1.histories = [];
        _this_1.isCanChat = true;
        _this_1.panelChat = null;
        _this_1.maxBetValue = 999999999;
        _this_1.listBets = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 1e7 ];
        _this_1.bowlStartPos = cc.v2(0, -15);
        return _this_1;
      }
      TaiXiuMini2Controller_1 = TaiXiuMini2Controller;
      TaiXiuMini2Controller.prototype.onLoad = function() {
        TaiXiuMini2Controller_1.instance = this;
      };
      TaiXiuMini2Controller.prototype.start = function() {
        var _this_1 = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function() {
          if (!_this_1.node.active) return;
          _this_1.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addOnClose(function() {
          if (!_this_1.node.active) return;
          _this_1.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addListener(function(data) {
          if (!_this_1.node.active) return;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case TaiXiuMini2_Cmd_1.default.Code.GAME_INFO:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveGameInfo(data);
            _this_1.stopWin();
            _this_1.bowl.active = false;
            if (res.bettingState) {
              _this_1.isBetting = true;
              _this_1.dice1.node.active = false;
              _this_1.dice2.node.active = false;
              _this_1.dice3.node.active = false;
              _this_1.lblRemainTime.node.active = true;
              _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.lblRemainTime2.node.parent.active = false;
              _this_1.lblScore.node.parent.active = false;
            } else {
              _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
              _this_1.isBetting = false;
              _this_1.dice1.node.active = true;
              _this_1.dice1.spriteFrame = _this_1.sprDices[res.dice1];
              _this_1.dice2.node.active = true;
              _this_1.dice2.spriteFrame = _this_1.sprDices[res.dice2];
              _this_1.dice3.node.active = true;
              _this_1.dice3.spriteFrame = _this_1.sprDices[res.dice3];
              _this_1.lblRemainTime.node.active = false;
              _this_1.lblRemainTime2.node.parent.active = true;
              _this_1.lblRemainTime2.string = "00:" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
              _this_1.showResult();
            }
            _this_1.diceAnim.active = false;
            Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, .3);
            Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, .3);
            _this_1.betedTai = res.betTai;
            _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
            _this_1.betedXiu = res.betXiu;
            _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
            _this_1.referenceId = res.referenceId;
            _this_1.lblSession.string = "#" + res.referenceId;
            _this_1.remainTime = res.remainTime;
            break;

           case TaiXiuMini2_Cmd_1.default.Code.UPDATE_TIME:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveUpdateTime(data);
            if (res.bettingState) {
              _this_1.isBetting = true;
              _this_1.lblRemainTime.node.active = true;
              _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
              _this_1.lblRemainTime2.node.parent.active = false;
              _this_1.lblScore.node.parent.active = false;
            } else {
              _this_1.isBetting = false;
              _this_1.lblRemainTime.node.active = false;
              _this_1.lblRemainTime2.node.parent.active = true;
              _this_1.lblRemainTime2.string = "00:" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
              _this_1.layoutBet.active = false;
              _this_1.lblBetTai.string = "\u0110\u1eb6T";
              _this_1.lblBetXiu.string = "\u0110\u1eb6T";
              if (res.remainTime < 15 && _this_1.isNan && !_this_1.isOpenBowl) {
                _this_1.bowl.active = false;
                _this_1.showResult();
                _this_1.showWinCash();
                _this_1.isOpenBowl = true;
              }
            }
            Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, .3);
            Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, .3);
            _this_1.lblUserTai.string = "(" + Utils_1.default.formatNumber(res.numBetTai) + ")";
            _this_1.lblUserXiu.string = "(" + Utils_1.default.formatNumber(res.numBetXiu) + ")";
            break;

           case TaiXiuMini2_Cmd_1.default.Code.DICES_RESULT:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveDicesResult(data);
            _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
            _this_1.lblRemainTime.node.active = false;
            _this_1.dice1.spriteFrame = _this_1.sprDices[res.dice1];
            _this_1.dice2.spriteFrame = _this_1.sprDices[res.dice2];
            _this_1.dice3.spriteFrame = _this_1.sprDices[res.dice3];
            _this_1.diceAnim.active = true;
            _this_1.diceAnim.getComponent(cc.Animation).play("shake");
            _this_1.scheduleOnce(function() {
              _this_1.diceAnim.active = false;
              _this_1.dice1.node.active = true;
              _this_1.dice2.node.active = true;
              _this_1.dice3.node.active = true;
              if (_this_1.isNan) {
                _this_1.bowl.setPosition(_this_1.bowlStartPos);
                _this_1.bowl.active = true;
              } else _this_1.showResult();
            }, .95);
            _this_1.histories.length >= 100 && _this_1.histories.slice(0, 1);
            _this_1.histories.push({
              session: _this_1.referenceId,
              dices: [ res.dice1, res.dice2, res.dice3 ]
            });
            break;

           case TaiXiuMini2_Cmd_1.default.Code.RESULT:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveResult(data);
            Configs_1.default.Login.Coin = res.currentMoney;
            _this_1.lastWinCash = res.totalMoney;
            _this_1.bowl.active || res.totalMoney > 0 && _this_1.showWinCash();
            break;

           case TaiXiuMini2_Cmd_1.default.Code.NEW_GAME:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveNewGame(data);
            _this_1.diceAnim.active = false;
            _this_1.dice1.node.active = false;
            _this_1.dice2.node.active = false;
            _this_1.dice3.node.active = false;
            _this_1.lblTotalBetTai.string = "0";
            _this_1.lblTotalBetXiu.string = "0";
            _this_1.lblBetedTai.string = "0";
            _this_1.lblBetedXiu.string = "0";
            _this_1.lblUserTai.string = "(0)";
            _this_1.lblUserXiu.string = "(0)";
            _this_1.referenceId = res.referenceId;
            _this_1.lblSession.string = "#" + res.referenceId;
            _this_1.betingValue = -1;
            _this_1.betingDoor = BetDoor.None;
            _this_1.betedTai = 0;
            _this_1.betedXiu = 0;
            _this_1.isOpenBowl = false;
            _this_1.lastWinCash = 0;
            _this_1.stopWin();
            break;

           case TaiXiuMini2_Cmd_1.default.Code.HISTORIES:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveHistories(data);
            var his = res.data.split(",");
            for (var i = 0; i < his.length; i++) _this_1.histories.push({
              session: _this_1.referenceId - his.length / 3 + parseInt("" + (i + 1) / 3) + (_this_1.isBetting ? 0 : 1),
              dices: [ parseInt(his[i]), parseInt(his[++i]), parseInt(his[++i]) ]
            });
            _this_1.updateBtnHistories();
            break;

           case TaiXiuMini2_Cmd_1.default.Code.LOG_CHAT:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveLogChat(data);
            var msgs = JSON.parse(res.message);
            for (var i = 0; i < msgs.length; i++) _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
            _this_1.panelChat.scrollToBottom();
            break;

           case TaiXiuMini2_Cmd_1.default.Code.SEND_CHAT:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveSendChat(data);
            switch (res.error) {
             case 0:
              _this_1.panelChat.addMessage(res.nickname, res.message);
              break;

             case 2:
              _this_1.showToast("B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n Chat!");
              break;

             case 3:
              _this_1.showToast("T\u1ea1m th\u1eddi b\u1ea1n b\u1ecb c\u1ea5m Chat!");
              break;

             case 4:
              _this_1.showToast("N\u1ed9i dung chat qu\xe1 d\xe0i.");
              break;

             default:
              _this_1.showToast("B\u1ea1n kh\xf4ng th\u1ec3 chat v\xe0o l\xfac n\xe0y.");
            }
            break;

           case TaiXiuMini2_Cmd_1.default.Code.BET:
            var res = new TaiXiuMini2_Cmd_1.default.ReceiveBet(data);
            switch (res.result) {
             case 0:
              switch (_this_1.betingDoor) {
               case BetDoor.Tai:
                _this_1.betedTai += _this_1.betingValue;
                _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                break;

               case BetDoor.Xiu:
                _this_1.betedXiu += _this_1.betingValue;
                _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
              }
              Configs_1.default.Login.Coin = res.currentMoney;
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
              _this_1.betingValue = -1;
              _this_1.showToast("\u0110\u1eb7t c\u01b0\u1ee3c th\xe0nh c\xf4ng.");
              break;

             case 2:
              _this_1.betingValue = -1;
              _this_1.showToast("H\u1ebft th\u1eddi gian c\u01b0\u1ee3c.");
              break;

             case 3:
              _this_1.betingValue = -1;
              _this_1.showToast("S\u1ed1 d\u01b0 kh\xf4ng \u0111\u1ee7 vui l\xf2ng n\u1ea1p th\xeam.");
              break;

             case 4:
              _this_1.betingValue = -1;
              _this_1.showToast("S\u1ed1 ti\u1ec1n c\u01b0\u1ee3c kh\xf4ng h\u1ee3p l\u1ec7.");
              break;

             default:
              _this_1.betingValue = -1;
              _this_1.showToast("\u0110\u1eb7t c\u01b0\u1ee3c kh\xf4ng th\xe0nh c\xf4ng.");
            }
          }
        }, this);
        var _loop_1 = function(i) {
          var btn = this_1.buttonsBet1[i];
          var value = this_1.listBets[i];
          var strValue = value + "";
          value >= 1e6 ? strValue = value / 1e6 + "M" : value >= 1e3 && (strValue = value / 1e3 + "K");
          btn.getComponentInChildren(cc.Label).string = strValue;
          btn.node.on("click", function() {
            if (_this_1.betingDoor === BetDoor.None) return;
            var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
            var number = Utils_1.default.stringToInt(lblBet.string) + value;
            number > _this_1.maxBetValue && (number = _this_1.maxBetValue);
            lblBet.string = Utils_1.default.formatNumber(number);
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.buttonsBet1.length; i++) _loop_1(i);
        var _loop_2 = function(i) {
          var btn = this_2.buttonsBet2[i];
          var value = btn.getComponentInChildren(cc.Label).string;
          btn.node.on("click", function() {
            if (_this_1.betingDoor === BetDoor.None) return;
            var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
            var number = Utils_1.default.stringToInt(lblBet.string + value);
            number > _this_1.maxBetValue && (number = _this_1.maxBetValue);
            lblBet.string = Utils_1.default.formatNumber(number);
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.buttonsBet2.length; i++) _loop_2(i);
        this.bowl.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var pos = _this_1.bowl.position;
          pos.x += event.getDeltaX();
          pos.y += event.getDeltaY();
          _this_1.bowl.position = pos;
          var distance = Utils_1.default.v2Distance(new cc.Vec2(pos.x, pos.y), _this_1.bowlStartPos);
          if (Math.abs(distance) > 100) {
            _this_1.bowl.active = false;
            _this_1.isOpenBowl = true;
            _this_1.showResult();
            _this_1.showWinCash();
          }
        }, this);
      };
      TaiXiuMini2Controller.prototype.show = function() {
        this.layoutBet.active = false;
        this.lblToast.node.parent.active = false;
        this.lblWinCash.node.active = false;
        this.layoutBet.active = false;
        this.diceAnim.active = false;
        this.bowl.active = false;
        this.dice1.node.active = false;
        this.dice2.node.active = false;
        this.dice3.node.active = false;
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendScribe());
        this.showChat();
      };
      TaiXiuMini2Controller.prototype.showChat = function() {
        this.panelChat = this.nodePanelChat.getComponent(TaiXiuMini2_PanelChat_1.default);
        this.panelChat.show(true);
      };
      TaiXiuMini2Controller.prototype.dismiss = function() {
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        null != this.panelChat && this.panelChat.show(false);
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendUnScribe());
      };
      TaiXiuMini2Controller.prototype.actClose = function() {
        TaiXiuDouble_Controller_1.default.instance.dismiss();
      };
      TaiXiuMini2Controller.prototype.actChat = function() {
        this.panelChat.show(!this.panelChat.node.active);
      };
      TaiXiuMini2Controller.prototype.actBetTai = function() {
        if (!this.isBetting) {
          this.showToast("Ch\u01b0a \u0111\u1ebfn th\u1eddi gian \u0111\u1eb7t c\u01b0\u1ee3c.");
          return;
        }
        if (this.betingValue >= 0) {
          this.showToast("B\u1ea1n thao t\xe1c qu\xe1 nhanh.");
          return;
        }
        if (this.betedXiu > 0) {
          this.showToast("B\u1ea1n kh\xf4ng th\u1ec3 \u0111\u1eb7t 2 c\u1eeda.");
          return;
        }
        this.betingDoor = BetDoor.Tai;
        this.lblBetTai.string = "0";
        this.lblBetXiu.string = "\u0110\u1eb6T";
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
      };
      TaiXiuMini2Controller.prototype.actBetXiu = function() {
        if (!this.isBetting) {
          this.showToast("Ch\u01b0a \u0111\u1ebfn th\u1eddi gian \u0111\u1eb7t c\u01b0\u1ee3c.");
          return;
        }
        if (this.betingValue >= 0) {
          this.showToast("B\u1ea1n thao t\xe1c qu\xe1 nhanh.");
          return;
        }
        if (this.betedTai > 0) {
          this.showToast("B\u1ea1n kh\xf4ng th\u1ec3 \u0111\u1eb7t 2 c\u1eeda.");
          return;
        }
        this.betingDoor = BetDoor.Xiu;
        this.lblBetXiu.string = "0";
        this.lblBetTai.string = "\u0110\u1eb6T";
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
      };
      TaiXiuMini2Controller.prototype.actOtherNumber = function() {
        this.layoutBet1.active = false;
        this.layoutBet2.active = true;
      };
      TaiXiuMini2Controller.prototype.actAgree = function() {
        if (this.betingValue >= 0 || !this.canBet) {
          this.showToast("B\u1ea1n thao t\xe1c qu\xe1 nhanh.");
          return;
        }
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        this.betingValue = Utils_1.default.stringToInt(lblBet.string);
        this.betingDoor = this.betingDoor;
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendBet(this.referenceId, this.betingValue, this.betingDoor == BetDoor.Tai ? 1 : 0, this.remainTime));
        lblBet.string = "0";
        this.canBet = false;
        this.scheduleOnce(function() {
          this.canBet = true;
        }, 1);
      };
      TaiXiuMini2Controller.prototype.actCancel = function() {
        this.lblBetXiu.string = "\u0110\u1eb6T";
        this.lblBetTai.string = "\u0110\u1eb6T";
        this.betingDoor = BetDoor.None;
        this.layoutBet.active = false;
      };
      TaiXiuMini2Controller.prototype.actBtnGapDoi = function() {
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string) + Configs_1.default.Login.Coin;
        number > this.maxBetValue && (number = this.maxBetValue);
        lblBet.string = Utils_1.default.formatNumber(number);
      };
      TaiXiuMini2Controller.prototype.actBtnDelete = function() {
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = "" + Utils_1.default.stringToInt(lblBet.string);
        number = number.substring(0, number.length - 1);
        number = Utils_1.default.formatNumber(Utils_1.default.stringToInt(number));
        lblBet.string = number;
      };
      TaiXiuMini2Controller.prototype.actBtn000 = function() {
        if (this.betingDoor === BetDoor.None) return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string + "000");
        number > this.maxBetValue && (number = this.maxBetValue);
        lblBet.string = Utils_1.default.formatNumber(number);
      };
      TaiXiuMini2Controller.prototype.actNan = function() {
        this.isNan = !this.isNan;
        this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan ? this.sprFrameBtnNan2 : this.sprFrameBtnNan;
      };
      TaiXiuMini2Controller.prototype.showResult = function() {
        this.lblScore.node.parent.active = true;
        this.lblScore.string = "" + this.lastScore;
        this.lastScore >= 11 ? this.tai.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)), cc.sequence(cc.tintTo(.3, 255, 255, 0), cc.tintTo(.3, 255, 255, 255))))) : this.xiu.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)), cc.sequence(cc.tintTo(.3, 255, 255, 0), cc.tintTo(.3, 255, 255, 255)))));
        this.updateBtnHistories();
      };
      TaiXiuMini2Controller.prototype.stopWin = function() {
        this.tai.stopAllActions();
        this.tai.runAction(cc.spawn(cc.scaleTo(.3, 1), cc.tintTo(.3, 255, 255, 255)));
        this.xiu.stopAllActions();
        this.xiu.runAction(cc.spawn(cc.scaleTo(.3, 1), cc.tintTo(.3, 255, 255, 255)));
      };
      TaiXiuMini2Controller.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      TaiXiuMini2Controller.prototype.showWinCash = function() {
        var _this_1 = this;
        if (this.lastWinCash <= 0) return;
        this.lblWinCash.node.stopAllActions();
        this.lblWinCash.node.active = true;
        this.lblWinCash.node.scale = 0;
        this.lblWinCash.node.setPosition(cc.Vec2.ZERO);
        Tween_1.default.numberTo(this.lblWinCash, this.lastWinCash, .5, function(n) {
          return "+" + n;
        });
        this.lblWinCash.node.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.callFunc(function() {
          _this_1.lblWinCash.node.active = false;
        })));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
      };
      TaiXiuMini2Controller.prototype.updateBtnHistories = function() {
        var _this_1 = this;
        var histories = this.histories.slice();
        histories.length > this.btnHistories.childrenCount && histories.splice(0, histories.length - this.btnHistories.childrenCount);
        var idx = histories.length - 1;
        var _loop_3 = function() {
          if (idx >= 0) {
            var _idx_1 = idx;
            score = histories[idx]["dices"][0] + histories[idx]["dices"][1] + histories[idx]["dices"][2];
            this_3.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame = score >= 11 ? this_3.sprFrameTai : this_3.sprFrameXiu;
            this_3.btnHistories.children[i].off("click");
            this_3.btnHistories.children[i].on("click", function(e, b) {
              _this_1.popupDetailHistory.showDetail(histories[_idx_1]["session"]);
            });
            this_3.btnHistories.children[i].active = true;
          } else this_3.btnHistories.children[i].active = false;
          idx--;
        };
        var this_3 = this, score;
        for (var i = this.btnHistories.childrenCount - 1; i >= 0; i--) _loop_3();
      };
      TaiXiuMini2Controller.prototype.sendChat = function(message) {
        var _this = this;
        if (!_this.isCanChat) {
          this.showToast("B\u1ea1n thao t\xe1c qu\xe1 nhanh.");
          return;
        }
        _this.isCanChat = false;
        this.scheduleOnce(function() {
          _this.isCanChat = true;
        }, 1);
        var req = new TaiXiuMini2_Cmd_1.default.SendChat(unescape(encodeURIComponent(message)));
        TX2NetworkClient_1.default.getInstance().send(req);
      };
      var TaiXiuMini2Controller_1;
      TaiXiuMini2Controller.instance = null;
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "gamePlay", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TaiXiuMini2Controller.prototype, "sprDices", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMini2Controller.prototype, "sprFrameTai", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMini2Controller.prototype, "sprFrameXiu", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMini2Controller.prototype, "sprFrameBtnNan", void 0);
      __decorate([ property(cc.SpriteFrame) ], TaiXiuMini2Controller.prototype, "sprFrameBtnNan2", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblRemainTime", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblRemainTime2", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblScore", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblUserTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblUserXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblBetXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblBetedTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblBetedXiu", void 0);
      __decorate([ property(cc.Sprite) ], TaiXiuMini2Controller.prototype, "dice1", void 0);
      __decorate([ property(cc.Sprite) ], TaiXiuMini2Controller.prototype, "dice2", void 0);
      __decorate([ property(cc.Sprite) ], TaiXiuMini2Controller.prototype, "dice3", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "diceAnim", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "bowl", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "tai", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "xiu", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "btnHistories", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "nodePanelChat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "layoutBet", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "layoutBet1", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "layoutBet2", void 0);
      __decorate([ property([ cc.Button ]) ], TaiXiuMini2Controller.prototype, "buttonsBet1", void 0);
      __decorate([ property([ cc.Button ]) ], TaiXiuMini2Controller.prototype, "buttonsBet2", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblToast", void 0);
      __decorate([ property(cc.Label) ], TaiXiuMini2Controller.prototype, "lblWinCash", void 0);
      __decorate([ property(cc.Node) ], TaiXiuMini2Controller.prototype, "btnNan", void 0);
      __decorate([ property(TaiXiuMini2_PopupDetailHistory_1.default) ], TaiXiuMini2Controller.prototype, "popupDetailHistory", void 0);
      __decorate([ property([ cc.Node ]) ], TaiXiuMini2Controller.prototype, "popups", void 0);
      TaiXiuMini2Controller = TaiXiuMini2Controller_1 = __decorate([ ccclass ], TaiXiuMini2Controller);
      return TaiXiuMini2Controller;
    }(cc.Component);
    exports.default = TaiXiuMini2Controller;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient": void 0,
    "../src/TaiXiuDouble.Controller": "TaiXiuDouble.Controller",
    "./TaiXiuMini2.Cmd": "TaiXiuMini2.Cmd",
    "./TaiXiuMini2.PanelChat": "TaiXiuMini2.PanelChat",
    "./TaiXiuMini2.PopupDetailHistory": "TaiXiuMini2.PopupDetailHistory"
  } ]
}, {}, [ "TaiXiuMini.Cmd", "TaiXiuMini.PanelChat", "TaiXiuMini.PopupDetailHistory", "TaiXiuMini.PopupHistory", "TaiXiuMini.PopupHonors", "TaiXiuMini.PopupSoiCau", "TaiXiuMini.PopupThanhDu", "TaiXiuMini.TaiXiuMiniController", "TaiXiuMini2.Cmd", "TaiXiuMini2.PanelChat", "TaiXiuMini2.PopupDetailHistory", "TaiXiuMini2.PopupHistory", "TaiXiuMini2.PopupHonors", "TaiXiuMini2.PopupSoiCau", "TaiXiuMini2.PopupThanhDu", "TaiXiuMini2.TaiXiuMiniController", "TaiXiuDouble.Controller" ]);