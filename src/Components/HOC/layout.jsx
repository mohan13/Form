
import Toolbar from '../Navigation/Toolbar/toolbar'
const Layout = (props) => {
  return (
    <div>
        <Toolbar/>
        <div>{props.children}</div>
    </div>
  )
}

export default Layout