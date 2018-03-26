require 'test_helper'

class BirthdaysControllerTest < ActionDispatch::IntegrationTest
  test "should get today" do
    get birthdays_today_url
    assert_response :success
  end

end
