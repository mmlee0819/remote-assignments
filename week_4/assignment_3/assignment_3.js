const Header = () => {
  return (
    <header>
      <Nav />
      <Welcome />
    </header>
  )
}

const Nav = () => {
  return (
    <nav>
      <h1 className="website-title">{'Website Title / Logo'}</h1>
      <Menu />
    </nav>
  )
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };
  }

  render() {
    return (
      <div className="mobile-menu-area" >
        <ul className="menu-items">
          <li className="menu-item">Item 1</li>
          <li className="menu-item">Item 2</li>
          <li className="menu-item">Item 3</li>
          <li className="menu-item">Item 4</li>
        </ul>
        <span className="close-menu-btn" >X</span>
        <span><i className="fa-solid fa-bars" ></i></span>
      </div>
    )
  }
}

const Welcome = () => {
  return (
    <div className="welcome">
      <p>Welcome Message</p>
    </div>
  )
}



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHide: true,
    }
    this.callToAction = this.callToAction.bind(this);
  }

  callToAction = () => {
    this.setState((state) => ({ isHide: !state.isHide }))
  }


  render() {
    const { isHide } = this.state

    return (
      <main>
        <section>
          <h2 className="section-title">Section Title</h2>
          <ContentWrapper />
          <div className="action-btn" onClick={this.callToAction}>Call to Action</div>
          <br></br>
          <div className="content-wrapper-hidden" style={
            isHide ? { display: "none" } : { display: "inline-flex" }}>
            <br></br>
            <div className="content-box">Content Box 5</div>
            <div className="content-box">Content Box 6</div>
            <div className="content-box">Content Box 7</div>
            <div className="content-box">Content Box 8</div>
          </div>
        </section>
      </main >
    )
  }
}

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div className="content-box">Content Box 1</div>
      <div className="content-box">Content Box 2</div>
      <div className="content-box">Content Box 3</div>
      <div className="content-box">Content Box 4</div>
    </div>
  )
}

// const ContentWrapperHidden = () => {
//   return (
//     <div className="content-wrapper-hidden" >
//       <div className="content-box">Content Box 5</div>
//       <div className="content-box">Content Box 6</div>
//       <div className="content-box">Content Box 7</div>
//       <div className="content-box">Content Box 8</div>
//     </div >
//   )
// }

const App = (props) => {
  return (
    <React.StrictMode>
      <Header />
      <Main />
    </React.StrictMode>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
) 