import React from 'react'
import { css } from '@emotion/react'

/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */
const styles = css`

    display: inline-block;
    text-align: center;

    @keyframes bounce-delay {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1.0);
        }
    }

    .dot {
        display: inline-block;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        margin: 6px; /* (width / 2) or (height / 2) */
        background-color: #333;
        animation: bounce-delay infinite 1.4s ease-in-out both;
    }

    .dot:nth-of-type(1) {
        animation-delay: -0.32s;
    }

    .dot:nth-of-type(2) {
        animation-delay: -0.16s;
    }
`

export default function Spinner() {
    return (
        <div css={styles}>
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </div>
    )
}
