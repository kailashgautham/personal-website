import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date'

export default function Post({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1 className="headingXl">{data.title}</h1>
        <div className="lightText">
          <Date dateString={data.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.text }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const data = await getPostData(params.id)
    return {
        props: {
        data
        }
    }
}

