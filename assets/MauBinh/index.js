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
  "MauBinh.CardUtil": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5f92nEHMdNj4gHuhmCMctb", "MauBinh.CardUtil");
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
        CardUtils.getNumber = function(id) {
          return Math.floor(id / 4) + 2;
        };
        return CardUtils;
      }();
      common.CardUtils = CardUtils;
    })(common = exports.common || (exports.common = {}));
    exports.default = common.CardUtils;
    cc._RF.pop();
  }, {} ],
  "MauBinh.Card": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2d4bIJJopJlrCYY5D9/4Rr", "MauBinh.Card");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.maubinh = void 0;
    var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
    var maubinh;
    (function(maubinh) {
      var MauBinhCard = function() {
        function MauBinhCard(a, b) {
          this.id = a;
          this.display = b;
        }
        MauBinhCard.prototype.setCard = function(a, b) {
          this.id = 4 * (a - 2) + b;
        };
        MauBinhCard.prototype.getNumber = function() {
          return Math.floor(this.id / 4) + 2;
        };
        MauBinhCard.prototype.getSuit = function() {
          return this.id % 4;
        };
        MauBinhCard.prototype.getId = function() {
          return this.id;
        };
        MauBinhCard.prototype.getColor = function() {
          var a = this.getSuit();
          if (a == MauBinh_Cmd_1.default.Code.SPADE || a == MauBinh_Cmd_1.default.Code.CLUB) return MauBinh_Cmd_1.default.Code.BLACK;
          if (a == MauBinh_Cmd_1.default.Code.DIAMOND || a == MauBinh_Cmd_1.default.Code.HEART) return MauBinh_Cmd_1.default.Code.RED;
          return null;
        };
        return MauBinhCard;
      }();
      maubinh.MauBinhCard = MauBinhCard;
    })(maubinh = exports.maubinh || (exports.maubinh = {}));
    exports.default = maubinh.MauBinhCard;
    cc._RF.pop();
  }, {
    "./MauBinh.Cmd": "MauBinh.Cmd"
  } ],
  "MauBinh.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73889UV1D1OeI4ehXzc0OG9", "MauBinh.Cmd");
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
        Code.BINH_SO_CHI = 3101;
        Code.BAT_DAU = 3102;
        Code.KET_THUC = 3103;
        Code.AUTO_BINH_SO_CHI = 3104;
        Code.CHIA_BAI = 3105;
        Code.BAO_BINH = 3106;
        Code.TU_DONG_BAT_DAU = 3107;
        Code.XEP_LAI = 3108;
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
        Code.TYPE_SANH_RONG = 0;
        Code.TYPE_MUOI_BA_CAY_DONG_MAU = 1;
        Code.TYPE_MUOI_HAI_CAY_DONG_MAU = 2;
        Code.TYPE_BA_CAI_THUNG = 3;
        Code.TYPE_BA_CAI_SANH = 4;
        Code.TYPE_LUC_PHE_BON = 5;
        Code.TYPE_BINH_THUONG = 6;
        Code.TYPE_BINH_LUNG = 7;
        Code.GROUP_THUNG_PHA_SANH = 0;
        Code.GROUP_TU_QUY = 1;
        Code.GROUP_CU_LU = 2;
        Code.GROUP_THUNG = 3;
        Code.GROUP_SANH = 4;
        Code.GROUP_SAM_CO = 5;
        Code.GROUP_THU = 6;
        Code.GROUP_MOT_DOI = 7;
        Code.GROUP_MAU_THAU = 8;
        Code.LV_THUONG = 0;
        Code.LV_HA = 1;
        Code.LV_BINH_THUONG = 2;
        Code.BLACK = 0;
        Code.RED = 1;
        Code.SPADE = 0;
        Code.CLUB = 1;
        Code.DIAMOND = 2;
        Code.HEART = 3;
        Code.STATE_NO_START = 0;
        Code.STATE_PLAYING = 1;
        Code.STATE_END = 2;
        Code.MAX_PLAYER = 4;
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
      var SendBinhSoChi = function(_super) {
        __extends(SendBinhSoChi, _super);
        function SendBinhSoChi(a, b, c) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BINH_SO_CHI);
          _this.packHeader();
          _this.putShort(a.length);
          for (var d = 0; d < a.length; d++) _this.putByte(a[d]);
          _this.putShort(b.length);
          for (d = 0; d < b.length; d++) _this.putByte(b[d]);
          _this.putShort(c.length);
          for (d = 0; d < c.length; d++) _this.putByte(c[d]);
          _this.updateSize();
          return _this;
        }
        return SendBinhSoChi;
      }(Network_OutPacket_1.default);
      cmd.SendBinhSoChi = SendBinhSoChi;
      var SendBaoBinh = function(_super) {
        __extends(SendBaoBinh, _super);
        function SendBaoBinh() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BAO_BINH);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendBaoBinh;
      }(Network_OutPacket_1.default);
      cmd.SendBaoBinh = SendBaoBinh;
      var SendAutoBinhSoChi = function(_super) {
        __extends(SendAutoBinhSoChi, _super);
        function SendAutoBinhSoChi(a, b, c) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.AUTO_BINH_SO_CHI);
          _this.packHeader();
          _this.putShort(a.length);
          for (var d = 0; d < a.length; d++) _this.putByte(a[d]);
          _this.putShort(b.length);
          for (d = 0; d < b.length; d++) _this.putByte(b[d]);
          _this.putShort(c.length);
          for (d = 0; d < c.length; d++) _this.putByte(c[d]);
          _this.updateSize();
          return _this;
        }
        return SendAutoBinhSoChi;
      }(Network_OutPacket_1.default);
      cmd.SendAutoBinhSoChi = SendAutoBinhSoChi;
      var SendXepLai = function(_super) {
        __extends(SendXepLai, _super);
        function SendXepLai() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.XEP_LAI);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendXepLai;
      }(Network_OutPacket_1.default);
      cmd.SendXepLai = SendXepLai;
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
          _this.gameState = _this.getByte();
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
          var a = _this.getShort();
          _this.cardList = [];
          for (var b = 0; b < a; b++) _this.cardList.push(_this.getByte());
          _this.mauBinh = _this.getByte();
          _this.gameId = _this.getInt();
          _this.countdown = _this.getByte();
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
          _this.myChair = _this.getByte();
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
          _this.playerResultList = [];
          for (var a = _this.getShort(), b = 0; b < a; b++) {
            var c = {};
            c["chairIndex"] = _this.getByte();
            c["maubinhType"] = _this.getInt();
            var d = _this.getShort();
            c["chi1"] = [];
            for (var e = 0; e < d; e++) c["chi1"].push(_this.getByte());
            d = _this.getShort();
            c["chi2"] = [];
            for (e = 0; e < d; e++) c["chi2"].push(_this.getByte());
            d = _this.getShort();
            c["chi3"] = [];
            for (e = 0; e < d; e++) c["chi3"].push(_this.getByte());
            c["moneyInChi"] = [];
            d = _this.getShort();
            for (e = 0; e < d; e++) c["moneyInChi"].push(_this.getLong());
            c["moneyAt"] = _this.getLong();
            c["moneyCommon"] = _this.getLong();
            c["moneySap"] = _this.getLong();
            c["currentMoney"] = _this.getLong();
            _this.playerResultList.push(c);
          }
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
          _this.gameState = _this.getByte();
          _this.gameAction = _this.getByte();
          _this.countdownTime = _this.getByte();
          _this.moneyBet = _this.getLong();
          _this.moneyType = _this.getByte();
          _this.gameId = _this.getInt();
          _this.roomId = _this.getInt();
          _this.rule = _this.getByte();
          var a = _this.getShort();
          _this.hasInfo = [];
          for (var b = 0; b < a; b++) _this.hasInfo[b] = _this.getBool();
          _this.players = [];
          for (b = 0; b < cmd.Code.MAX_PLAYER; b++) if (_this.hasInfo[b]) {
            _this.players[b] = {};
            if (_this.gameState == cmd.Code.STATE_PLAYING) {
              if (b == _this.myChair) {
                a = _this.getShort();
                _this.players[b].cardList = [];
                for (var c = 0; c < a; c++) _this.players[b].cardList.push(_this.getByte());
              }
            } else if (_this.gameState == cmd.Code.STATE_END) {
              a = _this.getShort();
              _this.players[b].cardList = [];
              for (c = 0; c < a; c++) _this.players[b].cardList.push(_this.getByte());
              _this.players[b].maubinhType = _this.getByte();
              _this.players[b].moneyCommon = _this.getLong();
            }
            _this.players[b].sochi = _this.getBool();
            _this.players[b].status = _this.getByte();
            _this.players[b].avatar = _this.getString();
            _this.players[b].userId = _this.getInt();
            _this.players[b].nickName = _this.getString();
            _this.players[b].currentMoney = _this.getLong();
          }
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
      var ReceivedMauBinhConfig = function(_super) {
        __extends(ReceivedMauBinhConfig, _super);
        function ReceivedMauBinhConfig(data) {
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
        return ReceivedMauBinhConfig;
      }(Network_InPacket_1.default);
      cmd.ReceivedMauBinhConfig = ReceivedMauBinhConfig;
      var ReceivedBinhSoChi = function(_super) {
        __extends(ReceivedBinhSoChi, _super);
        function ReceivedBinhSoChi(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          return _this;
        }
        return ReceivedBinhSoChi;
      }(Network_InPacket_1.default);
      cmd.ReceivedBinhSoChi = ReceivedBinhSoChi;
      var ReceivedXepLai = function(_super) {
        __extends(ReceivedXepLai, _super);
        function ReceivedXepLai(data) {
          var _this = _super.call(this, data) || this;
          _this.chair = _this.getByte();
          return _this;
        }
        return ReceivedXepLai;
      }(Network_InPacket_1.default);
      cmd.ReceivedXepLai = ReceivedXepLai;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "MauBinh.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97c85/a1ahNR5WoU+8m1+Ga", "MauBinh.Controller");
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
    var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
    var MauBinh_NetworkClient_1 = require("./MauBinh.NetworkClient");
    var MauBinh_CardUtil_1 = require("./MauBinh.CardUtil");
    var MauBinh_DetectPlayerCards_1 = require("./MauBinh.DetectPlayerCards");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var configPlayer = [];
    var defaultPlayerPos = [ [ 0, 1, 2, 3 ], [ 1, 2, 3, 0 ], [ 2, 3, 0, 1 ], [ 3, 0, 1, 2 ] ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MauBinhController = function(_super) {
      __extends(MauBinhController, _super);
      function MauBinhController() {
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
        _this.cardsDeal = null;
        _this.btnLeaveRoom = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.cardMove = null;
        _this.suggestTarget = null;
        _this.btnSoChi = null;
        _this.btnCombining = null;
        _this.tableCurrentChi = null;
        _this.notifyTimeStart = null;
        _this.notifyTimeEnd = null;
        _this.notifyTimeBet = null;
        _this.fxSoChiTotal = null;
        _this.spriteSoChiTotal = [];
        _this.UI_Chat = null;
        _this.edtChatInput = null;
        _this.popupNodity = null;
        _this.labelNotifyContent = null;
        _this.popupGuide = null;
        _this.spriteGroupCard = [];
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
        _this.timeoutChiaBaiDone = null;
        _this.timeoutBetting = null;
        _this.isTinhAce = null;
        return _this;
      }
      MauBinhController_1 = MauBinhController;
      MauBinhController.prototype.onLoad = function() {
        MauBinhController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
      };
      MauBinhController.prototype.start = function() {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        MauBinh_NetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b...");
          MauBinh_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        MauBinh_NetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.loadScene("Lobby");
        }, this);
        MauBinh_NetworkClient_1.default.getInstance().connect();
      };
      MauBinhController.prototype.joinRoom = function(info) {
        App_1.default.instance.showLoading(true);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      MauBinhController.prototype.refeshListRoom = function() {
        this.contentListRooms.removeAllChildren(true);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendGetListRoom());
      };
      MauBinhController.prototype.findRoomId = function() {
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
          var idFind = parseInt(text);
          for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
            roomItem.roomInfo["id"] != idFind && (this.contentListRooms.children[index].active = false);
          }
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      MauBinhController.prototype.hideRoomFull = function() {
        if (this.btnHideRoomFull.isChecked) for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
          roomItem.roomInfo["userCount"] == roomItem.roomInfo["maxUserPerRoom"] && (this.contentListRooms.children[index].active = false);
        } else for (var index = 0; index < this.contentListRooms.childrenCount; index++) this.contentListRooms.children[index].active = true;
      };
      MauBinhController.prototype.showUIRooms = function() {
        var _this = this;
        this.UI_ChooseRoom.active = true;
        if (this.isInitedUIRoom) BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN); else {
          this.labelNickName.string = Configs_1.default.Login.Nickname;
          BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
            _this.labelCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
          }, this);
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          this.setupListener();
        }
      };
      MauBinhController.prototype.closeUIRoom = function() {
        this.UI_ChooseRoom.active = false;
      };
      MauBinhController.prototype.createRoom = function() {};
      MauBinhController.prototype.playingNow = function() {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
          roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin && arrRoomOkMoney.push(index);
        }
        if (arrRoomOkMoney.length > 0) {
          var roomCrowed = arrRoomOkMoney[0];
          for (var index = 0; index < arrRoomOkMoney.length; index++) {
            var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("MauBinh.ItemRoom");
            var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("MauBinh.ItemRoom");
            roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"] && (roomCrowed = arrRoomOkMoney[index]);
          }
          var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("MauBinh.ItemRoom");
          this.joinRoom(roomChoosed.roomInfo);
        } else App_1.default.instance.alertDialog.showMsg("\u1019\u100a\u103a\u101e\u100a\u1037\u103a\u1021\u1001\u1014\u103a\u1038\u1010\u103d\u1004\u103a\u1019\u1006\u102d\u102f\n \u1015\u102b\u101d\u1004\u103a\u101b\u1014\u103a \u1004\u103d\u1031\u1019\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104b !");
      };
      MauBinhController.prototype.showUIChat = function() {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(.5, 420, 0));
      };
      MauBinhController.prototype.closeUIChat = function() {
        this.UI_Chat.runAction(cc.moveTo(.5, 1e3, 0));
      };
      MauBinhController.prototype.chatEmotion = function(event, id) {
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      MauBinhController.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      MauBinhController.prototype.showPopupGuide = function() {
        this.popupGuide.active = true;
      };
      MauBinhController.prototype.closePopupGuide = function() {
        this.popupGuide.active = false;
      };
      MauBinhController.prototype.backToLobby = function() {
        MauBinh_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      MauBinhController.prototype.showUIPlaying = function() {
        this.UI_Playing.active = true;
      };
      MauBinhController.prototype.closeUIPlaying = function() {
        this.actionLeaveRoom();
      };
      MauBinhController.prototype.setupMatch = function(data) {
        this.showUIPlaying();
        this.closeUIChat();
        var myChair = data["myChair"];
        var moneyBet = data["moneyBet"];
        var roomId = data["roomId"];
        var gameId = data["gameId"];
        var moneyType = data["moneyType"];
        var rule = data["rule"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var playerInfos = data["playerInfos"];
        var gameState = data["gameState"];
        var gameAction = data["gameAction"];
        var countDownTime = data["countDownTime"];
        this.labelRoomId.string = "Chinese Poker - \u1021\u1001\u1014\u103a\u1038: " + roomId;
        this.labelRoomBet.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038\u1015\u1019\u102c\u100f: " + Utils_1.default.formatNumber(moneyBet) + "$";
        this.isTinhAce = 1 == rule;
        this.currentRoomBet = moneyBet;
        gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING && this.startBettingCountDown(countDownTime);
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
        for (var a = 0; a < configPlayer.length; a++) configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        for (var index = 0; index < configPlayer.length; index++) {
          var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
          var seatId = configPlayer[index].seatId;
          this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
          if (findPos > -1) {
            if (arrPlayerStatus[findPos] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              configPlayer[index].isViewer = false;
              this.getPlayerHouse(seatId).setIsViewer(false);
              if (0 != seatId && gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING) {
                this.getPlayerHouse(seatId).playFxDangXep();
                this.getPlayerHouse(seatId).showCardReal(true);
                this.getPlayerHouse(seatId).showCardReady(false);
              }
            } else {
              configPlayer[index].isViewer = true;
              this.getPlayerHouse(seatId).setIsViewer(true);
              this.getPlayerHouse(seatId).playFxViewer();
            }
            this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
          } else {
            this.getPlayerHouse(seatId).showBtnInvite(true);
            configPlayer[index].isViewer = true;
          }
        }
      };
      MauBinhController.prototype.startWaittingCountDown = function(timeWait) {
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
      MauBinhController.prototype.setTimeWaittingCountDown = function() {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = "\u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      MauBinhController.prototype.startEndCountDown = function(timeWait) {
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
      MauBinhController.prototype.setTimeEndCountDown = function() {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1021\u1006\u102f\u1036\u1038\u101e\u1010\u103a\u1015\u102b\u104b: " + this.seconds + "s ";
      };
      MauBinhController.prototype.startBettingCountDown = function(turnTime) {
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
      MauBinhController.prototype.processBetting = function(rate) {
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
      };
      MauBinhController.prototype.getCardsScore = function(arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) score += MauBinh_CardUtil_1.default.getDiemById(arrCards[a]);
        score %= 10;
        0 == score && (score = 10);
        return score;
      };
      MauBinhController.prototype.setupListener = function() {
        var _this = this;
        MauBinh_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case MauBinh_Cmd_1.default.Code.LOGIN:
            App_1.default.instance.showLoading(false);
            _this.refeshListRoom();
            MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdReconnectRoom());
            break;

           case MauBinh_Cmd_1.default.Code.TOPSERVER:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedTopServer(data);
            var rankType = res["rankType"];
            var topDay_money = res["topDay_money"];
            var topWeek_money = res["topWeek_money"];
            var topMonth_money = res["topMonth_money"];
            break;

           case MauBinh_Cmd_1.default.Code.CMD_PINGPONG:
           case MauBinh_Cmd_1.default.Code.CMD_JOIN_ROOM:
           case MauBinh_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
           case MauBinh_Cmd_1.default.Code.MONEY_BET_CONFIG:
            App_1.default.instance.showLoading(false);
            break;

           case MauBinh_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedJoinRoomFail(data);
            var msg = "\u1021\u1019\u103e\u102c\u1038 " + res.getError() + ", \u1021\u1010\u102d\u1021\u1000\u103b\u1019\u101e\u102d\u101b\u101e\u1031\u1038\u1015\u102b\u104b.";
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

           case MauBinh_Cmd_1.default.Code.GET_LIST_ROOM:
            var res = new MauBinh_Cmd_1.default.ReceivedGetListRoom(data);
            for (var i = 0; i < res.list.length; i++) {
              var itemData = res.list[i];
              var item = cc.instantiate(_this.prefabItemRoom);
              item.getComponent("MauBinh.ItemRoom").initItem(itemData);
              _this.contentListRooms.addChild(item);
            }
            _this.scrollListRoom.scrollToTop(.2);
            break;

           case MauBinh_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
            App_1.default.instance.showLoading(false);
            break;

           case MauBinh_Cmd_1.default.Code.BINH_SO_CHI:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedBinhSoChi(data);
            var chair = res["chair"];
            var seatId_1 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_1) if (0 == seatId_1) {
              _this.btnCombining.active = true;
              _this.btnSoChi.active = false;
              _this.getPlayerHouse(0).scaleCardReal(.45);
              for (var index = 0; index < 13; index++) _this.meCards.children[index].getComponent("MauBinh.MeCard").offDrag();
            } else _this.getPlayerHouse(seatId_1).playFxXepXong();
            break;

           case MauBinh_Cmd_1.default.Code.XEP_LAI:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedXepLai(data);
            var chair = res["chair"];
            var seatId_2 = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId_2) if (0 == seatId_2) {
              _this.btnCombining.active = false;
              _this.btnSoChi.active = true;
              _this.getPlayerHouse(0).scaleCardReal(1);
              for (var index = 0; index < 13; index++) _this.meCards.children[index].getComponent("MauBinh.MeCard").activeDrag();
            } else _this.getPlayerHouse(seatId_2).playFxDangXep();
            break;

           case MauBinh_Cmd_1.default.Code.KET_THUC:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedEndGame(data);
            _this.actionHoldRoom();
            _this.unschedule(_this.timeoutBetting);
            _this.actionBetting.active = false;
            _this.btnSoChi.active = false;
            _this.btnCombining.active = false;
            _this.tableCurrentChi.active = false;
            for (var index = 0; index < 13; index++) {
              _this.meCards.children[index].getComponent("MauBinh.MeCard").offDrag();
              _this.meCards.children[index].getComponent("MauBinh.MeCard").resetState();
            }
            var playerResultList = res["playerResultList"];
            var timeEndGame = res["timeEndGame"];
            _this.unschedule(_this.intervalBetting);
            _this.actionBetting.active = false;
            for (var index = 0; index < playerResultList.length; index++) {
              var result = playerResultList[index];
              var seatId_3 = _this.findPlayerSeatByPos(result.chairIndex);
              if (-1 != seatId_3 && 0 == seatId_3) {
                var totalCards = [ result.chi3[0], result.chi3[1], result.chi3[2], result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4], result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4] ];
                for (var a = 0; a < 13; a++) {
                  var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(totalCards[a]);
                  _this.meCards.children[a].children[1].getComponent(cc.Sprite).spriteFrame = _this.spriteCards[spriteCardId];
                }
                Configs_1.default.Login.Coin = result.currentMoney;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
              }
            }
            for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
              _this.getPlayerHouse(index).resetResultGame();
              _this.getPlayerHouse(index).prepareFxAction();
            }
            _this.getPlayerHouse(0).scaleCardReal(.45);
            _this.soChi(1, playerResultList);
            break;

           case MauBinh_Cmd_1.default.Code.CHIA_BAI:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedChiaBai(data);
            _this.btnSoChi.active = false;
            _this.btnCombining.active = false;
            var cardList_1 = res["cardList"];
            var mauBinh_1 = res["mauBinh"];
            var gameId = res["gameId"];
            var countdown_1 = res["countdown"];
            clearTimeout(_this.timeoutBetting);
            _this.timeoutBetting = setTimeout(function() {
              _this.startBettingCountDown(countdown_1);
            }, 3e3);
            _this.currentCard = cardList_1;
            var arrChiCuoi = [ _this.currentCard[0], _this.currentCard[1], _this.currentCard[2] ];
            var arrChiGiua = [ _this.currentCard[3], _this.currentCard[4], _this.currentCard[5], _this.currentCard[6], _this.currentCard[7] ];
            var arrChiDau = [ _this.currentCard[8], _this.currentCard[9], _this.currentCard[10], _this.currentCard[11], _this.currentCard[12] ];
            _this.logCard(_this.currentCard);
            _this.logCard(arrChiCuoi);
            _this.logCard(arrChiGiua);
            _this.logCard(arrChiDau);
            var arrSeatExist = _this.getNumPlayers();
            var numPlayer_1 = arrSeatExist.length;
            var cardDeal_1 = 4;
            for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER * cardDeal_1; index++) {
              _this.cardsDeal.children[index].active = !(index >= numPlayer_1 * cardDeal_1);
              _this.cardsDeal.children[index].setPosition(0, 0);
            }
            var timeShip = .1;
            for (var a = 0; a < cardDeal_1; a++) for (var b = 0; b < numPlayer_1; b++) {
              var seatId_4 = arrSeatExist[b];
              if (-1 !== seatId_4) {
                var card4Me = _this.cardsDeal.children[a * numPlayer_1 + b];
                var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[seatId_4].position.x, _this.groupPlayers.children[seatId_4].position.y);
                card4Me.runAction(cc.sequence(cc.delayTime((a * numPlayer_1 + b) * timeShip), cc.moveTo(.2, rawPlayerPos)));
              }
            }
            var delayOver2Under = .2;
            var maxDelay = ((cardDeal_1 - 1) * numPlayer_1 + (numPlayer_1 - 1)) * timeShip;
            var timeUnderLayer = 1e3 * (maxDelay + .2 + delayOver2Under);
            clearTimeout(_this.timeoutChiaBaiDone);
            _this.timeoutChiaBaiDone = setTimeout(function() {
              for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER * cardDeal_1; index++) _this.cardsDeal.children[index].active = false;
              for (var index = 0; index < numPlayer_1; index++) {
                var seatId_5 = arrSeatExist[index];
                if (-1 !== seatId_5) if (0 == seatId_5) {
                  _this.getPlayerHouse(seatId_5).resetCardReady(seatId_5);
                  _this.getPlayerHouse(seatId_5).showCardReal(false);
                  _this.getPlayerHouse(seatId_5).showCardReady(true);
                  _this.getPlayerHouse(0).prepareToTransform();
                  for (var a = 0; a < 13; a++) {
                    var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(cardList_1[a]);
                    var cardOpen = _this.meCards.children[a];
                    cardOpen.active = true;
                    cardOpen.getComponent("MauBinh.MeCard").setupCard({
                      pos: a,
                      is_Upper: false,
                      card: cardList_1[a]
                    }, _this.spriteCards[spriteCardId]);
                    _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId], 0);
                  }
                  _this.actionAutoBinhSoChi();
                  _this.btnSoChi.active = true;
                  var isGood = mauBinh_1 != MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG;
                  var typeName = _this.getBinhName(mauBinh_1);
                  _this.getPlayerHouse(0).resetResultGame();
                  mauBinh_1 != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG && _this.getPlayerHouse(0).playFxResultGeneral(0, isGood, typeName, 0);
                  for (var index_1 = 0; index_1 < numPlayer_1; index_1++) 0 != arrSeatExist[index_1] && _this.getPlayerHouse(arrSeatExist[index_1]).playFxDangXep();
                  var x = new MauBinh_DetectPlayerCards_1.default();
                  x.initCard(_this.currentCard);
                  var result = x.getPlayerCardsInfo(_this.isTinhAce);
                  var arrChiCuoi_1 = [ _this.currentCard[0], _this.currentCard[1], _this.currentCard[2] ];
                  var arrChiGiua_1 = [ _this.currentCard[3], _this.currentCard[4], _this.currentCard[5], _this.currentCard[6], _this.currentCard[7] ];
                  var arrChiDau_1 = [ _this.currentCard[8], _this.currentCard[9], _this.currentCard[10], _this.currentCard[11], _this.currentCard[12] ];
                  _this.highLightCards(3, result.chiCuoi, arrChiCuoi_1);
                  _this.highLightCards(2, result.chiGiua, arrChiGiua_1);
                  _this.highLightCards(1, result.chiDau, arrChiDau_1);
                  _this.tableCurrentChi.active = true;
                  _this.tableCurrentChi.children[1].getComponent(cc.Label).string = "1. " + _this.getChiName(result.chiDau);
                  _this.tableCurrentChi.children[2].getComponent(cc.Label).string = "2. " + _this.getChiName(result.chiGiua);
                  _this.tableCurrentChi.children[3].getComponent(cc.Label).string = "3. " + _this.getChiName(result.chiCuoi);
                } else {
                  _this.getPlayerHouse(seatId_5).showCardReal(true);
                  _this.getPlayerHouse(seatId_5).showCardReady(false);
                }
              }
            }, timeUnderLayer);
            break;

           case MauBinh_Cmd_1.default.Code.TU_DONG_BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedAutoStart(data);
            if (res.isAutoStart) {
              _this.startWaittingCountDown(res.timeAutoStart);
              _this.btnSoChi.active = false;
              _this.btnCombining.active = false;
              _this.tableCurrentChi.active = false;
              _this.resetPlayersPlaying();
              for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) _this.getPlayerHouse(index).resetResultGame();
              _this.fxSoChiTotal.stopAllActions();
              _this.fxSoChiTotal.active = false;
            }
            break;

           case MauBinh_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedGameInfo(data);
            _this.closeUIRoom();
            _this.showUIPlaying();
            _this.closeUIChat();
            var myChair = res["myChair"];
            var gameState = res["gameState"];
            var gameAction = res["gameAction"];
            var countDownTime = res["countDownTime"];
            var moneyBet = res["moneyBet"];
            var moneyType = res["moneyType"];
            var gameId = res["gameId"];
            var roomId = res["roomId"];
            var rule = res["rule"];
            var hasInfo = res["hasInfo"];
            var players = res["players"];
            _this.labelRoomId.string = "Chinese Poker - \u1021\u1001\u1014\u103a\u1038: " + roomId;
            _this.labelRoomBet.string = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038\u1015\u1019\u102c\u100f: " + Utils_1.default.formatNumber(moneyBet) + "$";
            _this.currentRoomBet = moneyBet;
            _this.isTinhAce = 1 == rule;
            _this.currentCard = players[myChair].cardList;
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
              _this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
              if (findPos > -1) {
                _this.setupSeatPlayer(seatId, {
                  nickName: players[findPos].nickName,
                  avatar: parseInt(players[findPos].avatar),
                  money: players[findPos].currentMoney
                });
                if (players[findPos].status == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                  configPlayer[seatId].isViewer = true;
                  _this.getPlayerHouse(seatId).setIsViewer(true);
                  _this.getPlayerHouse(seatId).playFxViewer();
                } else {
                  configPlayer[seatId].isViewer = false;
                  _this.getPlayerHouse(seatId).setIsViewer(false);
                  if (0 != seatId) {
                    _this.getPlayerHouse(seatId).showCardReady(false);
                    _this.getPlayerHouse(seatId).showCardReal(true);
                    players[findPos].sochi ? _this.getPlayerHouse(seatId).playFxXepXong() : _this.getPlayerHouse(seatId).playFxDangXep();
                  } else {
                    _this.btnSoChi.active = !players[findPos].sochi;
                    _this.btnCombining.active = players[findPos].sochi;
                  }
                }
              } else {
                _this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
              }
            }
            if (_this.currentCard.length > 0) {
              _this.getPlayerHouse(0).showCardReady(false);
              _this.getPlayerHouse(0).prepareToTransform();
              for (var a = 0; a < _this.currentCard.length; a++) {
                var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(_this.currentCard[a]);
                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId], 0);
              }
            }
            gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING && _this.startBettingCountDown(countDownTime);
            break;

           case MauBinh_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
            var outChair = res["outChair"];
            var isOutRoom = res["isOutRoom"];
            var seatId_6 = _this.findPlayerSeatByPos(outChair);
            -1 !== seatId_6 && (isOutRoom ? _this.getPlayerHouse(seatId_6).showNotify("\u1011\u103d\u1000\u103a\u1001\u103d\u102c\u1010\u1031\u102c\u1037\u1019\u100a\u103a\u104b !") : _this.getPlayerHouse(seatId_6).showNotify("\u1021\u1006\u102f\u1036\u1038\u1021\u1011\u102d \u1000\u1005\u102c\u1038\u1015\u102b\u104b !"));
            break;

           case MauBinh_Cmd_1.default.Code.MOI_DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedMoiDatCuoc(data);
            _this.startBettingCountDown(res.timeDatCuoc);
            if (0 == _this.seatOwner) {
              _this.btnSoChi.active = false;
              _this.btnCombining.active = false;
            } else {
              _this.btnSoChi.active = true;
              _this.btnCombining.active = true;
            }
            break;

           case MauBinh_Cmd_1.default.Code.CHEAT_CARDS:
           case MauBinh_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
           case MauBinh_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
            App_1.default.instance.showLoading(false);
            break;

           case MauBinh_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedJoinRoomSucceed(data);
            _this.closeUIRoom();
            _this.setupMatch(res);
            break;

           case MauBinh_Cmd_1.default.Code.LEAVE_GAME:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedUserLeaveRoom(data);
            var chair = res["chair"];
            var seatId_7 = _this.findPlayerSeatByPos(chair);
            if (-1 !== seatId_7) {
              for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].seatId == seatId_7) {
                configPlayer[index].playerId = -1;
                configPlayer[index].isViewer = true;
              }
              _this.getPlayerHouse(seatId_7).resetPlayerInfo(seatId_7);
              _this.getPlayerHouse(seatId_7).showBtnInvite(true);
              var arrSeatExistLast = _this.getNumPlayers();
              1 == arrSeatExistLast.length && _this.resetPlayersPlaying();
              if (0 == seatId_7) {
                _this.UI_Playing.active = false;
                _this.UI_ChooseRoom.active = true;
                _this.refeshListRoom();
              }
            }
            break;

           case MauBinh_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedKickOff(data);
            break;

           case MauBinh_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedUserJoinRoom(data);
            var info = res["info"];
            var myChair = res["myChair"];
            var uStatus = res["uStatus"];
            for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].playerPos == myChair) {
              var seatId = configPlayer[index].seatId;
              _this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
              var customPlayerInfo = {
                avatar: info["avatar"],
                nickName: info["nickName"],
                money: info["money"]
              };
              _this.setupSeatPlayer(seatId, customPlayerInfo);
              if (uStatus == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                configPlayer[seatId].isViewer = true;
                _this.getPlayerHouse(seatId).setIsViewer(true);
                _this.getPlayerHouse(seatId).playFxViewer();
              } else {
                configPlayer[seatId].isViewer = false;
                _this.getPlayerHouse(seatId).setIsViewer(false);
              }
            }
            break;

           case MauBinh_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
            break;

           case MauBinh_Cmd_1.default.Code.UPDATE_MATCH:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedUpdateMatch(data);
            var myChair = res["myChair"];
            var hasInfo = res["hasInfo"];
            var infos = res["infos"];
            for (var index = 0; index < hasInfo.length; index++) {
              var pos = configPlayer[index]["playerPos"];
              if (hasInfo[pos]) {
                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                if (infos[pos]["status"] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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

           case MauBinh_Cmd_1.default.Code.CHAT_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new MauBinh_Cmd_1.default.ReceivedChatRoom(data);
            var chair = res["chair"];
            var isIcon = res["isIcon"];
            var content = res["content"];
            if (isIcon) {
              var seatId_8 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_8 && _this.getPlayerHouse(seatId_8).showChatEmotion(content);
            } else {
              var seatId_9 = _this.findPlayerSeatByPos(chair);
              -1 != seatId_9 && _this.getPlayerHouse(seatId_9).showChatMsg(content);
            }
          }
        }, this);
      };
      MauBinhController.prototype.actionLeaveRoom = function() {
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdSendRequestLeaveGame());
      };
      MauBinhController.prototype.actionHoldRoom = function() {
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdSendHoldRoom());
      };
      MauBinhController.prototype.actionBaoBinh = function() {
        this.btnSoChi.active = false;
        this.btnCombining.active = true;
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendBaoBinh());
      };
      MauBinhController.prototype.actionBinhSoChi = function() {
        var arrChiCuoi = [ this.currentCard[0], this.currentCard[1], this.currentCard[2] ];
        var arrChiGiua = [ this.currentCard[3], this.currentCard[4], this.currentCard[5], this.currentCard[6], this.currentCard[7] ];
        var arrChiDau = [ this.currentCard[8], this.currentCard[9], this.currentCard[10], this.currentCard[11], this.currentCard[12] ];
        this.logCard(this.currentCard);
        this.logCard(arrChiCuoi);
        this.logCard(arrChiGiua);
        this.logCard(arrChiDau);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendBinhSoChi(arrChiDau, arrChiGiua, arrChiCuoi));
      };
      MauBinhController.prototype.actionAutoBinhSoChi = function() {
        return;
        var arrChiCuoi;
        var arrChiGiua;
        var arrChiDau;
      };
      MauBinhController.prototype.actionXepLai = function() {
        this.btnSoChi.active = true;
        this.btnCombining.active = false;
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendXepLai());
      };
      MauBinhController.prototype.cardSelect = function(card_info, card_pos, card_Id) {
        this.cardMove.active = true;
        this.cardMove.setPosition(card_pos.x, card_pos.y - 95);
        var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(card_info.card);
        this.cardMove.children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardMoveId = card_Id;
        this.cardMoveValue = card_info.card;
        this.getPlayerHouse(0).resetResultGame();
        for (var a = 0; a < 13; a++) {
          this.meCards.children[a].getComponent("MauBinh.MeCard").setCardShadow(false);
          this.getPlayerHouse(0).shadowCard(a, false);
        }
      };
      MauBinhController.prototype.showMoveTarget = function(targetName) {
        for (var index = 0; index < 13; index++) {
          var cardTarget = this.meCards.children[index].getComponent("MauBinh.MeCard");
          if (index == targetName) {
            cardTarget.setCardShadow(false);
            cardTarget.setCardFocus(true);
          } else {
            cardTarget.setCardShadow(true);
            cardTarget.setCardFocus(false);
          }
        }
      };
      MauBinhController.prototype.completeMoveCard = function(targetName) {
        var cardFrom = this.currentCard[this.cardMoveId];
        var cardTo = this.currentCard[targetName];
        this.currentCard[this.cardMoveId] = cardTo;
        this.currentCard[targetName] = cardFrom;
        for (var index = 0; index < 13; index++) {
          var card_id = this.currentCard[index];
          var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(card_id);
          var src = this.spriteCards[spriteCardId];
          var card_Open = this.meCards.children[index];
          card_Open.active = true;
          card_Open.getComponent("MauBinh.MeCard").updateCard(card_id, src);
        }
        this.cardMoveValue = "";
        this.cardMoveId = -1;
        var x = new MauBinh_DetectPlayerCards_1.default();
        x.initCard(this.currentCard);
        var result = x.getPlayerCardsInfo(this.isTinhAce);
        var isGood = result.cardType != MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG;
        var typeName = this.getBinhName(result.cardType);
        this.getPlayerHouse(0).resetResultGame();
        result.cardType != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG && this.getPlayerHouse(0).playFxResultGeneral(0, isGood, typeName, 0);
        var arrChiCuoi = [ this.currentCard[0], this.currentCard[1], this.currentCard[2] ];
        var arrChiGiua = [ this.currentCard[3], this.currentCard[4], this.currentCard[5], this.currentCard[6], this.currentCard[7] ];
        var arrChiDau = [ this.currentCard[8], this.currentCard[9], this.currentCard[10], this.currentCard[11], this.currentCard[12] ];
        this.logCard(this.currentCard);
        this.logCard(arrChiCuoi);
        this.logCard(arrChiGiua);
        this.logCard(arrChiDau);
        this.highLightCards(3, result.chiCuoi, arrChiCuoi);
        this.highLightCards(2, result.chiGiua, arrChiGiua);
        this.highLightCards(1, result.chiDau, arrChiDau);
        this.tableCurrentChi.active = true;
        this.tableCurrentChi.children[1].getComponent(cc.Label).string = "1. " + this.getChiName(result.chiDau);
        this.tableCurrentChi.children[2].getComponent(cc.Label).string = "2. " + this.getChiName(result.chiGiua);
        this.tableCurrentChi.children[3].getComponent(cc.Label).string = "3. " + this.getChiName(result.chiCuoi);
        this.actionAutoBinhSoChi();
      };
      MauBinhController.prototype.highLightCards = function(chiId, groupKind, cardList) {
        var start = -1;
        var end = -1;
        if (3 == chiId) {
          start = 0;
          end = 3;
        } else if (2 == chiId) {
          start = 3;
          end = 8;
        } else {
          start = 8;
          end = 13;
        }
        for (var a = start; a < end; a++) this.getPlayerHouse(0).shadowCard(a, true);
        switch (groupKind) {
         case MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH:
         case MauBinh_Cmd_1.default.Code.GROUP_CU_LU:
         case MauBinh_Cmd_1.default.Code.GROUP_THUNG:
         case MauBinh_Cmd_1.default.Code.GROUP_SANH:
          for (var a = start; a < end; a++) this.getPlayerHouse(0).shadowCard(a, false);
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_TU_QUY:
         case MauBinh_Cmd_1.default.Code.GROUP_SAM_CO:
         case MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI:
         case MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU:
          for (var a_1 = 0; a_1 < cardList.length - 1; a_1++) for (var b = a_1 + 1; b < cardList.length; b++) if (MauBinh_CardUtil_1.default.getNumber(cardList[a_1]) == MauBinh_CardUtil_1.default.getNumber(cardList[b])) {
            this.getPlayerHouse(0).shadowCard(a_1 + start, false);
            this.getPlayerHouse(0).shadowCard(b + start, false);
          }
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_THU:
          for (var a_2 = 0; a_2 < cardList.length - 1; a_2++) for (var b = a_2 + 1; b < cardList.length; b++) if (MauBinh_CardUtil_1.default.getNumber(cardList[a_2]) == MauBinh_CardUtil_1.default.getNumber(cardList[b])) {
            this.getPlayerHouse(0).shadowCard(a_2 + start, false);
            this.getPlayerHouse(0).shadowCard(b + start, false);
          }
        }
      };
      MauBinhController.prototype.initConfigPlayer = function() {
        configPlayer = [];
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) configPlayer.push({
          seatId: index,
          playerId: -1,
          playerPos: -1,
          isViewer: true
        });
      };
      MauBinhController.prototype.resetPlayersPlaying = function() {
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) this.getPlayerHouse(index).resetMatchHistory(index);
      };
      MauBinhController.prototype.setupSeatPlayer = function(seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.money);
      };
      MauBinhController.prototype.findPlayerSeatByUid = function(uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerId === uid && (seat = configPlayer[index].seatId);
        return seat;
      };
      MauBinhController.prototype.findPlayerPosBySeat = function(seat) {
        return configPlayer[seat].playerPos;
      };
      MauBinhController.prototype.findPlayerSeatByPos = function(pos) {
        if (-1 == pos) return -1;
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerPos === pos && (seat = configPlayer[index].seatId);
        return seat;
      };
      MauBinhController.prototype.getPlayerHouse = function(seatId) {
        return this.groupPlayers.children[seatId].getComponent("MauBinh.Player");
      };
      MauBinhController.prototype.getNumPlayers = function() {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) -1 === configPlayer[index].playerId || configPlayer[index].isViewer || playerPosEntry.push(configPlayer[index].seatId);
        return playerPosEntry;
      };
      MauBinhController.prototype.getBinhName = function(maubinhType) {
        var name = "";
        switch (maubinhType) {
         case MauBinh_Cmd_1.default.Code.TYPE_SANH_RONG:
          name = "Dragon Hall";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_MUOI_BA_CAY_DONG_MAU:
          name = "Thirteen trees of the same color";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_MUOI_HAI_CAY_DONG_MAU:
          name = "Twelve Trees of the same Color";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_THUNG:
          name = "3\u101b\u1031\u1006\u103d\u1032\u1001\u103b";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_SANH:
          name = "3\u1010\u100a\u1037\u103a\u1010\u100a\u1037\u103a";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_LUC_PHE_BON:
          name = "6\u1010\u103d\u1032";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG:
          name = "Binh Thuong";
          break;

         case MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG:
          name = "\u101a\u102d\u102f\u1005\u102d\u1019\u1037\u103a\u1001\u103c\u1004\u103a\u1038\u104b";
        }
        return name;
      };
      MauBinhController.prototype.needSoChi = function(playerResultList) {
        var a = 0;
        for (var b = 0; b < playerResultList.length; b++) playerResultList[b].maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG && a++;
        return 2 <= a;
      };
      MauBinhController.prototype.needShowMoneyWhenSoChi = function(playerResultList) {
        for (var a = 0; a < playerResultList.length; a++) {
          var b = playerResultList[a];
          if (0 == b.chairIndex && b.maubinhType != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) return !1;
        }
        return !0;
      };
      MauBinhController.prototype.needBatSap = function(playerResultList) {
        for (var a = 0; a < playerResultList.length; a++) if (0 != playerResultList[a].moneySap) return !0;
        return !1;
      };
      MauBinhController.prototype.soChi = function(chiId, playerResultList) {
        var _this = this;
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
          this.getPlayerHouse(index).resetResultChi(1);
          this.getPlayerHouse(index).resetResultChi(2);
          this.getPlayerHouse(index).resetResultChi(3);
        }
        var isNeedSoChi = this.needSoChi(playerResultList);
        var isNeedShowMoneyWhenSoChi = this.needShowMoneyWhenSoChi(playerResultList);
        var _loop_1 = function(index) {
          var result = playerResultList[index];
          var chair = result["chairIndex"];
          var totalCards = [ result.chi3[0], result.chi3[1], result.chi3[2], result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4], result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4] ];
          var x = new MauBinh_DetectPlayerCards_1.default();
          x.initCard(totalCards);
          var playerCardInfo = x.getPlayerCardsInfo(this_1.isTinhAce);
          var seatId = this_1.findPlayerSeatByPos(chair);
          if (-1 != seatId) if (result.maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG && isNeedSoChi) {
            var spriteId = -1;
            var goldChi = result.moneyInChi[chiId - 1];
            spriteId = 1 == chiId ? playerCardInfo.chiDau : 2 == chiId ? playerCardInfo.chiGiua : playerCardInfo.chiCuoi;
            this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[spriteId]);
            isNeedShowMoneyWhenSoChi && this_1.getPlayerHouse(seatId).playFxGoldSoChi(goldChi);
            if (3 == chiId) {
              for (var a = 0; a < 3; a++) {
                var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi3[a]);
                this_1.getPlayerHouse(seatId).prepareCardReal(a);
                this_1.getPlayerHouse(seatId).transformToCardReal(a, this_1.spriteCards[spriteCardId], seatId);
              }
              setTimeout(function() {
                var totalGoldChi = result.moneyInChi[0] + result.moneyInChi[1] + result.moneyInChi[2];
                totalGoldChi >= 0 ? _this.getPlayerHouse(seatId).playFxWinSoChi(totalGoldChi) : _this.getPlayerHouse(seatId).playFxLoseSoChi(totalGoldChi);
              }, 2500);
            } else if (2 == chiId) for (var a = 0; a < 5; a++) {
              var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi2[a]);
              this_1.getPlayerHouse(seatId).prepareCardReal(a + 3);
              this_1.getPlayerHouse(seatId).transformToCardReal(a + 3, this_1.spriteCards[spriteCardId], seatId);
            } else for (var a = 0; a < 5; a++) {
              var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi1[a]);
              this_1.getPlayerHouse(seatId).prepareCardReal(a + 8);
              this_1.getPlayerHouse(seatId).transformToCardReal(a + 8, this_1.spriteCards[spriteCardId], seatId);
            }
          } else if (1 == chiId) {
            if (result.maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) {
              playerCardInfo.chiDau < 2 && this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiDau]);
              playerCardInfo.chiGiua < 2 && this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiGiua]);
              playerCardInfo.chiGiua == MauBinh_Cmd_1.default.Code.GROUP_SAM_CO && this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiCuoi]);
            } else {
              var isGood = result.maubinhType != MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG;
              var typeName = this_1.getBinhName(result.maubinhType);
              this_1.getPlayerHouse(seatId).resetResultGame();
              this_1.getPlayerHouse(seatId).playFxResultGeneral(seatId, isGood, typeName, 1);
            }
            var totalCards_1 = [ result.chi3[0], result.chi3[1], result.chi3[2], result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4], result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4] ];
            for (var a_3 = 0; a_3 < 13; a_3++) {
              var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(totalCards_1[a_3]);
              if (0 == seatId) this_1.meCards.children[a_3].children[1].getComponent(cc.Sprite).spriteFrame = this_1.spriteCards[spriteCardId]; else {
                this_1.getPlayerHouse(seatId).prepareToTransform();
                this_1.getPlayerHouse(seatId).transformToCardReal(a_3, this_1.spriteCards[spriteCardId], seatId);
              }
            }
          }
          if (0 == seatId) for (var a_4 = 0; a_4 < 13; a_4++) {
            this_1.getPlayerHouse(0).shadowCard(a_4, false);
            this_1.meCards.children[a_4].getComponent("MauBinh.MeCard").setCardShadow(false);
          }
        };
        var this_1 = this;
        for (var index = 0; index < playerResultList.length; index++) _loop_1(index);
        if (isNeedSoChi) {
          this.node.stopAllActions();
          this.node.runAction(cc.sequence(cc.delayTime(2.5), cc.callFunc(function() {
            if (chiId < 3) _this.soChi(chiId + 1, playerResultList); else {
              _this.showGoldResult(playerResultList, 2e3);
              _this.batSap(playerResultList);
            }
          })));
        } else {
          this.showGoldResult(playerResultList, 1e3);
          this.batSap(playerResultList);
        }
      };
      MauBinhController.prototype.showGoldResult = function(playerResultList, delayTime) {
        var _this = this;
        setTimeout(function() {
          for (var index = 0; index < playerResultList.length; index++) {
            var result = playerResultList[index];
            var chair = result["chairIndex"];
            var seatId = _this.findPlayerSeatByPos(chair);
            if (-1 != seatId) {
              _this.getPlayerHouse(seatId).resetResultGame();
              result.moneyCommon >= 0 ? _this.getPlayerHouse(seatId).fxWin({
                moneyChange: result.moneyCommon,
                money: 0 == result.currentMoney ? -1 : result.currentMoney
              }) : _this.getPlayerHouse(seatId).fxLose({
                moneyChange: result.moneyCommon,
                money: 0 == result.currentMoney ? -1 : result.currentMoney
              });
            }
          }
        }, delayTime);
      };
      MauBinhController.prototype.batSap = function(playerResultList) {
        var _this = this;
        if (this.needBatSap(playerResultList)) {
          var countWin = 0;
          var countLose = 0;
          for (var index = 0; index < playerResultList.length; index++) {
            var seatId = this.findPlayerSeatByPos(playerResultList[index].chairIndex);
            -1 != seatId && 0 != seatId && (playerResultList[index].moneySap > 0 ? countLose += 1 : playerResultList[index].moneySap < 0 && (countWin += 1));
          }
          this.fxSoChiTotal.active = false;
          for (var index = 0; index < playerResultList.length; index++) {
            var seatId = this.findPlayerSeatByPos(playerResultList[index].chairIndex);
            if (0 == seatId) {
              if (countLose > 0) {
                this.fxSoChiTotal.active = true;
                this.fxSoChiTotal.getComponent(cc.Sprite).spriteFrame = 3 == countLose ? this.spriteSoChiTotal[1] : this.spriteSoChiTotal[2];
                this.fxSoChiTotal.runAction(cc.sequence(cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1), cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1)));
                setTimeout(function() {
                  _this.fxSoChiTotal.stopAllActions();
                  _this.fxSoChiTotal.active = false;
                }, 2e3);
              }
              if (countWin > 0) {
                this.fxSoChiTotal.active = true;
                if (3 == countWin) {
                  this.fxSoChiTotal.getComponent(cc.Sprite).spriteFrame = this.spriteSoChiTotal[1];
                  this.fxSoChiTotal.runAction(cc.sequence(cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1), cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1)));
                  setTimeout(function() {
                    _this.fxSoChiTotal.stopAllActions();
                    _this.fxSoChiTotal.active = false;
                  }, 2e3);
                }
              }
            } else playerResultList[index].moneySap < 0 && this.getPlayerHouse(seatId).playFxSoChiTotal(this.spriteSoChiTotal[2]);
          }
        } else this.soAt();
      };
      MauBinhController.prototype.soAt = function() {
        true;
      };
      MauBinhController.prototype.getChiName = function(id) {
        var name = "";
        switch (id) {
         case MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH:
          name = "\u1016\u103c\u1031\u102c\u1004\u1037\u103a\u1006\u1031\u1038";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_TU_QUY:
          name = "\u101c\u1031\u1038\u1019\u103b\u102d\u102f\u1038";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_CU_LU:
          name = "\u1021\u102d\u1019\u103a\u1021\u1015\u103c\u100a\u1037\u103a\u1015\u1032";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_THUNG:
          name = "\u101b\u1031\u1006\u103d\u1032\u1001\u103b";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_SANH:
          name = "\u1010\u100a\u1037\u103a\u1010\u100a\u1037\u103a";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_SAM_CO:
          name = "\u1010\u1005\u103a\u1019\u103b\u102d\u102f\u1038";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_THU:
          name = "\u1014\u103e\u1005\u103a\u101a\u1031\u102c\u1000\u103a\u1010\u103d\u1032";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI:
          name = "\u1010\u103d\u1032";
          break;

         case MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU:
          name = "\u1000\u1010\u103a\u1019\u103c\u1004\u1037\u103a";
        }
        return name;
      };
      MauBinhController.prototype.logCard = function(arrCard) {
        var result = "";
        for (var index = 0; index < arrCard.length; index++) {
          var num = Math.floor(arrCard[index] / 4) + 2;
          var face = arrCard[index] % 4;
          switch (num) {
           case 14:
            result += "A";
            break;

           case 13:
            result += "K";
            break;

           case 12:
            result += "Q";
            break;

           case 11:
            result += "J";
            break;

           default:
            result += num;
          }
          switch (face) {
           case 0:
            result += "\u2660 ";
            break;

           case 1:
            result += "\u2663 ";
            break;

           case 2:
            result += "\u2666 ";
            break;

           case 3:
            result += "\u2665 ";
          }
        }
      };
      MauBinhController.prototype.update = function(dt) {};
      var MauBinhController_1;
      MauBinhController.instance = null;
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "UI_ChooseRoom", void 0);
      __decorate([ property(cc.Label) ], MauBinhController.prototype, "labelNickName", void 0);
      __decorate([ property(cc.Label) ], MauBinhController.prototype, "labelCoin", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "contentListRooms", void 0);
      __decorate([ property(cc.Prefab) ], MauBinhController.prototype, "prefabItemRoom", void 0);
      __decorate([ property(cc.ScrollView) ], MauBinhController.prototype, "scrollListRoom", void 0);
      __decorate([ property(cc.EditBox) ], MauBinhController.prototype, "edtFindRoom", void 0);
      __decorate([ property(cc.Toggle) ], MauBinhController.prototype, "btnHideRoomFull", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "meCards", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "groupPlayers", void 0);
      __decorate([ property(cc.SpriteFrame) ], MauBinhController.prototype, "spriteCards", void 0);
      __decorate([ property(cc.SpriteFrame) ], MauBinhController.prototype, "spriteCardBack", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "cardsDeal", void 0);
      __decorate([ property(cc.Button) ], MauBinhController.prototype, "btnLeaveRoom", void 0);
      __decorate([ property(cc.Label) ], MauBinhController.prototype, "labelRoomId", void 0);
      __decorate([ property(cc.Label) ], MauBinhController.prototype, "labelRoomBet", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "actionBetting", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "cardMove", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "suggestTarget", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "btnSoChi", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "btnCombining", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "tableCurrentChi", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "notifyTimeStart", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "notifyTimeEnd", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "notifyTimeBet", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "fxSoChiTotal", void 0);
      __decorate([ property(cc.SpriteFrame) ], MauBinhController.prototype, "spriteSoChiTotal", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.EditBox) ], MauBinhController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "popupNodity", void 0);
      __decorate([ property(cc.Label) ], MauBinhController.prototype, "labelNotifyContent", void 0);
      __decorate([ property(cc.Node) ], MauBinhController.prototype, "popupGuide", void 0);
      __decorate([ property(cc.SpriteFrame) ], MauBinhController.prototype, "spriteGroupCard", void 0);
      MauBinhController = MauBinhController_1 = __decorate([ ccclass ], MauBinhController);
      return MauBinhController;
    }(cc.Component);
    exports.default = MauBinhController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./MauBinh.CardUtil": "MauBinh.CardUtil",
    "./MauBinh.Cmd": "MauBinh.Cmd",
    "./MauBinh.DetectPlayerCards": "MauBinh.DetectPlayerCards",
    "./MauBinh.NetworkClient": "MauBinh.NetworkClient"
  } ],
  "MauBinh.DetectGroupCards": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9b67tXcw5LPJl58XvdhaB8", "MauBinh.DetectGroupCards");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.maubinh = void 0;
    var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
    var maubinh;
    (function(maubinh) {
      var DetectGroupCards = function() {
        function DetectGroupCards() {
          this.groupKind = -1;
          this.cardList = [];
          this.valueList = [];
        }
        DetectGroupCards.prototype.getGroupCardsInfo = function() {
          this.groupKind = this.getGroupKind();
          return this.groupKind;
        };
        DetectGroupCards.prototype.getGroupKind = function() {
          if (1 == this.cardList.length) return MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU;
          if (3 == this.cardList.length) {
            if (this.isSamCo()) return MauBinh_Cmd_1.default.Code.GROUP_SAM_CO;
            if (this.isMotDoi()) return MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI;
          }
          if (5 == this.cardList.length) {
            if (this.isThungPhaSanh()) return MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH;
            if (this.isTuQuy()) return MauBinh_Cmd_1.default.Code.GROUP_TU_QUY;
            if (this.isCuLu()) return MauBinh_Cmd_1.default.Code.GROUP_CU_LU;
            if (this.isThung()) return MauBinh_Cmd_1.default.Code.GROUP_THUNG;
            if (this.isSanh()) return MauBinh_Cmd_1.default.Code.GROUP_SANH;
            if (this.isSamCo()) return MauBinh_Cmd_1.default.Code.GROUP_SAM_CO;
            if (this.isThu()) return MauBinh_Cmd_1.default.Code.GROUP_THU;
            if (this.isMotDoi()) return MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI;
          }
          this.valueList = [];
          for (var a = this.getSortedCardList(), b = this.cardList.length - 1; 0 <= b; b--) this.valueList.push(a[b].getNumber());
          return MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU;
        };
        DetectGroupCards.prototype.getGroupKindLevel = function(a) {
          var b = MauBinh_Cmd_1.default.Code.LV_BINH_THUONG;
          !a || this.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH || (10 == this.valueList[0] ? b = MauBinh_Cmd_1.default.Code.LV_THUONG : 1 == this.valueList[0] && (b = MauBinh_Cmd_1.default.Code.LV_HA));
          return b;
        };
        DetectGroupCards.prototype.getSortedCardList = function() {
          var a = [];
          for (var b = 0; b < this.cardList.length; b++) a.push(this.cardList[b]);
          return a.sort(function(a, c) {
            return a.getId() - c.getId();
          });
        };
        DetectGroupCards.prototype.sortCardList = function(isIncrease) {
          isIncrease ? this.cardList.sort(function(a, c) {
            return c - a;
          }) : this.cardList.sort(function(a, c) {
            return a - c;
          });
        };
        DetectGroupCards.prototype.isThungPhaSanh = function() {
          if (5 != this.cardList.length) return !1;
          for (var a = this.getSortedCardList(), b = 1, c = 1; c < this.cardList.length; c++) a[c].getSuit() == a[c - 1].getSuit() && (a[c].getNumber() == a[c - 1].getNumber() + 1 || 2 == a[0].getNumber() && 14 == a[c].getNumber()) && b++;
          b == this.cardList.length && (this.valueList = [], 2 == a[0].getNumber() && 14 == a[a.length - 1].getNumber() ? this.valueList.push(1) : this.valueList.push(a[0].getNumber()));
          return b == this.cardList.length;
        };
        DetectGroupCards.prototype.isTuQuy = function() {
          if (5 != this.cardList.length) return !1;
          for (var a = 0; a < this.cardList.length; a++) for (var b = 1, c = 0; c < this.cardList.length; c++) if (a != c && this.cardList[a].getNumber() == this.cardList[c].getNumber() && b++, 
          4 == b) return this.valueList = [], this.valueList.push(this.cardList[a].getNumber()), 
          !0;
          return !1;
        };
        DetectGroupCards.prototype.isCuLu = function() {
          if (5 != this.cardList.length) return !1;
          var a = this.getSortedCardList(), b = !1;
          a[0].getNumber() == a[1].getNumber() && (a[1].getNumber() == a[2].getNumber() && a[3].getNumber() == a[4].getNumber() && (b = !0, 
          this.valueList = [], this.valueList.push(a[0].getNumber()), this.valueList.push(a[3].getNumber())), 
          a[2].getNumber() == a[3].getNumber() && a[3].getNumber() == a[4].getNumber() && (b = !0, 
          this.valueList = [], this.valueList.push(a[2].getNumber()), this.valueList.push(a[0].getNumber())));
          return b;
        };
        DetectGroupCards.prototype.isThung = function() {
          var a = this.getSortedCardList();
          if (5 != this.cardList.length) return !1;
          for (var b = 1; b < this.cardList.length; b++) if (a[b].getSuit() != a[0].getSuit()) return !1;
          this.valueList = [];
          for (b = this.cardList.length - 1; 0 <= b; b--) this.valueList.push(a[b].getNumber());
          return !0;
        };
        DetectGroupCards.prototype.isSanh = function() {
          if (5 != this.cardList.length) return !1;
          for (var a = this.getSortedCardList(), b = 1, c = 1; c < this.cardList.length; c++) (a[c].getNumber() == a[c - 1].getNumber() + 1 || 2 == a[0].getNumber() && 14 == a[c].getNumber()) && b++;
          b == this.cardList.length && (this.valueList = [], 2 == a[0].getNumber() && 14 == a[a.length - 1].getNumber() ? this.valueList.push(1) : this.valueList.push(a[0].getNumber()));
          return b == this.cardList.length;
        };
        DetectGroupCards.prototype.isSamCo = function() {
          for (var a = 0; a < this.cardList.length; a++) {
            for (var b = 1, c = 0; c < this.cardList.length; c++) a != c && this.cardList[a].getNumber() == this.cardList[c].getNumber() && b++;
            if (3 == b) return this.valueList = [], this.valueList.push(this.cardList[a].getNumber()), 
            !0;
          }
          return !1;
        };
        DetectGroupCards.prototype.isThu = function() {
          if (5 != this.cardList.length) return !1;
          for (var a = [], b = 0; b < this.cardList.length - 1; b++) if (-1 == a.indexOf(this.cardList[b].getNumber())) for (var c = b + 1; c < this.cardList.length; c++) if (this.cardList[b].getNumber() == this.cardList[c].getNumber()) {
            a.push(this.cardList[b].getNumber());
            break;
          }
          if (2 == a.length) {
            this.valueList = [];
            this.valueList.push(Math.max(a[0], a[1]));
            this.valueList.push(Math.min(a[0], a[1]));
            for (b = 0; b < this.cardList.length; b++) -1 == a.indexOf(this.cardList[b].getNumber()) && this.valueList.push(this.cardList[b].getNumber());
            return !0;
          }
          return !1;
        };
        DetectGroupCards.prototype.isMotDoi = function() {
          for (var a = [], b = 0; b < this.cardList.length - 1; b++) for (var c = b + 1; c < this.cardList.length; c++) this.cardList[b].getNumber() == this.cardList[c].getNumber() && a.push(this.cardList[b].getNumber());
          if (1 == a.length) {
            this.valueList = [];
            this.valueList.push(a[0]);
            var d = this.getSortedCardList();
            for (b = this.cardList.length - 1; 0 <= b; b--) d[b].getNumber() != a[0] && this.valueList.push(d[b].getNumber());
            return !0;
          }
          return !1;
        };
        DetectGroupCards.prototype.addCard = function(a) {
          this.cardList.push(a);
        };
        DetectGroupCards.prototype.removeCard = function(id) {
          for (var b = 0; b < this.cardList.length; b++) if (this.cardList[b] == id) {
            this.cardList.splice(b, 1);
            break;
          }
        };
        return DetectGroupCards;
      }();
      maubinh.DetectGroupCards = DetectGroupCards;
    })(maubinh = exports.maubinh || (exports.maubinh = {}));
    exports.default = maubinh.DetectGroupCards;
    cc._RF.pop();
  }, {
    "./MauBinh.Cmd": "MauBinh.Cmd"
  } ],
  "MauBinh.DetectPlayerCards": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0895cqkOZ1FQ6FEXmsgpXkF", "MauBinh.DetectPlayerCards");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.maubinh = void 0;
    var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
    var MauBinh_Card_1 = require("./MauBinh.Card");
    var MauBinh_DetectGroupCards_1 = require("./MauBinh.DetectGroupCards");
    var maubinh;
    (function(maubinh) {
      var DetectPlayerCards = function() {
        function DetectPlayerCards() {
          this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG;
          this.chiDau = new MauBinh_DetectGroupCards_1.default();
          this.chiGiua = new MauBinh_DetectGroupCards_1.default();
          this.chiCuoi = new MauBinh_DetectGroupCards_1.default();
        }
        DetectPlayerCards.prototype.initCard = function(a) {
          for (var c = 10; c < 13; c++) this.chiCuoi.addCard(new MauBinh_Card_1.default(a[c - 10], null));
          for (c = 5; c < 10; c++) this.chiGiua.addCard(new MauBinh_Card_1.default(a[c - 2], null));
          for (c = 0; c < 5; c++) this.chiDau.addCard(new MauBinh_Card_1.default(a[c + 8], null));
        };
        DetectPlayerCards.prototype.getPlayerCardsInfo = function(isTinhAce) {
          var kind_01 = this.chiDau.getGroupCardsInfo();
          var kind_02 = this.chiGiua.getGroupCardsInfo();
          var kind_03 = this.chiCuoi.getGroupCardsInfo();
          this.isSanhRong() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_SANH_RONG : isTinhAce && this.isMuoiBaCayDongMau() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_MUOI_BA_CAY_DONG_MAU : isTinhAce && this.isMuoiHaiCayDongMau() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_MUOI_HAI_CAY_DONG_MAU : this.isBaCaiThung() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_THUNG : this.isBaCaiSanh() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_SANH : this.isLucPheBon() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_LUC_PHE_BON : this.isBinhLung(isTinhAce) ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG : this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG;
          return {
            cardType: this.maubinhType,
            chiDau: kind_01,
            chiGiua: kind_02,
            chiCuoi: kind_03
          };
        };
        DetectPlayerCards.prototype.addCardToChiDau = function(a) {
          this.chiDau.addCard(a);
        };
        DetectPlayerCards.prototype.addCardToChiGiua = function(a) {
          this.chiGiua.addCard(a);
        };
        DetectPlayerCards.prototype.addCardToChiCuoi = function(a) {
          this.chiCuoi.addCard(a);
        };
        DetectPlayerCards.prototype.getChi = function(a) {
          switch (a) {
           case 1:
            return this.chiDau;

           case 2:
            return this.chiGiua;

           case 3:
            return this.chiCuoi;
          }
        };
        DetectPlayerCards.prototype.getGroupCardContainsIndex = function(a) {
          return 0 <= a && 5 > a ? this.chiDau : 10 > a ? this.chiGiua : 13 > a ? this.chiCuoi : null;
        };
        DetectPlayerCards.prototype.getAllCards = function() {
          var a = [], a = a.concat(this.chiDau.cardList), a = a.concat(this.chiGiua.cardList);
          return a.concat(this.chiCuoi.cardList);
        };
        DetectPlayerCards.prototype.swapCard = function(a, b) {
          var c = a.id;
          a.id = b.id;
          b.id = c;
        };
        DetectPlayerCards.prototype.isSanhRong = function() {
          for (var a = this.getSortedCardListFromList(this.getAllCards()), b = 0, c = 1, d = 0; d < a.length; d++) c++, 
          a[d].getNumber() == c && b++;
          return 13 == b;
        };
        DetectPlayerCards.prototype.isMuoiBaCayDongMau = function() {
          for (var a = this.getAllCards(), b = 0, c = 0, d = 0; d < a.length; d++) a[d].getColor() == MauBinh_Cmd_1.default.Code.BLACK ? b++ : c++;
          return 13 == b || 13 == c;
        };
        DetectPlayerCards.prototype.isMuoiHaiCayDongMau = function() {
          for (var a = this.getAllCards(), b = 0, c = 0, d = 0; d < a.length; d++) a[d].getColor() == MauBinh_Cmd_1.default.Code.BLACK ? b++ : c++;
          return 12 == b || 12 == c;
        };
        DetectPlayerCards.prototype.isBaCaiThung = function() {
          if (!(this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG || this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG)) {
            var a = this.chiCuoi.cardList;
            if (a[0].getSuit() == a[1].getSuit() && a[1].getSuit() == a[2].getSuit()) return !0;
          }
          return !1;
        };
        DetectPlayerCards.prototype.isBaCaiSanh = function() {
          if (!(this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH || this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH)) {
            var a = this.getSortedCardListFromList(this.chiCuoi.cardList);
            if (a[0].getNumber() + 1 == a[1].getNumber() && a[1].getNumber() + 1 == a[2].getNumber() || 2 == a[0].getNumber() && 3 == a[1].getNumber() && 14 == a[2].getNumber()) return !0;
          }
          return !1;
        };
        DetectPlayerCards.prototype.haveSauDoi = function() {
          for (var a = this.getSortedCardListFromList(this.getAllCards()), b = 0, c = 0; c < a.length; ) c + 1 < a.length && a[c + 1].getNumber() == a[c].getNumber() && (b++, 
          c++), c++;
          return 6 == b;
        };
        DetectPlayerCards.prototype.isLucPheBon = function() {
          return !(!this.haveSauDoi() || this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THU || this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THU || this.chiCuoi.groupKind != MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI);
        };
        DetectPlayerCards.prototype.isBinhLung = function(a) {
          return 0 > this.compareChi(this.chiDau, this.chiGiua, a) || 0 > this.compareChi(this.chiGiua, this.chiCuoi, a);
        };
        DetectPlayerCards.prototype.getSortedCardListFromList = function(a) {
          for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
          for (c = 0; c < b.length - 1; c++) for (a = c + 1; a < b.length; a++) if (b[c].getId() > b[a].getId()) {
            var d = b[c];
            b[c] = b[a];
            b[a] = d;
          }
          return b;
        };
        DetectPlayerCards.prototype.compareChi = function(a, b, c) {
          if (a.groupKind > b.groupKind) return -1;
          if (a.groupKind < b.groupKind) return 1;
          if (c) {
            var d = a.getGroupKindLevel(c);
            c = b.getGroupKindLevel(c);
            if (d > c) return -1;
            if (d < c) return 1;
          }
          for (d = 0; d < a.valueList.length; d++) {
            if (a.valueList[d] > b.valueList[d]) return 1;
            if (a.valueList[d] < b.valueList[d]) return -1;
          }
          return 0;
        };
        return DetectPlayerCards;
      }();
      maubinh.DetectPlayerCards = DetectPlayerCards;
    })(maubinh = exports.maubinh || (exports.maubinh = {}));
    exports.default = maubinh.DetectPlayerCards;
    cc._RF.pop();
  }, {
    "./MauBinh.Card": "MauBinh.Card",
    "./MauBinh.Cmd": "MauBinh.Cmd",
    "./MauBinh.DetectGroupCards": "MauBinh.DetectGroupCards"
  } ],
  "MauBinh.DragCard": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e08b3jKw1lI4JhSdNr8n3bR", "MauBinh.DragCard");
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
    var MauBinh_Controller_1 = require("./MauBinh.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragCardController = function(_super) {
      __extends(DragCardController, _super);
      function DragCardController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentTarget = null;
        _this.other = null;
        _this.self = null;
        return _this;
      }
      DragCardController_1 = DragCardController;
      DragCardController.prototype.onLoad = function() {
        DragCardController_1.instance = this;
      };
      DragCardController.prototype.start = function() {
        cc.director.getCollisionManager().enabled = true;
      };
      DragCardController.prototype.updatePos = function(pos_X, pos_Y) {
        this.node.opacity = 255;
        this.node.setPosition(pos_X, pos_Y);
      };
      DragCardController.prototype.endMove = function() {
        MauBinh_Controller_1.default.instance.completeMoveCard(this.currentTarget);
        this.node.active = false;
      };
      DragCardController.prototype.onCollisionEnter = function(other, self) {
        this.other = other.node;
        this.self = self.node;
        this.currentTarget = parseInt(this.other.name) - 1;
        MauBinh_Controller_1.default.instance.showMoveTarget(this.currentTarget);
      };
      var DragCardController_1;
      DragCardController.instance = null;
      DragCardController = DragCardController_1 = __decorate([ ccclass ], DragCardController);
      return DragCardController;
    }(cc.Component);
    exports.default = DragCardController;
    cc._RF.pop();
  }, {
    "./MauBinh.Controller": "MauBinh.Controller"
  } ],
  "MauBinh.ItemRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36926qIdxdMrpX//tGzu5q2", "MauBinh.ItemRoom");
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
    var MauBinh_Controller_1 = require("./MauBinh.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemRoom = function(_super) {
      __extends(ItemRoom, _super);
      function ItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
      }
      ItemRoom.prototype.start = function() {};
      ItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      ItemRoom.prototype.chooseRoom = function() {
        MauBinh_Controller_1.default.instance.joinRoom(this.roomInfo);
      };
      __decorate([ property(cc.Label) ], ItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], ItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], ItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], ItemRoom.prototype, "progressNumPlayers", void 0);
      ItemRoom = __decorate([ ccclass ], ItemRoom);
      return ItemRoom;
    }(cc.Component);
    exports.default = ItemRoom;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./MauBinh.Controller": "MauBinh.Controller"
  } ],
  "MauBinh.MeCard": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac60a4Gdu5MyL1USBM5ktVY", "MauBinh.MeCard");
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
    var MauBinh_Controller_1 = require("./MauBinh.Controller");
    var MauBinh_DragCard_1 = require("./MauBinh.DragCard");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MeCardController = function(_super) {
      __extends(MeCardController, _super);
      function MeCardController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.imgFocus = null;
        _this.imgCard = null;
        _this.imgShadow = null;
        _this.card_info = null;
        _this.initPos = null;
        _this.canDrag = null;
        return _this;
      }
      MeCardController_1 = MeCardController;
      MeCardController.prototype.onLoad = function() {
        MeCardController_1.instance = this;
        this.initPos = this.node.position;
      };
      MeCardController.prototype.start = function() {};
      MeCardController.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
      };
      MeCardController.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
      };
      MeCardController.prototype.activeDrag = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
      };
      MeCardController.prototype.offDrag = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
      };
      MeCardController.prototype.onBeginDrag = function(event) {
        MauBinh_Controller_1.default.instance.cardSelect(this.card_info, this.node.position, parseInt(this.node.name) - 1);
      };
      MeCardController.prototype.onDrag = function(event) {
        this.dragging = true;
        var delta = event.getDelta();
        var currentPos = this.node.position;
        this.node.x = currentPos.x + delta.x;
        this.node.y = currentPos.y + delta.y;
        MauBinh_DragCard_1.default.instance.updatePos(currentPos.x + delta.x, currentPos.y + delta.y - 95);
      };
      MeCardController.prototype.onEndDrag = function(event) {
        this.dragging = false;
        this.node.position = this.initPos;
        MauBinh_DragCard_1.default.instance.endMove();
      };
      MeCardController.prototype.resetState = function() {
        if (this.initPos) {
          this.node.position = this.initPos;
          this.setCardFocus(false);
          this.setCardShadow(false);
        }
      };
      MeCardController.prototype.setupCard = function(data, src) {
        var _this = this;
        this.card_info = data;
        this.setCardFocus(false);
        this.setCardShadow(false);
        cc.tween(this.node).to(.1, {
          scaleX: 0
        }).call(function() {
          _this.imgCard.getComponent(cc.Sprite).spriteFrame = src;
        }).to(.1, {
          scaleX: 1
        }).start();
      };
      MeCardController.prototype.updateCard = function(data, src) {
        this.card_info.card = data;
        this.setCardFocus(false);
        this.setCardShadow(false);
        this.setCardSrc(src);
      };
      MeCardController.prototype.setCardSrc = function(src) {
        this.imgCard.getComponent(cc.Sprite).spriteFrame = src;
      };
      MeCardController.prototype.setCardShadow = function(state) {
        this.imgShadow.active = state;
      };
      MeCardController.prototype.setCardFocus = function(state) {
        this.imgFocus.active = state;
      };
      MeCardController.prototype.setIsActive = function(state) {
        this.node.active = state;
      };
      MeCardController.prototype.getIsActive = function() {
        return this.node.active;
      };
      var MeCardController_1;
      MeCardController.instance = null;
      __decorate([ property(cc.Node) ], MeCardController.prototype, "imgFocus", void 0);
      __decorate([ property(cc.Node) ], MeCardController.prototype, "imgCard", void 0);
      __decorate([ property(cc.Node) ], MeCardController.prototype, "imgShadow", void 0);
      MeCardController = MeCardController_1 = __decorate([ ccclass ], MeCardController);
      return MeCardController;
    }(cc.Component);
    exports.default = MeCardController;
    cc._RF.pop();
  }, {
    "./MauBinh.Controller": "MauBinh.Controller",
    "./MauBinh.DragCard": "MauBinh.DragCard"
  } ],
  "MauBinh.NetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef5e6R1nFhHvZngIpEqlvkV", "MauBinh.NetworkClient");
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
    var MauBinhNetworkClient = function(_super) {
      __extends(MauBinhNetworkClient, _super);
      function MauBinhNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      MauBinhNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new MauBinhNetworkClient());
        return this.instance;
      };
      MauBinhNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_BINH.host, Configs_1.default.App.HOST_BINH.port);
      };
      MauBinhNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
      };
      MauBinhNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      MauBinhNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      MauBinhNetworkClient.prototype.send = function(packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return MauBinhNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = MauBinhNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
  } ],
  "MauBinh.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b79c0saMihPJLkLCRpjTeK5", "MauBinh.Player");
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
        _this.owner = null;
        _this.cardsName = null;
        _this.actionViewer = null;
        _this.actionThinking = null;
        _this.actionWin = null;
        _this.goldWin = null;
        _this.actionLose = null;
        _this.goldLose = null;
        _this.actionXepXong = null;
        _this.actionDangXep = null;
        _this.notify = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.shadowAvatar = null;
        _this.shadowInfo = null;
        _this.spriteCardBack = null;
        _this.resultGame = null;
        _this.spriteResultChi = [];
        _this.spriteResultGeneral = [];
        _this.actionGoldSoChi = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        return _this;
      }
      Player.prototype.start = function() {};
      Player.prototype.showChatEmotion = function(content) {
        var _this = this;
        this.node.children[6].active = true;
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
        this.node.children[6].active = true;
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
        this.owner.active = false;
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
      Player.prototype.scaleCardReal = function(state) {
        this.cardReal.scale = state;
      };
      Player.prototype.showCardReady = function(state) {
        this.node.children[2].active = true;
        this.cardReady.active = state;
      };
      Player.prototype.showCardReal = function(state) {
        this.node.children[2].active = true;
        this.scaleCardReal(1);
        this.cardReal.active = state;
      };
      Player.prototype.prepareToTransform = function() {
        for (var index = 0; index < 13; index++) this.prepareCardReal(index);
      };
      Player.prototype.prepareCardReal = function(pos) {
        this.cardReal.children[pos].runAction(cc.scaleTo(0, 0, 1));
      };
      Player.prototype.transformToCardReal = function(cardPos, spriteCard, seatId) {
        this.node.children[2].active = true;
        this.cardReal.active = true;
        if (0 == seatId) {
          this.cardReal.children[cardPos].children[1].getComponent(cc.Sprite).spriteFrame = spriteCard;
          this.cardReady.children[cardPos].runAction(cc.sequence(cc.scaleTo(.15, 0, 1), cc.callFunc(function() {})));
          this.cardReal.children[cardPos].runAction(cc.sequence(cc.delayTime(.15), cc.scaleTo(.15, 1, 1), cc.callFunc(function() {})));
        } else {
          this.cardReal.children[cardPos].children[0].getComponent(cc.Sprite).spriteFrame = spriteCard;
          this.cardReal.children[cardPos].runAction(cc.sequence(cc.scaleTo(.15, 1, 1), cc.callFunc(function() {})));
        }
      };
      Player.prototype.showCardName = function(img) {
        var _this = this;
        this.cardsName.active = true;
        this.cardsName.getComponent(cc.Sprite).spriteFrame = img;
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
      Player.prototype.setCardReal = function(data, index) {
        this.cardReal.children[index].children[1].getComponent(cc.Sprite).spriteFrame = data;
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
      Player.prototype.prepareFxAction = function() {
        this.node.children[4].active = true;
        this.resetAction();
      };
      Player.prototype.playFxViewer = function() {
        this.prepareFxAction();
        this.actionViewer.active = true;
      };
      Player.prototype.playFxDangXep = function() {
        this.prepareFxAction();
        this.actionDangXep.active = true;
        this.actionXepXong.active = false;
      };
      Player.prototype.playFxXepXong = function() {
        this.prepareFxAction();
        this.actionDangXep.active = false;
        this.actionXepXong.active = true;
      };
      Player.prototype.playFxSoChiTotal = function(img) {
        this.node.children[7].active = true;
        this.resultGame.children[3].active = true;
        this.resultGame.children[3].children[0].getComponent(cc.Sprite).spriteFrame = img;
        this.resultGame.children[3].children[1].getComponent(cc.Label).string = "";
        this.resultGame.children[3].getComponent(cc.Animation).play();
      };
      Player.prototype.playFxResultGeneral = function(seatId, isGood, type, isSoChi) {
        this.node.children[7].active = true;
        this.resultGame.children[3].active = true;
        if (0 == seatId) {
          this.resultGame.children[3].y = 0 == isSoChi ? 30 : 100;
          this.resultGame.children[3].children[0].scale = 0 == isSoChi ? 1 : .5;
          this.resultGame.children[3].children[1].scale = 0 == isSoChi ? 1 : .5;
        }
        this.resultGame.children[3].children[0].getComponent(cc.Sprite).spriteFrame = isGood ? this.spriteResultGeneral[0] : this.spriteResultGeneral[1];
        this.resultGame.children[3].children[1].getComponent(cc.Label).string = isGood ? type : "";
        this.resultGame.children[3].getComponent(cc.Animation).play();
      };
      Player.prototype.playFxCompareChi = function(id, img) {
        this.node.children[7].active = true;
        this.resultGame.children[id - 1].active = true;
        this.resultGame.children[id - 1].children[0].getComponent(cc.Sprite).spriteFrame = img;
        this.resultGame.children[id - 1].getComponent(cc.Animation).play();
      };
      Player.prototype.playFxGoldSoChi = function(goldChi) {
        var _this = this;
        if (goldChi >= 0) {
          this.actionGoldSoChi.active = true;
          this.actionGoldSoChi.children[1].getComponent(cc.Label).string = "+" + goldChi + " Chi";
        } else if (goldChi < 0) {
          this.actionGoldSoChi.active = true;
          this.actionGoldSoChi.children[1].getComponent(cc.Label).string = goldChi + " Chi";
        }
        setTimeout(function() {
          _this.actionGoldSoChi.active = false;
        }, 2500);
      };
      Player.prototype.playFxWinSoChi = function(result) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.actionWin.children[1].active = true;
        this.goldWin.string = "+" + result + " Chi";
        setTimeout(function() {
          _this.node.children[4].active = false;
        }, 2e3);
      };
      Player.prototype.playFxLoseSoChi = function(result) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionLose.active = true;
        this.actionLose.children[1].active = true;
        this.goldLose.string = result + " Chi";
        setTimeout(function() {
          _this.node.children[4].active = false;
        }, 2e3);
      };
      Player.prototype.fxWin = function(playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionLose.active = false;
        this.actionWin.active = true;
        this.actionWin.children[1].active = true;
        this.goldWin.node.stopAllActions();
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        -1 != playerInfo.money && this.setGold(this.formatGold(playerInfo.money));
        setTimeout(function() {
          _this.actionWin.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.fxLose = function(playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionWin.active = false;
        this.actionLose.active = true;
        this.actionLose.children[1].active = true;
        this.goldLose.node.stopAllActions();
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        -1 != playerInfo.money && this.setGold(this.formatGold(playerInfo.money));
        setTimeout(function() {
          _this.actionLose.active = false;
          _this.node.children[4].active = false;
        }, 2500);
      };
      Player.prototype.shadowCardReady = function(state) {
        for (var index = 0; index < 13; index++) this.cardReady.children[index].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.shadowCardReal = function(state) {
        for (var index = 0; index < 13; index++) this.cardReal.children[index].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
      };
      Player.prototype.shadowCard = function(index, state) {
        this.cardReal.children[index].children[1].color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
      Player.prototype.resetResultGame = function() {
        for (var index = 0; index < 4; index++) this.resultGame.children[index].active = false;
      };
      Player.prototype.resetResultChi = function(chiId) {
        this.resultGame.children[chiId - 1].active = false;
      };
      Player.prototype.resetAction = function() {
        for (var index = 0; index < this.node.children[4].childrenCount; index++) this.node.children[4].children[index].active = false;
      };
      Player.prototype.resetMatchHistory = function(seatId) {
        this.resetCardReady(seatId);
        this.resetCardReal(seatId);
        this.node.children[2].active = false;
        this.showGold(true);
        this.cardsName.active = false;
        this.resetAction();
      };
      Player.prototype.resetCardReady = function(seatId) {
        if (0 == seatId) for (var index = 0; index < 13; index++) this.cardReady.children[index].scale = 1;
        this.cardReady.active = false;
      };
      Player.prototype.resetCardReal = function(seatId) {
        this.cardReal.active = false;
        for (var index = 0; index < 13; index++) this.cardReal.children[index].children[0 == seatId ? 1 : 0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.shadowCardReal(false);
      };
      Player.prototype.resetPlayerInfo = function(seatId) {
        for (var index = 0; index < this.node.childrenCount; index++) this.node.children[index].active = false;
        for (var index = 0; index < 13; index++) this.cardReal.children[index].children[0 == seatId ? 1 : 0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReady.active = false;
        this.cardReal.active = false;
        this.cardsName.active = false;
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.actionWin.active = false;
        this.actionLose.active = false;
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
      __decorate([ property(cc.Node) ], Player.prototype, "actionViewer", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionThinking", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionWin", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "goldWin", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionLose", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "goldLose", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionXepXong", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionDangXep", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "notify", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatEmotion", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatMsg", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "shadowAvatar", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "shadowInfo", void 0);
      __decorate([ property(cc.SpriteFrame) ], Player.prototype, "spriteCardBack", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "resultGame", void 0);
      __decorate([ property(cc.SpriteFrame) ], Player.prototype, "spriteResultChi", void 0);
      __decorate([ property(cc.SpriteFrame) ], Player.prototype, "spriteResultGeneral", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "actionGoldSoChi", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0
  } ]
}, {}, [ "MauBinh.Card", "MauBinh.CardUtil", "MauBinh.Cmd", "MauBinh.Controller", "MauBinh.DetectGroupCards", "MauBinh.DetectPlayerCards", "MauBinh.DragCard", "MauBinh.ItemRoom", "MauBinh.MeCard", "MauBinh.NetworkClient", "MauBinh.Player" ]);