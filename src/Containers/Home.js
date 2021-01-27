import React from "react";
import CategorieInfo from "../components/Maps/CategoriesInfo";
import Axios from "../api/api";
import "./Home.scss";

const Home = (props) => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getCategories();
  }, []);
  async function getCategories() {
    try {
      const { data } = await Axios.get("/get_categories");
      if (data.length !== 0) {
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h3 className="heading">دسته بندی</h3>
      <div className="container">
        {/* Making Each Categorie Unique in a wrapper cmp */}
        {categories.length !== 0 &&
          categories.map((categorie) => (
            <React.Fragment key={categorie.id}>
              <CategorieInfo categorie={categorie} {...props} />
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Home;
