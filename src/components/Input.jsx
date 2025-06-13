export default function Input({ label, id, type, ...props }) {
  let input = (
    <input
      id={id}
      type={type}
      {...props}
      className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    />
  );
  if (type === "textarea") {
    input = (
      <textarea
        id={id}
        {...props}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    );
  }
  return (
    <>
      <label
        id={"label-" + id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>

      {input}
    </>
  );
}
