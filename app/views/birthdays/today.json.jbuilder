json.array! @today do |today|
  json.id today.id
  json.name today.name
  json.birthday today.birthday
  json.age current_age(today)
end
