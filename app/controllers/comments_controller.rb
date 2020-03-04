class CommentsController < ApplicationController
  before_action :set_comment, only: [:destroy, :edit, :update, :show]

  def index
    @comments = unless params[:q]
                  Comment.all
                else
                  Comment.where('content like ?', "%#{params[:q]}%")
                end
  end

  def create
    @comment = Comment.new(content: comment_params)
    @comment.save
  end

  def show
  end

  def destroy
    @comment.destroy
  end

  def edit
  end

  def update
    @comment.content = comment_params
    @comment.save
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment)
  end
end
