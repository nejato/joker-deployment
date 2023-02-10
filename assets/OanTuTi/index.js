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
  "OanTuTi.OanTuTiController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efd21JpQ3BI1om0o4SIUbj2", "OanTuTi.OanTuTiController");
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
    var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var OanTuTi_PopupCoinTransfer_1 = require("./OanTuTi.PopupCoinTransfer");
    var Http_1 = require("../../Loading/src/Http");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var OanTuTiController = function(_super) {
      __extends(OanTuTiController, _super);
      function OanTuTiController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblCoin = null;
        _this.lblBet = null;
        _this.btnBets = [];
        _this.btnPlayNow = null;
        _this.panelSelectBet = null;
        _this.players = null;
        _this.mePlayer = null;
        _this.otherPlayer = null;
        _this.panelSearchingMatch = null;
        _this.panelPlaying = null;
        _this.panelResult = null;
        _this.lblSearching = null;
        _this.btnCancel = null;
        _this.lblTime = null;
        _this.progressTime = null;
        _this.btnPlays = [];
        _this.sprPlaysActive = [];
        _this.sprPlaysNormal = [];
        _this.sprResults = [];
        _this.toggleAuto = null;
        _this.popups = [];
        _this.popupCoinTransfer = null;
        _this.listBet = [ 1e3, 5e3, 1e4, 5e4, 1e5 ];
        _this.timePlaying = 10;
        _this.remainTime = 0;
        _this.lastBetValue = 0;
        _this.isPlaying = false;
        return _this;
      }
      OanTuTiController.prototype.start = function() {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          if (!_this.node.active) return;
          _this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        ShootFishNetworkClient_1.default.getInstance().addListener(function(route, push) {
          if (!_this.node.active) return;
          var routesLog = [ "OttOnMatching", "OttOnMatchStart", "OttOnMatchEnd", "OttOnMatchSolved" ];
          routesLog.indexOf(route) >= 0;
          switch (route) {
           case "OttOnMatching":
            var otherNickname = "";
            var otherAvatar = "";
            if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
              otherNickname = push["nickname2"];
              otherAvatar = push["avatar2"];
            } else {
              otherNickname = push["nickname1"];
              otherAvatar = push["avatar1"];
            }
            _this.panelSelectBet.active = false;
            _this.panelPlaying.active = false;
            _this.players.active = true;
            _this.lblSearching.string = "\u0110\xc3 T\xccM TH\u1ea4Y \u0110\u1ed0I TH\u1ee6";
            _this.btnCancel.node.active = false;
            _this.otherPlayer.active = true;
            _this.otherPlayer.getChildByName("lblNickname").getComponent(cc.Label).string = otherNickname;
            _this.otherPlayer.getChildByName("sprAvatar").getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(otherAvatar);
            _this.lblBet.string = "C\u01af\u1ee2C: " + Math.floor(push["blind"] / 1e3) + "K";
            break;

           case "OttOnMatchStart":
            _this.panelSearchingMatch.active = false;
            _this.panelPlaying.active = true;
            _this.panelResult.active = false;
            _this.players.active = true;
            _this.remainTime = _this.timePlaying;
            _this.lblTime.node.parent.active = true;
            _this.progressTime.fillRange = 1;
            for (var i = 0; i < _this.btnPlays.length; i++) {
              _this.btnPlays[i].interactable = true;
              _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = _this.sprPlaysActive[i];
            }
            break;

           case "OttOnMatchEnd":
            var result = push["result"];
            var changeCash1 = push["changeCash1"];
            var changeCash2 = push["changeCash2"];
            var blind = push["blind"];
            var lblWin = _this.panelResult.getChildByName("lblWin");
            var lblLose = _this.panelResult.getChildByName("lblLose");
            if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
              0 != result && (1 == result ? lblWin.getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(changeCash1) : lblLose.getComponent(cc.Label).string = Utils_1.default.formatNumber(-blind));
              Configs_1.default.Login.CoinFish = push["cash1"];
            } else {
              0 != result && (2 == result ? lblWin.getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(changeCash2) : lblLose.getComponent(cc.Label).string = Utils_1.default.formatNumber(-blind));
              Configs_1.default.Login.CoinFish = push["cash2"];
            }
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.scheduleOnce(function() {
              _this.resetView();
              _this.toggleAuto.isChecked ? _this.selectBet(_this.lastBetValue) : _this.isPlaying = false;
            }, 5);

           case "OttOnMatchSolved":
            _this.panelResult.active = true;
            _this.lblTime.node.parent.active = false;
            var result = push["result"];
            var choice1 = push["choice1"];
            var choice2 = push["choice2"];
            var meValue = _this.panelResult.getChildByName("meValue");
            var otherValue = _this.panelResult.getChildByName("otherValue");
            var meActive = meValue.getChildByName("active");
            var otherActive = otherValue.getChildByName("active");
            var lblWin = _this.panelResult.getChildByName("lblWin");
            lblWin.active = false;
            var lblLose = _this.panelResult.getChildByName("lblLose");
            lblLose.active = false;
            var hoa = _this.panelResult.getChildByName("hoa");
            hoa.active = false;
            var thang = _this.panelResult.getChildByName("thang");
            thang.active = false;
            var thua = _this.panelResult.getChildByName("thua");
            thua.active = false;
            if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
              meValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice1];
              otherValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice2];
              for (var i = 0; i < _this.btnPlays.length; i++) {
                _this.btnPlays[i].interactable = false;
                _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = choice1 == i ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
              }
              if (0 == result) {
                hoa.active = true;
                hoa.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                meActive.active = true;
                otherActive.active = true;
              } else if (1 == result) {
                thang.active = true;
                thang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                lblWin.active = true;
                meActive.active = true;
                otherActive.active = false;
              } else {
                thua.active = true;
                thua.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                lblLose.active = true;
                meActive.active = false;
                otherActive.active = true;
              }
            } else {
              meValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice2];
              otherValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice1];
              for (var i = 0; i < _this.btnPlays.length; i++) {
                _this.btnPlays[i].interactable = false;
                _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = choice2 == i ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
              }
              if (0 == result) {
                hoa.active = true;
                hoa.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                meActive.active = true;
                otherActive.active = true;
              } else if (2 == result) {
                thang.active = true;
                thang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                lblWin.active = true;
                meActive.active = true;
                otherActive.active = false;
              } else {
                thua.active = true;
                thua.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                lblLose.active = true;
                meActive.active = false;
                otherActive.active = true;
              }
            }
          }
        }, this);
        var _loop_1 = function(i) {
          this_1.btnBets[i].node.on("click", function() {
            _this.selectBet(_this.listBet[i]);
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.btnBets.length; i++) _loop_1(i);
        var _loop_2 = function(i) {
          this_2.btnPlays[i].node.on("click", function() {
            _this.play(i);
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.btnPlays.length; i++) _loop_2(i);
      };
      OanTuTiController.prototype.update = function(dt) {
        if (this.remainTime > 0) {
          this.remainTime = Math.max(0, this.remainTime - dt);
          var t = Math.round(this.remainTime);
          this.lblTime.string = (t > 9 ? "" : "0") + t;
          this.progressTime.fillRange = this.remainTime / this.timePlaying;
        }
      };
      OanTuTiController.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        _super.prototype.show.call(this);
        this.toggleAuto.isChecked = false;
        this.resetView();
      };
      OanTuTiController.prototype._onShowed = function() {
        var _this = this;
        _super.prototype._onShowed.call(this);
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function(isLogined) {
          if (!_this.node.active) return;
          if (!isLogined) {
            _this.dismiss();
            return;
          }
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          Configs_1.default.Login.CoinFish <= 0 && App_1.default.instance.confirmDialog.show3("Ti\u1ec1n trong game c\u1ee7a b\u1ea1n \u0111\xe3 h\u1ebft, b\u1ea1n c\xf3 mu\u1ed1n chuy\u1ec3n ti\u1ec1n v\xe0o kh\xf4ng?", "C\xf3", function(isConfirm) {
            isConfirm && _this.popupCoinTransfer.show();
          });
        });
      };
      OanTuTiController.prototype.actBack = function() {
        if (this.isPlaying) {
          App_1.default.instance.alertDialog.showMsg("B\u1ea1n \u0111ang ch\u01a1i kh\xf4ng th\u1ec3 tho\xe1t.");
          return;
        }
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      OanTuTiController.prototype.actLogin = function() {
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
            App_1.default.instance.alertDialog.showMsg("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng ki\u1ec3m tra l\u1ea1i k\u1ebft n\u1ed1i.");
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
            App_1.default.instance.alertDialog.showMsg("Th\xf4ng tin \u0111\u0103ng nh\u1eadp kh\xf4ng h\u1ee3p l\u1ec7.");
            break;

           case 2001:
            _this.popupUpdateNickname.show2(username, password);
            break;

           default:
            App_1.default.instance.alertDialog.showMsg("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng vui l\xf2ng th\u1eed l\u1ea1i sau.");
          }
        });
      };
      OanTuTiController.prototype.dismiss = function() {
        if (this.isPlaying) {
          App_1.default.instance.alertDialog.showMsg("B\u1ea1n \u0111ang ch\u01a1i kh\xf4ng th\u1ec3 tho\xe1t.");
          return;
        }
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) this.popups[i].active = false;
      };
      OanTuTiController.prototype.resetView = function() {
        this.lblBet.string = "CH\u1eccN C\u01af\u1ee2C";
        this.panelSelectBet.active = true;
        this.panelPlaying.active = false;
        this.panelResult.active = false;
        this.players.active = false;
        this.panelSearchingMatch.active = false;
        this.mePlayer.active = true;
        this.mePlayer.getChildByName("sprAvatar").getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        this.otherPlayer.active = false;
        this.otherPlayer.getChildByName("lblNickname").getComponent(cc.Label).string = "";
        this.interactableBtnBets(true);
      };
      OanTuTiController.prototype.playNow = function() {
        this.selectBet(0);
      };
      OanTuTiController.prototype.selectBet = function(betValue) {
        var _this = this;
        this.interactableBtnBets(false);
        this.isPlaying = true;
        ShootFishNetworkClient_1.default.getInstance().request("OTT1", {
          userId: Configs_1.default.Login.UserIdFish,
          nickname: Configs_1.default.Login.Nickname,
          blind: betValue
        }, function(res) {
          if (200 != res["code"]) {
            switch (res["code"]) {
             case 302:
              App_1.default.instance.alertDialog.showMsg("S\u1ed1 d\u01b0 kh\xf4ng \u0111\u1ee7.");
              break;

             default:
              App_1.default.instance.alertDialog.showMsg("L\u1ed7i " + res["code"] + ", kh\xf4ng x\xe1c \u0111\u1ecbnh.");
            }
            _this.interactableBtnBets(true);
            _this.isPlaying = false;
            return;
          }
          _this.lastBetValue = betValue;
          if (betValue <= 0) _this.lblBet.string = "C\u01af\u1ee2C: __"; else {
            var value = Math.floor(betValue / 1e3);
            _this.lblBet.string = "C\u01af\u1ee2C: " + Utils_1.default.formatNumber(value) + "K";
          }
          _this.panelSelectBet.active = false;
          _this.panelSearchingMatch.active = true;
          _this.players.active = true;
          _this.lblSearching.string = "\u0110ANG T\xccM KI\u1ebeM \u0110\u1ed0I TH\u1ee6...";
          _this.btnCancel.node.active = true;
        }, this);
      };
      OanTuTiController.prototype.play = function(selectValue) {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("OTT2", {
          userId: Configs_1.default.Login.UserIdFish,
          choice: selectValue
        }, function(res) {
          if (200 != res["code"]) {
            App_1.default.instance.alertDialog.showMsg("L\u1ed7i " + res["code"] + ", kh\xf4ng x\xe1c \u0111\u1ecbnh.");
            _this.interactableBtnBets(true);
            return;
          }
          for (var i = 0; i < _this.btnPlays.length; i++) {
            _this.btnPlays[i].interactable = false;
            _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = i == selectValue ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
          }
        }, this);
      };
      OanTuTiController.prototype.interactableBtnBets = function(enabled) {
        for (var i = 0; i < this.btnBets.length; i++) this.btnBets[i].interactable = enabled;
        this.btnPlayNow.interactable = enabled;
      };
      OanTuTiController.prototype.actCancel = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("OTT11", {}, function(res) {
          if (200 != res["code"]) {
            App_1.default.instance.alertDialog.showMsg("L\u1ed7i " + res["code"] + ", kh\xf4ng x\xe1c \u0111\u1ecbnh.");
            return;
          }
          _this.resetView();
          _this.isPlaying = false;
        }, this);
      };
      __decorate([ property(cc.Label) ], OanTuTiController.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Label) ], OanTuTiController.prototype, "lblBet", void 0);
      __decorate([ property([ cc.Button ]) ], OanTuTiController.prototype, "btnBets", void 0);
      __decorate([ property(cc.Button) ], OanTuTiController.prototype, "btnPlayNow", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "panelSelectBet", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "players", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "mePlayer", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "otherPlayer", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "panelSearchingMatch", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "panelPlaying", void 0);
      __decorate([ property(cc.Node) ], OanTuTiController.prototype, "panelResult", void 0);
      __decorate([ property(cc.Label) ], OanTuTiController.prototype, "lblSearching", void 0);
      __decorate([ property(cc.Button) ], OanTuTiController.prototype, "btnCancel", void 0);
      __decorate([ property(cc.Label) ], OanTuTiController.prototype, "lblTime", void 0);
      __decorate([ property(cc.Sprite) ], OanTuTiController.prototype, "progressTime", void 0);
      __decorate([ property([ cc.Button ]) ], OanTuTiController.prototype, "btnPlays", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], OanTuTiController.prototype, "sprPlaysActive", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], OanTuTiController.prototype, "sprPlaysNormal", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], OanTuTiController.prototype, "sprResults", void 0);
      __decorate([ property(cc.Toggle) ], OanTuTiController.prototype, "toggleAuto", void 0);
      __decorate([ property([ cc.Node ]) ], OanTuTiController.prototype, "popups", void 0);
      __decorate([ property(OanTuTi_PopupCoinTransfer_1.default) ], OanTuTiController.prototype, "popupCoinTransfer", void 0);
      OanTuTiController = __decorate([ ccclass ], OanTuTiController);
      return OanTuTiController;
    }(MiniGame_1.default);
    exports.default = OanTuTiController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/MiniGame": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0,
    "./OanTuTi.PopupCoinTransfer": "OanTuTi.PopupCoinTransfer"
  } ],
  "OanTuTi.PopupCoinTransfer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d70b9QEdnNK6LswYvb78XXC", "OanTuTi.PopupCoinTransfer");
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
    exports.TabCashOut = exports.TabCashIn = void 0;
    var Configs_1 = require("../../Loading/src/Configs");
    var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TabCashIn = function() {
      function TabCashIn() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
      }
      TabCashIn.prototype.start = function(popup) {
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
      TabCashIn.prototype.submit = function() {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
          App_1.default.instance.alertDialog.showMsg("S\u1ed1 ti\u1ec1n \u0111\xe3 nh\u1eadp kh\xf4ng h\u1ee3p l\u1ec7.");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("Thao t\xe1c th\u1ea5t b\u1ea1i, vui l\xf2ng th\u1eed l\u1ea1i sau.");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("Thao t\xe1c th\xe0nh c\xf4ng.");
          _this.reset();
          MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
      };
      TabCashIn.prototype.reset = function() {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
      };
      __decorate([ property(cc.Label) ], TabCashIn.prototype, "lblBalance", void 0);
      __decorate([ property(cc.EditBox) ], TabCashIn.prototype, "edbCoin", void 0);
      __decorate([ property(cc.Node) ], TabCashIn.prototype, "quickButtons", void 0);
      TabCashIn = __decorate([ ccclass("OanTuTi.PopupCoinTransfer.TabCashIn") ], TabCashIn);
      return TabCashIn;
    }();
    exports.TabCashIn = TabCashIn;
    var TabCashOut = function() {
      function TabCashOut() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
      }
      TabCashOut.prototype.start = function(popup) {
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
      TabCashOut.prototype.submit = function() {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
          App_1.default.instance.alertDialog.showMsg("S\u1ed1 ti\u1ec1n \u0111\xe3 nh\u1eadp kh\xf4ng h\u1ee3p l\u1ec7.");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: -coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("Thao t\xe1c th\u1ea5t b\u1ea1i, vui l\xf2ng th\u1eed l\u1ea1i sau.");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("Thao t\xe1c th\xe0nh c\xf4ng.");
          _this.reset();
          MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
      };
      TabCashOut.prototype.reset = function() {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
      };
      __decorate([ property(cc.Label) ], TabCashOut.prototype, "lblBalance", void 0);
      __decorate([ property(cc.EditBox) ], TabCashOut.prototype, "edbCoin", void 0);
      __decorate([ property(cc.Node) ], TabCashOut.prototype, "quickButtons", void 0);
      TabCashOut = __decorate([ ccclass("OanTuTi.PopupCoinTransfer.TabCashOut") ], TabCashOut);
      return TabCashOut;
    }();
    exports.TabCashOut = TabCashOut;
    var PopupCoinTransfer = function(_super) {
      __extends(PopupCoinTransfer, _super);
      function PopupCoinTransfer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabCashIn = null;
        _this.tabCashOut = null;
        _this.tabSelectedIdx = 0;
        return _this;
      }
      PopupCoinTransfer.prototype.start = function() {
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
      PopupCoinTransfer.prototype.show = function() {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
      };
      PopupCoinTransfer.prototype.onTabChanged = function() {
        for (var i = 0; i < this.tabContents.childrenCount; i++) this.tabContents.children[i].active = i == this.tabSelectedIdx;
        switch (this.tabSelectedIdx) {
         case 0:
          this.tabCashIn.reset();
          break;

         case 1:
          this.tabCashOut.reset();
        }
      };
      PopupCoinTransfer.prototype.actSubmitCashIn = function() {
        this.tabCashIn.submit();
      };
      PopupCoinTransfer.prototype.actSubmitCashOut = function() {
        this.tabCashOut.submit();
      };
      PopupCoinTransfer.prototype.actClearCashIn = function() {
        this.tabCashIn.edbCoin.string = "0";
      };
      PopupCoinTransfer.prototype.actClearCashOut = function() {
        this.tabCashOut.edbCoin.string = "0";
      };
      __decorate([ property(cc.ToggleContainer) ], PopupCoinTransfer.prototype, "tabs", void 0);
      __decorate([ property(cc.Node) ], PopupCoinTransfer.prototype, "tabContents", void 0);
      __decorate([ property(TabCashIn) ], PopupCoinTransfer.prototype, "tabCashIn", void 0);
      __decorate([ property(TabCashOut) ], PopupCoinTransfer.prototype, "tabCashOut", void 0);
      PopupCoinTransfer = __decorate([ ccclass ], PopupCoinTransfer);
      return PopupCoinTransfer;
    }(Dialogz_1.default);
    exports.default = PopupCoinTransfer;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Lobby.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialogz": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0
  } ],
  "OanTuTi.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1670dR+nNIG7R6Pfw6NB+L", "OanTuTi.PopupHistory");
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
    var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
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
        _this.data = null;
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
          this.loadDataLocal();
        }
      };
      PopupHistory.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadDataLocal();
        }
      };
      PopupHistory.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("OTT3", {
          userId: Configs_1.default.Login.UserIdFish
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (200 != res["code"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 10; i++) {
              var item = cc.instantiate(_this.itemTemplate);
              item.parent = _this.itemTemplate.parent;
              _this.items.push(item);
            }
            _this.itemTemplate.destroy();
            _this.itemTemplate = null;
          }
          _this.data = res["data"];
          _this.maxPage = Math.ceil(_this.data.length / 10);
          _this.page = 1;
          _this.loadDataLocal();
        }, this);
      };
      PopupHistory.prototype.loadDataLocal = function() {
        if (null == this.data) return;
        this.lblPage.string = this.page + "/" + this.maxPage;
        var startIdx = 10 * (this.page - 1);
        var count = 10;
        startIdx + count > this.data.length && (count = this.data.length - startIdx);
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (i < count) {
            var itemData = this.data[startIdx + i];
            item.getChildByName("bg").opacity = i % 2 == 0 ? 10 : 0;
            item.getChildByName("Session").getComponent(cc.Label).string = itemData["Id"];
            item.getChildByName("Time").getComponent(cc.Label).string = itemData["GameTime"];
            if (itemData["Nickname1"] == Configs_1.default.Login.Nickname) {
              item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice1"]);
              item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname2"];
              var result = "Ho\xe0";
              if (1 == itemData["Result"]) {
                item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["CashChange1"]);
                result = "Th\u1eafng";
              } else if (2 == itemData["Result"]) {
                item.getChildByName("Receive").getComponent(cc.Label).string = Utils_1.default.formatNumber(-itemData["Blind"]);
                result = "Thua";
              } else item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["Blind"]);
              item.getChildByName("Result").getComponent(cc.Label).string = result;
            } else {
              item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice2"]);
              item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname1"];
              var result = "Ho\xe0";
              if (2 == itemData["Result"]) {
                item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["CashChange2"]);
                result = "Th\u1eafng";
              } else if (1 == itemData["Result"]) {
                item.getChildByName("Receive").getComponent(cc.Label).string = Utils_1.default.formatNumber(-itemData["Blind"]);
                result = "Thua";
              } else item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["Blind"]);
              item.getChildByName("Result").getComponent(cc.Label).string = result;
            }
            item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["Blind"]);
            item.active = true;
          } else item.active = false;
        }
      };
      PopupHistory.prototype.getChoiceName = function(choice) {
        switch (choice) {
         case 0:
          return "K\xe9o";

         case 1:
          return "Bao";

         case 2:
          return "B\xfaa";
        }
      };
      __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHistory.prototype, "itemTemplate", void 0);
      PopupHistory = __decorate([ ccclass ], PopupHistory);
      return PopupHistory;
    }(Dialogz_1.default);
    exports.default = PopupHistory;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialogz": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0
  } ],
  "OanTuTi.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbd49yYsz1BmZQ6ZieAMc2B", "OanTuTi.PopupHonors");
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
    var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
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
        _this.data = null;
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
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      PopupHonors.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadDataLocal();
        }
      };
      PopupHonors.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadDataLocal();
        }
      };
      PopupHonors.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("OTT4", {
          userId: Configs_1.default.Login.UserIdFish
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (200 != res["code"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 10; i++) {
              var item = cc.instantiate(_this.itemTemplate);
              item.parent = _this.itemTemplate.parent;
              _this.items.push(item);
            }
            _this.itemTemplate.destroy();
            _this.itemTemplate = null;
          }
          _this.data = res["data"];
          _this.maxPage = Math.ceil(_this.data.length / 10);
          _this.page = 1;
          _this.loadDataLocal();
        }, this);
      };
      PopupHonors.prototype.loadDataLocal = function() {
        if (null == this.data) return;
        this.lblPage.string = this.page + "/" + this.maxPage;
        var startIdx = 10 * (this.page - 1);
        var count = 10;
        startIdx + count > this.data.length && (count = this.data.length - startIdx);
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (i < count) {
            var itemData = this.data[startIdx + i];
            item.getChildByName("bg").opacity = i % 2 == 0 ? 10 : 0;
            item.getChildByName("Time").getComponent(cc.Label).string = itemData["GameTime"];
            item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["Blind"]);
            item.getChildByName("Player").getComponent(cc.Label).string = itemData["Nickname1"];
            item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice1"]);
            item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname2"];
            item.getChildByName("OtherChoice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice2"]);
            item.getChildByName("Receive").getComponent(cc.Label).string = itemData["CashChange1"] > itemData["CashChange2"] ? Utils_1.default.formatNumber(itemData["CashChange1"]) : Utils_1.default.formatNumber(itemData["CashChange2"]);
            item.active = true;
          } else item.active = false;
        }
      };
      PopupHonors.prototype.getChoiceName = function(choice) {
        switch (choice) {
         case 0:
          return "K\xe9o";

         case 1:
          return "Bao";

         case 2:
          return "B\xfaa";
        }
      };
      __decorate([ property(cc.Label) ], PopupHonors.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
      PopupHonors = __decorate([ ccclass ], PopupHonors);
      return PopupHonors;
    }(Dialogz_1.default);
    exports.default = PopupHonors;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialogz": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0
  } ]
}, {}, [ "OanTuTi.OanTuTiController", "OanTuTi.PopupCoinTransfer", "OanTuTi.PopupHistory", "OanTuTi.PopupHonors" ]);