webpackJsonp([1,4],{201:function(e,n,t){"use strict";var r=t(0);t.d(n,"a",function(){return o});var i=this&&this.__decorate||function(e,n,t,r){var i,a=arguments.length,s=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},s=t(613),o=function(){function e(){}return e.prototype.createPdf=function(e,n,t,r){void 0===r&&(r=null);var i=new s({orientation:"portrait",unit:"mm"});i.setFontSize(14),i.text(n.titleText,20,100),i.setFontSize(12),i.text(this.getDate(),170,110),i.text(i.splitTextToSize(t,40),140,20),i.setLineWidth(180),i.setFontSize(12);var a=e.companyName+"\n"+(e.companyAddress?e.companyAddress:"")+"\n"+(e.companyZip?e.companyZip+" ":"")+(e.companyCity?e.companyCity:"")+"\n"+(e.companyCountry?e.companyCountry:"");i.text(a,20,60),r||(r=n.rawText?n.rawText:this.generateText(e,n,t));for(var o=i.splitTextToSize(r,170),c=120,l=0,d=o;l<d.length;l++){var u=d[l];i.text(u,20,c),c+=5,c>270&&(i.addPage(),c=20)}var m=e.companyName.replace(/[^A-Za-z0-9]/,"_");i.save(m+".pdf")},e.prototype.generateText=function(e,n,t){var r=this.getFirstLine(t),i="";e.contractNumber&&(i+="Betreff: "+e.contractNumber+"\n\n"),i+=n.introText;for(var a=0,s=n.textblocks;a<s.length;a++){var o=s[a];!0===o.selected&&(i+=" - "+o.content+"\n")}return",\n"===i.substr(i.length-2)&&(i=i.substr(0,i.length-2)+".\n"),e.remarks&&(i+="\n\n"+e.remarks+"\n"),i+=n.endClause+"\n\n\n",i+=r},e.prototype.getFirstLine=function(e){return e.split("\n")[0]},e.prototype.getDate=function(){var e=new Date,n=e.getDate().toString(),t=(e.getMonth()+1).toString(),r=e.getFullYear();return parseInt(n,10)<10&&(n="0"+n),parseInt(t,10)<10&&(t="0"+t),n+"."+t+"."+r},e=i([t.i(r.c)(),a("design:paramtypes",[])],e)}()},303:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(){function e(){this.letter=[]}return e}()},346:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=346},347:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(436),i=t(0),a=t(459),s=t(457);a.a.production&&t.i(i.a)(),t.i(r.a)().bootstrapModule(s.a)},456:function(e,n,t){"use strict";var r=t(0),i=t(303),a=t(201),s=t(461);t.d(n,"a",function(){return l});var o=this&&this.__decorate||function(e,n,t,r){var i,a=arguments.length,s=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s},c=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e){this.letterService=e,this.sender="",this.templateName="",this.templateNames=[],this.companyList=[],this.currentCompany=new i.a;var n=window.localStorage.getItem("companyList");null!==n&&(this.companyList=JSON.parse(n));var t=window.localStorage.getItem("sender");null!==t&&(this.sender=t);for(var r=new s.a,a=0,o=r.Templates;a<o.length;a++){var c=o[a];this.templateNames.push(c.name)}this.letter=r.Templates[0],this.templateName=this.letter.name,console.log(this.letter)}return e.prototype.changeTemplate=function(){this.letter=this.getTemplate(this.templateName)},e.prototype.getTemplate=function(e){for(var n=new s.a,t=0,r=n.Templates;t<r.length;t++){var i=r[t];if(i.name===e)return i}return null},e.prototype.getDate=function(){return this.letterService.getDate()},e.prototype.saveCompany=function(){for(var e=null,n=0,t=this.companyList;n<t.length;n++){var r=t[n];r.companyName===this.currentCompany.companyName&&(e=r)}if(null!==e)e.letter.push(JSON.parse(JSON.stringify(this.letter)));else{var a=JSON.parse(JSON.stringify(this.currentCompany));a.letter.push(this.letter),this.companyList.push(JSON.parse(JSON.stringify(a)))}this.saveCompanyList(),this.currentCompany=new i.a;for(var s=0,o=this.letter.textblocks;s<o.length;s++){o[s].selected=!0}},e.prototype.saveSender=function(){window.localStorage.setItem("sender",this.sender)},e.prototype.printPdf=function(e,n){this.letterService.createPdf(e,n,this.sender),n.printed=this.getDate(),this.saveCompanyList()},e.prototype.saveCompanyList=function(){window.localStorage.setItem("companyList",JSON.stringify(this.companyList))},e.prototype.createLetter=function(e){this.currentCompany=e,this.letter=(new s.a).Templates[0],this.templateName=this.letter.name},e.prototype.editCompany=function(e,n){for(var t=[],r=0,i=e.letter;r<i.length;r++){var a=i[r];a!==n&&t.push(a)}if(e.letter=t,this.currentCompany=e,this.letter=n,0===e.letter.length){for(var s=[],o=0,c=this.companyList;o<c.length;o++){var l=c[o];l.companyName!==e.companyName&&s.push(l)}this.companyList=s,this.saveCompanyList()}},e=o([t.i(r.U)({selector:"app-root",template:t(616),styles:[t(614)]}),c("design:paramtypes",["function"==typeof(n=void 0!==a.a&&a.a)&&n||Object])],e);var n}()},457:function(e,n,t){"use strict";var r=t(193),i=t(0),a=t(426),s=t(432),o=t(201),c=t(456),l=t(458);t.d(n,"a",function(){return m});var d=this&&this.__decorate||function(e,n,t,r){var i,a=arguments.length,s=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s},u=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},m=function(){function e(){}return e=d([t.i(i.b)({declarations:[c.a,l.a],imports:[r.a,a.a,s.a],providers:[o.a],bootstrap:[c.a]}),u("design:paramtypes",[])],e)}()},458:function(e,n,t){"use strict";var r=t(0),i=t(460),a=t(201),s=t(303);t.d(n,"a",function(){return l});var o=this&&this.__decorate||function(e,n,t,r){var i,a=arguments.length,s=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s},c=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e){this.letterService=e,this.sender="",this.templateName="",this.templateNames=[],this.companyList=[],this.currentCompany=new s.a}return e.prototype.ngOnInit=function(){},e.prototype.saveCompany=function(){for(var e=null,n=0,t=this.companyList;n<t.length;n++){var r=t[n];r.companyName===this.currentCompany.companyName&&(e=r)}if(null!==e)e.letter.push(JSON.parse(JSON.stringify(this.letter)));else{var i=JSON.parse(JSON.stringify(this.currentCompany));i.letter.push(this.letter),this.companyList.push(JSON.parse(JSON.stringify(i)))}this.saveCompanyList(),this.currentCompany=new s.a;for(var a=0,o=this.letter.textblocks;a<o.length;a++){o[a].selected=!0}this.letter.rawText=""},e.prototype.editText=function(){var e=this.letterService.generateText(this.currentCompany,this.letter,this.sender);this.letter.rawText=e},e.prototype.saveCompanyList=function(){window.localStorage.setItem("companyList",JSON.stringify(this.companyList))},e.prototype.getDate=function(){return this.letterService.getDate()},o([t.i(r.w)(),c("design:type",Object)],e.prototype,"sender",void 0),o([t.i(r.w)(),c("design:type",Object)],e.prototype,"templateName",void 0),o([t.i(r.w)(),c("design:type",Array)],e.prototype,"templateNames",void 0),o([t.i(r.w)(),c("design:type","function"==typeof(n=void 0!==i.a&&i.a)&&n||Object)],e.prototype,"letter",void 0),o([t.i(r.w)(),c("design:type",Array)],e.prototype,"companyList",void 0),o([t.i(r.w)(),c("design:type","function"==typeof(l=void 0!==s.a&&s.a)&&l||Object)],e.prototype,"currentCompany",void 0),e=o([t.i(r.U)({selector:"app-form",template:t(617),styles:[t(615)]}),c("design:paramtypes",["function"==typeof(d=void 0!==a.a&&a.a)&&d||Object])],e);var n,l,d}()},459:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={production:!0}},460:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(){function e(){this.rawText=""}return e}()},461:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(){function e(){this.Templates=[{name:"DSGVO-Auskunft",titleText:"Datenschutzrechliche Selbstauskunft gemäß DSGVO",introText:"Sehr geehrte Damen und Herren,\n\nhiermit mache ich mein Recht aus Art. 15 Abs. 1 DSGVO geltend. Hierfür bitte ich um Bestätigung, ob mich betreffende personenbezogene Daten von Ihnen verarbeitet werden. (vgl. Art. 4 Nr. 1 und 2 DSGVO). Sofern dies der Fall ist, beantrage ich weiterhin die Erteilung einer Auskunft.\n\nBitte stellen Sie sicher, dass die Auskunft insbesondere folgende Informationen enthält:\n",endClause:"\nSollten Sie meine personenbezogenen Daten an ein Drittland oder an eine internationale Organisation übermittelt haben, bitte ich um Unterrichtung über geeignete Garantien i. S. d. Art. 46 DSGVO im Zusammenhang mit der Übermittlung.\nEbenfalls eingeschlossen von meiner Anfrage ist der Antrag auf Erhalt einer vollständigen Kopie meiner Daten, die Gegenstand der Verarbeitung sind (vgl. Art. 15 Abs. 1 S. 1 DSGVO). \nIch bitte Sie, mir die betreffenden personenbezogenen Daten, die ich Ihnen zur Verfügung gestellt habe, im Sinne des Art. 20 Abs. 1 DSGVO in einem strukturierten, gängigen und maschinenlesbaren Format zu übermitteln.\nDie Auskunft ist nach Art. 12 Abs. 3 DSGVO unverzüglich, in jedem Fall aber innerhalb eines Monats nach Eingang der Anfrage zu erteilen. Sie hat nach Art. 15 Abs. 3 DSGVO kostenlos zu erfolgen. \nSollten Sie meiner Anfrage nicht innerhalb der genannten Frist nachkommen, behalte ich mir vor rechtliche Schritte gegen Sie einzuleiten und Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen (vgl. Art. 77 Abs. 1 DSGVO).\n\n\n\nMit freundlichen Grüßen,",textblocks:[{name:"text1",content:"vollständige Auskunft über personenbezogene Daten, die verarbeitet und gespeichert werden",selected:!0},{name:"text2",content:"der Zweck der Verarbeitung der Daten (lit. a)",selected:!0},{name:"text3",content:"die Kategorien personenbezogener Daten, die verarbeitet werden (lit. b)",selected:!0},{name:"text4",content:"die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden (lit. c)",selected:!0},{name:"text5",content:"die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer (lit. d)",selected:!0},{name:"text6",content:"wenn die personenbezogenen Daten nicht bei mir erhoben wurden, alle verfügbaren Informationen über die Herkunft der Daten (lit. g)",selected:!0},{name:"text7",content:"falls zutreffend, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und - sofern gegeben - aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung meine Person. (lit. h)",selected:!0}]},{name:"DSGVO-Beanstandung",titleText:"Beanstandung Ihrer Antwort auf das DSGVO-Auskunftsersuchen",introText:"Sehr geehrte Damen und Herren,\n\nIhre Antwort auf meine Anfrage war fehlerhaft. Bitte korrigieren Sie Ihre Angaben umgehend,Ansonsten sehe ich mich gezwungen Sie der zuständigen Aufsichtsbehörde zu melden sowie dieAnsprüche gerichtlich durchzusetzen.\n\nFehlerhaft oder unvollständig waren insbesondere folgende Angaben:\n",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[{name:"return1",content:"Es fehlten Konto- bzw. Abrechnungsdaten.",selected:!0},{name:"return2",content:"Es fehlten Daten über mein Kaufverhalten.",selected:!0},{name:"return3",content:"Es fehlten Nutzungsprotokolle.",selected:!0},{name:"return4",content:"Es fehlten Zutrittsprotokolle.",selected:!0},{name:"return5",content:"Es fehlten Standortdaten und -verläufe.",selected:!0},{name:"return6",content:"Es fehlten Datenbankeinträge.",selected:!0},{name:"return7",content:"Es fehlten technische Daten.",selected:!0},{name:"return8",content:"Es fehlten interne Notizen und Aufzeichnungen.",selected:!0}]},{name:"Unber. Anfrage Ausweiskopie",titleText:"Unberechtigt angeforderte Ausweiskopie",introText:"Sehr geehrte Damen und Herren,\n\nkürzlich haben Sie weitere Informationen zur eindeutigen Identifikation meiner Person angefragt. Ihnen liegen bereits Informationen zu meiner Identität vor. Daher fordere ich Sie auf, unverzüglich das von mir beantragte Auskunftsersuchen, sowie dem ggf. gestellten Antrag auf Herausgabe einer Datenkopie nachzukommen. Sollte dies aufgrund der vorhandenen Informationen zu meiner Person nicht möglich sein, bitte ich um weitergehende Begründung, weshalb die von Ihnen angefragten Identifikationsmittel für eine Bearbeitung meiner Anfrage notwendig sind (vgl. ErwGr 64 DSGVO). Sollten Sie Ihre Einschätzung auf Grundlage einer Risikoprognose treffen, bitte ich weiterhin um Erläuterung der verwendeten Kriterien für eine Risikoeinschätzung.",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[]},{name:"Verweis auf Kundenportal",titleText:"Verweis auf Entnahmemöglichkeit aus dem Kundenportal",introText:"Sehr geehrte Damen und Herren,\n\nhiermit nehme ich Bezug auf Ihren Verweis auf die Verfügbarkeit der Daten im Kundenportal. Ich möchte Sie freundlich darauf hinweisen, dass dies gegen die Anforderungen, die Art. 15 Abs. 1 DSGVO an die Beantwortung eines Auskunftsersuchens gegen Art. 12 Abs. 2 S. 1 DSGVO verstößt. Hiernach ist dem Betroffenen die Wahrnehmung seiner Rechte zu erleichtern. Durch die Notwendigkeit des eigenhändigen Zusammenstellens der gewünschten Informationen ist dies vorliegend nicht gewährleistet. Daher bitte ich Sie erneut, umgehend dem von mir beantragten Auskunftsersuchen in datenschutzkonformer Weise nachzukommen.",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[]},{name:"Antrag auf Löschung",titleText:"Löschung personenbezogener Daten nach Art. 17 DSGVO",introText:"Sehr geehrte Damen und Herren,\n\nhiermit mache ich mein Recht auf Löschung gem. Art. 17 Abs. 1 DSGVO geltend. Ich fordere Sie herimit auf, sämtliche bei Ihnen über mich gespeicherten personenbezogenen Daten unverzüglich und vollumfassend zu löschen.\n\n\nGründe für die Löschung:\n\n",endClause:"\nFalls eine wirksame Einwilligung erteilt wurde, erfolgt hiermit hilfsweise deren Widerruf. Gleichzeitig widerspreche ich der Datenverarbeitung nach Art. 21 DSGVO.\nSollten Sie i. S. v. Art. 17 Abs. 2 DSGVO meine personenbezogenen Daten anderen offengelegt haben, verlange ich, dass Sie die Empfänger über die Wahrnehmung meiner Rechte auf Löschung aller Links zu den genannten personenbezogenen Daten umfassend unterrichten.\nMit freundlichen Grüßen,",textblocks:[{name:"text1",content:"Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.",selected:!0},{name:"text2",content:"Ich widerrufe meine Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a) oder Art. 9 Abs. 2 lit. a) DSGVO bezieht. Eine anderweitige Rechtsgrundlage für die Verarbeitung besteht nicht.",selected:!0},{name:"text3",content:"Ich habe bereits gem. Art. 21 Abs. 1 DSGVO aus persönlichen Gründen Widerspruch gegen die Verarbeitung erhoben und es liegen keine vorrangigen berechtigten Gründe für eine Verarbeitung vor oder ich habe gem. Art. 21 Abs. 2 DSGVO infolge von Direktwerbung Widerspruch erhoben.",selected:!0},{name:"text4",content:"Es wurde keine wirksame Einwilligung in die Verarbeitung der Daten erteilt oder die Einwilligung wurde wirksam widerrufen. Daher war die Verarbeitung der Daten rechtswidrig.",selected:!0},{name:"text5",content:"Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht) oder dem Recht der Mitgliedstaaten erforderlich, dem Sie als Verantwortlicher unterliegen.",selected:!0},{name:"text6",content:"Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben. Zu diesem Zeitpunkt war ich noch nicht 16 Jahre alt.",selected:!0}]},{name:"Antrag auf Einschränkung",titleText:"Einschränkung der Verarbeitung nach Art. 18 DSGVO",introText:"Sehr geehrte Damen und Herren,\n\nhiermit mache ich mein Recht auf Einschränkung der Verarbeitung gem. Art. 18 Abs. 1 DSGVO geltend. Die betroffenen Daten dürfen daher fortan gem. Art. 18 Abs. 2 DSGVO  lediglich mit meiner Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen bzw. juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.\n\nGründe für die Einschränkung der Verarbeitung:\n\n",endClause:"\nSollten Sie die Einschränkung der Verarbeitung aufheben, bin ich zuvor gem. Art. 18 Abs. 3 DSGVO hierüber in Kenntnis zu setzen.\n\n\nMit freundlichen Grüßen,",textblocks:[{name:"text1",content:"Ich bestreite die Richtigkeit der personenbezogenen Daten für die Dauer, die es Ihnen ermöglicht, deren Richtigkeit zu überprüfen\nDies bezieht sich auf folgende Daten: […]",selected:!0},{name:"text2",content:"Ich halte die Verarbeitung für unrechtmäßig und Sie haben die Löschung der personenbezogenen Daten abgelehnt und stattdessen die Einschränkung der Verarbeitung verlangt",selected:!0},{name:"text3",content:"Sie benötigen die personenbezogenen Daten für Verarbeitungszwecke nicht länger, ich benötige die Daten allerdings zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen",selected:!0},{name:"text4",content:"Ich habe bereits gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung eingelegt, es steht jedoch noch nicht fest, ob berechtigte Gründe vorliegen, die die Interessen meiner Person überwiegen",selected:!0}]}]}return e}()},614:function(e,n){e.exports=""},615:function(e,n){e.exports=""},616:function(e,n){e.exports='<nav class="navbar navbar-dark bg-dark flex-md-nowrap shadow">\n  <span class="navbar-brand col-sm-3 col-md-2 mr-0">DSGVO-Generator</span>\n  <ul class="navbar-nav px-3">\n    <li class="nav-item text-nowrap">\n      <a class="nav-link" href="https://github.com/adiehl/hdgdldsgvo/blob/master/INFO.md" target="_blank">\n        Datenschutzerklärung, Rechtliche Hinweise und Infos</a>\n    </li>\n  </ul>\n</nav>\n<div class="container mt-3">\n\n  <div class="row">\n    \x3c!-- Firmenliste --\x3e\n\n    <div class="col-md-4 order-md-2 mb-4 sidebar bg-light d-md-block d-none">\n      <h4 class="d-flex justify-content-between align-items-center mb-3">\n        Vorlage\n      </h4>\n      <select class="form-control mb-3" [(ngModel)]="templateName" (change)="changeTemplate()">\n        <option *ngFor="let templateName of templateNames" value="{{templateName}}">{{templateName}}</option>\n      </select>\n      <ng-container *ngIf="companyList.length">\n        <h4 class="d-flex justify-content-between align-items-center mb-3">\n          Firmenliste\n          <span class="badge badge-success badge-pill">{{companyList.length}}</span>\n        </h4>\n\n        <ul class="list-group list-group-flush" *ngFor="let company of companyList">\n          <li class="list-group-item">\n            <div>\n              <h5>{{company.companyName}} <span class="badge badge-success float-right ml-1" (click)="createLetter(company)">Neu</span></h5>\n\n\n            </div>\n            <div class="clear" style="clear: both;"></div>\n            <div *ngFor="let letter of company.letter">\n              {{letter.name}}\n              <span class="badge badge-danger float-right ml-1" (click)="editCompany(company, letter)">Edit</span>\n              <span *ngIf=\'letter.printed === undefined\' class="badge badge-secondary float-right" (click)="printPdf(company, letter)">PDF</span>\n              <span *ngIf=\'letter.printed !== undefined\' class="badge badge-success float-right" (click)="printPdf(company, letter)">PDF</span>\n            </div>\n          </li>\n        </ul>\n\n        \x3c!--<form class="p-2 mb-3">--\x3e\n          \x3c!--<button type="submit" class="btn btn-primary">Drucken</button>--\x3e\n        \x3c!--</form>--\x3e\n      </ng-container>\n      <h4 class="d-flex justify-content-between align-items-center mb-3 mt-2">\n        Absender\n      </h4>\n      <textarea rows="6" (change)="saveSender()" [(ngModel)]="sender" class="form-control"></textarea>\n      \x3c!--<h4 class="d-flex justify-content-between align-items-center mb-3">--\x3e\n        \x3c!--<span class="text-muted">Archiv</span>--\x3e\n        \x3c!--<span class="badge badge-secondary badge-pill">{{companyList.length}}</span>--\x3e\n      \x3c!--</h4>--\x3e\n\n      \x3c!--<ul class="list-group">--\x3e\n        \x3c!--<li class="list-group-item" *ngFor="let company of companyList"><h5>{{company.companyName}}</h5></li>--\x3e\n      \x3c!--</ul>--\x3e\n\n    </div>\n\n    \x3c!-- Details --\x3e\n    <main role="main" class="col-md-8 order-md-1">\n      <app-form [(sender)]="sender" [(templateName)]="templateName" [(templateNames)]="templateNames" [(letter)]="letter" [(companyList)]="companyList" [(currentCompany)]="currentCompany"></app-form>\n    </main>\n  </div>\n\n\n</div>\n'},617:function(e,n){e.exports='  <h4 class="mb-3">Firma</h4>\n  <form class="needs-validation" novalidate>\n    <div class="mb-3">\n      <label for="companyName">Firmenname</label>\n      <input [(ngModel)]="currentCompany.companyName" name="companyName" type="text" class="form-control" id="companyName" placeholder="" value="" required>\n      <div class="invalid-feedback">\n        Firmenname muss angegeben werden\n      </div>\n    </div>\n\n    <div class="mb-3">\n      <label for="companyAddress">Straße / Postfach</label>\n      <input [(ngModel)]="currentCompany.companyAddress" name="companyAddress"  type="text" class="form-control" id="companyAddress" placeholder="" value="" required>\n      <div class="invalid-feedback">\n        Anchrift erforderlich\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-3 mb-3">\n        <label for="companyZip">PLZ</label>\n        <input [(ngModel)]="currentCompany.companyZip" name="companyZip"  type="text" class="form-control" id="companyZip" placeholder="" value="" required>\n        <div class="invalid-feedback">\n          PLZ erforderlich\n        </div>\n      </div>\n      <div class="col-md-9 mb-3">\n        <label for="companyCity">Ort</label>\n        <input [(ngModel)]="currentCompany.companyCity" name="companyCity"  type="text" class="form-control" id="companyCity" placeholder="" value="" required>\n        <div class="invalid-feedback">\n          Ort erforderlich\n        </div>\n      </div>\n    </div>\n\n    <div class="mb-3">\n      <label for="companyCountry">Land (nur bei Ausland)</label>\n      <input [(ngModel)]="currentCompany.companyCountry" name="companyCountry"  type="text" class="form-control" id="companyCountry" placeholder="" value="">\n    </div>\n    <div class="mb-3">\n      <label for="contractNumber">Vertragsnummer, Geschäftszeichen, Kennzeichen (Optional)</label>\n      <input [(ngModel)]="currentCompany.contractNumber" name="contractNumber"  type="text" class="form-control" id="contractNumber" placeholder="Telefonnummer, Vertragsnummer, Aktenzeichen, etc." value="">\n\n    </div>\n\n\n    <div class="mb-3">\n      <label for="remarks">Weitere Bemerkungen (optional)</label>\n      <textarea [(ngModel)]="currentCompany.remarks" name="remarks"  class="form-control" id="remarks" placeholder="z. B. bezug auf ein vorheriges Schreiben, präzisierung des Auskunftsersuchens"></textarea>\n\n    </div>\n\n    <hr class="mb-4">\n    <h4 class="mb-3">{{letter.titleText}}</h4>\n    <span [hidden]="letter.rawText">\n      <div class="float-right">{{getDate()}}</div><br />\n      <p *ngIf="currentCompany.contractNumber">Betreff: {{currentCompany.contractNumber}}</p>\n\n      <p>{{letter.introText}}</p>\n\n      <div class="custom-control custom-checkbox" *ngFor="let textblock of letter.textblocks">\n        <input [(ngModel)]="textblock.selected" name="{{textblock.name}}" type="checkbox" class="custom-control-input" id="{{textblock.name}}">\n        <label class="custom-control-label" for="{{textblock.name}}">{{textblock.content}}</label>\n      </div>\n\n      <p>{{letter.endClause}}</p>\n    </span>\n    <span [hidden]="!letter.rawText">\n      <textarea [(ngModel)]="letter.rawText" name="rawText"  class="form-control" id="rawText" style="height: 25em;"></textarea>\n    </span>\n\n    <hr class="mb-4">\n    <div class="container">\n      <div class="row">\n        <div class="col-sm"><button (click)="saveCompany()" class="btn btn-primary btn-lg btn-block" type="submit">Eintrag speichern</button></div>\n        <div class="col-sm"><button (click)="editText()" class="btn btn-secondary btn-lg btn-block" type="submit">Text bearbeiten</button></div>\n      </div>\n    </div>\n\n  </form>\n'},634:function(e,n,t){e.exports=t(347)}},[634]);