(ns arsenal-match-reports.core
    (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args]
    (println "Arsenal Match Reports: Hello world!"))

(set! *main-cli-fn* -main)

