import React from 'react'

const SkeletonLoader = (props) => {

  const { type } = props;

  const Sline = () => (
    <div className={"skeleton-line"}></div>
  )

  const Spulse = () => (
    <div className={"skeleton-pulse"}></div>
  )

  return (
    <div>

      {type == "line" ? < Sline /> : <Spulse />}

      <style jsx>
        {`
          .skeleton-pulse{
            display: inline-block;
            height: 100%;
            width: 100%;
            background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
            background-size: 400% 400%;
            animation: pulse 1.2s ease-in-out infinite;
            @keyframes pulse {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: -135% 0%;
              }
            }
          }
          .skeleton-line{
            width: 5.5em;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  )
}

export default SkeletonLoader
