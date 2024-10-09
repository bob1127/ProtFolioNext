// components/Products.jsx
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      nodes {
        id
        name
        price
        image {
          sourceUrl
        }
      }
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-list">
      {data.products.nodes.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image.sourceUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
