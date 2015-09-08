// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('arsenal_match_reports.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof arsenal_match_reports.core.cheerio !== 'undefined'){
} else {
arsenal_match_reports.core.cheerio = require("cheerio");
}
if(typeof arsenal_match_reports.core.request !== 'undefined'){
} else {
arsenal_match_reports.core.request = require("request");
}
if(typeof arsenal_match_reports.core.sqlite3 !== 'undefined'){
} else {
arsenal_match_reports.core.sqlite3 = require("sqlite3");
}
arsenal_match_reports.core.init_db = (function arsenal_match_reports$core$init_db(callback){
var db = (new arsenal_match_reports.core.sqlite3.Database("data.sqlite"));
return db.serialize(((function (db){
return (function (){
db.run("CREATE TABLE IF NOT EXISTS data (name TEXT)");

return callback.call(null,db);
});})(db))
);
});
arsenal_match_reports.core.update_row = (function arsenal_match_reports$core$update_row(db,value){
var G__29 = db.prepare("INSERT INTO data VALUES (?)");
G__29.run(value);

G__29.finalize();

return G__29;
});
arsenal_match_reports.core.read_rows = (function arsenal_match_reports$core$read_rows(db){
return db.each("SELECT rowid AS id, name FROM data",(function (err,row){
return cljs.core.println.call(null,row.id,": ",row.name);
}));
});
arsenal_match_reports.core.fetch_page = (function arsenal_match_reports$core$fetch_page(url,callback){
return arsenal_match_reports.core.request.call(null,url,(function (error,response,body){
if(cljs.core.truth_(error)){
return cljs.core.println.call(null,"Error fetching page: ",error);
} else {
return callback.call(null,body);
}
}));
});
arsenal_match_reports.core.run = (function arsenal_match_reports$core$run(db){
return arsenal_match_reports.core.fetch_page.call(null,"https://morph.io",(function (body){
var $_30 = arsenal_match_reports.core.cheerio.load(body);
var title_31 = $_30.call(null,"title").text();
arsenal_match_reports.core.update_row.call(null,db,title_31);

arsenal_match_reports.core.read_rows.call(null,db);

return db.close();
}));
});
arsenal_match_reports.core._main = (function arsenal_match_reports$core$_main(){
var args__3303__auto__ = [];
var len__3300__auto___33 = arguments.length;
var i__3301__auto___34 = (0);
while(true){
if((i__3301__auto___34 < len__3300__auto___33)){
args__3303__auto__.push((arguments[i__3301__auto___34]));

var G__35 = (i__3301__auto___34 + (1));
i__3301__auto___34 = G__35;
continue;
} else {
}
break;
}

var argseq__3304__auto__ = ((((0) < args__3303__auto__.length))?(new cljs.core.IndexedSeq(args__3303__auto__.slice((0)),(0))):null);
return arsenal_match_reports.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3304__auto__);
});

arsenal_match_reports.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return arsenal_match_reports.core.init_db.call(null,arsenal_match_reports.core.run);
});

arsenal_match_reports.core._main.cljs$lang$maxFixedArity = (0);

arsenal_match_reports.core._main.cljs$lang$applyTo = (function (seq32){
return arsenal_match_reports.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32));
});
cljs.core._STAR_main_cli_fn_STAR_ = arsenal_match_reports.core._main;

//# sourceMappingURL=core.js.map