class ApplicationController < ActionController::Base
  include Authenticable
  include Rails::Pagination
end
