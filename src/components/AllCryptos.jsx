import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useFetchCrypto } from "../hooks/useFetchCrypto"
import Pagination from "../components/Pagination"
import CryptoItem from "./CryptoItem"

export default function AllCryptos() {

    const LIMIT = 10;
    let [searchParams, setSearchParams] = useSearchParams();
    let page = Number(searchParams.get("page")) || 1;
    let { data, loading, error } = useFetchCrypto({
        page,
        limit: LIMIT,
        type: "all"
    })

    let handlePageChange = (newPage) => {
        if (newPage < 1) return
        if (isLastPage && newPage > page) return
        setSearchParams({ page: newPage })
    };

    let isLastPage =   
        !loading &&
        data &&
        data.length === 0;

    return (
        <div>
            <h1>All cryptos</h1>

            {loading && <p>Loading markets...</p>}
            {error && <p>Error: {error}</p>}

            {data && (
                <>

                    <div className="cryptos-grid">
                        {data.map((coin) => (
                        console.log(coin)
                        ))}
                    </div>

                    <Pagination
                        currentPage={page}
                        isLastPage={isLastPage}
                        onPageChange={handlePageChange}
                        disabled={loading}
                    />
                </>
            )}
        </div>
    )
}

