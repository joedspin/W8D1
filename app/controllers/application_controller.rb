class ApplicationController < ActionController::Base

  helper_method :current_user, :require_logged_in!, :logged_in?
  
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token]
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end


  def require_logged_in!
    render json: { base: ['invalid credentials'] }, status: 401 unless logged_in?
  end
end
