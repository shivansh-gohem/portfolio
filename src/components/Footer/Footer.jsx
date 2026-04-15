import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          © {year} Shivansh Sahu. Built with intention.
        </div>
        <div className="footer__built">
          JEC Jabalpur — <span className="footer__accent">CSE 2027</span>
        </div>
      </div>
    </footer>
  )
}
