require 'rack'

use(Class.new do
  def initialize(app)
    @app = app
  end
  def call(env)   
    if env['PATH_INFO'] == "/"
      return [302, { 'Location' => '/index.html', 'Content-Type' => 'text/plain'}, ''] 
    else
      @app.call(env)
    end
  end
end) 

run Rack::File.new('public')