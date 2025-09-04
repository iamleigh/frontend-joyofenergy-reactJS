const Button = ({ label }) => {
    return (
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          {label}
        </button>
    );
};

export default Button;
