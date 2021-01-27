import React from "react";
import Axios from "../api/api";
import ProductInfo from "../components/Maps/ProductsInfo";
import Pagination from "../components/Paginate/Pagination";
import "./Products.scss";

const Products = ({ match }) => {
  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage] = React.useState(8);

  React.useEffect(() => {
    let id = match.params.id;
    getProducts(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getProducts = async (id) => {
    try {
      const { data } = await Axios.get(`get_product?categories=${id}`);
      if (data.list.length !== 0) {
        setProducts(data.list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="all-prods">
        {/* Making Each Product Unique in a wrapper cmp */}
        {products.length !== 0 &&
          currentProducts.map((product) => (
            <React.Fragment key={product.id}>
              <ProductInfo product={product} />
            </React.Fragment>
          ))}
      </div>
        <Pagination
          procutsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
    </>
  );
};

export default Products;
