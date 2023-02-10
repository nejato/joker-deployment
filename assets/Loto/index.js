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
  "Loto.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1140fJ0WcxGeb+cOSwh7NU0", "Loto.Cmd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cmd = void 0;
    var ccclass = cc._decorator.ccclass;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.currentChannel = 0;
        Code.LOTO_LOCATION = {
          MienBac: 0,
          MienTrung: 1,
          MienNam: 2
        };
        Code.LOTO_CHANNEL = {
          NONE: 0,
          MIEN_BAC: 1
        };
        Code.LOTO_CHANNEL_NAME = [ "NONE", "\u1019\u103c\u1031\u102c\u1000\u103a\u1015\u102d\u102f\u1004\u103a\u1038" ];
        Code.LOTO_GAME_MODE = {
          None: 0,
          BaoLo2So: 1,
          BaoLo3So: 2,
          LoXien2: 3,
          LoXien3: 4,
          LoXien4: 5,
          Dau: 6,
          Duoi: 7,
          DeDau: 8,
          DeDacBiet: 9,
          DanhDauDuoi: 10,
          BaCang: 11,
          BaCangDau: 12,
          BaCangDuoi: 13,
          BaCangDauDuoi: 14,
          LoTruotXien4: 15,
          LoTruotXien8: 16,
          LoTruotXien10: 17,
          XiuChuDau: 18,
          XiuChuDuoi: 19,
          XiuChuDauDuoi: 20,
          Da2: 21,
          Da3: 22,
          Da4: 23,
          LoTruotXien14: 24,
          LoTruotXien12: 25
        };
        Code.LOTO_GAME_MODE_NAME = [ "NONE", "Bao L\xf4 2", "Bao L\xf4 3", "L\xf4 Xi\xean 2", "L\xf4 Xi\xean 3", "L\xf4 Xi\xean 4", "\u0110\u1ea7u", "\u0110u\xf4i", "\u0110\u1ec1 \u0110\u1ea7u", "\u0110\u1ec1 \u0110\u1eb7c Bi\u1ec7t", "\u0110\xe1nh \u0110\u1ea7u \u0110u\xf4i", "Ba C\xe0ng", "Ba C\xe0ng \u0110\u1ea7u", "Ba C\xe0ng \u0110u\xf4i", "Ba C\xe0ng \u0110\u1ea7u \u0110u\xf4i", "L\xf4 Tr\u01b0\u1ee3t Xi\xean 4", "L\xf4 Tr\u01b0\u1ee3t Xi\xean 8", "L\xf4 Tr\u01b0\u1ee3t Xi\xean 10", "X\u1ec9u Ch\u1ee7 \u0110\u1ea7u", "X\u1ec9u Ch\u1ee7 \u0110u\xf4i", "X\u1ec9u Ch\u1ee7 \u0110\u1ea7u \u0110u\xf4i", "\u0110\xe1 2", "\u0110\xe1 3", "\u0110\xe1 4", "L\xf4 Tr\u01b0\u1ee3t Xi\xean 14", "L\xf4 Tr\u01b0\u1ee3t Xi\xean 12" ];
        Code.LOTO_GAME_MODE_NUM_REQUIRE = [ 0, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 10, 1, 1, 1, 2, 3, 4, 14, 12 ];
        Code.LOTO_GROUP_BAC = [ 1, 2, 4, 5, 6 ];
        Code.LOTO_GROUP_TRUNG = [ 1, 2, 3, 4, 5, 6 ];
        Code.LOTO_GROUP_NAM = [ 1, 3, 4, 6, 7, 8 ];
        Code.LOTO_MODE_BAC = [ 1, 2, 3, 4, 5, 9, 11, 16, 17, 24, 25 ];
        Code.LOTO_MODE_TRUNG = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17 ];
        Code.LOTO_MODE_NAM = [ 1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23 ];
        Code.LOTO_CHANNEL_BAC = [ 1 ];
        Code.LOTO_CHANNEL_TRUNG = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        Code.LOTO_CHANNEL_NAM = [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ];
        return Code;
      }();
      cmd.Code = Code;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {} ],
  "Loto.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1be046yHmFLZa3wHIBKZlRO", "Loto.Controller");
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
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Loto_Cmd_1 = require("./Loto.Cmd");
    var Http_1 = require("../../Loading/src/Http");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var LotoController = function(_super) {
      __extends(LotoController, _super);
      function LotoController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelUserGold = null;
        _this.currentMode = null;
        _this.listModes = null;
        _this.contentMode = null;
        _this.labelGameGuide = null;
        _this.listLocation = [];
        _this.listTabs = [];
        _this.contentTabs = null;
        _this.edtChatInput = null;
        _this.contentChat = null;
        _this.prefabItemChat = null;
        _this.scrollChat = null;
        _this.contentNewBet = null;
        _this.prefabItemNewBet = null;
        _this.scrollNewBet = null;
        _this.labelTabResult = [];
        _this.betDate = null;
        _this.currentBetChannel = null;
        _this.btnBetChannel = null;
        _this.betChannel = null;
        _this.contentBetChannel = null;
        _this.prefabItemChannel = null;
        _this.scrollBetChannel = null;
        _this.btnTabResultChannel = null;
        _this.tabResultDate = null;
        _this.currentTabResultChannel = null;
        _this.btnPopupResultChannel = null;
        _this.popupResultDate = null;
        _this.currentPopupResultChannel = null;
        _this.btnCancelChangeChannel = null;
        _this.numberSelector = null;
        _this.contentNumSelector = null;
        _this.prefabItemNumber = null;
        _this.scrollNumSelector = null;
        _this.btnOpenNumberSelector = null;
        _this.contentDescMode = null;
        _this.contentNumPicked = null;
        _this.prefabItemNumberPicked = null;
        _this.scrollNumPicked = null;
        _this.edtBet = null;
        _this.labelTotalBet = null;
        _this.labelWinValue = null;
        _this.popupHistory = null;
        _this.contentHistory = null;
        _this.prefabItemHistory = null;
        _this.popupResult = null;
        _this.labelResult = [];
        _this.contentTime = null;
        _this.popupNotify = null;
        _this.labelMsg = null;
        _this.musicBackground = null;
        _this.sessionDate = "";
        _this.today = "";
        _this.GAME_MODE = 1;
        _this.GAME_LOCATION = 0;
        _this.GAME_CHANNEL = 1;
        _this.currentNumPicked = [];
        _this.currentBetValue = 0;
        _this.currentWinValue = 0;
        _this.numRequest = 0;
        _this.numRequestCompleted = 0;
        _this.numRequired = 0;
        _this.musicSlotState = null;
        _this.remoteMusicBackground = null;
        _this.helpCenter = [];
        _this.currentGameHelp = "";
        _this.channelsOpen = [];
        _this.modesOpen = [];
        _this.arrDates = null;
        _this.popupResultCurrentChannelId = null;
        return _this;
      }
      LotoController_1 = LotoController;
      LotoController.prototype.onLoad = function() {
        var _this = this;
        LotoController_1.instance = this;
        this.sessionDate = "";
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        this.sessionDate += "" + year;
        this.sessionDate += month < 10 ? "0" + month : month;
        this.sessionDate += day < 10 ? "0" + day : day;
        this.today = (day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month) + "/" + year;
        var today = new Date();
        this.arrDates = [ today ];
        for (var index = 1; index < 7; index++) {
          var yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - index);
          this.arrDates.push(yesterday);
        }
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function(isLogined) {
          if (!isLogined) {
            App_1.default.instance.alertDialog.showMsgWithOnDismissed("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1001\u103c\u1004\u103a\u1038 \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b.", function() {
              _this.actBack();
            });
            return;
          }
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          Configs_1.default.Login.CoinFish <= 0 && App_1.default.instance.confirmDialog.show3("\u1019\u1004\u103a\u1038\u101b\u1032\u1037\u1011\u102e\u101c\u1000\u103a\u1019\u103e\u1010\u103a\u1000 \u1015\u102d\u102f\u1000\u103a\u1006\u1036\u1000\u102f\u1014\u103a\u101e\u103d\u102c\u1038\u1015\u103c\u102e\u104a \u1019\u1004\u103a\u1038\u1004\u103d\u1031\u101c\u103d\u103e\u1032\u1001\u103b\u1004\u103a\u1010\u102c\u101c\u102c\u1038\u104b?", "\u101f\u102f\u1010\u103a\u1010\u101a\u103a", function(isConfirm) {
            isConfirm && _this.popupCoinTransfer.show();
          });
        });
        ShootFishNetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.showErrLoading("\u1021\u1006\u1000\u103a\u1021\u101e\u103d\u101a\u103a\u1015\u103c\u1010\u103a\u101e\u103d\u102c\u1038\u101e\u100a\u103a\u104a \u1015\u103c\u1014\u103a\u101c\u100a\u103a\u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u101b\u1014\u103a \u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1014\u1031\u1015\u102b\u101e\u100a\u103a\u104b...");
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function(data) {
          var inPacket = new Network_InPacket_1.default(data);
          switch (inPacket.getCmdId()) {
           case Loto_Cmd_1.default.Code.GET_MONEY_USE:
            var res = new Loto_Cmd_1.default.ResGetMoneyUse(data);
            Configs_1.default.Login.Coin = res.moneyUse;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          }
        }, this);
      };
      LotoController.prototype.start = function() {
        var _this = this;
        var musicSave = cc.sys.localStorage.getItem("musicLoto");
        if (null != musicSave) this.musicSlotState = parseInt(musicSave); else {
          this.musicSlotState = 1;
          cc.sys.localStorage.setItem("musicLoto", "1");
        }
        1 == this.musicSlotState && (this.remoteMusicBackground = cc.audioEngine.playMusic(this.musicBackground, true));
        this.initNumSelector(1e3);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          _this.labelUserGold.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        ShootFishNetworkClient_1.default.getInstance().addListener(function(route, push) {
          switch (route) {
           case "onLOTO1":
            var itemNewBet = cc.instantiate(_this.prefabItemNewBet);
            itemNewBet.getComponent("Loto.ItemNewBet").initItem({
              nickname: push["nickname"],
              channel: push["channel"],
              mode: push["mode"],
              bet: push["cost"],
              nums: push["number"]
            });
            _this.contentNewBet.addChild(itemNewBet);
            _this.scrollNewBet.scrollToBottom(.2);
            break;

           case "LOTO2":
           case "LOTO3":
           case "LOTO4":
           case "LOTO5":
           case "LOTO6":
            break;

           case "onLOTO7":
            var itemNewChat = cc.instantiate(_this.prefabItemChat);
            itemNewChat.getComponent("Loto.ItemChat").initItem({
              nickname: push["nickname"],
              msg: push["msg"]
            });
            _this.contentChat.addChild(itemNewChat);
            _this.scrollChat.scrollToBottom(.2);
          }
        }, this);
        this.listTabs[0].isChecked = true;
        this.contentTabs.children[0].active = true;
        this.requestGetChatHistory();
        this.requestGetNewBetHistory();
        App_1.default.instance.showLoading(true);
        this.requestGetGameAvailable();
        this.betDate.string = this.today;
        this.requestGetCalculateResult();
        this.onBetChannelSelected(0, 1);
        this.changeMode(null, 1);
      };
      LotoController.prototype.showListMode = function() {
        this.listModes.active = !this.listModes.active;
        this.listModes.parent.children[2].angle = this.listModes.active ? 0 : 180;
      };
      LotoController.prototype.changeMode = function(event, groupId) {
        var groupMode = parseInt(groupId);
        this.listModes.active = false;
        this.listModes.parent.children[2].angle = 180;
        var modeName = this.listModes.children[groupMode - 1].children[0].getComponent(cc.Label).string;
        this.currentMode.children[1].getComponent(cc.Label).string = modeName;
        this.resetContentModeState();
        this.contentMode.children[groupMode - 1].active = true;
        this.contentMode.children[groupMode - 1].children[0].getComponent(cc.Toggle).isChecked = true;
        var arrModesInGroup = [];
        switch (groupMode) {
         case 1:
          arrModesInGroup = [ 1, 2 ];
          break;

         case 2:
          arrModesInGroup = [ 3, 4, 5 ];
          break;

         case 3:
          arrModesInGroup = [ 6, 7 ];
          break;

         case 4:
          arrModesInGroup = [ 8, 9, 10 ];
          break;

         case 5:
          arrModesInGroup = [ 11, 12, 13, 14 ];
          break;

         case 6:
          arrModesInGroup = [ 17, 24, 25 ];
          break;

         case 7:
          arrModesInGroup = [ 18, 19, 20 ];
          break;

         case 8:
          arrModesInGroup = [ 21, 22, 23 ];
        }
        var arrModeAvailableInLocation = [];
        switch (this.GAME_LOCATION) {
         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
          arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_BAC;
          break;

         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
          arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_TRUNG;
          break;

         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
          arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_NAM;
        }
        var nodeMode = this.contentMode.children[groupMode - 1];
        var firstActive = 0;
        var count = -1;
        for (var index = 0; index < arrModesInGroup.length; index++) {
          var findId = arrModeAvailableInLocation.indexOf(arrModesInGroup[index]);
          if (-1 != findId) {
            -1 == count && (firstActive = index);
            count++;
            nodeMode.children[index].active = true;
          } else nodeMode.children[index].active = false;
        }
        var firstModeInGroup = arrModesInGroup[firstActive];
        if (this.GAME_LOCATION == Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung && 11 == firstModeInGroup) {
          firstModeInGroup = arrModesInGroup[1];
          this.contentMode.children[groupMode - 1].children[1].getComponent(cc.Toggle).isChecked = true;
        }
        this.chooseMode(null, firstModeInGroup);
      };
      LotoController.prototype.chooseMode = function(event, modeId) {
        this.GAME_MODE = parseInt(modeId);
        var numCount = -1;
        switch (this.GAME_MODE) {
         case 6:
         case 7:
          numCount = 10;
          break;

         case 1:
         case 3:
         case 4:
         case 5:
         case 8:
         case 9:
         case 10:
         case 15:
         case 16:
         case 17:
         case 21:
         case 22:
         case 23:
         case 24:
         case 25:
          numCount = 100;
          break;

         case 2:
         case 11:
         case 12:
         case 13:
         case 14:
         case 18:
         case 19:
         case 20:
          numCount = 1e3;
        }
        this.numRequired = Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NUM_REQUIRE[this.GAME_MODE];
        this.changeGameGuide();
        this.currentNumPicked = [];
        this.labelTotalBet.string = "0";
        this.edtBet.string = "1";
        this.updateNumSelector(numCount);
        this.requestGetPayWinRate();
      };
      LotoController.prototype.chooseLocation = function(toggle) {
        var index = this.listLocation.indexOf(toggle);
        this.GAME_LOCATION = index;
        var firstChannelInLocation = 0;
        switch (this.GAME_LOCATION) {
         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
          this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_BAC);
          firstChannelInLocation = 1;
          break;

         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
          this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_TRUNG);
          firstChannelInLocation = 2;
          break;

         case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
          this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_NAM);
          firstChannelInLocation = 16;
        }
        this.changeMode(null, 1);
        this.onBetChannelSelected("0", firstChannelInLocation);
      };
      LotoController.prototype.setupGroup = function(arrGroupAvailable) {
        for (var index = 0; index < this.listModes.childrenCount; index++) {
          var findId = arrGroupAvailable.indexOf(index + 1);
          this.listModes.children[index].active = -1 != findId;
        }
      };
      LotoController.prototype.actionCancelBet = function() {
        this.currentNumPicked = [];
        this.labelTotalBet.string = "0";
        this.labelWinValue.string = "" + this.currentWinValue;
        this.edtBet.string = "1";
        this.resetContentNumberPicked();
        this.chooseMode(null, this.GAME_MODE);
      };
      LotoController.prototype.actionSubmitBet = function() {
        var hourOfDay = new Date().getHours();
        var minOfDay = new Date().getMinutes();
        if (18 == hourOfDay && minOfDay > 5 || hourOfDay >= 19) {
          var msg_1 = "\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u1005\u102c\u1038\u1021\u1001\u103b\u102d\u1014\u103a\u1011\u103d\u1000\u103a\u104b\n \u101c\u1031\u102c\u1004\u103a\u1038\u1000\u1005\u102c\u1038\u1021\u1001\u103b\u102d\u1014\u103a 0h \u1019\u103e 18h05 \u1011\u102d.";
          this.showPopupNotify(msg_1);
          return;
        }
        if (1 == this.numRequired) {
          if (this.currentNumPicked.length < 1) {
            var msg_3 = "\u101e\u1004\u103a\u101e\u100a\u103a \u1021\u1014\u100a\u103a\u1038\u1006\u102f\u1036\u1038 \u1014\u1036\u1015\u102b\u1010\u103a 1 \u1000\u102d\u102f \u101b\u103d\u1031\u1038\u101b\u1014\u103a \u101c\u102d\u102f\u1021\u1015\u103a\u101e\u100a\u103a\u104b";
            this.showPopupNotify(msg_3);
            return;
          }
        } else if (this.currentNumPicked.length !== this.numRequired) {
          var msg_3 = "\u101e\u1004\u103a\u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u101b\u1014\u103a\u101c\u102d\u102f\u1021\u1015\u103a\u101e\u100a\u103a\u104b " + this.numRequired + " \u1014\u1036\u1015\u102b\u1010\u103a";
          this.showPopupNotify(msg_3);
          return;
        }
        if (0 == this.currentBetValue) {
          this.showPopupNotify("\u1019\u103c\u1031\u102c\u1000\u103a\u1015\u102d\u102f\u1004\u103a\u1038\u101b\u1031\u1012\u102e\u101a\u102d\u102f\u1000\u102d\u102f \u1011\u1015\u103a\u1019\u1036\u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u1015\u102b\u104b");
          return;
        }
        var totalBet = 0;
        var betOneTurn = 1e3 * parseInt(this.edtBet.string);
        totalBet = 1 == this.numRequired ? betOneTurn * this.currentBetValue * this.currentNumPicked.length : betOneTurn * this.currentBetValue;
        if (Configs_1.default.Login.CoinFish >= totalBet) {
          App_1.default.instance.showLoading(true);
          switch (this.numRequired) {
           case 1:
            this.numRequest = 0;
            this.numRequestCompleted = this.currentNumPicked.length;
            for (var index = 0; index < this.currentNumPicked.length; index++) this.requestPlay(this.currentNumPicked[index], betOneTurn);
            break;

           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
           case 8:
           case 9:
           case 10:
           case 12:
           case 14:
            this.numRequest = 0;
            this.numRequestCompleted = 1;
            this.requestPlay(this.currentNumPicked, betOneTurn);
          }
        } else this.showPopupNotify("\u1019\u1004\u103a\u1038\u1019\u103e\u102c \u1015\u102d\u102f\u1000\u103a\u1006\u1036\u1021\u101c\u102f\u1036\u1021\u101c\u1031\u102c\u1000\u103a\u1019\u101b\u103e\u102d\u1018\u1030\u1038\u104b");
      };
      LotoController.prototype.changeFlexFeatures = function(toggle) {
        var index = this.listTabs.indexOf(toggle);
        this.resetContentTabsState();
        this.contentTabs.children[index].active = true;
        switch (index) {
         case 0:
          this.scrollChat.scrollToBottom(.2);
          break;

         case 1:
          this.scrollNewBet.scrollToBottom(.2);
          break;

         case 2:
          this.tabResultDate.string = this.today;
          this.onBetChannelSelected("1", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC);
        }
      };
      LotoController.prototype.actionSendChat = function() {
        var msg = this.edtChatInput.string.trim();
        if (msg.length > 0) {
          this.requestChat(msg);
          this.edtChatInput.string = "";
        }
      };
      LotoController.prototype.showBetChannel = function(event, type) {
        this.btnBetChannel.children[0].angle = 180;
        this.btnTabResultChannel.children[0].angle = 180;
        this.btnPopupResultChannel.children[0].angle = 180;
        this.btnCancelChangeChannel.active = true;
        this.betChannel.active = !this.betChannel.active;
        if ("0" == type) {
          this.btnBetChannel.children[0].angle = this.betChannel.active ? 0 : 180;
          this.betChannel.position = cc.v2(-385, -75);
        } else if ("1" == type) {
          this.btnTabResultChannel.children[0].angle = this.betChannel.active ? 0 : 180;
          this.betChannel.position = cc.v2(485, -15);
        } else if ("2" == type) {
          this.btnPopupResultChannel.children[0].angle = this.betChannel.active ? 0 : 180;
          this.betChannel.position = cc.v2(60, 35);
        }
        if (0 == this.contentBetChannel.childrenCount) for (var index = 1; index < 2; index++) {
          var info = {
            name: Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[index],
            id: index,
            from: type
          };
          var item = cc.instantiate(this.prefabItemChannel);
          item.getComponent("Loto.ItemChannel").initItem(info);
          this.contentBetChannel.addChild(item);
        } else for (var index = 0; index < this.contentBetChannel.childrenCount; index++) this.contentBetChannel.children[index].getComponent("Loto.ItemChannel").updateInfo(type);
        this.contentBetChannel.children[0].active = true;
        if ("0" == type) {
          var arrChannelAvailableInLocation = [];
          switch (this.GAME_LOCATION) {
           case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
            arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_BAC;
            break;

           case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
            arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_TRUNG;
            break;

           case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
            arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAM;
          }
          for (var index = 0; index < this.contentBetChannel.childrenCount; index++) {
            var findId = arrChannelAvailableInLocation.indexOf(index + 1);
            this.contentBetChannel.children[index].active = -1 != findId;
          }
        }
        this.scrollBetChannel.scrollToOffset(cc.v2(0, 0), .2);
      };
      LotoController.prototype.onBetChannelSelected = function(type, channelId) {
        this.btnCancelChangeChannel.active = false;
        this.betChannel.active = false;
        if ("0" == type) {
          this.btnBetChannel.children[0].angle = 180;
          this.currentBetChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
          this.GAME_CHANNEL = channelId;
          this.actionCancelBet();
        } else if ("1" == type) {
          this.btnTabResultChannel.children[0].angle = 180;
          this.currentTabResultChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
          this.requestGetLotoResult(this.sessionDate, channelId);
        } else if ("2" == type) {
          this.btnPopupResultChannel.children[0].angle = 180;
          this.currentPopupResultChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
          this.popupResultCurrentChannelId = channelId;
          this.chooseTime(null, 0);
        }
      };
      LotoController.prototype.cancelChangeChannel = function() {
        this.btnCancelChangeChannel.active = false;
        this.btnBetChannel.children[0].angle = 180;
        this.btnTabResultChannel.children[0].angle = 180;
        this.btnPopupResultChannel.children[0].angle = 180;
        this.betChannel.active = false;
      };
      LotoController.prototype.initNumSelector = function(numCount) {
        if (numCount > 0) {
          for (var index = 0; index < numCount; index++) {
            var item = cc.instantiate(this.prefabItemNumber);
            item.getComponent("Loto.ItemNumber").initItem(numCount, index);
            this.contentNumSelector.addChild(item);
          }
          this.scrollNumSelector.scrollToOffset(cc.v2(0, 0), .2);
        }
      };
      LotoController.prototype.updateNumSelector = function(numCount) {
        for (var index = 0; index < 1e3; index++) if (index < numCount) {
          this.contentNumSelector.children[index].active = true;
          this.contentNumSelector.children[index].getComponent(cc.Toggle).isChecked = false;
          this.contentNumSelector.children[index].getComponent("Loto.ItemNumber").formatName(numCount);
        } else this.contentNumSelector.children[index].active = false;
        this.scrollNumSelector.scrollToOffset(cc.v2(0, 0), .2);
      };
      LotoController.prototype.openNumSelector = function() {
        var heightOpen = 460;
        var heightClose = 345;
        var current = this.numberSelector.children[0].height;
        this.numberSelector.children[0].height = 480 == current ? 365 : 480;
        this.contentNumSelector.height = 480 == current ? heightClose : heightOpen;
        this.contentNumSelector.parent.height = 480 == current ? heightClose : heightOpen;
        this.scrollNumSelector.node.height = 480 == current ? heightClose : heightOpen;
        this.btnOpenNumberSelector.y = 480 == current ? -375 : -490;
        this.contentDescMode.active = 480 == current;
      };
      LotoController.prototype.addNumberPicked = function(number) {
        this.currentNumPicked.push(number);
        var item = cc.instantiate(this.prefabItemNumberPicked);
        item.getComponent("Loto.ItemNumSelected").initItem(number);
        this.contentNumPicked.addChild(item);
        this.scrollNumPicked.scrollToRight(.5);
        1 == this.numRequired ? this.labelTotalBet.string = "" + this.currentBetValue * parseInt(this.edtBet.string) * this.currentNumPicked.length : this.labelTotalBet.string = "" + this.currentBetValue * parseInt(this.edtBet.string);
        this.labelWinValue.string = "" + this.currentWinValue * parseInt(this.edtBet.string);
      };
      LotoController.prototype.removeNumberPicked = function(number) {
        this.resetContentNumberPicked();
        var temp = __spread(this.currentNumPicked);
        this.currentNumPicked = [];
        for (var index = 0; index < temp.length; index++) if (temp[index] != number) {
          this.currentNumPicked.push(temp[index]);
          var item = cc.instantiate(this.prefabItemNumberPicked);
          item.getComponent("Loto.ItemNumSelected").initItem(temp[index]);
          this.contentNumPicked.addChild(item);
        }
        this.scrollNumPicked.scrollToRight(.5);
        1 == this.numRequired ? this.labelTotalBet.string = "" + this.currentBetValue * parseInt(this.edtBet.string) * this.currentNumPicked.length : this.labelTotalBet.string = "" + this.currentBetValue * parseInt(this.edtBet.string);
        this.labelWinValue.string = "" + this.currentWinValue * parseInt(this.edtBet.string);
      };
      LotoController.prototype.changeGameGuide = function() {
        this.currentGameHelp = "";
        for (var index = 0; index < this.helpCenter.length; index++) {
          var data = this.helpCenter[index];
          data.gameMode == this.GAME_MODE && data.location == this.GAME_LOCATION && (this.currentGameHelp = data.help);
        }
        this.labelGameGuide.string = this.currentGameHelp;
      };
      LotoController.prototype.resetContentModeState = function() {
        for (var index = 0; index < this.contentMode.childrenCount; index++) this.contentMode.children[index].active = false;
      };
      LotoController.prototype.resetContentTabsState = function() {
        for (var index = 0; index < this.contentTabs.childrenCount; index++) this.contentTabs.children[index].active = false;
      };
      LotoController.prototype.resetContentNumberPicked = function() {
        this.contentNumPicked.removeAllChildren();
      };
      LotoController.prototype.resetContentNumSelector = function() {
        this.contentNumSelector.removeAllChildren();
      };
      LotoController.prototype.showPopupResult = function() {
        this.popupResult.active = true;
        this.popupResultDate.string = this.formatDate(this.arrDates[0]);
        for (var index = 0; index < this.arrDates.length; index++) {
          var time = this.arrDates[index];
          this.contentTime.children[1].children[index].children[0].getComponent(cc.Label).string = this.formatDate(time);
        }
        this.onBetChannelSelected("2", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC);
      };
      LotoController.prototype.showContentTime = function() {
        var scaleNow = this.contentTime.scaleY;
        this.contentTime.stopAllActions();
        if (scaleNow < .5) {
          this.contentTime.scaleY = 0;
          this.contentTime.runAction(cc.scaleTo(.2, 1, 1));
        } else {
          this.contentTime.scaleY = 1;
          this.contentTime.runAction(cc.scaleTo(.2, 1, 0));
        }
      };
      LotoController.prototype.chooseTime = function(event, id) {
        this.contentTime.scaleY = 0;
        var time = this.arrDates[parseInt(id)];
        this.popupResultDate.string = this.formatDate(time);
        var session = this.getSession(time);
        this.requestGetLotoResult(session, this.popupResultCurrentChannelId);
      };
      LotoController.prototype.formatDate = function(date) {
        var month = "" + (date.getMonth() + 1);
        var day = "" + date.getDate();
        var year = date.getFullYear();
        month.length < 2 && (month = "0" + month);
        day.length < 2 && (day = "0" + day);
        return [ day, month, year ].join("/");
      };
      LotoController.prototype.getSession = function(date) {
        var month = "" + (date.getMonth() + 1);
        var day = "" + date.getDate();
        var year = date.getFullYear();
        month.length < 2 && (month = "0" + month);
        day.length < 2 && (day = "0" + day);
        return [ year, month, day ].join("");
      };
      LotoController.prototype.closePopupResult = function() {
        this.popupResult.active = false;
      };
      LotoController.prototype.showPopupHistory = function() {
        this.requestGetPlayerRequest();
      };
      LotoController.prototype.closePopupHistory = function() {
        this.popupHistory.active = false;
      };
      LotoController.prototype.showPopupNotify = function(msg) {
        this.popupNotify.active = true;
        this.labelMsg.string = msg;
      };
      LotoController.prototype.closePopupNotify = function() {
        this.popupNotify.active = false;
      };
      LotoController.prototype.onTextChangeBet = function(event) {
        if (event.length > 0) {
          if (false == /^[0-9]*$/.test(event)) {
            App_1.default.instance.alertDialog.showMsg("\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038\u101e\u100a\u103a \u1021\u1015\u103c\u102f\u101e\u1018\u1031\u102c\u1006\u1031\u102c\u1004\u103a\u101e\u1031\u102c \u1014\u1036\u1015\u102b\u1010\u103a\u1016\u103c\u1005\u103a\u101b\u1019\u100a\u103a\u104b");
            this.edtBet.string = "1";
            event = "1";
          }
          var raw = parseInt(event);
          if (0 == raw) {
            this.edtBet.string = "1";
            event = "1";
          }
          this.edtBet.string = "" + parseInt(event);
        } else {
          this.edtBet.string = "1";
          event = "1";
        }
        var delta = parseInt(event);
        1 == this.numRequired ? this.labelTotalBet.string = "" + this.currentBetValue * delta * this.currentNumPicked.length : this.labelTotalBet.string = "" + this.currentBetValue * delta;
        this.labelWinValue.string = "" + this.currentWinValue * delta;
      };
      LotoController.prototype.requestPlay = function(num, betOneTurn) {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO1", {
          appId: "xxeng",
          userId: Configs_1.default.Login.UserIdFish,
          number: num,
          session: this.sessionDate,
          mode: this.GAME_MODE,
          channel: this.GAME_CHANNEL,
          pay: betOneTurn
        }, function(res) {
          if (200 != res["code"]) {
            App_1.default.instance.showLoading(false);
            App_1.default.instance.alertDialog.showMsg("\u1021\u1019\u103e\u102c\u1038 " + res["code"] + ", " + res["msg"]);
            return;
          }
          _this.numRequest += 1;
          if (_this.numRequest == _this.numRequestCompleted) {
            _this.showPopupNotify("\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u101e\u1031\u102c\u1021\u101c\u1031\u102c\u1004\u103a\u1038\u1021\u1005\u102c\u1038");
            _this.numRequest = 0;
            _this.numRequestCompleted = 0;
            _this.actionCancelBet();
            App_1.default.instance.showLoading(false);
          }
          Configs_1.default.Login.CoinFish = res["cash"];
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        }, this);
      };
      LotoController.prototype.requestGetPayWinRate = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO2", {
          mode: this.GAME_MODE,
          channel: this.GAME_CHANNEL
        }, function(res) {
          if (200 != res["code"]) return;
          _this.currentNumPicked = [];
          _this.resetContentNumberPicked();
          _this.currentBetValue = res["payRate"];
          _this.currentWinValue = res["winRate"];
          _this.edtBet.string = "1";
          _this.labelTotalBet.string = "0";
          _this.labelWinValue.string = res["winRate"];
        }, this);
      };
      LotoController.prototype.requestGetCalculateResult = function() {
        ShootFishNetworkClient_1.default.getInstance().request("LOTO3", {
          session: this.sessionDate
        }, function(res) {
          if (200 != res["code"]) return;
        }, this);
      };
      LotoController.prototype.requestGetPlayerRequest = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO4", null, function(res) {
          if (200 != res["code"]) return;
          _this.popupHistory.active = true;
          _this.contentHistory.removeAllChildren(true);
          var data = res["data"];
          for (var index = 0; index < data.length; index++) {
            var item = cc.instantiate(_this.prefabItemHistory);
            item.getComponent("Loto.ItemHistory").initItem(index, data[index]);
            _this.contentHistory.addChild(item);
          }
        }, this);
      };
      LotoController.prototype.requestGetLotoResult = function(sessionId, channelId) {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO5", {
          session: sessionId,
          channel: channelId
        }, function(res) {
          if (200 != res["code"]) return;
          if (_this.popupResult.active) for (var index = 0; index < 9; index++) _this.labelResult[index].string = "......"; else for (var index = 0; index < 9; index++) _this.labelTabResult[index].string = "......";
          var resData = res["data"];
          if (0 == resData["channel"] || 0 == resData["session"]) ; else {
            resData = res["data"];
            var result = resData["results"];
            "[]" == resData["result8"] && (_this.popupResult.active ? _this.labelResult[8].string = "" : _this.labelTabResult[8].string = "");
            var deltaSpaces = _this.popupResult.active ? "    " : "  ";
            for (var index = 0; index < 8; index++) {
              var strJson = resData["result" + index];
              0 == index && (strJson = resData["resultSp"]);
              var rowInfo = JSON.parse(strJson);
              var text = "";
              for (var i = 0; i < rowInfo.length; i++) i < rowInfo.length - 1 ? text = 2 != i || 3 != index && 5 != index ? text + rowInfo[i].toString() + deltaSpaces : text + rowInfo[i].toString() + "\n" : text += rowInfo[i].toString();
              _this.popupResult.active ? _this.labelResult[index].string = text : _this.labelTabResult[index].string = text;
            }
          }
        }, this);
      };
      LotoController.prototype.requestGetHelp = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO6", null, function(res) {
          if (200 != res["code"]) return;
          _this.helpCenter = res["data"];
          _this.changeGameGuide();
        }, this);
      };
      LotoController.prototype.requestChat = function(msg) {
        ShootFishNetworkClient_1.default.getInstance().request("LOTO7", {
          msg: msg
        }, function(res) {
          if (200 != res["code"]) return;
        }, this);
      };
      LotoController.prototype.requestGetChatHistory = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO8", null, function(res) {
          if (200 != res["code"]) return;
          _this.contentChat.removeAllChildren(true);
          var arrChat = res["data"];
          for (var index = 0; index < arrChat.length; index++) {
            var item = cc.instantiate(_this.prefabItemChat);
            item.getComponent("Loto.ItemChat").initItem({
              nickname: arrChat[index].nickname,
              msg: arrChat[index].msg
            });
            _this.contentChat.addChild(item);
          }
          _this.scrollChat.scrollToBottom(.2);
        }, this);
      };
      LotoController.prototype.requestGetGameAvailable = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO9", null, function(res) {
          if (200 != res["code"]) return;
          App_1.default.instance.showLoading(false);
          _this.channelsOpen = res["channels"];
          _this.modesOpen = res["modes"];
          if (0 == _this.modesOpen.length) for (var index = 0; index < 24; index++) _this.modesOpen.push(index);
          if (0 == _this.channelsOpen.length) for (var index = 0; index < 37; index++) _this.channelsOpen.push(index);
          _this.chooseLocation(_this.listLocation[0]);
          _this.listLocation[0].isChecked = true;
          _this.GAME_LOCATION = Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac;
          _this.onBetChannelSelected("0", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC);
          _this.requestGetHelp();
          _this.requestGetPayWinRate();
        }, this);
      };
      LotoController.prototype.requestGetNewBetHistory = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO10", null, function(res) {
          if (200 != res["code"]) return;
          _this.contentNewBet.removeAllChildren(true);
          var arrBet = res["data"];
          for (var index = 0; index < arrBet.length; index++) {
            var push = arrBet[index];
            var item = cc.instantiate(_this.prefabItemNewBet);
            item.getComponent("Loto.ItemNewBet").initItem({
              nickname: push["nickname"],
              channel: push["channel"],
              mode: push["mode"],
              bet: push["cost"],
              nums: push["number"]
            });
            _this.contentNewBet.addChild(item);
          }
          _this.scrollNewBet.scrollToBottom(.2);
        }, this);
      };
      LotoController.prototype.actLogin = function() {
        var _this = this;
        var username = Configs_1.default.Login.Username;
        var password = Configs_1.default.Login.Password;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 3,
          un: username,
          pw: password
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) {
            App_1.default.instance.alertDialog.showMsg("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1001\u103c\u1004\u103a\u1038 \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1019\u103e\u102f\u1000\u102d\u102f \u1011\u1015\u103a\u1019\u1036\u1005\u1005\u103a\u1006\u1031\u1038\u1015\u102b\u104b");
            return;
          }
          switch (parseInt(res["errorCode"])) {
           case 0:
            Configs_1.default.Login.AccessToken = res["accessToken"];
            Configs_1.default.Login.SessionKey = res["sessionKey"];
            Configs_1.default.Login.Username = username;
            Configs_1.default.Login.Password = password;
            Configs_1.default.Login.IsLogin = true;
            var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
            Configs_1.default.Login.Nickname = userInfo["nickname"];
            Configs_1.default.Login.Avatar = userInfo["avatar"];
            Configs_1.default.Login.Coin = userInfo["vinTotal"];
            Configs_1.default.Login.LuckyWheel = userInfo["luckyRotate"];
            Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
            Configs_1.default.Login.CreateTime = userInfo["createTime"];
            Configs_1.default.Login.Birthday = userInfo["birthday"];
            Configs_1.default.Login.Birthday = userInfo["birthday"];
            Configs_1.default.Login.VipPoint = userInfo["vippoint"];
            Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
            SPUtils_1.default.setUserName(Configs_1.default.Login.Username);
            SPUtils_1.default.setUserPass(Configs_1.default.Login.Password);
            App_1.default.instance.buttonMiniGame.show();
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
            break;

           case 1007:
            App_1.default.instance.alertDialog.showMsg("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1001\u103c\u1004\u103a\u1038\u1021\u1001\u103b\u1000\u103a\u1021\u101c\u1000\u103a \u1019\u1019\u103e\u1014\u103a\u1000\u1014\u103a\u1015\u102b\u104b");
            break;

           case 2001:
            _this.popupUpdateNickname.show2(username, password);
            break;

           default:
            App_1.default.instance.alertDialog.showMsg("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1001\u103c\u1004\u103a\u1038 \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b");
          }
        });
      };
      LotoController.prototype.actBack = function() {
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      var LotoController_1;
      LotoController.instance = null;
      __decorate([ property(cc.Label) ], LotoController.prototype, "labelUserGold", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "currentMode", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "listModes", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentMode", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "labelGameGuide", void 0);
      __decorate([ property(cc.Toggle) ], LotoController.prototype, "listLocation", void 0);
      __decorate([ property(cc.Toggle) ], LotoController.prototype, "listTabs", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentTabs", void 0);
      __decorate([ property(cc.EditBox) ], LotoController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentChat", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemChat", void 0);
      __decorate([ property(cc.ScrollView) ], LotoController.prototype, "scrollChat", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentNewBet", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemNewBet", void 0);
      __decorate([ property(cc.ScrollView) ], LotoController.prototype, "scrollNewBet", void 0);
      __decorate([ property([ cc.Label ]) ], LotoController.prototype, "labelTabResult", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "betDate", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "currentBetChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "btnBetChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "betChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentBetChannel", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemChannel", void 0);
      __decorate([ property(cc.ScrollView) ], LotoController.prototype, "scrollBetChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "btnTabResultChannel", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "tabResultDate", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "currentTabResultChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "btnPopupResultChannel", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "popupResultDate", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "currentPopupResultChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "btnCancelChangeChannel", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "numberSelector", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentNumSelector", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemNumber", void 0);
      __decorate([ property(cc.ScrollView) ], LotoController.prototype, "scrollNumSelector", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "btnOpenNumberSelector", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentDescMode", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentNumPicked", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemNumberPicked", void 0);
      __decorate([ property(cc.ScrollView) ], LotoController.prototype, "scrollNumPicked", void 0);
      __decorate([ property(cc.EditBox) ], LotoController.prototype, "edtBet", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "labelTotalBet", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "labelWinValue", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "popupHistory", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentHistory", void 0);
      __decorate([ property(cc.Prefab) ], LotoController.prototype, "prefabItemHistory", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "popupResult", void 0);
      __decorate([ property([ cc.Label ]) ], LotoController.prototype, "labelResult", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "contentTime", void 0);
      __decorate([ property(cc.Node) ], LotoController.prototype, "popupNotify", void 0);
      __decorate([ property(cc.Label) ], LotoController.prototype, "labelMsg", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], LotoController.prototype, "musicBackground", void 0);
      LotoController = LotoController_1 = __decorate([ ccclass ], LotoController);
      return LotoController;
    }(cc.Component);
    exports.default = LotoController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0,
    "./Loto.Cmd": "Loto.Cmd"
  } ],
  "Loto.ItemChannel": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4b03Zm9+hMQpmh+Zyf2xn9", "Loto.ItemChannel");
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
    var Loto_Controller_1 = require("./Loto.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelName = null;
        _this.itemInfo = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(data) {
        this.itemInfo = data;
        this.labelName.string = data.name;
      };
      NewClass.prototype.itemClicked = function() {
        Loto_Controller_1.default.instance.onBetChannelSelected(this.itemInfo.from, this.itemInfo.id);
      };
      NewClass.prototype.updateInfo = function(newFrom) {
        this.itemInfo.from = newFrom;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelName", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Loto.Controller": "Loto.Controller"
  } ],
  "Loto.ItemChat": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21886x+CspPJJFuy7Y7oLfg", "Loto.ItemChat");
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
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(data) {
        this.node.getComponent(cc.RichText).string = "<color=#ffcc00>" + data.nickname + " : </c><color=#ffffff>" + data.msg + "</color>";
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "Loto.ItemHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8e98d9AThE4azoMBB563ic", "Loto.ItemHistory");
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
    var Loto_Cmd_1 = require("./Loto.Cmd");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.labelTime = null;
        _this.labelMode = null;
        _this.labelNums = null;
        _this.labelBet = null;
        _this.labelWin = null;
        _this.labelResult = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(index, data) {
        this.bg.active = index % 2 != 0;
        this.labelTime.string = data.timePlay.split(" ")[0];
        this.labelMode.string = Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NAME[data.gameMode];
        var a = data.number.toString();
        var b = a.indexOf(",");
        if (data.number.length > 0 && -1 != data.number.toString().indexOf(",")) for (var index_1 = 0; index_1 < data.number.length; index_1++) {
          this.labelNums.string += 0 == index_1 ? "" : 5 == index_1 ? "\n" : ", ";
          this.labelNums.string += data.number[index_1];
        } else this.labelNums.string = data.number.toString();
        this.labelBet.string = Utils_1.default.formatNumber(data.pay * data.payRate);
        this.labelWin.string = Utils_1.default.formatNumber(data.win);
        0 == data.status ? this.labelResult.string = "\u101b\u101c\u1012\u103a\u1000\u102d\u102f\u1005\u1031\u102c\u1004\u1037\u103a\u1006\u102d\u102f\u1004\u103a\u1038" : 1 == data.status ? this.labelResult.string = "\u1015\u103c\u102e\u1038\u1015\u102b\u1015\u103c\u102e\u104b" : this.labelResult.string = "\u1021\u1019\u103e\u102c\u1038";
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "bg", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelMode", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelNums", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelWin", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelResult", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Loto.Cmd": "Loto.Cmd"
  } ],
  "Loto.ItemNewBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0260L7jYFFFaLQQwN8cuIC", "Loto.ItemNewBet");
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
    var Loto_Cmd_1 = require("./Loto.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(data) {
        this.node.getComponent(cc.RichText).string = "<color=#ffcc00>" + data.nickname + " : </c><color=#ff0000>\u1021\u101c\u1031\u102c\u1004\u103a\u1038\u1021\u1005\u102c\u1038\u101c\u102f\u1015\u103a\u1015\u102b\u104b " + Utils_1.default.formatNumber(data.bet) + " Gold</c><color=#ffffff> \u1021\u101c\u1031\u102c\u1004\u103a\u1038\u1021\u1005\u102c\u1038\u101c\u102f\u1015\u103a\u1015\u102b\u104b </c><color=#0036ff>" + Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[data.channel] + " </c><color=#ffffff> \u1021\u1019\u103b\u102d\u102f\u1038\u1021\u1005\u102c\u1038 </c><color=#ff0000>" + Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NAME[data.mode] + "</c> <color=#00ff9c>" + data.nums + " </c>";
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Loto.Cmd": "Loto.Cmd"
  } ],
  "Loto.ItemNumSelected": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8defb3yBhpPuYfS/aE78cMA", "Loto.ItemNumSelected");
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
        _this.labelNumber = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(data) {
        this.labelNumber.string = data;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelNumber", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "Loto.ItemNumber": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b398MAPnBPtpaf/K5cX9oJ", "Loto.ItemNumber");
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
    var Loto_Controller_1 = require("./Loto.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelValue = null;
        _this.itemInfo = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function(numCount, data) {
        this.itemInfo = data;
        this.formatName(numCount);
      };
      NewClass.prototype.formatName = function(numCount) {
        var text = this.itemInfo;
        10 == numCount || (100 == numCount ? this.itemInfo < 10 && (text = "0" + this.itemInfo) : this.itemInfo < 10 ? text = "00" + this.itemInfo : this.itemInfo < 100 && (text = "0" + this.itemInfo));
        this.labelValue.string = text;
      };
      NewClass.prototype.choose = function() {
        var state = this.node.getComponent(cc.Toggle).isChecked;
        state ? Loto_Controller_1.default.instance.addNumberPicked(this.labelValue.string) : Loto_Controller_1.default.instance.removeNumberPicked(this.labelValue.string);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "labelValue", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Loto.Controller": "Loto.Controller"
  } ],
  "Loto.LotoPopupCoinTransfer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "122a5cZR3dMPLlfSqMoGDFW", "Loto.LotoPopupCoinTransfer");
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
    exports.LotoTabCashOut = exports.LotoTabCashIn = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Configs_1 = require("../../Loading/src/Configs");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LotoTabCashIn = function() {
      function LotoTabCashIn() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
      }
      LotoTabCashIn.prototype.start = function(popup) {
        var _this = this;
        this.popup = popup;
        this.edbCoin.node.on("editing-did-ended", function() {
          var number = Utils_1.default.stringToInt(_this.edbCoin.string);
          _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_1 = function(i) {
          btn = this_1.quickButtons.children[i];
          var value = this_1.values[i];
          btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
          btn.on("click", function() {
            _this.edbCoin.string = Utils_1.default.formatNumber(value);
          });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) _loop_1(i);
      };
      LotoTabCashIn.prototype.submit = function() {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
          App_1.default.instance.alertDialog.showMsg("\u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u101e\u100a\u1037\u103a\u1015\u1019\u102c\u100f\u101e\u100a\u103a \u1019\u1019\u103e\u1014\u103a\u1000\u1014\u103a\u1015\u102b\u104b");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          Configs_1.default.Login.Coin = Configs_1.default.Login.Coin - coin;
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u101e\u1031\u102c\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a\u104b");
          _this.reset();
          MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
      };
      LotoTabCashIn.prototype.reset = function() {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
      };
      __decorate([ property(cc.Label) ], LotoTabCashIn.prototype, "lblBalance", void 0);
      __decorate([ property(cc.EditBox) ], LotoTabCashIn.prototype, "edbCoin", void 0);
      __decorate([ property(cc.Node) ], LotoTabCashIn.prototype, "quickButtons", void 0);
      LotoTabCashIn = __decorate([ ccclass("LotoPopupCoinTransfer.LotoTabCashIn") ], LotoTabCashIn);
      return LotoTabCashIn;
    }();
    exports.LotoTabCashIn = LotoTabCashIn;
    var LotoTabCashOut = function() {
      function LotoTabCashOut() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
      }
      LotoTabCashOut.prototype.start = function(popup) {
        var _this = this;
        this.popup = popup;
        this.edbCoin.node.on("editing-did-ended", function() {
          var number = Utils_1.default.stringToInt(_this.edbCoin.string);
          _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_2 = function(i) {
          btn = this_2.quickButtons.children[i];
          var value = this_2.values[i];
          btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
          btn.on("click", function() {
            _this.edbCoin.string = Utils_1.default.formatNumber(value);
          });
        };
        var this_2 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) _loop_2(i);
      };
      LotoTabCashOut.prototype.submit = function() {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
          App_1.default.instance.alertDialog.showMsg("\u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u101e\u100a\u1037\u103a\u1015\u1019\u102c\u100f\u101e\u100a\u103a \u1019\u1019\u103e\u1014\u103a\u1000\u1014\u103a\u1015\u102b\u104b");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: -coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          Configs_1.default.Login.Coin = Configs_1.default.Login.Coin + coin;
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u101e\u1031\u102c\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a\u104b");
          _this.reset();
          MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
      };
      LotoTabCashOut.prototype.reset = function() {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
      };
      __decorate([ property(cc.Label) ], LotoTabCashOut.prototype, "lblBalance", void 0);
      __decorate([ property(cc.EditBox) ], LotoTabCashOut.prototype, "edbCoin", void 0);
      __decorate([ property(cc.Node) ], LotoTabCashOut.prototype, "quickButtons", void 0);
      LotoTabCashOut = __decorate([ ccclass("LotoPopupCoinTransfer.LotoTabCashOut") ], LotoTabCashOut);
      return LotoTabCashOut;
    }();
    exports.LotoTabCashOut = LotoTabCashOut;
    var LotoPopupCoinTransfer = function(_super) {
      __extends(LotoPopupCoinTransfer, _super);
      function LotoPopupCoinTransfer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabCashIn = null;
        _this.tabCashOut = null;
        _this.tabSelectedIdx = 0;
        return _this;
      }
      LotoPopupCoinTransfer.prototype.start = function() {
        var _this = this;
        var _loop_3 = function(i) {
          this_3.tabs.toggleItems[i].node.on("toggle", function() {
            _this.tabSelectedIdx = i;
            _this.onTabChanged();
          });
        };
        var this_3 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) _loop_3(i);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          _this.tabCashIn.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
          _this.tabCashOut.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        this.tabCashIn.start(this);
        this.tabCashOut.start(this);
      };
      LotoPopupCoinTransfer.prototype.show = function() {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
      };
      LotoPopupCoinTransfer.prototype.onTabChanged = function() {
        for (var i = 0; i < this.tabContents.childrenCount; i++) this.tabContents.children[i].active = i == this.tabSelectedIdx;
        for (var j = 0; j < this.tabs.toggleItems.length; j++) this.tabs.toggleItems[j].node.getComponentInChildren(cc.LabelOutline).color = j == this.tabSelectedIdx ? cc.Color.BLACK.fromHEX("#AA5F00") : cc.Color.BLACK.fromHEX("#4677F3");
        switch (this.tabSelectedIdx) {
         case 0:
          this.tabCashIn.reset();
          break;

         case 1:
          this.tabCashOut.reset();
        }
      };
      LotoPopupCoinTransfer.prototype.actSubmitCashIn = function() {
        this.tabCashIn.submit();
      };
      LotoPopupCoinTransfer.prototype.actSubmitCashOut = function() {
        this.tabCashOut.submit();
      };
      LotoPopupCoinTransfer.prototype.actClearCashIn = function() {
        this.tabCashIn.edbCoin.string = "0";
      };
      LotoPopupCoinTransfer.prototype.actClearCashOut = function() {
        this.tabCashOut.edbCoin.string = "0";
      };
      __decorate([ property(cc.ToggleContainer) ], LotoPopupCoinTransfer.prototype, "tabs", void 0);
      __decorate([ property(cc.Node) ], LotoPopupCoinTransfer.prototype, "tabContents", void 0);
      __decorate([ property(LotoTabCashIn) ], LotoPopupCoinTransfer.prototype, "tabCashIn", void 0);
      __decorate([ property(LotoTabCashOut) ], LotoPopupCoinTransfer.prototype, "tabCashOut", void 0);
      LotoPopupCoinTransfer = __decorate([ ccclass ], LotoPopupCoinTransfer);
      return LotoPopupCoinTransfer;
    }(Dialog_1.default);
    exports.default = LotoPopupCoinTransfer;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Lobby.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0
  } ]
}, {}, [ "Loto.Cmd", "Loto.Controller", "Loto.ItemChannel", "Loto.ItemChat", "Loto.ItemHistory", "Loto.ItemNewBet", "Loto.ItemNumSelected", "Loto.ItemNumber", "Loto.LotoPopupCoinTransfer" ]);