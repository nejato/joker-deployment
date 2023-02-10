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
  "BaiCao.CardUtil": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fe3e/9gF9ElZ/vmUvBqR4d", "BaiCao.CardUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.common = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var common;
    (function(common) {
      var CardUtils = function() {
        function CardUtils() {}
        CardUtils.getCardInfo = function(a) {
          this.id = a;
          this.so = this.getSoById(a);
          this.chat = this.getChatById(a);
          this.diem = this.getDiemById(a);
        };
        CardUtils.getSoById = function(a) {
          return Math.floor(a / 4);
        };
        CardUtils.getDiemById = function(a) {
          var score = Math.floor(a / 4) + 1;
          11 != score && 12 != score && 13 != score || (score = 10);
          return score;
        };
        CardUtils.getChatById = function(a) {
          return a % 4;
        };
        CardUtils.getNormalId = function(a) {
          var b = -1;
          b = 4 > a ? 11 : 8 > a ? 12 : Math.floor(a / 4) - 2;
          a = Math.floor(a % 4);
          3 == a ? a = 2 : 2 == a && (a = 3);
          return 4 * b + a;
        };
        return CardUtils;
      }();
      common.CardUtils = CardUtils;
    })(common = exports.common || (exports.common = {}));
    exports.default = common.CardUtils;
    cc._RF.pop();
  }, {} ],
  "BaiCao.Card": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0c79CT2hJMwaWDZSLTdtS6", "BaiCao.Card");
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
    var BaiCao_Res_1 = require("./BaiCao.Res");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spr = null;
        _this.posY = 0;
        _this.offsetY = 20;
        _this.isSelected = false;
        _this.callback = null;
        _this.index = null;
        return _this;
      }
      Card.prototype.onLoad = function() {
        this.spr = this.node.getComponent(cc.Sprite);
        this.posY = this.node.y;
      };
      Card.prototype.onSelect = function() {
        this.node.y += this.isSelected ? -this.offsetY : this.offsetY;
        this.isSelected = !this.isSelected;
        this.isSelected && this.callback && this.callback(this.index);
      };
      Card.prototype.setCardData = function(index, callback) {
        void 0 === callback && (callback = null);
        this.index = index;
        this.spr.spriteFrame = BaiCao_Res_1.default.getInstance().getCardFace(index);
        this.callback = callback;
      };
      Card.prototype.getCardIndex = function() {
        return this.index;
      };
      Card.prototype.select = function() {
        this.node.y = this.posY + this.offsetY;
        this.isSelected = true;
      };
      Card.prototype.deSelect = function() {
        this.node.y = this.posY;
        this.isSelected = false;
      };
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "./BaiCao.Res": "BaiCao.Res"
  } ],
  "BaiCao.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95fbb1H6RtD4Jqh4piu2Geo", "BaiCao.Cmd");
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
    var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
    var Configs_1 = require("../../Loading/src/Configs");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.LOGIN = 1;
        Code.TOPSERVER = 1001;
        Code.CMD_PINGPONG = 1050;
        Code.CMD_JOIN_ROOM = 3001;
        Code.CMD_RECONNECT_ROOM = 3002;
        Code.MONEY_BET_CONFIG = 3003;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.CHAT_ROOM = 3008;
        Code.GET_LIST_ROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.MO_BAI = 3101;
        Code.BAT_DAU = 3102;
        Code.KET_THUC = 3103;
        Code.YEU_CAU_DANH_BIEN = 3104;
        Code.CHIA_BAI = 3105;
        Code.KE_CUA = 3106;
        Code.TU_DONG_BAT_DAU = 3107;
        Code.DONG_Y_DANH_BIEN = 3108;
        Code.DAT_CUOC = 3109;
        Code.THONG_TIN_BAN_CHOI = 3110;
        Code.DANG_KY_THOAT_PHONG = 3111;
        Code.VAO_GA = 3112;
        Code.DOI_CHUONG = 3113;
        Code.MOI_DAT_CUOC = 3114;
        Code.CHEAT_CARDS = 3115;
        Code.DANG_KY_CHOI_TIEP = 3116;
        Code.UPDATE_OWNER_ROOM = 3117;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.LEAVE_GAME = 3119;
        Code.NOTIFY_KICK_FROM_ROOM = 3120;
        Code.NEW_USER_JOIN = 3121;
        Code.NOTIFY_USER_GET_JACKPOT = 3122;
        Code.UPDATE_MATCH = 3123;
        Code.PLAYER_STATUS_OUT_GAME = 0;
        Code.PLAYER_STATUS_VIEWER = 1;
        Code.PLAYER_STATUS_SITTING = 2;
        Code.PLAYER_STATUS_PLAYING = 3;
        Code.MAX_PLAYER = 8;
        return Code;
      }();
      cmd.Code = Code;
      var CmdLogin = function(_super) {
        __extends(CmdLogin, _super);
        function CmdLogin(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.LOGIN);
          _this.packHeader();
          _this.putString(a);
          _this.putString(b);
          _this.updateSize();
          return _this;
        }
        return CmdLogin;
      }(Network_OutPacket_1.default);
      cmd.CmdLogin = CmdLogin;
      var CmdJoinRoom = function(_super) {
        __extends(CmdJoinRoom, _super);
        function CmdJoinRoom(a, b, c) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CMD_JOIN_ROOM);
          _this.packHeader();
          _this.putInt(a);
          _this.putInt(b);
          _this.putLong(c);
          _this.putInt(0);
          _this.updateSize();
          return _this;
        }
        return CmdJoinRoom;
      }(Network_OutPacket_1.default);
      cmd.CmdJoinRoom = CmdJoinRoom;
      var CmdReconnectRoom = function(_super) {
        __extends(CmdReconnectRoom, _super);
        function CmdReconnectRoom() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CMD_RECONNECT_ROOM);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdReconnectRoom;
      }(Network_OutPacket_1.default);
      cmd.CmdReconnectRoom = CmdReconnectRoom;
      var SendVaoGa = function(_super) {
        __extends(SendVaoGa, _super);
        function SendVaoGa() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.VAO_GA);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendVaoGa;
      }(Network_OutPacket_1.default);
      cmd.SendVaoGa = SendVaoGa;
      var CmdSendRequestLeaveGame = function(_super) {
        __extends(CmdSendRequestLeaveGame, _super);
        function CmdSendRequestLeaveGame() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DANG_KY_THOAT_PHONG);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdSendRequestLeaveGame;
      }(Network_OutPacket_1.default);
      cmd.CmdSendRequestLeaveGame = CmdSendRequestLeaveGame;
      var CmdSendHoldRoom = function(_super) {
        __extends(CmdSendHoldRoom, _super);
        function CmdSendHoldRoom() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DANG_KY_CHOI_TIEP);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdSendHoldRoom;
      }(Network_OutPacket_1.default);
      cmd.CmdSendHoldRoom = CmdSendHoldRoom;
      var SendGetGameConfig = function(_super) {
        __extends(SendGetGameConfig, _super);
        function SendGetGameConfig() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.MONEY_BET_CONFIG);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendGetGameConfig;
      }(Network_OutPacket_1.default);
      cmd.SendGetGameConfig = SendGetGameConfig;
      var SendGetTopServer = function(_super) {
        __extends(SendGetTopServer, _super);
        function SendGetTopServer(a) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.TOPSERVER);
          _this.packHeader();
          _this.putByte(a);
          _this.updateSize();
          return _this;
        }
        return SendGetTopServer;
      }(Network_OutPacket_1.default);
      cmd.SendGetTopServer = SendGetTopServer;
      var SendCardCheat = function(_super) {
        __extends(SendCardCheat, _super);
        function SendCardCheat(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHEAT_CARDS);
          _this.packHeader();
          _this.putByte(a);
          _this.putByte(0);
          _this.putShort(b.length);
          if (a) for (var c = 0; c < b.length; c++) _this.putByte(b[c]);
          _this.updateSize();
          return _this;
        }
        return SendCardCheat;
      }(Network_OutPacket_1.default);
      cmd.SendCardCheat = SendCardCheat;
      var CmdSendDatCuoc = function(_super) {
        __extends(CmdSendDatCuoc, _super);
        function CmdSendDatCuoc(a) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DAT_CUOC);
          _this.packHeader();
          _this.putByte(a);
          _this.updateSize();
          return _this;
        }
        return CmdSendDatCuoc;
      }(Network_OutPacket_1.default);
      cmd.CmdSendDatCuoc = CmdSendDatCuoc;
      var CmdSendDanhBien = function(_super) {
        __extends(CmdSendDanhBien, _super);
        function CmdSendDanhBien(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.YEU_CAU_DANH_BIEN);
          _this.packHeader();
          _this.putByte(a);
          _this.putByte(b);
          _this.updateSize();
          return _this;
        }
        return CmdSendDanhBien;
      }(Network_OutPacket_1.default);
      cmd.CmdSendDanhBien = CmdSendDanhBien;
      var CmdSendKeCua = function(_super) {
        __extends(CmdSendKeCua, _super);
        function CmdSendKeCua(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.KE_CUA);
          _this.packHeader();
          _this.putByte(a);
          _this.putByte(b);
          _this.updateSize();
          return _this;
        }
        return CmdSendKeCua;
      }(Network_OutPacket_1.default);
      cmd.CmdSendKeCua = CmdSendKeCua;
      var CmdSendAcceptDanhBien = function(_super) {
        __extends(CmdSendAcceptDanhBien, _super);
        function CmdSendAcceptDanhBien(a) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DONG_Y_DANH_BIEN);
          _this.packHeader();
          _this.putByte(a);
          _this.updateSize();
          return _this;
        }
        return CmdSendAcceptDanhBien;
      }(Network_OutPacket_1.default);
      cmd.CmdSendAcceptDanhBien = CmdSendAcceptDanhBien;
      var CmdSendMoBai = function(_super) {
        __extends(CmdSendMoBai, _super);
        function CmdSendMoBai() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.MO_BAI);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdSendMoBai;
      }(Network_OutPacket_1.default);
      cmd.CmdSendMoBai = CmdSendMoBai;
      var CmdSendPing = function(_super) {
        __extends(CmdSendPing, _super);
        function CmdSendPing(a) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CMD_PINGPONG);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return CmdSendPing;
      }(Network_OutPacket_1.default);
      cmd.CmdSendPing = CmdSendPing;
      var SendGetListRoom = function(_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.GET_LIST_ROOM);
          _this.packHeader();
          _this.putInt(Configs_1.default.App.MONEY_TYPE);
          _this.putInt(Code.MAX_PLAYER);
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
      var SendChatRoom = function(_super) {
        __extends(SendChatRoom, _super);
        function SendChatRoom(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHAT_ROOM);
          _this.packHeader();
          _this.putByte(a ? 1 : 0);
          _this.putString(encodeURI(b));
          _this.updateSize();
          return _this;
        }
        return SendChatRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChatRoom = SendChatRoom;
      var ReceivedLogin = function(_super) {
        __extends(ReceivedLogin, _super);
        function ReceivedLogin(data) {
          return _super.call(this, data) || this;
        }
        return ReceivedLogin;
      }(Network_InPacket_1.default);
      cmd.ReceivedLogin = ReceivedLogin;
      var ReceivedGetListRoom = function(_super) {
        __extends(ReceivedGetListRoom, _super);
        function ReceivedGetListRoom(data) {
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
        return ReceivedGetListRoom;
      }(Network_InPacket_1.default);
      cmd.ReceivedGetListRoom = ReceivedGetListRoom;
      var ReceivedJoinRoomSucceed = function(_super) {
        __extends(ReceivedJoinRoomSucceed, _super);
        function ReceivedJoinRoomSucceed(data) {
          var _this = _super.call(this, data) || this;
          var a;
          _this.myChair = _this.getByte();
          _this.chuongChair = _this.getByte();
          _this.moneyBet = _this.getLong();
          _this.roomId = _this.getInt();
          _this.gameId = _this.getInt();
          _this.moneyType = _this.getByte();
          _this.rule = _this.getByte();
          _this.playerSize = _this.getShort();
          _this.playerStatus = [];
          for (a = 0; a < _this.playerSize; a++) _this.playerStatus.push(_this.getByte());
          _this.playerSize = _this.getShort();
          _this.playerInfos = [];
          for (a = 0; a < _this.playerSize; a++) {
            var b = {};
            b["nickName"] = _this.getString();
            b["avatar"] = _this.getString();
            b["money"] = _this.getLong();
            _this.playerInfos.push(b);
          }
          _this.gameAction = _this.getByte();
          _this.countDownTime = _this.getByte();
          return _this;
        }
        return ReceivedJoinRoomSucceed;
      }(Network_InPacket_1.default);
      cmd.ReceivedJoinRoomSucceed = ReceivedJoinRoomSucceed;
      var ReceivedAutoStart = function(_super) {
        __extends(ReceivedAutoStart, _super);
        function ReceivedAutoStart(data) {
          var _this = _super.call(this, data) || this;
          _this.isAutoStart = _this.getBool();
          _this.timeAutoStart = _this.getByte();
          return _this;
        }
        return ReceivedAutoStart;
      }(Network_InPacket_1.default);
      cmd.ReceivedAutoStart = ReceivedAutoStart;
      var ReceivedChiaBai = function(_super) {
        __extends(ReceivedChiaBai, _super);
        function ReceivedChiaBai(data) {
          var _this = _super.call(this, data) || this;
          var a = 0;
          _this.cardSize = _this.getShort();
          _this.cards = [];
          for (a = 0; a < _this.cardSize; a++) _this.cards.push(_this.getByte());
          _this.gameId = _this.getInt();
          _this.timeChiaBai = _this.getByte();
          return _this;
        }
        return ReceivedChiaBai;
      }(Network_InPacket_1.default);
      cmd.ReceivedChiaBai = ReceivedChiaBai;
      var ReceivedFirstTurnDecision = function(_super) {
        __extends(ReceivedFirstTurnDecision, _super);
        function ReceivedFirstTurnDecision(data) {
          var _this = _super.call(this, data) || this;
          _this.isRandom = _this.getBool();
          _this.chair = _this.getByte();
          _this.cardSize = _this.getShort();
          _this.cards = [];
          for (var i = 0; i < _this.cardSize; i++) _this.cards.push(_this.getByte());
          return _this;
        }
        return ReceivedFirstTurnDecision;
      }(Network_InPacket_1.default);
      cmd.ReceivedFirstTurnDecision = ReceivedFirstTurnDecision;
      var ReceivedUserLeaveRoom = function(_super) {
        __extends(ReceivedUserLeaveRoom, _super);
        function ReceivedUserLeaveRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          _this.nickName = _this.getString();
          return _this;
        }
        return ReceivedUserLeaveRoom;
      }(Network_InPacket_1.default);
      cmd.ReceivedUserLeaveRoom = ReceivedUserLeaveRoom;
      var ReceivedUserJoinRoom = function(_super) {
        __extends(ReceivedUserJoinRoom, _super);
        function ReceivedUserJoinRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.info = {};
          _this.info["nickName"] = _this.getString();
          _this.info["avatar"] = _this.getString();
          _this.info["money"] = _this.getLong();
          _this.uChair = _this.getByte();
          _this.uStatus = _this.getByte();
          return _this;
        }
        return ReceivedUserJoinRoom;
      }(Network_InPacket_1.default);
      cmd.ReceivedUserJoinRoom = ReceivedUserJoinRoom;
      var ReceivedUpdateMatch = function(_super) {
        __extends(ReceivedUpdateMatch, _super);
        function ReceivedUpdateMatch(data) {
          var _this = _super.call(this, data) || this;
          _this.myChair = _this.getByte();
          var a = _this.getShort();
          _this.hasInfo = [];
          for (var b = 0; b < a; b++) _this.hasInfo.push(_this.getBool());
          _this.infos = [];
          for (b = 0; b < a; b++) {
            var c = {};
            _this.hasInfo[b] && (c["nickName"] = _this.getString(), c["avatar"] = _this.getString(), 
            c["money"] = _this.getLong(), c["status"] = _this.getInt());
            _this.infos.push(c);
          }
          return _this;
        }
        return ReceivedUpdateMatch;
      }(Network_InPacket_1.default);
      cmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
      var ReceivedBaCayConfig = function(_super) {
        __extends(ReceivedBaCayConfig, _super);
        function ReceivedBaCayConfig(data) {
          var _this = _super.call(this, data) || this;
          _this.listSize = _this.getShort();
          _this.list = [];
          for (var a = 0; a < _this.listSize; a++) {
            var b = {};
            b["maxUserPerRoom"] = _this.getByte();
            b["moneyType"] = _this.getByte();
            b["moneyBet"] = _this.getLong();
            b["moneyRequire"] = _this.getLong();
            b["nPersion"] = _this.getInt();
            _this.list.push(b);
          }
          return _this;
        }
        return ReceivedBaCayConfig;
      }(Network_InPacket_1.default);
      cmd.ReceivedBaCayConfig = ReceivedBaCayConfig;
      var ReceivedNotifyRegOutRoom = function(_super) {
        __extends(ReceivedNotifyRegOutRoom, _super);
        function ReceivedNotifyRegOutRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.outChair = _this.getByte();
          _this.isOutRoom = _this.getBool();
          return _this;
        }
        return ReceivedNotifyRegOutRoom;
      }(Network_InPacket_1.default);
      cmd.ReceivedNotifyRegOutRoom = ReceivedNotifyRegOutRoom;
      var ReceivedKickOff = function(_super) {
        __extends(ReceivedKickOff, _super);
        function ReceivedKickOff(data) {
          var _this = _super.call(this, data) || this;
          _this.reason = _this.getByte();
          return _this;
        }
        return ReceivedKickOff;
      }(Network_InPacket_1.default);
      cmd.ReceivedKickOff = ReceivedKickOff;
      var ReceivedMoiDatCuoc = function(_super) {
        __extends(ReceivedMoiDatCuoc, _super);
        function ReceivedMoiDatCuoc(data) {
          var _this = _super.call(this, data) || this;
          _this.timeDatCuoc = _this.getByte();
          return _this;
        }
        return ReceivedMoiDatCuoc;
      }(Network_InPacket_1.default);
      cmd.ReceivedMoiDatCuoc = ReceivedMoiDatCuoc;
      var ReceivedDatCuoc = function(_super) {
        __extends(ReceivedDatCuoc, _super);
        function ReceivedDatCuoc(data) {
          var _this = _super.call(this, data) || this;
          _this.chairDatCuoc = _this.getByte();
          _this.level = _this.getByte();
          return _this;
        }
        return ReceivedDatCuoc;
      }(Network_InPacket_1.default);
      cmd.ReceivedDatCuoc = ReceivedDatCuoc;
      var ReceivedYeuCauDanhBien = function(_super) {
        __extends(ReceivedYeuCauDanhBien, _super);
        function ReceivedYeuCauDanhBien(data) {
          var _this = _super.call(this, data) || this;
          _this.danhBienChair = _this.getByte();
          _this.level = _this.getByte();
          return _this;
        }
        return ReceivedYeuCauDanhBien;
      }(Network_InPacket_1.default);
      cmd.ReceivedYeuCauDanhBien = ReceivedYeuCauDanhBien;
      var ReceivedChapNhanDanhBien = function(_super) {
        __extends(ReceivedChapNhanDanhBien, _super);
        function ReceivedChapNhanDanhBien(data) {
          var _this = _super.call(this, data) || this;
          _this.danhBienChair = _this.getByte();
          _this.level = _this.getByte();
          return _this;
        }
        return ReceivedChapNhanDanhBien;
      }(Network_InPacket_1.default);
      cmd.ReceivedChapNhanDanhBien = ReceivedChapNhanDanhBien;
      var ReceivedKeCua = function(_super) {
        __extends(ReceivedKeCua, _super);
        function ReceivedKeCua(data) {
          var _this = _super.call(this, data) || this;
          _this.chairKeCuaFrom = _this.getByte();
          _this.chairKeCuaTo = _this.getByte();
          _this.level = _this.getByte();
          return _this;
        }
        return ReceivedKeCua;
      }(Network_InPacket_1.default);
      cmd.ReceivedKeCua = ReceivedKeCua;
      var ReceivedVaoGa = function(_super) {
        __extends(ReceivedVaoGa, _super);
        function ReceivedVaoGa(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          _this.chicKenBet = _this.getLong();
          return _this;
        }
        return ReceivedVaoGa;
      }(Network_InPacket_1.default);
      cmd.ReceivedVaoGa = ReceivedVaoGa;
      var ReceivedMoBai = function(_super) {
        __extends(ReceivedMoBai, _super);
        function ReceivedMoBai(data) {
          var _this = _super.call(this, data) || this;
          _this.chairMoBai = _this.getByte();
          _this.cardSize = _this.getShort();
          _this.cards = [];
          for (var a = 0; a < _this.cardSize; a++) _this.cards.push(_this.getByte());
          return _this;
        }
        return ReceivedMoBai;
      }(Network_InPacket_1.default);
      cmd.ReceivedMoBai = ReceivedMoBai;
      var ReceivedEndGame = function(_super) {
        __extends(ReceivedEndGame, _super);
        function ReceivedEndGame(data) {
          var _this = _super.call(this, data) || this;
          var a = 0;
          var b = _this.getShort();
          _this.statusList = [];
          for (a = 0; a < b; a++) _this.statusList.push(_this.getByte());
          _this.cardList = [];
          for (a = 0; a < _this.statusList.length; a++) {
            b = [];
            if (3 == _this.statusList[a]) for (var c = _this.getShort(), d = 0; d < c; d++) b.push(_this.getByte());
            _this.cardList.push(b);
          }
          _this.tienThangChuong = _this.getLong();
          _this.tienThangGa = _this.getLong();
          _this.keCuaMoneyList = [];
          _this.danhBienMoneyList = [];
          b = _this.getShort();
          for (a = 0; a < b; a++) _this.keCuaMoneyList.push(_this.getLong());
          b = _this.getShort();
          for (a = 0; a < b; a++) _this.danhBienMoneyList.push(_this.getLong());
          _this.tongTienCuoiVan = _this.getLong();
          _this.tongTienCuocList = [];
          _this.tongDanhBienList = [];
          _this.tongKeCuaList = [];
          _this.tongCuocGaList = [];
          _this.tongCuoiVanList = [];
          _this.currentMoneyList = [];
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.tongTienCuocList.push(b);
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.tongDanhBienList.push(b);
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.tongKeCuaList.push(b);
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.tongCuocGaList.push(b);
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.tongCuoiVanList.push(b);
          _this.getShort();
          for (a = 0; a < Code.MAX_PLAYER; a++) b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), 
          _this.currentMoneyList.push(b);
          _this.timeEndGame = _this.getByte();
          return _this;
        }
        return ReceivedEndGame;
      }(Network_InPacket_1.default);
      cmd.ReceivedEndGame = ReceivedEndGame;
      var ReceivedDoiChuong = function(_super) {
        __extends(ReceivedDoiChuong, _super);
        function ReceivedDoiChuong(data) {
          var _this = _super.call(this, data) || this;
          _this.chuongChair = _this.getByte();
          return _this;
        }
        return ReceivedDoiChuong;
      }(Network_InPacket_1.default);
      cmd.ReceivedDoiChuong = ReceivedDoiChuong;
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
      var ReceivedGameInfo = function(_super) {
        __extends(ReceivedGameInfo, _super);
        function ReceivedGameInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.myChair = _this.getByte();
          _this.chuongChair = _this.getByte();
          var a = _this.getShort();
          _this.cards = [];
          for (var b = 0; b < a; b++) _this.cards.push(_this.getByte());
          _this.cuocDanhBienList = [];
          a = _this.getShort();
          for (b = 0; b < a; b++) _this.cuocDanhBienList[b] = _this.getInt();
          _this.cuocKeCuaList = [];
          a = _this.getShort();
          for (b = 0; b < a; b++) _this.cuocKeCuaList[b] = _this.getInt();
          _this.gameServerState = _this.getByte();
          _this.isAutoStart = _this.getBool();
          _this.gameAction = _this.getByte();
          _this.countDownTime = _this.getByte();
          _this.moneyType = _this.getByte();
          _this.moneyBet = _this.getLong();
          _this.gameId = _this.getInt();
          _this.roomId = _this.getInt();
          _this.hasInfo = [];
          a = _this.getShort();
          for (b = 0; b < a; b++) _this.hasInfo[b] = _this.getBool();
          _this.players = [];
          for (b = 0; b < Code.MAX_PLAYER; b++) _this.hasInfo[b] ? (_this.players[b] = [], 
          _this.players[b].status = _this.getByte(), _this.players[b].money = _this.getLong(), 
          _this.players[b].cuocGa = _this.getInt(), _this.players[b].cuocChuong = _this.getInt(), 
          _this.players[b].avatar = _this.getString(), _this.players[b].nickName = _this.getString()) : (_this.players[b] = [], 
          _this.players[b].status = 0);
          return _this;
        }
        return ReceivedGameInfo;
      }(Network_InPacket_1.default);
      cmd.ReceivedGameInfo = ReceivedGameInfo;
      var ReceivedJoinRoomFail = function(_super) {
        __extends(ReceivedJoinRoomFail, _super);
        function ReceivedJoinRoomFail(data) {
          return _super.call(this, data) || this;
        }
        return ReceivedJoinRoomFail;
      }(Network_InPacket_1.default);
      cmd.ReceivedJoinRoomFail = ReceivedJoinRoomFail;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "BaiCao.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8823cz4QghOwpS4iXO2AMoB", "BaiCao.Controller");
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
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var BaiCao_Cmd_1 = require("./BaiCao.Cmd");
    var BaiCao_NetworkClient_1 = require("./BaiCao.NetworkClient");
    var BaiCao_CardUtil_1 = require("./BaiCao.CardUtil");
    var configPlayer = [];
    var defaultPlayerPos = [ [ 0, 1, 2, 3, 4, 5, 6, 7 ], [ 1, 2, 3, 4, 5, 6, 7, 0 ], [ 2, 3, 4, 5, 6, 7, 0, 1 ], [ 3, 4, 5, 6, 7, 0, 1, 2 ], [ 4, 5, 6, 7, 0, 1, 2, 3 ], [ 5, 6, 7, 0, 1, 2, 3, 4 ], [ 6, 7, 0, 1, 2, 3, 4, 5 ], [ 7, 0, 1, 2, 3, 4, 5, 6 ] ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaiCaoController = function(_super) {
      __extends(BaiCaoController, _super);
      function BaiCaoController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.UI_ChooseRoom = null;
        _this.labelNickName = null;
        _this.labelCoin = null;
        _this.contentListRooms = null;
        _this.prefabItemRoom = null;
        _this.scrollListRoom = null;
        _this.edtFindRoom = null;
        _this.btnHideRoomFull = null;
        _this.isInitedUIRoom = false;
        _this.UI_Playing = null;
        _this.meCards = null;
        _this.groupPlayers = null;
        _this.spriteCards = [];
        _this.spriteCardBack = null;
        _this.matchPot = null;
        _this.labelMatchPot = null;
        _this.cardsDeal = null;
        _this.btnBet = null;
        _this.btnOpenCard = null;
        _this.btnLeaveRoom = null;
        _this.hubChips = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.betChooseValue = null;
        _this.betChooseValueTarget = null;
        _this.popupMatchResult = null;
        _this.contentMatchResult = null;
        _this.prefabItemResult = null;
        _this.scrollMatchResult = null;
        _this.notifyTimeStart = null;
        _this.notifyTimeEnd = null;
        _this.notifyTimeBet = null;
        _this.UI_Chat = null;
        _this.edtChatInput = null;
        _this.popupNodity = null;
        _this.labelNotifyContent = null;
        _this.popupGuide = null;
        _this.seatOwner = null;
        _this.currentRoomBet = null;
        _this.gameState = null;
        _this.minutes = null;
        _this.seconds = null;
        _this.timeAutoStart = null;
        _this.timeEnd = null;
        _this.timeBet = null;
        _this.intervalWaitting = null;
        _this.intervalEnd = null;
        _this.intervalBetting = null;
        _this.currentCard = null;
        _this.numCardOpened = 0;
        _this.arrBetValue = [];
        _this.arrBetPos = [ -157.5, -52.5, 52.5, 157.5 ];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutEndGame = null;
        _this.timeoutChiaBaiDone = null;
        _this.arrPosDanhBien = [];
        return _this;
      }
      BaiCaoController_1 = BaiCaoController;
      BaiCaoController.prototype.onLoad = function() {
        BaiCaoController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
      };
      BaiCaoController.prototype.start = function() {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        BaiCao_NetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b...");
          BaiCao_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        BaiCao_NetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.loadScene("Lobby");
        }, this);
        BaiCao_NetworkClient_1.default.getInstance().connect();
      };
      BaiCaoController.prototype.joinRoom = function(info) {
        App_1.default.instance.showLoading(true);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      BaiCaoController.prototype.refeshListRoom = function() {
        this.contentListRooms.removeAllChildren(true);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendGetListRoom());
      };
      BaiCaoController.prototype.findRoomId = function() {
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
          var idFind = parseInt(text);
          for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
            roomItem.roomInfo["id"] != idFind && (this.contentListRooms.children[index].active = false);
          }
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      BaiCaoController.prototype.hideRoomFull = function() {
        if (this.btnHideRoomFull.isChecked) for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
          roomItem.roomInfo["userCount"] == roomItem.roomInfo["maxUserPerRoom"] && (this.contentListRooms.children[index].active = false);
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      BaiCaoController.prototype.showUIRooms = function() {
        var _this = this;
        this.UI_ChooseRoom.active = true;
        if (this.isInitedUIRoom) BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN); else {
          this.isInitedUIRoom = true;
          this.labelNickName.string = Configs_1.default.Login.Nickname;
          BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
            _this.labelCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
          }, this);
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          this.setupListener();
        }
      };
      BaiCaoController.prototype.closeUIRoom = function() {
        this.UI_ChooseRoom.active = false;
      };
      BaiCaoController.prototype.createRoom = function() {};
      BaiCaoController.prototype.playingNow = function() {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
          roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin && arrRoomOkMoney.push(index);
        }
        if (arrRoomOkMoney.length > 0) {
          var roomCrowed = arrRoomOkMoney[0];
          for (var index = 0; index < arrRoomOkMoney.length; index++) {
            var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("BaiCao.ItemRoom");
            var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("BaiCao.ItemRoom");
            roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"] && (roomCrowed = arrRoomOkMoney[index]);
          }
          var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("BaiCao.ItemRoom");
          this.joinRoom(roomChoosed.roomInfo);
        } else App_1.default.instance.alertDialog.showMsg("\u1019\u100a\u103a\u101e\u100a\u1037\u103a\u1021\u1001\u1014\u103a\u1038\u1010\u103d\u1004\u103a\u1019\u1006\u102d\u102f\n \u1015\u102b\u101d\u1004\u103a\u101b\u1014\u103a \u1015\u102d\u102f\u1000\u103a\u1006\u1036\u1019\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104b !");
      };
      BaiCaoController.prototype.showUIChat = function() {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(.5, 420, 0));
      };
      BaiCaoController.prototype.closeUIChat = function() {
        this.UI_Chat.runAction(cc.moveTo(.5, 1e3, 0));
      };
      BaiCaoController.prototype.chatEmotion = function(event, id) {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      BaiCaoController.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      BaiCaoController.prototype.showPopupGuide = function() {
        this.popupGuide.active = true;
      };
      BaiCaoController.prototype.closePopupGuide = function() {
        this.popupGuide.active = false;
      };
      BaiCaoController.prototype.backToLobby = function() {
        BaiCao_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      BaiCaoController.prototype.showUIPlaying = function() {
        this.UI_Playing.active = true;
      };
      BaiCaoController.prototype.closeUIPlaying = function() {
        this.actionLeaveRoom();
      };
      BaiCaoController.prototype.setupMatch = function(data) {
        this.showUIPlaying();
        this.closePopupMatchResult();
        this.closeUIChat();
        for (var index = 1; index < 8; index++) {
          this.getPlayerHouse(index).showPopupBet(false);
          this.getPlayerHouse(index).closePopupRequestDanhBien();
        }
        var chuongChair = data["chuongChair"];
        var countDownTime = data["countDownTime"];
        var gameAction = data["gameAction"];
        var gameId = data["gameId"];
        var moneyBet = data["moneyBet"];
        var moneyType = data["moneyType"];
        var myChair = data["myChair"];
        var playerInfos = data["playerInfos"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var roomId = data["roomId"];
        var rule = data["rule"];
        this.labelRoomId.string = "3\u1001\u103b\u1015\u103a \u101b\u103e\u1019\u103a\u1038 - \u1021\u1001\u1014\u103a\u1038: " + roomId;
        this.labelRoomBet.string = "\u1021\u101c\u1031\u102c\u1004\u103a\u1038\u1021\u1005\u102c\u1038\u1021\u1006\u1004\u1037\u103a: " + Utils_1.default.formatNumber(moneyBet) + "$";
        this.currentRoomBet = moneyBet;
        this.gameState = gameAction;
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        var arrPlayerStatus = [];
        for (var index = 0; index < playerInfos.length; index++) if ("" !== playerInfos[index].nickName) {
          numPlayers += 1;
          arrPlayerPosExist.push(index);
          arrPlayerInfo.push(playerInfos[index]);
          arrPlayerStatus.push(playerStatus[index]);
        }
        this.resetHubChips();
        for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        for (var index = 0; index < configPlayer.length; index++) {
          var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
          var seatId = configPlayer[index].seatId;
          this.getPlayerHouse(seatId).resetPlayerInfo();
          if (findPos > -1) {
            if (arrPlayerStatus[findPos] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              configPlayer[index].isViewer = false;
              this.getPlayerHouse(seatId).setIsViewer(false);
            } else {
              configPlayer[index].isViewer = true;
              this.getPlayerHouse(seatId).setIsViewer(true);
            }
            this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
          } else {
            this.getPlayerHouse(seatId).showBtnInvite(true);
            configPlayer[index].isViewer = true;
          }
        }
        for (var index = 0; index < 8; index++) this.getPlayerHouse(index).setOwner(false);
        var seatOwner = this.findPlayerSeatByPos(chuongChair);
        if (-1 !== seatOwner) {
          this.getPlayerHouse(seatOwner).setOwner(true);
          this.seatOwner = seatOwner;
        }
        var msg = "";
        switch (this.gameState) {
         case 1:
          msg = "\u1002\u102d\u1019\u103a\u1038\u1021\u101e\u1005\u103a\u1010\u1005\u103a\u1001\u102f \u1005\u1010\u1004\u103a\u1015\u102b\u104b";
          break;

         case 2:
          msg = "\u1005\u1010\u1004\u103a\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038";
          break;

         case 3:
          break;

         case 4:
          msg = "\u1015\u102d\u102f\u1004\u103a\u101b\u103e\u1004\u103a\u1000 \u1015\u102d\u102f\u1000\u103a\u1006\u1036\u1000\u102d\u102f \u1011\u102d\u1014\u103a\u1038\u1010\u101a\u103a\u104b";
          break;

         case 5:
          msg = "\u1015\u103c\u1014\u103a\u1021\u1019\u103a\u1038\u1004\u103d\u1031\u1000\u102d\u102f \u1005\u1010\u1004\u103a\u1015\u102b\u104b";
          break;

         case 6:
          msg = "\u1005\u1010\u1004\u103a\u1015\u1031\u1038\u1006\u1031\u102c\u1004\u103a\u1015\u102b\u104b";
        }
        "" != msg;
      };
      BaiCaoController.prototype.startWaittingCountDown = function(timeWait) {
        var _this = this;
        this.timeAutoStart = timeWait;
        this.setTimeWaittingCountDown();
        this.notifyTimeStart.active = true;
        this.unschedule(this.intervalWaitting);
        this.schedule(this.intervalWaitting = function() {
          _this.timeAutoStart--;
          _this.setTimeWaittingCountDown();
          if (_this.timeAutoStart < 1) {
            _this.unschedule(_this.intervalWaitting);
            _this.notifyTimeStart.active = false;
          }
        }, 1);
      };
      BaiCaoController.prototype.setTimeWaittingCountDown = function() {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      BaiCaoController.prototype.startEndCountDown = function(timeWait) {
        var _this = this;
        this.timeEnd = timeWait;
        this.setTimeEndCountDown();
        this.notifyTimeEnd.active = true;
        this.unschedule(this.intervalEnd);
        this.schedule(this.intervalEnd = function() {
          _this.timeEnd--;
          _this.setTimeEndCountDown();
          if (_this.timeEnd < 1) {
            _this.unschedule(_this.intervalEnd);
            _this.notifyTimeEnd.active = false;
          }
        }, 1);
      };
      BaiCaoController.prototype.setTimeEndCountDown = function() {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1021\u1006\u102f\u1036\u1038\u101e\u1010\u103a : " + this.seconds + "s ";
      };
      BaiCaoController.prototype.startBettingCountDown = function(turnTime) {
        var _this = this;
        this.timeBet = turnTime;
        this.actionBetting.active = true;
        this.processBetting(1);
        this.unschedule(this.intervalBetting);
        this.schedule(this.intervalBetting = function() {
          _this.timeBet--;
          var rate = (_this.timeBet / turnTime).toFixed(1);
          _this.processBetting(rate);
          if (_this.timeBet < 1) {
            _this.unschedule(_this.intervalBetting);
            _this.actionBetting.active = false;
          }
        }, 1);
      };
      BaiCaoController.prototype.processBetting = function(rate) {
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
      };
      BaiCaoController.prototype.getCardsScore = function(arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) score += BaiCao_CardUtil_1.default.getDiemById(arrCards[a]);
        score %= 10;
        return score;
      };
      BaiCaoController.prototype.openMeCard = function(event, itemId) {
        var _this = this;
        var cardPos = parseInt(itemId);
        this.getPlayerHouse(0).prepareCardReal(cardPos);
        var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(this.currentCard[cardPos]);
        this.getPlayerHouse(0).transformToCardReal(cardPos, this.spriteCards[spriteCardId]);
        this.numCardOpened += 1;
        if (3 == this.numCardOpened) {
          this.btnOpenCard.active = true;
          this.btnBet.active = false;
          this.getPlayerHouse(0).showCardName(this.getCardsScore(this.currentCard) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
          setTimeout(function() {
            _this.getPlayerHouse(0).resetCardReady();
          }, 200);
        }
      };
      BaiCaoController.prototype.moveChipsToHubNow = function(index) {
        this.hubChips.children[2 * index].position = cc.v2(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[2 * index + 1].position = cc.v2(25, 80);
        this.hubChips.children[2 * index + 1].scale = 0;
      };
      BaiCaoController.prototype.fxMoveChips = function(chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(.8, toX, toY), cc.scaleTo(.8, 0, 0))));
      };
      BaiCaoController.prototype.resetHubChips = function() {
        var arrFromX = [ 70, 280, 280, 260, 100, -260, -375, -360 ];
        var arrFromY = [ -195, -150, -55, 70, 90, 85, -30, -155 ];
        for (var index = 0; index < 8; index++) {
          this.hubChips.children[2 * index].position = cc.v2(arrFromX[index], arrFromY[index]);
          this.hubChips.children[2 * index + 1].position = cc.v2(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) this.hubChips.children[index].active = false;
      };
      BaiCaoController.prototype.setupBet = function() {
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaiCaoController.prototype.showPopupMatchResult = function(data) {
        this.popupMatchResult.active = true;
        this.contentMatchResult.removeAllChildren(true);
        for (var index = 0; index < data.length; index++) {
          var item = cc.instantiate(this.prefabItemResult);
          item.getComponent("BaiCao.ItemResult").initItem(data[index]);
          this.contentMatchResult.addChild(item);
        }
        this.scrollMatchResult.scrollToTop(.2);
      };
      BaiCaoController.prototype.closePopupMatchResult = function() {
        this.popupMatchResult.active = false;
      };
      BaiCaoController.prototype.setupListener = function() {
        var _this = this;
        BaiCao_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case BaiCao_Cmd_1.default.Code.LOGIN:
            App_1.default.instance.showLoading(false);
            _this.refeshListRoom();
            BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdReconnectRoom());
            break;

           case BaiCao_Cmd_1.default.Code.TOPSERVER:
           case BaiCao_Cmd_1.default.Code.CMD_PINGPONG:
           case BaiCao_Cmd_1.default.Code.CMD_JOIN_ROOM:
           case BaiCao_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case BaiCao_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case BaiCao_Cmd_1.default.Code.MONEY_BET_CONFIG:
            App_1.default.instance.showLoading(false);
            break;

           case BaiCao_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedJoinRoomFail(data);
            var msg = "\u1021\u1019\u103e\u102c\u1038 " + res.getError() + ", \u1019\u101e\u102d.";
            switch (res.getError()) {
             case 1:
              msg = "\u1021\u1001\u103b\u1000\u103a\u1021\u101c\u1000\u103a\u1005\u1005\u103a\u1006\u1031\u1038\u1001\u103c\u1004\u103a\u1038\u1021\u1019\u103e\u102c\u1038!";
              break;

             case 2:
              msg = "\u101e\u1004\u1037\u103a\u101c\u103b\u1031\u102c\u103a\u101e\u1031\u102c\u1021\u1001\u1014\u103a\u1038\u1000\u102d\u102f \u101b\u103e\u102c\u1019\u1010\u103d\u1031\u1037\u1015\u102b\u104b \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b!";
              break;

             case 3:
              msg = "\u1024\u1000\u1005\u102c\u1038\u1001\u1014\u103a\u1038\u101e\u102d\u102f\u1037 \u101d\u1004\u103a\u101b\u1014\u103a \u101e\u1004\u1037\u103a\u1010\u103d\u1004\u103a \u1004\u103d\u1031\u1021\u101c\u102f\u1036\u1021\u101c\u1031\u102c\u1000\u103a\u1019\u101b\u103e\u102d\u1015\u102b\u104b!";
              break;

             case 4:
              msg = "\u101e\u1004\u1037\u103a\u101c\u103b\u1031\u102c\u103a\u101e\u1031\u102c\u1021\u1001\u1014\u103a\u1038\u1000\u102d\u102f \u101b\u103e\u102c\u1019\u1010\u103d\u1031\u1037\u1015\u102b\u104b \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b!";
              break;

             case 5:
              msg = "\u1021\u1001\u1014\u103a\u1038\u1011\u1032\u101e\u102d\u102f\u1037\u101d\u1004\u103a\u1010\u102d\u102f\u1004\u103a\u1038 10 \u1005\u1000\u1039\u1000\u1014\u1037\u103a\u1001\u103c\u102c\u1038\u1014\u1031\u101b\u1015\u102b\u1019\u100a\u103a\u104b!";
              break;

             case 6:
              msg = "\u1015\u103c\u102f\u1015\u103c\u1004\u103a\u1011\u102d\u1014\u103a\u1038\u101e\u102d\u1019\u103a\u1038\u1019\u103e\u102f\u1005\u1014\u1005\u103a!";
              break;

             case 7:
              msg = "\u1002\u102d\u1019\u103a\u1038\u1021\u1001\u1014\u103a\u1038\u1000\u102d\u102f \u101b\u103e\u102c\u1019\u1010\u103d\u1031\u1037\u1015\u102b\u104b!";
              break;

             case 8:
              msg = "\u1002\u102d\u1019\u103a\u1038\u1021\u1001\u1014\u103a\u1038 \u1005\u1000\u102c\u1038\u101d\u103e\u1000\u103a \u1019\u1019\u103e\u1014\u103a\u1015\u102b\u104b!";
              break;

             case 9:
              msg = "\u1000\u1005\u102c\u1038\u1001\u1014\u103a\u1038\u1000 \u101c\u1030\u1010\u103d\u1031\u1015\u103c\u100a\u1037\u103a\u1014\u1031\u1010\u101a\u103a\u104b!";
              break;

             case 10:
              msg = "\u1021\u1001\u1014\u103a\u1038\u1015\u102d\u102f\u1004\u103a\u101b\u103e\u1004\u103a\u1000 \u1005\u102c\u1038\u1015\u103d\u1032\u1000\u102d\u102f \u101d\u1004\u103a\u1001\u103d\u1004\u1037\u103a\u1019\u1015\u1031\u1038\u1018\u1030\u1038\u104b!";
            }
            App_1.default.instance.alertDialog.showMsg(msg);
            break;

           case BaiCao_Cmd_1.default.Code.GET_LIST_ROOM:
            var res = new BaiCao_Cmd_1.default.ReceivedGetListRoom(data);
            for (var i = 0; i < res.list.length; i++) {
              var itemData = res.list[i];
              var item = cc.instantiate(_this.prefabItemRoom);
              item.getComponent("BaiCao.ItemRoom").initItem(itemData);
              _this.contentListRooms.addChild(item);
            }
            _this.scrollListRoom.scrollToTop(.2);
            break;

           case BaiCao_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
            App_1.default.instance.showLoading(false);
            break;

           case BaiCao_Cmd_1.default.Code.MO_BAI:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedMoBai(data);
            var chairMoBai = res["chairMoBai"];
            var cards = res["cards"];
            var seatId_1 = _this.findPlayerSeatByPos(chairMoBai);
            if (-1 != seatId_1 && 0 != seatId_1) {
              _this.getPlayerHouse(seatId_1).prepareToTransform();
              for (var a = 0; a < 3; a++) {
                var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(cards[a]);
                _this.getPlayerHouse(seatId_1).transformToCardReal(a, _this.spriteCards[spriteCardId]);
              }
              _this.getPlayerHouse(seatId_1).showCardName(_this.getCardsScore(cards) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
            }
            break;

           case BaiCao_Cmd_1.default.Code.BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedFirstTurnDecision(data);
            _this.resetHubChips();
            _this.closePopupMatchResult();
            break;

           case BaiCao_Cmd_1.default.Code.KET_THUC:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedEndGame(data);
            _this.unschedule(_this.intervalEnd);
            _this.notifyTimeEnd.active = false;
            var cardList = res["cardList"];
            var tienThangChuong = res["tienThangChuong"];
            var tienThangGa = res["tienThangGa"];
            var keCuaMoneyList = res["keCuaMoneyList"];
            var danhBienMoneyList = res["danhBienMoneyList"];
            var tongTienCuoiVan = res["tongTienCuoiVan"];
            var tongTienCuocList = res["tongTienCuocList"];
            var tongDanhBienList = res["tongDanhBienList"];
            var tongKeCuaList = res["tongKeCuaList"];
            var tongCuocGaList = res["tongCuocGaList"];
            var tongCuoiVanList = res["tongCuoiVanList"];
            var currentMoneyList = res["currentMoneyList"];
            var timeEndGame = res["timeEndGame"];
            var posPlaying = [];
            for (var index = 0; index < 8; index++) cardList[index].length > 0 && posPlaying.push(index);
            var result_1 = [];
            for (var index = 0; index < 8; index++) {
              var findId = posPlaying.indexOf(configPlayer[index].playerPos);
              if (-1 !== findId) {
                var cards = cardList[posPlaying[findId]];
                var cardReady = _this.getPlayerHouse(index).node.children[2].children[0];
                for (var a = 0; a < 3; a++) if (1 == cardReady.children[a].scale) {
                  var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(cards[a]);
                  _this.getPlayerHouse(index).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                }
                _this.getPlayerHouse(index).showCardName(_this.getCardsScore(cards) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
                result_1.push({
                  userName: configPlayer[index].playerId,
                  bet: tongTienCuocList[posPlaying[findId]],
                  bien: tongDanhBienList[posPlaying[findId]],
                  ke: tongKeCuaList[posPlaying[findId]],
                  ga: tongCuocGaList[posPlaying[findId]],
                  total: tongCuoiVanList[posPlaying[findId]]
                });
                var info = {
                  moneyChange: tongCuoiVanList[posPlaying[findId]],
                  money: currentMoneyList[posPlaying[findId]],
                  ga: tongCuocGaList[posPlaying[findId]]
                };
                if (0 == index) {
                  Configs_1.default.Login.Coin = info.money;
                  BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                }
                info.moneyChange >= 0 ? _this.getPlayerHouse(index).fxWin(info) : _this.getPlayerHouse(index).fxLose(info);
              }
            }
            result_1.length > 0 && setTimeout(function() {
              _this.showPopupMatchResult(result_1);
            }, 4e3);
            break;

           case BaiCao_Cmd_1.default.Code.YEU_CAU_DANH_BIEN:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedYeuCauDanhBien(data);
            var danhBienChair = res["danhBienChair"];
            var level = res["level"];
            var isExist = _this.arrPosDanhBien.indexOf(danhBienChair);
            if (isExist > -1) ; else {
              var value = _this.currentRoomBet * level;
              var seatId_2 = _this.findPlayerSeatByPos(danhBienChair);
              -1 != seatId_2 && _this.getPlayerHouse(seatId_2).showPopupRequestDanhBien(value);
            }
            break;

           case BaiCao_Cmd_1.default.Code.CHIA_BAI:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedChiaBai(data);
            _this.btnBet.active = false;
            _this.btnOpenCard.active = false;
            for (var index = 1; index < 8; index++) {
              _this.getPlayerHouse(index).showPopupBet(false);
              _this.getPlayerHouse(index).closePopupRequestDanhBien();
            }
            _this.matchPot.getComponent(cc.Button).interactable = false;
            _this.matchPot.children[0].color = cc.Color.GRAY;
            var cards = res["cards"];
            var timeChiaBai_1 = res["timeChiaBai"];
            clearTimeout(_this.timeoutEndGame);
            _this.timeoutEndGame = setTimeout(function() {
              _this.startEndCountDown(timeChiaBai_1);
            }, 2e3);
            _this.currentCard = cards;
            var arrSeatExist = _this.getNumPlayers();
            var numPlayer_1 = arrSeatExist.length;
            for (var index = 0; index < 24; index++) {
              _this.cardsDeal.children[index].active = !(index >= 3 * numPlayer_1);
              _this.cardsDeal.children[index].position = cc.v2(0, 0);
            }
            var timeShip = .1;
            for (var a = 0; a < 3; a++) for (var b = 0; b < numPlayer_1; b++) {
              var seatId_3 = arrSeatExist[b];
              if (-1 !== seatId_3) {
                var card4Me = _this.cardsDeal.children[a * numPlayer_1 + b];
                var rawPlayerPos = _this.groupPlayers.children[seatId_3].position;
                card4Me.runAction(cc.sequence(cc.delayTime((a * numPlayer_1 + b) * timeShip), cc.moveTo(.2, rawPlayerPos)));
              }
            }
            var delayOver2Under = .2;
            var maxDelay = (2 * numPlayer_1 + (numPlayer_1 - 1)) * timeShip;
            var timeUnderLayer = 1e3 * (maxDelay + .2 + delayOver2Under);
            clearTimeout(_this.timeoutChiaBaiDone);
            _this.timeoutChiaBaiDone = setTimeout(function() {
              for (var index = 0; index < 24; index++) _this.cardsDeal.children[index].active = false;
              for (var index = 0; index < numPlayer_1; index++) {
                var seatId_4 = arrSeatExist[index];
                if (-1 !== seatId_4) {
                  0 == seatId_4 && _this.getPlayerHouse(seatId_4).resetCardReady();
                  _this.getPlayerHouse(seatId_4).showCardReady(true);
                  _this.getPlayerHouse(seatId_4).showCardReal(false);
                }
              }
            }, timeUnderLayer);
            break;

           case BaiCao_Cmd_1.default.Code.KE_CUA:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedKeCua(data);
            var chairKeCuaFrom = res["chairKeCuaFrom"];
            var chairKeCuaTo = res["chairKeCuaTo"];
            var level = res["level"];
            break;

           case BaiCao_Cmd_1.default.Code.TU_DONG_BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedAutoStart(data);
            if (res.isAutoStart) {
              _this.resetHubChips();
              _this.startWaittingCountDown(res.timeAutoStart);
              _this.btnBet.active = false;
              _this.btnOpenCard.active = false;
              _this.matchPot.active = false;
              _this.matchPot.getComponent(cc.Button).interactable = true;
              _this.matchPot.children[0].color = cc.Color.WHITE;
              _this.resetPlayersPlaying();
              _this.arrPosDanhBien = [];
            }
            _this.closePopupMatchResult();
            break;

           case BaiCao_Cmd_1.default.Code.DONG_Y_DANH_BIEN:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedChapNhanDanhBien(data);
            var danhBienChair = res["danhBienChair"];
            var level = res["level"];
            _this.arrPosDanhBien.push(danhBienChair);
            var seatId_5 = _this.findPlayerSeatByPos(danhBienChair);
            if (-1 != seatId_5) {
              _this.getPlayerHouse(seatId_5).disableDanhBien(level);
              _this.getPlayerHouse(seatId_5).playFxDanhBien();
            }
            break;

           case BaiCao_Cmd_1.default.Code.DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedDatCuoc(data);
            var chairDatCuoc = res["chairDatCuoc"];
            var level = res["level"];
            var seatId_6 = _this.findPlayerSeatByPos(chairDatCuoc);
            if (-1 != seatId_6) {
              _this.getPlayerHouse(seatId_6).setBet(_this.arrBetValue[level - 1]);
              _this.getPlayerHouse(seatId_6).addChips();
            }
            break;

           case BaiCao_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedGameInfo(data);
            _this.closeUIRoom();
            _this.showUIPlaying();
            _this.closePopupMatchResult();
            _this.closeUIChat();
            var myChair = res["myChair"];
            var chuongChair = res["chuongChair"];
            var cards = res["cards"];
            var cuocDanhBienList = res["cuocDanhBienList"];
            var cuocKeCuaList = res["cuocKeCuaList"];
            var gameServerState = res["gameServerState"];
            var isAutoStart = res["isAutoStart"];
            var gameAction = res["gameAction"];
            var countDownTime = res["countDownTime"];
            var moneyType = res["moneyType"];
            var moneyBet = res["moneyBet"];
            var gameId = res["gameId"];
            var roomId = res["roomId"];
            var hasInfo = res["hasInfo"];
            var players = res["players"];
            _this.labelRoomId.string = "3\u1001\u103b\u1015\u103a \u101b\u103e\u1019\u103a\u1038 - \u1021\u1001\u1014\u103a\u1038: " + roomId;
            _this.labelRoomBet.string = "\u1021\u101c\u1031\u102c\u1004\u103a\u1038\u1021\u1005\u102c\u1038\u1021\u1006\u1004\u1037\u103a: " + Utils_1.default.formatNumber(moneyBet) + "$";
            _this.currentRoomBet = moneyBet;
            _this.gameState = gameAction;
            _this.currentCard = cards;
            configPlayer[0].playerId = Configs_1.default.Login.Nickname;
            configPlayer[0].playerPos = myChair;
            var numPlayers = 0;
            var arrPlayerPosExist = [];
            for (var index = 0; index < hasInfo.length; index++) if (hasInfo[index]) {
              numPlayers += 1;
              arrPlayerPosExist.push(index);
            }
            for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
            for (var index = 0; index < configPlayer.length; index++) {
              var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
              var seatId = configPlayer[index].seatId;
              _this.getPlayerHouse(seatId).resetPlayerInfo();
              if (findPos > -1) {
                _this.getPlayerHouse(seatId).setIsViewer(false);
                _this.setupSeatPlayer(seatId, {
                  nickName: "",
                  avatar: Utils_1.default.randomRange(1, 9),
                  money: ""
                });
              } else {
                _this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
              }
            }
            for (var index = 0; index < 8; index++) _this.getPlayerHouse(index).setOwner(false);
            var seatOwner = _this.findPlayerSeatByPos(chuongChair);
            if (-1 !== seatOwner) {
              _this.getPlayerHouse(seatOwner).setOwner(true);
              _this.seatOwner = seatOwner;
            }
            _this.resetHubChips();
            break;

           case BaiCao_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
            var outChair = res["outChair"];
            var isOutRoom = res["isOutRoom"];
            var seatId_7 = _this.findPlayerSeatByPos(outChair);
            -1 !== seatId_7 && (isOutRoom ? _this.getPlayerHouse(seatId_7).showNotify("\u1011\u103d\u1000\u103a\u1001\u103d\u102c\u1010\u1031\u102c\u1037\u1019\u100a\u103a\u104b !") : _this.getPlayerHouse(seatId_7).showNotify("\u1021\u1006\u102f\u1036\u1038\u1021\u1011\u102d \u1000\u1005\u102c\u1038\u1015\u102b\u104b !"));
            break;

           case BaiCao_Cmd_1.default.Code.VAO_GA:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedVaoGa(data);
            var chair = res["chair"];
            var chicKenBet = res["chicKenBet"];
            var seatId_8 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_8) {
              _this.hubChips.children[2 * seatId_8].active = true;
              _this.hubChips.children[2 * seatId_8 + 1].active = true;
              _this.fxMoveChips(_this.hubChips.children[2 * seatId_8], .1, _this.matchPot.x, _this.matchPot.y);
              _this.fxMoveChips(_this.hubChips.children[2 * seatId_8 + 1], .2, _this.matchPot.x, _this.matchPot.y);
              _this.currentMatchPotValue += chicKenBet;
              _this.labelMatchPot.string = Utils_1.default.formatNumber(_this.currentMatchPotValue);
              _this.getPlayerHouse(seatId_8).playFxVaoGa();
            }
            break;

           case BaiCao_Cmd_1.default.Code.DOI_CHUONG:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedDoiChuong(data);
            for (var index = 0; index < 8; index++) _this.getPlayerHouse(index).setOwner(false);
            var seatId_9 = _this.findPlayerSeatByPos(res["chuongChair"]);
            if (-1 != seatId_9) {
              _this.getPlayerHouse(seatId_9).setOwner(true);
              _this.seatOwner = seatId_9;
            }
            break;

           case BaiCao_Cmd_1.default.Code.MOI_DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedMoiDatCuoc(data);
            _this.startBettingCountDown(res.timeDatCuoc);
            _this.arrBetValue = [];
            _this.matchPot.active = true;
            _this.currentMatchPotValue = 0;
            _this.labelMatchPot.string = "0";
            for (var index = 0; index < 4; index++) {
              _this.arrBetValue.push(_this.currentRoomBet * (index + 1));
              var raw = _this.currentRoomBet * (4 - index);
              _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = 1500 == raw ? "1.5K" : Utils_1.default.formatNumberMin(raw);
            }
            if (0 == _this.seatOwner) {
              _this.btnOpenCard.active = false;
              _this.btnBet.active = false;
              _this.matchPot.getComponent(cc.Button).interactable = false;
              _this.matchPot.children[0].color = cc.Color.GRAY;
            } else {
              _this.btnBet.active = true;
              _this.btnOpenCard.active = false;
              _this.matchPot.getComponent(cc.Button).interactable = true;
              _this.matchPot.children[0].color = cc.Color.WHITE;
              _this.setupBet();
            }
            _this.numCardOpened = 0;
            break;

           case BaiCao_Cmd_1.default.Code.CHEAT_CARDS:
           case BaiCao_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
           case BaiCao_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
            App_1.default.instance.showLoading(false);
            break;

           case BaiCao_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedJoinRoomSucceed(data);
            _this.closeUIRoom();
            _this.setupMatch(res);
            break;

           case BaiCao_Cmd_1.default.Code.LEAVE_GAME:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedUserLeaveRoom(data);
            var chair = res["chair"];
            var seatId_10 = _this.findPlayerSeatByPos(chair);
            if (-1 !== seatId_10) {
              for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].seatId == seatId_10) {
                configPlayer[index].playerId = -1;
                configPlayer[index].isViewer = true;
              }
              _this.getPlayerHouse(seatId_10).resetPlayerInfo();
              _this.getPlayerHouse(seatId_10).showBtnInvite(true);
              var arrSeatExistLast = _this.getNumPlayers();
              if (1 == arrSeatExistLast.length) {
                _this.resetPlayersPlaying();
                _this.matchPot.active = false;
              }
              if (0 == seatId_10) {
                _this.UI_Playing.active = false;
                _this.UI_ChooseRoom.active = true;
                _this.refeshListRoom();
              }
            }
            break;

           case BaiCao_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedKickOff(data);
            break;

           case BaiCao_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedUserJoinRoom(data);
            var info = res["info"];
            var uChair = res["uChair"];
            var uStatus = res["uStatus"];
            for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].playerPos == uChair) {
              var seatId = configPlayer[index].seatId;
              _this.getPlayerHouse(seatId).resetPlayerInfo();
              var customPlayerInfo = {
                avatar: info["avatar"],
                nickName: info["nickName"],
                money: info["money"]
              };
              _this.setupSeatPlayer(seatId, customPlayerInfo);
              if (uStatus == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                _this.getPlayerHouse(seatId).setIsViewer(true);
                configPlayer[seatId].isViewer = true;
              } else {
                configPlayer[seatId].isViewer = false;
                _this.getPlayerHouse(seatId).setIsViewer(false);
              }
            }
            break;

           case BaiCao_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
            break;

           case BaiCao_Cmd_1.default.Code.UPDATE_MATCH:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedUpdateMatch(data);
            var myChair = res["myChair"];
            var hasInfo = res["hasInfo"];
            var infos = res["infos"];
            for (var index = 0; index < hasInfo.length; index++) {
              var pos = configPlayer[index]["playerPos"];
              if (hasInfo[pos]) {
                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                if (infos[pos]["status"] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                  configPlayer[index]["isViewer"] = false;
                  _this.getPlayerHouse(index).setIsViewer(false);
                } else {
                  configPlayer[index]["isViewer"] = true;
                  _this.getPlayerHouse(index).setIsViewer(true);
                }
                _this.setupSeatPlayer(index, infos[pos]);
              } else {
                configPlayer[index]["playerId"] = -1;
                configPlayer[index]["isViewer"] = true;
              }
            }
            break;

           case BaiCao_Cmd_1.default.Code.CHAT_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new BaiCao_Cmd_1.default.ReceivedChatRoom(data);
            var chair = res["chair"];
            var isIcon = res["isIcon"];
            var content = res["content"];
            if (isIcon) {
              var seatId_11 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_11 && _this.getPlayerHouse(seatId_11).showChatEmotion(content);
            } else {
              var seatId_12 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_12 && _this.getPlayerHouse(seatId_12).showChatMsg(content);
            }
          }
        }, this);
      };
      BaiCaoController.prototype.actionLeaveRoom = function() {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendRequestLeaveGame());
      };
      BaiCaoController.prototype.actionOpenCard = function() {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendMoBai());
        this.btnOpenCard.active = false;
      };
      BaiCaoController.prototype.actionSendVaoGa = function() {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendVaoGa());
        this.matchPot.children[0].color = cc.Color.WHITE;
        this.matchPot.getComponent(cc.Button).interactable = false;
      };
      BaiCaoController.prototype.actionAcceptDanhBien = function(event, seatId) {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendAcceptDanhBien(configPlayer[seatId].playerPos));
        this.getPlayerHouse(seatId).closePopupRequestDanhBien(false);
      };
      BaiCaoController.prototype.increaseBetValue = function() {
        this.currentBetSelectedIndex == this.arrBetValue.length - 1 || (this.currentBetSelectedIndex += 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaiCaoController.prototype.decreaseBetValue = function() {
        0 == this.currentBetSelectedIndex || (this.currentBetSelectedIndex -= 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaiCaoController.prototype.actionBet = function() {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendDatCuoc(this.currentBetSelectedIndex + 1));
        this.btnBet.active = false;
        for (var index = 0; index < configPlayer.length; index++) if (index !== this.seatOwner && !configPlayer[index].isViewer && -1 !== configPlayer[index].playerId) {
          this.getPlayerHouse(index).setBet(this.currentRoomBet);
          this.getPlayerHouse(index).addChips();
          if (0 != index) {
            this.getPlayerHouse(index).showPopupBet(true);
            this.getPlayerHouse(index).setupBetValue(this.currentRoomBet);
          }
        }
      };
      BaiCaoController.prototype.actionDanhBien = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2));
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableDanhBien(level);
          this.getPlayerHouse(seatId).showNotify("\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u1005\u102c\u1038\u1000\u103c\u1000\u103a");
          BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendDanhBien(pos, level));
        }
      };
      BaiCaoController.prototype.actionKeCua = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2)) - 2;
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableKeCua(level);
          BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendKeCua(pos, level));
        }
      };
      BaiCaoController.prototype.initConfigPlayer = function() {
        configPlayer = [];
        for (var index = 0; index < 8; index++) configPlayer.push({
          seatId: index,
          playerId: -1,
          playerPos: -1,
          isViewer: true
        });
      };
      BaiCaoController.prototype.resetPlayersPlaying = function() {
        for (var index = 0; index < 8; index++) this.getPlayerHouse(index).resetMatchHistory();
      };
      BaiCaoController.prototype.setupSeatPlayer = function(seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.money);
      };
      BaiCaoController.prototype.findPlayerSeatByUid = function(uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerId === uid && (seat = configPlayer[index].seatId);
        return seat;
      };
      BaiCaoController.prototype.findPlayerPosBySeat = function(seat) {
        return configPlayer[seat].playerPos;
      };
      BaiCaoController.prototype.findPlayerSeatByPos = function(pos) {
        if (-1 == pos) return -1;
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerPos === pos && (seat = configPlayer[index].seatId);
        return seat;
      };
      BaiCaoController.prototype.getPlayerHouse = function(seatId) {
        return this.groupPlayers.children[seatId].getComponent("BaiCao.Player");
      };
      BaiCaoController.prototype.getNumPlayers = function() {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) -1 === configPlayer[index].playerId || configPlayer[index].isViewer || playerPosEntry.push(configPlayer[index].seatId);
        return playerPosEntry;
      };
      BaiCaoController.prototype.update = function(dt) {};
      var BaiCaoController_1;
      BaiCaoController.instance = null;
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "UI_ChooseRoom", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelNickName", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelCoin", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "contentListRooms", void 0);
      __decorate([ property(cc.Prefab) ], BaiCaoController.prototype, "prefabItemRoom", void 0);
      __decorate([ property(cc.ScrollView) ], BaiCaoController.prototype, "scrollListRoom", void 0);
      __decorate([ property(cc.EditBox) ], BaiCaoController.prototype, "edtFindRoom", void 0);
      __decorate([ property(cc.Toggle) ], BaiCaoController.prototype, "btnHideRoomFull", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "meCards", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "groupPlayers", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaiCaoController.prototype, "spriteCards", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaiCaoController.prototype, "spriteCardBack", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "matchPot", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelMatchPot", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "cardsDeal", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "btnBet", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "btnOpenCard", void 0);
      __decorate([ property(cc.Button) ], BaiCaoController.prototype, "btnLeaveRoom", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "hubChips", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelRoomId", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelRoomBet", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "actionBetting", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "betChooseValue", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "betChooseValueTarget", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "popupMatchResult", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "contentMatchResult", void 0);
      __decorate([ property(cc.Prefab) ], BaiCaoController.prototype, "prefabItemResult", void 0);
      __decorate([ property(cc.ScrollView) ], BaiCaoController.prototype, "scrollMatchResult", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "notifyTimeStart", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "notifyTimeEnd", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "notifyTimeBet", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.EditBox) ], BaiCaoController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "popupNodity", void 0);
      __decorate([ property(cc.Label) ], BaiCaoController.prototype, "labelNotifyContent", void 0);
      __decorate([ property(cc.Node) ], BaiCaoController.prototype, "popupGuide", void 0);
      BaiCaoController = BaiCaoController_1 = __decorate([ ccclass ], BaiCaoController);
      return BaiCaoController;
    }(cc.Component);
    exports.default = BaiCaoController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./BaiCao.CardUtil": "BaiCao.CardUtil",
    "./BaiCao.Cmd": "BaiCao.Cmd",
    "./BaiCao.NetworkClient": "BaiCao.NetworkClient"
  } ],
  "BaiCao.ItemResult": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfa281xRbFIXYvZlv9D71E0", "BaiCao.ItemResult");
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
    var BaiCaoItemResult = function(_super) {
      __extends(BaiCaoItemResult, _super);
      function BaiCaoItemResult() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelUserName = null;
        _this.labelBet = null;
        _this.labelBien = null;
        _this.labelKe = null;
        _this.labelGa = null;
        _this.labelTotal = null;
        return _this;
      }
      BaiCaoItemResult.prototype.start = function() {};
      BaiCaoItemResult.prototype.initItem = function(info) {
        this.labelUserName.string = info.userName;
        this.labelBet.string = Utils_1.default.formatNumber(info.bet);
        this.labelBien.string = Utils_1.default.formatNumber(info.bien);
        this.labelKe.string = Utils_1.default.formatNumber(info.ke);
        this.labelGa.string = Utils_1.default.formatNumber(info.ga);
        this.labelTotal.string = Utils_1.default.formatNumber(info.total);
        this.labelBet.node.color = info.bet > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelBien.node.color = info.bien > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelKe.node.color = info.ke > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelGa.node.color = info.ga > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelTotal.node.color = info.total > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
      };
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelUserName", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelBien", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelKe", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelGa", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemResult.prototype, "labelTotal", void 0);
      BaiCaoItemResult = __decorate([ ccclass ], BaiCaoItemResult);
      return BaiCaoItemResult;
    }(cc.Component);
    exports.default = BaiCaoItemResult;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "BaiCao.ItemRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35822yBG6dOfY3wYyq4yJS6", "BaiCao.ItemRoom");
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
    var BaiCao_Controller_1 = require("./BaiCao.Controller");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaiCaoItemRoom = function(_super) {
      __extends(BaiCaoItemRoom, _super);
      function BaiCaoItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
      }
      BaiCaoItemRoom.prototype.start = function() {};
      BaiCaoItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      BaiCaoItemRoom.prototype.chooseRoom = function() {
        BaiCao_Controller_1.default.instance.joinRoom(this.roomInfo);
      };
      __decorate([ property(cc.Label) ], BaiCaoItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], BaiCaoItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], BaiCaoItemRoom.prototype, "progressNumPlayers", void 0);
      BaiCaoItemRoom = __decorate([ ccclass ], BaiCaoItemRoom);
      return BaiCaoItemRoom;
    }(cc.Component);
    exports.default = BaiCaoItemRoom;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./BaiCao.Controller": "BaiCao.Controller"
  } ],
  "BaiCao.NetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49497VFSR9CKbNn0Zli/4Jo", "BaiCao.NetworkClient");
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
    var BaiCaoNetworkClient = function(_super) {
      __extends(BaiCaoNetworkClient, _super);
      function BaiCaoNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      BaiCaoNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new BaiCaoNetworkClient());
        return this.instance;
      };
      BaiCaoNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_BAICAO.host, Configs_1.default.App.HOST_BAICAO.port);
      };
      BaiCaoNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
      };
      BaiCaoNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      BaiCaoNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      BaiCaoNetworkClient.prototype.send = function(packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return BaiCaoNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = BaiCaoNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
  } ],
  "BaiCao.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62496vjvC9JXqua2Il+i42X", "BaiCao.Player");
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
        _this.avatar = null;
        _this.cardReady = null;
        _this.cardReal = null;
        _this.userName = null;
        _this.userGold = null;
        _this.owner = null;
        _this.cardsName = null;
        _this.actionVaoGa = null;
        _this.actionDanhBien = null;
        _this.actionViewer = null;
        _this.actionThinking = null;
        _this.actionWin = null;
        _this.goldWin = null;
        _this.actionLose = null;
        _this.goldLose = null;
        _this.hub = null;
        _this.goldBet = null;
        _this.prefabItemChip = null;
        _this.notify = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.shadowAvatar = null;
        _this.shadowInfo = null;
        _this.spriteCardBack = null;
        _this.popupBet = null;
        _this.popupRequestDanhBien = null;
        _this.labelValueDanhBien = null;
        _this.posCardOpened = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        return _this;
      }
      Player.prototype.start = function() {};
      Player.prototype.updatePosCardOpened = function(data) {
        this.posCardOpened = data;
      };
      Player.prototype.showChatEmotion = function(content) {
        var _this = this;
        this.node.children[7].active = true;
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
        this.node.children[7].active = true;
        this.chatEmotion.active = false;
        this.chatMsg.active = true;
        clearTimeout(this.timeoutChat);
        this.chatMsg.children[1].getComponent(cc.Label).string = content;
        this.timeoutChat = setTimeout(function() {
          _this.chatEmotion.active = false;
          _this.chatMsg.active = false;
        }, 3e3);
      };
      Player.prototype.showPopupBet = function(state) {
        this.popupBet.active = state;
        if (state) {
          this.popupBet.children[2].active = true;
          this.popupBet.children[3].active = true;
          this.popupBet.children[5].active = true;
          this.popupBet.children[6].active = true;
          this.setCanDanhBien(true);
          this.setCanKeCua(true);
        }
      };
      Player.prototype.setupBetValue = function(bet) {
        this.popupBet.children[2].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet);
        this.popupBet.children[3].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(2 * bet);
        this.popupBet.children[5].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet);
        this.popupBet.children[6].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(2 * bet);
      };
      Player.prototype.disableDanhBien = function(id) {
        1 == id ? this.popupBet.children[3].active = false : this.popupBet.children[2].active = false;
        this.setCanDanhBien(false);
      };
      Player.prototype.disableKeCua = function(id) {
        1 == id ? this.popupBet.children[6].active = false : this.popupBet.children[5].active = false;
        this.setCanKeCua(false);
      };
      Player.prototype.setCanDanhBien = function(state) {
        this.popupBet.children[2].getComponent(cc.Button).interactable = state;
        this.popupBet.children[3].getComponent(cc.Button).interactable = state;
      };
      Player.prototype.setCanKeCua = function(state) {
        this.popupBet.children[5].getComponent(cc.Button).interactable = state;
        this.popupBet.children[6].getComponent(cc.Button).interactable = state;
      };
      Player.prototype.showBtnInvite = function(state) {
        this.btnInvite.active = state;
      };
      Player.prototype.setOwner = function(state) {
        this.owner.active = state;
      };
      Player.prototype.setAvatar = function(avatar) {
        this.node.children[1].active = true;
        this.avatar.getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(avatar);
      };
      Player.prototype.setIsViewer = function(state) {
        this.shadowAvatar.active = state;
        this.shadowInfo.active = state;
      };
      Player.prototype.setName = function(data) {
        this.node.children[3].active = true;
        this.userName.string = data;
      };
      Player.prototype.showCardReady = function(state) {
        this.node.children[2].active = true;
        this.cardReady.active = state;
      };
      Player.prototype.showCardReal = function(state) {
        this.node.children[2].active = true;
        this.cardReal.active = state;
      };
      Player.prototype.prepareToTransform = function() {
        this.prepareCardReal(0);
        this.prepareCardReal(1);
        this.prepareCardReal(2);
      };
      Player.prototype.prepareCardReal = function(pos) {
        this.cardReal.children[pos].runAction(cc.scaleTo(0, 0, 1));
      };
      Player.prototype.transformToCardReal = function(cardPos, spriteCard) {
        this.showCardReal(true);
        this.cardReal.children[cardPos].children[0].getComponent(cc.Sprite).spriteFrame = spriteCard;
        this.cardReady.children[cardPos].runAction(cc.sequence(cc.scaleTo(.15, 0, 1), cc.callFunc(function() {})));
        this.cardReal.children[cardPos].runAction(cc.sequence(cc.delayTime(.15), cc.scaleTo(.15, 1, 1), cc.callFunc(function() {})));
      };
      Player.prototype.showCardName = function(name) {
        var _this = this;
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
        clearTimeout(this.timeoutShowCardName);
        this.timeoutShowCardName = setTimeout(function() {
          _this.cardsName.active = false;
        }, 4500);
      };
      Player.prototype.setGold = function(data) {
        this.actionThinking.active = false;
        this.showGold(true);
        this.userGold.string = this.formatGold(data);
      };
      Player.prototype.setBet = function(data) {
        this.showPlayerBet(true);
        this.goldBet.string = this.formatGold(data);
      };
      Player.prototype.addChips = function() {
        var item1 = cc.instantiate(this.prefabItemChip);
        var item2 = cc.instantiate(this.prefabItemChip);
        this.hub.addChild(item1);
        this.hub.addChild(item2);
      };
      Player.prototype.showPlayerBet = function(state) {
        this.node.children[5].active = state;
        state || this.hub.removeAllChildren(true);
      };
      Player.prototype.setCardReal01 = function(data) {
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = data;
      };
      Player.prototype.setCardReal02 = function(data) {
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = data;
      };
      Player.prototype.showPlayCountdown = function() {
        this.node.children[4].active = true;
        this.actionThinking.active = true;
        this.processThinking(0);
      };
      Player.prototype.hidePlayCountdown = function() {
        this.actionThinking.active = false;
      };
      Player.prototype.processThinking = function(rate) {
        this.actionThinking.getComponent(cc.Sprite).fillRange = rate;
      };
      Player.prototype.showGold = function(state) {
        this.node.children[3].children[2].active = state;
      };
      Player.prototype.showPopupRequestDanhBien = function(value) {
        this.popupRequestDanhBien.active = true;
        this.labelValueDanhBien.string = this.formatGold(value);
      };
      Player.prototype.closePopupRequestDanhBien = function() {
        this.popupRequestDanhBien.active = false;
      };
      Player.prototype.prepareFxAction = function() {
        this.node.children[4].active = true;
        this.resetAction();
      };
      Player.prototype.playFxDanhBien = function() {
        this.node.children[4].active = true;
        this.actionDanhBien.active = true;
        this.actionDanhBien.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.05, 1, 1)));
      };
      Player.prototype.playFxVaoGa = function() {
        this.node.children[4].active = true;
        this.actionVaoGa.active = true;
        this.actionVaoGa.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.05, 1, 1)));
      };
      Player.prototype.playFxViewer = function() {
        this.prepareFxAction();
        this.actionViewer.active = true;
      };
      Player.prototype.fxOtherPlayerFold = function() {
        this.cardReady.runAction(cc.moveBy(.5, 0, -100));
      };
      Player.prototype.fxMeFold = function() {
        this.shadowCardReal(true);
        this.cardReal.runAction(cc.moveBy(.5, 0, -20));
      };
      Player.prototype.showEatGa = function(state) {
        this.actionWin.children[3].active = state;
      };
      Player.prototype.fxWin = function(playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        this.setGold(this.formatGold(playerInfo.money));
        this.showEatGa(playerInfo.ga > 0);
        setTimeout(function() {
          _this.actionWin.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.fxLose = function(playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionLose.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        this.setGold(this.formatGold(playerInfo.money));
        setTimeout(function() {
          _this.actionLose.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.shadowCardReady = function(state) {
        this.cardReady.children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReady.children[1].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReady.children[2].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.shadowCardReal = function(state) {
        this.cardReal.children[0].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[1].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[2].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.setCardWin = function(pos, state) {
        this.cardReal.children[pos].children[0].color = state ? cc.Color.WHITE : cc.Color.GRAY;
      };
      Player.prototype.showNotify = function(content) {
        var _this = this;
        this.notify.active = true;
        this.notify.children[1].getComponent(cc.Label).string = content;
        clearTimeout(this.timeoutNotify);
        this.timeoutNotify = setTimeout(function() {
          _this.notify.active = false;
        }, 1500);
      };
      Player.prototype.resetAction = function() {
        for (var index = 0; index < this.node.children[4].childrenCount; index++) this.node.children[4].children[index].active = false;
      };
      Player.prototype.resetMatchHistory = function() {
        this.resetCardReady();
        this.resetCardReal();
        this.node.children[2].active = false;
        this.showGold(true);
        this.cardsName.active = false;
        this.resetAction();
        this.node.children[5].active = false;
        this.goldBet.string = "0";
        this.hub.removeAllChildren(true);
      };
      Player.prototype.resetCardReady = function() {
        this.cardReady.children[0].scale = 1;
        this.cardReady.children[1].scale = 1;
        this.cardReady.children[2].scale = 1;
        this.cardReady.active = false;
      };
      Player.prototype.resetCardReal = function() {
        this.cardReal.active = false;
        this.cardReal.y = 0;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.shadowCardReal(false);
      };
      Player.prototype.resetPlayerInfo = function() {
        for (var index = 0; index < this.node.childrenCount; index++) this.node.children[index].active = false;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReady.active = false;
        this.cardReal.active = false;
        this.cardsName.active = false;
        this.actionVaoGa.active = false;
        this.actionDanhBien.active = false;
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.actionWin.active = false;
        this.actionLose.active = false;
        this.goldBet.string = "0";
        this.hub.removeAllChildren(true);
        this.setIsViewer(true);
      };
      Player.prototype.fxGoldChange = function(goldStart, goldEnd, node) {
        var _this = this;
        var goldAdd = goldEnd - goldStart;
        node.getComponent(cc.Label).string = this.formatGold(goldStart);
        var steps = 10;
        var deltaGoldAdd = Math.floor(goldAdd / steps);
        var rep = cc.repeat(cc.sequence(cc.delayTime(.05), cc.callFunc(function() {
          goldStart += deltaGoldAdd;
          node.getComponent(cc.Label).string = (goldAdd > 0 ? "+" : "") + _this.formatGold(goldStart);
        })), steps);
        var seq = cc.sequence(rep, cc.callFunc(function() {
          goldStart = goldEnd;
          node.getComponent(cc.Label).string = (goldAdd > 0 ? "+" : "") + _this.formatGold(goldStart);
        }));
        node.runAction(seq);
      };
      Player.prototype.formatGold = function(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
      __decorate([ property(cc.Node) ], Player.prototype, "btnInvite", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "avatar", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "cardReady", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "cardReal", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "userName", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "userGold", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "owner", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "cardsName", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionVaoGa", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionDanhBien", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionViewer", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionThinking", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionWin", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "goldWin", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionLose", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "goldLose", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "hub", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "goldBet", void 0);
      __decorate([ property(cc.Prefab) ], Player.prototype, "prefabItemChip", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "notify", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatEmotion", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatMsg", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "shadowAvatar", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "shadowInfo", void 0);
      __decorate([ property(cc.SpriteFrame) ], Player.prototype, "spriteCardBack", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "popupBet", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "popupRequestDanhBien", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "labelValueDanhBien", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "BaiCao.Res": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b81bbcPQNAC4ICKZf7JrVh", "BaiCao.Res");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Res = function() {
      function Res() {
        var _this = this;
        this.cards = [];
        this.cardItem = null;
        cc.loader.loadResDir("sprites/LaBai", cc.SpriteFrame, function(err, sprs, urls) {
          _this.cards = sprs;
        });
        cc.loader.loadRes("prefabs/card/card", cc.Prefab, function(err, prefab) {
          _this.cardItem = prefab;
        });
      }
      Res.getInstance = function() {
        null == this.instance && (this.instance = new Res());
        return this.instance;
      };
      Res.prototype.getCardFace = function(index) {
        index < 10 && (index = "0" + index);
        return this.cards.filter(function(card) {
          return card.name == "labai_" + index;
        })[0];
      };
      Res.prototype.getCardItem = function() {
        return this.cardItem;
      };
      return Res;
    }();
    exports.default = Res;
    cc._RF.pop();
  }, {} ]
}, {}, [ "BaiCao.Card", "BaiCao.CardUtil", "BaiCao.Cmd", "BaiCao.Controller", "BaiCao.ItemResult", "BaiCao.ItemRoom", "BaiCao.NetworkClient", "BaiCao.Player", "BaiCao.Res" ]);