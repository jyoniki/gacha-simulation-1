Rails.application.routes.draw do
  #resources :gachas, only: :index

  root 'gachas#index'
end
