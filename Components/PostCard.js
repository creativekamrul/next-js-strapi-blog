import React from "react";
import styles from "@/Styles/AllPosts.module.css";
import Link from "next/link";
const PostCard = ({ postData }) => {
  const { Title, PublishDate, Image, slug } = postData.attributes;
  return (
    <Link href={`/AllPosts/${postData.id}`}>
      <div
        className={styles.post_card}
        style={{ backgroundImage: `url(${Image.data.attributes.url})` }}
      >
        <div>
          <h2>{Title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
