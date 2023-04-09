Rails.application.routes.draw do
  # get 'pages/Home'
  root 'pages#home'
  get '*path', to: 'pages#home', via: :all
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
