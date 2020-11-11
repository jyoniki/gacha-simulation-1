Rails.application.routes.draw do
  resources :gachas, only: :index
end
