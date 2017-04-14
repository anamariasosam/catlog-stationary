Rails.application.routes.draw do
  root 'pages#index'

  get '*path', to: 'pages#index', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end

  namespace :api, defaults: { format: :json } do
    scope module: :v1 do
      get '/products/recents/', to: 'products#recents'
      get '/stores/:id/products', to: 'stores#products', as: :store_products
      get '/stores/tags/:tag', to: 'stores#tag', as: :tag

      resources :sessions, :only => [:create, :destroy]
      resources :users, except: [:new]

      namespace :customers do
        resources :orders
      end

      namespace :stores do
        resources :products, except: [:show, :new]
        resources :orders, except: [:create, :new]
      end

      resources :customers, :only => [:show]
      resources :stores, :only => [:index, :show]
      resources :products, :only => [:index, :show]
      resources :categories, :only => [:index, :show]
      resources :tags, :only => [:index]
    end
  end
end
