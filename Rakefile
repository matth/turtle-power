# Bundler
require 'rubygems'
require "bundler/setup"
Bundler.require(:default, :development)

# Load tasks
load 'jasmine/tasks/jasmine.rake'
Dir.glob('lib/tasks/*.rake').each do |task| 
  load task
end

# Generate parser
file "public/javascripts/language/Parser.js" => ["public/javascripts/language/logo.g"] do
  if ENV['PATH'].split(':').any? {|folder| File.exists?(folder+'/jison')}
    system "jison -v public/javascripts/language/logo.g"
    sh "mv logo.js public/javascripts/language/Parser.js"
  else
    puts "Jison is not installed. Try running `npm install jison`."
  end
end

desc "Compile parser from grammar"
task :compile => "public/javascripts/language/Parser.js"

