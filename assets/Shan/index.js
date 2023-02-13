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
  "Sham.TimeCountDown": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07f4f6ZVchBB7SKUBJfqPdk", "Sham.TimeCountDown");
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
    var TimeCountDown = function(_super) {
      __extends(TimeCountDown, _super);
      function TimeCountDown() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.titleSprite = [];
        _this.mp3ClockTick = null;
        _this.mp3ClockKhurry = null;
        _this._countDownEndAt = 0;
        _this._state = "";
        _this._isBanker = false;
        return _this;
      }
      TimeCountDown.prototype.onLoad = function() {
        this._countDownEndAt = 0;
        this.node.active = false;
        this._state = "";
        this._isBanker = false;
      };
      TimeCountDown.prototype.callback = function() {
        if (this.node.active) if (cc.sys.now() < this._countDownEndAt) {
          this.lbTime.string = Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) + "";
          if (Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) > 3) ; else {
            "banker_time" == this._state;
            "player_time" == this._state || "bet_time" == this._state;
          }
        } else {
          this.unschedule(this.callback);
          this.node.active = false;
        } else this.unschedule(this.callback);
      };
      TimeCountDown.prototype.show = function(txt, seconds, isBanker) {
        isBanker && (this._isBanker = isBanker);
        this._countDownEndAt = 1e3 * seconds + cc.sys.now();
        this.lbTime.node.active = true;
        this.lbTime.string = Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) + "";
        this.node.active = true;
        this.titleSprite.forEach(function(e) {
          e.active = false;
        });
        switch (txt) {
         case "start_countdown":
          this.titleSprite[0].active = true;
          this._state = "start_countdown";
          break;

         case "bet_time":
          this.titleSprite[1].active = true;
          this._state = "bet_time";
          break;

         case "player_time":
          this.titleSprite[2].active = true;
          this._state = "player_time";
          break;

         case "banker_time":
          this.titleSprite[3].active = true;
          this._state = "banker_time";
        }
        this.schedule(this.callback, 1);
      };
      TimeCountDown.prototype.showText = function(txt) {
        this.lbTime.node.active = false;
        this.titleSprite.forEach(function(e) {
          e.active = false;
        });
        switch (txt) {
         case "compare_2":
          this.titleSprite[5].active = true;
          this._state = "compare_2";
          break;

         case "compare_3":
          this.titleSprite[4].active = true;
          this._state = "compare_3";
        }
        this.node.active = true;
      };
      __decorate([ property(cc.Label) ], TimeCountDown.prototype, "lbTime", void 0);
      __decorate([ property(cc.Node) ], TimeCountDown.prototype, "titleSprite", void 0);
      __decorate([ property(cc.AudioClip) ], TimeCountDown.prototype, "mp3ClockTick", void 0);
      __decorate([ property(cc.AudioClip) ], TimeCountDown.prototype, "mp3ClockKhurry", void 0);
      TimeCountDown = __decorate([ ccclass ], TimeCountDown);
      return TimeCountDown;
    }(cc.Component);
    exports.default = TimeCountDown;
    cc._RF.pop();
  }, {} ],
  "Shan.Alert": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62c88VpTr1O1aRC1Si96Ib1", "Shan.Alert");
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
    var Alert = function(_super) {
      __extends(Alert, _super);
      function Alert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.txtNode = [];
        return _this;
      }
      Alert.prototype.onLoad = function() {
        this.bg.x = -1280;
        this.txtNode.forEach(function(e) {
          return e.active = false;
        });
      };
      Alert.prototype.start = function() {};
      Alert.prototype.show = function(count, callback) {
        this.txtNode[count - 1].active = true;
        cc.tween(this.bg).to(.3, {
          x: 0
        }, {
          easing: "backIn"
        }).delay(1).to(.2, {
          x: 1280
        }, {
          easing: "backOut"
        }).call(function() {
          callback && callback();
        }).removeSelf().start();
      };
      __decorate([ property(cc.Node) ], Alert.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], Alert.prototype, "txtNode", void 0);
      Alert = __decorate([ ccclass ], Alert);
      return Alert;
    }(cc.Component);
    exports.default = Alert;
    cc._RF.pop();
  }, {} ],
  "Shan.BankerPlayingNode": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "958305U3aZHG6EL1zfTC71R", "Shan.BankerPlayingNode");
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
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_NetworkClient_1 = require("./Shan.NetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BankerPlayingNode = function(_super) {
      __extends(BankerPlayingNode, _super);
      function BankerPlayingNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnDraw = null;
        _this.btnNoDraw = null;
        return _this;
      }
      BankerPlayingNode.prototype.init = function(ws) {
        this._ws = ws;
      };
      BankerPlayingNode.prototype.onBtnDrawClicked = function() {
        this.setActive(false);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendDraw());
      };
      BankerPlayingNode.prototype.onBtnNoDrawClicked = function() {
        this.setActive(false);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendNoDraw());
      };
      BankerPlayingNode.prototype.onBtnCompareClicked = function() {
        this.setActive(false);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendCompare());
      };
      BankerPlayingNode.prototype.setActiveAllBtn = function(boolean) {
        this.btnDraw.active = boolean;
        this.btnNoDraw.active = boolean;
      };
      BankerPlayingNode.prototype.setActiveBtnCompare = function(boolean) {};
      BankerPlayingNode.prototype.setActive = function(boolean) {
        var _this = this;
        cc.log("setActive bankerPlayingNode ", boolean);
        var pos = cc.v2(0, 0);
        this.node.stopAllActions();
        if (boolean) {
          this.node.setPosition(cc.v2(pos.x, pos.y - 150));
          this.node.active = true;
          this.node.opacity = 255;
          cc.tween(this.node).delay(.5).to(.3, {
            x: pos.x,
            y: pos.y
          }, {
            easing: "backIn"
          }).start();
        } else {
          var tmpPos = cc.v2(pos.x, pos.y - 150);
          cc.tween(this.node).to(.2, {
            x: tmpPos.x,
            y: tmpPos.y
          }, {
            easing: "backOut"
          }).call(function() {
            _this.node.opacity = 0;
            _this.node.setPosition(pos);
            _this.node.active = false;
          }).start();
        }
      };
      __decorate([ property(cc.Node) ], BankerPlayingNode.prototype, "btnDraw", void 0);
      __decorate([ property(cc.Node) ], BankerPlayingNode.prototype, "btnNoDraw", void 0);
      BankerPlayingNode = __decorate([ ccclass ], BankerPlayingNode);
      return BankerPlayingNode;
    }(cc.Component);
    exports.default = BankerPlayingNode;
    cc._RF.pop();
  }, {
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.NetworkClient": "Shan.NetworkClient"
  } ],
  "Shan.BankerWin": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79167P4pahKX5eQeOAlJtmu", "Shan.BankerWin");
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
    var Shan_Utils_1 = require("../common/Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BankerWin = function(_super) {
      __extends(BankerWin, _super);
      function BankerWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbNotify = null;
        _this.animLabel = null;
        return _this;
      }
      BankerWin.prototype.start = function() {};
      BankerWin.prototype.onShow = function(value, name) {
        var self = this;
        this.node.setScale(0);
        var str = "<color=#ffffff>Congrats to </color><color=#00ff00>" + name + "</color><color=#ffffff> on winning </color><color=#ffff> " + Shan_Utils_1.NumberUtils.format(value) + " </color><color=#ffffff> chips</color>";
        self.lbNotify.string = str;
        this.animLabel && (this.animLabel.animation = "animation");
        var seq = cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(2), cc.scaleTo(.2, .1), cc.removeSelf(true));
        this.node.runAction(seq);
      };
      BankerWin.prototype.onClose = function() {};
      __decorate([ property(cc.RichText) ], BankerWin.prototype, "lbNotify", void 0);
      __decorate([ property(sp.Skeleton) ], BankerWin.prototype, "animLabel", void 0);
      BankerWin = __decorate([ ccclass ], BankerWin);
      return BankerWin;
    }(cc.Component);
    exports.default = BankerWin;
    cc._RF.pop();
  }, {
    "../common/Shan.Utils": "Shan.Utils"
  } ],
  "Shan.BasePopup": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7f00B63blEMoefFGkAYEQr", "Shan.BasePopup");
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
    var BasePopup = function(_super) {
      __extends(BasePopup, _super);
      function BasePopup() {
        var _this = _super.call(this) || this;
        _this.bg = null;
        _this.darkBg = null;
        _this._ws = null;
        _this._gameLayer = null;
        return _this;
      }
      BasePopup.prototype.onLoad = function() {};
      BasePopup.prototype.start = function() {};
      BasePopup.prototype.initWs = function(ws) {
        this._ws = ws;
      };
      BasePopup.prototype.show = function() {
        this._isClosing = false;
        this.node.active = true;
        this.bg.scale = .75;
        var bgDarkOpa = 150;
        "FreeChipsNode" !== this.name && "PiggySave" !== this.name || (bgDarkOpa = 220);
        this.darkBg && this.darkBg.runAction(cc.fadeTo(.25, bgDarkOpa));
        this.bg.runAction(cc.sequence(cc.spawn(cc.scaleTo(.25, 1).easing(cc.easeBackOut()), cc.fadeIn(.25)), cc.callFunc(this.finishAnimation.bind(this))));
      };
      BasePopup.prototype.fadeIn = function() {
        this._isClosing = false;
        this.node.opacity = 0;
        this.node.active = true;
        this.darkBg && this.darkBg.runAction(cc.fadeTo(.25, 150));
        this.node && this.node.runAction(cc.sequence(cc.fadeIn(.25), cc.callFunc(this.finishAnimation.bind(this))));
      };
      BasePopup.prototype.fadeOut = function() {
        var _this = this;
        this.darkBg && this.darkBg.runAction(cc.fadeOut(.25));
        this.node.runAction(cc.sequence(cc.fadeOut(.25), cc.callFunc(function() {
          _this.onCloseDone(true);
        })));
      };
      BasePopup.prototype.showSlide = function(isRightSide) {
        var _this = this;
        this._isRightSide = isRightSide;
        this._isClosing = false;
        this.node.active = true;
        var tagetX = this.bg.x;
        this.bg.x = isRightSide ? tagetX + this.bg.width : tagetX - this.bg.width;
        this.bg.active = true;
        this.darkBg && this.darkBg.runAction(cc.fadeTo(.25, 150));
        cc.tween(this.bg).to(.25, {
          x: tagetX
        }, {
          easing: "backOut"
        }).call(function() {
          return _this.finishAnimation();
        }).start();
      };
      BasePopup.prototype.finishAnimation = function() {};
      BasePopup.prototype.onClose = function(isDestroy) {
        void 0 === isDestroy && (isDestroy = true);
        if (this._isClosing) return;
        this._isClosing = true;
        this.darkBg && this.darkBg.active && this.darkBg.runAction(cc.fadeTo(.15, 0));
        this.bg && this.bg.runAction(cc.spawn(cc.scaleTo(.15, .75), cc.fadeOut(.15)));
        this.node && this.node.runAction(cc.sequence(cc.delayTime(.15), cc.callFunc(this.onCloseDone.bind(this, isDestroy))));
      };
      BasePopup.prototype.onSlideClose = function() {
        if (this._isClosing) return;
        this._isClosing = true;
        this.darkBg && this.darkBg.active && this.darkBg.runAction(cc.fadeTo(.15, 0));
        var tagetX;
        tagetX = this._isRightSide ? this.bg.x + this.bg.width : this.bg.x - this.bg.width;
        if (this.bg) {
          cc.tween(this.bg).to(.25, {
            x: tagetX
          }, {
            easing: "backIn"
          }).start();
          this.node.runAction(cc.sequence(cc.delayTime(.15), cc.callFunc(this.onCloseDone.bind(this))));
        }
      };
      BasePopup.prototype.onCloseDone = function(isDestroy) {
        var _this = this;
        this.scheduleOnce(function() {
          isDestroy ? _this.node.destroy() : _this.node.removeFromParent(false);
        }, .1);
      };
      __decorate([ property(cc.Node) ], BasePopup.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], BasePopup.prototype, "darkBg", void 0);
      BasePopup = __decorate([ ccclass ], BasePopup);
      return BasePopup;
    }(cc.Component);
    exports.default = BasePopup;
    cc._RF.pop();
  }, {} ],
  "Shan.CardRank": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71479M12Q5Klp4Z+qShV0QI", "Shan.CardRank");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CARD_RANK = function() {
      function CARD_RANK(value) {
        this.setValue("CARD_RANK", value);
      }
      CARD_RANK.prototype.setValue = function(className, value) {
        this._className = className;
        this._value = value;
      };
      CARD_RANK.prototype.valueOf = function() {
        return this._value;
      };
      CARD_RANK.prototype.toString = function() {
        return this._className + "." + this._value;
      };
      CARD_RANK.ACE_ALIAS = new CARD_RANK(1);
      CARD_RANK.TWO = new CARD_RANK(2);
      CARD_RANK.THREE = new CARD_RANK(3);
      CARD_RANK.FOUR = new CARD_RANK(4);
      CARD_RANK.FIVE = new CARD_RANK(5);
      CARD_RANK.SIX = new CARD_RANK(6);
      CARD_RANK.SEVEN = new CARD_RANK(7);
      CARD_RANK.EIGHT = new CARD_RANK(8);
      CARD_RANK.NINE = new CARD_RANK(9);
      CARD_RANK.TEN = new CARD_RANK(10);
      CARD_RANK.JACK = new CARD_RANK(11);
      CARD_RANK.QUEEN = new CARD_RANK(12);
      CARD_RANK.KING = new CARD_RANK(13);
      CARD_RANK.ACE = new CARD_RANK(14);
      CARD_RANK.ALL = {
        2: CARD_RANK.TWO,
        3: CARD_RANK.THREE,
        4: CARD_RANK.FOUR,
        5: CARD_RANK.FIVE,
        6: CARD_RANK.SIX,
        7: CARD_RANK.SEVEN,
        8: CARD_RANK.EIGHT,
        9: CARD_RANK.NINE,
        10: CARD_RANK.TEN,
        11: CARD_RANK.JACK,
        12: CARD_RANK.QUEEN,
        13: CARD_RANK.KING,
        14: CARD_RANK.ACE
      };
      return CARD_RANK;
    }();
    exports.default = CARD_RANK;
    cc._RF.pop();
  }, {} ],
  "Shan.CardSuit": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a03ddwVbTNCRJ2WVM8kflQj", "Shan.CardSuit");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CARD_SUIT = function() {
      function CARD_SUIT(value) {
        this.setValue("CARD_SUIT", value);
      }
      CARD_SUIT.prototype.setValue = function(className, value) {
        this._className = className;
        this._value = value;
      };
      CARD_SUIT.prototype.valueOf = function() {
        return this._value;
      };
      CARD_SUIT.prototype.toString = function() {
        return this._className + "." + this._value;
      };
      CARD_SUIT.SPADE = new CARD_SUIT(0);
      CARD_SUIT.CLUB = new CARD_SUIT(1);
      CARD_SUIT.DIAMOND = new CARD_SUIT(2);
      CARD_SUIT.HEART = new CARD_SUIT(3);
      CARD_SUIT.ALL = {
        0: CARD_SUIT.SPADE,
        1: CARD_SUIT.CLUB,
        2: CARD_SUIT.DIAMOND,
        3: CARD_SUIT.HEART
      };
      return CARD_SUIT;
    }();
    exports.default = CARD_SUIT;
    cc._RF.pop();
  }, {} ],
  "Shan.CardUtil": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "457d8Tl+RVM3bxzHoex/JCy", "Shan.CardUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.common = void 0;
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
  "Shan.Card": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a40e0IqTGtHBIAGhk+aSFwe", "Shan.Card");
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
    var Shan_CardRank_1 = require("../Model/Shan.CardRank");
    var Shan_CardSuit_1 = require("../Model/Shan.CardSuit");
    var Shan_Room_1 = require("../Shan.Room");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CARD_MODE = {
      SMALL: 0,
      MEDIUM: 1,
      BIG: 2
    };
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.highlightNode = null;
        _this.spCard = null;
        _this.alasCardsMid = null;
        _this.alasCardsBig1 = null;
        _this.alasCardsBig2 = null;
        _this.anim_laplanh = null;
        _this._userData = {};
        _this.cardFrames = new Array(53);
        return _this;
      }
      Card.prototype.onLoad = function() {
        this._cardId = -1;
        this._rank = null;
        this._suit = null;
        this.highlightNode && (this.highlightNode.active = false);
        this.show();
      };
      Card.prototype.start = function() {};
      Card.prototype.init = function(rank, suit) {
        this.setRank(rank);
        this.setSuit(suit);
      };
      Card.prototype.isDirty = function() {
        return this._dirty;
      };
      Card.prototype.setIsActionRunning = function(boolean) {
        this._isActionRunning = boolean;
      };
      Card.prototype.getIsActionRunning = function() {
        return this._isActionRunning;
      };
      Card.prototype._getSpriteFrame = function() {
        var mode = this._mode || CARD_MODE.MEDIUM;
        switch (mode) {
         case CARD_MODE.SMALL:
          break;

         case CARD_MODE.MEDIUM:
          return this._rank && this._suit ? Shan_Room_1.default.instance.cardFrames[(this._cardId + 48) % 52] : Shan_Room_1.default.instance.cardFrames[52];

         case CARD_MODE.BIG:
          if (this._rank && this._suit) {
            cc.log("_getSpriteFrame1", this._cardId);
            var sp = Shan_Room_1.default.instance.cardFrames[(this._cardId + 48) % 52];
            return sp;
          }
          cc.log("_getSpriteFrame0", this._cardId);
          return Shan_Room_1.default.instance.cardFrames[52];

         default:
          return Shan_Room_1.default.instance.cardFrames[52];
        }
      };
      Card.prototype._updateSpriteFrame = function() {
        if (this.spCard) {
          this.spCard.spriteFrame = this._getSpriteFrame();
          if (this.spCard.sizeMode == cc.Sprite.SizeMode.CUSTOM) return;
          var mode = this._mode || CARD_MODE.MEDIUM;
          switch (mode) {
           case CARD_MODE.SMALL:
            break;

           case CARD_MODE.MEDIUM:
            this.node.height = 116;
            this.node.width = 90;
            break;

           case CARD_MODE.BIG:
            this.node.height = 417;
            this.node.height = 320;
            break;

           default:
            return Shan_Room_1.default.instance.cardFrames[52];
          }
        }
      };
      Card.prototype.getRank = function() {
        return this._rank;
      };
      Card.prototype.setRank = function(value) {
        if (!(value instanceof Shan_CardRank_1.default)) return;
        this._rank = value;
        this._suit && (this._cardId = 4 * (this._rank.valueOf() - 2) + this._suit.valueOf());
      };
      Card.prototype.getSuit = function() {
        return this._suit;
      };
      Card.prototype.setSuit = function(value) {
        if (!(value instanceof Shan_CardSuit_1.default)) return;
        this._suit = value;
        this._rank && (this._cardId = 4 * (this._rank.valueOf() - 2) + this._suit.valueOf());
      };
      Card.prototype.getId = function() {
        return this._cardId;
      };
      Card.prototype.setId = function(value, isShow) {
        if (value >= 52) return;
        this._cardId = value;
        this._rank = Shan_CardRank_1.default.ALL[Math.floor(this._cardId / 4) + 2];
        this._suit = Shan_CardSuit_1.default.ALL[this._cardId % 4];
        isShow && this.show();
      };
      Card.prototype.setTargetPos = function(pos) {
        var userData = this._userData || {};
        userData.targetPos = pos;
        this._userData = userData;
      };
      Card.prototype.getTargetPos = function() {
        var userData = this._userData || {};
        return userData.targetPos || this.node.position;
      };
      Card.prototype.setTargetScale = function(s) {
        var userData = this._userData || {};
        userData.targetScale = s;
        this._userData = userData;
      };
      Card.prototype.getTargetScale = function() {
        var userData = this._userData || {};
        return userData.targetScale || this.node.scale;
      };
      Card.prototype.stopAllActions = function() {
        this.node.stopAllActions();
        this.node.scale = this.getTargetScale();
        this.node.setPosition(this.getTargetPos());
      };
      Card.prototype.highlight = function() {
        this.highlightNode && (this.highlightNode.active = true);
      };
      Card.prototype.removeHighlight = function() {
        this.highlightNode && (this.highlightNode.active = false);
      };
      Card.prototype.setMode = function(mode) {
        this._mode = mode;
      };
      Card.prototype.show = function() {
        this._updateSpriteFrame();
      };
      Card.prototype.flipAndShow = function() {
        var _this = this;
        var scale = this.node.scale;
        cc.tween(this.node).to(.1, {
          scaleX: 0
        }).call(function() {
          return _this.show();
        }).to(.1, {
          scaleX: scale
        }).start();
      };
      Card.prototype.setDarkMode = function(boolean) {
        this.spCard.node.color = boolean ? new cc.Color(100, 100, 100, 255) : new cc.Color(255, 255, 255, 255);
      };
      Card.prototype.clean = function() {
        this._cardId = -1;
        this._rank = null;
        this._suit = null;
        this.show();
      };
      Card.prototype.hide = function() {
        this.spCard.spriteFrame = this.alasCardsMid.getSpriteFrame("card_52");
      };
      Card.prototype.setEffectCardBinh = function(delay) {
        var _this = this;
        if (!this.anim_laplanh.node) return;
        this.anim_laplanh.node.active = true;
        this.anim_laplanh.setAnimation(0, "animation", true);
        this.node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function() {
          _this.anim_laplanh.node.active = false;
        })));
      };
      Card.prototype.hideEffectCardBinh = function() {
        if (!this.anim_laplanh.node) return;
        this.anim_laplanh.node.active = false;
        this.anim_laplanh.node.stopAllActions();
      };
      __decorate([ property(cc.Node) ], Card.prototype, "highlightNode", void 0);
      __decorate([ property(cc.Sprite) ], Card.prototype, "spCard", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Card.prototype, "alasCardsMid", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Card.prototype, "alasCardsBig1", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Card.prototype, "alasCardsBig2", void 0);
      __decorate([ property(sp.Skeleton) ], Card.prototype, "anim_laplanh", void 0);
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "../Model/Shan.CardRank": "Shan.CardRank",
    "../Model/Shan.CardSuit": "Shan.CardSuit",
    "../Shan.Room": "Shan.Room"
  } ],
  "Shan.ChipGroup": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eadaOTao5MLrEslwYfo83n", "Shan.ChipGroup");
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
    var Shan_GameController_1 = require("../Shan.GameController");
    var Shan_Chip_1 = require("./Shan.Chip");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ChipGroup = function(_super) {
      __extends(ChipGroup, _super);
      function ChipGroup() {
        var _this = _super.call(this) || this;
        _this.prefabChip = null;
        _this.numChip = 0;
        _this.totalBet = 0;
        _this.minChipType = 0;
        _this.maxChipType = 0;
        _this.selectChanel = 0;
        _this.roomBet = 0;
        _this.timeReset = 0;
        _this.maxSaveReset = 0;
        _this.listChipShow = [];
        _this.listChipWait = [];
        _this.timeChipReset = cc.sys.now();
        return _this;
      }
      ChipGroup_1 = ChipGroup;
      ChipGroup.prototype.onLoad = function() {
        for (var i = 0; i < ChipGroup_1.VALUE_CHIPS.length; i++) this.listChipShow.push([]);
      };
      ChipGroup.prototype.initChip = function(gameLayer, roomBet) {
        this.roomBet = roomBet;
        this.gameLayer = gameLayer;
        this.minChipType = ChipGroup_1.LEVEL_CHIP_BETS[this.selectChanel];
        this.maxChipType = this.minChipType + ChipGroup_1.NUM_CHIP_CIRCLE + ChipGroup_1.NUM_CHIP_RECT;
      };
      ChipGroup.prototype.getTotalBet = function() {
        return this.totalBet;
      };
      ChipGroup.prototype.reset = function() {
        var waitNodes = this.node.children;
        this.listChipWait = [];
        for (var i = 0; i < ChipGroup_1.VALUE_CHIPS.length; i++) this.listChipShow[i] = [];
        for (var i = 0; i < waitNodes.length; i++) {
          waitNodes[i].active = false;
          this.listChipWait.push(waitNodes[i].getComponent(Shan_Chip_1.default));
        }
        this.maxSaveReset > this.listChipWait.length && this.timeReset++;
        if (this.timeReset > 5) {
          var len = Math.ceil((this.listChipWait.length - this.maxSaveReset) / 5);
          cc.log("reset remove Child: " + len);
          len <= 0 && (this.timeReset = 0);
          for (var i = 0; i < len; i++) this.node.removeChild(this.listChipWait.pop());
        }
        this.numChip = 0;
        this.totalBet = 0;
        this.timeChipReset = new Date().getTime();
        this.updatePotMoney();
      };
      ChipGroup.prototype.updatePotMoney = function() {
        Shan_GameController_1.default.instance.pot.setValue(this.totalBet);
      };
      ChipGroup.prototype.playerBet = function(player, bet, isBanker) {
        cc.log("playerBet player " + player.getChair() + " Bet " + bet);
        var pos = player.node.getPosition();
        var arrChip = this.getArrChipFromMoney(bet, isBanker);
        this.addChipToGroup(arrChip, pos);
        this.totalBet += bet;
      };
      ChipGroup.prototype.distributeMoney = function(players) {
        var _this = this;
        cc.log("distributeMoney", players);
        var valueC, isLoop = true, listC;
        for (var i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) {
          listC = this.listChipShow[i];
          if (listC.length <= 0) continue;
          valueC = ChipGroup_1.VALUE_CHIPS[i];
          isLoop = true;
          while (isLoop) {
            isLoop = false;
            for (var j = 0; j < players.length; j++) {
              var p = players[j];
              if (p.goldOut >= valueC) {
                if (listC.length <= 0) {
                  isLoop = false;
                  break;
                }
                cc.log("valueC", p.isBanker, valueC);
                p.arrC.push(listC.pop());
                p.goldOut -= valueC;
                isLoop = true;
              }
            }
          }
        }
        players = this.addArrChipSecond(players);
        var maxTime = 0;
        var _loop_1 = function(i) {
          var p = players[i];
          p.delay > maxTime && (maxTime = p.delay);
          this_1.node.runAction(cc.sequence(cc.delayTime(p.delay), cc.callFunc(function() {
            _this.payPlayer(p);
          })));
        };
        var this_1 = this;
        for (var i = 0; i < players.length; i++) _loop_1(i);
        this.node.runAction(cc.sequence(cc.delayTime(maxTime + .1), cc.callFunc(function() {
          Shan_GameController_1.default.instance.pot.setValue(Shan_GameController_1.default.instance.bankerPot);
        }, this)));
        this.numChip > this.maxSaveReset && (this.maxSaveReset = this.numChip);
      };
      ChipGroup.prototype.addArrChipSecond = function(players) {
        var valueC;
        var valueMin = 0;
        var numCN = 0;
        var listCWait = [];
        var xNew = 0, yNew = 0;
        for (var i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) {
          var len_1 = this.listChipShow[i].length;
          for (var j = 0; j < len_1; j++) listCWait.push(this.listChipShow[i].pop());
        }
        var zOrder = Math.floor((new Date().getTime() - this.timeChipReset) / 1e3);
        for (var j = 0; j < players.length; j++) for (var i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) {
          valueC = ChipGroup_1.VALUE_CHIPS[i];
          var p = players[j];
          if (p.goldOut <= valueMin) break;
          if (p.goldOut >= valueC) {
            numCN = Math.floor(p.goldOut / valueC);
            for (var k = 0; k < numCN; k++) if (listCWait.length > 0) {
              var c = listCWait.pop();
              c = this.getChip(i, c);
              c.node.zIndex = zOrder;
              p.arrC.push(c);
            } else {
              var c = this.getChip(i);
              c.node.zIndex = zOrder;
              xNew = ChipGroup_1.DELTA_X_CHIP + (Math.random() - .5) * ChipGroup_1.RATE_X_CHIP_IN;
              yNew = ChipGroup_1.DELTA_Y_CHIP + ChipGroup_1.delta_Y_NO_DEALER + (Math.random() - .5) * (ChipGroup_1.RATE_Y_CHIP_IN + ChipGroup_1.delta_RATE_Y_NO_DEALER);
              c.node.setPosition(cc.v2(xNew, yNew));
              c.node.angle = (Math.random() - .5) * ChipGroup_1.RATE_ROTATE_CHIP;
              p.arrC.push(c);
            }
            p.goldOut -= valueC * numCN;
          }
        }
        var len = listCWait.length;
        for (var i = 0; i < len; i++) {
          var c = listCWait[i];
          this.listChipWait.push(c);
          this.numChip--;
          c.node.active = false;
        }
        return players;
      };
      ChipGroup.prototype.payPlayer = function(pInfo) {
        cc.log("payPlayer: ", pInfo);
        if (pInfo.isBanker) {
          for (var i = 0; i < pInfo.arrC.length; i++) {
            var c = pInfo.arrC[i];
            this.listChipShow[c.type].push(c);
          }
          return;
        }
        var pos = pInfo.player.node.getPosition();
        var dTime = 0;
        var iTime = .1;
        pInfo.arrC.length > 4 && (iTime = ChipGroup_1.DELAY_ACTION_EACH_CHIP / pInfo.arrC.length);
        for (var i = 0; i < pInfo.arrC.length; i++) {
          dTime = iTime * i;
          var c = pInfo.arrC[i];
          if (c.node.active) {
            this.playActionChipOut(pInfo.arrC[i], pos, dTime);
            c.node.runAction(cc.sequence(cc.delayTime(ChipGroup_1.DELAY_ACTION_EACH_CHIP + .2), cc.fadeOut(ChipGroup_1.TIME_FADE_OUT)));
          } else {
            this.listChipWait.push(c);
            this.numChip--;
          }
        }
        this.totalBet -= pInfo.goldOutRaw;
        this.updatePotMoney();
        pInfo.player.hideBet();
        pInfo.player.moneyChange(pInfo.goldChange, pInfo.goldFinal, false);
        return dTime;
      };
      ChipGroup.prototype.collectGold = function(player) {
        var pos = player.node.getPosition();
        var iTime = .1;
        this.numChip > 4 && (iTime = ChipGroup_1.DELAY_ACTION_EACH_CHIP / this.numChip);
        var num = 0;
        for (var i = 0; i < ChipGroup_1.VALUE_CHIPS.length; i++) {
          var len = this.listChipShow[i].length;
          for (var j = 0; j < len; j++) {
            var c = this.listChipShow[i].pop();
            this.playActionChipOut(c, pos, iTime * num);
            c.node.runAction(cc.sequence(cc.delayTime(ChipGroup_1.DELAY_ACTION_EACH_CHIP + .2), cc.fadeOut(ChipGroup_1.TIME_FADE_OUT)));
            num++;
          }
        }
        this.reset();
      };
      ChipGroup.prototype.playActionChipOut = function(chip, pos, dTime) {
        var xNew = pos.x + (Math.random() - .5) * ChipGroup_1.RATE_X_CHIP_OUT;
        var yNew = pos.y + (Math.random() - .5) * ChipGroup_1.RATE_Y_CHIP_OUT;
        var actionMove = cc.moveTo(ChipGroup_1.TIME_MOVE_CHIP_OUT, cc.v2(xNew, yNew)).easing(cc.easeQuadraticActionInOut());
        chip.node.stopAllActions();
        chip.node.runAction(cc.sequence(cc.delayTime(dTime), actionMove));
        this.listChipWait.push(chip);
        this.numChip--;
      };
      ChipGroup.prototype.addChipToGroup = function(arrChip, pos, dTime) {
        var typeI, numI, chip, listC;
        var numCN = 0;
        dTime || (dTime = 0);
        var totalChip = arrChip.length;
        var rateTime = ChipGroup_1.DELAY_ACTION_EACH_CHIP / totalChip;
        for (var i = arrChip.length - 1; i >= 0; i--) {
          typeI = arrChip[i];
          listC = this.listChipShow[typeI];
          chip = this.getChip(typeI);
          listC.push(chip);
          dTime += rateTime;
          this.playActionChipIn(chip, pos, dTime);
          numCN++;
        }
        this.node.runAction(cc.sequence(cc.delayTime(dTime + 1.5), cc.callFunc(this.updatePotMoney, this)));
      };
      ChipGroup.prototype.addChipForView = function(arrChip) {
        cc.log("addChipForView: " + JSON.stringify(arrChip));
        var typeI, numI, chip, listC;
        var zOder = Math.floor((new Date().getTime() - this.timeChipReset) / 1e3);
        for (var i = arrChip.length - 1; i >= 0; i--) {
          numI = arrChip[i];
          typeI = arrChip[i];
          listC = this.listChipShow[typeI];
          this.totalBet += ChipGroup_1.VALUE_CHIPS[typeI];
          chip = this.getChip(typeI);
          chip.node.zIndex = zOder;
          listC.push(chip);
          var xNew = ChipGroup_1.DELTA_X_CHIP + (Math.random() - .5) * ChipGroup_1.RATE_X_CHIP_IN;
          var yNew = ChipGroup_1.DELTA_Y_CHIP + ChipGroup_1.delta_Y_NO_DEALER + (Math.random() - .5) * (ChipGroup_1.RATE_Y_CHIP_IN + ChipGroup_1.delta_RATE_Y_NO_DEALER);
          chip.node.setPosition(xNew, yNew);
          chip.node.angle = (Math.random() - .5) * ChipGroup_1.RATE_ROTATE_CHIP;
        }
      };
      ChipGroup.prototype.getArrChipFromMoney = function(goldIn, isMany) {
        if (isMany) {
          var arrayC1 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
          var arrayC2 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
          var arrayC3 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
          var arrayC4 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
          var arrayC5 = this.getArrChipFromMoney(goldIn - 4 * Math.floor(goldIn / 5), false);
          return arrayC1.concat(arrayC2).concat(arrayC3).concat(arrayC4).concat(arrayC5);
        }
        var total = goldIn;
        var arr = [];
        while (total > 0) {
          var c = ChipGroup_1.VALUE_CHIPS[i];
          for (var i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) if (total >= ChipGroup_1.VALUE_CHIPS[i]) {
            arr.push(i);
            c = ChipGroup_1.VALUE_CHIPS[i];
            break;
          }
          total -= c;
        }
        return arr;
      };
      ChipGroup.prototype.playActionChipIn = function(chip, pos, dTime) {
        var xNew = pos.x + (Math.random() - .5) * ChipGroup_1.RATE_X_CHIP_OUT;
        var yNew = pos.y + (Math.random() - .5) * ChipGroup_1.RATE_Y_CHIP_OUT;
        chip.node.setPosition(cc.v2(xNew, yNew));
        chip.opacity = 0;
        chip.angle = 0;
        chip.skewX = .05 * Math.random() + .95;
        chip.skewY = .05 * Math.random() + .95;
        xNew = ChipGroup_1.DELTA_X_CHIP + (Math.random() - .5) * ChipGroup_1.RATE_X_CHIP_IN;
        yNew = ChipGroup_1.DELTA_Y_CHIP + ChipGroup_1.delta_Y_NO_DEALER + (Math.random() - .5) * (ChipGroup_1.RATE_Y_CHIP_IN + ChipGroup_1.delta_RATE_Y_NO_DEALER);
        var delX = xNew - pos.x;
        var delY = yNew - pos.y;
        var rate = Math.abs(delX) / (Math.abs(delX) + Math.abs(delY));
        var valueRotate = (Math.random() - .5) * ChipGroup_1.RATE_ROTATE_CHIP;
        delX = (delX > 0 ? 15 : -15) * rate;
        delY = (delY > 0 ? 15 : -15) * (1 - rate);
        xNew -= delX;
        yNew -= delY;
        var xBetween = .5 * (xNew + pos.x);
        var yBetween = .5 * (yNew + pos.y) + 50;
        var actionFade = cc.fadeIn(ChipGroup_1.TIME_FADE_CHIP);
        var arrPos = [ chip.node.getPosition(), cc.v2(xBetween, yBetween), cc.v2(xNew, yNew) ];
        var actionMove = cc.bezierTo(ChipGroup_1.TIME_MOVE_CHIP, arrPos).easing(cc.easeBezierAction(0, .75, .9, 1));
        var actionRotate = cc.rotateTo(ChipGroup_1.TIME_MOVE_CHIP, .6 * valueRotate).easing(cc.easeOut(1));
        var actionRotateAfter = cc.rotateTo(.2, valueRotate).easing(cc.easeOut(1));
        var actionJump = cc.jumpBy(.2, delX, delY, 2, 1);
        var sx = chip.node.scale;
        var actionScale = cc.sequence(cc.scaleTo(ChipGroup_1.TIME_MOVE_CHIP / 2, 1.1 * sx, 1.1 * sx).easing(cc.easeOut(1)), cc.scaleTo(ChipGroup_1.TIME_MOVE_CHIP / 2, sx, sx).easing(cc.easeIn(1)));
        var callZOder = cc.callFunc(function(sender, chip) {
          chip.node.zIndex = Math.floor((new Date().getTime() - this.timeChipReset) / 1e3);
        }, this, chip);
        var action1 = cc.spawn(actionMove, actionRotate, actionFade, actionScale, callZOder);
        chip.getValue() >= 13 ? chip.node.runAction(cc.sequence(cc.delayTime(dTime), action1, cc.spawn(actionJump, actionRotateAfter, cc.callFunc(function() {}, chip)))) : chip.node.runAction(cc.sequence(cc.delayTime(dTime), action1, cc.spawn(actionJump, actionRotateAfter)));
      };
      ChipGroup.prototype.fixChipGroup = function(gold) {
        cc.log("fixChipGroup: " + gold);
        if (gold == this.totalBet || gold <= 0) return;
        var delta = gold - this.totalBet;
        if (delta < 0) {
          delta = -delta;
          var listC, valueC;
          var arrC = [];
          for (var i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) {
            listC = this.listChipShow[i];
            if (listC.length <= 0) continue;
            valueC = ChipGroup_1.VALUE_CHIPS[i];
            while (delta >= valueC && listC.length > 0) {
              arrC.push(listC.pop());
              delta -= valueC;
            }
            if (0 == delta) break;
          }
          var isEmpty = false;
          while (delta > 0 && !isEmpty) {
            isEmpty = true;
            for (var i = 0; i < ChipGroup_1.VALUE_CHIPS.length; i++) {
              listC = this.listChipShow[i];
              if (listC.length <= 0) continue;
              isEmpty = false;
              valueC = ChipGroup_1.VALUE_CHIPS[i];
              if (valueC >= delta) {
                arrC.push(listC.pop());
                delta -= valueC;
              }
              if (delta <= 0) break;
            }
          }
          var len = arrC.length;
          for (var i = 0; i < len; i++) {
            valueC = arrC.pop();
            valueC.node.active = false;
            this.listChipWait.push(valueC);
          }
          this.totalBet = gold + delta;
          delta < 0 && this.fixChipGroup(this.totalBet - delta);
        } else {
          var arr = this.getArrChipFromMoney(delta);
          this.addChipForView(arr);
        }
      };
      ChipGroup.prototype.getTotalValueChips = function() {
        var arr = [];
        for (var i = 0; i < ChipGroup_1.VALUE_CHIPS.length; i++) {
          var len = this.listChipShow[i].length;
          if (len > 0) {
            arr.push(len);
            arr.push(ChipGroup_1.VALUE_CHIPS[i]);
          }
        }
        cc.log("getTotalValueChips:" + JSON.stringify(arr) + " - child: " + this.node.childrenCount + " - wait " + this.listChipWait.length);
      };
      ChipGroup.prototype.getChip = function(type, chip) {
        var gold = ChipGroup_1.VALUE_CHIPS[type];
        if (chip || this.listChipWait.length > 0) {
          chip || (chip = this.listChipWait.pop());
          chip.node.stopAllActions();
          chip.node.active = true;
        } else {
          chip = cc.instantiate(this.prefabChip).getComponent(Shan_Chip_1.default);
          chip.node.scale = .72;
          this.node.addChild(chip.node);
        }
        chip.setValues(gold);
        chip.type = type;
        return chip;
      };
      var ChipGroup_1;
      ChipGroup.VALUE_CHIPS = [ 1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 2e8, 5e8 ];
      ChipGroup.LEVEL_CHIP_BETS = [ 9, 9, 12, 18, 21 ];
      ChipGroup.MAX_MINI_BET = [ 10, 20, 40, 70, 100, 150 ];
      ChipGroup.RATE_MINI_BET = [ 2, 2, 4, 6, 6, 10 ];
      ChipGroup.RATE_X_CHIP_IN = 200;
      ChipGroup.RATE_Y_CHIP_IN = 100;
      ChipGroup.delta_RATE_Y_NO_DEALER = 0;
      ChipGroup.RATE_ROTATE_CHIP = 60;
      ChipGroup.RATE_X_CHIP_OUT = 50;
      ChipGroup.RATE_Y_CHIP_OUT = 50;
      ChipGroup.DELAY_ACTION_EACH_CHIP = .4;
      ChipGroup.TIME_FADE_CHIP = .2;
      ChipGroup.TIME_MOVE_CHIP = .5;
      ChipGroup.TIME_MOVE_CHIP_OUT = .45;
      ChipGroup.TIME_FADE_OUT = .2;
      ChipGroup.DELTA_X_CHIP = 0;
      ChipGroup.DELTA_Y_CHIP = 25;
      ChipGroup.delta_Y_NO_DEALER = 0;
      ChipGroup.NUM_CHIP_CIRCLE = 6;
      ChipGroup.NUM_CHIP_RECT = 7;
      ChipGroup.NUM_CHIP_SPEC = 3;
      ChipGroup.MAX_NUM_CHIP = 10;
      __decorate([ property(cc.Prefab) ], ChipGroup.prototype, "prefabChip", void 0);
      ChipGroup = ChipGroup_1 = __decorate([ ccclass ], ChipGroup);
      return ChipGroup;
    }(cc.Component);
    exports.default = ChipGroup;
    cc._RF.pop();
  }, {
    "../Shan.GameController": "Shan.GameController",
    "./Shan.Chip": "Shan.Chip"
  } ],
  "Shan.Chip": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fd71RIHtdGtqV3M323Ud5r", "Shan.Chip");
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
    var VALUE_CHIPS = [ 1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 2e8, 5e8 ];
    var Chip = function(_super) {
      __extends(Chip, _super);
      function Chip() {
        var _this = _super.call(this) || this;
        _this.alasImage = null;
        _this.imgs = [];
        _this._value = 10;
        _this._userId = 0;
        _this._value = 10;
        _this._userId = 0;
        return _this;
      }
      Chip.prototype.setValue = function(value, amount) {
        this._value = null == value || value < 1 ? 1 : value;
        var valueC = VALUE_CHIPS[VALUE_CHIPS.length - 1];
        for (var i = VALUE_CHIPS.length - 1; i >= 0; i--) {
          if (VALUE_CHIPS[i] < amount) break;
          valueC = VALUE_CHIPS[i];
        }
        value && (this.node.getComponent(cc.Sprite).spriteFrame = this.alasImage.getSpriteFrame(valueC.toString()));
      };
      Chip.prototype.setValues = function(value) {
        this._value = null == value || value < 1 ? 1 : value;
        var valueC = VALUE_CHIPS[VALUE_CHIPS.length - 1];
        for (var i = VALUE_CHIPS.length - 1; i >= 0; i--) {
          if (VALUE_CHIPS[i] < value) break;
          valueC = VALUE_CHIPS[i];
        }
        value && (this.node.getComponent(cc.Sprite).spriteFrame = this.alasImage.getSpriteFrame(valueC.toString()));
      };
      Chip.prototype.setOwnUserId = function(userId) {
        this._userId = userId;
      };
      Chip.prototype.getOwnUserId = function() {
        return this._userId;
      };
      Chip.prototype.updateChipTexture = function(value) {
        this._value = null == value || value < 1 ? 1 : value;
        var valueC = VALUE_CHIPS[VALUE_CHIPS.length - 1];
        for (var i = VALUE_CHIPS.length - 1; i >= 0; i--) {
          if (VALUE_CHIPS[i] < value) break;
          valueC = VALUE_CHIPS[i];
        }
        this.node.getComponent(cc.Sprite).spriteFrame = this.alasImage.getSpriteFrame(valueC.toString());
      };
      Chip.prototype.jumpTo = function(pos, box, actions) {
        box || (box = cc.rect(-70, -40, 140, 80));
        var addedPos = cc.v2(box.x + Math.random() * box.width, box.y + Math.random() * box.height);
        pos = pos.add(addedPos);
        var distance = pos.sub(this.node.getPosition());
        var direction = distance.normalize();
        var length = distance.mag();
        var normal = cc.v2(direction).rotate(-90 * Math.PI / 180);
        normal.y < 0 && (normal = normal.neg());
        normal.y < Math.abs(normal.x) && (normal.x = Math.min(Math.max(normal.x, -normal.y), normal.y));
        var bezierPos = pos.add(direction.mul(-.03 * length));
        var curveMidpoint = this.node.getPosition().add(bezierPos).mul(.5).add(normal.mul(length * this.randomIn(.1, .2)));
        var nextJumpHeight = .01 * length;
        var arr = [ cc.delayTime(this.randomIn(0, .2)), cc.bezierTo(.3, [ this.node.getPosition(), curveMidpoint, bezierPos ]), cc.jumpTo(.2, pos, nextJumpHeight, 1) ].concat(actions || []);
        this.node.runAction(cc.sequence(arr));
      };
      Chip.prototype.randomIn = function(x, y) {
        return x + Math.random() * (y - x);
      };
      Chip.prototype.moveTo = function(delay, pos, actions) {
        var distance = pos.sub(this.node.getPosition());
        var direction = distance.normalize();
        var length = distance.mag();
        var normal = cc.v2(direction).rotate(-90 * Math.PI / 180);
        normal.y < 0 && (normal = normal.neg());
        normal.y < Math.abs(normal.x) && (normal.x = Math.min(Math.max(normal.x, -normal.y), normal.y));
        var curveMidpoint = this.node.getPosition().add(pos).mul(.5).add(normal.mul(length * this.randomIn(.1, .2)));
        var arr = [ cc.delayTime(delay), cc.delayTime(this.randomIn(0, .2)), cc.show(), cc.bezierTo(.3, [ this.node.getPosition(), curveMidpoint, pos ]) ].concat(actions || []);
        this.node.runAction(cc.sequence(arr));
      };
      Chip.prototype.getValue = function() {
        return this._value;
      };
      Chip.prototype.setTargetPos = function(pos) {
        var userData = this.userData || {};
        userData.targetPos = pos;
        this.setUserData(userData);
      };
      Chip.prototype.setUserData = function(userData) {
        this.userData = userData;
      };
      Chip.prototype.getTargetPos = function() {
        var userData = this.userData || {};
        return userData.targetPos || this.node.getPosition();
      };
      Chip.prototype.stopAllActions = function() {
        cc.Node.prototype.stopAllActions.call(this);
        this.node.setPosition(this.getTargetPos());
      };
      __decorate([ property(cc.SpriteAtlas) ], Chip.prototype, "alasImage", void 0);
      __decorate([ property(cc.SpriteFrame) ], Chip.prototype, "imgs", void 0);
      Chip = __decorate([ ccclass ], Chip);
      return Chip;
    }(cc.Component);
    exports.default = Chip;
    cc._RF.pop();
  }, {} ],
  "Shan.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bdbfk6RMFM6JZhBidBV51p", "Shan.Cmd");
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
        Code.DAT_CUOC = 3112;
        Code.THONG_TIN_BAN_CHOI = 3110;
        Code.DANG_KY_THOAT_PHONG = 3212;
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
        Code.MAX_PLAYER = 7;
        Code.START_GAME = 3101;
        Code.START_PHASE_ONE = 3102;
        Code.START_PHASE_TWO = 3103;
        Code.SEEN = 3104;
        Code.END_GAME = 3105;
        Code.FINISH = 3107;
        Code.MATH_KICK = 3108;
        Code.MATCH_INFO = 3109;
        Code.LEAVE_NOW = 3110;
        Code.DRAW = 3111;
        Code.BETTING = 3112;
        Code.COMPARE = 3114;
        Code.BANKER_WIN = 3116;
        Code.CHECK_ACTION = 3117;
        Code.ROOM_START_COUNTDOWN = 3209;
        Code.ROOM_STOP_COUNTDOWN = 3220;
        Code.ROOM_REGISTER_LEAVE = 3212;
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
      var SendDraw = function(_super) {
        __extends(SendDraw, _super);
        function SendDraw() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.DRAW);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendDraw;
      }(Network_OutPacket_1.default);
      cmd.SendDraw = SendDraw;
      var SendNoDraw = function(_super) {
        __extends(SendNoDraw, _super);
        function SendNoDraw() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.END_GAME);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendNoDraw;
      }(Network_OutPacket_1.default);
      cmd.SendNoDraw = SendNoDraw;
      var SendCompare = function(_super) {
        __extends(SendCompare, _super);
        function SendCompare() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.COMPARE);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendCompare;
      }(Network_OutPacket_1.default);
      cmd.SendCompare = SendCompare;
      var SendSeen = function(_super) {
        __extends(SendSeen, _super);
        function SendSeen() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.SEEN);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendSeen;
      }(Network_OutPacket_1.default);
      cmd.SendSeen = SendSeen;
      var SendBet = function(_super) {
        __extends(SendBet, _super);
        function SendBet(amount) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.BETTING);
          _this.putLong(amount);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendBet;
      }(Network_OutPacket_1.default);
      cmd.SendBet = SendBet;
      var SendUserAction = function(_super) {
        __extends(SendUserAction, _super);
        function SendUserAction(amount) {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.CHECK_ACTION);
          _this.putByte(amount ? 1 : 0);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendUserAction;
      }(Network_OutPacket_1.default);
      cmd.SendUserAction = SendUserAction;
      var SendMatchInfo = function(_super) {
        __extends(SendMatchInfo, _super);
        function SendMatchInfo() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.MATCH_INFO);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendMatchInfo;
      }(Network_OutPacket_1.default);
      cmd.SendMatchInfo = SendMatchInfo;
      var SendLeaveGame = function(_super) {
        __extends(SendLeaveGame, _super);
        function SendLeaveGame() {
          var _this = _super.call(this) || this;
          _this.initData(100);
          _this.setControllerId(1);
          _this.setCmdId(Code.ROOM_REGISTER_LEAVE);
          _this.packHeader();
          _this.updateSize();
          return _this;
        }
        return SendLeaveGame;
      }(Network_OutPacket_1.default);
      cmd.SendLeaveGame = SendLeaveGame;
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
      var ReceivedGameConfig = function(_super) {
        __extends(ReceivedGameConfig, _super);
        function ReceivedGameConfig(data) {
          var _this = _super.call(this, data) || this;
          _this.list = [];
          _this.rules = [];
          var listSize = _this.getShort();
          for (var a = 0; a < listSize; a++) {
            var b = {
              maxUserPerRoom: _this.getInt(),
              moneyType: _this.getByte(),
              moneyBet: _this.getLong(),
              moneyRequire: _this.getLong(),
              nPersion: _this.getInt()
            };
            _this.list.push(b);
          }
          for (a = 0; a < listSize; a++) _this.rules.push(_this.getByte());
          return _this;
        }
        return ReceivedGameConfig;
      }(Network_InPacket_1.default);
      cmd.ReceivedGameConfig = ReceivedGameConfig;
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
      var ReceivedShanConfig = function(_super) {
        __extends(ReceivedShanConfig, _super);
        function ReceivedShanConfig(data) {
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
        return ReceivedShanConfig;
      }(Network_InPacket_1.default);
      cmd.ReceivedShanConfig = ReceivedShanConfig;
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
      var ReceivedMatchStart = function(_super) {
        __extends(ReceivedMatchStart, _super);
        function ReceivedMatchStart(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            matchId: _this.getInt(),
            bankerChair: _this.getInt(),
            bankerPot: _this.getLong(),
            moneyAddToPot: _this.getLong(),
            countDownTime: _this.getInt(),
            warningCount: _this.getInt()
          };
          _this.data.playerList = [];
          var size = _this.getShort();
          for (var i = 0; i < size; i++) _this.getBool() && _this.data.playerList.push({
            chair: _this.getByte(),
            userId: _this.getInt(),
            userName: _this.getString(),
            avatar: _this.getString(),
            money: _this.getLong()
          });
          return _this;
        }
        return ReceivedMatchStart;
      }(Network_InPacket_1.default);
      cmd.ReceivedMatchStart = ReceivedMatchStart;
      var ReceivedBet = function(_super) {
        __extends(ReceivedBet, _super);
        function ReceivedBet(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            chair: _this.getInt(),
            bet: _this.getLong(),
            totalBet: _this.getLong(),
            remainGold: _this.getLong()
          };
          return _this;
        }
        return ReceivedBet;
      }(Network_InPacket_1.default);
      cmd.ReceivedBet = ReceivedBet;
      var ReceivedBankerWin = function(_super) {
        __extends(ReceivedBankerWin, _super);
        function ReceivedBankerWin(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            chair: _this.getInt(),
            moneyWin: _this.getLong(),
            balance: _this.getLong()
          };
          return _this;
        }
        return ReceivedBankerWin;
      }(Network_InPacket_1.default);
      cmd.ReceivedBankerWin = ReceivedBankerWin;
      var ReceivedDrawCard = function(_super) {
        __extends(ReceivedDrawCard, _super);
        function ReceivedDrawCard(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            chair: _this.getInt(),
            cardId: _this.getInt()
          };
          return _this;
        }
        return ReceivedDrawCard;
      }(Network_InPacket_1.default);
      cmd.ReceivedDrawCard = ReceivedDrawCard;
      var ReceivedSeen = function(_super) {
        __extends(ReceivedSeen, _super);
        function ReceivedSeen(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            chair: _this.getInt()
          };
          return _this;
        }
        return ReceivedSeen;
      }(Network_InPacket_1.default);
      cmd.ReceivedSeen = ReceivedSeen;
      var ShanInPacket = function(_super) {
        __extends(ShanInPacket, _super);
        function ShanInPacket() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        ShanInPacket.prototype.getPrimitiveArray = function(f) {
          var data = [];
          var size = this.getShort();
          for (var i = 0; i < size; i++) data.push(f.apply(this));
          return data;
        };
        ShanInPacket.prototype.getIntArray = function() {
          return this.getPrimitiveArray(this.getInt);
        };
        return ShanInPacket;
      }(Network_InPacket_1.default);
      var ReceivedMatchEnd = function(_super) {
        __extends(ReceivedMatchEnd, _super);
        function ReceivedMatchEnd(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            endType: _this.getByte(),
            cardId: _this.getInt(),
            bankerPot: _this.getLong(),
            bankerGroupId: _this.getByte(),
            bankerPoint: _this.getInt(),
            bankerMultiple: _this.getInt(),
            bankerCards: _this.getIntArray(),
            isShowUserByUser: _this.getBool()
          };
          _this.data.playerList = [];
          var size = _this.getShort();
          for (var i = 0; i < size; i++) {
            var player = {
              chair: _this.getInt(),
              isWin: _this.getByte(),
              moneyChange: _this.getLong(),
              moneyChangeBeforTax: _this.getLong(),
              money: _this.getLong(),
              groupId: _this.getByte(),
              point: _this.getInt(),
              multiple: _this.getInt(),
              cards: _this.getIntArray()
            };
            _this.data.playerList.push(player);
          }
          return _this;
        }
        return ReceivedMatchEnd;
      }(ShanInPacket);
      cmd.ReceivedMatchEnd = ReceivedMatchEnd;
      var ReceivedMatchFinish = function(_super) {
        __extends(ReceivedMatchFinish, _super);
        function ReceivedMatchFinish(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            bankerPot: _this.getLong(),
            bankerChair: _this.getInt()
          };
          _this.data.playerList = [];
          var listSize = _this.getShort();
          for (var i = 0; i < listSize; i++) {
            var player = {
              chair: 0,
              stateId: 0,
              userId: 0,
              userName: "",
              avatar: "",
              money: 0,
              vip: 0
            };
            player.chair = _this.getByte();
            player.stateId = _this.getByte();
            if (player.stateId != cmd.Code.PLAYER_STATUS_OUT_GAME) {
              player.userId = _this.getInt();
              player.userName = _this.getString();
              player.avatar = _this.getString();
              player.money = _this.getLong();
              player.vip = _this.getInt();
            }
            _this.data.playerList.push(player);
          }
          return _this;
        }
        return ReceivedMatchFinish;
      }(ShanInPacket);
      cmd.ReceivedMatchFinish = ReceivedMatchFinish;
      var ReceivedMatchInfo = function(_super) {
        __extends(ReceivedMatchInfo, _super);
        function ReceivedMatchInfo(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            roomId: _this.getInt(),
            matchId: _this.getInt(),
            moneyBet: _this.getLong(),
            maxPlayer: _this.getInt(),
            numPlayer: _this.getInt(),
            roomOwnerId: _this.getInt(),
            cardList: [],
            playerList: []
          };
          var size = _this.getShort();
          for (var i = 0; i < size; i++) _this.data.cardList.push(_this.getByte());
          size = _this.getShort();
          for (var i = 0; i < size; i++) {
            var player = {};
            player.chair = _this.getByte();
            player.stateId = _this.getByte();
            if (player.stateId != Code.PLAYER_STATUS_OUT_GAME) {
              player.userId = _this.getInt();
              player.userName = _this.getString();
              player.avatar = _this.getString();
              player.money = _this.getLong();
              player.vip = _this.getInt();
            }
            if (player.stateId == Code.PLAYER_STATUS_PLAYING) {
              player.isRegisterQuit = _this.getBool();
              player.betAmount = _this.getLong();
              player.cardSize = _this.getShort();
              player.isShow = _this.getBool();
              if (player.isShow) {
                player.cards = [];
                for (var j = 0; j < player.cardSize; j++) player.cards.push(_this.getByte());
              }
            }
            _this.data.playerList.push(player);
          }
          _this.data.countDownTime = _this.getShort();
          _this.data.gameState = _this.getByte();
          _this.data.bankerChair = _this.getInt();
          _this.data.bankerPot = _this.getLong();
          _this.data.warningCount = _this.getInt();
          _this.data.isInstantEndGame = _this.getBool();
          return _this;
        }
        return ReceivedMatchInfo;
      }(ShanInPacket);
      cmd.ReceivedMatchInfo = ReceivedMatchInfo;
      var ReceivedCompare = function(_super) {
        __extends(ReceivedCompare, _super);
        function ReceivedCompare(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            playerList: []
          };
          var size = _this.getShort();
          for (var i = 0; i < size; i++) {
            var player = {
              chair: _this.getInt(),
              cards: _this.getIntArray(),
              isWin: _this.getBool()
            };
            _this.data.playerList.push(player);
          }
          return _this;
        }
        return ReceivedCompare;
      }(ShanInPacket);
      cmd.ReceivedCompare = ReceivedCompare;
      var ReceivedStartPhaseOne = function(_super) {
        __extends(ReceivedStartPhaseOne, _super);
        function ReceivedStartPhaseOne(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            playerList: [],
            dataList: []
          };
          var size = _this.getShort();
          for (var i = 0; i < size; i++) _this.data.playerList.push({
            chair: _this.getByte(),
            bet: _this.getLong(),
            remain: _this.getLong()
          });
          _this.data.cards = _this.getIntArray();
          _this.data.countDownTime = _this.getInt();
          _this.data.isInstantEndGame = _this.getBool();
          size = _this.getShort();
          for (var i = 0; i < size; i++) _this.data.dataList.push({
            chair: _this.getInt(),
            point: _this.getInt(),
            cards: _this.getIntArray()
          });
          return _this;
        }
        return ReceivedStartPhaseOne;
      }(ShanInPacket);
      cmd.ReceivedStartPhaseOne = ReceivedStartPhaseOne;
      var ReceivedStartPhaseTwo = function(_super) {
        __extends(ReceivedStartPhaseTwo, _super);
        function ReceivedStartPhaseTwo(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            countDownTime: _this.getInt()
          };
          return _this;
        }
        return ReceivedStartPhaseTwo;
      }(ShanInPacket);
      cmd.ReceivedStartPhaseTwo = ReceivedStartPhaseTwo;
      var ReceivedRoomStartCountDown = function(_super) {
        __extends(ReceivedRoomStartCountDown, _super);
        function ReceivedRoomStartCountDown(data) {
          var _this = _super.call(this, data) || this;
          _this.data = {
            seconds: _this.getInt()
          };
          return _this;
        }
        return ReceivedRoomStartCountDown;
      }(ShanInPacket);
      cmd.ReceivedRoomStartCountDown = ReceivedRoomStartCountDown;
      var ReceivedRoomLeaving = function(_super) {
        __extends(ReceivedRoomLeaving, _super);
        function ReceivedRoomLeaving(data) {
          var _this = _super.call(this, data) || this;
          _this.data.userId = _this.getInt();
          _this.data.roomOwnerId = _this.getInt();
          return _this;
        }
        return ReceivedRoomLeaving;
      }(ShanInPacket);
      cmd.ReceivedRoomLeaving = ReceivedRoomLeaving;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0
  } ],
  "Shan.Contants": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63413Xf9YxEbbjcVGf+mLTK", "Shan.Contants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConnectionState = exports.Constant = void 0;
    exports.Constant = {
      SHANKOEMEE_LOCAL_TEST: false,
      SHANKOEMEE_MAX_PLAYER: 7,
      SHANKOEMEE_CHIP_VALUES: [ 1, 5, 10, 50, 100, 200 ],
      SHANKOEMEE_CHIP_THROW_MIN: 2,
      SHANKOEMEE_CHIP_STACK_MAX: 10,
      CARD_SELECTED_Y_OFFSET: 15,
      SHANKOEMEE_CARD_ON_HAND_SCALE: 1.32,
      SHANKOEMEE_CARD_ON_DECK_SCALE: 1.1,
      SHANKOEMEE_CARD_DEALING_SCALE: .8,
      SHANKOEMEE_CARD_ON_HAND_GAP: 20,
      SHANKOEMEE_CARD_ON_HAND_Y_OFFSET: 0,
      SHANKOEMEE_CARD_BASE_Z_ORDER: 11,
      SHANKOEMEE_EVENT_DEALING_FINISH: "shankoemee_event_dealing_finish",
      SHANKOEMEE_CARD_GROUP_STATUS_FONT_SIZE: 24,
      SELF_PLAYER_FONT_SIZE: cc.sys.isNative ? 24 : 40,
      SHANKOEMEE_QUICK_CHAT_SIZE: 12,
      SHANKOEMEE_CHAT_LINE_HEIGHT: 40,
      SHANKOEMEE_ROTATION_CARD: [ [ 10, -10 ], [ 20, 0, -20 ] ],
      SHANKOEMEE_POS_Y_CARD: [ [ 0, 0 ], [ 0, 0, -5 ] ],
      SHANKOEMEE_MIN_NUM_CARD: 2,
      SHANKOEMEE_ALERT_Z_INDEX: 15,
      SHANKOEMEE_CHIPNODE_Z_INDEX: 10,
      SHANKOEMEE_MUTILPLE_Z_INDEX: 12,
      SHANKOEMEE_WAITOPEN_Z_INDEX: 12,
      SHANKOEMEE_CARD_Z_INDEX: 11,
      SHANKOEMEE_POINTNODE_Z_INDEX: 12,
      SHANKOEMEE_USERNODE_Z_INDEX: 1
    };
    exports.ConnectionState = {
      NO_CONNECTION: 0,
      CLOSING: 1,
      CONNECTING: 2,
      CONNECTED: 3
    };
    cc._RF.pop();
  }, {} ],
  "Shan.CreateRoomItem": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42a4cKXqAZC5a+QbZg26AnS", "Shan.CreateRoomItem");
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
    var CreateRoomItem = function(_super) {
      __extends(CreateRoomItem, _super);
      function CreateRoomItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbRoomBet = null;
        _this.lbMoneyRequire = null;
        return _this;
      }
      CreateRoomItem.prototype.start = function() {};
      CreateRoomItem.prototype.setData = function(data, id) {
        this.data = data;
        this.roomValue = data.moneyBet;
        this.moneyRequire = data.moneyRequire;
        this.id = id;
        this.updateUI();
      };
      CreateRoomItem.prototype.updateUI = function() {
        this.lbRoomBet.string = this.roomValue + "";
        this.lbMoneyRequire.string = this.moneyRequire + "";
      };
      CreateRoomItem.prototype.onSelect = function() {
        this.cbOnSelect(this);
      };
      __decorate([ property(cc.Label) ], CreateRoomItem.prototype, "lbRoomBet", void 0);
      __decorate([ property(cc.Label) ], CreateRoomItem.prototype, "lbMoneyRequire", void 0);
      CreateRoomItem = __decorate([ ccclass ], CreateRoomItem);
      return CreateRoomItem;
    }(cc.Component);
    exports.default = CreateRoomItem;
    cc._RF.pop();
  }, {} ],
  "Shan.GameController": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0669QFjHtG65o4CiU+M8Uk", "Shan.GameController");
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
    var Shan_SettingInGame_1 = require("./common/Shan.SettingInGame");
    var Shan_Card_1 = require("./common/Shan.Card");
    var Shan_Chip_1 = require("./common/Shan.Chip");
    var Shan_ChipGroup_1 = require("./common/Shan.ChipGroup");
    var Shan_GameLayer_1 = require("./common/Shan.GameLayer");
    var Shan_Pot_1 = require("./common/Shan.Pot");
    var Shan_Utils_1 = require("./common/Shan.Utils");
    var Shan_Jackpot_1 = require("./Model/Shan.Jackpot");
    var Shan_BankerPlayingNode_1 = require("./Shan.BankerPlayingNode");
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_Contants_1 = require("./Shan.Contants");
    var Shan_NanBai_1 = require("./Shan.NanBai");
    var Shan_PlayingNode_1 = require("./Shan.PlayingNode");
    var Shan_Sound_1 = require("./Shan.Sound");
    var Shan_NetworkClient_1 = require("./Shan.NetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Shan_Room_1 = require("./Shan.Room");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameController = function(_super) {
      __extends(GameController, _super);
      function GameController() {
        var _this = _super.call(this) || this;
        _this.playingNodePrefab = null;
        _this.bankerPlayingNodePrefab = null;
        _this.ShanKoeMeeJackpotPrefab = null;
        _this.nanBaiLayerPrefab = null;
        _this.pot = null;
        _this.chipGroup = null;
        _this.bankerWin = null;
        _this.bgWarningCount = null;
        _this.lbWarningCount = null;
        _this.shanKoeMeeSound = null;
        _this.prefabJackPotBig = null;
        _this.prefabJackPotSmall = null;
        _this.prefabShanAlert = null;
        _this.lstBgUser = [];
        _this.lstSpMutil = [];
        _this.lstWaitingOpen = [];
        _this.lstPointNode = [];
        _this.lstBgPoint = [];
        _this.lstBgPointLose = [];
        _this.lstBgShan8 = [];
        _this.lstBgShan9 = [];
        _this.lstBgShanSap = [];
        _this.lstBbPoint = [];
        _this.MAX_PLAYER = Shan_Contants_1.Constant.SHANKOEMEE_MAX_PLAYER;
        _this._chips = [];
        _this.playingNode = null;
        _this.shanKoeMeeJackpot = null;
        _this.bankerPlayingNode = null;
        _this.nanBaiLayer = null;
        _this._sound = null;
        _this._delayForJackPotWin = 0;
        GameController_1.instance = _this;
        return _this;
      }
      GameController_1 = GameController;
      GameController.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this._gameName = "shankoemee";
        this.pot.setValue(0);
        this.playingNode.node.active = false;
        this.bankerPlayingNode.node.active = false;
        this.nanBaiLayer.node.active = false;
        this.bgWarningCount.active = false;
        this.bgWarningCount.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_ALERT_Z_INDEX;
        this.timeCountDown.node.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_ALERT_Z_INDEX;
        this.chipGroup.node.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CHIPNODE_Z_INDEX;
        this._chipNode = new cc.Node();
        this.node.addChild(this._chipNode);
      };
      GameController.prototype.initPlayerNodeWithPrefab = function() {
        cc.log("initPlayerNodeWithPrefab", this.playerNodes.length);
        for (var i = 0; i < this.playerNodes.length; i++) {
          var player = this.playerNodes[i];
          this.lstBgUser.length > i && this.lstBgUser[i].setPosition(this.playerPos[i].getPosition());
          if (this.lstSpMutil.length > i) {
            player.multiple = this.lstSpMutil[i];
            this.lstSpMutil[i].node.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_MUTILPLE_Z_INDEX;
          }
          if (this.lstWaitingOpen.length > i) {
            player.waitingOpen = this.lstWaitingOpen[i];
            this.lstWaitingOpen[i].zIndex = Shan_Contants_1.Constant.SHANKOEMEE_WAITOPEN_Z_INDEX;
          }
          this.lstPointNode.length > i && (this.lstPointNode[i].zIndex = Shan_Contants_1.Constant.SHANKOEMEE_POINTNODE_Z_INDEX);
          this.lstBgPoint.length > i && (player.bgPoint = this.lstBgPoint[i]);
          this.lstBgPointLose.length > i && (player.bgPointLose = this.lstBgPointLose[i]);
          this.lstBgShan8.length > i && (player.bgShan8 = this.lstBgShan8[i]);
          this.lstBgShan9.length > i && (player.bgShan9 = this.lstBgShan9[i]);
          this.lstBgShanSap.length > i && (player.bgShanSap = this.lstBgShanSap[i]);
          this.lstBbPoint.length > i && (player.lbPoint = this.lstBbPoint[i]);
        }
      };
      GameController.prototype.initNodeWithPrefab = function() {
        _super.prototype.initNodeWithPrefab.call(this);
        this._settingNode = this._createNodeFromPrefab(this.prefabSetting, 1e3).getComponent(Shan_SettingInGame_1.default);
        this.playingNode = this._createNodeFromPrefab(this.playingNodePrefab, 1e3).getComponent(Shan_PlayingNode_1.default);
        this.shanKoeMeeJackpot = this._createNodeFromPrefab(this.ShanKoeMeeJackpotPrefab, 1e3).getComponent(Shan_Jackpot_1.default);
        this.nanBaiLayer = this._createNodeFromPrefab(this.nanBaiLayerPrefab, 1e3).getComponent(Shan_NanBai_1.NodeNanBai);
        this.bankerPlayingNode = this._createNodeFromPrefab(this.bankerPlayingNodePrefab, 1e3).getComponent(Shan_BankerPlayingNode_1.default);
        this.initPlayerNodeWithPrefab();
      };
      GameController.prototype.init = function(ws, target) {
        _super.prototype.init.call(this, ws, target);
        this.bankerPlayingNode.init(ws);
        this.nanBaiLayer.setWs(ws);
        this.shanKoeMeeJackpot.initWs(ws);
        this.nanBaiLayer.setGameLayer(this);
        this._settingNode.init(ws, this);
        this.initListener();
      };
      GameController.prototype.initListener = function() {
        var _this = this;
        Shan_NetworkClient_1.default.getInstance().addListener(function(data) {
          if (_this._ws.getState() != Shan_Contants_1.ConnectionState.CONNECTED) return true;
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Shan_Cmd_1.default.Code.LOGIN:
            cc.log("<<<< Login <<<<");
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedLogin(data);
            var failError = res.getError();
            0 == failError ? _this.onWsLoggedIn(true) : cc.log("login fail");
            break;

           case Shan_Cmd_1.default.Code.START_GAME:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMatchStart(data);
            _this.onWsMatchStart(res.data);
            break;

           case Shan_Cmd_1.default.Code.START_PHASE_ONE:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedStartPhaseOne(data);
            _this.onWsStartPhaseOne(res.data);
            break;

           case Shan_Cmd_1.default.Code.START_PHASE_TWO:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedStartPhaseTwo(data);
            _this.onWsStartPhaseTwo(res.data);
            break;

           case Shan_Cmd_1.default.Code.SEEN:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedSeen(data);
            _this.onWsSeen(res.data);
            break;

           case Shan_Cmd_1.default.Code.BETTING:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedBet(data);
            _this.onWsBet(res.getError(), res.data);
            break;

           case Shan_Cmd_1.default.Code.DRAW:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedDrawCard(data);
            _this.onWsDrawCard(res.getError(), res.data);
            break;

           case Shan_Cmd_1.default.Code.COMPARE:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedCompare(data);
            _this.onWsCompare(res.data);
            break;

           case Shan_Cmd_1.default.Code.BANKER_WIN:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedBankerWin(data);
            _this.onWsBankerWin(res.data);
            break;

           case Shan_Cmd_1.default.Code.MATCH_INFO:
            break;

           case Shan_Cmd_1.default.Code.END_GAME:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMatchEnd(data);
            _this.onWsMatchEnd(res.data);
            break;

           case Shan_Cmd_1.default.Code.FINISH:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMatchFinish(data);
            _this.onWsMatchFinish(res.data);
            break;

           case Shan_Cmd_1.default.Code.ROOM_START_COUNTDOWN:
            cc.log("Start count down ");
            var res = new Shan_Cmd_1.default.ReceivedRoomStartCountDown(data);
            _this.onWsRoomStartCountdown(res.data.seconds);
            break;

           case Shan_Cmd_1.default.Code.ROOM_STOP_COUNTDOWN:
            cc.log("Stop Count down");
            _this.onWsRoomStopCountDown();
            break;

           case Shan_Cmd_1.default.Code.ROOM_REGISTER_LEAVE:
            _this.onWsLeaveRoom(data);
            break;

           case Shan_Cmd_1.default.Code.ROOM_REGISTER_LEAVE:
            break;

           case Shan_Cmd_1.default.Code.CHEAT_CARDS:
           case Shan_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
           case Shan_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
            App_1.default.instance.showLoading(false);
            break;

           case Shan_Cmd_1.default.Code.LEAVE_GAME:
            cc.log("Leave Game");
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedUserLeaveRoom(data);
            break;

           case Shan_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedKickOff(data);
            break;

           case Shan_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedUserJoinRoom(data);
            cc.log("<<<< New user join <<<< ", JSON.stringify(res));
            break;

           case Shan_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
          }
        }, this);
      };
      GameController.prototype.refeshListRoom = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetListRoom());
      };
      GameController.prototype.onWsLoggedIn = function(succeed, msg) {
        if (succeed) {
          this.refeshListRoom();
          Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdReconnectRoom());
        } else {
          this._dontHandleDisconnected = true;
          this._ws.disconnect();
        }
      };
      GameController.prototype._updateRoomData = function() {
        _super.prototype._updateRoomData.call(this);
        this.playerNodes.forEach(function(playerNode) {
          playerNode.setBaseBetAmount(this._roomData.moneyBet);
        }.bind(this));
        this.chipGroup.initChip(this, this._roomData.moneyBet);
      };
      GameController.prototype._showComputerPlayForBanker = function() {
        this.playerNodes[this._getLocalChair(this.bankerChair)].showComputerPlay();
      };
      GameController.prototype.onWsRoomStartCountdown = function(seconds) {
        cc.log("start count down", seconds);
        this.timeCountDown && this.timeCountDown.show("start_countdown", seconds);
        this.shanKoeMeeSound.playStart();
      };
      GameController.prototype.onGameBet = function(countDownTime, bankerChair, bankerPot, moneyAddToPot, warningCount) {
        cc.log("onGameBet", countDownTime, bankerChair, bankerPot, moneyAddToPot, warningCount);
        var self = this;
        this.changeBankerChair(bankerChair);
        var timeW = this.updateWarningCount(warningCount);
        this.bankerPot = bankerPot;
        cc.tween(this.bgWarningCount).delay(timeW).call(function() {
          self.timeCountDown.show("bet_time", countDownTime - timeW);
        }).start();
        moneyAddToPot > 0 ? this.chipGroup.playerBet(this.playerNodes[this._getLocalChair(bankerChair)], moneyAddToPot, true) : this.chipGroup.fixChipGroup(bankerPot);
        this.pot.setValue(bankerPot);
        this.playingNode.setActive(0 != this._getLocalChair(bankerChair) && this.playerNodes[0].getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING);
        this.playingNode.node.active && this.playingNode.setData(this._ws, this.bankerPot, this._roomData.moneyBet);
        this.basePopUpActive && 0 != this.bankerChair && this.basePopUpActive.onClose();
        this.shanKoeMeeSound.playBetTime();
      };
      GameController.prototype.onGamePhaseOne = function(data) {
        cc.log("onGamePhaseOne ", data);
        this.playingNode.setActive(false);
        this.playerNodes[0].setCardData(data.cards);
        for (var i = 0; i < data.playerList.length; i++) {
          var playerData = data.playerList[i];
          var player = this.playerNodes[this._getLocalChair(playerData.chair)];
          if (player.getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) if (!player.bgBet.active && playerData.bet > 0) {
            player.bet(playerData.bet, playerData.remain);
            0 == this._getLocalChair(playerData.chair) && this.playingNode.setLastBet(playerData.bet);
            player.showViewBet(playerData.bet, this._roomData.moneyBet);
          } else player.lbBetAmount.string = Shan_Utils_1.default.shorten(playerData.bet, 2);
        }
        var players = this.playerNodes.filter(function(p) {
          return p.getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING;
        });
        var actions = [];
        for (var i = 0; i < 2; i++) for (var j = 0; j < players.length; j++) actions.push(cc.delayTime(.1), cc.callFunc(function(target, data) {
          this.dealerAction("Deal");
          var cardNode = cc.instantiate(this.prefabCard);
          cardNode.scale = .6 * Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          cardNode.angle = 180;
          cardNode.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_Z_INDEX;
          cardNode.setPosition(cc.v2(0, 0));
          this.uiNode.addChild(cardNode);
          players[data.j].addCard(cardNode.getComponent(Shan_Card_1.default));
          this.shanKoeMeeSound.playDealCard();
        }, this, {
          i: i,
          j: j
        }));
        var isInstantEndGame = false;
        var _loop_1 = function() {
          if (0 == this_1._getLocalChair(data.dataList[i].chair)) isInstantEndGame = true; else {
            var tempPlayer_1 = this_1.playerNodes[this_1._getLocalChair(data.dataList[i].chair)];
            var tempDataCard_1 = data.dataList[i].cards;
            actions.push(cc.delayTime(.5), cc.callFunc(function() {
              tempPlayer_1.setCardData(tempDataCard_1);
            }));
          }
        };
        var this_1 = this;
        for (var i = 0; i < data.dataList.length; i++) _loop_1();
        actions.push(cc.delayTime(.5), cc.callFunc(function() {
          this.onGamePlay(data.countDownTime, isInstantEndGame);
          for (var j = 0; j < players.length; j++) players[j].setVisibleWatingOpenCards(true);
        }.bind(this)));
        this.node.runAction(cc.sequence(actions));
      };
      GameController.prototype.onGamePlay = function(seconds, isInstantEndGame) {
        this.timeCountDown.show("player_time", seconds, 0 == this._getLocalChair(this.bankerChair));
        cc.log("gamePlay", this.playerNodes[0].getState(), seconds, isInstantEndGame);
        this.playerNodes[0].getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && (seconds <= 5 ? this.playerNodes[0].showCards() : this.nanBaiLayer.init(seconds, 0 == this._getLocalChair(this.bankerChair), isInstantEndGame, this.playerNodes[0].getCardData(), function() {
          this._onNanBaiLayerClosed();
        }.bind(this)));
        this.basePopUpActive && this.basePopUpActive.onClose();
      };
      GameController.prototype.onGamePhaseTwo = function(countDownTime) {
        var _this = this;
        var isBanker = 0 == this._getLocalChair(this.bankerChair);
        cc.tween(this.node).delay(.5).call(function() {
          _this.bankerPlayingNode.setActive(isBanker);
          _this.shouldShowBtnCompare();
        }).start();
        this.playerNodes[this._getLocalChair(this.bankerChair)].showBurnBorderAnim();
        this.isBanker || this.nanBaiLayer.closeDialog();
        this.timeCountDown.show("banker_time", countDownTime, 0 == this._getLocalChair(this.bankerChair));
        this.basePopUpActive && 0 == this.bankerChair && this.basePopUpActive.onClose();
      };
      GameController.prototype.onGameEndMatch = function(data) {
        cc.log("onendMatch", JSON.stringify(data));
        Math.floor(data.bankerCards[0] / 4) == Math.floor(data.bankerCards[1] / 4) && Math.floor(data.bankerCards[1] / 4) == Math.floor(data.bankerCards[2] / 4) && (this._delayForJackPotWin = 2);
        0 == data.endType ? this.compareFinish(data) : this.manualFinish(data);
      };
      GameController.prototype.compareFinish = function(data) {
        var _this = this;
        this.timeCountDown.showText("compare_3");
        this.playingNode.setActive(false);
        this.bankerPlayingNode.setActive(false);
        this.bankerPot = data.bankerPot;
        var banker = this.playerNodes[this._getLocalChair(this.bankerChair)];
        var listThree = data.playerList.filter(function(p) {
          return 3 == p.cards.length;
        });
        var listTwo = data.playerList.filter(function(p) {
          return 2 == p.cards.length;
        });
        var actions = [];
        actions.push(cc.delayTime(1.5));
        actions.push(cc.callFunc(function() {
          _this.timeCountDown.node.active = false;
          for (var i = 0; i < listThree.length; i++) {
            var localChair = _this._getLocalChair(listThree[i].chair);
            var player = _this.playerNodes[localChair];
            if (0 != localChair) {
              player.setCardData(listThree[i].cards);
              player.showAllCards();
            }
          }
        }));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          banker.setCardData(data.bankerCards.slice(0, 2));
          banker.setShow(false);
          banker.showAllCards();
          for (var i = 0; i < listThree.length; i++) {
            var localChair = _this._getLocalChair(listThree[i].chair);
            var player = _this.playerNodes[localChair];
            listThree[i].isWin ? player.showWinEffect() : player.showLoseEffect();
          }
        }));
        actions.push(cc.callFunc(function() {
          var _loop_2 = function() {
            pData = listThree[i];
            localChair = this_2._getLocalChair(pData.chair);
            player = this_2.playerNodes[localChair];
            var moneyChangeBeforTax = 0 == pData.moneyChangeBeforTax ? pData.moneyChange : pData.moneyChangeBeforTax;
            if (!pData.isWin) {
              player.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function(sender, data) {
                this.chipGroup.playerBet(data.player, -moneyChangeBeforTax, false);
                data.player.hideBet();
                data.player.moneyChange(data.pData.moneyChange, data.pData.money, false);
              }, this_2, {
                player: player,
                pData: pData
              })));
              0 === localChair && this_2._getLocalChair(this_2.bankerChair) !== localChair && this_2._chatNode.notifyWinLost(pData.isWin, pData.moneyChange, pData.cards, data.bankerCards);
            }
          };
          var this_2 = this, pData, localChair, player;
          for (var i = 0; i < listThree.length; i++) _loop_2();
        }.bind(this)));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          var cardNode = cc.instantiate(_this.prefabCard);
          cardNode.scale = Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          cardNode.angle = 180;
          cardNode.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_BASE_Z_ORDER;
          _this.uiNode.addChild(cardNode);
          banker.addCard(cardNode.getComponent(Shan_Card_1.default));
          _this.shanKoeMeeSound.playDealOneCard();
          if (0 == _this._getLocalChair(_this.bankerChair)) {
            cardNode.getComponent(Shan_Card_1.default).setId(data.bankerCards[2]);
            cc.tween(banker.node).delay(.5).call(function() {
              cardNode.getComponent(Shan_Card_1.default).flipAndShow();
              banker.showGroupName(cardNode.scale, false);
              banker.showMultiple();
            }).start();
          }
        }));
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          _this.timeCountDown.showText("compare_2");
        }));
        actions.push(cc.delayTime(1.5));
        actions.push(cc.callFunc(function() {
          _this.timeCountDown.node.active = false;
          for (var i = 0; i < listTwo.length; i++) {
            var localChair = _this._getLocalChair(listTwo[i].chair);
            var player = _this.playerNodes[localChair];
            if (0 != localChair) {
              player.setCardData(listTwo[i].cards);
              player.showAllCards();
            }
          }
        }));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          banker.setCardData(data.bankerCards);
          banker.setShow(false);
          banker.showAllCards();
          for (var i = 0; i < listTwo.length; i++) {
            var localChair = _this._getLocalChair(listTwo[i].chair);
            var player = _this.playerNodes[localChair];
            listTwo[i].isWin ? player.showWinEffect() : player.showLoseEffect();
          }
        }));
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          var _loop_3 = function() {
            pData = listTwo[i];
            localChair = this_3._getLocalChair(pData.chair);
            player = this_3.playerNodes[localChair];
            var moneyChangeBeforTax = 0 == pData.moneyChangeBeforTax ? pData.moneyChange : pData.moneyChangeBeforTax;
            if (!pData.isWin) {
              player.node.runAction(cc.callFunc(function(sender, data) {
                this.chipGroup.playerBet(data.player, -moneyChangeBeforTax, false);
                data.player.hideBet();
                data.player.moneyChange(data.pData.moneyChange, data.pData.money, false);
              }, this_3, {
                player: player,
                pData: pData
              }));
              0 === localChair && this_3._getLocalChair(this_3.bankerChair) !== localChair && this_3._chatNode.notifyWinLost(pData.isWin, pData.moneyChange, pData.cards, data.bankerCards);
            }
          };
          var this_3 = this, pData, localChair, player;
          for (var i = 0; i < listTwo.length; i++) _loop_3();
        }.bind(this)));
        actions.push(cc.delayTime(1));
        actions.push(cc.callFunc(function() {
          var dataPay = [ {
            goldOut: data.bankerPot,
            goldOutRaw: data.bankerPot,
            goldChange: data.bankerPot,
            player: banker,
            isBanker: true,
            arrC: []
          } ];
          var delayBetweenPlayer = data.isShowUserByUser ? 1 : 0;
          for (var i = 0; i < data.playerList.length; i++) {
            var pData = data.playerList[i];
            var localChair = this._getLocalChair(pData.chair);
            var player = this.playerNodes[localChair];
            if (pData.isWin) {
              dataPay.push({
                goldOut: pData.moneyChangeBeforTax,
                goldOutRaw: pData.moneyChangeBeforTax,
                goldChange: pData.moneyChange,
                goldFinal: pData.money,
                player: player,
                arrC: [],
                delay: delayBetweenPlayer * i
              });
              0 === localChair && this._getLocalChair(this.bankerChair) !== localChair && this._chatNode.notifyWinLost(pData.isWin, pData.moneyChange, pData.cards, data.bankerCards);
            }
          }
          0 === this._getLocalChair(this.bankerChair);
          this.chipGroup.node.runAction(cc.callFunc(function() {
            this.chipGroup.distributeMoney(dataPay);
            this.shanKoeMeeSound.playBet();
          }.bind(this)));
        }.bind(this)));
        this.node.runAction(cc.sequence(actions));
      };
      GameController.prototype.manualFinish = function(data) {
        this.timeCountDown.node.active = false;
        this.playingNode.setActive(false);
        this.bankerPlayingNode.setActive(false);
        this.bankerPot = data.bankerPot;
        var banker = this.playerNodes[this._getLocalChair(this.bankerChair)];
        var actions = [];
        0 != data.endType && 1 != data.endType || actions.push(cc.callFunc(function() {
          var cardNode = cc.instantiate(this.prefabCard);
          cardNode.scale = Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          cardNode.angle = 180;
          cardNode.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_BASE_Z_ORDER;
          this.uiNode.addChild(cardNode);
          banker.addCard(cardNode.getComponent(Shan_Card_1.default));
          this.shanKoeMeeSound.playDealOneCard();
          if (0 == this._getLocalChair(this.bankerChair)) {
            banker.setShow(false);
            banker.setCardData(data.bankerCards);
            cc.tween(banker.node).delay(.5).call(function() {
              banker.showAllCards();
            }).start();
          }
        }.bind(this)));
        actions.push(cc.delayTime(1));
        actions.push(cc.callFunc(function() {
          for (var i = 0; i < data.playerList.length; i++) {
            var pData = data.playerList[i];
            var localChair = this._getLocalChair(pData.chair);
            var player = this.playerNodes[localChair];
            if (0 != localChair) {
              player.setCardData(pData.cards);
              player.showAllCards();
            }
          }
        }.bind(this)));
        if (0 != this._getLocalChair(this.bankerChair)) {
          actions.push(cc.delayTime(.5));
          actions.push(cc.callFunc(function() {
            banker.setShow(false);
            banker.setCardData(data.bankerCards);
            banker.showAllCards();
          }.bind(this)));
        }
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          for (var i = 0; i < data.playerList.length; i++) {
            var pData = data.playerList[i];
            var localChair = this._getLocalChair(pData.chair);
            var player = this.playerNodes[localChair];
            pData.isWin ? player.showWinEffect() : player.showLoseEffect();
          }
        }.bind(this)));
        actions.push(cc.delayTime(1));
        actions.push(cc.callFunc(function() {
          var hasPlayerLose = false;
          var dataPay = [ {
            goldOut: data.bankerPot,
            goldOutRaw: data.bankerPot,
            goldChange: data.bankerPot,
            player: banker,
            isBanker: true,
            arrC: []
          } ];
          var delayBetweenPlayer = data.isShowUserByUser ? 1 : 0;
          var _loop_4 = function() {
            pData = data.playerList[i];
            localChair = this_4._getLocalChair(pData.chair);
            player = this_4.playerNodes[localChair];
            var moneyChangeBeforTax = 0 == pData.moneyChangeBeforTax ? pData.moneyChange : pData.moneyChangeBeforTax;
            if (pData.isWin) dataPay.push({
              goldOut: pData.moneyChangeBeforTax,
              goldOutRaw: pData.moneyChangeBeforTax,
              goldChange: pData.moneyChange,
              goldFinal: pData.money,
              player: player,
              arrC: [],
              delay: delayBetweenPlayer * i
            }); else {
              hasPlayerLose = true;
              player.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function(sender, data) {
                this.chipGroup.playerBet(data.player, -moneyChangeBeforTax, false);
                data.player.hideBet();
                data.player.moneyChange(data.pData.moneyChange, data.pData.money, false);
              }, this_4, {
                player: player,
                pData: pData
              })));
            }
            0 === localChair && this_4._getLocalChair(this_4.bankerChair) !== localChair;
          };
          var this_4 = this, pData, localChair, player;
          for (var i = 0; i < data.playerList.length; i++) _loop_4();
          0 === this._getLocalChair(this.bankerChair);
          this.chipGroup.node.runAction(cc.sequence(cc.delayTime(hasPlayerLose ? 2 : 0), cc.callFunc(function() {
            this.chipGroup.distributeMoney(dataPay);
            this.shanKoeMeeSound.playBet();
          }.bind(this))));
        }.bind(this)));
        this.node.runAction(cc.sequence(actions));
      };
      GameController.prototype.onGameFinishMatch = function(data) {
        this.clean();
        this._delayForJackPotWin = 0;
        this._userAction = false;
        this.changeBankerChair(data.bankerChair);
        this.pot.setValue(data.bankerPot);
        0 == data.bankerPot && this.chipGroup.reset();
        this._roomData.playerList = data.playerList;
        for (var i = 0; i < this.playerNodes.length; i++) {
          var p = this.playerNodes[i];
          p.updateInfo(this._roomData.playerList[i]);
          p._data.userName == this._user.Nickname && Shan_Utils_1.default.setChip(p._data.money);
        }
        this.onGameNewMatch();
      };
      GameController.prototype.onGameNewMatch = function() {
        this._updateRoomData();
        this.playingNode.setActive(false);
        this.playingNode.setLastBet(-1);
      };
      GameController.prototype.showBankerWin = function(value, name) {
        var c = cc.instantiate(this.bankerWin);
        this.node.addChild(c);
        c.getComponent("ShanKoeMeeBankerWin").onShow(value, name);
        this.shanKoeMeeSound.playBankerWin();
        this.timeCountDown.node.opacity = 0;
        cc.tween(this.timeCountDown.node).delay(2).to(0, {
          opacity: 255
        }).start();
      };
      GameController.prototype.restoreGame = function(data) {
        cc.log("restoreGame", data);
        var ownCardList = data.cardList;
        var countDownTime = data.countDownTime;
        var bankerChair = data.bankerChair;
        var bankerPot = data.bankerPot;
        var isInstantEndGame = data.isInstantEndGame;
        var playerList = data.playerList.filter(function(p) {
          return p.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING;
        });
        this.onWsRoomInfo(data);
        cc.log(playerList);
        for (var i = 0; i < playerList.length; i++) {
          var localChair = this._getLocalChair(playerList[i].chair);
          0 != localChair ? playerList[i].isShow ? this.playerNodes[localChair].instantlyAddCard(playerList[i].cards, true, this.uiNode) : this.playerNodes[localChair].instantlyAddCard(playerList[i].cardSize, false, this.uiNode) : this.playerNodes[0].instantlyAddCard(ownCardList, false, this.uiNode);
          if (playerList[i].betAmount > 0) {
            this.playerNodes[localChair].bet(playerList[i].betAmount, playerList[i].money);
            this.playerNodes[localChair].showViewBet(playerList[i].betAmount, this._roomData.moneyBet, true);
          }
        }
        for (var i_1 = 0; i_1 < this.playerNodes.length; i_1++) {
          var player = this.playerNodes[i_1];
          player._data.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_VIEWER && this.playerNodes[i_1].showWaitingNewMatch(true);
        }
        this.changeBankerChair(bankerChair);
        this.chipGroup.fixChipGroup(bankerPot);
        switch (data.gameState) {
         case 1:
          this.onGameBet(countDownTime, bankerChair, bankerPot, 0, data.warningCount);
          break;

         case 2:
          this.pot.setValue(bankerPot);
          this.onGamePlay(countDownTime, isInstantEndGame);
          break;

         case 3:
          this.pot.setValue(bankerPot);
          this.playerNodes[0].showCards();
          this.onGamePhaseTwo(countDownTime);
          break;

         case 4:
          this.pot.setValue(bankerPot);
        }
        this.playerNodes[0].getState() !== Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && this.shanKoeMeeSound.playWaiting();
      };
      GameController.prototype.getChipThrowingLocation = function() {
        return cc.v2(0, 0);
      };
      GameController.prototype.addChip = function(c) {
        this._chips.push(c.getComponent(Shan_Chip_1.default));
        this._chipNode.addChild(c);
      };
      GameController.prototype.getChips = function() {
        return this._chips;
      };
      GameController.prototype.removeChip = function(c) {
        var idx = this._chips.indexOf(c);
        idx >= 0 && this._chips.splice(idx, 1);
      };
      GameController.prototype.clearChips = function() {
        this._chipNode.removeAllChildren();
        this._chips = [];
      };
      GameController.prototype._onNanBaiLayerClosed = function() {
        this.playerNodes[0].showCards();
        this._ws.seen();
      };
      GameController.prototype.onWsLeaveRoom = function(data) {
        cc.log("onWsLeaveRoom", data);
        if (data.userName == this._user.Nickname) {
          Shan_Utils_1.default.setChip(this.playerNodes[0]._data.money);
          this._eventTarget._onGameLeave.call(this._eventTarget);
          this.node.removeFromParent();
          Shan_Room_1.default.instance.UI_Playing = null;
        } else {
          if (!this._userCouldLeaveRoom(data)) return;
          var localChair = this._userIdToChairMapping[data.userName];
          if (localChair == this._getLocalChair(this.bankerChair)) {
            if (this.playerNodes[localChair].getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              this._showComputerPlayForBanker();
              return;
            }
            this.chipGroup.reset();
            this.pot.setValue(0);
          }
          this._roomData.roomOwnerId != data.roomOwnerId && (this._roomData.roomOwnerId = data.roomOwnerId);
          var playerList = this._roomData.playerList;
          var player = playerList.filter(function(p) {
            return p.userName == data.userName;
          })[0];
          if (player) {
            this._removePlayer(data, playerList);
            this._chatNode.notifyUserExit(player.userName);
          }
        }
      };
      GameController.prototype.onWsJoinRoomOther = function(data) {
        cc.log("onWsJoinRoomOther", JSON.stringify(data));
        var playerList = this._roomData.playerList;
        var idx = -1;
        for (var i = 0; i < playerList.length; i++) if (playerList[i].chair == data.chair) {
          idx = i;
          break;
        }
        idx = idx >= 0 ? idx : playerList.length;
        playerList[idx] = data;
        this._roomData.playerList = playerList;
        var localChair = this._getLocalChair(data.chair);
        this.playerNodes[localChair].updateInfo(data);
        this._userIdToChairMapping[data.userName] = localChair;
        data.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_VIEWER && this.playerNodes[localChair].showWaitingNewMatch(true);
        this._chatNode.notifyUserJoin(data.userName);
      };
      GameController.prototype.onWsMatchStart = function(data) {
        cc.log("onWsMatchStart ", data);
        for (var i = 0; i < this._roomData.playerList.length; i++) for (var j = 0; j < data.playerList.length; j++) if (this._roomData.playerList[i].chair == data.playerList[j].chair) {
          this._roomData.playerList[i].avatar = data.playerList[j].avatar;
          this._roomData.playerList[i].money = data.playerList[j].money;
          this._roomData.playerList[i].userId = data.playerList[j].userId;
          this._roomData.playerList[i].userName = data.playerList[j].userName;
          this._roomData.playerList[i].stateId = Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING;
          this._roomData.playerList[i].betAmount = data.playerList[j].betAmount;
        }
        this._roomData.matchId = data.matchId;
        this._updateRoomData();
        this.onGameBet(data.countDownTime, data.bankerChair, data.bankerPot, data.moneyAddToPot, data.warningCount);
      };
      GameController.prototype.onWsMatchEnd = function(data) {
        cc.log("on match end");
        for (var i = 0; i < this.playerNodes.length; i++) this.playerNodes[this._getLocalChair(i)].setVisibleWatingOpenCards(false);
        this.nanBaiLayer.closeDialog();
        this.onGameEndMatch(data);
        this.playerNodes[0].getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && this._ws.sendUserAction(this._userAction);
      };
      GameController.prototype.onWsMatchFinish = function(data) {
        cc.log("onGameFinishMatch");
        this.onGameFinishMatch(data);
      };
      GameController.prototype.onWsBet = function(errorCode, data) {
        cc.log("onWsBet", data);
        if (errorCode) return;
        cc.log(data.totalBet, this.pot.getValue());
        data.totalBet != this.pot.getValue() && 0 != data.remainGold || 0 != this._getLocalChair(data.chair) || this.playingNode.setActive(false);
        if (0 == data.remainGold) {
          this.playerNodes[this._getLocalChair(data.chair)].showAllInAnim(true);
          this.playerNodes[this._getLocalChair(data.chair)].showAMaxBetAnim(true);
        }
        data.totalBet == this.pot.getValue() && this.playerNodes[this._getLocalChair(data.chair)].showAMaxBetAnim(true);
        this.playerNodes[this._getLocalChair(data.chair)].bet(data.totalBet, data.remainGold);
        this.playerNodes[this._getLocalChair(data.chair)].showViewBet(data.bet, this._roomData.moneyBet);
        0 == this._getLocalChair(data.chair) && this.playingNode.setLastBet(data.totalBet);
        this.shanKoeMeeSound.playBet();
      };
      GameController.prototype.onWsStartPhaseOne = function(data) {
        this.onGamePhaseOne(data);
      };
      GameController.prototype.onWsStartPhaseTwo = function(data) {
        cc.log("on ws phase two ", data);
        this.onGamePhaseTwo(data.countDownTime);
      };
      GameController.prototype.onWsSeen = function(data) {
        cc.log("onWsSeen", data);
        this.playerNodes[this._getLocalChair(data.chair)].setVisibleWatingOpenCards(false);
        if (0 == this._getLocalChair(data.chair)) this.nanBaiLayer.closeDialog(); else if (this.playerNodes[this._getLocalChair(data.chair)].getCardData().length > 0) {
          this.playerNodes[this._getLocalChair(data.chair)].showAllCards();
          this.shanKoeMeeSound.playOtherShan();
        }
      };
      GameController.prototype.onWsDrawCard = function(errorCode, data) {
        if (errorCode) return;
        var chair = this._getLocalChair(data.chair);
        var cardNode = cc.instantiate(this.prefabCard);
        cardNode.scale = Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
        cardNode.angle = 180;
        cardNode.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_BASE_Z_ORDER;
        cardNode.setPosition(cc.v2(0, 0));
        this.uiNode.addChild(cardNode);
        this.playerNodes[chair].addCard(cardNode.getComponent(Shan_Card_1.default));
        this.dealerAction("Deal");
        if (0 == this._getLocalChair(data.chair)) {
          this.playerNodes[0].hideGroupName();
          this.playerNodes[0].addCardData(data.cardId);
          if (data.chair == this.bankerChair) {
            var bankPlayer_1 = this.playerNodes[chair];
            cardNode.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
              this.setId(data.cardId, true);
              bankPlayer_1.setShow(false);
              bankPlayer_1.showAllCards();
            }.bind(cardNode.getComponent(Shan_Card_1.default)))));
          }
          this.nanBaiLayer.node.active && this.nanBaiLayer.drawCard(data.cardId);
        }
        this.shanKoeMeeSound.playDealOneCard();
      };
      GameController.prototype.onWsCompare = function(data) {};
      GameController.prototype.onWsBankerWin = function(data) {
        this.changeBankerChair(-1);
        var player = this.playerNodes[this._getLocalChair(data.chair)];
        this.chipGroup.collectGold(player);
        player.moneyChange(data.moneyWin, data.balance, false);
        this.pot.setValue(0);
        this.showBankerWin(data.moneyWin, this.playerNodes[this._getLocalChair(data.chair)].getUserName());
        this._chatNode.notifyBankerWin(this.playerNodes[this._getLocalChair(data.chair)].getUserName(), data.moneyWin);
      };
      GameController.prototype.onKeyDown = function(event) {
        cc.log("onKeyDown", event);
      };
      GameController.prototype.changeBankerChair = function(chair) {
        if (this.bankerChair != chair) {
          this.bankerChair = chair;
          this.playingNode.setLastBet(0);
          this.playerNodes.forEach(function(pn) {
            pn.setBanker(false);
          });
          if (chair >= 0 && chair < this.playerNodes.length) {
            this.playerNodes[this._getLocalChair(chair)].setBanker(true);
            this.playerNodes[this._getLocalChair(chair)].showBurnBorderAnim();
          }
        }
      };
      GameController.prototype.updateWarningCount = function(count) {
        if (count <= 0) {
          this.bgWarningCount.active = false;
          return 0;
        }
        if (3 == count) {
          this.bgWarningCount.setScale(0);
          this.bgWarningCount.active = true;
          this.lbWarningCount.string = "" + count;
          this.bgWarningCount.angle = 0;
          cc.tween(this.bgWarningCount).to(.5, {
            scale: 2,
            angle: -360
          }, {
            easing: "sineOutIn"
          }).to(.5, {
            scale: 1,
            angle: -720
          }, {
            easing: "sineOutIn"
          }).start();
          this.shanKoeMeeSound.playLast3game();
        } else {
          this.bgWarningCount.active = true;
          this.lbWarningCount.string = "" + count;
          this.bgWarningCount.angle = 0;
          cc.tween(this.bgWarningCount).to(.5, {
            scale: 2,
            angle: -360
          }, {
            easing: "sineInOut"
          }).to(.5, {
            scale: 1,
            angle: -720
          }, {
            easing: "sineInOut"
          }).start();
          this.shanKoeMeeSound.playLast3game();
        }
        var alertCount = cc.instantiate(this.prefabShanAlert);
        this.node.addChild(alertCount);
        alertCount.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_ALERT_Z_INDEX;
        alertCount.getComponent("ShanKoeMeeAlert").show(count);
        return 2;
      };
      GameController.prototype.shouldShowBtnCompare = function() {
        var isBanker = 0 == this._getLocalChair(this.bankerChair);
        if (isBanker) {
          var countShan = 0;
          var countTwoCard = 0;
          var countThreeCard = 0;
          var countEmptyCard = 0;
          for (var i = 1; i < this.playerNodes.length; i++) {
            var p = this.playerNodes[i];
            p.bgShan9.node.active || p.bgShan8.node.active || p.bgShanSap.node.active ? countShan++ : 2 == p._cards.length ? countTwoCard++ : 3 == p._cards.length ? countThreeCard++ : 3 == p._cards.length ? countThreeCard++ : countEmptyCard++;
          }
          this.bankerPlayingNode.setActiveBtnCompare(countTwoCard > 0 && countThreeCard > 0);
        }
      };
      GameController.prototype.onShowJackPot = function() {
        cc.log("onShowJackPot");
        this.shanKoeMeeJackpot.showAn\u0111UpateData();
      };
      GameController.prototype.onBtnShowEmoClick = function() {
        this._chatNode.showEmoNode();
      };
      GameController.prototype.onWsBoomJackpot = function(data) {
        var _this = this;
        cc.log("onWsBoomJackpot ", data);
        var player = this.playerNodes[this._getLocalChair(data.chair)];
        0 == this._getLocalChair(data.chair) ? cc.tween(this.node).delay(this._delayForJackPotWin).call(function() {
          var jpNode = cc.instantiate(_this.prefabJackPotBig);
          jpNode.zIndex = 99999;
          _this.node.addChild(jpNode);
          player.moneyChange(data.amount, data.balance, false);
          jpNode.getComponent("ShanKoeMeeJackPotBig").showWinJackpot(data.amount);
        }).start() : cc.tween(this.node).delay(this._delayForJackPotWin).call(function() {
          var jpNode = cc.instantiate(_this.prefabJackPotSmall);
          _this.node.addChild(jpNode);
          jpNode.setPosition(player.node.getPosition().add(cc.v2(0, 100)));
          jpNode.getComponent("ShanKoeMeeJackPotSmall").showWinJackpot(data.amount);
          player.moneyChange(data.amount, data.balance, false);
          player.setCardData(data.cardList);
          player.showAllCards();
        }).start();
      };
      GameController.prototype.onBtnBackClicked = function() {
        0 == this._getLocalChair(this.bankerChair), this._ws.leaveRoom();
      };
      var GameController_1;
      GameController.instance = null;
      __decorate([ property(cc.Prefab) ], GameController.prototype, "playingNodePrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "bankerPlayingNodePrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "ShanKoeMeeJackpotPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "nanBaiLayerPrefab", void 0);
      __decorate([ property(Shan_Pot_1.default) ], GameController.prototype, "pot", void 0);
      __decorate([ property(Shan_ChipGroup_1.default) ], GameController.prototype, "chipGroup", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "bankerWin", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "bgWarningCount", void 0);
      __decorate([ property(cc.Label) ], GameController.prototype, "lbWarningCount", void 0);
      __decorate([ property(Shan_Sound_1.default) ], GameController.prototype, "shanKoeMeeSound", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "prefabJackPotBig", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "prefabJackPotSmall", void 0);
      __decorate([ property(cc.Prefab) ], GameController.prototype, "prefabShanAlert", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "lstBgUser", void 0);
      __decorate([ property(cc.Sprite) ], GameController.prototype, "lstSpMutil", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "lstWaitingOpen", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "lstPointNode", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "lstBgPoint", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "lstBgPointLose", void 0);
      __decorate([ property(sp.Skeleton) ], GameController.prototype, "lstBgShan8", void 0);
      __decorate([ property(sp.Skeleton) ], GameController.prototype, "lstBgShan9", void 0);
      __decorate([ property(sp.Skeleton) ], GameController.prototype, "lstBgShanSap", void 0);
      __decorate([ property(cc.Label) ], GameController.prototype, "lstBbPoint", void 0);
      GameController = GameController_1 = __decorate([ ccclass ], GameController);
      return GameController;
    }(Shan_GameLayer_1.default);
    exports.default = GameController;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./Model/Shan.Jackpot": "Shan.Jackpot",
    "./Shan.BankerPlayingNode": "Shan.BankerPlayingNode",
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.Contants": "Shan.Contants",
    "./Shan.NanBai": "Shan.NanBai",
    "./Shan.NetworkClient": "Shan.NetworkClient",
    "./Shan.PlayingNode": "Shan.PlayingNode",
    "./Shan.Room": "Shan.Room",
    "./Shan.Sound": "Shan.Sound",
    "./common/Shan.Card": "Shan.Card",
    "./common/Shan.Chip": "Shan.Chip",
    "./common/Shan.ChipGroup": "Shan.ChipGroup",
    "./common/Shan.GameLayer": "Shan.GameLayer",
    "./common/Shan.Pot": "Shan.Pot",
    "./common/Shan.SettingInGame": "Shan.SettingInGame",
    "./common/Shan.Utils": "Shan.Utils"
  } ],
  "Shan.GameLayer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c06dXFhwxCcoJdCMpHC/QB", "Shan.GameLayer");
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
    var Configs_1 = require("../../../Loading/src/Configs");
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Shan_Cmd_1 = require("../Shan.Cmd");
    var Sham_TimeCountDown_1 = require("./Sham.TimeCountDown");
    var Shan_PlayerNode_1 = require("./Shan.PlayerNode");
    var Shan_Utils_1 = require("./Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameLayer = function(_super) {
      __extends(GameLayer, _super);
      function GameLayer() {
        var _this = _super.call(this) || this;
        _this.lbID = null;
        _this.lbBet = null;
        _this.lbRoomInfo = null;
        _this.lbBetInfo = null;
        _this.btnLeave = null;
        _this.lbJackPot = null;
        _this.icChipJackpot = null;
        _this.playerPos = [];
        _this.playerPrefab = [];
        _this.timeCountDown = null;
        _this.prefabCard = null;
        _this.prefabItemAnim = null;
        _this.prefabEmoAnim = null;
        _this.prefabPopupMessage = null;
        _this.dealerNode = null;
        _this.dealerAnim = null;
        _this.prefabChip = null;
        _this.prefabSetting = null;
        _this.prefabInteractDealer = null;
        _this.chatNodePrefab = null;
        _this.prefabGetChip = null;
        _this.prefabInvite = null;
        _this.audio = null;
        _this._userIdToChairMapping = {};
        _this._userIdToChairMapping = {};
        _this.MAX_PLAYER = 4;
        _this._roomData = null;
        _this._ownChair = 0;
        _this.playerNodes = [];
        _this._chatNode = null;
        _this.uiNode = null;
        _this.basePopUpActive = null;
        _this._userAction = false;
        _this._jackpotValue = 0;
        _this._isDealerAction = false;
        return _this;
      }
      GameLayer.prototype.onLoad = function() {
        cc.log("GameLayer onLoad");
        this.initNodeWithPrefab();
        this.timeCountDown && (this.timeCountDown.node.zIndex = 999);
        this.uiNode = new cc.Node();
        this.node.addChild(this.uiNode);
        this.uiNode.zIndex = 2;
      };
      GameLayer.prototype.start = function() {
        var _this = this;
        var self = this;
        setTimeout(function() {
          for (var i = 0; i < self.playerPos.length; i++) {
            self.playerNodes[i].node.setPosition(self.playerPos[i].getPosition());
            self.playerNodes[i].node.opacity = 255;
            self.playerPos[i].destroy();
          }
          self.playerPos = [];
        }, 50);
        this.schedule(function() {
          _this._isDealerAction || _this.dealerAction("Idle");
        }, 8);
      };
      GameLayer.prototype.initNodeWithPrefab = function() {
        this.playerNodes = [];
        cc.log("initNodeWithPrefab", this.playerPos.length);
        for (var i = 0; i < this.playerPos.length; i++) {
          var node = this._createNodeFromPrefab(this.playerPrefab[i]);
          node.setPosition(this.playerPos[i].getPosition());
          node.scale = this.playerPos[i].scale;
          node.angle = this.playerPos[i].angle;
          node.opacity = 0;
          node.zIndex = 2;
          var player = node.getComponent(Shan_PlayerNode_1.default);
          player.localChair = i;
          player.setGameLayer(this);
          this.playerNodes.push(player);
          this.playerPos[i].opacity = 0;
        }
      };
      GameLayer.prototype.init = function(ws, target) {
        this._ws = ws;
        this._eventTarget = target;
        this._user = Configs_1.default.Login;
      };
      GameLayer.prototype._createNodeFromPrefab = function(prefab, zIndex) {
        var node = cc.instantiate(prefab);
        this.node.addChild(node);
        zIndex && (node.zIndex = zIndex);
        return node;
      };
      GameLayer.prototype._updateRoomOwner = function() {};
      GameLayer.prototype._getLocalChair = function(chair) {
        return (chair - this._ownChair + this.MAX_PLAYER) % this.MAX_PLAYER;
      };
      GameLayer.prototype._onRoomInvite = function() {};
      GameLayer.prototype._onShowUserInfo = function(userId) {};
      GameLayer.prototype.getChildrenCount = function() {
        return 0;
      };
      GameLayer.prototype.onInviteLayerClosed = function() {
        this._inviteLayer = null;
      };
      GameLayer.prototype.onBtnSettingClicked = function() {};
      GameLayer.prototype.showChatLayer = function(tabIdx) {
        cc.log("showChatLayer");
      };
      GameLayer.prototype.showShop = function() {};
      GameLayer.prototype._updatePlayerNodes = function() {
        for (var i = 0; i < this._roomData.playerList.length; i++) {
          var d = this._roomData.playerList[i];
          var localChair = this._getLocalChair(d.chair);
          this._userIdToChairMapping[d.userName] = localChair;
          this.playerNodes[localChair].updateInfo(d);
        }
      };
      GameLayer.prototype._updateRoomData = function() {
        this._ownChair = this._roomData.playerList.filter(function(p) {
          return p.userName == this._user.Nickname;
        }.bind(this))[0].chair;
        this._updatePlayerNodes();
        this._updateRoomOwner();
        var strRoomInfo = this._roomData.roomId;
        this.lbRoomInfo.string = strRoomInfo;
        var strBetInfo = Shan_Utils_1.NumberUtils.format(this._roomData.moneyBet);
        this.lbBetInfo.string = strBetInfo;
      };
      GameLayer.prototype._removePlayer = function(data, playerList) {
        var localChair = this._userIdToChairMapping[data.userName];
        var playerList = this._roomData.playerList;
        var player = playerList.filter(function(p) {
          return p.userId == data.userId;
        })[0];
        if (!player) return cc.log("WARNING: Player Not Found - " + data.userId, playerList);
        var chair = player.chair;
        var d = {
          chair: chair,
          stateId: Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME
        };
        playerList[chair] = d;
        this._roomData.playerList = playerList;
        this._roomData.numPlayer -= 1;
        if (this.playerNodes[localChair]) var success = this.playerNodes[localChair].updateInfo(d);
        delete this._userIdToChairMapping[data.userName];
        this._updateRoomOwner();
      };
      GameLayer.prototype._userCouldLeaveRoom = function(data) {
        var localChair = this._userIdToChairMapping[data.userName];
        if (isNaN(localChair)) return;
        return true;
      };
      GameLayer.prototype._showMsgIngame = function(msg) {};
      GameLayer.prototype.onBtnBackClicked = function() {
        this._ws.leaveRoom();
      };
      GameLayer.prototype.onWsRoomStartCountdown = function(seconds) {
        cc.log("start count down", seconds);
        this.timeCountDown && this.timeCountDown.show("start_countdown", seconds);
      };
      GameLayer.prototype.onWsRoomInfo = function(data) {
        cc.log(data);
        this._roomData = data;
        this._updateRoomData();
        App_1.default.instance.showLoading(false);
      };
      GameLayer.prototype.onWsLeaveRoom = function(data) {
        cc.log("onWsLeaveRoom", data);
        if (data.userId == this._user.Nickname) {
          this._eventTarget._onGameLeave.call(this._eventTarget);
          this.node.removeFromParent();
        } else {
          if (!this._userCouldLeaveRoom(data)) return;
          this._roomData.roomOwnerId != data.roomOwnerId && (this._roomData.roomOwnerId = data.roomOwnerId);
          var playerList = this._roomData.playerList;
          var player = playerList.filter(function(p) {
            return p.userId == data.userId;
          })[0];
          player && this._removePlayer(data, playerList);
        }
      };
      GameLayer.prototype.onReMatchClick = function() {
        this.onBtnBackClicked();
        this._eventTarget._registerRematch ? this._eventTarget._registerRematch = false : this._eventTarget._registerRematch = true;
        cc.log("onReMatchClick", this._eventTarget._registerRematch);
      };
      GameLayer.prototype.onWsRegisterLeaveRoom = function(data) {
        cc.log("onWsRegisterLeaveRoom", data);
        if (data.userId == this._user.Nickname) {
          App_1.default.instance.showLoading(false);
          this.btnLeave.color = data.isRegister ? cc.Color.GRAY : cc.Color.WHITE;
          data.isRegister ? this._showMsgIngame("Register back") : this._showMsgIngame("Unrigister back");
        }
        var localChair = this._userIdToChairMapping[data.userName];
        localChair >= 0 && localChair < this.playerNodes.length && this.playerNodes[localChair].showRegisterBack(data.isRegister);
      };
      GameLayer.prototype.onWsJoinRoomOther = function(data) {
        cc.log("onWsJoinRoomOther", JSON.stringify(data));
        var playerList = this._roomData.playerList;
        var idx = -1;
        for (var i = 0; i < playerList.length; i++) if (playerList[i].chair == data.chair) {
          idx = i;
          break;
        }
        idx = idx >= 0 ? idx : playerList.length;
        playerList[idx] = data;
        this._roomData.playerList = playerList;
        var localChair = this._getLocalChair(data.chair);
        this.playerNodes[localChair].updateInfo(data);
        this._userIdToChairMapping[data.userName] = localChair;
      };
      GameLayer.prototype.onWsGetInviteeList = function(list) {
        cc.log("onWsGetInviteeList:", list);
        var node = cc.instantiate(this.prefabInvite);
        this.node.addChild(node);
        node.zIndex = 9998;
        this._inviteLayer = node.getComponent("InviteList");
        this._inviteLayer.init(this._ws);
        this._inviteLayer.show();
        this._inviteLayer.onWsGetInviteeList(list);
      };
      GameLayer.prototype.onWsGetJackpot = function(data) {
        cc.log("onWsGetJackpot", data);
        var oldValue = this._jackpotValue;
        this._jackpotValue = data.chip;
        if (this.lbJackPot) {
          var count_1 = 0;
          this.schedule(function() {
            this.lbJackPot.string = Shan_Utils_1.NumberUtils.format(Math.floor(oldValue + count_1++ * (this._jackpotValue - oldValue) / 100));
            this.icChipJackpot && (this.icChipJackpot.x = this.lbJackPot.node.x - this.lbJackPot.node.width / 2 - 15);
          }, .01, 100, 1e-4);
        }
      };
      GameLayer.prototype.onWsBoomJackpot = function(data) {
        cc.log("onWsBoomJackpot ", data);
      };
      GameLayer.prototype.onWsChat = function(data) {
        cc.log("onWsChat", data);
        var localChair = this._userIdToChairMapping[data.userName];
        if (cc.js.isNumber(localChair)) {
          var userName = this.playerNodes[localChair]._data.userName;
          data.username = userName;
          if (this._chatNode) {
            var dataChat = JSON.parse(data.content);
            if ("quick" == dataChat.type) {
              this._chatNode.onNewQuickChat(userName, dataChat.content);
              this._showUserMessage(localChair, "chat.quick_chat." + this._gameName + "." + dataChat.content);
            } else if ("text" == dataChat.type) {
              this._chatNode.onNewTextChat(userName, dataChat.content);
              this._showUserMessage(localChair, dataChat.content);
            } else "emo" == dataChat.type && this._showUserEmoMessage(localChair, dataChat.content);
          }
        }
      };
      GameLayer.prototype._showUserMessage = function(localChair, msStr) {
        var popupMessage = cc.instantiate(this.prefabPopupMessage);
        this.node.addChild(popupMessage);
        popupMessage.zIndex = 9999;
        popupMessage.getComponent("PopupMessage").show(msStr);
        popupMessage.setPosition(this.playerNodes[localChair].node.getPosition().add(cc.v2(0, 100)));
        popupMessage.y + popupMessage.height / 2 > this.node.height / 2 && (popupMessage.y = this.node.height / 2 - popupMessage.height / 2 - 10);
        popupMessage.x + popupMessage.width / 2 > this.node.width / 2 && (popupMessage.x = this.node.width / 2 - popupMessage.width / 2 - 10);
        popupMessage.x - popupMessage.width / 2 < -this.node.width / 2 && (popupMessage.x = -this.node.width / 2 + popupMessage.width / 2 + 10);
      };
      GameLayer.prototype._showUserEmoMessage = function(localChair, msStr) {
        var emoAnim = cc.instantiate(this.prefabEmoAnim);
        this.playerNodes[localChair].node.addChild(emoAnim);
        emoAnim.getComponent("EmotionAnim").show(msStr, 2);
      };
      GameLayer.prototype.onWsEmoChat = function(data) {
        var localChair = this._userIdToChairMapping[data.userName];
      };
      GameLayer.prototype.onWsRoomStopCountDown = function() {
        this.timeCountDown && (this.timeCountDown.node.active = false);
      };
      GameLayer.prototype.onWsgameInteract = function(data) {
        cc.log("onWsgameInteract", data);
        var itemConfig = this.getItem(data.itemId);
        if (-1 == data.targetChair || 255 == data.targetChair) for (var i = 0; i < this.playerNodes.length; i++) this.throwItemTo(this._getLocalChair(data.fromChair), i, itemConfig); else if (-2 == data.targetChair || 254 == data.targetChair) {
          this.throwItemTo(this._getLocalChair(data.fromChair), -2, itemConfig);
          [ 2, 4, 5 ].includes(data.itemId) ? this.dealerAction("Fun", 1) : this.dealerAction("Angry", 1);
        } else this.throwItemTo(this._getLocalChair(data.fromChair), this._getLocalChair(data.targetChair), itemConfig);
      };
      GameLayer.prototype.onWsReceiveJackpotWinners = function(data) {
        cc.log("onWsReceiveJackpotWinners", data);
      };
      GameLayer.prototype.throwItemTo = function(fromLocalChair, localChair, itemConfig) {
        if (-2 == localChair || 254 == localChair) this.throwItem(this.playerNodes[fromLocalChair].node.getPosition(), this.dealerNode.getPosition().add(cc.v2(0, 80)), itemConfig); else {
          if (this.playerNodes[localChair].getState() === Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME || fromLocalChair == localChair) return;
          this.throwItem(this.playerNodes[fromLocalChair].node.getPosition(), this.playerNodes[localChair].node.getPosition(), itemConfig);
        }
      };
      GameLayer.prototype.throwItem = function(start, des, itemConfig) {
        var node = cc.instantiate(this.prefabItemAnim);
        this.node.addChild(node);
        node.setPosition(start);
        node.zIndex = 30;
        cc.log("Throw Item");
      };
      GameLayer.prototype.getItem = function(id) {
        var items = [];
        for (var i = 0; i < 7; i++) items.push({
          id: i + 1,
          imgPath: "interact/expression_icon-" + (i + 1)
        });
        for (var i = 0, size = items.length; i < size; i++) if (items[i].id == id) return items[i];
        return null;
      };
      GameLayer.prototype.onWsgameTip = function(data) {
        var _this = this;
        cc.log("onWsgameTip", data);
        if (data.amount > 0) {
          var chipNode = cc.instantiate(this.prefabChip);
          this.node.addChild(chipNode);
          chipNode.scale = .8;
          chipNode.getComponent("Chip").setValue(null, Shan_Utils_1.NumberUtils.format(data.amount));
          chipNode.setPosition(this.playerNodes[this._getLocalChair(data.chair)].node.getPosition());
          chipNode.getComponent("Chip").updateChipTexture(data.amount);
          var tmpPos = this.dealerNode.getPosition().add(cc.v2(0, 50));
          cc.tween(chipNode).to(.5, {
            x: tmpPos.x,
            y: tmpPos.y,
            rotation: 360
          }, {
            easing: "quintOut"
          }).to(.2, {
            opacity: 0
          }).call(function() {
            _this.dealerAction("Heart", .1);
            var arr = [ 2, 4, 5 ];
            var itemConfig = _this.getItem(arr[Math.floor(3 * Math.random())]);
            _this.throwItem(_this.dealerNode.getPosition().add(cc.v2(0, 80)), _this.playerNodes[_this._getLocalChair(data.chair)].node.getPosition(), itemConfig);
          }).removeSelf().start();
          this._chatNode && this._chatNode.notifyTipDealer(this.playerNodes[this._getLocalChair(data.chair)].getUserName(), Shan_Utils_1.NumberUtils.format(data.amount));
          var localChair = this._userIdToChairMapping[data.userName];
          this.playerNodes[localChair].updateMoney(data.balance);
        }
      };
      GameLayer.prototype.onWsSetCheat = function(data) {};
      GameLayer.prototype.clean = function() {
        this.node.stopAllActions();
        this.playerNodes.forEach(function(p) {
          p.clean();
        });
        this.uiNode.removeAllChildren();
        this._userAction = false;
      };
      GameLayer.prototype.onTipDealerClick = function() {
        cc.log("onTipDealerClick");
        this._userAction = true;
        Shan_Utils_1.default.getChip() > 2 * this._roomData.moneyBet;
      };
      GameLayer.prototype.onDealerClick = function() {
        var node = cc.instantiate(this.prefabInteractDealer);
        node.zIndex = 999;
        this.node.addChild(node);
        var interactDealer = node.getComponent("InteractDealer");
        interactDealer.setData(this);
        this.basePopUpActive = interactDealer;
      };
      GameLayer.prototype.dealerAction = function(key, delay) {
        var _this = this;
        delay = delay || 0;
        this._isDealerAction = true;
        this.dealerNode && this.dealerAnim && cc.tween(this.dealerNode).delay(delay).call(function() {
          switch (key) {
           case "Idle":
            _this.dealerAnim.animation = "Idle";
            break;

           case "Heart":
            _this.dealerAnim.animation = "thatim";
            break;

           case "Deal":
            _this.dealerAnim.animation = "Chiabai";
            break;

           case "Fun":
            _this.dealerAnim.animation = "vui" + (Math.floor(3 * Math.random()) + 1);
            break;

           case "Angry":
            _this.dealerAnim.animation = "tucgian" + (Math.floor(3 * Math.random()) + 1);
          }
        }).delay(3).call(function() {
          _this._isDealerAction = false;
        }).start();
      };
      GameLayer.prototype.onBtnShowEmoClick = function() {
        this._chatNode.showEmoNode();
      };
      GameLayer.prototype.onBtnShowQuickChatClick = function() {
        this._chatNode.showQuickChatNode();
      };
      __decorate([ property(cc.Node) ], GameLayer.prototype, "lbID", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], GameLayer.prototype, "lbRoomInfo", void 0);
      __decorate([ property(cc.Label) ], GameLayer.prototype, "lbBetInfo", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "btnLeave", void 0);
      __decorate([ property(cc.Label) ], GameLayer.prototype, "lbJackPot", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "icChipJackpot", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "playerPos", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "playerPrefab", void 0);
      __decorate([ property(Sham_TimeCountDown_1.default) ], GameLayer.prototype, "timeCountDown", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabCard", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabItemAnim", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabEmoAnim", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabPopupMessage", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "dealerNode", void 0);
      __decorate([ property(sp.Skeleton) ], GameLayer.prototype, "dealerAnim", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabChip", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabSetting", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabInteractDealer", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "chatNodePrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabGetChip", void 0);
      __decorate([ property(cc.Prefab) ], GameLayer.prototype, "prefabInvite", void 0);
      __decorate([ property(cc.AudioClip) ], GameLayer.prototype, "audio", void 0);
      GameLayer = __decorate([ ccclass ], GameLayer);
      return GameLayer;
    }(cc.Component);
    exports.default = GameLayer;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../Shan.Cmd": "Shan.Cmd",
    "./Sham.TimeCountDown": "Sham.TimeCountDown",
    "./Shan.PlayerNode": "Shan.PlayerNode",
    "./Shan.Utils": "Shan.Utils"
  } ],
  "Shan.InteractItem": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d2fbD7OXNGYqEpNOsplwoY", "Shan.InteractItem");
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
    var InteractItem = function(_super) {
      __extends(InteractItem, _super);
      function InteractItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.timer = null;
        _this.nodeTimer = null;
        return _this;
      }
      InteractItem.prototype.onload = function() {
        this.nodeTimer && (this.nodeTimer.active = false);
      };
      InteractItem.prototype.update = function(dt) {
        if (this.nodeTimer && this.nodeTimer.active) var now = cc.sys.now();
      };
      InteractItem.prototype.setData = function(cb, itemId, imagePath) {
        this._cb = cb;
        this._itemId = itemId;
        this._imagePath = imagePath;
        this._updateImage();
      };
      InteractItem.prototype.onClicked = function() {
        this._cb && this._cb(this._itemId);
      };
      InteractItem.prototype._itemId = function(_itemId) {
        throw new Error("Method not implemented.");
      };
      InteractItem.prototype._updateImage = function() {};
      InteractItem.prototype.setRotation = function(rotation) {
        this.node.angle = rotation;
      };
      __decorate([ property(cc.Sprite) ], InteractItem.prototype, "image", void 0);
      __decorate([ property(cc.ProgressBar) ], InteractItem.prototype, "timer", void 0);
      __decorate([ property(cc.Node) ], InteractItem.prototype, "nodeTimer", void 0);
      InteractItem = __decorate([ ccclass ], InteractItem);
      return InteractItem;
    }(cc.Component);
    exports.default = InteractItem;
    cc._RF.pop();
  }, {} ],
  "Shan.ItemResult": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1d704GP2lN1boxle38z9IN", "Shan.ItemResult");
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
    var ShanItemResult = function(_super) {
      __extends(ShanItemResult, _super);
      function ShanItemResult() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelUserName = null;
        _this.labelBet = null;
        _this.labelBien = null;
        _this.labelKe = null;
        _this.labelGa = null;
        _this.labelTotal = null;
        return _this;
      }
      ShanItemResult.prototype.start = function() {};
      ShanItemResult.prototype.initItem = function(info) {
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
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelUserName", void 0);
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelBien", void 0);
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelKe", void 0);
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelGa", void 0);
      __decorate([ property(cc.Label) ], ShanItemResult.prototype, "labelTotal", void 0);
      ShanItemResult = __decorate([ ccclass ], ShanItemResult);
      return ShanItemResult;
    }(cc.Component);
    exports.default = ShanItemResult;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Shan.ItemRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c32d39AvWFL04Ycha9QmzIJ", "Shan.ItemRoom");
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
    var Shan_Room_1 = require("./Shan.Room");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShanItemRoom = function(_super) {
      __extends(ShanItemRoom, _super);
      function ShanItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        _this.requireChip = null;
        return _this;
      }
      ShanItemRoom.prototype.onLoad = function() {
        this.node.active = false;
      };
      ShanItemRoom.prototype.start = function() {};
      ShanItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.requireChip = info["requiredMoney"];
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      ShanItemRoom.prototype.chooseRoom = function() {
        Configs_1.default.Login.Coin >= this.requireChip ? Shan_Room_1.default.instance.joinRoom(this.roomInfo) : this.roomInfo["userCount"] >= this.roomInfo["maxUserPerRoom"] ? App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_err9")) : App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
      };
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], ShanItemRoom.prototype, "progressNumPlayers", void 0);
      ShanItemRoom = __decorate([ ccclass ], ShanItemRoom);
      return ShanItemRoom;
    }(cc.Component);
    exports.default = ShanItemRoom;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Shan.Room": "Shan.Room"
  } ],
  "Shan.ItemRoomz": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da1c0Q+BH1CjZEaIVLo9mJb", "Shan.ItemRoomz");
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
    var ShanItemRoom = function(_super) {
      __extends(ShanItemRoom, _super);
      function ShanItemRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
      }
      ShanItemRoom.prototype.start = function() {};
      ShanItemRoom.prototype.initItem = function(info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
      };
      ShanItemRoom.prototype.chooseRoom = function() {};
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelBet", void 0);
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelBetMin", void 0);
      __decorate([ property(cc.Label) ], ShanItemRoom.prototype, "labelNumPlayers", void 0);
      __decorate([ property(cc.Sprite) ], ShanItemRoom.prototype, "progressNumPlayers", void 0);
      ShanItemRoom = __decorate([ ccclass ], ShanItemRoom);
      return ShanItemRoom;
    }(cc.Component);
    exports.default = ShanItemRoom;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "Shan.JackpotBig": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af55aCtas1DbrnHPHNoOvOh", "Shan.JackpotBig");
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
    var JackpotBig = function(_super) {
      __extends(JackpotBig, _super);
      function JackpotBig() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animJackpot = null;
        _this.lbChip = null;
        _this.soundJackPot = null;
        return _this;
      }
      JackpotBig.prototype.start = function() {};
      JackpotBig.prototype.showWinJackpot = function(chips) {};
      __decorate([ property(sp.Skeleton) ], JackpotBig.prototype, "animJackpot", void 0);
      __decorate([ property(cc.Label) ], JackpotBig.prototype, "lbChip", void 0);
      __decorate([ property(cc.AudioClip) ], JackpotBig.prototype, "soundJackPot", void 0);
      JackpotBig = __decorate([ ccclass ], JackpotBig);
      return JackpotBig;
    }(cc.Component);
    exports.default = JackpotBig;
    cc._RF.pop();
  }, {} ],
  "Shan.JackpotItem": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c594fKiWLdD6bjtG7rfMBdC", "Shan.JackpotItem");
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
    var Shan_Utils_1 = require("../common/Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JackpotItem = function(_super) {
      __extends(JackpotItem, _super);
      function JackpotItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbChip = null;
        _this.lbTime = null;
        _this.lbBet = null;
        return _this;
      }
      JackpotItem.prototype.updateUi = function(data) {
        this.lbName.string = Shan_Utils_1.StringUtils.shorten(data.userName, 13);
        this.lbChip.string = Shan_Utils_1.NumberUtils.format(data.amount);
        this.lbBet.string = Shan_Utils_1.NumberUtils.format(data.bet);
      };
      __decorate([ property(cc.Label) ], JackpotItem.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], JackpotItem.prototype, "lbChip", void 0);
      __decorate([ property(cc.Label) ], JackpotItem.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], JackpotItem.prototype, "lbBet", void 0);
      JackpotItem = __decorate([ ccclass ], JackpotItem);
      return JackpotItem;
    }(cc.Component);
    exports.default = JackpotItem;
    cc._RF.pop();
  }, {
    "../common/Shan.Utils": "Shan.Utils"
  } ],
  "Shan.JackpotSmall": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b5b3dc6wxF8pXPREIUT3wz", "Shan.JackpotSmall");
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
    var JackpotBig = function(_super) {
      __extends(JackpotBig, _super);
      function JackpotBig() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animJackpot = null;
        _this.lbChip = null;
        return _this;
      }
      JackpotBig.prototype.start = function() {};
      JackpotBig.prototype.showWinJackpot = function(chips) {};
      __decorate([ property(sp.Skeleton) ], JackpotBig.prototype, "animJackpot", void 0);
      __decorate([ property(cc.Label) ], JackpotBig.prototype, "lbChip", void 0);
      JackpotBig = __decorate([ ccclass ], JackpotBig);
      return JackpotBig;
    }(cc.Component);
    exports.default = JackpotBig;
    cc._RF.pop();
  }, {} ],
  "Shan.Jackpot": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d504acRni1ILbwg5EBuR4Bf", "Shan.Jackpot");
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
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Shan_BasePopup_1 = require("./Shan.BasePopup");
    var Shan_JackpotItem_1 = require("./Shan.JackpotItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Jackpot = function(_super) {
      __extends(Jackpot, _super);
      function Jackpot() {
        var _this = _super.call(this) || this;
        _this.shanJackpotItem = null;
        _this.lstContent = null;
        _this._listHeight = 0;
        return _this;
      }
      Jackpot.prototype.onLoad = function() {
        this.node.zIndex = 1e4;
        this.onCloseDone();
      };
      Jackpot.prototype.showAn\u0111UpateData = function() {
        this.show();
      };
      Jackpot.prototype.finishAnimation = function() {
        App_1.default.instance.showLoading(false);
      };
      Jackpot.prototype.updateData = function(data) {
        return this;
      };
      Jackpot.prototype.onBtnCloseClicked = function() {};
      Jackpot.prototype.onCloseDone = function() {
        this.node.active = false;
      };
      Jackpot.prototype.updateListUser = function(list) {
        var _this = this;
        this.lstContent.removeAllChildren();
        this._listHeight = 0;
        list = list || [];
        list.forEach(function(element) {
          var item = cc.instantiate(_this.shanJackpotItem);
          _this.lstContent.addChild(item);
          item.setPosition(cc.v2(0, -_this._listHeight));
          _this._listHeight += item.height + 5;
          item.getComponent(Shan_JackpotItem_1.default).updateUi(element);
          _this.lstContent.height = _this._listHeight;
        });
      };
      Jackpot.instance = null;
      Jackpot.prefab = null;
      __decorate([ property(cc.Prefab) ], Jackpot.prototype, "shanJackpotItem", void 0);
      __decorate([ property(cc.Node) ], Jackpot.prototype, "lstContent", void 0);
      Jackpot = __decorate([ ccclass ], Jackpot);
      return Jackpot;
    }(Shan_BasePopup_1.default);
    exports.default = Jackpot;
    cc._RF.pop();
  }, {
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "./Shan.BasePopup": "Shan.BasePopup",
    "./Shan.JackpotItem": "Shan.JackpotItem"
  } ],
  "Shan.NanBai": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f6b83itldPXa/R91UB9rje", "Shan.NanBai");
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
    exports.NodeNanBai = void 0;
    var Shan_Card_1 = require("./common/Shan.Card");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TW = cc.tween;
    var NodeNanBai = function(_super) {
      __extends(NodeNanBai, _super);
      function NodeNanBai() {
        var _this = _super.call(this) || this;
        _this.masks = [];
        _this.cards = [];
        _this.btns = [];
        _this.btnOpen = null;
        _this.lbTime = null;
        _this.hands = [];
        _this.openCard = null;
        _this._countDownEndAt = 0;
        _this._hasBeenShowCard = false;
        _this._isClosing = true;
        _this._canNan = false;
        return _this;
      }
      NodeNanBai.prototype.setWs = function(ws) {
        this._ws = ws;
      };
      NodeNanBai.prototype.setGameLayer = function(game) {
        this._gameLayer = game;
      };
      NodeNanBai.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.maskTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.maskTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.maskTouchEnd, this);
        this.cards[0].setMode(2);
        this.cards[1].setMode(2);
        this.cards[2].setMode(2);
        cc.log("this.cards[0]._mode========= ", this.cards[2]._mode);
      };
      NodeNanBai.prototype.update = function(dt) {
        if (this.node.active) {
          if (cc.sys.now() < this._countDownEndAt) this.lbTime.string = Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) + ""; else {
            cc.log("closeDialog update", cc.sys.now(), this._countDownEndAt);
            this.closeDialog();
          }
          if (!this._hasBeenShowCard && Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) < 7 && !this.masks[2].active) {
            this._selectedMask = this.masks[1];
            this._belowCard = this.cards[1];
            cc.log("showButtons got here!!!", Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3));
            this._onNanFinish();
          }
        }
      };
      NodeNanBai.prototype.startCount = function(seconds) {
        this._countDownEndAt = 1e3 * seconds + cc.sys.now();
      };
      NodeNanBai.prototype.init = function(seconds, isBanker, isInstantWin, cardIds, closeCb) {
        cc.log("showButtons got here INITTTT!!!");
        this._hasBeenShowCard = false;
        this._selectedMask = null;
        this._belowCard = null;
        this._isClosing = false;
        this.enableBtns(false);
        this.btnOpen.active = false;
        this._isBanker = isBanker;
        this._isInstantWin = isInstantWin;
        this._cardIds = cardIds;
        this._closeCB = closeCb;
        this.startCount(seconds);
        this.node.active = true;
        this.hands[1].active = true;
        this.hands[2].active = true;
        this._canNan = false;
        for (var i = 0; i < this.masks.length; i++) {
          this.masks[i].stopAllActions();
          this.masks[i].opacity = 255;
          this.masks[i].active = true;
        }
        for (var i = 0; i < cardIds.length; i++) {
          var c = this.cards[i];
          c.node.stopAllActions();
          c.setId(cardIds[i]);
          c.show();
          c.node.x = 400 * (i - (cardIds.length - 1) / 2);
          this.masks[i].setPosition(c.node.getPosition());
        }
        for (var i = cardIds.length; i < 3; i++) {
          this.cards[i].node.active = false;
          this.masks[i].active = false;
        }
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.delayTime(.15), cc.callFunc(function() {
          for (var i = 0; i < this._cardIds.length - 1; i++) {
            this.masks[i].stopAllActions();
            this.masks[i].runAction(cc.sequence(this._maskAction(cc.v2(15, 50).normalize(), i)));
          }
        }.bind(this)), cc.delayTime(.1), cc.callFunc(function() {
          this.btnOpen.active = true;
          this._canNan = true;
        }.bind(this))));
      };
      NodeNanBai.prototype.maskTouchBegan = function(event) {
        var touches = event.getTouches();
        if (touches.length > 1 || !this._canNan) return;
        var pos = this.node.convertToNodeSpaceAR(touches[0].getLocation());
        for (var i = 0; i < this.masks.length; i++) if (this.masks[i].active && this.masks[i].getBoundingBox().contains(pos)) {
          this._selectedMask = this.masks[i];
          this._belowCard = this.cards[i];
          this._touchBeganPos = pos;
          this._deltaPos = this._touchBeganPos.sub(this._selectedMask.getPosition());
          this.hands[i].active = false;
          break;
        }
        return;
      };
      NodeNanBai.prototype.maskTouchMove = function(event) {
        var touches = event.getTouches();
        var pos = this.node.convertToNodeSpaceAR(touches[0].getLocation());
        if (this._selectedMask) {
          this._selectedMask.setPosition(pos.sub(this._deltaPos));
          var originPos = this._selectedMask == this.masks[1] ? this.cards[1].node.getPosition() : this.cards[2].node.getPosition();
          if (this._selectedMask.x - originPos.x > .25 * this.cards[0].node.getContentSize().width || this._selectedMask.y - originPos.y > .65 * this.cards[0].node.getContentSize().height || -(this._selectedMask.x - originPos.x) > .45 * this.cards[0].node.getContentSize().width || -(this._selectedMask.y - originPos.y) > .25 * this.cards[0].node.getContentSize().height) {
            this._gameLayer._userAction = true;
            this._onNanFinish();
          }
        }
      };
      NodeNanBai.prototype.maskTouchEnd = function(event) {
        cc.log("maskTouchEnd");
        if (this._selectedMask) {
          var originPos = this._selectedMask == this.masks[1] ? this.cards[1].node.getPosition() : this.cards[2].node.getPosition();
          cc.tween(this._selectedMask).to(.1, {
            x: originPos.x,
            y: originPos.y
          }).start();
        }
      };
      NodeNanBai.prototype._onNanFinish = function() {
        cc.log("showButtons On nan finish==");
        this._hasBeenShowCard = true;
        var vector = cc.v2();
        if (this._selectedMask) {
          vector = this._selectedMask.getPosition().sub(this._belowCard.node.getPosition()).normalize();
          this._selectedMask.active && this._selectedMask.opacity > 0;
        }
        var actions = this._maskAction(vector, 0);
        this._isBanker || this._selectedMask == this.masks[2] ? actions.push(cc.delayTime(.5), cc.callFunc(function() {
          cc.log("closeDialog _onNanFinish");
          this.closeDialog();
        }.bind(this))) : actions.push(cc.delayTime(.1), cc.callFunc(function() {
          this.showButtons();
        }.bind(this)));
        this._selectedMask.stopAllActions();
        this._selectedMask.runAction(cc.sequence(actions));
        this._belowCard = null;
        this._selectedMask = null;
      };
      NodeNanBai.prototype.showButtons = function() {
        cc.log("showButtons");
        if (this._isInstantWin) {
          cc.log("closeDialog showButtons");
          this.enableBtns(false);
          this.btnOpen.active = false;
          this.closeDialog();
        } else {
          this.enableBtns(true);
          this.btnOpen.active = false;
        }
      };
      NodeNanBai.prototype.closeDialog = function() {
        if (!this._isClosing) {
          this._isClosing = true;
          this.node.active = false;
          this._onClose();
        }
      };
      NodeNanBai.prototype._maskAction = function(dir, i) {
        var _this = this;
        return [ cc.delayTime(.15 * i), cc.spawn(cc.moveBy(.3, dir.mul(50)), cc.fadeOut(.15), cc.callFunc(function() {
          _this._selectedMask && (_this._selectedMask.active = false);
        })) ];
      };
      NodeNanBai.prototype._onClose = function() {
        this._closeCB && this._closeCB();
      };
      NodeNanBai.prototype.onBtnDrawClicked = function() {
        this._gameLayer._userAction = true;
        this.enableBtns(false);
        this.btnOpen.active = false;
        this._ws.draw();
      };
      NodeNanBai.prototype.onBtnNoDrawClicked = function() {
        this._gameLayer._userAction = true;
        this.enableBtns(false);
        this.btnOpen.active = false;
        cc.log("closeDialog onBtnNoDrawClicked");
        this.closeDialog();
      };
      NodeNanBai.prototype.onBtnOpenClicked = function() {
        this._gameLayer._userAction = true;
        if (!this.masks[2].active) {
          this._selectedMask = this.masks[1];
          this._belowCard = this.cards[1];
          cc.log("showButtons got here!!!", Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3));
          this._onNanFinish();
        }
      };
      NodeNanBai.prototype.enableBtns = function(value) {
        for (var i = 0; i < this.btns.length; i++) this.btns[i].active = value;
      };
      NodeNanBai.prototype.drawCard = function(cardId) {
        cc.log("drawCard", cardId);
        for (var i = 0; i < 2; i++) {
          this.cards[i].node.stopAllActions();
          this.cards[i].node.runAction(cc.moveTo(.3, cc.v2(400 * (i - 1), 70)));
        }
        this.masks[1].active = false;
        this._cardIds.push(cardId);
        var card = this.cards[2];
        var mask = this.masks[2];
        card.setId(cardId, true);
        card.show();
        mask.opacity = 255;
        mask.active = true;
        card.node.active = true;
        card.node.y = this.node.height;
        mask.setPosition(card.node.getPosition());
        card.node.stopAllActions();
        mask.stopAllActions();
        card.node.runAction(cc.moveTo(.5, cc.v2(card.node.x, 70)));
        mask.runAction(cc.moveTo(.5, cc.v2(card.node.x, 70)));
      };
      __decorate([ property(cc.Node) ], NodeNanBai.prototype, "masks", void 0);
      __decorate([ property(Shan_Card_1.default) ], NodeNanBai.prototype, "cards", void 0);
      __decorate([ property(cc.Node) ], NodeNanBai.prototype, "btns", void 0);
      __decorate([ property(cc.Node) ], NodeNanBai.prototype, "btnOpen", void 0);
      __decorate([ property(cc.Label) ], NodeNanBai.prototype, "lbTime", void 0);
      __decorate([ property(cc.Node) ], NodeNanBai.prototype, "hands", void 0);
      __decorate([ property(cc.AudioClip) ], NodeNanBai.prototype, "openCard", void 0);
      NodeNanBai = __decorate([ ccclass ], NodeNanBai);
      return NodeNanBai;
    }(cc.Component);
    exports.NodeNanBai = NodeNanBai;
    cc._RF.pop();
  }, {
    "./common/Shan.Card": "Shan.Card"
  } ],
  "Shan.NetworkClient": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cd3dlmVy5Lx7VZb+YteP6E", "Shan.NetworkClient");
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
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var Network_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkClient");
    var Network_NetworkListener_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkListener");
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_Contants_1 = require("./Shan.Contants");
    var ShanNetworkClient = function(_super) {
      __extends(ShanNetworkClient, _super);
      function ShanNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        _this._state = Shan_Contants_1.ConnectionState.NO_CONNECTION;
        return _this;
      }
      ShanNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new ShanNetworkClient());
        return this.instance;
      };
      ShanNetworkClient.prototype.connect = function() {
        this.setState(Shan_Contants_1.ConnectionState.CONNECTING);
        _super.prototype.connect.call(this, "shankoemee.vietkieu888.com", 443);
      };
      ShanNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
        this.setState(Shan_Contants_1.ConnectionState.CONNECTED);
      };
      ShanNetworkClient.prototype.onError = function(ev) {
        _super.prototype.onError.call(this, ev);
        this.setState(Shan_Contants_1.ConnectionState.NO_CONNECTION);
      };
      ShanNetworkClient.prototype.onMessage = function(ev) {
        var data = new Uint8Array(ev.data);
        var inpacket = new Network_InPacket_1.default(data);
        cc.log("<<<<<", inpacket.getCmdId(), "<<<<<");
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];
          if (listener.target && listener.target instanceof Object && listener.target.node) listener.callback(data); else {
            this.listeners.splice(i, 1);
            i--;
          }
        }
      };
      ShanNetworkClient.prototype.addListener = function(callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
      };
      ShanNetworkClient.prototype.setState = function(s) {
        this._state = s;
      };
      ShanNetworkClient.prototype.getState = function() {
        return this._state;
      };
      ShanNetworkClient.prototype.send = function(packet) {
        cc.log(">>>>>", packet._cmdId, ">>>>>");
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      ShanNetworkClient.prototype.leaveRoom = function() {
        this.send(new Shan_Cmd_1.default.SendLeaveGame());
      };
      ShanNetworkClient.prototype.sendUserAction = function(_userAction) {
        this.send(new Shan_Cmd_1.default.SendUserAction(_userAction));
      };
      ShanNetworkClient.prototype.getJackPot = function() {
        throw new Error("Method not implemented.");
      };
      ShanNetworkClient.prototype.seen = function() {
        this.send(new Shan_Cmd_1.default.SendSeen());
      };
      ShanNetworkClient.prototype.bet = function(amount) {
        cc.log("send bet ", amount);
        this.send(new Shan_Cmd_1.default.SendBet(amount));
      };
      ShanNetworkClient.prototype.draw = function() {
        cc.log("Draw");
        this.send(new Shan_Cmd_1.default.SendDraw());
      };
      ShanNetworkClient.prototype.noDraw = function() {
        this.send(new Shan_Cmd_1.default.SendNoDraw());
      };
      ShanNetworkClient.prototype.compare = function() {
        this.send(new Shan_Cmd_1.default.SendCompare());
      };
      ShanNetworkClient.prototype.getUserInfo = function(userId, cb) {};
      ShanNetworkClient.prototype.disconnect = function() {
        this.getState() != Shan_Contants_1.ConnectionState.NO_CONNECTION && this.getState() != Shan_Contants_1.ConnectionState.CLOSING && this.closeSocket();
        this.setState(Shan_Contants_1.ConnectionState.CLOSING);
      };
      ShanNetworkClient.prototype.closeSocket = function() {
        this.ws.close();
      };
      return ShanNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = ShanNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0,
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.Contants": "Shan.Contants"
  } ],
  "Shan.PlayerNode": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d545d7tOeRMeqkgNmguRDTT", "Shan.PlayerNode");
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
    var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
    var Shan_Cmd_1 = require("../Shan.Cmd");
    var Shan_Card_1 = require("./Shan.Card");
    var Shan_ProgressBar_1 = require("./Shan.ProgressBar");
    var Shan_Utils_1 = require("./Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerNode = function(_super) {
      __extends(PlayerNode, _super);
      function PlayerNode() {
        var _this = _super.call(this) || this;
        _this.localChair = -1;
        _this.lbMoney = null;
        _this.lbName = null;
        _this.avatar = null;
        _this.waitingNode = null;
        _this.userNode = null;
        _this.timer = null;
        _this.timerBar = null;
        _this.prefabPlayerInfo = null;
        _this.prefabCard = null;
        _this.prefabWinLabel = null;
        _this.prefabLoseLabel = null;
        _this.progressParticle = null;
        _this.winEffect = null;
        _this.winEffectAvatar = null;
        _this.lostEffect = null;
        _this.sp_icChip = null;
        _this.sp_register_back = null;
        _this._data = null;
        _this._cards = [];
        _this._cardData = [];
        return _this;
      }
      PlayerNode.prototype.showComputerPlay = function() {};
      PlayerNode.prototype.showWaitingNewMatch = function(arg0) {};
      PlayerNode.prototype.showViewBet = function(betAmount, moneyBet, arg2) {};
      PlayerNode.prototype.bet = function(betAmount, money) {};
      PlayerNode.prototype.instantlyAddCard = function(cards, arg1, uiNode) {};
      PlayerNode.prototype.setGameLayer = function(gameLayer) {
        this._gameLayer = gameLayer;
      };
      PlayerNode.prototype.clean = function() {
        this.node.stopAllActions();
        this._cards.forEach(function(c) {
          c.stopAllActions();
          c.node.removeFromParent();
          c.setDarkMode(false);
        });
        this._cards = [];
        this._cardData = [];
        this.winEffect && (this.winEffect.node.active = false);
        this.winEffectAvatar && (this.winEffectAvatar.node.active = false);
        this.lostEffect && (this.lostEffect.active = false);
        this.setDarkMode && this.setDarkMode(false);
      };
      PlayerNode.prototype.setDarkMode = function(value) {};
      PlayerNode.prototype.onLoad = function() {
        this.timer && (this.timer.node.active = false);
        this.winEffect && (this.winEffect.node.active = false);
        this.winEffectAvatar && (this.winEffectAvatar.node.active = false);
        this.lostEffect && (this.lostEffect.active = false);
        this.setVisibleInviteBtn(false);
      };
      PlayerNode.prototype.updateInfo = function(data) {
        cc.log("updateUserInfo", data);
        this._data = data;
        if (this._data && this._data.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME) {
          this.userNode.active = false;
          this._gameLayer.lstBgUser && this._gameLayer.lstBgUser.length > this.localChair && (this._gameLayer.lstBgUser[this.localChair].active = false);
          return false;
        }
        this.userNode && (this.userNode.active = true);
        this._gameLayer.lstBgUser && this._gameLayer.lstBgUser.length > this.localChair && (this._gameLayer.lstBgUser[this.localChair].active = true);
        this.lbName && (this.lbName.string = Shan_Utils_1.StringUtils.shorten(this._data.userName, 12));
        this._data.avatar && this.updateAvatar();
        this.sp_register_back && (this.sp_register_back.active = false);
        return true;
      };
      PlayerNode.prototype.update = function(dt) {
        if (this.getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME) return;
        if (this.lbMoney) {
          this.lbMoney.string = Shan_Utils_1.NumberUtils.format(this._data.money);
          this.sp_icChip && (this.sp_icChip.x = this.lbMoney.node.x - this.lbMoney.node.width / 2 - 20);
        }
        if (this.timer && this.timer.node.active) {
          var userData = this.timer.userData;
          var now = cc.sys.now();
          var delta = now - userData.startTime;
          var deltaPercent = delta / (1e3 * userData.duration);
          var percentage = userData.startPercentage + (0 - userData.startPercentage) * deltaPercent;
          this.timer.progress = percentage;
          !this._isTriggered && percentage < .25 && this._triggleAlert();
          if (this.progressParticle && percentage > 0) {
            var radius = this.timer.node.width / 2;
            var angle = 2 * percentage * Math.PI;
            var x = -radius * Math.sin(angle);
            var y = radius * Math.cos(angle);
            this.progressParticle.setPosition(cc.v2(x, y));
            this.progressParticle.active = true;
          } else this.progressParticle && (this.progressParticle.active = false);
          this.timerBar && percentage < .25 ? this.timerBar.color = cc.Color.RED : this.timerBar && percentage < .5 && (this.timerBar.color = cc.Color.YELLOW);
        }
      };
      PlayerNode.prototype._triggleAlert = function() {};
      PlayerNode.prototype.updateAvatar = function() {
        this.avatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(this._data.avatar);
      };
      PlayerNode.prototype.getUserName = function() {
        return this._data.userName || "";
      };
      PlayerNode.prototype.getState = function() {
        return this._data ? this._data.stateId : Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME;
      };
      PlayerNode.prototype.getUserId = function() {
        return this._data ? this._data.userId : null;
      };
      PlayerNode.prototype.startPlaying = function() {
        this.getState() == Shan_Cmd_1.default.Code.PLAYER_STATUS_SITTING && this._setState(Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING);
      };
      PlayerNode.prototype.startCountDown = function(time, startPercentage) {
        cc.log("startCountDown", time, startPercentage);
        var percentage = (startPercentage || 100) / 100;
        var startColor = cc.Color.GREEN;
        this.timer.userData = {
          startTime: cc.sys.now(),
          startPercentage: percentage,
          startColor: startColor,
          duration: time * percentage
        };
        this.timer.node.active = true;
        this.timerBar && (this.timerBar.color = startColor);
        this.timer.progress = percentage / 100;
      };
      PlayerNode.prototype.stopCountDown = function() {
        this.timer.node.stopAllActions();
        this.timer.node.active = false;
        this._isTriggered = false;
      };
      PlayerNode.prototype.updateMoney = function(money) {
        this._data.money = money;
      };
      PlayerNode.prototype.getMoney = function() {
        return this._data.money;
      };
      PlayerNode.prototype.getChair = function() {
        return this._data.chair;
      };
      PlayerNode.prototype._setState = function(value) {
        this._data.stateId = value;
      };
      PlayerNode.prototype.setCardData = function(cardData) {
        this._cardData = cardData;
      };
      PlayerNode.prototype.addCardData = function(card) {
        this._cardData.push(card);
      };
      PlayerNode.prototype.removeCardData = function(card) {
        -1 !== this._cardData.indexOf(card) && this._cardData.splice(this._cardData.indexOf(card), 1);
      };
      PlayerNode.prototype.getCardData = function() {
        return this._cardData;
      };
      PlayerNode.prototype._addCard = function(card) {
        cc.log("_addCard", card instanceof Shan_Card_1.default);
        if (!(card instanceof Shan_Card_1.default)) return false;
        this._cards.push(card);
        return true;
      };
      PlayerNode.prototype.addCard = function(card) {
        if (this._addCard(card)) {
          var newPos = this.node.getPosition().add(this._getCardPos());
          card.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, newPos), cc.rotateBy(.2, 180)), cc.callFunc(function(obj, pos) {
            card.setPosition(newPos);
            card.setRotation(0);
          })));
        }
      };
      PlayerNode.prototype._getCardPos = function() {
        return cc.v2(0, 0);
      };
      PlayerNode.prototype.removeCard = function(card) {
        var idx = this._cards.map(function(c) {
          return c.getId();
        }).indexOf(card.getId());
        cc.log("removeCard", card, idx);
        if (idx < 0) return;
        var removed = this._cards.splice(idx, 1);
        return removed[0];
      };
      PlayerNode.prototype.removeAllCards = function() {
        this._cards.forEach(function(c) {
          c.node.removeFromParent();
        });
        this._cards = [];
      };
      PlayerNode.prototype.updateNumberCardLeft = function() {
        0 !== this.localChair && this._cards.length > 0 ? this.showCardLeft(this._cards.length) : this.hideCardLeft();
      };
      PlayerNode.prototype.showCardLeft = function(value) {};
      PlayerNode.prototype.hideCardLeft = function() {};
      PlayerNode.prototype.moneyChange = function(moneyChange, targetMoney, isSpawn) {
        void 0 === isSpawn && (isSpawn = true);
        if (this.lbMoney) {
          var str = (moneyChange > 0 ? "+" + Shan_Utils_1.NumberUtils.format(moneyChange) : Shan_Utils_1.NumberUtils.format(moneyChange)).toString();
          var node = cc.instantiate(moneyChange >= 0 ? this.prefabWinLabel : this.prefabLoseLabel);
          node.zIndex = 100;
          node.setPosition(this.node.getPosition());
          this.node.parent.addChild(node);
          var lb = node.getComponent(cc.Label);
          lb.string = str;
          node.scale = .45;
          var act = null;
          if (isSpawn) {
            cc.log("Co Spawn");
            act = cc.sequence(cc.spawn(cc.moveBy(1.2, cc.v2(0, 100)), cc.fadeOut(1.4)), cc.removeSelf());
          } else {
            cc.log("k Co Spawn");
            act = cc.sequence(cc.sequence(cc.moveBy(1.2, cc.v2(0, 100)), cc.fadeOut(1.4)), cc.removeSelf());
          }
          node.runAction(act);
        }
        "undefined" != typeof targetMoney && (this._data.money = targetMoney);
      };
      PlayerNode.prototype.onAvatarClicked = function() {};
      PlayerNode.prototype.setVisibleInviteBtn = function(visible) {
        this.waitingNode && (this.waitingNode.active = visible);
      };
      PlayerNode.prototype.vibrateAvatar = function() {
        var pos = this.waitingNode.getPosition();
        cc.tween(this.userNode).to(.1, {
          y: pos.y + 10
        }).to(.1, {
          y: pos.y
        }).start();
      };
      PlayerNode.prototype.showRegisterBack = function(boolean) {
        this.sp_register_back && (this.sp_register_back.active = boolean);
      };
      PlayerNode.prototype.onInviteClicked = function() {
        this._gameLayer._ws.getInviteeList();
      };
      __decorate([ property ], PlayerNode.prototype, "localChair", void 0);
      __decorate([ property(cc.Label) ], PlayerNode.prototype, "lbMoney", void 0);
      __decorate([ property(cc.Label) ], PlayerNode.prototype, "lbName", void 0);
      __decorate([ property(cc.Sprite) ], PlayerNode.prototype, "avatar", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "waitingNode", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "userNode", void 0);
      __decorate([ property(Shan_ProgressBar_1.default) ], PlayerNode.prototype, "timer", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "timerBar", void 0);
      __decorate([ property(cc.Prefab) ], PlayerNode.prototype, "prefabPlayerInfo", void 0);
      __decorate([ property(cc.Prefab) ], PlayerNode.prototype, "prefabCard", void 0);
      __decorate([ property(cc.Prefab) ], PlayerNode.prototype, "prefabWinLabel", void 0);
      __decorate([ property(cc.Prefab) ], PlayerNode.prototype, "prefabLoseLabel", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "progressParticle", void 0);
      __decorate([ property(sp.Skeleton) ], PlayerNode.prototype, "winEffect", void 0);
      __decorate([ property(sp.Skeleton) ], PlayerNode.prototype, "winEffectAvatar", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "lostEffect", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "sp_icChip", void 0);
      __decorate([ property(cc.Node) ], PlayerNode.prototype, "sp_register_back", void 0);
      PlayerNode = __decorate([ ccclass ], PlayerNode);
      return PlayerNode;
    }(cc.Component);
    exports.default = PlayerNode;
    cc._RF.pop();
  }, {
    "../../../Lobby/LobbyScript/Script/common/App": void 0,
    "../Shan.Cmd": "Shan.Cmd",
    "./Shan.Card": "Shan.Card",
    "./Shan.ProgressBar": "Shan.ProgressBar",
    "./Shan.Utils": "Shan.Utils"
  } ],
  "Shan.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0982aBnEstFkJ37BC/7pwxP", "Shan.Player");
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
    var Shan_Card_1 = require("./common/Shan.Card");
    var Shan_Chip_1 = require("./common/Shan.Chip");
    var Shan_ChipGroup_1 = require("./common/Shan.ChipGroup");
    var Shan_PlayerNode_1 = require("./common/Shan.PlayerNode");
    var Shan_Utils_1 = require("./common/Shan.Utils");
    var ShanCardGroup_1 = require("./Model/ShanCardGroup");
    var ShanCardGroupName_1 = require("./Model/ShanCardGroupName");
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_Contants_1 = require("./Shan.Contants");
    var Shan_GameController_1 = require("./Shan.GameController");
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = _super.call(this) || this;
        _this.bgBet = null;
        _this.lbBetAmount = null;
        _this.status = null;
        _this.prefabChip = null;
        _this.bankerEffect = null;
        _this.multipleFrame = [];
        _this.animAllIn = null;
        _this.animMaxBet = null;
        _this.lbWaiting = null;
        _this.drawEfected = null;
        _this.bgPoint = null;
        _this.bgPointLose = null;
        _this.bgShan8 = null;
        _this.bgShan9 = null;
        _this.bgShanSap = null;
        _this.lbPoint = null;
        _this.multiple = null;
        _this.waitingOpen = null;
        _this._isBanker = false;
        return _this;
      }
      Player.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this._target = Shan_GameController_1.default.instance;
        this.lbBetAmount && (this.lbBetAmount.node.parent.active = false);
      };
      Player.prototype.showComputerPlay = function() {
        this._data.userName = "compute playing";
        this.lbName.string = this._data.userName;
      };
      Player.prototype.setBaseBetAmount = function(value) {
        this._baseBetAmount = value;
      };
      Player.prototype.updateBetAmount = function(value) {
        this._data.betAmount = value;
      };
      Player.prototype.getBetAmount = function() {
        return this._data.betAmount || 0;
      };
      Player.prototype.bet = function(betAmount, remainMoney) {
        this._data.betAmount = betAmount;
        this._data.money = remainMoney;
        this.vibrateAvatar();
      };
      Player.prototype.setBanker = function(boolean) {
        this._isBanker = boolean;
        if (this.bankerEffect) {
          this.bankerEffect.active = boolean;
          this.bankerEffect.setScale(0);
          cc.tween(this.bankerEffect).to(.2, {
            scale: 1
          }).start();
        }
      };
      Player.prototype.clean = function() {
        _super.prototype.clean.call(this);
        this.bgBet && (this.bgBet.active = false);
        this.multiple.node.active = false;
        this.bgPoint.active = false;
        this.bgShan8.node.active = false;
        this.bgShan9.node.active = false;
        this.bgShanSap.node.active = false;
        this._data.betAmount = 0;
        this._isShow = false;
        this.drawEfected && (this.drawEfected.active = false);
        this.setDarkMode(false);
        this.showAllInAnim(false);
        this.showAMaxBetAnim(false);
        this.showWaitingNewMatch(false);
      };
      Player.prototype.setShow = function(isShow) {
        this._isShow = isShow;
      };
      Player.prototype.showAllCards = function() {
        this.setVisibleWatingOpenCards(false);
        if (0 == this._cards.length || 0 == this._cardData.length || this._isShow) return;
        this._isShow = true;
        0 == this.localChair && cc.log("showAllCards", this._cards.length);
        for (var i = 0; i < this._cards.length; i++) {
          var c = this._cards[i];
          c.setId(this._cardData[i]);
          c.node.stopAllActions();
        }
        if (this._isSpecicalGroup()) this._showSpecicalHand(); else {
          this._showNomalHand();
          this._gameLayer.shanKoeMeeSound.playShowAllCards();
        }
      };
      Player.prototype._showCardGroup = function() {
        var group = new ShanCardGroup_1.default();
        group.setCards(this._cards);
        var scale = this._cards[0].getTargetScale() || this._cards[0].scale;
        var animScale = scale;
        0 != this.localChair && (animScale *= 1.2);
        if (group.getGroupName().valueOf() == ShanCardGroupName_1.default.NONE.valueOf()) {
          this.bgPoint.active = true;
          if (10 == group.getPoint()) {
            this.lbPoint.string = "\u17a2\u17bb\u1784\u1794\u17b8\u178a\u17be\u1798";
            this.lbPoint.node.y = 4;
          } else {
            this.lbPoint.string = group.getPoint() + " \u1782\u17d2\u179a\u17b6\u1794\u17cb";
            this.lbPoint.node.y = 4;
          }
          this.bgPoint.scaleX = 0;
          this.bgPoint.scaleY = scale;
          cc.tween(this.bgPoint).to(.15, {
            opacity: 255,
            scaleX: scale
          }, {
            easing: "backIn"
          }).start();
          return this.bgPoint;
        }
        if (group.getGroupName().valueOf() != ShanCardGroupName_1.default.SHAN.valueOf()) {
          this.bgPoint.active = false;
          this.bgShanSap.node.active = true;
          this.bgShanSap.node.scale = animScale;
          this.bgShanSap.animation = "Cam";
          this._gameLayer.shanKoeMeeSound.playThreeOfAKind();
          return this.bgShanSap.node;
        }
        this.bgPoint.active = false;
        this.lbPoint.string = "";
        if (8 == group.getPoint()) {
          this.bgShan8.node.active = true;
          this.bgShan8.node.scale = animScale;
          this.bgShan8.animation = "Cam";
          0 === this.localChair && this._gameLayer.shanKoeMeeSound.playShan8();
          return this.bgShan8.node;
        }
        if (9 == group.getPoint()) {
          this.bgShan9.node.active = true;
          this.bgShan9.node.scale = animScale;
          this.bgShan9.animation = "Cam";
          0 === this.localChair && this._gameLayer.shanKoeMeeSound.playShan9();
          return this.bgShan9.node;
        }
      };
      Player.prototype.showGroupName = function(scale, isSpecial) {
        cc.log("showGroupName", this._cards);
        scale = scale || 1;
        if (this._cards[0]) {
          var leftPos = this._cards[0].node.getPosition();
          var rightPos = this._cards[this._cards.length - 1].node.getPosition();
          var pos = cc.v2((leftPos.x + rightPos.x) / 2, leftPos.y - (this._cards[0].node.height / 2 - 5) * this._cards[0].node.scale);
          var cardGroupNode = this._showCardGroup();
          var newPos = cardGroupNode.parent.convertToNodeSpaceAR(this._cards[0].node.parent.convertToWorldSpaceAR(pos));
          cardGroupNode.x = newPos.x;
        }
      };
      Player.prototype._isSpecicalGroup = function() {
        var group = new ShanCardGroup_1.default();
        group.setCards(this._cards);
        return group.getGroupName().valueOf() != ShanCardGroupName_1.default.NONE.valueOf();
      };
      Player.prototype.showMultiple = function() {
        var group = new ShanCardGroup_1.default();
        group.setCards(this._cards);
        var _num = group.getMultiple();
        this.multiple.node.active = false;
        cc.log("showMultiple: " + _num);
        switch (_num) {
         case 1:
          this.multiple.node.active = false;
          break;

         case 2:
          this.multiple.node.active = true;
          this.multiple.spriteFrame = this.multipleFrame[0];
          break;

         case 3:
          this.multiple.node.active = true;
          this.multiple.spriteFrame = this.multipleFrame[1];
          break;

         case 5:
          this.multiple.node.active = true;
          this.multiple.spriteFrame = this.multipleFrame[2];
        }
        var scale = this._cards[0] ? this._cards[0].node.scale : 1;
        var cardLast = this._cards[this._cards.length - 1];
        var position = cc.v2(cardLast.node.x + .45 * cardLast.node.getContentSize().width * scale, cardLast.node.y + .4 * cardLast.node.getContentSize().height);
        this.multiple.node.setPosition(position);
      };
      Player.prototype.hideGroupName = function() {
        this.multiple.node.active = false;
        this.bgPoint.active = false;
        this.bgShan8.node.active = false;
        this.bgShan9.node.active = false;
        this.bgShanSap.node.active = false;
      };
      Player.prototype.instantlyAddCard = function(data, isShow, nodeHasCard) {
        var _this = this;
        cc.log("instantlyAddCard", data, isShow);
        if (this._data.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME || !data) return;
        var numberOfCard = isShow ? data.length : data;
        isShow && (this._cardData = data);
        var newPos = this._getCardPos();
        var offsetX = Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
        for (var i = 0; i < numberOfCard; i++) {
          var c = cc.instantiate(this.prefabCard);
          c.setPosition(cc.v2(newPos.x + offsetX * i, newPos.y));
          c.scale = Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          nodeHasCard.addChild(c);
          var card = c.getComponent(Shan_Card_1.default);
          if (isShow) {
            card.setId(data[i]);
            card.show();
          }
          this._addCard(card);
        }
        cc.tween(nodeHasCard).delay(.1).call(function() {
          _this._updateCardRotation();
        }).start();
        if (isShow) {
          this.showGroupName();
          this.showMultiple();
        }
        cc.log("checker", this._cards.length, this._cardData.length, data, isShow);
        return this._cards;
      };
      Player.prototype.addCard = function(card) {
        if (this._addCard(card)) {
          var cardStartPosX = this._getCardStartPosX();
          var offsetX = Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          var newPos = cc.v2(cardStartPosX + offsetX * (this._cards.length - 1), this._getCardPos().y);
          card.setTargetPos(newPos);
          card.setTargetScale(Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE);
          card.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, newPos), cc.rotateBy(.2, 180), cc.scaleTo(.2, Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE)), cc.callFunc(function() {
            this._updateCardRotation();
          }.bind(this))));
        }
      };
      Player.prototype._updateCardRotation = function() {
        if (this._cards.length > 1) for (var i = 0; i < this._cards.length; i++) {
          this._cards[i].node.angle = Shan_Contants_1.Constant.SHANKOEMEE_ROTATION_CARD[this._cards.length - Shan_Contants_1.Constant.SHANKOEMEE_MIN_NUM_CARD][i];
          this._cards[i].node.y = this._getCardPos().y + Shan_Contants_1.Constant.SHANKOEMEE_POS_Y_CARD[this._cards.length - Shan_Contants_1.Constant.SHANKOEMEE_MIN_NUM_CARD][i];
        }
      };
      Player.prototype._getCardStartPosX = function() {
        var newPos = cc.v2(0, 0);
        newPos = 4 == this.localChair || 5 == this.localChair || 6 == this.localChair ? cc.v2(-125, 0) : (1 == this.localChair || 2 == this.localChair || 3 == this.localChair, 
        cc.v2(100, 0));
        return this.node.getPosition().x + newPos.x;
      };
      Player.prototype._getCardPos = function() {
        var newPos = cc.v2();
        newPos = 4 == this.localChair || 5 == this.localChair || 6 == this.localChair ? cc.v2(-125, 0) : 1 == this.localChair || 2 == this.localChair || 3 == this.localChair ? cc.v2(100, 0) : 7 == this.localChair ? cc.v2(115, 0) : cc.v2(100, 0);
        return this.node.getPosition().add(newPos);
      };
      Player.prototype.hideBet = function() {
        this.bgBet && (this.bgBet.active = false);
      };
      Player.prototype.showWinEffect = function() {
        this.winEffect.node.active = true;
        this.winEffect.animation = "win_text";
        this.winEffectAvatar.node.active = true;
        this.winEffectAvatar.animation = "animation";
        0 === this.localChair && this._gameLayer.shanKoeMeeSound.playWin();
      };
      Player.prototype.showLoseEffect = function() {
        var pos = this.lostEffect.getPosition();
        this.lostEffect.active = true;
        this.lostEffect.setPosition(pos.add(cc.v2(0, 60)));
        cc.tween(this.lostEffect).to(.3, {
          y: pos.y
        }, {
          easing: "sineInOut"
        }).start();
        0 === this.localChair && this._gameLayer.shanKoeMeeSound.playLose();
        this._cards.forEach(function(c) {
          c.setDarkMode(true);
        });
        this.setDarkMode(true);
      };
      Player.prototype.showDrawEffect = function() {
        var pos = this.drawEfected.getPosition();
        this.drawEfected.active = true;
        this.drawEfected.setPosition(pos.add(cc.v2(0, 60)));
        cc.tween(this.drawEfected).to(.3, {
          y: pos.y
        }, {
          easing: "sineInOut"
        }).start();
        0 === this.localChair && this._gameLayer.shanKoeMeeSound.playTie();
      };
      Player.prototype.showViewBet = function(bet, roomBet, disableEffect) {
        if (disableEffect) {
          this.bgBet.active = true;
          this.lbBetAmount.string = Shan_Utils_1.default.shorten(this.getBetAmount(), 2);
        } else {
          var arrC = Shan_Utils_1.getArrChipFromMoney(bet);
          for (var i = 0; i < arrC.length; i++) {
            var chip = cc.instantiate(this.prefabChip).getComponent(Shan_Chip_1.default);
            chip.setValues(arrC[i]);
            chip.node.scale = .5;
            chip.node.active = true;
            chip.node.opacity = 0;
            chip.node.setPosition(this.lbMoney.node.getPosition());
            this.node.addChild(chip.node);
            var pos = this.localChair > 3 ? this.bgBet.getPosition().sub(cc.v2(this.bgBet.width / 2 - 15, 0)) : this.bgBet.getPosition().add(cc.v2(this.bgBet.width / 2 - 15, 0));
            chip.node.runAction(cc.sequence(cc.spawn(cc.moveTo(Shan_ChipGroup_1.default.TIME_FADE_CHIP, pos).easing(cc.easeOut(1)), cc.fadeIn(Shan_ChipGroup_1.default.TIME_FADE_CHIP)), cc.removeSelf(), cc.callFunc(function() {
              this.lbBetAmount.string = Shan_Utils_1.default.shorten(this.getBetAmount(), 2);
            }.bind(this))));
          }
          if (!this.bgBet.active) {
            this.bgBet.active = true;
            this.bgBet.opacity = 0;
            this.bgBet.runAction(cc.fadeIn(Shan_ChipGroup_1.default.TIME_FADE_CHIP));
          }
        }
      };
      Player.prototype.setVisibleWatingOpenCards = function(boolean) {
        this.waitingOpen.active = boolean;
        this.waitingOpen.x = this._getCardStartPosX();
      };
      Player.prototype._showNomalHand = function() {
        var _loop_1 = function(i) {
          var c = this_1._cards[i];
          c.node.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_BASE_Z_ORDER + i;
          scale = c.getTargetScale() || c.scale;
          cardStartPosX = this_1._getCardStartPosX();
          offsetX = Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * Shan_Contants_1.Constant.SHANKOEMEE_CARD_DEALING_SCALE;
          0 === this_1.localChair && (offsetX = Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE);
          newPos = cc.v2(cardStartPosX + offsetX * i, this_1._getCardPos().y + Shan_Contants_1.Constant.SHANKOEMEE_POS_Y_CARD[this_1._cards.length - Shan_Contants_1.Constant.SHANKOEMEE_MIN_NUM_CARD][i]);
          if (c.node) {
            var toPositon = cc.v2(cardStartPosX, this_1._getCardPos().y);
            cc.tween(c.node).to(.1, {
              angle: Shan_Contants_1.Constant.SHANKOEMEE_ROTATION_CARD[this_1._cards.length - Shan_Contants_1.Constant.SHANKOEMEE_MIN_NUM_CARD][0],
              x: toPositon.x,
              y: toPositon.y
            }).to(.05, {
              scaleX: 0,
              scaleY: scale
            }, {
              easing: "backOut"
            }).call(function() {
              c.show();
            }).to(.05, {
              scale: scale
            }, {
              easing: "backIn"
            }).delay(.02).to(.1, {
              angle: Shan_Contants_1.Constant.SHANKOEMEE_ROTATION_CARD[this_1._cards.length - Shan_Contants_1.Constant.SHANKOEMEE_MIN_NUM_CARD][i],
              x: newPos.x,
              y: newPos.y
            }).call(function() {
              if (i == this._cards.length - 1) {
                this.showGroupName(scale, false);
                this.showMultiple();
              }
              this._updateCardRotation();
            }.bind(this_1)).start();
          }
        };
        var this_1 = this, scale, cardStartPosX, offsetX, newPos;
        for (var i = 0; i < this._cards.length; i++) _loop_1(i);
      };
      Player.prototype._showSpecicalHand = function() {
        var _loop_2 = function(i) {
          var c = this_2._cards[i];
          c.node.zIndex = Shan_Contants_1.Constant.SHANKOEMEE_CARD_BASE_Z_ORDER + i;
          scale = c.getTargetScale() || c.scale;
          c.node && cc.tween(c.node).call(function() {
            c.show();
          }).to(.15, {
            skewX: 0,
            skewY: 0,
            scaleX: 1.8 * scale,
            scaleY: 1.8 * scale
          }, {
            easing: "backOut"
          }).delay(.02).to(.15, {
            scale: scale
          }, {
            easing: "backIn"
          }).call(function() {
            c.setTargetScale(0);
            c.node.skewX = c.node.skewY = 0;
            if (i == this._cards.length - 1) {
              this.showGroupName(scale, true);
              this.showMultiple();
            }
          }.bind(this_2)).start();
        };
        var this_2 = this, scale;
        for (var i = 0; i < this._cards.length; i++) _loop_2(i);
      };
      Player.prototype.setDarkMode = function(boolean) {
        if (boolean) {
          this.bgPointLose.active = true;
          this.lbPoint.node.color = new cc.Color(0, 0, 0, 255);
          this.avatar && (this.avatar.node.color = new cc.Color(80, 80, 80, 255));
        } else {
          this.bgPointLose.active = false;
          this.lbPoint.node.color = new cc.Color(139, 65, 21, 255);
          this.avatar && (this.avatar.node.color = new cc.Color(255, 255, 255, 255));
        }
      };
      Player.prototype.showBurnBorderAnim = function() {
        var node = new cc.Node("New Sprite");
        var sprite = node.addComponent(cc.Sprite);
        Shan_Utils_1.setTextureFromRes(sprite, "res/textures/in_light_1");
        for (var i = 0; i < 6; i++) {
          var nodeClone = cc.instantiate(node);
          this.node.addChild(nodeClone);
          cc.tween(nodeClone).delay(.1 * i).to(.3, {
            opacity: 0,
            scale: 1.5
          }).delay(.9).to(.3, {
            opacity: 255,
            scale: 1
          }).removeSelf().start();
        }
      };
      Player.prototype.showAllInAnim = function(boolean) {
        if (this.animAllIn) {
          this.animAllIn.node.active = boolean;
          this.animAllIn.animation = "Allin";
        }
      };
      Player.prototype.showAMaxBetAnim = function(boolean) {
        if (this.animMaxBet) {
          this.animMaxBet.node.active = boolean;
          this.animMaxBet.animation = "animation";
        }
      };
      Player.prototype.showWaitingNewMatch = function(boolean) {
        this.setDarkMode(boolean);
        this.lbWaiting && (this.lbWaiting.node.active = boolean);
      };
      __decorate([ property(cc.Node) ], Player.prototype, "bgBet", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lbBetAmount", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "status", void 0);
      __decorate([ property(cc.Prefab) ], Player.prototype, "prefabChip", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "bankerEffect", void 0);
      __decorate([ property(cc.SpriteFrame) ], Player.prototype, "multipleFrame", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "animAllIn", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "animMaxBet", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lbWaiting", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "drawEfected", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(Shan_PlayerNode_1.default);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "./Model/ShanCardGroup": "ShanCardGroup",
    "./Model/ShanCardGroupName": "ShanCardGroupName",
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.Contants": "Shan.Contants",
    "./Shan.GameController": "Shan.GameController",
    "./common/Shan.Card": "Shan.Card",
    "./common/Shan.Chip": "Shan.Chip",
    "./common/Shan.ChipGroup": "Shan.ChipGroup",
    "./common/Shan.PlayerNode": "Shan.PlayerNode",
    "./common/Shan.Utils": "Shan.Utils"
  } ],
  "Shan.PlayingNode": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7662boNI45IILoIlsJuWwef", "Shan.PlayingNode");
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
    var Shan_Utils_1 = require("./common/Shan.Utils");
    var Shan_NetworkClient_1 = require("./Shan.NetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayingNode = function(_super) {
      __extends(PlayingNode, _super);
      function PlayingNode() {
        var _this = _super.call(this) || this;
        _this.lbBtns = [];
        _this.rebetNode = null;
        _this.lbAllIn = null;
        _this.lbMaxBet = null;
        _this.lbRebet = null;
        _this._lastBet = 0;
        _this._tempLastBet = 0;
        return _this;
      }
      PlayingNode.prototype.setData = function(ws, potValue, betValue) {
        this._ws = ws;
        var arr = [ 1, 2, 3, 4 ];
        arr = potValue < 40 * betValue ? [ 1, 2, 5, 10 ] : potValue < 100 * betValue ? [ 1, 5, 10, 20 ] : [ 1, 5, 10, 50 ];
        for (var i = 0; i < arr.length; i++) {
          this.lbBtns[i].string = Shan_Utils_1.default.shorten(arr[i] * betValue, 1);
          this.lbBtns[i].node.parent.userData = arr[i] * betValue;
        }
        this._lastBet > 0 ? this.rebetNode.active = true : this.rebetNode.active = false;
        if (Shan_Utils_1.default.getChip() <= potValue) {
          this.lbAllIn.active = true;
          this.lbMaxBet.active = false;
        } else {
          this.lbAllIn.active = false;
          this.lbMaxBet.active = true;
        }
      };
      PlayingNode.prototype.onBtnClicked = function(event) {
        Shan_NetworkClient_1.default.getInstance().bet(event.target.userData);
      };
      PlayingNode.prototype.onReBetClicked = function() {
        this._ws.bet(this._lastBet);
      };
      PlayingNode.prototype.onAllInClicked = function() {
        this._ws.bet(-1);
      };
      PlayingNode.prototype.setLastBet = function(value) {
        if (-1 == value) {
          this.lbRebet.string = Shan_Utils_1.NumberUtils.format(this._tempLastBet);
          this._lastBet = this._tempLastBet;
        } else if (0 == value) {
          this._lastBet = 0;
          this.lbRebet.string = "";
          this.rebetNode.active = false;
        }
        this._tempLastBet = value;
        cc.log("setLastBet", value, this._lastBet, this.lbRebet.string);
      };
      PlayingNode.prototype.setActive = function(boolean) {
        var _this = this;
        var pos = cc.v2(0, 0);
        this.node.stopAllActions();
        if (boolean) {
          this.node.setPosition(cc.v2(pos.x, pos.y - 100));
          this.node.active = true;
          this.node.opacity = 255;
          cc.tween(this.node).to(.3, {
            x: pos.x,
            y: pos.y
          }, {
            easing: "backIn"
          }).start();
        } else {
          var tmpPos = cc.v2(pos.x, pos.y - 100);
          cc.tween(this.node).to(.2, {
            x: tmpPos.x,
            y: tmpPos.y
          }, {
            easing: "backOut"
          }).call(function() {
            _this.node.opacity = 0;
            _this.node.setPosition(pos);
            _this.node.active = false;
          }).start();
        }
      };
      __decorate([ property(cc.Label) ], PlayingNode.prototype, "lbBtns", void 0);
      __decorate([ property(cc.Node) ], PlayingNode.prototype, "rebetNode", void 0);
      __decorate([ property(cc.Node) ], PlayingNode.prototype, "lbAllIn", void 0);
      __decorate([ property(cc.Node) ], PlayingNode.prototype, "lbMaxBet", void 0);
      __decorate([ property(cc.Label) ], PlayingNode.prototype, "lbRebet", void 0);
      PlayingNode = __decorate([ ccclass ], PlayingNode);
      return PlayingNode;
    }(cc.Component);
    exports.default = PlayingNode;
    cc._RF.pop();
  }, {
    "./Shan.NetworkClient": "Shan.NetworkClient",
    "./common/Shan.Utils": "Shan.Utils"
  } ],
  "Shan.PopupCreateRoom": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "778ae9H2JdFvrr5/uFG9jul", "Shan.PopupCreateRoom");
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
    var Shan_CreateRoomItem_1 = require("./Shan.CreateRoomItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupCreateRoom = function(_super) {
      __extends(PopupCreateRoom, _super);
      function PopupCreateRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.item = null;
        _this.nListContent = null;
        _this.cbCreateRoom = null;
        _this.tmpItem = null;
        _this.currentSelected = 0;
        _this.listRoom = [];
        return _this;
      }
      PopupCreateRoom.prototype.onLoad = function() {
        this.tmpItem = this.item;
      };
      PopupCreateRoom.prototype.start = function() {};
      PopupCreateRoom.prototype.setData = function(data) {
        this.data = data;
        this.reloadListView();
      };
      PopupCreateRoom.prototype.reloadListView = function() {
        var _this = this;
        this.listRoom = [];
        this.nListContent.removeAllChildren();
        for (var i = 0; i < this.data.length; i++) {
          var tmp = cc.instantiate(this.tmpItem);
          tmp.active = true;
          var script = tmp.getComponent(Shan_CreateRoomItem_1.default);
          script.setData(this.data[i], i);
          script.cbOnSelect = function(it) {
            _this.onSelectRoom(it);
          };
          this.nListContent.addChild(tmp);
          this.listRoom.push(script);
        }
        this.listRoom.length > 0 && this.onSelectRoom(this.listRoom[0]);
      };
      PopupCreateRoom.prototype.onClose = function() {
        this.node.active = false;
      };
      PopupCreateRoom.prototype.onCreateRoom = function() {
        this.cbCreateRoom && this.cbCreateRoom.emit([ this.listRoom[this.currentSelected].data ]);
      };
      PopupCreateRoom.prototype.onSelectRoom = function(item) {
        for (var i = 0; i < this.listRoom.length; i++) if (i === item.id) {
          this.listRoom[i].node.opacity = 255;
          this.currentSelected = item.id;
        } else this.listRoom[i].node.opacity = 125;
      };
      __decorate([ property(cc.Label) ], PopupCreateRoom.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], PopupCreateRoom.prototype, "item", void 0);
      __decorate([ property(cc.Node) ], PopupCreateRoom.prototype, "nListContent", void 0);
      __decorate([ property(cc.Component.EventHandler) ], PopupCreateRoom.prototype, "cbCreateRoom", void 0);
      PopupCreateRoom = __decorate([ ccclass ], PopupCreateRoom);
      return PopupCreateRoom;
    }(cc.Component);
    exports.default = PopupCreateRoom;
    cc._RF.pop();
  }, {
    "./Shan.CreateRoomItem": "Shan.CreateRoomItem"
  } ],
  "Shan.PopupMessage": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59e08dcS8FHSqO05tLqAwo6", "Shan.PopupMessage");
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
    var Shan_Utils_1 = require("./Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupMessage = function(_super) {
      __extends(PopupMessage, _super);
      function PopupMessage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgMs = null;
        _this.lbMs = null;
        return _this;
      }
      PopupMessage.prototype.start = function() {};
      PopupMessage.prototype.show = function(ms) {
        this.lbMs.string = Shan_Utils_1.StringUtils.shorten(ms, 1e3);
        this.bgMs.node.height = this.lbMs.node.height + 50;
        this.node.opacity = 0;
        this.node.width = this.bgMs.node.width;
        this.node.height = this.bgMs.node.height;
        cc.tween(this.node).to(.1, {
          opacity: 255
        }).delay(3).to(.1, {
          opacity: 0
        }).removeSelf().start();
      };
      __decorate([ property(cc.Sprite) ], PopupMessage.prototype, "bgMs", void 0);
      __decorate([ property(cc.Label) ], PopupMessage.prototype, "lbMs", void 0);
      PopupMessage = __decorate([ ccclass ], PopupMessage);
      return PopupMessage;
    }(cc.Component);
    exports.default = PopupMessage;
    cc._RF.pop();
  }, {
    "./Shan.Utils": "Shan.Utils"
  } ],
  "Shan.PopupPlayerInfo": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86f87caVORHdYrhto14jO1P", "Shan.PopupPlayerInfo");
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
    var Shan_BasePopup_1 = require("../Model/Shan.BasePopup");
    var Shan_InteractItem_1 = require("./Shan.InteractItem");
    var Shan_Utils_1 = require("./Shan.Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupPlayerInfo = function(_super) {
      __extends(PopupPlayerInfo, _super);
      function PopupPlayerInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.prefabItem = null;
        _this.prefabItemAnim = null;
        _this.listView = null;
        _this.lbName = null;
        _this.lbChip = null;
        _this.lbId = null;
        _this.avatar = null;
        _this.btnAddFriend = null;
        _this.btnChat = null;
        _this.prefabSendMail = null;
        return _this;
      }
      PopupPlayerInfo.prototype.onLoad = function() {
        this.items = [];
        var arrRotate = [ 1, 0, 0, 0, 1, 0, 1, 1 ];
        for (var i = 0; i < 7; i++) {
          this.items.push({
            id: i + 1,
            imgPath: "interact/expression_icon-" + (i + 1),
            rotate: arrRotate[i]
          });
          var node = cc.instantiate(this.prefabItem);
          this.listView.content.addChild(node);
          node.x = 65 + 130 * i;
          var item = node.getComponent(Shan_InteractItem_1.default);
          item.setData(this.onItemClicked.bind(this), this.items[i].id, this.items[i].imgPath);
        }
        this.listView.content.width = 100 * this.items.length;
      };
      PopupPlayerInfo.prototype.onItemClicked = function(itemId) {
        this.onCloseDone();
      };
      PopupPlayerInfo.prototype.setData = function(gameLayer, localChair, chair, playerData) {
        this._localChair = localChair;
        this._chair = chair;
        this._gameLayer = gameLayer;
        this._ws = gameLayer._ws;
        this._playerData = playerData;
        this.updateUiInfo(playerData);
      };
      PopupPlayerInfo.prototype.updateUiInfo = function(data) {
        cc.log("updateUiInfo", data);
        this.lbName.string = data.userName;
        this.lbChip.string = Shan_Utils_1.NumberUtils.format(data.money);
        this.lbId.string = data.userId > 0 ? data.userId : data.userId < -14777777 ? -data.userId : data.userId + 14623528;
      };
      PopupPlayerInfo.prototype.convertIdToAnimation = function(id) {
        var arrayAnimation = [ "nemtrung", "kiss", "votay", "hoahong", "nemdep", "heart", "cachua", "thuocno" ];
        return arrayAnimation[id - 1];
      };
      PopupPlayerInfo.prototype.onMessageClick = function() {
        return;
        var gameLayer;
        var node;
        var readmail;
      };
      PopupPlayerInfo.prototype.onAddFriendClick = function() {};
      PopupPlayerInfo.prototype.onClose = function() {
        _super.prototype.onClose.call(this);
      };
      __decorate([ property(cc.Prefab) ], PopupPlayerInfo.prototype, "prefabItem", void 0);
      __decorate([ property(cc.Prefab) ], PopupPlayerInfo.prototype, "prefabItemAnim", void 0);
      __decorate([ property(cc.ScrollView) ], PopupPlayerInfo.prototype, "listView", void 0);
      __decorate([ property(cc.Label) ], PopupPlayerInfo.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], PopupPlayerInfo.prototype, "lbChip", void 0);
      __decorate([ property(cc.Label) ], PopupPlayerInfo.prototype, "lbId", void 0);
      __decorate([ property(cc.Sprite) ], PopupPlayerInfo.prototype, "avatar", void 0);
      __decorate([ property(cc.Node) ], PopupPlayerInfo.prototype, "btnAddFriend", void 0);
      __decorate([ property(cc.Node) ], PopupPlayerInfo.prototype, "btnChat", void 0);
      __decorate([ property(cc.Prefab) ], PopupPlayerInfo.prototype, "prefabSendMail", void 0);
      PopupPlayerInfo = __decorate([ ccclass ], PopupPlayerInfo);
      return PopupPlayerInfo;
    }(Shan_BasePopup_1.default);
    exports.default = PopupPlayerInfo;
    cc._RF.pop();
  }, {
    "../Model/Shan.BasePopup": "Shan.BasePopup",
    "./Shan.InteractItem": "Shan.InteractItem",
    "./Shan.Utils": "Shan.Utils"
  } ],
  "Shan.Pot": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f92e+EZ8tPKqwzFa14DVZs", "Shan.Pot");
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
    var Pot = function(_super) {
      __extends(Pot, _super);
      function Pot() {
        var _this = _super.call(this) || this;
        _this.digits = [];
        _this.unit = null;
        _this._value = 0;
        _this._value = 0;
        return _this;
      }
      Pot.prototype.setValue = function(amount) {
        var tempValue = this._value;
        this._value = amount;
        this.updateUi(amount);
      };
      Pot.prototype.updateUi = function(amount) {
        if (this.unit) if (amount >= 1e7) {
          amount /= 1e3;
          this.unit.node.active = true;
          this.unit.string = "K";
        } else this.unit.node.active = false;
        var i = 0;
        while (amount > 0) {
          this.digits[i].string = amount % 10 + "";
          amount = Math.floor(amount / 10);
          i++;
        }
        while (i < this.digits.length) {
          this.digits[i].string = "0";
          i++;
        }
      };
      Pot.prototype.getValue = function() {
        return this._value;
      };
      __decorate([ property(cc.Label) ], Pot.prototype, "digits", void 0);
      __decorate([ property(cc.Label) ], Pot.prototype, "unit", void 0);
      Pot = __decorate([ ccclass ], Pot);
      return Pot;
    }(cc.Component);
    exports.default = Pot;
    cc._RF.pop();
  }, {} ],
  "Shan.ProgressBar": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed55dYleQlCxKynepIF9YHS", "Shan.ProgressBar");
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
    var ProgressBar = function(_super) {
      __extends(ProgressBar, _super);
      function ProgressBar() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ProgressBar = __decorate([ ccclass ], ProgressBar);
      return ProgressBar;
    }(cc.ProgressBar);
    exports.default = ProgressBar;
    cc._RF.pop();
  }, {} ],
  "Shan.Res": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2025Z1/BpG+qxN8eABxzN9", "Shan.Res");
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
    var Res = function(_super) {
      __extends(Res, _super);
      function Res() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardItem = null;
        _this.cards = [];
        return _this;
      }
      Res_1 = Res;
      Res.getInstance = function() {
        return this.instance;
      };
      Res.prototype.onLoad = function() {
        Res_1.instance = this;
        cc.game.addPersistRootNode(Res_1.instance.node);
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
      var Res_1;
      __decorate([ property(cc.Prefab) ], Res.prototype, "cardItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Res.prototype, "cards", void 0);
      Res = Res_1 = __decorate([ ccclass ], Res);
      return Res;
    }(cc.Component);
    exports.default = Res;
    cc._RF.pop();
  }, {} ],
  "Shan.Room": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1104qjouZKIrIiZqWWVDtp", "Shan.Room");
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
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_NetworkClient_1 = require("./Shan.NetworkClient");
    var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
    var Common_AudioManager_1 = require("../../Lobby/LobbyScript/Script/common/Common.AudioManager");
    var Shan_PopupCreateRoom_1 = require("./components/Shan.PopupCreateRoom");
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
      SoundManager = __decorate([ ccclass("Shan.Room.SoundManager") ], SoundManager);
      return SoundManager;
    }();
    exports.SoundManager = SoundManager;
    var ShanRoom = function(_super) {
      __extends(ShanRoom, _super);
      function ShanRoom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.prefabGame = null;
        _this.contentListRooms = null;
        _this.labelNickName = null;
        _this.labelCoin = null;
        _this.scrRoom = null;
        _this.UI_Playing = null;
        _this.uiInGamePr = null;
        _this.btnHideRoomFull = null;
        _this.edtFindRoom = null;
        _this.soundManager = null;
        _this.popupCreateRoom = null;
        _this.listDataRoom = [];
        _this.listFullRoom = [];
        _this.isInitedUIRoom = false;
        _this.cardFrames = new Array(53);
        _this.isSortRoom = false;
        return _this;
      }
      ShanRoom_1 = ShanRoom;
      ShanRoom.prototype.onLoad = function() {
        ShanRoom_1.instance = this;
        null != Shan_NetworkClient_1.default.getInstance().ws && (Shan_NetworkClient_1.default.getInstance()._onCloses = []);
        this.loadCardFrame();
      };
      ShanRoom.prototype.loadCardFrame = function() {
        var _this = this;
        var _loop_1 = function(i) {
          var path = "res/textures/card/labai_" + i;
          try {
            cc.assetManager.getBundle("Shan").load(path, cc.SpriteFrame, function(err1, spriteFrame) {
              _this.cardFrames[i] = spriteFrame;
            });
          } catch (e) {
            cc.log("Load card fail ", path);
          }
        };
        for (var i = 0; i < 53; i++) _loop_1(i);
      };
      ShanRoom.prototype.start = function() {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("\u1006\u102c\u1017\u102c\u101e\u102d\u102f\u1037 \u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1014\u1031\u101e\u100a\u103a\u104b...");
        Shan_NetworkClient_1.default.getInstance().addOnOpen(function() {
          App_1.default.instance.showErrLoading("\u101c\u1031\u102c\u101c\u1031\u102c\u1006\u101a\u103a \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b...");
          Shan_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        Shan_NetworkClient_1.default.getInstance().addOnClose(function() {
          Shan_NetworkClient_1.default.getInstance().isForceClose && App_1.default.instance.loadScene("Lobby");
        }, this);
        Shan_NetworkClient_1.default.getInstance().connect();
        this.soundManager.playBgMusic();
      };
      ShanRoom.prototype.showUIRooms = function() {
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
      ShanRoom.prototype.refeshListRoom = function() {
        App_1.default.instance.showLoading(true);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetListRoom());
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetGameConfig());
      };
      ShanRoom.prototype.setupListener = function() {
        var _this = this;
        Shan_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Shan_Cmd_1.default.Code.LOGIN:
            cc.log("Login shan success");
            _this.refeshListRoom();
            Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdReconnectRoom());
            break;

           case Shan_Cmd_1.default.Code.TOPSERVER:
            var res = new Shan_Cmd_1.default.ReceivedTopServer(data);
            var rankType = res["rankType"];
            var topDay_money = res["topDay_money"];
            var topWeek_money = res["topWeek_money"];
            var topMonth_money = res["topMonth_money"];
            break;

           case Shan_Cmd_1.default.Code.CMD_PINGPONG:
            break;

           case Shan_Cmd_1.default.Code.CMD_JOIN_ROOM:
            Utils_1.default.Log("Shan CMD_JOIN_ROOM");
            break;

           case Shan_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
            App_1.default.instance.showLoading(false);
            cc.log("Shan CMD_RECONNECT_ROOM");
            break;

           case Shan_Cmd_1.default.Code.MONEY_BET_CONFIG:
            var res = new Shan_Cmd_1.default.ReceivedGameConfig(data);
            _this.gameConfig = res;
            _this.gameConfig.list.sort(function(x, y) {
              return x.moneyBet - y.moneyBet;
            });
            App_1.default.instance.showLoading(false);
            cc.log("Shan MONEY_BET_CONFIG " + JSON.stringify(res));
            break;

           case Shan_Cmd_1.default.Code.JOIN_ROOM_FAIL:
            var res = new Shan_Cmd_1.default.ReceivedJoinRoomFail(data);
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

           case Shan_Cmd_1.default.Code.GET_LIST_ROOM:
            var res = new Shan_Cmd_1.default.ReceivedGetListRoom(data);
            cc.log("Shan Room data " + JSON.stringify(res));
            _this.listDataRoom = res.list;
            _this.listDataRoom.sort(function(x, y) {
              return x.moneyBet - y.moneyBet;
            });
            _this.reloadListRoom(_this.listDataRoom);
            break;

           case Shan_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
            break;

           case Shan_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
            var res = new Shan_Cmd_1.default.ReceivedJoinRoomSucceed(data);
            cc.log("Shan JOIN_ROOM_SUCCESS ", JSON.stringify(res));
            break;

           case Shan_Cmd_1.default.Code.MATCH_INFO:
            var res = new Shan_Cmd_1.default.ReceivedMatchInfo(data);
            var cb = function(res) {
              _this.UI_Playing.getComponent("Shan.Controller").onWsMatchInfo(res);
            };
            _this.onWsMatchInfo(res.data);
            break;

           case Shan_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedGameInfo(data);
            var cb = function(res) {
              _this.UI_Playing.getComponent("Shan.Controller").actReJoinRoom(res);
            };
            _this.showUIPlaying(res, cb);
            break;

           case Shan_Cmd_1.default.Code.LOGOUT:
          }
        }, this);
      };
      ShanRoom.prototype.showUIPlaying = function(res, cb) {
        if (null == this.UI_Playing) {
          App_1.default.instance.showLoading(true);
          App_1.default.instance.showLoading(false);
          this.UI_Playing = cc.instantiate(this.prefabGame);
          this.UI_Playing.parent = this.node.parent;
          this.UI_Playing.active = true;
          this.node.active = false;
          cb(res);
          this.closeUIRoom();
        } else {
          App_1.default.instance.showLoading(false);
          this.UI_Playing.active = true;
          this.node.active = false;
          cb(res);
        }
      };
      ShanRoom.prototype.onWsMatchInfo = function(res) {
        cc.log("ON ws match info");
        if (null == this.UI_Playing) {
          App_1.default.instance.showLoading(true);
          App_1.default.instance.showLoading(false);
          var tmp = cc.instantiate(this.prefabGame);
          this.node.parent.addChild(tmp);
          this.node.active = false;
          tmp.active = true;
          tmp.getComponent("Shan.GameController").init(Shan_NetworkClient_1.default.getInstance(), this);
          tmp.getComponent("Shan.GameController").restoreGame(res);
          this.closeUIRoom();
        } else {
          App_1.default.instance.showLoading(false);
          this.UI_Playing.active = true;
          this.node.active = false;
          this.UI_Playing.getComponent("Shan.Controller").restoreGame(res);
        }
      };
      ShanRoom.prototype.createRoom = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetGameConfig());
        this.popupCreateRoom.node.active = true;
        this.popupCreateRoom.setData(this.gameConfig.list.filter(function(item) {
          return item.moneyType === Configs_1.default.App.MONEY_TYPE;
        }) || []);
      };
      ShanRoom.prototype.hideCreateRoom = function() {
        this.popupCreateRoom.node.active = false;
      };
      ShanRoom.prototype.cbCreateRoom = function(data) {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendCreateRoom(Configs_1.default.App.MONEY_TYPE, 7, data.moneyBet, 0, 7, "", "", data.moneyRequire));
      };
      ShanRoom.prototype.getGameConfig = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetGameConfig());
      };
      ShanRoom.prototype.hideRoomFull = function() {
        var _this = this;
        this.listFullRoom = [];
        if (this.btnHideRoomFull.isChecked) {
          this.listDataRoom.forEach(function(data) {
            data.roomInfo["userCount"] == data.roomInfo["maxUserPerRoom"] && _this.listFullRoom.push(data);
          });
          this.reloadListRoom(this.listFullRoom);
        } else this.reloadListRoom(this.listDataRoom);
      };
      ShanRoom.prototype.findRoomId = function() {
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
      ShanRoom.prototype.backToLobby = function() {
        Shan_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
      };
      ShanRoom.prototype.reloadListRoom = function(listDataRoom) {
        this.listDataRoom = listDataRoom;
        App_1.default.instance.showLoading(false);
        var cb = function(item, itemData) {
          item.getComponent("Shan.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, listDataRoom);
      };
      ShanRoom.prototype.onBtnSortRoomId = function() {
        false == this.isSortRoom ? this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return x.id - y.id;
        }) : this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return y.id - x.id;
        });
        this.isSortRoom = !this.isSortRoom;
        var cb = function(item, itemData) {
          item.getComponent("Shan.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
      };
      ShanRoom.prototype.onBtnSortRoomMoney = function() {
        false == this.isSortMoney ? this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return x.requiredMoney - y.requiredMoney;
        }) : this.listDataRoom && this.listDataRoom.sort(function(x, y) {
          return y.requiredMoney - x.requiredMoney;
        });
        this.isSortMoney = !this.isSortMoney;
        var cb = function(item, itemData) {
          item.getComponent("Shan.ItemRoom").initItem(itemData);
          item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
      };
      ShanRoom.prototype.joinRoom = function(info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
          App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
          return;
        }
        App_1.default.instance.showLoading(true);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      ShanRoom.prototype.playingNow = function() {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
          var roomItem = this.contentListRooms.children[index].getComponent("Shan.ItemRoom");
          roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin && arrRoomOkMoney.push(index);
        }
        if (arrRoomOkMoney.length > 0) {
          var roomCrowed = arrRoomOkMoney[0];
          for (var index = 0; index < arrRoomOkMoney.length; index++) {
            var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("Shan.ItemRoom");
            var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("Shan.ItemRoom");
            roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"] && (roomCrowed = arrRoomOkMoney[index]);
          }
          var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("Shan.ItemRoom");
          this.joinRoom(roomChoosed.roomInfo);
        } else App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
      };
      ShanRoom.prototype.closeUIRoom = function() {
        this.node.active = false;
      };
      var ShanRoom_1;
      ShanRoom.instance = null;
      __decorate([ property(cc.Prefab) ], ShanRoom.prototype, "prefabGame", void 0);
      __decorate([ property(cc.Node) ], ShanRoom.prototype, "contentListRooms", void 0);
      __decorate([ property(cc.Label) ], ShanRoom.prototype, "labelNickName", void 0);
      __decorate([ property(cc.Label) ], ShanRoom.prototype, "labelCoin", void 0);
      __decorate([ property(cc.ScrollView) ], ShanRoom.prototype, "scrRoom", void 0);
      __decorate([ property(cc.Node) ], ShanRoom.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Prefab) ], ShanRoom.prototype, "uiInGamePr", void 0);
      __decorate([ property(cc.Toggle) ], ShanRoom.prototype, "btnHideRoomFull", void 0);
      __decorate([ property(cc.EditBox) ], ShanRoom.prototype, "edtFindRoom", void 0);
      __decorate([ property(SoundManager) ], ShanRoom.prototype, "soundManager", void 0);
      __decorate([ property(Shan_PopupCreateRoom_1.default) ], ShanRoom.prototype, "popupCreateRoom", void 0);
      ShanRoom = ShanRoom_1 = __decorate([ ccclass ], ShanRoom);
      return ShanRoom;
    }(cc.Component);
    exports.default = ShanRoom;
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
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.NetworkClient": "Shan.NetworkClient",
    "./components/Shan.PopupCreateRoom": "Shan.PopupCreateRoom"
  } ],
  "Shan.ScrollView": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70bc8esR4RIpa1aVs7p2SM7", "Shan.ScrollView");
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
    var ScrollView = function(_super) {
      __extends(ScrollView, _super);
      function ScrollView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.view = null;
        _this.isOpacity = false;
        return _this;
      }
      ScrollView.prototype.update = function(dt) {
        var pos = cc.v2(-this.view.width / 2, -this.view.height / 2);
        pos = this.node.convertToNodeSpaceAR(this.view.convertToWorldSpaceAR(pos));
        this.viewRect = cc.rect(pos.x, pos.y, this.view.width, this.view.height);
        for (var i = 0; i < this.node.children.length; i++) {
          var node = this.node.children[i];
          this.viewRect.intersects(node.getBoundingBox()) ? this.isOpacity ? node.opacity = 255 : node.active = true : this.isOpacity ? node.opacity = 0 : node.active = false;
        }
      };
      __decorate([ property(cc.Node) ], ScrollView.prototype, "view", void 0);
      __decorate([ property ], ScrollView.prototype, "isOpacity", void 0);
      ScrollView = __decorate([ ccclass ], ScrollView);
      return ScrollView;
    }(cc.Component);
    exports.default = ScrollView;
    cc._RF.pop();
  }, {} ],
  "Shan.SelfPlayer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77b78wJHGVE1LNjQQhuXrHO", "Shan.SelfPlayer");
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
    var Shan_Card_1 = require("./common/Shan.Card");
    var Shan_Contants_1 = require("./Shan.Contants");
    var Shan_Player_1 = require("./Shan.Player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SelfPlayer = function(_super) {
      __extends(SelfPlayer, _super);
      function SelfPlayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SelfPlayer.prototype.instantlyAddCard = function(cardIds, isShow, nodeHasCard) {
        var _this = this;
        if (cardIds.length <= 0) return;
        this._cardData = cardIds;
        var cardStartPosX = this._getCardStartPosX();
        for (var i = 0; i < cardIds.length; i++) {
          var c = cc.instantiate(this.prefabCard);
          c.zIndex = 10;
          c.x = cardStartPosX + Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE * Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * i;
          c.y = this._getCardPos().y + Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_Y_OFFSET;
          c.scale = Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE;
          nodeHasCard.addChild(c);
          var card = c.getComponent(Shan_Card_1.default);
          isShow && card.setId(cardIds[i], isShow);
          this._addCard(card);
        }
        cc.tween(nodeHasCard).delay(.1).call(function() {
          _this._updateCardRotation();
        }).start();
        if (isShow) {
          this.showGroupName();
          this.showMultiple();
        }
        return this._cards;
      };
      SelfPlayer.prototype.addCard = function(card) {
        if (this._addCard(card)) {
          var cardStartPosX = this._getCardStartPosX();
          var newPos = cc.v2(cardStartPosX + Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE * Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_GAP * (this._cards.length - 1), this._getCardPos().y + Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_Y_OFFSET);
          card.setTargetPos(newPos);
          card.setTargetScale(Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE);
          card.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, newPos), cc.rotateBy(.2, 180), cc.scaleTo(.2, Shan_Contants_1.Constant.SHANKOEMEE_CARD_ON_HAND_SCALE)), cc.callFunc(function() {
            this._updateCardRotation();
          }.bind(this))));
        }
      };
      SelfPlayer.prototype.showCards = function() {
        for (var i = 0; i < this._cards.length; i++) {
          var c = this._cards[i];
          c.setId(this._cardData[i], true);
        }
        this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
          this.showAllCards();
        }.bind(this))));
      };
      SelfPlayer.prototype._getCardStartPosX = function() {
        return this.node.getPosition().x + 135;
      };
      SelfPlayer = __decorate([ ccclass ], SelfPlayer);
      return SelfPlayer;
    }(Shan_Player_1.default);
    exports.default = SelfPlayer;
    cc._RF.pop();
  }, {
    "./Shan.Contants": "Shan.Contants",
    "./Shan.Player": "Shan.Player",
    "./common/Shan.Card": "Shan.Card"
  } ],
  "Shan.SettingInGame": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97f4715ki5JGaFDg0CHuPul", "Shan.SettingInGame");
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
    var SP_BTN_MAP = {
      shankoemee: 0,
      baucua: 1,
      luckybork: 1,
      tienlen: 0
    };
    var TimeCountDown = function(_super) {
      __extends(TimeCountDown, _super);
      function TimeCountDown() {
        var _this = _super.call(this) || this;
        _this.bg = null;
        _this.spSoundOff = null;
        _this.spMusicOff = null;
        _this.bgClose = null;
        _this.prefabGuide = null;
        _this.spBtnSetting = null;
        _this.lstSpriteFrameBtn = [];
        _this.isOnMusic = false;
        _this.isOnSound = false;
        _this._ws = null;
        _this._gameLayer = null;
        _this._isShow = false;
        return _this;
      }
      TimeCountDown.prototype.init = function(ws, gameLayer, gamename) {
        this._ws = ws;
        this._gameLayer = gameLayer;
        this.spBtnSetting.spriteFrame = this.lstSpriteFrameBtn[SP_BTN_MAP[this._gameLayer._gameName]];
      };
      TimeCountDown.prototype.onLoad = function() {
        this.spSoundOff.active = !this.isOnSound;
        this.spMusicOff.active = !this.isOnMusic;
      };
      TimeCountDown.prototype.start = function() {};
      TimeCountDown.prototype.onSoundClick = function() {
        if (this.isOnSound) {
          this.isOnSound = false;
          this.spSoundOff.active = true;
        } else {
          this.isOnSound = true;
          this.spSoundOff.active = false;
        }
        this.onMenuClick();
      };
      TimeCountDown.prototype.onMusicClick = function() {
        if (this.isOnMusic) {
          this.isOnMusic = false;
          this.spMusicOff.active = true;
        } else {
          this.isOnMusic = true;
          this.spMusicOff.active = false;
        }
        this.onMenuClick();
      };
      TimeCountDown.prototype.onGuideClick = function() {
        var guide = cc.instantiate(this.prefabGuide);
        this.node.parent.addChild(guide, cc.macro.MAX_ZINDEX, "guide");
        this.onMenuClick();
      };
      TimeCountDown.prototype.onReMatchClick = function() {
        this._gameLayer.onReMatchClick();
        this.onMenuClick();
      };
      TimeCountDown.prototype.onMenuClick = function() {
        this._isShow = !this._isShow;
        var posY = "baucua" == this._gameLayer._gameName || "luckybork" == this._gameLayer._gameName ? 100 : 50;
        if (this._isShow) {
          cc.tween(this.bg).to(.1, {
            y: posY
          }, {
            easing: "backOut"
          }).start();
          this.bgClose.active = true;
        } else {
          cc.tween(this.bg).to(.1, {
            y: 400
          }, {
            easing: "backIn"
          }).start();
          this.bgClose.active = false;
        }
      };
      __decorate([ property(cc.Node) ], TimeCountDown.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], TimeCountDown.prototype, "spSoundOff", void 0);
      __decorate([ property(cc.Node) ], TimeCountDown.prototype, "spMusicOff", void 0);
      __decorate([ property(cc.Node) ], TimeCountDown.prototype, "bgClose", void 0);
      __decorate([ property(cc.Prefab) ], TimeCountDown.prototype, "prefabGuide", void 0);
      __decorate([ property(cc.Sprite) ], TimeCountDown.prototype, "spBtnSetting", void 0);
      __decorate([ property(cc.SpriteFrame) ], TimeCountDown.prototype, "lstSpriteFrameBtn", void 0);
      TimeCountDown = __decorate([ ccclass ], TimeCountDown);
      return TimeCountDown;
    }(cc.Component);
    exports.default = TimeCountDown;
    cc._RF.pop();
  }, {} ],
  "Shan.Sound": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b9e2rD4LJCj7eYuykJPkK2", "Shan.Sound");
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
    var Sound = function(_super) {
      __extends(Sound, _super);
      function Sound() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.waiting = null;
        _this.clock = null;
        _this.startMusic = null;
        _this.dealCard = null;
        _this.betTime = null;
        _this.allIn = null;
        _this.bet = null;
        _this.draw = null;
        _this.notDraw = null;
        _this.compare = null;
        _this.dealOneCard = null;
        _this.openCard = null;
        _this.shan8 = null;
        _this.shan9 = null;
        _this.win = null;
        _this.lose = null;
        _this.tie = null;
        _this.chipDrop = null;
        _this.bankerWin = null;
        _this.winJackPot = null;
        _this.changeBanker = null;
        _this.bankerIsMe = null;
        _this.last3game = null;
        _this.tip = null;
        _this.dealerKiss = null;
        _this.otherShan = null;
        _this.compareLose = null;
        _this.compareWin = null;
        _this.threeOfAKind = null;
        _this.showAllCards = null;
        return _this;
      }
      Sound.prototype.playWaiting = function() {};
      Sound.prototype.playClock = function() {};
      Sound.prototype.playStart = function() {};
      Sound.prototype.playDealCard = function() {};
      Sound.prototype.playBetTime = function() {};
      Sound.prototype.playAllIn = function() {};
      Sound.prototype.playBet = function() {};
      Sound.prototype.playDrawClick = function() {};
      Sound.prototype.playNotDraw = function() {};
      Sound.prototype.playCompare = function() {};
      Sound.prototype.playDealOneCard = function() {};
      Sound.prototype.playOpenCard = function() {};
      Sound.prototype.playShan8 = function() {};
      Sound.prototype.playShan9 = function() {};
      Sound.prototype.playWin = function() {};
      Sound.prototype.playLose = function() {};
      Sound.prototype.playTie = function() {};
      Sound.prototype.playChipDrop = function() {};
      Sound.prototype.playBankerWin = function() {};
      Sound.prototype.playWinJackPot = function() {};
      Sound.prototype.playChangeBanker = function() {};
      Sound.prototype.playBankerIsMe = function() {};
      Sound.prototype.playLast3game = function() {};
      Sound.prototype.playTip = function() {};
      Sound.prototype.playDealerKiss = function() {};
      Sound.prototype.playOtherShan = function() {};
      Sound.prototype.playCompareLose = function() {};
      Sound.prototype.playCompareWin = function() {};
      Sound.prototype.playThreeOfAKind = function() {};
      Sound.prototype.playShowAllCards = function() {};
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "waiting", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "clock", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "startMusic", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "dealCard", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "betTime", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "allIn", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "bet", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "draw", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "notDraw", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "compare", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "dealOneCard", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "openCard", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "shan8", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "shan9", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "win", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "lose", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "tie", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "chipDrop", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "bankerWin", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "winJackPot", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "changeBanker", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "bankerIsMe", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "last3game", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "tip", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "dealerKiss", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "otherShan", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "compareLose", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "compareWin", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "threeOfAKind", void 0);
      __decorate([ property(cc.AudioClip) ], Sound.prototype, "showAllCards", void 0);
      Sound = __decorate([ ccclass ], Sound);
      return Sound;
    }(cc.Component);
    exports.default = Sound;
    cc._RF.pop();
  }, {} ],
  "Shan.Utils": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80288dJkXdMnKqJJqxPvS01", "Shan.Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NumberUtils = exports.StringUtils = exports.format = exports.shorten = exports.getAvatarPath = exports.setTextureFromRes = exports.getSuit = exports.getRank = exports.getArrChipFromMoney = void 0;
    var Configs_1 = require("../../../Loading/src/Configs");
    var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Shan_CardRank_1 = require("../Model/Shan.CardRank");
    var Shan_CardSuit_1 = require("../Model/Shan.CardSuit");
    var VALUE_CHIPS = [ 1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 2e8, 5e8 ];
    function getArrChipFromMoney(goldIn, isMany) {
      if (isMany) {
        var arrayC1 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
        var arrayC2 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
        var arrayC3 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
        var arrayC4 = this.getArrChipFromMoney(Math.floor(goldIn / 5), false);
        var arrayC5 = this.getArrChipFromMoney(goldIn - 4 * Math.floor(goldIn / 5), false);
        return arrayC1.concat(arrayC2).concat(arrayC3).concat(arrayC4).concat(arrayC5);
      }
      var total = goldIn;
      var arr = [];
      while (total > 0) {
        var c = VALUE_CHIPS[i];
        for (var i = VALUE_CHIPS.length - 1; i >= 0; i--) if (total >= VALUE_CHIPS[i]) {
          arr.push(VALUE_CHIPS[i]);
          c = VALUE_CHIPS[i];
          break;
        }
        total -= c;
      }
      return arr;
    }
    exports.getArrChipFromMoney = getArrChipFromMoney;
    function getRank(cardid) {
      return Shan_CardRank_1.default.ALL[Math.floor(cardid / 4) + 2];
    }
    exports.getRank = getRank;
    function getSuit(cardid) {
      return Shan_CardSuit_1.default.ALL[cardid % 4];
    }
    exports.getSuit = getSuit;
    function setTextureFromRes(sprite, res) {
      cc.assetManager.getBundle("Shan").load(res, cc.SpriteFrame, function(err, spriteFrame) {
        if (err) {
          cc.error(err.message);
          return;
        }
        try {
          sprite.spriteFrame = spriteFrame;
        } catch (e) {
          console.error(e);
        }
      });
    }
    exports.setTextureFromRes = setTextureFromRes;
    function getAvatarPath(avatarId) {
      avatarId = parseInt(avatarId) || 0;
      avatarId = avatarId % 20 + 1;
      return "avatar/" + NumberUtils.pad(avatarId, 2);
    }
    exports.getAvatarPath = getAvatarPath;
    function shorten(value, digits) {
      var si = [ {
        value: 1e18,
        symbol: "E"
      }, {
        value: 1e15,
        symbol: "P"
      }, {
        value: 1e12,
        symbol: "T"
      }, {
        value: 1e9,
        symbol: "B"
      }, {
        value: 1e6,
        symbol: "M"
      }, {
        value: 1e3,
        symbol: "K"
      } ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
      for (i = 0; i < si.length; i++) if (value >= si[i].value) return (value / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      return value.toFixed(digits).replace(rx, "$1");
    }
    exports.shorten = shorten;
    function format(value, separator) {
      separator = separator || ".";
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    exports.format = format;
    var ShanUtils = function() {
      function ShanUtils() {}
      ShanUtils.getChip = function() {
        return Configs_1.default.Login.Coin;
      };
      ShanUtils.setChip = function(value) {
        Configs_1.default.Login.Coin = value;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
      };
      ShanUtils.formatWithArg = function(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var a = str;
        var b;
        for (b in args) a = a.replace(/%[a-z]/, args[b]);
        return a;
      };
      ShanUtils.format = function(value, separator) {
        separator = separator || ".";
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      };
      ShanUtils.shorten = function(value, digits) {
        var si = [ {
          value: 1e18,
          symbol: "E"
        }, {
          value: 1e15,
          symbol: "P"
        }, {
          value: 1e12,
          symbol: "T"
        }, {
          value: 1e9,
          symbol: "B"
        }, {
          value: 1e6,
          symbol: "M"
        }, {
          value: 1e3,
          symbol: "K"
        } ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) if (value >= si[i].value) return (value / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        return value.toFixed(digits).replace(rx, "$1");
      };
      return ShanUtils;
    }();
    exports.default = ShanUtils;
    var StringUtils = function() {
      function StringUtils() {}
      StringUtils.shorten = function(v, l, c) {
        l = l || 12;
        c = c || ".";
        if (v.length > l) return v.substring(0, l) + "" + c + c;
        return v.slice();
      };
      return StringUtils;
    }();
    exports.StringUtils = StringUtils;
    var NumberUtils = function() {
      function NumberUtils() {}
      NumberUtils.pad = function(v, size) {
        var s = String(v);
        while (s.length < (size || 2)) s = "0" + s;
        return s;
      };
      NumberUtils.format = function(value, separator) {
        separator = separator || ".";
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      };
      return NumberUtils;
    }();
    exports.NumberUtils = NumberUtils;
    cc._RF.pop();
  }, {
    "../../../Loading/src/Configs": void 0,
    "../../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../Model/Shan.CardRank": "Shan.CardRank",
    "../Model/Shan.CardSuit": "Shan.CardSuit"
  } ],
  ShanCardGroupName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "974c4N5KuNFaqBofUKp1XGs", "ShanCardGroupName");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GROUP_CARD_NAME = function() {
      function GROUP_CARD_NAME(value) {
        this.setValue("Shan.GROUP_CARD_NAME", value);
      }
      GROUP_CARD_NAME.prototype.setValue = function(className, value) {
        this._className = className;
        this._value = value;
      };
      GROUP_CARD_NAME.prototype.valueOf = function() {
        return this._value;
      };
      GROUP_CARD_NAME.prototype.toString = function() {
        return this._className + "." + this._value;
      };
      GROUP_CARD_NAME.NONE = new GROUP_CARD_NAME(0);
      GROUP_CARD_NAME.SAP = new GROUP_CARD_NAME(1);
      GROUP_CARD_NAME.SHAN = new GROUP_CARD_NAME(2);
      GROUP_CARD_NAME.ALL = {
        0: GROUP_CARD_NAME.NONE,
        1: GROUP_CARD_NAME.SAP,
        2: GROUP_CARD_NAME.SHAN
      };
      return GROUP_CARD_NAME;
    }();
    exports.default = GROUP_CARD_NAME;
    cc._RF.pop();
  }, {} ],
  ShanCardGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1f3c8YUiJGHb/to+4qHU1x", "ShanCardGroup");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Shan_CardRank_1 = require("./Shan.CardRank");
    var ShanCardGroupName_1 = require("./ShanCardGroupName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CardGroup = function() {
      function CardGroup() {}
      CardGroup.prototype.setCards = function(cards) {
        this._cards = cards.slice(0, 3).sort(function(a, b) {
          return b.getId() - a.getId();
        });
        cc.log(this._cards);
        this._groupName = ShanCardGroupName_1.default.NONE;
        this._groupPoint = this._cards.reduce(function(sum, card) {
          var r = card.getRank() || -1;
          if (r.valueOf() == Shan_CardRank_1.default.ACE.valueOf()) return sum + 1;
          if (r.valueOf() > Shan_CardRank_1.default.TEN.valueOf()) return sum;
          return sum + r.valueOf();
        }, 0) % 10;
        this._checkHeads() && (this._groupPoint = 10);
        this._checkShan() ? this._groupName = ShanCardGroupName_1.default.SHAN : this._checkSap() && (this._groupName = ShanCardGroupName_1.default.SAP);
        this._multiple = this._checkMultiple();
      };
      CardGroup.prototype.getGroupName = function() {
        return this._groupName;
      };
      CardGroup.prototype.getPoint = function() {
        return this._groupPoint;
      };
      CardGroup.prototype.getMultiple = function() {
        return this._multiple;
      };
      CardGroup.prototype._checkShan = function() {
        if (this._cards.length > 2) return false;
        return this._groupPoint >= 8;
      };
      CardGroup.prototype._checkSap = function() {
        if (3 != this._cards.length) return false;
        for (var i = 0; i < this._cards.length - 1; i++) if (this._cards[i].getRank().valueOf() != this._cards[i + 1].getRank().valueOf()) return false;
        return true;
      };
      CardGroup.prototype._checkHeads = function() {
        if (3 != this._cards.length) return false;
        for (var i = 0; i < this._cards.length; i++) if (this._cards[i].getId() < 36 || this._cards[i].getId() > 47) return false;
        return true;
      };
      CardGroup.prototype._checkMultiple = function() {
        var _countR = 1;
        var _countS = 1;
        for (var i = 0; i < this._cards.length - 1; i++) {
          this._cards[i].getRank().valueOf() === this._cards[i + 1].getRank().valueOf() && (_countR += 1);
          this._cards[i].getSuit().valueOf() === this._cards[i + 1].getSuit().valueOf() && (_countS += 1);
        }
        cc.log("_checkMultiple " + _countR + "," + _countS + " this._cards.length: " + this._cards.length);
        if (_countR === this._cards.length && 2 === _countR) return 2;
        if (_countR === this._cards.length && 3 === _countR) return 5;
        if (_countS === this._cards.length) return _countS;
        if (this._checkHeads()) return 3;
        return 1;
      };
      CardGroup = __decorate([ ccclass ], CardGroup);
      return CardGroup;
    }();
    exports.default = CardGroup;
    cc._RF.pop();
  }, {
    "./Shan.CardRank": "Shan.CardRank",
    "./ShanCardGroupName": "ShanCardGroupName"
  } ]
}, {}, [ "Shan.Alert", "Shan.BankerWin", "Shan.BasePopup", "Shan.CardRank", "Shan.CardSuit", "Shan.Jackpot", "Shan.JackpotBig", "Shan.JackpotItem", "Shan.JackpotSmall", "ShanCardGroup", "ShanCardGroupName", "Shan.BankerPlayingNode", "Shan.CardUtil", "Shan.Cmd", "Shan.Contants", "Shan.GameController", "Shan.ItemResult", "Shan.ItemRoom", "Shan.ItemRoomz", "Shan.NanBai", "Shan.NetworkClient", "Shan.Player", "Shan.PlayingNode", "Shan.Room", "Shan.SelfPlayer", "Shan.Sound", "Sham.TimeCountDown", "Shan.Card", "Shan.Chip", "Shan.ChipGroup", "Shan.GameLayer", "Shan.InteractItem", "Shan.PlayerNode", "Shan.PopupMessage", "Shan.PopupPlayerInfo", "Shan.Pot", "Shan.ProgressBar", "Shan.Res", "Shan.ScrollView", "Shan.SettingInGame", "Shan.Utils", "Shan.CreateRoomItem", "Shan.PopupCreateRoom" ]);