# == Route Map
#
#           Prefix Verb   URI Pattern                 Controller#Action
#        api_users POST   /api/users(.:format)        api/users#create {:format=>:json}
#         api_user GET    /api/users/:id(.:format)    api/users#show {:format=>:json}
#  new_api_weights GET    /api/weights/new(.:format)  api/weights#new {:format=>:json}
# edit_api_weights GET    /api/weights/edit(.:format) api/weights#edit {:format=>:json}
#      api_weights GET    /api/weights(.:format)      api/weights#show {:format=>:json}
#                  PATCH  /api/weights(.:format)      api/weights#update {:format=>:json}
#                  PUT    /api/weights(.:format)      api/weights#update {:format=>:json}
#                  DELETE /api/weights(.:format)      api/weights#destroy {:format=>:json}
#                  POST   /api/weights(.:format)      api/weights#create {:format=>:json}
#             root GET    /                           static_pages#root
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :weights
  end

  root "static_pages#root"
end
