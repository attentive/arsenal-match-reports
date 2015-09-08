(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'arsenal-match-reports.core
                       :output-to "scraper.js"
                       :target :nodejs})

