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
    </nav >
  )
}


class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      right: "0px"
    }
    this.handleMenuPosition = this.handleMenuPosition.bind(this)
  }

  handleMenuPosition = (event) => {
    const mediaMatch = window.matchMedia("(max-width: 799px)")
    if (event.target.className === 'fa-solid fa-bars') {
      console.log(event.target)
      this.setState({ right: "0px" })
    } else if (event.target.className === 'close-menu-btn') {
      this.setState({ right: "-1000px" })
    } else if (!mediaMatch) {
      this.setState({ right: "0px" })
    }
  }
  render() {
    const { right } = this.state
    return (
      <div className="mobile-menu-area" onClick={this.handleMenuPosition}>
        <ul className="menu-items" style={{ right }}>
          <li className="menu-item">Item 1</li>
          <li className="menu-item">Item 2</li>
          <li className="menu-item">Item 3</li>
          <li className="menu-item">Item 4</li>
        </ul>
        <span className="close-menu-btn" style={{ right }}>X</span>
        <span><i className="fa-solid fa-bars"></i></span>
      </div>
    )
  }
}



class Welcome extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Welcome Message"
    }
    this.changeWelcomeMessage = this.changeWelcomeMessage.bind(this)
  }

  changeWelcomeMessage = () => {
    this.setState({ title: "Have a GoodTime!" })
  }

  render() {
    return (
      <div className="change-welcome-message" onClick={this.changeWelcomeMessage}>
        <p>{this.state.title}</p>
      </div >
    )
  }
}



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHide: true
    }
    this.callToAction = this.callToAction.bind(this)
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
          <div className="content-wrapper-hidden" style={
            isHide ? { display: "none" } : { display: "flex" }}>
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

const App = () => {
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

