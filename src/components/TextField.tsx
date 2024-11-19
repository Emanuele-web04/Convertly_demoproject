
interface TextFieldProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({ id, value, onChange }: TextFieldProps) => (
  <div className="py-3" >
    <div className="w-full">
    <label className="block text-sm font-medium">Amount</label>
      <input
        id={id}
        type="number"
        placeholder="0.00"
        className="w-full p-2 border rounded-[5px]"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default TextField;
