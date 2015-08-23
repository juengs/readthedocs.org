require=function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){(function(){var e,t,n,r,o,a,i,u,l,c,s,p,h,v,d,f,m,g,y,_,b,C=[].slice,w=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};$.payment={},$.payment.fn={},$.fn.payment=function(){var e,t;return t=arguments[0],e=2<=arguments.length?C.call(arguments,1):[],$.payment.fn[t].apply(this,e)},r=/(\d{1,4})/g,$.payment.cards=n=[{type:"visaelectron",pattern:/^4(026|17500|405|508|844|91[37])/,format:r,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",pattern:/^(5(018|0[23]|[68])|6(39|7))/,format:r,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",pattern:/^600/,format:r,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",pattern:/^5019/,format:r,length:[16],cvcLength:[3],luhn:!0},{type:"visa",pattern:/^4/,format:r,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",pattern:/^(5[0-5]|2[2-7])/,format:r,length:[16],cvcLength:[3],luhn:!0},{type:"amex",pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",pattern:/^3[0689]/,format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",pattern:/^6([045]|22)/,format:r,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",pattern:/^(62|88)/,format:r,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",pattern:/^35/,format:r,length:[16],cvcLength:[3],luhn:!0}],e=function(e){var t,r,o;for(e=(e+"").replace(/\D/g,""),r=0,o=n.length;o>r;r++)if(t=n[r],t.pattern.test(e))return t},t=function(e){var t,r,o;for(r=0,o=n.length;o>r;r++)if(t=n[r],t.type===e)return t},p=function(e){var t,n,r,o,a,i;for(r=!0,o=0,n=(e+"").split("").reverse(),a=0,i=n.length;i>a;a++)t=n[a],t=parseInt(t,10),(r=!r)&&(t*=2),t>9&&(t-=9),o+=t;return o%10===0},s=function(e){var t;return null!=e.prop("selectionStart")&&e.prop("selectionStart")!==e.prop("selectionEnd")?!0:null!=("undefined"!=typeof document&&null!==document&&null!=(t=document.selection)?t.createRange:void 0)&&document.selection.createRange().text?!0:!1},f=function(e){return setTimeout(function(){var t,n;return t=$(e.currentTarget),n=t.val(),n=n.replace(/\D/g,""),t.val(n)})},v=function(e){return setTimeout(function(){var t,n;return t=$(e.currentTarget),n=t.val(),n=$.payment.formatCardNumber(n),t.val(n)})},i=function(t){var n,r,o,a,i,u,l;return o=String.fromCharCode(t.which),!/^\d+$/.test(o)||(n=$(t.currentTarget),l=n.val(),r=e(l+o),a=(l.replace(/\D/g,"")+o).length,u=16,r&&(u=r.length[r.length.length-1]),a>=u||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==l.length)?void 0:(i=r&&"amex"===r.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,i.test(l)?(t.preventDefault(),setTimeout(function(){return n.val(l+" "+o)})):i.test(l+o)?(t.preventDefault(),setTimeout(function(){return n.val(l+o+" ")})):void 0)},o=function(e){var t,n;return t=$(e.currentTarget),n=t.val(),8!==e.which||null!=t.prop("selectionStart")&&t.prop("selectionStart")!==n.length?void 0:/\d\s$/.test(n)?(e.preventDefault(),setTimeout(function(){return t.val(n.replace(/\d\s$/,""))})):/\s\d?$/.test(n)?(e.preventDefault(),setTimeout(function(){return t.val(n.replace(/\d$/,""))})):void 0},d=function(e){return setTimeout(function(){var t,n;return t=$(e.currentTarget),n=t.val(),n=$.payment.formatExpiry(n),t.val(n)})},u=function(e){var t,n,r;return n=String.fromCharCode(e.which),/^\d+$/.test(n)?(t=$(e.currentTarget),r=t.val()+n,/^\d$/.test(r)&&"0"!==r&&"1"!==r?(e.preventDefault(),setTimeout(function(){return t.val("0"+r+" / ")})):/^\d\d$/.test(r)?(e.preventDefault(),setTimeout(function(){return t.val(""+r+" / ")})):void 0):void 0},l=function(e){var t,n,r;return n=String.fromCharCode(e.which),/^\d+$/.test(n)?(t=$(e.currentTarget),r=t.val(),/^\d\d$/.test(r)?t.val(""+r+" / "):void 0):void 0},c=function(e){var t,n,r;return r=String.fromCharCode(e.which),"/"===r||" "===r?(t=$(e.currentTarget),n=t.val(),/^\d$/.test(n)&&"0"!==n?t.val("0"+n+" / "):void 0):void 0},a=function(e){var t,n;return t=$(e.currentTarget),n=t.val(),8!==e.which||null!=t.prop("selectionStart")&&t.prop("selectionStart")!==n.length?void 0:/\d\s\/\s$/.test(n)?(e.preventDefault(),setTimeout(function(){return t.val(n.replace(/\d\s\/\s$/,""))})):void 0},h=function(e){return setTimeout(function(){var t,n;return t=$(e.currentTarget),n=t.val(),n=n.replace(/\D/g,"").slice(0,4),t.val(n)})},_=function(e){var t;return e.metaKey||e.ctrlKey?!0:32===e.which?!1:0===e.which?!0:e.which<33?!0:(t=String.fromCharCode(e.which),!!/[\d\s]/.test(t))},g=function(t){var n,r,o,a;return n=$(t.currentTarget),o=String.fromCharCode(t.which),/^\d+$/.test(o)&&!s(n)?(a=(n.val()+o).replace(/\D/g,""),r=e(a),r?a.length<=r.length[r.length.length-1]:a.length<=16):void 0},y=function(e){var t,n,r;return t=$(e.currentTarget),n=String.fromCharCode(e.which),/^\d+$/.test(n)&&!s(t)?(r=t.val()+n,r=r.replace(/\D/g,""),r.length>6?!1:void 0):void 0},m=function(e){var t,n,r;return t=$(e.currentTarget),n=String.fromCharCode(e.which),/^\d+$/.test(n)&&!s(t)?(r=t.val()+n,r.length<=4):void 0},b=function(e){var t,r,o,a,i;return t=$(e.currentTarget),i=t.val(),a=$.payment.cardType(i)||"unknown",t.hasClass(a)?void 0:(r=function(){var e,t,r;for(r=[],e=0,t=n.length;t>e;e++)o=n[e],r.push(o.type);return r}(),t.removeClass("unknown"),t.removeClass(r.join(" ")),t.addClass(a),t.toggleClass("identified","unknown"!==a),t.trigger("payment.cardType",a))},$.payment.fn.formatCardCVC=function(){return this.on("keypress",_),this.on("keypress",m),this.on("paste",h),this.on("change",h),this.on("input",h),this},$.payment.fn.formatCardExpiry=function(){return this.on("keypress",_),this.on("keypress",y),this.on("keypress",u),this.on("keypress",c),this.on("keypress",l),this.on("keydown",a),this.on("change",d),this.on("input",d),this},$.payment.fn.formatCardNumber=function(){return this.on("keypress",_),this.on("keypress",g),this.on("keypress",i),this.on("keydown",o),this.on("keyup",b),this.on("paste",v),this.on("change",v),this.on("input",v),this.on("input",b),this},$.payment.fn.restrictNumeric=function(){return this.on("keypress",_),this.on("paste",f),this.on("change",f),this.on("input",f),this},$.payment.fn.cardExpiryVal=function(){return $.payment.cardExpiryVal($(this).val())},$.payment.cardExpiryVal=function(e){var t,n,r,o;return e=e.replace(/\s/g,""),o=e.split("/",2),t=o[0],r=o[1],2===(null!=r?r.length:void 0)&&/^\d+$/.test(r)&&(n=(new Date).getFullYear(),n=n.toString().slice(0,2),r=n+r),t=parseInt(t,10),r=parseInt(r,10),{month:t,year:r}},$.payment.validateCardNumber=function(t){var n,r;return t=(t+"").replace(/\s+|-/g,""),/^\d+$/.test(t)?(n=e(t),n?(r=t.length,w.call(n.length,r)>=0&&(n.luhn===!1||p(t))):!1):!1},$.payment.validateCardExpiry=function(e,t){var n,r,o;return"object"==typeof e&&"month"in e&&(o=e,e=o.month,t=o.year),e&&t?(e=$.trim(e),t=$.trim(t),/^\d+$/.test(e)&&/^\d+$/.test(t)&&e>=1&&12>=e?(2===t.length&&(t=70>t?"20"+t:"19"+t),4!==t.length?!1:(r=new Date(t,e),n=new Date,r.setMonth(r.getMonth()-1),r.setMonth(r.getMonth()+1,1),r>n)):!1):!1},$.payment.validateCardCVC=function(e,n){var r,o;return e=$.trim(e),/^\d+$/.test(e)?(r=t(n),null!=r?(o=e.length,w.call(r.cvcLength,o)>=0):e.length>=3&&e.length<=4):!1},$.payment.cardType=function(t){var n;return t?(null!=(n=e(t))?n.type:void 0)||null:null},$.payment.formatCardNumber=function(t){var n,r,o,a;return t=t.replace(/\D/g,""),(n=e(t))?(o=n.length[n.length.length-1],t=t.slice(0,o),n.format.global?null!=(a=t.match(n.format))?a.join(" "):void 0:(r=n.format.exec(t),null!=r?(r.shift(),r=$.grep(r,function(e){return e}),r.join(" ")):void 0)):t},$.payment.formatExpiry=function(e){var t,n,r,o;return(n=e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(t=n[1]||"",r=n[2]||"",o=n[3]||"",o.length>0?r=" / ":" /"===r?(t=t.substring(0,1),r=""):2===t.length||r.length>0?r=" / ":1===t.length&&"0"!==t&&"1"!==t&&(t="0"+t,r=" / "),t+r+o):""}}).call(this)},{}],2:[function(e,t,n){function r(e){var t=this,e=e||{};i.publishableKey=t.stripe_key=e.key,t.form=e.form,t.cc_number=o.observable(null),t.cc_expiry=o.observable(null),t.cc_cvv=o.observable(null),t.cc_error_number=o.observable(null),t.cc_error_expiry=o.observable(null),t.cc_error_cvv=o.observable(null),t.initialize_form(),t.error=o.observable(null),t.process_form=function(){var e=a.payment.cardExpiryVal(t.cc_expiry()),n={number:t.cc_number(),exp_month:e.month,exp_year:e.year,cvc:t.cc_cvv()};return t.error(null),t.cc_error_number(null),t.cc_error_expiry(null),t.cc_error_cvv(null),a.payment.validateCardNumber(n.number)?a.payment.validateCardExpiry(n.exp_month,n.exp_year)?a.payment.validateCardCVC(n.cvc)?void i.createToken(n,function(e,n){if(200===e){var r=t.form.find("#id_last_4_digits"),o=t.form.find("#id_stripe_id,#id_stripe_token");r.val(n.card.last4),o.val(n.id),t.form.submit()}else t.error(n.error.message)}):(t.cc_error_cvv("Invalid security code"),!1):(t.cc_error_expiry("Invalid expiration date"),!1):(t.cc_error_number("Invalid card number"),console.log(n),!1)}}var o=e("knockout"),a=(e("./../../../../../bower_components/jquery.payment/lib/jquery.payment.js"),e("jquery")),i=null;"undefined"!=typeof window&&"undefined"!=typeof window.Stripe&&(i=window.Stripe||{}),r.prototype.initialize_form=function(){var e=a("input#cc-number"),t=a("input#cc-cvv"),n=a("input#cc-expiry");e.payment("formatCardNumber"),n.payment("formatCardExpiry"),t.payment("formatCardCVC")},r.init=function(e,t){var n=new GoldView(e),t=t||a("#payment-form")[0];return o.applyBindings(n,t),n},t.exports.PaymentView=r},{"./../../../../../bower_components/jquery.payment/lib/jquery.payment.js":1,jquery:"jquery",knockout:"knockout"}],donate:[function(e,t,n){function r(e){var t=this,e=e||{};a.utils.extend(t,new o.PaymentView(e)),t.dollars=a.observable(),t.logo_url=a.observable(),t.site_url=a.observable(),a.computed(function(){var e=$("input#id_logo_url").closest("p"),n=$("input#id_site_url").closest("p");t.dollars()<400?(t.logo_url(null),t.site_url(null),e.hide(),n.hide()):(e.show(),n.show())}),t.urls_enabled=a.computed(function(){return t.dollars()>=400})}var o=(e("jquery"),e("../../../../core/static-src/core/js/payment")),a=e("knockout");r.init=function(e,t){var n=new r(e),t=t||$("#donate-payment")[0];return a.applyBindings(n,t),n},t.exports.DonateView=r},{"../../../../core/static-src/core/js/payment":2,jquery:"jquery",knockout:"knockout"}]},{},[]);