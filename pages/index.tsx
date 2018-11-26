import Head from 'next/head'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
// import TitleAndMetaTags from '@components/TitleAndMetaTags';
// import { BlogCard } from '@components/BlogCard';
// import { box } from '@styles/box';
// import { text } from '@styles/text';
// import { container } from '@styles/container';
// import { link } from '@styles/link';

// import type { Post } from '.contentlayer/types';
// import { allPosts } from '.contentlayer/data';

export default function Home(/*{ posts }: { posts: Post[] }*/) {
  const siteTitle = 'Online Bible App'
  return (
    <>
      {/* <TitleAndMetaTags /> */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quae culpa, vitae deleniti, numquam repellat nisi cupiditate pariatur exercitationem molestiae iure veritatis, ex tempore repellendus maiores excepturi amet provident?
          <a href="#">Debitis</a>.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <a href="https://nextjs.org/learn">A, rerum?</a>.
        </p>
      </section>
    </>
  );
}

// export function getStaticProps() {
//   const sortedPosts = allPosts.sort(
//     (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
//   );
//   return { props: { posts: sortedPosts } };
// }
