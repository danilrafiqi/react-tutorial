import About from "../../containers/pages/about";
import Blog from "../../containers/pages/blog";
import Contact from "../../containers/pages/contact";
import Home from "../../containers/pages/home";
import Post from "../../containers/pages/post";
import PostForm from "../../containers/pages/post/FormPost";
import Privacy from "../../containers/pages/privacy";
import Todo from "../../containers/pages/todo";

const Router = [
    {
        component: Home,
        path: "/",
        label: "Home",
    },
    {
        component: About,
        path: "/about",
        label: "About",
    },
    {
        component: Privacy,
        path: "/privacy",
        label: "Privacy",
    },
    {
        component: Contact,
        path: "/contact",
        label: "Home",
    }, {
        component: Blog,
        path: "/blog/:id",
        label: "Blog",
    }, {
        component: Todo,
        path: "/todo",
        label: "Todo",
    }, {
        component: Post,
        path: "/post",
        label: "Post",
    }, {
        component: PostForm,
        path: "/post/create",
        label: "Post Create",
    }
]
export default Router