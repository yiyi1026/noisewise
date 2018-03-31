class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def index
    if params[:query].present?
      @todos = Todo.where("user_id LIKE ?", "%#{params[:query]}%")
      # .limit(10)
      render :index
    else
      @todos = Todo.all
      render :index
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    end

  end

  def destroy
    @todo = Todo.find(params[:id])
    p 'inside destroy'
    p @todo
    @todo.destroy
    render json: @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:user_id, :title, :done, :date, :tag)
  end
end
