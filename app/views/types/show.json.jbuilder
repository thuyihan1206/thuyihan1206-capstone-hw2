json.array!(@things) do |ti|
  json.extract! ti, :id, :name, :created_at, :updated_at
end