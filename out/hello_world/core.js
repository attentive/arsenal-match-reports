// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
hello_world.core._main = (function hello_world$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___29 = arguments.length;
var i__3301__auto___30 = (0);
while(true){
if((i__3301__auto___30 < len__3300__auto___29)){
args__3303__auto__.push((arguments[i__3301__auto___30]));

var G__31 = (i__3301__auto___30 + (1));
i__3301__auto___30 = G__31;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((0) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((0)),(0))):null);
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3304__auto__);
});

hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world!");
});

hello_world.core._main.cljs$lang$maxFixedArity = (0);

hello_world.core._main.cljs$lang$applyTo = (function (seq28){
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28));
});
cljs.core._STAR_main_cli_fn_STAR_ = hello_world.core._main;

//# sourceMappingURL=core.js.map