Rails.application.routes.draw do
  root 'pages#index'

  get '*path', to: 'pages#index', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end

  namespace :api, defaults: { format: :json } do
    scope module: :v1 do
      resources :sessions, :only => [:create, :destroy]
      resources :users
      resources :customers

      namespace :stores do
        resources :products, except: [:show]
      end

      resources :stores
      resources :products

      resources :categories, :only => [:index, :show]

      get '/stores/tags/:tag', to: 'stores#tag', as: :tag
      resources :tags, :only => [:index]
    end
  end
end
