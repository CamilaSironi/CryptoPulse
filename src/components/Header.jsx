import logo from '../assets/cryptopulse_logo.png'

export default function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='image logo' />
        <input>Search markets or assets...</input>
        <p>Notification</p>
    </div>
  )
}
