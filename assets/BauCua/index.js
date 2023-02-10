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
  "BauCua.BauCuaController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9595cfEBbBFD7c/2AZ2TcQp", "BauCua.BauCuaController");
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
    var Configs_1 = require("../../Loading/src/Configs");
    var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var BauCua_ButtonPayBet_1 = require("./BauCua.ButtonPayBet");
    var BauCua_Cmd_1 = require("./BauCua.Cmd");
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButtonBet = function() {
      function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this.border_chip = null;
        this._isActive = false;
      }
      ButtonBet.prototype.setActive = function(isActive) {
        this._isActive = isActive;
        this.button.interactable = !isActive;
        isActive && (this.border_chip.node.x = this.button.node.x);
      };
      __decorate([ property(cc.Button) ], ButtonBet.prototype, "button", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfNormal", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfActive", void 0);
      __decorate([ property(sp.Skeleton) ], ButtonBet.prototype, "border_chip", void 0);
      ButtonBet = __decorate([ ccclass("BauCua.ButtonBet") ], ButtonBet);
      return ButtonBet;
    }();
    exports.ButtonBet = ButtonBet;
    var BauCuaController = function(_super) {
      __extends(BauCuaController, _super);
      function BauCuaController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprSmallDices = [];
        _this.scrollChip = [];
        _this.sprResultDices = [];
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblToast = null;
        _this.lblWinCoin = null;
        _this.buttonBets = [];
        _this.btnPayBets = [];
        _this.nodeSoiCau = null;
        _this.nodeHistories = null;
        _this.itemHistoryTemplate = null;
        _this.btnConfirm = null;
        _this.btnCancel = null;
        _this.btnReBet = null;
        _this.lblsSoiCau = [];
        _this.popups = [];
        _this.popupContainer = null;
        _this.scrHistory = null;
        _this.bowl = null;
        _this.listBet = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7 ];
        _this.roomId = 0;
        _this.betIdx = 0;
        _this.isBetting = false;
        _this.historiesData = [];
        _this.beted = [ 0, 0, 0, 0, 0, 0 ];
        _this.betting = [ 0, 0, 0, 0, 0, 0 ];
        _this.inited = false;
        _this.sprResultDice = null;
        _this.percentScroll = 0;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        _this.baucuaBundle = null;
        return _this;
      }
      BauCuaController_1 = BauCuaController;
      BauCuaController.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.sprResultDice = this.bowl.getChildByName("sprResult");
      };
      BauCuaController.prototype.start = function() {
        var _this = this;
        this.timeBet = Date.now();
        BauCuaController_1.instance = this;
        this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .1);
        this.itemHistoryTemplate.active = false;
        var _loop_1 = function(i) {
          btn = this_1.buttonBets[i];
          btn.button.node.on("click", function() {
            _this.betIdx = i;
            App_1.default.instance.showBgMiniGame("BauCua");
            for (var j = 0; j < _this.buttonBets.length; j++) _this.buttonBets[j].setActive(j == _this.betIdx);
          });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) _loop_1(i);
        var _loop_2 = function(i) {
          this_2.btnPayBets[i].node.on("click", function() {
            App_1.default.instance.showBgMiniGame("BauCua");
            _this.actConfirm(i);
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.btnPayBets.length; i++) _loop_2(i);
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
           case BauCua_Cmd_1.default.Code.INFO:
            _this.inited = true;
            var res = new BauCua_Cmd_1.default.ReceiveInfo(data);
            _this.isBetting = res.bettingState;
            _this.lblSession.string = "#" + res.referenceId;
            _this.lblTime.string = _this.longToTime(res.remainTime);
            var totalBets = res.potData.split(",");
            var beted = res.betData.split(",");
            for (var i = 0; i < _this.btnPayBets.length; i++) {
              var btnPayBet = _this.btnPayBets[i];
              btnPayBet.lblTotal.string = _this.moneyToK(parseInt(totalBets[i]));
              btnPayBet.lblBeted.string = _this.moneyToK(parseInt(beted[i]));
              btnPayBet.overlay.active = true;
              btnPayBet.button.interactable = _this.isBetting;
              btnPayBet.lblFactor.node.active = false;
              _this.beted[i] = parseInt(beted[i]);
            }
            if (!_this.isBetting) {
              _this.btnPayBets[res.dice1].overlay.active = false;
              _this.btnPayBets[res.dice2].overlay.active = false;
              _this.btnPayBets[res.dice3].overlay.active = false;
              if (res.xValue > 1) {
                _this.btnPayBets[res.xPot].lblFactor.node.active = true;
                _this.btnPayBets[res.xPot].lblFactor.string = "x" + res.xValue;
              }
            }
            if ("" != res.lichSuPhien) {
              var histories = res.lichSuPhien.split(",");
              for (var i = 0; i < histories.length; i++) {
                _this.historiesData.push([ parseInt(histories[i]), parseInt(histories[++i]), parseInt(histories[++i]) ]);
                ++i;
                ++i;
              }
              _this.loadHistory(_this.historiesData);
              _this.caculatorSoiCau();
            }
            break;

           case BauCua_Cmd_1.default.Code.START_NEW_GAME:
            var res = new BauCua_Cmd_1.default.ReceiveNewGame(data);
            _this.actStartNewGame();
            _this.lblSession.string = "#" + res.referenceId;
            for (var i = 0; i < _this.btnPayBets.length; i++) {
              var btnPayBet = _this.btnPayBets[i];
              btnPayBet.lblBeted.string = "0";
              btnPayBet.lblBeted.node.color = cc.Color.WHITE;
              btnPayBet.lblTotal.string = "0";
              btnPayBet.overlay.active = false;
              btnPayBet.button.interactable = true;
              btnPayBet.lblFactor.node.active = false;
            }
            _this.beted = [ 0, 0, 0, 0, 0, 0 ];
            _this.betting = [ 0, 0, 0, 0, 0, 0 ];
            _this.btnConfirm.interactable = true;
            _this.btnCancel.interactable = true;
            _this.btnReBet.interactable = true;
            break;

           case BauCua_Cmd_1.default.Code.UPDATE:
            var res = new BauCua_Cmd_1.default.ReceiveUpdate(data);
            _this.lblTime.string = _this.longToTime(res.remainTime);
            _this.isBetting = 1 == res.bettingState;
            var totalBets = res.potData.split(",");
            for (var i = 0; i < _this.btnPayBets.length; i++) {
              var btnPayBet = _this.btnPayBets[i];
              btnPayBet.lblTotal.string = _this.moneyToK(parseInt(totalBets[i]));
              if (_this.isBetting) {
                btnPayBet.overlay.active = false;
                btnPayBet.lblFactor.node.active = false;
              } else {
                btnPayBet.button.interactable = false;
                btnPayBet.lblBeted.string = _this.moneyToK(_this.beted[i]);
                btnPayBet.lblBeted.node.color = cc.Color.WHITE;
              }
            }
            break;

           case BauCua_Cmd_1.default.Code.RESULT:
            var res = new BauCua_Cmd_1.default.ReceiveResult(data);
            _this.atcShowResult(res);
            break;

           case BauCua_Cmd_1.default.Code.PRIZE:
            var res = new BauCua_Cmd_1.default.ReceivePrize(data);
            Configs_1.default.Login.Coin = res.currentMoney;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.lblWinCoin.node.stopAllActions();
            _this.lblWinCoin.node.setPosition(-26, -16);
            _this.lblWinCoin.node.opacity = 0;
            _this.lblWinCoin.string = "+" + Utils_1.default.formatNumber(res.prize);
            _this.lblWinCoin.node.active = true;
            _this.lblWinCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.2), cc.moveBy(2, cc.v2(0, 100))), cc.fadeOut(.15), cc.callFunc(function() {
              _this.lblWinCoin.node.active = false;
            })));
            break;

           case BauCua_Cmd_1.default.Code.BET:
            var res = new BauCua_Cmd_1.default.ReceiveBet(data);
            switch (res.result) {
             case 100:
              _this.showToast(App_1.default.instance.getTextLang("txt_bet_error2"));
              break;

             case 101:
              _this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
              break;

             case 102:
              _this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
              break;

             case 103:
              _this.showToast("Ch\u1ec9 \u0111\u01b0\u1ee3c c\u01b0\u1ee3c t\u1ed1i \u0111a 1000.000.");
              _this.btnConfirm.interactable = true;
              _this.btnCancel.interactable = true;
              _this.btnReBet.interactable = true;
            }
            if (1 != res.result) break;
            Configs_1.default.Login.Coin = res.currentMoney;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            for (var i = 0; i < _this.btnPayBets.length; i++) {
              _this.beted[i] += _this.betting[i];
              _this.betting[i] = 0;
              var btnPayBet = _this.btnPayBets[i];
              btnPayBet.lblBeted.string = _this.moneyToK(_this.beted[i]);
              btnPayBet.lblBeted.node.color = cc.Color.WHITE;
            }
            BauCuaController_1.lastBeted = _this.beted;
            _this.showToast(App_1.default.instance.getTextLang("txt_bet_success"));
            _this.btnConfirm.interactable = true;
            _this.btnCancel.interactable = true;
            _this.btnReBet.interactable = true;
          }
        }, this);
      };
      BauCuaController.prototype.onBtnScrollLeft = function() {
        this.percentScroll -= .3;
        this.percentScroll <= 0 && (this.percentScroll = 0);
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .1);
      };
      BauCuaController.prototype.onBtnScrollRight = function() {
        this.percentScroll += .3;
        this.percentScroll >= 1 && (this.percentScroll = 1);
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, .1);
      };
      BauCuaController.prototype.spin = function(arrDice) {
        for (var i = 0; i < this.btnPayBets.length; i++) {
          var btnPayBet = this.btnPayBets[i];
          btnPayBet.overlay.active = false;
        }
        for (var i = 0; i < arrDice.length; i++) {
          var btnPayBet = this.btnPayBets[arrDice[i]];
          btnPayBet.overlay.active = true;
          TW(btnPayBet.overlay).then(cc.blink(2, 10)).start();
        }
      };
      BauCuaController.prototype.longToTime = function(time) {
        var m = parseInt((time / 60).toString());
        var s = time % 60;
        return (s < 10 ? "0" : "") + s;
      };
      BauCuaController.prototype.moneyToK = function(money) {
        if (money < 1e5) return Utils_1.default.formatNumber(money);
        return Utils_1.default.formatMoney(money);
      };
      BauCuaController.prototype.addHistory = function(dices) {
        this.historiesData.push(dices);
      };
      BauCuaController.prototype.loadHistory = function(historyData) {
        var _this = this;
        var listData = historyData.slice();
        listData.reverse();
        var updateCb = function(item, dices) {
          item.active = true;
          item.getChildByName("dice1").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[0]];
          item.getChildByName("dice2").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[1]];
          item.getChildByName("dice3").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[2]];
        };
        this.scrHistory.setDataList(updateCb, listData);
      };
      BauCuaController.prototype.caculatorSoiCau = function() {
        var counts = [ 0, 0, 0, 0, 0, 0 ];
        for (var i = 0; i < this.historiesData.length; i++) {
          var dices = this.historiesData[i];
          for (var j = 0; j < 3; j++) counts[dices[j]]++;
        }
        for (var i = 0; i < this.lblsSoiCau.length; i++) this.lblsSoiCau[i].string = counts[i].toString();
      };
      BauCuaController.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      BauCuaController.prototype.actSoiCau = function() {
        this.nodeHistories.active = !this.nodeHistories.active;
        this.nodeSoiCau.active = !this.nodeHistories.active;
      };
      BauCuaController.prototype.actCancel = function() {
        if (!this.inited) return;
        for (var i = 0; i < this.btnPayBets.length; i++) {
          var btnPayBet = this.btnPayBets[i];
          btnPayBet.lblBeted.node.color = cc.Color.WHITE;
          btnPayBet.lblBeted.string = this.moneyToK(this.beted[i]);
          this.betting[i] = 0;
        }
      };
      BauCuaController.prototype.actConfirm = function(index) {
        if (!this.inited) return;
        if (!this.isBetting) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
          return;
        }
        if (Configs_1.default.Login.Coin < this.listBet[this.betIdx]) {
          this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
          return;
        }
        if (Date.now() - this.timeBet < 1e3) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        this.betting[index] += this.listBet[this.betIdx];
        var total = 0;
        for (var i = 0; i < this.betting.length; i++) total += this.betting[i];
        if (total <= 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error4"));
          return;
        }
        this.btnPayBets[index].lblBeted.string = this.moneyToK(this.betting[index] + this.beted[index]);
        this.timeBet = Date.now();
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendBet(this.betting.toString()));
        this.btnConfirm.interactable = false;
        this.btnCancel.interactable = false;
        this.btnReBet.interactable = false;
      };
      BauCuaController.prototype.actReBet = function() {
        if (!this.inited) return;
        if (!this.isBetting) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
          return;
        }
        if (null == BauCuaController_1.lastBeted) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error5"));
          return;
        }
        var totalBeted = 0;
        for (var i = 0; i < this.beted.length; i++) totalBeted += this.beted[i];
        if (totalBeted > 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error6"));
          return;
        }
        this.betting = BauCuaController_1.lastBeted;
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendBet(BauCuaController_1.lastBeted.toString()));
        this.btnConfirm.interactable = false;
        this.btnCancel.interactable = false;
        this.btnReBet.interactable = false;
      };
      BauCuaController.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("BauCua");
        this.inited = false;
        this.lblToast.node.parent.active = false;
        this.lblWinCoin.node.active = false;
        this.betIdx = 0;
        this.betting = [ 0, 0, 0, 0, 0, 0 ];
        this.beted = [ 0, 0, 0, 0, 0, 0 ];
        this.historiesData = [];
        this.nodeHistories.active = true;
        this.nodeSoiCau.active = !this.nodeHistories.active;
        this.nodeHistories.getComponent(cc.ScrollView).scrollToTop(0);
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].setActive(i == this.betIdx);
        for (var i = 0; i < this.btnPayBets.length; i++) {
          var btnPayBet = this.btnPayBets[i];
          btnPayBet.lblBeted.string = "0";
          btnPayBet.lblBeted.node.color = cc.Color.WHITE;
          btnPayBet.lblTotal.string = "0";
          btnPayBet.lblFactor.node.active = false;
          btnPayBet.overlay.active = true;
          btnPayBet.button.interactable = false;
        }
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendScribe(this.roomId));
      };
      BauCuaController.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        App_1.default.instance.hideGameMini("BauCua");
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendUnScribe(this.roomId));
      };
      BauCuaController.prototype._onShowed = function() {
        _super.prototype._onShowed;
      };
      BauCuaController.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      BauCuaController.prototype.atcShowResult = function(res) {
        var _this = this;
        this.sprResultDice.children[0].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice1];
        this.sprResultDice.children[1].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice2];
        this.sprResultDice.children[2].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice3];
        var bowlOn = this.bowl.getChildByName("bowl");
        cc.Tween.stopAllByTarget(bowlOn);
        TW(bowlOn).to(.7, {
          y: bowlOn.y + 50,
          opacity: 150,
          scale: 1
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.historiesData.push([ res.dice1, res.dice2, res.dice3 ]);
          _this.loadHistory(_this.historiesData);
          _this.caculatorSoiCau();
          if (res.xValue > 1) {
            _this.btnPayBets[res.xPot].lblFactor.node.active = true;
            _this.btnPayBets[res.xPot].lblFactor.string = "x" + res.xValue;
          }
          _this.spin([ res.dice1, res.dice2, res.dice3 ]);
          bowlOn.active = false;
        }).start();
      };
      BauCuaController.prototype.actStartNewGame = function() {
        var _this = this;
        var bowlOn = this.bowl.getChildByName("bowl");
        bowlOn.active = true;
        TW(bowlOn).set({
          opacity: 255,
          y: 0,
          scale: 1
        }).start();
        var initPos = this.bowl.getPosition();
        var acShake = TW().to(.1, {
          x: initPos.x - 20,
          scale: 1
        }).to(.1, {
          x: initPos.x
        }).to(.1, {
          x: initPos.x + 20
        }).to(.1, {
          x: initPos.x,
          scale: .8
        });
        cc.Tween.stopAllByTarget(this.bowl);
        TW(this.bowl).repeat(5, acShake).call(function() {
          _this.showToast(App_1.default.instance.getTextLang("txt_bet_invite"));
        }).start();
      };
      BauCuaController.prototype.actPopupHonors = function() {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        null == this.popupHonor ? this.baucuaBundle.load("res/Prefabs/PopupHonors", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupHonor = cc.instantiate(prefab).getComponent("BauCua.PopupHonors");
          _this.popupHonor.node.parent = _this.popupContainer;
          _this.popupHonor.node.active = true;
          _this.popupHonor.show();
          _this.popups.push(_this.popupHonor.node);
        }) : this.popupHonor.show();
      };
      BauCuaController.prototype.actPopupHistory = function() {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        null == this.popupHistory ? this.baucuaBundle.load("res/Prefabs/PopupHistory", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupHistory = cc.instantiate(prefab).getComponent("BauCua.PopupHistory");
          _this.popupHistory.node.parent = _this.popupContainer;
          _this.popupHistory.node.active = true;
          _this.popupHistory.show();
          _this.popups.push(_this.popupHistory.node);
        }) : this.popupHistory.show();
      };
      BauCuaController.prototype.actPopupGuide = function() {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        null == this.popupGuide ? this.baucuaBundle.load("res/Prefabs/PopupGuide", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
          _this.popupGuide.node.parent = _this.popupContainer;
          _this.popupGuide.node.active = true;
          _this.popupGuide.show();
          _this.popups.push(_this.popupGuide.node);
        }) : this.popupGuide.show();
      };
      var BauCuaController_1;
      BauCuaController.instance = null;
      BauCuaController.lastBeted = null;
      __decorate([ property([ cc.SpriteFrame ]) ], BauCuaController.prototype, "sprSmallDices", void 0);
      __decorate([ property([ cc.ScrollView ]) ], BauCuaController.prototype, "scrollChip", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], BauCuaController.prototype, "sprResultDices", void 0);
      __decorate([ property(cc.Label) ], BauCuaController.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], BauCuaController.prototype, "lblTime", void 0);
      __decorate([ property(cc.Label) ], BauCuaController.prototype, "lblToast", void 0);
      __decorate([ property(cc.Label) ], BauCuaController.prototype, "lblWinCoin", void 0);
      __decorate([ property([ ButtonBet ]) ], BauCuaController.prototype, "buttonBets", void 0);
      __decorate([ property([ BauCua_ButtonPayBet_1.default ]) ], BauCuaController.prototype, "btnPayBets", void 0);
      __decorate([ property(cc.Node) ], BauCuaController.prototype, "nodeSoiCau", void 0);
      __decorate([ property(cc.Node) ], BauCuaController.prototype, "nodeHistories", void 0);
      __decorate([ property(cc.Node) ], BauCuaController.prototype, "itemHistoryTemplate", void 0);
      __decorate([ property(cc.Button) ], BauCuaController.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Button) ], BauCuaController.prototype, "btnCancel", void 0);
      __decorate([ property(cc.Button) ], BauCuaController.prototype, "btnReBet", void 0);
      __decorate([ property([ cc.Label ]) ], BauCuaController.prototype, "lblsSoiCau", void 0);
      __decorate([ property([ cc.Node ]) ], BauCuaController.prototype, "popups", void 0);
      __decorate([ property(cc.Node) ], BauCuaController.prototype, "popupContainer", void 0);
      __decorate([ property(ScrollViewControl_1.default) ], BauCuaController.prototype, "scrHistory", void 0);
      __decorate([ property(cc.Node) ], BauCuaController.prototype, "bowl", void 0);
      BauCuaController = BauCuaController_1 = __decorate([ ccclass ], BauCuaController);
      return BauCuaController;
    }(MiniGame_1.default);
    exports.default = BauCuaController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/MiniGame": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/ScrollViewControl": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./BauCua.ButtonPayBet": "BauCua.ButtonPayBet",
    "./BauCua.Cmd": "BauCua.Cmd"
  } ],
  "BauCua.ButtonPayBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee505UX8HtJs7o/zt+ekkAc", "BauCua.ButtonPayBet");
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
    var ButtonPayBet = function(_super) {
      __extends(ButtonPayBet, _super);
      function ButtonPayBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.button = null;
        _this.lblTotal = null;
        _this.lblBeted = null;
        _this.overlay = null;
        _this.lblFactor = null;
        return _this;
      }
      __decorate([ property(cc.Button) ], ButtonPayBet.prototype, "button", void 0);
      __decorate([ property(cc.Label) ], ButtonPayBet.prototype, "lblTotal", void 0);
      __decorate([ property(cc.Label) ], ButtonPayBet.prototype, "lblBeted", void 0);
      __decorate([ property(cc.Node) ], ButtonPayBet.prototype, "overlay", void 0);
      __decorate([ property(cc.Label) ], ButtonPayBet.prototype, "lblFactor", void 0);
      ButtonPayBet = __decorate([ ccclass ], ButtonPayBet);
      return ButtonPayBet;
    }(cc.Component);
    exports.default = ButtonPayBet;
    cc._RF.pop();
  }, {} ],
  "BauCua.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac6f53uNYxDW4HGvzMg8Vl8", "BauCua.Cmd");
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
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SCRIBE = 5001;
        Code.UNSCRIBE = 5002;
        Code.CHANGE_ROOM = 5003;
        Code.BET = 5004;
        Code.INFO = 5005;
        Code.START_NEW_GAME = 5007;
        Code.UPDATE = 5006;
        Code.RESULT = 5008;
        Code.PRIZE = 5009;
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
      var SendBet = function(_super) {
        __extends(SendBet, _super);
        function SendBet(betData) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BET);
          _this.packHeader();
          _this.putString(betData);
          _this.updateSize();
          return _this;
        }
        return SendBet;
      }(Network_OutPacket_1.default);
      cmd.SendBet = SendBet;
      var ReceiveBet = function(_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.currentMoney = 0;
          _this.result = _this.getByte();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveBet;
      }(Network_InPacket_1.default);
      cmd.ReceiveBet = ReceiveBet;
      var ReceiveInfo = function(_super) {
        __extends(ReceiveInfo, _super);
        function ReceiveInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.referenceId = 0;
          _this.remainTime = 0;
          _this.bettingState = false;
          _this.potData = "";
          _this.betData = "";
          _this.lichSuPhien = "";
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.xPot = 0;
          _this.xValue = 0;
          _this.room = 0;
          _this.referenceId = _this.getLong();
          _this.remainTime = _this.getByte();
          _this.bettingState = _this.getBool();
          _this.potData = _this.getString();
          _this.betData = _this.getString();
          _this.lichSuPhien = _this.getString();
          _this.dice1 = _this.getByte();
          _this.dice2 = _this.getByte();
          _this.dice3 = _this.getByte();
          _this.xPot = _this.getByte();
          _this.xValue = _this.getByte();
          _this.room = _this.getByte();
          return _this;
        }
        return ReceiveInfo;
      }(Network_InPacket_1.default);
      cmd.ReceiveInfo = ReceiveInfo;
      var ReceiveNewGame = function(_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
          var _this = _super.call(this, data) || this;
          _this.referenceId = 0;
          _this.referenceId = _this.getLong();
          return _this;
        }
        return ReceiveNewGame;
      }(Network_InPacket_1.default);
      cmd.ReceiveNewGame = ReceiveNewGame;
      var ReceiveUpdate = function(_super) {
        __extends(ReceiveUpdate, _super);
        function ReceiveUpdate(data) {
          var _this = _super.call(this, data) || this;
          _this.potData = "";
          _this.remainTime = 0;
          _this.bettingState = 0;
          _this.potData = _this.getString();
          _this.remainTime = _this.getByte();
          _this.bettingState = _this.getByte();
          return _this;
        }
        return ReceiveUpdate;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdate = ReceiveUpdate;
      var ReceiveResult = function(_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
          var _this = _super.call(this, data) || this;
          _this.dice1 = 0;
          _this.dice2 = 0;
          _this.dice3 = 0;
          _this.xPot = 0;
          _this.xValue = 0;
          _this.dice1 = _this.getByte();
          _this.dice2 = _this.getByte();
          _this.dice3 = _this.getByte();
          _this.xPot = _this.getByte();
          _this.xValue = _this.getByte();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
      var ReceivePrize = function(_super) {
        __extends(ReceivePrize, _super);
        function ReceivePrize(data) {
          var _this = _super.call(this, data) || this;
          _this.prize = 0;
          _this.currentMoney = 0;
          _this.room = 0;
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          _this.room = _this.getByte();
          return _this;
        }
        return ReceivePrize;
      }(Network_InPacket_1.default);
      cmd.ReceivePrize = ReceivePrize;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "BauCua.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5aeaULcr1B6Kb50KQNLQjR", "BauCua.PopupHistory");
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
    var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var BauCua_BauCuaController_1 = require("./BauCua.BauCuaController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupHistory = function(_super) {
      __extends(PopupHistory, _super);
      function PopupHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrList = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.dataHistory = [];
        _this.totalPageLoaded = 0;
        return _this;
      }
      PopupHistory.prototype.onLoad = function() {
        var scrollViewEventHandler = new cc.Component.EventHandler();
        scrollViewEventHandler.target = this.node;
        scrollViewEventHandler.component = "BauCua.PopupHistory";
        scrollViewEventHandler.handler = "onScrollEvent";
        this.scrList.scrollView.scrollEvents.push(scrollViewEventHandler);
      };
      PopupHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        this.dataHistory = [];
        this.totalPageLoaded = 0;
        this.scrList.setStateItem(false);
      };
      PopupHistory.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        this.scrList.setStateItem(false);
      };
      PopupHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.loadData();
      };
      PopupHistory.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.loadData();
        }
      };
      PopupHistory.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.loadData();
        }
      };
      PopupHistory.prototype.loadData = function(isReloadScr) {
        var _this = this;
        void 0 === isReloadScr && (isReloadScr = true);
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 121,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page,
          un: Configs_1.default.Login.Nickname
        }, function(err, res) {
          var _a;
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            _this.maxPage = res["totalPages"];
            _this.totalPageLoaded < _this.maxPage && (_a = _this.dataHistory).push.apply(_a, __spread(res["transactions"]));
            _this.totalPageLoaded++;
            var dataHistory = _this.dataHistory.slice();
            isReloadScr ? _this.scrList.setDataList(_this.setItemData.bind(_this), dataHistory) : _this.scrList.updateDataList(dataHistory);
          }
        });
      };
      PopupHistory.prototype.setItemData = function(item, itemData) {
        item.getChildByName("bg").opacity = itemData.index % 2 == 0 ? 10 : 0;
        item.getChildByName("Session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
        item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
        var betValues = itemData["betValues"][0] + itemData["betValues"][1] + itemData["betValues"][2] + itemData["betValues"][3] + itemData["betValues"][4] + itemData["betValues"][5];
        item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(betValues);
        var prizes = itemData["prizes"][0] + itemData["prizes"][1] + itemData["prizes"][2] + itemData["prizes"][3] + itemData["prizes"][4] + itemData["prizes"][5];
        item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(prizes);
        var dices = itemData["dices"].split(",");
        var result = item.getChildByName("Result");
        result.children[0].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[0]];
        result.children[1].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[1]];
        result.children[2].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[2]];
        item.active = true;
      };
      PopupHistory.prototype.onScrollEvent = function(scrollview, eventType, customEventData) {
        if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM && this.page < this.maxPage) {
          this.page++;
          this.loadData(false);
        }
      };
      __decorate([ property(ScrollViewControl_1.default) ], PopupHistory.prototype, "scrList", void 0);
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
    "../../Lobby/LobbyScript/Script/common/ScrollViewControl": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./BauCua.BauCuaController": "BauCua.BauCuaController"
  } ],
  "BauCua.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abd9cV9pOdGNajg/VVqxppb", "BauCua.PopupHonors");
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
          c: 120,
          mt: Configs_1.default.App.MONEY_TYPE
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
              if (i_1 < res["topBC"].length) {
                var itemData = res["topBC"][i_1];
                item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                item.getChildByName("Rank").getComponent(cc.Label).string = (i_1 + 1).toString();
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
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
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ]
}, {}, [ "BauCua.BauCuaController", "BauCua.ButtonPayBet", "BauCua.Cmd", "BauCua.PopupHistory", "BauCua.PopupHonors" ]);