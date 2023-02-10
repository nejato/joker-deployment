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
  "BaCay.CardUtil": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a9298AFAtMALw5rLYRifA2", "BaCay.CardUtil");
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
          return Math.floor(a / 4) + 1;
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
  "BaCay.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "620d7luvxtKga1ndG6kqqBK", "BaCay.Cmd");
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
        Code.TOPSERVER = 1001;
        Code.CMD_PINGPONG = 1050;
        Code.CMD_JOIN_ROOM = 3001;
        Code.CMD_RECONNECT_ROOM = 3002;
        Code.MONEY_BET_CONFIG = 3003;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.CHAT_ROOM = 3008;
        Code.CREATE_ROOM = 3013;
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
        Code.LOGOUT = 2;
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
      var SendCreateRoom = function(_super) {
        __extends(SendCreateRoom, _super);
        function SendCreateRoom(a, b, c, d, e, f, g, h) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CREATE_ROOM);
          _this.packHeader();
          _this.putInt(a);
          _this.putInt(b);
          _this.putLong(c);
          _this.putInt(d);
          _this.putInt(e);
          _this.putString(f);
          _this.putString(g);
          _this.putLong(h);
          _this.updateSize();
          return _this;
        }
        return SendCreateRoom;
      }(Network_OutPacket_1.default);
      cmd.SendCreateRoom = SendCreateRoom;
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
      var ReceivedTopServer = function(_super) {
        __extends(ReceivedTopServer, _super);
        function ReceivedTopServer(data) {
          var _this = _super.call(this, data) || this;
          _this.rankType = _this.getByte();
          _this.topDay_money = _this.getString();
          _this.topWeek_money = _this.getString();
          _this.topMonth_money = _this.getString();
          _this.topDay_number = _this.getString();
          _this.topWeek_number = _this.getString();
          _this.topMonth_number = _this.getString();
          return _this;
        }
        return ReceivedTopServer;
      }(Network_InPacket_1.default);
      cmd.ReceivedTopServer = ReceivedTopServer;
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
  "BaCay.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8c0clk/LdHK5HHnJP3Kgny", "BaCay.Controller");
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
    exports.NodeShowCard = void 0;
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var BaCay_CardUtil_1 = require("./BaCay.CardUtil");
    var BaCay_Cmd_1 = require("./BaCay.Cmd");
    var BaCay_NetworkClient_1 = require("./BaCay.NetworkClient");
    var BaCay_Room_1 = require("./BaCay.Room");
    var TW = cc.tween;
    var audio_clip;
    (function(audio_clip) {
      audio_clip[audio_clip["BG"] = 0] = "BG";
      audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
      audio_clip[audio_clip["WIN"] = 2] = "WIN";
      audio_clip[audio_clip["CHIA_BAI"] = 3] = "CHIA_BAI";
      audio_clip[audio_clip["CHIP"] = 4] = "CHIP";
      audio_clip[audio_clip["CLOCK"] = 5] = "CLOCK";
      audio_clip[audio_clip["START_BET"] = 6] = "START_BET";
    })(audio_clip || (audio_clip = {}));
    var configPlayer = [];
    var defaultPlayerPos = [ [ 0, 1, 2, 3, 4, 5, 6, 7 ], [ 1, 2, 3, 4, 5, 6, 7, 0 ], [ 2, 3, 4, 5, 6, 7, 0, 1 ], [ 3, 4, 5, 6, 7, 0, 1, 2 ], [ 4, 5, 6, 7, 0, 1, 2, 3 ], [ 5, 6, 7, 0, 1, 2, 3, 4 ], [ 6, 7, 0, 1, 2, 3, 4, 5 ], [ 7, 0, 1, 2, 3, 4, 5, 6 ] ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NodeShowCard = function() {
      function NodeShowCard() {
        this.cardHide1 = null;
        this.cardHide2 = null;
        this.cardShow = null;
        this.userHand = null;
        this.userFinger = null;
        this.nodeThis = null;
        this.animHand = null;
      }
      NodeShowCard.prototype.setInfo = function() {
        var _this = this;
        this.nodeThis.on(cc.Node.EventType.TOUCH_MOVE, function(touch) {
          _this.animHand.node.active = false;
          var delta = touch.getDelta();
          if (delta.x > 0 && _this.cardShow.angle > -30) {
            _this.cardShow.angle < -12 && (_this.cardHide2.angle -= delta.x / 40);
            _this.cardShow.angle -= delta.x / 20;
            _this.userFinger.angle -= delta.x / 20;
          }
        });
        this.nodeThis.on(cc.Node.EventType.TOUCH_END, function(touch) {
          if (_this.cardShow.angle < -20) {
            _this.hide();
            BaCayController.instance.showCardReal();
          }
        });
      };
      NodeShowCard.prototype.show = function(currentCard) {
        var _this = this;
        this.animHand.node.active = false;
        this.nodeThis.getChildByName("animHand").active = true;
        this.cardHide2.angle = -2;
        this.cardShow.angle = -5;
        this.userFinger.angle = 0;
        this.cardShow.getComponent("TienLen.Card").setCardData(currentCard[0]);
        this.cardHide2.getComponent("TienLen.Card").setCardData(currentCard[1]);
        this.cardHide1.getComponent("TienLen.Card").setCardData(currentCard[2]);
        cc.Tween.stopAllByTarget(this.userHand);
        TW(this.userHand).set({
          angle: 90
        }).to(.5, {
          angle: 0
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.setInfo();
        }).start();
      };
      NodeShowCard.prototype.hide = function() {
        var _this = this;
        TW(this.userHand).to(.5, {
          angle: 90
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.nodeThis.active = false;
        }).start();
      };
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardHide1", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardHide2", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardShow", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "userHand", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "userFinger", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "nodeThis", void 0);
      __decorate([ property(sp.Skeleton) ], NodeShowCard.prototype, "animHand", void 0);
      NodeShowCard = __decorate([ ccclass("BaCay.Controller.NodeShowCard") ], NodeShowCard);
      return NodeShowCard;
    }();
    exports.NodeShowCard = NodeShowCard;
    var BaCayController = function(_super) {
      __extends(BaCayController, _super);
      function BaCayController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isInitedUIRoom = false;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.bgChat = null;
        _this.contentChatNhanh = null;
        _this.boxSetting = null;
        _this.UI_Playing = null;
        _this.meCards = null;
        _this.groupPlayers = null;
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
        _this.popupGuide = null;
        _this.soundManager = null;
        _this.nodeShowCard = null;
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
        _this.listDataRoom = [];
        _this.listFullRoom = [];
        _this.arrBetPos = [ -157.5, -52.5, 52.5, 157.5 ];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutEndGame = null;
        _this.timeoutChiaBaiDone = null;
        _this.arrPosDanhBien = [];
        _this.timeInBg = 0;
        return _this;
      }
      BaCayController_1 = BaCayController;
      BaCayController.prototype.onLoad = function() {
        BaCayController_1.instance = this;
        this.soundManager = BaCay_Room_1.default.instance.soundManager;
        this.seatOwner = -1;
        this.initConfigPlayer();
      };
      BaCayController.prototype.showSetting = function() {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
      };
      BaCayController.prototype.hideSetting = function() {
        this.nodeSetting.active = false;
      };
      BaCayController.prototype.onBtnToggleMusic = function() {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      BaCayController.prototype.onBtnToggleSound = function() {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      BaCayController.prototype.onBtnSetting = function() {
        this.boxSetting.active = !this.boxSetting.active;
      };
      BaCayController.prototype.onBtnClickBgChat = function() {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
      };
      BaCayController.prototype.onBtnClickBoxChat = function() {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
      };
      BaCayController.prototype.start = function() {
        this.setupTimeRunInBg();
        this.bgChat.active = false;
        var self = this;
        var _loop_1 = function() {
          var node = this_1.contentChatNhanh.children[i];
          node.on("click", function() {
            self.chatNhanhMsg(node.children[0].getComponent(cc.Label).string);
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) _loop_1();
        this.setupListener();
        this.unschedule(this.intervalBetting);
        this.soundManager.stopAudioEffect();
      };
      BaCayController.prototype.setupTimeRunInBg = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function() {
          _this.timeInBg = cc.sys.now();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          var timeNow = cc.sys.now();
          var timeHide = _this.timeInBg;
          cc.director.getActionManager().update((timeNow - timeHide) / 1e3);
          cc.Tween.stopAllByTag(1);
          if ((timeNow - timeHide) / 1e3 > 15) {
            _this.node.active = false;
            BaCay_Room_1.default.instance.node.active = true;
            _this.refeshListRoom();
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_out_game"));
          }
        });
      };
      BaCayController.prototype.genCardDeal = function() {
        if (1 == this.cardsDeal.childrenCount) for (var i = 1; i < 24; i++) this.cardsDeal.addChild(cc.instantiate(this.cardsDeal.children[0]));
      };
      BaCayController.prototype.joinRoom = function(info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
          App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
          return;
        }
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      BaCayController.prototype.refeshListRoom = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendGetListRoom());
      };
      BaCayController.prototype.toggleUIChat = function() {
        false == this.UI_Chat.active ? this.showUIChat() : this.closeUIChat();
      };
      BaCayController.prototype.showUIChat = function() {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(.3, {
          x: cc.winSize.width / 2 - this.UI_Chat.width / 2
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      BaCayController.prototype.closeUIChat = function() {
        var _this = this;
        this.onBtnClickBgChat();
        cc.tween(this.UI_Chat).to(.3, {
          x: cc.winSize.width / 2 + this.UI_Chat.width / 2
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.UI_Chat.active = false;
        }).start();
      };
      BaCayController.prototype.chatEmotion = function(event, id) {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      BaCayController.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      BaCayController.prototype.chatNhanhMsg = function(msg) {
        if (msg.trim().length > 0) {
          BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(0, msg));
          this.closeUIChat();
        }
      };
      BaCayController.prototype.showPopupGuide = function() {
        this.popupGuide.active = true;
      };
      BaCayController.prototype.closePopupGuide = function() {
        this.popupGuide.active = false;
      };
      BaCayController.prototype.closeUIPlaying = function() {
        this.actionLeaveRoom();
      };
      BaCayController.prototype.setupMatch = function(data) {
        this.closePopupMatchResult();
        this.closeUIChat();
        for (var index = 1; index < 8; index++) {
          var player = this.getPlayerHouse(index);
          player.showPopupBet(false);
          player.closePopupRequestDanhBien();
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
        this.labelRoomId.string = roomId + "";
        this.labelRoomBet.string = Utils_1.default.formatNumber(moneyBet);
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
          var player = this.getPlayerHouse(seatId);
          player.resetPlayerInfo();
          if (findPos > -1) {
            if (arrPlayerStatus[findPos] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              configPlayer[index].isViewer = false;
              player.setIsViewer(false);
            } else {
              configPlayer[index].isViewer = true;
              player.setIsViewer(true);
              player.playFxViewer();
            }
            this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
          } else {
            player.showBtnInvite(true);
            configPlayer[index].isViewer = true;
          }
        }
        for (var index = 0; index < 8; index++) {
          var player = this.getPlayerHouse(index);
          player.setOwner(false);
        }
        var seatOwner = this.findPlayerSeatByPos(chuongChair);
        var playerOwner = this.getPlayerHouse(seatOwner);
        if (-1 !== seatOwner) {
          playerOwner.setOwner(true);
          this.seatOwner = seatOwner;
        }
        countDownTime > 0 && (1 == this.gameState ? this.startBettingCountDown(countDownTime) : this.getNumPlayers().length < 0 && this.startEndCountDown(countDownTime));
      };
      BaCayController.prototype.startWaittingCountDown = function(timeWait) {
        var _this = this;
        this.timeAutoStart = timeWait;
        this.setTimeWaittingCountDown();
        this.notifyTimeStart.active = true;
        this.notifyTimeStart.parent.active = true;
        this.unschedule(this.intervalWaitting);
        this.unschedule(this.intervalEnd);
        this.schedule(this.intervalWaitting = function() {
          _this.timeAutoStart--;
          _this.setTimeWaittingCountDown();
          if (_this.timeAutoStart < 1) {
            _this.unschedule(_this.intervalWaitting);
            _this.notifyTimeStart.active = false;
            _this.notifyTimeStart.parent.active = false;
          }
        }, 1);
      };
      BaCayController.prototype.setTimeWaittingCountDown = function() {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      BaCayController.prototype.startEndCountDown = function(timeWait) {
        var _this = this;
        this.timeEnd = timeWait;
        this.setTimeEndCountDown();
        this.notifyTimeStart.active = true;
        this.notifyTimeStart.parent.active = true;
        this.unschedule(this.intervalEnd);
        this.unschedule(this.intervalWaitting);
        this.schedule(this.intervalEnd = function() {
          _this.timeEnd--;
          _this.setTimeEndCountDown();
          if (_this.timeEnd < 1) {
            _this.unschedule(_this.intervalEnd);
            _this.notifyTimeEnd.active = false;
            _this.notifyTimeEnd.parent.active = false;
          }
        }, 1);
      };
      BaCayController.prototype.setTimeEndCountDown = function() {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = App_1.default.instance.getTextLang("txt_end_after") + " " + this.seconds + "s ";
      };
      BaCayController.prototype.startBettingCountDown = function(turnTime) {
        var _this = this;
        this.timeBet = turnTime;
        this.actionBetting.active = true;
        this.processBetting(1);
        this.unschedule(this.intervalBetting);
        this.soundManager.stopAudioEffect();
        var deltaTime = turnTime / 200;
        var deltaFill = .005;
        var fullRange = 1;
        cc.Tween.stopAllByTarget(this.actionBetting);
        cc.tween(this.actionBetting).repeat(200, cc.tween().delay(deltaTime).call(function() {
          fullRange -= deltaFill;
          _this.timeBet -= deltaTime;
          _this.processBetting(fullRange);
          _this.timeBet < 0 && (_this.actionBetting.active = false);
        })).start();
        this.intervalBetting = this.schedule(function() {
          _this.soundManager.playAudioEffect(audio_clip.CLOCK);
        }, 1, turnTime);
      };
      BaCayController.prototype.stopBettingCountDown = function() {
        cc.Tween.stopAllByTarget(this.actionBetting);
        this.unschedule(this.intervalBetting);
        this.actionBetting.active = false;
      };
      BaCayController.prototype.processBetting = function(rate) {
        this.actionBetting.getChildByName("Step").getComponent(cc.Sprite).fillRange = rate;
      };
      BaCayController.prototype.openMeCard = function(event, itemId) {
        if (false == this.getPlayerHouse(0).isShowCard) {
          this.nodeShowCard.nodeThis.active = true;
          var currenCardId_1 = [];
          this.currentCard.forEach(function(element) {
            currenCardId_1.push(BaCay_CardUtil_1.default.getNormalId(element));
          });
          this.nodeShowCard.show(currenCardId_1);
        }
      };
      BaCayController.prototype.getCardsScore = function(arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) score += BaCay_CardUtil_1.default.getDiemById(arrCards[a]);
        score %= 10;
        0 == score && (score = 10);
        return score;
      };
      BaCayController.prototype.moveChipsToHubNow = function(index) {
        this.hubChips.children[2 * index].setPosition(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[2 * index + 1].setPosition(25, 80);
        this.hubChips.children[2 * index + 1].scale = 0;
      };
      BaCayController.prototype.fxMoveChips = function(chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(.8, toX, toY), cc.scaleTo(.8, 0, 0))));
      };
      BaCayController.prototype.resetHubChips = function() {
        var arrFromX = [ 70, 280, 280, 260, 100, -260, -375, -360 ];
        var arrFromY = [ -195, -150, -55, 70, 90, 85, -30, -155 ];
        for (var index = 0; index < 8; index++) {
          this.hubChips.children[2 * index].setPosition(arrFromX[index], arrFromY[index]);
          this.hubChips.children[2 * index + 1].setPosition(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) this.hubChips.children[index].active = false;
      };
      BaCayController.prototype.setupBet = function() {
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaCayController.prototype.showPopupMatchResult = function(data) {
        this.popupMatchResult.active = true;
        this.contentMatchResult.removeAllChildren(true);
        for (var index = 0; index < data.length; index++) {
          var item = cc.instantiate(this.prefabItemResult);
          item.getComponent("BaCay.ItemResult").initItem(data[index]);
          this.contentMatchResult.addChild(item);
        }
        this.scrollMatchResult.scrollToTop(.2);
      };
      BaCayController.prototype.closePopupMatchResult = function() {
        this.popupMatchResult.active = false;
      };
      BaCayController.prototype.setupListener = function() {
        var _this = this;
        BaCay_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case BaCay_Cmd_1.default.Code.LOGIN:
            App_1.default.instance.showLoading(false);
            _this.refeshListRoom();
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdReconnectRoom());
            break;

           case BaCay_Cmd_1.default.Code.TOPSERVER:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedTopServer(data);
            var rankType = res["rankType"];
            var topDay_money = res["topDay_money"];
            var topWeek_money = res["topWeek_money"];
            var topMonth_money = res["topMonth_money"];
            break;

           case BaCay_Cmd_1.default.Code.CMD_PINGPONG:
           case BaCay_Cmd_1.default.Code.CMD_JOIN_ROOM:
           case BaCay_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case BaCay_Cmd_1.default.Code.MONEY_BET_CONFIG:
            App_1.default.instance.showLoading(false);
            break;

           case BaCay_Cmd_1.default.Code.MO_BAI:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedMoBai(data);
            var chairMoBai = res["chairMoBai"];
            var cards = res["cards"];
            var seatId_1 = _this.findPlayerSeatByPos(chairMoBai);
            var player = _this.getPlayerHouse(seatId_1);
            if (-1 != seatId_1 && 0 != seatId_1 && !player.isShowCard) {
              for (var a = 0; a < 3; a++) {
                var spriteCardId = BaCay_CardUtil_1.default.getNormalId(cards[a]);
                player.transformToCardReal(a, spriteCardId, a);
                player.showCardReal(true);
              }
              player.showCardName(_this.getCardsScore(cards) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
            }
            break;

           case BaCay_Cmd_1.default.Code.BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedFirstTurnDecision(data);
            _this.resetHubChips();
            _this.closePopupMatchResult();
            break;

           case BaCay_Cmd_1.default.Code.KET_THUC:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedEndGame(data);
            _this.unschedule(_this.intervalEnd);
            _this.notifyTimeEnd.active = false;
            _this.notifyTimeEnd.parent.active = false;
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
            var result = [];
            for (var index = 0; index < 8; index++) {
              var findId = posPlaying.indexOf(configPlayer[index].playerPos);
              var player = _this.getPlayerHouse(index);
              if (-1 !== findId) {
                var cards = cardList[posPlaying[findId]];
                var cardReady = player.node.children[2].children[0];
                if (!player.isShowCard) {
                  for (var a = 0; a < 3; a++) if (1 == cardReady.children[a].scale) {
                    var spriteCardId = BaCay_CardUtil_1.default.getNormalId(cards[a]);
                    player.transformToCardReal(a, spriteCardId);
                  }
                  player.showCardName(_this.getCardsScore(cards) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
                }
                result.push({
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
                if (info.moneyChange >= 0) {
                  0 == index && _this.soundManager.playAudioEffect(audio_clip.WIN);
                  player.fxWin(info);
                } else {
                  0 == index && _this.soundManager.playAudioEffect(audio_clip.LOSE);
                  player.fxLose(info);
                }
              }
            }
            result.length > 0 && setTimeout(function() {
              _this.labelMatchPot.string = "0";
            }, 4e3);
            _this.nodeShowCard.hide();
            _this.stopBettingCountDown();
            break;

           case BaCay_Cmd_1.default.Code.YEU_CAU_DANH_BIEN:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedYeuCauDanhBien(data);
            var danhBienChair = res["danhBienChair"];
            var level = res["level"];
            var isExist = _this.arrPosDanhBien.indexOf(danhBienChair);
            if (isExist > -1) ; else {
              var value = _this.currentRoomBet * level;
              var seatId_2 = _this.findPlayerSeatByPos(danhBienChair);
              -1 != seatId_2 && _this.getPlayerHouse(seatId_2).showPopupRequestDanhBien(value);
            }
            break;

           case BaCay_Cmd_1.default.Code.CHIA_BAI:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedChiaBai(data);
            _this.stopBettingCountDown();
            _this.btnBet.active = false;
            _this.btnOpenCard.active = false;
            for (var index = 1; index < 8; index++) {
              var player = _this.getPlayerHouse(index);
              player.showPopupBet(false);
              player.closePopupRequestDanhBien();
              player.isShowCard = false;
            }
            _this.getPlayerHouse(0).isShowCard = false;
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
            _this.genCardDeal();
            for (var index = 0; index < 24; index++) {
              _this.cardsDeal.children[index].active = !(index >= 3 * numPlayer_1);
              _this.cardsDeal.children[index].setPosition(0, 0);
              _this.cardsDeal.children[index].angle = 0;
            }
            var timeShip = .1;
            for (var a = 0; a < 3; a++) for (var b = 0; b < numPlayer_1; b++) {
              var seatId_3 = arrSeatExist[b];
              if (-1 !== seatId_3) {
                var card4Me = _this.cardsDeal.children[a * numPlayer_1 + b];
                card4Me.active = true;
                var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[seatId_3].position.x, _this.groupPlayers.children[seatId_3].position.y);
                cc.tween(card4Me).delay((a * numPlayer_1 + b) * timeShip).parallel(cc.tween().call(function() {
                  _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
                }), cc.tween().to(.2, {
                  position: rawPlayerPos
                }, {
                  easing: cc.easing.sineIn
                }), cc.tween().by(.2, {
                  angle: 360
                }, {
                  easing: cc.easing.sineIn
                })).start();
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
                  _this.getPlayerHouse(seatId_4).showCardReal(true);
                }
              }
            }, timeUnderLayer);
            break;

           case BaCay_Cmd_1.default.Code.KE_CUA:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedKeCua(data);
            var chairKeCuaFrom = res["chairKeCuaFrom"];
            var chairKeCuaTo = res["chairKeCuaTo"];
            var level = res["level"];
            break;

           case BaCay_Cmd_1.default.Code.TU_DONG_BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedAutoStart(data);
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

           case BaCay_Cmd_1.default.Code.DONG_Y_DANH_BIEN:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedChapNhanDanhBien(data);
            var danhBienChair = res["danhBienChair"];
            var level = res["level"];
            _this.arrPosDanhBien.push(danhBienChair);
            var seatId_5 = _this.findPlayerSeatByPos(danhBienChair);
            if (-1 != seatId_5) {
              _this.getPlayerHouse(seatId_5).disableDanhBien(level);
              _this.getPlayerHouse(seatId_5).playFxDanhBien();
            }
            break;

           case BaCay_Cmd_1.default.Code.DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedDatCuoc(data);
            var chairDatCuoc = res["chairDatCuoc"];
            var level = res["level"];
            var seatId_6 = _this.findPlayerSeatByPos(chairDatCuoc);
            var player = _this.getPlayerHouse(seatId_6);
            if (-1 != seatId_6) {
              player.setBet(_this.arrBetValue[level - 1]);
              player.addChips();
            }
            _this.soundManager.playAudioEffect(audio_clip.CHIP);
            break;

           case BaCay_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
            var outChair = res["outChair"];
            var isOutRoom = res["isOutRoom"];
            var seatId_7 = _this.findPlayerSeatByPos(outChair);
            0 == seatId_7 && (isOutRoom ? App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_leave")) : App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_cancel_leave")));
            -1 !== seatId_7 && _this.getPlayerHouse(seatId_7).showLeaveRoom(isOutRoom);
            break;

           case BaCay_Cmd_1.default.Code.VAO_GA:
            _this.soundManager.playAudioEffect(audio_clip.CHIP);
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedVaoGa(data);
            var chair = res["chair"];
            var chicKenBet = res["chicKenBet"];
            var seatId_8 = _this.findPlayerSeatByPos(chair);
            var player = _this.getPlayerHouse(seatId_8);
            if (-1 != seatId_8) {
              _this.hubChips.children[2 * seatId_8].active = true;
              _this.hubChips.children[2 * seatId_8 + 1].active = true;
              _this.fxMoveChips(_this.hubChips.children[2 * seatId_8], .1, _this.matchPot.x, _this.matchPot.y);
              _this.fxMoveChips(_this.hubChips.children[2 * seatId_8 + 1], .2, _this.matchPot.x, _this.matchPot.y);
              _this.currentMatchPotValue += chicKenBet;
              _this.labelMatchPot.string = Utils_1.default.formatNumber(_this.currentMatchPotValue);
              player.playFxVaoGa();
            }
            break;

           case BaCay_Cmd_1.default.Code.DOI_CHUONG:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedDoiChuong(data);
            for (var index = 0; index < 8; index++) _this.getPlayerHouse(index).setOwner(false);
            var seatId_9 = _this.findPlayerSeatByPos(res["chuongChair"]);
            if (-1 != seatId_9) {
              _this.getPlayerHouse(seatId_9).setOwner(true);
              _this.seatOwner = seatId_9;
            }
            break;

           case BaCay_Cmd_1.default.Code.MOI_DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedMoiDatCuoc(data);
            _this.startBettingCountDown(res.timeDatCuoc);
            _this.showSliderBet();
            _this.numCardOpened = 0;
            _this.soundManager.playAudioEffect(audio_clip.START_BET);
            break;

           case BaCay_Cmd_1.default.Code.CHEAT_CARDS:
           case BaCay_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
           case BaCay_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
            App_1.default.instance.showLoading(false);
            break;

           case BaCay_Cmd_1.default.Code.LEAVE_GAME:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedUserLeaveRoom(data);
            var chair = res["chair"];
            var seatId_10 = _this.findPlayerSeatByPos(chair);
            if (-1 !== seatId_10) {
              for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].seatId == seatId_10) {
                configPlayer[index].playerId = -1;
                configPlayer[index].isViewer = true;
              }
              var player = _this.getPlayerHouse(seatId_10);
              player.resetPlayerInfo();
              player.showBtnInvite(true);
              var arrSeatExistLast = _this.getNumPlayers();
              if (1 == arrSeatExistLast.length) {
                _this.resetPlayersPlaying();
                _this.matchPot.active = false;
              }
              if (0 == seatId_10) {
                _this.node.active = false;
                BaCay_Room_1.default.instance.node.active = true;
                _this.refeshListRoom();
              }
            }
            break;

           case BaCay_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedKickOff(data);
            break;

           case BaCay_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedUserJoinRoom(data);
            var info = res["info"];
            var uChair = res["uChair"];
            var uStatus = res["uStatus"];
            for (var index = 0; index < configPlayer.length; index++) {
              var seatId = configPlayer[index].seatId;
              var player = _this.getPlayerHouse(seatId);
              if (configPlayer[index].playerPos == uChair) {
                player.resetPlayerInfo();
                var customPlayerInfo = {
                  avatar: info["avatar"],
                  nickName: info["nickName"],
                  money: info["money"]
                };
                _this.setupSeatPlayer(seatId, customPlayerInfo);
                if (uStatus == BaCay_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                  configPlayer[seatId].isViewer = true;
                  player.setIsViewer(true);
                  player.playFxViewer();
                } else {
                  configPlayer[seatId].isViewer = false;
                  player.setIsViewer(false);
                }
              }
            }
            break;

           case BaCay_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
            break;

           case BaCay_Cmd_1.default.Code.UPDATE_MATCH:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedUpdateMatch(data);
            var myChair = res["myChair"];
            var hasInfo = res["hasInfo"];
            var infos = res["infos"];
            for (var index = 0; index < hasInfo.length; index++) {
              var pos = configPlayer[index]["playerPos"];
              if (hasInfo[pos]) {
                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                if (infos[pos]["status"] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                  configPlayer[index]["isViewer"] = false;
                  _this.getPlayerHouse(index).setIsViewer(false);
                } else {
                  configPlayer[index]["isViewer"] = true;
                  _this.getPlayerHouse(index).setIsViewer(true);
                  _this.getPlayerHouse(index).playFxViewer();
                }
                _this.setupSeatPlayer(index, infos[pos]);
              } else {
                configPlayer[index]["playerId"] = -1;
                configPlayer[index]["isViewer"] = true;
              }
            }
            break;

           case BaCay_Cmd_1.default.Code.CHAT_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedChatRoom(data);
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
      BaCayController.prototype.actReJoinRoom = function(res) {
        this.closePopupMatchResult();
        this.closeUIChat();
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
        this.labelRoomId.string = roomId;
        this.labelRoomBet.string = Utils_1.default.formatNumber(moneyBet);
        this.currentRoomBet = moneyBet;
        this.gameState = gameAction;
        this.currentCard = cards;
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        for (var index = 0; index < hasInfo.length; index++) if (hasInfo[index]) {
          numPlayers += 1;
          arrPlayerPosExist.push(index);
          arrPlayerInfo.push(players[index]);
        }
        for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        for (var index = 0; index < configPlayer.length; index++) {
          var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
          var seatId = configPlayer[index].seatId;
          var player = this.getPlayerHouse(seatId);
          player.resetPlayerInfo();
          var playerInfo = arrPlayerInfo[findPos];
          if (findPos > -1) {
            configPlayer[index].isViewer = false;
            player.setIsViewer(false);
            this.setupSeatPlayer(seatId, playerInfo);
            player.setBet(playerInfo.cuocChuong * moneyBet);
            player.addChips();
            playerInfo.nickName == Configs_1.default.Login.Nickname && 0 == playerInfo.cuocChuong && 1 == this.gameState && this.showSliderBet();
            if (0 != playerInfo.cuocGa) {
              this.currentMatchPotValue += 3 * moneyBet;
              this.labelMatchPot.string = Utils_1.default.formatNumber(this.currentMatchPotValue);
              player.playFxVaoGa();
            }
            1 == this.gameState && player.resetCardReal();
          } else {
            player.showBtnInvite(true);
            configPlayer[index].isViewer = true;
          }
        }
        for (var index = 0; index < 8; index++) this.getPlayerHouse(index).setOwner(false);
        var seatOwner = this.findPlayerSeatByPos(chuongChair);
        if (-1 !== seatOwner) {
          this.getPlayerHouse(seatOwner).setOwner(true);
          this.seatOwner = seatOwner;
        }
        this.resetHubChips();
        this.currentCard.length > 0 && BaCayController_1.instance.showCardReal();
        if (countDownTime > 0) if (1 == this.gameState) {
          this.matchPot.active = true;
          this.startBettingCountDown(countDownTime);
        } else this.startEndCountDown(countDownTime);
      };
      BaCayController.prototype.showSliderBet = function() {
        this.arrBetValue = [];
        this.matchPot.active = true;
        this.currentMatchPotValue = 0;
        this.labelMatchPot.string = "0";
        for (var index = 0; index < 4; index++) {
          this.arrBetValue.push(this.currentRoomBet * (index + 1));
          var raw = this.currentRoomBet * (4 - index);
          this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = 1500 == raw ? "1.5K" : Utils_1.default.formatNumberMin(raw);
        }
        if (!this.getPlayerHouse(0).isViewing) if (0 == this.seatOwner) {
          this.btnOpenCard.active = false;
          this.btnBet.active = false;
          this.matchPot.getComponent(cc.Button).interactable = false;
          this.matchPot.children[0].color = cc.Color.GRAY;
        } else {
          this.btnBet.active = true;
          this.btnOpenCard.active = false;
          this.matchPot.getComponent(cc.Button).interactable = true;
          this.matchPot.children[0].color = cc.Color.WHITE;
          this.setupBet();
        }
      };
      BaCayController.prototype.actionLeaveRoom = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendRequestLeaveGame());
        this.soundManager.effSound.stop();
      };
      BaCayController.prototype.actionOpenCard = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendMoBai());
        this.btnOpenCard.active = false;
      };
      BaCayController.prototype.actionSendVaoGa = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendVaoGa());
        this.matchPot.children[0].color = cc.Color.WHITE;
        this.matchPot.getComponent(cc.Button).interactable = false;
      };
      BaCayController.prototype.actionAcceptDanhBien = function(event, seatId) {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendAcceptDanhBien(configPlayer[seatId].playerPos));
        this.getPlayerHouse(seatId).closePopupRequestDanhBien(false);
      };
      BaCayController.prototype.increaseBetValue = function() {
        this.currentBetSelectedIndex == this.arrBetValue.length - 1 || (this.currentBetSelectedIndex += 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaCayController.prototype.actClickBetValue = function(even, data) {
        data = parseInt(data);
        this.currentBetSelectedIndex = data;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaCayController.prototype.decreaseBetValue = function() {
        0 == this.currentBetSelectedIndex || (this.currentBetSelectedIndex -= 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      BaCayController.prototype.actionBet = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendDatCuoc(this.currentBetSelectedIndex + 1));
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
      BaCayController.prototype.actionDanhBien = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2));
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableDanhBien(level);
          this.getPlayerHouse(seatId).showChatMsg("\u101e\u102e\u1038\u101e\u1014\u1037\u103a\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038");
          BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendDanhBien(pos, level));
        }
      };
      BaCayController.prototype.actionKeCua = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2)) - 2;
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableKeCua(level);
          BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendKeCua(pos, level));
        }
      };
      BaCayController.prototype.initConfigPlayer = function() {
        configPlayer = [];
        for (var index = 0; index < 8; index++) configPlayer.push({
          seatId: index,
          playerId: -1,
          playerPos: -1,
          isViewer: true
        });
      };
      BaCayController.prototype.resetPlayersPlaying = function() {
        for (var index = 0; index < 8; index++) this.getPlayerHouse(index).resetMatchHistory();
      };
      BaCayController.prototype.setupSeatPlayer = function(seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        var player = this.getPlayerHouse(seatId);
        player.setAvatar(playerInfo.avatar);
        player.setName(playerInfo.nickName);
        player.setGold(playerInfo.money);
        this.gameState > 0 && !player.isViewing && player.showCardReal(true);
      };
      BaCayController.prototype.findPlayerSeatByUid = function(uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerId === uid && (seat = configPlayer[index].seatId);
        return seat;
      };
      BaCayController.prototype.findPlayerPosBySeat = function(seat) {
        return configPlayer[seat].playerPos;
      };
      BaCayController.prototype.findPlayerSeatByPos = function(pos) {
        if (-1 == pos) return -1;
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerPos === pos && (seat = configPlayer[index].seatId);
        return seat;
      };
      BaCayController.prototype.getPlayerHouse = function(seatId) {
        return this.groupPlayers.children[seatId].getComponent("BaCay.Player");
      };
      BaCayController.prototype.getNumPlayers = function() {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) -1 === configPlayer[index].playerId || configPlayer[index].isViewer || playerPosEntry.push(configPlayer[index].seatId);
        return playerPosEntry;
      };
      BaCayController.prototype.showCardReal = function() {
        this.getPlayerHouse(0).isShowCard = true;
        var arrCardReal = this.getPlayerHouse(0).cardReal;
        for (var i = 0; i < 3; i++) arrCardReal.children[i].children[0].getComponent("TienLen.Card").setCardData(BaCay_CardUtil_1.default.getNormalId(this.currentCard[i]));
      };
      var BaCayController_1;
      BaCayController.instance = null;
      __decorate([ property(cc.Toggle) ], BaCayController.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], BaCayController.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "nodeSetting", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "bgChat", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "contentChatNhanh", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "boxSetting", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "meCards", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "groupPlayers", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "matchPot", void 0);
      __decorate([ property(cc.Label) ], BaCayController.prototype, "labelMatchPot", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "cardsDeal", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "btnBet", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "btnOpenCard", void 0);
      __decorate([ property(cc.Button) ], BaCayController.prototype, "btnLeaveRoom", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "hubChips", void 0);
      __decorate([ property(cc.Label) ], BaCayController.prototype, "labelRoomId", void 0);
      __decorate([ property(cc.Label) ], BaCayController.prototype, "labelRoomBet", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "actionBetting", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "betChooseValue", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "betChooseValueTarget", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "popupMatchResult", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "contentMatchResult", void 0);
      __decorate([ property(cc.Prefab) ], BaCayController.prototype, "prefabItemResult", void 0);
      __decorate([ property(cc.ScrollView) ], BaCayController.prototype, "scrollMatchResult", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "notifyTimeStart", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "notifyTimeEnd", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "notifyTimeBet", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.EditBox) ], BaCayController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], BaCayController.prototype, "popupGuide", void 0);
      __decorate([ property(NodeShowCard) ], BaCayController.prototype, "nodeShowCard", void 0);
      BaCayController = BaCayController_1 = __decorate([ ccclass ], BaCayController);
      return BaCayController;
    }(cc.Component);
    exports.default = BaCayController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./BaCay.CardUtil": "BaCay.CardUtil",
    "./BaCay.Cmd": "BaCay.Cmd",
    "./BaCay.NetworkClient": "BaCay.NetworkClient",
    "./BaCay.Room": "BaCay.Room"
  } ],
  "BaCay.ItemResult": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8789ktNuxEQY435mcEk8v1", "BaCay.ItemResult");
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
    var BaCayItemResult = function(_super) {
      __extends(BaCayItemResult, _super);
      function BaCayItemResult() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelUserName = null;
        _this.labelBet = null;
        _this.labelBien = null;
        _this.labelKe = null;
        _this.labelGa = null;
        _this.labelTotal = null;
        return _this;
      }
      BaCayItemResult.prototype.start = function() {};
      BaCayItemResult.prototype.initItem = function(info) {
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
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelUserName", void 0);
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelBien", void 0);
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelKe", void 0);
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelGa", void 0);
      __decorate([ property(cc.Label) ], BaCayItemResult.prototype, "labelTotal", void 0);
      BaCayItemResult = __decorate([ ccclass ], BaCayItemResult);
      return BaCayItemResult;
    }(cc.Component);
    exports.default = BaCayItemResult;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "BaCay.ItemRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e07a8lBr39OXr5c0VekIC9q", "BaCay.ItemRoom");
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
    var BaCay_Room_1 = require("./BaCay.Room");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaCayItemRoom = function(_super) {
      __extends(BaCayItemRoom, _super);
      function BaCayItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        _this.requireChip = null;
        return _this;
      }
      BaCayItemRoom.prototype.onLoad = function() {
        this.node.active = false;
      };
      BaCayItemRoom.prototype.start = function() {};
      BaCayItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["id"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.requireChip = info["requiredMoney"];
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      BaCayItemRoom.prototype.chooseRoom = function() {
        Configs_1.default.Login.Coin >= this.requireChip ? BaCay_Room_1.default.instance.joinRoom(this.roomInfo) : this.roomInfo["userCount"] >= this.roomInfo["maxUserPerRoom"] ? App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_err9")) : App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
      };
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], BaCayItemRoom.prototype, "progressNumPlayers", void 0);
      BaCayItemRoom = __decorate([ ccclass ], BaCayItemRoom);
      return BaCayItemRoom;
    }(cc.Component);
    exports.default = BaCayItemRoom;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./BaCay.Room": "BaCay.Room"
  } ],
  "BaCay.ItemRoomz": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d685Zhk2hBh7Sp5YnmFxWr", "BaCay.ItemRoomz");
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
    var BaCay_Controller_1 = require("./BaCay.Controller");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaCayItemRoom = function(_super) {
      __extends(BaCayItemRoom, _super);
      function BaCayItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
      }
      BaCayItemRoom.prototype.start = function() {};
      BaCayItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      BaCayItemRoom.prototype.chooseRoom = function() {
        BaCay_Controller_1.default.instance.joinRoom(this.roomInfo);
      };
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], BaCayItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], BaCayItemRoom.prototype, "progressNumPlayers", void 0);
      BaCayItemRoom = __decorate([ ccclass ], BaCayItemRoom);
      return BaCayItemRoom;
    }(cc.Component);
    exports.default = BaCayItemRoom;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./BaCay.Controller": "BaCay.Controller"
  } ],
  "BaCay.NetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d86bcBhKaBPX7iIPcz+pM23", "BaCay.NetworkClient");
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
    var BaCayNetworkClient = function(_super) {
      __extends(BaCayNetworkClient, _super);
      function BaCayNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      BaCayNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new BaCayNetworkClient());
        return this.instance;
      };
      BaCayNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_BACAY.host, Configs_1.default.App.HOST_BACAY.port);
      };
      BaCayNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
      };
      BaCayNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      BaCayNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      BaCayNetworkClient.prototype.send = function(packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return BaCayNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = BaCayNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
  } ],
  "BaCay.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a69f2nHXcZBJ4K9vYGrZxlY", "BaCay.Player");
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
    var TW = cc.tween;
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
        _this.popupBet = null;
        _this.popupRequestDanhBien = null;
        _this.labelValueDanhBien = null;
        _this.dataAnimWin = null;
        _this.fontNumber = [];
        _this.posCardOpened = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        _this.animWinLose = null;
        _this.isShowCard = false;
        _this.isViewing = false;
        _this.status = 0;
        return _this;
      }
      Player.prototype.start = function() {
        for (var i = 0; i < this.cardReal.childrenCount; i++) {
          var card = this.cardReal.children[i].children[0];
          card["initPos"] = card.getPosition();
        }
      };
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
        this.chatMsg.getComponentInChildren(cc.Label).string = content;
        this.timeoutChat = setTimeout(function() {
          _this.chatEmotion.active = false;
          _this.chatMsg.active = false;
        }, 5e3);
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
        this.isViewing = state;
        this.avatar.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        var bgInfo = cc.find("Info/BG", this.node);
        bgInfo.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        cc.find("Info/UserName", this.node).color = state ? cc.Color.GRAY : cc.Color.WHITE;
        cc.find("Info/userGold", this.node).color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
        this.cardsName.active = false;
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
      Player.prototype.transformToCardReal = function(cardPos, idCard, indexCard) {
        void 0 === indexCard && (indexCard = null);
        var cardReady = this.cardReady.children[cardPos];
        var cardReal = this.cardReal.children[cardPos].children[0].getComponent("TienLen.Card");
        var delay = .1 * indexCard;
        this.effCard(cardReal, delay, idCard);
        this.isShowCard = true;
      };
      Player.prototype.effCard = function(card, delay, idCard) {
        var sk1 = 0;
        var sk2 = 0;
        var index = 1;
        if (index <= 1) {
          sk1 = -15;
          sk2 = 15;
        } else {
          sk1 = 15;
          sk2 = -15;
        }
        var orgPos = card.node["initPos"];
        cc.Tween.stopAllByTarget(card.node);
        TW(card.node).delay(delay).to(.15, {
          scaleX: 0,
          scaleY: 1.05,
          skewX: 0,
          skewY: sk1
        }, {
          easing: cc.easing.cubicOut
        }).call(function() {
          card.setCardData(52);
          card.node.skewY = sk2;
        }).to(.15, {
          scale: 1.05,
          skewX: 0,
          skewY: 0
        }, {
          easing: cc.easing.cubicOut
        }).to(.15, {
          scaleX: 0,
          scaleY: 1.05,
          skewX: 0,
          skewY: sk1
        }, {
          easing: cc.easing.cubicOut
        }).call(function() {
          card.setCardData(idCard);
          card.node.skewY = sk2;
        }).to(.15, {
          scale: 1,
          skewX: 0,
          skewY: 0
        }, {
          easing: cc.easing.cubicOut
        }).call(function() {}).start();
        TW(card.node).delay(delay).to(.3, {
          position: cc.v2(orgPos.x, orgPos.y + 30)
        }, {
          easing: cc.easing.cubicOut
        }).to(.3, {
          position: orgPos
        }, {
          easing: cc.easing.cubicOut
        }).start();
      };
      Player.prototype.showCardName = function(name) {
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
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
        var sprTextGa = this.node.getChildByName("Action").getChildByName("Fx An Ga");
        sprTextGa.active = state;
        TW(sprTextGa).set({
          y: 48
        }).to(1, {
          y: 100
        }, {
          easing: cc.easing.backOut
        }).start();
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
          _this.hideAnimWinLose();
        }, 3e3);
        this.showAnimWinLose(true);
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
          _this.hideAnimWinLose();
        }, 3e3);
        this.showAnimWinLose(false);
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
      Player.prototype.showLeaveRoom = function(status) {
        this.notify.active = status;
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
        this.cardReal.children[0].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[1].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[2].children[0].getComponent("TienLen.Card").setCardData(52);
        this.shadowCardReal(false);
      };
      Player.prototype.resetPlayerInfo = function() {
        for (var index = 0; index < this.node.childrenCount; index++) this.node.children[index].active = false;
        this.cardReal.children[0].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[1].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[2].children[0].getComponent("TienLen.Card").setCardData(52);
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
        node.getComponent(cc.Label).font = goldAdd > 0 ? this.fontNumber[0] : this.fontNumber[1];
        node.getComponent(cc.Label).fontSize = 20;
        node.y = goldAdd > 0 ? 16 : 21;
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
      Player.prototype.showAnimWinLose = function(state) {
        if (null == this.animWinLose) {
          this.animWinLose = new cc.Node("animWinLose").addComponent(sp.Skeleton);
          this.animWinLose.skeletonData = this.dataAnimWin;
          this.animWinLose.node.parent = this.node;
        }
        this.animWinLose.node.active = true;
        var animName = state ? "th\u1eafng3" : "thua";
        this.animWinLose.node.scale = state ? .6 : .7;
        var posAnim = state ? cc.v2(0, -87) : cc.v2(-40, -87);
        this.animWinLose.node.setPosition(posAnim);
        this.animWinLose.setAnimation(0, animName, true);
      };
      Player.prototype.hideAnimWinLose = function() {
        null != this.animWinLose && (this.animWinLose.node.active = false);
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
      __decorate([ property(cc.Node) ], Player.prototype, "popupBet", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "popupRequestDanhBien", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "labelValueDanhBien", void 0);
      __decorate([ property(sp.SkeletonData) ], Player.prototype, "dataAnimWin", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], Player.prototype, "fontNumber", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "BaCay.Room": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bef07HH7BlP/btnMHOsS2YX", "BaCay.Room");
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
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var BaCay_Cmd_1 = require("./BaCay.Cmd");
    var BaCay_NetworkClient_1 = require("./BaCay.NetworkClient");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var Common_AudioManager_1 = require("../../Lobby/LobbyScript/Script/common/Common.AudioManager");
    var audio_clip;
    (function(audio_clip) {
      audio_clip[audio_clip["BG"] = 0] = "BG";
      audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
      audio_clip[audio_clip["WIN"] = 2] = "WIN";
      audio_clip[audio_clip["CHIA_BAI"] = 3] = "CHIA_BAI";
      audio_clip[audio_clip["CHIP"] = 4] = "CHIP";
      audio_clip[audio_clip["CLOCK"] = 5] = "CLOCK";
      audio_clip[audio_clip["START_BET"] = 6] = "START_BET";
    })(audio_clip || (audio_clip = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SoundManager = function() {
      function SoundManager() {
        this.bgMusic = null;
        this.effSound = null;
        this.listAudio = [];
      }
      SoundManager.prototype.playBgMusic = function() {
        Common_AudioManager_1.default.getInstance().playBackgroundMusic(this.listAudio[audio_clip.BG]);
      };
      SoundManager.prototype.playAudioEffect = function(indexAudio) {
        SPUtils_1.default.getSoundVolumn() > 0 && cc.audioEngine.play(this.listAudio[indexAudio], false, 1);
      };
      SoundManager.prototype.stopAudioEffect = function() {
        cc.audioEngine.stopAll();
      };
      SoundManager.prototype.stopBgMusic = function() {
        this.bgMusic.stop();
      };
      __decorate([ property(cc.AudioSource) ], SoundManager.prototype, "bgMusic", void 0);
      __decorate([ property(cc.AudioSource) ], SoundManager.prototype, "effSound", void 0);
      __decorate([ property([ cc.AudioClip ]) ], SoundManager.prototype, "listAudio", void 0);
      SoundManager = __decorate([ ccclass("BaCay.Room.SoundManager") ], SoundManager);
      return SoundManager;
    }();
    exports.SoundManager = SoundManager;
    var BacayRoom = function(_super) {
      __extends(BacayRoom, _super);
      function BacayRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.contentListRooms = null;
        _this.labelNickName = null;
        _this.labelCoin = null;
        _this.scrRoom = null;
        _this.UI_Playing = null;
        _this.uiInGamePr = null;
        _this.btnHideRoomFull = null;
        _this.edtFindRoom = null;
        _this.soundManager = null;
        _this.listDataRoom = [];
        _this.listFullRoom = [];
        _this.isInitedUIRoom = false;
        _this.isSortRoom = false;
        return _this;
      }
      BacayRoom_1 = BacayRoom;
      BacayRoom.prototype.onLoad = function() {
        BacayRoom_1.instance = this;
      };
      BacayRoom.prototype.start = function() {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        BaCay_NetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b...");
          BaCay_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        BaCay_NetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.loadScene("Lobby");
        }, this);
        BaCay_NetworkClient_1.default.getInstance().connect();
        this.soundManager.playBgMusic();
      };
      BacayRoom.prototype.showUIRooms = function() {
        var _this = this;
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
      BacayRoom.prototype.refeshListRoom = function() {
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendGetListRoom());
      };
      BacayRoom.prototype.setupListener = function() {
        var _this = this;
        BaCay_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case BaCay_Cmd_1.default.Code.LOGIN:
            _this.refeshListRoom();
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdReconnectRoom());
            break;

           case BaCay_Cmd_1.default.Code.TOPSERVER:
            var res = new BaCay_Cmd_1.default.ReceivedTopServer(data);
            var rankType = res["rankType"];
            var topDay_money = res["topDay_money"];
            var topWeek_money = res["topWeek_money"];
            var topMonth_money = res["topMonth_money"];
            break;

           case BaCay_Cmd_1.default.Code.CMD_PINGPONG:
            break;

           case BaCay_Cmd_1.default.Code.CMD_JOIN_ROOM:
            Utils_1.default.Log("BaCay CMD_JOIN_ROOM");
            break;

           case BaCay_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case BaCay_Cmd_1.default.Code.MONEY_BET_CONFIG:
            break;

           case BaCay_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            var res = new BaCay_Cmd_1.default.ReceivedJoinRoomFail(data);
            var msg = "\u1021\u1019\u103e\u102c\u1038 " + res.getError() + ", \u1019\u101e\u102d.";
            switch (res.getError()) {
             case 1:
              msg = App_1.default.instance.getTextLang("txt_room_err1");
              break;

             case 3:
              msg = App_1.default.instance.getTextLang("txt_room_err3");
              break;

             case 2:
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
              msg = App_1.default.instance.getTextLang("txt_room_err7");
              break;

             case 8:
              msg = App_1.default.instance.getTextLang("txt_room_err8");
              break;

             case 9:
              msg = App_1.default.instance.getTextLang("txt_room_err9");
              break;

             case 10:
              msg = App_1.default.instance.getTextLang("txt_room_err10");
            }
            App_1.default.instance.alertDialog.showMsg(msg);
            App_1.default.instance.showLoading(false);
            break;

           case BaCay_Cmd_1.default.Code.GET_LIST_ROOM:
            var res = new BaCay_Cmd_1.default.ReceivedGetListRoom(data);
            _this.listDataRoom = res.list;
            _this.listDataRoom.sort(function(x, y) {
              return x.moneyBet - y.moneyBet;
            });
            _this.reloadListRoom(_this.listDataRoom);
            break;

           case BaCay_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
            break;

           case BaCay_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            var res = new BaCay_Cmd_1.default.ReceivedJoinRoomSucceed(data);
            var cb = function(res) {
              _this.UI_Playing.getComponent("BaCay.Controller").setupMatch(res);
            };
            _this.showUIPlaying(res, cb);
            break;

           case BaCay_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
            App_1.default.instance.showLoading(false);
            var res = new BaCay_Cmd_1.default.ReceivedGameInfo(data);
            var cb = function(res) {
              _this.UI_Playing.getComponent("BaCay.Controller").actReJoinRoom(res);
            };
            _this.showUIPlaying(res, cb);
            break;

           case BaCay_Cmd_1.default.Code.LOGOUT:
          }
        }, this);
      };
      BacayRoom.prototype.showUIPlaying = function(res, cb) {
        var _this = this;
        if (null == this.UI_Playing) {
          App_1.default.instance.showLoading(true);
          cc.assetManager.getBundle("BaCay").load("prefabs/UI_Play", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
            App_1.default.instance.showLoading(false);
            _this.UI_Playing = cc.instantiate(prefab);
            _this.UI_Playing.parent = _this.node.parent;
            _this.UI_Playing.active = true;
            _this.node.active = false;
            cb(res);
            _this.closeUIRoom();
          });
        } else {
          App_1.default.instance.showLoading(false);
          this.UI_Playing.active = true;
          this.node.active = false;
          cb(res);
        }
      };
      BacayRoom.prototype.createRoom = function() {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendCreateRoom(1, 8, 500, 0, 8, "", "", 1e4));
      };
      BacayRoom.prototype.hideRoomFull = function() {
        var _this = this;
        this.listFullRoom = [];
        if (this.btnHideRoomFull.isChecked) {
          this.listDataRoom.forEach(function(data) {
            data.roomInfo["userCount"] == data.roomInfo["maxUserPerRoom"] && _this.listFullRoom.push(data);
          });
          this.reloadListRoom(this.listFullRoom);
        } else this.reloadListRoom(this.listDataRoom);
      };
      BacayRoom.prototype.findRoomId = function() {
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
          var idFind_1 = parseInt(text);
          var dataRoom = null;
          dataRoom = this.listDataRoom.find(function(data) {
            return data["id"] == idFind_1;
          });
          this.reloadListRoom([ dataRoom ]);
        } else this.reloadListRoom(this.listDataRoom);
      };
      BacayRoom.prototype.backToLobby = function() {
        BaCay_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      BacayRoom.prototype.reloadListRoom = function(listDataRoom) {
        this.listDataRoom = listDataRoom;
        App_1.default.instance.showLoading(false);
        var cb = function(item, itemData) {
          item.getComponent("BaCay.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, listDataRoom);
      };
      BacayRoom.prototype.onBtnSortRoomId = function() {
        false == this.isSortRoom ? this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return x.id - y.id;
        }) : this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return y.id - x.id;
        });
        this.isSortRoom = !this.isSortRoom;
        var cb = function(item, itemData) {
          item.getComponent("BaCay.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
      };
      BacayRoom.prototype.onBtnSortRoomMoney = function() {
        false == this.isSortMoney ? this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return x.requiredMoney - y.requiredMoney;
        }) : this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return y.requiredMoney - x.requiredMoney;
        });
        this.isSortMoney = !this.isSortMoney;
        var cb = function(item, itemData) {
          item.getComponent("BaCay.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
      };
      BacayRoom.prototype.joinRoom = function(info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
          App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
          return;
        }
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      BacayRoom.prototype.playingNow = function() {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("BaCay.ItemRoom");
          roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin && arrRoomOkMoney.push(index);
        }
        if (arrRoomOkMoney.length > 0) {
          var roomCrowed = arrRoomOkMoney[0];
          for (var index = 0; index < arrRoomOkMoney.length; index++) {
            var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("BaCay.ItemRoom");
            var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("BaCay.ItemRoom");
            roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"] && (roomCrowed = arrRoomOkMoney[index]);
          }
          var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("BaCay.ItemRoom");
          this.joinRoom(roomChoosed.roomInfo);
        } else App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
      };
      BacayRoom.prototype.closeUIRoom = function() {
        this.node.active = false;
      };
      var BacayRoom_1;
      BacayRoom.instance = null;
      __decorate([ property(cc.Node) ], BacayRoom.prototype, "contentListRooms", void 0);
      __decorate([ property(cc.Label) ], BacayRoom.prototype, "labelNickName", void 0);
      __decorate([ property(cc.Label) ], BacayRoom.prototype, "labelCoin", void 0);
      __decorate([ property(cc.ScrollView) ], BacayRoom.prototype, "scrRoom", void 0);
      __decorate([ property(cc.Node) ], BacayRoom.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Prefab) ], BacayRoom.prototype, "uiInGamePr", void 0);
      __decorate([ property(cc.Toggle) ], BacayRoom.prototype, "btnHideRoomFull", void 0);
      __decorate([ property(cc.EditBox) ], BacayRoom.prototype, "edtFindRoom", void 0);
      __decorate([ property(SoundManager) ], BacayRoom.prototype, "soundManager", void 0);
      BacayRoom = BacayRoom_1 = __decorate([ ccclass ], BacayRoom);
      return BacayRoom;
    }(cc.Component);
    exports.default = BacayRoom;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Common.AudioManager": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./BaCay.Cmd": "BaCay.Cmd",
    "./BaCay.NetworkClient": "BaCay.NetworkClient"
  } ]
}, {}, [ "BaCay.CardUtil", "BaCay.Cmd", "BaCay.Controller", "BaCay.ItemResult", "BaCay.ItemRoom", "BaCay.ItemRoomz", "BaCay.NetworkClient", "BaCay.Player", "BaCay.Room" ]);