import Nav from "../../components/nav";
import Recipe from "../../components/recipe";
import Footer from "../../components/footer";

const RecipePage = () => {
    return (
        <div>
        {/* Navigation Bar */}
        <Nav />
        {/* End Navigation Bar */}
        <div class="yellow_bg">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <h2>Our Recipes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Recipe */}
        <Recipe />
        {/* End Recipe */}
  
        {/* Footer */}
          <Footer />
        {/* Footer End */}
      </div>
    )
}

export default RecipePage
