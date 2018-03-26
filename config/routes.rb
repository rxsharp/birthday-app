Rails.application.routes.draw do
  get 'birthdays/today'

  resources :users
  root 'home#index'
end
