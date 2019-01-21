class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render '/'
    else
      render json {base: 'wrong username or password'}, status: 401
    end
  end

  def destroy
    if (logged_in?) 
      logout
      render '/'
    else
      render json {base: 'not logged in'}, status: 404
    end
  end
end