class Api::WeightsController < ApplicationController

  def create
    @weight = current_user.weights.new(weight_params)

    if @weight.save
      render json: @weight
    else
      render json: @weight.errors.full_messages, status: 422
    end
  end

  def show
    @weight = Weight.find(params[:id])
    render :show
  end

  def update
    @weight = Weight.find(params[:id])
    if @weight
      if @weight.update_attributes(weight_params)
        render :show
      end
    else
      render json: @weight.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @weights = Weight.where("title LIKE ?", "%#{params[:query]}%").limit(10)
      render :search
    else
      @weights = Weight.all
      render :search
    end
  end


  def index
    if params[:query].present?
      @weights = Weight.where("title LIKE ?", "%#{params[:query]}%").limit(10)
      render :index
    else
      @weights = Weight.all
      render :index
    end
  end

  def destroy
    @weight = current_user.weights.find(params[:id])
    @weight.destroy
    render json: @weight
  end

  private

  def weight_params
    params.require(:weight).permit(:username, :user_id, :weight, :date)
  end
end
