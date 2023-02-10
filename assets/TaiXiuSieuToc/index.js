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
  "TaiXiuST.PopupDetailHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09c98kFr0VGvpZn6EHnMi9N", "TaiXiuST.PopupDetailHistory");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
    var TaiXiuSieuToc_Controller_1 = require("./TaiXiuSieuToc.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupDetailHistory = function(_super) {
      __extends(PopupDetailHistory, _super);
      function PopupDetailHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblResult = null;
        _this.lblPage = null;
        _this.lblTotalBetTai = null;
        _this.lblTotalBetXiu = null;
        _this.lblTotalRefundTai = null;
        _this.lblTotalRefundXiu = null;
        _this.sfDices = [];
        _this.sfTai = null;
        _this.sfXiu = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprResult = null;
        _this.sprResult_Tai = null;
        _this.sprResult_Xiu = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.inited = false;
        _this.session = 0;
        _this.page = 1;
        _this.totalPage = 1;
        _this.historiesTai = [];
        _this.historiesXiu = [];
        _this.totalBetTai = 0;
        _this.totalRefundTai = 0;
        _this.totalBetXiu = 0;
        _this.totalRefundXiu = 0;
        return _this;
      }
      PopupDetailHistory.prototype.showDetail = function(session) {
        this.session = session;
        this.show();
      };
      PopupDetailHistory.prototype.show = function() {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.lblSession.string = "Phi\xean: #" + this.session;
        this.lblResult.string = "";
        if (this.inited) {
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
          return;
        }
        this.itemTemplate.active = false;
        for (var i = 0; i < 9; i++) {
          var node = cc.instantiate(this.itemTemplate);
          node.parent = this.itemTemplate.parent;
          node.active = false;
          this.items.push(node);
        }
        this.inited = true;
      };
      PopupDetailHistory.prototype._onShowed = function() {
        _super.prototype._onShowed.call(this);
        this.loadData();
      };
      PopupDetailHistory.prototype.loadData = function() {
        var _this = this;
        for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.lblSession.string = "Phi\xean: #" + this.session;
        this.lblResult.string = "";
        this.totalBetTai = 0;
        this.totalBetXiu = 0;
        this.totalRefundTai = 0;
        this.totalRefundXiu = 0;
        App_1.default.instance.showLoading(true);
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySessionId(this.session, function(err, res) {
          if (null != err) return;
          _this.historiesTai = [];
          _this.historiesXiu = [];
          App_1.default.instance.showLoading(false);
          if (null !== res["result"]) {
            null != res["lstData"] && res["lstData"].length > 0 && res["lstData"].forEach(function(element) {
              element["result"] = JSON.parse(element["result"]);
              element;
            });
            res["result"] = JSON.parse(res["result"]);
            for (var i = 0; i < res["lstData"].length; i++) {
              var itemData = res["lstData"][i];
              if (1 === itemData["typed"]) {
                _this.historiesTai.push(itemData);
                _this.totalBetTai += itemData["betamount"];
                _this.totalRefundTai += itemData["refundamount"];
              } else {
                _this.historiesXiu.push(itemData);
                _this.totalBetXiu += itemData["betamount"];
                _this.totalRefundXiu += itemData["refundamount"];
              }
            }
            for (var i = 0; i < _this.items.length; i++) _this.items[i].active = false;
            _this.page = 1;
            _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
            _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
            _this.lblPage.string = _this.page + "/" + _this.totalPage;
            _this.lblSession.string = "Phi\xean: #" + res["id"];
            var totalPoint = res["result"][0] + res["result"][1] + res["result"][2];
            _this.lblResult.string = totalPoint > 10 ? " - T\xe0i " + totalPoint + "(" + res["result"][0] + "-" + res["result"][1] + "-" + res["result"][2] + ")" : " - X\u1ec9u " + totalPoint + "(" + res["result"][0] + "-" + res["result"][1] + "-" + res["result"][2] + ")";
            _this.lblTotalBetTai.string = Utils_1.default.formatNumber(_this.totalBetTai) + " / " + Utils_1.default.formatNumber(_this.totalRefundTai);
            _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(_this.totalBetXiu) + " / " + Utils_1.default.formatNumber(_this.totalRefundXiu);
            _this.sprDice1.spriteFrame = _this.sfDices[res["result"][0]];
            _this.sprDice1.node.active = true;
            _this.sprDice2.spriteFrame = _this.sfDices[res["result"][1]];
            _this.sprDice2.node.active = true;
            _this.sprDice3.spriteFrame = _this.sfDices[res["result"][2]];
            _this.sprDice3.node.active = true;
            if (totalPoint > 10) {
              cc.Tween.stopAllByTarget(_this.sprResult_Tai);
              cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
              _this.sprResult_Tai.scale = .6;
              _this.sprResult_Xiu.scale = .6;
              cc.tween(_this.sprResult_Tai).repeatForever(cc.tween().sequence(cc.tween().to(.3, {
                scale: .7
              }), cc.tween().to(.3, {
                scale: .6
              }), cc.tween().to(.3, {
                scale: .5
              }), cc.tween().to(.3, {
                scale: .6
              }))).start();
            } else {
              cc.Tween.stopAllByTarget(_this.sprResult_Tai);
              cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
              _this.sprResult_Tai.scale = .6;
              _this.sprResult_Xiu.scale = .6;
              cc.tween(_this.sprResult_Xiu).repeatForever(cc.tween().sequence(cc.tween().to(.3, {
                scale: .7
              }), cc.tween().to(.3, {
                scale: .6
              }), cc.tween().to(.3, {
                scale: .5
              }), cc.tween().to(.3, {
                scale: .6
              }))).start();
            }
            _this.loadDataPage();
          }
        });
      };
      PopupDetailHistory.prototype.loadDataPage = function() {
        for (var i = 0; i < this.items.length; i++) {
          var idx = (this.page - 1) * this.items.length + i;
          var item = this.items[i];
          item.active = true;
          if (idx < this.historiesTai.length) {
            var itemData = this.historiesTai[idx];
            var time = itemData["bettime"];
            time = time.substring(0, time.indexOf("."));
            time = time.replace("T", "\n");
            item.getChildByName("Time").getComponent(cc.Label).string = time;
            item.getChildByName("Account").getComponent(cc.Label).string = itemData["loginname"];
            item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
            item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
          } else {
            item.getChildByName("Time").getComponent(cc.Label).string = "";
            item.getChildByName("Account").getComponent(cc.Label).string = "";
            item.getChildByName("Refund").getComponent(cc.Label).string = "";
            item.getChildByName("Bet").getComponent(cc.Label).string = "";
          }
          if (idx < this.historiesXiu.length) {
            var itemData = this.historiesXiu[idx];
            var time = itemData["bettime"];
            time = time.substring(0, time.indexOf("."));
            time = time.replace("T", "\n");
            item.getChildByName("Time2").getComponent(cc.Label).string = time;
            item.getChildByName("Account2").getComponent(cc.Label).string = itemData["loginname"];
            item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
            item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
          } else {
            item.getChildByName("Time2").getComponent(cc.Label).string = "";
            item.getChildByName("Account2").getComponent(cc.Label).string = "";
            item.getChildByName("Refund2").getComponent(cc.Label).string = "";
            item.getChildByName("Bet2").getComponent(cc.Label).string = "";
          }
        }
        this.lblPage.string = this.page + "/" + this.totalPage;
      };
      PopupDetailHistory.prototype.actNextPage = function() {
        this.page++;
        this.page > this.totalPage && (this.page = this.totalPage);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actPrevPage = function() {
        this.page--;
        this.page < 1 && (this.page = 1);
        this.loadDataPage();
      };
      PopupDetailHistory.prototype.actNextSession = function() {
        this.session++;
        var dataHis = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau;
        if (this.session > dataHis[dataHis.length - 1].session) {
          this.session = dataHis[dataHis.length - 1].session;
          return;
        }
        this.loadData();
      };
      PopupDetailHistory.prototype.actPrevSession = function() {
        this.session--;
        this.loadData();
      };
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblSession", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblResult", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblPage", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundTai", void 0);
      __decorate([ property(cc.Label) ], PopupDetailHistory.prototype, "lblTotalRefundXiu", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PopupDetailHistory.prototype, "sfDices", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfTai", void 0);
      __decorate([ property(cc.SpriteFrame) ], PopupDetailHistory.prototype, "sfXiu", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice1", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice2", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprDice3", void 0);
      __decorate([ property(cc.Sprite) ], PopupDetailHistory.prototype, "sprResult", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "sprResult_Tai", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "sprResult_Xiu", void 0);
      __decorate([ property(cc.Node) ], PopupDetailHistory.prototype, "itemTemplate", void 0);
      PopupDetailHistory = __decorate([ ccclass ], PopupDetailHistory);
      return PopupDetailHistory;
    }(Dialog_1.default);
    exports.default = PopupDetailHistory;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient": void 0,
    "./TaiXiuSieuToc.Controller": "TaiXiuSieuToc.Controller"
  } ],
  "TaiXiuST.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4dcdfq0qsBP2I1r8cxuvjZn", "TaiXiuST.PopupHistory");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TaiXiuSieuToc;
    (function(TaiXiuSieuToc) {
      var PopupHistory = function(_super) {
        __extends(PopupHistory, _super);
        function PopupHistory() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.lblPage = null;
          _this.prefab = null;
          _this.scroll = null;
          _this.page = 1;
          _this.maxPage = 1;
          _this.items = new Array();
          _this.historyData = [];
          _this.totalPageLoaded = 0;
          return _this;
        }
        PopupHistory.prototype.onLoad = function() {};
        PopupHistory.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
          this.historyData = [];
          this.totalPageLoaded = 0;
          for (var i = 0; i < this.items.length; i++) this.items[i].active = false;
        };
        PopupHistory.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          this.scroll.content.removeAllChildren();
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
        PopupHistory.prototype.loadData = function(isReloadScr) {
          var _this = this;
          void 0 === isReloadScr && (isReloadScr = true);
          App_1.default.instance.showLoading(true);
          TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistory(this.page - 1, 10, function(err, res) {
            App_1.default.instance.showLoading(false);
            if (null != err) return;
            if ("SUCCES" != res["message"]) return;
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            _this.loadHistory(res["content"]);
          });
        };
        PopupHistory.prototype.loadHistory = function(datahistory) {
          this.scroll.content.removeAllChildren();
          for (var i = 0; i < datahistory.length; i++) {
            var node = cc.instantiate(this.prefab);
            node.parent = this.scroll.content;
            datahistory[i].index = i;
            this.setItemData(node, datahistory[i]);
          }
          this.scroll.scrollToTop(.3);
        };
        PopupHistory.prototype.setItemData = function(item, itemData) {
          var index = itemData["index"];
          item.getChildByName("bg").opacity = index % 2 == 0 ? 255 : 0;
          item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["taixiuId"];
          var time = itemData["bettime"];
          time = time.substr(0, time.indexOf("."));
          item.getChildByName("lblTime").getComponent(cc.Label).string = time.replace("T", "\n");
          item.getChildByName("lblBetDoor").getComponent(cc.Label).string = 1 == itemData["typed"] ? "T\xc0I" : "X\u1ec8U";
          item.getChildByName("lblResult").getComponent(cc.Label).string = null == itemData["description"] ? "Ch\u01b0a c\xf3 k\u1ebft qu\u1ea3" : itemData["description"];
          item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
          item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
          item.getChildByName("lblRefund").getComponent(cc.Label).node.color = itemData["refundamount"] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
          item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["winamount"]);
          item.getChildByName("lblWin").getComponent(cc.Label).node.color = itemData["winamount"] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
          item.active = true;
        };
        PopupHistory.prototype.onScrollEvent = function(scrollview, eventType, customEventData) {
          if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM && this.page < this.maxPage) {
            this.page++;
            this.loadData(false);
          }
        };
        __decorate([ property(cc.Label) ], PopupHistory.prototype, "lblPage", void 0);
        __decorate([ property(cc.Node) ], PopupHistory.prototype, "prefab", void 0);
        __decorate([ property(cc.ScrollView) ], PopupHistory.prototype, "scroll", void 0);
        PopupHistory = __decorate([ ccclass ], PopupHistory);
        return PopupHistory;
      }(Dialog_1.default);
      TaiXiuSieuToc.PopupHistory = PopupHistory;
    })(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
    exports.default = TaiXiuSieuToc.PopupHistory;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient": void 0
  } ],
  "TaiXiuST.PopupHonors": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a549DsjfNDC7i9SCvuQIrh", "TaiXiuST.PopupHonors");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TaiXiuSieuToc;
    (function(TaiXiuSieuToc) {
      var PopupHonors = function(_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.itemTemplate = null;
          _this.sprRank = [];
          _this.items = new Array();
          _this.scrView = null;
          _this.dataList = [];
          return _this;
        }
        PopupHonors.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
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
          App_1.default.instance.showLoading(true);
          TaiXiuSieuToc_NetworkClient_1.default.getInstance().getTopHonor();
        };
        PopupHonors.prototype.initData = function(data) {
          var _this = this;
          this.dataList = data.slice();
          var cb = function(item, itemData) {
            item.getChildByName("bg").opacity = item["itemID"] % 2 == 0 ? 255 : 0;
            item.getChildByName("lblRank").getComponent(cc.Label).string = (item["itemID"] + 1).toString();
            item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["loginname"];
            item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["amount"]);
            if (item["itemID"] < 3) {
              item.getChildByName("ic_rank").active = true;
              item.getChildByName("lblRank").active = false;
              item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = _this.sprRank[itemData["index"]];
              2 == itemData["index"] ? item.getChildByName("ic_rank").x = -235.622 : item.getChildByName("ic_rank").x = -239.622;
            } else {
              item.getChildByName("ic_rank").active = false;
              item.getChildByName("lblRank").active = true;
            }
            item.active = true;
          };
          this.scrView.setDataList(cb, this.dataList);
        };
        __decorate([ property(cc.Node) ], PopupHonors.prototype, "itemTemplate", void 0);
        __decorate([ property([ cc.SpriteFrame ]) ], PopupHonors.prototype, "sprRank", void 0);
        __decorate([ property(ScrollViewControl_1.default) ], PopupHonors.prototype, "scrView", void 0);
        PopupHonors = __decorate([ ccclass ], PopupHonors);
        return PopupHonors;
      }(Dialog_1.default);
      TaiXiuSieuToc.PopupHonors = PopupHonors;
    })(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
    exports.default = TaiXiuSieuToc.PopupHonors;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/ScrollViewControl": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient": void 0
  } ],
  "TaiXiuST.PopupSoiCau": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c719HC9iRIK7MShRm/IZah", "TaiXiuST.PopupSoiCau");
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
    var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuSieuToc_Controller_1 = require("./TaiXiuSieuToc.Controller");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TaiXiuSieuToc;
    (function(TaiXiuSieuToc) {
      var PopupSoiCau = function(_super) {
        __extends(PopupSoiCau, _super);
        function PopupSoiCau() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.lineTemplate = null;
          _this.iconTaiTemplate = null;
          _this.iconXiuTemplate = null;
          _this.iconXX1Template = null;
          _this.iconXX2Template = null;
          _this.iconXX3Template = null;
          _this.iconNumberTaiTemplate = null;
          _this.iconNumberXiuTemplate = null;
          _this.page1 = null;
          _this.lblLastSession = null;
          _this.xx1Draw = null;
          _this.xx2Draw = null;
          _this.xx3Draw = null;
          _this.xx123Draw = null;
          _this.page2 = null;
          _this.lblTai1 = null;
          _this.lblTai2 = null;
          _this.lblXiu1 = null;
          _this.lblXiu2 = null;
          _this.sprDot = [];
          _this.contentDraw = null;
          return _this;
        }
        PopupSoiCau.prototype.show = function() {
          _super.prototype.show.call(this);
          App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
          this.page1.active = false;
          this.page2.active = false;
          this.lineTemplate.parent.active = false;
        };
        PopupSoiCau.prototype.dismiss = function() {
          _super.prototype.dismiss.call(this);
          this.page1.active = false;
          this.page2.active = false;
        };
        PopupSoiCau.prototype._onShowed = function() {
          _super.prototype._onShowed.call(this);
          this.drawPage1();
          this.page1.active = true;
          this.page2.active = false;
        };
        PopupSoiCau.prototype.toggleXX1 = function(target) {
          this.xx1Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.toggleXX2 = function(target) {
          this.xx2Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.toggleXX3 = function(target) {
          this.xx3Draw.active = target.isChecked;
        };
        PopupSoiCau.prototype.togglePage = function() {
          this.page1.active = !this.page1.active;
          this.page2.active = !this.page1.active;
          this.page1.active ? this.drawPage1() : this.drawPage2();
        };
        PopupSoiCau.prototype.drawPage1 = function() {
          var data = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.slice();
          data.length > 21 && (data = data.splice(0, 21));
          var last = data[0];
          var lastDices = last.dices;
          var lastScore = lastDices[0] + lastDices[1] + lastDices[2];
          this.lblLastSession.string = "Phi\xean g\u1ea7n nh\u1ea5t: (#" + last.session + ")  " + (lastScore >= 11 ? "T\xc0I" : "X\u1ec8U") + "  " + lastScore + "(" + lastDices[0] + "-" + lastDices[1] + "-" + lastDices[2] + ")";
          var endPosX = 337.215;
          var startPosY = -274.135;
          var startPosY123 = -13.907;
          this.xx1Draw.removeAllChildren();
          this.xx2Draw.removeAllChildren();
          this.xx3Draw.removeAllChildren();
          this.xx123Draw.removeAllChildren();
          var _i = 0;
          var spacingX = 31.83;
          var spacingY = 31;
          data = data.reverse();
          for (var i = data.length - 1; i >= 0; i--) {
            var dices = data[i].dices;
            var score = dices[0] + dices[1] + dices[2];
            var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
            var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
            var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
            var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + spacingY / 3 * (score - 3));
            var iconXX1 = cc.instantiate(this.iconXX1Template);
            iconXX1.parent = this.xx1Draw;
            iconXX1.zIndex = 5;
            iconXX1.setPosition(startPosXX1);
            var iconXX2 = cc.instantiate(this.iconXX2Template);
            iconXX2.parent = this.xx2Draw;
            iconXX2.zIndex = 5;
            iconXX2.setPosition(startPosXX2);
            var iconXX3 = cc.instantiate(this.iconXX3Template);
            iconXX3.parent = this.xx3Draw;
            iconXX3.zIndex = 5;
            iconXX3.setPosition(startPosXX3);
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            var result = score >= 11 ? "tai" : "xiu";
            iconXX123.parent = this.xx123Draw;
            iconXX123.setPosition(startPosXX123);
            if (_i > 0) {
              dices = data[i + 1].dices;
              score = dices[0] + dices[1] + dices[2];
              var endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
              var endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
              var endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
              var endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + spacingY / 3 * (score - 3));
              var line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx1Draw;
              line.width = Utils_1.default.v2Distance(startPosXX1, endPosXX1);
              line.setPosition(startPosXX1);
              line.angle = Utils_1.default.v2Degrees(startPosXX1, endPosXX1);
              line.color = cc.Color.BLACK.fromHEX("#c7452b");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx2Draw;
              line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
              line.setPosition(startPosXX2);
              line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
              line.color = cc.Color.BLACK.fromHEX("#9fd100");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx3Draw;
              line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
              line.setPosition(startPosXX3);
              line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
              line.color = cc.Color.BLACK.fromHEX("#3980d8");
              line.zIndex = 0;
              line = cc.instantiate(this.lineTemplate);
              line.parent = this.xx123Draw;
              line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
              line.setPosition(startPosXX123);
              line.angle = Utils_1.default.v2Degrees(startPosXX123, endPosXX123);
              line.color = cc.Color.BLACK.fromHEX("#fdfdfb");
              line.zIndex = -1;
            }
            _i++;
          }
        };
        PopupSoiCau.prototype.drawPage2 = function() {
          var startPosX = -295.979;
          var startPosY = 113.257;
          var spacingX = 32.5;
          var spacingY = 32;
          this.contentDraw.removeAllChildren();
          var data = [];
          var curData = [];
          var count = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.length;
          var countTai = 0;
          var countXiu = 0;
          if (count > 1) {
            var dices = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau[0].dices;
            var score = dices[0] + dices[1] + dices[2];
            var isTai = score >= 11;
            var maxItem = 5;
            for (var i = 0; i < count; i++) {
              dices = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau[i].dices;
              score = dices[0] + dices[1] + dices[2];
              var _isTai = score >= 11;
              if (_isTai !== isTai) {
                curData.length > maxItem && curData.splice(0, curData.length - maxItem);
                data.push(curData);
                isTai ? countTai += curData.length : countXiu += curData.length;
                isTai = _isTai;
                curData = [];
                curData.push(score);
              } else curData.push(score);
              if (i === count - 1) {
                curData.length > maxItem && curData.splice(0, curData.length - maxItem);
                data.push(curData);
                isTai ? countTai += curData.length : countXiu += curData.length;
              }
            }
          }
          data.length > 20 && (data = data.splice(0, 20));
          data = data.reverse();
          this.lblTai1.string = countTai + "";
          this.lblXiu1.string = countXiu + "";
          for (var i_1 = 0; i_1 < data.length; i_1++) for (var j = 0; j < data[i_1].length; j++) {
            var score_1 = data[i_1][j];
            var icon = null;
            icon = score_1 >= 11 ? cc.instantiate(this.iconNumberTaiTemplate) : cc.instantiate(this.iconNumberXiuTemplate);
            icon.parent = this.contentDraw;
            icon.setPosition(cc.v2(startPosX + spacingX * i_1, startPosY - spacingY * j));
            icon.children[0].getComponent(cc.Label).string = "" + score_1;
          }
          startPosX = -295.979;
          startPosY = -127.113;
          var column = 0;
          var row = 0;
          var countTai = 0;
          var countXiu = 0;
          var data = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.slice();
          data.length > 100 && data.splice(0, data.length - 100);
          data = data.reverse();
          for (var i = 0; i < data.length; i++) {
            var score = data[i].dices[0] + data[i].dices[1] + data[i].dices[2];
            score >= 11 ? countTai++ : countXiu++;
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.contentDraw;
            iconXX123.setPosition(startPosX + spacingX * column, startPosY - spacingY * row - 2);
            row++;
            if (row >= 5) {
              row = 0;
              column++;
            }
          }
          this.lblTai2.string = countTai + "";
          this.lblXiu2.string = countXiu + "";
        };
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "lineTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconTaiTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXiuTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX1Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX2Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconXX3Template", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconNumberTaiTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "iconNumberXiuTemplate", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblLastSession", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx1Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx2Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx3Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "xx123Draw", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "page2", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblTai2", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu1", void 0);
        __decorate([ property(cc.Label) ], PopupSoiCau.prototype, "lblXiu2", void 0);
        __decorate([ property([ cc.SpriteFrame ]) ], PopupSoiCau.prototype, "sprDot", void 0);
        __decorate([ property(cc.Node) ], PopupSoiCau.prototype, "contentDraw", void 0);
        PopupSoiCau = __decorate([ ccclass ], PopupSoiCau);
        return PopupSoiCau;
      }(Dialog_1.default);
      TaiXiuSieuToc.PopupSoiCau = PopupSoiCau;
    })(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
    exports.default = TaiXiuSieuToc.PopupSoiCau;
    cc._RF.pop();
  }, {
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/Dialog": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "./TaiXiuSieuToc.Controller": "TaiXiuSieuToc.Controller"
  } ],
  "TaiXiuSieuToc.Cmd": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb85e4r9ChD+IuWiPOI9UNo", "TaiXiuSieuToc.Cmd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cmd = void 0;
    var cmd;
    (function(cmd) {
      var Code = function() {
        function Code() {}
        Code.CMD_51S = 5;
        Code.CMD_50S = 1;
        Code.CMD_14S = 2;
        Code.CMD_BET = 3;
        Code.CMD_WIN_USER = 4;
        Code.CMD_REFUND_USER = 7;
        Code.CMD_HISTORY = 6;
        Code.CMD_TXRECORD_HISTORY = 8;
        Code.CMD_THONGKE_PHIEN = 9;
        Code.CMD_CHAT = 10;
        Code.CMD_CHAT_ALL = 11;
        Code.CMD_MAINTAIN = 12;
        Code.CMD_USER_BET = 13;
        Code.CMD_TOP_HONOR = 14;
        Code.CMD_DIS_TX = 20;
        return Code;
      }();
      cmd.Code = Code;
      var API = function() {
        function API() {}
        API.LOGIN = "api/login";
        API.WS = "websocket/ws-taixiu";
        API.USER = "/user/queue/tx";
        API.DISCONNECT = "/queue/disconnect";
        API.CHAT = "/topic/chats";
        API.HISTORY_BET = "api/tx/lichsucuoc";
        return API;
      }();
      cmd.API = API;
    })(cmd = exports.cmd || (exports.cmd = {}));
    exports.default = cmd;
    cc._RF.pop();
  }, {} ],
  "TaiXiuSieuToc.Controller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a3a26zkstIOosxoiK6WsKN", "TaiXiuSieuToc.Controller");
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
    var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
    var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
    var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
    var TaiXiuSieuToc_Cmd_1 = require("./TaiXiuSieuToc.Cmd");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TW = cc.tween;
    var STATE_GAME = {
      BET: 1,
      SHAKE: 2,
      RESULT: 3,
      PREPARE_RESULT: 4
    };
    var ANIM_STATE = {
      DRAGON_NORMAL: "animation_dragon_only",
      DRAGON_X2SPEED: "animation_dragon_only_x2speed",
      TABLE_NODRAGON: "animation_table_nodragon",
      TABLE_DRAGON: "animation_table_dragon"
    };
    var TaiXiuSieuTocController = function(_super) {
      __extends(TaiXiuSieuTocController, _super);
      function TaiXiuSieuTocController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrollChat = null;
        _this.chatNhanh = null;
        _this.contentChatNhanh = null;
        _this.lbTotalTai = null;
        _this.lbTotalXiu = null;
        _this.lbTotalBetTai = null;
        _this.lbTotalBetXiu = null;
        _this.lbBetXiu = null;
        _this.lbBetTai = null;
        _this.lbTimeCountDown = null;
        _this.lbSession = null;
        _this.lbTotalUserTai = null;
        _this.lbTotalUserXiu = null;
        _this.lbWin = null;
        _this.lbScore = null;
        _this.listFont = [];
        _this.nodeBtnBet = null;
        _this.nodeChat = null;
        _this.nodeTxtTai = null;
        _this.nodeTxtXiu = null;
        _this.sprBtnBetXiu = null;
        _this.sprBtnBetTai = null;
        _this.bgGame = null;
        _this.alertToast = null;
        _this.nodeHistoryShort = null;
        _this.popupContainer = null;
        _this.bg_Score = null;
        _this.bgLight = null;
        _this.nodeBat = null;
        _this.bgLighting = null;
        _this.bgTime = null;
        _this.edbChat = null;
        _this.scrChat = null;
        _this.dice1 = null;
        _this.dice2 = null;
        _this.dice3 = null;
        _this.dragon = null;
        _this.table = null;
        _this.sprDots = [];
        _this.timeInBg = 0;
        _this.currentGate = -1;
        _this.totalBet = 0;
        _this.currentBet = 0;
        _this.result = [];
        _this.totalResult = 0;
        _this.session = 0;
        _this.stateGame = 0;
        _this.isConnected = false;
        _this.listChatHistory = [];
        _this.listTimer = [];
        _this.historySession = [];
        _this.historySoiCau = [];
        _this.historyShort = [];
        _this.popups = [];
        _this.gameSubscribeId = "";
        _this.currentBtnBet = null;
        _this.timeConfirmBet = 1;
        _this.lastBetAmount = 0;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        _this.popupSoiCau = null;
        _this.popupDetailSession = null;
        return _this;
      }
      TaiXiuSieuTocController_1 = TaiXiuSieuTocController;
      TaiXiuSieuTocController.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.nodeChat.x = cc.winSize.width;
        this.nodeChat.active = false;
        TaiXiuSieuTocController_1.instance = this;
        TaiXiuSieuToc_NetworkClient_1.default.TaiXiuSieuTocController = this;
        TW(this.bgLighting).repeatForever(TW().sequence(TW().to(.5, {
          opacity: 0
        }), TW().to(.5, {
          opacity: 255
        }))).start();
        this.nodeBtnBet.active = false;
        var self = this;
        var _loop_1 = function() {
          var node = this_1.contentChatNhanh.children[i];
          node.on("click", function() {
            self.onClickSendChatNhanh(node.children[0].getComponent(cc.Label).string);
            self.scrollChat.active = true;
            self.chatNhanh.active = false;
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) _loop_1();
      };
      TaiXiuSieuTocController.prototype.toggleChatNhanh = function() {
        if (false == this.chatNhanh.active) {
          this.chatNhanh.active = true;
          this.scrollChat.active = false;
        } else {
          this.chatNhanh.active = false;
          this.scrollChat.active = true;
        }
      };
      TaiXiuSieuTocController.prototype.onEnable = function() {
        this.resetView();
        this.stateGame = 0;
        this.isConnected && TaiXiuSieuToc_NetworkClient_1.default.getInstance().getChatHistory();
      };
      TaiXiuSieuTocController.prototype.start = function() {
        var _this = this;
        this.setupTimeRunInBg();
        false == TaiXiuSieuToc_NetworkClient_1.default.getInstance().isConnected && TaiXiuSieuToc_NetworkClient_1.default.getInstance().connect();
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().addListener(function(data) {
          if (false == _this.node.active) return;
          if (false == _this.isConnected) {
            _this.isConnected = true;
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.USER);
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.DISCONNECT);
            setTimeout(function() {
              TaiXiuSieuToc_NetworkClient_1.default.getInstance().getChatHistory();
            }, 500);
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySession();
          }
          var res = JSON.parse(data["body"]);
          switch (res["cmd"]) {
           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_50S:
            _this.session = res.id;
            if (false == _this.lbTimeCountDown.node.active) {
              _this.lbTimeCountDown.node.active = true;
              _this.lbSession.string = "#" + _this.session;
              _this.nodeBat.active = true;
              _this.nodeBat.y = 9;
            }
            var timeCd = res.cd;
            var totalBetTai = res.at;
            var totalBetXiu = res.ax;
            _this.result = [];
            Tween_1.default.numberTo(_this.lbTotalTai, totalBetTai, .3);
            Tween_1.default.numberTo(_this.lbTotalXiu, totalBetXiu, .3);
            _this.lbTimeCountDown.string = timeCd - 33 >= 10 ? (timeCd - 33).toString() : "0" + (timeCd - 33);
            _this.lbTotalUserTai.string = res.ut;
            _this.lbTotalUserXiu.string = res.ux;
            if (0 == _this.stateGame || _this.stateGame == STATE_GAME.RESULT) {
              _this.lbTimeCountDown.node.scale = 1;
              _this.lbTimeCountDown.node.setPosition(cc.v2(-2.7, 47));
              if (timeCd - 33 <= 5) {
                _this.dragon.node.active = true;
                _this.dragon.setAnimation(0, ANIM_STATE.DRAGON_X2SPEED, true);
                _this.lbTimeCountDown.node.color = new cc.Color().fromHEX("#FF6A6A");
              } else {
                _this.dragon.node.active = false;
                _this.table.setAnimation(0, ANIM_STATE.TABLE_DRAGON, true);
                _this.lbTimeCountDown.node.color = cc.Color.WHITE;
              }
            }
            47 == timeCd && _this.showToast(App_1.default.instance.getTextLang("txt_bet_invite"));
            33 == timeCd && _this.showToast(App_1.default.instance.getTextLang("txt_taixiu_finish"));
            if (38 == timeCd) {
              _this.dragon.node.active = true;
              _this.dragon.setAnimation(0, ANIM_STATE.DRAGON_X2SPEED, true);
              _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
            }
            if (timeCd < 36) {
              _this.stateGame = STATE_GAME.PREPARE_RESULT;
              if (1 != _this.lbTimeCountDown.node.scale) {
                cc.Tween.stopAllByTarget(_this.lbTimeCountDown.node);
                _this.lbTimeCountDown.node.scale = 1;
                _this.lbTimeCountDown.node.setPosition(cc.v2(-2.745, 47));
              }
            } else _this.stateGame = STATE_GAME.BET;
            _this.lbTimeCountDown.node.color = timeCd < 39 ? new cc.Color().fromHEX("#FF6A6A") : cc.Color.WHITE;
            _this.dice1.node.active = false;
            _this.dice2.node.active = false;
            _this.dice3.node.active = false;
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_51S:
            _this.dragon.node.active = false;
            _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
            _this.session = res.id;
            _this.lbSession.string = "#" + _this.session;
            var timeCd = res.cd;
            _this.lbTimeCountDown.string = timeCd;
            _this.result = res.rs;
            _this.historyShort.unshift(res.rs);
            _this.historySoiCau.unshift({
              session: _this.session,
              dices: res.rs
            });
            _this.loadListHistoryShort();
            _this.totalResult = _this.result[0] + _this.result[1] + _this.result[2];
            _this.showResultWin(true);
            _this.stateGame != STATE_GAME.BET && 0 != _this.stateGame || (_this.stateGame = STATE_GAME.RESULT);
            _this.bgTime.active = true;
            cc.Tween.stopAllByTarget(_this.lbTimeCountDown.node);
            TW(_this.lbTimeCountDown.node).to(.5, {
              scale: .25,
              x: _this.bgTime.x,
              y: _this.bgTime.y + 8
            }, {
              easing: cc.easing.sineIn
            }).start();
            TW(_this.lbTimeCountDown.node).tag(1);
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_14S:
            _this.session = res.id;
            _this.lbSession.string = "#" + _this.session;
            23 == res.cd && _this.shakeDice();
            _this.result = res.rs;
            _this.totalResult = _this.result[0] + _this.result[1] + _this.result[2];
            if (res.cd <= 5) {
              _this.lbTimeCountDown.node.color = new cc.Color().fromHEX("#FF6A6A");
              _this.bgTime.active = true;
              _this.lbTimeCountDown.node.active = true;
              _this.lbTimeCountDown.node.scale = .25;
              _this.lbTimeCountDown.node.setPosition(cc.v2(_this.bgTime.x, _this.bgTime.y + 8));
              _this.lbTimeCountDown.string = "0" + res.cd;
              _this.stateGame = STATE_GAME.RESULT;
              _this.setDice();
              _this.dragon.node.active = false;
              _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
              _this.nodeBat.active = false;
            }
            0 == res.cd && _this.resetView();
            _this.lbTotalUserTai.string = Utils_1.default.formatNumber(res.ut);
            _this.lbTotalUserXiu.string = Utils_1.default.formatNumber(res.ux);
            _this.lbTotalTai.string = Utils_1.default.formatNumber(res.at);
            _this.lbTotalXiu.string = Utils_1.default.formatNumber(res.ax);
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_BET:
            if (null != res.data && 0 == res.status) {
              _this.showToast(App_1.default.instance.getTextLang("txt_bet_success"));
              _this.lastBetAmount = res.data.betamount;
              _this.totalBet += res.data.betamount;
              _this.currentBet = 0;
              1 == _this.currentGate ? Tween_1.default.numberTo(_this.lbTotalBetTai, _this.totalBet, .3) : Tween_1.default.numberTo(_this.lbTotalBetXiu, _this.totalBet, .3);
              _this.sprBtnBetTai.active = true;
              _this.sprBtnBetXiu.active = true;
              _this.lbBetTai.node.active = false;
              _this.lbBetXiu.node.active = false;
              Configs_1.default.Login.Coin -= res.data.betamount;
              BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            } else _this.showToast(App_1.default.instance.getTextLang("txt_bet_error2"));
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_CHAT_ALL:
            if (res.data.length > 0) {
              _this.listChatHistory = res.data;
              _this.listChatHistory.length > 15 && _this.listChatHistory.splice(0, 15);
              _this.initListChat();
            }
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_CHAT:
            _this.listChatHistory.push(res);
            _this.listChatHistory.length > 15 && _this.listChatHistory.splice(0, 1);
            _this.addChat(res.u, res.m, _this.listChatHistory.length - 1);
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_HISTORY:
            if (res.data.length > 0) {
              _this.historySession = res.data;
              _this.historySession.forEach(function(item) {
                if (null != item.result) {
                  _this.historyShort.push(item.result);
                  var data_1 = {};
                  data_1.session = item.id;
                  data_1.dices = JSON.parse(item.result);
                  _this.historySoiCau.push(data_1);
                }
              });
              _this.loadListHistoryShort();
            }
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_TXRECORD_HISTORY:
           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_REFUND_USER:
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_WIN_USER:
            var amount = res.amount;
            _this.lbWin.string = "+" + Utils_1.default.formatNumber(amount);
            Configs_1.default.Login.Coin += amount;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.lbWin.node.active = true;
            TW(_this.lbWin.node).set({
              y: 300,
              scale: 3,
              opacity: 0,
              angle: -720
            }).to(1, {
              y: 25,
              scale: 1,
              opacity: 255,
              angle: 0
            }, {
              easing: cc.easing.sineIn
            }).delay(1.5).call(function() {
              _this.lbWin.node.active = false;
            }).start();
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_THONGKE_PHIEN:
           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_USER_BET:
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_TOP_HONOR:
            null != _this.popupHonor && _this.popupHonor.node.active && 0 == res.status && null != res.data && _this.popupHonor.initData(res.data);
            App_1.default.instance.showLoading(false);
            break;

           case TaiXiuSieuToc_Cmd_1.default.Code.CMD_DIS_TX:
            _this.dismiss();
          }
        }, this);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function() {
          if (!_this.node.active) return;
          _this.dismiss();
        }, this);
      };
      TaiXiuSieuTocController.prototype.setupTimeRunInBg = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function() {
          _this.timeInBg = cc.sys.now();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          var timeNow = cc.sys.now();
          var timeHide = _this.timeInBg;
          cc.director.getActionManager().update((timeNow - timeHide) / 1e3);
          cc.Tween.stopAllByTag(1);
          (timeNow - timeHide) / 1e3 > 15 && _this.dismiss();
        });
      };
      TaiXiuSieuTocController.prototype.show = function() {
        if (this.node.active) {
          this.reOrder();
          return;
        }
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        _super.prototype.show.call(this);
      };
      TaiXiuSieuTocController.prototype.dismiss = function() {
        _super.prototype.dismiss.call(this);
        this.showNodeChat(false);
      };
      TaiXiuSieuTocController.prototype.onDestroy = function() {};
      TaiXiuSieuTocController.prototype.resetView = function() {
        this.showResultWin(false);
        this.bgLight.active = false;
        this.nodeBat.active = false;
        this.nodeBat.scale = 1;
        this.lbTimeCountDown.node.active = false;
        this.dragon.node.active = false;
        this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
        this.lbTotalBetXiu.string = this.lbTotalBetTai.string = this.lbTotalBetXiu.string = this.lbTotalXiu.string = this.lbTotalTai.string = this.lbTotalUserTai.string = this.lbTotalUserXiu.string = this.lbBetTai.string = this.lbBetXiu.string = "0";
        this.sprBtnBetTai.active = true;
        this.sprBtnBetXiu.active = true;
        this.lbBetTai.node.active = false;
        this.lbBetXiu.node.active = false;
        this.lbScore.node.active = false;
        this.bg_Score.active = false;
        this.sprBtnBetTai.parent.getChildByName("boxBet").active = false;
        this.sprBtnBetXiu.parent.getChildByName("boxBet").active = false;
        this.totalBet = 0;
        this.currentGate = -1;
        this.nodeTxtTai.scale = 1;
        this.nodeTxtXiu.scale = 1;
        this.nodeTxtTai.angle = 0;
        this.nodeTxtXiu.angle = 0;
        this.lastBetAmount = 0;
        this.result = [];
        this.lbTimeCountDown.node.color = cc.Color.WHITE;
        this.lbTimeCountDown.node.scale = 1;
        this.lbTimeCountDown.node.active = false;
        this.lbTimeCountDown.node.setPosition(cc.v2(-2.745, 47));
        this.bgTime.active = false;
        null != this.currentBtnBet && (this.currentBtnBet.color = cc.Color.WHITE);
        cc.Tween.stopAllByTag(1);
      };
      TaiXiuSieuTocController.prototype.shakeDice = function() {
        var _this = this;
        this.dice1.node.active = this.dice2.node.active = this.dice3.node.active = true;
        this.dice1.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        this.dice2.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        this.dice3.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        cc.Tween.stopAllByTarget(this.dice1.node);
        cc.Tween.stopAllByTarget(this.dice2.node);
        cc.Tween.stopAllByTarget(this.dice3.node);
        TW(this.dice1.node).delay(1.5).to(.5, {
          opacity: 0
        }, {
          easing: cc.easing.sineIn
        }).start();
        TW(this.dice2.node).delay(1.5).to(.5, {
          opacity: 0
        }, {
          easing: cc.easing.sineIn
        }).start();
        TW(this.dice3.node).delay(1.5).to(.5, {
          opacity: 0
        }, {
          easing: cc.easing.sineIn
        }).start();
        this.nodeBat.y = 150;
        this.nodeBat.opacity = 0;
        cc.Tween.stopAllByTarget(this.nodeBat);
        this.nodeBat.active = true;
        TW(this.nodeBat).delay(1.5).to(.75, {
          y: 9,
          opacity: 255,
          scale: 1
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.table.setAnimation(0, ANIM_STATE.TABLE_DRAGON, true);
        }).start();
        TW(this.nodeBat).tag(1);
        TW(this.dice3.node).tag(1);
        TW(this.dice2.node).tag(1);
        TW(this.dice1.node).tag(1);
      };
      TaiXiuSieuTocController.prototype.setDice = function() {
        if (!this.dice1.node.active || 255 != this.dice1.node.opacity) {
          cc.Tween.stopAllByTarget(this.nodeBat);
          TW(this.nodeBat).to(.5, {
            y: 100,
            opacity: 0,
            scale: 1.2
          }, {
            easing: cc.easing.sineOut
          }).start();
          TW(this.dice1.node).to(.5, {
            opacity: 255
          }, {
            easing: cc.easing.sineOut
          }).start();
          TW(this.dice2.node).to(.5, {
            opacity: 255
          }, {
            easing: cc.easing.sineOut
          }).start();
          TW(this.dice3.node).to(.5, {
            opacity: 255
          }, {
            easing: cc.easing.sineOut
          }).start();
          TW(this.dice1.node).tag(1);
          TW(this.dice3.node).tag(1);
          TW(this.dice2.node).tag(1);
          this.dice1.node.active = this.dice2.node.active = this.dice3.node.active = true;
          this.dice1.setAnimation(0, this.getAnimationDiceEnd(this.result[0]), false);
          this.dice2.setAnimation(0, this.getAnimationDiceEnd(this.result[1]), false);
          this.dice3.setAnimation(0, this.getAnimationDiceEnd(this.result[2]), false);
        }
      };
      TaiXiuSieuTocController.prototype.getAnimationDiceEnd = function(dice) {
        var anim = "";
        1 == dice ? anim = "#1 END_F1" : 2 == dice ? anim = "#1 END_F2" : 3 == dice ? anim = "#1 END_F3" : 4 == dice ? anim = "#1 END_F4" : 5 == dice ? anim = "#1 END_F5" : 6 == dice && (anim = "#1 END_F6");
        return anim;
      };
      TaiXiuSieuTocController.prototype.getAnimationDiceStart = function(dice) {
        var anim = "";
        var listPrefix = [ "#1", "#2", "#3" ];
        var ranPre = listPrefix[0];
        1 == dice ? anim = ranPre + " WHITE_F1" : 2 == dice ? anim = ranPre + " WHITE_F2" : 3 == dice ? anim = ranPre + " WHITE_F3" : 4 == dice ? anim = ranPre + " WHITE_F4" : 5 == dice ? anim = ranPre + " WHITE_F5" : 6 == dice && (anim = ranPre + " WHITE_F6");
        return anim;
      };
      TaiXiuSieuTocController.prototype.onClick = function() {
        this.loginGame();
      };
      TaiXiuSieuTocController.prototype.loginGame = function() {};
      TaiXiuSieuTocController.prototype.subcribeWS = function() {
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().connect();
      };
      TaiXiuSieuTocController.prototype.onClickHonor = function() {
        var _this = this;
        null == this.popupHonor ? cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupHonors", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupHonor = cc.instantiate(prefab).getComponent("TaiXiuST.PopupHonors");
          _this.popupHonor.node.parent = _this.popupContainer;
          _this.popupHonor.node.active = true;
          _this.popupHonor.show();
          _this.popups.push(_this.popupHonor.node);
        }) : this.popupHonor.show();
      };
      TaiXiuSieuTocController.prototype.onClickHistory = function() {
        var _this = this;
        null == this.popupHistory ? cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupHistory", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupHistory = cc.instantiate(prefab).getComponent("TaiXiuST.PopupHistory");
          _this.popupHistory.node.parent = _this.popupContainer;
          _this.popupHistory.node.active = true;
          _this.popupHistory.show();
          _this.popups.push(_this.popupHistory.node);
        }) : this.popupHistory.show();
      };
      TaiXiuSieuTocController.prototype.onClickHistorySession = function() {
        var _this = this;
        null == this.popupDetailSession ? cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupDetailHistory", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupDetailSession = cc.instantiate(prefab).getComponent("TaiXiuST.PopupDetailHistory");
          _this.popupDetailSession.node.parent = _this.popupContainer;
          _this.popupDetailSession.showDetail(_this.session - 1);
          _this.popups.push(_this.popupDetailSession.node);
          App_1.default.instance.showLoading(false);
        }) : this.popupDetailSession.showDetail(this.session - 1);
      };
      TaiXiuSieuTocController.prototype.onClickSoiCau = function() {
        var _this = this;
        null == this.popupSoiCau ? cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupSoiCau", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupSoiCau = cc.instantiate(prefab).getComponent("TaiXiuST.PopupSoiCau");
          _this.popupSoiCau.node.parent = _this.popupContainer;
          _this.popupSoiCau.show();
          _this.popups.push(_this.popupSoiCau.node);
          App_1.default.instance.showLoading(false);
        }) : this.popupSoiCau.show();
      };
      TaiXiuSieuTocController.prototype.onClickGuide = function() {
        var _this = this;
        null == this.popupGuide ? cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupGuide", cc.Prefab, function(finish, total, item) {}, function(err1, prefab) {
          _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
          _this.popupGuide.node.parent = _this.popupContainer;
          _this.popupGuide.show();
          _this.popups.push(_this.popupGuide.node);
          App_1.default.instance.showLoading(false);
        }) : this.popupGuide.show();
      };
      TaiXiuSieuTocController.prototype.reOrder = function() {
        _super.prototype.reOrder.call(this);
      };
      TaiXiuSieuTocController.prototype.onClickClose = function() {
        this.dismiss();
        App_1.default.instance.hideGameMini("TaiXiuSieuToc");
      };
      TaiXiuSieuTocController.prototype.onClickChat = function() {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        this.showNodeChat(!this.nodeChat.active);
      };
      TaiXiuSieuTocController.prototype.onClickSendChat = function() {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        var data = {};
        data.u = Configs_1.default.Login.Nickname;
        data.m = this.edbChat.string.trim();
        this.edbChat.string = "";
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendChat(data);
      };
      TaiXiuSieuTocController.prototype.onClickSendChatNhanh = function(msg) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        var data = {};
        data.u = Configs_1.default.Login.Nickname;
        data.m = msg;
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendChat(data);
      };
      TaiXiuSieuTocController.prototype.onClickBet = function(even, data) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (this.currentGate < 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_taixiu_choose_gate"));
          return;
        }
        if (Configs_1.default.Login.Coin < parseInt(data)) {
          this.showToast(App_1.default.instance.getTextLang("txt_not_enough"));
          return;
        }
        if (this.stateGame == STATE_GAME.BET) {
          var amount = parseInt(data);
          this.currentBet += amount;
          if (1 == this.currentGate) {
            this.lbBetTai.node.active = true;
            this.sprBtnBetTai.active = false;
            Tween_1.default.numberTo(this.lbBetTai, this.currentBet, .3);
          } else if (2 == this.currentGate) {
            this.lbBetXiu.node.active = true;
            this.sprBtnBetXiu.active = false;
            Tween_1.default.numberTo(this.lbBetXiu, this.currentBet, .3);
          }
          null != this.currentBtnBet && (this.currentBtnBet.color = cc.Color.WHITE);
          this.currentBtnBet = even.target;
          this.currentBtnBet.color = new cc.Color().fromHEX("#FFE000");
          TW(this.currentBtnBet).to(.1, {
            scale: 1.2
          }).to(.1, {
            scale: 1
          }).start();
        } else this.stateGame == STATE_GAME.PREPARE_RESULT ? this.showToast(App_1.default.instance.getTextLang("txt_bet_error8")) : this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
      };
      TaiXiuSieuTocController.prototype.onClickAllIn = function() {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (Configs_1.default.Login.Coin < 1e3) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error7"));
          return;
        }
        this.onClickBet(null, Configs_1.default.Login.Coin);
      };
      TaiXiuSieuTocController.prototype.onClickConfirmBet = function() {
        var _this = this;
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (0 == this.timeConfirmBet) {
          var msg = App_1.default.instance.getTextLang("txt_notify_fast_action");
          this.showToast(msg);
          return;
        }
        if (this.currentGate < 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_taixiu_choose_gate"));
          return;
        }
        if (this.currentBet <= 0 && this.lastBetAmount <= 0) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error9"));
          return;
        }
        if (this.stateGame == STATE_GAME.PREPARE_RESULT) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error8"));
          return;
        }
        if (!TaiXiuSieuToc_NetworkClient_1.default.getInstance().checkSubChannel(this.gameSubscribeId)) {
          TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.USER);
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error2"));
          return;
        }
        this.timeConfirmBet = 0;
        this.scheduleOnce(function() {
          _this.timeConfirmBet = 1;
        }, 1);
        var dataBet = {};
        dataBet.taixiuId = this.session;
        dataBet.loginname = Configs_1.default.Login.Nickname;
        dataBet.betamount = this.currentBet;
        0 == this.currentBet && this.lastBetAmount > 0 && (dataBet.betamount = this.lastBetAmount);
        dataBet.typed = this.currentGate;
        var betFrom = 0;
        cc.sys.isNative && (betFrom = cc.sys.os == cc.sys.OS_ANDROID ? 2 : 1);
        dataBet.betfrom = betFrom;
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendBet(dataBet);
      };
      TaiXiuSieuTocController.prototype.getHistorySession = function() {
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySession();
      };
      TaiXiuSieuTocController.prototype.onClickCancelBet = function() {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        this.sprBtnBetTai.active = true;
        this.sprBtnBetXiu.active = true;
        this.lbBetXiu.node.active = false;
        this.lbBetTai.node.active = false;
        this.currentBet = 0;
      };
      TaiXiuSieuTocController.prototype.setTimeCountDown = function(data) {};
      TaiXiuSieuTocController.prototype.onClickChooseGate = function(even, data) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (-1 != this.currentGate && this.totalBet && ("TAI" == data && 2 == this.currentGate || "XIU" == data && 1 == this.currentGate)) {
          this.showToast(App_1.default.instance.getTextLang("txt_taixiu_chat_error4"));
          return;
        }
        if (this.stateGame == STATE_GAME.RESULT) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error3"));
          return;
        }
        if (this.stateGame == STATE_GAME.PREPARE_RESULT) {
          this.showToast(App_1.default.instance.getTextLang("txt_bet_error8"));
          return;
        }
        switch (data) {
         case "TAI":
          this.currentGate = 1;
          this.currentBet = 0;
          this.lbBetTai.string = "0";
          this.lbBetXiu.node.active = false;
          this.lbBetTai.node.active = true;
          this.sprBtnBetTai.parent.getChildByName("boxBet").active = true;
          this.sprBtnBetXiu.parent.getChildByName("boxBet").active = false;
          this.sprBtnBetTai.active = false;
          this.sprBtnBetXiu.active = true;
          break;

         case "XIU":
          this.currentGate = 2;
          this.currentBet = 0;
          this.lbBetXiu.string = "0";
          this.lbBetTai.node.active = false;
          this.lbBetXiu.node.active = true;
          this.sprBtnBetTai.active = true;
          this.sprBtnBetXiu.active = false;
          this.sprBtnBetTai.parent.getChildByName("boxBet").active = false;
          this.sprBtnBetXiu.parent.getChildByName("boxBet").active = true;
        }
        this.showNodeBtnBet(true);
      };
      TaiXiuSieuTocController.prototype.showNodeBtnBet = function(state) {
        if (false == this.nodeBtnBet.active && state) {
          this.nodeBtnBet.active = true;
          for (var i = 0; i < 8; i++) {
            var btnBet = this.nodeBtnBet.children[i];
            var timeDelay = .05 * i;
            btnBet.scale = 0;
            cc.tween(btnBet).sequence(cc.tween().delay(timeDelay), cc.tween().to(.1, {
              scale: 1
            }, {
              easing: cc.easing.backOut
            })).start();
          }
        } else state || (this.nodeBtnBet.active = false);
      };
      TaiXiuSieuTocController.prototype.showNodeChat = function(state) {
        var _this = this;
        if (state) {
          this.nodeChat.active = true;
          TW(this.nodeChat).set({
            x: cc.winSize.width,
            opacity: 0
          }).to(.3, {
            x: 558.03,
            opacity: 255
          }, {
            easing: cc.easing.sineOut
          }).start();
        } else TW(this.nodeChat).to(.3, {
          x: cc.winSize.width,
          opacity: 0
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.nodeChat.active = false;
        }).start();
      };
      TaiXiuSieuTocController.prototype.showResultWin = function(state) {
        if (state) {
          var acScale1 = TW().to(.25, {
            scale: 1.2
          });
          var acRotate1 = TW().to(.125, {
            angle: 10
          });
          var acRotate2 = TW().to(.125, {
            angle: 0
          });
          var acRotate3 = TW().to(.125, {
            angle: -10
          });
          var acRotate4 = TW().to(.125, {
            angle: 0
          });
          var acScale2 = TW().to(.25, {
            scale: 1
          });
          var acSeqRo1 = TW().sequence(acRotate1, acRotate2, acRotate3, acRotate4, acScale2);
          this.lbScore.string = this.totalResult.toString();
          this.lbScore.node.active = true;
          this.bg_Score.active = true;
          this.bgLight.active = true;
          if (this.totalResult > 10) {
            TW(this.nodeTxtTai).repeat(5, TW().sequence(TW().delay(.5), TW().parallel(acScale1, acSeqRo1))).start();
            this.bgLight.x = this.nodeTxtTai.x;
          } else {
            this.bgLight.x = this.nodeTxtXiu.x;
            TW(this.nodeTxtXiu).repeat(5, TW().sequence(TW().delay(.5), TW().parallel(acScale1, acSeqRo1))).start();
          }
        } else {
          cc.Tween.stopAllByTarget(this.nodeTxtTai);
          cc.Tween.stopAllByTarget(this.nodeTxtXiu);
          this.nodeTxtTai.scale = 1;
          this.nodeTxtXiu.scale = 1;
        }
      };
      TaiXiuSieuTocController.prototype.loadListHistoryShort = function() {
        var _this = this;
        var dataHis = this.historyShort.slice(0, 18).reverse();
        var _loop_2 = function(i) {
          var item = this_2.nodeHistoryShort.children[i];
          if (!item) {
            item = cc.instantiate(this_2.nodeHistoryShort.children[0]);
            this_2.nodeHistoryShort.addChild(item);
          }
          var data = "string" == typeof dataHis[i] ? JSON.parse(dataHis[i]) : dataHis[i];
          var result = data[0] + data[1] + data[2];
          item.getComponent(cc.Sprite).spriteFrame = result > 10 ? this_2.sprDots[0] : this_2.sprDots[1];
          result > 10 ? item.setContentSize(cc.size(23, 23)) : item.setContentSize(cc.size(26, 26));
          item.active = true;
          item.y = 0;
          TW(item).set({
            scale: 0
          }).delay(.01 * i).to(.3, {
            scale: 1
          }, {
            easing: cc.easing.backOut
          }).call(function() {
            17 == _this.nodeHistoryShort.children.indexOf(item) && TW(item).repeatForever(TW().sequence(TW().to(.5, {
              y: 10
            }), TW().to(.5, {
              y: 0
            }))).start();
          }).start();
        };
        var this_2 = this;
        for (var i = 0; i < dataHis.length; i++) _loop_2(i);
      };
      TaiXiuSieuTocController.prototype.showToast = function(msg) {
        var _this = this;
        this.alertToast.getComponentInChildren(cc.Label).string = msg;
        this.alertToast.active = true;
        cc.Tween.stopAllByTarget(this.alertToast);
        TW(this.alertToast).set({
          x: -300,
          opacity: 0
        }).to(.3, {
          x: 0,
          opacity: 255
        }, {
          easing: cc.easing.sineOut
        }).delay(1.4).to(.3, {
          x: 300,
          opacity: 0
        }, {
          easing: cc.easing.backIn
        }).call(function() {
          _this.alertToast.active = false;
        }).start();
        TW(this.alertToast).tag(1);
      };
      TaiXiuSieuTocController.prototype.initListChat = function() {
        var _this = this;
        this.scrChat.content.on(cc.Node.EventType.CHILD_ADDED, function() {
          _this.onScrollChatEvent();
        });
        if (1 == this.scrChat.content.childrenCount) for (var i = 1; i < 15; i++) this.scrChat.content.addChild(cc.instantiate(this.scrChat.content.children[0]));
        for (var i = 0; i < this.listChatHistory.length; i++) {
          var data = this.listChatHistory[i];
          this.addChat(data.u, data.m, i);
        }
        this.showNodeChat(true);
      };
      TaiXiuSieuTocController.prototype.reloadListChat = function() {};
      TaiXiuSieuTocController.prototype.addChat = function(u, m, index) {
        var item = this.scrChat.content.children[index];
        if (!item) {
          item = cc.instantiate(this.scrChat.content.children[0]);
          this.scrChat.content.addChild(item);
        }
        item.active = true;
        item.opacity = 255;
        var name = u;
        name.length > 10 && (name = name.substring(0, 7) + "..");
        m = m.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "");
        item.getComponent(cc.Label).string = name + " : " + m;
        item.children[0].getComponent(cc.Label).string = name + " : ";
        this.scrChat.content.childrenCount >= 15 && this.scrChat.content.children[0].destroy();
      };
      TaiXiuSieuTocController.prototype.onScrollChatEvent = function() {
        for (var i = 0; i < this.scrChat.content.childrenCount; i++) {
          var item = this.scrChat.content.children[i];
          var view = this.scrChat.node.getChildByName("view");
          var posWorld = this.scrChat.content.convertToWorldSpaceAR(item.getPosition());
          var posInView = view.convertToNodeSpaceAR(posWorld);
          posInView.y > view.height + 2 * item.height || posInView.y < -item.height ? item.opacity = 0 : item.opacity = 255;
        }
      };
      var TaiXiuSieuTocController_1;
      TaiXiuSieuTocController.instance = null;
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "scrollChat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "chatNhanh", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "contentChatNhanh", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalBetXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbBetXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbBetTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTimeCountDown", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbSession", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalUserTai", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbTotalUserXiu", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], TaiXiuSieuTocController.prototype, "lbScore", void 0);
      __decorate([ property([ cc.Font ]) ], TaiXiuSieuTocController.prototype, "listFont", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeBtnBet", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeChat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeTxtTai", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeTxtXiu", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "sprBtnBetXiu", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "sprBtnBetTai", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "bgGame", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "alertToast", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeHistoryShort", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "popupContainer", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "bg_Score", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "bgLight", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "nodeBat", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "bgLighting", void 0);
      __decorate([ property(cc.Node) ], TaiXiuSieuTocController.prototype, "bgTime", void 0);
      __decorate([ property(cc.EditBox) ], TaiXiuSieuTocController.prototype, "edbChat", void 0);
      __decorate([ property(cc.ScrollView) ], TaiXiuSieuTocController.prototype, "scrChat", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuSieuTocController.prototype, "dice1", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuSieuTocController.prototype, "dice2", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuSieuTocController.prototype, "dice3", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuSieuTocController.prototype, "dragon", void 0);
      __decorate([ property(sp.Skeleton) ], TaiXiuSieuTocController.prototype, "table", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TaiXiuSieuTocController.prototype, "sprDots", void 0);
      TaiXiuSieuTocController = TaiXiuSieuTocController_1 = __decorate([ ccclass ], TaiXiuSieuTocController);
      return TaiXiuSieuTocController;
    }(MiniGame_1.default);
    exports.default = TaiXiuSieuTocController;
    cc._RF.pop();
  }, {
    "../../Loading/src/Configs": void 0,
    "../../Lobby/LobbyScript/MiniGame": void 0,
    "../../Lobby/LobbyScript/Script/common/App": void 0,
    "../../Lobby/LobbyScript/Script/common/BroadcastReceiver": void 0,
    "../../Lobby/LobbyScript/Script/common/Tween": void 0,
    "../../Lobby/LobbyScript/Script/common/Utils": void 0,
    "../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient": void 0,
    "./TaiXiuSieuToc.Cmd": "TaiXiuSieuToc.Cmd"
  } ]
}, {}, [ "TaiXiuST.PopupDetailHistory", "TaiXiuST.PopupHistory", "TaiXiuST.PopupHonors", "TaiXiuST.PopupSoiCau", "TaiXiuSieuToc.Cmd", "TaiXiuSieuToc.Controller" ]);