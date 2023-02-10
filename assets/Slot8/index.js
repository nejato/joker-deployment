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
  "Slot8.ItemSlot": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c950pPr6hPEJ1AGixSOybu", "Slot8.ItemSlot");
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
    var Slot8ItemSlot = function(_super) {
      __extends(Slot8ItemSlot, _super);
      function Slot8ItemSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.itemAtlast = null;
        _this.itemBlur = null;
        _this.item4 = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
      }
      Slot8ItemSlot.prototype.onLoad = function() {
        this.spriteIcon = cc.find("Box/Sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/Spine", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
        this.node.setContentSize(cc.size(165, 165));
      };
      Slot8ItemSlot.prototype.init = function(itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        this.spineIcon.node.scale = .67;
        this.spineIcon.node.y = 5;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        self.spineIcon.node.active = false;
        this.setSpriteFrame(itemId);
      };
      Slot8ItemSlot.prototype.changeSpriteBlurByItemId = function(itemId) {
        var self = this;
        this.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId, true);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
      };
      Slot8ItemSlot.prototype.changeSpriteRealByItemId = function(itemId) {
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
      };
      Slot8ItemSlot.prototype.changeSpineIcon = function(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        itemId = parseInt(itemId);
        switch (itemId) {
         case 0:
          this.animName = "jackport";
          this.spriteIcon.node.y = 10;
          break;

         case 1:
          this.animName = "bonus";
          break;

         case 2:
          this.animName = "freespin";
        }
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
      };
      Slot8ItemSlot.prototype.setSpriteFrame = function(itemId, isBlur) {
        void 0 === isBlur && (isBlur = false);
        var atlast = isBlur ? this.itemBlur : this.itemAtlast;
        switch (itemId) {
         case 0:
          this.spriteIcon.spriteFrame = atlast.getSpriteFrame("jackpot");
          break;

         case 1:
          this.spriteIcon.spriteFrame = atlast.getSpriteFrame("bonus");
          break;

         case 2:
          this.spriteIcon.spriteFrame = atlast.getSpriteFrame("freespin");
          break;

         case 3:
         case 4:
         case 5:
          this.spriteIcon.spriteFrame = atlast.getSpriteFrame("item_" + (itemId - 2));
          break;

         case 6:
          this.spriteIcon.spriteFrame = isBlur ? atlast.getSpriteFrame("item_" + (itemId - 2)) : this.item4;
        }
      };
      Slot8ItemSlot.prototype.checkShowSpriteOrSpine = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 2) {
          this.spineIcon.node.active = false;
          this.spriteIcon.node.active = true;
          this.spriteIcon.node.color = cc.Color.WHITE;
          cc.tween(this.spriteIcon.node).repeatForever(cc.tween().sequence(cc.tween().to(.25, {
            scale: 1.1
          }, {
            easing: cc.easing.sineOut
          }), cc.tween().to(.25, {
            scale: 1
          }, {
            easing: cc.easing.sineOut
          }))).start();
          cc.tween(this.spriteIcon.node).delay(.9).call(function() {
            _this.spriteIcon.node.color = cc.Color.GRAY;
            cc.Tween.stopAllByTarget(_this.spriteIcon.node);
            _this.spriteIcon.node.scale = 1;
          }).start();
        } else {
          this.spineIcon.node.active = true;
          this.spriteIcon.node.active = false;
          this.spineIcon.setAnimation(0, this.animName, true);
          this.spineIcon.node.color = cc.Color.WHITE;
          cc.tween(this.spineIcon.node).delay(.9).call(function() {
            _this.spineIcon.node.color = cc.Color.GRAY;
            _this.spriteIcon.node.active = true;
            _this.spineIcon.node.active = false;
          }).start();
        }
      };
      __decorate([ property(cc.Sprite) ], Slot8ItemSlot.prototype, "spriteIcon", void 0);
      __decorate([ property(sp.Skeleton) ], Slot8ItemSlot.prototype, "spineIcon", void 0);
      __decorate([ property(cc.Node) ], Slot8ItemSlot.prototype, "nodeBox", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Slot8ItemSlot.prototype, "itemAtlast", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Slot8ItemSlot.prototype, "itemBlur", void 0);
      __decorate([ property(cc.SpriteFrame) ], Slot8ItemSlot.prototype, "item4", void 0);
      Slot8ItemSlot = __decorate([ ccclass ], Slot8ItemSlot);
      return Slot8ItemSlot;
    }(cc.Component);
    exports.default = Slot8ItemSlot;
    cc._RF.pop();
  }, {} ],
  "Slot8.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a323IQ3ddLR65kyt3OiMw9", "Slot8.Lobby");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var Slot8Cmd_1 = require("./Slot8Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot8Lobby = function(_super) {
      __extends(Slot8Lobby, _super);
      function Slot8Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
      }
      Slot8Lobby.prototype.init = function(pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
        this.mSlotController.isMusic && cc.audioEngine.playMusic(this.mSlotController.musicGame, true);
        this.show();
      };
      Slot8Lobby.prototype.onLoad = function() {
        this.node.getComponentInChildren(sp.Skeleton).node.setScale(cc.v2(cc.winSize.width / 1280 * .67, cc.winSize.height / 720 * .67));
      };
      Slot8Lobby.prototype.show = function() {
        this.node.active = true;
      };
      Slot8Lobby.prototype.hide = function() {
        this.node.active = false;
      };
      Slot8Lobby.prototype.onBtnBack = function() {
        this.mSlotController.isSound && cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Slot8Lobby.prototype.onBtnTry = function() {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom(null);
        this.mSlotController.isTrial = true;
      };
      Slot8Lobby.prototype.onUpdateJackpot = function(pData) {
        var res = new Slot8Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["rollRoye"]["100"].p, 3);
        Tween_1.default.numberTo(this.listPot[1], resJson["rollRoye"]["1000"].p, 3);
        Tween_1.default.numberTo(this.listPot[2], resJson["rollRoye"]["10000"].p, 3);
      };
      __decorate([ property([ cc.Label ]) ], Slot8Lobby.prototype, "listPot", void 0);
      __decorate([ property([ cc.Node ]) ], Slot8Lobby.prototype, "rooms", void 0);
      Slot8Lobby = __decorate([ ccclass ], Slot8Lobby);
      return Slot8Lobby;
    }(cc.Component);
    exports.default = Slot8Lobby;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot8Cmd": "Slot8Cmd"
  } ],
  "Slot8.PopupBonus": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4dc4aB00A1MC4fYR4ZvgofA", "Slot8.PopupBonus");
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
    exports.PopupBonus = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupBonus = function(_super) {
      __extends(PopupBonus, _super);
      function PopupBonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sfMiss = [];
        _this.sfWin = [];
        _this.items = null;
        _this.nodeBoxNotify = null;
        _this.txtNotify = null;
        _this.lblLeft = null;
        _this.lblFactor = null;
        _this.lblHeso = null;
        _this.lblWin = null;
        _this.factor = 1;
        _this.left = 0;
        _this.betValue = 0;
        _this.onFinished = null;
        _this.onSpecialFinished = null;
        _this.dataBonus = [];
        _this.dataSpecial = -1;
        _this.heso = 0;
        _this.win = 0;
        _this.controller = null;
        return _this;
      }
      PopupBonus.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["labai"] = node["btn"].node.getChildByName("labai");
          node["miss"] = node["btn"].node.getChildByName("miss");
          node["win"] = node["btn"].node.getChildByName("win");
          node["label"] = node["win"].getComponentInChildren(cc.Label);
          node["chat"] = node["btn"].node.getChildByName("chat").getComponent(cc.Sprite);
          node["btn"].node.on("click", function() {
            _this.controller.onBtnSoundTouchBonus();
            var value = _this.dataBonus[_this.dataBonus.length - _this.left];
            if (false == node["is_open"] && _this.left > 0) {
              node["is_open"] = true;
              switch (value) {
               case 0:
                _this.factor++;
                _this.lblFactor.string = _this.factor + "";
                node["labai"].active = false;
                node["miss"].active = true;
                node["win"].active = false;
                node["chat"].node.active = true;
                node["chat"].spriteFrame = _this.sfMiss[parseInt(Math.random() * _this.sfMiss.length + "")];
                break;

               case 1:
                node["labai"].active = false;
                node["miss"].active = false;
                node["win"].active = true;
                node["chat"].node.active = true;
                node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 4 * _this.betValue, .3);
                _this.win += 4 * _this.betValue;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 2:
                node["labai"].active = false;
                node["miss"].active = false;
                node["win"].active = true;
                node["chat"].node.active = true;
                node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, .3);
                _this.win += 10 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 3:
                node["labai"].active = false;
                node["miss"].active = false;
                node["win"].active = true;
                node["chat"].node.active = true;
                node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                node["label"].node.active = true;
                node["label"].string = "0";
                Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, .3);
                _this.win += 15 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
                break;

               case 4:
                node["labai"].active = false;
                node["miss"].active = false;
                node["win"].active = true;
                node["chat"].node.active = true;
                node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                node["label"].node.active = true;
                node["label"].string = "0";
                _this.win += 20 * _this.betValue * _this.factor;
                Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, .3);
                Tween_1.default.numberTo(_this.lblWin, _this.win, .3);
              }
              _this.left--;
              _this.lblLeft.string = "" + _this.left;
              _this.left <= 0 && _this.hidden();
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.childrenCount; i++) _loop_1(i);
      };
      PopupBonus.prototype.showBonus = function(betValue, bonus, controller, onFinished) {
        _super.prototype.show.call(this);
        this.controller = controller;
        this.win = 0;
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
          node["labai"] = node["btn"].node.getChildByName("labai");
          node["miss"] = node["btn"].node.getChildByName("miss");
          node["win"] = node["btn"].node.getChildByName("win");
          node["label"] = node["win"].getComponentInChildren(cc.Label);
          node["chat"] = node["btn"].node.getChildByName("chat").getComponent(cc.Sprite);
          node["is_open"] = false;
        }
        for (var i = 0; i < this.items.childrenCount; i++) {
          var node = this.items.children[i];
          var btn = node.getChildByName("btn").getComponent(cc.Button);
          btn.node.active = true;
          btn.interactable = true;
          node["labai"].active = true;
          node["miss"].active = false;
          node["win"].active = false;
          node["chat"].node.active = false;
        }
        this.betValue = betValue;
        this.onFinished = onFinished;
        var arrBonus = bonus.split(",");
        this.dataBonus = [];
        for (var i = 0; i < arrBonus.length; i++) this.dataBonus.push(Number(arrBonus[i]));
        this.left = this.dataBonus.length - 1;
        this.factor = 1;
        this.lblLeft.string = "" + this.left;
        this.lblFactor.string = this.factor + "";
        this.heso = this.dataBonus[0];
        this.lblHeso.string = "x" + this.heso;
      };
      PopupBonus.prototype.hidden = function() {
        this.controller.onBtnSoundSumary();
        Tween_1.default.showPopup(this.nodeBoxNotify, this.nodeBoxNotify.parent);
        Tween_1.default.numberTo(this.txtNotify, this.win, .3);
      };
      PopupBonus.prototype.onBtnExit = function() {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function() {
          _this.dismiss();
          _this.onFinished();
        }, 1.5);
      };
      __decorate([ property([ cc.SpriteFrame ]) ], PopupBonus.prototype, "sfMiss", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupBonus.prototype, "sfWin", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "items", void 0);
      __decorate([ property(cc.Node) ], PopupBonus.prototype, "nodeBoxNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "txtNotify", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblLeft", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblFactor", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblHeso", void 0);
      __decorate([ property(cc.Label) ], PopupBonus.prototype, "lblWin", void 0);
      PopupBonus = __decorate([ ccclass ], PopupBonus);
      return PopupBonus;
    }(Dialog_1.default);
    exports.PopupBonus = PopupBonus;
    exports.default = PopupBonus;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ],
  "Slot8.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d3c39F/xBO95FWPBMqKT58", "Slot8.PopupGuide");
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
    exports.PopupGuide = void 0;
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupGuide = function(_super) {
      __extends(PopupGuide, _super);
      function PopupGuide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
      }
      PopupGuide.prototype.start = function() {};
      PopupGuide.prototype.show = function() {
        _super.prototype.show.call(this);
      };
      PopupGuide.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
      };
      PopupGuide.prototype.canPlaySound = function() {};
      PopupGuide = __decorate([ ccclass ], PopupGuide);
      return PopupGuide;
    }(Dialog_1.default);
    exports.PopupGuide = PopupGuide;
    exports.default = PopupGuide;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0
  } ],
  "Slot8.Tutorial": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "480cfQ7Nn5GEqMzNINK0G48", "Slot8.Tutorial");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot8Tutorial = function(_super) {
      __extends(Slot8Tutorial, _super);
      function Slot8Tutorial() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.spriteTutorial = null;
        _this.sfTutorialArr = [];
        return _this;
      }
      Slot8Tutorial.prototype.show = function(controller) {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        -1 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[2] : 0 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[0] : 1 == controller.betId ? this.spriteTutorial.spriteFrame = this.sfTutorialArr[1] : this.spriteTutorial.spriteFrame = this.sfTutorialArr[2];
      };
      Slot8Tutorial.prototype.hide = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
      };
      __decorate([ property(cc.Node) ], Slot8Tutorial.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Sprite) ], Slot8Tutorial.prototype, "spriteTutorial", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Tutorial.prototype, "sfTutorialArr", void 0);
      Slot8Tutorial = __decorate([ ccclass ], Slot8Tutorial);
      return Slot8Tutorial;
    }(cc.Component);
    exports.default = Slot8Tutorial;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ],
  Slot8ChooseLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43fd7c1dypE9p/N4WIGtJGb", "Slot8ChooseLine");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot8ChooseLine = function(_super) {
      __extends(Slot8ChooseLine, _super);
      function Slot8ChooseLine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.btnClose = null;
        _this.lineParent = null;
        _this.listToggle = [];
        _this.SELECTED = "selected";
        _this.onSelectedChanged = null;
        return _this;
      }
      Slot8ChooseLine.prototype.start = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var node = this_1.lineParent.children[i];
          var toggle = node.getComponent(cc.Toggle);
          this_1.listToggle.push(toggle);
          node[this_1.SELECTED] = true;
          node.on("click", function() {
            node[_this.SELECTED] = !node[_this.SELECTED];
            null != _this.onSelectedChanged && _this.onSelectedChanged(_this.getLineSelected());
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.lineParent.childrenCount; i++) _loop_1(i);
      };
      Slot8ChooseLine.prototype.getLineSelected = function() {
        var lines = new Array();
        for (var i = 0; i < this.listToggle.length; i++) {
          var node = this.listToggle[i].node;
          ("undefined" == typeof node[this.SELECTED] || node[this.SELECTED]) && lines.push(i + 1);
        }
        this.btnClose.interactable = lines.length > 0;
        return lines;
      };
      Slot8ChooseLine.prototype.selectAll = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = true;
          this.listToggle[i].isChecked = true;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot8ChooseLine.prototype.deSelectAll = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = false;
          this.listToggle[i].isChecked = false;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot8ChooseLine.prototype.selectEven = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = i % 2 != 0;
          this.listToggle[i].isChecked = i % 2 !== 0;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot8ChooseLine.prototype.selectOdd = function() {
        for (var i = 0; i < this.listToggle.length; i++) {
          this.listToggle[i].node[this.SELECTED] = i % 2 == 0;
          this.listToggle[i].isChecked = i % 2 == 0;
        }
        null != this.onSelectedChanged && this.onSelectedChanged(this.getLineSelected());
      };
      Slot8ChooseLine.prototype.showPopup = function(arrLineSelected) {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.listToggle.length; i++) {
          var node = this.listToggle[i];
          this.listToggle[i].isChecked = this.listToggle[i].node[this.SELECTED];
        }
      };
      Slot8ChooseLine.prototype.hide = function() {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
      };
      __decorate([ property(cc.Node) ], Slot8ChooseLine.prototype, "nodeBox", void 0);
      __decorate([ property(cc.Button) ], Slot8ChooseLine.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], Slot8ChooseLine.prototype, "lineParent", void 0);
      Slot8ChooseLine = __decorate([ ccclass ], Slot8ChooseLine);
      return Slot8ChooseLine;
    }(Dialog_1.default);
    exports.default = Slot8ChooseLine;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0
  } ],
  Slot8Cmd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f1d7Z4a21FPoLO/9aPXOqa", "Slot8Cmd");
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
    var ccclass = cc._decorator.ccclass;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.SUBCRIBE = 5003;
        Code.UNSUBCRIBE = 5004;
        Code.CHANGE_ROOM = 5005;
        Code.PLAY = 5001;
        Code.UPDATE_RESULT = 5001;
        Code.UPDATE_POT = 5002;
        Code.AUTO = 5006;
        Code.STOP_AUTO = 5006;
        Code.FORCE_STOP_AUTO = 5008;
        Code.DATE_X2 = 5009;
        Code.BIG_WIN = 5010;
        Code.FREE = 5011;
        Code.FREE_DAI_LY = 5012;
        Code.MINIMIZE = 5013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        return Code;
      }();
      cmd.Code = Code;
      var ReceiveFreeDaiLy = function(_super) {
        __extends(ReceiveFreeDaiLy, _super);
        function ReceiveFreeDaiLy(data) {
          var _this = _super.call(this, data) || this;
          _this.freeSpin = 0;
          _this.freeSpin = _this.getByte();
          return _this;
        }
        return ReceiveFreeDaiLy;
      }(Network_InPacket_1.default);
      cmd.ReceiveFreeDaiLy = ReceiveFreeDaiLy;
      var ResUpdateJackpotSlots = function(_super) {
        __extends(ResUpdateJackpotSlots, _super);
        function ResUpdateJackpotSlots(data) {
          var _this = _super.call(this, data) || this;
          _this.pots = "";
          _this.pots = _this.getString();
          return _this;
        }
        return ResUpdateJackpotSlots;
      }(Network_InPacket_1.default);
      cmd.ResUpdateJackpotSlots = ResUpdateJackpotSlots;
      var SendUnSubcribe = function(_super) {
        __extends(SendUnSubcribe, _super);
        function SendUnSubcribe(roomId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.UNSUBCRIBE);
          _this.packHeader();
          _this.putByte(roomId);
          _this.updateSize();
          return _this;
        }
        return SendUnSubcribe;
      }(Network_OutPacket_1.default);
      cmd.SendUnSubcribe = SendUnSubcribe;
      var SendSubcribe = function(_super) {
        __extends(SendSubcribe, _super);
        function SendSubcribe(roomId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SUBCRIBE);
          _this.packHeader();
          _this.putByte(roomId);
          _this.updateSize();
          return _this;
        }
        return SendSubcribe;
      }(Network_OutPacket_1.default);
      cmd.SendSubcribe = SendSubcribe;
      var SendPlay = function(_super) {
        __extends(SendPlay, _super);
        function SendPlay(lines) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.PLAY);
          _this.packHeader();
          _this.putString(lines);
          _this.updateSize();
          return _this;
        }
        return SendPlay;
      }(Network_OutPacket_1.default);
      cmd.SendPlay = SendPlay;
      var SendChangeRoom = function(_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(roomLeavedId, roomJoinedId) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHANGE_ROOM);
          _this.packHeader();
          _this.putByte(roomLeavedId);
          _this.putByte(roomJoinedId);
          _this.updateSize();
          return _this;
        }
        return SendChangeRoom;
      }(Network_OutPacket_1.default);
      cmd.SendChangeRoom = SendChangeRoom;
      var ReceiveUpdatePot = function(_super) {
        __extends(ReceiveUpdatePot, _super);
        function ReceiveUpdatePot(data) {
          var _this = _super.call(this, data) || this;
          _this.valueRoom1 = 0;
          _this.valueRoom2 = 0;
          _this.valueRoom3 = 0;
          _this.x21 = 0;
          _this.x22 = 0;
          _this.valueRoom1 = _this.getLong();
          _this.valueRoom2 = _this.getLong();
          _this.valueRoom3 = _this.getLong();
          _this.x21 = _this.getByte();
          _this.x22 = _this.getByte();
          return _this;
        }
        return ReceiveUpdatePot;
      }(Network_InPacket_1.default);
      cmd.ReceiveUpdatePot = ReceiveUpdatePot;
      var ReceiveResult = function(_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
          var _this = _super.call(this, data) || this;
          _this.ref = 0;
          _this.result = 0;
          _this.matrix = "";
          _this.linesWin = "";
          _this.haiSao = "";
          _this.prize = 0;
          _this.currentMoney = 0;
          _this.isFreeSpin = 0;
          _this.ratio = 0;
          _this.currentNumberFreeSpin = 0;
          _this.ref = _this.getLong();
          _this.result = _this.getByte();
          _this.matrix = _this.getString();
          _this.linesWin = _this.getString();
          _this.haiSao = _this.getString();
          _this.prize = _this.getLong();
          _this.currentMoney = _this.getLong();
          _this.isFreeSpin = _this.getByte();
          _this.ratio = _this.getByte();
          _this.currentNumberFreeSpin = _this.getByte();
          return _this;
        }
        return ReceiveResult;
      }(Network_InPacket_1.default);
      cmd.ReceiveResult = ReceiveResult;
      var ReceiveDateX2 = function(_super) {
        __extends(ReceiveDateX2, _super);
        function ReceiveDateX2(data) {
          var _this = _super.call(this, data) || this;
          _this.ngayX2 = "";
          _this.remain = 0;
          _this.currentMoney = 0;
          _this.freeSpin = 0;
          _this.lines = "";
          _this.currentRoom = 0;
          _this.ngayX2 = _this.getString();
          _this.remain = _this.getByte();
          _this.currentMoney = _this.getLong();
          _this.freeSpin = _this.getByte();
          _this.lines = _this.getString();
          _this.currentRoom = _this.getByte();
          return _this;
        }
        return ReceiveDateX2;
      }(Network_InPacket_1.default);
      cmd.ReceiveDateX2 = ReceiveDateX2;
      var ReqSubcribeHallSlot = function(_super) {
        __extends(ReqSubcribeHallSlot, _super);
        function ReqSubcribeHallSlot() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SUBCRIBE_HALL_SLOT);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return ReqSubcribeHallSlot;
      }(Network_OutPacket_1.default);
      cmd.ReqSubcribeHallSlot = ReqSubcribeHallSlot;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  Slot8Controller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "962a4ReV8ZKGKbM4uluxFae", "Slot8Controller");
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
    var Slot8Cmd_1 = require("./Slot8Cmd");
    var Configs_1 = require("../../Loading/src/Configs");
    var Slot8TrialResult_1 = require("./Slot8TrialResult");
    var Slot8_Lobby_1 = require("./Slot8.Lobby");
    var Slot8_PopupBonus_1 = require("./Slot8.PopupBonus");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
    var Slot8ChooseLine_1 = require("./Slot8ChooseLine");
    var Slot8_ItemSlot_1 = require("./Slot8.ItemSlot");
    var BundleControl_1 = require("../../Loading/src/BundleControl");
    var MAX_CYCCLE_SPIN = 20;
    var FAST_CYCCLE_SPIN = 10;
    var ERROR_CYCCLE_SPIN = 50;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot8Controller = function(_super) {
      __extends(Slot8Controller, _super);
      function Slot8Controller() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        _this.nodeCoin = null;
        _this.initNodeCoin = null;
        _this.btnLine = null;
        _this.lblFreeSpinCount = null;
        _this.nodeBoxSetting = null;
        _this.popupContainer = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.popupBonus = null;
        _this.skeSpin = null;
        _this.nodeDemo = null;
        _this.nodeWinJackpot = null;
        _this.txtWinJackpot = null;
        _this.nodeGamePlay = null;
        _this.mSlotLobby = null;
        _this.jackpotLabel = null;
        _this.moneyLabel = null;
        _this.totalLineLabel = null;
        _this.btnSpin = null;
        _this.toggleFast = null;
        _this.toggleAuto = null;
        _this.winNormalBg = null;
        _this.bonusNode = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.freespinNode = null;
        _this.winLabel = null;
        _this.lbCurrentRoom = null;
        _this.freespinCurrent = null;
        _this.lineWinParent = null;
        _this.colParent = null;
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        _this.popupChooseLine = null;
        _this.musicLobby = null;
        _this.musicGame = null;
        _this.musicBonus = null;
        _this.soundClick = null;
        _this.soundStartSpin = null;
        _this.soundRepeatSpin = null;
        _this.soundEndSpin = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundFreeSpin = null;
        _this.soundtouchBonus = null;
        _this.soundSmumary = null;
        _this.listActiveItem = [];
        _this.TIME_DELAY_SHOW_LINE = 1;
        _this.dailyFreeSpin = 0;
        _this.betId = 0;
        _this.listBet = [ 100, 1e3, 1e4 ];
        _this.listBetString = [ "100", "1K", "10K" ];
        _this.arrLineSelected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
        _this.isTrial = false;
        _this.isSpining = false;
        _this.mapLine = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 7, 3, 4 ], [ 10, 11, 7, 13, 14 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 7, 8, 4 ], [ 5, 11, 12, 13, 9 ], [ 5, 1, 2, 3, 9 ], [ 10, 11, 7, 3, 4 ], [ 0, 1, 7, 13, 14 ] ];
        _this.isFastCurrent = false;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.iconSFBlurArr100 = [];
        _this.iconSFArr100 = [];
        _this.arrSkeletonIcon100 = [];
        _this.iconSFBlurArr1K = [];
        _this.iconSFArr1K = [];
        _this.arrSkeletonIcon1K = [];
        _this.iconSFBlurArr10K = [];
        _this.iconSFArr10K = [];
        _this.arrSkeletonIcon10K = [];
        _this.arrUIItemIcon = [];
        _this.arrRealItem = [];
        _this.popupGuide = null;
        _this.popupHistory = null;
        _this.popupHonor = null;
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.isFirst = false;
        _this.isSound = false;
        _this.isMusic = true;
        _this.mutipleJpNode = null;
        _this.audioIdRepeatSpin = 0;
        return _this;
      }
      Slot8Controller.prototype.start = function() {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.isSound = true;
        this.isMusic = true;
        this.totalWinLabel.string = "";
        var musicId = 0;
        SlotNetworkClient_1.default.getInstance().addOnClose(function() {
          _this.mSlotLobby.onBtnBack();
        }, this);
        this.init();
        SlotNetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Slot8Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
            _this.mSlotLobby.onUpdateJackpot(data);
            break;

           case Slot8Cmd_1.default.Code.UPDATE_POT:
            var res = new Slot8Cmd_1.default.ReceiveUpdatePot(data);
            -1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, .3) : 0 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom1, .3) : 1 == _this.betId ? Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom2, .3) : 2 == _this.betId && Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, .3);
            break;

           case Slot8Cmd_1.default.Code.UPDATE_RESULT:
            var res = new Slot8Cmd_1.default.ReceiveResult(data);
            _this.spinResult(res);
            break;

           case Slot8Cmd_1.default.Code.FREE_DAI_LY:
            if (!_this.isTrial) {
              var res = new Slot8Cmd_1.default.ReceiveFreeDaiLy(data);
              _this.dailyFreeSpin = res.freeSpin;
              if (_this.dailyFreeSpin > 0) {
                _this.lblFreeSpinCount.node.parent.active = true;
                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
              } else _this.lblFreeSpinCount.node.parent.active = false;
            }
            break;

           case Slot8Cmd_1.default.Code.DATE_X2:
            var res = new Slot8Cmd_1.default.ReceiveDateX2(data);
            if (false == _this.isFirst) {
              _this.hideGamePlay();
              _this.isFirst = true;
            } else {
              _this.mSlotLobby.node.active = false;
              _this.onJoinRoom(res);
            }
            break;

           case Slot8Cmd_1.default.Code.CHANGE_ROOM:
          }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot8Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, .3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function() {
          App_1.default.instance.showLoading(false);
        });
        this.mSlotLobby.init(this);
      };
      Slot8Controller.prototype.onEnable = function() {
        this.changeAllItemToDark(false);
      };
      Slot8Controller.prototype.initMutipleJPNode = function() {
        var _this = this;
        this.mutipleJpNode || cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          if (null != err1) ; else {
            _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
            _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
            _this.mutipleJpNode.setInfo("ANGRY");
          }
        });
      };
      Slot8Controller.prototype.showAnimations = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var nodeItem = self.arrUIItemIcon[i].nodeBox;
          var indexCol = i % 5;
          nodeItem.opacity = 0;
          nodeItem.position = cc.v3(0, self.distanceReel, 0);
          cc.tween(nodeItem).delay(.1 * indexCol).to(1, {
            position: cc.v3(0, 0, 0),
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
      };
      Slot8Controller.prototype.showGamePlay = function() {
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
      };
      Slot8Controller.prototype.hideGamePlay = function() {
        this.nodeGamePlay.active = false;
      };
      Slot8Controller.prototype.init = function() {
        this.totalWinLabel.string = "";
      };
      Slot8Controller.prototype.showCoins = function(prize) {
        var number = prize / 2e4;
        number <= 10 ? number = 10 : number >= 20 && (number = 20);
        App_1.default.instance.showCoins(number, this.initNodeCoin, this.nodeCoin);
      };
      Slot8Controller.prototype.onJoinRoom = function(res) {
        void 0 === res && (res = null);
        var betIdTmp = this.betId;
        -1 == betIdTmp && (betIdTmp = 2);
        var totalbet = this.arrLineSelected.length * this.listBet[betIdTmp];
        Tween_1.default.numberTo(this.totalBetLabel, totalbet, .3);
        this.mSlotLobby.hide();
        this.showGamePlay();
        this.setButtonEnable(true);
        if (null == res) this.freespinCurrent.active = false; else if (res.freeSpin + this.dailyFreeSpin > 0) {
          this.freespinCurrent.active = true;
          this.freespinCurrent.getComponentInChildren(cc.Label).string = res.freeSpin + this.dailyFreeSpin;
        } else this.freespinCurrent.active = false;
      };
      Slot8Controller.prototype.randomIconList = function() {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
          var index = i;
          var itemId = Math.floor(7 * Math.random());
          self.arrUIItemIcon[i].init(itemId, index, self);
          self.arrUIItemIcon[i].changeSpineIcon(itemId);
        }
      };
      Slot8Controller.prototype.randomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      Slot8Controller.prototype.spinClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isTrial) {
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          var rIdx = Utils_1.default.randomRangeInt(0, Slot8TrialResult_1.default.results.length);
          this.spinResult(Slot8TrialResult_1.default.results[rIdx]);
        } else {
          if (this.dailyFreeSpin > 0) {
            this.dailyFreeSpin--;
            if (this.dailyFreeSpin > 0) {
              this.lblFreeSpinCount.node.parent.active = true;
              this.lblFreeSpinCount.string = this.dailyFreeSpin + "";
            } else this.lblFreeSpinCount.node.parent.active = false;
          } else if (Configs_1.default.Login.Coin < this.listBet[this.betId] * this.arrLineSelected.length) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
          }
          this.hideWinEffect();
          this.hideLineWin(true);
          this.setButtonEnable(false);
          this.totalWinLabel.string = "";
          SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendPlay(this.arrLineSelected.toString()));
        }
      };
      Slot8Controller.prototype.onBtnSoundTouchBonus = function() {
        this.isSound && cc.audioEngine.play(this.soundtouchBonus, false, 1);
      };
      Slot8Controller.prototype.onBtnSoundSumary = function() {
        this.isSound && cc.audioEngine.play(this.soundSmumary, false, 1);
        this.isMusic && cc.audioEngine.playMusic(this.musicGame, true);
      };
      Slot8Controller.prototype.spinResult = function(res) {
        this.isSpining = true;
        var that = this;
        var successResult = [ 0, 1, 2, 3, 4, 5, 6 ];
        var result = res.result;
        if (-1 === successResult.indexOf(result)) {
          102 === result && App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
          return;
        }
        var matrix = res.matrix.split(",");
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        this.isSound && cc.audioEngine.play(this.soundStartSpin, false, 1);
        this.isSound && (this.audioIdRepeatSpin = cc.audioEngine.play(this.soundRepeatSpin, false, 1));
        for (var i = 0; i < this.arrReel.length; i++) this.beginSpinReel(i);
      };
      Slot8Controller.prototype.spinFinish = function(hasDelay) {
        var _this = this;
        this.isSpining = false;
        var that = this;
        this.changeAllItemToDark(false);
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function() {
          if (that.toggleFast.isChecked || _this.toggleAuto.isChecked) that.spinClick(); else {
            that.setButtonEnable(true);
            that.setButtonFlash(true);
          }
        })));
      };
      Slot8Controller.prototype.showWinEffect = function(prize, currentMoney, result) {
        var _this = this;
        var self = this;
        if (prize > 0) {
          this.lineWinParent.setSiblingIndex(1);
          this.colParent.setSiblingIndex(0);
          if (5 == result) {
            this.isSound && cc.audioEngine.play(this.soundBonus, false, 1);
            this.bonusNode.active = true;
            var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
            bonusSpine.setAnimation(0, "bounus", true);
            this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
              _this.bonusNode.active = false;
              _this.isMusic && cc.audioEngine.playMusic(_this.musicBonus, true);
              _this.actShowBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, function() {
                _this.showLineWin(self.dataResult.linesWin.split(","));
                _this.showCoins(prize);
                Tween_1.default.numberTo(_this.winLabel, prize, .3);
                Tween_1.default.numberTo(_this.totalWinLabel, prize, .3);
                Tween_1.default.numberTo(_this.totalBetLabel, _this.arrLineSelected.length * _this.listBet[_this.betId], .3);
                _this.isTrial || Tween_1.default.numberTo(_this.moneyLabel, currentMoney, .3);
                _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
              });
            })));
          } else if (2 == result || 6 == result) {
            this.isSound && cc.audioEngine.play(this.soundBigWin, false, 1);
            this.bigWinNode.active = true;
            var bigwinSpine = this.bigWinNode.getComponentInChildren(sp.Skeleton);
            bigwinSpine.setAnimation(0, "thanglon", true);
            Tween_1.default.numberTo(this.txtWinBigWin, prize, 1.5);
            this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
              _this.bigWinNode.active = false;
              _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
            })));
            this.showCoins(prize);
            Tween_1.default.numberTo(this.winLabel, prize, .3);
            Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
            Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
            this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          } else if (3 == result || 4 == result) {
            if (this.isSound) var audioIdJackpot = cc.audioEngine.play(this.soundJackpot, false, 1);
            if (this.isSound) var audioIdJackpot = cc.audioEngine.play(this.soundSmumary, false, 1);
            this.jackpotNode.active = true;
            var jackpotSpine = this.jackpotNode.getComponentInChildren(sp.Skeleton);
            jackpotSpine.setAnimation(0, "jackport", true);
            this.showCoins(prize);
            cc.Tween.stopAllByTarget(this.nodeWinJackpot);
            Tween_1.default.numberTo(this.txtWinJackpot, prize, .3);
            this.nodeWinJackpot.position = cc.v3(0, -360, 0);
            this.nodeWinJackpot.active = true;
            cc.tween(this.nodeWinJackpot).to(1, {
              position: cc.v3(0, 0, 0)
            }).delay(3).to(1, {
              position: cc.v3(0, -360, 0)
            }).start();
            this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
              _this.jackpotNode.active = false;
              _this.toggleFast.isChecked ? self.spinFinish(true) : "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
              _this.isSound && cc.audioEngine.stop(audioIdJackpot);
            })));
            Tween_1.default.numberTo(this.winLabel, prize, .3);
            Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
            Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
            this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          } else {
            this.isSound && cc.audioEngine.play(this.soundSpinWin, false, 1);
            this.winNormalBg.active = true;
            this.showCoins(prize);
            Tween_1.default.numberTo(this.winLabel, prize, .3);
            Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
            Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
            this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
            this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
          }
        } else {
          Tween_1.default.numberTo(this.totalWinLabel, prize, .3);
          Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], .3);
          this.isTrial || Tween_1.default.numberTo(this.moneyLabel, currentMoney, .3);
          this.toggleFast.isChecked, "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
        }
      };
      Slot8Controller.prototype.beginSpinReel = function(indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleFast.isChecked;
        self.numberSpinReel[indexReel] = 0;
        cc.Tween.stopAllByTarget(self.arrReel[indexReel]);
        cc.tween(self.arrReel[indexReel]).delay(.2 * indexReel).to(.1, {
          position: cc.v3(self.arrReel[indexReel].position.x, 70, 0)
        }, {
          easing: "linear"
        }).call(function() {
          self.loopSpinReel(indexReel);
        }).start();
      };
      Slot8Controller.prototype.loopSpinReel = function(indexReel) {
        var self = this;
        var speed = this.toggleFast.isChecked ? .04 : .07;
        cc.tween(self.arrReel[indexReel]).to(speed, {
          position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0)
        }, {
          easing: "linear"
        }).call(function() {
          self.processLoopSpinReel(indexReel);
        }).start();
      };
      Slot8Controller.prototype.processLoopSpinReel = function(indexReel) {
        var self = this;
        self.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
          var index = indexReel + 5 * i;
          var indexRow = Math.floor(index / 5);
          var itemIdTmp = 0;
          itemIdTmp = 0 == indexRow ? Math.floor(7 * Math.random()) : self.arrUIItemIcon[index - 5].itemId;
          self.arrUIItemIcon[index].changeSpriteBlurByItemId(itemIdTmp);
        }
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, 0, 0);
        self.isHaveResultSpin ? false == self.isFastCurrent ? self.numberSpinReel[indexReel] >= MAX_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel) : self.numberSpinReel[indexReel] >= FAST_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel) : self.numberSpinReel[indexReel] >= ERROR_CYCCLE_SPIN ? self.endSpinReel(indexReel) : self.loopSpinReel(indexReel);
      };
      Slot8Controller.prototype.endSpinReel = function(indexReel) {
        var _this = this;
        var self = this;
        if (null == self.dataResult) {
          for (var i = 3; i >= 1; i--) {
            var index = indexReel + 5 * i;
            var itemId = Math.floor(7 * Math.random());
            self.arrUIItemIcon[index].changeSpineIcon(itemId);
          }
          return;
        }
        var matrix = self.dataResult.matrix.split(",");
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
          var index = indexReel + 5 * i;
          self.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
        }
        var speed = this.toggleFast.isChecked ? .15 : .3;
        cc.tween(self.arrReel[indexReel]).to(speed, {
          position: cc.v3(self.arrReel[indexReel].position.x, 0, 0)
        }, {
          easing: "backOut"
        }).call(function() {
          self.isSound && cc.audioEngine.play(self.soundEndSpin, false, 1);
          if (4 == indexReel) {
            cc.audioEngine.stop(_this.audioIdRepeatSpin);
            Configs_1.default.Login.Coin = self.dataResult.currentMoney;
            if (self.dataResult.currentNumberFreeSpin > 0) {
              self.freespinCurrent.active = true;
              self.freespinCurrent.getComponentInChildren(cc.Label).string = self.dataResult.currentNumberFreeSpin;
            } else self.freespinCurrent.active = false;
            if (1 == self.dataResult.isFreeSpin) {
              _this.freespinNode.active = true;
              var freeSpineSpine = _this.freespinNode.getComponentInChildren(sp.Skeleton);
              freeSpineSpine.setAnimation(0, "animation", true);
              _this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                _this.freespinNode.active = false;
                "" !== self.dataResult.linesWin ? self.showLineWin(self.dataResult.linesWin.split(",")) : self.spinFinish(false);
              })));
            } else self.showWinEffect(self.dataResult.prize, self.dataResult.currentMoney, self.dataResult.result);
          }
        }).start();
      };
      Slot8Controller.prototype.getSpriteFrameIconBlur = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.iconSFBlurArr10K[indexIcon];
        if (0 == this.betId) return self.iconSFBlurArr100[indexIcon];
        if (1 == this.betId) return self.iconSFBlurArr1K[indexIcon];
        if (2 == this.betId) return self.iconSFBlurArr10K[indexIcon];
      };
      Slot8Controller.prototype.getSpriteFrameIcon = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.iconSFArr10K[indexIcon];
        if (0 == this.betId) return self.iconSFArr100[indexIcon];
        if (1 == this.betId) return self.iconSFArr1K[indexIcon];
        if (2 == this.betId) return self.iconSFArr10K[indexIcon];
      };
      Slot8Controller.prototype.getSpineIcon = function(indexIcon) {
        var self = this;
        if (-1 == this.betId) return self.arrSkeletonIcon10K[indexIcon];
        if (0 == this.betId) return self.arrSkeletonIcon100[indexIcon];
        if (1 == this.betId) return self.arrSkeletonIcon1K[indexIcon];
        if (2 == this.betId) return self.arrSkeletonIcon10K[indexIcon];
      };
      Slot8Controller.prototype.hideWinEffect = function() {
        this.winNormalBg.active = false;
        this.winLabel.string = "0";
        this.bonusNode.active = false;
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
      };
      Slot8Controller.prototype.onBtnToggleMusic = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? .5 : 0);
      };
      Slot8Controller.prototype.onBtnToggleSound = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSound = !this.isSound;
      };
      Slot8Controller.prototype.onBtnHistory = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot8Controller.prototype.onBtnHistoryJackpot = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.onBtnHideSetting();
      };
      Slot8Controller.prototype.onBtnHideSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
      };
      Slot8Controller.prototype.onBtnSoundClick = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
      };
      Slot8Controller.prototype.onBtnSetting = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.toggleMusic.isChecked = this.isMusic;
        this.toggleSound.isChecked = this.isSound;
        this.nodeBoxSetting.active = !this.nodeBoxSetting.active;
      };
      Slot8Controller.prototype.showLineWin = function(lines) {
        var _this = this;
        if (0 == lines.length) return;
        this.changeAllItemToDark(true);
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var lineNode = this.lineWinParent.children[line - 1];
          lineNode.active = true;
        }
        var that = this;
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          that.hideLineWin(false);
        })));
        this.toggleFast.isChecked ? this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          _this.spinFinish(false);
        }))) : this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          _this.winNormalBg.active = false;
          _this.lineWinParent.setSiblingIndex(0);
          _this.colParent.setSiblingIndex(1);
          var _loop_1 = function(i) {
            var line = lines[i];
            var lineNode = _this.lineWinParent.children[line - 1];
            _this.lineWinParent.runAction(cc.sequence(cc.delayTime(i * _this.TIME_DELAY_SHOW_LINE), cc.callFunc(function() {
              lineNode.active = true;
              var arrItem = _this.getItemWinInLine(line - 1);
              var arrIdOfItem = [];
              var idWin = -1;
              arrItem.forEach(function(item) {
                arrIdOfItem.push(item.itemId);
              });
              arrItem.forEach(function(item) {
                idWin = _this.getItemIdWinInLine(arrIdOfItem);
                item.itemId == idWin && item.checkShowSpriteOrSpine();
              });
            }), cc.delayTime(_this.TIME_DELAY_SHOW_LINE), cc.callFunc(function() {
              lineNode.active = false;
              i == lines.length - 1 && that.spinFinish(false);
            })));
          };
          for (var i = 0; i < lines.length; i++) _loop_1(i);
        })));
      };
      Slot8Controller.prototype.hideLineWin = function(stopAction) {
        stopAction && this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function(element) {
          element.active = false;
        });
      };
      Slot8Controller.prototype.setButtonEnable = function(active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        if (true == active) {
          this.skeSpin.node.color = cc.Color.WHITE;
          this.skeSpin.setAnimation(0, "Spin_quay", true);
        } else {
          this.skeSpin.setAnimation(0, "Spin_stop", true);
          this.skeSpin.node.color = cc.Color.GRAY;
        }
      };
      Slot8Controller.prototype.setButtonFlash = function(active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
      };
      Slot8Controller.prototype.changeBet = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
      };
      Slot8Controller.prototype.chooseBet = function(event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        this.isTrial = -1 == bet;
        this.betId = -1 == bet ? 2 : bet;
        if (this.betId >= this.listBet.length) {
          this.betId = 0;
          SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        } else SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        this.lbCurrentRoom.string = "0" == bet ? "100" : Utils_1.default.formatNumber(1e3);
        2 == bet && (this.lbCurrentRoom.string = Utils_1.default.formatNumber(1e4));
      };
      Slot8Controller.prototype.showGuide = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.popupGuide.show(this);
      };
      Slot8Controller.prototype.closeGuide = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.popupGuide.hide();
      };
      Slot8Controller.prototype.showChooseLine = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
      };
      Slot8Controller.prototype.changeSpeed = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isFastCurrent = this.toggleFast.isChecked;
        this.toggleAuto.isChecked || this.toggleAuto.check();
        this.toggleFast.isChecked && !this.isSpining && this.spinClick();
      };
      Slot8Controller.prototype.setAutoSpin = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.isSpining || this.spinClick();
      };
      Slot8Controller.prototype.actBack = function() {
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        this.lineWinParent.stopAllActions();
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
      };
      Slot8Controller.prototype.actBackz = function() {
        App_1.default.instance.showToast(App_1.default.instance.getTextLang("\u1016\u103d\u1036\u1037\u1016\u103c\u102d\u102f\u1038\u1010\u102d\u102f\u1038\u1010\u1000\u103a\u1019\u103e\u102f\u1010\u103d\u1004\u103a \u1011\u1030\u1038\u1001\u103c\u102c\u1038\u1001\u103b\u1000\u103a\u104b"));
      };
      Slot8Controller.prototype.changeAllItemToDark = function(state) {
        this.arrUIItemIcon.forEach(function(item) {
          var sprite = item.getComponentInChildren(cc.Sprite);
          var spine = item.getComponentInChildren(sp.Skeleton);
          sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
          sprite.node.active = true;
          spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
          spine.node.active = false;
          spine.node.scale = .65;
          sprite.node.scale = 1;
        });
      };
      Slot8Controller.prototype.getItemWinInLine = function(lineId) {
        var lineArr = this.mapLine[lineId];
        var arrItem = [];
        for (var i = 0; i < lineArr.length; i++) arrItem.push(this.arrRealItem[lineArr[i]]);
        return arrItem;
      };
      Slot8Controller.prototype.getItemIdWinInLine = function(arrId) {
        var count = 0;
        var idWin = -1;
        arrId.forEach(function(id) {
          var size = arrId.filter(function(x) {
            return x == id;
          }).length;
          if (size >= count) {
            count = size;
            idWin = id;
          }
        });
        return idWin;
      };
      Slot8Controller.prototype.actGuide = function() {
        var _this = this;
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        null == this.popupGuide ? BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/PopupGuide", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
          _this.popupGuide.node.parent = _this.popupContainer;
          _this.popupGuide.show();
        }) : this.popupGuide.show();
      };
      Slot8Controller.prototype.actHistory = function() {
        var _this = this;
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupHistory ? BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/History", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHistory = cc.instantiate(prefab).getComponent("Slot8History");
          _this.popupHistory.node.parent = _this.popupContainer;
          _this.popupHistory.show();
        }) : this.popupHistory.show();
      };
      Slot8Controller.prototype.actHistoryJackpot = function() {
        var _this = this;
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupHonor ? BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/Glory", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupHonor = cc.instantiate(prefab).getComponent("Slot8Glory");
          _this.popupHonor.node.parent = _this.popupContainer;
          _this.popupHonor.show();
        }) : this.popupHonor.show();
      };
      Slot8Controller.prototype.actChooseLine = function() {
        var _this = this;
        this.isSound && cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isTrial) {
          App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
          return;
        }
        null == this.popupChooseLine ? BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/ChooseLine", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupChooseLine = cc.instantiate(prefab).getComponent("Slot8ChooseLine");
          _this.popupChooseLine.node.parent = _this.popupContainer;
          _this.popupChooseLine.showPopup(_this.arrLineSelected);
          _this.popupChooseLine.onSelectedChanged = function(lines) {
            _this.arrLineSelected = lines;
            _this.totalLineLabel.string = lines.length.toString();
            Tween_1.default.numberTo(_this.totalBetLabel, lines.length * _this.listBet[_this.betId], .3);
          };
        }) : this.popupChooseLine.showPopup(this.arrLineSelected);
      };
      Slot8Controller.prototype.actShowBonus = function(isTrial, dataHaiSao, cb) {
        var _this = this;
        this.isSound && cc.audioEngine.play(this.soundBonus, false, 1);
        null == this.popupBonus ? BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/PopupBonus", function(finish, total) {}, function(prefab) {
          App_1.default.instance.showLoading(false);
          _this.popupBonus = cc.instantiate(prefab).getComponent("Slot8.PopupBonus");
          _this.popupBonus.node.parent = _this.popupContainer;
          _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb);
        }) : this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb);
      };
      __decorate([ property(cc.Button) ], Slot8Controller.prototype, "btnBack", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "initNodeCoin", void 0);
      __decorate([ property(cc.Button) ], Slot8Controller.prototype, "btnLine", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "lblFreeSpinCount", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "nodeBoxSetting", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "popupContainer", void 0);
      __decorate([ property(cc.Toggle) ], Slot8Controller.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], Slot8Controller.prototype, "toggleSound", void 0);
      __decorate([ property(Slot8_PopupBonus_1.default) ], Slot8Controller.prototype, "popupBonus", void 0);
      __decorate([ property(sp.Skeleton) ], Slot8Controller.prototype, "skeSpin", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "nodeDemo", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "nodeWinJackpot", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "txtWinJackpot", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "nodeGamePlay", void 0);
      __decorate([ property(Slot8_Lobby_1.default) ], Slot8Controller.prototype, "mSlotLobby", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "jackpotLabel", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "moneyLabel", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "totalLineLabel", void 0);
      __decorate([ property(cc.Button) ], Slot8Controller.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Toggle) ], Slot8Controller.prototype, "toggleFast", void 0);
      __decorate([ property(cc.Toggle) ], Slot8Controller.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "winNormalBg", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "bonusNode", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "bigWinNode", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "txtWinBigWin", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "jackpotNode", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "freespinNode", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "winLabel", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "lbCurrentRoom", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "freespinCurrent", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "lineWinParent", void 0);
      __decorate([ property(cc.Node) ], Slot8Controller.prototype, "colParent", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "totalWinLabel", void 0);
      __decorate([ property(cc.Label) ], Slot8Controller.prototype, "totalBetLabel", void 0);
      __decorate([ property(Slot8ChooseLine_1.default) ], Slot8Controller.prototype, "popupChooseLine", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "musicLobby", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "musicGame", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "musicBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundClick", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundStartSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundRepeatSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundEndSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundJackpot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundFreeSpin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundtouchBonus", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Slot8Controller.prototype, "soundSmumary", void 0);
      __decorate([ property([ cc.Node ]) ], Slot8Controller.prototype, "arrReel", void 0);
      __decorate([ property ], Slot8Controller.prototype, "distanceReel", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFBlurArr100", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFArr100", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot8Controller.prototype, "arrSkeletonIcon100", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFBlurArr1K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFArr1K", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot8Controller.prototype, "arrSkeletonIcon1K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFBlurArr10K", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Slot8Controller.prototype, "iconSFArr10K", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], Slot8Controller.prototype, "arrSkeletonIcon10K", void 0);
      __decorate([ property([ Slot8_ItemSlot_1.default ]) ], Slot8Controller.prototype, "arrUIItemIcon", void 0);
      __decorate([ property([ Slot8_ItemSlot_1.default ]) ], Slot8Controller.prototype, "arrRealItem", void 0);
      Slot8Controller = __decorate([ ccclass ], Slot8Controller);
      return Slot8Controller;
    }(cc.Component);
    exports.default = Slot8Controller;
    cc._RF.pop();
  }, {
    "../../Loading/src/BundleControl": void 0,
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/SlotNetworkClient": void 0,
    "./Slot8.ItemSlot": "Slot8.ItemSlot",
    "./Slot8.Lobby": "Slot8.Lobby",
    "./Slot8.PopupBonus": "Slot8.PopupBonus",
    "./Slot8ChooseLine": "Slot8ChooseLine",
    "./Slot8Cmd": "Slot8Cmd",
    "./Slot8TrialResult": "Slot8TrialResult"
  } ],
  Slot8Glory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec1faweKC1JXLQvRsLEwgEW", "Slot8Glory");
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
    var Slot8Glory = function(_super) {
      __extends(Slot8Glory, _super);
      function Slot8Glory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      Slot8Glory.prototype.show = function() {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      Slot8Glory.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      Slot8Glory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      Slot8Glory.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot8Glory.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot8Glory.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 138,
          p: this.page,
          gn: "ROLL_ROYE"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 8; i++) {
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
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 128 : 0;
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"].replace(" ", "\n");
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("Type").getComponent(cc.Label).string = 3 == itemData["rs"] ? "JackPot" : "\u1000\u103c\u102e\u1038\u1019\u102c\u1038\u1010\u1032\u1037\u1021\u1014\u102d\u102f\u1004\u103a\u101b";
              item.getChildByName("Nickname").getComponent(cc.Label).string = itemData["un"];
              item.getChildByName("Prize").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      __decorate([ property(cc.Label) ], Slot8Glory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], Slot8Glory.prototype, "itemTemplate", void 0);
      Slot8Glory = __decorate([ ccclass ], Slot8Glory);
      return Slot8Glory;
    }(Dialog_1.default);
    exports.default = Slot8Glory;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  Slot8History: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f44fLMvDNL94UH9EoliF6t", "Slot8History");
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
    var Slot8History = function(_super) {
      __extends(Slot8History, _super);
      function Slot8History() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
      }
      Slot8History.prototype.show = function() {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        null != this.itemTemplate && (this.itemTemplate.active = false);
      };
      Slot8History.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
      };
      Slot8History.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
      };
      Slot8History.prototype.actNextPage = function() {
        if (this.page < this.maxPage) {
          this.page++;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot8History.prototype.actPrevPage = function() {
        if (this.page > 1) {
          this.page--;
          this.lblPage.string = this.page + "/" + this.maxPage;
          this.loadData();
        }
      };
      Slot8History.prototype.loadData = function() {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, {
          c: 137,
          p: this.page,
          un: Configs_1.default.Login.Nickname,
          gn: "ROLL_ROYE"
        }, function(err, res) {
          App_1.default.instance.showLoading(false);
          if (null != err) return;
          if (!res["success"]) return;
          if (0 == _this.items.length) {
            for (var i = 0; i < 8; i++) {
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
              item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 128 : 0;
              item.getChildByName("Id").getComponent(cc.Label).string = itemData["rf"];
              item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"].replace(" ", "\n");
              item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
              item.getChildByName("Linebet").getComponent(cc.Label).string = "" === itemData["lb"] ? 0 : itemData["lb"].split(",").length;
              item.getChildByName("Linewin").getComponent(cc.Label).string = "" === itemData["lw"] ? 0 : itemData["lw"].split(",").length;
              item.getChildByName("Prize").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
              item.active = true;
            } else item.active = false;
          }
        });
      };
      __decorate([ property(cc.Label) ], Slot8History.prototype, "lblPage", void 0);
      __decorate([ property(cc.Node) ], Slot8History.prototype, "itemTemplate", void 0);
      Slot8History = __decorate([ ccclass ], Slot8History);
      return Slot8History;
    }(Dialog_1.default);
    exports.default = Slot8History;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  Slot8Icon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4985eM9ufVPb4eRHWycmY18", "Slot8Icon");
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
    var Slot8Icon = function(_super) {
      __extends(Slot8Icon, _super);
      function Slot8Icon() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeIcon = null;
        _this.spineIcon = null;
        _this.animation = null;
        return _this;
      }
      Slot8Icon.prototype.onLoad = function() {
        this.animation = this.getComponent(cc.Animation);
      };
      Slot8Icon.prototype.start = function() {};
      Slot8Icon.prototype.setSprite = function(sf) {
        this.nodeIcon.active = true;
        this.spineIcon.node.active = false;
        this.nodeIcon.getComponent(cc.Sprite).spriteFrame = sf;
      };
      Slot8Icon.prototype.setSpine = function(ske, id) {
        this.nodeIcon.active = false;
        this.spineIcon.node.active = true;
        this.spineIcon.skeletonData = ske;
        0 == id ? this.spineIcon.setAnimation(0, "jackport", true) : 1 == id ? this.spineIcon.setAnimation(0, "bonus", true) : 2 == id && this.spineIcon.setAnimation(0, "freespin", true);
      };
      Slot8Icon.prototype.normal = function() {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
      };
      Slot8Icon.prototype.unscale = function() {
        this.nodeIcon.color = new cc.Color(50, 50, 50);
        this.spineIcon.node.color = new cc.Color(50, 50, 50);
      };
      Slot8Icon.prototype.scale = function() {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
        this.nodeIcon.active && this.animation.play();
      };
      __decorate([ property(cc.Node) ], Slot8Icon.prototype, "nodeIcon", void 0);
      __decorate([ property(sp.Skeleton) ], Slot8Icon.prototype, "spineIcon", void 0);
      __decorate([ property(cc.Node) ], Slot8Icon.prototype, "animation", void 0);
      Slot8Icon = __decorate([ ccclass ], Slot8Icon);
      return Slot8Icon;
    }(cc.Component);
    exports.default = Slot8Icon;
    cc._RF.pop();
  }, {} ],
  Slot8TrialResult: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da21cmkBcFOQZjfeACZG1zc", "Slot8TrialResult");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot4TrialResult = function() {
      function Slot4TrialResult() {}
      Slot4TrialResult.results = [ {
        ref: 3541,
        result: 3,
        matrix: "2,0,1,6,1,0,5,0,3,0,4,5,1,0,6",
        linesWin: "1,2,2,4,5,6,8,8,9,9,10,12,12,13,14,17,18,20",
        haiSao: "",
        prize: 516700,
        currentMoney: 1706231246
      }, {
        ref: 3542,
        result: 5,
        matrix: "6,2,2,2,2,5,0,4,5,3,1,2,3,0,6",
        linesWin: "2,6,8,9,17,19",
        haiSao: "1,0,1,1,1,1,1,1,1,1,1",
        prize: 19200,
        currentMoney: 1706248446
      }, {
        ref: 3543,
        result: 5,
        matrix: "4,5,2,1,1,1,5,2,2,0,1,4,5,2,5",
        linesWin: "1,2,2,4,6,6,7,8,8,9,9,10,10,11,13,13,13,14,15,16,17,17,19,19",
        haiSao: "0,1,1,1,1,1,1,1,0,1,1,1",
        prize: 21e3,
        currentMoney: 1706267446
      }, {
        ref: 3546,
        result: 1,
        matrix: "5,1,3,2,4,1,2,6,3,0,5,2,4,1,4",
        linesWin: "3,4,10,10,10,13,14,14,17,17,17,18,18,18,20",
        haiSao: "",
        prize: 8300,
        currentMoney: 1706781306
      }, {
        ref: 3547,
        result: 1,
        matrix: "1,6,6,0,1,1,5,2,6,6,3,6,6,3,3",
        linesWin: "2,2,3,4,5,6,6,7,8,8,10,12,16,17,18,20",
        haiSao: "",
        prize: 5800,
        currentMoney: 1706785106
      }, {
        ref: 3549,
        result: 1,
        matrix: "6,2,1,5,4,2,3,2,3,6,2,4,3,5,0",
        linesWin: "4,5,8,11,12,14,17",
        haiSao: "",
        prize: 2200,
        currentMoney: 1706804406
      }, {
        ref: 3555,
        result: 1,
        matrix: "1,4,4,0,5,1,5,0,5,2,6,5,3,6,6",
        linesWin: "2,6,12,13,16,17",
        haiSao: "",
        prize: 1800,
        currentMoney: 1706823006
      }, {
        ref: 3560,
        result: 1,
        matrix: "3,4,1,0,3,5,3,4,6,1,3,4,3,6,4",
        linesWin: "2,4,5,7,8,9,11,12,13,14,16,17,17,20",
        haiSao: "",
        prize: 5400,
        currentMoney: 1707335746
      }, {
        ref: 3568,
        result: 2,
        matrix: "1,4,0,6,3,0,1,1,1,4,3,5,5,4,3",
        linesWin: "1,1,4,4,5,5,6,6,7,11,11,12,12,14,15,16,19,20,20",
        haiSao: "",
        prize: 57200,
        currentMoney: 1707941766
      }, {
        ref: 3569,
        result: 1,
        matrix: "4,2,0,0,6,5,0,0,6,5,1,5,3,1,1",
        linesWin: "3,3,7,7,9,9,11,15,18,19,20,20,20",
        haiSao: "",
        prize: 20700,
        currentMoney: 1707960466
      }, {
        ref: 3578,
        result: 1,
        matrix: "6,3,2,3,1,5,3,4,1,3,6,4,3,4,4",
        linesWin: "1,2,3,4,5,6,7,8,10,12,15,16,16,17,19,20",
        haiSao: "",
        prize: 9800,
        currentMoney: 1708507826
      }, {
        ref: 3605,
        result: 1,
        matrix: "0,1,0,4,4,6,6,6,1,6,6,1,4,4,2",
        linesWin: "1,2,2,3,4,5,6,8,8,10,12,13,14,15,18,19",
        haiSao: "",
        prize: 5700,
        currentMoney: 1709815386
      }, {
        ref: 3615,
        result: 1,
        matrix: "3,0,4,3,2,0,4,4,6,4,0,3,6,3,4",
        linesWin: "1,4,8,11,15",
        haiSao: "",
        prize: 1100,
        currentMoney: 1709866486
      }, {
        ref: 3634,
        result: 1,
        matrix: "2,2,6,2,5,3,0,5,6,5,5,0,2,3,5",
        linesWin: "2,6,10",
        haiSao: "",
        prize: 1200,
        currentMoney: 1711120986
      }, {
        ref: 3656,
        result: 1,
        matrix: "1,0,6,3,6,0,6,2,4,1,5,1,3,6,5",
        linesWin: "8,10,10,13,13,13,14,17,18,18",
        haiSao: "",
        prize: 4300,
        currentMoney: 1711713906
      }, {
        ref: 3693,
        result: 2,
        matrix: "3,3,0,1,1,0,6,3,0,1,3,3,1,3,2",
        linesWin: "1,2,2,3,4,5,6,7,8,9,9,10,10,12,12,13,13,14,16,17,17,18,18,19,20",
        haiSao: "",
        prize: 78800,
        currentMoney: 1713716007
      }, {
        ref: 3848,
        result: 5,
        matrix: "2,3,5,3,2,5,5,1,1,1,3,0,4,0,5",
        linesWin: "1,4,5,5,6,6,7,9,10,11,12,13,13,14,14,15,15,16,17,18,19",
        haiSao: "1,1,1,1,1,1,1,1,0,2,0,1",
        prize: 15200,
        currentMoney: 1721477607
      }, {
        ref: 3568,
        result: 2,
        matrix: "1,4,0,6,3,0,1,1,1,4,3,5,5,4,3",
        linesWin: "1,1,4,4,5,5,6,6,7,11,11,12,12,14,15,16,19,20,20",
        haiSao: "",
        prize: 57200,
        currentMoney: 0
      } ];
      Slot4TrialResult = __decorate([ ccclass ], Slot4TrialResult);
      return Slot4TrialResult;
    }();
    exports.default = Slot4TrialResult;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Slot8.ItemSlot", "Slot8.Lobby", "Slot8.PopupBonus", "Slot8.PopupGuide", "Slot8.Tutorial", "Slot8ChooseLine", "Slot8Cmd", "Slot8Controller", "Slot8Glory", "Slot8History", "Slot8Icon", "Slot8TrialResult" ]);