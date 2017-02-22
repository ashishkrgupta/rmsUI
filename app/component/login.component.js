"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(_router) {
        this._router = _router;
        this.isDarkTheme = false;
        this.user = { username: "", password: "" };
    }
    LoginComponent.prototype.getInToRMS = function () {
        if (this.user.username == "ashu" && this.user.password == "ashu") {
            this._router.navigate(['dashboard']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'rms-app',
            templateUrl: "../view/login.component.html",
            styleUrls: ["../view/css/login.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map