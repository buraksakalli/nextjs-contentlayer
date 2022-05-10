import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Card } from "components";

interface IProps {
  posts: Array<Post>;
}

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const Home = ({ posts }: IProps) => {
  return (
    <div className="container mx-auto text-white mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, idx: any) => (
          <Card key={idx} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
