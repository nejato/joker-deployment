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
  "ShootFish.Bullet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36d2bcC+d9JWLYn26kehzX6", "ShootFish.Bullet");
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
    var ShootFish_Play_1 = require("./ShootFish.Play");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bullet = function(_super) {
      __extends(Bullet, _super);
      function Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bullet = null;
        _this.fishNet = null;
        _this.id = "";
        _this.targetFishId = -1;
        _this.worldSize = cc.size(1280, 720);
        _this.exploreDuration = .8;
        _this.vX = 0;
        _this.vY = 0;
        _this.collisionCount = 4;
        _this.isExplored = false;
        _this.isExploring = false;
        _this.curExplore = 0;
        _this.circle = null;
        return _this;
      }
      Bullet.prototype.run = function() {
        var speed = Number(ShootFish_Play_1.default.SERVER_CONFIG["BulletSpeed"]);
        (isNaN(speed) || 0 == speed) && (speed = 1400);
        var v = Utils_1.default.degreesToVec2(this.node.angle);
        this.vX = v.x * speed;
        this.vY = v.y * speed;
        this.collisionCount = 4;
        this.isExplored = false;
        this.isExploring = false;
        this.bullet.active = true;
        this.fishNet.active = false;
        this.circle = new SAT.Circle(new SAT.Vector(this.node.position.x, this.node.position.y), Number(ShootFish_Play_1.default.SERVER_CONFIG["BulletRadius"]));
      };
      Bullet.prototype.updateRealTime = function(dt) {
        if (this.isExplored) return;
        if (this.isExploring) {
          this.curExplore -= dt;
          if (this.curExplore <= 0) {
            this.isExplored = true;
            this.node.active = false;
          }
          return;
        }
        var newPos = this.node.position;
        newPos.x += this.vX * dt;
        newPos.y += this.vY * dt;
        this.node.position = newPos;
        if (Math.abs(newPos.x) > this.worldSize.width / 2) {
          this.vX *= -1;
          var angle = Math.atan2(this.vY, this.vX) * Utils_1.default.Rad2Deg;
          this.node.angle = angle;
          newPos.x = (newPos.x < 0 ? -1 : 1) * this.worldSize.width / 2;
          this.node.position = newPos;
          this.collisionCount--;
        } else if (Math.abs(newPos.y) > this.worldSize.height / 2) {
          this.vY *= -1;
          var angle = Math.atan2(this.vY, this.vX) * Utils_1.default.Rad2Deg;
          this.node.angle = angle;
          newPos.y = (newPos.y < 0 ? -1 : 1) * this.worldSize.height / 2;
          this.node.position = newPos;
          this.collisionCount--;
        }
        this.circle.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
        this.collisionCount < 0 && (this.node.active = false);
      };
      Bullet.prototype.explore = function() {
        this.isExploring = true;
        this.curExplore = this.exploreDuration;
        this.bullet.active = false;
        this.fishNet.active = true;
        this.fishNet.opacity = 0;
        this.fishNet.angle = 0;
        this.fishNet.scale = 0;
        this.fishNet.stopAllActions();
        this.fishNet.runAction(cc.spawn(cc.sequence(cc.scaleTo(.3, 1.1), cc.delayTime(.07), cc.scaleTo(.3, 1)), cc.fadeIn(.1), cc.sequence(cc.delayTime(.25), cc.rotateTo(.5, 35)), cc.sequence(cc.delayTime(.4), cc.fadeOut(.3))));
      };
      Bullet.prototype.getCircle = function() {
        return this.circle;
      };
      __decorate([ property(cc.Node) ], Bullet.prototype, "bullet", void 0);
      __decorate([ property(cc.Node) ], Bullet.prototype, "fishNet", void 0);
      Bullet = __decorate([ ccclass ], Bullet);
      return Bullet;
    }(cc.Component);
    exports.default = Bullet;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./ShootFish.Play": "ShootFish.Play"
  } ],
  "ShootFish.CoinEffect": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3de4Savp5BHqfZYOvwMNmn", "ShootFish.CoinEffect");
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
    var CoinEffect = function(_super) {
      __extends(CoinEffect, _super);
      function CoinEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblCoin = null;
        _this.coinExplore = null;
        _this.coin0 = null;
        _this.coin1 = null;
        _this.coin2 = null;
        return _this;
      }
      CoinEffect.prototype.run = function(coin, startPos, toPos) {
        var _this = this;
        this.coinExplore.node.position = startPos;
        this.coin0.stopAllActions();
        this.coin0.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin0.scale = 0;
        this.coin1.stopAllActions();
        this.coin1.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin1.scale = 0;
        this.coin2.stopAllActions();
        this.coin2.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin2.scale = 0;
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
        this.lblCoin.node.position = startPos;
        this.lblCoin.node.stopAllActions();
        this.lblCoin.node.opacity = 0;
        this.lblCoin.node.scale = 0;
        this.lblCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.2), cc.scaleTo(.2, 1)), cc.moveBy(.1, new cc.Vec2(0, 5)), cc.moveBy(.1, new cc.Vec2(0, -5)), cc.moveBy(.1, new cc.Vec2(0, 5)), cc.moveBy(.1, new cc.Vec2(0, -5)), cc.moveBy(.1, new cc.Vec2(0, 5)), cc.moveBy(.1, new cc.Vec2(0, -5)), cc.moveBy(.1, new cc.Vec2(0, 5)), cc.moveBy(.1, new cc.Vec2(0, -5)), cc.fadeOut(.15)));
        this.coinExplore.setAnimation(0, "Idle", false);
        this.coin0.runAction(cc.sequence(cc.scaleTo(.15, Utils_1.default.randomRange(.7, 1)), cc.delayTime(.4), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveTo(.7, toPos), cc.scaleTo(.15, 0)));
        this.coin1.runAction(cc.sequence(cc.scaleTo(.15, Utils_1.default.randomRange(.7, 1)), cc.delayTime(.55), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveTo(.7, toPos), cc.scaleTo(.15, 0)));
        this.coin2.runAction(cc.sequence(cc.scaleTo(.15, Utils_1.default.randomRange(.7, 1)), cc.delayTime(.7), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveBy(.1, new cc.Vec2(0, 50)), cc.moveBy(.1, new cc.Vec2(0, -50)), cc.moveTo(.7, toPos), cc.scaleTo(.15, 0), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(cc.Label) ], CoinEffect.prototype, "lblCoin", void 0);
      __decorate([ property(sp.Skeleton) ], CoinEffect.prototype, "coinExplore", void 0);
      __decorate([ property(cc.Node) ], CoinEffect.prototype, "coin0", void 0);
      __decorate([ property(cc.Node) ], CoinEffect.prototype, "coin1", void 0);
      __decorate([ property(cc.Node) ], CoinEffect.prototype, "coin2", void 0);
      CoinEffect = __decorate([ ccclass ], CoinEffect);
      return CoinEffect;
    }(cc.Component);
    exports.default = CoinEffect;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "ShootFish.EffectBigWin": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e4a4YbN9FGnbtYmPvTrs9e", "ShootFish.EffectBigWin");
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
    var EffectBigWin = function(_super) {
      __extends(EffectBigWin, _super);
      function EffectBigWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        return _this;
      }
      EffectBigWin.prototype.show = function(isShow, nickname, coin) {
        var _this = this;
        void 0 === nickname && (nickname = null);
        void 0 === coin && (coin = 0);
        this.node.stopAllActions();
        if (isShow) {
          this.lblCoin.string = Utils_1.default.formatNumber(coin);
          this.lblCoin.node.active = false;
          this.lblNickname.string = nickname;
          this.lblNickname.node.active = false;
          this.skeleton.setAnimation(0, "animation", false);
          this.node.active = true;
          this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
            _this.lblNickname.node.active = true;
            _this.lblCoin.node.active = true;
          }), cc.delayTime(3), cc.callFunc(function() {
            _this.node.active = false;
          })));
        } else this.node.active = false;
      };
      __decorate([ property(sp.Skeleton) ], EffectBigWin.prototype, "skeleton", void 0);
      __decorate([ property(cc.Label) ], EffectBigWin.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], EffectBigWin.prototype, "lblCoin", void 0);
      EffectBigWin = __decorate([ ccclass ], EffectBigWin);
      return EffectBigWin;
    }(cc.Component);
    exports.default = EffectBigWin;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "ShootFish.EffectJackpot": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce53aga3XZMIaymrxUZy+Ja", "ShootFish.EffectJackpot");
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
    var EffectJackpot = function(_super) {
      __extends(EffectJackpot, _super);
      function EffectJackpot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skeletons = [];
        _this.lblNickname = null;
        _this.lblCoin = null;
        return _this;
      }
      EffectJackpot.prototype.show = function(isShow, nickname, coin) {
        var _this = this;
        void 0 === nickname && (nickname = null);
        void 0 === coin && (coin = 0);
        this.node.stopAllActions();
        if (isShow) {
          this.lblCoin.string = Utils_1.default.formatNumber(coin);
          this.lblCoin.node.active = false;
          this.lblNickname.string = nickname;
          this.lblNickname.node.active = false;
          for (var i = 0; i < this.skeletons.length; i++) this.skeletons[i].setAnimation(0, "Idle", false);
          this.node.active = true;
          this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
            _this.lblNickname.node.active = true;
            _this.lblCoin.node.active = true;
          }), cc.delayTime(5), cc.callFunc(function() {
            _this.node.active = false;
          })));
        } else this.node.active = false;
      };
      __decorate([ property([ sp.Skeleton ]) ], EffectJackpot.prototype, "skeletons", void 0);
      __decorate([ property(cc.Label) ], EffectJackpot.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], EffectJackpot.prototype, "lblCoin", void 0);
      EffectJackpot = __decorate([ ccclass ], EffectJackpot);
      return EffectJackpot;
    }(cc.Component);
    exports.default = EffectJackpot;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "ShootFish.Fish": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dcf1d04CtOE75piBWi/t9b", "ShootFish.Fish");
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
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var ShootFish_Play_1 = require("./ShootFish.Play");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish = function(_super) {
      __extends(Fish, _super);
      function Fish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.lblId = null;
        _this.isDie = false;
        _this.type = -1;
        _this.polygon = null;
        _this.dataPointsUpdate = [];
        _this.currentStep = 0;
        _this.currentTimeStep = -1;
        _this.currentVStepX = 0;
        _this.currentVStepY = 0;
        return _this;
      }
      Fish.prototype.setData = function(fishData) {
        this.id = fishData["id"];
        this.lblId.string = this.id.toString();
        if (fishData["h"] <= 0 || 0 == fishData["path"].length) {
          this.die();
          0 == fishData["path"].length;
          return;
        }
        if (this.type != fishData["t"]) {
          this.type = fishData["t"];
          this.anim.removeAllChildren();
          var animNode = cc.instantiate(ShootFish_Play_1.default.instance.getFishAnimByType(this.type));
          animNode.parent = this.anim;
          var width = fishData["H"];
          var height = fishData["w"];
          this.polygon = new SAT.Box(new SAT.Vector(0, 0), width, height).toPolygon();
          this.polygon.translate(-width / 2, -height / 2);
          this.node.width = width;
          this.node.height = height;
        }
        var dX = Number(fishData["dx"]);
        var dY = Number(fishData["dy"]);
        var posX = Number(fishData["px"]);
        var posY = Number(fishData["py"]);
        var path = fishData["path"];
        var time = ShootFishNetworkClient_1.default.serverCurrentTimeMillis();
        this.node.angle = Math.atan2(dY, dX) * Utils_1.default.Rad2Deg;
        var dataPoints = [];
        for (var i = 0; i < path.length; i++) {
          var dataP = {
            t: Number(path[i]["t"])
          };
          dataP["p"] = cc.v2(Number(path[i]["x"]), Number(path[i]["y"]));
          switch (ShootFish_Play_1.default.instance.mePlayer.serverPos) {
           case 1:
            dataP["p"] = cc.v2(-Number(path[i]["x"]), Number(path[i]["y"]));
            break;

           case 2:
            dataP["p"] = cc.v2(-Number(path[i]["x"]), -Number(path[i]["y"]));
            break;

           case 3:
            dataP["p"] = cc.v2(Number(path[i]["x"]), -Number(path[i]["y"]));
          }
          dataPoints.push(dataP);
        }
        this.node.setPosition(posX, posY);
        switch (ShootFish_Play_1.default.instance.mePlayer.serverPos) {
         case 1:
          this.node.setPosition(-posX, posY);
          break;

         case 2:
          this.node.setPosition(-posX, -posY);
          break;

         case 3:
          this.node.setPosition(posX, -posY);
        }
        var isFirstPoint = true;
        var point = -1;
        this.dataPointsUpdate.length = 0;
        for (var i_1 = 1; i_1 < dataPoints.length; i_1++) {
          var data1 = dataPoints[i_1 - 1];
          var data2 = dataPoints[i_1];
          var p1 = data1["p"];
          var p2 = data2["p"];
          var t1 = data1["t"];
          var t2 = data2["t"];
          if (time - t2 < 0) {
            point < 0 && (point = i_1);
            var deltaPos = p2.clone().sub(p1);
            var angle = Math.atan2(deltaPos.y, deltaPos.x) * Utils_1.default.Rad2Deg;
            var timeMove = 0;
            if (isFirstPoint) {
              timeMove = (t2 - time) / 1e3;
              isFirstPoint = false;
            } else timeMove = (t2 - t1) / 1e3;
            this.dataPointsUpdate.push({
              p: p2,
              t: timeMove,
              a: angle,
              tms: t2
            });
          }
        }
        this.currentTimeStep = -1;
        this.currentStep = 0;
        this.currentVStepX = 0;
        this.currentVStepY = 0;
        if (this.dataPointsUpdate.length > 0) {
          this.currentTimeStep = this.dataPointsUpdate[this.currentStep]["t"];
          var moveToPos = this.dataPointsUpdate[this.currentStep]["p"];
          var deltaPos = moveToPos.sub(new cc.Vec2(this.node.position.x, this.node.position.y));
          this.currentVStepX = deltaPos.x / this.currentTimeStep;
          this.currentVStepY = deltaPos.y / this.currentTimeStep;
          this.node.angle = this.dataPointsUpdate[this.currentStep]["a"];
        }
        this.isDie = false;
        this.node.active = true;
      };
      Fish.prototype.updateRealTime = function(dt) {
        if (!this.node.active || this.isDie) return;
        if (this.dataPointsUpdate.length > 0 && this.currentTimeStep >= 0) {
          var pos = this.node.position;
          this.currentTimeStep -= dt;
          if (this.currentTimeStep < 0) {
            this.currentStep++;
            if (this.currentStep < this.dataPointsUpdate.length) {
              this.currentTimeStep = this.dataPointsUpdate[this.currentStep]["t"] + Math.abs(this.currentTimeStep);
              this.node.angle = this.dataPointsUpdate[this.currentStep]["a"];
              this.polygon.angle = this.node.angle * Utils_1.default.Deg2Rad;
              var moveToPos = this.dataPointsUpdate[this.currentStep]["p"];
              var deltaPos = moveToPos.sub(new cc.Vec2(pos.x, pos.y));
              this.currentVStepX = deltaPos.x / this.currentTimeStep;
              this.currentVStepY = deltaPos.y / this.currentTimeStep;
            }
          }
          pos.x += this.currentVStepX * dt;
          pos.y += this.currentVStepY * dt;
          this.node.position = pos;
        }
      };
      Fish.prototype.die = function() {
        this.isDie = true;
        this.node.active = false;
      };
      Fish.prototype.getPolygon = function() {
        this.polygon.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
        return this.polygon;
      };
      Fish.prototype.hurt = function() {
        if (0 == this.anim.children.length || 0 == this.anim.children[0].children.length) return;
        this.anim.children[0].children[0].stopActionByTag(99);
        var action = cc.sequence(cc.tintTo(.05, 255, 54, 54), cc.delayTime(.1), cc.tintTo(.05, 255, 255, 255));
        action.setTag(99);
        this.anim.children[0].children[0].runAction(action);
      };
      __decorate([ property(cc.Node) ], Fish.prototype, "anim", void 0);
      __decorate([ property(cc.Label) ], Fish.prototype, "lblId", void 0);
      Fish = __decorate([ ccclass ], Fish);
      return Fish;
    }(cc.Component);
    exports.default = Fish;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0,
    "./ShootFish.Play": "ShootFish.Play"
  } ],
  "ShootFish.Lobby": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4378bty4U5E8KWt2uwkMkhd", "ShootFish.Lobby");
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
    var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
    var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var ShootFish_Play_1 = require("./ShootFish.Play");
    var ShootFish_PopupCoinTransfer_1 = require("./ShootFish.PopupCoinTransfer");
    var Http_1 = require("../../Loading/src/Http");
    var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lobby = function(_super) {
      __extends(Lobby, _super);
      function Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playNode = null;
        _this.sprAvatar = null;
        _this.Bg = null;
        _this.Bg2 = null;
        _this.Bg3 = null;
        _this.lblBalance = null;
        _this.lblNickname = null;
        _this.lblslotz = null;
        _this.lblslotz100 = null;
        _this.lblslotz1k = null;
        _this.popupCoinTransfer = null;
        _this.play = null;
        return _this;
      }
      Lobby_1 = Lobby;
      Lobby.prototype.onLoad = function() {
        var _this = this;
        Lobby_1.instance = this;
        this.play = this.playNode.getComponent(ShootFish_Play_1.default);
        this.play.node.active = false;
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        this.lblNickname.string = Configs_1.default.Login.Nickname;
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function() {
          _this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function(isLogined) {
          if (!isLogined) {
            App_1.default.instance.alertDialog.showMsgWithOnDismissed("\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u101d\u1004\u103a\u1001\u103c\u1004\u103a\u1038 \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b", function() {
              _this.actBack();
            });
            return;
          }
          ShootFish_Play_1.default.SERVER_CONFIG = Configs_1.default.Login.FishConfigs;
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          Configs_1.default.Login.CoinFish <= 0 && App_1.default.instance.confirmDialog.show3("\u101c\u1031\u101a\u102c\u1009\u103a\u101b\u102d\u102f\u1000\u103a\u1000\u103d\u1004\u103a\u1038\u1019\u103e\u102c \u1019\u1004\u103a\u1038\u101b\u1032\u1037\u1015\u102d\u102f\u1000\u103a\u1006\u1036\u1010\u103d\u1031 \u1000\u102f\u1014\u103a\u101e\u103d\u102c\u1038\u1015\u103c\u102e\u104a \u1019\u1004\u103a\u1038 \u1004\u103d\u1031\u101c\u103d\u103e\u1032\u1001\u103b\u1004\u103a\u1010\u102c\u101c\u102c\u1038\u104b", "\u101f\u102f\u1010\u103a\u1010\u101a\u103a", function(isConfirm) {
            isConfirm && _this.popupCoinTransfer.show();
          });
        });
        ShootFishNetworkClient_1.default.getInstance().addOnClose(function() {
          App_1.default.instance.showErrLoading("\u1021\u1006\u1000\u103a\u1021\u101e\u103d\u101a\u103a\u1015\u103c\u1010\u103a\u101e\u103d\u102c\u1038\u101e\u100a\u103a\u104a \u1015\u103c\u1014\u103a\u101c\u100a\u103a\u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u101b\u1014\u103a \u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1014\u1031\u1015\u102b\u101e\u100a\u103a\u104b...");
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function(data) {
          var inPacket = new Network_InPacket_1.default(data);
          switch (inPacket.getCmdId()) {
           case Lobby_Cmd_1.default.Code.GET_MONEY_USE:
            var res = new Lobby_Cmd_1.default.ResGetMoneyUse(data);
            Configs_1.default.Login.Coin = res.moneyUse;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          }
        }, this);
        ShootFishNetworkClient_1.default.getInstance().addListener(function(route, data) {
          switch (route) {
           case "OnUpdateJackpot":
            _this.FISH10000 = data["34"];
            _this.FISH1000 = data["24"];
            _this.FISH100 = data["14"];
            _this.lblslotz.string = Utils_1.default.formatNumber(data["34"]);
            _this.lblslotz100.string = Utils_1.default.formatNumber(data["14"]);
            _this.lblslotz1k.string = Utils_1.default.formatNumber(data["24"]);
          }
        }, this);
      };
      Lobby.prototype.actBack = function() {
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
      };
      Lobby.prototype.actHonors = function() {};
      Lobby.prototype.actRoom1 = function() {
        this.show(false);
        this.Bg.active = true;
        this.Bg2.active = false;
        this.Bg3.active = false;
        this.play.show(true, 1);
      };
      Lobby.prototype.actRoom2 = function() {
        this.show(false);
        this.Bg.active = false;
        this.Bg2.active = true;
        this.Bg3.active = false;
        this.play.show(true, 2);
      };
      Lobby.prototype.actLogin = function() {
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
      Lobby.prototype.actRoom3 = function() {
        this.show(false);
        this.Bg.active = false;
        this.Bg2.active = false;
        this.Bg3.active = true;
        this.play.show(true, 3);
      };
      Lobby.prototype.show = function(isShow) {
        this.node.active = isShow;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
      };
      var Lobby_1;
      Lobby.instance = null;
      __decorate([ property(cc.Node) ], Lobby.prototype, "playNode", void 0);
      __decorate([ property(cc.Sprite) ], Lobby.prototype, "sprAvatar", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "Bg", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "Bg2", void 0);
      __decorate([ property(cc.Node) ], Lobby.prototype, "Bg3", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblBalance", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblslotz", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblslotz100", void 0);
      __decorate([ property(cc.Label) ], Lobby.prototype, "lblslotz1k", void 0);
      __decorate([ property(ShootFish_PopupCoinTransfer_1.default) ], Lobby.prototype, "popupCoinTransfer", void 0);
      Lobby = Lobby_1 = __decorate([ ccclass ], Lobby);
      return Lobby;
    }(cc.Component);
    exports.default = Lobby;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Loading/src/Http": void 0,
    "../../Lobby/LobbyScript/Lobby.Cmd": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/SPUtils": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient": void 0,
    "../../Lobby/LobbyScript/Script/networks/Network.InPacket": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0,
    "./ShootFish.Play": "ShootFish.Play",
    "./ShootFish.PopupCoinTransfer": "ShootFish.PopupCoinTransfer"
  } ],
  "ShootFish.PanelMenu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ebbaXYFItGA4MRPRT0exe9", "ShootFish.PanelMenu");
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
    var ShootFish_Play_1 = require("./ShootFish.Play");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PanelMenu = function(_super) {
      __extends(PanelMenu, _super);
      function PanelMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.Setting = null;
        _this.btnSound = null;
        _this.sfSoundOn = null;
        _this.sfSoundOff = null;
        _this.btnMusic = null;
        _this.sfMusicOn = null;
        _this.sfMusicOff = null;
        _this.isShow = false;
        _this.soundState = 1;
        _this.musicState = 1;
        return _this;
      }
      PanelMenu.prototype.show = function(isShow) {
        this.isShow = isShow;
        if (this.isShow) {
          this.node.runAction(cc.moveTo(.3, cc.v2(-90, 0)));
          this.arrow.runAction(cc.rotateTo(.3, 0));
        } else {
          this.node.runAction(cc.moveTo(.3, cc.v2(0, 0)));
          this.arrow.runAction(cc.rotateTo(.3, 180));
        }
        this.btnSound.getComponent(cc.Sprite).spriteFrame = this.getSound() > 0 ? this.sfSoundOn : this.sfSoundOff;
        this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.getMussic() > 0 ? this.sfMusicOn : this.sfMusicOff;
      };
      PanelMenu.prototype.toggleShow = function() {
        this.show(!this.isShow);
      };
      PanelMenu.prototype.SettingShow = function() {
        this.Setting.active = true;
      };
      PanelMenu.prototype.SettingHidde = function() {
        this.Setting.active = false;
      };
      PanelMenu.prototype.toggleSound = function() {
        var state = this.getSound() > 0 ? 0 : 1;
        this.btnSound.getComponent(cc.Sprite).spriteFrame = state > 0 ? this.sfSoundOn : this.sfSoundOff;
        ShootFish_Play_1.default.instance.settingSound();
      };
      PanelMenu.prototype.toggleMusic = function() {
        var state = this.getMussic() > 0 ? 0 : 1;
        this.btnMusic.getComponent(cc.Sprite).spriteFrame = state > 0 ? this.sfMusicOn : this.sfMusicOff;
        ShootFish_Play_1.default.instance.settingMusic();
      };
      PanelMenu.prototype.getSound = function() {
        var soundSave = cc.sys.localStorage.getItem("sound_fish_shot");
        null != soundSave && (this.soundState = parseInt(soundSave));
        return this.soundState;
      };
      PanelMenu.prototype.getMussic = function() {
        var soundSave = cc.sys.localStorage.getItem("music_fish_shot");
        null != soundSave && (this.musicState = parseInt(soundSave));
        return this.musicState;
      };
      __decorate([ property(cc.Node) ], PanelMenu.prototype, "arrow", void 0);
      __decorate([ property(cc.Node) ], PanelMenu.prototype, "Setting", void 0);
      __decorate([ property(cc.Button) ], PanelMenu.prototype, "btnSound", void 0);
      __decorate([ property(cc.SpriteFrame) ], PanelMenu.prototype, "sfSoundOn", void 0);
      __decorate([ property(cc.SpriteFrame) ], PanelMenu.prototype, "sfSoundOff", void 0);
      __decorate([ property(cc.Button) ], PanelMenu.prototype, "btnMusic", void 0);
      __decorate([ property(cc.SpriteFrame) ], PanelMenu.prototype, "sfMusicOn", void 0);
      __decorate([ property(cc.SpriteFrame) ], PanelMenu.prototype, "sfMusicOff", void 0);
      PanelMenu = __decorate([ ccclass ], PanelMenu);
      return PanelMenu;
    }(cc.Component);
    exports.default = PanelMenu;
    cc._RF.pop();
  }, {
    "./ShootFish.Play": "ShootFish.Play"
  } ],
  "ShootFish.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "720d1dsYhpMV5P3msI2r43M", "ShootFish.Player");
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
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.localPos = 0;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.lblBet = null;
        _this.gunRotate = null;
        _this.sprGunBar = null;
        _this.sprAvatar = null;
        _this.sprFramesGunBar = [];
        _this.guns = [];
        _this.id = 0;
        _this.username = "";
        _this.nickname = "";
        _this.coin = 0;
        _this.avatar = "";
        _this.serverPos = -1;
        _this.gun = null;
        _this.curGunIdx = -1;
        return _this;
      }
      Player.prototype.set = function(id, username, nickname, coin, avatar) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.coin = coin;
        this.avatar = avatar;
        this.gunRotate.angle = 0;
        this.node.active = true;
        this.lblNickname.string = this.nickname;
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(this.avatar);
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
        switch (this.localPos) {
         case 0:
         case 1:
          this.gunRotate.angle = 90;
          break;

         case 2:
         case 3:
          this.gunRotate.angle = -90;
        }
        this.setGun(0);
      };
      Player.prototype.leave = function() {
        this.id = -1;
        this.nickname = "";
        this.coin = 0;
        this.avatar = "";
        this.node.active = false;
      };
      Player.prototype.setGun = function(gunIdx) {
        gunIdx >= this.guns.length && (gunIdx = 0);
        if (this.curGunIdx == gunIdx) return;
        this.curGunIdx = gunIdx;
        for (var i = 0; i < this.guns.length; i++) this.guns[i].node.active = i == gunIdx;
        this.sprGunBar.spriteFrame = this.sprFramesGunBar[gunIdx];
        this.gun = this.guns[gunIdx];
      };
      Player.prototype.rotateGun = function(touchPos) {
        var gunWorldPos = this.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var d = touchPos.sub(gunWorldPos);
        var angle = Math.atan2(d.y, d.x) * Utils_1.default.Rad2Deg;
        angle < -90 ? angle = 180 : angle < 0 && angle > -90 && (angle = 0);
        this.gunRotate.angle = angle;
      };
      Player.prototype.shoot = function() {
        this.gun.setAnimation(0, "2", false);
        this.gun.addAnimation(0, "1", true);
      };
      __decorate([ property ], Player.prototype, "localPos", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lblNickname", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lblCoin", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "lblBet", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "gunRotate", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "sprGunBar", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "sprAvatar", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Player.prototype, "sprFramesGunBar", void 0);
      __decorate([ property([ sp.Skeleton ]) ], Player.prototype, "guns", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0
  } ],
  "ShootFish.Play": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fa1efbhuJLl5N2iupithus", "ShootFish.Play");
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
    var ShootFish_Player_1 = require("./ShootFish.Player");
    var ShootFish_Bullet_1 = require("./ShootFish.Bullet");
    var ShootFish_Fish_1 = require("./ShootFish.Fish");
    var Configs_1 = require("../../Loading/src/Configs");
    var ShootFish_CoinEffect_1 = require("./ShootFish.CoinEffect");
    var ShootFish_EffectJackpot_1 = require("./ShootFish.EffectJackpot");
    var ShootFish_Lobby_1 = require("./ShootFish.Lobby");
    var ShootFish_PanelMenu_1 = require("./ShootFish.PanelMenu");
    var ShootFish_PopupGuide_1 = require("./ShootFish.PopupGuide");
    var ShootFish_EffectBigWin_1 = require("./ShootFish.EffectBigWin");
    var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Play = function(_super) {
      __extends(Play, _super);
      function Play() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lobby = null;
        _this.loading = null;
        _this.touchPad = null;
        _this.txtMail = null;
        _this.sprFramesBullet = [];
        _this.bulletTemplate = null;
        _this.players = [];
        _this.fishsAnim = [];
        _this.fishsNode = null;
        _this.fishTemplate = null;
        _this.coinEffectTemplate = null;
        _this.lblJackpot = null;
        _this.toggleAuto = null;
        _this.target = null;
        _this.waveState = null;
        _this.btnFastShoot = null;
        _this.progressFastShoot = null;
        _this.lblFastShootTime = null;
        _this.btnTargetFish = null;
        _this.progressTargetFish = null;
        _this.lblTargetFishTime = null;
        _this.effectJackpot = null;
        _this.effectBigWin = null;
        _this.effectMegaWin = null;
        _this.panelMenu = null;
        _this.popupGuide = null;
        _this.lblPing = null;
        _this.lblServerTime = null;
        _this.soundShoot = null;
        _this.soundCoin = null;
        _this.soundBigWin = null;
        _this.soundBg = null;
        _this.soundOff = null;
        _this.musicOff = null;
        _this.mePlayer = null;
        _this.bullets = [];
        _this.fishs = [];
        _this.coinEffects = [];
        _this.isStateGeted = false;
        _this.inited = false;
        _this.lastUpdateTime = -1;
        _this.roomId = 0;
        _this.listBet = [];
        _this.listJackpot = [];
        _this.betIdx = 0;
        _this.mapPlayersIdx = [ [ 0, 1, 2, 3 ], [ 1, 0, 3, 2 ], [ 2, 3, 0, 1 ], [ 3, 2, 1, 0 ] ];
        _this.shootInterval = .25;
        _this.fastShootInterval = .13;
        _this.curShootInterval = 0;
        _this.isShoot = false;
        _this.isFastShoot = false;
        _this.isTargetFish = false;
        _this.targetFish = null;
        _this.intervalFindTargetFish = 2;
        _this.curIntervalFindTargetFish = 0;
        _this.curTimeFastShootCountdown = 0;
        _this.curTimeTargetFishCountdown = 0;
        _this.tweens = new Array();
        _this.remoteMusicBackground = null;
        _this.musicState = 1;
        _this.soundState = 1;
        return _this;
      }
      Play_1 = Play;
      Play.prototype.init = function() {
        if (this.inited) return;
        this.mePlayer = this.players[0];
      };
      Play.prototype.onLoad = function() {
        Play_1.instance = this;
      };
      Play.prototype.start = function() {
        var _this = this;
        this.bulletTemplate.active = false;
        this.touchPad.on(cc.Node.EventType.TOUCH_START, function(event) {
          var touchPos = event.getLocation();
          _this.mePlayer.rotateGun(touchPos);
          _this.isShoot = true;
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touchPos = event.getLocation();
          _this.mePlayer.rotateGun(touchPos);
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_END, function(event) {
          _this.isShoot = false;
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          _this.isShoot = false;
        }, this.touchPad);
        this.toggleAuto.node.on("toggle", function() {
          if (_this.toggleAuto.isChecked) {
            _this.touchPad.active = false;
            _this.curIntervalFindTargetFish = _this.intervalFindTargetFish;
            _this.isShoot = true;
            _this.findTargetFishInWorld();
          } else _this.stopAutoShoot();
        });
        ShootFishNetworkClient_1.default.getInstance().addListener(function(route, data) {
          if (!_this.node.active || !_this.isStateGeted) return;
          switch (route) {
           case "OnUpdateJackpot":
            _this.listJackpot.length = 0;
            _this.listJackpot.push(data[_this.roomId + "1"]);
            _this.listJackpot.push(data[_this.roomId + "2"]);
            _this.listJackpot.push(data[_this.roomId + "3"]);
            _this.listJackpot.push(data[_this.roomId + "4"]);
            Tween_1.default.numberTo(_this.lblJackpot, _this.listJackpot[_this.betIdx], .3);
            break;

           case "OnEnterPlayer":
            var playerData = data["data"];
            var localPos = _this.mapPlayersIdx[_this.mePlayer.serverPos][playerData["posIndex"]];
            var player = _this.players[localPos];
            player.set(playerData["id"], playerData["playerId"], playerData["nickname"], playerData["cash"], playerData["avatar"]);
            player.serverPos = playerData["posIndex"];
            player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[_this.betIdx]);
            break;

           case "OnLeavePlayer":
            var username = data["playerId"];
            if (username == Configs_1.default.Login.UsernameFish) {
              1 == data["reason"] && App_1.default.instance.alertDialog.showMsg("\u1021\u1001\u103b\u102d\u1014\u103a\u1021\u1000\u103c\u102c\u1000\u103c\u102e\u1038 \u101c\u103e\u102f\u1015\u103a\u101b\u103e\u102c\u1038\u1019\u103e\u102f\u1019\u101b\u103e\u102d\u1001\u103c\u1004\u103a\u1038\u1000\u103c\u1031\u102c\u1004\u1037\u103a \u101e\u1004\u1037\u103a\u1021\u102c\u1038 \u1021\u1001\u1014\u103a\u1038\u1021\u1015\u103c\u1004\u103a\u101e\u102d\u102f\u1037 \u1016\u102d\u1010\u103a\u1001\u1031\u102b\u103a\u1011\u102c\u1038\u101e\u100a\u103a\u104b");
              _this.back();
            }
            var player = _this.getPlayerByUsername(username);
            if (null == player) break;
            player.leave();
            break;

           case "OnUpdateObject":
            var fishId = data["id"];
            var fish = _this.getFishById(fishId);
            if (null == fish) break;
            fish.setData(data);
            if (fish = 25) {
              _this.txtMail.node.active = true;
              cc.delayTime(5);
            }
            break;

           case "OnUpdateCash":
            var username = data["playerId"];
            var coin = Number(data["cash"]);
            var scr = data["scr"];
            username == Configs_1.default.Login.UsernameFish && (Configs_1.default.Login.CoinFish = coin);
            var player = _this.getPlayerByUsername(username);
            if (null == player) break;
            player.coin = coin;
            player.lblCoin.string = Utils_1.default.formatNumber(coin);
            switch (scr) {
             case 2:
              _this.effectBigWin.show(false);
              _this.effectMegaWin.show(false);
              _this.effectJackpot.show(true, player.nickname, coin);
            }
            break;

           case "OnObjectDie":
            var fishId = data["id"];
            var coin = data["value"];
            var playerId = data["playerId"];
            var fish = _this.getFishById(fishId);
            if (null == fish) break;
            fish.die();
            if (fish == _this.targetFish) {
              _this.exploreAllBulletWithTargetFishId(_this.targetFish.id);
              _this.target.active = false;
              _this.targetFish = null;
              _this.curIntervalFindTargetFish = 0;
            }
            var player = _this.getPlayerByUsername(playerId);
            if (null == player) break;
            var coinEffect = _this.getCoinEffect();
            coinEffect.run(coin, new cc.Vec2(fish.node.position.x, fish.node.position.y), new cc.Vec2(player.node.position.x, player.node.position.y));
            1 == _this.soundState && cc.audioEngine.play(_this.soundCoin, false, 1);
            switch (fish.type) {
             case 15:
             case 16:
             case 17:
             case 18:
             case 19:
             case 20:
             case 21:
              _this.effectJackpot.node.active || _this.effectMegaWin.show(true, player.nickname, coin);
              break;

             case 22:
             case 23:
             case 24:
              _this.effectJackpot.node.active || _this.effectBigWin.show(true, player.nickname, coin);
            }
            break;

           case "OnShoot":
            var username = data["playerId"];
            var betIdx = Number(data["type"]) - 1;
            var rad = data["rad"];
            var target = Number(data["target"]);
            if (username == Configs_1.default.Login.UsernameFish) break;
            var player = _this.getPlayerByUsername(username);
            if (null == player) break;
            var radByMe = rad;
            switch (_this.mePlayer.serverPos) {
             case 0:
              radByMe = rad;
              break;

             case 1:
              radByMe = Math.PI - rad;
              break;

             case 2:
              radByMe = rad - Math.PI;
              break;

             case 3:
              radByMe = -rad;
            }
            player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[betIdx]);
            player.gunRotate.angle = radByMe * Utils_1.default.Rad2Deg;
            player.setGun(betIdx);
            player.shoot();
            var bullet = _this.getBullet();
            bullet.targetFishId = target;
            bullet.bullet.getComponent(cc.Sprite).spriteFrame = _this.sprFramesBullet[betIdx];
            bullet.node.angle = player.gunRotate.angle;
            var pos = bullet.node.parent.convertToNodeSpaceAR(player.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
            pos.x += 90 * Utils_1.default.degreesToVec2(bullet.node.angle).x;
            pos.y += 90 * Utils_1.default.degreesToVec2(bullet.node.angle).y;
            bullet.node.setPosition(pos);
            bullet.run();
            break;

           case "OnChat":
            break;

           case "OnNewState":
            switch (data["state"]) {
             case 3:
              _this.waveState.stopAllActions();
              _this.waveState.active = true;
              var pos_1 = _this.waveState.position;
              pos_1.x = 1400;
              _this.waveState.position = pos_1;
              pos_1.x = -1400;
              _this.waveState.runAction(cc.sequence(cc.moveTo(1, new cc.Vec2(pos_1.x, pos_1.y)), cc.callFunc(function() {
                _this.waveState.active = false;
              })));
            }
            break;

           case "OnJackpot":
            var nickname = data["nickname"];
            var value = data["value"];
            var roomIdx = data["tableIndex"];
            var roomName = "Ph\xf2ng 1";
            switch (roomIdx) {
             case 2:
              roomName = "Ph\xf2ng 2";
              break;

             case 3:
              roomName = "Ph\xf2ng 3";
            }
            var msg = '\u1002\u102f\u100f\u103a\u101a\u1030\u1015\u102b\u1010\u101a\u103a\u104b "' + nickname + '" \u1021\u1014\u102d\u102f\u1004\u103a\u101b ' + Utils_1.default.formatNumber(value) + " \u1021\u1011\u1032\u1019\u103e\u102c \u1021\u1000\u103c\u103d\u1031\u1005\u1031\u1037\u1010\u103d\u1031 " + roomName + ".";
          }
        }, this);
        this.init();
        this.checkMusicOnStart();
        this.checkSoundOnStart();
      };
      Play.prototype.checkMusicOnStart = function() {
        var musicSave = cc.sys.localStorage.getItem("music_fish_shot");
        if (null != musicSave) this.musicState = parseInt(musicSave); else {
          this.musicState = 1;
          cc.sys.localStorage.setItem("music_fish_shot", "1");
        }
        0 == this.musicState ? this.musicOff.active = true : this.musicOff.active = false;
        1 == this.musicState && (this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true));
      };
      Play.prototype.checkSoundOnStart = function() {
        var soundSave = cc.sys.localStorage.getItem("sound_fish_shot");
        if (null != soundSave) this.soundState = parseInt(soundSave); else {
          this.soundState = 1;
          cc.sys.localStorage.setItem("sound_fish_shot", "1");
        }
        0 == this.soundState ? this.soundOff.active = true : this.soundOff.active = false;
      };
      Play.prototype.settingMusic = function() {
        this.musicOff.active = !this.musicOff.active;
        if (this.musicOff.active) {
          cc.audioEngine.stop(this.remoteMusicBackground);
          this.musicState = 0;
        } else {
          this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
          this.musicState = 1;
        }
        cc.sys.localStorage.setItem("music_fish_shot", "" + this.musicState);
      };
      Play.prototype.settingSound = function() {
        this.soundOff.active = !this.soundOff.active;
        this.soundOff.active ? this.soundState = 0 : this.soundState = 1;
        cc.sys.localStorage.setItem("sound_fish_shot", "" + this.soundState);
      };
      Play.prototype.onDisable = function() {
        this.tweens.forEach(function(element) {
          element.stop();
        });
      };
      Play.prototype.onDestroy = function() {
        this.tweens.forEach(function(element) {
          element.stop();
        });
      };
      Play.prototype.update = function(dt) {
        null != this.lblPing && (this.lblPing.string = ShootFishNetworkClient_1.default.PING + "ms");
        null != this.lblServerTime && this.lblServerTime.node.active && (this.lblServerTime.string = "t: " + ShootFishNetworkClient_1.default.systemCurrentTimeMillis() + " d: " + ShootFishNetworkClient_1.default.TIME_DISTANCE + " mp: " + ShootFishNetworkClient_1.default.MIN_PING);
        var now = ShootFishNetworkClient_1.default.systemCurrentTimeMillis();
        this.isStateGeted && this.lastUpdateTime > 0 && now - this.lastUpdateTime > 500 && this.getState(false);
        this.lastUpdateTime = now;
        if (this.curTimeFastShootCountdown > 0) {
          this.curTimeFastShootCountdown = Math.max(0, this.curTimeFastShootCountdown - dt);
          this.lblFastShootTime.string = Math.round(this.curTimeFastShootCountdown) + "s";
          if (0 == this.curTimeFastShootCountdown) {
            this.lblFastShootTime.node.active = false;
            this.btnFastShoot.enabled = true;
          }
        }
        if (this.curTimeTargetFishCountdown > 0) {
          this.curTimeTargetFishCountdown = Math.max(0, this.curTimeTargetFishCountdown - dt);
          this.lblTargetFishTime.string = Math.round(this.curTimeTargetFishCountdown) + "s";
          if (0 == this.curTimeTargetFishCountdown) {
            this.lblTargetFishTime.node.active = false;
            this.btnTargetFish.enabled = true;
          }
        }
        this.updateShoot(dt);
        for (var i = 0, c = this.bullets.length; i < c; i++) {
          var bulet = this.bullets[i];
          bulet.updateRealTime(dt);
        }
        var listFishPoly = new Array();
        for (var i = 0, c = this.fishs.length; i < c; i++) {
          var fish_1 = this.fishs[i];
          fish_1.updateRealTime(dt);
          fish_1.node.active && Math.abs(fish_1.node.x) < 704 && Math.abs(fish_1.node.y) < 360 * 1.1 ? listFishPoly.push(fish_1.getPolygon()) : listFishPoly.push(null);
        }
        for (var i = 0, cBullet = this.bullets.length; i < cBullet; i++) {
          var bullet = this.bullets[i];
          if (!bullet.node.active || bullet.isExploring || bullet.isExplored) continue;
          var bulletCircle = bullet.getCircle();
          for (var j = 0, cFish = this.fishs.length; j < cFish; j++) {
            var fish = this.fishs[j];
            if (null == listFishPoly[j]) continue;
            if (bullet.targetFishId > 0 && bullet.targetFishId != fish.id) continue;
            var isCollision = SAT.testCirclePolygon(bulletCircle, listFishPoly[j]);
            if (isCollision) {
              bullet.explore();
              fish.hurt();
              break;
            }
          }
        }
        listFishPoly.length = 0;
      };
      Play.prototype.play = function() {
        var _this = this;
        this.isStateGeted = false;
        this.resetView();
        ShootFishNetworkClient_1.default.getInstance().ping(function() {
          ShootFishNetworkClient_1.default.getInstance().ping(function() {
            ShootFishNetworkClient_1.default.getInstance().ping(function() {
              ShootFishNetworkClient_1.default.getInstance().request("play", {
                playerId: Configs_1.default.Login.UsernameFish,
                password: Configs_1.default.Login.PasswordFish,
                index: _this.roomId
              }, function(res) {
                if (!res["ok"]) {
                  switch (res["err"]) {
                   case 4:
                    App_1.default.instance.confirmDialog.show2("\u101c\u1000\u103a\u1000\u103b\u1014\u103a\u1004\u103d\u1031 \u1019\u101c\u102f\u1036\u101c\u1031\u102c\u1000\u103a\u1015\u102b\u104a \u1004\u103d\u1031\u1016\u103c\u100a\u1037\u103a\u1015\u102b\u104b", function(isConfirm) {
                      isConfirm && ShootFish_Lobby_1.default.instance.popupCoinTransfer.show();
                    });
                    break;

                   case 1:
                    ShootFishNetworkClient_1.default.getInstance().request("quit", null, function() {}, _this);
                    App_1.default.instance.alertDialog.showMsg("\u1021\u1019\u103e\u102c\u1038 " + res["err"] + ", \u1011\u1015\u103a\u1005\u1019\u103a\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b");
                    break;

                   default:
                    App_1.default.instance.alertDialog.showMsg("\u1021\u1019\u103e\u102c\u1038 " + res["err"] + ", \u1019\u101e\u102d\u104b");
                  }
                  _this.show(false);
                  _this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
                  return;
                }
                _this.getState(true);
              }, _this);
            }, _this);
          }, _this);
        }, this);
      };
      Play.prototype.resetView = function() {
        this.betIdx = 0;
        for (var i = 0; i < this.players.length; i++) this.players[i].leave();
        for (var i = 0; i < this.fishs.length; i++) this.fishs[i].node.removeFromParent();
        this.fishs.length = 0;
        for (var i = 0; i < this.bullets.length; i++) this.bullets[i].node.active = false;
        for (var i = 0; i < this.coinEffects.length; i++) this.coinEffects[i].node.active = false;
        this.effectBigWin.show(false);
        this.effectMegaWin.show(false);
        this.effectJackpot.show(false);
        this.popupGuide.active = false;
        this.waveState.stopAllActions();
        this.waveState.active = false;
      };
      Play.prototype.getJackpot = function() {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("getJackpot", null, function(res) {
          if (!res["ok"]) return;
          _this.listJackpot.length = 0;
          _this.listJackpot.push(res["data"][_this.roomId + "1"]);
          _this.listJackpot.push(res["data"][_this.roomId + "2"]);
          _this.listJackpot.push(res["data"][_this.roomId + "3"]);
          _this.listJackpot.push(res["data"][_this.roomId + "4"]);
          Tween_1.default.numberTo(_this.lblJackpot, _this.listJackpot[_this.betIdx], .3);
        }, this);
      };
      Play.prototype.getState = function(isFirst) {
        var _this = this;
        isFirst || App_1.default.instance.showLoading(true);
        this.isStateGeted = false;
        this.resetView();
        ShootFishNetworkClient_1.default.getInstance().request("state", null, function(res) {
          isFirst || App_1.default.instance.showLoading(false);
          var playersData = res["players"];
          var mePlayerData = null;
          var mePlayerServerPos = 0;
          for (var i = 0; i < playersData.length; i++) if (playersData[i]["playerId"] == Configs_1.default.Login.UsernameFish) {
            mePlayerServerPos = playersData[i]["posIndex"];
            mePlayerData = playersData[i];
            Configs_1.default.Login.CoinFish = playersData[i]["cash"];
            break;
          }
          for (var i = 0; i < playersData.length; i++) {
            var localPos = _this.mapPlayersIdx[mePlayerServerPos][playersData[i]["posIndex"]];
            var playerData = playersData[i];
            var player = _this.players[localPos];
            player.set(playerData["id"], playerData["playerId"], playerData["nickname"], playerData["cash"], playerData["avatar"]);
            player.serverPos = playerData["posIndex"];
            player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[_this.betIdx]);
          }
          var objects = res["objects"].concat(res["sobjects"]);
          for (var i = 0; i < objects.length; i++) {
            var fishNode = cc.instantiate(_this.fishTemplate);
            var fish = fishNode.getComponent(ShootFish_Fish_1.default);
            fish.node.parent = _this.fishsNode;
            fish.setData(objects[i]);
            _this.fishs.push(fish);
          }
          var rfire = res["time"] - mePlayerData["rfire"];
          var cRfire = Play_1.SERVER_CONFIG["FastFireCoolDownS"];
          _this.progressFastShoot.progress = 0;
          if (rfire > cRfire) {
            _this.btnFastShoot.enabled = true;
            _this.lblFastShootTime.node.active = false;
          } else {
            _this.btnFastShoot.enabled = false;
            _this.curTimeFastShootCountdown = rfire;
            _this.lblFastShootTime.string = _this.curTimeFastShootCountdown + "s";
            _this.lblFastShootTime.node.active = true;
          }
          var snipe = res["time"] - mePlayerData["snipe"];
          var cSpine = Play_1.SERVER_CONFIG["SnipeCoolDownS"];
          _this.progressTargetFish.progress = 0;
          if (snipe > cSpine) {
            _this.btnTargetFish.enabled = true;
            _this.lblFastShootTime.node.active = false;
          } else {
            _this.btnTargetFish.enabled = false;
            _this.curTimeTargetFishCountdown = snipe;
            _this.lblTargetFishTime.string = _this.curTimeTargetFishCountdown + "s";
            _this.lblTargetFishTime.node.active = true;
          }
          _this.isStateGeted = true;
          _this.getJackpot();
          isFirst && (_this.loading.active = false);
        }, this);
      };
      Play.prototype.updateShoot = function(dt) {
        if (this.toggleAuto.isChecked || this.isTargetFish) if (null != this.targetFish) {
          var gunWorldPos = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
          var fishWorldPos = this.targetFish.node.convertToWorldSpaceAR(cc.v2(this.targetFish.node.width / 2, 0));
          var distance = Utils_1.default.v2Distance(fishWorldPos, gunWorldPos);
          if (Math.abs(this.targetFish.node.x) > 512 || Math.abs(this.targetFish.node.y) > 288 || distance < 135) {
            this.exploreAllBulletWithTargetFishId(this.targetFish.id);
            this.target.active = false;
            this.targetFish = null;
            this.curIntervalFindTargetFish = 0;
          } else {
            var dAngle = fishWorldPos.sub(gunWorldPos);
            var angle = Math.atan2(dAngle.y, dAngle.x) * Utils_1.default.Rad2Deg;
            this.mePlayer.gunRotate.angle = angle;
            this.target.setPosition(this.target.parent.convertToNodeSpaceAR(fishWorldPos));
          }
        } else if (!this.isTargetFish) {
          this.curIntervalFindTargetFish = Math.max(0, this.curIntervalFindTargetFish - dt);
          0 == this.curIntervalFindTargetFish && this.findTargetFishInWorld();
        }
        if (this.curShootInterval > 0) this.curShootInterval = Math.max(0, this.curShootInterval - dt); else if (this.isShoot) {
          this.curShootInterval = this.isFastShoot ? this.fastShootInterval : this.shootInterval;
          if (Configs_1.default.Login.CoinFish < this.listBet[this.betIdx]) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_slot_error"));
            this.isShoot = false;
            this.toggleAuto.isChecked && this.stopAutoShoot();
            return;
          }
          if ((this.toggleAuto.isChecked || this.isTargetFish) && null == this.targetFish) return;
          Configs_1.default.Login.CoinFish = Math.max(0, Configs_1.default.Login.CoinFish - this.listBet[this.betIdx]);
          this.mePlayer.coin = Configs_1.default.Login.CoinFish;
          this.mePlayer.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
          this.mePlayer.shoot();
          1 == this.soundState && cc.audioEngine.play(this.soundShoot, false, 1);
          var bulletAngle = this.mePlayer.gunRotate.angle;
          var bullet = this.getBullet();
          bullet.bullet.getComponent(cc.Sprite).spriteFrame = this.sprFramesBullet[this.betIdx];
          bullet.targetFishId = null != this.targetFish ? this.targetFish.id : -1;
          bullet.node.angle = bulletAngle;
          var pos = bullet.node.parent.convertToNodeSpaceAR(this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
          pos.x += 90 * Utils_1.default.degreesToVec2(bullet.node.angle).x;
          pos.y += 90 * Utils_1.default.degreesToVec2(bullet.node.angle).y;
          bullet.node.setPosition(pos);
          bullet.run();
          var shootRad = bulletAngle * Utils_1.default.Deg2Rad;
          switch (this.mePlayer.serverPos) {
           case 0:
            shootRad = shootRad;
            break;

           case 1:
            shootRad = Math.PI - shootRad;
            break;

           case 2:
            shootRad -= Math.PI;
            break;

           case 3:
            shootRad = -shootRad;
          }
          ShootFishNetworkClient_1.default.getInstance().notify("shoot", {
            rad: shootRad,
            type: this.betIdx + 1,
            target: null != this.targetFish ? this.targetFish.id : -1,
            rapidFire: this.isFastShoot,
            auto: false
          });
        }
      };
      Play.prototype.findTargetFishInWorld = function() {
        this.curIntervalFindTargetFish = this.intervalFindTargetFish;
        var listFishActiveInWorld = [];
        var gunWorldPos = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
        for (var i = 0; i < this.fishs.length; i++) {
          var fishNode = this.fishs[i].node;
          if (fishNode.active && Math.abs(fishNode.position.x) <= 512 && Math.abs(fishNode.position.y) <= 288) {
            var fishWorldPos = fishNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
            var distance = Utils_1.default.v2Distance(gunWorldPos, fishWorldPos);
            distance >= 135 && listFishActiveInWorld.push({
              fish: this.fishs[i],
              distance: distance
            });
          }
        }
        if (listFishActiveInWorld.length > 0) {
          this.targetFish = listFishActiveInWorld[Utils_1.default.randomRangeInt(0, listFishActiveInWorld.length)]["fish"];
          this.target.active = true;
          this.target.position = this.targetFish.node.position;
        }
      };
      Play.prototype.stopAutoShoot = function() {
        this.isShoot = false;
        this.toggleAuto.isChecked = false;
        this.target.active = false;
        this.touchPad.active = true;
        this.curIntervalFindTargetFish = 0;
        this.targetFish = null;
      };
      Play.prototype.getBullet = function() {
        var bullet = null;
        for (var i = 0; i < this.bullets.length; i++) if (!this.bullets[i].node.active) {
          bullet = this.bullets[i];
          break;
        }
        if (null == bullet) {
          var node = cc.instantiate(this.bulletTemplate);
          node.parent = this.bulletTemplate.parent;
          bullet = node.getComponent(ShootFish_Bullet_1.default);
          this.bullets.push(bullet);
        }
        bullet.node.active = true;
        bullet.targetFishId = -1;
        return bullet;
      };
      Play.prototype.exploreAllBulletWithTargetFishId = function(fishId) {
        for (var i = 0; i < this.bullets.length; i++) this.bullets[i].node.active && this.bullets[i].targetFishId >= 0 && this.bullets[i].targetFishId == fishId && (this.bullets[i].targetFishId = -1);
      };
      Play.prototype.getCoinEffect = function() {
        var coinEffect = null;
        for (var i = 0; i < this.coinEffects.length; i++) if (!this.coinEffects[i].node.active) {
          coinEffect = this.coinEffects[i];
          break;
        }
        if (null == coinEffect) {
          var node = cc.instantiate(this.coinEffectTemplate);
          node.parent = this.coinEffectTemplate.parent;
          coinEffect = node.getComponent(ShootFish_CoinEffect_1.default);
          this.coinEffects.push(coinEffect);
        }
        coinEffect.node.active = true;
        coinEffect.node.setSiblingIndex(coinEffect.node.parent.children.length - 1);
        return coinEffect;
      };
      Play.prototype.getFishById = function(id) {
        for (var i = 0; i < this.fishs.length; i++) if (this.fishs[i].id == id) return this.fishs[i];
        return null;
      };
      Play.prototype.getPlayerById = function(id) {
        if (id <= 0) return null;
        for (var i = 0; i < this.players.length; i++) if (this.players[i].id > 0 && this.players[i].id == id) return this.players[i];
        return null;
      };
      Play.prototype.getPlayerByUsername = function(username) {
        if (null == username || "" == username) return null;
        for (var i = 0; i < this.players.length; i++) if (null != this.players[i].username && "" != this.players[i].username && this.players[i].username == username) return this.players[i];
        return null;
      };
      Play.prototype.getFishAnimByType = function(type) {
        var name = "";
        switch (type) {
         case 0:
          name = "fish0";
          break;

         case 1:
          name = "fish1";
          break;

         case 2:
          name = "fish2";
          break;

         case 3:
          name = "fish3";
          break;

         case 4:
          name = "fish4";
          break;

         case 5:
          name = "fish5";
          break;

         case 6:
          name = "fish6";
          break;

         case 7:
          name = "fish7";
          break;

         case 8:
         case 9:
          name = "fish9";
          break;

         case 10:
          name = "fish10";
          break;

         case 11:
          name = "fish11";
          break;

         case 12:
          name = "fish12";
          break;

         case 13:
          name = "fish13";
          break;

         case 14:
          name = "fish14";
          break;

         case 15:
          name = "fish15";
          break;

         case 16:
          name = "fish16";
          break;

         case 17:
          name = "fish17";
          break;

         case 18:
          name = "fish18";
          break;

         case 19:
          name = "fish19";
          break;

         case 20:
          name = "fish20";
          break;

         case 21:
          name = "fish21";
          break;

         case 22:
          name = "fish22";
          break;

         case 23:
          name = "fish23";
          break;

         case 24:
          name = "fish24";
        }
        for (var i = 0; i < this.fishsAnim.length; i++) if (null != this.fishsAnim[i].name && "" != this.fishsAnim[i].name && this.fishsAnim[i].name == name) return this.fishsAnim[i];
        return this.fishsAnim[0];
      };
      Play.prototype.actGetState = function() {
        this.getState(false);
      };
      Play.prototype.actBetUp = function() {
        if (this.betIdx < this.listBet.length - 1) {
          this.betIdx++;
          this.mePlayer.lblBet.string = Utils_1.default.formatNumberMin(this.listBet[this.betIdx]);
          this.mePlayer.setGun(this.betIdx);
          Tween_1.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], .3);
        }
      };
      Play.prototype.actBetDown = function() {
        if (this.betIdx > 0) {
          this.betIdx--;
          this.mePlayer.lblBet.string = Utils_1.default.formatNumberMin(this.listBet[this.betIdx]);
          this.mePlayer.setGun(this.betIdx);
          Tween_1.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], .3);
        }
      };
      Play.prototype.actBack = function() {
        var _this = this;
        App_1.default.instance.confirmDialog.show2("\u1005\u102c\u1038\u1015\u103d\u1032\u1000\u1014\u1031 \u1011\u103d\u1000\u103a\u101e\u103d\u102c\u1038\u1001\u103b\u1004\u103a\u101c\u102c\u1038\u104b", function(isConfirm) {
          isConfirm && _this.back();
        });
      };
      Play.prototype.actFastShoot = function() {
        var _this = this;
        this.isFastShoot = true;
        this.btnFastShoot.enabled = false;
        var cDuration = Play_1.SERVER_CONFIG["FastFireDuration"];
        this.progressFastShoot.progress = 1;
        this.tweens.push(cc.tween(this.progressFastShoot).to(cDuration, {
          progress: 0
        }).call(function() {
          _this.isFastShoot = false;
          _this.curTimeFastShootCountdown = Play_1.SERVER_CONFIG["FastFireCoolDownS"];
          _this.lblFastShootTime.string = _this.curTimeFastShootCountdown + "s";
          _this.lblFastShootTime.node.active = true;
        }).start());
      };
      Play.prototype.actTargetFish = function() {
        var _this = this;
        this.isShoot = true;
        this.isTargetFish = true;
        this.btnTargetFish.enabled = false;
        var cDuration = Play_1.SERVER_CONFIG["SnipeDurationS"];
        this.progressTargetFish.progress = 1;
        this.tweens.push(cc.tween(this.progressTargetFish).to(cDuration, {
          progress: 0
        }).call(function() {
          _this.isTargetFish = false;
          _this.targetFish = null;
          _this.target.active = false;
          _this.curTimeTargetFishCountdown = Play_1.SERVER_CONFIG["SnipeCoolDownS"];
          _this.lblTargetFishTime.string = _this.curTimeTargetFishCountdown + "s";
          _this.lblTargetFishTime.node.active = true;
          _this.fishs.forEach(function(x) {
            x.getComponent(cc.Button).enabled = false;
          });
          _this.isShoot = _this.toggleAuto.isChecked;
          _this.touchPad.active = !_this.toggleAuto.isChecked;
        }).start());
        this.touchPad.active = false;
        this.fishs.forEach(function(x) {
          x.getComponent(cc.Button).enabled = true;
          x.node.off("click");
          x.node.on("click", function() {
            _this.targetFish = x;
            _this.target.active = true;
          });
        });
      };
      Play.prototype.back = function() {
        var _this = this;
        this.isStateGeted = false;
        this.stopAutoShoot();
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("quit", null, function() {
          App_1.default.instance.showLoading(false);
          _this.resetView();
          _this.show(false);
          _this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
        }, this);
      };
      Play.prototype.actEffectJackpotTest = function() {
        this.effectJackpot.show(true, "Test nickname", 54032423);
      };
      Play.prototype.actEffectBigWinTest = function() {
        this.effectBigWin.show(true, "Test nickname", 54032423);
      };
      Play.prototype.actEffectMegaWinTest = function() {
        this.effectMegaWin.show(true, "Test nickname", 54032423);
      };
      Play.prototype.show = function(isShow, roomId) {
        void 0 === roomId && (roomId = 0);
        if (isShow) {
          if (null == Play_1.SERVER_CONFIG) {
            this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
            App_1.default.instance.alertDialog.showMsg("\u101e\u1004\u103a\u101e\u100a\u103a \u101c\u1031\u102c\u1037\u1002\u103a\u1021\u1004\u103a\u1019\u101d\u1004\u103a\u1015\u102b\u104b");
            return;
          }
          this.node.active = true;
          this.loading.active = true;
          this.roomId = roomId;
          this.stopAutoShoot();
          this.panelMenu.show(false);
          this.listBet.length = 0;
          this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet1"] * Play_1.SERVER_CONFIG["TableBulletValueRate"][this.roomId]);
          this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet2"] * Play_1.SERVER_CONFIG["TableBulletValueRate"][this.roomId]);
          this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet3"] * Play_1.SERVER_CONFIG["TableBulletValueRate"][this.roomId]);
          this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet4"] * Play_1.SERVER_CONFIG["TableBulletValueRate"][this.roomId]);
          this.shootInterval = 1 / Play_1.SERVER_CONFIG["FIRE_RATE"];
          this.fastShootInterval = this.shootInterval / Play_1.SERVER_CONFIG["FastFireRate"];
          this.play();
        } else {
          this.popupGuide.active && this.popupGuide.getComponent(ShootFish_PopupGuide_1.default).dismiss();
          this.node.active = false;
        }
      };
      var Play_1;
      Play.instance = null;
      Play.SERVER_CONFIG = null;
      __decorate([ property(cc.Node) ], Play.prototype, "lobby", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "loading", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "touchPad", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "txtMail", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Play.prototype, "sprFramesBullet", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "bulletTemplate", void 0);
      __decorate([ property([ ShootFish_Player_1.default ]) ], Play.prototype, "players", void 0);
      __decorate([ property([ cc.Node ]) ], Play.prototype, "fishsAnim", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "fishsNode", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "fishTemplate", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "coinEffectTemplate", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblJackpot", void 0);
      __decorate([ property(cc.Toggle) ], Play.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "target", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "waveState", void 0);
      __decorate([ property(cc.Button) ], Play.prototype, "btnFastShoot", void 0);
      __decorate([ property(cc.ProgressBar) ], Play.prototype, "progressFastShoot", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblFastShootTime", void 0);
      __decorate([ property(cc.Button) ], Play.prototype, "btnTargetFish", void 0);
      __decorate([ property(cc.ProgressBar) ], Play.prototype, "progressTargetFish", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblTargetFishTime", void 0);
      __decorate([ property(ShootFish_EffectJackpot_1.default) ], Play.prototype, "effectJackpot", void 0);
      __decorate([ property(ShootFish_EffectBigWin_1.default) ], Play.prototype, "effectBigWin", void 0);
      __decorate([ property(ShootFish_EffectBigWin_1.default) ], Play.prototype, "effectMegaWin", void 0);
      __decorate([ property(ShootFish_PanelMenu_1.default) ], Play.prototype, "panelMenu", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "popupGuide", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblPing", void 0);
      __decorate([ property(cc.Label) ], Play.prototype, "lblServerTime", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Play.prototype, "soundShoot", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Play.prototype, "soundCoin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Play.prototype, "soundBigWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Play.prototype, "soundBg", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "soundOff", void 0);
      __decorate([ property(cc.Node) ], Play.prototype, "musicOff", void 0);
      Play = Play_1 = __decorate([ ccclass ], Play);
      return Play;
    }(cc.Component);
    exports.default = Play;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient": void 0,
    "./ShootFish.Bullet": "ShootFish.Bullet",
    "./ShootFish.CoinEffect": "ShootFish.CoinEffect",
    "./ShootFish.EffectBigWin": "ShootFish.EffectBigWin",
    "./ShootFish.EffectJackpot": "ShootFish.EffectJackpot",
    "./ShootFish.Fish": "ShootFish.Fish",
    "./ShootFish.Lobby": "ShootFish.Lobby",
    "./ShootFish.PanelMenu": "ShootFish.PanelMenu",
    "./ShootFish.Player": "ShootFish.Player",
    "./ShootFish.PopupGuide": "ShootFish.PopupGuide"
  } ],
  "ShootFish.PopupCoinTransfer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcd88coqOBPF7ZC2zQEsAhZ", "ShootFish.PopupCoinTransfer");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
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
          App_1.default.instance.alertDialog.showMsg("\u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u101e\u100a\u1037\u103a\u1015\u1019\u102c\u100f\u101e\u100a\u103a \u1019\u1019\u103e\u1014\u103a\u1000\u1014\u103a\u1015\u102b\u104b");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u101e\u1031\u102c\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a");
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
      TabCashIn = __decorate([ ccclass("PopupCoinTransfer.TabCashIn") ], TabCashIn);
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
          App_1.default.instance.alertDialog.showMsg("\u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u101e\u100a\u1037\u103a\u1015\u1019\u102c\u100f\u101e\u100a\u103a \u1019\u1019\u103e\u1014\u103a\u1000\u1014\u103a\u1015\u102b\u104b");
          return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", {
          ccash: -coin
        }, function(res) {
          App_1.default.instance.showLoading(false);
          if (!res["ok"]) {
            App_1.default.instance.alertDialog.showMsg("\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a \u1019\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u1015\u102b\u104a \u1000\u103b\u1031\u1038\u1007\u1030\u1038\u1015\u103c\u102f\u104d \u1014\u1031\u102c\u1000\u103a\u1019\u103e \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b");
            return;
          }
          Configs_1.default.Login.CoinFish = res["newCash"];
          BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
          App_1.default.instance.alertDialog.showMsg("\u1021\u1031\u102c\u1004\u103a\u1019\u103c\u1004\u103a\u101e\u1031\u102c\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a");
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
      TabCashOut = __decorate([ ccclass("PopupCoinTransfer.TabCashOut") ], TabCashOut);
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
        for (var j = 0; j < this.tabs.toggleItems.length; j++) this.tabs.toggleItems[j].node.getComponentInChildren(cc.LabelOutline).color = j == this.tabSelectedIdx ? cc.Color.BLACK.fromHEX("#AA5F00") : cc.Color.BLACK.fromHEX("#4677F3");
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
    }(Dialog_1.default);
    exports.default = PopupCoinTransfer;
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
  } ],
  "ShootFish.PopupGuide": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bab5aIcJEpPB53KA3RPsstw", "ShootFish.PopupGuide");
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
    var ShootFish_Play_1 = require("./ShootFish.Play");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupGuide = function(_super) {
      __extends(PopupGuide, _super);
      function PopupGuide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.grid = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.mapFishType = {
          0: [ "Cuttle", 1 ],
          1: [ "GoldFish", 1 ],
          2: [ "LightenFish", 1 ],
          3: [ "Mermaid", .7 ],
          4: [ "Octopus", .7 ],
          5: [ "PufferFish", 1 ],
          6: [ "SeaFish", .6 ],
          7: [ "Shark", .7 ],
          8: [ "Stringray", .8 ],
          9: [ "Turtle", .5 ],
          10: [ "CaThanTai", .5 ],
          11: [ "FlyingFish", .5 ],
          12: [ "GoldenFrog", .2 ],
          13: [ "SeaTurtle", 1 ],
          14: [ "MerMan", .8 ],
          15: [ "Phoenix", .7 ],
          16: [ "MermaidBig", .5 ],
          17: [ "MermaidSmall", .6 ],
          18: [ "BombFish", .5 ],
          19: [ "Fish19", .6 ],
          20: [ "Fish20", .5 ],
          21: [ "Fish21", .6 ],
          22: [ "Fish22", .5 ],
          23: [ "Fish23", .5 ],
          24: [ "Fish24", .4 ]
        };
        return _this;
      }
      PopupGuide.prototype.show = function() {
        _super.prototype.show.call(this);
        this.itemTemplate.active = false;
      };
      PopupGuide.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        if (null == ShootFish_Play_1.default.SERVER_CONFIG) return;
        for (var fishId in this.mapFishType) {
          var fishName = this.mapFishType[fishId][0];
          var scale = this.mapFishType[fishId][1];
          var dataConfig = ShootFish_Play_1.default.SERVER_CONFIG["FishPhysicalData"][fishName];
          var node = cc.instantiate(this.itemTemplate);
          node.parent = this.grid;
          node.active = true;
          var fish = cc.instantiate(ShootFish_Play_1.default.instance.getFishAnimByType(Number(fishId)));
          fish.parent = node.getChildByName("fishParent");
          fish.scale = scale;
          fish.angle = 35;
          node.getChildByName("lblFactor").getComponent(cc.Label).string = (dataConfig["Health"] / 100).toString();
          this.items.push(node);
        }
      };
      PopupGuide.prototype.dismiss = function() {
        this.items.forEach(function(x) {
          x.removeFromParent();
        });
        _super.prototype.dismiss.call(this);
      };
      __decorate([ property(cc.Node) ], PopupGuide.prototype, "grid", void 0);
      __decorate([ property(cc.Node) ], PopupGuide.prototype, "itemTemplate", void 0);
      PopupGuide = __decorate([ ccclass ], PopupGuide);
      return PopupGuide;
    }(Dialog_1.default);
    exports.default = PopupGuide;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "./ShootFish.Play": "ShootFish.Play"
  } ]
}, {}, [ "ShootFish.Bullet", "ShootFish.CoinEffect", "ShootFish.EffectBigWin", "ShootFish.EffectJackpot", "ShootFish.Fish", "ShootFish.Lobby", "ShootFish.PanelMenu", "ShootFish.Play", "ShootFish.Player", "ShootFish.PopupCoinTransfer", "ShootFish.PopupGuide" ]);