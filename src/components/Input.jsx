import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, id, type, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  let input = (
    <input ref={ref} id={id} type={type} {...props} className={classes} />
  );
  if (type === "textarea") {
    input = <textarea ref={ref} id={id} {...props} className={classes} />;
  }
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        id={"label-" + id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>

      {input}
    </p>
  );
});

export default Input;
