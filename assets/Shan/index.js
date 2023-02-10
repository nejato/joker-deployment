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
  "Shan.BankerPlayingNode": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d511z8CflNZqk7RwV2obtv", "Shan.BankerPlayingNode");
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
    var Shan_Controller_1 = require("../Shan.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BankerPlayingNode = function(_super) {
      __extends(BankerPlayingNode, _super);
      function BankerPlayingNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnDraw = null;
        _this.btnNoDraw = null;
        return _this;
      }
      BankerPlayingNode.prototype.onBtnDrawClicked = function() {
        this.setActive(false);
        Shan_Controller_1.default.instance.draw();
      };
      BankerPlayingNode.prototype.onBtnNoDrawClicked = function() {
        this.setActive(false);
        Shan_Controller_1.default.instance.noDraw();
      };
      BankerPlayingNode.prototype.onBtnCompareClicked = function() {
        this.setActive(false);
        Shan_Controller_1.default.instance.compare();
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
        } else cc.tween(this.node).to(.2, {
          x: pos.x,
          y: pos.y - 150
        }, {
          easing: "backOut"
        }).call(function() {
          _this.node.opacity = 0;
          _this.node.setPosition(pos);
          _this.node.active = false;
        }).start();
      };
      __decorate([ property(cc.Node) ], BankerPlayingNode.prototype, "btnDraw", void 0);
      __decorate([ property(cc.Node) ], BankerPlayingNode.prototype, "btnNoDraw", void 0);
      BankerPlayingNode = __decorate([ ccclass ], BankerPlayingNode);
      return BankerPlayingNode;
    }(cc.Component);
    exports.default = BankerPlayingNode;
    cc._RF.pop();
  }, {
    "../Shan.Controller": "Shan.Controller"
  } ],
  "Shan.CardRank": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71479M12Q5Klp4Z+qShV0QI", "Shan.CardRank");
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
    var CARD_RANK = function() {
      function CARD_RANK(value) {
        this.setValue("CARD_RANK", value);
      }
      CARD_RANK_1 = CARD_RANK;
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
      var CARD_RANK_1;
      CARD_RANK.ACE_ALIAS = new CARD_RANK_1(1);
      CARD_RANK.TWO = new CARD_RANK_1(2);
      CARD_RANK.THREE = new CARD_RANK_1(3);
      CARD_RANK.FOUR = new CARD_RANK_1(4);
      CARD_RANK.FIVE = new CARD_RANK_1(5);
      CARD_RANK.SIX = new CARD_RANK_1(6);
      CARD_RANK.SEVEN = new CARD_RANK_1(7);
      CARD_RANK.EIGHT = new CARD_RANK_1(8);
      CARD_RANK.NINE = new CARD_RANK_1(9);
      CARD_RANK.TEN = new CARD_RANK_1(10);
      CARD_RANK.JACK = new CARD_RANK_1(11);
      CARD_RANK.QUEEN = new CARD_RANK_1(12);
      CARD_RANK.KING = new CARD_RANK_1(13);
      CARD_RANK.ACE = new CARD_RANK_1(14);
      CARD_RANK.ALL = {
        2: CARD_RANK_1.TWO,
        3: CARD_RANK_1.THREE,
        4: CARD_RANK_1.FOUR,
        5: CARD_RANK_1.FIVE,
        6: CARD_RANK_1.SIX,
        7: CARD_RANK_1.SEVEN,
        8: CARD_RANK_1.EIGHT,
        9: CARD_RANK_1.NINE,
        10: CARD_RANK_1.TEN,
        11: CARD_RANK_1.JACK,
        12: CARD_RANK_1.QUEEN,
        13: CARD_RANK_1.KING,
        14: CARD_RANK_1.ACE
      };
      CARD_RANK = CARD_RANK_1 = __decorate([ ccclass ], CARD_RANK);
      return CARD_RANK;
    }();
    exports.default = CARD_RANK;
    cc._RF.pop();
  }, {} ],
  "Shan.CardSuit": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a03ddwVbTNCRJ2WVM8kflQj", "Shan.CardSuit");
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
    var CARD_SUIT = function() {
      function CARD_SUIT(value) {
        this.setValue("CARD_SUIT", value);
      }
      CARD_SUIT_1 = CARD_SUIT;
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
      var CARD_SUIT_1;
      CARD_SUIT.SPADE = new CARD_SUIT_1(0);
      CARD_SUIT.CLUB = new CARD_SUIT_1(1);
      CARD_SUIT.DIAMOND = new CARD_SUIT_1(2);
      CARD_SUIT.HEART = new CARD_SUIT_1(3);
      CARD_SUIT.ALL = {
        0: CARD_SUIT_1.SPADE,
        1: CARD_SUIT_1.CLUB,
        2: CARD_SUIT_1.DIAMOND,
        3: CARD_SUIT_1.HEART
      };
      CARD_SUIT = CARD_SUIT_1 = __decorate([ ccclass ], CARD_SUIT);
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
    var Shan_Res_1 = require("./Shan.Res");
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
        _this.spr = null;
        _this.posY = 0;
        _this.offsetY = 20;
        _this.isSelected = false;
        _this.callback = null;
        _this.index = null;
        _this._userData = {};
        return _this;
      }
      Card.prototype.onLoad = function() {
        this.spr = this.node.getComponent(cc.Sprite);
        this.posY = this.node.y;
        this._cardId = -1;
        this._rank = null;
        this._suit = null;
      };
      Card.prototype.onSelect = function() {
        this.node.y += this.isSelected ? -this.offsetY : this.offsetY;
        this.isSelected = !this.isSelected;
        this.isSelected && this.callback && this.callback(this.index);
      };
      Card.prototype.setCardData = function(index, callback) {
        void 0 === callback && (callback = null);
        this.index = index;
        this.setId(index);
        null == this.spr && (this.spr = this.node.getComponent(cc.Sprite));
        this.spr.spriteFrame = Shan_Res_1.default.getInstance().getCardFace(index);
        this.callback = callback;
      };
      Card.prototype.getCardIndex = function() {
        return this.index;
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
      Card.prototype.select = function() {
        this.node.y = this.posY + this.offsetY;
        this.isSelected = true;
      };
      Card.prototype.deSelect = function() {
        this.node.y = this.posY;
        this.isSelected = false;
      };
      Card.prototype.getId = function() {
        return this._cardId;
      };
      Card.prototype.setId = function(value, isShow) {
        if (value >= 52) return;
        this._cardId = value;
        this._rank = Shan_CardRank_1.default.ALL[Math.floor(this._cardId / 4) + 2];
        this._suit = Shan_CardSuit_1.default.ALL[this._cardId % 4];
        isShow && (this.spr.spriteFrame = Shan_Res_1.default.getInstance().getCardFace(this._cardId));
      };
      Card.prototype.show = function() {
        this._updateSpriteFrame();
      };
      Card.prototype._updateSpriteFrame = function() {
        null == this.spr && (this.spr = this.node.getComponent(cc.Sprite));
        this.spr.spriteFrame = this._getSpriteFrame();
      };
      Card.prototype._getSpriteFrame = function() {
        if (!this._rank || !this._suit) return Shan_Res_1.default.getInstance().getCardFace(52);
        return Shan_Res_1.default.getInstance().getCardFace(this._cardId);
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
      Card.prototype.getTargetPos = function() {
        var userData = this._userData || {};
        return userData.targetPos || this.node.position;
      };
      Card.prototype.setDarkMode = function(boolean) {
        this.spr.node.color = boolean ? new cc.Color(100, 100, 100, 255) : new cc.Color(255, 255, 255, 255);
      };
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "../Model/Shan.CardRank": "Shan.CardRank",
    "../Model/Shan.CardSuit": "Shan.CardSuit",
    "./Shan.Res": "Shan.Res"
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
    var Shan_Controller_1 = require("../Shan.Controller");
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
        Shan_Controller_1.default.instance.pot.setValue(this.totalBet);
      };
      ChipGroup.prototype.playerBet = function(player, bet, isBanker) {
        cc.log("playerBet player " + player.getChair() + " Bet " + bet);
        var pos = player.node.getPosition();
        var arrChip = this.getArrChipFromMoney(bet, isBanker);
        this.addChipToGroup(arrChip, pos);
        this.totalBet += bet;
      };
      ChipGroup.prototype.distributeMoney = function(players) {
        cc.log("distributeMoney", players);
        var i, p;
        var valueC, isLoop = true, listC;
        for (i = ChipGroup_1.VALUE_CHIPS.length - 1; i >= 0; i--) {
          listC = this.listChipShow[i];
          if (listC.length <= 0) continue;
          valueC = ChipGroup_1.VALUE_CHIPS[i];
          isLoop = true;
          while (isLoop) {
            isLoop = false;
            for (var j = 0; j < players.length; j++) {
              p = players[j];
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
        for (i = 0; i < players.length; i++) {
          p = players[i];
          p.delay > maxTime && (maxTime = p.delay);
          this.node.runAction(cc.sequence(cc.delayTime(p.delay), cc.callFunc(function(s, pInfo) {
            this.payPlayer(pInfo);
          }, this, p)));
        }
        this.node.runAction(cc.sequence(cc.delayTime(maxTime + .1), cc.callFunc(function() {
          Shan_Controller_1.default.instance.pot.setValue(Shan_Controller_1.default.instance.bankerPot);
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
    "../Shan.Controller": "Shan.Controller",
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
    var Shan_Contants_1 = require("./Shan.Contants");
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
        Code.MAX_PLAYER = 8;
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
            var player;
            player.chair = _this.getByte();
            player.stateId = _this.getByte();
            if (player.stateId != Shan_Contants_1.default.ROOM_PLAYER_STATE.NO_PLAYER) {
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
            if (player.stateId != Shan_Contants_1.default.ROOM_PLAYER_STATE.NO_PLAYER) {
              player.userId = _this.getInt();
              player.userName = _this.getString();
              player.avatar = _this.getString();
              player.money = _this.getLong();
              player.vip = _this.getInt();
            }
            if (player.stateId == Shan_Contants_1.default.ROOM_PLAYER_STATE.PLAYING) {
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
    "../../Lobby/LobbyScript/Script/networks/Network.OutPacket": void 0,
    "./Shan.Contants": "Shan.Contants"
  } ],
  "Shan.Contants": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63413Xf9YxEbbjcVGf+mLTK", "Shan.Contants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Contanst = exports.ShanContants = void 0;
    var ShanContants;
    (function(ShanContants) {
      var ROOM_PLAYER_STATE = function() {
        function ROOM_PLAYER_STATE() {}
        ROOM_PLAYER_STATE.NO_PLAYER = 0;
        ROOM_PLAYER_STATE.VIEWING = 1;
        ROOM_PLAYER_STATE.SITTING = 2;
        ROOM_PLAYER_STATE.PLAYING = 3;
        return ROOM_PLAYER_STATE;
      }();
      ShanContants.ROOM_PLAYER_STATE = ROOM_PLAYER_STATE;
    })(ShanContants = exports.ShanContants || (exports.ShanContants = {}));
    exports.Contanst = {
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
    exports.default = ShanContants;
    cc._RF.pop();
  }, {} ],
  "Shan.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6313Hqd0JKG7JIFairuMUa", "Shan.Controller");
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
    var Sham_TimeCountDown_1 = require("./common/Sham.TimeCountDown");
    var Shan_BankerPlayingNode_1 = require("./common/Shan.BankerPlayingNode");
    var Shan_ChipGroup_1 = require("./common/Shan.ChipGroup");
    var Shan_NanBai_1 = require("./common/Shan.NanBai");
    var Shan_Pot_1 = require("./common/Shan.Pot");
    var Shan_CardUtil_1 = require("./Shan.CardUtil");
    var Shan_Cmd_1 = require("./Shan.Cmd");
    var Shan_Contants_1 = require("./Shan.Contants");
    var Shan_NetworkClient_1 = require("./Shan.NetworkClient");
    var Shan_Player_1 = require("./Shan.Player");
    var Shan_Room_1 = require("./Shan.Room");
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
        this.btns = [];
        this.btnOpen = null;
        this.lbTime = null;
        this._isInstantWin = false;
        this._countDownEndAt = 0;
        this._hasBeenShowCard = false;
        this._canNan = false;
        this._isClosing = false;
        this._isBanker = false;
        this._countDownEndAt = 0;
        this._hasBeenShowCard = false;
        this._isClosing = true;
        this._canNan = false;
      }
      NodeShowCard.prototype.enableBtns = function(value) {
        for (var i = 0; i < this.btns.length; i++) this.btns[i].active = value;
      };
      NodeShowCard.prototype.showButtons = function() {
        cc.log("showButtons");
        if (this._isInstantWin) {
          cc.log("closeDialog showButtons");
          this.enableBtns(false);
          this.btnOpen.active = false;
          this.hide();
        } else {
          this.enableBtns(true);
          this.btnOpen.active = false;
        }
      };
      NodeShowCard.prototype.setInfo = function() {
        var _this = this;
        this.nodeThis.on(cc.Node.EventType.TOUCH_MOVE, function(touch) {
          _this.animHand.node.active = false;
          var delta = touch.getDelta();
          if (delta.x > 0 && _this.cardShow.angle > -30) {
            _this.cardShow.angle < -12;
            _this.cardShow.angle -= delta.x / 20;
            _this.userFinger.angle -= delta.x / 20;
          }
        });
        this.nodeThis.on(cc.Node.EventType.TOUCH_END, function(touch) {
          _this.cardShow.angle < -20 && TW(_this.userHand).to(.5, {
            angle: 90
          }, {
            easing: cc.easing.sineIn
          }).call(function() {
            _this.nodeThis.active = false;
            _this._onNanFinish();
          }).start();
        });
      };
      NodeShowCard.prototype.show = function(currentCards) {
        var _this = this;
        this.animHand.node.active = false;
        this.nodeThis.getChildByName("animHand").active = true;
        this.cardHide2.angle = -2;
        this.cardShow.angle = -5;
        this.userFinger.angle = 0;
        this.cardShow.getComponent("TienLen.Card").setCardData(currentCards[0]);
        this.cardHide2.getComponent("TienLen.Card").setCardData(currentCards[1]);
        this.cardHide1.active = false;
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
      NodeShowCard.prototype.init = function(seconds, isBanker, isInstantWin, cardIds, closeCb) {
        this._hasBeenShowCard = false;
        this._isClosing = false;
        this.enableBtns(false);
        this.btnOpen.active = false;
        this._isBanker = isBanker;
        this._isInstantWin = isInstantWin;
        this._cardIds = cardIds;
        this._closeCB = closeCb;
        this.startCount(seconds);
        this.nodeThis.active = true;
        this._canNan = false;
        this._canNan = false;
      };
      NodeShowCard.prototype._onNanFinish = function() {
        cc.log("showButtons On nan finish==");
        this._hasBeenShowCard = true;
        var actions = [];
        this._isBanker || this.cardHide1.active ? actions.push(cc.delayTime(.5), cc.callFunc(function() {
          cc.log("closeDialog _onNanFinish");
          this.closeDialog();
        }.bind(this))) : actions.push(cc.delayTime(.1), cc.callFunc(function() {
          this.showButtons();
        }.bind(this)));
        this.nodeThis.stopAllActions();
        this.nodeThis.runAction(cc.sequence(actions));
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
      NodeShowCard.prototype.startCount = function(seconds) {
        this._countDownEndAt = 1e3 * seconds + cc.sys.now();
      };
      NodeShowCard.prototype.closeDialog = function() {
        if (!this._isClosing) {
          this._isClosing = true;
          this.nodeThis.active = false;
          this._onClose();
        }
      };
      NodeShowCard.prototype._onClose = function() {
        this._closeCB && this._closeCB();
      };
      NodeShowCard.prototype.update = function(dt) {
        if (this.animHand.node.active) {
          if (cc.sys.now() < this._countDownEndAt) this.lbTime.string = Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) + ""; else {
            cc.log("closeDialog update", cc.sys.now(), this._countDownEndAt);
            this.closeDialog();
          }
          !this._hasBeenShowCard && Math.ceil((this._countDownEndAt - cc.sys.now()) / 1e3) < 7 && this._onNanFinish();
        }
      };
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardHide1", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardHide2", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "cardShow", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "userHand", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "userFinger", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "nodeThis", void 0);
      __decorate([ property(sp.Skeleton) ], NodeShowCard.prototype, "animHand", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "btns", void 0);
      __decorate([ property(cc.Node) ], NodeShowCard.prototype, "btnOpen", void 0);
      __decorate([ property(cc.Label) ], NodeShowCard.prototype, "lbTime", void 0);
      NodeShowCard = __decorate([ ccclass("Shan.Controller.NodeShowCard") ], NodeShowCard);
      return NodeShowCard;
    }();
    exports.NodeShowCard = NodeShowCard;
    var ShanController = function(_super) {
      __extends(ShanController, _super);
      function ShanController() {
        var _this = _super.call(this) || this;
        _this.isInitedUIRoom = false;
        _this.nanBaiPrefab = null;
        _this.bankerPlayingPrefab = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.timeCountDown = null;
        _this.pot = null;
        _this.chipGroup = null;
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
        _this.bgWarningCount = null;
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
        _this.timeoutEndPhaseOne = null;
        _this.timeoutEndPhaseTwo = null;
        _this.arrPosDanhBien = [];
        _this.timeInBg = 0;
        _this._roomData = {};
        return _this;
      }
      ShanController_1 = ShanController;
      ShanController.prototype.onLoad = function() {
        this.initNodeWithPrefab();
        this.timeCountDown && (this.timeCountDown.node.zIndex = 999);
        this.uiNode = new cc.Node();
        this.node.addChild(this.uiNode);
        this.uiNode.zIndex = 2;
        ShanController_1.instance = this;
        this.soundManager = Shan_Room_1.default.instance.soundManager;
        this.seatOwner = -1;
        this.initConfigPlayer();
        this.pot.setValue(0);
        this.btnBet.active = false;
        this.bankerPlayingNode.node.active = false;
        this.nanBaiLayer.node.active = false;
        this.bgWarningCount && (this.bgWarningCount.active = false);
        this.bgWarningCount.zIndex = Shan_Contants_1.Contanst.SHANKOEMEE_ALERT_Z_INDEX;
        this.timeCountDown.node.zIndex = Shan_Contants_1.Contanst.SHANKOEMEE_ALERT_Z_INDEX;
        this.chipGroup.node.zIndex = Shan_Contants_1.Contanst.SHANKOEMEE_CHIPNODE_Z_INDEX;
        this._chipNode = new cc.Node();
        this.node.addChild(this._chipNode);
      };
      ShanController.prototype.initNodeWithPrefab = function() {
        this.nanBaiLayer = this._createNodeFromPrefab(this.nanBaiPrefab, 1e3).getComponent(Shan_NanBai_1.NodeNanBai);
        this.bankerPlayingNode = this._createNodeFromPrefab(this.bankerPlayingPrefab, 1e3).getComponent(Shan_BankerPlayingNode_1.default);
        this.bankerPlayingNode.node.active = false;
      };
      ShanController.prototype._createNodeFromPrefab = function(prefab, zIndex) {
        var node = cc.instantiate(prefab);
        this.node.addChild(node);
        zIndex && (node.zIndex = zIndex);
        return node;
      };
      ShanController.prototype.showSetting = function() {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
      };
      ShanController.prototype.hideSetting = function() {
        this.nodeSetting.active = false;
      };
      ShanController.prototype.onBtnToggleMusic = function() {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      ShanController.prototype.onBtnToggleSound = function() {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
      };
      ShanController.prototype.onBtnSetting = function() {
        this.boxSetting.active = !this.boxSetting.active;
      };
      ShanController.prototype.onBtnClickBgChat = function() {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
      };
      ShanController.prototype.onBtnClickBoxChat = function() {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
      };
      ShanController.prototype.start = function() {
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
      ShanController.prototype.setupTimeRunInBg = function() {
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
            Shan_Room_1.default.instance.node.active = true;
            _this.refeshListRoom();
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_out_game"));
          }
        });
      };
      ShanController.prototype.genCardDeal = function() {
        if (1 == this.cardsDeal.childrenCount) for (var i = 1; i < 24; i++) this.cardsDeal.addChild(cc.instantiate(this.cardsDeal.children[0]));
      };
      ShanController.prototype.joinRoom = function(info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
          App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
          return;
        }
        App_1.default.instance.showLoading(true);
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendJoinRoomById(info["id"]));
      };
      ShanController.prototype.refeshListRoom = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendGetListRoom());
      };
      ShanController.prototype.toggleUIChat = function() {
        false == this.UI_Chat.active ? this.showUIChat() : this.closeUIChat();
      };
      ShanController.prototype.showUIChat = function() {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(.3, {
          x: cc.winSize.width / 2 - this.UI_Chat.width / 2
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      ShanController.prototype.closeUIChat = function() {
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
      ShanController.prototype.chatEmotion = function(event, id) {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
      };
      ShanController.prototype.chatMsg = function() {
        if (this.edtChatInput.string.trim().length > 0) {
          Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
          this.edtChatInput.string = "";
          this.closeUIChat();
        }
      };
      ShanController.prototype.chatNhanhMsg = function(msg) {
        if (msg.trim().length > 0) {
          Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendChatRoom(0, msg));
          this.closeUIChat();
        }
      };
      ShanController.prototype.showPopupGuide = function() {
        this.popupGuide.active = true;
      };
      ShanController.prototype.closePopupGuide = function() {
        this.popupGuide.active = false;
      };
      ShanController.prototype.closeUIPlaying = function() {
        this.actionLeaveRoom();
      };
      ShanController.prototype.setupMatch = function(data) {
        this.closePopupMatchResult();
        this.closeUIChat();
        for (var index = 1; index < 8; index++) {
          var player = this.getPlayerHouse(index);
          player.showPopupBet(false);
          player.closePopupRequestDanhBien();
        }
        this._roomData.playerList = data.playerInfos;
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
            if (arrPlayerStatus[findPos] == Shan_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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
      ShanController.prototype.startWaittingCountDown = function(timeWait) {
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
      ShanController.prototype.stopWaittingCountDown = function() {
        this.unschedule(this.intervalWaitting);
        this.notifyTimeStart.active = false;
        this.notifyTimeStart.parent.active = false;
      };
      ShanController.prototype.setTimeWaittingCountDown = function() {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u102b\u104b : " + this.seconds + "s ";
      };
      ShanController.prototype.startEndCountDown = function(timeWait) {
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
      ShanController.prototype.setTimeEndCountDown = function() {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = App_1.default.instance.getTextLang("txt_end_after") + " " + this.seconds + "s ";
      };
      ShanController.prototype.startBettingCountDown = function(turnTime) {
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
      ShanController.prototype.stopBettingCountDown = function() {
        cc.Tween.stopAllByTarget(this.actionBetting);
        this.unschedule(this.intervalBetting);
        this.actionBetting.active = false;
      };
      ShanController.prototype.processBetting = function(rate) {
        this.actionBetting.getChildByName("Step").getComponent(cc.Sprite).fillRange = rate;
      };
      ShanController.prototype.openMeCard = function(event, itemId) {
        if (false == this.getPlayerHouse(0).isShowCard) {
          this.nodeShowCard.nodeThis.active = true;
          var currenCardId_1 = [];
          this.currentCard.forEach(function(element) {
            currenCardId_1.push(Shan_CardUtil_1.default.getNormalId(element));
          });
          this.nodeShowCard.show(currenCardId_1);
        }
      };
      ShanController.prototype.getCardsScore = function(arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) score += Shan_CardUtil_1.default.getDiemById(arrCards[a]);
        score %= 10;
        0 == score && (score = 10);
        return score;
      };
      ShanController.prototype.moveChipsToHubNow = function(index) {
        this.hubChips.children[2 * index].setPosition(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[2 * index + 1].setPosition(25, 80);
        this.hubChips.children[2 * index + 1].scale = 0;
      };
      ShanController.prototype.fxMoveChips = function(chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(.8, toX, toY), cc.scaleTo(.8, 0, 0))));
      };
      ShanController.prototype.resetHubChips = function() {
        var arrFromX = [ 70, 280, 280, 260, 100, -260, -375, -360 ];
        var arrFromY = [ -195, -150, -55, 70, 90, 85, -30, -155 ];
        for (var index = 0; index < 8; index++) {
          this.hubChips.children[2 * index].setPosition(arrFromX[index], arrFromY[index]);
          this.hubChips.children[2 * index + 1].setPosition(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) this.hubChips.children[index].active = false;
      };
      ShanController.prototype.setupBet = function() {
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.x = this.arrBetPos[this.currentBetSelectedIndex];
      };
      ShanController.prototype.showPopupMatchResult = function(data) {
        this.popupMatchResult.active = true;
        this.contentMatchResult.removeAllChildren(true);
        for (var index = 0; index < data.length; index++) {
          var item = cc.instantiate(this.prefabItemResult);
          item.getComponent("Shan.ItemResult").initItem(data[index]);
          this.contentMatchResult.addChild(item);
        }
        this.scrollMatchResult.scrollToTop(.2);
      };
      ShanController.prototype.closePopupMatchResult = function() {
        this.popupMatchResult.active = false;
      };
      ShanController.prototype.setupListener = function() {
        var _this = this;
        Shan_NetworkClient_1.default.getInstance().addListener(function(data) {
          var inpacket = new Network_InPacket_1.default(data);
          switch (inpacket.getCmdId()) {
           case Shan_Cmd_1.default.Code.LOGIN:
            cc.log("<<<< Login <<<<");
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedLogin(data);
            if (0 == res.getError()) {
              _this.refeshListRoom();
              Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdReconnectRoom());
            } else cc.log("login fail");
            break;

           case Shan_Cmd_1.default.Code.TOPSERVER:
            cc.log("<<<< TopServer <<<<");
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedTopServer(data);
            var rankType = res["rankType"];
            var topDay_money = res["topDay_money"];
            var topWeek_money = res["topWeek_money"];
            var topMonth_money = res["topMonth_money"];
            break;

           case Shan_Cmd_1.default.Code.CMD_PINGPONG:
            App_1.default.instance.showLoading(false);
            break;

           case Shan_Cmd_1.default.Code.CMD_JOIN_ROOM:
            App_1.default.instance.showLoading(false);
            cc.log("<<<< Join room <<<<");
            break;

           case Shan_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
            App_1.default.instance.showLoading(false);
            cc.log("Reconnect room in room");
            cc.log("<<<< Reconnect in room <<<<");
            break;

           case Shan_Cmd_1.default.Code.MONEY_BET_CONFIG:
            App_1.default.instance.showLoading(false);
            break;

           case Shan_Cmd_1.default.Code.MATCH_INFO:
            _this.onWsMatchInfo(data);
            break;

           case Shan_Cmd_1.default.Code.START_GAME:
            App_1.default.instance.showLoading(false);
            _this.onWsMatchStart(data);
            break;

           case Shan_Cmd_1.default.Code.START_PHASE_ONE:
            App_1.default.instance.showLoading(false);
            _this.onWsStartPhaseOne(data);
            break;

           case Shan_Cmd_1.default.Code.START_PHASE_TWO:
            App_1.default.instance.showLoading(false);
            _this.onWsStartPhaseTwo(data);
            break;

           case Shan_Cmd_1.default.Code.SEEN:
            App_1.default.instance.showLoading(false);
            _this.onWsSeen(data);
            break;

           case Shan_Cmd_1.default.Code.BETTING:
            App_1.default.instance.showLoading(false);
            _this.onWsBetting(data);
            break;

           case Shan_Cmd_1.default.Code.DRAW:
            App_1.default.instance.showLoading(false);
            _this.onWsDraw(data);
            break;

           case Shan_Cmd_1.default.Code.COMPARE:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedCompare(data);
            cc.log("Compare ", JSON.stringify(res.data));
            break;

           case Shan_Cmd_1.default.Code.BANKER_WIN:
            App_1.default.instance.showLoading(false);
            _this.onWsBankerWin(data);
            break;

           case Shan_Cmd_1.default.Code.MATCH_INFO:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMatchInfo(data);
            cc.log("Match info ", JSON.stringify(res.data));
            break;

           case Shan_Cmd_1.default.Code.END_GAME:
            App_1.default.instance.showLoading(false);
            _this.onWsMatchEnd(data);
            break;

           case Shan_Cmd_1.default.Code.FINISH:
            App_1.default.instance.showLoading(false);
            _this.onWsMatchFinish(data);
            break;

           case Shan_Cmd_1.default.Code.ROOM_START_COUNTDOWN:
            _this.onWsRoomStartCountDown(data);

           case Shan_Cmd_1.default.Code.ROOM_REGISTER_LEAVE:
            _this.onWsLeaveRoom(data);

           case Shan_Cmd_1.default.Code.MO_BAI:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMoBai(data);
            var chairMoBai = res["chairMoBai"];
            var cards = res["cards"];
            var seatId_1 = _this.findPlayerSeatByPos(chairMoBai);
            var player = _this.getPlayerHouse(seatId_1);
            if (-1 != seatId_1 && 0 != seatId_1 && !player.isShowCard) {
              for (var a = 0; a < 3; a++) {
                var spriteCardId = Shan_CardUtil_1.default.getNormalId(cards[a]);
                player.transformToCardReal(a, spriteCardId, a);
                player.showCardReal(true);
              }
              player.showCardName(_this.getCardsScore(cards) + " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038");
            }
            break;

           case Shan_Cmd_1.default.Code.BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedFirstTurnDecision(data);
            _this.resetHubChips();
            _this.closePopupMatchResult();
            break;

           case Shan_Cmd_1.default.Code.KET_THUC:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedEndGame(data);
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
                    var spriteCardId = Shan_CardUtil_1.default.getNormalId(cards[a]);
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

           case Shan_Cmd_1.default.Code.CHIA_BAI:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedChiaBai(data);
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
              var seatId_2 = arrSeatExist[b];
              if (-1 !== seatId_2) {
                var card4Me = _this.cardsDeal.children[a * numPlayer_1 + b];
                card4Me.active = true;
                var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[seatId_2].position.x, _this.groupPlayers.children[seatId_2].position.y);
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
                var seatId_3 = arrSeatExist[index];
                if (-1 !== seatId_3) {
                  0 == seatId_3 && _this.getPlayerHouse(seatId_3).resetCardReady();
                  _this.getPlayerHouse(seatId_3).showCardReal(true);
                }
              }
            }, timeUnderLayer);
            break;

           case Shan_Cmd_1.default.Code.TU_DONG_BAT_DAU:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedAutoStart(data);
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

           case Shan_Cmd_1.default.Code.DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedDatCuoc(data);
            var chairDatCuoc = res["chairDatCuoc"];
            var level = res["level"];
            var seatId_4 = _this.findPlayerSeatByPos(chairDatCuoc);
            var player = _this.getPlayerHouse(seatId_4);
            if (-1 != seatId_4) {
              player.setBet(_this.arrBetValue[level - 1]);
              player.addChips();
            }
            _this.soundManager.playAudioEffect(audio_clip.CHIP);
            break;

           case Shan_Cmd_1.default.Code.ROOM_REGISTER_LEAVE:
            cc.log("Register leave room");
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
            var outChair = res["outChair"];
            var isOutRoom = res["isOutRoom"];
            var seatId_5 = _this.findPlayerSeatByPos(outChair);
            0 == seatId_5 && (isOutRoom ? App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_leave")) : App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_room_cancel_leave")));
            -1 !== seatId_5 && _this.getPlayerHouse(seatId_5).showLeaveRoom(isOutRoom);
            break;

           case Shan_Cmd_1.default.Code.DOI_CHUONG:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedDoiChuong(data);
            for (var index = 0; index < 8; index++) _this.getPlayerHouse(index).setOwner(false);
            var seatId_6 = _this.findPlayerSeatByPos(res["chuongChair"]);
            if (-1 != seatId_6) {
              _this.getPlayerHouse(seatId_6).setOwner(true);
              _this.seatOwner = seatId_6;
            }
            break;

           case Shan_Cmd_1.default.Code.MOI_DAT_CUOC:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedMoiDatCuoc(data);
            _this.startBettingCountDown(res.timeDatCuoc);
            _this.showSliderBet();
            _this.numCardOpened = 0;
            _this.soundManager.playAudioEffect(audio_clip.START_BET);
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
            var chair = res["chair"];
            var seatId_7 = _this.findPlayerSeatByPos(chair);
            if (-1 !== seatId_7) {
              for (var index = 0; index < configPlayer.length; index++) if (configPlayer[index].seatId == seatId_7) {
                configPlayer[index].playerId = -1;
                configPlayer[index].isViewer = true;
              }
              var player = _this.getPlayerHouse(seatId_7);
              player.resetPlayerInfo();
              player.showBtnInvite(true);
              var arrSeatExistLast = _this.getNumPlayers();
              if (1 == arrSeatExistLast.length) {
                _this.resetPlayersPlaying();
                _this.matchPot.active = false;
              }
              if (0 == seatId_7) {
                _this.node.active = false;
                Shan_Room_1.default.instance.node.active = true;
                _this.refeshListRoom();
              }
            }
            break;

           case Shan_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedKickOff(data);
            break;

           case Shan_Cmd_1.default.Code.NEW_USER_JOIN:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedUserJoinRoom(data);
            cc.log("<<<< New user join <<<< ", JSON.stringify(res));
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
                if (uStatus == Shan_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
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

           case Shan_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
            App_1.default.instance.showLoading(false);
            break;

           case Shan_Cmd_1.default.Code.UPDATE_MATCH:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedUpdateMatch(data);
            var myChair = res["myChair"];
            var hasInfo = res["hasInfo"];
            var infos = res["infos"];
            for (var index = 0; index < hasInfo.length; index++) {
              var pos = configPlayer[index]["playerPos"];
              if (hasInfo[pos]) {
                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                if (infos[pos]["status"] == Shan_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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

           case Shan_Cmd_1.default.Code.CHAT_ROOM:
            App_1.default.instance.showLoading(false);
            var res = new Shan_Cmd_1.default.ReceivedChatRoom(data);
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
      ShanController.prototype.onWsMatchStart = function(pkg) {
        var data = new Shan_Cmd_1.default.ReceivedMatchStart(pkg).data;
        console.log("Start game ", JSON.stringify(data.data));
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
        this.soundManager.playAudioEffect(audio_clip.START_BET);
      };
      ShanController.prototype.onGameBet = function(countDownTime, bankerChair, bankerPot, moneyAddToPot, warningCount) {
        cc.log("onGameBet", countDownTime, bankerChair, bankerPot, moneyAddToPot, warningCount);
        this.changeBankerChair(bankerChair);
        var timeW = this.updateWarningCount(warningCount);
        this.bankerPot = bankerPot;
        moneyAddToPot > 0 ? this.chipGroup.playerBet(this.getPlayerHouse[this.seatOwner], moneyAddToPot, true) : this.chipGroup.fixChipGroup(bankerPot);
        this.pot.setValue(bankerPot);
        0 != this.seatOwner && this.getPlayerHouse(0).status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && this.showSliderBet();
      };
      ShanController.prototype.changeBankerChair = function(chair) {
        if (this.seatOwner != chair) {
          this.seatOwner = chair;
          for (var i = 0; i < this.groupPlayers.children.length; i++) this.getPlayerHouse(i).setOwner(false);
          if (chair >= 0 && chair < this.groupPlayers.children) {
            var seatId = this.findPlayerSeatByPos(chair);
            var player = this.getPlayerHouse(seatId);
            player.setOwner(true);
            this.seatOwner = seatId;
            this._roomData;
          }
        }
      };
      ShanController.prototype.updateWarningCount = function(count) {
        return count <= 0 ? 0 : 2;
      };
      ShanController.prototype.onWsStartPhaseOne = function(data) {
        var _this = this;
        var res = new Shan_Cmd_1.default.ReceivedStartPhaseOne(data);
        console.log("Start phase one", JSON.stringify(res.data));
        this.stopBettingCountDown();
        this.btnBet.active = false;
        this.btnOpenCard.active = true;
        for (var i_1 = 0; i_1 < res.data.playerList.length; i_1++) {
          var playerData = res.data.playerList[i_1];
          var seatId = this.findPlayerSeatByPos(playerData.chair);
          var player = this.getPlayerHouse(seatId);
          if (player.status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && playerData.bet > 0) {
            player.setBet(playerData.bet);
            player.setGold(playerData.remainGold);
            0 == seatId;
          }
        }
        for (var index = 1; index < 8; index++) {
          var player = this.getPlayerHouse(index);
          player.showPopupBet(false);
          player.closePopupRequestDanhBien();
          player.isShowCard = false;
        }
        this.getPlayerHouse(0).isShowCard = false;
        var cards = res.data.cards;
        var timeChiaBai = res.data.countDownTime;
        this.currentCard = cards;
        var arrSeatExist = this.getNumPlayers();
        var numPlayer = arrSeatExist.length;
        this.genCardDeal();
        for (var index = 0; index < 24; index++) {
          this.cardsDeal.children[index].active = !(index >= 2 * numPlayer);
          this.cardsDeal.children[index].setPosition(0, 0);
          this.cardsDeal.children[index].angle = 0;
        }
        var timeShip = .1;
        var numCardPerPlayer = 2;
        for (var a = 0; a < numCardPerPlayer; a++) for (var b = 0; b < numPlayer; b++) {
          var seatId = arrSeatExist[b];
          if (-1 !== seatId) {
            var cardNode = this.cardsDeal.children[a * numPlayer + b];
            cardNode.active = true;
            var rawPlayerPos = new cc.Vec2(this.groupPlayers.children[seatId].position.x, this.groupPlayers.children[seatId].position.y);
            cc.tween(cardNode).delay((a * numPlayer + b) * timeShip).parallel(cc.tween().call(function() {
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
        var maxDelay = (2 * numPlayer + (numPlayer - 1)) * timeShip;
        var timeUnderLayer = 1e3 * (maxDelay + .2 + delayOver2Under);
        clearTimeout(this.timeoutChiaBaiDone);
        this.timeoutChiaBaiDone = setTimeout(function() {
          for (var index = 0; index < 8 * numCardPerPlayer; index++) _this.cardsDeal.children[index].active = false;
          for (var index = 0; index < numPlayer; index++) {
            var seatId = arrSeatExist[index];
            if (-1 !== seatId) {
              0 == seatId && _this.getPlayerHouse(seatId).resetCardReadyPhaseOne();
              _this.getPlayerHouse(seatId).showCardReadyPhaseOne(true);
              _this.getPlayerHouse(seatId).showCardReal(false);
            }
          }
        }, timeUnderLayer);
        var actions = [];
        actions.push(cc.delayTime(timeUnderLayer));
        var isInstantEndGame = false;
        var _loop_2 = function() {
          var tmpSeatId = this_2.findPlayerSeatByPos(res.data.dataList[i].chair);
          if (0 == tmpSeatId) isInstantEndGame = true; else {
            var tempPlayer_1 = this_2.getPlayerHouse(tmpSeatId);
            var tempDataCard_1 = res.data.dataList[i].cards;
            actions.push(cc.delayTime(.5), cc.callFunc(function() {
              tempPlayer_1.setCardData(tempDataCard_1);
            }));
          }
        };
        var this_2 = this;
        for (var i = 0; i < res.data.dataList.length; i++) _loop_2();
        var players = this.groupPlayers.children.filter(function(p) {
          return p.getComponent(Shan_Player_1.default).status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING;
        });
        actions.push(cc.delayTime(.5), cc.callFunc(function() {
          _this.onGamePlay(data.countDownTime, isInstantEndGame);
          for (var j = 0; j < players.length; j++) players[j].getComponent(Shan_Player_1.default).setVisibleWatingOpenCards(true);
        }));
        this.node.runAction(cc.sequence(actions));
      };
      ShanController.prototype.onGamePlay = function(seconds, isInstantEndGame) {
        var _this = this;
        this.timeCountDown.show("player_time", seconds, 0 == this.seatOwner);
        cc.log("gamePlay", this.getPlayerHouse(0).status, seconds, isInstantEndGame);
        if (this.getPlayerHouse(0).status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) if (seconds <= 5) this.getPlayerHouse(0).transformAllToCardReal(); else {
          this.nanBaiLayer.init(seconds, 0 == this.seatOwner, isInstantEndGame, this.getPlayerHouse(0).getCardData(), function() {
            _this._onNanBaiLayerClosed();
          });
          this.nodeShowCard.show(this.getPlayerHouse(0).getCardData());
        }
      };
      ShanController.prototype._onNanBaiLayerClosed = function() {
        this.getPlayerHouse(0).transformAllToCardReal();
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendSeen());
      };
      ShanController.prototype.onWsStartPhaseTwo = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedStartPhaseTwo(data);
        cc.log("start phase two ", JSON.stringify(res.data));
        this.onGamePhaseTwo(res.data.countDownTime);
      };
      ShanController.prototype.onGamePhaseTwo = function(countDownTime) {
        var _this = this;
        var isBanker = 0 == this.seatOwner;
        cc.tween(this.node).delay(.5).call(function() {
          _this.bankerPlayingNode.setActive(isBanker);
          _this.shouldShowBtnCompare();
        }).start();
        clearTimeout(this.timeoutEndGame);
        this.timeoutEndGame = setTimeout(function() {
          _this.startEndCountDown(countDownTime);
        }, 2e3);
        isBanker || this.nanBaiLayer.closeDialog();
        this.timeCountDown.show("banker_time", countDownTime, isBanker);
      };
      ShanController.prototype.shouldShowBtnCompare = function() {
        var isBanker = 0 == this.seatOwner;
        if (isBanker) {
          var countShan = 0;
          var countTwoCard = 0;
          var countThreeCard = 0;
          var countEmptyCard = 0;
          var playerSize = this.groupPlayers.children.length;
          for (var i = 1; i < playerSize; i++) {
            var p = this.getPlayerHouse(i);
            p.bgShan9.node.active || p.bgShan8.node.active || p.bgShanSap.node.active ? countShan++ : 2 == p._cardData.length ? countTwoCard++ : 3 == p._cardData.length ? countThreeCard++ : countEmptyCard++;
          }
          this.bankerPlayingNode.setActiveBtnCompare(countTwoCard > 0 && countThreeCard > 0);
        }
      };
      ShanController.prototype.onWsSeen = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedSeen(data);
        cc.log("seen ", JSON.stringify(res.data));
        var seatId = this.findPlayerSeatByPos(res.data.chair);
        var player = this.getPlayerHouse(seatId);
        player.setVisibleWatingOpenCards(false);
        0 == seatId ? this.nanBaiLayer.closeDialog() : player.getCardData().length > 0 && player.transformAllToCardReal();
      };
      ShanController.prototype.onWsMatchEnd = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedMatchEnd(data);
        cc.log("End game ", JSON.stringify(res.data));
        for (var i = 0; i < this.groupPlayers.children.length; i++) this.getPlayerHouse(this.findPlayerSeatByPos(i)).setVisibleWatingOpenCards(false);
        this.nanBaiLayer.closeDialog();
        this.onGameEndMatch(res.data);
        this.getPlayerHouse(0).status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING && Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendUserAction(this._userAction));
      };
      ShanController.prototype.onGameEndMatch = function(data) {
        Math.floor(data.bankerCards[0] / 4) == Math.floor(data.bankerCards[1] / 4) && Math.floor(data.bankerCards[1] / 4) == Math.floor(data.bankerCards[2] / 4) && (this._delayForJackPotWin = 2);
        0 == data.endType ? this.compareFinish(data) : this.manualFinish(data);
      };
      ShanController.prototype.compareFinish = function(data) {
        var _this = this;
        this.timeCountDown.showText("compare_3");
        this.btnBet.active = false;
        this.bankerPlayingNode.setActive(false);
        this.bankerPot = data.bankerPot;
        var banker = this.getPlayerHouse(this.seatOwner);
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
            var seatId = _this.findPlayerSeatByPos(listThree[i].chair);
            var player = _this.getPlayerHouse(seatId);
            if (0 != seatId) {
              player.setCardData(listThree[i].cards);
              player.transformAllToCardReal();
            }
          }
        }));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          banker.setCardData(data.bankerCards.slice(0, 2));
          banker.transformAllToCardReal();
          for (var i = 0; i < listThree.length; i++) {
            var seatId = _this.findPlayerSeatByPos(listThree[i].chair);
            var player = _this.getPlayerHouse(seatId);
            listThree[i].isWin ? player.showAnimWinLose(true) : player.showAnimWinLose(false);
          }
        }));
        actions.push(cc.callFunc(function() {
          var _loop_3 = function() {
            pData = listThree[i];
            var seatId = _this.findPlayerSeatByPos(pData.chair);
            player = _this.getPlayerHouse(seatId);
            var moneyChangeBeforTax = 0 == pData.moneyChangeBeforTax ? pData.moneyChange : pData.moneyChangeBeforTax;
            if (!pData.isWin) {
              player.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function(sender, data) {
                _this.chipGroup.playerBet(data.player, -moneyChangeBeforTax, false);
                player.hideBet();
                player.moneyChange(pData.moneyChange, pData.money, false);
              })));
              0 === seatId && _this.seatOwner !== seatId;
            }
          };
          var pData, player;
          for (var i = 0; i < listThree.length; i++) _loop_3();
        }));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          var cardNode = _this.cardsDeal.children[0];
          for (var i = 0; i < _this.cardsDeal.children.length; i++) if (!_this.cardsDeal.children[i].active) {
            cardNode = _this.cardsDeal.children[i];
            break;
          }
          var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[_this.seatOwner].position.x, _this.groupPlayers.children[_this.seatOwner].position.y);
          cc.tween(cardNode).delay(.1).parallel(cc.tween().call(function() {
            _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
          }), cc.tween().to(.2, {
            position: rawPlayerPos
          }, {
            easing: cc.easing.sineIn
          }), cc.tween().by(.2, {
            angle: 360
          }, {
            easing: cc.easing.sineIn
          })).call(function() {}).start();
          _this.timeoutChiaBaiDone = setTimeout(function() {
            cardNode.active = false;
            banker.showCardReadyThird(true);
            banker.showCardRealThird(false);
          }, .6);
          if (0 == _this.seatOwner) {
            banker.isShowCard = false;
            banker.addCardData(data.bankerCards[2]);
            cc.tween(banker.node).delay(.7).call(function() {
              banker.transformToCardReal(2, banker._cardData[2], 1);
              banker.showGroupName(cardNode.scale, false);
            }).start();
          }
        }));
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          _this.timeCountDown.showText("compare_2");
        }));
        actions.push(cc.delayTime(1.5));
        actions.push(cc.callFunc(function() {
          for (var i = 0; i < listTwo.length; i++) {
            var localChair = _this.findPlayerSeatByPos(listTwo[i].chair);
            var player = _this.getPlayerHouse(localChair);
            if (0 != localChair) {
              player.setCardData(listTwo[i].cards);
              player.transformAllToCardReal();
            }
          }
        }));
        actions.push(cc.delayTime(2));
        actions.push(cc.callFunc(function() {
          banker.setCardData(data.bankerCards);
          banker.isShowCard = false;
          banker.transformAllToCardReal();
          for (var i = 0; i < listTwo.length; i++) {
            var seatId = _this.findPlayerSeatByPos(listTwo[i].chair);
            var player = _this.getPlayerHouse(seatId);
            listTwo[i].isWin ? player.showAnimWinLose(true) : player.showAnimWinLose(false);
          }
        }));
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          var _loop_4 = function() {
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
              0 === localChair && this_3._getLocalChair(this_3.bankerChair) !== localChair;
            }
          };
          var this_3 = this, pData, localChair, player;
          for (var i = 0; i < listTwo.length; i++) _loop_4();
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
            var seatId = _this.findPlayerSeatByPos(listTwo[i].chair);
            var player = _this.getPlayerHouse(seatId);
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
              0 === seatId && _this.seatOwner !== seatId;
            }
          }
          0 === _this.seatOwner;
          _this.chipGroup.node.runAction(cc.callFunc(function() {
            _this.chipGroup.distributeMoney(dataPay);
          }));
        }));
        this.node.runAction(cc.sequence(actions));
      };
      ShanController.prototype.manualFinish = function(data) {
        var _this = this;
        this.timeCountDown.node.active = false;
        this.btnBet.active = false;
        this.bankerPlayingNode.setActive(false);
        this.bankerPot = data.bankerPot;
        var banker = this.getPlayerHouse(this.seatOwner);
        var actions = [];
        0 != data.endType && 1 != data.endType || actions.push(cc.callFunc(function() {
          var cardNode = _this.cardsDeal.children[0];
          for (var i = 0; i < _this.cardsDeal.children.length; i++) if (!_this.cardsDeal.children[i].active) {
            cardNode = _this.cardsDeal.children[i];
            break;
          }
          var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[_this.seatOwner].position.x, _this.groupPlayers.children[_this.seatOwner].position.y);
          cc.tween(cardNode).delay(.1).parallel(cc.tween().call(function() {
            _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
          }), cc.tween().to(.2, {
            position: rawPlayerPos
          }, {
            easing: cc.easing.sineIn
          }), cc.tween().by(.2, {
            angle: 360
          }, {
            easing: cc.easing.sineIn
          })).call(function() {}).start();
          _this.timeoutChiaBaiDone = setTimeout(function() {
            cardNode.active = false;
            banker.showCardReadyThird(true);
            banker.showCardRealThird(false);
          }, .6);
          if (0 == _this.seatOwner) {
            banker.addCardData(data.bankerCards[2]);
            banker.isShowCard = false;
            cc.tween(banker.node).delay(.7).call(function() {
              banker.transformAllToCardReal();
            }).start();
          }
        }));
        actions.push(cc.delayTime(1));
        actions.push(cc.callFunc(function() {
          for (var i = 0; i < data.playerList.length; i++) {
            var pData = data.playerList[i];
            var localChair = _this.findPlayerSeatByPos(pData.chair);
            var player = _this.getPlayerHouse(localChair);
            if (0 != localChair) {
              player.setCardData(pData.cards);
              player.transformAllToCardReal();
            }
          }
        }));
        if (0 != this.seatOwner) {
          actions.push(cc.delayTime(.5));
          actions.push(cc.callFunc(function() {
            banker.isShowCard = false;
            banker.setCardData(data.bankerCards);
            banker.transformAllToCardReal();
          }));
        }
        actions.push(cc.delayTime(.5));
        actions.push(cc.callFunc(function() {
          for (var i = 0; i < data.playerList.length; i++) {
            var pData = data.playerList[i];
            var localChair = _this.findPlayerSeatByPos(pData.chair);
            var player = _this.getPlayerHouse(localChair);
            pData.isWin ? player.showAnimWinLose(true) : player.showAnimWinLose(false);
          }
        }));
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
          var _loop_5 = function() {
            pData = data.playerList[i];
            localChair = _this.findPlayerSeatByPos(pData.chair);
            player = _this.getPlayerHouse(localChair);
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
              }, _this, {
                player: player,
                pData: pData
              })));
            }
            0 === localChair && _this.seatOwner !== localChair;
          };
          var pData, localChair, player;
          for (var i = 0; i < data.playerList.length; i++) _loop_5();
          0 === _this.seatOwner;
          _this.chipGroup.node.runAction(cc.sequence(cc.delayTime(hasPlayerLose ? 2 : 0), cc.callFunc(function() {
            _this.chipGroup.distributeMoney(dataPay);
          })));
        }));
        this.node.runAction(cc.sequence(actions));
      };
      ShanController.prototype.onWsMatchFinish = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedMatchFinish(data);
        cc.log("Finish ", JSON.stringify(res.data));
        this.onGameFinishMatch(res.data);
      };
      ShanController.prototype.onGameFinishMatch = function(data) {
        this.clean();
        this._userAction = false;
        this.unschedule(this.intervalEnd);
        this.notifyTimeEnd.active = false;
        this.notifyTimeEnd.parent.active = false;
        this.changeBankerChair(data.bankerChair);
        this.pot.setValue(data.bankerPot);
        0 == data.bankerPot && this.chipGroup.reset();
        this._roomData.playerList = data.playerList;
        for (var i = 0; i < this.groupPlayers.children.length; i++) {
          var p = this.getPlayerHouse(i);
          p.updateInfo(this._roomData.playerList[i]);
        }
        this.onGameNewMatch();
      };
      ShanController.prototype.clean = function() {
        this.node.stopAllActions();
        for (var i = 0; i < this.groupPlayers.children.length; i++) this.getPlayerHouse(i).clean();
        this.uiNode.removeAllChildren();
        this._userAction = false;
      };
      ShanController.prototype.onGameNewMatch = function() {
        this._updateRoomData();
        this.btnBet.active = false;
      };
      ShanController.prototype._updateRoomData = function() {
        this._updatePlayerNodes();
        this._updateRoomOwner();
        for (var i = 0; i < 8; i++) this.getPlayerHouse(i).setBaseBetAmount(this._roomData.moneyBet());
        this.chipGroup.initChip(this, this._roomData.moneyBet);
      };
      ShanController.prototype._updatePlayerNodes = function() {
        for (var i = 0; i < this._roomData.playerList.length; i++) {
          var d = this._roomData.playerList[i];
          var localChair = this.findPlayerSeatByPos(d.chair);
          this.getPlayerHouse(localChair).updateInfo(d);
        }
      };
      ShanController.prototype.showBankerWin = function(value, name) {};
      ShanController.prototype.onWsRoomInfo = function(data) {
        cc.log(data);
        this._roomData = data;
        this._updateRoomData();
        App_1.default.instance.showLoading(false);
      };
      ShanController.prototype.restoreGame = function(data) {
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
          var localChair = this.findPlayerSeatByPos(playerList[i].chair);
          0 != localChair ? playerList[i].isShow ? this.getPlayerHouse(localChair).instantlyAddCard(playerList[i].cards, true, this.node) : this.getPlayerHouse(localChair).instantlyAddCard([], false, this.node) : this.getPlayerHouse(0).instantlyAddCard(ownCardList, false, this.node);
          if (playerList[i].betAmount > 0) {
            this.getPlayerHouse(localChair).setBet(playerList[i].betAmount);
            this.getPlayerHouse(localChair).setGold(playerList[i].money);
            this.getPlayerHouse(localChair).showViewBet(playerList[i].betAmount, this._roomData.moneyBet, true);
          }
        }
        for (var i_2 = 0; i_2 < this.groupPlayers.children.length; i_2++) {
          var player = this.getPlayerHouse(i_2);
          player._data.stateId == Shan_Cmd_1.default.Code.PLAYER_STATUS_VIEWER && player.showWaitingNewMatch(true);
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
          this.getPlayerHouse(0).transformAllToCardReal();
          this.onGamePhaseTwo(countDownTime);
          break;

         case 4:
          this.pot.setValue(bankerPot);
        }
        this.getPlayerHouse(0).status !== Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING;
      };
      ShanController.prototype.onWsMatchKick = function() {};
      ShanController.prototype.onWsMatchInfo = function(data) {
        cc.log("On Ws Match info");
        var res = new Shan_Cmd_1.default.ReceivedMatchInfo(data);
        this.onMatchInfo(data);
      };
      ShanController.prototype.onMatchInfo = function(data) {
        cc.log("onWsMatchInfo", data);
        this.restoreGame(data);
        this.node.active = false;
      };
      ShanController.prototype.onWsDraw = function(data) {
        var _this = this;
        var res = new Shan_Cmd_1.default.ReceivedDrawCard(data);
        cc.log("on Ws draw ", res.data);
        if (0 != res.getError()) {
          cc.log("Draw err ", res.getError());
          return;
        }
        var seatId = this.findPlayerSeatByPos(res.data.chair);
        var player = this.getPlayerHouse(seatId);
        cc.log("Draw ", JSON.stringify(res.data));
        var cardNode = this.cardsDeal.children[0];
        for (var i = 0; i < this.cardsDeal.children.length; i++) if (!this.cardsDeal.children[i].active) {
          cardNode = this.cardsDeal.children[i];
          break;
        }
        cardNode.active = true;
        var rawPlayerPos = new cc.Vec2(this.groupPlayers.children[seatId].position.x, this.groupPlayers.children[seatId].position.y);
        cc.tween(cardNode).delay(.1).parallel(cc.tween().call(function() {
          _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
        }), cc.tween().to(.2, {
          position: rawPlayerPos
        }, {
          easing: cc.easing.sineIn
        }), cc.tween().by(.2, {
          angle: 360
        }, {
          easing: cc.easing.sineIn
        })).call(function() {
          cardNode.active = false;
          player.showCardReadyThird(true);
        }).start();
        if (0 == seatId) {
          this.getPlayerHouse(0).hideGroupName();
          player.addCardData(res.data.cardId);
          if (seatId == this.seatOwner) {
            var banker_1 = this.getPlayerHouse(this.seatOwner);
            banker_1.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
              banker_1.transformToCardReal(2, banker_1._cardData[2], 1);
            })));
          }
          this.nanBaiLayer.node.active && this.nanBaiLayer.drawCard(data.cardId);
        }
      };
      ShanController.prototype.onWsBetting = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedBet(data);
        if (0 != res.getError()) {
          cc.log("bet errr ", res.getError());
          return;
        }
        cc.log("Betting ", JSON.stringify(res.data));
        var chairDatCuoc = res.data.chair;
        var seatId = this.findPlayerSeatByPos(chairDatCuoc);
        var player = this.getPlayerHouse(seatId);
        data.totalBet != this.pot.getValue() && 0 != data.remainGold || 0 != seatId || (this.btnBet.active = false);
        0 == data.remainGold;
        data.totalBet == this.pot.getValue();
        if (-1 != seatId) {
          player.setBet(res.data.totalBet);
          player.addChips();
          player.setGold(res.data.remainGold);
        }
        this.soundManager.playAudioEffect(audio_clip.CHIP);
      };
      ShanController.prototype.onWsCompare = function() {};
      ShanController.prototype.onWsBankerWin = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedBankerWin(data);
        cc.log("Banker win ", JSON.stringify(res.data));
        this.changeBankerChair(-1);
        var seatId = this.findPlayerSeatByPos(res.data.chair);
        var player = this.getPlayerHouse(seatId);
        this.chipGroup.collectGold(player);
        player.moneyChange(data.moneyWin, data.balance, false);
        this.pot.setValue(0);
        this.showBankerWin(data.moneyWin, player.getUserName());
      };
      ShanController.prototype.onWsLeaveRoom = function(_data, callTime) {
        cc.log("onWsLeaveRoom", _data);
        var res = new Shan_Cmd_1.default.ReceivedRoomLeaving(_data);
        var data = res.data;
        if (0 == this.findPlayerSeatByUid(data.userId)) this.node.removeFromParent(); else {
          if (!this._userCouldLeaveRoom(data)) return;
          var localChair = this.findPlayerSeatByUid(data.userId);
          if (localChair == this.seatOwner) {
            if (this.getPlayerHouse(localChair).status == Shan_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
              this._showComputerPlayForBanker();
              return;
            }
            this.chipGroup.reset();
            this.pot.setValue(0);
          }
          this._roomData.roomOwnerId != data.roomOwnerId && (this._roomData.roomOwnerId = data.roomOwnerId);
          var playerList = this._roomData.playerList;
          var player = playerList.filter(function(p) {
            return p.userId == data.userId;
          })[0];
          player && this._removePlayer(data, playerList);
        }
      };
      ShanController.prototype._removePlayer = function(data, playerList) {
        var localChair = this.findPlayerSeatByUid(data.userId);
        playerList = this._roomData.playerList;
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
        if (this.getPlayerHouse(localChair)) var success = this.getPlayerHouse(localChair).updateInfo(d);
        this._updateRoomOwner();
      };
      ShanController.prototype._updateRoomOwner = function() {};
      ShanController.prototype._showComputerPlayForBanker = function() {
        this.getPlayerHouse(this.seatOwner).showComputerPlay();
      };
      ShanController.prototype._userCouldLeaveRoom = function(data) {
        var localChair = this.findPlayerSeatByUid(data.userId);
        if (isNaN(localChair)) return;
        return true;
      };
      ShanController.prototype.onWsCheckAction = function() {};
      ShanController.prototype.onWsRoomStartCountDown = function(data) {
        var res = new Shan_Cmd_1.default.ReceivedRoomStartCountDown(data);
        this.startWaittingCountDown(res.data.seconds);
        this.timeCountDown && this.timeCountDown.show("start_countdown", res.data.seconds);
      };
      ShanController.prototype.onWsRoomStopCountDown = function() {
        this.stopWaittingCountDown();
        this.timeCountDown && (this.timeCountDown.node.active = false);
      };
      ShanController.prototype.actReJoinRoom = function(res) {
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
        this.currentCard.length > 0 && ShanController_1.instance.showCardReal();
        if (countDownTime > 0) if (1 == this.gameState) {
          this.matchPot.active = true;
          this.startBettingCountDown(countDownTime);
        } else this.startEndCountDown(countDownTime);
      };
      ShanController.prototype.showSliderBet = function() {
        this.arrBetValue = [];
        for (var index = 0; index < 4; index++) {
          this.arrBetValue.push(this.currentRoomBet * (index + 1));
          var raw = this.currentRoomBet * (4 - index);
          this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = 1500 == raw ? "1.5K" : Utils_1.default.formatNumberMin(raw);
        }
        if (!this.getPlayerHouse(0).isViewing) if (0 == this.seatOwner) {
          this.btnOpenCard.active = false;
          this.btnBet.active = false;
        } else {
          this.btnBet.active = true;
          this.btnOpenCard.active = false;
          this.setupBet();
        }
      };
      ShanController.prototype.actionLeaveRoom = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendRequestLeaveGame());
        this.soundManager.effSound.stop();
      };
      ShanController.prototype.actionOpenCard = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendMoBai());
        this.btnOpenCard.active = false;
      };
      ShanController.prototype.actionSendVaoGa = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendVaoGa());
        this.matchPot.children[0].color = cc.Color.WHITE;
        this.matchPot.getComponent(cc.Button).interactable = false;
      };
      ShanController.prototype.actionAcceptDanhBien = function(event, seatId) {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendAcceptDanhBien(configPlayer[seatId].playerPos));
        this.getPlayerHouse(seatId).closePopupRequestDanhBien();
      };
      ShanController.prototype.increaseBetValue = function() {
        this.currentBetSelectedIndex == this.arrBetValue.length - 1 || (this.currentBetSelectedIndex += 1);
        this.betChooseValueTarget.x = this.arrBetPos[this.currentBetSelectedIndex];
      };
      ShanController.prototype.actClickBetValue = function(even, data) {
        data = parseInt(data);
        this.currentBetSelectedIndex = data;
        this.betChooseValueTarget.x = this.arrBetPos[this.currentBetSelectedIndex];
      };
      ShanController.prototype.decreaseBetValue = function() {
        0 == this.currentBetSelectedIndex || (this.currentBetSelectedIndex -= 1);
        this.betChooseValueTarget.x = this.arrBetPos[this.currentBetSelectedIndex];
      };
      ShanController.prototype.actionBet = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendDatCuoc(this.currentBetSelectedIndex + 1));
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
      ShanController.prototype.actionDanhBien = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2));
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableDanhBien(level);
          this.getPlayerHouse(seatId).showChatMsg("\u101e\u102e\u1038\u101e\u1014\u1037\u103a\u101c\u1031\u102c\u1004\u103a\u1038\u1000\u103c\u1031\u1038");
          Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendDanhBien(pos, level));
        }
      };
      ShanController.prototype.actionKeCua = function(event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2)) - 2;
        var pos = this.findPlayerPosBySeat(seatId);
        if (-1 != pos) {
          this.getPlayerHouse(seatId).disableKeCua(level);
          Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.CmdSendKeCua(pos, level));
        }
      };
      ShanController.prototype.initConfigPlayer = function() {
        configPlayer = [];
        for (var index = 0; index < 8; index++) configPlayer.push({
          seatId: index,
          playerId: -1,
          playerPos: -1,
          isViewer: true
        });
      };
      ShanController.prototype.resetPlayersPlaying = function() {
        for (var index = 0; index < 8; index++) this.getPlayerHouse(index).resetMatchHistory();
      };
      ShanController.prototype.setupSeatPlayer = function(seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        var player = this.getPlayerHouse(seatId);
        player.setAvatar(playerInfo.avatar);
        player.setName(playerInfo.nickName);
        player.setGold(playerInfo.money);
        this.gameState > 0 && !player.isViewing && player.showCardReal(true);
      };
      ShanController.prototype.findPlayerSeatByUid = function(uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerId === uid && (seat = configPlayer[index].seatId);
        return seat;
      };
      ShanController.prototype.findPlayerPosBySeat = function(seat) {
        return configPlayer[seat].playerPos;
      };
      ShanController.prototype.findPlayerSeatByPos = function(pos) {
        if (-1 == pos) return -1;
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) configPlayer[index].playerPos === pos && (seat = configPlayer[index].seatId);
        return seat;
      };
      ShanController.prototype.getPlayerHouse = function(seatId) {
        return this.groupPlayers.children[seatId].getComponent(Shan_Player_1.default);
      };
      ShanController.prototype.getNumPlayers = function() {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) -1 === configPlayer[index].playerId || configPlayer[index].isViewer || playerPosEntry.push(configPlayer[index].seatId);
        return playerPosEntry;
      };
      ShanController.prototype.showCardReal = function() {
        this.getPlayerHouse(0).isShowCard = true;
        this.getPlayerHouse(0).transformAllToCardReal();
      };
      ShanController.prototype.draw = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendDraw());
      };
      ShanController.prototype.noDraw = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendNoDraw());
      };
      ShanController.prototype.compare = function() {
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendCompare());
      };
      var ShanController_1;
      ShanController.instance = null;
      __decorate([ property(cc.Prefab) ], ShanController.prototype, "nanBaiPrefab", void 0);
      __decorate([ property(cc.Prefab) ], ShanController.prototype, "bankerPlayingPrefab", void 0);
      __decorate([ property(cc.Toggle) ], ShanController.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], ShanController.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "nodeSetting", void 0);
      __decorate([ property(Sham_TimeCountDown_1.default) ], ShanController.prototype, "timeCountDown", void 0);
      __decorate([ property(Shan_Pot_1.default) ], ShanController.prototype, "pot", void 0);
      __decorate([ property(Shan_ChipGroup_1.default) ], ShanController.prototype, "chipGroup", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "bgChat", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "contentChatNhanh", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "boxSetting", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "UI_Playing", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "meCards", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "groupPlayers", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "matchPot", void 0);
      __decorate([ property(cc.Label) ], ShanController.prototype, "labelMatchPot", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "cardsDeal", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "btnBet", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "btnOpenCard", void 0);
      __decorate([ property(cc.Button) ], ShanController.prototype, "btnLeaveRoom", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "hubChips", void 0);
      __decorate([ property(cc.Label) ], ShanController.prototype, "labelRoomId", void 0);
      __decorate([ property(cc.Label) ], ShanController.prototype, "labelRoomBet", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "actionBetting", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "betChooseValue", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "betChooseValueTarget", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "bgWarningCount", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "popupMatchResult", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "contentMatchResult", void 0);
      __decorate([ property(cc.Prefab) ], ShanController.prototype, "prefabItemResult", void 0);
      __decorate([ property(cc.ScrollView) ], ShanController.prototype, "scrollMatchResult", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "notifyTimeStart", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "notifyTimeEnd", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "notifyTimeBet", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "UI_Chat", void 0);
      __decorate([ property(cc.EditBox) ], ShanController.prototype, "edtChatInput", void 0);
      __decorate([ property(cc.Node) ], ShanController.prototype, "popupGuide", void 0);
      __decorate([ property(NodeShowCard) ], ShanController.prototype, "nodeShowCard", void 0);
      ShanController = ShanController_1 = __decorate([ ccclass ], ShanController);
      return ShanController;
    }(cc.Component);
    exports.default = ShanController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "./Shan.CardUtil": "Shan.CardUtil",
    "./Shan.Cmd": "Shan.Cmd",
    "./Shan.Contants": "Shan.Contants",
    "./Shan.NetworkClient": "Shan.NetworkClient",
    "./Shan.Player": "Shan.Player",
    "./Shan.Room": "Shan.Room",
    "./common/Sham.TimeCountDown": "Sham.TimeCountDown",
    "./common/Shan.BankerPlayingNode": "Shan.BankerPlayingNode",
    "./common/Shan.ChipGroup": "Shan.ChipGroup",
    "./common/Shan.NanBai": "Shan.NanBai",
    "./common/Shan.Pot": "Shan.Pot"
  } ],
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
    var Shan_Controller_1 = require("./Shan.Controller");
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
      ShanItemRoom.prototype.chooseRoom = function() {
        Shan_Controller_1.default.instance.joinRoom(this.roomInfo);
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
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Shan.Controller": "Shan.Controller"
  } ],
  "Shan.NanBai": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a631brghOxEoI/7l5SFZCrh", "Shan.NanBai");
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
    var Shan_Controller_1 = require("../Shan.Controller");
    var Shan_Card_1 = require("./Shan.Card");
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
        return _this;
      }
      NodeNanBai.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.maskTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.maskTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.maskTouchEnd, this);
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
          c.setCardData(cardIds[i]);
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
            Shan_Controller_1.default.instance._userAction = true;
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
        Shan_Controller_1.default.instance._userAction = true;
        this.enableBtns(false);
        this.btnOpen.active = false;
        Shan_Controller_1.default.instance.draw();
      };
      NodeNanBai.prototype.onBtnNoDrawClicked = function() {
        Shan_Controller_1.default.instance._userAction = true;
        this.enableBtns(false);
        this.btnOpen.active = false;
        cc.log("closeDialog onBtnNoDrawClicked");
        this.closeDialog();
      };
      NodeNanBai.prototype.onBtnOpenClicked = function() {
        Shan_Controller_1.default.instance._userAction = true;
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
        card.setCardData(cardId);
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
    "../Shan.Controller": "Shan.Controller",
    "./Shan.Card": "Shan.Card"
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
    var ShanNetworkClient = function(_super) {
      __extends(ShanNetworkClient, _super);
      function ShanNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
      }
      ShanNetworkClient.getInstance = function() {
        null == this.instance && (this.instance = new ShanNetworkClient());
        return this.instance;
      };
      ShanNetworkClient.prototype.connect = function() {
        _super.prototype.connect.call(this, "shankoemee.vietkieu888.com", 443);
      };
      ShanNetworkClient.prototype.onOpen = function(ev) {
        _super.prototype.onOpen.call(this, ev);
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
      ShanNetworkClient.prototype.send = function(packet) {
        cc.log(">>>>>", packet._cmdId, ">>>>>");
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++) b[c] = packet._data[c];
        null != this.ws && this.isConnected() && this.ws.send(b.buffer);
      };
      return ShanNetworkClient;
    }(Network_NetworkClient_1.default);
    exports.default = ShanNetworkClient;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.NetworkListener": void 0
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
    var BaCay_Cmd_1 = require("../../BaCay/BaCayScript/BaCay.Cmd");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var Shan_Chip_1 = require("./common/Shan.Chip");
    var Shan_ChipGroup_1 = require("./common/Shan.ChipGroup");
    var Shan_Utils_1 = require("./common/Shan.Utils");
    var ShanCardGroup_1 = require("./Model/ShanCardGroup");
    var ShanCardGroupName_1 = require("./Model/ShanCardGroupName");
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = _super.call(this) || this;
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
        _this.prefabChip = null;
        _this.notify = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.popupBet = null;
        _this.popupRequestDanhBien = null;
        _this.labelValueDanhBien = null;
        _this.dataAnimWin = null;
        _this.fontNumber = [];
        _this.waitingOpen = null;
        _this.lbPoint = null;
        _this.posCardOpened = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        _this.animWinLose = null;
        _this.isShowCard = false;
        _this.isViewing = false;
        _this.status = 0;
        _this.bgPoint = null;
        _this.bgPointLose = null;
        _this.bgShan8 = null;
        _this.bgShan9 = null;
        _this.bgShanSap = null;
        _this.bgPoint = null;
        _this.multiple = null;
        _this.waitingOpen = null;
        _this._isBanker = false;
        return _this;
      }
      Player.prototype.start = function() {
        this.userNode || (this.userNode = this.node.children[3]);
        this.bgBet || (this.bgBet = this.hub.parent);
        for (var i = 0; i < this.cardReal.childrenCount; i++) {
          var card = this.cardReal.children[i].children[0];
          card["initPos"] = card.getPosition();
        }
        this.lbPoint || (this.lbPoint = this.cardsName.children[0].getComponent(cc.Label));
        this.bgPoint || (this.bgPoint = this.cardsName);
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
      Player.prototype.showCardReady = function(state, num) {
        num || (num = 3);
        this.node.children[2].active = true;
        this.cardReady.active = state;
        this.cardReady.children.forEach(function(elm) {
          return elm.active = false;
        });
        for (var i = 0; i < num; i++) this.cardReady.children[0].active = true;
      };
      Player.prototype.showCardReadyPhaseOne = function(state) {
        this.node.children[2].active = true;
        this.cardReady.active = state;
        this.cardReal.children[0].active = false;
        this.cardReal.children[1].active = false;
        this.cardReal.children[2].active = false;
        this.showCardReadyThird(false);
      };
      Player.prototype.showCardReadyThird = function(state) {
        this.cardReady.children[2].active = state;
      };
      Player.prototype.showCardReal = function(state, num) {
        num || (num = 3);
        this.cardsName.active = false;
        this.node.children[2].active = true;
        this.cardReal.active = state;
        this.cardReal.children[0].active = num > 0;
        this.cardReal.children[1].active = num > 1;
        this.cardReal.children[2].active = num > 2;
      };
      Player.prototype.showCardRealPhaseOne = function(state) {
        this.cardsName.active = false;
        this.node.children[2].active = true;
        this.cardReal.active = state;
        this.cardReal.children[0].active = true;
        this.cardReal.children[1].active = true;
        this.cardReal.children[2].active = false;
      };
      Player.prototype.showCardRealThird = function(state) {
        this.cardsName.active = false;
        this.node.children[2].active = true;
        this.cardReal.active = state;
        this.cardReal.children[2].active = true;
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
        cardReady.active = false;
        var cardReal = this.cardReal.children[cardPos].children[0].getComponent("TienLen.Card");
        cardReal.node.parent.active = true;
        var delay = .1 * indexCard;
        this.effCard(cardReal, delay, idCard);
        this.isShowCard = true;
      };
      Player.prototype.transformAllToCardReal = function() {
        if (0 == this._cardData.length || this.isShowCard) return;
        for (var i = 0; i < this._cardData.length; i++) this.transformToCardReal(i, this._cardData[i], i);
      };
      Player.prototype.transformCardRealPhaseOne = function() {
        for (var i = 0; i < this._cardData.length; i++) this.transformToCardReal(i, this._cardData[i], i);
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
      Player.prototype._showCardGroup = function() {
        var group = new ShanCardGroup_1.default();
        group.setCards(this._cards);
        var scale = this._cards[0].getTargetScale() || this._cards[0].node.scale;
        var animScale = scale;
        0 != this.localChair && (animScale *= 1.2);
        if (group.getGroupName().valueOf() == ShanCardGroupName_1.default.NONE.valueOf()) {
          this.bgPoint.active = true;
          10 == group.getPoint() ? this.lbPoint.string = " \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038" : this.lbPoint.string = group.getPoint() + "  \u101b\u1019\u103e\u1010\u103a\u1019\u103b\u102c\u1038";
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
          this.bgShanSap.animation = "animation";
          return this.bgShanSap.node;
        }
        this.bgPoint.active = false;
        this.lbPoint.string = "";
        if (8 == group.getPoint()) {
          this.bgShan8.node.active = true;
          this.bgShan8.node.scale = animScale;
          this.bgShan8.animation = "cam";
          0 === this.localChair;
          return this.bgShan8.node;
        }
        if (9 == group.getPoint()) {
          this.bgShan9.node.active = true;
          this.bgShan9.node.scale = animScale;
          this.bgShan9.animation = "cam";
          0 === this.localChair;
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
        this.cardReady.children[0].active = true;
        this.cardReady.children[1].scale = 1;
        this.cardReady.children[1].active = true;
        this.cardReady.children[2].scale = 1;
        this.cardReady.children[2].active = true;
        this.cardReady.active = false;
      };
      Player.prototype.resetCardReadyPhaseOne = function() {
        this.cardReady.children[0].scale = 1;
        this.cardReady.children[0].active = true;
        this.cardReady.children[1].scale = 1;
        this.cardReady.children[1].active = true;
        this.cardReady.children[2].scale = 1;
        this.cardReady.children[2].active = false;
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
      Player.prototype.addCardData = function(card) {
        this._cardData.push(card);
      };
      Player.prototype.getCardData = function() {
        return this._cardData;
      };
      Player.prototype.setCardData = function(cardData) {
        this._cardData = cardData;
      };
      Player.prototype.setVisibleWatingOpenCards = function(value) {
        this.waitingOpen && (this.waitingOpen.active = value);
      };
      Player.prototype.hideBet = function() {
        this.hub.parent && (this.hub.parent.active = false);
      };
      Player.prototype.moneyChange = function(moneyChange, targetMoney, isSpawn) {
        this.userGold && this.fxGoldChange(targetMoney - moneyChange, targetMoney, this.userGold);
        "undefined" != typeof targetMoney;
      };
      Player.prototype.updateInfo = function(data) {
        cc.log("updateUserInfo", data);
        this._data = data;
        this.userGold && this.setGold(this._data.money);
        if (this._data && this._data.stateId == BaCay_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME) {
          this.userNode.active = false;
          return false;
        }
        this.userNode && (this.userNode.active = true);
        this.userName && this.setName(this._data.userName);
        this._data.avatar && this.setAvatar(this._data.avatar);
        this.notify && (this.notify.active = false);
        return true;
      };
      Player.prototype.setBaseBetAmount = function(value) {
        this._baseBetAmount = value;
      };
      Player.prototype.instantlyAddCard = function(data, isShow, nodeHasCard) {
        cc.log("instantlyAddCard", data, isShow);
        if (this._data.stateId == BaCay_Cmd_1.default.Code.PLAYER_STATUS_OUT_GAME || !data) return;
        var numberOfCard = isShow ? data.length : data;
        isShow && (this._cardData = data);
        this.showCardReady(true, this._cardData.length);
        this.showCardReal(true, this._cardData.length);
        isShow && this.showGroupName();
        cc.log("checker", this._cards.length, this._cardData.length, data, isShow);
        return this._cards;
      };
      Player.prototype.showWaitingNewMatch = function(boolean) {
        this.lbWaiting && (this.lbWaiting.node.active = boolean);
      };
      Player.prototype.showViewBet = function(bet, roomBet, disableEffect) {
        if (disableEffect) {
          this.bgBet.active = true;
          this.goldBet.string = this.getBetAmount();
        } else {
          var arrC = Shan_Utils_1.getArrChipFromMoney(bet);
          for (var i = 0; i < arrC.length; i++) {
            var chip = cc.instantiate(this.prefabChip).getComponent(Shan_Chip_1.default);
            chip.setValues(arrC[i]);
            chip.node.scale = .5;
            chip.node.active = true;
            chip.node.opacity = 0;
            chip.node.setPosition(this.userGold.node.getPosition());
            this.node.addChild(chip.node);
            var pos = this.localChair > 3 ? this.bgBet.getPosition().sub(cc.v2(this.bgBet.width / 2 - 15, 0)) : this.bgBet.getPosition().add(cc.v2(this.bgBet.width / 2 - 15, 0));
            chip.node.runAction(cc.sequence(cc.spawn(cc.moveTo(Shan_ChipGroup_1.default.TIME_FADE_CHIP, pos).easing(cc.easeOut(1)), cc.fadeIn(Shan_ChipGroup_1.default.TIME_FADE_CHIP)), cc.removeSelf(), cc.callFunc(function() {
              this.lbBetAmount.string = this.getBetAmount().shorten(2);
            }.bind(this))));
          }
          if (!this.bgBet.active) {
            this.bgBet.active = true;
            this.bgBet.opacity = 0;
            this.bgBet.runAction(cc.fadeIn(Shan_ChipGroup_1.default.TIME_FADE_CHIP));
          }
        }
      };
      Player.prototype.getBetAmount = function() {
        return this._data.betAmount || 0;
      };
      Player.prototype.showComputerPlay = function() {
        this._data.userName = "compute playing";
        this.userName.string = this._data.userName;
      };
      Player.prototype.clean = function() {
        this.node.stopAllActions();
        this._cards.forEach(function(c) {
          c.stopAllActions();
          c.node.removeFromParent();
          c.setDarkMode(false);
        });
        this._cards = [];
        this._cardData = [];
        this.setDarkMode && this.setDarkMode(false);
        this.resetMatchHistory();
      };
      Player.prototype.setDarkMode = function(boolean) {
        if (boolean) {
          this.bgPointLose.active = true;
          this.lbPoint.node.color = new cc.Color(0, 0, 0, 255);
          this.avatar && (this.avatar.color = new cc.Color(80, 80, 80, 255));
        } else {
          this.bgPointLose.active = false;
          this.lbPoint.node.color = new cc.Color(139, 65, 21, 255);
          this.avatar && (this.avatar.color = new cc.Color(255, 255, 255, 255));
        }
      };
      Player.prototype.hideGroupName = function() {
        this.multiple && (this.multiple.node.active = false);
        this.bgPoint.active = false;
        this.bgShan8.node.active = false;
        this.bgShan9.node.active = false;
        this.bgShanSap.node.active = false;
      };
      Player.prototype.getUserName = function() {
        return this._data.userName || "";
      };
      Player.prototype.getChair = function() {
        return this._data.chair;
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
      __decorate([ property(cc.Prefab) ], Player.prototype, "prefabChip", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "notify", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatEmotion", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "chatMsg", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "popupBet", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "popupRequestDanhBien", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "labelValueDanhBien", void 0);
      __decorate([ property(sp.SkeletonData) ], Player.prototype, "dataAnimWin", void 0);
      __decorate([ property([ cc.BitmapFont ]) ], Player.prototype, "fontNumber", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "waitingOpen", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lbPoint", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "bgShan8", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "bgShan9", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "bgShanSap", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../BaCay/BaCayScript/BaCay.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./Model/ShanCardGroup": "ShanCardGroup",
    "./Model/ShanCardGroupName": "ShanCardGroupName",
    "./common/Shan.Chip": "Shan.Chip",
    "./common/Shan.ChipGroup": "Shan.ChipGroup",
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
        _this.isSortRoom = false;
        return _this;
      }
      ShanRoom_1 = ShanRoom;
      ShanRoom.prototype.onLoad = function() {
        ShanRoom_1.instance = this;
        null != Shan_NetworkClient_1.default.getInstance().ws && (Shan_NetworkClient_1.default.getInstance()._onCloses = []);
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
            var cb = function(res) {
              _this.UI_Playing.getComponent("Shan.Controller").setupMatch(res);
            };
            _this.showUIPlaying(res, cb);
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
        var _this = this;
        if (null == this.UI_Playing) {
          App_1.default.instance.showLoading(true);
          cc.assetManager.getBundle("Shan").load("prefabs/UI_Play", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
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
        Shan_NetworkClient_1.default.getInstance().send(new Shan_Cmd_1.default.SendCreateRoom(Configs_1.default.App.MONEY_TYPE, 8, data.moneyBet, 0, 8, "", "", data.moneyRequire));
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
  "Shan.Utils": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80288dJkXdMnKqJJqxPvS01", "Shan.Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getArrChipFromMoney = void 0;
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
    cc._RF.pop();
  }, {} ],
  ShanCardGroupName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "974c4N5KuNFaqBofUKp1XGs", "ShanCardGroupName");
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
    var GROUP_CARD_NAME = function() {
      function GROUP_CARD_NAME(value) {
        this.setValue("Shan.GROUP_CARD_NAME", value);
      }
      GROUP_CARD_NAME_1 = GROUP_CARD_NAME;
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
      var GROUP_CARD_NAME_1;
      GROUP_CARD_NAME.NONE = new GROUP_CARD_NAME_1(0);
      GROUP_CARD_NAME.SAP = new GROUP_CARD_NAME_1(1);
      GROUP_CARD_NAME.SHAN = new GROUP_CARD_NAME_1(2);
      GROUP_CARD_NAME.ALL = {
        0: GROUP_CARD_NAME_1.NONE,
        1: GROUP_CARD_NAME_1.SAP,
        2: GROUP_CARD_NAME_1.SHAN
      };
      GROUP_CARD_NAME = GROUP_CARD_NAME_1 = __decorate([ ccclass ], GROUP_CARD_NAME);
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
      function CardGroup() {
        this._groupName = ShanCardGroupName_1.default.NONE;
        this._multiple = 1;
      }
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
}, {}, [ "Shan.CardRank", "Shan.CardSuit", "ShanCardGroup", "ShanCardGroupName", "Shan.CardUtil", "Shan.Cmd", "Shan.Contants", "Shan.Controller", "Shan.ItemResult", "Shan.ItemRoom", "Shan.ItemRoomz", "Shan.NetworkClient", "Shan.Player", "Shan.Room", "Sham.TimeCountDown", "Shan.BankerPlayingNode", "Shan.Card", "Shan.Chip", "Shan.ChipGroup", "Shan.NanBai", "Shan.Pot", "Shan.Res", "Shan.Utils", "Shan.CreateRoomItem", "Shan.PopupCreateRoom" ]);