import BlogCard from "./blogCard";
import image from "../../public/bojack.png";
import image2 from "../../public/bo.png";

export default function Blog() {
    return (
      
      <div className="blog">
        <h2>Recent Posts</h2>
        <BlogCard
        imageSrc={image}
        title="How to make a CRUD Application in Springboot MVC?"
        postedDate="12-July-2024"
      />
        <BlogCard
        imageSrc={image2}
        title="How to make a CRUD Application in Springboot MVC?"
        postedDate="09-July-2024"
      />
        
      </div>
      
    );
  }
  