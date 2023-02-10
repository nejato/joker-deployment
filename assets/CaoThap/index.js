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
  "CaoThap.CaoThapController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36018wZkFBHeaYfjyMBFEbx", "CaoThap.CaoThapController");
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
    exports.ButtonBet = void 0;
    var BundleControl_1 = require("../../Loading/src/BundleControl");
    var Configs_1 = require("../../Loading/src/Configs");
    var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var CaoThap_Cmd_1 = require("./CaoThap.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButtonBet = function() {
      function ButtonBet() {
        this.button = null;
        this._isActive = false;
      }
      ButtonBet.prototype.setActive = function(isActive) {
        this._isActive = isActive;
        this.button.node.color = isActive ? cc.Color.WHITE : cc.Color.GRAY;
        this.button.interactable = !isActive;
      };
      __decorate([ property(cc.Button) ], ButtonBet.prototype, "button", void 0);
      ButtonBet = __decorate([ ccclass("CaoThap.ButtonBet") ], ButtonBet);
      return ButtonBet;
    }();
    exports.ButtonBet = ButtonBet;
    var CaoThapController = function(_super) {
      __extends(CaoThapController, _super);
      function CaoThapController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprAtlasCards = null;
        _this.sprCardBack = null;
        _this.buttonBets = [];
        _this.lblJackpot = null;
        _this.lblSession = null;
        _this.lblUp = null;
        _this.lblCurrent = null;
        _this.lblDown = null;
        _this.lblStatus = null;
        _this.lblTime = null;
        _this.lblPlay = null;
        _this.lblPlayz = null;
        _this.btnNewTurn = null;
        _this.btnClose = null;
        _this.btnPlay = null;
        _this.btnUp = null;
        _this.btnDown = null;
        _this.sprAt = null;
        _this.sprCard = null;
        _this.lblToast = null;
        _this.lblWinCoin = null;
        _this.popups = [];
        _this.sprBtn = [];
        _this.fontBtn = [];
        _this.listBet = [ 1e3, 1e4, 5e4, 1e5, 5e5 ];
        _this.betIdx = 0;
        _this.oldBetIdx = 0;
        _this.isCanChangeBet = true;
        _this.currentTime = 0;
        _this.currentTimeInt = 0;
        _this.isPlaying = false;
        _this.numA = 0;
        _this.cardNameMap = new Object();
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        return _this;
      }
      CaoThapController.prototype.start = function() {
        var _this = this;
        for (var i = 0; i < 13; i++) for (var j = 0; j < 4; j++) {
          var cardPoint = (i + 2).toString();
          switch (cardPoint) {
           case "11":
            cardPoint = "J";
            break;

           case "12":
            cardPoint = "Q";
            break;

           case "13":
            cardPoint = "K";
            break;

           case "14":
            cardPoint = "A";
          }
          var cardSuit = "";
          switch (j) {
           case 0:
            cardSuit = "\u2660";
            break;

           case 1:
            cardSuit = "\u2663";
            break;

           case 2:
            cardSuit = "\u2666";
            break;

           case 3:
            cardSuit = "\u2665";
          }
          this.cardNameMap[4 * i + j] = cardPoint + cardSuit;
        }
        var _loop_1 = function(i) {
          btn = this_1.buttonBets[i];
          btn.setActive(i == this_1.betIdx);
          btn.button.node.on("click", function() {
            if (!_this.isCanChangeBet) {
              _this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
              return;
            }
            App_1.default.instance.showBgMiniGame("CaoThap");
            _this.oldBetIdx = _this.betIdx;
            _this.betIdx = i;
            for (var i_1 = 0; i_1 < _this.buttonBets.length; i_1++) _this.buttonBets[i_1].setActive(i_1 == _this.betIdx);
            _this.isCanChangeBet = false;
            _this.scheduleOnce(function() {
              _this.isCanChangeBet = true;
            }, 1);
            MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendChangeRoom(_this.oldBetIdx, _this.betIdx));
          });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) _loop_1(i);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function(data) {
          if (!_this.node.active) return;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case CaoThap_Cmd_1.default.Code.SCRIBE:
            var res = new CaoThap_Cmd_1.default.ReceiveScribe(data);
            _this.betIdx = res.roomId;
            for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].setActive(i == _this.betIdx);
            _this.btnPlay.interactable = true;
            for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = true;
            break;

           case CaoThap_Cmd_1.default.Code.UPDATE_INFO:
            var res = new CaoThap_Cmd_1.default.ReceiveUpdateInfo(data);
            _this.numA = res.numA;
            _this.lblUp.string = 0 == res.money1 ? "" : Utils_1.default.formatNumber(res.money1);
            _this.lblCurrent.string = Utils_1.default.formatNumber(res.money2);
            _this.lblDown.string = 0 == res.money3 ? "" : Utils_1.default.formatNumber(res.money3);
            _this.lblSession.string = "#" + res.referenceId.toString();
            _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + res.card);
            _this.sprAt.fillRange = _this.numA / 3;
            _this.currentTime = res.time;
            _this.btnNewTurn.interactable = res.step > 1;
            _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = res.step > 1 ? _this.sprBtn[0] : _this.sprBtn[1];
            _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = res.step > 1 ? _this.fontBtn[0] : _this.fontBtn[1];
            _this.btnPlay.node.active = false;
            _this.btnPlay.node.active = false;
            _this.lblStatus.string = "";
            _this.btnUp.interactable = res.money1 > 0;
            _this.btnDown.interactable = res.money3 > 0;
            for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = false;
            var cards = res.cards.split(",");
            for (var i = 0; i < cards.length - 1; i++) {
              i > 0 && (_this.lblStatus.string += ",");
              _this.lblStatus.string += _this.cardNameMap[cards[i]];
            }
            _this.isPlaying = true;
            break;

           case CaoThap_Cmd_1.default.Code.UPDATE_TIME:
            var res = new CaoThap_Cmd_1.default.ReceiveUpdateTime(data);
            _this.currentTime = res.time;
            break;

           case CaoThap_Cmd_1.default.Code.START:
            var res_1 = new CaoThap_Cmd_1.default.ReceiveStart(data);
            if (0 != res_1.error) {
              if (3 == res_1.error) {
                _this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
                _this.btnPlay.node.active = true;
                _this.btnPlay.node.active = true;
              }
              return;
            }
            Configs_1.default.Login.Coin = res_1.currentMoney;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.lblStatus.string = "";
            _this.lblUp.string = "";
            _this.lblDown.string = "";
            _this.lblCurrent.string = Utils_1.default.formatNumber(res_1.money2);
            _this.lblSession.string = "#" + res_1.referenceId.toString();
            _this.sprAt.fillRange = 0;
            _this.btnNewTurn.interactable = false;
            _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.sprBtn[1];
            _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.fontBtn[1];
            for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = false;
            48 != res_1.card && 49 != res_1.card && 50 != res_1.card && 51 != res_1.card || _this.numA++;
            _this.spinCard(res_1.card, function() {
              _this.lblStatus.string += _this.cardNameMap[res_1.card];
              _this.lblUp.string = 0 == res_1.money1 ? "" : Utils_1.default.formatNumber(res_1.money1);
              _this.lblDown.string = 0 == res_1.money3 ? "" : Utils_1.default.formatNumber(res_1.money3);
              _this.btnUp.interactable = (true, _this.isPlaying) && res_1.money1 > 0;
              _this.btnDown.interactable = (true, _this.isPlaying) && res_1.money3 > 0;
              _this.sprAt.fillRange = _this.numA / 3;
            });
            _this.currentTime = 120;
            _this.isPlaying = true;
            break;

           case CaoThap_Cmd_1.default.Code.PLAY:
            var res_2 = new CaoThap_Cmd_1.default.ReceivePlay(data);
            _this.currentTime = 120;
            for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = false;
            48 != res_2.card && 49 != res_2.card && 50 != res_2.card && 51 != res_2.card || _this.numA++;
            _this.spinCard(res_2.card, function() {
              "" != _this.lblStatus.string && (_this.lblStatus.string += ",");
              _this.lblStatus.string += _this.cardNameMap[res_2.card];
              _this.lblUp.string = 0 == res_2.money1 ? "" : Utils_1.default.formatNumber(res_2.money1);
              _this.lblCurrent.string = Utils_1.default.formatNumber(res_2.money2);
              _this.lblDown.string = 0 == res_2.money3 ? "" : Utils_1.default.formatNumber(res_2.money3);
              _this.btnUp.interactable = _this.isPlaying && res_2.money1 > 0;
              _this.btnDown.interactable = _this.isPlaying && res_2.money3 > 0;
              _this.btnNewTurn.interactable = _this.isPlaying;
              _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.isPlaying ? _this.sprBtn[0] : _this.sprBtn[1];
              _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.isPlaying ? _this.fontBtn[0] : _this.fontBtn[1];
            });
            break;

           case CaoThap_Cmd_1.default.Code.STOP:
            var res_3 = new CaoThap_Cmd_1.default.ReceiveStop(data);
            _this.isPlaying = false;
            var timeDelay = 3;
            switch (res_3.result) {
             case 4:
              timeDelay = .5;
            }
            Configs_1.default.Login.Coin = res_3.currentMoney;
            _this.scheduleOnce(function() {
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
              _this.lblStatus.string = App_1.default.instance.getTextLang("txt_caothap_play");
              _this.sprCard.spriteFrame = _this.sprCardBack;
              _this.btnNewTurn.interactable = false;
              _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.sprBtn[1];
              _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.fontBtn[1];
              _this.btnPlay.node.active = true;
              _this.lblPlay.node.active = true;
              _this.lblPlayz.node.active = false;
              _this.sprAt.fillRange = 0;
              _this.numA = 0;
              for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = true;
              _this.lblTime.string = "2:00";
              _this.currentTime = 0;
              _this.lblUp.string = "";
              _this.lblDown.string = "";
              _this.lblCurrent.string = Utils_1.default.formatNumber(_this.listBet[_this.betIdx]);
              _this.lblWinCoin.node.stopAllActions();
              _this.lblWinCoin.node.setPosition(-26, -16);
              _this.lblWinCoin.node.opacity = 0;
              _this.lblWinCoin.string = "+" + Utils_1.default.formatNumber(res_3.moneyExchange);
              _this.lblWinCoin.node.active = true;
              _this.lblWinCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.2), cc.moveBy(2, cc.v2(0, 100))), cc.fadeOut(.15), cc.callFunc(function() {
                _this.lblWinCoin.node.active = false;
              })));
            }, timeDelay);
            break;

           case CaoThap_Cmd_1.default.Code.CHANGE_ROOM:
            var res = new CaoThap_Cmd_1.default.ReceiveChangeRoom(data);
            if (0 != res.status) {
              _this.betIdx = _this.oldBetIdx;
              for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].setActive(i == _this.betIdx);
            }
            break;

           case CaoThap_Cmd_1.default.Code.UPDATE_JACKPOT:
            var res = new CaoThap_Cmd_1.default.ReceiveUpdateJackpot(data);
            Tween_1.default.numberTo(_this.lblJackpot, res.value, .3);
          }
        }, this);
      };
      CaoThapController.prototype.update = function(dt) {
        if (this.currentTime > 0) {
          this.currentTime = Math.max(0, this.currentTime - dt);
          var _currentTimeInt = parseInt(this.currentTime.toString());
          if (this.currentTimeInt != _currentTimeInt) {
            this.currentTimeInt = _currentTimeInt;
            this.lblTime.string = this.longToTime(this.currentTimeInt);
          }
        }
      };
      CaoThapController.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      CaoThapController.prototype.spinCard = function(id, onFinished) {
        var _this = this;
        var c = 15;
        this.schedule(function() {
          c--;
          if (0 == c) {
            _this.sprCard.node.color = cc.Color.WHITE;
            _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + id);
            onFinished();
          } else {
            _this.sprCard.node.color = cc.Color.BLACK.fromHEX("#CCCCCC");
            _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + Utils_1.default.randomRangeInt(0, 52));
          }
        }, .1, c - 1, 0);
      };
      CaoThapController.prototype.longToTime = function(time) {
        var m = parseInt((time / 60).toString());
        var s = time % 60;
        return m + ":" + (s < 10 ? "0" : "") + s;
      };
      CaoThapController.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.lblToast.node.parent.active = false;
        this.lblStatus.string = App_1.default.instance.getTextLang("txt_caothap_play");
        this.lblSession.string = "";
        this.lblUp.string = "";
        this.lblDown.string = "";
        this.lblCurrent.string = Utils_1.default.formatNumber(this.listBet[this.betIdx]);
        this.sprAt.fillRange = 0;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnPlay.interactable = false;
        this.lblWinCoin.node.active = false;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].setActive(i == this.betIdx);
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendScribe(this.betIdx));
      };
      CaoThapController.prototype.actStart = function() {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnPlay.node.active = false;
        this.lblPlay.node.active = false;
        this.lblPlayz.node.active = true;
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendStart(this.listBet[this.betIdx]));
      };
      CaoThapController.prototype.actUp = function() {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendPlay(this.listBet[this.betIdx], true));
      };
      CaoThapController.prototype.actDown = function() {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendPlay(this.listBet[this.betIdx], false));
      };
      CaoThapController.prototype.actStop = function() {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendStop(this.listBet[this.betIdx]));
      };
      CaoThapController.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        App_1.default.instance.hideGameMini("CaoThap");
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendUnScribe(this.betIdx));
      };
      CaoThapController.prototype.actPopupGuide = function() {
        var _this = this;
        null == this.popupGuide ? BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupGuide", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
          _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupGuide.show();
          _this.popups.push(_this.popupGuide.node);
        }) : this.popupGuide.show();
      };
      CaoThapController.prototype.actPopupHistory = function() {
        var _this = this;
        null == this.popupHistory ? BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupHistory", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHistory = cc.instantiate(prefab).getComponent("CaoThap.PopupHistory");
          _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupHistory.show();
          _this.popups.push(_this.popupHistory.node);
        }) : this.popupHistory.show();
      };
      CaoThapController.prototype.actPopupHonor = function() {
        var _this = this;
        null == this.popupHonor ? BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupHonors", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHonor = cc.instantiate(prefab).getComponent("CaoThap.PopupHonors");
          _this.popupHonor.node.parent = cc.director.getScene().getChildByName("Canvas");
          _this.popupHonor.show();
          _this.popups.push(_this.popupHonor.node);
        }) : this.popupHonor.show();
      };
      CaoThapController.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      __decorate([ property(cc.SpriteAtlas) ], CaoThapController.prototype, "sprAtlasCards", void 0);
      __decorate([ property(cc.SpriteFrame) ], CaoThapController.prototype, "sprCardBack", void 0);
      __decorate([ property([ ButtonBet ]) ], CaoThapController.prototype, "buttonBets", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblUp", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblCurrent", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblDown", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblStatus", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblTime", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblPlay", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblPlayz", void 0);
      __decorate([ property(cc.Button) ], CaoThapController.prototype, "btnNewTurn", void 0);
      __decorate([ property(cc.Button) ], CaoThapController.prototype, "btnClose", void 0);
      __decorate([ property(cc.Button) ], CaoThapController.prototype, "btnPlay", void 0);
      __decorate([ property(cc.Button) ], CaoThapController.prototype, "btnUp", void 0);
      __decorate([ property(cc.Button) ], CaoThapController.prototype, "btnDown", void 0);
      __decorate([ property(cc.Sprite) ], CaoThapController.prototype, "sprAt", void 0);
      __decorate([ property(cc.Sprite) ], CaoThapController.prototype, "sprCard", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblToast", void 0);
      __decorate([ property(cc.Label) ], CaoThapController.prototype, "lblWinCoin", void 0);
      __decorate([ property([ cc.Node ]) ], CaoThapController.prototype, "popups", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], CaoThapController.prototype, "sprBtn", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], CaoThapController.prototype, "fontBtn", void 0);
      CaoThapController = __decorate([ ccclass ], CaoThapController);
      return CaoThapController;
    }(MiniGame_1.default);
    exports.default = CaoThapController;
    cc._RF.pop();
  }, {
    "../../Loading/src/BundleControl": void 0,
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/MiniGame": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./CaoThap.Cmd": "CaoThap.Cmd"
  } ],
  "CaoThap.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5d2dv+EAxA86iOBlbg0cVg", "CaoThap.Cmd");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SCRIBE = 6004;
        Code.UNSCRIBE = 6005;
        Code.START = 6001;
        Code.PLAY = 6002;
        Code.CHANGE_ROOM = 6006;
        Code.UPDATE_TIME = 6008;
        Code.UPDATE_INFO = 6009;
        Code.UPDATE_JACKPOT = 6003;
        Code.STOP = 6007;
        return Code;
      }();
      cmd.Code = Code;
      var SendScribe = function(_super) {
        __extends(SendScribe, _super);
        function SendScribe(betIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SCRIBE);
          _this.packHeader();
          _this.putByte(betIdx);
          _this.updateSize();
          return _this;
        }
        return SendScribe;
      }(Network_OutPacket_1.default);
      cmd.SendScribe = SendScribe;
      var ReceiveScribe = function(_super) {
        __extends(ReceiveScribe, _super);
        function ReceiveScribe(data) {
          var _this = _super.call(this, data) || this;
          _this.status = 0;
          _this.roomId = 0;
          _this.status = _this.getByte();
          _this.roomId = _this.getByte();
          return _this;
        }
        return ReceiveScribe;
      }(Network_InPacket_1.default);
      cmd.ReceiveScribe = ReceiveScribe;
      var SendUnScribe = function(_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe(betIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSCRIBE);
          _this.packHeader();
          _this.putByte(betIdx);
          _this.updateSize();
          return _this;
        }
        return SendUnScribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnScribe = SendUnScribe;
      var SendChangeRoom = function(_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(oldBetIdx, newBetIdx) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHANGE_ROOM);
          _this.packHeader();
          _this.putByte(oldBetIdx);
          _this.putByte(newBetIdx);
          _this.updateSize();
          return _this;
        }
        return SendChangeRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChangeRoom = SendChangeRoom;
      var ReceiveChangeRoom = function(_super) {
        __extends(ReceiveChangeRoom, _super);
        function ReceiveChangeRoom(data) {
          var _this = _super.call(this, data) || this;
          _this.status = 0;
          _this.status = _this.getByte();
          return _this;
        }
        return ReceiveChangeRoom;
      }(Network_InPacket_1.default);
      cmd.ReceiveChangeRoom = ReceiveChangeRoom;
      var SendStart = function(_super) {
        __extends(SendStart, _super);
        function SendStart(betValue) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.START);
          _this.packHeader();
          _this.putInt(betValue);
          _this.putByte(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendStart;
      }(Network_OutPacket_1.default);
      cmd.SendStart = SendStart;
      var ReceiveStart = function(_super) {
        __extends(ReceiveStart, _super);
        function ReceiveStart(data) {
          var _this = _super.call(this, data) || this;
          _this.error = 0;
          _this.referenceId = 0;
          _this.card = 0;
          _this.money1 = 0;
          _this.money2 = 0;
          _this.money3 = 0;
          _this.currentMoney = 0;
          _this.error = _this.getError();
          _this.referenceId = _this.getLong();
          _this.card = _this.getByte();
          _this.money1 = _this.getLong();
          _this.money2 = _this.getLong();
          _this.money3 = _this.getLong();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveStart;
      }(Network_InPacket_1.default);
      cmd.ReceiveStart = ReceiveStart;
      var SendPlay = function(_super) {
        __extends(SendPlay, _super);
        function SendPlay(betValue, isUp) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.PLAY);
          _this.packHeader();
          _this.putInt(betValue);
          _this.putByte(Configs_1.default.App.MONEY_TYPE);
          _this.putByte(isUp ? 1 : 0);
          _this.updateSize();
          return _this;
        }
        return SendPlay;
      }(Network_OutPacket_1.default);
      cmd.SendPlay = SendPlay;
      var ReceivePlay = function(_super) {
        __extends(ReceivePlay, _super);
        function ReceivePlay(data) {
          var _this = _super.call(this, data) || this;
          _this.card = 0;
          _this.money1 = 0;
          _this.money2 = 0;
          _this.money3 = 0;
          _this.card = _this.getByte();
          _this.money1 = _this.getLong();
          _this.money2 = _this.getLong();
          _this.money3 = _this.getLong();
          return _this;
        }
        return ReceivePlay;
      }(Network_InPacket_1.default);
      cmd.ReceivePlay = ReceivePlay;
      var SendStop = function(_super) {
        __extends(SendStop, _super);
        function SendStop(betValue) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.STOP);
          _this.packHeader();
          _this.putInt(betValue);
          _this.putByte(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendStop;
      }(Network_OutPacket_1.default);
      cmd.SendStop = SendStop;
      var ReceiveStop = function(_super) {
        __extends(ReceiveStop, _super);
        function ReceiveStop(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.currentMoney = 0;
          _this.moneyExchange = 0;
          _this.result = _this.getByte();
          _this.currentMoney = _this.getLong();
          _this.moneyExchange = _this.getLong();
          return _this;
        }
        return ReceiveStop;
      }(Network_InPacket_1.default);
      cmd.ReceiveStop = ReceiveStop;
      var ReceiveUpdateInfo = function(_super) {
        __extends(ReceiveUpdateInfo, _super);
        function ReceiveUpdateInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.numA = 0;
          _this.card = 0;
          _this.money1 = 0;
          _this.money2 = 0;
          _this.money3 = 0;
          _this.time = 0;
          _this.step = 0;
          _this.referenceId = 0;
          _this.cards = "";
          _this.numA = _this.getByte();
          _this.card = _this.getByte();
          _this.money1 = _this.getLong();
          _this.money2 = _this.getLong();
          _this.money3 = _this.getLong();
          _this.time = _this.getShort();
          _this.step = _this.getByte();
          _this.referenceId = _this.getLong();
          _this.cards = _this.getString();
          return _this;
        }
        return ReceiveUpdateInfo;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateInfo = ReceiveUpdateInfo;
      var ReceiveUpdateJackpot = function(_super) {
        __extends(ReceiveUpdateJackpot, _super);
        function ReceiveUpdateJackpot(data) {
          var _this = _super.call(this, data) || this;
          _this.value = 0;
          _this.value = _this.getLong();
          return _this;
        }
        return ReceiveUpdateJackpot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateJackpot = ReceiveUpdateJackpot;
      var ReceiveUpdateTime = function(_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
          var _this = _super.call(this, data) || this;
          _this.time = 0;
          _this.time = _this.getShort();
          return _this;
        }
        return ReceiveUpdateTime;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateTime = ReceiveUpdateTime;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "CaoThap.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca485p4tQhO3JvdidJzPzNa", "CaoThap.PopupHistory");
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
        _this.fontNum = [];
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
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
          c: 107,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page,
          nn: Configs_1.default.Login.Nickname
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 6; i++) {
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
                item.getChildByName("Session").getComponent(cc.Label).string = itemData["transId"];
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                item.getChildByName("Result").getComponent(cc.Label).string = itemData["cards"];
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["prize"]);
                item.getChildByName("Win").getComponent(cc.Label).font = itemData["prize"] > 0 ? _this.fontNum[1] : _this.fontNum[0];
                item.getChildByName("Step").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["step"]);
                1 == itemData["step"] ? item.getChildByName("BetDoor").getComponent(cc.Label).string = "" : item.getChildByName("BetDoor").getComponent(cc.Label).string = 0 == itemData["potBet"] ? "\u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a" : "\u1021\u1011\u1000\u103a";
                item.active = true;
              } else item.active = false;
            }
          }
        });
      };
      __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHistory.prototype, "itemTemplate", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], PopupHistory.prototype, "fontNum", void 0);
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
  "CaoThap.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2102dKYcKJPSaCuwo7ODtFN", "CaoThap.PopupHonors");
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
    var PopupHonors = function(_super) {
      __extends(PopupHonors, _super);
      function PopupHonors() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHonors.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      PopupHonors.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      PopupHonors.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupHonors.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHonors.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      PopupHonors.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 108,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 6; i++) {
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
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["nickname"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["prize"]);
                switch (itemData["result"]) {
                 case 4:
                  item.getChildByName("Result").getComponent(cc.Label).string = "\u1000\u103c\u102e\u1038\u1019\u102c\u1038\u1010\u1032\u1037\u1021\u1014\u102d\u102f\u1004\u103a\u101b";
                  break;

                 default:
                  item.getChildByName("Result").getComponent(cc.Label).string = "\u101b\u1010\u1014\u102c\u1019\u103b\u102c\u1038 \u1016\u1031\u102c\u1000\u103a\u1011\u103d\u1004\u103a\u1038\u1001\u103c\u1004\u103a\u1038\u104b";
                }
                item.active = true;
              } else item.active = false;
            }
          }
        });
      };
      __decorate([ property(cc.Label) ], PopupHonors.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
      PopupHonors = __decorate([ ccclass ], PopupHonors);
      return PopupHonors;
    }(Dialog_1.default);
    exports.default = PopupHonors;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ]
}, {}, [ "CaoThap.CaoThapController", "CaoThap.Cmd", "CaoThap.PopupHistory", "CaoThap.PopupHonors" ]);