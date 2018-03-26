class BirthdaysController < ApplicationController
  def today
    @today = User.find_by_sql(
      "SELECT * FROM users " +
      "WHERE MONTH(birthday) = #{Date.today.mon} " +
      "AND DAY(birthday) = #{Date.today.mday} " +
      "ORDER BY created_at DESC" )
  end
end
