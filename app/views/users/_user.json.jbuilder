json.set! :user do
  json.set! :id, user.id
  json.set! :name, user.name
  json.set! :full_birthday, user.birthday
  json.set! :birthday_month, user.birthday.mon
  json.set! :birthday_day, user.birthday.mday
  json.set! :age, current_age(user)
end
