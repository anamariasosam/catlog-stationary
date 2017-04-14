class StoreSerializer < UserSerializer
  attributes :tag_list

  attribute :links do
    id = object.id
    {
      self: api_store_path(id),
      products: api_store_products_path(id)
    }
  end
end
