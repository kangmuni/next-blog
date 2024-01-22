import { getNonFeaturedPosts } from '../../service/posts';
import MultiCarousel from './MultiCarousel';
import PostsCard from './PostCard';
import PostsGrid from './PostsGrid';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="w-9/12 mb-9">
      <p className="text-xl font-semibold pb-6">📎 All Topics</p>
      <MultiCarousel>
        {posts.map((post) => (
          <PostsCard key={post?.title} post={post}></PostsCard>
        ))}
      </MultiCarousel>
    </section>
  );
}
