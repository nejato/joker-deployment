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
  "Poker.CardUtil": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e845jpkItM3qUvol2ZR5Tu", "Poker.CardUtil");
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
          return a;
        };
        return CardUtils;
      }();
      common.CardUtils = CardUtils;
    })(common = exports.common || (exports.common = {}));
    exports.default = common.CardUtils;
    cc._RF.pop();
  }, {} ],
  "Poker.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2f0cU5NKtF15h1g6X6i4BJ", "Poker.Cmd");
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
        Code.GET_LIST_ROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.MOI_DAT_CUOC = 3114;
        Code.UPDATE_OWNER_ROOM = 3117;
        Code.NOTIFY_USER_GET_JACKPOT = 3122;
        Code.PLAYER_STATUS_OUT_GAME = 0;
        Code.PLAYER_STATUS_VIEWER = 1;
        Code.PLAYER_STATUS_SITTING = 2;
        Code.PLAYER_STATUS_PLAYING = 3;
        Code.SELECT_DEALER = 3100;
        Code.TAKE_TURN = 3101;
        Code.BUY_IN = 3102;
        Code.KET_THUC = 3103;
        Code.CHANGE_TURN = 3104;
        Code.NEW_ROUND = 3105;
        Code.DEAL_PRIVATE_CARD = 3106;
        Code.TU_DONG_BAT_DAU = 3107;
        Code.SHOW_CARD = 3108;
        Code.REQUEST_BUY_IN = 3109;
        Code.THONG_TIN_BAN_CHOI = 3110;
        Code.DANG_KY_THOAT_PHONG = 3111;
        Code.REQUEST_STAND_UP = 3113;
        Code.CHEAT_CARDS = 3115;
        Code.DANG_KY_CHOI_TIEP = 3116;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.LEAVE_GAME = 3119;
        Code.NOTIFY_KICK_FROM_ROOM = 3120;
        Code.NEW_USER_JOIN = 3121;
        Code.UPDATE_MATCH = 3123;
        Code.REQUEST_INFO_TOUR = 3990;
        Code.UPDATE_TIME = 3991;
        Code.MAX_PLAYER = 9;
        Code.MAX_BUY_IN = 250;
        Code.GAME_ACTION_NONE = -1;
        Code.GAME_ACTION_FOLD = 0;
        Code.GAME_ACTION_CHECK = 1;
        Code.GAME_ACTION_CALL = 2;
        Code.GAME_ACTION_RAISE = 3;
        Code.GAME_ACTION_ALL_IN = 4;
        Code.EG_SANH_VUA = 0;
        Code.EG_THUNG_PHA_SANH = 1;
        Code.EG_TU_QUY = 2;
        Code.EG_CU_LU = 3;
        Code.EG_THUNG = 4;
        Code.EG_SANH = 5;
        Code.EG_XAM_CO = 6;
        Code.EG_HAI_DOI = 7;
        Code.EG_DOI = 8;
        Code.EG_MAU_THAU = 9;
        Code.EG_SERVER_NGU = 10;
        Code.STATE_CHIA_BAI = 1;
        Code.STATE_JOIN_ROOM = 2;
        Code.STATE_END_GAME = 3;
        Code.STATE_NEW_USER_JOIN_ROOM = 5;
        Code.STATE_USER_LEAVE_ROOM = 6;
        Code.STATE_DEAL_CARD = 7;
        Code.STATE_SELECT_DEALER = 8;
        Code.STATE_CHANGE_TURN = 9;
        Code.STATE_NEW_BET_ROUND = 10;
        Code.STATE_NOTIFY_OUT_ROOM = 11;
        Code.STATE_BUY_IN = 12;
        Code.STATE_UPDATE_MATCH = 13;
        Code.STATE_GAME_INFO = 14;
        Code.STATE_SHOW_CARD = 15;
        Code.STATE_NOTIFY_BUY_IN = 16;
        Code.STATE_STAND_UP = 17;
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
      var CmdSendPing = function(_super) {
        __extends(CmdSendPing, _super);
        function CmdSendPing() {
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
      var SendTakeTurn = function(_super) {
        __extends(SendTakeTurn, _super);
        function SendTakeTurn(a, b, c, d, e) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.TAKE_TURN);
          _this.packHeader();
          _this.putByte(a);
          _this.putByte(b);
          _this.putByte(d);
          _this.putByte(c);
          _this.putByte(!1);
          _this.putLong(e);
          _this.updateSize();
          return _this;
        }
        return SendTakeTurn;
      }(Network_OutPacket_1.default);
      cmd.SendTakeTurn = SendTakeTurn;
      var SendBuyIn = function(_super) {
        __extends(SendBuyIn, _super);
        function SendBuyIn(a, b) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BUY_IN);
          _this.packHeader();
          _this.putLong(a);
          _this.putByte(b);
          _this.updateSize();
          return _this;
        }
        return SendBuyIn;
      }(Network_OutPacket_1.default);
      cmd.SendBuyIn = SendBuyIn;
      var SendShowCard = function(_super) {
        __extends(SendShowCard, _super);
        function SendShowCard() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SHOW_CARD);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendShowCard;
      }(Network_OutPacket_1.default);
      cmd.SendShowCard = SendShowCard;
      var SendGetInfoTour = function(_super) {
        __extends(SendGetInfoTour, _super);
        function SendGetInfoTour(a) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.REQUEST_INFO_TOUR);
          _this.packHeader();
          _this.putByte(a);
          _this.updateSize();
          return _this;
        }
        return SendGetInfoTour;
      }(Network_OutPacket_1.default);
      cmd.SendGetInfoTour = SendGetInfoTour;
      var SendDungDay = function(_super) {
        __extends(SendDungDay, _super);
        function SendDungDay() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.REQUEST_STAND_UP);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendDungDay;
      }(Network_OutPacket_1.default);
      cmd.SendDungDay = SendDungDay;
      var ReceivedLogin = function(_super) {
        __extends(ReceivedLogin, _super);
        function ReceivedLogin(data) {
          var _this = _super.call(this, data) || this;
          cc.log("____");
          return _this;
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
          _this.myChair = _this.getByte();
          _this.moneyBet = _this.getLong();
          _this.roomOwner = _this.getByte();
          _this.roomId = _this.getInt();
          _this.gameId = _this.getInt();
          _this.moneyType = _this.getByte();
          _this.rule = _this.getByte();
          _this.playerSize = _this.getShort();
          _this.playerStatus = [];
          for (var a = 0; a < _this.playerSize; a++) _this.playerStatus.push(_this.getByte());
          _this.playerSize = _this.getShort();
          _this.playerInfos = [];
          for (a = 0; a < _this.playerSize; a++) {
            var b = {};
            b["avatar"] = _this.getString();
            b["nickName"] = _this.getString();
            b["currentMoney"] = _this.getLong();
            _this.playerInfos.push(b);
          }
          _this.gameAction = _this.getByte();
          _this.handCardSizeSize = _this.getShort();
          _this.handCardSizeList = [];
          for (a = 0; a < _this.handCardSizeSize; a++) _this.handCardSizeList.push(_this.getByte());
          _this.currentActionChair = _this.getByte();
          _this.countDownTime = _this.getByte();
          _this.minBuyInTiLe = _this.getInt();
          _this.maxBuyInTiLe = _this.getInt();
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
          _this.chair = _this.getByte();
          _this.hasInfoSize = _this.getShort();
          _this.hasInfoList = [];
          for (var a = 0; a < _this.hasInfoSize; a++) _this.hasInfoList.push(_this.getByte());
          _this.currentMoneyList = [];
          _this.statusList = [];
          for (a = 0; a < Code.MAX_PLAYER; a++) _this.hasInfoList[a] ? (_this.currentMoneyList.push(_this.getLong()), 
          _this.statusList.push(_this.getInt())) : (_this.currentMoneyList.push(0), _this.statusList.push(0));
          return _this;
        }
        return ReceivedUpdateMatch;
      }(Network_InPacket_1.default);
      cmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
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
          _this.potAmount = _this.getLong();
          _this.rankSize = _this.getShort();
          _this.rankList = [];
          for (var a = 0; a < _this.rankSize; a++) _this.rankList.push(_this.getLong());
          _this.kqttSize = _this.getShort();
          _this.kqttList = [];
          for (a = 0; a < _this.kqttSize; a++) _this.kqttList.push(_this.getLong());
          _this.booleanWinerSize = _this.getShort();
          _this.booleanWinerList = [];
          for (a = 0; a < _this.booleanWinerSize; a++) _this.booleanWinerList.push(_this.getByte());
          _this.moneyArraySize = _this.getShort();
          _this.currentMoney = [];
          for (a = 0; a < _this.moneyArraySize; a++) _this.currentMoney.push(_this.getLong());
          _this.gameMoney = [];
          _this.gameMoneySize = _this.getShort();
          for (a = 0; a < _this.gameMoneySize; a++) _this.gameMoney.push(_this.getLong());
          _this.publicCardSize = _this.getShort();
          _this.publicCards = [];
          for (a = 0; a < _this.publicCardSize; a++) _this.publicCards.push(_this.getByte());
          _this.hasInfoSize = _this.getShort();
          _this.hasInfoList = [];
          for (a = 0; a < _this.hasInfoSize; a++) _this.hasInfoList.push(_this.getByte());
          _this.privateCardList = [];
          _this.maxCardList = [];
          _this.cardNameList = [];
          for (a = 0; a < Code.MAX_PLAYER; a++) {
            var b = 0, c = [], d = [];
            if (_this.hasInfoList[a]) {
              for (var b = _this.getShort(), e = 0; e < b; e++) d.push(_this.getByte());
              for (var b = _this.getByte(), f = _this.getShort(), e = 0; e < f; e++) c.push(_this.getByte());
            } else b = 0, c = [];
            _this.maxCardList.push(c);
            _this.privateCardList.push(d);
            _this.cardNameList.push(b);
          }
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
          _this.maxPlayer = _this.getByte();
          _this.chair = _this.getByte();
          _this.myCardSize = _this.getShort();
          _this.myCards = [];
          for (var a = 0; a < _this.myCardSize; a++) _this.myCards.push(_this.getByte());
          _this.publicCardSize = _this.getShort();
          _this.publicCards = [];
          for (a = 0; a < _this.publicCardSize; a++) _this.publicCards.push(_this.getByte());
          _this.dealerChair = _this.getByte();
          _this.smallBlindChair = _this.getByte();
          _this.bigBlindChair = _this.getByte();
          _this.potAmount = _this.getLong();
          _this.maxBet = _this.getLong();
          _this.raiseStep = _this.getLong();
          _this.roundId = _this.getByte();
          _this.gameServerState = _this.getByte();
          _this.gameAction = _this.getByte();
          _this.countDownTime = _this.getByte();
          _this.currentActiveChair = _this.getByte();
          _this.moneyType = _this.getByte();
          _this.bet = _this.getLong();
          _this.gameId = _this.getInt();
          _this.roomId = _this.getInt();
          _this.hasInfoSize = _this.getShort();
          _this.hasInfoList = [];
          for (a = 0; a < _this.hasInfoSize; a++) _this.hasInfoList.push(_this.getByte());
          _this.playerInfoList = [];
          for (a = 0; a < _this.maxPlayer; a++) {
            if (_this.hasInfoList[a]) {
              var b = {};
              b["hasFold"] = _this.getByte();
              b["hasAllIn"] = _this.getByte();
              b["currentBet"] = _this.getLong();
              b["currentMoney"] = _this.getLong();
              b["status"] = _this.getByte();
              b["avatarUrl"] = _this.getString();
              b["nickName"] = _this.getString();
            } else b = {}, b["hasFold"] = 0, b["hasAllIn"] = 0, b["currentBet"] = 0, b["currentMoney"] = 0, 
            b["status"] = 0, b["avatarUrl"] = "", b["nickName"] = "";
            _this.playerInfoList.push(b);
          }
          return _this;
        }
        return ReceivedGameInfo;
      }(Network_InPacket_1.default);
      cmd.ReceivedGameInfo = ReceivedGameInfo;
      var ReceivedTakeTurn = function(_super) {
        __extends(ReceivedTakeTurn, _super);
        function ReceivedTakeTurn(data) {
          var _this = _super.call(this, data) || this;
          _this.actionChair = _this.getByte();
          _this.action = _this.getByte();
          _this.lastRaise = _this.getLong();
          _this.currentBet = _this.getLong();
          _this.maxBet = _this.getLong();
          _this.currentMoney = _this.getLong();
          _this.raiseStep = _this.getLong();
          _this.raiseBlock = _this.getByte();
          return _this;
        }
        return ReceivedTakeTurn;
      }(Network_InPacket_1.default);
      cmd.ReceivedTakeTurn = ReceivedTakeTurn;
      var ReceivedSelectDealer = function(_super) {
        __extends(ReceivedSelectDealer, _super);
        function ReceivedSelectDealer(data) {
          var _this = _super.call(this, data) || this;
          _this.dealerChair = _this.getByte();
          _this.smallBlindChair = _this.getByte();
          _this.bigBlindChair = _this.getByte();
          _this.hasInfoSize = _this.getShort();
          _this.hasInfoList = [];
          cc.log("this.hasInfoSize: " + _this.hasInfoSize);
          for (var a = 0; a < _this.hasInfoSize; a++) {
            var b = _this.getByte();
            _this.hasInfoList.push(b);
            cc.log("i: " + a + " " + b);
          }
          _this.playerStatusList = [];
          for (a = 0; a < Code.MAX_PLAYER; a++) _this.hasInfoList[a] ? (b = _this.getByte(), 
          _this.playerStatusList.push(b), cc.log("i: " + a + " " + b)) : _this.playerStatusList.push(0);
          _this.gameId = _this.getInt();
          _this.isCheat = _this.getByte();
          _this.currentMoneySize = _this.getShort();
          _this.currentMoneyList = [];
          for (a = 0; a < _this.currentMoneySize; a++) _this.currentMoneyList.push(_this.getLong());
          _this.size = _this.getShort();
          _this.listBetBigBlind = [];
          b = "";
          for (a = 0; a < _this.size; a++) _this.listBetBigBlind.push(_this.getByte()), b += " " + _this.listBetBigBlind[a];
          cc.log("Big Blind them: " + b);
          return _this;
        }
        return ReceivedSelectDealer;
      }(Network_InPacket_1.default);
      cmd.ReceivedSelectDealer = ReceivedSelectDealer;
      var ReceivedBuyIn = function(_super) {
        __extends(ReceivedBuyIn, _super);
        function ReceivedBuyIn(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          _this.buyInMoney = _this.getLong();
          return _this;
        }
        return ReceivedBuyIn;
      }(Network_InPacket_1.default);
      cmd.ReceivedBuyIn = ReceivedBuyIn;
      var ReceivedChangeTurn = function(_super) {
        __extends(ReceivedChangeTurn, _super);
        function ReceivedChangeTurn(data) {
          var _this = _super.call(this, data) || this;
          _this.roundId = _this.getByte();
          _this.chair = _this.getByte();
          _this.betTime = _this.getByte();
          return _this;
        }
        return ReceivedChangeTurn;
      }(Network_InPacket_1.default);
      cmd.ReceivedChangeTurn = ReceivedChangeTurn;
      var ReceivedDealCards = function(_super) {
        __extends(ReceivedDealCards, _super);
        function ReceivedDealCards(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          _this.sizeCard = _this.getShort();
          _this.myCards = [];
          for (var a = 0; a < _this.sizeCard; a++) _this.myCards.push(_this.getByte());
          _this.boBaiId = _this.getByte();
          cc.log("Bo bai server tra: " + _this.boBaiId);
          return _this;
        }
        return ReceivedDealCards;
      }(Network_InPacket_1.default);
      cmd.ReceivedDealCards = ReceivedDealCards;
      var ReceivedNewBetRound = function(_super) {
        __extends(ReceivedNewBetRound, _super);
        function ReceivedNewBetRound(data) {
          var _this = _super.call(this, data) || this;
          _this.roundId = _this.getByte();
          _this.sizeCard = _this.getShort();
          cc.log("sizeCard: " + _this.sizeCard);
          _this.plusCards = [];
          for (var a = 0; a < _this.sizeCard; a++) _this.plusCards.push(_this.getByte());
          _this.cardName = _this.getByte();
          _this.potAmount = _this.getLong();
          return _this;
        }
        return ReceivedNewBetRound;
      }(Network_InPacket_1.default);
      cmd.ReceivedNewBetRound = ReceivedNewBetRound;
      var ReceivedShowCard = function(_super) {
        __extends(ReceivedShowCard, _super);
        function ReceivedShowCard(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          return _this;
        }
        return ReceivedShowCard;
      }(Network_InPacket_1.default);
      cmd.ReceivedShowCard = ReceivedShowCard;
      var ReceivedStandUp = function(_super) {
        __extends(ReceivedStandUp, _super);
        function ReceivedStandUp(data) {
          var _this = _super.call(this, data) || this;
          _this.isUp = _this.getByte();
          return _this;
        }
        return ReceivedStandUp;
      }(Network_InPacket_1.default);
      cmd.ReceivedStandUp = ReceivedStandUp;
      var ReceivedUpdateTime = function(_super) {
        __extends(ReceivedUpdateTime, _super);
        function ReceivedUpdateTime(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          return _this;
        }
        return ReceivedUpdateTime;
      }(Network_InPacket_1.default);
      cmd.ReceivedUpdateTime = ReceivedUpdateTime;
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
  "Poker.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1a0egueZlH3apN/Hny5usz", "Poker.Controller");
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
    var Poker_Cmd_1 = require("./Poker.Cmd");
    var Poker_NetworkClient_1 = require("./Poker.NetworkClient");
    var Poker_CardUtil_1 = require("./Poker.CardUtil");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var configPlayer = [];
    var defaultPlayerPos = [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 0 ], [ 2, 3, 4, 5, 6, 7, 8, 0, 1 ], [ 3, 4, 5, 6, 7, 8, 0, 1, 2 ], [ 4, 5, 6, 7, 8, 0, 1, 2, 3 ], [ 5, 6, 7, 8, 0, 1, 2, 3, 4 ], [ 6, 7, 8, 0, 1, 2, 3, 4, 5 ], [ 7, 8, 0, 1, 2, 3, 4, 5, 6 ], [ 8, 0, 1, 2, 3, 4, 5, 6, 7 ] ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PokerController = function(_super) {
      __extends(PokerController, _super);
      function PokerController() {
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
        _this.cardsCenter = null;
        _this.btnBet = null;
        _this.btnOpenCard = null;
        _this.btnLeaveRoom = null;
        _this.hubChips = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.betChooseValue = null;
        _this.betChooseValueTarget = null;
        _this.FxDealer = null;
        _this.btnActions = null;
        _this.popupBuyIn = null;
        _this.labelBuyInMin = null;
        _this.labelBuyInMax = null;
        _this.edtBuyIn = null;
        _this.toggleAutoBuyIn = null;
        _this.FxMeCardName = null;
        _this.spriteCardNames = [];
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
        _this.timeThinking = null;
        _this.intervalWaitting = null;
        _this.intervalEnd = null;
        _this.intervalBetting = null;
        _this.intervalThinking = null;
        _this.currentCard = null;
        _this.currentCenterCard = null;
        _this.numCardOpened = 0;
        _this.arrBetValue = [];
        _this.arrBetPos = [ -170, -85, 0, 85, 170 ];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutChiaBaiDone = null;
        _this.minCashIn = null;
        _this.maxCashIn = null;
        _this.currentMaxBet = 0;
        _this.currentRaiseMin = 0;
        _this.currentRaiseValue = 0;
        _this.currentRaiseStep = 0;
        _this.currentMeBet = 0;
        _this.lastMeBet = 0;
        _this.currentPrivateCardList = [];
        _this.roomMinBuyIn = 0;
        _this.roomMaxBuyIn = 0;
        _this.isFolded = false;
        return _this;
      }
      PokerController_1 = PokerController;
      PokerController.prototype.onLoad = function() {
        PokerController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
      };
      PokerController.prototype.start = function() {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        Poker_NetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b...");
          Poker_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        Poker_NetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.loadScene("Lobby");
        }, this);
        Poker_NetworkClient_1.default.getInstance().connect();
      };
      PokerController.prototype.joinRoom = function(info) {
        App_1.default.instance.showLoading(true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      PokerController.prototype.refeshListRoom = function() {
        this.contentListRooms.removeAllChildren(true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendGetListRoom());
      };
      PokerController.prototype.findRoomId = function() {
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
          var idFind = parseInt(text);
          for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
            roomItem.roomInfo["id"] != idFind && (this.contentListRooms.children[index].active = false);
          }
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      PokerController.prototype.hideRoomFull = function() {
        if (this.btnHideRoomFull.isChecked) for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
          roomItem.roomInfo["userCount"] == roomItem.roomInfo["maxUserPerRoom"] && (this.contentListRooms.children[index].active = false);
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      PokerController.prototype.showUIRooms = function() {
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
      PokerController.prototype.closeUIRoom = function() {
        this.UI_ChooseRoom.active = false;
      };
      PokerController.prototype.createRoom = function() {};
      PokerController.prototype.playingNow = function() {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
          roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin && arrRoomOkMoney.push(index);
        }
        if (arrRoomOkMoney.length > 0) {
          var roomCrowed = arrRoomOkMoney[0];
          for (var index = 0; index < arrRoomOkMoney.length; index++) {
            var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("Poker.ItemRoom");
            var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("Poker.ItemRoom");
            roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"] && (roomCrowed = arrRoomOkMoney[index]);
          }
          var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("Poker.ItemRoom");
          this.joinRoom(roomChoosed.roomInfo);
        } else App_1.default.instance.alertDialog.showMsg("\u1019\u100a\u103a\u101e\u100a\u1037\u103a\u1021\u1001\u1014\u103a\u1038\u1010\u103d\u1004\u103a\u1019\u1006\u102d\u102f\n \u1015\u102b\u101d\u1004\u103a\u101b\u1014\u103a \u1004\u103d\u1031\u1019\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104b !");
      };
      PokerController.prototype.showUIChat = function() {
        this.UI_Chat.active = true;
        this.UI_Chat.x = 1e3;
        this.UI_Chat.stopAllActions();
        this.UI_Chat.runAction(cc.moveTo(.25, 420, 0));
      };
      PokerController.prototype.closeUIChat = function() {
        this.UI_Chat.runAction(cc.moveTo(.25, 1e3, 0));
      };
      PokerController.prototype.chatEmotion = function(event, id) {
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      PokerController.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      PokerController.prototype.showPopupGuide = function() {
        this.popupGuide.active = true;
      };
      PokerController.prototype.closePopupGuide = function() {
        this.popupGuide.active = false;
      };
      PokerController.prototype.backToLobby = function() {
        Poker_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      PokerController.prototype.showUIPlaying = function() {
        this.UI_Playing.active = true;
        this.FxDealer.setAnimation(0, "cho", true);
      };
      PokerController.prototype.closeUIPlaying = function() {
        this.actionLeaveRoom();
      };
      PokerController.prototype.setupMatch = function(data) {
        this.showUIPlaying();
        this.closeUIChat();
        var myChair = data["myChair"];
        var moneyBet = data["moneyBet"];
        var roomOwner = data["roomOwner"];
        var roomId = data["roomId"];
        var gameId = data["gameId"];
        var moneyType = data["moneyType"];
        var rule = data["rule"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var playerInfos = data["playerInfos"];
        var handCardSizeSize = data["handCardSizeSize"];
        var handCardSizeList = data["handCardSizeList"];
        var minBuyInTiLe = data["minBuyInTiLe"];
        var maxBuyInTiLe = data["maxBuyInTiLe"];
        this.gameState = Poker_Cmd_1.default.Code.STATE_JOIN_ROOM;
        this.roomMinBuyIn = minBuyInTiLe;
        this.roomMaxBuyIn = maxBuyInTiLe;
        this.labelRoomId.string = "POKER - \u1021\u1001\u1014\u103a\u1038: " + roomId;
        this.labelRoomBet.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038\u1015\u1019\u102c\u100f: " + Utils_1.default.formatNumber(moneyBet) + "/" + Utils_1.default.formatNumber(2 * moneyBet) + "$";
        this.currentRoomBet = moneyBet;
        this.resetCenterCards();
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        var arrPlayerStatus = [];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) if ("" !== playerInfos[index].nickName) {
          numPlayers += 1;
          arrPlayerPosExist.push(index);
          arrPlayerInfo.push(playerInfos[index]);
          arrPlayerStatus.push(playerStatus[index]);
        }
        this.resetHubChips();
        this.FxMeCardName.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        for (var index = 0; index < configPlayer.length; index++) {
          var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
          var seatId = configPlayer[index].seatId;
          this.getPlayerHouse(seatId).resetPlayerInfo();
          if (findPos > -1) {
            0 == seatId && arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING && this.showPopupBuyIn(minBuyInTiLe, maxBuyInTiLe, moneyBet);
            if (arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              configPlayer[index].isViewer = false;
              this.getPlayerHouse(seatId).setIsViewer(false);
            } else {
              configPlayer[index].isViewer = true;
              this.getPlayerHouse(seatId).setIsViewer(true);
              -1 != configPlayer[seatId].playerId && this.getPlayerHouse(seatId).playFxViewer();
            }
            this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
          } else {
            this.getPlayerHouse(seatId).showBtnInvite(true);
            configPlayer[index].isViewer = true;
          }
        }
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) this.getPlayerHouse(index).setOwner(false);
        var seatOwner = this.findPlayerSeatByPos(roomOwner);
        if (-1 !== seatOwner) {
          this.getPlayerHouse(seatOwner).setOwner(true);
          this.seatOwner = seatOwner;
        }
      };
      PokerController.prototype.startThinkingCountDown = function(seatId, turnTime) {
        var _this = this;
        this.timeThinking = turnTime;
        this.unschedule(this.intervalThinking);
        this.schedule(this.intervalThinking = function() {
          _this.timeThinking--;
          var rate = (_this.timeThinking / turnTime).toFixed(2);
          _this.getPlayerHouse(seatId).processThinking(rate);
          if (_this.timeThinking < 1) {
            _this.unschedule(_this.intervalThinking);
            _this.getPlayerHouse(seatId).hidePlayCountdown();
          }
        }, 1);
      };
      PokerController.prototype.startWaittingCountDown = function(timeWait) {
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
      PokerController.prototype.setTimeWaittingCountDown = function() {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      PokerController.prototype.startEndCountDown = function(timeWait) {
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
      PokerController.prototype.setTimeEndCountDown = function() {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1021\u1006\u102f\u1036\u1038\u101e\u1010\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      PokerController.prototype.startBettingCountDown = function(turnTime) {
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
      PokerController.prototype.processBetting = function(rate) {
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
      };
      PokerController.prototype.openMeCard = function(event, itemId) {
        var _this = this;
        var cardPos = parseInt(itemId);
        this.getPlayerHouse(0).prepareCardReal(cardPos);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(this.currentCard[cardPos]);
        this.getPlayerHouse(0).transformToCardReal(cardPos, this.spriteCards[spriteCardId]);
        this.numCardOpened += 1;
        if (3 == this.numCardOpened) {
          this.btnOpenCard.active = true;
          this.btnBet.active = false;
          this.FxDealer.setAnimation(0, "cho", true);
          var score = 0;
          for (var a = 0; a < 3; a++) score += Poker_CardUtil_1.default.getDiemById(this.currentCard[a]);
          score > 10 ? this.getPlayerHouse(0).showCardName(score % 10 + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038") : this.getPlayerHouse(0).showCardName(score + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
          setTimeout(function() {
            _this.getPlayerHouse(0).resetCardReady();
          }, 200);
        }
      };
      PokerController.prototype.moveChipsToHubNow = function(index) {
        this.hubChips.children[2 * index].position = cc.v2(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[2 * index + 1].position = cc.v2(25, 80);
        this.hubChips.children[2 * index + 1].scale = 0;
      };
      PokerController.prototype.fxMoveChips = function(chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(.8, toX, toY), cc.scaleTo(.8, 0, 0))));
      };
      PokerController.prototype.resetHubChips = function() {
        var arrFromX = [ 70, 280, 280, 260, 100, -260, -375, -360 ];
        var arrFromY = [ -195, -150, -55, 70, 90, 85, -30, -155 ];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
          this.hubChips.children[2 * index].position = cc.v2(arrFromX[index], arrFromY[index]);
          this.hubChips.children[2 * index + 1].position = cc.v2(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) this.hubChips.children[index].active = false;
      };
      PokerController.prototype.setupBet = function() {
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      PokerController.prototype.showBtnRaise = function(state) {
        this.btnActions.children[0].active = state;
      };
      PokerController.prototype.showBtnCheck = function(state) {
        this.btnActions.children[1].active = state;
      };
      PokerController.prototype.showBtnCall = function(state) {
        this.btnActions.children[2].active = state;
      };
      PokerController.prototype.resetBtnActions = function() {
        for (var index = 0; index < 4; index++) this.btnActions.children[index].active = true;
      };
      PokerController.prototype.showPopupBuyIn = function(min, max, bet) {
        this.minCashIn = min;
        this.maxCashIn = max;
        this.popupBuyIn.active = true;
        this.labelBuyInMin.string = Utils_1.default.formatNumber(bet * min);
        Configs_1.default.Login.Coin > bet * max ? this.labelBuyInMax.string = Utils_1.default.formatNumber(bet * max) : this.labelBuyInMax.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        this.edtBuyIn.string = "";
        this.toggleAutoBuyIn.isChecked = true;
      };
      PokerController.prototype.closePopupBuyIn = function() {
        this.popupBuyIn.active = false;
      };
      PokerController.prototype.textChange = function(event) {
        if (event.length > 0) {
          var rawNumber = "";
          for (var index = 0; index < event.length; index++) "0" != event[index] && "1" != event[index] && "2" != event[index] && "3" != event[index] && "4" != event[index] && "5" != event[index] && "6" != event[index] && "7" != event[index] && "8" != event[index] && "9" != event[index] || (rawNumber += event[index]);
          this.edtBuyIn.string = "" !== rawNumber ? Utils_1.default.formatNumber(parseInt(rawNumber)) : "";
        }
      };
      PokerController.prototype.showAllCenterCards = function(centerCards) {
        var _this = this;
        this.currentCenterCard = centerCards;
        for (var index = 0; index < centerCards.length; index++) {
          var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[index]);
          this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        }
        setTimeout(function() {
          _this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(.1, -170, -45), cc.scaleTo(.1, 1, 1)));
          _this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(.1, -17, -45), cc.scaleTo(.1, 1, 1)), cc.delayTime(.1), cc.moveTo(.1, -85, -45)));
          _this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(.1, -170, -45), cc.scaleTo(.1, 1, 1)), cc.delayTime(.1), cc.moveTo(.1, 0, -45)));
          _this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(.1, 85, -45), cc.scaleTo(.1, 1, 1))));
          _this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(.1, 170, -45), cc.scaleTo(.1, 1, 1))));
        }, 400);
      };
      PokerController.prototype.showCenterCards1stRound = function(centerCards) {
        this.currentCenterCard = centerCards;
        for (var index = 0; index < centerCards.length; index++) {
          var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[index]);
          this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        }
        this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(.1, -170, -45), cc.scaleTo(.1, 1, 1)));
        this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(.1, -17, -45), cc.scaleTo(.1, 1, 1)), cc.delayTime(.1), cc.moveTo(.2, -85, -45)));
        this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(.1, -170, -45), cc.scaleTo(.1, 1, 1)), cc.delayTime(.1), cc.moveTo(.2, 0, -45)));
      };
      PokerController.prototype.showCenterCards2ndRound = function(centerCards) {
        this.currentCenterCard.push(centerCards[0]);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[0]);
        this.cardsCenter.children[3].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(.1, 85, -45), cc.scaleTo(.1, 1, 1))));
      };
      PokerController.prototype.showCenterCards3rdRound = function(centerCards) {
        this.currentCenterCard.push(centerCards[0]);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[0]);
        this.cardsCenter.children[4].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(.1, 170, -45), cc.scaleTo(.1, 1, 1))));
      };
      PokerController.prototype.setupListener = function() {
        var _this = this;
        Poker_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Poker_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedJoinRoomSucceed(data);
            _this.closeUIRoom();
            _this.setupMatch(res);
            break;

           case Poker_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedGameInfo(data);
            var chair = res["chair"];
            var myCardSize = res["myCardSize"];
            var myCards = res["myCards"];
            var publicCardSize = res["publicCardSize"];
            var publicCards = res["publicCards"];
            var dealerChair = res["dealerChair"];
            var smallBlindChair = res["smallBlindChair"];
            var bigBlindChair = res["bigBlindChair"];
            var potAmount = res["potAmount"];
            var maxBet = res["maxBet"];
            var raiseStep = res["raiseStep"];
            var roundId = res["roundId"];
            var gameServerState = res["gameServerState"];
            var gameAction = res["gameAction"];
            var countDownTime = res["countDownTime"];
            var currentActiveChair = res["currentActiveChair"];
            var bet = res["bet"];
            var gameId = res["gameId"];
            var roomId = res["roomId"];
            var hasInfoSize = res["hasInfoSize"];
            var hasInfoList = res["hasInfoList"];
            var playerInfoList = res["playerInfoList"];
            _this.closeUIRoom();
            _this.showUIPlaying();
            _this.closeUIChat();
            _this.labelRoomId.string = "POKER - \u1021\u1001\u1014\u103a\u1038: " + roomId;
            _this.labelRoomBet.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038\u1015\u1019\u102c\u100f: " + Utils_1.default.formatNumber(bet) + "/" + Utils_1.default.formatNumber(2 * bet) + "$";
            _this.currentRoomBet = bet;
            _this.currentCard = myCards;
            if (null != potAmount) {
              _this.matchPot.active = true;
              _this.currentMatchPotValue = potAmount;
              _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
            }
            null != maxBet && (_this.currentMaxBet = maxBet);
            null != raiseStep && (_this.currentRaiseStep = raiseStep);
            _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
            _this.currentRaiseMin = _this.currentMaxBet + _this.currentRaiseStep;
            if (publicCardSize > 0) if (3 == publicCardSize) _this.showCenterCards1stRound(publicCards); else if (4 == publicCardSize) {
              var round_1 = [ publicCards[0], publicCards[1], publicCards[2] ];
              var round_2 = publicCards[3];
              _this.showCenterCards1stRound(round_1);
              _this.showCenterCards2ndRound(round_2);
            } else 5 == publicCardSize && _this.showAllCenterCards(publicCards);
            configPlayer[0].playerId = Configs_1.default.Login.Nickname;
            configPlayer[0].playerPos = chair;
            var numPlayers = 0;
            var arrPlayerPosExist = [];
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) if (hasInfoList[index]) {
              numPlayers += 1;
              arrPlayerPosExist.push(index);
            }
            for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[chair][a];
            for (var index = 0; index < configPlayer.length; index++) {
              var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
              var seatId = configPlayer[index].seatId;
              _this.getPlayerHouse(seatId).resetPlayerInfo();
              if (findPos > -1) {
                _this.getPlayerHouse(seatId).setIsViewer(false);
                _this.setupSeatPlayer(seatId, {
                  nickName: playerInfoList[index].nickName,
                  avatar: playerInfoList[index].avatar,
                  currentMoney: playerInfoList[index].currentMoney
                });
                if (0 != seatId) {
                  _this.getPlayerHouse(seatId).showCardReady(true);
                  _this.getPlayerHouse(seatId).showCardReal(false);
                }
                if (playerInfoList[index].currentBet > 0) {
                  _this.getPlayerHouse(seatId).setBet(playerInfoList[index].currentBet);
                  _this.getPlayerHouse(seatId).addChips();
                }
                if (playerInfoList[index].fold) {
                  _this.getPlayerHouse(seatId).showActionState("\u1001\u1031\u102b\u1000\u103a");
                  0 == seatId && (_this.isFolded = true);
                }
                playerInfoList[index].hasAllIn && _this.getPlayerHouse(seatId).showActionState("ALL-IN");
              } else {
                _this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
              }
            }
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
              _this.getPlayerHouse(index).setDealer(false);
              _this.getPlayerHouse(index).setSmallBind(false);
              _this.getPlayerHouse(index).setBigBind(false);
            }
            var dealerSeatId = _this.findPlayerSeatByPos(dealerChair);
            -1 != dealerSeatId && _this.getPlayerHouse(dealerChair).setDealer(true);
            var sbSeatId = _this.findPlayerSeatByPos(smallBlindChair);
            -1 != sbSeatId && _this.getPlayerHouse(sbSeatId).setSmallBind(true);
            var bbSeatId = _this.findPlayerSeatByPos(bigBlindChair);
            -1 != bbSeatId && _this.getPlayerHouse(bbSeatId).setBigBind(true);
            var activeSeatId = _this.findPlayerSeatByPos(currentActiveChair);
            if (-1 != activeSeatId) {
              _this.getPlayerHouse(activeSeatId).showPlayCountdown();
              _this.startThinkingCountDown(activeSeatId, countDownTime);
            }
            if (myCardSize > 0) {
              _this.getPlayerHouse(0).showCardReady(false);
              for (var a = 0; a < 2; a++) {
                var spriteCardId = Poker_CardUtil_1.default.getNormalId(myCards[a]);
                _this.getPlayerHouse(0).prepareToTransform();
                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId]);
              }
            }
            _this.resetHubChips();
            break;

           case Poker_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
            var outChair = res["outChair"];
            var isOutRoom = res["isOutRoom"];
            var seatId_1 = _this.findPlayerSeatByPos(outChair);
            -1 !== seatId_1 && (isOutRoom ? _this.getPlayerHouse(seatId_1).showNotify("\u1011\u103d\u1000\u103a\u1001\u103d\u102c\u1010\u1031\u102c\u1037\u1019\u100a\u103a\u104b !") : _this.getPlayerHouse(seatId_1).showNotify("\u1021\u1006\u102f\u1036\u1038\u1021\u1011\u102d \u1000\u1005\u102c\u1038\u1015\u102b\u104b !"));
            break;

           case Poker_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedUserJoinRoom(data);
            var nickName = res["info"]["nickName"];
            var avatar = res["info"]["avatar"];
            var currentMoney = res["info"]["money"];
            var chair = res["uChair"];
            var status = res["uStatus"];
            for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].playerPos == chair) {
              var seatId = configPlayer[index].seatId;
              _this.getPlayerHouse(seatId).resetPlayerInfo();
              var customPlayerInfo = {
                avatar: avatar,
                nickName: nickName,
                currentMoney: currentMoney
              };
              _this.setupSeatPlayer(seatId, customPlayerInfo);
              if (status == Poker_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                _this.getPlayerHouse(seatId).setIsViewer(true);
                configPlayer[seatId].isViewer = true;
                -1 != configPlayer[seatId].playerId && _this.getPlayerHouse(seatId).playFxViewer();
              } else {
                _this.getPlayerHouse(seatId).setIsViewer(false);
                configPlayer[seatId].isViewer = false;
              }
            }
            break;

           case Poker_Cmd_1.default.Code.LEAVE_GAME:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedUserLeaveRoom(data);
            var chair = res["chair"];
            var seatId_2 = _this.findPlayerSeatByPos(chair);
            if (-1 !== seatId_2) {
              for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].seatId == seatId_2) {
                configPlayer[index].playerId = -1;
                configPlayer[index].isViewer = true;
              }
              _this.getPlayerHouse(seatId_2).resetPlayerInfo();
              _this.getPlayerHouse(seatId_2).showBtnInvite(true);
              var arrSeatExistLast = _this.getNumPlayers();
              if (1 == arrSeatExistLast.length) {
                _this.resetPlayersPlaying();
                _this.resetCenterCards();
                _this.matchPot.active = false;
              }
              if (0 == seatId_2) {
                _this.UI_Playing.active = false;
                _this.UI_ChooseRoom.active = true;
              }
            }
            break;

           case Poker_Cmd_1.default.Code.TAKE_TURN:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedTakeTurn(data);
            var actionChair = res["actionChair"];
            var action = res["action"];
            var lastRaise = res["lastRaise"];
            var currentBet = res["currentBet"];
            var maxBet = res["maxBet"];
            var currentMoney = res["currentMoney"];
            var raiseStep = res["raiseStep"];
            var raiseBlock = res["raiseBlock"];
            _this.currentMaxBet = maxBet;
            _this.currentRaiseStep = raiseStep;
            var seatId_3 = _this.findPlayerSeatByPos(actionChair);
            if (-1 != seatId_3) {
              if (0 == seatId_3) {
                _this.lastMeBet = _this.currentMeBet;
                _this.currentMeBet = currentBet;
              }
              var actionName = "";
              switch (action) {
               case Poker_Cmd_1.default.Code.GAME_ACTION_FOLD:
                actionName = "\u1001\u1031\u102b\u1000\u103a";
                _this.getPlayerHouse(seatId_3).fxMeFold();
                0 == seatId_3 && (_this.isFolded = true);
                break;

               case Poker_Cmd_1.default.Code.GAME_ACTION_CHECK:
                actionName = "\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b";
                break;

               case Poker_Cmd_1.default.Code.GAME_ACTION_CALL:
                actionName = "\u1001\u1031\u102b\u103a\u1006\u102d\u102f\u1015\u102b\u104b";
                _this.getPlayerHouse(seatId_3).addChips();
                break;

               case Poker_Cmd_1.default.Code.GAME_ACTION_RAISE:
                actionName = "\u1019\u103c\u103e\u1004\u1037\u103a";
                _this.getPlayerHouse(seatId_3).setBet(currentBet);
                _this.getPlayerHouse(seatId_3).addChips();
                break;

               case Poker_Cmd_1.default.Code.GAME_ACTION_ALL_IN:
                actionName = "ALL-IN";
                _this.getPlayerHouse(seatId_3).setBet(currentBet);
                _this.getPlayerHouse(seatId_3).addChips();
                _this.getPlayerHouse(seatId_3).addChips();
              }
              _this.getPlayerHouse(seatId_3).setGold(currentMoney);
              _this.getPlayerHouse(seatId_3).showActionState(actionName);
            }
            break;

           case Poker_Cmd_1.default.Code.SELECT_DEALER:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedSelectDealer(data);
            var dealerChair = res["dealerChair"];
            var smallBlindChair = res["smallBlindChair"];
            var bigBlindChair = res["bigBlindChair"];
            var hasInfoSize = res["hasInfoSize"];
            var hasInfoList = res["hasInfoList"];
            var playerStatusList = res["playerStatusList"];
            var gameId = res["gameId"];
            var isCheat = res["isCheat"];
            var currentMoneySize = res["currentMoneySize"];
            var currentMoneyList = res["currentMoneyList"];
            var size = res["size"];
            var listBetBigBlind = res["listBetBigBlind"];
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
              _this.getPlayerHouse(index).setDealer(false);
              _this.getPlayerHouse(index).setSmallBind(false);
              _this.getPlayerHouse(index).setBigBind(false);
            }
            var seatIdDealer = _this.findPlayerSeatByPos(dealerChair);
            -1 != seatIdDealer && _this.getPlayerHouse(seatIdDealer).setDealer(true);
            var seatIdSmallBind = _this.findPlayerSeatByPos(smallBlindChair);
            if (-1 != seatIdSmallBind) {
              0 == seatIdSmallBind && (_this.currentMeBet = _this.currentRoomBet);
              _this.getPlayerHouse(seatIdSmallBind).setSmallBind(true);
              _this.getPlayerHouse(seatIdSmallBind).setBet(_this.currentRoomBet);
              _this.getPlayerHouse(seatIdSmallBind).addChips();
            }
            var seatIdBigBind = _this.findPlayerSeatByPos(bigBlindChair);
            if (-1 != seatIdBigBind) {
              0 == seatIdBigBind && (_this.currentMeBet = 2 * _this.currentRoomBet);
              _this.getPlayerHouse(seatIdBigBind).setBigBind(true);
              _this.getPlayerHouse(seatIdBigBind).setBet(2 * _this.currentRoomBet);
              _this.getPlayerHouse(seatIdBigBind).addChips();
              _this.getPlayerHouse(seatIdBigBind).addChips();
            }
            _this.currentMatchPotValue = 0;
            _this.labelMatchPot.string = "0";
            _this.currentMaxBet = 2 * _this.currentRoomBet;
            _this.currentRaiseStep = 2 * _this.currentRoomBet;
            _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
            for (var index = 0; index < currentMoneyList.length; index++) {
              var seatId_4 = _this.findPlayerSeatByPos(index);
              _this.getPlayerHouse(seatId_4).setGold(currentMoneyList[index]);
              if (0 == currentMoneyList[index]) {
                configPlayer[seatId_4].isViewer = true;
                configPlayer[seatId_4]["isViewer"] = true;
                _this.getPlayerHouse(seatId_4).setIsViewer(true);
                -1 != configPlayer[seatId_4].playerId && _this.getPlayerHouse(seatId_4).playFxViewer();
              }
            }
            break;

           case Poker_Cmd_1.default.Code.BUY_IN:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedBuyIn(data);
            var chair = res["chair"];
            var buyInMoney = res["buyInMoney"];
            var seatId_5 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_5) {
              0 == seatId_5 && App_1.default.instance.showLoading(false);
              _this.getPlayerHouse(seatId_5).setGold(buyInMoney);
            }
            break;

           case Poker_Cmd_1.default.Code.DEAL_PRIVATE_CARD:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedDealCards(data);
            var chair = res["chair"];
            var sizeCard = res["sizeCard"];
            var myCards_1 = res["myCards"];
            var boBaiId_1 = res["boBaiId"];
            _this.btnBet.active = false;
            _this.btnOpenCard.active = false;
            _this.matchPot.active = true;
            _this.FxDealer.setAnimation(0, "cho", true);
            _this.currentCard = myCards_1;
            var arrSeatExist = _this.getNumPlayers();
            var numPlayer_1 = arrSeatExist.length;
            for (var index = 0; index < 2 * Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
              _this.cardsDeal.children[index].active = !(index >= 2 * numPlayer_1);
              _this.cardsDeal.children[index].position = cc.v2(0, 0);
            }
            for (var a = 0; a < 2; a++) for (var b = 0; b < numPlayer_1; b++) {
              var seatId_6 = arrSeatExist[b];
              if (-1 !== seatId_6) {
                var card4Me = _this.cardsDeal.children[a * numPlayer_1 + b];
                var rawPlayerPos = _this.groupPlayers.children[seatId_6].position;
                card4Me.runAction(cc.sequence(cc.delayTime(.15 * (a * numPlayer_1 + b)), cc.moveTo(.2, rawPlayerPos)));
              }
            }
            var delayOver2Under = .2;
            var maxDelay = .15 * (1 * numPlayer_1 + (numPlayer_1 - 1));
            var timeUnderLayer = 1e3 * (maxDelay + .2 + delayOver2Under);
            clearTimeout(_this.timeoutChiaBaiDone);
            _this.timeoutChiaBaiDone = setTimeout(function() {
              for (var index = 0; index < 2 * Poker_Cmd_1.default.Code.MAX_PLAYER; index++) _this.cardsDeal.children[index].active = false;
              for (var index = 0; index < numPlayer_1; index++) {
                var seatId_7 = arrSeatExist[index];
                if (-1 !== seatId_7) {
                  _this.getPlayerHouse(seatId_7).showCardReady(true);
                  _this.getPlayerHouse(seatId_7).showCardReal(false);
                }
              }
              for (var a = 0; a < 2; a++) {
                var spriteCardId = Poker_CardUtil_1.default.getNormalId(myCards_1[a]);
                _this.getPlayerHouse(0).prepareToTransform();
                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId]);
              }
              var cardName = _this.getCardsName(boBaiId_1);
              _this.getPlayerHouse(0).showCardName(cardName);
            }, timeUnderLayer);
            break;

           case Poker_Cmd_1.default.Code.NEW_ROUND:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedNewBetRound(data);
            var roundId = res["roundId"];
            var sizeCard = res["sizeCard"];
            var plusCards = res["plusCards"];
            var cardName = res["cardName"];
            var potAmount = res["potAmount"];
            _this.matchPot.active = true;
            _this.currentMatchPotValue = potAmount;
            _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
            _this.currentMeBet = 0;
            _this.currentMaxBet = 0;
            _this.currentRaiseStep = 2 * _this.currentRoomBet;
            _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) _this.getPlayerHouse(index).showPlayerBet(false);
            if (!_this.isFolded) switch (roundId) {
             case 1:
              _this.showCenterCards1stRound(plusCards);
              break;

             case 2:
              _this.showCenterCards2ndRound(plusCards);
              break;

             case 3:
              _this.showCenterCards3rdRound(plusCards);
            }
            _this.getPlayerHouse(0).showCardName(_this.getCardsName(cardName));
            break;

           case Poker_Cmd_1.default.Code.CHANGE_TURN:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedChangeTurn(data);
            var roundId = res["roundId"];
            var chair = res["chair"];
            var betTime = res["betTime"];
            _this.resetAllPlayerCountdown();
            var seatId_8 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_8) {
              _this.getPlayerHouse(seatId_8).showPlayCountdown();
              _this.startThinkingCountDown(seatId_8, betTime);
              if (0 == seatId_8) {
                _this.btnBet.active = true;
                _this.FxDealer.setAnimation(0, "noti", true);
                _this.btnOpenCard.active = false;
                _this.setupBet();
                _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
                _this.currentRaiseMin = _this.currentMaxBet + _this.currentRaiseStep;
                var currentMeGold = _this.getPlayerHouse(0).getGold();
                var btn_01 = _this.currentRaiseValue;
                var btn_02 = -1;
                var btn_03 = -1;
                if (0 == roundId) {
                  btn_02 = Math.max(4 * _this.currentRoomBet, _this.currentRaiseStep) + _this.currentMaxBet;
                  btn_03 = Math.max(6 * _this.currentRoomBet, _this.currentRaiseStep) + _this.currentMaxBet;
                } else {
                  btn_02 = Math.max(_this.currentMatchPotValue / 2, _this.currentRaiseStep) + _this.currentMaxBet;
                  btn_03 = Math.max(_this.currentMatchPotValue, _this.currentRaiseStep) + _this.currentMaxBet;
                }
                _this.arrBetValue = [];
                _this.arrBetValue.push(btn_01 - _this.currentMeBet);
                _this.arrBetValue.push(btn_02 - _this.currentMeBet);
                _this.arrBetValue.push(btn_03 - _this.currentMeBet);
                _this.arrBetValue.push(btn_03 + 2 * _this.currentRoomBet - _this.currentMeBet);
                _this.arrBetValue.push(btn_03 + 4 * _this.currentRoomBet - _this.currentMeBet);
                for (var index = 0; index < 5; index++) _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(_this.arrBetValue[4 - index]);
                if (0 == roundId) {
                  _this.betChooseValue.children[0].children[1].getComponent(cc.Label).string = "";
                  _this.betChooseValue.children[1].children[1].getComponent(cc.Label).string = "";
                  _this.betChooseValue.children[2].children[1].getComponent(cc.Label).string = "3BB";
                  _this.betChooseValue.children[3].children[1].getComponent(cc.Label).string = "2BB";
                  _this.betChooseValue.children[4].children[1].getComponent(cc.Label).string = "MIN";
                } else {
                  _this.betChooseValue.children[0].children[1].getComponent(cc.Label).string = "";
                  _this.betChooseValue.children[1].children[1].getComponent(cc.Label).string = "";
                  _this.betChooseValue.children[2].children[1].getComponent(cc.Label).string = "POT";
                  _this.betChooseValue.children[3].children[1].getComponent(cc.Label).string = "POT/2";
                  _this.betChooseValue.children[4].children[1].getComponent(cc.Label).string = "MIN";
                }
                _this.resetBtnActions();
                if (_this.currentMaxBet == _this.currentMeBet) {
                  _this.showBtnCall(false);
                  _this.showBtnCheck(true);
                } else if (_this.currentMaxBet - _this.currentMeBet >= currentMeGold) {
                  _this.showBtnRaise(false);
                  _this.showBtnCall(false);
                  _this.showBtnCheck(false);
                } else {
                  _this.showBtnCall(true);
                  _this.showBtnCheck(false);
                }
                _this.currentRaiseValue - _this.currentMeBet >= currentMeGold && _this.showBtnRaise(false);
              }
            }
            break;

           case Poker_Cmd_1.default.Code.KET_THUC:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedEndGame(data);
            var potAmount = res["potAmount"];
            var rankSize = res["rankSize"];
            var rankList = res["rankList"];
            var kqttSize = res["kqttSize"];
            var kqttList = res["kqttList"];
            var booleanWinerSize = res["booleanWinerSize"];
            var booleanWinerList = res["booleanWinerList"];
            var moneyArraySize = res["moneyArraySize"];
            var currentMoney = res["currentMoney"];
            var gameMoney = res["gameMoney"];
            var gameMoneySize = res["gameMoneySize"];
            var publicCardSize = res["publicCardSize"];
            var publicCards = res["publicCards"];
            var hasInfoSize = res["hasInfoSize"];
            var hasInfoList = res["hasInfoList"];
            var privateCardList = res["privateCardList"];
            var maxCardList = res["maxCardList"];
            var cardNameList = res["cardNameList"];
            _this.matchPot.active = true;
            _this.currentMatchPotValue = potAmount;
            _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
            _this.FxDealer.setAnimation(0, "cho", true);
            _this.currentPrivateCardList = privateCardList;
            var arrPlayerPosExist_1 = [];
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) maxCardList[index].length > 0 && arrPlayerPosExist_1.push(index);
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) if (1 == booleanWinerList[index]) {
              var seatId_9 = _this.findPlayerSeatByPos(index);
              if (-1 != seatId_9) {
                _this.getPlayerHouse(seatId_9).fxWin({
                  moneyChange: kqttList[index],
                  currentMoney: currentMoney[index]
                });
                if (0 == seatId_9) {
                  Configs_1.default.Login.Coin = gameMoney[index];
                  BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                  var numPlayer = _this.getNumPlayers();
                  numPlayer.length > 2 ? _this.btnOpenCard.active = true : _this.btnOpenCard.active = false;
                  _this.btnBet.active = false;
                }
              }
            } else {
              var findId = arrPlayerPosExist_1.indexOf(index);
              if (-1 !== findId) {
                var seatId_10 = _this.findPlayerSeatByPos(index);
                _this.getPlayerHouse(seatId_10).fxLose({
                  moneyChange: kqttList[index],
                  currentMoney: currentMoney[index]
                });
                if (0 == seatId_10) {
                  Configs_1.default.Login.Coin = gameMoney[index];
                  BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                }
              }
            }
            _this.showAllCenterCards(publicCards);
            var endMeCards = _this.currentCard;
            var endCenterCards = publicCards;
            var endMeMaxCards = maxCardList[configPlayer[0].playerPos];
            if (endMeMaxCards.length > 0) {
              for (var index = 0; index < endMeCards.length; index++) {
                var findId = endMeMaxCards.indexOf(endMeCards[index]);
                -1 !== findId ? _this.getPlayerHouse(0).setCardWin(index, true) : _this.getPlayerHouse(0).setCardWin(index, false);
              }
              var arrCardUpper_1 = [];
              for (var index = 0; index < endCenterCards.length; index++) {
                var findId = endMeMaxCards.indexOf(endCenterCards[index]);
                if (-1 !== findId) {
                  _this.cardsCenter.children[index].color = cc.Color.WHITE;
                  arrCardUpper_1.push(index);
                } else _this.cardsCenter.children[index].color = cc.Color.GRAY;
              }
              setTimeout(function() {
                for (var index = 0; index < arrCardUpper_1.length; index++) _this.cardsCenter.children[arrCardUpper_1[index]].y = -10;
              }, 2500);
            }
            for (var index = 1; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
              var arrCardsEnd = maxCardList[configPlayer[index].playerPos];
              if (arrCardsEnd.length > 0) {
                var cardDifferent = [];
                for (var a = 0; a < arrCardsEnd.length; a++) {
                  var isExist = publicCards.indexOf(arrCardsEnd[a]);
                  isExist > -1 || cardDifferent.push(arrCardsEnd[a]);
                }
                var cardShow = _this.currentPrivateCardList[configPlayer[index].playerPos];
                for (var a = 0; a < 2; a++) _this.getPlayerHouse(index).shadowEachCardReal(a, true);
                if (cardShow.length > 0) for (var a = 0; a < 2; a++) {
                  var spriteCardId = Poker_CardUtil_1.default.getNormalId(cardShow[a]);
                  _this.getPlayerHouse(index).prepareToTransform();
                  _this.getPlayerHouse(index).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                  if (cardDifferent.length > 0) for (var b = 0; b < cardDifferent.length; b++) cardShow[a] == cardDifferent[b] && _this.getPlayerHouse(index).shadowEachCardReal(a, false); else _this.getPlayerHouse(index).shadowCardReal(true);
                }
              }
            }
            for (var index = 0; index < arrPlayerPosExist_1.length; index++) {
              var cardName = _this.getCardsName(cardNameList[arrPlayerPosExist_1[index]]);
              var seatId_11 = _this.findPlayerSeatByPos(arrPlayerPosExist_1[index]);
              if (-1 != seatId_11) if (0 == seatId_11) {
                _this.getPlayerHouse(seatId_11).hideCardName();
                _this.FxMeCardName.active = true;
                _this.FxMeCardName.children[0].getComponent(cc.Sprite).spriteFrame = _this.spriteCardNames[cardNameList[arrPlayerPosExist_1[index]]];
              } else _this.getPlayerHouse(seatId_11).showCardName(cardName);
            }
            break;

           case Poker_Cmd_1.default.Code.UPDATE_MATCH:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedUpdateMatch(data);
            var chair = res["chair"];
            var hasInfoSize = res["hasInfoSize"];
            var hasInfoList = res["hasInfoList"];
            var currentMoneyList = res["currentMoneyList"];
            var statusList = res["statusList"];
            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
              var pos = configPlayer[index]["playerPos"];
              if (1 == hasInfoList[pos]) {
                _this.getPlayerHouse(index).setGold(currentMoneyList[pos]);
                if (statusList[pos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING || statusList[pos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) if (0 == currentMoneyList[pos]) {
                  configPlayer[index].isViewer = true;
                  configPlayer[index]["isViewer"] = true;
                  _this.getPlayerHouse(index).setIsViewer(true);
                  -1 != configPlayer[index].playerId && _this.getPlayerHouse(index).playFxViewer();
                } else {
                  configPlayer[index].isViewer = false;
                  configPlayer[index]["isViewer"] = false;
                  _this.getPlayerHouse(index).setIsViewer(false);
                } else {
                  configPlayer[index].isViewer = true;
                  configPlayer[index]["isViewer"] = true;
                  _this.getPlayerHouse(index).setIsViewer(true);
                  -1 != configPlayer[index].playerId && _this.getPlayerHouse(index).playFxViewer();
                }
              } else {
                configPlayer[index]["playerId"] = -1;
                configPlayer[index]["isViewer"] = true;
              }
            }
            break;

           case Poker_Cmd_1.default.Code.SHOW_CARD:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedShowCard(data);
            var chair = res["chair"];
            var seatId_12 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_12) {
              var cardShow = _this.currentPrivateCardList[chair];
              if (cardShow.length > 0) for (var a = 0; a < 2; a++) {
                var spriteCardId = Poker_CardUtil_1.default.getNormalId(cardShow[a]);
                _this.getPlayerHouse(seatId_12).prepareToTransform();
                _this.getPlayerHouse(seatId_12).transformToCardReal(a, _this.spriteCards[spriteCardId]);
              }
            }
            break;

           case Poker_Cmd_1.default.Code.REQUEST_BUY_IN:
            Configs_1.default.Login.Coin >= _this.currentRoomBet * _this.roomMinBuyIn ? _this.showPopupBuyIn(_this.roomMinBuyIn, _this.roomMaxBuyIn, _this.currentRoomBet) : _this.actionLeaveRoom();
            break;

           case Poker_Cmd_1.default.Code.REQUEST_STAND_UP:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedStandUp(data);
            var isUp = res["isUp"];
            break;

           case Poker_Cmd_1.default.Code.LOGIN:
            App_1.default.instance.showLoading(false);
            _this.refeshListRoom();
            Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.CmdReconnectRoom());
            break;

           case Poker_Cmd_1.default.Code.TOPSERVER:
           case Poker_Cmd_1.default.Code.CMD_PINGPONG:
           case Poker_Cmd_1.default.Code.CMD_JOIN_ROOM:
           case Poker_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case Poker_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case Poker_Cmd_1.default.Code.MONEY_BET_CONFIG:
            App_1.default.instance.showLoading(false);
            break;

           case Poker_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedJoinRoomFail(data);
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

           case Poker_Cmd_1.default.Code.GET_LIST_ROOM:
            var res = new Poker_Cmd_1.default.ReceivedGetListRoom(data);
            for (var i = 0; i < res.list.length; i++) {
              var itemData = res.list[i];
              var item = cc.instantiate(_this.prefabItemRoom);
              item.getComponent("Poker.ItemRoom").initItem(itemData);
              _this.contentListRooms.addChild(item);
            }
            _this.scrollListRoom.scrollToTop(.2);
            break;

           case Poker_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
            App_1.default.instance.showLoading(false);
            break;

           case Poker_Cmd_1.default.Code.TU_DONG_BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedAutoStart(data);
            _this.FxMeCardName.active = false;
            _this.isFolded = false;
            if (res.isAutoStart) {
              _this.resetCenterCards();
              _this.resetHubChips();
              _this.startWaittingCountDown(res.timeAutoStart);
              _this.btnBet.active = false;
              _this.btnOpenCard.active = false;
              _this.FxDealer.setAnimation(0, "cho", true);
              _this.matchPot.active = false;
              _this.labelMatchPot.string = "0";
              _this.currentMatchPotValue = 0;
              _this.currentCard = [];
              _this.currentCenterCard = [];
              _this.currentPrivateCardList = [];
              _this.currentMeBet = 0;
              _this.lastMeBet = 0;
              _this.currentMaxBet = 0;
              _this.currentRaiseMin = 0;
              _this.currentRaiseStep = 0;
              _this.currentRaiseValue = 0;
              _this.resetPlayersPlaying();
              _this.FxDealer.setAnimation(0, "cho", true);
            }
            break;

           case Poker_Cmd_1.default.Code.MOI_DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedMoiDatCuoc(data);
            _this.startBettingCountDown(res.timeDatCuoc);
            _this.arrBetValue = [];
            _this.matchPot.active = true;
            _this.currentMatchPotValue = 0;
            _this.labelMatchPot.string = "0";
            for (var index = 0; index < 4; index++) {
              _this.arrBetValue.push(_this.currentRoomBet * (index + 1));
              _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(_this.currentRoomBet * (4 - index));
            }
            for (var index = 0; index < configPlayer.length; index++) if (index !== _this.seatOwner && !configPlayer[index].isViewer && -1 !== configPlayer[index].playerId) {
              _this.getPlayerHouse(index).setBet(_this.currentRoomBet);
              _this.getPlayerHouse(index).addChips();
              0 != index && _this.getPlayerHouse(index).setupBetValue(_this.currentRoomBet);
            }
            if (0 == _this.seatOwner) {
              _this.btnOpenCard.active = false;
              _this.btnBet.active = false;
              _this.FxDealer.setAnimation(0, "cho", true);
            } else {
              _this.btnBet.active = true;
              _this.btnOpenCard.active = false;
              _this.FxDealer.setAnimation(0, "noti", true);
              _this.setupBet();
            }
            _this.numCardOpened = 0;
            break;

           case Poker_Cmd_1.default.Code.CHEAT_CARDS:
           case Poker_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
           case Poker_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
            App_1.default.instance.showLoading(false);
            break;

           case Poker_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedKickOff(data);
            break;

           case Poker_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
            break;

           case Poker_Cmd_1.default.Code.CHAT_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new Poker_Cmd_1.default.ReceivedChatRoom(data);
            var chair = res["chair"];
            var isIcon = res["isIcon"];
            var content = res["content"];
            if (isIcon) {
              var seatId_13 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_13 && _this.getPlayerHouse(seatId_13).showChatEmotion(content);
            } else {
              var seatId_14 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_14 && _this.getPlayerHouse(seatId_14).showChatMsg(content);
            }
          }
        }, this);
      };
      PokerController.prototype.actionLeaveRoom = function() {
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.CmdSendRequestLeaveGame());
      };
      PokerController.prototype.actionOpenCard = function() {
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendShowCard());
        this.btnOpenCard.active = false;
      };
      PokerController.prototype.actionSendVaoGa = function() {};
      PokerController.prototype.increaseBetValue = function() {
        this.currentBetSelectedIndex == this.arrBetValue.length - 1 || (this.currentBetSelectedIndex += 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      PokerController.prototype.decreaseBetValue = function() {
        0 == this.currentBetSelectedIndex || (this.currentBetSelectedIndex -= 1);
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
      };
      PokerController.prototype.actionAll_In = function() {
        this.btnBet.active = false;
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 0, 1, 0));
      };
      PokerController.prototype.actionRaise = function() {
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        var rawMeGold = this.getPlayerHouse(0).userGold.string.replace(/\./g, "");
        var currentMeMoney = parseInt(rawMeGold);
        var betValue = Math.min(this.arrBetValue[this.currentBetSelectedIndex], currentMeMoney);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 0, 0, betValue));
      };
      PokerController.prototype.actionCheck = function() {
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 1, 0, 0, 0));
      };
      PokerController.prototype.actionCall = function() {
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 1, 0, 0));
      };
      PokerController.prototype.actionFold = function() {
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(1, 0, 0, 0, 0));
      };
      PokerController.prototype.actionBuyIn = function() {
        var event = this.edtBuyIn.string;
        if (event.length > 0) {
          var rawNumber = "";
          for (var index = 0; index < event.length; index++) "0" != event[index] && "1" != event[index] && "2" != event[index] && "3" != event[index] && "4" != event[index] && "5" != event[index] && "6" != event[index] && "7" != event[index] && "8" != event[index] && "9" != event[index] || (rawNumber += event[index]);
          if ("" !== rawNumber) {
            Configs_1.default.Login.Coin < this.maxCashIn && (this.maxCashIn = Configs_1.default.Login.Coin);
            if (parseInt(rawNumber) < this.minCashIn * this.currentRoomBet) {
              App_1.default.instance.alertDialog.showMsg("\u101d\u101a\u103a\u101e\u100a\u1037\u103a\u1015\u1019\u102c\u100f\u101e\u100a\u103a \u1015\u102d\u102f\u1019\u103b\u102c\u1038\u101b\u1019\u100a\u103a\u104b " + Utils_1.default.formatNumber(this.minCashIn * this.currentRoomBet));
              return;
            }
            if (parseInt(rawNumber) > this.maxCashIn * this.currentRoomBet) {
              App_1.default.instance.alertDialog.showMsg("\u101d\u101a\u103a\u101a\u1030\u1019\u103e\u102f\u1015\u1019\u102c\u100f \u1014\u100a\u103a\u1038\u1015\u102b\u1038\u101b\u1019\u100a\u103a\u104b " + Utils_1.default.formatNumber(this.maxCashIn * this.currentRoomBet));
              return;
            }
            this.toggleAutoBuyIn.isChecked ? Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 1)) : Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 0));
            App_1.default.instance.showLoading(true);
            this.closePopupBuyIn();
          } else App_1.default.instance.alertDialog.showMsg("\u1015\u1019\u102c\u100f \u1019\u1019\u103e\u1014\u103a\u1015\u102b\u104b.");
        }
      };
      PokerController.prototype.initConfigPlayer = function() {
        configPlayer = [];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) configPlayer.push({
          seatId: index,
          playerId: -1,
          playerPos: -1,
          isViewer: true
        });
      };
      PokerController.prototype.resetCenterCards = function() {
        for (var index = 0; index < 5; index++) {
          this.cardsCenter.children[index].position = cc.v2(0, 100);
          this.cardsCenter.children[index].scale = 0;
          this.cardsCenter.children[index].color = cc.Color.WHITE;
        }
      };
      PokerController.prototype.resetPlayersPlaying = function() {
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) this.getPlayerHouse(index).resetMatchHistory();
      };
      PokerController.prototype.resetAllPlayerCountdown = function() {
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) this.getPlayerHouse(index).hidePlayCountdown();
      };
      PokerController.prototype.getCardsName = function(boBaiId) {
        var name = "";
        switch (boBaiId) {
         case Poker_Cmd_1.default.Code.EG_SANH_VUA:
          name = "\u1018\u102f\u101b\u1004\u103a\u1001\u1014\u103a\u1038\u1019";
          break;

         case Poker_Cmd_1.default.Code.EG_THUNG_PHA_SANH:
          name = "\u1016\u103c\u1031\u102c\u1004\u1037\u103a\u1006\u1031\u1038";
          break;

         case Poker_Cmd_1.default.Code.EG_TU_QUY:
          name = "\u101c\u1031\u1038\u1019\u103b\u102d\u102f\u1038";
          break;

         case Poker_Cmd_1.default.Code.EG_CU_LU:
          name = "\u1021\u102d\u1019\u103a\u1021\u1015\u103c\u100a\u1037\u103a\u1015\u1032";
          break;

         case Poker_Cmd_1.default.Code.EG_THUNG:
          name = "\u101b\u1031\u1006\u103d\u1032\u1001\u103b";
          break;

         case Poker_Cmd_1.default.Code.EG_SANH:
          name = "\u1010\u100a\u1037\u103a\u1010\u100a\u1037\u103a";
          break;

         case Poker_Cmd_1.default.Code.EG_XAM_CO:
          name = "\u1010\u1005\u103a\u1019\u103b\u102d\u102f\u1038";
          break;

         case Poker_Cmd_1.default.Code.EG_HAI_DOI:
          name = "\u1014\u103e\u1005\u103a\u101a\u1031\u102c\u1000\u103a\u1010\u103d\u1032";
          break;

         case Poker_Cmd_1.default.Code.EG_DOI:
          name = "\u1010\u103d\u1032";
          break;

         case Poker_Cmd_1.default.Code.EG_MAU_THAU:
          name = "\u1000\u1010\u103a\u1019\u103c\u1004\u1037\u103a";
        }
        return name;
      };
      PokerController.prototype.setupSeatPlayer = function(seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.currentMoney);
      };
      PokerController.prototype.findPlayerSeatByUid = function(uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerId === uid && (seat = configPlayer[index].seatId);
        return seat;
      };
      PokerController.prototype.findPlayerPosBySeat = function(seat) {
        return configPlayer[seat].playerPos;
      };
      PokerController.prototype.findPlayerSeatByPos = function(pos) {
        if (-1 == pos) return -1;
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerPos === pos && (seat = configPlayer[index].seatId);
        return seat;
      };
      PokerController.prototype.getPlayerHouse = function(seatId) {
        return this.groupPlayers.children[seatId].getComponent("Poker.Player");
      };
      PokerController.prototype.getNumPlayers = function() {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) -1 === configPlayer[index].playerId || configPlayer[index].isViewer || playerPosEntry.push(configPlayer[index].seatId);
        return playerPosEntry;
      };
      PokerController.prototype.update = function(dt) {};
      var PokerController_1;
      PokerController.instance = null;
      __decorate([ property(cc.Node) ], PokerController.prototype, "UI_ChooseRoom", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelNickName", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelCoin", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "contentListRooms", void 0);
      __decorate([ property(cc.Prefab) ], PokerController.prototype, "prefabItemRoom", void 0);
      __decorate([ property(cc.ScrollView) ], PokerController.prototype, "scrollListRoom", void 0);
      __decorate([ property(cc.EditBox) ], PokerController.prototype, "edtFindRoom", void 0);
      __decorate([ property(cc.Toggle) ], PokerController.prototype, "btnHideRoomFull", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "meCards", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "groupPlayers", void 0);
      __decorate([ property(cc.SpriteFrame) ], PokerController.prototype, "spriteCards", void 0);
      __decorate([ property(cc.SpriteFrame) ], PokerController.prototype, "spriteCardBack", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "matchPot", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelMatchPot", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "cardsDeal", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "cardsCenter", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "btnBet", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "btnOpenCard", void 0);
      __decorate([ property(cc.Button) ], PokerController.prototype, "btnLeaveRoom", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "hubChips", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelRoomId", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelRoomBet", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "actionBetting", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "betChooseValue", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "betChooseValueTarget", void 0);
      __decorate([ property(sp.Skeleton) ], PokerController.prototype, "FxDealer", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "btnActions", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "popupBuyIn", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelBuyInMin", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelBuyInMax", void 0);
      __decorate([ property(cc.EditBox) ], PokerController.prototype, "edtBuyIn", void 0);
      __decorate([ property(cc.Toggle) ], PokerController.prototype, "toggleAutoBuyIn", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "FxMeCardName", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PokerController.prototype, "spriteCardNames", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "notifyTimeStart", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "notifyTimeEnd", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "notifyTimeBet", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.EditBox) ], PokerController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "popupNodity", void 0);
      __decorate([ property(cc.Label) ], PokerController.prototype, "labelNotifyContent", void 0);
      __decorate([ property(cc.Node) ], PokerController.prototype, "popupGuide", void 0);
      PokerController = PokerController_1 = __decorate([ ccclass ], PokerController);
      return PokerController;
    }(cc.Component);
    exports.default = PokerController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./Poker.CardUtil": "Poker.CardUtil",
    "./Poker.Cmd": "Poker.Cmd",
    "./Poker.NetworkClient": "Poker.NetworkClient"
  } ],
  "Poker.ItemRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "506a91gVcBEUL5Aw1Hj1PE1", "Poker.ItemRoom");
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
    var Poker_Controller_1 = require("./Poker.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PokerItemRoom = function(_super) {
      __extends(PokerItemRoom, _super);
      function PokerItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
      }
      PokerItemRoom.prototype.start = function() {};
      PokerItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      PokerItemRoom.prototype.chooseRoom = function() {
        Poker_Controller_1.default.instance.joinRoom(this.roomInfo);
      };
      __decorate([ property(cc.Label) ], PokerItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], PokerItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], PokerItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], PokerItemRoom.prototype, "progressNumPlayers", void 0);
      PokerItemRoom = __decorate([ ccclass ], PokerItemRoom);
      return PokerItemRoom;
    }(cc.Component);
    exports.default = PokerItemRoom;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Poker.Controller": "Poker.Controller"
  } ],
  "Poker.NetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc696/vTfVLfYiNSjN3D0rT", "Poker.NetworkClient");
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
    var PokerNetworkClient = function(_super) {
      __extends(PokerNetworkClient, _super);
      function PokerNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      PokerNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new PokerNetworkClient());
        return this.instance;
      };
      PokerNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_POKER.host, Configs_1.default.App.HOST_POKER.port);
      };
      PokerNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
      };
      PokerNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      PokerNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      PokerNetworkClient.prototype.send = function(packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return PokerNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = PokerNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
  } ],
  "Poker.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a80dskJA1MzZkQWeG+gkTZ", "Poker.Player");
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
        _this.dealer = null;
        _this.smallBind = null;
        _this.bigBind = null;
        _this.owner = null;
        _this.cardsName = null;
        _this.actionState = null;
        _this.actionAllIn = null;
        _this.actionFold = null;
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
      Player.prototype.showBtnInvite = function(state) {
        this.btnInvite.active = state;
      };
      Player.prototype.setOwner = function(state) {
        this.owner.active = state;
      };
      Player.prototype.setDealer = function(state) {
        this.dealer.active = state;
      };
      Player.prototype.setSmallBind = function(state) {
        this.smallBind.active = state;
      };
      Player.prototype.setBigBind = function(state) {
        this.bigBind.active = state;
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
      Player.prototype.hideCardName = function() {
        this.cardsName.active = false;
      };
      Player.prototype.setGold = function(data) {
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.showGold(true);
        this.userGold.string = this.formatGold(data);
      };
      Player.prototype.getGold = function() {
        var raw = this.userGold.string.replace(/\./g, "");
        return parseInt(raw);
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
        this.node.children[1].active = true;
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
      Player.prototype.prepareFxAction = function() {
        this.showGold(false);
        this.node.children[4].active = true;
        this.resetAction();
      };
      Player.prototype.showActionState = function(state) {
        this.node.children[4].active = true;
        this.actionState.active = true;
        this.actionState.children[1].getComponent(cc.Label).string = state;
      };
      Player.prototype.playFxFold = function() {
        this.actionFold.active = true;
        this.actionFold.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.05, 1, 1)));
      };
      Player.prototype.playFxAllIn = function() {
        this.actionAllIn.active = true;
        this.actionAllIn.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.05, 1, 1)));
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
        this.setGold(this.formatGold(playerInfo.currentMoney));
        setTimeout(function() {
          _this.actionWin.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.fxLose = function(playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionLose.active = false;
        this.setGold(this.formatGold(playerInfo.currentMoney));
        setTimeout(function() {
          _this.actionLose.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.shadowCardReady = function(state) {
        this.cardReady.children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReady.children[1].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.shadowCardReal = function(state) {
        this.cardReal.children[0].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[1].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.shadowEachCardReal = function(id, state) {
        this.cardReal.children[id].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
        this.setDealer(false);
        this.setBigBind(false);
        this.setSmallBind(false);
        this.resetAction();
        this.node.children[5].active = false;
        this.goldBet.string = "0";
        this.hub.removeAllChildren(true);
      };
      Player.prototype.resetCardReady = function() {
        this.cardReady.children[0].scale = 1;
        this.cardReady.children[1].scale = 1;
        this.cardReady.active = false;
      };
      Player.prototype.resetCardReal = function() {
        this.cardReal.active = false;
        this.cardReal.y = 0;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.shadowCardReal(false);
      };
      Player.prototype.resetPlayerInfo = function() {
        for (var index = 0; index < this.node.childrenCount; index++) this.node.children[index].active = false;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReady.active = false;
        this.cardReal.active = false;
        this.setDealer(false);
        this.setBigBind(false);
        this.setSmallBind(false);
        this.cardsName.active = false;
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
      __decorate([ property(cc.Node) ], Player.prototype, "dealer", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "smallBind", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "bigBind", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "owner", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "cardsName", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionState", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionAllIn", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionFold", void 0);
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
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0
  } ]
}, {}, [ "Poker.CardUtil", "Poker.Cmd", "Poker.Controller", "Poker.ItemRoom", "Poker.NetworkClient", "Poker.Player" ]);