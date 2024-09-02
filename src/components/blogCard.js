import Image from 'next/image';
import "../styles/blogCard.css";
import Link from "next/link";

const ImageCard = ({ imageSrc, title, postedDate }) => {
  return (
    <Link className='link-blog' href="#">
    <div className="blog-card">
      <Image src={imageSrc}/>
      <div className="blog-card-content">
        <h2 className='blog-title'>{title}</h2>
        <p>{postedDate}</p>
      </div>
    </div>
    </Link>
  );
};

export default ImageCard;