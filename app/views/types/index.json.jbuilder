json.array!(@types) do |ti|
  json.extract! ti, :id, :label, :created_at, :updated_at
end