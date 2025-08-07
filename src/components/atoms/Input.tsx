"use cleint"


interface InputProps {
    placeholder : string;
    onChange : ( e : React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type: "email" | "password" | "checkbox" | "text" ;
}
export const Input : React.FC<InputProps> = ({
     placeholder ,
    onChange,
    value,
    type,
}) => {

    return(
      <div
      className="relative" 
      >

        <input 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full p-4 rounded  text-white bg-neutral-800/50 "

        />

      </div>

    )
}