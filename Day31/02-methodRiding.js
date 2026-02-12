var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseBank = /** @class */ (function () {
    function BaseBank() {
    }
    BaseBank.prototype.interestRate = function () {
        console.log("Interest rate is 4%");
    };
    return BaseBank;
}());
var SBIBank = /** @class */ (function (_super) {
    __extends(SBIBank, _super);
    function SBIBank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBIBank.prototype.interestRate = function () {
        console.log("Interest rate is 6%");
    };
    return SBIBank;
}(BaseBank));
var loginPage = new SBIBank();
loginPage.interestRate(); // it will call the child class method, this is called method riding, it is a feature of OOPs, it allows us to override the parent class method in the child class, so that we can provide our own implementation of the method in the child class, and when we call the method using the child class object, it will call the child class method instead of the parent class method.
