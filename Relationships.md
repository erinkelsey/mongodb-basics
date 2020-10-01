# Relationships

How to show relationships between MongoDB documents.

## Embedding Documents:

Embed documents inside other documents (i.e. reviews array), to establish relationship

    > db.products.insert(
      {
        _id: 3,
        name: "Eraser",
        price: 1.30,
        stock: 43,
        reviews: [
          {
            authorName: "Sally",
            rating: 5,
            review: "Best eraser ever!"
          },
          {
            authorName: "John",
            rating: 5,
            review: "Awesome eraser!"
          }
        ]
      }
    )
