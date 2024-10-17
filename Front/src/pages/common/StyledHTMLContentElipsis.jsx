import PropTypes from 'prop-types';

const StyledHTMLContentElipsis = ({ htmlContent }) => {
    return (
        <div className="styled-html-content">
            <style>{`
        .styled-html-content h1 {
            font-size: 2em !important;
            font-weight: bold !important;
            margin-bottom: 0.5em !important;
            color: #333 !important;
        }
        .styled-html-content h2 {
            font-size: 1.5em !important;
            font-weight: bold !important;
            margin-bottom: 0.5em !important;
            color: #444 !important;
        }
        .styled-html-content h3 {
            font-size: 1.17em !important;
            font-weight: bold !important;
            margin-bottom: 0.5em !important;
            color: #555 !important;
        }
        .styled-html-content p {
            margin-bottom: 1em !important;
            font-size: 1em !important;
        }
        .styled-html-content ul, .styled-html-content ol {
            list-style-position: inside !important;
            margin-left: 1em !important;
            margin-bottom: 1em !important;
        }
        .styled-html-content ul {
            list-style-type: disc !important;
        }
        .styled-html-content ol {
            list-style-type: decimal !important;
        }
        .styled-html-content strong {
            font-weight: bold !important;
        }
        .styled-html-content li {
            margin-bottom: 0.5em !important;
        }
        .styled-html-content li p {
            display: inline !important;
            margin: 0 !important;
        }
        `}</style>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

StyledHTMLContentElipsis.propTypes = {
    htmlContent: PropTypes.string.isRequired,
};

export default StyledHTMLContentElipsis