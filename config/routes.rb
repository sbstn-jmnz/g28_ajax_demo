Rails.application.routes.draw do
  
  resources :comments, only: [:index, :create]
  get 'mushrooms/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
