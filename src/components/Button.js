import React from 'react'

const Button = (props) => {

  const {
    text,
    textColor,
    fontWeight,
    backgroundColor,
    gradient,
    gradientColor,
    type
  } = props



  return (
    <div>

      <button
        type={type ? type : "button"}
        className={gradient == true ? "btn gradient-1" : "btn"}
      // onClick={}
      >
        {text ? text : "Button"}
      </button>

      <style jsx>
        {`
          .btn {
            flex: 1 1 auto;
            margin: 10px;
            padding: 15px;
            text-align: center;
            text-transform: uppercase;
            font-weight: ${fontWeight ? fontWeight : 600} ;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            border-radius: 50px;
            border: none;
          }
          .btn:hover {
            background-position: right center; /* change the direction of the change here */
          }
          .btn:focus {
            outline:0;
          }
          .gradient-1 {
            background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
          }
        `}
      </style>
    </div>
  )
}

export default Button
