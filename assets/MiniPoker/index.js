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
  "MiniPoker.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62c5aekeZlAL4VtbeCtXj2Z", "MiniPoker.Cmd");
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
        Code.SCRIBE = 4003;
        Code.UNSCRIBE = 4004;
        Code.CHANGE_ROOM = 4005;
        Code.SPIN = 4001;
        Code.UPDATE_JACKPOT = 4002;
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
      var SendSpin = function(_super) {
        __extends(SendSpin, _super);
        function SendSpin(betValue) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SPIN);
          _this.packHeader();
          _this.putLong(betValue);
          _this.putShort(Configs_1.default.App.MONEY_TYPE);
          _this.updateSize();
          return _this;
        }
        return SendSpin;
      }(Network_OutPacket_1.default);
      cmd.SendSpin = SendSpin;
      var ReceiveUpdateJackpot = function(_super) {
        __extends(ReceiveUpdateJackpot, _super);
        function ReceiveUpdateJackpot(data) {
          var _this = _super.call(this, data) || this;
          _this.value = 0;
          _this.x2 = 0;
          _this.value = _this.getLong();
          _this.x2 = _this.getByte();
          return _this;
        }
        return ReceiveUpdateJackpot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdateJackpot = ReceiveUpdateJackpot;
      var ReceiveSpin = function(_super) {
        __extends(ReceiveSpin, _super);
        function ReceiveSpin(data) {
          var _this = _super.call(this, data) || this;
          _this.result = 0;
          _this.prize = 0;
          _this.card1 = 0;
          _this.card2 = 0;
          _this.card3 = 0;
          _this.card4 = 0;
          _this.card5 = 0;
          _this.currentMoney = 0;
          _this.result = _this.getShort();
          _this.prize = _this.getLong();
          _this.card1 = _this.getByte();
          _this.card2 = _this.getByte();
          _this.card3 = _this.getByte();
          _this.card4 = _this.getByte();
          _this.card5 = _this.getByte();
          _this.currentMoney = _this.getLong();
          return _this;
        }
        return ReceiveSpin;
      }(Network_InPacket_1.default);
      cmd.ReceiveSpin = ReceiveSpin;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "MiniPoker.MiniPokerController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93f55F36+ZG/4x1s8HLfpyR", "MiniPoker.MiniPokerController");
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
    var MiniPoker_Cmd_1 = require("./MiniPoker.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButtonBet = function() {
      function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this._isActive = false;
      }
      ButtonBet.prototype.setActive = function(isActive) {
        this._isActive = isActive;
        this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.interactable = !isActive;
      };
      __decorate([ property(cc.Button) ], ButtonBet.prototype, "button", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfNormal", void 0);
      __decorate([ property(cc.SpriteFrame) ], ButtonBet.prototype, "sfActive", void 0);
      ButtonBet = __decorate([ ccclass("ButtonBet") ], ButtonBet);
      return ButtonBet;
    }();
    exports.ButtonBet = ButtonBet;
    var MiniPokerController = function(_super) {
      __extends(MiniPokerController, _super);
      function MiniPokerController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprAtlasCards = null;
        _this.columns = null;
        _this.itemTemplate = null;
        _this.lblJackpot = null;
        _this.buttonBets = [];
        _this.lblToast = null;
        _this.btnSpinAnim = null;
        _this.btnSpin = null;
        _this.btnClose = null;
        _this.toggleAuto = null;
        _this.btnBoost = null;
        _this.sprResult = null;
        _this.lblWinCash = null;
        _this.popupContainer = null;
        _this.popups = [];
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = .3;
        _this.listBet = [ 100, 1e3, 1e4 ];
        _this.defaultCards = [ 0, 1, 2, 3, 4 ];
        _this.itemHeight = 0;
        _this.betIdx = 0;
        _this.isBoost = false;
        _this.isCanChangeBet = true;
        _this.isSpined = true;
        _this.lastSpinRes = null;
        _this.popupGuide = null;
        _this.popupHistory = null;
        _this.popupHonor = null;
        return _this;
      }
      MiniPokerController.prototype.start = function() {
        var _this = this;
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
          var column = this.columns.children[i];
          var count = this.rollStartItemCount + i * this.rollAddItemCount;
          for (var j = 0; j < count; j++) {
            var item = cc.instantiate(this.itemTemplate);
            item.parent = column;
            item.children[0].getComponent(cc.Sprite).spriteFrame = j >= 1 ? this.sprAtlasCards.getSpriteFrame("cardBlur_" + Utils_1.default.randomRangeInt(1, 15)) : this.sprAtlasCards.getSpriteFrame("card" + this.defaultCards[i]);
          }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        var _loop_1 = function(i) {
          btn = this_1.buttonBets[i];
          btn.setActive(i == this_1.betIdx);
          btn.button.node.on("click", function() {
            App_1.default.instance.showBgMiniGame("MiniPoker");
            if (!_this.isCanChangeBet) {
              _this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
              return;
            }
            var oldIdx = _this.betIdx;
            _this.betIdx = i;
            for (var i_1 = 0; i_1 < _this.buttonBets.length; i_1++) _this.buttonBets[i_1].setActive(i_1 == _this.betIdx);
            _this.isCanChangeBet = false;
            _this.scheduleOnce(function() {
              _this.isCanChangeBet = true;
            }, 1);
            MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendChangeRoom(oldIdx, _this.betIdx));
          });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) _loop_1(i);
        this.toggleAuto.node.on("click", function() {
          App_1.default.instance.showBgMiniGame("MiniPoker");
          if (_this.toggleAuto.isChecked) {
            _this.isSpined && _this.actSpin();
            _this.btnBoost.interactable = false;
          } else {
            _this.btnBoost.interactable = true;
            _this.isSpined && _this.setEnableAllButtons(true);
          }
        });
        this.btnBoost.node.on("click", function() {
          App_1.default.instance.showBgMiniGame("MiniPoker");
          _this.isBoost = !_this.isBoost;
          if (_this.isBoost) {
            _this.isSpined && _this.actSpin();
            _this.toggleAuto.interactable = false;
            _this.btnBoost.isChecked = true;
          } else {
            _this.toggleAuto.interactable = true;
            _this.btnBoost.isChecked = false;
            _this.isSpined && _this.setEnableAllButtons(true);
          }
        });
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
           case MiniPoker_Cmd_1.default.Code.UPDATE_JACKPOT:
            var res = new MiniPoker_Cmd_1.default.ReceiveUpdateJackpot(data);
            Tween_1.default.numberTo(_this.lblJackpot, res.value, .3);
            break;

           case MiniPoker_Cmd_1.default.Code.SPIN:
            var res = new MiniPoker_Cmd_1.default.ReceiveSpin(data);
            _this.onSpinResult(res);
          }
        }, this);
      };
      MiniPokerController.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        App_1.default.instance.showBgMiniGame("MiniPoker");
        _super.prototype.show.call(this);
        this.lblToast.node.parent.active = false;
        this.sprResult.node.active = false;
        this.lblWinCash.active = false;
        this.isSpined = true;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].setActive(i == this.betIdx);
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendScribe(this.betIdx));
      };
      MiniPokerController.prototype.actSpin = function() {
        App_1.default.instance.showBgMiniGame("MiniPoker");
        if (!this.isSpined) {
          this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
          return;
        }
        this.btnSpinAnim.play("spin", 0);
        this.isSpined = false;
        this.setEnableAllButtons(false);
        for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].button.interactable = false;
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendSpin(this.listBet[this.betIdx]));
      };
      MiniPokerController.prototype.showToast = function(message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.2), cc.callFunc(function() {
          parent.active = false;
        })));
      };
      MiniPokerController.prototype.setEnableAllButtons = function(isEnable) {
        this.btnSpin.interactable = isEnable;
        this.btnClose.interactable = isEnable;
      };
      MiniPokerController.prototype.onSpinResult = function(data) {
        var _this = this;
        this.lastSpinRes = data;
        var resultSuccess = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
        if (resultSuccess.indexOf(data.result) < 0) {
          this.scheduleOnce(function() {
            this.isSpined = true;
          }, 1);
          this.setEnableAllButtons(true);
          for (var i = 0; i < this.buttonBets.length; i++) this.buttonBets[i].button.interactable = true;
          this.toggleAuto.isChecked = false;
          this.toggleAuto.interactable = true;
          this.isBoost = false;
          this.btnBoost.interactable = true;
          this.btnBoost.isChecked = false;
          switch (data.result) {
           case 102:
            this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
            break;

           default:
            this.showToast(App_1.default.instance.getTextLang("txt_unknown_error1"));
          }
          return;
        }
        Configs_1.default.Login.Coin -= this.listBet[this.betIdx];
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        Configs_1.default.Login.Coin = data.currentMoney;
        var result = [ data.card1, data.card2, data.card3, data.card4, data.card5 ];
        var timeScale = this.isBoost ? .5 : 1;
        var _loop_2 = function(i_2) {
          var roll = this_2.columns.children[i_2];
          var step1Pos = .2 * this_2.itemHeight;
          var step2Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight - .2 * this_2.itemHeight;
          var step3Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight;
          roll.runAction(cc.sequence(cc.delayTime(.2 * i_2 * timeScale), cc.moveTo(.2 * timeScale, cc.v2(roll.getPosition().x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_2.spinDuration + this_2.addSpinDuration * i_2) * timeScale, cc.v2(roll.getPosition().x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.moveTo(.2 * timeScale, cc.v2(roll.getPosition().x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function() {
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
            i_2 === _this.columns.childrenCount - 1 && _this.spined();
          })));
          roll.runAction(cc.sequence(cc.delayTime((.45 + .2 * i_2) * timeScale), cc.callFunc(function() {
            var children = roll.children;
            var bottomSprite = children[0].children[0].getComponent(cc.Sprite);
            var topSprite = children[children.length - 1].children[0].getComponent(cc.Sprite);
            bottomSprite.spriteFrame = topSprite.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + result[i_2]);
          })));
        };
        var this_2 = this;
        for (var i_2 = 0; i_2 < this.columns.childrenCount; i_2++) _loop_2(i_2);
      };
      MiniPokerController.prototype.spined = function() {
        var _this = this;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        this.setEnableAllButtons(true);
        if (this.lastSpinRes.prize > 0) {
          switch (this.lastSpinRes.result) {
           case 1:
            this.sprResult.animation = "jackport";
            this.sprResult.loop = false;
            break;

           case 2:
            this.sprResult.animation = "th\xf9ng ph\xe1 s\u1ea3nh2";
            break;

           case 3:
            this.sprResult.animation = "tu quy";
            break;

           case 4:
            this.sprResult.animation = "c\xf9 l\u0169";
            break;

           case 5:
            this.sprResult.animation = "th\xf9ng";
            break;

           case 6:
            this.sprResult.animation = "sanh";
            break;

           case 7:
            this.sprResult.animation = "s\xe1m c\xf4";
            break;

           case 8:
            this.sprResult.animation = "hai \u0111\xf4i";
            break;

           case 9:
            this.sprResult.animation = "\u0111\xf4i J+";
          }
          this.sprResult.node.active = true;
          this.sprResult.node.setScale(1);
          this.lblWinCash.active = true;
          this.lblWinCash.getComponent(cc.Label).string = "+" + this.lastSpinRes.prize;
          this.lblWinCash.setPosition(0, 42);
          this.lblWinCash.runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(1, cc.v2(0, 140)), cc.delayTime(1), cc.callFunc(function() {
            _this.sprResult.node.active = false;
            _this.lblWinCash.active = false;
            _this.scheduleOnce(function() {
              _this.isSpined = true;
              if (_this.toggleAuto.isChecked || _this.isBoost) _this.actSpin(); else for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = true;
            }, .2);
          })));
        } else this.scheduleOnce(function() {
          _this.isSpined = true;
          if (_this.toggleAuto.isChecked || _this.isBoost) _this.actSpin(); else for (var i = 0; i < _this.buttonBets.length; i++) _this.buttonBets[i].button.interactable = true;
        }, .4);
      };
      MiniPokerController.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
        App_1.default.instance.hideGameMini("MiniPoker");
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendUnScribe(this.betIdx));
      };
      MiniPokerController.prototype.actPopupGuide = function() {
        var _this = this;
        null == this.popupGuide ? BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupGuide", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
          _this.popupGuide.node.parent = _this.popupContainer;
          _this.popupGuide.show();
          _this.popups.push(_this.popupGuide.node);
        }) : this.popupGuide.show();
      };
      MiniPokerController.prototype.actPopupHistory = function() {
        var _this = this;
        null == this.popupHistory ? BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupHistory", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHistory = cc.instantiate(prefab).getComponent("MiniPoker.PopupHistory");
          _this.popupHistory.node.parent = _this.popupContainer;
          _this.popupHistory.show();
          _this.popups.push(_this.popupHistory.node);
        }) : this.popupHistory.show();
      };
      MiniPokerController.prototype.actPopupHonor = function() {
        var _this = this;
        null == this.popupHonor ? BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupHonors", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHonor = cc.instantiate(prefab).getComponent("MiniPoker.PopupHonors");
          _this.popupHonor.node.parent = _this.popupContainer;
          _this.popupHonor.show();
          _this.popups.push(_this.popupHonor.node);
        }) : this.popupHonor.show();
      };
      MiniPokerController.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      __decorate([ property(cc.SpriteAtlas) ], MiniPokerController.prototype, "sprAtlasCards", void 0);
      __decorate([ property(cc.Node) ], MiniPokerController.prototype, "columns", void 0);
      __decorate([ property(cc.Node) ], MiniPokerController.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Label) ], MiniPokerController.prototype, "lblJackpot", void 0);
      __decorate([ property([ ButtonBet ]) ], MiniPokerController.prototype, "buttonBets", void 0);
      __decorate([ property(cc.Label) ], MiniPokerController.prototype, "lblToast", void 0);
      __decorate([ property(cc.Animation) ], MiniPokerController.prototype, "btnSpinAnim", void 0);
      __decorate([ property(cc.Button) ], MiniPokerController.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], MiniPokerController.prototype, "btnClose", void 0);
      __decorate([ property(cc.Toggle) ], MiniPokerController.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Toggle) ], MiniPokerController.prototype, "btnBoost", void 0);
      __decorate([ property(sp.Skeleton) ], MiniPokerController.prototype, "sprResult", void 0);
      __decorate([ property(cc.Node) ], MiniPokerController.prototype, "lblWinCash", void 0);
      __decorate([ property(cc.Node) ], MiniPokerController.prototype, "popupContainer", void 0);
      __decorate([ property([ cc.Node ]) ], MiniPokerController.prototype, "popups", void 0);
      MiniPokerController = __decorate([ ccclass ], MiniPokerController);
      return MiniPokerController;
    }(MiniGame_1.default);
    exports.default = MiniPokerController;
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
    "./MiniPoker.Cmd": "MiniPoker.Cmd"
  } ],
  "MiniPoker.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc481gP9AlCILXU1JsBrs7F", "MiniPoker.PopupHistory");
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
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      PopupHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("MiniPoker");
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
          c: 105,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page,
          un: Configs_1.default.Login.Nickname
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 7; i++) {
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
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                item.getChildByName("Result").getComponent(cc.Label).string = itemData["cards"].replace(/,/g, "  ");
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["prize"]);
                item.active = true;
              } else item.active = false;
            }
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
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "MiniPoker.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c964IwGZFIxJXkH/FCDSI0", "MiniPoker.PopupHonors");
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
        App_1.default.instance.showBgMiniGame("MiniPoker");
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
          c: 106,
          mt: Configs_1.default.App.MONEY_TYPE,
          p: this.page
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          cc.log("res==", JSON.stringify(res));
          if (res["success"]) {
            if (0 == _this.items.length) {
              for (var i = 0; i < 7; i++) {
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
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                item.getChildByName("Result").getComponent(cc.Label).string = "\u101b\u1010\u1014\u102c\u1019\u103b\u102c\u1038\u1021\u1014\u102d\u102f\u1004\u103a\u101b";
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
}, {}, [ "MiniPoker.Cmd", "MiniPoker.MiniPokerController", "MiniPoker.PopupHistory", "MiniPoker.PopupHonors" ]);