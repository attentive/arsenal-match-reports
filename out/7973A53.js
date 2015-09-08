goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35__i = 0, G__35__a = new Array(arguments.length -  0);
while (G__35__i < G__35__a.length) {G__35__a[G__35__i] = arguments[G__35__i + 0]; ++G__35__i;}
  args = new cljs.core.IndexedSeq(G__35__a,0);
} 
return G__34__delegate.call(this,args);};
G__34.cljs$lang$maxFixedArity = 0;
G__34.cljs$lang$applyTo = (function (arglist__36){
var args = cljs.core.seq(arglist__36);
return G__34__delegate(args);
});
G__34.cljs$core$IFn$_invoke$arity$variadic = G__34__delegate;
return G__34;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38__i = 0, G__38__a = new Array(arguments.length -  0);
while (G__38__i < G__38__a.length) {G__38__a[G__38__i] = arguments[G__38__i + 0]; ++G__38__i;}
  args = new cljs.core.IndexedSeq(G__38__a,0);
} 
return G__37__delegate.call(this,args);};
G__37.cljs$lang$maxFixedArity = 0;
G__37.cljs$lang$applyTo = (function (arglist__39){
var args = cljs.core.seq(arglist__39);
return G__37__delegate(args);
});
G__37.cljs$core$IFn$_invoke$arity$variadic = G__37__delegate;
return G__37;
})()
;

return null;
});
