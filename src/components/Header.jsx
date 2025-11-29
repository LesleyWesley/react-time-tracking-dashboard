export default function Header() {
  return (
    <header>
      <div className="profile-section">
        <div className="container">
          <img src="./src/assets/image-jeremy.png" alt="Profile picture for Jeremy Robson" />
          <h1>Report for <span className="name">Jeremy Robson</span></h1>
        </div>
      </div>
      <div className="container">
        <div className="button-section">
          <button type="button">Daily</button>
          <button type="button">Weekly</button>
          <button type="button">Monthly</button>
        </div>
      </div>
    </header>
  )
}
