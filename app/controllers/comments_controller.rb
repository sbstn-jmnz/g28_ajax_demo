class CommentsController < ApplicationController
  def index
    @comments = unless params[:q]
                  Comment.all
                else
                  Comment.where('content like ?', "%#{params[:q]}%")
                end
  end

  def create
    @comment = Comment.new(content: params[:comment])
    @comment.save
  end
end
