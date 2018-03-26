module BirthdaysHelper
  def current_age(today)
    age = Date.today.year - today.birthday.year
  end
end
