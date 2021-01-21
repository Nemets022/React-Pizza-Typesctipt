import React from 'react'
import ContentLoader from "react-content-loader"

export const LoadingBlock = () => (
    <div className="pizza-block">
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="130" cy="130" r="130" />
            <rect x="0" y="286" rx="6" ry="6" width="275" height="24" />
            <rect x="0" y="330" rx="6" ry="6" width="272" height="83" />
            <rect x="213" y="351" rx="0" ry="0" width="0" height="1" />
            <rect x="8" y="426" rx="6" ry="6" width="80" height="20" />
            <rect x="122" y="417" rx="25" ry="25" width="148" height="38" />
        </ContentLoader>
    </div>

)