import { Router} from "@reach/router"
import Home from '../pages/home'
import AboutPage from '../pages/about'
import BlogPage from '../pages/blog'
import RecipePage from '../pages/recipe'
import ContactPage from '../pages/contact'

const AppRouter = () => {
    return (
        <Router>
            <Home path="/" />
            <AboutPage path="/about" />
            <BlogPage path="/blog" />
            <RecipePage path="/recipe" />
            <ContactPage path="/contact" />
        </Router>
    )
}

export default AppRouter
