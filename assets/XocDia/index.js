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
  "XocDia.BankerControl": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36b7fjVXSdDd7tf49SjRCAj", "XocDia.BankerControl");
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
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var XocDia_Cmd_1 = require("./XocDia.Cmd");
    var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BankerControl = function(_super) {
      __extends(BankerControl, _super);
      function BankerControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblTitle = null;
        _this.slider = null;
        _this.lblCoin = null;
        _this.panelSell = null;
        _this.coinOdd = 0;
        _this.coinEven = 0;
        _this.maxCoin = 0;
        _this.minCoin = 1;
        _this.coin = 0;
        _this.sellingEven = false;
        return _this;
      }
      BankerControl.prototype.start = function() {
        var _this = this;
        this.slider.node.on("slide", function() {
          _this.coin = _this.minCoin + Math.round((_this.maxCoin - _this.minCoin) * _this.slider.progress);
          _this.lblCoin.string = Utils_1.default.formatNumber(_this.coin);
        });
      };
      BankerControl.prototype.show = function(coinOdd, coinEven) {
        this.coinOdd = coinOdd;
        this.coinEven = coinEven;
        this.panelSell.active = false;
        this.node.active = true;
      };
      BankerControl.prototype.actCanTat = function() {
        this.node.active = false;
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendBankerSellGate(1, this.coin));
      };
      BankerControl.prototype.actSellOdd = function() {
        this.lblTitle.string = "\u101b\u1031\u102c\u1004\u103a\u1038 odd";
        this.maxCoin = this.coinOdd;
        this.coin = this.maxCoin;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        this.slider.progress = 1;
        this.panelSell.active = true;
        this.sellingEven = false;
      };
      BankerControl.prototype.actSellEven = function() {
        this.lblTitle.string = "\u101b\u1031\u102c\u1004\u103a\u1038 even";
        this.maxCoin = this.coinEven;
        this.coin = this.maxCoin;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        this.slider.progress = 1;
        this.panelSell.active = true;
        this.sellingEven = true;
      };
      BankerControl.prototype.actSell = function() {
        this.node.active = false;
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendBankerSellGate(this.sellingEven ? 2 : 3, this.coin));
      };
      __decorate([ property(cc.Label) ], BankerControl.prototype, "lblTitle", void 0);
      __decorate([ property(cc.Slider) ], BankerControl.prototype, "slider", void 0);
      __decorate([ property(cc.Label) ], BankerControl.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Node) ], BankerControl.prototype, "panelSell", void 0);
      BankerControl = __decorate([ ccclass ], BankerControl);
      return BankerControl;
    }(cc.Component);
    exports.default = BankerControl;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./XocDia.Cmd": "XocDia.Cmd",
    "./XocDia.XocDiaNetworkClient": "XocDia.XocDiaNetworkClient"
  } ],
  "XocDia.BtnBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7b5fPk1DhBUIdjn73/qfit", "XocDia.BtnBet");
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
    var BtnBet = function(_super) {
      __extends(BtnBet, _super);
      function BtnBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.active = null;
        _this.normal = null;
        _this.label = null;
        return _this;
      }
      __decorate([ property(cc.Node) ], BtnBet.prototype, "active", void 0);
      __decorate([ property(cc.Sprite) ], BtnBet.prototype, "normal", void 0);
      __decorate([ property(cc.Label) ], BtnBet.prototype, "label", void 0);
      BtnBet = __decorate([ ccclass ], BtnBet);
      return BtnBet;
    }(cc.Component);
    exports.default = BtnBet;
    cc._RF.pop();
  }, {} ],
  "XocDia.BtnPayBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3459e6zgREZIOLiazh9KoS", "XocDia.BtnPayBet");
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
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnPayBet = function(_super) {
      __extends(BtnPayBet, _super);
      function BtnPayBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblTotalBet = null;
        _this.active = null;
        return _this;
      }
      BtnPayBet.prototype.reset = function() {
        this.lblTotalBet.string = "";
        this.active.active = false;
      };
      BtnPayBet.prototype.setTotalBet = function(coin) {
        this.lblTotalBet.string = coin > 0 ? Utils_1.default.formatMoney(coin) : "";
      };
      __decorate([ property(cc.Label) ], BtnPayBet.prototype, "lblTotalBet", void 0);
      __decorate([ property(cc.Node) ], BtnPayBet.prototype, "active", void 0);
      BtnPayBet = __decorate([ ccclass ], BtnPayBet);
      return BtnPayBet;
    }(cc.Component);
    exports.default = BtnPayBet;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "XocDia.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10b98AUpqVENYK8MM95BNtG", "XocDia.Cmd");
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
    var Configs_1 = require("../../Loading/src/Configs");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.LOGIN = 1;
        Code.GETLISTROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.CMDJOINROOMFAIL = 3004;
        Code.CMDRECONNECTGAMEROOM = 3002;
        Code.REQUEST_INFO_MOI_CHOI = 3010;
        Code.MOI_CHOI = 3011;
        Code.ACCEPT_MOI_CHOI = 3012;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.JOIN_ROOM_SUCCESS = 3101;
        Code.USER_JOIN_ROOM_SUCCESS = 3102;
        Code.USER_OUT_ROOM = 3104;
        Code.ORDER_BANKER = 3113;
        Code.ACTION_IN_GAME = 3105;
        Code.PUT_MONEY = 3106;
        Code.PUT_MONEY_X2 = 3115;
        Code.PUT_ALL_IN = 3116;
        Code.QUIT_ROOM = 3103;
        Code.DANG_KY_THOAT_PHONG = 3100;
        Code.START_GAME = 3117;
        Code.BANKER_SELL_GATE = 3110;
        Code.BUY_GATE = 3111;
        Code.REFUN_MONEY = 3118;
        Code.FINISH_GAME = 3112;
        Code.GET_TIME = 3119;
        Code.HUY_LAM_CAI = 3130;
        Code.STOP_GAME = 3122;
        Code.SOI_CAU = 3121;
        Code.MESSAGE_ERROR_BANKER = 3123;
        Code.SET_CHEAT = 3124;
        Code.CHAT_MS = 3008;
        Code.INFO_GATE_SELL = 3126;
        Code.INFO_MONEY_AFTER_BANKER_SELL = 3128;
        Code.ACTION_BANKER = 3127;
        Code.KICK_OUT_XOCDIA = 3132;
        Code.DESTROY_ROOM = 3133;
        Code.LOCK_GATE = 3131;
        Code.GET_MONEY_LAI = 3134;
        Code.UPDATE_CURRENT_MONEY = 3135;
        return Code;
      }();
      cmd.Code = Code;
      var SendGetListRoom = function(_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.GETLISTROOM);
          _this.packHeader();
          _this.putInt(Configs_1.default.App.MONEY_TYPE);
          _this.putInt(30);
          _this.putLong(-1);
          _this.putInt(0);
          _this.putInt(0);
          _this.putInt(50);
          _this.updateSize();
          return _this;
        }
        return SendGetListRoom;
      }(Network_OutPacket_1.default);
      cmd.SendGetListRoom = SendGetListRoom;
      var ReceiveGetListRoom = function(_super) {
        __extends(ReceiveGetListRoom, _super);
        function ReceiveGetListRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.list = [];
          var listSize = _this.getShort();
          _this.list = [];
          for (var i = 0; i < listSize; i++) {
            var item = {};
            item["id"] = _this.getInt();
            item["userCount"] = _this.getByte();
            item["limitPlayer"] = _this.getByte();
            item["maxUserPerRoom"] = _this.getInt();
            item["moneyType"] = _this.getByte();
            item["moneyBet"] = _this.getInt();
            item["requiredMoney"] = _this.getInt();
            item["rule"] = _this.getByte();
            item["nameRoom"] = _this.getString();
            item["key"] = _this.getBool();
            item["quyban"] = _this.getLong();
            _this.list.push(item);
          }
          return _this;
        }
        return ReceiveGetListRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveGetListRoom = ReceiveGetListRoom;
      var SendJoinRoomById = function(_super) {
        __extends(SendJoinRoomById, _super);
        function SendJoinRoomById(id) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.JOIN_GAME_ROOM_BY_ID);
          _this.packHeader();
          _this.putInt(id);
          _this.putString("");
          _this.updateSize();
          return _this;
        }
        return SendJoinRoomById;
      }(Network_OutPacket_1.default);
      cmd.SendJoinRoomById = SendJoinRoomById;
      var ReceiveJoinRoomSuccess = function(_super) {
        __extends(ReceiveJoinRoomSuccess, _super);
        function ReceiveJoinRoomSuccess(data) {
          var _this = _super.call(this, data) || this;
          _this.moneyBet = 0;
          _this.roomId = 0;
          _this.gameId = 0;
          _this.moneyType = 0;
          _this.gameState = 0;
          _this.countTime = 0;
          _this.playerCount = 0;
          _this.potID = [];
          _this.playerInfos = [];
          _this.money = 0;
          _this.banker = false;
          _this.isSubBanker = false;
          _this.purchaseStatus = 0;
          _this.potPurchase = 0;
          _this.moneyPurchaseEven = 0;
          _this.moneyPurchaseOdd = 0;
          _this.moneyRemain = 0;
          _this.subListCount = 0;
          _this.list_buy_gate = [];
          _this.bankerReqDestroy = false;
          _this.bossReqDestroy = false;
          _this.rule = 0;
          _this.moneyRegisBanker = 0;
          _this.moneyBet = _this.getInt();
          _this.roomId = _this.getInt();
          _this.gameId = _this.getInt();
          _this.moneyType = _this.getByte();
          _this.gameState = _this.getByte();
          _this.countTime = _this.getInt();
          _this.playerCount = _this.getByte();
          _this.potID = [];
          for (var a = 0; 6 > a; a++) {
            var b = {};
            b["id"] = _this.getByte();
            b["ratio"] = _this.getInt();
            b["maxMoneyBet"] = _this.getLong();
            b["totalMoney"] = _this.getLong();
            b["moneyBet"] = _this.getLong();
            b["isLock"] = _this.getBool();
            _this.potID.push(b);
          }
          _this.playerInfos = [];
          for (var a = 0; a < _this.playerCount; a++) {
            var b = {};
            b["nickname"] = _this.getString();
            b["avatar"] = _this.getString();
            b["money"] = _this.getLong();
            b["banker"] = _this.getBool();
            b["isSubBanker"] = _this.getBool();
            b["reqKickroom"] = _this.getBool();
            _this.playerInfos.push(b);
          }
          _this.money = _this.getLong();
          _this.banker = _this.getBool();
          _this.isSubBanker = _this.getBool();
          _this.purchaseStatus = _this.getInt();
          _this.potPurchase = _this.getInt();
          _this.moneyPurchaseEven = _this.getLong();
          _this.moneyPurchaseOdd = _this.getLong();
          _this.moneyRemain = _this.getLong();
          _this.subListCount = _this.getInt();
          _this.list_buy_gate = [];
          for (var a = 0; a < _this.subListCount; a++) {
            var b = {};
            b["nickname"] = _this.getString();
            b["money"] = _this.getLong();
            _this.list_buy_gate.push(b);
          }
          _this.bankerReqDestroy = _this.getBool();
          _this.bossReqDestroy = _this.getBool();
          _this.rule = _this.getInt();
          _this.moneyRegisBanker = _this.getLong();
          return _this;
        }
        return ReceiveJoinRoomSuccess;
      }(Network_InPacket_1.default);
      cmd.ReceiveJoinRoomSuccess = ReceiveJoinRoomSuccess;
      var ReceiveJoinRoomFail = function(_super) {
        __extends(ReceiveJoinRoomFail, _super);
        function ReceiveJoinRoomFail(data) {
          return _super.call(this, data) || this;
        }
        return ReceiveJoinRoomFail;
      }(Network_InPacket_1.default);
      cmd.ReceiveJoinRoomFail = ReceiveJoinRoomFail;
      var SendLeaveRoom = function(_super) {
        __extends(SendLeaveRoom, _super);
        function SendLeaveRoom() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DANG_KY_THOAT_PHONG);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendLeaveRoom;
      }(Network_OutPacket_1.default);
      cmd.SendLeaveRoom = SendLeaveRoom;
      var ReceiveLeavedRoom = function(_super) {
        __extends(ReceiveLeavedRoom, _super);
        function ReceiveLeavedRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.reason = 0;
          _this.reason = _this.getByte();
          return _this;
        }
        return ReceiveLeavedRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveLeavedRoom = ReceiveLeavedRoom;
      var ReceiveLeaveRoom = function(_super) {
        __extends(ReceiveLeaveRoom, _super);
        function ReceiveLeaveRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.bRegis = false;
          _this.nickname = "";
          _this.bRegis = _this.getBool();
          _this.nickname = _this.getString();
          return _this;
        }
        return ReceiveLeaveRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveLeaveRoom = ReceiveLeaveRoom;
      var ReceiveUserJoinRoom = function(_super) {
        __extends(ReceiveUserJoinRoom, _super);
        function ReceiveUserJoinRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.nickname = "";
          _this.avatar = "";
          _this.money = 0;
          _this.nickname = _this.getString();
          _this.avatar = _this.getString();
          _this.money = _this.getLong();
          return _this;
        }
        return ReceiveUserJoinRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveUserJoinRoom = ReceiveUserJoinRoom;
      var ReceiveUserOutRoom = function(_super) {
        __extends(ReceiveUserOutRoom, _super);
        function ReceiveUserOutRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.nickname = "";
          _this.nickname = _this.getString();
          return _this;
        }
        return ReceiveUserOutRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveUserOutRoom = ReceiveUserOutRoom;
      var ReceiveActionInGame = function(_super) {
        __extends(ReceiveActionInGame, _super);
        function ReceiveActionInGame(data) {
          var _this = _super.call(this, data) || this;
          _this.action = 0;
          _this.time = 0;
          _this.action = _this.getByte();
          _this.time = _this.getByte();
          return _this;
        }
        return ReceiveActionInGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveActionInGame = ReceiveActionInGame;
      var ReceiveStartGame = function(_super) {
        __extends(ReceiveStartGame, _super);
        function ReceiveStartGame(data) {
          var _this = _super.call(this, data) || this;
          _this.banker = "";
          _this.gameId = 0;
          _this.moneyBanker = 0;
          _this.list_lock_gate = [];
          _this.banker = _this.getString();
          _this.gameId = _this.getInt();
          _this.moneyBanker = _this.getLong();
          _this.list_lock_gate = [];
          for (var a = 0; 6 > a; a++) {
            var b = {};
            b["id"] = _this.getByte();
            b["isLock"] = _this.getBool();
            _this.list_lock_gate.push(b);
          }
          return _this;
        }
        return ReceiveStartGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveStartGame = ReceiveStartGame;
      var SendPutMoney = function(_super) {
        __extends(SendPutMoney, _super);
        function SendPutMoney(doorId, coin) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.PUT_MONEY);
          _this.packHeader();
          _this.putByte(doorId);
          _this.putLong(coin);
          _this.updateSize();
          return _this;
        }
        return SendPutMoney;
      }(Network_OutPacket_1.default);
      cmd.SendPutMoney = SendPutMoney;
      var ReceivePutMoney = function(_super) {
        __extends(ReceivePutMoney, _super);
        function ReceivePutMoney(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.nickname = "";
          _this.betMoney = 0;
          _this.potId = 0;
          _this.potMoney = 0;
          _this.currentMoney = 0;
          _this.error = _this.getError();
          _this.nickname = _this.getString();
          _this.betMoney = _this.getLong();
          _this.potId = _this.getByte();
          _this.potMoney = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceivePutMoney;
      }(Network_InPacket_1.default);
      cmd.ReceivePutMoney = ReceivePutMoney;
      var ReceiveBankerSellGate = function(_super) {
        __extends(ReceiveBankerSellGate, _super);
        function ReceiveBankerSellGate(data) {
          var _this = _super.call(this, data) || this;
          _this.action = 0;
          _this.moneySell = 0;
          _this.action = _this.getByte();
          _this.moneySell = _this.getLong();
          return _this;
        }
        return ReceiveBankerSellGate;
      }(Network_InPacket_1.default);
      cmd.ReceiveBankerSellGate = ReceiveBankerSellGate;
      var SendBuyGate = function(_super) {
        __extends(SendBuyGate, _super);
        function SendBuyGate(coin) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BUY_GATE);
          _this.packHeader();
          _this.putLong(coin);
          _this.updateSize();
          return _this;
        }
        return SendBuyGate;
      }(Network_OutPacket_1.default);
      cmd.SendBuyGate = SendBuyGate;
      var ReceiveBuyGate = function(_super) {
        __extends(ReceiveBuyGate, _super);
        function ReceiveBuyGate(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.nickname = "";
          _this.moneyBuy = 0;
          _this.rmMoneySell = 0;
          _this.error = _this.getError();
          _this.nickname = _this.getString();
          _this.moneyBuy = _this.getLong();
          _this.rmMoneySell = _this.getLong();
          return _this;
        }
        return ReceiveBuyGate;
      }(Network_InPacket_1.default);
      cmd.ReceiveBuyGate = ReceiveBuyGate;
      var ReceiveRefunMoney = function(_super) {
        __extends(ReceiveRefunMoney, _super);
        function ReceiveRefunMoney(data) {
          var _this = _super.call(this, data) || this;
          _this.rfCount = 0;
          _this.potID = [];
          _this.playerInfosRefun = [];
          _this.rfCount = _this.getInt();
          for (var a = 0; 6 > a; a++) {
            var b = {};
            b["id"] = _this.getByte();
            b["moneyRefund"] = _this.getLong();
            b["totalMoney"] = _this.getLong();
            _this.potID.push(b);
          }
          _this.playerInfosRefun = [];
          for (var a = 0; a < _this.rfCount; a++) {
            var b = {};
            b["nickname"] = _this.getString();
            b["moneyRefund"] = _this.getLong();
            b["currentMoney"] = _this.getLong();
            b["pots"] = _this.getString();
            b["moneyRfPots"] = _this.getString();
            _this.playerInfosRefun.push(b);
          }
          return _this;
        }
        return ReceiveRefunMoney;
      }(Network_InPacket_1.default);
      cmd.ReceiveRefunMoney = ReceiveRefunMoney;
      var ReceiveFinishGame = function(_super) {
        __extends(ReceiveFinishGame, _super);
        function ReceiveFinishGame(data) {
          var _this = _super.call(this, data) || this;
          _this.infoAllPot = [];
          _this.diceIDs = [];
          _this.moneyBankerBefore = 0;
          _this.moneyBankerAfter = 0;
          _this.moneyBankerExchange = 0;
          _this.playerInfoWin = [];
          _this.subListCount = 0;
          _this.infoSubBanker = [];
          for (var a = 0; 6 > a; a++) {
            var b = {};
            b["potId"] = _this.getByte();
            b["totalMoney"] = _this.getLong();
            b["win"] = _this.getBool();
            _this.infoAllPot.push(b);
          }
          for (var a = 0; 4 > a; a++) _this.diceIDs.push(_this.getInt());
          _this.moneyBankerBefore = _this.getLong();
          _this.moneyBankerAfter = _this.getLong();
          _this.moneyBankerExchange = _this.getLong();
          var playerWinCount = _this.getInt();
          for (var a = 0; a < playerWinCount; a++) {
            var b = {};
            b["nickname"] = _this.getString();
            b["moneyWin"] = _this.getLong();
            b["currentMoney"] = _this.getLong();
            b["potsWin"] = _this.getString();
            b["moneyWinPots"] = _this.getString();
            _this.playerInfoWin.push(b);
          }
          _this.subListCount = _this.getInt();
          for (var a = 0; a < _this.subListCount; a++) {
            var b = {};
            b["nicknameSubbanker"] = _this.getString();
            b["potSubBanker"] = _this.getByte();
            b["moneySubBanker"] = _this.getLong();
            b["moneySubBankerNoFee"] = _this.getLong();
            b["currentMoneySubBanker"] = _this.getLong();
            _this.infoSubBanker.push(b);
          }
          return _this;
        }
        return ReceiveFinishGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveFinishGame = ReceiveFinishGame;
      var SendReconnect = function(_super) {
        __extends(SendReconnect, _super);
        function SendReconnect() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CMDRECONNECTGAMEROOM);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendReconnect;
      }(Network_OutPacket_1.default);
      cmd.SendReconnect = SendReconnect;
      var CmdSendGetCau = function(_super) {
        __extends(CmdSendGetCau, _super);
        function CmdSendGetCau() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SOI_CAU);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdSendGetCau;
      }(Network_OutPacket_1.default);
      cmd.CmdSendGetCau = CmdSendGetCau;
      var ReceiveGetCau = function(_super) {
        __extends(ReceiveGetCau, _super);
        function ReceiveGetCau(data) {
          var _this = _super.call(this, data) || this;
          _this.totalEven = 0;
          _this.totalOdd = 0;
          _this.rsCount = 0;
          _this.arrayCau = [];
          _this.totalEven = _this.getInt();
          _this.totalOdd = _this.getInt();
          _this.rsCount = _this.getInt();
          for (var a = 0; a < _this.rsCount; a++) _this.arrayCau.push(_this.getByte());
          return _this;
        }
        return ReceiveGetCau;
      }(Network_InPacket_1.default);
      cmd.ReceiveGetCau = ReceiveGetCau;
      var SendOrderBanker = function(_super) {
        __extends(SendOrderBanker, _super);
        function SendOrderBanker() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.ORDER_BANKER);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendOrderBanker;
      }(Network_OutPacket_1.default);
      cmd.SendOrderBanker = SendOrderBanker;
      var ReceiveOrderBanker = function(_super) {
        __extends(ReceiveOrderBanker, _super);
        function ReceiveOrderBanker(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.moneyRequire = 0;
          _this.error = _this.getError();
          _this.moneyRequire = _this.getLong();
          return _this;
        }
        return ReceiveOrderBanker;
      }(Network_InPacket_1.default);
      cmd.ReceiveOrderBanker = ReceiveOrderBanker;
      var ReceiveInfoGateSell = function(_super) {
        __extends(ReceiveInfoGateSell, _super);
        function ReceiveInfoGateSell(data) {
          var _this = _super.call(this, data) || this;
          _this.moneyEven = 0;
          _this.moneyOdd = 0;
          _this.moneyEven = _this.getLong();
          _this.moneyOdd = _this.getLong();
          return _this;
        }
        return ReceiveInfoGateSell;
      }(Network_InPacket_1.default);
      cmd.ReceiveInfoGateSell = ReceiveInfoGateSell;
      var SendCancelBanker = function(_super) {
        __extends(SendCancelBanker, _super);
        function SendCancelBanker() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.HUY_LAM_CAI);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendCancelBanker;
      }(Network_OutPacket_1.default);
      cmd.SendCancelBanker = SendCancelBanker;
      var ReceiveCancelBanker = function(_super) {
        __extends(ReceiveCancelBanker, _super);
        function ReceiveCancelBanker(data) {
          var _this = _super.call(this, data) || this;
          _this.bDestroy = false;
          _this.nickname = "";
          _this.bDestroy = _this.getBool();
          _this.nickname = _this.getString();
          return _this;
        }
        return ReceiveCancelBanker;
      }(Network_InPacket_1.default);
      cmd.ReceiveCancelBanker = ReceiveCancelBanker;
      var SendBankerSellGate = function(_super) {
        __extends(SendBankerSellGate, _super);
        function SendBankerSellGate(door, coin) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BANKER_SELL_GATE);
          _this.packHeader();
          _this.putByte(door);
          _this.putLong(coin);
          _this.updateSize();
          return _this;
        }
        return SendBankerSellGate;
      }(Network_OutPacket_1.default);
      cmd.SendBankerSellGate = SendBankerSellGate;
      var ReceiveInfoMoneyAfterBankerSell = function(_super) {
        __extends(ReceiveInfoMoneyAfterBankerSell, _super);
        function ReceiveInfoMoneyAfterBankerSell(data) {
          var _this = _super.call(this, data) || this;
          _this.money = 0;
          _this.money = _this.getLong();
          return _this;
        }
        return ReceiveInfoMoneyAfterBankerSell;
      }(Network_InPacket_1.default);
      cmd.ReceiveInfoMoneyAfterBankerSell = ReceiveInfoMoneyAfterBankerSell;
      var SendRequestInfoMoiChoi = function(_super) {
        __extends(SendRequestInfoMoiChoi, _super);
        function SendRequestInfoMoiChoi() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.REQUEST_INFO_MOI_CHOI);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendRequestInfoMoiChoi;
      }(Network_OutPacket_1.default);
      cmd.SendRequestInfoMoiChoi = SendRequestInfoMoiChoi;
      var SendMoiChoi = function(_super) {
        __extends(SendMoiChoi, _super);
        function SendMoiChoi(nicknames) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.MOI_CHOI);
          _this.packHeader();
          _this.putShort(nicknames.length);
          for (var b = 0; b < nicknames.length; b++) _this.putString(nicknames[b]);
          _this.updateSize();
          return _this;
        }
        return SendMoiChoi;
      }(Network_OutPacket_1.default);
      cmd.SendMoiChoi = SendMoiChoi;
      var SendAcceptMoiChoi = function(_super) {
        __extends(SendAcceptMoiChoi, _super);
        function SendAcceptMoiChoi(name) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.ACCEPT_MOI_CHOI);
          _this.packHeader();
          _this.putString(name);
          _this.updateSize();
          return _this;
        }
        return SendAcceptMoiChoi;
      }(Network_OutPacket_1.default);
      cmd.SendAcceptMoiChoi = SendAcceptMoiChoi;
      var SendChatRoom = function(_super) {
        __extends(SendChatRoom, _super);
        function SendChatRoom(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHAT_MS);
          _this.packHeader();
          _this.putByte(a ? 1 : 0);
          _this.putString(encodeURI(b));
          _this.updateSize();
          return _this;
        }
        return SendChatRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChatRoom = SendChatRoom;
      var ReceivedChatRoom = function(_super) {
        __extends(ReceivedChatRoom, _super);
        function ReceivedChatRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          _this.isIcon = _this.getBool();
          _this.content = decodeURI(_this.getString());
          _this.nickname = _this.getString();
          return _this;
        }
        return ReceivedChatRoom;
      }(Network_InPacket_1.default);
      cmd.ReceivedChatRoom = ReceivedChatRoom;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "XocDia.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e864aZj2fBCELbAAQvxYhIR", "XocDia.Lobby");
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
    var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
    var XocDia_Cmd_1 = require("./XocDia.Cmd");
    var XocDia_XocDiaController_1 = require("./XocDia.XocDiaController");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lobby = function(_super) {
      __extends(Lobby, _super);
      function Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.sprAvatar = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.listItems = null;
        _this.scrRoom = null;
        _this.inited = false;
        _this.dataRoom = [];
        _this.isSortRoom = false;
        return _this;
      }
      Lobby.prototype.start = function() {};
      Lobby.prototype.onBtnSortRoomId = function() {
        false == this.isSortRoom ? this.dataRoom && this.dataRoom.sort(function(x, y) {
          return x.id - y.id;
        }) : this.dataRoom && this.dataRoom.sort(function(x, y) {
          return y.id - x.id;
        });
        this.isSortRoom = !this.isSortRoom;
        this.scrRoom.content.removeAllChildren();
        for (var i = 0; i < this.dataRoom.length; i++) {
          var item = cc.instantiate(this.itemPrefab);
          item.active = true;
          this.scrRoom.content.addChild(item);
          item.getComponent("XocDia.Room").init(this.dataRoom[i]);
        }
      };
      Lobby.prototype.onBtnSortRoomMoney = function() {
        false == this.isSortMoney ? this.dataRoom && this.dataRoom.sort(function(x, y) {
          return x.requiredMoney - y.requiredMoney;
        }) : this.dataRoom && this.dataRoom.sort(function(x, y) {
          return y.requiredMoney - x.requiredMoney;
        });
        this.isSortMoney = !this.isSortMoney;
        this.scrRoom.content.removeAllChildren();
        for (var i = 0; i < this.dataRoom.length; i++) {
          var item = cc.instantiate(this.itemPrefab);
          item.active = true;
          this.scrRoom.content.addChild(item);
          item.getComponent("XocDia.Room").init(this.dataRoom[i]);
        }
      };
      Lobby.prototype.init = function() {
        var _this = this;
        if (this.inited) return;
        this.inited = true;
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        this.lblNickname.string = Configs_1.default.Login.Nickname;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          if (!_this.node.active) return;
          _this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function(data) {
          if (!_this.node.active) return;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case XocDia_Cmd_1.default.Code.LOGIN:
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendReconnect());
            break;

           case XocDia_Cmd_1.default.Code.GETLISTROOM:
            var res = new XocDia_Cmd_1.default.ReceiveGetListRoom(data);
            _this.scrRoom.content.removeAllChildren();
            _this.dataRoom = res.list;
            _this.dataRoom.sort(function(x, y) {
              return x.id - y.id;
            });
            for (var i = 0; i < _this.dataRoom.length; i++) {
              var item = cc.instantiate(_this.itemPrefab);
              item.active = true;
              _this.scrRoom.content.addChild(item);
              item.getComponent("XocDia.Room").init(_this.dataRoom[i]);
            }
            break;

           case XocDia_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            App_1.default.instance.showLoading(false);
            var res = new XocDia_Cmd_1.default.ReceiveJoinRoomFail(data);
            var msg = "Error " + res.getError() + ", \u101e\u1010\u103a\u1019\u103e\u1010\u103a\u1019\u1011\u102c\u1038\u101e\u1031\u102c.";
            switch (res.getError()) {
             case 1:
              msg = App_1.default.instance.getTextLang("txt_room_err1");
              break;

             case 2:
              msg = App_1.default.instance.getTextLang("txt_room_err2");
              break;

             case 3:
              msg = App_1.default.instance.getTextLang("txt_room_err3");
              break;

             case 4:
              msg = App_1.default.instance.getTextLang("txt_room_err2");
              break;

             case 5:
              msg = App_1.default.instance.getTextLang("txt_room_err5");
              break;

             case 6:
              msg = App_1.default.instance.getTextLang("txt_room_err6");
              break;

             case 7:
              msg = App_1.default.instance.getTextLang("txt_room_err2");
              break;

             case 8:
              msg = App_1.default.instance.getTextLang("txt_room_err11");
              break;

             case 9:
              msg = App_1.default.instance.getTextLang("txt_room_err9");
              break;

             case 10:
              msg = App_1.default.instance.getTextLang("txt_room_err10");
            }
            App_1.default.instance.alertDialog.showMsg(msg);
            break;

           case XocDia_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            App_1.default.instance.showLoading(false);
            var res = new XocDia_Cmd_1.default.ReceiveJoinRoomSuccess(data);
            XocDia_XocDiaController_1.default.instance.showGamePlay(res);
          }
        }, this);
      };
      Lobby.prototype.show = function() {
        this.node.active = true;
        this.actRefesh();
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
      };
      Lobby.prototype.actQuickPlay = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendJoinRoomById(1));
      };
      Lobby.prototype.actRefesh = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendGetListRoom());
      };
      Lobby.prototype.actBack = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      Lobby.prototype.actCreateTable = function() {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_room_err12"));
      };
      __decorate([ property(cc.Prefab) ], Lobby.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Sprite) ], Lobby.prototype, "sprAvatar", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "listItems", void 0);
      __decorate([ property(cc.ScrollView) ], Lobby.prototype, "scrRoom", void 0);
      Lobby = __decorate([ ccclass ], Lobby);
      return Lobby;
    }(cc.Component);
    exports.default = Lobby;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./XocDia.Cmd": "XocDia.Cmd",
    "./XocDia.XocDiaController": "XocDia.XocDiaController",
    "./XocDia.XocDiaNetworkClient": "XocDia.XocDiaNetworkClient"
  } ],
  "XocDia.PanelPayDoor": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "089fbucxjFKWpNuCc5T8uJY", "XocDia.PanelPayDoor");
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
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PanelPayDoor = function(_super) {
      __extends(PanelPayDoor, _super);
      function PanelPayDoor() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title1 = null;
        _this.title2 = null;
        _this.itemTemplate = null;
        _this.slider = null;
        _this.sprProgress = null;
        _this.lblCoin = null;
        _this.coin = 1;
        _this.minCoin = 1;
        _this.maxCoin = 0;
        return _this;
      }
      PanelPayDoor.prototype.start = function() {
        var _this = this;
        this.slider.node.on("slide", function() {
          _this.updateValue();
        });
      };
      PanelPayDoor.prototype.show = function(action, maxCoin) {
        this.title1.string = this.title2.string = 2 == action ? "\u101d\u101a\u103a\u101a\u1030\u1001\u103c\u1004\u103a\u1038\u104b even" : "\u101d\u101a\u103a\u101a\u1030\u1001\u103c\u1004\u103a\u1038\u104b odd";
        this.coin = this.minCoin;
        this.maxCoin = maxCoin;
        this.node.active = true;
        this.itemTemplate.active = false;
        for (var i = 1; i < this.itemTemplate.parent.childrenCount; i++) this.itemTemplate.parent.children[i].destroy();
        this.slider.progress = 1;
        this.sprProgress.fillRange = 1;
        this.updateValue();
      };
      PanelPayDoor.prototype.addUser = function(nickname, coin, newMaxCoin) {
        0 == newMaxCoin && (this.node.active = false);
        this.maxCoin = newMaxCoin;
        this.coin > this.maxCoin && (this.coin = this.maxCoin);
        this.slider.progress = this.coin / (this.maxCoin - this.minCoin);
        this.sprProgress.fillRange = this.slider.progress;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        var item = cc.instantiate(this.itemTemplate);
        item.parent = this.itemTemplate.parent;
        item.getChildByName("lblNickname").getComponent(cc.Label).string = nickname;
        item.getChildByName("lblCoin").getComponent(cc.Label).string = Utils_1.default.formatMoney(coin);
        item.active = true;
      };
      PanelPayDoor.prototype.getCoin = function() {
        return this.coin;
      };
      PanelPayDoor.prototype.updateValue = function() {
        this.sprProgress.fillRange = this.slider.progress;
        this.coin = this.minCoin + Math.round((this.maxCoin - this.minCoin) * this.slider.progress);
        this.lblCoin.string = Utils_1.default.formatMoney(this.coin);
      };
      __decorate([ property(cc.Label) ], PanelPayDoor.prototype, "title1", void 0);
      __decorate([ property(cc.Label) ], PanelPayDoor.prototype, "title2", void 0);
      __decorate([ property(cc.Node) ], PanelPayDoor.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Slider) ], PanelPayDoor.prototype, "slider", void 0);
      __decorate([ property(cc.Sprite) ], PanelPayDoor.prototype, "sprProgress", void 0);
      __decorate([ property(cc.Label) ], PanelPayDoor.prototype, "lblCoin", void 0);
      PanelPayDoor = __decorate([ ccclass ], PanelPayDoor);
      return PanelPayDoor;
    }(cc.Component);
    exports.default = PanelPayDoor;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "XocDia.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9c872R6XBD36zyQzVSxuur", "XocDia.Player");
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
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnInvite = null;
        _this.info = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.sprAvatar = null;
        _this.lbCoin = null;
        _this.boxWin = null;
        _this.chipsPoint = cc.v2(0, 0);
        _this.chipsPoint2 = cc.v2(0, 0);
        _this.banker = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.nickname = "";
        _this.avatar = "";
        _this.timeoutChat = null;
        return _this;
      }
      Player.prototype.start = function() {};
      Player.prototype.leave = function() {
        this.nickname = "";
        this.btnInvite && (this.btnInvite.node.active = true);
        this.info && (this.info.active = false);
        this.lbCoin.node.active = false;
        this.boxWin.active = false;
        this.banker.active = false;
        this.unscheduleAllCallbacks();
      };
      Player.prototype.set = function(nickname, avatar, coin, isBanker) {
        this.nickname = nickname;
        this.lblNickname.string = nickname;
        this.lblNickname.string.length > 14 && (this.lblNickname.string = this.lblNickname.string.substring(0, 11) + "...");
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(avatar);
        this.setCoin(coin);
        this.banker.active = isBanker;
        this.btnInvite && (this.btnInvite.node.active = false);
        this.info && (this.info.active = true);
      };
      Player.prototype.setCoin = function(coin) {
        this.lblCoin.string = Utils_1.default.formatMoney(coin);
      };
      Player.prototype.clearUI = function() {
        cc.Tween.stopAllByTarget(this.lbCoin.node);
        this.lbCoin.node.active = false;
        this.boxWin.active = false;
      };
      Player.prototype.showWinCoinString = function(coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + coin;
        cc.tween(this.lbCoin.node).set({
          scale: 0,
          y: -50
        }).to(1, {
          scale: .6,
          y: 70
        }, {
          easing: cc.easing.backOut
        }).delay(4).call(function() {
          _this.lbCoin.node.active = false;
          _this.boxWin.active = false;
        }).start();
      };
      Player.prototype.showWinCoin = function(coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + Utils_1.default.formatMoney(coin);
        cc.tween(this.lbCoin.node).set({
          scale: 0,
          y: -50
        }).to(1, {
          scale: .6,
          y: 70
        }, {
          easing: cc.easing.backOut
        }).delay(4).call(function() {
          _this.lbCoin.node.active = false;
          _this.boxWin.active = false;
        }).start();
      };
      Player.prototype.showChatEmotion = function(content) {
        var _this = this;
        this.chatEmotion.active = true;
        this.chatMsg.active = false;
        clearTimeout(this.timeoutChat);
        this.chatEmotion.getComponent(sp.Skeleton).setAnimation(0, content, true);
        this.timeoutChat = setTimeout(function() {
          _this.chatEmotion.active = false;
          _this.chatMsg.active = false;
        }, 3e3);
      };
      Player.prototype.showChatMsg = function(content) {
        var _this = this;
        this.chatEmotion.active = false;
        this.chatMsg.active = true;
        clearTimeout(this.timeoutChat);
        this.chatMsg.getComponentInChildren(cc.Label).string = content;
        this.timeoutChat = setTimeout(function() {
          _this.chatEmotion.active = false;
          _this.chatMsg.active = false;
        }, 5e3);
      };
      Player.prototype.hideChat = function() {
        clearTimeout(this.timeoutChat);
        this.chatEmotion.active = false;
        this.chatMsg.active = false;
      };
      Player.prototype.showRefundCoin = function(coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + Utils_1.default.formatMoney(coin);
        cc.tween(this.lbCoin.node).set({
          scale: 0,
          y: -50
        }).to(1, {
          scale: .6,
          y: 70
        }, {
          easing: cc.easing.backOut
        }).delay(4).call(function() {
          _this.lbCoin.node.active = false;
          _this.boxWin.active = false;
        }).start();
      };
      __decorate([ property(cc.Button) ], Player.prototype, "btnInvite", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "info", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "sprAvatar", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lbCoin", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "boxWin", void 0);
      __decorate([ property(cc.Vec2) ], Player.prototype, "chipsPoint", void 0);
      __decorate([ property(cc.Vec2) ], Player.prototype, "chipsPoint2", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "banker", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatEmotion", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatMsg", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "XocDia.Play": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c930d7rTZRE4oeBVh3a3fLa", "XocDia.Play");
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
    var XocDia_Cmd_1 = require("./XocDia.Cmd");
    var XocDia_Player_1 = require("./XocDia.Player");
    var Configs_1 = require("../../Loading/src/Configs");
    var XocDia_XocDiaController_1 = require("./XocDia.XocDiaController");
    var XocDia_BtnPayBet_1 = require("./XocDia.BtnPayBet");
    var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
    var XocDia_BtnBet_1 = require("./XocDia.BtnBet");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Random_1 = require("../../Lobby/LobbyScript/Script/common/Random");
    var TimeUtils_1 = require("../../Lobby/LobbyScript/Script/common/TimeUtils");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var XocDia_PopupHistory_1 = require("./XocDia.PopupHistory");
    var audio_clip;
    (function(audio_clip) {
      audio_clip[audio_clip["BG"] = 0] = "BG";
      audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
      audio_clip[audio_clip["WIN"] = 2] = "WIN";
      audio_clip[audio_clip["START_GAME"] = 3] = "START_GAME";
      audio_clip[audio_clip["XOC_DIA"] = 4] = "XOC_DIA";
      audio_clip[audio_clip["CHIP"] = 5] = "CHIP";
      audio_clip[audio_clip["CLOCK"] = 6] = "CLOCK";
      audio_clip[audio_clip["JOIN"] = 7] = "JOIN";
    })(audio_clip || (audio_clip = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TW = cc.tween;
    var TYPE_RESULT;
    (function(TYPE_RESULT) {
      TYPE_RESULT[TYPE_RESULT["FOUR_WHITE"] = 1] = "FOUR_WHITE";
      TYPE_RESULT[TYPE_RESULT["FOUR_RED"] = 2] = "FOUR_RED";
      TYPE_RESULT[TYPE_RESULT["THREE_RED"] = 3] = "THREE_RED";
      TYPE_RESULT[TYPE_RESULT["THREE_WHITE"] = 4] = "THREE_WHITE";
      TYPE_RESULT[TYPE_RESULT["TWO_RED_TWO_WHITE"] = 5] = "TWO_RED_TWO_WHITE";
    })(TYPE_RESULT || (TYPE_RESULT = {}));
    var STATE_DEALER;
    (function(STATE_DEALER) {
      STATE_DEALER[STATE_DEALER["IDLE"] = 1] = "IDLE";
      STATE_DEALER[STATE_DEALER["MOI_CUOC"] = 2] = "MOI_CUOC";
      STATE_DEALER[STATE_DEALER["TRA_TIEN"] = 3] = "TRA_TIEN";
      STATE_DEALER[STATE_DEALER["XOC_LO"] = 4] = "XOC_LO";
      STATE_DEALER[STATE_DEALER["MO_DIA"] = 5] = "MO_DIA";
    })(STATE_DEALER || (STATE_DEALER = {}));
    var Play = function(_super) {
      __extends(Play, _super);
      function Play() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.history = null;
        _this.nodeExit = null;
        _this.scrollChip = null;
        _this.contentChatNhanh = null;
        _this.bgChat = null;
        _this.UI_Chat = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.nodeTutorial = null;
        _this.lblToast = null;
        _this.boxSetting = null;
        _this.boxMusic = null;
        _this.mePlayer = null;
        _this.players = [];
        _this.btnBets = [];
        _this.btnPayBets = [];
        _this.dealer = null;
        _this.boxMsg = null;
        _this.labelMsg = null;
        _this.dealerHandPoint = null;
        _this.diceResult = null;
        _this.sprChipSmalls = [];
        _this.chips = null;
        _this.countplayer = null;
        _this.chipTemplate = null;
        _this.sprProgressTime = null;
        _this.lblProgressTime = null;
        _this.lblHistoryOdd = null;
        _this.lblHistoryEven = null;
        _this.sfOdd = null;
        _this.sfEven = null;
        _this.lblHistoryItems = null;
        _this.edtChatInput = null;
        _this.inited = false;
        _this.roomId = 0;
        _this.chipsInDoors = {};
        _this.lastBowlStateName = "";
        _this.curTime = 0;
        _this.gameState = 0;
        _this.listBets = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7, 5e7, 1e8 ];
        _this.betIdx = 0;
        _this.minBetIdx = 0;
        _this.isBanker = false;
        _this.banker = "";
        _this.historyChatData = [];
        _this.lastUpdateTime = TimeUtils_1.default.currentTimeMillis();
        _this.chipPool = null;
        _this.clockTimeSche = null;
        _this.percentScroll = 0;
        _this.arrTimeOut = [];
        _this.isClearOldData = false;
        _this.totalTimeState = 0;
        _this.listChip = [];
        return _this;
      }
      Play.prototype.onBtnSscrollLeft = function() {
        this.percentScroll -= .3;
        this.percentScroll <= 0 && (this.percentScroll = 0);
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .4);
      };
      Play.prototype.onBtnScrollRight = function() {
        this.percentScroll += .3;
        this.percentScroll >= 1 && (this.percentScroll = 1);
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .4);
      };
      Play.prototype.onBtnClickBgChat = function() {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
      };
      Play.prototype.onBtnClickBoxChat = function() {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
      };
      Play.prototype.showUIChat = function() {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(.3, {
          x: cc.winSize.width / 2 - this.UI_Chat.width / 2
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      Play.prototype.toggleUIChat = function() {
        false == this.UI_Chat.active ? this.showUIChat() : this.closeUIChat();
      };
      Play.prototype.closeUIChat = function() {
        var _this = this;
        this.UI_Chat.active = false;
        cc.tween(this.UI_Chat).to(.3, {
          x: cc.winSize.width / 2 + this.UI_Chat.width / 2
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.UI_Chat.active = false;
        }).start();
      };
      Play.prototype.playerChat = function(res) {
        var player = this.getPlayer(res.nickname);
        if (player) {
          var chair = res["chair"];
          var isIcon = res["isIcon"];
          var content = res["content"];
          var seatId = chair;
          isIcon ? player.showChatEmotion(content) : player.showChatMsg(content);
        }
      };
      Play.prototype.chatEmotion = function(event, id) {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      Play.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      Play.prototype.chatNhanhMsg = function(msg) {
        if (msg.trim().length > 0) {
          XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
          this.closeUIChat();
        }
      };
      Play.prototype.start = function() {
        var _this = this;
        this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .4);
        var self = this;
        var _loop_1 = function() {
          var node = this_1.contentChatNhanh.children[i];
          node.on("click", function() {
            self.chatNhanhMsg(node.children[0].getComponent(cc.Label).string);
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) _loop_1();
        this.chipPool = new cc.NodePool("Chip");
        this.lblToast.node.parent.active = false;
        var _loop_2 = function(i_1) {
          var btn = this_2.btnPayBets[i_1];
          btn.node.on("click", function() {
            if (2 != _this.gameState) {
              _this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
              return;
            }
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendPutMoney(i_1, _this.listBets[_this.betIdx]));
          });
        };
        var this_2 = this;
        for (var i_1 = 0; i_1 < this.btnPayBets.length; i_1++) _loop_2(i_1);
        var _loop_3 = function(i_2) {
          var btnBet = this_3.btnBets[i_2];
          btnBet.node.on("click", function() {
            _this.betIdx = i_2;
            for (var j = 0; j < _this.btnBets.length; j++) _this.btnBets[j].active.active = j == i_2;
          });
        };
        var this_3 = this;
        for (var i_2 = 0; i_2 < this.btnBets.length; i_2++) _loop_3(i_2);
        this.setupTimeRunInBg();
      };
      Play.prototype.onBtnHistory = function() {
        var _this = this;
        if (null == this.history) {
          App_1.default.instance.showLoading(true);
          cc.assetManager.getBundle("XocDia").load("PopupHistory", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
            App_1.default.instance.showLoading(false);
            if (null != err1) ; else {
              _this.history = cc.instantiate(prefab).getComponent("XocDia.PopupHistory");
              _this.history.node.parent = _this.node.parent;
              _this.history.node.active = true;
              _this.history.show();
            }
          });
        } else {
          this.history.node.parent = this.node.parent;
          this.history.node.active = true;
          this.history.show();
        }
      };
      Play.prototype.setupTimeRunInBg = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_SHOW, function() {
          for (var i = 0; i < _this.players.length; i++) _this.players[i].clearUI();
        });
      };
      Play.prototype.updateChipTotalBets = function() {
        for (var i = 0; i < this.btnPayBets.length; i++) "" != this.btnPayBets[i].lblTotalBet.string;
      };
      Play.prototype.hideSetting = function() {
        this.nodeSetting.active = false;
      };
      Play.prototype.showSetting = function() {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
      };
      Play.prototype.showTutorial = function() {
        this.nodeTutorial.active = true;
      };
      Play.prototype.hideTutorial = function() {
        this.nodeTutorial.active = false;
      };
      Play.prototype.onBtnToggleMusic = function() {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      Play.prototype.onBtnToggleSound = function() {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      Play.prototype.showToast = function(msg) {
        var _this = this;
        this.lblToast.string = msg;
        this.lblToast.node.parent.opacity = 0;
        this.lblToast.node.parent.active = true;
        cc.Tween.stopAllByTarget(this.lblToast.node.parent);
        cc.tween(this.lblToast.node.parent).to(.3, {
          opacity: 255
        }, {
          easing: "linear"
        }).delay(1).to(.3, {
          opacity: 0
        }, {
          easing: "linear"
        }).call(function() {
          _this.lblToast.node.parent.active = false;
        }).start();
      };
      Play.prototype.update = function(dt) {
        if (this.curTime > 0) {
          var timeLeft = Math.max(0, this.curTime - TimeUtils_1.default.currentTimeMillis());
          this.sprProgressTime.fillRange = timeLeft / this.totalTimeState;
          if (0 == timeLeft) {
            this.curTime = 0;
            this.sprProgressTime.node.parent.active = false;
            this.unschedule(this.clockTimeSche);
            this.countplayer.string = Utils_1.default.randomRangeInt(50, 70);
          } else 1e4 == timeLeft ? this.countplayer.string = Utils_1.default.randomRangeInt(40, 80) : 11e3 == timeLeft ? this.countplayer.string = Utils_1.default.randomRangeInt(35, 50) : 21e3 == timeLeft ? this.countplayer.string = Utils_1.default.randomRangeInt(60, 80) : 31e3 == timeLeft && (this.countplayer.string = Utils_1.default.randomRangeInt(50, 60));
        }
      };
      Play.prototype.init = function() {
        var _this = this;
        if (this.inited) return;
        this.inited = true;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          if (!_this.node.active) return;
          _this.mePlayer.setCoin(Configs_1.default.Login.Coin);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case XocDia_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            App_1.default.instance.showLoading(false);
            var res = new XocDia_Cmd_1.default.ReceiveJoinRoomSuccess(data);
            XocDia_XocDiaController_1.default.instance.showGamePlay(res);
            break;

           case XocDia_Cmd_1.default.Code.USER_JOIN_ROOM_SUCCESS:
            var res = new XocDia_Cmd_1.default.ReceiveUserJoinRoom(data);
            var player = _this.getRandomEmptyPlayer();
            null != player && player.set(res.nickname, res.avatar, res.money, false);
            break;

           case XocDia_Cmd_1.default.Code.USER_OUT_ROOM:
            var res = new XocDia_Cmd_1.default.ReceiveUserOutRoom(data);
            var player = _this.getPlayer(res.nickname);
            null != player && player.leave();
            break;

           case XocDia_Cmd_1.default.Code.QUIT_ROOM:
            var res = new XocDia_Cmd_1.default.ReceiveLeavedRoom(data);
            _this.node.active = false;
            XocDia_XocDiaController_1.default.instance.lobby.show();
            switch (res.reason) {
             case 1:
              App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
              break;

             case 2:
              App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_reparing"));
              break;

             case 5:
              App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_room_err13"));
              break;

             case 6:
              App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_room_err10"));
            }
            break;

           case XocDia_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
            var res = new XocDia_Cmd_1.default.ReceiveLeaveRoom(data);
            if (res.bRegis) {
              _this.nodeExit && (_this.nodeExit.active = true);
              App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_leave"));
            } else {
              _this.nodeExit && (_this.nodeExit.active = false);
              App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_cancel_leave"));
            }
            break;

           case XocDia_Cmd_1.default.Code.ACTION_IN_GAME:
            var res = new XocDia_Cmd_1.default.ReceiveActionInGame(data);
            var msg = "";
            _this.gameState = res.action;
            switch (res.action) {
             case 1:
              msg = "\u1002\u102d\u1019\u103a\u1038\u1021\u101e\u1005\u103a\u1010\u1005\u103a\u1001\u102f \u1005\u1010\u1004\u103a\u1015\u102b\u104b";
              _this.sprProgressTime.node.parent.active = false;
              _this.unschedule(_this.clockTimeSche);
              XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.START_GAME);
              break;

             case 2:
              msg = "\u1005\u1010\u1004\u103a\u1018\u103d\u1010\u103a\u1000\u1004\u103a\u101c\u102f\u1015\u103a\u1015\u102b\u104b";
              _this.sprProgressTime.node.parent.active = true;
              _this.lblProgressTime.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u1005\u102c\u1038...";
              _this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * (res.time + 10);
              _this.totalTimeState = 1e3 * (res.time + 10);
              _this.setStateDealer(STATE_DEALER.MOI_CUOC);
              _this.schedule(_this.clockTimeSche = function() {
                _this.node.active ? XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CLOCK) : _this.unschedule(_this.clockTimeSche);
              }, 1, res.time);
              break;

             case 3:
              msg = "\u1010\u1036\u1001\u102b\u1038\u1000\u102d\u102f \u1005\u1010\u1004\u103a\u101b\u1031\u102c\u1004\u103a\u1038\u1001\u103b\u101e\u100a\u103a\u104b";
              _this.sprProgressTime.node.parent.active = true;
              _this.lblProgressTime.string = "\u1021\u101b\u1031\u102c\u1004\u103a\u1038...";
              _this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * res.time;
              _this.totalTimeState = 1e3 * res.time;
              break;

             case 4:
              msg = "\u1021\u102d\u1019\u103a\u1000\u1004\u103d\u1031\u1000\u102d\u102f \u101c\u1000\u103a\u1000\u103b\u1014\u103a\u1004\u103d\u1031\u1015\u103c\u1014\u103a\u1021\u1019\u103a\u1038\u1015\u1031\u1038\u1015\u102b\u1010\u101a\u103a\u104b";
              _this.sprProgressTime.node.parent.active = true;
              _this.lblProgressTime.string = "\u1015\u103c\u1014\u103a\u1021\u1019\u103a\u1038\u1004\u103d\u1031\u1000\u102d\u102f \u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1014\u1031\u101e\u100a\u103a\u104b...";
              _this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * res.time;
              _this.totalTimeState = 1e3 * res.time;
              break;

             case 5:
              msg = "\u1015\u103c\u1014\u103a\u1021\u1019\u103a\u1038\u1004\u103d\u1031\u1019\u103b\u102c\u1038 \u1005\u1010\u1004\u103a\u1015\u102b\u104b";
              _this.sprProgressTime.node.parent.active = true;
              _this.lblProgressTime.string = "\u1015\u103c\u1014\u103a\u1021\u1019\u103a\u1038\u1004\u103d\u1031\u1000\u102d\u102f \u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1014\u1031\u101e\u100a\u103a\u104b...";
              _this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * res.time;
              _this.totalTimeState = 1e3 * res.time;
              break;

             case 6:
              msg = "\u1005\u1010\u1004\u103a\u1015\u1031\u1038\u1006\u1015\u103a\u101c\u102d\u102f\u1000\u103a\u1015\u102b\u104b";
              _this.setStateDealer(STATE_DEALER.TRA_TIEN);
              _this.sprProgressTime.node.parent.active = true;
              _this.lblProgressTime.string = "\u1006\u102f\u101c\u102c\u1018\u103a\u1019\u103b\u102c\u1038\u1015\u1031\u1038\u1006\u1031\u102c\u1004\u103a\u1015\u102b\u104b...";
              _this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * res.time;
              _this.totalTimeState = 1e3 * res.time;
            }
            if ("" != msg) {
              _this.labelMsg.string = msg;
              _this.boxMsg.active = false;
              _this.scheduleOnce(function() {
                _this.boxMsg.active = true;
                _this.scheduleOnce(function() {
                  _this.boxMsg.active = false;
                }, .9);
              }, .3);
            }
            break;

           case XocDia_Cmd_1.default.Code.START_GAME:
            var res = new XocDia_Cmd_1.default.ReceiveStartGame(data);
            "" != res.banker && res.banker != Configs_1.default.Login.Nickname && _this.isBanker && App_1.default.instance.alertDialog.showMsg("\u1021\u102d\u1019\u103a\u1011\u102d\u1014\u103a\u1038\u1021\u1016\u103c\u1005\u103a \u1006\u1000\u103a\u101c\u1000\u103a\u101c\u102f\u1015\u103a\u1000\u102d\u102f\u1004\u103a\u101b\u1014\u103a \u101e\u1004\u1037\u103a\u1010\u103d\u1004\u103a \u1004\u103d\u1031\u1021\u101c\u102f\u1036\u1021\u101c\u1031\u102c\u1000\u103a\u1019\u101b\u103e\u102d\u1015\u102b\u104b");
            _this.banker = res.banker;
            _this.isBanker = _this.banker == Configs_1.default.Login.Nickname;
            for (var i = 0; i < _this.players.length; i++) {
              var player = _this.players[i];
              player.banker.active = "" != player.nickname && player.nickname == _this.banker;
            }
            _this.btnPayBets.forEach(function(e) {
              return e.reset();
            });
            _this.clearChips();
            _this.resetDiceResult();
            _this.setStateDealer(STATE_DEALER.XOC_LO);
            break;

           case XocDia_Cmd_1.default.Code.PUT_MONEY:
            var res = new XocDia_Cmd_1.default.ReceivePutMoney(data);
            var btnPayBet = _this.btnPayBets[res.potId];
            btnPayBet.setTotalBet(res.potMoney);
            if (res.nickname == Configs_1.default.Login.Nickname) {
              switch (res.error) {
               case 0:
                break;

               case 1:
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
                return;

               case 2:
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_bet_error1"));
                return;

               default:
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_unknown_error"));
                return;
              }
              Configs_1.default.Login.Coin = res.currentMoney;
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            }
            var player = _this.getPlayer(res.nickname);
            if (null != player) {
              player.setCoin(res.currentMoney);
              var listCoin = _this.convertMoneyToChipMoney(res.betMoney);
              var _loop_4 = function(i) {
                var chip = _this.getChip(listCoin[i]);
                chip.name = player.nickname;
                chip.position = player.node.position;
                _this.chipsInDoors.hasOwnProperty(res.potId) || (_this.chipsInDoors[res.potId] = []);
                _this.chipsInDoors[res.potId].push(chip);
                var position = btnPayBet.node.position.clone();
                var target = new cc.Vec2(Random_1.default.rangeInt(-btnPayBet.node.width / 4 - 20, btnPayBet.node.width / 4 + 20), Random_1.default.rangeInt(-btnPayBet.node.height / 4 - 20, btnPayBet.node.height / 2 - 70));
                position.x += target.x;
                position.y += target.y;
                cc.Tween.stopAllByTarget(chip);
                TW(chip).then(cc.jumpTo(.5, cc.v2(position.x, position.y), 50, 2).easing(cc.easeSineOut())).call(function() {
                  chip.position = position;
                }).start();
              };
              for (var i = 0; i < listCoin.length; i++) _loop_4(i);
              XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CHIP);
            }
            break;

           case XocDia_Cmd_1.default.Code.REFUN_MONEY:
            var res = new XocDia_Cmd_1.default.ReceiveRefunMoney(data);
            for (var i = 0; i < res.playerInfosRefun.length; i++) {
              var rfData = res.playerInfosRefun[i];
              var player = _this.getPlayer(rfData["nickname"]);
              if (null != player) {
                player.showRefundCoin(rfData["moneyRefund"]);
                player.setCoin(rfData["currentMoney"]);
              }
              if (rfData["nickname"] == Configs_1.default.Login.Nickname) {
                Configs_1.default.Login.Coin = rfData["currentMoney"];
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
              }
            }
            for (var i = 0; i < res.potID.length; i++) {
              var potData = res.potID[i];
              _this.btnPayBets[i].setTotalBet(potData["totalMoney"]);
            }
            break;

           case XocDia_Cmd_1.default.Code.FINISH_GAME:
            _this.isClearOldData = false;
            var res_1 = new XocDia_Cmd_1.default.ReceiveFinishGame(data);
            for (var i = 0; i < res_1.playerInfoWin.length; i++) {
              var playerData = res_1.playerInfoWin[i];
              if (playerData["nickname"] == Configs_1.default.Login.Nickname) {
                Configs_1.default.Login.Coin = playerData["currentMoney"];
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                break;
              }
            }
            var countRed = 0;
            var countWhite = 0;
            for (var i = 0; i < res_1.diceIDs.length; i++) 1 == res_1.diceIDs[i] ? countRed++ : countWhite++;
            var isChan_1 = (res_1.diceIDs[0] + res_1.diceIDs[1] + res_1.diceIDs[2] + res_1.diceIDs[3]) % 2 == 0;
            var isLe3do1trang_1 = res_1.infoAllPot[4].win;
            var isLe3trang1do_1 = res_1.infoAllPot[5].win;
            var isChan4do_1 = res_1.infoAllPot[3].win;
            var isChan4trang_1 = res_1.infoAllPot[2].win;
            var doorWins_1 = [];
            _this.setStateDealer(STATE_DEALER.MO_DIA);
            var cb = function() {
              if (isChan_1) {
                doorWins_1.push(0);
                _this.btnPayBets[0].active.active = true;
                if (isChan4do_1) {
                  doorWins_1.push(3);
                  _this.btnPayBets[3].active.active = true;
                } else if (isChan4trang_1) {
                  doorWins_1.push(2);
                  _this.btnPayBets[2].active.active = true;
                }
              } else {
                doorWins_1.push(1);
                _this.btnPayBets[1].active.active = true;
                if (isLe3do1trang_1) {
                  doorWins_1.push(4);
                  _this.btnPayBets[4].active.active = true;
                } else if (isLe3trang1do_1) {
                  doorWins_1.push(5);
                  _this.btnPayBets[5].active.active = true;
                }
              }
              var chipsWithNickname = {};
              var _loop_5 = function(k) {
                var doorId = parseInt(k);
                var chips = _this.chipsInDoors[doorId];
                if (-1 == doorWins_1.indexOf(doorId)) {
                  var btnPayBet = _this.btnPayBets[doorId];
                  var position = btnPayBet.node.position.clone();
                  position.y -= 10;
                  var positionAdd = position.clone();
                  _this.arrTimeOut.push(setTimeout(function() {
                    var node = new cc.Node();
                    node.parent = _this.chips;
                    node.opacity = 0;
                    for (var i = 0; i < chips.length; i++) chips[i].parent = node;
                    cc.Tween.stopAllByTarget(node);
                    TW(node).to(.1, {
                      opacity: 255
                    }, {
                      easing: cc.easing.sineIn
                    }).delay(.3).to(.5, {
                      scale: 0,
                      x: _this.dealerHandPoint.x,
                      y: _this.dealerHandPoint.y
                    }).to(.1, {
                      opacity: 0
                    }, {
                      easing: cc.easing.sineOut
                    }).call(function() {
                      for (var i = 0; i < chips.length; i++) {
                        chips[i].parent = _this.chips;
                        chips[i].opacity = 255;
                        chips[i].active = false;
                      }
                      node.destroy();
                    }).start();
                  }, 800));
                } else for (var i = 0; i < chips.length; i++) {
                  var chip = chips[i];
                  var nickname = chip.name;
                  chipsWithNickname.hasOwnProperty(nickname) || (chipsWithNickname[nickname] = []);
                  chipsWithNickname[nickname].push(chip);
                }
              };
              for (var k in _this.chipsInDoors) _loop_5(k);
              _this.arrTimeOut.push(setTimeout(function() {
                for (var k in chipsWithNickname) {
                  var player = _this.getPlayer(k);
                  if (null != player) {
                    var chips = chipsWithNickname[k];
                    var positionAdd = player.chipsPoint.clone();
                    var positionAdd2 = player.chipsPoint2.clone();
                    var count1 = 0;
                    var count2 = 0;
                    var _loop_6 = function(i) {
                      var chip = chips[i];
                      var opacity1 = count1 < 15 ? 255 : 0;
                      cc.Tween.stopAllByTarget(chip);
                      TW(chip).to(.5, {
                        x: positionAdd.x,
                        y: positionAdd.y,
                        opacity: opacity1
                      }, {
                        easing: cc.easing.sineOut
                      }).delay(.03 * chips.length - .03 * i + 1).to(.5, {
                        position: player.node.position
                      }, {
                        easing: cc.easing.sineIn
                      }).call(function() {
                        chip.active = false;
                      }).start();
                      var dealerChip = _this.getChip(0);
                      dealerChip.getComponent(cc.Sprite).spriteFrame = chip.getComponent(cc.Sprite).spriteFrame;
                      dealerChip.opacity = 0;
                      dealerChip.position = _this.dealerHandPoint.position;
                      var opacity2 = count2 < 15 ? 255 : 0;
                      cc.Tween.stopAllByTarget(dealerChip);
                      TW(dealerChip).delay(.5).to(.2, {
                        opacity: opacity2
                      }, {
                        easing: cc.easing.sineIn
                      }).to(.5, {
                        x: positionAdd2.x,
                        y: positionAdd2.y
                      }, {
                        easing: cc.easing.sineOut
                      }).delay(.03 * chips.length - .03 * i + .3).to(.5, {
                        position: player.node.position
                      }, {
                        easing: cc.easing.sineOut
                      }).call(function() {
                        dealerChip.active = false;
                      }).start();
                      if (count1 < 15) {
                        count1++;
                        positionAdd.y += 3;
                      }
                      if (count2 < 15) {
                        count2++;
                        positionAdd2.y += 3;
                      }
                    };
                    for (var i = 0; i < chips.length; i++) _loop_6(i);
                  }
                }
              }, 1500));
            };
            isChan_1 ? isChan4do_1 ? _this.setDiceResult(TYPE_RESULT.FOUR_RED, cb) : isChan4trang_1 ? _this.setDiceResult(TYPE_RESULT.FOUR_WHITE, cb) : _this.setDiceResult(TYPE_RESULT.TWO_RED_TWO_WHITE, cb) : isLe3do1trang_1 ? _this.setDiceResult(TYPE_RESULT.THREE_RED, cb) : isLe3trang1do_1 && _this.setDiceResult(TYPE_RESULT.THREE_WHITE, cb);
            _this.arrTimeOut.push(setTimeout(function() {
              for (var i = 0; i < res_1.playerInfoWin.length; i++) {
                var playerData = res_1.playerInfoWin[i];
                var player = _this.getPlayer(playerData["nickname"]);
                if (null != player) {
                  var moneyWinPots = playerData["moneyWinPots"];
                  moneyWinPots = moneyWinPots.split(",");
                  var msgWin = "";
                  for (var j = 0; j < moneyWinPots.length; j++) msgWin += Utils_1.default.formatMoney(moneyWinPots[j]) + "\n\n";
                  player.showWinCoinString(msgWin);
                  player.setCoin(playerData["currentMoney"]);
                }
              }
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            }, 3e3));
            if (_this.isBanker) {
              _this.mePlayer.showWinCoin(res_1.moneyBankerExchange);
              _this.mePlayer.setCoin(res_1.moneyBankerAfter);
              Configs_1.default.Login.Coin = res_1.moneyBankerAfter;
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            }
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.CmdSendGetCau());
            break;

           case XocDia_Cmd_1.default.Code.SOI_CAU:
            var res = new XocDia_Cmd_1.default.ReceiveGetCau(data);
            _this.lblHistoryOdd.string = Utils_1.default.formatNumber(res.totalOdd);
            _this.lblHistoryEven.string = Utils_1.default.formatNumber(res.totalEven);
            for (var i = 0; i < _this.lblHistoryItems.childrenCount; i++) if (i < res.arrayCau.length) {
              _this.lblHistoryItems.children[i].getComponent(cc.Sprite).spriteFrame = 0 == res.arrayCau[i] ? _this.sfOdd : _this.sfEven;
              _this.lblHistoryItems.children[i].active = true;
            } else _this.lblHistoryItems.children[i].active = false;
            break;

           case XocDia_Cmd_1.default.Code.ORDER_BANKER:
            var res = new XocDia_Cmd_1.default.ReceiveOrderBanker(data);
            switch (res.error) {
             case 0:
              break;

             case 1:
              App_1.default.instance.alertDialog.showMsg("\u1019\u1004\u103a\u1038\u101c\u102d\u102f\u1010\u101a\u103a\u104b " + Utils_1.default.formatNumber(res.moneyRequire) + " \u1021\u1000\u103c\u103d\u1031\u1005\u1031\u1037\u1019\u103b\u102c\u1038 \u104a");
              break;

             default:
              App_1.default.instance.alertDialog.showMsg("\u1021\u1019\u103e\u102c\u1038 " + res.error + ", \u1019\u101e\u102d");
            }
            break;

           case XocDia_Cmd_1.default.Code.HUY_LAM_CAI:
            var res = new XocDia_Cmd_1.default.ReceiveCancelBanker(data);
            res.bDestroy && _this.isBanker && App_1.default.instance.alertDialog.showMsg("\u1005\u102c\u101b\u1004\u103a\u1038\u101e\u103d\u1004\u103a\u1038\u101e\u1030\u1021\u1016\u103c\u1005\u103a \u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1005\u103d\u102c \u1015\u101a\u103a\u1016\u103b\u1000\u103a\u101b\u1014\u103a \u1019\u103e\u1010\u103a\u1015\u102f\u1036\u1010\u1004\u103a\u1015\u102b\u104b");
            break;

           case XocDia_Cmd_1.default.Code.INFO_GATE_SELL:
            var res = new XocDia_Cmd_1.default.ReceiveInfoGateSell(data);
            break;

           case XocDia_Cmd_1.default.Code.INFO_MONEY_AFTER_BANKER_SELL:
            var res = new XocDia_Cmd_1.default.ReceiveInfoMoneyAfterBankerSell(data);
            break;

           case XocDia_Cmd_1.default.Code.CHAT_MS:
            var res = new XocDia_Cmd_1.default.ReceivedChatRoom(data);
            _this.playerChat(res);
          }
        }, this);
      };
      Play.prototype.showDiceResult = function(cb) {
        var _this = this;
        var bowl = this.diceResult.getChildByName("bat");
        var ranX1 = [ Utils_1.default.randomRangeInt(-40, -30), Utils_1.default.randomRange(30, 40) ][Utils_1.default.randomRangeInt(0, 2)];
        var ranY1 = [ Utils_1.default.randomRangeInt(-40, -30), Utils_1.default.randomRangeInt(30, 40) ][Utils_1.default.randomRangeInt(0, 2)];
        var ranX2 = [ Utils_1.default.randomRangeInt(-120, -100), Utils_1.default.randomRangeInt(100, 120) ][Utils_1.default.randomRangeInt(0, 2)];
        var ranY2 = [ Utils_1.default.randomRangeInt(-120, -100), Utils_1.default.randomRangeInt(100, 120) ][Utils_1.default.randomRangeInt(0, 2)];
        cc.Tween.stopAllByTarget(bowl);
        TW(bowl).set({
          x: -5,
          y: 7,
          opacity: 255
        }).to(1, {
          x: ranX1,
          y: ranY1
        }).delay(.5).call(function() {
          if (_this.state == STATE_DEALER.MO_DIA) {
            cb();
            XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.WIN);
          }
        }).to(.6, {
          x: ranX2,
          y: ranY2,
          opacity: 0
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      Play.prototype.xocDice = function() {
        this.resetDiceResult();
        this.diceResult.active = true;
        cc.Tween.stopAllByTarget(this.diceResult);
        TW(this.diceResult).set({
          x: 7.755,
          y: 66.138,
          scale: 0
        }).to(.5, {
          scale: 1,
          x: 0,
          y: 66
        }, {
          easing: cc.easing.sineIn
        }).start();
      };
      Play.prototype.setDiceResult = function(typeResult, cb) {
        var arrSprResult = [];
        switch (typeResult) {
         case TYPE_RESULT.FOUR_RED:
          arrSprResult.push(this.sfOdd, this.sfOdd, this.sfOdd, this.sfOdd);
          break;

         case TYPE_RESULT.FOUR_WHITE:
          arrSprResult.push(this.sfEven, this.sfEven, this.sfEven, this.sfEven);
          break;

         case TYPE_RESULT.THREE_RED:
          arrSprResult.push(this.sfOdd, this.sfEven, this.sfOdd, this.sfOdd);
          break;

         case TYPE_RESULT.THREE_WHITE:
          arrSprResult.push(this.sfEven, this.sfEven, this.sfOdd, this.sfEven);
          break;

         case TYPE_RESULT.TWO_RED_TWO_WHITE:
          arrSprResult.push(this.sfEven, this.sfEven, this.sfOdd, this.sfOdd);
        }
        for (var i = 1; i < 5; i++) this.diceResult.getChildByName("ic_result_" + i).getComponent(cc.Sprite).spriteFrame = arrSprResult[i - 1];
        this.showDiceResult(cb);
      };
      Play.prototype.resetDiceResult = function() {
        cc.Tween.stopAllByTarget(this.diceResult.getChildByName("bat"));
        this.diceResult.getChildByName("bat").setPosition(cc.v2(-6.81, 9.24));
        this.diceResult.getChildByName("bat").opacity = 255;
      };
      Play.prototype.resetView = function() {
        this.mePlayer.leave();
        this.players.forEach(function(e) {
          return e.leave();
        });
        this.btnPayBets.forEach(function(e) {
          return e.reset();
        });
        this.setStateDealer(STATE_DEALER.IDLE);
        this.boxMsg.active = false;
        this.resetDiceResult();
        for (var i = 0; i < this.players.length; i++) this.players[i].clearUI();
        for (var i = 0; i < this.arrTimeOut.length; i++) clearTimeout(this.arrTimeOut[i]);
        this.clearChips();
        this.sprProgressTime.node.parent.active = false;
        this.unschedule(this.clockTimeSche);
        this.curTime = 0;
      };
      Play.prototype.getRandomEmptyPlayer = function() {
        var emptyPlayers = new Array();
        for (var i = 0; i < this.players.length; i++) "" == this.players[i].nickname && emptyPlayers.push(this.players[i]);
        if (emptyPlayers.length > 0) return emptyPlayers[Random_1.default.rangeInt(0, emptyPlayers.length)];
        return null;
      };
      Play.prototype.getPlayer = function(nickname) {
        for (var i = 0; i < this.players.length; i++) {
          var player = this.players[i];
          if ("" != player.nickname && player.nickname == nickname) return player;
        }
        return null;
      };
      Play.prototype.getChip = function(coin) {
        var ret = null;
        this.chipPool.size() <= 0 && this.chipPool.put(cc.instantiate(this.chipTemplate));
        ret = this.chipPool.get();
        this.listChip.push(ret);
        ret.parent = this.chips;
        var chipIdx = 0;
        for (var i = 0; i < this.listBets.length; i++) if (this.listBets[i] == coin) {
          chipIdx = i;
          break;
        }
        chipIdx -= 0;
        ret.getComponent(cc.Sprite).spriteFrame = this.sprChipSmalls[chipIdx];
        ret.opacity = 255;
        ret.active = true;
        ret.setSiblingIndex(this.chips.childrenCount - 1);
        return ret;
      };
      Play.prototype.clearChips = function() {
        this.chipTemplate.active = false;
        for (var i = 0; i < this.listChip.length; i++) this.chipPool.put(this.listChip[i]);
        this.listChip = [];
        this.chipsInDoors = {};
      };
      Play.prototype.convertMoneyToChipMoney = function(coin) {
        var ret = new Array();
        var _coin = coin;
        var minCoin = this.listBets[this.minBetIdx];
        var counter = 0;
        while (_coin >= minCoin || counter < 15) {
          for (var i = this.minBetIdx + this.btnBets.length; i >= this.minBetIdx; i--) if (_coin >= this.listBets[i]) {
            ret.push(this.listBets[i]);
            _coin -= this.listBets[i];
            break;
          }
          counter++;
        }
        return ret;
      };
      Play.prototype.show = function(data) {
        var _this = this;
        this.dataJoinRoom = data;
        null == this.chipPool && (this.chipPool = new cc.NodePool("Chip"));
        this.node.active = true;
        this.resetView();
        this.nodeExit && this.nodeExit.active && (this.nodeExit.active = false);
        this.countplayer.string = Utils_1.default.randomRangeInt(35, 68);
        this.roomId = data.roomId;
        this.lastUpdateTime = TimeUtils_1.default.currentTimeMillis();
        XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.JOIN);
        Configs_1.default.Login.Coin = data.money;
        this.isBanker = data.banker;
        this.banker = "";
        this.isBanker && (this.banker = Configs_1.default.Login.Nickname);
        this.mePlayer.set(Configs_1.default.Login.Nickname, Configs_1.default.Login.Avatar, Configs_1.default.Login.Coin, data.banker);
        for (var i = 0; i < data.playerInfos.length; i++) {
          var playerData = data.playerInfos[i];
          var player = this.getRandomEmptyPlayer();
          if (null == player) break;
          player.set(playerData["nickname"], playerData["avatar"], playerData["money"], playerData["banker"]);
          playerData["banker"] && (this.banker = playerData["nickname"]);
        }
        if (1 == data.gameState || 2 == data.gameState) for (var i = 0; i < data.potID.length; i++) {
          var potData = data.potID[i];
          var btnPayBet = this.btnPayBets[i];
          btnPayBet.setTotalBet(potData["totalMoney"]);
          var listCoin = this.convertMoneyToChipMoney(potData["totalMoney"]);
          var _loop_7 = function(i_3) {
            var chip = this_4.getChip(listCoin[i_3]);
            var player = this_4.getPlayer(Configs_1.default.Login.Nickname);
            chip.name = player.nickname;
            chip.position = player.node.position;
            this_4.chipsInDoors.hasOwnProperty(potData.id) || (this_4.chipsInDoors[potData.id] = []);
            this_4.chipsInDoors[potData.id].push(chip);
            var position = btnPayBet.node.position.clone();
            var target = new cc.Vec2(Random_1.default.rangeInt(-btnPayBet.node.width / 4 - 20, btnPayBet.node.width / 4 + 20), Random_1.default.rangeInt(-btnPayBet.node.height / 4 - 20, btnPayBet.node.height / 2 - 70));
            position.x += target.x;
            position.y += target.y;
            cc.Tween.stopAllByTarget(chip);
            TW(chip).then(cc.jumpTo(.5, cc.v2(position.x, position.y), 50, 2).easing(cc.easeSineOut())).call(function() {
              chip.position = position;
            }).start();
          };
          var this_4 = this;
          for (var i_3 = 0; i_3 < listCoin.length; i_3++) _loop_7(i_3);
          XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CHIP);
        }
        for (var i = 0; i < this.listBets.length; i++) if (data.moneyBet <= this.listBets[i]) {
          this.betIdx = i;
          this.minBetIdx = this.betIdx;
          break;
        }
        for (var i = 0; i < this.btnBets.length; i++) {
          var btnBet = this.btnBets[i];
          btnBet.active.active = i == this.minBetIdx;
          btnBet.node.active = i >= this.minBetIdx;
        }
        this.gameState = data.gameState;
        var msg = "";
        switch (this.gameState) {
         case 1:
          msg = "\u1002\u102d\u1019\u103a\u1038\u1021\u101e\u1005\u103a\u1010\u1005\u103a\u1001\u102f \u1005\u1010\u1004\u103a\u1015\u102b\u104b";
          break;

         case 2:
          msg = "\u1005\u1010\u1004\u103a\u1018\u103d\u1010\u103a\u1000\u1004\u103a\u101c\u102f\u1015\u103a\u1015\u102b\u104b";
          this.sprProgressTime.node.parent.active = true;
          this.curTime = TimeUtils_1.default.currentTimeMillis() + 1e3 * (data.countTime + 10);
          this.totalTimeState = 4e4;
          this.lblProgressTime.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u1005\u102c\u1038...";
          this.schedule(this.clockTimeSche = function() {
            _this.node.active ? XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CLOCK) : _this.unschedule(_this.clockTimeSche);
          }, 1, data.countTime + 10);
          this.setStateDealer(STATE_DEALER.MOI_CUOC);
          this.diceResult.active = true;
          break;

         case 4:
          msg = "Nh\xe0 c\xe1i c\xe2n ti\u1ec1n, ho\xe0n ti\u1ec1n";
          break;

         case 5:
          msg = "B\u1eaft \u0111\u1ea7u ho\xe0n ti\u1ec1n";
          break;

         case 6:
          msg = "\u1014\u1031\u102c\u1000\u103a\u1015\u103d\u1032\u1005\u1009\u103a\u1000\u102d\u102f \u1005\u1031\u102c\u1004\u1037\u103a\u1015\u102b\u104b";
          this.sprProgressTime.node.parent.active = true;
          this.sprProgressTime.fillRange = 1;
          this.lblProgressTime.string = "\u1014\u1031\u102c\u1000\u103a\u1015\u103d\u1032\u1005\u1009\u103a\u1000\u102d\u102f \u1005\u1031\u102c\u1004\u1037\u103a\u1015\u102b\u104b";
        }
        if ("" != msg) {
          this.setStateDealer(STATE_DEALER.IDLE);
          var label = this.dealer.getComponentInChildren(cc.Label);
          label.string = msg;
          this.scheduleOnce(function() {
            _this.boxMsg.active = true;
            _this.scheduleOnce(function() {
              _this.boxMsg.active = false;
            }, .9);
          }, .3);
        }
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.CmdSendGetCau());
      };
      Play.prototype.setStateDealer = function(state) {
        var _this = this;
        this.state = state;
        switch (state) {
         case STATE_DEALER.IDLE:
          this.dealer.timeScale = 1;
          this.dealer.setAnimation(0, "Idle", true);
          break;

         case STATE_DEALER.MOI_CUOC:
          this.dealer.timeScale = 1;
          this.dealer.setAnimation(0, "MoiDatCuoc1", false);
          this.dealer.setCompleteListener(function() {
            _this.setStateDealer(STATE_DEALER.IDLE);
          });
          break;

         case STATE_DEALER.TRA_TIEN:
          this.dealer.timeScale = 1;
          this.dealer.setAnimation(0, "MoidDatCuoc2", false);
          this.dealer.setCompleteListener(function() {
            _this.setStateDealer(STATE_DEALER.IDLE);
          });
          break;

         case STATE_DEALER.XOC_LO:
          cc.Tween.stopAllByTarget(this.diceResult);
          TW(this.diceResult).to(.5, {
            scale: 0,
            y: 335
          }, {
            easing: cc.easing.sineIn
          }).call(function() {
            _this.diceResult.active = false;
            _this.dealer.timeScale = 3;
            _this.dealer.setAnimation(0, "LacDia", false);
            XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.XOC_DIA);
            _this.dealer.setCompleteListener(function() {
              _this.setStateDealer(STATE_DEALER.MOI_CUOC);
            });
          }).start();
          this.scheduleOnce(function() {
            _this.xocDice();
          }, 1.6);
          break;

         case STATE_DEALER.MO_DIA:
          this.dealer.timeScale = 1;
          this.dealer.setAnimation(0, "MoiDatCuoc2", false);
          this.dealer.setCompleteListener(function() {
            _this.setStateDealer(STATE_DEALER.IDLE);
          });
        }
      };
      Play.prototype.actSetting = function() {
        this.boxSetting.active = !this.boxSetting.active;
      };
      Play.prototype.actSendChat = function() {
        var msg = this.edtChatInput.string.trim();
        "" != msg && XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
        this.edtChatInput.string = "";
      };
      Play.prototype.actSendChatNhanh = function(msg) {
        "" != msg && XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
        this.edtChatInput.string = "";
      };
      Play.prototype.actTutorial = function() {
        this.showTutorial();
      };
      Play.prototype.actRank = function() {
        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_function_in_development"));
      };
      Play.prototype.actHistory = function() {
        this.onBtnHistory();
      };
      Play.prototype.actOpenMusic = function() {
        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_function_in_development"));
      };
      Play.prototype.actBack = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      Play.prototype.actOrderBanker = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendOrderBanker());
      };
      Play.prototype.actCancelBanker = function() {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendCancelBanker());
      };
      __decorate([ property(XocDia_PopupHistory_1.default) ], Play.prototype, "history", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "nodeExit", void 0);
      __decorate([ property(cc.ScrollView) ], Play.prototype, "scrollChip", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "contentChatNhanh", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "bgChat", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.Toggle) ], Play.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], Play.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "nodeSetting", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "nodeTutorial", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblToast", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "boxSetting", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "boxMusic", void 0);
      __decorate([ property(XocDia_Player_1.default) ], Play.prototype, "mePlayer", void 0);
      __decorate([ property([ XocDia_Player_1.default ]) ], Play.prototype, "players", void 0);
      __decorate([ property([ XocDia_BtnBet_1.default ]) ], Play.prototype, "btnBets", void 0);
      __decorate([ property([ XocDia_BtnPayBet_1.default ]) ], Play.prototype, "btnPayBets", void 0);
      __decorate([ property(sp.Skeleton) ], Play.prototype, "dealer", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "boxMsg", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "labelMsg", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "dealerHandPoint", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "diceResult", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Play.prototype, "sprChipSmalls", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "chips", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "countplayer", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "chipTemplate", void 0);
      __decorate([ property(cc.Sprite) ], Play.prototype, "sprProgressTime", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblProgressTime", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblHistoryOdd", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblHistoryEven", void 0);
      __decorate([ property(cc.SpriteFrame) ], Play.prototype, "sfOdd", void 0);
      __decorate([ property(cc.SpriteFrame) ], Play.prototype, "sfEven", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "lblHistoryItems", void 0);
      __decorate([ property(cc.EditBox) ], Play.prototype, "edtChatInput", void 0);
      Play = __decorate([ ccclass ], Play);
      return Play;
    }(cc.Component);
    exports.default = Play;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Random": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/TimeUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./XocDia.BtnBet": "XocDia.BtnBet",
    "./XocDia.BtnPayBet": "XocDia.BtnPayBet",
    "./XocDia.Cmd": "XocDia.Cmd",
    "./XocDia.Player": "XocDia.Player",
    "./XocDia.PopupHistory": "XocDia.PopupHistory",
    "./XocDia.XocDiaController": "XocDia.XocDiaController",
    "./XocDia.XocDiaNetworkClient": "XocDia.XocDiaNetworkClient"
  } ],
  "XocDia.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f30edFcmBPA4H+ytFf3aNk", "XocDia.PopupHistory");
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
    var __read = this && this.__read || function(o, n) {
      var m = "function" === typeof Symbol && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          r && !r.done && (m = i["return"]) && m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __spread = this && this.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
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
    var PopupTransaction = function(_super) {
      __extends(PopupTransaction, _super);
      function PopupTransaction() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.prefab = null;
        _this.lblPage = null;
        _this.fontNumber = [];
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.data = null;
        _this.dataPlay = [];
        _this.dataCashout = [];
        _this.dataExchange = [];
        _this.currentData = [];
        _this.totalPageLoaded = 0;
        return _this;
      }
      PopupTransaction.prototype.onLoad = function() {};
      PopupTransaction.prototype.start = function() {};
      PopupTransaction.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupTransaction.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupTransaction.prototype.show = function() {
        _super.prototype.show.call(this);
        this.resetDataLoaded();
        this.currentData = [];
        this.data;
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupTransaction.prototype.resetDataLoaded = function() {
        this.totalPageLoaded = 0;
        this.currentData = [];
        this.dataCashout = [];
        this.dataPlay = [];
        this.dataExchange = [];
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupTransaction.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupTransaction.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupTransaction.prototype.loadPage = function(res) {
        this.content.removeAllChildren();
        for (var i = 0; i < 13; i++) {
          var indexData = i;
          if (indexData < res["transactions"].length) {
            var item = cc.instantiate(this.prefab);
            item.parent = this.content;
            var itemData = res["transactions"][indexData];
            var json = JSON.parse(itemData["description"]);
            item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
            item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
            item.getChildByName("Service").getComponent(cc.Label).string = json["roomID"];
            item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
            item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
            item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
            item.getChildByName("Coin").getComponent(cc.Label).fontSize = (itemData["moneyExchange"] > 0, 
            15);
            var pos = item.getChildByName("Coin").getComponent(cc.Label).node.position;
            item.getChildByName("Coin").getComponent(cc.Label).node.position = itemData["moneyExchange"] > 0 ? cc.v3(pos.x, 15, 0) : cc.v3(pos.x, 5, 0);
          }
        }
      };
      PopupTransaction.prototype.loadData = function(isReloadScr) {
        var _this = this;
        void 0 === isReloadScr && (isReloadScr = true);
        App_1.default.instance.showLoading(true);
        var params = null;
        params = {
          c: 140,
          un: Configs_1.default.Login.Nickname,
          p: this.page
        };
        Http_1.default.get(Configs_1.default.App.API, params, function(err, res) {
          var _a;
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            _this.maxPage = res["totalPages"];
            _this.totalPageLoaded++;
            _this.data = res;
            var transactionData = res["transactions"];
            if (_this.totalPageLoaded < _this.maxPage) {
              (_a = _this.dataPlay).push.apply(_a, __spread(transactionData));
              _this.currentData = _this.dataPlay;
            }
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            _this.loadPage(res);
          } else _this.content.removeAllChildren();
        });
      };
      PopupTransaction.prototype.setDataItem = function(item, itemData) {
        var json = JSON.parse(itemData["description"]);
        item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
        item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
        item.getChildByName("Service").getComponent(cc.Label).string = json["roomID"];
        item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
        item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
        item.getChildByName("Coin").getComponent(cc.Label).fontSize = itemData["moneyExchange"] > 0 ? 8 : 7;
        item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
        item.getChildByName("Desc").getComponent(cc.RichText).string = itemData["description"];
        item.active = true;
      };
      PopupTransaction.prototype.convertNameThirdParty = function(serviceName) {
        switch (serviceName) {
         case "WM_DEPOSIT":
         case "WM_WITHDRAW":
          return "Live casino WM";

         case "IBC2_DEPOSIT":
         case "IBC2_WITHDRAW":
          return "Th\u1ec3 Thao IBC";

         case "AG_DEPOSIT":
         case "AG_WITHDRAW":
          return "Live casino AG";

         case "CMD_DEPOSIT":
         case "CMD_WITHDRAW":
          return "Th\u1ec3 thao CMD368";

         case "Cashout":
          return "R\xfat ti\u1ec1n";

         case "190":
          return "T\xe0i X\u1ec9u Si\xeau T\u1ed1c";

         default:
          return serviceName;
        }
      };
      PopupTransaction.prototype.onScrollEvent = function(scrollview, eventType, customEventData) {
        if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM && this.page < this.maxPage) {
          this.page++;
          this.loadData(false);
        }
      };
      __decorate([ property(cc.Node) ], PopupTransaction.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], PopupTransaction.prototype, "prefab", void 0);
      __decorate([ property(cc.Label) ], PopupTransaction.prototype, "lblPage", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], PopupTransaction.prototype, "fontNumber", void 0);
      PopupTransaction = __decorate([ ccclass ], PopupTransaction);
      return PopupTransaction;
    }(Dialog_1.default);
    exports.default = PopupTransaction;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "XocDia.Room": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51ffe0qf+FFWK0X275xS9fw", "XocDia.Room");
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
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var XocDia_Cmd_1 = require("./XocDia.Cmd");
    var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var XocDiaRoom = function(_super) {
      __extends(XocDiaRoom, _super);
      function XocDiaRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblBet = null;
        _this.lblMin = null;
        _this.lblPlayers = null;
        _this.sprPlayers = null;
        _this.itemData = null;
        return _this;
      }
      XocDiaRoom.prototype.init = function(itemData) {
        this.itemData = itemData;
        this.lblBet.string = Utils_1.default.formatNumber(itemData["id"]);
        this.lblMin.string = Utils_1.default.formatNumber(itemData["requiredMoney"]);
        this.lblPlayers.string = itemData["userCount"] + "/" + itemData["maxUserPerRoom"];
        this.sprPlayers.fillRange = itemData["userCount"] / itemData["maxUserPerRoom"];
      };
      XocDiaRoom.prototype.onBtnClick = function() {
        if (Configs_1.default.Login.Coin >= this.itemData["requiredMoney"]) {
          App_1.default.instance.showLoading(true);
          XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendJoinRoomById(this.itemData["id"]));
        } else App_1.default.instance.showToast("\u101e\u1004\u1037\u103a\u101c\u1000\u103a\u1000\u103b\u1014\u103a \u1019\u101c\u102f\u1036\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104b \u1021\u102c\u1038\u1015\u103c\u1014\u103a\u101e\u103d\u1004\u103a\u1038\u1015\u102b\u104b.");
      };
      __decorate([ property(cc.Label) ], XocDiaRoom.prototype, "lblBet", void 0);
      __decorate([ property(cc.Label) ], XocDiaRoom.prototype, "lblMin", void 0);
      __decorate([ property(cc.Label) ], XocDiaRoom.prototype, "lblPlayers", void 0);
      __decorate([ property(cc.Sprite) ], XocDiaRoom.prototype, "sprPlayers", void 0);
      XocDiaRoom = __decorate([ ccclass ], XocDiaRoom);
      return XocDiaRoom;
    }(cc.Component);
    exports.default = XocDiaRoom;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./XocDia.Cmd": "XocDia.Cmd",
    "./XocDia.XocDiaNetworkClient": "XocDia.XocDiaNetworkClient"
  } ],
  "XocDia.XocDiaController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aad824KfeNGiJI70LxlK0AI", "XocDia.XocDiaController");
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
    var XocDia_Lobby_1 = require("./XocDia.Lobby");
    var XocDia_Play_1 = require("./XocDia.Play");
    var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var Common_AudioManager_1 = require("../../Lobby/LobbyScript/Script/common/Common.AudioManager");
    var audio_clip;
    (function(audio_clip) {
      audio_clip[audio_clip["BG"] = 0] = "BG";
      audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
      audio_clip[audio_clip["WIN"] = 2] = "WIN";
      audio_clip[audio_clip["START_GAME"] = 3] = "START_GAME";
      audio_clip[audio_clip["XOC_DIA"] = 4] = "XOC_DIA";
      audio_clip[audio_clip["CHIP"] = 5] = "CHIP";
    })(audio_clip || (audio_clip = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SoundManager = function() {
      function SoundManager() {
        this.bgMusic = null;
        this.effSound = null;
        this.listAudio = [];
      }
      SoundManager.prototype.playBgMusic = function() {
        if (SPUtils_1.default.getMusicVolumn() > 0) {
          this.bgMusic.clip = this.listAudio[audio_clip.BG];
          this.bgMusic.play();
        }
      };
      SoundManager.prototype.playAudioEffect = function(indexAudio) {
        SPUtils_1.default.getSoundVolumn() > 0 && cc.audioEngine.play(this.listAudio[indexAudio], false, 1);
      };
      SoundManager.prototype.stopBgMusic = function() {
        this.bgMusic.stop();
      };
      __decorate([ property(cc.AudioSource) ], SoundManager.prototype, "bgMusic", void 0);
      __decorate([ property(cc.AudioSource) ], SoundManager.prototype, "effSound", void 0);
      __decorate([ property([ cc.AudioClip ]) ], SoundManager.prototype, "listAudio", void 0);
      SoundManager = __decorate([ ccclass("XocDia.SoundManager") ], SoundManager);
      return SoundManager;
    }();
    exports.SoundManager = SoundManager;
    var XocDiaController = function(_super) {
      __extends(XocDiaController, _super);
      function XocDiaController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.noteLobby = null;
        _this.nodePlay = null;
        _this.soundManager = null;
        _this.lobby = null;
        _this.play = null;
        return _this;
      }
      XocDiaController_1 = XocDiaController;
      XocDiaController.prototype.onLoad = function() {
        XocDiaController_1.instance = this;
        this.lobby = this.noteLobby.getComponent(XocDia_Lobby_1.default);
      };
      XocDiaController.prototype.start = function() {
        var _this = this;
        this.lobby.init();
        this.lobby.node.active = true;
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        XocDia_XocDiaNetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1019\u103e\u1010\u103a\u1015\u102f\u1036\u1010\u1004\u103a\u1011\u102c\u1038\u1010\u101a\u103a\u104b...");
          XocDia_XocDiaNetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addOnClose(function() {
          XocDia_XocDiaNetworkClient_1.default.getInstance().close();
          App_1.default.instance.loadScene("Lobby");
        }, this);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Network_Cmd_1.default.Code.LOGIN:
            App_1.default.instance.showLoading(false);
            _this.lobby.actQuickPlay();
          }
        }, this);
        false == XocDia_XocDiaNetworkClient_1.default.getInstance().isConnected() && XocDia_XocDiaNetworkClient_1.default.getInstance().connect();
        Common_AudioManager_1.default.getInstance().playBackgroundMusic(this.soundManager.listAudio[audio_clip.BG]);
      };
      XocDiaController.prototype.showLobby = function() {
        this.lobby.show();
        this.play.node.active = false;
      };
      XocDiaController.prototype.showGamePlay = function(res) {
        var _this = this;
        if (null == this.play) {
          App_1.default.instance.showLoading(true);
          cc.assetManager.loadBundle("XocDia", function(err, bundleGame) {
            bundleGame.load("res/prefabs/Play", cc.Prefab, function(finish, total) {
              App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang("txt_loading1"));
            }, function(err, prefab) {
              _this.play = cc.instantiate(prefab).getComponent(XocDia_Play_1.default);
              _this.play.node.parent = _this.node;
              _this.play.init();
              _this.play.show(res);
              App_1.default.instance.showLoading(false);
              _this.lobby.node.active = false;
            });
          });
        } else {
          this.lobby.node.active = false;
          this.play.show(res);
        }
      };
      XocDiaController.prototype.playAudioEffect = function(index) {
        this.soundManager.playAudioEffect(index);
      };
      var XocDiaController_1;
      XocDiaController.instance = null;
      __decorate([ property(cc.Node) ], XocDiaController.prototype, "noteLobby", void 0);
      __decorate([ property(cc.Node) ], XocDiaController.prototype, "nodePlay", void 0);
      __decorate([ property(SoundManager) ], XocDiaController.prototype, "soundManager", void 0);
      XocDiaController = XocDiaController_1 = __decorate([ ccclass ], XocDiaController);
      return XocDiaController;
    }(cc.Component);
    exports.default = XocDiaController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Common.AudioManager": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./XocDia.Lobby": "XocDia.Lobby",
    "./XocDia.Play": "XocDia.Play",
    "./XocDia.XocDiaNetworkClient": "XocDia.XocDiaNetworkClient"
  } ],
  "XocDia.XocDiaNetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "559afJVJ/VI9oOTOdKdpXFq", "XocDia.XocDiaNetworkClient");
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
    var Configs_1 = require("../../Loading/src/Configs");
    var Network_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkClient");
    var Network_NetworkListener_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkListener");
    var XocDiaNetworkClient = function(_super) {
      __extends(XocDiaNetworkClient, _super);
      function XocDiaNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      XocDiaNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new XocDiaNetworkClient());
        return this.instance;
      };
      XocDiaNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_XOCDIA.host, Configs_1.default.App.HOST_XOCDIA.port);
      };
      XocDiaNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
      };
      XocDiaNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      XocDiaNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      XocDiaNetworkClient.prototype.send = function(packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return XocDiaNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = XocDiaNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
  } ]
}, {}, [ "XocDia.BankerControl", "XocDia.BtnBet", "XocDia.BtnPayBet", "XocDia.Cmd", "XocDia.Lobby", "XocDia.PanelPayDoor", "XocDia.Play", "XocDia.Player", "XocDia.PopupHistory", "XocDia.Room", "XocDia.XocDiaController", "XocDia.XocDiaNetworkClient" ]);