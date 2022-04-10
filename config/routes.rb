Rails.application.routes.draw do
  resources :user_consults
  resources :student_inquiries
  resources :services

  resources :appointments
  resources :users
  resources :salons
  get '/me', to: "users#me"
  get '/luxuryServices', to: 'services#luxuryServices'
  get '/therapeuticServices', to: 'services#therapeuticServices'
  get '/simpleServices', to: 'services#simpleServices'
  

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  
  get '/me', to: 'users#me'

  # devise_for :accounts

  # get 'welcome/home'
  # get 'welcome/app'
  

  # get 'welcome/home'
  # get 'welcome/about '
  # get '/app', to: 'welcome#app', as: 'app'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # root to: "public#home"
  # root to: "home#index" ----- devise example
end
