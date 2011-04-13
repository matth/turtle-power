# Bundler
require 'rubygems'
require "bundler/setup"
Bundler.require(:default, :development)

# Load tasks
load 'jasmine/tasks/jasmine.rake'

# Generate parser
file "lib/javascripts/language/Parser.js" => ["lib/javascripts/language/logo.g"] do
  if ENV['PATH'].split(':').any? {|folder| File.exists?(folder+'/jison')}
    system "jison -v lib/javascripts/language/logo.g"
    sh "mv logo.js lib/javascripts/language/Parser.js"
  else
    puts "Jison is not installed. Try running `npm install jison`."
  end
end

desc "Compile parser from grammar"
task :compile => "lib/javascripts/language/Parser.js"


# Website
namespace :site do        
   desc "Generate website"
   task :generate do
      sh "bundle exec jekyll site site/_site"
   end
end