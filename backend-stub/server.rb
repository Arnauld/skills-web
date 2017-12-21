# myapp.rb
require 'sinatra'

#set :bind, '0.0.0.0'
set :port, 8080

before do
    logger.info "Request '#{request.path_info}', referrer: '#{request.referrer}'"
end

after do
    logger.info "Response #{response.status}"
end

get '/api/todos' do
  'Hello world!'
end