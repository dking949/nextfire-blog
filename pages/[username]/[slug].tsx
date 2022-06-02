import styles from '@styles/Post.module.css';
import { UserContext } from '@lib/context';
import { firestore, getUserWithUsername, postToJSON } from '@lib/firebase';
import { doc, getDocs, getDoc, collectionGroup, query, limit, getFirestore } from 'firebase/firestore';

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if (userDoc) {
    // const postRef = userDoc.ref.collection('posts').doc(slug);
    const postRef = doc(getFirestore(), userDoc.ref.path, 'posts', slug);

    // post = postToJSON(await postRef.get());
    post = postToJSON(await getDoc(postRef) );

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 10000,
  };
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const q = query(
    collectionGroup(getFirestore(), 'posts'),
    limit(20)
  )
  const snapshot = await getDocs(q);

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return { 
    paths,
    fallback: 'blocking',
  };
}

export default function PostPage() {
  return (
    <main></main>
  )
}
