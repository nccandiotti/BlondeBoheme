require 'square'
client = Square::Client.new(
    access_token: ENV.fetch('SQUARE_ACCESS_TOKEN'),
    environment: 'sandbox'
  )
  client = Square::Client.new(
    access_token: ENV.fetch('SQUARE_ACCESS_TOKEN'),
    environment: 'sandbox'
  )
  
  result = client.locations.list_locations
  
  if result.success?
    result.data.locations.each do |loc|
      printf("%s: %s, %s, %s\n",
        loc[:id],
        loc[:name],
        loc[:address][:address_line_1],
        loc[:address][:locality])
    end
  elsif result.error?
    result.errors.each do |error|
      warn error[:category]
      warn error[:code]
      warn error[:detail]
    end
  end
  