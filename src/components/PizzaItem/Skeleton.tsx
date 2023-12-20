import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={320}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="135" cy="135" r="135" />
        <rect x="1" y="279" rx="0" ry="0" width="280" height="27" />
        <rect x="0" y="317" rx="0" ry="0" width="280" height="88" />
        <rect x="2" y="417" rx="0" ry="0" width="127" height="45" />
        <rect x="142" y="417" rx="0" ry="0" width="140" height="45" />
    </ContentLoader>
)

export default Skeleton

