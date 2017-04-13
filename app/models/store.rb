class Store < User
  acts_as_taggable_on :tags

  scope :by_join_date, ->{ order('created_at DESC') }

  has_many :products, dependent: :destroy
end
