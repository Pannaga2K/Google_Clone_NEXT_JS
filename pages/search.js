import Head from 'next/head';
import Header from '../components/Header';
import {API_KEY, CONTEXT_KEY} from "../keys";
import Response from '../Response';
import { useRouter } from "next/router";
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter();

    // console.log(results);

    return (
        <div className="bg-dark-900 text-gray-500" >
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <SearchResults results={results} />
        </div>
    )
}

// SERVER SIDE RENDERING
export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());
// GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

    return {
        props: {
            results: data
        }
    }
}

export default Search;
