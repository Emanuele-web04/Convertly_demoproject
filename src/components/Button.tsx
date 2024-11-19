interface ButtonProps {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: ButtonProps) => (
  <button
    type="button"
    className="bg-black sm:w-[209px] w-[150px] sm:h-[53px] h-[40px] mt-5 text-white"
    onClick={action}
  >
    {text}
  </button>
);

export default Button;
