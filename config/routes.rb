Rails.application.routes.draw do

  devise_for :accounts

  # get 'welcome/home'
  # get 'welcome/app'
  

  # get 'welcome/home'
  # get 'welcome/about '
  # get '/app', to: 'welcome#app', as: 'app'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: "public#home"
  # root to: "home#index" ----- devise example
end