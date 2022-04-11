import {useRouter} from 'next/router';
export default function ProjectPage(){
    const router = useRouter();
    return(
        <>
            <h2>{router.query.searchPage} is Ready</h2>
        </>
    );
}