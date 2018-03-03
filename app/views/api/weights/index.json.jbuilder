@weights.each do |weight|
  json.set! weight.id do
    json.partial! 'weight', weight: weight
  end
end