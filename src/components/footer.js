import "../styles/footer.css";
import { LinkedinFilled, GithubFilled, CodeFilled} from "@ant-design/icons";
export default function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <LinkedinFilled className="lg"/>
          <GithubFilled className="lg"/>
          <CodeFilled className="lg"/>
        </div>
        <p>Copyright © 2024 REESAB</p>
      </div>
    );
  }