class StoreSerializer < UserSerializer
  attributes :tag_list

  link(:self) { api_store_path(object.id) }
  link(:products) { api_store_products_path(object.id) }
end
