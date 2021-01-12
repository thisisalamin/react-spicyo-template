import Nav from "../../components/nav";
import Blog from "../../components/blog";
import Footer from "../../components/footer";

const BlogPage = () => {
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
                  <h2>Our Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Blog */}
        <Blog />
        {/* End Blog */}
  
        {/* Footer */}
          <Footer />
        {/* Footer End */}
      </div>
    )
}

export default BlogPage
