webpackJsonp([1,4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var jsPDF = __webpack_require__(615);
var LetterService = (function () {
    function LetterService() {
    }
    LetterService.prototype.createPdf = function (company, letter, sender) {
        var doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm'
        });
        var txt = '';
        if (company.contractNumber) {
            txt += 'Betreff: ' + company.contractNumber + '\n\n';
        }
        doc.setFontSize(14);
        doc.text(letter.titleText, 20, 100);
        doc.setFontSize(12);
        doc.text(this.getDate(), 170, 110);
        txt += letter.introText;
        for (var _i = 0, _a = letter.textblocks; _i < _a.length; _i++) {
            var textBlock = _a[_i];
            if (textBlock.selected === true) {
                txt += ' - ' + textBlock.content + '\n';
            }
        }
        // remove trailing , and replace by .
        var lastChar = txt.substr(txt.length - 2);
        if (lastChar === ',\n') {
            txt = txt.substr(0, txt.length - 2) + '.\n';
        }
        if (company.remarks) {
            txt += '\n\n' + company.remarks + '\n';
        }
        // sender
        doc.text(doc.splitTextToSize(sender, 40), 140, 20);
        // split sender
        var senderLines = sender.split('\n');
        var senderName = senderLines[0];
        txt += letter.endClause + '\n\n\n';
        txt += senderName;
        doc.setLineWidth(180);
        doc.setFontSize(12);
        // recipient
        var recipient = company.companyName + '\n' +
            (company.companyAddress ? company.companyAddress : '') + '\n' +
            (company.companyZip ? company.companyZip + ' ' : '') +
            (company.companyCity ? company.companyCity : '') + '\n' +
            (company.companyCountry ? company.companyCountry : '');
        doc.text(recipient, 20, 60);
        doc.text(doc.splitTextToSize(txt, 170), 20, 120);
        var filenName = company.companyName.replace(/[^A-Za-z0-9]/, '_');
        // doc.text(doc.splitTextToSize(txt, 180), 20, 100);
        doc.save(filenName + '.pdf');
    };
    /**
     * Return current Date in german format
     * @returns {string}
     */
    LetterService.prototype.getDate = function () {
        var today = new Date();
        var dd = today.getDate().toString();
        var mm = (today.getMonth() + 1).toString();
        var yyyy = today.getFullYear();
        if (parseInt(dd, 10) < 10) {
            dd = '0' + dd;
        }
        if (parseInt(mm, 10) < 10) {
            mm = '0' + mm;
        }
        return dd + '.' + mm + '.' + yyyy;
    };
    LetterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LetterService);
    return LetterService;
}());
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/letter.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 347;


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Company__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letter_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Templates__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    /**
     * constructor, called when instantiated
     * load company list and sender information
     */
    function AppComponent(letterService) {
        this.letterService = letterService;
        /**
         * Sender of the letter
         * @type {string}
         */
        this.sender = '';
        this.templateName = '';
        this.templateNames = [];
        /**
         * List of currently selected companies
         * @type {{companyName: string}[]}
         */
        this.companyList = [];
        /**
         * currently edited company
         * @type {{companyName: string}}
         */
        this.currentCompany = new __WEBPACK_IMPORTED_MODULE_1__models_Company__["a" /* Company */];
        var storeCompanylist = window.localStorage.getItem('companyList');
        if (storeCompanylist !== null) {
            this.companyList = JSON.parse(storeCompanylist);
        }
        var storeSender = window.localStorage.getItem('sender');
        if (storeSender !== null) {
            this.sender = storeSender;
        }
        var templates = new __WEBPACK_IMPORTED_MODULE_3__models_Templates__["a" /* Templates */]();
        for (var _i = 0, _a = templates.Templates; _i < _a.length; _i++) {
            var template = _a[_i];
            this.templateNames.push(template.name);
        }
        this.letter = templates.Templates[0];
        this.templateName = this.letter.name;
        console.log(this.letter);
    }
    AppComponent.prototype.changeTemplate = function () {
        this.letter = this.getTemplate(this.templateName);
    };
    AppComponent.prototype.getTemplate = function (templateName) {
        var templates = new __WEBPACK_IMPORTED_MODULE_3__models_Templates__["a" /* Templates */]();
        for (var _i = 0, _a = templates.Templates; _i < _a.length; _i++) {
            var template = _a[_i];
            if (template.name === templateName) {
                return template;
            }
        }
        return null;
    };
    /**
     * Gets current date in german format
     * @returns {string}
     */
    AppComponent.prototype.getDate = function () {
        return this.letterService.getDate();
    };
    /**
     * saves company to localstorage
     */
    AppComponent.prototype.saveCompany = function () {
        var existingCompany = null;
        for (var _i = 0, _a = this.companyList; _i < _a.length; _i++) {
            var oneCompany = _a[_i];
            if (oneCompany.companyName === this.currentCompany.companyName) {
                existingCompany = oneCompany;
            }
        }
        if (existingCompany !== null) {
            existingCompany.letter.push(JSON.parse(JSON.stringify(this.letter)));
        }
        else {
            // clone entry the stupid js way
            var newCompany = JSON.parse(JSON.stringify(this.currentCompany));
            newCompany.letter.push(this.letter);
            this.companyList.push(JSON.parse(JSON.stringify(newCompany)));
        }
        this.saveCompanyList();
        this.currentCompany = new __WEBPACK_IMPORTED_MODULE_1__models_Company__["a" /* Company */]();
        for (var _b = 0, _c = this.letter.textblocks; _b < _c.length; _b++) {
            var textBlock = _c[_b];
            textBlock.selected = true;
        }
    };
    /**
     * saves sender to localstorage
     */
    AppComponent.prototype.saveSender = function () {
        window.localStorage.setItem('sender', this.sender);
    };
    /**
     * generates pdf
     * @param {Company} company
     */
    AppComponent.prototype.printPdf = function (company, letter) {
        this.letterService.createPdf(company, letter, this.sender);
        letter.printed = this.getDate();
        this.saveCompanyList();
    };
    /**
     * saves company list in localstorage
     */
    AppComponent.prototype.saveCompanyList = function () {
        window.localStorage.setItem('companyList', JSON.stringify(this.companyList));
    };
    /**
     * creates a new letter for the selected company
     * @param company
     */
    AppComponent.prototype.createLetter = function (company) {
        this.currentCompany = company;
        this.letter = new __WEBPACK_IMPORTED_MODULE_3__models_Templates__["a" /* Templates */]().Templates[0];
        this.templateName = this.letter.name;
    };
    /**
     * removes company from company list and edits it
     * @param company
     */
    AppComponent.prototype.editCompany = function (company, letter) {
        var companyLetters = [];
        // filter out current letter
        for (var _i = 0, _a = company.letter; _i < _a.length; _i++) {
            var singleLetter = _a[_i];
            if (singleLetter !== letter) {
                companyLetters.push(singleLetter);
            }
        }
        company.letter = companyLetters;
        this.currentCompany = company;
        this.letter = letter;
        // if no letter remains
        if (company.letter.length === 0) {
            var companies = [];
            for (var _b = 0, _c = this.companyList; _b < _c.length; _b++) {
                var oneCompany = _c[_b];
                if (oneCompany.companyName !== company.companyName) {
                    companies.push(oneCompany);
                }
            }
            this.companyList = companies;
            this.saveCompanyList();
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letter_service__["a" /* LetterService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__letter_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__letter_service__["a" /* LetterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/environment.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
        this.letter = [];
    }
    return Company;
}());
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/Company.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Templates; });
var Templates = (function () {
    function Templates() {
        this.Templates = [
            {
                name: 'DSGVO-Auskunft',
                titleText: 'Datenschutzrechliche Selbstauskunft gemäß DSGVO',
                introText: 'Sehr geehrte Damen und Herren,\n\n' +
                    'nach Art. 15 DSGVO habe ich das Recht, von Ihnen eine Bestätigung darüber zu verlangen' +
                    ', ob sie personenbezogene Daten über mich gespeichert haben. Sofern dies der Fall ist, so habe ich ein' +
                    ' Recht auf Auskunft über diese Daten.\n' +
                    '\n' +
                    'Ich darf Sie in diesem Fall bitten, mir\n',
                endClause: '\n' +
                    '\n' +
                    '\n' +
                    'Mit freundlichen Grüßen,',
                textblocks: [
                    { name: 'text1', content: 'vollumfänglich sämtliche über mich bei Ihnen gespeicherten Daten in Kopie zu überlassen,',
                        selected: true },
                    { name: 'text2', content: 'den Zweck der Verarbeitung dieser Daten zu nennen,',
                        selected: true },
                    { name: 'text3', content: 'die Empfänger oder Kategorien von Empfängern, die meine Daten bereits erhalten haben oder' +
                            ' zukünftig noch erhalten werden zu nennen,',
                        selected: true },
                    { name: 'text4', content: 'die geplante Dauer der Speicherung dieser Daten zu nennen,',
                        selected: true },
                    { name: 'text5', content: 'sofern die Daten nicht bei mir erhoben werden, mir alle verfügbaren Daten über die Herkunft der' +
                            ' Daten mitzuteilen,',
                        selected: true },
                    { name: 'text6', content: 'mir darzulegen, ob eine automatisierte Entscheidungsfindung einschließlich Profiling gmäß ' +
                            'Art. 22 DSGVO ' +
                            'besteht und mir in diesem Fall aussagekräftige Informationen über die involvierte Logik und die angestrebten' +
                            ' Auswirkungen einer derartigen Verarbeitung für meine Person zukommen zu lassen,',
                        selected: true }
                ]
            },
            {
                name: 'DSGVO-Beanstandung',
                titleText: 'Beanstandung Ihrer Antwort auf das DSGVO-Auskunftsersuchen',
                introText: 'Sehr geehrte Damen und Herren,\n\n' +
                    'Ihre Antwort auf meine Anfrage war fehlerhaft. Bitte korrigieren Sie Ihre Angaben umgehend,' +
                    'Ansonsten sehe ich mich gezwungen Sie der zuständigen Aufsichtsbehörde zu melden sowie die' +
                    'Ansprüche gerichtlich durchzusetzen.\n' +
                    '\n' +
                    'Fehlerhaft oder unvollständig waren insbesondere folgende Angaben:\n',
                endClause: '\n' +
                    '\n' +
                    '\n' +
                    'Mit freundlichen Grüßen,',
                textblocks: [
                    { name: 'return1', content: 'Es fehlten Konto- bzw. Abrechnungsdaten.',
                        selected: true },
                    { name: 'return2', content: 'Es fehlten Daten über mein Kaufverhalten.',
                        selected: true },
                    { name: 'return3', content: 'Es fehlten Nutzungsprotokolle.',
                        selected: true },
                    { name: 'return4', content: 'Es fehlten Zutrittsprotokolle.',
                        selected: true },
                    { name: 'return5', content: 'Es fehlten Standortdaten und -verläufe.',
                        selected: true },
                    { name: 'return6', content: 'Es fehlten Datenbankeinträge.',
                        selected: true },
                    { name: 'return7', content: 'Es fehlten technische Daten.',
                        selected: true },
                    { name: 'return8', content: 'Es fehlten interne Notizen und Aufzeichnungen.',
                        selected: true },
                ]
            }
        ];
    }
    return Templates;
}());
//# sourceMappingURL=/home/adiehl/work/hdgdldsgvo/src/Templates.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark flex-md-nowrap shadow\">\n  <span class=\"navbar-brand col-sm-3 col-md-2 mr-0\">DSGVO-Generator</span>\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"https://github.com/adiehl/hdgdldsgvo/blob/master/INFO.md\" target=\"_blank\">\n        Datenschutzerklärung, Rechtliche Hinweise und Infos</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container mt-3\">\n\n  <div class=\"row\">\n    <!-- Firmenliste -->\n\n    <div class=\"col-md-4 order-md-2 mb-4 sidebar bg-light d-md-block d-none\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        Vorlage\n      </h4>\n      <select class=\"form-control mb-3\" [(ngModel)]=\"templateName\" (change)=\"changeTemplate()\">\n        <option *ngFor=\"let templateName of templateNames\" value=\"{{templateName}}\">{{templateName}}</option>\n      </select>\n      <ng-container *ngIf=\"companyList.length\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          Firmenliste\n          <span class=\"badge badge-success badge-pill\">{{companyList.length}}</span>\n        </h4>\n\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let company of companyList\">\n          <li class=\"list-group-item\">\n            <div>\n              <h5>{{company.companyName}} <span class=\"badge badge-success float-right ml-1\" (click)=\"createLetter(company)\">Neu</span></h5>\n\n\n            </div>\n            <div class=\"clear\" style=\"clear: both;\"></div>\n            <div *ngFor=\"let letter of company.letter\">\n              {{letter.name}}\n              <span class=\"badge badge-danger float-right ml-1\" (click)=\"editCompany(company, letter)\">Edit</span>\n              <span *ngIf='letter.printed === undefined' class=\"badge badge-secondary float-right\" (click)=\"printPdf(company, letter)\">PDF</span>\n              <span *ngIf='letter.printed !== undefined' class=\"badge badge-success float-right\" (click)=\"printPdf(company, letter)\">PDF</span>\n            </div>\n          </li>\n        </ul>\n\n        <!--<form class=\"p-2 mb-3\">-->\n          <!--<button type=\"submit\" class=\"btn btn-primary\">Drucken</button>-->\n        <!--</form>-->\n      </ng-container>\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3 mt-2\">\n        Absender\n      </h4>\n      <textarea rows=\"6\" (change)=\"saveSender()\" [(ngModel)]=\"sender\" class=\"form-control\"></textarea>\n      <!--<h4 class=\"d-flex justify-content-between align-items-center mb-3\">-->\n        <!--<span class=\"text-muted\">Archiv</span>-->\n        <!--<span class=\"badge badge-secondary badge-pill\">{{companyList.length}}</span>-->\n      <!--</h4>-->\n\n      <!--<ul class=\"list-group\">-->\n        <!--<li class=\"list-group-item\" *ngFor=\"let company of companyList\"><h5>{{company.companyName}}</h5></li>-->\n      <!--</ul>-->\n\n    </div>\n\n    <!-- Details -->\n    <main role=\"main\" class=\"col-md-8 order-md-1\">\n      <h4 class=\"mb-3\">Firma</h4>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"mb-3\">\n          <label for=\"companyName\">Firmenname</label>\n          <input [(ngModel)]=\"currentCompany.companyName\" name=\"companyName\" type=\"text\" class=\"form-control\" id=\"companyName\" placeholder=\"\" value=\"\" required>\n          <div class=\"invalid-feedback\">\n            Firmenname muss angegeben werden\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"companyAddress\">Straße / Postfach</label>\n          <input [(ngModel)]=\"currentCompany.companyAddress\" name=\"companyAddress\"  type=\"text\" class=\"form-control\" id=\"companyAddress\" placeholder=\"\" value=\"\" required>\n          <div class=\"invalid-feedback\">\n            Anchrift erforderlich\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"companyZip\">PLZ</label>\n            <input [(ngModel)]=\"currentCompany.companyZip\" name=\"companyZip\"  type=\"text\" class=\"form-control\" id=\"companyZip\" placeholder=\"\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              PLZ erforderlich\n            </div>\n          </div>\n          <div class=\"col-md-9 mb-3\">\n            <label for=\"companyCity\">Ort</label>\n            <input [(ngModel)]=\"currentCompany.companyCity\" name=\"companyCity\"  type=\"text\" class=\"form-control\" id=\"companyCity\" placeholder=\"\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              Ort erforderlich\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"companyCountry\">Land (nur bei Ausland)</label>\n          <input [(ngModel)]=\"currentCompany.companyCountry\" name=\"companyCountry\"  type=\"text\" class=\"form-control\" id=\"companyCountry\" placeholder=\"\" value=\"\">\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"contractNumber\">Vertragsnummer, Geschäftszeichen, Kennzeichen (Optional)</label>\n          <input [(ngModel)]=\"currentCompany.contractNumber\" name=\"contractNumber\"  type=\"text\" class=\"form-control\" id=\"contractNumber\" placeholder=\"Telefonnummer, Vertragsnummer, Aktenzeichen, etc.\" value=\"\">\n\n        </div>\n\n\n        <div class=\"mb-3\">\n          <label for=\"remarks\">Weitere Bemerkungen (optional)</label>\n          <textarea [(ngModel)]=\"currentCompany.remarks\" name=\"remarks\"  class=\"form-control\" id=\"remarks\" placeholder=\"z. B. bezug auf ein vorheriges Schreiben, präzisierung des Auskunftsersuchens\"></textarea>\n\n        </div>\n\n        <hr class=\"mb-4\">\n        <h4 class=\"mb-3\">{{letter.titleText}}</h4>\n\n        <div class=\"float-right\">{{getDate()}}</div>\n        <p *ngIf=\"currentCompany.contractNumber\">Betreff: {{currentCompany.contractNumber}}</p>\n\n\n        <div class=\"custom-control custom-checkbox\" *ngFor=\"let textblock of letter.textblocks\">\n          <input [(ngModel)]=\"textblock.selected\" name=\"{{textblock.name}}\" type=\"checkbox\" class=\"custom-control-input\" id=\"{{textblock.name}}\">\n          <label class=\"custom-control-label\" for=\"{{textblock.name}}\">{{textblock.content}}</label>\n        </div>\n\n        <hr class=\"mb-4\">\n\n        <button (click)=\"saveCompany()\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Eintrag speichern</button>\n      </form>\n    </main>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);


/***/ })

},[634]);
//# sourceMappingURL=main.bundle.map